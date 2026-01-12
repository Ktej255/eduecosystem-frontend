
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

export const DAY11_MCQS: MCQ[] = [
    // ==========================================
    // DAY 11: INTEGRATED JUDICIARY (60 Questions)
    // Supreme Court (Ch 26), High Court (Ch 34), Subordinate Courts (Ch 35)
    // ==========================================

    // --- APPOINTMENT & TENURE (SC vs HC) ---
    {
        id: 1,
        question: "The judges of the High Court are appointed by:",
        options: ["Governor", "President", "Chief Justice of India", "Chief Justice of High Court"],
        correctAnswer: 1,
        explanation: "President (Consults CJI + Governor). Governor administers oath, but President appoints.",
        subtopic: "34.1"
    },
    {
        id: 2,
        question: "Is the number of Judges in a High Court fixed by the Constitution?",
        options: ["Yes", "No", "Fixed by Parliament", "Fixed by State Legislature"],
        correctAnswer: 1,
        explanation: "No. It is decided by the President from time to time.",
        subtopic: "34.1"
    },
    {
        id: 3,
        question: "The retirement age of a High Court judge is:",
        options: ["60", "62", "65", "66"],
        correctAnswer: 1,
        explanation: "62 years. (It is 65 for Supreme Court).",
        subtopic: "34.1"
    },
    {
        id: 4,
        question: "Who can transfer a High Court Judge from one HC to another?",
        options: ["President", "CJI", "Governor", "Parliament"],
        correctAnswer: 0,
        explanation: "President (after consultation with CJI).",
        subtopic: "34.1"
    },
    {
        id: 5,
        question: "The salaries of High Court judges are charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of State", "Contingency Fund of India", "Public Account of State"],
        correctAnswer: 1,
        explanation: "Consolidated Fund of STATE. (Difference: Their PENSION is charged on Consolidated Fund of INDIA).",
        subtopic: "34.1"
    },
    {
        id: 6,
        question: "The Pension of a High Court judge is charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of State", "Both equally", "None"],
        correctAnswer: 0,
        explanation: "Consolidated Fund of INDIA. (Crucial distinction).",
        subtopic: "34.1"
    },
    {
        id: 7,
        question: "A High Court Judge submits his resignation to:",
        options: ["Governor", "Chief Justice of HC", "President", "CJI"],
        correctAnswer: 2,
        explanation: "President.",
        subtopic: "34.1"
    },
    {
        id: 8,
        question: "The procedure for removal of a High Court judge is the same as that of:",
        options: ["Supreme Court Judge", "Governor", "State Election Commissioner", "Both A and C"],
        correctAnswer: 3,
        explanation: "Same as SC Judge. (State Election Commissioner is also removed in same manner).",
        subtopic: "34.1"
    },

    // --- JURISDICTION (SC vs HC) ---
    {
        id: 9,
        question: "Which Article empowers High Courts to issue writs?",
        options: ["Article 32", "Article 136", "Article 226", "Article 227"],
        correctAnswer: 2,
        explanation: "Article 226.",
        subtopic: "34.2"
    },
    {
        id: 10,
        question: "The Writ Jurisdiction of the High Court is:",
        options: ["Narrower than SC", "Wider than SC", "Equal to SC", "Discretionary"],
        correctAnswer: 1,
        explanation: "Wider. HC can issue writs for legal rights too ('any other purpose'), SC only for Fundamental Rights.",
        subtopic: "34.2"
    },
    {
        id: 11,
        question: "Under Article 227, the High Court has power of superintendence over:",
        options: ["Only Subordinate Courts", "All courts and tribunals within its territory", "Military Courts", "Only Civil Courts"],
        correctAnswer: 1,
        explanation: "All courts and tribunals (Except military/armed forces tribunals).",
        subtopic: "34.2"
    },
    {
        id: 12,
        question: "Disputes regarding the election of Members of Parliament (MPs) are settled by:",
        options: ["Election Commission", "Supreme Court", "High Court", "President"],
        correctAnswer: 2,
        explanation: "High Court (Original Jurisdiction). Appeal lies to SC.",
        subtopic: "34.2"
    },
    {
        id: 13,
        question: "The concept of 'Circuit Bench' is associated with:",
        options: ["Supreme Court only", "High Courts", "District Courts", "Lok Adalats"],
        correctAnswer: 1,
        explanation: "High Courts often have benches in other cities (e.g., Bombay HC at Nagpur).",
        subtopic: "34.1"
    },
    {
        id: 14,
        question: "Who can extend the jurisdiction of a High Court to a Union Territory?",
        options: ["President", "Parliament", "Supreme Court", "Governor"],
        correctAnswer: 1,
        explanation: "Parliament by law.",
        subtopic: "34.2"
    },

    // --- SUBORDINATE COURTS (Ch 35) ---
    {
        id: 15,
        question: "Appointment of District Judges is made by:",
        options: ["Governor", "Any HC Judge", "President", "State Public Service Commission"],
        correctAnswer: 0,
        explanation: "Governor (in consultation with the High Court).",
        subtopic: "35.1"
    },
    {
        id: 16,
        question: "Who appoints persons (other than district judges) to the judicial service of a state?",
        options: ["Governor + SPSC + HC", "Governor only", "HC only", "SPSC only"],
        correctAnswer: 0,
        explanation: "Governor, after consultation with State Public Service Commission and High Court.",
        subtopic: "35.1"
    },
    {
        id: 17,
        question: "The control over subordinate courts is vested in:",
        options: ["Governor", "Supreme Court", "High Court", "Law Minister"],
        correctAnswer: 2,
        explanation: "High Court (Article 235).",
        subtopic: "35.1"
    },
    {
        id: 18,
        question: "Lok Adalat awards are:",
        options: ["Advisory", "Binding and Final", "Appealable in HC", "Appealable in SC"],
        correctAnswer: 1,
        explanation: "Final and Binding. No appeal lies in any court.",
        subtopic: "35.2"
    },
    {
        id: 19,
        question: "The First Lok Adalat was held in:",
        options: ["Delhi", "Maharashtra", "Gujarat", "Tamil Nadu"],
        correctAnswer: 2,
        explanation: "Gujarat (1982).",
        subtopic: "35.2"
    },
    {
        id: 20,
        question: "Family Courts Act was passed in:",
        options: ["1984", "1990", "1955", "2000"],
        correctAnswer: 0,
        explanation: "1984.",
        subtopic: "35.1"
    },

    // --- SUPREME COURT (Revision & Integration) ---
    {
        id: 21,
        question: "Which statement is TRUE regarding Advisory Jurisdiction (Art 143)?",
        options: ["SC opinion is binding on President", "President is bound to ask SC", "SC must give opinion if referenced", "SC may refuse to give opinion (unless pre-Constitution treaty)"],
        correctAnswer: 3,
        explanation: "SC may refuse to give its opinion on matters of public importance.",
        subtopic: "26.3"
    },
    {
        id: 22,
        question: "Who is the 'Custodian of the Constitution'?",
        options: ["President", "Parliament", "Supreme Court", "PM"],
        correctAnswer: 2,
        explanation: "Supreme Court.",
        subtopic: "26.4"
    },
    {
        id: 23,
        question: "Curative Petition is filed after:",
        options: ["Review Petition dismissal", "SLP dismissal", "High Court judgment", "Mercy Petition"],
        correctAnswer: 0,
        explanation: "After the Review Petition is dismissed (Final remedy).",
        subtopic: "26.3"
    },
    {
        id: 24,
        question: "Original Jurisdiction of SC (Art 131) does NOT cover:",
        options: ["Centre vs State", "State vs State", "Inter-state Water Disputes", "Centre vs UT"],
        correctAnswer: 2,
        explanation: "Inter-state Water Disputes are excluded (Art 262).",
        subtopic: "26.3"
    },
    {
        id: 25,
        question: "The strength of Supreme Court is increased by:",
        options: ["Parliament Act", "Constitutional Amendment", "President Order", "SC Resolution"],
        correctAnswer: 0,
        explanation: "Parliamentary Act (Simple Majority).",
        subtopic: "26.1"
    },
    // More Comparisons
    {
        id: 26,
        question: "Can a High Court interpret the Constitution?",
        options: ["Yes", "No", "Only if SC permits", "Only regarding State laws"],
        correctAnswer: 0,
        explanation: "Yes. High Courts can interpret the Constitution (and check constitutionality of laws).",
        subtopic: "34.2"
    },
    {
        id: 27,
        question: "Who administers oath to the Governor?",
        options: ["President", "CJI", "Chief Justice of HC", "VP"],
        correctAnswer: 2,
        explanation: "Chief Justice of the concerned High Court.",
        subtopic: "32.1"
    },
    {
        id: 28,
        question: "Which is the common High Court for Punjab, Haryana and Chandigarh?",
        options: ["Delhi HC", "Punjab & Haryana HC", "Chandigarh HC", "Allahabad HC"],
        correctAnswer: 1,
        explanation: "Punjab and Haryana High Court.",
        subtopic: "34.1"
    },
    {
        id: 29,
        question: "How many High Courts have jurisdiction over more than one State/UT (excluding their own)?",
        options: ["3", "4", "7", "6"],
        correctAnswer: 2,
        explanation: "Bombay, Calcutta, Guwahati, Kerala, Madras, P&H, J&K (Check current status, usually 7).",
        subtopic: "34.1"
    },
    {
        id: 30,
        question: "Delhi is the only UT to have:",
        options: ["Its own High Court", "A Legislative Council", "A Governor", "Direct election of Governor"],
        correctAnswer: 0,
        explanation: "Delhi is the only UT with its own High Court (J&K is now a UT with HC too, but historically Delhi was unique).",
        subtopic: "34.1"
    },
    {
        id: 31,
        question: "Appointments of persons to be District Judges are posted by:",
        options: ["Governor", "High Court", "Chief Minister", "Law Minister"],
        correctAnswer: 0,
        explanation: "Governor (consulting HC).",
        subtopic: "35.1"
    },
    {
        id: 32,
        question: "Gram Nyayalayas Act was enacted in:",
        options: ["2008", "2000", "2010", "2005"],
        correctAnswer: 0,
        explanation: "2008.",
        subtopic: "35.2"
    },
    {
        id: 33,
        question: "The Presiding officer of a Lok Adalat is usually:",
        options: ["Retired Judicial Officer", "Lay person", "Social worker", "Politician"],
        correctAnswer: 0,
        explanation: "Retired or serving judicial officer.",
        subtopic: "35.2"
    },
    {
        id: 34,
        question: "Legal Services Authorities Act (NALSA) was enacted in:",
        options: ["1987", "1990", "1976", "1980"],
        correctAnswer: 0,
        explanation: "1987 (Came into force in 1995).",
        subtopic: "35.2"
    },
    {
        id: 35,
        question: "Who is the Patron-in-Chief of NALSA?",
        options: ["President", "CJI", "Law Minister", "Attorney General"],
        correctAnswer: 1,
        explanation: "Chief Justice of India.",
        subtopic: "35.2"
    },
    {
        id: 36,
        question: "Who is the Executive Chairman of NALSA?",
        options: ["CJI", "Second Senior-most SC Judge", "Law Minister", "Retired CJI"],
        correctAnswer: 1,
        explanation: "Second Senior-most Judge of Supreme Court.",
        subtopic: "35.2"
    },
    {
        id: 37,
        question: "Free Legal Aid is mandated by Article:",
        options: ["39A", "21", "14", "32"],
        correctAnswer: 0,
        explanation: "Article 39A (DPSP).",
        subtopic: "35.2"
    },
    {
        id: 38,
        question: "Can Lok Adalats handle criminal cases?",
        options: ["All criminal cases", "Compoundable offences only", "Non-compoundable only", "No criminal cases"],
        correctAnswer: 1,
        explanation: "Only COMPOUNDABLE offences (where compromise is allowed by law).",
        subtopic: "35.2"
    },
    {
        id: 39,
        question: "Who can remove a member of State Public Service Commission?",
        options: ["Governor", "President", "CM", "Parliament"],
        correctAnswer: 1,
        explanation: "President (even though appointed by Governor). Same as High Court judge removal analogy (President does removal).",
        subtopic: "34.1"
    },
    {
        id: 40,
        question: "Which Writ is issued to quash the order of a lower court?",
        options: ["Mandamus", "Certiorari", "Quo Warranto", "Habeas Corpus"],
        correctAnswer: 1,
        explanation: "Certiorari.",
        subtopic: "26.3"
    },
    {
        id: 41,
        question: "Which of the following deals with 'Separation of Judiciary from Executive'?",
        options: ["Art 50", "Art 51", "Art 49", "Art 48"],
        correctAnswer: 0,
        explanation: "Article 50.",
        subtopic: "35.1"
    },
    {
        id: 42,
        question: "Judicial Review is NOT mentioned in:",
        options: ["Article 13", "Article 32", "Article 226", "Article 110"],
        correctAnswer: 3,
        explanation: "Not dealing with Money Bills directly. Judical Review is implied in 13, 32, 226.",
        subtopic: "26.4"
    },
    {
        id: 43,
        question: "Who is authorized to appoint the Chief Justice of a High Court?",
        options: ["President", "CJI", "Governor", "Collegium"],
        correctAnswer: 0,
        explanation: "President (Consultation with CJI + Governor).",
        subtopic: "34.1"
    },
    {
        id: 44,
        question: "Can Parliament establish a common High Court for two or more states?",
        options: ["Yes", "No", "Only SC can", "Only President can"],
        correctAnswer: 0,
        explanation: "Yes, by law (7th Constitutional Amendment).",
        subtopic: "34.1"
    },
    {
        id: 45,
        question: "Which High Court has the largest number of benches?",
        options: ["Allahabad", "Bombay", "Guwahati", "Madras"],
        correctAnswer: 2,
        explanation: "Guwahati High Court (It serves Assam, Nagaland, Mizoram, Arunachal Pradesh) - has multiple benches.",
        subtopic: "34.1"
    },
    {
        id: 46,
        question: "Which is the oldest High Court in India?",
        options: ["Calcutta HC", "Bombay HC", "Madras HC", "Allahabad HC"],
        correctAnswer: 0,
        explanation: "Calcutta High Court (Established 1862).",
        subtopic: "34.1"
    },
    {
        id: 47,
        question: "Contempt of Court Act was amended in 2006 to include __ as a defence.",
        options: ["Ignorance", "Truth", "Mistake", "Good faith"],
        correctAnswer: 1,
        explanation: "Truth.",
        subtopic: "26.3"
    },
    {
        id: 48,
        question: "Permanent Lok Adalats are established for:",
        options: ["Public Utility Services", "Criminal Cases", "Family disputes", "Property disputes"],
        correctAnswer: 0,
        explanation: "Public Utility Services (Transport, Postal, etc.).",
        subtopic: "35.2"
    },
    {
        id: 49,
        question: "Maximum limit of pecuniary jurisdiction of Lok Adalat is:",
        options: ["10 Lakhs", "20 Lakhs", "1 Crore", "No limit"],
        correctAnswer: 1,
        explanation: "Check latest. Generally 20 Lakhs for strict cases, but varies. Default answer often 20L in old contexts, but flexible.",
        subtopic: "35.2"
    },
    {
        id: 50,
        question: "Who heads the District Court when dealing with criminal cases?",
        options: ["District Judge", "Sessions Judge", "Chief Judicial Magistrate", "Munsiff"],
        correctAnswer: 1,
        explanation: "Sessions Judge. (Same person is District Judge for civil cases).",
        subtopic: "35.1"
    },
    {
        id: 51,
        question: "A Sessions Judge has power to impose:",
        options: ["Life Imprisonment only", "Death Sentence (with HC confirmation)", "Any sentence including death", "Max 10 years"],
        correctAnswer: 2,
        explanation: "Any sentence authorized by law, but Death Sentence must be confirmed by High Court.",
        subtopic: "35.1"
    },
    {
        id: 52,
        question: "Which Article deals with the appointment of District Judges?",
        options: ["Art 233", "Art 234", "Art 235", "Art 236"],
        correctAnswer: 0,
        explanation: "Article 233.",
        subtopic: "35.1"
    },
    {
        id: 53,
        question: "Subordinate courts are also called:",
        options: ["Lower Courts", "District Courts", "Mofussil Courts", "All of above"],
        correctAnswer: 3,
        explanation: "All of the above.",
        subtopic: "35.1"
    },
    {
        id: 54,
        question: "The power of Judicial Review in India is:",
        options: ["Limited", "Unlimited", "Absolute", "None"],
        correctAnswer: 0,
        explanation: "Limited by the text of the Constitution (Procedure Established by Law vs Due Process).",
        subtopic: "26.4"
    },
    {
        id: 55,
        question: "Does the Constitution define 'Contempt of Court'?",
        options: ["Yes", "No", "Partially", "In Schedule 10"],
        correctAnswer: 1,
        explanation: "No. It gives power to punish, but does not define it (Contempt of Courts Act 1971 defines it).",
        subtopic: "26.3"
    },
    {
        id: 56,
        question: "PIL petitions can be filed in:",
        options: ["Supreme Court only", "High Courts only", "Both SC and HC", "District Courts"],
        correctAnswer: 2,
        explanation: "Both Supreme Court and High Courts.",
        subtopic: "26.4"
    },
    {
        id: 57,
        question: "The concept of 'rule of law' is a part of:",
        options: ["Basic Structure", "DPSP", "Preamble only", "Fundamental Duties"],
        correctAnswer: 0,
        explanation: "Basic Structure of the Constitution.",
        subtopic: "26.4"
    },
    {
        id: 58,
        question: "Who appoints the officers and servants of the Supreme Court?",
        options: ["President", "CJI", "UPSC", "Law Minister"],
        correctAnswer: 1,
        explanation: "Chief Justice of India (or judge directed by him).",
        subtopic: "26.1"
    },
    {
        id: 59,
        question: "The administrative expenses of HC are charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of State", "Voted by Assembly", "Grants"],
        correctAnswer: 1,
        explanation: "Consolidated Fund of State.",
        subtopic: "34.1"
    },
    {
        id: 60,
        question: "To remove a Judge, the motion does not fall if:",
        options: ["LS dissolves", "RS adjourns", "Session prorogues", "None"],
        correctAnswer: 0,
        explanation: "A removal motion kept pending in Lok Sabha DOES lapse on dissolution. But if it originate in RS, it does not.",
        subtopic: "26.2"
    }
];

export default DAY11_MCQS;
