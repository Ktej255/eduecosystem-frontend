
export type JourneyPhase = 'priming' | 'activation' | 'core' | 'review';

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
}

export interface DayPlan {
    date: string;
    dayNumber: number;
    totalDurationMinutes: number;
    completionPercentage: number;
    steps: JourneyStep[];
    quote?: {
        text: string;
        author: string;
    };
}

export interface UserProgressContext {
    lastCompletedDate: string | null;
    streakDays: number;
    completedChapters: number[];
    masteredChapters: number[];
    weakTopics: string[]; // IDs of weak topics
}

/**
 * MOCK: Sample Quotes for the journey
 */
const MOTIVATIONAL_QUOTES = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

/**
 * ENGINE: Calculates the Daily Journey Plan
 */
export class JourneyEngine {

    /**
     * Generate the plan for a specific date based on user progress.
     */
    static generateDailyPlan(
        targetDate: Date,
        progress: UserProgressContext
    ): DayPlan {
        const dayNumber = this.calculateDayNumber(targetDate, progress);

        // 1. Priming Phase (Meditation)
        const primingStep: JourneyStep = {
            id: `priming-${dayNumber}`,
            phase: 'priming',
            title: 'Morning Clarity',
            subtitle: 'Meditation Session',
            description: 'Start your day with focus and intention.',
            durationMinutes: 10,
            status: 'ready', // Always ready at start of day
            actionUrl: '/student/meditation',
            icon: 'Sun'
        };

        // 2. Activation Phase (Graphotherapy)
        // Dependent on priming? For MVP, let's make it ready but typically done after.
        const activationStep: JourneyStep = {
            id: `activation-${dayNumber}`,
            phase: 'activation',
            title: 'Neuro-Wiring',
            subtitle: 'Graphotherapy Practice',
            description: 'Align your subconscious with writing exercises.',
            durationMinutes: 15,
            status: 'locked', // Unlock after meditation in full version, 'ready' for MVP
            actionUrl: '/student/graphotherapy',
            icon: 'PenTool'
        };

        // 3. Core Study Phase (Batch Content)
        // This should come from the Syllabus Schedule
        const coreStep: JourneyStep = {
            id: `core-${dayNumber}`,
            phase: 'core',
            title: 'Core Concept Mastery',
            subtitle: `Day ${dayNumber} Syllabus`,
            description: 'Deep dive into today\'s scheduled chapters.',
            durationMinutes: 120, // 2 hours standard
            status: 'locked',
            actionUrl: `/student/batch1/cycle/1/day/${dayNumber}/morning`, // Deep link to specific day
            icon: 'BookOpen'
        };

        // 4. Review Phase (Voice Recall / Flashcards)
        const reviewStep: JourneyStep = {
            id: `review-${dayNumber}`,
            phase: 'review',
            title: 'Active Recall',
            subtitle: 'Voice & Flashcards',
            description: 'Solidify retention with active testing.',
            durationMinutes: 30,
            status: 'locked',
            actionUrl: '/student/revision',
            icon: 'Mic'
        };

        // Adjust statuses for MVP demo (assume sequential unlock logic happens in UI)
        // For now, let's make the first step ready and others locked, 
        // OR rely on the frontend to manage 'unlocked' state based on completion.

        return {
            date: targetDate.toISOString(),
            dayNumber: dayNumber,
            totalDurationMinutes: 10 + 15 + 120 + 30, // Sum of steps
            completionPercentage: 0, // Fresh plan
            steps: [primingStep, activationStep, coreStep, reviewStep],
            quote: MOTIVATIONAL_QUOTES[dayNumber % MOTIVATIONAL_QUOTES.length]
        };
    }

    /**
     * Calculate effective Day Number relative to start date
     */
    private static calculateDayNumber(now: Date, progress: UserProgressContext): number {
        // Fallback start date if not stored
        const startDateStr = typeof localStorage !== 'undefined'
            ? localStorage.getItem('batch1_start_date')
            : '2026-01-01T00:00:00';

        const startDate = new Date(startDateStr || '2026-01-01');
        const diffTime = Math.abs(now.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays || 1;
    }
}
