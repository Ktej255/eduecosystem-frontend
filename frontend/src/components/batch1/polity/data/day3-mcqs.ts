import { CHAPTER16_MCQS } from "./mcqs/chapter16-mcqs";
import { CHAPTER17_MCQS } from "./mcqs/chapter17-mcqs";
import { MCQ } from "./polity-mcqs-data";

export const DAY3_MCQS: MCQ[] = [
    ...CHAPTER16_MCQS.map(q => ({
        id: String(q.id),
        subtopicId: '16', // Generic fallback
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation || '',
        difficulty: (q.difficulty === 'easy' ? 'Easy' : q.difficulty === 'medium' ? 'Moderate' : 'Tough') as any,
        correctAnswer: q.correctAnswer
    })),
    ...CHAPTER17_MCQS.map(q => ({
        id: String(q.id),
        subtopicId: '17',
        question: q.question,
        options: q.options,
        correctIndex: q.correctAnswer,
        explanation: q.explanation || '',
        difficulty: (q.difficulty === 'easy' ? 'Easy' : q.difficulty === 'medium' ? 'Moderate' : 'Tough') as any,
        correctAnswer: q.correctAnswer
    }))
];

