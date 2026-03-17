import { SubjectConfig, WeeklyScheduleData } from "../../../common/framework/SubjectPlanner";
import { Leaf, Warehouse, CloudFog, Scale, Sprout, Footprints, GitBranch, Binary, Zap, Layers, RefreshCw, Waves, Droplets, Target, ShieldCheck, FileText, History, Compass, Globe, Anchor, Mountain } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

export const ENVIRONMENT_MODULES = [
    // PART 1: BASICS OF ENVIRONMENT
    { id: "B1", title: "Ecology & Organisation", description: "Organism to Biosphere, Biotic/Abiotic components.", icon: React.createElement(Leaf), color: "green", topicRange: [1, 5] as [number, number] },
    { id: "B2", title: "Biotic Interactions", description: "Mutualism, Commensalism, Parasitism, etc.", icon: React.createElement(RefreshCw), color: "emerald", topicRange: [6, 10] as [number, number] },
    { id: "B3", title: "Ecological Succession", description: "Primary vs Secondary, Pioneer species to Climax.", icon: React.createElement(GitBranch), color: "teal", topicRange: [11, 15] as [number, number] },
    { id: "B4", title: "Ecological Niche & Population", description: "Functional roles and population growth curves.", icon: React.createElement(Target), color: "cyan", topicRange: [16, 20] as [number, number] },
    { id: "B5", title: "Adaptations", description: "Morphological, Physiological, and Behavioural.", icon: React.createElement(Zap), color: "yellow", topicRange: [21, 25] as [number, number] },
    { id: "B6", title: "Food Chain & Energy Flow", description: "Trophic levels, 10% Law, and Pyramids.", icon: React.createElement(Layers), color: "orange", topicRange: [26, 30] as [number, number] },
    { id: "B7", title: "Productivity", description: "GPP vs NPP and Ecosystem rankings.", icon: React.createElement(Sprout), color: "lime", topicRange: [31, 35] as [number, number] },
    { id: "B8", title: "Biogeochemical Cycles", description: "Carbon, Nitrogen, Phosphorus, and Sulphur cycles.", icon: React.createElement(RefreshCw), color: "blue", topicRange: [36, 40] as [number, number] },
    { id: "B9", title: "Ecosystems", description: "Forest, Grassland, Desert, Aquatic ecosystems.", icon: React.createElement(Mountain), color: "emerald", topicRange: [41, 45] as [number, number] },
    { id: "B10", title: "Wetlands", description: "Ramsar Convention, Montreux Record, and Functions.", icon: React.createElement(Waves), color: "blue", topicRange: [46, 50] as [number, number] },
    { id: "B11", title: "Biodiversity & Species", description: "In-situ/Ex-situ, Hotspots, and Endangered Species.", icon: React.createElement(ShieldCheck), color: "green", topicRange: [51, 55] as [number, number] },
    { id: "B12", title: "Greenhouse Effect & GHGs", description: "Science of Warming, GHGs and Feedback loops.", icon: React.createElement(CloudFog), color: "red", topicRange: [56, 60] as [number, number] },
    { id: "B13", title: "Soil & Bioremediation", description: "Soil profiles, Types, and Cleanup technology.", icon: React.createElement(Footprints), color: "amber", topicRange: [61, 65] as [number, number] },
    { id: "B14", title: "Pollution", description: "Photochemical smog, BOD/DO, and Diseases.", icon: React.createElement(Droplets), color: "red", topicRange: [66, 70] as [number, number] },
    { id: "B15", title: "Protected Areas & Wildlife", description: "NP, WLS, Biosphere Reserves, and ESZ.", icon: React.createElement(Anchor), color: "teal", topicRange: [71, 75] as [number, number] },
    { id: "B16", title: "Sustainable Dev + EIA + Laws", description: "EIA process, EPA 1986, and WPA 1972.", icon: React.createElement(Scale), color: "slate", topicRange: [76, 80] as [number, number] },

    // PART 2: THE GRAND STORY (CHRONOLOGY)
    { id: "C1", title: "The Awakening (1960s–1972)", description: "Silent Spring to Stockholm Conference.", icon: React.createElement(History), color: "stone", topicRange: [81, 85] as [number, number] },
    { id: "C2", title: "Building the Framework (1972–1992)", description: "CITES, Montreal, and Brundtland Report.", icon: React.createElement(Compass), color: "gray", topicRange: [86, 90] as [number, number] },
    { id: "C3", title: "Rio & The Promises (1992–1997)", description: "Earth Summit, Rio to Kyoto Protocol.", icon: React.createElement(Globe), color: "orange", topicRange: [91, 95] as [number, number] },
    { id: "C4", title: "Struggles & Setbacks (1998–2009)", description: "Marrakesh to Copenhagen failure.", icon: React.createElement(Waves), color: "red", topicRange: [96, 100] as [number, number] },
    { id: "C5", title: "New Pathways (2010–2015)", description: "Paris Agreement to SDGs adoption.", icon: React.createElement(GitBranch), color: "green", topicRange: [101, 105] as [number, number] },
    { id: "C6", title: "Implementation & Crisis (2016–2026)", description: "Glasgow, Dubai, to COP30 Belém.", icon: React.createElement(Zap), color: "rose", topicRange: [106, 110] as [number, number] }
];

export const ENVIRONMENT_TOPICS = [
    // Module B1: Ecology (1-5)
    { id: 1, title: "Ecology: Basic Concepts", moduleId: "B1", priority: "High" as const, staticFocus: "Levels of organisation, Organism to Biosphere", keyConcepts: ["Organism", "Biosphere"], currentAffairsCount: 2 },
    { id: 2, title: "Levels of Organisation", moduleId: "B1", priority: "High" as const, staticFocus: "Population, Community, Ecosystem, Biome", keyConcepts: ["Population", "Community"], currentAffairsCount: 2 },
    { id: 3, title: "Biotic & Abiotic Components", moduleId: "B1", priority: "High" as const, staticFocus: "Factors affecting ecosystems", keyConcepts: ["Temperature", "Water", "Light"], currentAffairsCount: 1 },
    { id: 4, title: "Ecological Adaptations", moduleId: "B1", priority: "Medium" as const, staticFocus: "Survival strategies of organisms", keyConcepts: ["Morphological", "Behavioral"], currentAffairsCount: 2 },
    { id: 5, title: "Ecosystem Functions", moduleId: "B1", priority: "Medium" as const, staticFocus: "Interaction and flow in systems", keyConcepts: ["Energy Flow", "Cycling"], currentAffairsCount: 1 },

    // Module B2: Interactions (6-10)
    { id: 6, title: "Mutualism & Commensalism", moduleId: "B2", priority: "High" as const, staticFocus: "Symbiotic associations, Lichens", keyConcepts: ["Symbiosis", "Lichens"], currentAffairsCount: 3 },
    { id: 7, title: "Parasitism & Predation", moduleId: "B2", priority: "High" as const, staticFocus: "Negative interactions", keyConcepts: ["Host", "Parasite"], currentAffairsCount: 2 },
    { id: 8, title: "Competition", moduleId: "B2", priority: "High" as const, staticFocus: "Gause's Principle", keyConcepts: ["Niche", "Resources"], currentAffairsCount: 1 },
    { id: 9, title: "Amensalism", moduleId: "B2", priority: "Medium" as const, staticFocus: "One species inhibited, other unaffected", keyConcepts: ["Antibiosis"], currentAffairsCount: 1 },
    { id: 10, title: "Protocooperation", moduleId: "B2", priority: "Low" as const, staticFocus: "Non-obligatory mutualism", keyConcepts: ["Bird", "Crocodile"], currentAffairsCount: 0 },
];

export interface StoryEvent {
    id: string;
    year: string;
    title: string;
    description: string;
    moduleId: string;
    thread: 'Finance' | 'Biodiversity' | 'Ozone' | 'Pollution' | 'Governance';
    details?: string;
}

export const ENVIRONMENT_STORY_EVENTS: StoryEvent[] = [
    // Era 1: The Awakening (C1)
    { id: "S1", year: "1962", title: "Silent Spring Published", description: "Rachel Carson exposes DDT dangers.", moduleId: "C1", thread: "Pollution" },
    { id: "S2", year: "1966", title: "Ernst Haeckel's Ecology", description: "First formal definition of Ecology.", moduleId: "C1", thread: "Governance" },
    { id: "S3", year: "1972", title: "Stockholm Conference", description: "UNEP creation & Right to Environment.", moduleId: "C1", thread: "Governance" },

    // Era 2: Building Framework (C2)
    { id: "S4", year: "1973", title: "CITES Signed", description: "Regulating international wildlife trade.", moduleId: "C2", thread: "Biodiversity" },
    { id: "S5", year: "1985", title: "Vienna Convention", description: "First global move against Ozone depletion.", moduleId: "C2", thread: "Ozone" },
    { id: "S6", year: "1987", title: "Montreal Protocol", description: "Landmark agreement to ban CFCs.", moduleId: "C2", thread: "Ozone" },
    { id: "S7", year: "1987", title: "Brundtland Report", description: "Defining 'Sustainable Development'.", moduleId: "C2", thread: "Governance" },

    // Era 3: Rio & Promises (C3)
    { id: "S8", year: "1992", title: "Rio Earth Summit", description: "UNFCCC, CBD, & Agenda 21 established.", moduleId: "C3", thread: "Governance" },
    { id: "S9", year: "1997", title: "Kyoto Protocol", description: "First legally binding carbon targets.", moduleId: "C3", thread: "Finance" },

    // Era 4: Struggles (C4)
    { id: "S10", year: "2002", title: "Earth Summit (Johannesburg)", description: "Focus on poverty and environment link.", moduleId: "C4", thread: "Governance" },
    { id: "S11", year: "2009", title: "Copenhagen Accord", description: "The failure of mandatory targets.", moduleId: "C4", thread: "Finance" },

    // Era 5: New Pathways (C5)
    { id: "S12", year: "2010", title: "Nagoya Protocol", description: "Access and Benefit Sharing of genetics.", moduleId: "C5", thread: "Biodiversity" },
    { id: "S13", year: "2015", title: "Paris Agreement", description: "The 1.5°C global goal and NDCs.", moduleId: "C5", thread: "Governance" },
    { id: "S14", year: "2015", title: "SDGs Adopted", description: "17 goals for the 2030 Agenda.", moduleId: "C5", thread: "Governance" },

    // Era 6: Implementation (C6)
    { id: "S15", year: "2021", title: "Glasgow Climate Pact", description: "Phase down of coal explicitly mentioned.", moduleId: "C6", thread: "Finance" },
    { id: "S16", year: "2023", title: "COP28 Dubai", description: "Conclusion of the first Global Stocktake.", moduleId: "C6", thread: "Governance" },
    { id: "S17", year: "2024", title: "COP29 Baku", description: "Focus on the New Collective Finance Goal.", moduleId: "C6", thread: "Finance" },
    { id: "S18", year: "2025", title: "COP30 Belém", description: "Critical target for 2030 biodiversity goals.", moduleId: "C6", thread: "Biodiversity" }
];

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
            monday: [1, 2],
            tuesday: [3, 4],
            wednesday: [6, 7],
            thursday: [8, 9],
            friday: [11, 12],
            saturday: ["Foundation Mock"],
            sunday: [1, 2, 6, 11]
        }
    }
];

export const ENVIRONMENT_CONFIG: SubjectConfig = {
    id: "environment",
    title: "Environment & Ecology",
    subtitle: "The Grand Story & Foundation",
    totalChapters: 110,
    totalParts: 22,
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
