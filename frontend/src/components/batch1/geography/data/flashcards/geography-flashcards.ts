export interface Flashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    year?: number;
    tags: string[];
}

export const geographyFlashcards: Flashcard[] = [
    {
        id: "geo_2023_01",
        front: "Which of the following describes the 'Kamaraj Port' uniquely?",
        back: "It is the first major port in India registered as a company.",
        subject: "Geography",
        topic: "Indian Geography",
        year: 2023,
        tags: ["Ports", "Infrastructure", "Tamil Nadu"]
    },
    {
        id: "geo_2022_01",
        front: "The 'Gandikota canyon' of South India was created by which river?",
        back: "Pennar River.",
        subject: "Geography",
        topic: "Physical Geography",
        year: 2022,
        tags: ["Landforms", "Rivers", "Andhra Pradesh"]
    },
    {
        id: "geo_2021_01",
        front: "With reference to the Indus river system, of the following four rivers, three of them pour into one of them which joins the Indus direct. Which one is such a river?",
        back: "Chenab (Sutlej, Beas, and Ravi join Chenab, and Chenab joins Indus).",
        subject: "Geography",
        topic: "Indian Geography",
        year: 2021,
        tags: ["Rivers", "Indus System", "Drainage"]
    },
    {
        id: "geo_2020_01",
        front: "In which one of the following regions of India are shale gas resources found?",
        back: "Cambay Basin, Cauvery Basin, and Krishna-Godavari Basin.",
        subject: "Geography",
        topic: "Resources",
        year: 2020,
        tags: ["Energy", "Shale Gas", "Geology"]
    }
];
