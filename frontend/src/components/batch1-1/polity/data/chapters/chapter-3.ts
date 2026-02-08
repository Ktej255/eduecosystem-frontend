import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 3)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch3-l1-q1",
        question: "The Concept of the Constitution: Which of the following best describes the constitution of a country?",
        options: ["A set of fundamental principles or established precedents according to which a state or other organization is acknowledged to be governed.", "A list of all laws passed by the legislature.", "A collection of speeches by the founding fathers.", "A document that can never be changed."],
        correctAnswerIndex: 0,
        explanation: "A constitution is the fundamental law of a land which defines the nature of the state and the relationship between different organs of government."
    },
    // Add more placeholder questions as needed
];

export const CHAPTER_3_LEVELS: ChapterLevelData = {
    topicId: 3,
    levels: [
        {
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Strictly Chapter 3: Placeholder content.",
            questions: LEVEL_1_QUESTIONS
        },
        {
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Placeholder for Level 2.",
            questions: []
        },
        {
            levelId: 3,
            title: "UPSC Simulation",
            description: "Placeholder for Level 3.",
            questions: []
        }
    ]
};
