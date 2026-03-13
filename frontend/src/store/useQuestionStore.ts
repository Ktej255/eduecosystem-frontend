import { create } from 'zustand';
import { uploadBulkQuestions } from '@/lib/api';

interface Option {
    text: string;
    is_correct: boolean;
}

interface Question {
    text: string;
    explanation?: string;
    options: Option[];
    subject_tag?: string;
    difficulty?: string;
}

interface QuestionStore {
    questionBank: any[];
    stagedQuestions: Question[];
    isUploading: boolean;
    setStagedQuestions: (questions: Question[]) => void;
    clearStagedQuestions: () => void;
    commitBulkUpload: () => Promise<{ success: boolean; message?: string }>;
}

export const useQuestionStore = create<QuestionStore>((set, get) => ({
    questionBank: [],
    stagedQuestions: [],
    isUploading: false,
    
    setStagedQuestions: (questions) => set({ stagedQuestions: questions }),
    
    clearStagedQuestions: () => set({ stagedQuestions: [] }),
    
    commitBulkUpload: async () => {
        const { stagedQuestions } = get();
        if (stagedQuestions.length === 0) return { success: false, message: "No questions staged" };
        
        set({ isUploading: true });
        try {
            const result = await uploadBulkQuestions({ questions: stagedQuestions });
            set({ stagedQuestions: [], isUploading: false });
            // In a real app, we might want to refresh the questionBank here
            return { success: true, message: `Successfully inserted ${result.inserted} questions.` };
        } catch (error: any) {
            set({ isUploading: false });
            return { success: false, message: error.response?.data?.detail || "Upload failed" };
        }
    }
}));
