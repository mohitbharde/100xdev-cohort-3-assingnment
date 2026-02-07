import axios from "axios";
import { BACKEND_URL } from "../app/config";
import { ChatRoomClient } from "./ChatRoomClient";

async function getChats(roomId: number) {
  try {
    const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    console.log(response.data.chats);
    return response.data.chats;
  } catch (e) {
    console.log(e);
  }
}

async function getRoomId(slug: string) {
  try {
    const res = await axios.get(`${BACKEND_URL}/room/${slug}`);
    console.log(res);
    const roomId = Number(res.data.room);
    console.log("roomId : ", roomId);
    return roomId;
  } catch (error) {
    console.log(error);
  }
  return -1;
}

export async function ChatRoom({ slug }: { slug: string }) {
  console.log("chat room : ", slug);
  const id = await getRoomId(slug);
  const messages = await getChats(id);
  return (
    <div>
      <ChatRoomClient id={id} messages={messages} />
    </div>
  );
}
