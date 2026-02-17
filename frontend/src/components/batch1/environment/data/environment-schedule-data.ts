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

// Day-wise schedule used by EnvironmentSectionPlanner
export interface EnvironmentScheduleDay {
    day: number;
    title: string;
    date: string;
    description: string;
    topics: string[];
    moduleId: string;
}

export const ENVIRONMENT_SCHEDULE: EnvironmentScheduleDay[] = [
    { day: 1, title: "Ecology Basics", date: "Day 1", description: "Ecosystem structure, energy flow, and ecological pyramids", topics: ["ecology-ecosystems"], moduleId: "ecology-ecosystems" },
    { day: 2, title: "Food Chains & Webs", date: "Day 2", description: "Trophic levels, biomagnification, and bioaccumulation", topics: ["ecology-ecosystems"], moduleId: "ecology-ecosystems" },
    { day: 3, title: "Ecotones & Niches", date: "Day 3", description: "Ecological succession, ecotones, and ecological niche", topics: ["ecology-ecosystems"], moduleId: "ecology-ecosystems" },
    { day: 4, title: "Biodiversity Intro", date: "Day 4", description: "Levels of biodiversity — genetic, species, and ecosystem", topics: ["biodiversity"], moduleId: "biodiversity" },
    { day: 5, title: "IUCN & Red List", date: "Day 5", description: "IUCN categories, endangered species of India", topics: ["biodiversity"], moduleId: "biodiversity" },
    { day: 6, title: "Protected Areas", date: "Day 6", description: "National Parks, Wildlife Sanctuaries, Biosphere Reserves", topics: ["biodiversity"], moduleId: "biodiversity" },
    { day: 7, title: "Biodiversity Hotspots", date: "Day 7", description: "Global hotspots, Western Ghats, Eastern Himalayas", topics: ["biodiversity"], moduleId: "biodiversity" },
    { day: 8, title: "Climate Change Basics", date: "Day 8", description: "Greenhouse effect, global warming, and ozone depletion", topics: ["climate-change"], moduleId: "climate-change" },
    { day: 9, title: "UNFCCC & Kyoto", date: "Day 9", description: "UNFCCC framework, Kyoto Protocol mechanisms (CDM)", topics: ["climate-change"], moduleId: "climate-change" },
    { day: 10, title: "Paris Agreement", date: "Day 10", description: "NDCs, carbon neutrality targets, and COP summits", topics: ["climate-change"], moduleId: "climate-change" },
    { day: 11, title: "IPCC Reports", date: "Day 11", description: "IPCC assessment reports and India's climate action", topics: ["climate-change"], moduleId: "climate-change" },
    { day: 12, title: "Wildlife Protection Act", date: "Day 12", description: "WPA 1972 — schedules, provisions, and amendments", topics: ["acts-policies"], moduleId: "acts-policies" },
    { day: 13, title: "EPA & Forest Rights", date: "Day 13", description: "Environment Protection Act 1986 and FRA 2006", topics: ["acts-policies"], moduleId: "acts-policies" },
    { day: 14, title: "Biodiversity Act & NGT", date: "Day 14", description: "Biological Diversity Act 2002 and National Green Tribunal", topics: ["acts-policies"], moduleId: "acts-policies" },
    { day: 15, title: "Revision & Practice", date: "Day 15", description: "Full revision of Environment & Ecology with MCQs", topics: ["ecology-ecosystems", "biodiversity", "climate-change", "acts-policies"], moduleId: "revision" },
];
