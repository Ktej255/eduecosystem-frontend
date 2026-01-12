
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

export const DAY7_MCQS: MCQ[] = [
    // ==========================================
    // SUNDAY REVISION CHALLENGE (60 Questions)
    // Focus: Conceptual clarity and comparative analysis
    // ==========================================

    {
        id: 1,
        question: "Which of the following is NOT a feature of the Parliamentary System in India?",
        options: ["Presence of nominal and real executives", "Majority party rule", "Dissolution of the Lower House", "Strict separation of powers"],
        correctAnswer: 3,
        explanation: "India has a 'fusion of powers' (Executive is part of Legislature), not a strict separation like the USA.",
        subtopic: "13.1"
    },
    {
        id: 2,
        question: "The power to declare an area as a 'Scheduled Area' lies with:",
        options: ["The Parliament", "The President", "The Governor", "The State Legislature"],
        correctAnswer: 1,
        explanation: "The President is empowered to declare an area as a Scheduled Area.",
        subtopic: "14.2"
    },
    {
        id: 3,
        question: "Under Article 356, President's Rule is imposed if:",
        options: ["There is a financial crisis", "There is failure of constitutional machinery in the state", "There is internal rebellion", "The Governor resigns"],
        correctAnswer: 1,
        explanation: "Article 356: Failure of constitutional machinery.",
        subtopic: "17.2"
    },
    {
        id: 4,
        question: "Which writ is issued by the court to a public official asking him to perform his official duties?",
        options: ["Habeas Corpus", "Mandamus", "Prohibition", "Quo-Warranto"],
        correctAnswer: 1,
        explanation: "Mandamus (We Command).",
        subtopic: "11.0"
    },
    {
        id: 5,
        question: "The concept of 'Procedure Established by Law' in Article 21 is borrowed from:",
        options: ["American Constitution", "British Constitution", "Japanese Constitution", "Canadian Constitution"],
        correctAnswer: 2,
        explanation: "Japanese Constitution.",
        subtopic: "11.1"
    },
    {
        id: 6,
        question: "The 'Sovereignty' of the Indian Parliament is restricted by:",
        options: ["Powers of the President", "Judicial Review", "Leader of the Opposition", "Powers of the PM"],
        correctAnswer: 1,
        explanation: "Judicial Review and Written Constitution limit the sovereignty of Parliament (unlike the British Parliament which is sovereign).",
        subtopic: "12.2"
    },
    {
        id: 7,
        question: "In the interim government formed in 1946, who held the portfolio of External Affairs?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Liaquat Ali Khan", "Baldev Singh"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru.",
        subtopic: "11.0"
    },
    {
        id: 8,
        question: "The resolution for removing the Vice-President of India can be moved in:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Either House", "Joint Sitting"],
        correctAnswer: 1,
        explanation: "Rajya Sabha only. (It must be passed by RS by effective majority and agreed to by LS).",
        subtopic: "19.2"
    },
    {
        id: 9,
        question: "Which of the following expenditures is NOT 'charged' on the Consolidated Fund of India?",
        options: ["Salary of President", "Salary of Supreme Court Judges", "Salary of High Court Judges", "Pensions of High Court Judges"],
        correctAnswer: 2,
        explanation: "Salary of High Court Judges is charged on the Consolidated Fund of the STATE. (Their PENSIONS are charged on CF of INDIA). This is a common trap.",
        subtopic: "15.3"
    },
    {
        id: 10,
        question: "If a Minister loses the confidence of the Lok Sabha, what happens?",
        options: ["He resigns alone", "The Whole Council resigns", "President decides", "PM decides"],
        correctAnswer: 1,
        explanation: "The defeat of a minister on the floor of the house usually leads to the resignation of the entire Council (Collective Responsibility).",
        subtopic: "21.2"
    },
    {
        id: 11,
        question: "Who can attend the meetings of Parliament without being a member?",
        options: ["Chief Justice of India", "Attorney General of India", "Chief Election Commissioner", "Solicitor General"],
        correctAnswer: 1,
        explanation: "Attorney General of India (Article 76).",
        subtopic: "21.0"
    },
    {
        id: 12,
        question: "The 'Electoral College' for the President does NOT include:",
        options: ["Elected members of Lok Sabha", "Elected members of Rajya Sabha", "Nominated members of Rajya Sabha", "Elected members of State Assemblies"],
        correctAnswer: 2,
        explanation: "Nominated members do not participate in the election of the President.",
        subtopic: "18.1"
    },
    {
        id: 13,
        question: "Which Amendment restored the power of judicial review curtailed by the 42nd Amendment?",
        options: ["43rd Amendment", "44th Amendment", "45th Amendment", "46th Amendment"],
        correctAnswer: 0,
        explanation: "43rd Amendment Act, 1977.",
        subtopic: "11.1"
    },
    {
        id: 14,
        question: "The joint sitting of Parliament is borrowed from:",
        options: ["USA", "UK", "Australia", "Canada"],
        correctAnswer: 2,
        explanation: "Australia.",
        subtopic: "11.1"
    },
    {
        id: 15,
        question: "Who determines the salaries and allowances of Ministers?",
        options: ["President", "Prime Minister", "Parliament", "Cabinet Secretary"],
        correctAnswer: 2,
        explanation: "Parliament.",
        subtopic: "21.1"
    },
    {
        id: 16,
        question: "Which case ruled that Preamble is an integral part of the Constitution?",
        options: ["Berubari Union case", "Kesavananda Bharati case", "LIC of India case", "Both B and C"],
        correctAnswer: 3,
        explanation: "Kesavananda Bharati (1973) and LIC of India (1995) both held Preamble is an integral part.",
        subtopic: "11.0"
    },
    {
        id: 17,
        question: "The Directive Principles of State Policy (DPSP) are:",
        options: ["Justiciable", "Non-justiciable", "Mandatory", "Enforceable by SC"],
        correctAnswer: 1,
        explanation: "They are non-justiciable (Article 37).",
        subtopic: "12.1"
    },
    {
        id: 18,
        question: "Which part of the Constitution is called the 'Magna Carta of India'?",
        options: ["Part III", "Part IV", "Part II", "Part V"],
        correctAnswer: 0,
        explanation: "Part III (Fundamental Rights).",
        subtopic: "11.0"
    },
    {
        id: 19,
        question: "The President can declare National Emergency ON WRITTEN RECOMMENDATION of:",
        options: ["Prime Minister", "Cabinet", "Speaker", "Parliament"],
        correctAnswer: 1,
        explanation: "The Cabinet (Union Cabinet). Added by 44th Amendment to prevent arbitrary declaration by PM alone (like 1975).",
        subtopic: "17.1"
    },
    {
        id: 20,
        question: "Who appoints the District Judges?",
        options: ["Governor", "Chief Justice of HC", "President", "CM"],
        correctAnswer: 0,
        explanation: "Governor (in consultation with the High Court).",
        subtopic: "31.2"
    },
    // Comparative Politics (President vs Governor)
    {
        id: 21,
        question: "In which matter does the Governor have a power that the President does NOT have?",
        options: ["Pardoning death sentence", "Appointing Ambassadors", "Reserving bills for President's consideration", "Declaring Emergency"],
        correctAnswer: 2,
        explanation: "Reserving state bills for the President is a special power of the Governor.",
        subtopic: "31.6"
    },
    {
        id: 22,
        question: "Who administers oath to the Vice-President?",
        options: ["Chief Justice of India", "President", "Speaker", "Prime Minister"],
        correctAnswer: 1,
        explanation: "The President.",
        subtopic: "19.1"
    },
    {
        id: 23,
        question: "The maximum life of an ordinance issued by the President is:",
        options: ["6 months", "6 weeks", "6 months + 6 weeks", "1 year"],
        correctAnswer: 2,
        explanation: "6 months (max gap between sessions) + 6 weeks (time to pass after reassembly).",
        subtopic: "18.4"
    },
    {
        id: 24,
        question: "Which of the following is NOT a constitutional body?",
        options: ["Finance Commission", "UPSC", "NITI Aayog", "Election Commission"],
        correctAnswer: 2,
        explanation: "NITI Aayog is an executive body (non-constitutional, non-statutory).",
        subtopic: "11.0"
    },
    {
        id: 25,
        question: "The Chairman of Zonal Councils is:",
        options: ["President", "Prime Minister", "Union Home Minister", "Chief Minister by rotation"],
        correctAnswer: 2,
        explanation: "Union Home Minister.",
        subtopic: "16.3"
    },
    {
        id: 26,
        question: "The breakdown of Constitutional machinery in a State is popularly known as:",
        options: ["National Emergency", "State Emergency", "Financial Emergency", "Judicial Emergency"],
        correctAnswer: 1,
        explanation: "State Emergency or President's Rule.",
        subtopic: "17.2"
    },
    {
        id: 27,
        question: "Are the Fundamental Duties applicable to foreigners?",
        options: ["Yes", "No", "Some of them", "Only if they reside for 5 years"],
        correctAnswer: 1,
        explanation: "Fundamental Duties are confined to citizens only.",
        subtopic: "11.0"
    },
    {
        id: 28,
        question: "The 86th Amendment Act dealt with:",
        options: ["Panchayati Raj", "Anti-Defection", "Right to Education", "GST"],
        correctAnswer: 2,
        explanation: "Right to Education (Article 21A).",
        subtopic: "11.1"
    },
    {
        id: 29,
        question: "Which state was the first to establish Panchayati Raj?",
        options: ["Andhra Pradesh", "Rajasthan", "Bihar", "Gujarat"],
        correctAnswer: 1,
        explanation: "Rajasthan (Nagaur district, 1959).",
        subtopic: "33.0"
    },
    {
        id: 30,
        question: "Who is known as the 'Father of Local Self-Government' in India?",
        options: ["Lord Mayo", "Lord Ripon", "Lord Curzon", "Lord Dalhousie"],
        correctAnswer: 1,
        explanation: "Lord Ripon.",
        subtopic: "33.0"
    },
    // True/False variants
    {
        id: 31,
        question: "The advice of the Council of Ministers is binding on the President.",
        options: ["Always true", "True after 42nd/44th Amendments", "False", "Only in financial matters"],
        correctAnswer: 1,
        explanation: "The 42nd and 44th Amendments made the advice binding (President can return once, but must accept if sent back).",
        subtopic: "21.2"
    },
    {
        id: 32,
        question: "The Preamble is justiciable.",
        options: ["True", "False", "Partially", "Only in SC"],
        correctAnswer: 1,
        explanation: "False. Its provisions are not enforceable in courts.",
        subtopic: "11.0"
    },
    {
        id: 33,
        question: "India is a 'Coming Together' Federation.",
        options: ["True", "False", "It is Holding Together", "Neither"],
        correctAnswer: 1,
        explanation: "False. India is a 'Holding Together' Federation (like Belgium/Spain), not 'Coming Together' (like USA).",
        subtopic: "14.1"
    },
    {
        id: 34,
        question: "The Rajya Sabha has equal power with Lok Sabha in ammending the Constitution.",
        options: ["True", "False", "Only regarding States", "No power at all"],
        correctAnswer: 0,
        explanation: "True. A Constitutional Amendment Bill can be introduced in either House and must be passed by both separately. No joint sitting.",
        subtopic: "13.0"
    },
    {
        id: 35,
        question: "The Governor has no diplomatic or military powers.",
        options: ["True", "False", "Has military but not diplomatic", "Has diplomatic only"],
        correctAnswer: 0,
        explanation: "True. Only President has diplomatic and military powers.",
        subtopic: "31.2"
    },
    // Final 25 Concept mix
    {
        id: 36,
        question: "Which Schedule contains the list of recognized languages?",
        options: ["7th", "8th", "9th", "10th"],
        correctAnswer: 1,
        explanation: "8th Schedule.",
        subtopic: "11.0"
    },
    {
        id: 37,
        question: "How many languages are currently in the 8th Schedule?",
        options: ["14", "18", "22", "24"],
        correctAnswer: 2,
        explanation: "22 languages.",
        subtopic: "11.0"
    },
    {
        id: 38,
        question: "Which Article provides for the abolition or creation of Legislative Councils in states?",
        options: ["168", "169", "170", "171"],
        correctAnswer: 1,
        explanation: "Article 169.",
        subtopic: "33.0"
    },
    {
        id: 39,
        question: "The maximum gap between two sessions of State Legislature cannot exceed:",
        options: ["3 months", "6 months", "9 months", "1 year"],
        correctAnswer: 1,
        explanation: "6 months.",
        subtopic: "33.0"
    },
    {
        id: 40,
        question: "Who appoints the Chief Election Commissioner?",
        options: ["Prime Minister", "President", "Parliament", "CJI"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "18.3"
    },
    {
        id: 41,
        question: "The CAG (Comptroller and Auditor General) acts as:",
        options: ["Guardian of public purse", "Guardian of Constitution", "Guardian of Law", "Government accountant only"],
        correctAnswer: 0,
        explanation: "Guardian of the public purse.",
        subtopic: "11.0"
    },
    {
        id: 42,
        question: "The term of CAG office is:",
        options: ["5 years or 65 age", "6 years or 65 age", "6 years or 62 age", "5 years or 60 age"],
        correctAnswer: 1,
        explanation: "6 years or upto age of 65 years, whichever is earlier.",
        subtopic: "11.0"
    },
    {
        id: 43,
        question: "Does the Governor have the power to appoint Judges of the High Court?",
        options: ["Yes", "No", "Only District Judges", "Only Additional Judges"],
        correctAnswer: 1,
        explanation: "No. HC Judges are appointed by President. Governor is only CONSULTED.",
        subtopic: "31.2"
    },
    {
        id: 44,
        question: "The decisions of the Central Administrative Tribunal (CAT) can be appealed in:",
        options: ["Supreme Court only", "High Court (Division Bench)", "District Court", "President"],
        correctAnswer: 1,
        explanation: "Since Chandra Kumar case (1997), appeal lies to Division Bench of concerned High Court first.",
        subtopic: "11.0"
    },
    {
        id: 45,
        question: "Which of the following states does not have a bicameral legislature?",
        options: ["Bihar", "Karnataka", "Maharashtra", "Tamil Nadu"],
        correctAnswer: 3,
        explanation: "Tamil Nadu has a unicameral legislature (abolished Council).",
        subtopic: "33.0"
    },
    {
        id: 46,
        question: "The Sarkaria Commission recommended that the Governor should be:",
        options: ["A politician from the ruling party", "An eminent person from outside the state", "A retired judge of the same state", "The Chief Secretary"],
        correctAnswer: 1,
        explanation: "An eminent person from outside the state (to ensure impartiality).",
        subtopic: "15.4"
    },
    {
        id: 47,
        question: "Which Article grants special status to Delhi?",
        options: ["239", "239A", "239AA", "239AB"],
        correctAnswer: 2,
        explanation: "Article 239AA (69th Amendment Act, 1991).",
        subtopic: "11.0"
    },
    {
        id: 48,
        question: "Who conducts elections to Municipalities and Panchayats?",
        options: ["Election Commission of India", "State Election Commission", "State Government", "Governor"],
        correctAnswer: 1,
        explanation: "State Election Commission.",
        subtopic: "33.0"
    },
    {
        id: 49,
        question: "The State Election Commissioner is appointed by:",
        options: ["President", "Governor", "Chief Minister", "CEC of India"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "33.0"
    },
    {
        id: 50,
        question: "Article 243-ZD deals with:",
        options: ["District Planning Committee", "Metropolitan Planning Committee", "State Finance Commission", "Gram Sabha"],
        correctAnswer: 0,
        explanation: "District Planning Committee.",
        subtopic: "33.0"
    },
    {
        id: 51,
        question: "Taxes on agricultural income is listed in:",
        options: ["Union List", "State List", "Concurrent List", "Residuary Powers"],
        correctAnswer: 1,
        explanation: "State List.",
        subtopic: "15.1"
    },
    {
        id: 52,
        question: "Education was moved to Concurrent List by:",
        options: ["42nd Amendment", "44th Amendment", "86th Amendment", "1st Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "15.1"
    },
    {
        id: 53,
        question: "Who is empowered to remove the Chairperson of a State Public Service Commission?",
        options: ["Governor", "President", "Parliament", "Supreme Court"],
        correctAnswer: 1,
        explanation: "President (even though appointed by Governor).",
        subtopic: "31.1"
    },
    {
        id: 54,
        question: "Which President of India was elected unopposed?",
        options: ["Rajendra Prasad", "S. Radhakrishnan", "N. Sanjeeva Reddy", "APJ Abdul Kalam"],
        correctAnswer: 2,
        explanation: "N. Sanjeeva Reddy (1977).",
        subtopic: "18.0"
    },
    {
        id: 55,
        question: "Who was the first Vice-President of India?",
        options: ["S. Radhakrishnan", "V.V. Giri", "Zakir Hussain", "G.S. Pathak"],
        correctAnswer: 0,
        explanation: "Dr. S. Radhakrishnan.",
        subtopic: "19.0"
    },
    {
        id: 56,
        question: "The term 'Cabinet' is mentioned in the Constitution only once in Article:",
        options: ["74", "75", "352", "356"],
        correctAnswer: 2,
        explanation: "Article 352 (Clause 3)",
        subtopic: "21.3"
    },
    {
        id: 57,
        question: "Total number of members in the Constituent Assembly were:",
        options: ["299", "389", "296", "412"],
        correctAnswer: 1,
        explanation: "389 (before partition). 299 (after partition).",
        subtopic: "11.0"
    },
    {
        id: 58,
        question: "The design of the National Flag was adopted on:",
        options: ["July 22, 1947", "August 15, 1947", "January 26, 1950", "November 26, 1949"],
        correctAnswer: 0,
        explanation: "July 22, 1947.",
        subtopic: "11.0"
    },
    {
        id: 59,
        question: "Who was the Chairman of the Drafting Committee?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Dr. B.R. Ambedkar", "Dr. Rajendra Prasad"],
        correctAnswer: 2,
        explanation: "Dr. B.R. Ambedkar.",
        subtopic: "11.0"
    },
    {
        id: 60,
        question: "The Constitution of India was adopted on:",
        options: ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"],
        correctAnswer: 1,
        explanation: "26 November 1949 (Enacted/Adopted). Came into force on 26 Jan 1950.",
        subtopic: "11.0"
    }
];

export default DAY7_MCQS;
