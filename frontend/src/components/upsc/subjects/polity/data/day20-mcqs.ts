import type { MCQ } from './mcq-utils';

export const DAY20_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 20)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which Article of the Constitution deals with the status of the council of ministers?",
        options: [
            "Article 74",
            "Article 75",
            "Article 77",
            "Article 78"
        ],
        correctAnswer: 0, // A
        explanation: "Article 74 deals with the status of the council of ministers while Article 75 deals with the appointment, tenure, responsibility, qualification, oath and salaries and allowances of the ministers.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 2,
        question: "Who is the real executive authority in the parliamentary system of government in India?",
        options: [
            "The President",
            "The Parliament",
            "The Council of Ministers headed by the Prime Minister",
            "The Supreme Court"
        ],
        correctAnswer: 2, // C
        explanation: "As the Constitution of India provides for a parliamentary system of government modelled on the British pattern, the council of ministers headed by the prime minister is the real executive authority is our politico-administrative system.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 3,
        question: "According to Article 74, who shall act in accordance with the advice of the Council of Ministers?",
        options: [
            "The Prime Minister",
            "The Chief Justice of India",
            "The President",
            "The Speaker"
        ],
        correctAnswer: 2, // C
        explanation: "Article 74: There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 4,
        question: "Can the President ask the Council of Ministers to reconsider their advice?",
        options: [
            "No, the advice is final the first time.",
            "Yes, but only once; and the President must act in accordance with the reconsidered advice.",
            "Yes, he can return it as many times as he likes.",
            "Yes, but only if the Supreme Court agrees."
        ],
        correctAnswer: 1, // B
        explanation: "However, the President may require the Council of Ministers to reconsider such advice and the President shall act in accordance with the advice tendered after such reconsideration.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 5,
        question: "Can any court in India inquire into the advice tendered by Ministers to the President?",
        options: [
            "Yes, the Supreme Court can inquire into it.",
            "Yes, any High Court can inquire into it.",
            "No, the question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.",
            "Yes, if it violates Fundamental Rights."
        ],
        correctAnswer: 2, // C
        explanation: "The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 6,
        question: "According to Article 75, who appoints the Prime Minister?",
        options: [
            "The Parliament",
            "The Chief Justice of India",
            "The President",
            "The outgoing Prime Minister"
        ],
        correctAnswer: 2, // C
        explanation: "Article 75: The Prime Minister shall be appointed by the President...",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 7,
        question: "How are the other Ministers appointed?",
        options: [
            "By the Prime Minister directly.",
            "By the Parliament.",
            "By the President on the advice of the Prime Minister.",
            "By the Chief Justice of India."
        ],
        correctAnswer: 2, // C
        explanation: "...and the other Ministers shall be appointed by the President on the advice of the Prime Minister.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 8,
        question: "What is the maximum limit on the total number of ministers, including the Prime Minister, in the Council of Ministers?",
        options: [
            "10% of the total strength of the Lok Sabha.",
            "15% of the total strength of the Parliament (both Houses).",
            "15% of the total strength of the Lok Sabha.",
            "There is no constitutional limit."
        ],
        correctAnswer: 2, // C
        explanation: "The total number of ministers, including the Prime Minister, in the Council of Ministers shall not exceed 15% of the total strength of the Lok Sabha.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 9,
        question: "Which Constitutional Amendment Act added the provision limiting the size of the Council of Ministers to 15% of the Lok Sabha?",
        options: [
            "42nd Amendment Act of 1976",
            "44th Amendment Act of 1978",
            "91st Amendment Act of 2003",
            "97th Amendment Act of 2011"
        ],
        correctAnswer: 2, // C
        explanation: "This [15% limit] provision was added by the 91st Amendment Act of 2003.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 10,
        question: "If a member of Parliament is disqualified on the ground of defection, can they still be appointed as a minister?",
        options: [
            "Yes, but only as a Minister of State.",
            "No, a member disqualified on the ground of defection shall also be disqualified to be appointed as a minister.",
            "Yes, if the Prime Minister insists.",
            "Yes, for a maximum of 6 months."
        ],
        correctAnswer: 1, // B
        explanation: "A member of either house of Parliament belonging to any political party who is disqualified on the ground of defection shall also be disqualified to be appointed as a minister.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 11,
        question: "During whose pleasure do the ministers hold office?",
        options: [
            "The Prime Minister",
            "The Parliament",
            "The President",
            "The Supreme Court"
        ],
        correctAnswer: 2, // C
        explanation: "The ministers shall hold office during the pleasure of the President.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 12,
        question: "To which body is the Council of Ministers COLLECTIVELY responsible?",
        options: [
            "The President",
            "The Rajya Sabha",
            "The Parliament as a whole",
            "The Lok Sabha"
        ],
        correctAnswer: 3, // D
        explanation: "The council of ministers shall be collectively responsible to the Lok Sabha.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 13,
        question: "Who administers the oaths of office and secrecy to a minister?",
        options: [
            "The Prime Minister",
            "The Chief Justice of India",
            "The President",
            "The Speaker"
        ],
        correctAnswer: 2, // C
        explanation: "The President shall administer the oaths of office and secrecy to a minister.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 14,
        question: "What happens if a minister is NOT a member of either House of Parliament for six consecutive months?",
        options: [
            "They remain a minister but cannot vote.",
            "They cease to be a minister.",
            "They must pay a fine.",
            "Their term is extended by the President."
        ],
        correctAnswer: 1, // B
        explanation: "A minister who is not a member of the Parliament (either house) for any period of six consecutive months shall cease to be a minister.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 15,
        question: "Who determines the salaries and allowances of ministers?",
        options: [
            "The President",
            "The Prime Minister",
            "The Parliament",
            "The Finance Commission"
        ],
        correctAnswer: 2, // C
        explanation: "The salaries and allowances of ministers shall be determined by the Parliament.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 16,
        question: "According to Article 77, all executive action of the Government of India shall be expressed to be taken in the name of the:",
        options: [
            "Prime Minister",
            "Government of India",
            "President",
            "Parliament"
        ],
        correctAnswer: 2, // C
        explanation: "Article 77: All executive action of the Government of India shall be expressed to be taken in the name of the President.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 17,
        question: "Who makes rules for the more convenient transaction of the business of the Government of India, and for the allocation of business among Ministers?",
        options: [
            "The Prime Minister",
            "The Parliament",
            "The President",
            "The Cabinet Secretary"
        ],
        correctAnswer: 2, // C
        explanation: "The President shall make rules for the more convenient transaction of the business of the Government of India, and for the allocation among Ministers of the said business.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 18,
        question: "What does the principle of 'collective responsibility' imply when a no-confidence motion is passed in the Lok Sabha?",
        options: [
            "Only the Prime Minister has to resign.",
            "Only the minister responsible for the specific failure has to resign.",
            "All the ministers, including those from the Rajya Sabha, have to resign.",
            "The Parliament is automatically dissolved."
        ],
        correctAnswer: 2, // C
        explanation: "When the Lok Sabha passes a no-confidence motion against the council of ministers, all the ministers have to resign including those ministers who are from the Rajya Sabha.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 19,
        question: "Besides collective responsibility, what other type of responsibility does Article 75 contain?",
        options: [
            "Financial Responsibility",
            "Legal Responsibility",
            "Individual Responsibility",
            "Moral Responsibility"
        ],
        correctAnswer: 2, // C
        explanation: "Article 75 also contains the principle of individual responsibility. It states that the ministers hold office during the pleasure of the president, which means that the President can remove a minister even at a time when the council of ministers enjoys the confidence of the Lok Sabha.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 20,
        question: "If a minister disagrees with a cabinet decision and is not prepared to defend it in Parliament, what is they constitutionally expected to do?",
        options: [
            "Vote against it in Parliament secretly.",
            "Resign.",
            "Publicly criticize the decision but stay in the cabinet.",
            "Appeal to the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "If any minister disagrees with a cabinet decision and is not prepared to defend it, he must resign.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 21,
        question: "Does the Indian Constitution provide for the legal responsibility of a minister regarding Presidential orders?",
        options: [
            "Yes, every order of the President requires a minister's counter-signature.",
            "No, there is no provision in the Constitution for the system of legal responsibility of a minister.",
            "Yes, ministers are legally immune from all actions.",
            "Yes, if the order violates a fundamental right."
        ],
        correctAnswer: 1, // B
        explanation: "In India, there is no provision in the Constitution for the system of legal responsibility of a minister. It is not required that an order of the President for a public act should be countersigned by a minister.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 22,
        question: "Which of the following describes the 'Cabinet' as opposed to the larger 'Council of Ministers'?",
        options: [
            "It is a larger body than the Council.",
            "It consists of all three categories of ministers (Cabinet, State, Deputy).",
            "It is a smaller body consisting of only cabinet ministers, about 15 to 20 in number.",
            "It never meets as a body to transact government business."
        ],
        correctAnswer: 2, // C
        explanation: "It [the Cabinet] is a smaller body consisting of 15 to 20 ministers. It includes the cabinet ministers only.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 23,
        question: "Which category of ministers are given independent charge of ministries/departments or attached to cabinet ministers?",
        options: [
            "Cabinet Ministers",
            "Ministers of State",
            "Deputy Ministers",
            "Parliamentary Secretaries"
        ],
        correctAnswer: 1, // B
        explanation: "The ministers of state can either be given independent charge of ministries/ departments or can be attached to cabinet ministers.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 24,
        question: "Are Deputy Ministers given independent charge of departments?",
        options: [
            "Yes, very frequently.",
            "No, they are not given independent charge of departments or ministries.",
            "Yes, but only in the Home Ministry.",
            "Yes, but only if they are from the Rajya Sabha."
        ],
        correctAnswer: 1, // B
        explanation: "Next in rank are the deputy ministers. They are not given independent charge of departments or ministries. They are attached to the cabinet ministers or ministers of state and assist them...",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 25,
        question: "Do Ministers of State generally attend Cabinet meetings?",
        options: [
            "Yes, always.",
            "No, they do not attend the cabinet meetings unless specially invited when something related to their ministries/departments is considered by the cabinet.",
            "Yes, but they cannot vote.",
            "Only if the PM is absent."
        ],
        correctAnswer: 1, // B
        explanation: "They [Ministers of State] are not members of the cabinet and do not attend the cabinet meetings unless specially invited when something related to their ministries/departments is considered by the cabinet.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 26,
        question: "Which of the following is the highest decision-making authority in our politico-administrative system?",
        options: [
            "The Parliament",
            "The Supreme Court",
            "The Cabinet",
            "The National Development Council"
        ],
        correctAnswer: 2, // C
        explanation: "Role of Cabinet: 1. It is the highest decision-making authority in our politico-administrative system.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 27,
        question: "Was the word 'Cabinet' originally present in the text of the Constitution of India?",
        options: [
            "Yes, it was in Article 74.",
            "Yes, it was in Article 75.",
            "No, it was not there in the original text of the Constitution.",
            "Yes, it was defined in the Preamble."
        ],
        correctAnswer: 2, // C
        explanation: "It was inserted in Article 352 of the Constitution in 1978 by the 44th Constitutional Amendment Act. Thus, it did not find a place in the original text of the Constitution.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 28,
        question: "Which body's decisions are binding on all ministers?",
        options: [
            "The Parliament as a whole",
            "The Council of Ministers",
            "The Cabinet",
            "The Inter-State Council"
        ],
        correctAnswer: 2, // C
        explanation: "Distinction between Council of Ministers and Cabinet... Cabinet: It meets, as a body, frequently and usually once in a week to deliberate and take decisions regarding the transaction of government business... Its decisions bind on all ministers.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 29,
        question: "Who is the chief crisis manager in the politico-administrative system of India?",
        options: [
            "The Home Secretary",
            "The Cabinet",
            "The Prime Minister solely",
            "The President"
        ],
        correctAnswer: 1, // B
        explanation: "Role of Cabinet... 5. It is the chief crisis manager and thus deals with all emergency situations.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    },
    {
        id: 30,
        question: "What is an 'Inner Cabinet' or 'Kitchen Cabinet'?",
        options: [
            "A subset of bureaucrats managing food supply.",
            "An informal body consisting of the Prime Minister and two to four influential colleagues in whom he has faith and with whom he can discuss every problem.",
            "A formal sub-committee appointed by the President.",
            "The lowest tier of ministers (Deputy Ministers)."
        ],
        correctAnswer: 1, // B
        explanation: "It is an informal body consisting of the Prime Minister and two to four influential colleagues in whom he has faith and with whom he can discuss every problem. It advises the prime minister on important political and administrative issues and assists him in making crucial decisions.",
        level: "Easy", topic: "Central Council of Ministers", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Central Council of Ministers" }
    }
];
