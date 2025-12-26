// Topic 23: Parliament - III
// Bills - Ordinary, Money, Financial, Constitutional Amendment, Joint Sitting

import { PolityTopic } from '../polity-types';

export const topic23Parliament3: PolityTopic = {
    id: 23,
    module: 'D',
    title: 'Parliament - III: Legislative Process',
    syllabusTag: 'Module D: The Legislature',

    staticFocus: 'Types of Bills (Ordinary, Money, Financial) & Joint Sitting',

    coreArticles: [
        { number: '107', title: 'Ordinary Bills', description: 'Can be introduced in either House. Passed by both Houses. If disagreement, joint sitting (Art 108).' },
        { number: '108', title: 'Joint Sitting', description: 'President can summon if bill pending for 6 months or rejected by other House. Presided by Speaker. Simple majority decides.' },
        { number: '109', title: 'Money Bills', description: 'Introduced only in LS. RS cannot reject/amend (only recommend). LS may or may not accept recommendations. Certified by Speaker.' },
        { number: '110', title: 'Definition of Money Bill', description: 'Deals with: taxation, borrowing, Consolidated Fund, appropriation, etc. Speaker\'s decision is final.' },
        { number: '117', title: 'Financial Bills', description: 'Deal with fiscal matters but don\'t fall under Art 110. Type I: Need President\'s recommendation. Type II: Ordinary bill procedure.' },
    ],

    keyConcepts: [
        {
            term: 'Ordinary Bill Procedure',
            definition: 'First Reading (Introduction). Second Reading (Discussion, committee). Third Reading (Voting). Sent to other House. If passed with amendments, returned. If disagreed, Joint Sitting possible.',
        },
        {
            term: 'Money Bill (Art 109-110)',
            definition: 'Only in LS. RS has 14 days to return with recommendations (LS can ignore). Speaker certifies (decision final, unchallengeable). President cannot return, must give assent.',
        },
        {
            term: 'Financial Bills',
            definition: 'Type I (Art 117(1)): Deal with Art 110 matters + other matters. Need President\'s recommendation. Introduced in LS only. Type II (Art 117(3)): Expenditure from Consolidated Fund. Can be introduced in either House.',
        },
        {
            term: 'Joint Sitting (Art 108)',
            definition: 'Only for Ordinary and Financial Bills, NOT Money Bills or Constitutional Amendments. Called when: Bill rejected by other House OR Amendments not agreed OR 6 months passed. Presided by Speaker (Deputy if absent). 3 instances: Dowry Prohibition (1961), Banking Service Commission (1978), POTA (2002).',
        },
        {
            term: 'Speaker\'s Certification',
            definition: 'Speaker decides if bill is Money Bill. Decision is FINAL. Aadhaar case (2018): SC held Speaker\'s decision on Money Bill can be reviewed for "manifest arbitrariness" but deferred to larger bench. Pending.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-23-01',
            headline: 'Aadhaar as Money Bill (Pending 2024)',
            date: 'Pending (7-judge bench)',
            source: 'Supreme Court',
            teachingHook: 'In the Aadhaar judgment (2018), SC upheld the Act but referred the question "Can courts review Speaker\'s decision on Money Bill?" to a 7-judge bench. Use this to explain Article 110 and the Speaker\'s finality on certification. Case is still pending.',
            caseReference: 'K.S. Puttaswamy v. Union of India (Aadhaar)',
            relatedArticles: ['110', '109'],
        },
    ],

    comparisonTable: {
        title: 'Money Bill vs Financial Bill vs Ordinary Bill',
        columnAHeader: 'Feature',
        columnBHeader: 'Money Bill / Financial I / Ordinary',
        rows: [
            { aspect: 'Introduction', columnA: 'LS only', columnB: 'LS only / Either House' },
            { aspect: 'RS Power', columnA: 'Recommend only (14 days)', columnB: 'Full / Full' },
            { aspect: 'Joint Sitting', columnA: 'Not possible', columnB: 'Not possible / Possible' },
            { aspect: 'President\'s Veto', columnA: 'Cannot withhold', columnB: 'Can withhold' },
            { aspect: 'Speaker Certification', columnA: 'Required', columnB: 'Not Required' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 109: Money Bill only in LS, RS has 14 days, cannot reject', category: 'Article', highlight: true },
        { fact: 'Art 110: Speaker\'s decision on Money Bill is FINAL', category: 'Article', highlight: true },
        { fact: 'Joint Sitting: Only for Ordinary and Financial Bills, not Money Bill', category: 'Article', highlight: true },
        { fact: '3 Joint Sittings: Dowry 1961, Banking 1978, POTA 2002', category: 'Year' },
        { fact: 'President must give assent to Money Bill (no veto)', category: 'Article' },
        { fact: 'Aadhaar: Passed as Money Bill, pending 7-judge review', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
