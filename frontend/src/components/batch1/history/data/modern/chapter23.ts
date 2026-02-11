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

export const MODERN_CHAPTER_23_SUBTOPICS = [
    { id: 1, name: "Development of Press (Regulations & Liberation)", status: 'todo' },
    { id: 2, name: "Key Newspapers & Leaders", status: 'todo' },
    { id: 3, name: "Education (Company Rule - Wood's Despatch)", status: 'todo' },
    { id: 4, name: "Education (Crown Rule - Commissions)", status: 'todo' },
    { id: 5, name: "Later Educational Developments (Wardha, Sargent)", status: 'todo' },
];

export const MODERN_CHAPTER_23_MCQS = [
    {
        id: 1,
        question: "The first newspaper in India, 'Bengal Gazette' (1780), was started by:",
        options: ["Raja Rammohan Roy", "James Augustus Hicky", "James Silk Buckingham", "William Bolts"],
        correctAnswer: 1,
        explanation: "James Augustus Hicky. (Hicky's Bengal Gazette).",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Which Governor-General enacted the 'Censorship of Press Act, 1799' anticipating a French invasion, requiring newspapers to print the names of the printer, editor, and proprietor?",
        options: ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "John Adams"],
        correctAnswer: 1,
        explanation: "Lord Wellesley (1799). He feared French influence via the press.",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Licensing Regulations, 1823' were notoriously repressive and led to the closure of Raja Rammohan Roy’s Persian journal Mirat-ul-Akbar. These regulations were introduced by:",
        options: ["Lord Amherst", "John Adams (Acting Governor-General)", "William Bentinck", "Lord Metcalfe"],
        correctAnswer: 1,
        explanation: "John Adams (Acting GG). He was a reactionary bureaucrat.",
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Who is historically known as the 'Liberator of the Indian Press' for repealing the obnoxious 1823 ordinance?",
        options: ["Lord Macaulay", "Charles Metcalfe", "Lord Auckland", "Lord Dalhousie"],
        correctAnswer: 1,
        explanation: "Charles Metcalfe. (Passed the Press Act of 1835).",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Vernacular Press Act' (1878) empowered the District Magistrate to call upon the printer and publisher of any vernacular newspaper to enter into a bond. This Act did NOT apply to:",
        options: ["Som Prakash", "Bharat Mihir", "English language newspapers", "Dacca Prakash"],
        correctAnswer: 2,
        explanation: "It discriminated against the Vernacular Press. English papers were exempt.",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Which famous newspaper turned into an English daily overnight to escape the Vernacular Press Act, 1878?",
        options: ["The Hindu", "Amrita Bazar Patrika", "Indian Mirror", "Sudharak"],
        correctAnswer: 1,
        explanation: "Amrita Bazar Patrika (Sisir Kumar Ghosh).",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who was the first Indian to be imprisoned for the performance of his duties as a journalist (1882)?",
        options: ["Bal Gangadhar Tilak", "Surendranath Banerjea", "G. Subramaniya Iyer", "Sisir Kumar Ghosh"],
        correctAnswer: 1,
        explanation: "Surendranath Banerjea (for criticizing a judge in The Bengalee).",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Newspaper (Incitement to Offences) Act, 1908' was passed primarily to suppress:",
        options: ["The Extremist nationalist press (like Yugantar and Kesari).", "The Christian missionaries.", "The Communist literature.", "The Princely States' press."],
        correctAnswer: 0,
        explanation: "It empowered magistrates to confiscate press property if they published incitement to violence. Aimed at Yugantar, Kesari, etc.",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Match the Newspaper with the Founder/Editor:\nA. The Hindu - 1. G. Subramaniya Iyer\nB. Voice of India - 2. Dadabhai Naoroji\nC. Sudharak - 3. G.K. Gokhale\nD. Indian Mirror - 4. N.N. Sen",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-3, C-4, D-1", "A-1, B-3, C-2, D-4", "A-4, B-2, C-3, D-1"],
        correctAnswer: 0,
        explanation: "All pairs are correctly matched. Sudharak was Agarkar/Gokhale.",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Downward Filtration Theory' in education meant:",
        options: ["Educating the lower classes first so they can filter culture upwards.", "Educating a few upper-class people who would then educate the masses.", "Filtering out Western knowledge and teaching only Oriental subjects.", "Government taking responsibility for the education of the entire mass."],
        correctAnswer: 1,
        explanation: "Educating a few at the top, hoping it would filter down to the masses.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 11,
        question: "The famous 'Macaulay’s Minute' (1835) settled the Orientalist-Anglicist controversy in favor of:",
        options: ["Sanskrit and Persian as the medium of instruction.", "English as the medium of instruction for higher education and the promotion of Western literature and science.", "Vernacular languages at all levels.", "Technical education only."],
        correctAnswer: 1,
        explanation: "It favored English and Western sciences. 'A single shelf of a good European library was worth the whole native literature of India and Arabia.'",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "Which document is popularly known as the 'Magna Carta of English Education in India'?",
        options: ["Charter Act of 1813", "Macaulay’s Minute", "Wood’s Despatch (1854)", "Hunter Commission Report"],
        correctAnswer: 2,
        explanation: "Wood’s Despatch (1854). It laid the foundation of the modern education structure.",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Which of the following was NOT a recommendation of Wood’s Despatch (1854)?",
        options: ["Establishment of Universities at Calcutta, Bombay, and Madras.", "Promotion of female education.", "English as the medium of instruction at the primary level.", "Grants-in-aid system to encourage private schools."],
        correctAnswer: 2,
        explanation: "It recommended Vernaculars at the primary level and English at higher levels. (Statement 'c' says English at primary, which is false).",
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "The 'Hunter Commission' appointed in 1882 primarily reviewed the progress of:",
        options: ["University Education", "Primary and Secondary Education (after Wood's Despatch)", "Technical Education", "Medical Education"],
        correctAnswer: 1,
        explanation: "Hunter Commission was specifically asked to review Primary and Secondary education.",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Indian Universities Act, 1904' was based on the recommendations of the:",
        options: ["Sadler Commission", "Raleigh Commission", "Hartog Committee", "Hunter Commission"],
        correctAnswer: 1,
        explanation: "Raleigh Commission (1902).",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "Why did the nationalists oppose the Indian Universities Act, 1904?",
        options: ["It introduced too much science in the curriculum.", "It tightened government control over universities (Senate/Syndicate) to curb nationalism on campuses.", "It banned women from universities.", "It increased the fees."],
        correctAnswer: 1,
        explanation: "It reduced the number of elected fellows and increased government nominees.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 17,
        question: "The 'Sadler Commission' (1917) is also known as the:",
        options: ["Calcutta University Commission", "Bombay University Commission", "Primary Education Commission", "Technical Education Commission"],
        correctAnswer: 0,
        explanation: "Calcutta University Commission.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Which commission recommended the '10+2+3' pattern (12 years of school + 3 years university) for the first time?",
        options: ["Hunter Commission", "Sadler Commission", "Raleigh Commission", "Radhakrishnan Commission"],
        correctAnswer: 1,
        explanation: "Sadler Commission suggested the separation of Intermediate (11-12) from Degree colleges.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Hartog Committee' (1929) was appointed to report on the growth of education. Its main finding/recommendation was:",
        options: ["Rapid expansion of schools was needed.", "Emphasis on 'Consolidation' and improvement of quality rather than blind expansion (criticized 'wastage and stagnation').", "Universal compulsory education immediately.", "Abolition of English."],
        correctAnswer: 1,
        explanation: "Consolidation. It observed that the rapid expansion led to poor quality.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "The 'Wardha Scheme of Basic Education' (1937) was worked out by a committee headed by:",
        options: ["Jawaharlal Nehru", "Dr. Zakir Hussain", "Abul Kalam Azad", "K.T. Shah"],
        correctAnswer: 1,
        explanation: "Dr. Zakir Hussain.",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The central idea of the Wardha Scheme (Nai Talim) was:",
        options: ["Learning through activity/handicraft (Manual work).", "Computer education", "Religious education", "English medium from Class 1"],
        correctAnswer: 0,
        explanation: "Learning through activity/handicraft. The school should be self-supporting.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 22,
        question: "The 'Sergeant Plan of Education' (1944) aimed at:",
        options: ["Universal free and compulsory education for children between 6 and 14 years.", "Restriction of higher education to the elite.", "Military training in schools.", "Promoting Hindi as the national language."],
        correctAnswer: 0,
        explanation: "It aimed to achieve British levels of education in 40 years (later reduced to 16 by Kher committee).",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Arrange the following Educational Commissions/Acts in chronological order:\n1. Wood’s Despatch\n2. Sadler Commission\n3. Raleigh Commission\n4. Hunter Commission",
        options: ["1-4-3-2", "1-4-2-3", "4-1-3-2", "1-3-4-2"],
        correctAnswer: 0,
        explanation: "Wood (1854) -> Hunter (1882) -> Raleigh (1902) -> Sadler (1917).",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Match the Institute with the Founder:\nA. Bethune School (Calcutta) - 1. J.E.D. Bethune\nB. Mohammadan Anglo-Oriental College - 2. Sir Syed Ahmed Khan\nC. Sanskrit College (Banaras) - 3. Jonathan Duncan\nD. Calcutta Madrassa - 4. Warren Hastings",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-1, B-2, C-4, D-3", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0,
        explanation: "All pairs correctly matched.",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Who among the following established the 'SNDT Women's University' in Bombay (1916)?",
        options: ["M.G. Ranade", "D.K. Karve", "Jyotiba Phule", "Pandita Ramabai"],
        correctAnswer: 1,
        explanation: "D.K. Karve (Maharshi Karve).",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Infiltration Theory' in education failed in India because:",
        options: ["The British did not fund it enough.", "The educated upper classes did not take the responsibility of educating the masses (Modern education created a gap, not a bridge).", "Indians refused to learn English.", "There were no teachers."],
        correctAnswer: 1,
        explanation: "The educated elite became more interested in government jobs and Western lifestyle than teaching the masses.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Press Trust of India' (PTI) was formed in:",
        options: ["1905", "1919", "1947", "1950"],
        correctAnswer: 2,
        explanation: "PTI was registered in 1947 and started functioning in 1949.",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Which Act abolished the system of 'Imprimatur' (Pre-censorship) which was put in place by Wellesley?",
        options: ["Hastings' Regulations (1818)", "Licensing Regulations (1823)", "Metcalfe Act (1835)", "Press Act (1867)"],
        correctAnswer: 0,
        explanation: "Lord Hastings (1818) abolished the pre-censorship (though some restrictions remained).",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Registration of Press Act, 1867' (which replaced Metcalfe’s Act) was:",
        options: ["Restrictive in nature.", "Regulatory in nature (required printing of printer's name and submission of a copy to the government).", "A ban on vernacular papers.", "Aimed at stopping the Swadeshi movement."],
        correctAnswer: 1,
        explanation: "It was regulatory (keeping records), not restrictive.",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Who said, 'A free press and a foreign dominion are two antagonistic things'?",
        options: ["Lord Lytton", "Lord Curzon", "Thomas Munro", "Bal Gangadhar Tilak"],
        correctAnswer: 2,
        explanation: "Thomas Munro.",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Deccan Education Society' (1884) was founded to:",
        options: ["Provide cheap and national education.", "Promote Christian missionaries.", "Support the British government.", "Teach agriculture only."],
        correctAnswer: 0,
        explanation: "To provide education to the masses. (Fergusson College was a result).",
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Resolution on Educational Policy, 1913' refused to:",
        options: ["Take responsibility for compulsory primary education (citing funds).", "Allow private colleges.", "Teach English.", "Allow women in colleges."],
        correctAnswer: 0,
        explanation: "The government refused to accept the principle of compulsory education (Gokhale's demand).",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which of the following journals was started by Annie Besant?",
        options: ["New India and Commonweal", "Young India", "The Hindu", "Prabuddha Bharata"],
        correctAnswer: 0,
        explanation: "New India and Commonweal.",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Associated Press of India' (API) was a news agency acquired by:",
        options: ["Reuters", "The Times Group", "The Government of India", "The Tata Group"],
        correctAnswer: 0,
        explanation: "Reuters owned API.",
        cognitiveLevel: "Fact"
    }
];

export const MODERN_CHAPTER_23_CONTENT = `
# Chapter 23: Constitutional Developments (1773-1947)

From Company Rule to Crown Rule: The Evolution of Administration.

## BLOCK 1: THE COMPANY RULE (1773-1858)
**Laying the Foundations.**

### 1. Regulating Act, 1773
*   **Significance:** First step by British Govt to control EIC.
*   **Governor of Bengal** -> **Governor-General of Bengal** (Warren Hastings).
*   **Supreme Court:** Established at Calcutta (1774).
*   **Executive Council:** 4 members to assist GG.

### 2. Pitt's India Act, 1784
*   **Double Government:**
    *   **Court of Directors:** Commercial affairs.
    *   **Board of Control:** Political affairs (6 members).

### 3. Charter Acts
*   **1813:** Ended EIC trade monopoly (except Tea & China). Allocated ₹1 Lakh for Education.
*   **1833:**
    *   **GG of Bengal** -> **GG of India** (William Bentinck).
    *   Complete centralization. Law member (Macaulay) added.

---

## BLOCK 2: THE CROWN RULE (1858-1947)
**Direct British Control.**

### 1. Government of India Act, 1858
*   **Context:** Post-1857 Revolt. "Act for the Good Government of India".
*   ** Viceroy:** Title introduced (Lord Canning).
*   **Secretary of State (SoS):** Cabinet minister in UK, assisted by 15-member **Council of India**.

### 2. Indian Councils Act, 1861
*   **Portfolio System:** Introduced by Canning.
*   **Ordinances:** Viceroy could issue ordinances (6 months life).
*   **Decentralization:** Restored legislative powers to Bombay & Madras.

---

## BLOCK 3: EVOLUTION OF REPRESENTATION

### 1. Morley-Minto Reforms (1909)
*   **Separate Electorates:** Introduced for Muslims.
*   **Executive Council:** Satyendra Prasad Sinha became first Indian member (Law Member).
*   **Critique:** "Legitimized Communalism".

### 2. Montagu-Chelmsford Reforms (1919)
*   **Dyarchy:** Introduced in **Provinces** (Transferred vs Reserved subjects).
*   **Bicameralism:** Introduced at the Center.
*   **Direct Elections:** Limited franchise.

### 3. Government of India Act, 1935
*   **Blueprint of Constitution.**
*   **Provincial Autonomy:** Dyarchy abolished in provinces, introduced at Center.
*   **All India Federation:** Proposed (Princes didn't join).
*   **Institutions:** RBI, Federal Court, Public Service Commissions.

> [!NOTE]
> **Important Evolution:**
> *   1773: Centralization begins.
> *   1833: Centralization peaks.
> *   1861: Decentralization begins.
> *   1935: Provincial Autonomy.
`;
