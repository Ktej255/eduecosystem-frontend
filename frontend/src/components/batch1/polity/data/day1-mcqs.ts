import type { MCQ } from './mcq-utils';
export type { MCQ };

export const DAY1_MCQS: MCQ[] = [
    // LEVEL 1: EASY (Direct Factual)
    {
        id: 1,
        question: "Which Act established the Supreme Court at Calcutta for the first time?",
        options: [
            "Charter Act of 1833",
            "Regulating Act of 1773",
            "Pitt’s India Act of 1784",
            "Charter Act of 1853"
        ],
        correctAnswer: 1, // B
        level: "Easy"
    },
    {
        id: 2,
        question: "Who was the first Governor-General of Bengal?",
        options: [
            "Lord William Bentinck",
            "Lord Warren Hastings",
            "Lord Canning",
            "Lord Cornwallis"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Regulating Act 1773"
    },
    {
        id: 3,
        question: "Which Act designated the Governor-General of Bengal as the 'Governor-General of India'?",
        options: [
            "Regulating Act of 1773",
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Government of India Act of 1858"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Charter Act 1833"
    },
    {
        id: 4,
        question: "The 'Board of Control' to manage political affairs was created by which Act?",
        options: [
            "Regulating Act of 1773",
            "Pitt’s India Act of 1784",
            "Charter Act of 1813",
            "Government of India Act of 1858"
        ],
        correctAnswer: 1, // B
        level: "Easy"
    },
    {
        id: 5,
        question: "Which Act ended the trade monopoly of the East India Company in India (except for tea and trade with China)?",
        options: [
            "Charter Act of 1813",
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Government of India Act of 1858"
        ],
        correctAnswer: 0,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Charter Act 1813"
    },
    {
        id: 6,
        question: "Who was the first Viceroy of India?",
        options: [
            "Lord Curzon",
            "Lord Canning",
            "Lord Bentinck",
            "Lord Mountbatten"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1858"
    },
    {
        id: 7,
        question: "The 'Portfolio System' was given statutory recognition by which Act?",
        options: [
            "Indian Councils Act of 1861",
            "Indian Councils Act of 1892",
            "Government of India Act of 1858",
            "Indian Councils Act of 1909"
        ],
        correctAnswer: 0,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Councils Act 1861"
    },
    {
        id: 8,
        question: "Which Act is popularly known as the 'Morley-Minto Reforms'?",
        options: [
            "Indian Councils Act of 1892",
            "Indian Councils Act of 1909",
            "Government of India Act of 1919",
            "Government of India Act of 1935"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Councils Act 1909"
    },
    {
        id: 9,
        question: "Which Act introduced 'Separate Electorates' for Muslims for the first time?",
        options: [
            "Act of 1909",
            "Act of 1919",
            "Act of 1935",
            "Act of 1892"
        ],
        correctAnswer: 0,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Councils Act 1909"
    },
    {
        id: 10,
        question: "The Reserve Bank of India was established under the provisions of which Act?",
        options: [
            "Government of India Act, 1919",
            "Government of India Act, 1935",
            "Indian Independence Act, 1947",
            "Regulating Act, 1773"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1935"
    },
    {
        id: 11,
        question: "Dyarchy was introduced in the Provinces by which Act?",
        options: [
            "Act of 1892",
            "Act of 1909",
            "Act of 1919",
            "Act of 1935"
        ],
        correctAnswer: 2,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1919"
    },
    {
        id: 12,
        question: "Which Act abolished the Doctrine of Lapse?",
        options: [
            "Government of India Act of 1858",
            "Indian Councils Act of 1861",
            "Indian Councils Act of 1892",
            "Government of India Act of 1919"
        ],
        correctAnswer: 0,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1858"
    },
    {
        id: 13,
        question: "Who was the first Indian to join the Viceroy’s Executive Council?",
        options: [
            "G.K. Gokhale",
            "Satyendra Prasad Sinha",
            "Dadabhai Naoroji",
            "Tej Bahadur Sapru"
        ],
        correctAnswer: 1, // B
        level: "Easy"
    },
    {
        id: 14,
        question: "The office of the 'High Commissioner for India' in London was created by:",
        options: [
            "Act of 1909",
            "Act of 1919",
            "Act of 1935",
            "Act of 1858"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1919"
    },
    {
        id: 15,
        question: "When was the 'Mountbatten Plan' accepted?",
        options: [
            "August 15, 1947",
            "June 3, 1947",
            "January 26, 1950",
            "February 20, 1947"
        ],
        correctAnswer: 1,
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Independence Act 1947"
    },
    // LEVEL 2: MODERATE
    {
        id: 16,
        question: "Consider the following statements regarding the Regulating Act of 1773:\n\n1. It made the Governors of Bombay and Madras independent of the Governor-General of Bengal.\n2. It established a Supreme Court at Calcutta.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect; they were made subordinate.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Regulating Act 1773"
    },
    {
        id: 17,
        question: "Which of the following features is associated with the Charter Act of 1833?\n\n1. It made the Governor-General of Bengal the Governor-General of India.\n2. It ended the commercial activities of the East India Company completely.\n3. It introduced an open competition for civil services.\n\nSelect the correct answer:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0,
        explanation: "Statement 3 is incorrect; the attempt was negated.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Charter Act 1833"
    },
    {
        id: 18,
        question: "The 'Double Government' system established by Pitt’s India Act of 1784 involved:",
        options: [
            "Board of Control and Viceroy's Council",
            "Court of Directors and Board of Control",
            "Governor-General and Chief Justice",
            "Legislative Council and Executive Council"
        ],
        correctAnswer: 1, // B
        level: "Moderate"
    },
    {
        id: 19,
        question: "With reference to the Government of India Act, 1858, consider the following:\n\n1. It ended the system of Double Government.\n2. It created a new office, Secretary of State for India, vested with complete authority over Indian administration.\n3. The Secretary of State was a member of the British Cabinet.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1858"
    },
    {
        id: 20,
        question: "Which Act empowered the Viceroy to issue ordinances, without the concurrence of the legislative council, during an emergency?",
        options: [
            "Indian Councils Act, 1861",
            "Indian Councils Act, 1892",
            "Indian Councils Act, 1909",
            "Government of India Act, 1919"
        ],
        correctAnswer: 0,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Councils Act 1861"
    },
    {
        id: 21,
        question: "Consider the following statements about the Indian Councils Act of 1892:\n\n1. It introduced the principle of election for the first time, though the word 'election' was not used.\n2. It gave the legislative councils the power of discussing the budget.\n\nWhich of the statements is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Indian Councils Act 1892"
    },
    {
        id: 22,
        question: "The term \"Dyarchy\" under the Act of 1919 referred to:",
        options: [
            "Division of subjects between Centre and Provinces.",
            "Division of Provincial subjects into Reserved and Transferred.",
            "Double rule by the British and Indian Rulers.",
            "Separation of Judiciary from Executive."
        ],
        correctAnswer: 1,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1919"
    },
    {
        id: 23,
        question: "Which of the following is NOT a feature of the Government of India Act, 1935?",
        options: [
            "Abolition of Dyarchy in the provinces.",
            "Introduction of Provincial Autonomy.",
            "Establishment of a Federal Court.",
            "Establishment of a Board of Control."
        ],
        correctAnswer: 3,
        explanation: "Board of Control was abolished in 1858.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1935"
    },
    {
        id: 24,
        question: "Consider the following pairs:\n\n1. Act of 1773: Supreme Court established.\n2. Act of 1813: Christian Missionaries allowed.\n3. Act of 1833: Law Member added to Governor-General's Council.\n\nWhich of the pairs given above is/are correctly matched?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Multiple Acts"
    },
    {
        id: 25,
        question: "The Communal Award (Separate Electorates) was extended to which of the following by the Act of 1919?\n\n1. Sikhs\n2. Indian Christians\n3. Anglo-Indians\n4. Europeans\n\nSelect the correct code:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 only",
            "1, 2, 3, and 4"
        ],
        correctAnswer: 3,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1919"
    },
    {
        id: 26,
        question: "Which Act for the first time separated the legislative and executive functions of the Governor-General’s Council?",
        options: [
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Indian Councils Act of 1861",
            "Indian Councils Act of 1892"
        ],
        correctAnswer: 1, // B
        level: "Moderate"
    },
    {
        id: 27,
        question: "Under the Government of India Act 1935, the Residuary Powers were given to:",
        options: [
            "Federal Legislature",
            "Provincial Legislature",
            "Viceroy (Governor-General)",
            "Federal Court"
        ],
        correctAnswer: 2,
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Constitutional History",
        subtopic: "Government of India Act 1935"
    },
    {
        id: 28,
        question: "The first attempt to introduce a representative and popular element in the governance of India was made through:",
        options: [
            "Indian Councils Act, 1861",
            "Indian Councils Act, 1892",
            "Indian Councils Act, 1909",
            "Government of India Act, 1919"
        ],
        correctAnswer: 2, // C
        explanation: "Though 1892 had indirect elections, 1909 officially recognized elections and expanded the scope significantly.",
        level: "Moderate"
    },
    {
        id: 29,
        question: "Consider the following regarding the Amending Act of 1781:\n\n1. It exempted the Governor-General and Council from the jurisdiction of the Supreme Court for official acts.\n2. It placed revenue matters under the jurisdiction of the Supreme Court.\n\nWhich is correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 0, // A
        explanation: "Statement 2 is incorrect; revenue matters were excluded.",
        level: "Moderate"
    },
    {
        id: 30,
        question: "Which Act explicitly defined the constitutional position of the British territories in India for the first time?",
        options: [
            "Regulating Act of 1773",
            "Pitt's India Act of 1784",
            "Charter Act of 1813",
            "Charter Act of 1833"
        ],
        correctAnswer: 2, // C
        level: "Moderate"
    },
    // LEVEL 3: TOUGH
    {
        id: 31,
        question: "Arrange the following events in chronological order:\n\n1. Appointment of Satyendra Prasad Sinha as Law Member.\n2. Introduction of Portfolio System.\n3. Establishment of Federal Court.\n4. Transfer of power from Company to Crown.\n\nCode:",
        options: [
            "4-2-1-3",
            "2-4-3-1",
            "4-1-2-3",
            "2-1-4-3"
        ],
        correctAnswer: 0, // A
        explanation: "1858 [Crown Rule] -> 1861 [Portfolio] -> 1909 [Sinha] -> 1937 [Federal Court]",
        level: "Tough"
    },
    {
        id: 32,
        question: "Assertion (A): The Government of India Act of 1919 introduced 'Dyarchy' at the Centre.\nReason (R): The Act aimed to establish a responsible government in India.\n\nSelect the correct answer:",
        options: [
            "Both A and R are true and R is the correct explanation of A.",
            "Both A and R are true but R is not the correct explanation of A.",
            "A is true but R is false.",
            "A is false but R is true."
        ],
        correctAnswer: 3, // D
        explanation: "Dyarchy was introduced in Provinces, not Centre. Bicameralism was at Centre.",
        level: "Tough"
    },
    {
        id: 33,
        question: "Which of the following statements is/are correct regarding the Charter Act of 1833?\n\n1. It deprived the Governors of Bombay and Madras of their legislative powers.\n2. The laws made under this Act were called 'Regulations'.\n3. It authorized the Government of India to issue licenses to private Indian merchants for trade with China.\n\nCode:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only"
        ],
        correctAnswer: 0, // A
        explanation: "Statement 2 is incorrect; they were called 'Acts'. Previous ones were 'Regulations'. Statement 3 is irrelevant/incorrect.",
        level: "Tough"
    },
    {
        id: 34,
        question: "With reference to the 'Instrument of Instructions' contained in the Government of India Act, 1935, which of the following is correct?",
        options: [
            "It was incorporated in the Constitution of India as Fundamental Rights.",
            "It was incorporated as Directive Principles of State Policy.",
            "It was a directive to the Governor-General regarding the dominion status.",
            "It was a list of subjects for the Central Legislature."
        ],
        correctAnswer: 1, // B
        explanation: "This links the historical act to the current Constitution.",
        level: "Tough"
    },
    {
        id: 35,
        question: "\"It provided for the establishment of an All-India Federation consisting of provinces and princely states as units. The Federation never came into being.\" This description refers to:",
        options: [
            "Indian Councils Act, 1909",
            "Government of India Act, 1919",
            "Government of India Act, 1935",
            "Indian Independence Act, 1947"
        ],
        correctAnswer: 2, // C
        level: "Tough"
    },
    {
        id: 36,
        question: "The 'Transferred Subjects' under the Act of 1919 included which of the following?\n\n1. Education\n2. Health\n3. Police\n4. Finance\n\nSelect the correct code:",
        options: [
            "1 and 2 only",
            "3 and 4 only",
            "1, 2, and 3 only",
            "2, 3, and 4 only"
        ],
        correctAnswer: 0, // A
        explanation: "Police and Finance were Reserved Subjects.",
        level: "Tough"
    },
    {
        id: 37,
        question: "Which Act empowered the Governor-General-in-Council to frame regulations for Provincial Courts and Councils, bypassing the Supreme Court?",
        options: [
            "Regulating Act, 1773",
            "Amending Act, 1781",
            "Pitt’s India Act, 1784",
            "Act of 1786"
        ],
        correctAnswer: 1, // B
        level: "Tough"
    },
    {
        id: 38,
        question: "Consider the following statements about the Act of 1786:\n\n1. It was enacted specifically to fulfill the demands of Lord Cornwallis.\n2. It allowed the Governor-General to override his council's decisions in special cases.\n3. It separated the office of Commander-in-Chief from that of the Governor-General.\n\nWhich is/are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0, // A
        explanation: "Statement 3 is incorrect; Cornwallis wanted to BE the Commander-in-Chief.",
        level: "Tough"
    },
    {
        id: 39,
        question: "Which of the following Acts allocated 'One Lakh Rupees' annually for the promotion of education in India?",
        options: [
            "Charter Act of 1793",
            "Charter Act of 1813",
            "Charter Act of 1833",
            "Wood’s Despatch, 1854"
        ],
        correctAnswer: 1, // B
        level: "Tough"
    },
    {
        id: 40,
        question: "Match List-I with List-II:\n\nList-I (Act)\nA. Charter Act 1853\nB. Charter Act 1833\nC. Act of 1858\nD. Act of 1909\n\nList-II (Provision)\n1. Separation of Executive & Legislature\n2. Abolition of EIC as commercial body\n3. Separate Electorates\n4. Abolition of Board of Control\n\nCode (A-B-C-D):",
        options: [
            "1-2-4-3",
            "2-1-3-4",
            "1-2-3-4",
            "4-3-2-1"
        ],
        correctAnswer: 0, // A
        level: "Tough"
    },
    {
        id: 41,
        question: "Regarding the Indian Independence Act of 1947, which statement is INCORRECT?",
        options: [
            "It abolished the office of the Secretary of State for India.",
            "It granted freedom to Indian princely states to join either dominion or remain independent.",
            "It declared India as a sovereign state from Jan 26, 1950.",
            "It designated the Governor-General of India and provincial governors as constitutional (nominal) heads."
        ],
        correctAnswer: 2, // C
        explanation: "It declared India independent from Aug 15, 1947, not 1950.",
        level: "Tough"
    },
    {
        id: 42,
        question: "The \"Centralization\" of administration in British India started with which Act and reached its peak with which Act?",
        options: [
            "Started: 1773; Peak: 1833",
            "Started: 1784; Peak: 1853",
            "Started: 1773; Peak: 1858",
            "Started: 1833; Peak: 1919"
        ],
        correctAnswer: 0, // A
        level: "Tough"
    },
    {
        id: 43,
        question: "Which Act provided for the appointment of a separate Governor for the Bengal Presidency, relieving the Governor-General of India of this burden?",
        options: [
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Indian Councils Act of 1861",
            "Government of India Act of 1919"
        ],
        correctAnswer: 1, // B
        explanation: "1853 Act authorized this to separate general Govt of India from local Govt of Bengal.",
        level: "Tough"
    },
    {
        id: 44,
        question: "The system of 'Budget' was introduced in British India in 1860. Which Act formally gave the Legislative Council the power to discuss the Budget?",
        options: [
            "Indian Councils Act, 1861",
            "Indian Councils Act, 1892",
            "Indian Councils Act, 1909",
            "Government of India Act of 1919"
        ],
        correctAnswer: 1, // B
        level: "Tough"
    },
    {
        id: 45,
        question: "Consider the following regarding the 1919 Act:\n\n1. It introduced bicameralism at the Centre.\n2. It introduced direct elections in the country.\n3. It extended the franchise to all women in India.\n\nWhich is/are correct?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1, // B
        explanation: "Statement 3 is incorrect; franchise was limited by property, tax, or education.",
        level: "Tough"
    },
    {
        id: 46,
        question: "The proposal for the 'Constituent Assembly' was first put forward by M.N. Roy in 1934. Which Act finally empowered the Constituent Assembly to frame and adopt any constitution?",
        options: [
            "August Offer, 1940",
            "Cripps Mission, 1942",
            "Cabinet Mission Plan, 1946",
            "Indian Independence Act, 1947"
        ],
        correctAnswer: 3, // D
        level: "Tough"
    },
    {
        id: 47,
        question: "Why was the \"Simon Commission\" (1927) boycotted by Indians?",
        options: [
            "It proposed the partition of India.",
            "It recommended the abolition of Dyarchy.",
            "There was no Indian member in the commission.",
            "It was appointed before the scheduled time of 10 years."
        ],
        correctAnswer: 2, // C
        explanation: "General Historical Knowledge/Context.",
        level: "Tough"
    },
    {
        id: 48,
        question: "Which Act separated provincial budgets from the Central budget for the first time?",
        options: [
            "Act of 1909",
            "Act of 1919",
            "Act of 1935",
            "Act of 1892"
        ],
        correctAnswer: 1, // B
        explanation: "1919 Act authorized provinces to enact their own budgets.",
        level: "Tough"
    },
    {
        id: 49,
        question: "The demand for 'Purna Swaraj' was adopted in the Lahore Session (1929). Which Act was termed by JL Nehru as \"A car with all brakes and no engine\"?",
        options: [
            "Act of 1909",
            "Act of 1919",
            "Act of 1935",
            "Indian Independence Act, 1947"
        ],
        correctAnswer: 2, // C
        explanation: "Famous historical quote regarding the 1935 Act.",
        level: "Tough"
    },
    {
        id: 50,
        question: "Which Act provided for the establishment of a Joint Public Service Commission for two or more provinces?",
        options: [
            "Act of 1919",
            "Act of 1935",
            "Act of 1909",
            "Act of 1858"
        ],
        correctAnswer: 1, // B
        level: "Tough"
    }
];
