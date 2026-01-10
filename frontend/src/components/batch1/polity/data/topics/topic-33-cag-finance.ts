// Topic 33: CAG & Finance Commission
// Art 148-151, Art 280

import { PolityTopic } from '../polity-types';

export const topic33CAGFinance: PolityTopic = {
    id: 33,
    module: 'VII',
    title: 'CAG & Finance Commission',
    syllabusTag: 'Module VII: Constitutional Bodies',

    staticFocus: 'CAG (Art 148-151) & Finance Commission (Art 280)',

    coreArticles: [
        { number: '148', title: 'CAG Appointment', description: 'Appointed by President. Holds office until 65 years or 6 years. Removed only by impeachment. Salary charged on Consolidated Fund.' },
        { number: '149', title: 'Duties of CAG', description: 'Prescribes form of accounts. Audits accounts of Union, States, any body as per law. Reports to President/Governor.' },
        { number: '151', title: 'Audit Reports', description: 'Reports laid before Parliament/State Legislature. Examined by PAC.' },
        { number: '280', title: 'Finance Commission', description: 'President constitutes FC every 5 years. Recommends distribution of taxes, grants-in-aid, measures to augment state resources.' },
    ],

    keyConcepts: [
        {
            term: 'CAG (Art 148-151)',
            definition: 'Guardian of public purse. Appointed by President. Removed only by impeachment. Audits Centre, States, PSUs. Reports to Parliament via PAC. Dr. Ambedkar: "Most important officer under Constitution".',
        },
        {
            term: 'Types of CAG Audit',
            definition: 'Legal/Regularity Audit: Expenditure as per law? Propriety Audit: Is expenditure wise and prudent? Efficiency Audit: Value for money? Performance Audit: Achievement of objectives?',
        },
        {
            term: 'CAG Reports',
            definition: 'Laid before Parliament/Legislature. Examined by PAC (not CAG directly). CAG has no power to disallow expenditure. Only recommends, Parliament decides.',
        },
        {
            term: 'Finance Commission (Art 280)',
            definition: 'Quasi-judicial body. 5 members. Constituted every 5 years. Recommends: Tax devolution, Grants-in-aid, Measures for Panchayats/Municipalities. Advisory, not binding.',
        },
        {
            term: 'Finance Commission Functions',
            definition: 'Vertical devolution: Centre to States ratio. Horizontal devolution: Among states. Grants-in-aid (Art 275). Special grants for NE, hilly states. Any other matter referred by President.',
        },
        {
            term: '15th Finance Commission',
            definition: 'Chairman: N.K. Singh. Period: 2021-26. 41% vertical devolution to states. Introduced performance-based grants. Special focus on health, disaster management.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-33-01',
            headline: '16th Finance Commission Appointed',
            date: '2024',
            source: 'Ministry of Finance',
            teachingHook: 'Arvind Panagariya appointed as 16th FC Chairman. ToR includes "performance-based incentives" for states, raising concerns about conditional federalism. Report due by Oct 2025 for 2026-31 period.',
            relatedArticles: ['280'],
        },
    ],

    comparisonTable: {
        title: 'CAG vs Finance Commission',
        columnAHeader: 'CAG (Art 148)',
        columnBHeader: 'Finance Commission (Art 280)',
        rows: [
            { aspect: 'Nature', columnA: 'Constitutional Authority', columnB: 'Quasi-judicial body' },
            { aspect: 'Appointment', columnA: 'By President (permanent)', columnB: 'By President (every 5 years)' },
            { aspect: 'Function', columnA: 'Audit public expenditure', columnB: 'Recommend tax distribution' },
            { aspect: 'Reports to', columnA: 'Parliament (via PAC)', columnB: 'President' },
            { aspect: 'Binding?', columnA: 'Recommendatory', columnB: 'Recommendatory (usually accepted)' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 148: CAG appointed by President, removed by impeachment', category: 'Article', highlight: true },
        { fact: 'CAG: "Most important officer" - Dr. Ambedkar', category: 'Article' },
        { fact: 'CAG reports examined by PAC (not CAG himself)', category: 'Article' },
        { fact: 'Art 280: Finance Commission every 5 years', category: 'Article', highlight: true },
        { fact: '15th FC: N.K. Singh, 41% devolution, 2021-26', category: 'Commission' },
        { fact: '16th FC: Arvind Panagariya, report due Oct 2025', category: 'Commission', highlight: true },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
