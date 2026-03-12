export interface MineralSite {
    id: string;
    name: string; // e.g. "Chota Nagpur Plateau"
    state: string;
    minerals: string[]; // ["Coal", "Iron Ore"]
    description: string;
    coordinates: { x: number; y: number };
    type: 'Fuel' | 'Metallic' | 'Non-Metallic' | 'Atomic';
}

export const MINERALS_DATA: MineralSite[] = [
    // --- COAL ---
    {
        id: 'jharia',
        name: "Jharia Coalfield",
        state: "Jharkhand",
        minerals: ["Coal"],
        description: "One of the oldest and richest coalfields. Prime coking coal.",
        coordinates: { x: 65, y: 48 },
        type: 'Fuel'
    },
    {
        id: 'raniganj',
        name: "Raniganj Coalfield",
        state: "West Bengal",
        minerals: ["Coal"],
        description: "Birthplace of coal mining in India.",
        coordinates: { x: 68, y: 48 },
        type: 'Fuel'
    },
    {
        id: 'neyveli',
        name: "Neyveli Lignite",
        state: "Tamil Nadu",
        minerals: ["Lignite Coal"],
        description: "Largest lignite mines in India.",
        coordinates: { x: 42, y: 88 },
        type: 'Fuel'
    },

    // --- IRON ORE ---
    {
        id: 'bailadila',
        name: "Bailadila Range",
        state: "Chhattisgarh",
        minerals: ["Iron Ore"],
        description: "Mechanized mine, exports to Japan via Visakhapatnam.",
        coordinates: { x: 50, y: 65 },
        type: 'Metallic'
    },
    {
        id: 'kudremukh',
        name: "Kudremukh",
        state: "Karnataka",
        minerals: ["Iron Ore"],
        description: "Now closed due to ecological concerns. High grade ore.",
        coordinates: { x: 30, y: 80 },
        type: 'Metallic'
    },
    {
        id: 'mayurbhanj',
        name: "Mayurbhanj (Badampahar)",
        state: "Odisha",
        minerals: ["Iron Ore"],
        description: "Hematite iron ore.",
        coordinates: { x: 62, y: 52 },
        type: 'Metallic'
    },

    // --- BAUXITE ---
    {
        id: 'koraput',
        name: "Koraput",
        state: "Odisha",
        minerals: ["Bauxite"],
        description: "Largest bauxite producing state.",
        coordinates: { x: 55, y: 62 },
        type: 'Metallic'
    },

    // --- COPPER ---
    {
        id: 'khetri',
        name: "Khetri Copper Belt",
        state: "Rajasthan",
        minerals: ["Copper"],
        description: "Historical copper mining.",
        coordinates: { x: 32, y: 32 },
        type: 'Metallic'
    },
    {
        id: 'malanjkhand',
        name: "Malanjkhand",
        state: "Madhya Pradesh",
        minerals: ["Copper"],
        description: "Largest open cast copper mine.",
        coordinates: { x: 48, y: 55 },
        type: 'Metallic'
    },

    // --- OIL ---
    {
        id: 'digboi',
        name: "Digboi",
        state: "Assam",
        minerals: ["Petroleum"],
        description: "Oldest oil refinery in India.",
        coordinates: { x: 92, y: 32 },
        type: 'Fuel'
    },
    {
        id: 'mumbai-high',
        name: "Mumbai High",
        state: "Offshore (Maharashtra)",
        minerals: ["Petroleum"],
        description: "Largest oil production field.",
        coordinates: { x: 20, y: 60 }, // Offshore west
        type: 'Fuel'
    },

    // --- ATOMIC ---
    {
        id: 'jaduguda',
        name: "Jaduguda",
        state: "Jharkhand",
        minerals: ["Uranium"],
        description: "First uranium mine in India.",
        coordinates: { x: 66, y: 50 },
        type: 'Atomic'
    },
    {
        id: 'tummalapalle',
        name: "Tummalapalle",
        state: "Andhra Pradesh",
        minerals: ["Uranium"],
        description: "One of the largest uranium reserves.",
        coordinates: { x: 45, y: 82 },
        type: 'Atomic'
    },

    // --- OTHERS ---
    {
        id: 'panna-diamond',
        name: "Panna",
        state: "Madhya Pradesh",
        minerals: ["Diamond"],
        description: "Only active diamond mine in Asia.",
        coordinates: { x: 45, y: 40 },
        type: 'Non-Metallic'
    },
    {
        id: 'kolar',
        name: "Kolar Gold Fields",
        state: "Karnataka",
        minerals: ["Gold"],
        description: "Deepest gold mines (historical).",
        coordinates: { x: 38, y: 82 },
        type: 'Metallic'
    }
];
