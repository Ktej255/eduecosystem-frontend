// Topic 35: Commissions for Vulnerable Sections
// NCSC, NCST, NCBC, NCM, NCW

import { PolityTopic } from '../polity-types';

export const topic35VulnerableCommissions: PolityTopic = {
    id: 35,
    module: 'VII',
    title: 'Commissions for Vulnerable Sections',
    syllabusTag: 'Module VII: Constitutional Bodies',

    staticFocus: 'NCSC (Art 338), NCST (Art 338A), NCBC (Art 338B), NCM, NCW',

    coreArticles: [
        { number: '338', title: 'National Commission for SCs', description: 'Investigate and monitor safeguards for SCs. Inquire into complaints. Participate in planning. Annual report to President.' },
        { number: '338A', title: 'National Commission for STs', description: 'Similar to NCSC but for STs. Separate commission since 2003 (89th Amendment).' },
        { number: '338B', title: 'National Commission for BCs', description: 'Added by 102nd Amendment (2018). Examine safeguards for BCs. Hear complaints. Advise on socio-economic development.' },
    ],

    keyConcepts: [
        {
            term: 'NCSC (Art 338)',
            definition: 'Constitutional body since 65th Amendment (1990). Earlier Special Officer for SCs & STs. Chairperson + Vice-Chairperson + 3 members. Investigates deprivation of rights. Powers of civil court.',
        },
        {
            term: 'NCST (Art 338A)',
            definition: 'Separated from NCSC by 89th Amendment (2003). Same structure. Focus on tribal rights, PESA implementation, forest rights, land alienation. Reports to President.',
        },
        {
            term: 'NCBC (Art 338B)',
            definition: 'Made constitutional by 102nd Amendment (2018). Earlier a statutory body (1993). Examines inclusion/exclusion in BC list. President to consult on state-wise lists. 105th Amendment (2021) restored state power to maintain OBC lists.',
        },
        {
            term: 'National Commission for Minorities (NCM)',
            definition: 'Statutory body (NCM Act 1992). Not constitutional. 6 religious minorities: Muslims, Christians, Sikhs, Buddhists, Jains, Parsis. Evaluates progress. Looks into complaints.',
        },
        {
            term: 'National Commission for Women (NCW)',
            definition: 'Statutory body (NCW Act 1990). Chairperson + 5 members. Examine safeguards for women. Review legislation. Inquire into complaints. Suo motu cognizance.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-35-01',
            headline: '105th Amendment & OBC Lists (2021)',
            date: '2021',
            source: '105th Constitutional Amendment',
            teachingHook: 'After the Maratha reservation case (2021), the SC held that only the Centre could amend OBC lists. The 105th Amendment (2021) restored the power of state governments to maintain their own OBC lists. Explain the interplay of Art 338B, 342A, and the 102nd/105th Amendments.',
            relatedArticles: ['338B', '342A'],
        },
    ],

    comparisonTable: {
        title: 'Constitutional vs Statutory Commissions',
        columnAHeader: 'Constitutional',
        columnBHeader: 'Statutory',
        rows: [
            { aspect: 'NCSC', columnA: 'Art 338', columnB: '-' },
            { aspect: 'NCST', columnA: 'Art 338A', columnB: '-' },
            { aspect: 'NCBC', columnA: 'Art 338B', columnB: '-' },
            { aspect: 'NCM', columnA: '-', columnB: 'NCM Act 1992' },
            { aspect: 'NCW', columnA: '-', columnB: 'NCW Act 1990' },
            { aspect: 'NHRC', columnA: '-', columnB: 'PHR Act 1993' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 338: NCSC - Constitutional since 65th Amd (1990)', category: 'Article', highlight: true },
        { fact: 'Art 338A: NCST - Separated by 89th Amd (2003)', category: 'Amendment', highlight: true },
        { fact: 'Art 338B: NCBC - Constitutional since 102nd Amd (2018)', category: 'Amendment', highlight: true },
        { fact: '105th Amd (2021): States can maintain own OBC lists', category: 'Amendment' },
        { fact: 'NCM, NCW, NHRC are statutory, not constitutional', category: 'Act' },
        { fact: '6 Minorities: Muslims, Christians, Sikhs, Buddhists, Jains, Parsis', category: 'Act' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
