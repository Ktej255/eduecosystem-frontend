// Topic 11: Amendment of Constitution
// Article 368 (Procedure), Types of Amendments

import { PolityTopic } from '../polity-types';

export const topic11Amendment: PolityTopic = {
    id: 11,
    module: 'A',
    title: 'Amendment of Constitution',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Procedure (Art 368) & Types of Majorities (Simple, Special, Ratification)',

    coreArticles: [
        { number: '368', title: 'Power and Procedure to Amend', description: 'Bill can be introduced in either House. No prior Presidential assent needed. Must be passed by BOTH Houses. No Joint Sitting for Constitution Amendment Bill. President MUST give assent (no veto). Cannot be challenged in court on any ground (excluding Basic Structure).' },
    ],

    keyConcepts: [
        {
            term: 'Three Types of Amendments',
            definition: '1. Simple Majority (Ordinary legislation process): Art 2, 3, 4, 169, 239A, etc. 2. Special Majority (Art 368): Majority of total membership + 2/3rd of members present and voting in EACH House. 3. Special Majority + Ratification by 50% States: Federal provisions.',
        },
        {
            term: 'Provisions Requiring State Ratification',
            definition: 'Art 54/55 (President election). Art 73/162 (Extent of executive power). Art 124/217/222 (SC/HC). Distribution of powers (7th Schedule). Representation of states in Parliament. Art 368 itself. GST Council matters.',
        },
        {
            term: 'Simple Majority Amendments',
            definition: 'Art 2 (Admission of new states), Art 3 (Formation of states), Art 4 (Schedules), Art 169 (Abolition of Legislative Council), Art 239A (UTs). These are NOT technically "amendments" under Art 368.',
        },
        {
            term: 'Key Constitutional Amendments',
            definition: '1st (1951): Added 9th Schedule. 7th (1956): Linguistic reorganization. 24th (1971): Parliament can amend any part. 25th (1971): Art 31C (DPSP shield). 42nd (1976): Mini-Constitution. 44th (1978): Reversed 42nd. 73rd/74th (1992): Panchayats/Municipalities. 86th (2002): Right to Education. 101st (2016): GST. 103rd (2019): EWS Quota. 105th (2021): State\'s power under Art 342A. 106th (2023): Women\'s Reservation.',
        },
        {
            term: '42nd Amendment (1976)',
            definition: 'Mini-Constitution during Emergency. Added: Preamble words (Socialist, Secular, Integrity), Fundamental Duties, 10 new DPSPs, Primacy of DPSP over FR, Curtailed judicial review. Many provisions reversed by 43rd and 44th Amendments.',
        },
        {
            term: '44th Amendment (1978)',
            definition: 'Reversed 42nd Amendment. Restored: Judicial review, Right to property (moved to Art 300A - legal right), Art 352 (Written Cabinet advice for Emergency), Art 20-21 cannot be suspended. Removed: Right to property as FR.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-11-01',
            headline: 'Nari Shakti Vandan (106th Amendment) Implementation',
            date: '2023-24',
            source: '106th Constitutional Amendment Act',
            teachingHook: 'The 106th Amendment Act (Women\'s Reservation) was passed, but its implementation is linked to the Census and Delimitation (Article 82). Explain the amendment process—why did this require ratification by 50% of states (proviso to Art 368)? (Answer: It affects the representation of states in Parliament).',
            relatedArticles: ['368', '82'],
        },
        {
            id: 'ca-11-02',
            headline: 'Proposed Amendments for ONOE',
            date: 'March 2024',
            source: 'Kovind Panel Recommendations',
            teachingHook: 'The ONOE panel proposed adding Article 82A (Simultaneous Elections) and amending Articles 83, 172, 327. Use this as a case study: Would this new Article require a Simple Majority, Special Majority, or Special Majority + Ratification? (The report suggests a mix - Art 83/172 need ratification).',
            relatedArticles: ['368', '82A', '83', '172'],
        },
    ],

    comparisonTable: {
        title: 'Types of Constitutional Amendments',
        columnAHeader: 'Type',
        columnBHeader: 'Requirement',
        rows: [
            { aspect: 'Simple Majority', columnA: 'Art 2, 3, 4, 169, 239A', columnB: 'Ordinary legislative process (like any law)' },
            { aspect: 'Special Majority', columnA: 'Most Constitutional provisions', columnB: 'Total membership majority + 2/3rd present & voting' },
            { aspect: 'Special + Ratification', columnA: 'Federal provisions', columnB: 'Special majority + ratification by 50% state legislatures' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 368: Power to amend Constitution', category: 'Article', highlight: true },
        { fact: 'Special Majority: Total membership + 2/3rd present & voting', category: 'Article', highlight: true },
        { fact: 'No Joint Sitting for Constitutional Amendment Bills', category: 'Article', highlight: true },
        { fact: 'President MUST give assent (no veto power)', category: 'Article' },
        { fact: 'Federal provisions: Need 50% state ratification', category: 'Article', highlight: true },
        { fact: '24th Amd (1971): Parliament can amend any part', category: 'Amendment' },
        { fact: '42nd Amd (1976): Mini-Constitution, added Socialist/Secular', category: 'Amendment', highlight: true },
        { fact: '44th Amd (1978): Reversed 42nd, Right to Property to Art 300A', category: 'Amendment', highlight: true },
        { fact: '106th Amd (2023): Women\'s Reservation - linked to Delimitation', category: 'Amendment' },
        { fact: 'Bill can be introduced in either House (no President\'s prior assent)', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
