export interface WildlifeSanctuary {
    id: string;
    name: string;
    state: string;
    keySpecies: string[];
    description: string;
    coordinates: { x: number; y: number }; // Percentage 0-100
    significance: string;
}

export const WILDLIFE_SANCTUARIES_DATA: WildlifeSanctuary[] = [
    {
        id: 'kutch-bustard',
        name: "Kutch Desert WLS",
        state: "Gujarat",
        keySpecies: ["Great Indian Bustard", "Chinkara"],
        description: "One of the largest sanctuaries, known for the 'Flamingo City' in the Rann.",
        coordinates: { x: 12, y: 45 },
        significance: "Critical habitat for the critically endangered GIB."
    },
    {
        id: 'indian-wild-ass',
        name: "Indian Wild Ass Sanctuary",
        state: "Gujarat",
        keySpecies: ["Indian Wild Ass (Khur)"],
        description: "Located in the Little Rann of Kutch.",
        coordinates: { x: 15, y: 48 },
        significance: "Last refuge of the Indian Wild Ass."
    },
    {
        id: 'national-chambal',
        name: "National Chambal Sanctuary",
        state: "Tri-junction (MP, UP, Raj)",
        keySpecies: ["Gharial", "Red-crowned Roof Turtle", "Gangetic Dolphin"],
        description: "Riverine sanctuary along the Chambal River.",
        coordinates: { x: 35, y: 38 },
        significance: "Critical for Gharial conservation."
    },
    {
        id: 'chilika',
        name: "Nalabana Bird Sanctuary (Chilika)",
        state: "Odisha",
        keySpecies: ["Irrawaddy Dolphin", "Migratory Birds"],
        description: "Inside Chilika Lake, a Ramsar site.",
        coordinates: { x: 62, y: 58 },
        significance: "First Indian wetland of international importance."
    },
    {
        id: 'vikramshila',
        name: "Vikramshila Gangetic Dolphin WLS",
        state: "Bihar",
        keySpecies: ["Gangetic Dolphin"],
        description: "Stretch of Ganges river in Bhagalpur district.",
        coordinates: { x: 58, y: 38 },
        significance: "Only protected area for Gangetic Dolphins in Asia."
    },
    {
        id: 'bhitarkanika',
        name: "Bhitarkanika WLS",
        state: "Odisha",
        keySpecies: ["Saltwater Crocodile", "Olive Ridley Turtle"],
        description: "Second largest mangrove ecosystem in India.",
        coordinates: { x: 63, y: 56 },
        significance: "Famous for mass nesting (Arribada) of turtles."
    },
    {
        id: 'coringa',
        name: "Coringa WLS",
        state: "Andhra Pradesh",
        keySpecies: ["Fishing Cat", "Otter"],
        description: "Mangrove forest in the Godavari estuary.",
        coordinates: { x: 52, y: 72 },
        significance: "Home to the critically endangered White-backed Vulture."
    },
    {
        id: 'point-calimere',
        name: "Point Calimere WLS",
        state: "Tamil Nadu",
        keySpecies: ["Blackbuck", "Greater Flamingo"],
        description: "Coastal sanctuary known for migratory birds.",
        coordinates: { x: 42, y: 92 },
        significance: "Only place in South India with Blackbuck population."
    },
    {
        id: 'periyar',
        name: "Periyar WLS",
        state: "Kerala",
        keySpecies: ["Elephant", "Tiger"],
        description: "Located in the Cardamom Hills.",
        coordinates: { x: 32, y: 88 },
        significance: "Elephant Reserve and Tiger Reserve."
    },
    {
        id: 'wayanad',
        name: "Wayanad WLS",
        state: "Kerala",
        keySpecies: ["Elephant", "Gaur"],
        description: "Part of Nilgiri Biosphere Reserve.",
        coordinates: { x: 30, y: 85 },
        significance: "Rich biodiversity bordering Nagarhole and Bandipur."
    },
    {
        id: 'dandeli',
        name: "Dandeli WLS",
        state: "Karnataka",
        keySpecies: ["Black Panther", "Great Hornbill"],
        description: "Dense deciduous forests of Western Ghats.",
        coordinates: { x: 28, y: 75 },
        significance: "Birdwatcher's paradise."
    },
    {
        id: 'bhadra',
        name: "Bhadra WLS",
        state: "Karnataka",
        keySpecies: ["Tiger", "Leopard"],
        description: "Known for Jagara Giant Bamboo.",
        coordinates: { x: 30, y: 78 },
        significance: "Project Tiger reserve."
    },
    {
        id: 'kedarnath',
        name: "Kedarnath WLS",
        state: "Uttarakhand",
        keySpecies: ["Himalayan Musk Deer"],
        description: "High altitude sanctuary.",
        coordinates: { x: 40, y: 22 },
        significance: "Established primarily to protect Musk Deer."
    },
    {
        id: 'as kot',
        name: "Askot Musk Deer WLS",
        state: "Uttarakhand",
        keySpecies: ["Musk Deer", "Snow Leopard"],
        description: "Located in Pithoragarh.",
        coordinates: { x: 42, y: 20 },
        significance: "Habitat for endangered high-altitude fauna."
    },
    {
        id: 'trishna',
        name: "Trishna Bison WLS",
        state: "Tripura",
        keySpecies: ["Indian Gaur (Bison)"],
        description: "Famous for high density of Indian Gaur.",
        coordinates: { x: 86, y: 45 },
        significance: "Gene pool reserve for Indian Gaur."
    }
];
