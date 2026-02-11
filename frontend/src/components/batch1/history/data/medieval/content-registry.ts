import { MEDIEVAL_CHAPTER_1_CONTENT, MEDIEVAL_CHAPTER_1_MCQS, MEDIEVAL_CHAPTER_1_SUBTOPICS } from './chapter1';
import { MEDIEVAL_CHAPTER_2_CONTENT, MEDIEVAL_CHAPTER_2_MCQS, MEDIEVAL_CHAPTER_2_SUBTOPICS } from './chapter2';
import { MEDIEVAL_CHAPTER_3_CONTENT, MEDIEVAL_CHAPTER_3_MCQS, MEDIEVAL_CHAPTER_3_SUBTOPICS } from './chapter3';
import { MEDIEVAL_CHAPTER_4_CONTENT, MEDIEVAL_CHAPTER_4_MCQS, MEDIEVAL_CHAPTER_4_SUBTOPICS } from './chapter4';
import { MEDIEVAL_CHAPTER_5_CONTENT, MEDIEVAL_CHAPTER_5_MCQS, MEDIEVAL_CHAPTER_5_SUBTOPICS } from './chapter5';
import { MEDIEVAL_CHAPTER_6_CONTENT, MEDIEVAL_CHAPTER_6_MCQS, MEDIEVAL_CHAPTER_6_SUBTOPICS } from './chapter6';
import { MEDIEVAL_CHAPTER_7_CONTENT, MEDIEVAL_CHAPTER_7_MCQS, MEDIEVAL_CHAPTER_7_SUBTOPICS } from './chapter7';
import { MEDIEVAL_CHAPTER_8_CONTENT, MEDIEVAL_CHAPTER_8_MCQS, MEDIEVAL_CHAPTER_8_SUBTOPICS } from './chapter8';
import { MEDIEVAL_CHAPTER_9_CONTENT, MEDIEVAL_CHAPTER_9_MCQS, MEDIEVAL_CHAPTER_9_SUBTOPICS } from './chapter9';
import { MEDIEVAL_CHAPTER_10_CONTENT, MEDIEVAL_CHAPTER_10_MCQS, MEDIEVAL_CHAPTER_10_SUBTOPICS } from './chapter10';
import { MEDIEVAL_CHAPTER_11_CONTENT, MEDIEVAL_CHAPTER_11_MCQS, MEDIEVAL_CHAPTER_11_SUBTOPICS } from './chapter11';
import { MEDIEVAL_CHAPTER_12_CONTENT, MEDIEVAL_CHAPTER_12_MCQS, MEDIEVAL_CHAPTER_12_SUBTOPICS } from './chapter12';
import { MEDIEVAL_CHAPTER_13_CONTENT, MEDIEVAL_CHAPTER_13_MCQS, MEDIEVAL_CHAPTER_13_SUBTOPICS } from './chapter13';
import { MEDIEVAL_CHAPTER_14_CONTENT, MEDIEVAL_CHAPTER_14_MCQS, MEDIEVAL_CHAPTER_14_SUBTOPICS } from './chapter14';
import { MEDIEVAL_CHAPTER_15_CONTENT, MEDIEVAL_CHAPTER_15_MCQS, MEDIEVAL_CHAPTER_15_SUBTOPICS } from './chapter15';

// We will expand this as we add more chapters. 
// For now, mapping the first 3 chapters.

export const MEDIEVAL_CONTENT_MAP: Record<number, any> = {
    1: {
        content: MEDIEVAL_CHAPTER_1_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_1_MCQS,
        subtopics: MEDIEVAL_CHAPTER_1_SUBTOPICS
    },
    2: {
        content: MEDIEVAL_CHAPTER_1_CONTENT, // Using Ch1 for Ch2 placeholder or similar logic if needed, but here we have explicit mapping
        mcqs: MEDIEVAL_CHAPTER_1_MCQS,
        subtopics: MEDIEVAL_CHAPTER_1_SUBTOPICS
    },
    3: {
        content: MEDIEVAL_CHAPTER_2_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_2_MCQS,
        subtopics: MEDIEVAL_CHAPTER_2_SUBTOPICS
    },
    4: {
        content: MEDIEVAL_CHAPTER_4_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_4_MCQS,
        subtopics: MEDIEVAL_CHAPTER_4_SUBTOPICS
    },
    5: {
        content: MEDIEVAL_CHAPTER_5_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_5_MCQS,
        subtopics: MEDIEVAL_CHAPTER_5_SUBTOPICS
    },
    6: {
        content: MEDIEVAL_CHAPTER_6_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_6_MCQS,
        subtopics: MEDIEVAL_CHAPTER_6_SUBTOPICS
    },
    7: {
        content: MEDIEVAL_CHAPTER_7_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_7_MCQS,
        subtopics: MEDIEVAL_CHAPTER_7_SUBTOPICS
    },
    8: {
        content: MEDIEVAL_CHAPTER_8_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_8_MCQS,
        subtopics: MEDIEVAL_CHAPTER_8_SUBTOPICS
    },
    // Fallback for others to prevent crashes while we build
    9: {
        content: MEDIEVAL_CHAPTER_9_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_9_MCQS,
        subtopics: MEDIEVAL_CHAPTER_9_SUBTOPICS
    },
    10: {
        content: MEDIEVAL_CHAPTER_10_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_10_MCQS,
        subtopics: MEDIEVAL_CHAPTER_10_SUBTOPICS
    },
    11: {
        content: MEDIEVAL_CHAPTER_11_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_11_MCQS,
        subtopics: MEDIEVAL_CHAPTER_11_SUBTOPICS
    },
    12: {
        content: MEDIEVAL_CHAPTER_12_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_12_MCQS,
        subtopics: MEDIEVAL_CHAPTER_12_SUBTOPICS
    },
    13: {
        content: MEDIEVAL_CHAPTER_13_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_13_MCQS,
        subtopics: MEDIEVAL_CHAPTER_13_SUBTOPICS
    },
    14: {
        content: MEDIEVAL_CHAPTER_14_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_14_MCQS,
        subtopics: MEDIEVAL_CHAPTER_14_SUBTOPICS
    },
    15: {
        content: MEDIEVAL_CHAPTER_15_CONTENT,
        mcqs: MEDIEVAL_CHAPTER_15_MCQS,
        subtopics: MEDIEVAL_CHAPTER_15_SUBTOPICS
    },
    16: { content: "# Content Coming Soon", mcqs: [], subtopics: [] },
    17: { content: "# Content Coming Soon", mcqs: [], subtopics: [] },
    18: { content: "# Content Coming Soon", mcqs: [], subtopics: [] }
};
