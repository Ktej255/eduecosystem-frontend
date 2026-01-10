// Topic 5: Citizenship
// Constitutional Provisions, Citizenship Act 1955, CAA, NRC

import { PolityTopic } from '../polity-types';

export const topic05Citizenship: PolityTopic = {
    id: 5,
    module: 'I',
    title: 'Citizenship',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Constitutional Provisions (Art 5-11), Citizenship Act 1955, & CAA/NRC Concepts',

    coreArticles: [
        { number: '5', title: 'Citizenship at Commencement', description: 'Citizen if: (a) Born in India, (b) Either parent born in India, (c) Ordinarily resident for 5 years before Constitution' },
        { number: '6', title: 'Rights of Migrants from Pakistan', description: 'Before July 19, 1948: Automatic citizen. After: Registered by officer of government' },
        { number: '7', title: 'Rights of Migrants to Pakistan', description: 'Those who migrated to Pakistan after March 1, 1947 are NOT citizens (unless returned with permit)' },
        { number: '8', title: 'Rights of Overseas Indians', description: 'Person of Indian origin residing outside India can register as citizen' },
        { number: '9', title: 'Automatic Loss of Citizenship', description: 'If a person voluntarily acquires citizenship of another country, they cease to be Indian citizen' },
        { number: '10', title: 'Continuance of Citizenship', description: 'Citizenship continues subject to any law made by Parliament' },
        { number: '11', title: 'Parliament\'s Power', description: 'Parliament can make any law regarding citizenship. Thus, Citizenship Act 1955 was enacted' },
    ],

    keyConcepts: [
        {
            term: 'Single Citizenship',
            definition: 'Unlike USA, India has single citizenship only. No state citizenship. Ensures unity and integration.',
        },
        {
            term: 'Citizenship Act, 1955',
            definition: 'Provides for acquisition & loss of citizenship. Original modes: Birth, Descent, Registration, Naturalisation. Lost by: Renunciation, Termination, Deprivation.',
        },
        {
            term: 'Acquisition by Birth',
            definition: 'Born in India on/after Jan 26, 1950 + before July 1, 1987: Citizen. After Jul 1, 1987: At least one parent must be citizen. After Dec 3, 2004: Both parents citizens OR one citizen + one not illegal migrant.',
        },
        {
            term: 'Acquisition by Naturalisation',
            definition: 'On application, if: Resided in India for 12 months immediately before + Resided for 11 years in preceding 14 years. CAA reduced this to 5 years for specific communities.',
        },
        {
            term: 'Overseas Citizen of India (OCI)',
            definition: 'Introduced in 2005. Lifetime visa, no voting rights, no govt jobs. For foreign nationals of Indian origin. Can\'t hold public office. Not considered citizen for "natural-born citizen" posts.',
        },
        {
            term: 'Citizenship Amendment Act, 2019 (CAA)',
            definition: 'Amended the 1955 Act. Provides path to citizenship for persecuted minorities (Hindu, Sikh, Jain, Buddhist, Christian, Parsi) from Pakistan, Bangladesh, Afghanistan. Cut-off date: Dec 31, 2014. Naturalisation reduced from 11 to 5 years. Rules notified on March 11, 2024.',
        },
        {
            term: 'National Register of Citizens (NRC)',
            definition: 'Assam NRC: Based on Assam Accord (1985). Cut-off: March 24, 1971 (Section 6A of Citizenship Act). Final list: Aug 2019. 19 lakh excluded. Pan-India NRC proposed but not implemented.',
        },
        {
            term: 'Section 6A (Assam Special Provision)',
            definition: 'Inserted by Citizenship (Amendment) Act, 1985. Persons entering Assam between Jan 1, 1966 to March 25, 1971 are deemed citizens. Those after March 25, 1971 are foreigners.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-05-01',
            headline: 'CAA Rules Notified (March 11, 2024)',
            date: 'March 2024',
            source: 'Gazette of India / PIB',
            teachingHook: 'The Ministry of Home Affairs finally notified the rules for the Citizenship Amendment Act (CAA), 2019, just before the elections. Explain the "Cut-off date" (Dec 31, 2014) and "Naturalisation" time reduction (11 years to 5 years). The rules allow online application via the CAA portal.',
            relatedArticles: ['11'],
        },
        {
            id: 'ca-05-02',
            headline: 'SC Verdict on Section 6A (Assam Accord) - Oct 2024',
            date: 'Oct 2024',
            source: 'Supreme Court Judgment',
            teachingHook: 'A 5-judge Constitution Bench (4:1 majority) upheld the validity of Section 6A of the Citizenship Act, 1955. It validated the March 24, 1971 cut-off date for Assam citizenship. This is the most important case for 2026. Explain the difference between Citizenship by Birth vs. Registration under Section 6A.',
            caseReference: 'In Re: Section 6A of Citizenship Act, 1955',
            relatedArticles: ['6', '11'],
        },
    ],

    comparisonTable: {
        title: 'Citizenship Acquisition Modes',
        columnAHeader: 'Mode',
        columnBHeader: 'Key Condition',
        rows: [
            { aspect: 'Birth', columnA: 'Born in India', columnB: 'Both parents citizens OR one citizen + one not illegal migrant (after 2004)' },
            { aspect: 'Descent', columnA: 'Born outside India', columnB: 'Father is citizen at time of birth' },
            { aspect: 'Registration', columnA: 'Ordinary resident', columnB: '7 years residence + specified categories (spouses, minors, OCI)' },
            { aspect: 'Naturalisation', columnA: 'Ordinary resident', columnB: '12 months + 11 years in preceding 14 years (5 years for CAA)' },
            { aspect: 'Incorporation', columnA: 'Territory becomes part of India', columnB: 'Automatic citizenship to residents' },
        ],
    },

    prelimsPointers: [
        { fact: 'Articles 5-11: Constitutional provisions on citizenship (at commencement only)', category: 'Article', highlight: true },
        { fact: 'Article 11: Parliament can make any law on citizenship', category: 'Article', highlight: true },
        { fact: 'Citizenship Act 1955: 5 modes of acquisition, 3 modes of loss', category: 'Act', highlight: true },
        { fact: 'India has Single Citizenship only (unlike USA)', category: 'Article' },
        { fact: 'CAA 2019: Path for minorities from Pak/Bang/Afg, cut-off Dec 31, 2014', category: 'Act', highlight: true },
        { fact: 'CAA Rules notified: March 11, 2024', category: 'Year', highlight: true },
        { fact: 'Section 6A: Assam Accord, cut-off March 24, 1971', category: 'Act', highlight: true },
        { fact: 'OCI: Lifetime visa, no voting, no govt jobs', category: 'Act' },
        { fact: 'NRC Assam Final: Aug 2019, 19 lakh excluded', category: 'Year' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
