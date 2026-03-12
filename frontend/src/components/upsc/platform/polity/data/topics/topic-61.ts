import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_61: PolityTopic95 = {
    id: 61,
    part: 'VIII',
    title: 'National Commission for Minorities',
    syllabusTag: 'Statutory Body',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The National Commission for Minorities (NCM) was set up under the National Commission for Minorities Act, 1992.
        
        **Mandate:** Protect the interests of minorities in India.
    `,
    coreArticles: [
        {
            number: "NCM Act, 1992",
            title: "Statutory status",
            description: "Gave statutory status to the erstwhile minorities commission."
        }
    ],
    keyConcepts: [
        {
            term: "Notified Minorities",
            definition: "Currently 6 communities: Muslims, Christians, Sikhs, Buddhists, Parsis, and Jains (added in 2014).",
            example: ""
        },
        {
            term: "Composition",
            definition: "Chairperson + Vice Chairperson + 5 Members.",
            example: "All members MUST belong to minority communities."
        }
    ],
    currentAffairs: [
        {
            id: "ca61_1",
            headline: "Demand for Minority Status",
            date: "2024-05-10",
            source: "The Indian Express",
            teachingHook: "State-wise minority determination debate (TMA Pai Case)."
        }
    ],
    prelimsPointers: [
        { fact: "NCM is a statutory body.", category: "Body" },
        { fact: "Jains were notified as a minority community in 2014.", category: "Fact", highlight: true },
        { fact: "The Constitution does NOT define the term 'Minority'.", category: "Fact", highlight: true }
    ]
};
