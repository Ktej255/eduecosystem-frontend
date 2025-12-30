
import api from "@/lib/api";

export interface MCQGeneratorRequest {
    notes_text: string;
    num_questions?: number;
    difficulty?: 'easy' | 'medium' | 'hard' | 'upsc-level';
}

export interface MCQOption {
    id: string;
    text: string;
}

export interface MCQItem {
    question: string;
    options: MCQOption[];
    correct_option_id: string;
    explanation: string;
}

export interface MCQGeneratorResponse {
    source_topic: string;
    questions: MCQItem[];
}

export interface CoachingSessionReq {
    topic: string;
    context_data?: any;
}

export interface ChatReq {
    session_id: number;
    message: string;
}

export interface CoachingResponse {
    session_id: number;
    message: string;
    role: string;
}

const aiLearningService = {
    // MCQ Generator
    generateMCQ: async (data: MCQGeneratorRequest): Promise<MCQGeneratorResponse> => {
        const response = await api.post("/ai-learning/generate-mcq", data);
        return response.data;
    },

    // Coaching
    startCoachingSession: async (data: CoachingSessionReq): Promise<CoachingResponse> => {
        const response = await api.post("/ai-learning/start-coaching", data);
        return response.data;
    },

    chatWithCoach: async (data: ChatReq): Promise<CoachingResponse> => {
        const response = await api.post("/ai-learning/chat-with-coach", data);
        return response.data;
    },
};

export default aiLearningService;
