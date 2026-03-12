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
                },
                {
                    id: 'fluvial-features',
                    type: 'text',
                    content: `**Key Erosional Features:**
- **Potholes & Plunge Pools:** Formed by rocky abrasion and waterfall base impact.
- **Incised Meanders:** Deeply cut meanders into hard rock due to rejuvenation.
- **River Terraces:** Step-like surfaces representing former floodplains.`
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
                },
                {
                    id: 'glacial-sim',
                    type: 'simulation',
                    content: 'Interactive transformation: Watch a river valley (V-shape) evolve into a glacial trough (U-shape) with moraines and lakes!',
                    simulationType: 'glacial-landforms'
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
                },
                {
                    id: 'glacial-deposits',
                    type: 'text',
                    content: `**Glacio-Fluvial Features:**
- **Eskers:** Long, winding ridges of sand and gravel.
- **Kames:** Terraces or small hills of stratified drift.
- **Outwash Plains:** Extensive depositional fans at the glacier terminus.`
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
- **Dolines & Uvalas:** Larger solution depressions formed by merged sinkholes.
- **Poljes:** Very large, flat-bottomed karst depressions.
- **Stalagmites/Stalactites:** Cave deposits (Calcite formations).`
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
- **Erosional:** Cliffs, Sea Arches, Stacks, Wave-cut platforms.
- **Depositional:** Beaches, Spits, Bars, Barrier Islands, Lagoons, Tombolos.`
                }
            ]
        }
    ]
};

export const VOLCANIC_LANDFORMS_CONTENT: LessonContent = {
    topicId: 'volcanic-landforms',
    title: 'Volcanic Landforms',
    description: 'Landforms resulting from the eruption and solidification of magma.',
    sections: [
        {
            id: 'intrusive',
            title: 'Intrusive Landforms (Plutonic)',
            content: [
                {
                    id: 'batholiths',
                    type: 'text',
                    content: `**Batholiths:** Large granitic bodies, cooled deep underground. Core of many mountain ranges.`
                },
                {
                    id: 'sub-volcanic',
                    type: 'text',
                    content: `**Hypabyssal Forms:**
- **Laccoliths:** Dome-shaped bodies with a level base (mushroom-like).
- **Lopoliths:** Saucer-shaped bodies.
- **Phacoliths:** Lens-shaped masses in anticlines/synclines.
- **Sills:** Horizontal sheets of solidified magma.
- **Dykes:** Vertical wall-like structures (e.g., Deccan Traps).`
                }
            ]
        },
        {
            id: 'extrusive',
            title: 'Extrusive Landforms (Volcanic)',
            content: [
                {
                    id: 'volcano-types',
                    type: 'text',
                    content: `**Types of Volcanoes:**
- **Shield Volcanoes:** Low viscosity lava, broad gentle slopes (e.g., Hawaii).
- **Composite/Stratovolcanoes:** High viscosity, explosive, steep cones (e.g., Mt. Fuji).
- **Caldera:** Collapsed depression after a massive eruption (e.g., Lake Toba).`
                },
                {
                    id: 'lava-plateaus',
                    type: 'text',
                    content: `**Flood Basalt Provinces:** Highly fluid lava traveling long distances forming stepped plains (Traps). Example: Deccan Traps, India.`
                }
            ]
        }
    ]
};
