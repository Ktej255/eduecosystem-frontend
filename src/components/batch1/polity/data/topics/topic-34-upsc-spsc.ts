// Topic 34: UPSC & SPSC
// Art 315-323, Civil Services

import { PolityTopic } from '../polity-types';

export const topic34UPSCSPSC: PolityTopic = {
    id: 34,
    module: 'G',
    title: 'UPSC & State PSCs',
    syllabusTag: 'Module G: Constitutional Bodies',

    staticFocus: 'UPSC (Art 315-323), SPSCs, & Independence of Civil Services',

    coreArticles: [
        { number: '315', title: 'Union/State PSC', description: 'There shall be a UPSC for the Union and SPSC for each state. Joint PSC for 2+ states by Parliament law.' },
        { number: '316', title: 'Appointment of Members', description: 'Chairman and members appointed by President (UPSC) / Governor (SPSC). 1/2 members should have 10 years govt service experience.' },
        { number: '317', title: 'Removal of Members', description: 'President can remove on grounds of misbehaviour (after SC inquiry) or insolvency/unsound mind. Automatic removal if interested in govt contracts.' },
        { number: '320', title: 'Functions of UPSC', description: 'Conduct exams for civil services. Advise on recruitment, promotions, disciplinary matters. Consulted on making rules for civil services.' },
        { number: '323', title: 'Reports of UPSC', description: 'Annual report to President. Laid before Parliament with memorandum explaining non-acceptance of any advice.' },
    ],

    keyConcepts: [
        {
            term: 'UPSC Composition',
            definition: 'Chairman + members (usually 9-11, no fixed number). Appointed by President. Term: 6 years or 65 years. 1/2 must have 10 years govt service. Ineligible for govt job after (except higher PSC post).',
        },
        {
            term: 'Civil Services Conduct',
            definition: 'IAS, IPS, IFS recruited by UPSC. Group A and B services. Prelims (Objective) + Mains (Descriptive) + Interview. Based on merit and reservation.',
        },
        {
            term: 'All-India Services (Art 312)',
            definition: 'IAS, IPS, IFS (Indian Forest Service). Created by Parliament with 2/3rd RS majority. Common for Centre and States. Officers can be posted anywhere.',
        },
        {
            term: 'Independence of UPSC',
            definition: 'Security of tenure (removed only after SC inquiry). Fixed salaries (Charged on Consolidated Fund). Cannot hold govt employment after term. Chairman/members can\'t be re-appointed.',
        },
        {
            term: 'Advisory vs Binding',
            definition: 'UPSC is advisory body. Government not bound to accept advice. If advice rejected, must explain to Parliament in annual report memorandum.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-34-01',
            headline: 'Lateral Entry into Civil Services (2024)',
            date: 'Aug 2024',
            source: 'UPSC / DoPT',
            teachingHook: 'UPSC advertised 45 posts for lateral entry into civil services (Joint Secretary, Director level). Controversy over bypassing reservation and UPSC exam. Later, the government asked UPSC to withdraw the advertisement. Discuss Art 16(4) and UPSC\'s role (Art 320).',
            relatedArticles: ['16(4)', '320'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 315: UPSC for Union, SPSC for each State', category: 'Article', highlight: true },
        { fact: 'Art 316: 1/2 members must have 10 years govt service', category: 'Article' },
        { fact: 'Art 317: Removal by President after SC inquiry for misbehaviour', category: 'Article', highlight: true },
        { fact: 'UPSC is advisory, not binding on government', category: 'Article' },
        { fact: 'Art 312: All-India Services created by RS resolution (2/3rd)', category: 'Article', highlight: true },
        { fact: 'Lateral Entry 2024: Withdrawn after reservation controversy', category: 'Year' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
