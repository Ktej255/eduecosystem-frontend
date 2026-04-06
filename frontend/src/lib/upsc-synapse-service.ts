import api from "./api";

export interface CognitiveProfile {
    id: string;
    user_id: number;
    current_level: "level1" | "level2" | "level3";
    wps_score: number;
    stress_index: number;
    is_level2_unlocked: boolean;
    is_level3_unlocked: boolean;
    last_updated: string;
}

export interface GapAnalysisEntry {
    id: string;
    profile_id: string;
    chapter_id: number;
    subject: string;
    status: "unattempted" | "knowledge_gap" | "logic_gap" | "mastered";
    recall_accuracy: number;
    gap_details?: any;
    last_tested_at: string;
}

export interface UnlockTransaction {
    id: string;
    profile_id: string;
    level_unlocked: string;
    amount_paid: number;
    currency: string;
    transaction_id?: string;
    status: string;
    unlocked_at: string;
}

export const upscSynapseService = {
    getProfile: async (): Promise<CognitiveProfile> => {
        const response = await api.get("/synapse/profile");
        return response.data;
    },

    updateProfile: async (updates: Partial<CognitiveProfile>): Promise<CognitiveProfile> => {
        const response = await api.put("/synapse/profile", updates);
        return response.data;
    },

    getHeatmap: async (): Promise<GapAnalysisEntry[]> => {
        const response = await api.get("/synapse/gap-analysis");
        return response.data;
    },

    logGapAnalysis: async (gap: Omit<GapAnalysisEntry, "id" | "last_tested_at">): Promise<GapAnalysisEntry> => {
        const response = await api.post("/synapse/gap-analysis", gap);
        return response.data;
    },

    unlockLevel: async (profileId: string, level: string, amount: number): Promise<UnlockTransaction> => {
        const response = await api.post("/synapse/unlock", {
            profile_id: profileId,
            level_unlocked: level,
            amount_paid: amount
        });
        return response.data;
    },
};
