// Day 30: OTHER CONSTITUTIONAL DIMENSIONS (PART 2)
// Topics: Public Services (Ch 65) & Rights and Liabilities of the Government (Ch 66)
// Date: Feb 10 (Tuesday)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY30_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // PUBLIC SERVICES (Ch 65)
    // ==========================================
    {
        id: 'd30-serv-1',
        front: 'Which Part of the Constitution deals with Services under the Union and States?',
        back: 'Part XIV (Articles 308 to 323).',
        source: 'Services',
        subtopicId: '65.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd30-serv-2',
        front: 'Who is the appointing authority for All India Services?',
        back: 'President of India.',
        source: 'Services',
        subtopicId: '65.1',
        category: 'fact'
    },
    {
        id: 'd30-serv-3',
        front: 'Explain the "Doctrine of Pleasure" (Article 310).',
        back: 'Civil servants hold office during the pleasure of the President (Union) or Governor (State).',
        source: 'Services',
        subtopicId: '65.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd30-serv-4',
        front: 'Safeguards under Article 311 apply to?',
        back: 'Civil servants (Not inclusive of defense personnel). Protection against dismissal/removal by subordinate authority.',
        source: 'Services',
        subtopicId: '65.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd30-serv-5',
        front: 'New All India Services can be created by Parliament based on resolution by?',
        back: 'Rajya Sabha (Article 312).',
        source: 'Services',
        subtopicId: '65.1',
        category: 'fact',
        highlight: true
    },

    // ==========================================
    // RIGHTS AND LIABILITIES (Ch 66)
    // ==========================================
    {
        id: 'd30-liabl-1',
        front: 'Article 300 deals with?',
        back: 'Suits and proceedings by or against the Government of India or State Governments.',
        source: 'Liability',
        subtopicId: '66.1',
        category: 'fact'
    },
    {
        id: 'd30-liabl-2',
        front: 'Can the Government be sued for torts committed by its servants?',
        back: 'Yes, for non-sovereign functions. Generally immune for sovereign functions (though courts are narrowing this distinction).',
        source: 'Liability',
        subtopicId: '66.1',
        category: 'concept'
    },
    {
        id: 'd30-liabl-3',
        front: 'Is the property of the Union exempted from State taxation?',
        back: 'Yes, under Article 285.',
        source: 'Rights',
        subtopicId: '66.2',
        category: 'fact'
    },
    {
        id: 'd30-liabl-4',
        front: 'Is the property of a State exempted from Union taxation?',
        back: 'Yes, under Article 289 (except if Parliament provides otherwise for trade/business).',
        source: 'Rights',
        subtopicId: '66.2',
        category: 'fact'
    }
];

export default DAY30_FLASHCARDS;
