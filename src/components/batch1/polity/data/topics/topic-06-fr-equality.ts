// Topic 6: Fundamental Rights - I (Equality)
// Definition of State (Art 12), Law (Art 13), Right to Equality (Art 14-18)

import { PolityTopic } from '../polity-types';

export const topic06FREquality: PolityTopic = {
    id: 6,
    module: 'A',
    title: 'Fundamental Rights - I: Equality',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Definition of State (Art 12), Law (Art 13), & Right to Equality (Art 14-18)',

    coreArticles: [
        { number: '12', title: 'Definition of State', description: 'State includes: (a) Government and Parliament of India, (b) Govt and Legislature of States, (c) All local/other authorities within India, (d) All local/other authorities under control of GoI. Pvt bodies can be "State" if performing public function (Ajay Hasia case)' },
        { number: '13', title: 'Laws inconsistent with FR', description: 'Pre-Constitution laws void if inconsistent (Art 13(1)). Post-Constitution laws void if they abridge FR (Art 13(2)). "Law" includes ordinances, orders, rules, notifications. Doctrine of Eclipse & Severability apply.' },
        { number: '14', title: 'Equality before Law', description: 'The State shall not deny any person equality before the law (British - negative) OR equal protection of laws (American - positive). Applies to citizens AND non-citizens. Permits reasonable classification (Intelligible Differentia + Rational Nexus).' },
        { number: '15', title: 'Prohibition of Discrimination', description: 'No discrimination on grounds of religion, race, caste, sex, place of birth. Art 15(3): Special provisions for women/children. Art 15(4): Special provisions for SC/ST/SEBC. Art 15(5): Reservation in educational institutions (93rd Amd).' },
        { number: '16', title: 'Equality in Public Employment', description: 'Art 16(1): Equal opportunity in public employment. Art 16(2): No discrimination. Art 16(3): Residence requirement possible. Art 16(4): Reservation for backward classes. Art 16(4A): Reservation in promotions for SC/ST. Art 16(4B): Carry-forward of unfilled vacancies.' },
        { number: '17', title: 'Abolition of Untouchability', description: 'Untouchability abolished and its practice is an offence. Protection of Civil Rights Act, 1955 (earlier Untouchability Offences Act, 1955) provides punishment. One of the absolute rights (no exceptions).' },
        { number: '18', title: 'Abolition of Titles', description: 'No titles (except military/academic). Cannot accept foreign titles without President\'s consent. British titles abolished. Bharat Ratna/Padma awards are NOT titles (Balaji Raghavan case).' },
    ],

    keyConcepts: [
        {
            term: 'Doctrine of Eclipse',
            definition: 'Pre-Constitution law inconsistent with FR is not dead but only eclipsed (dormant). If FR is amended, the pre-constitutional law revives. Applies only to pre-Constitution laws.',
            example: 'Bhikaji vs State of MP (1955)'
        },
        {
            term: 'Doctrine of Severability',
            definition: 'If only part of a statute is unconstitutional, only that part is void. The rest remains valid if it can stand independently. Courts presume legislative intent to save the law.',
            example: 'A.K. Gopalan vs State of Madras (1950)'
        },
        {
            term: 'Reasonable Classification (Art 14)',
            definition: 'Art 14 allows classification if: (1) Intelligible Differentia - clear basis to distinguish, (2) Rational Nexus - classification must have connection to the object of the law. Unequals can be treated differently.',
            example: 'Ram Krishna Dalmia vs Justice Tendolkar (1958)'
        },
        {
            term: 'Creamy Layer',
            definition: 'Affluent members of backward classes excluded from reservation. Applies to OBCs (Indra Sawhney, 1992). Debate on applying to SC/ST after 2024 sub-classification verdict.',
        },
        {
            term: 'Sub-Classification of SC/ST',
            definition: 'The 7-judge Constitution Bench in State of Punjab vs Davinder Singh (Aug 2024) overruled E.V. Chinnaiah (2004). States can now sub-classify within SC/ST to give more benefits to the "most backward" among them.',
        },
        {
            term: '50% Ceiling on Reservation',
            definition: 'Indra Sawhney vs Union of India (1992) fixed 50% cap on reservations. Exceptions: Art 16(4A)/16(4B) for promotions with carry-forward. Some states exceeded (TN 69%, Maharashtra Maratha quota struck down).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-06-01',
            headline: 'Sub-Classification of SC/STs Allowed (Aug 2024)',
            date: 'Aug 2024',
            source: 'Supreme Court',
            teachingHook: 'A 7-judge Constitution Bench (State of Punjab v. Davinder Singh) overruled the 2004 E.V. Chinnaiah judgment, allowing states to sub-classify SCs/STs to grant separate quotas for the "most backward" among them. It also debated introducing the "Creamy Layer" concept for SCs/STs. Deep dive into Article 14 (Reasonable Classification) and Article 16(4).',
            caseReference: 'State of Punjab v. Davinder Singh (2024)',
            relatedArticles: ['14', '16(4)'],
        },
        {
            id: 'ca-06-02',
            headline: 'Private Sector Reservation Debates (2024-25)',
            date: '2024-25',
            source: 'PRS Legislative Research',
            teachingHook: 'The "Reservation for SC/ST/OBC in Private Sector Bill, 2024" was introduced as a Private Member\'s Bill. States like Karnataka faced backlash over "Locals in Private Jobs" bills. Discuss Article 19(1)(g) (Right to Profession) vs. Article 16 (Reservation in State jobs only). Can the State mandate reservation in the private sector?',
            relatedArticles: ['16', '19(1)(g)'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 12: "State" includes Govt, Legislature, Local/Other authorities', category: 'Article', highlight: true },
        { fact: 'Art 13: Pre-Constitution laws eclipsed, Post-Constitution laws void', category: 'Article', highlight: true },
        { fact: 'Art 14: Equality before law (British) + Equal protection (American)', category: 'Article', highlight: true },
        { fact: 'Reasonable Classification: Intelligible Differentia + Rational Nexus', category: 'Case' },
        { fact: 'Art 15(4): Special provisions for backward classes (1st Amendment)', category: 'Amendment' },
        { fact: 'Art 16(4A): Reservation in promotion for SC/ST (77th Amd)', category: 'Amendment' },
        { fact: 'Indra Sawhney 1992: 50% ceiling, Creamy Layer for OBCs', category: 'Case', highlight: true },
        { fact: '2024 SC Verdict: Sub-classification of SC/ST allowed', category: 'Case', highlight: true },
        { fact: 'Art 17: Untouchability abolished - Absolute right, no exception', category: 'Article' },
        { fact: 'Bharat Ratna/Padma - NOT titles (Balaji Raghavan case)', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
