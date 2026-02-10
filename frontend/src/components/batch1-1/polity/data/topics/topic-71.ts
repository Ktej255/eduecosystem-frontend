import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_71: PolityTopic95 = {
    id: 71,
    part: 'VIII',
    title: 'Delimitation Commission of India',
    syllabusTag: 'Electoral System',
    priority: 'High',
    lastUpdated: '2026-02-10',
    staticFocus: `
        Delimitation Commission (Boundary Commission) is responsible for redrawing the boundaries of Lok Sabha and Assembly constituencies based on the Census data.
        
        **Objective:** To provide equal representation to equal segments of the population.
    `,
    coreArticles: [
        {
            number: "Article 82",
            title: "Readjustment after each census",
            description: "Parliament enacts a Delimitation Act after every Census."
        },
        {
            number: "Article 170",
            title: "Composition of Legislative Assemblies",
            description: "States also divided into territorial constituencies."
        }
    ],
    keyConcepts: [
        {
            term: "Composition",
            definition: "Retired SC Judge (Chair) + CEC/EC + State Election Commissioners.",
            example: ""
        },
        {
            term: "Force of Law",
            definition: "Orders of the Commission have the force of law and cannot be called in question before any court.",
            example: "Orders laid before Lok Sabha and State Assemblies (cannot be modified)."
        },
        {
            term: "Freeze",
            definition: "84th Amendment Act (2001) froze the number of seats until the first census after 2026.",
            example: "Currently based on 1971 census (for seats) and 2001 census (for boundaries)."
        }
    ],
    currentAffairs: [
        {
            id: "ca71_1",
            headline: "J&K Delimitation",
            date: "2023-08-01",
            source: "PIB",
            teachingHook: "Redrawing of boundaries in J&K UT."
        },
        {
            id: "ca71_2",
            headline: "Post-2026 Delimitation Fears",
            date: "2024-04-10",
            source: "The Hindu",
            teachingHook: "North vs South representation debate."
        }
    ],
    prelimsPointers: [
        { fact: "Delimitation Commissions have been set up 4 times (1952, 1963, 1973, 2002).", category: "Fact", highlight: true },
        { fact: "Orders of the Commission are final and cannot be challenged in any court.", category: "Fact", highlight: true },
        { fact: "There was no Delimitation Commission after 1981 and 1991 censuses.", category: "Fact" }
    ]
};
