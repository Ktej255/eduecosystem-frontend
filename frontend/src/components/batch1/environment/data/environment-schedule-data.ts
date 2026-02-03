export interface EnvironmentTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Ecology' | 'Biodiversity' | 'Climate' | 'Pollution' | 'Acts';
}

export const ENVIRONMENT_SYLLABUS: EnvironmentTopic[] = [
    {
        id: 'ecology-ecosystems',
        title: "Ecology & Ecosystems",
        description: "Functions of Ecosystem, Terrestrial & Aquatic Systems.",
        subtopics: [
            "Ecotones & Ecological Niche",
            "Energy Flow (10% Law)",
            "Biomagnification vs Bioaccumulation",
            "Ecological Pyramids"
        ],
        days: 3,
        category: 'Ecology'
    },
    {
        id: 'biodiversity',
        title: "Biodiversity & Conservation",
        description: "Flora, Fauna, and Protected Area Networks.",
        subtopics: [
            "Levels of Biodiversity (Genetic, Species)",
            "IUCN Red List Categories",
            "Biosphere Reserves (MAB Program)",
            "Biodiversity Hotspots"
        ],
        days: 4,
        category: 'Biodiversity'
    },
    {
        id: 'climate-change',
        title: "Climate Change & Conventions",
        description: "UNFCCC, Kyoto Protocol, Paris Agreement & COP Summits.",
        subtopics: [
            "Greenhouse Effect & Global Warming",
            "Kyoto Mechanisms (CDM, Carbon Trading)",
            "Paris Agreement (NDCs)",
            "IPCC Reports"
        ],
        days: 4,
        category: 'Climate'
    },
    {
        id: 'acts-policies',
        title: "Environmental Acts & Policies",
        description: "Indian Laws for Wildlife and Pollution Control.",
        subtopics: [
            "Wildlife Protection Act 1972",
            "Environment Protection Act 1986",
            "Forest Rights Act 2006",
            "Biological Diversity Act 2002"
        ],
        days: 3,
        category: 'Acts'
    }
];
