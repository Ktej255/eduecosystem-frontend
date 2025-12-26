// Topic 3: The Preamble
// Keywords, 42nd Amendment, & Significance

import { PolityTopic } from '../polity-types';

export const topic03Preamble: PolityTopic = {
    id: 3,
    module: 'A',
    title: 'The Preamble',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Keywords (Sovereign, Socialist, Secular, Democratic, Republic), 42nd Amendment, & Significance',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'Definition & Purpose',
            definition: 'The Preamble is the introduction/preface to the Constitution. It contains the philosophy and fundamental values on which the Constitution is based. Based on the "Objectives Resolution" moved by Nehru on Dec 13, 1946.',
        },
        {
            term: 'SOVEREIGN',
            definition: 'India is externally and internally supreme. Not subject to any external authority. Can acquire or cede territory. Membership in Commonwealth is voluntary, not a limitation.',
        },
        {
            term: 'SOCIALIST (Added by 42nd Amendment, 1976)',
            definition: 'Not "Socialism" in Marxist sense. Indian socialism = Democratic Socialism (Mixed Economy). Aims to end poverty, inequality, and achieve equitable distribution of wealth.',
        },
        {
            term: 'SECULAR (Added by 42nd Amendment, 1976)',
            definition: 'No official State religion. State treats all religions equally. Positive secularism (equal protection), not Western "wall of separation". Articles 25-28 guarantee religious freedom.',
        },
        {
            term: 'DEMOCRATIC',
            definition: 'Government derives authority from the people. Based on universal adult franchise. Direct (Panchayats) and Representative (Parliament, State Legislature) democracy.',
        },
        {
            term: 'REPUBLIC',
            definition: 'Head of State (President) is elected, not hereditary. No privileged class. All public offices open to all citizens.',
        },
        {
            term: 'JUSTICE (Social, Economic, Political)',
            definition: 'Equal treatment regardless of caste, creed, gender, wealth. Fair distribution of resources. Equal participation in political process.',
        },
        {
            term: 'LIBERTY (Thought, Expression, Belief, Faith, Worship)',
            definition: 'Guaranteed by Fundamental Rights (Art 19-22). Not absolute but subject to reasonable restrictions.',
        },
        {
            term: 'EQUALITY (Status and Opportunity)',
            definition: 'Absence of privileges. Equal access to public employment (Art 16). No discrimination (Art 15).',
        },
        {
            term: 'FRATERNITY (Dignity of Individual + Unity & Integrity of Nation)',
            definition: '"Integrity" added by 42nd Amendment. Promotes feeling of brotherhood among citizens.',
        },
        {
            term: 'Amendability of Preamble',
            definition: 'Berubari Union Case (1960): Preamble is NOT part of Constitution, cannot be amended. Kesavananda Bharati Case (1973): Preamble IS part of Constitution, can be amended under Art 368 but BASIC FEATURES cannot be altered.',
        },
        {
            term: '42nd Amendment (1976)',
            definition: 'Added "SOCIALIST", "SECULAR", and "INTEGRITY". Called the "Mini Constitution" as it made 59 changes.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-03-01',
            headline: 'SC Verdict on "Socialist & Secular" (Nov 2024)',
            date: 'Nov 2024',
            source: 'LiveLaw / The Hindu',
            teachingHook: 'The Supreme Court (Justices Sanjiv Khanna & Sanjay Kumar) dismissed a PIL by Subramanian Swamy challenging the insertion of "Socialist" and "Secular" via the 42nd Amendment (1976). The SC ruled that these words are valid and inseparable parts of the Preamble.',
            caseReference: 'Dr. Balram Singh vs Union of India (2024)',
            relatedArticles: ['Preamble', 'Basic Structure'],
        },
        {
            id: 'ca-03-02',
            headline: 'Preamble Reading in Schools (Karnataka/Others)',
            date: '2024',
            source: 'The Hindu',
            teachingHook: 'Several state governments made reading the Preamble mandatory in schools and during Constitution Day. Discuss the "interpretational value" of the Preamble (Berubari vs Kesavananda cases).',
        },
    ],

    prelimsPointers: [
        { fact: '"WE, THE PEOPLE OF INDIA" - Source of authority is the People', category: 'Article', highlight: true },
        { fact: '42nd Amendment (1976): Added Socialist, Secular, Integrity', category: 'Amendment', highlight: true },
        { fact: 'Berubari Case (1960): Preamble NOT part of Constitution', category: 'Case' },
        { fact: 'Kesavananda Bharati (1973): Preamble IS part, Basic Structure doctrine', category: 'Case', highlight: true },
        { fact: 'SR Bommai Case (1994): Secularism is Basic Structure', category: 'Case', highlight: true },
        { fact: 'Preamble can be amended but Basic Features cannot be altered', category: 'Article' },
        { fact: 'Preamble is based on Objectives Resolution (Dec 13, 1946)', category: 'Year' },
        { fact: 'Preamble cannot be used to override clear constitutional provisions', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
