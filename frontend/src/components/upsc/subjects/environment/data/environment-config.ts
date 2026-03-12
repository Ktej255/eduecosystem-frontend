import { SubjectConfig, WeeklyScheduleData } from "../../../common/framework/SubjectPlanner";
import { Leaf, Warehouse, CloudFog, Scale } from "lucide-react"; // Warehouse as placeholder for conservation/bank, CloudFog for pollution
import React from "react";

// --- Syllabus Data ---

const ENVIRONMENT_MODULES = [
    {
        id: "1",
        title: "Ecology & Ecosystems",
        description: "Functions of ecosystems, energy flow, productivity, and biomes.",
        icon: React.createElement(Leaf),
        color: "green",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Biodiversity & Conservation",
        description: "Flora, fauna, protected areas, red data book, and conservation efforts.",
        icon: React.createElement(Warehouse), // Using warehouse as 'store' of nature
        color: "emerald",
        topicRange: [16, 30] as [number, number]
    },
    {
        id: "3",
        title: "Climate Change & Organizations",
        description: "Global warming, UNFCCC, Kyoto, Paris Agreement, and international bodies.",
        icon: React.createElement(CloudFog),
        color: "cyan",
        topicRange: [31, 45] as [number, number]
    },
    {
        id: "4",
        title: "Pollution & Acts",
        description: "Air, Water, Noise pollution, and environmental legislation in India.",
        icon: React.createElement(Scale), // Scale for Laws/Acts
        color: "red",
        topicRange: [46, 55] as [number, number]
    }
];

// Real UPSC Environment & Ecology Topics organized by Module
const ENVIRONMENT_TOPICS = [
    // Module 1: Ecology & Ecosystems (1-15)
    { id: 1, title: "Ecology: Basic Concepts", moduleId: "1", priority: "High", staticFocus: "Autotrophs, heterotrophs, producers, consumers", keyConcepts: ["Food Chain", "Food Web"], currentAffairsCount: 2 },
    { id: 2, title: "Ecosystem Structure & Functions", moduleId: "1", priority: "High", staticFocus: "Biotic and abiotic components", keyConcepts: ["Producers", "Decomposers"], currentAffairsCount: 2 },
    { id: 3, title: "Energy Flow in Ecosystem", moduleId: "1", priority: "High", staticFocus: "10% rule, trophic levels", keyConcepts: ["Pyramid of Energy", "Biomass"], currentAffairsCount: 2 },
    { id: 4, title: "Nutrient Cycles", moduleId: "1", priority: "High", staticFocus: "Carbon, nitrogen, phosphorus cycles", keyConcepts: ["Biogeochemical Cycles", "Nitrogen Fixation"], currentAffairsCount: 3 },
    { id: 5, title: "Ecological Succession", moduleId: "1", priority: "Medium", staticFocus: "Primary and secondary succession", keyConcepts: ["Pioneer Species", "Climax Community"], currentAffairsCount: 1 },
    { id: 6, title: "Biomes of the World", moduleId: "1", priority: "Medium", staticFocus: "Forests, grasslands, deserts, tundra", keyConcepts: ["Tropical Rainforest", "Taiga"], currentAffairsCount: 2 },
    { id: 7, title: "Forest Ecosystem", moduleId: "1", priority: "High", staticFocus: "Types of forests, forest cover in India", keyConcepts: ["Evergreen", "Deciduous", "Mangroves"], currentAffairsCount: 4 },
    { id: 8, title: "Grassland & Desert Ecosystem", moduleId: "1", priority: "Medium", staticFocus: "Savanna, steppes, hot and cold deserts", keyConcepts: ["Xerophytes", "Adaptations"], currentAffairsCount: 2 },
    { id: 9, title: "Aquatic Ecosystems", moduleId: "1", priority: "Medium", staticFocus: "Freshwater and marine", keyConcepts: ["Limnetic Zone", "Photic Zone"], currentAffairsCount: 3 },
    { id: 10, title: "Wetland Ecosystems", moduleId: "1", priority: "High", staticFocus: "Ramsar sites, functions", keyConcepts: ["Ramsar Convention", "75+ Sites in India"], currentAffairsCount: 5 },
    { id: 11, title: "Coral Reefs", moduleId: "1", priority: "High", staticFocus: "Distribution, threats, bleaching", keyConcepts: ["Zooxanthellae", "Coral Triangle"], currentAffairsCount: 4 },
    { id: 12, title: "Mangrove Ecosystems", moduleId: "1", priority: "High", staticFocus: "Sundarbans, Gulf of Kutch", keyConcepts: ["Pneumatophores", "Coastal Protection"], currentAffairsCount: 4 },
    { id: 13, title: "Environmental Gradients", moduleId: "1", priority: "Low", staticFocus: "Ecotones, edge effect", keyConcepts: ["Transition Zones", "Biodiversity"], currentAffairsCount: 1 },
    { id: 14, title: "Ecological Interactions", moduleId: "1", priority: "Medium", staticFocus: "Symbiosis, predation, competition", keyConcepts: ["Mutualism", "Commensalism"], currentAffairsCount: 1 },
    { id: 15, title: "Ecological Niche", moduleId: "1", priority: "Medium", staticFocus: "Fundamental vs realized niche", keyConcepts: ["Gause's Principle", "Niche Partitioning"], currentAffairsCount: 1 },

    // Module 2: Biodiversity & Conservation (16-30)
    { id: 16, title: "Biodiversity: Types & Levels", moduleId: "2", priority: "High", staticFocus: "Genetic, species, ecosystem diversity", keyConcepts: ["Alpha", "Beta", "Gamma"], currentAffairsCount: 3 },
    { id: 17, title: "Biodiversity Hotspots", moduleId: "2", priority: "High", staticFocus: "34 global, 4 in India", keyConcepts: ["Western Ghats", "Eastern Himalayas"], currentAffairsCount: 4 },
    { id: 18, title: "Endemic & Endangered Species", moduleId: "2", priority: "High", staticFocus: "India's unique species", keyConcepts: ["Lion-tailed Macaque", "Nilgiri Tahr"], currentAffairsCount: 5 },
    { id: 19, title: "IUCN Red List", moduleId: "2", priority: "High", staticFocus: "Categories and criteria", keyConcepts: ["CR", "EN", "VU", "NT", "LC"], currentAffairsCount: 4 },
    { id: 20, title: "Protected Area Network", moduleId: "2", priority: "High", staticFocus: "National Parks, Sanctuaries", keyConcepts: ["Wildlife Protection Act 1972"], currentAffairsCount: 5 },
    { id: 21, title: "Biosphere Reserves", moduleId: "2", priority: "High", staticFocus: "MAB Programme, zones", keyConcepts: ["18 in India", "UNESCO"], currentAffairsCount: 4 },
    { id: 22, title: "Tiger Conservation", moduleId: "2", priority: "High", staticFocus: "Project Tiger, tiger census", keyConcepts: ["NTCA", "3000+ Tigers"], currentAffairsCount: 6 },
    { id: 23, title: "Elephant Conservation", moduleId: "2", priority: "Medium", staticFocus: "Project Elephant, corridors", keyConcepts: ["Human-Wildlife Conflict"], currentAffairsCount: 4 },
    { id: 24, title: "In-situ Conservation", moduleId: "2", priority: "High", staticFocus: "On-site protection methods", keyConcepts: ["Core Zone", "Buffer Zone"], currentAffairsCount: 3 },
    { id: 25, title: "Ex-situ Conservation", moduleId: "2", priority: "Medium", staticFocus: "Zoos, gene banks, seed banks", keyConcepts: ["Cryopreservation", "NBPGR"], currentAffairsCount: 3 },
    { id: 26, title: "CITES Convention", moduleId: "2", priority: "High", staticFocus: "Trade in wildlife", keyConcepts: ["Appendix I, II, III"], currentAffairsCount: 4 },
    { id: 27, title: "CBD & Nagoya Protocol", moduleId: "2", priority: "High", staticFocus: "Access and benefit sharing", keyConcepts: ["ABS", "Genetic Resources"], currentAffairsCount: 4 },
    { id: 28, title: "Wildlife Crime & TRAFFIC", moduleId: "2", priority: "Medium", staticFocus: "Illegal trade, enforcement", keyConcepts: ["Poaching", "WCCB"], currentAffairsCount: 3 },
    { id: 29, title: "Community Conservation", moduleId: "2", priority: "Medium", staticFocus: "CCAs, sacred groves", keyConcepts: ["Khasi Hills", "Joint Forest Management"], currentAffairsCount: 3 },
    { id: 30, title: "Indian Wildlife Protection Act", moduleId: "2", priority: "High", staticFocus: "Schedules, provisions, amendments", keyConcepts: ["Schedule I-VI", "WLPA 1972"], currentAffairsCount: 4 },

    // Module 3: Climate Change & Organizations (31-45)
    { id: 31, title: "Climate Change Science", moduleId: "3", priority: "High", staticFocus: "Greenhouse effect, GHGs", keyConcepts: ["CO2", "Methane", "Radiative Forcing"], currentAffairsCount: 5 },
    { id: 32, title: "IPCC Reports", moduleId: "3", priority: "High", staticFocus: "Assessment reports, scenarios", keyConcepts: ["AR6", "1.5°C Pathway"], currentAffairsCount: 6 },
    { id: 33, title: "Global Warming Impacts", moduleId: "3", priority: "High", staticFocus: "Sea level rise, extreme weather", keyConcepts: ["Heat Waves", "Glacier Melt"], currentAffairsCount: 6 },
    { id: 34, title: "UNFCCC Framework", moduleId: "3", priority: "High", staticFocus: "COP structure, principles", keyConcepts: ["CBDR", "Historical Responsibility"], currentAffairsCount: 5 },
    { id: 35, title: "Kyoto Protocol", moduleId: "3", priority: "Medium", staticFocus: "First commitment period", keyConcepts: ["CDM", "Carbon Credits"], currentAffairsCount: 2 },
    { id: 36, title: "Paris Agreement", moduleId: "3", priority: "High", staticFocus: "NDCs, 1.5-2°C target", keyConcepts: ["India's NDC", "Net Zero 2070"], currentAffairsCount: 7 },
    { id: 37, title: "Carbon Markets", moduleId: "3", priority: "High", staticFocus: "Emissions trading, Article 6", keyConcepts: ["Carbon Offset", "Cap and Trade"], currentAffairsCount: 5 },
    { id: 38, title: "India's Climate Action", moduleId: "3", priority: "High", staticFocus: "NAPCC, 8 missions", keyConcepts: ["Solar Mission", "FAME"], currentAffairsCount: 6 },
    { id: 39, title: "Ozone Layer & Montreal Protocol", moduleId: "3", priority: "Medium", staticFocus: "CFCs, ozone hole, recovery", keyConcepts: ["Kigali Amendment", "HFCs"], currentAffairsCount: 3 },
    { id: 40, title: "International Environmental Bodies", moduleId: "3", priority: "Medium", staticFocus: "UNEP, GEF, IUCN", keyConcepts: ["Nairobi HQ", "Green Climate Fund"], currentAffairsCount: 3 },
    { id: 41, title: "Sustainable Development Goals", moduleId: "3", priority: "High", staticFocus: "Agenda 2030, environmental SDGs", keyConcepts: ["SDG 13-15", "Climate Action"], currentAffairsCount: 5 },
    { id: 42, title: "Climate Finance", moduleId: "3", priority: "Medium", staticFocus: "$100 billion pledge, NCEF", keyConcepts: ["Loss and Damage Fund"], currentAffairsCount: 4 },
    { id: 43, title: "Renewable Energy Transition", moduleId: "3", priority: "High", staticFocus: "Solar, wind targets", keyConcepts: ["500 GW by 2030", "ISA"], currentAffairsCount: 6 },
    { id: 44, title: "Carbon Sequestration", moduleId: "3", priority: "Medium", staticFocus: "Forests, oceans, CCS", keyConcepts: ["Blue Carbon", "BECCS"], currentAffairsCount: 3 },
    { id: 45, title: "Climate Adaptation Strategies", moduleId: "3", priority: "Medium", staticFocus: "Resilience, early warning", keyConcepts: ["NAPCC Adaptation", "CDRI"], currentAffairsCount: 4 },

    // Module 4: Pollution & Acts (46-55)
    { id: 46, title: "Air Pollution", moduleId: "4", priority: "High", staticFocus: "Sources, AQI, health impacts", keyConcepts: ["PM2.5", "NCAP"], currentAffairsCount: 6 },
    { id: 47, title: "Water Pollution", moduleId: "4", priority: "High", staticFocus: "BOD, COD, eutrophication", keyConcepts: ["CPCB", "Namami Gange"], currentAffairsCount: 5 },
    { id: 48, title: "Soil Pollution", moduleId: "4", priority: "Medium", staticFocus: "Pesticides, heavy metals", keyConcepts: ["Bioremediation", "Soil Health Card"], currentAffairsCount: 3 },
    { id: 49, title: "Noise Pollution", moduleId: "4", priority: "Low", staticFocus: "Decibel limits, health effects", keyConcepts: ["Noise Rules 2000", "Silence Zones"], currentAffairsCount: 2 },
    { id: 50, title: "Plastic Pollution", moduleId: "4", priority: "High", staticFocus: "SUP ban, microplastics", keyConcepts: ["Extended Producer Responsibility"], currentAffairsCount: 6 },
    { id: 51, title: "E-Waste Management", moduleId: "4", priority: "Medium", staticFocus: "Hazardous components, recycling", keyConcepts: ["E-Waste Rules 2022", "PRO"], currentAffairsCount: 4 },
    { id: 52, title: "Environment Protection Act 1986", moduleId: "4", priority: "High", staticFocus: "EPA umbrella act", keyConcepts: ["MoEFCC Powers", "EIA"], currentAffairsCount: 4 },
    { id: 53, title: "EIA Notification", moduleId: "4", priority: "High", staticFocus: "2006 notification, process", keyConcepts: ["Scoping", "Public Hearing"], currentAffairsCount: 5 },
    { id: 54, title: "NGT: Structure & Powers", moduleId: "4", priority: "High", staticFocus: "Environmental judiciary", keyConcepts: ["NGT Act 2010", "Appellate"], currentAffairsCount: 4 },
    { id: 55, title: "Forest Rights Act 2006", moduleId: "4", priority: "High", staticFocus: "Tribal rights, recognition", keyConcepts: ["Community Forest Rights", "PVTG"], currentAffairsCount: 4 }
] as any[];

const ENVIRONMENT_CHAPTERS = ENVIRONMENT_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 8,
    slots: 2
}));

const ENVIRONMENT_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 80,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11],
            saturday: ["Ecology Mock Test"],
            sunday: [1, 2, 3, 4]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 90,
        days: {
            monday: [16, 17, 18],
            tuesday: [19, 20],
            wednesday: [21, 22],
            thursday: [23, 24],
            friday: [25, 26],
            saturday: ["Biodiversity Mock"],
            sunday: [16, 17, 18]
        }
    },
    // More weeks
];

export const ENVIRONMENT_CONFIG: SubjectConfig = {
    id: "environment",
    title: "Environment & Ecology",
    subtitle: "Conservation, Climate Change, and Sustainable Development",
    totalChapters: 55,
    totalParts: 4,
    modules: ENVIRONMENT_MODULES,
    topics: ENVIRONMENT_TOPICS,
    chapters: ENVIRONMENT_CHAPTERS,
    schedules: ENVIRONMENT_SCHEDULE,
    colors: {
        primary: "emerald",
        heroGradient: "from-emerald-800 via-green-800 to-teal-900"
    },
    basePath: "/student/upsc/environment"
};
