import express, { Request, Response } from "express";
import { client } from "@repo/db/client";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hi there");
});

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await client.username.create({
    data: {
      username: username,
      password: password,
    },
  });

  res.json({
    message: "user created successfully ",
    id: user.id,
  });
});

app.listen(3000, () => {
  console.log("http server running on port 3000");
});
