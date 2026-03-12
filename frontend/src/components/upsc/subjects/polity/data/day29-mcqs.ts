import type { MCQ } from './mcq-utils';

export const DAY29_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 29)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In which country did the concept of Public Interest Litigation (PIL) originate and develop in the 1960s?",
        options: [
            "United Kingdom",
            "United States of America",
            "India",
            "Canada"
        ],
        correctAnswer: 1, // B
        explanation: "The concept of Public Interest Litigation (PIL) originated and developed in the USA in the 1960s.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 2,
        question: "In the context of its origins in the USA, PIL was initially designed to provide legal representation to which groups?",
        options: [
            "Multinational Corporations",
            "Foreign Governments",
            "Previously unrepresented groups like the poor, racial minorities, and environmentalists",
            "High net-worth individuals"
        ],
        correctAnswer: 2, // C
        explanation: "In the USA, it was designed to provide legal representation to previously unrepresented groups and interests, such as the poor, environmentalists, consumers, and racial minorities.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Origin Scope", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 3,
        question: "What alternative term did Justice V.R. Krishna Iyer prefer to use instead of 'Public Interest Litigation' in the Indian context?",
        options: [
            "Class Action Litigation",
            "Social Action Litigation (SAL)",
            "Private Interest Litigation",
            "Constitutional Action Litigation"
        ],
        correctAnswer: 1, // B
        explanation: "In India, PIL is also known as Social Action Litigation (SAL), Social Interest Litigation (SIL) and Class Action Litigation (CAL). Justice Krishna Iyer and Prof. Upendra Baxi preferred the term 'Social Action Litigation'.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Terminology", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 4,
        question: "The traditional rule of 'Locus Standi' strictly requires that:",
        options: [
            "Anyone can file a case on behalf of anyone else.",
            "Only the person whose rights are directly violated (the aggrieved person) can approach the court for a remedy.",
            "Only lawyers can file cases, not citizens.",
            "Only the government can approach the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "The traditional rule of locus standi means that only the aggrieved person (the person whose rights have been violated) can approach the court for a remedy.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Locus Standi", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 5,
        question: "Public Interest Litigation (PIL) is fundamentally an exception to which traditional legal rule?",
        options: [
            "Habeas Corpus",
            "Stare Decisis",
            "Locus Standi",
            "Double Jeopardy"
        ],
        correctAnswer: 2, // C
        explanation: "PIL is an exception to the traditional rule of locus standi. Under PIL, any public-spirited citizen can move the court on behalf of others.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Core Concept", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 6,
        question: "Under the principles of PIL in India, who is eligible to move the court for the enforcement of the rights of marginalized groups who cannot approach the court themselves?",
        options: [
            "Only the victims' blood relatives",
            "Only a registered political party",
            "Any public-spirited citizen or social organization",
            "Only a sitting High Court Judge"
        ],
        correctAnswer: 2, // C
        explanation: "Under PIL, any public-spirited citizen or social organization can move the court for the enforcement of the rights of any person or group who, because of poverty or ignorance, cannot approach the court themselves.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Eligibility", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 7,
        question: "Which of the following landmark cases is widely considered as laying the foundation of Public Interest Litigation in India (regarding undertrial prisoners)?",
        options: [
            "Kesavananda Bharati case (1973)",
            "Hussainara Khatoon case (1979)",
            "Minerva Mills case (1980)",
            "Golaknath case (1967)"
        ],
        correctAnswer: 1, // B
        explanation: "The Hussainara Khatoon case (1979), dealing with the agonizing conditions of thousands of undertrial prisoners languishing in Bihar jails, laid the foundation of PIL in India.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Landmark Case", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 8,
        question: "Justices V.R. Krishna Iyer and P.N. Bhagwati are widely recognized as the pioneers of PIL in India. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 0, // A
        explanation: "Yes, Justice V.R. Krishna Iyer and Justice P.N. Bhagwati were the pioneers of the concept of PIL in India.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Pioneers", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 9,
        question: "According to the Supreme Court guidelines, which of the following subjects is GENERALLY ENTERTAINED as a Public Interest Litigation?",
        options: [
            "Landlord-Tenant disputes",
            "Matters pertaining to neglected children",
            "Service matters like pension and transfers",
            "Admission to medical or engineering colleges"
        ],
        correctAnswer: 1, // B
        explanation: "According to SC guidelines, petitions pertaining to neglected children are entertained as PIL. Landlord-tenant, service matters, and college admissions are explicitly excluded.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Subject Matter", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 10,
        question: "According to the Supreme Court guidelines on PIL, a petition seeking early hearing of a case pending in a High Court or Subordinate Court:",
        options: [
            "Is a valid ground for a PIL.",
            "Is NOT a valid ground for a PIL.",
            "Is valid only if the delay is more than 10 years.",
            "Is valid only if filed by a Senior Advocate."
        ],
        correctAnswer: 1, // B
        explanation: "The Supreme Court guidelines explicitly explicitly state that petitions for early hearing of cases pending in High Courts and Subordinate Courts will NOT be entertained as PILs.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Exclusion", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 11,
        question: "According to the Supreme Court's definition, PIL is an action defined to enforce public interest, wherein the 'public' or a class of the community has some:",
        options: [
            "Pecuniary (financial) or legal interest",
            "Political interest only",
            "Interest in overturning an election",
            "Personal vengeance against an official"
        ],
        correctAnswer: 0, // A
        explanation: "The Supreme Court defines it as a legal action initiated to enforce 'public interest', where 'public interest' means an interest in which the public or a class of the community has pecuniary interest or some interest by which their legal rights or liabilities are affected.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "SC Definition", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 12,
        question: "Which of the following matters is explicitly EXCLUDED from being filed as a PIL according to the Supreme Court guidelines?",
        options: [
            "Petitions against police for refusing to register FIRs",
            "Petitions complaining of harassment on women",
            "Petitions relating to Environmental pollution",
            "Petitions regarding Landlord-Tenant matters"
        ],
        correctAnswer: 3, // D
        explanation: "Landlord-Tenant matters are strictly private disputes and are explicitly listed in the SC guidelines as subjects that will NOT be entertained as PILs.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Exclusion List", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 13,
        question: "A PIL can be filed against the Central Government, State Governments, and Municipal Authorities, but it generally cannot be filed against:",
        options: [
            "The Railways",
            "The Police Department",
            "A private party alone (unless a state authority is also involved)",
            "A Government Hospital"
        ],
        correctAnswer: 2, // C
        explanation: "A PIL is filed against the 'State' (Article 12) or public authorities to enforce fundamental or statutory rights. A PIL cannot strictly be filed against a purely private party alone, though they can be made a co-respondent if the state authority failed to regulate them.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Respondent", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 14,
        question: "In the context of protecting the poor who cannot afford lawyers, PIL is described as a strategic arm of what major social movement in India?",
        options: [
            "The Land Reform Movement",
            "The Legal Aid Movement",
            "The Cooperative Movement",
            "The Panchayat Raj Movement"
        ],
        correctAnswer: 1, // B
        explanation: "PIL is considered a strategic arm of the legal aid movement. It brings justice within the reach of poor masses who are socially and economically disadvantaged.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Movement Connection", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 15,
        question: "The 'Epistolary Jurisdiction' associated with PIL refers to the Supreme Court's power to:",
        options: [
            "Issue writs directly to Parliament.",
            "Treat letters and telegrams addressed to the court as formal writ petitions.",
            "Review the judgments of the Election Commission.",
            "Summon the President for testimony."
        ],
        correctAnswer: 1, // B
        explanation: "Epistolary jurisdiction refers to the practice of the court treating mere letters, telegrams, or postcards sent by citizens directly to the judges as formal writ petitions, avoiding strict legal formatting.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Epistolary", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 16,
        question: "Which specific phrase did Justice P.N. Bhagwati explicitly use to describe litigation that is 'frivolous or motivated by personal gain or political malice', warning against its misuse?",
        options: [
            "Class Action Suit",
            "Social Action Litigation",
            "Private Interest Litigation",
            "Constitutional Litigation"
        ],
        correctAnswer: 2, // C
        explanation: "Justice Bhagwati warned that the court must not allow its process to be abused by politicians or others who file 'Private Interest Litigation' disguised as Public Interest Litigation for personal gain or malice.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Misuse terminology", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 17,
        question: "One of the Supreme Court's guidelines clearly states that petitions regarding admission to medical and other educational institutions will ______________.",
        options: [
            "be automatically admitted as PILs.",
            "NOT be entertained as PILs.",
            "be transferred to the Education Ministry.",
            "be decided by the President."
        ],
        correctAnswer: 1, // B
        explanation: "The guidelines explicitly list 'Admission to medical and other educational institutions' as a category that will NOT be entertained as PIL.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Exclusion Detail", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 18,
        question: "A petition filed against the non-payment of minimum wages to workers is an acceptable ground for a PIL. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 0, // A
        explanation: "Yes, 'Non-payment of minimum wages to workers' and exploitation of casual workers fall squarely under the category of matters that CAN be entertained as a PIL.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Inclusion List", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 19,
        question: "Who is an 'Amicus Curiae' frequently appointed in complex Public Interest Litigations?",
        options: [
            "The person who committed the crime.",
            "The respondent state government's chief lawyer.",
            "A 'Friend of the Court' (usually an unbiased lawyer or expert) appointed to assist the court.",
            "The main petitioner in the PIL."
        ],
        correctAnswer: 2, // C
        explanation: "An Amicus Curiae (Friend of the Court) is an independent lawyer or expert appointed by the Court to assist it impartially in investigating facts and formulating guidelines in complex PILs.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Amicus Curiae", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 20,
        question: "Why does the Supreme Court insist on verifying the credentials of the petitioner before admitting a PIL?",
        options: [
            "To ascertain if they can pay high court fees.",
            "To ensure the petitioner relies on the 'locus standi' rule.",
            "To ensure only certified lawyers file cases.",
            "To prevent the judicial process from being abused by individuals acting for personal gain, private profit, political motive, or oblique consideration."
        ],
        correctAnswer: 3, // D
        explanation: "The SC guidelines dictate that courts must be fully satisfied that the petition has been filed to vindicate public interest and not to pursue a private feud or political motive. Verifying the credentials of the petitioner is step one.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Verification", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 21,
        question: "Under which Article(s) can a citizen directly move the Supreme Court and High Court respectively through a Public Interest Litigation?",
        options: [
            "Articles 14 and 19",
            "Articles 32 and 226",
            "Articles 131 and 132",
            "Articles 72 and 161"
        ],
        correctAnswer: 1, // B
        explanation: "A PIL is essentially a writ petition. It can be filed in the Supreme Court under Article 32 and in the High Courts under Article 226.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Articles", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 22,
        question: "In the context of PIL, the Supreme Court has clarified that 'Public Interest' litigation should not become 'Publicity Interest' litigation. What does this mean?",
        options: [
            "Media should not report on court proceedings.",
            "Courts should not publish their judgments.",
            "People should not file frivolous PILs simply to get their names in the newspapers.",
            "The government should not advertise its policies."
        ],
        correctAnswer: 2, // C
        explanation: "The court repeatedly warns against 'Publicity Interest Litigation', where lawyers or politicians file cases with no real legal substance purely to generate news headlines for themselves.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Misuse Warning", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 23,
        question: "Which of the following matters concerning the police is EXPLICITLY listed as something that WILL NOT be entertained as a PIL?",
        options: [
            "Police torture or death in police custody",
            "Issues relating to bonded labour",
            "Petitions against police refusing to register a case (FIR)",
            "Issues relating to neglected children"
        ],
        correctAnswer: 2, // C
        explanation: "According to the SC guidelines, if police refuse to register a case, the petitioner should use the CrPC route (approaching a Magistrate). Petitions against police refusing to register a case will NOT be entertained as PIL.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Exclusion Specific", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 24,
        question: "The concept of PIL asserts that the courtroom is not just for formal dispute resolution between two parties, but is also a forum for:",
        options: [
            "Passing new economic legislation.",
            "Conducting criminal trials without evidence.",
            "Socio-economic reform and vindication of public rights.",
            "Overriding the Prime Minister's veto."
        ],
        correctAnswer: 2, // C
        explanation: "PIL transforms the court into an active participant. It is not just about resolving a contract dispute; it is used as a tool for socio-economic reform and protecting the fundamental rights of the vulnerable masses.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Purpose", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 25,
        question: "If an ordinary citizen reads a newspaper article about a severe environmental disaster affecting thousands and sends a telegram containing this clipping to a Supreme Court judge, can the court treat this as a PIL?",
        options: [
            "No, an affidavit must be sworn.",
            "No, only a formal writ petition on stamp paper is valid.",
            "Yes, under its Epistolary Jurisdiction, it can treat the letter/telegram as a writ petition.",
            "Yes, but only if the person sending it is the Chief Minister."
        ],
        correctAnswer: 2, // C
        explanation: "Yes, this is the very definition of Epistolary Jurisdiction. The Court relaxes formal procedural rules and can treat a letter, telegram, or newspaper clipping as a valid writ petition if it highlights a gross violation of fundamental rights.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Practical Epistolary", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 26,
        question: "According to the Supreme Court guidelines on the abuse of PIL (Balwant Singh Chaufal case), what action should the Court take if it finds a PIL is completely frivolous and filed with an 'oblique motive'?",
        options: [
            "Transfer it to a High Court.",
            "Dismiss it outright and impose exemplary costs (fines) on the petitioner.",
            "Suspend the petitioner's citizenship.",
            "Ask the Parliament to debate the issue."
        ],
        correctAnswer: 1, // B
        explanation: "To deter the filing of frivolous PILs that waste judicial time, the Supreme Court has ruled that courts should dismiss such petitions at the threshold and impose exemplary costs (heavy fines) on the petitioner.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Deterrence", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 27,
        question: "Cases relating to minimum wages of casual workers are explicitly part of the allowed category for Public Interest Litigation. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 0, // A
        explanation: "Yes, petitions for 'Non-payment of minimum wages to workers and exploitation of casual workers' are explicitly listed as an acceptable subject matter for PIL.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Allowed Category", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 28,
        question: "Which of these matters will NOT be entertained as a PIL?",
        options: [
            "Petitions from jails regarding unhygienic conditions",
            "Petitions regarding non-payment of pension and gratuity to a retired government servant",
            "Petitions involving environmental pollution",
            "Petitions concerning atrocities on women"
        ],
        correctAnswer: 1, // B
        explanation: "Service matters concerning individual government servants (like pension, gratuity, transfer) are strictly excluded from the PIL category. The retired servant must approach the Administrative Tribunal or High Court directly.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Exclusion Applied", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 29,
        question: "Unlike traditional litigation which is described as 'adversarial', PIL proceedings in India are often described by scholars as:",
        options: [
            "Retributive",
            "Punitive",
            "Non-adversarial or collaborative",
            "Inquisitorial"
        ],
        correctAnswer: 2, // C
        explanation: "PIL is broadly non-adversarial or collaborative. The petitioner and the state are not supposed to fight strictly to 'win' against each other; they are theoretically supposed to collaborate with the Court to solve a systemic social problem like ending bonded labor.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Nature of Proceedings", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    },
    {
        id: 30,
        question: "The Supreme Court has the power to take a case 'Suo Motu'. In the context of PIL, what does this mean?",
        options: [
            "Taking action on a petition filed by the Prime Minister.",
            "Relying exclusively on judgments of foreign courts.",
            "Taking cognizance of a matter on its own initiative (e.g., after reading a newspaper report), without any citizen or lawyer filing a formal petition.",
            "Deciding a case without hearing the opposition."
        ],
        correctAnswer: 2, // C
        explanation: "Suo Motu means 'on its own motion'. The Court doesn't even need a letter. If judges read about a horrific tragedy in the morning newspaper, they can instantly open a PIL file themselves and direct the government to respond.",
        level: "Easy", topic: "Public Interest Litigation", difficulty_tier: "Level_1", cognitive_tag: "Suo Motu", source_mapping: { book: "M. Laxmikanth", chapter: "Public Interest Litigation" }
    }
];
