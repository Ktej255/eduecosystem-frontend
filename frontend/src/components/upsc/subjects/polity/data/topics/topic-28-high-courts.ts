// Topic 28: High Courts
// Composition, Jurisdiction, Independence

import { PolityTopic } from '../polity-types';

export const topic28HighCourts: PolityTopic = {
    id: 28,
    module: 'V',
    title: 'High Courts',
    syllabusTag: 'Module V: The Judiciary',

    staticFocus: 'Composition, Jurisdiction, & Relationship with Subordinate Courts',

    coreArticles: [
        { number: '214', title: 'High Courts for States', description: 'There shall be a High Court for each State. Parliament can establish common HC for two or more states.' },
        { number: '217', title: 'Appointment of Judges', description: 'Appointed by President after consultation with CJI, Governor, and in case of non-CJ, with Chief Justice of that HC.' },
        { number: '226', title: 'Writ Jurisdiction', description: 'HC can issue writs for enforcement of FR AND any other purpose. Wider than SC (Art 32 only for FR).' },
        { number: '227', title: 'Superintendence over Subordinate Courts', description: 'HC has power of superintendence over all courts and tribunals within its territory (except military tribunals).' },
    ],

    keyConcepts: [
        {
            term: 'Composition of HC',
            definition: 'Chief Justice + other judges (no fixed number). Appointed by President on Collegium recommendation (CJI + 2 SC judges + Chief Justice of that HC). Retire at 62 years.',
        },
        {
            term: 'Art 226 vs Art 32',
            definition: 'Art 226 (HC): FR + any other purpose, territorial limit (but can go beyond for cause of action). Art 32 (SC): Only for FR, itself a FR, cannot be suspended.',
        },
        {
            term: 'Original Jurisdiction',
            definition: 'Writ jurisdiction (Art 226). Matters relating to admiralty, probate, matrimonial, contempt. Election petitions. Company law matters.',
        },
        {
            term: 'Appellate Jurisdiction',
            definition: 'Civil: Appeals from district courts. Criminal: Appeals from sessions courts (especially death sentences). Constitutional: Substantial question of law under Constitution.',
        },
        {
            term: 'Common High Courts',
            definition: 'Parliament can establish common HC. Examples: Bombay HC (Goa, Daman), Punjab & Haryana HC (Chandigarh), Gauhati HC (NE states except Tripura, Meghalaya, Manipur which now have own).',
        },
        {
            term: 'Transfer of Judges',
            definition: 'HC judges can be transferred from one HC to another by President after consulting CJI. Consent of judge not required (K. Ashok Reddy case). Compensation paid.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-28-01',
            headline: 'Vacancies in High Courts (2024)',
            date: '2024',
            source: 'Department of Justice',
            teachingHook: 'As of 2024, HCs have ~30% vacancies (over 400 posts). The government and Collegium have clashed over delays in recommendations and approvals. Discuss Article 217 (appointment) and the Three Judges Cases.',
            relatedArticles: ['217'],
        },
    ],

    comparisonTable: {
        title: 'Art 32 vs Art 226',
        columnAHeader: 'Art 32 (SC)',
        columnBHeader: 'Art 226 (HC)',
        rows: [
            { aspect: 'Scope', columnA: 'Only for Fundamental Rights', columnB: 'FR + any other purpose' },
            { aspect: 'Nature', columnA: 'Itself a Fundamental Right', columnB: 'Not a FR' },
            { aspect: 'Suspension', columnA: 'Cannot be suspended (44th Amd)', columnB: 'Can be suspended during Emergency' },
            { aspect: 'Location', columnA: 'No territorial limit', columnB: 'Territorial limit (but relaxed)' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 214: High Court for each State, Parliament can create common HC', category: 'Article', highlight: true },
        { fact: 'Art 217: HC judges appointed by President on Collegium recommendation', category: 'Article' },
        { fact: 'Art 226: HC writ jurisdiction - FR + any other purpose (wider than SC)', category: 'Article', highlight: true },
        { fact: 'Art 227: HC superintendence over subordinate courts', category: 'Article' },
        { fact: 'HC judges retire at 62 years (SC judges at 65)', category: 'Article', highlight: true },
        { fact: 'Common HCs: Bombay (Goa), Punjab & Haryana (Chandigarh)', category: 'Article' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
