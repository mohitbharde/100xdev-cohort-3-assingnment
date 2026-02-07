import { CreateRoomSchema } from "@repo/common/types";
import { Request, Response } from "express";
import { prisma } from "@repo/database/client";

export default async function createRoom(req: Request, res: Response) {
  const parasData = CreateRoomSchema.safeParse(req.body);

  if (!parasData.success) {
    return res.status(500).json({
      message: "create room schema body is not correct",
      error: parasData.error,
    });
  }

  try {
    const room = await prisma.room.create({
      data: {
        slug: parasData.data.name.replace(" ", "_"),
        //@ts-ignore
        adminId: req?.userId,
      },
    });

    return res.status(201).json({
      message: "room created successfully",
      room: room,
    });
  } catch (e) {
    return res.status(500).json({
      message: "error while generating room",
      error: e,
    });
  }
}
