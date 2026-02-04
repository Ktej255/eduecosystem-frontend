import { chapter1MCQs } from './mcqs/chapter1';
import { HISTORY_CH2_MCQS } from './mcqs/chapter2';
import { HISTORY_CH3_MCQS } from './mcqs/chapter3';
// Import more chapters as needed

export const HISTORY_MCQS_DATA: Record<number, any[]> = {
    1: chapter1MCQs.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    2: HISTORY_CH2_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    3: HISTORY_CH3_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    // ... add chapters 4 to 40 here or dynamically
};

export function getMCQsForHistoryChapters(chapters: number[]): any[] {
    let allMCQs: any[] = [];
    chapters.forEach(ch => {
        if (HISTORY_MCQS_DATA[ch]) {
            allMCQs = [...allMCQs, ...HISTORY_MCQS_DATA[ch]];
        }
    });
    return allMCQs;
}
