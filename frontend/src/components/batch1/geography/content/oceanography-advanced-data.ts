import { LessonContent } from "./types";

export const WATER_MOVEMENT_CONTENT: LessonContent = {
    topicId: 'water-movement',
    title: 'Water Movement',
    description: 'The shifting patterns of waves, tides, and currents that circulate water and heat around the globe.',
    sections: [
        {
            id: 'waves',
            title: 'Waves',
            content: [
                {
                    id: 'waves-intro',
                    type: 'text',
                    content: `Waves are movements of energy, not water. Water particles move in small circles.`
                },
                {
                    id: 'tsunamis',
                    type: 'callout',
                    content: '🌊 **Tsunamis:** Seismic sea waves caused by underwater earthquakes, landslides, or volcanic eruptions. They have very long wavelengths and travel at high speeds (~800 km/h).'
                }
            ]
        },
        {
            id: 'tides',
            title: 'Tides',
            content: [
                {
                    id: 'tides-intro',
                    type: 'text',
                    content: `The periodic rise and fall of sea level due to gravitational forces exerted by the Moon and the Sun.`
                },
                {
                    id: 'spring-neap',
                    type: 'text',
                    content: `### Types of Tides
1. **Spring Tides:** Highest tides. Sun, Moon, and Earth in a straight line (Syzygy). Occurs during New Moon and Full Moon.
2. **Neap Tides:** Lowest tidal range. Sun and Moon at right angles to Earth (Quadrature).`
                }
            ]
        },
        {
            id: 'currents',
            title: 'Ocean Currents',
            content: [
                {
                    id: 'currents-def',
                    type: 'text',
                    content: `Currents are like rivers in the ocean. They are driven by wind (surface) and density differences (deep).`
                },
                {
                    id: 'currents-map',
                    type: 'text',
                    content: `### Major Currents
- **Gulf Stream (Warm):** Keeps North Europe warmer.
- **Kuroshio (Warm):** Pacific coast of Japan.
- **Canary (Cold):** West coast of Africa.`
                },
                {
                    id: 'current-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1502429819114-1f6cc967c744?q=80&w=2000&auto=format&fit=crop',
                    caption: 'Cold and warm currents meet to create rich fishing grounds.',
                    alt: 'Ocean waves'
                }
            ]
        },
        {
            id: 'quiz-section',
            title: 'Review: Ocean Dynamics',
            content: [
                {
                    id: 'ocean-q1',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "Which of the following causes 'Spring Tides'?",
                        options: [
                            "Sun and Moon at right angles to Earth",
                            "Sun, Moon, and Earth in a straight line",
                            "Earth is closest to the Sun (Perihelion)",
                            "Strong winds during a cyclone"
                        ],
                        correctIndex: 1,
                        explanation: "Spring tides occur when the Sun, Moon, and Earth align (syzygy), combining the gravitational pull of the Sun and Moon to create higher high tides."
                    }
                },
                {
                    id: 'ocean-q2',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "The Gulf Stream is an example of which type of ocean current?",
                        options: [
                            "Cold Current",
                            "Warm Current",
                            "Deep Water Current",
                            "Upwelling Current"
                        ],
                        correctIndex: 1,
                        explanation: "The Gulf Stream is a warm ocean current that originates in the Gulf of Mexico and flows into the Atlantic, significantly warming the climate of Western Europe."
                    }
                }
            ]
        }
    ]
};

export const MARINE_RESOURCES_CONTENT: LessonContent = {
    topicId: 'marine-resources',
    title: 'Marine Resources & Conservation',
    description: 'The biological and mineral wealth of the oceans and the legal framework for their protection.',
    sections: [
        {
            id: 'coral-reefs',
            title: 'Coral Reefs',
            content: [
                {
                    id: 'coral-def',
                    type: 'text',
                    content: `Corals are tiny marine animals (polyps) that live in symbiosis with Zooxanthellae (algae).`
                },
                {
                    id: 'coral-conditions',
                    type: 'text',
                    content: `### Ideal Conditions
- Warm water (20-25°C).
- Shallow water (sunlight).
- Clear, saline water.`
                },
                {
                    id: 'coral-bleaching',
                    type: 'callout',
                    content: '⚠️ **Coral Bleaching:** Occurs when corals are stressed (e.g., warming oceans) and expel their symbiotic algae, turning white and eventually dying.'
                }
            ]
        },
        {
            id: 'unclos',
            title: 'UNCLOS (Law of the Sea)',
            content: [
                {
                    id: 'unclos-zones',
                    type: 'text',
                    content: `The United Nations Convention on the Law of the Sea defines maritime zones:
1. **Territorial Sea:** 12 Nautical Miles (nmi). Full sovereignty.
2. **Contiguous Zone:** 24 nmi. Limited jurisdiction.
3. **Exclusive Economic Zone (EEZ):** 200 nmi. Rights over resources.`
                }
            ]
        }
    ]
};
