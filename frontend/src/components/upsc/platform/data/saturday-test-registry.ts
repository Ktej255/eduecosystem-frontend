/**
 * Saturday Test Registry — Multi-Subject Test Framework
 * 
 * This registry provides the infrastructure for multi-subject weekly tests.
 * Currently populated with Polity data (imported from existing saturday-test-data.ts).
 * Additional subject data will be added when the user provides the schedule.
 */

import { PomodoroSubjectId } from '../pomodoro/subject-schedule-configs';

// ======================== TYPES ========================

export interface ModuleMCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed (A=0, B=1, etc.)
    explanation: string;
    chapter: string;
    subtopic: string;
    subject?: string; // Subject label for multi-subject tests
}

export interface SubjectTestBlock {
    subject: PomodoroSubjectId;
    label: string;
    questionCount: number;
    questions: ModuleMCQ[];
    weightage: number; // percentage (sum of all blocks = 100)
    duration: number; // minutes allocated
}

export interface WeeklyTestConfig {
    weekNumber: number;
    title: string;
    description: string;
    subjects: SubjectTestBlock[];
    totalDuration: number; // minutes
    totalQuestions: number;
    negativeMarking: boolean;
    negativeMarkRatio: number; // e.g., 0.33 for -1/3
}

export interface TestResult {
    weekNumber: number;
    date: string;
    subjectScores: SubjectScore[];
    totalScore: number;
    totalAttempted: number;
    totalCorrect: number;
    totalWrong: number;
    totalUnattempted: number;
    netScore: number;
    maxScore: number;
    timeTaken: number; // seconds
}

export interface SubjectScore {
    subject: PomodoroSubjectId;
    label: string;
    correct: number;
    wrong: number;
    unattempted: number;
    total: number;
    score: number;
    maxScore: number;
    accuracy: number; // percentage
}

// ======================== REGISTRY ========================

/**
 * Registry of all weekly tests.
 * Currently: Only Polity is populated.
 * Future: User will provide multi-subject schedule in 2-3 days.
 */
const weeklyTests: Map<number, WeeklyTestConfig> = new Map();

/**
 * Register a new weekly test configuration
 */
export function registerWeeklyTest(config: WeeklyTestConfig): void {
    weeklyTests.set(config.weekNumber, config);
}

/**
 * Get a specific week's test configuration
 */
export function getWeeklyTest(weekNumber: number): WeeklyTestConfig | undefined {
    return weeklyTests.get(weekNumber);
}

/**
 * Get all registered weekly tests
 */
export function getAllWeeklyTests(): WeeklyTestConfig[] {
    return Array.from(weeklyTests.values()).sort((a, b) => a.weekNumber - b.weekNumber);
}

/**
 * Get all available subjects across all registered tests
 */
export function getTestSubjects(): PomodoroSubjectId[] {
    const subjects = new Set<PomodoroSubjectId>();
    weeklyTests.forEach(test => {
        test.subjects.forEach(block => subjects.add(block.subject));
    });
    return Array.from(subjects);
}

/**
 * Create a single-subject test block from existing MCQ data
 * Utility for quickly registering existing subject-specific test data
 */
export function createSubjectBlock(
    subject: PomodoroSubjectId,
    label: string,
    questions: ModuleMCQ[],
    duration: number = 60
): SubjectTestBlock {
    return {
        subject,
        label,
        questionCount: questions.length,
        questions,
        weightage: 100,
        duration
    };
}

/**
 * Create a multi-subject test from multiple subject blocks
 */
export function createMultiSubjectTest(
    weekNumber: number,
    title: string,
    blocks: SubjectTestBlock[],
    options?: {
        negativeMarking?: boolean;
        negativeMarkRatio?: number;
    }
): WeeklyTestConfig {
    const totalQuestions = blocks.reduce((sum, b) => sum + b.questionCount, 0);
    const totalDuration = blocks.reduce((sum, b) => sum + b.duration, 0);
    
    // Recalculate weightage proportionally
    blocks.forEach(block => {
        block.weightage = Math.round((block.questionCount / totalQuestions) * 100);
    });

    return {
        weekNumber,
        title,
        description: `Week ${weekNumber} — ${blocks.map(b => b.label).join(' + ')}`,
        subjects: blocks,
        totalDuration,
        totalQuestions,
        negativeMarking: options?.negativeMarking ?? true,
        negativeMarkRatio: options?.negativeMarkRatio ?? 0.33,
    };
}

// ======================== SCORE CALCULATOR ========================

/**
 * Calculate detailed score breakdown for a completed test
 */
export function calculateTestScore(
    testConfig: WeeklyTestConfig,
    answers: Map<number, number | null>, // questionId -> selected option (null = unattempted)
    timeTaken: number // seconds
): TestResult {
    const subjectScores: SubjectScore[] = [];
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalUnattempted = 0;

    for (const block of testConfig.subjects) {
        let correct = 0;
        let wrong = 0;
        let unattempted = 0;

        for (const q of block.questions) {
            const answer = answers.get(q.id);
            if (answer === null || answer === undefined) {
                unattempted++;
            } else if (answer === q.correctAnswer) {
                correct++;
            } else {
                wrong++;
            }
        }

        const score = testConfig.negativeMarking
            ? correct * 2 - wrong * testConfig.negativeMarkRatio * 2
            : correct * 2;

        subjectScores.push({
            subject: block.subject,
            label: block.label,
            correct,
            wrong,
            unattempted,
            total: block.questionCount,
            score: Math.round(score * 100) / 100,
            maxScore: block.questionCount * 2,
            accuracy: block.questionCount > 0 ? Math.round((correct / (correct + wrong || 1)) * 100) : 0,
        });

        totalCorrect += correct;
        totalWrong += wrong;
        totalUnattempted += unattempted;
    }

    const netScore = testConfig.negativeMarking
        ? totalCorrect * 2 - totalWrong * testConfig.negativeMarkRatio * 2
        : totalCorrect * 2;

    return {
        weekNumber: testConfig.weekNumber,
        date: new Date().toISOString(),
        subjectScores,
        totalScore: totalCorrect * 2,
        totalAttempted: totalCorrect + totalWrong,
        totalCorrect,
        totalWrong,
        totalUnattempted,
        netScore: Math.round(netScore * 100) / 100,
        maxScore: testConfig.totalQuestions * 2,
        timeTaken,
    };
}
