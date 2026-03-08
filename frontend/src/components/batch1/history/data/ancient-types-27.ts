// RS Sharma - India's Ancient Past (27 Chapters)
// Exact chapter list as provided by the user
// For Batch 1.1 Revision Platform

export type PartId = 'I' | 'II' | 'III' | 'IV';
export type Priority = 'High' | 'Medium' | 'Low';
export type SectionStatus = 'not-started' | 'in-progress' | 'completed' | 'platinum';

export interface TimelineEvent {
    year: string;
    event: string;
    description: string;
}

export interface MapCoordinate {
    name: string;
    x: number; // percentage from left
    y: number; // percentage from top
    description?: string;
}

export interface HandwrittenNote {
    title: string;
    content: string;
    style: "cursive" | "marker" | "sketch";
}

export interface Flashcard {
    id: string;
    front: string;
    back: string;
    tags: string[];
}

export interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    difficulty: 'easy' | 'moderate' | 'tough';
    tags?: string[];
    currentAffair?: {
        headline: string;
        date: string;
        source: string;
        summary: string;
    };
}

export interface SequenceQuestion {
    id: string;
    question: string;
    items: { id: string; content: string }[];
    correctOrder: string[]; // Array of IDs in correct sequence
    explanation: string;
    difficulty: 'easy' | 'moderate' | 'tough';
}

export interface SpacedRepetitionData {
    lastRevised: string; // ISO Date
    nextRevision: string; // ISO Date
    interval: number; // in days
    streak: number;
}

export interface ChapterProgress {
    readSection: SectionStatus;
    flashcards: SectionStatus;
    drill: SectionStatus;
    l1: SectionStatus;
    l2: SectionStatus;
    l3: SectionStatus;
    spacing?: SpacedRepetitionData;
}

export interface AncientTopic27 {
    id: number;
    part: PartId;
    title: string;

    // Condensed Revision Data
    quickSummary: string;
    timelines?: TimelineEvent[];
    maps?: MapCoordinate[];
    handwrittenNotes?: HandwrittenNote[];

    // Study Assets
    flashcards?: Flashcard[];
    drillMcqs?: MCQ[];   // 60-question composite drill
    l1Mcqs?: MCQ[];      // Foundation - book recall only
    l2Mcqs?: MCQ[];      // UPSC Moderate
    l3Mcqs?: MCQ[];      // UPSC Tough + Current Affairs
    sequenceDrills?: SequenceQuestion[]; // Chronological Ordering Drills
    currentAffairsNews?: {
        title: string;
        date: string;
        link?: string;
        summary: string;
    }[];

    // Metadata
    priority: Priority;
}

export interface AncientPart {
    id: PartId;
    title: string;
    description: string;
    color: string;
    range: [number, number];
}

export const ANCIENT_PARTS: AncientPart[] = [
    {
        id: 'I',
        title: 'Foundations & Early Cultures',
        description: 'History, Geography & Stone Age to Harappan Civilization',
        color: 'stone',
        range: [1, 6]
    },
    {
        id: 'II',
        title: 'Vedic Age & Rise of States',
        description: 'Aryans, Vedic Phase, Buddhism & Magadhan Empire',
        color: 'amber',
        range: [7, 14]
    },
    {
        id: 'III',
        title: 'Empires, Trade & Southern India',
        description: 'Central Asia, Satavahanas, Deep South & Post-Maurya Towns',
        color: 'emerald',
        range: [15, 22]
    },
    {
        id: 'IV',
        title: 'Golden Age & Transition',
        description: 'Regional Kingdoms, Cultural Legacy & Medieval Transition',
        color: 'purple',
        range: [23, 27]
    }
];

export const ANCIENT_TOPICS: { id: number; title: string; part: PartId }[] = [
    // Part I: Foundations & Early Cultures (1-6)
    { id: 1, title: 'The Importance of Ancient Indian History', part: 'I' },
    { id: 2, title: 'The Construction of Ancient Indian History', part: 'I' },
    { id: 3, title: 'The Geographical Setting', part: 'I' },
    { id: 4, title: 'The Stone Age', part: 'I' },
    { id: 5, title: 'The Stone-Copper Phase', part: 'I' },
    { id: 6, title: 'The Harappan Civilization', part: 'I' },

    // Part II: Vedic Age & Rise of States (7-14)
    { id: 7, title: 'Advent of the Aryans and the Age of the Rig Veda', part: 'II' },
    { id: 8, title: 'The Later Vedic Phase: Transition to State and Social Formation', part: 'II' },
    { id: 9, title: 'Jainism and Buddhism', part: 'II' },
    { id: 10, title: 'Territorial States and the First Magadhan Empire', part: 'II' },
    { id: 11, title: 'Iranian and Macedonian Invasions', part: 'II' },
    { id: 12, title: 'State and Varna Society in the Age of the Buddha', part: 'II' },
    { id: 13, title: 'The Age of the Mauryas', part: 'II' },
    { id: 14, title: 'Significance of the Maurya Rule', part: 'II' },

    // Part III: Empires, Trade & Southern India (15-22)
    { id: 15, title: 'Central Asian Contacts and Their Results', part: 'III' },
    { id: 16, title: 'The Age of the Satavahanas', part: 'III' },
    { id: 17, title: 'The Dawn of History in the Deep South', part: 'III' },
    { id: 18, title: 'Crafts, Trade and Towns in the Post-Maurya Age', part: 'III' },
    { id: 19, title: 'The Rise and Growth of the Gupta Empire', part: 'III' },
    { id: 20, title: 'Life in the Gupta Age', part: 'III' },
    { id: 21, title: 'Spread of Civilization in Eastern India', part: 'III' },
    { id: 22, title: 'Harsha and His Times', part: 'III' },

    // Part IV: Golden Age & Transition (23-27)
    { id: 23, title: 'Formation of New States and Rural Expansion in the Peninsula', part: 'IV' },
    { id: 24, title: "India's Cultural Contacts with the Asian Countries", part: 'IV' },
    { id: 25, title: 'Transformation of the Ancient Phase', part: 'IV' },
    { id: 26, title: 'Sequence of Social Changes', part: 'IV' },
    { id: 27, title: 'Legacy in Science and Civilization', part: 'IV' }
];

export function getAncientPartById(partId: PartId): AncientPart | undefined {
    return ANCIENT_PARTS.find(p => p.id === partId);
}

export function getAncientTopicById(topicId: number) {
    return ANCIENT_TOPICS.find(t => t.id === topicId);
}

// Status colors for the visited-state UI pattern
export const SECTION_STATUS_COLORS: Record<SectionStatus, { bg: string; text: string; border: string }> = {
    'not-started': { bg: 'bg-zinc-800/50', text: 'text-zinc-400', border: 'border-zinc-700' },
    'in-progress': { bg: 'bg-amber-900/30', text: 'text-amber-400', border: 'border-amber-600' },
    'completed': { bg: 'bg-emerald-900/30', text: 'text-emerald-400', border: 'border-emerald-600' },
    'platinum': { bg: 'bg-zinc-100/5', text: 'text-zinc-100', border: 'border-zinc-400' },
};
