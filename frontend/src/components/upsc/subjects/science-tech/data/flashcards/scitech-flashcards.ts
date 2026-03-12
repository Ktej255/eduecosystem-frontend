// Science & Technology Flashcards - Complete Collection
// Covers Space, Defense, IT, Biotech, and Emerging Technologies

export interface SciTechFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

export const sciTechFlashcards: SciTechFlashcard[] = [
    // Space Technology
    {
        id: "st-01",
        front: "What is ISRO's major achievements?",
        back: "Chandrayaan-3 (Moon landing 2023), Mangalyaan (Mars first attempt success), Gaganyaan (upcoming crewed mission), PSLV (workhorse rocket), NavIC (regional navigation). HQ: Bengaluru.",
        subject: "Science & Tech",
        topic: "Space",
        tags: ["ISRO", "Space"],
        difficulty: "easy"
    },
    {
        id: "st-02",
        front: "What is the difference between PSLV and GSLV?",
        back: "PSLV: Polar Satellite Launch Vehicle, 4 stages, launches satellites to LEO/SSO (700kg). GSLV: Geosynchronous, heavier payloads (4 tonnes), uses cryogenic engine for GTO. GSLV Mk III is most powerful.",
        subject: "Science & Tech",
        topic: "Space",
        tags: ["PSLV", "GSLV", "Rockets"],
        difficulty: "medium"
    },
    {
        id: "st-03",
        front: "What is NavIC?",
        back: "Navigation with Indian Constellation: India's regional satellite navigation system covering India + 1,500 km. 7 satellites (3 GEO + 4 GSO). Alternative to GPS for strategic independence. Accuracy: 10-20m.",
        subject: "Science & Tech",
        topic: "Space",
        tags: ["NavIC", "Navigation"],
        difficulty: "medium"
    },

    // Nuclear & Energy
    {
        id: "st-04",
        front: "What is India's Three-Stage Nuclear Program?",
        back: "Homi Bhabha's vision: Stage 1: PHWR using natural uranium. Stage 2: Fast Breeder Reactors using plutonium. Stage 3: Thorium-based reactors (India has 25% world's thorium). Currently mostly in Stage 1-2.",
        subject: "Science & Tech",
        topic: "Nuclear",
        tags: ["Nuclear", "Energy"],
        difficulty: "hard"
    },
    {
        id: "st-05",
        front: "What is the difference between Nuclear Fission and Fusion?",
        back: "Fission: Heavy atoms split into lighter atoms (uranium/plutonium). Used in current reactors. Fusion: Light atoms combine (hydrogen to helium). Powers the sun. Clean, but technically challenging.",
        subject: "Science & Tech",
        topic: "Nuclear",
        tags: ["Fission", "Fusion"],
        difficulty: "medium"
    },

    // Defense Technology
    {
        id: "st-06",
        front: "What is India's indigenous missile program?",
        back: "IGMDP (Dr. APJ Kalam): Prithvi (surface), Agni (ballistic, 5000+ km range), Trishul (SAM), Akash (SAM), Nag (anti-tank). BrahMos (cruise, world's fastest). K-series (submarine).",
        subject: "Science & Tech",
        topic: "Defense",
        tags: ["Missiles", "DRDO"],
        difficulty: "medium"
    },
    {
        id: "st-07",
        front: "What is Tejas?",
        back: "India's indigenous Light Combat Aircraft (LCA). 4th gen, supersonic, single-engine. Developed by HAL and ADA. Tejas Mk1A has AESA radar. First indigenously designed fighter in service.",
        subject: "Science & Tech",
        topic: "Defense",
        tags: ["LCA", "HAL"],
        difficulty: "easy"
    },

    // Biotechnology
    {
        id: "st-08",
        front: "What is CRISPR-Cas9?",
        back: "Gene editing tool that cuts DNA at specific locations. Nobel Prize 2020. Applications: Disease treatment, crop improvement, gene therapy. Ethical concerns about 'designer babies'.",
        subject: "Science & Tech",
        topic: "Biotech",
        tags: ["CRISPR", "Gene Editing"],
        difficulty: "medium"
    },
    {
        id: "st-09",
        front: "What is mRNA vaccine technology?",
        back: "Vaccines that use messenger RNA to instruct cells to produce a protein that triggers immune response. COVID-19 vaccines (Pfizer, Moderna) used this. Faster development, no live virus needed.",
        subject: "Science & Tech",
        topic: "Biotech",
        tags: ["mRNA", "Vaccines"],
        difficulty: "medium"
    },
    {
        id: "st-10",
        front: "What is India's National Biopharma Mission?",
        back: "BIRAC initiative to make India a global hub for biopharmaceuticals. Focus: affordable vaccines, biosimilars, diagnostics. Supported COVID-19 vaccine development (Covaxin by Bharat Biotech).",
        subject: "Science & Tech",
        topic: "Biotech",
        tags: ["Biopharma", "India"],
        difficulty: "medium"
    },

    // IT & Digital
    {
        id: "st-11",
        front: "What is Artificial Intelligence (AI)?",
        back: "Machines simulating human intelligence. Types: Narrow AI (task-specific), General AI (human-like), Super AI (beyond human). Applications: Healthcare, automation, defense. India has National AI Strategy.",
        subject: "Science & Tech",
        topic: "IT",
        tags: ["AI", "Machine Learning"],
        difficulty: "easy"
    },
    {
        id: "st-12",
        front: "What is Blockchain?",
        back: "Distributed ledger technology where data is stored in blocks linked cryptographically. Decentralized, immutable, transparent. Used in cryptocurrencies, supply chain, land records.",
        subject: "Science & Tech",
        topic: "IT",
        tags: ["Blockchain", "Crypto"],
        difficulty: "medium"
    },
    {
        id: "st-13",
        front: "What is Quantum Computing?",
        back: "Uses quantum bits (qubits) that can be 0, 1, or both (superposition). Exponentially faster for certain problems. Applications: cryptography, drug discovery, optimization. Still experimental.",
        subject: "Science & Tech",
        topic: "IT",
        tags: ["Quantum", "Computing"],
        difficulty: "hard"
    },
    {
        id: "st-14",
        front: "What is 5G technology?",
        back: "5th generation mobile network: 10 Gbps speed, 1ms latency, 1 million devices/sq km. Enables IoT, autonomous vehicles, telemedicine. India launched 5G in 2022.",
        subject: "Science & Tech",
        topic: "IT",
        tags: ["5G", "Telecom"],
        difficulty: "easy"
    },
    {
        id: "st-15",
        front: "What is India Stack?",
        back: "Open API platform for digital identity (Aadhaar), payments (UPI), data sharing (DigiLocker), consent (DEPA). Foundation of India's digital public infrastructure. Model for other countries.",
        subject: "Science & Tech",
        topic: "IT",
        tags: ["India Stack", "Digital"],
        difficulty: "medium"
    }
];
