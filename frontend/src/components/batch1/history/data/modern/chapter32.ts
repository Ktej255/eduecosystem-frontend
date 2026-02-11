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

export const MODERN_CHAPTER_32_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Rise of Trade Unionism After WWI", status: 'done' },
    { id: '2', name: "Formation of AITUC (1920)", status: 'done' },
    { id: '3', name: "The Trade Union Act, 1926", status: 'done' },
    { id: '4', name: "Communist Influence & Splits in AITUC", status: 'done' },
    { id: '5', name: "The Working Class During WWII & Independence", status: 'done' },
];

export const MODERN_CHAPTER_32_MCQS: Question[] = [
    {
        id: 1,
        question: "Who is considered the 'Father of the Trade Union Movement' in India?",
        options: ["B.P. Wadia", "N.M. Lokhande", "Lala Lajpat Rai", "V.V. Giri"],
        correctAnswer: 1,
        explanation: "N.M. Lokhande founded the Bombay Millhands Association in 1890.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The first Factory Act in India was passed in which year?",
        options: ["1881", "1891", "1911", "1922"],
        correctAnswer: 0,
        explanation: "The Factory Act of 1881 primarily focused on child labor issues.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Madras Labour Union', formed in 1918, was led by:",
        options: ["N.M. Joshi", "B.P. Wadia", "Diwan Chaman Lall", "Joseph Baptista"],
        correctAnswer: 1,
        explanation: "It was the first clearly registered trade union in the modern sense.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Who was the first President of the All India Trade Union Congress (AITUC)?",
        options: ["Jawaharlal Nehru", "Lala Lajpat Rai", "V.V. Giri", "C.R. Das"],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai was the first president at the Bombay session in 1920.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Textile Labour Association' in Ahmedabad was founded by:",
        options: ["N.M. Lokhande", "Anusuya Sarabhai", "Mahatma Gandhi", "Both (b) and (c)"],
        correctAnswer: 3,
        explanation: "It was based on Gandhi's theory of Trusteeship.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The Trade Union Act, 1926, provided for:",
        options: ["Compulsory membership.", "Legal status and protection for registered trade unions.", "Ban on strikes.", "Minimum wage fixing."],
        correctAnswer: 1,
        explanation: "It allowed unions to be registered and provided immunity from civil and criminal liability in some cases.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 'Meerut Conspiracy Case' (1929) was directed against:",
        options: ["Landlords", "Communist and labor leaders", "British officers", "Congress leaders"],
        correctAnswer: 1,
        explanation: "It was an attempt by the British to suppress the rising influence of Communists in the labor movement.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Who was the first General Secretary of AITUC?",
        options: ["Diwan Chaman Lall", "N.M. Joshi", "V.V. Giri", "S.A. Dange"],
        correctAnswer: 0,
        explanation: "Diwan Chaman Lall was the first General Secretary.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Which ideological group led the split in AITUC at the Nagpur session (1929)?",
        options: ["Reformists (led by N.M. Joshi)", "Communists", "Congressites", "Gadhites"],
        correctAnswer: 0,
        explanation: "Differences over the issue of affiliation with international labor bodies led to the split.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "The 'Bombay Millhands Association' (1890) was notable because it was:",
        options: ["A registered union.", "The first organization for workers in India.", "A political party.", "Led by the British."],
        correctAnswer: 1,
        explanation: "It was a pioneer organization, though not a union in the strictly modern legal sense.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
];

export const MODERN_CHAPTER_32_CONTENT = `
# Chapter 32: The Movement of the Working Class

*The "Hammer & The Wheel": From unorganized philanthropic efforts to the organized Trade Union movement that terrified the British.*

## BLOCK 1: THE EARLY PHASE (1870-1915)
**Philanthropy, not Politics.**

### 🏭 THE PIONEERS (Pre-AITUC)
*   **Nature:** Unorganized, isolated strikes. Leaders were social reformers, not politicians.

**Sorabjee Shapoorji Bengalee (1878):**
*   Tried to pass a bill for better working conditions in Bombay Legislative Council.

**Narayan Meghaji Lokhande (1880):**
*   **Title:** "Father of the Trade Union Movement in India".
*   **Newspaper:** *Deenbandhu*.
*   **Organization:** Bombay Millhands Association (1890) - Considered the first labor organization.

**Swadeshi Impact (1903-08):**
*   Strikes became political for the first time.
*   **1908 Strike:** Bombay textile workers struck for 6 days to protest the arrest of Tilak. (Lenin hailed this as the awakening of the Indian proletariat).

---

## BLOCK 2: THE TURNING POINT (1915-1920)
**War, Revolution & Gandhi.**

### 🌍 THE CATALYSTS
*   **World War I:** Rising prices + Low wages = Unrest.
*   **Russian Revolution (1917):** Proved that workers could rule a country.

**Madras Labour Union (1918):**
*   **Founder:** B.P. Wadia.
*   **Significance:** The First **Registered** Trade Union in India.

**Ahmedabad Textile Labour Association (1918):**
*   **Founder:** Mahatma Gandhi (and Anasuya Sarabhai).
*   **Philosophy:** Trusteeship & Arbitration (Non-violent).

---

## BLOCK 3: ALL INDIA TRADE UNION CONGRESS (AITUC) - 1920
**The National Body.**

### 🚩 AITUC FOUNDATION (1920)
*   **Date:** October 31, 1920.
*   **Venue:** Bombay.
*   **President:** **Lala Lajpat Rai**.
*   **General Secretary:** Dewan Chaman Lal.
*   **Context:** Founded to represent India at the International Labour Organization (ILO) in Geneva.
*   **Ideology:** Initially influenced by Congress (moderates), later shifted to Socialists/Communists.

**Lala Lajpat Rai's Speech:**
> "Imperialism and militarism are the twin children of capitalism."

---

## BLOCK 4: THE TRADE UNION ACT (1926)
**Legal Recognition.**

### ⚖️ TRADE UNION ACT (1926)
*   **Provisions:** Recognized trade unions as legal associations.
*   **Immunity:** Granted immunity from civil/criminal prosecution for legitimate union activities.
*   **Condition:** Unions had to register and submit audited accounts.

---

## BLOCK 5: THE SPLITS & MERGERS (1929-1947)

### 💔 THE GREAT SPLIT - NAGPUR SESSION (1929)
*   **President:** Jawaharlal Nehru.
*   **Conflict:** Communists (Girni Kamgar Union) wanted affiliation with Comintern (Moscow). Moderates (N.M. Joshi) refused.
*   **Result:** Moderates walked out and formed **Indian Trade Union Federation (ITUF)**.

### 🚩 THE SECOND SPLIT (1931)
*   **Red vs. Red:** Radical communists broke away to form **Red Trade Union Congress (RTUC)**.
*   **Leaders:** B.T. Ranadive and S.V. Deshpande.

### 🤝 THE REUNIFICATION (1938-40)
*   **Process:** RTUC merged back into AITUC (1935). ITUF (now NTUF) merged back in 1940.
*   **Context:** Rise of Fascism and need for United Front.

---

## BLOCK 6: CONSPIRACIES & LAWS

### 🕵️ MEERUT CONSPIRACY CASE (1929)
*   **Context:** Growing Communist influence.
*   **Arrests:** 31 leaders (including 3 British Communists: Philip Spratt, Ben Bradley, Lester Hutchinson).
*   **Charge:** Conspiring to deprive the King-Emperor of sovereignty.
*   **Impact:** Massive publicity for Communist ideas.

### ⚖️ TRADE DISPUTES ACT (1929)
*   **Objective:** To prevent "lightning strikes" in public utilities.
*   **Provisions:**
    *   Compulsory Courts of Inquiry/Conciliation Boards.
    *   **Illegal:** Sympathetic strikes & strikes with "political objectives".
*   **Bhagat Singh:** Threw a bomb in the Central Assembly against this Act (and Public Safety Bill).

### ⚖️ KANPUR BOLSHEVIK CONSPIRACY (1924)
*   **Accused:** S.A. Dange, Muzaffar Ahmed, Shaukat Usmani, Nalini Gupta.
*   **Significance:** British attempt to crush communism; led to founding of CPI in 1925.

---

## BLOCK 7: FACTORY LEGISLATION
**Protection or Control?**

| Act | Year | Viceroy | Key Provision |
| :--- | :--- | :--- | :--- |
| **First Factory Act** | 1881 | Ripon | Prohibited child labor (<7 years). |
| **Second Factory Act** | 1891 | Lansdowne | Weekly holiday. Fixed hours for women (11 hrs). |
| **Workmen's Compensation** | 1923 | Reading | Employer must pay for injury/death. |
| **Proprietary: Payment of Wages** | 1936 | Willingdon | Wages paid within 7 days; no arbitrary fines. |

---

## BLOCK 8: KEY LEADERS & MOVEMENTS

### 🦁 LEADERS
*   **Sasipada Banerjea (1870):** Philanthropic phase (Workingmen's Club).
*   **N.M. Joshi:** Father of Modern Trade Unions.
*   **V.V. Giri:** Founder of AIRF (Railwaymen). Later President of India.
*   **Subhas Chandra Bose:** President of AITUC (1931). Led TISCO strike (1928).

### 🛑 HISTORIC STRIKES
*   **GIP Railway Strike (1899):** First organized railway strike.
*   **Bombay Textile Strike (1908):** Political strike for Tilak.
*   **South Indian Railway Strike (1928):** Harsh crackdown (10 years jail for Singingravelu).
*   **P&T Strike (1946):** Post-war wave; paralyzed communications.

---

## BLOCK 9: INTERNATIONAL & POLICY

### 🌍 INDIA & THE ILO (1919)
*   India was a founding member. N.M. Joshi attended the first conference.

### 📜 WHITLEY COMMISSION (1929)
*   **Royal Commission on Labour.**
*   **Impact:** Blueprint for future labor laws (Report 1931).

### 📋 REGE COMMITTEE (1944)
*   **Labour Investigation Committee.**
*   **Outcome:** Recommended comprehensive social security (ESI Act 1948).

### 🚩 FIRST MAY DAY (1923)
*   **Leader:** **M. Singaravelu Chettiar** (Madras).
*   **Symbol:** Unfurled the Red Flag for the first time in India.

---

## BLOCK 10: THE FINAL PHASE (1940-1947)

### 🇬🇧 INDIAN FEDERATION OF LABOUR (IFL) - 1941
*   **Founder:** M.N. Roy.
*   **Stance:** Supported British war effort (Anti-Fascist). Received British funding.

### 🇮🇳 INTUC (1947)
*   **Date:** May 1947.
*   **Founders:** Vallabhbhai Patel, Gulzarilal Nanda.
*   **Philosophy:** Gandhian (Negotiation, Anti-Strike).
*   **First President:** Dr. Suresh Chandra Banerjee (Inaugurated by Patel).

### 👨‍⚖️ DR. AMBEDKAR AS LABOUR MEMBER (1942-46)
*   **Achievements:**
    *   **8-Hour Workday** (Reduced from 12).
    *   Employment Exchanges.
    *   Tripartite Labour Conferences.

> [!WARNING]
> **🔥 PRELIMS TRAPS:**
> *   **First Union:** Bombay Millhands (Loose) vs Madras Labour Union (Registered).
> *   **First AITUC Prez:** Lajpat Rai.
> *   **Bhagat Singh's Bomb:** Against **Public Safety Bill** & **Trade Disputes Bill**.
> *   **Plague Bonus:** Origin of the "Bonus" concept (Bombay 1897).

---

## BLOCK 26: INDEPENDENT LABOUR PARTY (1936)
*Caste meets Class.*

### 🗳️ DR. AMBEDKAR'S VISION
**Founder:** **Dr. B.R. Ambedkar**.
**Context:** The 1935 Act gave reserved seats to labor. Ambedkar realized that the Dalit struggle was also a worker's struggle.
**Ideology:** It was not a Marxist party but a Socialist one. It fought against "Brahmanism" and "Capitalism" simultaneously.

**Success:** In the 1937 Bombay elections, it won **15 out of 17** seats it contested, proving that Dalits could organize as a political labor force.

**Action:** It organized massive strikes against the "Black Act" (Industrial Disputes Act, 1938) along with the Communists.

---

## BLOCK 27: LABOUR SWARAJ PARTY (1925)
*The Bengal Pioneer.*

### ☭ MUZAFFAR AHMED & NAZRUL ISLAM
**Founders:** **Muzaffar Ahmed**, **Qazi Nazrul Islam** (The Rebel Poet), and **Hemanta Kumar Sarkar**.
**Context:** Formed within the Congress in Bengal to push for socialist demands.

**Significance:** It was the first open Communist organization in India (before the CPI was formally legalized or WPPs were formed).

**Journal:** It published *"Langal"* (The Plough), edited by Nazrul Islam.

---

## BLOCK 28: WOMEN IN TRADE UNIONS
*The Militant Sisters.*

### 👩🔧 MANIBEN KARA & USHABAI
**Maniben Kara:** A socialist leader of the All India Railwaymen's Federation. She led the Western Railway strike and was a key figure in the Royist (M.N. Roy's) group.

**Ushabai Dange:** Wife of S.A. Dange. She was a prominent leader of the **Girni Kamgar Union** in Bombay, organizing women textile workers during the 1928 strike.

**Parvati Bhore:** Another key Communist woman leader who organized the Municipal Workers' Union.

---

## BLOCK 29: GIRNI KAMGAR UNION (1928)
*The Red Flag over Bombay.*

### 🏭 THE GKU
**Context:** The 1928 Textile Strike in Bombay lasted 6 months.
**Organization:** The strike committee transformed into the **Girni Kamgar Union (GKU)**.
**Strength:** It had **54,000 members** within months, making it one of the largest unions in Asia.

**Leadership:** S.A. Dange, S.S. Mirajkar, and K.N. Joglekar.

**Impact:** The massive success of GKU terrified the British and directly led to the Meerut Conspiracy Case (1929) to behead its leadership.

---

## BLOCK 30: ALL INDIA RAILWAYMEN'S FEDERATION (1924)
*The Giant Union.*

### 🚂 AIRF
**Founder:** **Chandrika Prasad**. Later led by V.V. Giri and Jamnadas Mehta.
**Role:** It was a federation of various railway unions (GIP, BNR, NWR).
**Ideology:** Unlike the textile unions (which were Communist), the Railway Federation remained largely Socialist/Moderate.
**Significance:** It negotiated with the Railway Board and prevented many wildcat strikes, acting as a stabilizing force.

---

## BLOCK 31: THE CONSPIRACY TRILOGY
*The British Fear of Bolshevism.*

### ⚖️ PESHAWAR TO MEERUT
The British tried to crush the infant Communist movement through three successive conspiracy cases:

**Peshawar Conspiracy Case (1922-23):**
- **Target:** Mujahirs (Muslims who went to Russia during the Khilafat movement) trying to return to India to start a revolution.
- **Result:** Leaders like Mian Akbar Shah were jailed.

**Kanpur Bolshevik Conspiracy Case (1924):**
- **Target:** The early organizers (Dange, Muzaffar Ahmed, Shaukat Usmani, Nalini Gupta).
- **Significance:** This trial actually publicized Communist ideas across India.

**Meerut Conspiracy Case (1929):**
- **Target:** The mature trade union leaders (31 accused).
- **Scale:** The longest and most expensive trial in British Indian history.

---

## BLOCK 32: THE LEGAL TRIGGER (1920)
*Why the 1926 Act was passed.*

### 🏭 BUCKINGHAM & CARNATIC MILLS CASE
**The Incident:** B.P. Wadia led a strike at the **Buckingham & Carnatic Mills** in Madras (1920).
**The Blow:** The mill owners filed a civil suit against Wadia for "inducing breach of contract" and won an **injunction (order)** fining the union ₹75,000.

**The Realization:** Labor leaders realized that without legal protection, any strike could be treated as a criminal conspiracy or civil wrong.

**Outcome:** This case created the pressure that forced the Government to pass the **Trade Union Act, 1926** (which granted immunity from such suits).

---

## BLOCK 33: THE MISSING FACTORY ACTS
*Closing the Loop.*

### 📜 1911, 1922, 1934
**Factory Act, 1911:**
- **Significance:** For the first time, it limited the working hours of adult **men** (to 12 hours/day) in textile factories. Before this, men could be worked to death.

**Factory Act, 1922:**
- **Context:** Passed to comply with ILO conventions.
- **Provision:** Children under 12 could not be employed (raised from 9).

**Factory Act, 1934:**
- **Context:** Based on the Whitley Commission recommendations.
- **Provision:** Distinguished between "Seasonal" and "Perennial" factories.

---

## BLOCK 34: THE TWO FATHERS
*Clearing the Confusion.*

### 👴 LOKHANDE vs JOSHI
| Title | Person | Reason |
| :--- | :--- | :--- |
| **Father of Labor Movement** | **N.M. Lokhande** | Started the agitation for workers' rights (weekly holiday) in the 1880s before unions existed. |
| **Father of Trade Union Movement** | **N.M. Joshi** | Built the modern structure of unions (AITUC general secretary for years) and represented Indian labor at the ILO. |

---

## BLOCK 35: NATIONAL PLANNING COMMITTEE (1938)
*Labor in the Future India.*

### 🏗️ SUBHAS & NEHRU
**Context:** Subhas Chandra Bose (as Congress President) set up the NPC.
**Chairman:** Jawaharlal Nehru.
**Labor Member:** N.M. Joshi and V.V. Giri.
**Vision:** They drafted the plan for a socialist economy where labor would be a partner in industry, not just a commodity. This laid the groundwork for the Industrial Disputes Act, 1947.

---

## BLOCK 36: WORKMEN'S COMPENSATION ACT (1923)
*The First Social Security.*

### 🏥 INJURY PAYMENT
**Context:** Before this, if a worker lost an arm or leg in a machine, the employer paid nothing.
**The Act:** **Workmen's Compensation Act, 1923**.
**Provision:** It made it mandatory for employers to pay compensation for injury or death caused by accidents during employment.
**Significance:** It was the first step towards recognizing that the cost of industrial accidents should be borne by the industry, not the worker.

---

## BLOCK 37: INDIAN MINES ACT (1923)
*Underground Safety.*

### ⛏️ BELOW THE SURFACE
**Context:** Factory Acts applied only to surface factories. Mines (Coal/Iron) were death traps with no regulation.
**The Act:** **Indian Mines Act, 1923**.
**Provisions:**
- Banned the employment of children under 13 underground.
- Limited working hours for adults underground.
- Safety Inspectors were appointed to check ventilation and roof stability.

---

## BLOCK 38: ASSAM TEA STRIKES (1921)
*The Great Exodus.*

### ☕ CHARGOLA EXODUS
**Context:** Tea garden workers in Assam (Surma Valley) were treated like slaves under the indentured system.
**The Event:** Inspired by the Non-Cooperation Movement, over **8,000 workers** simultaneously walked out of the gardens in May 1921.
**The Cry:** *"Gandhi Maharaj ki Jai"*. They believed Gandhi had sent a steamer to take them home.
**The Tragedy:** The British stopped the trains and steamers (at Chandpur). The police brutally beat the stranded workers. This incident (**Chandpur firing**) led to a massive hartal in Bengal led by J.M. Sengupta.

---

## BLOCK 39: THE ILO CONNECTION (1919)
*The International Pressure.*

### 🌍 FOUNDING MEMBER
**Fact:** India was a **Founding Member** of the International Labour Organization (ILO) in 1919 (even though it was a colony).
**Why?** The British wanted an extra vote in the League of Nations.
**Impact:** Being a member, the Govt of India had to ratify ILO conventions. This external pressure forced them to pass the Factory Act (1922) and Mines Act (1923) against the wishes of British capitalists.
**Representative:** N.M. Joshi was the first workers' delegate from India to the ILO.

---

## BLOCK 40: PAYMENT OF WAGES ACT (1936)
*Stopping the Deductions.*

### 💸 NO MORE FINES
**Problem:** Employers used to cut arbitrary "fines" from workers' wages for small mistakes (e.g., breaking a bobbin, coming late).
**The Act:** **Payment of Wages Act, 1936**.
**Provision:** It regulated when wages must be paid (by the 7th or 10th of the month) and strictly limited the fines an employer could deduct.

---

## BLOCK 41: THE LABOUR PRESS
*Voices of the Worker.*

### 📰 KRANTI & THE SOCIALIST
**"The Socialist" (1923):**
- **Founder:** S.A. Dange.
- **Significance:** It was the first English weekly in India to openly propagate Marxist ideas.

**"Kranti" (1927):**
- **Language:** Marathi.
- **Role:** The official organ of the Workers' and Peasants' Party (WPP) in Bombay. It played a crucial role in the 1928 textile strike.

**"Langal" (The Plough):**
- **Language:** Bengali.
- **Editor:** Qazi Nazrul Islam.
- **Role:** Organ of the Labour Swaraj Party. Later renamed *"Ganavani"*.

---

## BLOCK 42: SOUTH INDIAN RAILWAY STRIKE (1928)
*The South Explodes.*

### 🚂 SINGARAVELU & MUKUNDALAL
**Context:** The railway management decided to retrench (fire) 3,000 workers to cut costs.
**The Strike:** Led by **Singaravelu Chettiar** and **Mukundalal Sircar**.
**Violence:** The strike turned violent. Workers derailed trains and burned stations. Police firing killed several.
**Result:** Singaravelu and Mukundalal were arrested and sentenced to 10 years in prison (later reduced). It effectively crushed the militant leadership in the South for a decade.

---

## BLOCK 43: TINPLATE STRIKE (1929)
*The Longest Strike.*

### 🏭 GOLMURI, JAMSHEDPUR
**Context:** Workers at the Tinplate Company (a subsidiary of Tata/Burmah Oil) went on strike.
**Duration:** It lasted for nearly one year.
**Support:** **Subhas Chandra Bose** and **Rajendra Prasad** actively supported it. Even Jawaharlal Nehru visited.
**Significance:** It was a rare instance where the Congress leadership fully backed a strike against a British-owned company (Burmah Oil), seeing it as part of the anti-imperialist struggle.

---

## BLOCK 44: REGE COMMITTEE (1944)
*The Data Gatherers.*

### 📊 LABOUR INVESTIGATION COMMITTEE
**Chairman:** **D.V. Rege**.
**Mandate:** To collect data on wages, earnings, employment, housing, and social conditions of labor.
**Significance:** The **Rege Committee Report (1946)** provided the most comprehensive data on Indian labor conditions ever collected. It became the basis for the **Minimum Wages Act, 1948** and the **Employees' State Insurance (ESI) Act, 1948**.

---

## BLOCK 45: INDUSTRIAL TRUCE RESOLUTION (Dec 1947)
*Production First.*

### 🤝 CAPITAL & LABOUR
**Context:** Post-Independence, strikes were crippling the economy.

**The Conference:** Convened by the Industry Minister **Dr. Syama Prasad Mookerjee**.

**The Resolution:** Both employers and workers agreed to maintain industrial peace and avoid lockouts/strikes for 3 years to boost production.

**Result:** It marked the shift from "Class Struggle" (Colonial Era) to "Nation Building" (Independent India).
`;

MODERN_CHAPTER_32_MCQS.push(
    {
        id: 11,
        question: "Which of the following acts for the first time regulated the hours of work for women?",
        options: ["Factory Act, 1881", "Factory Act, 1891", "Trade Union Act, 1926", "None"],
        correctAnswer: 1,
        explanation: "The 1891 Act limited women's work to 11 hours per day.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Royal Commission on Labour' (1929) was chaired by:",
        options: ["Lord Whitley", "Lord Curzon", "Lord Irwin", "Stafford Cripps"],
        correctAnswer: 0,
        explanation: "Commonly known as the Whitley Commission.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Which leader founded the 'All India Red Trade Union Congress'?",
        options: ["N.M. Joshi", "Deshpande and B.T. Ranadive", "V.V. Giri", "Subhash Bose"],
        correctAnswer: 1,
        explanation: "Formed by Communists after the 1931 split in AITUC.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "The 'Indian National Trade Union Congress' (INTUC) was formed in 1947 by:",
        options: ["Communist Party", "The Congress Party (Sardar Patel and others)", "Socialists", "British Government"],
        correctAnswer: 1,
        explanation: "To give the labor movement a nationalist and non-communist direction.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Hind Mazdoor Sabha' (1948) was associated with:",
        options: ["The Socialist Party", "The Congress", "The RSS", "The Forward Bloc"],
        correctAnswer: 0,
        explanation: "Formed by socialists like Ashok Mehta and others.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Girni Kamgar Union' was a powerful union of ______ workers in Bombay.",
        options: ["Railway", "Textile", "Mining", "Port"],
        correctAnswer: 1,
        explanation: "It was led by communists and was very active in the late 1920s.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Why were the early nationalists (Moderates) initially indifferent to factory acts?",
        options: ["They hated workers.", "They feared it was a British plot to increase the cost of Indian production and help Lancashire.", "They were all mill owners.", "None of the above."],
        correctAnswer: 1,
        explanation: "They saw these acts as an attempt to stifle late-blooming Indian industry.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 18,
        question: "The AITUC's first session goal was described as:",
        options: ["Communist Revolution.", "To coordinate the activities of all labor organizations in India.", "To join the British Parliament.", "To ban all mills."],
        correctAnswer: 1,
        explanation: "It acted as an umbrella body for the nascent labor movement.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 19,
        question: "The 'Public Safety Bill' (1928) was mainly aimed at:",
        options: ["Stopping crime.", "Curbing the activities of communists and foreign subversives in the labor movement.", "Protecting factory owners.", "None of the above."],
        correctAnswer: 1,
        explanation: "Its rejection led to Bhagat Singh and Batukeshwar Dutt throwing bombs in the Assembly.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Who was the president of AITUC during the 1929 Nagpur split?",
        options: ["Jawaharlal Nehru", "Subhash Bose", "N.M. Joshi", "S.A. Dange"],
        correctAnswer: 0,
        explanation: "Nehru presided over the historic session where the rift became permanent.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "What was Gandhi's main contribution to the Ahmedabad labor strike (1918)?",
        options: ["He provided weapons.", "He introduced the concept of Satyagraha and Hunger Strike to labor disputes.", "He asked the British to intervene.", "None."],
        correctAnswer: 1,
        explanation: "His intervention led to a settlement on the plague bonus issue.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 22,
        question: "The AITUC was affiliated with which international body in its early years?",
        options: ["Red International of Labour Unions (Profintern)", "International Federation of Trade Unions (IFTU)", "Both (a) and (b)", "None"],
        correctAnswer: 2,
        explanation: "Different factions favored different international affiliations.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Trade Disputes Act, 1929' made which of the following illegal?",
        options: ["Sympathetic strikes and strikes in public utility services without notice.", "All strikes.", "All lockouts.", "Registration of new unions."],
        correctAnswer: 0,
        explanation: "It aimed to restrict the workers' strike power.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "During the 'Quit India Movement', the working class in which city showed the most remarkable resistance?",
        options: ["Ahmedabad", "Jamshedpur", "Bombay", "All of the above"],
        correctAnswer: 3,
        explanation: "Strikes were widespread in major industrial hubs.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Which leader is associated with the 'United Trades Union Congress' (UTGC)?",
        options: ["K.T. Shah", "Mrinal Kanti Bose", "V.V. Giri", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Formed in 1949 as another splinter group.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Bharatiya Mazdoor Sangh' (BMS) was founded by:",
        options: ["Dattopant Thengadi", "S.A. Dange", "V.V. Giri", "Ashok Mehta"],
        correctAnswer: 0,
        explanation: "Founded in 1955, aligned with RSS ideology.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Gandhi's theory of 'Trusteeship' in labor relations meant:",
        options: ["Capitalists should own everything.", "Workers and owners should see themselves as partners, with owners holding wealth in trust for society.", "The state should own all factories.", "Elimination of the capitalist class."],
        correctAnswer: 1,
        explanation: "It was a uniquely non-confrontational approach to industrial relations.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "AITUC became a primary organ of which political party in the post-1945 era?",
        options: ["Indian National Congress", "Communist Party of India (CPI)", "Muslim League", "Socialist Party"],
        correctAnswer: 1,
        explanation: "The Congress formed INTUC to counter CPI's control of AITUC.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'First Labour Member' of the Viceroy’s Executive Council was:",
        options: ["B.R. Ambedkar", "N.M. Joshi", "V.V. Giri", "Jagjivan Ram"],
        correctAnswer: 0,
        explanation: "Ambedkar held this post during WWII.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The main grievances of the early 20th-century workers were:",
        options: ["Long working hours.", "Low wages and poor working conditions.", "Lack of housing and health facilities.", "All of the above."],
        correctAnswer: 3,
        explanation: "The industrial revolution in India was characterized by intense exploitation.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 31,
        question: "Who founded the 'All India Railwaymen's Federation' (AIRF)?",
        options: ["V.V. Giri", "N.M. Joshi", "Rai Saheb Chandrika Prasad", "All of the above"],
        correctAnswer: 3,
        explanation: "Various leaders contributed to the unification of railway workers.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The emergence of 'Communism' in the 1920s in India was closely linked to:",
        options: ["The success of the Russian Revolution.", "Intense economic hardship post-WWI.", "Inadequacy of Moderate politics for the masses.", "All of the above."],
        correctAnswer: 3,
        explanation: "It provided a radical alternative to the nationalist struggle.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "Which of the following describes the 'Modus Operandi' of communist labor leaders in the late 1920s?",
        options: ["Secret meetings only.", "Intense unionization, mass strikes, and radical slogans.", "Cooperation with the British.", "None of the above."],
        correctAnswer: 1,
        explanation: "They transformed the AITUC into a militant body for a period.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 34,
        question: "Which of the following acts established the concept of 'Works Committees' to resolve employee-employer issues?",
        options: ["Industrial Disputes Act, 1947", "Trade Union Act, 1926", "Factory Act, 1948", "None"],
        correctAnswer: 0,
        explanation: "A landmark act for industrial relations in independent India.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Centre of Indian Trade Unions' (CITU) is associated with which party?",
        options: ["CPI", "CPI (M)", "Congress", "BJP"],
        correctAnswer: 1,
        explanation: "Formed in 1970 after the split in the Communist party.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
);
