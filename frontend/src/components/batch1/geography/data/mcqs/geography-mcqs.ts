// Geography MCQs - Practice Questions
// Covers all 4 modules with UPSC Prelims-style questions

export interface GeographyMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    module: 'physical' | 'world' | 'indian' | 'human';
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const geographyMCQs: GeographyMCQ[] = [
    // Module 1: Physical Geography
    {
        id: "geo-mcq-01",
        question: "Which type of plate boundary creates mid-ocean ridges?",
        options: [
            "Convergent boundary",
            "Divergent boundary",
            "Transform boundary",
            "Conservative boundary"
        ],
        correctAnswer: 1,
        explanation: "Divergent boundaries occur where plates move apart, allowing magma to rise and create new oceanic crust, forming mid-ocean ridges.",
        module: "physical",
        topic: "Plate Tectonics",
        difficulty: "medium"
    },
    {
        id: "geo-mcq-02",
        question: "Which rock type is formed from the cooling of magma?",
        options: [
            "Sedimentary rock",
            "Metamorphic rock",
            "Igneous rock",
            "Alluvial rock"
        ],
        correctAnswer: 2,
        explanation: "Igneous rocks form when magma (underground) or lava (surface) cools and solidifies. Examples: granite, basalt.",
        module: "physical",
        topic: "Geology",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-03",
        question: "Which atmospheric layer contains the ozone layer?",
        options: [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        correctAnswer: 1,
        explanation: "The ozone layer is located in the stratosphere (15-35 km altitude), protecting Earth from UV radiation.",
        module: "physical",
        topic: "Climatology",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-04",
        question: "El Niño refers to:",
        options: [
            "Cooling of Pacific Ocean waters near South America",
            "Warming of Pacific Ocean waters near South America",
            "Typhoons in the Atlantic Ocean",
            "Cold currents in the Indian Ocean"
        ],
        correctAnswer: 1,
        explanation: "El Niño is the warming of Pacific Ocean surface waters near Peru/Ecuador, affecting global weather patterns including Indian monsoon.",
        module: "physical",
        topic: "Climatology",
        difficulty: "easy"
    },

    // Module 2: World Geography
    {
        id: "geo-mcq-05",
        question: "The Ring of Fire is associated with which ocean?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        correctAnswer: 2,
        explanation: "The Pacific Ring of Fire has 75% of the world's active volcanoes and 90% of earthquakes.",
        module: "world",
        topic: "Tectonics",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-06",
        question: "Prairies are the grasslands of which region?",
        options: [
            "South America",
            "North America",
            "Australia",
            "South Africa"
        ],
        correctAnswer: 1,
        explanation: "Prairies are North American grasslands. Pampas (Argentina), Veld (S. Africa), Downs (Australia), Steppes (Eurasia).",
        module: "world",
        topic: "Biomes",
        difficulty: "medium"
    },
    {
        id: "geo-mcq-07",
        question: "Fjords are formed by:",
        options: [
            "River erosion",
            "Glacial erosion",
            "Wind erosion",
            "Tectonic activity"
        ],
        correctAnswer: 1,
        explanation: "Fjords are deep, narrow inlets with steep cliffs formed when glacial valleys are flooded by sea. Norway has famous fjords.",
        module: "world",
        topic: "Glacial Landforms",
        difficulty: "medium"
    },

    // Module 3: Indian Geography
    {
        id: "geo-mcq-08",
        question: "Which is the longest river of Peninsular India?",
        options: [
            "Mahanadi",
            "Kaveri",
            "Krishna",
            "Godavari"
        ],
        correctAnswer: 3,
        explanation: "Godavari (1,465 km) is the longest peninsular river, called 'Dakshin Ganga'. It originates in Nashik, Maharashtra.",
        module: "indian",
        topic: "Drainage",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-09",
        question: "Black cotton soil (Regur) is formed from the weathering of:",
        options: [
            "Granite",
            "Basalt",
            "Sandstone",
            "Limestone"
        ],
        correctAnswer: 1,
        explanation: "Black soil is derived from basalt rocks of the Deccan Traps. Rich in iron and magnesium, ideal for cotton cultivation.",
        module: "indian",
        topic: "Soils",
        difficulty: "medium"
    },
    {
        id: "geo-mcq-10",
        question: "The Western Ghats are:",
        options: [
            "A young fold mountain",
            "A block mountain",
            "Remnants of ancient volcanic activity",
            "A fault scarp"
        ],
        correctAnswer: 3,
        explanation: "Western Ghats are fault-block mountains representing the faulted edge of the Deccan Plateau. They are a UNESCO World Heritage Site.",
        module: "indian",
        topic: "Physiography",
        difficulty: "hard"
    },
    {
        id: "geo-mcq-11",
        question: "Which factor is primarily responsible for the Southwest Monsoon in India?",
        options: [
            "High pressure over the Indian subcontinent",
            "Shift of ITCZ to the north",
            "El Niño conditions",
            "High pressure over the Pacific Ocean"
        ],
        correctAnswer: 1,
        explanation: "In summer, ITCZ shifts north to the Himalayas, creating low pressure over India and pulling in moisture-laden SW winds from the Indian Ocean.",
        module: "indian",
        topic: "Monsoon",
        difficulty: "medium"
    },

    // Module 4: Human & Economic Geography
    {
        id: "geo-mcq-12",
        question: "India is currently in which stage of Demographic Transition?",
        options: [
            "Stage 1 - High birth and death rates",
            "Stage 2 - Declining death rates",
            "Stage 3 - Declining birth rates",
            "Stage 4 - Low birth and death rates"
        ],
        correctAnswer: 2,
        explanation: "India is in Stage 3 with declining birth rates but still higher than developed countries. Moving towards Stage 4.",
        module: "human",
        topic: "Demographics",
        difficulty: "medium"
    },
    {
        id: "geo-mcq-13",
        question: "Which sector is considered as the 'backbone of Indian economy'?",
        options: [
            "Primary sector",
            "Secondary sector",
            "Tertiary sector",
            "Quaternary sector"
        ],
        correctAnswer: 0,
        explanation: "Agriculture (primary sector) employs ~42% of workforce and is considered backbone though services contribute more to GDP.",
        module: "human",
        topic: "Economic Activities",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-14",
        question: "How many cities are covered under India's Smart City Mission?",
        options: [
            "50 cities",
            "75 cities",
            "100 cities",
            "150 cities"
        ],
        correctAnswer: 2,
        explanation: "Smart City Mission (2015) covers 100 cities with focus on ICT-based infrastructure and sustainable development.",
        module: "human",
        topic: "Urbanization",
        difficulty: "easy"
    },
    {
        id: "geo-mcq-15",
        question: "What percentage of India's population is classified as urban (2020s)?",
        options: [
            "About 25%",
            "About 35%",
            "About 45%",
            "About 55%"
        ],
        correctAnswer: 1,
        explanation: "About 35% of India is urban, projected to reach 50% by 2050. Urbanization is increasing rapidly.",
        module: "human",
        topic: "Urbanization",
        difficulty: "medium"
    }
];
