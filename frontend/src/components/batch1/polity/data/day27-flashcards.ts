// Day 27: SATURDAY REVISION (WEEK 4)
// Topics: Law Officers, Human Rights, RTI, Vigilance, Lokpal
// Date: Feb 7 (Saturday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY27_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // LAW OFFICERS (AGI & Adv Gen)
    // ==========================================
    {
        id: 'd27-rev-1',
        front: 'Who appoints the Attorney General vs Advocate General?',
        back: 'Attorney General: President. Advocate General: Governor.',
        source: 'Comparison',
        subtopicId: '38.3',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd27-rev-2',
        front: 'Can the AG vote in Parliament?',
        back: 'No. He has the right to speak and participate but NOT to vote.',
        source: 'AGI',
        subtopicId: '38.3',
        category: 'concept'
    },

    // ==========================================
    // HUMAN RIGHTS (NHRC & SHRC)
    // ==========================================
    {
        id: 'd27-rev-3',
        front: 'Tenure of NHRC/SHRC members (Post-2019)?',
        back: '3 years or 70 years of age.',
        source: 'NHRC',
        subtopicId: '56.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd27-rev-4',
        front: 'Who removes the SHRC Chairperson?',
        back: 'President (Not Governor). Same as NHRC/UPSC.',
        source: 'SHRC',
        subtopicId: '57.1',
        category: 'concept',
        highlight: true
    },

    // ==========================================
    // RTI BODIES (CIC & SIC)
    // ==========================================
    {
        id: 'd27-rev-5',
        front: 'CIC Appointment Committee Members?',
        back: 'PM + Leader of Opposition (LS) + Union Cabinet Minister nominated by PM.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact'
    },
    {
        id: 'd27-rev-6',
        front: 'Who determines the salary of CIC/SIC members (Post-2019)?',
        back: 'Central Government.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact'
    },

    // ==========================================
    // VIGILANCE & LOKPAL
    // ==========================================
    {
        id: 'd27-rev-7',
        front: 'CVC Appointment Committee Members?',
        back: 'PM + Home Minister + Leader of Opposition (LS).',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd27-rev-8',
        front: 'CBI Director Appointment Committee (post-Lokpal Act)?',
        back: 'PM + Leader of Opposition (LS) + CJI (or SC Judge).',
        source: 'CBI',
        subtopicId: '61.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd27-rev-9',
        front: 'Tenure of CVC vs CBI Director?',
        back: 'CVC: 4 years/65 age. CBI Director: Fixed 2 years (extendable to 5).',
        source: 'Comparison',
        subtopicId: '60.1',
        category: 'concept'
    },
    {
        id: 'd27-rev-10',
        front: 'Percentage of Judicial Members in Lokpal?',
        back: 'Minimum 50%.',
        source: 'Lokpal',
        subtopicId: '62.1',
        category: 'fact'
    },

    // ==========================================
    // TRICKY DIFFERENTIATORS
    // ==========================================
    {
        id: 'd27-rev-11',
        front: 'Which body has a Home Minister in its appointment committee?',
        back: 'NHRC (and CVC). Not CIC (Cabinet Minister). Not CBI (CJI).',
        source: 'Comparison',
        subtopicId: '56.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd27-rev-12',
        front: 'Who can take suo-motu cognizance?',
        back: 'NHRC/SHRC: Yes. Lokpal: No (needs complaint).',
        source: 'Comparison',
        subtopicId: '56.2',
        category: 'concept'
    }
];

export default DAY27_FLASHCARDS;
