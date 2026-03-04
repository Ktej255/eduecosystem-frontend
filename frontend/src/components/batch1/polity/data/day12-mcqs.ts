import type { MCQ } from './mcq-utils';

export const DAY12_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 12)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which Articles of the Indian Constitution deal with the parliamentary system at the Centre?",
        options: ["Articles 74 and 75", "Articles 163 and 164", "Articles 52 and 53", "Articles 148 and 149"],
        correctAnswer: 0, // A
        explanation: "Articles 74 and 75 deal with the parliamentary system at the Centre, while Articles 163 and 164 deal with it in the states.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 2,
        question: "A parliamentary system is based on the principle of:",
        options: [
            "Strict separation of powers between the legislature and executive.",
            "Cooperation and co-ordination between the legislative and executive organs.",
            "Supremacy of the judiciary over the executive.",
            "Direct election of the head of state by the people."
        ],
        correctAnswer: 1, // B
        explanation: "The parliamentary system is based on the principle of cooperation and co-ordination between the legislative and executive organs, unlike the presidential system which is based on the separation of powers.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 3,
        question: "What is another common name for the parliamentary system of government?",
        options: ["Presidential system", "Non-responsible government", "Cabinet government", "Fixed executive system"],
        correctAnswer: 2, // C
        explanation: "The parliamentary system is also known as cabinet government or responsible government or Westminster model of government.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 4,
        question: "In the Indian parliamentary system, who is the 'nominal executive' (de jure executive)?",
        options: ["The Prime Minister", "The Chief Justice of India", "The President", "The Speaker of Lok Sabha"],
        correctAnswer: 2, // C
        explanation: "In India, the President is the nominal executive (de jure executive or titular executive) while the Prime Minister is the real executive (de facto executive).",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 5,
        question: "In the context of the parliamentary system, the term 'Real Executive' refers to:",
        options: ["The President", "The Prime Minister and the Council of Ministers", "The Parliament as a whole", "The Supreme Court"],
        correctAnswer: 1, // B
        explanation: "The Prime Minister (along with the Council of Ministers) is the real executive (de facto executive), exercising actual power.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 6,
        question: "Article 75 of the Indian Constitution states that the Council of Ministers is collectively responsible to:",
        options: ["The President", "The Prime Minister", "The Parliament in general", "The Lok Sabha (House of the People) in particular"],
        correctAnswer: 3, // D
        explanation: "Article 75 states that the council of ministers is collectively responsible to the Parliament in general and to the Lok Sabha in particular.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 7,
        question: "What happens in a parliamentary system if the Lok Sabha passes a 'No-Confidence Motion'?",
        options: [
            "Only the Prime Minister must resign.",
            "The entire Council of Ministers must resign.",
            "The President must dissolve the Lok Sabha immediately but the ministers remain.",
            "A national referendum is held."
        ],
        correctAnswer: 1, // B
        explanation: "Collective responsibility means they swim and sink together. If the Lok Sabha passes a vote of no-confidence, the entire council of ministers must resign.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 8,
        question: "Which of the following is a key feature of the Indian Parliamentary system regarding the membership of ministers?",
        options: [
            "Ministers must not be members of Parliament.",
            "A person cannot be a minister even for a day if they are not an MP.",
            "The ministers are members of both the legislature and the executive.",
            "Ministers are chosen exclusively from the civil services."
        ],
        correctAnswer: 2, // C
        explanation: "A key feature is 'Double Membership': The ministers are members of both the legislature and the executive. A person cannot remain a minister for more than six consecutive months without becoming an MP.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 9,
        question: "In a parliamentary system, who plays the leadership role over the Council of Ministers, the Parliament, and the ruling party?",
        options: ["The President", "The Speaker", "The Prime Minister", "The Vice-President"],
        correctAnswer: 2, // C
        explanation: "The Prime Minister plays the leadership role in this system of government. He is the leader of the council of ministers, leader of the Parliament, and leader of the party in power.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 10,
        question: "The lower house of the Indian Parliament (Lok Sabha) can be dissolved by the President on the advice of:",
        options: ["The Chief Justice of India", "The Prime Minister", "The Speaker of the Lok Sabha", "The Rajya Sabha"],
        correctAnswer: 1, // B
        explanation: "The lower house of the Parliament (Lok Sabha) can be dissolved by the President on recommendation of the Prime Minister, even before the expiry of its term.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 11,
        question: "Which of the following describes the principle of 'Secrecy' in the Indian parliamentary system?",
        options: [
            "Members of Parliament cannot speak to the press.",
            "The opposition is not allowed to know the budget details.",
            "Ministers operate on the principle of secrecy of procedure and cannot divulge information about cabinet proceedings, policies, and decisions.",
            "The Constitution itself is a secret document."
        ],
        correctAnswer: 2, // C
        explanation: "Ministers operate on the principle of secrecy of procedure and cannot divulge information about cabinet proceedings. They take an oath of secrecy administered by the President.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 12,
        question: "While India adopted the British parliamentary system, there is a fundamental difference between the head of the state in India and Britain. What is it?",
        options: [
            "India has a monarch; Britain has an elected President.",
            "India has an elected head (Republic); Britain has a hereditary head (Monarchy).",
            "In India, the head of state is the Prime Minister.",
            "There is no difference; both are hereditary monarchs."
        ],
        correctAnswer: 1, // B
        explanation: "India has a republican system in place of the British monarchical system. The Head of the State in India (President) is elected, while in Britain, the Head of the State (King/Queen) enjoys a hereditary position.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 13,
        question: "Another major difference between the Indian and British parliamentary systems is the concept of 'Parliamentary Sovereignty'. Which of the following is true?",
        options: [
            "The Indian Parliament is fully sovereign like the British Parliament.",
            "The British Parliament is sovereign, but the Indian Parliament is NOT supreme/sovereign; its powers are limited by a written Constitution, federalism, judicial review, and fundamental rights.",
            "Neither Parliament is sovereign; they are both subordinate to the UN.",
            "The Indian Parliament only makes laws for states, not the Union."
        ],
        correctAnswer: 1, // B
        explanation: "The British system is based on the doctrine of the sovereignty of Parliament, while the Parliament is not supreme in India due to a written Constitution, federal system, judicial review, and fundamental rights.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 14,
        question: "In Britain, there is a concept of 'legal responsibility of the minister' where the minister countersigns official acts of the Head of State. Does India have a similar system of legal responsibility of a minister?",
        options: [
            "Yes, every order of the President must be countersigned by a minister.",
            "No, India has no system of legal responsibility of a minister; the President's orders do not require counter-signature by a minister.",
            "Yes, but only for financial bills.",
            "Yes, the Prime Minister countersigns all acts of the Lok Sabha."
        ],
        correctAnswer: 1, // B
        explanation: "In Britain, the minister who countersigns an order is legally responsible for it. In India, unlike Britain, there is no system of legal responsibility of a minister. It is not required that an order of the President for a public act should be countersigned by a minister.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 15,
        question: "In Britain, it is a convention that the Prime Minister MUST be a member of the Lower House (House of Commons). What is the rule in India?",
        options: [
            "The PM in India must also invariably belong to the Lok Sabha.",
            "The PM in India must belong to the Rajya Sabha.",
            "The PM in India can be a member of either House of Parliament (Lok Sabha or Rajya Sabha).",
            "The PM in India cannot be a member of either House."
        ],
        correctAnswer: 2, // C
        explanation: "In India, the Prime Minister may be a member of any of the two Houses of Parliament (e.g., Indira Gandhi, Manmohan Singh from Rajya Sabha). In Britain, the PM should definitely be a member of the Lower House.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 16,
        question: "Can a person who is NOT a Member of Parliament (MP) be appointed as a minister in India?",
        options: [
            "No, it is strictly forbidden.",
            "Yes, they can be a minister indefinitely.",
            "Yes, but they can remain a minister for a maximum period of six months without becoming an MP.",
            "Yes, but only if they are nominated by the Supreme Court."
        ],
        correctAnswer: 2, // C
        explanation: "In India, a person who is not a member of Parliament can be appointed as minister for a maximum period of six months. In Britain, members of Parliament alone are appointed as ministers.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 17,
        question: "Which of the following systems is characterized by the 'separation of powers' between the executive and legislative branches?",
        options: [
            "Parliamentary System",
            "Presidential System",
            "Cabinet System",
            "Westminster System"
        ],
        correctAnswer: 1, // B
        explanation: "The presidential system of government (like in the USA) is based on the doctrine of separation of powers between the two organs—the executive and the legislature.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 18,
        question: "A significant demerit of the Parliamentary system, often highlighted by critics, is:",
        options: [
            "It prevents harmony between the legislature and executive.",
            "It leads to a highly stable government that cannot be removed.",
            "It can lead to unstable governments and a sudden change in policies when the ruling party loses its majority.",
            "It establishes an irreversible autocracy of the President."
        ],
        correctAnswer: 2, // C
        explanation: "Demerits of the parliamentary system include: Unstable Government (mercy of majority votes), No Continuity of Policies (due to changing governments), and Government by Amateurs.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 19,
        question: "In contrast to the parliamentary system, the Presidential system (like the USA) offers what major advantage?",
        options: [
            "More responsibility to the legislature.",
            "Greater harmony between the executive and legislative branches.",
            "A highly stable government for the entire fixed term.",
            "The ability of the legislature to easily remove the President on political grounds."
        ],
        correctAnswer: 2, // C
        explanation: "The presidential system offers a 'stable government' (the President and secretaries are appointed for a fixed term and aren't dependent on legislative majority) and 'continuity in policies', which are considered demerits in the parliamentary system.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 20,
        question: "The concept of 'Shadow Cabinet', an institution formed by the opposition party to balance the ruling cabinet, is a unique feature of the parliamentary system of which country?",
        options: [
            "India",
            "USA",
            "Britain",
            "France"
        ],
        correctAnswer: 2, // C
        explanation: "Britain has the system of 'shadow cabinet' formed by the opposition party to prepare its members for future ministerial office. There is no such formally recognized institution in India.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 21,
        question: "Which of the following was a primary reason given by the Constituent Assembly for adopting the Parliamentary system over the Presidential system?",
        options: [
            "Familiarity with the system due to British rule and the operation of the 1919 and 1935 Acts.",
            "The desire to have a single dictatorial executive.",
            "The need for total separation of powers to prevent tyranny.",
            "Pressure from the international community."
        ],
        correctAnswer: 0, // A
        explanation: "Reasons for adopting the parliamentary system included: 1) Familiarity with the system during British rule. 2) Preference to more responsibility over stability. 3) Need to avoid legislative-executive conflicts. 4) Nature of Indian society (heterogeneous).",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 22,
        question: "Dr. B.R. Ambedkar noted that a democratic executive must satisfy two conditions: 'stability' and 'responsibility'. Which did he claim the Indian parliamentary system favored?",
        options: [
            "It favored more stability over responsibility.",
            "It favored more responsibility over stability.",
            "It completely ignored both.",
            "It achieved perfect equality between the two."
        ],
        correctAnswer: 1, // B
        explanation: "Dr. B.R. Ambedkar pointed out that the draft constitution, in recommending the parliamentary system, preferred 'more responsibility to more stability', contrasting it with the American system which gives more stability but less responsibility.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 23,
        question: "The parliamentary system is sometimes criticized as 'Government by Amateurs'. Why?",
        options: [
            "Because ministers are primarily politicians who may lack specialized, technical knowledge of the ministries they head, unlike the expert secretaries in a presidential system.",
            "Because members of parliament are usually unpaid volunteers.",
            "Because the President randomly selects citizens to be ministers.",
            "Because there is no civil service to assist them."
        ],
        correctAnswer: 0, // A
        explanation: "It is called a government by amateurs because the ministers are not experts in their fields (they are politicians). The PM is restricted to choosing ministers from MPs, preventing the drafting of outside experts as is done in the US Presidential system.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 24,
        question: "If a single political party secures an absolute majority in the Lok Sabha, what does the President ordinarily do?",
        options: [
            "Declares an Emergency to prevent monopoly.",
            "Invites the leader of that majority party to form the government (become the Prime Minister).",
            "Appoints the Chief Justice to head the government.",
            "Dissolves the Lok Sabha immediately."
        ],
        correctAnswer: 1, // B
        explanation: "The political party which secures majority seats in the Lok Sabha forms the government. The President invites the leader of the majority party to form the government and appoints him as the Prime Minister.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 25,
        question: "What does the phrase 'Ministers are collectively responsible to the Parliament' actually mean in practice?",
        options: [
            "Every minister must write a personal report to Parliament daily.",
            "The Council of Ministers works as a team; if the government loses a major vote in the Lok Sabha, the whole cabinet must resign, not just one minister.",
            "Ministers are responsible only for their specific individual departments, but not the overall government policy.",
            "Parliament can legally force ministers to pay fines collectively."
        ],
        correctAnswer: 1, // B
        explanation: "Collective responsibility means the ministers are jointly responsible to the Lok Sabha for all their acts of omission and commission. They swim and sink together. A no-confidence motion defeats the whole government.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 26,
        question: "In the context of the parliamentary system, what is the role of ministers regarding the defense of government policies in Parliament?",
        options: [
            "They can freely criticize government policies they disagree with.",
            "Once a cabinet decision is taken, all ministers must stand by it and defend it, both within and outside the Parliament.",
            "They are only expected to defend policies originating from their own ministry.",
            "They must remain completely silent during parliamentary debates."
        ],
        correctAnswer: 1, // B
        explanation: "As part of collective responsibility, it is the fundamental duty of every minister to stand by cabinet decisions and support them both within and outside the Parliament, even if they personally disagree.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 27,
        question: "Which of the following is a recognized merit of the parliamentary system?",
        options: [
            "It guarantees fixed continuity of policies even if governments change.",
            "It ensures harmony between the legislature and executive, preventing deadlocks.",
            "It allows for the widespread use of independent, non-political experts in the cabinet.",
            "Strict separation of powers ensures zero overlap."
        ],
        correctAnswer: 1, // B
        explanation: "A major merit is 'Harmony Between Legislature and Executive'. Because the executive is drawn from the legislature and enjoys its majority support, there are fewer conflicts and deadlocks compared to the presidential system.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 28,
        question: "A presidential system is generally considered to be:",
        options: [
            "Responsible but unstable.",
            "Non-responsible (to the legislature) but highly stable.",
            "Neither responsible nor stable.",
            "Both highly responsible and highly stable."
        ],
        correctAnswer: 1, // B
        explanation: "The presidential system is categorized as a 'non-responsible' or 'non-parliamentary' system because the executive is not accountable to the legislature for its policies, but it provides 'stable government' due to fixed tenures.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 29,
        question: "Does the Indian Constitution specify both the parliamentary system at the centre AND in the states?",
        options: [
            "No, states have a presidential system.",
            "Yes, Articles 74/75 for the Centre and Articles 163/164 for the states.",
            "No, states are ruled directly by the President's agents without a parliamentary system.",
            "States are free to choose their own system."
        ],
        correctAnswer: 1, // B
        explanation: "Yes, the Constitution of India provides for a parliamentary form of government both at the Centre (Arts 74, 75) and in the states (Arts 163, 164).",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    },
    {
        id: 30,
        question: "Ivor Jennings called the parliamentary system the 'Cabinet system' because:",
        options: [
            "It is held in a small room called a cabinet.",
            "The cabinet is the nucleus of power and the real directing engine of government in this system.",
            "Only cabinet makers can become ministers.",
            "It requires cabinets to be elected directly by the people."
        ],
        correctAnswer: 1, // B
        explanation: "Ivor Jennings called it the 'cabinet system' because the cabinet is the nucleus of power in a parliamentary system, essentially steering the entire government machinery.",
        level: "Easy", topic: "Parliamentary System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary System" }
    }
];
