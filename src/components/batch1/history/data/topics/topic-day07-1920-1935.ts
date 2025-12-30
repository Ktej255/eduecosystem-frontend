// Day 7: 1920 to 1935 - Gandhian Era & Ideologies
// Module C: Modern India

import { HistoryTopic } from '../history-types';

export const topicDay07_1920_1935: HistoryTopic = {
    id: 7,
    day: 7,
    module: 'C',
    title: '1920-1935: Gandhian Era',
    syllabusTag: 'Module C: Modern India',

    staticFocus: 'NCM (1920) → CDM (1930) → Round Table Conferences → GOI Act 1935 → Revolutionary Activities',

    keyConcepts: [
        {
            term: 'Non-Cooperation Movement (1920-22)',
            definition: 'Launched with Khilafat issue (Ottoman Caliphate threatened). Methods: Boycott of courts, schools, councils, titles; Spinning (Khadi). Ended after Chauri Chaura (Feb 5, 1922): Police station burned, 22 policemen killed. Gandhi withdrew movement.',
            example: 'Tilak Swaraj Fund collected ₹1 crore; Motilal Nehru gave up legal practice'
        },
        {
            term: 'Swaraj Party (1923)',
            definition: 'Founded by C.R. Das and Motilal Nehru after NCM failure. Strategy: Council Entry (work within councils to obstruct British). "Pro-changers" vs "No-changers". Weakened after Das\'s death (1925).',
        },
        {
            term: 'Simon Commission (1927)',
            definition: 'All-white commission to review 1919 Act reforms. Boycotted with slogan "Simon Go Back". Lala Lajpat Rai died from lathi injuries during Lahore protest (Nov 1928). Led to Nehru Report as Indian response.',
        },
        {
            term: 'Nehru Report (1928) vs Jinnah\'s Fourteen Points (1929)',
            definition: 'Nehru Report (Motilal): Dominion Status, joint electorate with reserved seats, rejected separate electorate. Jinnah\'s Response: Fourteen Points demanding separate electorate, 1/3 Muslim representation in Centre. Hindu-Muslim divide widened.',
        },
        {
            term: 'Lahore Congress (1929)',
            definition: 'President: Jawaharlal Nehru. Resolution: Purna Swaraj (Complete Independence). January 26, 1930: First Independence Day observed (now Republic Day commemorates this). Set stage for Civil Disobedience.',
        },
        {
            term: 'Civil Disobedience Movement (1930-34)',
            definition: 'Began with Dandi March (March 12 - April 6, 1930): Gandhi walked 240 miles to make salt. Salt Satyagraha nationwide. Features: Mass participation, women (Sarojini Naidu), peasants. Gandhi-Irwin Pact (1931) led to suspension.',
        },
        {
            term: 'Round Table Conferences',
            definition: 'RTC I (1930-31): Congress absent (leaders jailed). RTC II (1931): Gandhi attended (sole Congress rep), no agreement on communal issue. RTC III (1932): Congress absent, led to Communal Award.',
        },
        {
            term: 'Communal Award & Poona Pact (1932)',
            definition: 'Communal Award (PM Ramsay MacDonald): Separate electorate for Depressed Classes. Gandhi\'s fast unto death against this. Poona Pact: Separate electorate replaced with joint electorate with reserved seats. Ambedkar conceded.',
        },
        {
            term: 'Government of India Act, 1935',
            definition: 'Longest British Act (321 sections). Federal scheme proposed (never implemented - princes refused). Provincial Autonomy introduced. Bicameral legislature in 6 provinces. Federal Court established. RBI created. 70% of Indian Constitution drawn from this.',
        },
        {
            term: 'Revolutionary Activities (1920s-30s)',
            definition: 'HRA (1924): Hindustan Republican Association, Sachindra Sanyal. Kakori (1925). HSRA (1928): Hindustan Socialist Republican Association (renamed). Lahore Conspiracy (1929): Bhagat Singh, Rajguru, Sukhdev executed (1931). Chittagong Armory Raid (1930): Surya Sen.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-h07-01',
            headline: 'RSS Centenary (1925-2025)',
            date: '2025',
            source: 'Various',
            teachingHook: 'Rashtriya Swayamsevak Sangh (RSS) was founded by Dr. K.B. Hedgewar on Vijayadashami 1925 in Nagpur. Understanding its founding context: 1920s saw rise of various ideological organizations (CPI, RSS, HSRA) responding to nationalism in different ways.',
            relatedTopics: ['1920s ideology', 'Dr. Hedgewar', 'Nationalist organizations'],
            iscentenary: true,
        },
        {
            id: 'ca-h07-02',
            headline: 'Communist Party of India Centenary (1925)',
            date: '2025',
            source: 'Various',
            teachingHook: 'CPI was formally established at Kanpur Conference (Dec 1925). Key figures: M.N. Roy, S.A. Dange. Earlier: Kanpur Bolshevik Conspiracy Case (1924). Shows left-wing response to colonial rule alongside revolutionary and Gandhian methods.',
            relatedTopics: ['CPI', 'M.N. Roy', 'Left movement'],
            iscentenary: true,
        },
        {
            id: 'ca-h07-03',
            headline: 'UPSC/PSC Centenary (1926-2026)',
            date: '2026',
            source: 'UPSC',
            teachingHook: 'Lee Commission (1924) recommended creation of Public Service Commission. First PSC set up on Oct 1, 1926 (became UPSC post-independence). 2026 marks centenary of civil service commission in India.',
            relatedTopics: ['Lee Commission', 'Civil services history', 'PSC'],
            iscentenary: true,
        },
    ],

    prelimsPointers: [
        { fact: 'Chauri Chaura (Feb 5, 1922): NCM withdrawn after police station burned', category: 'Year', highlight: true },
        { fact: 'Swaraj Party (1923): C.R. Das & Motilal Nehru, "Council Entry"', category: 'Movement' },
        { fact: 'Simon Commission (1927): All-white, "Simon Go Back"', category: 'Year' },
        { fact: 'Lahore Congress (1929): Purna Swaraj resolution, Jawaharlal Nehru president', category: 'Year', highlight: true },
        { fact: 'Dandi March: March 12 - April 6, 1930, 240 miles', category: 'Movement', highlight: true },
        { fact: 'Gandhi-Irwin Pact (1931): CDM suspended, Gandhi to RTC II', category: 'Treaty' },
        { fact: 'Poona Pact (1932): Joint electorate with reserved seats for Depressed Classes', category: 'Treaty', highlight: true },
        { fact: 'GOI Act 1935: Provincial Autonomy, Federal Court, RBI', category: 'Act', highlight: true },
        { fact: '70% of Indian Constitution derived from GOI Act 1935', category: 'Act', highlight: true },
        { fact: 'HRA (1924) renamed to HSRA (1928) - added "Socialist"', category: 'Movement' },
        { fact: 'Lahore Conspiracy Case: Bhagat Singh, Rajguru, Sukhdev (executed 1931)', category: 'Year', highlight: true },
        { fact: 'Chittagong Armory Raid (1930): Surya Sen (Master Da)', category: 'Movement' },
        { fact: 'Lee Commission (1924): Recommended Public Service Commission', category: 'Year' },
        { fact: 'RSS founded 1925: Dr. K.B. Hedgewar, Nagpur, Vijayadashami', category: 'Year' },
        { fact: 'CPI founded 1925: Kanpur Conference, M.N. Roy, S.A. Dange', category: 'Year' },
    ],

    timeline: [
        { year: '1920', event: 'NCM launched with Khilafat', significance: 'First mass movement under Gandhi' },
        { year: '1922', event: 'Chauri Chaura, NCM withdrawn', significance: 'Gandhi\'s non-violence principle' },
        { year: '1923', event: 'Swaraj Party formed', significance: 'Council entry strategy' },
        { year: '1925', event: 'Kakori, RSS & CPI founded', significance: 'Multiple ideological streams' },
        { year: '1927', event: 'Simon Commission', significance: '"Simon Go Back"' },
        { year: '1929', event: 'Lahore Congress: Purna Swaraj', significance: 'Complete Independence goal' },
        { year: '1930', event: 'Dandi March, CDM begins', significance: 'Salt Satyagraha' },
        { year: '1931', event: 'Gandhi-Irwin Pact, RTC II', significance: 'Negotiations' },
        { year: '1932', event: 'Communal Award, Poona Pact', significance: 'Depressed Classes representation' },
        { year: '1935', event: 'Government of India Act', significance: 'Provincial Autonomy, blueprint for Constitution' },
    ],

    pyqAlert: 'Focus on: Chronology (NCM→CDM→RTCs→1935), Act provisions (1935), Revolutionary organizations (HRA/HSRA), Ideological organizations (1925)',

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
