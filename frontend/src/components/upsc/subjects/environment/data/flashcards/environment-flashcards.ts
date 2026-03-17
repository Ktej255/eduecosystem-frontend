export interface EnvironmentFlashcard {
    id: string;
    question: string;
    answer: string;
    moduleId: string;
    hint: string; // UPSC-specific hint or mnemonic
}

export const environmentFlashcards: EnvironmentFlashcard[] = [
    {
        id: "env-fc-01",
        question: "What is the '10% Rule' in Energy Flow?",
        answer: "Only 10% of energy is transferred from one trophic level to the next; 90% is lost as heat/respiration.",
        moduleId: "B5",
        hint: "Proposed by Raymond Lindeman. Remember: Energy flow is always unidirectional!"
    },
    {
        id: "env-fc-02",
        question: "Difference between 'Stenohaline' and 'Euryhaline' organisms?",
        answer: "Stenohaline: Narrow range of salinity tolerance. Euryhaline: Wide range of salinity tolerance.",
        moduleId: "B1",
        hint: " 'Steno' = Narrow, 'Eury' = Wide. This applies to temperature (Stenothermal) too."
    },
    {
        id: "env-fc-03",
        question: "What are 'Biodiversity Hotspots' criteria?",
        answer: "1. At least 1500 species of vascular plants as endemics. 2. Lost at least 70% of its original habitat.",
        moduleId: "B10",
        hint: "Concept by Norman Myers. India has 4: Western Ghats, Himalayas, Indo-Burma, Sundaland."
    },
    {
        id: "env-fc-04",
        question: "What is 'Eutrophication'?",
        answer: "Nutrient enrichment (Nitrogen/Phosphorus) in water leading to algal blooms and oxygen depletion (hypoxia).",
        moduleId: "B13",
        hint: "Commonly caused by fertilizer runoff. Leads to 'Dead Zones'."
    },
    {
        id: "env-fc-05",
        question: "Primary objective of the 'Montreal Protocol' (1987)?",
        answer: "To phase out Ozone Depleting Substances (ODS) like CFCs and Halons.",
        moduleId: "C3",
        hint: "Most successful environmental treaty. Kigali Amendment is its climate-linked update."
    },
    {
        id: "env-fc-06",
        question: "What is 'Biomagnification'?",
        answer: "The increase in concentration of a persistent toxin (DDT, Mercury) as it moves up the food chain.",
        moduleId: "B6",
        hint: "Requires the pollutant to be long-lived, mobile, and fat-soluble."
    },
    {
        id: "env-fc-07",
        question: "What are 'Ramsar Sites'?",
        answer: "Wetlands of international importance designated under the Ramsar Convention (1971).",
        moduleId: "B7",
        hint: "India has the highest number in South Asia. Montreux Record is for sites 'at risk'."
    },
    {
        id: "env-fc-08",
        question: "What is the 'Panchamrit' strategy?",
        answer: "India's 5-point climate action plan including 500GW non-fossil capacity and Net Zero by 2070.",
        moduleId: "C6",
        hint: "Announced at COP26 Glasgow. Key for UPSC Mains and Prelims 2024-26."
    },
    {
        id: "env-fc-09",
        question: "Difference between 'In-situ' and 'Ex-situ' conservation?",
        answer: "In-situ: Protecting in natural habitat (NP, Sanctuary). Ex-situ: Protecting outside (Zoo, Seed Bank).",
        moduleId: "B11",
        hint: "National Parks = In-situ; Botanical Gardens = Ex-situ."
    },
    {
        id: "env-fc-10",
        question: "What is 'Mission LiFE'?",
        answer: "Lifestyle for Environment - a global movement to promote mindful consumption instead of mindless utilization.",
        moduleId: "C6", substitute: "B16",
        hint: "Introduced by India at COP26. Focuses on individual behavior change."
    },
    {
        id: "env-fc-11",
        question: "What is 'Nitrogen Fixation'?",
        answer: "Process of converting atmospheric N2 into forms plants can use (Ammonia/Nitrates).",
        moduleId: "B8",
        hint: "Done by Rhizobium (symbiotic) and Azotobacter (free-living)."
    },
    {
        id: "env-fc-12",
        question: "What is a 'Keystone Species'?",
        answer: "A species that has a disproportionately large effect on its natural environment relative to its abundance.",
        moduleId: "B2",
        hint: "Example: Tigers in forests, Sea Otters in kelp forests."
    },
    {
        id: "env-fc-13",
        question: "What is 'Coral Bleaching'?",
        answer: "Expulsion of symbiotic zooxanthellae algae from corals due to thermal stress (warm water).",
        moduleId: "B7",
        hint: "Corals turn white but aren't dead yet—they can recover if temperatures drop quickly."
    },
    {
        id: "env-fc-14",
        question: "What is 'Carbon Neutrality' (Net Zero)?",
        answer: "Achieving a balance between carbon emitted and carbon removed from the atmosphere.",
        moduleId: "B16",
        hint: "Targets: EU/USA (2050), China (2060), India (2070)."
    },
    {
        id: "env-fc-15",
        question: "What is the 'Kyoto Protocol's' Clean Development Mechanism (CDM)?",
        answer: "Allows developed nations to meet emission targets by investing in green projects in developing nations.",
        moduleId: "C4",
        hint: "The only mechanism involving developing countries. Precursor to modern carbon markets."
    },
    {
        id: "env-fc-16",
        question: "What are 'Persistent Organic Pollutants' (POPs)?",
        answer: "Chemicals that remain in the environment, bioaccumulate, and pose risks to health (Stockholm Convention).",
        moduleId: "B13",
        hint: "Common examples: DDT, Dioxins, PCBs (The Dirty Dozen)."
    },
    {
        id: "env-fc-17",
        question: "What is 'Ecological Succession'?",
        answer: "The process of change in the species structure of an ecological community over time.",
        moduleId: "B2",
        hint: "Starts with Pioneer species and ends with a stable Climax community."
    },
    {
        id: "env-fc-18",
        question: "What is the 'Global Stocktake' (GST)?",
        answer: "A periodic assessment of collective progress towards reaching the purpose of the Paris Agreement.",
        moduleId: "C6",
        hint: "First GST concluded at COP28 UAE. It helps bridge the ambition gap."
    },
    {
        id: "env-fc-19",
        question: "What is 'Mangrove' adaptive feature 'Pneumatophores'?",
        answer: "Aerial roots that grow upward from the soil to breathe oxygen in anaerobic salt marshes.",
        moduleId: "B9",
        hint: "Essential for surviving in water-logged, saline conditions."
    },
    {
        id: "env-fc-20",
        question: "What is 'Bio-mining'?",
        answer: "The extraction of metals from ores or waste using microorganisms like bacteria.",
        moduleId: "B13",
        hint: "Environment-friendly alternative to traditional smelting. Used in legacy waste site cleanup."
    },
    {
        id: "env-fc-21",
        question: "What is 'CITES' (Washington Convention)?",
        answer: "An international agreement to ensure that trade in wild animals and plants does not threaten their survival.",
        moduleId: "B15",
        hint: "Appendices I (no trade), II (regulated), III (protected in one country)."
    },
    {
        id: "env-fc-22",
        question: "What is 'Deep Ocean Mission' (SAMUDRAYAAN)?",
        answer: "India's mission to explore deep sea for polymetallic nodules and ocean biodiversity at 6000m.",
        moduleId: "B7",
        hint: "Nodal Ministry: Ministry of Earth Sciences. Submersible: Matsya 6000."
    },
    {
        id: "env-fc-23",
        question: "What is 'Green Hydrogen'?",
        answer: "Hydrogen produced by electrolysis of water using renewable energy source (Solar/Wind).",
        moduleId: "B14",
        hint: "Produces zero carbon emissions. Key for decarbonizing heavy industry."
    },
    {
        id: "env-fc-24",
        question: "What is 'Ecological Footprint'?",
        answer: "Measure of how much land and sea area is needed to support a person's level of consumption.",
        moduleId: "B1",
        hint: "Global Footprint Network. If it exceeds Biocapacity, it is an 'Ecological Deficit'."
    },
    {
        id: "env-fc-25",
        question: "What is 'Nagoya Protocol' (2010)?",
        answer: "A protocol on 'Access to Genetic Resources and the Fair and Equitable Sharing of Benefits' (ABS).",
        moduleId: "B15",
        hint: "Part of the CBD. Prevents biopiracy of traditional knowledge."
    },
    {
        id: "env-fc-26",
        question: "What is 'Paris Agreement' (COP21) goal?",
        answer: "To keep global temperature rise well below 2°C, preferably limit it to 1.5°C above pre-industrial levels.",
        moduleId: "B16",
        hint: "Successor to Kyoto Protocol. Uses NDCs (Nationally Determined Contributions)."
    },
    {
        id: "env-fc-27",
        question: "What is 'Cryopreservation'?",
        answer: "Maintenance of biological samples at ultra-low temperatures (usually -196°C in liquid nitrogen).",
        moduleId: "B11",
        hint: "A form of Ex-situ conservation. Useful for seeds, embryos, and pollen."
    },
    {
        id: "env-fc-28",
        question: "What is 'Acid Rain' pH?",
        answer: "Rainwater with a pH less than 5.6.",
        moduleId: "B13",
        hint: "Caused by SO2 and NOx. Causes 'Stone Leprosy' in monuments like Taj Mahal."
    },
    {
        id: "env-fc-29",
        question: "What is 'Montreux Record'?",
        answer: "A register of wetland sites on the List of Wetlands of International Importance where changes in ecological character have occurred.",
        moduleId: "B7",
        hint: "Current Indian sites: Keoladeo NP and Loktak Lake."
    },
    {
        id: "env-fc-30",
        question: "What is 'International Solar Alliance' (ISA)?",
        answer: "Alliance of 'Sun-rich' countries (Suryaputras) to scale up solar energy usage, launched by India and France.",
        moduleId: "B14",
        hint: "Headquartered in Gurugram, India. One Sun One World One Grid (OSOWOG)."
    },
    {
        id: "env-fc-31",
        question: "What is 'Project Tiger' (1973)?",
        answer: "Centrally Sponsored Scheme for tiger conservation, marking the shift to 'umbrella species' approach.",
        moduleId: "B11",
        hint: "India has 55+ Tiger Reserves. Project Tiger is now part of Project Lion/Tiger combined."
    },
    {
        id: "env-fc-32",
        question: "What is 'Eco-Sensitive Zone' (ESZ)?",
        answer: "Buffer areas around Protected Areas (upto 10km) where development is regulated.",
        moduleId: "B15",
        hint: "Notified under the Environment Protection Act 1986. SC recently mandated 1km ESZ initially."
    },
    {
        id: "env-fc-33",
        question: "What is 'C4 Plants' advantage?",
        answer: "They are more efficient in carbon fixation and water use in hot, dry environments (e.g., Sugarcane, Maize).",
        moduleId: "B9",
        hint: "Adaptation to prevent photorespiration. Key for climate resilience."
    },
    {
        id: "env-fc-34",
        question: "What is 'Endemism'?",
        answer: "State of a species being native to a single defined geographic location (e.g., an island, state or nation).",
        moduleId: "B10",
        hint: "Western Ghats are famous for high endemism (e.g., Lion-tailed Macaque)."
    },
    {
        id: "env-fc-35",
        question: "What is 'Global Methane Pledge'?",
        answer: "Goal to reduce global methane emissions by at least 30% from 2020 levels by 2030.",
        moduleId: "C6",
        hint: "Led by EU/USA. India hasn't signed due to agricultural (livestock) impact concerns."
    },
    {
        id: "env-fc-36",
        question: "What is 'Bio-degradable waste' disposal method 'Composting'?",
        answer: "Biological decomposition of organic waste by bacteria/fungi under controlled aerobic conditions.",
        moduleId: "B13",
        hint: "Produces 'Humus'. Effective for reducing methane from landfills."
    },
    {
        id: "env-mc-37",
        question: "What is 'Bonn Challenge'?",
        answer: "A global effort to bring 150 million hectares of deforested and degraded land into restoration by 2020, and 350 million by 2030.",
        moduleId: "C5",
        hint: "India is a signatory. Targets land degradation neutrality (LDN)."
    },
    {
        id: "env-fc-38",
        question: "What is 'Red List' of IUCN?",
        answer: "Inventory of the global conservation status of biological species.",
        moduleId: "B11",
        hint: "Categories: Extinct, Critically Endangered (CR), Endangered (EN), Vulnerable (VU), etc."
    },
    {
        id: "env-fc-39",
        question: "What is 'Primary Successon' vs 'Secondary Succession'?",
        answer: "Primary: Starts in areas with no soil (lava, bare rock). Secondary: Starts where soil exists (after fire/flood).",
        moduleId: "B2",
        hint: "Secondary succession is always faster because soil is already present."
    },
    {
        id: "env-fc-40",
        question: "What is 'Ecoregion'?",
        answer: "A large area of land or water that contains a geographically distinct assemblage of natural communities.",
        moduleId: "B7",
        hint: "WWF 'Global 200' ecoregions are priority areas for conservation."
    },
    {
        id: "env-fc-41",
        question: "What is 'Biological Oxygen Demand' (BOD)?",
        answer: "Amount of dissolved oxygen needed by aerobic biological organisms to break down organic material in water.",
        moduleId: "B13",
        hint: "High BOD = High Pollution (Low Dissolved Oxygen). Indicator of sewage presence."
    },
    {
        id: "env-fc-42",
        question: "What is 'Carbon Sink'?",
        answer: "Anything that absorbs more carbon from the atmosphere than it releases (e.g., Forests, Oceans, Soil).",
        moduleId: "B12",
        hint: "Old-growth forests and peatlands are the most efficient natural carbon sinks."
    },
    {
        id: "env-fc-43",
        question: "What is 'E-Waste (Management) Rules 2022' biggest novelty?",
        answer: "Inclusion of Solar Photovoltaic panels/cells and stringent use of EPR certificates.",
        moduleId: "B13",
        hint: "EPR = Extended Producer Responsibility. Targeted recycling audits added."
    },
    {
        id: "env-fc-44",
        question: "What is 'Green Credit Program' (GCP)?",
        answer: "Market-based mechanism to incentivize voluntary environmental actions (like afforestation/water conservation) across various sectors.",
        moduleId: "B15",
        hint: "Launched under Mission LiFE. Different from Carbon Credits (GCP covers more than just CO2)."
    },
    {
        id: "env-fc-45",
        question: "What is 'Kunming-Montreal Global Biodiversity Framework' target '30x30'?",
        answer: "Protect at least 30% of global land and 30% of global oceans by 2030.",
        moduleId: "C6",
        hint: "Adopted at COP15 CBD. Crucial update to Aichi targets."
    },
    {
        id: "env-fc-46",
        question: "What is 'Net Primary Productivity' (NPP)?",
        answer: "NPP = GPP - Respiration. (Rate at which energy is stored as biomass by plants after their own metabolic use).",
        moduleId: "B5",
        hint: "Total energy available to the next trophic level (herbivores)."
    },
    {
        id: "env-fc-47",
        question: "What is 'Minamata Convention'?",
        answer: "Treaty to protect human health and environment from anthropogenic emissions and releases of Mercury.",
        moduleId: "B13",
        hint: "Named after Minamata, Japan (mercury poisoning tragedy). India is a party."
    },
    {
        id: "env-fc-48",
        question: "What is 'Biodiversity Heritage Site' (BHS)?",
        answer: "Well-defined areas that are unique, ecologically fragile ecosystems with high diversity/endemism.",
        moduleId: "B15",
        hint: "Notified by State Governments under Biodiversity Act 2002. (e.g. Majuli in Assam)."
    },
    {
        id: "env-fc-49",
        question: "What is 'Ecotoxicity'?",
        answer: "The study of the effects of toxic chemicals on biological organisms, especially at the population/ecosystem level.",
        moduleId: "B13",
        hint: "Lethal dose (LD50) is a common metric used in these studies."
    },
    {
        id: "env-fc-50",
        question: "What is 'Blue Economy' focus?",
        answer: "Sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving ocean ecosystem health.",
        moduleId: "B7",
        hint: "Covers fisheries, renewable energy, waste management, and shipping."
    },
    {
        id: "env-fc-51",
        question: "What is 'Great Indian Bustard' (GIB) status?",
        answer: "Critically Endangered (CR). State bird of Rajasthan. Facing extinction due to power line collisions.",
        moduleId: "B11",
        hint: "Recently Supreme Court intervened to protect 'Right to be free from adverse impacts of climate change'."
    }
];
