// Topic 17: President & Governor - I
// Election, Qualifications, Oath, Conditions of Office

import { PolityTopic } from '../polity-types';

export const topic17PresidentGovernor1: PolityTopic = {
    id: 17,
    module: 'III',
    title: 'President & Governor - I',
    syllabusTag: 'Module III: The Executive',

    staticFocus: 'Election, Qualifications, Oath, Conditions, & Term',

    coreArticles: [
        { number: '52', title: 'President of India', description: 'There shall be a President of India.' },
        { number: '54', title: 'Election of President', description: 'Electoral College: Elected MPs of both Houses + Elected MLAs of all states + Elected members of Delhi and Puducherry assemblies.' },
        { number: '55', title: 'Manner of Election', description: 'Proportional representation by single transferable vote. Value of vote calculated to ensure parity between states and uniformity between state and centre.' },
        { number: '56', title: 'Term of Office', description: '5 years from date of entering office. Continues till successor enters. Can resign to VP. Removal by impeachment.' },
        { number: '155', title: 'Appointment of Governor', description: 'Governor appointed by the President (on advice of Union Cabinet). Holds office during pleasure of President.' },
        { number: '157', title: 'Qualifications for Governor', description: 'Citizen of India. 35 years of age. Not hold office of profit. Not member of Parliament or State Legislature.' },
    ],

    keyConcepts: [
        {
            term: 'President\'s Electoral College',
            definition: 'Only ELECTED members: MPs of both Houses + MLAs of all states + Delhi + Puducherry MLAs. Nominated members and MLCs NOT included. Value of vote ensures equality between states and Centre.',
        },
        {
            term: 'President\'s Qualifications (Art 58)',
            definition: 'Citizen of India. 35 years of age. Qualified for Lok Sabha membership. Not hold office of profit. Not member of Parliament or any State Legislature.',
        },
        {
            term: 'Governor\'s Appointment',
            definition: 'Art 155-156: Appointed by President. No fixed term (holds during pleasure). In practice, 5-year convention. Sarkaria: Should be eminent person, from outside state, consult CM before appointment.',
        },
        {
            term: 'Oath of Office (Art 60/159)',
            definition: 'President/Governor swear to preserve, protect, defend Constitution. Administered by Chief Justice of India (President) or High Court CJ (Governor).',
        },
        {
            term: 'Impeachment of President (Art 61)',
            definition: 'Started in either House by 1/4th members. 14 days notice. Passed by 2/3rd majority. Then other House investigates. If 2/3rd of other House agrees, President removed. Only ground: "Violation of the Constitution".',
        },
        {
            term: 'Removal of Governor',
            definition: 'No fixed procedure. President can remove anytime (pleasure doctrine). B.P. Singhal case (2010): Must have valid reason, cannot be arbitrary. Floor test if doubt about majority.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-17-01',
            headline: 'One Nation One Election & Tenure (2024)',
            date: 'March 2024',
            source: 'Kovind Committee Report',
            teachingHook: 'The ONOE proposal recommends synchronizing state assembly terms with Lok Sabha. The committee suggested that if an election is held mid-term, the new House will have only the "remainder" term, not a full 5 years. This affects Art 83 and Art 172 (Duration of Houses).',
            relatedArticles: ['83', '172'],
        },
    ],

    comparisonTable: {
        title: 'President vs Governor',
        columnAHeader: 'President',
        columnBHeader: 'Governor',
        rows: [
            { aspect: 'Selection', columnA: 'Elected (Electoral College)', columnB: 'Appointed by President' },
            { aspect: 'Tenure', columnA: '5 years (fixed)', columnB: 'Pleasure of President' },
            { aspect: 'Removal', columnA: 'Impeachment (Art 61)', columnB: 'President can remove anytime' },
            { aspect: 'Age', columnA: '35 years', columnB: '35 years' },
            { aspect: 'Oath by', columnA: 'Chief Justice of India', columnB: 'High Court Chief Justice' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 54: Electoral College - Elected MPs + Elected MLAs + Delhi/Puducherry', category: 'Article', highlight: true },
        { fact: 'Nominated MPs/MLAs and MLCs NOT part of Electoral College', category: 'Article', highlight: true },
        { fact: 'Art 55: Proportional representation by single transferable vote', category: 'Article' },
        { fact: 'Art 61: Impeachment - 1/4th to start, 2/3rd to pass in each House', category: 'Article', highlight: true },
        { fact: 'Art 155: Governor appointed by President, holds during pleasure', category: 'Article', highlight: true },
        { fact: 'B.P. Singhal 2010: Governor removal cannot be arbitrary', category: 'Case' },
        { fact: 'Oath to President by CJI, Governor by HC Chief Justice', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
