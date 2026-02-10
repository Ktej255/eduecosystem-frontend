import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_60: PolityTopic95 = {
    id: 60,
    part: 'VIII',
    title: 'National Commission for Protection of Child Rights',
    syllabusTag: 'Statutory Body',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        The NCPCR was set up in March 2007 under the Commission for Protection of Child Rights (CPCR) Act, 2005.
        
        **Mandate:** Ensure that all laws, policies, programmes, and administrative mechanisms are in consonance with the Child Rights perspective as enshrined in the Constitution of India and also the UN Convention on the Rights of the Child.
    `,
    coreArticles: [
        {
            number: "CPCR Act, 2005",
            title: "Statutory Basis",
            description: "Establishes both National and State Commissions."
        },
        {
            number: "POCSO Act, 2012",
            title: "Monitoring Role",
            description: "NCPCR monitors the implementation of the POCSO Act."
        },
        {
            number: "RTE Act, 2009",
            title: "Monitoring Role",
            description: "NCPCR monitors the implementation of the Right to Education Act."
        }
    ],
    keyConcepts: [
        {
            term: "Definition of Child",
            definition: "Person up to the age of 18 years.",
            example: ""
        },
        {
            term: "Composition",
            definition: "Chairperson + 6 Members (at least 2 women).",
            example: "Appointed by Central Govt."
        }
    ],
    currentAffairs: [
        {
            id: "ca60_1",
            headline: "NCPCR Guidelines on Private Schools",
            date: "2025-01-05",
            source: "The Hindu",
            teachingHook: "Regulation of fees and safety norms in schools."
        }
    ],
    prelimsPointers: [
        { fact: "NCPCR is under the Ministry of Women and Child Development.", category: "Body" },
        { fact: "It monitors both RTE Act and POCSO Act.", category: "Act", highlight: true },
        { fact: "At least two members must be women.", category: "Fact" }
    ]
};
