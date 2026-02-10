import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_69: PolityTopic95 = {
    id: 69,
    part: 'VIII',
    title: 'Bar Council of India',
    syllabusTag: 'Statutory Body',
    priority: 'Low',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The Bar Council of India (BCI) is a statutory body established under the Advocates Act, 1961. It regulates the legal practice and legal education in India.
        
        **Key Functions:**
        *   Prescribe standards of professional conduct and etiquette for advocates.
        *   Lay down standards of legal education and recognize universities.
    `,
    coreArticles: [
        {
            number: "Advocates Act, 1961",
            title: "Legal Basis",
            description: "BCI is created under Section 4 of this Act."
        }
    ],
    keyConcepts: [
        {
            term: "All India Bar Examination (AIBE)",
            definition: "Exam conducted by BCI to set a minimum standard for admission to practice law.",
            example: "Mandatory for enrollment."
        },
        {
            term: "Advocate vs Lawyer",
            definition: "Lawyer is a law graduate. Advocate is a lawyer enrolled with the Bar Council.",
            example: "Only Advocates can practice in court."
        }
    ],
    currentAffairs: [
        {
            id: "ca69_1",
            headline: "Foreign Law Firms Entry",
            date: "2023-03-15",
            source: "LiveLaw",
            teachingHook: "BCI rules allowing foreign lawyers to practice in restricted areas."
        }
    ],
    prelimsPointers: [
        { fact: "Attorney General of India and Solicitor General are ex-officio members of BCI.", category: "Person", highlight: true },
        { fact: "BCI promotes legal aid to the poor.", category: "Fact" }
    ]
};
