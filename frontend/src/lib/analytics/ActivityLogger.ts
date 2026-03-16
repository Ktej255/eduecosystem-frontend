import { ConfidenceLevel } from "@/lib/gamification/gamification-types";

export type ActivityType = 'MCQ_EVENING' | 'MCQ_PYQ' | 'MCQ_SATURDAY' | 'FLASHCARD_REVIEW' | 'MCQ_CSAT' | 'MCQ_POMODORO' | 'MCQ_CHAPTER';

export interface ActivityLog {
    id: string;
    timestamp: number; // Date.now()
    type: ActivityType;
    details: {
        questionId?: string; // For MCQs/PYQs
        topic?: string;
        subtopic?: string;
        isCorrect?: boolean;
        confidence?: ConfidenceLevel | null;
        timeSpent?: number; // seconds
        count?: number; // For batch flashcard reviews if needed
    };
}

const ACTIVITY_STORAGE_KEY = 'eduecosystem_activity_log_v1';

export const ActivityLogger = {
    logActivity: async (activity: Omit<ActivityLog, 'id' | 'timestamp'>) => {
        if (typeof window === 'undefined') return;

        try {
            const logs = await ActivityLogger.getLogs();
            const newLog: ActivityLog = {
                ...activity,
                id: crypto.randomUUID(),
                timestamp: Date.now(),
            };
            logs.push(newLog);

            if (logs.length > 5000) {
                logs.splice(0, logs.length - 5000);
            }

            localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(logs));

            // Sync to PostgreSQL safely in the background
            ActivityLogger.syncToDatabase(logs);
        } catch (error) {
            console.error("Failed to log activity:", error);
        }
    },

    syncToDatabase: async (logs: ActivityLog[]) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    report_type: 'activity_log',
                    report_key: 'activity_log_v1',
                    data: { logs: logs }
                })
            });
        } catch (err) {
            console.warn("Background sync of ActivityLogger failed", err);
        }
    },

    getLogs: async (): Promise<ActivityLog[]> => {
        if (typeof window === 'undefined') return [];
        try {
            const token = localStorage.getItem("token");
            if (token) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/?report_type=activity_log&report_key=${ACTIVITY_STORAGE_KEY}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.length > 0 && data[0].data?.logs) {
                        return data[0].data.logs;
                    }
                }
            }
        } catch (e) { }

        try {
            const stored = localStorage.getItem(ACTIVITY_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to retrieve activity logs:", error);
            return [];
        }
    },

    // Get aggregated stats
    getStats: async () => {
        const logs = await ActivityLogger.getLogs();
        return {
            totalMCQsSolved: logs.filter(l => l.type === 'MCQ_EVENING' || l.type === 'MCQ_PYQ' || l.type === 'MCQ_SATURDAY' || l.type === 'MCQ_POMODORO' || l.type === 'MCQ_CHAPTER').length,
            totalCorrect: logs.filter(l => (l.type === 'MCQ_EVENING' || l.type === 'MCQ_PYQ' || l.type === 'MCQ_SATURDAY' || l.type === 'MCQ_POMODORO' || l.type === 'MCQ_CHAPTER') && l.details.isCorrect).length,
            totalFlashcards: logs.filter(l => l.type === 'FLASHCARD_REVIEW').length,
            pomodoroMCQs: logs.filter(l => l.type === 'MCQ_POMODORO').length,
            pomodoroCorrect: logs.filter(l => l.type === 'MCQ_POMODORO' && l.details.isCorrect).length,
            chapterMCQs: logs.filter(l => l.type === 'MCQ_CHAPTER').length,
            byTopic: logs.reduce((acc, log) => {
                const topic = log.details.topic || 'Uncategorized';
                acc[topic] = (acc[topic] || 0) + 1;
                return acc;
            }, {} as Record<string, number>)
        };
    },

    // Clear logs (dev utility)
    clearLogs: () => {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(ACTIVITY_STORAGE_KEY);
    }
};
