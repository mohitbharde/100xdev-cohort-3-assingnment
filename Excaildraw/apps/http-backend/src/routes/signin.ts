import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "@repo/backend-common/config";
import { SigninSchema } from "@repo/common/types";
import { prisma } from "@repo/database/client";
import bcrypt from "bcrypt";

export default async function (req: Request, res: Response) {
  const username: string = req.body["username"];
  const password: string = req.body["password"];

  console.log("username : ", username, " password : ", password);
  if (!username || !password) {
    return res.status(400).json({
      message: "either username or password are not provided",
    });
  }

  const data = SigninSchema.safeParse(req.body);

  if (!data.success) {
    return res.status(400).json({
      message: "Incorrect inputs",
    });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });

  if (!user) {
    return res.status(400).json({
      message: "user does not exits ",
    });
  }

  //@ts-ignore
  const is_correct = await bcrypt.compare(password, user.password);

  if (!is_correct) {
    return res.status(400).json({
      message: "incorrect password",
    });
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    JWT_SEC,
    {
      expiresIn: "1h",
    }
  );

  return res.status(200).json({
    message: "user is created successfully",
    token: token,
    userId: user?.id,
    email: user.email,
  });
}
