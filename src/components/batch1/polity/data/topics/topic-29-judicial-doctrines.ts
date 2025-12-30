// Topic 29: Judicial Doctrines
// PIL, Judicial Activism, Review, Curative Petition

import { PolityTopic } from '../polity-types';

export const topic29JudicialDoctrines: PolityTopic = {
    id: 29,
    module: 'E',
    title: 'Judicial Doctrines',
    syllabusTag: 'Module E: The Judiciary',

    staticFocus: 'PIL, Judicial Activism, Judicial Review, Curative Petition',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Public Interest Litigation (PIL)',
            definition: 'Relaxation of locus standi. Any public-spirited person can approach court for public cause. Started by Justices Krishna Iyer & P.N. Bhagwati. Epistolary jurisdiction (letter can be PIL). Hussainara Khatoon (1979) - first major PIL.',
        },
        {
            term: 'Judicial Activism',
            definition: 'Pro-active judicial approach. Courts stepping into legislative/executive domain. Examples: Vishakha guidelines (sexual harassment), Vineet Narain (CBI independence). Criticized as "Judicial Overreach" by some.',
        },
        {
            term: 'Judicial Review',
            definition: 'Power of courts to examine constitutionality of legislative acts and executive orders. Part of Basic Structure (Kesavananda). Art 13, 32, 136, 141, 226, 227 provide basis. Differs from USA (fully explicit) - India\'s is partly explicit.',
        },
        {
            term: 'Judicial Restraint',
            definition: 'Courts should not interfere in policy matters. Legislature is the appropriate forum for lawmaking. S.R. Bommai: Court should not be a "super legislature". Balance between activism and restraint.',
        },
        {
            term: 'Review & Curative Petition',
            definition: 'Review (Art 137): SC can review its own judgment on grounds of error apparent on record, new evidence, etc. Curative Petition: Beyond review, to prevent abuse of process. Last remedy. Decided by senior judges in chambers initially.',
        },
        {
            term: 'Doctrine of Separation of Powers',
            definition: 'Legislature makes law, Executive implements, Judiciary interprets. Not rigid in India (overlap exists). Basic Structure includes separation. Courts cannot legislate but can issue directions till legislature acts.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-29-01',
            headline: 'NEET Paper Leak Case & PIL (2024)',
            date: 'June-July 2024',
            source: 'Supreme Court',
            teachingHook: 'Multiple PILs were filed seeking cancellation of NEET-UG 2024 due to paper leak allegations. The SC examined evidence and decided against cancellation. Discuss the scope of PIL and when courts should exercise "judicial restraint" vs "judicial activism".',
            relatedArticles: ['32', '136'],
        },
        {
            id: 'ca-29-02',
            headline: 'Curative Petition in Adivasi Land Rights (Oct 2024)',
            date: 'Oct 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC heard a Curative Petition in a tribal land rights case after a Review Petition was dismissed. Explain the hierarchy: Original Judgment → Review (Art 137) → Curative Petition (exceptional).',
            relatedArticles: ['137'],
        },
    ],

    comparisonTable: {
        title: 'Review vs Curative Petition',
        columnAHeader: 'Review (Art 137)',
        columnBHeader: 'Curative Petition',
        rows: [
            { aspect: 'Basis', columnA: 'Error on record, new evidence', columnB: 'Abuse of process, gross miscarriage of justice' },
            { aspect: 'Filing', columnA: 'Within 30 days of judgment', columnB: 'No time limit (but expeditious)' },
            { aspect: 'Heard by', columnA: 'Same bench generally', columnB: 'Senior judges (initially in chambers)' },
            { aspect: 'Rarity', columnA: 'More common', columnB: 'Very rare, last remedy' },
        ],
    },

    prelimsPointers: [
        { fact: 'PIL: Relaxation of locus standi, public-spirited person can file', category: 'Case', highlight: true },
        { fact: 'Hussainara Khatoon 1979: First major PIL case (undertrial prisoners)', category: 'Case' },
        { fact: 'Vishakha Guidelines 1997: Judicial activism on sexual harassment', category: 'Case', highlight: true },
        { fact: 'Art 137: SC can review its own judgments', category: 'Article' },
        { fact: 'Curative Petition: Beyond review, last remedy, abuse of process ground', category: 'Article', highlight: true },
        { fact: 'Judicial Review: Part of Basic Structure (Kesavananda)', category: 'Case', highlight: true },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
