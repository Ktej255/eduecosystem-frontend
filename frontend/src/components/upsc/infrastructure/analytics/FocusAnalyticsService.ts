import { getProgressStore } from "@/lib/polity-progress-store";
import { getHistoryProgressStore } from "@/lib/history-progress-store";
import { getAllProgress as getRevisionProgress } from "@/components/upsc/subjects/polity/revision/progress-utils";

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
    type: 'POMODORO_MCQ' | 'RAS_MOCK' | 'HISTORY_DRILL';
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

        // From Study Sessions (Polity)
        Object.values(polityStore.chapters).forEach(ch => {
            totalFlashcards += (ch.flashcardsViewed || 0);
        });

        // From Study Sessions (History)
        const historyStore = getHistoryProgressStore();
        Object.values(historyStore.chapters).forEach(ch => {
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
                const parts = key.split('_');
                let weekId, dayId, subjectName = 'polity';

                if (parts.length === 5) {
                    // [batch11, pomodoro, subject, weekId, dayId]
                    subjectName = parts[2];
                    weekId = parts[3];
                    dayId = parts[4];
                } else if (parts.length === 4) {
                    // Legacy: [batch11, pomodoro, weekId, dayId]
                    weekId = parts[2];
                    dayId = parts[3];
                } else {
                    return; // Unknown format
                }

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
                            id: parseInt(`${weekId}${dayId}${subjectName === 'history' ? '1' : '0'}`), // Adjusted ID to avoid collision
                            title: `${subjectName.charAt(0).toUpperCase() + subjectName.slice(1)}: Week ${weekId} Day ${dayId}`,
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
        });

        // 2. Scan History Drill Results
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('history_drill_')) {
                try {
                    const data = JSON.parse(localStorage.getItem(key) || '{}');
                    tests.push({
                        id: parseInt(key.split('_')[2]),
                        title: `Spectrum Drill: ${data.chapters?.length || 0} Chapters`,
                        date: data.timestamp || new Date().toISOString(),
                        score: data.score || 0,
                        totalQuestions: data.totalQuestions || 0,
                        correctCount: data.correctCount || 0,
                        type: 'HISTORY_DRILL' as any // Adding a temporary type or extending TestHistoryItem
                    });
                } catch (e) {
                    console.error("Error parsing history drill data", e);
                }
            }
        });

        // 3. Scan RAS Mock Results (if any stored) - using 'ras_test_results' fallback from ras-api.ts

        // Sort by date descending
        return tests.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    },

    /**
     * Retrieves detailed test results for a specific test ID.
     */
    getTestDetails(id: number): any | null {
        if (typeof window === 'undefined') return null;

        // 1. Check Pomodoro Sessions
        let foundDetails: any = null;

        Object.keys(localStorage).forEach(key => {
            if (foundDetails) return; // Stop if found

            if (key.startsWith('batch11_pomodoro_')) {
                const parts = key.split('_');
                let weekId, dayId, subjectName = 'polity';

                if (parts.length === 5) {
                    subjectName = parts[2];
                    weekId = parts[3];
                    dayId = parts[4];
                } else if (parts.length === 4) {
                    weekId = parts[2];
                    dayId = parts[3];
                } else {
                    return;
                }

                const generatedId = parseInt(`${weekId}${dayId}${subjectName === 'history' ? '1' : '0'}`);

                if (generatedId === id) {
                    try {
                        const data = JSON.parse(localStorage.getItem(key) || '{}');
                        const history = data.sessionHistory || [];

                        let totalQ = 0;
                        let correctQ = 0;
                        const answers: any[] = [];

                        history.forEach((h: any) => {
                            totalQ += (h.mcqResults?.total || 0);
                            correctQ += (h.mcqResults?.correct || 0);

                            // Aggregate detailed answers if available
                            if (h.mcqDetails && Array.isArray(h.mcqDetails)) {
                                h.mcqDetails.forEach((d: any) => {
                                    answers.push({
                                        qId: d.questionId,
                                        answer: d.selectedAnswer ?? -1,
                                        isCorrect: d.isCorrect,
                                        confidence: d.confidence === 'sure' ? 1 : d.confidence === '50-50' ? 2 : d.confidence === 'one-option' ? 3 : d.confidence === 'blind' ? 4 : null,
                                        timeSpentSeconds: d.timeSpent,
                                        subtopic: d.subtopicId // Pass subtopic for detailed report topic analysis
                                    });
                                });
                            }
                        });

                        foundDetails = {
                            id: generatedId,
                            cycle_id: parseInt(weekId),
                            day_number: parseInt(dayId),
                            score: Math.round((correctQ / totalQ) * 100),
                            total_questions: totalQ,
                            correct_count: correctQ,
                            incorrect_count: totalQ - correctQ,
                            unanswered_count: 0,
                            answers: answers,
                            timestamp: data.lastUpdated || new Date().toISOString()
                        };
                    } catch (e) {
                        console.error("Error parsing details", e);
                    }
                }
            }
        });

        if (foundDetails) return foundDetails;

        // 2. Check History Drills (Spectrum)
        // Keys: history_drill_ID
        const drillKey = `history_drill_${id}`;
        const drillDataStr = localStorage.getItem(drillKey);

        if (drillDataStr) {
            try {
                const d = JSON.parse(drillDataStr);
                // Drills store 'answers' directly? checking spectrum-mcq-loader or HistoryMCQPage
                // Usually we might store them. If not, we reconstruction is limited.
                // Assuming History Drill stores 'results' array.

                const answers = (d.results || []).map((r: any) => ({
                    qId: r.questionId,
                    answer: r.selectedAnswer ?? -1,
                    isCorrect: r.isCorrect,
                    confidence: null, // History drills might not have confidence yet
                    timeSpentSeconds: 0
                }));

                return {
                    id: id,
                    cycle_id: 0,
                    day_number: 0,
                    score: d.score || 0,
                    total_questions: d.totalQuestions || 0,
                    correct_count: d.correctCount || 0,
                    incorrect_count: (d.totalQuestions || 0) - (d.correctCount || 0),
                    unanswered_count: 0,
                    answers: answers,
                    timestamp: d.timestamp || new Date().toISOString()
                };
            } catch (e) {
                console.error("Error parsing drill details", e);
            }
        }

        return null;
    }
};
