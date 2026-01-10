// Topic 38: NITI Aayog, NIA, CBI
// Planning, Security & Investigation Agencies

import { PolityTopic } from '../polity-types';

export const topic38NITINIACBl: PolityTopic = {
    id: 38,
    module: 'VII',
    title: 'NITI Aayog, NIA, CBI',
    syllabusTag: 'Module VII: Constitutional Bodies',

    staticFocus: 'NITI Aayog (Planning), NIA (Counter-Terrorism), CBI (Investigation)',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'NITI Aayog (2015)',
            definition: 'Replaced Planning Commission. National Institution for Transforming India. Think tank, not fund allocator. PM as Chairperson. CEO (Secretary rank). Governing Council (CMs, LG). No binding power on states.',
        },
        {
            term: 'NITI Aayog Functions',
            definition: 'Cooperative federalism. Policy research. 15-year vision, 7-year strategy, 3-year action plan. Sustainable Development Goals monitoring. Innovation Mission (Atal Innovation Mission). Aspirational Districts Programme.',
        },
        {
            term: 'Planning Commission (1950-2014)',
            definition: 'Extra-constitutional body. Chaired by PM. Deputy Chairman powerful. Allocated funds. Criticized for being Delhi-centric. Replaced by NITI Aayog for more federal approach.',
        },
        {
            term: 'National Investigation Agency (NIA)',
            definition: 'NIA Act 2008 (after 26/11 Mumbai attacks). Central agency for terror related offences. Can take over cases suo motu. Special courts. State consent not needed for scheduled offences.',
        },
        {
            term: 'Central Bureau of Investigation (CBI)',
            definition: 'Under DSPE Act 1946. Not a constitutional or statutory body (executive resolution). Needs state consent to investigate. "Caged Parrot" (SC observation). Under CVC\'s supervision for anti-corruption.',
        },
        {
            term: 'CBI Director Appointment',
            definition: 'Post Vineet Narain case (1997), appointment by committee: PM + CJI + LoP. Fixed 2-year tenure. Lokpal & Lokayuktas Act 2013 reconfirmed this.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-38-01',
            headline: 'CBI State Consent Withdrawal',
            date: '2024',
            source: 'Media',
            teachingHook: 'Some states (WB, Kerala, Punjab) have withdrawn general consent for CBI. CBI now needs case-by-case central government notification. Discuss the DSPE Act and federalism implications. Can CBI investigate in states without consent?',
        },
        {
            id: 'ca-38-02',
            headline: 'NITI Aayog Aspirational Districts',
            date: '2024',
            source: 'NITI Aayog',
            teachingHook: 'The Aspirational Districts Programme covers 112 backward districts. NITI monitors progress on health, education, infrastructure. Discuss the shift from Planning Commission\'s fund allocation to NITI\'s advisory role.',
        },
    ],

    comparisonTable: {
        title: 'Planning Commission vs NITI Aayog',
        columnAHeader: 'Planning Commission',
        columnBHeader: 'NITI Aayog',
        rows: [
            { aspect: 'Nature', columnA: 'Fund allocator', columnB: 'Think tank, advisory' },
            { aspect: 'Head', columnA: 'PM (Deputy Chairman powerful)', columnB: 'PM (CEO manages)' },
            { aspect: 'Approach', columnA: 'Top-down, Delhi-centric', columnB: 'Cooperative federalism' },
            { aspect: 'States', columnA: 'Had to follow plans', columnB: 'Voluntary cooperation' },
            { aspect: 'Abolished', columnA: '2014', columnB: 'Established 2015' },
        ],
    },

    prelimsPointers: [
        { fact: 'NITI Aayog: Established 2015, replaced Planning Commission', category: 'Year', highlight: true },
        { fact: 'NITI: Think tank, not fund allocator, PM as Chairperson', category: 'Year' },
        { fact: 'NIA Act 2008: Post 26/11, terror cases, no state consent needed', category: 'Act', highlight: true },
        { fact: 'CBI: DSPE Act 1946, needs state consent, "Caged Parrot"', category: 'Act', highlight: true },
        { fact: 'CBI Director: PM + CJI + LoP appoint (Vineet Narain 1997)', category: 'Case' },
        { fact: 'Some states withdrew CBI consent: WB, Kerala, Punjab, others', category: 'Year' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
