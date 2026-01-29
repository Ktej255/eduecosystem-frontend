import api from "@/lib/api";

export interface ActivityLog {
    id: number;
    action: string;
    details: string;
    timestamp: string;
}

export const activityService = {
    // Event Listeners for Gamification
    listeners: [] as ((action: string, details: string) => void)[],

    subscribe(callback: (action: string, details: string) => void) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(cb => cb !== callback);
        };
    },

    notifyListeners(action: string, details: string) {
        this.listeners.forEach(cb => cb(action, details));
    },

    // Log an activity (e.g. topic completion)
    async logActivity(action: string, details: string): Promise<ActivityLog> {
        // Optimistically notify listeners for instant feedback
        this.notifyListeners(action, details);

        try {
            const response = await api.post("/user-activities/log", { action, details });
            return response.data;
        } catch (error) {
            console.error("Failed to log activity:", error);
            // Return a mock log or rethrow? Let's just return a partial log to not break UI
            return { id: -1, action, details, timestamp: new Date().toISOString() };
        }
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
