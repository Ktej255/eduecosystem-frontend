
export const ENVIRONMENT_CHAPTER1_TIERED = {
    id: 1,
    title: "Ecology & Ecosystem Functions",
    description: "Basic concepts of ecology, ecosystem services, and ecological pyramids.",
    levels: {
        1: {
            title: "Ecological Basics",
            description: "Fundamental terms and definitions.",
            mcqs: [
                {
                    id: "env-ch1-l1-q1",
                    question: "Who coined the term 'Ecosystem'?",
                    options: ["Ernest Haeckel", "A.G. Tansley", "Charles Darwin", "Rachel Carson"],
                    correctAnswer: 1,
                    explanation: "Arthur G. Tansley coined the term 'Ecosystem' in 1935."
                },
                {
                    id: "env-ch1-l1-q2",
                    question: "What is the primary source of energy in a terrestrial ecosystem?",
                    options: ["Producers", "Sun", "Decomposers", "Soil"],
                    correctAnswer: 1,
                    explanation: "The Sun is the ultimate source of energy for almost all ecosystems on Earth."
                },
                {
                    id: "env-ch1-l1-q3",
                    question: "Which of the following is an abiotic component of an ecosystem?",
                    options: ["Bacteria", "Fungi", "Temperature", "Plants"],
                    correctAnswer: 2,
                    explanation: "Abiotic components are non-living chemical and physical parts of the environment like temperature, water, light."
                },
                {
                    id: "env-ch1-l1-q4",
                    question: "In an ecological pyramid, the base always represents:",
                    options: ["Top Carnivores", "Primary Consumers", "Producers", "Decomposers"],
                    correctAnswer: 2,
                    explanation: "The base of an ecological pyramid is formed by producers (autotrophs) who support all other trophic levels."
                },
                {
                    id: "env-ch1-l1-q5",
                    question: "Which is the largest ecosystem on Earth?",
                    options: ["Forests", "Grasslands", "Biosphere", "Oceans"],
                    correctAnswer: 3,
                    explanation: "The Biosphere (global sum of all ecosystems) is technically the largest, but among specific types, Oceans cover 71% of Earth."
                }
            ]
        },
        2: {
            title: "Ecosystem Dynamics",
            description: "Flow of energy, food webs, and ecological relationships.",
            mcqs: [
                {
                    id: "env-ch1-l2-q1",
                    question: "Consider the following about 'Ecotone':\n1. It is a zone of junction between two diverse ecosystems.\n2. It always has lower biodiversity than the adjoining ecosystems.\nWhich is correct?",
                    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
                    correctAnswer: 0,
                    explanation: "Ecotone is a transition zone (e.g., mangrove). It often has HIGHER biodiversity due to 'Edge Effect'. So 2 is incorrect."
                },
                {
                    id: "env-ch1-l2-q2",
                    question: "Why is the Pyramid of Energy always upright?",
                    options: ["Energy accumulation increases at higher levels.", "Energy is lost as heat at each transfer (10% Law).", "Producers have less energy than consumers.", "Decomposers recycle energy."],
                    correctAnswer: 1,
                    explanation: "According to Lindeman's 10% Law, only 10% of energy is transferred to the next level. Rest is lost as heat. Hence always upright."
                },
                {
                    id: "env-ch1-l2-q3",
                    question: "What is 'Ecological Niche'?",
                    options: ["The physical place where an organism lives.", "The functional role of an organism in an ecosystem.", "The diversity of species in an area.", "The transition zone between two biomes."],
                    correctAnswer: 1,
                    explanation: "Niche refers to the functional role or profession of an organism (what it eats, who eats it, how it reproduces)."
                },
                {
                    id: "env-ch1-l2-q4",
                    question: "Which of the following represents a 'Grazing Food Chain'?",
                    options: ["Dead leaves -> Woodlouse -> Blackbird", "Grass -> Goat -> Man", "Phytoplankton -> Zooplankton -> Fish", "Both B and C"],
                    correctAnswer: 3,
                    explanation: "Grazing Food Chain starts with living green plants (producers). Both B (terrestrial) and C (aquatic) are Grazing chains."
                },
                {
                    id: "env-ch1-l2-q5",
                    question: "In the context of 'Bioaccumulation', which statement is correct?",
                    options: ["It refers to increase in concentration of pollutant up the food chain.", "It refers to accumulation of pollutant in an organism over time.", "It is the breakdown of pollutants by microbes.", "It occurs only in aquatic ecosystems."],
                    correctAnswer: 1,
                    explanation: "Bioaccumulation is the accumulation within ONE organism over time. Biomagnification is the increase UP the food chain."
                }
            ]
        },
        3: {
            title: "Applied Ecology",
            description: "Current issues, conservation, and complex analysis.",
            mcqs: [
                {
                    id: "env-ch1-l3-q1",
                    question: "Consider 'Blue Carbon':\n1. It is the carbon stored in coastal and marine ecosystems.\n2. Mangroves and Seagrasses are major sinks.\n3. It is less efficient than terrestrial forests in carbon sequestration.\nWhich are correct?",
                    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "All three"],
                    correctAnswer: 0,
                    explanation: "Blue Carbon is stored in coastal ecosystems. They are extremely efficient, often burying carbon 10x faster than forests. So 3 is incorrect."
                },
                {
                    id: "env-ch1-l3-q2",
                    question: "Which of the following best describes 'Carrying Capacity'?",
                    options: ["Maximum population size an environment can sustain indefinitely.", "Minimum population needed to prevent extinction.", "Total biomass of an ecosystem.", "Rate of reproduction of a species."],
                    correctAnswer: 0,
                    explanation: "Carrying Capacity (K) is the maximum population size of the species that the environment can sustain indefinitely, given the food, habitat, etc."
                },
                {
                    id: "env-ch1-l3-q3",
                    question: "With reference to 'Ecological Footprint', what does 'Earth Overshoot Day' signify?",
                    options: ["The day when human population exceeds 10 billion.", "The date when humanity's demand for resources exceeds what Earth can regenerate in that year.", "The day when carbon emissions peak.", "The day when global temperature rises by 1.5°C."],
                    correctAnswer: 1,
                    explanation: "Earth Overshoot Day marks the date when our consumption of ecological resources and services exceeds what Earth can regenerate in that year."
                },
                {
                    id: "env-ch1-l3-q4",
                    question: "Consider the 'Keystone Species' concept:\n1. Their removal causes ecosystem collapse.\n2. They must always be the predator at the top of the food chain.\n3. Pollinators like bees can be keystone species.\nWhich are correct?",
                    options: ["1 only", "1 and 2", "1 and 3", "All three"],
                    correctAnswer: 2,
                    explanation: "Keystone species have a disproportionate impact. They aren't always top predators (e.g., bees, beavers). Removal causes collapse. So 1 and 3 are correct."
                },
                {
                    id: "env-ch1-l3-q5",
                    question: "What is 'Eutrophication' primarily caused by?",
                    options: ["Excess Carbon Dioxide in water.", "Excess Nutrients (Nitrates/Phosphates) leading to algal bloom.", "Thermal pollution.", "Heavy metal contamination."],
                    correctAnswer: 1,
                    explanation: "Eutrophication is nutrient enrichment (N, P) leading to rapid algal growth, which depletes oxygen (hypoxia) and kills marine life."
                }
            ]
        }
    }
};
