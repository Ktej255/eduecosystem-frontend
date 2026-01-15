import api from "@/lib/api";

export interface AttendanceRecord {
    id: number;
    user_id: number;
    session_date: string;
    joined_at: string;
    duration_minutes: number;
    user: {
        id: number;
        full_name: string;
        email: string;
    };
    is_late: boolean;
}

export interface AttendanceAnalytics {
    total_today: number;
    total_this_week: number;
    average_daily: number;
    streak_leaders: {
        user_name: string;
        streak: number;
    }[];
}

export const attendanceService = {
    /**
     * Get all attendance records (paginated)
     */
    async getAllRecords(page = 1, limit = 50): Promise<{ records: AttendanceRecord[], total: number }> {
        const response = await api.get(`/attendance/admin/records`, {
            params: { skip: (page - 1) * limit, limit }
        });
        return response.data;
    },

    /**
     * Get attendance analytics
     */
    async getAnalytics(): Promise<AttendanceAnalytics> {
        const response = await api.get(`/attendance/admin/analytics`);
        return response.data;
    },

    /**
     * Get check-ins for specific date
     */
    async getByDate(date: string): Promise<AttendanceRecord[]> {
        const response = await api.get(`/attendance/admin/date/${date}`);
        return response.data;
    }
};
