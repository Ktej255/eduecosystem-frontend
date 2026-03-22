import { TestResult } from '@/components/common/reports/StandardTestReport';

export interface ChapterReportEntry {
    id: string; // unique ID
    timestamp: string;
    chapterId: string | number;
    subject: 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science-tech' | 'international-relations' | 'csat';
    score: number;
    totalQuestions: number;
    accuracy: number;
    timeTaken: number;
    level: number; // 1, 2, 3
    details: TestResult;
}

const STORAGE_KEY_PREFIX = 'universal_chapter_reports_';

export async function saveChapterReport(
    subject: ChapterReportEntry['subject'],
    chapterId: string | number,
    result: TestResult,
    level: number = 1
) {
    if (typeof window === 'undefined') return;

    const key = `${STORAGE_KEY_PREFIX}${subject}`;

    // Pull existing first
    let existing: ChapterReportEntry[] = [];
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/?report_type=chapter_report&report_key=${key}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.length > 0 && data[0].data?.reports) {
                    existing = data[0].data.reports;
                }
            }
        }
    } catch (e) { }

    if (existing.length === 0) {
        const existingStr = localStorage.getItem(key);
        existing = existingStr ? JSON.parse(existingStr) : [];
    }

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

    // Sync to DB
    try {
        const token = localStorage.getItem("token");
        if (token) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    report_type: 'chapter_report',
                    report_key: key,
                    data: { reports: trimmed }
                })
            });
        }
    } catch (err) {
        console.warn("Failed to sync chapter report to DB");
    }
}

export async function getChapterReports(subject: ChapterReportEntry['subject']): Promise<ChapterReportEntry[]> {
    if (typeof window === 'undefined') return [];
    const key = `${STORAGE_KEY_PREFIX}${subject}`;

    try {
        const token = localStorage.getItem("token");
        if (token) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/?report_type=chapter_report&report_key=${key}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data.length > 0 && data[0].data?.reports) {
                    return data[0].data.reports;
                }
            }
        }
    } catch (e) {
        console.warn("Falling back to local chapter reports");
    }

    const existingStr = localStorage.getItem(key);
    return existingStr ? JSON.parse(existingStr) : [];
}

export async function getAllChapterReports(): Promise<Record<string, ChapterReportEntry[]>> {
    if (typeof window === 'undefined') return {};
    const subjects = ['polity', 'history', 'geography', 'economy', 'environment', 'science-tech', 'international-relations', 'csat'] as const;
    const all: Record<string, ChapterReportEntry[]> = {};

    for (const sub of subjects) {
        all[sub] = await getChapterReports(sub);
    }

    return all;
}

export interface SubjectStats {
    totalQuestions: number;
    totalAttempts: number;
    averageAccuracy: number;
    masteryByChapter: Record<string | number, number>; // chapterId -> highest accuracy
    weakAreas: (string | number)[]; // chapterIds with < 50% accuracy
}

export async function getSubjectStats(subject: ChapterReportEntry['subject']): Promise<SubjectStats> {
    const reports = await getChapterReports(subject);
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
    chapterId: string | number;
}

export async function getSubjectTrendData(subject: ChapterReportEntry['subject']): Promise<TrendDataPoint[]> {
    const reports = await getChapterReports(subject);
    // Reverse to get chronological order (reports are saved with unshift)
    return [...reports].reverse().map(r => ({
        date: new Date(r.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' }),
        accuracy: r.accuracy,
        chapterId: r.chapterId
    }));
}

// --- SRS / Retention Engine Persistence ---
const SRS_STORAGE_KEY = 'polity_srs_data_v2'; // unique key for backend lookup

export async function saveSRSDataToDB(srsData: Record<string, any>) {
    // Always backup to local storage
    if (typeof window !== 'undefined') {
        localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(srsData));
    }

    try {
        const token = localStorage.getItem("token");
        if (token) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    report_type: 'srs_retention_data',
                    report_key: SRS_STORAGE_KEY,
                    data: srsData
                })
            });
        }
    } catch (err) {
        console.warn("Failed to sync SRS Data to DB:", err);
    }
}

export async function getSRSDataFromDB(): Promise<Record<string, any>> {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student-reports/?report_type=srs_retention_data&report_key=${SRS_STORAGE_KEY}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const results = await res.json();
                if (results.length > 0 && results[0].data) {
                    // Cache the successful fetch locally to mirror
                    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(results[0].data));
                    return results[0].data;
                }
            }
        }
    } catch (err) {
        console.warn("Failed to fetch SRS Data from DB, falling back to local:", err);
    }

    // Fallback
    if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(SRS_STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    }

    return {};
}
