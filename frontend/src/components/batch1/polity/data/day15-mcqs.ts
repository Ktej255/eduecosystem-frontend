
export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    level?: string;
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

export const DAY15_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 37: SUBORDINATE COURTS (20 Questions)
    // ==========================================
    {
        id: 1,
        question: "Who appoints the District Judges?",
        options: ["President", "Governor", "Chief Justice of High Court", "Chief Minister"],
        correctAnswer: 1,
        explanation: "Governor appoints District Judges in consultation with the High Court (Article 233).",
        subtopic: "37.1"
    },
    {
        id: 2,
        question: "Which Article deals with the control over subordinate courts?",
        options: ["Article 233", "Article 234", "Article 235", "Article 236"],
        correctAnswer: 2,
        explanation: "Article 235 vests the control over subordinate courts in the High Court.",
        subtopic: "37.3"
    },
    {
        id: 3,
        question: "To be appointed as a District Judge, a person should be an advocate for a minimum of:",
        options: ["5 years", "7 years", "10 years", "3 years"],
        correctAnswer: 1,
        explanation: "7 years of practice as an advocate or pleader.",
        subtopic: "37.1"
    },
    {
        id: 4,
        question: "The 'Sessions Judge' deals with:",
        options: ["Civil cases", "Criminal cases", "Revenue cases", "Constitutional cases"],
        correctAnswer: 1,
        explanation: "Sessions Judge deals with Criminal cases. (District Judge deals with Civil cases).",
        subtopic: "37.2"
    },
    {
        id: 5,
        question: "A death sentence passed by a Sessions Judge must be confirmed by:",
        options: ["Supreme Court", "High Court", "Governor", "President"],
        correctAnswer: 1,
        explanation: "It must be confirmed by the High Court before execution.",
        subtopic: "37.2"
    },
    {
        id: 6,
        question: "Who determines the posting and promotion of District Judges?",
        options: ["Governor", "High Court", "State Govt", "UPSC"],
        correctAnswer: 1,
        explanation: "High Court (Art 235).",
        subtopic: "37.3"
    },
    {
        id: 7,
        question: "Lok Adalats have been given statutory status under which Act?",
        options: ["Legal Services Authorities Act, 1987", "Arbitration Act, 1996", "Civil Procedure Code", "Local Laws Act"],
        correctAnswer: 0,
        explanation: "Legal Services Authorities Act, 1987.",
        subtopic: "37.4"
    },
    {
        id: 8,
        question: "The decision of a Lok Adalat is:",
        options: ["Binding", "Non-binding", "Appealable to HC", "Appealable to SC"],
        correctAnswer: 0,
        explanation: "Final and binding on all parties. No appeal lies to any court.",
        subtopic: "37.4"
    },
    {
        id: 9,
        question: "Gram Nyayalayas were established by an Act of:",
        options: ["2005", "2008", "2010", "2000"],
        correctAnswer: 1,
        explanation: "Gram Nyayalayas Act, 2008.",
        subtopic: "37.5"
    },
    {
        id: 10,
        question: "First Lok Adalat was held in:",
        options: ["Delhi", "Gujarat", "Maharashtra", "Tamil Nadu"],
        correctAnswer: 1,
        explanation: "Gujarat (1982) as a voluntary conciliation agency.",
        subtopic: "37.4"
    },
    {
        id: 11,
        question: "Who heads the District Legal Services Authority?",
        options: ["District Collector", "District Judge", "Chief Judicial Magistrate", "SP"],
        correctAnswer: 1,
        explanation: "District Judge is the Ex-Officio Chairman.",
        subtopic: "37.7"
    },
    {
        id: 12,
        question: "Can Lok Adalats take up cases at pre-litigation stage?",
        options: ["Yes", "No", "Only Civil", "Only Matrimonial"],
        correctAnswer: 0,
        explanation: "Yes, they can take up pending cases as well as pre-litigation disputes.",
        subtopic: "37.4"
    },
    {
        id: 13,
        question: "Family Courts Act was enacted in:",
        options: ["1984", "1987", "1990", "1980"],
        correctAnswer: 0,
        explanation: "Family Courts Act, 1984.",
        subtopic: "37.6"
    },
    {
        id: 14,
        question: "Permanent Lok Adalats deal with:",
        options: ["Public Utility Services", "Criminal Cases", "Constitutional Cases", "All Civil Cases"],
        correctAnswer: 0,
        explanation: "Public Utility Services (Transport, Postal, etc) up to Rs 1 Crore.",
        subtopic: "37.4"
    },
    {
        id: 15,
        question: "Is Legal representation allowed in Family Courts?",
        options: ["Allowed as right", "Not allowed as right", "Mandatory", "Only for women"],
        correctAnswer: 1,
        explanation: "Lawyers are generally not allowed as a matter of right.",
        subtopic: "37.6"
    },
    {
        id: 16,
        question: "The Chief Judicial Magistrate (CJM) can sentence up to:",
        options: ["3 years", "5 years", "7 years", "Life"],
        correctAnswer: 2,
        explanation: "7 years imprisonment.",
        subtopic: "37.2"
    },
    {
        id: 17,
        question: "Who appoints members of the State Judicial Service (other than Dist Judges)?",
        options: ["High Court", "Governor after consultation with SPSC and HC", "Governor only", "SPSC only"],
        correctAnswer: 1,
        explanation: "Governor after consultation with SPSC and High Court (Art 234).",
        subtopic: "37.1"
    },
    {
        id: 18,
        question: "Gram Nyayalayas are presided over by:",
        options: ["Sarpanch", "Nyayadhikari", "District Judge", "Collector"],
        correctAnswer: 1,
        explanation: "Nyayadhikari (appointed by State Govt in consult with HC).",
        subtopic: "37.5"
    },
    {
        id: 19,
        question: "Gram Nyayalayas follow summary procedure in:",
        options: ["Civil cases", "Criminal cases", "Both", "None"],
        correctAnswer: 1,
        explanation: "Summary procedure in Criminal cases.",
        subtopic: "37.5"
    },
    {
        id: 20,
        question: "Which Article separates Judiciary from Executive?",
        options: ["Article 50", "Article 51", "Article 49", "Article 48"],
        correctAnswer: 0,
        explanation: "Article 50 (DPSP).",
        subtopic: "9.1"
    },

    // ==========================================
    // CHAPTER 36: TRIBUNALS (20 Questions)
    // ==========================================
    {
        id: 21,
        question: "Part XIV-A (Tribunals) was added by:",
        options: ["42nd Amendment", "44th Amendment", "25th Amendment", "61st Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "36.1"
    },
    {
        id: 22,
        question: "Administrative Tribunals are under Article:",
        options: ["323A", "323B", "324", "320"],
        correctAnswer: 0,
        explanation: "Article 323A.",
        subtopic: "36.2"
    },
    {
        id: 23,
        question: "Who can establish Administrative Tribunals (323A)?",
        options: ["Parliament only", "Parliament & State Leg", "President", "SC"],
        correctAnswer: 0,
        explanation: "Parliament only.",
        subtopic: "36.2"
    },
    {
        id: 24,
        question: "Who can establish Tribunals for other matters (323B)?",
        options: ["Parliament only", "State Leg only", "Both Parliament and State Leg", "President"],
        correctAnswer: 2,
        explanation: "Both Parliament and State Legislatures (based on legislative competence).",
        subtopic: "36.2"
    },
    {
        id: 25,
        question: "Who appoints the Chairman of CAT (Central Admin Tribunal)?",
        options: ["President", "CJI", "PM", "Law Minister"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "36.1"
    },
    {
        id: 26,
        question: "Is CAT bound by the procedure of Civil Procedure Code (1908)?",
        options: ["Yes", "No", "Partially", "Only in civil matters"],
        correctAnswer: 1,
        explanation: "No. It is guided by Principles of Natural Justice.",
        subtopic: "36.1"
    },
    {
        id: 27,
        question: "Appeals against CAT orders lie to:",
        options: ["Supreme Court directly", "High Court (Division Bench)", "President", "Review only"],
        correctAnswer: 1,
        explanation: "To the concerned High Court Division Bench (L. Chandra Kumar case). Earlier it was SC.",
        subtopic: "36.3"
    },
    {
        id: 28,
        question: "Which case declared judicial review of HCs over Tribunals as Basic Structure?",
        options: ["Sampath Kumar case", "Chandra Kumar case", "Minerva Mills case", "Kesavananda case"],
        correctAnswer: 1,
        explanation: "L. Chandra Kumar vs Union of India (1997).",
        subtopic: "36.3"
    },
    {
        id: 29,
        question: "SAT (State Admin Tribunals) are established by:",
        options: ["Governor", "State Govt", "Parliament", "President"],
        correctAnswer: 3,
        explanation: "Technically established by Centre (Parliament/Notification) on request of State. But Art 323A says Parliament.",
        subtopic: "36.1"
    },
    {
        id: 30,
        question: "Article 323B covers:",
        options: ["Taxation", "Land Reforms", "Labour", "All of above"],
        correctAnswer: 3,
        explanation: "Taxation, Foreign exchange, Industrial/Labour, Land reforms, Ceiling on urban property, etc.",
        subtopic: "36.2"
    },
    {
        id: 31,
        question: "Tribunals Reform Act was passed in:",
        options: ["2021", "2019", "2017", "2023"],
        correctAnswer: 0,
        explanation: "Tribunals Reforms Act, 2021 (set terms and conditions).",
        subtopic: "36.1"
    },
    {
        id: 32,
        question: "Term of office for defects in Tribunal Members currently (post 2021 Act)?",
        options: ["4 years", "5 years", "3 years", "6 years"],
        correctAnswer: 0,
        explanation: "4 years.",
        subtopic: "36.1"
    },
    {
        id: 33,
        question: "National Green Tribunal (NGT) was established in:",
        options: ["2010", "2005", "2015", "2000"],
        correctAnswer: 0,
        explanation: "2010.",
        subtopic: "36.4"
    },
    {
        id: 34,
        question: "NCLT deals with:",
        options: ["Company Law", "Income Tax", "Environment", "Consumers"],
        correctAnswer: 0,
        explanation: "Company Law matters (National Company Law Tribunal).",
        subtopic: "36.4"
    },
    {
        id: 35,
        question: "Can Parliament establish hierarchy of tribunals?",
        options: ["Yes", "No", "Only for 323B", "Only for 323A"],
        correctAnswer: 2,
        explanation: "Clause 323B allows hierarchy. 323A allows only one Central and State tribunals.",
        subtopic: "36.2"
    },
    {
        id: 36,
        question: "Is CAT a constitutional body?",
        options: ["Yes", "No", "Statutory", "Executive"],
        correctAnswer: 1,
        explanation: "It is a Statutory body (Administrative Tribunals Act 1985), deriving authority from Art 323A.",
        subtopic: "36.1"
    },
    {
        id: 37,
        question: "Principal Bench of CAT is in:",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        correctAnswer: 1,
        explanation: "Delhi.",
        subtopic: "36.1"
    },
    {
        id: 38,
        question: "Armed Forces Tribunal (AFT) established in:",
        options: ["2007", "2009", "2005", "2011"],
        correctAnswer: 0,
        explanation: "Armed Forces Tribunal Act, 2007.",
        subtopic: "36.4"
    },
    {
        id: 39,
        question: "Can Civil Courts try matters covered by CAT?",
        options: ["Yes", "No", "With SC permission", "Sometimes"],
        correctAnswer: 1,
        explanation: "No, jurisdiction of civil courts is barred.",
        subtopic: "36.1"
    },
    {
        id: 40,
        question: "AFT appeals lie to:",
        options: ["High Court", "Supreme Court", "President", "None"],
        correctAnswer: 1,
        explanation: "Directly to Supreme Court (Generally). Though HCs also claim writ jurisdiction.",
        subtopic: "36.4"
    },

    // ==========================================
    // JUDICIAL REVIEW & PIL & ACTIVISM (20 Questions)
    // ==========================================
    {
        id: 41,
        question: "The concept of Judicial Review in India is borrowed from:",
        options: ["UK", "USA", "Canada", "Australia"],
        correctAnswer: 1,
        explanation: "USA.",
        subtopic: "28.1"
    },
    {
        id: 42,
        question: "Judicial Review applies to:",
        options: ["Legislative enactments", "Executive orders", "Constitutional Amendments", "All of the above"],
        correctAnswer: 3,
        explanation: "All of them can be challenged.",
        subtopic: "28.1"
    },
    {
        id: 43,
        question: "Source of Judicial Review power in Constitution:",
        options: ["Art 13", "Art 32", "Art 226", "All of above"],
        correctAnswer: 3,
        explanation: "All provide basis for JR.",
        subtopic: "28.1"
    },
    {
        id: 44,
        question: "Which Schedule was originally immune from Judicial Review?",
        options: ["9th", "10th", "11th", "12th"],
        correctAnswer: 0,
        explanation: "9th Schedule (Article 31B).",
        subtopic: "28.2"
    },
    {
        id: 45,
        question: "Concept of PIL originated in:",
        options: ["UK", "USA", "India", "Australia"],
        correctAnswer: 1,
        explanation: "USA (mid 1960s).",
        subtopic: "30.1"
    },
    {
        id: 46,
        question: "Who are the pioneers of PIL in India?",
        options: ["Justice Bhagwati & Krishna Iyer", "Justice Hidayatullah", "Justice Ray", "Justice Beg"],
        correctAnswer: 0,
        explanation: "Justice V.R. Krishna Iyer and Justice P.N. Bhagwati.",
        subtopic: "30.1"
    },
    {
        id: 47,
        question: "First reported case of PIL in India?",
        options: ["Hussainara Khatoon case", "Minerva Mills", "Golaknath", "Kesavananda"],
        correctAnswer: 0,
        explanation: "Hussainara Khatoon case (1979) regarding undertrials.",
        subtopic: "30.1"
    },
    {
        id: 48,
        question: "Scope of Locus Standi in PIL is:",
        options: ["Strict", "Relaxed", "Abolished", "Same as civil suit"],
        correctAnswer: 1,
        explanation: "Relaxed. Any public spirited person can file.",
        subtopic: "30.2"
    },
    {
        id: 49,
        question: "Judicial Activism implies:",
        options: ["Judicial Tyranny", "Proactive role of judiciary", "Judiciary making laws", "None"],
        correctAnswer: 1,
        explanation: "Proactive role of judiciary in protecting citizens' rights.",
        subtopic: "29.1"
    },
    {
        id: 50,
        question: "Judicial Restraint advocates:",
        options: ["Interference in executive", "Limited role of judiciary", "Supremacy of Judges", "Overturning laws frequently"],
        correctAnswer: 1,
        explanation: "Limited role, deferring to elected representatives.",
        subtopic: "29.2"
    },
    {
        id: 51,
        question: "Can PIL be filed against private individuals?",
        options: ["Yes", "No", "Only if state party", "Generally No"],
        correctAnswer: 3,
        explanation: "Generally No, primarily against State/Public Authorities. But exceptions exist for private bodies performing public duty.",
        subtopic: "30.3"
    },
    {
        id: 52,
        question: "'Epistolary Jurisdiction' refers to:",
        options: ["Treating letters as writs", "Jurisdiction over post office", "Jurisdiction over epics", "None"],
        correctAnswer: 0,
        explanation: "Treating letters/telegrams as writ petitions (PIL).",
        subtopic: "30.2"
    },
    {
        id: 53,
        question: "Basic Structure doctrine is a form of:",
        options: ["Judicial Restraint", "Judicial Activism", "Legislative Power", "Example of UK Law"],
        correctAnswer: 1,
        explanation: "It is an example of Judicial Activism (Judicial Invention).",
        subtopic: "29.1"
    },
    {
        id: 54,
        question: "Article 142 refers to:",
        options: ["Complete Justice", "Special Leave", "Advisory Jurisdiction", "Writ Jurisdiction"],
        correctAnswer: 0,
        explanation: "Enforcement of decrees/orders for doing 'complete justice'. Tool for activism.",
        subtopic: "26.3"
    },
    {
        id: 55,
        question: "Vishaka Guidelines (1997) is an example of:",
        options: ["Judicial Legislation/Activism", "Executive Order", "Parliament Act", "Treaty"],
        correctAnswer: 0,
        explanation: "Supreme Court laying down law (Guidelines against Sexual Harassment) in absence of legislation.",
        subtopic: "29.1"
    },
    {
        id: 56,
        question: "Which of the following is NOT a ground for PIL?",
        options: ["Bonded Labour", "Women Harassment", "Personal Service Matter", "Environmental Pollution"],
        correctAnswer: 2,
        explanation: "Service matters (Pension, Salary etc of individuals) are generally NOT entertained as PIL.",
        subtopic: "30.3"
    },
    {
        id: 57,
        question: "Rule of Law is embodied in:",
        options: ["Article 14", "Article 32", "Article 21", "Article 19"],
        correctAnswer: 0,
        explanation: "Article 14.",
        subtopic: "7.1"
    },
    {
        id: 58,
        question: "Due Process of Law is explicitly mentioned in Indian Constitution? (Before Maneka Gandhi)",
        options: ["Yes", "No", "In Preamble", "In Art 19"],
        correctAnswer: 1,
        explanation: "No. The text says 'Procedure Established by Law'. Maneka Gandhi case introduced Due Process via interpretation.",
        subtopic: "7.1"
    },
    {
        id: 59,
        question: "SR Bommai Case (1994) dealt with:",
        options: ["President Rule (Art 356)", "Reservation", "Basic Structure", "Panchayats"],
        correctAnswer: 0,
        explanation: "President's Rule and Secularism.",
        subtopic: "16.1"
    },
    {
        id: 60,
        question: "Mandal Case (Indra Sawhney 1992) dealt with:",
        options: ["Reservation for OBCs", "SC/ST Atrocities", "EWS", "Women Rights"],
        correctAnswer: 0,
        explanation: "Reservation for OBCs (27%) and Creamy Layer concept.",
        subtopic: "7.1"
    }
];

export default DAY15_MCQS;
