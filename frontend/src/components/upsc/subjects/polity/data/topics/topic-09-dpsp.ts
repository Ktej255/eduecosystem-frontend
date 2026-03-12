// Topic 9: Directive Principles of State Policy (DPSP)
// Classification, UCC (Art 44), Art 39, Conflict with FR

import { PolityTopic } from '../polity-types';

export const topic09DPSP: PolityTopic = {
    id: 9,
    module: 'I',
    title: 'Directive Principles of State Policy',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Classification (Gandhian/Socialist/Liberal), New DPSPs, UCC (Art 44), & Conflict with FRs',

    coreArticles: [
        { number: '36', title: 'Definition', description: '"State" has same meaning as in Art 12.' },
        { number: '37', title: 'Non-Justiciable', description: 'DPSPs are not enforceable by courts. BUT they are fundamental in governance - State SHALL apply them in making laws.' },
        { number: '38', title: 'Welfare State', description: 'State shall promote welfare, minimize inequalities in income/status/facilities/opportunities.' },
        { number: '39', title: 'Principles of Policy', description: '(a) Adequate livelihood, (b) Distribution of resources for common good, (c) No concentration of wealth, (d) Equal pay for equal work, (e) Health of workers, (f) Protection of children.' },
        { number: '39A', title: 'Equal Justice & Free Legal Aid', description: 'Added by 42nd Amendment. Equal justice, free legal aid for economically weak. NALSA established for implementation.' },
        { number: '40', title: 'Village Panchayats', description: 'Organize village panchayats with necessary powers. Basis for 73rd Amendment (1992).' },
        { number: '44', title: 'Uniform Civil Code', description: 'State shall endeavour to secure UCC for all citizens throughout India. Most debated DPSP. Not yet implemented nationally.' },
        { number: '48', title: 'Agriculture & Animal Husbandry', description: 'Organize agriculture and animal husbandry on modern lines. Prohibit slaughter of cows/calves.' },
        { number: '48A', title: 'Environment Protection', description: 'Added by 42nd Amendment. Protect and improve environment, safeguard forests and wildlife.' },
        { number: '51', title: 'International Peace', description: 'Promote international peace and security, maintain just relations between nations, respect international law, settle disputes by arbitration.' },
    ],

    keyConcepts: [
        {
            term: 'Classification of DPSPs',
            definition: 'Socialist: Art 38, 39, 39A, 41, 42, 43, 43A, 47. Gandhian: Art 40, 43, 43B, 46, 47, 48. Liberal-Intellectual: Art 44, 45, 48, 48A, 49, 50, 51. Based on ideology they promote.',
        },
        {
            term: 'Conflict between FR and DPSP',
            definition: 'Champakam Dorairajan (1951): FR prevail over DPSP. Led to 1st Amendment. Kesavananda Bharati (1973): Harmony, not conflict. Minerva Mills (1980): Balance between FR and DPSP is Basic Structure.',
        },
        {
            term: 'Article 31C (Shield for DPSP)',
            definition: 'Laws implementing Art 39(b)/(c) cannot be challenged on Art 14 or 19. 42nd Amd extended to all DPSP (struck down in Minerva Mills). Current protection only for Art 39(b)/(c).',
        },
        {
            term: 'New DPSPs (Amendments)',
            definition: '42nd Amd (1976): Art 39A (legal aid), 43A (workers participation), 48A (environment). 44th Amd (1978): Art 38(2) (minimize inequalities). 86th Amd (2002): Art 45 changed to early childhood care. 97th Amd (2011): Art 43B (cooperative societies).',
        },
        {
            term: 'Uniform Civil Code (Art 44)',
            definition: 'Common personal law for all Indians regardless of religion. Objective: National integration, gender justice. Current: Different personal laws for Hindus, Muslims, Christians etc. Uttarakhand passed UCC Act 2024 - first state.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-09-01',
            headline: 'Uttarakhand Uniform Civil Code (Feb 2024)',
            date: 'Feb 2024',
            source: 'Uttarakhand UCC Act, 2024',
            teachingHook: 'Uttarakhand became the first state in independent India to pass a UCC Act. It regulates marriage, divorce, and succession, and makes registration of live-in relationships mandatory. Deep dive into Article 44. Can a State enact a UCC (Concurrent List entry 5) before the Centre? Discuss the federal implications.',
            relatedArticles: ['44'],
        },
        {
            id: 'ca-09-02',
            headline: 'Article 39(b) & 31C Revival (Nov 2024)',
            date: 'Nov 2024',
            source: 'Supreme Court',
            teachingHook: 'In the Property Owners judgment, the SC unanimously upheld the constitutional validity of Article 31C (which saves laws implementing DPSP 39(b)/(c) from being challenged under Art 14 or 19). Explain the "Golden Triangle" of Articles 14, 19, and 21, and how Article 31C acts as a shield for DPSP.',
            caseReference: 'Property Owners Association v. State of Maharashtra',
            relatedArticles: ['31C', '39(b)', '14', '19'],
        },
    ],

    comparisonTable: {
        title: 'Fundamental Rights vs DPSP',
        columnAHeader: 'Fundamental Rights',
        columnBHeader: 'DPSP',
        rows: [
            { aspect: 'Source', columnA: 'USA Bill of Rights', columnB: 'Irish Constitution' },
            { aspect: 'Nature', columnA: 'Negative (restraint on State)', columnB: 'Positive (goals for State)' },
            { aspect: 'Justiciability', columnA: 'Enforceable by courts', columnB: 'Not enforceable' },
            { aspect: 'Aim', columnA: 'Political democracy', columnB: 'Social & economic democracy' },
            { aspect: 'Legal sanction', columnA: 'Available (Art 32)', columnB: 'Not available' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 37: DPSPs are non-justiciable but fundamental in governance', category: 'Article', highlight: true },
        { fact: 'DPSPs borrowed from Irish Constitution', category: 'Article' },
        { fact: 'Champakam 1951: FR prevails - Led to 1st Amendment', category: 'Case' },
        { fact: 'Minerva Mills 1980: Balance of FR and DPSP is Basic Structure', category: 'Case', highlight: true },
        { fact: 'Art 31C: Shield for Art 39(b)/(c) laws from Art 14/19 challenge', category: 'Article', highlight: true },
        { fact: 'Art 44: Uniform Civil Code - Uttarakhand first state (2024)', category: 'Article', highlight: true },
        { fact: '42nd Amd: Added Art 39A (legal aid), 43A, 48A (environment)', category: 'Amendment' },
        { fact: '97th Amd: Added Art 43B (cooperative societies)', category: 'Amendment' },
        { fact: 'Art 40: Village Panchayats - Basis of 73rd Amendment', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
