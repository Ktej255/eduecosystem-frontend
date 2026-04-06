/**
 * useLearningEngine.ts
 * ─────────────────────
 * Lightweight hooks for firing Learning Engine signals from any component.
 *
 * Usage in any MCQ component:
 *
 *   import { reportMcqAttempt, reportActivity } from '@/lib/useLearningEngine';
 *
 *   // After student submits MCQ answer:
 *   await reportMcqAttempt({
 *     mcq_id: 42,
 *     is_correct: true,
 *     score: 85,
 *     node_ids: ['ENV_N010'],  // concept nodes this MCQ tests
 *   });
 *
 *   // After video completion:
 *   await reportActivity({ activity_type: 'video_watch', node_id: 'ENV_N010', score: 100 });
 */

export interface McqAttemptPayload {
  mcq_id: number;
  is_correct: boolean;
  score: number;              // 0–100
  node_ids?: string[];        // concept node IDs tested by this MCQ
  drill_session_id?: string;
}

export interface ActivityPayload {
  activity_type: 'video_watch' | 'mcq' | 'recall' | 'conversation';
  node_id?: string;           // concept node string ID e.g. "ENV_N010"
  score?: number;             // 0–100
  duration_seconds?: number;
  metadata?: Record<string, unknown>;
}

export interface EngineResponse {
  next_action: string;
  next_node_name: string | null;
  mastery_updated: boolean;
  new_mastery_score: number | null;
}

// ─── reportMcqAttempt ─────────────────────────────────────────────────────────

/**
 * Call this immediately after a student answers any MCQ.
 * 1. Reports to the concept tagging system (per-concept mastery update)
 * 2. Reports to the learning engine (triggers next-action decision)
 *
 * Fire-and-forget safe — errors are silently swallowed to never block the UI.
 */
export async function reportMcqAttempt(
  payload: McqAttemptPayload,
): Promise<void> {
  try {
    // 1. Concept tagging signal (updates per-concept MCQ accuracy)
    const tagPayload = {
      mcq_id: payload.mcq_id,
      is_correct: payload.is_correct,
      score: payload.score,
      node_ids: payload.node_ids ?? [],
    };

    // 2. Engine activity signal (SM-2 mastery + next action decision)
    const enginePayload: ActivityPayload = {
      activity_type: 'mcq',
      score: payload.score,
      metadata: { mcq_id: payload.mcq_id, drill_session_id: payload.drill_session_id },
    };

    // Fire both in parallel, don't await results (fire-and-forget)
    Promise.all([
      fetch('/api/tagging/mcq-attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tagPayload),
      }),
      fetch('/api/engine/activity-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enginePayload),
      }),
    ]).catch(() => {
      // Silent fail — never block the student UI
    });
  } catch {
    // noop
  }
}

// ─── reportActivity ───────────────────────────────────────────────────────────

/**
 * General-purpose activity reporter for video watches, recall sessions,
 * AI conversations. Triggers SM-2 mastery update + engine re-evaluation.
 */
export async function reportActivity(payload: ActivityPayload): Promise<EngineResponse | null> {
  try {
    const res = await fetch('/api/engine/activity-complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) return res.json();
  } catch {
    // noop
  }
  return null;
}

// ─── useEngineDecision (React hook) ──────────────────────────────────────────

import { useEffect, useState } from 'react';

export interface EngineDecision {
  learning_state: string;
  next_action: string;
  priority_node_id: string | null;
  priority_node_name: string | null;
  reason: string;
  exam_readiness: number;
  efficiency_score: number;
  ai_intervention: boolean;
  ai_message: string | null;
}

/**
 * React hook that fetches the current engine decision.
 * Refreshes when `refreshKey` changes (e.g. after activity completion).
 */
export function useEngineDecision(subjectSlug = 'environment', refreshKey = 0) {
  const [decision, setDecision] = useState<EngineDecision | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/engine/decision?subject_slug=${subjectSlug}`)
      .then(r => r.ok ? r.json() : null)
      .then(setDecision)
      .catch(() => setDecision(null))
      .finally(() => setLoading(false));
  }, [subjectSlug, refreshKey]);

  return { decision, loading };
}
