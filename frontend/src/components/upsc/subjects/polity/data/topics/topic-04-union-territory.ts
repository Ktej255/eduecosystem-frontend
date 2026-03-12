// Topic 4: Union & Its Territory + Special Provisions
// Articles 1-4, State Reorganization, Article 371 Series

import { PolityTopic } from '../polity-types';

export const topic04UnionTerritory: PolityTopic = {
    id: 4,
    module: 'I',
    title: 'Union & Its Territory',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Articles 1-4, State Reorganization, & Article 371 Series (Special Provisions)',

    coreArticles: [
        { number: '1', title: 'Name and Territory of the Union', description: '"India, that is Bharat, shall be a Union of States." Territory = States + UTs + Acquired territories' },
        { number: '2', title: 'Admission/Establishment of New States', description: 'Parliament can admit new states or establish new states by law (Simple Majority)' },
        { number: '3', title: 'Formation/Alteration of States', description: 'Parliament can: (a) Form new state, (b) Increase area, (c) Diminish area, (d) Alter boundaries, (e) Alter name. Requires: Presidential recommendation + State legislature view (not binding)' },
        { number: '4', title: 'Consequential Provisions', description: 'Laws made under Art 2 & 3 not deemed Constitutional Amendments. Can modify First & Fourth Schedules' },
    ],

    keyConcepts: [
        {
            term: '"Union" not "Federation"',
            definition: 'Dr. Ambedkar said: India is not a federation by agreement, States have no right to secede. The term "Union" was deliberately chosen (like USSR model).',
        },
        {
            term: 'States Reorganization Act, 1956',
            definition: 'Based on Fazal Ali Commission (1953). Created 14 States and 6 UTs. Followed linguistic principle.',
        },
        {
            term: 'Major State Reorganizations',
            definition: '1960: Bombay → Maharashtra + Gujarat. 1966: Punjab → Punjab + Haryana + Chandigarh (to HP). 2000: Chhattisgarh (from MP), Uttarakhand (from UP), Jharkhand (from Bihar). 2014: Telangana (from Andhra Pradesh). 2019: J&K reorganized into 2 UTs.',
        },
        {
            term: 'Jammu & Kashmir Reorganization (2019)',
            definition: 'Art 370 read with Art 367 interpreted to allow President to amend. J&K reorganized into: (1) UT of J&K with Legislature, (2) UT of Ladakh without Legislature. Art 370 abrogated by Presidential Order.',
        },
        {
            term: 'Article 371 Series (Special Provisions)',
            definition: 'Art 371: Maharashtra, Gujarat. Art 371-A: Nagaland (customary law). Art 371-B: Assam (tribal areas). Art 371-C: Manipur (Hill Areas). Art 371-D/E: Andhra Pradesh (safeguards). Art 371-F: Sikkim. Art 371-G: Mizoram. Art 371-H: Arunachal Pradesh. Art 371-I: Goa. Art 371-J: Karnataka (Hyderabad-Karnataka).',
        },
        {
            term: 'Ceding Territory',
            definition: 'Berubari Union Case (1960): Ceding territory requires Constitutional Amendment under Art 368. But acquiring territory can be done under Art 2.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-04-01',
            headline: 'Ladakh\'s Demand for Statehood & 6th Schedule (2024-25)',
            date: '2024-25',
            source: 'The Hindu / Indian Express',
            teachingHook: 'Massive protests in Leh/Kargil (Sonam Wangchuk\'s climate fast) demanding full Statehood and inclusion in the 6th Schedule. The Centre proposed "Article 371-like" protections instead. Explain the difference between UT (Art 239), 6th Schedule (Tribal Areas), and Article 371 (Special Provisions for jobs/land).',
            relatedArticles: ['239', '371', '244'],
        },
        {
            id: 'ca-04-02',
            headline: 'Katchatheevu Island Controversy (April 2024)',
            date: 'April 2024',
            source: 'PIB / Ministry of External Affairs',
            teachingHook: 'Before the Lok Sabha elections, the PM and MEA raised the issue of Katchatheevu island ceded to Sri Lanka in 1974. Discuss Article 1(3)(c) (Acquire/Cede territory) and the Berubari Union case (Is a Constitutional Amendment needed to cede territory?).',
            relatedArticles: ['1', '368'],
            caseReference: 'Berubari Union Case (1960)',
        },
        {
            id: 'ca-04-03',
            headline: '"India, that is Bharat" (Article 1) Debate',
            date: '2023-24',
            source: 'Indian Express / NCERT Reports',
            teachingHook: 'G20 invitations used "President of Bharat," and the NCERT panel recommended using "Bharat" in textbooks. Analyze Article 1 – why the Constituent Assembly chose "India, that is Bharat."',
            relatedArticles: ['1'],
        },
    ],

    prelimsPointers: [
        { fact: 'Article 1: "India, that is Bharat, shall be a Union of States"', category: 'Article', highlight: true },
        { fact: 'Art 2: Admit new states (Simple Majority)', category: 'Article' },
        { fact: 'Art 3: Formation of new states (President recommends, State Legislature views NOT binding)', category: 'Article', highlight: true },
        { fact: 'States Reorganization Act 1956: Fazal Ali Commission, linguistic basis', category: 'Act', highlight: true },
        { fact: '2000: Chhattisgarh, Uttarakhand, Jharkhand formed', category: 'Year' },
        { fact: '2014: Telangana (29th State, from Andhra Pradesh)', category: 'Year' },
        { fact: '2019: J&K split into 2 UTs (J&K with Legislature, Ladakh without)', category: 'Year', highlight: true },
        { fact: 'Art 371-A: Nagaland (customary law and land rights)', category: 'Article' },
        { fact: 'Berubari Case: Constitutional Amendment needed to cede territory', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
