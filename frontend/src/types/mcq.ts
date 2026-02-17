export interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    chapterId?: number | string;
    chapterName?: string;
    subtopic?: string;
    mediaUrl?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export type ConfidenceLevel = 'sure-shot' | '50-50' | 'one-option-known' | 'blind-guess' | 'other';

export interface AnswerState {
    questionIndex: number;
    selectedOption: number;
    confidence: ConfidenceLevel;
    isCorrect: boolean;
    timeTaken: number;
}

export interface MCQResult {
    totalQuestions: number;
    answers: Record<number, AnswerState>;
    score: number;
    timeSpent: number;
}
