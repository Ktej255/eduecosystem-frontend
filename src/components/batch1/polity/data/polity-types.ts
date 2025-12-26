// UPSC Polity Module - Type Definitions

export type ModuleId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
export type Priority = 'High' | 'Medium' | 'Low';
export type PointerCategory = 'Article' | 'Amendment' | 'Case' | 'Year' | 'Commission' | 'Act';

export interface Article {
    number: string;
    title: string;
    description: string;
}

export interface Concept {
    term: string;
    definition: string;
    example?: string;
}

export interface CurrentAffairsItem {
    id: string;
    headline: string;
    date: string; // Format: "Month YYYY" or specific date
    source: string;
    teachingHook: string;
    relatedArticles?: string[];
    caseReference?: string;
}

export interface PrelimsPointer {
    fact: string;
    category: PointerCategory;
    highlight?: boolean; // For most important facts
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

export interface PolityTopic {
    id: number;
    module: ModuleId;
    title: string;
    syllabusTag: string;

    // Static Content
    staticFocus: string;
    coreArticles: Article[];
    keyConcepts: Concept[];

    // Current Affairs
    currentAffairs: CurrentAffairsItem[];

    // Prelims Pointers
    prelimsPointers: PrelimsPointer[];

    // Optional
    comparisonTable?: ComparisonTable;

    // Metadata
    priority: Priority;
    lastUpdated: string;
}

export interface PolityModule {
    id: ModuleId;
    title: string;
    description: string;
    color: string;
    topicRange: [number, number]; // [start, end]
    icon: string;
}

// Module definitions
export const POLITY_MODULES: PolityModule[] = [
    { id: 'A', title: 'Constitutional Framework', description: 'The Base', color: 'blue', topicRange: [1, 11], icon: '📜' },
    { id: 'B', title: 'System of Government', description: 'The Mechanics', color: 'indigo', topicRange: [12, 16], icon: '⚙️' },
    { id: 'C', title: 'The Executive', description: 'Union & State', color: 'purple', topicRange: [17, 20], icon: '🏛️' },
    { id: 'D', title: 'The Legislature', description: 'Parliament & State', color: 'violet', topicRange: [21, 26], icon: '🏦' },
    { id: 'E', title: 'The Judiciary', description: 'Courts & Doctrines', color: 'rose', topicRange: [27, 29], icon: '⚖️' },
    { id: 'F', title: 'Grassroots Democracy', description: 'Local Govt', color: 'green', topicRange: [30, 31], icon: '🏘️' },
    { id: 'G', title: 'Constitutional Bodies', description: 'Watchdogs', color: 'amber', topicRange: [32, 38], icon: '🔰' },
    { id: 'H', title: 'Special Areas', description: 'Tribunals & Tribes', color: 'orange', topicRange: [39, 40], icon: '🗺️' },
    { id: 'I', title: 'Governance', description: 'The 360° Shield', color: 'teal', topicRange: [41, 50], icon: '🛡️' },
];

// Get module by ID
export function getModuleById(moduleId: ModuleId): PolityModule | undefined {
    return POLITY_MODULES.find(m => m.id === moduleId);
}

// Get module color classes
export function getModuleColors(color: string) {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
        blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500', light: 'bg-blue-50' },
        indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-500', light: 'bg-indigo-50' },
        purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500', light: 'bg-purple-50' },
        violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-500', light: 'bg-violet-50' },
        rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-500', light: 'bg-rose-50' },
        green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500', light: 'bg-green-50' },
        amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-500', light: 'bg-amber-50' },
        orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500', light: 'bg-orange-50' },
        teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-500', light: 'bg-teal-50' },
    };
    return colors[color] || colors.blue;
}
