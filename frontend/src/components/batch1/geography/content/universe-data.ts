import { LessonContent } from "./types";

export const ORIGIN_OF_UNIVERSE_CONTENT: LessonContent = {
    topicId: 'origin-universe',
    title: 'Origin of the Universe',
    description: 'Explore the prevailing theories about how our cosmos began, from the Big Bang to the Steady State theory.',
    sections: [
        {
            id: 'intro',
            title: 'Introduction',
            content: [
                {
                    id: 'intro-text',
                    type: 'text',
                    content: `The question of how the universe began has fascinated humanity for millennia. Modern cosmology provides us with scientific theories that explain the origin, evolution, and eventual fate of the universe. The most widely accepted of these is the **Big Bang Theory**.`
                },
                {
                    id: 'galaxy-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop',
                    caption: 'The vastness of the cosmos, comprising billions of galaxies.',
                    alt: 'Star field with nebula'
                }
            ]
        },
        {
            id: 'big-bang',
            title: 'The Big Bang Theory',
            content: [
                {
                    id: 'bb-text-1',
                    type: 'text',
                    content: `Proposed by **Georges Lemaître** in 1927, the Big Bang theory suggests that the universe expanded from an extremely hot, dense point approximately **13.8 billion years ago**.`
                },
                {
                    id: 'bb-callout',
                    type: 'callout',
                    content: '💡 **Key Concept:** The Big Bang was not an explosion *in* space, but an expansion *of* space itself.'
                },
                {
                    id: 'bb-evidence',
                    type: 'text',
                    content: `### Evidence for the Big Bang
1. **Redshift of Galaxies:** Edwin Hubble observed that galaxies are moving away from us, implying expansion.
2. **Cosmic Microwave Background (CMB):** Faint radiation left over from the early universe, discovered in 1965.
3. **Abundance of Light Elements:** The ratio of Hydrogen and Helium in the universe matches Big Bang predictions.`
                }
            ]
        },
        {
            id: 'steady-state',
            title: 'Steady State Theory',
            content: [
                {
                    id: 'ss-text',
                    type: 'text',
                    content: `An alternative theory proposed by Bondi, Gold, and Hoyle. It suggests that the universe has **no beginning and no end**. Matter is continuously created to maintain a constant density as the universe expands.`
                },
                {
                    id: 'ss-debunk',
                    type: 'text',
                    content: `**Why it was rejected:** The discovery of the CMB radiation and the evolution of galaxies (quasars found only at great distances) provided strong evidence against the Steady State theory.`
                }
            ]
        },
        {
            id: 'quiz',
            title: 'Check Your Understanding',
            content: [
                {
                    id: 'q1',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "What is the primary evidence supporting the Big Bang Theory that indicates galaxies are moving away from us?",
                        options: [
                            "Cosmic Microwave Background",
                            "Redshift of Galaxies",
                            "Formation of Stars",
                            "Steady State Theory"
                        ],
                        correctIndex: 1,
                        explanation: "Edwin Hubble observed that the light from distant galaxies is shifted towards the red end of the spectrum (Redshift), indicating that they are moving away from us, which suggests the universe is expanding."
                    }
                },
                {
                    id: 'q2',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "Who first proposed the Big Bang Theory in 1927?",
                        options: [
                            "Edwin Hubble",
                            "Albert Einstein",
                            "Georges Lemaître",
                            "Stephen Hawking"
                        ],
                        correctIndex: 2,
                        explanation: "Georges Lemaître, a Belgian priest and physicist, first proposed the theory of the expansion of the universe, later known as the Big Bang Theory."
                    }
                }
            ]
        }
    ]
};
