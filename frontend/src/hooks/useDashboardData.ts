// WIRED 2026-04-27 — DO NOT REVERT — fetches from /api/v1/engine/todays-dashboard
// Token key: "token" from localStorage (auth-context.tsx line 135)
// Replaces localStorage stub. Real data confirmed working for user Kajal (user_id 12)
import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app";

export interface DashboardData {
  student_name: string;
  learning_state: string;
  state_label: string;
  next_action: string;
  priority_node_id: string | null;
  priority_node_name: string | null;
  reason: string;
  exam_readiness: number;
  efficiency_score: number;
  ai_intervention: boolean;
  ai_message: string | null;
  todays_plan: any[];
  mastery_summary: {
    strong: number;
    medium: number;
    weak: number;
    total_attempted: number;
  };
  quick_stats: {
    day_streak: number;
    today_minutes: number;
    total_sessions: number;
    nodes_mastered: number;
  };
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const token = localStorage.getItem("token") ||
          sessionStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${API_BASE}/api/v1/engine/todays-dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Dashboard fetch failed: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
        console.error("useDashboardData error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  return { data, loading, error };
}
