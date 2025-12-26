// Topic 31: Municipalities & Cooperatives
// 74th Amendment, 97th Amendment

import { PolityTopic } from '../polity-types';

export const topic31Municipalities: PolityTopic = {
    id: 31,
    module: 'F',
    title: 'Municipalities & Cooperatives',
    syllabusTag: 'Module F: Grassroots Democracy',

    staticFocus: '74th Amendment (Municipalities) & 97th Amendment (Cooperatives)',

    coreArticles: [
        { number: '243P', title: 'Definitions', description: 'Defines Municipality (Nagar Panchayat, Municipal Council, Municipal Corporation), ward, etc.' },
        { number: '243Q', title: 'Constitution of Municipalities', description: 'States shall constitute: Nagar Panchayat (transition area), Municipal Council (small urban), Municipal Corporation (large urban).' },
        { number: '243T', title: 'Reservation of Seats', description: 'Similar to Panchayats: SC/ST in proportion, 1/3rd for women. OBC as per state law.' },
        { number: '243W', title: 'Powers of Municipalities', description: 'State may endow powers for 18 subjects in 12th Schedule.' },
        { number: '243ZH', title: 'Cooperatives (Definitions)', description: 'Added by 97th Amendment. Defines cooperative society.' },
        { number: '243ZI', title: 'Incorporation of Cooperatives', description: 'Citizens have right to form cooperatives. State shall ensure democratic functioning.' },
    ],

    keyConcepts: [
        {
            term: '74th Amendment (1992)',
            definition: 'Added Part IXA (Art 243P-243ZG). Came into force on June 1, 1993. Three types of municipalities. 12th Schedule (18 functions). 5-year term, reservation, SEC, SFC provisions similar to 73rd.',
        },
        {
            term: '12th Schedule',
            definition: '18 subjects for Municipalities. Includes: Urban planning, regulation of land-use, roads & bridges, water supply, public health, slum improvement, urban poverty alleviation, parks, vital statistics, urban amenities.',
        },
        {
            term: 'Three Types of Municipalities',
            definition: 'Nagar Panchayat: Rural to urban transition area. Municipal Council: Small urban area. Municipal Corporation: Large urban area. Constitution by state legislature.',
        },
        {
            term: '97th Amendment (2011)',
            definition: 'Added Part IXB (Art 243ZH-243ZT). Right to form cooperatives (Art 19(1)(c) amendment). Cooperative societies as State subject but Part IXB provides framework. Elections, audit, etc.',
        },
        {
            term: 'Cooperative Federalism in Cooperatives',
            definition: 'Multi-state cooperatives: Central law (MSCS Act 2002). State cooperatives: State law. Part IXB provides uniform framework for state cooperatives.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-31-01',
            headline: 'Smart Cities & Municipal Finance',
            date: '2024',
            source: 'MoHUA',
            teachingHook: 'The Smart Cities Mission concluded in 2024. Questions remain on municipal finance and sustainability. Property tax reforms, municipal bonds (Pune, Indore) are alternatives. Discuss 12th Schedule and devolution to ULBs.',
            relatedArticles: ['243W'],
        },
    ],

    comparisonTable: {
        title: '73rd vs 74th Amendment',
        columnAHeader: '73rd (Panchayats)',
        columnBHeader: '74th (Municipalities)',
        rows: [
            { aspect: 'Part Added', columnA: 'Part IX', columnB: 'Part IXA' },
            { aspect: 'Schedule', columnA: '11th (29 subjects)', columnB: '12th (18 subjects)' },
            { aspect: 'In Force', columnA: 'April 24, 1993', columnB: 'June 1, 1993' },
            { aspect: 'Coverage', columnA: 'Rural areas', columnB: 'Urban areas' },
            { aspect: 'Gram Sabha', columnA: 'Foundation', columnB: 'Ward Committee equivalent' },
        ],
    },

    prelimsPointers: [
        { fact: '74th Amendment (1992): Added Part IXA (Art 243P-243ZG)', category: 'Amendment', highlight: true },
        { fact: '12th Schedule: 18 subjects for Municipalities', category: 'Article', highlight: true },
        { fact: '3 Types: Nagar Panchayat, Municipal Council, Municipal Corporation', category: 'Article' },
        { fact: '97th Amendment (2011): Added Part IXB (Cooperatives)', category: 'Amendment', highlight: true },
        { fact: 'Art 19(1)(c) includes right to form cooperatives after 97th Amd', category: 'Amendment' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
