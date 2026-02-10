import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_3: PolityTopic95 = {
    id: 3,
    part: 'I',
    title: 'Concept of the Constitution',
    syllabusTag: 'Constitutionalism & Features',
    priority: 'High',
    lastUpdated: '2026-02-10',
    staticFocus: `
        A Constitution is the fundamental law of the land which defines the relationship between the State and the individual, and among the organs of the State.
        
        **Key Concepts:**
        *   **Constitutionalism:** The idea that government authority is derived from and limited by a body of fundamental law.
        *   **Rule of Law:** Supremacy of law, equality before law, and predominance of legal spirit.
        *   **Separation of Powers:** Division of responsibilities into distinct branches to limit any one branch from exercising the core functions of another.
    `,
    coreArticles: [
        {
            number: "N/A",
            title: "Constitutionalism",
            description: "Limited government is the essence of Constitutionalism."
        }
    ],
    keyConcepts: [
        {
            term: "Constitutionalism",
            definition: "A political philosophy based on the idea that government authority is derived from the people and should be limited by a constitution.",
            example: "Restrictions on arbitrary power."
        },
        {
            term: "Magna Carta (1215)",
            definition: "The first document to put into writing the principle that the king and his government was not above the law.",
            example: "foundation of individual rights."
        }
    ],
    currentAffairs: [
        {
            id: "ca3_1",
            headline: "Debate on 'Basic Structure' Doctrine",
            date: "2025-09-15",
            source: "Indian Express",
            teachingHook: "Relevance of constitutional morality in modern governance."
        }
    ],
    prelimsPointers: [
        { fact: "The US Constitution is the oldest written constitution.", category: "Fact" },
        { fact: "The British Constitution is an unwritten constitution.", category: "Fact" },
        { fact: "Constitutionalism equates to 'Limited Government'.", category: "Fact", highlight: true }
    ],
    comparisonTable: {
        title: "Written vs Unwritten Constitution",
        columnAHeader: "Written (e.g., USA, India)",
        columnBHeader: "Unwritten (e.g., UK)",
        rows: [
            { aspect: "Nature", columnA: "Codified in a single document", columnB: "Evolved over time, based on conventions" },
            { aspect: "Supremacy", columnA: "Constitution is Supreme", columnB: "Parliament is Supreme" },
            { aspect: "Flexibility", columnA: "Rigid or Flexible", columnB: "Flexible" }
        ]
    }
};
