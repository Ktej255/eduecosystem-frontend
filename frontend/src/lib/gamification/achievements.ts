// Achievement Definitions and Logic

import { Achievement, AchievementRequirement, GamificationData } from './gamification-types';
import { getGamificationData, saveGamificationData } from './xp-engine';

// All available achievements
export const ACHIEVEMENTS: Achievement[] = [
    // Streak Achievements
    {
        id: 'first_steps',
        name: 'First Steps',
        description: 'Complete your first Pomodoro session',
        icon: '👣',
        category: 'special',
        requirement: { type: 'pomodoros', value: 1, comparison: 'gte' },
        xpReward: 25
    },
    {
        id: 'week_warrior',
        name: 'Week Warrior',
        description: 'Maintain a 7-day study streak',
        icon: '🔥',
        category: 'streak',
        requirement: { type: 'streak', value: 7, comparison: 'gte' },
        xpReward: 100
    },
    {
        id: 'fortnight_force',
        name: 'Fortnight Force',
        description: 'Maintain a 14-day study streak',
        icon: '💪',
        category: 'streak',
        requirement: { type: 'streak', value: 14, comparison: 'gte' },
        xpReward: 250
    },
    {
        id: 'monthly_master',
        name: 'Monthly Master',
        description: 'Maintain a 30-day study streak',
        icon: '🏆',
        category: 'streak',
        requirement: { type: 'streak', value: 30, comparison: 'gte' },
        xpReward: 500
    },

    // Study Achievements
    {
        id: 'pomodoro_10',
        name: 'Focused Mind',
        description: 'Complete 10 Pomodoro sessions',
        icon: '🍅',
        category: 'study',
        requirement: { type: 'pomodoros', value: 10, comparison: 'gte' },
        xpReward: 50
    },
    {
        id: 'pomodoro_50',
        name: 'Concentration King',
        description: 'Complete 50 Pomodoro sessions',
        icon: '👑',
        category: 'study',
        requirement: { type: 'pomodoros', value: 50, comparison: 'gte' },
        xpReward: 200
    },
    {
        id: 'pomodoro_100',
        name: 'Focus Legend',
        description: 'Complete 100 Pomodoro sessions',
        icon: '🌟',
        category: 'study',
        requirement: { type: 'pomodoros', value: 100, comparison: 'gte' },
        xpReward: 500
    },

    // Flashcard Achievements
    {
        id: 'flashcard_25',
        name: 'Quick Learner',
        description: 'Review 25 flashcards',
        icon: '📚',
        category: 'mastery',
        requirement: { type: 'flashcards', value: 25, comparison: 'gte' },
        xpReward: 25
    },
    {
        id: 'flashcard_100',
        name: 'Flashcard Master',
        description: 'Review 100 flashcards',
        icon: '🧠',
        category: 'mastery',
        requirement: { type: 'flashcards', value: 100, comparison: 'gte' },
        xpReward: 100
    },
    {
        id: 'flashcard_500',
        name: 'Memory Champion',
        description: 'Review 500 flashcards',
        icon: '🏅',
        category: 'mastery',
        requirement: { type: 'flashcards', value: 500, comparison: 'gte' },
        xpReward: 300
    },

    // MCQ Achievements
    {
        id: 'mcq_50',
        name: 'Quiz Taker',
        description: 'Attempt 50 MCQs',
        icon: '✏️',
        category: 'study',
        requirement: { type: 'mcqs', value: 50, comparison: 'gte' },
        xpReward: 50
    },
    {
        id: 'mcq_200',
        name: 'Quiz Expert',
        description: 'Attempt 200 MCQs',
        icon: '📝',
        category: 'study',
        requirement: { type: 'mcqs', value: 200, comparison: 'gte' },
        xpReward: 150
    },
    {
        id: 'perfect_session',
        name: 'Perfect Score',
        description: 'Get 100% accuracy in an MCQ session (10+ questions)',
        icon: '💯',
        category: 'special',
        requirement: { type: 'accuracy', value: 100, comparison: 'eq' },
        xpReward: 75
    },

    // Level Achievements
    {
        id: 'level_5',
        name: 'Rising Star',
        description: 'Reach Level 5',
        icon: '⭐',
        category: 'special',
        requirement: { type: 'level', value: 5, comparison: 'gte' },
        xpReward: 100
    },
    {
        id: 'level_10',
        name: 'Scholar',
        description: 'Reach Level 10',
        icon: '🎓',
        category: 'special',
        requirement: { type: 'level', value: 10, comparison: 'gte' },
        xpReward: 250
    },
    {
        id: 'level_20',
        name: 'Grandmaster',
        description: 'Reach Level 20',
        icon: '👑',
        category: 'special',
        requirement: { type: 'level', value: 20, comparison: 'gte' },
        xpReward: 1000
    },

    // Time Achievements
    {
        id: 'study_hour_5',
        name: 'Dedicated Student',
        description: 'Study for 5 hours total',
        icon: '⏰',
        category: 'study',
        requirement: { type: 'time', value: 300, comparison: 'gte' },
        xpReward: 75
    },
    {
        id: 'study_hour_25',
        name: 'Time Investor',
        description: 'Study for 25 hours total',
        icon: '⌛',
        category: 'study',
        requirement: { type: 'time', value: 1500, comparison: 'gte' },
        xpReward: 250
    },
    {
        id: 'study_hour_100',
        name: 'Century Club',
        description: 'Study for 100 hours total',
        icon: '💎',
        category: 'study',
        requirement: { type: 'time', value: 6000, comparison: 'gte' },
        xpReward: 1000
    }
];

/**
 * Check if an achievement requirement is met
 */
function checkRequirement(req: AchievementRequirement, data: GamificationData): boolean {
    let currentValue: number;

    switch (req.type) {
        case 'pomodoros':
            currentValue = data.stats.totalPomodoros;
            break;
        case 'flashcards':
            currentValue = data.stats.totalFlashcards;
            break;
        case 'mcqs':
            currentValue = data.stats.totalMCQs;
            break;
        case 'streak':
            currentValue = data.xp.streak;
            break;
        case 'level':
            currentValue = data.xp.level;
            break;
        case 'time':
            currentValue = data.stats.totalStudyMinutes;
            break;
        case 'accuracy':
            // Special case - handled separately
            return false;
        default:
            return false;
    }

    switch (req.comparison) {
        case 'gte':
            return currentValue >= req.value;
        case 'eq':
            return currentValue === req.value;
        case 'lte':
            return currentValue <= req.value;
        default:
            return false;
    }
}

/**
 * Check all achievements and return newly unlocked ones
 */
export function checkAchievements(): Achievement[] {
    const data = getGamificationData();
    const newlyUnlocked: Achievement[] = [];

    ACHIEVEMENTS.forEach(achievement => {
        // Skip if already unlocked
        if (data.achievements[achievement.id]) return;

        // Check if requirement is met
        if (checkRequirement(achievement.requirement, data)) {
            // Unlock achievement
            data.achievements[achievement.id] = {
                unlockedAt: new Date().toISOString()
            };

            // Award XP
            data.xp.totalXP += achievement.xpReward;

            newlyUnlocked.push({
                ...achievement,
                unlockedAt: data.achievements[achievement.id].unlockedAt
            });
        }
    });

    if (newlyUnlocked.length > 0) {
        saveGamificationData(data);
    }

    return newlyUnlocked;
}

/**
 * Manually unlock an achievement (for special cases like perfect score)
 */
export function unlockAchievement(achievementId: string): Achievement | null {
    const data = getGamificationData();
    const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);

    if (!achievement || data.achievements[achievementId]) {
        return null;
    }

    data.achievements[achievementId] = {
        unlockedAt: new Date().toISOString()
    };

    data.xp.totalXP += achievement.xpReward;
    saveGamificationData(data);

    return {
        ...achievement,
        unlockedAt: data.achievements[achievementId].unlockedAt
    };
}

/**
 * Get all unlocked achievements
 */
export function getUnlockedAchievements(): Achievement[] {
    const data = getGamificationData();

    return ACHIEVEMENTS
        .filter(a => data.achievements[a.id])
        .map(a => ({
            ...a,
            unlockedAt: data.achievements[a.id].unlockedAt
        }));
}

/**
 * Get achievement progress (locked achievements with progress)
 */
export function getAchievementProgress(): Array<Achievement & { progress: number; max: number }> {
    const data = getGamificationData();

    return ACHIEVEMENTS
        .filter(a => !data.achievements[a.id])
        .map(a => {
            let progress = 0;
            const max = a.requirement.value;

            switch (a.requirement.type) {
                case 'pomodoros':
                    progress = data.stats.totalPomodoros;
                    break;
                case 'flashcards':
                    progress = data.stats.totalFlashcards;
                    break;
                case 'mcqs':
                    progress = data.stats.totalMCQs;
                    break;
                case 'streak':
                    progress = data.xp.streak;
                    break;
                case 'level':
                    progress = data.xp.level;
                    break;
                case 'time':
                    progress = data.stats.totalStudyMinutes;
                    break;
            }

            return { ...a, progress: Math.min(progress, max), max };
        });
}
