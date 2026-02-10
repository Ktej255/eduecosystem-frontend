import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_70: PolityTopic95 = {
    id: 70,
    part: 'VIII',
    title: 'Law Commission of India',
    syllabusTag: 'Non-Statutory Body',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The Law Commission of India is a non-statutory, executive body constituted by the Government of India from time to time (usually for 3 years). 
        
        **Mandate:** Legal reform. It works as an advisory body to the Ministry of Law and Justice.
    `,
    coreArticles: [],
    keyConcepts: [
        {
            term: "First Law Commission (Pre-Independence)",
            definition: "Established in 1834 under Charter Act of 1833. Macaulay was Chairman.",
            example: "Codified IPC and CrPC."
        },
        {
            term: "First Law Commission (Independent India)",
            definition: "Established in 1955 under M.C. Setalvad.",
            example: ""
        },
        {
            term: "22nd Law Commission",
            definition: "Constituted in 2020 (term extended to 2024). Headed by Justice Ritu Raj Awasthi.",
            example: "Working on UCC."
        }
    ],
    currentAffairs: [
        {
            id: "ca70_1",
            headline: "22nd Law Commission Report on UCC",
            date: "2023-06-14",
            source: "The Hindu",
            teachingHook: "Uniform Civil Code debates."
        },
        {
            id: "ca70_2",
            headline: "Simultaneous Elections (One Nation One Election)",
            date: "2024-02-01",
            source: "PIB",
            teachingHook: "Law Commission examining ONOE."
        }
    ],
    prelimsPointers: [
        { fact: "Law Commission is NEITHER constitutional NOR statutory. It is an Executive Body.", category: "Body", highlight: true },
        { fact: "Established for a fixed tenure (usually 3 years).", category: "Fact" },
        { fact: "Recommendations are advisory, not binding.", category: "Fact" }
    ]
};
