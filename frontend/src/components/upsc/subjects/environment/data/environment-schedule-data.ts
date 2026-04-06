import { Leaf, Warehouse, CloudFog, Scale, Sprout, Footprints, GitBranch, Binary, Zap, Layers, RefreshCw, Waves, Droplets, Target, ShieldCheck, FileText, History, Compass, Globe, Anchor, Mountain } from "lucide-react";
import React from "react";

export interface EnvironmentTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Basics' | 'Chronology';
}

export const ENVIRONMENT_SYLLABUS: EnvironmentTopic[] = [
    { id: 'M00', title: "Thinking Framework", description: "Thinking like an ecologist, Systems approach.", subtopics: ["Ecologist Thinking", "Earth Systems", "Scale & Resolution", "Anthropocene"], days: 1, category: 'Basics' as const },
    { id: 'M01', title: "Ecology: Science of Systems", description: "Food webs, Energy flow, Pyramids.", subtopics: ["Energy Flow", "Pyramids", "Biogeochemical Cycles", "Succession"], days: 2, category: 'Basics' as const },
    { id: 'M02', title: "Abiotic & Adaptations", description: "Light, Temp, Water, Soil adaptations.", subtopics: ["Photoperiodism", "Metabolism", "Morphology", "Physiological Stress"], days: 1, category: 'Basics' as const },
    { id: 'M03', title: "Atmosphere & Climate", description: "Greenhouse Effect, Radiative Forcing, Cyclones.", subtopics: ["GHG Flux", "Albedo Feedback", "Köppen Zones", "Tropical Cyclones"], days: 2, category: 'Basics' as const },
    { id: 'M04', title: "Hydrological Systems", description: "Marine zonation, Coral Reefs, Wetlands.", subtopics: ["Marine Zonation", "Coral Reef Physiology", "Mangrove Adaptations", "Wetlands"], days: 2, category: 'Basics' as const },
    { id: 'M11', title: "Traditional Knowledge", description: "Stepwells, Johads, Sacred Groves.", subtopics: ["Water Harvesting", "Stepwells", "Sacred Groves", "Forest Rights"], days: 1, category: 'Basics' as const },
    { id: 'M12', title: "Oceanic Crisis", description: "Plastic patches, Microplastics, Blue Carbon.", subtopics: ["Plastic Patches", "Microplastic Pathways", "Resilience Models"], days: 1, category: 'Basics' as const },
    { id: 'M13', title: "Disaster Systems", description: "Flood defences, Infrastructure vulnerability.", subtopics: ["Interaction Disruption", "Vulnerability Intersection", "Heat-resistant Urban"], days: 1, category: 'Basics' as const },
    { id: 'M14', title: "Biodiversity Conservation", description: "In-situ/Ex-situ, Green/Red lists.", subtopics: ["Hotspots", "Wild Life Act 1972", "IBWL", "ESZ"], days: 2, category: 'Basics' as const },
    { id: 'M15', title: "Climate Change Policy", description: "Paris, COP, IPCC AR6, Carbon Credits.", subtopics: ["Paris Agreement", "IPCC Review", "Carbon Credits", "NAPCC India"], days: 2, category: 'Chronology' as const },
    { id: 'M16', title: "Sustainable Future", description: "SDGs, Circular Economy, LiFE.", subtopics: ["SDG Goals", "Circular Economy", "Inter-generational Equity", "Mission LiFE"], days: 1, category: 'Chronology' as const }
];

export interface EnvironmentScheduleDay {
    day: number;
    title: string;
    date: string;
    description: string;
    topics: string[];
    moduleId: string;
}

export const ENVIRONMENT_SCHEDULE: EnvironmentScheduleDay[] = [
    { day: 1, title: "Thinking Like an Ecologist", date: "Module 0", description: "Mental Operating System installation", topics: ["M00"], moduleId: "M00" },
    { day: 2, title: "Ecological Energy", date: "Module 1", description: "Thermodynamics & Energy Flux", topics: ["M01"], moduleId: "M01" },
    { day: 3, title: "Life Adaptations", date: "Module 2", description: "Survival in extreme environments", topics: ["M02"], moduleId: "M02" },
    { day: 4, title: "Climate Science", date: "Module 3", description: "GHG mechanisms & Feedbacks", topics: ["M03"], moduleId: "M03" },
    { day: 5, title: "Water Worlds", date: "Module 4", description: "Corals, Mangroves & Wetlands", topics: ["M04"], moduleId: "M04" },
    { day: 6, title: "Traditional Wisdom", date: "Module 11", description: "Stepwells, Groves & Community", topics: ["M11"], moduleId: "M11" },
    { day: 7, title: "The Plastic Ocean", date: "Module 12", description: "Garbage patches & Microplastics", topics: ["M12"], moduleId: "M12" },
    { day: 8, title: "Disaster Landscapes", date: "Module 13", description: "Vulnerability & Infrastructure", topics: ["M13"], moduleId: "M13" },
    { day: 9, title: "Conservation Mastery", date: "Module 14", description: "Hotspots, NP, WLS, Project Tiger", topics: ["M14"], moduleId: "M14" },
    { day: 10, title: "The Policy Shift", date: "Module 15", description: "Paris Agreement & Global COP", topics: ["M15"], moduleId: "M15" },
    { day: 11, title: "The Sustainable Path", date: "Module 16", description: "SDGs, Circular Economy & LiFE", topics: ["M16"], moduleId: "M16" },
];

