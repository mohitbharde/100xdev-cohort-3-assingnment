import { ChatRoom } from "../../../components/ChatRoom";
import { cookies } from "next/headers";

const cookie = await cookies;
console.log("cookies : ", cookie);

export default async function ChatRoomMessage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = (await params).slug;

  return (
    <div>
      {" "}
      <ChatRoom slug={slug} />
    </div>
  );
}
