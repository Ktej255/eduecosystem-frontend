import api from "@/lib/api";

export interface ActivityLog {
    id: number;
    action: string;
    details: string;
    timestamp: string;
}

export const activityService = {
    // Log an activity (e.g. topic completion)
    async logActivity(action: string, details: string): Promise<ActivityLog> {
        const response = await api.post("/user-activities/log", { action, details });
        return response.data;
    },

    // Get activity history (e.g. to check completion status)
    async getActivityHistory(action?: string): Promise<ActivityLog[]> {
        const response = await api.get("/user-activities/history", { params: { action } });
        return response.data;
    },

    // Convenience method to check completed topics
    async getCompletedTopics(): Promise<string[]> {
        try {
            const logs = await this.getActivityHistory("complete_topic");
            // Extract topic IDs from details
            return logs.map(log => log.details).filter((id): id is string => !!id);
        } catch (err) {
            console.error("Failed to fetch completed topics", err);
            return [];
        }
    }
};

export default activityService;
