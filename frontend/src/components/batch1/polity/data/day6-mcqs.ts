
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

export const DAY6_MCQS: MCQ[] = [
    // ==========================================
    // WEEK 1 MOCK TEST (60 Questions)
    // Covering: Ch 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 31, 32, 33
    // ==========================================

    {
        id: 1,
        question: "In which case did the Supreme Court propound the doctrine of 'Basic Structure'?",
        options: ["Golaknath case", "Kesavananda Bharati case", "Minerva Mills case", "Maneka Gandhi case"],
        correctAnswer: 1,
        explanation: "Kesavananda Bharati case (1973).",
        subtopic: "12.2"
    },
    {
        id: 2,
        question: "Which Article deals with the amendment of the Constitution?",
        options: ["Article 360", "Article 368", "Article 356", "Article 370"],
        correctAnswer: 1,
        explanation: "Article 368.",
        subtopic: "11.1"
    },
    {
        id: 3,
        question: "The Parliamentary System in India is based on the model of:",
        options: ["US", "UK", "Canada", "France"],
        correctAnswer: 1,
        explanation: "Westminster model (UK).",
        subtopic: "13.1"
    },
    {
        id: 4,
        question: "Which of the following is a federal feature of the Indian Constitution?",
        options: ["Single Citizenship", "Independent Judiciary", "All India Services", "Appointment of Governor"],
        correctAnswer: 1,
        explanation: "Independent Judiciary is a federal feature. Others are unitary biases.",
        subtopic: "14.1"
    },
    {
        id: 5,
        question: "Residuary powers in India are vested in:",
        options: ["State", "Union", "Both", "President"],
        correctAnswer: 1,
        explanation: "Union Parliament (Article 248).",
        subtopic: "15.1"
    },
    {
        id: 6,
        question: "Inter-State Council is established by:",
        options: ["Parliament", "President", "NITI Aayog", "Supreme Court"],
        correctAnswer: 1,
        explanation: "President (Article 263).",
        subtopic: "16.2"
    },
    {
        id: 7,
        question: "National Emergency is declared under Article:",
        options: ["352", "356", "360", "365"],
        correctAnswer: 0,
        explanation: "Article 352.",
        subtopic: "17.1"
    },
    {
        id: 8,
        question: "Fundamental Rights under Article 19 are automatically suspended when National Emergency is declared on grounds of:",
        options: ["Armed Rebellion", "War or External Aggression", "Financial instability", "Internal disturbance"],
        correctAnswer: 1,
        explanation: "Only War or External Aggression.",
        subtopic: "17.1"
    },
    {
        id: 9,
        question: "Who participates in the election of the President?",
        options: ["All MPs", "Elected MPs and MLAs", "Elected MPs only", "Citizens directly"],
        correctAnswer: 1,
        explanation: "Elected members of Parliament and State Legislative Assemblies.",
        subtopic: "18.1"
    },
    {
        id: 10,
        question: "The President submits his resignation to:",
        options: ["CJI", "Prime Minister", "Vice-President", "Speaker"],
        correctAnswer: 2,
        explanation: "Vice-President.",
        subtopic: "18.2"
    },
    {
        id: 11,
        question: "The power to pardon death sentence lies with:",
        options: ["Governor only", "President only", "Both", "Supreme Court"],
        correctAnswer: 1,
        explanation: "Only the President.",
        subtopic: "18.6"
    },
    {
        id: 12,
        question: "The Vice-President is ex-officio Chairman of:",
        options: ["Lok Sabha", "Rajya Sabha", "NITI Aayog", "Zonal Councils"],
        correctAnswer: 1,
        explanation: "Rajya Sabha.",
        subtopic: "19.3"
    },
    {
        id: 13,
        question: "The Council of Ministers is collectively responsible to:",
        options: ["Parliament", "President", "Lok Sabha", "Rajya Sabha"],
        correctAnswer: 2,
        explanation: "Lok Sabha (Article 75).",
        subtopic: "21.2"
    },
    {
        id: 14,
        question: "Who appoints the Prime Minister?",
        options: ["Lok Sabha", "The Majority Party", "President", "Chief Justice"],
        correctAnswer: 2,
        explanation: "President appoints the PM.",
        subtopic: "20.1"
    },
    {
        id: 15,
        question: "What is the maximum strength of the Council of Ministers?",
        options: ["10% of LS", "15% of LS", "20% of LS", "No limit"],
        correctAnswer: 1,
        explanation: "15% (91st Amendment).",
        subtopic: "21.1"
    },
    {
        id: 16,
        question: "The Governor holds office:",
        options: ["For 5 years fixed", "During pleasure of President", "Until recalled by CM", "Until impeached"],
        correctAnswer: 1,
        explanation: "During the pleasure of the President.",
        subtopic: "31.1"
    },
    {
        id: 17,
        question: "Who appoints the Chief Minister?",
        options: ["President", "Governor", "State Assembly", "High Court CJ"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "32.1"
    },
    {
        id: 18,
        question: "Ordinance making power of Governor is under Article:",
        options: ["123", "213", "356", "161"],
        correctAnswer: 1,
        explanation: "Article 213. (123 is President).",
        subtopic: "31.4"
    },
    {
        id: 19,
        question: "Which act creates Zonal Councils?",
        options: ["Constitution", "States Reorganisation Act 1956", "NITI Aayog Act", "Presidential Order"],
        correctAnswer: 1,
        explanation: "States Reorganisation Act, 1956.",
        subtopic: "16.3"
    },
    {
        id: 20,
        question: "Financial Emergency (Art 360) has been declared how many times?",
        options: ["Once", "Twice", "Never", "Thrice"],
        correctAnswer: 2,
        explanation: "Never.",
        subtopic: "17.3"
    },
    // More conceptual
    {
        id: 21,
        question: "Pocket Veto is possible because the President has:",
        options: ["No time limit to act on bill", "Unlimited time", "14 days time", "6 months time"],
        correctAnswer: 0,
        explanation: "Constraint of time is not mentioned in Constitution.",
        subtopic: "18.4"
    },
    {
        id: 22,
        question: "The advice tendered by Ministers to the President:",
        options: ["Can be inquired by SC", "Cannot be inquired by any court", "Can be inquired by High Court", "Can be inquired by Lok Sabha"],
        correctAnswer: 1,
        explanation: "Cannot be inquired into in any court (Article 74).",
        subtopic: "20.3"
    },
    {
        id: 23,
        question: "Who is the Chairman of the National Development Council?",
        options: ["President", "PM", "Finance Minister", "Planning Secretary"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "20.2"
    },
    {
        id: 24,
        question: "Which motion can be moved only in Lok Sabha?",
        options: ["No-Confidence Motion", "Censure Motion", "Adjournment Motion", "All of the above"],
        correctAnswer: 3,
        explanation: "All these are specific to Lok Sabha (due to collective responsibility and direct election).",
        subtopic: "21.2"
    },
    {
        id: 25,
        question: "The salary of the Governor is charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of State", "Public Account", "Contingency Fund"],
        correctAnswer: 1,
        explanation: "CF of State.",
        subtopic: "31.1"
    },
    {
        id: 26,
        question: "Sarkaria Commission dealt with:",
        options: ["Centre-State Relations", "Banking Reforms", "Election Reforms", "Judicial Reforms"],
        correctAnswer: 0,
        explanation: "Centre-State Relations.",
        subtopic: "15.4"
    },
    {
        id: 27,
        question: "Which schedule contains the division of powers (Lists)?",
        options: ["6th", "7th", "8th", "9th"],
        correctAnswer: 1,
        explanation: "7th Schedule (Union, State, Concurrent Lists).",
        subtopic: "15.1"
    },
    {
        id: 28,
        question: "Anti-Defection Law is in which Schedule?",
        options: ["8th", "9th", "10th", "11th"],
        correctAnswer: 2,
        explanation: "10th Schedule.",
        subtopic: "13.0"
    },
    {
        id: 29,
        question: "Who calls the joint sitting of Parliament?",
        options: ["Speaker", "President", "PM", "Vice President"],
        correctAnswer: 1,
        explanation: "President summons it (Art 108).",
        subtopic: "18.3"
    },
    {
        id: 30,
        question: "Who presides over the joint sitting?",
        options: ["President", "Speaker of Lok Sabha", "Chairman of Rajya Sabha", "PM"],
        correctAnswer: 1,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "18.3"
    },
    // Random high yields
    {
        id: 31,
        question: "Minimum age for President?",
        options: ["25", "30", "35", "40"],
        correctAnswer: 2,
        explanation: "35 years.",
        subtopic: "18.1"
    },
    {
        id: 32,
        question: "Minimum age for PM (if from Lok Sabha)?",
        options: ["21", "25", "30", "35"],
        correctAnswer: 1,
        explanation: "25 years.",
        subtopic: "20.1"
    },
    {
        id: 33,
        question: "Impeachment of President can be initiated in:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Either House", "Joint Sitting"],
        correctAnswer: 2,
        explanation: "Either House.",
        subtopic: "18.2"
    },
    {
        id: 34,
        question: "The President nominates how many members to Rajya Sabha?",
        options: ["2", "10", "12", "14"],
        correctAnswer: 2,
        explanation: "12 members.",
        subtopic: "18.3"
    },
    {
        id: 35,
        question: "Disputes regarding election of VP are decided by:",
        options: ["EC", "Parliament", "Supreme Court", "President"],
        correctAnswer: 2,
        explanation: "Supreme Court.",
        subtopic: "19.1"
    },
    {
        id: 36,
        question: "A money bill can be introduced in Rajya Sabha.",
        options: ["True", "False", "Only with Speaker permission", "Only if FM is from RS"],
        correctAnswer: 1,
        explanation: "False. Only in Lok Sabha.",
        subtopic: "18.3"
    },
    {
        id: 37,
        question: "Who is the first law officer of the Government of India?",
        options: ["CJI", "Law Minister", "Attorney General", "Solicitor General"],
        correctAnswer: 2,
        explanation: "Attorney General (Article 76).",
        subtopic: "21.0"
    },
    {
        id: 38,
        question: "Can Attorney General vote in Parliament?",
        options: ["Yes", "No", "In case of tie", "In joint sitting"],
        correctAnswer: 1,
        explanation: "He can speak/attend but CANNOT vote.",
        subtopic: "21.0"
    },
    {
        id: 39,
        question: "The term of the Lok Sabha is normally:",
        options: ["4 years", "5 years", "6 years", "Permanent"],
        correctAnswer: 1,
        explanation: "5 years.",
        subtopic: "13.0"
    },
    {
        id: 40,
        question: "The Rajya Sabha is:",
        options: ["Dissolved every 5 years", "Dissolved every 6 years", "A permanent body", "Dissolved by President"],
        correctAnswer: 2,
        explanation: "Permanent body. 1/3rd members retire every 2 years.",
        subtopic: "13.0"
    },
    // Emergency & Federal
    {
        id: 41,
        question: "Which Article gives Special Status to J&K (now abrogated/diluted)?",
        options: ["370", "371", "35A", "360"],
        correctAnswer: 0,
        explanation: "Article 370.",
        subtopic: "14.2"
    },
    {
        id: 42,
        question: "Which Article mandates the State to separate Judiciary from Executive?",
        options: ["Article 50", "Article 51", "Article 40", "Article 44"],
        correctAnswer: 0,
        explanation: "Article 50 (DPSP).",
        subtopic: "11.0"
    },
    {
        id: 43,
        question: "Uniform Civil Code is mentioned in:",
        options: ["Article 44", "Article 40", "Article 45", "Article 51A"],
        correctAnswer: 0,
        explanation: "Article 44.",
        subtopic: "11.0"
    },
    {
        id: 44,
        question: "Fundamental Duties were added by recommendation of:",
        options: ["Verma Committee", "Sarkaria Commission", "Swaran Singh Committee", "Mandal Commission"],
        correctAnswer: 2,
        explanation: "Swaran Singh Committee (1976).",
        subtopic: "11.0"
    },
    {
        id: 45,
        question: "Which amendment reduced voting age from 21 to 18?",
        options: ["42nd", "44th", "61st", "73rd"],
        correctAnswer: 2,
        explanation: "61st Amendment Act, 1988.",
        subtopic: "11.1"
    },
    {
        id: 46,
        question: "Which amendment is known as 'Mini-Constitution'?",
        options: ["1st", "42nd", "44th", "73rd"],
        correctAnswer: 1,
        explanation: "42nd Amendment Act 1976.",
        subtopic: "11.1"
    },
    {
        id: 47,
        question: "The Preamble was amended:",
        options: ["Never", "Once", "Twice", "Thrice"],
        correctAnswer: 1,
        explanation: "Once, by 42nd Amendment (added Socialist, Secular, Integrity).",
        subtopic: "11.0"
    },
    {
        id: 48,
        question: "In Preamble, the source of authority of the Constitution is:",
        options: ["The Supreme Court", "The Government", "The People of India", "The Constituent Assembly"],
        correctAnswer: 2,
        explanation: "The People of India.",
        subtopic: "11.0"
    },
    {
        id: 49,
        question: "Habeas Corpus literally means:",
        options: ["To have the body", "We Command", "To forbid", "By what authority"],
        correctAnswer: 0,
        explanation: "To have the body.",
        subtopic: "11.0"
    },
    {
        id: 50,
        question: "Mandamus can be issued against:",
        options: ["Private individual", "Public Official/Body", "President", "Governor"],
        correctAnswer: 1,
        explanation: "Public Official/Body to perform official duties. Not against President/Governor.",
        subtopic: "11.0"
    },
    // Final Mix
    {
        id: 51,
        question: "Who is the guardian of the Constitution?",
        options: ["President", "Parliament", "Supreme Court", "Public"],
        correctAnswer: 2,
        explanation: "Supreme Court.",
        subtopic: "11.0"
    },
    {
        id: 52,
        question: "Tenth Schedule was added by:",
        options: ["52nd Amendment", "42nd Amendment", "73rd Amendment", "91st Amendment"],
        correctAnswer: 0,
        explanation: "52nd Amendment Act, 1985 (Anti-Defection Law).",
        subtopic: "11.1"
    },
    {
        id: 53,
        question: "Panchayati Raj was given constitutional status by:",
        options: ["73rd Amendment", "74th Amendment", "42nd Amendment", "69th Amendment"],
        correctAnswer: 0,
        explanation: "73rd Amendment Act 1992.",
        subtopic: "33.0" // Upcoming but good to know
    },
    {
        id: 54,
        question: "The ex-officio Chairman of the Council of States is:",
        options: ["Vice-President", "President", "Speaker", "PM"],
        correctAnswer: 0,
        explanation: "Vice-President.",
        subtopic: "19.3"
    },
    {
        id: 55,
        question: "A person can remain a Minister without being a member of Parliament for:",
        options: ["6 months", "1 year", "3 months", "Forever"],
        correctAnswer: 0,
        explanation: "6 months.",
        subtopic: "21.1"
    },
    {
        id: 56,
        question: "Who appoints the Judges of the High Court?",
        options: ["Governor", "Chief Justice of HC", "President", "Chief Minister"],
        correctAnswer: 2,
        explanation: "President (after consultation with CJI + Governor).",
        subtopic: "18.3"
    },
    {
        id: 57,
        question: "The maximum gap between two sessions of Parliament:",
        options: ["3 months", "4 months", "6 months", "9 months"],
        correctAnswer: 2,
        explanation: "6 months (Article 85).",
        subtopic: "13.0"
    },
    {
        id: 58,
        question: "Who certifies a bill as a Money Bill?",
        options: ["President", "Prime Minister", "Speaker of Lok Sabha", "Finance Minister"],
        correctAnswer: 2,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "18.3"
    },
    {
        id: 59,
        question: "Which state has no Panchayati Raj institution?",
        options: ["Nagaland", "Assam", "Kerala", "Tripura"],
        correctAnswer: 0,
        explanation: "Nagaland.",
        subtopic: "14.2"
    },
    {
        id: 60,
        question: "The President's Rule in a state can be continued for a maximum period of (normally):",
        options: ["1 year", "2 years", "6 months", "3 years"],
        correctAnswer: 3,
        explanation: "Maximum 3 years (under special conditions).",
        subtopic: "17.2"
    }
];

export default DAY6_MCQS;
