// Topic 27: Supreme Court
// Composition, Jurisdiction, Collegium, Independence

import { PolityTopic } from '../polity-types';

export const topic27SupremeCourt: PolityTopic = {
    id: 27,
    module: 'V',
    title: 'Supreme Court of India',
    syllabusTag: 'Module V: The Judiciary',

    staticFocus: 'Composition, Jurisdiction, Collegium System, & Independence',

    coreArticles: [
        { number: '124', title: 'Establishment & Constitution of SC', description: 'Supreme Court of India with CJI and 33 other judges (now 34 including CJI). Appointed by President after consultation with judges. Retire at 65 years.' },
        { number: '131', title: 'Original Jurisdiction', description: 'Disputes between: Centre & State(s), State & State. Must involve question of law/fact on which legal right depends. Excludes treaty/agreement disputes.' },
        { number: '132', title: 'Appellate Jurisdiction (Constitutional)', description: 'Appeals from HC involving substantial question of law as to interpretation of Constitution.' },
        { number: '134', title: 'Appellate Jurisdiction (Criminal)', description: 'Appeals from HC in criminal matters if: death sentence, or HC certifies case fit for SC appeal.' },
        { number: '136', title: 'Special Leave to Appeal (SLP)', description: 'SC can grant special leave to appeal from any judgment/order of any court/tribunal in India. Widest discretionary jurisdiction.' },
        { number: '137', title: 'Review of Judgments', description: 'SC can review its own judgments subject to rules. Curative petition beyond review.' },
        { number: '141', title: 'Law Declared by SC', description: 'Law declared by Supreme Court shall be binding on all courts within India.' },
        { number: '143', title: 'Advisory Jurisdiction', description: 'President can seek SC opinion on questions of law or fact of public importance. Opinion is not binding on President.' },
    ],

    keyConcepts: [
        {
            term: 'Collegium System',
            definition: 'Judges appoint judges. For SC: CJI + 4 senior-most judges recommend. For HC: CJI + 2 senior SC judges + Chief Justice of that HC. Started from Second Judges Case (1993), confirmed in Third Judges Case (1998).',
        },
        {
            term: 'Three Judges Cases',
            definition: 'First (1981): Consultation means concurrence not binding (Government view). Second (1993): CJI\'s view has primacy, Collegium born. Third (1998): Collegium = CJI + 4 judges, view of 2 judges from proposed HC considered.',
        },
        {
            term: 'Jurisdiction of SC',
            definition: 'Original: Centre-State, State-State disputes (Art 131). Appellate: Constitutional (132), Civil (133), Criminal (134). Special Leave (136): Any court/tribunal. Advisory (143): President seeks opinion. Writ (32): FR enforcement.',
        },
        {
            term: 'Independence of Judiciary',
            definition: 'Security of tenure. Fixed salaries (Charged on Consolidated Fund). Conduct not discussed in Parliament (except impeachment). Appointment by Collegium. Contempt power.',
        },
        {
            term: 'Removal of Judges (Art 124(4))',
            definition: 'Only by impeachment. Grounds: Proved misbehaviour or incapacity. Process: Address by Parliament (Special majority in each House). President removes. Judges Inquiry Act 1968 for procedure.',
        },
        {
            term: 'Court of Record (Art 129)',
            definition: 'SC is a Court of Record. Its records are evidence and cannot be questioned. Has power to punish for contempt (civil and criminal).',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-27-01',
            headline: 'Electoral Bonds Verdict (Feb 2024)',
            date: 'Feb 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC struck down the Electoral Bonds scheme as unconstitutional, stating it violated voters\' Right to Information (Art 19(1)(a)) and allowed anonymous corporate funding. Explain Art 136 (SLP) and Art 141 (Law binding on all courts). This is the MOST IMPORTANT polity judgment for 2026.',
            caseReference: 'Association for Democratic Reforms v. Union of India',
            relatedArticles: ['19(1)(a)', '136', '141'],
        },
        {
            id: 'ca-27-02',
            headline: 'Collegium Transparency (2024)',
            date: '2024',
            source: 'Supreme Court Website',
            teachingHook: 'Collegium resolutions are now published with reasons for recommending or rejecting candidates. Discuss the Second and Third Judges Cases and whether the NJAC (99th Amd, struck down 2015) should be revived.',
            relatedArticles: ['124', '217'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 124: SC has CJI + 33 other judges (total 34)', category: 'Article', highlight: true },
        { fact: 'Collegium: CJI + 4 senior judges (Second Judges Case 1993)', category: 'Case', highlight: true },
        { fact: 'Art 131: Original Jurisdiction - Centre-State, State-State disputes', category: 'Article' },
        { fact: 'Art 136: Special Leave Petition - Any court/tribunal, widest power', category: 'Article', highlight: true },
        { fact: 'Art 141: Law declared by SC binding on ALL courts', category: 'Article', highlight: true },
        { fact: 'Art 143: Advisory Jurisdiction - President can seek opinion', category: 'Article' },
        { fact: 'Electoral Bonds 2024: Struck down, violated Art 19(1)(a)', category: 'Case', highlight: true },
        { fact: 'NJAC (99th Amd) struck down in 2015, Collegium restored', category: 'Amendment' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
