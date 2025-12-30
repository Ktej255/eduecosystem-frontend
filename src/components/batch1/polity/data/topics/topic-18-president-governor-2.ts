// Topic 18: President & Governor - II
// Powers (Executive, Legislative, Financial, Judicial) & Pardoning Power Comparison

import { PolityTopic } from '../polity-types';

export const topic18PresidentGovernor2: PolityTopic = {
    id: 18,
    module: 'C',
    title: 'President & Governor - II',
    syllabusTag: 'Module C: The Executive',

    staticFocus: 'Powers (Executive, Legislative, Veto, Ordinance, Pardon) & Comparison',

    coreArticles: [
        { number: '72', title: 'President\'s Pardoning Power', description: 'Grant pardons, reprieves, respites, remissions. Suspend, remit, commute sentences for: (a) Court Martial, (b) Union law offences, (c) Death sentences.' },
        { number: '161', title: 'Governor\'s Pardoning Power', description: 'Similar to President but for State law offences ONLY. Cannot pardon death sentence or Court Martial.' },
        { number: '111', title: 'President\'s Veto', description: 'President can: (a) Give assent, (b) Withhold assent, (c) Return to Parliament (except Money Bills). If returned and passed again, MUST give assent.' },
        { number: '200', title: 'Governor\'s Veto', description: 'Can: (a) Give assent, (b) Withhold, (c) Return to legislature, (d) Reserve for President consideration. If returned and passed, MUST give assent.' },
        { number: '123', title: 'President\'s Ordinance', description: 'When Parliament not in session and President satisfied of need. Has force of Act. Must be laid before Parliament within 6 weeks. Lapses if not approved.' },
        { number: '213', title: 'Governor\'s Ordinance', description: 'Similar to President. Requires President\'s instruction for: Concurrent List matters, Art 200 matters, or if bill would have needed President\'s assent.' },
    ],

    keyConcepts: [
        {
            term: 'Executive Powers',
            definition: 'President: All executive action in his name (Art 53). Appoint PM, Ministers, AG, CAG, Governors, Judges. Commander-in-Chief. Governor: Executive power of state. Appoint CM, Ministers, AG, VC of state universities.',
        },
        {
            term: 'Legislative Powers',
            definition: 'President: Summon/prorogue/dissolve. Address joint session. Nominate 12 to RS, 2 Anglo-Indians to LS (till 2020). Governor: Similar state powers. Nominate 1/6 to Legislative Council.',
        },
        {
            term: 'Veto Powers',
            definition: 'Absolute Veto: Withhold assent. Suspensive Veto: Return for reconsideration. Pocket Veto: Neither sign nor return. President has pocket veto (no time limit). Governor\'s pocket veto curtailed by SC (2024).',
        },
        {
            term: 'Pardoning Power Comparison',
            definition: 'President: All offences, including death sentence and Court Martial. Governor: State law offences only, CANNOT pardon death sentence or Court Martial. Both bound by Cabinet advice (Epuru Sudhakar 2006).',
        },
        {
            term: 'Ordinance Making',
            definition: 'Quasi-legislative power. When Houses not in session. Force of law but temporary. Must be approved within 6 weeks of session. RC Cooper: Cannot be used to bypass legislature. 38th Amd validated ordinances from judicial review (struck down).',
        },
        {
            term: 'Discretionary Powers of Governor',
            definition: 'Reserve bills for President. Recommend President\'s Rule. Report breakdown to President. Appoint CM (hung assembly). Seek information from CM. Administer tribal areas (6th Schedule states).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-18-01',
            headline: 'Pocket Veto Killed for Governors (Nov 2023/Jan 2024)',
            date: 'Nov 2023',
            source: 'Supreme Court',
            teachingHook: 'The SC ruled that a Governor CANNOT sit on a Bill indefinitely. If they withhold assent, they must return the Bill to the Legislature "as soon as possible". This effectively killed the Pocket Veto for State Bills. Explain the First Proviso to Article 200—if the Assembly passes it again, the Governor MUST sign.',
            caseReference: 'State of Punjab v. Principal Secretary to the Governor',
            relatedArticles: ['200'],
        },
        {
            id: 'ca-18-02',
            headline: 'Governor Reserving Bills to President (Kerala/TN 2024)',
            date: '2024',
            source: 'Supreme Court',
            teachingHook: 'The Kerala and TN Governors reserved bills for the President after sitting on them for years. The SC questioned if a Governor can use "Reservation for President" as a delay tactic. Can a Governor reserve any bill? (Only those endangering HC are mandatory; others are discretionary but must be bona fide).',
            relatedArticles: ['200', '201'],
        },
    ],

    comparisonTable: {
        title: 'Pardoning Powers',
        columnAHeader: 'President (Art 72)',
        columnBHeader: 'Governor (Art 161)',
        rows: [
            { aspect: 'Scope', columnA: 'Court Martial + Union Laws + Death', columnB: 'State Law offences only' },
            { aspect: 'Death Sentence', columnA: 'Can pardon', columnB: 'Cannot pardon' },
            { aspect: 'Court Martial', columnA: 'Can pardon', columnB: 'Cannot pardon' },
            { aspect: 'Advice', columnA: 'Bound by Cabinet', columnB: 'Bound by State Cabinet' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 72: President can pardon death sentence; Art 161: Governor cannot', category: 'Article', highlight: true },
        { fact: 'Epuru Sudhakar 2006: Pardoning power subject to Cabinet advice', category: 'Case' },
        { fact: 'President has Pocket Veto (no time limit); Governor\'s pocket veto killed', category: 'Article', highlight: true },
        { fact: 'Art 200: Governor can reserve bills for President', category: 'Article' },
        { fact: '2024 SC: Governor cannot sit on bills indefinitely', category: 'Case', highlight: true },
        { fact: 'Art 123: President\'s Ordinance - 6 weeks to get parliamentary approval', category: 'Article', highlight: true },
        { fact: 'Governor\'s Discretion: Recommend Art 356, Reserve bills, Appoint CM', category: 'Article' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
