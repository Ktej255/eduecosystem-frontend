import { TestResult } from '@/components/common/reports/StandardTestReport';

export interface ChapterReportEntry {
    id: string; // unique ID
    timestamp: string;
    chapterId: number;
    subject: 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science';
    score: number;
    totalQuestions: number;
    accuracy: number;
    timeTaken: number;
    level: number; // 1, 2, 3
    details: TestResult;
}

const STORAGE_KEY_PREFIX = 'universal_chapter_reports_';

export function saveChapterReport(
    subject: ChapterReportEntry['subject'],
    chapterId: number,
    result: TestResult,
    level: number = 1
) {
    if (typeof window === 'undefined') return;

    const key = `${STORAGE_KEY_PREFIX}${subject}`;
    const existingStr = localStorage.getItem(key);
    const existing: ChapterReportEntry[] = existingStr ? JSON.parse(existingStr) : [];

    const newEntry: ChapterReportEntry = {
        id: `${subject}-${chapterId}-${Date.now()}`,
        timestamp: new Date().toISOString(),
        chapterId,
        subject,
        score: result.score,
        totalQuestions: result.totalQuestions,
        accuracy: result.accuracy,
        timeTaken: result.timeTaken,
        level,
        details: result
    };

    // Add new entry
    existing.unshift(newEntry); // Add to top

    // Keep last 100 reports per subject to avoid quota limits
    const trimmed = existing.slice(0, 100);

    localStorage.setItem(key, JSON.stringify(trimmed));
    console.log(`Saved report for ${subject} chapter ${chapterId}`);
}

export function getChapterReports(subject: ChapterReportEntry['subject']): ChapterReportEntry[] {
    if (typeof window === 'undefined') return [];
    const key = `${STORAGE_KEY_PREFIX}${subject}`;
    const existingStr = localStorage.getItem(key);
    return existingStr ? JSON.parse(existingStr) : [];
}

export function getAllChapterReports(): Record<string, ChapterReportEntry[]> {
    if (typeof window === 'undefined') return {};
    const subjects = ['polity', 'history', 'geography', 'economy', 'environment', 'science'] as const;
    const all: Record<string, ChapterReportEntry[]> = {};

    subjects.forEach(sub => {
        all[sub] = getChapterReports(sub);
    });

    return all;
}
