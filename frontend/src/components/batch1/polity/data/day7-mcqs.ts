import { MCQ } from "./day1-mcqs";

/**
 * Indian Polity - Chapter 8: Fundamental Rights (Part 2)
 * Topics: Article 22 (Preventive Detention), Articles 23-24 (Rights Against Exploitation),
 * Articles 25-28 (Right to Freedom of Religion), Articles 29-30 (Cultural & Educational Rights)
 * 60 MCQs for Day 7 Evening Session (6-7 PM)
 * Topic metadata included for detailed analytics
 */
export const DAY7_MCQS: MCQ[] = [
    // Q1
    {
        id: 1,
        question: "Consider the following statements regarding Article 22 of the Constitution:\n\n1. The right to be informed of the grounds of arrest is available to both citizens and enemy aliens detained under ordinary laws.\n2. The protection under the first part of Article 22 covers arrest on failure to pay income tax and deportation of an alien.\n3. Preventive detention is a precautionary measure based on suspicion and not a punishment for a past offense.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 0,
        explanation: "Only statement 3 is correct. Statement 1 is incorrect (Not available to enemy aliens). Statement 2 is incorrect (Part 1 covers criminal/quasi-criminal, not tax failure or deportation).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - Preventive Detention"
    },
    // Q2
    {
        id: 2,
        question: "Under the first part of Article 22, a person arrested under an ordinary law has the right to be produced before a magistrate within 24 hours. This duration excludes:",
        options: [
            "Public holidays.",
            "The time necessary for the journey from the place of arrest to the court of the magistrate.",
            "The time taken for interrogation by the police.",
            "Both (a) and (b)."
        ],
        correctAnswer: 1,
        explanation: "The text specifically mentions 'excluding the journey time' from the place of arrest to the court.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - Rights of Arrested Persons"
    },
    // Q3
    {
        id: 3,
        question: "With reference to the legislative power regarding preventive detention, consider the following:\n\n1. The Parliament has exclusive authority to make laws for preventive detention for reasons connected with the security of a State.\n2. Both Parliament and State Legislatures can concurrently make laws for preventive detention regarding the maintenance of public order.\n3. The Parliament has exclusive authority regarding preventive detention for reasons connected with defense and foreign affairs.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 2 and 3 are correct. Statement 1 is incorrect (Security of State is Concurrent, not exclusive to Parliament).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention - Legislative Power"
    },
    // Q4
    {
        id: 4,
        question: "Statement I: The 44th Constitutional Amendment Act of 1978 reduced the maximum period of preventive detention without an advisory board's opinion from three months to two months.\n\nStatement II: At present, the maximum period for which a person can be detained without the opinion of an advisory board is two months.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 2,
        explanation: "Statement I is correct (44th Amendment reduced it). Statement II is incorrect (The provision was not brought into force, so 3 months continues).",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "44th Amendment - Preventive Detention"
    },
    // Q5
    {
        id: 5,
        question: "Which of the following preventive detention laws is/are currently in force in India?\n\n1. Maintenance of Internal Security Act (MISA)\n2. Conservation of Foreign Exchange and Prevention of Smuggling Activities Act (COFEPOSA)\n3. Prevention of Terrorism Act (POTA)\n4. Unlawful Activities (Prevention) Act (UAPA)\n\nSelect the correct answer using the code given below:",
        options: [
            "2 and 4 only",
            "1, 2 and 4 only",
            "2, 3 and 4 only",
            "1, 3 and 4 only"
        ],
        correctAnswer: 0,
        explanation: "MISA and POTA are repealed. COFEPOSA and UAPA are currently active preventive detention laws.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention Laws"
    },
    // Q6
    {
        id: 6,
        question: "Consider the following statements regarding the rights of a 'detenu' under the second part of Article 22:\n\n1. The detenu has a mandatory right to know all facts and grounds of detention without exception.\n2. The detenu should be afforded an opportunity to make a representation against the detention order.\n3. The Advisory Board constituted to review detention must consist of judges of a High Court.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 2 only",
            "2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 2,
        explanation: "Statement 1 is incorrect (Public interest facts need not be disclosed). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - Rights of Detenu"
    },
    // Q7
    {
        id: 7,
        question: "Article 22 authorizes the Parliament to prescribe which of the following?\n\n1. The maximum period for which a person can be detained in any classes of cases under a preventive detention law.\n2. The procedure to be followed by an advisory board in an inquiry.\n3. The circumstances in which a person can be detained for more than three months without obtaining the opinion of an advisory board.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are correct provisions that Parliament is authorized to prescribe under Article 22.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - Parliament's Power"
    },
    // Q8
    {
        id: 8,
        question: "Which of the following statements is correct regarding the history of preventive detention?",
        options: [
            "Preventive detention is a unique feature of the Indian Constitution and is unknown in the USA and Britain.",
            "In Britain, preventive detention was resorted to only during the First and Second World Wars.",
            "Preventive detention was introduced in India for the first time after Independence in 1950.",
            "No other democratic country except India has a preventive detention law."
        ],
        correctAnswer: 1,
        explanation: "In Britain, preventive detention was used only during World Wars. India is unique in making it part of the Constitution.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention - History"
    },
    // Q9
    {
        id: 9,
        question: "Consider the following statements regarding Article 23 (Prohibition of Traffic in Human Beings and Forced Labour):\n\n1. It protects the individual against the State but not against private persons.\n2. The term 'force' in 'forced labour' includes force arising from the compulsion of economic circumstances.\n3. It prohibits 'begar', which refers to the Devadasi system.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 0,
        explanation: "Only statement 2 is correct (Supreme Court interpretation). Statement 1 is incorrect (available against private persons). Statement 3 is incorrect (Begar is work without pay; Devadasi is different, though both prohibited).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 - Traffic and Forced Labour"
    },
    // Q10
    {
        id: 10,
        question: "Article 23 permits the State to impose compulsory service for public purposes. In imposing such service, the State is NOT permitted to make any discrimination on grounds only of:",
        options: [
            "Religion, Race, Caste, Sex.",
            "Religion, Race, Caste, Class.",
            "Religion, Race, Sex, Place of Birth.",
            "Religion, Race, Caste, Residence."
        ],
        correctAnswer: 1,
        explanation: "Religion, Race, Caste, Class are the grounds. Note: Sex is NOT a ground in this specific exception.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 - Compulsory Service Exception"
    },
    // Q11
    {
        id: 11,
        question: "The expression 'traffic in human beings' under Article 23 includes which of the following?\n\n1. Selling and buying of men, women, and children.\n2. Immoral traffic in women and children.\n3. Slavery.\n4. Devadasis.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four are included in the expression 'traffic in human beings' under Article 23.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 - Traffic in Human Beings"
    },
    // Q12
    {
        id: 12,
        question: "Which of the following Acts were enacted to implement the provisions of Article 23?\n\n1. Bonded Labour System (Abolition) Act, 1976\n2. Minimum Wages Act, 1948\n3. Equal Remuneration Act, 1976\n4. Immoral Traffic (Prevention) Act, 1956\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 4 only",
            "1, 2 and 4 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four Acts are mentioned in the context of implementing Article 23 provisions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 - Implementing Acts"
    },
    // Q13
    {
        id: 13,
        question: "Consider the following statements regarding Article 24:\n\n1. It prohibits the employment of children below the age of 18 years in hazardous activities.\n2. It does not prohibit the employment of children in harmless or innocent work.\n3. The Child Labour (Prohibition and Regulation) Amendment Act, 2016 renamed the Principal Act to include \"Adolescent\".\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (14 years, not 18 for hazardous employment under Article 24). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 24 - Child Labour"
    },
    // Q14
    {
        id: 14,
        question: "In 2006, the Government of India banned the employment of children as domestic servants or workers in business establishments. This ban applies to children below the age of:",
        options: [
            "12 years",
            "14 years",
            "16 years",
            "18 years"
        ],
        correctAnswer: 1,
        explanation: "The ban applies to children below 14 years of age.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 24 - Child Labour Ban"
    },
    // Q15
    {
        id: 15,
        question: "The Supreme Court in 1996 directed the establishment of the 'Child Labour Rehabilitation Welfare Fund'. According to this direction, the offending employer should deposit a fine of:",
        options: [
            "₹10,000 for each child employed.",
            "₹20,000 for each child employed.",
            "₹25,000 for each child employed.",
            "₹50,000 for each child employed."
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court directed a fine of ₹20,000 per child to be deposited in the Child Labour Rehabilitation Welfare Fund.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Child Labour - SC Directions"
    },
    // Q16
    {
        id: 16,
        question: "Article 25 guarantees which of the following rights?\n\n1. Freedom of conscience.\n2. Right to profess religion.\n3. Right to practice religion.\n4. Right to convert another person to one's own religion.\n\nSelect the correct answer using the code given below:",
        options: [
            "1, 2 and 3 only",
            "1, 3 and 4 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 0,
        explanation: "Article 25 guarantees freedom of conscience, right to profess, practice, and propagate. However, the right to CONVERT others is NOT a Fundamental Right.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - Freedom of Religion"
    },
    // Q17
    {
        id: 17,
        question: "The \"Right to Propagate\" religion under Article 25 includes:",
        options: [
            "The right to forcibly convert others to one's own religion.",
            "The right to transmission and dissemination of one's religious beliefs.",
            "The right to use loudspeakers for prayer at any time.",
            "The right to exempt religious practices from all state regulations."
        ],
        correctAnswer: 1,
        explanation: "Right to propagate means transmission and dissemination of one's religious beliefs, not forcible conversion.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - Right to Propagate"
    },
    // Q18
    {
        id: 18,
        question: "Consider the following statements regarding the restrictions on Article 25:\n\n1. The rights are subject to public order, morality, and health.\n2. The rights are subject to other provisions relating to Fundamental Rights.\n3. The State cannot regulate any economic or financial activity associated with religious practice.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect (State CAN regulate economic/financial activity associated with religious practice).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - Restrictions"
    },
    // Q19
    {
        id: 19,
        question: "Under the explanations provided in Article 25, the reference to \"Hindus\" shall be construed as including a reference to persons professing:\n\n1. The Sikh religion.\n2. The Jaina religion.\n3. The Buddhist religion.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "Under Article 25, 'Hindus' includes Sikhs, Jains, and Buddhists for the purposes of that article.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - Definition of Hindus"
    },
    // Q20
    {
        id: 20,
        question: "Comparison of Article 25 and Article 26 reveals that:",
        options: [
            "Article 25 guarantees rights of religious denominations, while Article 26 guarantees rights of individuals.",
            "Rights under Article 26 are subject to \"other provisions relating to Fundamental Rights,\" but Article 25 is not.",
            "Rights under Article 26 are subject only to public order, morality, and health, whereas Article 25 is also subject to other Fundamental Rights provisions.",
            "Both Articles are absolute and not subject to any restrictions."
        ],
        correctAnswer: 2,
        explanation: "Article 26 is subject to public order, morality, and health only. Article 25 is also subject to 'other provisions of Fundamental Rights'.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 vs Article 26"
    },
    // Q21
    {
        id: 21,
        question: "To be recognized as a \"Religious Denomination\" under Article 26, the Supreme Court held that a group must satisfy which conditions?\n\n1. It should have a collection of individuals with a system of beliefs conducive to their spiritual well-being.\n2. It should have a common organization.\n3. It should be designated by a distinctive name.\n4. It should have a written constitution.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 1,
        explanation: "Conditions 1, 2, and 3 are required. A written constitution (4) is NOT a condition mentioned.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 26 - Religious Denomination"
    },
    // Q22
    {
        id: 22,
        question: "Which of the following has/have been held to be a \"Religious Denomination\" by the Supreme Court?\n\n1. Ramakrishna Mission\n2. Ananda Marga\n3. Aurobindo Society\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Ramakrishna Mission and Ananda Marga were held to be religious denominations. Aurobindo Society was NOT.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Religious Denominations - SC Rulings"
    },
    // Q23
    {
        id: 23,
        question: "Article 27 prohibits the State from:",
        options: [
            "Levying any tax or fee on religious institutions.",
            "Compelling any person to pay any tax for the promotion of a particular religion.",
            "Providing any financial aid to religious institutions.",
            "Regulating the secular administration of religious endowments."
        ],
        correctAnswer: 1,
        explanation: "Article 27 prohibits compelling payment of taxes for promotion or maintenance of any particular religion.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 27 - No Tax for Religion"
    },
    // Q24
    {
        id: 24,
        question: "Statement I: A fee can be levied on pilgrims to provide them special service or safety measures.\n\nStatement II: Article 27 prohibits only the levy of a tax and not a fee.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 0,
        explanation: "Both statements are correct and Statement II (fee vs tax distinction) explains why fees can be levied on pilgrims.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 27 - Tax vs Fee"
    },
    // Q25
    {
        id: 25,
        question: "In an educational institution \"recognised by the State\" but not receiving aid, religious instruction:",
        options: [
            "Is completely prohibited.",
            "Is permitted, but student attendance is voluntary (requires consent).",
            "Is compulsory for all students.",
            "Is permitted only if it is the majority religion of the State."
        ],
        correctAnswer: 1,
        explanation: "In recognised but unaided institutions, religious instruction is permitted on a voluntary basis (consent needed).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 28 - Religious Instruction"
    },
    // Q26
    {
        id: 26,
        question: "Match the type of Educational Institution (under Article 28) with the rule regarding Religious Instruction:\n\nList-I (Institution Type)\nA. Wholly maintained by the State\nB. Administered by State but established under trust\nC. Receiving aid from the State\n\nList-II (Religious Instruction)\n1. Permitted\n2. Prohibited\n3. Voluntary basis\n\nSelect the correct answer using the code given below:",
        options: [
            "A-2, B-1, C-3",
            "A-2, B-3, C-1",
            "A-1, B-2, C-3",
            "A-3, B-1, C-2"
        ],
        correctAnswer: 0,
        explanation: "A (State maintained) - Prohibited; B (Trust established) - Permitted; C (Receiving aid) - Voluntary basis.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 28 - Institution Types"
    },
    // Q27
    {
        id: 27,
        question: "Consider the following statements regarding Article 29 (Protection of Interests of Minorities):\n\n1. It protects the rights of only religious and linguistic minorities.\n2. The scope of this article includes the \"majority\" community as well.\n3. It guarantees the right of a section of citizens to conserve their distinct language, script, or culture.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 2,
        explanation: "Statement 1 is incorrect (Article 29 says 'any section of citizens', so includes majority too). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 29 - Cultural Rights"
    },
    // Q28
    {
        id: 28,
        question: "Under Article 29(2), no citizen shall be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of:",
        options: [
            "Religion, Race, Caste, Sex.",
            "Religion, Race, Caste, Language.",
            "Religion, Race, Place of Birth, Language.",
            "Religion, Caste, Sex, Place of Birth."
        ],
        correctAnswer: 1,
        explanation: "Article 29(2) prohibits denial on grounds of Religion, Race, Caste, or Language. Note: Sex and Place of Birth are NOT mentioned.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 29(2) - Admission Rights"
    },
    // Q29
    {
        id: 29,
        question: "Regarding the \"Right to Conserve Language\" under Article 29, the Supreme Court has ruled that:",
        options: [
            "It does not include the right to agitate for the protection of the language.",
            "Political speeches for the conservation of language amount to a corrupt practice under the Representation of the People Act, 1951.",
            "It includes the right to agitate for the protection of the language.",
            "It is available only to linguistic minorities and not the majority."
        ],
        correctAnswer: 2,
        explanation: "The Supreme Court ruled that the right to conserve language includes the right to agitate for its protection.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 29 - Right to Agitate"
    },
    // Q30
    {
        id: 30,
        question: "Consider the following statements regarding Article 30:\n\n1. It grants rights to all minorities, whether based on religion or language.\n2. The term 'minority' is defined in Article 366 of the Constitution.\n3. It extends the right to establish educational institutions to any section of citizens having a distinct language.\n\nHow many of the statements given above are correct?",
        options: [
            "Only one",
            "Only two",
            "All three",
            "None"
        ],
        correctAnswer: 0,
        explanation: "Only statement 1 is correct. Statement 2 is incorrect (Minority not defined in Constitution). Statement 3 is incorrect (Art 30 is for Minorities only, Art 29 is for 'any section').",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 30 - Minority Educational Rights"
    },
    // Q31
    {
        id: 31,
        question: "The 44th Amendment Act of 1978 added a provision to Article 30 to:",
        options: [
            "Abolish the right of minorities to establish educational institutions.",
            "Ensure that the compensation amount for acquiring minority institution property does not abrogate their guaranteed right.",
            "Introduce the concept of the 'Creamy Layer' in minority institutions.",
            "Prohibit minority institutions from receiving state aid."
        ],
        correctAnswer: 1,
        explanation: "The 44th Amendment ensured that compensation for acquiring property of minority institutions should not abrogate their rights under Article 30.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "44th Amendment - Article 30"
    },
    // Q32
    {
        id: 32,
        question: "In the Secretary of Malankara Syrian Catholic College case (2006), the Supreme Court ruled that:\n\n1. The right under Article 30 is intended to place minorities in a more advantageous position vis-à-vis the majority.\n2. There is no reverse discrimination in favor of minorities.\n3. The State can impose regulations for ensuring educational standards and maintaining academic excellence.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (The right is for equality, not advantage). Statements 2 and 3 are correct.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 30 - SC Rulings"
    },
    // Q33
    {
        id: 33,
        question: "Which of the following rights are included in the right of minorities to establish and administer educational institutions?\n\n1. To choose its governing body.\n2. To appoint teaching and non-teaching staff.\n3. To admit eligible students of their choice.\n4. To maladminister the institution if they choose to.\n\nSelect the correct answer using the code given below:",
        options: [
            "1, 2 and 3 only",
            "2, 3 and 4 only",
            "1, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 0,
        explanation: "Rights 1, 2, and 3 are correct. There is NO right to maladminister (4).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 30 - Administration Rights"
    },
    // Q34
    {
        id: 34,
        question: "Regarding \"Unaided Minority Educational Institutions,\" the Supreme Court held that:",
        options: [
            "The State cannot regulate them in any manner.",
            "They have the freedom to appoint teachers by adopting any rational procedure of selection, subject to eligibility conditions prescribed by the State.",
            "They must follow the reservation policy of the State in appointment of teachers.",
            "They cannot set up their own fee structure."
        ],
        correctAnswer: 1,
        explanation: "Unaided minority institutions have freedom to appoint with rational procedure but subject to eligibility conditions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Unaided Minority Institutions"
    },
    // Q35
    {
        id: 35,
        question: "Consider the following statements regarding the \"Extension of Aid\" by the State to minority institutions:\n\n1. Extending aid alters the nature and character of the minority educational institution.\n2. The State cannot discriminate against any educational institution managed by a minority while granting aid.\n3. Conditions can be imposed by the State to ensure proper utilization of aid.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (Aid does not alter character). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Minority Institutions - State Aid"
    },
    // Q36
    {
        id: 36,
        question: "Distinction between Article 29 and Article 30:\n\n1. Article 29 grants protection to \"any section of citizens\", whereas Article 30 grants protection only to \"minorities\".\n2. Article 30 includes the right of a minority to impart education to its children in its own language.\n3. Article 29 protects both religious and linguistic minorities.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are correct distinctions/details regarding Articles 29 and 30.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 29 vs Article 30"
    },
    // Q37
    {
        id: 37,
        question: "Which of the following laws was repealed in 2004?",
        options: [
            "TADA",
            "MISA",
            "POTA",
            "COFEPOSA"
        ],
        correctAnswer: 2,
        explanation: "POTA (Prevention of Terrorism Act) was repealed in 2004.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention Laws"
    },
    // Q38
    {
        id: 38,
        question: "The \"Commissions for Protection of Child Rights Act, 2005\" provides for:\n\n1. Establishment of a National Commission for Protection of Child Rights.\n2. Establishment of Children's Courts for speedy trial of offenses against children.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2,
        explanation: "The Act provides for both NCPCR and Children's Courts.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Child Rights Protection"
    },
    // Q39
    {
        id: 39,
        question: "Statement I: Punitive detention is to punish a person for an offense committed by him after trial and conviction.\n\nStatement II: Preventive detention is detention without trial and conviction by a court.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 1,
        explanation: "Both statements are correct definitions but Statement II does not explain Statement I - they are distinct concepts.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Punitive vs Preventive Detention"
    },
    // Q40
    {
        id: 40,
        question: "The safeguards under the first part of Article 22 (Rights of arrested persons) are NOT available to:",
        options: [
            "A citizen arrested under ordinary law.",
            "An enemy alien.",
            "A friendly alien arrested under ordinary law.",
            "A person arrested under civil arrest orders."
        ],
        correctAnswer: 1,
        explanation: "Enemy aliens and persons under preventive detention do not get protections under the first part of Article 22.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - Exceptions"
    },
    // Q41
    {
        id: 41,
        question: "The Supreme Court ruled that the \"Right to Consult and be Defended by a Legal Practitioner\" (Article 22) does not apply to:\n\n1. Arrest on failure to pay income tax.\n2. Deportation of an alien.\n3. Arrest under the orders of a court.\n\nSelect the correct answer:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are exceptions where the right to legal practitioner under Article 22 does not apply.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 22 - SC Rulings"
    },
    // Q42
    {
        id: 42,
        question: "Which of the following is NOT a form of \"Traffic in Human Beings\" explicitly mentioned or implied in the text under Article 23?",
        options: [
            "Devadasis",
            "Prostitution",
            "Slavery",
            "Employment of children in factories"
        ],
        correctAnswer: 3,
        explanation: "Employment of children in factories is covered under Article 24, not Article 23 (Traffic in Human Beings).",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 vs Article 24"
    },
    // Q43
    {
        id: 43,
        question: "The \"Bonded Labour System (Abolition) Act\" was enacted in which year?",
        options: [
            "1970",
            "1976",
            "1986",
            "1956"
        ],
        correctAnswer: 1,
        explanation: "The Bonded Labour System (Abolition) Act was enacted in 1976.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Bonded Labour Act"
    },
    // Q44
    {
        id: 44,
        question: "\"Inner freedom of an individual to mould his relation with God or Creatures in whatever way he desires\" refers to:",
        options: [
            "Right to Profess",
            "Right to Practice",
            "Freedom of Conscience",
            "Right to Propagate"
        ],
        correctAnswer: 2,
        explanation: "This definition describes 'Freedom of Conscience' - the inner freedom regarding one's religious beliefs.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - Freedom of Conscience"
    },
    // Q45
    {
        id: 45,
        question: "The State can regulate or restrict which of the following activities associated with religious practice under Article 25?\n\n1. Economic activity\n2. Financial activity\n3. Political activity\n\nSelect the correct answer:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "The State can regulate all three - economic, financial, and political activities associated with religious practice.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 25 - State Regulation"
    },
    // Q46
    {
        id: 46,
        question: "The right to \"administer such property in accordance with law\" belongs to:",
        options: [
            "Individuals under Article 25.",
            "Religious Denominations under Article 26.",
            "Linguistic Minorities under Article 30.",
            "Any section of citizens under Article 29."
        ],
        correctAnswer: 1,
        explanation: "Article 26 grants religious denominations the right to own and administer movable and immovable property.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 26 - Property Rights"
    },
    // Q47
    {
        id: 47,
        question: "Which of the following is NOT a condition to be a \"Religious Denomination\"?",
        options: [
            "Common organization.",
            "Distinctive name.",
            "State recognition.",
            "Collection of individuals with a system of beliefs."
        ],
        correctAnswer: 2,
        explanation: "State recognition is NOT a condition. The three conditions are: common beliefs, common organization, and distinctive name.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 26 - Denomination Conditions"
    },
    // Q48
    {
        id: 48,
        question: "The prohibition of religious instruction in State-maintained institutions (Article 28) does not apply if:",
        options: [
            "The institution is administered by the State but established under an endowment requiring such instruction.",
            "The majority of students request it.",
            "The institution charges a fee.",
            "It is a higher education institution."
        ],
        correctAnswer: 0,
        explanation: "If the institution was established under an endowment/trust requiring religious instruction, Article 28 allows it even if administered by State.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 28 - Exception"
    },
    // Q49
    {
        id: 49,
        question: "In the context of Article 30, \"Minority Educational Institutions\" can be classified into how many types based on recognition and aid?",
        options: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        correctAnswer: 1,
        explanation: "Three types: (1) Aided + Recognized, (2) Recognized only (unaided), (3) Neither aided nor recognized.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Minority Institution Types"
    },
    // Q50
    {
        id: 50,
        question: "General laws of the land (Contract law, Labour law, Tax law) are applicable to:",
        options: [
            "Only aided minority institutions.",
            "Only unaided minority institutions.",
            "All minority institutions, including unaided ones.",
            "Only non-minority institutions."
        ],
        correctAnswer: 2,
        explanation: "General laws of the land apply to all minority institutions, whether aided or unaided.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Minority Institutions - General Laws"
    },
    // Q51
    {
        id: 51,
        question: "The \"Right to establish and administer educational institutions\" under Article 30 is:",
        options: [
            "Absolute.",
            "Not absolute; it does not include the right to maladminister.",
            "Subject to Article 19 restrictions.",
            "Available to all sections of citizens."
        ],
        correctAnswer: 1,
        explanation: "The right under Article 30 is not absolute - it does not include the right to maladminister.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 30 - Limitations"
    },
    // Q52
    {
        id: 52,
        question: "Regarding the \"fee structure\" in unaided minority institutions:",
        options: [
            "The State fixes the fee.",
            "They can set up a reasonable fee structure.",
            "They must provide free education.",
            "They cannot charge fees higher than government schools."
        ],
        correctAnswer: 1,
        explanation: "Unaided minority institutions can set up their own reasonable fee structure.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Unaided Minority Institutions - Fees"
    },
    // Q53
    {
        id: 53,
        question: "Which Article protects the \"Collective Freedom of Religion\"?",
        options: [
            "Article 25",
            "Article 26",
            "Article 27",
            "Article 28"
        ],
        correctAnswer: 1,
        explanation: "Article 26 deals with collective freedom of religion (rights of religious denominations as groups).",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 26 - Collective Freedom"
    },
    // Q54
    {
        id: 54,
        question: "The Supreme Court held that \"Political speeches or promises made for the conservation of the language of a section of the citizens\":",
        options: [
            "Amount to corrupt practice.",
            "Do not amount to corrupt practice.",
            "Are violative of Article 19.",
            "Are unconstitutional."
        ],
        correctAnswer: 1,
        explanation: "The Supreme Court held that such political speeches do NOT amount to corrupt practice.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Right to Conserve Language"
    },
    // Q55
    {
        id: 55,
        question: "The term \"Begar\" means:",
        options: [
            "Working for minimum wage.",
            "Compulsory work without remuneration.",
            "Traffic in women.",
            "Bonded labour."
        ],
        correctAnswer: 1,
        explanation: "Begar means compulsory work without remuneration.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 23 - Begar"
    },
    // Q56
    {
        id: 56,
        question: "The \"Prevention of Illicit Traffic in Narcotic Drugs and Psychotropic Substances Act\" (PITNDPSA) was enacted in:",
        options: [
            "1980",
            "1985",
            "1988",
            "2002"
        ],
        correctAnswer: 2,
        explanation: "PITNDPSA was enacted in 1988.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention Laws"
    },
    // Q57
    {
        id: 57,
        question: "Which Article contains the provision that \"No person shall be compelled to pay any taxes for the promotion or maintenance of any particular religion\"?",
        options: [
            "Article 25",
            "Article 26",
            "Article 27",
            "Article 28"
        ],
        correctAnswer: 2,
        explanation: "Article 27 contains this prohibition against compulsory payment of religious taxes.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 27"
    },
    // Q58
    {
        id: 58,
        question: "The right to \"move the Supreme Court\" for the enforcement of Fundamental Rights is itself a Fundamental Right under:",
        options: [
            "Article 22",
            "Article 32",
            "Article 21",
            "Article 13"
        ],
        correctAnswer: 1,
        explanation: "Article 32 guarantees the right to move the Supreme Court for enforcement of Fundamental Rights.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32"
    },
    // Q59
    {
        id: 59,
        question: "According to the text, which democratic country has made preventive detention an integral part of the Constitution?",
        options: [
            "USA",
            "Britain",
            "India",
            "Canada"
        ],
        correctAnswer: 2,
        explanation: "India is the only democratic country that has made preventive detention an integral part of its Constitution.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention - India"
    },
    // Q60
    {
        id: 60,
        question: "Which Amendment Act deleted the \"Right to Property\" as a Fundamental Right (Article 31)?",
        options: [
            "42nd Amendment Act, 1976",
            "44th Amendment Act, 1978",
            "86th Amendment Act, 2002",
            "97th Amendment Act, 2011"
        ],
        correctAnswer: 1,
        explanation: "The 44th Amendment Act, 1978 deleted the Right to Property from Fundamental Rights.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "44th Amendment - Right to Property"
    }
];
