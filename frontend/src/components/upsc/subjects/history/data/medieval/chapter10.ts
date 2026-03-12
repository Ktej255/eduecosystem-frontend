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

export const MEDIEVAL_CHAPTER_10_SUBTOPICS: Subtopic[] = [
    { id: 'babur', name: 'Babur & Foundation' },
    { id: 'shershah', name: 'Sher Shah Suri & Administration' }
];

export const MEDIEVAL_CHAPTER_10_MCQS: Question[] = [
    {
        id: 1,
        question: "Which battle marked the beginning of the Mughal rule in India?",
        options: ["First Battle of Tarain", "First Battle of Panipat", "Battle of Khanwa", "Battle of Chanderi"],
        correctAnswer: 1,
        explanation: "First Battle of Panipat (21 April 1526): Babur defeated Ibrahim Lodi using artillery (Rumi tactic) and Tulughma strategy.",
        subtopic: 'babur',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Grand Trunk Road' (Sadak-i-Azam) from Sonargaon (Bengal) to Peshawar was restored/built by:",
        options: ["Ashoka", "Sher Shah Suri", "Akbar", "Dalhousie"],
        correctAnswer: 1,
        explanation: "Sher Shah Suri restored the ancient route (Uttararapatha) and renamed it Sadak-i-Azam. It is now known as the GT Road.",
        subtopic: 'shershah',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Babur wrote his autobiography 'Tuzuk-i-Baburi' in which language?",
        options: ["Persian", "Arabic", "Chughatai Turkish", "Urdu"],
        correctAnswer: 2,
        explanation: "Babur wrote his memoirs (Baburnama) in his mother tongue, Chughatai Turkish. It was later translated into Persian by Abdur Rahim Khan-i-Khanan.",
        subtopic: 'babur',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Sher Shah Suri's currency system forms the basis of the modern Indian currency. What was his silver coin called?",
        options: ["Rupiya", "Dam", "Asharfi", "Jital"],
        correctAnswer: 0,
        explanation: "Sher Shah introduced the Silver 'Rupiya' (178 grains) and Copper 'Dam'. The British and modern India continued with the Rupee.",
        subtopic: 'shershah',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Humayun regained the throne of Delhi in 1555 with the help of:",
        options: ["Rajputs", "Shah Tahmasp of Persia", "Ottoman Turks", "Portuguese"],
        correctAnswer: 1,
        explanation: "After being defeated by Sher Shah (Battle of Kannauj, 1540), Humayun fled to Persia. Shah Tahmasp helped him recapture Kandahar and later Delhi.",
        subtopic: 'babur',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_10_CONTENT = `
# BLOCK 1: BABUR & HUMAYUN (1526-1540, 1555-56)
## 🦁 THE MUGHAL ADVENT

**Zahiruddin Muhammad Babur (1526-1530):**
*   Descendant of Timur (Father's side) and Chengiz Khan (Mother's side).
*   **Battles:**
    1.  **Panipat (1526):** Defeated Ibrahim Lodi. Use of Gunpowder/Cannons.
    2.  **Khanwa (1527):** Defeated **Rana Sanga**. Took title *Ghazi*.
    3.  **Chanderi (1528):** Defeated Medini Rai.
    4.  **Ghaghra (1529):** Defeated Afghans.
*   **Garden:** Built Aram Bagh (Agra).

**Humayun (1530-1540, 1555-1556):**
*   "The Fortunate" (Meaning of name), but most unfortunate ruler.
*   Built distinct city **Dinpanah**.
*   Defeated by **Sher Shah** at Battle of Chausa (1539) and Kannauj (1540). Expelled from India.
*   Returned in 1555. Died falling from library stairs (*Sher Mandal*).

# BLOCK 2: THE SUR EMPIRE (1540-1555)
## 🛠️ ADMIN GENIUS: SHER SHAH SURI

**Sher Shah Suri (1540-1545):**
*   Original name: Farid. Title 'Sher Khan' for killing a tiger.
*   According to Abbas Khan Sarwani (Historian), he was a master administrator.

**Administration:**
*   **Divisions:** Empire -> Sarkar (District) -> Pargana (Taluka) -> Village.
*   **Revenue:** Ray/Zabti system. Land measured. Tax: 1/3rd of produce. *Patta* (Title deed) and *Qabuliyat* (Agreement) introduced.
*   **Currency:** Introduced **Rupiya** (Silver) and Dam (Copper).
*   **Infrastructure:** Built **Grand Trunk Road** (Sonargaon to Peshawar). Built Sarais (Rest houses) every 2 Kos.
*   **Justice:** "Justice is the most excellent of religious rites". Very strict.
*   **Architecture:** Purana Qila (Old Fort) in Delhi. His own Mausoleum at **Sasaram** (Bihar) - standing in a lake.
`;
