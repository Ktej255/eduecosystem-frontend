// Gamification Types

export interface UserXP {
    currentXP: number;
    totalXP: number;
    level: number;
    xpToNextLevel: number;
    streak: number;
    longestStreak: number;
    lastActivityDate: string | null;
}

export interface XPEvent {
    type: XPEventType;
    xp: number;
    timestamp: string;
    details?: string;
}

export type XPEventType =
    | 'pomodoro_complete'
    | 'flashcard_review'
    | 'mcq_correct'
    | 'mcq_attempt'
    | 'streak_bonus'
    | 'achievement_unlock'
    | 'daily_login'
    | 'session_complete'
    | 'mains_submit'
    | 'drill_complete'
    | 'csat_complete'
    | 'mcq_session_complete';


export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: 'streak' | 'study' | 'mastery' | 'special';
    requirement: AchievementRequirement;
    xpReward: number;
    unlockedAt?: string;
}

export interface AchievementRequirement {
    type: 'pomodoros' | 'flashcards' | 'mcqs' | 'streak' | 'accuracy' | 'level' | 'time';
    value: number;
    comparison: 'gte' | 'eq' | 'lte';
}

export interface GamificationData {
    xp: UserXP;
    events: XPEvent[];
    achievements: Record<string, { unlockedAt: string }>;
    stats: {
        totalPomodoros: number;
        totalFlashcards: number;
        totalMCQs: number;
        totalMCQsCorrect: number;
        totalStudyMinutes: number;
    };
}

// XP thresholds for each level
export const LEVEL_THRESHOLDS = [
    0,      // Level 1
    100,    // Level 2
    300,    // Level 3
    600,    // Level 4
    1000,   // Level 5
    1500,   // Level 6
    2100,   // Level 7
    2800,   // Level 8
    3600,   // Level 9
    4500,   // Level 10
    5500,   // Level 11
    6600,   // Level 12
    7800,   // Level 13
    9100,   // Level 14
    10500,  // Level 15
    12000,  // Level 16
    13600,  // Level 17
    15300,  // Level 18
    17100,  // Level 19
    19000,  // Level 20
];

// XP rewards for different actions
export const XP_REWARDS: Record<XPEventType, number> = {
    pomodoro_complete: 25,
    flashcard_review: 5,
    mcq_correct: 10,
    mcq_attempt: 2,
    streak_bonus: 50,  // Per day in streak
    achievement_unlock: 0, // Varies by achievement
    daily_login: 10,
    session_complete: 50,
    mains_submit: 75,      // UPSC Mains answer submission
    drill_complete: 30,    // Completing a full drill session
    csat_complete: 50,      // Completing a daily CSAT practice session
    mcq_session_complete: 40 // Completing a full MCQ session
};

