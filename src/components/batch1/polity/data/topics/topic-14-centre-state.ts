// Topic 14: Centre-State Relations
// Legislative, Administrative, & Financial Relations
// Source: Chapter 15

import { PolityTopic } from '../polity-types';

export const topic14CentreStateRelations: PolityTopic = {
    id: 14,
    module: 'B',
    title: 'Centre-State Relations',
    syllabusTag: 'Module B: System of Government',

    staticFocus: 'Legislative (Art 245-255), Administrative (256-263), & Financial (268-293) Relations',

    coreArticles: [
        { number: '245', title: 'Territorial Extent', description: 'Parliament makes laws for whole/part of India. State Legislature for whole/part of State. Parliament can make extra-territorial laws.' },
        { number: '246', title: 'Subject-matter of Laws', description: 'Union List (I), State List (II), Concurrent List (III). Residuary powers with Parliament.' },
        { number: '249', title: 'National Interest', description: 'Parliament can legislate on State List if Rajya Sabha passes resolution by 2/3rd majority.' },
        { number: '250', title: 'Emergency Legislation', description: 'Parliament can legislate on State List during National Emergency.' },
        { number: '254', title: 'Inconsistency of Laws', description: 'Central law prevails over State law in Concurrent List. Exception: State law prevails if it has President\'s assent.' },
        { number: '256', title: 'Obligation of States', description: 'Executive power of State must ensure compliance with Parliamentary laws.' },
        { number: '262', title: 'Inter-state Water Disputes', description: 'Parliament provides for adjudication of disputes relating to inter-state rivers/valleys.' },
        { number: '263', title: 'Inter-State Council', description: 'President can establish to investigate and discuss subjects of common interest.' },
        { number: '268-293', title: 'Financial Relations', description: 'Allocation of taxing powers and distribution of revenues.' },
        { number: '280', title: 'Finance Commission', description: 'Quasi-judicial body constituted by President every 5 years to recommend tax distribution.' },
    ],

    keyConcepts: [
        {
            term: 'Territorial Extent',
            definition: 'Parliament: Whole India + Extra-territorial. State: Within State only. Exceptions: President regs for UTs; Governor directs for Scheduled/Tribal areas.',
        },
        {
            term: 'Legislative Distribution',
            definition: 'Union List (98 subjects): Defence, Banking, Foreign Affairs. State List (59 subjects): Police, Agriculture, Health. Concurrent List (52 subjects): Criminal Law, Education, Forests. Residuary: Parliament.',
        },
        {
            term: 'Parliament in State Field',
            definition: '5 Extraordinary Situations: 1. RS Resolution (Art 249). 2. National Emergency (Art 250). 3. Request by 2+ States (Art 252). 4. International Agreements (Art 253). 5. President\'s Rule (Art 356).',
        },
        {
            term: 'Centre\'s Control over State Legislation',
            definition: '1. Governor acts reserves bill for President. 2. Certain bills require President sanction (Freedom of trade). 3. Financial Emergency (Money bills reserved).',
        },
        {
            term: 'Administrative Relations',
            definition: 'Distribution of exec power follows legislative. Obligations: States must comply with Central laws & not impede Centre. Directions: Centre can direct states on comms, railways, linguistic minorities, ST welfare.',
        },
        {
            term: 'Financial Relations',
            definition: 'Union List Taxes: 13. State List Taxes: 18. Concurrent: GST (Special Provision). Residuary Taxes: Parliament. GST Council (Art 279A) decides rates.',
        },
        {
            term: 'Sarkaria Commission (1983-88)',
            definition: 'Opposed structural changes. Recommended: Permanent Inter-State Council (Art 263); Art 356 used sparingly; Strengthen All-India Services; Consult CM for Governor appointment.',
        },
        {
            term: 'Punchhi Commission (2007-10)',
            definition: 'Cooperative Federalism. Recommended: "Localized Emergency"; Fixed tenure for Governor; Impeachment of Governor; Consult states on Concurrent List bills.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-14-01',
            headline: 'Governor\'s Role on Bills (2024)',
            date: '2024',
            source: 'Supreme Court',
            teachingHook: 'Relates to Art 200. SC ruled Governors cannot indefinitely sit on bills. "As soon as possible" implies a reasonable timeframe.',
            relatedArticles: ['200', '201'],
        },
        {
            id: 'ca-14-02',
            headline: '16th Finance Commission',
            date: '2024',
            source: 'Finance Ministry',
            teachingHook: 'Arvind Panagariya leads 16th FC. Will decide tax devolution ratio (currently 41%) for 2026-31. Focus on fiscal federalism.',
            relatedArticles: ['280'],
        },
    ],

    prelimsPointers: [
        { fact: 'Union List: 98 subjects. State List: 59. Concurrent: 52.', category: 'Fact', highlight: true },
        { fact: '42nd Amendment (1976) transferred 5 subjects to Concurrent: Education, Forests, Weights, Wild Animals, Justice Admin.', category: 'Fact', highlight: true },
        { fact: 'Residuary Powers (Art 248): Vested in Parliament (unlike US/Australia where it\'s with States).', category: 'Concept' },
        { fact: 'Art 249: RS resolution (2/3 present & voting) empowers Parliament to legislate on State subject for 1 year.', category: 'Article', highlight: true },
        { fact: 'Art 262: Adjudication of river disputes. SC jurisdiction can be barred.', category: 'Article' },
        { fact: 'Art 263: Inter-State Council set up by President (Sarkaria Comm recommendation).', category: 'Article' },
        { fact: 'Financial Emergency (Art 360): Salaries can be reduced, Money bills reserved.', category: 'Article' },
        { fact: 'GST Council (Art 279A): Constitutional body. Joint forum of Centre & States.', category: 'Body', highlight: true },
        { fact: 'Rajamannar Committee (1969): Tamil Nadu. Demanded abolition of IAS/IPS, Art 356.', category: 'Commission' },
        { fact: 'Anandpur Sahib Resolution (1973): Demanded restricting Centre to Defence, Foreign Affairs, Comms, Currency.', category: 'Commission' },
        { fact: 'West Bengal Memo (1977): Demanded word "Union" be replaced by "Federal".', category: 'Commission' },
    ],

    priority: 'High',
    lastUpdated: 'Jan 2026',
};

