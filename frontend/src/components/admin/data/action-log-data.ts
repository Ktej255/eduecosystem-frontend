// Action Log Data - Historical record of development work
// This stores daily actions, commands, and features worked on

export interface DailyAction {
    date: string; // ISO date string YYYY-MM-DD
    commands: string[]; // User commands/requests for the day
    features: string[]; // Features worked on
    filesModified: string[]; // Key files that were changed
    deployments: string[]; // Deployment commits
    notes?: string;
}

// Historical action log from project start
export const ACTION_LOG: DailyAction[] = [
    {
        date: '2026-01-12',
        commands: [
            'Fix Revision Portal visibility (Master ID only)',
            'Fix Study Planner dates (Jan 12 start)',
            'Implement Enhanced Pomodoro Cycle (Subtopics, Flashcards, MCQs)',
            'Create Admin Action Log',
            'Implement Evening Session with Morning Progress integration',
            'Implement Unified Progress Tracking store',
            'Create Admin Content System (Generators)'
        ],
        features: [
            'Enhanced Pomodoro (SubtopicSelector, CycleFlashcards, CycleMCQs)',
            'Admin Action Log with Calendar & Weekly Readiness Alert',
            'Batch1_1EveningSession - 80% new/20% old flashcards logic',
            'Unified Progress Store (polity-progress-store.ts) & Hook',
            'Real-time sync between Pomodoro, Dashboard, Study Planner',
            'Content System Dashboard (Flashcard & MCQ Generators)'
        ],
        filesModified: [
            'components/batch1-1/pomodoro/*.tsx',
            'components/batch1/polity/PolityScheduleView.tsx',
            'components/admin/data/action-log-data.ts',
            'app/(dashboard)/admin/actions/page.tsx',
            'components/batch1-1/evening/Batch1_1EveningSession.tsx',
            'lib/polity-progress-store.ts',
            'hooks/usePolityProgress.ts',
            'app/(dashboard)/admin/content-system/**/*.tsx'
        ],
        deployments: ['80e05f1', '5fd55b8', '6570f07', 'fe47f89', '1a067df']
    },
    {
        date: '2026-01-11',
        commands: [
            'Enable Revision Portal for Master ID',
            'Fix 404 errors in revision routes',
            'Add both Live/Recording options for Master ID testing'
        ],
        features: [
            'Revision portal route pages (srs, quick, facts, weak, custom, [id])',
            'MorningMeditation.tsx - Dual button display for Master ID',
            'Attendance tracking integration'
        ],
        filesModified: [
            'app/(student-portal)/student/revision/srs/page.tsx',
            'app/(student-portal)/student/revision/quick/page.tsx',
            'app/(student-portal)/student/revision/facts/page.tsx',
            'app/(student-portal)/student/revision/weak/page.tsx',
            'app/(student-portal)/student/revision/custom/page.tsx',
            'app/(student-portal)/student/revision/[id]/page.tsx',
            'components/batch1/workflow/MorningMeditation.tsx'
        ],
        deployments: ['4bb4a9d']
    },
    {
        date: '2026-01-10',
        commands: [
            'Implement completion tracking for meditation/graphotherapy',
            'Fix VoiceRecallMode type error',
            'Plan Polity study schedule',
            'Implement 95 Polity topics'
        ],
        features: [
            'Dashboard completion status from localStorage',
            'JourneyTimeline checkmark indicators',
            'Polity 95 topics data structure',
            'polity-schedule-data.ts - Weekly study schedule generator'
        ],
        filesModified: [
            'components/batch1/polity/data/polity-schedule-data.ts',
            'components/batch1-1/polity/data/polity-modules.ts',
            'components/student-portal/StudentDashboard.tsx'
        ],
        deployments: []
    },
    {
        date: '2026-01-08',
        commands: [
            'Debug Day 6-10 crashes',
            'Implement content map for politics section',
            'Fix Back to Day X navigation'
        ],
        features: [
            'Content map for flashcard/topic visibility by day',
            'DayXDashboard navigation fixes',
            'Build error resolutions'
        ],
        filesModified: [
            'components/batch1/polity/DayXDashboard.tsx'
        ],
        deployments: []
    },
    {
        date: '2026-01-06',
        commands: [
            'Enhance flashcard UX and session report',
            'Implement AI recall percentage',
            'Reduce audio recording steps'
        ],
        features: [
            'Detailed session report with audio count',
            'AI-generated content recall percentage',
            'Streamlined audio recording flow'
        ],
        filesModified: [
            'components/batch1/flashcards/FlashcardSession.tsx'
        ],
        deployments: []
    },
    {
        date: '2026-01-05',
        commands: [
            'Implement Kena Upanishad content',
            'Improve flashcard recording feature',
            'Update MCQ test data for Day 5'
        ],
        features: [
            'Kena Upanishad dedicated page',
            'Enhanced UI/UX for recording',
            'Day 5 MCQs (60 questions) - Citizenship'
        ],
        filesModified: [
            'components/batch1/polity/data/day5-mcqs.ts',
            'components/batch1/qa/MCQTestSession.tsx'
        ],
        deployments: []
    }
];

// Utility to get today's date in YYYY-MM-DD format
export function getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
}

// Get actions for a specific date
export function getActionsForDate(date: string): DailyAction | undefined {
    return ACTION_LOG.find(a => a.date === date);
}

// Get all dates with actions
export function getActionDates(): string[] {
    return ACTION_LOG.map(a => a.date).sort((a, b) => b.localeCompare(a)); // Recent first
}

// Get actions for a date range
export function getActionsInRange(startDate: string, endDate: string): DailyAction[] {
    return ACTION_LOG.filter(a => a.date >= startDate && a.date <= endDate);
}
