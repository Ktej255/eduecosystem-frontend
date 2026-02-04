
export type GeographyNodeType = 'root' | 'satellite' | 'continent' | 'node';
export type GeographyNodeStatus = 'locked' | 'active' | 'mastered';

export interface GeographyNode {
    id: string;
    title: string;
    type: GeographyNodeType;
    description?: string;
    icon?: string; // Lucide icon name or asset path
    coordinates: [number, number, number]; // x, y, z relative to parent or global
    status: GeographyNodeStatus;
    children?: GeographyNode[];
    slug?: string; // For routing

    // Integration with existing content
    relatedFlashcards?: string[]; // IDs from geography-flashcards.ts
    relatedMcqs?: string[]; // IDs from geography-mcqs.ts
}

// Helper to generate coordinates (placeholder logic for now)
// In a real 3D app, these would be carefully calculated positions.
// We will use a simple orbital layout.

export const SPATIAL_SYLLABUS: GeographyNode = {
    id: "geo-root",
    title: "The Geosphere",
    type: "root",
    description: "The Command Center for Global Geography",
    status: "active",
    coordinates: [0, 0, 0],
    children: [
        {
            id: "sat-physical",
            title: "Physical Geography",
            type: "satellite",
            description: "The Bedrock of Earth Sciences",
            coordinates: [10, 0, 0], // Orbiting
            status: "active",
            children: [
                {
                    id: "cont-geomorphology",
                    title: "Geomorphology",
                    type: "continent",
                    description: "The Lithosphere & Landforms",
                    coordinates: [2, 0, 0], // Relative to Satellite
                    status: "active",
                    children: [
                        { id: "node-origin-earth", title: "Origin of the Earth", type: "node", status: "active", coordinates: [0.5, 0.5, 0], slug: "/geography/physical/origin-earth" },
                        { id: "node-interior-earth", title: "Interior of the Earth", type: "node", status: "active", coordinates: [0.5, -0.5, 0], slug: "/geography/physical/interior-earth" },
                        { id: "node-continental-drift", title: "Continental Drift", type: "node", status: "active", coordinates: [-0.5, 0.5, 0], slug: "/geography/physical/continental-drift" },
                        { id: "node-seafloor-spreading", title: "Sea Floor Spreading", type: "node", status: "active", coordinates: [-0.5, -0.5, 0], slug: "/geography/physical/seafloor-spreading" },
                        { id: "node-plate-tectonics", title: "Plate Tectonics", type: "node", status: "active", coordinates: [0, 1, 0], slug: "/geography/physical/plate-tectonics", description: "Super-Critical Node" },
                        { id: "node-forces", title: "Endogenic & Exogenic Forces", type: "node", status: "active", coordinates: [0, -1, 0], slug: "/geography/physical/forces" },
                        { id: "node-volcanism", title: "Volcanism", type: "node", status: "active", coordinates: [1, 0, 0], slug: "/geography/physical/volcanism" },
                        { id: "node-earthquakes", title: "Earthquakes", type: "node", status: "active", coordinates: [-1, 0, 0], slug: "/geography/physical/earthquakes" },
                        { id: "node-rock-cycle", title: "Rocks & Rock Cycle", type: "node", status: "active", coordinates: [0.8, 0.8, 0], slug: "/geography/physical/rocks" },
                        { id: "node-weathering", title: "Weathering & Mass Movement", type: "node", status: "active", coordinates: [-0.8, -0.8, 0], slug: "/geography/physical/weathering" },
                        { id: "node-landform-cycles", title: "Landform Development Cycles", type: "node", status: "active", coordinates: [0.8, -0.8, 0], slug: "/geography/physical/landform-cycles" },
                        { id: "node-fluvial", title: "Fluvial Landforms", type: "node", status: "active", coordinates: [-0.8, 0.8, 0], slug: "/geography/physical/fluvial" },
                        { id: "node-aeolian", title: "Aeolian Landforms", type: "node", status: "active", coordinates: [0, 0.5, 0.5], slug: "/geography/physical/aeolian" },
                        { id: "node-glacial", title: "Glacial Landforms", type: "node", status: "active", coordinates: [0, -0.5, 0.5], slug: "/geography/physical/glacial" },
                        { id: "node-karst", title: "Karst Topography", type: "node", status: "active", coordinates: [0.5, 0, 0.5], slug: "/geography/physical/karst" },
                        { id: "node-coastal", title: "Coastal Landforms", type: "node", status: "active", coordinates: [-0.5, 0, 0.5], slug: "/geography/physical/coastal" }
                    ]
                },
                {
                    id: "cont-climatology",
                    title: "Climatology",
                    type: "continent",
                    description: "The Atmosphere",
                    coordinates: [-2, 0, 0],
                    status: "active",
                    children: [
                        { id: "node-atmosphere", title: "Structure of Atmosphere", type: "node", status: "active", coordinates: [0, 0, 0], slug: "/geography/physical/atmosphere" },
                        { id: "node-insolation", title: "Insolation & Heat Budget", type: "node", status: "active", coordinates: [0.5, 0, 0], slug: "/geography/physical/insolation" },
                        { id: "node-temp-dist", title: "Temperature Distribution", type: "node", status: "locked", coordinates: [1, 0, 0], slug: "/geography/physical/temperature" },
                        { id: "node-pressure-belts", title: "Pressure Belts", type: "node", status: "locked", coordinates: [-0.5, 0, 0], slug: "/geography/physical/pressure-belts" },
                        { id: "node-winds", title: "Planetary Winds", type: "node", status: "locked", coordinates: [-1, 0, 0], slug: "/geography/physical/winds" },
                        { id: "node-jet-streams", title: "Jet Streams", type: "node", status: "locked", coordinates: [0, 0.5, 0], slug: "/geography/physical/jet-streams" },
                        { id: "node-air-masses", title: "Air Masses & Fronts", type: "node", status: "locked", coordinates: [0, -0.5, 0], slug: "/geography/physical/air-masses" },
                        { id: "node-cyclones", title: "Cyclones", type: "node", status: "active", coordinates: [0, 1, 0], slug: "/geography/physical/cyclones" },
                        { id: "node-humidity", title: "Humidity & Precipitation", type: "node", status: "locked", coordinates: [0, -1, 0], slug: "/geography/physical/precipitation" },
                        { id: "node-clouds", title: "Clouds", type: "node", status: "locked", coordinates: [0.5, 0.5, 0], slug: "/geography/physical/clouds" },
                        { id: "node-climatic-regions", title: "World Climatic Regions", type: "node", status: "active", coordinates: [-0.5, -0.5, 0], slug: "/geography/physical/climatic-regions" },
                        { id: "node-climate-change", title: "Climate Change", type: "node", status: "locked", coordinates: [1, 1, 0], slug: "/geography/physical/climate-change" }
                    ]
                },
                {
                    id: "cont-oceanography",
                    title: "Oceanography",
                    type: "continent",
                    description: "The Hydrosphere",
                    coordinates: [0, 2, 0],
                    status: "active",
                    children: [
                        { id: "node-bottom-relief", title: "Bottom Relief of Oceans", type: "node", status: "active", coordinates: [0, 0, 0], slug: "/geography/physical/bottom-relief" },
                        { id: "node-temp-salinity", title: "Temp & Salinity", type: "node", status: "active", coordinates: [0.5, 0, 0], slug: "/geography/physical/ocean-properties" },
                        { id: "node-currents", title: "Ocean Currents", type: "node", status: "active", coordinates: [-0.5, 0, 0], slug: "/geography/physical/ocean-currents" },
                        { id: "node-tides", title: "Tides & Waves", type: "node", status: "locked", coordinates: [0, 0.5, 0], slug: "/geography/physical/tides" },
                        { id: "node-coral", title: "Coral Reefs", type: "node", status: "locked", coordinates: [0, -0.5, 0], slug: "/geography/physical/coral-reefs" },
                        { id: "node-deposits", title: "Ocean Deposits", type: "node", status: "locked", coordinates: [0.5, 0.5, 0], slug: "/geography/physical/ocean-deposits" },
                        { id: "node-unclos", title: "Law of the Sea", type: "node", status: "locked", coordinates: [-0.5, -0.5, 0], slug: "/geography/physical/unclos" }
                    ]
                },
                {
                    id: "cont-biogeography",
                    title: "Biogeography",
                    type: "continent",
                    description: "The Biosphere",
                    coordinates: [0, -2, 0],
                    status: "locked",
                    children: [
                        { id: "node-soil-genesis", title: "Soil Genesis", type: "node", status: "locked", coordinates: [0, 0, 0], slug: "/geography/physical/soil-genesis" },
                        { id: "node-soil-erosion", title: "Soil Erosion", type: "node", status: "locked", coordinates: [0.5, 0, 0], slug: "/geography/physical/soil-erosion" },
                        { id: "node-biomes", title: "Biomes of the World", type: "node", status: "locked", coordinates: [-0.5, 0, 0], slug: "/geography/physical/biomes" },
                        { id: "node-ecosystems", title: "Ecosystems", type: "node", status: "locked", coordinates: [0, 0.5, 0], slug: "/geography/physical/ecosystems" },
                        { id: "node-biodiversity", title: "Biodiversity Hotspots", type: "node", status: "locked", coordinates: [0, -0.5, 0], slug: "/geography/physical/biodiversity" }
                    ]
                }
            ]
        },
        {
            id: "sat-indian",
            title: "Indian Geography",
            type: "satellite",
            description: "The Core Focus",
            coordinates: [-10, 0, 0],
            status: "active",
            children: [
                { id: "node-india-location", title: "Location & Extent", type: "node", status: "active", coordinates: [0, 0, 0], slug: "/geography/indian/location" },
                { id: "node-india-physiography", title: "Physiography", type: "node", status: "active", coordinates: [0.5, 0.5, 0], slug: "/geography/indian/physiography" },
                { id: "node-india-drainage", title: "Drainage System", type: "node", status: "active", coordinates: [-0.5, 0.5, 0], slug: "/geography/indian/drainage" },
                { id: "node-india-climate", title: "Climate & Monsoons", type: "node", status: "active", coordinates: [0, -0.8, 0], slug: "/geography/indian/climate" },
                { id: "node-india-vegetation", title: "Natural Vegetation", type: "node", status: "active", coordinates: [-0.5, -0.5, 0], slug: "/geography/indian/vegetation" }
            ]
        },
        {
            id: "sat-human",
            title: "Human & Economic",
            type: "satellite",
            description: "Society & Economy",
            coordinates: [0, 10, 0],
            status: "locked",
            children: [] // Placeholder
        },
        {
            id: "sat-mapping",
            title: "Mapping",
            type: "satellite",
            description: "Cartography Skills",
            coordinates: [0, -10, 0],
            status: "locked",
            children: [] // Placeholder
        }
    ]
};
