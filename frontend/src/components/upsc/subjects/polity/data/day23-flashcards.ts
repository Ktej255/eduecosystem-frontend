// Day 23: NON-CONSTITUTIONAL BODIES (PART 1)
// Topics: NHRC (Ch 56) & SHRC (Ch 57)
// Date: Feb 3 (Tuesday)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY23_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // NATIONAL HUMAN RIGHTS COMMISSION (NHRC)
    // ==========================================
    {
        id: 'd23-nhrc-1',
        front: 'The NHRC is a constitutional body or a statutory body?',
        back: 'Statutory Body. Established in 1993 under the Protection of Human Rights Act, 1993 (Amended in 2006 & 2019).',
        source: 'NHRC',
        subtopicId: '56.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd23-nhrc-2',
        front: 'Who appoints the Chairman and members of NHRC?',
        back: 'President, on the recommendations of a 6-member committee.',
        source: 'NHRC',
        subtopicId: '56.1',
        category: 'fact'
    },
    {
        id: 'd23-nhrc-3',
        front: 'Composition of the NHRC Selection Committee?',
        back: 'PM (Head) + Speaker (LS) + Deputy Chairman (RS) + Leaders of Opposition (LS & RS) + Home Minister.',
        source: 'NHRC',
        subtopicId: '56.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd23-nhrc-4',
        front: 'Are the recommendations of NHRC binding on the government?',
        back: 'No. They are advisory in nature. But government must inform action taken within 1 month.',
        source: 'NHRC',
        subtopicId: '56.2',
        category: 'concept'
    },
    {
        id: 'd23-nhrc-5',
        front: 'Can NHRC inquire into a matter after 1 year of its occurrence?',
        back: 'No. It cannot inquire into any matter after the expiry of one year from the date of occurrence.',
        source: 'NHRC',
        subtopicId: '56.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd23-nhrc-6',
        front: 'Who can be the Chairman of NHRC (Post-2019 Amendment)?',
        back: 'A retired Chief Justice of India OR a retired Judge of the Supreme Court.',
        source: 'NHRC',
        subtopicId: '56.1',
        category: 'fact'
    },

    // ==========================================
    // STATE HUMAN RIGHTS COMMISSION (SHRC)
    // ==========================================
    {
        id: 'd23-shrc-1',
        front: 'Who appoints the Chairman and members of SHRC?',
        back: 'Governor, on the recommendations of a committee.',
        source: 'SHRC',
        subtopicId: '57.1',
        category: 'fact'
    },
    {
        id: 'd23-shrc-2',
        front: 'Who can remove the Chairman/Members of SHRC?',
        back: 'The President ONLY (Not the Governor), on grounds of proved misbehavior after SC inquiry.',
        source: 'SHRC',
        subtopicId: '57.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd23-shrc-3',
        front: 'Can SHRC inquire into violations by Armed Forces?',
        back: 'No. Even NHRC has limited powers regarding Armed Forces. SHRC generally deals with State/Concurrent matters.',
        source: 'SHRC',
        subtopicId: '57.2',
        category: 'concept'
    },

    // ==========================================
    // LINKAGES
    // ==========================================
    {
        id: 'd23-link-1',
        front: 'Tenure of NHRC/SHRC members (2019 Amendment)?',
        back: '3 years or 70 years of age (whichever is earlier). (Reduced from 5 years).',
        source: 'NHRC/SHRC',
        subtopicId: '56.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd23-link-2',
        front: 'Does NHRC have powers of a Civil Court?',
        back: 'Yes, while inquiring into complaints, it has all powers of a civil court.',
        source: 'NHRC',
        subtopicId: '56.2',
        category: 'concept'
    }
];

export default DAY23_FLASHCARDS;
