export interface Subtopic {
    id: string;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_31_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Early Uprisings (BENGAL to Deccan)", status: 'done' },
    { id: '2', name: "Kisan Sabhas & Eka Movement (1920s)", status: 'done' },
    { id: '3', name: "Bardoli Satyagraha & Vallabhbhai Patel", status: 'done' },
    { id: '4', name: "All India Kisan Sabha (AIKS) - 1936", status: 'done' },
    { id: '5', name: "Peasant Movements during WWII & Quit India", status: 'done' },
    { id: '6', name: "Tebhaga, Telangana & Punnapra-Vayalar", status: 'done' },
];

export const MODERN_CHAPTER_31_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Indigo Revolt' (1859-60) was against which of the following?",
        options: ["Land revenue tax.", "Forced cultivation of indigo by British planters.", "Salt tax.", "Zamindari system."],
        correctAnswer: 1,
        explanation: "Planters forced peasants to grow indigo under illegal/coercive contracts.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who were the leaders of the Indigo Revolt in Nadia district?",
        options: ["Digambar Biswas and Bishnu Biswas", "Siddhu and Kanhu", "Birsa Munda", "Titu Mir"],
        correctAnswer: 0,
        explanation: "Digambar and Bishnu Biswas of Govindpur village.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Pabna Agrarian League' (1873) in Bengal was primarily against:",
        options: ["The British government.", "High land revenue and enhancement of rents by Zamindars.", "Forest laws.", "Indigo cultivation."],
        correctAnswer: 1,
        explanation: "It was an'anti-zamindar' movement by legal means.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Deccan Riots' (1875) were directed against whom?",
        options: ["The British officials.", "The Gujarati and Marwari moneylenders.", "The Peshwa.", "The Nizam."],
        correctAnswer: 1,
        explanation: "Peasants in Pune and Ahmednagar attacked the houses and shops of moneylenders.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Which Act was passed to provide relief to the peasants after the Deccan Riots?",
        options: ["Deccan Agriculturists' Relief Act, 1879", "Punjab Land Alienation Act", "Zamindari Abolition Act", "Rent Act"],
        correctAnswer: 0,
        explanation: "Deccan Agriculturists' Relief Act, 1879.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Eka Movement' (1921) in Oudh was led by:",
        options: ["Baba Ramchandra", "Madari Pasi", "Sahajanand Saraswati", "N.G. Ranga"],
        correctAnswer: 1,
        explanation: "Madari Pasi and other low-caste leaders.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who was the principal leader behind the formation of the 'Oudh Kisan Sabha' in 1920?",
        options: ["Jawaharlal Nehru", "Baba Ramchandra", "Gauri Shankar Misra", "All of the above"],
        correctAnswer: 1,
        explanation: "Baba Ramchandra, a sanyasi who lived among the peasants.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Bardoli Satyagraha' (1928) was caused by:",
        options: ["A 22% hike in land revenue by the government.", "Forced indigo cultivation.", "Communal riots.", "Shortage of seeds."],
        correctAnswer: 0,
        explanation: "Peasants refused to pay the enhanced revenue.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "After the successful Bardoli Satyagraha, who gave Vallabhbhai Patel the title of 'Sardar'?",
        options: ["Mahatma Gandhi", "The women of Bardoli", "Jawaharlal Nehru", "Vithalbhai Patel"],
        correctAnswer: 1,
        explanation: "The title was given by the women of Bardoli.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'All India Kisan Sabha' (1936) was founded at its first session in:",
        options: ["Lucknow", "Patna", "Faizpur", "Calcutta"],
        correctAnswer: 0,
        explanation: "Lucknow session of Congress (1936).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_31_MCQS.push(
    {
        id: 11,
        question: "Who was the first President of the All India Kisan Sabha?",
        options: ["Swami Sahajanand Saraswati", "N.G. Ranga", "Indulal Yagnik", "Bankim Mukherji"],
        correctAnswer: 0,
        explanation: "Swami Sahajanand Saraswati. N.G. Ranga was the General Secretary.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Tebhaga Movement' (1946) in Bengal demanded:",
        options: ["Abolition of Zamindari.", "Two-thirds share of the harvest for the sharecroppers (Bargadars) instead of half.", "Free land for the landless.", "Reduction in land revenue."],
        correctAnswer: 1,
        explanation: "Tebhaga = Three shares (Peasant keeps 2/3, Zamindar gets 1/3).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Telangana Movement' (1946-51) was directed against:",
        options: ["The British.", "The Nizam's officials and the local landlords (Deshmukhs/Vetti system).", "The Maratha raiders.", "The French."],
        correctAnswer: 1,
        explanation: "It was a massive peasant insurrection against the Nizam's feudal structure.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "What was the 'Vetti' system?",
        options: ["A system of crop sharing.", "Forced labor without pay.", "A type of tax.", "A land survey technique."],
        correctAnswer: 1,
        explanation: "Forced unpaid labor common in princely states like Hyderabad.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Which peasant movement used the slogan 'He who tills the land, shall own the land'?",
        options: ["Champaran", "Telangana", "Tebhaga", "Kalyan Singh Revolt"],
        correctAnswer: 1,
        explanation: "Prominent during the radical phase of Telangana struggle.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "The 'Bakasht' land dispute (1930s-40s) was a major issue in which province?",
        options: ["UP", "Bihar", "Punjab", "Bengal"],
        correctAnswer: 1,
        explanation: "Bakasht were lands the Zamindars had taken back from tenants due to inability to pay rent during the Depression.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who among the following was a key leader of the peasant movement in Andhra and wrote 'Economic Conditions of the Zamindari Ryots'?",
        options: ["P. Sundarayya", "N.G. Ranga", "A.K. Gopalan", "E.M.S. Namboodiripad"],
        correctAnswer: 1,
        explanation: "N.G. Ranga was a pioneer of peasant organization in Andhra.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Moplah (Mapilla) Rebellion' of 1921 occurred in:",
        options: ["Malabar (Kerala)", "Coastal Andhra", "Tamil Nadu", "Karnataka"],
        correctAnswer: 0,
        explanation: "Muslim tenants (Moplahs) against Hindu landlords and British administration.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Initially, the Moplah rebellion was an integral part of which nationwide movement?",
        options: ["Swadeshi", "Non-Cooperation & Khilafat Movement", "Civil Disobedience", "Quit India"],
        correctAnswer: 1,
        explanation: "It later took a communal turn.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Punnapra-Vayalar' uprising took place in which princely state?",
        options: ["Hyderabad", "Travancore", "Mysore", "Gwalior"],
        correctAnswer: 1,
        explanation: "Travancore (1946), led by communists.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Pagalpanti' movement (1820s-30s) in Bengal was a religious-peasant movement among:",
        options: ["Santhals", "Garos and Hajongs", "Mundas", "Kols"],
        correctAnswer: 1,
        explanation: "Led by Karam Shah and Tipu Shah.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Why was the 'Kisan Sabha' movement so strong in UP between 1918-1922?",
        options: ["The presence of Baba Ramchandra.", "High rents and 'Bedakhli' (Eviction).", "Support from Home Rule League members like Malaviya.", "All of the above."],
        correctAnswer: 3,
        explanation: "All factors contributed to the strength of Oudh Kisan Sabha.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "The 'Faizpur Session' (1936) of the Congress was significant for peasants because:",
        options: ["It was the first session held in a rural area.", "It adopted an Agrarian Programme.", "It demanded the abolition of Intermediate tenures.", "All of the above."],
        correctAnswer: 3,
        explanation: "Held in a village, it focused on peasant needs.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Peasant movements in the 1930s were strongly influenced by which ideology?",
        options: ["Gandhism alone.", "Socialism and Communism.", "Capitalism.", "Religious fundamentalism."],
        correctAnswer: 1,
        explanation: "Leaders like Sahajanand, N.G. Ranga, and E.M.S. were left-leaning.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 25,
        question: "Match the leader with the region:\nA. Sahajanand Saraswati -> 1. Bihar\nB. N.G. Ranga -> 2. Andhra\nC. Nana Patil -> 3. Satara (Maharashtra)\n\nSelect the correct code:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1", "A-1, B-3, C-2"],
        correctAnswer: 0,
        explanation: "Sahajanand (Bihar), N.G. Ranga (Andhra), Nana Patil (Satara - Prati Sarkar).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "Which of the following was NOT a characteristic of peasant movements in the first half of the 20th century?",
        options: ["Integration with the national freedom struggle.", "Organized through Kisan Sabhas.", "Requirement for complete non-attachment from the Congress.", "Transition from localized to all-India platforms."],
        correctAnswer: 2,
        explanation: "They were increasingly integrated with the Congress or the Left.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Worli Revolt' (1945) was a tribal-peasant struggle in which province?",
        options: ["Bihar", "Bombay", "Bengal", "Central Provinces"],
        correctAnswer: 1,
        explanation: "Worli tribals in Thane (led by AIKS and Godavari Parulekar).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Who was the 'General Secretary' of the All India Kisan Sabha at its inception?",
        options: ["Sahajanand Saraswati", "N.G. Ranga", "Indulal Yagnik", "P.C. Joshi"],
        correctAnswer: 1,
        explanation: "N.G. Ranga.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Which Viceroy described the peasant problem in India as the 'Achilles heel' of British rule?",
        options: ["Lord Linlithgow", "Lord Wavell", "Lord Irwin", "Lord Willingdon"],
        correctAnswer: 0,
        explanation: "Recognizing that rural misery was the fodder for nationalist mobilization.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Bijolia Movement' (1905-1920) was a famous peasant struggle in which state?",
        options: ["Punjab", "Rajasthan (Mewar)", "Gujarat", "MP"],
        correctAnswer: 1,
        explanation: "One of the longest organized peasant movements in India.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Who wrote 'Neel Darpan' to highlight the plight of Indigo peasants?",
        options: ["Bankim Chandra", "Dinabandhu Mitra", "R.C. Dutt", "G.K. Gokhale"],
        correctAnswer: 1,
        explanation: "Dinabandhu Mitra (1860).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Kayyur Riot' (1941) was related to peasant resistance in:",
        options: ["Madras", "Kasargod (Malabar)", "Surat", "Patna"],
        correctAnswer: 1,
        explanation: "Peasant resistance against the 'Feudal-cum-Colonial' rule.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Kisan Manifesto' was adopted in which year by AIKS?",
        options: ["1936", "1937", "1939", "1942"],
        correctAnswer: 1,
        explanation: "1937 (Lucknow-Faizpur timeline).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'No-Tax' movements in Surat district in 1923 were a precursor to:",
        options: ["Salt Satyagraha", "Bardoli Satyagraha", "Quit India", "Independence"],
        correctAnswer: 1,
        explanation: "Successful mobilization led by Patel.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The primary success of the 19th-century peasant uprisings was that they:",
        options: ["Abolished British rule.", "Forced the British to pass various Tenancy Acts and Rent Acts for protection.", "Distributed land to everyone.", "None of the above."],
        correctAnswer: 1,
        explanation: "They forced the colonial state into legislative action for peasant protection.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    }
);

export const MODERN_CHAPTER_31_CONTENT = `
# Chapter 31: Peasant Movements 1857-1947

## BLOCK 1: INDIGO REVOLT (1859-60)
*The Blue Mutiny.*

### 🔵 NEEL DARPAN
**Context:** European planters in Bengal forced peasants to grow **Indigo** instead of rice. They paid meager advances and used armed thugs (Lathiyals) to coerce them.

**The Spark:** In Nadia district (Govindpur village), led by **Digambar Biswas and Bishnu Biswas**.

**The Method:**
- The peasants refused to take advances.
- They physically resisted the Lathiyals with spears and swords.
- They used the legal system (filing lawsuits) and social boycott.

**Intellectual Support:**
- **Harish Chandra Mukherjee** (Editor of *The Hindu Patriot*) supported them.
- **Dinabandhu Mitra** wrote the play ***"Neel Darpan"*** (Mirror of Indigo) depicting the planters' brutality.

**Outcome:** The Government appointed an **Indigo Commission (1860)**. It ruled that the planter could not *force* the ryot to grow indigo. The planters closed their factories in Bengal and moved to Bihar.

---

## BLOCK 2: PABNA AGRARIAN LEAGUES (1873-85)
*The Legal Battle.*

### ⚖️ "WE WANT TO BE THE QUEEN'S RYOTS"
**Region:** Yusufshahi Pargana (East Bengal).

**Grievance:** Zamindars were enhancing rent beyond legal limits and preventing tenants from acquiring occupancy rights (under Act X of 1859).

**The Movement:**
- Peasants formed **Agrarian Leagues**.
- They refused to pay the enhanced rent (but paid the old rent).
- **Strategy:** **Litigation.** They fought the Zamindars in courts rather than using violence.

**Slogan:** They famously declared they wanted to be **"Ryots of Her Majesty the Queen"** (direct tenants of the Crown) and not of the Zamindars.

**Outcome:** The **Bengal Tenancy Act (1885)** was passed to protect tenants.

---

## BLOCK 3: DECCAN RIOTS (1875)
*Burning the Bonds.*

### 🔥 AGAINST THE MONEYLENDER
**Region:** Pune and Ahmednagar districts (Maharashtra).

**Target:** The Marwari and Gujarati moneylenders (Sahukars).

**Context:** High land revenue + Fall in cotton prices (after US Civil War ended) drove peasants into debt. The moneylenders used the courts to seize their land.

**The Action:**
- Peasants attacked the houses of moneylenders.
- **Objective:** Not to kill, but to **seize and burn the Debt Bonds (account books)**.
- **Social Boycott:** Barbers, washermen, and shoemakers refused to serve the moneylenders.

**Outcome:** The **Deccan Agriculturists Relief Act (1879)** was passed to restrict the alienation of land.

---

## BLOCK 4: NATURE OF 19th CENTURY MOVEMENTS
*Limited Goals.*

### 🎯 LOCAL GRIEVANCES
**Target:** The immediate enemy (Planter/Zamindar/Moneylender), not the British Colonial State.

**Goal:** Removal of specific grievances (high rent/fraud), not "Swaraj" or ending the system.

**Leadership:** Often local village headmen or better-off peasants.

**Religion:** Sometimes used to mobilize people (e.g., Moplahs), but the core issues were economic.

---

## BLOCK 5: RAMOSI PEASANT FORCE (1879)
*The Robin Hood Style.*

### 🏹 VASUDEV BALWANT PHADKE
**Region:** Maharashtra.

**Leader:** **Vasudev Balwant Phadke** (The Father of Indian Armed Rebellion).

**The Force:** He organized a group of peasants (**Ramosis**) to commit dacoities on rich merchants/moneylenders to fund an uprising against the British.

**Significance:** It was a bridge between peasant unrest and revolutionary nationalism.

---

## BLOCK 6: THE KISAN SABHAS OF UP (1918-1920)
*Organizing the Heartland.*

### 🚩 GAURI SHANKAR & BABA RAMCHANDRA
**UP Kisan Sabha (1918):**
- **Founders:** Gauri Shankar Mishra and Indra Narain Dwivedi. Supported by **Madan Mohan Malaviya**.
- **Context:** Set up during the Home Rule League movement to mobilize peasants in Avadh.

**Awadh Kisan Sabha (1920):**
- **Leader:** **Baba Ramchandra** (a sanyasi who had been an indentured laborer in Fiji).
- **Reason:** The UP Kisan Sabha was too "moderate." Ramchandra wanted stronger action against Taluqdars (Landlords).
- **Methods:** Social Boycott (**Nai-Dhobi Bandh**—no barbers or washermen for landlords) and refusing to till *bedakhali* land (land from which a tenant was evicted).

---

## BLOCK 7: EKA MOVEMENT (1921)
*The Unity Oath.*

### 🤝 MADARI PASI
**Region:** Hardoi, Bahraich, and Sitapur (Northern UP).

**Leadership:** Came from the lower castes (**Madari Pasi**).

**The Oath:** Peasants gathered at a religious ritual and took an oath:
- We will pay only the recorded rent.
- We will not do forced labor (*begar*).
- We will not leave the land if evicted.

**End:** It was severely repressed by the British by 1922.

---

## BLOCK 8: MOPLAH REBELLION (1921)
*Agrarian Grievance turned Communal War.*

### ⚔️ MALABAR, KERALA
**The Players:** **Moplahs** (Muslim tenants) vs **Jenmis** (Hindu Landlords).

**The Grievance:** High rent, insecurity of tenure, and renewal fees.

**The Trigger:** The Khilafat/Non-Cooperation Movement gave them political courage. Leaders like **Ali Musaliyar** were arrested.

**The Turn:** Initially anti-British and anti-Landlord, it turned **Communal**. The Moplahs attacked Hindu landlords and forced conversions.

**Result:** The British crushed it with brutal force (**Wagon Tragedy**—67 prisoners suffocated in a closed railway wagon). The Congress distanced itself due to the violence.

---

## BLOCK 9: BARDOLI SATYAGRAHA (1928)
*The Textbook Victory.*

### 🦁 SARDAR PATEL'S RISE
**Context:** The Bombay Govt increased land revenue by **30%** despite a fall in cotton prices.

**The Leader:** **Vallabhbhai Patel** was invited to lead.

**The Title:** The women of Bardoli gave him the title **"Sardar"** (Leader).

**Strategy:**
- **Non-Payment:** Complete refusal to pay the enhanced tax.
- **Intelligence:** He set up an intelligence wing to track government officials.
- **Social Boycott:** Anyone who paid the tax or bought confiscated land was socially boycotted.

**Outcome:** The Govt surrendered. The **Maxwell-Broomfield Inquiry** reduced the hike from 30% to **6.03%**.

---

## BLOCK 10: FOREST SATYAGRAHAS
*Fighting for Rights over Jungle.*

### 🌲 CUDDAPAH & VIZAG
**Context:** The British restricted tribal access to forests (for grazing/firewood) under Forest Laws.

**Andhra (1920s):** N.V. Rama Naidu and N.G. Ranga organized forest satyagrahas in Nellore and Cuddapah.

**Methods:** Sending cattle into reserved forests without paying grazing fees.

---

## BLOCK 11: ALL INDIA KISAN SABHA (1936)
*The National Umbrella.*

### 🚩 LUCKNOW SESSION
**Context:** By the 1930s, the Congress Socialist Party (CSP) and Communists wanted a separate organization for peasants.

**Formation:** **April 1936** at the Lucknow session of the Congress.

**Key Leaders:**
- **President:** **Swami Sahajanand Saraswati** (The militant leader from Bihar).
- **General Secretary:** **N.G. Ranga** (The peasant intellectual from Andhra).

**Significance:** It linked the peasant struggle to the national freedom struggle but maintained a separate identity.

**Manifesto:** Demanded abolition of Zamindari and occupancy rights for all tenants.

---

## BLOCK 12: TEBHAGA MOVEMENT (1946)
*Two-Thirds for the Tiller.*

### 🌾 BENGAL (NORTH)
**Region:** Dinajpur, Rangpur, Jalpaiguri (North Bengal).

**The Demand:** The sharecroppers (Bargadars) demanded **2/3rd (Tebhaga)** of the produce for themselves, leaving only 1/3rd for the Jotedar (Landlord).
- **Previous Custom:** 50-50 split.

**Basis:** The **Floud Commission (1940)** had recommended this 2/3rd share, but the Govt never implemented it.

**Slogan:** *"Nij khamare dhan tolo"* (Stock paddy in your own granary, not the landlord's).

**Outcome:** The Muslim League ministry suppressed it, but it paved the way for land reforms in West Bengal later.

---

## BLOCK 13: TELANGANA MOVEMENT (1946-51)
*The Largest Armed Struggle.*

### ⚔️ HYDERABAD STATE
**Target:** The Nizam of Hyderabad and his feudal lords (Deshmukhs).
**Context:** Forced labor (*Vethi*) and illegal exactions were rampant.
**The Spark:** The killing of a village militant, **Doddi Komarayya** (July 1946).

**Nature:** It was a **Guerrilla War**.
- Peasants seized land and distributed it.
- They formed **"Village Republics" (Sanghams)**.
- It continued even after Independence (against the Indian Army) until 1951 when the Communists called it off.

**Result:** It accelerated the integration of Hyderabad into India and led to the **Bhoodan Movement** (Vinoba Bhave realized land hunger was the root cause).

---

## BLOCK 14: VARLI REVOLT (1945)
*The Adivasi Awakening.*

### 🏹 THANE, MAHARASHTRA
**Tribe:** Varli (Warlis).
**Leader:** **Godavari Parulekar** (A Communist leader, known as "Godutai").

**Target:** Forest contractors and landlords who used them as forced labor.

**Success:** It was unique because it was an Adivasi movement led by a woman from the outside, which successfully ended forced labor in the region.

---

## BLOCK 15: BAKASHT LAND STRUGGLE (1930s)
*The Return of the Land.*

### 🏞️ BIHAR
**What is Bakasht?** Land where the tenant lost occupancy rights because of non-payment of rent during the Depression, and it reverted to the Zamindar (who cultivated it himself).

**The Struggle:** Led by **Karyanand Sharma** in Munger (Barahiya Tal).

**Demand:** Return of the Bakasht lands to the original tenants.

**Method:** Satyagraha and forcible cultivation.

---

## BLOCK 16: BIJOLIA MOVEMENT (1897-1941)
*The Marathon Struggle.*

### 🌵 MEWAR STATE (RAJASTHAN)
**Significance:** It was the longest non-violent peasant movement in Indian history (44 years).

**Grievance:** 84 different types of taxes (*lag-bag*) imposed by the Thikanedar (Feudal Lord).

**Phases:**
1.  **Sadhu Sitaram Das (1897-1915):** Early phase, local leadership.
2.  **Vijay Singh Pathik (1915-1923):** He nationalized the issue. He started the newspaper *"Rajasthan Kesari"* and linked it to the Congress.
3.  **Manikya Lal Verma (1927-1941):** Final phase.

**Outcome:** It inspired Prajamandal movements in other Princely States.

---

## BLOCK 17: PUNJAB AGITATION (1907)
*Protecting the Pagri.*

### 👳 PAGRI SAMBHAL JATTA
**Context:** The British passed the **Colonization Bill (1906)** which increased water rates in the canal colonies (Lyallpur) and restricted property rights.

**Leaders:** **Ajit Singh** (Bhagat Singh's uncle) and **Lala Lajpat Rai**.

**Method:**
- Formation of *Anjuman-i-Mohisban-i-Watan*.
- The song **"Pagri Sambhal Jatta"** (Take care of your turban/dignity) became the anthem.

**Outcome:** The Government was forced to repeal the Colonization Act.

---

## BLOCK 18: KHEDA SATYAGRAHA (1918)
*Gandhian Peasantry.*

### 🏚️ THE FIRST NON-COOPERATION
**Context:** Crops failed in Kheda (Gujarat). Under the Revenue Code, if the yield was less than 1/4th of normal, the tax should be suspended.

**Issue:** The Govt refused to suspend the tax.

**Leaders:** **Gandhi** (Spiritual head) and **Vallabhbhai Patel** (Operational head - his first major role).

**Method:** Peasants signed a pledge not to pay. They faced confiscation of cattle and property but remained non-violent.

**Outcome:** The Govt secretly issued orders to collect tax only from those who could afford to pay. Gandhi declared victory.

---

## BLOCK 19: PUNNAPRA-VAYALAR (1946)
*The Communist Revolt.*

### 🚩 TRAVANCORE STATE
**Region:** Alleppey (Alappuzha), Kerala.

**Target:** The Prime Minister of Travancore (**C.P. Ramaswamy Iyer**) who wanted to create an "American model" independent Travancore (not joining India).

**The Struggle:** Led by the Communists. It was a violent uprising of coir workers and peasants.

**Slogan:** *"American Model Arabi Kadalil"* (Dump the American Model in the Arabian Sea).

**Significance:** It prevented Travancore from staying independent and forced its accession to India.

---

## BLOCK 20: NO-RENT vs NO-REVENUE
*The Technical Difference.*

### 💰 WHO DO YOU PAY?
**No-Revenue Campaign:**
- **Target:** The Government.
- **Where:** In **Ryotwari areas** (like Bardoli, Kheda, Coastal Andhra) where peasants paid directly to the State.

**No-Rent Campaign:**
- **Target:** The Zamindar.
- **Where:** In **Zamindari areas** (like UP, Bengal, Bihar).

**Complexity:** The Congress was often hesitant here because many Zamindars supported the Congress. They didn't want a "Class War" (Peasant vs Zamindar) to disrupt the "Anti-Colonial War" (Indian vs British).

---

## BLOCK 21: CHAMPARAN SATYAGRAHA (1917)
*The First Lab Experiment.*

### 🔵 TINKATHIA SYSTEM
**Context:** European planters in Champaran (Bihar) forced peasants to grow indigo on **3/20th (Tinkathia)** of their land.

**The Squeeze:** When German synthetic dyes replaced indigo, planters demanded heavy compensation (*Tawan*) to release peasants from this obligation.

**The Leader:** **Raj Kumar Shukla** (a local peasant) obstinately pursued Gandhi to come to Champaran.

**Gandhi's Entry:** He disobeyed the order to leave the district and was ready to go to jail. This was the first use of **Civil Disobedience**.

**Outcome:** A Committee of Inquiry (with Gandhi as a member) was formed. The Tinkathia system was abolished, and planters had to refund **25%** of the illegal money taken.

---

## BLOCK 22: DARBHANGA PEASANT MOVEMENT (1919-20)
*The Forgotten Swami.*

### 🚩 SWAMI VIDYANAND
**Region:** Darbhanga Raj (The largest Zamindari in Bihar).
**Leader:** **Swami Vidyanand**.
**Target:** The Maharaja of Darbhanga.
**Issue:** Peasants were protesting against the Maharaja's agents who were extracting illegal taxes and denying forest rights.
**Significance:** It showed that peasant unrest was brewing in Bihar even before the Congress formally launched the Non-Cooperation Movement.

---

## BLOCK 23: SYSTEMS OF BONDED LABOR
*Slavery by Custom.*

### ⛓️ HALI & KAMIAUTI
**Hali System (Gujarat):**
- **Region:** Surat/Bardoli.
- **Nature:** The **Halis** (agricultural laborers) were hereditary bondsmen of the upper-caste landlords (Kaliparaj).
- **Reform:** Gandhi and Vallabhbhai Patel worked to rename them **Raniparaj** (Forest People) and end this system.

**Kamiauti System (Bihar/Orissa):**
- **Nature:** A system where low-caste laborers (**Kamias**) were bound to serve the landlord for life in exchange for a small loan and interest.

---

## BLOCK 24: EVOLUTION OF PEASANT MOVEMENTS
*The Great Shift.*

### 📊 19th vs 20th CENTURY
| Feature | 19th Century (1857-1900) | 20th Century (1900-1947) |
| :--- | :--- | :--- |
| **Target** | Immediate enemy (Moneylender/Planter/Zamindar). | The Colonial State and the Landlord. |
| **Goal** | Redressal of specific grievances (rent reduction). | Abolition of the System (Zamindari) + Swaraj. |
| **Ideology** | No specific ideology. Often religious (Moplah). | Linked to Nationalism, Socialism, and Communism. |
| **Leadership** | Local village headmen or small landlords. | National Leaders (Gandhi, Patel, Sahajanand). |
| **Outcome** | Government passed minor relief acts (Tenancy Acts). | Became a mass base for Independence. |

---

## BLOCK 25: KISAN SABHA IN BENGAL (1930s)
*Before Tebhaga.*

### 🌾 BANKIM MUKHERJEE
**Context:** Before the massive Tebhaga uprising (1946), the groundwork was laid in the 1930s.

**Organization:** The Bengal Provincial Kisan Sabha (BPKS).

**Leader:** **Bankim Mukherjee** and **Krishna Binod Ray**.

**Role:** They mobilized peasants against the Damodar Canal Tax (**Canal Tax Satyagraha**) in Burdwan, proving that the Left was gaining ground in rural Bengal.

---

## BLOCK 26: BIHAR PROVINCIAL KISAN SABHA (1929)
*The Engine of the East.*

### 🚩 SAHAJANAND'S START
**Founder:** **Swami Sahajanand Saraswati**.
**Formed:** 1929 (at the Sonepur Fair).
**Secretary:** **Shrikrishna Sinha** (who later became the first CM of Bihar).

**Context:** It was formed to mobilize peasants against the Zamindars' attacks on occupancy rights.

**Significance:** It was the first major organized Kisan Sabha that later expanded into the All India Kisan Sabha (AIKS) in 1936.

---

## BLOCK 27: ANDHRA PROVINCIAL RYOTS ASSOCIATION (1928)
*The Southern Pillar.*

### 🚜 N.G. RANGA
**Founder:** **N.G. Ranga** and M.B. Naidu.
**Formed:** 1928.
**Focus:** Reduction of land revenue, abolition of Zamindari, and addressing rural indebtedness.
**School:** Ranga also started the **Indian Peasants' Institute (1933)** in Nidubrolu to train peasant workers, which became a nursery for peasant leaders.

---

## BLOCK 28: FAIZPUR AGRARIAN PROGRAMME (1936)
*The Congress Adopts the Cause.*

### 🏡 FIRST VILLAGE SESSION
**Context:** The Congress held its session in a **village (Faizpur, Maharashtra)** for the first time in 1936.
**President:** Jawaharlal Nehru.

**The Resolution:** The Congress adopted the **"Agrarian Programme"**.

**Demands:**
- 50% reduction in rent and revenue.
- Exemption of uneconomic holdings from tax.
- Abolition of feudal levies and forced labor.
- Recognition of peasant unions (Kisan Sabhas).

---

## BLOCK 29: AMBARI SATYAGRAHA (1939)
*The Scholar as Leader.*

### 📚 RAHUL SANKRITYAYAN
**Region:** North Bihar.
**Leader:** **Rahul Sankrityayan** (The famous Hindi writer and polymath).
**Issue:** The **Bakasht lands** (lands resumed by landlords for self-cultivation during depression).
**Action:** He led peasants to forcibly harvest crops on these lands. He was beaten and jailed, but the movement forced the government to pass legislation protecting tenancy rights.

---

## BLOCK 30: KARSHAKA SANGHAMS (1930s)
*The Red Base in Kerala.*

### 🌴 MALABAR PEASANT UNIONS
**Context:** After the collapse of the Moplah Rebellion (1921), the peasant movement in Kerala was rebuilt by Socialists and Communists in the 1930s.

**Organization:** **Karshaka Sanghams** (Peasant Unions).

**Method:** Marching of *Jathas* (groups) to the landlords' houses to demand reduction of rent.

**Specific Tactic:** They popularized the practice of stopping the payment of illegal levies (like *Vighi* and *Nuri*).

**Significance:** These Sanghams created the mass base that led to the first Communist government in Kerala in 1957.
`;

