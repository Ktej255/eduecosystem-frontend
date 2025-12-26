// Topic 10: Fundamental Duties & Basic Structure
// Article 51A (Swaran Singh Committee), Kesavananda Bharati Doctrine

import { PolityTopic } from '../polity-types';

export const topic10DutiesBasicStructure: PolityTopic = {
    id: 10,
    module: 'A',
    title: 'Fundamental Duties & Basic Structure',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Art 51A (Swaran Singh Committee) + Kesavananda Bharati Doctrine',

    coreArticles: [
        { number: '51A', title: 'Fundamental Duties', description: '11 Duties added by 42nd Amendment (1976) based on Swaran Singh Committee. 11th duty (parent/guardian to provide education to 6-14 children) added by 86th Amendment (2002). Only for CITIZENS. Non-justiciable.' },
    ],

    keyConcepts: [
        {
            term: '11 Fundamental Duties (Art 51A)',
            definition: '(a) Abide by Constitution, respect Flag/Anthem. (b) Cherish ideals of freedom struggle. (c) Uphold sovereignty, unity, integrity. (d) Defend country, render national service. (e) Harmony, common brotherhood. (f) Preserve composite culture. (g) Protect environment, wildlife. (h) Develop scientific temper. (i) Safeguard public property, abjure violence. (j) Strive for excellence. (k) Provide education to child 6-14 (86th Amd).',
        },
        {
            term: 'Swaran Singh Committee (1976)',
            definition: 'Recommended adding Fundamental Duties. Suggested 8 duties. 42nd Amendment added 10 (dropped 2: duty to pay taxes, duty to resist unjust laws). 11th added later by 86th Amendment.',
        },
        {
            term: 'Nature of Fundamental Duties',
            definition: 'Non-justiciable (like DPSP). Only for citizens, not foreigners. Moral obligations. Courts consider them in interpreting laws. Some have legal backing (Prevention of Insults to National Honour Act, Environment Protection Act).',
        },
        {
            term: 'Kesavananda Bharati Doctrine (1973)',
            definition: '13-judge bench (7:6 majority). Parliament can amend any part of Constitution under Art 368. BUT cannot destroy the "Basic Structure". SC is the final arbiter of what is Basic Structure. Overruled Golak Nath (no amendment power for FR).',
            example: 'Kesavananda Bharati v. State of Kerala (1973)'
        },
        {
            term: 'Elements of Basic Structure',
            definition: 'Supremacy of Constitution. Republican, democratic form. Secular character. Separation of powers. Federal character. Judicial review. Rule of law. Free and fair elections. Limited power of Parliament to amend. Harmony of FR and DPSP. Sovereignty of India.',
        },
        {
            term: 'Key Basic Structure Cases',
            definition: 'Indira Gandhi v. Raj Narain (1975): Free elections. Minerva Mills (1980): Balance of FR/DPSP, Limited amending power. Waman Rao (1981): Applied to post-1973 laws. S.R. Bommai (1994): Secularism, Federalism. I.R. Coelho (2007): 9th Schedule laws can be reviewed.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-10-01',
            headline: 'Article 370 Verdict & Sovereignty (Dec 2023/Jan 2024)',
            date: 'Dec 2023',
            source: 'Supreme Court',
            teachingHook: 'The SC upheld the abrogation of Article 370, ruling that J&K did not retain any internal sovereignty after accession. It cited the "Basic Structure" of federalism but allowed the reorganization of the state into UTs as a "temporary" measure. Use this to explain Federalism as Basic Structure vs. Parliament\'s power to reorganize states (Art 3).',
            caseReference: 'In Re: Article 370 of the Constitution',
            relatedArticles: ['370', '3', '368'],
        },
        {
            id: 'ca-10-02',
            headline: 'One Nation One Election (ONOE) & Basic Structure',
            date: 'March 2024',
            source: 'Kovind Committee Report',
            teachingHook: 'The High-Level Committee (Kovind Panel) recommended simultaneous elections for Lok Sabha and State Assemblies. Critics argue this violates the "Basic Structure" (Federalism/Democracy) by shortening state assembly tenures. Can a Constitutional Amendment (Art 368) violate the Basic Structure? Discuss the implied limitations on amending power.',
            relatedArticles: ['368', '83', '172'],
        },
    ],

    prelimsPointers: [
        { fact: 'Art 51A: 11 Fundamental Duties - Only for Citizens', category: 'Article', highlight: true },
        { fact: '42nd Amd (1976): Added 10 duties, Swaran Singh Committee', category: 'Amendment', highlight: true },
        { fact: '86th Amd (2002): Added 11th duty (education for 6-14)', category: 'Amendment' },
        { fact: 'Fundamental Duties are Non-Justiciable (like DPSP)', category: 'Article' },
        { fact: 'Kesavananda 1973: Basic Structure Doctrine - 7:6 majority', category: 'Case', highlight: true },
        { fact: 'Parliament can amend but cannot destroy Basic Structure', category: 'Case', highlight: true },
        { fact: 'Minerva Mills 1980: Limited amending power is Basic Structure', category: 'Case', highlight: true },
        { fact: 'S.R. Bommai 1994: Secularism & Federalism are Basic Structure', category: 'Case' },
        { fact: 'I.R. Coelho 2007: 9th Schedule laws can be reviewed', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
