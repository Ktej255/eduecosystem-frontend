// Day 5 Flashcards - Jan 16
// Topic: The "Mirror Executives"
// Governor (Ch 31), PM (Ch 20), CM (Ch 32), Central Council (Ch 21), State Council (Ch 33)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY5_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CHAPTER 31: GOVERNOR
    // ==========================================

    // 31.1 Appointment & Conditions
    {
        id: 'd5-31-1-1',
        front: 'The Governor holds office during the ____ of the President.',
        back: 'Pleasure. (He has no fixed security of tenure, though the usual term is 5 years).',
        source: 'Governor',
        subtopicId: '31.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd5-31-1-2',
        front: 'Does the Constitution lay down any grounds for the removal of a Governor?',
        back: 'No. The Constitution does not specify any grounds ensuring his security of tenure.',
        source: 'Governor',
        subtopicId: '31.1',
        category: 'concept'
    },

    // 31.2 Powers & Functions
    {
        id: 'd5-31-2-1',
        front: 'The Governor can reserve a bill for the President\'s consideration. Is this discretionary?',
        back: 'Yes, it is a constitutional discretion of the Governor (Article 200).',
        source: 'Governor',
        subtopicId: '31.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd5-31-2-2',
        front: 'What is the main difference between the Pardoning Power of President (Art 72) and Governor (Art 161)?',
        back: '1. Governor CANNOT pardon death sentences (only suspend/remit/commute).\n2. Governor CANNOT pardon Court Martial sentences.',
        source: 'Governor',
        subtopicId: '31.5',
        category: 'concept'
    },

    // ==========================================
    // CHAPTER 20 & 32: PM & CM
    // ==========================================

    // 20.3 Relationship with President
    {
        id: 'd5-20-3-1',
        front: 'Which Article places a duty on the PM to communicate all decisions of the Council of Ministers to the President?',
        back: 'Article 78. It is the Prime Minister\'s duty to keep the President informed.',
        source: 'Prime Minister',
        subtopicId: '20.3',
        category: 'article'
    },

    // 32.1 Appointment
    {
        id: 'd5-32-1-1',
        front: 'According to the Constitution, the Chief Minister is appointed by ____.',
        back: 'The Governor (Article 164).',
        source: 'Chief Minister',
        subtopicId: '32.1',
        category: 'fact'
    },

    // 20.2 Role
    {
        id: 'd5-20-2-1',
        front: 'Who is the Chairman of the National Development Council (NDC)?',
        back: 'The Prime Minister.',
        source: 'Prime Minister',
        subtopicId: '20.2',
        category: 'fact'
    },

    // ==========================================
    // CHAPTER 21 & 33: COUNCILS OF MINISTERS
    // ==========================================

    // 21.2 Collective Responsibility
    {
        id: 'd5-21-2-1',
        front: 'Article 75 states that the Council of Ministers is collectively responsible to ____.',
        back: 'The Lok Sabha (House of the People). Not the Parliament, not the President.',
        source: 'Central Council of Ministers',
        subtopicId: '21.2',
        category: 'article',
        highlight: true
    },
    {
        id: 'd5-21-2-2',
        front: 'What happens if the Lok Sabha passes a No-Confidence Motion against the Council of Ministers?',
        back: 'All ministers (including those from Rajya Sabha) have to resign.',
        source: 'Central Council of Ministers',
        subtopicId: '21.2',
        category: 'concept'
    },

    // 21.1 Composition
    {
        id: 'd5-21-1-1',
        front: 'What is the maximum size of the Council of Ministers allowed by the 91st Amendment Act, 2003?',
        back: '15% of the total strength of the Lok Sabha.',
        source: 'Central Council of Ministers',
        subtopicId: '21.1',
        category: 'fact',
        highlight: true
    },

    // 33.2 State Collective Responsibility
    {
        id: 'd5-33-2-1',
        front: 'For States, the minimum strength of the Council of Ministers (including CM) should not be less than ____.',
        back: '12.',
        source: 'State Council of Ministers',
        subtopicId: '33.1',
        category: 'fact'
    },

    // 21.3 Cabinet Committees
    {
        id: 'd5-21-3-1',
        front: 'Are Cabinet Committees mentioned in the Constitution?',
        back: 'No, they are extra-constitutional bodies established by the Rules of Business.',
        source: 'Central Council of Ministers',
        subtopicId: '21.3',
        category: 'concept'
    },
    {
        id: 'd5-21-3-2',
        front: 'Who usually heads the Political Affairs Committee (often called the Super-Cabinet)?',
        back: 'The Prime Minister.',
        source: 'Central Council of Ministers',
        subtopicId: '21.3',
        category: 'fact'
    },

    // Comparative
    {
        id: 'd5-comp-1',
        front: 'Does the Governor have more discretionary powers than the President?',
        back: 'Yes. The Constitution explicitly mentions "discretion" for Governor (Art 163), but not for President.',
        source: 'Governor',
        subtopicId: '31.6',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd5-comp-2',
        front: 'Is the advice of the State Council of Ministers binding on the Governor?',
        back: 'Yes, except where he acts in his discretion. (Though the 42nd/44th Amendments made it explicit for President, for Governor it is implied by the Parliamentary system).',
        source: 'Governor',
        subtopicId: '32.3',
        category: 'concept'
    }
];

export default DAY5_FLASHCARDS;
