
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

export const DAY24_MCQS: MCQ[] = [
    // ==========================================
    // CIC (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "CIC was established in:",
        options: ["2005", "2002", "1993", "2010"],
        correctAnswer: 0,
        explanation: "2005 (Under RTI Act).",
        subtopic: "58.1"
    },
    {
        id: 2,
        question: "CIC falls under which Ministry?",
        options: ["Ministry of Personnel", "Home Ministry", "Ministry of Information & Broadcasting", "Social Justice"],
        correctAnswer: 0,
        explanation: "Ministry of Personnel, Public Grievances and Pensions.",
        subtopic: "58.1"
    },
    {
        id: 3,
        question: "The Committee to appoint CIC consists of PM, Leader of Opposition and?",
        options: ["Union Cabinet Minister nominated by PM", "Speaker of Lok Sabha", "CJI", "Home Minister"],
        correctAnswer: 0,
        explanation: "A Union Cabinet Minister nominated by the Prime Minister.",
        subtopic: "58.1"
    },
    {
        id: 4,
        question: "Maximum number of Information Commissioners (excluding CIC)?",
        options: ["10", "5", "7", "2"],
        correctAnswer: 0,
        explanation: "Not more than 10.",
        subtopic: "58.1"
    },
    {
        id: 5,
        question: "Who removes the Chief Information Commissioner?",
        options: ["President", "PM", "Parliament", "Supreme Court"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry on misbehavior).",
        subtopic: "58.1"
    },
    {
        id: 6,
        question: "Tenure of CIC (post-2019 Amendment)?",
        options: ["Prescribed by Central Govt", "5 years", "6 years", "Fixed by Constitution"],
        correctAnswer: 0,
        explanation: "Term as may be prescribed by the Central Government. (Currently 3 years rules).",
        subtopic: "58.1"
    },
    {
        id: 7,
        question: "Is CIC eligible for reappointment?",
        options: ["No", "Yes", "Once", "Twice"],
        correctAnswer: 0,
        explanation: "No, not eligible for reappointment.",
        subtopic: "58.1"
    },
    {
        id: 8,
        question: "An Information Commissioner can become Chief Information Commissioner?",
        options: ["Yes", "No", "Only if senior", "Only with PM approval"],
        correctAnswer: 0,
        explanation: "Yes, but total tenure (IC + CIC) cannot exceed 5 years (subject to age limit).",
        subtopic: "58.1"
    },
    {
        id: 9,
        question: "Age limit for CIC members?",
        options: ["65 years", "70 years", "62 years", "60 years"],
        correctAnswer: 0,
        explanation: "65 years.",
        subtopic: "58.1"
    },
    {
        id: 10,
        question: "Does CIC have powers of Civil Court?",
        options: ["Yes", "No", "Criminal Court", "High Court"],
        correctAnswer: 0,
        explanation: "Yes, regarding summoning, discovery etc.",
        subtopic: "58.2"
    },
    {
        id: 11,
        question: "Can CIC order penalties?",
        options: ["Yes", "No", "Recommend only", "Fine only on applicant"],
        correctAnswer: 0,
        explanation: "Yes, can impose penalty on Public Information Officer (PIO).",
        subtopic: "58.2"
    },
    {
        id: 12,
        question: "RTI Act replaced which Act?",
        options: ["Freedom of Information Act, 2002", "Official Secrets Act 1923", "IT Act 2000", "None"],
        correctAnswer: 0,
        explanation: "Freedom of Information Act, 2002.",
        subtopic: "58.1"
    },
    {
        id: 13,
        question: "Definition of 'Public Authority' under RTI includes?",
        options: ["Body funded substantially by Govt", "Private companies", "Individuals", "Foreign NGOs"],
        correctAnswer: 0,
        explanation: "Any authority established by Constitution/Parliament/State Leg or owned/controlled/substantially financed by Govt (including NGOs).",
        subtopic: "58.1"
    },
    {
        id: 14,
        question: "Political Parties under RTI status?",
        options: ["CIC declared them Public Authority but not enforced", "Completely under RTI", "Exempted by law", "None"],
        correctAnswer: 0,
        explanation: "CIC in 2013 declared national parties as public authorities, but parties have not complied and no amendment enforced it.",
        subtopic: "58.1"
    },
    {
        id: 15,
        question: "Grounds for removal of CIC do NOT include:",
        options: ["Violation of Constitution", "Insolvency", "Unsound mind", "Conviction"],
        correctAnswer: 0,
        explanation: "Standard grounds are Insolvency, Paid employment, Unfitness, Conviction. Misbehavior requires SC inquiry.",
        subtopic: "58.1"
    },
    {
        id: 16,
        question: "Annual Report of CIC submitted to?",
        options: ["Central Govt", "President", "Parliament", "PM"],
        correctAnswer: 0,
        explanation: "Central Government (laid before Parliament).",
        subtopic: "58.2"
    },
    {
        id: 17,
        question: "First Chief Information Commissioner of India?",
        options: ["Wajahat Habibullah", "A.N. Tiwari", "Satyananda Mishra", "Deepak Sandhu"],
        correctAnswer: 0,
        explanation: "Wajahat Habibullah (2005).",
        subtopic: "58.1"
    },
    {
        id: 18,
        question: "Can CIC recommend disciplinary action against PIO?",
        options: ["Yes", "No", "Only fine", "Only warning"],
        correctAnswer: 0,
        explanation: "Yes.",
        subtopic: "58.2"
    },
    {
        id: 19,
        question: "Does LoP in Selection Committee include Leader of single largest party?",
        options: ["Yes, if LoP not recognized", "No", "Speaker decides", "President decides"],
        correctAnswer: 0,
        explanation: "Yes, specifically mentioned for CIC (and CVC) that Leader of largest opposition group is included if no recognized LoP.",
        subtopic: "58.1"
    },
    {
        id: 20,
        question: "Salary of CIC is now determined by?",
        options: ["Central Govt", "Parliament", "Equivalent to CEC", "Constitutional Schedule"],
        correctAnswer: 0,
        explanation: "Central Government (2019 Amendment). Earlier it was equal to CEC.",
        subtopic: "58.1"
    },
    { id: 21, question: "Who appoints Information Commissioners?", options: ["President", "CIC", "PM", "Committee"], correctAnswer: 0, subtopic: "58.1" },
    { id: 22, question: "Does CIC have jurisdiction over UTs?", options: ["Yes", "No", "Only Delhi", "Only if requested"], correctAnswer: 0, subtopic: "58.2" },
    { id: 23, question: "Official Secrets Act 1923 vs RTI?", options: ["RTI overrides OSA (Sec 22)", "OSA overrides RTI", "Both equal", "Court decides"], correctAnswer: 0, subtopic: "58.1" },
    { id: 24, question: "Time limit for PIO to provide information?", options: ["30 days", "48 hours (life/liberty)", "15 days", "60 days"], correctAnswer: 0, subtopic: "58.2" },
    { id: 25, question: "Second Appeal lies with?", options: ["CIC/SIC", "First Appellate Authority", "High Court", "Supreme Court"], correctAnswer: 0, subtopic: "58.2" },
    { id: 26, question: "Are Intelligence Agencies exempt from RTI?", options: ["Yes (2nd Schedule)", "No", "Partially (only corruption/human rights)", "Never"], correctAnswer: 2, subtopic: "58.2" },
    { id: 27, question: "Fees for BPL applicants?", options: ["Exempted", "Reduced", "Same", "Refunded"], correctAnswer: 0, subtopic: "58.1" },
    { id: 28, question: "Maximum penalty CIC can impose?", options: ["Rs 25,000", "Rs 250", "Rs 1 Lakh", "Rs 50,000"], correctAnswer: 0, subtopic: "58.2" },
    { id: 29, question: "Can CIC inspect records?", options: ["Yes, even exempted ones", "No", "Only non-exempt", "With Court sign"], correctAnswer: 0, subtopic: "58.2" }, // Sec 18(4) - check?
    { id: 30, question: "Is CIC a high court?", options: ["No", "Quasi-judicial", "Judicial", "Administrative"], correctAnswer: 1, subtopic: "58.1" },

    // ==========================================
    // SIC (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "SIC constituted by:",
        options: ["State Govt", "Governor", "President", "Central Govt"],
        correctAnswer: 0,
        explanation: "State Government (Gazette Notification).",
        subtopic: "59.1"
    },
    {
        id: 32,
        question: "SIC members appointed by:",
        options: ["Governor", "President", "CM", "Chief Justice of HC"],
        correctAnswer: 0,
        explanation: "Governor (on recommendation of Committee).",
        subtopic: "59.1"
    },
    {
        id: 33,
        question: "SIC Selection Committee Head?",
        options: ["CM", "Governor", "Home Minister", "Speaker"],
        correctAnswer: 0,
        explanation: "Chief Minister.",
        subtopic: "59.1"
    },
    {
        id: 34,
        question: "SIC Selection Committee Members?",
        options: ["CM + LoP + State Cabinet Minister", "CM + Speaker + LoP", "CM + Governor + CJ", "CM only"],
        correctAnswer: 0,
        explanation: "CM, LoP in Assembly, and a State Cabinet Minister nominated by CM.",
        subtopic: "59.1"
    },
    {
        id: 35,
        question: "Who removes State Information Commissioner?",
        options: ["Governor", "President", "CM", "High Court"],
        correctAnswer: 0,
        explanation: "Governor (after SC inquiry). Note: For SHRC it is President, but for SIC it is Governor.",
        subtopic: "59.1"
    },
    {
        id: 36,
        question: "Tenure of SIC?",
        options: ["Prescribed by Central Govt", "Prescribed by State Govt", "5 years", "3 years"],
        correctAnswer: 0,
        explanation: "Prescribed by Central Government (2019 Amendment empowered Centre to fix tenure even for SICs).",
        subtopic: "59.1"
    },
    {
        id: 37,
        question: "Age limit for SIC?",
        options: ["65 years", "70 years", "62 years", "60 years"],
        correctAnswer: 0,
        explanation: "65 years.",
        subtopic: "59.1"
    },
    {
        id: 38,
        question: "Annual Report of SIC submitted to?",
        options: ["State Govt", "Governor", "CIC", "State Legislature"],
        correctAnswer: 0,
        explanation: "State Government (laid before State Legislature).",
        subtopic: "59.2"
    },
    {
        id: 39,
        question: "Are SIC and CIC hierarchically linked?",
        options: ["No, independent", "Yes, appeal to CIC", "SIC follows CIC orders", "Administratively linked"],
        correctAnswer: 0,
        explanation: "No. SIC is independent for state matters.",
        subtopic: "59.1"
    },
    {
        id: 40,
        question: "Can SIC impose penalty?",
        options: ["Yes", "No", "Recommend only", "Fine only"],
        correctAnswer: 0,
        explanation: "Yes (up to Rs 25,000).",
        subtopic: "59.2"
    },
    { id: 41, question: "Who nominates Minister in SIC Committee?", options: ["CM", "Governor", "Speaker", "LoP"], correctAnswer: 0, subtopic: "59.1" },
    { id: 42, question: "Removal grounds for SIC?", options: ["Insolvency, Conviction...", "Misbehavior (SC inquiry)", "Both", "None"], correctAnswer: 2, subtopic: "59.1" },
    { id: 43, question: "Can SIC punish for contempt?", options: ["No", "Yes", "Limited", "Refer to court"], correctAnswer: 0, subtopic: "59.2" },
    { id: 44, question: "Does SIC handle corruption cases?", options: ["Via RTI info", "Directly investigates", "Refers to Lokayukta", "No"], correctAnswer: 0, subtopic: "59.2" },
    { id: 45, question: "Is SIC eligible for reappointment?", options: ["No", "Yes", "Once", "As CIC yes"], correctAnswer: 0, subtopic: "59.1" }, // Not to same post, but can move to CIC? Yes.
    { id: 46, question: "Salary of SIC members?", options: ["Determined by Central Govt", "State Govt", "Governor", "Pay Commission"], correctAnswer: 0, subtopic: "59.1" }, // 2019 Amendment gave this power to Centre
    { id: 47, question: "Maximum members in SIC?", options: ["10", "5", "7", "Unlimited"], correctAnswer: 0, subtopic: "59.1" },
    { id: 48, question: "Is SIC a constitutional body?", options: ["No", "Yes", "Quasi-judicial", "Executive"], correctAnswer: 0, subtopic: "59.1" },
    { id: 49, question: "Resignation of SIC addressed to?", options: ["Governor", "CM", "President", "Chief Justice"], correctAnswer: 0, subtopic: "59.1" },
    { id: 50, question: "Can MP be SIC member?", options: ["No", "Yes", "If resigns MP post", "No restriction"], correctAnswer: 0, subtopic: "59.1" }, // Must not be MP/MLA
    { id: 51, question: "Can SIC inquiry suo motu?", options: ["Yes", "No", "Only on complaint", "With Court order"], correctAnswer: 0, subtopic: "59.2" },
    { id: 52, question: "Does RTI Act apply to J&K?", options: ["Yes (post 2019)", "No", "Separate Act", "Partially"], correctAnswer: 0, subtopic: "58.1" },
    { id: 53, question: "First Appellate Authority is usually?", options: ["Senior to PIO", "Junior to PIO", "CIC", "Court"], correctAnswer: 0, subtopic: "58.2" },
    { id: 54, question: "Time for First Appeal?", options: ["30 days", "60 days", "90 days", "15 days"], correctAnswer: 0, subtopic: "58.2" },
    { id: 55, question: "Time for Second Appeal (to CIC/SIC)?", options: ["90 days", "60 days", "30 days", "45 days"], correctAnswer: 0, subtopic: "58.2" },
    { id: 56, question: "Burden of proof in RTI lies on?", options: ["PIO (to justify denial)", "Applicant", "CIC", "Third party"], correctAnswer: 0, subtopic: "58.2" },
    { id: 57, question: "Section 4 of RTI deals with?", options: ["Suo Motu Disclosure", "Exemptions", "CIC", "Penalties"], correctAnswer: 0, subtopic: "58.1" },
    { id: 58, question: "Section 8 of RTI deals with?", options: ["Exemptions", "Procedures", "CIC", "SIC"], correctAnswer: 0, subtopic: "58.1" },
    { id: 59, question: "Who nominates Minister in CIC Committee?", options: ["PM", "President", "Speaker", "Cabinet"], correctAnswer: 0, subtopic: "58.1" },
    { id: 60, question: "Term 'Information' includes?", options: ["Records, memos, emails, samples", "Only files", "Only published", "None"], correctAnswer: 0, subtopic: "58.1" }
];

export default DAY24_MCQS;
