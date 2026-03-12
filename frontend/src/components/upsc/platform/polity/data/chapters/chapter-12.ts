import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch12-l1-q1",
        "question": "In which constitutional case was the question of whether Fundamental Rights can be amended by the Parliament under Article 368 first raised?",
        "options": ["Golaknath case (1967)","Kesavananda Bharati case (1973)","Shankari Prasad case (1951)","Minerva Mills case (1980)"],
        "correctAnswerIndex": 2,
        "explanation": "The question whether Fundamental Rights can be amended by the Parliament under Article 368 came for consideration of the Supreme Court within a year of the Constitution coming into force, in the Shankari Prasad case (1951)."
    },
    {
        "id": "ch12-l1-q2",
        "question": "In the Shankari Prasad case (1951), the Supreme Court ruled that the power of Parliament to amend the Constitution under Article 368 includes the power to amend ________.",
        "options": ["Only the Directive Principles of State Policy.","Fundamental Rights as well.","Only the Preamble.","Only the Schedules, but not Fundamental Rights."],
        "correctAnswerIndex": 1,
        "explanation": "In the Shankari Prasad case, the Supreme Court ruled that the power of the Parliament to amend the Constitution under Article 368 also includes the power to amend Fundamental Rights."
    },
    {
        "id": "ch12-l1-q3",
        "question": "According to the Supreme Court in the Shankari Prasad case (1951), the word",
        "options": ["Executive orders.","Ordinances promulgated by the President.","Constitutional amendment acts (constituent laws).","State laws."],
        "correctAnswerIndex": 2,
        "explanation": "The Court held that the word"
    },
    {
        "id": "ch12-l1-q4",
        "question": "In which landmark case did the Supreme Court explicitly reverse its earlier stand and rule that Fundamental Rights are given a",
        "options": ["Shankari Prasad case (1951)","Sajjan Singh case (1965)","Golaknath case (1967)","Kesavananda Bharati case (1973)"],
        "correctAnswerIndex": 2,
        "explanation": "In the Golaknath case (1967), the Supreme Court reversed its earlier stance, ruling that Fundamental Rights are given a"
    },
    {
        "id": "ch12-l1-q5",
        "question": "Which Constitutional Amendment Act was enacted by the Parliament in reaction to the Supreme Court",
        "options": ["24th Amendment Act (1971)","25th Amendment Act (1971)","42nd Amendment Act (1976)","44th Amendment Act (1978)"],
        "correctAnswerIndex": 0,
        "explanation": "Parliament reacted to the SC"
    },
    {
        "id": "ch12-l1-q6",
        "question": "The doctrine of",
        "options": ["Golaknath case (1967)","Minerva Mills case (1980)","Kesavananda Bharati case (1973)","Waman Rao case (1981)"],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court formulated the doctrine of"
    },
    {
        "id": "ch12-l1-q7",
        "question": "What was the ruling of the Supreme Court in the Kesavananda Bharati case (1973) regarding the Parliament",
        "options": ["Parliament cannot amend Fundamental Rights under any circumstances.","Parliament has unlimited power to amend any part of the Constitution.","Parliament can amend any part, including Fundamental Rights, provided the amendment does not alter the","of the Constitution.","The amending power of Parliament is subject to approval by a national referendum."],
        "correctAnswerIndex": 2,
        "explanation": "The SC ruled that the constituent power of Parliament under Article 368 does not enable it to alter the"
    },
    {
        "id": "ch12-l1-q8",
        "question": "Which Constitutional Amendment Act declared that there is",
        "options": ["24th Amendment Act (1971)","39th Amendment Act (1975)","42nd Amendment Act (1976)","44th Amendment Act (1978)"],
        "correctAnswerIndex": 2,
        "explanation": "Parliament reacted to the Kesavananda Bharati doctrine by enacting the 42nd Amendment Act (1976), which amended Article 368 to state there is no limitation on its amending power and ousted judicial review."
    },
    {
        "id": "ch12-l1-q9",
        "question": "In which case did the Supreme Court invalidate the provision of the 42nd Amendment Act (1976) that excluded judicial review of constitutional amendments?",
        "options": ["Waman Rao case (1981)","Minerva Mills case (1980)","Indira Nehru Gandhi case (1975)","Kihoto Hollohan case (1993)"],
        "correctAnswerIndex": 1,
        "explanation": "In the Minerva Mills case (1980), the Supreme Court invalidated this provision of the 42nd Amendment Act, asserting that"
    },
    {
        "id": "ch12-l1-q10",
        "question": "In the Minerva Mills case (1980), why did the Supreme Court rule that Parliament cannot grant itself",
        "options": ["Because only the President can have unlimited powers.","Because a","is itself a basic feature of the Constitution, and Parliament cannot use this limited power to enlarge it into an absolute power.","Because state legislatures also need a share in unlimited power.","Because the United Nations Charter forbids unlimited constitutional power."],
        "correctAnswerIndex": 1,
        "explanation": "Chief Justice Chandrachud observed that the Constitution has conferred a"
    },
    {
        "id": "ch12-l1-q11",
        "question": "In the Waman Rao case (1981), the Supreme Court clarified the retrospective application of the Basic Structure doctrine. It held that the doctrine would apply to constitutional amendments enacted after which specific date?",
        "options": ["January 26, 1950","February 27, 1967","April 24, 1973","December 18, 1976"],
        "correctAnswerIndex": 2,
        "explanation": "In the Waman Rao case (1981), the Supreme Court clarified that the doctrine of basic structure would apply to constitutional amendments enacted after April 24, 1973 (i.e., the date of the Kesavananda Bharati judgment)."
    },
    {
        "id": "ch12-l1-q12",
        "question": "Which of the following is NOT generally considered a part of the",
        "options": ["Supremacy of the Constitution","Secular character of the Constitution","Separation of powers between the legislature, the executive and the judiciary","Supremacy of the Parliament over the Constitution"],
        "correctAnswerIndex": 3,
        "explanation": "The"
    },
    {
        "id": "ch12-l1-q13",
        "question": "Is there an exhaustive, precisely defined list of",
        "options": ["Yes, it is listed in the Ninth Schedule.","Yes, it was added to Article 368 by the 44th Amendment.","No, the Constitution does not define","; it has emerged from various Supreme Court judgments.","Yes, it is defined in the Preamble."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court is yet to define or clarify what exactly constitutes the"
    },
    {
        "id": "ch12-l1-q14",
        "question": "Which of the following values was recognized as a part of the basic structure of the Constitution in the S.R. Bommai case (1994)?",
        "options": ["The Right to Property as a Fundamental Right.","The monarchical form of government.","Secularism and Federalism.","The supremacy of Directive Principles over all Fundamental Rights."],
        "correctAnswerIndex": 2,
        "explanation": "In the S.R. Bommai case (1994), both"
    },
    {
        "id": "ch12-l1-q15",
        "question": "In the Indira Nehru Gandhi v. Raj Narain case (1975), the Supreme Court struck down a provision of the 39th Amendment Act (1975). What did this annulled provision essentially attempt to do?",
        "options": ["It attempted to abolish the office of the President.","It attempted to keep the election disputes involving the Prime Minister and the Speaker of Lok Sabha outside the jurisdiction of all courts.","It attempted to make the Supreme Court directly subordinate to the Prime Minister.","It attempted to delete all Fundamental Rights during an Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court applied the"
    },
    {
        "id": "ch12-l1-q16",
        "question": "Which of the following is considered an element of the Basic Structure of the Constitution?",
        "options": ["The principle of free and fair elections.","The right to acquire and hold immense private property without state restriction.","The absolute secrecy of government spending.","The reservation of seats for specific castes in the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "From the various judgments,"
    },
    {
        "id": "ch12-l1-q17",
        "question": "In the context of the Basic Structure doctrine, what does the",
        "options": ["It signifies that Directive Principles are legally enforceable.","It signifies that Fundamental Rights are always subordinate to Directive Principles.","It is recognized as an essential basic feature of the Constitution, established firmly in the Minerva Mills case (1980).","It means the Parliament can freely amend Fundamental Rights to implement Directive Principles without judicial review."],
        "correctAnswerIndex": 2,
        "explanation": "The balance between Fundamental Rights and Directive Principles is a key component of the basic structure, specifically emphasized in the Minerva Mills case (1980), preventing Parliament from granting absolute primacy to one over the other."
    },
    {
        "id": "ch12-l1-q18",
        "question": "Which feature of the judiciary is considered an integral part of the",
        "options": ["The ability of the government to transfer judges at will.","Independence of the Judiciary.","Subordination of High Courts to the State Legislature.","The election of judges by popular vote."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch12-l1-q19",
        "question": "The",
        "options": ["Shankari Prasad Case (1951)","A.K. Gopalan Case (1950)","Indira Nehru Gandhi Case (1975)","Both C and several other basic structure cases."],
        "correctAnswerIndex": 3,
        "explanation": "The"
    },
    {
        "id": "ch12-l1-q20",
        "question": "Article 32 involves the power of the Supreme Court to issue writs. In the context of the Basic Structure doctrine, what is the status of Article 32?",
        "options": ["It can be amended by a simple parliamentary majority.","It is a basic feature of the constitution and cannot be abrogated or taken away.","It can be suspended permanently during peacetime via an amendment.","It was explicitly excluded from the basic structure in the Kesavananda case."],
        "correctAnswerIndex": 1,
        "explanation": "The powers of the Supreme Court under Article 32 (along with Articles 136, 141, and 142) form a part of the basic structure of the Constitution."
    },
    {
        "id": "ch12-l1-q21",
        "question": "Which of the following best describes the principle of",
        "options": ["It is a purely political slogan with no constitutional backing.","It is an element of the Basic Structure of the Constitution.","It was abandoned after the economic reforms of 1991.","It applies only to the State governments, not the Union government."],
        "correctAnswerIndex": 1,
        "explanation": "The principle of a"
    },
    {
        "id": "ch12-l1-q22",
        "question": "In the I.R. Coelho Case (2007), often referred to as the",
        "options": ["Absolutely immune from judicial review forever.","Subject to judicial review if they are added after April 24, 1973, and violate the basic structure of the Constitution.","Subject to judicial review only if they relate to land reforms.","Immune from judicial review only if ratified by all states."],
        "correctAnswerIndex": 1,
        "explanation": "In the I.R. Coelho case (2007), the Supreme Court ruled that there is no blanket immunity from judicial review for laws included in the Ninth Schedule. Laws added after April 24, 1973, are open to challenge if they violate the basic structure."
    },
    {
        "id": "ch12-l1-q23",
        "question": "The power of Judicial Review under Article 226 rests with:",
        "options": ["The Supreme Court of India.","The High Courts.","Both the Supreme Court and High Courts jointly.","The President of India."],
        "correctAnswerIndex": 1,
        "explanation": "Article 226 deals with the power of Judicial Review of the High Courts, whereas Article 32 deals with the Supreme Court. Both are considered part of the Basic Structure (e.g., L. Chandra Kumar case)."
    },
    {
        "id": "ch12-l1-q24",
        "question": "Which constitutional amendment did Parliament enact to overcome the ruling in the Golaknath Case (1967)?",
        "options": ["The 1st Amendment Act.","The 24th Amendment Act.","The 42nd Amendment Act.","The 44th Amendment Act."],
        "correctAnswerIndex": 1,
        "explanation": "The Parliament reacted to the Supreme Court"
    },
    {
        "id": "ch12-l1-q25",
        "question": "How did the 24th Amendment Act (1971) change the relationship between Article 13 and Article 368?",
        "options": ["It made Article 13 superior to Article 368.","It declared that","in Article 13 includes constitutional amendments under Article 368.","It explicitly stated that nothing in Article 13 shall apply to any amendment made under Article 368.","It merged Article 13 and Article 368."],
        "correctAnswerIndex": 2,
        "explanation": "The 24th Amendment Act amended Articles 13 and 368, explicitly declaring that Parliament has the power to abridge any Fundamental Right under Article 368, and such an act will NOT be considered a"
    },
    {
        "id": "ch12-l1-q26",
        "question": "The",
        "options": ["Article 14","Article 21","Article 32","Article 368"],
        "correctAnswerIndex": 0,
        "explanation": "The Principle of Equality, fundamentally enshrined in Article 14, is a recognized element of the basic structure of the Constitution."
    },
    {
        "id": "ch12-l1-q27",
        "question": "In the context of the Basic Structure doctrine, what does the",
        "options": ["A system where the President is the real executive head.","A system characterized by the supremacy of the Parliament over the Constitution.","The specific democratic framework established by the Constitution where the executive is responsible to the legislature, recognized as a basic feature.","A system where only Parliament can appoint judges."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch12-l1-q28",
        "question": "Did the Supreme Court in the Kesavananda Bharati case (1973) uphold or invalidate the 24th Amendment Act (1971)?",
        "options": ["It completely invalidated the 24th Amendment Act.","It upheld the validity of the 24th Amendment Act while inventing the Basic Structure doctrine.","It partially invalidated it, stating it only applied to Directive Principles.","It referred the 24th Amendment Act to a national referendum."],
        "correctAnswerIndex": 1,
        "explanation": "In the Kesavananda Bharati case (1973), the Supreme Court upheld the validity of the 24th Amendment Act (confirming Parliament"
    },
    {
        "id": "ch12-l1-q29",
        "question": "According to the L. Chandra Kumar Case (1997), the power of judicial review of the High Courts under Article 226 and the Supreme Court under Article 32 is a basic feature. Consequently, what cannot be done away with entirely?",
        "options": ["The jurisdiction of administrative tribunals.","The jurisdiction of civil courts.","The power of judicial review of these constitutional courts.","The power of Parliament to amend the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "In the L. Chandra Kumar case (1997), the Supreme Court reiterated that the power of judicial review under Articles 226 and 32 is a part of the basic structure and thus cannot be ousted or excluded even by a constitutional amendment."
    },
    {
        "id": "ch12-l1-q30",
        "question": "Which of the following describes the evolution of the Parliament",
        "options": ["It began as absolute, became restricted in 1967, was restored in 1971, and was finally subjected to the limits of the Basic Structure doctrine.","Fundamental Rights have always been immune from amendments since 1950.","Parliament always possessed unlimited constituent power without any judicial interference.","The power shifted from Parliament to the State Legislatures entirely."],
        "correctAnswerIndex": 0,
        "explanation": "The evolution is: Shankari Prasad (1951) - Parliament can amend FRs (absolute). Golaknath (1967) - Parliament cannot amend FRs (restricted). 24th Amendment (1971) - Power restored (absolute). Kesavananda (1973) / Minerva Mills (1980) - Parliament can amend FRs, but cannot alter the Basic Structure (limited)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch12-l2-q1",
        "question": "Consider the constitutional paradox regarding the First Amendment Act (1951) and the Shankari Prasad judgment. What was the central argument raised by the petitioners challenging the First Amendment under Article 13(2)?",
        "options": ["That the Provisional Parliament lacked the authority to amend the Constitution.","That","in Article 13(2) includes both ordinary laws and constitutional amendments. Therefore, an amendment (like the 1st Amendment) that abridges a Fundamental Right is void to the extent of the contravention.","That the President","That the 1st Amendment violated the unwritten","of the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "In Shankari Prasad, the primary argument was that Article 13(2) declares that"
    },
    {
        "id": "ch12-l2-q2",
        "question": "Assertion (A): According to the Golaknath judgment (1967), the power to amend the Constitution is an ordinary legislative power rather than a distinct constituent power.\\nReason (R): The Supreme Court in Golaknath ruled that Article 368 only lays down the procedure to amend the Constitution, and doesn",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This was the crux of the fiercely debated Golaknath judgment. The SC (by a slim 6:5 majority) held that Art 368 merely provided the"
    },
    {
        "id": "ch12-l2-q3",
        "question": "How did the 24th Amendment Act (1971) specifically rewrite the text of the Constitution to permanently neutralize the judicial interpretation established in the Golaknath case?",
        "options": ["By declaring the Supreme Court unconstitutional.","By adding a clause to Article 13 stating it does not apply to amendments under Article 368, and adding a clause to Article 368 stating it does not apply to Article 13, explicitly separating","from","power.","By transferring the amending power entirely to the State Legislatures.","By mandating that all constitutional amendments must first be cleared by a national referendum."],
        "correctAnswerIndex": 1,
        "explanation": "The 24th Amendment brilliantly created a constitutional firewall. It added Art 13(4) ("
    },
    {
        "id": "ch12-l2-q4",
        "question": "In the monumental Kesavananda Bharati judgment (1973), while the",
        "options": ["Parliament permanently lost the right to amend Fundamental Rights.","It recognized Parliament","It affirmed that Parliament DOES have the power to abridge or take away any of the Fundamental Rights, provided such amendment does not destroy the basic structure.","It transferred the amending power from Parliament to the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Kesavananda Bharati is often misunderstood as purely restrictive. It was actually a compromise. It OVERRULED Golaknath, restoring Parliament"
    },
    {
        "id": "ch12-l2-q5",
        "question": "Examine the government",
        "options": ["To legally recognize and embed the Basic Structure doctrine into the text of the Constitution.","To completely outlaw","of constitutional amendments and declare Parliamentary sovereignty absolute and unlimited.","To require state ratification for every constitutional amendment.","To make Fundamental Duties legally enforceable."],
        "correctAnswerIndex": 1,
        "explanation": "The Indira Gandhi government violently disagreed with the Basic Structure concept. They used the 42nd Amendment (clauses 4 & 5 of Art 368) to explicitly outlaw judicial review ("
    },
    {
        "id": "ch12-l2-q6",
        "question": "In the Minerva Mills case (1980), the Supreme Court struck down the 42nd Amendment",
        "options": ["He based it on the unwritten conventions of the British Parliament.","He argued that since the Constitution gave Parliament a","amending power, Parliament cannot use that very limited power to grant itself an","absolute power; dong so destroys the basic structure.","He essentially declared that the Supreme Court is the actual sovereign ruler of India.","He based the ruling entirely on international human rights treaties."],
        "correctAnswerIndex": 1,
        "explanation": "This is a quintessential example of constitutional logic. Chandrachud argued: The Constitution created Parliament and gave it a *limited* amending power (limited by the basic structure). Parliament is a creature of the Constitution. A creature cannot use its limited power to alter the instrument that created it to become absolutely powerful."
    },
    {
        "id": "ch12-l2-q7",
        "question": "Consider the timeline established in the Waman Rao case (1981). A constitutional amendment was passed in 1974 placing an agricultural land reform act in the Ninth Schedule. Is this amendment open to judicial review based on the",
        "options": ["No, because the Ninth Schedule provides absolute immunity.","No, because the law concerns agricultural land, a state subject.","Yes, because it was enacted AFTER April 24, 1973 (Kesavananda Bharati judgment), making it vulnerable to judicial review if it violates the basic structure.","Yes, but only if the President explicitly orders the Supreme Court to review it."],
        "correctAnswerIndex": 2,
        "explanation": "Waman Rao drew a firm line in the sand: April 24, 1973. Any inclusion in the 9th Schedule *before* this date is safe. Any inclusion *after* this date is subject to basic structure scrutiny. Since the theoretical amendment was in 1974, it is open to challenge."
    },
    {
        "id": "ch12-l2-q8",
        "question": "Which of the following elements, declared as part of the Basic Structure by the Supreme Court, directly ensures the accountability of the Executive to the Legislature?",
        "options": ["The Federal character of the Constitution.","The Parliamentary system of Government.","The independence of the Judiciary.","The Secular character of the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "The core defining characteristic of the"
    },
    {
        "id": "ch12-l2-q9",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is FALSE. The Kesavananda Bharati case explicitly ruled that the Preamble IS a part of the Constitution and CAN be amended under Article 368. However, Reason R is TRUE—Parliament cannot amend the Preamble in a way that *destroys* its basic features (like removing"
    },
    {
        "id": "ch12-l2-q10",
        "question": "How does the Supreme Court determine whether a specific provision or a new amendment forms a part of or violates the",
        "options": ["By referring to a definitive list maintained by the Ministry of Law and Justice.","By conducting a national referendum on the specific provision.","It is determined by the Court strictly on a case-by-case basis through judicial interpretation of the core constitutional philosophy.","By appealing to the International Court of Justice for an advisory opinion."],
        "correctAnswerIndex": 2,
        "explanation": "There is no exhaustive list defined anywhere. The Basic Structure is a fluid, judicially evolved concept. The Court examines each challenged amendment"
    },
    {
        "id": "ch12-l2-q11",
        "question": "Consider the implications of the Indira Nehru Gandhi v. Raj Narain (1975) judgment. The Court struck down a provision that barred judicial review of the Prime Minister",
        "options": ["The Directive Principles of State Policy.","Free and fair elections, and the Rule of Law.","The establishment of a Welfare State.","The separation of powers between the centre and states."],
        "correctAnswerIndex": 1,
        "explanation": "The 39th Amendment attempted to put the PM"
    },
    {
        "id": "ch12-l2-q12",
        "question": "If Parliament attempts to pass a constitutional amendment completely abolishing the High Courts and centralizing all judicial power solely in the Supreme Court, this would likely be struck down for violating which element(s) of the Basic Structure?",
        "options": ["Federalism and the power of Judicial Review under Article 226.","Secularism and the Welfare State.","The Parliamentary system and Sovereign Democratic Republic nature.","The Harmony between Fundamental Rights and DPSP."],
        "correctAnswerIndex": 0,
        "explanation": "Abolishing High Courts destroys the federal judicial architecture (Federalism) and destroys the specific power of Judicial Review granted to High Courts under Article 226 (which L. Chandra Kumar definitively declared a basic feature)."
    },
    {
        "id": "ch12-l2-q13",
        "question": "The",
        "options": ["It means the three organs cannot interact or overlap in any capacity whatsoever.","It means a broad separation where one organ does not completely usurp the essential constitutional functions assigned to another (e.g., the legislature cannot pass a law that acts as a judicial verdict).","It refers only to the separation of the Civil Service from the Military.","It signifies that only the Judiciary has actual power."],
        "correctAnswerIndex": 1,
        "explanation": "India has a functional overlap (e.g., the executive sits in the legislature). The"
    },
    {
        "id": "ch12-l2-q14",
        "question": "Which of the following Supreme Court cases prominently reiterated",
        "options": ["S.R. Bommai case (1994)","Kihoto Hollohan case (1993)","Indra Sawhney case (1992)","L. Chandra Kumar case (1997)"],
        "correctAnswerIndex": 0,
        "explanation": "In the S.R. Bommai case (1994), the Supreme Court upheld the imposition of President"
    },
    {
        "id": "ch12-l2-q15",
        "question": "The evolution of the Basic Structure doctrine represents a distinct shift in Indian constitutional law regarding the ultimate",
        "options": ["The Parliament, representing the will of the people.","The Supreme Court of India.","The text and foundational philosophy of the Constitution itself.","The President of India."],
        "correctAnswerIndex": 2,
        "explanation": "The doctrine firmly established"
    },
    {
        "id": "ch12-l2-q16",
        "question": "Assertion (A): The Supreme Court in the Minerva Mills case (1980) ruled that placing Directive Principles over Fundamental Rights broadly destroys the basic structure.\\nReason (R): The Court held that the Indian Constitution is founded on the bedrock of the balance between Parts III and IV, and giving absolute primacy to one over the other destroys the essential harmony of the Constitution.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. The 42nd Amendment tried to make DPSP (Art 39(b)(c)) legally superior to Fundamental Rights (Arts 14, 19). In Minerva Mills, the SC struck this down, stating that the harmony between FRs and DPSP is a basic feature, and you cannot subordinate FRs entirely to DPSP. The reason correctly explains the assertion."
    },
    {
        "id": "ch12-l2-q17",
        "question": "Consider the Kihoto Hollohan case (1993) concerning the 10th Schedule (Anti-Defection Law). The SC struck down Paragraph 7 of the Schedule, which barred judicial review of the Speaker",
        "options": ["Federalism.","The principle of free and fair elections.","The power of Judicial Review (and the Rule of Law).","The welfare state."],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld the Anti-Defection law broadly but struck down the specific paragraph that tried to oust the jurisdiction of the High Courts and Supreme Court. The Court reiterated that Judicial Review is a basic feature, and the Speaker"
    },
    {
        "id": "ch12-l2-q18",
        "question": "How did the 44th Amendment Act (1978) interact with the",
        "options": ["It attempted to overturn the Kesavananda Bharati judgment like the 42nd Amendment did.","It recognized the Right to Property as the most important element of the basic structure.","By deleting the Right to Property from the list of Fundamental Rights, it utilized Parliament","Property","basic feature","It made the 9th Schedule completely immune from the Basic Structure doctrine."],
        "correctAnswerIndex": 2,
        "explanation": "The 44th Amendment (passed by the Janata government) deleted the Right to Property (Art 31). This was constitutionally valid specifically because of the Kesavananda ruling: Parliament CAN amend FRs. Because the Supreme Court never considered the"
    },
    {
        "id": "ch12-l2-q19",
        "question": "Which of the following best describes the international standing and origin of the",
        "options": ["It is a uniquely Indian judicial invention, heavily influenced by implications flowing from the constitutional text, with no direct parallel in British or early American constitutional law.","It was directly copied from the unwritten British Constitution.","It was explicitly mandated by the United Nations Human Rights Council.","It is an old, established doctrine that originated in the 18th century US Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "The Basic Structure doctrine is largely considered an indigenous innovation of Indian constitutional jurisprudence (though influenced by German concepts regarding unamendable constitutional core features post-WWII). It does not exist in the UK (which has Parliamentary sovereignty) and has no direct equivalent in standard US jurisprudence."
    },
    {
        "id": "ch12-l2-q20",
        "question": "Consider an amendment that seeks to alter Article 32 (Right to Constitutional Remedies). Under the current constitutional position (post-Kesavananda), what is the legal trajectory of such an amendment?",
        "options": ["It is absolutely prohibited under Article 368.","It can be passed by a simple majority.","It can be passed by Parliament using a Special Majority, but it will be struck down entirely by the Supreme Court because the power to issue writs under Article 32 is a declared Basic Feature.","It requires ratification by all 28 states to be valid."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament can technically"
    },
    {
        "id": "ch12-l2-q21",
        "question": "In the context of the Basic Structure doctrine, why is the concept of a",
        "options": ["Because DPSP were made justiciable by the 42nd Amendment.","Because the Constitution","s fundamental identity.","Because international organizations mandated it.","Because fundamental rights alone cannot function without a welfare state."],
        "correctAnswerIndex": 1,
        "explanation": "The Basic Structure isn"
    },
    {
        "id": "ch12-l2-q22",
        "question": "The power to amend the Constitution under Article 368 vs. The Basic Structure limitation. Which prominent legal scholar famously argued the government",
        "options": ["Nani Palkhivala","H.M. Seervai","Fali S. Nariman","Soli Sorabjee"],
        "correctAnswerIndex": 1,
        "explanation": "H.M. Seervai, one of India"
    },
    {
        "id": "ch12-l2-q23",
        "question": "If Parliament enacts an amendment seeking to change the system of government from a",
        "options": ["It would be valid if ratified by half the states.","It would be valid only if authorized by a 2/3rds majority in a national referendum.","It would be struck down by the Supreme Court as the","is a recognized Basic Feature of the Constitution.","It would require the approval of the outgoing President."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch12-l2-q24",
        "question": "The Basic Structure doctrine has been criticized by some legal purists on what major philosophical ground?",
        "options": ["It makes the Constitution too easy to amend, leading to instability.","It constitutes","or","by allowing unelected judges to strike down the will of the elected Parliament based on an unwritten, subjective concept.","It gives too much power to state governors.","It violates international law."],
        "correctAnswerIndex": 1,
        "explanation": "The primary criticism against the Basic Structure doctrine is that it is fundamentally anti-democratic. It is not written anywhere in the Constitution. Critics argue it acts as an abstract"
    },
    {
        "id": "ch12-l2-q25",
        "question": "Consider the",
        "options": ["It strictly enforces Article 21 and completely voids Article 47.","It attempts to interpret the laws implementing Article 47 in a way that respects the essence of Article 21, achieving a balanced synthesis rather than allowing one to completely obliterate the other.","It strictly enforces Article 47 because DPSP always supersede FRs.","It refers the clash to Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The core of the"
    },
    {
        "id": "ch12-l2-q26",
        "question": "In the Indira Sawhney Case (1992), often called the",
        "options": ["It prevents Parliament from amending reservation policies under any circumstances.","It dictates that while Parliament can amend articles to provide reservations (e.g., Art 16(4A)), these amendments must not result in arbitrary state action or destroy the fundamental concept of equality inherent in the Rule of Law (e.g., breaching the 50% cap unnecessarily).","It mandates that reservations must be proportional to total population.","It abolished all reservations."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch12-l2-q27",
        "question": "Assertion (A): The inclusion of an Act in the Ninth Schedule absolutely immunizes it from being challenged on the ground of violating Article 14 (Right to Equality) or Article 19 (Right to Freedom).\\nReason (R): Article 31B explicitly saves the Acts in the Ninth Schedule from being void on the ground that they are inconsistent with ANY of the rights conferred by Part III (Fundamental Rights).\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is FALSE in the post-1973/I.R. Coelho era. While Reason R correctly states the *textual intent* of Article 31B, the Supreme Court has ruled that if a post-1973 Act violates Arts 14, 19, or 21 in a way that destroys the"
    },
    {
        "id": "ch12-l2-q28",
        "question": "Which term best describes the judicial philosophy that underpins the Supreme Court",
        "options": ["Textualism (Strict adherence to the literal text).","Judicial Restraint.","Judicial Activism (or living tree constitutionalism).","Legal Positivism."],
        "correctAnswerIndex": 2,
        "explanation": "The Basic Structure doctrine is the zenith of Indian Judicial Activism. By implying limitations that do not exist in the explicit text of Article 368, the Court interpreted the Constitution dynamically (as a living entity with an unalterable soul) to protect democratic values from temporary parliamentary majorities."
    },
    {
        "id": "ch12-l2-q29",
        "question": "If a state government argues that a central constitutional amendment violates the",
        "options": ["The Inter-State Council.","The High Court of that specific State.","The Supreme Court of India via its Original Jurisdiction (Article 131) or via a Writ Petition (Article 32) if fundamental rights are also affected.","A Joint Session of Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "Disputes regarding the constitutional validity of a central amendment affecting the federal structure (or any basic feature) are litigated in the Supreme Court, acting as the ultimate interpreter and guardian of the Constitution"
    },
    {
        "id": "ch12-l2-q30",
        "question": "The Supreme Court has sometimes evolved new basic features to meet contemporary challenges. According to recent constitutional discourse and cases like K.S. Puttaswamy (2017), which emerging right is heavily intertwined with the basic structure of the Constitution via Article 21?",
        "options": ["Right to strike.","Right to absolute free speech without reasonable restrictions.","Right to Privacy.","Right to carry arms."],
        "correctAnswerIndex": 2,
        "explanation": "In the Puttaswamy judgment (2017), the 9-judge bench declared the Right to Privacy an intrinsic part of the Right to Life and Liberty under Article 21. Since Article 21 and human dignity form part of the basic structure, Privacy is now deeply embedded in the unamendable constitutional core."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch12-l3-q1",
        "question": "Consider the constitutional journey of the",
        "options": ["Article 368 contains both the power and the procedure to amend the Constitution, including Fundamental Rights.","Article 368 only lays down the procedure to amend the Constitution; the actual power to amend is derived from ordinary legislative power (Article 245), meaning an amendment is a","under Article 13(2) and cannot take away Fundamental Rights.","Article 368 gives Parliament absolute, unfettered constituent power that supersedes all judicial review.","Article 368 can only be used to amend the Directive Principles of State Policy."],
        "correctAnswerIndex": 1,
        "explanation": "In Golaknath (1967), the SC shockingly ruled that Art 368 only provided the"
    },
    {
        "id": "ch12-l3-q2",
        "question": "How did Parliament specifically react to neutralize the Supreme Court",
        "options": ["By declaring a National Emergency and suspending Article 32.","By passing the 24th Constitutional Amendment Act (1971), which explicitly stated that nothing in Article 13 shall apply to any amendment made under Article 368.","By impeaching the Chief Justice who delivered the judgment.","By amending the Preamble to remove the word","."],
        "correctAnswerIndex": 1,
        "explanation": "The 24th Amendment (1971) added a new clause (4) to Article 13, stating"
    },
    {
        "id": "ch12-l3-q3",
        "question": "The landmark Kesavananda Bharati v. State of Kerala (1973) case fundamentally reshaped Indian constitutional law. While it upheld the validity of the 24th Amendment (giving Parliament the power to amend ANY part of the constitution), what massive constitutional limit did it simultaneously invent and impose on Parliament?",
        "options": ["The Due Process Clause.","The Basic Structure (or basic features) Doctrine.","The Harmonious Construction Doctrine.","The Colourable Legislation Doctrine."],
        "correctAnswerIndex": 1,
        "explanation": "The 13-judge bench created the"
    },
    {
        "id": "ch12-l3-q4",
        "question": "Examine the 42nd Amendment Act (1976), often termed the",
        "options": ["They attempted to mandate that every amendment must be approved by the President and the Supreme Court collectively.","They declared that there is","on the constituent power of Parliament to amend the Constitution, and no amendment could be questioned in ANY court on ANY ground.","They attempted to make Fundamental Duties superior to Fundamental Rights.","They mandated a national referendum for any future basic structure changes."],
        "correctAnswerIndex": 1,
        "explanation": "The Indira Gandhi government added clauses (4) and (5) to Article 368 via the 42nd Amendment to assert total parliamentary infallibility. Clause (4) ousted judicial review ("
    },
    {
        "id": "ch12-l3-q5",
        "question": "How did the Supreme Court deal with the 42nd Amendment",
        "options": ["The Court upheld them, bowing to Parliamentary sovereignty.","The Court struck them down as unconstitutional, declaring that","and a","are themselves essential features of the Basic Structure.","The Court ignored them entirely.","The Court ruled they only applied during national emergencies."],
        "correctAnswerIndex": 1,
        "explanation": "In Minerva Mills (1980), the SC emphatically struck down clauses 4 and 5 of Art 368. Chief Justice Chandrachud ruled that Parliament"
    },
    {
        "id": "ch12-l3-q6",
        "question": "Assertion (A): Not a single provision in the Indian Constitution is completely immune from being amended.\\nReason (R): Article 368 grants Parliament constituent power to amend",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Kesavananda Bharati categorically held that ANY part of the Constitution (including the Preamble and Fundamental Rights) can be amended under Art 368. The ONLY constitutional restriction is that the"
    },
    {
        "id": "ch12-l3-q7",
        "question": "Consider the Waman Rao v. Union of India (1981) case. It specifically addressed the timeline applicability of the Basic Structure doctrine regarding amendments placing laws in the Ninth Schedule. What was the critical cut-off date established by the Supreme Court?",
        "options": ["January 26, 1950 (Adoption of the Constitution).","February 27, 1967 (Date of the Golaknath judgment).","April 24, 1973 (Date of the Kesavananda Bharati judgment).","December 18, 1976 (Date of the 42nd Amendment Act)."],
        "correctAnswerIndex": 2,
        "explanation": "The SC clarified in Waman Rao (and later affirmed in I.R. Coelho) that the Basic Structure doctrine operates retrospectively only up to the date of its creation. Any constitutional amendment bringing an act/regulation into the Ninth Schedule *after* April 24, 1973 (Kesavananda judgment date) is open to judicial review based on the basic structure test."
    },
    {
        "id": "ch12-l3-q8",
        "question": "Which of the following procedural anomalies concerning Constitutional Amendments arguably bypasses the strict scrutiny theoretically envisioned by the Indian Constitution",
        "options": ["The President","The mandatory requirement of joint sittings for all amendments.","The ability to amend several significant provisions (like modifying the 1st or 2nd schedules, creating Legislative Councils, altering territory) by a mere simple legislative majority, avoiding the stringent requirements of Article 368 entirely.","The requirement of a national referendum on all amendments."],
        "correctAnswerIndex": 2,
        "explanation": "Critics point out the"
    },
    {
        "id": "ch12-l3-q9",
        "question": "In the context of amending the Constitution, federal principles dictate that changes affecting the balance of power require state consent. However, in India, half the states can thwart a constitutional amendment, but ALL the states combined CANNOT force one. What does this indicate about the nature of Indian federalism?",
        "options": ["It proves India is a pure, classical federation like the USA.","It establishes a system of",".","It highlights the heavily asymmetrical, unitary bias (","nature) of the Constitution where the Centre holds overwhelming constituent initiative.","It proves the states have absolute sovereignty."],
        "correctAnswerIndex": 2,
        "explanation": "This is a quintessential example of India"
    },
    {
        "id": "ch12-l3-q10",
        "question": "If a Constitutional Amendment Bill relates to the",
        "options": ["A simple majority in Parliament, followed by Presidential assent.","A special majority in Parliament, followed by Presidential assent.","A special majority in Parliament, AND ratification by resolutions passed by a special majority in not less than one-half of the State Legislatures.","A special majority in Parliament, AND ratification by resolutions passed by a simple majority in not less than one-half of the State Legislatures, followed by Presidential assent."],
        "correctAnswerIndex": 3,
        "explanation": "Modifying the 7th Schedule strictly requires: 1) Special majority in Lok Sabha AND Rajya Sabha individually. 2) Ratification by at least 50% (half) of the State Assemblies by a SIMPLE MAJORITY in each assembly. 3) Finally, the obligatory assent of the President (who cannot withhold it under the 24th Amendment)."
    },
    {
        "id": "ch12-l3-q11",
        "question": "The power of Parliament to amend the Constitution includes the power to amend Article 368 itself. When doing so, which specific procedural safeguard must be adhered to?",
        "options": ["Only the Lok Sabha can vote on amending Article 368.","It requires only a Special Majority in Parliament.","It is one of the specific provisions triggering the",", requiring both a Special Majority in Parliament and Ratification by half the State Legislatures.","It requires a unanimous vote in the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Article 368 is an"
    },
    {
        "id": "ch12-l3-q12",
        "question": "Consider the National Judicial Appointments Commission (NJAC) Act and the accompanying 99th Constitutional Amendment Act (2014). The Supreme Court struck down the amendment in 2015. On what specific",
        "options": ["It violated the fundamental right to equality (Article 14).","It violated the principles of federalism by removing state tribunals.","It compromised the","by granting the executive (Law Minister) and political entities an overriding say in the appointment of judges.","It bypassed the mandatory state ratification process."],
        "correctAnswerIndex": 2,
        "explanation": "The SC (4:1 majority) in the Fourth Judges Case struck down the 99th Amendment (NJAC) entirely. It ruled that judicial primary and the absolute separation of the executive from the judiciary regarding judge appointments is a"
    },
    {
        "id": "ch12-l3-q13",
        "question": "Assertion (A): A constitutional amendment passed strictly adhering to the special majority procedure in Article 368 cannot be declared ultra vires purely on procedural grounds.\\nReason (R): Because the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The Supreme Court exercises judicial review over constitutional amendments on BOTH substantive (Basic Structure test) AND procedural grounds. For instance, if a bill requiring state ratification didn"
    },
    {
        "id": "ch12-l3-q14",
        "question": "The power to",
        "options": ["M.V. Pylee","Granville Austin","K.C. Wheare","Ivor Jennings"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin noted that the amending process has proved itself one of the most ably conceived aspects of the Constitution. Though it appears complex, Austin praised it as the"
    },
    {
        "id": "ch12-l3-q15",
        "question": "If a new state (e.g., Telangana) is formed out of an existing state (e.g., Andhra Pradesh), the newly mapped territories legally alter the map defined in the First Schedule. Why did the formation of Telangana (2014) NOT require a Constitutional Amendment under Article 368?",
        "options": ["Because the Supreme Court issued a special exemption under Article 142.","Because Article 4 of the Constitution explicitly declares that laws making changes to the First and Fourth Schedules consequential to creating new states under Articles 2 and 3 are not considered","for the purpose of Article 368.","Because it was a Presidential decree under Emergency powers.","Because both State assemblies unanimously agreed to bypass Article 368."],
        "correctAnswerIndex": 1,
        "explanation": "This is the classic application of Article 4. Parliament alters the boundaries and immediately changes the First (territories) and Fourth (Rajya Sabha seats) Schedules using a simple ordinary legislative majority. Technically it modifies the constitutional text, but it is explicitly immunized from the rigorous procedure and definition of Article 368."
    },
    {
        "id": "ch12-l3-q16",
        "question": "Which Constitutional Amendment famously attempted to place Election disputes concerning the Prime Minister and the Speaker of the Lok Sabha entirely beyond the jurisdiction of all courts, including the Supreme Court, before being struck down in the Raj Narain case?",
        "options": ["24th Amendment Act, 1971","39th Amendment Act, 1975","42nd Amendment Act, 1976","44th Amendment Act, 1978"],
        "correctAnswerIndex": 1,
        "explanation": "During the Emergency, to protect Indira Gandhi"
    },
    {
        "id": "ch12-l3-q17",
        "question": "Examine the",
        "options": ["The Doctrine of Separation of Powers.","The Doctrine of Federalism.","The Doctrine of Parliamentary Sovereignty.","The Doctrine of Harmonious Construction."],
        "correctAnswerIndex": 1,
        "explanation": "The President is the head of the Indian State (the Union and the States essentially). The electoral college consists of elected MLAs of the states alongside MPs. Any change to this process alters the political weight and rights of the states within the Union. Thus, to protect Federalism, states are given a veto mechanism (ratification requirement)."
    },
    {
        "id": "ch12-l3-q18",
        "question": "Consider the constitutional paradox regarding the 9th Schedule (Article 31B). While placed under the protection of the shield of the 9th schedule via constitutional amendments, how did the Supreme Court in I.R. Coelho v. State of Tamil Nadu (2007) definitively rule on the amendability vs. judicial review debate?",
        "options": ["The Court ruled that any amendment placing a law in the 9th Schedule is completely immune from judicial review forever.","The Court ruled the 9th Schedule is unconstitutional and struck it out of the Constitution entirely.","The Court ruled that while Parliament can amend the Constitution to place laws in the 9th Schedule, any inclusion made *after* April 24, 1973 (Kesavananda date) is subject to judicial review if it violates the","(e.g., core fundamental rights like Arts 14, 19, 21).","The Court ruled that only State Legislatures can place laws in the 9th Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "The landmark I.R. Coelho judgment (2007, 9-judge bench) definitively shattered the"
    },
    {
        "id": "ch12-l3-q19",
        "question": "If an amendment to the Constitution is passed altering the",
        "options": ["Special Majority under Article 368.","Special Majority + State Ratification under Article 368.","Simple majority in Parliament outside the strict purview of Article 368.","It requires the formation of a Constituent Assembly."],
        "correctAnswerIndex": 2,
        "explanation": "Privileges of the Parliament, its members, and its committees are listed among the specific provisions in Laxmikanth that can be amended by a simple ordinary legislative majority, rather than invoking the rigid mechanisms of a Special Majority under Article 368."
    },
    {
        "id": "ch12-l3-q20",
        "question": "Assertion (A): The President of India",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Prior to 1971, the President could theoretically withhold assent to a Constitutional Amendment Bill. The 24th Amendment changed"
    }
];

export const CHAPTER_12_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
