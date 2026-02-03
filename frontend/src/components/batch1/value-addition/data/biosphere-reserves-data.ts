export interface BiosphereReserve {
    id: string;
    name: string;
    state: string;
    keyFeatures: string[];
    description: string;
    coordinates: { x: number; y: number }; // Percentage 0-100
    unescoStatus: boolean; // Part of WNBR
}

export const BIOSPHERE_RESERVES_DATA: BiosphereReserve[] = [
    {
        id: 'nilgiri',
        name: "Nilgiri Biosphere Reserve",
        state: "Tamil Nadu, Kerala, Karnataka",
        keyFeatures: ["Lion-tailed Macaque", "Nilgiri Tahr"],
        description: "First Biosphere Reserve of India (1986). Includes Wynad, Nagarhole, Bandipur, Mudumalai, Nilambur, Silent Valley.",
        coordinates: { x: 30, y: 85 },
        unescoStatus: true
    },
    {
        id: 'nanda-devi',
        name: "Nanda Devi Biosphere Reserve",
        state: "Uttarakhand",
        keyFeatures: ["Snow Leopard", "Himalayan Black Bear"],
        description: "Includes Nanda Devi and Valley of Flowers National Parks.",
        coordinates: { x: 40, y: 22 },
        unescoStatus: true
    },
    {
        id: 'nokrek',
        name: "Nokrek",
        state: "Meghalaya",
        keyFeatures: ["Red Panda"],
        description: "Part of Garo Hills.",
        coordinates: { x: 82, y: 38 },
        unescoStatus: true
    },
    {
        id: 'great-nicobar',
        name: "Great Nicobar",
        state: "Andaman & Nicobar Islands",
        keyFeatures: ["Saltwater Crocodile"],
        description: "Southernmost island of Nicobar Islands.",
        coordinates: { x: 90, y: 92 }, // Approximate representation
        unescoStatus: true
    },
    {
        id: 'gulf-of-mannar',
        name: "Gulf of Mannar",
        state: "Tamil Nadu",
        keyFeatures: ["Dugong (Sea Cow)"],
        description: "Marine biosphere reserve extending from Rameswaram to Tuticorin.",
        coordinates: { x: 42, y: 95 },
        unescoStatus: true
    },
    {
        id: 'manas',
        name: "Manas",
        state: "Assam",
        keyFeatures: ["Golden Langur", "Red Panda"],
        description: "Contiguous with Royal Manas in Bhutan.",
        coordinates: { x: 80, y: 35 },
        unescoStatus: true // Check current status, often listed
    },
    {
        id: 'sunderbans',
        name: "Sunderbans",
        state: "West Bengal",
        keyFeatures: ["Royal Bengal Tiger"],
        description: "Largest single block of tidal halophytic mangroves in the world.",
        coordinates: { x: 70, y: 52 },
        unescoStatus: true
    },
    {
        id: 'simlipal',
        name: "Simlipal",
        state: "Odisha",
        keyFeatures: ["Tiger", "Elephant"],
        description: "Includes Simlipal Tiger Reserve.",
        coordinates: { x: 60, y: 55 },
        unescoStatus: true
    },
    {
        id: 'dibru-saikhowa',
        name: "Dibru-Saikhowa",
        state: "Assam",
        keyFeatures: ["White-winged wood duck"],
        description: "Smallest biosphere reserve in area (approx).",
        coordinates: { x: 92, y: 32 },
        unescoStatus: false
    },
    {
        id: 'dehang-dibang',
        name: "Dehang-Dibang",
        state: "Arunachal Pradesh",
        keyFeatures: ["Musk Deer", "Mishmi Takin"],
        description: "Mouling National Park and Dibang Wildlife Sanctuary.",
        coordinates: { x: 94, y: 28 },
        unescoStatus: false
    },
    {
        id: 'panchmarhi',
        name: "Pachmarhi",
        state: "Madhya Pradesh",
        keyFeatures: ["Large Squirrel", "Flying Squirrel"],
        description: "Includes Satpura National Park.",
        coordinates: { x: 45, y: 50 },
        unescoStatus: true
    },
    {
        id: 'khangchendzonga',
        name: "Khangchendzonga",
        state: "Sikkim",
        keyFeatures: ["Snow Leopard", "Red Panda"],
        description: "One of the highest ecosystems in the world.",
        coordinates: { x: 72, y: 28 },
        unescoStatus: true
    },
    {
        id: 'agasthyamalai',
        name: "Agasthyamalai",
        state: "Kerala, Tamil Nadu",
        keyFeatures: ["Asian Elephant"],
        description: "Part of Western Ghats.",
        coordinates: { x: 35, y: 92 },
        unescoStatus: true
    },
    {
        id: 'achanakmar-amarkantak',
        name: "Achanakmar-Amarkantak",
        state: "MP, Chhattisgarh",
        keyFeatures: ["Four horned antelope", "Indian Wild Dog"],
        description: "Source of Narmada, Son and Johila rivers.",
        coordinates: { x: 52, y: 52 },
        unescoStatus: true
    },
    {
        id: 'kachchh',
        name: "Kachchh",
        state: "Gujarat",
        keyFeatures: ["Indian Wild Ass"],
        description: "Largest biosphere reserve in India (area wise).",
        coordinates: { x: 10, y: 45 },
        unescoStatus: false
    },
    {
        id: 'cold-desert',
        name: "Cold Desert",
        state: "Himachal Pradesh",
        keyFeatures: ["Snow Leopard"],
        description: "Includes Pin Valley National Park and surroundings.",
        coordinates: { x: 36, y: 18 },
        unescoStatus: false
    },
    {
        id: 'seshachalam',
        name: "Seshachalam Hills",
        state: "Andhra Pradesh",
        keyFeatures: ["Slender Loris"],
        description: "Red Sanders forests.",
        coordinates: { x: 45, y: 80 },
        unescoStatus: false
    },
    {
        id: 'panna',
        name: "Panna",
        state: "Madhya Pradesh",
        keyFeatures: ["Tiger", "Chinkara"],
        description: "Catchment area of Ken River.",
        coordinates: { x: 45, y: 40 },
        unescoStatus: true
    }
];
