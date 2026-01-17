// Streak Tracker - Manages daily activity streaks

import { getGamificationData, saveGamificationData, awardXP } from './xp-engine';

/**
 * Check and update streak based on activity
 * Should be called once per day when user is active
 */
export function updateStreak(): {
    currentStreak: number;
    longestStreak: number;
    streakBroken: boolean;
    streakBonus: number;
} {
    const data = getGamificationData();
    const today = new Date().toISOString().split('T')[0];
    const lastActivity = data.xp.lastActivityDate;

    let streakBroken = false;
    let streakBonus = 0;

    if (!lastActivity) {
        // First ever activity
        data.xp.streak = 1;
        data.xp.lastActivityDate = today;
    } else if (lastActivity === today) {
        // Already active today, no change
    } else {
        const lastDate = new Date(lastActivity);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            // Consecutive day - increase streak
            data.xp.streak++;
            data.xp.lastActivityDate = today;

            // Award streak bonus (50 XP per day in streak, up to 7 days)
            streakBonus = Math.min(data.xp.streak, 7) * 50;
            awardXP('streak_bonus', streakBonus, `${data.xp.streak}-day streak bonus`);
        } else if (diffDays > 1) {
            // Streak broken
            streakBroken = true;
            data.xp.streak = 1;
            data.xp.lastActivityDate = today;
        }
    }

    // Update longest streak
    if (data.xp.streak > data.xp.longestStreak) {
        data.xp.longestStreak = data.xp.streak;
    }

    saveGamificationData(data);

    return {
        currentStreak: data.xp.streak,
        longestStreak: data.xp.longestStreak,
        streakBroken,
        streakBonus
    };
}

/**
 * Get current streak info
 */
export function getStreakInfo(): {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string | null;
    isActiveToday: boolean;
} {
    const data = getGamificationData();
    const today = new Date().toISOString().split('T')[0];

    return {
        currentStreak: data.xp.streak,
        longestStreak: data.xp.longestStreak,
        lastActivityDate: data.xp.lastActivityDate,
        isActiveToday: data.xp.lastActivityDate === today
    };
}

/**
 * Check if streak will break tomorrow if no activity today
 */
export function isStreakAtRisk(): boolean {
    const data = getGamificationData();
    const today = new Date().toISOString().split('T')[0];

    // If not active today and has a streak, it's at risk
    return data.xp.streak > 0 && data.xp.lastActivityDate !== today;
}

/**
 * Get motivational message based on streak
 */
export function getStreakMessage(streak: number): string {
    if (streak === 0) return "Start your streak today!";
    if (streak === 1) return "Great start! Keep it going!";
    if (streak < 3) return "Building momentum!";
    if (streak < 7) return "You're on fire! 🔥";
    if (streak < 14) return "Incredible dedication!";
    if (streak < 30) return "Unstoppable force!";
    if (streak < 60) return "Legend in the making!";
    return "You are a Master! 👑";
}

/**
 * Get streak milestone info
 */
export function getNextStreakMilestone(currentStreak: number): {
    milestone: number;
    name: string;
    daysAway: number
} {
    const milestones = [
        { days: 7, name: "Week Warrior" },
        { days: 14, name: "Fortnight Force" },
        { days: 30, name: "Monthly Master" },
        { days: 60, name: "Double Month" },
        { days: 100, name: "Century Streak" },
        { days: 365, name: "Year of Dedication" }
    ];

    for (const milestone of milestones) {
        if (currentStreak < milestone.days) {
            return {
                milestone: milestone.days,
                name: milestone.name,
                daysAway: milestone.days - currentStreak
            };
        }
    }

    return {
        milestone: 365,
        name: "Legend",
        daysAway: 0
    };
}
