import type { MCQ } from './mcq-utils';

export const DAY3_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 3)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which of the following describes the Indian Constitution according to its salient features?",
        options: [
            "The shortest written constitution in the world.",
            "An entirely unwritten constitution based on conventions.",
            "The lengthiest written constitution of any sovereign country in the world.",
            "A partially written and partially unwritten constitution."
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution of India is the lengthiest of all the written constitutions of the world. It is a very comprehensive, elaborate and detailed document.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 2,
        question: "Which of the following is NOT one of the reasons for the elephantine size of the Indian Constitution?",
        options: [
            "Geographical factors like the vastness of the country.",
            "Historical factors like the influence of the Government of India Act of 1935.",
            "Single Constitution for both the Centre and the states.",
            "The inclusion of a separate constitution for Jammu & Kashmir within the main text."
        ],
        correctAnswer: 3, // D
        explanation: "Jammu & Kashmir had its own separate state constitution under Article 370 (until 2019), but the primary reasons for the bulk were geographical, historical (1935 Act), a single constitution for Centre and states, and dominance of legal luminaries.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 3,
        question: "From which source is the 'philosophical part' of the Indian Constitution (Fundamental Rights and Directive Principles) derived?",
        options: [
            "The British Constitution",
            "The American and Irish Constitutions respectively",
            "The Government of India Act 1935",
            "The Canadian Constitution"
        ],
        correctAnswer: 1, // B
        explanation: "The philosophical part (Fundamental Rights and DPSP) derives its inspiration from the American and Irish Constitutions respectively.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 4,
        question: "The 'political part' of the Constitution (the principle of Cabinet Government and the relations between the executive and the legislature) have been largely drawn from:",
        options: ["American Constitution", "Irish Constitution", "British Constitution", "Australian Constitution"],
        correctAnswer: 2, // C
        explanation: "The political part of the Constitution (Cabinet government and executive-legislature relations) is largely drawn from the British Constitution.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 5,
        question: "According to K.C. Wheare, how is the Indian Constitution accurately described regarding its federal nature?",
        options: [
            "A perfect federation",
            "A unitary state with subsidiary federal features",
            "Quasi-federal",
            "A confederation of independent states"
        ],
        correctAnswer: 2, // C
        explanation: "K.C. Wheare described the Indian Constitution as 'quasi-federal'—a unitary state with subsidiary federal features rather than a federal state with subsidiary unitary features.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 6,
        question: "Who described the Indian Constitution as a 'Federation with a centralising tendency'?",
        options: ["Ivor Jennings", "K.C. Wheare", "Granville Austin", "Dr. B.R. Ambedkar"],
        correctAnswer: 0, // A
        explanation: "Sir Ivor Jennings described the Indian Constitution as a 'federation with a centralising tendency'.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 7,
        question: "Granville Austin described the Indian federalism as:",
        options: ["Quasi-federal", "Co-operative federalism", "Bargaining federalism", "Centralised federalism"],
        correctAnswer: 1, // B
        explanation: "Granville Austin famously described the Indian federal system as 'Co-operative federalism'.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 8,
        question: "The Constitution of India establishes a parliamentary form of government. What is the fundamental principle of this system?",
        options: [
            "The doctrine of separation of powers between the legislature and executive.",
            "The principle of cooperation and coordination between the legislative and executive organs.",
            "The direct election of the Head of the State by the people.",
            "The judicial supremacy over all administrative actions."
        ],
        correctAnswer: 1, // B
        explanation: "The parliamentary system is based on the principle of cooperation and co-ordination between the legislative and executive organs, while the presidential system is based on the separation of powers.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 9,
        question: "Which term is used interchangeably with the 'Westminster model' of government in India?",
        options: ["Presidential Government", "Federal Government", "Cabinet Government", "Unitary Government"],
        correctAnswer: 2, // C
        explanation: "The parliamentary system is also known as the ‘Westminster’ model of government, responsible government, and Cabinet government.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 10,
        question: "How does the Indian Parliamentary System differ fundamentally from the British Parliamentary System?",
        options: [
            "India has a sovereign parliament, whereas Britain does not.",
            "India has an elected Head of State (Republic), while Britain has a hereditary monarch.",
            "India requires the Prime Minister to be from the Lower House, unlike Britain.",
            "Britain has a written constitution anchoring its parliament, unlike India."
        ],
        correctAnswer: 1, // B
        explanation: "The Indian State has an elected head (republic) while the British State has hereditary head (monarchy). Also, the Indian Parliament is NOT sovereign like the British Parliament.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 11,
        question: "The doctrine of 'sovereignty of Parliament' is associated with which country's parliament?",
        options: ["American Parliament (Congress)", "Indian Parliament", "British Parliament", "French Parliament"],
        correctAnswer: 2, // C
        explanation: "The doctrine of sovereignty of Parliament is primarily associated with the British Parliament.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 12,
        question: "The Indian Constitution synthesizes Parliamentary Sovereignty with which other major constitutional doctrine?",
        options: ["Executive Accountability", "Judicial Supremacy", "Absolute Federalism", "Direct Democracy"],
        correctAnswer: 1, // B
        explanation: "The framers preferred a proper synthesis between the British principle of parliamentary sovereignty and the American principle of judicial supremacy.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 13,
        question: "Which judicial body stands at the top of the integrated judicial system in India?",
        options: ["The High Courts", "The District Courts", "The Supreme Court", "The Federal Court"],
        correctAnswer: 2, // C
        explanation: "The Supreme Court stands at the top of the integrated judicial system in the country. Below it are the High Courts at the state level.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 14,
        question: "Who called the Directive Principles of State Policy a 'novel feature' of the Indian Constitution?",
        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Dr. B.R. Ambedkar", "K.M. Munshi"],
        correctAnswer: 2, // C
        explanation: "According to Dr B.R. Ambedkar, the Directive Principles of State Policy is a 'novel feature' of the Indian Constitution.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 15,
        question: "In the context of the Indian Constitution, the Directive Principles of State Policy (DPSP) are meant for promoting the ideal of:",
        options: ["Political Democracy", "Social and Economic Democracy", "Absolute Equality", "Religious Freedom"],
        correctAnswer: 1, // B
        explanation: "The Fundamental Rights are meant for promoting political democracy. The Directive Principles of State Policy are meant for promoting the ideal of social and economic democracy.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 16,
        question: "In the Minerva Mills case (1980), the Supreme Court held that the Indian Constitution is founded on the bedrock of the balance between:",
        options: [
            "The Centre and the States",
            "The Executive and the Judiciary",
            "The Fundamental Rights and the Directive Principles",
            "The Prime Minister and the President"
        ],
        correctAnswer: 2, // C
        explanation: "In the Minerva Mills case (1980), the Supreme Court held that 'the Indian Constitution is founded on the bedrock of the balance between the Fundamental Rights and the Directive Principles'.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 17,
        question: "Which of the following parts was NOT in the original Constitution but was added by the 42nd Amendment Act of 1976?",
        options: ["Part III (Fundamental Rights)", "Part IV (Directive Principles)", "Part IVA (Fundamental Duties)", "Part IX (Panchayats)"],
        correctAnswer: 2, // C
        explanation: "Part IVA (Fundamental Duties) was added by the 42nd Amendment Act of 1976 on the recommendation of the Swaran Singh Committee.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 18,
        question: "Which committee recommended the inclusion of Fundamental Duties into the Indian Constitution?",
        options: ["Santhanam Committee", "Swaran Singh Committee", "Ashok Mehta Committee", "Balwant Rai Mehta Committee"],
        correctAnswer: 1, // B
        explanation: "Fundamental Duties were added during internal emergency (1975-77) on the recommendation of the Swaran Singh Committee.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 19,
        question: "Does the term 'secular' appear in the original text of the Preamble as adopted in 1949?",
        options: [
            "Yes, it was present from the beginning.",
            "No, it was added by the 42nd Amendment Act of 1976.",
            "No, it was added by the 44th Amendment Act of 1978.",
            "Yes, but it was removed later by the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "The term 'secular' was added to the Preamble of the Indian Constitution by the 42nd Constitutional Amendment Act of 1976.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 20,
        question: "Which concept explains the positive concept of secularism adopted by the Indian Constitution?",
        options: [
            "The State strictly separates religion from politics completely.",
            "The State recognizes only Hinduism as the official religion.",
            "The State gives equal respect to all religions or protects all religions equally.",
            "The State abolishes all religious practices."
        ],
        correctAnswer: 2, // C
        explanation: "The Indian Constitution embodies the positive concept of secularism, i.e., giving equal respect to all religions or protecting all religions equally.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 21,
        question: "Universal Adult Franchise was adopted by the Constitution under which Article?",
        options: ["Article 320", "Article 324", "Article 326", "Article 330"],
        correctAnswer: 2, // C
        explanation: "Article 326 of the Constitution provides that the elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 22,
        question: "The voting age was reduced from 21 years to 18 years in 1989 by which Constitutional Amendment Act?",
        options: ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        correctAnswer: 2, // C
        explanation: "The voting age was reduced from 21 to 18 years by the 61st Constitutional Amendment Act of 1988 (effective 1989).",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 23,
        question: "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), how many citizenships does it provide for?",
        options: ["Dual citizenship", "Single citizenship", "No citizenship but residency rights", "Triple citizenship (Centre, State, District)"],
        correctAnswer: 1, // B
        explanation: "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), it provides for only a single citizenship, that is, the Indian citizenship.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 24,
        question: "Which of the following is considered the 'bulwark' of the democratic system of Government in India?",
        options: ["The Prime Minister's Office", "Independent Bodies like the Election Commission", "The State Legislatures", "The National Development Council"],
        correctAnswer: 1, // B
        explanation: "The Constitution establishes certain Independent Bodies (Election Commission, CAG, UPSC, etc.) which are considered the bulwarks of the democratic system of Government in India.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 25,
        question: "Which feature of the Constitution converts the federal structure into a unitary one during extraordinary situations without a formal amendment?",
        options: ["Single Citizenship", "Universal Adult Franchise", "Emergency Provisions", "Judicial Review"],
        correctAnswer: 2, // C
        explanation: "Emergency provisions convert the federal structure into a unitary one without a formal amendment of the Constitution. This is a unique feature.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 26,
        question: "The 73rd and 74th Constitutional Amendment Acts (1992) added which unique tier of government to the Indian Constitution?",
        options: ["The Central tier", "The State tier", "The Third tier (Local government)", "The Judiciary branch"],
        correctAnswer: 2, // C
        explanation: "The 73rd and 74th Amendments have added a third-tier of government (i.e., local) which is not found in any other Constitution of the world.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 27,
        question: "The 97th Constitutional Amendment Act of 2011 gave constitutional status and protection to which of the following?",
        options: ["Panchayati Raj Institutions", "Co-operative Societies", "Urban Local Bodies", "Tribal Advisory Councils"],
        correctAnswer: 1, // B
        explanation: "The 97th Constitutional Amendment Act of 2011 gave a constitutional status and protection to co-operative societies.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 28,
        question: "Which of the following schedules was NOT present in the original Constitution but added later to protect land reforms from judicial review?",
        options: ["Eighth Schedule", "Ninth Schedule", "Tenth Schedule", "Eleventh Schedule"],
        correctAnswer: 1, // B
        explanation: "The Ninth Schedule was added by the 1st Amendment Act (1951) to protect the land reform and other laws included in it from judicial review.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 29,
        question: "The Indian Constitution empowers which body to declare parliamentary laws as unconstitutional through the power of Judicial Review?",
        options: ["The President", "The Supreme Court", "The Parliament itself", "The Comptroller and Auditor General"],
        correctAnswer: 1, // B
        explanation: "The Supreme Court, on the one hand, can declare the parliamentary laws as unconstitutional through its power of judicial review.",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    },
    {
        id: 30,
        question: "A Rigid Constitution is one that requires a 'special procedure' for its amendment. In this context, how is the Indian Constitution classified?",
        options: [
            "Completely rigid",
            "Completely flexible",
            "A mix of both rigidity and flexibility",
            "Unamendable"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution of India is neither fully rigid nor fully flexible, but a synthesis of both. Article 368 provides for two types of amendments (rigid), while some provisions can be amended by a simple majority (flexible).",
        level: "Easy", topic: "Salient Features of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Salient Features of the Constitution" }
    }
];
