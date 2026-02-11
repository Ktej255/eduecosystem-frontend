
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

export const MODERN_CHAPTER_29_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Early Beginnings & Censorship (1780-1835)", status: 'done' },
    { id: '2', name: "The Vernacular Press Act & Tilak's Era", status: 'done' },
    { id: '3', name: "Revolutionary Journals & Personalities", status: 'done' },
    { id: '4', name: "Press Acts & Regulations (1908-1947)", status: 'done' },
    { id: '5', name: "Post-Independence Institutions (PCI, RNI)", status: 'done' },
];

export const MODERN_CHAPTER_29_MCQS: Question[] = [
    {
        id: 1,
        question: "Who is known as the 'Liberator of the Indian Press'?",
        options: ["Lord Lytton", "Charles Metcalfe", "Lord Ripon", "Lord Hastings"],
        correctAnswer: 1,
        explanation: "Charles Metcalfe passed the Press Act of 1835, which repealed the restrictive 1823 ordinance.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Which Act was specifically targeted at the Vernacular Press (Indian languages)?",
        options: ["Censorship of Press Act, 1799", "Licensing Regulations, 1823", "Vernacular Press Act, 1878", "Indian Press Act, 1910"],
        correctAnswer: 2,
        explanation: "Lord Lytton's Vernacular Press Act of 1878 targeted Indian language papers to curb sedition.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Raja Rammohun Roy shut down which newspaper in protest against the 1823 Licensing Regulations?",
        options: ["Sambad Kaumudi", "Mirat-ul-Akbar", "Banga Duta", "Brahminical Magazine"],
        correctAnswer: 1,
        explanation: "He shut down his Persian journal 'Mirat-ul-Akbar' in protest against John Adams' Licensing Regulations.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Who founded the 'Amrita Bazar Patrika'?",
        options: ["Sisir Kumar Ghosh", "Girish Chandra Ghosh", "Surendranath Banerjea", "Motilal Ghosh"],
        correctAnswer: 0,
        explanation: "Sisir Kumar Ghosh founded it. It famously turned into an English paper overnight to escape the Vernacular Press Act.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "What was the first Hindi newspaper published in India?",
        options: ["Samachar Darpan", "Udant Martand", "Banaras Akhbar", "Sudhakar"],
        correctAnswer: 1,
        explanation: "Udant Martand (The Rising Sun) was the first Hindi newspaper, started by Jugalkishore Shukla in 1826.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Official Secrets Act' was originally enacted during the viceroyalty of:",
        options: ["Lord Curzon", "Lord Chelmsford", "Lord Reading", "Lord Irwin"],
        correctAnswer: 0,
        explanation: "It was originally enacted by Lord Curzon in 1904 to muzzle the press from reporting on government secrets.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Which committee recommended the establishment of the 'Registrar of Newspapers for India' (RNI)?",
        options: ["Press Committee of 1921", "Press Inquiry Committee (1947)", "First Press Commission (1952-54)", "Second Press Commission"],
        correctAnswer: 2,
        explanation: "The First Press Commission (1952-54) under Justice Rajadhyaksha recommended the RNI and Press Council.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Leading up to the Swadeshi Movement, which paper gave the first call for the boycott of foreign goods?",
        options: ["Sanjibani", "Hitabadi", "Bengalee", "Yugantar"],
        correctAnswer: 0,
        explanation: "Krishna Kumar Mitra's 'Sanjibani' gave the call for boycott on July 13, 1905.",
        subtopic: '3',
        cognitiveLevel: "Deep"
    },
    {
        id: 9,
        question: "Who was the editor of the revolutionary journal 'Bande Mataram'?",
        options: ["Barindra Kumar Ghosh", "Aurobindo Ghosh", "Bhupendranath Datta", "Bipin Chandra Pal"],
        correctAnswer: 1,
        explanation: "Aurobindo Ghosh was the editor of the English daily 'Bande Mataram'.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Registration Act of 1867' is significant because:",
        options: ["It imposed pre-censorship.", "It required the name of the printer/publisher on every book.", "It banned vernacular papers.", "It abolished stamp duties."],
        correctAnswer: 1,
        explanation: "It was regulatory, requiring every book/newspaper to print the name of the printer, publisher, and place of publication.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    }
];


export const MODERN_CHAPTER_29_CONTENT = `
# Chapter 29: Development of Indian Press

## BLOCK 1: THE EARLY BEGINNINGS (1780-1823)
*The Bold & The Censored.*

### 📰 HICKY TO RAMMOHUN
**First Newspaper:** **The Bengal Gazette** (or Calcutta General Advertiser).
- **Founder:** James Augustus Hicky (1780).
- **Nature:** It was critical of Warren Hastings. Hicky was jailed, and his press seized in 1782.

**Early Censorship:** **Censorship of Press Act, 1799** (by Lord Wellesley).
- **Reason:** Fear of French invasion (Napoleon). It imposed wartime censorship.

**The Reformer:** **Raja Rammohun Roy**.
- **Papers:** *Mirat-ul-Akbar* (Persian) and *Sambad Kaumudi* (Bengali).
- **Crisis:** He shut down *Mirat-ul-Akbar* in protest against the **Licensing Regulations, 1823** (by John Adams) which required a license to start a press.

---

## BLOCK 2: THE LIBERATION (1835)
*The Golden Era.*

### 🗽 CHARLES METCALFE
**The Title:** "**Liberator of the Indian Press**".
**The Act:** **Press Act of 1835** (Metcalfe Act).
- **Action:** It repealed the oppressive 1823 ordinance. It led to a boom in newspapers across India for the next 20 years (until 1857).
**Macaulay's Role:** T.B. Macaulay supported this liberal stance, arguing that a free press was a safety valve.

---

## BLOCK 3: THE VERNACULAR PRESS ACT (1878)
*The Gagging Act.*

### 🤐 LORD LYTTON'S GAG
**Target:** Newspapers in Indian languages (Vernacular), not English ones. (Specifically targeted *Amrita Bazar Patrika*).
**Provisions:**
1.  District Magistrate could call upon a printer to sign a bond not to publish anything likely to excite disaffection against the government.
2.  No appeal to a court of law.
3.  Exemption if they submitted proofs to a government censor.
**The Trick:** ***Amrita Bazar Patrika*** (Sisir Kumar Ghosh) turned into an English newspaper overnight to escape the Act.
**Repeal:** **Lord Ripon** repealed it in 1882.

---

## BLOCK 4: TILAK & THE SEDITION ERA
*Journalism as Warfare.*

### 🔥 KESARI & MARATHA
**Leader:** **Bal Gangadhar Tilak**.
**Papers:** *Kesari* (Marathi) and *Mahratta* (English).
**Impact:** He used these papers to organize the Ganapati and Shivaji festivals and to criticize the government's handling of the Plague (1896).
**Arrest:** He was arrested in 1897 under **Section 124A (Sedition)** for defending the assassination of Rand (Plague Commissioner) by the Chapekar brothers. He was the first major leader to be jailed for journalism.

---

## BLOCK 5: KEY NEWSPAPERS & FOUNDERS
*The Prelims List.*

### 📝 WHO WROTE WHAT?
| Newspaper | Founder/Editor | Significance |
| :--- | :--- | :--- |
| **Hindu Patriot** | Girish Chandra Ghosh (later Harish Chandra Mukherjee) | Criticized Indigo Planters. |
| **Som Prakash** | Ishwar Chandra Vidyasagar | First Bengali political paper. |
| **The Hindu** | G. Subramaniya Aiyer (1878) | Started to counter Lytton's propaganda. |
| **Swadeshibhimani** | K. Ramakrishna Pillai | Deported from Travancore for criticizing the Dewan. |
| **Indian Mirror** | Devendranath Tagore | First Indian daily in English. |

---

## BLOCK 6: THE SWADESHI CRACKDOWN (1908-1910)
*Crushing the Extremists.*

### 🤐 FORFEITING THE PRESS
**Context:** The rise of militant nationalism (bomb throwing) led the British to panic.
**Newspapers (Incitement to Offences) Act, 1908:**
- **Target:** Papers inciting violence (specifically *Yugantar*).
- **Power:** Magistrates could confiscate the press property if it incited murder/violence.
- **Result:** *Yugantar* (Ghosh brothers) went underground.

**Indian Press Act, 1910:**
- **Target:** Everyone. It revived the worst features of the Vernacular Press Act (1878).
- **Power:** Local government could demand a Security Deposit (₹500-₹2000) from any press. If they printed "sedition," the money was forfeited.
- **Impact:** Over 990 presses were penalized.

---

## BLOCK 7: THE INTER-WAR RELIEF (1921)
*The Brief Thaw.*

### 🕊️ TEJ BAHADUR SAPRU
**Committee:** **Press Committee of 1921**.
**Chairman:** **Tej Bahadur Sapru** (Law Member of Viceroy's Council).
**Action:** It recommended the repeal of the 1908 and 1910 Acts.
**Result:** The press enjoyed relative freedom during the 1920s (until the Civil Disobedience Movement started).

---

## BLOCK 8: THE NEWS AGENCIES
*The Wires of Empire.*

### 📡 REUTERS & FREE PRESS
Before 24/7 TV, news traveled by telegraph agencies.
- **Reuters:** British agency. Had a monopoly. Often biased towards the Empire.
- **Associated Press of India (API):** Founded by **K.C. Roy** (1905). Later bought by Reuters.
- **Free Press of India (FPI):** Founded by **S. Sadanand** (1927).
    - **Goal:** To break the Reuters monopoly and provide nationalist news.
    - **Collapse:** Crushed by the British in 1935.

---

## BLOCK 9: WORLD WAR II & INQUIRY (1939-1947)
*The Final Censorship.*

### ⚔️ DEFENCE OF INDIA RULES
**During War:** Pre-censorship was imposed under the **Defence of India Rules**. The Press Emergency Powers Act, 1931 was used ruthlessly against Congress papers during the Quit India Movement.
**Post-War:** **Press Inquiry Committee (1947)**.
- **Chairman:** Justice G.S. Rajadhyaksha.
- **Outcome:** Recommended the establishment of the **Press Council of India** (watchdog) and the repeal of emergency laws.

---

## BLOCK 10: REVOLUTIONARY JOURNALS LIST
*The Firebrands.*

### 🔥 MATCH THE COLUMNS
| Journal | Editor/Founder | Language/Place |
| :--- | :--- | :--- |
| **Yugantar** | Barindra Kumar Ghosh & Bhupendranath Datta | Bengali (Calcutta) |
| **Sandhya** | Brahmabandhab Upadhyay | Bengali |
| **Bande Mataram** | Aurobindo Ghosh (Madam Bhikaji Cama in Paris) | English |
| **Ghadar** | Lala Hardayal | Urdu/Gurmukhi (San Francisco) |
| **Talwar** | Virendranath Chattopadhyaya | Berlin |
| **Al-Hilal** | Maulana Abul Kalam Azad | Urdu (Criticized Muslim loyalists) |
| **Comrade** | Maulana Mohammad Ali | English |
| **Commonweal** | Annie Besant | English |
| **New India** | Annie Besant | English (Daily) |
| **Young India** | Mahatma Gandhi | English |
| **Navjeevan** | Mahatma Gandhi | Gujarati |

---

## BLOCK 11: THE PORTUGUESE PRELUDE (1556)
*The Forgotten First.*

### ⛪ BEFORE HICKY
**The Event:** The first printing press did not come to Calcutta; it came to **Goa in 1556**.
**The Purpose:** It was brought by Jesuit Missionaries to print the Bible and Christian literature.
**The Gap:** For nearly 200 years, the press remained a tool for missionaries only. It was **James Augustus Hicky (1780)** who turned it into a political tool (Newspaper).

---

## BLOCK 12: THE REGULATORY FRAMEWORK (1867)
*The Law that Stuck.*

### 📜 REGISTRATION ACT
**Act:** **Press and Registration of Books Act, 1867**.
**Replaced:** It replaced Metcalfe's Act of 1835.
**Nature:** It was regulatory, not restrictive.
**Requirement:** Every book/newspaper had to print the name of the Printer, Publisher, and Place of Publication. A copy had to be submitted to the government.
**Significance:** This created the database of Indian literature. It is still in force today.

---

## BLOCK 13: THE OFFICIAL SECRETS ACT (1923)
*The Spy Catcher.*

### 🕵️ LORD CURZON TO 1923
**Origins:** Originally enacted by **Lord Curzon in 1904** (Indian Official Secrets Act) to muzzle the press from reporting on government secrets.
**Expansion:** It was expanded and replaced by the **Official Secrets Act, 1923**.
**Impact:** It made it a criminal offense to possess or publish "secret" government documents. It remains the biggest hurdle for investigative journalism in India even today.

---

## BLOCK 14: THE AGARKAR SPLIT (1888)
*Social vs Political Reform.*

### ⚔️ TILAK vs AGARKAR
**Context:** Bal Gangadhar Tilak and Gopal Ganesh Agarkar were friends who co-founded *Kesari* and *Mahratta*.
**The Split:**
- **Tilak:** Believed in "**Political Freedom First**." He opposed the Age of Consent Bill (1891) to protect Hindu tradition.
- **Agarkar:** Believed in "**Social Reform First**." He supported the bill and rationality.
**The Outcome:** Agarkar left *Kesari* and started his own rationalist newspaper, ***Sudharak*** (The Reformer), in 1888.

---

## BLOCK 15: KEY GANDHIAN & NEHRUVIAN PAPERS
*The Icons.*

### 📝 MATCH THE EDITORS
| Newspaper | Founder/Editor | Significance |
| :--- | :--- | :--- |
| **Indian Opinion** | Mahatma Gandhi | Started in South Africa (1903). Crucial for Satyagraha experiments. |
| **Harijan** | Mahatma Gandhi | Started in 1933 (English) to support the untouchability campaign. |
| **National Herald** | Jawaharlal Nehru | Started in 1938 (Lucknow). The voice of the Congress. |
| **Voice of India** | Dadabhai Naoroji | Expounded the "Drain Theory". |
| **PTI (Press Trust of India)** | Consortium | Formed in Aug 1947 to take over the operations of the Associated Press of India (API) and Reuters. |

---

## BLOCK 16: DR. AMBEDKAR’S JOURNALISM
*The Voice of the Voiceless.*

### 📰 MOOKNAYAK to PRABUDDHA BHARAT
Dr. B.R. Ambedkar realized that the mainstream nationalist press often ignored the plight of the Depressed Classes. He started several papers to counter this:
1.  **Mooknayak** (Leader of the Silent): Started in 1920 with the help of Shahu Maharaj.
2.  **Bahishkrit Bharat** (Excluded India): Started in 1927 to organize the Mahad Satyagraha.
3.  **Janata** (The People): Started in 1930.
4.  **Prabuddha Bharat** (Enlightened India): The renamed version of *Janata* in 1956.
**Note:** All were in Marathi.

---

## BLOCK 17: THE LIBERAL & MODERATE GIANTS
*The Constructive Critics.*

### 🏛️ GOKHALE, MEHTA & MALAVIYA
While Tilak was fiery, these leaders used the press for constructive criticism and reform:
- **Gopal Krishna Gokhale:**
    - *Sudharak*: English editor (Agarkar was Marathi editor).
    - *The Hitavada* (The People's Paper): Started in 1911 (Nagpur).
- **Pherozeshah Mehta:**
    - *The Bombay Chronicle*: Started in 1913. It became the voice of the moderate Congress.
- **Madan Mohan Malaviya:**
    - *The Leader*: (Allahabad).
    - *Hindustan*: (Hindi).
    - *Abhyudaya*: (Hindi weekly).
- **Motilal Nehru:**
    - *The Independent*: Started in 1919 (Allahabad) to demand self-rule.

---

## BLOCK 18: THE REGIONAL GIANTS
*Voices from the Provinces.*

### 🗺️ TAMIL, PUNJABI & BENGALI
| Newspaper | Founder/Editor | Significance |
| :--- | :--- | :--- |
| **Swadesamitran** | G. Subramaniya Aiyer | First Tamil Daily (1882). He also founded *The Hindu*. |
| **The Tribune** | Dayal Singh Majithia | Started in Lahore (1881). Became the voice of Punjab. |
| **The Bengalee** | Surendranath Banerjea | The first paper to actively agitate against the Vernacular Press Act. |
| **Hindoo Patriot** | Harish Chandra Mukherjee | Known for exposing the oppression of Indigo Planters (1860). |
| **Kudi Arasu** | E.V. Ramasamy (Periyar) | Started in 1925. Mouthpiece of the Self-Respect Movement. |

---

## BLOCK 19: FIRST PRESS COMMISSION (1952-54)
*Setting the Rules.*

### ⚖️ JUSTICE RAJADHYAKSHA
**Appointment:** 1952.
**Report:** Submitted in 1954.
**Key Recommendations:**
1.  Establishment of a **Press Council of India** (Statutory body to safeguard press freedom).
2.  Establishment of the **Registrar of Newspapers for India (RNI)**.
3.  Price-Page Schedule (to protect small papers from monopoly).

---

## BLOCK 20: REGISTRAR OF NEWSPAPERS FOR INDIA (RNI)
*The Database.*

### 📂 OFFICE OF RNI
**Established:** 1956.
**Function:** Based on the recommendation of the First Press Commission.
**Role:** It maintains a register of all newspapers published in India, issues Certificates of Registration, and verifies circulation claims.
**Significance:** It formalized the chaotic press landscape of post-independence India.

---

## BLOCK 21: THE SOCIALIST & COMMUNIST PRESS
*The Voice of Labor.*

### ☭ DANGE TO MUZAFFAR AHMED
In the 1920s, the press began to focus on workers and peasants, moving beyond just "political freedom."
- **The Socialist:** Started by **S.A. Dange** in 1922 (Bombay). The first communist journal in India.
- **Langal** (The Plough): Started by **Kazi Nazrul Islam** and Muzaffar Ahmed in Bengal.
- **Kirti** (The Worker): Started by **Santokh Singh** in Punjab (1926).
- **Kranti** (Revolution): The Marathi mouthpiece of the Workers and Peasants Party (1927).

---

## BLOCK 22: THE WOMEN'S JOURNALS
*Her Voice.*

### 👩💼 STREE DARPAN
Women were not just subjects of reform; they were editors too.
- **Stree Darpan:** Founded by **Rameshwari Nehru** in 1909 (Allahabad). It focused on women's education and rights.
- **Tahzib-un-Niswan:** Founded by **Mumtaz Ali** (Lahore). A pioneering Urdu journal for Muslim women.
- **Bharat Mahila:** Edited by **Sarojini Naidu** for a brief period.

---

## BLOCK 23: THE ANGLO-INDIAN (LOYALIST) PRESS
*The Empire's Mouthpiece.*

### 🇬🇧 THE PIONEER & STATESMAN
Not all papers were nationalist. The British community in India had their own powerful papers which often supported government policies:
- **The Statesman:** Founded by **Robert Knight** in 1875 (Calcutta). It was the most influential Anglo-Indian paper.
- **The Pioneer:** Founded in Allahabad (1865). **Rudyard Kipling** worked here. It had close links to the government.
- **Times of India:** Founded in 1838 (Bombay). Originally *The Bombay Times*.
- **Civil and Military Gazette:** (Lahore). Known for its conservative, pro-Empire stance.

---

## BLOCK 24: DRAMATIC PERFORMANCES ACT (1876)
*Censoring the Stage.*

### 🎭 NIL DARPAN EFFECT
**Context:** Just as the press was used for sedition, Theater was used to mock the British (e.g., ***Nil Darpan*** depicting Indigo planters' cruelty).
**The Act:** **Lord Northbrook** passed this act in 1876.
**Power:** It empowered the government to ban dramatic performances that were "scandalous, defamatory, or likely to excite feelings of disaffection."
**Significance:** It was the precursor to the Vernacular Press Act (1878).

---

## BLOCK 25: CHRONOLOGY OF PRESS ACTS (REVISION)
*The Final List.*

### ⏳ QUICK REVISION
- **1799:** Censorship of Press Act (Wellesley) - Wartime censorship.
- **1823:** Licensing Regulations (John Adams) - Must have a license.
- **1835:** Liberation of Press Act (Metcalfe) - Repealed 1823.
- **1857:** Licensing Act (Canning) - Emergency for Revolt.
- **1867:** Registration Act - Names of printer/publisher required.
- **1878:** Vernacular Press Act (Lytton) - Gagging the Indian languages.
- **1908:** Newspaper (Incitement to Offences) Act - Confiscation of press.
- **1910:** Indian Press Act - Security deposits.
- **1931:** Indian Press (Emergency Powers) Act - Civil Disobedience crackdown.

---

## BLOCK 26: THE LANGUAGE PIONEERS
*The First of Their Kind.*

### 📜 UDANT MARTAND & JAM-I-JAHAN NUMA
While Hicky started the English press, who started the Indian language press?
**First Hindi Newspaper:** ***Udant Martand*** (The Rising Sun).
- **Founder:** Jugalkishore Shukla.
- **Date:** May 30, 1826 (Calcutta).
- **Fate:** It closed down in 1827 due to high postal rates for Hindi papers.

**First Urdu Newspaper:** ***Jam-i-Jahan Numa***.
- **Founder:** Harihar Dutta.
- **Date:** 1822 (Calcutta).
- **Note:** It was published by the same English firm that published the *Calcutta Journal*.

---

## BLOCK 27: THE BOYCOTT SIGNAL (1905)
*The Paper that Started Swadeshi.*

### 📣 SANJIBANI & K.K. MITRA
**The Myth:** Many think the Swadeshi movement started after the partition (Oct 16, 1905).
**The Fact:** The call for Boycott was first given much earlier.
**The Paper:** ***Sanjibani*** (Bengali).
**The Editor:** **Krishna Kumar Mitra**.
**The Date:** July 13, 1905.
**Action:** He openly called for the boycott of foreign goods before the formal resolution was passed at the Town Hall.

---

## BLOCK 28: THE TAX BURDEN
*Censorship by Cost.*

### 💰 STAMP DUTIES
**Mechanism:** The British didn't always need a law to ban a paper; they just taxed it to death.
**Stamp Duty:** Early newspapers had to pay a heavy Stamp Duty (tax on every printed sheet).
**Impact:** This made newspapers too expensive for the common man, restricting circulation to the elite.
**Abolition:** The Stamp Duty on newspapers was finally abolished in **1861**, leading to a boom in small vernacular papers.

---

## BLOCK 29: NICHE EDITORS (MATCH THE FOLLOWING)
*Deep Cuts for Prelims.*

### 📝 THE FORGOTTEN LIST
| Newspaper | Editor/Founder | Specific Factor |
| :--- | :--- | :--- |
| **Rast Goftar** (Truth Teller) | Dadabhai Naoroji | Gujarati. For Parsi social reform. |
| **Hindu Intelligencer** | Kashi Prasad Ghosh | Voice of the Bhadralok. |
| **Indian Field** | Kishori Chand Mitra | Early nationalist paper. |
| **Native Opinion** | V.N. Mandlik | Conservative Hindu stance. |
| **Advocate** | G.P. Varma | Lucknow-based. |
| **Dyan Prakash** | Krishnaji Ranade | Poona (Daily). Supported social reform. |
| **Kal** | S.M. Paranjape | Marathi. Extremist (Revolutionary). |

---

## BLOCK 30: GANESH SHANKAR VIDYARTHI
*The Martyr Journalist.*

### 📰 PRATAP (KANPUR)
**The Paper:** ***Pratap*** (Hindi Weekly, started 1913).
**The Editor:** **Ganesh Shankar Vidyarthi**.
**Significance:**
- It was the mouthpiece of the revolutionary youth (Bhagat Singh worked there briefly) and the peasants of UP (Kisan Sabha movement).
- It exposed the oppression of the Taluqdars (Landlords) in Avadh.
**The Martyrdom:** Vidyarthi was killed in 1931 while trying to save people during a communal riot in Kanpur. He is considered the "**Patron Saint**" of Hindi journalism.

---

## BLOCK 31: SUBRAMANIA BHARATI
*The Poet Rebel.*

### ✍️ INDIA & VIJAYA
**Context:** A fiery Tamil nationalist and poet.
**Papers:**
- *Swadesamitran*: Assistant Editor (under G. Subramaniya Aiyer).
- *India*: A radical Tamil weekly.
- *Vijaya*: A Tamil daily.
**The Exile:** To escape arrest by the British in 1908 (who were cracking down on the Swadeshi press), he fled to Pondicherry (French territory) and continued to publish his papers from there until 1910.

---

## BLOCK 32: THE LICENSING ACT (1857)
*The Revolt Gag.*

### 🤐 LORD CANNING'S EMERGENCY
**Context:** The Revolt of 1857 was raging. The British feared the press would aid the rebels.
**The Act:** **Licensing Act, 1857**.
**Provisions:**
- It prohibited the keeping or using of a printing press without a license from the Government.
- The Government could revoke the license at any time.
**Target:** It applied to both Indian and English papers (unlike the 1878 Act).
**Duration:** It was a temporary emergency measure, lasting only for a year.

---

## BLOCK 33: THE SOUTHERN GIANTS
*Beyond Tamil Nadu.*

### 🌴 MANORAMA to KRISHNA PATRIKA
| Newspaper | Founder/Editor | Region | Significance |
| :--- | :--- | :--- | :--- |
| **Malayala Manorama** | Kandathil Varghese Mappillai | Kerala (1888) | Started as a literary magazine, became the voice of the Syrian Christian community and later the freedom struggle in Travancore. |
| **Krishna Patrika** | Mutnuri Krishna Rao | Andhra (1902) | The most influential nationalist paper in the Telugu-speaking areas (Machilipatnam). |
| **Deshabhimani** | T.K. Madhavan | Kerala | Voice of the Ezhava community and temple entry movement (Vaikom). |

---

## BLOCK 34: KRISTODAS PAL
*The Prince of Journalists.*

### 👑 HINDOO PATRIOT (LATER YEARS)
**The Title:** Known as the "**Prince of Journalists**".
**Paper:** Editor of the ***Hindoo Patriot*** after Harish Chandra Mukherjee.
**Stance:** He represented the moderate view (British Indian Association) but was a fierce critic of the Ilbert Bill controversy and the Vernacular Press Act.
**Style:** Known for his impeccable English and logical argumentation that even the Viceroys respected.

---

## BLOCK 35: THE SERAMPORE MISSIONARIES (1818)
*The True Vernacular Pioneers.*

### ✝️ MARSHMAN & CAREY
**The Myth:** Rammohun Roy is often called the father of the press, but he wasn't the first to print in Indian languages.
**The Reality:** The **Serampore Missionaries** (William Carey, Joshua Marshman, William Ward) started the first vernacular newspapers to propagate Christianity and education.
**The Papers:**
- **Digdarshan:** First Bengali monthly (April 1818).
- **Samachar Darpan:** First Bengali weekly (May 1818).
- **Friend of India:** English monthly (became *The Statesman* later).
**Significance:** They proved that printing in local scripts (Bengali) was technically possible and economically viable.

---

## BLOCK 36: B.G. HORNIMAN (1919)
*The Englishman Who Loved India.*

### 🇬🇧 BOMBAY CHRONICLE
**The Editor:** **B.G. Horniman** (British).
**The Paper:** Editor of ***The Bombay Chronicle*** (founded by Pherozeshah Mehta).
**The Crime:** He fearlessly reported on the **Jallianwala Bagh Massacre** and the atrocities of British martial law in Punjab when other papers were censored.
**The Punishment:** The British government **deported him** from India to England in 1919 for his "anti-government" stance. He could only return years later.

---

## BLOCK 37: ZAFAR ALI KHAN
*The Father of Urdu Journalism.*

### ☪️ ZAMINDAR (LAHORE)
**The Paper:** ***Zamindar***.
**The Editor:** **Maulana Zafar Ali Khan**.
**Stance:** Initially pro-government, it turned fiercely nationalist and pan-Islamist during the Balkan Wars (1911) and the Khilafat Movement.
**Impact:** It modernized Urdu journalism, moving it from lithography to type, and made it a tool for mass political mobilization in Punjab.

---

## BLOCK 38: S. SADANAND (1930)
*The Penny Press Revolution.*

### 💰 FREE PRESS JOURNAL
**The Founder:** **Swaminathan Sadanand**.
**The Innovation:** He started the ***Free Press Journal*** (FPJ) in 1930.
**Price:** He sold it for just **One Pice (Penny)**.
**Goal:** To make news affordable for the poor, not just the elite.
**Agency:** He also founded the **Free Press of India (FPI)** news agency to compete with the British-owned Reuters, but the British crushed it by choking its telegram access.

---

## BLOCK 39: THE "FATHER" TITLES CLARIFIED
*Avoid Confusion.*

### 👑 WHO IS WHO?
- **Father of Indian Press:** James Augustus Hicky (First paper).
- **Liberator of Indian Press:** Charles Metcalfe (Removed restrictions).
- **Father of Indian Journalism (Nationalist):** Raja Rammohun Roy (First Indian to use it for reform).
- **Prince of Journalists:** Kristodas Pal (Editor of Hindoo Patriot).
- **Father of Hindi Journalism:** Pandit Jugalkishore Shukla (Udant Martand).

---

## BLOCK 40: THE CAXTON OF INDIA
*The Greatest Publisher.*

### 📚 MUNSHI NAVAL KISHORE
**The Title:** Known as the "**Caxton of India**" (after William Caxton, the first English printer).
**The Press:** Founded the **Naval Kishore Press** in Lucknow (1858).
**The Paper:** *Oudh Akhbar* (1858).
**Significance:**
- He printed over 5,000 titles in Hindi, Urdu, Arabic, Persian, and Sanskrit.
- He made religious texts (Quran, Ramayana) and classical literature affordable for the common man, preserving India's cultural heritage when the British were trying to anglicize it.
- *Oudh Akhbar* was the first Urdu Daily in North India that championed social harmony.

---

## BLOCK 41: THE REBEL PAPER (1857)
*The Voice of the Mutiny.*

### ⚔️ PAYAM-E-AZADI
**The Paper:** ***Payam-e-Azadi*** (Message of Freedom).
**The Editor:** **Azimullah Khan** (Advisor to Nana Saheb) and Mirza Bedar Bakht.
**Method:** It was printed on lithographic stones in Delhi and distributed secretly to the sepoys to incite them against the British.
**The End:** After the fall of Delhi, the British searched for every copy. Anyone found possessing it was executed. The press was destroyed.

---

## BLOCK 42: THE TRIPLICANE SIX (1878)
*The Hindu's Origin Story.*

### 📰 ONE RUPEE & TWELVE ANNAS
**Context:** The appointment of T. Muthuswami Iyer as the first Indian judge of the Madras High Court was criticized by the Anglo-Indian press (*The Madras Mail*).
**The Reaction:** Six young men (The Triplicane Six), led by **G. Subramania Aiyer** and **M. Veeraraghavachariar**, decided to start a paper to counter this racism.
**The Start:** They had no money. They borrowed **One Rupee and Twelve Annas** to print the first issue of ***The Hindu*** on Sept 20, 1878.
**Evolution:** It started as a weekly, became a tri-weekly (1883), and finally a daily (1889).

---

## BLOCK 43: ROBERT KNIGHT
*The Fearless Englishman.*

### 🛡️ BAYARD OF INDIA PRESS
**The Title:** Known as the "**Bayard of the Indian Press**" (Fearless Knight).
**Papers:**
- Founded ***The Statesman*** (1875) in Calcutta.
- Edited ***The Times of India*** in Bombay.
**Stance:** Though British, he was critical of the government's aggressive foreign policy (Afghan Wars) and financial mismanagement. He merged the old *Friend of India* (Serampore) with *The Statesman*.

---

## BLOCK 44: THE ILBERT BILL WAR (1883)
*The Press Divided by Race.*

### ⚔️ ENGLISHMAN vs HINDOO PATRIOT
**The Bill:** Lord Ripon proposed to allow Indian judges to try European convicts.
**The Anglo-Indian Press:** Led by ***The Englishman*** (Calcutta) and *Civil and Military Gazette*, they launched a vicious, racist campaign against Ripon and Indians, calling them "effeminate" and "unfit."
**The Indian Press:** Led by **Kristodas Pal** (Hindoo Patriot) and **Sisir Kumar Ghosh** (Amrita Bazar Patrika), they counter-attacked.
**Impact:** This was the first time the Indian press realized its collective power to fight a narrative war against the Europeans. It directly led to the founding of the Indian National Congress (1885).

---

## BLOCK 45: THE LIBRARY MOVEMENT
*How the Illiterate "Read".*

### 📖 ANDHRA & KERALA
**The Problem:** Literacy was low (approx 6-10%). How did newspapers reach the masses?
**The Solution:** Reading Rooms (Libraries).
- **Andhra:** The Andhra Library Movement (started by **Iyyanki Venkata Ramanayya** in 1914) set up village libraries where one person would read the newspaper aloud to hundreds of listeners.
- **Kerala:** **P.N. Panicker** (Father of Library Movement) later institutionalized this.
**Significance:** This turned newspapers from a "personal luxury" into a "community event," spreading nationalism to rural areas.

---

## BLOCK 46: THE VANDE MATARAM TRIAL (1907)
*The Editor in the Dock.*

### ⚖️ AUROBINDO vs BIPIN PAL
**The Paper:** ***Bande Mataram*** (English Daily).
**The Charge:** Sedition against the Editor, **Aurobindo Ghosh**.
**The Witness:** The police called **Bipin Chandra Pal** to testify against Aurobindo (to prove he was the editor).
**The Defiance:** Pal refused to testify, citing "conscience." He was jailed for contempt of court for 6 months.
**The Verdict:** Aurobindo was acquitted for lack of proof (as no name was printed on the articles). This trial made *Bande Mataram* a legend.

---

## BLOCK 47: THE PRESS COMMISSIONER (1876-1881)
*The Propaganda Officer.*

### 📢 ROPER LETHBRIDGE
**Created by:** **Lord Lytton**.
**The Role:** He created a special post called "**Press Commissioner**".
**Function:** To manage the press by "feeding" them official government versions of news and early intelligence in exchange for favorable coverage.
**Abolished by:** **Lord Ripon** in 1881, who believed in a freer press.

---

## BLOCK 48: KASTURI RANGA IYENGAR (1905)
*The Business of Nationalism.*

### 🗞️ THE HINDU'S SAVIOR
**Context:** By 1905, *The Hindu* was failing financially.
**The Takeover:** **S. Kasturi Ranga Iyengar** (a lawyer) bought the paper.
**The Shift:** He turned it into a commercially viable, professional newspaper while maintaining its fierce nationalist stance. He introduced the Rotary Press and modern advertising.
**Legacy:** The "Hindu" group today owes its existence to this turnaround.
`;

