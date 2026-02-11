
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

export const MODERN_CHAPTER_30_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Orientalist-Anglicist Controversy & Wood's Despatch", status: 'done' },
    { id: '2', name: "Commissions: Hunter, Raleigh, Saddler & Hartog", status: 'done' },
    { id: '3', name: "Nationalist & Gandhian Education (Wardha Scheme)", status: 'done' },
    { id: '4', name: "Women's & Technical Education Pioneers", status: 'done' },
    { id: '5', name: "The Princely lead & Post-Independence Bridge", status: 'done' },
];

export const MODERN_CHAPTER_30_MCQS: Question[] = [
    {
        id: 1,
        question: "Which document is considered the 'Magna Carta' of English education in India?",
        options: ["Macaulay's Minute (1835)", "Charter Act of 1813", "Wood's Despatch (1854)", "Hunter Commission Report (1882)"],
        correctAnswer: 2,
        explanation: "Wood's Despatch (1854) was the first comprehensive plan for mass education, rejecting the Downward Filtration Theory.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The 'Downward Filtration Theory' advocated by Macaulay meant:",
        options: ["Educating the masses directly", "Educating only the upper classes to filter down culture", "Filtering out Western knowledge", "Filtering out detailed religious texts"],
        correctAnswer: 1,
        explanation: "It meant educating only the upper classes ('Brown Sahabs'), expecting modern ideas to filter down to the masses.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "Which Princely State was the first to introduce compulsory primary education in India?",
        options: ["Travancore", "Mysore", "Baroda", "Hyderabad"],
        correctAnswer: 2,
        explanation: "Maharaja Sayajirao Gaekwad III of Baroda introduced compulsory primary education in 1906.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Saddler University Commission' (1917-19) is credited with laying the seeds for:",
        options: ["The 10+2+3 system", "The IIT system", "The Medical Council of India", "The Open University system"],
        correctAnswer: 0,
        explanation: "Saddler recommended separating Intermediate education from Universities, anticipating the 10+2+3 structure.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 5,
        question: "Who founded the first girls' school in Pune in 1848?",
        options: ["D.K. Karve", "Jyotiba and Savitribai Phule", "Pandita Ramabai", "M.G. Ranade"],
        correctAnswer: 1,
        explanation: "Jyotiba and Savitribai Phule opened the first girls' school in Poona in 1848.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Wardha Scheme of Basic Education' (1937) was based on the philosophy of:",
        options: ["Rabindranath Tagore", "Mahatma Gandhi", "Sri Aurobindo", "Subhas Chandra Bose"],
        correctAnswer: 1,
        explanation: "It was based on Gandhi's 'Nai Talim' philosophy, emphasizing manual labor and mother tongue instruction.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 'Indian Universities Act, 1904' was passed based on the recommendations of:",
        options: ["Hunter Commission", "Raleigh Commission", "Saddler Commission", "Hartog Committee"],
        correctAnswer: 1,
        explanation: "Lord Curzon appointed the Raleigh Commission (1902), leading to the restrictive Universities Act of 1904.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Which was the first Engineering College established in India (1847)?",
        options: ["IIT Kharagpur", "Thomason Engineering College, Roorkee", "College of Engineering, Pune", "Guindy Engineering College"],
        correctAnswer: 1,
        explanation: "Thomason Engineering College at Roorkee was established in 1847.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'National Council of Education' (NCE) was set up in 1906 as part of reaction to:",
        options: ["The Partition of Bengal", "The Jallianwala Bagh Massacre", " The Rowlatt Act", "The Simon Commission"],
        correctAnswer: 0,
        explanation: "It was set up during the Swadeshi Movement (post-Partition of Bengal) to provide specific national education.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "What was the approximate literacy rate of India when the British left in 1947?",
        options: ["6%", "16%", "36%", "50%"],
        correctAnswer: 1,
        explanation: "After 200 years of British rule, the literacy rate was a dismal 16% (and only 8% for women).",
        subtopic: '5',
        cognitiveLevel: "Fact"
    }
];


export const MODERN_CHAPTER_30_CONTENT = `
# Chapter 30: Development of Education in India

## BLOCK 1: THE ORIENTALIST PHASE (1781-1813)
*Learning to Rule.*

### 🕌 HASTINGS TO DUNCAN
Initially, the British wanted to understand Indian laws and culture to rule effectively. They supported traditional learning.
**Calcutta Madrassa (1781):** Founded by **Warren Hastings** for the study of Muslim law and related subjects.
**Sanskrit College, Varanasi (1791):** Founded by **Jonathan Duncan** (Resident) for the study of Hindu law and philosophy.
**Fort William College (1800):** Founded by **Lord Wellesley** to train British civil servants in Indian languages. (Closed in 1802).

---

## BLOCK 2: CHARTER ACT OF 1813
*The First Funding.*

### 💰 ONE LAKH RUPEES
**The Agitation:** Enlightened Indians (like Raja Rammohun Roy) and Christian Missionaries pressured the Company to promote modern Western education.
**The Act:** The **Charter Act of 1813** sanctioned a sum of **₹1 Lakh annually** for the "revival and improvement of literature and the encouragement of the learned natives of India."
**The Catch:** The money was not spent for years because of a massive debate on how to spend it.

---

## BLOCK 3: ORIENTALIST-ANGLICIST CONTROVERSY
*What to teach? In which language?*

### ⚔️ PRINSEP vs MACAULAY
The **General Committee of Public Instruction (GCPI)** was split:
**The Orientalists:** Led by **H.T. Prinsep**.
- **View:** Teach traditional Indian learning (Sanskrit/Persian) in vernacular languages. Western science should be taught, but slowly.
**The Anglicists:** Led by the "Munro and Elphinstone" faction, later dominated by **Macaulay**.
- **View:** Teach modern Western knowledge (Science/Literature) exclusively in English.

---

## BLOCK 4: MACAULAY'S MINUTE (1835)
*The Turning Point.*

### 🇬🇧 "A SINGLE SHELF OF EUROPE"
**Lord Macaulay:** Law Member of the Governor-General's Council.
**The Minute (Feb 2, 1835):** He famously argued that "**A single shelf of a good European library was worth the whole native literature of India and Arabia.**"
**The Decision:** Lord William Bentinck accepted the Minute.
**The Policy:** Government funds would be spent only on English education.
**Downward Filtration Theory:** The government would educate only the upper classes ("Brown Sahabs"). This culture would then "filter down" to the masses naturally. (The theory failed miserably).

---

## BLOCK 5: WOOD'S DESPATCH (1854)
*The Magna Carta of English Education.*

### 📜 FROM PRIMARY TO UNIVERSITY
**Author:** **Charles Wood** (President of the Board of Control).
**Significance:** It was the first comprehensive plan for mass education in India. It rejected the "Downward Filtration Theory."
**Key Recommendations:**
1.  **Hierarchy:**
    - Universities (Calcutta, Bombay, Madras).
    - Colleges (English medium).
    - High Schools (Anglo-Vernacular).
    - Middle Schools.
    - Primary Schools (Vernacular).
2.  **Grant-in-Aid:** Government aid to private schools.
3.  **Female Education:** Strong support for women's education.
4.  **Teacher Training:** Institutions to train teachers.
**Outcome:** Universities were established in Calcutta, Bombay, and Madras in 1857.

---

## BLOCK 6: HUNTER EDUCATION COMMISSION (1882-83)
*Reviewing Wood's Despatch.*

### 🏫 PRIMARY & SECONDARY FOCUS
**Chairman:** **W.W. Hunter**.
**Context:** Appointed by **Lord Ripon** to review the progress of education since 1854.
**Focus:** It mostly ignored universities and focused on **Primary and Secondary Education**.
**Recommendations:**
1.  **Transfer of Control:** Primary education should be transferred to newly formed District and Municipal Boards.
2.  **Bifurcation:** Secondary education should have two streams:
    - **Literary:** Leading to University.
    - **Vocational:** Leading to commercial careers.
3.  **Female Education:** Strong emphasis on girls' schools outside the presidency towns.

---

## BLOCK 7: RALEIGH COMMISSION (1902)
*The Universities Under Siege.*

### 🎓 CURZON'S CONTROIL
**Context:** By 1900, universities had become hotbeds of revolutionary nationalism. **Lord Curzon** wanted to control them.
**Chairman:** **Sir Thomas Raleigh**.
**Purpose:** To inquire into the condition of universities and suggest measures for their "improvement" (read: control).
**Outcome:** The **Indian Universities Act, 1904**.

---

## BLOCK 8: INDIAN UNIVERSITIES ACT (1904)
*Bureaucratizing Education.*

### 🔒 GOKHALE'S PROTEST
Based on the Raleigh Commission, this Act:
1.  **Senate Size:** Reduced the number of Fellows (Senate members) and required most to be nominated by the Government.
2.  **Affiliation:** Made stricter rules for affiliating private colleges.
3.  **Veto Power:** The Government could veto university senate regulations.
**Gokhale's Reaction:** He called it a "**retrograde measure**" designed to kill the independent spirit of universities.

---

## BLOCK 9: SADDLER UNIVERSITY COMMISSION (1917-19)
*The Calcutta Inquiry.*

### 📄 10+2+3 SYSTEM ROOTS
**Chairman:** **Dr. M.E. Saddler** (Vice-Chancellor of Leeds University).
**Context:** Originally to study Calcutta University problems, but its recommendations applied to all.
**Key Idea:** "University education can't improve unless secondary education improves."
**Recommendations:**
1.  **Separation:** Intermediate (11th/12th) should be separated from the University.
2.  **Board of Secondary Education:** Create separate boards for High School and Intermediate.
3.  **3-Year Degree:** The degree course after Intermediate should be 3 years (not 2).
4.  **Autonomy:** Less government control over universities.
5.  **Female Education:** Create a "Purdah School" board.

---

## BLOCK 10: GOVERNMENT RESOLUTION (1913)
*The Policy Shift.*

### 📜 REFUSING COMPULSION
**Context:** **Gokhale** demanded Compulsory Primary Education.
**The Resolution:** The Government refused to make education compulsory (citing funds) but accepted the responsibility to remove illiteracy.
**Action:** It encouraged provincial governments to provide free elementary education to the poorer and more backward sections.

---

## BLOCK 11: HARTOG COMMITTEE (1929)
*Quality over Quantity.*

### 🛑 CONSOLIDATION, NOT EXPANSION
**Context:** The rapid expansion of schools led to a drop in standards.
**Chairman:** **Sir Philip Hartog**.
**Key Finding:** "Mass production of matriculates" was creating unemployment.
**Recommendation:**
1.  **Consolidation:** Focus on improving existing primary schools rather than opening new ones.
2.  **Diversion:** Divert students after Class 8 to Industrial and Commercial careers instead of forcing everyone into Universities.
3.  **University Standards:** Raise the standard of university admission.

---

## BLOCK 12: WARDHA SCHEME OF BASIC EDUCATION (1937)
*The Gandhian Model.*

### 🧶 NAI TALIM (NEW EDUCATION)
**Origin:** The Congress organized a National Education Conference at Wardha (Oct 1937).
**Committee Chairman:** **Dr. Zakir Hussain**.
**Philosophy:** Based on Gandhi's articles in *Harijan*.
**Key Features:**
1.  **Free & Compulsory:** For 7 years (Age 7-14).
2.  **Mother Tongue:** Medium of instruction must be the mother tongue.
3.  **Manual Labor:** Education should center around a productive craft (spinning, weaving, carpentry).
4.  **Self-Supporting:** The products made by students should cover the teacher's salary.
**Outcome:** World War II and the resignation of Congress ministries (1939) stalled it.

---

## BLOCK 13: SARGENT PLAN (1944)
*The Post-War Vision.*

### 🗓️ UNIVERSAL LITERACY IN 40 YEARS
**Official Name:** Report by the Central Advisory Board of Education (CABE).
**Author:** **Sir John Sargent** (Educational Advisor).
**Goal:** To achieve Universal Literacy in India within 40 years (by 1984).
**Key Recommendations:**
1.  **Pre-Primary:** Free education for 3-6 years.
2.  **Compulsory:** Free education for 6-14 years.
3.  **High School:** Selected students (Top 20%) to go to High School (11-17 years).
4.  **University:** 3-year degree course.
5.  **Technical:** Abolish intermediate course; focus on technical education.
**Critique:** It was too idealistic for a bankrupt post-war Britain to implement.

---

## BLOCK 14: PIONEERS OF WOMEN'S EDUCATION
*Building Schools Brick by Brick.*

### 👩🏫 BETHUNE, PHULE & KARVE
While the British debated policy, these individuals acted:
- **J.E.D. Bethune:** Founded the **Bethune School** (Calcutta, 1849). It was the first powerful movement for women's education. He was the President of the Council of Education.
- **Jyotiba & Savitribai Phule:** Opened the **first girls' school in Poona (1848)** for lower castes.
- **D.K. Karve:** Founded the **First Indian Women's University (SNDT)** in Bombay (1916). He was inspired by the Women's University in Japan.
- **Ishwar Chandra Vidyasagar:** Associated with no less than 35 girls' schools in Bengal.

---

## BLOCK 15: TECHNICAL EDUCATION ORIGINS
*The Engineers of Empire.*

### 🏗️ ROORKEE & CALCUTTA
**Engineering:** The **Thomason Engineering College at Roorkee** was established in **1847**. (First engineering college in India).
**Medicine:** The **Calcutta Medical College** was established in **1835**.
**Agriculture:** The **Pusa Agriculture Institute (Bihar)** was established in **1905** (later moved to Delhi as IARI).

---

## BLOCK 16: THE NATIONALIST ALTERNATIVE (1906)
*Boycott the British Schools.*

### 🎓 JADAVPUR UNIVERSITY ROOTS
**Context:** During the Swadeshi Movement (1905), students were expelled for singing *Vande Mataram*.
**The Response:** The **National Council of Education (NCE)** was set up in August 1906.
**Founders:** Satish Chandra Mukherjee, Aurobindo Ghosh, and Rabindranath Tagore.
**Institutions:**
- **Bengal National College:** (Aurobindo as Principal).
- **Bengal Technical Institute:** (Became Jadavpur University later).
**Goal:** "Education on national lines, under national control."

---

## BLOCK 17: ICONIC COLLEGES (MATCH THE FOLLOWING)
*The Elites & The Moderns.*

### 🏛️ HINDU TO MAYO
| Institution | Founder/Year | Significance |
| :--- | :--- | :--- |
| **Hindu College (Calcutta)** | Raja Rammohun Roy & David Hare (1817) | The first college to impart Western education. Later became Presidency College (1855). |
| **Mayo College (Ajmer)** | Lord Mayo (1875) | Exclusively for the Princes and nobles of Rajputana ("The Eton of India"). |
| **M.A.O. College (Aligarh)** | Sir Syed Ahmed Khan (1875) | The center of the Aligarh Movement. Became Aligarh Muslim University (AMU) in 1920. |
| **Sanskrit College (Calcutta)** | Ishwar Chandra Vidyasagar (Principal) | He opened it to non-Brahmins and introduced Western logic. |

---

## BLOCK 18: RADHAKRISHNAN COMMISSION (1948-49)
*The Bridge to Freedom.*

### 🌉 UNIVERSITY GRANTS COMMISSION (UGC)
**Context:** The first commission appointed by Independent India.
**Chairman:** **Dr. Sarvepalli Radhakrishnan**.
**Focus:** University Education.
**Key Recommendations:**
1.  **12 Years of Schooling:** Pre-university course.
2.  **Rural Universities:** Focus on agriculture.
3.  **UGC:** Establishment of a **University Grants Commission** to regulate funding (modeled on the UK).

---

## BLOCK 19: EVALUATION OF BRITISH POLICY
*The Report Card.*

### 📉 16% LITERACY
After 200 years of British Rule:
**Literacy Rate:** Only **16%** (Female literacy was 8%).
**Neglect of Masses:** The "Downward Filtration Theory" failed. Education remained a monopoly of the upper classes and urban elites.
**Imbalance:** High focus on Liberal Arts (Law/Literature) to produce clerks, and total neglect of Scientific/Technical education to produce industrialists.
**Regional Disparity:** Bengal, Madras, and Bombay were ahead; the hinterland (UP, Bihar, MP) remained backward.

---

## BLOCK 20: JAMES THOMASON'S EXPERIMENT (1843-53)
*The Precursor to Wood.*

### 🌾 VERNACULAR FOR REVENUE
**Context:** Before Wood's Despatch (1854), education was mostly urban and English.
**The Man:** **James Thomason**, Lt. Governor of North-West Provinces (UP).
**The Idea:** He realized that for the new Revenue System (Mahalwari) to work, peasants needed to read mensuration and land records.
**The Plan:** He established a network of **Tahsil schools** teaching in the vernacular (Hindi/Urdu), not English.
**Legacy:** This success convinced Charles Wood to recommend vernacular education for the masses in his 1854 Despatch.

---

## BLOCK 21: BARODA STATE (1906)
*The First to Compel.*

### 👑 SAYAJIRAO GAEKWAD III
**The Fact:** Who introduced Compulsory Primary Education in India first?
**The Answer:** Not the British. It was the Princely State of **Baroda**.
**The Action:** **Maharaja Sayajirao Gaekwad III** made primary education free and compulsory in his state in 1906.
**Impact:** This embarrassed British India. G.K. Gokhale used this example to demand the same for British India in the Imperial Legislative Council (which was rejected in 1913).

---

## BLOCK 22: THE SCIENCE TEMPLES
*Beyond Arts & Law.*

### 🔬 TATA & VJTI
While the British universities churned out clerks and lawyers, Indian visionaries built technical institutes:
1.  **Victoria Jubilee Technical Institute (VJTI):** Established in Bombay (1887) to train Indians for the textile mills.
2.  **Indian Institute of Science (IISc):** Established in Bangalore (1909).
    - **Vision:** **Jamsetji Tata**.
    - **Land:** Donated by the **Maharaja of Mysore**.
    - **Reality:** It became the premier research institute of India.

---

## BLOCK 23: FEMALE JUVENILE SOCIETY (1819)
*The Very First Step.*

### 👩🏫 CALCUTTA PIONEERS
**The Org:** **Calcutta Female Juvenile Society**.
**Date:** Founded in 1819.
**Significance:** This was the first organized effort to educate girls in Bengal, long before Bethune (1849) or the Phules (1848). It was led by Christian missionaries but set the stage for later reforms.

---

## BLOCK 24: THE OFFICIAL LANGUAGE SHIFT (1837)
*Persian to English/Vernacular.*

### 📜 REPLACING PERSIAN
**Context:** For centuries, Persian was the language of the court (Mughal legacy).
**The Change:** In 1837, the British officially replaced Persian.
- **Higher Courts:** English became the language.
- **Lower Courts:** Vernaculars (Urdu, Hindi, Bengali) became the language.
**Impact:** This created a massive demand for English education among the upper classes who wanted government jobs.

---

## BLOCK 25: DECCAN EDUCATION SOCIETY (1884)
*The Maharashtra Model.*

### 🏫 FERGUSSON COLLEGE
**Founders:** **Bal Gangadhar Tilak, Gopal Ganesh Agarkar, V.K. Chiplunkar, and M.B. Namjoshi**.
**Goal:** To provide cheap and quality education to the masses without government aid (initially).
**Institution:** Established the **New English School (1880)** and later the famous **Fergusson College (1885)** in Pune.
**Impact:** It became the cradle of nationalism in Western India.

---

## BLOCK 26: ARYA SAMAJ EDUCATION
*The Great Schism.*

### ⚔️ DAV vs GURUKUL
The Arya Samaj split over education philosophy:
1.  **College Party (Modern):** Led by **Lala Hansraj** and **Lala Lajpat Rai**.
    - **Model:** **Dayanand Anglo-Vedic (DAV) Schools**.
    - **Focus:** Western science + English medium + Vedic values.
    - **First School:** Lahore (1886).
2.  **Mahatma Party (Orthodox):** Led by **Swami Shraddhanand (Munshi Ram)**.
    - **Model:** **Gurukul**.
    - **Focus:** Traditional Sanskrit learning + Vedic life + Hindi medium.
    - **First School:** Gurukul Kangri (Haridwar, 1902).

---

## BLOCK 27: JAMIA MILLIA ISLAMIA (1920)
*The Nationalist Muslim Answer.*

### 🕌 ALIGARH ALTERNATIVE
**Context:** During the Non-Cooperation Movement, Gandhi asked students to boycott government-aided colleges (like Aligarh Muslim University).
**The Response:** Nationalist Muslim leaders founded **Jamia Millia Islamia** in Aligarh (Oct 1920).
**Founders:** **Maulana Mohammad Ali, Hakim Ajmal Khan, Dr. Mukhtar Ahmed Ansari, and Dr. Zakir Hussain**.
**Shift:** It moved to Delhi in 1925.
**Philosophy:** Secular, nationalist, and vocational education (unlike the pro-British AMU).

---

## BLOCK 28: LORD HARDINGE'S RESOLUTION (1844)
*The Job Requirement.*

### 📜 ENGLISH FOR JOBS
**The Shift:** In 1835, Macaulay made English the medium. In 1837, Persian was abolished.
**The Clincher:** In 1844, **Lord Hardinge I** declared that in all government appointments, **preference would be given to those who had received an English education**.
**Impact:** This single rule made English education a mania among the middle class, as it was the only ticket to a secure job ("Sarkari Naukri").

---

## BLOCK 29: VIDYASAGAR'S INNOVATION
*Sanskrit for All.*

### 🕉️ BREAKING THE MONOPOLY
**Institution:** Principal of **Sanskrit College, Calcutta (1851)**.
**The Reform:** He opened the college to **non-Brahmins** for the first time, breaking the priestly monopoly on Sanskrit.
**The Curriculum:** He introduced Western Logic and philosophy alongside traditional Indian philosophy to modernize the outlook of pundits.

---

## BLOCK 30: THE SECOND WAVE OF UNIVERSITIES
*Beyond the Presidencies.*

### 🎓 LAHORE & ALLAHABAD
While 1857 gave us Calcutta, Bombay, and Madras, the hinterland had to wait:
1.  **Punjab University (1882):** Established in Lahore (largely due to the efforts of the Oriental Anjuman). It was the fourth university.
2.  **Allahabad University (1887):** Established as the "Oxford of the East." It became the hub for civil services aspirants from North India.

---

## BLOCK 31: COMPULSORY ACTS (1918-1920)
*The Dyarchy Success.*

### 📜 VITHALBHAI PATEL'S VICTORY
**Context:** In 1913, the British refused to make education compulsory.
**The Change:** Under the **Montagu-Chelmsford Reforms (1919)**, education became a "Transferred Subject" under Indian Ministers.
**The Action:** Between 1918 and 1920, every province (starting with **Bombay under Vithalbhai Patel's Act**) passed Compulsory Primary Education Acts.
**Result:** This was the first time British India (not just Baroda) legally mandated schooling for children.

---

## BLOCK 32: VISVA-BHARATI (1921)
*The World in a Nest.*

### 🌳 TAGORE'S SANTINIKETAN
**Founder:** **Rabindranath Tagore**.
**Location:** Santiniketan (West Bengal).
**Philosophy:** Unlike the "brick and mortar" British schools, Tagore believed in open-air education, communion with nature, and a synthesis of East and West.
**Status:** It was formally inaugurated as a University (**Visva-Bharati**) in 1921.
**Motto:** *Yatra visvam bhavatyekanidam* ("Where the whole world meets in a single nest").

---

## BLOCK 33: THE FUNDING JUMP (1833)
*1 Lakh to 10 Lakhs.*

### 💰 CHARTER ACT 1833
**1813:** The Charter Act allocated ₹1 Lakh (which was barely used).
**1833:** The Charter Act increased this grant to **₹10 Lakhs per annum**.
**Significance:** This massive increase in funds gave the Government the financial muscle to implement Macaulay's Minute (1835) and set up English schools across the country.

---

## BLOCK 34: D.K. KARVE'S WIDOW HOME (1896)
*The Root of SNDT.*

### 🏠 HINGNE WIDOWS
**Origin:** Before the Women's University (1916), **D.K. Karve** started a **Widow's Home in Poona (1896)**.
**Purpose:** To educate high-caste widows who were ostracized by society.
**Evolution:** This small home grew into a school, and eventually into the **SNDT Women's University** (Shreemati Nathibai Damodar Thackersey).
`;

