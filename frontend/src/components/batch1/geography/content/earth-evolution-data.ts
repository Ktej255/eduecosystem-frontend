import { LessonContent } from "./types";

export const GEO_TIME_SCALE_CONTENT: LessonContent = {
    topicId: 'geo-time-scale',
    title: 'Geological Time Scale',
    description: 'A system of chronological dating that relates stratigraphy to time, used by geologists to describe the timing and relationships of events in Earth history.',
    sections: [
        {
            id: 'intro-gts',
            title: 'Understanding Deep Time',
            content: [
                {
                    id: 'gts-intro-text',
                    type: 'text',
                    content: `The history of Earth is divided into hierarchical units: **Eons**, **Eras**, **Periods**, **Epochs**, and **Ages**. This vast stretch of time, spanning 4.6 billion years, is known as "Deep Time".`
                },
                {
                    id: 'gts-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2000&auto=format&fit=crop', // Placeholder geological strata
                    caption: 'Stratigraphic layers reveal the chronological history of Earth.',
                    alt: 'Layers of rock strata'
                }
            ]
        },
        {
            id: 'major-divisions',
            title: 'Major Divisions of Time',
            content: [
                {
                    id: 'eons',
                    type: 'text',
                    content: `### Eons (The Largest Measure)
1. **Hadean**: The "hellish" beginning, formation of Earth.
2. **Archean**: Cooling of crust, first life (bacteria).
3. **Proterozoic**: Oxygenation of atmosphere, early multicellular life.
4. **Phanerozoic**: "Visible life", the current eon starting 541 million years ago.`
                },
                {
                    id: 'callout-precambrian',
                    type: 'callout',
                    content: '💡 **Precambrian Time:** Hadean, Archean, and Proterozoic eons together make up about **88%** of Earth\'s history.'
                }
            ]
        },
        {
            id: 'gts-quiz',
            title: 'Check Your Understanding',
            content: [
                {
                    id: 'q1',
                    type: 'quiz',
                    content: 'Which Eon accounts for the longest duration of Earth\'s history?',
                }
            ]
        }
    ]
};

export const ORIGIN_OF_EARTH_CONTENT: LessonContent = {
    topicId: 'origin-earth',
    title: 'Origin of Earth',
    description: 'Explore the Nebular Hypothesis and the early formation of our planet from a cloud of gas and dust.',
    sections: [
        {
            id: 'nebular-hypothesis',
            title: 'The Nebular Hypothesis',
            content: [
                {
                    id: 'solar-nebula',
                    type: 'text',
                    content: `The most widely accepted theory is the **Nebular Hypothesis**, proposed by Kant and Laplace. It suggests that the Solar System formed from a giant, rotating cloud of gas and dust called the **Solar Nebula**.`
                },
                {
                    id: 'formation-steps',
                    type: 'text',
                    content: `### Key Stages
1. **Collapse**: The nebula collapsed under its own gravity, possibly triggered by a nearby supernova.
2. **Flattening**: Conservation of angular momentum caused the cloud to spin faster and flatten into a disk.
3. **Accretion**: Particles collided and stuck together to form planetesimals, which grew into protoplanets.`
                }
            ]
        }
    ]
};

export const EVOLUTION_SPHERES_CONTENT: LessonContent = {
    topicId: 'evolution-spheres',
    title: 'Evolution of Lithosphere & Atmosphere',
    description: 'How Earth transformed from a molten ball into a habitable planet with a solid crust, ocean, and atmosphere.',
    sections: [
        {
            id: 'lithosphere',
            title: 'Evolution of Lithosphere',
            content: [
                {
                    id: 'differentiation',
                    type: 'text',
                    content: `The early Earth was molten and volatile. As it cooled, heavier elements like Iron and Nickel sank to the center to form the **Core**, while lighter silicates floated to form the **Crust**. This process is called **Differentiation**.`
                }
            ]
        },
        {
            id: 'atmosphere',
            title: 'Evolution of Atmosphere',
            content: [
                {
                    id: 'degassing',
                    type: 'text',
                    content: `### Stage 1: Loss of Primordial Atmosphere
Solar winds stripped away the early hydrogen and helium atmosphere.

### Stage 2: Degassing
Volcanic eruptions released water vapor, nitrogen, carbon dioxide, methane, and ammonia, forming the secondary atmosphere.

### Stage 3: Oxygenation
Photosynthesis by cyanobacteria (around 2.5 billion years ago) introduced Oxygen, leading to the **Great Oxygenation Event**.`
                },
                {
                    id: 'photosynthesis-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=2000&auto=format&fit=crop',
                    caption: 'Algae bloom: Early life forms played a crucial role in creating our oxygen-rich atmosphere.',
                    alt: 'Algae in water'
                }
            ]
        }
    ]
};
