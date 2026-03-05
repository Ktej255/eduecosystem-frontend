import { QuestionBankService } from '../question-bank/QuestionBankService';
import { contentRegistry as ANCIENT_CONTENT_MAP } from './ancient/content-registry';
import { MEDIEVAL_CONTENT_MAP } from './medieval/content-registry';

// Dynamically reconstruct MODERN_MCQS_DATA from the unified service
// This ensures that any restoration in the modern/ folders propagates to the legacy portal
const allModernQuestions = QuestionBankService.getAllQuestions().filter(q => q.section === 'modern');

export const MODERN_MCQS_DATA: Record<number, any[]> = {};

// Group by chapterId and ensure legacy property 'correctIndex' is present
allModernQuestions.forEach(q => {
    if (!MODERN_MCQS_DATA[q.chapterId]) {
        MODERN_MCQS_DATA[q.chapterId] = [];
    }
    MODERN_MCQS_DATA[q.chapterId].push({
        ...q,
        correctIndex: q.correctAnswer // Legacy compatibility
    });
});


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

import { shuffleMCQOptions, deduplicateMCQs } from '@/components/common/mcq/mcq-utils';

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

    // Deduplicate first
    const uniqueMCQs = deduplicateMCQs(allMCQs);

    // Shuffle options for each question
    return uniqueMCQs.map(q => shuffleMCQOptions(q));
}

