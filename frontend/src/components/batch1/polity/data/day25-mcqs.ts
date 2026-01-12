
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

export const DAY25_MCQS: MCQ[] = [
    // ==========================================
    // CVC (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "CVC was established on the recommendation of:",
        options: ["Santhanam Committee", "Kripalani Committee", "Administrative Reforms Commission", "Gorwala Committee"],
        correctAnswer: 0,
        explanation: "Committee on Prevention of Corruption (Santhanam Committee, 1962-64).",
        subtopic: "60.1"
    },
    {
        id: 2,
        question: "CVC became a statutory body in which year?",
        options: ["2003", "1998", "1964", "2013"],
        correctAnswer: 0,
        explanation: "2003 (The Central Vigilance Commission Act).",
        subtopic: "60.1"
    },
    {
        id: 3,
        question: "Appointment Committee for CVC consists of:",
        options: ["PM + Home Minister + LoP (LS)", "PM + CJI + LoP", "PM + Speaker + LoP", "PM + HM + Speaker"],
        correctAnswer: 0,
        explanation: "Prime Minister (Head), Minister of Home Affairs, and Leader of Opposition in Lok Sabha.",
        subtopic: "60.1"
    },
    {
        id: 4,
        question: "Tenure of Central Vigilance Commissioner?",
        options: ["4 years / 65 age", "5 years / 65 age", "3 years / 70 age", "6 years / 65 age"],
        correctAnswer: 0,
        explanation: "4 years or 65 years of age (whichever is earlier). Note: 4 years is unique.",
        subtopic: "60.1"
    },
    {
        id: 5,
        question: "Who removes CVC from office?",
        options: ["President", "Supreme Court", "Parliament", "PM"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry in cases of misbehavior).",
        subtopic: "60.1"
    },
    {
        id: 6,
        question: "Number of Vigilance Commissioners (excluding CVC)?",
        options: ["Not more than 2", "Not more than 3", "Exactly 2", "Exactly 4"],
        correctAnswer: 0,
        explanation: "Not more than two.",
        subtopic: "60.1"
    },
    {
        id: 7,
        question: "Is CVC eligible for reappointment?",
        options: ["No", "Yes", "Once", "Twice"],
        correctAnswer: 0,
        explanation: "No. (Also ineligible for further employment).",
        subtopic: "60.1"
    },
    {
        id: 8,
        question: "Salary of CVC is same as?",
        options: ["UPSC Chairman", "Election Commissioner", "Cabinet Secretary", "SC Judge"],
        correctAnswer: 0,
        explanation: "Chairman of UPSC.",
        subtopic: "60.1"
    },
    {
        id: 9,
        question: "Jurisdiction of CVC extends to:",
        options: ["Group A officers of Central Govt", "All Central Govt employees", "Private sector", "State Govt employees"],
        correctAnswer: 0,
        explanation: "Group A officers of Central Govt, Senior officers of PSUs/Banks etc.",
        subtopic: "60.2"
    },
    {
        id: 10,
        question: "CVC annual report is submitted to:",
        options: ["President", "Parliament", "Central Govt", "PM"],
        correctAnswer: 0,
        explanation: "President (who lays it before Parliament).",
        subtopic: "60.2"
    },
    {
        id: 11,
        question: "Who is the 'Designated Agency' to receive Whistleblower complaints (PIDPI)?",
        options: ["CVC", "CBI", "Lokpal", "Supreme Court"],
        correctAnswer: 0,
        explanation: "Central Vigilance Commission (under PIDPI Resolution).",
        subtopic: "60.2"
    },
    {
        id: 12,
        question: "Can CVC investigate criminal cases?",
        options: ["No, it refers to CBI", "Yes", "Limited power", "Only corruption"],
        correctAnswer: 0,
        explanation: "CVC is an advisory/supervisory body. It refers cases for investigation to CBI or Chief Vigilance Officers (CVOs).",
        subtopic: "60.2"
    },
    {
        id: 13,
        question: "Role of CVC regarding CBI?",
        options: ["Superintendence over CBI (PC Act cases)", "Full control over CBI", "Appoints CBI Director", "None"],
        correctAnswer: 0,
        explanation: "Superintendence over CBI in so far as it relates to offences under Prevention of Corruption Act, 1988.",
        subtopic: "60.2"
    },
    {
        id: 14,
        question: "First Chief Vigilance Commissioner?",
        options: ["N.S. Rau", "K. Santhanam", "Nivuttan", "Vittal"],
        correctAnswer: 0,
        explanation: "Niuus Srinivas Rau (1964).",
        subtopic: "60.1"
    },
    {
        id: 15,
        question: "Does CVC have powers of Civil Court?",
        options: ["Yes", "No", "Criminal Court", "High Court"],
        correctAnswer: 0,
        explanation: "Yes, for inquiring.",
        subtopic: "60.2"
    },
    {
        id: 16,
        question: "Whistleblowers Protection Act 2014 designates?",
        options: ["CVC as Competent Authority", "CBI", "Lokpal", "PM"],
        correctAnswer: 0,
        explanation: "CVC.",
        subtopic: "60.2"
    },
    {
        id: 17,
        question: "Member composition of CVC selection committee includes CJI?",
        options: ["No", "Yes", "Yes as observer", "Yes if LoP absent"],
        correctAnswer: 0,
        explanation: "No. (Committee is PM + HM + LoP).",
        subtopic: "60.1"
    },
    {
        id: 18,
        question: "Vigilance Awareness Week is observed in?",
        options: ["Oct/Nov (Sardar Patel birthday week)", "January", "August", "December"],
        correctAnswer: 0,
        explanation: "Week in which the birthday of Sardar Vallabhbhai Patel (31st Oct) falls.",
        subtopic: "60.2"
    },
    {
        id: 19,
        question: "Lokpal refers complaints to?",
        options: ["CVC (for inquiry)", "CBI", "Police", "Home Ministry"],
        correctAnswer: 0,
        explanation: "Lokpal can refer complaints to CVC for preliminary inquiry.",
        subtopic: "60.2"
    },
    {
        id: 20,
        question: "Can CVC review progress of applications for sanction of prosecution?",
        options: ["Yes", "No", "Only for Ministers", "Only for Judiciary"],
        correctAnswer: 0,
        explanation: "Yes.",
        subtopic: "60.2"
    },
    { id: 21, question: "Salary of Vigilance Commissioner (Member) equal to?", options: ["UPSC Member", "UPSC Chairman", "Secretary", "Addl Secretary"], correctAnswer: 0, subtopic: "60.1" },
    { id: 22, question: "Does CVC deal with private sector corruption?", options: ["No", "Yes", "Partially", "If bank involved"], correctAnswer: 0, subtopic: "60.2" },
    { id: 23, question: "Is CVC a constitutional body?", options: ["No", "Yes", "Executive", "NGO"], correctAnswer: 0, subtopic: "60.1" },
    { id: 24, question: "Removal grounds for CVC same as?", options: ["UPSC Chairman", "CEC", "Judge", "Minister"], correctAnswer: 0, subtopic: "60.1" },
    { id: 25, question: "CVC head office?", options: ["New Delhi", "Mumbai", "Bangalore", "Hyderabad"], correctAnswer: 0, subtopic: "60.1" },
    { id: 26, question: "Term of CVO in ministries?", options: ["Determinied by CVC", "3 years", "5 years", "Ad-hoc"], correctAnswer: 0, subtopic: "60.2" },
    { id: 27, question: "Can CVC call for reports from Ministries?", options: ["Yes", "No", "Through PMO", "Through Cabinet Sec"], correctAnswer: 0, subtopic: "60.2" },
    { id: 28, question: "Is CVC consulted for appointment of Directors of ED/CBI?", options: ["Yes", "No", "Only ED", "Only CBI"], correctAnswer: 0, subtopic: "60.2" }, // CVC chairs committee for ED Director. For CBI, CVC is member? No, CVC has role in selection of SP and above in CBI. For Director, check new rules (PM+CJI+LoP).
    { id: 29, question: "Bank Securities and Fraud Cell is under?", options: ["CBI", "CVC", "RBI", "SBI"], correctAnswer: 0, subtopic: "61.2" }, // Actually CBI creates these cells.
    { id: 30, question: "Does CVC have own investigation wing?", options: ["No (depended on CVO/CBI)", "Yes", "Police", "Raw"], correctAnswer: 0, subtopic: "60.2" },

    // ==========================================
    // CBI (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "CBI was set up in?",
        options: ["1963", "1946", "1950", "1980"],
        correctAnswer: 0,
        explanation: "1963 (by Home Ministry resolution).",
        subtopic: "61.1"
    },
    {
        id: 32,
        question: "CBI derives investigation powers from?",
        options: ["Delhi Special Police Establishment Act, 1946", "CBI Act", "CVC Act", "Police Act 1861"],
        correctAnswer: 0,
        explanation: "DSPE Act, 1946.",
        subtopic: "61.1"
    },
    {
        id: 33,
        question: "CBI works under supervision of which Ministry?",
        options: ["Ministry of Personnel, Public Grievances and Pensions", "Home Ministry", "Defence Ministry", "Law Ministry"],
        correctAnswer: 0,
        explanation: "Ministry of Personnel.",
        subtopic: "61.1"
    },
    {
        id: 34,
        question: "CBI Director is appointed by Committee headed by?",
        options: ["PM", "Home Minister", "CVC", "President"],
        correctAnswer: 0,
        explanation: "Prime Minister.",
        subtopic: "61.1"
    },
    {
        id: 35,
        question: "Committee for CBI Director appointment includes CJI?",
        options: ["Yes", "No", "Sometimes", "Only if LoP absent"],
        correctAnswer: 0,
        explanation: "Yes. (PM + LoP + CJI/Judge). Lokpal Act 2013 modified this.",
        subtopic: "61.1"
    },
    {
        id: 36,
        question: "Tenure of CBI Director?",
        options: ["Minimum 2 years", "3 years", "5 years fixed", "Pleasure of President"],
        correctAnswer: 0,
        explanation: "Fixed tenure of 2 years (protected by CVC Act/Lokpal Act). Recent amendment allows extensions up to 5 years total.",
        subtopic: "61.1"
    },
    {
        id: 37,
        question: "Santhanam Committee recommended establishment of?",
        options: ["CBI and CVC", "Only CVC", "Only CBI", "Lokpal"],
        correctAnswer: 0,
        explanation: "Both CVC and CBI establishment recommended/endorsed by it.",
        subtopic: "61.1"
    },
    {
        id: 38,
        question: "Can CBI investigate in a State without consent?",
        options: ["No (unless SC/HC orders)", "Yes", "In emergency", "If Central employee involved"],
        correctAnswer: 0,
        explanation: "No. Needs State Govt consent (General or Special). Exception: Constitutional Courts (SC/HC) can order investigation without state consent.",
        subtopic: "61.2"
    },
    {
        id: 39,
        question: "Motto of CBI?",
        options: ["Industry, Impartiality, Integrity", "Satyameva Jayate", "Dharmo Rakshati Rakshitah", "Service before Self"],
        correctAnswer: 0,
        explanation: "Industry, Impartiality, Integrity.",
        subtopic: "61.1"
    },
    {
        id: 40,
        question: "Which wing of CBI coordinates with Interpol?",
        options: ["Coordination Wing", "International Police Cooperation Cell", "Special Crimes", "Economic Offences"],
        correctAnswer: 0,
        explanation: "CBI acts as the National Central Bureau of Interpol.",
        subtopic: "61.2"
    },
    { id: 41, question: "General Consent to CBI?", options: ["State gives blanket permission", "Case by case", "Centre gives", "Court gives"], correctAnswer: 0, subtopic: "61.2" },
    { id: 42, question: "Director of Prosecution in CBI appointed by?", options: ["Central Govt on CVC advice", "CBI Director", "President", "PM"], correctAnswer: 0, subtopic: "61.2" },
    { id: 43, question: "Is CBI a statutory body?", options: ["No (Power from DSPE Act)", "Yes", "Constitutional", "NGO"], correctAnswer: 0, subtopic: "61.1" }, // Techically runs under DSPE Act, but not created *by* an Act like NHRC. Often called Non-constitutional/attached office.
    { id: 44, question: "Vineet Narain case is related to?", options: ["CBI/CVC Reforms", "Police Reforms", "Election Reforms", "Panchayat"], correctAnswer: 0, subtopic: "61.1" },
    { id: 45, question: "Does CBI come under RTI?", options: ["No (Exempt under Sch 2)", "Yes", "Partially", "Only admin matters"], correctAnswer: 0, subtopic: "61.1" }, // Exempted org, except corruption/human rights.
    { id: 46, question: "Special Police Establishment (SPE) set up in?", options: ["1941", "1946", "1950", "1861"], correctAnswer: 0, subtopic: "61.1" },
    { id: 47, question: "Can CBI take up suo motu investigation in States?", options: ["No, only in UTs", "Yes", "For heinous crimes", "If foreigners involved"], correctAnswer: 0, subtopic: "61.2" },
    { id: 48, question: "Who recommends appointment of SP and above in CBI?", options: ["CVC Committee", "UPSC", "DOPT", "Home Ministry"], correctAnswer: 0, subtopic: "60.2" }, // CVC Committee.
    { id: 49, question: "Founding Director of CBI?", options: ["D.P. Kohli", "Hoover", "Rau", "Santhanam"], correctAnswer: 0, subtopic: "61.1" },
    { id: 50, question: "Does CBI investigate economic offences?", options: ["Yes", "No", "Only ED", "Only SFIO"], correctAnswer: 0, subtopic: "61.2" },
    { id: 51, question: "Extension of CBI Director tenure up to?", options: ["5 years", "3 years", "6 years", "4 years"], correctAnswer: 0, subtopic: "61.1" },
    { id: 52, question: "Which Section of DSPE Act requires State Consent?", options: ["Section 6", "Section 5", "Section 4", "Section 3"], correctAnswer: 0, subtopic: "61.2" },
    { id: 53, question: "CBI Academy is located in?", options: ["Ghaziabad", "Hyderabad", "Mussourie", "Delhi"], correctAnswer: 0, subtopic: "61.1" },
    { id: 54, question: "Is CBI an attached office?", options: ["Yes (Ministry of Personnel)", "No", "Subordinate", "Autonomous"], correctAnswer: 0, subtopic: "61.1" },
    { id: 55, question: "Can Union Territory administration order CBI probe?", options: ["No, Central Govt controls UTs", "Yes", "Lt Governor", "CM of UT"], correctAnswer: 0, subtopic: "61.2" }, // CBI can investigate in UTs without 'consent' issue as UT is Central.
    { id: 56, question: "Interpol Notices: Red Corner?", options: ["Arrest of wanted person", "Missing person", "Dead body", "Intelligence"], correctAnswer: 0, subtopic: "61.2" },
    { id: 57, question: "Lokpal Act 2013 changes in CBI?", options: ["Prosecution Directorate headed by Director", "Removed CVC control", "Removed PM", "None"], correctAnswer: 0, subtopic: "61.1" },
    { id: 58, question: "Appointment of CBI Director: If no LoP?", options: ["Leader of Single Largest Opp Party", "Speaker", "Vacant", "President decides"], correctAnswer: 0, subtopic: "61.1" },
    { id: 59, question: "Superintendence of CBI in administrative matters lies with?", options: ["Dept of Personnel & Training (DoPT)", "CVC", "Home Ministry", "PMO"], correctAnswer: 0, subtopic: "61.1" },
    { id: 60, question: "Conviction rate of CBI is generally?", options: ["High (65-70%)", "Low (10%)", "Very Low", "90%"], correctAnswer: 0, subtopic: "61.2" }
];

export default DAY25_MCQS;
