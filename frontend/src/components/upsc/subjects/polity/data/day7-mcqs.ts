import type { MCQ } from './mcq-utils';

export const DAY7_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 7)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In which Part of the Constitution are the Fundamental Rights enshrined?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        correctAnswer: 1, // B
        explanation: "The Fundamental Rights are enshrined in Part III of the Constitution from Articles 12 to 35.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 2,
        question: "The framers of the Indian Constitution derived inspiration for Fundamental Rights from the constitution of which country?",
        options: ["Britain", "Ireland", "USSR", "USA"],
        correctAnswer: 3, // D
        explanation: "The framers derived inspiration from the Constitution of USA (i.e., Bill of Rights).",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 3,
        question: "Part III of the Constitution is rightly described as the:",
        options: ["Magna Carta of India", "Soul of the Constitution", "Instrument of Instructions", "Identity Card of the Constitution"],
        correctAnswer: 0, // A
        explanation: "Part III of the Constitution is rightly described as the Magna Carta of India. It contains a very long and comprehensive list of 'justiciable' Fundamental Rights.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 4,
        question: "Originally, the Constitution provided for how many Fundamental Rights?",
        options: ["Six", "Seven", "Eight", "Ten"],
        correctAnswer: 1, // B
        explanation: "Originally, the Constitution provided for seven Fundamental Rights. The Right to Property was deleted later.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 5,
        question: "Which Fundamental Right was deleted from the list of Fundamental Rights by the 44th Amendment Act, 1978?",
        options: ["Right to Freedom of Religion", "Right against Exploitation", "Right to Property", "Cultural and Educational Rights"],
        correctAnswer: 2, // C
        explanation: "The right to property was deleted from the list of Fundamental Rights by the 44th Amendment Act, 1978. It is now a legal right under Article 300-A.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 6,
        question: "Fundamental Rights are meant for promoting the ideal of:",
        options: ["Social democracy", "Political democracy", "Economic democracy", "Cultural democracy"],
        correctAnswer: 1, // B
        explanation: "The Fundamental Rights are meant for promoting the ideal of political democracy. They prevent the establishment of an authoritarian and despotic rule in the country.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 7,
        question: "Are the Fundamental Rights absolute in nature?",
        options: [
            "Yes, they are absolute and immune from any interference.",
            "No, they are not absolute but qualified. The state can impose reasonable restrictions on them.",
            "Yes, except during a financial emergency.",
            "No, they are entirely subject to the absolute discretion of Parliament."
        ],
        correctAnswer: 1, // B
        explanation: "Some of them are available only to the citizens while others are available to all persons. However, they are not absolute but qualified. The state can impose 'reasonable restrictions' on them.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 8,
        question: "If a person's Fundamental Rights are violated, can they directly approach the Supreme Court?",
        options: [
            "No, they must first exhaust all remedies in lower courts.",
            "Yes, they can directly go to the Supreme Court, which can issue writs for their restoration.",
            "No, only the High Courts have original jurisdiction over Fundamental Rights.",
            "Yes, but only if Parliament grants permission."
        ],
        correctAnswer: 1, // B
        explanation: "They are defended and guaranteed by the Supreme Court. Hence, the aggrieved person can directly go to the Supreme Court (not necessarily by way of appeal against the judgement of the high courts).",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 9,
        question: "Which of the following Fundamental Rights CANNOT be suspended during a National Emergency?",
        options: [
            "Articles 14 and 15",
            "Articles 19 and 20",
            "Articles 20 and 21",
            "Articles 21 and 22"
        ],
        correctAnswer: 2, // C
        explanation: "Fundamental Rights can be suspended during the operation of a National Emergency except the rights guaranteed by Articles 20 and 21.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 10,
        question: "Which Article defines the term 'State' for the purposes of Part III of the Constitution?",
        options: ["Article 12", "Article 13", "Article 14", "Article 15"],
        correctAnswer: 0, // A
        explanation: "Article 12 has defined the term 'State' for the purposes of Part III. It includes the executive and legislative organs of the Union and states, local authorities, and all other statutory/non-statutory authorities.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 11,
        question: "Article 13 declares that all laws that are inconsistent with or in derogation of any of the fundamental rights shall be void. This doctrine is known as the doctrine of:",
        options: ["Separation of Powers", "Judicial Review", "Eminent Domain", "Pith and Substance"],
        correctAnswer: 1, // B
        explanation: "Article 13 expressly provides for the doctrine of judicial review. This power has been conferred on the Supreme Court (Article 32) and the high courts (Article 226).",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 12,
        question: "Article 14 states that the State shall not deny to any person equality before the law or the equal protection of the laws. Is this right available to foreigners?",
        options: [
            "No, it is strictly for Indian citizens only.",
            "Yes, it is available to all persons, whether citizens or foreigners.",
            "Yes, but only to citizens of Commonwealth countries.",
            "No, because foreigners are not subject to Indian laws."
        ],
        correctAnswer: 1, // B
        explanation: "The Supreme Court held that where Article 14 uses the word 'person', it includes legal persons as well as foreigners. It applies to all persons whether citizens or foreigners.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 13,
        question: "Article 15 provides that the State shall not discriminate against any citizen on grounds ONLY of:",
        options: [
            "Religion, race, caste, sex or place of birth",
            "Religion, race, caste, sex, residence or descent",
            "Religion, language, caste, sex or wealth",
            "Religion, race, ideology, sex or place of birth"
        ],
        correctAnswer: 0, // A
        explanation: "Article 15 provides that the State shall not discriminate against any citizen on grounds only of religion, race, caste, sex or place of birth.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 14,
        question: "Article 16 guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. Can the State make provisions for the reservation of appointments in favor of backward classes?",
        options: [
            "No, reservation violates the basic principle of equality of opportunity.",
            "Yes, Article 16 permits the State to make reservations for any backward class of citizens not adequately represented.",
            "Yes, but only in the private sector.",
            "No, only Parliament can make such reservations, not the State."
        ],
        correctAnswer: 1, // B
        explanation: "Article 16 provides for equality of opportunity... However, there are exceptions: The State can provide for reservation of appointments or posts in favour of any backward class that is not adequately represented in the state services.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 15,
        question: "Which Article of the Constitution abolishes 'Untouchability' and forbids its practice in any form?",
        options: ["Article 16", "Article 17", "Article 18", "Article 19"],
        correctAnswer: 1, // B
        explanation: "Article 17 abolishes 'untouchability' and forbids its practice in any form. The enforcement of any disability arising out of untouchability shall be an offence punishable in accordance with law.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 16,
        question: "Article 18 abolishes titles. Which of the following titles are NOT prohibited by Article 18?",
        options: [
            "Hereditary titles like Maharaja or Raj Bahadur",
            "Titles conferred by foreign states",
            "Military and academic distinctions",
            "Titles of nobility like Duke or Earl"
        ],
        correctAnswer: 2, // C
        explanation: "Article 18 abolishes titles and makes four provisions... It prohibits the state from conferring any title (except a military or academic distinction) on any body, whether a citizen or a foreigner.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 17,
        question: "Article 19 guarantees to all citizens six rights. Which of the following is NOT one of the six rights currently guaranteed under Article 19?",
        options: [
            "Right to freedom of speech and expression",
            "Right to assemble peaceably and without arms",
            "Right to acquire, hold and dispose of property",
            "Right to form associations or unions"
        ],
        correctAnswer: 2, // C
        explanation: "Originally, Article 19 contained seven rights. But, the right to acquire, hold and dispose of property was deleted by the 44th Amendment Act of 1978. The remaining six are speech, assembly, association, movement, residence, and profession.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 18,
        question: "Article 20 grants protection against arbitrary and excessive punishment to an accused person. It provides three specific protections. Which of the following is NOT one of them?",
        options: [
            "No ex-post-facto law",
            "No double jeopardy",
            "No self-incrimination",
            "Right to speedy trial"
        ],
        correctAnswer: 3, // D
        explanation: "Article 20 contains three provisions: No ex-post-facto law, No double jeopardy (not punished for the same offence more than once), and No self-incrimination (cannot be compelled to be a witness against himself). The Right to speedy trial falls under Article 21's broad interpretations, not the explicit text of Article 20.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 19,
        question: "Which Article declares that no person shall be deprived of his life or personal liberty except according to procedure established by law?",
        options: ["Article 20", "Article 21", "Article 22", "Article 23"],
        correctAnswer: 1, // B
        explanation: "Article 21 declares that no person shall be deprived of his life or personal liberty except according to procedure established by law. This right is available to both citizens and non-citizens.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 20,
        question: "Which Amendment Act famously added Article 21A, making elementary education a Fundamental Right?",
        options: ["44th Amendment Act, 1978", "73rd Amendment Act, 1992", "86th Amendment Act, 2002", "97th Amendment Act, 2011"],
        correctAnswer: 2, // C
        explanation: "Article 21A, declaring that the State shall provide free and compulsory education to all children of the age of six to fourteen years, was added by the 86th Constitutional Amendment Act of 2002.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 21,
        question: "Article 22 grants protection to persons who are arrested or detained. A person arrested and detained in custody must be produced before the nearest magistrate within a period of:",
        options: ["12 hours", "24 hours", "48 hours", "72 hours"],
        correctAnswer: 1, // B
        explanation: "Article 22 protects against arbitrary arrest. The arrested person has the right to be produced before a magistrate within 24 hours including the journey time.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 22,
        question: "Article 23 prohibits traffic in human beings, begar (forced labour) and other similar forms of forced labour. This right is available to:",
        options: [
            "Only citizens",
            "Both citizens and non-citizens",
            "Only women and children",
            "Only Scheduled Castes and Scheduled Tribes"
        ],
        correctAnswer: 1, // B
        explanation: "Article 23 prohibits traffic in human beings, begar and other similar forms of forced labour. This right is available to both citizens and non-citizens.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 23,
        question: "Under Article 24, employment of children below what age is completely prohibited in any factory, mine, or other hazardous activities?",
        options: ["12 years", "14 years", "16 years", "18 years"],
        correctAnswer: 1, // B
        explanation: "Article 24 prohibits the employment of children below the age of 14 years in any factory, mine or other hazardous activities like construction work or railway.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 24,
        question: "Article 25 says that all persons are equally entitled to freedom of conscience and the right to freely profess, practice, and propagate religion. However, these rights are subject to:",
        options: [
            "Public order, morality, and health",
            "Public opinion, tradition, and state security",
            "Parliamentary approval every 5 years",
            "The consent of the majority community"
        ],
        correctAnswer: 0, // A
        explanation: "Article 25 guarantees freedom of conscience... However, these rights are subject to public order, morality, health and other provisions relating to fundamental rights.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 25,
        question: "Which Article grants religious denominations the right to establish and maintain institutions for religious and charitable purposes and to manage their own affairs in matters of religion?",
        options: ["Article 25", "Article 26", "Article 27", "Article 28"],
        correctAnswer: 1, // B
        explanation: "Article 26 deals with the freedom to manage religious affairs. Every religious denomination or any of its section shall have the right to establish and maintain institutions, etc.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 26,
        question: "Under Article 28, is religious instruction permitted in educational institutions wholly maintained out of State funds?",
        options: [
            "Yes, if the students voluntarily request it.",
            "Yes, provided it is outside regular school hours.",
            "No, religious instruction is completely prohibited in institutions wholly maintained out of State funds.",
            "No, unless the President gives special permission."
        ],
        correctAnswer: 2, // C
        explanation: "Under Article 28, no religious instruction shall be provided in any educational institution wholly maintained out of State funds.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 27,
        question: "Which Article provides that any section of the citizens residing in any part of India having a distinct language, script, or culture of its own, shall have the right to conserve the same?",
        options: ["Article 28", "Article 29", "Article 30", "Article 32"],
        correctAnswer: 1, // B
        explanation: "Article 29 provides that any section of the citizens residing in any part of India having a distinct language, script or culture of its own, shall have the right to conserve the same.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 28,
        question: "Article 30 grants the right to establish and administer educational institutions to:",
        options: [
            "All citizens universally.",
            "Only religious and linguistic minorities.",
            "Only linguistic minorities.",
            "State Governments exclusively."
        ],
        correctAnswer: 1, // B
        explanation: "Article 30 grants rights to minorities (religious or linguistic) to establish and administer educational institutions of their choice.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 29,
        question: "Dr. B.R. Ambedkar called Article 32 the most important Article of the Constitution. What does Article 32 guarantee?",
        options: [
            "The right to life and personal liberty.",
            "The right to constitutional remedies—the right to move the Supreme Court for the enforcement of Fundamental Rights.",
            "The right to vote in general elections.",
            "The right to property."
        ],
        correctAnswer: 1, // B
        explanation: "Article 32 confers the right to remedies for the enforcement of the fundamental rights of an aggrieved citizen. In other words, the right to get the Fundamental Rights protected is in itself a fundamental right.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    },
    {
        id: 30,
        question: "Which Article empowers Parliament to restrict or abrogate the Fundamental Rights of the members of armed forces, para-military forces, police forces, and intelligence agencies?",
        options: ["Article 31", "Article 32", "Article 33", "Article 34"],
        correctAnswer: 2, // C
        explanation: "Article 33 empowers the Parliament to restrict or abrogate the fundamental rights of the members of armed forces, para-military forces, police forces, intelligence agencies and analogous forces.",
        level: "Easy", topic: "Fundamental Rights", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Fundamental Rights" }
    }
];
