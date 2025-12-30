// Topic 22: Parliament - II
// Sessions, Quorum, Voting, Motions (No-Confidence, Censure, Adjournment)

import { PolityTopic } from '../polity-types';

export const topic22Parliament2: PolityTopic = {
    id: 22,
    module: 'D',
    title: 'Parliament - II: Sessions & Motions',
    syllabusTag: 'Module D: The Legislature',

    staticFocus: 'Sessions, Quorum, Voting, & Motions (No-Confidence, Censure, Adjournment)',

    coreArticles: [
        { number: '85', title: 'Sessions', description: 'President summons Parliament. Gap between sessions: Max 6 months. He can prorogue House or dissolve Lok Sabha.' },
        { number: '100', title: 'Voting', description: 'All questions decided by majority of members present and voting (excluding Speaker). Speaker has casting vote only.' },
        { number: '101', title: 'Vacation of Seats', description: 'If member becomes subject to disqualifications. If absent for 60 days without permission. If resigns to Chairman/Speaker.' },
    ],

    keyConcepts: [
        {
            term: 'Quorum (Art 100)',
            definition: '1/10th of total membership of House to conduct business. If not present, Speaker/Chairman adjourns House or suspends meeting.',
        },
        {
            term: 'Types of Voting',
            definition: 'Voice Vote: "Ayes" and "Noes" by saying. Division Vote: Members move to lobbies (Aye/No). Recorded voting using electronic system. Secret Ballot only for President/VP election.',
        },
        {
            term: 'No-Confidence Motion',
            definition: 'Art 75: Council of Ministers responsible to LS. Motion against entire Cabinet. If passed, PM and all ministers must resign. 50 members needed to introduce. Debated and voted on.',
        },
        {
            term: 'Censure Motion',
            definition: 'Criticizes government policy or minister. PM/Minister need not resign if passed. Can be against individual minister or government. Specific reasons must be stated.',
        },
        {
            term: 'Adjournment Motion',
            definition: 'Discusses urgent public importance matter. Disrupts normal business. 50 members needed for introduction. Speaker\'s leave required. Only in LS, not RS.',
        },
        {
            term: 'Calling Attention Motion',
            definition: 'Indian innovation (1954). Call attention of Minister to urgent matter. Minister makes statement. No voting.',
        },
        {
            term: 'Cut Motions',
            definition: 'During Budget: Disapproval of demand for grant. Policy Cut (disapprove policy). Economy Cut (reduce amount). Token Cut (express grievance). If passed, government must resign.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-22-01',
            headline: 'No-Confidence Motion 2023',
            date: 'July-Aug 2023',
            source: 'Lok Sabha',
            teachingHook: 'Opposition moved a No-Confidence Motion to discuss Manipur violence. The PM did not speak during the debate. Motion was defeated. Explain that NCM does not require grounds to be stated (unlike Censure Motion).',
            relatedArticles: ['75'],
        },
    ],

    comparisonTable: {
        title: 'No-Confidence vs Censure Motion',
        columnAHeader: 'No-Confidence Motion',
        columnBHeader: 'Censure Motion',
        rows: [
            { aspect: 'Against', columnA: 'Entire Council of Ministers', columnB: 'Individual Minister or entire Cabinet' },
            { aspect: 'Reasons', columnA: 'Need not state specific reasons', columnB: 'Specific reasons must be given' },
            { aspect: 'If Passed', columnA: 'Government must resign', columnB: 'No obligation to resign' },
            { aspect: 'Article', columnA: 'Art 75 (Collective responsibility)', columnB: 'Rule of Procedure' },
        ],
    },

    prelimsPointers: [
        { fact: 'Quorum: 1/10th of total membership', category: 'Article', highlight: true },
        { fact: 'Speaker has casting vote only (no regular vote)', category: 'Article' },
        { fact: 'No-Confidence: Against entire Cabinet, no reasons needed', category: 'Article', highlight: true },
        { fact: 'Censure Motion: Specific reasons needed, no resignation required', category: 'Article' },
        { fact: 'Adjournment Motion: Only in LS, urgent matters', category: 'Article' },
        { fact: 'Calling Attention: Indian innovation (1954)', category: 'Article' },
        { fact: 'Cut Motions: Policy Cut, Economy Cut, Token Cut (Budget)', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
