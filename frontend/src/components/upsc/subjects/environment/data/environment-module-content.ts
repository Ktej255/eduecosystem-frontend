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
    title: "The Awakening (1960s–1972)",
    coreConcepts: [
      {
        title: "Silent Spring (1962)",
        content: "Rachel Carson's book exposed the dangers of pesticides (DDT), sparking the modern environmental movement.",
      },
      {
        title: "Stockholm Conference (1972)",
        content: "The UN Conference on the Human Environment was the first major international meeting on the environment. It led to the creation of UNEP and established the right to a healthy environment.",
      }
    ],
    pyqs: [
      {
        question: "The 'Stockholm Conference' of 1972 resulted in the creation of which international body?",
        year: "2015",
        options: ["IPCC", "UNEP", "IUCN", "GEF"],
        answer: "B",
        explanation: "United Nations Environment Programme (UNEP) was established in 1972."
      }
    ],
    predictions: [
      "The influence of 1960s grassroots activism on modern 'End-of-Pipe' pollution regulations.",
      "Relevance of Stockholm Principle 1 in the context of recent climate litigation cases."
    ]
  },
  "C2": {
    id: "C2",
    title: "Building the Framework (1972–1992)",
    coreConcepts: [
      {
        title: "Brundtland Report (1987)",
        content: "Defined 'Sustainable Development' as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
      },
      {
        title: "Montreal Protocol (1987)",
        content: "A landmark agreement to phase out Ozone Depleting Substances (CFCs). Often cited as the most successful environmental treaty.",
      }
    ],
    pyqs: [
      {
        question: "The term 'Sustainable Development' was popularized by which report?",
        year: "2018",
        options: ["Limits to Growth", "Brundtland Report", "Agenda 21", "Nairobi Declaration"],
        answer: "B",
        explanation: "Also known as 'Our Common Future' (1987)."
      }
    ],
    predictions: [
      "The success model of Montreal Protocol as a blueprint for the Global Methane Pledge.",
      "Impact of the 'Our Common Future' definition on modern ESG (Environmental, Social, and Governance) scores."
    ]
  },
  "C3": {
    id: "C3",
    title: "Rio & The Promises (1992–1997)",
    coreConcepts: [
      {
        title: "Rio Earth Summit (1992)",
        content: "UN Conference on Environment and Development (UNCED). Produced 'Agenda 21' and the three 'Rio Conventions': UNFCCC, CBD, and UNCCD.",
      },
      {
        title: "Kyoto Protocol (1997)",
        content: "First legally binding agreement for greenhouse gas reductions, introducing 'Common but Differentiated Responsibilities' (CBDR).",
      }
    ],
    pyqs: [
      {
        question: "Agenda 21 is an outcome of:",
        year: "2014",
        options: ["Stockholm Conference", "Rio Earth Summit", "Kyoto Protocol", "Montreal Protocol"],
        answer: "B",
        explanation: "Agenda 21 is a non-binding, voluntarily implemented action plan of the UN with regard to sustainable development."
      }
    ],
    predictions: [
      "Re-evaluating 'Agenda 21' in the digital era: Successes and failures of local governance.",
      "The evolution of CBDR (Common But Differentiated Responsibilities) in post-Kyoto negotiations."
    ]
  },
  "C4": {
    id: "C4",
    title: "Struggles & Setbacks (1998–2009)",
    coreConcepts: [
      {
        title: "Copenhagen Climate Summit (2009)",
        content: "Failed to produce a legally binding successor to the Kyoto Protocol, reflecting a deep divide between developed and developing nations.",
      }
    ],
    pyqs: [
      {
        question: "The 'Copenhagen Accord' was a result of which COP?",
        year: "2010",
        options: ["COP 13", "COP 15", "COP 21", "COP 17"],
        answer: "B",
        explanation: "COP 15 was held in Copenhagen, Denmark."
      }
    ],
    predictions: [
      "Lessons from the 'Copenhagen Failure' for the Global Stocktake process.",
      "The role of 'Climate Finance' deadlock in stalling global progress during the 2000s."
    ]
  },
  "C5": {
    id: "C5",
    title: "New Pathways (2010–2015)",
    coreConcepts: [
      {
        title: "Paris Agreement (2015)",
        content: "A global agreement to limit warming to well below 2°C, preferably 1.5°C. Introduced 'Nationally Determined Contributions' (NDCs).",
      },
      {
        title: "Sustainable Development Goals (2015)",
        content: "17 global goals adopted by the UN to be achieved by 2030, covering social, economic, and environmental aspects.",
      }
    ],
    pyqs: [
      {
        question: "With reference to the Paris Agreement, which of the following is/are correct? 1. Aim is to limit temperature rise to 2°C. 2. Developed countries pledged $100 billion a year. 3. It is legally binding.",
        year: "2016",
        options: ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
        answer: "A",
        explanation: "Statement 3 is partially incorrect; not all provisions are legally binding."
      }
    ],
    predictions: [
      "Evolution of NDCs into 'Binding Carbon Budgets' by 2030.",
      "SDG 13 (Climate Action) as a driver for trade-related carbon measures (like CBAM)."
    ]
  },
  "C6": {
    id: "C6",
    title: "Implementation & Crisis (2016–2026)",
    coreConcepts: [
      {
        title: "Glasgow Climate Pact (2021 - COP26)",
        content: "Called for 'phase down' of unabated coal power and inefficient fossil fuel subsidies. First time fossil fuels were explicitly mentioned.",
      },
      {
        title: "Global Stocktake (COP28 Dubai)",
        content: "The first ever Global Stocktake concluded in 2023, assessing global progress under Paris Agreement and calling for a transition away from fossil fuels.",
      }
    ],
    pyqs: [
      {
        question: "Which COP witnessed the adoption of the 'Loss and Damage Fund'?",
        year: "2023",
        options: ["COP 26", "COP 27", "COP 28", "COP 21"],
        answer: "B",
        explanation: "COP 27 in Sharm el-Sheikh saw the historic agreement to establish a Loss and Damage Fund."
      }
    ],
    predictions: [
      "The impact of 'Nature-Based Solutions' (NbS) in the COP30 Belém biodiversity targets.",
      "Shift from 'Climate Finance' to 'Climate Justice' in the New Collective Quantified Goal (NCQG)."
    ]
  }
};
