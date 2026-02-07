import { WebSocketServer, WebSocket as websocket } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SEC } from "@repo/backend-common/config";
import { messageQueue, startdbProcess } from "./database_operation";

const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): number | null {
  const decoded = jwt.verify(token, JWT_SEC);

  if (!decoded || !(decoded as JwtPayload).userId) {
    return null;
  }
  //@ts-ignore
  return decoded?.userId;
}

const user_to_room = new Map<number, { ws: websocket; roomId: Set<number> }>();
const room_to_user = new Map<number, Map<number, websocket>>();

wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) {
    return;
  }

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);

  if (!userId) {
    ws.close();
    return null;
  }

  ws.on("error", (err) => {
    ws.send(err.toString());
  });

  ws.on("message", async (data) => {
    let parsedData;
    if (typeof data !== "string") {
      parsedData = JSON.parse(data.toString());
    } else {
      parsedData = JSON.parse(data); // {type: "join-room", roomId: 1, userId: 1}
    }

    const userId = parsedData.userId;
    const roomId = parsedData.roomId;
    const roomId_set = user_to_room.get(userId)?.roomId ?? new Set<number>();
    //defining the roomId_set to get the "Set()" that are stored in particular roomId and if roomId does not exists in "user_to_room" then create new "Set()" and map to roomId in "user_to_room"

    const room_to_user_map =
      room_to_user.get(roomId) ?? new Map<number, websocket>();
    //it is used to get the users id that are subscribe to room with some roomId

    if (parsedData.type === "join_room") {
      user_to_room.set(userId, { ws: ws, roomId: roomId_set.add(roomId) });
      room_to_user.set(roomId, room_to_user_map.set(userId, ws));
      ws.send(`you are joined to the room having the id ${roomId}`);
    }

    //{type: "leave_room", roomId: 1, userId: 1}
    else if (parsedData.type === "leave_room") {
      roomId_set.delete(roomId);
      room_to_user_map.delete(userId);
      ws.send("closing the connection because you leave the room");
      ws.close();
    }
    // {type: message, roomId: 1, userId: 1}
    else if (parsedData.type === "message") {
      if (!room_to_user.get(roomId)) {
        return;
      }
      const message_to_send = {
        roomId,
        userId,
        message: parsedData.message,
      };
      console.log("message i received in room : ", message_to_send);
      for (const [key, value] of room_to_user_map) {
        if (key != userId) {
          value.send(JSON.stringify(message_to_send));
        }
      }
      messageQueue.push(message_to_send);
    }
  });
});

startdbProcess();
