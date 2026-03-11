/**
 * MCQ Registry - Single source of truth for all subject-wise MCQs
 * Used by the Centralized Question Bank to scan counts and metadata.
 */

import { MODERN_MCQS_DATA, MEDIEVAL_MCQS_DATA, ANCIENT_MCQS_DATA } from '@/components/batch1/history/data/history-mcqs-data';
import { SPECTRUM_MODERN_HISTORY } from '@/components/batch1/history/data/spectrum-modern-history';
import { ANCIENT_SCHEDULE } from '@/components/batch1/history/data/ancient-schedule-data';
import { MEDIEVAL_SCHEDULE } from '@/components/batch1/history/data/medieval-schedule-data';
import { TOPIC_TITLES } from '@/components/batch1-1/polity/data/polity-types-95';
import { CHAPTER_MCQS } from '@/components/batch1-1/polity/data/chapter-level-index';

// Environment Imports
import { ENVIRONMENT_SYLLABUS } from '@/components/batch1/environment/data/environment-schedule-data';
import { environmentMCQs } from '@/components/batch1/environment/data/mcqs/environment-mcqs';

// Geography Imports
import { GEOGRAPHY_SCHEDULE } from '@/components/batch1/geography/data/geography-schedule-data';
import { geographyMCQs } from '@/components/batch1/geography/data/mcqs/geography-mcqs';

// Economy Imports
import { ECONOMY_SYLLABUS } from '@/components/batch1/economy/data/economy-schedule-data';
import { economyMCQs } from '@/components/batch1/economy/data/mcqs/economy-mcqs';

// Science-Tech Imports
import { SCI_TECH_SYLLABUS } from '@/components/batch1/science-tech/data/scitech-schedule-data';
import { sciTechMCQs } from '@/components/batch1/science-tech/data/mcqs/scitech-mcqs';

export interface SubjectMCQMeta {
    subject: string;
    totalChapters: number;
    activeChapters: number;
    totalQuestions: number;
}

export interface ChapterMeta {
    id: number | string;
    title: string;
    mcqCount: number;
    subject: string;
}

export const getSubjectChapters = (subject: 'history' | 'polity' | 'geography' | 'economy' | 'environment' | 'scitech'): ChapterMeta[] => {
    if (subject === 'history') {
        const historyChapters: ChapterMeta[] = [];

        // Add Modern History
        SPECTRUM_MODERN_HISTORY.forEach(ch => {
            if (MODERN_MCQS_DATA[ch.id]) {
                historyChapters.push({
                    id: `modern-${ch.id}`,
                    title: `Modern Ch ${ch.id}: ${ch.title}`,
                    mcqCount: MODERN_MCQS_DATA[ch.id]?.length || 0,
                    subject: 'history'
                });
            }
        });

        // Add Ancient History
        ANCIENT_SCHEDULE.forEach(ch => {
            // Mapping from ANCIENT_SCHEDULE chapters array to consolidated ANCIENT_MCQS_DATA
            ch.chapters.forEach(chId => {
                if (ANCIENT_MCQS_DATA[chId]) {
                    historyChapters.push({
                        id: `ancient-${chId}`,
                        title: `Ancient Ch ${chId}: ${ch.chapterNames[ch.chapters.indexOf(chId)]?.split(': ')[1] || 'Chapter ' + chId}`,
                        mcqCount: ANCIENT_MCQS_DATA[chId]?.length || 0,
                        subject: 'history'
                    });
                }
            });
        });

        // Add Medieval History
        MEDIEVAL_SCHEDULE.forEach(ch => {
            ch.chapters.forEach(chId => {
                if (MEDIEVAL_MCQS_DATA[chId]) {
                    historyChapters.push({
                        id: `medieval-${chId}`,
                        title: `Medieval Ch ${chId}: ${ch.chapterNames[ch.chapters.indexOf(chId)]?.split(': ')[1] || 'Chapter ' + chId}`,
                        mcqCount: MEDIEVAL_MCQS_DATA[chId]?.length || 0,
                        subject: 'history'
                    });
                }
            });
        });

        return historyChapters;
    } else if (subject === 'geography') {
        return GEOGRAPHY_SCHEDULE.map(day => ({
            id: day.day,
            title: day.title,
            mcqCount: geographyMCQs.filter(m => Number(m.chapter) === day.day).length,
            subject: 'geography'
        })).filter(ch => ch.mcqCount > 0);
    } else if (subject === 'economy') {
        return ECONOMY_SYLLABUS.map((topic, idx) => ({
            id: idx + 1,
            title: topic.title,
            mcqCount: economyMCQs.filter(m => Number(m.chapter) === (idx + 1)).length,
            subject: 'economy'
        })).filter(ch => ch.mcqCount > 0);
    } else if (subject === 'environment') {
        return ENVIRONMENT_SYLLABUS.map((topic, idx) => ({
            id: idx + 1,
            title: topic.title,
            mcqCount: environmentMCQs.filter(m => m.chapter === (idx + 1)).length,
            subject: 'environment'
        })).filter(ch => ch.mcqCount > 0);
    } else if (subject === 'scitech') {
        return SCI_TECH_SYLLABUS.map((topic, idx) => ({
            id: idx + 1,
            title: topic.title,
            mcqCount: sciTechMCQs.filter(m => m.chapter === (idx + 1)).length,
            subject: 'scitech'
        })).filter(ch => ch.mcqCount > 0);
    } else {
        // For Polity, we map via TOPIC_TITLES
        return TOPIC_TITLES.map(topic => ({
            id: topic.id,
            title: topic.title,
            mcqCount: CHAPTER_MCQS[topic.id]?.length || 0,
            subject: 'polity'
        })).filter(ch => ch.mcqCount > 0);
    }
};

export const getHistoryStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('history');
    return {
        subject: 'History',
        totalChapters: 39,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getPolityStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('polity');
    return {
        subject: 'Polity',
        totalChapters: 95,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getGeographyStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('geography');
    return {
        subject: 'Geography',
        totalChapters: 21,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getEconomyStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('economy');
    return {
        subject: 'Economy',
        totalChapters: 6,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getEnvironmentStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('environment');
    return {
        subject: 'Environment',
        totalChapters: 4,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getSciTechStats = (): SubjectMCQMeta => {
    const chapters = getSubjectChapters('scitech');
    return {
        subject: 'Science & Tech',
        totalChapters: 5,
        activeChapters: chapters.length,
        totalQuestions: chapters.reduce((acc, curr) => acc + curr.mcqCount, 0)
    };
};

export const getGlobalMCQStats = () => {
    return [
        getHistoryStats(),
        getPolityStats(),
        getGeographyStats(),
        getEconomyStats(),
        getEnvironmentStats(),
        getSciTechStats()
    ];
};
