
export const GEOGRAPHY_CHAPTER1_TIERED = {
    id: 1,
    title: "The Universe & Solar System",
    description: "From Big Bang to the formation of planets and earth.",
    levels: {
        1: {
            title: "Cosmic Foundations",
            description: "Fundamental facts about the solar system and universe.",
            mcqs: [
                {
                    id: "geo-ch1-l1-q1",
                    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
                    options: ["Mars", "Venus", "Jupiter", "Saturn"],
                    correctAnswer: 1,
                    explanation: "Venus is the brightest planet and visible before sunrise or after sunset, hence the name."
                },
                {
                    id: "geo-ch1-l1-q2",
                    question: "What is the approximate age of the Universe according to the Big Bang Theory?",
                    options: ["4.5 Billion Years", "13.8 Billion Years", "10 Billion Years", "20 Billion Years"],
                    correctAnswer: 1,
                    explanation: "The Big Bang theory estimates the age of the universe to be approx 13.8 billion years."
                },
                {
                    id: "geo-ch1-l1-q3",
                    question: "The asteroid belt is located between which two planets?",
                    options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"],
                    correctAnswer: 1,
                    explanation: "The main asteroid belt lies between the orbits of Mars and Jupiter."
                },
                {
                    id: "geo-ch1-l1-q4",
                    question: "Which theory explains the formation of the universe from a singular point?",
                    options: ["Nebular Hypothesis", "Big Bang Theory", "Steady State Theory", "Pulsating Theory"],
                    correctAnswer: 1,
                    explanation: "The Big Bang Theory proposes the universe expanded from a high-density, high-temperature state."
                },
                {
                    id: "geo-ch1-l1-q5",
                    question: "What is the term for the Galaxy in which our Solar System is located?",
                    options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
                    correctAnswer: 1,
                    explanation: "Our solar system is part of the Milky Way galaxy."
                }
            ]
        },
        2: {
            title: "Planetary Dynamics",
            description: "Understanding orbital mechanics, star formation, and planetary characteristics.",
            mcqs: [
                {
                    id: "geo-ch1-l2-q1",
                    question: "Consider the following statements regarding Star Formation:\n1. Stars are born in nebulae.\n2. A protostar becomes a main sequence star when nuclear fusion begins.\nWhich is correct?",
                    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
                    correctAnswer: 2,
                    explanation: "Stars form in nebulae (clouds of gas/dust). The onset of hydrogen fusion marks the transition to a main sequence star."
                },
                {
                    id: "geo-ch1-l2-q2",
                    question: "Why do we see only one side of the Moon from Earth?",
                    options: ["The Moon does not rotate.", "The Moon rotates faster than it revolves.", "The Moon's rotation period equals its revolution period.", "The Earth blocks the view of the other side."],
                    correctAnswer: 2,
                    explanation: "This is called Synchronous Rotation or Tidal Locking. The Moon takes the same time to rotate on its axis as it does to orbit Earth."
                },
                {
                    id: "geo-ch1-l2-q3",
                    question: "Which of the following conditions allows Earth to sustain life (Goldilocks Zone)?",
                    options: ["Presence of Moon", "Distance from Sun allowing liquid water", "Strong Magnetic Field only", "High Gravity"],
                    correctAnswer: 1,
                    explanation: "The Goldilocks Zone refers to the habitable zone where the temperature is just right for liquid water to exist."
                },
                {
                    id: "geo-ch1-l2-q4",
                    question: "What distinguishes Terrestrial planets from Jovian planets?",
                    options: ["Terrestrial are larger.", "Jovian have rocky surfaces.", "Terrestrial have higher density and rocky surfaces.", "Jovian are closer to the Sun."],
                    correctAnswer: 2,
                    explanation: "Terrestrial planets (Mercury, Venus, Earth, Mars) are rocky and dense. Jovian planets (Jupiter, Saturn, Uranus, Neptune) are gaseous giants."
                },
                {
                    id: "geo-ch1-l2-q5",
                    question: "During a Solar Eclipse, what is the relative position of celestial bodies?",
                    options: ["Sun - Earth - Moon", "Earth - Sun - Moon", "Sun - Moon - Earth", "Moon - Earth - Sun"],
                    correctAnswer: 2,
                    explanation: "A Solar Eclipse occurs when the Moon passes between the Sun and Earth, blocking the Sun's light."
                }
            ]
        },
        3: {
            title: "Cosmic Analysis",
            description: "Applied knowledge, space missions, and complex phenomena.",
            mcqs: [
                {
                    id: "geo-ch1-l3-q1",
                    question: "With reference to 'Black Holes', consider the following:\n1. The boundary is called the Event Horizon.\n2. Singularity is the point of infinite density at the center.\n3. Hawking Radiation suggests black holes can evaporate over time.\nHow many are correct?",
                    options: ["Only one", "Only two", "All three", "None"],
                    correctAnswer: 2,
                    explanation: "All three statements are correct. Event Horizon is the point of no return. Singularity is the center. Hawking Radiation predicts slow evaporation."
                },
                {
                    id: "geo-ch1-l3-q2",
                    question: "Regarding 'Red Shift', which statement is true?",
                    options: ["It indicates a galaxy is moving towards us.", "It supports the Static Universe theory.", "It indicates a galaxy is moving away, supporting expansion.", "It is caused by the cooling of stars."],
                    correctAnswer: 2,
                    explanation: "Red Shift (Doppler effect for light) shows that light from distant galaxies is shifting to longer wavelengths, meaning they are moving away."
                },
                {
                    id: "geo-ch1-l3-q3",
                    question: "Consider the Parker Solar Probe mission:\n1. It is an ISRO mission to study the Sun.\n2. It aims to touch the Sun's corona.\n3. It will study the solar wind acceleration.\nWhich are correct?",
                    options: ["1 and 2", "2 and 3", "1 and 3", "All three"],
                    correctAnswer: 1,
                    explanation: "Parker Solar Probe is a NASA mission (not ISRO). ISRO's mission is Aditya-L1. It aims to touch the corona and study solar winds."
                },
                {
                    id: "geo-ch1-l3-q4",
                    question: "What is 'Dark Matter'?",
                    options: ["Matter that absorbs all light.", "Invisible matter that exerts gravitational effects on galaxies.", "Antimatter particles.", "Dust clouds blocking star light."],
                    correctAnswer: 1,
                    explanation: "Dark Matter is hypothetical matter that does not interact with light but exerts gravitational pull, holding galaxies together."
                },
                {
                    id: "geo-ch1-l3-q5",
                    question: "Aditya-L1, India's first solar mission, is placed in which orbit?",
                    options: ["Low Earth Orbit", "Geostationary Orbit", "Halo Orbit around L1 point", "Polar Orbit"],
                    correctAnswer: 2,
                    explanation: "Aditya-L1 is placed in a Halo Orbit around the Lagrange Point 1 (L1) of the Sun-Earth system for uninterrupted viewing."
                }
            ]
        }
    }
};
