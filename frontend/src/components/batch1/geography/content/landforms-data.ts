import { LessonContent } from "./types";

export const FLUVIAL_LANDFORMS_CONTENT: LessonContent = {
    topicId: 'fluvial-landforms',
    title: 'Fluvial Landforms',
    description: 'Landforms created by the action of running water (rivers).',
    sections: [
        {
            id: 'stages',
            title: 'Stages of a River',
            content: [
                {
                    id: 'youth',
                    type: 'text',
                    content: `**Youth Stage:** V-shaped valleys, Waterfalls, Rapids. Exploring vertical erosion.`
                },
                {
                    id: 'mature',
                    type: 'text',
                    content: `**Mature Stage:** Meanders, Wider valleys. Lateral erosion begins.`
                },
                {
                    id: 'old',
                    type: 'text',
                    content: `**Old Stage:** Ox-bow lakes, Deltas, Floodplains. Deposition dominates.`
                }
            ]
        },
        {
            id: 'fluvial-gallery',
            title: 'Visuals',
            content: [
                {
                    id: 'fluvial-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1437482096225-6ed68ba418fd?q=80&w=2000&auto=format&fit=crop',
                    caption: 'A meandering river in its mature stage.',
                    alt: 'Meandering River'
                }
            ]
        }
    ]
};

export const AEOLIAN_LANDFORMS_CONTENT: LessonContent = {
    topicId: 'aeolian-landforms',
    title: 'Aeolian Landforms',
    description: 'Landforms created by the wind, primarily in arid and semi-arid regions.',
    sections: [
        {
            id: 'erosional',
            title: 'Erosional Landforms',
            content: [
                {
                    id: 'mushroom',
                    type: 'text',
                    content: `**Mushroom Rocks:** Rocks with narrow bases and broad tops due to basal erosion.`
                },
                {
                    id: 'yardang',
                    type: 'text',
                    content: `**Yardangs:** Ridges of hard rock separated by grooves of soft rock.`
                }
            ]
        },
        {
            id: 'depositional',
            title: 'Depositional Landforms',
            content: [
                {
                    id: 'dunes',
                    type: 'text',
                    content: `**Sand Dunes:** Barchans (crescent), Seifs (linear), Parabolic dunes.`
                },
                {
                    id: 'loess',
                    type: 'text',
                    content: `**Loess:** Fine-grained, wind-blown deposits, often fertile.`
                }
            ]
        }
    ]
};

export const GLACIAL_LANDFORMS_CONTENT: LessonContent = {
    topicId: 'glacial-landforms',
    title: 'Glacial Landforms',
    description: 'Landforms created by moving ice masses.',
    sections: [
        {
            id: 'erosional-g',
            title: 'Erosional Features',
            content: [
                {
                    id: 'cirque',
                    type: 'text',
                    content: `**Cirque:** Amphitheater-shaped hollow.`
                },
                {
                    id: 'u-valley',
                    type: 'text',
                    content: `**U-Shaped Valley:** Formed by glacial trough modifying a V-shaped valley.`
                }
            ]
        },
        {
            id: 'depositional-g',
            title: 'Depositional Features',
            content: [
                {
                    id: 'moraines',
                    type: 'text',
                    content: `**Moraines:** Ridges of till deposited by glaciers (Lateral, Medial, Terminal).`
                },
                {
                    id: 'drumlins',
                    type: 'text',
                    content: `**Drumlins:** "Basket of eggs" topography.`
                }
            ]
        }
    ]
};

export const COASTAL_KARST_CONTENT: LessonContent = {
    topicId: 'coastal-karst',
    title: 'Coastal & Karst Landforms',
    description: 'Landforms created by waves and groundwater action.',
    sections: [
        {
            id: 'karst',
            title: 'Karst Topography (Groundwater)',
            content: [
                {
                    id: 'karst-features',
                    type: 'text',
                    content: `Formed in limestone regions by dissolution.
- **Sinkholes:** Funnel-shaped depressions.
- **Stalagmites/Stalactites:** Cave deposits.`
                }
            ]
        },
        {
            id: 'coastal',
            title: 'Coastal Landforms (Waves)',
            content: [
                {
                    id: 'coastal-features',
                    type: 'text',
                    content: `Action of waves, tides, and currents.
- **Erosional:** Cliffs, Sea Arches, Stacks.
- **Depositional:** Beaches, Spits, Bars.`
                }
            ]
        }
    ]
};
