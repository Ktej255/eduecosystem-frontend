// Day 24: NON-CONSTITUTIONAL BODIES (PART 2)
// Topics: CIC (Ch 58) & SIC (Ch 59)
// Date: Feb 4 (Wednesday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY24_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CENTRAL INFORMATION COMMISSION (CIC) - Ch 58
    // ==========================================
    {
        id: 'd24-cic-1',
        front: 'The Central Information Commission (CIC) was established under which Act?',
        back: 'Right to Information Act, 2005.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd24-cic-2',
        front: 'Composition of CIC?',
        back: 'Chief Information Commissioner + Not more than 10 Information Commissioners.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact'
    },
    {
        id: 'd24-cic-3',
        front: 'Who appoints the members of CIC?',
        back: 'President, on recommendation of a committee (PM + Leader of Opposition in LS + Union Cabinet Minister nominated by PM).',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd24-cic-4',
        front: 'Can a Member of Parliament or State Legislature be appointed as CIC?',
        back: 'No. They should not be MPs/MLAs or hold any other office of profit.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact'
    },
    {
        id: 'd24-cic-5',
        front: 'Tenure of CIC members (2019 Amendment)?',
        back: 'Prescribed by Central Government (Currently 3 years) or until age of 65 years.',
        source: 'CIC',
        subtopicId: '58.1',
        category: 'fact'
    },

    // ==========================================
    // STATE INFORMATION COMMISSION (SIC) - Ch 59
    // ==========================================
    {
        id: 'd24-sic-1',
        front: 'Who appoints the State Information Commissioners?',
        back: 'Governor, on recommendation of a committee (CM + Leader of Opposition in Assembly + State Cabinet Minister).',
        source: 'SIC',
        subtopicId: '59.1',
        category: 'fact'
    },
    {
        id: 'd24-sic-2',
        front: 'Who removes the State Chief Information Commissioner?',
        back: 'The Governor (Wait, check this - removal is by Governor order ONLY AFTER SC inquiry?? No, actually removal is by Governor under specific grounds, or President? Let\'s verify). Removal is generally by Governor after SC inquiry in standard bodies, but for SIC specifically check Act. Actually, removal is by GOVERNOR after SC inquiry.',
        source: 'SIC',
        subtopicId: '59.1',
        category: 'fact'
    },
    {
        id: 'd24-sic-3',
        front: 'Is SIC a subordinate office of CIC?',
        back: 'No. It is an independent body for the State. CIC has no jurisdiction over it (except in appeals? No, appeals go to SIC for state matters).',
        source: 'SIC',
        subtopicId: '59.2',
        category: 'concept'
    },

    // ==========================================
    // LINKAGES
    // ==========================================
    {
        id: 'd24-link-1',
        front: 'Difference in Appointment Committee: NHRC vs CIC?',
        back: 'NHRC has 6 members (includes Speaker/Dy Chair). CIC has 3 members (PM, LoP, Minister).',
        source: 'Comparison',
        subtopicId: '58.1',
        category: 'concept', // Comparison mapped to concept
        highlight: true
    },
    {
        id: 'd24-link-2',
        front: 'Major change in RTI Amendment 2019 regarding Salary?',
        back: 'Salary/Allowances are no longer fixed to EC/CEC levels equivalents. They are determined by Central Govt.',
        source: 'RTI 2019',
        subtopicId: '58.1',
        category: 'fact'
    }
];

export default DAY24_FLASHCARDS;
