// Topic 24: Parliament - IV
// Budget, Consolidated Fund, Contingency Fund, Public Account

import { PolityTopic } from '../polity-types';

export const topic24Parliament4: PolityTopic = {
    id: 24,
    module: 'IV',
    title: 'Parliament - IV: Budget & Finance',
    syllabusTag: 'Module IV: The Legislature',

    staticFocus: 'Budget, Consolidated Fund, Contingency Fund, & Public Account',

    coreArticles: [
        { number: '112', title: 'Annual Financial Statement (Budget)', description: 'President causes Budget to be laid before Parliament. Shows estimated receipts and expenditure for the financial year.' },
        { number: '113', title: 'Procedure in Parliament', description: 'Estimates relating to expenditure from Consolidated Fund in the form of Demands for Grants. Grants voted by LS only.' },
        { number: '114', title: 'Appropriation Bills', description: 'After Demands for Grants are passed, Appropriation Bill is introduced. Authorizes withdrawal from Consolidated Fund.' },
        { number: '266', title: 'Consolidated Fund', description: 'All revenues, loans, repayments received by GoI flow into this. Expenditure requires parliamentary authorization.' },
        { number: '267', title: 'Contingency Fund of India', description: 'At President\'s disposal for unforeseen expenditure. Advance from this Fund. Later regularized by Parliament.' },
    ],

    keyConcepts: [
        {
            term: 'Consolidated Fund of India (Art 266)',
            definition: 'All revenues received by government. All loans raised and repayments. No money can be withdrawn without parliamentary authorization (Appropriation Act). Charged expenditure doesn\'t need vote.',
        },
        {
            term: 'Contingency Fund (Art 267)',
            definition: 'Corpus of Rs. 30,000 crore. President\'s disposal. For urgent unforeseen expenditure. Parliament must subsequently authorize. Imprest nature - restored after authorization.',
        },
        {
            term: 'Public Account',
            definition: 'All other public money (not Consolidated Fund). Deposits, provident funds, savings. Executive can withdraw without Parliament. Not covered by CAG audit.',
        },
        {
            term: 'Charged Expenditure',
            definition: 'Not voted, only discussed. Includes: President/Governors\' emoluments, SC/HC Judges\' salaries, CAG salary, Debt charges, EC members. Cannot be reduced by Parliament.',
        },
        {
            term: 'Budget Stages',
            definition: '1. Presentation (Finance Minister). 2. General Discussion. 3. Departmental Standing Committees examination. 4. Voting on Demands for Grants. 5. Passing of Appropriation Bill. 6. Passing of Finance Bill.',
        },
        {
            term: 'Vote on Account',
            definition: 'Advance authorization for expenditure (usually 2 months). When full Budget cannot be passed before April 1. During elections, Interim Budget or Vote on Account used.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-24-01',
            headline: 'Interim Budget 2024 (Feb 2024)',
            date: 'Feb 2024',
            source: 'Ministry of Finance',
            teachingHook: 'Ahead of elections, the government presented an "Interim Budget". The new government presented a full Union Budget in July 2024. Discuss the difference between Interim Budget, Vote on Account, and Full Budget. Why no new schemes in Interim Budget (convention)?',
            relatedArticles: ['112', '116'],
        },
    ],

    comparisonTable: {
        title: 'Three Funds of Government',
        columnAHeader: 'Fund',
        columnBHeader: 'Nature & Authorization',
        rows: [
            { aspect: 'Consolidated Fund', columnA: 'All revenues, loans', columnB: 'Parliament authorization needed (Art 266)' },
            { aspect: 'Contingency Fund', columnA: 'Rs 30,000 cr corpus', columnB: 'President\'s disposal, later authorized' },
            { aspect: 'Public Account', columnA: 'Deposits, PF, etc.', columnB: 'Executive can withdraw, no Parliament vote' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 112: Budget = Annual Financial Statement', category: 'Article', highlight: true },
        { fact: 'Art 266: Consolidated Fund - Needs parliamentary authorization', category: 'Article', highlight: true },
        { fact: 'Art 267: Contingency Fund - President\'s disposal for emergencies', category: 'Article', highlight: true },
        { fact: 'Charged Expenditure: Judges, CAG, President salaries - not voted', category: 'Article' },
        { fact: 'Appropriation Bill: Authorizes withdrawal from Consolidated Fund', category: 'Article' },
        { fact: 'Finance Bill: Implements tax proposals, must pass within 75 days', category: 'Article' },
        { fact: 'Interim Budget 2024 + Full Budget July 2024', category: 'Year' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
