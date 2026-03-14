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

export const MEDIEVAL_CHAPTER_13_SUBTOPICS: Question[] = [
    {
        "id": "policies",
        "name": "Religious Policy & Rebellions",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "deccan",
        "name": "Deccan Policy & Decline",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_13_MCQS: Question[] = [
    {
        id: 1,
        question: "Aurangzeb took the title of:",
        options: ["Alamgir", "Padshah", "Ghazi", "Zilla-i-Ilahi"],
        correctAnswer: 0,
        explanation: "He took the title 'Alamgir' (Conqueror of the World) and lived a simple life (Zinda Pir - Living Saint).",
        subtopic: 'policies',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which Sikh Guru was executed by Aurangzeb in 1675?",
        options: ["Guru Arjan Dev", "Guru Hargobind", "Guru Tegh Bahadur", "Guru Gobind Singh"],
        correctAnswer: 2,
        explanation: "Guru Tegh Bahadur (9th Guru) was executed at Chandni Chowk (Sis Ganj) for refusing to convert to Islam and protecting Kashmiri Brahmins.",
        subtopic: 'policies',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Which of the following was NOT re-imposed by Aurangzeb?",
        options: ["Jizya", "Pilgrimage Tax", "Sati Practice", "Zakat"],
        correctAnswer: 2,
        explanation: "He banned Sati. He re-imposed Jizya (1679) and Pilgrimage tax, which Akbar had abolished.",
        subtopic: 'policies',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The 'Deccan Ulcer' refers to:",
        options: ["The spread of plague in Deccan", "Aurangzeb's long and ruinous war in the Deccan", "The corruption in Deccan administration", "The rise of Shivaji"],
        correctAnswer: 1,
        explanation: "Aurangzeb spent the last 25 years of his life fighting in the Deccan against Marathas, Bijapur, and Golconda. It drained the treasury and led to the empire's collapse.",
        subtopic: 'deccan',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Who was the Rajput leader of the Rathore rebellion against Aurangzeb?",
        options: ["Jaswant Singh", "Durgadas Rathore", "Rana Raj Singh", "Ajit Singh"],
        correctAnswer: 1,
        explanation: "Durgadas Rathore fought a 30-year war to secure the throne of Marwar for Ajit Singh (son of Jaswant Singh) after Aurangzeb tried to annex it.",
        subtopic: 'policies',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_13_CONTENT = `
# BLOCK 1: POLICIES & REBELLIONS
## 🕌 THE PURITAN EMPEROR (1658-1707)

**Religious Policy (Orthodox):**
*   **Zinda Pir:** Called "Living Saint". Sewed caps/copied Quran for living.
*   **Bans:** Banned music (court), Nauroz, Tuladan (weighing ceremony), and Jharokha Darshan.
*   **Muhtasibs:** Appointed Censors of Public Morals.
*   **Temples:** Destroyed Kashi Vishwanath and Mathura temples.
*   ** Taxes:** Re-imposed **Jizya** (1679).

**Rebellions:**
*   **Jats:** Under Gokula, Rajaram, Churaman.
*   **Satnamis:** Peasant rebellion in Narnaul.
*   **Sikhs:** Executed **Guru Tegh Bahadur** (1675). This turned Sikhs into a warring community (Khalsa) under Guru Gobind Singh.
*   **Rajputs:** Rathore rebellion (Durgadas) after death of Jaswant Singh.

# BLOCK 2: DECCAN POLICY & DECLINE
## 📉 THE DECCAN ULCER

**Expansion:**
*   Annexed **Bijapur** (1686) and **Golconda** (1687).
*   Empire reached its maximum territorial extent (Kashmir to Jinji).

**Conflict with Marathas:**
*   Sent Shaista Khan and Jai Singh against Shivaji. **Treaty of Purandar (1665)** signed.
*   Executed **Sambhaji** (Shivaji's son) in 1689. This enraged Marathas, who started a "War of People".

**Impact:**
*   Heavy drain on treasury.
*   Jagirdari Crisis (Too many nobles, too little land).
*   Absence from Delhi led to administrative collapse in North.
*   Death: 1707 at Ahmednagar. Buried at Khuldabad.
`;
