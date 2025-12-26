// Topic 20: PM & CM + Council of Ministers
// Roles, Responsibilities, Cabinet Committees, Kitchen Cabinet

import { PolityTopic } from '../polity-types';

export const topic20PMCM: PolityTopic = {
    id: 20,
    module: 'C',
    title: 'PM & CM + Council of Ministers',
    syllabusTag: 'Module C: The Executive',

    staticFocus: 'Roles, Cabinet Committees, & Kitchen Cabinet',

    coreArticles: [
        { number: '74', title: 'Council of Ministers', description: 'Council of Ministers with PM at head to aid and advise President.' },
        { number: '75', title: 'PM\'s Appointment & Other Provisions', description: 'PM appointed by President. Other ministers on PM\'s advice. Hold office during President\'s pleasure. Collective responsibility to Lok Sabha.' },
        { number: '163', title: 'State Council of Ministers', description: 'Council of Ministers with CM at head to aid and advise Governor.' },
        { number: '164', title: 'CM\'s Appointment & Other Provisions', description: 'CM appointed by Governor. Other ministers on CM\'s advice. Hold office during Governor\'s pleasure. Collective responsibility to State Legislature.' },
    ],

    keyConcepts: [
        {
            term: 'PM\'s Appointment',
            definition: 'President appoints leader of majority party/coalition. If no clear majority, President uses discretion. PM need not be MP at appointment but must become within 6 months. Can be from either House.',
        },
        {
            term: 'PM\'s Powers & Functions',
            definition: 'Link between President and Cabinet. Head of Cabinet. Allocates portfolios. Can reshuffle/dismiss ministers. Advises President on dissolution. Chairman of NITI Aayog, Planning Commission (earlier). Crisis manager.',
        },
        {
            term: 'Categories of Ministers',
            definition: 'Cabinet Ministers: Attend Cabinet, head departments. Ministers of State: Independent charge OR attached to Cabinet Minister. Deputy Ministers: Assist Ministers. 91st Amendment: Max 15% of LS strength (Centre), 15% of Assembly (States).',
        },
        {
            term: 'Collective Responsibility (Art 75(3)/164(2))',
            definition: 'Ministers collectively responsible to LS/State Assembly. Sink or swim together. Cabinet decisions binding on all. No open criticism of government policy. Resignation/dismissal of PM = entire ministry falls.',
        },
        {
            term: 'Individual Responsibility',
            definition: 'Each minister responsible for their department. Acts in President/Governor\'s name. Countersigns orders. Constitutional morality requires resignation on scandals (convention, not law).',
        },
        {
            term: 'Cabinet Committees',
            definition: 'Standing (permanent) or Ad-hoc (specific purpose). PM is Chairman of most. Key: Cabinet Committee on Security (CCS), ACC (Appointments), Economic Affairs, Political Affairs. PM can override committee decisions.',
        },
        {
            term: 'Kitchen Cabinet',
            definition: 'Informal group of PM\'s trusted advisors outside formal Cabinet. Principal Secretary to PM, National Security Advisor, close ministers/friends. Criticized for undermining collective decision-making.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-20-01',
            headline: 'Coalition Government 2024',
            date: 'June 2024',
            source: 'ECI / Media',
            teachingHook: 'For the first time since 2014, no single party crossed 272. The PM was appointed as the leader of a coalition (NDA) with multiple parties. Discuss "Coalition Dharma" and the President\'s discretion in appointing the PM (Hung Parliament scenarios—S.R. Bommai guidelines).',
            relatedArticles: ['75'],
        },
        {
            id: 'ca-20-02',
            headline: 'Arvind Kejriwal - CM from Jail (2024)',
            date: 'March-May 2024',
            source: 'Supreme Court',
            teachingHook: 'The Delhi CM was arrested by ED but refused to resign. The LG cited "Constitutional Breakdown". Can a CM run the government from jail? There is no constitutional bar, but is it "constitutionally moral"? Discuss Article 239AA (Special provisions for Delhi) which limits Delhi\'s powers.',
            caseReference: 'Arvind Kejriwal v. Directorate of Enforcement',
            relatedArticles: ['164', '239AA'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 75: PM appointed by President; collective responsibility to LS', category: 'Article', highlight: true },
        { fact: 'PM need not be MP at appointment, must become within 6 months', category: 'Article' },
        { fact: '91st Amd: Ministers cannot exceed 15% of LS/Assembly strength', category: 'Amendment', highlight: true },
        { fact: '3 Categories: Cabinet, Ministers of State, Deputy Ministers', category: 'Article' },
        { fact: 'Cabinet Committees: CCS, ACC, Economic Affairs, Political Affairs', category: 'Article' },
        { fact: 'Coalition Govt 2024: First time since 2014, President discretion used', category: 'Year' },
        { fact: 'Kejriwal 2024: No constitutional bar on CM running govt from jail', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
