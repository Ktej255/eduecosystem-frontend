import { MCQ } from "./day1-mcqs";

/**
 * Indian Polity - Chapter 7: Citizenship
 * 60 MCQs for Day 5 Evening Session (6-7 PM)
 * Topic metadata included for detailed analytics
 */
export const DAY5_MCQS: MCQ[] = [
    // Q1
    {
        id: 1,
        question: "Consider the following statements regarding the constitutional provisions of citizenship in India:\n\n1. The Constitution identifies the persons who became citizens of India at its commencement (January 26, 1950).\n2. It contains permanent and elaborate provisions regarding the acquisition and loss of citizenship subsequent to the commencement of the Constitution.\n3. Parliament has the exclusive power to make any provision with respect to the acquisition and termination of citizenship.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 1, // b
        explanation: "Statement 2 is incorrect; provisions are neither permanent nor elaborate. The Constitution only identifies citizens at commencement and leaves subsequent matters to Parliament.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Constitutional Provisions Overview"
    },
    // Q2
    {
        id: 2,
        question: "According to Article 5 of the Constitution, a person domiciled in India became a citizen at the commencement of the Constitution if he/she fulfilled which of the following conditions?\n\n1. He/she was born in India.\n2. Either of his/her parents was born in India.\n3. He/she has been ordinarily resident in India for not less than five years immediately preceding such commencement.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "Any one of 1, 2, or 3"
        ],
        correctAnswer: 3, // d
        explanation: "Fulfilling ANY one of the three conditions was sufficient for citizenship under Article 5.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 5 - Citizenship at Commencement"
    },
    // Q3
    {
        id: 3,
        question: "With reference to Article 6 (Rights of citizenship of certain persons who have migrated to India from Pakistan), consider the following statements:\n\n1. It deals with persons who migrated to India from Pakistan before the commencement of the Constitution.\n2. If a person migrated to India on or after July 19, 1948, he could be registered as a citizen only if he had been resident in India for at least six months preceding the date of his application.\n3. The \"permit system\" for migration from Pakistan to India was introduced on July 19, 1948.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3, // d
        explanation: "All statements are correct regarding Article 6 provisions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 6 - Migration from Pakistan"
    },
    // Q4
    {
        id: 4,
        question: "Statement I: A person who migrated to Pakistan from India after March 1, 1947, but later returned to India for resettlement under a permanent permit could become an Indian citizen.\n\nStatement II: Article 7 overrides the provisions of Article 5 and Article 6 regarding citizenship.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 0, // a
        explanation: "Article 7 does override Articles 5 and 6, which explains why such persons could become citizens through this special provision.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 7 - Rights of Migrants to Pakistan"
    },
    // Q5
    {
        id: 5,
        question: "Article 8 of the Constitution covers which category of persons?",
        options: [
            "Persons domiciled in India",
            "Persons of Indian origin residing outside India",
            "Persons who migrated from Pakistan",
            "Persons who acquired foreign citizenship voluntarily"
        ],
        correctAnswer: 1, // b
        explanation: "Article 8 deals with persons of Indian origin residing outside India.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 8 - Persons of Indian Origin Abroad"
    },
    // Q6
    {
        id: 6,
        question: "Consider the following statements regarding the loss of citizenship under the Constitution (Article 9):\n\n1. It applies to a person who has voluntarily acquired the citizenship of any foreign State.\n2. This provision deals with the acquisition of foreign citizenship even after the commencement of the Constitution.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 0, // a
        explanation: "Statement 2 is incorrect; Article 9 deals with voluntary acquisition before the commencement of the Constitution.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 9 - Voluntary Acquisition of Foreign Citizenship"
    },
    // Q7
    {
        id: 7,
        question: "Which Article of the Constitution declares that every person who is or is deemed to be a citizen of India shall continue to be such citizen subject to the provisions of any law made by Parliament?",
        options: [
            "Article 9",
            "Article 10",
            "Article 11",
            "Article 8"
        ],
        correctAnswer: 1, // b
        explanation: "Article 10 provides for continuance of rights of citizenship.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 10 - Continuance of Citizenship"
    },
    // Q8
    {
        id: 8,
        question: "The Citizenship Act, 1955 originally provided for which of the following?\n\n1. Citizenship by Birth\n2. Citizenship by Descent\n3. Commonwealth Citizenship\n4. Dual Citizenship\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "1, 2 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 1, // b
        explanation: "Dual citizenship is not provided under Indian law. The Citizenship Act originally provided for citizenship by birth, descent, registration, naturalisation, and by incorporation of territory, plus Commonwealth citizenship (later repealed).",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship Act 1955 - Overview"
    },
    // Q9
    {
        id: 9,
        question: "With reference to 'Citizenship by Birth' under the Citizenship Act, 1955, consider the following statements:\n\n1. A person born in India on or after January 26, 1950, but before July 1, 1987, is a citizen of India irrespective of the nationality of his parents.\n2. A person born in India on or after December 3, 2004, is a citizen of India only if both parents are citizens of India or one is a citizen and the other is not an illegal migrant.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct details of the Act regarding citizenship by birth provisions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Birth"
    },
    // Q10
    {
        id: 10,
        question: "Consider the following statements regarding 'Citizenship by Descent':\n\n1. A person born outside India on or after December 10, 1992, is a citizen of India if either of his parents is a citizen of India at the time of his birth.\n2. From December 3, 2004, a person born outside India shall not be a citizen by descent unless his birth is registered at an Indian consulate within one year of the date of birth.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct; registration became mandatory after Dec 3, 2004.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Descent"
    },
    // Q11
    {
        id: 11,
        question: "For 'Citizenship by Registration', which of the following conditions must be met by a person of Indian origin who is ordinarily resident in India?",
        options: [
            "Resident for 5 years immediately before making an application",
            "Resident for 7 years immediately before making an application",
            "Resident for 10 years immediately before making an application",
            "Resident for 12 months immediately before making an application"
        ],
        correctAnswer: 1, // b
        explanation: "7 years of ordinary residence is required for citizenship by registration.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Registration"
    },
    // Q12
    {
        id: 12,
        question: "Which of the following categories of persons are eligible to register as citizens of India under Section 5 of the Citizenship Act, 1955?\n\n1. A person who is married to a citizen of India and is ordinarily resident in India for seven years.\n2. Minor children of persons who are citizens of India.\n3. A person of full age and capacity whose parents are registered as citizens of India.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3, // d
        explanation: "All three categories are eligible for registration as citizens.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Registration"
    },
    // Q13
    {
        id: 13,
        question: "To acquire citizenship by 'Naturalisation', an applicant must possess which of the following qualifications?\n\n1. He/she is not a subject or citizen of any country where citizens of India are prevented from becoming subjects or citizens of that country by naturalisation.\n2. He/she has an adequate knowledge of a language specified in the Eighth Schedule to the Constitution.\n3. He/she intends to reside in India or enter into service under a Government in India.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 2, // c
        explanation: "All three are qualifications for naturalisation under the Citizenship Act.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Naturalisation"
    },
    // Q14
    {
        id: 14,
        question: "In the context of Naturalisation, the aggregate period of residence or service in India required for a person belonging to Hindu, Sikh, Buddhist, Jain, Parsi, or Christian community from Afghanistan, Bangladesh, or Pakistan has been reduced to:",
        options: [
            "11 years",
            "7 years",
            "6 years",
            "5 years"
        ],
        correctAnswer: 3, // d
        explanation: "The Citizenship (Amendment) Act, 2019 reduced the requirement to 5 years for specified communities from these three countries.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "CAA 2019"
    },
    // Q15
    {
        id: 15,
        question: "The Central Government may waive all or any of the conditions for naturalisation in the case of a person who has rendered distinguished service to which of the following?\n\n1. Science\n2. Philosophy\n3. Art\n4. Literature\n5. World Peace\n\nSelect the correct answer using the code given below:",
        options: [
            "1, 3 and 5 only",
            "2, 4 and 5 only",
            "1, 2, 3 and 4 only",
            "1, 2, 3, 4 and 5"
        ],
        correctAnswer: 3, // d
        explanation: "All fields listed (science, philosophy, art, literature, world peace) are grounds for waiver.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Naturalisation"
    },
    // Q16
    {
        id: 16,
        question: "Which Order was issued by the Government of India under the Citizenship Act, 1955, when Puducherry became a part of India?",
        options: [
            "The Citizenship (Puducherry) Order, 1960",
            "The Citizenship (Puducherry) Order, 1962",
            "The Citizenship (Puducherry) Order, 1964",
            "The Citizenship (Puducherry) Order, 1966"
        ],
        correctAnswer: 1, // b
        explanation: "The Citizenship (Pondicherry) Order, 1962 was issued when Puducherry became part of India.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Incorporation of Territory"
    },
    // Q17
    {
        id: 17,
        question: "Regarding the 'Special Provisions as to Citizenship of Persons Covered by the Assam Accord', consider the following statements:\n\n1. It applies to persons of Indian origin who came to Assam from Bangladesh before January 1, 1966.\n2. Persons who came to Assam on or after January 1, 1966, but before March 25, 1971, must register themselves.\n3. Such registered persons enjoy all rights of a citizen including the right to vote for a period of ten years from the date of detection.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 0, // a
        explanation: "Statement 3 is incorrect; they do NOT enjoy the right to vote for 10 years.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Assam Accord"
    },
    // Q18
    {
        id: 18,
        question: "The Citizenship (Amendment) Act, 2019, grants citizenship to migrants belonging to specific communities from which three countries?",
        options: [
            "Pakistan, Afghanistan, Myanmar",
            "Pakistan, Bangladesh, Afghanistan",
            "Pakistan, Bangladesh, Sri Lanka",
            "Afghanistan, Bangladesh, Nepal"
        ],
        correctAnswer: 1, // b
        explanation: "CAA 2019 covers migrants from Pakistan, Bangladesh, and Afghanistan.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "CAA 2019"
    },
    // Q19
    {
        id: 19,
        question: "The provisions of the Citizenship (Amendment) Act, 2019, do not apply to:\n\n1. Tribal areas of Assam, Meghalaya, Mizoram, and Tripura included in the Sixth Schedule.\n2. The area covered under \"The Inner Line\" notified under the Bengal Eastern Frontier Regulation, 1873.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both exemptions are correct - Sixth Schedule areas and Inner Line Permit areas are exempted from CAA 2019.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "CAA 2019"
    },
    // Q20
    {
        id: 20,
        question: "Which of the following ways of losing citizenship is/are prescribed by the Citizenship Act, 1955?\n\n1. Renunciation\n2. Termination\n3. Deprivation\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3, // d
        explanation: "All three - renunciation, termination, and deprivation - are modes of losing citizenship under the Act.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Loss of Citizenship"
    },
    // Q21
    {
        id: 21,
        question: "Consider the following statements regarding 'Renunciation of Citizenship':\n\n1. If a person makes a declaration of renunciation during a war in which India is engaged, the registration shall be withheld by the Central Government.\n2. When a person renounces his Indian citizenship, every minor child of that person also loses Indian citizenship.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct regarding renunciation of citizenship.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Renunciation of Citizenship"
    },
    // Q22
    {
        id: 22,
        question: "The termination of Indian citizenship takes place automatically when:",
        options: [
            "A citizen shows disloyalty to the Constitution of India.",
            "A citizen voluntarily acquires the citizenship of another country.",
            "A citizen has been ordinarily resident out of India for seven years continuously.",
            "A citizen has obtained citizenship by fraud."
        ],
        correctAnswer: 1, // b
        explanation: "Termination occurs automatically when a citizen voluntarily acquires foreign citizenship.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Termination of Citizenship"
    },
    // Q23
    {
        id: 23,
        question: "The Central Government may deprive a citizen of his citizenship if he/she has been imprisoned in any country for two years within how many years of registration or naturalisation?",
        options: [
            "Three years",
            "Five years",
            "Seven years",
            "Ten years"
        ],
        correctAnswer: 1, // b
        explanation: "Five years is the period within which imprisonment leads to deprivation.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Deprivation of Citizenship"
    },
    // Q24
    {
        id: 24,
        question: "Statement I: The Constitution of India provides for single citizenship for the entire country.\n\nStatement II: In India, a citizen has the right to move freely throughout the territory of India and reside in any part of it, without any discrimination.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 1, // b
        explanation: "Both are correct but II explains the right to move, not the concept of single citizenship directly, which relates to allegiance.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Single Citizenship"
    },
    // Q25
    {
        id: 25,
        question: "Which of the following is an exception to the rule of non-discrimination based on residence under Article 16?",
        options: [
            "Parliament can prescribe residence as a condition for certain employments in a State or UT.",
            "State Legislatures can prescribe residence as a condition for certain employments in that State.",
            "Both Parliament and State Legislatures can prescribe residence as a condition.",
            "Neither Parliament nor State Legislatures can prescribe residence as a condition."
        ],
        correctAnswer: 0, // a
        explanation: "Only Parliament can prescribe residence conditions as an exception to Article 16.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Single Citizenship - Residence Requirements"
    },
    // Q26
    {
        id: 26,
        question: "Consider the following statements regarding the \"Overseas Citizen of India (OCI) Cardholder\":\n\n1. The scheme was introduced by the Citizenship (Amendment) Act, 2005.\n2. It provides for dual citizenship to Persons of Indian Origin (PIOs) of all countries.\n3. The PIO card scheme was rescinded and merged with the OCI card scheme in 2015.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 2 only",
            "1 and 3 only",
            "3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1, // b
        explanation: "Statement 2 is incorrect; OCI is not dual citizenship. Statements 1 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders"
    },
    // Q27
    {
        id: 27,
        question: "Who among the following is NOT eligible for registration as an OCI Cardholder?",
        options: [
            "A person who was a citizen of India at the time of the commencement of the Constitution.",
            "A person who belonged to a territory that became part of India after August 15, 1947.",
            "A person who or either of whose parents or grandparents was a citizen of Pakistan or Bangladesh.",
            "A minor child of a person who is a citizen of India."
        ],
        correctAnswer: 2, // c
        explanation: "Citizens of Pakistan or Bangladesh (or their descendants) are ineligible for OCI registration.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders"
    },
    // Q28
    {
        id: 28,
        question: "Which of the following rights are NOT conferred on an OCI Cardholder?\n\n1. Right to equality of opportunity in matters of public employment (Article 16).\n2. Right to be registered as a voter.\n3. Eligibility for appointment as a Judge of the Supreme Court.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3, // d
        explanation: "OCI holders are not entitled to any of these rights - public employment, voting, or judicial appointments.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Rights"
    },
    // Q29
    {
        id: 29,
        question: "An OCI Cardholder is entitled to parity with Non-Resident Indians (NRIs) in respect of which of the following?\n\n1. Inter-country adoption of Indian children.\n2. Appearing for the all India entrance tests such as NEET/JEE.\n3. Purchase of agricultural land.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 0, // a
        explanation: "Agricultural land purchase is not allowed for OCI holders - they have parity with NRIs only in adoption and entrance tests.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Rights"
    },
    // Q30
    {
        id: 30,
        question: "Consider the following statements regarding the cancellation of registration as an OCI Cardholder:\n\n1. The Central Government may cancel registration if the OCI Cardholder has shown disaffection towards the Constitution of India.\n2. Registration can be cancelled if the OCI Cardholder has been sentenced to imprisonment for a term of not less than two years within five years of registration.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct grounds for cancellation of OCI registration.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Cancellation"
    },
    // Q31
    {
        id: 31,
        question: "Which committee recommended the amendment of the Citizenship Act, 1955, to provide for the grant of dual citizenship to Persons of Indian Origin (PIOs)?",
        options: [
            "Sarkaria Committee",
            "L.M. Singhvi Committee",
            "Swaran Singh Committee",
            "Verma Committee"
        ],
        correctAnswer: 1, // b
        explanation: "The L.M. Singhvi Committee recommended dual citizenship provisions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders"
    },
    // Q32
    {
        id: 32,
        question: "Consider the following statements regarding the rights of \"Aliens\" in India:\n\n1. Friendly aliens enjoy all the civil and political rights that citizens enjoy.\n2. Enemy aliens do not enjoy protection against arrest and detention under Article 22.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 1, // b
        explanation: "Statement 1 is incorrect; friendly aliens don't enjoy all rights (e.g., voting). Statement 2 is correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Aliens - Friendly and Enemy"
    },
    // Q33
    {
        id: 33,
        question: "Which of the following offices in India can be held ONLY by citizens of India?\n\n1. President of India\n2. Judge of the Supreme Court\n3. Attorney General of India\n4. Advocate General of a State\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3, // d
        explanation: "All listed offices are reserved exclusively for citizens of India.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Constitutional Offices"
    },
    // Q34
    {
        id: 34,
        question: "In the context of the office of the President of India, consider the following comparison with the USA:",
        options: [
            "In India, only a citizen by birth is eligible, whereas in the USA, a naturalised citizen is also eligible.",
            "In India, both a citizen by birth and a naturalised citizen are eligible, whereas in the USA, only a citizen by birth is eligible.",
            "In both India and the USA, only a citizen by birth is eligible.",
            "In both India and the USA, both citizens by birth and naturalised citizens are eligible."
        ],
        correctAnswer: 1, // b
        explanation: "USA requires citizen by birth for President; India allows naturalised citizens as well.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Constitutional Offices"
    },
    // Q35
    {
        id: 35,
        question: "The Public Employment (Requirement as to Residence) Act, 1957, authorized the Government of India to prescribe residential qualification for appointment to non-Gazetted posts in which of the following states/UTs?\n\n1. Andhra Pradesh\n2. Himachal Pradesh\n3. Manipur\n4. Tripura\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 3 and 4 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3, // d
        explanation: "All four states/territories were included originally under the Act.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Residence Requirements for Employment"
    },
    // Q36
    {
        id: 36,
        question: "Which Constitutional Amendment Act provided a special status to the Hyderabad-Karnataka region (now Kalyana-Karnataka) of Karnataka?",
        options: [
            "98th Amendment Act, 2012",
            "99th Amendment Act, 2014",
            "100th Amendment Act, 2015",
            "101st Amendment Act, 2016"
        ],
        correctAnswer: 0, // a
        explanation: "The 98th Amendment Act, 2012 inserted Article 371J for Hyderabad-Karnataka region.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Special Constitutional Provisions"
    },
    // Q37
    {
        id: 37,
        question: "The cut-off date for detection of foreigners in Assam as per the Citizenship Act, 1955 (amended in 1985) is:",
        options: [
            "January 1, 1966",
            "March 25, 1971",
            "August 15, 1947",
            "July 19, 1948"
        ],
        correctAnswer: 1, // b
        explanation: "March 25, 1971 is the cut-off date under the Assam Accord.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Assam Accord"
    },
    // Q38
    {
        id: 38,
        question: "Consider the following statements regarding the renunciation of OCI Card:\n\n1. If a person ceases to be an OCI Cardholder, the spouse of foreign origin of that person also ceases to be an OCI Cardholder.\n2. Every minor child of that person also ceases to be an OCI Cardholder.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct regarding the renunciation of OCI Card.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders"
    },
    // Q39
    {
        id: 39,
        question: "An OCI Cardholder requires special permission to undertake which of the following activities in India?\n\n1. Research\n2. Missionary activities\n3. Mountaineering\n4. Journalism\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3, // d
        explanation: "All listed activities require special permission for OCI cardholders.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Restrictions"
    },
    // Q40
    {
        id: 40,
        question: "Match the following categories with their definitions:\n\nList-I (Category)\nA. NRI\nB. PIO\nC. OCI Cardholder\n\nList-II (Definition)\n1. A person registered under the Citizenship Act, 1955.\n2. An Indian citizen ordinarily residing outside India holding an Indian passport.\n3. A person who or whose ancestors were Indian nationals and who is presently holding another country's citizenship.\n\nSelect the correct answer using the code given below:",
        options: [
            "A-2, B-3, C-1",
            "A-2, B-1, C-3",
            "A-3, B-2, C-1",
            "A-1, B-3, C-2"
        ],
        correctAnswer: 0, // a
        explanation: "NRI is an Indian citizen residing abroad (2), PIO is a person of Indian origin holding foreign citizenship (3), OCI Cardholder is registered under the Act (1).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "NRI vs PIO vs OCI"
    },
    // Q41
    {
        id: 41,
        question: "Statement I: The power to grant citizenship by naturalization is discretionary power of the Central Government.\n\nStatement II: The Government is bound to grant citizenship if the applicant fulfills all the qualifications mentioned in the Third Schedule.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 2, // c
        explanation: "Statement II is incorrect; the Government is not bound to grant citizenship, it may grant it (discretionary power).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Naturalisation"
    },
    // Q42
    {
        id: 42,
        question: "Which section of the Citizenship Act, 1955 deals with the termination of citizenship?",
        options: [
            "Section 8",
            "Section 9",
            "Section 10",
            "Section 7"
        ],
        correctAnswer: 1, // b
        explanation: "Section 9 deals with termination of citizenship.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Termination of Citizenship"
    },
    // Q43
    {
        id: 43,
        question: "Which of the following statements about the 'National Register of Citizens (NRC)' is correct?",
        options: [
            "It is a register containing names of all genuine Indian citizens.",
            "It was first prepared after the 1951 Census of India.",
            "It is currently being updated for the entire country.",
            "Both (a) and (b) are correct."
        ],
        correctAnswer: 3, // d
        explanation: "Both statements (a) and (b) are correct about NRC.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "NRC"
    },
    // Q44
    {
        id: 44,
        question: "With reference to the Citizenship (Amendment) Act, 2019, consider the following:\n\n1. It reduces the aggregate period of residence for naturalisation from 11 years to 5 years for specified communities.\n2. The cutoff date for entry into India for these migrants is December 31, 2014.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct about the CAA 2019.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "CAA 2019"
    },
    // Q45
    {
        id: 45,
        question: "Consider the following statements regarding 'Non-Resident Indians (NRIs)':\n\n1. They are citizens of India.\n2. They have voting rights in India.\n3. They can hold public office in India.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 2, // c
        explanation: "All three are correct; NRIs are citizens with all rights.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "NRI"
    },
    // Q46
    {
        id: 46,
        question: "A person born in India on 2nd December 2004 will be considered a citizen of India by birth if:",
        options: [
            "Both his parents are citizens of India.",
            "One of his parents is a citizen of India and the other is not an illegal migrant.",
            "Either (a) or (b).",
            "Either of his parents is a citizen of India irrespective of the status of the other."
        ],
        correctAnswer: 2, // c
        explanation: "Either condition (both parents citizens OR one citizen, other not illegal migrant) applies for those born after Dec 3, 2004.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Birth"
    },
    // Q47
    {
        id: 47,
        question: "The provision for \"Commonwealth Citizenship\" in the Citizenship Act, 1955 was repealed by which Amendment Act?",
        options: [
            "Citizenship (Amendment) Act, 1986",
            "Citizenship (Amendment) Act, 1992",
            "Citizenship (Amendment) Act, 2003",
            "Citizenship (Amendment) Act, 2005"
        ],
        correctAnswer: 2, // c
        explanation: "The 2003 Amendment repealed Commonwealth Citizenship provisions.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship Act Amendments"
    },
    // Q48
    {
        id: 48,
        question: "Which Article of the Constitution empowers the Parliament to regulate the right of citizenship by law?",
        options: [
            "Article 9",
            "Article 10",
            "Article 11",
            "Article 8"
        ],
        correctAnswer: 2, // c
        explanation: "Article 11 empowers Parliament to regulate citizenship by law.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 11"
    },
    // Q49
    {
        id: 49,
        question: "Consider the following statements:\n\n1. The Constitution of India defines the term 'citizen'.\n2. The Constitution of India defines the term 'illegal migrant'.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 3, // d
        explanation: "The Constitution defines neither 'citizen' nor 'illegal migrant'.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Constitutional Definitions"
    },
    // Q50
    {
        id: 50,
        question: "Under the Citizenship Act, 1955, a person can apply for registration as a citizen if he is a person of Indian origin and is ordinarily resident in any country or place outside:",
        options: [
            "Undivided India",
            "Asia",
            "The Commonwealth",
            "South Asia"
        ],
        correctAnswer: 0, // a
        explanation: "Undivided India is the relevant territory for determining Indian origin.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Registration"
    },
    // Q51
    {
        id: 51,
        question: "Which of the following is NOT a ground for the deprivation of citizenship under Section 10 of the Citizenship Act, 1955?",
        options: [
            "The citizen has shown disloyalty to the Constitution.",
            "The citizen has unlawfully traded with the enemy during a war.",
            "The citizen has been convicted for a traffic offence in a foreign country.",
            "The citizen has obtained citizenship by fraud."
        ],
        correctAnswer: 2, // c
        explanation: "Traffic offence is not a ground for deprivation of citizenship.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Deprivation of Citizenship"
    },
    // Q52
    {
        id: 52,
        question: "The 'Inner Line Permit' (ILP) system, which exempts certain areas from the Citizenship (Amendment) Act, 2019, is operational in which of the following states?\n\n1. Arunachal Pradesh\n2. Nagaland\n3. Mizoram\n4. Manipur\n\nSelect the correct answer using the code given below:",
        options: [
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3, // d
        explanation: "All four states have Inner Line Permit system.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "CAA 2019 - ILP Exemptions"
    },
    // Q53
    {
        id: 53,
        question: "An OCI Cardholder is eligible for appointment as teaching faculty in which of the following institutions?\n\n1. IITs\n2. IIMs\n3. Central Universities\n4. AIIMS\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3, // d
        explanation: "OCI cardholders can be appointed as teaching faculty in all listed institutions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Rights"
    },
    // Q54
    {
        id: 54,
        question: "Consider the following statements regarding the rights of OCI Cardholders compared to NRIs:\n\n1. OCI Cardholders have parity with NRIs in domestic airfares.\n2. OCI Cardholders have parity with NRIs in entry fees to national monuments.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 1, // b
        explanation: "Statement 1 is incorrect; OCI has parity with Indian nationals for airfares. Statement 2 is correct - parity with NRIs in entry fees.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI Cardholders - Rights"
    },
    // Q55
    {
        id: 55,
        question: "Statement I: The USA has a system of double citizenship.\n\nStatement II: In the USA, a citizen owes allegiance to both the National Government and the State Government.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 0, // a
        explanation: "Both correct and II explains I - dual allegiance is the basis for double citizenship.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Single vs Double Citizenship"
    },
    // Q56
    {
        id: 56,
        question: "The Citizenship (Amendment) Act, 1986, made the acquisition of citizenship by birth more stringent by:",
        options: [
            "Removing the provision of citizenship by birth altogether.",
            "Adding the condition that at least one parent must be an Indian citizen.",
            "Adding the condition that both parents must be Indian citizens.",
            "Reducing the cutoff date to 1950."
        ],
        correctAnswer: 1, // b
        explanation: "The 1986 Amendment added the requirement that at least one parent must be a citizen for birth between July 1, 1987 and Dec 2, 2004.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Birth"
    },
    // Q57
    {
        id: 57,
        question: "A person who has been registered as an OCI Cardholder for ________ years and is ordinarily resident in India for ________ months is eligible for grant of Indian citizenship.",
        options: [
            "5 years, 12 months",
            "7 years, 12 months",
            "5 years, 6 months",
            "10 years, 12 months"
        ],
        correctAnswer: 0, // a
        explanation: "5 years registration and 12 months ordinary residence are required.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "OCI to Citizenship"
    },
    // Q58
    {
        id: 58,
        question: "Which of the following is correct regarding the 'Oath of Allegiance' under the Citizenship Act?",
        options: [
            "It is mandatory only for naturalisation.",
            "It is mandatory for registration and naturalisation.",
            "It is mandatory for descent and registration.",
            "It is not mandatory for any category."
        ],
        correctAnswer: 1, // b
        explanation: "Oath of Allegiance is mandatory for both registration and naturalisation.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Oath of Allegiance"
    },
    // Q59
    {
        id: 59,
        question: "The power to specify as to who shall be the citizens of India when a foreign territory becomes a part of India is vested in:",
        options: [
            "The Parliament",
            "The Supreme Court",
            "The Government of India",
            "The President of India"
        ],
        correctAnswer: 2, // c
        explanation: "The Government of India has the power to specify citizens when territory is incorporated.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Citizenship by Incorporation of Territory"
    },
    // Q60
    {
        id: 60,
        question: "Consider the following statements:\n\n1. Article 11 gives the Parliament the power to curtail the right of citizenship.\n2. The Citizenship Act, 1955, was enacted in exercise of the powers conferred by Article 11.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // c
        explanation: "Both statements are correct - Article 11 empowers Parliament, and the 1955 Act was enacted under this power.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Citizenship",
        subtopic: "Article 11"
    }
];
