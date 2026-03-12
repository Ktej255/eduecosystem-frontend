// Day 26: NON-CONSTITUTIONAL BODIES (PART 4)
// Topics: Lokpal and Lokayuktas (Ch 62)
// Date: Feb 6 (Friday)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY26_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // LOKPAL AND LOKAYUKTAS (Ch 62)
    // ==========================================
    {
        id: 'd26-lok-1',
        front: 'The Lokpal and Lokayuktas Act was passed in which year?',
        back: '2013 (Came into force in 2014).',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd26-lok-2',
        front: 'Composition of Lokpal?',
        back: 'Chairperson + Maximum 8 Members (50% Judicial Members).',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact'
    },
    {
        id: 'd26-lok-3',
        front: 'Who appoints the Chairperson and Members of Lokpal?',
        back: 'President, on recommendation of a Selection Committee.',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact'
    },
    {
        id: 'd26-lok-4',
        front: 'Composition of Lokpal Selection Committee?',
        back: 'PM (Chair) + Speaker (LS) + Leader of Opposition (LS) + CJI (or Judge nominated by him) + Eminent Jurist (nominated by President).',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd26-lok-5',
        front: 'Does Lokpal jurisdiction include the Prime Minister?',
        back: 'Yes, but with subject matter exclusions (International relations, External security, Public order, Atomic energy, Space).',
        source: 'Lokpal',
        subtopicId: '62.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd26-lok-6',
        front: 'Reservation in Lokpal membership?',
        back: 'Minimum 50% members must be from SC/ST/OBC/Minorities/Women.',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact'
    },

    // ==========================================
    // LOKAYUKTAS (States)
    // ==========================================
    {
        id: 'd26-lky-1',
        front: 'Which was the first state to establish Lokayukta?',
        back: 'Maharashtra (1971). (Odisha passed Act first in 1970 but Maharashtra established it first).',
        source: 'Lokayukta',
        subtopicId: '62.3',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd26-lky-2',
        front: 'Are Chief Ministers included in Lokayukta jurisdiction?',
        back: 'Varies by State. Some states include CM (e.g., HP, AP, MP). Others exclude (e.g., Maharashtra, Rajasthan).',
        source: 'Lokayukta',
        subtopicId: '62.3',
        category: 'concept'
    },

    // ==========================================
    // LINKAGES
    // ==========================================
    {
        id: 'd26-link-1',
        front: 'Term of Lokpal Chairperson?',
        back: '5 years or 70 years of age. (Compare with CVC - 4 years/65 age, NHRC - 3 years/70 age).',
        source: 'Comparison',
        subtopicId: '62.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd26-link-2',
        front: 'First Lokpal of India?',
        back: 'Pinaki Chandra Ghose (appointed in 2019).',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact'
    }
];

export default DAY26_FLASHCARDS;
