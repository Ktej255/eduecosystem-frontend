import type { MCQ } from './mcq-utils';

export const DAY10_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 10)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which Part and Article of the Indian Constitution deal with the power of Parliament to amend the Constitution and its procedure?",
        options: ["Part XX, Article 368", "Part XVIII, Article 352", "Part XXI, Article 370", "Part IX, Article 243"],
        correctAnswer: 0, // A
        explanation: "Article 368 in Part XX of the Constitution deals with the powers of Parliament to amend the Constitution and its procedure.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 2,
        question: "The procedure for the amendment of the Constitution as laid down in Article 368 is borrowed from the constitution of which country?",
        options: ["USA", "Britain", "South Africa", "Ireland"],
        correctAnswer: 2, // C
        explanation: "The procedure for amendment of the constitution is borrowed from the Constitution of South Africa.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 3,
        question: "Who can initiate an amendment of the Constitution under Article 368?",
        options: [
            "Only the President of India.",
            "Either House of Parliament.",
            "State Legislatures only.",
            "The Supreme Court of India."
        ],
        correctAnswer: 1, // B
        explanation: "An amendment of the Constitution can be initiated only by the introduction of a bill for the purpose in either House of Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 4,
        question: "Can a State Legislature initiate a bill to amend the Constitution of India?",
        options: [
            "Yes, if passed by a special majority.",
            "Yes, but only for matters related to the state list.",
            "No, an amendment bill can only be introduced in Parliament.",
            "Yes, if the Governor recommends it."
        ],
        correctAnswer: 2, // C
        explanation: "The bill can be initiated only in either House of Parliament and NOT in the state legislatures.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 5,
        question: "Does the introduction of a constitutional amendment bill require the prior permission of the President?",
        options: [
            "Yes, always.",
            "No, it does not require prior permission of the President.",
            "Yes, but only if introduced by a private member.",
            "Yes, if it affects state boundaries."
        ],
        correctAnswer: 1, // B
        explanation: "The bill can be introduced either by a minister or by a private member and does not require prior permission of the president.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 6,
        question: "In the context of Article 368, what kind of majority is required in each House of Parliament to pass a constitutional amendment bill?",
        options: [
            "A simple majority of the members present and voting.",
            "A special majority, that is, a majority of the total membership of the House and a majority of two-thirds of the members of the House present and voting.",
            "Absolute majority of the total membership only.",
            "Two-thirds majority of the total membership of the House."
        ],
        correctAnswer: 1, // B
        explanation: "The bill must be passed in each House by a special majority, that is, a majority of the total membership of the House and a majority of two-thirds of the members of the House present and voting.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 7,
        question: "If there is a disagreement between the Lok Sabha and the Rajya Sabha over a constitutional amendment bill, how is it resolved?",
        options: [
            "The President summons a joint sitting of both Houses.",
            "The view of the Lok Sabha automatically prevails.",
            "There is no provision for holding a joint sitting; the bill lapses.",
            "The Supreme Court mediates the disagreement."
        ],
        correctAnswer: 2, // C
        explanation: "Each House must pass the bill separately. In case of a disagreement between the two Houses, there is no provision for holding a joint sitting of the two Houses for the purpose of deliberation and passage of the bill.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 8,
        question: "If an amendment bill seeks to change the federal provisions of the Constitution, what additional requirement must be met after Parliament passes it?",
        options: [
            "It must be ratified by the Supreme Court.",
            "It must be ratified by the legislatures of half of the states by a simple majority.",
            "It must be ratified by all states by a special majority.",
            "It must be approved by a national referendum."
        ],
        correctAnswer: 1, // B
        explanation: "If the bill seeks to amend the federal provisions of the Constitution, it must also be ratified by the legislatures of half of the states by a simple majority, that is, a majority of the members of the House present and voting.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 9,
        question: "When a constitutional amendment bill, properly passed by Parliament (and ratified by states if required), is presented to the President, what action must the President take?",
        options: [
            "He may withhold his assent.",
            "He may return the bill for reconsideration.",
            "He must give his assent to the bill.",
            "He must refer it to the Supreme Court for advice."
        ],
        correctAnswer: 2, // C
        explanation: "The president must give his assent to the bill. He can neither withhold his assent to the bill nor return the bill for reconsideration of the Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 10,
        question: "Which Constitutional Amendment Act made it strictly obligatory for the President to give his assent to a constitutional amendment bill?",
        options: ["24th Amendment Act of 1971", "42nd Amendment Act of 1976", "44th Amendment Act of 1978", "86th Amendment Act of 2002"],
        correctAnswer: 0, // A
        explanation: "The 24th Constitutional Amendment Act of 1971 made it obligatory for the President to give his assent to a constitutional amendment bill.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 11,
        question: "How many ways are there to amend the Constitution of India, taking into account both Article 368 and other provisions?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 2, // C
        explanation: "The Constitution can be amended in three ways: 1. Amendment by simple majority of the Parliament, 2. Amendment by special majority of the Parliament, and 3. Amendment by special majority of the Parliament and the ratification of half of the state legislatures.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 12,
        question: "Are the amendments made by a 'simple majority of Parliament' considered as amendments 'under Article 368'?",
        options: [
            "Yes, all amendments are considered under Article 368.",
            "No, these amendments are exclusively kept outside the purview of Article 368.",
            "Only if they relate to fundamental rights.",
            "Only if the President considers them under Article 368."
        ],
        correctAnswer: 1, // B
        explanation: "A number of provisions in the Constitution can be amended by a simple majority of the two Houses of Parliament outside the scope of Article 368.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 13,
        question: "Which of the following matters can be amended by a simple majority of Parliament?",
        options: [
            "Fundamental Rights",
            "Directive Principles of State Policy",
            "Formation of new states and alteration of areas, boundaries or names of existing states",
            "Election of the President and its manner"
        ],
        correctAnswer: 2, // C
        explanation: "Formation of new states and alteration of areas, boundaries or names of existing states (Article 3) can be done by a simple majority and is explicitly outside Article 368.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 14,
        question: "The abolition or creation of legislative councils in states can be done by which type of majority?",
        options: [
            "Special majority of Parliament.",
            "Simple majority of Parliament.",
            "Special majority + Ratification by half the states.",
            "Only by a constitutional amendment under Article 368."
        ],
        correctAnswer: 1, // B
        explanation: "Abolition or creation of legislative councils in states (Article 169) is one of the provisions that can be amended by a simple majority of the Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 15,
        question: "Amendments relating to 'Citizenship—acquisition and termination' are carried out through:",
        options: [
            "Simple majority of Parliament",
            "Special majority of Parliament",
            "Special majority + State Ratification",
            "Executive Order by the Home Ministry"
        ],
        correctAnswer: 0, // A
        explanation: "Citizenship (acquisition and termination) can be amended by a simple majority of Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 16,
        question: "Which of the following requires a Special Majority of Parliament (but NOT state ratification) for an amendment?",
        options: [
            "Salaries and allowances of the members of Parliament.",
            "Elections to Parliament and state legislatures.",
            "Fundamental Rights and Directive Principles.",
            "Power of Parliament to amend the Constitution."
        ],
        correctAnswer: 2, // C
        explanation: "The provisions which can be amended by this way (special majority only) include (i) Fundamental Rights; (ii) Directive Principles of State Policy; and (iii) All other provisions which are not covered by the first and third categories.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 17,
        question: "If an amendment seeks to change the 'Election of the President and its manner', what is the required procedure?",
        options: [
            "Simple majority of Parliament.",
            "Special majority of Parliament only.",
            "Special majority of Parliament and consent of half of the state legislatures by a simple majority.",
            "Consent of all state legislatures."
        ],
        correctAnswer: 2, // C
        explanation: "Provisions relating to the federal structure, like the Election of the President, require a special majority of the Parliament and also the consent of half of the state legislatures by a simple majority.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 18,
        question: "Which of the following provisions requires ratification by half of the states?",
        options: [
            "Use of official language.",
            "Fifth Schedule—administration of scheduled areas.",
            "Distribution of legislative powers between the Union and the states (Seventh Schedule).",
            "Directive Principles of State Policy."
        ],
        correctAnswer: 2, // C
        explanation: "Any of the lists in the Seventh Schedule (distribution of legislative powers) relates to the federal structure and requires special majority plus ratification by half the states.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 19,
        question: "To amend Article 368 itself, which procedure must be followed?",
        options: [
            "It cannot be amended under any circumstances.",
            "Simple majority of Parliament.",
            "Special majority of Parliament.",
            "Special majority of Parliament and consent of half of the state legislatures."
        ],
        correctAnswer: 3, // D
        explanation: "The 'Power of Parliament to amend the Constitution and its procedure (Article 368 itself)' requires a special majority of Parliament and consent of half of the state legislatures.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 20,
        question: "Is there a time limit prescribed in the Constitution within which the state legislatures must ratify an amendment bill?",
        options: [
            "Yes, 6 months.",
            "Yes, 1 year.",
            "No, the Constitution does not prescribe a time frame.",
            "Yes, until the next general election."
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution does not prescribe the time frame within which the state legislatures should ratify or reject an amendment submitted to them.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 21,
        question: "Can an amendment bill be introduced by a private member of Parliament?",
        options: [
            "No, only by a Cabinet Minister.",
            "Yes, any member (minister or private member) can introduce it.",
            "Only by members of the ruling party.",
            "Only by the Leader of the Opposition."
        ],
        correctAnswer: 1, // B
        explanation: "The bill can be introduced either by a minister or by a private member.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 22,
        question: "What does 'Total Membership' technically refer to when calculating a Special Majority in a House of Parliament?",
        options: [
            "Only the members present on the day of voting.",
            "The total number of members comprising the House, irrespective of whether there are vacancies or absentees.",
            "The total number of members minus the nominated members.",
            "The members belonging to the ruling coalition."
        ],
        correctAnswer: 1, // B
        explanation: "The expression 'total membership' means the total number of members comprising the House irrespective of fact whether there are vacancies or absentees.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 23,
        question: "Does the Constitution provide for a special body like a Constitutional Convention to amend the Constitution?",
        options: [
            "Yes, a Constitutional Convention is formed every 10 years.",
            "No, there is no separate body; the constituent power is vested in the Parliament.",
            "Yes, the Supreme Court acts as the Constitutional Convention.",
            "Yes, the NITI Aayog."
        ],
        correctAnswer: 1, // B
        explanation: "Critics point out there is no provision for a special body like a Constitutional Convention or Constituent Assembly for amending the Constitution. The constituent power is vested in the Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 24,
        question: "Which of the following describes the Indian Constitution's amendment process best?",
        options: [
            "Extremely rigid, like the USA.",
            "Extremely flexible, like the UK.",
            "A synthesis or mixture of both rigidity and flexibility.",
            "Unamendable."
        ],
        correctAnswer: 2, // C
        explanation: "Indian Constitution is neither flexible nor rigid but a synthesis of both.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 25,
        question: "If half of the states ratify an amendment bill concerning the federal structure, what is the status of the remaining states?",
        options: [
            "The bill cannot proceed until all states ratify.",
            "The formalities are completed, and the remaining states' actions do not matter.",
            "The bill is sent back to Parliament.",
            "The President must consult the remaining states."
        ],
        correctAnswer: 1, // B
        explanation: "If one half of the states give their consent, the formality is completed. There is no provision requiring the consent of all the states.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 26,
        question: "According to the Supreme Court ruling in the Kesavananda Bharati case (1973), Parliament under Article 368 CANNOT amend:",
        options: [
            "Fundamental Rights",
            "Directive Principles",
            "The 'Basic Structure' of the Constitution",
            "Election procedures"
        ],
        correctAnswer: 2, // C
        explanation: "In the Kesavananda Bharati case (1973), the Supreme Court ruled that Parliament cannot amend those provisions which form the 'basic structure' of the Constitution.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 27,
        question: "The power to amend the Constitution rests almost entirely with the Parliament. State legislatures can only initiate one specific type of constitutional change. What is it?",
        options: [
            "Changing the name of the state.",
            "Passing a resolution requesting the Parliament for the creation or abolition of a legislative council in the state.",
            "Fixing the salary of the Governor.",
            "Drawing internal electoral boundaries."
        ],
        correctAnswer: 1, // B
        explanation: "State legislatures cannot initiate any bill or proposal for amending the Constitution except in one case, that is, passing a resolution requesting the Parliament for the creation or abolition of legislative councils in the states. And even here, the final decision rests with Parliament.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 28,
        question: "Which Schedule's amendment requires a simple majority in Parliament rather than a special majority under Article 368?",
        options: [
            "Seventh Schedule",
            "Ninth Schedule",
            "Second Schedule",
            "None of the above"
        ],
        correctAnswer: 2, // C
        explanation: "Amendments to the Second Schedule (Emoluments, allowances, privileges of the President, Governors, Speakers, judges, etc.), Fifth Schedule, and Sixth Schedule require only a simple majority.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 29,
        question: "The Supreme Court and High Courts' jurisdiction falls under which category of constitutional amendment?",
        options: [
            "Simple Majority of Parliament.",
            "Special Majority of Parliament only.",
            "Special majority of Parliament + Consent of half of the state legislatures.",
            "It cannot be amended."
        ],
        correctAnswer: 2, // C
        explanation: "Provisions regarding the Supreme Court and high courts relate to the federal structure, therefore requiring Special majority of Parliament and consent of half of the state legislatures.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    },
    {
        id: 30,
        question: "Can a state legislature, after ratifying a constitutional amendment bill, completely withdraw its consent at a later date?",
        options: [
            "Yes, at any time before the President signs it.",
            "Yes, but only if the ruling party changes in the state.",
            "The Constitution is silent on this issue.",
            "No, withdrawal of consent is expressly forbidden by Article 368."
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution is silent on the issue whether the states can withdraw their approval after according the same.",
        level: "Easy", topic: "Amendment of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Amendment of the Constitution" }
    }
];
