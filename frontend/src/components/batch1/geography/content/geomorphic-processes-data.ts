import { LessonContent } from "./types";

export const ENDOGENIC_PROCESSES_CONTENT: LessonContent = {
    topicId: 'endogenic-processes', // Represents the group, effectively
    title: 'Endogenic Processes',
    description: 'Forces coming from within the earth, driven by radioactivity, rotational and tidal friction, and primordial heat.',
    sections: [
        {
            id: 'diastrophism',
            title: 'Diastrophism',
            content: [
                {
                    id: 'intro-dia',
                    type: 'text',
                    content: `**Diastrophism** includes all processes that move, elevate, or build up portions of the earth's crust.`
                },
                {
                    id: 'types-dia',
                    type: 'text',
                    content: `1. **Orogenic:** Mountain building (Folding).
2. **Epeirogenic:** Continent building (Uplift or Subsidence).`
                }
            ]
        },
        {
            id: 'volcanism',
            title: 'Volcanism',
            content: [
                {
                    id: 'volcano-def',
                    type: 'text',
                    content: `Movement of molten rock (magma) onto or towards the earth's surface.`
                },
                {
                    id: 'volcano-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop',
                    caption: 'Lava flow from an active volcano.',
                    alt: 'Volcano eruption'
                }
            ]
        },
        {
            id: 'earthquakes',
            title: 'Earthquakes',
            content: [
                {
                    id: 'eq-def',
                    type: 'text',
                    content: `Sudden shaking or trembling of the earth caused by the release of energy in the lithosphere.`
                },
                {
                    id: 'eq-waves',
                    type: 'text',
                    content: `**Seismic Waves:** P-waves (Primary) and S-waves (Secondary) propagate this energy.`
                }
            ]
        }
    ]
};

// Start specific contents for the micro-topics
export const VOLCANISM_CONTENT: LessonContent = {
    topicId: 'volcanism',
    title: 'Volcanism & Landforms',
    description: 'The eruption of molten rock (magma) onto the Earth\'s surface and the landforms it creates.',
    sections: [
        {
            id: 'intro',
            title: 'What is Volcanism?',
            content: [
                {
                    id: 'def',
                    type: 'text',
                    content: `Volcanism includes the formation of magma and its cooling to become igneous rocks. Magma that reaches the surface is called **Lava**.`
                }
            ]
        },
        {
            id: 'classification',
            title: 'Classification of Volcanoes',
            content: [
                {
                    id: 'shield',
                    type: 'text',
                    content: `### Shield Volcanoes
- Largest volcanoes.
- Fluid basaltic lava.
- Not steep (e.g., Hawaii).`
                },
                {
                    id: 'composite',
                    type: 'text',
                    content: `### Composite Volcanoes
- Cool and viscous lava.
- Explosive eruptions.
- Steep cones (e.g., Mt. Fuji).`
                },
                {
                    id: 'caldera',
                    type: 'text',
                    content: `### Caldera
- Most explosive.
- Collapses on itself upon eruption.`
                }
            ]
        },
        {
            id: 'landforms',
            title: 'Intrusive Volcanic Landforms',
            content: [
                {
                    id: 'intrusive-list',
                    type: 'text',
                    content: `When magma cools within the crust:
1. **Batholiths:** Large granitic bodies.
2. **Laccoliths:** Dome-shaped bodies.
3. **Dykes:** Vertical wall-like structures.
4. **Sills:** Horizontal sheets.`
                }
            ]
        }
    ]
};

export const EARTHQUAKE_CONTENT: LessonContent = {
    topicId: 'earthquakes',
    title: 'Earthquakes',
    description: 'Understanding the mechanics of seismic activity, wave propagation, and measurement scales.',
    sections: [
        {
            id: 'mechanism',
            title: 'Mechanism',
            content: [
                {
                    id: 'focus-epicenter',
                    type: 'callout',
                    content: '📍 **Hypocenter (Focus):** The point of origin inside the earth.\n📍 **Epicenter:** The point on the surface directly above the focus.'
                }
            ]
        },
        {
            id: 'scales',
            title: 'Measuring Earthquakes',
            content: [
                {
                    id: 'magnitude',
                    type: 'text',
                    content: `**Richter Scale:** Measures **Magnitude** (energy released). Scale 0-10.`
                },
                {
                    id: 'intensity',
                    type: 'text',
                    content: `**Mercalli Scale:** Measures **Intensity** (visible damage). Scale 1-12.`
                }
            ]
        }
    ]
};

export const EXOGENIC_PROCESSES_CONTENT: LessonContent = {
    topicId: 'exogenic-processes',
    title: 'Exogenic Processes',
    description: 'Processes operating on the Earth\'s surface, primarily driven by solar energy and gravity.',
    sections: [
        {
            id: 'weathering',
            title: 'Weathering',
            content: [
                {
                    id: 'weathering-def',
                    type: 'text',
                    content: `Mechanical disintegration and chemical decomposition of rocks *in situ* (without transport).`
                },
                {
                    id: 'types-w',
                    type: 'text',
                    content: `1. **Physical:** Frost wedging, thermal expansion.
2. **Chemical:** Oxidation, carbonation, hydration.
3. **Biological:** Roots, burrowing animals.`
                }
            ]
        },
        {
            id: 'mass-movements',
            title: 'Mass Movements',
            content: [
                {
                    id: 'mm-def',
                    type: 'text',
                    content: `Movement of rock debris down a slope under the direct influence of **gravity**.`
                },
                {
                    id: 'mm-types',
                    type: 'text',
                    content: `**Rapid:** Earthflow, Mudflow, Avalanche.
**Slow:** Creep, Solifluction.`
                }
            ]
        }
    ]
};
