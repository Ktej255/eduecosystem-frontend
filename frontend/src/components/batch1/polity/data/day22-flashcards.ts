// Day 22: CONSTITUTIONAL BODIES (PART 3)
// Topics: Attorney General (Ch 53), Advocate General (Ch 54)
// Date: Feb 2 (Monday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY22_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // ATTORNEY GENERAL OF INDIA (Ch 53) - Article 76
    // ==========================================
    {
        id: 'd22-53-1',
        front: 'Who is the highest law officer in the country?',
        back: 'Attorney General of India (Article 76).',
        source: 'Attorney General',
        subtopicId: '38.3',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd22-53-2',
        front: 'Who appoints the Attorney General of India?',
        back: 'The President (on advice of Government).',
        source: 'Attorney General',
        subtopicId: '38.3',
        category: 'fact'
    },
    {
        id: 'd22-53-3',
        front: 'What are the qualifications to be appointed as Attorney General?',
        back: 'Must be qualified to be appointed a Judge of the Supreme Court.',
        source: 'Attorney General',
        subtopicId: '38.3',
        category: 'concept'
    },
    {
        id: 'd22-53-4',
        front: 'Does the AG have the right to speak in Parliament?',
        back: 'Yes, he has the right to speak and take part in proceedings of both Houses (or joint sitting) but WITHOUT a right to vote.',
        source: 'Attorney General',
        subtopicId: '38.3',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd22-53-5',
        front: 'Is the AG a full-time counsel for the Government?',
        back: 'No. He is not a government servant and is not debarred from private legal practice.',
        source: 'Attorney General',
        subtopicId: '38.3',
        category: 'concept'
    },

    // ==========================================
    // ADVOCATE GENERAL OF STATE (Ch 54) - Article 165
    // ==========================================
    {
        id: 'd22-54-1',
        front: 'Who appoints the Advocate General of the State?',
        back: 'The Governor.',
        source: 'Advocate General',
        subtopicId: '38.3',
        category: 'fact'
    },
    {
        id: 'd22-54-2',
        front: 'What are the qualifications for Advocate General?',
        back: 'Must be qualified to be appointed a Judge of a High Court.',
        source: 'Advocate General',
        subtopicId: '38.3',
        category: 'concept'
    },
    {
        id: 'd22-54-3',
        front: 'Does Advocate General have right of audience in courts?',
        back: 'Yes, he has the right of audience in any court in the State.',
        source: 'Advocate General',
        subtopicId: '38.3',
        category: 'fact'
    },
    {
        id: 'd22-54-4',
        front: 'Remuneration of Advocate General is determined by?',
        back: 'The Governor (Not by Constitution).',
        source: 'Advocate General',
        subtopicId: '38.3',
        category: 'fact',
        highlight: true
    },

    // ==========================================
    // SOLICITOR GENERAL (Extra Concept)
    // ==========================================
    {
        id: 'd22-extra-1',
        front: 'Is the Solicitor General of India a Constitutional post?',
        back: 'No. It is a statutory/administrative post to assist the AG. (Article 76 does not mention SG).',
        source: 'Solicitor General',
        subtopicId: '38.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd22-link-1',
        front: 'Comparison: Tenure of AG vs Advocate General?',
        back: 'Both hold office during the "pleasure" of the appointing authority (President/Governor). No fixed tenure.',
        source: 'Comparison',
        subtopicId: '38.3',
        category: 'concept' // Changed from 'comparison' to satisfy lint rules if strict
    }
];

export default DAY22_FLASHCARDS;
