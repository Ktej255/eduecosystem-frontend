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
    },
    {
        id: "env-mcq-11",
        question: "With reference to COP28 'UAE Consensus', consider the following:\n1. It called for 'transitioning away' from fossil fuels in energy systems.\n2. It included an agreement to triple global renewable energy capacity by 2030.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "COP28 made history by specifically naming fossil fuels and setting the goal to triple renewables and double energy efficiency.",
        chapter: 3, subtopic: "Climate Policy", difficulty: "hard"
    },
    {
        id: "env-mcq-12",
        question: "The 'Global Biofuel Alliance' (GBA), launched during India's G20 presidency, aims to:",
        options: ["Phase out all biofuels by 2050", "Accelerate the deployment of biofuels and set global standards", "Ban the use of corn for ethanol", "Promote electric vehicles only"],
        correctAnswer: 1,
        explanation: "GBA is a Multi-stakeholder alliance of governments and organizations aiming to expand world trade in biofuels.",
        chapter: 3, subtopic: "Renewable Energy", difficulty: "medium"
    },
    {
        id: "env-mcq-13",
        question: "What is 'MISHTI' initiative, announced in Union Budget 2023-24?",
        options: ["Mapping of soil health", "Mangrove Initiative for Shoreline Habitats & Tangible Incomes", "Management of Himalayan forests", "Incentive for solar irrigation"],
        correctAnswer: 1,
        explanation: "MISHTI aims at mangrove plantation along the coastline and on salt pan lands, utilizing MNREGA and CAMPA funds.",
        chapter: 2, subtopic: "Conservation Missions", difficulty: "medium"
    },
    {
        id: "env-mcq-14",
        question: "The 'International Big Cat Alliance' (IBCA) was launched by India to protect how many species of big cats?",
        options: ["5", "7", "9", "12"],
        correctAnswer: 1,
        explanation: "IBCA focuses on the conservation of seven big cats: Tiger, Lion, Leopard, Snow Leopard, Cheetah, Jaguar, and Puma.",
        chapter: 2, subtopic: "Wildlife Conservation", difficulty: "easy"
    },
    {
        id: "env-mcq-15",
        question: "The 'Kunming-Montreal Global Biodiversity Framework' targets the protection of at least what percentage of Earth's land and oceans by 2030?",
        options: ["10%", "20%", "30%", "50%"],
        correctAnswer: 2,
        explanation: "Known as the '30x30' goal, the framework aims to protect 30% of land, inland waters, and coastal/marine areas by 2030.",
        chapter: 4, subtopic: "International Conventions", difficulty: "medium"
    },
    {
        id: "env-mcq-16",
        question: "What is the primary target of the 'Amrit Dharohar' scheme?",
        options: ["Cleaning of heritage monuments", "Optimal use of wetlands and enhancement of biodiversity/eco-tourism", "Reviving ancient rivers", "Protecting traditional knowledge"],
        correctAnswer: 1,
        explanation: "Amrit Dharohar is a scheme to encourage optimal use of wetlands (Ramsar sites) over the next three years to improve biodiversity.",
        chapter: 2, subtopic: "Wetland Conservation", difficulty: "medium"
    },
    {
        id: "env-mcq-17",
        question: "The 'Wildlife Protection (Amendment) Act, 2022' reduced the number of schedules from six to:",
        options: ["Two", "Four", "Five", "Constant (remained six)"],
        correctAnswer: 1,
        explanation: "The 2022 amendment rationalized schedules to four: I (highest protection), II (lesser protection), III (Plant species), and IV (CITES species).",
        chapter: 5, subtopic: "Environmental Legislation", difficulty: "hard"
    },
    {
        id: "env-mcq-18",
        question: "With reference to 'Green Credits', the Green Credit Program (GCP) launched in India initially focuses on:",
        options: ["Industrial carbon emission only", "Water conservation and Afforestation", "Plastic waste management only", "Deep-sea habitat protection"],
        correctAnswer: 1,
        explanation: "GCP is an innovative market-based mechanism to incentivize voluntary environmental actions. Initial phases focus on water and afforestation.",
        chapter: 5, subtopic: "Incentive Mechanisms", difficulty: "medium"
    },
    {
        id: "env-mcq-19",
        question: "What is the 'High Seas Treaty' (BBNJ), adopted in 2023?",
        options: ["A treaty to tax international shipping", "A legally binding instrument for conservation beyond national jurisdiction", "A pact to ban all deep-sea fishing", "An agreement on maritime borders in the South China Sea"],
        correctAnswer: 1,
        explanation: "The BBNJ treaty (Biodiversity Beyond National Jurisdiction) aims to protect marine life in international waters, which cover nearly half the planet.",
        chapter: 4, subtopic: "International Law", difficulty: "hard"
    },
    {
        id: "env-mcq-20",
        question: "The 'LiFE - Lifestyle for Environment' movement, introduced by India, emphasizes:",
        options: ["Increasing industrial production", "Replacing all technology with manual labor", "Mindful and deliberate utilization of resources instead of mindless consumption", "Moving all human populations to cities"],
        correctAnswer: 2,
        explanation: "Mission LiFE aims to transition society from a 'throw-away' economy to a circular economy defined by mindful consumption.",
        chapter: 4, subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-21",
        question: "According to the 'World Air Quality Report', which pollutant is most commonly monitored as the primary indicator of health risk?",
        options: ["PM10", "PM2.5", "Sulphur Dioxide", "Lead"],
        correctAnswer: 1,
        explanation: "Fine particulate matter (PM2.5) is the most widely used metric for air quality monitoring due to its ability to penetrate deep into human lungs/bloodstream.",
        chapter: 1, subtopic: "Pollution", difficulty: "easy"
    },
    {
        id: "env-mcq-22",
        question: "Which Indian state became the first to have a 'Climate Change Mission' at the state level?",
        options: ["Gujarat", "Tamil Nadu", "Maharashtra", "Kerala"],
        correctAnswer: 1,
        explanation: "Tamil Nadu launched its own Climate Change Mission in 2022, aimed at achieving carbon neutrality and climate resilience.",
        chapter: 5, subtopic: "State Policies", difficulty: "medium"
    },
    {
        id: "env-mcq-23",
        question: "The 'Kigali Amendment' to the Montreal Protocol aims to phase down:",
        options: ["CFCs", "HCFCs", "HFCs", "Halons"],
        correctAnswer: 2,
        explanation: "Kigali Amendment targets Hydrofluorocarbons (HFCs), which replaced CFCs. HFCs don't deplete ozone but are potent greenhouse gases.",
        chapter: 3, subtopic: "Ozone & Climate", difficulty: "hard"
    },
    {
        id: "env-mcq-24",
        question: "What is 'Net Zero' target year announced by India at Glasgow (COP26)?",
        options: ["2047", "2050", "2060", "2070"],
        correctAnswer: 3,
        explanation: "India committed to reaching 'Net Zero' emissions by the year 2070 as part of its 'Panchamrit' goals.",
        chapter: 3, subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-25",
        question: "The 'Lidat' project, often in news, is related to:",
        options: ["Ancient forest mapping", "Satellite based LiDAR survey of forest density", "A new pollution sensor", "Mapping of biodiversity hotspots"],
        correctAnswer: 1,
        explanation: "LiDAR (Light Detection and Ranging) is used for high-resolution mapping of forest biomass and identifying habitat corridors.",
        chapter: 2, subtopic: "Conservation Tech", difficulty: "medium"
    },
    {
        id: "env-mcq-26",
        question: "With reference to 'Carbon Farming', consider the following:\n1. It involves agricultural methods aimed at sequestering atmospheric carbon in soil.\n2. It can reduce the use of synthetic fertilizers.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Carbon farming (e.g., no-till, cover crops) traps carbon in soil and enhances organic matter, reducing the need for chemical inputs.",
        chapter: 1, subtopic: "Ecology", difficulty: "medium"
    },
    {
        id: "env-mcq-27",
        question: "Which organization publishes the 'Living Planet Report'?",
        options: ["WWF", "IUCN", "UNEP", "Greenpeace"],
        correctAnswer: 0,
        explanation: "World Wide Fund for Nature (WWF) publishes the biennial Living Planet Report, tracking biodiversity and human impact.",
        chapter: 4, subtopic: "Reports", difficulty: "easy"
    },
    {
        id: "env-mcq-28",
        question: "What is 'Forest Landscape Restoration' (FLR)?",
        options: ["Planting trees in rows", "A process that regains ecological functionality and enhances human well-being across deforested landscapes", "Banning all human entry to forests", "Cutting old forests to plant new ones"],
        correctAnswer: 1,
        explanation: "FLR is a holistic approach focused on restoring forest health and its ecosystem services like water, soil, and fuel.",
        chapter: 2, subtopic: "Conservation", difficulty: "medium"
    },
    {
        id: "env-mcq-29",
        question: "The 'National Clean Air Programme' (NCAP) targets a reduction of PM concentration by what percentage by 2026?",
        options: ["10-15%", "20-30%", "40%", "50%"],
        correctAnswer: 2,
        explanation: "Initially 20-30% by 2024, the goal was revised in 2022 to a 40% reduction in PM levels in non-attainment cities by 2026.",
        chapter: 5, subtopic: "Pollution Control", difficulty: "hard"
    },
    {
        id: "env-mcq-30",
        question: "What is 'Eco-Sensitive Zone' (ESZ)?",
        options: ["The entire state boundary", "A buffer area around Protected Areas (National Parks/Sanctuaries)", "Industrial zones with zero pollution", "Coastal areas with no fishing"],
        correctAnswer: 1,
        explanation: "ESZs act as 'shock absorbers' to protected areas by regulating certain activities. Usually notified within 10km of boundaries.",
        chapter: 5, subtopic: "Environmental Policy", difficulty: "medium"
    },
    {
        id: "env-mcq-31",
        question: "With reference to the 'Great Nicobar Project', which of the following is an environmental concern?",
        options: ["Decline in tiger population", "Impact on the nesting sites of Great Nicobar Megapode and Leatherback turtles", "Melting of glaciers", "Desertification of the island"],
        correctAnswer: 1,
        explanation: "The mega-project on Great Nicobar has raised concerns regarding the loss of rainforests and critical nesting habitats for endemic species.",
        chapter: 2, subtopic: "Local Environment", difficulty: "medium"
    },
    {
        id: "env-mcq-32",
        question: "The 'Plastic Waste Management (Amendment) Rules, 2024' specifically targets which of the following?",
        options: ["Banning all plastic exports", "Inclusion of compostable and biodegradable plastics under the EPR framework", "Taxing plastic consumers directly", "Replacing plastic with wood in all furniture"],
        correctAnswer: 1,
        explanation: "The 2024 amendment clarifies the definitions and requirements for biodegradable and compostable plastics under Extended Producer Responsibility.",
        chapter: 5, subtopic: "Pollution Control", difficulty: "hard"
    },
    {
        id: "env-mcq-33",
        question: "Under the 'E-waste (Management) Rules, 2022', which of the following were included for the first time?",
        options: ["Smartphones", "Solar photo-voltaic panels and cells", "Refrigerators", "Televisions"],
        correctAnswer: 1,
        explanation: "The 2022 rules significantly expanded scope to include solar panels and cells, aiming for more comprehensive e-waste recycling.",
        chapter: 5, subtopic: "Waste Management", difficulty: "medium"
    },
    {
        id: "env-mcq-34",
        question: "What is the collective name for the 'Panchamrit' goals announced by India?",
        options: ["Five steps to traditional farming", "Five-fold strategy to achieve climate targets including Net Zero", "Five major rivers for cleaning", "Five cities with zero pollution"],
        correctAnswer: 1,
        explanation: "Panchamrit includes: 500GW non-fossil capacity, 50% energy from renewables, 1bn tonne carbon reduction, 45% carbon intensity reduction, and Net Zero 2070.",
        chapter: 3, subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-35",
        question: "The 'Global Methane Pledge', launched at COP26, aims to reduce global methane emissions by 30% by 2030. What is India's current position?",
        options: ["India is a founder member", "India has signed the pledge but not ratified", "India has not signed the pledge, citing concerns over agricultural impact", "India has surpassed the 30% target already"],
        correctAnswer: 2,
        explanation: "India hasn't joined the Global Methane Pledge as methane emissions in India are primarily from enteric fermentation (livestock) and rice cultivation, linked to rural livelihoods.",
        chapter: 3, subtopic: "International Alliances", difficulty: "hard"
    },
    {
        id: "env-mcq-36",
        question: "With reference to 'Stockholm Convention', what is 'POP'?",
        options: ["Particulate Organic Phosphorus", "Persistent Organic Pollutants", "Primary Ozone Precursor", "Passive Ocean Pollutant"],
        correctAnswer: 1,
        explanation: "Stockholm Convention deals with Persistent Organic Pollutants (POPs) that resist degradation and accumulate in the food chain.",
        chapter: 4, subtopic: "International Conventions", difficulty: "easy"
    },
    {
        id: "env-mcq-37",
        question: "Which of the following Indian sites are currently in the 'Montreux Record'?",
        options: ["Chilika Lake and Loktak Lake", "Keoladeo National Park and Loktak Lake", "Sundarbans and Chilika Lake", "Only Keoladeo National Park"],
        correctAnswer: 1,
        explanation: "Montreux Record is a register of Ramsar sites where changes in ecological character have occurred/are occurring. Currently: Keoladeo (Rajasthan) and Loktak (Manipur).",
        chapter: 4, subtopic: "Wetlands", difficulty: "medium"
    },
    {
        id: "env-mcq-38",
        question: "The 'Tiger Census 2022' report showed the highest number of tigers in which Indian state?",
        options: ["Karnataka", "Madhya Pradesh", "Uttarakhand", "Maharashtra"],
        correctAnswer: 1,
        explanation: "Madhya Pradesh retains its status as the 'Tiger State' with 785 tigers, followed by Karnataka.",
        chapter: 2, subtopic: "Wildlife Conservation", difficulty: "easy"
    },
    {
        id: "env-mcq-39",
        question: "What is 'Cryopreservation' in the context of biodiversity conservation?",
        options: ["Storing seeds at room temperature", "Ex-situ conservation of biological materials at ultra-low temperatures", "Protecting forests in cold mountainous regions", "A method of soil cooling"],
        correctAnswer: 1,
        explanation: "Cryopreservation uses liquid nitrogen (-196°C) to store seeds, pollen, or embryos for long-term conservation.",
        chapter: 2, subtopic: "Conservation Methods", difficulty: "medium"
    },
    {
        id: "env-mcq-40",
        question: "The 'Forest Conservation (Amendment) Act, 2023' exempts certain forest lands from the Act's purview if they are:",
        options: ["Within 100km of international borders for strategic projects", "In the central parts of cities", "Owned by private farmers", "Less than 5 hectares in area"],
        correctAnswer: 0,
        explanation: "The 2023 amendment exempts strategic linear projects of national importance/security within 100km of international borders from forest clearance.",
        chapter: 5, subtopic: "Forest Legislation", difficulty: "hard"
    },
    {
        id: "env-mcq-41",
        question: "What is 'Greenwashing'?",
        options: ["Washing industrial waste with green chemicals", "A deceptive practice where a company presents an environmentally responsible public image", "The natural process of forest recovery", "A method to clean algae from solar panels"],
        correctAnswer: 1,
        explanation: "Greenwashing is a misleading marketing tactic to make products/policies appear more environment-friendly than they actually are.",
        chapter: 4, subtopic: "Sustainability", difficulty: "easy"
    },
    {
        id: "env-mcq-42",
        question: "The 'Minamata Convention' is an international treaty designed to protect human health and environment from:",
        options: ["Lead", "Mercury", "Asbestos", "Cadmium"],
        correctAnswer: 1,
        explanation: "The Minamata Convention on Mercury (2013) addresses the use, emission, and trade of mercury and mercury compounds.",
        chapter: 4, subtopic: "Chemical Pollution", difficulty: "easy"
    },
    {
        id: "env-mcq-43",
        question: "In context of 'Biodiversity Heritage Sites' (BHS), who has the power to notify them in India?",
        options: ["Central Government only", "State Governments in consultation with local bodies", "IUCN", "Ministry of Earth Sciences"],
        correctAnswer: 1,
        explanation: "Under the Biological Diversity Act 2002, State Governments can notify areas of biodiversity importance as BHS.",
        chapter: 5, subtopic: "Biodiversity Governance", difficulty: "medium"
    },
    {
        id: "env-mcq-44",
        question: "The 'Snow Leopard' is the state animal of which Indian Union Territory?",
        options: ["Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry"],
        correctAnswer: 1,
        explanation: "Ladakh declared the Snow Leopard as its state animal in 2021. It's often called the 'Ghost of the Mountains'.",
        chapter: 2, subtopic: "Species in News", difficulty: "easy"
    },
    {
        id: "env-mcq-45",
        question: "What is 'Organic Farming' according to IFOAM standards?",
        options: ["Farming without any human intervention", "A production system that sustains soil health, ecosystems and people, relying on ecological processes", "Farming only in greenhouses", "A method that uses 50% fewer pesticides"],
        correctAnswer: 1,
        explanation: "Organic farming combines tradition, innovation and science to benefit the shared environment and promote fair relationships and a good quality of life for all involved.",
        chapter: 1, subtopic: "Agriculture", difficulty: "medium"
    },
    {
        id: "env-mcq-46",
        question: "The 'Basel Convention' primarily deals with:",
        options: ["Sea-level rise", "Control of transboundary movements of hazardous wastes and their disposal", "Protecting migratory species", "Regulating biotechnology patents"],
        correctAnswer: 1,
        explanation: "Basel Convention (1989) aims to reduce the movement of hazardous waste between nations, especially from developed to less developed countries.",
        chapter: 4, subtopic: "Waste Conventions", difficulty: "easy"
    },
    {
        id: "env-mcq-47",
        question: "Which Indian National Park is known for the recovery of the One-horned Rhinoceros?",
        options: ["Manas", "Kaziranga", "Kanha", "Dachigam"],
        correctAnswer: 1,
        explanation: "Kaziranga (Assam) is world-famous for its rhino population (~2600+), marking a major conservation success story.",
        chapter: 2, subtopic: "Protected Areas", difficulty: "easy"
    },
    {
        id: "env-mcq-48",
        question: "What is 'Bio-mining' in the context of waste management?",
        options: ["Mining in biological reserves", "The use of microorganisms for recovering metals from ores or industrial waste", "Storing trash in mines", "A method to extract oil from algae"],
        correctAnswer: 1,
        explanation: "Bio-mining (e.g., at legacy landfill sites) uses microbes to stabilize waste and recover recyclables and compost.",
        chapter: 1, subtopic: "Waste Technology", difficulty: "medium"
    },
    {
        id: "env-mcq-49",
        question: "The 'Environmental Performance Index' (EPI) is published by:",
        options: ["World Economic Forum", "Yale and Columbia Universities", "UNEP", "OECD"],
        correctAnswer: 1,
        explanation: "EPI is a biennial report published by Yale and Columbia researchers to rank countries on environmental health and ecosystem vitality.",
        chapter: 4, subtopic: "Reports", difficulty: "medium"
    },
    {
        id: "env-mcq-50",
        question: "Which of the following is a 'carbon sink'?",
        options: ["Oceans", "Peat bogs", "Growing forests", "All of the above"],
        correctAnswer: 3,
        explanation: "A carbon sink is any natural or artificial reservoir that absorbs more carbon than it releases. Oceans, soils, and forests are major sinks.",
        chapter: 1, subtopic: "Carbon Cycle", difficulty: "easy"
    },
    {
        id: "env-mcq-51",
        question: "The 'Bonn Challenge' is a global effort to bring 350 million hectares of deforested and degraded land into restoration by:",
        options: ["2020", "2030", "2050", "2070"],
        correctAnswer: 1,
        explanation: "Launched in 2011, the Bonn Challenge targets 150m hectares by 2020 and 350m hectares by 2030.",
        chapter: 4, subtopic: "Forest Restoration", difficulty: "medium"
    }
];
