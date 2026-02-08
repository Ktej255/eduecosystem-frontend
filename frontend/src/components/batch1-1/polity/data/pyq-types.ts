export type ExamType = 'PRELIMS' | 'MAINS';
export type QuestionDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface PYQOption {
    label: string;
    text: string;
    isCorrect: boolean;
}

export interface PYQItem {
    id: string;
    year: number;
    exam: ExamType;
    question: string;
    options?: PYQOption[]; // Only for Prelims
    answer?: string; // Correct option label for Prelims, or Model Answer Key Points for Mains
    explanation: string; // Detailed solution
    topicIds: number[]; // Maps to 1-95 Topic IDs
    tags: string[]; // e.g., "Conceptual", "Factual", "Current Affairs Linked"
    difficulty: QuestionDifficulty;
}

export const PYQ_YEARS = Array.from({ length: 12 }, (_, i) => 2024 - i); // 2024 to 2013
