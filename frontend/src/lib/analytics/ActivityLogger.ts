import { ConfidenceLevel } from "@/components/batch1-1/pomodoro/CycleMCQs";

export type ActivityType = 'MCQ_EVENING' | 'MCQ_PYQ' | 'MCQ_SATURDAY' | 'FLASHCARD_REVIEW' | 'MCQ_CSAT' | 'MCQ_POMODORO';

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
    logActivity: (activity: Omit<ActivityLog, 'id' | 'timestamp'>) => {
        if (typeof window === 'undefined') return;

        try {
            const logs = ActivityLogger.getLogs();
            const newLog: ActivityLog = {
                ...activity,
                id: crypto.randomUUID(),
                timestamp: Date.now(),
            };
            logs.push(newLog);

            // Keep specific limit if needed, e.g., last 10000 actions
            if (logs.length > 5000) {
                logs.splice(0, logs.length - 5000);
            }

            localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(logs));
        } catch (error) {
            console.error("Failed to log activity:", error);
        }
    },

    getLogs: (): ActivityLog[] => {
        if (typeof window === 'undefined') return [];
        try {
            const stored = localStorage.getItem(ACTIVITY_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error("Failed to retrieve activity logs:", error);
            return [];
        }
    },

    // Get aggregated stats
    getStats: () => {
        const logs = ActivityLogger.getLogs();
        return {
            totalMCQsSolved: logs.filter(l => l.type === 'MCQ_EVENING' || l.type === 'MCQ_PYQ' || l.type === 'MCQ_SATURDAY').length,
            totalCorrect: logs.filter(l => (l.type === 'MCQ_EVENING' || l.type === 'MCQ_PYQ' || l.type === 'MCQ_SATURDAY') && l.details.isCorrect).length,
            totalFlashcards: logs.filter(l => l.type === 'FLASHCARD_REVIEW').length,
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
