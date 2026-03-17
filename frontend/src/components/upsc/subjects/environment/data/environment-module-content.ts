export interface ModuleContent {
  id: string;
  title: string;
  coreConcepts: {
    title: string;
    content: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  pyqs: {
    question: string;
    year: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
  predictions: string[];
  flowchart?: string;
}

export const ENVIRONMENT_MODULE_CONTENT: Record<string, ModuleContent> = {
  "B1": {
    id: "B1",
    title: "Ecology & Organisation",
    coreConcepts: [
      {
        title: "Levels of Organisation",
        content: "Ecology (coined by Ernst Haeckel in 1866) is the study of organisms and their environment. The levels of organization move from Individual → Population → Community → Ecosystem → Biome → Biosphere.",
        table: {
          headers: ["Level", "Description"],
          rows: [
            ["Individual", "Basic unit of ecology; single organism."],
            ["Population", "Group of individuals of the same species in a given area."],
            ["Community", "Assemblage of different populations interacting together."],
            ["Ecosystem", "Community plus abiotic environment (energy & nutrient flow)."],
            ["Biome", "Large regional unit characterized by climate and vegetation."],
            ["Biosphere", "Global sum of all ecosystems; the zone of life on Earth."]
          ]
        }
      },
      {
        title: "Ecosystem Components",
        content: "Ecosystems consist of Biotic (living) and Abiotic (non-living) components. Interaction between these creates a stable, self-regulating system.",
      }
    ],
    pyqs: [
      {
        question: "Which one of the following is the correct sequence of ecosystems in the order of decreasing productivity?",
        year: "2013",
        options: ["Oceans, lakes, grasslands, mangroves", "Mangroves, oceans, grasslands, lakes", "Mangroves, grasslands, lakes, oceans", "Oceans, mangroves, lakes, grasslands"],
        answer: "C",
        explanation: "Productivity order: Mangroves > Grasslands > Lakes > Oceans."
      }
    ],
    predictions: [
      "The shift of 'Treelines' in the Himalayas as an indicator of climate-induced biome migration.",
      "The role of 'Ecological Thresholds' in maintaining ecosystem resilience against invasive species."
    ],
    flowchart: "Individual -> Population -> Community -> Ecosystem -> Biome -> Biosphere"
  },
  "B2": {
    id: "B2",
    title: "Biotic Interactions",
    coreConcepts: [
      {
        title: "Types of Interactions",
        content: "Organisms interact in various ways, classified as Positive (Symbiotic), Negative (Antagonistic), or Neutral.",
        table: {
          headers: ["Interaction", "Species A", "Species B", "Example"],
          rows: [
            ["Mutualism", "+", "+", "Lichens (Fungi + Algae)"],
            ["Commensalism", "+", "0", "Cattle Egret and Cattle"],
            ["Parasitism", "+", "-", "Ticks on Dogs, Cuscuta"],
            ["Predation", "+", "-", "Lion and Deer"],
            ["Competition", "-", "-", "Two species for same food"],
            ["Amensalism", "0", "-", "Penicillium and Bacteria"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "Lichens, which are capable of initiating ecological succession even on bare rock, are actually a symbiotic association of:",
        year: "2014",
        options: ["Algae and Fungi", "Algae and Mosses", "Bacteria and Fungi", "Fungi and Mosses"],
        answer: "A",
        explanation: "Lichens are a mutualistic association between Algae (provides food) and Fungi (provides shelter/minerals)."
      }
    ],
    predictions: [
      "The impact of 'Hyper-parasitism' on pest control in tropical agriculture.",
      "Mutualistic breakdown in coral reefs due to rising ocean acidity."
    ]
  },
  "B3": {
    id: "B3",
    title: "Ecological Succession",
    coreConcepts: [
      {
        title: "Defining Succession",
        content: "The gradual and predictable change in the species composition of a given area. It leads to a stable Climax Community.",
      },
      {
        title: "Primary vs Secondary",
        content: "Primary starts on bare rock/sand (no soil). Secondary starts where an ecosystem was destroyed (soil present), e.g., after fire.",
        table: {
          headers: ["Feature", "Primary", "Secondary"],
          rows: [
            ["Start Point", "Bare rock / New lava", "Abandoned farm / Burnt forest"],
            ["Soil", "Absent initially", "Present from start"],
            ["Speed", "Very slow", "Relatively fast"],
            ["Pioneer Species", "Lichens / Mosses", "Grasses / Weeds"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "In the context of ecosystem productivity, which of the following statements is/are correct? 1. Primary succession is faster than secondary. 2. Lichens are pioneers of primary succession on rocks.",
        year: "2021",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        answer: "B",
        explanation: "Secondary succession is faster because soil is already present."
      }
    ],
    predictions: [
      "Assisted Natural Regeneration (ANR) as a tool for secondary succession in degraded mines.",
      "The role of 'Legacy Effects' in determining climax species after catastrophic floods."
    ]
  },
  "B4": {
    id: "B4",
    title: "Ecological Niche & Population",
    coreConcepts: [
      {
        title: "Ecological Niche",
        content: "The functional role and position of a species in its ecosystem. Includes its habitat, activity period, and resources used.",
      },
      {
        title: "Fundamental vs Realised Niche",
        content: "Fundamental Niche is the full potential range. Realised Niche is the actual space occupied due to competition/predation.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following terms describes not only the physical space occupied by an organism, but also its functional role in the community?",
        year: "2013",
        options: ["Ecotone", "Ecological niche", "Habitat", "Home range"],
        answer: "B",
        explanation: "Niche = Habitat + Functional Role."
      }
    ],
    predictions: [
      "Niche partitioning in urban bird populations as a response to light pollution.",
      "Carrying capacity (K) shifts in Himalayan ecosystems due to melting permafrost."
    ]
  },
  "B5": {
    id: "B5",
    title: "Adaptations",
    coreConcepts: [
      {
        title: "Survival Strategies",
        content: "Organisms adapt morphologically, physiologically, and behaviorally to survive extreme conditions.",
        table: {
          headers: ["Type", "Example"],
          rows: [
            ["Morphological", "Thick cuticle, Sunken stomata in Xero-phytes"],
            ["Physiological", "Antifreeze proteins in polar fish"],
            ["Behavioural", "Migration in birds / Hibernation in bears"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "To survive in a desert, plants have which of the following adaptations? 1. Thick cuticle on leaves. 2. Stomata closed during day. 3. Leaves reduced to spines.",
        year: "2018",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        answer: "D",
        explanation: "All are xerophytic adaptations to conserve water."
      }
    ],
    predictions: [
      "Rapid evolution of thermal tolerance in coral-feeding fish.",
      "Phenological mismatch between flowers and pollinators due to early spring."
    ]
  },
  "B6": {
    id: "B6",
    title: "Food Chain & Energy Flow",
    coreConcepts: [
      {
        title: "Energy Flow Principles",
        content: "Energy flow is unidirectional. Lindeman's 10% Law: Only 10% energy moves to the next trophic level.",
      },
      {
        title: "Ecological Pyramids",
        content: "Pyramids represent energy, biomass, or numbers. Note: Energy pyramids are ALWAYS upright.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following is always upright and never inverted?",
        year: "2015",
        options: ["Pyramid of Numbers", "Pyramid of Biomass", "Pyramid of Energy", "None"],
        answer: "C",
        explanation: "Energy is lost as heat at each level, so the energy pyramid is always upright."
      }
    ],
    predictions: [
      "Impact of Trophic Cascades on carbon sequestration in Indian grasslands.",
      "Biomagnification of endocrine disruptors in riverine food webs."
    ]
  },
  "B7": {
    id: "B7",
    title: "Productivity",
    coreConcepts: [
      {
        title: "Primary Productivity",
        content: "Rate of biomass production. GPP (Gross) is total photosynthesis. NPP (Net) is GPP minus plant respiration.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following ecosystems has the highest net primary productivity per unit area?",
        year: "2013",
        options: ["Tropical Rain Forest", "Grasslands", "Deserts", "Oceans"],
        answer: "A",
        explanation: "Rainforests have the highest NPP due to abundant light and water."
      }
    ],
    predictions: [
      "Net Ecosystem Productivity (NEP) as a metric for Blue Carbon accounting.",
      "Decline in phytoplankton productivity due to ocean stratification."
    ]
  },
  "B8": {
    id: "B8",
    title: "Biogeochemical Cycles",
    coreConcepts: [
      {
        title: "Nitrogen Cycle",
        content: "Processes include Nitrogen Fixation, Nitrification, Assimilation, Ammonification, and Denitrification.",
        table: {
          headers: ["Process", "Key Bacteria"],
          rows: [
            ["Fixation", "Rhizobium, Azotobacter"],
            ["Nitrification", "Nitrosomonas, Nitrobacter"],
            ["Denitrification", "Pseudomonas, Thiobacillus"]
          ]
        }
      },
      {
        title: "Phosphorus Cycle",
        content: "A sedimentary cycle. Phosphorus is released through weathering of rocks. It has no atmospheric phase.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following adds carbon to the carbon cycle on Earth? 1. Volcanic action. 2. Respiration. 3. Photosynthesis. 4. Decay of organic matter.",
        year: "2014",
        options: ["1, 2 and 3 only", "2 and 4 only", "1, 2 and 4 only", "1, 2, 3 and 4"],
        answer: "C",
        explanation: "Photosynthesis REMOVES carbon from the atmosphere."
      }
    ],
    predictions: [
      "The role of 'Ancient Carbon' release from Siberian permafrost as a climate tipping point.",
      "Impact of intensive urea use on the marine Nitrogen cycle via runoff."
    ]
  },
  "B9": {
    id: "B9",
    title: "Ecosystems",
    coreConcepts: [
      {
        title: "Forest Ecosystems",
        content: "Characterized by high biomass and complex structure. Includes Tropical Evergreen (Western Ghats), Deciduous (Monsoon forests), and Coniferous (Himalayas).",
      },
      {
        title: "Aquatic Ecosystems",
        content: "Classified into Lotic (flowing: rivers) and Lentic (standing: lakes/ponds). Marine ecosystems include Coral Reefs and Estuaries.",
      }
    ],
    pyqs: [
      {
        question: "Which one of the following is the world's only floating National Park?",
        year: "2015",
        options: ["Keibul Lamjao", "Dachigam", "Namdapha", "Eravikulam"],
        answer: "A",
        explanation: "Keibul Lamjao (Manipur) floats on Phumdis in Loktak Lake."
      }
    ],
    predictions: [
      "The impact of 'Ghost Forests' caused by sea-level rise on coastal carbon stocks.",
      "Vulnerability of 'Cold Deserts' (Ladakh) to erratic snowfall patterns."
    ]
  },
  "B10": {
    id: "B10",
    title: "Wetlands",
    coreConcepts: [
      {
        title: "Ramsar Convention",
        content: "Signed in 1971 in Iran. Focuses on 'Wise Use' of wetlands. India has 75 Ramsar sites as of 2023.",
      },
      {
        title: "Montreux Record",
        content: "A register of Ramsar sites where ecological changes have occurred. India's Keoladeo NP and Loktak Lake are currently listed.",
      }
    ],
    pyqs: [
      {
        question: "With reference to 'Montreux Record', which of the following statements is/are correct? 1. It is a register of Ramsar sites facing ecological changes. 2. Chilika Lake was removed from it. 3. Keoladeo NP is currently on it.",
        year: "2019",
        options: ["1 only", "1 and 2 only", "1, 2 and 3", "2 and 3 only"],
        answer: "C",
        explanation: "All statements are correct. Chilika was removed in 2002."
      }
    ],
    predictions: [
      "Inclusion of 'Urban Wetlands' as critical infrastructure for flood mitigation in Indian metros.",
      "The role of 'Peatlands' in the Global Methane Pledge (COP26)."
    ]
  },
  "B11": {
    id: "B11",
    title: "Biodiversity & Species",
    coreConcepts: [
      {
        title: "Biodiversity Hotspots",
        content: "Criteria: 1500 endemic plant species AND 70% habitat loss. India has 4: Western Ghats, Himalayas, Indo-Burma, and Sundaland.",
      },
      {
        title: "In-situ vs Ex-situ",
        content: "In-situ: National Parks, Sanctuaries. Ex-situ: Zoos, Botanical Gardens, Seed Banks.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following are Biodiversity Hotspots in India? 1. Western Ghats. 2. Eastern Himalayas. 3. Sundaland.",
        year: "2013",
        options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
        answer: "C",
        explanation: "India has 4 hotspots total, including these three."
      }
    ],
    predictions: [
      "The 'African Cheetah' reintroduction in Kuno as a model for trans-continental species recovery.",
      "Genetic barcoding of 'Sacred Groves' to preserve ancient climate-resilient strains."
    ]
  },
  "B12": {
    id: "B12",
    title: "Greenhouse Effect & GHGs",
    coreConcepts: [
      {
        title: "Greenhouse Gases",
        content: "Major GHGs include CO2, CH4, N2O, and HFCs. Water vapor is the most abundant but acts as a feedback.",
      },
      {
        title: "Global Warming Potential (GWP)",
        content: "Measures how much heat a gas traps. SF6 has the highest GWP (23,900x CO2).",
      }
    ],
    pyqs: [
      {
        question: "Which of the following is correct regarding the feedback loop in climate change? 1. Ice-Albedo feedback is positive. 2. Water vapor feedback is negative.",
        year: "2018",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        answer: "A",
        explanation: "Water vapor feedback is also positive (more heat -> more evaporation -> more heat)."
      }
    ],
    predictions: [
      "The 'Permafrost Methane' threshold as a non-linear tipping point in 2030 predictions.",
      "Impact of 'Ocean Acidification' on the shell-forming organisms of the Southern Ocean."
    ]
  },
  "B13": {
    id: "B13",
    title: "Soil & Bioremediation",
    coreConcepts: [
      {
        title: "Soil Profile",
        content: "Horizons: O (Organic), A (Topsoil), E (Eluviated), B (Subsoil), C (Parent material), R (Bedrock).",
      },
      {
        title: "Bioremediation Types",
        content: "Phytoremediation (plants), Mycoremediation (fungi), Bioaugmentation (adding microbes).",
      }
    ],
    pyqs: [
      {
        question: "In the context of soil conservation, consider 'Bioremediation'. It involves:",
        year: "2017",
        options: ["Using chemicals to kill pests", "Using microbes to clean pollutants", "Adding fertilizers to soil", "Plowing across slopes"],
        answer: "B",
        explanation: "Bioremediation uses organisms to neutralize contaminants."
      }
    ],
    predictions: [
      "The use of 'Hyper-accumulators' for lithium remediation in battery recycling zones.",
      "Impact of 'Soil Salinization' on food security in the Indo-Gangetic plains."
    ]
  },
  "B14": {
    id: "B14",
    title: "Pollution",
    coreConcepts: [
      {
        title: "Air Pollution",
        content: "Includes PM2.5, PM10, SOx, NOx, and CO. Photochemical smog is a secondary pollutant (NOx + VOCs + Sunlight).",
      },
      {
        title: "Water Pollution",
        content: "Indicators include BOD (Biochemical Oxygen Demand) and DO (Dissolved Oxygen). High BOD = High Pollution.",
      }
    ],
    pyqs: [
      {
        question: "What is the result of 'Eutrophication' in a water body?",
        year: "2015",
        options: ["Increase in oxygen", "Decrease in nutrients", "Depletion of dissolved oxygen", "Increase in fish population"],
        answer: "C",
        explanation: "Nutrients -> Algal Bloom -> Death & Decay -> Oxygen Depletion."
      }
    ],
    predictions: [
      "Micro-plastic 'Plastiglomerates' as a new category of geological marker in India's coast.",
      "Impact of 'Light Pollution' on the reproductive cycles of sea turtles in Odisha."
    ]
  },
  "B15": {
    id: "B15",
    title: "Protected Areas & Wildlife",
    coreConcepts: [
      {
        title: "Protected Area Registry",
        content: "National Parks (strictly protected), Wildlife Sanctuaries (limited activity), Biosphere Reserves (CORE-BUFFER-TRANSITION).",
      },
      {
        title: "Project Tiger & CTH",
        content: "Critical Tiger Habitat (CTH) is the legally inviolate core area of a Tiger Reserve.",
      }
    ],
    pyqs: [
      {
        question: "Which of the following is correct about 'Eco-Sensitive Zones'?",
        year: "2014",
        options: ["Declared under WPA 1972", "Acts as shock absorber around NP/WLS", "Total ban on agriculture", "Administered by the UN"],
        answer: "B",
        explanation: "ESZs are shock absorbers around PAs, declared under EPA 1986."
      }
    ],
    predictions: [
      "The role of 'Other Effective Area-based Conservation Measures' (OECMs) in achieving the 30x30 target.",
      "Vulnerability of 'Tiger Corridors' to linear infrastructure expansion in Central India."
    ]
  },
  "B16": {
    id: "B16",
    title: "Sustainable Dev + EIA + Laws",
    coreConcepts: [
      {
        title: "EIA Process",
        content: "Stages: Screening, Scoping, Baseline Study, Prediction, Mitigation, EIS Report, Public Hearing, Decision, Monitoring.",
      },
      {
        title: "Major Laws",
        content: "Wildlife Protection Act (1972), Water Act (1974), Forest Conservation Act (1980), Air Act (1981), Environment Protection Act (1986).",
      }
    ],
    pyqs: [
      {
        question: "The 'Environment Protection Act' of 1986 empowers the Government of India to:",
        year: "2014",
        options: ["Protect biodiversity only", "Set standards for environmental quality", "Create new National Parks", "Appoint the CJI"],
        answer: "B",
        explanation: "EPA 1986 is an umbrella legislation for setting standards and monitoring."
      }
    ],
    predictions: [
      "Integrations of 'Traditional Ecological Knowledge' (TEK) in formal EIA public hearings.",
      "Impact of the 'Forest Conservation Amendment Act 2023' on strategic border infrastructure."
    ]
  },
  "C1": {
    id: "C1",
    title: "The Awakening (1962–1972)",
    coreConcepts: [
      {
        title: "The Pre-Stockholm Era",
        content: "Before 1972, the world lacked a unified environmental framework. Action was driven by grassroots shocks and scientific awakenings.",
      },
      {
        title: "Silent Spring (1962) — The Spark",
        content: "**Cause:** Unregulated use of DDT and pesticides. **Effect:** Rachel Carson documented the death of birds and 'biomagnification' of toxins. **Therefore:** Public demand for environmental accountability was born. US banned DDT in 1972; Carson is considered the 'Mother of the Environmental Movement'.",
      },
      {
        title: "Key Milestones (1969-1971)",
        content: "The Cuyahoga River fire (1969) shocked the US into creating the EPA. The first Earth Day (1970) saw 20 million people protest. The 'Club of Rome' (1972) published 'Limits to Growth', providing the first scientific proof that infinite growth on a finite planet is impossible.",
        table: {
          headers: ["Year", "Event", "Significance"],
          rows: [
            ["1969", "Cuyahoga River Fire", "Sparked the US Clean Water Act"],
            ["1970", "First Earth Day", "Largest civic demonstration for nature"],
            ["1971", "Ramsar Convention", "First modern treaty; protected wetlands"],
            ["1972", "Stockholm (UNCHE)", "First UN Conference; created UNEP"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "Rachel Carson's 'Silent Spring' is related to:",
        year: "2019",
        options: ["Conservation of forests", "Environmental effects of DDT and other pesticides", "Impact of nuclear testing", "Marine pollution"],
        answer: "B",
        explanation: "Silent Spring (1962) documented how DDT was killing birds and contaminating ecosystems."
      },
      {
        question: "The term 'Wise Use' in the context of wetlands refers to:",
        year: "2021",
        options: ["Total prohibition of human activity", "Sustainable utilisation compatible with maintenance", "Conversion to agriculture", "Scientific research only"],
        answer: "B",
        explanation: "Ramsar's 'Wise Use' means sustainable use that maintains the natural properties of the ecosystem."
      }
    ],
    predictions: [
      "The influence of 1960s grassroots activism on modern 'End-of-Pipe' pollution regulations.",
      "UPSC Statement: 'World Earth Day' vs 'World Environment Day' — distinguishing grassroots origins vs UN official status."
    ],
    flowchart: "Silent Spring -> Earth Day -> Limits to Growth -> Ramsar -> Stockholm 1972"
  },
  "C2": {
    id: "C2",
    title: "Building the Architecture (1972–1991)",
    coreConcepts: [
      {
        title: "The Era of Institution Building",
        content: "Post-Stockholm, the world began creating the legal architecture for environmental protection. This period saw the creation of UNEP and the first major species-protection acts.",
      },
      {
        title: "Montreal Protocol (1987) — The Success Story",
        content: "**Cause:** Discovery of the 'Antarctic Ozone Hole' caused by CFCs. **Effect:** The Vienna Convention (1985) and Montreal Protocol (1987) mandated the phase-out of Ozone Depleting Substances (ODS). **Therefore:** It remains the only universal treaty with 198 parties; ozone layer projected to recover by 2065-2070.",
      },
      {
        title: "Brundtland Report (1987)",
        content: "Chaired by Gro Harlem Brundtland, the report 'Our Common Future' defined Sustainable Development as 'meeting present needs without compromising future generations'. It reconciled the North-South divide between development and environment.",
      },
      {
        title: "Emergence of Scientific Authority",
        content: "The creation of the IPCC in 1988 by WMO and UNEP provided a unified scientific voice for climate change. It does not conduct research but synthesizes global knowledge.",
        table: {
          headers: ["Body", "Year", "Focus"],
          rows: [
            ["UNEP", "1972", "Global environmental monitor; HQ Nairobi"],
            ["CITES", "1973", "Wildlife trade; Appendices I, II, III"],
            ["Montreal", "1987", "Ozone protection; Universal ratification"],
            ["IPCC", "1988", "Climate science assessment; Nobel Prize 2007"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "The term 'Sustainable Development' was popularized by which report?",
        year: "2018",
        options: ["Limits to Growth", "Brundtland Report", "Agenda 21", "Nairobi Declaration"],
        answer: "B",
        explanation: "The 1987 report 'Our Common Future' gave the standard definition of SD."
      },
      {
        question: "The Keeling Curve is associated with:",
        year: "2022",
        options: ["Rise in sea levels", "CO2 concentration measurements since 1958", "Ozone depletion", "Temperature fluctuation"],
        answer: "B",
        explanation: "Measured at Mauna Loa, it shows the steady increase in atmospheric CO2."
      }
    ],
    predictions: [
      "The success model of Montreal Protocol as a blueprint for the Global Methane Pledge.",
      "Distinction: IPCC does NOT conduct original research (UPSC frequent trap statement)."
    ],
    flowchart: "UNEP Created -> CITES -> Montreal Protocol -> Brundtland Report -> IPCC 1988"
  },
  "C3": {
    id: "C3",
    title: "The Rio Moment (1992)",
    coreConcepts: [
      {
        title: "The Earth Summit (UNCED)",
        content: "The 1992 Rio Summit was the single most important meeting in environmental history. It produced the three 'Rio Conventions' and the Agenda 21 action plan.",
      },
      {
        title: "The Three 'Rivers' of Governance",
        content: "Rio gave birth to three vital frameworks: **UNFCCC** (Climate), **CBD** (Biodiversity), and **UNCCD** (Land/Desertification). All modern policy flows from these three.",
      },
      {
        title: "CBDR & Biopiracy",
        content: "Rio established the principle of 'Common but Differentiated Responsibilities' (CBDR). It also sparked the fight against 'Biopiracy', where traditional knowledge (like India's Neem and Turmeric) was being patented by foreign corporations.",
        table: {
          headers: ["Convention", "Focus", "India Relevance"],
          rows: [
            ["UNFCCC", "Climate Change", "Foundation of all COPs"],
            ["CBD", "Biodiversity", "Led to Biological Diversity Act 2002"],
            ["UNCCD", "Desertification", "Target: Land Degradation Neutrality"],
            ["Agenda 21", "Action Plan", "Seeds of the SDGs (2015)"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "Agenda 21 is an outcome of:",
        year: "2014",
        options: ["Stockholm Conference", "Rio Earth Summit", "Kyoto Protocol", "Montreal Protocol"],
        answer: "B",
        explanation: "Agenda 21 is a comprehensive action plan for sustainable development adopted at Rio."
      },
      {
        question: "The 'Common But Differentiated Responsibilities' (CBDR) principle means:",
        year: "2020",
        options: ["Equal responsibility for all", "Developed nations bear greater historical responsibility", "Only developing nations act", "Current emissions matter most"],
        answer: "B",
        explanation: "Developed nations must lead because they are historical emitters."
      }
    ],
    predictions: [
      "The evolution of CBDR in post-Kyoto negotiations.",
      "UPSC Connection: India's TKDL (Traditional Knowledge Digital Library) as a response to Rio-era biopiracy."
    ],
    flowchart: "Rio Summit 1992 -> UNFCCC + CBD + UNCCD -> Agenda 21 -> CBDR Principle"
  },
  "C4": {
    id: "C4",
    title: "Kyoto & Setbacks (1997–2009)",
    coreConcepts: [
      {
        title: "Kyoto Protocol (1997) — The First Promise",
        content: "**Cause:** Science confirmed human-induced warming was accelerating. **Effect:** The first legally binding treaty was signed, requiring 'Annex-I' (developed) nations to cut emissions by ~5%. **Therefore:** It introduced carbon markets like CDM, but the US withdrawal in 2001 significantly weakened its impact.",
      },
      {
        title: "Clean Development Mechanism (CDM)",
        content: "A Kyoto-era tool where developed nations earn 'Carbon Credits' by investing in green projects in developing nations. India became the world's largest host for CDM, earning billions in carbon revenue.",
      },
      {
        title: "Copenhagen (2009) — The 'Phoenix' Moment",
        content: "The summit was declared a failure as it failed to produce a legally binding successor to Kyoto. However, it saw the emergence of the **BASIC bloc** (Brazil, South Africa, India, China) and the first voluntary emission pledges.",
        table: {
          headers: ["Concept", "Details", "Significance"],
          rows: [
            ["Annex-I", "Developed nations", "Had binding targets"],
            ["Non-Annex-I", "Developing nations", "No binding targets yet"],
            ["CDM", "Carbon Trading", "India's solar/wind boom started here"],
            ["BASIC", "Diplomatic Bloc", "Protected developing world interests"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "The 'Clean Development Mechanism' (CDM) of Kyoto Protocol is managed by:",
        year: "2016",
        options: ["GEF", "UNFCCC Secretariat", "World Bank", "UNEP"],
        answer: "B",
        explanation: "The CDM is supervised by the CDM Executive Board under the guidance of the COP/MOP."
      },
      {
        question: "The BASIC countries include:",
        year: "2019",
        options: ["Brazil, India, South Africa, China", "Britain, Australia, Sweden, Israel, China", "Belgium, Argentina, Spain, Iran, Canada", "Brazil, Australia, Saudi Arabia, India, China"],
        answer: "A",
        explanation: "BASIC = Brazil, South Africa, India, and China; they negotiate collectively."
      }
    ],
    predictions: [
      "The role of CDM credits in the new Article 6.4 market (Paris Agreement).",
      "UPSC Analytical: Why Copenhagen is seen as a 'successful failure' for developing nations."
    ],
    flowchart: "Kyoto Signed -> US Withdrawal -> CDM Boom -> Copenhagen 2009 -> BASIC Bloc"
  },
  "C5": {
    id: "C5",
    title: "The Paris Shift (2010–2015)",
    coreConcepts: [
      {
        title: "Paris Agreement (2015) — The Breakthrough",
        content: "**Cause:** The failure of top-down targets (Kyoto) led to a demand for a flexible, 'bottom-up' approach. **Effect:** 196 nations signed the Paris Agreement, aiming to limit warming to 1.5°C. It introduced **Nationally Determined Contributions (NDCs)**.",
      },
      {
        title: "International Solar Alliance (ISA)",
        content: "Co-founded by India and France at COP21, it was India's first major leadership role in global climate governance. Its goal is to mobilize $1 trillion for solar energy by 2030.",
      },
      {
        title: "The 1.5°C Goal",
        content: "Initially a demand by small island nations (AOSIS), the 1.5°C target became the new scientific benchmark for 'survival', as identified by the IPCC Special Report on 1.5°C.",
        table: {
          headers: ["Feature", "Kyoto (Old)", "Paris (New)"],
          rows: [
            ["Approach", "Top-Down (Binding)", "Bottom-Up (Voluntary)"],
            ["Scope", "Only Developed Nations", "All Nations (Universal)"],
            ["Mechanism", "Carbon Trading (CDM)", "Direct NDCs & Article 6"],
            ["UPSC Tip", "Phased approach", "Ratchet mechanism (every 5 years)"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "With reference to the Paris Agreement, which of the following is/are correct? 1. Aim is to limit temperature rise to 2°C. 2. Developed countries pledged $100 billion a year. 3. It is legally binding.",
        year: "2016",
        options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
        answer: "A",
        explanation: "Statement 3 is incorrect; the NDCs themselves are not legally binding; only the reporting is."
      },
      {
        question: "The International Solar Alliance (ISA) was launched at:",
        year: "2021",
        options: ["Rio+20", "COP 21 (Paris)", "COP 26 (Glasgow)", "G20 Brisbane"],
        answer: "B",
        explanation: "PM Modi and French President Hollande launched ISA at the sidelines of COP 21."
      }
    ],
    predictions: [
      "The 'Ratchet Mechanism' of Paris Agreement as a driver for India's 2070 Net Zero target.",
      "UPSC Analytical: How US's reentry into Paris changed the momentum for COP 26."
    ],
    flowchart: "INDCs Submitted -> Paris Agreement Signed -> ISA Launched -> SDGs Adopted -> 1.5°C Target"
  },
  "C6": {
    id: "C6",
    title: "The Crisis Era (2016–2026)",
    coreConcepts: [
      {
        title: "Glasgow COP 26 (2021) — Fossil Fuels Named",
        content: "**Cause:** Science (SR1.5) showed 1.5°C was slipping away. **Effect:** The Glasgow Climate Pact was signed, being the first COP text to mention 'phasing down' coal. **Therefore:** It marked the end of the 'fossil fuel silence' in climate talks. India announced its **Panchamrit** targets here.",
      },
      {
        title: "Sharm El-Sheikh COP 27 (2022) — Justice Delivered",
        content: "After 30 years of demands, a **Loss and Damage Fund** was established to help vulnerable nations deal with climate impacts that cannot be adapted to (like sea-level rise).",
      },
      {
        title: "Dubai COP 28 (2023) — The Transition",
        content: "The First Global Stocktake (GST) concluded that the world is NOT on track for 1.5°C. The 'UAE Consensus' called for 'transitioning away from fossil fuels' in energy systems.",
        table: {
          headers: ["COP", "Year", "Key Outcome"],
          rows: [
            ["COP 26", "2021", "Coal Phasedown; Panchamrit"],
            ["COP 27", "2022", "Loss & Damage Fund established"],
            ["COP 28", "2023", "First Global Stocktake (GST)"],
            ["COP 29", "2024", "NCQG ($300bn Finance Goal)"]
          ]
        }
      }
    ],
    pyqs: [
      {
        question: "India's 'Panchamrit' includes which of the following?",
        year: "2022",
        options: ["Net Zero by 2050", "Net Zero by 2070", "100% Renewables by 2030", "Phase out coal by 2040"],
        answer: "B",
        explanation: "Panchamrit targets include Net Zero by 2070 and 500GW non-fossil capacity."
      },
      {
        question: "The 'Cali Fund' established at CBD COP 16 is for:",
        year: "2025",
        options: ["Carbon offsets", "Digital Sequence Information (DSI) benefit sharing", "Plastic cleanup", "Ocean protection"],
        answer: "B",
        explanation: "Cali Fund shares benefits from the use of digital genetic data from biodiversity."
      }
    ],
    predictions: [
      "The impact of the US 2024 election on the Paris Agreement implementation.",
      "Shift from 'Adaptation' to 'Loss and Damage' as the primary focus for Global South."
    ],
    flowchart: "Glasgow Pact -> Loss & Damage Fund -> GST Dubai -> NCQG Baku -> Belém 2025"
  }
};
