// Topic 7: Fundamental Rights - II (Freedom)
// Art 19 (Freedoms), Art 20 (Protection in Conviction), Art 21 (Life), Art 22 (Detention)

import { PolityTopic } from '../polity-types';

export const topic07FRFreedom: PolityTopic = {
    id: 7,
    module: 'A',
    title: 'Fundamental Rights - II: Freedom',
    syllabusTag: 'Module A: Constitutional Framework',

    staticFocus: 'Freedoms (Art 19), Protection in Conviction (Art 20), Right to Life (Art 21/21A), Detention (Art 22)',

    coreArticles: [
        { number: '19', title: 'Six Freedoms', description: '19(1)(a) Speech & Expression. 19(1)(b) Assemble peacefully. 19(1)(c) Form associations/unions. 19(1)(d) Move freely. 19(1)(e) Reside and settle. 19(1)(g) Practice any profession. Each has reasonable restrictions in Art 19(2)-(6). Only for CITIZENS.' },
        { number: '20', title: 'Protection in Conviction', description: '20(1) No ex-post-facto laws. 20(2) No double jeopardy. 20(3) No self-incrimination. Applies during Emergency too. Narco-analysis/brain-mapping violate 20(3) - Selvi vs Karnataka.' },
        { number: '21', title: 'Right to Life & Liberty', description: 'No person deprived of life/liberty except "procedure established by law". Expanded to include: livelihood, dignity, privacy, shelter, health, speedy trial, clean environment, right to die with dignity. Maneka Gandhi: Procedure must be fair, just, reasonable (Due Process).' },
        { number: '21A', title: 'Right to Education', description: 'Free and compulsory education for children 6-14 years. Added by 86th Amendment (2002). RTE Act 2009 for implementation. Fundamental Right only for this age group.' },
        { number: '22', title: 'Protection against Arrest/Detention', description: '22(1)-(2): Right to be informed of grounds, right to consult lawyer, produce before magistrate in 24 hrs. 22(3)-(7): Preventive Detention provisions - Advisory Board (3 months), Parliament can extend period. Preventive Detention is a concurrent subject.' },
    ],

    keyConcepts: [
        {
            term: 'Reasonable Restrictions (Art 19)',
            definition: 'Art 19(2): On speech - sovereignty, security, friendly relations, public order, decency, morality, contempt of court, defamation, incitement. Must be "reasonable" - courts decide. State can impose, not private parties.',
        },
        {
            term: 'Maneka Gandhi Doctrine (1978)',
            definition: 'Art 21 procedure must be fair, just, and reasonable - not arbitrary. Imported Due Process from USA. Art 14, 19, 21 form the "Golden Triangle" - interconnected. Post-Maneka, Art 21 expanded enormously.',
            example: 'Maneka Gandhi vs Union of India (1978)'
        },
        {
            term: 'Right to Privacy',
            definition: 'K.S. Puttaswamy vs Union of India (2017): Privacy is a fundamental right under Art 21. 9-judge bench. Informational privacy, bodily autonomy, decisional privacy. Basis for Aadhaar judgment, abortion rights, LGBTQ+ rights.',
        },
        {
            term: 'Right to Die with Dignity',
            definition: 'Common Cause vs Union of India (2018): Passive euthanasia (withdrawal of life support) is legal. Living Will/Advance Directive valid. Active euthanasia (lethal injection) still illegal.',
        },
        {
            term: 'Preventive Detention',
            definition: 'Detention without trial to prevent future crime. Laws: COFEPOSA, NSA, MISA (repealed). Max 3 months without Advisory Board review. Extended only by Parliament. Grounds must be communicated (except against public interest).',
        },
        {
            term: 'Procedure Established by Law vs Due Process',
            definition: 'Original Art 21: Any law passed by legislature is valid (British). Post-1978 (Maneka): Law must also be fair and just (American Due Process imported). Courts can now test reasonableness of the procedure.',
        },
    ],

    currentAffairs: [
        {
            id: 'ca-07-01',
            headline: '"Bulldozer Justice" Guidelines (Nov 2024)',
            date: 'Nov 2024',
            source: 'Supreme Court',
            teachingHook: 'The SC laid down pan-India guidelines to stop "Bulldozer Justice" (punitive demolition of properties of accused persons). The Court ruled that the Executive cannot become a judge. Connect this to Article 21 (Right to Shelter/Livelihood) and Rule of Law (Basic Structure).',
            caseReference: 'In Re: Directions in the matter of Demolition of Structures',
            relatedArticles: ['21', '14'],
        },
        {
            id: 'ca-07-02',
            headline: 'Right to be Forgotten (July 2024)',
            date: 'July 2024',
            source: 'LiveLaw',
            teachingHook: 'The SC agreed to hear a plea on the "Right to be Forgotten" (removing acquitted persons\' names from online judgments) as part of Article 21. Link to the Puttaswamy (Privacy) judgment. Is "Right to be Forgotten" a fundamental right or does it clash with "Right to Information" (Art 19)?',
            relatedArticles: ['21', '19(1)(a)'],
        },
        {
            id: 'ca-07-03',
            headline: 'Digital Access as Fundamental Right (May 2025)',
            date: 'May 2025',
            source: 'SC Observer',
            teachingHook: 'In Amar Jain v. Union of India, the SC held that "inclusive and meaningful digital access" to e-governance is part of Article 21 and Article 14. Discuss the "Digital Divide" and how the definition of "Life and Liberty" expands with technology.',
            caseReference: 'Amar Jain v. Union of India',
            relatedArticles: ['21', '14'],
        },
    ],

    comparisonTable: {
        title: 'Punitive vs Preventive Detention',
        columnAHeader: 'Punitive Detention',
        columnBHeader: 'Preventive Detention',
        rows: [
            { aspect: 'Purpose', columnA: 'Punishment for crime committed', columnB: 'Prevent future crime' },
            { aspect: 'Trial', columnA: 'After trial and conviction', columnB: 'Without trial' },
            { aspect: 'Duration', columnA: 'As per sentence', columnB: 'Max 3 months (extendable)' },
            { aspect: 'Grounds', columnA: 'Evidence of crime', columnB: 'Suspicion of future threat' },
            { aspect: 'Review', columnA: 'Appeal to higher courts', columnB: 'Advisory Board review' },
        ],
    },

    prelimsPointers: [
        { fact: 'Art 19: 6 Freedoms - only for CITIZENS', category: 'Article', highlight: true },
        { fact: 'Art 19(1)(f) Right to Property was removed by 44th Amendment', category: 'Amendment' },
        { fact: 'Art 20(3): No self-incrimination - Narco-analysis violates this', category: 'Article' },
        { fact: 'Art 20: Applies even during Emergency (Art 359)', category: 'Article', highlight: true },
        { fact: 'Maneka Gandhi 1978: Due Process, Golden Triangle (Art 14-19-21)', category: 'Case', highlight: true },
        { fact: 'Puttaswamy 2017: Right to Privacy under Art 21', category: 'Case', highlight: true },
        { fact: 'Art 21A: Right to Education (6-14 years) - 86th Amendment', category: 'Amendment', highlight: true },
        { fact: 'Preventive Detention: Max 3 months without Advisory Board', category: 'Article' },
        { fact: 'Bulldozer Justice 2024: Violates Art 21 (Shelter)', category: 'Case' },
    ],

    priority: 'High',
    lastUpdated: 'Dec 2025',
};
