// Day 8: 1935 to 1947 - Freedom
// Module C: Modern India

import { HistoryTopic } from '../history-types';

export const topicDay08_1935_1947: HistoryTopic = {
    id: 8,
    day: 8,
    module: 'C',
    title: '1935-1947: Freedom',
    syllabusTag: 'Module C: Modern India',

    staticFocus: 'Provincial Elections (1937) → Quit India (1942) → INA → Cabinet Mission → Mountbatten Plan → Independence',

    keyConcepts: [
        {
            term: 'Provincial Elections (1937)',
            definition: 'First elections under 1935 Act. Congress won 8 of 11 provinces (declined to form coalition with Muslim League in UP). Congress ministries resigned in 1939 over WWII declaration without consultation. League celebrated "Deliverance Day".',
        },
        {
            term: 'August Offer (1940)',
            definition: 'Viceroy Linlithgow\'s offer during WWII: Dominion Status after war, expansion of Viceroy\'s Council, Constituent Assembly after war. Rejected by Congress (didn\'t promise independence) and League (no Pakistan mention).',
        },
        {
            term: 'Individual Satyagraha (1940-41)',
            definition: 'Gandhi\'s limited civil disobedience against war support. Vinoba Bhave: First Individual Satyagrahi (Oct 17, 1940). Followed by Jawaharlal Nehru. Symbolic protest, not mass movement.',
        },
        {
            term: 'Cripps Mission (1942)',
            definition: 'Stafford Cripps offered: Dominion Status after war, right to secede, Constituent Assembly. Rejected by Congress ("post-dated cheque on a failing bank" - Gandhi), League (Pakistan not guaranteed), and Hindu Mahasabha.',
        },
        {
            term: 'Quit India Movement (Aug 8, 1942)',
            definition: 'Bombay session: "Do or Die" (Karenge ya Marenge). Leaders arrested immediately. Leaderless movement - most violent phase. Parallel governments: Ballia (Chittu Pandey), Satara (Nana Patil), Midnapore (Tamluk). Lasted till 1944.',
            example: 'Aruna Asaf Ali hoisted flag at Gowalia Tank Maidan'
        },
        {
            term: 'C. Rajagopalachari Formula (1944)',
            definition: 'CR (Rajaji) Formula: Muslim League to demand Pakistan only after independence, plebiscite in Muslim areas, defense and commerce jointly managed. Rejected by Jinnah (Pakistan before independence) and Hindu Mahasabha.',
        },
        {
            term: 'INA (Indian National Army)',
            definition: 'Subhas Chandra Bose escaped from India (1941), reached Germany, then Japan. Reorganized INA (originally by Mohan Singh). "Delhi Chalo" slogan. Azad Hind Fauj. Rani of Jhansi Regiment (women). INA Trials at Red Fort (1945) created nationalist upsurge.',
            example: 'INA soldiers: Shah Nawaz Khan, P.K. Sahgal, G.S. Dhillon defended by Nehru, Bhulabhai Desai'
        },
        {
            term: 'Cabinet Mission Plan (1946)',
            definition: 'Three-member mission: Pethick-Lawrence, Stafford Cripps, A.V. Alexander. Rejected Pakistan but proposed: Three-tier federation (Provinces → Groups → Union), Constituent Assembly, Interim Government. Both parties initially accepted, then disagreed on interpretation.',
        },
        {
            term: 'Direct Action Day (Aug 16, 1946)',
            definition: 'Muslim League\'s call for Pakistan. "Great Calcutta Killings" - thousands died in Hindu-Muslim riots. Led to Noakhali (Bengal) and Bihar retaliatory violence. Point of no return for partition.',
        },
        {
            term: 'Mountbatten Plan & Independence (1947)',
            definition: 'Attlee\'s announcement (Feb 20, 1947): British to leave by June 1948 (later advanced). Mountbatten Plan (June 3, 1947): Partition accepted. Indian Independence Act (July 1947): Two dominions created. Independence: Aug 15, 1947.',
        },
    ],

    currentAffairs: [],

    prelimsPointers: [
        { fact: 'Congress won 8/11 provinces in 1937 elections', category: 'Year' },
        { fact: 'Deliverance Day: Muslim League, after Congress ministries resigned (1939)', category: 'Year' },
        { fact: 'Vinoba Bhave: First Individual Satyagrahi (Oct 17, 1940)', category: 'Person', highlight: true },
        { fact: 'Cripps Mission (1942): "Post-dated cheque on a failing bank" (Gandhi)', category: 'Year', highlight: true },
        { fact: 'Quit India (Aug 8, 1942): "Do or Die", Bombay, Gowalia Tank', category: 'Movement', highlight: true },
        { fact: 'Aruna Asaf Ali: Hoisted flag at Quit India launch', category: 'Person' },
        { fact: 'Parallel Govts: Ballia (Chittu Pandey), Satara (Nana Patil), Tamluk', category: 'Term', highlight: true },
        { fact: 'INA: Subhas Bose, "Delhi Chalo", Rani of Jhansi Regiment', category: 'Movement', highlight: true },
        { fact: 'INA Trials (1945): Red Fort, sparked nationalist upsurge', category: 'Year' },
        { fact: 'Cabinet Mission (1946): Three-tier federation, rejected Pakistan', category: 'Year', highlight: true },
        { fact: 'Direct Action Day (Aug 16, 1946): Great Calcutta Killings', category: 'Year', highlight: true },
        { fact: 'Attlee\'s Statement (Feb 1947): British to leave by June 1948', category: 'Year' },
        { fact: 'Mountbatten Plan (June 3, 1947): Partition accepted', category: 'Year' },
        { fact: 'Indian Independence Act (July 1947): Two dominions created', category: 'Act', highlight: true },
    ],

    timeline: [
        { year: '1937', event: 'Provincial Elections', significance: 'Congress won 8 provinces' },
        { year: '1939', event: 'Congress Ministries Resign', significance: 'WWII without consultation' },
        { year: '1940', event: 'August Offer, Individual Satyagraha begins', significance: 'Dominion Status offered' },
        { year: 'Mar 1942', event: 'Cripps Mission', significance: 'Rejected by all parties' },
        { year: 'Aug 1942', event: 'Quit India Movement', significance: 'Most violent phase of freedom struggle' },
        { year: '1943', event: 'Bengal Famine', significance: 'Millions died, administered under British' },
        { year: '1944', event: 'CR Formula, Gandhi-Jinnah Talks', significance: 'Failed negotiations' },
        { year: '1945', event: 'Wavell Plan, Simla Conference, INA Trials', significance: 'Post-war settlement attempts' },
        { year: 'Mar 1946', event: 'Cabinet Mission arrives', significance: 'Three-tier federation proposed' },
        { year: 'Aug 16, 1946', event: 'Direct Action Day', significance: 'Great Calcutta Killings' },
        { year: 'Sept 1946', event: 'Interim Government formed', significance: 'Nehru as VP of Executive Council' },
        { year: 'Feb 1947', event: 'Attlee\'s Statement', significance: 'British exit deadline' },
        { year: 'June 3, 1947', event: 'Mountbatten Plan', significance: 'Partition accepted' },
        { year: 'Aug 15, 1947', event: 'Independence', significance: 'Two dominions: India & Pakistan' },
    ],

    pyqAlert: 'Focus on: STRICT CHRONOLOGY (1940-47 is most tested), Quit India parallel govts, Cabinet Mission provisions, INA leaders',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
