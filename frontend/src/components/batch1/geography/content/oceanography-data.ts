import { LessonContent } from "./types";

export const OCEAN_RELIEF_CONTENT: LessonContent = {
    topicId: 'ocean-relief',
    title: 'Ocean Relief',
    description: 'The bottom of the ocean is as rugged as the land surface, with mountain ranges, deep trenches, and vast plains.',
    sections: [
        {
            id: 'major-divisions',
            title: 'Major Divisions of Ocean Floor',
            content: [
                {
                    id: 'shelf',
                    type: 'text',
                    content: `### 1. Continental Shelf
- Shallowest part. Width varies (Siberian shelf is widest).
- Depth: 30-600m. Average gradient: 1° or less.
- **Importance:** Rich in fish, minerals, and fossil fuels.`
                },
                {
                    id: 'slope',
                    type: 'text',
                    content: `### 2. Continental Slope
- Sharp increase in gradient.
- Connects shelf to deep sea floor.
- Presence of Submarine Canyons.`
                },
                {
                    id: 'rise',
                    type: 'text',
                    content: `### 3. Continental Rise
- Gentle slope at the base of the continental slope.`
                },
                {
                    id: 'abyssal',
                    type: 'text',
                    content: `### 4. Abyssal Plain (Deep Sea Plain)
- Flattest and smoothest regions on Earth.
- Depth: 3,000 to 6,000m.`
                }
            ]
        },
        {
            id: 'minor-relief',
            title: 'Minor Relief Features',
            content: [
                {
                    id: 'mid-ocean-ridges',
                    type: 'text',
                    content: `### Mid-Ocean Ridges
- Largest mountain chain on Earth (Volcanic origin).
- Center of Sea Floor Spreading.`
                },
                {
                    id: 'trenches',
                    type: 'callout',
                    content: '🕳️ **Oceanic Trenches:** Deepest parts of the oceans (e.g., Mariana Trench ~11km). They are associated with convergent plate boundaries (Subduction).'
                },
                {
                    id: 'seamounts',
                    type: 'text',
                    content: `### Seamounts & Guyots
- **Seamounts:** Underwater volcanoes with pointed summits.
- **Guyots:** Flat-topped seamounts due to erosion.`
                }
            ]
        }
    ]
};

export const OCEAN_PROPERTIES_CONTENT: LessonContent = {
    topicId: 'ocean-properties',
    title: 'Ocean Water Properties',
    description: 'Understanding the variation in temperature and salinity across the global oceans.',
    sections: [
        {
            id: 'temperature',
            title: 'Temperature of Ocean Water',
            content: [
                {
                    id: 'factors-temp',
                    type: 'text',
                    content: `### Factors Affecting Temperature
1. **Latitude:** Decreases from Equator to Poles.
2. **Unequal Distribution of Land & Water:** Northern hemisphere oceans are warmer than southern.
3. **Prevailing Winds:** Offshore winds bring cold upwelling water.`
                },
                {
                    id: 'vertical-temp',
                    type: 'callout',
                    content: '🌡️ **Thermocline:** A layer in the ocean where temperature decreases rapidly with increasing depth. It separates warm surface water from cold deep water.'
                }
            ]
        },
        {
            id: 'salinity',
            title: 'Salinity of Ocean Water',
            content: [
                {
                    id: 'salinity-def',
                    type: 'text',
                    content: `**Salinity** = The total content of dissolved salts in seawater (expressed as parts per thousand - ‰). Global average is **35‰**.`
                },
                {
                    id: 'factors-salinity',
                    type: 'text',
                    content: `### Factors Affecting Salinity
- **Evaporation:** Increases salinity.
- **Precipitation:** Decreases salinity.
- **Freshwater Inflow:** (Rivers, melting ice) Decreases salinity.`
                },
                {
                    id: 'salinity-peaks',
                    type: 'text',
                    content: `### Highest Salinity Water Bodies
1. Lake Van (Turkey): 330‰
2. Dead Sea: 238‰
3. Great Salt Lake: 220‰`
                }
            ]
        }
    ]
};
