"use client";

import { useEffect, useRef } from "react";
import api from "@/lib/api";

export default function PresenceManager() {
  const lastPingRef = useRef<number>(0);

  useEffect(() => {
    // Immediate heartbeat on mount
    const sendHeartbeat = async () => {
      try {
        await api.post("/user-sessions/heartbeat");
        lastPingRef.current = Date.now();
      } catch (error) {
        console.error("Presence heartbeat failed:", error);
      }
    };

    sendHeartbeat();

    // Set up 60s interval
    const interval = setInterval(sendHeartbeat, 60000);

    return () => clearInterval(interval);
  }, []);

  return null; // This is a headless component
}
