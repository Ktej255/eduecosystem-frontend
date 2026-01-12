// Day 7 Flashcards - Jan 18 (Sunday)
// Topic: SUNDAY REVISION (Deep Dive & Distinctions)
// Focus: Confusing areas between President/Governor, PM/CM, and Emergency provisions.

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY7_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // DISTINCTION: PRESIDENT vs GOVERNOR
    // ==========================================
    {
        id: 'd7-rev-1',
        front: 'Compare the Veto power of President vs Governor regarding Money Bills.',
        back: 'President: Can give assent or withhold assent (cannot return).\nGovernor: Can give assent, withhold assent, OR reserve for President (cannot return).\n\nNeither can return a Money Bill.',
        source: 'Sunday Revision',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd7-rev-2',
        front: 'Compare the Pardoning Power: Court Martial.',
        back: 'President: Can pardon Court Martial sentences.\nGovernor: CANNOT pardon Court Martial sentences.',
        source: 'Sunday Revision',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd7-rev-3',
        front: 'Compare the Pardoning Power: Death Sentence.',
        back: 'President: Can PARDON death sentence.\nGovernor: CANNOT pardon death sentence (only suspend, remit, or commute).',
        source: 'Sunday Revision',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd7-rev-4',
        front: 'Is the "Discretionary Power" constitutionally defined for President and Governor?',
        back: 'President: No (Situational only).\nGovernor: Yes (Article 163 explicitly mentions discretion).',
        source: 'Sunday Revision',
        category: 'concept'
    },

    // ==========================================
    // DISTINCTION: NATIONAL vs STATE EMERGENCY
    // ==========================================
    {
        id: 'd7-rev-5',
        front: 'Parliamentary approval time limit: National Emergency vs President\'s Rule?',
        back: 'National Emergency: 1 Month.\nPresident\'s Rule: 2 Months.',
        source: 'Sunday Revision',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd7-rev-6',
        front: 'Majority required for approval: National Emergency vs President\'s Rule?',
        back: 'National Emergency: Special Majority.\nPresident\'s Rule: Simple Majority.',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-7',
        front: 'Effect on Fundamental Rights: National Emergency vs President\'s Rule?',
        back: 'National Emergency: Art 19 suspended (if war/external aggression). Others can be suspended (except 20, 21).\nPresident\'s Rule: NO effect on Fundamental Rights.',
        source: 'Sunday Revision',
        category: 'concept',
        highlight: true
    },

    // ==========================================
    // DISTINCTION: PM vs CM & COUNCILS
    // ==========================================
    {
        id: 'd7-rev-8',
        front: 'Minimum strength of Council of Ministers: Centre vs State.',
        back: 'Centre: No minimum specified (only max 15%).\nState: Minimum 12 ministers (including CM).',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-9',
        front: 'Nature of advice to Head of State: Is it binding?',
        back: 'Union: Binding on President (42nd/44th Amendments).\nState: Binding on Governor (except in discretionary matters) - established by court judgments, not explicit in Article.',
        source: 'Sunday Revision',
        category: 'concept'
    },

    // ==========================================
    // SUBTOPIC DEEP DIVE: BASIC STRUCTURE
    // ==========================================
    {
        id: 'd7-rev-10',
        front: 'Is "Judicial Review" part of the Basic Structure?',
        back: 'Yes. (Indira Gandhi case, 1975; Minerva Mills case, 1980).',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-11',
        front: 'Is "Federalism" part of the Basic Structure?',
        back: 'Yes. (S.R. Bommai case, 1994).',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-12',
        front: 'Is "Socialism" and "Secularism" part of the Basic Structure?',
        back: 'Yes. (S.R. Bommai case, 1994).',
        source: 'Sunday Revision',
        category: 'fact'
    },

    // ==========================================
    // CRITICAL ARTICLES REVISION
    // ==========================================
    {
        id: 'd7-rev-13',
        front: 'Article 74 vs Article 163.',
        back: 'Art 74: Council of Ministers to aid and advise President.\nArt 163: Council of Ministers to aid and advise Governor (explicitly mentions EXCEPTION of discretion).',
        source: 'Sunday Revision',
        category: 'article'
    },
    {
        id: 'd7-rev-14',
        front: 'Article 75 vs Article 164.',
        back: 'Art 75: Other provisions as to Ministers (Centre).\nArt 164: Other provisions as to Ministers (State).',
        source: 'Sunday Revision',
        category: 'article'
    },
    {
        id: 'd7-rev-15',
        front: 'Article 78 vs Article 167.',
        back: 'Art 78: Duties of PM to furnish info.\nArt 167: Duties of CM to furnish info.',
        source: 'Sunday Revision',
        category: 'article'
    },
    {
        id: 'd7-rev-16',
        front: 'Article 72 vs Article 161.',
        back: 'Art 72: Pardoning power of President.\nArt 161: Pardoning power of Governor.',
        source: 'Sunday Revision',
        category: 'article'
    },
    {
        id: 'd7-rev-17',
        front: 'Article 123 vs Article 213.',
        back: 'Art 123: President\'s Ordinance.\nArt 213: Governor\'s Ordinance.',
        source: 'Sunday Revision',
        category: 'article'
    },

    // ==========================================
    // KEY AMENDMENTS REVISION
    // ==========================================
    {
        id: 'd7-rev-18',
        front: '42nd Amendment Act, 1976 is also called ____.',
        back: 'The "Mini-Constitution".',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-19',
        front: 'Which Amendment removed Right to Property as a Fundamental Right?',
        back: '44th Amendment Act, 1978.',
        source: 'Sunday Revision',
        category: 'fact'
    },
    {
        id: 'd7-rev-20',
        front: 'Which Amendment added the 10th Schedule (Anti-Defection)?',
        back: '52nd Amendment Act, 1985.',
        source: 'Sunday Revision',
        category: 'fact'
    }
];

export default DAY7_FLASHCARDS;
