import { MCQ } from '../mcq-utils';

/**
 * CENTRAL MCQ REPOSITORY
 * This is the single source of truth for all Polity MCQs.
 * UIDs are stable and based on Chapter (PO-CHxx-nnn).
 */
export const MCQ_REPOSITORY: Record<string, MCQ> = {
    "PO-CH01-001": {
        id: "PO-CH01-001",
        chapterId: 1,
        question: "In 1765, the East India Company obtained the 'diwani' rights. Which of the following provinces were included in this grant?",
        options: [
            "Bengal, Bombay, and Madras",
            "Bengal, Bihar, and Orissa",
            "Madras, Mysore, and Hyderabad",
            "Bengal, Awadh, and Punjab"
        ],
        correctAnswer: 1,
        explanation: "In 1765, the Company obtained the 'diwani' (rights over revenue and civil justice) of Bengal, Bihar and Orissa.",
        difficulty: "easy",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-002": {
        id: "PO-CH01-002",
        chapterId: 1,
        question: "The Regulating Act of 1773 was significant because:",
        options: [
            "It abolished the East India Company",
            "It was the first step by British Parliament to control the Company's affairs in India",
            "It introduced direct elections in India",
            "It created the post of Viceroy"
        ],
        correctAnswer: 1,
        explanation: "The Regulating Act of 1773 was the first step taken by the British Government to control and regulate the affairs of the East India Company in India.",
        difficulty: "easy",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-003": {
        id: "PO-CH01-003",
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
        difficulty: "easy",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-004": {
        id: "PO-CH01-004",
        chapterId: 1,
        question: "The Supreme Court at Calcutta was established in which year?",
        options: [
            "1773",
            "1774",
            "1784",
            "1793"
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court at Calcutta was established in 1774 under the provisions of the Regulating Act of 1773.",
        difficulty: "medium",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-005": {
        id: "PO-CH01-005",
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
        difficulty: "medium",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-006": {
        id: "PO-CH01-006",
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
        difficulty: "hard",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    "PO-CH01-007": {
        id: "PO-CH01-007",
        chapterId: 1,
        question: "The Charter Act of 1813 is significant for:",
        options: [
            "Ending the trade monopoly of the East India Company in India",
            "Creating the post of Governor-General of India",
            "Introducing open competition for civil services",
            "Establishing the Supreme Court"
        ],
        correctAnswer: 0,
        explanation: "The Charter Act of 1813 abolished the trade monopoly of the Company in India, opening Indian trade to all British merchants.",
        difficulty: "hard",
        topic: "Historical Background",
        source_mapping: { book: "M. Laxmikanth", chapter: "Historical Background" }
    },
    // CHAPTER 11: AMENDMENT OF THE CONSTITUTION
    "PO-CH11-001": {
        id: "PO-CH11-001",
        chapterId: 11,
        question: "A Constitutional Amendment Bill seeking to change the 'Election of the President' (Article 54 & 55) requires:",
        options: [
            "Special majority of Parliament only",
            "Special majority of Parliament and ratification by all States",
            "Special majority of Parliament and ratification by half of the States",
            "Simple majority of Parliament and consent of States"
        ],
        correctAnswer: 2,
        explanation: "Federal provisions like the election of the President require special majority of Parliament + ratification by half of the state legislatures by simple majority.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-002": {
        id: "PO-CH11-002",
        chapterId: 11,
        question: "Which of the following can be amended by a simple majority of Parliament?",
        options: [
            "Fundamental Rights",
            "Directive Principles of State Policy",
            "Salaries and allowances of Members of Parliament",
            "Representation of states in Parliament"
        ],
        correctAnswer: 2,
        explanation: "Salaries of MPs, rules of procedure, and creation of legislative councils are amended by simple majority. FRs and DPSPs require special majority.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-003": {
        id: "PO-CH11-003",
        chapterId: 11,
        question: "In which year was the 24th Amendment Act passed, making it obligatory for the President to give assent to Constitutional Amendment Bills?",
        options: ["1951", "1971", "1976", "1978"],
        correctAnswer: 1,
        explanation: "The 24th Amendment Act of 1971 made it mandatory for the President to give his assent to a constitutional amendment bill.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-004": {
        id: "PO-CH11-004",
        chapterId: 11,
        question: "If a Constitutional Amendment Bill is introduced by a Private Member of Parliament:",
        options: [
            "It cannot be passed",
            "It requires prior recommendation of the President",
            "It follows the same procedure as a Bill introduced by a Minister",
            "It can only be introduced in the Lok Sabha"
        ],
        correctAnswer: 2,
        explanation: "A constitutional amendment bill can be introduced by either a minister or a private member and doesn't require prior recommendation of the President.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-005": {
        id: "PO-CH11-005",
        chapterId: 11,
        question: "Which of the following is NOT correct about the amendment procedure under Article 368?",
        options: [
            "The bill must be passed in each house by special majority",
            "The President can return the bill for reconsideration",
            "State legislatures cannot initiate an amendment",
            "There is no provision for a joint sitting"
        ],
        correctAnswer: 1,
        explanation: "The President cannot return the bill; he must give his assent.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-006": {
        id: "PO-CH11-006",
        chapterId: 11,
        question: "The 'Special Majority' required for amending Fundamental Rights involves:",
        options: [
            "2/3rd of total membership of the House",
            "Majority of total membership and 2/3rd of members present and voting",
            "Majority of members present and voting and half of States",
            "Majority of total membership and ratification by half of states"
        ],
        correctAnswer: 1,
        explanation: "Special majority = >50% of total membership AND 2/3rd of members present and voting.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-007": {
        id: "PO-CH11-007",
        chapterId: 11,
        question: "Any change in the 'Seventh Schedule' of the Constitution requires:",
        options: [
            "Special Majority of Parliament",
            "Special Majority of Parliament + Consent of Half of States",
            "Simple Majority of Parliament",
            "Special Majority of Parliament + Consent of All States"
        ],
        correctAnswer: 1,
        explanation: "The Seventh Schedule (distribution of powers) is a federal provision and requires ratification by half of the states.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-008": {
        id: "PO-CH11-008",
        chapterId: 11,
        question: "Article 368 itself can be amended by:",
        options: [
            "Special Majority of Parliament",
            "Special Majority of Parliament + Consent of half of states",
            "Parliament alone by simple majority",
            "It cannot be amended"
        ],
        correctAnswer: 1,
        explanation: "Article 368 is considered a federal provision and requires ratification by states for its own amendment.",
        difficulty: "hard",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    "PO-CH11-009": {
        id: "PO-CH11-009",
        chapterId: 11,
        question: "Which of the following requires ratification by half of the state legislatures?",
        options: [
            "Directive Principles of State Policy",
            "Goods and Services Tax (GST) Council",
            "Fundamental Duties",
            "Citizenship provisions"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "GST Council (Article 279A) affects the federal structure and thus requires ratification by states.",
        difficulty: "Tough",
        source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },

    // CHAPTER 12: BASIC STRUCTURE
    "PO-CH12-001": {
        id: "PO-CH12-001",
        chapterId: 12,
        question: "In which of the following cases did the Supreme Court first mention that there are certain 'basic features' of the Constitution which cannot be amended?",
        options: ["Sajjan Singh case", "Golaknath case", "Kesavananda Bharati case", "Minerva Mills case"],
        correctAnswer: 2,
        explanation: "The doctrine of 'Basic Structure' was propounded in the Kesavananda Bharati case (1973).",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure" }
    },
    "PO-CH12-002": {
        id: "PO-CH12-002",
        chapterId: 12,
        question: "According to the Supreme Court in the Minerva Mills case, the Indian Constitution is founded on the bedrock of the balance between:",
        options: [
            "Union and States",
            "Parliament and Judiciary",
            "Fundamental Rights and Directive Principles",
            "Legislature and Executive"
        ],
        correctAnswer: 2,
        explanation: "The SC held that the balance between FRs and DPSPs is a basic feature of the Constitution.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure" }
    },
    "PO-CH12-003": {
        id: "PO-CH12-003",
        chapterId: 12,
        question: "Which Constitutional Amendment's validity was challenged in the Kesavananda Bharati case?",
        options: ["24th Amendment", "25th Amendment", "29th Amendment", "All of the above"],
        correctAnswer: 3,
        explanation: "The 24th, 25th, and 29th Amendments were challenged in this landmark case.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure" }
    },
    "PO-CH12-004": {
        id: "PO-CH12-004",
        chapterId: 12,
        question: "Which of the following is NOT an element of 'Basic Structure' of the Constitution?",
        options: ["Secularism", "Parliamentary system", "Presidential system", "Rule of Law"],
        correctAnswer: 2,
        explanation: "India has a Parliamentary system which is a basic feature. Presidential system is not part of the Indian Constitution.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure" }
    },
    "PO-CH12-005": {
        id: "PO-CH12-005",
        chapterId: 12,
        question: "The doctrine of 'Basic Structure' limits the power of which of the following?",
        options: [
            "Judicial Review of Supreme Court",
            "Amending Power of Parliament under Article 368",
            "Power of the President",
            "Legislative powers of State Assemblies"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "The doctrine puts a limitation on the amending power of the Parliament—it cannot destroy the basic structure.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure" }
    },

    // CHAPTER 13: PARLIAMENTARY SYSTEM
    "PO-CH13-001": {
        id: "PO-CH13-001",
        chapterId: 13,
        question: "The 'Collective Responsibility' of the cabinet is to:",
        options: ["The President", "The Parliament", "The Lok Sabha", "The Prime Minister"],
        correctAnswer: 2,
        explanation: "Article 75 clearly states that the council of ministers is collectively responsible to the Lok Sabha.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    "PO-CH13-002": {
        id: "PO-CH13-002",
        chapterId: 13,
        question: "Which of the following is NOT a feature of the Presidential system?",
        options: [
            "Single executive",
            "Responsibility to the legislature",
            "Fixed tenure",
            "Separation of powers"
        ],
        correctAnswer: 1,
        explanation: "In a presidential system (like USA), the executive is not responsible to the legislature for its policies and acts.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    "PO-CH13-003": {
        id: "PO-CH13-003",
        chapterId: 13,
        question: "The Indian Parliamentary system is based on the:",
        options: ["American model", "British model", "Swiss model", "French model"],
        correctAnswer: 1,
        explanation: "India adopted the Westminster model from Britain, though with some changes.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    "PO-CH13-004": {
        id: "PO-CH13-004",
        chapterId: 13,
        question: "Which of the following is NOT a feature of the Parliamentary System of government in India?",
        options: [
            "Presence of nominal and real executives",
            "Majority party rule",
            "Dissolution of the Upper House",
            "Collective responsibility of the executive"
        ],
        correctIndex: 2,
        correctAnswer: 2,
        explanation: "The Rajya Sabha (Upper House) is a permanent body and is not subject to dissolution. Only the Lok Sabha (Lower House) can be dissolved.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    "PO-CH13-005": {
        id: "PO-CH13-005",
        chapterId: 13,
        question: "The 'Double Membership' is a feature of which system?",
        options: [
            "Presidential System",
            "Parliamentary System",
            "Federal System",
            "Unitary System"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "In a Parliamentary system, ministers are members of both the legislature and the executive.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },

    // CHAPTER 14: FEDERAL SYSTEM
    "PO-CH14-001": {
        id: "PO-CH14-001",
        chapterId: 14,
        question: "The Indian Federal system is based on the Canadian model. Which of the following is NOT a feature of the Canadian model?",
        options: [
            "Formation by way of disintegration.",
            "Appointment of governors by the Centre.",
            "Vesting of residuary powers in the Centre.",
            "Equal representation of states in the Upper House."
        ],
        correctIndex: 3,
        correctAnswer: 3,
        explanation: "Equal representation of states in the Upper House is a feature of the US Federation. In Canada (and India), states are not equally represented.",
        difficulty: "Tough",
        source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    "PO-CH14-002": {
        id: "PO-CH14-002",
        chapterId: 14,
        question: "Which of the following is a UNITARY feature of the Indian Constitution?",
        options: [
            "Written Constitution",
            "Rigidity of Constitution",
            "Destructible states",
            "Independent Judiciary"
        ],
        correctIndex: 2,
        correctAnswer: 2,
        explanation: "The Parliament can unilaterally alter the area, boundaries or name of any state (Article 3), making states destructible. This is a unitary feature.",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    "PO-CH14-003": {
        id: "PO-CH14-003",
        chapterId: 14,
        question: "Who described the Indian Constitution as 'Bargaining Federalism'?",
        options: [
            "K.C. Wheare",
            "Morris Jones",
            "Granville Austin",
            "Ivor Jennings"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "Morris Jones described it as 'Bargaining Federalism'. K.C. Wheare called it 'Quasi-federal'.",
        difficulty: "Tough",
        source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    "PO-CH14-004": {
        id: "PO-CH14-004",
        chapterId: 14,
        question: "Article 1 of the Constitution describes India as a:",
        options: [
            "Federation of States",
            "Union of States",
            "Confederation of States",
            "United States of India"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "Article 1 states: 'India, that is Bharat, shall be a Union of States'.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },

    // CHAPTER 15: CENTRE-STATE RELATIONS
    "PO-CH15-001": {
        id: "PO-CH15-001",
        chapterId: 15,
        question: "Which of the following matters is NOT included in the Union List?",
        options: [
            "Defence",
            "Banking",
            "Foreign Affairs",
            "Public Order"
        ],
        correctIndex: 3,
        correctAnswer: 3,
        explanation: "Public Order (and Police) is a subject in the State List.",
        difficulty: "easy",
        source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    "PO-CH15-002": {
        id: "PO-CH15-002",
        chapterId: 15,
        question: "Under Article 249, who has the power to authorize Parliament to make a law on a State subject?",
        options: [
            "The President",
            "The Lok Sabha",
            "The Rajya Sabha",
            "The State Legislatures"
        ],
        correctIndex: 2,
        correctAnswer: 2,
        explanation: "The Rajya Sabha can authorize Parliament to legislate on a state subject in national interest by passing a resolution with 2/3rd majority.",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    "PO-CH15-003": {
        id: "PO-CH15-003",
        chapterId: 15,
        question: "In case of a conflict between a Central Law and a State Law on a Concurrent Subject, the State Law prevails if:",
        options: [
            "It was passed before the Central Law.",
            "It has received the assent of the President.",
            "The Supreme Court declares so.",
            "The Governor gives special permission."
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "If a State law on a concurrent subject has received the assent of the President, it prevails in that state over the Central law.",
        difficulty: "Tough",
        source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    "PO-CH15-004": {
        id: "PO-CH15-004",
        chapterId: 15,
        question: "Which Commission was appointed in 1983 to review Centre-State relations?",
        options: [
            "Punchhi Commission",
            "Sarkaria Commission",
            "Rajamannar Committee",
            "Anandpur Sahib Resolution"
        ],
        correctIndex: 1,
        correctAnswer: 1,
        explanation: "The Sarkaria Commission was appointed in 1983. Punchhi Commission was in 2007.",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },

    // CHAPTER 16: INTER-STATE RELATIONS
    "PO-CH16-001": {
        id: "PO-CH16-001",
        chapterId: 16,
        question: "Under Article 262, who has the power to adjudicate inter-state water disputes?",
        options: [
            "Supreme Court",
            "President of India",
            "Parliament by Law",
            "Inter-State Council"
        ],
        correctAnswer: 2,
        explanation: "Article 262 empowers Parliament to provide for the adjudication of any dispute or complaint with respect to the use, distribution or control of the waters of any inter-state river.",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    "PO-CH16-002": {
        id: "PO-CH16-002",
        chapterId: 16,
        question: "Which of the following bodies is/are established under Article 263 of the Constitution?",
        options: [
            "Inter-State Council only",
            "Inter-State Council and Zonal Councils",
            "Inter-State Council and Central Council of Health",
            "Zonal Councils only"
        ],
        correctAnswer: 2,
        explanation: "Inter-State Council and Central Council of Health are established under Article 263. Zonal Councils are statutory bodies.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    "PO-CH16-003": {
        id: "PO-CH16-003",
        chapterId: 16,
        question: "Regarding 'Zonal Councils', consider the following statements:\n1. They are constitutional bodies established to promote cooperative federalism.\n2. The Union Home Minister is the common chairman of all Zonal Councils.\n3. The Chief Ministers of the States included in each zone act as Vice-Chairman by rotation.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Zonal Councils are STATUTORY bodies established by the States Reorganisation Act, 1956.",
        difficulty: "medium",
        source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },

    // CHAPTER 17: EMERGENCY PROVISIONS
    "PO-CH17-001": {
        id: "PO-CH17-001",
        chapterId: 17,
        question: "A proclamation of National Emergency must be approved by both Houses of Parliament within:",
        options: [
            "One Month",
            "Two Months",
            "Six Months",
            "Fourteen Days"
        ],
        correctIndex: 0,
        correctAnswer: 0,
        explanation: "Originally it was two months, but the 44th Amendment Act of 1978 reduced the period to one month.",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    "PO-CH17-002": {
        id: "PO-CH17-002",
        chapterId: 17,
        question: "What is the maximum period for which President's Rule can be extended in a state with Election Commission certification?",
        options: [
            "One Year",
            "Two Years",
            "Three Years",
            "Six Months"
        ],
        correctIndex: 2,
        correctAnswer: 2,
        explanation: "The maximum period is three years. However, beyond one year, it can be extended by six months at a time only if two conditions (Emergency + EC certificate) are met.",
        difficulty: "Tough",
        source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    "PO-CH17-003": {
        id: "PO-CH17-003",
        chapterId: 17,
        question: "Which of the following Fundamental Rights cannot be suspended even during a National Emergency?",
        options: ["Articles 14 and 15", "Articles 19 and 20", "Articles 20 and 21", "Articles 21 and 22"],
        correctAnswer: 2,
        explanation: "Articles 20 and 21 cannot be suspended even during an emergency (44th Amendment Act).",
        difficulty: "Moderate",
        source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    }


};

/**
 * Helper to get MCQs by Chapter
 */
export const getMCQsByChapter = (chapterId: number): MCQ[] => {
    return Object.values(MCQ_REPOSITORY).filter(m => m.chapterId === chapterId);
};

/**
 * Helper to get MCQs for a specific set of Subtopic IDs
 */
export const getMCQsBySubtopics = (subtopicIds: string[]): MCQ[] => {
    return Object.values(MCQ_REPOSITORY).filter(m => m.subtopicId && subtopicIds.includes(m.subtopicId));
};
