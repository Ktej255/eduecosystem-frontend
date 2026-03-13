import { MCQ, Flashcard, SequenceQuestion } from '../../ancient-types-27';

export const FLASHCARDS: Flashcard[] = [
    {
        id: 'fc-28-1',
        front: "Who is known as the 'Indian Shakespeare' and author of 'Shakuntala'?",
        back: "Kalidasa",
        tags: ['Literature', 'Gupta Age']
    },
    {
        id: 'fc-28-2',
        front: "What are the three 'Doshas' in Ayurveda?",
        back: "Vata, Pitta, and Kapha",
        tags: ['Science', 'Medicine']
    },
    {
        id: 'fc-28-3',
        front: "Which ancient mathematician calculated the value of Pi (π) as 3.1416?",
        back: "Aryabhata",
        tags: ['Math', 'Science']
    },
    {
        id: 'fc-28-4',
        front: "The Iron Pillar of Delhi was likely built in honor of which king?",
        back: "Chandragupta II (Vikramaditya)",
        tags: ['Metallurgy', 'Gupta Age']
    }
];

export const CHRONOLOGY: SequenceQuestion[] = [
    {
        id: 'seq-28-1',
        question: "Arrange the following scientific milestones in ancient India chronologically:",
        items: [
            { id: 'item1', content: "Codification of Panini's Grammar" },
            { id: 'item2', content: "Writing of the Charaka Samhita" },
            { id: 'item3', content: "Aryabhata's calculation of Pi" },
            { id: 'item4', content: "Construction of the Iron Pillar of Delhi" }
        ],
        correctOrder: ['item1', 'item2', 'item4', 'item3'],
        explanation: "Grammar (4th C BCE) -> Medicine (1st-2nd C CE) -> Iron Pillar (4th C CE) -> Aryabhatiya (5th C CE).",
        difficulty: 'moderate'
    }
];

export const ART_GALLERY = [
    {
        name: "The Iron Pillar of Delhi",
        imagePath: "/api/placeholder/400/320",
        description: "A 7-meter tall iron pillar from the 4th century CE that has survived for 1600 years without significant corrosion.",
        upscSignificance: "Demonstrates advanced metallurgical knowledge (metallurgy) of ancient India.",
        relatedPyqIds: ["IAS-Prelims-2015", "IAS-Mains-2012"]
    },
    {
        name: "Sultanganj Buddha",
        imagePath: "/api/placeholder/400/320",
        description: "A monumental 7.5-foot copper statue representing the pinnacle of metal-casting in the Gupta era.",
        upscSignificance: "Highlights the scale and sophistication of ancient Indian metal-working technology.",
        relatedPyqIds: ["UPSC-History-Optional"]
    }
];

export const TREND_DATA = {
    yield: 'High',
    lastSeen: '2022',
    weightage: "The 'Legacy' chapter is a favorite for UPSC Prelims specifically for Culture, Science, and Tech linkages."
};
