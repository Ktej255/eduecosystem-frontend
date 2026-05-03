
import { OverviewResponse, LevelDetailResponse, DayInfo } from '@/services/graphotherapyService';

export type UserState = 'NEW' | 'ENGAGED' | 'DROPPING' | 'MASTER' | 'STRUGGLING';

export interface MotivationalMessage {
    title: string;
    body: string;
    icon: string;
    color: string;
}

export class DailyJourneyEngine {
    /**
     * Determines the current state of the user based on their progress and activity.
     */
    static getUserState(overview: OverviewResponse): UserState {
        if (overview.user_state) return overview.user_state as UserState;
        
        const streak = overview.streak_count || 0;
        const totalCompleted = overview.total_days_completed || 0;
        
        if (totalCompleted === 0) return 'NEW';
        
        // Check for inactivity
        if (overview.last_active_date) {
            const lastActive = new Date(overview.last_active_date);
            const now = new Date();
            const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 3600);
            
            if (diffHours > 48) return 'STRUGGLING'; // Streak broken
            if (diffHours > 36) return 'DROPPING';   // Danger zone
        }

        if (totalCompleted > 50) return 'MASTER';
        if (streak >= 3) return 'ENGAGED';
        
        return 'NEW';
    }

    /**
     * Gets a personalized motivational message based on user state.
     */
    static getMotivationalMessage(state: UserState, streak: number): MotivationalMessage {
        switch (state) {
            case 'NEW':
                return {
                    title: "The First Step",
                    body: "Your transformation begins today. Consistency is the only secret.",
                    icon: "🚀",
                    color: "text-blue-400"
                };
            case 'ENGAGED':
                return {
                    title: "Momentum is Building",
                    body: `${streak} days of consistent growth! Your neural pathways are already rewiring.`,
                    icon: "🔥",
                    color: "text-orange-500"
                };
            case 'DROPPING':
                return {
                    title: "Don't Break the Chain",
                    body: "You're slipping away from your pattern. 15 minutes today can save your progress.",
                    icon: "⚠️",
                    color: "text-amber-500"
                };
            case 'STRUGGLING':
                return {
                    title: "Restart Your Engine",
                    body: "Every master once started again. Today is your day to reclaim your streak.",
                    icon: "⚡",
                    color: "text-red-500"
                };
            case 'MASTER':
                return {
                    title: "The Healer's Path",
                    body: "Your consistency is legendary. You are mastering the art of self-transformation.",
                    icon: "👑",
                    color: "text-purple-400"
                };
            default:
                return {
                    title: "Keep Going",
                    body: "Every stroke is a step toward a better you.",
                    icon: "✨",
                    color: "text-green-400"
                };
        }
    }

    /**
     * Calculates progress percentage for the current level.
     */
    static getProgressPercentage(overview: OverviewResponse): number {
        const currentLevelInfo = overview.levels.find(l => l.is_current);
        if (!currentLevelInfo) return 0;
        
        return Math.round((currentLevelInfo.completed_days / currentLevelInfo.total_days) * 100);
    }

    /**
     * Generates social proof text with dynamic percentages.
     */
    static getSocialProof(overview: OverviewResponse): string {
        if (overview.social_proof) return overview.social_proof;
        
        const streak = overview.streak_count || 0;
        const totalCompleted = overview.total_days_completed || 0;

        if (streak >= 14) return "You are in the top 1% of most dedicated students globally.";
        if (streak >= 7) return "You are in the top 5% of our community. Mastery is close.";
        if (streak >= 3) return "You are outperforming 85% of users who start this journey.";
        if (totalCompleted > 0) return "You've taken more action than 70% of people who only dream of change.";
        
        return "Join 5,000+ students rewiring their minds through graphotherapy.";
    }

    /**
     * Returns a color theme based on completion percentage
     */
    static getProgressColor(percentage: number): string {
        if (percentage < 30) return 'from-blue-500 to-cyan-400';
        if (percentage < 70) return 'from-green-500 to-emerald-400';
        return 'from-orange-500 to-yellow-400';
    }
}
