// Day 8 Flashcards - Jan 19 (Monday)
// Topic: PARLIAMENT (Chapter 22) - Part 1
// Organization, Composition, System of Elections, Duration

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY8_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CHAPTER 22: PARLIAMENT (Organization)
    // ==========================================

    // 22.1 Organization
    {
        id: 'd8-22-1-1',
        front: 'The Parliament of India consists of ____, ____ and ____.',
        back: 'The President, the Council of States (Rajya Sabha), and the House of the People (Lok Sabha).',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd8-22-1-2',
        front: 'Why is the President an integral part of Parliament?',
        back: 'Because a bill passed by both Houses cannot become law without his assent. He also summons/prorogues the Houses.',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'concept'
    },

    // 22.1 Composition - Rajya Sabha
    {
        id: 'd8-22-1-3',
        front: 'What is the maximum strength of Rajya Sabha?',
        back: '250 members (238 representing States/UTs + 12 Nominated).',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'fact'
    },
    {
        id: 'd8-22-1-4',
        front: 'Which Schedule deals with the allocation of seats in Rajya Sabha?',
        back: 'Fourth Schedule.',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'fact'
    },
    {
        id: 'd8-22-1-5',
        front: 'How are representatives of States elected to Rajya Sabha?',
        back: 'By the elected members of the State Legislative Assemblies via Proportional Representation with Single Transferable Vote (System of Indirect Election).',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'concept',
        highlight: true
    },

    // 22.1 Composition - Lok Sabha
    {
        id: 'd8-22-1-6',
        front: 'What is the maximum strength of Lok Sabha?',
        back: '552 (Originally). Presently 550 (after 104th Amendment removed Anglo-Indians).',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'fact'
    },
    {
        id: 'd8-22-1-7',
        front: 'Which Constitutional Amendmentfroze the allocation of seats in Lok Sabha until 2026?',
        back: '84th Amendment Act, 2001 (based on 1971 census).',
        source: 'Parliament',
        subtopicId: '22.1',
        category: 'fact'
    },

    // 22.2 Duration
    {
        id: 'd8-22-2-1',
        front: 'Is Rajya Sabha subject to dissolution?',
        back: 'No. It is a continuing chamber. 1/3rd of its members retire every second year.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd8-22-2-2',
        front: 'What is the normal term of Lok Sabha?',
        back: '5 years from the date of its first meeting.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    },
    {
        id: 'd8-22-2-3',
        front: 'Can the term of Lok Sabha be extended?',
        back: 'Yes, during a National Emergency, by a law of Parliament for one year at a time.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'concept'
    },

    // 22.2 Qualifications
    {
        id: 'd8-22-2-4',
        front: 'What is the minimum age for membership of Lok Sabha and Rajya Sabha?',
        back: 'Lok Sabha: 25 years.\nRajya Sabha: 30 years.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    },
    {
        id: 'd8-22-2-5',
        front: 'Under the Representation of People Act (1951), must a candidate be a registered elector in the particular constituency?',
        back: 'No. He must be a registered elector in ANY parliamentary constituency in the country (for both LS and RS).',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    },

    // 22.2 Disqualifications
    {
        id: 'd8-22-2-6',
        front: 'Who decides on questions of disqualification (other than defection)?',
        back: 'The President, after obtaining the opinion of the Election Commission.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd8-22-2-7',
        front: 'Who decides on questions of disqualification on ground of defection (10th Schedule)?',
        back: 'The Chairman (RS) or Speaker (LS). This decision is subject to judicial review (Kihoto Hollohan case).',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    },

    // 22.2 Vacating Seats
    {
        id: 'd8-22-2-8',
        front: 'If a person is elected to both Houses of Parliament, he must intimate within ____ days.',
        back: '10 days. If not, his seat in Rajya Sabha becomes vacant.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    },
    {
        id: 'd8-22-2-9',
        front: 'A member seat becomes vacant if he is absent without permission for ____ days.',
        back: '60 days.',
        source: 'Parliament',
        subtopicId: '22.2',
        category: 'fact'
    }
];

export default DAY8_FLASHCARDS;
