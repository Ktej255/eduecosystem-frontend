// UPSC Polity Module - Type Definitions

export type ModuleId = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII' | 'IX' | 'X' | 'XI' | 'XII' | 'XIII';
export type PartId = ModuleId;
export type Priority = 'High' | 'Medium' | 'Low';
export type PointerCategory = 'Article' | 'Amendment' | 'Case' | 'Year' | 'Commission' | 'Act' | 'Person' | 'Body' | 'Fact' | 'Committee';

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

    // Study Schedule Data
    pageCount?: number;
    studySlots?: number;

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

// Module definitions (based on Laxmikanth Parts)
export const POLITY_MODULES: PolityModule[] = [
    { id: 'I', title: 'Constitutional Framework', description: 'The Base', color: 'blue', topicRange: [1, 12], icon: '📜' },
    { id: 'II', title: 'System of Government', description: 'The Mechanics', color: 'indigo', topicRange: [13, 17], icon: '⚙️' },
    { id: 'III', title: 'Central Government', description: 'The Core', color: 'purple', topicRange: [18, 30], icon: '🏛️' },
    { id: 'IV', title: 'State Government', description: 'Regional Governance', color: 'violet', topicRange: [31, 38], icon: '🏦' },
    { id: 'V', title: 'Local Government', description: 'Grassroots Democracy', color: 'green', topicRange: [39, 40], icon: '🏘️' },
    { id: 'VI', title: 'UTs and Special Areas', description: 'Specific Regions', color: 'rose', topicRange: [41, 42], icon: '🗺️' },
    { id: 'VII', title: 'Constitutional Bodies', description: 'Watchdogs', color: 'amber', topicRange: [43, 54], icon: '🔰' },
    { id: 'VIII', title: 'Non-Constitutional Bodies', description: 'Statutory/Executive', color: 'orange', topicRange: [56, 72], icon: '🛡️' },
    { id: 'IX', title: 'Other Dimensions', description: 'Specific Aspects', color: 'teal', topicRange: [73, 78], icon: '📦' },
    { id: 'X', title: 'Political Dynamics', description: 'Elections & Parties', color: 'pink', topicRange: [79, 89], icon: '🗳️' },
    { id: 'XI', title: 'Working of the Constitution', description: 'Latest Updates', color: 'cyan', topicRange: [90, 90], icon: '🔄' },
    { id: 'XII', title: 'Judgements & Doctrines', description: 'Key Rulings', color: 'red', topicRange: [91, 94], icon: '⚖️' },
    { id: 'XIII', title: 'Comparison of Constitutions', description: 'Global Context', color: 'slate', topicRange: [95, 95], icon: '🌍' },
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
        pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-500', light: 'bg-pink-50' },
        cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-500', light: 'bg-cyan-50' },
    };
    return colors[color] || colors.blue;
}
