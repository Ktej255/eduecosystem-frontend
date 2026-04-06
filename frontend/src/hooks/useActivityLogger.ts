import { useCallback, useRef } from 'react';
import api from '@/lib/api';
import { useToast } from './use-toast';

export interface ActivityPayload {
  activity_type: string;
  content_id: string;
  score?: number;
  duration?: number;
  subject_slug?: string;
}

export interface EngineDecision {
  learning_state: string;
  next_action: string;
  priority_node_id: string;
  priority_node_name: string;
  reason: string;
  ai_intervention: boolean;
  ai_message: string;
  todays_plan: string[];
}

export interface ActivityLogResponse {
  status: string;
  decision: EngineDecision;
}

/**
 * Hook for logging student activity to the Learning Engine.
 * Implements a 3-second debounce to prevent duplicate logs.
 */
export const useActivityLogger = () => {
  const { toast } = useToast();
  const lastCallRef = useRef<Record<string, number>>({});
  const DEBOUNCE_MS = 3000;

  const logActivity = useCallback(async (payload: ActivityPayload): Promise<ActivityLogResponse | undefined> => {
    const now = Date.now();
    const key = `${payload.activity_type}:${payload.content_id}`;

    // Debounce check
    if (lastCallRef.current[key] && (now - lastCallRef.current[key] < DEBOUNCE_MS)) {
      console.log(`[useActivityLogger] Skipping duplicate activity log: ${key}`);
      return undefined;
    }

    lastCallRef.current[key] = now;

    try {
      // Ensure we have a default score and duration
      const normalizedPayload = {
        ...payload,
        score: payload.score ?? 0,
        duration: payload.duration ?? 0,
        subject_slug: payload.subject_slug ?? 'environment'
      };

      const response = await api.post<ActivityLogResponse>('/activity/log', normalizedPayload);
      const data = response.data;

      // If the engine has a message for the student, show it as a toast
      if (data.decision?.ai_message) {
        toast({
          title: "AI Learning Coach",
          description: data.decision.ai_message,
          variant: "default"
        });
      }

      return data;
    } catch (error) {
      console.error('[useActivityLogger] Failed to log activity:', error);
      return undefined;
    }
  }, [toast]);

  return { logActivity };
};
