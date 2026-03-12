import { LessonContent } from "./types";

export const ATMOSPHERE_STRUCTURE_CONTENT: LessonContent = {
    topicId: 'atmosphere-structure',
    title: 'Atmosphere Composition & Structure',
    description: 'The blanket of gases surrounding the Earth that sustains life and protects us from the sun\'s harmful rays.',
    sections: [
        {
            id: 'composition',
            title: 'Composition of Atmosphere',
            content: [
                {
                    id: 'gases',
                    type: 'text',
                    content: `### Major Gases
1. **Nitrogen (78%):** Inert gas, essential for life (proteins).
2. **Oxygen (21%):** Vital for respiration and combustion.
3. **Argon (0.93%):** Inert.
4. **Carbon Dioxide (0.04%):** Greenhouse gas, vital for photosynthesis.`
                },
                {
                    id: 'dust-water',
                    type: 'callout',
                    content: '🌫️ **Dust Particles:** Act as hygroscopic nuclei for cloud formation and scatter light (blue sky, red sunset).'
                }
            ]
        },
        {
            id: 'layers',
            title: 'Structure of Atmosphere',
            content: [
                {
                    id: 'troposphere',
                    type: 'text',
                    content: `### 1. Troposphere (0-18 km)
- All weather phenomena occur here.
- Temperature decreases with height (**Lapse Rate**: 6.5°C per km).`
                },
                {
                    id: 'stratosphere',
                    type: 'text',
                    content: `### 2. Stratosphere (18-50 km)
- Contains the **Ozone Layer** (absorbs UV rays).
- Ideal for flying jets (no turbulence).`
                },
                {
                    id: 'mesosphere',
                    type: 'text',
                    content: `### 3. Mesosphere (50-80 km)
- Coldest layer (-100°C).
- Meteorites burn up here.`
                },
                {
                    id: 'thermosphere',
                    type: 'text',
                    content: `### 4. Thermosphere (80-400 km)
- Contains **Ionosphere** (reflects radio waves).
- Aurora Borealis/Australis occur here.`
                }
            ]
        },
        {
            id: 'quiz-section',
            title: 'Test Your Knowledge',
            content: [
                {
                    id: 'atmos-q1',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "In which layer of the atmosphere do most weather phenomena occur?",
                        options: [
                            "Stratosphere",
                            "Mesosphere",
                            "Troposphere",
                            "Thermosphere"
                        ],
                        correctIndex: 2,
                        explanation: "The Troposphere is the lowest layer where we live, and it contains almost all of the water vapor and aerosols, making it the site of almost all weather phenomena."
                    }
                },
                {
                    id: 'atmos-q2',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "The Ozone Layer, which protects us from harmful UV rays, is found in which layer?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Ionosphere"
                        ],
                        correctIndex: 1,
                        explanation: "The Ozone Layer is concentrated in the Stratosphere, absorbing the majority of the Sun's harmful ultraviolet radiation."
                    }
                }
            ]
        }
    ]
};

export const INSOLATION_HEAT_CONTENT: LessonContent = {
    topicId: 'insolation-heat',
    title: 'Insolation & Heat Budget',
    description: 'How Earth receives energy from the Sun and balances it to maintain a habitable temperature.',
    sections: [
        {
            id: 'insolation',
            title: 'Insolation',
            content: [
                {
                    id: 'def-in',
                    type: 'text',
                    content: `**Insolation** = **In**coming **Sol**ar **Ra**diation.
Earth intercepts only 1/2 billionth of solar energy.`
                },
                {
                    id: 'factors',
                    type: 'text',
                    content: `### Factors Affecting Insolation
1. **Angle of Incidence:** Vertical rays = more heat (Equator).
2. **Duration of Day:** Longer days = more heat.
3. **Transparency of Atmosphere:** Clouds reflect sunlight.`
                }
            ]
        },
        {
            id: 'heat-budget',
            title: 'Heat Budget of Earth',
            content: [
                {
                    id: 'budget-def',
                    type: 'text',
                    content: `The balance between incoming solar radiation and outgoing terrestrial radiation.`
                },
                {
                    id: 'albedo',
                    type: 'callout',
                    content: '❄️ **Albedo:** The reflectivity of a surface. Snow has high albedo (reflects ~90%), while asphalt has low albedo.'
                },
                {
                    id: 'balance',
                    type: 'text',
                    content: `**Total Incoming (100 units):**
- 35 units reflected back (Albedo).
- 65 units absorbed (14 by atmosphere, 51 by earth).

**Total Outgoing (65 units):**
- 17 units directly to space.
- 48 units from atmosphere to space.`
                }
            ]
        }
    ]
};
