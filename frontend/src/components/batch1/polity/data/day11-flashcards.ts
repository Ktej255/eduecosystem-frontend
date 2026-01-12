// Day 11 Flashcards - Jan 22 (Thursday)
// Topic: INTEGRATED JUDICIARY (SC & HC)
// Chapters 26 (Supreme Court) & 34 (High Court) & 35 (Subordinate Courts)
// Focus: Comparative Analysis - Appointment, Removal, Jurisdiction

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY11_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // APPOINTMENT & ORGANIZATION (SC vs HC)
    // ==========================================

    {
        id: 'd11-26-1-1',
        front: 'Who appoints Judges of Supreme Court vs High Court?',
        back: 'BOTH are appointed by the President.\nSC: President + consultation with CJI (+4 senior-most SC judges).\nHC: President + consultation with CJI (+2 senior-most SC judges) + Governor of State.',
        source: 'Integrated Judiciary',
        subtopicId: '26.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd11-26-1-2',
        front: 'Compare the retirement age of SC and HC judges.',
        back: 'Supreme Court: 65 Years.\nHigh Court: 62 Years.',
        source: 'Integrated Judiciary',
        subtopicId: '34.1',
        category: 'fact'
    },
    {
        id: 'd11-26-1-3',
        front: 'Who administers the oath to SC vs HC judges?',
        back: 'SC Judges: President.\nHC Judges: Governor of the State.',
        source: 'Integrated Judiciary',
        subtopicId: '34.1',
        category: 'fact',
        highlight: true
    },

    // ==========================================
    // REMOVAL (SC vs HC)
    // ==========================================

    {
        id: 'd11-26-2-1',
        front: 'Who can remove a High Court Judge?',
        back: 'The President (NOT the Governor). The process is EXACTLY the same as for a Supreme Court Judge (Resolution by Parliament).',
        source: 'Integrated Judiciary',
        subtopicId: '34.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd11-26-2-2',
        front: 'Can a retired judge practice law?',
        back: 'SC Judge: NO, cannot practice anywhere.\nHC Judge: YES, but ONLY in Supreme Court or OTHER High Courts (not where they served).',
        source: 'Integrated Judiciary',
        subtopicId: '26.2',
        category: 'fact'
    },

    // ==========================================
    // JURISDICTION (Art 32 vs 226)
    // ==========================================

    {
        id: 'd11-26-3-1',
        front: 'Compare Writ Jurisdiction of SC (Art 32) vs HC (Art 226).',
        back: '1. Scope: HC (Wider) > SC. HC can issue writs for Fundamental Rights AND "any other purpose". SC only for FRs.\n2. Territory: SC (All India) > HC (State).',
        source: 'Integrated Judiciary',
        subtopicId: '26.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd11-26-3-2',
        front: 'Can SC refuse a writ petition under Art 32?',
        back: 'No. Art 32 is a Fundamental Right itself, so SC cannot refuse.\nHC CAN refuse under Art 226 (it is discretionary).',
        source: 'Integrated Judiciary',
        subtopicId: '26.3',
        category: 'concept'
    },
    {
        id: 'd11-26-3-3',
        front: 'Does High Court have Original Jurisdiction?',
        back: 'Yes, in matters of:\n1. Election of MPs and MLAs.\n2. Wills, marriage, divorce, company laws, contempt of court.',
        source: 'Integrated Judiciary',
        subtopicId: '34.2',
        category: 'fact'
    },
    {
        id: 'd11-26-3-4',
        front: 'What is the "Supervisory Jurisdiction" of High Court (Art 227)?',
        back: 'HC has superintendence over ALL courts and tribunals in its territory (EXCEPT military courts). This power is both administrative and judicial.',
        source: 'Integrated Judiciary',
        subtopicId: '34.2',
        category: 'concept'
    },

    // ==========================================
    // SUBORDINATE COURTS (Ch 35)
    // ==========================================

    {
        id: 'd11-35-1-1',
        front: 'Who appoints District Judges?',
        back: 'The Governor (in consultation with the High Court).',
        source: 'Subordinate Courts',
        subtopicId: '35.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd11-35-1-2',
        front: 'Who controls the Subordinate Courts (posting, promotion)?',
        back: 'The High Court (Article 235).',
        source: 'Subordinate Courts',
        subtopicId: '35.1',
        category: 'fact'
    },
    {
        id: 'd11-35-2-1',
        front: 'What is the status of a Lok Adalat award?',
        back: 'It has the same status as a decree of a civil court and is FINAL and BINDING on all parties. No appeal lies against it.',
        source: 'Subordinate Courts',
        subtopicId: '35.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd11-26-4-1',
        front: 'Who determines the strength of SC vs HC?',
        back: 'SC Strength: Parliament (by Law).\nHC Strength: President (Executive Order).',
        source: 'Integrated Judiciary',
        subtopicId: '34.1',
        category: 'fact',
        highlight: true
    }
];

export default DAY11_FLASHCARDS;
