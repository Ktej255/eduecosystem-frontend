export interface Subtopic {
    id: string;
    name: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MEDIEVAL_CHAPTER_5_SUBTOPICS: Question[] = [
    {
        "id": "alauddin",
        "name": "Alauddin Khilji: Expansion",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "reforms",
        "name": "Market & Military Reforms",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_5_MCQS: Question[] = [
    {
        id: 1,
        question: "Who was the general of Alauddin Khilji who led the military expeditions to South India?",
        options: ["Malik Kafur", "Ghazi Malik", "Zafar Khan", "Ulugh Khan"],
        correctAnswer: 0,
        explanation: "Malik Kafur (Hazardinari), a slave captured in Gujarat, led the campaigns to South India (Warangal, Dwarasamudra, Madurai).",
        subtopic: 'alauddin',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which of the following measures was NOT taken by Alauddin Khilji to control the nobility?",
        options: ["Prohibition of alcohol", "Ban on social gatherings without permission", "Confiscation of land grants", "Introduction of 'Iqta' system"],
        correctAnswer: 3,
        explanation: "The Iqta system was introduced by Iltutmish. Alauddin actually abolished many small iqtas and confiscated lands to increase Khalisa (Crown) land.",
        subtopic: 'reforms',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Alauddin Khilji's market control regulations were primarily aimed at:",
        options: ["Ensuring cheap food for citizens", "Maintain a large standing army at low cost", "Increasing foreign trade", "Welfare of farmers"],
        correctAnswer: 1,
        explanation: "To fix prices of goods so that he could maintain a large standing army with low salaries to counter Mongol invasions.",
        subtopic: 'reforms',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The system of 'Dagh' (Branding of horses) and 'Chehra' (Descriptive roll of soldiers) was introduced by:",
        options: ["Balban", "Alauddin Khilji", "Akbar", "Sher Shah Suri"],
        correctAnswer: 1,
        explanation: "Alauddin introduced Dagh and Chehra to prevent corruption in the army.",
        subtopic: 'reforms',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Amir Khusrau, the famous Persian poet known as the 'Parrot of India', was a contemporary of:",
        options: ["Iltutmish", "Alauddin Khilji", "Akbar", "Aurangzeb"],
        correctAnswer: 1,
        explanation: "Amir Khusrau (Tuti-e-Hind) lived through reigns of 7 Sultans but is most associated with Alauddin Khilji's court. He introduced the Sitar and Tabla.",
        subtopic: 'alauddin',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_5_CONTENT = `
# BLOCK 1: ALAUDDIN KHILJI (1296-1316)
## ⚔️ THE IMPERIALIST

**Rise to Power:**
*   Killed his uncle/father-in-law **Jalaluddin Khilji** to capture the throne.
*   **Imperialism:** First Sultan to attack South India. Called himself *Sikandar-i-Sani* (Second Alexander).

**Military Campaigns:**
*   **North:** Gujarat (Karnadeva), Ranthambore (Hamir Dev), Chittor (Rani Padmini - Jauhar).
*   **South:** Led by **Malik Kafur**. Defeated Yadavas (Devagiri), Kakatiyas (Warangal - Kohinoor diamond), Hoysalas, and Pandyas. Used South as a source of wealth (not direct annexation).

**Mongol Invasions:**
*   Defended Delhi against the most severe Mongol attacks (e.g., Battle of Kili). Built Siri Fort.

# BLOCK 2: REFORMS & ADMINISTRATION
## 📉 MARKET & MILITARY

**Market Reforms (Diwan-i-Riyasat):**
*   **Objective:** Maintain a huge army on low pay.
*   **Shahna-i-Mandi:** Market superintendent.
*   Fixed prices of all commodities (Wheat, Rice, Cloth, Horses, Slaves).
*   Severe punishment for cheating (flesh cut from body for underweight).

**Military Reforms:**
*   First to maintain a huge **Standing Army** paid in **Cash** (not Jagirs).
*   **Dagh:** Branding of horses.
*   **Chehra/Huliya:** Descriptive roll of soldiers.

**Revenue Reforms:**
*   **Biswa:** Standard unit of measurement.
*   Tax raised to 50% of produce in Doab.
*   Created **Diwan-i-Mustakhraj** to collect arrears.
`;
