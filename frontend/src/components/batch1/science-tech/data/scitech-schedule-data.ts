export interface SciTechTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number; // Estimated days to cover
    category: 'Biology' | 'Space' | 'Defense' | 'IT' | 'Energy' | 'Nano';
}

export const SCI_TECH_SYLLABUS: SciTechTopic[] = [
    {
        id: 'space-tech',
        title: "Space Technology",
        description: "Orbits, Launch Vehicles, Indian Missions (Gaganyaan, Chandrayaan), and Global Trends.",
        subtopics: [
            "Orbits (LEO, MEO, GEO, HEO)",
            "Launch Vehicles (PSLV, GSLV, SSLV, Reusable)",
            "Indian Space Missions (Aditya L1, Mangalyaan)",
            "Space Policy 2023 & Private Sector"
        ],
        days: 4,
        category: 'Space'
    },
    {
        id: 'defense-tech',
        title: "Defense Technology",
        description: "Missile Systems, Aircraft, Submarines, and Modern Warfare.",
        subtopics: [
            "Missile Systems (Ballistic vs Cruise, IGMDP)",
            "Aircraft Carriers & Submarines (P75I)",
            "UAVs & Drones",
            "Cyber Warfare & Bioweapons"
        ],
        days: 3,
        category: 'Defense'
    },
    {
        id: 'biotech',
        title: "Biotechnology & Health",
        description: "Genetics, Vaccines, Diseases, and Public Health.",
        subtopics: [
            "Genetics (DNA, RNA, CRISPR-Cas9)",
            "Vaccine Types (mRNA, Vector, Inactivated)",
            "Diseases (Zoonotic, Lifestyle, Genetic)",
            "GM Crops & Regulations"
        ],
        days: 5,
        category: 'Biology'
    },
    {
        id: 'it-comms',
        title: "IT & Communications",
        description: "5G/6G, AI, Blockchain, and Cyber Security.",
        subtopics: [
            "5G vs 4G, Optical Fiber",
            "Artificial Intelligence (GenAI, Deepfakes)",
            "Blockchain & Crypto",
            "Quantum Computing"
        ],
        days: 3,
        category: 'IT'
    },
    {
        id: 'energy',
        title: "Energy & Nanotech",
        description: "Nuclear Energy, Renewables, and Nanomaterials.",
        subtopics: [
            "Nuclear Energy (3 Stage Program, Fission/Fusion)",
            "Green Hydrogen & Fuel Cells",
            "Nanotechnology Applications (Medicine, Ag)",
            "Superconductors"
        ],
        days: 3,
        category: 'Energy'
    }
];
