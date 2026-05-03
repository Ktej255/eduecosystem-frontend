"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import axios from "axios";
import { API_BASE as API_URL } from "@/lib/api";

export function SadhanaStreak() {
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;

        const res = await axios.get(`${API_URL}/gamification/streaks`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Use global streak or sum of activities
        setStreak(res.data.global?.current || 0);
      } catch (error) {
        console.error("Failed to fetch streak", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStreak();
  }, []);

  if (loading) return null;

  return (
    <div
      className="flex items-center gap-1 bg-orange-100 dark:bg-orange-950 px-3 py-1.5 rounded-full cursor-help border border-orange-200 dark:border-orange-800"
      title={`${streak} Day Streak! Completing daily Sadhana builds your fire.`}
    >
      <Flame className={`w-5 h-5 ${streak > 0 ? "fill-orange-500 text-orange-600 animate-pulse" : "text-muted-foreground"}`} />
      <span className={`font-bold font-mono ${streak > 0 ? "text-orange-700 dark:text-orange-400" : "text-muted-foreground"}`}>
        {streak}
      </span>
    </div>
  );
}
