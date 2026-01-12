
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

export const DAY29_MCQS: MCQ[] = [
    // ==========================================
    // CO-OPERATIVE SOCIETIES (Ch 63) - 20 Questions
    // ==========================================
    {
        id: 1,
        question: "97th Constitutional Amendment Act was passed in?",
        options: ["2011", "2010", "2012", "2009"],
        correctAnswer: 0,
        explanation: "2011.",
        subtopic: "63.1"
    },
    {
        id: 2,
        question: "Which Part was added by 97th Amendment?",
        options: ["Part IX-B", "Part IX-A", "Part X", "Part XIV-A"],
        correctAnswer: 0,
        explanation: "Part IX-B (The Co-operative Societies).",
        subtopic: "63.1"
    },
    {
        id: 3,
        question: "Right to form co-operative societies is a?",
        options: ["Fundamental Right", "Legal Right", "Constitutional Right", "DPSP"],
        correctAnswer: 0,
        explanation: "Fundamental Right under Article 19(1)(c).",
        subtopic: "63.1"
    },
    {
        id: 4,
        question: "New DPSP added for co-operative societies?",
        options: ["Article 43B", "Article 43A", "Article 40", "Article 45"],
        correctAnswer: 0,
        explanation: "Article 43B (Promotion of co-operative societies).",
        subtopic: "63.1"
    },
    {
        id: 5,
        question: "Max number of directors in a co-op society?",
        options: ["21", "15", "10", "No limit"],
        correctAnswer: 0,
        explanation: "Not exceeding 21.",
        subtopic: "63.2"
    },
    {
        id: 6,
        question: "Term of office of elected members of co-op board?",
        options: ["5 years", "3 years", "6 years", "4 years"],
        correctAnswer: 0,
        explanation: "5 years from date of election.",
        subtopic: "63.2"
    },
    {
        id: 7,
        question: "Supersession of board cannot exceed?",
        options: ["6 months", "1 year", "3 months", "2 years"],
        correctAnswer: 0,
        explanation: "6 months.",
        subtopic: "63.2"
    },
    {
        id: 8,
        question: "Who conducts elections for co-operative societies?",
        options: ["Independent body created by State Legislature", "State Election Commission", "Election Commission of India", "Registrar"],
        correctAnswer: 0,
        explanation: "Superintendence, direction and control vests in a body provided by State Legislature.",
        subtopic: "63.2"
    },
    {
        id: 9,
        question: "Can a co-op society with govt shareholding be superseded?",
        options: ["Yes", "No", "Only by Court", "Only by Governor"],
        correctAnswer: 0,
        explanation: "Yes, supersession is allowed for societies with govt shareholding/loan/guarantee.",
        subtopic: "63.2"
    },
    {
        id: 10,
        question: "Audit of accounts must be completed within?",
        options: ["6 months of close of financial year", "12 months", "3 months", "9 months"],
        correctAnswer: 0,
        explanation: "Within 6 months of close of financial year.",
        subtopic: "63.2"
    },
    {
        id: 11,
        question: "Reservation for Women in co-op board?",
        options: ["2 seats", "1 seat", "33%", "50%"],
        correctAnswer: 0,
        explanation: "2 seats for Women.",
        subtopic: "63.2"
    },
    {
        id: 12,
        question: "Reservation for SC/ST in co-op board?",
        options: ["1 seat", "2 seats", "Based on population", "None"],
        correctAnswer: 0,
        explanation: "1 seat for SC or ST.",
        subtopic: "63.2"
    },
    {
        id: 13,
        question: "Returns must be filed within how many months of financial year close?",
        options: ["6 months", "3 months", "1 month", "12 months"],
        correctAnswer: 0,
        explanation: "6 months.",
        subtopic: "63.2"
    },
    {
        id: 14,
        question: "Supreme Court in 2021 struck down parts of 97th Amendment regarding?",
        options: ["State Co-operative Societies", "Multi-State Co-operative Societies", "Fundamental Right", "DPSP"],
        correctAnswer: 0,
        explanation: "Struck down provisions relating to State Co-operative Societies for want of ratification by 50% states. Upheld for Multi-State.",
        subtopic: "63.2"
    },
    {
        id: 15,
        question: "Co-operative Societies is a subject in which list?",
        options: ["State List", "Union List", "Concurrent List", "Residuary List"],
        correctAnswer: 0,
        explanation: "State List (Entry 32).",
        subtopic: "63.1"
    },
    {
        id: 16,
        question: "Right to information to members is guaranteed under?",
        options: ["State Act mandated by Constitution", "RTI Act only", "Fundamental Right", "None"],
        correctAnswer: 0,
        explanation: "State Legislature shall provide for access to information.",
        subtopic: "63.2"
    },
    { id: 17, question: "Minimum number of members to form a co-op society?", options: ["10", "7", "5", "20"], correctAnswer: 0, subtopic: "63.1" },
    { id: 18, question: "Who appoints the Registrar of Co-operative Societies?", options: ["State Govt", "Governor", "Central Govt", "HC"], correctAnswer: 0, subtopic: "63.2" },
    { id: 19, question: "Can banking co-operatives be superseded?", options: ["Yes, as per Banking Regulation Act", "No", "Only by RBI", "Only by Court"], correctAnswer: 0, subtopic: "63.2" },
    { id: 20, question: "Multi-State Co-operative Societies Act was passed in?", options: ["2002", "2011", "1984", "2012"], correctAnswer: 0, subtopic: "63.1" },

    // ==========================================
    // OFFICIAL LANGUAGE (Ch 64) - 40 Questions
    // ==========================================
    {
        id: 21,
        question: "Part XVII deals with Articles?",
        options: ["343 to 351", "340 to 350", "352 to 360", "324 to 329"],
        correctAnswer: 0,
        explanation: "343 to 351.",
        subtopic: "64.1"
    },
    {
        id: 22,
        question: "Official Language of the Union is?",
        options: ["Hindi in Devanagari script", "Hindi", "English and Hindi", "All 8th Schedule languages"],
        correctAnswer: 0,
        explanation: "Hindi written in Devanagari script.",
        subtopic: "64.1"
    },
    {
        id: 23,
        question: "Numerals to be used for official purposes?",
        options: ["International form of Indian numerals", "Devanagari numerals", "Roman numerals", "Arabic numerals"],
        correctAnswer: 0,
        explanation: "International form of Indian numerals.",
        subtopic: "64.1"
    },
    {
        id: 24,
        question: "Initially, English was allowed for how many years?",
        options: ["15 years (up to 1965)", "10 years", "20 years", "Indefinitely"],
        correctAnswer: 0,
        explanation: "15 years from commencement of Constitution.",
        subtopic: "64.1"
    },
    {
        id: 25,
        question: "Official Languages Act was passed in?",
        options: ["1963", "1965", "1955", "1971"],
        correctAnswer: 0,
        explanation: "1963.",
        subtopic: "64.1"
    },
    {
        id: 26,
        question: "Commission on Official Language (1955) was headed by?",
        options: ["B.G. Kher", "S.K. Dar", "Fazl Ali", "G.B. Pant"],
        correctAnswer: 0,
        explanation: "B.G. Kher.",
        subtopic: "64.1"
    },
    {
        id: 27,
        question: "Language of the Supreme Court?",
        options: ["English", "Hindi and English", "Any language allowed by CJI", "Hindi"],
        correctAnswer: 0,
        explanation: "English (until Parliament provides otherwise under Art 348).",
        subtopic: "64.2"
    },
    {
        id: 28,
        question: "Can Governor authorize use of Hindi in High Court proceedings?",
        options: ["Yes, with consent of President", "No", "Yes, suo motu", "Yes, with CJI consent"],
        correctAnswer: 0,
        explanation: "Yes, with previous consent of President (for proceedings, not judgments usually unless trans provided).",
        subtopic: "64.2"
    },
    {
        id: 29,
        question: "How many languages in 8th Schedule originally?",
        options: ["14", "22", "18", "12"],
        correctAnswer: 0,
        explanation: "14.",
        subtopic: "64.1"
    },
    {
        id: 30,
        question: "Sindhi was added by which Amendment?",
        options: ["21st (1967)", "71st", "92nd", "1st"],
        correctAnswer: 0,
        explanation: "21st Constitutional Amendment Act, 1967.",
        subtopic: "64.1"
    },
    {
        id: 31,
        question: "Konkani, Manipuri, Nepali added by?",
        options: ["71st (1992)", "21st", "92nd", "97th"],
        correctAnswer: 0,
        explanation: "71st Amendment Act, 1992.",
        subtopic: "64.1"
    },
    {
        id: 32,
        question: "Bodo, Dogri, Maithili, Santhali added by?",
        options: ["92nd (2003)", "71st", "21st", "86th"],
        correctAnswer: 0,
        explanation: "92nd Amendment Act, 2003.",
        subtopic: "64.1"
    },
    {
        id: 33,
        question: "Oriya was renamed Odia by?",
        options: ["96th Amendment (2011)", "92nd", "97th", "100th"],
        correctAnswer: 0,
        explanation: "96th Amendment Act, 2011.",
        subtopic: "64.1"
    },
    {
        id: 34,
        question: "Article 350 deals with?",
        options: ["Language for representation of grievances", "Primary education", "Special Officer", "Hindi promotion"],
        correctAnswer: 0,
        explanation: "Language to be used in representations for redress of grievances.",
        subtopic: "64.3"
    },
    {
        id: 35,
        question: "Article 351 deals with?",
        options: ["Directive for development of Hindi", "Language of SC", "Special Officer", "Grievances"],
        correctAnswer: 0,
        explanation: "Duty of Union to promote spread of Hindi.",
        subtopic: "64.3"
    },
    {
        id: 36,
        question: "Special Officer for Linguistic Minorities is appointed under?",
        options: ["Article 350-B", "Article 350-A", "Article 340", "Article 338"],
        correctAnswer: 0,
        explanation: "Article 350-B.",
        subtopic: "64.3"
    },
    {
        id: 37,
        question: "Can Parliament transact business in mother tongue?",
        options: ["Yes, with permission of Presiding Officer", "No, only Hindi/English", "Yes, any member anytime", "Only in LS"],
        correctAnswer: 0,
        explanation: "Yes, Presiding Officer may permit.",
        subtopic: "64.2"
    },
    {
        id: 38,
        question: "Authoritative text of Constitution in Hindi is provided by?",
        options: ["Article 394-A", "Article 393", "Article 343", "Article 348"],
        correctAnswer: 0,
        explanation: "Article 394-A (added by 58th Amendment, 1987).",
        subtopic: "64.2"
    },
    {
        id: 39,
        question: "Are State Acts required to be in English?",
        options: ["Authoritative text is English", "No, can be Hindi", "Only Regional Language", "Both"],
        correctAnswer: 0,
        explanation: "Authoritative text of bills/acts shall be in English (Art 348).",
        subtopic: "64.2"
    },
    {
        id: 40,
        question: "Committee of Parliament on Official Language has members?",
        options: ["30 (20 LS + 10 RS)", "20 (15 LS + 5 RS)", "30 (15 LS + 15 RS)", "10"],
        correctAnswer: 0,
        explanation: "30 members (20 from Lok Sabha, 10 from Rajya Sabha).",
        subtopic: "64.1"
    },
    { id: 41, question: "Classical Language status is given by?", options: ["Ministry of Culture", "Ministry of Education", "Home Ministry", "Sahitya Akademi"], correctAnswer: 0, subtopic: "Misc" },
    { id: 42, question: "First language to be given Classical status?", options: ["Tamil (2004)", "Sanskrit", "Telugu", "Kannada"], correctAnswer: 0, subtopic: "Misc" },
    { id: 43, question: "How many Classical Languages presently?", options: ["6", "5", "4", "8"], correctAnswer: 0, subtopic: "Misc" },
    { id: 44, question: "State Legislature can adopt?", options: ["Any one or more languages in use in State or Hindi", "Only Hindi", "Only English", "Only Regional"], correctAnswer: 0, subtopic: "64.2" },
    { id: 45, question: "Communication using English between Union and Non-Hindi State is?", options: ["Mandatory", "Optional", "Hindi with translation", "Not specified"], correctAnswer: 0, subtopic: "64.1" },
    { id: 46, question: "Article 350-A added by?", options: ["7th Amendment (1956)", "1st", "42nd", "86th"], correctAnswer: 0, subtopic: "64.3" },
    { id: 47, question: "Who appoints Special Officer for Linguistic Minorities?", options: ["President", "Parliament", "Union Govt", "CJI"], correctAnswer: 0, subtopic: "64.3" },
    { id: 48, question: "Does Constitution specify official language of States?", options: ["No", "Yes", "Hindi for North", "English for South"], correctAnswer: 0, subtopic: "64.2" },
    { id: 49, question: "English in 8th Schedule?", options: ["No", "Yes", "Proposed", "Removed"], correctAnswer: 0, subtopic: "64.1" },
    { id: 50, question: "Nepali in 8th Schedule?", options: ["Yes", "No", "Removed", "Proposed"], correctAnswer: 0, subtopic: "64.1" },
    { id: 51, question: "Sanskrit in 8th Schedule?", options: ["Yes", "No", "Only Classical", "Removed"], correctAnswer: 0, subtopic: "64.1" },
    { id: 52, question: "Official Language Act 1963 amendment in 1967 made English?", options: ["Mandatory in certain cases", "Optional", "banned", "secondary"], correctAnswer: 0, subtopic: "64.1" },
    { id: 53, question: "Documents requiring Hindi and English both?", options: ["Resolutions, Orders, Rules, Notifications etc", "Only Letters", "Only Acts", "Only Budget"], correctAnswer: 0, subtopic: "64.1" },
    { id: 54, question: "Duty to promote Hindi style based on?", options: ["Hindustani and 8th Schedule languages", "Sanskrit", "Braj", "Awadhi"], correctAnswer: 0, subtopic: "64.3" },
    { id: 55, question: "Who defines the 'authoritative text' in Hindi?", options: ["President", "Parliament", "Translation Bureau", "Governor"], correctAnswer: 0, subtopic: "64.2" },
    { id: 56, question: "Can High Court judgments be in Hindi?", options: ["Yes, if Governor authorizes + President consents", "No", "Always", "Only in UP/MP"], correctAnswer: 0, subtopic: "64.2" },
    { id: 57, question: "Is there a definition of 'Linguistic Minority' in Constitution?", options: ["No", "Yes", "In Art 366", "In Art 350"], correctAnswer: 0, subtopic: "64.3" },
    { id: 58, question: "Which Article for 'Mother Tongue' education?", options: ["350-A", "350-B", "351", "349"], correctAnswer: 0, subtopic: "64.3" },
    { id: 59, question: "Which part of Constitution deals with Language?", options: ["Part XVII", "Part XVIII", "Part XVI", "Part XV"], correctAnswer: 0, subtopic: "64.1" },
    { id: 60, question: "Urdu is official language of?", options: ["Jammu & Kashmir (Historically), TG, AP (Second)", "UP (First)", "None", "Kerala"], correctAnswer: 0, subtopic: "Misc" }
];

export default DAY29_MCQS;
