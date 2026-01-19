import { PYQQuestion } from '@/lib/pyq/pyq-types';

export const GEOGRAPHY_PYQS: PYQQuestion[] = [
    {
        id: 'geo_2024_1',
        year: 2024,
        subject: 'Geography',
        topic: 'Indian Geography',
        question: "Consider the following pairs of Rivers and their Tributaries:\n1. Krishna - Bhima\n2. Kaveri - Kabini\n3. Godavari - Indravati\nHow many of the above pairs are correctly matched?",
        options: ["Only one", "Only two", "All three", "None"],
        correctIndex: 2,
        explanation: "All three pairs are correctly matched. Bhima is a major tributary of Krishna. Kabini is a tributary of Kaveri. Indravati is a tributary of Godavari.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'geo_2023_1',
        year: 2023,
        subject: 'Geography',
        topic: 'World Geography',
        question: "Which of the following countries border the 'Caspian Sea'?\n1. Azerbaijan\n2. Uzbekistan\n3. Turkmenistan\n4. Iran\nSelect the correct answer:",
        options: ["1, 2 and 3", "1, 3 and 4", "2, 3 and 4", "1 and 4 only"],
        correctIndex: 1,
        explanation: "Countries bordering Caspian Sea: Kazakhstan, Russia, Azerbaijan, Iran, and Turkmenistan. Uzbekistan does not border it.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'geo_2022_1',
        year: 2022,
        subject: 'Geography',
        topic: 'Climatology',
        question: "High clouds primarily reflect solar radiation and cool the surface of the Earth, whereas low clouds have a high absorption of infrared radiation originating from the Earth’s surface and cause a warming effect.\nWhich of the following statements is/are correct?",
        options: ["Statement 1 is correct", "Statement 2 is correct", "Both are correct", "Neither is correct"],
        correctIndex: 3,
        explanation: "Both statements are reversed. High (cirrus) clouds actually trap heat (warming), while low clouds reflect sunlight (cooling).",
        exam: 'CSE Prelims',
        difficulty: 'Tough'
    },
    {
        id: 'geo_2021_1',
        year: 2021,
        subject: 'Geography',
        topic: 'Indian Geography',
        question: "The Black Cotton Soil of India has been formed due to the weathering of:",
        options: ["Brown Forest Soil", "Fissure Volcanic Rock", "Granite and Schist", "Shale and Limestone"],
        correctIndex: 1,
        explanation: "Black soil (Regur) is formed by the weathering or erosion of the basalt rocks formed from fissure volcanic eruption.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    }
];
