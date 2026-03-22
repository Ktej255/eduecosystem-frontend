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
    subtopic: string; // ID of the subtopic
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MEDIEVAL_CHAPTER_3_SUBTOPICS: Subtopic[] = [
    {
        "id": "slave",
        "name": "Slave Dynasty (Mamluks)",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "khilji",
        "name": "Khilji Dynasty",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "reforms",
        "name": "Market Reforms of Alauddin",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_3_MCQS: Question[] = [
    {
        id: 1,
        question: "Who among the following rulers is known as 'Lakh Baksh' for his generosity?",
        options: ["Iltutmish", "Qutbuddin Aibak", "Balban", "Alauddin Khilji"],
        correctAnswer: 1,
        explanation: "Qutbuddin Aibak was known as 'Lakh Baksh' (Giver of Lakhs) because of his generosity.",
        subtopic: 'slave',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Chalisa' or 'Turkan-i-Chahalgani', a group of 40 powerful Turkish nobles, was organized by:",
        options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Razia Sultan"],
        correctAnswer: 1,
        explanation: "Iltutmish organized the 'Turkan-i-Chahalgani' (Corps of Forty) to consolidate his power. It was later destroyed by Balban.",
        subtopic: 'slave',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Who introduced the Persian festival of 'Navroz' and the customs of 'Sijda' and 'Paibos' in the Delhi court?",
        options: ["Iltutmish", "Alauddin Khilji", "Balban", "Firoz Shah Tughlaq"],
        correctAnswer: 2,
        explanation: "Balban introduced Persian customs like Navroz, Sijda (prostration), and Paibos (kissing the monarch's feet) to enhance the prestige of the crown.",
        subtopic: 'slave',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Consider the following regarding Alauddin Khilji's Market Reforms:\n1. He fixed the prices of essential commodities.\n2. He appointed a controller of markets called 'Shahana-i-Mandi'.\n3. The reforms were applicable to the entire empire.\n\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statements 1 & 2 are correct. Statement 3 is incorrect: The market reforms were primarily implemented in Delhi and surrounding areas to maintain a large standing army at low cost.",
        subtopic: 'reforms',
        difficulty: 'Hard'
    },
    {
        id: 5,
        question: "Which general of Alauddin Khilji led the military expeditions to South India (Devagiri, Warangal, etc.)?",
        options: ["Zafar Khan", "Malik Kafur", "Ghazi Malik", "Ulugh Khan"],
        correctAnswer: 1,
        explanation: "Malik Kafur (also known as Hazar Dinari) led Alauddin's famous southern expeditions, reaching as far as Rameswaram.",
        subtopic: 'khilji',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_3_CONTENT = `
# BLOCK 1: THE SLAVE DYNASTY (1206-1290)
## 👑 MAMLUKS (Ilbari Turks)

**1. Qutbuddin Aibak (1206-1210):**
*   Founder of Slave Dynasty.
*   Started construction of **Qutub Minar** (for Sufi saint Qutbuddin Bakhtiyar Kaki).
*   Built *Quwwat-ul-Islam* mosque (Delhi) and *Adhai Din Ka Jhonpra* (Ajmer).
*   Died while playing Chaugan (Polo).

**2. Iltutmish (1210-1236):**
*   Real consolidator of Turkish rule.
*   Shifted capital from Lahore to **Delhi**.
*   Saved India from Mongol invasion (Chengiz Khan) by refusing shelter to Khwarizm Shah.
*   Introduced **Iqta System** (land assignment) and **Tankas/Jitals** (coins).
*   Formed **Chalisa** (Group of 40 nobles).

**3. Balban (1266-1287):**
*   Theory of Kingship: King is *Zill-i-Ilahi* (Shadow of God).
*   **Blood and Iron Policy** against robbers/rebels.
*   Destroyed the Chalisa.
*   Introduced *Sijda* and *Paibos*.
*   Established military department **Diwan-i-Arz**.

# BLOCK 2: THE KHILJI DYNASTY (1290-1320)
## ⚔️ ALAUDDIN KHILJI (1296-1316)

**Military Conquests:**
*   Conquered Gujarat, Ranthambore, Chittor (Padmavat legend).
*   **South India:** Sent **Malik Kafur** to defeat Yadavas (Devagiri), Kakatiyas (Warangal), Hoysalas (Dwarasamudra), and Pandyas (Madurai).

**Administrative Agrarian Reforms:**
*   First Sultan to have a **Assesment**: Measured land (*Masahat*) and fixed revenue.
*   Increased revenue to **50%** of produce.
*   Created **Diwan-i-Mustakhraj** to collect arrears.

**Market Reforms (Key for Prelims):**
*   **Objective:** To maintain a huge army at low salaries.
*   Fixed prices of all commodities (wheat, rice, cloth, horses).
*   **Shahana-i-Mandi:** Market superintendent to check black marketing.
*   **Spy System:** Munhiyans (secret spies) reported directly to Sultan.
`;
