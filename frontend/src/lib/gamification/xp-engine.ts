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
    syncXPToBackend(data); // fire-and-forget, never blocks
}

/**
 * Sync XP state to backend (idempotent)
 */
export async function syncXPToBackend(data: GamificationData): Promise<void> {
    try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        await fetch(`${baseUrl}/api/v1/student-reports/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                report_type: 'xp_engine_state',
                report_key: 'xp_engine_state_unified',
                data: {
                    totalXP: data.xp?.totalXP ?? 0,
                    level: data.xp?.level ?? 1,
                    streak: data.xp?.streak ?? 0,
                    longestStreak: data.xp?.longestStreak ?? 0,
                    lastActivityDate: data.xp?.lastActivityDate ?? null,
                    achievements: data.achievements ?? {},
                    stats: data.stats ?? {},
                    savedAt: new Date().toISOString()
                }
            })
        });
    } catch {
        // Silent fail - localStorage is the primary source of truth
    }
}

/**
 * Load XP state from backend
 */
export async function loadXPFromBackend(): Promise<Partial<GamificationData> | null> {
    try {
        const token = localStorage.getItem('token');
        if (!token) return null;
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
        const res = await fetch(
            `${baseUrl}/api/v1/student-reports/?report_type=xp_engine_state&limit=1`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
        if (!res.ok) return null;
        const reports = await res.json();
        if (!Array.isArray(reports) || reports.length === 0) return null;
        return reports[0]?.data ?? null;
    } catch {
        return null;
    }
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
 * Calculate adaptive XP based on topic context
 */
export function calculateAdaptiveXP(baseXP: number, stability?: number, isVulnerable?: boolean): number {
    let multiplier = 1.0;

    // Stability Boost: Topics with low stability get a multiplier
    if (stability !== undefined) {
        if (stability < 1.0) multiplier = 2.0;
        else if (stability < 3.0) multiplier = 1.5;
        else if (stability < 7.0) multiplier = 1.25;
    }

    // Vulnerability Bonus: Priority topics get additional boost
    if (isVulnerable) {
        multiplier = Math.max(multiplier, 2.0);
    }

    return Math.round(baseXP * multiplier);
}

/**
 * Award XP for an action
 */
export function awardXP(type: XPEventType, customXP?: number, details?: string, context?: { stability?: number, isVulnerable?: boolean }): {
    xpAwarded: number;
    levelUp: boolean;
    newLevel: number;
} {
    const data = getGamificationData();
    let xpAmount = customXP ?? XP_REWARDS[type];

    // Apply adaptive scaling if context is provided
    if (context) {
        xpAmount = calculateAdaptiveXP(xpAmount, context.stability, context.isVulnerable);
    }

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

    // Update activity date (Local Time)
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    const localDate = new Date(now.getTime() - offset);
    data.xp.lastActivityDate = localDate.toISOString().split('T')[0];

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
        const offset = date.getTimezoneOffset() * 60000;
        const localDate = new Date(date.getTime() - offset);
        const dateStr = localDate.toISOString().split('T')[0];

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

export { LEVEL_THRESHOLDS };
