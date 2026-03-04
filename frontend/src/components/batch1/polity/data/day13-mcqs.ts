import type { MCQ } from './mcq-utils';

export const DAY13_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 13)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Political scientists typically classify political systems into two categories based on the nature of relations between the national government and the regional governments. What are these two categories?",
        options: [
            "Parliamentary and Presidential",
            "Democratic and Authoritarian",
            "Unitary and Federal",
            "Republic and Monarchy"
        ],
        correctAnswer: 2, // C
        explanation: "Political scientists classify governments into unitary and federal based on the nature of relations between the national government and the regional governments.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 2,
        question: "By definition, what is a Unitary government?",
        options: [
            "A government where all powers are divided between the Centre and the states by the Constitution.",
            "A government where powers are concentrated in the hands of the states.",
            "A government in which all powers are vested in the national government, and the regional governments, if they exist, derive their authority from the national government.",
            "A government headed exclusively by a Monarch."
        ],
        correctAnswer: 2, // C
        explanation: "A unitary government is one in which all the powers are vested in the national government and the regional governments derive their authority from the national government.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 3,
        question: "Which of the following countries is a prominent example of a Federal model of government?",
        options: [
            "Britain",
            "France",
            "Japan",
            "USA"
        ],
        correctAnswer: 3, // D
        explanation: "The US is the first and the oldest federation in the world. Britain, France, and Japan are examples of unitary models.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 4,
        question: "The term 'federation' is derived from a Latin word 'foedus'. What does 'foedus' mean?",
        options: [
            "Power or Authority",
            "Treaty or Agreement",
            "Division or Separation",
            "Union or State"
        ],
        correctAnswer: 1, // B
        explanation: "The term 'federation' is derived from a Latin word 'foedus' which means 'treaty' or 'agreement'.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 5,
        question: "A federation can be formed in two ways: 'integration' or 'disintegration'. Which country's federation is the classic example of formation by 'integration' (independent states coming together)?",
        options: [
            "Canada",
            "India",
            "USA",
            "Britain"
        ],
        correctAnswer: 2, // C
        explanation: "The US is the first and oldest federation formed by the 'integration' of 13 independent states to form a strong national government.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 6,
        question: "The Indian federal system is based on the model of which country?",
        options: [
            "United States of America",
            "Switzerland",
            "Canada",
            "Australia"
        ],
        correctAnswer: 2, // C
        explanation: "The Indian federal system is based on the 'Canadian model' and not on the 'American model'. Like Canada, India's federation was formed by disintegration and strongly centralizes power.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 7,
        question: "Does the Constitution of India explicitly contain the word 'federation' anywhere in its text?",
        options: [
            "Yes, in the Preamble.",
            "Yes, in Article 1.",
            "Yes, in the Seventh Schedule.",
            "No, the word 'federation' has nowhere been used in the Constitution."
        ],
        correctAnswer: 3, // D
        explanation: "The word 'federation' has nowhere been used in the Constitution. Instead, Article 1 of the Constitution describes India as a 'Union of States'.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 8,
        question: "According to Dr. B.R. Ambedkar, Article 1 describes India as a 'Union of States' to indicate two things. What is one of those things?",
        options: [
            "Indian federation is the result of an agreement among the states like the American Federation.",
            "The states have the right to secede from the federation.",
            "The Indian federation is NOT the result of an agreement among the states like the American Federation.",
            "The states are completely sovereign and independent."
        ],
        correctAnswer: 2, // C
        explanation: "Dr. Ambedkar stated it implies two things: one, Indian federation is not the result of an agreement among the states like the American Federation; and two, the states have no right to secede from the federation. The federation is a union because it is indestructible.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 9,
        question: "Which of the following is a classic feature of a Federal system of government?",
        options: [
            "Single Government (only at the Centre).",
            "Unwritten Constitution.",
            "Dual Government (national government and regional governments).",
            "Flexibility of the entire Constitution."
        ],
        correctAnswer: 2, // C
        explanation: "A key feature of a federal system is the 'Dual Polity' or Dual Government, consisting of the Union at the Centre and the states at the periphery.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 10,
        question: "In the Federal features of the Indian Constitution, how are powers divided between the Centre and the states?",
        options: [
            "Through a verbal agreement between the Prime Minister and Chief Ministers.",
            "Through the Seventh Schedule of the Constitution containing Union, State, and Concurrent Lists.",
            "By the Supreme Court on a case-by-case basis.",
            "By the President issuing ordinances every year."
        ],
        correctAnswer: 1, // B
        explanation: "The Constitution divides power between the Centre and the states in terms of the Union List, State List, and Concurrent List in the Seventh Schedule.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 11,
        question: "Why is a 'Written Constitution' considered an essential feature of a Federal system?",
        options: [
            "So that citizens can read it in historical archives.",
            "To ensure that the division of powers between the Centre and states is clear, defined, and acts as a binding document on both.",
            "Because an unwritten constitution only allows for Presidential systems.",
            "To prevent the Supreme Court from having any power."
        ],
        correctAnswer: 1, // B
        explanation: "A written Constitution is essential for a federation to specify the structure, organization, powers, and functions of both the Central and state governments, defining limits so they do not trespass into each other's spheres.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 12,
        question: "The 'Rigidity of the Constitution' is a federal feature. What does it mean in this context?",
        options: [
            "The Constitution can never be changed under any circumstances.",
            "The Constitution cannot be understood easily.",
            "Provisions concerned with the federal structure can only be amended by the joint action of the Central and state governments (special majority plus state ratification).",
            "Only the President can amend the Constitution."
        ],
        correctAnswer: 2, // C
        explanation: "The division of powers established by the Constitution as well as its supremacy can be maintained only if the method of its amendment is rigid. The structural provisions require ratification by half the state legislatures.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 13,
        question: "What role does the 'Independent Judiciary' play as a federal feature of the Indian Constitution?",
        options: [
            "It conducts elections for state legislatures.",
            "It appoints the Governors of the states.",
            "It works to protect the supremacy of the Constitution and settle disputes between the Centre and the states or between the states.",
            "It collects taxes for both Centre and states."
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution establishes an independent judiciary headed by the Supreme Court to settle disputes between the Centre and the states and to protect the supremacy of the Constitution.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 14,
        question: "How does 'Bicameralism' support the federal structure of India?",
        options: [
            "By ensuring two Prime Ministers exists at all times.",
            "The upper house (Rajya Sabha) represents the states of Indian Federation and protects state interests against undue interference by the Centre.",
            "The lower house (Lok Sabha) consists exclusively of state governors.",
            "By having two separate Constitutions, one for the Lok Sabha and one for the Rajya Sabha."
        ],
        correctAnswer: 1, // B
        explanation: "Bicameralism provides an Upper House (Rajya Sabha) that represents the states of the Indian Federation, acting as a mechanism to maintain the federal equilibrium and protect states' interests.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 15,
        question: "Although India is a federation, it has many 'Unitary' (non-federal) features. Which of the following is an example of a unitary feature in the Indian Constitution?",
        options: [
            "Division of powers",
            "Written Constitution",
            "Single Constitution for both Centre and States",
            "Bicameralism"
        ],
        correctAnswer: 2, // C
        explanation: "In a true federation like the US, states have the right to frame their own constitution. In India, there is a 'Single Constitution' for both the Centre and the states, which is a strong unitary feature.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 16,
        question: "How does the 'flexible' nature of amending certain parts of the Constitution serve as a Unitary feature?",
        options: [
            "It allows states to constantly rewrite the Constitution.",
            "The bulk of the Constitution can be amended by the unilateral action of the Parliament (simple or special majority) without any state consent.",
            "It allows the President to suspend the Constitution at will.",
            "It means the Constitution is physically printed on flexible paper."
        ],
        correctAnswer: 1, // B
        explanation: "The process of constitutional amendment is less rigid than in typical federations. The bulk of the Constitution can be amended by the unilateral action of the Parliament, a hallmark of a unitary system.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 17,
        question: "The states in India do not have equal representation in the Rajya Sabha. How are the seats in the Rajya Sabha distributed among the states?",
        options: [
            "Equally, every state gets 10 seats.",
            "Based on their geographic area.",
            "Based on their population (e.g., UP has 31, while Tripura has 1).",
            "Based on their financial contribution to the Centre."
        ],
        correctAnswer: 2, // C
        explanation: "Unlike the US Senate, where states have equal representation regardless of size, Indian states are given representation in the Rajya Sabha on the basis of population. This is considered a unitary bias.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 18,
        question: "Which of the following describes the 'Emergency Provisions' as a highly unitary feature of the Indian Constitution?",
        options: [
            "During an emergency, the Centre's powers diminish entirely, leaving states independent.",
            "During an emergency, the federal structure converts into a unitary one without a formal amendment of the Constitution, giving the Central government absolute control over states.",
            "Emergencies can only be declared by state governments.",
            "State legislatures gain the power to impeach the President during emergencies."
        ],
        correctAnswer: 1, // B
        explanation: "During an emergency, the Central government becomes all-powerful and the states go into the total control of the Centre. It converts the federal structure into a unitary one without a formal amendment.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 19,
        question: "In classical federations like the USA, there involves 'Dual Citizenship' (national and state). What is the citizenship structure in India?",
        options: [
            "India also has Dual Citizenship.",
            "India has Triple Citizenship (National, State, District).",
            "India adopted a Single Citizenship (Indian citizenship only, no separate state citizenship).",
            "India has no concept of citizenship."
        ],
        correctAnswer: 2, // C
        explanation: "In spite of a dual polity, the Constitution of India, like that of Canada, adopted the system of single citizenship. There is only Indian citizenship and no separate state citizenship.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 20,
        question: "The Indian Judiciary is described as an 'Integrated Judiciary'. How is this a unitary feature?",
        options: [
            "It means state Supreme Courts are independent of the national Supreme Court.",
            "There is a single system of courts (Supreme Court at the top, High Courts below) that enforces both Central laws as well as state laws.",
            "State laws can only be enforced by state-run local courts.",
            "The executive and judiciary are merged."
        ],
        correctAnswer: 1, // B
        explanation: "India has a single system of courts enforcing both Central laws as well as state laws. In contrast, the US has a double system of courts where federal courts enforce federal laws and state courts enforce state laws.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 21,
        question: "The All-India Services (like IAS, IPS, IFS) are considered a unitary feature. Why?",
        options: [
            "Because they are recruited exclusively by state governments.",
            "Because they only serve in the Central government offices in Delhi.",
            "Because they serve both the Centre and states, but they are recruited uniquely by the Centre, which retains ultimate control over them, violating strict federal division.",
            "Because they are exempt from all state laws."
        ],
        correctAnswer: 2, // C
        explanation: "Though All-India services serve both Centre and states, they are recruited and trained by the Centre. They hold key posts in states, but ultimate control lies with the Central government, restricting state autonomy.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 22,
        question: "How is the appointment of the state Governor by the President considered a unitary feature?",
        options: [
            "The Governor is elected directly by the people of the state.",
            "The Governor acts entirely on the advice of the state Chief Minister.",
            "The Governor is appointed by the President, acts as an agent of the Centre, and holds office during the pleasure of the President.",
            "The Governor can veto Parliament's laws."
        ],
        correctAnswer: 2, // C
        explanation: "The governor is appointed by the President, holds office during his pleasure, and acts as an agent of the Centre. Central control over the states is maintained through this office.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 23,
        question: "The institution of the Comptroller and Auditor General (CAG) restricts the financial autonomy of states (a unitary feature) because:",
        options: [
            "The CAG is elected by the state assemblies.",
            "The CAG audits only the Central government's accounts.",
            "The CAG audits the accounts of not only the Central government but also those of the states, yet is appointed solely by the President without consulting the states.",
            "The CAG demands a share of the state taxes."
        ],
        correctAnswer: 2, // C
        explanation: "The CAG audits the accounts of both the Central and state governments. But his appointment and removal are done solely by the President, without consulting the states, restricting state financial autonomy.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 24,
        question: "The Governor has the power to reserve certain types of bills passed by the state legislature for the consideration of the President. What leverage does this give the Centre?",
        options: [
            "It gives the Centre no leverage.",
            "It forces the President to sign all state bills immediately.",
            "The President enjoys absolute veto over these bills, establishing a Central veto over state legislation.",
            "It forces the Supreme Court to review the bills."
        ],
        correctAnswer: 2, // C
        explanation: "The governor is empowered to reserve certain types of bills passed by the state legislature for the consideration of the President. The President can withhold his assent to such bills in the first instance or in the second instance. Thus, the President enjoys absolute veto over State bills.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 25,
        question: "Which prominent political scientist described the Indian Constitution as 'quasi-federal'?",
        options: [
            "Granville Austin",
            "K.C. Wheare",
            "Ivor Jennings",
            "Paul Appleby"
        ],
        correctAnswer: 1, // B
        explanation: "K.C. Wheare described the Constitution of India as 'quasi-federal'. He remarked that Indian Union is a unitary state with subsidiary federal features rather than a federal state with subsidiary unitary features.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 26,
        question: "Granville Austin famously described the Indian federalism using which distinct term, signifying a system that produces a strong central government but doesn't necessarily result in weak provincial governments?",
        options: [
            "Bargaining Federalism",
            "Co-operative Federalism",
            "Federation with a centralizing tendency",
            "Extremely Unitary"
        ],
        correctAnswer: 1, // B
        explanation: "Granville Austin called the Indian federalism a 'Co-operative Federalism'.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 27,
        question: "In the landmark S.R. Bommai case (1994), what did the Supreme Court explicitly declare regarding the structural nature of the Indian Constitution?",
        options: [
            "That federalism is a superficial, non-essential feature.",
            "That the Constitution is strictly unitary.",
            "That 'federalism' is an essential 'basic feature' of the Constitution.",
            "That states have the constitutional right to declare independence."
        ],
        correctAnswer: 2, // C
        explanation: "In the S.R. Bommai case (1994), the Supreme Court laid down that the Constitution is federal and characterized federalism as its 'basic feature'.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 28,
        question: "The Supreme Court in S.R. Bommai noted that while the Centre is endowed with more powers, the States are not merely 'appendages' of the Centre. Within their allotted sphere, they are:",
        options: [
            "Completely subordinate to the Governor.",
            "Agencies of the Central Government.",
            "Supreme, with an independent constitutional existence.",
            "Regulated directly by the United Nations."
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court stated that states have an independent constitutional existence. They are not appendages or agencies of the Centre. Within the sphere allotted to them, the states are supreme.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 29,
        question: "Which of the following describes the distribution of power regarding the 'Residuary Powers' (subjects not mentioned in any of the three lists) in India, and how does it compare to the US/Australia?",
        options: [
            "Residuary powers rest with the States, similar to the US.",
            "Residuary powers rest with the Centre, similar to Canada, unlike the US where they rest with the States.",
            "Residuary powers are shared equally between Centre and States.",
            "There are no residuary powers; the lists are exhaustive forever."
        ],
        correctAnswer: 1, // B
        explanation: "The Centre has residuary powers in India (as in Canada), unlike in the US or Australia where residuary powers are vested in the states. This signifies a strong Centre.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    },
    {
        id: 30,
        question: "Morris Jones described the Indian federal system using which of the following phrases to highlight the constant negotiation between the Centre and States?",
        options: [
            "Co-operative Federalism",
            "Competitive Federalism",
            "Bargaining Federalism",
            "Coercive Federalism"
        ],
        correctAnswer: 2, // C
        explanation: "Morris Jones described it as 'Bargaining Federalism', noting the practical political negotiations that occur between the central and state governments.",
        level: "Easy", topic: "Federal System", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Federal System" }
    }
];
