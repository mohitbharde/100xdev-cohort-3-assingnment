import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "@repo/backend-common/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authentication"] ?? "";

  //@ts-ignore
  const decoded: { userId: number; iat: number } = jwt.verify(token, JWT_SEC);

  if (decoded) {
    console.log("decoded : ", decoded);
    //@ts-ignore
    req.userId = decoded?.userId;
    next();
  } else {
    res.status(403).json({
      message: "Unauthorized",
    });
  }
}
