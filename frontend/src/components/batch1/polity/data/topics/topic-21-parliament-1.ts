// Topic 21: Parliament - I
// Composition, Sessions, Speaker, Deputy Speaker

import { PolityTopic } from '../polity-types';

export const topic21Parliament1: PolityTopic = {
    id: 21,
    module: 'IV',
    title: 'Parliament - I: Composition & Officers',
    syllabusTag: 'Module IV: The Legislature',

    staticFocus: 'Composition (LS/RS), Sessions, Speaker, & Deputy Speaker',

    coreArticles: [
        { number: '79', title: 'Parliament', description: 'Parliament = President + Lok Sabha + Rajya Sabha.' },
        { number: '80', title: 'Rajya Sabha', description: 'Max 250 members (238 elected by states/UTs + 12 nominated by President). Elected by MLAs using PR-STV.' },
        { number: '81', title: 'Lok Sabha', description: 'Max 552 members (530 from states + 20 from UTs + 2 Anglo-Indians till 2020). Directly elected by universal adult franchise.' },
        { number: '85', title: 'Sessions', description: 'President summons sessions. Max gap: 6 months between sessions. Prorogation ends session. Dissolution ends LS term.' },
        { number: '93', title: 'Speaker of LS', description: 'Elected by LS from among its members. Vacates if ceases to be member, resigns to Deputy Speaker, or removed by resolution.' },
    ],

    keyConcepts: [
        {
            term: 'Rajya Sabha Composition',
            definition: 'Permanent House, never dissolved. 1/3rd retire every 2 years. Term: 6 years. 238 representatives of states/UTs (elected by MLAs) + 12 nominated (literature, science, art, social service).',
        },
        {
            term: 'Lok Sabha Composition',
            definition: '552 max (530 states + 20 UTs + 2 Anglo-Indians removed in 2020). Term: 5 years (unless dissolved earlier). Direct election by First-Past-The-Post.',
        },
        {
            term: 'Sessions of Parliament',
            definition: 'Budget Session (Feb-May): Longest. Monsoon Session (July-Aug). Winter Session (Nov-Dec). Constitution requires no gap > 6 months. Summoning, Prorogation, Dissolution by President on Cabinet advice.',
        },
        {
            term: 'Speaker\'s Powers',
            definition: 'Presides over LS. Casting vote. Maintains order. Decides Point of Order. Anti-defection decisions. Money Bill certification. Joint sitting presided. Remains in office even after dissolution (till new LS).',
        },
        {
            term: 'Deputy Speaker',
            definition: 'Elected from among LS members. Presides when Speaker absent. Can resign to Speaker. Can be removed by LS resolution (14 days notice, effective majority). By convention, from opposition.',
        },
        {
            term: 'Pro-Tem Speaker',
            definition: 'Temporary Speaker, usually senior-most member. Administers oath to new members. Presides over speaker election. Appointed by President.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-21-01',
            headline: 'Deputy Speaker Not Elected (2024)',
            date: '2024',
            source: 'Lok Sabha News',
            teachingHook: 'For the second consecutive Lok Sabha (17th and 18th), no Deputy Speaker was elected despite constitutional mandate (Art 93). Opposition alleged violation of "constitutional convention" of giving the post to the Opposition. Is this legally enforceable? (No, it\'s a convention, not mandatory legal rule).',
            relatedArticles: ['93'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 79: Parliament = President + LS + RS', category: 'Article', highlight: true },
        { fact: 'RS: Max 250 (238 elected + 12 nominated), never dissolved', category: 'Article', highlight: true },
        { fact: 'LS: Max 552 (Anglo-Indian nomination removed in 2020)', category: 'Article' },
        { fact: 'Session gap: Cannot exceed 6 months', category: 'Article' },
        { fact: 'Speaker decides Money Bill, Anti-defection, presides Joint Sitting', category: 'Article', highlight: true },
        { fact: 'Deputy Speaker: By convention from Opposition (not mandatory)', category: 'Article' },
        { fact: 'No Deputy Speaker elected in 17th and 18th LS (2019-2024 & 2024+)', category: 'Year' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
