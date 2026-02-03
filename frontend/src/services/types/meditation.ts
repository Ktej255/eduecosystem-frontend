export interface MeditationSession {
    id: number;
    user_id: number;
    day_completion_id: number;

    // Pre-session
    pre_stress_level: number;
    pre_anxiety_level: number;
    pre_focus_level: number;
    pre_emotional_state: string;
    pre_concerns?: string;
    pre_recorded_at: string;

    // Post-session
    post_stress_level?: number;
    post_anxiety_level?: number;
    post_focus_level?: number;
    post_emotional_state?: string;
    post_insights?: string;
    post_effectiveness_rating?: number;
    post_recorded_at?: string;

    // Improvements
    stress_improvement?: number;
    anxiety_improvement?: number;
    focus_improvement?: number;
    overall_improvement_score?: number;
}
