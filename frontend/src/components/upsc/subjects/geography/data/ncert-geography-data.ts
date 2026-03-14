// NCERT Geography Data Registry

export interface NCERTChapter {
    id: string;
    chapterNumber: number;
    title: string;
    mcqDataId?: string; // Links to the specific parsed MCQ array export
}

export interface NCERTBook {
    id: string;
    classLevel: number;
    title: string;
    description: string;
    chapters: NCERTChapter[];
}

export const NCERT_GEOGRAPHY_BOOKS: NCERTBook[] = [
    {
        id: "class11-physical",
        classLevel: 11,
        title: "Fundamentals of Physical Geography",
        description: "Core physical geography concepts including geomorphology, climatology, and oceanography.",
        chapters: [
            { id: "c11-p-1", chapterNumber: 1, title: "Geography as a Discipline", mcqDataId: "chapter1MCQs" },
            { id: "c11-p-2", chapterNumber: 2, title: "The Origin and Evolution of the Earth", mcqDataId: "chapter2MCQs" },
            { id: "c11-p-3", chapterNumber: 3, title: "Interior of the Earth", mcqDataId: "chapter3MCQs" },
            { id: "c11-p-4", chapterNumber: 4, title: "Distribution of Oceans and Continents", mcqDataId: "chapter4MCQs" },
            { id: "c11-p-5", chapterNumber: 5, title: "Minerals and Rocks", mcqDataId: "chapter5MCQs" },
            { id: "c11-p-6", chapterNumber: 6, title: "Geomorphic Processes", mcqDataId: "chapter6MCQs" },
            { id: "c11-p-7", chapterNumber: 7, title: "Landforms and their Evolution", mcqDataId: "chapter7MCQs" },
            { id: "c11-p-8", chapterNumber: 8, title: "Composition and Structure of Atmosphere", mcqDataId: "chapter8MCQs" },
            { id: "c11-p-9", chapterNumber: 9, title: "Solar Radiation, Heat Balance and Temperature", mcqDataId: "chapter9MCQs" },
            { id: "c11-p-10", chapterNumber: 10, title: "Atmospheric Circulation and Weather Systems", mcqDataId: "chapter10MCQs" },
            { id: "c11-p-11", chapterNumber: 11, title: "Water in the Atmosphere", mcqDataId: "chapter11MCQs" },
            { id: "c11-p-12", chapterNumber: 12, title: "World Climate and Climate Change", mcqDataId: "chapter12MCQs" },
            { id: "c11-p-13", chapterNumber: 13, title: "Water (Oceans)", mcqDataId: "chapter13MCQs" },
            { id: "c11-p-14", chapterNumber: 14, title: "Movements of Ocean Water", mcqDataId: "chapter14MCQs" },
            { id: "c11-p-15", chapterNumber: 15, title: "Life on the Earth" },
            { id: "c11-p-16", chapterNumber: 16, title: "Biodiversity and Conservation", mcqDataId: "chapter15MCQs" },
        ]
    },
    {
        id: "class11-india",
        classLevel: 11,
        title: "India: Physical Environment",
        description: "Physical setting, drainage, climate, vegetation, and soils of India.",
        chapters: [
            { id: "c11-i-1", chapterNumber: 1, title: "India - Location", mcqDataId: "indiaChapter1MCQs" },
            { id: "c11-i-2", chapterNumber: 2, title: "Structure and Physiography", mcqDataId: "indiaChapter2MCQs" },
            { id: "c11-i-3", chapterNumber: 3, title: "Drainage System", mcqDataId: "indiaChapter3MCQs" },
            { id: "c11-i-4", chapterNumber: 4, title: "Climate", mcqDataId: "indiaChapter4MCQs" },
            { id: "c11-i-5", chapterNumber: 5, title: "Natural Vegetation", mcqDataId: "indiaChapter5MCQs" },
            { id: "c11-i-6", chapterNumber: 6, title: "Soils", mcqDataId: "indiaChapter6MCQs" },
            { id: "c11-i-7", chapterNumber: 7, title: "Natural Hazards and Disasters", mcqDataId: "indiaChapter7MCQs" },
        ]
    }, {
        id: "class12-human",
        classLevel: 12,
        title: "Fundamentals of Human Geography",
        description: "Population, human development, and economic activities.",
        chapters: [
            { id: "c12-h-1", chapterNumber: 1, title: "Human Geography: Nature and Scope", mcqDataId: "humanChapter1MCQs" },
            { id: "c12-h-2", chapterNumber: 2, title: "The World Population: Distribution, Density and Growth" },
            { id: "c12-h-3", chapterNumber: 3, title: "Population Composition" },
            { id: "c12-h-4", chapterNumber: 4, title: "Human Development" },
            { id: "c12-h-5", chapterNumber: 5, title: "Primary Activities" },
            { id: "c12-h-6", chapterNumber: 6, title: "Secondary Activities" },
            { id: "c12-h-7", chapterNumber: 7, title: "Tertiary and Quaternary Activities" },
            { id: "c12-h-8", chapterNumber: 8, title: "Transport and Communication" },
            { id: "c12-h-9", chapterNumber: 9, title: "International Trade" },
            { id: "c12-h-10", chapterNumber: 10, title: "Human Settlements" },
        ]
    },
    {
        id: "class12-india",
        classLevel: 12,
        title: "India: People and Economy",
        description: "Indian demographics, resource planning, and transport.",
        chapters: [
            { id: "c12-ie-1", chapterNumber: 1, title: "Population: Distribution, Density, Growth, and Composition", mcqDataId: "indiaPeopleChapter1MCQs" },
            { id: "c12-ie-2", chapterNumber: 2, title: "Migration: Types, Causes, and Consequences" },
            { id: "c12-ie-3", chapterNumber: 3, title: "Human Development" },
            { id: "c12-ie-4", chapterNumber: 4, title: "Human Settlements" },
            { id: "c12-ie-5", chapterNumber: 5, title: "Land Resources and Agriculture" },
            { id: "c12-ie-6", chapterNumber: 6, title: "Water Resources" },
            { id: "c12-ie-7", chapterNumber: 7, title: "Mineral and Energy Resources" },
            { id: "c12-ie-8", chapterNumber: 8, title: "Manufacturing Industries" },
            { id: "c12-ie-9", chapterNumber: 9, title: "Planning and Sustainable Development in Indian Context" },
            { id: "c12-ie-10", chapterNumber: 10, title: "Transport and Communication" },
            { id: "c12-ie-11", chapterNumber: 11, title: "International Trade" },
            { id: "c12-ie-12", chapterNumber: 12, title: "Geographical Perspective on Selected Issues and Problems" },
        ]
    }
];
