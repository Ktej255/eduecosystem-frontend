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

export const ANCIENT_CHAPTER_6_SUBTOPICS: Subtopic[] = [
    { id: 'foundations', name: 'Foundation & Expansion' },
    { id: 'ashoka', name: 'Ashoka & Dhamma' },
    { id: 'administration', name: 'Mauryan Administration & Art' }
];

export const ANCIENT_CHAPTER_6_MCQS: Question[] = [
    {
        id: 1,
        question: "Which Greek ambassador visited the court of Chandragupta Maurya and wrote the book 'Indica'?",
        options: ["Deimachus", "Megasthenes", "Fa-Hien", "Hiuen Tsang"],
        correctAnswer: 1,
        explanation: "Megasthenes was sent by Seleucus Nicator to the court of Chandragupta Maurya. He wrote 'Indica' (now lost, but cited by later authors).",
        subtopic: 'foundations',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding Ashoka's Dhamma:\n1. It was a new religion founded by Ashoka.\n2. It prohibited animal sacrifice.\n3. It emphasized tolerance towards all religious sects.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Statement 1 is Incorrect: Dhamma was 'Moral Law' or code of conduct, NOT a new religion or doctrine. It was inspired by Buddhism but broader.",
        subtopic: 'ashoka',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The 'Saptanga Theory' of State (Seven Limbs) is propounded in which ancient text?",
        options: ["Indica", "Arthashastra", "Mudrarakshasa", "Mahabhasya"],
        correctAnswer: 1,
        explanation: "Kautilya's Arthashastra details the Saptanga theory: Swami (King), Amatya (Minister), Janapada (Territory), Durga (Fort), Kosha (Treasury), Danda (Army), and Mitra (Ally).",
        subtopic: 'administration',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which Rock Edict of Ashoka mentions the Kalinga War and his remorse?",
        options: ["Rock Edict I", "Rock Edict X", "Rock Edict XIII", "Pillar Edict VII"],
        correctAnswer: 2,
        explanation: "Major Rock Edict XIII mentions the Kalinga War (261 BC) and Ashoka's subsequent remorse and conversion to non-violence.",
        subtopic: 'ashoka',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "In Mauryan administration, the officer known as 'Samaharta' was responsible for:",
        options: ["Religious Affairs", "Collection of Revenue", "Royal Correspondence", "Spy System"],
        correctAnswer: 1,
        explanation: "Samaharta was the Collector General of Revenue. Sannidhata was the Treasurer.",
        subtopic: 'administration',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_6_CONTENT = `
# BLOCK 1: FOUNDATION OF MAURYAN EMPIRE
## 🦁 CHANDRAGUPTA MAURYA (321-297 BC)

**Rise to Power:**
*   Assisted by **Kautilya** (Chanakya/Vishnugupta), he overthrew the Nanda dynasty (Dhanananda).
*   **Defeat of Seleucus Nicator (305 BC):** Chandragupta defeated Alexander's general, Seleucus.
*   **Treaty:** Seleucus ceded Area, Arachosia, Gedrosia (Afghan/Baluchistan) and gave his daughter in marriage. Chandragupta gave 500 war elephants.
*   **Jainism:** Late in life, Chandragupta embraced Jainism under Bhadrabahu and starved himself to death (*Sallekhana*) at Shravanabelagola.

**Bindusara (297-273 BC):**
*   Known as *Amitrochates* (Slayer of foes).
*   Patronized **Ajivika** sect.
*   Greek ambassador **Deimachus** visited his court.

# BLOCK 2: ASHOKA THE GREAT (268-232 BC)
## 🕊️ FROM DIGVIJAYA TO DHAMMAVIJAYA

**Kalinga War (261 BC):**
*   Fought in the 8th year of coronation.
*   The bloodshed moved Ashoka to abandon physical conquest (*Digvijaya*) for cultural conquest (*Dhammavijaya*).
*   Mentioned in **Rock Edict XIII**.

**Ashoka's Dhamma:**
*   **Nature:** Not a religion, but a moral code of conduct.
*   **Tenets:** Obedience to parents, mercy to slaves/servants, tolerance of all sects, non-violence (*Ahimsa*).
*   **Propagation:** Appointed *Dhamma Mahamattas* (Officers of Dhamma) to spread the message. Sent his son Mahendra and daughter Sanghamitra to Sri Lanka.

# BLOCK 3: MAURYAN ADMINISTRATION & ART
## 🏛️ THE FIRST CENTRALIZED STATE

**Kautilya's Arthashastra:**
*   A treatise on statecraft, economic policy, and military strategy.
*   **Espionage:** Highly organized network of spies (*Gudhapurushas*).

**Key Officials:**
*   **Samaharta:** Chief Collector of Revenue.
*   **Sannidhata:** Chief Treasurer.
*   **Sitadhyaksha:** Superintendent of Agriculture/Crown Lands.

**Mauryan Art:**
*   **Pillars:** Monolithic sandstone pillars with animal capitals (e.g., Sarnath Lion Capital - National Emblem).
*   **Stupas:** Sanchi Stupa (enlarged by Ashoka).
*   **Caves:** Barabar Caves (Lomas Rishi Cave) - Earliest rock-cut caves, gifted to Ajivikas.
*   **Yakshi:** Dilwara Yakshi (Didarganj) - Masterpiece of Mauryan sculpture.
`;
