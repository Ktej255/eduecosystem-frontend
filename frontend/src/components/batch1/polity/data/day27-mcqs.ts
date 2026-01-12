
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

export const DAY27_MCQS: MCQ[] = [
    // ==========================================
    // LAW OFFICERS REVISION
    // ==========================================
    {
        id: 1,
        question: "Who appoints the Attorney General of India?",
        options: ["PM", "President", "CJI", "Law Minister"],
        correctAnswer: 1,
        explanation: "President (Article 76).",
        subtopic: "38.3"
    },
    {
        id: 2,
        question: "Advocate General performs duties for?",
        options: ["State Govt", "Central Govt", "Both", "Public"],
        correctAnswer: 0,
        explanation: "State Government (Article 165).",
        subtopic: "38.3"
    },
    {
        id: 3,
        question: "Does AG have right of audience in all courts?",
        options: ["Yes", "No, only SC", "No, only HC", "With permission"],
        correctAnswer: 0,
        explanation: "Yes, in all courts in the territory of India.",
        subtopic: "38.3"
    },
    {
        id: 4,
        question: "Remuneration of Advocate General fixed by?",
        options: ["Governor", "State Legislature", "President", "Parliament"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "38.3"
    },

    // ==========================================
    // NHRC/SHRC REVISION
    // ==========================================
    {
        id: 5,
        question: "NHRC Chairman Appointment Committee excludes?",
        options: ["Chairman of Rajya Sabha", "Deputy Chairman of Rajya Sabha", "Speaker", "Home Minister"],
        correctAnswer: 0,
        explanation: "Chairman of Rajya Sabha (VP) is NOT a member.",
        subtopic: "56.1"
    },
    {
        id: 6,
        question: "Tenure of NHRC Members?",
        options: ["3 years or 70 age", "5 years or 70 age", "5 years or 65 age", "6 years or 65 age"],
        correctAnswer: 0,
        explanation: "3 years or 70 years of age.",
        subtopic: "56.1"
    },
    {
        id: 7,
        question: "Removal of SHRC Chairman by?",
        options: ["President", "Governor", "CM", "Parliament"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry).",
        subtopic: "57.1"
    },
    {
        id: 8,
        question: "Is NHRC a constitutional body?",
        options: ["No, Statutory", "Yes", "Executive", "None"],
        correctAnswer: 0,
        explanation: "Statutory (PHR Act 1993).",
        subtopic: "56.1"
    },

    // ==========================================
    // CIC/SIC REVISION
    // ==========================================
    {
        id: 9,
        question: "CIC Appointment Committee includes?",
        options: ["PM + LoP + Cabinet Minister", "PM + LoP + CJI", "PM + HM + Speaker", "PM Only"],
        correctAnswer: 0,
        explanation: "PM + Leader of Opposition + Union Cabinet Minister nominated by PM.",
        subtopic: "58.1"
    },
    {
        id: 10,
        question: "SIC Members appointed by?",
        options: ["Governor", "President", "CIC", "CM"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "59.1"
    },
    {
        id: 11,
        question: "Age limit for CIC/SIC?",
        options: ["65 years", "70 years", "62 years", "60 years"],
        correctAnswer: 0,
        explanation: "65 years.",
        subtopic: "58.1"
    },
    {
        id: 12,
        question: "Salary of CIC determined by?",
        options: ["Central Govt", "Parliament", "President", "Schedule 2"],
        correctAnswer: 0,
        explanation: "Central Government (2019 Amendment).",
        subtopic: "58.1"
    },

    // ==========================================
    // CVC/CBI REVISION
    // ==========================================
    {
        id: 13,
        question: "CVC Tenure?",
        options: ["4 years or 65 age", "5 years or 65 age", "3 years or 70 age", "2 years fixed"],
        correctAnswer: 0,
        explanation: "4 years or 65 years of age.",
        subtopic: "60.1"
    },
    {
        id: 14,
        question: "CBI derives power from?",
        options: ["DSPE Act 1946", "CBI Act", "CVC Act", "Police Act"],
        correctAnswer: 0,
        explanation: "Delhi Special Police Establishment Act, 1946.",
        subtopic: "61.1"
    },
    {
        id: 15,
        question: "CBI Director Selection Committee includes CJI?",
        options: ["Yes", "No", "Sometimes", "Only for SPs"],
        correctAnswer: 0,
        explanation: "Yes (PM + LoP + CJI).",
        subtopic: "61.1"
    },
    {
        id: 16,
        question: "CVC Selection Committee includes Home Minister?",
        options: ["Yes", "No", "Speaker instead", "CJI instead"],
        correctAnswer: 0,
        explanation: "Yes (PM + HM + LoP).",
        subtopic: "60.1"
    },

    // ==========================================
    // LOKPAL REVISION
    // ==========================================
    {
        id: 17,
        question: "Minimum Judicial Members in Lokpal?",
        options: ["50%", "33%", "66%", "100%"],
        correctAnswer: 0,
        explanation: "50%.",
        subtopic: "62.1"
    },
    {
        id: 18,
        question: "Lokpal Selection Committee Chair?",
        options: ["PM", "President", "CJI", "Speaker"],
        correctAnswer: 0,
        explanation: "Prime Minister.",
        subtopic: "62.1"
    },
    {
        id: 19,
        question: "Who removes Lokpal Chair?",
        options: ["President after SC inquiry", "Parliament impeachment", "PM", "Selection Committee"],
        correctAnswer: 0,
        explanation: "President after SC inquiry.",
        subtopic: "62.1"
    },
    {
        id: 20,
        question: "Lokayukta usually appointed by?",
        options: ["Governor", "President", "CM", "HC"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "62.3"
    },

    // ==========================================
    // COMPARATIVE & TRICKY (40 Questions)
    // ==========================================
    { id: 21, question: "Which body has Home Minister in Appointment Committee?", options: ["NHRC & CVC", "CIC & CBI", "Lokpal & CIC", "None"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 22, question: "Which body has Leader of Opposition in Appointment Committee?", options: ["All (NHRC, CVC, CIC, CBI, Lokpal)", "Only CVC", "Only Lokpal", "None"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 23, question: "Which body has 4 year tenure?", options: ["CVC", "NHRC", "Lokpal", "UPSC"], correctAnswer: 0, subtopic: "60.1" },
    { id: 24, question: "Who is NOT eligible for reappointment?", options: ["CVC, CIC", "NHRC", "UPSC Member (to other posts ok)", "All"], correctAnswer: 0, subtopic: "Comparison" }, // CVC/CIC strictly no to same post. NHRC yes.
    { id: 25, question: "Which body is NOT statutory?", options: ["CBI", "NHRC", "CVC", "Lokpal"], correctAnswer: 0, subtopic: "61.1" }, // CBI is not statutory in formation (executive resolution), utilizes DSPE Act. Often cited as non-statutory body deriving power from statute.
    { id: 26, question: "Which body has Speaker in Appointment Committee?", options: ["NHRC & Lokpal", "CVC", "CBI", "CIC"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 27, question: "Which body has CJI in Appointment Committee?", options: ["CBI & Lokpal", "NHRC", "CVC", "CIC"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 28, question: "Who inquires into misbehavior for removal of these bodies?", options: ["Supreme Court", "High Court", "CBI", "Parliament"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 29, question: "Can AG take part in Joint Sitting?", options: ["Yes", "No", "Only LS", "Only RS"], correctAnswer: 0, subtopic: "38.3" },
    { id: 30, question: "Does RTI apply to CBI?", options: ["No (Exempted)", "Yes", "Partially (Corruption/HR)", "Fully"], correctAnswer: 2, subtopic: "Comparison" },
    { id: 31, question: "Protection of Human Rights Act year?", options: ["1993", "2005", "2003", "2013"], correctAnswer: 0, subtopic: "56.1" },
    { id: 32, question: "RTI Act year?", options: ["2005", "2003", "1993", "2013"], correctAnswer: 0, subtopic: "58.1" },
    { id: 33, question: "CVC Act year?", options: ["2003", "2005", "1993", "1988"], correctAnswer: 0, subtopic: "60.1" },
    { id: 34, question: "Lokpal Act year?", options: ["2013", "2011", "2014", "2010"], correctAnswer: 0, subtopic: "62.1" },
    { id: 35, question: "DSPE Act year?", options: ["1946", "1947", "1950", "1963"], correctAnswer: 0, subtopic: "61.1" },
    { id: 36, question: "Santhanam Committee relates to?", options: ["Corruption (CVC/CBI)", "Panchayat", "Centre-State", "Election"], correctAnswer: 0, subtopic: "60.1" },
    { id: 37, question: "Paris Principles relate to?", options: ["NHRC", "Environment", "Trade", "Health"], correctAnswer: 0, subtopic: "56.1" },
    { id: 38, question: "First Lokpal appointed in?", options: ["2019", "2014", "2013", "2020"], correctAnswer: 0, subtopic: "62.1" },
    { id: 39, question: "Eminent Jurist is in selection committee of?", options: ["Lokpal", "CVC", "CBI", "NHRC"], correctAnswer: 0, subtopic: "62.1" },
    { id: 40, question: "Min 50% SC/ST/OBC reservation in?", options: ["Lokpal", "NHRC", "CVC", "UPSC"], correctAnswer: 0, subtopic: "62.1" },
    { id: 41, question: "Superintendence over CBI in PC Act cases?", options: ["CVC", "Govt", "Lokpal", "Court"], correctAnswer: 0, subtopic: "60.2" },
    { id: 42, question: "Whistleblowers complaints handled by?", options: ["CVC", "CBI", "NHRC", "CIC"], correctAnswer: 0, subtopic: "60.2" },
    { id: 43, question: "Which body has powers of Civil Court?", options: ["All (NHRC, CIC, CVC, Lokpal)", "None", "Only Lokpal", "Only NHRC"], correctAnswer: 0, subtopic: "Comparison" },
    { id: 44, question: "Can Lokpal attach property?", options: ["Yes", "No", "Only court", "Only Govt"], correctAnswer: 0, subtopic: "62.2" },
    { id: 45, question: "Are CVC recommendations binding?", options: ["Advisory", "Binding", "Mandatory", "Final"], correctAnswer: 0, subtopic: "60.2" },
    { id: 46, question: "Does Lokayukta exist in all states?", options: ["Most states", "No", "Only 5 states", "Only UTs"], correctAnswer: 0, subtopic: "62.3" },
    { id: 47, question: "Who nominates the Cabinet Minister in CIC committee?", options: ["PM", "Speaker", "HM", "President"], correctAnswer: 0, subtopic: "58.1" },
    { id: 48, question: "Who nominates the Cabinet Minister in SIC committee?", options: ["CM", "Governor", "Speaker", "HM"], correctAnswer: 0, subtopic: "59.1" },
    { id: 49, question: "Is Advocate General statutory?", options: ["No, Constitutional", "Yes", "Executive", "None"], correctAnswer: 0, subtopic: "38.3" },
    { id: 50, question: "General Consent for CBI is given by?", options: ["State Govt", "Central Govt", "Governor", "High Court"], correctAnswer: 0, subtopic: "61.2" },
    { id: 51, question: "Director of Prosecution of CBI appointed by?", options: ["Central Govt on CVC advice", "CBI Director", "PM", "President"], correctAnswer: 0, subtopic: "61.2" },
    { id: 52, question: "Max members in NHRC (excluding Chair)?", options: ["5 (plus ex-officio)", "8", "10", "2"], correctAnswer: 0, subtopic: "56.1" },
    { id: 53, question: "Max members in CIC (excluding Chair)?", options: ["10", "8", "5", "4"], correctAnswer: 0, subtopic: "58.1" },
    { id: 54, question: "Max members in Lokpal (excluding Chair)?", options: ["8", "10", "4", "6"], correctAnswer: 0, subtopic: "62.1" },
    { id: 55, question: "Max members in CVC (excluding Chair)?", options: ["2", "3", "5", "10"], correctAnswer: 0, subtopic: "60.1" },
    { id: 56, question: "SHRC Chair removed by?", options: ["President", "Governor", "CM", "CJI"], correctAnswer: 0, subtopic: "57.1" },
    { id: 57, question: "SIC Chair removed by?", options: ["Governor", "President", "CM", "CJI"], correctAnswer: 0, subtopic: "59.1" },
    { id: 58, question: "Can Lokpal suo motu proceed?", options: ["No", "Yes", "Maybe", "If media reports"], correctAnswer: 0, subtopic: "62.2" },
    { id: 59, question: "Can NHRC suo motu proceed?", options: ["Yes", "No", "Only if victim asks", "Only if court asks"], correctAnswer: 0, subtopic: "56.2" },
    { id: 60, question: "Can AG do private practice?", options: ["Yes", "No", "With permission", "Limited"], correctAnswer: 0, subtopic: "38.3" }
];

export default DAY27_MCQS;
