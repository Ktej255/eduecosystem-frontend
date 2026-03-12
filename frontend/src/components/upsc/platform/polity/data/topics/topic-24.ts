import { PolityTopic95 } from "../polity-types-95";

export const TOPIC_24: PolityTopic95 = {
    id: 24,
    part: 'III',
    title: 'Parliamentary Committees',
    syllabusTag: 'Functioning of Parliament',
    priority: 'High',
    lastUpdated: '2026-02-10',
    staticFocus: `
        Parliamentary committees are instruments of Parliament for its own effective functioning. They are smaller units of MPs who study issues in depth.
        
        **Broad Classifications:**
        1.  **Standing Committees:** Permanent, work continuously (e.g., PAC, Estimates).
        2.  **Ad-hoc Committees:** Temporary, created for specific task (e.g., Select Committee on a Bill).
    `,
    coreArticles: [
        {
            number: "Article 105",
            title: "Powers and Privileges",
            description: "Source of authority for Parliamentary Committees."
        },
        {
            number: "Article 118",
            title: "Rules of Procedure",
            description: "Parliament makes rules for regulating its procedure and conduct of business."
        }
    ],
    keyConcepts: [
        {
            term: "Public Accounts Committee (PAC)",
            definition: "Oldest committee (1921). Examines the annual audit reports of CAG.",
            example: "22 members (15 LS + 7 RS). Chairman from Opposition (Convention)."
        },
        {
            term: "Estimates Committee",
            definition: "Largest committee (30 members, all from Lok Sabha). Suggests economies in expenditure.",
            example: "Often called 'Continuous Economy Committee'."
        },
        {
            term: "Committee on Public Undertakings (COPU)",
            definition: "Created on recommendation of Krishna Menon Committee (1964). Examines reports of PSUs.",
            example: "22 members (15 LS + 7 RS)."
        }
    ],
    currentAffairs: [
        {
            id: "ca24_1",
            headline: "Low Attendance in Parliamentary Standing Committees",
            date: "2025-12-01",
            source: "The Hindu",
            teachingHook: "Impact on legislative scrutiny and accountability."
        }
    ],
    prelimsPointers: [
        { fact: "A minister cannot be a member of Financial Committees (PAC, Estimates, COPU).", category: "Fact", highlight: true },
        { fact: "Estimates Committee has members ONLY from Lok Sabha.", category: "Committee" },
        { fact: "The Chairman of PAC is appointed by the Speaker from the Opposition party.", category: "Person" },
        { fact: "Departmental Standing Committees were started in 1993.", category: "Year" }
    ],
    comparisonTable: {
        title: "Financial Committees Comparison",
        columnAHeader: "Committee",
        columnBHeader: "Members & Tenure",
        rows: [
            { aspect: "PAC", columnA: "Public Accounts Committee", columnB: "22 (15 LS + 7 RS). 1 Year." },
            { aspect: "Estimates", columnA: "Estimates Committee", columnB: "30 (All LS). 1 Year." },
            { aspect: "COPU", columnA: "Committee on Public Undertakings", columnB: "22 (15 LS + 7 RS). 1 Year." }
        ]
    }
};
