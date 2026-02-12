import { TestResult } from '@/components/common/reports/StandardTestReport';

export interface ChapterReportEntry {
    id: string; // unique ID
    timestamp: string;
    chapterId: number;
    subject: 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'scitech';
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
        score: result.score || 0,
        totalQuestions: result.totalQuestions || 0,
        accuracy: result.accuracy || 0,
        timeTaken: result.timeTaken || 0,
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
    const subjects = ['polity', 'history', 'geography', 'economy', 'environment', 'scitech'] as const;
    const all: Record<string, ChapterReportEntry[]> = {};

    subjects.forEach(sub => {
        all[sub] = getChapterReports(sub);
    });

    return all;
}

export interface SubjectStats {
    totalQuestions: number;
    totalAttempts: number;
    averageAccuracy: number;
    masteryByChapter: Record<number, number>; // chapterId -> highest accuracy
    weakAreas: number[]; // chapterIds with < 50% accuracy
}

export function getSubjectStats(subject: ChapterReportEntry['subject']): SubjectStats {
    const reports = getChapterReports(subject);
    const stats: SubjectStats = {
        totalQuestions: 0,
        totalAttempts: reports.length,
        averageAccuracy: 0,
        masteryByChapter: {},
        weakAreas: []
    };

    if (reports.length === 0) return stats;

    let totalScore = 0;
    let totalMaxScore = 0;

    reports.forEach(report => {
        stats.totalQuestions += report.totalQuestions;
        totalScore += report.score;
        totalMaxScore += report.totalQuestions;

        // Track max accuracy per chapter
        const currentMax = stats.masteryByChapter[report.chapterId] || 0;
        stats.masteryByChapter[report.chapterId] = Math.max(currentMax, report.accuracy);
    });

    stats.averageAccuracy = totalMaxScore > 0 ? Math.round((totalScore / totalMaxScore) * 100) : 0;

    // Identify weak areas (chapters with highest accuracy < 50%)
    Object.entries(stats.masteryByChapter).forEach(([chapterId, accuracy]) => {
        if (accuracy < 50) {
            stats.weakAreas.push(parseInt(chapterId));
        }
    });

    return stats;
}

export interface TrendDataPoint {
    date: string;
    accuracy: number;
    chapterId: number;
}

export function getSubjectTrendData(subject: ChapterReportEntry['subject']): TrendDataPoint[] {
    const reports = getChapterReports(subject);
    // Reverse to get chronological order (reports are saved with unshift)
    return [...reports].reverse().map(r => ({
        date: new Date(r.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' }),
        accuracy: r.accuracy,
        chapterId: r.chapterId
    }));
}
