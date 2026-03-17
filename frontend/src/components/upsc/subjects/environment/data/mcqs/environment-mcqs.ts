// Environment MCQs - Practice Questions
// UPSC Prelims-style questions on Ecology, Biodiversity, Climate Change, Conservation

export interface EnvironmentMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    moduleId: string; // Mapped to B1-B16 (Basics) or C1-C6 (Chronology)
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
        moduleId: "B10",
        subtopic: "Biodiversity Hotspots",
        difficulty: "easy"
    },
    {
        id: "env-mcq-02",
        question: "Which of the following is NOT a greenhouse gas?",
        options: ["Carbon dioxide", "Methane", "Nitrogen", "Nitrous oxide"],
        correctAnswer: 2,
        explanation: "Nitrogen (N2) is not a greenhouse gas. Major GHGs are CO2, CH4, N2O, CFCs, and water vapor.",
        moduleId: "B12",
        subtopic: "Greenhouse Effect",
        difficulty: "easy"
    },
    {
        id: "env-mcq-03",
        question: "Ramsar Convention is associated with protection of:",
        options: ["Forests", "Wetlands", "Deserts", "Mountains"],
        correctAnswer: 1,
        explanation: "Ramsar Convention (1971) is an international treaty for the conservation of wetlands. India has 75+ Ramsar sites.",
        moduleId: "B7",
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
        moduleId: "B5",
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
        moduleId: "B7",
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
        moduleId: "B15",
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
        moduleId: "B7",
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
        moduleId: "C3",
        subtopic: "Ozone Protection",
        difficulty: "easy"
    },
    {
        id: "env-mcq-09",
        question: "National Action Plan on Climate Change (NAPCC) has how many missions?",
        options: ["5", "6", "8", "10"],
        correctAnswer: 2,
        explanation: "NAPCC has 8 missions including Solar, Energy Efficiency, Sustainable Habitat, Water, Himalayan Ecosystem, Green India, Sustainable Agriculture, and Strategic Knowledge.",
        moduleId: "B16",
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
        moduleId: "B13",
        subtopic: "Ecosystem Health",
        difficulty: "medium"
    },
    {
        id: "env-mcq-11",
        question: "With reference to COP28 'UAE Consensus', consider the following:\n1. It called for 'transitioning away' from fossil fuels in energy systems.\n2. It included an agreement to triple global renewable energy capacity by 2030.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "COP28 made history by specifically naming fossil fuels and setting the goal to triple renewables and double energy efficiency.",
        moduleId: "C6", subtopic: "Climate Policy", difficulty: "hard"
    },
    {
        id: "env-mcq-12",
        question: "The 'Global Biofuel Alliance' (GBA), launched during India's G20 presidency, aims to:",
        options: ["Phase out all biofuels by 2050", "Accelerate the deployment of biofuels and set global standards", "Ban the use of corn for ethanol", "Promote electric vehicles only"],
        correctAnswer: 1,
        explanation: "GBA is a Multi-stakeholder alliance of governments and organizations aiming to expand world trade in biofuels.",
        moduleId: "B14", subtopic: "Renewable Energy", difficulty: "medium"
    },
    {
        id: "env-mcq-13",
        question: "What is 'MISHTI' initiative, announced in Union Budget 2023-24?",
        options: ["Mapping of soil health", "Mangrove Initiative for Shoreline Habitats & Tangible Incomes", "Management of Himalayan forests", "Incentive for solar irrigation"],
        correctAnswer: 1,
        explanation: "MISHTI aims at mangrove plantation along the coastline and on salt pan lands, utilizing MNREGA and CAMPA funds.",
        moduleId: "B7", subtopic: "Conservation Missions", difficulty: "medium"
    },
    {
        id: "env-mcq-14",
        question: "The 'International Big Cat Alliance' (IBCA) was launched by India to protect how many species of big cats?",
        options: ["5", "7", "9", "12"],
        correctAnswer: 1,
        explanation: "IBCA focuses on the conservation of seven big cats: Tiger, Lion, Leopard, Snow Leopard, Cheetah, Jaguar, and Puma.",
        moduleId: "B11", subtopic: "Wildlife Conservation", difficulty: "easy"
    },
    {
        id: "env-mcq-15",
        question: "The 'Kunming-Montreal Global Biodiversity Framework' targets the protection of at least what percentage of Earth's land and oceans by 2030?",
        options: ["10%", "20%", "30%", "50%"],
        correctAnswer: 2,
        explanation: "Known as the '30x30' goal, the framework aims to protect 30% of land, inland waters, and coastal/marine areas by 2030.",
        moduleId: "C6", subtopic: "International Conventions", difficulty: "medium"
    },
    {
        id: "env-mcq-16",
        question: "What is the primary target of the 'Amrit Dharohar' scheme?",
        options: ["Cleaning of heritage monuments", "Optimal use of wetlands and enhancement of biodiversity/eco-tourism", "Reviving ancient rivers", "Protecting traditional knowledge"],
        correctAnswer: 1,
        explanation: "Amrit Dharohar is a scheme to encourage optimal use of wetlands (Ramsar sites) over the next three years to improve biodiversity.",
        moduleId: "B7", subtopic: "Wetland Conservation", difficulty: "medium"
    },
    {
        id: "env-mcq-17",
        question: "The 'Wildlife Protection (Amendment) Act, 2022' reduced the number of schedules from six to:",
        options: ["Two", "Four", "Five", "Constant (remained six)"],
        correctAnswer: 1,
        explanation: "The 2022 amendment rationalized schedules to four: I (highest protection), II (lesser protection), III (Plant species), and IV (CITES species).",
        moduleId: "B15", subtopic: "Environmental Legislation", difficulty: "hard"
    },
    {
        id: "env-mcq-18",
        question: "With reference to 'Green Credits', the Green Credit Program (GCP) launched in India initially focuses on:",
        options: ["Industrial carbon emission only", "Water conservation and Afforestation", "Plastic waste management only", "Deep-sea habitat protection"],
        correctAnswer: 1,
        explanation: "GCP is an innovative market-based mechanism to incentivize voluntary environmental actions. Initial phases focus on water and afforestation.",
        moduleId: "B15", subtopic: "Incentive Mechanisms", difficulty: "medium"
    },
    {
        id: "env-mcq-19",
        question: "What is the 'High Seas Treaty' (BBNJ), adopted in 2023?",
        options: ["A treaty to tax international shipping", "A legally binding instrument for conservation beyond national jurisdiction", "A pact to ban all deep-sea fishing", "An agreement on maritime borders in the South China Sea"],
        correctAnswer: 1,
        explanation: "The BBNJ treaty (Biodiversity Beyond National Jurisdiction) aims to protect marine life in international waters, which cover nearly half the planet.",
        moduleId: "C6", subtopic: "International Law", difficulty: "hard"
    },
    {
        id: "env-mcq-20",
        question: "The 'LiFE - Lifestyle for Environment' movement, introduced by India, emphasizes:",
        options: ["Increasing industrial production", "Replacing all technology with manual labor", "Mindful and deliberate utilization of resources instead of mindless consumption", "Moving all human populations to cities"],
        correctAnswer: 2,
        explanation: "Mission LiFE aims to transition society from a 'throw-away' economy to a circular economy defined by mindful consumption.",
        moduleId: "C6", subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-21",
        question: "According to the 'World Air Quality Report', which pollutant is most commonly monitored as the primary indicator of health risk?",
        options: ["PM10", "PM2.5", "Sulphur Dioxide", "Lead"],
        correctAnswer: 1,
        explanation: "Fine particulate matter (PM2.5) is the most widely used metric for air quality monitoring due to its ability to penetrate deep into human lungs/bloodstream.",
        moduleId: "B13", subtopic: "Pollution", difficulty: "easy"
    },
    {
        id: "env-mcq-22",
        question: "Which Indian state became the first to have a 'Climate Change Mission' at the state level?",
        options: ["Gujarat", "Tamil Nadu", "Maharashtra", "Kerala"],
        correctAnswer: 1,
        explanation: "Tamil Nadu launched its own Climate Change Mission in 2022, aimed at achieving carbon neutrality and climate resilience.",
        moduleId: "B16", subtopic: "State Policies", difficulty: "medium"
    },
    {
        id: "env-mcq-23",
        question: "The 'Kigali Amendment' to the Montreal Protocol aims to phase down:",
        options: ["CFCs", "HCFCs", "HFCs", "Halons"],
        correctAnswer: 2,
        explanation: "Kigali Amendment targets Hydrofluorocarbons (HFCs), which replaced CFCs. HFCs don't deplete ozone but are potent greenhouse gases.",
        moduleId: "C3", subtopic: "Ozone & Climate", difficulty: "hard"
    },
    {
        id: "env-mcq-24",
        question: "What is 'Net Zero' target year announced by India at Glasgow (COP26)?",
        options: ["2047", "2050", "2060", "2070"],
        correctAnswer: 3,
        explanation: "India committed to reaching 'Net Zero' emissions by the year 2070 as part of its 'Panchamrit' goals.",
        moduleId: "C6", subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-25",
        question: "The 'Lidat' project, often in news, is related to:",
        options: ["Ancient forest mapping", "Satellite based LiDAR survey of forest density", "A new pollution sensor", "Mapping of biodiversity hotspots"],
        correctAnswer: 1,
        explanation: "LiDAR (Light Detection and Ranging) is used for high-resolution mapping of forest biomass and identifying habitat corridors.",
        moduleId: "B11", subtopic: "Conservation Tech", difficulty: "medium"
    },
    {
        id: "env-mcq-26",
        question: "With reference to 'Carbon Farming', consider the following:\n1. It involves agricultural methods aimed at sequestering atmospheric carbon in soil.\n2. It can reduce the use of synthetic fertilizers.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Carbon farming (e.g., no-till, cover crops) traps carbon in soil and enhances organic matter, reducing the need for chemical inputs.",
        moduleId: "B8", subtopic: "Ecology", difficulty: "medium"
    },
    {
        id: "env-mcq-27",
        question: "Which organization publishes the 'Living Planet Report'?",
        options: ["WWF", "IUCN", "UNEP", "Greenpeace"],
        correctAnswer: 0,
        explanation: "World Wide Fund for Nature (WWF) publishes the biennial Living Planet Report, tracking biodiversity and human impact.",
        moduleId: "B11", subtopic: "Reports", difficulty: "easy"
    },
    {
        id: "env-mcq-28",
        question: "What is 'Forest Landscape Restoration' (FLR)?",
        options: ["Planting trees in rows", "A process that regains ecological functionality and enhances human well-being across deforested landscapes", "Banning all human entry to forests", "Cutting old forests to plant new ones"],
        correctAnswer: 1,
        explanation: "FLR is a holistic approach focused on restoring forest health and its ecosystem services like water, soil, and fuel.",
        moduleId: "B7", subtopic: "Conservation", difficulty: "medium"
    },
    {
        id: "env-mcq-29",
        question: "The 'National Clean Air Programme' (NCAP) targets a reduction of PM concentration by what percentage by 2026?",
        options: ["10-15%", "20-30%", "40%", "50%"],
        correctAnswer: 2,
        explanation: "Initially 20-30% by 2024, the goal was revised in 2022 to a 40% reduction in PM levels in non-attainment cities by 2026.",
        moduleId: "B13", subtopic: "Pollution Control", difficulty: "hard"
    },
    {
        id: "env-mcq-30",
        question: "What is 'Eco-Sensitive Zone' (ESZ)?",
        options: ["The entire state boundary", "A buffer area around Protected Areas (National Parks/Sanctuaries)", "Industrial zones with zero pollution", "Coastal areas with no fishing"],
        correctAnswer: 1,
        explanation: "ESZs act as 'shock absorbers' to protected areas by regulating certain activities. Usually notified within 10km of boundaries.",
        moduleId: "B15", subtopic: "Environmental Policy", difficulty: "medium"
    },
    {
        id: "env-mcq-31",
        question: "With reference to the 'Great Nicobar Project', which of the following is an environmental concern?",
        options: ["Decline in tiger population", "Impact on the nesting sites of Great Nicobar Megapode and Leatherback turtles", "Melting of glaciers", "Desertification of the island"],
        correctAnswer: 1,
        explanation: "The mega-project on Great Nicobar has raised concerns regarding the loss of rainforests and critical nesting habitats for endemic species.",
        moduleId: "B7", subtopic: "Local Environment", difficulty: "medium"
    },
    {
        id: "env-mcq-32",
        question: "The 'Plastic Waste Management (Amendment) Rules, 2024' specifically targets which of the following?",
        options: ["Banning all plastic exports", "Inclusion of compostable and biodegradable plastics under the EPR framework", "Taxing plastic consumers directly", "Replacing plastic with wood in all furniture"],
        correctAnswer: 1,
        explanation: "The 2024 amendment clarifies the definitions and requirements for biodegradable and compostable plastics under Extended Producer Responsibility.",
        moduleId: "B13", subtopic: "Pollution Control", difficulty: "hard"
    },
    {
        id: "env-mcq-33",
        question: "Under the 'E-waste (Management) Rules, 2022', which of the following were included for the first time?",
        options: ["Smartphones", "Solar photo-voltaic panels and cells", "Refrigerators", "Televisions"],
        correctAnswer: 1,
        explanation: "The 2022 rules significantly expanded scope to include solar panels and cells, aiming for more comprehensive e-waste recycling.",
        moduleId: "B13", subtopic: "Waste Management", difficulty: "medium"
    },
    {
        id: "env-mcq-34",
        question: "What is the collective name for the 'Panchamrit' goals announced by India?",
        options: ["Five steps to traditional farming", "Five-fold strategy to achieve climate targets including Net Zero", "Five major rivers for cleaning", "Five cities with zero pollution"],
        correctAnswer: 1,
        explanation: "Panchamrit includes: 500GW non-fossil capacity, 50% energy from renewables, 1bn tonne carbon reduction, 45% carbon intensity reduction, and Net Zero 2070.",
        moduleId: "C6", subtopic: "Climate Policy", difficulty: "easy"
    },
    {
        id: "env-mcq-35",
        question: "The 'Global Methane Pledge', launched at COP26, aims to reduce global methane emissions by 30% by 2030. What is India's current position?",
        options: ["India is a founder member", "India has signed the pledge but not ratified", "India has not signed the pledge, citing concerns over agricultural impact", "India has surpassed the 30% target already"],
        correctAnswer: 2,
        explanation: "India hasn't joined the Global Methane Pledge as methane emissions in India are primarily from enteric fermentation (livestock) and rice cultivation, linked to rural livelihoods.",
        moduleId: "C6", subtopic: "International Alliances", difficulty: "hard"
    },
    {
        id: "env-mcq-36",
        question: "With reference to 'Stockholm Convention', what is 'POP'?",
        options: ["Particulate Organic Phosphorus", "Persistent Organic Pollutants", "Primary Ozone Precursor", "Passive Ocean Pollutant"],
        correctAnswer: 1,
        explanation: "Stockholm Convention deals with Persistent Organic Pollutants (POPs) that resist degradation and accumulate in the food chain.",
        moduleId: "B13", subtopic: "International Conventions", difficulty: "easy"
    },
    {
        id: "env-mcq-37",
        question: "Which of the following Indian sites are currently in the 'Montreux Record'?",
        options: ["Chilika Lake and Loktak Lake", "Keoladeo National Park and Loktak Lake", "Sundarbans and Chilika Lake", "Only Keoladeo National Park"],
        correctAnswer: 1,
        explanation: "Montreux Record is a register of Ramsar sites where changes in ecological character have occurred/are occurring. Currently: Keoladeo (Rajasthan) and Loktak (Manipur).",
        moduleId: "B7", subtopic: "Wetlands", difficulty: "medium"
    },
    {
        id: "env-mcq-38",
        question: "The 'Tiger Census 2022' report showed the highest number of tigers in which Indian state?",
        options: ["Karnataka", "Madhya Pradesh", "Uttarakhand", "Maharashtra"],
        correctAnswer: 1,
        explanation: "Madhya Pradesh retains its status as the 'Tiger State' with 785 tigers, followed by Karnataka.",
        moduleId: "B11", subtopic: "Wildlife Conservation", difficulty: "easy"
    },
    {
        id: "env-mcq-39",
        question: "What is 'Cryopreservation' in the context of biodiversity conservation?",
        options: ["Storing seeds at room temperature", "Ex-situ conservation of biological materials at ultra-low temperatures", "Protecting forests in cold mountainous regions", "A method of soil cooling"],
        correctAnswer: 1,
        explanation: "Cryopreservation uses liquid nitrogen (-196°C) to store seeds, pollen, or embryos for long-term conservation.",
        moduleId: "B11", subtopic: "Conservation Methods", difficulty: "medium"
    },
    {
        id: "env-mcq-40",
        question: "The 'Forest Conservation (Amendment) Act, 2023' exempts certain forest lands from the Act's purview if they are:",
        options: ["Within 100km of international borders for strategic projects", "In the central parts of cities", "Owned by private farmers", "Less than 5 hectares in area"],
        correctAnswer: 0,
        explanation: "The 2023 amendment exempts strategic linear projects of national importance/security within 100km of international borders from forest clearance.",
        moduleId: "B15", subtopic: "Forest Legislation", difficulty: "hard"
    },
    {
        id: "env-mcq-41",
        question: "What is 'Greenwashing'?",
        options: ["Washing industrial waste with green chemicals", "A deceptive practice where a company presents an environmentally responsible public image", "The natural process of forest recovery", "A method to clean algae from solar panels"],
        correctAnswer: 1,
        explanation: "Greenwashing is a misleading marketing tactic to make products/policies appear more environment-friendly than they actually are.",
        moduleId: "B16", subtopic: "Sustainability", difficulty: "easy"
    },
    {
        id: "env-mcq-42",
        question: "The 'Minamata Convention' is an international treaty designed to protect human health and environment from:",
        options: ["Lead", "Mercury", "Asbestos", "Cadmium"],
        correctAnswer: 1,
        explanation: "The Minamata Convention on Mercury (2013) addresses the use, emission, and trade of mercury and mercury compounds.",
        moduleId: "B13", subtopic: "Chemical Pollution", difficulty: "easy"
    },
    {
        id: "env-mcq-43",
        question: "In context of 'Biodiversity Heritage Sites' (BHS), who has the power to notify them in India?",
        options: ["Central Government only", "State Governments in consultation with local bodies", "IUCN", "Ministry of Earth Sciences"],
        correctAnswer: 1,
        explanation: "Under the Biological Diversity Act 2002, State Governments can notify areas of biodiversity importance as BHS.",
        moduleId: "B15", subtopic: "Biodiversity Governance", difficulty: "medium"
    },
    {
        id: "env-mcq-44",
        question: "The 'Snow Leopard' is the state animal of which Indian Union Territory?",
        options: ["Jammu & Kashmir", "Ladakh", "Chandigarh", "Puducherry"],
        correctAnswer: 1,
        explanation: "Ladakh declared the Snow Leopard as its state animal in 2021. It's often called the 'Ghost of the Mountains'.",
        moduleId: "B11", subtopic: "Species in News", difficulty: "easy"
    },
    {
        id: "env-mcq-45",
        question: "What is 'Organic Farming' according to IFOAM standards?",
        options: ["Farming without any human intervention", "A production system that sustains soil health, ecosystems and people, relying on ecological processes", "Farming only in greenhouses", "A method that uses 50% fewer pesticides"],
        correctAnswer: 1,
        explanation: "Organic farming combines tradition, innovation and science to benefit the shared environment and promote fair relationships and a good quality of life for all involved.",
        moduleId: "B1", subtopic: "Agriculture", difficulty: "medium"
    },
    {
        id: "env-mcq-46",
        question: "The 'Basel Convention' primarily deals with:",
        options: ["Sea-level rise", "Control of transboundary movements of hazardous wastes and their disposal", "Protecting migratory species", "Regulating biotechnology patents"],
        correctAnswer: 1,
        explanation: "Basel Convention (1989) aims to reduce the movement of hazardous waste between nations, especially from developed to less developed countries.",
        moduleId: "B13", subtopic: "Waste Conventions", difficulty: "easy"
    },
    {
        id: "env-mcq-47",
        question: "Which Indian National Park is known for the recovery of the One-horned Rhinoceros?",
        options: ["Manas", "Kaziranga", "Kanha", "Dachigam"],
        correctAnswer: 1,
        explanation: "Kaziranga (Assam) is world-famous for its rhino population (~2600+), marking a major conservation success story.",
        moduleId: "B11", subtopic: "Protected Areas", difficulty: "easy"
    },
    {
        id: "env-mcq-48",
        question: "What is 'Bio-mining' in the context of waste management?",
        options: ["Mining in biological reserves", "The use of microorganisms for recovering metals from ores or industrial waste", "Storing trash in mines", "A method to extract oil from algae"],
        correctAnswer: 1,
        explanation: "Bio-mining (e.g., at legacy landfill sites) uses microbes to stabilize waste and recover recyclables and compost.",
        moduleId: "B13", subtopic: "Waste Technology", difficulty: "medium"
    },
    {
        id: "env-mcq-49",
        question: "The 'Environmental Performance Index' (EPI) is published by:",
        options: ["World Economic Forum", "Yale and Columbia Universities", "UNEP", "OECD"],
        correctAnswer: 1,
        explanation: "EPI is a biennial report published by Yale and Columbia researchers to rank countries on environmental health and ecosystem vitality.",
        moduleId: "B16", subtopic: "Reports", difficulty: "medium"
    },
    {
        id: "env-mcq-50",
        question: "Which of the following is a 'carbon sink'?",
        options: ["Oceans", "Peat bogs", "Growing forests", "All of the above"],
        correctAnswer: 3,
        explanation: "A carbon sink is any natural or artificial reservoir that absorbs more carbon than it releases. Oceans, soils, and forests are major sinks.",
        moduleId: "B8", subtopic: "Carbon Cycle", difficulty: "easy"
    },
    {
        id: "env-mcq-51",
        question: "The 'Bonn Challenge' is a global effort to bring 350 million hectares of deforested and degraded land into restoration by:",
        options: ["2020", "2030", "2050", "2070"],
        correctAnswer: 1,
        explanation: "Launched in 2011, the Bonn Challenge targets 150m hectares by 2020 and 350m hectares by 2030.",
        moduleId: "C5", subtopic: "Forest Restoration", difficulty: "medium"
    },
    {
        id: "env-mcq-52",
        question: "With reference to the 'Great Indian Bustard' (GIB), consider the following statements:\n1. It is the state bird of Rajasthan.\n2. The Supreme Court recently prohibited the laying of overhead power lines in GIB habitats to prevent collisions.\n3. It is listed as 'Critically Endangered' in the IUCN Red List.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three statements are correct. GIB is extremely rare, with fewer than 150 left in the wild. Power lines are one of the biggest threats due to their poor frontal vision.",
        moduleId: "B11", subtopic: "Species Protection", difficulty: "hard"
    },
    {
        id: "env-mcq-53",
        question: "What is the primary objective of the 'PM-PRANAM' scheme announced in the Union Budget?",
        options: [
            "Protection of Mangroves along the coastline",
            "Incentivizing states to reduce the use of chemical fertilizers and promote alternative fertilizers",
            "Promoting organic farming in the North-East",
            "Restoration of ancient river basins"
        ],
        correctAnswer: 1,
        explanation: "PM-PRANAM (Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth) aims to reduce the subsidy burden on chemical fertilizers by promoting alternatives.",
        moduleId: "B13", subtopic: "Sustainable Agriculture", difficulty: "medium"
    },
    {
        id: "env-mcq-54",
        question: "The 'Carbon Border Adjustment Mechanism' (CBAM), often mentioned in the news, is a proposed policy by which of the following?",
        options: ["G20 nations", "The European Union", "World Economic Forum", "United States of America"],
        correctAnswer: 1,
        explanation: "CBAM is the EU's landmark tool to put a fair price on the carbon emitted during the production of carbon-intensive goods entering the EU, to prevent carbon leakage.",
        moduleId: "B16", subtopic: "Climate Trade", difficulty: "medium"
    },
    {
        id: "env-mcq-55",
        question: "With reference to 'Sovereign Green Bonds' issued by the Government of India, consider the following:\n1. The proceeds are used for funding public sector projects that reduce carbon intensity.\n2. Fossil-fuel based projects are specifically excluded from this funding.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are correct. Sovereign Green Bonds are part of market borrowing to fund green infrastructure. The framework excludes nuclear energy and large hydro (above 25MW) generally, and fossil-fuel based projects.",
        moduleId: "B16", subtopic: "Green Finance", difficulty: "hard"
    },
    {
        id: "env-mcq-56",
        question: "The 'National Green Hydrogen Mission' targets the production of how much green hydrogen per year by 2030?",
        options: ["1 Million Metric Tonne", "5 Million Metric Tonnes", "10 Million Metric Tonnes", "50 Million Metric Tonnes"],
        correctAnswer: 1,
        explanation: "The mission aims to build capabilities to produce at least 5 MMT of green hydrogen per annum by 2030, supported by roughly 125 GW associated renewable energy capacity.",
        moduleId: "B14", subtopic: "Renewable Energy", difficulty: "medium"
    },
    {
        id: "env-mcq-57",
        question: "Consider the following pairs of 'Invasive Species' and the ecosystems they are impacting in India:\n1. Lantana Camara — Western Ghats Forests\n2. Prosopis Juliflora — Banni Grasslands\n3. Water Hyacinth — Inland Waterways\nWhich of the pairs given above are correctly matched?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three pairs are correctly matched. Invasive species are a major driver of biodiversity loss in India, outcompeting native flora.",
        moduleId: "B10", subtopic: "Environmental Threats", difficulty: "medium"
    },
    {
        id: "env-mcq-58",
        question: "What is the 'Global Stocktake' (GST) in the context of the Paris Agreement?",
        options: [
            "A census of global wildlife species",
            "A periodic review of global progress towards the goals of the Paris Agreement",
            "A database of carbon credits traded internationally",
            "A registry of all national parks worldwide"
        ],
        correctAnswer: 1,
        explanation: "The Global Stocktake (GST) is a process for taking stock of the implementation of the Paris Agreement to assess the world's collective progress. The first GST concluded at COP28.",
        moduleId: "C6", subtopic: "International Governance", difficulty: "easy"
    },
    {
        id: "env-mcq-59",
        question: "The 'Battery Waste Management Rules, 2022' introduced the concept of 'Extended Producer Responsibility' (EPR). Which of the following is covered under these rules?",
        options: ["Electric vehicle batteries only", "Portable batteries and Industrial batteries only", "All types of batteries regardless of shape or chemistry", "Only lithium-ion batteries"],
        correctAnswer: 2,
        explanation: "The rules cover all types of batteries, including Electric Vehicle batteries, portable batteries, automotive batteries, and industrial batteries.",
        moduleId: "B13", subtopic: "Waste Management", difficulty: "medium"
    },
    {
        id: "env-mcq-60",
        question: "Which Indian organization/authority is responsible for determining the 'Eco-Sensitive Zones' around National Parks?",
        options: ["National Board for Wildlife", "Ministry of Environment, Forest and Climate Change", "State Forest Departments independently", "National Green Tribunal"],
        correctAnswer: 1,
        explanation: "ESZs are notified by the Ministry of Environment, Forest and Climate Change (MoEFCC) under the Environment Protection Act, 1986.",
        moduleId: "B15", subtopic: "Protected Areas", difficulty: "medium"
    },
    {
        id: "env-mcq-61",
        question: "What is 'Bio-degradable Plastic' according to Indian standards 2024?",
        options: [
            "Plastic that breaks into microplastics",
            "Plastic that undergoes degradation by biological processes yielding CO2, water, and biomass",
            "Any plastic mixed with 10% starch",
            "Recycled plastic used in road construction"
        ],
        correctAnswer: 1,
        explanation: "Biodegradable plastic must leave no toxic residue or microplastics. 2024 rules require stringent certification from CPCB for such claims.",
        moduleId: "B13", subtopic: "Pollution", difficulty: "hard"
    },
    {
        id: "env-mcq-62",
        question: "With reference to the 'Deep Ocean Mission', consider the following statements:\n1. It is a mission aimed at deep-sea mining for polymetallic nodules.\n2. The Ministry of Earth Sciences is the lead nodal ministry.\n3. It includes the development of a manned submersible (Matsya 6000).\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct. The mission targets 6000m depth to explore mineral wealth and ocean biodiversity. India is one of the few countries to have this capability.",
        moduleId: "B7", subtopic: "Ocean Ecosystems", difficulty: "hard"
    },
    {
        id: "env-mcq-63",
        question: "What is 'Biomagnification' in an ecosystem?",
        options: [
            "Increase in the number of organisms at higher trophic levels",
            "Increase in the concentration of persistent pollutants at higher trophic levels",
            "Increase in the energy level from lower to higher trophic levels",
            "The natural growth of biomass in a forest"
        ],
        correctAnswer: 1,
        explanation: "Biomagnification occurs when toxins (like DDT or Mercury) accumulate in organisms and become more concentrated as one moves up the food chain.",
        moduleId: "B6", subtopic: "Food Web dynamics", difficulty: "medium"
    },
    {
        id: "env-mcq-64",
        question: "With reference to 'Vultures' in India, consider the following:\n1. The drug 'Diclofenac' was the primary cause of their mass decline.\n2. Vulture Conservation Breeding Centres (VCBC) have been established in various states.\n3. Vultures are considered the 'scavengers' of the ecosystem and prevent the spread of diseases from carcasses.\nWhich is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct. Diclofenac (an anti-inflammatory drug for cattle) caused kidney failure in vultures. Conservation efforts are now successfully reintroducing them back into the wild.",
        moduleId: "B11", subtopic: "Species Protection", difficulty: "medium"
    },
    {
        id: "env-mcq-65",
        question: "The 'Nitrogen Cycle' is a gaseous cycle. Which of the following bacteria is responsible for 'Denitrification'?",
        options: ["Rhizobium", "Nitrosomonas", "Pseudomonas", "Nitrobacter"],
        correctAnswer: 2,
        explanation: "Pseudomonas and Thiobacillus are responsible for denitrification (converting nitrates back into atmospheric nitrogen). Rhizobium is for nitrogen fixation.",
        moduleId: "B8", subtopic: "Nutrient Cycles", difficulty: "hard"
    },
    {
        id: "env-mcq-66",
        question: "Which of the following is an 'In-situ' conservation method?",
        options: ["Botanical Gardens", "Zoological Parks", "Biosphere Reserves", "Seed Banks"],
        correctAnswer: 2,
        explanation: "In-situ means conservation 'on-site' in the natural habitat. Biosphere Reserves, National Parks, and Sanctuaries are In-situ. Botanical Gardens are Ex-situ.",
        moduleId: "B11", subtopic: "Conservation Types", difficulty: "easy"
    },
    {
        id: "env-mcq-67",
        question: "What is 'Blue Carbon'?",
        options: [
            "Carbon stored in the deep ocean floor only",
            "Carbon sequestered and stored in coastal and marine ecosystems (mangroves, seagrasses)",
            "Carbon emissions from shipping industries",
            "A type of coal with low ash content"
        ],
        correctAnswer: 1,
        explanation: "Blue carbon is the carbon captured by the world's ocean and coastal ecosystems, particularly mangroves and salt marshes which store more carbon per unit area than land forests.",
        moduleId: "B7", subtopic: "Ocean Ecosystems", difficulty: "medium"
    },
    {
        id: "env-mcq-68",
        question: "The 'Aichi Biodiversity Targets' were associated with which international convention?",
        options: ["UNFCCC", "UNCBD", "UNCCD", "CITES"],
        correctAnswer: 1,
        explanation: "Aichi Targets (2011-2020) were part of the Strategic Plan for Biodiversity under the Convention on Biological Diversity (UNCBD). Now replaced by the Kunming-Montreal Framework.",
        moduleId: "C5", subtopic: "International Conventions", difficulty: "medium"
    },
    {
        id: "env-mcq-69",
        question: "Which Indian state has the highest percentage of forest cover in terms of geographical area (as per ISFR 2021)?",
        options: ["Madhya Pradesh", "Mizoram", "Arunachal Pradesh", "Chhattisgarh"],
        correctAnswer: 1,
        explanation: "Mizoram leads in terms of 'percentage cover' (~84%), while Madhya Pradesh leads in 'total area'.",
        moduleId: "B12", subtopic: "Forest Data", difficulty: "easy"
    },
    {
        id: "env-mcq-70",
        question: "What is an 'Ecological Footprint'?",
        options: [
            "The physical tracks left by animals",
            "The amount of land and water area required to support a given human population indefinitely",
            "The height of a forest canopy",
            "The depth of roots in an ecosystem"
        ],
        correctAnswer: 1,
        explanation: "It measures how much of the regenerative capacity of the Earth is used by human activities. It contrasts with 'Biocapacity'.",
        moduleId: "B1", subtopic: "Ecology Basics", difficulty: "easy"
    },
    {
        id: "env-mcq-71",
        question: "Under the 'Montreal Protocol', what are 'Ozone Depleting Substances' (ODS)?",
        options: ["Carbon dioxide only", "CFCs, Halons, and Methyl bromide", "Methane and Nitrous oxide", "Sulphur dioxide and Lead"],
        correctAnswer: 1,
        explanation: "ODS include Chlorofluorocarbons (CFCs), Hydrochlorofluorocarbons (HCFCs), Halons, and Methyl bromide. Standard CO2 is not an ODS.",
        moduleId: "C3", subtopic: "Ozone Protection", difficulty: "easy"
    },
    {
        id: "env-mcq-72",
        question: "What is 'Trophic Level 1' in a typical food chain?",
        options: ["Herbivores", "Carnivores", "Producers (Autotrophs)", "Decomposers"],
        correctAnswer: 2,
        explanation: "Trophic level 1 is always the Producers (plants, algae). Trophic level 2 is primary consumers (herbivores).",
        moduleId: "B5", subtopic: "Trophic Levels", difficulty: "easy"
    },
    {
        id: "env-mcq-73",
        question: "The 'Kigali Amendment' (2016) specifically targets the phase-down of which chemicals?",
        options: ["CO2", "HFCs", "SOx", "NOx"],
        correctAnswer: 1,
        explanation: "Hydrofluorocarbons (HFCs) are powerful greenhouse gases. Although they don't deplete ozone, they contribute heavily to global warming.",
        moduleId: "C3", subtopic: "Ozone & Climate", difficulty: "medium"
    },
    {
        id: "env-mcq-74",
        question: "Which of the following is the 'Key Biodiversity Area' (KBA) criteria?",
        options: [
            "Presence of threatened species",
            "Geographic restricted species",
            "Ecological integrity and biological processes",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "KBAs are sites that contribute significantly to the global persistence of biodiversity across terrestrial, freshwater and marine ecosystems.",
        moduleId: "B11", subtopic: "Protected Areas", difficulty: "hard"
    },
    {
        id: "env-mcq-75",
        question: "According to the 'Solid Waste Management Rules 2016', segregation of waste at source is the responsibility of:",
        options: ["The Municipal Corporation", "The Waste Generator", "The Rag-pickers", "The State Government"],
        correctAnswer: 1,
        explanation: "The rules mandate that every waste generator shall segregate and store the waste in three separate streams, namely biodegradable, non-biodegradable and domestic hazardous.",
        moduleId: "B13", subtopic: "Waste Management", difficulty: "easy"
    },
    {
        id: "env-mcq-76",
        question: "With reference to 'Peatlands', consider following:\n1. They are the largest terrestrial organic carbon sink.\n2. They cover more land than all forests combined.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Peatlands cover only 3% of the global land area but store twice as much carbon as all the world’s forests. They are crucial for climate mitigation.",
        moduleId: "B12", subtopic: "Carbon Cycles", difficulty: "hard"
    },
    {
        id: "env-mcq-77",
        question: "With reference to 'Ecological Succession', what is a 'Pioneer Species'?",
        options: [
            "The largest trees in a climax forest",
            "The first species to colonize a barren area (like Lichens on rock)",
            "Species that appear only after a forest fire",
            "Species that have gone extinct locally"
        ],
        correctAnswer: 1,
        explanation: "Pioneer species are the first to inhabit a previously uninhabited area. In primary succession on rocks, lichens are usually the pioneer species.",
        moduleId: "B2", subtopic: "Ecological Succession", difficulty: "easy"
    },
    {
        id: "env-mcq-78",
        question: "The 'Kyoto Protocol' introduced 'Flexible Mechanisms'. Which of the following is NOT one of them?",
        options: ["Clean Development Mechanism (CDM)", "Joint Implementation (JI)", "International Emissions Trading", "Green Climate Fund (GCF)"],
        correctAnswer: 3,
        explanation: "GCF is a financial mechanism under the UNFCCC, but not one of the three specific 'flexible market mechanisms' defined by the Kyoto Protocol.",
        moduleId: "C4", subtopic: "Kyoto Protocol", difficulty: "medium"
    },
    {
        id: "env-mcq-79",
        question: "What is 'Sustainable Aviation Fuel' (SAF)?",
        options: [
            "Fuel made from petroleum with extra additives",
            "Biofuel produced from sustainable feedstocks (like used cooking oil or agricultural waste) to reduce flight emissions",
            "Hydrogen used in rockets only",
            "Solar power used for drones"
        ],
        correctAnswer: 1,
        explanation: "SAF can reduce life-cycle carbon emissions by up to 80% compared to conventional jet fuel. It's a key part of the 'net-zero' aviation goal.",
        moduleId: "B14", subtopic: "Green Energy", difficulty: "medium"
    },
    {
        id: "env-mcq-80",
        question: "With reference to the 'Wild Life (Protection) Act, 1972', which of the following is the 'National Board for Wild Life' (NBWL) chaired by?",
        options: ["The Minister of Environment", "The Prime Minister", "The Secretary of MoEFCC", "The Chief Wildlife Warden"],
        correctAnswer: 1,
        explanation: "NBWL is a statutory organization chaired by the Prime Minister. It serves as an apex body for wildlife conservation matters.",
        moduleId: "B15", subtopic: "Wildlife Governance", difficulty: "medium"
    },
    {
        id: "env-mcq-81",
        question: "What is an 'Estuary'?",
        options: [
            "A freshwater lake in high altitudes",
            "The area where a river meets the sea, mixing fresh and salt water",
            "A desert oasis",
            "The deep floor of the Indian Ocean"
        ],
        correctAnswer: 1,
        explanation: "Estuaries are highly productive transitional zones (ecotones) characterized by high nutrient levels and diverse biological activity.",
        moduleId: "B7", subtopic: "Aquatic Ecosystems", difficulty: "easy"
    },
    {
        id: "env-mcq-82",
        question: "The 'Stockholm Convention' (1972) led to the creation of which major international organization?",
        options: ["WWF", "UNEP", "IUCN", "UNFCCC"],
        correctAnswer: 1,
        explanation: "The 1972 UN Conference on the Human Environment (Stockholm) led to the establishment of the United Nations Environment Programme (UNEP).",
        moduleId: "C2", subtopic: "International History", difficulty: "easy"
    },
    {
        id: "env-mcq-83",
        question: "With reference to 'Carbon Capture and Storage' (CCS), what does it involve?",
        options: [
            "Planting more trees only",
            "Capturing CO2 emissions from industrial sources and injecting them into underground geological formations",
            "Replacing all cars with bicycles",
            "Using carbon to make better plastics"
        ],
        correctAnswer: 1,
        explanation: "CCS targets 'hard-to-abate' industries like steel and cement by preventing large amounts of CO2 from reaching the atmosphere.",
        moduleId: "B16", subtopic: "Climate Technology", difficulty: "medium"
    },
    {
        id: "env-mcq-84",
        question: "What is the '10-Year Framework of Programmes' (10YFP) under Rio+20?",
        options: [
            "A plan to double global population",
            "A global commitment to accelerate the shift towards Sustainable Consumption and Production (SCP)",
            "A plan to ban all plastic by 2030",
            "A 10-year goal for deep-sea exploration"
        ],
        correctAnswer: 1,
        explanation: "10YFP aims to decouple economic growth from environmental degradation by changing how products are produced and consumed.",
        moduleId: "C4", subtopic: "International Conventions", difficulty: "hard"
    },
    {
        id: "env-mcq-85",
        question: "In context of 'Nitrogen Fixation', which plants have a symbiotic relationship with Rhizobium bacteria?",
        options: ["Cereal crops (Rice, Wheat)", "Legumes (Peas, Beans, Lentils)", "Citrus fruits", "Coniferous trees"],
        correctAnswer: 1,
        explanation: "Leguminous plants have root nodules where Rhizobium bacteria live, fixing atmospheric nitrogen for the plant in exchange for carbohydrates.",
        moduleId: "B8", subtopic: "Nutrient Cycles", difficulty: "easy"
    },
    {
        id: "env-mcq-86",
        question: "Which of the following is considered the 'Lungs of the World' due to its high oxygen production and biodiversity?",
        options: ["Taiga Forests of Russia", "Amazon Rain Forest", "Sundarbans Mangroves", "African Savannah"],
        correctAnswer: 1,
        explanation: "The Amazon produces a significant amount of the world's oxygen and acts as a massive carbon sink, though it's currently under threat from deforestation.",
        moduleId: "B7", subtopic: "Terrestrial Ecosystems", difficulty: "easy"
    },
    {
        id: "env-mcq-87",
        question: "What is 'Ecotone'?",
        options: [
            "A zone of transition between two different ecosystems",
            "A device to measure noise pollution",
            "A type of soil found in deserts",
            "The top layer of a lake"
        ],
        correctAnswer: 0,
        explanation: "Ecotones (like mangroves, estuaries, or grasslands between forest and desert) often have high species richness and the 'Edge Effect'.",
        moduleId: "B1", subtopic: "Ecology Basics", difficulty: "medium"
    },
    {
        id: "env-mcq-88",
        question: "The 'Great Green Wall' initiative is being implemented in which region?",
        options: ["North China", "Sub-Saharan Africa (Sahel)", "Northern Australia", "The Amazon Basin"],
        correctAnswer: 1,
        explanation: "The Great Green Wall aims to restore 100 million hectares of currently degraded land across Africa's Sahel region to combat desertification.",
        moduleId: "B10", subtopic: "Environmental Restoration", difficulty: "medium"
    },
    {
        id: "env-mcq-89",
        question: "With reference to 'Blue Economy 2.0' in India, it focuses on:",
        options: [
            "Increasing fish exports only",
            "Climate resilient activities, restoration of coastal areas, and sustainable mariculture",
            "Building more ports only",
            "Exclusive deep-sea oil exploration"
        ],
        correctAnswer: 1,
        explanation: "Blue Economy 2.0 emphasizes the sustainable use of ocean resources for economic growth, while preserving the health of ocean ecosystems.",
        moduleId: "B7", subtopic: "Ocean Governance", difficulty: "medium"
    },
    {
        id: "env-mcq-90",
        question: "The 'Environment Protection Act, 1986' was enacted in the aftermath of which major tragedy?",
        options: ["Chernobyl Disaster", "Bhopal Gas Tragedy", "Exxon Valdez Oil Spill", "Fukushima Disaster"],
        correctAnswer: 1,
        explanation: "The Bhopal Gas Tragedy (1984) highlighted the need for comprehensive environmental legislation, leading to the enactment of the EPA 1986.",
        moduleId: "B15", subtopic: "Environmental History", difficulty: "easy"
    },
    {
        id: "env-mcq-91",
        question: "What is 'Primary Productivity' in an ecosystem?",
        options: [
            "The rate at which energy is stored by producers",
            "The total biomass of consumers",
            "The amount of water lost to evaporation",
            "The speed of nutrient cycling"
        ],
        correctAnswer: 0,
        explanation: "Primary productivity is the rate at which organic matter is created by photosynthesis. It's the foundation of almost all food webs.",
        moduleId: "B5", subtopic: "Ecosystem Energy", difficulty: "medium"
    },
    {
        id: "env-mcq-92",
        question: "Which of the following is an example of an 'Invasive Alien Species' that has significantly impacted Indian wetlands?",
        options: ["Lotus", "Water Hyacinth (Eichhornia crassipes)", "Mangrove", "Seagrass"],
        correctAnswer: 1,
        explanation: "Water Hyacinth, often called 'Terror of Bengal', grows rapidly and depletes oxygen from water bodies, killing fish and other aquatic life.",
        moduleId: "B10", subtopic: "Environmental Threats", difficulty: "easy"
    },
    {
        id: "env-mcq-93",
        question: "The 'Glasgow Leaders' Declaration on Forests and Land Use' aims to halt and reverse forest loss by:",
        options: ["2025", "2030", "2050", "2070"],
        correctAnswer: 1,
        explanation: "Over 140 countries representing 90% of world's forests pledged at COP26 to halt and reverse deforestation and land degradation by 2030.",
        moduleId: "C6", subtopic: "Forest Governance", difficulty: "medium"
    },
    {
        id: "env-mcq-94",
        question: "With reference to 'Renewable Energy Certificates' (RECs) in India, consider following:\n1. They are a market-based instrument to promote renewable energy.\n2. One REC represents one Megawatt-hour (MWh) of electricity generated from renewable sources.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "RECs help utilities meet their Renewable Purchase Obligations (RPO) by buying credits from generators who produce green energy.",
        moduleId: "B14", subtopic: "Energy Policy", difficulty: "hard"
    },
    {
        id: "env-mcq-95",
        question: "What is 'Carbon Intensity'?",
        options: [
            "The total amount of carbon in a forest",
            "The amount of carbon emissions per unit of GDP",
            "The density of carbon in the atmosphere",
            "The temperature increase caused by carbon"
        ],
        correctAnswer: 1,
        explanation: "India's NDC targets a 45% reduction in Carbon Intensity of its GDP by 2030 compared to 2005 levels.",
        moduleId: "B16", subtopic: "Climate Metrics", difficulty: "medium"
    },
    {
        id: "env-mcq-96",
        question: "The 'World Wildlife Day' is celebrated on March 3 to commemorate the signing of which convention?",
        options: ["CBD", "CITES", "Ramsar", "Bonn"],
        correctAnswer: 1,
        explanation: "CITES was signed on March 3, 1973. The day is now celebrated as World Wildlife Day to raise awareness of world's wild fauna and flora.",
        moduleId: "C2", subtopic: "International History", difficulty: "easy"
    },
    {
        id: "env-mcq-97",
        question: "Which of the following pollutants is primarily responsible for 'Acid Rain'?",
        options: ["Carbon dioxide and Methane", "Sulphur dioxide and Nitrogen oxides", "CFCs and Ozone", "Lead and Mercury"],
        correctAnswer: 1,
        explanation: "SO2 and NOx react with water vapor in the atmosphere to form sulfuric and nitric acids, which fall as acid rain, damaging soil and heritage buildings (like Taj Mahal).",
        moduleId: "B13", subtopic: "Atmospheric Pollution", difficulty: "easy"
    },
    {
        id: "env-mcq-98",
        question: "What is 'E-Waste' according to the latest rules?",
        options: [
            "Only discarded computers and phones",
            "Any electrical and electronic equipment that is discarded as waste",
            "Only industrial machinery",
            "Disposable batteries only"
        ],
        correctAnswer: 1,
        explanation: "The scope has expanded significantly to include almost all discarded electronic/electrical items, including solar panels (since 2022).",
        moduleId: "B13", subtopic: "Waste Management", difficulty: "easy"
    },
    {
        id: "env-mcq-99",
        question: "With reference to 'Geothermal Energy', it is derived from:",
        options: ["Sunlight", "Heat from the Earth's interior", "Wind currents", "Tidal waves"],
        correctAnswer: 1,
        explanation: "Geothermal energy uses steam or hot water from underground to generate power. India's first project is in Puga Valley, Ladakh.",
        moduleId: "B14", subtopic: "Renewable Energy", difficulty: "easy"
    },
    {
        id: "env-mcq-100",
        question: "The 'National Biodiversity Authority' (NBA) of India is headquartered in:",
        options: ["New Delhi", "Bengaluru", "Chennai", "Kolkata"],
        correctAnswer: 2,
        explanation: "NBA was established in 2003 in Chennai to implement India’s Biological Diversity Act, 2002.",
        moduleId: "B15", subtopic: "Biodiversity Governance", difficulty: "easy"
    },
    {
        id: "env-mcq-101",
        question: "What is 'Net Zero' emission status?",
        options: [
            "Zero emissions produced by a country",
            "A balance where greenhouse gases produced are equal to the amount removed from the atmosphere",
            "Banning all industries",
            "Only using electric cars"
        ],
        correctAnswer: 1,
        explanation: "Net zero (or carbon neutrality) doesn't mean zero emissions, but that any remaining emissions are offset by removal through sinks (forests, CCS).",
        moduleId: "B16", subtopic: "Climate Targets", difficulty: "medium"
    }
];
