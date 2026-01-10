// Chapter 1: Historical Background - Flashcards
// Source: Laxmikanth Indian Polity

export interface Flashcard {
    id: number;
    chapterId: number;
    question: string;
    answer: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const CHAPTER_1_FLASHCARDS: Flashcard[] = [
    // COMPANY RULE (1773-1858)
    {
        id: 1,
        chapterId: 1,
        question: "When did the East India Company get the Diwani of Bengal, Bihar, and Orissa?",
        answer: "1765 - The Mughal Emperor Shah Alam granted Diwani after the Battle of Buxar (1764)",
        category: "Dates",
        difficulty: "medium"
    },
    {
        id: 2,
        chapterId: 1,
        question: "What was the significance of the Regulating Act of 1773?",
        answer: "1) First step by British Parliament to control East India Company\n2) Recognized political & administrative functions of the Company\n3) Laid foundation of central administration in India\n4) Created Governor-General of Bengal with Executive Council of 4 members",
        category: "Acts",
        difficulty: "medium"
    },
    {
        id: 3,
        chapterId: 1,
        question: "Who was the first Governor-General of Bengal?",
        answer: "Lord Warren Hastings (appointed under Regulating Act of 1773)",
        category: "Persons",
        difficulty: "easy"
    },
    {
        id: 4,
        chapterId: 1,
        question: "When was the Supreme Court established at Calcutta?",
        answer: "1774 - comprising one Chief Justice and three other judges (under Regulating Act 1773)",
        category: "Dates",
        difficulty: "medium"
    },
    {
        id: 5,
        chapterId: 1,
        question: "What system was introduced by Pitt's India Act of 1784?",
        answer: "System of Double Government - Court of Directors (commercial affairs) + Board of Control (political affairs)",
        category: "Acts",
        difficulty: "medium"
    },
    {
        id: 6,
        chapterId: 1,
        question: "Which Act first called Company's territories 'British possessions in India'?",
        answer: "Pitt's India Act of 1784",
        category: "Acts",
        difficulty: "hard"
    },
    {
        id: 7,
        chapterId: 1,
        question: "Which Act made the Governor-General of Bengal as the Governor-General of India?",
        answer: "Charter Act of 1833 - Lord William Bentick became the first Governor-General of India",
        category: "Acts",
        difficulty: "easy"
    },
    {
        id: 8,
        chapterId: 1,
        question: "Which Act ended the trade monopoly of East India Company in India?",
        answer: "Charter Act of 1813 - but continued monopoly over tea trade and trade with China",
        category: "Acts",
        difficulty: "medium"
    },
    {
        id: 9,
        chapterId: 1,
        question: "Which Act introduced open competition for civil services and local representation in Indian Legislative Council?",
        answer: "Charter Act of 1853 - also separated legislative and executive functions of Governor-General's council for the first time",
        category: "Acts",
        difficulty: "hard"
    },
    {
        id: 10,
        chapterId: 1,
        question: "What is the difference between Regulations and Acts in British India?",
        answer: "Laws under acts before 1833 were called Regulations; Laws under Charter Act of 1833 onwards were called Acts",
        category: "Concepts",
        difficulty: "hard"
    },

    // CROWN RULE (1858-1947)
    {
        id: 11,
        chapterId: 1,
        question: "Which event led to the end of Company Rule and beginning of Crown Rule?",
        answer: "The Revolt of 1857 (Sepoy Mutiny / First War of Independence)",
        category: "Events",
        difficulty: "easy"
    },
    {
        id: 12,
        chapterId: 1,
        question: "Who was the first Viceroy of India?",
        answer: "Lord Canning (under Government of India Act of 1858 - designation changed from Governor-General)",
        category: "Persons",
        difficulty: "easy"
    },
    {
        id: 13,
        chapterId: 1,
        question: "Which Act introduced 'Dyarchy' in the provinces?",
        answer: "Government of India Act of 1919 (Montagu-Chelmsford Reforms) - divided provincial subjects into Transferred and Reserved",
        category: "Acts",
        difficulty: "medium"
    },
    {
        id: 14,
        chapterId: 1,
        question: "Who is known as the 'Father of Communal Electorate'?",
        answer: "Lord Minto - Indian Councils Act of 1909 introduced separate electorate for Muslims",
        category: "Persons",
        difficulty: "medium"
    },
    {
        id: 15,
        chapterId: 1,
        question: "Which Act introduced bicameralism and direct elections for the first time in India?",
        answer: "Government of India Act of 1919 - created Council of State (Upper House) and Legislative Assembly (Lower House)",
        category: "Acts",
        difficulty: "medium"
    },
    {
        id: 16,
        chapterId: 1,
        question: "When was the Central Public Service Commission established?",
        answer: "1926 (provision made in Government of India Act of 1919)",
        category: "Dates",
        difficulty: "medium"
    },
    {
        id: 17,
        chapterId: 1,
        question: "What were the three lists in Government of India Act of 1935?",
        answer: "1) Federal List - 59 items (Centre)\n2) Provincial List - 54 items (States)\n3) Concurrent List - 36 items (Both)\nResiduary powers given to Viceroy",
        category: "Acts",
        difficulty: "hard"
    },
    {
        id: 18,
        chapterId: 1,
        question: "How many provisions of GoI Act 1935 are included in our Constitution?",
        answer: "About 250 provisions - it is the most important single source of the Indian Constitution",
        category: "Facts",
        difficulty: "hard"
    },
    {
        id: 19,
        chapterId: 1,
        question: "When was the Federal Court established under GoI Act 1935?",
        answer: "1937",
        category: "Dates",
        difficulty: "medium"
    },
    {
        id: 20,
        chapterId: 1,
        question: "What was the Poona Pact?",
        answer: "Agreement between Congress and Dr. B.R. Ambedkar in 1932 - retained Hindu joint electorate but gave reserved seats to depressed classes (instead of separate electorate in Communal Award)",
        category: "Events",
        difficulty: "hard"
    },
    {
        id: 21,
        chapterId: 1,
        question: "When did British rule end in India?",
        answer: "Midnight of August 14-15, 1947 (Indian Independence Act 1947 came into force)",
        category: "Dates",
        difficulty: "easy"
    },
    {
        id: 22,
        chapterId: 1,
        question: "Who was the first Governor-General of independent India?",
        answer: "Lord Mountbatten (sworn in Jawaharlal Nehru as first Prime Minister)",
        category: "Persons",
        difficulty: "easy"
    },
    {
        id: 23,
        chapterId: 1,
        question: "Who was the first Indian member of Viceroy's Executive Council?",
        answer: "Satyendra Prasad Sinha - appointed as Law Member under Indian Councils Act 1909",
        category: "Persons",
        difficulty: "hard"
    },
    {
        id: 24,
        chapterId: 1,
        question: "Which Act abolished the Council of India?",
        answer: "Government of India Act of 1935",
        category: "Acts",
        difficulty: "hard"
    },
    {
        id: 25,
        chapterId: 1,
        question: "Who headed the Boundary Commission that determined boundaries between India and Pakistan?",
        answer: "Radcliff",
        category: "Persons",
        difficulty: "medium"
    }
];

export default CHAPTER_1_FLASHCARDS;
