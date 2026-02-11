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

export const MODERN_CHAPTER_33_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Partition & The Refugee Crisis", status: 'done' },
    { id: '2', name: "Integration of Princely States (Sardar Patel)", status: 'done' },
    { id: '3', name: "The Assassination of Gandhi", status: 'done' },
    { id: '4', name: "Linguistic Reorganization of States", status: 'done' },
    { id: '5', name: "Early Economic Planning", status: 'done' },
];

export const MODERN_CHAPTER_33_MCQS: Question[] = [
    {
        id: 1,
        question: "At the time of independence, there were approximately how many princely states in India?",
        options: ["250", "362", "562", "600"],
        correctAnswer: 2,
        explanation: "There were 562 princely states ranging from tiny estates to large kingdoms.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who was the 'Secretary' of the Ministry of States who worked closely with Sardar Patel for the integration of states?",
        options: ["V.P. Menon", "Lord Mountbatten", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
        correctAnswer: 0,
        explanation: "V.P. Menon played a crucial administrative role in the integration process.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Which of the following states initially refused to join the Indian Union?",
        options: ["Junagadh", "Hyderabad", "Kashmir", "All of the above"],
        correctAnswer: 3,
        explanation: "All three posed significant challenges to the new government.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Standstill Agreement' was signed by India with which state in 1947?",
        options: ["Hyderabad", "Kashmir", "Both (a) and (b)", "None of the above"],
        correctAnswer: 2,
        explanation: "India signed standstill agreements with both Hyderabad and Kashmir.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Integration of Junagadh into India was achieved through:",
        options: ["Police action.", "A plebiscite where people voted overwhelmingly to join India.", "A treaty of accession.", "None of the above."],
        correctAnswer: 1,
        explanation: "A plebiscite was held in Feb 1948.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "What was the name of the military operation to integrate Hyderabad into India?",
        options: ["Operation Vijay", "Operation Polo", "Operation Cactus", "Operation Meghdoot"],
        correctAnswer: 1,
        explanation: "Operation Polo (1948) was the police action against the Nizam.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who were the 'Razakars' in the context of Hyderabad?",
        options: ["Village landlords.", "Volunteer paramilitary force of the Ittehad-ul-Muslimeen supportive of the Nizam.", "Refugees from Pakistan.", "Indian undercover agents."],
        correctAnswer: 1,
        explanation: "They committed atrocities against the people to prevent accession to India.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Mahatma Gandhi was assassinated on which date?",
        options: ["Jan 26, 1948", "Jan 30, 1948", "Aug 15, 1948", "Oct 2, 1948"],
        correctAnswer: 1,
        explanation: "Jan 30, 1948, by Nathuram Godse.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The first linguistic state created in India was:",
        options: ["Maharashtra", "Tamil Nadu", "Andhra State", "Gujarat"],
        correctAnswer: 2,
        explanation: "Created in 1953 following the death of Potti Sreeramulu.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "Who became the first Prime Minister of free India?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru took oath on Aug 15, 1947.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_33_MCQS.push(
    {
        id: 11,
        question: "The 'Instrument of Accession' specified that the states surrendered which three subjects to the Union?",
        options: ["Defense, Foreign Affairs, Communications", "Defense, Finance, Education", "Foreign Affairs, Trade, Health", "Railway, Post, Law"],
        correctAnswer: 0,
        explanation: "Defense, External Affairs, and Communications.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "Why was the 'Dhar Commission' (1948) appointed?",
        options: ["To recommend on Linguistic Provinces.", "To look into refugee rehabilitation.", "To study princely states' finances.", "To plan for primary education."],
        correctAnswer: 0,
        explanation: "The S.K. Dhar Commission was appointed to examine the feasibility of linguistic states.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "What was the Dhar Commission’s recommendation on linguistic states?",
        options: ["It supported them immediately.", "It opposed them, suggesting administrative convenience as the criterion.", "It suggested multi-lingual states.", "It suggested 100 small states."],
        correctAnswer: 1,
        explanation: "It felt that language as a basis might threaten national unity.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The JVP Committee (Nehru, Patel, Sitaramayya) in 1949:",
        options: ["Accepted linguistic states.", "Formally rejected language as the basis of reorganization for the time being.", "Dissolved the Dhar Commission.", "None of the above."],
        correctAnswer: 1,
        explanation: "Like the Dhar Commission, it prioritized unity and security over language.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 15,
        question: "The sudden creation of Andhra in 1953 was triggered by:",
        options: ["Large scale riots in Madras.", "The 56-day fast and death of Potti Sreeramulu.", "A directive from the UN.", "A deal with the Nizam."],
        correctAnswer: 1,
        explanation: "His death forced the government's hand.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'States Reorganisation Commission' (1953) was headed by:",
        options: ["Fazl Ali", "K.M. Panikkar", "H.N. Kunzru", "Vallabhbhai Patel"],
        correctAnswer: 0,
        explanation: "Fazl Ali was the chairman; Panikkar and Kunzru were members.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The States Reorganisation Act of 1956 divided India into:",
        options: ["14 States and 6 Union Territories", "28 States and 8 Union Territories", "20 States and 10 Union Territories", "None of the above"],
        correctAnswer: 0,
        explanation: "14 States and 6 Union Territories.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The problem of 'Partition' was most acute in which two provinces?",
        options: ["UP and Bihar", "Punjab and Bengal", "Madras and Bombay", "Assam and Orissa"],
        correctAnswer: 1,
        explanation: "Large scale communal violence and migration happened in these divided provinces.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 19,
        question: "Who was the first President of Independent India?",
        options: ["Dr. S. Radhakrishnan", "Dr. Rajendra Prasad", "C. Rajagopalachari", "Zakir Hussain"],
        correctAnswer: 1,
        explanation: "Rajendra Prasad was the first President.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Planning Commission' of India was established in which year?",
        options: ["1947", "1950", "1952", "1956"],
        correctAnswer: 1,
        explanation: "March 1950, through a Cabinet resolution.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Jawaharlal Nehru's approach to the economy was termed as:",
        options: ["Capitalist.", "Communist.", "Mixed Economy with a Socialist Pattern of Society.", "Gandhian Decentralization."],
        correctAnswer: 2,
        explanation: "Focused on heavy industry and public sector dominance.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 22,
        question: "What was the 'Privy Purse'?",
        options: ["A handbag for queens.", "The annual allowance paid to former rulers of princely states as part of the integration deal.", "A secret fund for the PM.", "The budget for Delhi."],
        correctAnswer: 1,
        explanation: "It was a guarantee given to the princes in exchange for joining India.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Accession of Jammu and Kashmir was formalized via the Signing of the Instrument of Accession by:",
        options: ["Sheikh Abdullah", "Maharaja Hari Singh", "Karan Singh", "Gulab Singh"],
        correctAnswer: 1,
        explanation: "Maharaja Hari Singh signed it on Oct 26, 1947.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Tryst with Destiny' speech was delivered by Nehru at:",
        options: ["Red Fort.", "Constituent Assembly, Midnight of Aug 14-15.", "Gateway of India.", "Sabarmati Ashram."],
        correctAnswer: 1,
        explanation: "The historic address to the nation on the eve of independence.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Which of the following describes the 'Refugee Crisis' post-1947 accurately?",
        options: ["Around 8 million people moved across the new borders.", "It was entirely peaceful.", "Only Hindus moved south.", "Only Muslims moved north."],
        correctAnswer: 0,
        explanation: "One of the largest mass migrations in human history with massive casualties.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "Who was known as the 'Bismarck of India' for his role in unifying the nation?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhash Bose"],
        correctAnswer: 2,
        explanation: "For integrating the princely states.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "After partition, the 'Indian Independence Act, 1947' gave the princely states the option to:",
        options: ["Join India.", "Join Pakistan.", "Remain independent.", "All of the above."],
        correctAnswer: 3,
        explanation: "The lapse of Paramountcy left them technically free to choose.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "The boundary between India and Pakistan was demarcated by:",
        options: ["Cyril Radcliffe", "Stafford Cripps", "Lord Pethick Lawrence", "Louis Mountbatten"],
        correctAnswer: 0,
        explanation: "Radcliffe Line.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Linguistic Reorganization aimed at:",
        options: ["Promoting regionalism over nationalism.", "Strengthening administrative efficiency and democratic reach by using local languages.", "Converting India into a federation of nations.", "Supporting the British system."],
        correctAnswer: 1,
        explanation: "Language was seen as a way to engage the masses in democracy.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 30,
        question: "The 'Bifurcation of Bombay State' (1960) led to the creation of:",
        options: ["Maharashtra and Gujarat.", "Madhya Pradesh and Maharashtra.", "Karnataka and Maharashtra.", "Orissa and Bengal."],
        correctAnswer: 0,
        explanation: "Following the Samyukta Maharashtra and Mahagujarat movements.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Who was the first Indian Governor-General of India?",
        options: ["C. Rajagopalachari", "Lord Mountbatten", "Rajendra Prasad", "Zakir Hussain"],
        correctAnswer: 0,
        explanation: "Rajaji served as GG after Mountbatten left in 1948 until 1950.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "In the context of refugee relief, the 'Faridabad' and 'Chandigarh' townships are notable for:",
        options: ["Being built to rehabilitate refugees.", "Being military bases.", "Being old Mughal cities.", "Being port cities."],
        correctAnswer: 0,
        explanation: "Many new areas were developed for housing people from West Punjab.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "What happened to the 'Paramountcy' of the British Crown over Indian states on Aug 15, 1947?",
        options: ["It was transferred to India.", "It was transferred to Pakistan.", "It lapsed.", "It was extended by 10 years."],
        correctAnswer: 2,
        explanation: "Lapse of paramountcy meant states were legally sovereign for a brief period.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 34,
        question: "The 'States Ministry' was created in June 1947. Who was its head?",
        options: ["Nehru", "Patel", "Mountbatten", "Rajaji"],
        correctAnswer: 1,
        explanation: "Sardar Patel headed the ministry.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "Which of the following challenges was NOT faced by India in 1947?",
        options: ["Refugee Rehabilitation.", "Food Shortage.", "Integration of States.", "Over-abundance of foreign exchange."],
        correctAnswer: 3,
        explanation: "India was economically drained and faced huge debt and shortages.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    }
);

export const MODERN_CHAPTER_33_CONTENT = `
# Chapter 33: Challenges Before the New-born Nation

## BLOCK 1: THE PARTITION TRAUMA
*The Largest Migration in History.*

### 🚂 14 MILLION DISPLACED
**The Scale:** Approximately **14 to 16 million people** crossed the borders (West Pakistan to India, India to West Pakistan, East Pakistan to West Bengal).

**The Violence:**
- **Punjab:** The epicenter of violence. Complete ethnic cleansing occurred in West Punjab (Muslims stayed, Hindus/Sikhs left) and East Punjab (Hindus/Sikhs stayed, Muslims left).
- **Bengal:** The migration was slower and continued for years, unlike the sudden "exchange of population" in Punjab.

**The Death Toll:** Estimates range from 200,000 to 500,000 killed in communal riots.

---

## BLOCK 2: REHABILITATION OF REFUGEES
*Building from Ashes.*

### ⛺ KURUKSHETRA & PURANA QILA
**The Challenge:** Feeding and housing millions of destitute people.
**The Camps:** Massive camps were set up at **Kurukshetra** (holding 300,000 people) and **Purana Qila** (Delhi).

**Resettlement Policy:**
- **Rural:** Refugees were allotted "evacuee land" (land left behind by Muslims who went to Pakistan) based on a "standard acre" formula.
- **Urban:** New townships were built (e.g., **Faridabad, Nilokheri, Chandigarh**) to house urban refugees.

**Success:** By 1951, most refugees from West Pakistan were successfully resettled. Bengal refugees remained a lingering issue.

---

## BLOCK 3: ASSASSINATION OF GANDHI (Jan 30, 1948)
*The Light Goes Out.*

### 🕊️ THE LAST FAST
**Context:** Communal riots were raging in Delhi. Refugees were occupying mosques. Pakistan was owed **₹55 Crore** as its share of assets, which the Indian Govt withheld due to the Kashmir war.

**The Fast:** Gandhi undertook a fast unto death (Jan 13, 1948) demanding:
- Restoration of peace in Delhi.
- Payment of ₹55 Crore to Pakistan (moral obligation).

**The Assassination:** Angered by his "pro-Muslim" stance, **Nathuram Godse** shot him on **January 30, 1948** at Birla House.

**Impact:** The shock of his death actually stopped the riots. The RSS was banned temporarily, and communal passions cooled down in shame.

---

## BLOCK 4: THE COMMUNIST INSURGENCY (1948)
*The Internal Threat.*

### 🚩 "YEH AZAADI JHOOTHI HAI"
**The Slogan:** "This Freedom is False."
**The Stance:** Under **B.T. Ranadive**, the CPI declared that 1947 was not real independence but a deal between the British and the Indian bourgeoisie.

**The Revolt:** They launched violent armed struggles in **Telangana**, West Bengal (Kakdwip), and Travancore (Punnapra-Vayalar).

**Govt Response:** Nehru cracked down hard. Thousands were jailed. The CPI eventually abandoned the armed path in 1951 and joined the democratic process.

---

## BLOCK 5: DIVISION OF ASSETS
*Splitting the Furniture.*

### 💰 CASH & ARMY
**Financial Assets:** India agreed to give Pakistan **₹75 Crore** (₹20 Crore paid, ₹55 Crore withheld then paid).

**Military:** The British Indian Army was divided on communal lines (Muslim units to Pakistan, Non-Muslim to India). This chaos made handling the riots even harder as the police/army themselves were partisan.

**Civil Service:** 101 ICS officers opted for Pakistan; the rest stayed in India.
`;

