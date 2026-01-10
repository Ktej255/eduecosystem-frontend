// Topic 46: Issues in Indian Polity - I
// Criminalization, Corruption, Communalism

import { PolityTopic } from '../polity-types';

export const topic46IssuesI: PolityTopic = {
    id: 46,
    module: 'IX',
    title: 'Issues in Indian Polity - I',
    syllabusTag: 'Module IX: Governance',

    staticFocus: 'Criminalization of Politics, Corruption, & Communalism',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Criminalization of Politics',
            definition: 'Entry of people with criminal background into politics. 43% of 17th LS MPs had criminal cases (ADR). Reasons: Muscle power, money power, weak prosecution. Remedies: Fast-track courts, disqualification on framing charges (debated).',
        },
        {
            term: 'ADR Data (2024)',
            definition: 'Association for Democratic Reforms analysis: 46% of 18th Lok Sabha MPs have criminal cases. 29% have serious criminal cases (murder, rape, kidnapping). Increase from 2019 (43%).',
        },
        {
            term: 'SC on Criminalization',
            definition: 'Public Interest Foundation v. UoI (2018): Parties must publish criminal records of candidates. Special courts for MPs/MLAs. SC asked Parliament to enact stricter laws. Ramesh Dalal case: Convicted = disqualified.',
        },
        {
            term: 'Corruption',
            definition: 'Misuse of public office for private gain. Prevention of Corruption Act 1988 (amended 2018). CBI, CVC, Lokpal investigate. TI Corruption Perception Index: India ranked 93/180 (2023).',
        },
        {
            term: 'Anti-Corruption Framework',
            definition: 'Prevention of Corruption Act 1988. CVC (statutory). CBI (DSPE Act). Lokpal (2013 Act). State Lokayuktas. Whistleblowers Protection Act 2014. Benami Transactions Act.',
        },
        {
            term: 'Communalism',
            definition: 'Use of religion for political mobilization. Leads to violence, social division. Remedies: Secular education, strict law enforcement, peace committees, National Integration Council.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-46-01',
            headline: 'Electoral Bonds & Quid Pro Quo (Feb 2024)',
            date: 'Feb 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC struck down Electoral Bonds partly because they enabled "quid pro quo" corruption - companies facing investigations donated anonymously. Link this to broader corruption issues and the need for transparency in political funding.',
            relatedArticles: ['19(1)(a)'],
        },
    ],

    prelimsPointers: [
        { fact: '46% of 18th LS MPs have criminal cases (ADR 2024)', category: 'Year', highlight: true },
        { fact: 'Prevention of Corruption Act: 1988, amended 2018', category: 'Act', highlight: true },
        { fact: 'TI Corruption Index: India 93/180 (2023)', category: 'Year' },
        { fact: 'Public Interest Foundation 2018: Parties must publish criminal records', category: 'Case' },
        { fact: 'Electoral Bonds 2024: Struck down for enabling corruption', category: 'Case', highlight: true },
        { fact: 'Whistle Blowers Protection Act 2014', category: 'Act' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
