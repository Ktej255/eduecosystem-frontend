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

    // Module B3: Succession (11-15)
    { id: 11, title: "Defining Succession", moduleId: "B3", priority: "High" as const, staticFocus: "Predictable change in species", keyConcepts: ["Climax Community", "Sere"], currentAffairsCount: 1 },
    { id: 12, title: "Primary vs Secondary", moduleId: "B3", priority: "High" as const, staticFocus: "Starting point difference", keyConcepts: ["Pioneer Species", "Soil Presence"], currentAffairsCount: 2 },
    { id: 13, title: "Hydrosere & Lithosere", moduleId: "B3", priority: "Medium" as const, staticFocus: "Succession in water vs land", keyConcepts: ["Phytoplankton", "Lichens"], currentAffairsCount: 1 },
    { id: 14, title: "Pioneer & Climax Species", moduleId: "B3", priority: "High" as const, staticFocus: "First vs Last species", keyConcepts: ["Mosses", "Shade tolerant trees"], currentAffairsCount: 1 },
    { id: 15, title: "Disturbance & Successional Arrest", moduleId: "B3", priority: "Medium" as const, staticFocus: "Human impact on climax", keyConcepts: ["Fire", "Deforestation"], currentAffairsCount: 3 },

    // Module B4: Niche (16-20)
    { id: 16, title: "Ecological Niche", moduleId: "B4", priority: "High" as const, staticFocus: "Functional role in ecosystem", keyConcepts: ["Habitat Niche", "Trophic Niche"], currentAffairsCount: 1 },
    { id: 17, title: "Fundamental vs Realised", moduleId: "B4", priority: "High" as const, staticFocus: "Impact of competition", keyConcepts: ["Resource Partitioning"], currentAffairsCount: 2 },
    { id: 18, title: "Competitive Exclusion", moduleId: "B4", priority: "High" as const, staticFocus: "Gause's Principle", keyConcepts: ["Species Coexistence"], currentAffairsCount: 1 },
    { id: 19, title: "Carrying Capacity", moduleId: "B4", priority: "High" as const, staticFocus: "Limit of the environment", keyConcepts: ["K-selection", "r-selection"], currentAffairsCount: 2 },
    { id: 20, title: "Growth Curves (S & J)", moduleId: "B4", priority: "Medium" as const, staticFocus: "Population explosion vs stability", keyConcepts: ["Sigmoid Curve"], currentAffairsCount: 0 },

    // Module B5: Adaptations (21-25)
    { id: 21, title: "Xerophytic Adaptations", moduleId: "B5", priority: "High" as const, staticFocus: "Survival in deserts", keyConcepts: ["Succulents", "CAM plants"], currentAffairsCount: 2 },
    { id: 22, title: "Hydrophytic Adaptations", moduleId: "B5", priority: "High" as const, staticFocus: "Floating & Submerged plants", keyConcepts: ["Aerenchyma"], currentAffairsCount: 1 },
    { id: 23, title: "Physiological Adaptations", moduleId: "B5", priority: "High" as const, staticFocus: "Internal metabolic changes", keyConcepts: ["Antifreeze proteins"], currentAffairsCount: 1 },
    { id: 24, title: "Behavioural Adaptations", moduleId: "B5", priority: "Medium" as const, staticFocus: "Migration & Hibernation", keyConcepts: ["Arctic Tern"], currentAffairsCount: 2 },
    { id: 25, title: "Allen's Rule", moduleId: "B5", priority: "Medium" as const, staticFocus: "Body proportions in cold climates", keyConcepts: ["Surface area", "Volume"], currentAffairsCount: 0 },

    // Module B6: Energy Flow (26-30)
    { id: 26, title: "10% Energy Law", moduleId: "B6", priority: "High" as const, staticFocus: "Efficiency of trophic levels", keyConcepts: ["Thermodynamics"], currentAffairsCount: 0 },
    { id: 27, title: "Upright Energy Pyramids", moduleId: "B6", priority: "High" as const, staticFocus: "Why energy is never inverted", keyConcepts: ["Heat loss"], currentAffairsCount: 1 },
    { id: 28, title: "Inverted Biomass Pyramids", moduleId: "B6", priority: "High" as const, staticFocus: "Marine ecosystem anomalies", keyConcepts: ["Phytoplankton turnover"], currentAffairsCount: 1 },
    { id: 29, title: "Trophic Levels", moduleId: "B6", priority: "Medium" as const, staticFocus: "Producers to Top Carnivores", keyConcepts: ["Primary Consumers"], currentAffairsCount: 1 },
    { id: 30, title: "Biomagnification", moduleId: "B6", priority: "High" as const, staticFocus: "Accumulation of toxins", keyConcepts: ["DDT", "Mercury"], currentAffairsCount: 3 },

    // Module B7: Productivity (31-35)
    { id: 31, title: "GPP vs NPP", moduleId: "B7", priority: "High" as const, staticFocus: "Primary productivity metrics", keyConcepts: ["Respiration loss"], currentAffairsCount: 1 },
    { id: 32, title: "Global Productivity Ranking", moduleId: "B7", priority: "High" as const, staticFocus: "Rainforest vs Ocean", keyConcepts: ["Coral Reefs"], currentAffairsCount: 2 },
    { id: 33, title: "Secondary Productivity", moduleId: "B7", priority: "Medium" as const, staticFocus: "Consumer-level biomass", keyConcepts: ["Assimilation"], currentAffairsCount: 0 },
    { id: 34, title: "Net Ecosystem Productivity", moduleId: "B7", priority: "Medium" as const, staticFocus: "Carbon sequestration metric", keyConcepts: ["Carbon Sink"], currentAffairsCount: 2 },
    { id: 35, title: "Limiting Factors", moduleId: "B7", priority: "Low" as const, staticFocus: "Nutrient limitation (N vs P)", keyConcepts: ["Liebig's Law"], currentAffairsCount: 1 },

    // Module B8: Cycles (36-40)
    { id: 36, title: "Nitrogen Fixation", moduleId: "B8", priority: "High" as const, staticFocus: "Biological & Industrial", keyConcepts: ["Rhizobium", "Haber process"], currentAffairsCount: 3 },
    { id: 37, title: "Nitrification & Denitrification", moduleId: "B8", priority: "High" as const, staticFocus: "The bacteria involved", keyConcepts: ["Nitrosomonas", "Pseudomonas"], currentAffairsCount: 1 },
    { id: 38, title: "Carbon Cycle Dynamics", moduleId: "B8", priority: "High" as const, staticFocus: "Reservoirs & Fluxes", keyConcepts: ["Ocean Sink", "Deep Carbon"], currentAffairsCount: 4 },
    { id: 39, title: "Sedimentary Cycles (P & S)", moduleId: "B8", priority: "Medium" as const, staticFocus: "Slow release from rocks", keyConcepts: ["Phosphorus", "Sulphur"], currentAffairsCount: 2 },
    { id: 40, title: "Human Impact on Cycles", moduleId: "B8", priority: "High" as const, staticFocus: "Fertilizers and Climate", keyConcepts: ["CO2 spike", "Urea runoff"], currentAffairsCount: 3 },

    // Module B9: Ecosystems (41-45)
    { id: 41, title: "Tropical Evergreen Forests", moduleId: "B9", priority: "High" as const, staticFocus: "Western Ghats & NE", keyConcepts: ["Stratification", "Buttress roots"], currentAffairsCount: 2 },
    { id: 42, title: "Grassland Ecosystems", moduleId: "B9", priority: "High" as const, staticFocus: "Savanna vs Steppe", keyConcepts: ["Grazing pressure"], currentAffairsCount: 1 },
    { id: 43, title: "Desert Ecosystems", moduleId: "B9", priority: "Medium" as const, staticFocus: "Hot vs Cold Deserts", keyConcepts: ["Thar", "Ladakh"], currentAffairsCount: 2 },
    { id: 44, title: "Estuaries & Mangroves", moduleId: "B9", priority: "High" as const, staticFocus: "Tidal ecotones", keyConcepts: ["Sundarbans", "Pneumatophores"], currentAffairsCount: 4 },
    { id: 45, title: "Coral Reefs", moduleId: "B9", priority: "High" as const, staticFocus: "Fringing, Barrier, Atoll", keyConcepts: ["Bleaching", "Zooxanthellae"], currentAffairsCount: 5 },

    // Module B10: Wetlands (46-50)
    { id: 46, title: "Ramsar Convention", moduleId: "B10", priority: "High" as const, staticFocus: "Wise use of wetlands", keyConcepts: ["1971 Treaty"], currentAffairsCount: 5 },
    { id: 47, title: "Montreux Record", moduleId: "B10", priority: "High" as const, staticFocus: "Sites facing degradation", keyConcepts: ["Loktak Lake", "Keoladeo"], currentAffairsCount: 3 },
    { id: 48, title: "Wetlands of India", moduleId: "B10", priority: "High" as const, staticFocus: "Major sites and types", keyConcepts: ["Chilika", "Vembanad"], currentAffairsCount: 4 },
    { id: 49, title: "Wetland Functions", moduleId: "B10", priority: "Medium" as const, staticFocus: "Kidneys of nature", keyConcepts: ["Flood control", "Filtration"], currentAffairsCount: 1 },
    { id: 50, title: "Peatlands & Mangroves", moduleId: "B10", priority: "Medium" as const, staticFocus: "Blue Carbon potential", keyConcepts: ["Methane storage"], currentAffairsCount: 3 },

    // Module B11: Biodiversity (51-55)
    { id: 51, title: "Alpha, Beta, Gamma Diversity", moduleId: "B11", priority: "Medium" as const, staticFocus: "Measuring richness", keyConcepts: ["Species Richness"], currentAffairsCount: 0 },
    { id: 52, title: "Biodiversity Hotspots", moduleId: "B11", priority: "High" as const, staticFocus: "Norman Myers criteria", keyConcepts: ["Endemism"], currentAffairsCount: 2 },
    { id: 53, title: "IUCN Red List", moduleId: "B11", priority: "High" as const, staticFocus: "Conservation status categories", keyConcepts: ["Critically Endangered"], currentAffairsCount: 6 },
    { id: 54, title: "In-situ Conservation", moduleId: "B11", priority: "High" as const, staticFocus: "NP, WLS, Biosphere Reserves", keyConcepts: ["Core Area"], currentAffairsCount: 4 },
    { id: 55, title: "Ex-situ Conservation", moduleId: "B11", priority: "High" as const, staticFocus: "Zoo, Seed Bank, Botanical Garden", keyConcepts: ["Cryopreservation"], currentAffairsCount: 2 },

    // Module B12: GHGs (56-60)
    { id: 56, title: "The Greenhouse Effect", moduleId: "B12", priority: "High" as const, staticFocus: "Natural vs Anthropogenic", keyConcepts: ["Long-wave radiation"], currentAffairsCount: 1 },
    { id: 57, title: "Major GHGs (CO2, CH4, N2O)", moduleId: "B12", priority: "High" as const, staticFocus: "Sources and Sinks", keyConcepts: ["Global Warming Potential"], currentAffairsCount: 5 },
    { id: 58, title: "Ozone Depleting Substances", moduleId: "B12", priority: "High" as const, staticFocus: "CFCs and HFCs", keyConcepts: ["Montreal Protocol"], currentAffairsCount: 3 },
    { id: 59, title: "Climate Feedback Loops", moduleId: "B12", priority: "High" as const, staticFocus: "Ice-Albedo & Water Vapor", keyConcepts: ["Tipping Points"], currentAffairsCount: 2 },
    { id: 60, title: "Ocean Acidification", moduleId: "B12", priority: "High" as const, staticFocus: "The 'other' CO2 problem", keyConcepts: ["Carbonic Acid", "pH levels"], currentAffairsCount: 4 },

    // Module B13: Soil (61-65)
    { id: 61, title: "Soil Horizons (Protocols)", moduleId: "B13", priority: "Medium" as const, staticFocus: "O to R layers", keyConcepts: ["Topsoil", "Eluviation"], currentAffairsCount: 1 },
    { id: 62, title: "Major Soil Types in India", moduleId: "B13", priority: "High" as const, staticFocus: "Alluvial, Black, Red, Laterite", keyConcepts: ["Regur Soil"], currentAffairsCount: 2 },
    { id: 63, title: "Soil Pollution & Heavy Metals", moduleId: "B13", priority: "High" as const, staticFocus: "Arsenic & Fluoride contamination", keyConcepts: ["Groundwater"], currentAffairsCount: 3 },
    { id: 64, title: "Bioremediation Technologies", moduleId: "B13", priority: "High" as const, staticFocus: "Microbes and Fungi", keyConcepts: ["Oil Zapper"], currentAffairsCount: 2 },
    { id: 65, title: "Phytoremediation", moduleId: "B13", priority: "Medium" as const, staticFocus: "Plants as accumulators", keyConcepts: ["Hyper-accumulators"], currentAffairsCount: 1 },

    // Module B14: Pollution (66-70)
    { id: 66, title: "Air Pollutants (PM2.5, SOx)", moduleId: "B14", priority: "High" as const, staticFocus: "NAQI and Sources", keyConcepts: ["Acid Rain", "Smog"], currentAffairsCount: 5 },
    { id: 67, title: "BOD and DO Indicators", moduleId: "B14", priority: "High" as const, staticFocus: "Water quality metrics", keyConcepts: ["Eutrophication"], currentAffairsCount: 4 },
    { id: 68, title: "E-Waste & Plastic Pollution", moduleId: "B14", priority: "High" as const, staticFocus: "Rules 2016/2022", keyConcepts: ["Extended Producer Responsibility"], currentAffairsCount: 6 },
    { id: 69, title: "Marine Pollution", moduleId: "B14", priority: "High" as const, staticFocus: "Oil spills & Microplastics", keyConcepts: ["Dead Zones"], currentAffairsCount: 3 },
    { id: 70, title: "Noise & Radiation", moduleId: "B14", priority: "Low" as const, staticFocus: "Decibel limits and Fallout", keyConcepts: ["Alpha/Beta rays"], currentAffairsCount: 1 },

    // Module B15: Protected Areas (71-75)
    { id: 71, title: "National Parks of India", moduleId: "B15", priority: "High" as const, staticFocus: "Strict total protection", keyConcepts: ["Jim Corbett", "Kaziranga"], currentAffairsCount: 5 },
    { id: 72, title: "Biosphere Reserves (MAB)", moduleId: "B15", priority: "High" as const, staticFocus: "Zonal management", keyConcepts: ["Nilgiri", "Gulf of Mannar"], currentAffairsCount: 3 },
    { id: 73, title: "Project Tiger & Elephant", moduleId: "B15", priority: "High" as const, staticFocus: "CTH and Corridors", keyConcepts: ["NTCA", "Project Cheetah"], currentAffairsCount: 7 },
    { id: 74, title: "Biodiversity Act 2002", moduleId: "B15", priority: "High" as const, staticFocus: "Access Benefit Sharing", keyConcepts: ["National Biodiversity Authority"], currentAffairsCount: 2 },
    { id: 75, title: "Marine Protected Areas", moduleId: "B15", priority: "Medium" as const, staticFocus: "Coastal regulation zones", keyConcepts: ["CRZ Rules"], currentAffairsCount: 4 },

    // Module B16: Laws (76-80)
    { id: 76, title: "EPA 1986", moduleId: "B16", priority: "High" as const, staticFocus: "Umbrella legislation", keyConcepts: ["Central Govt powers"], currentAffairsCount: 2 },
    { id: 77, title: "WPA 1972", moduleId: "B16", priority: "High" as const, staticFocus: "Species scheduling and CITES", keyConcepts: ["Schedule I", "IV"], currentAffairsCount: 4 },
    { id: 78, title: "EIA Notification 2006", moduleId: "B16", priority: "High" as const, staticFocus: "Clearance stages", keyConcepts: ["Public Hearing"], currentAffairsCount: 3 },
    { id: 79, title: "Forest Rights Act 2006", moduleId: "B16", priority: "High" as const, staticFocus: "Tribal and community rights", keyConcepts: ["Gram Sabha"], currentAffairsCount: 4 },
    { id: 80, title: "Mission LiFE", moduleId: "B16", priority: "High" as const, staticFocus: "Lifestyle for Environment", keyConcepts: ["Circular Economy"], currentAffairsCount: 5 },

    // Module C1: Awakening (81-85)
    { id: 81, title: "Silent Spring Impact", moduleId: "C1", priority: "High" as const, staticFocus: "DDT and Pesticides", keyConcepts: ["Rachel Carson"], currentAffairsCount: 1 },
    { id: 82, title: "Stockholm 1972", moduleId: "C1", priority: "High" as const, staticFocus: "UNEP creation", keyConcepts: ["Right to Environment"], currentAffairsCount: 2 },
    { id: 83, title: "Limits to Growth", moduleId: "C1", priority: "Medium" as const, staticFocus: "Club of Rome studies", keyConcepts: ["Infinite Growth Failure"], currentAffairsCount: 1 },
    { id: 84, title: "Early Ozone Science", moduleId: "C1", priority: "Medium" as const, staticFocus: "Molina and Rowland", keyConcepts: ["CFC discovery"], currentAffairsCount: 1 },
    { id: 85, title: "Chipko & Silent Valley", moduleId: "C1", priority: "High" as const, staticFocus: "India's grassroots start", keyConcepts: ["Sunderlal Bahuguna"], currentAffairsCount: 2 },

    // Module C2: Architecture (86-90)
    { id: 86, title: "Montreal Protocol success", moduleId: "C2", priority: "High" as const, staticFocus: "ODS phase out", keyConcepts: ["Universal Treaty"], currentAffairsCount: 3 },
    { id: 87, title: "Brundtland Report", moduleId: "C2", priority: "High" as const, staticFocus: "Sustainable Development def", keyConcepts: ["Our Common Future"], currentAffairsCount: 2 },
    { id: 88, title: "IPCC 1988", moduleId: "C2", priority: "High" as const, staticFocus: "Science Assessment authority", keyConcepts: ["WMO & UNEP"], currentAffairsCount: 4 },
    { id: 89, title: "Basel Convention", moduleId: "C2", priority: "Medium" as const, staticFocus: "Transboundary waste", keyConcepts: ["Toxic Trade"], currentAffairsCount: 2 },
    { id: 90, title: "Vienna Convention", moduleId: "C2", priority: "Medium" as const, staticFocus: "Framework for Ozone", keyConcepts: ["Precautionary Principle"], currentAffairsCount: 1 },

    // Module C3: Rio (91-95)
    { id: 91, title: "The Three Rio Conventions", moduleId: "C3", priority: "High" as const, staticFocus: "UNFCCC, CBD, UNCCD", keyConcepts: ["Earth Summit 1992"], currentAffairsCount: 6 },
    { id: 92, title: "Agenda 21", moduleId: "C3", priority: "High" as const, staticFocus: "Global blueprint for SD", keyConcepts: ["Local Agenda 21"], currentAffairsCount: 2 },
    { id: 93, title: "The CBDR Principle", moduleId: "C3", priority: "High" as const, staticFocus: "Equity in climate burden", keyConcepts: ["Common Responsibility"], currentAffairsCount: 4 },
    { id: 94, title: "UNFCCC Signing", moduleId: "C3", priority: "High" as const, staticFocus: "Stabilizing GHGs", keyConcepts: ["Annex Countries"], currentAffairsCount: 2 },
    { id: 95, title: "CBD & Biopiracy", moduleId: "C3", priority: "High" as const, staticFocus: "Neem and Turmeric cases", keyConcepts: ["Traditional Knowledge"], currentAffairsCount: 3 },

    // Module C4: Kyoto (96-100)
    { id: 96, title: "Kyoto Protocol Binding", moduleId: "C4", priority: "High" as const, staticFocus: "Emission targets", keyConcepts: ["Annex I", "Commitment Period"], currentAffairsCount: 3 },
    { id: 97, title: "CDM & Carbon Markets", moduleId: "C4", priority: "High" as const, staticFocus: "Flexible mechanisms", keyConcepts: ["CERs", "Carbon Credits"], currentAffairsCount: 4 },
    { id: 98, title: "Copenhagen Accord Failure", moduleId: "C4", priority: "High" as const, staticFocus: "Mandatory vs Voluntary", keyConcepts: ["BASIC bloc"], currentAffairsCount: 3 },
    { id: 99, title: "IPCC AR4 (2007)", moduleId: "C4", priority: "High" as const, staticFocus: "Confirming warming is real", keyConcepts: ["Anthropogenic forcing"], currentAffairsCount: 2 },
    { id: 100, title: "The Green Climate Fund", moduleId: "C4", priority: "High" as const, staticFocus: "$100 Billion promise", keyConcepts: ["GCF Inception"], currentAffairsCount: 5 },

    // Module C5: Paris (101-105)
    { id: 101, title: "Paris Agreement 2015", moduleId: "C5", priority: "High" as const, staticFocus: "The 1.5°C Goal", keyConcepts: ["NDCs", "Ratchet Mechanism"], currentAffairsCount: 7 },
    { id: 102, title: "SDGs Adoption", moduleId: "C5", priority: "High" as const, staticFocus: "The 17 Goals for 2030", keyConcepts: ["Goal 13: Climate Action"], currentAffairsCount: 4 },
    { id: 103, title: "Int. Solar Alliance (ISA)", moduleId: "C5", priority: "High" as const, staticFocus: "PM Modi's leadership", keyConcepts: ["One Sun One World"], currentAffairsCount: 5 },
    { id: 104, title: "Nagoya Protocol on ABS", moduleId: "C5", priority: "High" as const, staticFocus: "Fair use of genetics", keyConcepts: ["Benefit Sharing"], currentAffairsCount: 3 },
    { id: 105, title: "The Kigali Amendment", moduleId: "C5", priority: "High" as const, staticFocus: "Phase out of HFCs", keyConcepts: ["GHG vs ODS"], currentAffairsCount: 4 },

    // Module C6: Crisis (106-110)
    { id: 106, title: "Glasgow Climate Pact", moduleId: "C6", priority: "High" as const, staticFocus: "Coal phasedown", keyConcepts: ["Panchamrit"], currentAffairsCount: 6 },
    { id: 107, title: "Loss & Damage Fund", moduleId: "C6", priority: "High" as const, staticFocus: "COP27 breakthrough", keyConcepts: ["Climate Justice"], currentAffairsCount: 5 },
    { id: 108, title: "Dubai GST Consensus", moduleId: "C6", priority: "High" as const, staticFocus: "Transitioning away from Fossil", keyConcepts: ["Global Stocktake"], currentAffairsCount: 8 },
    { id: 109, title: "Baku COP29 Finance", moduleId: "C6", priority: "High" as const, staticFocus: "New $300bn NCQG Goal", keyConcepts: ["Climate Finance"], currentAffairsCount: 6 },
    { id: 110, title: "Belém 30x30 Target", moduleId: "C6", priority: "High" as const, staticFocus: "Biodiversity Framework", keyConcepts: ["30x30 Roadmap"], currentAffairsCount: 7 },
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
            thursday: [8, 9, 11],
            friday: [12, 13, 16],
            saturday: ["Foundation Mock & B-Review"],
            sunday: [1, 6, 11, 16, 21]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 100,
        days: {
            monday: [17, 18, 22],
            tuesday: [23, 26, 27],
            wednesday: [28, 31, 32],
            thursday: [36, 37, 41],
            friday: [42, 44, 45],
            saturday: ["Deep Ecosystems Review & Mock"],
            sunday: [26, 31, 36, 41]
        }
    },
    {
        week: 3,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [46, 47, 52],
            tuesday: [53, 54, 57],
            wednesday: [58, 62, 63, 66],
            thursday: [67, 68, 71, 73],
            friday: [76, 77, 79, 80],
            saturday: ["Pollution & Laws Final Drill"],
            sunday: [46, 56, 66, 76]
        }
    },
    {
        week: 4,
        totalSlots: 24,
        totalPages: 150,
        days: {
            monday: [81, 82, 83],
            tuesday: [86, 87, 88],
            wednesday: [91, 92, 93],
            thursday: [96, 97, 101],
            friday: [103, 106, 107, 108],
            saturday: ["Chronology & Story Threads Finals"],
            sunday: [81, 91, 101, 108]
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
