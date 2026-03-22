export interface Subtopic {
    id: string;
    name: string;
    explanation?: string;
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

export const MEDIEVAL_CHAPTER_15_SUBTOPICS: Subtopic[] = [
    {
        "id": "administration",
        "name": "Provincial & Local Admin",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "culture",
        "name": "Literature & Music",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_15_MCQS: Question[] = [
    {
        id: 1,
        question: "In the Mughal administration, the term 'Khalisa' referred to:",
        options: ["Crown lands whose revenue went directly to the central treasury", "Land granted to religious institutions", "Land assigned to nobles in lieu of salary", "Barren land"],
        correctAnswer: 0,
        explanation: "Khalisa lands were directly managed by the Emperor's officials. Jagir lands were assigned to Mansabdars. Inam lands were tax-free grants.",
        subtopic: 'administration',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who translated the 'Baburnama' into Persian during Akbar's reign?",
        options: ["Abul Fazl", "Abdur Rahim Khan-i-Khanan", "Faizi", "Badauni"],
        correctAnswer: 1,
        explanation: "Abdur Rahim Khan-i-Khanan (famous Hindi poet Rahim) translated Babur's memoirs from Turkish to Persian.",
        subtopic: 'culture',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The 'Razmnama' is the Persian translation of which Hindu epic?",
        options: ["Ramayana", "Mahabharata", "Bhagavad Gita", "Atharva Veda"],
        correctAnswer: 1,
        explanation: "Akbar set up a Maktab Khana (Translation Bureau). The Mahabharata was translated as Razmnama (Book of Wars) by Faizi/Badauni.",
        subtopic: 'culture',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "In the Sultanate period, the 'Barids' were:",
        options: ["Royal Bodyguards", "Intelligence Agents/Spies", "Revenue collectors", "Judges"],
        correctAnswer: 1,
        explanation: "Barid-i-Mumalik was the head of the intelligence department. Barids were spies who reported to the Sultan.",
        subtopic: 'administration',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Tansen, the legendary musician of Akbar's court, was originally named:",
        options: ["Mahesh Das", "Ramtanu Pande", "Baz Bahadur", "Baiju Bawra"],
        correctAnswer: 1,
        explanation: "Tansen's original name was Ramtanu Pande. He developed the Dhrupad style and Ragas like Mian ki Malhar.",
        subtopic: 'culture',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_15_CONTENT = `
# BLOCK 1: CENTRAL & PROVINCIAL ADMIN
## 📜 THE STEEL FRAME

**Provincial Levels:**
1.  **Suba (Province):** Headed by *Subedar/Sipahsalar* (Executive) and *Diwan* (Revenue). Separation of powers to check rebellion.
2.  **Sarkar (District):** Headed by *Faujar* (Law & Order) and *Amalguzar* (Revenue).
3.  **Pargana (Sub-district):** *Shiqdar* (Executive) and *Amil* (Revenue).
4.  **Village:** *Muqaddam* (Headman) and *Patwari* (Accountant).

**Key Departments (Central):**
*   **Diwan-i-Wizarat:** Finance/Revenue (Wazir).
*   **Diwan-i-Arz:** Military (Ariz-i-Mumalik). Checking Dagh/Chehra.
*   **Diwan-i-Rasalat:** Foreign Affairs/Appeals.
*   **Diwan-i-Insha:** Royal Correspondence.
*   **Qazi-ul-Quzat:** Chief Justice.

# BLOCK 2: LITERATURE & MUSIC
## 🎭 SYNCRETIC CULTURE

**Literature:**
*   **Persian:** Court language.
    *   *Akbarnama/Ain-i-Akbari* (Abul Fazl).
    *   *Padshahnama* (Abdul Hamid Lahori - Shah Jahan's reign).
*   **Translation:**
    *   *Razmnama* (Mahabharata).
    *   *Sirr-i-Akbar* (Upanishads by Dara Shikoh).
*   **Hindi:**
    *   **Tulsidas:** *Ramcharitmanas* (Avadhi). Contemporary of Akbar.
    *   **Surdas:** *Sursagar* (Braj).
    *   **Malik Muhammad Jayasi:** *Padmavat*.

**Music:**
*   **Hindustani Classical:** Flourished in North.
*   **Instruments:** Sitar and Tabla (Amir Khusrau).
*   **Ragas:** Tansen created *Mian ki Todi*, *Mian ki Malhar*.
*   **Aurangzeb:** Banned music, but wrote best books on music!
`;
