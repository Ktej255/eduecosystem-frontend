import axios from 'axios';

import { API_BASE } from '@/lib/api';

const API_PREFIX = `${API_BASE}/adaptive-exams`;

export interface StartExamRequest {
    subject: string;
    total_questions?: number;
    time_limit_minutes?: number;
}

export interface ExamSessionResponse {
    exam_id: string;
    subject: string;
    start_time: string;
    status: string;
}

export interface AdaptiveQuestion {
    id: number;
    text: string;
    options: string[]; // Frontend expects array of strings
    subject: string;
    level: number;
    explanation?: string;
    node_id?: string;
}

export interface SubmitAnswerRequest {
    exam_id: string;
    question_id: number;
    selected_option: string;
    time_spent_seconds: number;
}

export interface ExamReport {
    exam_id: string;
    subject: string;
    score: number;
    total_questions: number;
    correct_count: number;
    accuracy: number;
    ability_score: number;
    status: string;
}

export const adaptiveExamApi = {
    startExam: async (data: StartExamRequest): Promise<ExamSessionResponse> => {
        const response = await axios.post(`${API_PREFIX}/start`, data);
        return response.data;
    },

    getNextQuestion: async (examId: string): Promise<AdaptiveQuestion | null> => {
        const response = await axios.get(`${API_PREFIX}/next-question`, {
            params: { exam_id: examId }
        });
        if (response.status === 204) return null;
        return response.data;
    },

    submitAnswer: async (data: SubmitAnswerRequest) => {
        const response = await axios.post(`${API_PREFIX}/submit`, data);
        return response.data;
    },

    getReport: async (examId: string): Promise<ExamReport> => {
        const response = await axios.get(`${API_PREFIX}/report/${examId}`);
        return response.data;
    }
};
