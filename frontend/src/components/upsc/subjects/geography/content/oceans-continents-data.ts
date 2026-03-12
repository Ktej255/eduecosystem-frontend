import { LessonContent } from "./types";

export const CONTINENTAL_DRIFT_CONTENT: LessonContent = {
    topicId: 'continental-drift',
    title: 'Continental Drift Theory',
    description: 'Alfred Wegener\'s revolutionary idea that continents were once joined in a supercontinent called Pangaea.',
    sections: [
        {
            id: 'pangaea',
            title: 'Pangaea & Panthalassa',
            content: [
                {
                    id: 'intro',
                    type: 'text',
                    content: `Proposed in 1912 by **Alfred Wegener**, this theory suggests that about 250 million years ago, all landmasses were united in a supercontinent named **Pangaea**, surrounded by a super-ocean **Panthalassa**.`
                },
                {
                    id: 'drift-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop', // Placeholder map
                    caption: 'The breakup of Pangaea began in the Mesozoic Era.',
                    alt: 'World Map'
                }
            ]
        },
        {
            id: 'evidence',
            title: 'Evidence for Drift',
            content: [
                {
                    id: 'jig-saw',
                    type: 'text',
                    content: `### 1. Jig-Saw Fit
The coastlines of South America and Africa fit together remarkably well.`
                },
                {
                    id: 'fossils',
                    type: 'text',
                    content: `### 2. Fossil Evidence
Fossils of *Mesosaurus* (brackish water reptile) found only in South Africa and Brazil.`
                },
                {
                    id: 'rocks',
                    type: 'text',
                    content: `### 3. Geological Matching
Gold deposits in Ghana match those in Brazil.`
                }
            ]
        }
    ]
};

export const PLATE_TECTONICS_CONTENT: LessonContent = {
    topicId: 'plate-tectonics',
    title: 'Plate Tectonics',
    description: 'The unifying theory explaining the movement of Earth\'s lithospheric plates.',
    sections: [
        {
            id: 'concept',
            title: 'What is a Tectonic Plate?',
            content: [
                {
                    id: 'slab',
                    type: 'callout',
                    content: '🧱 A **Tectonic Plate** (or Lithospheric Plate) is a massive, irregularly shaped slab of solid rock, composed of both continental and oceanic lithosphere.'
                },
                {
                    id: 'movement',
                    type: 'text',
                    content: `Plates move horizontally over the **Asthenosphere** due to convection currents in the mantle.`
                }
            ]
        },
        {
            id: 'boundaries',
            title: 'Plate Boundaries',
            content: [
                {
                    id: 'divergent',
                    type: 'text',
                    content: `### 1. Divergent Boundaries
- Plates move apart.
- **Result:** Mid-Ocean Ridges, Rift Valleys.
- **Example:** Mid-Atlantic Ridge.`
                },
                {
                    id: 'convergent',
                    type: 'text',
                    content: `### 2. Convergent Boundaries
- Plates collide.
- **Ocean-Continent:** Subduction (Volcanoes, Trenches).
- **Continent-Continent:** Folding (Himalayas).`
                },
                {
                    id: 'transform',
                    type: 'text',
                    content: `### 3. Transform Boundaries
- Plates slide past each other.
- **Result:** Earthquakes (No creation/destruction of crust).
- **Example:** San Andreas Fault.`
                },
                {
                    id: 'tectonics-sim',
                    type: 'simulation',
                    content: 'Explore all 7 major tectonic plates in 3D - see convergent, divergent, and transform boundaries with animated plate movement!',
                    simulationType: 'plate-tectonics'
                }
            ]
        }
    ]
};
