export interface AtlasLocation {
    id: string;
    name: string;
    type: 'park' | 'ramsar' | 'mineral' | 'river' | 'peak';
    state: string;
    coordinates: { x: number; y: number }; // Percentage from Left, Top (0-100)
    tags: string[];
    description: string;
}

export const ATLAS_DATA: AtlasLocation[] = [
    // --- National Parks & Tiger Reserves ---
    { id: 'corbett', name: 'Jim Corbett NP', type: 'park', state: 'Uttarakhand', coordinates: { x: 35, y: 28 }, tags: ['Tiger', 'First NP'], description: 'Oldest national park in India. Known for Bengal Tigers.' },
    { id: 'kaziranga', name: 'Kaziranga NP', type: 'park', state: 'Assam', coordinates: { x: 80, y: 32 }, tags: ['One-horned Rhino', 'UNESCO'], description: 'Hosts two-thirds of the world\'s great one-horned rhinoceroses.' },
    { id: 'ranthambore', name: 'Ranthambore NP', type: 'park', state: 'Rajasthan', coordinates: { x: 28, y: 38 }, tags: ['Tiger', 'Fort'], description: 'Famous for its tigers and the Ranthambore Fort.' },
    { id: 'gir', name: 'Gir NP', type: 'park', state: 'Gujarat', coordinates: { x: 15, y: 48 }, tags: ['Asiatic Lion'], description: 'The only natural habitat of the Asiatic Lion.' },
    { id: 'silent-valley', name: 'Silent Valley NP', type: 'park', state: 'Kerala', coordinates: { x: 30, y: 85 }, tags: ['Lion-tailed Macaque'], description: 'Core of the Nilgiri Biosphere Reserve.' },
    { id: 'sunderbans', name: 'Sunderbans NP', type: 'park', state: 'West Bengal', coordinates: { x: 68, y: 50 }, tags: ['Mangroves', 'Royal Bengal Tiger'], description: 'Largest mangrove forest in the world.' },
    { id: 'kanha', name: 'Kanha NP', type: 'park', state: 'Madhya Pradesh', coordinates: { x: 45, y: 50 }, tags: ['Barasingha', 'Tiger'], description: 'Inspiration for The Jungle Book.' },
    { id: 'namdapha', name: 'Namdapha NP', type: 'park', state: 'Arunachal Pradesh', coordinates: { x: 88, y: 28 }, tags: ['Flying Squirrel'], description: 'Biodiversity hotspot in the Eastern Himalayas.' },

    // --- Ramsar Sites ---
    { id: 'chilika', name: 'Chilika Lake', type: 'ramsar', state: 'Odisha', coordinates: { x: 62, y: 58 }, tags: ['Irrawaddy Dolphin'], description: 'Largest brackish water lagoon in Asia.' },
    { id: 'keoladeo', name: 'Keoladeo Ghana', type: 'ramsar', state: 'Rajasthan', coordinates: { x: 30, y: 35 }, tags: ['Siberian Crane', 'UNESCO'], description: 'Formerly Bharatpur Bird Sanctuary.' },
    { id: 'loktak', name: 'Loktak Lake', type: 'ramsar', state: 'Manipur', coordinates: { x: 85, y: 40 }, tags: ['Phumdis', 'Sangai Deer', 'Montreux Record'], description: 'Famous for floating Phumdis and the Keibul Lamjao NP.' },

    // --- Minerals ---
    { id: 'chota-nagpur', name: 'Chota Nagpur Plateau', type: 'mineral', state: 'Jharkhand', coordinates: { x: 55, y: 48 }, tags: ['Coal', 'Iron', 'Mica'], description: 'The mineral heartland of India.' },
    { id: 'khetri', name: 'Khetri Belt', type: 'mineral', state: 'Rajasthan', coordinates: { x: 28, y: 32 }, tags: ['Copper'], description: 'Major copper mining region.' },
    { id: 'kolar', name: 'Kolar Gold Fields', type: 'mineral', state: 'Karnataka', coordinates: { x: 35, y: 78 }, tags: ['Gold'], description: 'Historic gold mines.' },
    { id: 'kudremukh', name: 'Kudremukh', type: 'mineral', state: 'Karnataka', coordinates: { x: 28, y: 75 }, tags: ['Iron Ore'], description: 'Major iron ore deposits.' },

    // --- Peaks ---
    { id: 'k2', name: 'K2 (Godwin-Austen)', type: 'peak', state: 'POK', coordinates: { x: 32, y: 5 }, tags: ['Highest Point'], description: 'Highest peak in the Karakoram range.' },
    { id: 'kanchenjunga', name: 'Kanchenjunga', type: 'peak', state: 'Sikkim', coordinates: { x: 65, y: 28 }, tags: ['Himalayas'], description: 'Third highest mountain in the world.' },
    { id: 'anai-mudi', name: 'Anai Mudi', type: 'peak', state: 'Kerala', coordinates: { x: 31, y: 86 }, tags: ['Western Ghats'], description: 'Highest peak in South India.' },

    // --- Rivers (Origins/Points) ---
    { id: 'gangotri', name: 'Gangotri (Ganga)', type: 'river', state: 'Uttarakhand', coordinates: { x: 36, y: 22 }, tags: ['Glacier'], description: 'Source of the Ganges.' },
    { id: 'triambakeshwar', name: 'Triambakeshwar (Godavari)', type: 'river', state: 'Maharashtra', coordinates: { x: 25, y: 60 }, tags: ['Peninsular'], description: 'Source of the Godavari river.' },
];
