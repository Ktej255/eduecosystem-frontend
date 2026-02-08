import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 8)
const LEVEL_1_QUESTIONS = [
    {
        question: "Fundamental Rights are enshrined in Part III of the Constitution from Articles:",
        options: ["12 to 35", "14 to 32", "12 to 36", "14 to 35"],
        correctAnswerIndex: 0, // a) 12 to 35
        explanation: "Part III covers Articles 12 to 35."
    },
    {
        question: "Part III of the Constitution is rightly described as the:",
        options: ["Bill of Rights", "Magna Carta of India", "Soul of the Constitution", "Heart of the Constitution"],
        correctAnswerIndex: 1, // b) Magna Carta of India
        explanation: "Described as the Magna Carta of India."
    },
    {
        question: "Article 12 defines the term 'State' for the purposes of Part III. Which of the following is NOT explicitly included in this definition?",
        options: ["Government and Parliament of India.", "Government and Legislature of States.", "All local authorities (municipalities, panchayats).", "Judiciary (Courts)."],
        correctAnswerIndex: 3, // d) Judiciary
        explanation: "Judiciary is not explicitly mentioned in Article 12 (though administrative side is covered by case law)."
    },
    {
        question: "Article 13 declares that all laws that are inconsistent with or in derogation of any of the fundamental rights shall be:",
        options: ["Void", "Voidable", "Illegal", "Unconstitutional"],
        correctAnswerIndex: 0, // a) Void
        explanation: "They shall be void."
    },
    {
        question: "The term 'Law' in Article 13 includes:",
        options: ["Permanent laws enacted by Parliament/State Legislatures.", "Temporary laws like ordinances.", "Statutory instruments like order, bye-law, rule, regulation or notification.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "Includes all: permanent laws, temporary laws, statutory instruments etc."
    },
    {
        question: "Does Article 13 apply to a \"Constitutional Amendment\"?",
        options: ["Yes, always.", "No, the Supreme Court held in Kesavananda Bharati case that a Constitutional Amendment is not a 'law' under Article 13.", "Yes, but only if it violates the Basic Structure.", "No, it applies only to ordinary laws."],
        correctAnswerIndex: 2, // c) Yes, if it violates Basic Structure
        explanation: "Kesavananda Bharati held it can be challenged if it violates Basic Structure."
    },
    {
        question: "Article 14 says that the State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India. This right is available to:",
        options: ["Citizens only.", "Foreigners only.", "Both citizens and foreigners (except enemy aliens).", "Only legal persons."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Available to both citizens and foreigners."
    },
    {
        question: "The concept of 'Equality before Law' is of ______ origin, while 'Equal Protection of Laws' is of ______ origin.",
        options: ["American; British", "British; American", "French; British", "Irish; American"],
        correctAnswerIndex: 1, // b) British; American
        explanation: "Equality before Law (British); Equal Protection (American)."
    },
    {
        question: "Article 15 provides that the State shall not discriminate against any citizen on grounds only of:",
        options: ["Religion, race, caste, sex or place of birth.", "Religion, race, caste, descent, place of birth or residence.", "Religion, race, caste, sex, descent, place of birth, residence or any of them.", "Religion, race, caste, language or sex."],
        correctAnswerIndex: 0, // a) RRCSP
        explanation: "Religion, race, caste, sex or place of birth."
    },
    {
        question: "Article 16 provides for equality of opportunity for all citizens in matters relating to:",
        options: ["Admission to educational institutions.", "Employment or appointment to any office under the State.", "Access to public places.", "Forming associations."],
        correctAnswerIndex: 1, // b) Employment
        explanation: "Matters relating to employment or appointment."
    },
    {
        question: "Mandal Commission (1979) was appointed by the Morarji Desai Government to investigate the conditions of:",
        options: ["Scheduled Castes", "Scheduled Tribes", "Socially and Educationally Backward Classes (SEBCs)", "Religious Minorities"],
        correctAnswerIndex: 2, // c) SEBCs
        explanation: "Socially and Educationally Backward Classes."
    },
    {
        question: "Abolition of Untouchability is guaranteed under:",
        options: ["Article 16", "Article 17", "Article 18", "Article 23"],
        correctAnswerIndex: 1, // b) Article 17
        explanation: "Article 17 abolishes untouchability."
    },
    {
        question: "Article 18 abolishes titles. However, it does not prohibit the state from conferring titles of:",
        options: ["Hereditary nature.", "Military or academic distinction.", "Political nature.", "Religious nature."],
        correctAnswerIndex: 1, // b) Military or academic
        explanation: "Military or academic distinctions are allowed."
    },
    {
        question: "Article 19 guarantees six rights to all citizens. Which of the following is NOT one of them (after the 44th Amendment)?",
        options: ["Right to freedom of speech and expression.", "Right to assemble peaceably and without arms.", "Right to acquire, hold and dispose of property.", "Right to move freely throughout the territory of India."],
        correctAnswerIndex: 2, // c) Property
        explanation: "Right to property was deleted from Article 19 by 44th Amendment."
    },
    {
        question: "The right to form \"Co-operative Societies\" was added to Article 19(1)(c) by the:",
        options: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "97th Amendment Act, 2011"],
        correctAnswerIndex: 3, // d) 97th AA 2011
        explanation: "97th Amendment Act, 2011."
    },
    {
        question: "Article 20 grants protection against arbitrary and excessive punishment to an accused person. It contains three provisions. Which is NOT one of them?",
        options: ["No ex-post-facto law.", "No double jeopardy.", "No self-incrimination.", "No preventive detention."],
        correctAnswerIndex: 3, // d) No preventive detention
        explanation: "Preventive detention is under Article 22."
    },
    {
        question: "Article 21 declares that no person shall be deprived of his life or personal liberty except according to:",
        options: ["Due process of law.", "Procedure established by law.", "Executive order.", "Judicial discretion."],
        correctAnswerIndex: 1, // b) Procedure established by law
        explanation: "Procedure established by law."
    },
    {
        question: "Right to Education (Article 21-A) declares that the State shall provide free and compulsory education to all children of the age of:",
        options: ["0 to 6 years", "6 to 14 years", "6 to 18 years", "14 to 18 years"],
        correctAnswerIndex: 1, // b) 6 to 14 years
        explanation: "6 to 14 years."
    },
    {
        question: "Article 22 grants protection to persons who are arrested or detained. A person arrested under ordinary law must be produced before the nearest magistrate within:",
        options: ["12 hours", "24 hours (excluding journey time)", "48 hours", "7 days"],
        correctAnswerIndex: 1, // b) 24 hours
        explanation: "24 hours excluding journey time."
    },
    {
        question: "Under Preventive Detention law, the maximum period for which a person can be detained without the opinion of an Advisory Board is:",
        options: ["1 month", "2 months", "3 months", "6 months"],
        correctAnswerIndex: 2, // c) 3 months
        explanation: "3 months."
    },
    {
        question: "Article 23 prohibits 'traffic in human beings' and 'begar'. The term 'begar' means:",
        options: ["Selling goods at lower prices.", "Compulsory work without remuneration.", "Working overtime.", "Child labor."],
        correctAnswerIndex: 1, // b) Compulsory work without remuneration
        explanation: "Compulsory work without remuneration."
    },
    {
        question: "Article 24 prohibits the employment of children below the age of ______ in any factory, mine or other hazardous activities.",
        options: ["12 years", "14 years", "16 years", "18 years"],
        correctAnswerIndex: 1, // b) 14 years
        explanation: "14 years."
    },
    {
        question: "Article 25 guarantees freedom of conscience and the right to freely profess, practice and propagate religion. This right is subject to:",
        options: ["Public order, morality and health.", "Public order, morality, health and other provisions of Part III.", "Security of the State.", "Sovereignty and Integrity of India."],
        correctAnswerIndex: 1, // b) Public order, morality, health + Part III
        explanation: "Subject to public order, morality, health and other provisions of Part III."
    },
    {
        question: "Under Article 25, the wearing and carrying of 'kirpans' is deemed to be included in the profession of the ______ religion.",
        options: ["Hindu", "Jain", "Sikh", "Buddhist"],
        correctAnswerIndex: 2, // c) Sikh
        explanation: "Sikh religion."
    },
    {
        question: "Article 26 guarantees rights to manage religious affairs to:",
        options: ["Individuals", "Religious denominations or any section thereof", "Citizens only", "Foreigners only"],
        correctAnswerIndex: 1, // b) Religious denominations
        explanation: "Religious denominations or any section thereof."
    },
    {
        question: "Article 27 lays down that no person shall be compelled to pay any taxes for the promotion or maintenance of any particular:",
        options: ["Political party", "Religion or religious denomination", "Language", "Culture"],
        correctAnswerIndex: 1, // b) Religion
        explanation: "Religion or religious denomination."
    },
    {
        question: "Article 28 distinguishes between four types of educational institutions. In institutions \"wholly maintained by the State,\" religious instruction is:",
        options: ["Permitted", "Permitted on a voluntary basis", "Completely prohibited", "Permitted with parental consent"],
        correctAnswerIndex: 2, // c) Completely prohibited
        explanation: "Completely prohibited."
    },
    {
        question: "Article 29 provides that any section of the citizens residing in any part of India having a distinct language, script or culture of its own, shall have the right to:",
        options: ["Propagate it", "Conserve the same", "Impose it on others", "Seek state funding"],
        correctAnswerIndex: 1, // b) Conserve the same
        explanation: "Right to conserve the same."
    },
    {
        question: "Article 30 grants the right to establish and administer educational institutions to:",
        options: ["Religious minorities only", "Linguistic minorities only", "Religious and linguistic minorities", "All minorities (religious, linguistic, and ethnic)"],
        correctAnswerIndex: 2, // c) Religious and linguistic
        explanation: "Right to establish and administer educational institutions."
    },
    {
        question: "Article 32 confers the right to remedies for the enforcement of Fundamental Rights. It empowers the ______ to issue directions or orders or writs.",
        options: ["President", "Parliament", "Supreme Court", "High Court"],
        correctAnswerIndex: 2, // c) Supreme Court
        explanation: "Supreme Court."
    },
    {
        question: "Which writ is issued by the court to a public official asking him to perform his official duties that he has failed or refused to perform?",
        options: ["Habeas Corpus", "Mandamus", "Prohibition", "Certiorari"],
        correctAnswerIndex: 1, // b) Mandamus
        explanation: "Mandamus (We Command)."
    },
    {
        question: "Which writ is known as the \"Bulwark of Personal Freedom\"?",
        options: ["Habeas Corpus", "Quo-Warranto", "Certiorari", "Mandamus"],
        correctAnswerIndex: 0, // a) Habeas Corpus
        explanation: "Habeas Corpus."
    },
    {
        question: "Article 31A saves laws providing for acquisition of estates, etc., from being challenged on the ground of contravention of:",
        options: ["Article 14 and 19", "Article 19 and 21", "Article 14, 19 and 31", "Article 25 and 26"],
        correctAnswerIndex: 0, // a) Article 14 and 19
        explanation: "Article 14 and 19."
    },
    {
        question: "Article 31B saves the acts and regulations included in the ______ Schedule from being challenged and invalidated on the ground of contravention of any of the fundamental rights.",
        options: ["Eighth", "Ninth", "Tenth", "Twelfth"],
        correctAnswerIndex: 1, // b) Ninth Schedule
        explanation: "Ninth Schedule."
    },
    {
        question: "Article 33 empowers the Parliament to restrict or abrogate the fundamental rights of:",
        options: ["Members of Armed Forces and Paramilitary Forces.", "Police Forces and Intelligence Agencies.", "Forces charged with the maintenance of public order.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All (Armed forces, police, intelligence etc)."
    },
    {
        question: "Who has the power to make laws under Article 33?",
        options: ["President", "Parliament", "State Legislature", "Supreme Court"],
        correctAnswerIndex: 1, // b) Parliament
        explanation: "Parliament only."
    },
    {
        question: "Article 34 provides for the restrictions on fundamental rights while ______ is in force in any area.",
        options: ["National Emergency", "President's Rule", "Martial Law", "Financial Emergency"],
        correctAnswerIndex: 2, // c) Martial Law
        explanation: "Martial Law."
    },
    {
        question: "\"Martial Law\" has:",
        options: ["Been defined in the Constitution under Article 34.", "Not been defined in the Constitution.", "Been defined in the Army Act.", "Been defined in the Criminal Procedure Code."],
        correctAnswerIndex: 1, // b) Not defined
        explanation: "Not defined in the Constitution."
    },
    {
        question: "Article 35 lays down that the power to make laws, to give effect to certain specified fundamental rights shall vest only in the:",
        options: ["Parliament", "State Legislatures", "Both Parliament and State Legislatures", "Supreme Court"],
        correctAnswerIndex: 0, // a) Parliament
        explanation: "Parliament only."
    },
    {
        question: "Which of the following Fundamental Rights are available only to citizens and not to foreigners?",
        options: ["Article 14, 20, 21, 21A, 22", "Article 15, 16, 19, 29, 30", "Article 15, 16, 19, 21, 22", "Article 14, 19, 21, 25, 29"],
        correctAnswerIndex: 1, // b) 15, 16, 19, 29, 30
        explanation: "Articles 15, 16, 19, 29, 30 are available only to citizens."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "The definition of \"State\" under Article 12 is wide. Which of the following has the Supreme Court held to be a \"State\" for the enforcement of Fundamental Rights?",
        options: ["A Private Body working as an agent of the State.", "BCCI (Board of Control for Cricket in India).", "NCERT (National Council of Educational Research and Training).", "A private unaided school (for all purposes)."],
        correctAnswerIndex: 0, // a) Private body as agent
        explanation: "Private body as agent of state is State. BCCI/NCERT are not State (mostly)."
    },
    {
        question: "The \"Doctrine of Severability\" under Article 13 implies that:",
        options: ["If a law violates a Fundamental Right, the entire law is void.", "Only the part of the law that is inconsistent with the Fundamental Right is void, provided it can be separated from the rest.", "The law is void ab initio (from the beginning).", "The law becomes valid if the Fundamental Right is amended."],
        correctAnswerIndex: 1, // b) Severability
        explanation: "Only inconsistent part is void if severable."
    },
    {
        question: "The \"Doctrine of Eclipse\" applies to:",
        options: ["Post-Constitutional laws only.", "Pre-Constitutional laws only.", "Both Pre and Post Constitutional laws (as per recent judgments).", "Constitutional Amendments."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Originally pre-constitutional, now extended to post-constitutional (Ambica Mills case)."
    },
    {
        question: "Article 14 permits \"Class Legislation\" but prohibits \"Reasonable Classification\".",
        options: ["True", "False (It prohibits Class Legislation but permits Reasonable Classification).", "True (It permits both).", "False (It prohibits both)."],
        correctAnswerIndex: 1, // b) False
        explanation: "Prohibits class legislation, permits reasonable classification."
    },
    {
        question: "The \"Creamy Layer\" concept was introduced by the Supreme Court in the Indra Sawhney case (1992) to exclude affluent members from reservation benefits. This applies to:",
        options: ["SCs and STs.", "OBCs only.", "SCs, STs, and OBCs.", "EWS only."],
        correctAnswerIndex: 1, // b) OBCs only
        explanation: "Applies to OBCs (and recently argued for SCs, but originally OBCs)."
    },
    {
        question: "\"Catch-up Rule\" regarding reservation in promotion was restored by which Constitutional Amendment?",
        options: ["77th Amendment", "81st Amendment", "82nd Amendment", "85th Amendment"],
        correctAnswerIndex: 3, // d) 85th
        explanation: "85th Amendment restored consequential seniority (catch-up rule)."
    },
    {
        question: "Article 15(5) regarding reservation in private educational institutions was added by the 93rd Amendment. Does this apply to \"Minority Educational Institutions\"?",
        options: ["Yes, all institutions.", "No, it specifically excludes minority institutions (Article 30 protection).", "Yes, but only aided ones.", "Yes, if they are professional colleges."],
        correctAnswerIndex: 1, // b) Excludes minority
        explanation: "Excludes minority institutions."
    },
    {
        question: "The \"Right to Strike\" is:",
        options: ["A Fundamental Right under Article 19(1)(c).", "A Legal Right under Industrial Disputes Act.", "A Constitutional Right under Article 301.", "Not a right at all."],
        correctAnswerIndex: 1, // b) Legal Right
        explanation: "It is a legal/statutory right, not Fundamental."
    },
    {
        question: "Freedom of Speech (Article 19(1)(a)) includes the \"Right to Silence\". This was upheld in the:",
        options: ["Bijoe Emmanuel case (National Anthem case).", "Kedar Nath Singh case.", "Maneka Gandhi case.", "Shreya Singhal case."],
        correctAnswerIndex: 0, // a) Bijoe Emmanuel
        explanation: "Bijoe Emmanuel (Jehovah's Witnesses) case."
    },
    {
        question: "\"Reasonable Restrictions\" on Freedom of Speech include \"Contempt of Court\". However, truth can be a defense in contempt proceedings if it is in:",
        options: ["Public Interest.", "Good Faith.", "Both (a) and (b).", "Neither (Truth is no defense)."],
        correctAnswerIndex: 0, // a) Public Interest
        explanation: "Truth is a defense if in public interest (Contempt of Courts Act amendment)."
    },
    {
        question: "Article 20(3) \"Protection against Self-Incrimination\" extends to:",
        options: ["Police interrogation.", "Court proceedings.", "Compulsory production of material objects (blood sample, thumb impression).", "Both (a) and (b), but not (c)."],
        correctAnswerIndex: 3, // d) a and b but not c
        explanation: "Not to material objects (thumb impression etc)."
    },
    {
        question: "The \"Golden Triangle\" of Fundamental Rights refers to Articles:",
        options: ["14, 19, and 21.", "14, 15, and 16.", "19, 21, and 22.", "25, 26, and 27."],
        correctAnswerIndex: 0, // a) 14, 19, 21
        explanation: "Articles 14, 19, and 21."
    },
    {
        question: "In the Maneka Gandhi case (1978), the Supreme Court widened the scope of Article 21 by interpreting \"Procedure Established by Law\" to mean:",
        options: ["Due Process of Law (Just, Fair, and Reasonable).", "Procedure laid down by Parliament only.", "Procedure laid down by the Executive.", "Procedure followed in Britain."],
        correctAnswerIndex: 0, // a) Due Process
        explanation: "Interpreted to mean Due Process (Just, Fair, Reasonable)."
    },
    {
        question: "Which of the following rights is NOT implied under Article 21?",
        options: ["Right to Livelihood.", "Right to Privacy.", "Right to Die (Active Euthanasia).", "Right to Speedy Trial."],
        correctAnswerIndex: 2, // c) Right to Die (Active)
        explanation: "Active Euthanasia is not a right (Passive is allowed)."
    },
    {
        question: "Preventive Detention laws can be made by:",
        options: ["Parliament only.", "State Legislature only.", "Both Parliament and State Legislature (Concurrent List).", "President only."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Concurrent List."
    },
    {
        question: "Under Article 22, the Advisory Board must report within 3 months if detention is to continue. The 44th Amendment tried to reduce this period to:",
        options: ["1 month", "2 months", "6 weeks", "15 days"],
        correctAnswerIndex: 1, // b) 2 months
        explanation: "Tried to reduce to 2 months (un-notified)."
    },
    {
        question: "Article 23 prohibits \"Traffic in human beings\". This includes:",
        options: ["Selling and buying of men, women, and children like goods.", "Immoral traffic in women and children (prostitution).", "Devadasi system.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Includes all forms of traffic."
    },
    {
        question: "The \"Essential Religious Practices\" test was evolved by the Supreme Court to determine what is protected under Article 25. In the Sabarimala case (2018), the Court held that:",
        options: ["Exclusion of women is an essential practice of Ayyappa devotees.", "Devotion cannot be subjected to gender discrimination; Article 25 is subject to \"morality\" (Constitutional morality).", "The temple is a denominational temple under Article 26.", "The deity is a juristic person with privacy rights."],
        correctAnswerIndex: 1, // b)
        explanation: "Devotion cannot be subjected to gender discrimination."
    },
    {
        question: "Article 26 gives rights to \"Religious Denominations\". According to the Supreme Court, a religious denomination must satisfy three conditions. Which is NOT one of them?",
        options: ["It should be a collection of individuals who have a system of beliefs (doctrines).", "It should have a common organization.", "It should have a distinct name.", "It should be recognized by the State."],
        correctAnswerIndex: 3, // d) Recognized by state
        explanation: "State recognition not required."
    },
    {
        question: "Can the State acquire the property of a religious denomination?",
        options: ["No, Article 26(c) gives them the right to own property.", "Yes, under Article 31 (now 300A), subject to Article 26(d) \"in accordance with law\".", "Yes, but only in case of emergency.", "No, it is a secular state."],
        correctAnswerIndex: 1, // b) Yes
        explanation: "Yes, in accordance with law."
    },
    {
        question: "Article 30 gives minorities the right to establish educational institutions. The term \"Minority\" here includes:",
        options: ["Religious and Linguistic minorities only.", "Religious, Linguistic, and Ethnic minorities.", "Religious, Linguistic, and Racial minorities.", "Only Religious minorities."],
        correctAnswerIndex: 0, // a) Religious and Linguistic
        explanation: "Religious and Linguistic only."
    },
    {
        question: "In the T.M.A. Pai Foundation case (2002), the Supreme Court held that the unit for determining \"Linguistic Minority\" is:",
        options: ["The District.", "The State.", "The Whole of India.", "The Taluk."],
        correctAnswerIndex: 1, // b) The State
        explanation: "The State is the unit."
    },
    {
        question: "Can a minority institution (Article 30) be compelled to reserve seats for backward classes (SC/ST/OBC)?",
        options: ["Yes, under Article 15(5).", "No, they are exempt from Article 15(5).", "Yes, if they receive government aid.", "Yes, under the RTE Act."],
        correctAnswerIndex: 1, // b) Exempt
        explanation: "Exempt from Art 15(5)."
    },
    {
        question: "The \"Writ Jurisdiction\" of the Supreme Court (Article 32) differs from that of the High Court (Article 226) in that:",
        options: ["SC can issue writs only for Fundamental Rights; HC can issue writs for FRs and \"any other purpose\" (Legal Rights).", "SC's jurisdiction is wider than HC.", "SC can refuse to exercise writ jurisdiction; HC cannot.", "Both have concurrent and identical jurisdiction."],
        correctAnswerIndex: 0, // a)
        explanation: "SC only for FRs; HC for FRs + others."
    },
    {
        question: "\"Res Judicata\" applies to Writ Petitions. This means:",
        options: ["You cannot file a petition in SC if HC has already rejected it on the same grounds (except Habeas Corpus).", "You can file successive petitions for the same cause.", "The decision of the lower court is binding on the higher court.", "The matter is sub-judice."],
        correctAnswerIndex: 0, // a) Res Judicata
        explanation: "Cannot file again if rejected (except Habeas Corpus)."
    },
    {
        question: "\"Locus Standi\" (Right to be heard) was relaxed by the Supreme Court to introduce:",
        options: ["Public Interest Litigation (PIL).", "Judicial Review.", "Curative Petition.", "Special Leave Petition."],
        correctAnswerIndex: 0, // a) PIL
        explanation: "Relaxed for PIL."
    },
    {
        question: "Under Article 33, can the Parliament restrict the Fundamental Rights of \"non-combatant\" employees of the Armed Forces (like barbers, cooks)?",
        options: ["Yes, the term \"members of the Armed Forces\" covers such employees too.", "No, only combatants.", "No, they are civilians.", "Only during war."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Covers non-combatants too."
    },
    {
        question: "Article 35 gives exclusive power to the Parliament (and not State Legislatures) to make laws for:\n1. Prescribing residence as a condition for employment (Article 16).\n2. Empowering courts other than SC/HC to issue writs (Article 32).\n3. Restricting rights of Armed Forces (Article 33).\n4. Punishment for Untouchability (Article 17) and Traffic in Human Beings (Article 23).\nSelect the correct answer:",
        options: ["1 and 2 only", "3 and 4 only", "1, 3, and 4 only", "1, 2, 3, and 4"],
        correctAnswerIndex: 3, // d) All
        explanation: "All are exclusive Parliament powers under Art 35."
    },
    {
        question: "Assertion (A): Fundamental Rights are not absolute. Reason (R): They are subject to \"Reasonable Restrictions\" to balance individual liberty with social control.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Which Fundamental Right cannot be suspended even during a National Emergency (Article 352)?",
        options: ["Article 19", "Article 20 and 21", "Article 32", "Article 14"],
        correctAnswerIndex: 1, // b) 20 and 21
        explanation: "Articles 20 and 21."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "The Digital Personal Data Protection Act, 2023 has been criticized for diluting the \"Right to Information\" (RTI). In the context of the Puttaswamy judgment (Right to Privacy), the Supreme Court held that:",
        options: ["Privacy is absolute and overrides the Right to Information.", "Privacy is not absolute; it must yield to legitimate state interests and public interest (RTI).", "RTI is not a fundamental right, unlike Privacy.", "Data protection is a statutory right, not a constitutional one."],
        correctAnswerIndex: 1, // b)
        explanation: "Privacy is not absolute; balances with public interest."
    },
    {
        question: "The \"Right to be Forgotten\" is currently being adjudicated by the Supreme Court. Which Fundamental Rights are in direct conflict here?",
        options: ["Article 21 (Right to Privacy of the individual) vs Article 19(1)(a) (Right to Information of the public/media).", "Article 14 (Equality) vs Article 19 (Freedom of Press).", "Article 25 (Religious Freedom) vs Article 21.", "Article 32 vs Article 226."],
        correctAnswerIndex: 0, // a) Privacy vs Info
        explanation: "Privacy (21) vs Info (19)."
    },
    {
        question: "The \"Sealed Cover Jurisprudence\" used by the government in cases like MediaOne (security clearance) was criticized by the Supreme Court (2023). The Court held that:",
        options: ["National security is an absolute ground to deny natural justice.", "The state must disclose the \"gist\" of the allegations to the affected party to satisfy the \"Right to Fair Hearing\" under Article 21.", "Sealed covers are the prerogative of the Executive under Article 74.", "Only the Chief Justice can view the sealed cover."],
        correctAnswerIndex: 1, // b) Disclose gist
        explanation: "Must disclose gist for fair hearing."
    },
    {
        question: "The Sabarimala Review and other religious rights cases (Entry of women in mosques, Parsi women's rights) have been referred to a 9-judge Constitution Bench. The core question is the interplay between:",
        options: ["Article 14 (Equality/Non-discrimination) and Article 25 (Freedom of Religion of denomination).", "Article 25(1) (Individual right) and Article 26(b) (Denominational right).", "The definition of \"Constitutional Morality\".", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Involves equality vs denomination rights, individual vs denomination, and constitutional morality."
    },
    {
        question: "The Karnataka Hijab Ban case resulted in a split verdict in the Supreme Court. One judge upheld the ban on the ground that:",
        options: ["Hijab is not an \"Essential Religious Practice\" in Islam.", "Uniforms in secular institutions are a \"Reasonable Restriction\" under Article 19(2) and do not violate Article 25.", "Article 25 protects only \"conscience,\" not \"dress\".", "Schools are not \"State\" under Article 12."],
        correctAnswerIndex: 1, // b) Uniforms as restriction
        explanation: "Hemant Gupta J upheld it as a reasonable restriction."
    },
    {
        question: "\"Marital Rape\" is currently legal under Exception 2 to Section 375 of IPC (now BNS). The challenge to this exception is based on the violation of:",
        options: ["Article 14 (Unreasonable classification between married and unmarried women).", "Article 21 (Right to bodily integrity and sexual autonomy).", "Article 15 (Discrimination on grounds of sex/marital status).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Challenge involves 14, 15, and 21."
    },
    {
        question: "The EWS Reservation (103rd Amendment) was upheld by the Supreme Court (3:2 majority). The majority held that:",
        options: ["Economic criteria alone cannot be the basis for reservation (overruling Indra Sawhney).", "Economic criteria can be the basis for reservation; exclusion of SC/ST/OBCs from EWS quota is valid to prevent \"double benefit\".", "The 50% ceiling on reservation is inflexible and cannot be breached.", "Reservation is a fundamental right."],
        correctAnswerIndex: 1, // b) EWS Valid
        explanation: "Economic criteria valid; exclusion valid to prevent double dipping."
    },
    {
        question: "The \"Sub-classification of Scheduled Castes\" (e.g., Punjab case) was referred to a 7-judge bench. In 2024, the Court allowed sub-classification to:",
        options: ["Exclude the \"Creamy Layer\" among SCs.", "Grant preferential treatment to the \"most backward\" among the SCs (e.g., Valmikis vs Mazhabis).", "Remove the SC status of those who convert to Christianity.", "Both (a) and (b)."],
        correctAnswerIndex: 3, // d) Both a and b (Creamy layer + Preferential)
        explanation: "Sub-classification allowed for both purposes."
    },
    {
        question: "The \"Local Domicile Reservation\" in private sector jobs (e.g., Haryana's 75% quota law) was challenged. The High Court quashed it as unconstitutional because:",
        options: ["It violates Article 16(2) (Residence discrimination).", "It violates Article 19(1)(g) (Right to carry on occupation) of employers.", "It creates a \"partition\" of the labor market, violating the unity of India (Article 1).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Violates 16(2), 19(1)(g), and unity."
    },
    {
        question: "The \"Internet Shutdowns\" in Manipur and other regions were challenged. The Supreme Court in the Anuradha Bhasin case (2020) held that:",
        options: ["Access to the internet is a Fundamental Right under Article 21.", "Freedom of speech and trade over the internet is constitutionally protected under Article 19(1)(a) and 19(1)(g).", "Internet shutdowns can be indefinite if national security is at stake.", "The government need not publish shutdown orders."],
        correctAnswerIndex: 1, // b)
        explanation: "Protected under 19(1)(a) and 19(1)(g)."
    },
    {
        question: "The \"IT Rules, 2021\" (Fact Check Unit) were stayed by the Supreme Court (2024). The criticism was that empowering a government unit to decide \"fake news\" violates:",
        options: ["Article 14 (State becomes judge in its own cause).", "Article 19(1)(a) (Chilling effect on free speech).", "The principle of Natural Justice.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Violates Speech and Natural Justice."
    },
    {
        question: "\"Hate Speech\" guidelines were reinforced by the Supreme Court (2023). The Court directed police to register cases suo motu (without complaint) to protect:",
        options: ["The Secular fabric of the nation (Preamble).", "Fraternity and Dignity of individuals (Article 21).", "Public Order (Article 19(2)).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Secularism, Fraternity, Public Order."
    },
    {
        question: "The Bharatiya Nyaya Sanhita (BNS) introduces \"Community Service\" as a punishment. This is seen as a reformative step. Does it violate Article 23 (Begar/Forced Labor)?",
        options: ["Yes, because it is work without pay.", "No, Article 23(2) permits the State to impose \"compulsory service for public purposes\".", "Yes, unless the convict consents.", "No, because it is not \"labor\" but \"service\"."],
        correctAnswerIndex: 1, // b) Public Purpose
        explanation: "Permitted under Art 23(2)."
    },
    {
        question: "In the PMLA (Money Laundering) Judgment (2022), the Supreme Court upheld the \"twin conditions\" for bail (guilty until proven innocent for bail purposes). Critics argue this reverses the burden of proof, violating:",
        options: ["Article 14 (Arbitrariness).", "Article 20(3) (Self-incrimination).", "Article 21 (Right to Liberty - \"Bail is rule, jail is exception\").", "Article 22 (Protection against arrest)."],
        correctAnswerIndex: 2, // c) Art 21
        explanation: "Violates liberty/bail norms."
    },
    {
        question: "The \"Right to Silence\" of an accused (Article 20(3)) is often bypassed by summoning them as a \"witness\" or for \"inquiry\" (not investigation) under special laws (ED/Customs). The Supreme Court has held that:",
        options: ["Protection of Article 20(3) is available only to a person \"accused of an offense\" (formal FIR/Complaint).", "Statements made to ED officers are admissible as they are not \"police officers\".", "Both (a) and (b).", "Right to silence is absolute at all stages."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Available only to 'accused'; ED officers not police."
    },
    {
        question: "The National Commission for Minority Educational Institutions (NCMEI) grants \"Minority Status\" certificates. Recently, the Supreme Court clarified that the unit for determining minority status (Linguistic/Religious) is:",
        options: ["The District.", "The State.", "The Nation.", "The Block."],
        correctAnswerIndex: 1, // b) State
        explanation: "State is the unit."
    },
    {
        question: "The \"Aligarh Muslim University (AMU) Minority Status\" case (2024) revolves around whether a university established by a central statute (Act of Parliament) can claim minority status under Article 30. The Centre argues:",
        options: ["Yes, if it was established by Muslims.", "No, an institution established by a statute is a \"national institution,\" not a minority one.", "Yes, but it cannot reserve seats.", "No, because it receives 100% government funding."],
        correctAnswerIndex: 1, // b) Statute = National
        explanation: "Centre argues statute-creation negates minority character (Azeez Basha case)."
    },
    {
        question: "Assertion (A): A law violating Article 14, 19, or 21 is void. Reason (R): The \"Due Process of Law\" doctrine, imported via Maneka Gandhi, requires laws to be just, fair, and reasonable, not just procedurally correct.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): The \"Right to Property\" is no longer a Fundamental Right. Reason (R): It was deleted by the 44th Amendment to facilitate land reforms and prevent judicial intervention in property acquisition.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "The \"Doctrine of Waiver\" of Fundamental Rights:",
        options: ["Is applicable in India; a citizen can waive his rights.", "Is not applicable in India; a citizen cannot waive his Fundamental Rights (e.g., agree to be discriminated against).", "Applies only to Article 19.", "Applies only to Property Rights."],
        correctAnswerIndex: 1, // b) Not applicable
        explanation: "Doctrine of Waiver is not applicable in India (Basheshar Nath case)."
    },
    {
        question: "\"Double Jeopardy\" (Article 20(2)) protects a person from being prosecuted and punished twice for the same offense. Does this apply if the first punishment was by a Departmental Inquiry (Administrative)?",
        options: ["Yes.", "No, it applies only to judicial proceedings (Court of Law).", "Yes, if the inquiry led to dismissal.", "No, unless it was by a Military Court."],
        correctAnswerIndex: 1, // b) Judicial only
        explanation: "Only judicial proceedings."
    },
    {
        question: "The \"Right to Sleep\" was declared a Fundamental Right (under Article 21) in the case of:",
        options: ["Ramlila Maidan Incident case.", "Puttaswamy case.", "Olga Tellis case.", "Navtej Singh Johar case."],
        correctAnswerIndex: 0, // a) Ramlila Maidan
        explanation: "Ramlila Maidan Incident case."
    },
    {
        question: "The \"Right to Travel Abroad\" is protected under:",
        options: ["Article 19(1)(d) (Move freely throughout India).", "Article 19(1)(e) (Reside anywhere).", "Article 21 (Personal Liberty - Maneka Gandhi case).", "Article 14."],
        correctAnswerIndex: 2, // c) Article 21
        explanation: "Article 21 (Maneka Gandhi)."
    },
    {
        question: "Article 31C saves laws giving effect to Directive Principles (Article 39(b) and 39(c)) from being challenged under Articles 14 and 19. The Minerva Mills case struck down the expansion of Article 31C to all DPSPs because:",
        options: ["It destroyed the \"Balance between FR and DPSP\" (Basic Structure).", "It violated Article 14.", "It was passed during Emergency.", "It removed Judicial Review entirely."],
        correctAnswerIndex: 0, // a) Balance
        explanation: "Destroyed the balance (Basic Structure)."
    },
    {
        question: "The \"Ninth Schedule\" laws are open to Judicial Review if they:",
        options: ["Violate any Fundamental Right.", "Violate the Basic Structure and were added after April 24, 1973 (Kesavananda Bharati date).", "Are related to land reforms.", "Are challenged within 10 years."],
        correctAnswerIndex: 1, // b) Basic Structure + Date
        explanation: "Basic Structure violation + Post-1973 (IR Coelho case)."
    },
    {
        question: "The \"Right to Vote\" is:",
        options: ["A Fundamental Right.", "A Constitutional Right (Article 326).", "A Statutory Right (RPA, 1951).", "Both (b) and (c) (Subject to debate, but primarily Statutory/Constitutional)."],
        correctAnswerIndex: 3, // d) Constitutional/Statutory
        explanation: "Constitutional (Art 326) / Statutory. Not Fundamental."
    },
    {
        question: "\"Preventive Detention\" laws in India must conform to the procedural safeguards of Article 22. However, these safeguards (e.g., 3 months limit) are not available to:",
        options: ["Enemy Aliens.", "Persons arrested under UAPA.", "Political prisoners.", "Journalists."],
        correctAnswerIndex: 0, // a) Enemy Aliens
        explanation: "Enemy Aliens are denied Art 22 protections."
    },
    {
        question: "The \"Rule of Law\" is embodied in Article 14. The \"Rule of Law\" implies:\n1. Absence of arbitrary power.\n2. Equality before law.\n3. Primacy of the rights of the individual (Constitution is result of rights).\nSelect the correct answer (Indian Context):",
        options: ["1 and 2 only (Indian Constitution is source, not result).", "1 and 3 only.", "2 and 3 only.", "1, 2, and 3."],
        correctAnswerIndex: 0, // a) 1 and 2
        explanation: "In India, Constitution is the source of rights, not the result."
    },
    {
        question: "\"Sedition\" (Section 124A IPC) was effectively suspended by the Supreme Court (2022) pending review. The conflict is between:",
        options: ["Article 19(1)(a) (Free Speech) and Article 19(2) (Security of State/Public Order).", "Article 21 and Article 14.", "Colonial law and Modern Democracy.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Involves all aspects."
    },
    {
        question: "The \"Right to Health\" (Article 21) was emphasized during the COVID-19 pandemic. The Supreme Court held that:",
        options: ["The State has an obligation to provide free treatment to all.", "Private hospitals cannot charge exorbitant fees; the \"Right to Health\" includes affordable treatment.", "Vaccination cannot be made mandatory (Right to Bodily Integrity).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All (Affordable treatment, no mandatory vax, state obligation)."
    }
];

export const CHAPTER_8_LEVELS: ChapterLevelData = {
    topicId: 8,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 8: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l3-q${i + 1}` }))
        }
    ]
};
