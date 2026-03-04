import type { MCQ } from './mcq-utils';

export const DAY27_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 27)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In which country did the doctrine of 'Judicial Review' originate and develop?",
        options: [
            "United Kingdom",
            "United States of America",
            "France",
            "India"
        ],
        correctAnswer: 1, // B
        explanation: "The doctrine of judicial review originated and developed in the USA.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 2,
        question: "Which landmark 1803 case in the USA established the principle of Judicial Review?",
        options: [
            "Roe vs. Wade",
            "Marbury vs. Madison",
            "Brown vs. Board of Education",
            "McCulloch vs. Maryland"
        ],
        correctAnswer: 1, // B
        explanation: "It was propounded for the first time in the famous case of Marbury V. Madison (1803) by John Marshall, the then chief justice of the American Supreme Court.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 3,
        question: "In India, does the Constitution explicitly confer the power of judicial review on the judiciary?",
        options: [
            "No, it is an implied convention.",
            "Yes, the Constitution itself confers the power of judicial review on the judiciary.",
            "Yes, but only on the Supreme Court, not the High Courts.",
            "No, it was granted by an Act of Parliament in 1951."
        ],
        correctAnswer: 1, // B
        explanation: "In India, on the other hand, the Constitution itself confers the power of judicial review on the judiciary (both the Supreme Court as well as High Courts).",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Source", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 4,
        question: "The Supreme Court has declared the power of judicial review to be a 'basic feature' of the Constitution. What does this imply?",
        options: [
            "It can be amended by a simple majority in Parliament.",
            "It cannot be curtailed or excluded even by a constitutional amendment.",
            "It applies only to the basic rights of citizens.",
            "It expires after 50 years."
        ],
        correctAnswer: 1, // B
        explanation: "The Supreme Court has declared the power of judicial review as a basic feature of the Constitution or an element of the basic structure of the Constitution. Hence, the power of judicial review cannot be curtailed or excluded even by a constitutional amendment.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Basic Feature", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 5,
        question: "Justice Syed Shah Mohamed Quadri classified Judicial Review into three categories. Which of the following is NOT one of those categories?",
        options: [
            "Judicial review of constitutional amendments.",
            "Judicial review of legislation of Parliament and State Legislatures.",
            "Judicial review of administrative action of the Union and State.",
            "Judicial review of treaties signed with foreign nations."
        ],
        correctAnswer: 3, // D
        explanation: "Justice Syed Shah Mohamed Quadri has classified the judicial review into the following three categories: 1. Judicial review of constitutional amendments. 2. Judicial review of legislation of the Parliament and State Legislatures and subordinate legislations. 3. Judicial review of administrative action of the Union and State...",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Classification", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 6,
        question: "A legislative enactment or an executive order can be challenged in the Supreme Court or the High Courts on which of the following grounds?",
        options: [
            "It infringes upon the Fundamental Rights.",
            "It is outside the competence of the authority which has framed it.",
            "It is repugnant to the constitutional provisions.",
            "All of the above."
        ],
        correctAnswer: 3, // D
        explanation: "A legislative enactment or an executive order can be challenged in the Supreme Court or in the High Courts on the following three grounds: (a) it infringes the Fundamental Rights; (b) it is outside the competence of the authority which has framed it; (c) it is repugnant to the constitutional provisions.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Grounds for Review", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 7,
        question: "Which Article explicitly declares that all laws that are inconsistent with or in derogation of the Fundamental Rights shall be null and void?",
        options: [
            "Article 11",
            "Article 13",
            "Article 21",
            "Article 32"
        ],
        correctAnswer: 1, // B
        explanation: "Article 13 declares that all laws that are inconsistent with or in derogation of the Fundamental Rights shall be null and void.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Article", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 8,
        question: "Which Article guarantees the right to move the Supreme Court for the enforcement of the Fundamental Rights and empowers it to issue writs?",
        options: [
            "Article 14",
            "Article 32",
            "Article 131",
            "Article 226"
        ],
        correctAnswer: 1, // B
        explanation: "Article 32 guarantees the right to move the Supreme Court for the enforcement of the Fundamental Rights and empowers the Supreme Court to issue directions or orders or writs for that purpose.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Article", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 9,
        question: "Which Article empowers the High Courts to issue directions, orders, or writs for the enforcement of Fundamental Rights and for any other purpose?",
        options: [
            "Article 131",
            "Article 136",
            "Article 226",
            "Article 227"
        ],
        correctAnswer: 2, // C
        explanation: "Article 226 empowers the High Courts to issue directions or orders or writs for the enforcement of the Fundamental Rights and for any other purpose.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Article", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 10,
        question: "Article 131 deals with the Original Jurisdiction of the Supreme Court in center-state and inter-state disputes. Does this fall under the ambit of Judicial Review?",
        options: [
            "Yes, it ensures the federal limits are maintained.",
            "No, it is purely an arithmetic division of property.",
            "No, original jurisdiction is separate from judicial review.",
            "Yes, but only if the President asks for it."
        ],
        correctAnswer: 0, // A
        explanation: "Article 131 provides for the original jurisdiction of the Supreme Court in centre-state and inter-state disputes... This is a crucial area where the SC reviews if one entity has overstepped its constitutional boundaries.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Jurisdiction connection", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 11,
        question: "Which Article vests the Supreme Court with the power of 'Special Leave to Appeal' from any judgment or order by any court or tribunal in India (except military)?",
        options: [
            "Article 132",
            "Article 133",
            "Article 136",
            "Article 143"
        ],
        correctAnswer: 2, // C
        explanation: "Article 136 authorises the Supreme Court to grant special leave to appeal from any judgement, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India (except military tribunal).",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Article", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 12,
        question: "Article 143 authorizes the President to seek the opinion of the Supreme Court. This is known as:",
        options: [
            "Original Jurisdiction",
            "Appellate Jurisdiction",
            "Advisory Jurisdiction",
            "Writ Jurisdiction"
        ],
        correctAnswer: 2, // C
        explanation: "Article 143 authorises the President to seek the opinion of the Supreme Court on any question of law or fact and on any pre-constitution legal matters. This is known as Advisory Jurisdiction.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 13,
        question: "Article 245 deals with the territorial extent of laws made by Parliament and State Legislatures. Any law made outside this competence is subject to judicial review. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 0, // A
        explanation: "Article 245 deals with the territorial extent of laws made by Parliament and by the Legislatures of States. It is a ground for judicial review if a legislature passes a law outside its territorial competence.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Federal limits", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 14,
        question: "Which Article read with the Seventh Schedule ensures that Parliament and State Legislatures stick to their respective subject lists (Union, State, Concurrent)?",
        options: [
            "Article 245",
            "Article 246",
            "Article 254",
            "Article 368"
        ],
        correctAnswer: 1, // B
        explanation: "Article 246 read with the Seventh Schedule deals with the subject-matter of laws made by Parliament and by the Legislatures of States.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Federal limits", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 15,
        question: "According to Article 254, if there is an inconsistency between a law made by Parliament and a law made by the Legislature of a State regarding a matter in the Concurrent List, which law generally prevails?",
        options: [
            "The State law always prevails.",
            "The law made by Parliament prevails.",
            "The Supreme Court drafts a new compromise law.",
            "The President decides."
        ],
        correctAnswer: 1, // B
        explanation: "Article 254 provides that in case of a conflict between a central law and a state law on the same subject in the Concurrent List, the central law prevails over the state law.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Federal limits", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 16,
        question: "How does the scope of judicial review in India compare to that of the USA?",
        options: [
            "It is much wider in India.",
            "It is exactly the same.",
            "It is narrower in India than that of what exists in the USA.",
            "It is completely non-existent in the USA."
        ],
        correctAnswer: 2, // C
        explanation: "The scope of judicial review in India is narrower than that of what exists in USA.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Comparison", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 17,
        question: "The American Constitution provides for 'Due Process of Law'. What does the Indian Constitution provide for, which initially restricted the scope of Judicial Review?",
        options: [
            "Rule of Law",
            "Procedure Established by Law",
            "Equality before Law",
            "Substantive Due Process"
        ],
        correctAnswer: 1, // B
        explanation: "This is because the American Constitution provides for 'due process of law' against that of 'procedure established by law' which is contained in the Indian Constitution (Article 21).",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Doctrine", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 18,
        question: "Under 'Procedure Established by Law', a court can check if there is a law to deprive a person's life/liberty and if the prescribed procedure was followed. What does 'Due Process of Law' additionally allow the court to check?",
        options: [
            "If the law was passed unanimously.",
            "If the law itself is fair, just, and not arbitrary.",
            "If the law was signed by the President within 10 days.",
            "If the law applies to foreigners."
        ],
        correctAnswer: 1, // B
        explanation: "The due process of law gives wide scope to the Supreme Court to grant protection to the rights of its citizens. It can declare laws violative of these rights void not only on substantive grounds of being unlawful, but also on procedural grounds of being unreasonable. Our Supreme Court... examines only the substantive question i.e., whether the law is within the powers of the authority concerned or not (initially).",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Concept", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 19,
        question: "Which Schedule of the Indian Constitution was originally created (by the 1st Amendment in 1951) to protect certain laws (especially land reforms) from judicial review on the ground of violating Fundamental Rights?",
        options: [
            "Sixth Schedule",
            "Eighth Schedule",
            "Ninth Schedule",
            "Tenth Schedule"
        ],
        correctAnswer: 2, // C
        explanation: "Article 31B saves the acts and regulations included in the Ninth Schedule from being challenged and invalidated on the ground of contravention of any of the Fundamental Rights.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Schedule", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 20,
        question: "In the landmark I.R. Coelho Case (2007) [also known as the Ninth Schedule Case], the Supreme Court ruled that there could not be a blanket immunity from judicial review. They set a specific cut-off date. What is this date?",
        options: [
            "January 26, 1950",
            "August 15, 1947",
            "April 24, 1973",
            "June 25, 1975"
        ],
        correctAnswer: 2, // C
        explanation: "In a landmark judgement delivered in January 2007, the Supreme Court ruled that there could not be any blanket immunity from judicial review of laws included in the Ninth Schedule. The apex court held that judicial review is a 'basic feature' of the constitution and it could not be taken away by putting a law under the Ninth Schedule. It said that the laws placed under the Ninth Schedule after April 24, 1973, are open to challenge...",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Landmark Judgment Date", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 21,
        question: "Why was 'April 24, 1973' chosen as the cut-off date in the I.R. Coelho case for reviewing laws in the Ninth Schedule?",
        options: [
            "It was the day the Emergency was declared.",
            "It was the day the Constitution was originally adopted.",
            "It is the date of the Kesavananda Bharati judgment, which propounded the 'Basic Structure' doctrine.",
            "It was the day the Ninth Schedule was created."
        ],
        correctAnswer: 2, // C
        explanation: "The date April 24, 1973 is the date of the historic Kesavananda Bharati judgement, wherein the Supreme Court propounded the doctrine of 'basic structure'.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Landmark Judgment Concept", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 22,
        question: "Therefore, according to the 2007 judgment, laws placed in the Ninth Schedule AFTER April 24, 1973, can be challenged in court if they violate:",
        options: [
            "Only Article 14",
            "Only Article 19",
            "Only Article 21",
            "The Fundamental Rights guaranteed under Articles 14, 15, 19 and 21 or the basic structure of the Constitution."
        ],
        correctAnswer: 3, // D
        explanation: "It said that the laws placed under the Ninth Schedule after April 24, 1973, are open to challenge in court if they violated Fundamental Rights guaranteed under Articles 14, 15, 19 and 21 or the basic structure of the Constitution.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Scope of Review", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 23,
        question: "Is 'Judicial Review' explicitly defined anywhere as a specific phrase with a set definition in the text of the Constitution of India?",
        options: [
            "Yes, in Article 13.",
            "Yes, in Article 32.",
            "Yes, in the Preamble.",
            "No, the phrase 'Judicial Review' has nowhere been used in the Constitution."
        ],
        correctAnswer: 3, // D
        explanation: "Though the phrase 'Judicial Review' has nowhere been used in the Constitution, the provisions of several Articles explicitly confer the power of judicial review on the Supreme Court and the High Courts.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 24,
        question: "Article 227 vests the High Courts with the power of ________ over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.",
        options: [
            "Original Jurisdiction",
            "Superintendence",
            "Advisory powers",
            "Financial control"
        ],
        correctAnswer: 1, // B
        explanation: "Article 227 vests the High Courts with the power of superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Article", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 25,
        question: "Which Constitutional Amendment Act (1976) severely curtailed the judicial review power of the Supreme Court and High Courts?",
        options: [
            "24th Amendment",
            "25th Amendment",
            "42nd Amendment",
            "44th Amendment"
        ],
        correctAnswer: 2, // C
        explanation: "The 42nd Amendment Act of 1976 curtailed the judicial review power of the Supreme Court and High Courts...",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Amendment", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 26,
        question: "Which subsequent Constitutional Amendment Act (1977) restored the original jurisdiction of the Supreme Court in respect of judicial review to a large extent?",
        options: [
            "43rd Amendment Act",
            "44th Amendment Act",
            "45th Amendment Act",
            "46th Amendment Act"
        ],
        correctAnswer: 0, // A
        explanation: "However, the 43rd Amendment Act of 1977 restored the original position (power of judicial review) to the Supreme Court and High Courts.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Amendment", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 27,
        question: "Article 137 empowers the Supreme Court to review any judgment pronounced or order made by it. This is directly an exercise of:",
        options: [
            "Reviewing its own previous decisions to correct errors.",
            "Reviewing the laws made by the State Legislatures.",
            "Reviewing the administrative actions of the President.",
            "Reviewing military tribunal proceedings."
        ],
        correctAnswer: 0, // A
        explanation: "Article 137 lays down that the Supreme Court shall have the power to review any judgement pronounced or order made by it.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Review of own judgment", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 28,
        question: "If the Central Government uses Article 356 (President's Rule) in a state, can the Supreme Court examine the validity of this action?",
        options: [
            "No, it is purely a political decision by the President.",
            "Yes, administrative actions of the Union and State fall under the scope of judicial review.",
            "No, unless the Parliament passes a resolution to allow it.",
            "Yes, but only if the Governor requests it."
        ],
        correctAnswer: 1, // B
        explanation: "Judicial review of administrative action of the Union and State and authorities under the state is one of the three categories of judicial review. The S.R. Bommai case specifically brought Article 356 under judicial review.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Scope of Review", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 29,
        question: "The power of judicial review in India is shared by:",
        options: [
            "Only the Supreme Court",
            "Only the High Courts",
            "The Supreme Court and the High Courts",
            "The Supreme Court, High Courts, and District Courts."
        ],
        correctAnswer: 2, // C
        explanation: "In India, on the other hand, the Constitution itself confers the power of judicial review on the judiciary (both the Supreme Court as well as High Courts).",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Jurisdictional Entities", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    },
    {
        id: 30,
        question: "Article 372 (1) ensures the continuance in force of existing laws and their adaptation. If a pre-constitution law is found to violate Fundamental Rights, it can be reviewed and struck down. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Depends on the President's order"
        ],
        correctAnswer: 0, // A
        explanation: "Article 372 (1) establishes the continuity of the pre-constitution laws. However, if they conflict with part III, they are void under Article 13(1), which is a key mechanism of judicial review.",
        level: "Easy", topic: "Judicial Review", difficulty_tier: "Level_1", cognitive_tag: "Pre-Constitution Laws", source_mapping: { book: "M. Laxmikanth", chapter: "Judicial Review" }
    }
];
