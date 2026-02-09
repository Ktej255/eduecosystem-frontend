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

export const MODERN_CHAPTER_8_SUBTOPICS: Subtopic[] = [
    { id: 'brahmo', name: 'Raja Rammohan Roy & Brahmo Samaj' },
    { id: 'young_bengal_vidyasagar', name: 'Young Bengal & Vidyasagar' },
    { id: 'western_india', name: 'Reform Movements in Western India' },
    { id: 'arya_samaj', name: 'Arya Samaj & Dayanand Saraswati' },
    { id: 'ramakrishna_theosophical', name: 'Ramakrishna Mission & Theosophical Society' },
    { id: 'chronology', name: 'Chronology & Matching' },
    { id: 'conceptual', name: 'Conceptual & Miscellaneous' }
];

export const MODERN_CHAPTER_8_MCQS: Question[] = [
    // Set 1: Raja Rammohan Roy & Brahmo Samaj
    {
        id: 1,
        question: "Raja Rammohan Roy wrote the famous tract \"Tuhfat-ul-Muwahhidin\" (A Gift to Monotheists) in which language?",
        options: ["Sanskrit", "Bengali", "Persian", "English"],
        correctAnswer: 2, // (c)
        explanation: "Tuhfat-ul-Muwahhidin was written by Rammohan Roy in Persian (with an Arabic preface).",
        subtopic: 'brahmo',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Consider the following statements regarding the \"Brahmo Samaj\":\n1. It denied the authority of the Vedas and had no faith in any scripture as the ultimate authority.\n2. It took a definite stand on the doctrine of Karma and Transmigration of the soul.\n3. It criticized the caste system.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "Brahmo Samaj denied the authority of Vedas and had no definite stand on Karma/Transmigration (left to individual belief).",
        subtopic: 'brahmo',
        difficulty: 'Hard'
    },
    {
        id: 3,
        question: "The \"Atmiya Sabha\" was founded by Raja Rammohan Roy in Calcutta in which year?",
        options: ["1814-15", "1828", "1833", "1857"],
        correctAnswer: 0, // (a)
        explanation: "Atmiya Sabha was founded in 1814-15 in Calcutta.",
        subtopic: 'brahmo',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who among the following founded the \"Tattvabodhini Sabha\" in 1839 to propagate the ideas of Rammohan Roy?",
        options: ["Keshub Chandra Sen", "Debendranath Tagore", "Ishwar Chandra Vidyasagar", "Radhakanta Deb"],
        correctAnswer: 1, // (b)
        explanation: "Debendranath Tagore founded Tattvabodhini Sabha (and its organ Tattvabodhini Patrika).",
        subtopic: 'brahmo',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The First Split in the Brahmo Samaj (1866) occurred primarily due to:",
        options: ["Disagreement over the \"Shuddhi\" movement.", "Ideological differences between Debendranath Tagore (Conservative) and Keshub Chandra Sen (Radical).", "The marriage of Keshub Chandra Sen's daughter.", "Political interference by the British."],
        correctAnswer: 1, // (b)
        explanation: "The split was between the conservative approach of Tagore (Adi Brahmo Samaj) and the radical, cosmopolitan approach of Keshub Chandra Sen (Brahmo Samaj of India).",
        subtopic: 'brahmo',
        difficulty: 'Moderate'
    },
    {
        id: 6,
        question: "Which of the following organizations was founded by the followers of Keshub Chandra Sen who broke away from him in 1878 (Second Split)?",
        options: ["Adi Brahmo Samaj", "Brahmo Samaj of India", "Sadharan Brahmo Samaj", "Navavidhan"],
        correctAnswer: 2, // (c)
        explanation: "Disgusted by Keshub's daughter's marriage (underage) to the Maharaja of Cooch Behar, his followers formed the Sadharan Brahmo Samaj.",
        subtopic: 'brahmo',
        difficulty: 'Moderate'
    },
    // Set 2: Young Bengal & Vidyasagar
    {
        id: 7,
        question: "The \"Young Bengal Movement\" initiated by Henry Vivian Derozio failed to have a long-term impact primarily because:",
        options: ["It was suppressed by the British government.", "Its radicalism was too advanced for the time and lacked real links with the masses.", "Derozio was deported to England.", "It merged with the Brahmo Samaj."],
        correctAnswer: 1, // (b)
        explanation: "The Derozians were too radical for their time and lacked a mass base.",
        subtopic: 'young_bengal_vidyasagar',
        difficulty: 'Moderate'
    },
    {
        id: 8,
        question: "Ishwar Chandra Vidyasagar is best known for his contribution to:",
        options: ["The abolition of Sati.", "The legalization of Widow Remarriage.", "The Shuddhi movement.", "The Temple Entry movement."],
        correctAnswer: 1, // (b)
        explanation: "Vidyasagar's relentless struggle led to the Widow Remarriage Act, 1856.",
        subtopic: 'young_bengal_vidyasagar',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Who among the following was associated with the newspaper \"Som Prakash\"?",
        options: ["Raja Rammohan Roy", "Ishwar Chandra Vidyasagar", "Sisir Kumar Ghosh", "Harish Chandra Mukherjee"],
        correctAnswer: 1, // (b)
        explanation: "Som Prakash was associated with Ishwar Chandra Vidyasagar (and dwelled on political issues too).",
        subtopic: 'young_bengal_vidyasagar',
        difficulty: 'Moderate'
    },
    // Set 3: Reform Movements in Western India
    {
        id: 10,
        question: "The \"Prarthana Samaj\" was founded in 1867 in Bombay by:",
        options: ["M.G. Ranade", "Atmaram Pandurang", "R.G. Bhandarkar", "Bal Gangadhar Tilak"],
        correctAnswer: 1, // (b)
        explanation: "Founded by Atmaram Pandurang (ideologically guided by Keshub Chandra Sen's visit).",
        subtopic: 'western_india',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "Who among the following is known as \"Lokahitawadi\"?",
        options: ["Gopal Hari Deshmukh", "Gopal Krishna Gokhale", "Jyotiba Phule", "Balshastri Jambhekar"],
        correctAnswer: 0, // (a)
        explanation: "Gopal Hari Deshmukh wrote under the pen name \"Lokahitawadi\".",
        subtopic: 'western_india',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "Consider the following statements regarding Jyotiba Phule:\n1. He founded the Satyashodhak Samaj in 1873.\n2. His work Gulamgiri was dedicated to the people of the USA who fought to abolish slavery.\n3. He was the first to open a school for girls in Pune.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All statements are correct. He linked the condition of Indian lower castes to the slaves in America.",
        subtopic: 'western_india',
        difficulty: 'Hard'
    },
    {
        id: 13,
        question: "The \"Paramahansa Mandali\" founded in 1849 in Maharashtra was primarily a secret society that worked for:",
        options: ["The overthrow of British rule.", "Breaking caste rules and eating food cooked by lower castes.", "Promotion of Sanskrit education.", "Protection of cows."],
        correctAnswer: 1, // (b)
        explanation: "It was a secret society that focused on breaking caste and communal barriers (eating together).",
        subtopic: 'western_india',
        difficulty: 'Moderate'
    },
    {
        id: 14,
        question: "Who among the following is considered the \"Father of Marathi Journalism\" for starting the first Marathi newspaper Darpan?",
        options: ["Bal Gangadhar Tilak", "Balshastri Jambhekar", "Vishnushastri Chiplunkar", "Dadoba Pandurang"],
        correctAnswer: 1, // (b)
        explanation: "Balshastri Jambhekar (Father of Marathi Journalism).",
        subtopic: 'western_india',
        difficulty: 'Easy'
    },
    // Set 4: Arya Samaj
    {
        id: 15,
        question: "The slogan \"Go Back to the Vedas\" was given by:",
        options: ["Raja Rammohan Roy", "Swami Vivekananda", "Swami Dayanand Saraswati", "Sri Aurobindo"],
        correctAnswer: 2, // (c)
        explanation: "Dayanand Saraswati (Arya Samaj).",
        subtopic: 'arya_samaj',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "Consider the following statements regarding the ideology of the Arya Samaj:\n1. It believed in the infallibility of the Vedas.\n2. It supported the \"Chaturvarna\" system based on birth.\n3. It rejected the Puranas and idol worship.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "Arya Samaj believed in the infallibility of Vedas but rejected the caste system based on birth (supported Chaturvarna based on merit/action). It rejected Puranas.",
        subtopic: 'arya_samaj',
        difficulty: 'Hard'
    },
    {
        id: 17,
        question: "The \"Shuddhi Movement\" launched by the Arya Samaj aimed at:",
        options: ["Purifying the Hindu temples from corruption.", "Reconverting to Hinduism those who had converted to Islam or Christianity.", "Abolishing the practice of untouchability.", "Promoting hygiene and sanitation."],
        correctAnswer: 1, // (b)
        explanation: "Shuddhi was the reconversion of non-Hindus to Hinduism.",
        subtopic: 'arya_samaj',
        difficulty: 'Easy'
    },
    {
        id: 18,
        question: "The split in the Arya Samaj (1893) into the \"College Party\" (DAV) and \"Gurukul Party\" was primarily over the issue of:",
        options: ["Participation in politics.", "The medium of education (English vs. Sanskrit) and meat-eating.", "The worship of idols.", "Support to the British government."],
        correctAnswer: 1, // (b)
        explanation: "The split was over the diet (Vegetarian vs. Meat) and education (Gurukul/Sanskrit vs. English education). Lala Hansraj led the College party (English), Swami Shraddhanand led the Gurukul party.",
        subtopic: 'arya_samaj',
        difficulty: 'Moderate'
    },
    {
        id: 19,
        question: "Who among the following founded the \"Gurukul\" at Haridwar in 1902 to propagate Vedic education?",
        options: ["Lala Hansraj", "Swami Shraddhanand (Munshi Ram)", "Lala Lajpat Rai", "Behramji Malabari"],
        correctAnswer: 1, // (b)
        explanation: "Swami Shraddhanand (Munshi Ram).",
        subtopic: 'arya_samaj',
        difficulty: 'Easy'
    },
    // Set 5: Ramakrishna Mission & Theosophical
    {
        id: 20,
        question: "Swami Vivekananda founded the \"Ramakrishna Mission\" in 1897. Its headquarters is located at:",
        options: ["Kanyakumari", "Almora", "Belur Math (Howrah)", "Rishikesh"],
        correctAnswer: 2, // (c)
        explanation: "Belur Math, West Bengal.",
        subtopic: 'ramakrishna_theosophical',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "The central theme of Swami Vivekananda's message was:",
        options: ["Withdrawal from the world and meditation.", "\"Service to Jiva is Service to Shiva\" (Service to Man is Service to God).", "Rejection of all Western science and technology.", "Establishment of a Hindu Rashtra."],
        correctAnswer: 1, // (b)
        explanation: "Service to Mankind is Service to God.",
        subtopic: 'ramakrishna_theosophical',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "The \"Theosophical Society\" was originally founded in:",
        options: ["Adyar, Madras", "New York, USA", "London, UK", "Bombay, India"],
        correctAnswer: 1, // (b)
        explanation: "Founded in New York (1875) by Blavatsky and Olcott. Later shifted to Adyar.",
        subtopic: 'ramakrishna_theosophical',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "Who among the following played a key role in the establishment of the \"Central Hindu College\" at Varanasi, which later developed into the Banaras Hindu University?",
        options: ["Madan Mohan Malaviya", "Annie Besant", "Swami Dayanand", "Rabindranath Tagore"],
        correctAnswer: 1, // (b)
        explanation: "Annie Besant founded the CHC, which Malaviya developed into BHU.",
        subtopic: 'ramakrishna_theosophical',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "The Theosophical Society in India became popular primarily because of its:",
        options: ["Advocacy of occult practices.", "Role in the revival and strengthening of the self-respect of Indians by praising their ancient culture.", "Strict adherence to Christian theology.", "Support for violent revolution."],
        correctAnswer: 1, // (b)
        explanation: "It helped restore the self-confidence of educated Indians by validating ancient Indian philosophy/occult.",
        subtopic: 'ramakrishna_theosophical',
        difficulty: 'Moderate'
    },
    // Set 6: Chronology & Matching
    {
        id: 25,
        question: "Arrange the following organizations in the chronological order of their establishment:\n1. Arya Samaj\n2. Prarthana Samaj\n3. Brahmo Samaj\n4. Ramakrishna Mission\n\nSelect the correct answer:",
        options: ["3-2-1-4", "3-1-2-4", "2-3-1-4", "3-2-4-1"],
        correctAnswer: 0, // (a)
        explanation: "Brahmo Samaj (1828) -> Prarthana Samaj (1867) -> Arya Samaj (1875) -> Ramakrishna Mission (1897).",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 26,
        question: "Match the Founder with the Organization:\nA. Seva Sadan -> 1. Behramji Malabari\nB. Servants of India Society -> 2. G.K. Gokhale\nC. Social Service League -> 3. N.M. Joshi\nD. Dharma Sabha -> 4. Radhakanta Deb\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-1, B-3, C-2, D-4", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0, // (a)
        explanation: "All pairs are correctly matched.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The \"Indian Social Conference\", often called the social reform cell of the Indian National Congress, was founded by:",
        options: ["M.G. Ranade and Raghunath Rao", "A.O. Hume", "G.K. Gokhale", "Dadabhai Naoroji"],
        correctAnswer: 0, // (a)
        explanation: "M.G. Ranade and Raghunath Rao. It met alongside the INC sessions initially.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    // Set 7: Conceptual & Miscellaneous
    {
        id: 28,
        question: "\"Radhakanta Deb\" founded the 'Dharma Sabha' in 1830 specifically to:",
        options: ["Support Raja Rammohan Roy's reforms.", "Oppose the abolition of Sati and protect Orthodox Hinduism.", "Promote widow remarriage.", "Fight against British rule."],
        correctAnswer: 1, // (b)
        explanation: "Radhakanta Deb was a conservative who organized the Dharma Sabha to oppose the Sati abolition and defend orthodoxy.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 29,
        question: "The \"Age of Consent Act, 1891\", which raised the marriageable age for girls to 12 years, was strongly opposed by:",
        options: ["Behramji Malabari", "Bal Gangadhar Tilak", "M.G. Ranade", "G.K. Gokhale"],
        correctAnswer: 1, // (b)
        explanation: "Tilak opposed the Age of Consent Act, not because he supported child marriage, but because he opposed British interference in Indian social customs.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "Who is the author of the famous book \"Satyarth Prakash\" (The Light of Truth)?",
        options: ["Swami Vivekananda", "Swami Dayanand Saraswati", "Raja Rammohan Roy", "Mahatma Gandhi"],
        correctAnswer: 1, // (b)
        explanation: "Swami Dayanand Saraswati.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 31,
        question: "Who among the following founded the \"Ved Samaj\" in Madras in 1864, inspired by the Brahmo Samaj?",
        options: ["K. Sridharalu Naidu", "Kandukuri Veeresalingam", "V.R. Shinde", "T.M. Nair"],
        correctAnswer: 0, // (a)
        explanation: "K. Sridharalu Naidu transformed the Brahmo presence in Madras into the Ved Samaj (later Brahmo Samaj of Southern India).",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "The \"Deccan Education Society\" was founded by:",
        options: ["G.G. Agarkar and B.G. Tilak", "M.G. Ranade", "Jyotiba Phule", "Savitribai Phule"],
        correctAnswer: 0, // (a)
        explanation: "Agarkar and Tilak (along with Chiplunkar) were founders of the Deccan Education Society (Fergusson College).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "What was the main objective of the \"Rahnumai Mazdayasnan Sabha\"?",
        options: ["Reform of the Sikh Gurudwaras.", "Restoration of Zoroastrian religion to its pristine purity.", "Spread of Christianity among tribals.", "Promotion of Hindi language."],
        correctAnswer: 1, // (b)
        explanation: "Parsi Reform movement (Dadabhai Naoroji was a key figure).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "Who translated the \"Gift to Monotheists\" (Tuhfat-ul-Muwahhidin) into English?",
        options: ["William Jones", "Raja Rammohan Roy himself", "Maulvi Obaidullah", "David Hare"],
        correctAnswer: 2, // (c)
        explanation: "Though Rammohan wrote it, the English translation by Maulvi Obaidullah (1884) popularized it.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 35,
        question: "The \"Sarda Act\" (1930) is related to:",
        options: ["Prevention of Sati.", "Prevention of Child Marriage.", "Widow Remarriage.", "Inter-caste Marriage."],
        correctAnswer: 1, // (b)
        explanation: "Sarda Act (Child Marriage Restraint Act, 1930).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_8_CONTENT = `
# BLOCK 1: RAJA RAMMOHAN ROY (The Father of Modern India)
## 🌅 BRAHMO SAMAJ (1828)

**Raja Rammohan Roy:**
*   **Titles:** "Father of Modern India", "Bridge between Past and Future".
*   **Philosophy:** Monotheism (One God), Anti-Sati, Anti-Idolatry, Rationalism.
*   **Works:** *Tuhfat-ul-Muwahhidin* (Gift to Monotheists - Persian), *Precepts of Jesus*, *Sambad Kaumudi* (Bengali paper), *Mirat-ul-Akbar* (Persian paper).
*   **Organizations:**
    *   **Atmiya Sabha (1814):** Calcutta.
    *   **Brahmo Sabha (1828):** Later Brahmo Samaj.

**The Splits:**
1.  **Adi Brahmo Samaj:** Debendranath Tagore (Conservative).
2.  **Brahmo Samaj of India:** Keshub Chandra Sen (Radical).
    *   **Note:** K.C. Sen was very dynamic. He inspired Prarthana Samaj (Bombay) and Veda Samaj (Madras). But, he married his underage daughter to Cooch Behar Prince -> Split!
3.  **Sadharan Brahmo Samaj (1878):** Anand Mohan Bose & Shibnath Shastri (Democratic).

> [!WARNING]
> **EXAMINER'S TRAP:**
> **Q:** Who founded Tattvabodhini Sabha? -> **Debendranath Tagore** (Not Rammohan Roy).

# BLOCK 2: ISHWAR CHANDRA VIDYASAGAR
## 📚 EDUCATION & WOMEN'S RIGHTS

*   **Principal of Sanskrit College.** Opened it to non-Brahmins.
*   **Widow Remarriage:** His efforts led to **Widow Remarriage Act, 1856** (Dalhousie/Canning).
*   **Bethune School:** Secretary. Champion of girl's education.
*   **Som Prakash:** His newspaper (First to face Vernacular Press Act).

# BLOCK 3: WESTERN INDIA REFORMS
**1. Prarthana Samaj (1867):**
*   Founder: **Atmaram Pandurang** (Guided by K.C. Sen).
*   Real Force: **M.G. Ranade** & **R.G. Bhandarkar**.
*   Focus: Caste reform, Women's education (not as radical as Brahmo Samaj).

**2. Satyashodhak Samaj (1873):**
*   Founder: **Jyotiba Phule**.
*   Focus: Anti-Brahmin, Dalits & Women.
*   Books: *Gulamgiri* (Dedicated to US anti-slavery movement), *Sarvajanik Satyadharma*.
*   Wife: **Savitribai Phule** (First girl's school in Pune).

**3. Young Bombay:**
*   **Dadabhai Naoroji:** Parsi Reform (*Rahnumai Mazdayasnan Sabha*), *Rast Goftar* (Truth Teller).

# BLOCK 4: ARYA SAMAJ (The Revivalists)
## 🔥 ARYA SAMAJ (1875)

**Swami Dayanand Saraswati:**
*   **Slogan:** "Go Back to the Vedas".
*   **Book:** *Satyarth Prakash*.
*   **Philosophy:** Vedas are infallible. Opposed Idol worship, Puranas, Caste by birth (supported Varna by merit).
*   **Shuddhi Movement:** reconversion to Hinduism. (Caused friction with Muslims/Christians).
*   **Education:** DAV Schools (Lala Hansraj - Modern) vs Gurukul (Swami Shraddhanand - Traditional).

# BLOCK 5: RAMAKRISHNA MISSION & THEOSOPHICAL SOCIETY
**1. Ramakrishna Mission (1897):**
*   Founder: **Swami Vivekananda** (Disciple of Ramakrishna Paramahansa).
*   Philosophy: "Service to Jiva is Service to Shiva".
*   Parliament of Religions (Chicago 1893): Vivekananda famous speech.

**2. Theosophical Society (1875):**
*   Founders: Madame Blavatsky & Col. Olcott (New York). shifted to **Adyar (Chennai)**.
*   **Annie Besant:** Popularized it in India. Founded **Central Hindu College** (became BHU).
*   Significance: Praised ancient Indian culture -> Boosted self-respect.

> [!TIP]
> **🔥 PYQ ALERT:**
> *   **Q:** Who wrote Gulamgiri? -> **Jyotiba Phule**.
> *   **Q:** Who founded Atmiya Sabha? -> **Rammohan Roy**.
> *   **Q:** Shuddhi Movement? -> **Arya Samaj**.
`;

