
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

export const DAY21_MCQS: MCQ[] = [
    // ==========================================
    // WEEK 1 & 2 MIX (20 Questions)
    // ==========================================
    {
        id: 1,
        question: "Which Schedule contains the Union List, State List and Concurrent List?",
        options: ["Seventh Schedule", "Eighth Schedule", "Ninth Schedule", "Sixth Schedule"],
        correctAnswer: 0,
        explanation: "Seventh Schedule (Article 246).",
        subtopic: "14.1"
    },
    {
        id: 2,
        question: "President's Rule (Article 356) can be imposed when:",
        options: ["Financial instability", "Failure of constitutional machinery in State", "War", "Internal disturbance"],
        correctAnswer: 1,
        explanation: "Failure of constitutional machinery in the State.",
        subtopic: "16.1"
    },
    {
        id: 3,
        question: "Who administers oath to the President?",
        options: ["Vice President", "PM", "Chief Justice of India", "Speaker"],
        correctAnswer: 2,
        explanation: "Chief Justice of India.",
        subtopic: "17.1"
    },
    {
        id: 4,
        question: "Money Bill can be introduced in:",
        options: ["Only Lok Sabha", "Only Rajya Sabha", "Either House", "Joint Sitting"],
        correctAnswer: 0,
        explanation: "Only in Lok Sabha.",
        subtopic: "22.2"
    },
    {
        id: 5,
        question: "Anti-Defection Law is contained in:",
        options: ["10th Schedule", "11th Schedule", "9th Schedule", "8th Schedule"],
        correctAnswer: 0,
        explanation: "10th Schedule (added by 52nd Amendment).",
        subtopic: "23.2"
    },
    {
        id: 6,
        question: "Preamble was amended by which Amendment?",
        options: ["42nd", "44th", "86th", "None"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976 (Added Secular, Socialist, Integrity).",
        subtopic: "4.1"
    },
    {
        id: 7,
        question: "Fundamental Rights are suspended during National Emergency except:",
        options: ["Article 19", "Article 20 and 21", "Article 14", "Article 32"],
        correctAnswer: 1,
        explanation: "Article 20 and 21 cannot be suspended even during National Emergency.",
        subtopic: "16.1"
    },
    {
        id: 8,
        question: "Quorum to constitute a meeting of Lok Sabha?",
        options: ["1/10th of total members", "1/5th", "1/3rd", "50 members"],
        correctAnswer: 0,
        explanation: "One-tenth of the total number of members.",
        subtopic: "22.1"
    },
    {
        id: 9,
        question: "Who is the ex-officio Chairman of Rajya Sabha?",
        options: ["President", "Vice President", "PM", "Deeputy Chairman"],
        correctAnswer: 1,
        explanation: "Vice President of India.",
        subtopic: "22.1"
    },
    {
        id: 10,
        question: "Supreme Court judges retire at age of:",
        options: ["60", "62", "65", "70"],
        correctAnswer: 2,
        explanation: "65 years.",
        subtopic: "26.1"
    },
    { id: 11, question: "Panchayati Raj received constitutional status by?", options: ["73rd Amd", "74th Amd", "42nd Amd", "44th Amd"], correctAnswer: 0, subtopic: "39.1" },
    { id: 12, question: "Uniform Civil Code is a?", options: ["FR", "DPSP", "FD", "Legal Right"], correctAnswer: 1, subtopic: "9.2" },
    { id: 13, question: "Right to Property is a?", options: ["Fundamental Right", "Legal Right", "Moral Right", "Natural Right"], correctAnswer: 1, subtopic: "8.1" },
    { id: 14, question: "Sarkaria Commission dealt with?", options: ["Centre-State Relations", "Banking", "Elections", "Education"], correctAnswer: 0, subtopic: "15.2" },
    { id: 15, question: "First Law Officer of India?", options: ["CJI", "Attorney General", "Law Minister", "Solicitor General"], correctAnswer: 1, subtopic: "38.3" },
    { id: 16, question: "Joint Sitting is summoned by?", options: ["Speaker", "President", "PM", "Chairman RS"], correctAnswer: 1, subtopic: "22.3" },
    { id: 17, question: "Fundamental Duties were borrowed from?", options: ["USA", "USSR", "UK", "Canada"], correctAnswer: 1, subtopic: "10.1" },
    { id: 18, question: "Residuary powers vest with?", options: ["Centre", "States", "Both", "President"], correctAnswer: 0, subtopic: "14.1" },
    { id: 19, question: "Cabinet word mentioned in Constitution?", options: ["Article 352", "Article 74", "Article 75", "Not mentioned"], correctAnswer: 0, subtopic: "19.1" }, // Since 44th Amd
    { id: 20, question: "Procedure established by law vs Due process?", options: ["Article 21", "Article 14", "Article 19", "Article 32"], correctAnswer: 0, subtopic: "8.1" },

    // ==========================================
    // WEEK 3 MIX (20 Questions - Judiciary/Fed/Bodies)
    // ==========================================
    {
        id: 21,
        question: "GST Council Chairperson?",
        options: ["PM", "FM", "President", "RBI Gov"],
        correctAnswer: 1,
        explanation: "Union Finance Minister.",
        subtopic: "47.2"
    },
    {
        id: 22,
        question: "Tribunals Article?",
        options: ["323A", "324", "326", "320"],
        correctAnswer: 0,
        explanation: "Article 323A (Administrative Tribunals).",
        subtopic: "36.1"
    },
    {
        id: 23,
        question: "NCBC Constitutional status year?",
        options: ["2018", "2019", "2015", "1993"],
        correctAnswer: 0,
        explanation: "2018 (102nd Amendment).",
        subtopic: "39.2"
    },
    {
        id: 24,
        question: "Who removes SPSC members?",
        options: ["Governor", "President", "CM", "HC Judge"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "38.2"
    },
    {
        id: 25,
        question: "Finance Commission formed every?",
        options: ["5 years", "6 years", "4 years", "10 years"],
        correctAnswer: 0,
        explanation: "5 years.",
        subtopic: "22.1"
    },
    {
        id: 26,
        question: "NITI Aayog Chairman?",
        options: ["President", "PM", "Finance Minister", "Planning Minister"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "55.2"
    },
    {
        id: 27,
        question: "CAG removal grounds same as?",
        options: ["SC Judge", "Minister", "Governor", "MP"],
        correctAnswer: 0,
        explanation: "Judge of Supreme Court.",
        subtopic: "25.1"
    },
    {
        id: 28,
        question: "Article 44 deals with?",
        options: ["UCC", "Village Panchayat", "Education", "Wages"],
        correctAnswer: 0,
        explanation: "Uniform Civil Code.",
        subtopic: "9.2"
    },
    {
        id: 29,
        question: "Linguistic Minorities Special Officer Article?",
        options: ["350B", "340", "342", "351"],
        correctAnswer: 0,
        explanation: "Article 350B.",
        subtopic: "39.3"
    },
    {
        id: 30,
        question: "Election Commission consists of CAN & ?",
        options: ["2 ECs", "3 ECs", "4 ECs", "Fixed by President"],
        correctAnswer: 3,
        explanation: "Such number of other ECs as the President may fix.",
        subtopic: "38.1"
    },
    { id: 31, question: "EVM first used in?", options: ["Kerala", "Goa", "Delhi", "UP"], correctAnswer: 0, subtopic: "38.1" },
    { id: 32, question: "PIL pioneer judge?", options: ["P.N. Bhagwati", "Chandrachud", "Hidayatullah", "Ray"], correctAnswer: 0, subtopic: "30.1" },
    { id: 33, question: "Subordinate Courts Article?", options: ["233-237", "214-231", "124-147", "300A"], correctAnswer: 0, subtopic: "37.1" },
    { id: 34, question: "Voting Age 21 to 18 Amd?", options: ["61st", "69th", "73rd", "86th"], correctAnswer: 0, subtopic: "38.1" },
    { id: 35, question: "Who appoints District Judges?", options: ["Governor", "President", "CJI", "CM"], correctAnswer: 0, subtopic: "37.1" },
    { id: 36, question: "Term of UPSC Member?", options: ["6 yrs/65 age", "5 yrs/65 age", "6 yrs/62 age", "5 yrs/60 age"], correctAnswer: 0, subtopic: "38.1" },
    { id: 37, question: "Who appoints National Commission for SC Chair?", options: ["President", "PM", "Speaker", "CJI"], correctAnswer: 0, subtopic: "39.2" },
    { id: 38, question: "Finance Commission recommendations?", options: ["Advisory", "Binding", "Mandatory", "Statutory"], correctAnswer: 0, subtopic: "22.1" },
    { id: 39, question: "Article 40?", options: ["Village Panchayats", "UCC", "Cow Slaughter", "Separation of Judiciary"], correctAnswer: 0, subtopic: "9.2" },
    { id: 40, question: "Fundamentals Duties non-justiciable?", options: ["Yes", "No", "Partially", "None"], correctAnswer: 0, subtopic: "10.1" },

    // ==========================================
    // TOUGH & INTEGRATED (20 Questions)
    // ==========================================
    {
        id: 41,
        question: "Which writ is issued to squash the order of a lower court?",
        options: ["Certiorari", "Mandamus", "Quo-Warranto", "Habeas Corpus"],
        correctAnswer: 0,
        explanation: "Certiorari.",
        subtopic: "32.1"
    },
    {
        id: 42,
        question: "Who can remove the Vice-President?",
        options: ["Parliament", "Rajya Sabha only", "President", "Supreme Court"],
        correctAnswer: 0,
        explanation: "Resolution by RS passed by effective majority and agreed to by LS.",
        subtopic: "18.1"
    },
    {
        id: 43,
        question: "Legislative Council creation/abolition Article?",
        options: ["169", "170", "171", "168"],
        correctAnswer: 0,
        explanation: "Article 169.",
        subtopic: "33.1"
    },
    {
        id: 44,
        question: "Maximum gap between two sessions of Parliament?",
        options: ["6 months", "3 months", "9 months", "1 year"],
        correctAnswer: 0,
        explanation: "Six months.",
        subtopic: "22.1"
    },
    {
        id: 45,
        question: "Who decides disqualification under 10th Schedule?",
        options: ["Presiding Officer of House", "President", "ECI", "Court"],
        correctAnswer: 0,
        explanation: "Chairman/Speaker of the House.",
        subtopic: "23.2"
    },
    {
        id: 46,
        question: "Casting vote in Parliament is exercised by?",
        options: ["Speaker", "PM", "Leader of Opposition", "Secretary General"],
        correctAnswer: 0,
        explanation: "Speaker (in case of tie only).",
        subtopic: "22.1"
    },
    {
        id: 47,
        question: "Money Bill can be rejected by Rajya Sabha?",
        options: ["No", "Yes", "Yes with reason", "Only for 6 months"],
        correctAnswer: 0,
        explanation: "No. RS can only delay for 14 days.",
        subtopic: "22.2"
    },
    {
        id: 48,
        question: "Who appoints the PM?",
        options: ["President", "Lok Sabha", "Majority Party", "Predecessor PM"],
        correctAnswer: 0,
        explanation: "President (Article 75).",
        subtopic: "19.1"
    },
    {
        id: 49,
        question: "Ordinance making power of President Article?",
        options: ["123", "213", "143", "52"],
        correctAnswer: 0,
        explanation: "Article 123.",
        subtopic: "17.4"
    },
    {
        id: 50,
        question: "Advisory Jurisdiction of Supreme Court Article?",
        options: ["143", "141", "136", "131"],
        correctAnswer: 0,
        explanation: "Article 143.",
        subtopic: "26.3"
    },
    {
        id: 51,
        question: "Governor's Pardoning power Article?",
        options: ["161", "72", "163", "213"],
        correctAnswer: 0,
        explanation: "Article 161 (cannot pardon death sentence).",
        subtopic: "30.1"
    },
    {
        id: 52,
        question: "Original Jurisdiction of SC deals with?",
        options: ["Federal disputes", "Writs", "Advice", "Appeals"],
        correctAnswer: 0,
        explanation: "Centre-State or Inter-State disputes (Article 131).",
        subtopic: "26.2"
    },
    {
        id: 53,
        question: "Public Accounts Committee Chairman is usually?",
        options: ["From Opposition", "From Ruling Party", "Speaker", "Deputy Speaker"],
        correctAnswer: 0,
        explanation: "From Opposition (Convention since 1967).",
        subtopic: "23.1"
    },
    {
        id: 54,
        question: "Estimates Committee has members from?",
        options: ["Lok Sabha only", "Both Houses", "Rajya Sabha only", "None"],
        correctAnswer: 0,
        explanation: "Lok Sabha only (30 members).",
        subtopic: "23.1"
    },
    {
        id: 55,
        question: "No-Confidence Motion needs support of how many members to be admitted?",
        options: ["50", "100", "20", "10"],
        correctAnswer: 0,
        explanation: "50 members.",
        subtopic: "22.5"
    },
    {
        id: 56,
        question: "Star Campaigner expenditure limits?",
        options: ["Exempted if within rules", "Counted in candidate", "Partially counted", "No limit"],
        correctAnswer: 0,
        explanation: "Exempted from candidate's expenditure limit (travel expenses).",
        subtopic: "93.1"
    },
    {
        id: 57,
        question: "Right to Privacy is Fundamental Right under?",
        options: ["Article 21", "Article 19", "Article 14", "Article 25"],
        correctAnswer: 0,
        explanation: "Article 21 (Puttaswamy Judgment).",
        subtopic: "8.1"
    },
    {
        id: 58,
        question: "EWS Reservation Amendment?",
        options: ["103rd", "102nd", "104th", "100th"],
        correctAnswer: 0,
        explanation: "103rd Amendment Act, 2019.",
        subtopic: "8.1"
    },
    {
        id: 59,
        question: "Who can dissolve Lok Sabha?",
        options: ["President", "PM", "Speaker", "CJI"],
        correctAnswer: 0,
        explanation: "President (usually on advice of Council of Ministers).",
        subtopic: "22.1"
    },
    {
        id: 60,
        question: "Pocket Veto was used by Zail Singh for?",
        options: ["Post Office Bill", "Dowry Bill", "Banking Bill", "PEPSU Bill"],
        correctAnswer: 0,
        explanation: "Indian Post Office (Amendment) Bill, 1986.",
        subtopic: "17.4"
    }
];

export default DAY21_MCQS;
