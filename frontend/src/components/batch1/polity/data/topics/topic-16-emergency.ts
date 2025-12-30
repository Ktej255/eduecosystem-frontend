// Topic 16: Emergency Provisions
// National (Art 352), State/President's Rule (Art 356), Financial (Art 360)

import { PolityTopic } from '../polity-types';

export const topic16Emergency: PolityTopic = {
    id: 16,
    module: 'B',
    title: 'Emergency Provisions',
    syllabusTag: 'Module B: System of Government',

    staticFocus: 'National Emergency (Art 352), State Emergency/President\'s Rule (Art 356), & Financial Emergency (Art 360)',

    coreArticles: [
        { number: '352', title: 'National Emergency', description: 'President can proclaim if security of India threatened by war, external aggression, or armed rebellion. Must be approved by both Houses within 1 month by special majority.' },
        { number: '356', title: 'State Emergency (President\'s Rule)', description: 'If President is satisfied (on Governor\'s report or otherwise) that government of State cannot be carried on per Constitution. Max 3 years (6 months at a time).' },
        { number: '360', title: 'Financial Emergency', description: 'If financial stability or credit of India threatened. Never proclaimed. President can direct states to observe canons of financial propriety.' },
        { number: '358', title: 'Suspension of Art 19', description: 'Art 19 automatically suspended during National Emergency. Citizens cannot move courts for enforcement.' },
        { number: '359', title: 'Suspension of other FRs', description: 'President can suspend enforcement of FRs during Emergency. But Art 20 and 21 cannot be suspended (44th Amd).' },
    ],

    keyConcepts: [
        {
            term: 'National Emergency (Art 352)',
            definition: 'Grounds: War, External Aggression, Armed Rebellion (earlier "Internal Disturbance" - changed by 44th Amd). Proclamation needs written advice of Cabinet. Approval by Parliament (special majority) in 1 month. Can continue indefinitely with 6-month renewals.',
        },
        {
            term: 'History of National Emergency',
            definition: '1st: 1962 (China War) - till 1968. 2nd: 1971 (Pakistan War) - till 1977. 3rd: 1975-77 (Internal Emergency by Indira Gandhi). 44th Amendment reforms after 1975 misuse.',
        },
        {
            term: '44th Amendment Safeguards',
            definition: '"Internal Disturbance" changed to "Armed Rebellion". Written Cabinet advice mandatory. Art 20, 21 cannot be suspended. Parliamentary approval in 1 month (earlier 2). Judicial review of proclamation possible.',
        },
        {
            term: 'President\'s Rule (Art 356)',
            definition: 'State government dismissed. President assumes State\'s executive powers. State legislature dissolved/suspended. Governor administers. Parliament makes laws for state. Max 3 years. Judicial review possible (S.R. Bommai).',
        },
        {
            term: 'S.R. Bommai Case (1994)',
            definition: 'Landmark judgment on Art 356. President\'s Rule can be reviewed by courts. Proclamation must be approved by both Houses. Secularism is Basic Structure. Dissolution of Assembly only after Parliament approval. Governor\'s report can be questioned.',
        },
        {
            term: 'Financial Emergency (Art 360)',
            definition: 'Never used in India. President can direct reduction of salaries, impose financial controls. Can direct states to reserve Money Bills. Needs parliamentary approval in 2 months.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-16-01',
            headline: 'Art 356 in Manipur (2023-24)',
            date: '2023-24',
            source: 'Opposition Demands',
            teachingHook: 'Opposition demanded President\'s Rule in Manipur during ethnic violence. Centre refused. Discuss the S.R. Bommai guidelines on when Art 356 should be used (breakdown must be complete, show cause to state).',
            relatedArticles: ['356'],
        },
    ],

    comparisonTable: {
        title: 'Three Types of Emergencies',
        columnAHeader: 'Type',
        columnBHeader: 'Key Features',
        rows: [
            { aspect: 'National (352)', columnA: 'War/Aggression/Armed Rebellion', columnB: 'Centre becomes unitary, Art 19 suspended' },
            { aspect: 'State (356)', columnA: 'Constitutional machinery failure', columnB: 'State govt dismissed, max 3 years' },
            { aspect: 'Financial (360)', columnA: 'Financial instability', columnB: 'Never used, salary cuts possible' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 352: National Emergency - War, External Aggression, Armed Rebellion', category: 'Article', highlight: true },
        { fact: '44th Amd: "Internal Disturbance" changed to "Armed Rebellion"', category: 'Amendment', highlight: true },
        { fact: 'Art 20, 21 cannot be suspended even during Emergency', category: 'Article', highlight: true },
        { fact: '1975-77: Internal Emergency - led to 44th Amendment reforms', category: 'Year', highlight: true },
        { fact: 'Art 356: President\'s Rule - Max 3 years (6 months at a time)', category: 'Article', highlight: true },
        { fact: 'S.R. Bommai 1994: Judicial review of Art 356, Secularism is Basic Structure', category: 'Case', highlight: true },
        { fact: 'Art 360: Financial Emergency - Never proclaimed in India', category: 'Article' },
        { fact: 'Special majority needed for Emergency approval (50% + 2/3rd members)', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
