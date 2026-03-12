export interface Wetland {
    id: string;
    name: string;
    state: string;
    keyFeatures: string[];
    description: string;
    coordinates: { x: number; y: number }; // Percentage 0-100
    montreuxRecord: boolean; // Currently on Montreux Record
}

export const WETLANDS_DATA: Wetland[] = [
    {
        id: 'chilika',
        name: "Chilika Lake",
        state: "Odisha",
        keyFeatures: ["Irrawaddy Dolphin", "Migratory Birds"],
        description: "Largest brackish water lagoon in Asia. Was on Montreux Record but removed in 2002.",
        coordinates: { x: 62, y: 58 },
        montreuxRecord: false
    },
    {
        id: 'keoladeo',
        name: "Keoladeo Ghana NP",
        state: "Rajasthan",
        keyFeatures: ["Siberian Crane"],
        description: "Man-made wetland. Currently on Montreux Record.",
        coordinates: { x: 32, y: 38 },
        montreuxRecord: true
    },
    {
        id: 'loktak',
        name: "Loktak Lake",
        state: "Manipur",
        keyFeatures: ["Phumdis", "Sangai Deer"],
        description: "Largest freshwater lake in North East India. Contains Keibul Lamjao NP. Currently on Montreux Record.",
        coordinates: { x: 88, y: 42 },
        montreuxRecord: true
    },
    {
        id: 'wular',
        name: "Wular Lake",
        state: "Jammu & Kashmir",
        keyFeatures: ["Freshwater Sponge"],
        description: "Largest freshwater lake in India. Fed by Jhelum river.",
        coordinates: { x: 30, y: 12 },
        montreuxRecord: false
    },
    {
        id: 'harike',
        name: "Harike Wetland",
        state: "Punjab",
        keyFeatures: ["Indus Dolphin"],
        description: "Confluence of Beas and Sutlej rivers.",
        coordinates: { x: 28, y: 25 },
        montreuxRecord: false
    },
    {
        id: 'sambhar',
        name: "Sambhar Lake",
        state: "Rajasthan",
        keyFeatures: ["Flamingos"],
        description: "India's largest inland salt lake.",
        coordinates: { x: 30, y: 38 },
        montreuxRecord: false
    },
    {
        id: 'sunderban',
        name: "Sunderban Wetland",
        state: "West Bengal",
        keyFeatures: ["Royal Bengal Tiger", "Mangroves"],
        description: "Largest Ramsar site in India.",
        coordinates: { x: 70, y: 52 },
        montreuxRecord: false
    },
    {
        id: 'renuka',
        name: "Renuka Wetland",
        state: "Himachal Pradesh",
        keyFeatures: ["Freshwater"],
        description: "Smallest Ramsar site in India.",
        coordinates: { x: 34, y: 22 },
        montreuxRecord: false
    },
    {
        id: 'bhoj',
        name: "Bhoj Wetland",
        state: "Madhya Pradesh",
        keyFeatures: ["Saras Crane"],
        description: "Two man-made lakes (Upper & Lower) in Bhopal.",
        coordinates: { x: 42, y: 48 },
        montreuxRecord: false
    },
    {
        id: 'vembanad',
        name: "Vembanad-Kol",
        state: "Kerala",
        keyFeatures: ["Backwaters"],
        description: "Longest lake in India.",
        coordinates: { x: 32, y: 92 },
        montreuxRecord: false
    },
    {
        id: 'sasthamkotta',
        name: "Sasthamkotta Lake",
        state: "Kerala",
        keyFeatures: ["Larva of phantom midges"],
        description: "Largest freshwater lake in Kerala.",
        coordinates: { x: 33, y: 94 },
        montreuxRecord: false
    },
    {
        id: 'kolleru',
        name: "Kolleru Lake",
        state: "Andhra Pradesh",
        keyFeatures: ["Grey Pelican"],
        description: "Located between Godavari and Krishna deltas.",
        coordinates: { x: 50, y: 72 },
        montreuxRecord: false
    },
    {
        id: 'bhitarkanika',
        name: "Bhitarkanika Mangroves",
        state: "Odisha",
        keyFeatures: ["Saltwater Crocodile"],
        description: "Nutrient rich estuarine ecosystem.",
        coordinates: { x: 63, y: 56 },
        montreuxRecord: false
    },
    {
        id: 'point-calimere',
        name: "Point Calimere",
        state: "Tamil Nadu",
        keyFeatures: ["Flamingos"],
        description: "Coastal wetland.",
        coordinates: { x: 42, y: 92 },
        montreuxRecord: false
    },
    {
        id: 'astamudi',
        name: "Ashtamudi Wetland",
        state: "Kerala",
        keyFeatures: ["Mangroves"],
        description: "Backwater ecosystem.",
        coordinates: { x: 32, y: 95 },
        montreuxRecord: false
    },
    {
        id: 'tsomoriri',
        name: "Tsomoriri",
        state: "Ladakh",
        keyFeatures: ["Black-necked Crane"],
        description: "High altitude lake.",
        coordinates: { x: 38, y: 14 },
        montreuxRecord: false
    },
    {
        id: 'chandratal',
        name: "Chandratal",
        state: "Himachal Pradesh",
        keyFeatures: ["Snow Leopard nearby"],
        description: "High altitude lake.",
        coordinates: { x: 36, y: 18 },
        montreuxRecord: false
    },
    {
        id: 'rudrasagar',
        name: "Rudrasagar Lake",
        state: "Tripura",
        keyFeatures: ["Three-striped Roof Turtle"],
        description: "Lowland sedimentation reservoir.",
        coordinates: { x: 86, y: 45 },
        montreuxRecord: false
    }
];
