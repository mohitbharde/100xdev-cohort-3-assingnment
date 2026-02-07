"use client";
import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=${localStorage.getItem("token")}`
    );
    ws.onopen = () => {
      console.log("ws is now open");
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
