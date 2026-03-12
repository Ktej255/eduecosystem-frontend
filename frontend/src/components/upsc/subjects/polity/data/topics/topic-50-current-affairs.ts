// Topic 50: Current Affairs Compilation (2024-25)
// Major Constitutional Developments

import { PolityTopic } from '../polity-types';

export const topic50CurrentAffairs: PolityTopic = {
    id: 50,
    module: 'IX',
    title: 'Constitutional CA Compilation 2024-25',
    syllabusTag: 'Module IX: Governance',

    staticFocus: 'Major Constitutional & Polity Developments (Jan 2024 - May 2025)',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Electoral Bonds Verdict (Feb 2024)',
            definition: 'SC struck down Electoral Bonds as violating Art 19(1)(a). SBI disclosed data. Revealed corporate donations and timing with investigations. Most significant polity judgment.',
        },
        {
            term: 'SC/ST Sub-classification (Aug 2024)',
            definition: '7-judge bench allowed states to sub-classify within SC/ST for reservation. Overruled E.V. Chinnaiah (2004). Creamy Layer debate for SC/ST opened.',
        },
        {
            term: 'Article 370 Verdict (Dec 2023)',
            definition: 'SC upheld abrogation. J&K had no residual sovereignty. Art 370 was temporary. Conversion to UT is temporary. Elections ordered.',
        },
        {
            term: 'Bulldozer Justice Guidelines (Nov 2024)',
            definition: 'SC laid down pan-India guidelines against punitive demolitions. Executive cannot be judge. Due process mandatory. Art 21 violation otherwise.',
        },
        {
            term: 'CEC Appointment Law (March 2024)',
            definition: 'Parliament changed selection committee to PM + Cabinet Minister + CJI (removed LoP). Overrode SC\'s Anoop Baranwal direction. Pending challenge.',
        },
        {
            term: 'ONOE Bill (Dec 2024)',
            definition: 'Constitution (129th Amendment) Bill introduced. Simultaneous elections for LS and states. Referred to JPC. Would amend Art 83, 172.',
        },
        {
            term: 'AMU Minority Status (Nov 2024)',
            definition: 'SC overruled Azeez Basha (1967). Institution by statute can be minority institution. Test is who established and purpose.',
        },
        {
            term: 'Article 39(b) Verdict (Nov 2024)',
            definition: '9-judge bench on "material resources of community". Not every private property is material resource. Art 31C validity upheld.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-50-01',
            headline: 'UPSC 2025-26: Top Constitutional Issues',
            date: '2024-25',
            source: 'Compilation',
            teachingHook: 'For UPSC Prelims/Mains 2025-26, focus on: (1) Electoral Bonds, (2) SC/ST Sub-classification, (3) Art 370, (4) Bulldozer Justice, (5) CEC Appointment, (6) ONOE, (7) AMU, (8) Art 39(b). These 8 topics cover most expected questions.',
        },
    ],

    comparisonTable: {
        title: 'Top 2024-25 Constitutional Judgments',
        columnAHeader: 'Case',
        columnBHeader: 'Key Holding',
        rows: [
            { aspect: 'Electoral Bonds', columnA: 'Feb 2024', columnB: 'Struck down, violates Art 19(1)(a)' },
            { aspect: 'SC/ST Sub-classification', columnA: 'Aug 2024', columnB: 'States can sub-classify for reservation' },
            { aspect: 'Bulldozer Justice', columnA: 'Nov 2024', columnB: 'Due process mandatory, Art 21' },
            { aspect: 'AMU Minority', columnA: 'Nov 2024', columnB: 'Statute-created can be minority institution' },
            { aspect: 'Art 39(b)', columnA: 'Nov 2024', columnB: 'Not all private property is material resource' },
        ],
    },

    prelimsPointers: [
        { fact: 'Electoral Bonds Feb 2024: Struck down, Art 19(1)(a)', category: 'Case', highlight: true },
        { fact: 'SC/ST Sub-classification Aug 2024: States can sub-classify', category: 'Case', highlight: true },
        { fact: 'Art 370 Dec 2023: Upheld abrogation, elections ordered', category: 'Case', highlight: true },
        { fact: 'Bulldozer Justice Nov 2024: Due process, Art 21', category: 'Case', highlight: true },
        { fact: 'CEC Appointment 2024: PM + Minister + CJI (no LoP)', category: 'Act', highlight: true },
        { fact: 'ONOE Bill 2024: Referred to JPC, amends Art 83/172', category: 'Year', highlight: true },
        { fact: 'AMU Nov 2024: Overruled Azeez Basha 1967', category: 'Case', highlight: true },
        { fact: 'Art 39(b) Nov 2024: 9-judge bench, Property rights', category: 'Case', highlight: true },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
