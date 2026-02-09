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

export const MODERN_CHAPTER_2_SUBTOPICS: Subtopic[] = [
    { id: 'colonial', name: 'Colonial Approach' },
    { id: 'nationalist', name: 'Nationalist Approach' },
    { id: 'marxist', name: 'Marxist Approach' },
    { id: 'subaltern', name: 'Subaltern Approach' },
    { id: 'communalist', name: 'Communalist Approach' },
    { id: 'cambridge', name: 'Cambridge School' },
    { id: 'liberal', name: 'Liberal & Neo-Liberal' },
    { id: 'feminist', name: 'Feminist Approach' }
];

export const MODERN_CHAPTER_2_MCQS: Question[] = [
    // Set 1: Colonial & Nationalist Approaches
    {
        id: 1,
        question: "Which of the following statements best describes the 'Colonial Approach' to the history of India?\n1. It criticized the British intervention in Indian society as unnecessary interference.\n2. It portrayed India as a stagnant society that required British guidance to progress.\n3. It actively promoted the idea of India as a single unified nation before British arrival.",
        options: ["1 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "The Colonial approach justified British rule by portraying India as stagnant, backward, and incapable of self-rule without the \"civilizing\" British intervention.",
        subtopic: 'colonial',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following is the author of \"The History of British India\", a text that heavily influenced the colonial categorization of Indian history into Hindu, Muslim, and British periods?",
        options: ["William Jones", "James Mill", "Vincent Smith", "Thomas Macaulay"],
        correctAnswer: 1, // (b)
        explanation: "James Mill wrote The History of British India (1817), which divided Indian history into Hindu, Muslim, and British periods, a framework that influenced communal historiography later.",
        subtopic: 'colonial',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The 'Nationalist Historiography' primarily emerged as a reaction to:",
        options: ["The Marxist interpretation of class struggle.", "The Subaltern view of peasant rebellions.", "The Colonial narratives that denigrated Indian culture and capacity.", "The Cambridge School's theory of factional politics."],
        correctAnswer: 2, // (c)
        explanation: "Nationalist historiography arose to restore national self-esteem and counter the colonial propaganda that Indians had no history of unity or administration.",
        subtopic: 'nationalist',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which of the following is a major criticism often leveled against early 'Nationalist Historiography'?",
        options: ["It focused too much on the economic exploitation by the British.", "It ignored the internal contradictions of Indian society, such as caste and class oppression.", "It portrayed the British rule as entirely beneficial for India's modernization.", "It completely neglected the role of the educated middle class."],
        correctAnswer: 1, // (b)
        explanation: "Nationalist historians often ignored internal social divisions (caste, class inequality) in their attempt to project a united front against British Imperialism.",
        subtopic: 'nationalist',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The work \"The Economic History of India\", which provided a devastating critique of British colonial economic policies, was written by:",
        options: ["Dadabhai Naoroji", "R.C. Dutt", "M.G. Ranade", "G.K. Gokhale"],
        correctAnswer: 1, // (b)
        explanation: "R.C. Dutt wrote The Economic History of India, a foundational text of the economic nationalism thesis.",
        subtopic: 'nationalist',
        difficulty: 'Easy'
    },
    // Set 2: Marxist & Subaltern Approaches
    {
        id: 6,
        question: "According to the 'Marxist Approach' to Indian history, the \"Primary Contradiction\" in colonial India was between:",
        options: ["The Hindu and Muslim communities.", "The interests of the Indian people and the British colonial interests.", "The Indian peasantry and the Indian landlords.", "The Upper Caste elite and the Dalits."],
        correctAnswer: 1, // (b)
        explanation: "Marxists view the Primary Contradiction as the clash between the interests of the Indian people (all classes) and British Colonialism. Secondary contradictions are internal class conflicts (e.g., peasant vs. landlord).",
        subtopic: 'marxist',
        difficulty: 'Moderate'
    },
    {
        id: 7,
        question: "Consider the following pairs of Authors and their famous works (Marxist School):\n1. R.P. Dutt: India Today\n2. A.R. Desai: Social Background of Indian Nationalism\n3. Bipan Chandra: The Rise and Growth of Economic Nationalism in India\n\nWhich of the pairs given above are correctly matched?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All pairs are correctly matched. These are the three pillars of Marxist writing on Indian Freedom Struggle.",
        subtopic: 'marxist',
        difficulty: 'Moderate'
    },
    {
        id: 8,
        question: "The 'Subaltern School' of historiography, launched in the early 1980s, is most closely associated with which of the following historians?",
        options: ["Ranajit Guha", "Ramachandra Guha", "Romila Thapar", "Bipan Chandra"],
        correctAnswer: 0, // (a)
        explanation: "Ranajit Guha is the founding father of the Subaltern Studies collective (early 1980s).",
        subtopic: 'subaltern',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Which of the following statements accurately reflects the core argument of the 'Subaltern Approach'?",
        options: ["History is shaped primarily by the decisions of the Governor-Generals.", "The Indian National Congress fully represented the aspirations of the masses.", "There is a basic contradiction between the elite (both colonial and indigenous) and the masses (subalterns).", "Religious identity is the sole driving force of Indian history."],
        correctAnswer: 2, // (c)
        explanation: "Subalterns argue there was a distinct separation between the politics of the elite (Congress/British) and the politics of the people (Subalterns), which the elites failed to integrate.",
        subtopic: 'subaltern',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "Unlike the Marxist approach, the Subaltern approach:",
        options: ["Ignores the economic factor completely.", "Rejects the notion that the 'people' had their own independent agency.", "Criticizes the Marxist view for merging the distinct voice of the masses with the elite nationalist movement.", "Supports the Colonial claim of a 'Civilizing Mission'."],
        correctAnswer: 2, // (c)
        explanation: "Marxists often subsumed the masses under the leadership of the \"Bourgeoisie\" (Nationalist leaders). Subalterns criticize this, arguing the masses had their own independent political consciousness.",
        subtopic: 'subaltern',
        difficulty: 'Hard'
    },
    // Set 3: Communalist & Cambridge Schools
    {
        id: 11,
        question: "The 'Communalist Approach' to Indian history is characterized by which of the following views?",
        options: ["Hindus and Muslims have always formed a composite culture.", "Economic interests of Hindus and Muslims were identical.", "Hindus and Muslims are permanent, mutually hostile socio-political units.", "The British rule was the sole cause of communal disharmony."],
        correctAnswer: 2, // (c)
        explanation: "This is the definition of the Communal view: Religious communities are distinct \"nations\" with conflicting interests.",
        subtopic: 'communalist',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "According to Communal historiography, the 'Medieval Period' of Indian history is often portrayed as:",
        options: ["A golden age of synthesis.", "A period of foreign rule and decline of Indian civilization.", "A period of rapid industrialization.", "The age of the rise of Maratha power only."],
        correctAnswer: 1, // (b)
        explanation: "Communalists (and some Colonialists) view the Medieval period as a \"Dark Age\" of Muslim tyranny, ignoring the cultural synthesis that occurred.",
        subtopic: 'communalist',
        difficulty: 'Easy'
    },
    {
        id: 13,
        question: "The 'Cambridge School' of historiography is known for debunking the ideology of nationalism. Instead, they attribute the national movement to:",
        options: ["Genuine patriotic sentiment.", "A spiritual awakening among the masses.", "Struggle for power and patronage among elite Indian factions.", "A direct response to the Russian Revolution."],
        correctAnswer: 2, // (c)
        explanation: "The Cambridge School (Anil Seal, etc.) is cynical about ideology. They see politics as \"animal politics\"—a scramble for jobs, power, and patronage.",
        subtopic: 'cambridge',
        difficulty: 'Moderate'
    },
    {
        id: 14,
        question: "Who among the following scholars are associated with the 'Cambridge School' (also known as the Namierite approach)?\n1. Anil Seal\n2. John Gallagher\n3. Judith Brown\n\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All three are associated with the Cambridge School's approach to Indian history.",
        subtopic: 'cambridge',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "The concept of \"Patron-Client Relationships\" is a key explanatory tool in which historical approach?",
        options: ["Marxist", "Nationalist", "Cambridge", "Feminist"],
        correctAnswer: 2, // (c)
        explanation: "Patron-Client networks are central to the Cambridge School's explanation of how leaders mobilized followers (not through ideology, but through favors).",
        subtopic: 'cambridge',
        difficulty: 'Easy'
    },
    // Set 4: Liberal, Neoliberal & Feminist Approaches
    {
        id: 16,
        question: "The 'Liberal and Neo-Liberal' interpretations of Indian history often argue that:",
        options: ["British investment in India was purely exploitative (the 'Drain of Wealth').", "India was already a highly industrialized nation before the British arrived.", "The colonial rule provided infrastructure and access to global markets, which was not entirely negative.", "The revolt of 1857 was a successful war of independence."],
        correctAnswer: 2, // (c)
        explanation: "Neo-liberals (like Roy Tirthankar or Patrick O'Brien) argue that despite the drain, India benefited from integration into the world market, railways, and legal stability.",
        subtopic: 'liberal',
        difficulty: 'Moderate'
    },
    {
        id: 17,
        question: "The book \"The High Caste Hindu Woman\", a pioneering text in Feminist history, was written by:",
        options: ["Sarojini Naidu", "Pandita Ramabai", "Tarabai Shinde", "Madam Bhikaji Cama"],
        correctAnswer: 1, // (b)
        explanation: "Pandita Ramabai wrote The High Caste Hindu Woman (1887), critiquing Brahmanical patriarchy.",
        subtopic: 'feminist',
        difficulty: 'Easy'
    },
    {
        id: 18,
        question: "Katherine Mayo's controversial book \"Mother India\" (1927) is primarily known for:",
        options: ["Praising the status of women in ancient India.", "A sharp critique of the British government's neglect of women.", "A vitriolic attack on Indian society, culture, and the treatment of women, used to justify British rule.", "Advocating for the immediate independence of India."],
        correctAnswer: 2, // (c)
        explanation: "Katherine Mayo's Mother India was a colonialist critique used to argue that Indians (due to child marriage, hygiene, treatment of women) were unfit for self-rule. Gandhi called it a \"Drain Inspector's Report.\"",
        subtopic: 'feminist',
        difficulty: 'Moderate'
    },
    {
        id: 19,
        question: "Feminist historiography in India broadened its scope in the 1970s to focus on:",
        options: ["Biographies of queens like Rani Laxmibai only.", "The participation of women in the non-cooperation movement only.", "The structural analysis of gender discrimination and women's role in the household and society.", "The role of British women in the colonial administration."],
        correctAnswer: 2, // (c)
        explanation: "Feminist history moved beyond just biographies of \"great women\" to analyze the structure of gender relations and the patriarchal nature of the state and society.",
        subtopic: 'feminist',
        difficulty: 'Moderate'
    },
    {
        id: 20,
        question: "Which of the following is a criticism of the 'Neo-Liberal' view by economic nationalists?",
        options: ["Neo-liberals exaggerate the poverty of India.", "Neo-liberals ignore the destruction of indigenous handicrafts and the 'Drain of Wealth'.", "Neo-liberals focus too much on the role of religion.", "Neo-liberals deny the existence of the railway network."],
        correctAnswer: 1, // (b)
        explanation: "Economic Nationalists argue that Neo-liberals overlook the de-industrialization of India (ruin of artisans) and the massive transfer of surplus (Drain) to Britain.",
        subtopic: 'liberal',
        difficulty: 'Hard'
    },
    // Set 5: Integrated & Conceptual Questions
    {
        id: 21,
        question: "\"The British rule in India was a tool of history to push India into the modern capitalist world, despite its brutality.\" This view is most compatible with which early intellectual trend?",
        options: ["Gandhi's Hind Swaraj", "Karl Marx's articles on India", "The Cambridge School", "The Communal View"],
        correctAnswer: 1, // (b)
        explanation: "Karl Marx, in his articles (e.g., \"The British Rule in India\"), famously argued that Britain was \"unconsciously the tool of history\" in causing a social revolution in India, despite its vile motives.",
        subtopic: 'marxist',
        difficulty: 'Hard'
    },
    {
        id: 22,
        question: "Consider the following statements regarding the 'Orientalist' sub-school of the Colonial approach:\n1. They had a deep respect for India's ancient classical tradition.\n2. They believed that India's \"Golden Age\" was in the past and the present was a state of decline.\n3. Max Muller is a prominent figure associated with this view.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswer: 3, // (d)
        explanation: "Orientalists (like William Jones, Max Muller) admired the ancient Vedas (Golden Age) but believed the current state of India was degenerate, requiring British help to restore it.",
        subtopic: 'colonial',
        difficulty: 'Moderate'
    },
    {
        id: 23,
        question: "Which approach would most likely describe the Indian National Congress as a \"Microscopic Minority\"?",
        options: ["Nationalist", "Colonial", "Marxist", "Subaltern"],
        correctAnswer: 1, // (b)
        explanation: "Lord Dufferin (Colonial administrator) famously dismissed the Congress as representing only a \"microscopic minority\" of the people.",
        subtopic: 'colonial',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "A historian writes: \"The Congress leaders were not selfless patriots but power-brokers competing for seats in the legislative councils.\" This historian likely belongs to:",
        options: ["The Marxist School", "The Cambridge School", "The Nationalist School", "The Feminist School"],
        correctAnswer: 1, // (b)
        explanation: "This cynicism regarding \"selfless patriotism\" is the hallmark of the Cambridge School.",
        subtopic: 'cambridge',
        difficulty: 'Moderate'
    },
    {
        id: 25,
        question: "The term \"Drain of Wealth\" is the central thesis of which historiographical school?",
        options: ["Colonial", "Nationalist", "Subaltern", "Cambridge"],
        correctAnswer: 1, // (b)
        explanation: "The \"Drain Theory\" was the bedrock of the Nationalist economic critique (Naoroji, Dutt).",
        subtopic: 'nationalist',
        difficulty: 'Easy'
    },
    {
        id: 26,
        question: "Who among the following historians provided a 'Liberal' interpretation, arguing that India benefited from the 'Pax Britannica' (British Peace)?",
        options: ["R.C. Dutt", "Lord Curzon", "Patrick O'Brien", "Ranajit Guha"],
        correctAnswer: 2, // (c)
        explanation: "Patrick O'Brien is a key figure in the revisionist/liberal economic history that questions the severity of the \"Drain.\"",
        subtopic: 'liberal',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "Match the Scholar with their School of Thought:\nA. Vincent Smith -> 1. Marxist\nB. R.P. Dutt -> 2. Colonial\nC. Anil Seal -> 3. Subaltern\nD. Ranajit Guha -> 4. Cambridge\n\nSelect the correct answer:",
        options: ["A-2, B-1, C-4, D-3", "A-2, B-4, C-1, D-3", "A-1, B-2, C-3, D-4", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0, // (a)
        explanation: "A-2 (Smith=Colonial), B-1 (Dutt=Marxist), C-4 (Seal=Cambridge), D-3 (Guha=Subaltern).",
        subtopic: 'colonial',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "\"Social Background of Indian Nationalism\" is a seminal text analyzing the class basis of the national movement. It was written by:",
        options: ["Bipan Chandra", "Sumit Sarkar", "A.R. Desai", "D.D. Kosambi"],
        correctAnswer: 2, // (c)
        explanation: "A.R. Desai's Social Background of Indian Nationalism is a classic Marxist sociological study.",
        subtopic: 'marxist',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "Which of the following statements is INCORRECT regarding the Feminist approach?",
        options: ["It acknowledges that women were active agents in history, not just passive victims.", "It seeks to uncover the history of women's organizations like the All India Women's Conference.", "It argues that the National Movement fully resolved the issue of gender inequality.", "It critiques the patriarchal bias in traditional history writing."],
        correctAnswer: 2, // (c)
        explanation: "Feminist historians argue that the National Movement did not solve gender inequality; while it brought women into the streets, it often reinforced their traditional roles as self-sacrificing mothers/wives.",
        subtopic: 'feminist',
        difficulty: 'Easy'
    },
    {
        id: 30,
        question: "The 'Utilitarian' school within the Colonial approach (e.g., James Mill) believed that:",
        options: ["Indian society could only be improved through strict legislation and Western laws.", "Indian society should be left alone to evolve naturally.", "Ancient Indian laws were superior to British laws.", "The Village Panchayat system was the ideal form of governance."],
        correctAnswer: 0, // (a)
        explanation: "Utilitarians (Liberals) believed in the power of law and legislation to \"reform\" backward Indian society (e.g., banning Sati), unlike Orientalists who were more cautious about interfering.",
        subtopic: 'colonial',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_2_CONTENT = `
# BLOCK 1: THE COLONIAL APPROACH (The "Civilizing Mission")
## 🎩 COLONIAL / IMPERIALIST SCHOOL

**Core Philosophy:**
*   India was "stagnant" and "backward" before the British came.
*   British rule was a "Civilizing Mission" (White Man's Burden).
*   India is not a nation, but a chaotic collection of castes and religions.

**Key Scholars:**
*   **James Mill:** *History of British India* (1817). He divided Indian history into Hindu, Muslim, and British periods. (Communal periodization).
*   **Vincent Smith:** *Oxford History of India*. Emphasized "Benevolent Despotism".

**Critique:** Used to justify colonial rule and exploit India economically.

> [!WARNING]
> **EXAMINER'S TRAP:**
> Statement: "James Mill's periodization was scientific." -> **FALSE**. It was communal and unscientific.

# BLOCK 2: THE NATIONALIST APPROACH (The "Reaction")
## 🇮🇳 NATIONALIST SCHOOL

**Core Philosophy:**
*   Reaction to the Colonial view.
*   Focused on Economic Exploitation (Drain of Wealth theory).
*   Emphasized "Unity in Diversity" and India's ancient glory.

**Key Scholars:**
*   **Dadabhai Naoroji:** *Poverty and Un-British Rule in India*. (The Grand Old Man).
*   **R.C. Dutt:** *Economic History of India*.
*   **G.K. Gokhale, M.G. Ranade.**
*   *Later:* Jawaharlal Nehru (*Discovery of India*), Pattabhi Sitaramayya.

**Limitation:** Sometimes ignored internal social evils (caste/gender) to present a united front against the British.

### 🆚 COMPARISON TABLE: Colonial vs. Nationalist
| Feature | Colonial View | Nationalist View |
| :--- | :--- | :--- |
| **British Rule** | A Blessing / Modernizing Force | A Curse / Economic Drain |
| **1857 Revolt** | Sepoy Mutiny (Military indiscipline) | First War of Independence |
| **India** | A geographical expression | A Nation in the making |

# BLOCK 3: THE MARXIST APPROACH (The "Class Struggle")
## ☭ MARXIST SCHOOL

**Core Philosophy:**
*   History is a struggle between Classes (Haves vs. Have-nots).
*   **Primary Contradiction:** British Imperialism vs. Indian People.
*   **Secondary Contradiction:** Indian Feudal Landlords vs. Indian Peasants.

**Key Scholars:**
*   **R.P. Dutt:** *India Today*. Defined 3 stages of Colonialism (Mercantile, Industrial, Financial). [Mains Keyword]
*   **A.R. Desai:** *Social Background of Indian Nationalism*.

**Analysis:** The National Movement was a bourgeois (middle-class) movement that used the masses but compromised with the British when the masses got too radical.

# BLOCK 4: THE SUBALTERN APPROACH (The "View from Below")
## 🌾 SUBALTERN SCHOOL (1980s onwards)

**Core Philosophy:**
*   Critiques both Colonial (Elite British) and Nationalist (Elite Indian) views.
*   Focuses on the Common Man: Peasants, Tribals, Workers, Women.
*   Argues that the "People's Politics" was autonomous from the "Elite Politics" of Congress.

**Key Scholar:**
*   **Ranajit Guha:** The pioneer of Subaltern Studies.
*   **David Hardiman, Gyanendra Pandey.**

# BLOCK 5: OTHER SCHOOLS (Communal, Cambridge, Liberal)
## 🧠 MISCELLANEOUS SCHOOLS

**Communal School:**
*   Views medieval history as a permanent struggle between Hindus and Muslims.
*   *Hindu Communalists:* R.C. Majumdar (sometimes), V.D. Savarkar.
*   *Muslim Communalists:* Writers of the Pakistan movement.

**Cambridge School:**
*   **Anil Seal.**
*   *View:* Indian nationalism was just a struggle for power/patronage among Indian elites (caste/religion groups). Denies "Ideology" or "Patriotism".

**Liberal/Neo-Liberal:**
*   Focuses on the "Rule of Law" and "Administrative Unity" provided by the British.

**Feminist Historiography:**
*   **Pandita Ramabai:** *The High Caste Hindu Woman*.
*   Focuses on women's role in the movement and the patriarchal nature of colonial/nationalist structures.

# BLOCK 6: PYQ & MAINS CORNER
> [!TIP]
> **🔥 PYQ ALERT (Mains Focus):**
> *   **Q:** "The Revolt of 1857 was neither first, nor national, nor a war of independence." Discuss. (Critique of Nationalist view by **R.C. Majumdar**).
> *   **Q:** Discuss the impact of the **Drain of Wealth** theory on the growth of economic nationalism. (Nationalist School).
> *   **Q:** "The Indian National Movement was a bourgeois movement." Comment. (Marxist critique).

> [!NOTE]
> **📌 EXAMINER'S LENS (Key Takeaways):**
> History is not objective; it depends on who is writing it.
> For Mains answers, try to take a **Balanced/Synthesis View** (combining Nationalist political critique with Marxist economic insight and Subaltern social focus).
`;

