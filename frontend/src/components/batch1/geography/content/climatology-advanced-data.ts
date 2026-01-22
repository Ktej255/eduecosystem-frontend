import { LessonContent } from "./types";

export const ATMOSPHERIC_CIRCULATION_CONTENT: LessonContent = {
    topicId: 'atmospheric-circulation',
    title: 'Atmospheric Circulation',
    description: 'The large-scale movement of air, driven by solar heating and Earth\'s rotation, which redistributes heat across the globe.',
    sections: [
        {
            id: 'pressure-belts',
            title: 'Pressure Belts',
            content: [
                {
                    id: 'intro-p',
                    type: 'text',
                    content: `Air moves from High Pressure to Low Pressure.`
                },
                {
                    id: 'equatorial-low',
                    type: 'text',
                    content: `**1. Equatorial Low (ITCZ):** Thermal low due to intense heating. "Doldrums" (calm winds).`
                },
                {
                    id: 'subtropical-high',
                    type: 'text',
                    content: `**2. Sub-Tropical High (STHP):** Dynamic high. Air sinks at 30°N/S. "Horse Latitudes".`
                },
                {
                    id: 'polar-high',
                    type: 'text',
                    content: `**3. Polar High:** Thermal high due to extreme cold.`
                }
            ]
        },
        {
            id: 'winds',
            title: 'Planetary Winds',
            content: [
                {
                    id: 'coriolis',
                    type: 'callout',
                    content: '🌪️ **Coriolis Force:** Deflects winds to the **Right** in Zenith (Northern Hemisphere) and **Left** in Nadir (Southern Hemisphere).'
                },
                {
                    id: 'trade-winds',
                    type: 'text',
                    content: `**Trade Winds:** Blow from STHP to Equatorial Low. Easterlies.`
                },
                {
                    id: 'westerlies',
                    type: 'text',
                    content: `**Westerlies:** Blow from STHP to Sub-Polar Low.`
                },
                {
                    id: 'jet-streams',
                    type: 'text',
                    content: `**Jet Streams:** Narrow bands of strong winds in the upper troposphere.`
                }
            ]
        }
    ]
};

export const WATER_ATMOSPHERE_CONTENT: LessonContent = {
    topicId: 'water-atmosphere',
    title: 'Water in the Atmosphere',
    description: 'The presence of water vapor, the formation of clouds, and precipitation mechanisms.',
    sections: [
        {
            id: 'humidity',
            title: 'Humidity',
            content: [
                {
                    id: 'abs-vs-rel',
                    type: 'text',
                    content: `**Absolute Humidity:** Actual amount of water vapor (g/m³).
**Relative Humidity (RH):** % of moisture capacity air holds at a given temperature. Saturation = 100% RH.`
                }
            ]
        },
        {
            id: 'clouds',
            title: 'Clouds',
            content: [
                {
                    id: 'cloud-fam',
                    type: 'text',
                    content: `### Classification
- **Cirrus:** High, wispy, ice crystals.
- **Cumulus:** Cotton wool, fair weather.
- **Stratus:** Layered, dull weather.
- **Nimbus:** Rain-bearing (e.g., Cumulonimbus = Thunderstorm).`
                },
                {
                    id: 'cloud-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000&auto=format&fit=crop',
                    caption: 'Cumulus clouds forming on a sunny day.',
                    alt: 'Cumulus clouds'
                }
            ]
        }
    ]
};

export const CYCLONES_CONTENT: LessonContent = {
    topicId: 'air-masses-cyclones',
    title: 'Air Masses & Cyclones',
    description: 'Weather systems formed by the interaction of different air masses.',
    sections: [
        {
            id: 'air-masses',
            title: 'Air Masses',
            content: [
                {
                    id: 'am-def',
                    type: 'text',
                    content: `Large body of air with distinctive temperature and humidity.
**Source Regions:** Tropical (Warm), Polar (Cold), Continental (Dry), Maritime (Wet).`
                }
            ]
        },
        {
            id: 'tropical-cyclones',
            title: 'Tropical Cyclones',
            content: [
                {
                    id: 'tc-def',
                    type: 'text',
                    content: `Intense low-pressure systems forming over warm oceans (>27°C). Energy source: **Latent Heat of Condensation**.`
                },
                {
                    id: 'structure',
                    type: 'text',
                    content: `**Eye:** Calm center.
**Eye Wall:** Strongest winds.
**Spiral Bands:** Rain bands.`
                }
            ]
        }
    ]
};

export const CLIMATIC_REGIONS_CONTENT: LessonContent = {
    topicId: 'climatic-regions',
    title: 'Climatic Regions',
    description: 'Classification of world climates based on temperature and precipitation.',
    sections: [
        {
            id: 'koppen',
            title: 'Koppen\'s Classification',
            content: [
                {
                    id: 'codes',
                    type: 'text',
                    content: `### Major Groups
- **A:** Tropical (Af: Rainforest, Am: Monsoon).
- **B:** Dry (BWh: Desert).
- **C:** Temperate (Cs: Mediterranean).
- **D:** Continental.
- **E:** Polar.`
                }
            ]
        }
    ]
};
