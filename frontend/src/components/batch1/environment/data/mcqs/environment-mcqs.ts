// Environment MCQs - Practice Questions
// UPSC Prelims-style questions on Ecology, Biodiversity, Climate Change, Conservation

export interface EnvironmentMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    chapter: number;
    subtopic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const environmentMCQs: EnvironmentMCQ[] = [
    {
        id: "env-mcq-01",
        question: "How many biodiversity hotspots are present in India?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "India has 4 biodiversity hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland (Andaman & Nicobar).",
        chapter: 2,
        subtopic: "Biodiversity Hotspots",
        difficulty: "easy"
    },
    {
        id: "env-mcq-02",
        question: "Which of the following is NOT a greenhouse gas?",
        options: ["Carbon dioxide", "Methane", "Nitrogen", "Nitrous oxide"],
        correctAnswer: 2,
        explanation: "Nitrogen (N2) is not a greenhouse gas. Major GHGs are CO2, CH4, N2O, CFCs, and water vapor.",
        chapter: 3,
        subtopic: "Greenhouse Effect",
        difficulty: "easy"
    },
    {
        id: "env-mcq-03",
        question: "Ramsar Convention is associated with protection of:",
        options: ["Forests", "Wetlands", "Deserts", "Mountains"],
        correctAnswer: 1,
        explanation: "Ramsar Convention (1971) is an international treaty for the conservation of wetlands. India has 75+ Ramsar sites.",
        chapter: 2,
        subtopic: "Protected Areas",
        difficulty: "easy"
    },
    {
        id: "env-mcq-04",
        question: "The 10% rule in ecology refers to:",
        options: [
            "10% of species are endemic",
            "10% energy transfer between trophic levels",
            "10% of forests should be protected",
            "10% of oceans are polluted"
        ],
        correctAnswer: 1,
        explanation: "Only about 10% of energy is transferred from one trophic level to the next. Rest is lost as heat.",
        chapter: 1,
        subtopic: "Energy Flow",
        difficulty: "medium"
    },
    {
        id: "env-mcq-05",
        question: "Which is India's first Marine National Park?",
        options: [
            "Gulf of Mannar",
            "Mahatma Gandhi Marine National Park",
            "Gulf of Kutch",
            "Sundarbans"
        ],
        correctAnswer: 2,
        explanation: "Gulf of Kutch Marine National Park was established in 1982, becoming India's first marine national park.",
        chapter: 2,
        subtopic: "Protected Areas",
        difficulty: "medium"
    },
    {
        id: "env-mcq-06",
        question: "CITES regulates:",
        options: [
            "Carbon emissions",
            "International wildlife trade",
            "Wetland conservation",
            "Ozone depleting substances"
        ],
        correctAnswer: 1,
        explanation: "CITES (Convention on International Trade in Endangered Species) regulates wildlife trade through Appendices I, II, III.",
        chapter: 4,
        subtopic: "International Conventions",
        difficulty: "medium"
    },
    {
        id: "env-mcq-07",
        question: "Coral bleaching is caused primarily by:",
        options: [
            "Decrease in sea temperature",
            "Increase in sea temperature",
            "Increase in oxygen levels",
            "Decrease in salinity"
        ],
        correctAnswer: 1,
        explanation: "Warming sea temperatures cause corals to expel symbiotic algae, leading to bleaching. Climate change is the main driver.",
        chapter: 2,
        subtopic: "Biodiversity",
        difficulty: "medium"
    },
    {
        id: "env-mcq-08",
        question: "Which protocol deals with phasing out of ozone depleting substances?",
        options: [
            "Kyoto Protocol",
            "Montreal Protocol",
            "Paris Agreement",
            "Vienna Convention"
        ],
        correctAnswer: 1,
        explanation: "Montreal Protocol (1987) successfully phased out CFCs and other ozone-depleting substances. Most successful environmental treaty.",
        chapter: 3,
        subtopic: "Ozone Protection",
        difficulty: "easy"
    },
    {
        id: "env-mcq-09",
        question: "National Action Plan on Climate Change (NAPCC) has how many missions?",
        options: ["5", "6", "8", "10"],
        correctAnswer: 2,
        explanation: "NAPCC has 8 missions including Solar, Energy Efficiency, Sustainable Habitat, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, and Strategic Knowledge.",
        chapter: 3,
        subtopic: "NAPCC Missions",
        difficulty: "medium"
    },
    {
        id: "env-mcq-10",
        question: "Eutrophication is caused by:",
        options: [
            "Heavy metals",
            "Excessive nutrients (N, P)",
            "Oil spills",
            "Thermal pollution"
        ],
        correctAnswer: 1,
        explanation: "Eutrophication is caused by excess nitrogen and phosphorus (from fertilizers, sewage) leading to algal blooms and oxygen depletion.",
        chapter: 1,
        subtopic: "Ecosystem Health",
        difficulty: "medium"
    }
];
