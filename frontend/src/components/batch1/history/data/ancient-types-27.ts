// RS Sharma 27 Chapters - Ancient History
// For Batch 1.1 Revision Platform

export type PartId = 'I' | 'II' | 'III' | 'IV';
export type Priority = 'High' | 'Medium' | 'Low';

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

export interface AncientTopic27 {
    id: number;
    part: PartId;
    title: string;

    // Condensed Revision Data
    quickSummary: string;
    timelines?: TimelineEvent[];
    maps?: MapCoordinate[];
    handwrittenNotes?: HandwrittenNote[];

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
        description: 'Significance to Harappan Civilization',
        color: 'stone',
        range: [1, 10]
    },
    {
        id: 'II',
        title: 'Vedic Age & Emergence of States',
        description: 'Aryan Culture to Age of Buddha',
        color: 'amber',
        range: [11, 17]
    },
    {
        id: 'III',
        title: 'Empires & Contacts',
        description: 'Mauryas to Satavahanas',
        color: 'emerald',
        range: [18, 20]
    },
    {
        id: 'IV',
        title: 'Golden Age & Legacy',
        description: 'Guptas to Scientific Legacy',
        color: 'purple',
        range: [21, 27]
    }
];

export const ANCIENT_TOPICS: { id: number; title: string; part: PartId }[] = [
    // Part I (1-10)
    { id: 1, title: 'The Significance of Ancient Indian History', part: 'I' },
    { id: 2, title: 'Modern Historians of Ancient India', part: 'I' },
    { id: 3, title: 'Nature of Sources and Historical Construction', part: 'I' },
    { id: 4, title: 'Geographical Setting', part: 'I' },
    { id: 5, title: 'Ecology and Environment', part: 'I' },
    { id: 6, title: 'The Linguistic Background', part: 'I' },
    { id: 7, title: 'Human Evolution: The Old Stone Age', part: 'I' },
    { id: 8, title: 'The Neolithic Age: First Food Producers', part: 'I' },
    { id: 9, title: 'Chalcolithic Cultures', part: 'I' },
    { id: 10, title: 'Harappan Culture: Bronze Age Urbanization', part: 'I' },

    // Part II (11-17)
    { id: 11, title: 'Identity of Aryan Culture', part: 'II' },
    { id: 12, title: 'The Age of the Rig Veda', part: 'II' },
    { id: 13, title: 'The Later Vedic Phase', part: 'II' },
    { id: 14, title: 'Jainism and Buddhism', part: 'II' },
    { id: 15, title: 'Territorial States and the Rise of Magadha', part: 'II' },
    { id: 16, title: 'Iranian and Macedonian Invasions', part: 'II' },
    { id: 17, title: 'State Structure and Varna System (Age of Buddha)', part: 'II' },

    // Part III (18-20)
    { id: 18, title: 'The Maurya Empire', part: 'III' },
    { id: 19, title: 'Central Asian Contacts and Their Results', part: 'III' },
    { id: 20, title: 'The Age of the Satavahanas', part: 'III' },

    // Part IV (21-27)
    { id: 21, title: 'Spread of Civilization in Eastern India', part: 'IV' },
    { id: 22, title: 'Harsha and His Times', part: 'IV' },
    { id: 23, title: 'Formation of New States in the Peninsula', part: 'IV' },
    { id: 24, title: 'India\'s Cultural Contacts with the Asian Countries', part: 'IV' },
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
