// Art & Culture MCQs - Practice Questions
// UPSC Prelims-style questions on Architecture, Dance, Music, Paintings, Festivals

export interface ArtCultureMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const artCultureMCQs: ArtCultureMCQ[] = [
    {
        id: "ac-mcq-01",
        question: "Nagara style of temple architecture is characteristically found in which part of India?",
        options: ["South India", "North India", "Northeast India", "Coastal India"],
        correctAnswer: 1,
        explanation: "Nagara style is characteristic of North India with curvilinear shikhara (tower) and no boundary wall. Examples: Khajuraho, Konark.",
        topic: "Architecture",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-02",
        question: "Bharatanatyam originated in which state?",
        options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
        correctAnswer: 2,
        explanation: "Bharatanatyam originated in Tamil Nadu temples. It's one of the oldest classical dance forms based on Natyashastra.",
        topic: "Dance",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-03",
        question: "Kathakali uses distinct facial makeup. Which color represents noble characters?",
        options: ["Red", "Green", "White", "Black"],
        correctAnswer: 1,
        explanation: "Green (Pacha) represents noble characters in Kathakali. Red (Kathi) for villains with some virtue, Black for demons.",
        topic: "Dance",
        difficulty: "medium"
    },
    {
        id: "ac-mcq-04",
        question: "Natyashastra was written by:",
        options: ["Kalidasa", "Bharata Muni", "Varahamihira", "Panini"],
        correctAnswer: 1,
        explanation: "Natyashastra was written by Bharata Muni (200 BCE - 200 CE). It covers drama, dance, and music.",
        topic: "Literature",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-05",
        question: "Which painting school is known for 'Bani Thani' portrait?",
        options: ["Mughal School", "Kishangarh School", "Kangra School", "Bengal School"],
        correctAnswer: 1,
        explanation: "Bani Thani, called the 'Indian Mona Lisa', is from Kishangarh School of Rajput painting.",
        topic: "Paintings",
        difficulty: "medium"
    },
    {
        id: "ac-mcq-06",
        question: "Ajanta caves are primarily associated with which religion?",
        options: ["Hinduism", "Buddhism", "Jainism", "Christianity"],
        correctAnswer: 1,
        explanation: "Ajanta caves are Buddhist caves with famous murals depicting Jataka tales and Buddha's life. 29 caves from 2nd BCE to 6th CE.",
        topic: "Architecture",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-07",
        question: "Which is the oldest classical language of India?",
        options: ["Sanskrit", "Tamil", "Telugu", "Kannada"],
        correctAnswer: 1,
        explanation: "Tamil is considered the oldest living classical language with continuous literary tradition from Sangam period (300 BCE).",
        topic: "Literature",
        difficulty: "medium"
    },
    {
        id: "ac-mcq-08",
        question: "Kumbh Mela is held at how many places?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "Kumbh Mela is held at 4 places: Prayagraj, Haridwar, Ujjain, and Nashik. Full Kumbh every 12 years at each site.",
        topic: "Festivals",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-09",
        question: "Warli art is a tribal art form from which state?",
        options: ["Gujarat", "Maharashtra", "Madhya Pradesh", "Rajasthan"],
        correctAnswer: 1,
        explanation: "Warli art is from Maharashtra's Warli tribe. Uses geometric shapes on mud walls with white rice paste.",
        topic: "Folk Art",
        difficulty: "easy"
    },
    {
        id: "ac-mcq-10",
        question: "Pietra Dura technique is associated with:",
        options: [
            "Rock painting",
            "Stone inlay work",
            "Metal sculpture",
            "Wood carving"
        ],
        correctAnswer: 1,
        explanation: "Pietra Dura is stone inlay technique using semi-precious stones in marble. Used extensively in Taj Mahal.",
        topic: "Architecture",
        difficulty: "medium"
    }
];
