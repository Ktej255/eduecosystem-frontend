// Topic 48: Electoral Reforms
// NOTA, EVM, VVPAT, Electoral Bonds, State Funding

import { PolityTopic } from '../polity-types';

export const topic48ElectoralReforms: PolityTopic = {
    id: 48,
    module: 'IX',
    title: 'Electoral Reforms',
    syllabusTag: 'Module IX: Governance',

    staticFocus: 'NOTA, EVM/VVPAT, Electoral Bonds, State Funding of Elections',

    coreArticles: [],

    keyConcepts: [
        {
            term: 'NOTA (None of the Above)',
            definition: 'Introduced in 2013 after PUCL v. Union of India. Allows voters to reject all candidates. Has no legal consequence - candidate with highest votes wins even if NOTA is higher. Debate on making it binding.',
        },
        {
            term: 'EVM (Electronic Voting Machine)',
            definition: 'Used since 2004 general elections. Developed by BEL and ECIL. Standalone, not connected to internet. Tamper-proof (SC upheld). VVPAT added for verification (mandatory since 2019).',
        },
        {
            term: 'VVPAT (Voter Verified Paper Audit Trail)',
            definition: 'Prints paper slip showing candidate voted for. Displayed for 7 seconds. Goes into sealed box. SC: 5 random VVPATs verified per constituency (2019). Increased transparency.',
        },
        {
            term: 'Electoral Bonds (2017-2024)',
            definition: 'Introduced in 2017. Anonymous donations to parties. Sold by SBI. Struck down by SC in Feb 2024 as violating Right to Information (Art 19(1)(a)). SBI ordered to disclose all bond data.',
        },
        {
            term: 'State Funding of Elections',
            definition: 'Proposed to reduce corporate influence. Indrajit Gupta Committee (1998): Recommended partial state funding. Dinesh Goswami Committee. 2nd ARC supported. Not implemented. Free time on AIR/DD exists.',
        },
        {
            term: 'Major Electoral Reform Proposals',
            definition: 'ONOE (Simultaneous Elections). Proportional Representation debate. Compulsory voting. Right to Recall. Lowering voting age to 16 (discussed). Inner-party democracy. Criminalisation check.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-48-01',
            headline: 'Electoral Bonds Struck Down (Feb 2024)',
            date: 'Feb 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC unanimously struck down Electoral Bonds as unconstitutional. Key ratio: Voters have a right to know who funds political parties (Art 19(1)(a)). SBI disclosed data on bonds purchased and redemptions. This is the MOST IMPORTANT polity judgment for 2025-26.',
            caseReference: 'ADR v. Union of India',
            relatedArticles: ['19(1)(a)'],
        },
        {
            id: 'ca-48-02',
            headline: 'One Nation One Election (ONOE) Bill',
            date: 'Dec 2024',
            source: 'Lok Sabha',
            teachingHook: 'The Constitution (129th Amendment) Bill for simultaneous elections was introduced in LS and referred to JPC. It proposes single election for LS and state assemblies. Requires constitutional amendments (Art 83, 172, 356). Discuss the pros (cost, governance) and cons (federalism, democracy).',
            relatedArticles: ['83', '172', '368'],
        },
    ],

    prelimsPointers: [
        { fact: 'NOTA: 2013, PUCL case, no legal consequence if NOTA wins', category: 'Case', highlight: true },
        { fact: 'EVM: Used nationally since 2004, BEL/ECIL make them', category: 'Year' },
        { fact: 'VVPAT: 5 random machines verified per constituency (2019 SC)', category: 'Case' },
        { fact: 'Electoral Bonds: 2017-2024, struck down Feb 2024', category: 'Case', highlight: true },
        { fact: 'State Funding: Indrajit Gupta Committee 1998 recommended', category: 'Commission' },
        { fact: 'ONOE Bill 2024: Referred to JPC, amends Art 83, 172', category: 'Year', highlight: true },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
