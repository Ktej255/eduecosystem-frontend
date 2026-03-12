// Topic 42: Tribunals
// Art 323A, 323B, Administrative Tribunals, NGT, NCLT

import { PolityTopic } from '../polity-types';

export const topic42Tribunals: PolityTopic = {
    id: 42,
    module: 'VIII',
    title: 'Tribunals',
    syllabusTag: 'Module VIII: Special Provisions',

    staticFocus: 'Art 323A (Administrative), Art 323B (Other Tribunals), Key Tribunals',

    coreArticles: [
        { number: '323A', title: 'Administrative Tribunals', description: 'Parliament may provide for tribunals for service matters of Union/State employees. Excludes Supreme Court\'s jurisdiction, not HC\'s (L. Chandra Kumar).' },
        { number: '323B', title: 'Tribunals for Other Matters', description: 'Parliament/State legislature may establish tribunals for: taxation, industrial disputes, land reforms, ceiling, elections to legislatures, food, rent, etc.' },
    ],

    keyConcepts: [
        {
            term: 'Central Administrative Tribunal (CAT)',
            definition: 'Under Administrative Tribunals Act 1985. For Union employees\' service matters. Chairman + Members. Appeal lies to respective HC (L. Chandra Kumar 1997). 18 benches across India.',
        },
        {
            term: 'State Administrative Tribunals (SAT)',
            definition: '17 states have SATs. For state employees. Same structure as CAT. Some states share benches with CAT (Joint CAT).',
        },
        {
            term: 'National Green Tribunal (NGT)',
            definition: 'Under NGT Act 2010. Environmental disputes. Chairperson (SC/HC judge) + judicial/expert members. Binding in India. Appeal to SC within 90 days. 5 benches. Quick disposal mandate (6 months).',
        },
        {
            term: 'National Company Law Tribunal (NCLT)',
            definition: 'Under Companies Act 2013. Company disputes, insolvency (IBC 2016), mergers. President + judicial/technical members. Appeal to NCLAT, then SC.',
        },
        {
            term: 'Armed Forces Tribunal (AFT)',
            definition: 'AFT Act 2007. Service matters of armed forces. Principal bench Delhi. Regional benches. Appeal to SC. Replaced pre-2007 court-martial appeals to HC.',
        },
        {
            term: 'L. Chandra Kumar Case (1997)',
            definition: 'Landmark on tribunals. HC\'s power of judicial review under Art 226/227 cannot be excluded. Tribunals subject to HC superintendence. Art 323A/323B cannot bar HC jurisdiction completely.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-42-01',
            headline: 'Tribunals Reforms Act 2021',
            date: '2021',
            source: 'Parliament',
            teachingHook: 'The Tribunals Reforms Act 2021 was struck down partly by SC (Madras Bar Association 2021) for reducing judicial independence (tenure, appointments). The executive cannot control tribunals. Discuss separation of powers and L. Chandra Kumar.',
            caseReference: 'Madras Bar Association v. Union of India',
            relatedArticles: ['323A', '323B'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 323A: Administrative Tribunals (CAT) for service matters', category: 'Article', highlight: true },
        { fact: 'Art 323B: Tribunals for taxation, land, elections, etc.', category: 'Article' },
        { fact: 'L. Chandra Kumar 1997: HC jurisdiction cannot be excluded', category: 'Case', highlight: true },
        { fact: 'NGT: Under NGT Act 2010, environmental matters, 6-month timeline', category: 'Act', highlight: true },
        { fact: 'NCLT: Company disputes, insolvency (IBC 2016)', category: 'Act' },
        { fact: 'AFT: Armed Forces service matters (AFT Act 2007)', category: 'Act' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
