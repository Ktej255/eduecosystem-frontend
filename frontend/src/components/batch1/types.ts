
export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: string;
    level?: number; // Added for Question Bank Tiered System
    chapterId?: number; // Added for Question Bank
    subject?: string; // Added for Question Bank
}
