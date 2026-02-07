import { CreateUserSchema } from "@repo/common/types";
import { prisma } from "@repo/database/client";
import bcrypt from "bcrypt";

export default async function SignUp(req: any, res: any) {
  const username = req.body["username"];
  const password = req.body["password"];

  if (!username || !password) {
    return res.status(400).json({
      message: "either username or password are not provided",
    });
  }

  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
    });
  }

  const isExist = await prisma.user.findMany({
    where: {
      email: username,
    },
  });

  if (isExist[0]) {
    return res.status(400).json({
      message: "user already exits with username : " + username,
    });
  }

  const hash_password = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: username,
      password: hash_password,
    },
  });

  if (user) {
    return res.status(201).json({
      message: "user is created successfully",
      user: user,
    });
  } else {
    return res.status(500).json({
      message: "something went wrong while creating user",
      user: user,
    });
  }
}
