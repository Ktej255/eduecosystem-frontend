// Topic 39: Special Provisions for States
// Art 371, Art 371A-J, Special Status

import { PolityTopic } from '../polity-types';

export const topic39SpecialProvisions: PolityTopic = {
    id: 39,
    module: 'VIII',
    title: 'Special Provisions for States',
    syllabusTag: 'Module VIII: Special Provisions',

    staticFocus: 'Art 371 Series (Special Provisions for NE, Maharashtra, Gujarat, etc.)',

    coreArticles: [
        { number: '371', title: 'Maharashtra & Gujarat', description: 'Special provisions for development boards for Vidarbha, Marathwada, rest of Maharashtra; Saurashtra, Kutch, rest of Gujarat.' },
        { number: '371A', title: 'Nagaland', description: 'Parliament cannot make laws touching religious/social practices, customary law, land ownership without State Assembly consent. Inner Line Permit applies.' },
        { number: '371B', title: 'Assam', description: 'President may provide for constitution of tribal areas committee from MLAs of tribal areas.' },
        { number: '371C', title: 'Manipur', description: 'Committee of MLAs from hill areas to aid Governor. Governor\'s special responsibility for hill areas.' },
        { number: '371D', title: 'Andhra Pradesh', description: 'Equitable opportunities in education, employment for different regions. Special provisions for Telangana and Andhra regions.' },
        { number: '371F', title: 'Sikkim', description: 'Most special provisions. Old laws continue. MLAs elect MP. Special provisions for existing laws.' },
        { number: '371G', title: 'Mizoram', description: 'Similar to Nagaland. Religious, social practices, customary law, land protected. Inner Line Permit.' },
        { number: '371H', title: 'Arunachal Pradesh', description: 'Governor has special responsibility for law and order. No cabinet advice needed for this.' },
        { number: '371J', title: 'Karnataka', description: 'Special provisions for Hyderabad-Karnataka region (6 districts). Development board, reservation in education/employment.' },
    ],

    keyConcepts: [
        {
            term: 'Asymmetric Federalism',
            definition: 'Unequal treatment of states based on historical, cultural, or strategic reasons. Art 371 series provides different levels of protection. Some states have more autonomy than others.',
        },
        {
            term: 'Inner Line Permit (ILP)',
            definition: 'System requiring outsiders to get permit to enter. Applicable in: Arunachal Pradesh, Nagaland, Mizoram, Manipur (added 2019). Based on Bengal Eastern Frontier Regulation 1873. Protects indigenous culture.',
        },
        {
            term: 'Article 370 (Abrogated)',
            definition: 'Special status for J&K. Abrogated by Presidential Order Aug 5, 2019. Art 35A (special residents) also went. State bifurcated into J&K (UT with legislature) and Ladakh (UT without). SC upheld in Dec 2023.',
        },
        {
            term: '6th Schedule',
            definition: 'Autonomous Districts and Autonomous Regions in Assam, Meghalaya, Tripura, Mizoram. District Councils and Regional Councils with legislative, executive, judicial powers over tribal areas.',
        },
        {
            term: '5th Schedule',
            definition: 'Scheduled Areas (other than NE). Governor has special powers. Tribes Advisory Council. Governor can modify central/state laws for these areas. PESA applies to 5th Schedule areas.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-39-01',
            headline: 'Article 370 Verdict (Dec 2023)',
            date: 'Dec 2023',
            source: 'Supreme Court',
            teachingHook: 'A 5-judge SC bench unanimously upheld the abrogation of Art 370. Key holdings: (1) J&K had no residual sovereignty after accession, (2) Art 370 was temporary, (3) Conversion to UT is temporary pending elections. Link this to the broader discussion on Special Status and Federalism.',
            caseReference: 'In Re: Article 370',
            relatedArticles: ['370', '1', '3'],
        },
        {
            id: 'ca-39-02',
            headline: 'Ladakh\'s Demand for 6th Schedule',
            date: '2024',
            source: 'Media / MHA',
            teachingHook: 'Ladakh (UT without legislature) demands inclusion under the 6th Schedule or some form of autonomy to protect tribal culture and land. Discuss the difference between 5th Schedule (mainland tribal areas) and 6th Schedule (NE tribal areas).',
            relatedArticles: ['371'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 371A (Nagaland): Religious, customary law, land protected', category: 'Article', highlight: true },
        { fact: 'Art 371F (Sikkim): Most special provisions, merger treaty protection', category: 'Article' },
        { fact: 'Inner Line Permit: Arunachal, Nagaland, Mizoram, Manipur (2019)', category: 'Article', highlight: true },
        { fact: 'Art 370 abrogated Aug 5, 2019; upheld by SC Dec 2023', category: 'Case', highlight: true },
        { fact: '6th Schedule: Autonomous Districts in Assam, Meghalaya, Tripura, Mizoram', category: 'Article', highlight: true },
        { fact: '5th Schedule: Scheduled Areas, TAC, Governor powers', category: 'Article' },
        { fact: 'Art 371J: Hyderabad-Karnataka region (6 districts)', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
