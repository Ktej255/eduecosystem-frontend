// Topic 32: Elections & Political Parties
// Election Commission, RPA Act, Party Registration

import { PolityTopic } from '../polity-types';

export const topic32Elections: PolityTopic = {
    id: 32,
    module: 'G',
    title: 'Elections & Political Parties',
    syllabusTag: 'Module G: Constitutional Bodies',

    staticFocus: 'Election Commission (Art 324), RPA Acts, Party Registration & Recognition',

    coreArticles: [
        { number: '324', title: 'Election Commission', description: 'Superintendence, direction, control of elections to Parliament, State Legislatures, President, VP. CEC + such number of ECs as President may fix.' },
        { number: '325', title: 'No Discrimination', description: 'No person ineligible for electoral roll on religion, race, caste, sex.' },
        { number: '326', title: 'Adult Suffrage', description: 'Every citizen 18+ years shall be registered. 61st Amendment (1988) lowered age from 21 to 18.' },
        { number: '329', title: 'Bar on Court Interference', description: 'Courts cannot question validity of delimitation or electoral rolls. Election disputes only after election by petition.' },
    ],

    keyConcepts: [
        {
            term: 'Election Commission Composition',
            definition: 'CEC + 2 ECs (since 1993). Appointed by President. Term: 6 years or 65 years (whichever earlier). CEC can be removed only by impeachment (like SC judge). ECs can be removed on CEC\'s recommendation.',
        },
        {
            term: 'CEC vs ECs',
            definition: 'CEC has special protection - removed only by impeachment. ECs can be removed by President on CEC recommendation. All have equal voting power. Decision by majority.',
        },
        {
            term: 'RPA 1950',
            definition: 'Qualifications of voters. Preparation of electoral rolls. Delimitation of constituencies. Allocation of seats.',
        },
        {
            term: 'RPA 1951',
            definition: 'Conduct of elections. Registration of political parties. Qualifications/disqualifications of candidates. Corrupt practices. Election disputes.',
        },
        {
            term: 'Party Recognition',
            definition: 'National Party: 6% votes in 4+ states + 4 LS seats OR 2% LS seats from 3+ states. State Party: 6% votes in state + 2 assembly seats OR 3% assembly seats OR 1 LS seat per 25 seats. Benefits: Reserved symbol, free time on AIR/DD.',
        },
        {
            term: 'Free and Fair Elections',
            definition: 'Model Code of Conduct. EVM/VVPAT. Expenditure limits. Criminal background disclosure. NOTA option (since 2013). Affidavits on assets, criminal cases mandatory.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-32-01',
            headline: 'CEC Appointment Law (March 2024)',
            date: 'March 2024',
            source: 'CEC and Other ECs (Appointment) Act, 2023',
            teachingHook: 'Parliament changed the appointment procedure: Selection Committee = PM + Union Cabinet Minister (not Leader of Opposition) + CJI. Earlier SC judgment (Anoop Baranwal) had mandated PM + LoP + CJI. This Act overrode the SC direction. Pending challenge.',
            caseReference: 'Anoop Baranwal v. Union of India (2023)',
            relatedArticles: ['324'],
        },
        {
            id: 'ca-32-02',
            headline: 'Electoral Bonds Struck Down (Feb 2024)',
            date: 'Feb 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC struck down Electoral Bonds as violating right to information. SBI ordered to disclose all bonds data. Donor identity was the key issue. Link to Art 19(1)(a) and transparency in political funding.',
            caseReference: 'ADR v. Union of India',
            relatedArticles: ['324', '19(1)(a)'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 324: ECI has superintendence of elections to Parliament, State, Pres, VP', category: 'Article', highlight: true },
        { fact: 'CEC removed only by impeachment (like SC judge)', category: 'Article', highlight: true },
        { fact: '61st Amd (1988): Voting age 21 → 18', category: 'Amendment' },
        { fact: 'RPA 1950: Voters, rolls, delimitation. RPA 1951: Conduct, parties', category: 'Act', highlight: true },
        { fact: 'National Party: 6% in 4+ states + 4 LS seats OR 2% LS from 3+ states', category: 'Act' },
        { fact: 'CEC Appointment Act 2024: PM + Cabinet Minister + CJI (no LoP)', category: 'Act', highlight: true },
        { fact: 'Electoral Bonds struck down Feb 2024: Violated Art 19(1)(a)', category: 'Case', highlight: true },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
