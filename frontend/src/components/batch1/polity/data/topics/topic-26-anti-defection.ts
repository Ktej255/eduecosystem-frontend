// Topic 26: Anti-Defection Law
// 10th Schedule, Exceptions, Kihoto Hollohan case, Recent amendments

import { PolityTopic } from '../polity-types';

export const topic26AntiDefection: PolityTopic = {
    id: 26,
    module: 'IV',
    title: 'Anti-Defection Law',
    syllabusTag: 'Module IV: The Legislature',

    staticFocus: '10th Schedule, Exceptions, Kihoto Hollohan case, & Recent controversies',

    coreArticles: [],

    keyConcepts: [
        {
            term: '10th Schedule (52nd Amendment 1985)',
            definition: 'Disqualification on grounds of defection. Added by 52nd Amendment (1985). Applies to Parliament and State Legislatures. Presiding Officer decides. Decision subject to judicial review (Kihoto Hollohan).',
        },
        {
            term: 'Grounds for Disqualification',
            definition: '(a) MP/MLA voluntarily gives up party membership. (b) Votes/abstains against party direction without prior permission. (c) Nominated member joins party after 6 months.',
        },
        {
            term: 'Exception - Merger (Para 4)',
            definition: 'Not defection if 2/3rd of party members merge with another party. Original 1/3rd exception removed by 91st Amendment (2003). Now, 2/3rd required for valid merger.',
        },
        {
            term: '91st Amendment (2003)',
            definition: 'Raised merger threshold from 1/3rd to 2/3rd. Removed exemption for splits. Ministers cannot exceed 15% of House strength. Made defectors ineligible for ministerial berths.',
        },
        {
            term: 'Kihoto Hollohan Case (1992)',
            definition: 'SC upheld 10th Schedule as constitutional. Speaker\'s decision subject to judicial review. No immunity even if Speaker acts in "good faith". Para 7 (barring courts) struck down as unconstitutional.',
        },
        {
            term: 'Role of Presiding Officer',
            definition: 'Speaker/Chairman decides disqualification petitions. No time limit specified (a major criticism). Decision can be challenged in court under Art 136, 226, 227.',
        },
        {
            term: 'Criticisms & Reforms',
            definition: 'Speaker takes years to decide. Political bias alleged. Dinesh Goswami Committee: Independent tribunal. Venkatachaliah Commission: President should decide on EC advice. Pending reforms.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-26-01',
            headline: 'SC on Speaker\'s Delay in Disqualification (2024)',
            date: '2024',
            source: 'Supreme Court',
            teachingHook: 'The SC expressed concern over Speakers sitting on disqualification petitions for years. In multiple cases (Maharashtra, Jharkhand), the SC urged fixing a timeline. The Law Commission (Report 170) and Dinesh Goswami Committee recommended transferring power to an independent tribunal.',
            relatedArticles: ['10th Schedule'],
        },
        {
            id: 'ca-26-02',
            headline: 'Maharashtra Political Crisis (2022-24)',
            date: '2022-24',
            source: 'Supreme Court',
            teachingHook: 'A faction of MLAs rebelled, leading to a new CM. Disqualification petitions pending for 2 years. SC in May 2024 ruled the new Speaker\'s appointment was invalid as the old Speaker\'s no-confidence motion was pending. Discuss the interplay between 10th Schedule and State government formation.',
            relatedArticles: ['164', '10th Schedule'],
        },
    ],

    prelimsPointers: [
        { fact: '10th Schedule: Added by 52nd Amendment (1985)', category: 'Amendment', highlight: true },
        { fact: 'Defection: Voluntarily giving up membership or voting against party', category: 'Article', highlight: true },
        { fact: '91st Amd (2003): 2/3rd for merger (earlier 1/3rd)', category: 'Amendment', highlight: true },
        { fact: 'Kihoto Hollohan 1992: Speaker\'s decision subject to judicial review', category: 'Case', highlight: true },
        { fact: 'Speaker decides disqualification - No time limit (criticism)', category: 'Article' },
        { fact: '91st Amd: Defectors ineligible for ministerial berths', category: 'Amendment' },
        { fact: 'Maharashtra Crisis 2024: New Speaker appointment invalid', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
