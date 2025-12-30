// Topic 49: Important Governance Terms
// Accountability, Coalition, Hung Parliament, Floor Test

import { PolityTopic } from '../polity-types';

export const topic49GovernanceTerms: PolityTopic = {
    id: 49,
    module: 'I',
    title: 'Important Governance Terms',
    syllabusTag: 'Module I: Governance',

    staticFocus: 'Key Terms: Coalition, Hung Parliament, Floor Test, Rule of Law, Separation of Powers',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Coalition Government',
            definition: 'Government formed by alliance of multiple parties. No single party has majority. Common in India since 1989. Requires consensus, coalition dharma. Coalition-era reforms: RTI, NREGA, Food Security Act.',
        },
        {
            term: 'Hung Parliament/Assembly',
            definition: 'No party or pre-poll alliance gets majority. President/Governor uses discretion in inviting PM/CM. Largest party/alliance usually invited first. Floor test to prove majority.',
        },
        {
            term: 'Floor Test',
            definition: 'Test of confidence in legislature. Government must prove majority. Called by Governor/President. Rameshwar Prasad (2006): Governor can order floor test. Shivraj Singh (2020): Governor must call floor test if doubts on majority.',
        },
        {
            term: 'Rule of Law',
            definition: 'Concept by A.V. Dicey. (1) Absence of arbitrary power. (2) Equality before law. (3) Constitution is the source of individual rights. Part of Basic Structure. Courts as guardians.',
        },
        {
            term: 'Separation of Powers',
            definition: 'Legislature makes law, Executive implements, Judiciary interprets. Not rigid in India (overlaps exist). Basic Structure element. Ensures checks and balances.',
        },
        {
            term: 'Constitutional Morality',
            definition: 'B.R. Ambedkar\'s concept. Going beyond text to spirit of Constitution. Restraint in exercise of power. Respect for dissent. Used by SC in Sabarimala, Same-Sex Marriage.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-49-01',
            headline: 'Coalition Government Returns (June 2024)',
            date: 'June 2024',
            source: 'ECI',
            teachingHook: 'For the first time since 2014, no single party crossed 272. The NDA formed government with coalition partners. Discuss Coalition Dharma, S.R. Bommai guidelines, and the President\'s discretion in hung parliament scenarios.',
            relatedArticles: ['75'],
        },
    ],

    prelimsPointers: [
        { fact: 'Coalition era: 1989 onwards, multi-party governments', category: 'Year', highlight: true },
        { fact: 'Floor Test: Governor can order to test majority', category: 'Article', highlight: true },
        { fact: 'Rule of Law: A.V. Dicey, 3 principles, Basic Structure', category: 'Case' },
        { fact: 'Separation of Powers: Not rigid in India, overlaps exist', category: 'Article' },
        { fact: 'Constitutional Morality: B.R. Ambedkar concept', category: 'Case', highlight: true },
        { fact: 'Coalition 2024: First since 2014, NDA coalition', category: 'Year' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
