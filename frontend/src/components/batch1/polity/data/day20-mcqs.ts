
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

export const DAY20_MCQS: MCQ[] = [
    // ==========================================
    // JUDICIARY EXTENSIONS REVISION (1-10)
    // ==========================================
    {
        id: 1,
        question: "Tribunals were added to Constitution by:",
        options: ["42nd Amendment", "44th Amendment", "1st Amendment", "73rd Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment (Part XIV-A).",
        subtopic: "36.1"
    },
    {
        id: 2,
        question: "Who appoints District Judges?",
        options: ["Governor", "High Court CJ", "President", "CM"],
        correctAnswer: 0,
        explanation: "Governor in consultation with High Court (Art 233).",
        subtopic: "37.1"
    },
    {
        id: 3,
        question: "The 'Basic Structure' doctrine limits:",
        options: ["Judicial Review", "Amending Power of Parliament", "President's Power", "Governor's Power"],
        correctAnswer: 1,
        explanation: "It limits the amending power of Parliament (Kesavananda Bharati).",
        subtopic: "28.2"
    },
    {
        id: 4,
        question: "PIL mechanism is primarily based on:",
        options: ["Adversarial System", "Inquisitorial System", "Relaxation of Locus Standi", "Strict Procedure"],
        correctAnswer: 2,
        explanation: "Relaxation of Locus Standi rule.",
        subtopic: "30.1"
    },
    {
        id: 5,
        question: "Gram Nyayalayas Act was passed in:",
        options: ["2008", "2005", "2000", "2010"],
        correctAnswer: 0,
        explanation: "2008.",
        subtopic: "37.5"
    },
    {
        id: 6,
        question: "Central Administrative Tribunal (CAT) members are appointed by:",
        options: ["President", "CJI", "Law Minister", "UPSC"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "36.1"
    },
    {
        id: 7,
        question: "Judicial Review can be exercised by:",
        options: ["Supreme Court only", "High Courts only", "Both SC and HC", "Tribunals"],
        correctAnswer: 2,
        explanation: "Both Supreme Court and High Courts.",
        subtopic: "28.1"
    },
    {
        id: 8,
        question: "Lok Adalat awards are:",
        options: ["Advisory", "Binding", "Appealable", "None"],
        correctAnswer: 1,
        explanation: "Binding and non-appealable.",
        subtopic: "37.4"
    },
    {
        id: 9,
        question: "Legal Services Authorities Act, 1987 implements which DPSP?",
        options: ["Art 39A", "Art 40", "Art 44", "Art 50"],
        correctAnswer: 0,
        explanation: "Article 39A (Free Legal Aid).",
        subtopic: "37.7"
    },
    {
        id: 10,
        question: "Ninth Schedule laws are open to judicial review if added after:",
        options: ["1973", "1951", "1976", "1980"],
        correctAnswer: 0,
        explanation: "April 24, 1973 (Kesavananda Bharati judgment date).",
        subtopic: "28.2"
    },

    // ==========================================
    // FEDERAL EXTENSIONS REVISION (11-20)
    // ==========================================
    {
        id: 11,
        question: "Chairperson of GST Council?",
        options: ["PM", "Union Finance Minister", "RBI Governor", "President"],
        correctAnswer: 1,
        explanation: "Union Finance Minister.",
        subtopic: "47.2"
    },
    {
        id: 12,
        question: "Article 279A deals with:",
        options: ["Finance Commission", "GST Council", "Inter-State Council", "Zonal Council"],
        correctAnswer: 1,
        explanation: "GST Council.",
        subtopic: "47.1"
    },
    {
        id: 13,
        question: "NITI Aayog replaced:",
        options: ["Planning Commission", "NDC", "Finance Commission", "Inter-State Council"],
        correctAnswer: 0,
        explanation: "Planning Commission.",
        subtopic: "55.1"
    },
    {
        id: 14,
        question: "Vice-Chairman of NITI Aayog has the rank of:",
        options: ["Cabinet Minister", "Minister of State", "Safety Secretary", "Cabinet Secretary"],
        correctAnswer: 0,
        explanation: "Cabinet Minister.",
        subtopic: "55.2"
    },
    {
        id: 15,
        question: "GST Council decision quorum?",
        options: ["1/2", "1/3", "2/3", "3/4"],
        correctAnswer: 0,
        explanation: "One-half of total members.",
        subtopic: "47.2"
    },
    {
        id: 16,
        question: "States' vote weightage in GST Council?",
        options: ["2/3", "1/3", "1/2", "3/4"],
        correctAnswer: 0,
        explanation: "Two-thirds.",
        subtopic: "47.2"
    },
    {
        id: 17,
        question: "Aspirational Districts Programme is by:",
        options: ["NITI Aayog", "Ministry of Home", "Ministry of Rural Dev", "UNDP"],
        correctAnswer: 0,
        explanation: "NITI Aayog.",
        subtopic: "55.5"
    },
    {
        id: 18,
        question: "Who is the CEO of NITI Aayog appointed by?",
        options: ["PM", "President", "Governing Council", "UPSC"],
        correctAnswer: 0,
        explanation: "Prime Minister.",
        subtopic: "55.2"
    },
    {
        id: 19,
        question: "Which of these is NOT subsumed in GST?",
        options: ["Central Excise", "Service Tax", "VAT", "Basic Customs Duty"],
        correctAnswer: 3,
        explanation: "Basic Customs Duty is NOT subsumed. (Countervailing duty is).",
        subtopic: "47.3"
    },
    {
        id: 20,
        question: "Cooperative Federalism is the core of:",
        options: ["NITI Aayog", "Planning Commission", "Finance Commission", "UPSC"],
        correctAnswer: 0,
        explanation: "NITI Aayog.",
        subtopic: "55.3"
    },

    // ==========================================
    // PHILOSOPHY REVISION (21-30)
    // ==========================================
    {
        id: 21,
        question: "DPSP are 'fundamental in the governance of the country' - Article?",
        options: ["37", "36", "38", "39"],
        correctAnswer: 0,
        explanation: "Article 37.",
        subtopic: "9.1"
    },
    {
        id: 22,
        question: "Which Amendment added 11th Fundamental Duty?",
        options: ["86th", "42nd", "44th", "97th"],
        correctAnswer: 0,
        explanation: "86th Amendment Act, 2002.",
        subtopic: "10.1"
    },
    {
        id: 23,
        question: "UCC is mentioned in Article:",
        options: ["44", "45", "46", "40"],
        correctAnswer: 0,
        explanation: "Article 44.",
        subtopic: "9.2"
    },
    {
        id: 24,
        question: "To respect National Flag is a:",
        options: ["Fundamental Duty", "DPSP", "Legal Right", "None"],
        correctAnswer: 0,
        explanation: "Fundamental Duty (Art 51A(a)).",
        subtopic: "10.2"
    },
    {
        id: 25,
        question: "Instrument of Instructions refers to:",
        options: ["DPSP", "Fundamental Rights", "Preamble", "Fundamental Duties"],
        correctAnswer: 0,
        explanation: "DPSP (resemble Instrument of Instructions of GOI Act 1935).",
        subtopic: "9.1"
    },
    {
        id: 26,
        question: "Right to Work is in Article:",
        options: ["41", "42", "43", "40"],
        correctAnswer: 0,
        explanation: "Article 41.",
        subtopic: "9.2"
    },
    {
        id: 27,
        question: "Separation of Judiciary from Executive - Article:",
        options: ["50", "51", "49", "48"],
        correctAnswer: 0,
        explanation: "Article 50.",
        subtopic: "9.2"
    },
    {
        id: 28,
        question: "Is 'Paying Taxes' a Fundamental Duty?",
        options: ["No", "Yes", "Recommended but not added", "Implied"],
        correctAnswer: 0,
        explanation: "No. Recommended by Swaran Singh Committee but not added.",
        subtopic: "10.1"
    },
    {
        id: 29,
        question: "Article 31C saves laws implementing:",
        options: ["Art 39(b) and (c)", "Art 44", "Art 40", "All DPSP"],
        correctAnswer: 0,
        explanation: "Art 39(b) and (c).",
        subtopic: "9.4"
    },
    {
        id: 30,
        question: "Which part of Constitution deals with Welfare State ideals?",
        options: ["Part IV (DPSP)", "Part III (FR)", "Preamble only", "Part IVA"],
        correctAnswer: 0,
        explanation: "Part IV (DPSP).",
        subtopic: "9.1"
    },

    // ==========================================
    // CONSTITUTIONAL BODIES REVISION (31-60)
    // ==========================================
    {
        id: 31,
        question: "Election Commission Article?",
        options: ["324", "326", "325", "329"],
        correctAnswer: 0,
        explanation: "Article 324.",
        subtopic: "38.1"
    },
    {
        id: 32,
        question: "Removal of CEC is same as:",
        options: ["SC Judge", "HC Judge", "President", "Minister"],
        correctAnswer: 0,
        explanation: "Judge of Supreme Court.",
        subtopic: "38.1"
    },
    {
        id: 33,
        question: "CAG is appointed by:",
        options: ["President", "PM", "Parliament", "Selection Committee"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "25.1"
    },
    {
        id: 34,
        question: "Tenure of CAG?",
        options: ["6 years / 65 age", "5 years / 65 age", "6 years / 62 age", "5 years / 60 age"],
        correctAnswer: 0,
        explanation: "6 years or 65 years of age.",
        subtopic: "25.1"
    },
    {
        id: 35,
        question: "Article 315 deals with:",
        options: ["UPSC & SPSC", "UPSC only", "SPSC only", "Election Commission"],
        correctAnswer: 0,
        explanation: "Public Service Commissions for Union and States.",
        subtopic: "38.1"
    },
    {
        id: 36,
        question: "Who removes SPSC Chairman?",
        options: ["President", "Governor", "Parliament", "Supreme Court"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry).",
        subtopic: "38.2"
    },
    {
        id: 37,
        question: "Finance Commission Article?",
        options: ["280", "279A", "268", "275"],
        correctAnswer: 0,
        explanation: "Article 280.",
        subtopic: "22.1"
    },
    {
        id: 38,
        question: "National Commission for SCs (NCSC) Article?",
        options: ["338", "338A", "338B", "340"],
        correctAnswer: 0,
        explanation: "Article 338.",
        subtopic: "39.2"
    },
    {
        id: 39,
        question: "NCST was created by:",
        options: ["89th Amendment", "65th Amendment", "91st Amendment", "86th Amendment"],
        correctAnswer: 0,
        explanation: "89th Amendment Act, 2003.",
        subtopic: "39.2"
    },
    {
        id: 40,
        question: "NCBC Constitutional Status Amendment?",
        options: ["102nd", "101st", "103rd", "104th"],
        correctAnswer: 0,
        explanation: "102nd Amendment Act, 2018.",
        subtopic: "39.2"
    },
    { id: 41, question: "CAG audits accounts of?", options: ["Centre & States", "Centre only", "States only", "PSUs only"], correctAnswer: 0, subtopic: "25.1" },
    { id: 42, question: "Special Officer Linguistic Minorities Article?", options: ["350B", "350A", "351", "343"], correctAnswer: 0, subtopic: "39.3" },
    { id: 43, question: "UPSC Annual Report submitted to?", options: ["President", "Parliament", "DoPT", "PM"], correctAnswer: 0, subtopic: "38.1" },
    { id: 44, question: "State Election Commissioner appointed by?", options: ["Governor", "President", "CEC", "CM"], correctAnswer: 0, subtopic: "38.1" },
    { id: 45, question: "Can SPSC member become UPSC member?", options: ["Yes", "No", "Only Chairman", "After 2 years"], correctAnswer: 0, subtopic: "38.2" },
    { id: 46, question: "Finance Commission members eligible for reappointment?", options: ["Yes", "No", "Only once", "Only Chair"], correctAnswer: 0, subtopic: "22.1" },
    { id: 47, question: "Model Code of Conduct implies?", options: ["Guidelines", "Law", "Constitutional rule", "Court order"], correctAnswer: 0, subtopic: "93.1" },
    { id: 48, question: "Article 320(4) excludes UPSC from?", options: ["Reservation matters", "Recruitment", "Disciplinary", "Pension"], correctAnswer: 0, subtopic: "38.1" },
    { id: 49, question: "Who certifies the net proceeds of tax?", options: ["CAG", "Finance Minister", "Finance Commission", "PM"], correctAnswer: 0, subtopic: "25.1" }, // Art 279
    { id: 50, question: "Delimitation Commission is headed by?", options: ["Retired SC Judge", "CEC", "Speaker", "PM"], correctAnswer: 0, subtopic: "70.1" },
    { id: 51, question: "Number of Election Commissioners fixed by?", options: ["President", "Parliament", "Constitution", "CEC"], correctAnswer: 0, subtopic: "38.1" },
    { id: 52, question: "First Chief Election Commissioner?", options: ["Sukumar Sen", "T.N. Seshan", "V.S. Ramadevi", "K.V.K. Sundaram"], correctAnswer: 0, subtopic: "38.1" },
    { id: 53, question: "Audit reports of CAG laid before State Legislature by?", options: ["Governor", "CAG", "Speaker", "CM"], correctAnswer: 0, subtopic: "25.1" },
    { id: 54, question: "UPSC Members removal inquiry by?", options: ["Supreme Court", "High Court", "Parliament", "CBI"], correctAnswer: 0, subtopic: "38.1" },
    { id: 55, question: "Does SPSC present report to President?", options: ["No, to Governor", "Yes", "If Joint SPSC", "If President Rule"], correctAnswer: 0, subtopic: "38.2" },
    { id: 56, question: "Nodal Ministry for NCSC?", options: ["Social Justice", "Tribal Affairs", "Home", "HRD"], correctAnswer: 0, subtopic: "39.2" },
    { id: 57, question: "Article 338A?", options: ["NCST", "NCSC", "NCBC", "OBC"], correctAnswer: 0, subtopic: "39.2" },
    { id: 58, question: "Who removes CEC?", options: ["President on Parliament resolution", "President at pleasure", "PM", "CJI"], correctAnswer: 0, subtopic: "38.1" },
    { id: 59, question: "Voting Age reduced to 18 by?", options: ["61st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"], correctAnswer: 0, subtopic: "38.1" }, // 1988
    { id: 60, question: "Right to Vote is?", options: ["Constitutional Right", "Fundamental Right", "Natural Right", "Moral Right"], correctAnswer: 0, subtopic: "38.1" }
];

export default DAY20_MCQS;
