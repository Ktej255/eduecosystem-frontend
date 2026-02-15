import { Question, Subtopic } from '../../../types';

export const MODERN_CHAPTER_3_SUBTOPICS: Subtopic[] = [
    { id: 'portuguese', name: 'The Portuguese' },
    { id: 'dutch', name: 'The Dutch' },
    { id: 'english', name: 'The English (EIC)' },
    { id: 'french', name: 'The French & Carnatic Wars' },
    { id: 'danes', name: 'The Danes' },
    { id: 'general', name: 'General & Comparative' }
];

export const MODERN_CHAPTER_3_MCQS: Question[] = [
    // Set 1: The Portuguese
    {
        id: 1,
        question: "Who among the following Portuguese Viceroys is associated with the \"Blue Water Policy\", which aimed to make the Portuguese the master of the Indian Ocean?",
        options: ["Alfonso de Albuquerque", "Francisco de Almeida", "Nino da Cunha", "Vasco da Gama"],
        correctAnswer: 1, // (b)
        explanation: "Francisco de Almeida (1505-09) initiated the Blue Water Policy (cartaz system), believing that as long as the Portuguese controlled the sea, their hold on India was secure.",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding Alfonso de Albuquerque:\n1. He is considered the real founder of the Portuguese power in the East.\n2. He captured Goa from the Sultan of Bijapur in 1510.\n3. He abolished the practice of Sati in the regions under his control.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "Albuquerque is the real founder. He captured Goa in 1510 and encouraged his men to marry Indian women. He also banned Sati in his area.",
        subtopic: 'portuguese',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The Portuguese capital in India was shifted from Cochin to Goa during the tenure of which Governor?",
        options: ["Francisco de Almeida", "Alfonso de Albuquerque", "Nino da Cunha", "Joa de Castro"],
        correctAnswer: 2, // (c)
        explanation: "Nino da Cunha shifted the capital from Cochin to Goa in 1530.",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which Mughal Emperor ordered the siege of Hooghly in 1632 and expelled the Portuguese for their acts of piracy and slave trade?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 2, // (c)
        explanation: "Shah Jahan expelled the Portuguese from Hooghly in 1632 due to their slave trade and piracy.",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The first printing press in India was set up by the Portuguese at Goa in which year?",
        options: ["1510", "1556", "1600", "1664"],
        correctAnswer: 1, // (b)
        explanation: "The Portuguese introduced the first printing press in India at Goa in 1556.",
        subtopic: 'portuguese',
        difficulty: 'Moderate'
    },
    {
        id: 6,
        question: "Which of the following crops were introduced to India by the Portuguese?\n1. Tobacco\n2. Potato\n3. Maize\n4. Cashew nut\n\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "1, 2 and 4 only", "3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "The Portuguese introduced tobacco, potato, maize, cashew nuts, pineapple, and red chillies to India.",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "The famous Jesuit missionaries, Rodolfo Acquaviva and Antonio Monserrate, visited the court of which Mughal Emperor?",
        options: ["Humayun", "Akbar", "Jahangir", "Shah Jahan"],
        correctAnswer: 1, // (b)
        explanation: "They visited the court of Akbar (invited to the Ibadat Khana).",
        subtopic: 'portuguese',
        difficulty: 'Moderate'
    },
    // Set 2: The Dutch & The Danes
    {
        id: 8,
        question: "The Dutch established their first factory in India at which of the following places in 1605?",
        options: ["Surat", "Pulicat", "Masulipatnam", "Cochin"],
        correctAnswer: 2, // (c)
        explanation: "The Dutch established their first factory at Masulipatnam (Andhra) in 1605.",
        subtopic: 'dutch',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Which of the following battles dealt a crushing blow to Dutch ambitions in India, leading to their eventual withdrawal?",
        options: ["Battle of Swally (1612)", "Battle of Bedara (1759)", "Battle of Wandiwash (1760)", "Battle of Colachel (1741)"],
        correctAnswer: 1, // (b)
        explanation: "The Battle of Bedara (1759) in Bengal saw the English defeat the Dutch, crushing their power in India.",
        subtopic: 'dutch',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "With reference to the Dutch in India, consider the following statements:\n1. They established a factory at Pulicat where they minted their gold coins known as 'Pagodas'.\n2. Their primary interest was in the spice trade of the Indonesian Islands rather than Indian textiles.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c)
        explanation: "Both are correct. The Dutch coined 'Pagodas' at Pulicat. Their main interest remained the Spice Islands (Indonesia).",
        subtopic: 'dutch',
        difficulty: 'Moderate'
    },
    {
        id: 11,
        question: "The Danish settlement of 'Serampore' in Bengal was primarily famous for:",
        options: ["Its fortified naval base.", "Being the headquarters of Danish missionary activities.", "The production of high-quality silk.", "Its large-scale slave market."],
        correctAnswer: 1, // (b)
        explanation: "Serampore was the headquarters of Danish missionaries (William Carey, etc.).",
        subtopic: 'danes',
        difficulty: 'Easy'
    },
    // Set 3: The English East India Company
    {
        id: 12,
        question: "The \"Magna Carta of the Company\" refers to the Farmans issued in 1717 by which Mughal Emperor?",
        options: ["Bahadur Shah I", "Jahangir Shah", "Farrukhsiyar", "Muhammad Shah"],
        correctAnswer: 2, // (c)
        explanation: "Farrukhsiyar issued the famous farmans in 1717.",
        subtopic: 'english',
        difficulty: 'Easy'
    },
    {
        id: 13,
        question: "Which of the following privileges were granted to the East India Company by the Farmans of 1717?\n1. Duty-free trade in Bengal in lieu of an annual payment of Rs. 3,000.\n2. Permission to issue dastaks (passes) for the transportation of goods.\n3. Permission to mint their own coins at Bombay which would have currency throughout the Mughal Empire.\n\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All statements are correct. It gave the Company duty-free trade rights in Bengal (for Rs 3000/year) and allowed their Bombay coins to run in the Empire.",
        subtopic: 'english',
        difficulty: 'Moderate'
    },
    {
        id: 14,
        question: "The \"Golden Farman\" granted to the English in 1632, which allowed them to trade freely in the ports of the kingdom on payment of 500 pagodas a year, was issued by the Sultan of:",
        options: ["Bijapur", "Golconda", "Ahmednagar", "Mysore"],
        correctAnswer: 1, // (b)
        explanation: "The Golden Farman (1632) was issued by the Sultan of Golconda.",
        subtopic: 'english',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "Who among the following was the first Englishman to arrive at the court of Jahangir in 1609 to seek permission for a factory at Surat?",
        options: ["Sir Thomas Roe", "Captain William Hawkins", "Ralph Fitch", "James Lancaster"],
        correctAnswer: 1, // (b)
        explanation: "Captain Hawkins arrived in 1609. (Sir Thomas Roe came later in 1615).",
        subtopic: 'english',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "The English East India Company acquired Bombay from King Charles II in 1668. How did Charles II acquire it?",
        options: ["He conquered it from the Marathas.", "He received it as dowry from the Portuguese.", "He bought it from the Dutch.", "It was gifted to him by the Mughal Emperor."],
        correctAnswer: 1, // (b)
        explanation: "Charles II got Bombay as dowry for marrying the Portuguese princess Catherine of Braganza in 1662.",
        subtopic: 'english',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "The city of Calcutta was founded by Job Charnock in 1690 by combining which three villages?",
        options: ["Sutanuti, Gobindapur, Kalikata", "Midnapore, Chittagong, Burdwan", "Hooghly, Chinsura, Chandernagore", "Kasimbazar, Dhaka, Murshidabad"],
        correctAnswer: 0, // (a)
        explanation: "Sutanuti, Gobindapur, and Kalikata formed the nucleus of Calcutta.",
        subtopic: 'english',
        difficulty: 'Easy'
    },
    // Set 4: The French & Carnatic Wars
    {
        id: 18,
        question: "Who is considered the founder of the French East India Company (Compagnie des Indes Orientales) in 1664?",
        options: ["King Louis XIV", "Colbert", "Dupleix", "Francois Martin"],
        correctAnswer: 1, // (b)
        explanation: "Colbert, the minister of Louis XIV, founded the French company in 1664.",
        subtopic: 'french',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "The First Carnatic War (1740-48) was the Indian theatre of which European conflict?",
        options: ["The Seven Years' War", "The War of Austrian Succession", "The Napoleonic Wars", "The Thirty Years' War"],
        correctAnswer: 1, // (b)
        explanation: "The First Carnatic War was an extension of the War of Austrian Succession in Europe.",
        subtopic: 'french',
        difficulty: 'Moderate'
    },
    {
        id: 20,
        question: "In the context of the Carnatic Wars, the 'Battle of St. Thome' (1746) is significant because:",
        options: ["It was a decisive victory for the English over the French.", "A small disciplined French army defeated a large Indian army of the Nawab of Carnatic.", "The Marathas joined hands with the French.", "It marked the end of the French presence in India."],
        correctAnswer: 1, // (b)
        explanation: "Battle of St. Thome: Captain Paradise (French) defeated the massive army of Anwaruddin. It proved the superiority of disciplined European armies.",
        subtopic: 'french',
        difficulty: 'Moderate'
    },
    {
        id: 21,
        question: "Match the following Treaties with the corresponding Carnatic Wars:\nA. Treaty of Aix-La Chapelle -> 1. First Carnatic War\nB. Treaty of Pondicherry -> 2. Second Carnatic War\nC. Treaty of Paris -> 3. Third Carnatic War\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3", "A-2, B-3, C-1", "A-3, B-1, C-2", "A-1, B-3, C-2"],
        correctAnswer: 0, // (a)
        explanation: "Aix-La Chapelle (1st War), Pondicherry (2nd War), Paris (3rd War).",
        subtopic: 'french',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "Which French Governor was the first to deploy the strategy of intervening in the mutual quarrels of Indian princes to acquire political influence and territory?",
        options: ["Dumas", "Dupleix", "Count de Lally", "Bussy"],
        correctAnswer: 1, // (b)
        explanation: "Dupleix was the mastermind behind the policy of using Indian princes' quarrels to build a French Empire.",
        subtopic: 'french',
        difficulty: 'Moderate'
    },
    {
        id: 23,
        question: "The Battle of Wandiwash (1760), which effectively ended French political ambitions in India, was fought between:",
        options: ["Robert Clive and Dupleix", "Sir Eyre Coote and Count de Lally", "Stringer Lawrence and Bussy", "Hector Munro and Dupleix"],
        correctAnswer: 1, // (b)
        explanation: "Sir Eyre Coote (English) defeated Count de Lally (French) at Wandiwash.",
        subtopic: 'french',
        difficulty: 'Easy'
    },
    // Set 5: Chronology & Comparative
    {
        id: 24,
        question: "Arrange the following European powers in the chronological order of their arrival in India:\n1. Dutch\n2. Portuguese\n3. English\n4. French\n\nSelect the correct answer:",
        options: ["2-1-3-4", "2-3-1-4", "1-2-4-3", "2-1-4-3"],
        correctAnswer: 0, // (a)
        explanation: "Portuguese (1498) -> Dutch (arrived 1595/Factory 1605) -> English (Factory 1613) -> French (1664).",
        subtopic: 'general',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "Which of the following was NOT a reason for the success of the English East India Company against other European powers?",
        options: ["The English Company was a state-owned department while the French was a private concern.", "Superior naval power of the Royal Navy.", "Stability of the British government compared to the French monarchy.", "The English had a sound financial base from their trade."],
        correctAnswer: 0, // (a)
        explanation: "Statement (a) is the reverse. The English Company was a private enterprise (more initiative), while the French Company was a State Department (controlled by the King, less flexible). This was a major reason for French failure.",
        subtopic: 'general',
        difficulty: 'Moderate'
    },
    {
        id: 26,
        question: "The factory at 'Masulipatnam' was the first settlement for which two European powers on the Coromandel Coast?",
        options: ["Portuguese and Dutch", "Dutch and English", "English and French", "French and Danes"],
        correctAnswer: 1, // (b)
        explanation: "Both the Dutch (1605) and English (1611) started their south Indian operations from Masulipatnam.",
        subtopic: 'general',
        difficulty: 'Easy'
    },
    {
        id: 27,
        question: "The 'Cartaz' system was a naval trade license issued by the:",
        options: ["Dutch in the spice trade.", "British for textile exports.", "Portuguese to assert supremacy in the Indian Ocean.", "Mughals to European traders."],
        correctAnswer: 2, // (c)
        explanation: "Cartaz was the Portuguese pass for ships in the Indian Ocean.",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 28,
        question: "\"They were the first Europeans to come to India and the last to leave.\" This statement refers to:",
        options: ["The French", "The Portuguese", "The Dutch", "The English"],
        correctAnswer: 1, // (b)
        explanation: "Portuguese: Arrived 1498, Left Goa in 1961 (Operation Vijay).",
        subtopic: 'portuguese',
        difficulty: 'Easy'
    },
    {
        id: 29,
        question: "Consider the following pairs of European settlements and their locations:\n1. Tranquebar: Tamil Nadu coast (Danes)\n2. Serampore: Bengal (Danes)\n3. Mahe: Malabar Coast (French)\n4. Yanam: Odisha Coast (French)\n\nWhich of the pairs given above are correctly matched?",
        options: ["1 and 2 only", "1, 2 and 3 only", "3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 1, // (b)
        explanation: "Yanam is in Andhra Pradesh (Coromandel Coast), not Odisha. Serampore, Tranquebar, Mahe are correctly matched.",
        subtopic: 'general',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "Who was the Mughal Emperor when the English East India Company was established in London (1600)?",
        options: ["Babur", "Akbar", "Jahangir", "Aurangzeb"],
        correctAnswer: 1, // (b)
        explanation: "Akbar (1556-1605) was the Emperor when the EIC was formed (1600). Hawkins arrived during Jahangir's reign.",
        subtopic: 'general',
        difficulty: 'Easy'
    },
    {
        id: 31,
        question: "The term \"Interlopers\" used in the context of the 17th century referred to:",
        options: ["Portuguese pirates in the Bay of Bengal.", "Unauthorized British merchants trading in the East in violation of the EIC's monopoly.", "Spies sent by the French to Mughal courts.", "Indian middlemen working for European companies."],
        correctAnswer: 1, // (b)
        explanation: "Interlopers were British merchants who traded independently, challenging the EIC monopoly.",
        subtopic: 'english',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "Which of the following statements about the French East India Company is correct?",
        options: ["It was a private joint-stock company free from state control.", "It was strictly controlled and funded by the State (King Louis XIV).", "It focused solely on missionary activities.", "It never established a factory in Bengal."],
        correctAnswer: 1, // (b)
        explanation: "The French Company was a State-controlled entity.",
        subtopic: 'french',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "What was the primary reason for the English shifting their headquarters in Western India from Surat to Bombay in 1687?",
        options: ["Bombay had a better natural harbor.", "Constant Maratha raids on Surat and the interference of Mughal officials.", "The Portuguese gifted Bombay to them.", "Plague outbreak in Surat."],
        correctAnswer: 1, // (b)
        explanation: "The English felt insecure in Surat due to Maratha raids (Shivaji raided Surat twice) and Mughal interference, so they moved to their own fortified island of Bombay.",
        subtopic: 'english',
        difficulty: 'Moderate'
    },
    {
        id: 34,
        question: "The \"Treaty of Ryswick\" (1697) is associated with the restoration of which settlement to the French by the Dutch?",
        options: ["Mahe", "Karaikal", "Pondicherry", "Chandernagore"],
        correctAnswer: 2, // (c)
        explanation: "The Dutch captured Pondicherry in 1693 but returned it to the French by the Treaty of Ryswick in 1697.",
        subtopic: 'french',
        difficulty: 'Hard'
    },
    {
        id: 35,
        question: "\"Gustavus Fort\" was a European fortified settlement located in:",
        options: ["Chinsura (Dutch)", "Serampore (Danes)", "Balasore (English)", "Anjengo (English)"],
        correctAnswer: 0, // (a)
        explanation: "Fort Gustavus was the Dutch fort at Chinsura (Bengal).",
        subtopic: 'dutch',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_3_CONTENT = `
# BLOCK 1: THE PORTUGUESE (The Pioneers)
## 🚢 THE PORTUGUESE (1498 - 1961)

**Arrival:** Vasco da Gama (May 1498) at Calicut. Welcomed by Zamorin. (Pilot: Abdul Majid).

**Key Governors:**
1.  **Francisco de Almeida (1505-09):**
    *   **Policy:** "Blue Water Policy" (Mastery of the sea, not land). [PYQ Keyword]
    *   **Battle of Diu (1509):** Defeated combined navy of Egypt, Turkey, and Gujarat.
2.  **Alfonso de Albuquerque (1509-15):**
    *   **Real Founder** of Portuguese power.
    *   Captured **Goa** from Bijapur (1510).
    *   **Policy:** Encouraged marriage with Indian women. **Abolished Sati** in his region. [High Yield]
3.  **Nino da Cunha (1529-38):**
    *   Shifted HQ from Cochin to **Goa** (1530).
    *   Acquired Diu and Bassein from Bahadur Shah of Gujarat.

**Administration:**
*   **Cartaze System:** A pass required for any ship to pass through Indian Ocean. (Even Mughal ships had to pay!).
*   **Feitoria:** Trading posts.

**Contribution:** Tobacco cultivation, Printing Press (1556 - Goa), Gothic Architecture.

> [!WARNING]
> **EXAMINER'S TRAP:**
> **Q:** Who was the first European to come and last to leave? -> **Portuguese** (1498 - 1961).

# BLOCK 2: THE DUTCH (The Traders)
## 🟠 THE DUTCH (Netherlands)

**Formation:** Dutch East India Company (1602).
**Focus:** More interested in Spice Islands (Indonesia) than India.

**Key Factories:**
*   **First:** Masulipatnam (1605).
*   **HQ:** Pulicat (Minted Gold Pagoda coins) -> Shifted to Nagapatnam.
*   **The End:** Defeated by English in **Battle of Bedara/Chinsura (1759)**.

# BLOCK 3: THE ENGLISH (The Conquerors)
## 🇬🇧 THE ENGLISH (EIC)

**Formation:** 1600 (Charter by Queen Elizabeth I). "Merchant Adventurers".

**The Entry:**
*   **Captain Hawkins (1609):** Arrived at Jahangir's court (Agra). Did not get permission initially due to Portuguese pressure.
*   **Battle of Swally (1612):** Captain Best defeated Portuguese. Jahangir impressed -> Permission granted.
*   **Sir Thomas Roe (1615):** Got "Imperial Farman" to trade across Mughal Empire.

**Factory Timeline (Chronology is King):**
*   **West:** Surat (1613 - First permanent).
*   **South:** Masulipatnam (1611), Madras (1639 - Fort St. George).
*   **East:** Hariharpur/Balasore (1633), Hugli (1651).

**The Big Leaps:**
*   **Golden Farman (1632):** From Sultan of Golconda (Free trade for 500 Pagodas).
*   **Bombay (1662):** Got as dowry from Portuguese (Charles II married Catherine).
*   **Farrukhsiyar's Farman (1717):** "Magna Carta of the Company". Duty-free trade in Bengal. [Super High Yield]

# BLOCK 4: THE FRENCH (The Rivals)
## 🇫🇷 THE FRENCH (1664)

**Formation:** Compagnie des Indes Orientales (1664) by Colbert (Minister of Louis XIV). [State-owned company].
**First Factory:** Surat (1667) by Francis Caron.
**Key Centers:** Pondicherry (Fort Louis), Chandernagore, Mahe, Karaikal.
**The Leader:** Joseph Dupleix (The man who thought of establishing an Empire).

# BLOCK 5: THE ANGLO-FRENCH RIVALRY (Carnatic Wars)
## ⚔️ THE CARNATIC WARS (1740-63)

**First Carnatic War (1740-48):**
*   **Cause:** Austrian War of Succession (Europe).
*   **Battle:** Battle of St. Thome (Madras). Small French army defeated large Indian army (Nawab Anwar-ud-din).
*   **Treaty:** Treaty of Aix-La-Chapelle. (Madras returned to British).

**Second Carnatic War (1749-54):**
*   **Cause:** Internal Succession disputes in Hyderabad (Nasir Jang vs Muzaffar Jang) & Carnatic (Anwar-ud-din vs Chanda Sahib).
*   **Result:** Dupleix recalled. Treaty of Pondicherry.

**Third Carnatic War (1758-63):**
*   **Cause:** Seven Years War (Europe).
*   **Battle:** Battle of Wandiwash (1760). General Eyre Coote (British) defeated Count de Lally (French).
*   **Treaty:** Treaty of Peace of Paris (1763). French factories restored but No Fortification. French confined to trade only.

### 🗺️ MAP WORK (Mark these):
*   **Wandiwash:** (Tamil Nadu).
*   **Bedara:** (Bengal).
*   **St. Thome:** (Madras).
*   **Chandernagore:** (Bengal - French).

# BLOCK 6: PYQ & SEQUENCE
> [!TIP]
> **🔥 PYQ ALERT (Prelims):**
> *   **Sequence of Arrival:** P - D - E - D - F (Portuguese -> Dutch -> English -> Danes -> French).
> *   **Sequence of Factory Setup:** Portuguese -> English/Dutch -> Danes -> French.
> *   **Q:** Which European power was the first to establish marine trade with India? -> **Portuguese**.
> *   **Q:** Who introduced tobacco and printing press? -> **Portuguese**.
> *   **Q:** Significance of Battle of Wandiwash? -> **End of French Challenge**.

> [!NOTE]
> **📌 EXAMINER'S LENS:**
> Why did English succeed? -> Private ownership (EIC) vs State ownership (French), Naval Superiority, Industrial Revolution back home.
> **Danes (Denmark):** Established factory at Tranquebar (TN) and Serampore (Bengal). Sold everything to British in 1845. Focused on Missionary activities.
`;

