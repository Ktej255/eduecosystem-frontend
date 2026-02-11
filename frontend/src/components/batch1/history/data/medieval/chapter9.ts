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

export const MEDIEVAL_CHAPTER_9_SUBTOPICS: Subtopic[] = [
    { id: 'bhakti', name: 'The Bhakti Movement' },
    { id: 'sufi', name: 'The Sufi Movement' }
];

export const MEDIEVAL_CHAPTER_9_MCQS: Question[] = [
    {
        id: 1,
        question: "Who among the following Bhakti saints was a cobbler by profession?",
        options: ["Kabir", "Raidas (Ravidas)", "Namdev", "Tukaram"],
        correctAnswer: 1,
        explanation: "Raidas was a cobbler and a disciple of Ramananda. Mirabai was his disciple.",
        subtopic: 'bhakti',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The philosophy of 'Pushti Marga' (Path of Grace) was propounded by:",
        options: ["Shankaracharya", "Ramanuja", "Vallabhacharya", "Madhvacharya"],
        correctAnswer: 2,
        explanation: "Vallabhacharya (Krishna devotee) propounded Pushti Marga and Shuddhadvaita (Pure Non-dualism).",
        subtopic: 'bhakti',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Which Sufi order (Silsila) was the most popular in India and practised 'Sama' (musical gatherings)?",
        options: ["Chishti", "Suhrawardi", "Naqshbandi", "Qadiri"],
        correctAnswer: 0,
        explanation: "The Chishti order (founded by Moinuddin Chishti) was the most popular. They believed in simplicity, poverty, and love for God through music (Sama).",
        subtopic: 'sufi',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Consider the following statements about Kabir:\n1. He believed in Nirguna Bhakti (Formless God).\n2. His verses are found in the Guru Granth Sahib.\n3. He tried to bridge the gap between Hinduism and Islam.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct. Kabir was a weaver who preached unity of God (Ram-Rahim) and ridiculed rituals/caste.",
        subtopic: 'bhakti',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Shankaracharya is associated with which philosophy?",
        options: ["Vishishtadvaita", "Advaita Vedanta", "Dvaita", "Dvaitadvaita"],
        correctAnswer: 1,
        explanation: "Shankaracharya (8th Century) propounded Advaita Vedanta (Monism/Non-dualism) - Brahman is the only reality, world is Maya.",
        subtopic: 'bhakti',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_9_CONTENT = `
# BLOCK 1: THE BHAKTI MOVEMENT
## 🕉️ PATH OF DEVOTION

**Philosophy:**
*   **Saguna:** Worshipped God with form (Rama, Krishna). Ex: Tulsidas, Surdas, Mirabai, Chaitanya.
*   **Nirguna:** Worshipped Formless God. Ex: Kabir, Nanak.

**Key Saints:**
1.  **Ramanuja (12th C):** *Vishishtadvaita* (Qualified Non-dualism). God is real, World is real.
2.  **Ramananda:** First to preach in Hindi. Disciples included Kabir (Weaver), Raidas (Cobbler), Sena (Barber).
3.  **Kabir:** Criticized idol worship, caste, and rituals of both Hindus and Muslims. *Bijak* (Verses).
4.  **Guru Nanak (1469-1539):** Founder of Sikhism. *Langar* (Community kitchen). "No Hindu, No Musalman".
5.  **Chaitanya Mahaprabhu:** Krishna Bhakti in Bengal. Popularized *Kirtan* (Musical chanting).

**Maharashtra Dharma:**
*   **Dnyaneshwar:** Commetary on Gita (*Dnyaneshwari*).
*   **Namdev:** Tailor. Visited Punjab (verses in Granth Sahib).
*   **Tukaram:** Contemporary of Shivaji. Wrote *Abhangas*.

# BLOCK 2: THE SUFI MOVEMENT
## ☪️ MYSTICISM IN ISLAM

**Key Concepts:**
*   **Tasawwuf:** Sufism.
*   **Pir/Murshid:** Teacher.
*   **Murid:** Disciple.
*   **Khanqah:** Hospice.
*   **Silsila:** Orders.

**Major Silsilas in India:**
1.  **Chishti:** Established by **Khwaja Moinuddin Chishti** (Ajmer).
    *   **Beliefs:** Poverty, Service to humanity, Music (*Sama*). Keep distance from State/Kings.
    *   **Saints:** Bakhtiyar Kaki, Baba Farid, Nizamuddin Auliya (Amir Khusrau's Guru).
2.  **Suhrawardi:** Established by Bahauddin Zakariya.
    *   **Beliefs:** Accepted royal patronage and lived luxurious lives. Mostly in Punjab/Sindh.
3.  **Naqshbandi:** Orthodox. Opposed music. **Sheikh Ahmad Sirhindi** (Contemporary of Akbar/Jahangir).
`;
