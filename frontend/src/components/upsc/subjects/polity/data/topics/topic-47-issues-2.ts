// Topic 47: Issues in Indian Polity - II
// Regionalism, Casteism, Secularism

import { PolityTopic } from '../polity-types';

export const topic47IssuesII: PolityTopic = {
    id: 47,
    module: 'IX',
    title: 'Issues in Indian Polity - II',
    syllabusTag: 'Module IX: Governance',

    staticFocus: 'Regionalism, Casteism, & Secularism in Practice',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Regionalism',
            definition: 'Sub-national movements based on language, culture, or region. Positive: Demands for development, identity. Negative: Separatism, violence. Examples: Dravidian movement, demand for smaller states.',
        },
        {
            term: 'Types of Regionalism',
            definition: 'Secessionism (Khalistan, Kashmir). Demand for separate statehood (Vidarbha, Gorkhaland). Inter-state disputes (Kaveri water, border disputes). Sons-of-soil movements.',
        },
        {
            term: 'Casteism in Politics',
            definition: 'Use of caste for political mobilization. Caste-based voting patterns. Caste-based reservation (Mandal politics). OBC consolidation. Sub-classification within SC/ST (2024 verdict).',
        },
        {
            term: 'Secularism (Indian Model)',
            definition: 'Principled distance from all religions, not separation. State can regulate religious practices (Essential Religious Practices doctrine). Positive secularism (supports all religions equally). S.R. Bommai: Secularism is Basic Structure.',
        },
        {
            term: 'Secular vs Theocratic State',
            definition: 'India: No state religion, protects all religions. Pakistan/Iran: Islamic Republic. USA: Strict separation (wall of separation). European: Established churches but liberal policies.',
        },
        {
            term: 'Challenges to Secularism',
            definition: 'Communal politics. Minority appeasement debates. Majority assertion. Personal laws debate (UCC). Temple-mosque disputes. CAA and religious discrimination debates.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-47-01',
            headline: 'SC/ST Sub-classification & Caste Politics (Aug 2024)',
            date: 'Aug 2024',
            source: 'Supreme Court',
            teachingHook: 'The 7-judge bench allowing states to sub-classify SC/STs will reshape caste politics. Different sub-castes will compete for "most backward" status within reservation. This is a new dimension of casteism in politics.',
            relatedArticles: ['14', '16(4)'],
        },
    ],

    prelimsPointers: [
        { fact: 'S.R. Bommai 1994: Secularism is Basic Structure', category: 'Case', highlight: true },
        { fact: 'India follows "Principled Distance" model of secularism', category: 'Article', highlight: true },
        { fact: 'Regionalism: Positive (development) vs Negative (separatism)', category: 'Year' },
        { fact: 'Mandal Commission: 27% OBC reservation, led to caste politics', category: 'Commission' },
        { fact: 'SC/ST Sub-classification 2024: Will reshape caste politics', category: 'Case' },
        { fact: 'UCC debate: Tension between secularism and religious personal laws', category: 'Article' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
