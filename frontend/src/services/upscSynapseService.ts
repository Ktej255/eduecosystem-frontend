import { api } from '@/lib/api';

export interface CognitiveProfile {
    id: string;
    user_id: number;
    current_level: 'level1' | 'level2' | 'level3';
    wps_score: number;
    stress_index: number;
    is_level2_unlocked: boolean;
    is_level3_unlocked: boolean;
}

export interface GapAnalysisEntry {
    chapter_id: number;
    subject: string;
    status: 'unattempted' | 'knowledge_gap' | 'logic_gap' | 'mastered';
    recall_accuracy: number;
    gap_details?: any;
}

export const upscSynapseService = {
    /**
     * Get the current user's cognitive profile (Level, Stress, Unlocks).
     */
    getProfile: async (): Promise<CognitiveProfile> => {
        const response = await api.get('/synapse/profile');
        return response.data;
    },

    /**
     * Log a gap analysis result (Red/Yellow/Green) for a specific chapter.
     */
    logGapAnalysis: async (data: { chapter_id: number; status: string; recall_accuracy: number; gap_details?: any; profile_id: string }) => {
        const response = await api.post('/synapse/gap-analysis', data);
        return response.data;
    },

    /**
     * Get the full Gap Analysis Heatmap.
     */
    getHeatmap: async (): Promise<GapAnalysisEntry[]> => {
        const response = await api.get('/synapse/gap-analysis');
        return response.data;
    },

    /**
     * Process a level unlock transaction.
     */
    unlockLevel: async (profile_id: string, level: 'level2' | 'level3', amount: number) => {
        const response = await api.post('/synapse/unlock', {
            profile_id,
            level_unlocked: level,
            amount_paid: amount
        });
        return response.data;
    }
};
