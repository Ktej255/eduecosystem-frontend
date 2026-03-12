// Topic 13: Federal System
// Unitary vs Federal features, Asymmetric Federalism

import { PolityTopic } from '../polity-types';

export const topic13FederalSystem: PolityTopic = {
    id: 13,
    module: 'II',
    title: 'Federal System',
    syllabusTag: 'Module II: System of Government',

    staticFocus: 'Unitary vs Federal features, & Asymmetric Federalism',

    coreArticles: [
        { number: '1', title: 'India is a Union of States', description: 'Term "Union" (not Federation) was deliberately chosen. States have no right to secede. Federation not result of agreement between states.' },
        { number: '249', title: 'Parliament on State List Matters', description: 'If Rajya Sabha passes resolution by 2/3rd that it is necessary in national interest, Parliament can legislate on State List matters for 1 year.' },
        { number: '250', title: 'During Emergency', description: 'Parliament can legislate on State List matters during National Emergency.' },
        { number: '253', title: 'International Agreements', description: 'Parliament can make laws on any matter to implement international treaties/agreements.' },
    ],

    keyConcepts: [
        {
            term: 'Federal Features',
            definition: 'Written Constitution. Dual polity (Centre + States). Division of powers (7th Schedule). Constitutional supremacy. Independent Judiciary. Bicameralism.',
        },
        {
            term: 'Unitary/Centralizing Features',
            definition: 'Strong Centre. Single Constitution. Single citizenship. Integrated judiciary. Appointment of Governor by Centre. All-India Services. Emergency provisions. Parliament can reorganize states.',
        },
        {
            term: 'K.C. Wheare\'s View',
            definition: 'India is "Quasi-Federal" - federal in form, unitary in spirit. D.D. Basu: India is federal with strong centralizing tendency. S.R. Bommai: Federalism is Basic Structure.',
        },
        {
            term: 'Asymmetric Federalism',
            definition: 'Unequal treatment of states. Special provisions under Art 371 for NE states, J&K (before 2019), Maharashtra, Gujarat. Some states have special financial/administrative provisions.',
        },
        {
            term: '7th Schedule - Division of Powers',
            definition: 'Union List (100 items): Defence, Foreign Affairs, Currency. State List (61 items): Police, Public Health, Agriculture. Concurrent List (52 items): Criminal Law, Marriage, Education. Residuary powers with Centre.',
        },
        {
            term: 'Cooperative Federalism',
            definition: 'Centre-State cooperation instead of conflict. NITI Aayog model. GST Council (Art 279A). Interstate Council (Art 263). Zonal Councils. Union with consent of states.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-13-01',
            headline: 'Federalism & Art 370 Verdict',
            date: 'Dec 2023',
            source: 'Supreme Court',
            teachingHook: 'While upholding Art 370 abrogation, the SC affirmed that Federalism is a Basic Structure but held that the reorganization of J&K into UTs was a temporary measure. The balance between federal structure and Parliament\'s power under Art 3 was examined.',
            relatedArticles: ['1', '3', '370'],
        },
        {
            id: 'ca-13-02',
            headline: '16th Finance Commission Terms of Reference',
            date: '2024',
            source: 'Ministry of Finance',
            teachingHook: 'The 16th FC (Arvind Panagariya) has terms including "performance-based incentives" for states. This raises issues of fiscal federalism and whether Centre can impose conditions on states for grants.',
            relatedArticles: ['280'],
        },
    ],

    comparisonTable: {
        title: 'Federal vs Unitary Features in India',
        columnAHeader: 'Federal Features',
        columnBHeader: 'Unitary Features',
        rows: [
            { aspect: 'Constitution', columnA: 'Written, Rigid', columnB: 'Single for entire country' },
            { aspect: 'Polity', columnA: 'Dual (Centre + States)', columnB: 'Governor appointed by Centre' },
            { aspect: 'Powers', columnA: 'Division in 7th Schedule', columnB: 'Residuary with Centre' },
            { aspect: 'Judiciary', columnA: 'Independent', columnB: 'Integrated (single hierarchy)' },
            { aspect: 'Citizenship', columnA: 'Federal countries have dual', columnB: 'Single citizenship in India' },
            { aspect: 'Emergency', columnA: 'Limited central intervention', columnB: 'Centre can take over states' },
        ],
    },

    prelimsPointers: [
        { fact: 'India is "Union" not "Federation" - states cannot secede', category: 'Article', highlight: true },
        { fact: '7th Schedule: Union (100), State (61), Concurrent (52)', category: 'Article', highlight: true },
        { fact: 'Residuary powers with Parliament (Art 248)', category: 'Article' },
        { fact: 'K.C. Wheare: India is "Quasi-Federal"', category: 'Case' },
        { fact: 'S.R. Bommai 1994: Federalism is Basic Structure', category: 'Case', highlight: true },
        { fact: 'Art 249: RS resolution allows Parliament to legislate on State List', category: 'Article' },
        { fact: 'Art 253: Parliament can legislate for international treaties', category: 'Article' },
        { fact: 'GST Council (Art 279A): Cooperative Federalism example', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
