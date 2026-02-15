import api from "@/lib/api";

// Types
export interface MeditationProcessInfo {
    id: number;
    name: string;
    description: string | null;
    order: number;
    video_url: string | null;
    video_filename: string | null;
    duration_minutes: number;
    level: number;
    is_active: boolean;
    created_at: string;
    // Audio assets for immersive player
    announcement_audio_url?: string | null;
    background_music_url?: string | null;
    bell_sound_url?: string | null;
}

export interface MeditationLevelInfo {
    level: number;
    name: string;
    description: string;
    total_days: number;
    completed_days: number;
    is_unlocked: boolean;
    is_current: boolean;
    is_completed: boolean;
}

export interface MeditationOverview {
    current_level: number;
    current_day: number;
    total_streak: number;
    last_practice_date: string | null;
    preferred_session: string;
    levels: MeditationLevelInfo[];
    total_days_completed: number;
    total_days_remaining: number;
    todays_processes: number;
    is_unlock_day: boolean;
}

export interface MeditationDayInfo {
    day_number: number;
    is_unlocked: boolean;
    is_completed: boolean;
    completed_at: string | null;
    unlock_date: string | null;
    processes_count: number;
}

export interface MeditationLevelDetail {
    level: number;
    name: string;
    description: string;
    total_days: number;
    days: MeditationDayInfo[];
}

export interface MeditationDayOverview {
    level: number;
    day_number: number;
    total_processes: number;
    is_unlock_day: boolean;
    new_process_start: number | null;
    new_process_end: number | null;
    processes: MeditationProcessInfo[];
    completed_processes: number[];
    is_day_completed: boolean;
}

export interface ProcessCompleteResponse {
    success: boolean;
    message: string;
    process_id: number;
    all_processes_done: boolean;
}

export interface DayCompleteResponse {
    success: boolean;
    message: string;
    new_streak: number;
    level_completed: boolean;
    next_level_unlocked: boolean;
}

// ============================================================================
// Experience Recording Types (AI Progress Tracking)
// ============================================================================

export interface ExperienceResponse {
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

export interface AnalyticsResponse {
    total_sessions: number;
    average_stress_improvement: number;
    average_anxiety_improvement: number;
    average_focus_improvement: number;
    overall_wellbeing_score: number;
    trend_direction: 'improving' | 'stable' | 'declining';
    best_time_of_day?: 'morning' | 'night';
    most_effective_processes: number[];
}

export interface GraphDataPoint {
    date: string;
    stress_level?: number;
    anxiety_level?: number;
    focus_level?: number;
    improvement_score?: number;
}

export interface GraphDataResponse {
    pre_session_data: GraphDataPoint[];
    post_session_data: GraphDataPoint[];
    improvement_data: GraphDataPoint[];
    date_range: string;
}


// Level configuration
export const MEDITATION_LEVELS = {
    1: { days: 60, name: "Foundation: Breath Awareness", description: "Building daily meditation habit", color: "blue" },
    2: { days: 60, name: "Intermediate: Visualization", description: "Deepening your practice", color: "purple" },
    3: { days: 60, name: "Advanced: Mantra & Sound", description: "Advanced meditation techniques", color: "orange" },
    4: { days: 60, name: "Mastery: Transcendence", description: "Complete mastery of meditation", color: "green" }
};

// Session time slots
export const SESSION_SLOTS = {
    morning: [
        { id: "5-6", label: "5:00 - 6:00 AM" },
        { id: "6-7", label: "6:00 - 7:00 AM" },
        { id: "7-8", label: "7:00 - 8:00 AM" }
    ],
    night: [
        { id: "9-10", label: "9:00 - 10:00 PM" }
    ]
};

// Service
export const meditationService = {
    // Overview
    async getOverview(): Promise<MeditationOverview> {
        const response = await api.get("/meditation/overview");
        return response.data;
    },

    // Level detail
    async getLevelDetail(levelId: number): Promise<MeditationLevelDetail> {
        const response = await api.get(`/meditation/level/${levelId}`);
        return response.data;
    },

    // Day processes
    async getDayProcesses(levelId: number, dayNumber: number): Promise<MeditationDayOverview> {
        const response = await api.get(`/meditation/level/${levelId}/day/${dayNumber}`);
        return response.data;
    },

    // Complete a process
    async completeProcess(
        levelId: number,
        dayNumber: number,
        processId: number,
        watchedVideo: boolean = false
    ): Promise<ProcessCompleteResponse> {
        const response = await api.post(
            `/meditation/level/${levelId}/day/${dayNumber}/process/${processId}/complete`,
            { watched_video: watchedVideo }
        );
        return response.data;
    },

    // Complete the day
    async completeDay(
        levelId: number,
        dayNumber: number,
        sessionType: string = "morning",
        notes?: string
    ): Promise<DayCompleteResponse> {
        const response = await api.post(
            `/meditation/level/${levelId}/day/${dayNumber}/complete`,
            { session_type: sessionType, notes }
        );
        return response.data;
    },

    // ============================================================================
    // Experience Recording (AI Progress Tracking)
    // ============================================================================

    async recordPreSessionExperience(data: {
        level: number;
        day_number: number;
        stress_level: number;
        anxiety_level: number;
        focus_level: number;
        emotional_state: string;
        concerns?: string;
    }): Promise<ExperienceResponse> {
        const response = await api.post('/meditation/experience/pre-session', data);
        return response.data;
    },

    async recordPostSessionExperience(data: {
        experience_id: number;
        stress_level: number;
        anxiety_level: number;
        focus_level: number;
        emotional_state: string;
        insights?: string;
        effectiveness_rating: number;
    }): Promise<ExperienceResponse> {
        const response = await api.post('/meditation/experience/post-session', data);
        return response.data;
    },

    async getAnalytics(): Promise<AnalyticsResponse> {
        const response = await api.get('/meditation/experience/analytics');
        return response.data;
    },

    async getGraphData(days: number = 30): Promise<GraphDataResponse> {
        const response = await api.get(`/meditation/experience/graphs?days=${days}`);
        return response.data;
    },

    // ========================================================================
    // PAYMENT METHODS (Phase 2)
    // ========================================================================

    async getPricing(): Promise<any> {
        const response = await api.get('/meditation/levels/pricing');
        return response.data;
    },

    async initiatePurchase(levelId: number): Promise<any> {
        const response = await api.post(`/meditation/level/${levelId}/purchase/initiate`);
        return response.data;
    },

    async verifyPurchase(levelId: number, paymentData: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
    }): Promise<any> {
        const response = await api.post(`/meditation/level/${levelId}/purchase/verify`, paymentData);
        return response.data;
    },

    async getPurchaseHistory(): Promise<any> {
        const response = await api.get('/meditation/purchases');
        return response.data;
    },

    async getFocusCorrelation(days: number = 30): Promise<any[]> {
        const response = await api.get(`/analytics/focus-correlation?days=${days}`);
        return response.data;
    }
};

export default meditationService;
