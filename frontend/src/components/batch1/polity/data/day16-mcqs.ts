import type { MCQ } from './mcq-utils';

export const DAY16_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 16)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which Part of the Indian Constitution contains the Emergency Provisions (Articles 352 to 360)?",
        options: [
            "Part XV",
            "Part XVI",
            "Part XVII",
            "Part XVIII"
        ],
        correctAnswer: 3, // D
        explanation: "The Emergency provisions are contained in Part XVIII of the Constitution, from Articles 352 to 360.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 2,
        question: "What is the primary rationale behind incorporating emergency provisions in the Constitution?",
        options: [
            "To permanently abolish state governments.",
            "To safeguard the sovereignty, unity, integrity, and security of the country, the democratic political system, and the Constitution.",
            "To allow the Prime Minister to rule without a parliament.",
            "To declare war on neighboring countries automatically."
        ],
        correctAnswer: 1, // B
        explanation: "The rationality behind the incorporation of these provisions is to safeguard the sovereignty, unity, integrity and security of the country, the democratic political system, and the Constitution.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Conceptual", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 3,
        question: "During an Emergency, the constitutional structure of India transforms fundamentally. How does this transformation occur?",
        options: [
            "It transforms from federal to unitary only after a formal constitutional amendment.",
            "It transforms from federal to unitary automatically without a formal amendment of the Constitution.",
            "It transforms from unitary to fully federal.",
            "The Constitution is suspended entirely."
        ],
        correctAnswer: 1, // B
        explanation: "During an emergency, the Central government becomes all-powerful and the states go into the total control of the Centre. It converts the federal structure into a unitary one without a formal amendment of the Constitution.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 4,
        question: "The Constitution stipulates three types of emergencies. Which of the following is NOT one of them?",
        options: [
            "National Emergency (Article 352)",
            "State Emergency / President's Rule (Article 356)",
            "Judicial Emergency (Article 358)",
            "Financial Emergency (Article 360)"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution stipulates three types: National Emergency (Art 352), State Emergency/President's Rule (Art 356), and Financial Emergency (Art 360). There is no 'Judicial Emergency'.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 5,
        question: "Under Article 352, the President can declare a 'National Emergency' on three specific grounds. Which of the following was inserted by the 44th Amendment Act (1978), replacing the original term 'internal disturbance'?",
        options: [
            "War",
            "External aggression",
            "Armed rebellion",
            "Financial crisis"
        ],
        correctAnswer: 2, // C
        explanation: "The 44th Amendment Act of 1978 substituted the words ‘armed rebellion’ for ‘internal disturbance’. Thus, it is no longer possible to declare a National Emergency on the ground of ‘internal disturbance’ as was done in 1975.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 6,
        question: "When a National Emergency is declared on the grounds of 'war' or 'external aggression', it is commonly referred to by which term?",
        options: [
            "Internal Emergency",
            "External Emergency",
            "Martial Law",
            "President's Rule"
        ],
        correctAnswer: 1, // B
        explanation: "When a national emergency is declared on the ground of ‘war’ or ‘external aggression’, it is known as ‘External Emergency’. When it is declared on the ground of ‘armed rebellion’, it is known as ‘Internal Emergency’.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 7,
        question: "Before the President can proclaim a National Emergency (Article 352), what crucial procedural step is legally necessary?",
        options: [
            "Consultation with the Chief Justice of India.",
            "Approval from all State Chief Ministers.",
            "He can declare it only after receiving a written recommendation from the Cabinet.",
            "He can declare it solely on the advice of the Prime Minister."
        ],
        correctAnswer: 2, // C
        explanation: "The President can proclaim a national emergency only after receiving a written recommendation from the cabinet based on a decision made by the cabinet (Article 352 clause 3, added by the 44th Amendment).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 8,
        question: "Within what timeframe must a proclamation of National Emergency be approved by both Houses of Parliament to remain in operation?",
        options: [
            "Within 15 days",
            "Within one month",
            "Within two months",
            "Within six months"
        ],
        correctAnswer: 1, // B
        explanation: "The proclamation of Emergency must be approved by both the Houses of Parliament within one month from the date of its issue. (Originally, the period was two months, but it was reduced by the 44th Amendment).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 9,
        question: "What type of parliamentary majority is required to approve the proclamation of a National Emergency?",
        options: [
            "Simple majority in Lok Sabha only",
            "Simple majority in both Houses",
            "Special majority (majority of the total membership of the house AND a majority of not less than two-thirds of the members present and voting) in both Houses",
            "Absolute majority in Rajya Sabha only"
        ],
        correctAnswer: 2, // C
        explanation: "Every resolution approving the proclamation of emergency or its continuance must be passed by either House of Parliament by a special majority.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 10,
        question: "Once approved by Parliament, how long does the National Emergency continue in operation before requiring another approval?",
        options: [
            "For one month",
            "For six months",
            "For one year",
            "Indefinitely without further approval"
        ],
        correctAnswer: 1, // B
        explanation: "If approved by both the Houses of Parliament, the emergency continues for six months, and can be extended to an indefinite period with an approval of the Parliament for every six months.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 11,
        question: "The President must revoke a proclamation of National Emergency if which House of Parliament passes a resolution to disapprove its continuation?",
        options: [
            " Rajya Sabha",
            "Lok Sabha",
            "Both Houses in a joint sitting",
            "The State Legislatures"
        ],
        correctAnswer: 1, // B
        explanation: "The President must revoke a proclamation if the Lok Sabha passes a resolution disapproving its continuation. This safeguard was introduced by the 44th Amendment Act of 1978.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 12,
        question: "During a National Emergency, the Centre gets the power to give executive directions to states on 'any' matter. What happens to the state governments themselves?",
        options: [
            "They are completely dismissed and dissolved.",
            "They are suspended.",
            "They continue to function, but are brought under the complete control of the Centre.",
            "They become completely independent of the Centre."
        ],
        correctAnswer: 2, // C
        explanation: "During a national emergency, the executive power of the Centre extends to directing any state regarding the manner in which its executive power is to be exercised. State governments are not suspended but brought under complete central control.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Concept", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 13,
        question: "During a National Emergency, Parliament can legislate on any subject mentioned in the State List. Do the State Legislatures lose their power to make laws during this time?",
        options: [
            "Yes, their legislative power is completely suspended.",
            "No, their legislative power is not suspended, but Parliamentary laws prevail in case of conflict.",
            "Yes, they can only make laws on the Concurrent List.",
            "No, but they must get the President's prior approval for every bill."
        ],
        correctAnswer: 1, // B
        explanation: "During a national emergency, Parliament becomes empowered to make laws on any subject mentioned in the State List. Although the legislative power of a state legislature is not suspended, it becomes subject to the overriding power of the Parliament.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 14,
        question: "While a proclamation of National Emergency is in operation, the normal life of the Lok Sabha may be extended by Parliament by law. What is the maximum duration for which it can be extended at a time?",
        options: [
            "Six months at a time",
            "One year at a time",
            "Two years at a time",
            "Three years at a time"
        ],
        correctAnswer: 1, // B
        explanation: "While a proclamation of National Emergency is in operation, the life of the Lok Sabha may be extended beyond its normal term (five years) by a law of Parliament for one year at a time (for any length of time).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 15,
        question: "According to Article 358, when a National Emergency is proclaimed, the Fundamental Rights under a specific Article are automatically suspended. Which Article is this?",
        options: [
            "Article 14",
            "Article 19",
            "Article 21",
            "Article 32"
        ],
        correctAnswer: 1, // B
        explanation: "According to Article 358, when a proclamation of national emergency is made, the six Fundamental Rights under Article 19 (freedom of speech, assembly, etc.) are automatically suspended.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 16,
        question: "However, under the 44th Amendment Act, the six Fundamental Rights under Article 19 can ONLY be suspended automatically (under Article 358) if the National Emergency is declared on the grounds of:",
        options: [
            "Armed rebellion only",
            "War or external aggression",
            "Financial crisis",
            "Internal disturbance"
        ],
        correctAnswer: 1, // B
        explanation: "The 44th Amendment Act of 1978 restricted Article 358: the six Fundamental Rights under Article 19 can be suspended only when the National Emergency is declared on the ground of war or external aggression and not on the ground of armed rebellion.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 17,
        question: "Article 359 authorizes the President to suspend the right to move any court for the enforcement of Fundamental Rights during a National Emergency. Which two Fundamental Rights can NEVER be suspended, even during an emergency?",
        options: [
            "Articles 14 and 15",
            "Articles 20 and 21",
            "Articles 25 and 26",
            "Articles 32 and 226"
        ],
        correctAnswer: 1, // B
        explanation: "The 44th Amendment Act of 1978 provided that the President cannot suspend the right to move the Court for the enforcement of fundamental rights guaranteed by Articles 20 and 21 (protection in respect of conviction for offences and right to life and personal liberty).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 18,
        question: "How many times has a National Emergency (under Article 352) been proclaimed in India so far?",
        options: [
            "Never",
            "Two times",
            "Three times",
            "Five times"
        ],
        correctAnswer: 2, // C
        explanation: "This type of Emergency has been proclaimed three times so far—in 1962 (Chinese aggression), 1971 (Pakistan war), and 1975 (Internal disturbance).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Historical Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 19,
        question: "Article 356 deals with the failure of constitutional machinery in states, commonly known as 'President's Rule'. Also known by two other names, which of the following is one of those alternative names?",
        options: [
            "Federal Emergency",
            "State Emergency",
            "Martial Law",
            "Executive Emergency"
        ],
        correctAnswer: 1, // B
        explanation: "Article 356 is popularly known as ‘President’s Rule’. It is also known as ‘State Emergency’ or ‘Constitutional Emergency’.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 20,
        question: "Under Article 356, the President can impose President's Rule if he is satisfied that a situation has arisen where the government of a state cannot be carried on in accordance with the Constitution. He can act either on a report of the Governor or:",
        options: [
            "Only on a report of the Governor; he cannot act otherwise.",
            "Otherwise too (even without the governor's report).",
            "On the report of the Chief Justice of the High Court.",
            "On the written demand of the State Assembly."
        ],
        correctAnswer: 1, // B
        explanation: "Article 356 empowers the President to issue a proclamation if he is satisfied that a situation has arisen in which the government of a state cannot be carried on in accordance with the provisions of the Constitution. The president can act either on a report of the governor of the state or otherwise too (ie, even without the governor’s report).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 21,
        question: "Under Article 365, President's Rule can also be imposed if a state fails to comply with:",
        options: [
            "The Election Commission’s guidelines.",
            "Any directions given by the Centre.",
            "International treaty obligations.",
            "The state's own budget."
        ],
        correctAnswer: 1, // B
        explanation: "Article 365 says that whenever a state fails to comply with or to give effect to any direction from the Centre, it will be lawful for the president to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 22,
        question: "A proclamation imposing President's Rule must be approved by both Houses of Parliament within what time period?",
        options: [
            "One month",
            "Two months",
            "Six months",
            "One year"
        ],
        correctAnswer: 1, // B
        explanation: "A proclamation imposing President’s Rule must be approved by both the Houses of Parliament within two months from the date of its issue. (Note: National Emergency is 1 month).",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 23,
        question: "If approved by both Houses of Parliament, President's Rule continues for six months. What is the absolute maximum period President's Rule can remain in force (subject to six-monthly approvals)?",
        options: [
            "One year",
            "Two years",
            "Three years",
            "Indefinitely"
        ],
        correctAnswer: 2, // C
        explanation: "It can be extended for a maximum period of three years with the approval of the Parliament, every six months.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 24,
        question: "During President's Rule, what happens to the State Legislature?",
        options: [
            "It continues to function normally.",
            "It is either suspended or dissolved by the President.",
            "It becomes the upper house to the Lok Sabha.",
            "It is restricted to passing only non-financial bills."
        ],
        correctAnswer: 1, // B
        explanation: "When President's Rule is imposed, the President either suspends or dissolves the state legislative assembly. Parliament passes the state legislative bills and the state budget.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 25,
        question: "Which landmark case of the Supreme Court (1994) dealt extensively with the misuse of President’s Rule under Article 356 and laid down strict guidelines for its imposition?",
        options: [
            "Kesavananda Bharati case",
            "Minerva Mills case",
            "S.R. Bommai case",
            "Golaknath case"
        ],
        correctAnswer: 2, // C
        explanation: "In the S.R. Bommai case (1994), the Supreme Court laid down detailed propositions on the imposition of President’s Rule, bringing it squarely under judicial review and ending the era of arbitrary dismissals of state governments.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 26,
        question: "Article 360 empowers the President to proclaim a Financial Emergency if he is satisfied that a situation has arisen due to which:",
        options: [
            "The state governments refuse to pay central taxes.",
            "The financial stability or credit of India or any part of its territory is threatened.",
            "Inflation crosses 10%.",
            "A foreign loan is recalled."
        ],
        correctAnswer: 1, // B
        explanation: "Article 360 empowers the president to proclaim a Financial Emergency if he is satisfied that a situation has arisen due to which the financial stability or credit of India or any part of its territory is threatened.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 27,
        question: "A proclamation declaring Financial Emergency must be approved by both the Houses of Parliament within what time period?",
        options: [
            "One month",
            "Two months",
            "Six months",
            "One year"
        ],
        correctAnswer: 1, // B
        explanation: "A proclamation declaring financial emergency must be approved by both the Houses of Parliament within two months from the date of its issue.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 28,
        question: "Once approved by both Houses of Parliament, how long does a Financial Emergency continue?",
        options: [
            "For exactly six months.",
            "For exactly one year.",
            "Indefinitely till it is revoked (no repeated legislative approval is required for its continuation).",
            "For a maximum of three years."
        ],
        correctAnswer: 2, // C
        explanation: "Once approved by both the houses of Parliament, the Financial Emergency continues indefinitely till it is revoked. This implies that there is no maximum period prescribed for its operation and repeated parliamentary approval is not required.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 29,
        question: "During a Financial Emergency, the President can issue directions for the reduction of salaries and allowances of:",
        options: [
            "Only State Government employees.",
            "Only Central Government employees.",
            "All or any class of persons serving the Union and the States, including the Judges of the Supreme Court and the High Courts.",
            "Only Armed Forces personnel."
        ],
        correctAnswer: 2, // C
        explanation: "During the operation of a financial emergency, the President can issue directions for the reduction of salaries and allowances of all or any class of persons serving the Union; and the judges of the Supreme Court and the high court.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    },
    {
        id: 30,
        question: "How many times has a Financial Emergency (under Article 360) been declared in India?",
        options: [
            "Never",
            "Once, in 1991",
            "Twice",
            "Three times"
        ],
        correctAnswer: 0, // A
        explanation: "No Financial Emergency has been declared so far, though there was a financial crisis in 1991.",
        level: "Easy", topic: "Emergency Provisions", difficulty_tier: "Level_1", cognitive_tag: "Historical Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Emergency Provisions" }
    }
];
