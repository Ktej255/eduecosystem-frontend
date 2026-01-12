// Day 4 Flashcards - Jan 15
// Topic: President (Ch 18) & Vice-President (Ch 19)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY4_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CHAPTER 18: PRESIDENT
    // ==========================================

    // 18.1 Election
    {
        id: 'd4-18-1-1',
        front: 'Who participates in the election of the President?',
        back: 'Elected members of both Houses of Parliament + Elected members of Legislative Assemblies of States (including Delhi and Puducherry). NOT Nominated members.',
        source: 'President',
        subtopicId: '18.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd4-18-1-2',
        front: 'What is the system of election used for the President?',
        back: 'Proportional Representation by means of Single Transferable Vote (Secret Ballot).',
        source: 'President',
        subtopicId: '18.1',
        category: 'concept'
    },

    // 18.2 Term & Impeachment
    {
        id: 'd4-18-2-1',
        front: 'What is the only ground for impeachment of the President?',
        back: 'Violation of the Constitution (though the Constitution does not define what constitutes this violation).',
        source: 'President',
        subtopicId: '18.2',
        category: 'article',
        highlight: true
    },
    {
        id: 'd4-18-2-2',
        front: 'Who can vote in the Impeachment of President that cannot vote in his Election?',
        back: 'Nominated members of either House of Parliament.',
        source: 'President',
        subtopicId: '18.2',
        category: 'fact'
    },

    // 18.3 Powers
    {
        id: 'd4-18-3-1',
        front: 'Which veto power is NOT enjoyed by the Indian President but available to American President?',
        back: 'Qualified Veto (Can be overridden by legislature with higher majority). Indian President has Absolute, Suspensive, and Pocket Veto.',
        source: 'President',
        subtopicId: '18.4',
        category: 'concept'
    },
    {
        id: 'd4-18-3-2',
        front: 'Under Article 72, the President can pardon death sentences. Can the Governor do the same?',
        back: 'No. The Governor cannot pardon a death sentence (even if under state law), though he can suspend, remit or commute it. Only President can Pardon.',
        source: 'President',
        subtopicId: '18.6',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd4-18-3-3',
        front: 'What is the maximum life of an Ordinance promulgated by the President?',
        back: '6 months + 6 weeks. (6 months recess max + 6 weeks for assembly to approve).',
        source: 'President',
        subtopicId: '18.5',
        category: 'fact'
    },

    // 18.4 Legislative Powers
    {
        id: 'd4-18-4-1',
        front: 'Prior recommendation of the President is needed to introduce which bills?',
        back: 'Money Bill, Finance Bill (Type I), Bill for alteration of state boundaries, Bill involving expenditure from CFI (Art 117(3)).',
        source: 'President',
        subtopicId: '18.3',
        category: 'fact'
    },

    // ==========================================
    // CHAPTER 19: VICE-PRESIDENT
    // ==========================================

    // 19.1 Election
    {
        id: 'd4-19-1-1',
        front: 'How is the Vice-President\'s electoral college different from the President\'s?',
        back: 'It consists of ALL members (Elected + Nominated) of both Houses of Parliament. It generally does NOT include State Assemblies.',
        source: 'Vice-President',
        subtopicId: '19.1',
        category: 'fact',
        highlight: true
    },

    // 19.2 Term & Removal
    {
        id: 'd4-19-2-1',
        front: 'How can the Vice-President be removed?',
        back: 'Resolution of Rajya Sabha passed by "Effective Majority" (then agreed to by Lok Sabha). No formal impeachment needed.',
        source: 'Vice-President',
        subtopicId: '19.2',
        category: 'concept'
    },
    {
        id: 'd4-19-2-2',
        front: 'Does the Vice-President continue in office beyond 5 years if his successor is not elected?',
        back: 'Yes, he holds office until his successor enters upon his office (Article 67).',
        source: 'Vice-President',
        subtopicId: '19.2',
        category: 'article'
    },

    // 19.3 Powers
    {
        id: 'd4-19-3-1',
        front: 'What is the primary function of the Vice-President?',
        back: 'To act as the Ex-officio Chairman of the Rajya Sabha.',
        source: 'Vice-President',
        subtopicId: '19.3',
        category: 'fact'
    },
    {
        id: 'd4-19-3-2',
        front: 'When acting as President, does the VP perform the duties of Chairman of Rajya Sabha?',
        back: 'No. During that period, the duties of Chairman are performed by the Deputy Chairman.',
        source: 'Vice-President',
        subtopicId: '19.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd4-19-3-3',
        front: 'Can the Vice-President vote in the Rajya Sabha?',
        back: 'Not in the first instance. He has only a casting vote in the case of an equality of votes.',
        source: 'Vice-President',
        subtopicId: '19.3',
        category: 'fact'
    },

    // 19.4 Comparison
    {
        id: 'd4-19-4-1',
        front: 'In USA, if President office falls vacant, VP becomes President for unexpired term. In India?',
        back: 'In India, VP acts as President only until a new President is elected (within 6 months). He does not hold office for the remaining term.',
        source: 'Vice-President',
        subtopicId: '19.4',
        category: 'concept',
        highlight: true
    }
];

export default DAY4_FLASHCARDS;
