import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_38: PolityTopic95 = {
    id: 38,
    part: 'IV',
    title: 'Lok Adalats and Other Courts',
    syllabusTag: 'ADR Mechanisms',
    priority: 'Medium',
    lastUpdated: '2026-02-10',
    staticFocus: `
        Lok Adalat ('People's Court') is a forum where disputes/cases pending in the court of law or at pre-litigation stage are settled/compromised amicably.
        
        **Statutory Status:** Legal Services Authorities Act, 1987.
    `,
    coreArticles: [
        {
            number: "Article 39A",
            title: "Equal Justice and Free Legal Aid",
            description: "DPSP that directs the State to secure that the operation of the legal system promotes justice on a basis of equal opportunity."
        }
    ],
    keyConcepts: [
        {
            term: "Award is Final",
            definition: "The award (decision) made by the Lok Adalat is deemed to be a decree of a civil court and is final and binding on all parties.",
            example: "No appeal lies against such an award before any court of law."
        },
        {
            term: "Permanent Lok Adalat",
            definition: "Set up for public utility services (transport, telegraph, etc.) under the 2002 Amendment.",
            example: "Has jurisdiction up to ₹1 Crore."
        },
        {
            term: "Gram Nyayalayas",
            definition: "Establish under Gram Nyayalayas Act, 2008 for speedy justice at rural level.",
            example: "Mobile courts."
        }
    ],
    currentAffairs: [
        {
            id: "ca38_1",
            headline: "National Lok Adalat Disposes 1 Crore Cases",
            date: "2025-02-15",
            source: "LIVELAW",
            teachingHook: "Efficiency of ADR in reducing judicial pendency."
        }
    ],
    prelimsPointers: [
        { fact: "No court fee is payable when a matter is filed in a Lok Adalat.", category: "Fact", highlight: true },
        { fact: "Lok Adalat has the same powers as a Civil Court under CPC (1908).", category: "Act" },
        { fact: "No appeal lies against the award of Lok Adalat.", category: "Fact", highlight: true }
    ],
    comparisonTable: {
        title: "Lok Adalat vs Regular Court",
        columnAHeader: "Lok Adalat",
        columnBHeader: "Regular Court",
        rows: [
            { aspect: "Approach", columnA: "Persuasive / Compromise", columnB: "Adversarial / Evidence based" },
            { aspect: "Appeal", columnA: "No Appeal (Final)", columnB: "Appeal lies to higher courts" },
            { aspect: "State", columnA: "Statutory (1987 Act)", columnB: "Constitutional/Statutory" }
        ]
    }
};
