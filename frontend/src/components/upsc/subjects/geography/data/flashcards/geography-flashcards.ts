// Geography Flashcards - Complete Collection
// Covers 4 Modules: Physical, World, Indian, Human & Economic Geography

export interface GeographyFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    module: 'physical' | 'world' | 'indian' | 'human';
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

// Module 1: Physical Geography
export const physicalFlashcards: GeographyFlashcard[] = [
    {
        id: "geo-m1-01",
        front: "What is Plate Tectonics?",
        back: "Theory that Earth's crust is divided into large plates floating on semi-molten mantle. Plates move due to convection currents. Boundaries: Divergent (spreading), Convergent (collision), Transform (sliding).",
        subject: "Geography",
        topic: "Geomorphology",
        module: "physical",
        tags: ["Plate Tectonics", "Earth Structure"],
        difficulty: "medium"
    },
    {
        id: "geo-m1-02",
        front: "What are the three types of rocks?",
        back: "1. Igneous (from magma - granite, basalt), 2. Sedimentary (deposited layers - sandstone, limestone), 3. Metamorphic (transformed by heat/pressure - marble, slate). Rock Cycle connects all three.",
        subject: "Geography",
        topic: "Geology",
        module: "physical",
        tags: ["Rocks", "Rock Cycle"],
        difficulty: "easy"
    },
    {
        id: "geo-m1-03",
        front: "What is an Oxbow Lake?",
        back: "Crescent-shaped lake formed when a river meander is cut off from the main channel. The river takes a straighter path. Common in mature river stages on floodplains.",
        subject: "Geography",
        topic: "Fluvial Landforms",
        module: "physical",
        tags: ["Rivers", "Landforms"],
        difficulty: "easy"
    },
    {
        id: "geo-m1-04",
        front: "What are the global pressure belts?",
        back: "7 pressure belts: Equatorial Low (ITCZ), Sub-Tropical High (Horse Latitudes), Sub-Polar Low, Polar High. Low pressure causes rising air (rain), High causes descending (dry).",
        subject: "Geography",
        topic: "Climatology",
        module: "physical",
        tags: ["Pressure", "Climate"],
        difficulty: "medium"
    },
    {
        id: "geo-m1-05",
        front: "What are Jet Streams?",
        back: "Fast-flowing (200-400 km/h), narrow air currents at 9-12 km altitude near tropopause. Types: Sub-Tropical (Westerly) and Polar Jet. Influence weather and aviation. Affect Indian monsoon.",
        subject: "Geography",
        topic: "Climatology",
        module: "physical",
        tags: ["Jet Streams", "Monsoon"],
        difficulty: "hard"
    },
    {
        id: "geo-m1-06",
        front: "What is El Niño?",
        back: "Warming of Pacific Ocean waters near South America causing weakened trade winds. Effects: Reduced rainfall in India/Australia, increased rainfall in Americas. Opposite is La Niña.",
        subject: "Geography",
        topic: "Climatology",
        module: "physical",
        tags: ["El Niño", "ENSO"],
        difficulty: "medium"
    },
    {
        id: "geo-m1-07",
        front: "What is a Rift Valley?",
        back: "Linear depression formed when land between two parallel faults subsides. Example: East African Rift Valley. Often associated with volcanic activity and lakes.",
        subject: "Geography",
        topic: "Geomorphology",
        module: "physical",
        tags: ["Landforms", "Tectonics"],
        difficulty: "medium"
    },
    {
        id: "geo-m1-08",
        front: "What are the layers of atmosphere?",
        back: "From bottom: Troposphere (weather), Stratosphere (ozone), Mesosphere (meteors burn), Thermosphere (aurora), Exosphere (satellites). Temperature varies differently in each.",
        subject: "Geography",
        topic: "Climatology",
        module: "physical",
        tags: ["Atmosphere", "Layers"],
        difficulty: "medium"
    }
];

// Module 2: World Geography
export const worldFlashcards: GeographyFlashcard[] = [
    {
        id: "geo-m2-01",
        front: "What are the world's major ocean currents?",
        back: "Gulf Stream (warm, Atlantic), Labrador (cold, Atlantic), Kuroshio (warm, Pacific), Humboldt/Peru (cold, Pacific, rich fishing). Currents affect climate and marine life.",
        subject: "Geography",
        topic: "Oceanography",
        module: "world",
        tags: ["Currents", "Oceans"],
        difficulty: "hard"
    },
    {
        id: "geo-m2-02",
        front: "What is the Ring of Fire?",
        back: "Pacific rim zone with 75% of world's volcanoes and 90% of earthquakes. Follows tectonic plate boundaries. Includes Japan, Philippines, Indonesia, Chile.",
        subject: "Geography",
        topic: "Tectonics",
        module: "world",
        tags: ["Volcanoes", "Earthquakes"],
        difficulty: "easy"
    },
    {
        id: "geo-m2-03",
        front: "What are the major grasslands of the world?",
        back: "Prairies (North America), Steppes (Eurasia), Pampas (Argentina), Veld (South Africa), Downs (Australia), Savanna (Africa, tropical). Named differently but similar biome.",
        subject: "Geography",
        topic: "Biomes",
        module: "world",
        tags: ["Grasslands", "Biomes"],
        difficulty: "medium"
    },
    {
        id: "geo-m2-04",
        front: "What is the Sahel region?",
        back: "Semi-arid transitional zone between Sahara Desert and African savannas. Prone to desertification and drought. Countries include Mali, Niger, Chad.",
        subject: "Geography",
        topic: "Africa",
        module: "world",
        tags: ["Africa", "Desertification"],
        difficulty: "medium"
    },
    {
        id: "geo-m2-05",
        front: "What are the Fjords?",
        back: "Deep, narrow sea inlets between steep cliffs, formed by glacial erosion. Famous in Norway, New Zealand, Chile. U-shaped valleys flooded by sea.",
        subject: "Geography",
        topic: "Glacial Landforms",
        module: "world",
        tags: ["Glaciers", "Landforms"],
        difficulty: "medium"
    }
];

// Module 3: Indian Geography
export const indianFlashcards: GeographyFlashcard[] = [
    {
        id: "geo-m3-01",
        front: "What are the physiographic divisions of India?",
        back: "1. Himalayan Mountains (young fold), 2. Northern Plains (alluvial), 3. Peninsular Plateau (ancient/stable), 4. Coastal Plains, 5. Islands (Andaman, Lakshadweep).",
        subject: "Geography",
        topic: "Physiography",
        module: "indian",
        tags: ["India", "Landforms"],
        difficulty: "easy"
    },
    {
        id: "geo-m3-02",
        front: "What is the mechanism of Indian Monsoon?",
        back: "Differential heating of land and sea creates pressure difference. ITCZ shifts north in summer causing SW monsoon. Jet streams, Tibetan Plateau, and Somali Current also influence.",
        subject: "Geography",
        topic: "Monsoon",
        module: "indian",
        tags: ["Monsoon", "Climate"],
        difficulty: "hard"
    },
    {
        id: "geo-m3-03",
        front: "What are the major soil types in India?",
        back: "Alluvial (most extensive, N Plains), Black/Regur (cotton, Deccan), Red (leached, S India), Laterite (heavy rain areas), Desert (arid), Mountain (hilly).",
        subject: "Geography",
        topic: "Soils",
        module: "indian",
        tags: ["Soils", "Agriculture"],
        difficulty: "medium"
    },
    {
        id: "geo-m3-04",
        front: "What are the major river systems of India?",
        back: "Himalayan: Indus (west), Ganga (central), Brahmaputra (east) - perennial. Peninsular: Mahanadi, Godavari (largest), Krishna, Kaveri - rain-fed. Most drain to Bay of Bengal.",
        subject: "Geography",
        topic: "Drainage",
        module: "indian",
        tags: ["Rivers", "Drainage"],
        difficulty: "medium"
    },
    {
        id: "geo-m3-05",
        front: "What are the Western Ghats known for?",
        back: "UNESCO World Heritage Site, biodiversity hotspot, 30+ National Parks. Affects SW monsoon (orographic rainfall on windward side). Source of major peninsular rivers.",
        subject: "Geography",
        topic: "Physiography",
        module: "indian",
        tags: ["Western Ghats", "Biodiversity"],
        difficulty: "medium"
    },
    {
        id: "geo-m3-06",
        front: "What is Black Cotton Soil (Regur)?",
        back: "Dark soil from weathering of basalt (Deccan Traps). Rich in lime, iron, alumina, magnesium. Self-ploughing (cracks when dry). Best for cotton, so called 'black cotton soil'.",
        subject: "Geography",
        topic: "Soils",
        module: "indian",
        tags: ["Soils", "Deccan"],
        difficulty: "easy"
    },
    {
        id: "geo-m3-07",
        front: "What causes 'Monsoon Breaks'?",
        back: "Northward shift of ITCZ to Himalayan foothills reduces rainfall over plains. Lasts 1-3 weeks in July-August. Returns when ITCZ moves back south. Causes droughts.",
        subject: "Geography",
        topic: "Monsoon",
        module: "indian",
        tags: ["Monsoon", "Rainfall"],
        difficulty: "hard"
    }
];

// Module 4: Human & Economic Geography
export const humanFlashcards: GeographyFlashcard[] = [
    {
        id: "geo-m4-01",
        front: "What is Demographic Transition Model?",
        back: "5 stages: 1. High birth/death rates, 2. Declining death rates, 3. Declining birth rates, 4. Low birth/death rates, 5. Sub-replacement fertility. India is in Stage 3.",
        subject: "Geography",
        topic: "Demographics",
        module: "human",
        tags: ["Population", "Demographics"],
        difficulty: "medium"
    },
    {
        id: "geo-m4-02",
        front: "What are the types of economic activities?",
        back: "Primary (extraction - agriculture, mining), Secondary (manufacturing), Tertiary (services), Quaternary (knowledge/IT), Quinary (decision-making/top executives).",
        subject: "Geography",
        topic: "Economic Activities",
        module: "human",
        tags: ["Economy", "Activities"],
        difficulty: "easy"
    },
    {
        id: "geo-m4-03",
        front: "What is Urbanization?",
        back: "Movement of population from rural to urban areas. Push factors: rural poverty, lack of opportunities. Pull factors: jobs, amenities. India ~35% urban (2020s).",
        subject: "Geography",
        topic: "Urbanization",
        module: "human",
        tags: ["Urbanization", "Migration"],
        difficulty: "easy"
    },
    {
        id: "geo-m4-04",
        front: "What are the major industrial regions of the world?",
        back: "Ruhr (Germany), Great Lakes (USA), Tokyo-Yokohama (Japan), Shanghai (China), Damodar Valley (India). Factors: raw materials, power, transport, labor, market.",
        subject: "Geography",
        topic: "Industry",
        module: "human",
        tags: ["Industry", "Location"],
        difficulty: "medium"
    },
    {
        id: "geo-m4-05",
        front: "What is a Smart City?",
        back: "Urban area using digital technology for efficient infrastructure, sustainable development, citizen services. India's Smart City Mission covers 100 cities. Focus: ICT, IoT, e-governance.",
        subject: "Geography",
        topic: "Urbanization",
        module: "human",
        tags: ["Smart City", "Development"],
        difficulty: "easy"
    }
];

// Combined export
export const geographyFlashcards: GeographyFlashcard[] = [
    ...physicalFlashcards,
    ...worldFlashcards,
    ...indianFlashcards,
    ...humanFlashcards
];

// Summary: 25 flashcards covering all 4 Geography modules
