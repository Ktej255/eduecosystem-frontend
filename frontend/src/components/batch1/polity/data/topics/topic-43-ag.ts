// Topic 43: Attorney General & Advocate General
// Art 76, Art 165

import { PolityTopic } from '../polity-types';

export const topic43AGAG: PolityTopic = {
    id: 43,
    module: 'I',
    title: 'Attorney General & Advocate General',
    syllabusTag: 'Module I: Governance',

    staticFocus: 'Attorney General of India (Art 76) & Advocate General of State (Art 165)',

    coreArticles: [
        { number: '76', title: 'Attorney General of India', description: 'Appointed by President. Qualifications: Same as SC judge (5 years HC practice or 10 years advocate or distinguished jurist). Advises GoI on legal matters. Appears for GoI in courts.' },
        { number: '165', title: 'Advocate General of State', description: 'Appointed by Governor. Qualifications: Same as HC judge. Advises State government on legal matters. Appears for State in courts.' },
    ],

    keyConcepts: [
        {
            term: 'Attorney General of India',
            definition: 'Highest law officer of India. Art 76. Advises Union on legal matters. Right to appear in any court. Right to speak in Parliament (no vote). Holds office during pleasure of President. Not full-time, can take private cases.',
        },
        {
            term: 'Functions of AG',
            definition: '(a) Advise GoI on legal matters referred by President. (b) Perform legal duties assigned by President. (c) Discharge functions under Constitution or any law. (d) Appear on behalf of GoI in SC and HCs.',
        },
        {
            term: 'AG\'s Privileges',
            definition: 'Right of audience in all courts in India. Right to speak and take part in Parliament proceedings (Art 88). No voting right. Not subject to LS Speaker\'s authority. Exempt from prosecution except impeachment.',
        },
        {
            term: 'AG vs Solicitor General',
            definition: 'AG: First Law Officer, appointed under Art 76. SG: Second Law Officer, appointed by executive (no constitutional mention). Additional SGs also appointed. SG assists AG, can appear independently.',
        },
        {
            term: 'Advocate General of State',
            definition: 'Art 165. Highest law officer of State. Similar to AG at state level. Advises State, appears in HC. Right to speak in State Legislature (Art 177). No vote.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-43-01',
            headline: 'AG\'s Role in Key Cases (2023-24)',
            date: '2023-24',
            source: 'Supreme Court',
            teachingHook: 'The AG appeared in major cases: Art 370, Electoral Bonds, Same-Sex Marriage. The AG represents the Union\'s official position. Discuss the AG\'s independence vs being the government\'s lawyer. Can AG disagree with the government publicly?',
            relatedArticles: ['76'],
        },
    ],

    comparisonTable: {
        title: 'Attorney General vs Advocate General',
        columnAHeader: 'AG of India (Art 76)',
        columnBHeader: 'Advocate General (Art 165)',
        rows: [
            { aspect: 'Appointment', columnA: 'By President', columnB: 'By Governor' },
            { aspect: 'Qualifications', columnA: 'Same as SC Judge', columnB: 'Same as HC Judge' },
            { aspect: 'Tenure', columnA: 'Pleasure of President', columnB: 'Pleasure of Governor' },
            { aspect: 'Private Practice', columnA: 'Allowed', columnB: 'Allowed' },
            { aspect: 'Salary', columnA: 'Not fixed, fees-based', columnB: 'Not fixed, fees-based' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 76: AG appointed by President, qualifications same as SC Judge', category: 'Article', highlight: true },
        { fact: 'AG holds office during pleasure of President (no fixed tenure)', category: 'Article' },
        { fact: 'AG can speak in Parliament (Art 88) but cannot vote', category: 'Article', highlight: true },
        { fact: 'AG can take private cases (not full-time govt employee)', category: 'Article' },
        { fact: 'Art 165: Advocate General appointed by Governor for State', category: 'Article' },
        { fact: 'Solicitor General: No constitutional mention, executive appointment', category: 'Article' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
