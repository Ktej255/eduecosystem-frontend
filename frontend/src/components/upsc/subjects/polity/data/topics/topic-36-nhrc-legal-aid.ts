// Topic 36: NHRC & Legal Aid (NALSA)
// Protection of Human Rights Act, Legal Services Authorities Act

import { PolityTopic } from '../polity-types';

export const topic36NHRCLegalAid: PolityTopic = {
    id: 36,
    module: 'VII',
    title: 'NHRC & Legal Aid (NALSA)',
    syllabusTag: 'Module VII: Constitutional Bodies',

    staticFocus: 'NHRC (PHR Act 1993) & NALSA (LSA Act 1987)',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'NHRC (Protection of Human Rights Act, 1993)',
            definition: 'Statutory body. Chairman: Retired CJI. Members: Retired SC judge, Retired HC CJ, 2 persons with HR knowledge, 3 ex-officio from NCW, NCM, NCSC. Inquires into HR violations. Recommends action. No binding power.',
        },
        {
            term: 'NHRC Functions',
            definition: 'Inquire suo motu or on petition into HR violations. Visit jails for conditions. Review safeguards. Encourage HR research. Spread HR literacy. Cannot inquire into matters 1 year old.',
        },
        {
            term: 'State Human Rights Commission',
            definition: 'PHR Act provides for SHRCs. Chairman: Retired HC CJ. Members: Serving/retired HC judge, persons with HR experience. Similar functions at state level.',
        },
        {
            term: 'NALSA (Legal Services Authorities Act, 1987)',
            definition: 'Implements Art 39A (Equal justice, free legal aid). Patron-in-Chief: CJI. Executive Chairman: SC judge. Provides free legal aid to poor, SC/ST, women, children, disabled, industrial workers, victims of trafficking.',
        },
        {
            term: 'Lok Adalats',
            definition: 'Under LSA Act. Alternative dispute resolution. Compromise and settlement. No court fee. Award is decree of civil court. No appeal. Pre-Litigation Lok Adalat, Regular Lok Adalat, Permanent Lok Adalat (public utility).',
        },
        {
            term: 'Art 39A (DPSP)',
            definition: 'Added by 42nd Amendment. Equal justice and free legal aid. Basis for Legal Services Authorities Act. Ensures economic/other disabilities don\'t prevent access to justice.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-36-01',
            headline: 'NHRC on Manipur Violence (2023-24)',
            date: '2023-24',
            source: 'NHRC Reports',
            teachingHook: 'NHRC gave several recommendations on Manipur ethnic violence. NHRC is a "toothless tiger" - it can only recommend, not enforce. Discuss the limitations of NHRC and why courts are the ultimate resort.',
        },
    ],

    prelimsPointers: [
        { fact: 'NHRC: Statutory body, Chairman is retired CJI', category: 'Act', highlight: true },
        { fact: 'NHRC cannot inquire into matters more than 1 year old', category: 'Act' },
        { fact: 'SHRC Chairman: Retired HC Chief Justice', category: 'Act' },
        { fact: 'Art 39A: Equal justice and free legal aid (42nd Amd)', category: 'Article', highlight: true },
        { fact: 'NALSA: Patron-in-Chief is CJI, implements Art 39A', category: 'Act', highlight: true },
        { fact: 'Lok Adalat: No court fee, award is final (no appeal)', category: 'Act' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
