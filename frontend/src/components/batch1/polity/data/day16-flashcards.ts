// Day 16: FEDERAL AXIS EXTENSIONS
// Topics: GST Council (Ch 47), NITI Aayog (Ch 55)
// Date: Jan 27 (Tuesday)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY16_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // GST COUNCIL (Ch 47) - Article 279A
    // ==========================================
    {
        id: 'd16-47-1',
        front: 'Which Amendment Act added Article 279A (GST Council)?',
        back: '101st Constitutional Amendment Act, 2016.',
        source: 'GST Council',
        subtopicId: '47.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd16-47-2',
        front: 'Who is the Chairperson of the GST Council?',
        back: 'Union Finance Minister.',
        source: 'GST Council',
        subtopicId: '47.1',
        category: 'fact'
    },
    {
        id: 'd16-47-3',
        front: 'What constitutes a Quorum for GST Council meetings?',
        back: 'One-half of the total number of members.',
        source: 'GST Council',
        subtopicId: '47.2',
        category: 'fact'
    },
    {
        id: 'd16-47-4',
        front: 'Weightage of Votes in GST Council (Centre vs States)?',
        back: 'Centre: 1/3rd of total votes cast.\nStates: 2/3rds of total votes cast (All states taken together).',
        source: 'GST Council',
        subtopicId: '47.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd16-47-5',
        front: 'Decision making in GST Council requires what majority?',
        back: 'At least 3/4th (75%) of the weighted votes of members present and voting.',
        source: 'GST Council',
        subtopicId: '47.2',
        category: 'fact'
    },
    {
        id: 'd16-47-6',
        front: 'Is the GST Council a Constitutional Body?',
        back: 'Yes (Article 279A).\n(Unlike NITI Aayog which is an Executive Body).',
        source: 'GST Council',
        subtopicId: '47.1',
        category: 'concept',
        highlight: true
    },

    // ==========================================
    // NITI AAYOG (Ch 55)
    // ==========================================
    {
        id: 'd16-55-1',
        front: 'NITI Aayog was established by?',
        back: 'Executive Resolution of Union Cabinet (Jan 1, 2015). It is neither Constitutional nor Statutory.',
        source: 'NITI Aayog',
        subtopicId: '55.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd16-55-2',
        front: 'Who is the Chairperson of NITI Aayog?',
        back: 'The Prime Minister.',
        source: 'NITI Aayog',
        subtopicId: '55.2',
        category: 'fact'
    },
    {
        id: 'd16-55-3',
        front: 'Composition of Governing Council of NITI Aayog?',
        back: 'PM (Chair) + CMs of all States + CMs of UTs (with legislatures) + Lt. Governors of other UTs.',
        source: 'NITI Aayog',
        subtopicId: '55.2',
        category: 'fact'
    },
    {
        id: 'd16-55-4',
        front: 'Difference between Planning Commission and NITI Aayog approach?',
        back: 'Planning Commission: Top-Down approach.\nNITI Aayog: Bottom-Up approach (Cooperative Federalism).',
        source: 'NITI Aayog',
        subtopicId: '55.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd16-55-5',
        front: 'Who appoints the Vice-Chairperson of NITI Aayog?',
        back: 'The Prime Minister. (He holds rank of Cabinet Minister).',
        source: 'NITI Aayog',
        subtopicId: '55.2',
        category: 'fact'
    },
    {
        id: 'd16-55-6',
        front: 'Special Invitees to NITI Aayog are nominated by?',
        back: 'Prime Minister.',
        source: 'NITI Aayog',
        subtopicId: '55.2',
        category: 'fact'
    },
    {
        id: 'd16-55-7',
        front: 'Function of "Team India Wing" in NITI Aayog?',
        back: 'It comprises representatives from every State and Ministry, serving as a permanent platform for national collaboration.',
        source: 'NITI Aayog',
        subtopicId: '55.3',
        category: 'concept'
    },

    // ==========================================
    // COMPARATIVE / LINKAGES
    // ==========================================
    {
        id: 'd16-link-1',
        front: 'Does NITI Aayog allocate funds to states?',
        back: 'No. (Planning Commission used to). Now funds are allocated by Finance Ministry/Finance Commission.',
        source: 'NITI Aayog',
        subtopicId: '55.4',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd16-link-2',
        front: 'Is Inter-State Council (Art 263) the same as Governing Council of NITI Aayog?',
        back: 'No. ISC is a Constitutional Body. Governing Council is part of NITI Aayog (Executive Body). But composition is largely similar.',
        source: 'Federal Bodies',
        subtopicId: '55.2',
        category: 'concept'
    },
    {
        id: 'd16-link-3',
        front: 'Does GST Council recommend rates for all taxes?',
        back: 'No. Only for goods and services subsumed under GST. (Not for Alcohol for human consumption, Petroleum products currently).',
        source: 'GST Council',
        subtopicId: '47.3',
        category: 'fact'
    },
    {
        id: 'd16-link-4',
        front: 'Who is the Secretary of the GST Council?',
        back: 'Union Revenue Secretary (Ex-Officio Secretary).',
        source: 'GST Council',
        subtopicId: '47.2',
        category: 'fact'
    },
    {
        id: 'd16-link-5',
        front: 'Who acts as the "Think Tank" of the Government of India?',
        back: 'NITI Aayog (National Institution for Transforming India).',
        source: 'NITI Aayog',
        subtopicId: '55.1',
        category: 'fact'
    },
    {
        id: 'd16-link-6',
        front: 'Atal Innovation Mission (AIM) is an initiative of?',
        back: 'NITI Aayog.',
        source: 'NITI Aayog',
        subtopicId: '55.5',
        category: 'fact'
    },
    {
        id: 'd16-link-7',
        front: 'Can the GST Council establish a mechanism to adjudicate disputes?',
        back: 'Yes. Article 279A(11) empowers GST Council to establish a mechanism to adjudicate disputes between Centre-State or State-State.',
        source: 'GST Council',
        subtopicId: '47.3',
        category: 'concept'
    }
];

export default DAY16_FLASHCARDS;
