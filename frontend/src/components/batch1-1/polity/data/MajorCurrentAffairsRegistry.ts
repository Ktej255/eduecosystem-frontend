export interface CurrentAffairItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    topicIds: number[]; // Links to 1-95 Topic IDs
    tags: string[];
    source: string;
    importance: 'High' | 'Medium' | 'Low';
}

export const MAJOR_CURRENT_AFFAIRS: CurrentAffairItem[] = [
    {
        id: "ca-001",
        title: "Nari Shakti Vandan Adhiniyam (106th Amendment Act)",
        summary: "Provides 33% reservation for women in Lok Sabha and State Legislative Assemblies. Added Articles 330A, 332A, and 334A. Implemented after the next delimitation exercise.",
        date: "2023-09-28",
        topicIds: [11, 23, 33, 81], // Amendment, Parliament, State Leg, Elections
        tags: ["Women Reservation", "Amendment", "Parliament"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-002",
        title: "Supreme Court Verdict on Article 370",
        summary: "SC upheld the constitutionality of the abrogation of Article 370, stating J&K did not retain sovereignty upon accession. Directed EC to hold elections by Sept 2024.",
        date: "2023-12-11",
        topicIds: [6, 14, 26, 41], // Union & Territory, Federal System, Supreme Court, UTs
        tags: ["J&K", "Article 370", "Federalism"],
        source: "Indian Express",
        importance: "High"
    },
    {
        id: "ca-003",
        title: "CEC and Other ECs (Appointment, Conditions of Service and Term of Office) Act, 2023",
        summary: "Replaces the 1991 Act. Selection Committee comprises PM, a Union Cabinet Minister, and Leader of Opposition/Largest Party. CJI removed from selection panel (overturning Anoop Baranwal judgment).",
        date: "2023-12-28",
        topicIds: [43, 81], // Election Commission, Elections
        tags: ["Election Commission", "Appointments", "Executive Control"],
        source: "PIB",
        importance: "High"
    },
    {
        id: "ca-004",
        title: "Supreme Court on Electoral Bonds Scheme",
        summary: "SC struck down the Electoral Bonds Scheme as unconstitutional, citing violation of Right to Information (Art 19(1)(a)). Mandated SBI to disclose details.",
        date: "2024-02-15",
        topicIds: [8, 81, 82], // Fundamental Rights, Elections, Election Laws
        tags: ["Electoral Bonds", "RTI", "Transparency"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-005",
        title: "Bhartiya Nyaya Sanhita (BNS) replaces IPC",
        summary: "Overhaul of criminal laws. Sedition (Section 124A IPC) repealed but replaced with 'Acts endangering sovereignty'. Community service introduced as punishment.",
        date: "2023-12-25",
        topicIds: [8, 26], // Fundamental Rights (Freedom of Speech), Supreme Court
        tags: ["Criminal Law Reform", "Sedition", "BNS"],
        source: "PRS Legislative Research",
        importance: "Medium"
    },
    {
        id: "ca-006",
        title: "Uttarakhand Uniform Civil Code (UCC) Bill",
        summary: "First state in independent India to pass a UCC. Governs marriage, divorce, succession, and live-in relationships for all communities (except Tribals).",
        date: "2024-02-07",
        topicIds: [9, 14], // DPSP (Art 44), Federal System
        tags: ["UCC", "Secularism", "State Legislation"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-007",
        title: "One Nation, One Election (Kovind Committee Report)",
        summary: "Panel recommended simultaneous elections for Lok Sabha and State Assemblies as the first step, followed by local body elections within 100 days.",
        date: "2024-03-14",
        topicIds: [13, 14, 81], // Parliamentary System, Federal System, Elections
        tags: ["Simultaneous Elections", "Federalism"],
        source: "PIB",
        importance: "Medium"
    },
    {
        id: "ca-008",
        title: "Whip System & Anti-Defection",
        summary: "Recent Speaker decisions in Maharashtra (Shiv Sena) and NCP splits highlighted the role of the Speaker and the definition of 'Original Political Party' under the Tenth Schedule.",
        date: "2024-01-10",
        topicIds: [23, 86], // Parliament (Speaker), Anti-Defection Law
        tags: ["Anti-Defection", "Speaker Powers", "10th Schedule"],
        source: "Indian Express",
        importance: "High"
    }
];
