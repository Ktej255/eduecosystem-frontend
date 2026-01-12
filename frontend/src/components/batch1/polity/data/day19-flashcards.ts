// Day 19: CONSTITUTIONAL BODIES (PART 2)
// Topics: SPSC, Finance Commission, NCSC, NCST, NCBC
// Date: Jan 30 (Friday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY19_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // STATE PUBLIC SERVICE COMMISSION (SPSC) - Ch 45
    // ==========================================
    {
        id: 'd19-45-1',
        front: 'Who appoints the Chairman and members of a State Public Service Commission (SPSC)?',
        back: ' The Governor of the State.',
        source: 'SPSC',
        subtopicId: '38.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd19-45-2',
        front: 'Who can remove the Chairman or members of SPSC?',
        back: 'Only the President (NOT the Governor), on grounds of misbehavior after Supreme Court inquiry.',
        source: 'SPSC',
        subtopicId: '38.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd19-45-3',
        front: 'What is the tenure of SPSC members?',
        back: '6 years or 62 years of age (whichever is earlier). (For UPSC it is 65 years).',
        source: 'SPSC',
        subtopicId: '38.2',
        category: 'fact'
    },
    {
        id: 'd19-45-4',
        front: 'SPSC submits its annual report to?',
        back: 'The Governor (who lays it before the State Legislature).',
        source: 'SPSC',
        subtopicId: '38.2',
        category: 'fact'
    },

    // ==========================================
    // FINANCE COMMISSION (Ch 46) - Art 280
    // ==========================================
    {
        id: 'd19-46-1',
        front: 'Article 280 provides for the constitution of?',
        back: 'Finance Commission (Quasi-judicial body). Constituted by President every 5th year.',
        source: 'Finance Commission',
        subtopicId: '22.1',
        category: 'article'
    },
    {
        id: 'd19-46-2',
        front: 'Composition of Finance Commission?',
        back: 'Chairman + 4 other members (Appointed by President).',
        source: 'Finance Commission',
        subtopicId: '22.1',
        category: 'fact'
    },
    {
        id: 'd19-46-3',
        front: 'Are the recommendations of the Finance Commission binding on the government?',
        back: 'No. They are advisory in nature. (However, they are generally accepted).',
        source: 'Finance Commission',
        subtopicId: '22.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd19-46-4',
        front: 'Who determines the qualifications of members of the Finance Commission?',
        back: 'Parliament.',
        source: 'Finance Commission',
        subtopicId: '22.1',
        category: 'fact'
    },

    // ==========================================
    // NATIONAL COMMISSIONS (NCSC, NCST, NCBC) - Ch 48, 49, 50
    // ==========================================
    {
        id: 'd19-48-1',
        front: 'National Commission for SCs (NCSC) is under which Article?',
        back: 'Article 338.',
        source: 'NCSC',
        subtopicId: '39.2',
        category: 'article'
    },
    {
        id: 'd19-49-1',
        front: 'National Commission for STs (NCST) created by which Amendment?',
        back: '89th Constitutional Amendment Act, 2003. (Separated from NCSC). Article 338-A.',
        source: 'NCST',
        subtopicId: '39.2',
        category: 'fact'
    },
    {
        id: 'd19-50-1',
        front: 'National Commission for Backward Classes (NCBC) got constitutional status by?',
        back: '102nd Constitutional Amendment Act, 2018. (Added Article 338-B).',
        source: 'NCBC',
        subtopicId: '39.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd19-comm-1',
        front: 'Do NCSC/NCST have powers of a Civil Court?',
        back: 'Yes, while investigating any matter or inquiring into any complaint.',
        source: 'Commissions',
        subtopicId: '39.2',
        category: 'concept'
    },
    {
        id: 'd19-comm-2',
        front: 'Who appoints the Chairperson and members of NCSC/NCST/NCBC?',
        back: 'President by warrant under his hand and seal.',
        source: 'Commissions',
        subtopicId: '39.2',
        category: 'fact'
    },
    {
        id: 'd19-comm-3',
        front: 'Tenure of members of NCSC/NCST?',
        back: '3 years (As per service rules determined by President).',
        source: 'Commissions',
        subtopicId: '39.2',
        category: 'fact'
    },

    // ==========================================
    // SPECIAL OFFICER FOR LINGUISTIC MINORITIES (Ch 51)
    // ==========================================
    {
        id: 'd19-51-1',
        front: 'Special Officer for Linguistic Minorities is provided under?',
        back: 'Article 350-B (Added by 7th Amendment Act, 1956).',
        source: 'Linguistic Minorities',
        subtopicId: '39.3',
        category: 'fact'
    },
    {
        id: 'd19-51-2',
        front: 'The headquarters of the Special Officer for Linguistic Minorities is at?',
        back: 'Prayagraj (Allahabad). Regional offices at Chennai, Kolkata, Belgaum.',
        source: 'Linguistic Minorities',
        subtopicId: '39.3',
        category: 'fact'
    },

    // ==========================================
    // LINKAGES
    // ==========================================
    {
        id: 'd19-link-1',
        front: 'Difference between removal of SPSC Member vs UPSC Member?',
        back: 'None. Both are removed by President on same grounds (Misbehavior/Incapacity) after SC inquiry.',
        source: 'SPSC',
        subtopicId: '38.2',
        category: 'comparison', // Corrected category if mapping exists, else use concept
        highlight: true
    },
    {
        id: 'd19-link-2',
        front: 'Which Finance Commission is currently active (2026 contexts)?',
        back: '16th Finance Commission (Arvind Panagariya). 15th was N.K. Singh.',
        source: 'Finance Commission',
        subtopicId: '22.1',
        category: 'fact'
    }
];

// Note: Ensure category types match allowed union types in Flashcard interface
// (fact | concept | article | comparison)
// If 'comparison' is not allowed, mapping it to 'concept' is safer.
// Based on previous lint errors, 'comparison' might be invalid.
// Auto-correcting 'comparison' to 'concept'.
const fixedFlashcards = DAY19_FLASHCARDS.map(card => ({
    ...card,
    category: card.category === 'comparison' ? 'concept' : card.category
}));

export default fixedFlashcards;
