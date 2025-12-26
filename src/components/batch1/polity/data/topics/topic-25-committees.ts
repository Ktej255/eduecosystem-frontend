// Topic 25: Parliamentary Committees
// Standing Committees, PAC, Estimates, Ethics Committee

import { PolityTopic } from '../polity-types';

export const topic25Committees: PolityTopic = {
    id: 25,
    module: 'D',
    title: 'Parliamentary Committees',
    syllabusTag: 'Module D: The Legislature',

    staticFocus: 'Standing Committees, PAC, Estimates, DRSC, Ethics Committee',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Types of Committees',
            definition: 'Standing Committees (Permanent): PAC, Estimates, Business Advisory, Rules, Privileges, etc. Ad-hoc Committees (Temporary): Select, Joint Committee, Inquiry Committees.',
        },
        {
            term: 'Public Accounts Committee (PAC)',
            definition: 'Examines CAG reports on government accounts. 22 members (15 LS + 7 RS). Chairman from OPPOSITION (by convention since 1967). Does not examine government policy, only implementation.',
        },
        {
            term: 'Estimates Committee',
            definition: 'Examines estimates in Budget before expenditure. 30 members (All from LS, none from RS). Chairman from ruling party. Called "Twin sister of PAC". Largest committee.',
        },
        {
            term: 'Committee on Public Undertakings',
            definition: 'Examines reports of CAG on PSUs. 22 members (15 LS + 7 RS). Cannot examine: tariffs, day-to-day administration, matters pending before courts.',
        },
        {
            term: 'Departmentally Related Standing Committees (DRSC)',
            definition: '24 committees covering all ministries. Each has 31 members (21 LS + 10 RS). Examine demands for grants, bills referred, annual reports. Reconstituted every year.',
        },
        {
            term: 'Ethics Committee',
            definition: 'Examines members\' conduct, ethical violations. Separate for LS and RS. Can recommend expulsion. "Cash for Query" scam led to strengthening.',
        },
        {
            term: 'Privileges Committee',
            definition: 'Examines questions of privilege. Can punish for contempt. Recommends action to House. 15 members in LS, 10 in RS.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-25-01',
            headline: 'Ethics Committee & "Cash for Query" (Dec 2023)',
            date: 'Dec 2023',
            source: 'Lok Sabha / Rajya Sabha',
            teachingHook: 'Two MPs were expelled from Parliament following Ethics Committee recommendations for allegedly taking money to ask questions ("Cash for Query"). Explain the Ethics Committee\'s power to recommend expulsion and the House\'s final authority.',
            relatedArticles: ['105'],
        },
    ],

    comparisonTable: {
        title: 'PAC vs Estimates Committee',
        columnAHeader: 'PAC',
        columnBHeader: 'Estimates Committee',
        rows: [
            { aspect: 'Examines', columnA: 'CAG reports (post-expenditure)', columnB: 'Budget estimates (pre-expenditure)' },
            { aspect: 'Members', columnA: '22 (15 LS + 7 RS)', columnB: '30 (All from LS)' },
            { aspect: 'Chairman', columnA: 'Opposition (convention since 1967)', columnB: 'Ruling party' },
            { aspect: 'RS Members', columnA: 'Yes (7)', columnB: 'No' },
        ],
    },

    prelimsPointers: [
        { fact: 'PAC: Examines CAG reports, 22 members, Chairman from Opposition', category: 'Article', highlight: true },
        { fact: 'Estimates Committee: 30 members (only LS), examines budget before expenditure', category: 'Article', highlight: true },
        { fact: 'DRSC: 24 committees, 31 members each, reconstituted yearly', category: 'Article' },
        { fact: 'Ethics Committee: Can recommend expulsion (Cash for Query 2023)', category: 'Article' },
        { fact: 'Privileges Committee: Punish contempt, 15 members (LS)', category: 'Article' },
        { fact: 'PAC Chairman from Opposition: Convention since 1967', category: 'Year', highlight: true },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
