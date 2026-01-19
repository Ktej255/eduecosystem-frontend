import { PYQQuestion } from '@/lib/pyq/pyq-types';

export const SCIENCE_PYQS: PYQQuestion[] = [
    {
        id: 'sci_2024_1',
        year: 2024,
        subject: 'Science',
        topic: 'Space Tech',
        question: "The 'James Webb Space Telescope' primarily observes the universe in which spectrum?",
        options: ["Ultraviolet", "Infrared", "X-Ray", "Visible Light"],
        correctIndex: 1,
        explanation: "JWST is designed to primarily observe infrared radiation, allowing it to see through dust clouds and observe distant stars.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'sci_2023_1',
        year: 2023,
        subject: 'Science',
        topic: 'Biotechnology',
        question: "What is 'Cas9' protein that is often mentioned in news?",
        options: ["A molecular scissors used in gene editing", "A biosensor used in the manufacture of clean energy", "A gene that makes plants pest-resistant", "A structural protein used in cosmetics"],
        correctIndex: 0,
        explanation: "Cas9 is an enzyme that acts as a pair of 'molecular scissors', capable of cutting strands of DNA at specific locations (CRISPR-Cas9).",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    },
    {
        id: 'sci_2022_1',
        year: 2022,
        subject: 'Science',
        topic: 'IT & Communication',
        question: "With reference to 'Web 3.0', consider the following statements:\n1. It is based on blockchain technology.\n2. It allows users to control their own data.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctIndex: 2,
        explanation: "Web 3.0 is a decentralized web based on blockchain where users have ownership of their data and identity.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    }
];
