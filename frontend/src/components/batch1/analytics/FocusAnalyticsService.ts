import { getProgressStore } from "@/lib/polity-progress-store";
import { getAllProgress as getRevisionProgress } from "@/components/batch1/polity/revision/progress-utils";

export interface DashboardStats {
    flashcardsMastered: number;
    flashcardsGrowth: number; // For now, weekly growth can be mocked or calculated if we store dates
    focusHours: number;
    audioNotesRecorded: number;
}

export interface TestHistoryItem {
    id: number;
    title: string;
    date: string;
    score: number; // Percentage
    totalQuestions: number;
    correctCount: number;
    type: 'POMODORO_MCQ' | 'RAS_MOCK';
}

export const FocusAnalyticsService = {

    /**
     * Aggregates all stats for the dashboard.
     */
    getDashboardStats(): DashboardStats {
        if (typeof window === 'undefined') {
            return { flashcardsMastered: 0, flashcardsGrowth: 0, focusHours: 0, audioNotesRecorded: 0 };
        }

        // 1. Flashcards (Polity Store + Revision Store)
        const polityStore = getProgressStore();
        let totalFlashcards = 0;

        // From Study Sessions
        Object.values(polityStore.chapters).forEach(ch => {
            totalFlashcards += (ch.flashcardsViewed || 0);
        });

        // From Revision Mode (Voice Recall counts as flashcards here effectively)
        const revisionProgress = getRevisionProgress('polity'); // key is usually 'polity'
        let audioNotesCount = 0;

        Object.values(revisionProgress).forEach(ch => {
            // In revision mode, flashcardsCompleted implies successful recall
            totalFlashcards += ch.flashcardsCompleted;
            audioNotesCount += ch.flashcardsCompleted; // Treat revision completions as "Audio Notes"
        });

        // 2. Focus Hours (Scan localStorage for Pomodoro sessions)
        let totalSessions = 0;
        // keys look like: batch11_pomodoro_WEEK_DAY
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('batch11_pomodoro_')) {
                try {
                    const sessionData = JSON.parse(localStorage.getItem(key) || '{}');
                    if (sessionData.sessionHistory) {
                        totalSessions += sessionData.sessionHistory.length;
                    }
                } catch (e) {
                    console.error("Error parsing pomodoro session", e);
                }
            }
        });

        const focusHours = parseFloat(((totalSessions * 25) / 60).toFixed(1));

        return {
            flashcardsMastered: totalFlashcards,
            flashcardsGrowth: Math.round(totalFlashcards * 0.1), // Mock growth for now
            audioNotesRecorded: audioNotesCount,
            focusHours: focusHours
        };
    },

    /**
     * Aggregates past test results.
     */
    getRecentTests(): TestHistoryItem[] {
        if (typeof window === 'undefined') return [];

        const tests: TestHistoryItem[] = [];

        // 1. Scan Pomodoro/Cycle MCQ Results
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('batch11_pomodoro_')) {
                const parts = key.split('_'); // [batch11, pomodoro, weekId, dayId]
                if (parts.length === 4) {
                    const weekId = parts[2];
                    const dayId = parts[3];

                    try {
                        const data = JSON.parse(localStorage.getItem(key) || '{}');
                        const history = data.sessionHistory || [];

                        // Aggregate MCQs for this day
                        let totalQ = 0;
                        let correctQ = 0;

                        history.forEach((h: any) => {
                            totalQ += (h.mcqResults?.total || 0);
                            correctQ += (h.mcqResults?.correct || 0);
                        });

                        if (totalQ > 0) {
                            tests.push({
                                id: parseInt(`${weekId}${dayId}`), // Simple ID generation
                                title: `Week ${weekId} Day ${dayId} Session`,
                                date: data.lastUpdated || new Date().toISOString(),
                                score: Math.round((correctQ / totalQ) * 100),
                                totalQuestions: totalQ,
                                correctCount: correctQ,
                                type: 'POMODORO_MCQ'
                            });
                        }
                    } catch (e) {
                        console.error("Error parsing test data", e);
                    }
                }
            }
        });

        // 2. Scan RAS Mock Results (if any stored) - using 'ras_test_results' fallback from ras-api.ts
        try {
            const rasData = localStorage.getItem('ras_test_results');
            if (rasData) {
                const results = JSON.parse(rasData);
                results.forEach((r: any) => {
                    tests.push({
                        id: r.id,
                        title: `RAS Mock Test ${r.id}`, // Or check r.topicId if available
                        date: r.timestamp,
                        score: Math.round((r.correct_count / r.total_questions) * 100),
                        totalQuestions: r.total_questions,
                        correctCount: r.correct_count,
                        type: 'RAS_MOCK'
                    });
                });
            }
        } catch (e) {
            console.error("Error parsing RAS data", e);
        }

        // Sort by date descending
        return tests.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}
