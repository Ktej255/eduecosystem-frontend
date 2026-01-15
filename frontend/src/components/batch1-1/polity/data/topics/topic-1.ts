import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_1: PolityTopic95 = {
    id: 1,
    part: 'I',
    title: 'Historical Background',
    syllabusTag: 'Evolution of Indian Constitution',
    priority: 'High',
    lastUpdated: '2026-01-15',
    staticFocus: `
        The Indian Constitution has its roots in the British administration. 
        The evolution can be divided into two phases: 
        1. The Company Rule (1773–1858)
        2. The Crown Rule (1858–1947)
    `,
    coreArticles: [
        {
            number: "Regulating Act 1773",
            title: "First step towards centralization",
            description: "Designated the Governor of Bengal as the 'Governor-General of Bengal' (Lord Warren Hastings)."
        },
        {
            number: "Pitts India Act 1784",
            title: "Double Government",
            description: "Distinguished between commercial and political functions of the Company. Created Board of Control."
        },
        {
            number: "Charter Act 1833",
            title: "Final step towards centralization",
            description: "Governor-General of Bengal became Governor-General of India (Lord William Bentinck)."
        },
        {
            number: "Government of India Act 1858",
            title: "Act for the Good Government of India",
            description: "Abolished Company rule and transferred power to the British Crown. Secretary of State for India created."
        }
    ],
    keyConcepts: [
        {
            term: "Dyarchy",
            definition: "A system of double government introduced by the Government of India Act 1919.",
            example: "Transformed and Reserved subjects"
        },
        {
            term: "Communal Representation",
            definition: "Separate electorates for Muslims introduced by the Morley-Minto Reforms (1909).",
            example: "Lord Minto is known as the Father of Communal Electorate."
        }
    ],
    currentAffairs: [
        {
            id: "ca1",
            headline: "75 Years of Indian Constitution",
            date: "2025-11-26",
            source: "The Hindu",
            teachingHook: "How the regulating acts of the 18th century paved the way for modern bureaucracy."
        }
    ],
    prelimsPointers: [
        { fact: "Lord Warren Hastings was the first Governor-General of Bengal.", category: "Person", highlight: true },
        { fact: "Charter Act of 1853 introduced an open competition system of selection and recruitment of civil servants.", category: "Act" },
        { fact: "The system of Budget was introduced in British India in 1860.", category: "Fact" }
    ],
    comparisonTable: {
        title: "1919 Act vs 1935 Act",
        columnAHeader: "GOI Act 1919 (Mont-Ford)",
        columnBHeader: "GOI Act 1935",
        rows: [
            { aspect: "Dyarchy", columnA: "Introduced at Provinces", columnB: "Abolished at Provinces, Introduced at Centre" },
            { aspect: "Legislature", columnA: "Bicameralism at Centre", columnB: "Bicameralism in 6 out of 11 provinces" },
            { aspect: "Residuary Powers", columnA: "With Governor-General", columnB: "With Viceroy" }
        ]
    }
};
