// Savinder Singh Physical Geography Data Registry

export interface SavinderSinghChapter {
    id: string;
    chapterNumber: number;
    title: string;
    level1McqCount?: number;
    level2McqCount?: number;
    level3McqCount?: number;
}

export const SAVINDER_SINGH_CHAPTERS: SavinderSinghChapter[] = [
    { id: "ss-1", chapterNumber: 1, title: "Nature and Scope of Physical Geography", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-2", chapterNumber: 2, title: "Origin of the Earth", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-3", chapterNumber: 3, title: "Earth's Interior", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-4", chapterNumber: 4, title: "Continents and Oceans", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-5", chapterNumber: 5, title: "Theory of Isostasy", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-6", chapterNumber: 6, title: "Earth Movements", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-7", chapterNumber: 7, title: "Plate Tectonics", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-8", chapterNumber: 8, title: "Vulcanicity", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-9", chapterNumber: 9, title: "Earthquakes", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-10", chapterNumber: 10, title: "Mountains and Folded Mountains", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-11", chapterNumber: 11, title: "Weathering and Mass Movement", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-12", chapterNumber: 12, title: "Geomorphic Cycle", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-13", chapterNumber: 13, title: "Fluvial Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-14", chapterNumber: 14, title: "Karst Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-15", chapterNumber: 15, title: "Coastal Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-16", chapterNumber: 16, title: "Arid and Semi-Arid Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-17", chapterNumber: 17, title: "Glacial Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-18", chapterNumber: 18, title: "Periglacial Geomorphology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-19", chapterNumber: 19, title: "Composition and Structure of the Atmosphere", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-20", chapterNumber: 20, title: "Insolation and Heat Budget", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-21", chapterNumber: 21, title: "Temperature", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-22", chapterNumber: 22, title: "Atmospheric Pressure and Winds", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-23", chapterNumber: 23, title: "Monsoon", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-24", chapterNumber: 24, title: "Local Winds", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-25", chapterNumber: 25, title: "Humidity and Precipitation", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-26", chapterNumber: 26, title: "Air Masses", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-27", chapterNumber: 27, title: "Fronts", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-28", chapterNumber: 28, title: "Cyclones and Anticyclones", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-29", chapterNumber: 29, title: "Climatic Classification", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-30", chapterNumber: 30, title: "Ocean Bottom Relief", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-31", chapterNumber: 31, title: "Temperature and Salinity of Ocean Water", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-32", chapterNumber: 32, title: "Ocean Deposits", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-33", chapterNumber: 33, title: "Ocean Tides", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-34", chapterNumber: 34, title: "Ocean Currents", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-35", chapterNumber: 35, title: "Coral Reefs", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-36", chapterNumber: 36, title: "Marine Resources", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-37", chapterNumber: 37, title: "Biosphere", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-38", chapterNumber: 38, title: "Ecosystems and Ecology", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-39", chapterNumber: 39, title: "Biomes", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-40", chapterNumber: 40, title: "Environmental Degradation", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-41", chapterNumber: 41, title: "Environmental Pollution", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-42", chapterNumber: 42, title: "Global Warming and Climate Change", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-43", chapterNumber: 43, title: "Biodiversity Conservation", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-44", chapterNumber: 44, title: "Environmental Management", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 },
    { id: "ss-45", chapterNumber: 45, title: "Sustainable Development", level1McqCount: 20, level2McqCount: 15, level3McqCount: 10 }
];
