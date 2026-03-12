// Topic 2: Making of the Constitution
// Constituent Assembly, Committees, Sources, National Symbols

import { PolityTopic } from '../polity-types';

export const topic02MakingConstitution: PolityTopic = {
    id: 2,
    module: 'I',
    title: 'Making of the Constitution',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Constituent Assembly, Committees, Sources, & National Symbols',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Cabinet Mission Plan (1946)',
            definition: 'Proposed Constituent Assembly of 389 members: 292 from British Provinces + 93 from Princely States + 4 from Chief Commissioners\' Provinces.',
        },
        {
            term: 'First Meeting (Dec 9, 1946)',
            definition: 'Held in Constitution Hall (now Samvidhan Sadan). Dr. Sachchidananda Sinha was Provisional Chairman. Dr. Rajendra Prasad elected President on Dec 11.',
        },
        {
            term: 'Objectives Resolution (Dec 13, 1946)',
            definition: 'Moved by Jawaharlal Nehru. Declared India a sovereign, democratic republic. Became the basis of the Preamble.',
        },
        {
            term: 'Drafting Committee',
            definition: 'Formed on Aug 29, 1947, with 7 members. Chairman: Dr. B.R. Ambedkar. Others: N. Gopalaswami Ayyangar, Alladi Krishnaswami Ayyar, K.M. Munshi, Syed Mohammad Saadulla, N. Madhava Rau (later), T.T. Krishnamachari (later).',
            example: 'Dr. Ambedkar is called "Father/Architect of the Constitution"'
        },
        {
            term: 'Key Committees & Chairmen',
            definition: 'Union Powers: Jawaharlal Nehru. Union Constitution: Jawaharlal Nehru. Provincial Constitution: Sardar Patel. Advisory on FR: Sardar Patel. Steering Committee: Dr. Rajendra Prasad. Rules of Procedure: Dr. Rajendra Prasad.',
        },
        {
            term: 'Sources of Constitution',
            definition: 'Government of India Act 1935 (Federal scheme, powers, Public Service Commissions). British Constitution (Parliamentary system, Rule of Law, Conventions). US Constitution (Fundamental Rights, Judicial Review, President). Irish Constitution (DPSP, Method of President Election). Canadian Constitution (Strong Centre, Residuary powers). Australian Constitution (Concurrent List, Joint Sitting). Weimar Constitution of Germany (Emergency provisions). South African Constitution (Amendment procedure). Japanese Constitution (Procedure established by law).',
        },
        {
            term: 'Timeline',
            definition: 'Started: Dec 9, 1946. Draft ready: Feb 1948. Third reading: Nov 26, 1949 (Adopted). Came into force: Jan 26, 1950. Duration: 2 years, 11 months, 18 days. Sessions: 11. Total days: 165.',
        },
        {
            term: 'National Symbols',
            definition: 'Flag: Adopted July 22, 1947 (Pingali Venkayya). Emblem: Sarnath Lion Capital (Jan 26, 1950). Anthem: "Jana Gana Mana" (Tagore, adopted Jan 24, 1950). Song: "Vande Mataram" (Bankim Chandra). Calendar: Saka Era (March 22, 1957).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-02-01',
            headline: 'New Versions of Constitution Released (Nov 2024)',
            date: 'Nov 2024',
            source: 'PIB (Ministry of Culture)',
            teachingHook: 'The President released the Constitution of India in Sanskrit and Maithili languages during the 75th-anniversary celebrations. Discuss the authoritative text of the Constitution (Article 394A) and the 8th Schedule languages.',
        },
        {
            id: 'ca-02-02',
            headline: 'Bibek Debroy\'s "New Constitution" Debate (Referenced 2024)',
            date: '2024',
            source: 'Mint / Indian Express',
            teachingHook: 'EAC-PM Chairman Bibek Debroy\'s article suggesting India needs a "new Constitution" triggered a debate on the Constituent Assembly\'s mandate vs. modern needs. Discuss the "Sources of the Constitution" – is it a colonial copy (1935 Act) or an original document?',
        },
    ],

    prelimsPointers: [
        { fact: 'Dec 9, 1946: First meeting of Constituent Assembly', category: 'Year', highlight: true },
        { fact: 'Dr. Sachchidananda Sinha: Provisional Chairman', category: 'Year' },
        { fact: 'Dr. Rajendra Prasad: Permanent President of CA', category: 'Year', highlight: true },
        { fact: 'Dr. B.R. Ambedkar: Chairman, Drafting Committee', category: 'Commission', highlight: true },
        { fact: 'Sardar Patel: Advisory Committee on FR & Provincial Constitution', category: 'Commission' },
        { fact: 'Nov 26, 1949: Constitution adopted (Law Day)', category: 'Year', highlight: true },
        { fact: 'Jan 26, 1950: Constitution came into force (Republic Day)', category: 'Year', highlight: true },
        { fact: '2 yrs, 11 months, 18 days: Time taken to draft', category: 'Year' },
        { fact: '70% from GOI Act 1935, DPSP from Irish Constitution', category: 'Act' },
        { fact: 'Pingali Venkayya: Designed National Flag', category: 'Year' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
