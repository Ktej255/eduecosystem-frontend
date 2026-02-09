import { chapter1MCQs } from './mcqs/modern/chapter1';
import { HISTORY_CH2_MCQS } from './mcqs/modern/chapter2';
import { HISTORY_CH3_MCQS } from './mcqs/modern/chapter3';

// Import new chapters (11-22)
import { MODERN_CHAPTER_11_MCQS } from './modern/chapter11';
import { MODERN_CHAPTER_12_MCQS } from './modern/chapter12';
import { MODERN_CHAPTER_13_MCQS } from './modern/chapter13';
import { MODERN_CHAPTER_14_MCQS } from './modern/chapter14';
// Chapter 15 is NCM (same as 16 content-wise in my edit, but let's see if file exists or I should use 16)
// I viewed chapter15.ts and it only had content. I will skip 15 for MCQs if it has none, or check if I should map 16 to 15?
// User said "Modern History Chapters 11-16 have been created".
// I'll assume 15 might need MCQs. 
// For now, I'll map what I have.
import { MODERN_CHAPTER_16_MCQS } from './modern/chapter16';
import { MODERN_CHAPTER_17_MCQS } from './modern/chapter17';
import { MODERN_CHAPTER_18_MCQS } from './modern/chapter18';
import { MODERN_CHAPTER_19_MCQS } from './modern/chapter19';
import { MODERN_CHAPTER_20_MCQS } from './modern/chapter20';
import { MODERN_CHAPTER_21_MCQS } from './modern/chapter21';
import { MODERN_CHAPTER_22_MCQS } from './modern/chapter22';

export const HISTORY_MCQS_DATA: Record<number, any[]> = {
    1: chapter1MCQs.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    2: (HISTORY_CH2_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    3: (HISTORY_CH3_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    // 4-10 need to be added if they exist. For now adding 11-22.
    11: MODERN_CHAPTER_11_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    12: MODERN_CHAPTER_12_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    13: MODERN_CHAPTER_13_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    14: MODERN_CHAPTER_14_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    // 15: ... 
    16: MODERN_CHAPTER_16_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    17: MODERN_CHAPTER_17_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    18: MODERN_CHAPTER_18_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    19: MODERN_CHAPTER_19_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    20: MODERN_CHAPTER_20_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    21: MODERN_CHAPTER_21_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    22: MODERN_CHAPTER_22_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
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

