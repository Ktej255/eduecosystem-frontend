
export type JourneyPhase = 'priming' | 'activation' | 'core' | 'review' | 'evening' | 'night';

export interface JourneyStep {
    id: string;
    phase: JourneyPhase;
    title: string;
    subtitle?: string;
    description?: string;
    durationMinutes: number;
    status: 'locked' | 'ready' | 'in-progress' | 'completed';
    actionUrl: string;
    icon?: string; // Lucide icon name
    timeWindow?: string; // e.g., "5:50 AM - 6:30 AM"
}

export interface DayPlan {
    date: string;
    dayNumber: number;
    weekId: number;
    dayOfWeek: number; // 1-6 (Mon-Sat)
    totalDurationMinutes: number;
    completionPercentage: number;
    steps: JourneyStep[];
    quote?: {
        text: string;
        author: string;
    };
    dateDisplay: string; // e.g., "January 12"
}

export interface UserProgressContext {
    lastCompletedDate: string | null;
    streakDays: number;
    completedChapters: number[];
    masteredChapters: number[];
    weakTopics: string[]; // IDs of weak topics
}

/**
 * Batch 1.1 starts on January 12, 2026 (Monday)
 */
const BATCH_START_DATE = new Date(2026, 0, 12); // January 12, 2026

/**
 * MOCK: Sample Quotes for the journey
 */
const MOTIVATIONAL_QUOTES = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" }
];

/**
 * ENGINE: Calculates the Daily Journey Plan
 */
export class JourneyEngine {

    /**
     * Calculate week ID (1-20) and day of week (1-6) from a date
     * Week starts Monday, ends Saturday (Sunday is rest day)
     */
    static calculateWeekAndDay(targetDate: Date): { weekId: number; dayOfWeek: number; isStudyDay: boolean } {
        // Get day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const jsDay = targetDate.getDay();

        // Sunday (0) is a rest day
        if (jsDay === 0) {
            return { weekId: 1, dayOfWeek: 0, isStudyDay: false };
        }

        // Map JS day to our system: Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6
        const dayOfWeek = jsDay; // 1-6 for Mon-Sat

        // Calculate days since batch start
        const diffTime = targetDate.getTime() - BATCH_START_DATE.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // If before start date, default to week 1, day 1
        if (diffDays < 0) {
            return { weekId: 1, dayOfWeek: 1, isStudyDay: true };
        }

        // Calculate week number (0-indexed initially, then add 1)
        // Week 1 is Jan 12-17 (Mon-Sat)
        // Week 2 is Jan 19-24 (Mon-Sat), etc.
        const weekId = Math.floor(diffDays / 7) + 1;

        return {
            weekId: Math.min(weekId, 20), // Cap at week 20
            dayOfWeek,
            isStudyDay: true
        };
    }

    /**
     * Generate the complete daily plan based on user progress.
     */
    static generateDailyPlan(
        targetDate: Date,
        progress: UserProgressContext
    ): DayPlan {
        const { weekId, dayOfWeek, isStudyDay } = this.calculateWeekAndDay(targetDate);
        const dayNumber = this.calculateDayNumber(targetDate, progress);
        const currentHour = targetDate.getHours();

        // Date display
        const dateDisplay = targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

        // Determine current time period
        const isMorning = currentHour < 14; // Before 2 PM
        const isEvening = currentHour >= 17; // After 5 PM
        const isNight = currentHour >= 21; // After 9 PM

        // Determine if it's Saturday (test day)
        const isSaturday = dayOfWeek === 6;

        // 1. Morning Meditation (5:50 AM - 6:30 AM)
        const meditationStep: JourneyStep = {
            id: `meditation-${dayNumber}`,
            phase: 'priming',
            title: 'Morning Meditation',
            subtitle: currentHour >= 5 && currentHour < 7 ? '🔴 Live Session' : 'Watch Recording',
            description: 'Start your day with clarity and focus.',
            durationMinutes: 40,
            status: 'ready',
            actionUrl: '/student/journey/meditation',
            icon: 'Sun',
            timeWindow: '5:50 AM - 6:30 AM'
        };

        // 2. Graphotherapy (After Meditation)
        const graphoStep: JourneyStep = {
            id: `grapho-${dayNumber}`,
            phase: 'activation',
            title: 'Graphotherapy',
            subtitle: `Level 2 • Day ${dayNumber}`,
            description: 'Rewire your subconscious with writing exercises.',
            durationMinutes: 30,
            status: 'ready',
            actionUrl: `/student/graphotherapy/drill/${dayNumber}`,
            icon: 'PenTool',
            timeWindow: 'After Meditation'
        };

        // 3. Pomodoro Study Session (Until 2 PM) - Link to specific week/day
        const pomodoroStep: JourneyStep = {
            id: `pomodoro-${dayNumber}`,
            phase: 'core',
            title: isSaturday ? 'Weekly Test' : 'Deep Study Session',
            subtitle: isSaturday ? `Week ${weekId} Assessment` : `Week ${weekId} • Day ${dayOfWeek}`,
            description: isSaturday
                ? 'Full assessment of this week\'s learning.'
                : '6-hour focused study with structured breaks.',
            durationMinutes: isSaturday ? 180 : 360,
            status: isMorning ? 'ready' : 'completed',
            actionUrl: isSaturday
                ? `/student/batch1-1/${weekId}/saturday-test`
                : `/student/batch1-1/${weekId}/${dayOfWeek}/pomodoro`,
            icon: 'BookOpen',
            timeWindow: isSaturday ? '8:00 AM - 11:00 AM' : '8:00 AM - 2:00 PM'
        };

        // 4. Evening Revision (5 PM onwards) - Link to week/day evening session
        const eveningStep: JourneyStep = {
            id: `evening-${dayNumber}`,
            phase: 'evening',
            title: 'Evening Revision',
            subtitle: 'Flashcards + MCQs + CSAT',
            description: 'Consolidate learning with active recall and practice.',
            durationMinutes: 180,
            status: isEvening ? 'ready' : 'locked',
            actionUrl: `/student/batch1-1/${weekId}/${dayOfWeek}/evening`,
            icon: 'Brain',
            timeWindow: '5:00 PM - 8:00 PM'
        };

        // 5. Night Class (9 PM onwards)
        const nightStep: JourneyStep = {
            id: `night-${dayNumber}`,
            phase: 'night',
            title: 'Night Class',
            subtitle: isNight ? '🔴 Live Session' : 'Watch Recording',
            description: 'End your day with reflection and new learning.',
            durationMinutes: 60,
            status: isNight || isEvening ? 'ready' : 'locked',
            actionUrl: '/student/journey/night-class',
            icon: 'Moon',
            timeWindow: '9:00 PM - 10:00 PM'
        };

        const steps = [meditationStep, graphoStep, pomodoroStep, eveningStep, nightStep];

        return {
            date: targetDate.toISOString(),
            dayNumber: dayNumber,
            weekId: weekId,
            dayOfWeek: dayOfWeek,
            dateDisplay: dateDisplay,
            totalDurationMinutes: steps.reduce((sum, s) => sum + s.durationMinutes, 0),
            completionPercentage: 0,
            steps: steps,
            quote: MOTIVATIONAL_QUOTES[dayNumber % MOTIVATIONAL_QUOTES.length]
        };
    }

    /**
     * Calculate effective Day Number relative to start date
     */
    private static calculateDayNumber(now: Date, progress: UserProgressContext): number {
        const diffTime = now.getTime() - BATCH_START_DATE.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return Math.max(diffDays + 1, 1); // 1-indexed
    }
}
