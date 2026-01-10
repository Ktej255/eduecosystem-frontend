// Topic 30: Panchayati Raj
// 73rd Amendment, PESA, Three-tier system

import { PolityTopic } from '../polity-types';

export const topic30PanchayatiRaj: PolityTopic = {
    id: 30,
    module: 'VI',
    title: 'Panchayati Raj',
    syllabusTag: 'Module VI: Grassroots Democracy',

    staticFocus: '73rd Amendment (1992), PESA (1996), & Three-tier Structure',

    coreArticles: [
        { number: '243', title: 'Definitions', description: 'Defines Gram Sabha, intermediate/village level, Panchayat, etc. for Part IX.' },
        { number: '243A', title: 'Gram Sabha', description: 'Gram Sabha = body of registered voters in a village. Foundation of Panchayati Raj. Powers/functions as per state law.' },
        { number: '243B', title: 'Constitution of Panchayats', description: 'States shall constitute Panchayats at village, intermediate, and district levels. States with <20 lakh population can skip intermediate level.' },
        { number: '243D', title: 'Reservation of Seats', description: 'Reservation for SC/ST in proportion to population. 1/3rd seats for women (now states have increased to 50%). Reservation for OBCs as per state law.' },
        { number: '243G', title: 'Powers of Panchayats', description: 'State may endow Panchayats with powers for 29 subjects in 11th Schedule.' },
        { number: '243I', title: 'State Finance Commission', description: 'Governor constitutes SFC every 5 years to review finances of Panchayats.' },
        { number: '243K', title: 'State Election Commission', description: 'Governor appoints SEC for superintendence of Panchayat elections.' },
    ],

    keyConcepts: [
        {
            term: '73rd Amendment (1992)',
            definition: 'Added Part IX (Art 243-243O). Made Panchayats constitutional institutions. Came into force on April 24, 1993. Mandatory provisions: Elections, Reservation, SEC, SFC. Discretionary: Powers, functions, devolution.',
        },
        {
            term: 'Three-tier Structure',
            definition: 'Village level: Gram Panchayat. Intermediate level: Panchayat Samiti/Block. District level: Zilla Parishad. States with <20 lakh population need not have intermediate level.',
        },
        {
            term: '11th Schedule',
            definition: '29 subjects transferred to Panchayats. Includes: Agriculture, land improvement, minor irrigation, animal husbandry, fisheries, social forestry, drinking water, roads, rural housing, poverty alleviation, education, health, PDS.',
        },
        {
            term: 'PESA (1996)',
            definition: 'Panchayats (Extension to Scheduled Areas) Act. Extended Part IX to 5th Schedule areas with modifications. Gram Sabha has extra powers: Minor forest produce, minor minerals, liquor sales, land alienation. 10 states have 5th Schedule areas.',
        },
        {
            term: 'Gram Sabha',
            definition: 'All registered voters in village. Foundation of Panchayati Raj. Annual meetings. Approves plans, beneficiaries. Under PESA: Extra powers on land, forests, minerals.',
        },
        {
            term: 'Exceptions to Part IX',
            definition: 'Art 243M: Applies NOT to J&K (before 2019), Nagaland, Meghalaya, Mizoram. 6th Schedule areas have District/Regional Councils instead.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-30-01',
            headline: 'Women\'s Reservation in Panchayats (50%+ states)',
            date: '2024',
            source: 'MoPR Reports',
            teachingHook: 'Over 20 states have increased women\'s reservation to 50% (from mandatory 33%). India now has ~14 lakh elected women representatives in PRIs. Link this to the demand for 33% in LS/assemblies (106th Amendment).',
            relatedArticles: ['243D'],
        },
    ],

    prelimsPointers: [
        { fact: '73rd Amendment (1992): Added Part IX (Art 243-243O)', category: 'Amendment', highlight: true },
        { fact: '11th Schedule: 29 subjects for Panchayats', category: 'Article', highlight: true },
        { fact: 'Art 243D: 1/3rd reservation for women (many states have 50%)', category: 'Article', highlight: true },
        { fact: 'PESA 1996: Extended to 5th Schedule areas, Gram Sabha extra powers', category: 'Act', highlight: true },
        { fact: 'Art 243K: State Election Commission for Panchayat elections', category: 'Article' },
        { fact: 'Art 243I: State Finance Commission every 5 years', category: 'Article' },
        { fact: 'Exceptions: Nagaland, Meghalaya, Mizoram, 6th Schedule areas', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
