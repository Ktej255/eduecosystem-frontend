export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string | number;
    difficulty?: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_13_SUBTOPICS: Subtopic[] = [
    { id: 'bengal_activities', name: 'Activities in Bengal (Anushilan, Alipore)' },
    { id: 'maharashtra_activities', name: 'Activities in Maharashtra (Abhinav Bharat)' },
    { id: 'punjab_delhi', name: 'Activities in Punjab & Delhi' },
    { id: 'abroad', name: 'Revolutionary Activities Abroad (Europe)' },
    { id: 'ghadar_party', name: 'The Ghadar Party' },
    { id: 'chronology_matching', name: 'Chronology & Matching' },
    { id: 'conceptual', name: 'Conceptual & Deep Dive' }
];

export const MODERN_CHAPTER_13_MCQS: Question[] = [
    // Set 1: Bengal
    {
        id: 1,
        question: "The \"Anushilan Samiti\" (1902) was the first secret revolutionary society in Bengal. It was founded by:",
        options: ["Promotha Mitter", "Barindra Kumar Ghosh", "Bagha Jatin", "Pulin Das"],
        correctAnswer: 0, // (a)
        explanation: "Promotha Mitter founded the Anushilan Samiti in Calcutta. (Pulin Das led the Dhaka branch which became more active).",
        subtopic: 'bengal_activities',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following was the editor of the revolutionary journal \"Yugantar\" (1906), which advocated armed rebellion?",
        options: ["Aurobindo Ghosh", "Bhupendranath Datta and Barindra Kumar Ghosh", "Hemchandra Kanungo", "Rashbehari Bose"],
        correctAnswer: 1, // (b)
        explanation: "Bhupendranath Datta (Swami Vivekananda's brother) and Barindra Ghosh started Yugantar.",
        subtopic: 'bengal_activities',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The \"Alipore Conspiracy Case\" (1908) was launched following the discovery of:",
        options: ["A bomb factory at Maniktala (Calcutta).", "A cache of arms in Dhaka.", "The murder of Kingsford.", "The Delhi Durbar plot."],
        correctAnswer: 0, // (a)
        explanation: "The police raided the garden house at Maniktala and found a bomb factory.",
        subtopic: 'bengal_activities',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "In the Alipore Conspiracy Case, Aurobindo Ghosh was brilliantly defended by which lawyer, leading to his acquittal?",
        options: ["C.R. Das (Chittaranjan Das)", "Motilal Nehru", "Bhulabhai Desai", "Tej Bahadur Sapru"],
        correctAnswer: 0, // (a)
        explanation: "C.R. Das famously defended Aurobindo, calling him the \"Prophet of Indian Nationalism\".",
        subtopic: 'bengal_activities',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The \"Muzaffarpur Murders\" (1908) involved an attempt to kill Kingsford (the unpopular judge). Who were the two young revolutionaries involved?",
        options: ["Bhagat Singh and Batukeshwar Dutt", "Prafulla Chaki and Khudiram Bose", "Binoy, Badal, and Dinesh", "Rajguru and Sukhdev"],
        correctAnswer: 1, // (b)
        explanation: "Prafulla Chaki (committed suicide) and Khudiram Bose (hanged). They mistakenly killed two British ladies (Kennedys).",
        subtopic: 'bengal_activities',
        difficulty: 'Easy'
    },
    {
        id: 6,
        question: "\"Bagha Jatin\" (Jatindranath Mukherjee) died fighting the British police in the \"Battle of Balasore\" (1915). He was trying to receive:",
        options: ["German arms and ammunition (Zimerman Plan).", "Japanese soldiers.", "Russian gold.", "Ghadarite revolutionaries from Canada."],
        correctAnswer: 0, // (a)
        explanation: "Zimerman Plan (German Plot) involved receiving arms at Balasore coast.",
        subtopic: 'bengal_activities',
        difficulty: 'Moderate'
    },
    // Set 2: Maharashtra
    {
        id: 7,
        question: "The \"Chapekar Brothers\" (Damodar and Balkrishna) are historically significant because:",
        options: ["They threw a bomb in the Central Legislative Assembly.", "They assassinated Rand and Ayerst (Plague Commissioners) in Poona in 1897 (First political assassination).", "They founded the Abhinav Bharat.", "They led the textile strike in Bombay."],
        correctAnswer: 1, // (b)
        explanation: "Assassination of Rand (Plague Commissioner) in 1897.",
        subtopic: 'maharashtra_activities',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "The secret society \"Mitra Mela\" aimed at overthrowing British rule was reorganized in 1904 as:",
        options: ["Anushilan Samiti", "Abhinav Bharat", "Ghadar Party", "Hindustan Socialist Republican Association"],
        correctAnswer: 1, // (b)
        explanation: "Abhinav Bharat (Young India Society) was the new name given by Savarkar.",
        subtopic: 'maharashtra_activities',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Who among the following assassinated A.M.T. Jackson (Collector of Nasik) in the \"Nasik Conspiracy Case\" (1909)?",
        options: ["Anant Kanhare", "V.D. Savarkar", "Ganesh Savarkar", "Vishnu Ganesh Pingley"],
        correctAnswer: 0, // (a)
        explanation: "Anant Kanhare killed Jackson.",
        subtopic: 'maharashtra_activities',
        difficulty: 'Moderate'
    },
    // Set 3: Punjab & Delhi
    {
        id: 10,
        question: "The famous slogan \"Pagri Sambhal Jatta\" is associated with the agrarian unrest led by:",
        options: ["Bhagat Singh", "Ajit Singh", "Lala Lajpat Rai", "Saifuddin Kitchlew"],
        correctAnswer: 1, // (b)
        explanation: "Ajit Singh (Bhagat Singh's uncle).",
        subtopic: 'punjab_delhi',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "The \"Delhi Conspiracy Case\" (1912) refers to the attempt on the life of:",
        options: ["Lord Curzon", "Lord Hardinge II", "Lord Minto", "Lord Chelmsford"],
        correctAnswer: 1, // (b)
        explanation: "Bomb throw on Lord Hardinge while he was entering Delhi on an elephant.",
        subtopic: 'punjab_delhi',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "Who was the mastermind behind the bomb attack on Lord Hardinge in Chandni Chowk, Delhi, who managed to escape to Japan and later helped found the INA?",
        options: ["Rashbehari Bose", "Subhash Chandra Bose", "Sachindranath Sanyal", "Kartar Singh Sarabha"],
        correctAnswer: 0, // (a)
        explanation: "Rashbehari Bose. (Not to be confused with Subhash Bose).",
        subtopic: 'punjab_delhi',
        difficulty: 'Easy'
    },
    // Set 4: Abroad
    {
        id: 13,
        question: "\"India House\" in London was a hostel for Indian students which became a centre for revolutionary activities. It was founded by:",
        options: ["Dadabhai Naoroji", "Shyamji Krishna Varma", "V.D. Savarkar", "Madan Lal Dhingra"],
        correctAnswer: 1, // (b)
        explanation: "Shyamji Krishna Varma.",
        subtopic: 'abroad',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The journal \"The Indian Sociologist\" was published from:",
        options: ["Paris", "London", "Berlin", "Geneva"],
        correctAnswer: 1, // (b)
        explanation: "London (initially), then Paris/Geneva after crackdown.",
        subtopic: 'abroad',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "Who assassinated Curzon Wyllie (a British official) in London in 1909 as a protest against the \"inhuman hangings\" in India?",
        options: ["Udham Singh", "Madan Lal Dhingra", "V.D. Savarkar", "Lala Hardayal"],
        correctAnswer: 1, // (b)
        explanation: "Madan Lal Dhingra.",
        subtopic: 'abroad',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "Who is known as the \"Mother of Indian Revolution\" and famously unfurled the first Indian National Flag at the International Socialist Congress in Stuttgart (Germany) in 1907?",
        options: ["Annie Besant", "Madam Bhikaji Cama", "Sarojini Naidu", "Sister Nivedita"],
        correctAnswer: 1, // (b)
        explanation: "Madam Bhikaji Cama.",
        subtopic: 'abroad',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "The \"Berlin Committee for Indian Independence\" (1915) was established by:",
        options: ["Virendranath Chattopadhyaya (Chatto)", "Subhash Chandra Bose", "Raja Mahendra Pratap", "Lala Hardayal"],
        correctAnswer: 0, // (a)
        explanation: "Virendranath Chattopadhyaya (Sarojini Naidu's brother).",
        subtopic: 'abroad',
        difficulty: 'Moderate'
    },
    // Set 5: Ghadar Party
    {
        id: 18,
        question: "The Ghadar Party was founded in 1913 with its headquarters at:",
        options: ["Vancouver", "San Francisco (Yugantar Ashram)", "Seattle", "Berlin"],
        correctAnswer: 1, // (b)
        explanation: "San Francisco.",
        subtopic: 'ghadar_party',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "Who was the founding President of the Ghadar Party?",
        options: ["Lala Hardayal", "Sohan Singh Bhakna", "Kartar Singh Sarabha", "Tarak Nath Das"],
        correctAnswer: 1, // (b)
        explanation: "Sohan Singh Bhakna was the President. Lala Hardayal was the General Secretary/Intellectual leader.",
        subtopic: 'ghadar_party',
        difficulty: 'Moderate'
    },
    {
        id: 20,
        question: "The weekly newspaper \"Ghadar\" carried the caption on its masthead:",
        options: ["\"Enemy of the British Raj\"", "\"Angrezi Raj Ka Dushman\" (Enemy of English Rule)", "\"Vande Mataram\"", "\"Satyameva Jayate\""],
        correctAnswer: 1, // (b)
        explanation: "\"Angrezi Raj Ka Dushman\".",
        subtopic: 'ghadar_party',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "The \"Komagata Maru\" incident (1914) involved:",
        options: ["A Japanese ship carrying Indian immigrants to Canada which was turned back.", "A German ship carrying arms to Bengal.", "A British ship hijacked by Ghadarites.", "A naval mutiny in Bombay."],
        correctAnswer: 0, // (a)
        explanation: "Japanese ship, Indian passengers, denied entry to Canada (Continuous Passage Act).",
        subtopic: 'ghadar_party',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "Who was the central figure in the Komagata Maru voyage?",
        options: ["Baba Gurdit Singh", "Bhagat Singh", "Udham Singh", "Teja Singh Swatantra"],
        correctAnswer: 0, // (a)
        explanation: "Baba Gurdit Singh.",
        subtopic: 'ghadar_party',
        difficulty: 'Moderate'
    },
    {
        id: 23,
        question: "The \"Singapore Mutiny\" of 1915 was a rare instance of army revolt during WWI. It was led by:",
        options: ["Jamadar Chishti Khan and Subedar Dundey Khan", "Rashbehari Bose", "Mohan Singh", "Shah Nawaz Khan"],
        correctAnswer: 0, // (a)
        explanation: "Chishti Khan and Dundey Khan.",
        subtopic: 'ghadar_party',
        difficulty: 'Hard'
    },
    // Set 6: Chronology
    {
        id: 24,
        question: "Arrange the following events in chronological order:\n1. Alipore Conspiracy Case\n2. Assassination of Rand and Ayerst\n3. Formation of Ghadar Party\n4. Delhi Conspiracy Case (Bomb on Hardinge)\n\nSelect the correct answer:",
        options: ["2-1-4-3", "2-4-1-3", "1-2-3-4", "2-1-3-4"],
        correctAnswer: 0, // (a)
        explanation: "Rand (1897) -> Alipore (1908) -> Delhi (1912) -> Ghadar (1913).",
        subtopic: 'chronology_matching',
        difficulty: 'Moderate'
    },
    {
        id: 25,
        question: "Match the Conspirator with the Case:\nA. Barindra Ghosh -> 1. Nasik Conspiracy\nB. Amir Chand -> 2. Alipore Conspiracy\nC. Anant Kanhare -> 3. Delhi Conspiracy\nD. Ashfaqullah Khan -> 4. Kakori Conspiracy\n\nSelect the correct answer:",
        options: ["A-2, B-3, C-1, D-4", "A-2, B-1, C-3, D-4", "A-3, B-2, C-1, D-4", "A-1, B-2, C-4, D-3"],
        correctAnswer: 0, // (a)
        explanation: "Barindra (Alipore), Amir Chand (Delhi/Hardinge), Anant Kanhare (Nasik), Ashfaqullah (Kakori).",
        subtopic: 'chronology_matching',
        difficulty: 'Moderate'
    },
    // Set 7: Conceptual
    {
        id: 26,
        question: "The \"Zimerman Plan\" was a conspiracy to:",
        options: ["Assassinate the Viceroy.", "Organize an armed insurrection in India with German help during WWI.", "Bomb the Central Assembly.", "Capture the Calcutta Fort."],
        correctAnswer: 1, // (b)
        explanation: "Indo-German conspiracy during WWI.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "Why did the Ghadar movement fail to achieve its objective of an armed revolt in Punjab in 1915?",
        options: ["Lack of arms.", "Treachery within the party (informers) and lack of organized leadership.", "The British army was too strong.", "Gandhi asked them to stop."],
        correctAnswer: 1, // (b)
        explanation: "A traitor Kirpal Singh leaked the date of the revolt to the police.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "The \"Provisional Government of India\" was established in Kabul in 1915 by:",
        options: ["Raja Mahendra Pratap and Barkatullah", "Subhash Chandra Bose", "Rashbehari Bose", "M.N. Roy"],
        correctAnswer: 0, // (a)
        explanation: "Raja Mahendra Pratap became President, Barkatullah became PM.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 29,
        question: "Which of the following journals advocated \"Barter for Barter\" (Blood for Blood)?",
        options: ["Yugantar", "Sandhya", "Kal", "All of the above"],
        correctAnswer: 3, // (d)
        explanation: "Yugantar, Sandhya, and Kal were the three pillars of revolutionary journalism in Bengal/Maharashtra.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "The \"United India House\" in Seattle was set up by:",
        options: ["Tarak Nath Das and G.D. Kumar", "Lala Hardayal", "Sohan Singh Bhakna", "Ramnath Puri"],
        correctAnswer: 0, // (a)
        explanation: "A precursor to the Ghadar party.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 31,
        question: "The \"Silk Letter Conspiracy\" (Reshmi Rumal Tehrik) was associated with:",
        options: ["The Deoband leaders (Maulana Mahmud Hasan/Obeidullah Sindhi) trying to get foreign help (Turkey/Afghanistan) against the British.", "The Ghadar Party sending secret messages.", "The supply of arms to Bengal revolutionaries.", "The Theosophical Society."],
        correctAnswer: 0, // (a)
        explanation: "Silk Letter Conspiracy (letters written on silk cloth) involving Deobandis.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "Who among the following revolutionaries became a communist and helped found the Communist Party of Mexico and India?",
        options: ["M.N. Roy (Naren Bhattacharya)", "Virendranath Chattopadhyaya", "Rashbehari Bose", "Bhagat Singh"],
        correctAnswer: 0, // (a)
        explanation: "M.N. Roy (original name Naren Bhattacharya) left India as a revolutionary (Bagha Jatin's associate) and became a global communist leader.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "The \"Budge Budge Riot\" is associated with:",
        options: ["The arrival of the Komagata Maru ship in Calcutta.", "The Indigo revolt.", "The communal riots in Noakhali.", "The Jallianwala Bagh massacre."],
        correctAnswer: 0, // (a)
        explanation: "When the ship returned to Calcutta, the British tried to arrest the passengers, leading to a riot.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Defense of India Act, 1915\" was primarily enacted to:",
        options: ["Recruit soldiers for WWI.", "Arm the civil population.", "Smash the Ghadar movement and revolutionary activities using draconian powers.", "Defend India from Japanese invasion."],
        correctAnswer: 2, // (c)
        explanation: "It gave the government wide powers to arrest without trial (Special Tribunals) to crush the Ghadarites.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "\"We shall die to awaken the nation.\" This was the dying declaration of:",
        options: ["Bagha Jatin", "Kartar Singh Sarabha", "Madan Lal Dhingra", "Khudiram Bose"],
        correctAnswer: 0, // (a)
        explanation: "Bagha Jatin (Jatindranath Mukherjee). \"Amra morbo, jagat jagbe\" (We shall die to awaken the nation).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_13_CONTENT = `
# Chapter 13: Revolutionary Activities (Phase I)

This chapter covers the era of "Individual Heroism" (The Bomb & Pistol phase).

THE STRATEGY: "THE UNDERGROUND & THE ABROAD"
*   **Visual Metaphor:** The loaded pistol and the secret letter.
*   **Core Theme:** Violent overthrow of British rule.
*   **Geography:** Bengal, Maharashtra, Punjab, and Abroad (London/USA).

---

## BLOCK 1: BENGAL (The Hotbed)
**Anushilan & Yugantar.**

### 💣 KEY GROUPS
*   **Anushilan Samiti (1902):** Promotha Mitter (First).
*   **Yugantar Group:** Barindra Kumar Ghosh & Bhupendranath Datta.
    *   Journal: *Yugantar* ("Force must be stopped by force").

### ⚔️ KEY ACTIONS
*   **Muzaffarpur Murders (1908):**
    *   Target: Kingsford (Judge).
    *   Actors: **Khudiram Bose** (Hanged) & Prafulla Chaki (Suicide).
*   **Alipore Conspiracy Case (1908):**
    *   **Aurobindo Ghosh** arrested (Defended by C.R. Das -> Acquitted).
    *   Barindra Ghosh sent to Cellular Jail.
*   **"Bagha" Jatin:**
    *   **Zimerman Plan:** German Plot to smuggle arms during WWI.
    *   **Battle of Balasore (1915):** Died fighting like a tiger.

---

## BLOCK 2: MAHARASHTRA
**The Pioneers.**

### 🚩 SAVARKAR & CHAPEKARS
*   **1897:** **Chapekar Brothers** (Damodar & Balkrishna) killed Rand & Ayerst (Plague Commissioners) in Poona. (First Political Assassination).
*   **Abhinav Bharat (1904):** Founded by **V.D. Savarkar** (Evolution of Mitra Mela).
*   **Nasik Conspiracy (1909):** Anant Kanhare killed Jackson (Collector).

---

## BLOCK 3: PUNJAB & DELHI
**The Ghadar Link.**

*   **Rashbehari Bose:** Mastermind.
*   **Delhi Conspiracy Case (1912):** Bomb thrown on Viceroy **Lord Hardinge** in Chandni Chowk.
    *   Hardinge survived.
    *   Rashbehari escaped to Japan (Influenced INA later).

---

## BLOCK 4: ABROAD (London & Europe)
**The Intellectual Terrorists.**

*   **Shyamji Krishna Varma:**
    *   **India House** (London hostel).
    *   Journal: *The Indian Sociologist*.
*   **Madam Bhikaji Cama:**
    *   **Mother of Indian Revolution**.
    *   Unfurled first Indian flag at **Stuttgart** (Germany) in 1907.
*   **Madan Lal Dhingra:** Assassinated **Curzon Wyllie** in London (1909).

---

## BLOCK 5: THE GHADAR PARTY (1913)
**The Global Revolt.**

### 🌍 GHADAR MOVEMENT
*   **HQ:** **San Francisco** (Yugantar Ashram).
*   **Founders:** **Lala Hardayal** (Intellectual), **Sohan Singh Bhakna** (President).
*   **Journal:** *Ghadar* (Masthead: "Angrezi Raj Ka Dushman").
*   **The Spark:** **Komagata Maru Incident (1914)**.
    *   Ship turned away from Canada.
*   **The Plan:** 1915 Armed Revolt in Punjab.
    *   **Failure:** Treachery (Kirpal Singh).
    *   **Defense of India Act, 1915:** Passed to crush them.

---

## BLOCK 6: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Who founded Abhinav Bharat? -> **V.D. Savarkar**.
> *   **Q:** Who defended Aurobindo in Alipore Case? -> **C.R. Das**.
> *   **Q:** HQ of Ghadar Party? -> **San Francisco**.
> *   **Q:** Unfurled flag at Stuttgart? -> **Madam Cama**.
> *   **Q:** Who killed Curzon Wyllie? -> **Madan Lal Dhingra**.
`;
