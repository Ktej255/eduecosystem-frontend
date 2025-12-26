// Topic 40: Schedules of Constitution
// All 12 Schedules Overview

import { PolityTopic } from '../polity-types';

export const topic40Schedules: PolityTopic = {
    id: 40,
    module: 'H',
    title: 'Schedules of Constitution',
    syllabusTag: 'Module H: Special Provisions',

    staticFocus: 'All 12 Schedules - Overview and Key Provisions',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'First Schedule',
            definition: 'Lists States and UTs. 28 States and 8 UTs (as of 2024). J&K reorganization (2019), Dadra-Daman-Diu merger (2020) updated this schedule.',
        },
        {
            term: 'Second Schedule',
            definition: 'Salaries, allowances, pensions of: Part A - President/Governors. Part B - Omitted. Part C - Speaker/Deputy. Part D - SC/HC Judges, CAG.',
        },
        {
            term: 'Third Schedule',
            definition: 'Forms of oaths/affirmations for: 1. Union Ministers, 2. Candidates for Parliament, 3. MPs, 4. SC/HC Judges, 5. CAG, 6. State Ministers, 7. State Legislature candidates, 8. State Legislators.',
        },
        {
            term: 'Fourth Schedule',
            definition: 'Allocation of seats in Rajya Sabha to States and UTs. Max 250 (238 elected + 12 nominated). UP has most (31), followed by Maharashtra (19).',
        },
        {
            term: 'Fifth Schedule',
            definition: 'Administration of Scheduled Areas and Scheduled Tribes (other than NE). Governor\'s powers, Tribes Advisory Council. PESA applies here.',
        },
        {
            term: 'Sixth Schedule',
            definition: 'Autonomous Districts/Regions in Assam, Meghalaya, Tripura, Mizoram. District Councils with legislative, executive, judicial powers. Art 244(2).',
        },
        {
            term: 'Seventh Schedule',
            definition: 'Division of powers: Union List (100), State List (61), Concurrent List (52). Residuary with Centre (Art 248). Most amended schedule.',
        },
        {
            term: 'Eighth Schedule',
            definition: '22 Official Languages. Originally 14 (1950). Latest: Bodo, Dogri, Maithili, Santhali (92nd Amd 2003). Hindi is official, not national language.',
        },
        {
            term: 'Ninth Schedule',
            definition: 'Laws protected from judicial review (Art 31B). Added by 1st Amendment (1951). Contains 284 laws. I.R. Coelho (2007): Post-1973 laws can be reviewed for Basic Structure violation.',
        },
        {
            term: 'Tenth Schedule',
            definition: 'Anti-Defection Law. Added by 52nd Amendment (1985). Amended by 91st Amendment (2003). Disqualification grounds and merger exception.',
        },
        {
            term: 'Eleventh Schedule',
            definition: '29 subjects for Panchayats. Added by 73rd Amendment (1992). Agriculture, land improvement, education, health, etc.',
        },
        {
            term: 'Twelfth Schedule',
            definition: '18 subjects for Municipalities. Added by 74th Amendment (1992). Urban planning, roads, bridges, water supply, slums, etc.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-40-01',
            headline: 'Demand for 8th Schedule Inclusion',
            date: '2024',
            source: 'Media / Ministry of Home Affairs',
            teachingHook: 'Languages like Bhojpuri, Rajasthani, Tulu are demanding inclusion in the 8th Schedule. What are the benefits? (Official use, Sahitya Akademi recognition, possible civil service exams). Discuss the 22 languages and the amendment process.',
            relatedArticles: ['351'],
        },
    ],

    comparisonTable: {
        title: 'Key Schedules at a Glance',
        columnAHeader: 'Schedule',
        columnBHeader: 'Content',
        rows: [
            { aspect: '1st', columnA: 'States & UTs', columnB: '28 States + 8 UTs' },
            { aspect: '7th', columnA: 'Division of Powers', columnB: 'Union (100) + State (61) + Concurrent (52)' },
            { aspect: '8th', columnA: 'Languages', columnB: '22 Official Languages' },
            { aspect: '9th', columnA: 'Protected Laws', columnB: '284 Laws (post-1973 reviewable)' },
            { aspect: '10th', columnA: 'Anti-Defection', columnB: '52nd Amd (1985)' },
            { aspect: '11th/12th', columnA: 'Local Bodies', columnB: '29 (Panchayat) + 18 (Municipal) subjects' },
        ],
    },

    prelimsPointers: [
        { fact: '12 Schedules in Constitution (originally 8)', category: 'Article', highlight: true },
        { fact: '7th Schedule: Union (100), State (61), Concurrent (52)', category: 'Article', highlight: true },
        { fact: '8th Schedule: 22 languages (last added: Bodo, Dogri, Maithili, Santhali - 2003)', category: 'Article', highlight: true },
        { fact: '9th Schedule: 284 laws, post-1973 reviewable (I.R. Coelho)', category: 'Article', highlight: true },
        { fact: '10th Schedule: Anti-Defection (52nd Amd 1985)', category: 'Amendment' },
        { fact: '11th Schedule: 29 subjects (Panchayats), 12th: 18 subjects (Municipalities)', category: 'Amendment' },
        { fact: 'UP has most RS seats (31), Maharashtra second (19)', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
