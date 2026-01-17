// Study Heatmap Generator - Tracks daily study intensity

export interface DayActivity {
    date: string;          // YYYY-MM-DD format
    studyMinutes: number;
    pomodorosCompleted: number;
    flashcardsReviewed: number;
    mcqsAttempted: number;
    intensity: 0 | 1 | 2 | 3 | 4;  // 0=none, 1=light, 2=medium, 3=high, 4=very high
}

export interface HeatmapData {
    days: DayActivity[];
    totalStudyMinutes: number;
    totalDaysActive: number;
    currentStreak: number;
    longestStreak: number;
}

const HEATMAP_STORAGE_KEY = 'eduecosystem_study_heatmap';

/**
 * Get stored heatmap data
 */
function getStoredHeatmap(): Record<string, DayActivity> {
    if (typeof window === 'undefined') return {};

    try {
        const stored = localStorage.getItem(HEATMAP_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (e) {
        return {};
    }
}

/**
 * Save heatmap data
 */
function saveHeatmap(data: Record<string, DayActivity>): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(HEATMAP_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Get today's date string
 */
function getTodayString(): string {
    return new Date().toISOString().split('T')[0];
}

/**
 * Calculate intensity level based on study minutes
 */
function calculateIntensity(minutes: number): DayActivity['intensity'] {
    if (minutes === 0) return 0;
    if (minutes < 30) return 1;
    if (minutes < 60) return 2;
    if (minutes < 120) return 3;
    return 4;
}

/**
 * Record study activity for today
 */
export function recordStudyActivity(
    type: 'pomodoro' | 'flashcard' | 'mcq',
    minutes: number = 0
): DayActivity {
    const data = getStoredHeatmap();
    const today = getTodayString();

    if (!data[today]) {
        data[today] = {
            date: today,
            studyMinutes: 0,
            pomodorosCompleted: 0,
            flashcardsReviewed: 0,
            mcqsAttempted: 0,
            intensity: 0
        };
    }

    switch (type) {
        case 'pomodoro':
            data[today].pomodorosCompleted++;
            data[today].studyMinutes += minutes || 25;
            break;
        case 'flashcard':
            data[today].flashcardsReviewed++;
            data[today].studyMinutes += minutes || 1;
            break;
        case 'mcq':
            data[today].mcqsAttempted++;
            data[today].studyMinutes += minutes || 1;
            break;
    }

    data[today].intensity = calculateIntensity(data[today].studyMinutes);

    saveHeatmap(data);
    return data[today];
}

/**
 * Get heatmap data for the last N days
 */
export function getHeatmapData(days: number = 365): HeatmapData {
    const data = getStoredHeatmap();
    const result: DayActivity[] = [];

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    let totalStudyMinutes = 0;
    let totalDaysActive = 0;
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    // Generate array of all days
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];

        if (data[dateStr]) {
            result.push(data[dateStr]);
            totalStudyMinutes += data[dateStr].studyMinutes;
            if (data[dateStr].studyMinutes > 0) {
                totalDaysActive++;
                tempStreak++;
                longestStreak = Math.max(longestStreak, tempStreak);
            } else {
                tempStreak = 0;
            }
        } else {
            result.push({
                date: dateStr,
                studyMinutes: 0,
                pomodorosCompleted: 0,
                flashcardsReviewed: 0,
                mcqsAttempted: 0,
                intensity: 0
            });
            tempStreak = 0;
        }
    }

    // Calculate current streak (from today backwards)
    const today = getTodayString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    // Check if active today or yesterday (allow 1 day gap)
    if (data[today]?.studyMinutes > 0 || data[yesterdayStr]?.studyMinutes > 0) {
        let checkDate = new Date();
        if (!data[today]?.studyMinutes) {
            checkDate.setDate(checkDate.getDate() - 1);
        }

        while (true) {
            const checkStr = checkDate.toISOString().split('T')[0];
            if (data[checkStr]?.studyMinutes > 0) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
    }

    return {
        days: result,
        totalStudyMinutes,
        totalDaysActive,
        currentStreak,
        longestStreak
    };
}

/**
 * Get weekly summary for the last N weeks
 */
export function getWeeklySummary(weeks: number = 12): {
    week: number;
    startDate: string;
    studyMinutes: number;
    daysActive: number;
}[] {
    const data = getStoredHeatmap();
    const result: { week: number; startDate: string; studyMinutes: number; daysActive: number }[] = [];

    const today = new Date();

    for (let w = 0; w < weeks; w++) {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - (today.getDay() + 7 * w));

        let weekMinutes = 0;
        let weekDaysActive = 0;

        for (let d = 0; d < 7; d++) {
            const checkDate = new Date(weekStart);
            checkDate.setDate(weekStart.getDate() + d);
            const dateStr = checkDate.toISOString().split('T')[0];

            if (data[dateStr]) {
                weekMinutes += data[dateStr].studyMinutes;
                if (data[dateStr].studyMinutes > 0) {
                    weekDaysActive++;
                }
            }
        }

        result.unshift({
            week: weeks - w,
            startDate: weekStart.toISOString().split('T')[0],
            studyMinutes: weekMinutes,
            daysActive: weekDaysActive
        });
    }

    return result;
}

/**
 * Get intensity color for CSS
 */
export function getIntensityColor(intensity: DayActivity['intensity']): string {
    switch (intensity) {
        case 0: return 'bg-gray-100 dark:bg-gray-800';
        case 1: return 'bg-green-200 dark:bg-green-900';
        case 2: return 'bg-green-400 dark:bg-green-700';
        case 3: return 'bg-green-500 dark:bg-green-600';
        case 4: return 'bg-green-600 dark:bg-green-500';
    }
}

/**
 * Format minutes to readable string
 */
export function formatStudyTime(minutes: number): string {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}
