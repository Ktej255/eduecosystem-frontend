// Environment Flashcards - Complete Collection
// Covers Ecology, Biodiversity, Climate Change, Pollution & Conservation

export interface EnvironmentFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

export const environmentFlashcards: EnvironmentFlashcard[] = [
    // Ecology & Ecosystems
    {
        id: "env-01",
        front: "What is an Ecosystem?",
        back: "A functional unit of nature where living organisms interact with each other and their physical environment. Components: Biotic (living) + Abiotic (non-living). Examples: Forest, Lake, Desert.",
        subject: "Environment",
        topic: "Ecology",
        tags: ["Ecosystem", "Ecology"],
        difficulty: "easy"
    },
    {
        id: "env-02",
        front: "What are the trophic levels in a food chain?",
        back: "1. Producers (plants), 2. Primary Consumers (herbivores), 3. Secondary Consumers (carnivores), 4. Tertiary Consumers (top predators), 5. Decomposers (fungi, bacteria). Energy decreases at each level (10% rule).",
        subject: "Environment",
        topic: "Ecology",
        tags: ["Food Chain", "Trophic Levels"],
        difficulty: "medium"
    },
    {
        id: "env-03",
        front: "What is a Biodiversity Hotspot?",
        back: "Area with high endemic species (at least 1,500 vascular plants as endemics) that has lost at least 70% of its original habitat. India has 4 hotspots: Himalayas, Indo-Burma, Western Ghats, Sundaland.",
        subject: "Environment",
        topic: "Biodiversity",
        tags: ["Biodiversity", "Hotspots"],
        difficulty: "medium"
    },
    {
        id: "env-04",
        front: "What are the IUCN Red List categories?",
        back: "From most to least threatened: Extinct (EX), Extinct in Wild (EW), Critically Endangered (CR), Endangered (EN), Vulnerable (VU), Near Threatened (NT), Least Concern (LC). Also: Data Deficient, Not Evaluated.",
        subject: "Environment",
        topic: "Biodiversity",
        tags: ["IUCN", "Conservation"],
        difficulty: "medium"
    },
    {
        id: "env-05",
        front: "What causes Global Warming?",
        back: "Greenhouse effect intensified by human emissions: CO2 (fossil fuels), CH4 (livestock, rice), N2O (fertilizers), CFCs. CO2 is largest contributor but CH4 has 25x warming potential.",
        subject: "Environment",
        topic: "Climate Change",
        tags: ["Global Warming", "GHG"],
        difficulty: "easy"
    },
    {
        id: "env-06",
        front: "What is the Paris Agreement?",
        back: "2015 UNFCCC agreement to limit global warming to 2°C (preferably 1.5°C) above pre-industrial levels. Countries submit NDCs (Nationally Determined Contributions). India committed to 45% emission intensity reduction by 2030.",
        subject: "Environment",
        topic: "Climate Change",
        tags: ["Paris Agreement", "UNFCCC"],
        difficulty: "medium"
    },
    {
        id: "env-07",
        front: "What is difference between Biosphere Reserve, National Park, and Wildlife Sanctuary?",
        back: "Biosphere Reserve: UNESCO, multiple zones, humans allowed. National Park: Highest protection, no human activity/grazing. Wildlife Sanctuary: Less strict, Chief Wildlife Warden can allow activities. Tiger Reserve can overlap multiple categories.",
        subject: "Environment",
        topic: "Conservation",
        tags: ["Protected Areas", "Conservation"],
        difficulty: "hard"
    },
    {
        id: "env-08",
        front: "What is Eutrophication?",
        back: "Excessive nutrient enrichment (nitrogen, phosphorus) in water bodies causing algal blooms. Leads to oxygen depletion (hypoxia), fish kills, and dead zones. Caused by fertilizer runoff and sewage.",
        subject: "Environment",
        topic: "Pollution",
        tags: ["Water Pollution", "Eutrophication"],
        difficulty: "medium"
    },
    {
        id: "env-09",
        front: "What is the Ramsar Convention?",
        back: "1971 treaty for conservation of wetlands (Ramsar, Iran). India has 75+ Ramsar sites. Criteria include unique biodiversity, water bird habitat, fish breeding. Chilika Lake was India's first Ramsar site.",
        subject: "Environment",
        topic: "Conservation",
        tags: ["Ramsar", "Wetlands"],
        difficulty: "easy"
    },
    {
        id: "env-10",
        front: "What is CITES?",
        back: "Convention on International Trade in Endangered Species (1973). Regulates wildlife trade through Appendices: I (ban), II (regulated), III (country-specific). Example: Indian Elephant in Appendix I.",
        subject: "Environment",
        topic: "Conservation",
        tags: ["CITES", "Wildlife Trade"],
        difficulty: "medium"
    },
    {
        id: "env-11",
        front: "What are the effects of Ozone Layer depletion?",
        back: "UV-B radiation increases: Skin cancer, cataracts, immune suppression in humans. Damages phytoplankton (base of marine food chain). Reduces crop yields. Montreal Protocol (1987) phased out CFCs.",
        subject: "Environment",
        topic: "Pollution",
        tags: ["Ozone", "Montreal Protocol"],
        difficulty: "medium"
    },
    {
        id: "env-12",
        front: "What is Coral Bleaching?",
        back: "Corals expel symbiotic algae (zooxanthellae) due to stress (heat, pollution). Turns white, may die if stress continues. Great Barrier Reef and Indian Ocean corals affected by warming seas.",
        subject: "Environment",
        topic: "Biodiversity",
        tags: ["Coral", "Climate Change"],
        difficulty: "medium"
    },
    {
        id: "env-13",
        front: "What is India's National Action Plan on Climate Change (NAPCC)?",
        back: "8 National Missions: Solar, Enhanced Energy Efficiency, Sustainable Habitat, Water, Sustaining Himalayan Ecosystem, Green India, Sustainable Agriculture, Strategic Knowledge for Climate Change.",
        subject: "Environment",
        topic: "Climate Change",
        tags: ["NAPCC", "India"],
        difficulty: "hard"
    },
    {
        id: "env-14",
        front: "What are Ecosystem Services?",
        back: "Benefits nature provides: Provisioning (food, water), Regulating (climate, flood control), Cultural (recreation, spiritual), Supporting (nutrient cycling, soil formation). Value estimated at trillions of dollars globally.",
        subject: "Environment",
        topic: "Ecology",
        tags: ["Ecosystem Services"],
        difficulty: "medium"
    },
    {
        id: "env-15",
        front: "What is Project Tiger?",
        back: "Launched 1973 to conserve tigers and their habitats. Currently 54 Tiger Reserves covering ~75,000 sq km. Tiger population: ~3,000 (2022). Uses core-buffer strategy. Managed by NTCA.",
        subject: "Environment",
        topic: "Conservation",
        tags: ["Project Tiger", "Wildlife"],
        difficulty: "easy"
    }
];
