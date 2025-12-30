// Topic 44: Good Governance & Transparency
// Citizens' Charter, E-Governance, Administrative Reforms

import { PolityTopic } from '../polity-types';

export const topic44GoodGovernance: PolityTopic = {
    id: 44,
    module: 'I',
    title: 'Good Governance & Transparency',
    syllabusTag: 'Module I: Governance',

    staticFocus: 'Citizens\' Charter, E-Governance, RTI, & Administrative Reforms',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Good Governance',
            definition: 'Participatory, consensus-oriented, accountable, transparent, responsive, effective, efficient, equitable, inclusive, and rule-of-law based administration. UN/World Bank definition widely accepted.',
        },
        {
            term: 'Citizens\' Charter',
            definition: 'Statement of standards of services which citizens can expect. Origin: UK (John Major, 1991). India: DAR&PG initiative (1997). 600+ charters at Central level. Includes: Standards, remedies, grievance redressal.',
        },
        {
            term: 'E-Governance',
            definition: 'Use of ICT for government services. National e-Governance Plan (NeGP 2006). Mission Mode Projects (MMPs). Digital India (2015). Pillars: Digital Infrastructure, Governance on Demand, Digital Empowerment.',
        },
        {
            term: 'Second ARC (2005-09)',
            definition: 'Chaired by Veerappa Moily. 15 Reports on: Ethics, RTI, Crisis Management, Terrorism, e-Governance, Local Governance, Public Order, Refurbishing Personnel Administration, etc.',
        },
        {
            term: 'Right to Public Services Acts',
            definition: 'State laws mandating time-bound delivery of public services. Madhya Pradesh first (2010). Penalty on officials for delay. Model for other states. Sevottam framework for service standards.',
        },
        {
            term: 'Open Government Data (OGD)',
            definition: 'data.gov.in platform. Government datasets publicly available. Transparency, innovation, accountability. Part of Open Government Partnership commitments.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-44-01',
            headline: 'National e-Governance Service Delivery Assessment (NeSDA)',
            date: '2024',
            source: 'DARPG',
            teachingHook: 'NeSDA 2023-24 rankings released. States ranked on e-governance service delivery. Kerala, Tamil Nadu, Rajasthan top performers. Discuss Digital India impact and the three pillars of e-governance.',
        },
    ],

    prelimsPointers: [
        { fact: 'Citizens\' Charter: Origin UK (1991), India (1997)', category: 'Year', highlight: true },
        { fact: 'Digital India: Launched 2015, 3 pillars of digital transformation', category: 'Year', highlight: true },
        { fact: 'Second ARC: Veerappa Moily, 15 Reports (2005-09)', category: 'Commission' },
        { fact: 'Right to Public Services: MP first state (2010)', category: 'Act' },
        { fact: 'data.gov.in: Open Government Data platform', category: 'Year' },
        { fact: 'Sevottam: Service Excellence framework for government', category: 'Year' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
