// Chapter 1: Historical Background - MCQs
// Source: Laxmikanth Indian Polity - UPSC Prelims Pattern

export interface MCQ {
    id: number;
    chapterId: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const CHAPTER_1_MCQS: MCQ[] = [
    // COMPANY RULE ERA
    {
        id: 1,
        chapterId: 1,
        question: "The Regulating Act of 1773 was significant because:",
        options: [
            "It abolished the East India Company",
            "It was the first step by British Parliament to control the Company's affairs in India",
            "It introduced direct elections in India",
            "It created the post of Viceroy"
        ],
        correctAnswer: 1,
        explanation: "The Regulating Act of 1773 was the first step taken by the British Government to control and regulate the affairs of the East India Company in India. It recognized the political and administrative functions of the Company.",
        difficulty: "easy"
    },
    {
        id: 2,
        chapterId: 1,
        question: "Who was the first Governor-General of Bengal?",
        options: [
            "Lord Cornwallis",
            "Lord William Bentick",
            "Lord Warren Hastings",
            "Lord Canning"
        ],
        correctAnswer: 2,
        explanation: "Lord Warren Hastings was the first Governor-General of Bengal, appointed under the Regulating Act of 1773.",
        difficulty: "easy"
    },
    {
        id: 3,
        chapterId: 1,
        question: "The Supreme Court at Calcutta was established in which year?",
        options: [
            "1773",
            "1774",
            "1784",
            "1793"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court at Calcutta was established in 1774 under the provisions of the Regulating Act of 1773, comprising one Chief Justice and three other judges.",
        difficulty: "medium"
    },
    {
        id: 4,
        chapterId: 1,
        question: "Pitt's India Act of 1784 introduced which system of governance?",
        options: [
            "Single Government",
            "Double Government",
            "Dyarchy",
            "Provincial Autonomy"
        ],
        correctAnswer: 1,
        explanation: "Pitt's India Act of 1784 established a system of Double Government - Court of Directors managed commercial affairs while Board of Control managed political affairs.",
        difficulty: "medium"
    },
    {
        id: 5,
        chapterId: 1,
        question: "Which Act first used the term 'British possessions in India'?",
        options: [
            "Regulating Act of 1773",
            "Pitt's India Act of 1784",
            "Charter Act of 1833",
            "Government of India Act of 1858"
        ],
        correctAnswer: 1,
        explanation: "Pitt's India Act of 1784 was significant because the Company's territories were for the first time called 'British possessions in India'.",
        difficulty: "hard"
    },
    {
        id: 6,
        chapterId: 1,
        question: "The Charter Act of 1813 is significant for:",
        options: [
            "Ending the trade monopoly of the East India Company in India",
            "Creating the post of Governor-General of India",
            "Introducing open competition for civil services",
            "Establishing the Supreme Court"
        ],
        correctAnswer: 0,
        explanation: "The Charter Act of 1813 abolished the trade monopoly of the Company in India, opening Indian trade to all British merchants. However, it continued the monopoly over tea trade and trade with China.",
        difficulty: "medium"
    },
    {
        id: 7,
        chapterId: 1,
        question: "Who was the first Governor-General of India?",
        options: [
            "Lord Warren Hastings",
            "Lord William Bentick",
            "Lord Cornwallis",
            "Lord Canning"
        ],
        correctAnswer: 1,
        explanation: "Lord William Bentick was the first Governor-General of India. The Charter Act of 1833 made the Governor-General of Bengal as the Governor-General of India.",
        difficulty: "easy"
    },
    {
        id: 8,
        chapterId: 1,
        question: "The Charter Act of 1833 is known as the 'final step towards centralisation' because it:",
        options: [
            "Established the Supreme Court",
            "Deprived Governors of Bombay and Madras of their legislative powers",
            "Introduced dyarchy in provinces",
            "Created separate electorates"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1833 deprived the Governors of Bombay and Madras of their legislative powers and gave exclusive legislative powers to the Governor-General of India for the entire British India.",
        difficulty: "hard"
    },
    {
        id: 9,
        chapterId: 1,
        question: "Which Act for the first time separated the legislative and executive functions of the Governor-General's Council?",
        options: [
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Government of India Act of 1858",
            "Indian Councils Act of 1861"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1853 separated the legislative and executive functions of the Governor-General's Council for the first time. It created a separate legislative council known as the Indian (Central) Legislative Council.",
        difficulty: "medium"
    },
    {
        id: 10,
        chapterId: 1,
        question: "Open competition system for civil services was introduced by:",
        options: [
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Government of India Act of 1858",
            "Indian Councils Act of 1861"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1853 introduced an open competition system of selection and recruitment of civil servants. The Macaulay Committee was appointed in 1854 for this purpose.",
        difficulty: "medium"
    },

    // CROWN RULE ERA
    {
        id: 11,
        chapterId: 1,
        question: "The Government of India Act of 1858 was enacted in the wake of:",
        options: [
            "The First World War",
            "The Revolt of 1857",
            "The Quit India Movement",
            "The Salt Satyagraha"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1858 was enacted in the wake of the Revolt of 1857-also known as the First War of Independence or the 'sepoy mutiny'.",
        difficulty: "easy"
    },
    {
        id: 12,
        chapterId: 1,
        question: "Who was the first Viceroy of India?",
        options: [
            "Lord Mountbatten",
            "Lord Curzon",
            "Lord Canning",
            "Lord Minto"
        ],
        correctAnswer: 2,
        explanation: "Lord Canning became the first Viceroy of India under the Government of India Act of 1858, which changed the designation of Governor-General of India to Viceroy of India.",
        difficulty: "easy"
    },
    {
        id: 13,
        chapterId: 1,
        question: "The portfolio system in India was introduced by:",
        options: [
            "Lord Cornwallis",
            "Lord Canning",
            "Lord Curzon",
            "Lord Minto"
        ],
        correctAnswer: 1,
        explanation: "Lord Canning introduced the portfolio system in 1859. The Indian Councils Act of 1861 gave recognition to the portfolio system.",
        difficulty: "hard"
    },
    {
        id: 14,
        chapterId: 1,
        question: "Which Act is known for 'legalising communalism' in India?",
        options: [
            "Indian Councils Act of 1892",
            "Indian Councils Act of 1909",
            "Government of India Act of 1919",
            "Government of India Act of 1935"
        ],
        correctAnswer: 1,
        explanation: "The Indian Councils Act of 1909 (Morley-Minto Reforms) introduced a system of communal representation for Muslims by accepting the concept of 'separate electorate'. Lord Minto is known as the 'Father of Communal Electorate'.",
        difficulty: "medium"
    },
    {
        id: 15,
        chapterId: 1,
        question: "Who was the first Indian to join the Viceroy's Executive Council?",
        options: [
            "Dadabhai Naoroji",
            "Satyendra Prasad Sinha",
            "Gopal Krishna Gokhale",
            "Bal Gangadhar Tilak"
        ],
        correctAnswer: 1,
        explanation: "Satyendra Prasad Sinha became the first Indian to join the Viceroy's Executive Council. He was appointed as the Law Member under the Indian Councils Act of 1909.",
        difficulty: "medium"
    },
    {
        id: 16,
        chapterId: 1,
        question: "The system of 'Dyarchy' was introduced by:",
        options: [
            "Indian Councils Act of 1909",
            "Government of India Act of 1919",
            "Government of India Act of 1935",
            "Indian Independence Act of 1947"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1919 (Montagu-Chelmsford Reforms) introduced dyarchy in provinces. Provincial subjects were divided into Transferred and Reserved categories.",
        difficulty: "easy"
    },
    {
        id: 17,
        chapterId: 1,
        question: "Bicameralism was introduced in India for the first time by:",
        options: [
            "Indian Councils Act of 1909",
            "Government of India Act of 1919",
            "Government of India Act of 1935",
            "Constitution of India, 1950"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1919 introduced bicameralism and direct elections in India for the first time. The Indian Legislative Council was replaced by a bicameral legislature-Council of State (Upper House) and Legislative Assembly (Lower House).",
        difficulty: "medium"
    },
    {
        id: 18,
        chapterId: 1,
        question: "The Central Public Service Commission was established in:",
        options: [
            "1919",
            "1926",
            "1935",
            "1937"
        ],
        correctAnswer: 1,
        explanation: "The Central Public Service Commission was set up in 1926 as per the provision made in the Government of India Act of 1919.",
        difficulty: "medium"
    },
    {
        id: 19,
        chapterId: 1,
        question: "Who headed the Simon Commission?",
        options: [
            "Lord Simon",
            "Sir John Simon",
            "Lord Mountbatten",
            "Sir Stafford Cripps"
        ],
        correctAnswer: 1,
        explanation: "The Simon Commission was a seven-member statutory commission appointed under the chairmanship of Sir John Simon in November 1927.",
        difficulty: "easy"
    },
    {
        id: 20,
        chapterId: 1,
        question: "The Communal Award of 1932 was announced by:",
        options: [
            "Lord Irwin",
            "Ramsay MacDonald",
            "Sir John Simon",
            "Lord Mountbatten"
        ],
        correctAnswer: 1,
        explanation: "The Communal Award was announced in August 1932 by Ramsay MacDonald, the British Prime Minister. It extended separate electorates to the depressed classes.",
        difficulty: "hard"
    },
    {
        id: 21,
        chapterId: 1,
        question: "The Poona Pact was signed between:",
        options: [
            "Congress and Muslim League",
            "Congress and Dr. B.R. Ambedkar",
            "British Government and Indian National Congress",
            "Hindu Mahasabha and Muslim League"
        ],
        correctAnswer: 1,
        explanation: "The Poona Pact was an agreement between the Congress and Dr. B.R. Ambedkar in 1932. It retained the Hindu joint electorate but gave reserved seats to the depressed classes.",
        difficulty: "medium"
    },
    {
        id: 22,
        chapterId: 1,
        question: "The Government of India Act of 1935 provided for the establishment of:",
        options: [
            "Supreme Court",
            "Federal Court",
            "High Courts",
            "Privy Council"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1935 provided for the establishment of a Federal Court, which was set up in 1937.",
        difficulty: "medium"
    },
    {
        id: 23,
        chapterId: 1,
        question: "How many subjects were included in the Federal List under the Government of India Act of 1935?",
        options: [
            "47",
            "54",
            "59",
            "66"
        ],
        correctAnswer: 2,
        explanation: "Under the Government of India Act of 1935, the Federal List contained 59 items, Provincial List had 54 items, and Concurrent List had 36 items.",
        difficulty: "hard"
    },
    {
        id: 24,
        chapterId: 1,
        question: "Which Act abolished the Council of India?",
        options: [
            "Government of India Act of 1919",
            "Government of India Act of 1935",
            "Indian Independence Act of 1947",
            "Indian Councils Act of 1909"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1935 abolished the Council of India, which was established by the Government of India Act of 1858.",
        difficulty: "hard"
    },
    {
        id: 25,
        chapterId: 1,
        question: "The Reserve Bank of India was established under the provisions of:",
        options: [
            "Government of India Act of 1919",
            "Government of India Act of 1935",
            "Indian Independence Act of 1947",
            "Reserve Bank of India Act of 1934"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act of 1935 provided for the establishment of a Reserve Bank of India to control the currency and credit of the country.",
        difficulty: "medium"
    },
    {
        id: 26,
        chapterId: 1,
        question: "Provincial autonomy was introduced by which Act?",
        options: [
            "Indian Councils Act of 1909",
            "Government of India Act of 1919",
            "Government of India Act of 1935",
            "Indian Independence Act of 1947"
        ],
        correctAnswer: 2,
        explanation: "The Government of India Act of 1935 abolished dyarchy in provinces and introduced 'provincial autonomy' in its place. The provinces were allowed to act as autonomous units in their defined spheres.",
        difficulty: "medium"
    },
    {
        id: 27,
        chapterId: 1,
        question: "The Mountbatten Plan was announced on:",
        options: [
            "March 24, 1947",
            "June 3, 1947",
            "August 15, 1947",
            "January 26, 1950"
        ],
        correctAnswer: 1,
        explanation: "The Mountbatten Plan (partition plan) was announced on June 3, 1947. It was accepted by both the Congress and the Muslim League.",
        difficulty: "medium"
    },
    {
        id: 28,
        chapterId: 1,
        question: "The Indian Independence Act came into force on:",
        options: [
            "July 18, 1947",
            "August 15, 1947",
            "January 26, 1950",
            "November 26, 1949"
        ],
        correctAnswer: 1,
        explanation: "The Indian Independence Act came into force on August 15, 1947, ending the British rule in India and creating two independent dominions-India and Pakistan.",
        difficulty: "easy"
    },
    {
        id: 29,
        chapterId: 1,
        question: "Who was the first Governor-General of independent India?",
        options: [
            "C. Rajagopalachari",
            "Dr. Rajendra Prasad",
            "Lord Mountbatten",
            "Jawaharlal Nehru"
        ],
        correctAnswer: 2,
        explanation: "Lord Mountbatten became the first Governor-General of the new Dominion of India. He swore in Jawaharlal Nehru as the first Prime Minister of independent India.",
        difficulty: "easy"
    },
    {
        id: 30,
        chapterId: 1,
        question: "Who was the last British Governor-General of India?",
        options: [
            "Lord Irwin",
            "Lord Linlithgow",
            "Lord Wavell",
            "Lord Mountbatten"
        ],
        correctAnswer: 3,
        explanation: "Lord Mountbatten was the last Viceroy of British India and also served as the first Governor-General of independent India until June 1948.",
        difficulty: "medium"
    },
    {
        id: 31,
        chapterId: 1,
        question: "The boundaries of India and Pakistan were determined by:",
        options: [
            "Simon Commission",
            "Radcliff Commission",
            "Mountbatten Commission",
            "Cabinet Mission"
        ],
        correctAnswer: 1,
        explanation: "The boundaries between the two Dominions were determined by a Boundary Commission headed by Radcliff.",
        difficulty: "medium"
    },
    {
        id: 32,
        chapterId: 1,
        question: "Consider the following statements about the Charter Act of 1833:\n1. It made Governor-General of Bengal as Governor-General of India\n2. It ended activities of East India Company as a commercial body\n3. It introduced open competition for civil services\nWhich of the above statements are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 0,
        explanation: "Statements 1 and 2 are correct. Open competition for civil services was introduced by the Charter Act of 1853, not 1833. The Charter Act of 1833 only attempted to introduce it but was negated after opposition from Court of Directors.",
        difficulty: "hard"
    },
    {
        id: 33,
        chapterId: 1,
        question: "Who among the following was the Law Member in the first Cabinet of Independent India?",
        options: [
            "Sardar Vallabhbhai Patel",
            "Maulana Abul Kalam Azad",
            "Dr. B.R. Ambedkar",
            "Dr. Rajendra Prasad"
        ],
        correctAnswer: 2,
        explanation: "Dr. B.R. Ambedkar was the Law Member in the first Cabinet of Independent India (1947).",
        difficulty: "medium"
    },
    {
        id: 34,
        chapterId: 1,
        question: "Consider the following about Indian Councils Act of 1861:\n1. It initiated decentralisation by restoring legislative powers to Bombay and Madras\n2. It provided for establishment of High Courts\n3. It empowered Viceroy to issue ordinances during emergency\nWhich of the above are correct?",
        options: [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 3 are correct. The Act initiated decentralisation and empowered the Viceroy to issue ordinances (life: 6 months). High Courts were established under the Indian High Courts Act of 1861, not the Indian Councils Act of 1861.",
        difficulty: "hard"
    },
    {
        id: 35,
        chapterId: 1,
        question: "Match the following Acts with their features:\nA. Regulating Act 1773 - 1. First Governor-General of Bengal\nB. Charter Act 1833 - 2. First Governor-General of India\nC. GoI Act 1858 - 3. First Viceroy of India",
        options: [
            "A-1, B-2, C-3",
            "A-2, B-1, C-3",
            "A-1, B-3, C-2",
            "A-3, B-2, C-1"
        ],
        correctAnswer: 0,
        explanation: "Regulating Act 1773 created the post of Governor-General of Bengal (Warren Hastings). Charter Act 1833 created Governor-General of India (William Bentick). GoI Act 1858 changed designation to Viceroy (Lord Canning).",
        difficulty: "medium"
    },
    {
        id: 36,
        chapterId: 1,
        question: "Which of the following statements about Government of India Act 1935 is/are correct?\n1. It provided for an All-India Federation\n2. The Federation actually came into being\n3. It introduced dyarchy at the Centre",
        options: [
            "1 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "The Act provided for an All-India Federation and dyarchy at the Centre, but neither came into operation. The Federation never came into being as princely states did not join it.",
        difficulty: "hard"
    },
    {
        id: 37,
        chapterId: 1,
        question: "The Indian Independence Act of 1947 provided that:",
        options: [
            "India would remain a dominion forever",
            "The princely states must join either India or Pakistan",
            "British Parliament could not legislate for India after August 15, 1947",
            "Viceroy would continue to head both the dominions"
        ],
        correctAnswer: 2,
        explanation: "The Indian Independence Act provided that no Act of the British Parliament passed after August 15, 1947 would extend to either of the new dominions unless extended by a law of the legislature of the dominion.",
        difficulty: "hard"
    },
    {
        id: 38,
        chapterId: 1,
        question: "How many provisions of the Government of India Act, 1935 have been incorporated in the Indian Constitution?",
        options: [
            "About 150",
            "About 200",
            "About 250",
            "About 300"
        ],
        correctAnswer: 2,
        explanation: "About 250 provisions of the Government of India Act, 1935 have been incorporated in the Indian Constitution. It is the single most important source of the Indian Constitution.",
        difficulty: "medium"
    },
    {
        id: 39,
        chapterId: 1,
        question: "Which portfolio was held by Sardar Vallabhbhai Patel in the first Cabinet of Independent India?",
        options: [
            "External Affairs",
            "Home, Information and Broadcasting; States",
            "Defence",
            "Finance"
        ],
        correctAnswer: 1,
        explanation: "Sardar Vallabhbhai Patel held the portfolios of Home, Information and Broadcasting, and States in the first Cabinet of Independent India (1947).",
        difficulty: "hard"
    },
    {
        id: 40,
        chapterId: 1,
        question: "Arrange the following Acts in chronological order:\n1. Pitt's India Act\n2. Regulating Act\n3. Charter Act 1833\n4. Charter Act 1813",
        options: [
            "2-1-4-3",
            "2-1-3-4",
            "1-2-4-3",
            "1-2-3-4"
        ],
        correctAnswer: 0,
        explanation: "The correct chronological order is: Regulating Act (1773) → Pitt's India Act (1784) → Charter Act 1813 → Charter Act 1833.",
        difficulty: "medium"
    }
];

export default CHAPTER_1_MCQS;
