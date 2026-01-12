// Day 25: NON-CONSTITUTIONAL BODIES (PART 3)
// Topics: CVC (Ch 60) & CBI (Ch 61)
// Date: Feb 5 (Thursday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY25_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CENTRAL VIGILANCE COMMISSION (CVC) - Ch 60
    // ==========================================
    {
        id: 'd25-cvc-1',
        front: 'The CVC was originally established by?',
        back: 'Executive Resolution in 1964 (based on Santhanam Committee recommendations). Statutory status given in 2003.',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd25-cvc-2',
        front: 'Composition of CVC?',
        back: 'Central Vigilance Commissioner + Not more than 2 Vigilance Commissioners.',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'fact'
    },
    {
        id: 'd25-cvc-3',
        front: 'Who appoints the Central Vigilance Commissioner?',
        back: 'President, on recommendation of a committee (PM + Home Minister + Leader of Opposition in LS).',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd25-cvc-4',
        front: 'Tenure of CVC members?',
        back: '4 years or 65 years of age (whichever is earlier).',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'fact'
    },
    {
        id: 'd25-cvc-5',
        front: 'Is CVC eligible for further employment under Government?',
        back: 'No. The CVC and VCs are ineligible for further employment under Central/State Govt.',
        source: 'CVC',
        subtopicId: '60.1',
        category: 'fact'
    },

    // ==========================================
    // CENTRAL BUREAU OF INVESTIGATION (CBI) - Ch 61
    // ==========================================
    {
        id: 'd25-cbi-1',
        front: 'Does CBI derive its powers from a specific CBI Act?',
        back: 'No. It derives power from the Delhi Special Police Establishment Act, 1946.',
        source: 'CBI',
        subtopicId: '61.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd25-cbi-2',
        front: 'Appointment of CBI Director is done by?',
        back: 'Central Government, on recommendation of a committee headed by PM (PM + LoP LS + CJI/SC Judge).',
        source: 'CBI',
        subtopicId: '61.1',
        category: 'concept'
    },
    {
        id: 'd25-cbi-3',
        front: 'Tenure of CBI Director?',
        back: 'fixed tenure of 2 years (minimum). Can be extended up to 5 years (via 1-year extensions).',
        source: 'CBI',
        subtopicId: '61.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd25-cbi-4',
        front: 'Does CBI require State consent to investigate within a State?',
        back: 'Yes ("General Consent" or case-specific consent). Unless ordered by SC/HC.',
        source: 'CBI',
        subtopicId: '61.2',
        category: 'concept',
        highlight: true
    },

    // ==========================================
    // LINKAGES
    // ==========================================
    {
        id: 'd25-link-1',
        front: 'Relation between CVC and CBI?',
        back: 'CVC exercises superintendence over CBI for offences under Prevention of Corruption Act.',
        source: 'CVC-CBI Relation',
        subtopicId: '60.2',
        category: 'concept'
    },
    {
        id: 'd25-link-2',
        front: 'Committee member difference: CVC vs CBI Director?',
        back: 'CVC Committee: PM + HM + LoP. CBI Director Committee: PM + CJI + LoP.',
        source: 'Comparison',
        subtopicId: '61.1',
        category: 'concept',
        highlight: true
    }
];

export default DAY25_FLASHCARDS;
