import express from "express";
import { Request, Response } from "express";
import SignUp from "./routes/signup";
import SignIn from "./routes/signin";
import { middleware } from "./middleware/auth";
import createRoom from "./routes/createRoom";
import { prisma } from "@repo/database/client";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/signup", SignUp);

app.post("/signin", SignIn);

app.post("/create-room", middleware, createRoom);

app.get("/chats/:roomId", async (req: Request, res: Response) => {
  const roomId = Number(req.params.roomId);
  try {
    const chats = await prisma.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });

    res.status(200).json({
      message: "latest 50 chats",
      chats,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.get("/room/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;
  try {
    const room = await prisma.room.findFirst({
      where: {
        slug,
      },
    });

    console.log("room in /room/:slug : ", room);
    if (!room) {
      return res.status(500).json({
        message: "room not found",
      });
    }
    res.status(200).json({
      message: "get the details of room",
      room: room?.id,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.listen(3001, () => {
  console.log("http-backend running on port 3001");
});
