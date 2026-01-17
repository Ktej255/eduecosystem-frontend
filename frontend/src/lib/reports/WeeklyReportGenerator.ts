// Weekly Report Generator - Aggregates data from localStorage for weekly report

import { getSRSData, getReviewsInRange, getDailyReviewCounts } from '../srs/srs-storage';

export interface WeeklyReportData {
    weekNumber: number;
    dateRange: { start: string; end: string };

    // Study Stats
    totalStudyMinutes: number;
    pomodorosCompleted: number;
    daysActive: number;

    // Flashcard Stats
    flashcardsReviewed: number;
    flashcardRetention: number;
    newCardsLearned: number;

    // MCQ Stats
    mcqsAttempted: number;
    mcqsCorrect: number;
    mcqAccuracy: number;

    // Topics
    topicsCovered: string[];
    strongestTopic: string | null;
    weakestTopic: string | null;

    // Mood (if available)
    averageMood: number | null;
    averageEnergy: number | null;

    // Trends
    dailyStudyMinutes: { date: string; minutes: number }[];
    dailyMCQAccuracy: { date: string; accuracy: number }[];

    // Achievements unlocked this week
    newAchievements: string[];
}

/**
 * Get the start and end dates of a given week
 */
function getWeekDates(weekOffset: number = 0): { start: Date; end: Date } {
    const now = new Date();
    const dayOfWeek = now.getDay();

    // Start of this week (Monday)
    const start = new Date(now);
    start.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + (weekOffset * 7));
    start.setHours(0, 0, 0, 0);

    // End of week (Sunday)
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    return { start, end };
}

/**
 * Get Pomodoro session data from localStorage
 */
function getPomodoroData(startDate: Date, endDate: Date): {
    totalMinutes: number;
    pomodorosCompleted: number;
    dailyMinutes: { date: string; minutes: number }[];
} {
    const result = {
        totalMinutes: 0,
        pomodorosCompleted: 0,
        dailyMinutes: [] as { date: string; minutes: number }[]
    };

    if (typeof window === 'undefined') return result;

    // Scan through localStorage for Pomodoro data
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('batch11_pomodoro_')) {
            try {
                const data = JSON.parse(localStorage.getItem(key) || '{}');
                if (data.sessionHistory) {
                    data.sessionHistory.forEach((session: any) => {
                        const sessionDate = new Date(session.timestamp || data.lastUpdated);
                        if (sessionDate >= startDate && sessionDate <= endDate) {
                            result.pomodorosCompleted++;
                            result.totalMinutes += 25; // Standard Pomodoro duration
                        }
                    });
                }
            } catch (e) {
                // Skip invalid entries
            }
        }
    }

    // Build daily breakdown
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        // Placeholder - would need more granular tracking
        result.dailyMinutes.push({ date: dateStr, minutes: 0 });
    }

    return result;
}

/**
 * Get MCQ performance data from localStorage
 */
function getMCQData(startDate: Date, endDate: Date): {
    attempted: number;
    correct: number;
    accuracy: number;
    topicPerformance: Record<string, { correct: number; total: number }>;
} {
    const result = {
        attempted: 0,
        correct: 0,
        accuracy: 0,
        topicPerformance: {} as Record<string, { correct: number; total: number }>
    };

    if (typeof window === 'undefined') return result;

    // Scan for MCQ results
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.includes('mcq_result') || key?.includes('pomodoro_mcq')) {
            try {
                const data = JSON.parse(localStorage.getItem(key) || '{}');
                const resultDate = new Date(data.timestamp || data.date);

                if (resultDate >= startDate && resultDate <= endDate) {
                    result.attempted += data.total || 0;
                    result.correct += data.correct || 0;

                    // Track by topic if available
                    if (data.topic) {
                        if (!result.topicPerformance[data.topic]) {
                            result.topicPerformance[data.topic] = { correct: 0, total: 0 };
                        }
                        result.topicPerformance[data.topic].correct += data.correct || 0;
                        result.topicPerformance[data.topic].total += data.total || 0;
                    }
                }
            } catch (e) {
                // Skip invalid entries
            }
        }
    }

    result.accuracy = result.attempted > 0
        ? Math.round((result.correct / result.attempted) * 100)
        : 0;

    return result;
}

/**
 * Get mood data from localStorage
 */
function getMoodData(startDate: Date, endDate: Date): {
    averageMood: number | null;
    averageEnergy: number | null;
} {
    if (typeof window === 'undefined') return { averageMood: null, averageEnergy: null };

    try {
        const moodData = JSON.parse(localStorage.getItem('mood_tracker_entries') || '[]');
        const weekMoods = moodData.filter((entry: any) => {
            const entryDate = new Date(entry.timestamp);
            return entryDate >= startDate && entryDate <= endDate;
        });

        if (weekMoods.length === 0) return { averageMood: null, averageEnergy: null };

        const moodMap: Record<string, number> = {
            'great': 5, 'good': 4, 'okay': 3, 'low': 2, 'stressed': 1
        };

        const totalMood = weekMoods.reduce((sum: number, e: any) => sum + (moodMap[e.mood] || 3), 0);
        const totalEnergy = weekMoods.reduce((sum: number, e: any) => sum + (e.energyLevel || 5), 0);

        return {
            averageMood: Math.round((totalMood / weekMoods.length) * 10) / 10,
            averageEnergy: Math.round((totalEnergy / weekMoods.length) * 10) / 10
        };
    } catch (e) {
        return { averageMood: null, averageEnergy: null };
    }
}

/**
 * Count active days in the week
 */
function countActiveDays(startDate: Date, endDate: Date): number {
    if (typeof window === 'undefined') return 0;

    const activeDays = new Set<string>();

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.includes('pomodoro') || key?.includes('flashcard') || key?.includes('mcq')) {
            try {
                const data = JSON.parse(localStorage.getItem(key) || '{}');
                const date = new Date(data.timestamp || data.lastUpdated || data.date);
                if (date >= startDate && date <= endDate) {
                    activeDays.add(date.toISOString().split('T')[0]);
                }
            } catch (e) {
                // Skip
            }
        }
    }

    return activeDays.size;
}

/**
 * Generate the complete weekly report
 */
export function generateWeeklyReport(weekOffset: number = 0): WeeklyReportData {
    const { start, end } = getWeekDates(weekOffset);

    // Get week number
    const startOfYear = new Date(start.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((start.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7);

    // Gather data from various sources
    const pomodoroData = getPomodoroData(start, end);
    const mcqData = getMCQData(start, end);
    const moodData = getMoodData(start, end);
    const srsReviews = getReviewsInRange(start, end);

    // Calculate flashcard stats
    const flashcardsReviewed = srsReviews.length;
    const flashcardsPassed = srsReviews.filter(r => r.quality >= 3).length;
    const flashcardRetention = flashcardsReviewed > 0
        ? Math.round((flashcardsPassed / flashcardsReviewed) * 100)
        : 0;

    // Find strongest and weakest topics
    let strongestTopic: string | null = null;
    let weakestTopic: string | null = null;
    let bestAccuracy = 0;
    let worstAccuracy = 100;

    Object.entries(mcqData.topicPerformance).forEach(([topic, data]) => {
        const accuracy = data.total > 0 ? (data.correct / data.total) * 100 : 0;
        if (accuracy > bestAccuracy) {
            bestAccuracy = accuracy;
            strongestTopic = topic;
        }
        if (accuracy < worstAccuracy && data.total >= 5) {
            worstAccuracy = accuracy;
            weakestTopic = topic;
        }
    });

    return {
        weekNumber,
        dateRange: {
            start: start.toISOString().split('T')[0],
            end: end.toISOString().split('T')[0]
        },

        totalStudyMinutes: pomodoroData.totalMinutes,
        pomodorosCompleted: pomodoroData.pomodorosCompleted,
        daysActive: countActiveDays(start, end),

        flashcardsReviewed,
        flashcardRetention,
        newCardsLearned: srsReviews.filter(r => r.quality >= 4).length,

        mcqsAttempted: mcqData.attempted,
        mcqsCorrect: mcqData.correct,
        mcqAccuracy: mcqData.accuracy,

        topicsCovered: Object.keys(mcqData.topicPerformance),
        strongestTopic,
        weakestTopic,

        averageMood: moodData.averageMood,
        averageEnergy: moodData.averageEnergy,

        dailyStudyMinutes: pomodoroData.dailyMinutes,
        dailyMCQAccuracy: [],

        newAchievements: []
    };
}

/**
 * Get a summary text for the weekly report
 */
export function getWeeklySummaryText(report: WeeklyReportData): string {
    const parts: string[] = [];

    if (report.pomodorosCompleted > 0) {
        parts.push(`Completed ${report.pomodorosCompleted} Pomodoro sessions`);
    }

    if (report.flashcardsReviewed > 0) {
        parts.push(`Reviewed ${report.flashcardsReviewed} flashcards (${report.flashcardRetention}% retention)`);
    }

    if (report.mcqsAttempted > 0) {
        parts.push(`Attempted ${report.mcqsAttempted} MCQs (${report.mcqAccuracy}% accuracy)`);
    }

    if (report.daysActive > 0) {
        parts.push(`Active ${report.daysActive}/7 days`);
    }

    return parts.join(' • ');
}
