// Topic 14: Centre-State Relations
// Legislative, Administrative, & Financial Relations

import { PolityTopic } from '../polity-types';

export const topic14CentreStateRelations: PolityTopic = {
    id: 14,
    module: 'II',
    title: 'Centre-State Relations',
    syllabusTag: 'Module II: System of Government',

    staticFocus: 'Legislative (Art 245-255), Administrative, & Financial Relations',

    coreArticles: [
        { number: '245', title: 'Territorial Extent of Laws', description: 'Parliament can make laws for whole or part of India. State legislatures for whole or part of that state.' },
        { number: '246', title: 'Subject-matter of Laws', description: 'Parliament: Union List + Concurrent. State: State List + Concurrent. Residuary: Parliament.' },
        { number: '254', title: 'Repugnancy', description: 'In concurrent subjects, if state law conflicts with central law, central law prevails. Exception: State law prevails if it has received President\'s assent.' },
        { number: '256', title: 'State\'s Obligations', description: 'State executive power must ensure compliance with Union laws. Must not impede Union\'s executive power.' },
        { number: '263', title: 'Inter-State Council', description: 'President may establish council to advise on disputes between states, investigate matters of common interest.' },
        { number: '280', title: 'Finance Commission', description: 'President constitutes FC every 5 years to recommend distribution of taxes between Centre and States.' },
    ],

    keyConcepts: [
        {
            term: 'Legislative Relations',
            definition: 'Three Lists in 7th Schedule. Parliament supreme on Union + Residuary. States on State List. Concurrent: Both, but Centre prevails (Art 254). 5 circumstances Parliament can legislate on State List: Art 249, 250, 252, 253, 356.',
        },
        {
            term: 'Administrative Relations',
            definition: 'Art 256-263. State must comply with Union laws. Union can give directions. Governor acts as Centre\'s agent. All-India Services shared. Centre can deploy CAPF without state consent.',
        },
        {
            term: 'Financial Relations',
            definition: 'Art 268-293. Taxes levied by Centre but collected by States (Stamp Duties). Taxes levied and collected by Centre but assigned to States (GST). Grants-in-aid (Art 275). FC recommends distribution.',
        },
        {
            term: 'Sarkaria Commission (1988)',
            definition: 'Reviewed Centre-State relations. Recommended: Use Art 356 sparingly. Strengthen Inter-State Council. All-India Services to continue. Governor should be eminent person. Consultation before Governor\'s appointment.',
        },
        {
            term: 'Punchhi Commission (2010)',
            definition: 'Recommended: Localized Emergency (not whole state). Governor should have fixed tenure. Establish Constitutional bench for Art 131 disputes. Greater role for Zonal Councils.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-14-01',
            headline: 'Governor vs State Govts (2024)',
            date: '2024',
            source: 'Supreme Court',
            teachingHook: 'Supreme Court observations on Governors of Punjab, Kerala, and TN delaying bills. The court ruled that a Governor cannot sit on bills indefinitely and must act "as soon as possible". This touches on the balance in Centre-State administrative relations.',
            relatedArticles: ['200', '256'],
        },
        {
            id: 'ca-14-02',
            headline: '16th Finance Commission',
            date: '2024',
            source: 'Ministry of Finance',
            teachingHook: 'Arvind Panagariya appointed as 16th FC Chairman. Terms of Reference include "performance-based incentives" for states, raising concerns about conditional federalism. Report due Oct 2025.',
            relatedArticles: ['280'],
        },
    ],

    prelimsPointers: [
        { fact: '7th Schedule: Union (100), State (61), Concurrent (52 items)', category: 'Article', highlight: true },
        { fact: 'Art 254: In Concurrent, Centre prevails unless State law has President assent', category: 'Article', highlight: true },
        { fact: '5 situations Parliament can legislate on State List: Art 249, 250, 252, 253, 356', category: 'Article' },
        { fact: 'Art 263: Inter-State Council established by President', category: 'Article' },
        { fact: 'Art 280: Finance Commission every 5 years', category: 'Article', highlight: true },
        { fact: 'Sarkaria Commission: 1988 - Use Art 356 sparingly', category: 'Commission' },
        { fact: 'Punchhi Commission: 2010 - Localized emergency, Governor tenure', category: 'Commission' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
