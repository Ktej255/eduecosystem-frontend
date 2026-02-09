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

export const MODERN_CHAPTER_9_SUBTOPICS: Subtopic[] = [
    { id: 'muslim_reform', name: 'Muslim Reform Movements' },
    { id: 'parsi_sikh', name: 'Parsi and Sikh Reforms' },
    { id: 'lower_caste_south', name: 'Lower Caste & Non-Brahmin (South)' },
    { id: 'caste_general', name: 'Caste Movements (General/West)' },
    { id: 'chronology', name: 'Chronology & Matching' },
    { id: 'conceptual', name: 'Conceptual & Advanced' }
];

export const MODERN_CHAPTER_9_MCQS: Question[] = [
    // Set 1: Muslim Reform Movements
    {
        id: 1,
        question: "Sir Syed Ahmed Khan founded the \"Mohammedan Anglo-Oriental College\" at Aligarh in 1875. What was his primary objective?",
        options: ["To spread the Wahabi ideology.", "To promote Western education and scientific temper among Muslims to ensure their progress and government jobs.", "To unite Hindus and Muslims against British rule.", "To translate the Quran into English for Europeans."],
        correctAnswer: 1, // (b)
        explanation: "Sir Syed wanted Muslims to acquire Western education to catch up with Hindus in government services.",
        subtopic: 'muslim_reform',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The journal \"Tahzib-ul-Akhlaq\" (Civilization of Morals) was published by:",
        options: ["Maulana Abul Kalam Azad", "Sir Syed Ahmed Khan", "Altaf Hussain Hali", "Badruddin Tyabji"],
        correctAnswer: 1, // (b)
        explanation: "Tahzib-ul-Akhlaq was Sir Syed's journal to promote social reform.",
        subtopic: 'muslim_reform',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Consider the following statements regarding the \"Deoband School\":\n1. It was founded by Muhammad Qasim Nanotavi and Rashid Ahmed Gangohi.\n2. It was a revivalist movement that aimed to propagate pure teachings of the Quran and Hadith.\n3. It welcomed the formation of the Indian National Congress and issued a fatwa against the Aligarh Movement.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All statements are correct. Deoband was anti-British, orthodox, and supported the formation of the INC (unlike Sir Syed).",
        subtopic: 'muslim_reform',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The \"Ahmadiyya Movement\" founded by Mirza Ghulam Ahmad differed from other Muslim movements because:",
        options: ["It supported the concept of Jihad against the British.", "It believed in the universal religion of all humanity and opposed Jihad.", "It was strictly confined to the Arabian peninsula.", "It rejected the Quran completely."],
        correctAnswer: 1, // (b)
        explanation: "Ahmadiyhya (Qadiani) movement opposed Jihad and preached universal brotherhood.",
        subtopic: 'muslim_reform',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Who among the following helped Sir Syed Ahmed Khan in founding the \"Scientific Society\" in 1864?",
        options: ["Theodore Beck", "Raja Jai Kishan Das", "Maulana Shibli Numani", "Altaf Hussain Hali"],
        correctAnswer: 1, // (b)
        explanation: "Raja Jai Kishan Das was a close Hindu associate of Sir Syed who helped found the Scientific Society.",
        subtopic: 'muslim_reform',
        difficulty: 'Hard'
    },
    {
        id: 6,
        question: "The \"Nadwat-al-Ulama\" (Lucknow) was founded to:",
        options: ["Oppose the Deoband school.", "Work out a middle path between the extreme orthodoxy of Deoband and the modernity of Aligarh.", "Support the British war efforts in WWI.", "Spread Christianity."],
        correctAnswer: 1, // (b)
        explanation: "Nadwat-al-Ulama (Shibli Numani) aimed for a middle path (reform but within Islamic framework).",
        subtopic: 'muslim_reform',
        difficulty: 'Moderate'
    },
    // Set 2: Parsi and Sikh
    {
        id: 7,
        question: "The \"Rahnumai Mazdayasnan Sabha\" was founded in 1851 to reform the Zoroastrian religion. Who among the following was associated with it?\n1. Dadabhai Naoroji\n2. Naoroji Furdonji\n3. S.S. Bengalee\n\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All three (Naoroji, Furdonji, Bengalee) were key figures in the Parsi Reform movement.",
        subtopic: 'parsi_sikh',
        difficulty: 'Moderate'
    },
    {
        id: 8,
        question: "The newspaper \"Rast Goftar\" (Truth Teller) was the mouthpiece of which reform movement?",
        options: ["Arya Samaj", "Parsi Reform Movement", "Satnami Movement", "Aligarh Movement"],
        correctAnswer: 1, // (b)
        explanation: "Rast Goftar was a Parsi reform journal (Dadabhai Naoroji).",
        subtopic: 'parsi_sikh',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "The \"Singh Sabha Movement\" was founded at Amritsar in 1873 with the aim of:",
        options: ["Establishing a separate state for Sikhs (Khalistan).", "Countering the proselytizing activities of Christian missionaries and the Arya Samaj.", "Organizing an armed rebellion against the British.", "Taking control of Gurdwaras from Mahants."],
        correctAnswer: 1, // (b)
        explanation: "Singh Sabha was a cultural defense against the Arya Samaj and Christian missionaries.",
        subtopic: 'parsi_sikh',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "The \"Akali Movement\" (1920s) was primarily a struggle against:",
        options: ["The British government's tax policies.", "The corrupt Mahants (priests) who controlled the Gurdwaras.", "The Muslim League.", "The Singh Sabha leaders."],
        correctAnswer: 1, // (b)
        explanation: "Akali Movement was directed against the corrupt Mahants (priests).",
        subtopic: 'parsi_sikh',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "The \"Gurudwara Reform Act\" which placed the management of Gurdwaras in the hands of the SGPC (Shiromani Gurdwara Parbandhak Committee) was passed in:",
        options: ["1919", "1922", "1925", "1930"],
        correctAnswer: 2, // (c)
        explanation: "1925 Act gave control to SGPC.",
        subtopic: 'parsi_sikh',
        difficulty: 'Easy'
    },
    // Set 3: Lower Caste & Non-Brahmin
    {
        id: 12,
        question: "\"One Caste, One Religion, One God for Mankind\" was the famous slogan of:",
        options: ["Jyotiba Phule", "Sri Narayana Guru", "Periyar E.V. Ramaswamy", "Dr. B.R. Ambedkar"],
        correctAnswer: 1, // (b)
        explanation: "Sri Narayana Guru (SNDP).",
        subtopic: 'lower_caste_south',
        difficulty: 'Easy'
    },
    {
        id: 13,
        question: "The \"Aruvipuram Movement\" (1888) was significant because:",
        options: ["It was the first temple entry movement.", "Sri Narayana Guru consecrated a Shiva idol (stone) himself, defying the Brahmin monopoly on priesthood.", "It led to the formation of the Justice Party.", "It was supported by Gandhi."],
        correctAnswer: 1, // (b)
        explanation: "Narayana Guru picked up a stone from the river and installed it as Shiva, declaring that one does not need to be a Brahmin to consecrate an idol.",
        subtopic: 'lower_caste_south',
        difficulty: 'Moderate'
    },
    {
        id: 14,
        question: "The \"Justice Party\" (South Indian Liberal Federation) was formed in 1916 by:",
        options: ["C.N. Annadurai and M. Karunanidhi", "T.M. Nair, P. Thyagaraja Chetti, and C. Natesa Mudaliar", "Periyar E.V. Ramaswamy", "K. Kamaraj"],
        correctAnswer: 1, // (b)
        explanation: "T.M. Nair and Thyagaraja Chetti founded the Justice Party.",
        subtopic: 'lower_caste_south',
        difficulty: 'Easy'
    },
    {
        id: 15,
        question: "The \"Self-Respect Movement\" started by E.V. Ramaswamy Naicker (Periyar) in 1925 aimed to:",
        options: ["Promote the Sanskrit language.", "Reject the Brahminical religion and conduct marriages without Brahmin priests.", "Support the Congress in the freedom struggle.", "Encourage the worship of Rama."],
        correctAnswer: 1, // (b)
        explanation: "Self-Respect Movement rejected Brahmin priests and rituals.",
        subtopic: 'lower_caste_south',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "The journal \"Kudi Arasu\" was associated with:",
        options: ["The Justice Party", "The Self-Respect Movement (Periyar)", "The Theosophical Society", "The Communist Party of India"],
        correctAnswer: 1, // (b)
        explanation: "Kudi Arasu was Periyar's journal.",
        subtopic: 'lower_caste_south',
        difficulty: 'Moderate'
    },
    {
        id: 17,
        question: "The \"Vaikom Satyagraha\" (1924) in Kerala was launched for:",
        options: ["The right of tenants to own land.", "The opening of temple streets (roads around the temple) to the untouchables (Avarnas).", "The abolition of the Dowry system.", "Higher wages for toddy tappers."],
        correctAnswer: 1, // (b)
        explanation: "It was for the right of Avarnas to walk on the roads around the temple (not initially entry into the temple).",
        subtopic: 'lower_caste_south',
        difficulty: 'Moderate'
    },
    {
        id: 18,
        question: "Who among the following leaders played a key role in the Vaikom Satyagraha?",
        options: ["K. Kelappan and T.K. Madhavan", "C. Rajagopalachari", "Subramania Bharati", "P. Krishna Pillai"],
        correctAnswer: 0, // (a)
        explanation: "K. Kelappan (Kerala Gandhi) and T.K. Madhavan were the leaders.",
        subtopic: 'lower_caste_south',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "The \"Guruvayur Satyagraha\" (1931) was related to:",
        options: ["Temple Entry for all castes.", "Removal of the statue of General Neill.", "Prohibition of liquor.", "Freedom of the Press."],
        correctAnswer: 0, // (a)
        explanation: "Guruvayur was specifically for Temple Entry (led by Kelappan).",
        subtopic: 'lower_caste_south',
        difficulty: 'Easy'
    },
    // Set 4: Caste General
    {
        id: 20,
        question: "Dr. B.R. Ambedkar founded the \"Bahishkrit Hitakarini Sabha\" in 1924 to:",
        options: ["Promote the welfare of the outcastes and depressed classes.", "Fight elections against the Congress.", "Write the Constitution of India.", "Organize the Mahars for military service."],
        correctAnswer: 0, // (a)
        explanation: "Bahishkrit Hitakarini Sabha (1924) was for the upliftment of the depressed classes.",
        subtopic: 'caste_general',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "The \"Mahad Satyagraha\" (1927) led by Dr. Ambedkar was focused on:",
        options: ["Temple entry at the Kalaram Temple.", "Asserting the right of untouchables to use water from the public tank (Chavadar Tank).", "Burning foreign cloth.", "Demand for separate electorates."],
        correctAnswer: 1, // (b)
        explanation: "Mahad Satyagraha asserted the right to water from the public tank.",
        subtopic: 'caste_general',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "The \"All India Harijan Sangh\" was founded by Mahatma Gandhi in:",
        options: ["1924", "1930", "1932", "1942"],
        correctAnswer: 2, // (c)
        explanation: "Founded in 1932 after the Poona Pact.",
        subtopic: 'caste_general',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "The \"Satyashodhak Samaj\" (Truth Seekers' Society) was active primarily in:",
        options: ["Bengal", "Punjab", "Maharashtra", "Madras"],
        correctAnswer: 2, // (c)
        explanation: "Maharashtra (Phule).",
        subtopic: 'caste_general',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "Who was the first President of the \"All India Depressed Classes Association\"?",
        options: ["M.C. Rajah", "Dr. B.R. Ambedkar", "Jagjivan Ram", "Mahatma Gandhi"],
        correctAnswer: 0, // (a)
        explanation: "M.C. Rajah was the first president (Ambedkar was a key member but Rajah was the initial prominent leader of this specific association before they had differences).",
        subtopic: 'caste_general',
        difficulty: 'Hard'
    },
    // Set 5: Chronology
    {
        id: 25,
        question: "Match the Movement with the Founder/Leader:\nA. Ahrar Movement -> 1. Maulana Mazhar Ali Khan\nB. Faraizi Movement -> 2. Haji Shariatullah\nC. Deoband School -> 3. Qasim Nanotavi\nD. Nadwat-al-Ulama -> 4. Shibli Numani\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-3, C-4, D-1", "A-1, B-3, C-2, D-4", "A-4, B-2, C-3, D-1"],
        correctAnswer: 0, // (a)
        explanation: "All pairs are correctly matched.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 26,
        question: "Arrange the following events in chronological order:\n1. Formation of Justice Party\n2. Vaikom Satyagraha\n3. Foundation of SNDP Yogam\n4. Foundation of All India Harijan Sangh\n\nSelect the correct answer:",
        options: ["3-1-2-4", "1-3-2-4", "3-2-1-4", "1-2-3-4"],
        correctAnswer: 0, // (a)
        explanation: "SNDP (1903) -> Justice Party (1916) -> Vaikom (1924) -> Harijan Sangh (1932).",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The \"Temple Entry Proclamation\" which opened all temples in the state to all castes was issued in 1936 by the Maharaja of:",
        options: ["Mysore", "Travancore", "Cochin", "Baroda"],
        correctAnswer: 1, // (b)
        explanation: "Travancore (Maharaja Chithira Thirunal) was the first to issue such a proclamation.",
        subtopic: 'chronology',
        difficulty: 'Easy'
    },
    // Set 6: Conceptual
    {
        id: 28,
        question: "Why did the \"Deoband School\" issue a fatwa against the \"United Patriotic Association\" of Syed Ahmed Khan?",
        options: ["Because Syed Ahmed Khan supported the Congress.", "Because Syed Ahmed Khan was seen as too orthodox.", "Because Syed Ahmed Khan advised Muslims to stay away from the Congress, while Deoband supported the Congress's anti-British stance.", "Because Syed Ahmed Khan wanted to join the Ottoman Empire."],
        correctAnswer: 2, // (c)
        explanation: "Deoband was anti-British and wanted Muslims to join the Congress to fight the British, whereas Sir Syed (United Patriotic Association) was pro-British and anti-Congress.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "The \"Self-Respect Marriages\" advocated by Periyar were unique because:",
        options: ["They required the bride to pay a dowry.", "They were conducted without priests and without the recitation of mantras.", "They were only for the Brahmins.", "They were legally invalid under British law."],
        correctAnswer: 1, // (b)
        explanation: "They were simple civil contracts without priests.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 30,
        question: "\"Gopal Baba Walangkar\" is associated with which early Dalit movement?",
        options: ["Anarya Dosh-Parihar Mandali (Maharashtra)", "Adi-Dravida Mahajana Sabha", "Namasudra Movement", "Pulaya Sabha"],
        correctAnswer: 0, // (a)
        explanation: "Walangkar was an early Dalit activist in Maharashtra (pre-Ambedkar).",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 31,
        question: "The \"Namasudra Movement\" was a movement of the untouchables (Chandalas) in:",
        options: ["Bengal", "Kerala", "Punjab", "Andhra Pradesh"],
        correctAnswer: 0, // (a)
        explanation: "Namasudras were the Dalits of Bengal.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 32,
        question: "The \"Ezhava\" community, associated with the SNDP movement, was traditionally engaged in:",
        options: ["Weaving", "Toddy tapping and agriculture", "Leather work", "Fishing"],
        correctAnswer: 1, // (b)
        explanation: "They were traditionally toddy tappers and agricultural laborers.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "Which of the following leaders founded the \"Indian Reform Association\" in 1870?",
        options: ["Rammohan Roy", "Keshub Chandra Sen", "Vidyasagar", "Dayanand Saraswati"],
        correctAnswer: 1, // (b)
        explanation: "Keshub Chandra Sen formed the Indian Reform Association after visiting England.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Seva Sadan\" was founded by Behramji Malabari to:",
        options: ["Reform the Parsi priesthood.", "Take care of socially discarded and exploited women of all castes.", "Provide medical aid to soldiers.", "Promote widow remarriage among Brahmins only."],
        correctAnswer: 1, // (b)
        explanation: "Seva Sadan focused on the welfare of women (widows, destitute).",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "\"Jotiba Phule\" was bestowed with the title 'Mahatma' in 1888 by:",
        options: ["Mahatma Gandhi", "The British Government", "Another social reformer, Vithalrao Krishnaji Vandekar", "The Gaekwad of Baroda"],
        correctAnswer: 2, // (c)
        explanation: "It was given at a public meeting by Vithalrao Krishnaji Vandekar (social activist) in 1888.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    }
];

export const MODERN_CHAPTER_9_CONTENT = `
# BLOCK 1: MUSLIM REFORM MOVEMENTS
## ☪️ ALIGARH VS DEOBAND

**1. Aligarh Movement (Modernist):**
*   **Sir Syed Ahmed Khan.**
*   **Goal:** Modern Education for Muslims + Loyalty to British = Govt Jobs.
*   **Institution:** Mohammedan Anglo-Oriental College (1875) -> AMU.
*   **Journal:** *Tahzib-ul-Akhlaq*.
*   **Politics:** Opposed INC. Founded "United Patriotic Association".

**2. Deoband School (Orthodox/Revivalist):**
*   **Founders:** Nanotavi & Gangohi. (UP).
*   **Goal:** Pure Islam (Hadith/Quran). Jihad against foreign rule.
*   **Politics:** Supported INC. Issued Fatwa against Sir Syed.

**3. Ahmadiyya Movement:**
*   **Mirza Ghulam Ahmad.** (Qadian, Punjab).
*   **Goal:** Universal religion. Opposed Jihad.

# BLOCK 2: SIKH & PARSI REFORMS
**Sikhs:**
*   **Singh Sabha (1873):** Education & Religious purity.
*   **Akali Movement (1920s):** To liberate Gurdwaras from corrupt Mahants.
*   **Act:** Gurdwara Reform Act 1925 (SGPC formed).

**Parsis:**
*   **Rahnumai Mazdayasnan Sabha (1851):** Dadabhai Naoroji.
*   **Theme:** "Restoration" of Zoroastrianism to purity. Women's education.

# BLOCK 3: LOWER CASTE MOVEMENTS (South India)
## ✊ SELF-RESPECT & JUSTICE

**1. Justice Party (1916):**
*   Founders: T.M. Nair, Thyagaraja Chetti. (Madras).
*   Issue: Brahmin dominance in jobs/politics.
*   Action: Supported British. Won elections under Dyarchy (1920).

**2. Self-Respect Movement (1925):**
*   Leader: **E.V. Ramaswamy Naicker (Periyar)**.
*   Philosophy: Radical Anti-Brahmin. Burned Manusmriti. Kudi Arasu (Journal).
*   Self-Respect Marriages: No priests within.

**3. Temple Entry Movements:**
*   **Vaikom Satyagraha (1924):** Kerala. K.P. Kesava Menon. (Right to use roads around temple).
*   **Guruvayur Satyagraha (1931):** K. Kelappan.

**4. SNDP (Kerala):**
*   **Sri Narayana Guru.**
*   Slogan: "One Caste, One Religion, One God for Mankind".
*   Action: Consecrated idols himself (Aruvipuram).

# BLOCK 4: CASTE MOVEMENTS (General/West)
**Dr. B.R. Ambedkar:**
*   **Organizations:** Bahishkrit Hitakarini Sabha (1924), Independent Labour Party, Scheduled Castes Federation.
*   **Mahad Satyagraha (1927):** Right to water from tank.
*   **Journals:** *Mooknayak* (Leader of Dumb), *Bahishkrit Bharat*.

**Mahatma Gandhi:**
*   **All India Harijan Sangh (1932):** After Poona Pact.
*   **Journal:** *Harijan*.
*   Focus: Temple entry, abolition of untouchability (as a sin), but within Hindu fold.

> [!WARNING]
> **EXAMINER'S TRAP:**
> **Q:** Who started "Self-Respect Movement"? -> **Periyar**.
> **Q:** Who started "Satya Shodhak Samaj"? -> **Jyotiba Phule** (Not Ambedkar).
> **Q:** Difference between Aligarh and Deoband? -> Aligarh = Pro-British/Modern; Deoband = Anti-British/Traditional.
`;

