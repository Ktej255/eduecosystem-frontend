import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_37: PolityTopic95 = {
    id: 37,
    part: 'IV',
    title: 'Consumer Commissions',
    syllabusTag: 'Dispute Redressal',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        Consumer Commissions are quasi-judicial bodies established legislation to provide simple, speedy, and inexpensive redressal to consumer grievances.
        
        **Governing Act:** Consumer Protection Act, 2019 (replaced the 1986 Act).
    `,
    coreArticles: [
        {
            number: "Consumer Protection Act, 2019",
            title: "Article 21 Impact",
            description: "Broad interpretation of Right to Life typically encompasses consumer safety."
        }
    ],
    keyConcepts: [
        {
            term: "Three-Tier Structure",
            definition: "District Commission (DCDRC), State Commission (SCDRC), and National Commission (NCDRC).",
            example: "Hierarchical appeal system."
        },
        {
            term: "Pecuniary Jurisdiction (Revised 2021)",
            definition: "District: Up to ₹50 Lakh. State: ₹50 Lakh to ₹2 Cr. National: Above ₹2 Cr.",
            example: "Based on 'Consideration Paid', not 'Value of Goods'."
        },
        {
            term: "CCPA",
            definition: "Central Consumer Protection Authority established to regulate matters relating to violation of rights of consumers.",
            example: "Can recall unsafe goods."
        }
    ],
    currentAffairs: [
        {
            id: "ca37_1",
            headline: "Dark Patterns Guidelines 2023",
            date: "2024-01-10",
            source: "PIB",
            teachingHook: "CCPA's role in cursing deceptive online practices."
        }
    ],
    prelimsPointers: [
        { fact: "Act of 2019 covers E-commerce transactions.", category: "Act", highlight: true },
        { fact: "NCDRC is headed by a sitting or retired Judge of the Supreme Court.", category: "Person" },
        { fact: "Mediation cells are now attached to consumer commissions.", category: "Fact" }
    ],
    comparisonTable: {
        title: "1986 Act vs 2019 Act",
        columnAHeader: "CPA 1986",
        columnBHeader: "CPA 2019",
        rows: [
            { aspect: "Regulator", columnA: "None", columnB: "CCPA (Central Consumer Protection Authority)" },
            { aspect: "Mediation", columnA: "No Provision", columnB: "Statutory Provision for Mediation" },
            { aspect: "E-Commerce", columnA: "Not covered", columnB: "Explicitly covered" }
        ]
    }
};
