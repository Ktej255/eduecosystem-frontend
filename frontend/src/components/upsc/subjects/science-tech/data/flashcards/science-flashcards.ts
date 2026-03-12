export interface Flashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    year?: number;
    tags: string[];
}

export const scienceFlashcards: Flashcard[] = [
    {
        id: "sci_2023_01",
        front: "What is 'Microsatellite DNA' used for in the context of genetics?",
        back: "Studying the evolutionary relationships among various species of fauna.",
        subject: "Science & Tech",
        topic: "Biotechnology",
        year: 2023,
        tags: ["Genetics", "DNA", "Evolution"]
    },
    {
        id: "sci_2022_01",
        front: "Which one of the following is the context in which the term 'qubit' is mentioned?",
        back: "Quantum computing.",
        subject: "Science & Tech",
        topic: "IT & Electronics",
        year: 2022,
        tags: ["Quantum Computing", "Emerging Tech"]
    },
    {
        id: "sci_2021_01",
        front: "The term 'ACE2' is talked about in the context of?",
        back: "Spread of viral diseases (specifically COVID-19/Coronavirus).",
        subject: "Science & Tech",
        topic: "Health",
        year: 2021,
        tags: ["Viruses", "Biology", "Pandemic"]
    },
    {
        id: "sci_2020_01",
        front: "What is the importance of using 'Pneumococcal Conjugate Vaccines' in India?",
        back: "They are effective against pneumonia as well as meningitis and sepsis, and reduce dependence on antibiotics that are not effective against drug-resistant bacteria.",
        subject: "Science & Tech",
        topic: "Health",
        year: 2020,
        tags: ["Vaccines", "Public Health", "Medicine"]
    }
];
