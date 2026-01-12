
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

export const DAY22_MCQS: MCQ[] = [
    // ==========================================
    // ATTORNEY GENERAL OF INDIA (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "Article 76 deals with:",
        options: ["Advocate General", "Attorney General", "Solicitor General", "CAG"],
        correctAnswer: 1,
        explanation: "Attorney General of India.",
        subtopic: "38.3"
    },
    {
        id: 2,
        question: "Attorney General is appointed by:",
        options: ["PM", "President", "CJI", "Law Minister"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "38.3"
    },
    {
        id: 3,
        question: "Who fixes the remuneration of the Attorney General?",
        options: ["Parliament", "Constitution", "President", "Supreme Court"],
        correctAnswer: 2,
        explanation: "President.",
        subtopic: "38.3"
    },
    {
        id: 4,
        question: "Does AG have the right to vote in Parliament?",
        options: ["Yes", "No", "Only in Joint Sitting", "Only on constitutional bills"],
        correctAnswer: 1,
        explanation: "No. He has right to speak but not to vote (Article 88).",
        subtopic: "38.3"
    },
    {
        id: 5,
        question: "Qualification for AG?",
        options: ["Qualified to be HC Judge", "Qualified to be SC Judge", "Eminent Jurist only", "10 years practice"],
        correctAnswer: 1,
        explanation: "Qualified to be appointed a Judge of the Supreme Court.",
        subtopic: "38.3"
    },
    {
        id: 6,
        question: "AG holds office during:",
        options: ["5 years", "6 years", "Pleasure of President", "Pleasure of PM"],
        correctAnswer: 2,
        explanation: "Pleasure of the President.",
        subtopic: "38.3"
    },
    {
        id: 7,
        question: "Who assists the Attorney General?",
        options: ["Solicitor General", "Advocate General", "Law Secretary", "Registrar"],
        correctAnswer: 0,
        explanation: "Solicitor General of India (and Additional SGs).",
        subtopic: "38.3"
    },
    {
        id: 8,
        question: "Article 88 is related to:",
        options: ["Rights of Ministers and AG in Houses", "Duties of PM", "Conduct of Business", "Sessions"],
        correctAnswer: 0,
        explanation: "Rights of Ministers and Attorney General as respects Houses.",
        subtopic: "38.3"
    },
    {
        id: 9,
        question: "Can AG defend accused persons in criminal prosecutions?",
        options: ["Yes", "No (without permission)", "Always No", "Yes (if not govt servant)"],
        correctAnswer: 1,
        explanation: "No, without the permission of the Government of India.",
        subtopic: "38.3"
    },
    {
        id: 10,
        question: "Is AG a member of the Central Cabinet?",
        options: ["Yes", "No", "Invitee", "Ex-officio"],
        correctAnswer: 1,
        explanation: "No. He is not a member of the Cabinet.",
        subtopic: "38.3"
    },
    {
        id: 11,
        question: "First Attorney General of India:",
        options: ["M.C. Setalvad", "C.K. Daphtary", "Niren De", "Soli Sorabjee"],
        correctAnswer: 0,
        explanation: "M.C. Setalvad (Wait, longest serving). Yes, also the First.",
        subtopic: "38.3"
    },
    {
        id: 12,
        question: "Which of these is NOT a constitutional body?",
        options: ["UPSC", "Election Commission", "Solicitor General", "CAG"],
        correctAnswer: 2,
        explanation: "Solicitor General is not mentioned in Constitution (Statutory/Executive).",
        subtopic: "38.3"
    },
    {
        id: 13,
        question: "Right of audience of AG extends to:",
        options: ["Supreme Court only", "High Courts only", "All courts in territory of India", "Parliament only"],
        correctAnswer: 2,
        explanation: "All courts in the territory of India.",
        subtopic: "38.3"
    },
    {
        id: 14,
        question: "AG submits resignation to:",
        options: ["PM", "CJI", "President", "Speaker"],
        correctAnswer: 2,
        explanation: "President.",
        subtopic: "38.3"
    },
    {
        id: 15,
        question: "Does AG fall under RTI?",
        options: ["Yes", "No", "Partially", "Public Authority definition debate"],
        correctAnswer: 3,
        explanation: "Debatable, but historically Delhi HC said AG is not a public authority. Recent views vary.",
        subtopic: "38.3"
    },
    {
        id: 16,
        question: "Conventionally, AG resigns when:",
        options: ["Government resigns", "President resigns", "CJI retires", "Term ends"],
        correctAnswer: 0,
        explanation: "When the Government (Council of Ministers) resigns or is replaced, as he is appointed on its advice.",
        subtopic: "38.3"
    },
    {
        id: 17,
        question: "Can AG be appointed as a Director in any company?",
        options: ["Yes", "No (without permission)", "Always No", "Always Yes"],
        correctAnswer: 1,
        explanation: "No, without the permission of the Government.",
        subtopic: "38.3"
    },
    {
        id: 18,
        question: "Can AG advise ministries?",
        options: ["Yes", "No, Law Ministry does", "Only if referred", "Directly"],
        correctAnswer: 2,
        explanation: "He gives advice on legal matters referred to him by the President (Govt).",
        subtopic: "38.3"
    },
    {
        id: 19,
        question: "Article 105 also applies to?",
        options: ["AG", "CAG", "CEC", "UPSC Chair"],
        correctAnswer: 0,
        explanation: "Yes, AG enjoys privileges and immunities of MP (Article 105(4)).",
        subtopic: "38.3"
    },
    {
        id: 20,
        question: "British vs Indian AG?",
        options: ["Indian AG is member of Cabinet", "British AG is not member of Cabinet", "British AG is member of Cabinet", "None"],
        correctAnswer: 2,
        explanation: "In Britain, AG is a member of the Cabinet. In India, he is not.",
        subtopic: "38.3"
    },
    { id: 21, question: "Who appears on behalf of GoI in SC?", options: ["AG", "Law Minister", "Home Secretary", "PM"], correctAnswer: 0, subtopic: "38.3" },
    { id: 22, question: "Can AG take part in Joint Sitting?", options: ["Yes", "No", "Only if summoned", "As observer"], correctAnswer: 0, subtopic: "38.3" },
    { id: 23, question: "Are AG's comments in Parliament actionable in court?", options: ["No", "Yes", "Depends", "If defamatory"], correctAnswer: 0, subtopic: "38.3" }, // Protected by privileges
    { id: 24, question: "Who determines duties of AG?", options: ["President", "Parliament", "Constitution", "CJI"], correctAnswer: 0, subtopic: "38.3" },
    { id: 25, question: "Term 'Law Officer' usually includes?", options: ["AG & SG", "AG, SG, Judges", "Police", "Magistrates"], correctAnswer: 0, subtopic: "38.3" },
    { id: 26, question: "Current Attorney General (2026 Context)?", options: ["R. Venkataramani", "K.K. Venugopal", "Mukul Rohatgi", "Harish Salve"], correctAnswer: 0, subtopic: "38.3" }, // Update if changed, usually static content
    { id: 27, question: "Removal procedure of AG?", options: ["Impeachment", "President pleasure", "SC Inquiry", "Parl Resolution"], correctAnswer: 1, subtopic: "38.3" },
    { id: 28, question: "Does Constitution debar AG from private practice?", options: ["No", "Yes", "Implied", "Partially"], correctAnswer: 0, subtopic: "38.3" },
    { id: 29, question: "AG is part of Union Executive?", options: ["Yes", "No", "Part of Judiciary", "Legislature"], correctAnswer: 0, subtopic: "38.3" }, // Art 52-78 Part V
    { id: 30, question: "Can AG speak in committee of Parliament?", options: ["Yes, if named a member", "No", "Always", "Only Chairman"], correctAnswer: 0, subtopic: "38.3" },

    // ==========================================
    // ADVOCATE GENERAL (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "Article 165 deals with:",
        options: ["Advocate General", "AG", "Governor", "CM"],
        correctAnswer: 0,
        explanation: "Advocate General for the State.",
        subtopic: "38.3"
    },
    {
        id: 32,
        question: "Advocate General is appointed by:",
        options: ["President", "Governor", "CM", "Chief Justice of HC"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "38.3"
    },
    {
        id: 33,
        question: "Qualification for Advocate General?",
        options: ["Qualified to be SC Judge", "Qualified to be HC Judge", "10 yrs advocate", "Eminent Jurist"],
        correctAnswer: 1,
        explanation: "Qualified to be appointed a Judge of a High Court.",
        subtopic: "38.3"
    },
    {
        id: 34,
        question: "Advocate General holds office during pleasure of:",
        options: ["President", "Governor", "CM", "High Court"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "38.3"
    },
    {
        id: 35,
        question: "Can Advocate General vote in State Legislature?",
        options: ["Yes", "No", "In Upper House", "In Lower House"],
        correctAnswer: 1,
        explanation: "No. Right to speak but not to vote (Article 177).",
        subtopic: "38.3"
    },
    {
        id: 36,
        question: "Who fixes remuneration of Advocate General?",
        options: ["Governor", "State Legislature", "Parliament", "Constitution"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "38.3"
    },
    {
        id: 37,
        question: "Article 177 corresponds to Union Article:",
        options: ["88", "76", "78", "75"],
        correctAnswer: 0,
        explanation: "Article 88 (Rights of Ministers and AG).",
        subtopic: "38.3"
    },
    {
        id: 38,
        question: "Does Advocate General have right of audience in all courts in India?",
        options: ["Yes", "No, only in State", "In SC also", "Adjacent states"],
        correctAnswer: 1,
        explanation: "Right of audience in any court in the STATE (jurisdiction matter). Though functionally they appear in SC for State.",
        subtopic: "38.3"
    },
    {
        id: 39,
        question: "Is Advocate General a government servant?",
        options: ["Yes", "No", "Part-time", "Contractual"],
        correctAnswer: 1,
        explanation: "No. (Same as AG).",
        subtopic: "38.3"
    },
    {
        id: 40,
        question: "Advocate General resigns to:",
        options: ["Governor", "President", "CM", "CJI"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "38.3"
    },
    { id: 41, question: "Highest Law Officer in State?", options: ["Advocate General", "AG", "Law Minister", "Chief Justice"], correctAnswer: 0, subtopic: "38.3" },
    { id: 42, question: "Is Advocate General member of State Cabinet?", options: ["No", "Yes", "Invitee", "Sometimes"], correctAnswer: 0, subtopic: "38.3" },
    { id: 43, question: "Can Adv Gen attend State Legislature committee?", options: ["Yes if named", "No", "Always", "Only PACS"], correctAnswer: 0, subtopic: "38.3" },
    { id: 44, question: "Does Constitution fix Adv Gen tenure?", options: ["No", "Yes 5 yrs", "Yes 6 yrs", "Till 62"], correctAnswer: 0, subtopic: "38.3" },
    { id: 45, question: "Adv Gen Privileges are same as?", options: ["MLA", "MP", "Judge", "Secretary"], correctAnswer: 0, subtopic: "38.3" }, // Art 194
    { id: 46, question: "Who assigns duties to Advocate General?", options: ["Governor", "CM", "State Legislature", "HC"], correctAnswer: 0, subtopic: "38.3" },
    { id: 47, question: "Advocate General is part of State Executive?", options: ["Yes", "No", "Judiciary", "Legislature"], correctAnswer: 0, subtopic: "38.3" }, // Art 153-167
    { id: 48, question: "Can Adv Gen hold private practice?", options: ["Yes", "No", "Limited", "With permission"], correctAnswer: 0, subtopic: "38.3" },
    { id: 49, question: "Qualification: Judicial Office requirement for HC Judge/Adv Gen?", options: ["10 years", "5 years", "7 years", "15 years"], correctAnswer: 0, subtopic: "38.3" },
    { id: 50, question: "Conventionally Adv Gen resigns when?", options: ["Govt resigns", "Governor changes", "CM changes", "Term ends"], correctAnswer: 0, subtopic: "38.3" },
    { id: 51, question: "Does Adv Gen salary charge on Consol Fund?", options: ["No, fees based", "Yes", "Voted", "Contingency"], correctAnswer: 0, subtopic: "38.3" }, // Not charged usually, determined by Governor
    { id: 52, question: "Advocate General vs Attorney General appointment?", options: ["Governor vs President", "President vs Governor", "Same", "None"], correctAnswer: 0, subtopic: "38.3" },
    { id: 53, question: "Can Governor remove Adv Gen anytime?", options: ["Yes", "No", "With inquiry", "On CM advice only"], correctAnswer: 0, subtopic: "38.3" },
    { id: 54, question: "Is Adv Gen considered public servant under IPC?", options: ["Yes", "No", "Debatable", "Only in court"], correctAnswer: 0, subtopic: "38.3" }, // Yes for IPC 21
    { id: 55, question: "Can Adv Gen initiate contempt proceedings?", options: ["Yes", "No", "Only AG", "Only Court"], correctAnswer: 0, subtopic: "38.3" },
    { id: 56, question: "First Advocate General of a State appointed under?", options: ["Constitution", "GOI Act 1935", "Charter Act", "None"], correctAnswer: 1, subtopic: "38.3" }, // Provincial Autonomy
    { id: 57, question: "Does Article 165 mention Solicitor General of State?", options: ["No", "Yes", "Implicitly", "Amendment"], correctAnswer: 0, subtopic: "38.3" },
    { id: 58, question: "Can Adv Gen be reappointed?", options: ["Yes", "No", "Once", "Twice"], correctAnswer: 0, subtopic: "38.3" },
    { id: 59, question: "Age limit for Advocate General?", options: ["No limit in Constitution", "62", "65", "60"], correctAnswer: 0, subtopic: "38.3" },
    { id: 60, question: "Advocate General appears for?", options: ["State Govt", "Central Govt", "Public", "Governor"], correctAnswer: 0, subtopic: "38.3" }
];

export default DAY22_MCQS;
