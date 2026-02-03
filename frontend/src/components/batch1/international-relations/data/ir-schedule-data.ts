export interface IRTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Foreign Policy' | 'Bilateral' | 'Organizations' | 'Issues';
}

export const IR_SYLLABUS: IRTopic[] = [
    {
        id: 'foreign-policy',
        title: "India's Foreign Policy",
        description: "Panchsheel, Non-Alignment, and Strategic Autonomy.",
        subtopics: [
            "Gujral Doctrine",
            "Look East to Act East",
            "Neighborhood First Policy",
            "Nuclear Doctrine (NFU)"
        ],
        days: 3,
        category: 'Foreign Policy'
    },
    {
        id: 'bilateral-relations',
        title: "Bilateral Relations",
        description: "Strategic partnerships with Major Powers.",
        subtopics: [
            "India-US (iCET, Defense)",
            "India-Russia (Energy, Arms)",
            "India-China (Border Disputes)",
            "India-Japan (Quad, Infrastructure)"
        ],
        days: 5,
        category: 'Bilateral'
    },
    {
        id: 'international-orgs',
        title: "International Organizations",
        description: "UN Reforms, WTO, and Regional Bodies.",
        subtopics: [
            "UNSC Reforms (G4)",
            "WTO Agreements (TRIPS)",
            "G20 Presidency",
            "SCO & BRICS Expansion"
        ],
        days: 4,
        category: 'Organizations'
    },
    {
        id: 'global-issues',
        title: "Global Issues",
        description: "Terrorism, Diaspora, and Climate Diplomacy.",
        subtopics: [
            "CCIT (Counter Terrorism)",
            "Indian Diaspora Strategy",
            "Global South Leadership",
            "UNCLOS & Maritime Security"
        ],
        days: 3,
        category: 'Issues'
    }
];
