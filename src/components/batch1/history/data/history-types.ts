// UPSC History Module - Type Definitions
// 10-Day Smart History for UPSC Prelims 2026

export type ModuleId = 'A' | 'B' | 'C' | 'D';
export type Priority = 'High' | 'Medium' | 'Low';
export type PointerCategory = 'Site' | 'Term' | 'Year' | 'Act' | 'Treaty' | 'Person' | 'Movement' | 'Dynasty';

export interface HistoricalFigure {
    name: string;
    title: string;
    period?: string;
    significance: string;
}

export interface Concept {
    term: string;
    definition: string;
    example?: string;
}

export interface CurrentAffairsItem {
    id: string;
    headline: string;
    date: string;
    source: string;
    teachingHook: string;
    relatedTopics?: string[];
    iscentenary?: boolean;
}

export interface PrelimsPointer {
    fact: string;
    category: PointerCategory;
    highlight?: boolean;
}

export interface ComparisonRow {
    aspect: string;
    columnA: string;
    columnB: string;
}

export interface ComparisonTable {
    title: string;
    columnAHeader: string;
    columnBHeader: string;
    rows: ComparisonRow[];
}

export interface TimelineEvent {
    year: string;
    event: string;
    significance?: string;
}

export interface HistoryTopic {
    id: number;
    day: number;
    module: ModuleId;
    title: string;
    syllabusTag: string;

    // Static Content
    staticFocus: string;
    keyConcepts: Concept[];
    keyFigures?: HistoricalFigure[];
    timeline?: TimelineEvent[];

    // Current Affairs
    currentAffairs: CurrentAffairsItem[];

    // Prelims Pointers
    prelimsPointers: PrelimsPointer[];

    // Optional
    comparisonTable?: ComparisonTable;
    pyqAlert?: string;

    // Metadata
    priority: Priority;
    lastUpdated: string;
}

export interface HistoryModule {
    id: ModuleId;
    title: string;
    description: string;
    color: string;
    dayRange: [number, number];
    icon: string;
    targetQuestions: string;
}

// Module definitions - 4 Modules covering 10 Days
export const HISTORY_MODULES: HistoryModule[] = [
    {
        id: 'A',
        title: 'Ancient India',
        description: 'IVC, Vedic Age, Buddhism, Jainism, Mauryas, Guptas',
        color: 'amber',
        dayRange: [1, 2],
        icon: '🏛️',
        targetQuestions: '6-8 Questions'
    },
    {
        id: 'B',
        title: 'Medieval India',
        description: 'Cholas, Sultanate, Mughals, Marathas, Vijayanagara',
        color: 'orange',
        dayRange: [3, 4],
        icon: '⚔️',
        targetQuestions: '3-5 Questions'
    },
    {
        id: 'C',
        title: 'Modern India',
        description: '1857-1947: Reform, Revolt, Freedom Struggle',
        color: 'rose',
        dayRange: [5, 8],
        icon: '🇮🇳',
        targetQuestions: '8-10 Questions'
    },
    {
        id: 'D',
        title: 'Art & Culture',
        description: 'Architecture, Sculpture, Dances, UNESCO Sites',
        color: 'purple',
        dayRange: [9, 10],
        icon: '🎭',
        targetQuestions: '4-6 Questions'
    },
];

// Get module by ID
export function getModuleById(moduleId: ModuleId): HistoryModule | undefined {
    return HISTORY_MODULES.find(m => m.id === moduleId);
}

// Get module color classes
export function getModuleColors(color: string) {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
        amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-500', light: 'bg-amber-50' },
        orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500', light: 'bg-orange-50' },
        rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-500', light: 'bg-rose-50' },
        purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500', light: 'bg-purple-50' },
        blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500', light: 'bg-blue-50' },
        green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500', light: 'bg-green-50' },
        teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-500', light: 'bg-teal-50' },
    };
    return colors[color] || colors.amber;
}
