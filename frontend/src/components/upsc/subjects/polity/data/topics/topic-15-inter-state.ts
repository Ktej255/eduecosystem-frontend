// Topic 15: Inter-State Relations
// Water Disputes, Zonal Councils, Inter-State Council, Full Faith & Credit

import { PolityTopic } from '../polity-types';

export const topic15InterStateRelations: PolityTopic = {
    id: 15,
    module: 'II',
    title: 'Inter-State Relations',
    syllabusTag: 'Module II: System of Government',

    staticFocus: 'Water Disputes, Zonal Councils, Inter-State Council, & Full Faith and Credit Clause',

    coreArticles: [
        { number: '262', title: 'Inter-State Water Disputes', description: 'Parliament can by law provide for adjudication. Parliament can exclude SC\'s jurisdiction. Inter-State Water Disputes Act, 1956.' },
        { number: '263', title: 'Inter-State Council', description: 'President may establish to: (a) inquire into disputes, (b) discuss matters of common interest, (c) make recommendations. Advisory body.' },
        { number: '301', title: 'Freedom of Trade', description: 'Trade, commerce, and intercourse throughout India shall be free. Subject to reasonable restrictions.' },
        { number: '261', title: 'Full Faith and Credit', description: 'Full faith and credit to public acts, records, and judicial proceedings of every state. Final judgments executable throughout India.' },
    ],

    keyConcepts: [
        {
            term: 'Inter-State Water Disputes',
            definition: 'Art 262: Parliament can create tribunals. ISWDA 1956: Tribunal\'s award is final, binding, beyond SC jurisdiction. Major disputes: Cauvery (TN-KA-KL-PY), Krishna (MH-KA-TS-AP), Narmada (MP-GJ-MH-RJ).',
        },
        {
            term: 'Inter-State Council (Art 263)',
            definition: 'Set up in 1990 based on Sarkaria Commission. PM as Chairman. 6 Union Ministers + All CMs + 6 Administrators of UTs. Advisory body. Meets rarely.',
        },
        {
            term: 'Zonal Councils',
            definition: 'Extra-Constitutional (States Reorganisation Act 1956). 5 Zones: Northern, Southern, Eastern, Western, Central. Union Home Minister as Chairman of all. State CMs as members. Discussion forum, no binding power. North-Eastern Council (separate, under NEC Act 1971).',
        },
        {
            term: 'Full Faith and Credit (Art 261)',
            definition: 'Similar to US Constitution. Public acts and records of one state recognized throughout India. Judgments of one HC executable in other states without fresh litigation.',
        },
        {
            term: 'Freedom of Trade (Art 301-307)',
            definition: 'Free trade and commerce throughout India. States cannot impose barriers. Parliament can impose restrictions in public interest. Taxing is not restriction (Atiabari Tea case).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-15-01',
            headline: 'New Inter-State Water Bill (Proposed)',
            date: '2024',
            source: 'Jal Shakti Ministry',
            teachingHook: 'A new bill proposes a Single Permanent Tribunal instead of multiple ad-hoc tribunals. It would speed up dispute resolution. Discuss Art 262 and the exclusion of SC jurisdiction.',
            relatedArticles: ['262'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 262: Parliament can exclude SC jurisdiction on water disputes', category: 'Article', highlight: true },
        { fact: 'ISWDA 1956: Inter-State Water Disputes Act - Tribunals', category: 'Act', highlight: true },
        { fact: 'Art 263: Inter-State Council - Set up in 1990', category: 'Article' },
        { fact: '5 Zonal Councils: Northern, Southern, Eastern, Western, Central', category: 'Act' },
        { fact: 'Home Minister chairs all Zonal Councils', category: 'Article' },
        { fact: 'North-Eastern Council: Separate, under NEC Act 1971', category: 'Act' },
        { fact: 'Art 261: Full Faith and Credit to public acts across states', category: 'Article' },
        { fact: 'Art 301: Freedom of trade, commerce, intercourse', category: 'Article' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
