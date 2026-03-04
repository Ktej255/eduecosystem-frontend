import type { MCQ } from './mcq-utils';

export const DAY6_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 6)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Like any other modern state, India has two kinds of people. Who are they?",
        options: ["Citizens and Aliens", "Nationals and Expatriates", "Natives and Immigrants", "Residents and Non-Residents"],
        correctAnswer: 0, // A
        explanation: "India has two kinds of people—citizens and aliens. Citizens are full members of the Indian State and owe allegiance to it. Aliens are the citizens of some other state.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 2,
        question: "Aliens are divided into two categories. What are they?",
        options: ["Legal aliens and Illegal aliens", "Friendly aliens and Enemy aliens", "Temporary aliens and Permanent aliens", "Resident aliens and Non-resident aliens"],
        correctAnswer: 1, // B
        explanation: "Aliens are divided into two categories—friendly aliens and enemy aliens. Friendly aliens are subjects of countries with which India has cordial relations.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 3,
        question: "Which of the following Fundamental Rights is available ONLY to Indian citizens and NOT to aliens?",
        options: [
            "Right to equality before the law (Article 14)",
            "Right to freedom of speech and expression (Article 19)",
            "Protection of life and personal liberty (Article 21)",
            "Right to freedom of religion (Article 25)"
        ],
        correctAnswer: 1, // B
        explanation: "Article 19 (Right to freedom of speech and expression, assembly, association, movement, residence and profession) is available exclusively to citizens of India.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 4,
        question: "Is there any difference between a citizen by birth and a naturalized citizen regarding eligibility for the office of the President of India?",
        options: [
            "Yes, only a citizen by birth is eligible for the President's office.",
            "No, both a citizen by birth as well as a naturalized citizen are eligible for the President's office.",
            "Yes, a naturalized citizen must have lived in India for 35 years before becoming eligible.",
            "No, but a naturalized citizen cannot hold the office of the Prime Minister."
        ],
        correctAnswer: 1, // B
        explanation: "In India, both a citizen by birth as well as a naturalized citizen are eligible for the office of President while in USA, only a citizen by birth and not a naturalized citizen is eligible for the office of President.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 5,
        question: "Which Part and Articles of the Constitution deal with Citizenship?",
        options: ["Part I, Articles 1 to 4", "Part II, Articles 5 to 11", "Part III, Articles 12 to 35", "Part IV, Articles 36 to 51"],
        correctAnswer: 1, // B
        explanation: "The Constitution deals with the citizenship from Articles 5 to 11 under Part II.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 6,
        question: "Does the Constitution contain permanent and elaborate provisions relating to citizenship?",
        options: [
            "Yes, it extensively defines the acquisition of citizenship forever.",
            "No, it only identifies the persons who became citizens of India at its commencement (i.e., on January 26, 1950).",
            "Yes, it details every condition under which citizenship can be lost.",
            "No, it leaves everything completely blank for the states to decide."
        ],
        correctAnswer: 1, // B
        explanation: "The Constitution does not contain any permanent or elaborate provisions in this regard. It only identifies the persons who became citizens of India at its commencement (i.e., on January 26, 1950).",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 7,
        question: "Which Article empowers the Parliament to enact a law to provide for the acquisition and termination of citizenship subsequent to the commencement of the Constitution?",
        options: ["Article 5", "Article 8", "Article 10", "Article 11"],
        correctAnswer: 3, // D
        explanation: "Article 11 empowers the Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 8,
        question: "Following the power granted by Article 11, which comprehensive act did Parliament pass relating to citizenship?",
        options: ["The Indian Citizenship Act, 1947", "The Citizenship Act, 1950", "The Citizenship Act, 1955", "The Foreigners Act, 1946"],
        correctAnswer: 2, // C
        explanation: "The Parliament enacted the Citizenship Act, 1955, which has been amended comprehensively over the years.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 9,
        question: "According to Article 5, a person became a citizen of India at the commencement of the Constitution if they had their domicile in India AND fulfilled which of the following conditions?",
        options: [
            "They were born in India.",
            "Either of their parents was born in India.",
            "They had been ordinarily resident in India for five years immediately before the commencement of the Constitution.",
            "Any one of the above three conditions."
        ],
        correctAnswer: 3, // D
        explanation: "Article 5 states a person having domicile in India became a citizen if he fulfilled any one of the three conditions: born in India, OR either parent born in India, OR ordinarily resident in India for 5 years before Jan 26, 1950.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 10,
        question: "Under Article 9, what happens to an Indian citizen who voluntarily acquires the citizenship of any foreign state?",
        options: [
            "They acquire dual citizenship.",
            "They must pay an expatriation tax.",
            "They shall no longer remain a citizen of India.",
            "They are stripped of voting rights but retain the passport."
        ],
        correctAnswer: 2, // C
        explanation: "Article 9: No person shall be a citizen of India or be deemed to be a citizen of India, if he has voluntarily acquired the citizenship of any foreign state.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 11,
        question: "How many ways are prescribed by the Citizenship Act, 1955, to acquire Indian citizenship?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 2, // C
        explanation: "The Citizenship Act of 1955 prescribes five ways of acquiring citizenship, viz, birth, descent, registration, naturalisation and incorporation of territory.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 12,
        question: "Under the Citizenship Act, 1955 (as amended), a person born in India on or after 3rd December 2004 is considered a citizen of India by birth if:",
        options: [
            "Only the father is a citizen of India.",
            "Any one parent is a citizen of India, regardless of the other's status.",
            "Both of their parents are citizens of India or one is a citizen and the other is not an illegal migrant at the time of birth.",
            "They are born on Indian soil, irrespective of the parents' nationality."
        ],
        correctAnswer: 2, // C
        explanation: "Those born in India on or after 3rd December 2004 are considered citizens of India only if both of their parents are citizens of India or one of whose parents is a citizen of India and the other is not an illegal migrant at the time of their birth.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 13,
        question: "Are the children of foreign diplomats posted in India and enemy aliens eligible to acquire Indian citizenship by birth?",
        options: [
            "Yes, absolutely, if born on Indian soil.",
            "No, they cannot acquire Indian citizenship by birth.",
            "Yes, but only after residing in India for 7 years.",
            "Yes, provided they apply for registration at age 18."
        ],
        correctAnswer: 1, // B
        explanation: "The children of foreign diplomats posted in India and enemy aliens cannot acquire Indian citizenship by birth.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 14,
        question: "A person born outside India on or after December 3, 2004, shall NOT be a citizen of India by descent unless their birth is registered at an Indian consulate within what time period?",
        options: ["Six months", "One year", "Five years", "Before attaining the age of 18"],
        correctAnswer: 1, // B
        explanation: "From December 3, 2004 onwards, a person born outside India shall not be a citizen of India by descent, unless his birth is registered at an Indian consulate within one year of the date of birth or with the permission of the Central Government.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 15,
        question: "The Central Government may, on an application, register as a citizen of India any person (not being an illegal migrant) if they belong to any of several categories. One such category is 'a person of Indian origin who is ordinarily resident in India for _______ before making an application for registration'.",
        options: ["Five years", "Seven years", "Ten years", "Twelve years"],
        correctAnswer: 1, // B
        explanation: "A person of Indian origin who is ordinarily resident in India for seven years before making an application for registration can be registered as an Indian citizen.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 16,
        question: "Under 'Naturalisation', the Central Government may grant a certificate to a foreigner (not an illegal migrant) if they possess certain qualifications. Which of the following is NOT one of those qualifications?",
        options: [
            "They are not a subject of a country where Indians are prevented from becoming naturalized citizens.",
            "They have an adequate knowledge of a language specified in the Eighth Schedule of the Constitution.",
            "They are of good character.",
            "They must have invested a minimum of $1 million in India."
        ],
        correctAnswer: 3, // D
        explanation: "Investment of money is not a qualification for naturalization under the Citizenship Act. Qualifications include repudiating past citizenship, residing in India (or govt service) for 12 months, good character, adequate language knowledge, etc.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 17,
        question: "However, the Government of India may waive ALL or ANY of the conditions for naturalization if the person has rendered distinguished service in which fields?",
        options: [
            "Politics and Administration only.",
            "Science, philosophy, art, literature, world peace or human progress.",
            "Business, commerce, and trade.",
            "Military service solely."
        ],
        correctAnswer: 1, // B
        explanation: "The Government of India may waive all or any of the conditions for naturalisation in the case of a person who has rendered distinguished service to the science, philosophy, art, literature, world peace or human progress.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 18,
        question: "When Puducherry became a part of India, the Government of India issued the Citizenship (Pondicherry) Order, 1962. This exemplifies which method of acquiring citizenship?",
        options: ["Descent", "Registration", "Naturalisation", "By Incorporation of Territory"],
        correctAnswer: 3, // D
        explanation: "If any foreign territory becomes a part of India, the Government of India specifies the persons who among the people of the territory shall be the citizens of India. Such persons become the citizens of India from the notified date (Incorporation of Territory).",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 19,
        question: "The Citizenship Act, 1955 prescribes three ways of losing citizenship whether acquired under the Act or prior to it under the Constitution. What are they?",
        options: [
            "Renunciation, Termination, and Deprivation",
            "Expulsion, Deportation, and Extradition",
            "Resignation, Expiration, and Cancellation",
            "Abandonment, Forfeiture, and Exile"
        ],
        correctAnswer: 0, // A
        explanation: "The three ways of losing citizenship are renunciation, termination, and deprivation.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 20,
        question: "If an Indian citizen of full age and capacity makes a declaration relinquishing his Indian citizenship, what happens to their minor children?",
        options: [
            "They retain Indian citizenship indefinitely.",
            "They immediately lose Indian citizenship as well.",
            "They are given dual citizenship.",
            "They become stateless until the age of 18."
        ],
        correctAnswer: 1, // B
        explanation: "Every minor child of that person also loses Indian citizenship. However, when such a child attains the age of eighteen, he may resume Indian citizenship.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 21,
        question: "By 'Termination', when an Indian citizen voluntarily acquires the citizenship of another country, his Indian citizenship automatically terminates. Does this provision apply during a war in which India is engaged?",
        options: [
            "Yes, it applies unconditionally at all times.",
            "No, this provision does not apply during a war in which India is engaged.",
            "It depends on the permission of the Supreme Court.",
            "Yes, but only if they join the enemy state."
        ],
        correctAnswer: 1, // B
        explanation: "When an Indian citizen voluntarily acquires the citizenship of another country, his Indian citizenship automatically terminates. This provision, however, does not apply during a war in which India is engaged.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 22,
        question: "Which of the following is a condition under which the Central Government can compulsorily 'deprive' someone of their citizenship?",
        options: [
            "If the citizen has merely lived abroad for 2 years continuously.",
            "If the citizen has obtained the citizenship by fraud.",
            "If the citizen refuses to vote in two consecutive general elections.",
            "If the citizen is born in India but later adopts a foreign religion."
        ],
        correctAnswer: 1, // B
        explanation: "Compulsory deprivation occurs if the citizen has obtained the citizenship by fraud, shown disloyalty to the Constitution, unlawfully traded with the enemy during a war, etc.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 23,
        question: "The Indian Constitution establishes what type of citizenship system?",
        options: [
            "Dual Citizenship (National and State)",
            "Single Citizenship",
            "Triple Citizenship (National, State, and Municipal)",
            "None of the above"
        ],
        correctAnswer: 1, // B
        explanation: "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), it provides for only a single citizenship, that is, the Indian citizenship.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 24,
        question: "In countries like the USA and Switzerland, what kind of citizenship system is adopted?",
        options: ["Single citizenship", "Dual citizenship", "Stateless citizenship", "Supranational citizenship"],
        correctAnswer: 1, // B
        explanation: "In countries like USA and Switzerland, there is a system of dual citizenship. In USA, a person is a citizen of USA and also a citizen of the particular state to which he belongs.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 25,
        question: "As a general rule in India, all citizens irrespective of the state in which they are born or reside enjoy the same political and civil rights over the entire country. However, Article 16 allows Parliament to prescribe 'residence' within a state or UT as a condition for certain employments. Can a State Legislature make such a law?",
        options: [
            "Yes, any State Legislature can prescribe residence qualifications.",
            "No, only Parliament can prescribe residence as a condition, not a State Legislature.",
            "Yes, but only with the Governor's assent.",
            "No, 'residence' can never be a condition for any government job in India."
        ],
        correctAnswer: 1, // B
        explanation: "The Parliament (under Article 16) can prescribe residence within a state or union territory as a condition for certain employments... this power relies strictly with Parliament and NOT a state legislature.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 26,
        question: "Article 15 prohibits discrimination against any citizen on grounds of religion, race, caste, sex or place of birth. Does it prohibit discrimination on the ground of 'residence'?",
        options: [
            "Yes, 'residence' is explicitly mentioned as a prohibited ground in Article 15.",
            "No, it does not prohibit discrimination on the ground of residence.",
            "Yes, the Supreme Court interpreted 'place of birth' to completely mean 'residence'.",
            "No, it only prohibits discrimination based on caste."
        ],
        correctAnswer: 1, // B
        explanation: "Article 15 prohibits discrimination on grounds ONLY of religion, race, caste, sex or place of birth. It does NOT include 'residence'. Hence, a state can provide special benefits or concessions to its residents in matters (like fee concessions in education) not covered by other rights.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 27,
        question: "In September 2000, the Ministry of External Affairs setup a High Level Committee on the Indian Diaspora. Who was its Chairman?",
        options: ["V.N. Khare", "L.M. Singhvi", "P.N. Bhagwati", "Nanabhoy Palkhivala"],
        correctAnswer: 1, // B
        explanation: "In September 2000, the Ministry of External Affairs setup a High Level Committee on the Indian Diaspora under the Chairmanship of L.M. Singhvi.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 28,
        question: "Based on the L.M. Singhvi Committee report, the Citizenship (Amendment) Act 2003 provided for the acquisition of Overseas Citizenship of India (OCI) to PIOs belonging to certain specified countries except:",
        options: ["USA and UK", "Pakistan and Bangladesh", "Canada and Australia", "South Africa and Mauritius"],
        correctAnswer: 1, // B
        explanation: "The 2003 amendment made provision for the acquisition of Overseas Citizenship of India (OCI) by the PIOs of 16 specified countries (later expanded to all except Pakistan and Bangladesh).",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 29,
        question: "The Citizenship (Amendment) Act, 2015 introduced a new scheme called 'Overseas Citizen of India Cardholder'. It merged the OCI card scheme with which other pre-existing scheme?",
        options: ["Non-Resident Indian (NRI) scheme", "Persons of Indian Origin (PIO) card scheme", "Dual Citizenship scheme", "Expatriate Identity Card scheme"],
        correctAnswer: 1, // B
        explanation: "The Citizenship (Amendment) Act, 2015 merged the Person of Indian Origin (PIO) card scheme and the Overseas Citizen of India (OCI) card scheme, creating a single scheme called 'Overseas Citizen of India Cardholder'.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    },
    {
        id: 30,
        question: "Does an Overseas Citizen of India (OCI) Cardholder enjoy the Fundamental Right to equality of opportunity in matters of public employment (Article 16)?",
        options: [
            "Yes, they enjoy all Fundamental Rights.",
            "No, they do not enjoy the right to equality of opportunity in matters of public employment.",
            "Yes, but only in central government jobs.",
            "Yes, provided they pay Indian income tax."
        ],
        correctAnswer: 1, // B
        explanation: "An OCI cardholder is NOT entitled to the right to equality of opportunity in matters of public employment (Article 16). They also lack voting rights and cannot hold offices like President or Supreme Court Judge.",
        level: "Easy", topic: "Citizenship", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Citizenship" }
    }
];
