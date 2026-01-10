// Topic 37: CIC, Lokpal & Lokayuktas
// RTI Act 2005, Lokpal & Lokayuktas Act 2013

import { PolityTopic } from '../polity-types';

export const topic37CICLokpal: PolityTopic = {
    id: 37,
    module: 'VII',
    title: 'CIC, Lokpal & Lokayuktas',
    syllabusTag: 'Module VII: Constitutional Bodies',

    staticFocus: 'RTI Act 2005 (CIC) & Lokpal and Lokayuktas Act 2013',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Right to Information Act, 2005',
            definition: 'Operationalizes Art 19(1)(a). All citizens can request information from "public authorities". PIO must respond in 30 days. 10 exemptions under Section 8. Applies to Centre, States, local bodies, PSUs.',
        },
        {
            term: 'Central Information Commission',
            definition: 'Statutory body under RTI Act. Chief IC + 10 ICs max. Appointed by President on committee recommendation (PM, LoP, Cabinet Minister). Hears appeals from public authorities.',
        },
        {
            term: 'Section 8 Exemptions (RTI)',
            definition: 'No information if: affects sovereignty/security, cabinet papers, fiduciary relationship, personal safety, investigation, foreign govt info, cabinet deliberations, trade secrets. Section 8(2): Can override if public interest outweighs harm.',
        },
        {
            term: 'Lokpal (Centre)',
            definition: 'Lokpal & Lokayuktas Act 2013. Chairperson + 8 members (50% judicial). Jurisdiction: PM (with exceptions), Union Ministers, MPs, Group A-D officers. Can initiate inquiry, file chargesheets.',
        },
        {
            term: 'Lokayuktas (States)',
            definition: 'Each state to establish per Act. Varies by state. Some states had before 2013 (Karnataka 1985). CM, Ministers, Legislators, officers under jurisdiction. Powers vary.',
        },
        {
            term: 'First Lokpal',
            definition: 'Justice Pinaki Chandra Ghose (March 2019). 8 members appointed. PM under jurisdiction but with safeguards (2/3rd Lokpal bench must agree, no sensitive matters).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-37-01',
            headline: 'RTI Amendment Debate (2024)',
            date: '2024',
            source: 'Media / PRS',
            teachingHook: 'The 2019 RTI Amendment allowed Centre to fix IC tenures/salaries (earlier parity with Election Commissioner). Critics claimed this reduced independence. Discuss the balance between transparency (Art 19(1)(a)) and exemptions (Section 8).',
            relatedArticles: ['19(1)(a)'],
        },
    ],

    comparisonTable: {
        title: 'Lokpal vs Lokayukta',
        columnAHeader: 'Lokpal (Centre)',
        columnBHeader: 'Lokayukta (State)',
        rows: [
            { aspect: 'Jurisdiction', columnA: 'PM, Ministers, MPs, Officers', columnB: 'CM, Ministers, MLAs, Officers' },
            { aspect: 'Establishment', columnA: '2013 Act, First 2019', columnB: 'Varies by state' },
            { aspect: 'PM Coverage', columnA: 'Yes (with safeguards)', columnB: 'CM covered in most' },
            { aspect: 'Composition', columnA: 'Chairperson + 8 (50% judicial)', columnB: 'Varies' },
        ],
    },

    prelimsPointers: [
        { fact: 'RTI Act 2005: Operationalizes Art 19(1)(a)', category: 'Act', highlight: true },
        { fact: 'CIC: Chief IC + 10 ICs max, statutory body', category: 'Act' },
        { fact: 'Section 8: 10 exemptions to RTI (sovereignty, security, cabinet, etc.)', category: 'Act' },
        { fact: 'Lokpal Act 2013: First Lokpal Justice P.C. Ghose (2019)', category: 'Act', highlight: true },
        { fact: 'PM under Lokpal with safeguards (2/3rd bench, no sensitive matters)', category: 'Act' },
        { fact: 'Karnataka: First state to establish Lokayukta (1985)', category: 'Act' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
