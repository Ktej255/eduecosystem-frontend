export interface SecurityTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    threatLevel: 'Critical' | 'High' | 'Moderate' | 'Emerging';
}

export const SECURITY_SYLLABUS: SecurityTopic[] = [
    {
        id: 'extremism',
        title: "Linkages between Development & Extremism",
        description: "Left Wing Extremism (Naxalism), Insurgency in North East.",
        subtopics: [
            "Causes of LWE (Land, Displacement)",
            "Government Strategy (Samadhan)",
            "North East Insurgency Status"
        ],
        days: 3,
        threatLevel: 'Critical'
    },
    {
        id: 'cyber-security',
        title: "Cyber Security & Money Laundering",
        description: "Digital threats, Cyber warfare, and Terror financing.",
        subtopics: [
            "Cyber Warfare & Terrorism",
            "Money Laundering (PMLA 2002)",
            "Social Media & Internal Security"
        ],
        days: 3,
        threatLevel: 'High'
    },
    {
        id: 'border-management',
        title: "Border Management",
        description: "Security challenges in border areas.",
        subtopics: [
            "India-Pakistan (Infiltration, Drones)",
            "India-China (LAC Incursions)",
            "India-Bangladesh (Illegal Migration)",
            "Coastal Security"
        ],
        days: 4,
        threatLevel: 'Critical'
    },
    {
        id: 'organized-crime',
        title: "Organized Crime & Terrorism",
        description: "Linkages between organized crime and terrorism.",
        subtopics: [
            "Drug Trafficking (Golden Crescent/Triangle)",
            "Arms Smuggling",
            "Terror Modules & Sleeper Cells"
        ],
        days: 2,
        threatLevel: 'High'
    },
    {
        id: 'security-forces',
        title: "Security Forces & Agencies",
        description: "Mandate of various security forces.",
        subtopics: [
            "CAPFs (BSF, CRPF, CISF)",
            "Intelligence Agencies (IB, RAW)",
            "Investigation Agencies (NIA, CBI)"
        ],
        days: 2,
        threatLevel: 'Moderate'
    }
];
