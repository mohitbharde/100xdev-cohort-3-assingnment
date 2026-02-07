"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JoinRoom() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center align-center h-screen w-screen">
      <div>
        <input
          className="p-10"
          type="text"
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Room id"
        />
        <button className="p-10" onClick={() => router.push(`/room/${roomId}`)}>
          Join Room
        </button>
      </div>
    </div>
  );
}
