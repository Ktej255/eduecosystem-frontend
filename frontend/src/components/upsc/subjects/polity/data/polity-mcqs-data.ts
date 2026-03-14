import { DAY3_MCQS } from './day3-mcqs';
import { DAY5_MCQS } from './day5-mcqs';

import { MCQ } from './mcq-utils';
export type { MCQ };

// Adapter for Day 3 Data (Chapter 4: Salient Features - 8th Edition)
const legacyDay3: MCQ[] = DAY3_MCQS.map(m => ({ ...m, chapterId: 4 }));

// Adapter for Day 5 Data (Chapter 6: Union and its Territory - 8th Edition)
const legacyDay5: MCQ[] = DAY5_MCQS.map(item => {
    // All Day 5 questions are Chapter 6
    let subtopicId = '6.1';
    // ... mapping remains same but with 6.x prefix if needed, or stick to generic
    
    return {
        id: `legacy_d5_${item.id}`,
        subtopicId: item.subtopicId || '6.1',
        chapterId: 6, 
        question: item.question,
        options: item.options,
        correctIndex: item.correctAnswer,
        explanation: item.explanation || '',
        difficulty: (item.level as any) || 'Moderate',
        correctAnswer: item.correctAnswer
    };
});

// Seeded Content for Chapter 11 & 12 (New Schema)
import { MCQ_REPOSITORY } from './mcqs/mcq-repository';
import { PARLIAMENT_MCQS } from './parliament-mcqs';

// Combine repository data with remaining legacy adapters
export const POLITY_MCQS_DATA: MCQ[] = [
    ...legacyDay3,
    ...legacyDay5,
    ...Object.values(MCQ_REPOSITORY),
    ...PARLIAMENT_MCQS.map(m => ({ ...m, chapterId: 22 })) // Parliament is Ch 22 in 8th Edition
];

export function getMCQsForSubtopics(subtopicIds: string[]): MCQ[] {
    // Also support partial matches for Chapter-level requests (e.g. '1.')
    return POLITY_MCQS_DATA.filter(mcq =>
        subtopicIds.some(id => mcq.subtopicId === id || mcq.subtopicId?.startsWith(id + '.'))
    );
}
