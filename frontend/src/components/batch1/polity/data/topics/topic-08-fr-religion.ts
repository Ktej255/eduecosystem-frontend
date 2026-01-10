// Topic 8: Fundamental Rights - III (Religion & Minorities)
// Art 23-28 (Exploitation, Religion), Art 29-30 (Minorities), Art 32 (Writs)

import { PolityTopic } from '../polity-types';

export const topic08FRReligion: PolityTopic = {
    id: 8,
    module: 'I',
    title: 'Fundamental Rights - III: Religion & Minorities',
    syllabusTag: 'Module I: Constitutional Framework',

    staticFocus: 'Exploitation (Art 23-24), Religion (Art 25-28), Minorities (Art 29-30), Constitutional Remedies (Art 32)',

    coreArticles: [
        { number: '23', title: 'Prohibition of Traffic in Human Beings', description: 'Traffic in human beings, begar (forced labour), and other similar forms prohibited. Violation is an offence. State can impose compulsory service for public purposes (Art 23(2)).' },
        { number: '24', title: 'Prohibition of Child Labour', description: 'No child below 14 years employed in any factory, mine, or hazardous employment. Child Labour (Prohibition) Act, 1986 for implementation.' },
        { number: '25', title: 'Freedom of Conscience and Religion', description: 'All persons have right to freely profess, practice, and propagate religion. Subject to: public order, morality, health. Sikhs\' kirpan allowed. State can regulate economic/political/secular activities associated with religion.' },
        { number: '26', title: 'Freedom to Manage Religious Affairs', description: 'Religious denominations can: (a) establish and maintain institutions, (b) manage their affairs in religion, (c) own and acquire property, (d) administer property per law.' },
        { number: '27', title: 'Freedom from Religious Taxes', description: 'No person compelled to pay taxes for promotion of any particular religion. General taxes (like income tax) on religious institutions are valid.' },
        { number: '28', title: 'Freedom from Religious Instruction', description: 'No religious instruction in State-funded institutions. Voluntary attendance in State-recognized/aided institutions.' },
        { number: '29', title: 'Protection of Minorities\' Interests', description: 'Any section with distinct language, script, or culture has right to conserve it. No discrimination in State-aided educational admissions on religion, race, caste, language.' },
        { number: '30', title: 'Minorities\' Right to Establish Educational Institutions', description: 'Religious and linguistic minorities can establish and administer educational institutions of their choice. State can regulate but not take over. Art 30(1A): Compensation at market value if acquired.' },
        { number: '32', title: 'Constitutional Remedies (Writs)', description: 'Right to move SC for enforcement of FRs. 5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto. Art 32 is itself a Fundamental Right. Dr. Ambedkar called it "Heart and Soul of Constitution".' },
    ],

    keyConcepts: [
        {
            term: 'Essential Religious Practices Test',
            definition: 'Courts decide what is "essential" to a religion to get protection under Art 25-26. Used in Sabarimala case, triple talaq case. Controversial as courts determine religious doctrine.',
            example: 'Shirur Mutt Case (1954), Sabarimala (2018)'
        },
        {
            term: 'Five Writs',
            definition: 'Habeas Corpus: Produce the body (illegal detention). Mandamus: Command (to perform public duty). Prohibition: Stop lower court. Certiorari: Quash lower court order. Quo Warranto: By what authority (public office).',
        },
        {
            term: 'Minority Status',
            definition: 'Linguistic or religious minority at STATE level, not national. TMA Pai Foundation (2002): Minority status determined state-wise. Both have right under Art 30.',
        },
        {
            term: 'Art 32 vs Art 226',
            definition: 'Art 32: SC only, only for FR, right itself is FR. Art 226: HC, for FR + other rights, wider scope but not itself a FR. Art 32 cannot be suspended even during Emergency (Art 359 amended by 44th Amd).',
        },
        {
            term: 'Propagate Religion',
            definition: 'Right to propagate one\'s religion to others. Does NOT include right to convert (Stainislaus vs State of MP, 1977). Anti-conversion laws in many states.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-08-01',
            headline: 'AMU Minority Status Case (Nov 2024)',
            date: 'Nov 2024',
            source: 'Supreme Court',
            teachingHook: 'A 7-judge bench overruled the 1967 Azeez Basha verdict. It clarified the test for Article 30, stating that an institution does not lose its minority status just because it was created by a statute (law). What defines a "Minority Institution"? The answer depends on who established it and its purpose, not the source of law.',
            caseReference: 'Aligarh Muslim University v. Naresh Agarwal',
            relatedArticles: ['30(1)'],
        },
        {
            id: 'ca-08-02',
            headline: 'Article 39(b) & Property Rights (Nov 2024)',
            date: 'Nov 2024',
            source: 'Supreme Court',
            teachingHook: 'A 9-judge bench ruled on Article 39(b) (Material resources of the community). It held that NOT every private property is a "material resource" that the state can acquire for the common good. This is the bridge between FR (Article 31C) and DPSP (Article 39). Discuss the conflict between Property Rights (Art 300A) and Socialist goals.',
            caseReference: 'Property Owners Association v. State of Maharashtra',
            relatedArticles: ['39(b)', '300A', '31C'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 23: Begar prohibited - State can impose compulsory service', category: 'Article' },
        { fact: 'Art 24: No child below 14 in factory/mine/hazardous work', category: 'Article' },
        { fact: 'Art 25: Propagate religion allowed, conversion NOT a right', category: 'Article', highlight: true },
        { fact: 'Essential Religious Practices: Courts decide what is essential', category: 'Case' },
        { fact: 'Art 30: Minority status at STATE level (TMA Pai 2002)', category: 'Case', highlight: true },
        { fact: 'AMU 2024: Institution by statute can still be minority institution', category: 'Case', highlight: true },
        { fact: 'Art 32: Heart and Soul of Constitution - Dr. Ambedkar', category: 'Article', highlight: true },
        { fact: '5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto', category: 'Article', highlight: true },
        { fact: 'Art 32 cannot be suspended during Emergency (44th Amd)', category: 'Amendment' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
