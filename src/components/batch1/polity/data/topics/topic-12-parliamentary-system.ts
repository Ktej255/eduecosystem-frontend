// Topic 12: Parliamentary vs Presidential System
// Features, Merits/Demerits, Westminster Model

import { PolityTopic } from '../polity-types';

export const topic12ParliamentarySystem: PolityTopic = {
    id: 12,
    module: 'B',
    title: 'Parliamentary vs Presidential System',
    syllabusTag: 'Module B: System of Government',

    staticFocus: 'Features, Merits/Demerits, & Westminster Model - Why India chose Parliamentary System',

    coreArticles: [
        { number: '74', title: 'Council of Ministers to aid President', description: 'There shall be a Council of Ministers with PM at head to aid and advise the President. President SHALL act according to such advice.' },
        { number: '75', title: 'Other provisions (Ministers)', description: 'PM appointed by President. Other ministers on PM\'s advice. Ministers hold office during pleasure of President. Collective responsibility to Lok Sabha.' },
    ],

    keyConcepts: [
        {
            term: 'Parliamentary System Features',
            definition: 'Nominal and Real Executive (President ceremonial, PM real). Majority party rule. Collective responsibility. Political homogeneity. Double membership (Minister must be MP). Leadership of PM. Dissolution of Lower House.',
        },
        {
            term: 'Presidential System Features',
            definition: 'Single Executive (President both Head of State and Govt). Fixed tenure. No collective responsibility. Separation of powers. Single membership (Cabinet not from legislature). No dissolution power.',
        },
        {
            term: 'Why India Chose Parliamentary System',
            definition: 'Familiarity (heritage of British rule). Accountability over stability. Multi-party accommodation. Diversity representation. Dr. Ambedkar: "Responsibility is the keynote of parliamentary government."',
        },
        {
            term: 'Westminster Model',
            definition: 'British model of parliamentary system. Cabinet government. Prime Ministerial primacy. Party system. Fusion of legislative-executive. Shadow cabinet in opposition.',
        },
        {
            term: 'Merits of Parliamentary System',
            definition: 'Harmony between Executive and Legislature. Responsible government. Prevents despotism. Wide representation. Flexibility (can remove PM anytime).',
        },
        {
            term: 'Demerits of Parliamentary System',
            definition: 'Unstable government (coalition politics). No separation of powers. Unqualified legislators become ministers. Autocracy of Cabinet. Policy discontinuity.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-12-01',
            headline: 'Return of Coalition Government (June 2024)',
            date: 'June 2024',
            source: 'Election Commission of India',
            teachingHook: 'For the first time since 2014, no single party crossed the majority mark (272) in Lok Sabha. The PM was appointed as the leader of a coalition (NDA). Discuss "Coalition Dharma" and the President\'s discretion in appointing the PM in Hung Parliament scenarios (S.R. Bommai guidelines).',
            relatedArticles: ['75'],
        },
    ],

    comparisonTable: {
        title: 'Parliamentary vs Presidential System',
        columnAHeader: 'Parliamentary',
        columnBHeader: 'Presidential',
        rows: [
            { aspect: 'Executive', columnA: 'Dual (Nominal + Real)', columnB: 'Single (President)' },
            { aspect: 'Accountability', columnA: 'To Legislature', columnB: 'To People (elections)' },
            { aspect: 'Tenure', columnA: 'Flexible (no-confidence)', columnB: 'Fixed term' },
            { aspect: 'Powers', columnA: 'Fusion of powers', columnB: 'Separation of powers' },
            { aspect: 'Ministers from', columnA: 'Legislature', columnB: 'Outside legislature' },
            { aspect: 'Example', columnA: 'UK, India', columnB: 'USA, Brazil' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 74: Council of Ministers to aid and advise President', category: 'Article', highlight: true },
        { fact: 'Art 75: PM appointed by President, collective responsibility to LS', category: 'Article', highlight: true },
        { fact: 'India follows Westminster (British) model of Parliamentary system', category: 'Article' },
        { fact: 'Nominal Executive: President; Real Executive: PM', category: 'Article', highlight: true },
        { fact: 'Dr. Ambedkar: "Responsibility is keynote of parliamentary govt"', category: 'Year' },
        { fact: 'Coalition Govt 2024: First time since 2014, no single party majority', category: 'Year' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
