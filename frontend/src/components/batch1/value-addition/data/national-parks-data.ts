export interface NationalPark {
    id: string;
    name: string;
    state: string;
    keySpecies: string[]; // Flora & Fauna
    river?: string;
    hills?: string;
    description: string;
    coordinates: { x: number; y: number }; // Percentage from Top-Left (0-100) for simplified map plotting
    probability: 'High' | 'Medium' | 'Low';
}

// Coordinates are approximated for a standard vertical India rendering
export const NATIONAL_PARKS_DATA: NationalPark[] = [
    // --- NORTH ---
    {
        id: 'hemis',
        name: "Hemis National Park",
        state: "Ladakh",
        keySpecies: ["Snow Leopard", "Bharal (Blue Sheep)", "Shapu"],
        river: "Indus",
        description: "Largest National Park in India. High altitude desert.",
        coordinates: { x: 35, y: 10 },
        probability: 'High'
    },
    {
        id: 'dachigam',
        name: "Dachigam National Park",
        state: "Jammu & Kashmir",
        keySpecies: ["Hangul (Kashmir Stag)"],
        hills: "Zabarwan Range",
        description: "Only habitat of the Hangul.",
        coordinates: { x: 32, y: 15 },
        probability: 'High'
    },
    {
        id: 'jim-corbett',
        name: "Jim Corbett National Park",
        state: "Uttarakhand",
        keySpecies: ["Bengal Tiger", "Asian Elephant"],
        river: "Ramganga",
        description: "First National Park of India (Hailey).",
        coordinates: { x: 40, y: 25 },
        probability: 'High'
    },
    {
        id: 'great-himalayan',
        name: "Great Himalayan National Park",
        state: "Himachal Pradesh",
        keySpecies: ["Himalayan Tahr", "Musk Deer", "Snow Leopard"],
        river: "Tirthan",
        description: "UNESCO World Heritage Site.",
        coordinates: { x: 38, y: 20 },
        probability: 'Medium'
    },

    // --- NORTH EAST ---
    {
        id: 'kaziranga',
        name: "Kaziranga National Park",
        state: "Assam",
        keySpecies: ["One-Horned Rhinoceros", "Wild Water Buffalo", "Swamp Deer"],
        river: "Brahmaputra",
        description: "Holds 2/3rds of world's great one-horned rhinos.",
        coordinates: { x: 85, y: 35 },
        probability: 'High'
    },
    {
        id: 'manas',
        name: "Manas National Park",
        state: "Assam",
        keySpecies: ["Pygmy Hog", "Golden Langur", "Bengal Florican"],
        river: "Manas",
        description: "Biosphere Reserve + World Heritage Site. Contiguous with Royal Manas (Bhutan).",
        coordinates: { x: 80, y: 35 },
        probability: 'High'
    },
    {
        id: 'namdapha',
        name: "Namdapha National Park",
        state: "Arunachal Pradesh",
        keySpecies: ["Flying Squirrel", "Hoolock Gibbon", "Clouded Leopard"],
        hills: "Mishmi Hills",
        description: "Only park with 4 big cat species (Tiger, Leopard, Clouded Leopard, Snow Leopard).",
        coordinates: { x: 92, y: 30 },
        probability: 'High'
    },
    {
        id: 'keibul-lamjao',
        name: "Keibul Lamjao National Park",
        state: "Manipur",
        keySpecies: ["Sangai (Dancing Deer)"],
        description: "World's only floating national park (Phumdis) on Loktak Lake.",
        coordinates: { x: 88, y: 42 },
        probability: 'High'
    },
    {
        id: 'nokrek',
        name: "Nokrek National Park",
        state: "Meghalaya",
        keySpecies: ["Red Panda", "Asian Elephant", "Hoolock Gibbon"],
        hills: "Garo Hills",
        description: "Part of Nokrek Biosphere Reserve.",
        coordinates: { x: 82, y: 38 },
        probability: 'Medium'
    },

    // --- CENTRAL & WEST ---
    {
        id: 'gir',
        name: "Gir National Park",
        state: "Gujarat",
        keySpecies: ["Asiatic Lion"],
        hills: "Gir Hills",
        description: "Only abode of the Asiatic Lion.",
        coordinates: { x: 15, y: 50 },
        probability: 'High'
    },
    {
        id: 'ranthambore',
        name: "Ranthambore National Park",
        state: "Rajasthan",
        keySpecies: ["Bengal Tiger"],
        hills: "Junction of Aravali and Vindhya",
        description: "Famous for Tigers and Ranthambore Fort.",
        coordinates: { x: 30, y: 40 },
        probability: 'High'
    },
    {
        id: 'keoladeo',
        name: "Keoladeo Ghana (Bharatpur)",
        state: "Rajasthan",
        keySpecies: ["Siberian Crane (Migratory)", "Painted Stork"],
        description: "Man-made wetland, formerly a duck-hunting reserve.",
        coordinates: { x: 32, y: 38 },
        probability: 'High'
    },
    {
        id: 'kanha',
        name: "Kanha National Park",
        state: "Madhya Pradesh",
        keySpecies: ["Barasingha (Hard Ground Swamp Deer)", "Tiger"],
        hills: "Maikal Range",
        description: "Inspiration for Jungle Book.",
        coordinates: { x: 45, y: 50 },
        probability: 'High'
    },
    {
        id: 'kuno',
        name: "Kuno National Park",
        state: "Madhya Pradesh",
        keySpecies: ["Cheetah (Reintroduced)"],
        river: "Kuno",
        description: "Site of Cheetah reintroduction project.",
        coordinates: { x: 35, y: 45 },
        probability: 'High'
    },

    // --- SOUTH ---
    {
        id: 'nagarhole',
        name: "Nagarhole (Rajiv Gandhi) NP",
        state: "Karnataka",
        keySpecies: ["Tiger", "Elephant", "Leopard"],
        river: "Kabini",
        description: "Part of Nilgiri Biosphere Reserve.",
        coordinates: { x: 30, y: 80 },
        probability: 'High'
    },
    {
        id: 'bandipur',
        name: "Bandipur National Park",
        state: "Karnataka",
        keySpecies: ["Tiger", "Elephant"],
        description: "Part of Nilgiri Biosphere Reserve.",
        coordinates: { x: 32, y: 82 },
        probability: 'High'
    },
    {
        id: 'silent-valley',
        name: "Silent Valley National Park",
        state: "Kerala",
        keySpecies: ["Lion-Tailed Macaque"],
        river: "Kunthi Puzha",
        hills: "Nilgiri Hills",
        description: "Saving Silent Valley movement.",
        coordinates: { x: 30, y: 88 },
        probability: 'High'
    },
    {
        id: 'eravikulam',
        name: "Eravikulam National Park",
        state: "Kerala",
        keySpecies: ["Nilgiri Tahr"],
        hills: "Anamudi (Highest Peak of W. Ghats)",
        description: "Neelakurinji blooms once in 12 years.",
        coordinates: { x: 32, y: 90 },
        probability: 'High'
    },
    {
        id: 'papikonda',
        name: "Papikonda National Park",
        state: "Andhra Pradesh",
        keySpecies: ["Tiger", "Water Buffalo"],
        river: "Godavari",
        description: "Located in the Papi Hills.",
        coordinates: { x: 50, y: 70 },
        probability: 'Medium'
    },

    // --- EAST & ISLANDS ---
    {
        id: 'simlipal',
        name: "Simlipal National Park",
        state: "Odisha",
        keySpecies: ["Tiger", "Elephant", "Mugger Crocodile"],
        description: "Known for Red Silk Cotton Trees.",
        coordinates: { x: 60, y: 55 },
        probability: 'High'
    },
    {
        id: 'sunderban',
        name: "Sunderban National Park",
        state: "West Bengal",
        keySpecies: ["Royal Bengal Tiger", "Saltwater Crocodile"],
        description: "Largest Mangrove forest. Tiger swims in water.",
        coordinates: { x: 70, y: 52 },
        probability: 'High'
    }
];
