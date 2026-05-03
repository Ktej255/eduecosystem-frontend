import { api } from '@/lib/api';

export interface PlannerActivity {
    time: string;
    activity: string;
    description: string;
    duration: string;
    type: 'study' | 'practice' | 'revision' | 'break';
    topic_id?: number;
    subtopic_id?: number;
}

export interface PlannerResource {
    title: string;
    type: 'pdf' | 'video' | 'quiz' | 'note';
    link: string;
    is_completed: boolean;
}

export interface DayPlan {
    date: string;
    day_number: number;
    title: string;
    focus_area: string;
    activities: PlannerActivity[];
    resources: PlannerResource[];
    is_unlocked: boolean;
}

export interface CalendarDay {
    date: string;
    day_number: number;
    title: string;
    is_completed: boolean;
    is_unlocked: boolean;
    mastery_score?: number;
}

export interface SessionReport {
    date: string;
    topic: string;
    mastery_level: string;
    accuracy: number;
    time_spent: number;
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}

export const plannerService = {
    /**
     * Get the 40-day calendar overview for the current user.
     */
    getCalendarOverview: async (): Promise<ApiResponse<CalendarDay[]>> => {
        const response = await api.get('/planner/calendar-overview');
        return response.data;
    },

    /**
     * Get the detailed plan for a specific date.
     */
    getPlanByDate: async (date: string): Promise<ApiResponse<DayPlan>> => {
        const response = await api.get(`/planner/plan-by-date?date=${date}`);
        return response.data;
    },

    /**
     * Record and submit a drill session (AI evaluation).
     */
    recordAndSubmit: async (payload: {
        date: string;
        transcript: string;
        topic_id: number;
        subtopic_id?: number;
    }): Promise<ApiResponse<any>> => {
        const response = await api.post('/planner/record-and-submit', payload);
        return response.data;
    },

    /**
     * Get the session report for a specific topic/date.
     */
    getSessionReport: async (date: string): Promise<ApiResponse<SessionReport>> => {
        const response = await api.get(`/planner/session-report?date=${date}`);
        return response.data;
    }
};

export default plannerService;
