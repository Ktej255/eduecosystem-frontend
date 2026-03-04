import type { MCQ } from './mcq-utils';

export const DAY11_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 11)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In which constitutional case was the question of whether Fundamental Rights can be amended by the Parliament under Article 368 first raised?",
        options: [
            "Golaknath case (1967)",
            "Kesavananda Bharati case (1973)",
            "Shankari Prasad case (1951)",
            "Minerva Mills case (1980)"
        ],
        correctAnswer: 2, // C
        explanation: "The question whether Fundamental Rights can be amended by the Parliament under Article 368 came for consideration of the Supreme Court within a year of the Constitution coming into force, in the Shankari Prasad case (1951).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 2,
        question: "In the Shankari Prasad case (1951), the Supreme Court ruled that the power of Parliament to amend the Constitution under Article 368 includes the power to amend ________.",
        options: [
            "Only the Directive Principles of State Policy.",
            "Fundamental Rights as well.",
            "Only the Preamble.",
            "Only the Schedules, but not Fundamental Rights."
        ],
        correctAnswer: 1, // B
        explanation: "In the Shankari Prasad case, the Supreme Court ruled that the power of the Parliament to amend the Constitution under Article 368 also includes the power to amend Fundamental Rights.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 3,
        question: "According to the Supreme Court in the Shankari Prasad case (1951), the word 'law' in Article 13 includes only ordinary laws and does NOT include:",
        options: [
            "Executive orders.",
            "Ordinances promulgated by the President.",
            "Constitutional amendment acts (constituent laws).",
            "State laws."
        ],
        correctAnswer: 2, // C
        explanation: "The Court held that the word 'law' in Article 13 includes only ordinary laws and not the constitutional amendment acts (constituent laws). Therefore, the Parliament can abridge or take away any of the Fundamental Rights by enacting a constitutional amendment act.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 4,
        question: "In which landmark case did the Supreme Court explicitly reverse its earlier stand and rule that Fundamental Rights are given a 'transcendental and immutable' position and hence, the Parliament cannot abridge or take away any of them?",
        options: [
            "Shankari Prasad case (1951)",
            "Sajjan Singh case (1965)",
            "Golaknath case (1967)",
            "Kesavananda Bharati case (1973)"
        ],
        correctAnswer: 2, // C
        explanation: "In the Golaknath case (1967), the Supreme Court reversed its earlier stance, ruling that Fundamental Rights are given a 'transcendental and immutable' position and the Parliament cannot take away or abridge any of them.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 5,
        question: "Which Constitutional Amendment Act was enacted by the Parliament in reaction to the Supreme Court's judgment in the Golaknath case (1967)?",
        options: [
            "24th Amendment Act (1971)",
            "25th Amendment Act (1971)",
            "42nd Amendment Act (1976)",
            "44th Amendment Act (1978)"
        ],
        correctAnswer: 0, // A
        explanation: "Parliament reacted to the SC's Golaknath judgment by enacting the 24th Amendment Act (1971), which declared that Parliament has the power to abridge or take away any Fundamental Right under Article 368.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 6,
        question: "The doctrine of 'Basic Structure' of the Constitution was first propounded by the Supreme Court in the:",
        options: [
            "Golaknath case (1967)",
            "Minerva Mills case (1980)",
            "Kesavananda Bharati case (1973)",
            "Waman Rao case (1981)"
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court formulated the doctrine of 'basic structure' (or 'basic features') of the constitution in the landmark Kesavananda Bharati case (1973).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 7,
        question: "What was the ruling of the Supreme Court in the Kesavananda Bharati case (1973) regarding the Parliament's constituent power under Article 368?",
        options: [
            "Parliament cannot amend Fundamental Rights under any circumstances.",
            "Parliament has unlimited power to amend any part of the Constitution.",
            "Parliament can amend any part, including Fundamental Rights, provided the amendment does not alter the 'basic structure' of the Constitution.",
            "The amending power of Parliament is subject to approval by a national referendum."
        ],
        correctAnswer: 2, // C
        explanation: "The SC ruled that the constituent power of Parliament under Article 368 does not enable it to alter the 'basic structure' of the Constitution. This means Parliament cannot abridge or take away a Fundamental Right that forms a part of the basic structure.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 8,
        question: "Which Constitutional Amendment Act declared that there is 'no limitation whatever' on the constituent power of Parliament and that no amendment can be questioned in any court?",
        options: [
            "24th Amendment Act (1971)",
            "39th Amendment Act (1975)",
            "42nd Amendment Act (1976)",
            "44th Amendment Act (1978)"
        ],
        correctAnswer: 2, // C
        explanation: "Parliament reacted to the Kesavananda Bharati doctrine by enacting the 42nd Amendment Act (1976), which amended Article 368 to state there is no limitation on its amending power and ousted judicial review.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 9,
        question: "In which case did the Supreme Court invalidate the provision of the 42nd Amendment Act (1976) that excluded judicial review of constitutional amendments?",
        options: [
            "Waman Rao case (1981)",
            "Minerva Mills case (1980)",
            "Indira Nehru Gandhi case (1975)",
            "Kihoto Hollohan case (1993)"
        ],
        correctAnswer: 1, // B
        explanation: "In the Minerva Mills case (1980), the Supreme Court invalidated this provision of the 42nd Amendment Act, asserting that 'judicial review' itself is an essential feature of the 'basic structure' of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 10,
        question: "In the Minerva Mills case (1980), why did the Supreme Court rule that Parliament cannot grant itself 'unlimited' amending power?",
        options: [
            "Because only the President can have unlimited powers.",
            "Because a 'limited amending power' is itself a basic feature of the Constitution, and Parliament cannot use this limited power to enlarge it into an absolute power.",
            "Because state legislatures also need a share in unlimited power.",
            "Because the United Nations Charter forbids unlimited constitutional power."
        ],
        correctAnswer: 1, // B
        explanation: "Chief Justice Chandrachud observed that the Constitution has conferred a 'limited' amending power on the Parliament. Therefore, under the exercise of that limited power, it cannot enlarge that very power into an absolute power. A limited amending power is a basic feature of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 11,
        question: "In the Waman Rao case (1981), the Supreme Court clarified the retrospective application of the Basic Structure doctrine. It held that the doctrine would apply to constitutional amendments enacted after which specific date?",
        options: [
            "January 26, 1950",
            "February 27, 1967",
            "April 24, 1973",
            "December 18, 1976"
        ],
        correctAnswer: 2, // C
        explanation: "In the Waman Rao case (1981), the Supreme Court clarified that the doctrine of basic structure would apply to constitutional amendments enacted after April 24, 1973 (i.e., the date of the Kesavananda Bharati judgment).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 12,
        question: "Which of the following is NOT generally considered a part of the 'Basic Structure' of the Indian Constitution, according to various Supreme Court judgments?",
        options: [
            "Supremacy of the Constitution",
            "Secular character of the Constitution",
            "Separation of powers between the legislature, the executive and the judiciary",
            "Supremacy of the Parliament over the Constitution"
        ],
        correctAnswer: 3, // D
        explanation: "The 'Supremacy of the Constitution' (not Parliamentary supremacy) is a key feature of the basic structure. The Indian Parliament is not fully supreme or sovereign like the British Parliament; it is bound by the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 13,
        question: "Is there an exhaustive, precisely defined list of 'Basic Structure' features officially written in the Constitution of India?",
        options: [
            "Yes, it is listed in the Ninth Schedule.",
            "Yes, it was added to Article 368 by the 44th Amendment.",
            "No, the Constitution does not define 'basic structure'; it has emerged from various Supreme Court judgments.",
            "Yes, it is defined in the Preamble."
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court is yet to define or clarify what exactly constitutes the 'basic structure' of the Constitution in a single exhaustive list. From various judgments, different features have emerged as elements of the basic structure.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 14,
        question: "Which of the following values was recognized as a part of the basic structure of the Constitution in the S.R. Bommai case (1994)?",
        options: [
            "The Right to Property as a Fundamental Right.",
            "The monarchical form of government.",
            "Secularism and Federalism.",
            "The supremacy of Directive Principles over all Fundamental Rights."
        ],
        correctAnswer: 2, // C
        explanation: "In the S.R. Bommai case (1994), both 'Secularism' and 'Federalism' were forcefully reiterated and applied as essential features of the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 15,
        question: "In the Indira Nehru Gandhi v. Raj Narain case (1975), the Supreme Court struck down a provision of the 39th Amendment Act (1975). What did this annulled provision essentially attempt to do?",
        options: [
            "It attempted to abolish the office of the President.",
            "It attempted to keep the election disputes involving the Prime Minister and the Speaker of Lok Sabha outside the jurisdiction of all courts.",
            "It attempted to make the Supreme Court directly subordinate to the Prime Minister.",
            "It attempted to delete all Fundamental Rights during an Emergency."
        ],
        correctAnswer: 1, // B
        explanation: "The Supreme Court applied the 'basic structure' theory and struck down a provision of the 39th Amendment Act (1975) which kept the election disputes involving the Prime Minister and the Speaker of Lok Sabha outside the jurisdiction of all courts.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 16,
        question: "Which of the following is considered an element of the Basic Structure of the Constitution?",
        options: [
            "The principle of free and fair elections.",
            "The right to acquire and hold immense private property without state restriction.",
            "The absolute secrecy of government spending.",
            "The reservation of seats for specific castes in the Supreme Court."
        ],
        correctAnswer: 0, // A
        explanation: "From the various judgments, 'Free and fair elections' is clearly identified as one of the elements of the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 17,
        question: "In the context of the Basic Structure doctrine, what does the 'Harmony and balance between Fundamental Rights and Directive Principles' signify?",
        options: [
            "It signifies that Directive Principles are legally enforceable.",
            "It signifies that Fundamental Rights are always subordinate to Directive Principles.",
            "It is recognized as an essential basic feature of the Constitution, established firmly in the Minerva Mills case (1980).",
            "It means the Parliament can freely amend Fundamental Rights to implement Directive Principles without judicial review."
        ],
        correctAnswer: 2, // C
        explanation: "The balance between Fundamental Rights and Directive Principles is a key component of the basic structure, specifically emphasized in the Minerva Mills case (1980), preventing Parliament from granting absolute primacy to one over the other.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 18,
        question: "Which feature of the judiciary is considered an integral part of the 'basic structure' of the Constitution?",
        options: [
            "The ability of the government to transfer judges at will.",
            "Independence of the Judiciary.",
            "Subordination of High Courts to the State Legislature.",
            "The election of judges by popular vote."
        ],
        correctAnswer: 1, // B
        explanation: "The 'Independence of Judiciary' is a universally recognized element of the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 19,
        question: "The 'Rule of Law' is identified as an element of the basic structure. Which landmark judgment emphatically reinforced this?",
        options: [
            "Shankari Prasad Case (1951)",
            "A.K. Gopalan Case (1950)",
            "Indira Nehru Gandhi Case (1975)",
            "Both C and several other basic structure cases."
        ],
        correctAnswer: 3, // D
        explanation: "The 'Rule of law' is a core pillar of the basic structure, highlighted strongly in the Indira Nehru Gandhi case (1975) among others.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 20,
        question: "Article 32 involves the power of the Supreme Court to issue writs. In the context of the Basic Structure doctrine, what is the status of Article 32?",
        options: [
            "It can be amended by a simple parliamentary majority.",
            "It is a basic feature of the constitution and cannot be abrogated or taken away.",
            "It can be suspended permanently during peacetime via an amendment.",
            "It was explicitly excluded from the basic structure in the Kesavananda case."
        ],
        correctAnswer: 1, // B
        explanation: "The powers of the Supreme Court under Article 32 (along with Articles 136, 141, and 142) form a part of the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 21,
        question: "Which of the following best describes the principle of 'Welfare State' within the framework of the Indian Constitution?",
        options: [
            "It is a purely political slogan with no constitutional backing.",
            "It is an element of the Basic Structure of the Constitution.",
            "It was abandoned after the economic reforms of 1991.",
            "It applies only to the State governments, not the Union government."
        ],
        correctAnswer: 1, // B
        explanation: "The principle of a 'Welfare state (socio-economic justice)' has been identified by the Supreme Court as one of the essential features comprising the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 22,
        question: "In the I.R. Coelho Case (2007), often referred to as the 'Ninth Schedule Case', the Supreme Court established that laws placed in the Ninth Schedule are:",
        options: [
            "Absolutely immune from judicial review forever.",
            "Subject to judicial review if they are added after April 24, 1973, and violate the basic structure of the Constitution.",
            "Subject to judicial review only if they relate to land reforms.",
            "Immune from judicial review only if ratified by all states."
        ],
        correctAnswer: 1, // B
        explanation: "In the I.R. Coelho case (2007), the Supreme Court ruled that there is no blanket immunity from judicial review for laws included in the Ninth Schedule. Laws added after April 24, 1973, are open to challenge if they violate the basic structure.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 23,
        question: "The power of Judicial Review under Article 226 rests with:",
        options: [
            "The Supreme Court of India.",
            "The High Courts.",
            "Both the Supreme Court and High Courts jointly.",
            "The President of India."
        ],
        correctAnswer: 1, // B
        explanation: "Article 226 deals with the power of Judicial Review of the High Courts, whereas Article 32 deals with the Supreme Court. Both are considered part of the Basic Structure (e.g., L. Chandra Kumar case).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 24,
        question: "Which constitutional amendment did Parliament enact to overcome the ruling in the Golaknath Case (1967)?",
        options: [
            "The 1st Amendment Act.",
            "The 24th Amendment Act.",
            "The 42nd Amendment Act.",
            "The 44th Amendment Act."
        ],
        correctAnswer: 1, // B
        explanation: "The Parliament reacted to the Supreme Court's judgment in the Golaknath case (1967) by enacting the 24th Amendment Act (1971).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 25,
        question: "How did the 24th Amendment Act (1971) change the relationship between Article 13 and Article 368?",
        options: [
            "It made Article 13 superior to Article 368.",
            "It declared that 'law' in Article 13 includes constitutional amendments under Article 368.",
            "It explicitly stated that nothing in Article 13 shall apply to any amendment made under Article 368.",
            "It merged Article 13 and Article 368."
        ],
        correctAnswer: 2, // C
        explanation: "The 24th Amendment Act amended Articles 13 and 368, explicitly declaring that Parliament has the power to abridge any Fundamental Right under Article 368, and such an act will NOT be considered a 'law' under the meaning of Article 13.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 26,
        question: "The 'Principle of Equality' is considered a feature of the basic structure. Which specific article of the Constitution is most closely associated with this broad principle?",
        options: [
            "Article 14",
            "Article 21",
            "Article 32",
            "Article 368"
        ],
        correctAnswer: 0, // A
        explanation: "The Principle of Equality, fundamentally enshrined in Article 14, is a recognized element of the basic structure of the Constitution.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 27,
        question: "In the context of the Basic Structure doctrine, what does the 'Parliamentary System' refer to?",
        options: [
            "A system where the President is the real executive head.",
            "A system characterized by the supremacy of the Parliament over the Constitution.",
            "The specific democratic framework established by the Constitution where the executive is responsible to the legislature, recognized as a basic feature.",
            "A system where only Parliament can appoint judges."
        ],
        correctAnswer: 2, // C
        explanation: "The 'Parliamentary System' of government is an explicitly recognized element of the basic structure of the Indian Constitution, ensuring democratic accountability.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 28,
        question: "Did the Supreme Court in the Kesavananda Bharati case (1973) uphold or invalidate the 24th Amendment Act (1971)?",
        options: [
            "It completely invalidated the 24th Amendment Act.",
            "It upheld the validity of the 24th Amendment Act while inventing the Basic Structure doctrine.",
            "It partially invalidated it, stating it only applied to Directive Principles.",
            "It referred the 24th Amendment Act to a national referendum."
        ],
        correctAnswer: 1, // B
        explanation: "In the Kesavananda Bharati case (1973), the Supreme Court upheld the validity of the 24th Amendment Act (confirming Parliament's power to amend any part, including FRs) and simultaneously laid down the new doctrine of the 'basic structure'.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 29,
        question: "According to the L. Chandra Kumar Case (1997), the power of judicial review of the High Courts under Article 226 and the Supreme Court under Article 32 is a basic feature. Consequently, what cannot be done away with entirely?",
        options: [
            "The jurisdiction of administrative tribunals.",
            "The jurisdiction of civil courts.",
            "The power of judicial review of these constitutional courts.",
            "The power of Parliament to amend the Constitution."
        ],
        correctAnswer: 2, // C
        explanation: "In the L. Chandra Kumar case (1997), the Supreme Court reiterated that the power of judicial review under Articles 226 and 32 is a part of the basic structure and thus cannot be ousted or excluded even by a constitutional amendment.",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    },
    {
        id: 30,
        question: "Which of the following describes the evolution of the Parliament's amending power concerning Fundamental Rights from 1951 to 1980?",
        options: [
            "It began as absolute, became restricted in 1967, was restored in 1971, and was finally subjected to the limits of the Basic Structure doctrine.",
            "Fundamental Rights have always been immune from amendments since 1950.",
            "Parliament always possessed unlimited constituent power without any judicial interference.",
            "The power shifted from Parliament to the State Legislatures entirely."
        ],
        correctAnswer: 0, // A
        explanation: "The evolution is: Shankari Prasad (1951) - Parliament can amend FRs (absolute). Golaknath (1967) - Parliament cannot amend FRs (restricted). 24th Amendment (1971) - Power restored (absolute). Kesavananda (1973) / Minerva Mills (1980) - Parliament can amend FRs, but cannot alter the Basic Structure (limited).",
        level: "Easy", topic: "Basic Structure of the Constitution", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Basic Structure of the Constitution" }
    }
];
