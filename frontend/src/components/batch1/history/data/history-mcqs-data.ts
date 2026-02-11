import { chapter1MCQs } from './mcqs/modern/chapter1';
import { HISTORY_CH2_MCQS } from './mcqs/modern/chapter2';
import { HISTORY_CH3_MCQS } from './mcqs/modern/chapter3';
// ... Modern imports can remain if needed for individual access, but better to centralize

import { MODERN_HISTORY_CONTENT } from './modern/content-registry'; // Assuming we might add MCQs to registry later, but currently they are separate.
// Actually Modern MCQs are scattered. Let's keep the existing Modern map but construct others better.

import { MEDIEVAL_CONTENT_MAP } from './medieval/content-registry';
import { ANCIENT_CONTENT_MAP } from './ancient/content-registry';

// Import new chapters (11-22) - Keeping existing legacy imports for Modern
import { MODERN_CHAPTER_11_MCQS } from './modern/chapter11';
import { MODERN_CHAPTER_12_MCQS } from './modern/chapter12';
import { MODERN_CHAPTER_13_MCQS } from './modern/chapter13';
import { MODERN_CHAPTER_14_MCQS } from './modern/chapter14';
import { MODERN_CHAPTER_16_MCQS } from './modern/chapter16';
import { MODERN_CHAPTER_17_MCQS } from './modern/chapter17';
import { MODERN_CHAPTER_18_MCQS } from './modern/chapter18';
import { MODERN_CHAPTER_19_MCQS } from './modern/chapter19';
import { MODERN_CHAPTER_20_MCQS } from './modern/chapter20';
import { MODERN_CHAPTER_21_MCQS } from './modern/chapter21';
import { MODERN_CHAPTER_22_MCQS } from './modern/chapter22';
import { MODERN_CHAPTER_23_MCQS } from './modern/chapter23';
import { MODERN_CHAPTER_24_MCQS } from './modern/chapter24';
import { MODERN_CHAPTER_25_MCQS } from './modern/chapter25';
import { MODERN_CHAPTER_26_MCQS } from './modern/chapter26';
import { MODERN_CHAPTER_27_MCQS } from './modern/chapter27';
import { MODERN_CHAPTER_28_MCQS } from './modern/chapter28';
import { MODERN_CHAPTER_29_MCQS } from './modern/chapter29';
import { MODERN_CHAPTER_30_MCQS } from './modern/chapter30';
import { MODERN_CHAPTER_31_MCQS } from './modern/chapter31';
import { MODERN_CHAPTER_32_MCQS } from './modern/chapter32';
import { MODERN_CHAPTER_33_MCQS } from './modern/chapter33';
import { MODERN_CHAPTER_34_MCQS } from './modern/chapter34';
import { MODERN_CHAPTER_35_MCQS } from './modern/chapter35';
import { MODERN_CHAPTER_36_MCQS } from './modern/chapter36';
import { MODERN_CHAPTER_37_MCQS } from './modern/chapter37';
import { MODERN_CHAPTER_38_MCQS } from './modern/chapter38';
import { MODERN_CHAPTER_39_MCQS } from './modern/chapter39';

export const MODERN_MCQS_DATA: Record<number, any[]> = {
    1: chapter1MCQs.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    2: (HISTORY_CH2_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    3: (HISTORY_CH3_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    11: MODERN_CHAPTER_11_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    12: MODERN_CHAPTER_12_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    13: MODERN_CHAPTER_13_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    14: MODERN_CHAPTER_14_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    16: MODERN_CHAPTER_16_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    17: MODERN_CHAPTER_17_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    18: MODERN_CHAPTER_18_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    19: MODERN_CHAPTER_19_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    20: MODERN_CHAPTER_20_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    21: MODERN_CHAPTER_21_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    22: MODERN_CHAPTER_22_MCQS.map(m => ({ ...m, correctIndex: m.correctAnswer })),
    23: (MODERN_CHAPTER_23_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    24: (MODERN_CHAPTER_24_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    25: (MODERN_CHAPTER_25_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    26: (MODERN_CHAPTER_26_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    27: (MODERN_CHAPTER_27_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    28: (MODERN_CHAPTER_28_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    29: (MODERN_CHAPTER_29_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    30: (MODERN_CHAPTER_30_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    31: (MODERN_CHAPTER_31_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    32: (MODERN_CHAPTER_32_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    33: (MODERN_CHAPTER_33_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    34: (MODERN_CHAPTER_34_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    35: (MODERN_CHAPTER_35_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    36: (MODERN_CHAPTER_36_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    37: (MODERN_CHAPTER_37_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    38: (MODERN_CHAPTER_38_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
    39: (MODERN_CHAPTER_39_MCQS || []).map(m => ({ ...m, correctIndex: m.correctAnswer })),
};

export const MEDIEVAL_MCQS_DATA: Record<number, any[]> = {};
Object.keys(MEDIEVAL_CONTENT_MAP).forEach(key => {
    const k = parseInt(key);
    if (MEDIEVAL_CONTENT_MAP[k]?.mcqs) {
        MEDIEVAL_MCQS_DATA[k] = MEDIEVAL_CONTENT_MAP[k].mcqs.map((m: any) => ({ ...m, correctIndex: m.correctAnswer }));
    }
});

export const ANCIENT_MCQS_DATA: Record<number, any[]> = {};
Object.keys(ANCIENT_CONTENT_MAP).forEach(key => {
    const k = parseInt(key);
    if (ANCIENT_CONTENT_MAP[k]?.mcqs) {
        ANCIENT_MCQS_DATA[k] = ANCIENT_CONTENT_MAP[k].mcqs.map((m: any) => ({ ...m, correctIndex: m.correctAnswer }));
    }
});

export function getMCQsForHistoryChapters(chapters: number[], section: string = 'modern'): any[] {
    let allMCQs: any[] = [];
    let dataSource = MODERN_MCQS_DATA;

    if (section === 'medieval') dataSource = MEDIEVAL_MCQS_DATA;
    if (section === 'ancient') dataSource = ANCIENT_MCQS_DATA;
    // Add logic for art_culture or world_history later if needed

    chapters.forEach(ch => {
        if (dataSource[ch]) {
            allMCQs = [...allMCQs, ...dataSource[ch]];
        }
    });
    return allMCQs;
}

