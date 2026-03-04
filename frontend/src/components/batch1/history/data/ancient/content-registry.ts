import { ANCIENT_CHAPTER_1_CONTENT, ANCIENT_CHAPTER_1_MCQS, ANCIENT_CHAPTER_1_SUBTOPICS } from './chapter1';
import { ANCIENT_CHAPTER_2_CONTENT, ANCIENT_CHAPTER_2_MCQS, ANCIENT_CHAPTER_2_SUBTOPICS } from './chapter2';
import { ANCIENT_CHAPTER_3_CONTENT, ANCIENT_CHAPTER_3_MCQS, ANCIENT_CHAPTER_3_SUBTOPICS } from './chapter3';
import { ANCIENT_CHAPTER_4_CONTENT, ANCIENT_CHAPTER_4_MCQS, ANCIENT_CHAPTER_4_SUBTOPICS } from './chapter4';
import { ANCIENT_CHAPTER_5_CONTENT, ANCIENT_CHAPTER_5_MCQS, ANCIENT_CHAPTER_5_SUBTOPICS } from './chapter5';
import { ANCIENT_CHAPTER_6_CONTENT, ANCIENT_CHAPTER_6_MCQS, ANCIENT_CHAPTER_6_SUBTOPICS } from './chapter6';
import { ANCIENT_CHAPTER_7_CONTENT, ANCIENT_CHAPTER_7_MCQS, ANCIENT_CHAPTER_7_SUBTOPICS } from './chapter7';
import { ANCIENT_CHAPTER_8_CONTENT, ANCIENT_CHAPTER_8_MCQS, ANCIENT_CHAPTER_8_SUBTOPICS } from './chapter8';
import { ANCIENT_CHAPTER_9_CONTENT, ANCIENT_CHAPTER_9_MCQS, ANCIENT_CHAPTER_9_SUBTOPICS } from './chapter9';
import { ANCIENT_CHAPTER_10_CONTENT, ANCIENT_CHAPTER_10_MCQS, ANCIENT_CHAPTER_10_SUBTOPICS } from './chapter10';
import { ANCIENT_CHAPTER_11_CONTENT, ANCIENT_CHAPTER_11_MCQS, ANCIENT_CHAPTER_11_SUBTOPICS } from './chapter11';
import { ANCIENT_CHAPTER_12_CONTENT, ANCIENT_CHAPTER_12_MCQS, ANCIENT_CHAPTER_12_SUBTOPICS } from './chapter12';

// Chapters 13-15 exist with legacy data or are pending upgrade
let ANCIENT_CHAPTER_13_CONTENT = '', ANCIENT_CHAPTER_13_MCQS: any[] = [], ANCIENT_CHAPTER_13_SUBTOPICS: any[] = [];
let ANCIENT_CHAPTER_14_CONTENT = '', ANCIENT_CHAPTER_14_MCQS: any[] = [], ANCIENT_CHAPTER_14_SUBTOPICS: any[] = [];
let ANCIENT_CHAPTER_15_CONTENT = '', ANCIENT_CHAPTER_15_MCQS: any[] = [], ANCIENT_CHAPTER_15_SUBTOPICS: any[] = [];

// Try importing existing legacy chapter data (chapters 13-15)
try { const ch13 = require('./chapter13'); ANCIENT_CHAPTER_13_CONTENT = ch13.ANCIENT_CHAPTER_13_CONTENT; ANCIENT_CHAPTER_13_MCQS = ch13.ANCIENT_CHAPTER_13_MCQS; ANCIENT_CHAPTER_13_SUBTOPICS = ch13.ANCIENT_CHAPTER_13_SUBTOPICS; } catch { }
try { const ch14 = require('./chapter14'); ANCIENT_CHAPTER_14_CONTENT = ch14.ANCIENT_CHAPTER_14_CONTENT; ANCIENT_CHAPTER_14_MCQS = ch14.ANCIENT_CHAPTER_14_MCQS; ANCIENT_CHAPTER_14_SUBTOPICS = ch14.ANCIENT_CHAPTER_14_SUBTOPICS; } catch { }
try { const ch15 = require('./chapter15'); ANCIENT_CHAPTER_15_CONTENT = ch15.ANCIENT_CHAPTER_15_CONTENT; ANCIENT_CHAPTER_15_MCQS = ch15.ANCIENT_CHAPTER_15_MCQS; ANCIENT_CHAPTER_15_SUBTOPICS = ch15.ANCIENT_CHAPTER_15_SUBTOPICS; } catch { }

export const ANCIENT_CONTENT_MAP: Record<number, any> = {
    1: {
        content: ANCIENT_CHAPTER_1_CONTENT,
        mcqs: ANCIENT_CHAPTER_1_MCQS,
        subtopics: ANCIENT_CHAPTER_1_SUBTOPICS
    },
    2: {
        content: ANCIENT_CHAPTER_2_CONTENT,
        mcqs: ANCIENT_CHAPTER_2_MCQS,
        subtopics: ANCIENT_CHAPTER_2_SUBTOPICS
    },
    3: {
        content: ANCIENT_CHAPTER_3_CONTENT,
        mcqs: ANCIENT_CHAPTER_3_MCQS,
        subtopics: ANCIENT_CHAPTER_3_SUBTOPICS
    },
    4: {
        content: ANCIENT_CHAPTER_4_CONTENT,
        mcqs: ANCIENT_CHAPTER_4_MCQS,
        subtopics: ANCIENT_CHAPTER_4_SUBTOPICS
    },
    5: {
        content: ANCIENT_CHAPTER_5_CONTENT,
        mcqs: ANCIENT_CHAPTER_5_MCQS,
        subtopics: ANCIENT_CHAPTER_5_SUBTOPICS
    },
    6: {
        content: ANCIENT_CHAPTER_6_CONTENT,
        mcqs: ANCIENT_CHAPTER_6_MCQS,
        subtopics: ANCIENT_CHAPTER_6_SUBTOPICS
    },
    7: {
        content: ANCIENT_CHAPTER_7_CONTENT,
        mcqs: ANCIENT_CHAPTER_7_MCQS,
        subtopics: ANCIENT_CHAPTER_7_SUBTOPICS
    },
    8: {
        content: ANCIENT_CHAPTER_8_CONTENT,
        mcqs: ANCIENT_CHAPTER_8_MCQS,
        subtopics: ANCIENT_CHAPTER_8_SUBTOPICS
    },
    9: {
        content: ANCIENT_CHAPTER_9_CONTENT,
        mcqs: ANCIENT_CHAPTER_9_MCQS,
        subtopics: ANCIENT_CHAPTER_9_SUBTOPICS
    },
    10: {
        content: ANCIENT_CHAPTER_10_CONTENT,
        mcqs: ANCIENT_CHAPTER_10_MCQS,
        subtopics: ANCIENT_CHAPTER_10_SUBTOPICS
    },
    11: {
        content: ANCIENT_CHAPTER_11_CONTENT,
        mcqs: ANCIENT_CHAPTER_11_MCQS,
        subtopics: ANCIENT_CHAPTER_11_SUBTOPICS
    },
    12: {
        content: ANCIENT_CHAPTER_12_CONTENT,
        mcqs: ANCIENT_CHAPTER_12_MCQS,
        subtopics: ANCIENT_CHAPTER_12_SUBTOPICS
    },
    13: {
        content: ANCIENT_CHAPTER_13_CONTENT,
        mcqs: ANCIENT_CHAPTER_13_MCQS,
        subtopics: ANCIENT_CHAPTER_13_SUBTOPICS
    },
    14: {
        content: ANCIENT_CHAPTER_14_CONTENT,
        mcqs: ANCIENT_CHAPTER_14_MCQS,
        subtopics: ANCIENT_CHAPTER_14_SUBTOPICS
    },
    15: {
        content: ANCIENT_CHAPTER_15_CONTENT,
        mcqs: ANCIENT_CHAPTER_15_MCQS,
        subtopics: ANCIENT_CHAPTER_15_SUBTOPICS
    },
    // Chapters 16-27: Placeholder entries
    16: { content: '', mcqs: [], subtopics: [] },
    17: { content: '', mcqs: [], subtopics: [] },
    18: { content: '', mcqs: [], subtopics: [] },
    19: { content: '', mcqs: [], subtopics: [] },
    20: { content: '', mcqs: [], subtopics: [] },
    21: { content: '', mcqs: [], subtopics: [] },
    22: { content: '', mcqs: [], subtopics: [] },
    23: { content: '', mcqs: [], subtopics: [] },
    24: { content: '', mcqs: [], subtopics: [] },
    25: { content: '', mcqs: [], subtopics: [] },
    26: { content: '', mcqs: [], subtopics: [] },
    27: { content: '', mcqs: [], subtopics: [] }
};
