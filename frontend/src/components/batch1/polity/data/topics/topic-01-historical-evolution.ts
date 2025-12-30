// Topic 1: Historical Evolution
// Regulating Act 1773 to Independence Act 1947

import { PolityTopic } from '../polity-types';

export const topic01HistoricalEvolution: PolityTopic = {
    id: 1,
    module: 'A',
    title: 'Historical Evolution',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Regulating Act 1773 to Independence Act 1947 (Focus: 1919 & 1935 Acts)',

    coreArticles: [], // Historical topic - no specific articles

    keyConcepts: [
        {
            term: 'Regulating Act, 1773',
            definition: 'First step by British Parliament to regulate East India Company affairs. Created post of Governor-General of Bengal (Warren Hastings). Established Supreme Court at Calcutta.',
            example: 'Warren Hastings became the first Governor-General of Bengal'
        },
        {
            term: 'Pitt\'s India Act, 1784',
            definition: 'Established dual control: Court of Directors (Commercial) + Board of Control (Political). Secretary of State for India created.',
        },
        {
            term: 'Charter Act, 1833',
            definition: 'Governor-General of Bengal became Governor-General of India. Company\'s commercial activities ended. Law Commission under Macaulay.',
            example: 'Lord William Bentinck - First Governor-General of India'
        },
        {
            term: 'Charter Act, 1853',
            definition: 'Separated legislative and executive functions. Open competition for civil services. Last Charter Act.',
        },
        {
            term: 'Government of India Act, 1858',
            definition: 'End of Company Rule. Crown took over. Viceroy replaced Governor-General. Secretary of State for India with Council.',
            example: 'Lord Canning - First Viceroy of India'
        },
        {
            term: 'Indian Councils Act, 1861',
            definition: 'Beginning of representative institutions. Indians nominated to Viceroy\'s Council. Portfolio system.',
        },
        {
            term: 'Indian Councils Act, 1892',
            definition: 'Indirect elections introduced (recommendation, though not called "election"). Budget discussion allowed.',
        },
        {
            term: 'Indian Councils Act, 1909 (Morley-Minto Reforms)',
            definition: 'Separate electorate for Muslims - "Seed of Partition". Direct elections in limited form. Satyendra Prasad Sinha - First Indian in Viceroy\'s Council.',
        },
        {
            term: 'Government of India Act, 1919 (Montagu-Chelmsford Reforms)',
            definition: 'Dyarchy at provincial level: Reserved (British) & Transferred (Indian) subjects. Bicameral legislature at Centre. Direct elections expanded.',
            example: 'Public Order - Reserved; Education - Transferred'
        },
        {
            term: 'Government of India Act, 1935',
            definition: 'Federal structure proposed (never implemented due to princes). Provincial autonomy, bicameral legislatures, All-India Federation, Federal Court, RBI creation. 70% of 1950 Constitution borrowed from this Act.',
        },
        {
            term: 'Indian Independence Act, 1947',
            definition: 'Two independent dominions: India & Pakistan. Constituent Assemblies as both Legislature & Constitution-maker. Governor-General as Constitutional Head. Princely states free to join either.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-01-01',
            headline: '75th Anniversary of Constitution Adoption (Nov 26, 2024)',
            date: 'Nov 2024',
            source: 'PIB (Ministry of Parliamentary Affairs)',
            teachingHook: 'The government launched the year-long campaign "Hamara Samvidhan, Hamara Swabhimaan" to mark 75 years of adoption (1949–2024). Use this to discuss the timeline of the Constitution\'s evolution compared to the British Acts (1919/1935).',
        },
        {
            id: 'ca-01-02',
            headline: '"Samvidhan Sadan" (Old Parliament Renamed)',
            date: '2024',
            source: 'The Hindu / Sansad TV',
            teachingHook: 'The Old Parliament building was officially renamed "Samvidhan Sadan". While teaching the Central Legislative Assembly (1919 Act), mention that this was the building where the Constituent Assembly met and drafted the Constitution.',
        },
    ],

    prelimsPointers: [
        { fact: 'Regulating Act 1773: First step by British Parliament to control EIC', category: 'Act', highlight: true },
        { fact: 'Warren Hastings: First Governor-General of Bengal (1773)', category: 'Year' },
        { fact: 'Lord William Bentinck: First Governor-General of India (1833)', category: 'Year' },
        { fact: 'Lord Canning: First Viceroy of India (1858)', category: 'Year', highlight: true },
        { fact: '1909 Act: Separate Electorate for Muslims - Morley-Minto', category: 'Act', highlight: true },
        { fact: '1919 Act: Dyarchy at Provincial level (Montagu-Chelmsford)', category: 'Act', highlight: true },
        { fact: '1935 Act: Federal structure proposed, Provincial autonomy given', category: 'Act', highlight: true },
        { fact: '70% of Indian Constitution borrowed from GOI Act 1935', category: 'Year', highlight: true },
        { fact: '1947 Act: Created two dominions, CA became Legislature + Constitution-maker', category: 'Act' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
