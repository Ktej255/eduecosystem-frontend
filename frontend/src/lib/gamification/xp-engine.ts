// XP Engine - Handles XP calculation, levels, and rewards

import {
    UserXP,
    XPEvent,
    XPEventType,
    GamificationData,
    LEVEL_THRESHOLDS,
    XP_REWARDS
} from './gamification-types';

const GAMIFICATION_STORAGE_KEY = 'eduecosystem_gamification';

/**
 * Get gamification data from localStorage
 */
export function getGamificationData(): GamificationData {
    if (typeof window === 'undefined') {
        return createEmptyData();
    }

    const stored = localStorage.getItem(GAMIFICATION_STORAGE_KEY);
    if (!stored) {
        return createEmptyData();
    }

    try {
        return JSON.parse(stored);
    } catch (e) {
        return createEmptyData();
    }
}

/**
 * Save gamification data to localStorage
 */
export function saveGamificationData(data: GamificationData): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(GAMIFICATION_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Create empty gamification data structure
 */
function createEmptyData(): GamificationData {
    return {
        xp: {
            currentXP: 0,
            totalXP: 0,
            level: 1,
            xpToNextLevel: LEVEL_THRESHOLDS[1],
            streak: 0,
            longestStreak: 0,
            lastActivityDate: null
        },
        events: [],
        achievements: {},
        stats: {
            totalPomodoros: 0,
            totalFlashcards: 0,
            totalMCQs: 0,
            totalMCQsCorrect: 0,
            totalStudyMinutes: 0
        }
    };
}

/**
 * Calculate level from total XP
 */
export function calculateLevel(totalXP: number): { level: number; currentXP: number; xpToNextLevel: number } {
    let level = 1;

    for (let i = 1; i < LEVEL_THRESHOLDS.length; i++) {
        if (totalXP >= LEVEL_THRESHOLDS[i]) {
            level = i + 1;
        } else {
            break;
        }
    }

    const currentLevelXP = LEVEL_THRESHOLDS[level - 1] || 0;
    const nextLevelXP = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];

    return {
        level,
        currentXP: totalXP - currentLevelXP,
        xpToNextLevel: nextLevelXP - currentLevelXP
    };
}

/**
 * Award XP for an action
 */
export function awardXP(type: XPEventType, customXP?: number, details?: string): {
    xpAwarded: number;
    levelUp: boolean;
    newLevel: number;
} {
    const data = getGamificationData();
    const xpAmount = customXP ?? XP_REWARDS[type];

    const previousLevel = data.xp.level;

    // Add XP
    data.xp.totalXP += xpAmount;

    // Recalculate level
    const levelInfo = calculateLevel(data.xp.totalXP);
    data.xp.level = levelInfo.level;
    data.xp.currentXP = levelInfo.currentXP;
    data.xp.xpToNextLevel = levelInfo.xpToNextLevel;

    // Update stats based on event type
    switch (type) {
        case 'pomodoro_complete':
            data.stats.totalPomodoros++;
            data.stats.totalStudyMinutes += 25;
            break;
        case 'flashcard_review':
            data.stats.totalFlashcards++;
            break;
        case 'mcq_correct':
            data.stats.totalMCQsCorrect++;
            data.stats.totalMCQs++;
            break;
        case 'mcq_attempt':
            data.stats.totalMCQs++;
            break;
    }

    // Record event
    const event: XPEvent = {
        type,
        xp: xpAmount,
        timestamp: new Date().toISOString(),
        details
    };
    data.events.push(event);

    // Keep only last 500 events
    if (data.events.length > 500) {
        data.events = data.events.slice(-500);
    }

    // Update activity date
    data.xp.lastActivityDate = new Date().toISOString().split('T')[0];

    saveGamificationData(data);

    return {
        xpAwarded: xpAmount,
        levelUp: levelInfo.level > previousLevel,
        newLevel: levelInfo.level
    };
}

/**
 * Get current user XP info
 */
export function getUserXP(): UserXP {
    const data = getGamificationData();
    return data.xp;
}

/**
 * Get XP history for the last N days
 */
export function getXPHistory(days: number = 7): { date: string; xp: number }[] {
    const data = getGamificationData();
    const result: { date: string; xp: number }[] = [];

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        const dayXP = data.events
            .filter(e => e.timestamp.startsWith(dateStr))
            .reduce((sum, e) => sum + e.xp, 0);

        result.push({ date: dateStr, xp: dayXP });
    }

    return result;
}

/**
 * Get level icon emoji based on level
 */
export function getLevelIcon(level: number): string {
    if (level >= 20) return '👑';
    if (level >= 15) return '💎';
    if (level >= 10) return '🏆';
    if (level >= 7) return '⭐';
    if (level >= 4) return '🌟';
    return '✨';
}

/**
 * Get level title based on level
 */
export function getLevelTitle(level: number): string {
    if (level >= 20) return 'Grandmaster';
    if (level >= 15) return 'Expert';
    if (level >= 10) return 'Scholar';
    if (level >= 7) return 'Achiever';
    if (level >= 4) return 'Learner';
    return 'Beginner';
}

/**
 * Calculate XP needed for a specific level
 */
export function getXPForLevel(level: number): number {
    if (level <= 0) return 0;
    if (level > LEVEL_THRESHOLDS.length) return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
    return LEVEL_THRESHOLDS[level - 1];
}
