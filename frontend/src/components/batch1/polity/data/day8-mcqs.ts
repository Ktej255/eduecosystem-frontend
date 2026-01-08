import { MCQ } from "./day1-mcqs";

/**
 * Indian Polity - Chapter 8: Fundamental Rights (Part 3)
 * Topics: Article 32 (Constitutional Remedies), Writs, Articles 33-35, 
 * Right to Property Evolution (Articles 31A, 31B, 31C, 300A, Ninth Schedule)
 * 60 MCQs for Day 8 Evening Session (6-7 PM)
 * Topic metadata included for detailed analytics
 */
export const DAY8_MCQS: MCQ[] = [
    // Q1
    {
        id: 1,
        question: "\"An Article without which this constitution would be a nullity. It is the very soul of the Constitution and the very heart of it.\" Dr. B.R. Ambedkar was referring to:",
        options: [
            "Article 14",
            "Article 19",
            "Article 21",
            "Article 32"
        ],
        correctAnswer: 3,
        explanation: "Dr. Ambedkar called Article 32 the soul and heart of the Constitution as it provides the right to constitutional remedies.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 - Constitutional Remedies"
    },
    // Q2
    {
        id: 2,
        question: "Consider the following statements regarding Article 32:\n\n1. The right to move the Supreme Court for the enforcement of Fundamental Rights is itself a Fundamental Right.\n2. The Supreme Court has declared Article 32 as a basic feature of the Constitution.\n3. The Parliament can empower any other court (including High Courts) to issue writs.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect because High Courts already have writ powers under Article 226. Parliament can empower other subordinate courts.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 - Features"
    },
    // Q3
    {
        id: 3,
        question: "Under Article 32, the jurisdiction of the Supreme Court is:\n\n1. Original\n2. Exclusive\n3. Concurrent with High Courts\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "The jurisdiction is Original (direct access) and Concurrent (with High Courts under Art 226). It is NOT Exclusive.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 - Jurisdiction"
    },
    // Q4
    {
        id: 4,
        question: "The Supreme Court under Article 32 can issue writs for the enforcement of:",
        options: [
            "Fundamental Rights only.",
            "Fundamental Rights and Statutory Rights.",
            "Fundamental Rights and Customary Rights.",
            "Any legal right."
        ],
        correctAnswer: 0,
        explanation: "Under Article 32, the Supreme Court issues writs ONLY for the enforcement of Fundamental Rights.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 - Scope"
    },
    // Q5
    {
        id: 5,
        question: "Consider the following statements regarding the writ jurisdiction of the Supreme Court and High Courts:\n\n1. The Supreme Court can issue writs only for the enforcement of Fundamental Rights, whereas High Courts can issue them for other purposes as well.\n2. The territorial jurisdiction of the Supreme Court is wider than that of a High Court.\n3. A remedy under Article 32 is mandatory for the Supreme Court to consider, whereas a remedy under Article 226 is discretionary for the High Court.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three statements are correct distinctions between Article 32 (SC) and Article 226 (HC) writ jurisdiction.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 vs Article 226"
    },
    // Q6
    {
        id: 6,
        question: "Which writ is literally translated as \"to have the body of\"?",
        options: [
            "Mandamus",
            "Certiorari",
            "Habeas Corpus",
            "Quo-Warranto"
        ],
        correctAnswer: 2,
        explanation: "Habeas Corpus literally means 'to have the body of' - it is issued to produce a detained person before the court.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Habeas Corpus"
    },
    // Q7
    {
        id: 7,
        question: "The writ of Habeas Corpus can be issued against:",
        options: [
            "Public authorities only.",
            "Private individuals only.",
            "Both public authorities and private individuals.",
            "Only executive bodies, not judicial bodies."
        ],
        correctAnswer: 2,
        explanation: "Habeas Corpus can be issued against both public authorities and private individuals who unlawfully detain a person.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Habeas Corpus"
    },
    // Q8
    {
        id: 8,
        question: "The writ of Habeas Corpus is NOT issued where the:\n\n1. Detention is lawful.\n2. Proceeding is for contempt of a legislature.\n3. Detention is by a competent court.\n4. Detention is outside the jurisdiction of the court.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four are exceptions where Habeas Corpus is not issued.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Habeas Corpus - Exceptions"
    },
    // Q9
    {
        id: 9,
        question: "Match the Writ with its literal meaning:\n\nList-I (Writ)\nA. Mandamus\nB. Prohibition\nC. Certiorari\nD. Quo-Warranto\n\nList-II (Meaning)\n1. By what authority\n2. We command\n3. To be certified\n4. To forbid\n\nSelect the correct answer using the code given below:",
        options: [
            "A-2, B-4, C-3, D-1",
            "A-2, B-4, C-1, D-3",
            "A-4, B-2, C-3, D-1",
            "A-1, B-3, C-4, D-2"
        ],
        correctAnswer: 0,
        explanation: "Mandamus (Command), Prohibition (Forbid), Certiorari (Certified), Quo-Warranto (What authority).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Meanings"
    },
    // Q10
    {
        id: 10,
        question: "The writ of Mandamus can be issued against which of the following?\n\n1. A public body\n2. A corporation\n3. An inferior court\n4. The President of India\n5. A private individual\n\nSelect the correct answer using the code given below:",
        options: [
            "1, 2 and 3 only",
            "1, 3 and 4 only",
            "2, 3 and 5 only",
            "1, 2, 3, 4 and 5"
        ],
        correctAnswer: 0,
        explanation: "Mandamus can be issued against public body, corporation, and inferior court. It CANNOT be issued against the President or a private individual.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Mandamus"
    },
    // Q11
    {
        id: 11,
        question: "Statement I: The writ of Prohibition directs inactivity, whereas Mandamus directs activity.\n\nStatement II: Prohibition can be issued only against judicial and quasi-judicial authorities, not administrative authorities.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 1,
        explanation: "Both statements are correct. Prohibition prevents (inactivity) while Mandamus directs (activity). Prohibition is only for judicial/quasi-judicial authorities.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Prohibition vs Mandamus"
    },
    // Q12
    {
        id: 12,
        question: "The writ of Certiorari is issued:",
        options: [
            "Before the final order is passed to stop proceedings.",
            "After the final order is passed to quash the same.",
            "To enforce a contractual obligation.",
            "To prevent illegal usurpation of public office."
        ],
        correctAnswer: 1,
        explanation: "Certiorari is issued AFTER the order to quash it. Prohibition is issued BEFORE to prevent proceedings.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Certiorari"
    },
    // Q13
    {
        id: 13,
        question: "In which year did the Supreme Court rule that Certiorari can be issued even against administrative authorities affecting the rights of individuals?",
        options: [
            "1950",
            "1973",
            "1991",
            "The text says \"later\", implying post-1950s evolution."
        ],
        correctAnswer: 3,
        explanation: "The text says 'later the Supreme Court ruled...' indicating a post-1950s evolution of this doctrine.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Certiorari - Evolution"
    },
    // Q14
    {
        id: 14,
        question: "Which writ can be sought by any \"public-minded person\" and not necessarily by the aggrieved person?",
        options: [
            "Certiorari",
            "Mandamus",
            "Quo-Warranto",
            "Prohibition"
        ],
        correctAnswer: 2,
        explanation: "Quo-Warranto can be sought by any public-minded person to challenge illegal usurpation of public office.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Quo-Warranto"
    },
    // Q15
    {
        id: 15,
        question: "The writ of Quo-Warranto cannot be issued in cases of:\n\n1. Substantive public office of a permanent character.\n2. Ministerial office.\n3. Private office.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Quo-Warranto cannot be issued for Ministerial or Private office. It can only be issued for substantive public office.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Quo-Warranto - Scope"
    },
    // Q16
    {
        id: 16,
        question: "Article 33 empowers the Parliament to restrict or abrogate the Fundamental Rights of members of:\n\n1. Armed forces.\n2. Para-military forces.\n3. Police forces.\n4. Intelligence agencies.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 4 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four categories are covered under Article 33 - Armed forces, Para-military, Police, and Intelligence agencies.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 33 - Armed Forces"
    },
    // Q17
    {
        id: 17,
        question: "Consider the following statements regarding Article 33:\n\n1. The power to make laws under Article 33 is conferred concurrently on Parliament and State Legislatures.\n2. Laws made under Article 33 cannot be challenged in any court on the ground of contravention of Fundamental Rights.\n3. \"Members of the armed forces\" includes non-combatants like cooks and tailors.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (Parliament only). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 33 - Features"
    },
    // Q18
    {
        id: 18,
        question: "A parliamentary law enacted under Article 33 can exclude the jurisdiction of which of the following regarding the enforcement of Fundamental Rights?",
        options: [
            "Court Martial only.",
            "High Courts only.",
            "Supreme Court and High Courts over Court Martials.",
            "None of the above."
        ],
        correctAnswer: 2,
        explanation: "Laws under Article 33 can exclude the jurisdiction of Supreme Court and High Courts over Court Martials.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 33 - Court Martial"
    },
    // Q19
    {
        id: 19,
        question: "Which Article provides for restrictions on Fundamental Rights while Martial Law is in force?",
        options: [
            "Article 33",
            "Article 34",
            "Article 35",
            "Article 352"
        ],
        correctAnswer: 1,
        explanation: "Article 34 provides for restrictions on Fundamental Rights while Martial Law is in force.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 34 - Martial Law"
    },
    // Q20
    {
        id: 20,
        question: "Regarding Martial Law in India, consider the following:\n\n1. The expression 'Martial Law' is defined in Article 366 of the Constitution.\n2. It implies the suspension of ordinary law and government by military tribunals.\n3. It has been borrowed from English Common Law.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (Martial Law is NOT defined in the Constitution). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Martial Law"
    },
    // Q21
    {
        id: 21,
        question: "Statement I: The Parliament can indemnify any government servant for acts done during the operation of Martial Law.\n\nStatement II: The Act of Indemnity cannot be challenged in any court on the ground of contravention of Fundamental Rights.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 1,
        explanation: "Both statements are correct. The indemnity is provided under Article 34 and prevents challenge on FR grounds.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 34 - Indemnity"
    },
    // Q22
    {
        id: 22,
        question: "Which of the following is a difference between Martial Law and National Emergency?",
        options: [
            "Martial Law affects Centre-State relations, while National Emergency does not.",
            "Martial Law suspends ordinary law courts, whereas National Emergency continues them.",
            "Martial Law is explicit in the Constitution, while National Emergency is implicit.",
            "Martial Law is imposed on specific grounds like war, while National Emergency is for restoring order."
        ],
        correctAnswer: 1,
        explanation: "Martial Law suspends ordinary courts; National Emergency continues them. This is a key difference.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Martial Law vs Emergency"
    },
    // Q23
    {
        id: 23,
        question: "The Supreme Court has held that the declaration of Martial Law does NOT ipso facto result in the suspension of which writ?",
        options: [
            "Mandamus",
            "Habeas Corpus",
            "Prohibition",
            "Quo-Warranto"
        ],
        correctAnswer: 1,
        explanation: "Habeas Corpus is not automatically suspended even during Martial Law.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Martial Law - Habeas Corpus"
    },
    // Q24
    {
        id: 24,
        question: "Under Article 35, the power to make laws to give effect to certain Fundamental Rights vests:",
        options: [
            "Exclusively in the State Legislatures.",
            "Exclusively in the Parliament.",
            "Concurrently in both.",
            "In the President."
        ],
        correctAnswer: 1,
        explanation: "Article 35 confers exclusive power on Parliament to make laws for certain Fundamental Rights matters.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 35 - Parliament's Power"
    },
    // Q25
    {
        id: 25,
        question: "Parliament has exclusive power to make laws prescribing punishment for which of the following acts declared as offences under Fundamental Rights?\n\n1. Untouchability (Article 17).\n2. Traffic in human beings (Article 23).\n3. Forced labour (Article 23).\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three acts (Untouchability, Traffic, Forced Labour) require Parliamentary legislation for punishment under Article 35.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 35 - Offences"
    },
    // Q26
    {
        id: 26,
        question: "Consider the following statements regarding Article 35:\n\n1. Parliament can prescribe residence as a condition for certain employments in a State.\n2. Parliament can empower courts other than the Supreme Court and High Courts to issue writs.\n3. Laws in force at the commencement of the Constitution regarding these matters stand automatically repealed.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 2 only",
            "3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 0,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect (Laws continue until altered/repealed by Parliament).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 35 - Provisions"
    },
    // Q27
    {
        id: 27,
        question: "The Right to Property was abolished as a Fundamental Right by which Constitutional Amendment?",
        options: [
            "42nd Amendment Act, 1976",
            "44th Amendment Act, 1978",
            "1st Amendment Act, 1951",
            "25th Amendment Act, 1971"
        ],
        correctAnswer: 1,
        explanation: "The 44th Amendment Act, 1978 abolished the Right to Property as a Fundamental Right.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Right to Property"
    },
    // Q28
    {
        id: 28,
        question: "Which Articles were repealed to abolish the Fundamental Right to Property?",
        options: [
            "Article 19(1)(f) and Article 31",
            "Article 19(1)(g) and Article 30",
            "Article 31A and Article 31B",
            "Article 300A and Article 31"
        ],
        correctAnswer: 0,
        explanation: "Article 19(1)(f) (Right to acquire property) and Article 31 (Compulsory acquisition) were repealed.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Right to Property - Articles"
    },
    // Q29
    {
        id: 29,
        question: "Consider the following statements regarding the present position of the Right to Property:\n\n1. It is a part of the basic structure of the Constitution.\n2. It can be curtailed by an ordinary law of the Parliament.\n3. In case of violation, the aggrieved person can move the High Court under Article 226.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect (Not part of basic structure). Statements 2 and 3 are correct.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Right to Property - Present Position"
    },
    // Q30
    {
        id: 30,
        question: "The Constitution provides for a guaranteed right to compensation in case of acquisition of private property by the State in which of the following cases?\n\n1. Acquisition of property of a minority educational institution.\n2. Acquisition of land held by a person under personal cultivation within statutory ceiling limits.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2,
        explanation: "Both cases are exceptions where compensation is guaranteed under the Constitution.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Property - Compensation"
    },
    // Q31
    {
        id: 31,
        question: "Article 31A saves laws from being challenged on the ground of contravention of which Fundamental Rights?",
        options: [
            "Article 14 and Article 19",
            "Article 14 and Article 21",
            "Article 19 and Article 31",
            "Article 14, 19 and 21"
        ],
        correctAnswer: 0,
        explanation: "Article 31A provides immunity from challenge under Article 14 (Equality) and Article 19 (Six Freedoms).",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31A"
    },
    // Q32
    {
        id: 32,
        question: "Which of the following categories of laws are protected by Article 31A?\n\n1. Acquisition of estates by the State.\n2. Amalgamation of corporations.\n3. Extinguishment of rights of directors of corporations.\n4. Modification of mining leases.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "1, 2 and 4 only",
            "2, 3 and 4 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four categories of laws are protected under Article 31A.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31A - Categories"
    },
    // Q33
    {
        id: 33,
        question: "For a State law to be immunised under Article 31A, what is the necessary condition?",
        options: [
            "It must be passed by a special majority.",
            "It must be reserved for the President's consideration and receive his assent.",
            "It must be approved by the Parliament.",
            "It must be included in the Ninth Schedule."
        ],
        correctAnswer: 1,
        explanation: "State laws under Article 31A must be reserved for President's consideration and receive his assent.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31A - State Laws"
    },
    // Q34
    {
        id: 34,
        question: "Consider the following statements regarding Article 31B and the Ninth Schedule:\n\n1. The scope of Article 31B is wider than Article 31A.\n2. It was added by the 1st Constitutional Amendment Act of 1951.\n3. Laws included in the Ninth Schedule are completely immune from judicial review under all circumstances.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 0,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect (I.R. Coelho case made them open to review if violating basic structure).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31B - Ninth Schedule"
    },
    // Q35
    {
        id: 35,
        question: "In the I.R. Coelho case (2007), the Supreme Court ruled that laws placed in the Ninth Schedule after ________ are open to judicial review.",
        options: [
            "January 26, 1950",
            "April 24, 1973",
            "June 24, 1975",
            "May 1, 1980"
        ],
        correctAnswer: 1,
        explanation: "Laws placed in Ninth Schedule after April 24, 1973 (Kesavananda Bharati judgment date) are open to judicial review.",
        level: "Tough",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "I.R. Coelho Case"
    },
    // Q36
    {
        id: 36,
        question: "According to the I.R. Coelho judgement, laws in the Ninth Schedule can be challenged if they violate:",
        options: [
            "Any Fundamental Right.",
            "The Preamble.",
            "Fundamental Rights under Articles 14, 15, 19, and 21 or the basic structure.",
            "Directive Principles of State Policy."
        ],
        correctAnswer: 2,
        explanation: "Laws can be challenged if they violate FRs under Articles 14, 15, 19, 21 or the Basic Structure doctrine.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Ninth Schedule - Judicial Review"
    },
    // Q37
    {
        id: 37,
        question: "Article 31C was inserted by which Amendment Act?",
        options: [
            "24th Amendment Act, 1971",
            "25th Amendment Act, 1971",
            "42nd Amendment Act, 1976",
            "44th Amendment Act, 1978"
        ],
        correctAnswer: 1,
        explanation: "Article 31C was inserted by the 25th Amendment Act, 1971.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31C"
    },
    // Q38
    {
        id: 38,
        question: "In the Kesavananda Bharati case (1973), regarding Article 31C, the Supreme Court:",
        options: [
            "Struck down Article 31C completely.",
            "Upheld the provision that saves laws implementing Article 39(b) and (c).",
            "Upheld the provision that prohibits questioning such laws in court (\"declaration clause\").",
            "Ruled that Article 31C is superior to Article 32."
        ],
        correctAnswer: 1,
        explanation: "The Court upheld 31C saving laws for 39(b) and (c) but struck down the declaration clause.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Kesavananda Bharati - Article 31C"
    },
    // Q39
    {
        id: 39,
        question: "Which case declared the extension of Article 31C (by 42nd Amendment) to include all Directive Principles as unconstitutional?",
        options: [
            "Kesavananda Bharati case",
            "Minerva Mills case",
            "Waman Rao case",
            "Golak Nath case"
        ],
        correctAnswer: 1,
        explanation: "The Minerva Mills case (1980) declared the extension of Article 31C unconstitutional.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Minerva Mills Case"
    },
    // Q40
    {
        id: 40,
        question: "Which of the following is NOT a criticism of Fundamental Rights mentioned in the text?",
        options: [
            "No Social and Economic Rights.",
            "Excessive Limitations.",
            "No Permanency.",
            "Absence of Political Rights."
        ],
        correctAnswer: 3,
        explanation: "The text says FR mainly consists of political rights, so 'Absence of Political Rights' is NOT a criticism.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Criticisms of FR"
    },
    // Q41
    {
        id: 41,
        question: "Who called the Indian Constitution a \"Paradise for Lawyers\"?",
        options: [
            "Dr. B.R. Ambedkar",
            "Sir Ivor Jennings",
            "Jaspat Roy Kapoor",
            "K.M. Munshi"
        ],
        correctAnswer: 1,
        explanation: "Sir Ivor Jennings called the Indian Constitution a 'Paradise for Lawyers'.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Criticisms"
    },
    // Q42
    {
        id: 42,
        question: "Critics argue that the Chapter on Fundamental Rights is not the product of any philosophical principle. This view was expressed by:",
        options: [
            "Sir Ivor Jennings",
            "A.V. Dicey",
            "Granville Austin",
            "Lord Denning"
        ],
        correctAnswer: 0,
        explanation: "Sir Ivor Jennings made this criticism of Fundamental Rights.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Criticisms"
    },
    // Q43
    {
        id: 43,
        question: "The suspension of enforcement of Fundamental Rights during National Emergency (except Articles 20 and 21) is provided under:",
        options: [
            "Article 358",
            "Article 359",
            "Article 352",
            "Article 360"
        ],
        correctAnswer: 1,
        explanation: "Article 359 provides for suspension of enforcement of FRs by Presidential Order during Emergency.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Emergency - Article 359"
    },
    // Q44
    {
        id: 44,
        question: "Which of the following is considered a \"Right outside Part III\" (Constitutional Right)?\n\n1. No tax shall be levied except by authority of law (Article 265).\n2. Right to property (Article 300A).\n3. Freedom of trade, commerce, and intercourse (Article 301).\n4. Right to vote (Article 326).\n\nSelect the correct answer using the code given below:",
        options: [
            "1 and 2 only",
            "2 and 4 only",
            "1, 2 and 3 only",
            "1, 2, 3 and 4"
        ],
        correctAnswer: 3,
        explanation: "All four are Constitutional Rights outside Part III (Fundamental Rights).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Rights Outside Part III"
    },
    // Q45
    {
        id: 45,
        question: "Statement I: In case of a violation of a Constitutional Right (outside Part III), the aggrieved person cannot move the Supreme Court under Article 32.\n\nStatement II: Article 32 is reserved exclusively for the enforcement of Fundamental Rights enshrined in Part III.\n\nWhich one of the following is correct in respect of the above statements?",
        options: [
            "Both Statement I and Statement II are correct and Statement II is the correct explanation for Statement I",
            "Both Statement I and Statement II are correct and Statement II is not the correct explanation for Statement I",
            "Statement I is correct but Statement II is incorrect",
            "Statement I is incorrect but Statement II is correct"
        ],
        correctAnswer: 0,
        explanation: "Both statements are correct and Statement II explains why Statement I is true.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 32 - Scope"
    },
    // Q46
    {
        id: 46,
        question: "The expression \"Estate\" in Article 31A includes:\n\n1. Any jagir, inam or muafi.\n2. Janmam right in Tamil Nadu and Kerala.\n3. Any land held for agricultural purposes.\n\nSelect the correct answer using the code given below:",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are included in the definition of 'Estate' under Article 31A.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 31A - Estate"
    },
    // Q47
    {
        id: 47,
        question: "Before 1950, which High Courts had the power to issue writs?",
        options: [
            "Calcutta, Bombay, and Madras.",
            "Calcutta, Delhi, and Madras.",
            "Bombay, Allahabad, and Patna.",
            "Calcutta and Bombay only."
        ],
        correctAnswer: 0,
        explanation: "Before 1950, only Calcutta, Bombay, and Madras High Courts had writ power.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - History"
    },
    // Q48
    {
        id: 48,
        question: "The phrase \"Fountain of Justice\" in the context of writs refers to:",
        options: [
            "The Supreme Court of India.",
            "The King in England.",
            "The Constitution of India.",
            "The People of India."
        ],
        correctAnswer: 1,
        explanation: "In England, the King was considered the 'Fountain of Justice' from whom writs originated.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Writs - Origin"
    },
    // Q49
    {
        id: 49,
        question: "Under Article 226, a High Court can issue writs to:\n\n1. A person residing within its territorial jurisdiction.\n2. An authority located outside its territorial jurisdiction if the cause of action arises within its jurisdiction.\n3. A government located outside its jurisdiction if the cause of action arises outside its jurisdiction.\n\nWhich of the statements given above are correct?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only"
        ],
        correctAnswer: 1,
        explanation: "Statements 1 and 2 are correct. Statement 3 is incorrect (cause of action must arise within jurisdiction).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 226 - Jurisdiction"
    },
    // Q50
    {
        id: 50,
        question: "Which of the following is NOT a significance of Fundamental Rights?",
        options: [
            "They serve as a formidable bulwark of individual liberty.",
            "They facilitate the establishment of the rule of men.",
            "They protect the interests of minorities.",
            "They check the absoluteness of the authority of the government."
        ],
        correctAnswer: 1,
        explanation: "FRs facilitate 'Rule of Law', not 'Rule of men'. This is incorrect.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Significance of FR"
    },
    // Q51
    {
        id: 51,
        question: "The provision of preventive detention in the Constitution is criticised because:",
        options: [
            "It is unknown in the USA.",
            "It confers arbitrary powers on the State.",
            "It negates individual liberty.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "All listed criticisms of preventive detention are valid as per the text.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Preventive Detention - Criticism"
    },
    // Q52
    {
        id: 52,
        question: "Jaspat Roy Kapoor suggested renaming the chapter on Fundamental Rights to:",
        options: [
            "Limitations on Fundamental Rights.",
            "Rights of the State.",
            "Directive Principles of Individual Policy.",
            "The Lawyers' Paradise."
        ],
        correctAnswer: 0,
        explanation: "Jaspat Roy Kapoor suggested renaming it to 'Limitations on Fundamental Rights' due to excessive restrictions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Criticisms"
    },
    // Q53
    {
        id: 53,
        question: "The \"Doctrine of Basic Structure\" serves as a limitation on:",
        options: [
            "The power of the Supreme Court to issue writs.",
            "The authority of Parliament to curtail or abolish Fundamental Rights.",
            "The President's power to declare Martial Law.",
            "The Governor's power to issue ordinances."
        ],
        correctAnswer: 1,
        explanation: "The Basic Structure doctrine limits Parliament's power to amend/abolish Fundamental Rights.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Basic Structure Doctrine"
    },
    // Q54
    {
        id: 54,
        question: "Which Amendment Act provided that \"no law containing a declaration that it is for giving effect to such policy shall be questioned in any court\"?",
        options: [
            "25th Amendment Act",
            "42nd Amendment Act",
            "44th Amendment Act",
            "1st Amendment Act"
        ],
        correctAnswer: 0,
        explanation: "The 25th Amendment Act inserted the 'declaration clause' in Article 31C.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "25th Amendment"
    },
    // Q55
    {
        id: 55,
        question: "The Supreme Court declared the \"declaration clause\" of Article 31C unconstitutional in which case?",
        options: [
            "Golak Nath case",
            "Kesavananda Bharati case",
            "Minerva Mills case",
            "I.R. Coelho case"
        ],
        correctAnswer: 1,
        explanation: "The Kesavananda Bharati case struck down the declaration clause of Article 31C.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Kesavananda Bharati Case"
    },
    // Q56
    {
        id: 56,
        question: "Match the Articles with their subject matter:\n\nList-I\nA. Article 33\nB. Article 34\nC. Article 35\nD. Article 300A\n\nList-II\n1. Martial Law\n2. Armed Forces' Rights\n3. Right to Property (Legal)\n4. Legislation to give effect to FRs\n\nSelect the correct answer using the code given below:",
        options: [
            "A-2, B-1, C-4, D-3",
            "A-2, B-4, C-1, D-3",
            "A-1, B-2, C-4, D-3",
            "A-3, B-1, C-4, D-2"
        ],
        correctAnswer: 0,
        explanation: "Article 33 (Armed Forces), Article 34 (Martial Law), Article 35 (Legislation for FRs), Article 300A (Property).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Articles Matching"
    },
    // Q57
    {
        id: 57,
        question: "The Supreme Court in the Waman Rao case (1980) clarified the applicability of the basic structure doctrine to:",
        options: [
            "Article 31A",
            "Article 31B (Ninth Schedule)",
            "Article 31C",
            "Article 32"
        ],
        correctAnswer: 1,
        explanation: "The Waman Rao case clarified basic structure doctrine application to Article 31B (Ninth Schedule).",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Waman Rao Case"
    },
    // Q58
    {
        id: 58,
        question: "\"The Constitution of India deals more with the rights of the State against the individual than with the rights of the individual against the State.\" This criticism is primarily directed at:",
        options: [
            "Directive Principles",
            "Emergency Provisions",
            "Preventive Detention",
            "Fundamental Duties"
        ],
        correctAnswer: 2,
        explanation: "This criticism is primarily directed at Preventive Detention provisions.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Criticisms - Preventive Detention"
    },
    // Q59
    {
        id: 59,
        question: "Which of the following statements regarding the \"Right to Vote\" is correct based on the text?",
        options: [
            "It is a Fundamental Right under Article 19.",
            "It is a Constitutional Right under Article 326.",
            "It is a Statutory Right only.",
            "It is available to non-citizens."
        ],
        correctAnswer: 1,
        explanation: "Right to Vote is a Constitutional Right under Article 326, not a Fundamental Right.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Right to Vote"
    },
    // Q60
    {
        id: 60,
        question: "Which Amendment Act inserted Article 300A in Part XII?",
        options: [
            "42nd Amendment Act",
            "44th Amendment Act",
            "25th Amendment Act",
            "86th Amendment Act"
        ],
        correctAnswer: 1,
        explanation: "The 44th Amendment Act, 1978 inserted Article 300A in Part XII of the Constitution.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Fundamental Rights",
        subtopic: "Article 300A"
    }
];
