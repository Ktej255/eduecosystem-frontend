import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 11)
const LEVEL_1_QUESTIONS = [
    {
        question: "The question whether Fundamental Rights can be amended by the Parliament under Article 368 first arose in which case?",
        options: ["Golak Nath case (1967)", "Shankari Prasad case (1951)", "Kesavananda Bharati case (1973)", "Minerva Mills case (1980)"],
        correctAnswerIndex: 1, // b) Shankari Prasad
        explanation: "Shankari Prasad case (1951)."
    },
    {
        question: "In the Shankari Prasad case (1951), the Supreme Court ruled that the power of the Parliament to amend the Constitution under Article 368:",
        options: ["Includes the power to amend Fundamental Rights.", "Does not include the power to amend Fundamental Rights.", "Is limited by the Basic Structure.", "Is subject to ratification by states."],
        correctAnswerIndex: 0, // a) Includes the power
        explanation: "In Shankari Prasad, the Court ruled that Article 368 includes the power to amend Fundamental Rights."
    },
    {
        question: "In the Shankari Prasad case, the Court held that the word 'law' in Article 13 includes only:",
        options: ["Constitutional amendment acts.", "Ordinary laws.", "Both ordinary laws and constitutional amendment acts.", "Executive orders."],
        correctAnswerIndex: 1, // b) Ordinary laws
        explanation: "The Court held that 'law' in Article 13 includes only ordinary laws, not constitutional amendment acts."
    },
    {
        question: "In the Golak Nath case (1967), the Supreme Court reversed its earlier stand. It ruled that:",
        options: ["The Parliament has absolute power to amend the Constitution.", "The Fundamental Rights are given a 'transcendental and immutable' position.", "The Parliament can abridge Fundamental Rights but cannot take them away.", "The Directive Principles are superior to Fundamental Rights."],
        correctAnswerIndex: 1, // b) Transcendental and immutable
        explanation: "Fundamental Rights were described as transcendental and immutable in the Golak Nath case."
    },
    {
        question: "In the Golak Nath case, the Court held that a Constitutional Amendment Act:",
        options: ["Is not a 'law' within the meaning of Article 13.", "Is a 'law' within the meaning of Article 13 and hence would be void for violating any of the Fundamental Rights.", "Is a special law protected by the Ninth Schedule.", "Is an executive action."],
        correctAnswerIndex: 1, // b) Is a 'law'
        explanation: "The Court held that a constitutional amendment is a 'law' under Article 13."
    },
    {
        question: "To overcome the Golak Nath judgment, the Parliament enacted the:",
        options: ["24th Amendment Act (1971).", "25th Amendment Act (1971).", "42nd Amendment Act (1976).", "44th Amendment Act (1978)."],
        correctAnswerIndex: 0, // a) 24th
        explanation: "24th Amendment Act (1971)."
    },
    {
        question: "The 24th Amendment Act amended which Articles to declare that Parliament has the power to abridge or take away any of the Fundamental Rights?",
        options: ["Articles 13 and 368.", "Articles 14 and 19.", "Articles 31 and 32.", "Articles 12 and 35."],
        correctAnswerIndex: 0, // a) 13 and 368
        explanation: "Amended Articles 13 and 368."
    },
    {
        question: "In the Kesavananda Bharati case (1973), the Supreme Court overruled the judgment in:",
        options: ["Shankari Prasad case.", "Golak Nath case.", "Sajjan Singh case.", "AK Gopalan case."],
        correctAnswerIndex: 1, // b) Golak Nath
        explanation: "Overruled the Golak Nath case."
    },
    {
        question: "In the Kesavananda Bharati case, the Court upheld the validity of the 24th Amendment Act but laid down a new doctrine known as:",
        options: ["Doctrine of Severability.", "Doctrine of Eclipse.", "Doctrine of Basic Structure.", "Doctrine of Pith and Substance."],
        correctAnswerIndex: 2, // c) Basic Structure
        explanation: "Doctrine of Basic Structure."
    },
    {
        question: "According to the Basic Structure doctrine, the Parliament:",
        options: ["Cannot amend the Constitution at all.", "Can amend any part of the Constitution provided it does not alter its 'basic structure'.", "Can amend only the Preamble.", "Cannot amend the Fundamental Rights."],
        correctAnswerIndex: 1, // b) Can amend provided...
        explanation: "Can amend any part provided it does not alter the basic structure."
    },
    {
        question: "The doctrine of basic structure was reaffirmed and applied by the Supreme Court in the Indira Nehru Gandhi case (1975). In this case, the Court invalidated a provision of the:",
        options: ["39th Amendment Act (1975).", "42nd Amendment Act (1976).", "25th Amendment Act (1971).", "44th Amendment Act (1978)."],
        correctAnswerIndex: 0, // a) 39th
        explanation: "39th Amendment Act (1975)."
    },
    {
        question: "The 39th Amendment Act had kept the election disputes involving which specific offices outside the jurisdiction of all courts?",
        options: ["President, Vice-President, Prime Minister and Speaker of Lok Sabha.", "President and Governors.", "Prime Minister and Chief Ministers.", "Members of Parliament."],
        correctAnswerIndex: 0, // a) President, VP, PM, Speaker
        explanation: "President, Vice-President, Prime Minister, and Speaker of Lok Sabha."
    },
    {
        question: "In reaction to the Basic Structure doctrine, the Parliament enacted the 42nd Amendment Act (1976). It added a clause declaring that:",
        options: ["There shall be no limitation on the constituent power of Parliament.", "No amendment can be questioned in any court on any ground.", "Both (a) and (b).", "Neither (a) nor (b)."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Declared no limitation and no judicial questioning."
    },
    {
        question: "In the Minerva Mills case (1980), the Supreme Court invalidated the above provision of the 42nd Amendment Act because it excluded:",
        options: ["Judicial Review.", "Fundamental Duties.", "Directive Principles.", "Emergency Provisions."],
        correctAnswerIndex: 0, // a) Judicial Review
        explanation: "Judicial Review is a basic feature."
    },
    {
        question: "In the Waman Rao case (1981), the Supreme Court clarified that the doctrine of Basic Structure would apply to constitutional amendments enacted after:",
        options: ["January 26, 1950.", "April 24, 1973.", "June 25, 1975.", "November 26, 1949."],
        correctAnswerIndex: 1, // b) April 24, 1973
        explanation: "April 24, 1973."
    },
    {
        question: "The Supreme Court has defined the 'basic structure' of the Constitution:",
        options: ["In the Kesavananda Bharati case itself.", "In the Minerva Mills case.", "In the SR Bommai case.", "The Court has not yet defined or clarified what constitutes the 'basic structure'."],
        correctAnswerIndex: 3, // d) Not yet defined/exhaustive list
        explanation: "There is no exhaustive definition; it is evolved case-by-case."
    },
    {
        question: "Which of the following is NOT an element of the basic structure as declared by the Supreme Court in various judgments?",
        options: ["Supremacy of the Constitution.", "Sovereign, democratic and republican nature of the Indian polity.", "Secular character of the Constitution.", "Supremacy of the Parliament."],
        correctAnswerIndex: 3, // d) Supremacy of Parliament
        explanation: "India has Constitutional Supremacy, not Parliamentary Supremacy."
    },
    {
        question: "Which case declared \"Free and fair elections\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "Indira Nehru Gandhi case (1975).", "Minerva Mills case (1980).", "Kihoto Hollohan case (1993)."],
        correctAnswerIndex: 1, // b) Indira Nehru Gandhi
        explanation: "Indira Nehru Gandhi case (1975)."
    },
    {
        question: "Which case declared \"Judicial Review\" as a basic feature?",
        options: ["Minerva Mills case (1980).", "Waman Rao case (1981).", "SR Bommai case (1994).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Reaffirmed in all cited cases."
    },
    {
        question: "Which case declared \"Rule of Law\" as a basic feature?",
        options: ["Indira Nehru Gandhi case (1975).", "Minerva Mills case (1980).", "Sambamurthy case (1987).", "Indra Sawhney case (1992)."],
        correctAnswerIndex: 0, // a) Indira Nehru Gandhi
        explanation: "Indira Nehru Gandhi case (1975)."
    },
    {
        question: "Which case declared \"Harmony and balance between Fundamental Rights and Directive Principles\" as a basic feature?",
        options: ["Minerva Mills case (1980).", "Kesavananda Bharati case (1973).", "Central Coal Fields Ltd. case (1980).", "Bhim Singhji case (1981)."],
        correctAnswerIndex: 0, // a) Minerva Mills
        explanation: "Minerva Mills case (1980)."
    },
    {
        question: "Which case declared \"Federal character of the Constitution\" as a basic feature?",
        options: ["SR Bommai case (1994).", "Kesavananda Bharati case (1973).", "Minerva Mills case (1980).", "Both (a) and (b)."],
        correctAnswerIndex: 3, // d) Both a and b
        explanation: "Kesavananda Bharati and SR Bommai."
    },
    {
        question: "Which case declared \"Secularism\" as a basic feature?",
        options: ["SR Bommai case (1994).", "Kesavananda Bharati case (1973).", "Indira Nehru Gandhi case (1975).", "Golak Nath case (1967)."],
        correctAnswerIndex: 0, // a) SR Bommai
        explanation: "SR Bommai case (1994)."
    },
    {
        question: "Which case declared \"Separation of powers between the legislature, the executive and the judiciary\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "Indira Nehru Gandhi case (1975).", "Minerva Mills case (1980).", "Delhi Judicial Service Association case (1991)."],
        correctAnswerIndex: 1, // b) Indira Nehru Gandhi
        explanation: "Indira Nehru Gandhi case (1975)."
    },
    {
        question: "Which case declared \"Freedom and dignity of the individual\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "Minerva Mills case (1980).", "Indra Sawhney case (1992).", "SR Bommai case (1994)."],
        correctAnswerIndex: 0, // a) Kesavananda
        explanation: "Kesavananda Bharati case (1973)."
    },
    {
        question: "Which case declared \"Unity and integrity of the nation\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "SR Bommai case (1994).", "L. Chandra Kumar case (1997).", "Waman Rao case (1981)."],
        correctAnswerIndex: 0, // a) Kesavananda
        explanation: "Kesavananda Bharati case (1973)."
    },
    {
        question: "Which case declared \"Principle of equality\" as a basic feature?",
        options: ["Indira Nehru Gandhi case (1975).", "Minerva Mills case (1980).", "Raghunath Rao case (1993).", "Indra Sawhney case (1992)."],
        correctAnswerIndex: 0, // a) Indira Nehru Gandhi
        explanation: "Indira Nehru Gandhi case (1975)."
    },
    {
        question: "Which case declared \"Independence of Judiciary\" as a basic feature?",
        options: ["Supreme Court Advocates-on-Record Association case (1993).", "Kumar Padma Prasad case (1992).", "L. Chandra Kumar case (1997).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Reaffirmed in multiple cases."
    },
    {
        question: "Which case declared \"Powers of the Supreme Court under Article 32, 136, 141 and 142\" as a basic feature?",
        options: ["Delhi Judicial Service Association case (1991).", "I.R. Coelho case (2007).", "Madras Bar Association case (2014).", "Kihoto Hollohan case (1993)."],
        correctAnswerIndex: 0, // a) Delhi PJSA
        explanation: "Delhi Judicial Service Association case (1991)."
    },
    {
        question: "Which case declared \"Powers of the High Courts under Articles 226 and 227\" as a basic feature?",
        options: ["L. Chandra Kumar case (1997).", "SR Bommai case (1994).", "Minerva Mills case (1980).", "P. Sambamurthy case (1987)."],
        correctAnswerIndex: 0, // a) L. Chandra Kumar
        explanation: "L. Chandra Kumar case (1997)."
    },
    {
        question: "Which case declared \"Limited power of Parliament to amend the Constitution\" as a basic feature?",
        options: ["Minerva Mills case (1980).", "Kesavananda Bharati case (1973).", "Indira Nehru Gandhi case (1975).", "Waman Rao case (1981)."],
        correctAnswerIndex: 0, // a) Minerva Mills
        explanation: "Minerva Mills case (1980)."
    },
    {
        question: "Which case declared \"Effective access to justice\" as a basic feature?",
        options: ["Central Coal Fields Ltd. case (1980).", "P. Sambamurthy case (1987).", "Delhi Judicial Service Association case (1991).", "Indra Sawhney case (1992)."],
        correctAnswerIndex: 0, // a) Central Coal Fields
        explanation: "Central Coal Fields Ltd. case (1980)."
    },
    {
        question: "Which case declared \"Welfare State (Social Justice)\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "SR Bommai case (1994).", "Indra Sawhney case (1992).", "Minerva Mills case (1980)."],
        correctAnswerIndex: 2, // c) Indra Sawhney
        explanation: "Indra Sawhney case (1992)."
    },
    {
        question: "Which case declared \"Democracy\" as a basic feature?",
        options: ["Kesavananda Bharati case (1973).", "Indira Nehru Gandhi case (1975).", "Kihoto Hollohan case (1993).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Fundamental feature declared in all."
    },
    {
        question: "The judgment in I.R. Coelho case (2007) is also known as the:",
        options: ["Ninth Schedule Case.", "Mandal Case.", "Reservation Case.", "Panchayat Case."],
        correctAnswerIndex: 0, // a) Ninth Schedule
        explanation: "Ninth Schedule Case."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "The \"Basic Structure Doctrine\" is based on the principle of:",
        options: ["Express limitations in the Constitution.", "Implied limitations on the amending power of Parliament.", "Supremacy of the Judiciary over Parliament.", "Natural Law."],
        correctAnswerIndex: 1, // b) Implied limitations
        explanation: "Implied limitations."
    },
    {
        question: "In the Kesavananda Bharati case (1973), the Supreme Court held that the power to \"amend\" (Article 368) does not include the power to:",
        options: ["Add new provisions.", "Repeal old provisions.", "Alter the basic features or framework of the Constitution.", "Change the Preamble."],
        correctAnswerIndex: 2, // c) Alter basic features
        explanation: "Does not include power to alter basic structure."
    },
    {
        question: "The distinction between \"Constituent Power\" (Article 368) and \"Legislative Power\" (Article 245) was primarily debated in:",
        options: ["Shankari Prasad case.", "Golak Nath case.", "Kesavananda Bharati case.", "Minerva Mills case."],
        correctAnswerIndex: 2, // c) Kesavananda
        explanation: "Kesavananda Bharati case."
    },
    {
        question: "In Golak Nath, the Court held that a Constitutional Amendment is a \"law\" under Article 13. In Kesavananda Bharati, the Court held that:",
        options: ["It is a \"law\" under Article 13.", "It is not a \"law\" under Article 13, but is still subject to the Basic Structure limitation.", "It is a \"law\" but can override Fundamental Rights.", "It is an executive order."],
        correctAnswerIndex: 1, // b) Not a 'law', but limited
        explanation: "It is not a 'law' under Art 13, but constituent power is limited by the Basic Structure."
    },
    {
        question: "The 24th Amendment Act (1971) sought to restore Parliament's power to amend Fundamental Rights. The Supreme Court in Kesavananda Bharati:",
        options: ["Struck it down completely.", "Upheld it validly.", "Upheld it subject to the Basic Structure doctrine.", "Upheld it partially."],
        correctAnswerIndex: 2, // c) Upheld subject to Basic Structure
        explanation: "Upheld it subject to Basic Structure."
    },
    {
        question: "The 39th Amendment Act (1975) placed the election of the Prime Minister beyond judicial review. The Supreme Court struck this down in the Indira Gandhi vs Raj Narain case (1975) because it violated:",
        options: ["Free and fair elections.", "Rule of Law.", "Judicial Review.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All listed features."
    },
    {
        question: "The 42nd Amendment (1976) gave Directive Principles (Article 39b/c) precedence over Fundamental Rights (14, 19, 31). In Minerva Mills, the Court struck down the extension of this precedence to ALL Directive Principles because:",
        options: ["It destroyed the \"harmony and balance\" between FRs and DPSPs.", "DPSPs are non-justiciable.", "It violated the Right to Property.", "It was passed during Emergency."],
        correctAnswerIndex: 0, // a) Harmony and balance
        explanation: "Destroyed the harmony and balance."
    },
    {
        question: "The \"99th Constitutional Amendment Act\" (NJAC) is the only amendment struck down in entirety by the Supreme Court. The ground was violation of:",
        options: ["Independence of Judiciary (Basic Structure).", "Separation of Powers (Basic Structure).", "Both (a) and (b).", "Federalism."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Independence of Judiciary and Separation of Powers."
    },
    {
        question: "In the I.R. Coelho case (2007) regarding the Ninth Schedule, the Court held that:",
        options: ["The Ninth Schedule is immune from judicial review.", "Any law added to the Ninth Schedule after April 24, 1973, is open to challenge if it violates Fundamental Rights forming the Basic Structure.", "The entire Ninth Schedule is unconstitutional.", "Only land reform laws are immune."],
        correctAnswerIndex: 1, // b) Open after 1973
        explanation: "Open after April 24, 1973."
    },
    {
        question: "The \"Rule of Law\" as a basic feature implies:",
        options: ["Absence of arbitrary power.", "Equality before law.", "The Constitution is the result of the rights of individuals.", "Both (a) and (b)."],
        correctAnswerIndex: 3, // d) Both a and b
        explanation: "Includes absence of arbitrary power and equality before law."
    },
    {
        question: "Which of the following is NOT expressly mentioned in the Constitution but is considered part of the Basic Structure?",
        options: ["Judicial Review.", "Separation of Powers.", "Federalism.", "Cabinet System of Government."],
        correctAnswerIndex: 3, // d) Cabinet System (actually the phrase Basic Structure itself is not mentioned)
        explanation: "The prompt notes that the 'Basic Structure' itself is not mentioned in the text."
    },
    {
        question: "Is \"Socialism\" part of the Basic Structure?",
        options: ["Yes, added by the Preamble and affirmed in Excel Wear case.", "No, it is a policy choice.", "Only \"Democratic Socialism\".", "Only \"Gandhian Socialism\"."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Affirmed in the Preamble/Excel Wear case."
    },
    {
        question: "Is the \"Right to Property\" part of the Basic Structure?",
        options: ["Yes.", "No, the Court held so in Kesavananda Bharati (Justice Khanna's opinion).", "Yes, but only for minorities.", "Yes, but only for farmers."],
        correctAnswerIndex: 1, // b) No
        explanation: "Justice Khanna's opinion in Kesavananda held it's not basic structure."
    },
    {
        question: "The \"Federal Character\" of the Constitution was declared a basic feature in S.R. Bommai case (1994). This restricts Parliament from:",
        options: ["Altering boundaries of states under Article 3.", "Using Article 356 arbitrarily to dismiss state governments.", "Changing the names of states.", "Creating new states."],
        correctAnswerIndex: 1, // b) Arbitrary 356
        explanation: "SR Bommai case focused heavily on Art 356 usage."
    },
    {
        question: "The \"Secular Character\" being a basic feature means:",
        options: ["The State has no religion.", "The State treats all religions equally.", "Politics and religion should not be mixed (Bommai case).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All dimensions are part of Indian Secularism."
    },
    {
        question: "Can Parliament increase the power of judicial review via amendment?",
        options: ["Yes, upgrading basic features is allowed; degrading/damaging them is not.", "No, the structure must remain exactly as it was in 1950.", "No, it violates separation of powers.", "Yes, but only with State ratification."],
        correctAnswerIndex: 0, // a) Upgrading is allowed
        explanation: "Upgrading/Strengthening is generally permissible."
    },
    {
        question: "Does the US Constitution have a similar doctrine?",
        options: ["Yes, explicit \"unamendable\" clauses.", "No, the US Supreme Court has never struck down a constitutional amendment.", "Yes, implied limitations.", "Yes, the \"Bill of Rights\" cannot be amended."],
        correctAnswerIndex: 1, // b) No
        explanation: "US SC has never struck down an amendment."
    },
    {
        question: "Critics argue that the Basic Structure doctrine is vague because:",
        options: ["The Supreme Court has never given an exhaustive list of basic features.", "It allows the Judiciary to act as a \"Third Chamber\" of Parliament.", "It has no basis in the constitutional text.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Common criticisms."
    },
    {
        question: "Who decides whether a particular amendment violates the Basic Structure?",
        options: ["The President.", "The Parliament itself.", "The Supreme Court (Final Interpreter).", "The People (Referendum)."],
        correctAnswerIndex: 2, // c) Supreme Court
        explanation: "Supreme Court is the final interpreter."
    },
    {
        question: "Can the \"Preamble\" be amended?",
        options: ["No, never.", "Yes, as long as the amendment does not alter the basic features found in the Preamble (e.g., secularism, democracy).", "Yes, completely.", "Only to correct errors."],
        correctAnswerIndex: 1, // b) Yes, provided...
        explanation: "Can be amended subject to Basic Structure."
    },
    {
        question: "The \"Waman Rao case\" (1981) drew a line at:",
        options: ["Jan 26, 1950.", "April 24, 1973 (Date of Kesavananda judgment).", "June 1975 (Emergency).", "1976 (42nd Amendment)."],
        correctAnswerIndex: 1, // b) April 24, 1973
        explanation: "Prospective application from Kesavananda date."
    },
    {
        question: "In the L. Chandra Kumar case (1997), the Supreme Court declared that the power of judicial review vested in High Courts under Article 226 and 227 is:",
        options: ["A statutory power.", "A basic feature of the Constitution which cannot be ousted even by creating Tribunals (Article 323A/B).", "Subject to Parliament's will.", "Available only for Fundamental Rights."],
        correctAnswerIndex: 1, // b) Basic feature
        explanation: "Basic feature (cannot be ousted)."
    },
    {
        question: "The \"Separation of Powers\" in India is not rigid like in the USA. However, it is a basic feature. This implies:",
        options: ["The Judiciary cannot take over the functions of the Legislature or Executive.", "The Executive cannot exercise essential legislative functions.", "Checks and balances are essential.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Implications of separation of powers."
    },
    {
        question: "Assertion (A): The Parliament cannot alter the \"Basic Structure\" of the Constitution. Reason (R): The power to amend (Article 368) is a derivative power and cannot be used to destroy the source (Constitution) itself.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation (Derivative power logic)."
    },
    {
        question: "The concept of \"Limited Government\" is essential to Constitutionalism. Which basic feature ensures this?",
        options: ["Fundamental Rights.", "Judicial Review.", "Rule of Law.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All ensure limited government."
    },
    {
        question: "In Minerva Mills, the Court declared \"Harmony and Balance between Fundamental Rights and Directive Principles\" as a basic feature. This means:",
        options: ["FRs are superior to DPSPs.", "DPSPs are superior to FRs.", "One cannot be given absolute primacy over the other in a way that destroys the other.", "Both can be amended freely."],
        correctAnswerIndex: 2, // c) Balance
        explanation: "Co-existence and balance."
    },
    {
        question: "The \"Essence of the Constitution\" argument was used by:",
        options: ["N.A. Palkhivala (Counsel in Kesavananda Bharati).", "B.R. Ambedkar.", "Jawaharlal Nehru.", "Sir B.N. Rau."],
        correctAnswerIndex: 0, // a) Palkhivala
        explanation: "N.A. Palkhivala."
    },
    {
        question: "Does the \"Basic Structure\" apply to ordinary laws?",
        options: ["No, ordinary laws are tested against the Constitution (Articles).", "Yes, indirectly. If an ordinary law violates a provision that is part of the basic structure (like FRs), it is void.", "Yes, explicitly.", "Only to tax laws."],
        correctAnswerIndex: 0, // a) No (tested against Articles)
        explanation: "Ordinary laws are tested against specific provisions, not the 'Basic Structure' doctrine itself."
    },
    {
        question: "Which of the following is NOT considered a basic feature?",
        options: ["The Parliamentary System of Government.", "The Presidential System of Government.", "The Principle of Free and Fair Elections.", "The Independence of the Judiciary."],
        correctAnswerIndex: 1, // b) Presidential System
        explanation: "We have a Parliamentary system."
    },
    {
        question: "The \"Kihoto Hollohan case\" (1993) reinforced:",
        options: ["Democracy.", "Judicial Review as a basic feature.", "Parliamentary Sovereignty.", "Federalism."],
        correctAnswerIndex: 1, // b) Judicial Review
        explanation: "Reinforced Judicial Review."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "Theme: The \"Tyranny of the Unelected\" Debate (2024-25)\nIf Parliament were to pass the 107th Amendment explicitly stating \"No amendment under Article 368 shall be called in question in any court on any ground\":",
        options: ["The Amendment would be valid as it restores the original intent of the Constitution makers.", "The Supreme Court would likely strike it down ab initio because \"Judicial Review\" and the \"Limited Amending Power\" are themselves Basic Features (Minerva Mills case).", "The President would be bound to withhold assent to protect the Constitution.", "It would depend on whether it was ratified by half the states."],
        correctAnswerIndex: 1, // b) Struck down
        explanation: "Limited amending power is a basic feature."
    },
    {
        question: "Critics argue that the Basic Structure doctrine has no textual basis. However, proponents argue it is derived from:",
        options: ["The Preamble (\"We, the People\").", "Article 13 (\"Law\" includes amendments).", "The implied limitation in the word \"Amend\" (Article 368) which means to improve/change but not to destroy.", "Both (a) and (c)."],
        correctAnswerIndex: 3, // d) Both a and c
        explanation: "Derived from Preamble and Implied Limitations."
    },
    {
        question: "Theme: Free & Fair Elections (CEC Appointment Act 2023)\nThe constitutional challenge argues this Act violates the \"Basic Structure\" by compromising:",
        options: ["The Independence of the Election Commission (part of \"Free and Fair Elections\").", "The Separation of Powers.", "The Rule of Law.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Potential impact on all listed features."
    },
    {
        question: "In the Anoop Baranwal case (2023), the Supreme Court directed inclusion of the CJI until a law is made. Now that a law excludes CJI, does the Basic Structure doctrine apply?",
        options: ["No, because the Court's order was temporary.", "Yes, if the new law creates an institution (ECI) that is not \"independent\" enough to ensure free and fair elections, it violates the Basic Structure.", "No, Parliament is supreme in law-making.", "Yes, but only if the law is retrospective."],
        correctAnswerIndex: 1, // b) Yes
        explanation: "Independence must be maintained regardless of temporary orders."
    },
    {
        question: "Theme: Federalism & Article 370 Verdict\nIn the Article 370 Verdict (December 2023), regarding the \"Basic Structure\" challenge (violation of Federalism), the Court held that:",
        options: ["Article 370 was a permanent provision, but Parliament has plenary power.", "Jammu & Kashmir did not possess \"internal sovereignty\" different from other states; thus, its reorganization did not violate the federal basic structure.", "Federalism is not a basic feature for J&K.", "The President's Rule under Article 356 overrides the Basic Structure."],
        correctAnswerIndex: 1, // b) No internal sovereignty
        explanation: "J&K sovereignty was not distinct from other states in this context."
    },
    {
        question: "The Court held that interfering with the elected government's control over bureaucracy in NCT Delhi (2023) violates:",
        options: ["The \"Triple Chain of Accountability\" (Civil Servants -> Ministers -> Legislature -> People), which is essential to \"Parliamentary Democracy\" (Basic Structure).", "Article 370.", "The Basic Structure of the Civil Services.", "Article 14."],
        correctAnswerIndex: 0, // a) Triple Chain of Accountability
        explanation: "Essential to Parliamentary Democracy."
    },
    {
        question: "Theme: Independence of Judiciary (NJAC & Transfers)\nIf the government delays appointments despite reiteration by the Collegium, it arguably violates:",
        options: ["It is a procedural delay.", "The \"Independence of Judiciary\" (Basic Structure) by frustrating the judicial process.", "It is an exercise of Executive power.", "It is a check and balance."],
        correctAnswerIndex: 1, // b) Independence of Judiciary
        explanation: "Frustrating reiteration affects independence."
    },
    {
        question: "Can the \"Transfer of High Court Judges\" be challenged as violating the Basic Structure?",
        options: ["No, transfers are administrative.", "Yes, if the transfer is \"punitive\" and without the consent of the judge, it affects \"Judicial Independence\".", "Yes, but only by the State Government.", "No, the President has absolute power."],
        correctAnswerIndex: 1, // b) Yes, if punitive
        explanation: "Punitive transfers affect judicial independence."
    },
    {
        question: "Theme: Secularism & Preamble\nThe counter-argument relying on the Basic Structure against removing \"Socialist\" and \"Secular\" is:",
        options: ["Concepts were always part of the Basic Structure (S.R. Bommai).", "The 42nd Amendment was validated by the 44th Amendment.", "The Preamble cannot be amended.", "Both (a) and (b)."],
        correctAnswerIndex: 0, // a) Always part of basic structure
        explanation: "Bommai case held secularism is basic structure."
    },
    {
        question: "Does a mandatory Uniform Civil Code (UCC) violate the \"Secular\" basic structure?",
        options: ["Yes, because it interferes with religion.", "No, the Supreme Court has held that Secularism implies the State treating all citizens equally, and a UCC (Article 44) is a step towards secular legal uniformity.", "Yes, if it is based on Hindu laws.", "Only if it bans all rituals."],
        correctAnswerIndex: 1, // b) No
        explanation: "Secular legal uniformity is the goal."
    },
    {
        question: "Theme: Rule of Law & ED/CBI Jurisdiction\nThe Supreme Court in 2023 held that \"piecemeal\" extensions of investigative agency directors undermine:",
        options: ["The independence of investigative agencies, which is crucial for the \"Rule of Law\" (Basic Structure).", "The seniority rules of the Civil Services.", "The Federal structure.", "The Right to Equality."],
        correctAnswerIndex: 0, // a) Independence for Rule of Law
        explanation: "Independence is crucial for Rule of Law."
    },
    {
        question: "If a special law (like PMLA/UAPA) reversals \"Bail is the rule\", does it violate the Basic Structure?",
        options: ["No, Parliament can make strict laws for serious offenses.", "Yes, it violates \"Personal Liberty\" which is a basic feature.", "The Supreme Court has upheld these strict conditions as valid classifications.", "Yes, but only for PMLA."],
        correctAnswerIndex: 2, // c) Valid classifications
        explanation: "Upheld in Vijay Madanlal case."
    },
    {
        question: "Theme: Delimitation 2026 & Federalism\nIf Delimitation reduces seat share of Southern states, it could be challenged as violating:",
        options: ["The \"Federal Balance\" (Basic Structure).", "The \"Democracy\" principle (One Vote, One Value).", "Both (a) and (b) present conflicting interpretations of the Basic Structure.", "Neither; Parliament has absolute power under Article 82."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Conflicting interpretations of Federalism vs Democracy."
    },
    {
        question: "Theme: Assertion & Reason\nAssertion (A): The Basic Structure doctrine limits the \"Constituent Power\" of the Parliament. Reason (R): The Supreme Court held that a limited amending power is itself a basic feature of the Constitution.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): The Ninth Schedule is no longer a \"black hole\" for laws to escape judicial scrutiny. Reason (R): In the I.R. Coelho case, the SC ruled that laws placed in the Ninth Schedule after April 24, 1973, are open to challenge if they violate the Basic Structure.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Critics argue the Basic Structure doctrine is an example of:",
        options: ["Judicial Restraint.", "Judicial Legislation (Overreach).", "Constitutional Interpretation (Activism).", "Executive Interference."],
        correctAnswerIndex: 1, // b) Judicial Legislation
        explanation: "Common critique."
    },
    {
        question: "Can the Supreme Court strike down a Constitutional Amendment before it is passed (at the Bill stage)?",
        options: ["Yes, if it violates the Basic Structure.", "No, judicial review applies only to \"laws\" (Acts) enacted, not Bills (Premature).", "Yes, if the President refers it under Article 143.", "No, never."],
        correctAnswerIndex: 1, // b) No, premature
        explanation: "JR applies to Acts, not Bills."
    },
    {
        question: "The \"Welfare State\" is a basic feature. This forces the State to ensure:",
        options: ["Complete equality of income.", "Social and Economic Justice (Article 38).", "Free food for all.", "100% employment."],
        correctAnswerIndex: 1, // b) Social and Economic Justice
        explanation: "Article 38."
    },
    {
        question: "The Court held that \"Efficiency of Administration\" (Article 335) must be balanced with:",
        options: ["Efficiency is a basic feature.", "Social Justice is a basic feature, and efficiency must be balanced with it (Nagaraj case).", "Reservation is not a fundamental right.", "Both (b) and (c)."],
        correctAnswerIndex: 1, // b) Social Justice balance
        explanation: "Nagaraj case balance."
    },
    {
        question: "Is \"Parliamentary Sovereignty\" a basic feature of the Indian Constitution?",
        options: ["Yes, absolutely.", "No, India has \"Constitutional Sovereignty,\" not Parliamentary Sovereignty.", "Yes, but only in financial matters.", "No, the President is sovereign."],
        correctAnswerIndex: 1, // b) No (Constitutional Sovereignty)
        explanation: "Constitutional Sovereignty."
    },
    {
        question: "The \"Golden Triangle\" (Articles 14, 19, 21) forms the core of the Basic Structure regarding Human Rights. Any amendment affecting these must meet the test of:",
        options: ["Reasonableness.", "Public Interest.", "The \"Essence of Rights\" test (M. Nagaraj).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Cumulative tests."
    },
    {
        question: "In the K.S. Puttaswamy case (Privacy), the Court linked Privacy to:",
        options: ["Dignity of the Individual (Preamble).", "Liberty (Article 21).", "Freedoms (Article 19).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Linked to Preamble, Art 19, and 21."
    },
    {
        question: "The Supreme Court in 2020 suggested that for defection cases:",
        options: ["The Speaker is the final authority.", "An independent \"Permanent Tribunal\" should be set up.", "The Governor should decide.", "The High Court should decide directly."],
        correctAnswerIndex: 1, // b) Permanent Tribunal
        explanation: "Suggested to ensure neutrality."
    },
    {
        question: "The \"L. Chandra Kumar\" case struck down provisions barring jurisdiction in favor of Tribunals because:",
        options: ["High Court fees.", "Access to Justice is a basic feature.", "Armed Forces AFSPA.", "Death Penalty."],
        correctAnswerIndex: 1, // b) Access to Justice
        explanation: "Access to Justice."
    },
    {
        question: "The Sabarimala Review will decide if \"Constitutional Morality\" overrides:",
        options: ["Religious beliefs (Article 25).", "Group rights (Article 26).", "Judicial Precedents.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Wide reach of the review."
    },
    {
        question: "Which of the following is NOT an element of the Basic Structure?",
        options: ["The mandate to build a Socialist state.", "The supremacy of the Constitution.", "The principle of equality.", "The power of Parliament to amend the Constitution."],
        correctAnswerIndex: 3, // d) Power of Parliament
        explanation: "The 'Limited Power' is the feature, not the power itself."
    },
    {
        question: "The \"creamy layer\" exclusion in reservation was held to be a facet of:",
        options: ["Equality (Basic Structure).", "Efficiency.", "Fraternity.", "Liberty."],
        correctAnswerIndex: 0, // a) Equality
        explanation: "Facet of equality."
    },
    {
        question: "Transitioning to a \"Theocratic State\" would violate:",
        options: ["Secularism.", "Democracy.", "Equality.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Violates multiple basic features."
    },
    {
        question: "The \"Venkatachalam Commission\" (2002) was set up to:",
        options: ["Rewrite the Constitution.", "Suggest amendments without altering the Basic Structure.", "Review the Basic Structure doctrine itself.", "Abolish the Rajya Sabha."],
        correctAnswerIndex: 1, // b) Suggest amendments
        explanation: "Review commission."
    },
    {
        question: "The Basic Structure doctrine serves as:",
        options: ["A shield against majoritarianism.", "A check on the amending power.", "A guardian of the \"Identity\" of the Constitution.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Comprehensive role of the doctrine."
    }
];

export const CHAPTER_11_LEVELS: ChapterLevelData = {
    topicId: 11,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 11: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l3-q${i + 1}` }))
        }
    ]
};
