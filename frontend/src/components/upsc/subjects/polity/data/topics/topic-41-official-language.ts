// Topic 41: Official Language
// Art 343-351, Three-Language Formula, Language Controversy

import { PolityTopic } from '../polity-types';

export const topic41OfficialLanguage: PolityTopic = {
    id: 41,
    module: 'VIII',
    title: 'Official Language',
    syllabusTag: 'Module VIII: Special Provisions',

    staticFocus: 'Language of Union & States (Art 343-351) & Three-Language Formula',

    coreArticles: [
        { number: '343', title: 'Official Language of Union', description: 'Hindi in Devanagari script is official language of Union. English to continue for 15 years initially. Parliament can extend English use.' },
        { number: '344', title: 'Commission on Official Language', description: 'President appoints commission after 5 years, 10 years. Makes recommendations on Hindi use. Committee of 30 MPs examines recommendations.' },
        { number: '345', title: 'Official Language of State', description: 'State legislature may adopt any language in 8th Schedule or English as official language.' },
        { number: '348', title: 'Language of SC/HC', description: 'All proceedings in SC, HCs, authoritative texts of laws in English until Parliament provides otherwise.' },
        { number: '350', title: 'Grievances in Any Language', description: 'Any person can submit representation in any language used in Union or State.' },
        { number: '350A', title: 'Primary Education in Mother Tongue', description: 'State shall provide facilities for instruction in mother-tongue at primary level for linguistic minorities.' },
        { number: '350B', title: 'Special Officer for Linguistic Minorities', description: 'President appoints Special Officer to investigate and report on safeguards for linguistic minorities.' },
        { number: '351', title: 'Development of Hindi', description: 'Union\'s duty to promote Hindi, develop it as medium of expression while assimilating elements from other Indian languages and Sanskrit.' },
    ],

    keyConcepts: [
        {
            term: 'Official vs National Language',
            definition: 'Hindi is the OFFICIAL language of the Union (Art 343), NOT the national language. Constitution does not designate any national language. 22 languages in 8th Schedule are all scheduled languages.',
        },
        {
            term: 'Three-Language Formula',
            definition: 'NEP 1968/1986/2020: Students learn 3 languages. 1. Mother tongue/regional language, 2. Hindi (in non-Hindi states) or other Indian language (in Hindi states), 3. English. Not constitutionally mandated, policy recommendation.',
        },
        {
            term: 'Official Languages Act, 1963',
            definition: 'Extended English use indefinitely (beyond 15 years). After anti-Hindi agitation in Tamil Nadu (1965). English continues as associate official language. Annual report on Hindi progress.',
        },
        {
            term: 'Language Controversy',
            definition: '1965: Anti-Hindi agitation in TN. Dravida Munnetra Kazhagam (DMK) movement. Resulted in 1963 Act amendments. Hindi imposition remains sensitive in South India.',
        },
        {
            term: 'Constitutional Language Provisions',
            definition: 'Hindi: Official for Union. English: SC/HC, authoritative texts. State: Can adopt 8th Schedule language or English. 22 languages recognized. Articles 120, 210: Legislature proceedings.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-41-01',
            headline: 'Hindi Imposition Debate (2022-24)',
            date: '2022-24',
            source: 'Parliamentary Committee on Official Language',
            teachingHook: 'The 11th Official Language Committee (2022) recommendations on increased Hindi use in Central government sparked controversy. Tamil Nadu, Karnataka opposed. Discuss Art 343 and the 1963 Official Languages Act. Is Hindi imposition constitutional?',
            relatedArticles: ['343', '351'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 343: Hindi in Devanagari is official language of Union', category: 'Article', highlight: true },
        { fact: 'Hindi is OFFICIAL, not NATIONAL language (no national language)', category: 'Article', highlight: true },
        { fact: '22 languages in 8th Schedule', category: 'Article', highlight: true },
        { fact: 'Official Languages Act 1963: English continues indefinitely', category: 'Act', highlight: true },
        { fact: 'Art 350A: Primary education in mother tongue for minorities', category: 'Article' },
        { fact: 'Art 350B: Special Officer for Linguistic Minorities', category: 'Article' },
        { fact: '1965 Anti-Hindi agitation: Led to 1963 Act amendments', category: 'Year' },
    ],

    priority: 'Medium',
    lastUpdated: 'Dec 2025',
};
