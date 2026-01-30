// CSAT Data Index - Pomodoro Evening Session (Batch 1.1)
// This file exports all daily CSAT content for the Pomodoro schedule

import {
    DAY_01_PASSAGES,
    DAY_01_QUESTIONS,
    DAY_01_SESSION,
    type CSATPassage,
    type CSATQuestion
} from './day01-csat';

import {
    DAY_02_PASSAGES,
    DAY_02_QUESTIONS,
    DAY_02_SESSION
} from './day02-csat';

import {
    DAY_03_PASSAGES,
    DAY_03_QUESTIONS,
    DAY_03_SESSION
} from './day03-csat';

import {
    DAY_04_PASSAGES,
    DAY_04_QUESTIONS,
    DAY_04_SESSION
} from './day04-csat';

import {
    DAY_05_PASSAGES,
    DAY_05_QUESTIONS,
    DAY_05_SESSION
} from './day05-csat';

import {
    DAY_06_PASSAGES,
    DAY_06_QUESTIONS,
    DAY_06_SESSION
} from './day06-csat';

import {
    DAY_07_PASSAGES,
    DAY_07_QUESTIONS,
    DAY_07_SESSION
} from './day07-csat';

import {
    DAY_08_PASSAGES,
    DAY_08_QUESTIONS,
    DAY_08_SESSION
} from './day08-csat';

import {
    DAY_09_PASSAGES,
    DAY_09_QUESTIONS,
    DAY_09_SESSION
} from './day09-csat';

import {
    DAY_10_PASSAGES,
    DAY_10_QUESTIONS,
    DAY_10_SESSION
} from './day10-csat';

import {
    DAY_11_PASSAGES,
    DAY_11_QUESTIONS,
    DAY_11_SESSION
} from './day11-csat';

import {
    DAY_12_PASSAGES,
    DAY_12_QUESTIONS,
    DAY_12_SESSION
} from './day12-csat';

import {
    DAY_13_PASSAGES,
    DAY_13_QUESTIONS,
    DAY_13_SESSION
} from './day13-csat';

import {
    DAY_14_PASSAGES,
    DAY_14_QUESTIONS,
    DAY_14_SESSION
} from './day14-csat';

import {
    DAY_15_PASSAGES,
    DAY_15_QUESTIONS,
    DAY_15_SESSION
} from './day15-csat';

import {
    DAY_17_PASSAGES,
    DAY_17_QUESTIONS,
    DAY_17_SESSION
} from './day17-csat';

import {
    DAY_18_PASSAGES,
    DAY_18_QUESTIONS,
    DAY_18_SESSION
} from './day18-csat';

import {
    DAY_19_PASSAGES,
    DAY_19_QUESTIONS,
    DAY_19_SESSION
} from './day19-csat';

import {
    DAY_20_PASSAGES,
    DAY_20_QUESTIONS,
    DAY_20_SESSION
} from './day20-csat';

// Re-export types
export type { CSATPassage, CSATQuestion };

// Export all sessions - will be expanded as more days are added
export const CSAT_SESSIONS = [
    { ...DAY_01_SESSION, passages: DAY_01_PASSAGES, questions: DAY_01_QUESTIONS },
    { ...DAY_02_SESSION, passages: DAY_02_PASSAGES, questions: DAY_02_QUESTIONS },
    { ...DAY_03_SESSION, passages: DAY_03_PASSAGES, questions: DAY_03_QUESTIONS },
    { ...DAY_04_SESSION, passages: DAY_04_PASSAGES, questions: DAY_04_QUESTIONS },
    { ...DAY_05_SESSION, passages: DAY_05_PASSAGES, questions: DAY_05_QUESTIONS },
    { ...DAY_06_SESSION, passages: DAY_06_PASSAGES, questions: DAY_06_QUESTIONS },
    { ...DAY_07_SESSION, passages: DAY_07_PASSAGES, questions: DAY_07_QUESTIONS },
    { ...DAY_08_SESSION, passages: DAY_08_PASSAGES, questions: DAY_08_QUESTIONS },
    { ...DAY_09_SESSION, passages: DAY_09_PASSAGES, questions: DAY_09_QUESTIONS },
    { ...DAY_10_SESSION, passages: DAY_10_PASSAGES, questions: DAY_10_QUESTIONS },
    { ...DAY_11_SESSION, passages: DAY_11_PASSAGES, questions: DAY_11_QUESTIONS },
    { ...DAY_12_SESSION, passages: DAY_12_PASSAGES, questions: DAY_12_QUESTIONS },
    { ...DAY_13_SESSION, passages: DAY_13_PASSAGES, questions: DAY_13_QUESTIONS },
    { ...DAY_14_SESSION, passages: DAY_14_PASSAGES, questions: DAY_14_QUESTIONS },
    { ...DAY_15_SESSION, passages: DAY_15_PASSAGES, questions: DAY_15_QUESTIONS },
    { ...DAY_17_SESSION, passages: DAY_17_PASSAGES, questions: DAY_17_QUESTIONS },
    { ...DAY_18_SESSION, passages: DAY_18_PASSAGES, questions: DAY_18_QUESTIONS },
    { ...DAY_19_SESSION, passages: DAY_19_PASSAGES, questions: DAY_19_QUESTIONS },
    { ...DAY_20_SESSION, passages: DAY_20_PASSAGES, questions: DAY_20_QUESTIONS }
];

// Helper function to get session by day
export function getCSATSessionByDay(day: number) {
    const session = CSAT_SESSIONS.find(s => s.day === day);
    if (!session) return null;

    return {
        session: { day: session.day, title: session.title, passageCount: session.passageCount, questionCount: session.questionCount, duration: session.duration, topics: session.topics },
        passages: session.passages,
        questions: session.questions
    };
}

// Get all available days
export function getAvailableCSATDays(): number[] {
    return CSAT_SESSIONS.map(s => s.day);
}

// Session summary for display
export const POMODORO_CSAT_OVERVIEW = {
    totalDays: 20,
    currentlyAvailable: CSAT_SESSIONS.length,
    structure: {
        passagesPerDay: 4,
        questionsPerDay: 20,
        readingTime: 25, // minutes
        practiceTime: 25  // minutes
    }
};
