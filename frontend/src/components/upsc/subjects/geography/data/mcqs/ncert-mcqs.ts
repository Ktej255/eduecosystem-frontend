import ncertQuestions from './ncert-mcqs.json';

export interface NCERTMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    module: string;
    topic: string; // Used to identify Chapter
    difficulty: 'easy' | 'medium' | 'hard';
    chapter: string;
    subtopic: string;
    question_type: 'statement_based' | 'conceptual' | 'factual';
}

export const ncertMcqBank: NCERTMCQ[] = ncertQuestions as NCERTMCQ[];
