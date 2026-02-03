import { MeditationSession } from '../types/meditation';

export interface Insight {
    type: 'pattern' | 'trend' | 'recommendation';
    title: string;
    description: string;
    actionable?: string;
    score?: number; // 0-100 relevance
}

export const AI_INSIGHTS_SERVICE = {
    analyzeSessionHistory: (sessions: MeditationSession[]): Insight[] => {
        // Mock analysis logic
        const insights: Insight[] = [];

        // 1. Analyze Frequency
        if (sessions.length < 3) {
            insights.push({
                type: 'recommendation',
                title: 'Start Small',
                description: 'Consistency is key. Try to meditate for just 5 minutes every day this week.',
                actionable: 'Schedule a 5-minute Level 1 session tomorrow morning.'
            });
        }

        // 2. Identify Best Time
        // Mock: Assume morning sessions have higher focus
        insights.push({
            type: 'pattern',
            title: 'Morning Glory',
            description: 'Your focus scores are 20% higher during morning sessions.',
            actionable: 'Try to schedule your focused work blocks after your morning meditation.'
        });

        // 3. Trend Analysis
        insights.push({
            type: 'trend',
            title: 'Stress Reduction',
            description: 'Your reported post-session stress levels have dropped by an average of 3 points over the last week.',
            score: 85
        });

        return insights;
    },

    getPersonalizedRecommendation: (): Insight => {
        return {
            type: 'recommendation',
            title: 'Deepen Your Practice',
            description: 'You have mastered Level 1. You are ready to explore the deeper states of Level 2.',
            actionable: 'Try the Zen Garden experience today.'
        };
    }
};
