/**
 * Centralized Pomodoro Subject Schedule Configuration
 * Maps all UPSC subjects into a unified structure for SubjectPomodoro
 */

// ======================== TYPES ========================

export type PomodoroSubjectId =
    | 'polity'
    | 'history'
    | 'geography'
    | 'economy'
    | 'environment'
    | 'science-tech'
    | 'international-relations'
    | 'csat';

export interface PomodoroSubjectConfig {
    id: PomodoroSubjectId;
    label: string;
    icon: string;
    color: string;
    gradient: string;
    borderColor: string;
    totalChapters: number;
    description: string;
}

export interface PomodoroChapter {
    id: number;
    topic: string;
    group: string;
    part: string;
    pages: number;
    slots: number;
    subtopics?: string[];
}

// ======================== SUBJECT CONFIGS ========================

export const POMODORO_SUBJECTS: PomodoroSubjectConfig[] = [
    {
        id: 'polity',
        label: 'Indian Polity',
        icon: '🏛️',
        color: 'text-indigo-600',
        gradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
        borderColor: 'border-indigo-200',
        totalChapters: 95,
        description: 'Laxmikanth — Full Coverage'
    },
    {
        id: 'history',
        label: 'Modern Indian History',
        icon: '📜',
        color: 'text-amber-600',
        gradient: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
        borderColor: 'border-amber-200',
        totalChapters: 28,
        description: 'Spectrum — Full Coverage'
    },
    {
        id: 'geography',
        label: 'Geography',
        icon: '🌍',
        color: 'text-emerald-600',
        gradient: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
        borderColor: 'border-emerald-200',
        totalChapters: 21,
        description: 'Physical + Indian + Human Geography'
    },
    {
        id: 'economy',
        label: 'Indian Economy',
        icon: '💹',
        color: 'text-blue-600',
        gradient: 'from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20',
        borderColor: 'border-blue-200',
        totalChapters: 6,
        description: 'Macro, Banking, Fiscal, External Sector'
    },
    {
        id: 'environment',
        label: 'Environment & Ecology',
        icon: '🌿',
        color: 'text-green-600',
        gradient: 'from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20',
        borderColor: 'border-green-200',
        totalChapters: 8,
        description: 'Biodiversity, Climate, Conservation'
    },
    {
        id: 'science-tech',
        label: 'Science & Technology',
        icon: '🔬',
        color: 'text-purple-600',
        gradient: 'from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20',
        borderColor: 'border-purple-200',
        totalChapters: 5,
        description: 'Space, Defense, BioTech, IT, Energy'
    },
    {
        id: 'international-relations',
        label: 'International Relations',
        icon: '🌐',
        color: 'text-cyan-600',
        gradient: 'from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20',
        borderColor: 'border-cyan-200',
        totalChapters: 12,
        description: 'Foreign Policy, Institutions, Bilateral'
    },
    {
        id: 'csat',
        label: 'CSAT (Paper II)',
        icon: '🧮',
        color: 'text-rose-600',
        gradient: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20',
        borderColor: 'border-rose-200',
        totalChapters: 7,
        description: 'Comprehension, Logic, Math, Decision Making'
    }
];

// ======================== CHAPTER REGISTRIES ========================
// These map each subject to its "chapter list" for the Pomodoro chapter selector

import { GEOGRAPHY_SCHEDULE, GEOGRAPHY_PHASES } from '@/components/upsc/subjects/geography/data/geography-schedule-data';
import { ECONOMY_SYLLABUS } from '@/components/upsc/subjects/economy/data/economy-schedule-data';
import { SCI_TECH_SYLLABUS } from '@/components/upsc/subjects/science-tech/data/scitech-schedule-data';

export function getChaptersForSubject(subjectId: PomodoroSubjectId): Record<string, PomodoroChapter[]> {
    switch (subjectId) {
        case 'geography':
            return getGeographyChapters();
        case 'economy':
            return getEconomyChapters();
        case 'science-tech':
            return getSciTechChapters();
        case 'environment':
            return getEnvironmentChapters();
        case 'international-relations':
            return getIRChapters();
        case 'csat':
            return getCSATChapters();
        default:
            return {};
    }
}

function getGeographyChapters(): Record<string, PomodoroChapter[]> {
    const groups: Record<string, PomodoroChapter[]> = {};
    GEOGRAPHY_PHASES.forEach(phase => {
        groups[phase.title] = GEOGRAPHY_SCHEDULE
            .filter(d => d.phase === phase.id && !d.isRevisionDay)
            .map(d => ({
                id: d.day,
                topic: d.title,
                group: phase.title,
                part: "I", pages: 10, slots: 2,
                subtopics: d.topics
            }));
    });
    return groups;
}

function getEconomyChapters(): Record<string, PomodoroChapter[]> {
    const groups: Record<string, PomodoroChapter[]> = {};
    ECONOMY_SYLLABUS.forEach((topic, idx) => {
        const cat = topic.category || 'General';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push({
            id: idx + 1,
            topic: topic.title,
            group: cat,
            part: "I", pages: 10, slots: 2,
            subtopics: topic.subtopics
        });
    });
    return groups;
}

function getSciTechChapters(): Record<string, PomodoroChapter[]> {
    const groups: Record<string, PomodoroChapter[]> = {};
    SCI_TECH_SYLLABUS.forEach((topic, idx) => {
        const cat = topic.category || 'General';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push({
            id: idx + 1,
            topic: topic.title,
            group: cat,
            part: "I", pages: 10, slots: 2,
            subtopics: topic.subtopics
        });
    });
    return groups;
}

function getEnvironmentChapters(): Record<string, PomodoroChapter[]> {
    return {
        'Ecology & Biodiversity': [
            { id: 1, topic: 'Ecosystem Basics', group: 'Ecology & Biodiversity', part: "I", pages: 10, slots: 2, subtopics: ['Food Chains', 'Energy Flow', 'Biogeochemical Cycles'] },
            { id: 2, topic: 'Biodiversity', group: 'Ecology & Biodiversity', part: "I", pages: 10, slots: 2, subtopics: ['Biodiversity Hotspots', 'Endemic Species', 'Red Data Book'] },
            { id: 3, topic: 'Wildlife Conservation', group: 'Ecology & Biodiversity', part: "I", pages: 10, slots: 2, subtopics: ['National Parks', 'Tiger Reserves', 'Biosphere Reserves'] },
        ],
        'Climate & Pollution': [
            { id: 4, topic: 'Climate Change', group: 'Climate & Pollution', part: "I", pages: 10, slots: 2, subtopics: ['Greenhouse Effect', 'UNFCCC', 'Paris Agreement', 'NDCs'] },
            { id: 5, topic: 'Pollution', group: 'Climate & Pollution', part: "I", pages: 10, slots: 2, subtopics: ['Air Quality', 'Water Pollution', 'Solid Waste', 'E-waste'] },
            { id: 6, topic: 'Environmental Laws', group: 'Climate & Pollution', part: "I", pages: 10, slots: 2, subtopics: ['EPA 1986', 'EIA', 'NGT', 'Polluter Pays'] },
        ],
        'Sustainable Development': [
            { id: 7, topic: 'Renewable Energy', group: 'Sustainable Development', part: "I", pages: 10, slots: 2, subtopics: ['Solar Mission', 'Green Hydrogen', 'Wind Energy'] },
            { id: 8, topic: 'International Agreements', group: 'Sustainable Development', part: "I", pages: 10, slots: 2, subtopics: ['CBD', 'CITES', 'Ramsar', 'COP Summits'] },
        ]
    };
}

function getIRChapters(): Record<string, PomodoroChapter[]> {
    return {
        'India & Neighbours': [
            { id: 1, topic: 'India-China Relations', group: 'India & Neighbours', part: "I", pages: 10, slots: 2, subtopics: ['LAC', 'Trade', 'BRI', 'Quad'] },
            { id: 2, topic: 'India-Pakistan Relations', group: 'India & Neighbours', part: "I", pages: 10, slots: 2, subtopics: ['Kashmir', 'Indus Water', 'Terrorism'] },
            { id: 3, topic: 'India-Nepal/Bangladesh/Sri Lanka', group: 'India & Neighbours', part: "I", pages: 10, slots: 2, subtopics: ['Neighbourhood First', 'BIMSTEC'] },
        ],
        'India & Global Powers': [
            { id: 4, topic: 'India-USA Relations', group: 'India & Global Powers', part: "I", pages: 10, slots: 2, subtopics: ['QUAD', 'iCET', 'Defence', 'Trade'] },
            { id: 5, topic: 'India-Russia Relations', group: 'India & Global Powers', part: "I", pages: 10, slots: 2, subtopics: ['S-400', 'Brahmos', 'Energy'] },
            { id: 6, topic: 'India-EU/Japan/Australia', group: 'India & Global Powers', part: "I", pages: 10, slots: 2, subtopics: ['FTAs', 'Strategic Partnerships'] },
        ],
        'International Institutions': [
            { id: 7, topic: 'United Nations', group: 'International Institutions', part: "I", pages: 10, slots: 2, subtopics: ['UNSC Reform', 'Peacekeeping', 'SDGs'] },
            { id: 8, topic: 'WTO & IMF', group: 'International Institutions', part: "I", pages: 10, slots: 2, subtopics: ['Dispute Resolution', 'SDR', 'Voting Rights'] },
            { id: 9, topic: 'Groupings', group: 'International Institutions', part: "I", pages: 10, slots: 2, subtopics: ['G20', 'BRICS', 'SCO', 'ASEAN'] },
        ],
        'Key Issues': [
            { id: 10, topic: 'Nuclear Proliferation', group: 'Key Issues', part: "I", pages: 10, slots: 2, subtopics: ['NPT', 'NSG', 'CTBT', 'India Doctrine'] },
            { id: 11, topic: 'Terrorism & Cybersecurity', group: 'Key Issues', part: "I", pages: 10, slots: 2, subtopics: ['FATF', 'UNSCR 1373', 'Budapest Convention'] },
            { id: 12, topic: 'Climate Diplomacy', group: 'Key Issues', part: "I", pages: 10, slots: 2, subtopics: ['CBDR', 'Climate Finance', 'ISA', 'CDRI'] },
        ]
    };
}

function getCSATChapters(): Record<string, PomodoroChapter[]> {
    return {
        'Comprehension & Communication': [
            { id: 1, topic: 'Reading Comprehension', group: 'Comprehension & Communication', part: "I", pages: 10, slots: 2, subtopics: ['Passage Analysis', 'Inference', 'Vocabulary'] },
            { id: 2, topic: 'Interpersonal Skills', group: 'Comprehension & Communication', part: "I", pages: 10, slots: 2, subtopics: ['Communication', 'Emotional Intelligence'] },
        ],
        'Logical & Analytical': [
            { id: 3, topic: 'Logical Reasoning', group: 'Logical & Analytical', part: "I", pages: 10, slots: 2, subtopics: ['Syllogisms', 'Statement-Conclusion', 'Assumption'] },
            { id: 4, topic: 'Analytical Ability', group: 'Logical & Analytical', part: "I", pages: 10, slots: 2, subtopics: ['Seating Arrangement', 'Blood Relations', 'Direction'] },
            { id: 5, topic: 'Decision Making', group: 'Logical & Analytical', part: "I", pages: 10, slots: 2, subtopics: ['Administrative Scenarios', 'Ethics in Decisions'] },
        ],
        'Quantitative': [
            { id: 6, topic: 'Basic Numeracy', group: 'Quantitative', part: "I", pages: 10, slots: 2, subtopics: ['Number System', 'Percentages', 'Profit/Loss', 'Averages'] },
            { id: 7, topic: 'Data Interpretation', group: 'Quantitative', part: "I", pages: 10, slots: 2, subtopics: ['Bar/Line/Pie Charts', 'Tables', 'Data Sufficiency'] },
        ]
    };
}
