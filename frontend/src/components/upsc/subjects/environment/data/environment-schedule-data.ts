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
    // PART 1: BASICS
    { id: 'B1', title: "Ecology & Organisation", description: "Organism to Biosphere, Biotic/Abiotic components.", subtopics: ["Levels of Organisation", "Biotic Components", "Abiotic Components", "Ecological Adaptations"], days: 2, category: 'Basics' as const },
    { id: 'B2', title: "Biotic Interactions", description: "+/− matrix showing all 6 types with examples.", subtopics: ["Mutualism", "Commensalism", "Parasitism", "Predation", "Amensalism"], days: 1, category: 'Basics' as const },
    { id: 'B3', title: "Ecological Succession", description: "Primary vs Secondary, Pioneer species to Climax.", subtopics: ["Primary Succession", "Secondary Succession", "Hydrosere", "Lithosere"], days: 1, category: 'Basics' as const },
    { id: 'B4', title: "Ecological Niche & Population", description: "Functional roles and population growth curves.", subtopics: ["Fundamental vs Realised Niche", "Competitive Exclusion", "Carrying Capacity", "Growth Curves"], days: 2, category: 'Basics' as const },
    { id: 'B5', title: "Adaptations", description: "Morphological, Physiological, and Behavioural.", subtopics: ["Xerophytic", "Hydrophytic", "Cryophytic", "Conformers vs Regulators"], days: 2, category: 'Basics' as const },
    { id: 'B6', title: "Food Chain & Energy Flow", description: "Trophic levels, 10% Law, and Pyramids.", subtopics: ["10% Energy Law", "Ecological Pyramids", "Trophic Levels", "Biomagnification"], days: 2, category: 'Basics' as const },
    { id: 'B7', title: "Productivity", description: "GPP vs NPP and Ecosystem rankings.", subtopics: ["GPP vs NPP", "Productivity Rankings", "Energy Transfer Efficiency"], days: 1, category: 'Basics' as const },
    { id: 'B8', title: "Biogeochemical Cycles", description: "Carbon, Nitrogen, Phosphorus, and Sulphur cycles.", subtopics: ["Nitrogen Cycle", "Carbon Cycle", "Phosphorus Cycle", "Sulphur Cycle"], days: 2, category: 'Basics' as const },
    { id: 'B9', title: "Ecosystems", description: "Forest, Grassland, Desert, Aquatic ecosystems.", subtopics: ["Forest Ecosystem", "Grassland Ecosystem", "Desert Ecosystem", "Marine Ecosystem"], days: 2, category: 'Basics' as const },
    { id: 'B10', title: "Wetlands", description: "Ramsar Convention, Montreux Record, and Functions.", subtopics: ["Ramsar Criteria", "Montreux Record", "Wetland Functions", "India's sites"], days: 2, category: 'Basics' as const },
    { id: 'B11', title: "Biodiversity & Species", description: "In-situ/Ex-situ, Hotspots, and Endangered Species.", subtopics: ["Biodiversity Hotspots", "In-situ vs Ex-situ", "IUCN Red List", "Schedule I Animals"], days: 3, category: 'Basics' as const },
    { id: 'B12', title: "Greenhouse Effect & GHGs", description: "Science of Warming, GHGs and Feedback loops.", subtopics: ["Greenhouse Gases", "GWP Values", "Feedback Loops", "Global Warming"], days: 2, category: 'Basics' as const },
    { id: "B13", title: "Soil & Bioremediation", description: "Soil profiles, Types, and Cleanup technology.", subtopics: ["Soil Horizons", "Bioremediation", "Phytoremediation", "Soil Types"], days: 2, category: 'Basics' as const },
    { id: 'B14', title: "Pollution", description: "Photochemical smog, BOD/DO, and Diseases.", subtopics: ["Air Pollution (Smog)", "Water Pollution (BOD)", "Pollutant-Disease Links", "Microplastics"], days: 3, category: 'Basics' as const },
    { id: 'B15', title: "Protected Areas & Wildlife", description: "NP, WLS, Biosphere Reserves, and ESZ.", subtopics: ["National Parks", "Wildlife Sanctuaries", "Biosphere Reserves", "Eco-Sensitive Zones"], days: 2, category: 'Basics' as const },
    { id: 'B16', title: "Sustainable Dev + EIA + Laws", description: "EIA process, EPA 1986, and WPA 1972.", subtopics: ["EIA Stages", "EPA 1986", "WPA 1972", "Forest Rights Act 2006"], days: 2, category: 'Basics' as const },

    // PART 2: THE GRAND STORY
    { id: 'C1', title: "The Awakening (1962–1972)", description: "Silent Spring to Stockholm Conference.", subtopics: ["Rachel Carson's Silent Spring", "UNSECO Biosphere", "Club of Rome", "Stockholm 1972"], days: 2, category: 'Chronology' as const },
    { id: 'C2', title: "Building the Architecture (1972–1991)", description: "CITES, Montreal, and Brundtland Report.", subtopics: ["CITES 1973", "Vienna Convention", "Brundtland Report", "IPCC 1988"], days: 2, category: 'Chronology' as const },
    { id: 'C3', title: "The Rio Moment (1992)", description: "Earth Summit, Rio to Agenda 21.", subtopics: ["Rio Earth Summit", "Agenda 21", "UNFCCC", "CBD", "UNCCD"], days: 2, category: 'Chronology' as const },
    { id: 'C4', title: "Kyoto & Setbacks (1997–2009)", description: "Kyoto Protocol and Copenhagen Summit.", subtopics: ["Kyoto Protocol", "CDM Markets", "Copenhagen Accord"], days: 2, category: 'Chronology' as const },
    { id: 'C5', title: "The Paris Shift (2010–2015)", description: "Paris Agreement and Solar Alliance.", subtopics: ["Nagoya Protocol", "Paris Agreement 2015", "SDGs", "ISA"], days: 2, category: 'Chronology' as const },
    { id: 'C6', title: "The Crisis Era (2016–2026)", description: "Glasgow, Dubai, to COP30 Belém.", subtopics: ["Glasgow COP26", "Kunming-Montreal GBF", "Dubai COP28", "COP29 Baku"], days: 2, category: 'Chronology' as const }
]; // Small cleanup

export interface EnvironmentScheduleDay {
    day: number;
    title: string;
    date: string;
    description: string;
    topics: string[];
    moduleId: string;
}

export const ENVIRONMENT_SCHEDULE: EnvironmentScheduleDay[] = [
    { day: 1, title: "Ecology Basics", date: "Week 1 - Mon", description: "Organism to Biosphere, components", topics: ["B1"], moduleId: "B1" },
    { day: 2, title: "Interactions", date: "Week 1 - Tue", description: "Mutualism, Commensalism, etc.", topics: ["B2"], moduleId: "B2" },
    { day: 3, title: "Succession", date: "Week 1 - Wed", description: "Primary to Climax", topics: ["B3"], moduleId: "B3" },
    { day: 4, title: "Niche & Population", date: "Week 1 - Thu", description: "Carrying Capacity, Growth curves", topics: ["B4"], moduleId: "B4" },
    { day: 5, title: "Adaptations", date: "Week 1 - Fri", description: "Survival mechanisms", topics: ["B5"], moduleId: "B5" },
    { day: 6, title: "Practice", date: "Week 1 - Sat", description: "Ecology Mock Test", topics: ["B1", "B2", "B3", "B4", "B5"], moduleId: "practice" },
    // ... further schedule rows would be added for the full 15-week plan
];
