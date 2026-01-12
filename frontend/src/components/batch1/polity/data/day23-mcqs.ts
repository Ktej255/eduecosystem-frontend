
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

export const DAY23_MCQS: MCQ[] = [
    // ==========================================
    // NHRC (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "NHRC was established under which Act?",
        options: ["Protection of Human Rights Act, 1993", "Human Rights Commission Act, 1991", "Constitution of India", "NHRC Act, 1995"],
        correctAnswer: 0,
        explanation: "Protection of Human Rights Act, 1993.",
        subtopic: "56.1"
    },
    {
        id: 2,
        question: "Status of NHRC?",
        options: ["Constitutional Body", "Statutory Body", "Executive Body", "NGO"],
        correctAnswer: 1,
        explanation: "Statutory Body.",
        subtopic: "56.1"
    },
    {
        id: 3,
        question: "Chairman of NHRC is appointed by President on recommendation of committee headed by:",
        options: ["Home Minister", "President", "Prime Minister", "CJI"],
        correctAnswer: 2,
        explanation: "Prime Minister.",
        subtopic: "56.1"
    },
    {
        id: 4,
        question: "Which of the following is NOT a member of NHRC Selection Committee?",
        options: ["Speaker of Lok Sabha", "Deputy Chairman of Rajya Sabha", "Leader of Opposition in Rajya Sabha", "Chairman of Rajya Sabha"],
        correctAnswer: 3,
        explanation: "Chairman of Rajya Sabha (VP) is NOT a member. Deputy Chairman is.",
        subtopic: "56.1"
    },
    {
        id: 5,
        question: "Tenure of NHRC Chairman/Members (2019 Amendment)?",
        options: ["5 years / 70 age", "3 years / 70 age", "5 years / 65 age", "6 years / 65 age"],
        correctAnswer: 1,
        explanation: "3 years or 70 years of age.",
        subtopic: "56.1"
    },
    {
        id: 6,
        question: "Who can be the Chairman of NHRC (post-2019)?",
        options: ["Only Retired CJI", "Retired CJI or Retired SC Judge", "Serving CJI", "Any High Court CJ"],
        correctAnswer: 1,
        explanation: "Retired Chief Justice of India OR a Judge of the Supreme Court.",
        subtopic: "56.1"
    },
    {
        id: 7,
        question: "Can NHRC punish violators of human rights?",
        options: ["Yes", "No", "Only fine", "Only imprisonment"],
        correctAnswer: 1,
        explanation: "No. It has no power to punish. It can only recommend.",
        subtopic: "56.2"
    },
    {
        id: 8,
        question: "Who removes the Chairman of NHRC?",
        options: ["President", "PM", "Parliament", "Supreme Court"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry in cases of misbehavior).",
        subtopic: "56.1"
    },
    {
        id: 9,
        question: "NHRC annual report is submitted to:",
        options: ["Central Govt", "President", "Parliament", "SC"],
        correctAnswer: 0,
        explanation: "Central Government (and State Govt concerned), which lays it before Parliament.",
        subtopic: "56.2"
    },
    {
        id: 10,
        question: "Limitation period for NHRC to inquire into incidents?",
        options: ["6 months", "1 year", "2 years", "No limit"],
        correctAnswer: 1,
        explanation: "One year from the date on which the act constituting violation of human rights is alleged to have been committed.",
        subtopic: "56.2"
    },
    {
        id: 11,
        question: "Is NHRC eligible for reappointment?",
        options: ["Yes", "No", "Only Chairman", "Only Members"],
        correctAnswer: 0,
        explanation: "Yes, eligible for re-appointment (subject to age limit).",
        subtopic: "56.1"
    },
    {
        id: 12,
        question: "Ex-officio members of NHRC include Chairpersons of:",
        options: ["NCSC, NCST, NCBC, NCW", "UPSC, ECI", "NITI Aayog", "Finance Commission"],
        correctAnswer: 0,
        explanation: "NCSC, NCST, NCBC, National Commission for Women, Minorities, Child Rights, and Persons with Disabilities (Chief Commissioner).",
        subtopic: "56.1"
    },
    {
        id: 13,
        question: "Headquarters of NHRC?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correctAnswer: 1,
        explanation: "Delhi.",
        subtopic: "56.1"
    },
    {
        id: 14,
        question: "Does NHRC investigations have powers of Civil Court?",
        options: ["Yes", "No", "Criminal Court", "High Court"],
        correctAnswer: 0,
        explanation: "Yes, under Code of Civil Procedure, 1908.",
        subtopic: "56.2"
    },
    {
        id: 15,
        question: "Can NHRC investigate cases pending before a court?",
        options: ["Yes", "No, unless court approves", "Always", "Never"],
        correctAnswer: 1,
        explanation: "It cannot inquire into any matter pending before a State Commission or any other Commission duly constituted. For court cases, it needs court approval/permission.",
        subtopic: "56.2"
    },
    {
        id: 16,
        question: "Role of NHRC regarding Armed Forces?",
        options: ["Full power", "No power", "Limited power (seek report)", "Can arrest"],
        correctAnswer: 2,
        explanation: "Limited role. Can only seek report from Central Govt.",
        subtopic: "56.2"
    },
    {
        id: 17,
        question: "Grounds for removal of NHRC member?",
        options: ["Insolvency", "Unsound mind", "Conviction", "All of above"],
        correctAnswer: 3,
        explanation: "All of the above (plus Misbehavior/Incapacity via SC inquiry).",
        subtopic: "56.1"
    },
    {
        id: 18,
        question: "Who is the 'Chief Commissioner for Persons with Disabilities' in NHRC context?",
        options: ["Ex-officio member", "Full time member", "Secretary", "Observer"],
        correctAnswer: 0,
        explanation: "Ex-officio member (Added by 2019 Amendment).",
        subtopic: "56.1"
    },
    {
        id: 19,
        question: "Salary of NHRC members decided by?",
        options: ["Central Govt", "President", "Parliament", "Consolidated Fund"],
        correctAnswer: 0,
        explanation: "Central Government.",
        subtopic: "56.1"
    },
    {
        id: 20,
        question: "Can NHRC take suo motu cognizance?",
        options: ["Yes", "No", "Only on application", "Only with SC order"],
        correctAnswer: 0,
        explanation: "Yes, it can take suo motu cognizance.",
        subtopic: "56.2"
    },
    { id: 21, question: "Secretary General of NHRC is an officer of rank?", options: ["Secretary to GoI", "Joint Secretary", "Director", "Superintendent"], correctAnswer: 0, subtopic: "56.1" },
    { id: 22, question: "Human Rights Courts set up under?", options: ["Section 30 of Act", "Constitution", "CrPC", "IPC"], correctAnswer: 0, subtopic: "56.3" },
    { id: 23, question: "Paris Principles relate to?", options: ["Human Rights Institutions", "Climate Change", "Trade", "Labor"], correctAnswer: 0, subtopic: "56.1" },
    { id: 24, question: "Does NHRC grant compensation?", options: ["No, recommends", "Yes", "To limited extent", "From own fund"], correctAnswer: 0, subtopic: "56.2" },
    { id: 25, question: "Who appoints Special Public Prosecutor for Human Rights Court?", options: ["State Govt", "Central Govt", "NHRC", "HC"], correctAnswer: 0, subtopic: "56.3" },
    { id: 26, question: "Total full-time members in NHRC (excluding Chairman)?", options: ["5", "4", "2", "3"], correctAnswer: 0, subtopic: "56.1" }, // 5 members (1 judicial SC/CJ HC, 1 CJ HC, 3 knowledge/exp including 1 woman)
    { id: 27, question: "First Chairman of NHRC?", options: ["Ranganath Misra", "M.N. Venkatachaliah", "J.S. Verma", "A.S. Anand"], correctAnswer: 0, subtopic: "56.1" },
    { id: 28, question: "Can NHRC visit jails?", options: ["Yes", "No", "With permission", "Only Central Jails"], correctAnswer: 0, subtopic: "56.2" },
    { id: 29, question: "Are NHRC members eligible for further govt employment?", options: ["No", "Yes", "State only", "PSU only"], correctAnswer: 0, subtopic: "56.1" }, // Act says ineligible for further employment under Govt of India or State.
    { id: 30, question: "NHRC established in which year?", options: ["1993", "1992", "1990", "1995"], correctAnswer: 0, subtopic: "56.1" },

    // ==========================================
    // SHRC (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "SHRC Chairman appointed by:",
        options: ["Governor", "President", "CM", "CJI"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "57.1"
    },
    {
        id: 32,
        question: "Who removes SHRC Chairman?",
        options: ["President", "Governor", "CM", "Parliament"],
        correctAnswer: 0,
        explanation: "President (Not Governor).",
        subtopic: "57.1"
    },
    {
        id: 33,
        question: "State Human Rights Commission deals with violations in:",
        options: ["List II & III", "List I only", "List I, II & III", "List II only"],
        correctAnswer: 0,
        explanation: "List II (State List) and List III (Concurrent List).",
        subtopic: "57.2"
    },
    {
        id: 34,
        question: "SHRC Selection Committee Head?",
        options: ["CM", "Governor", "Home Minister", "Speaker"],
        correctAnswer: 0,
        explanation: "Chief Minister.",
        subtopic: "57.1"
    },
    {
        id: 35,
        question: "Is sitting Judge of HC eligible for SHRC?",
        options: ["Yes, with CJ consultation", "No", "Retired only", "After resignation"],
        correctAnswer: 0,
        explanation: "Act allows Sitting Judge (appointed after consultation with Chief Justice of High Court).",
        subtopic: "57.1"
    },
    {
        id: 36,
        question: "Tenure of SHRC members?",
        options: ["3 years / 70 age", "5 years / 70 age", "5 years / 65 age", "3 years / 65 age"],
        correctAnswer: 0,
        explanation: "3 years or 70 years of age.",
        subtopic: "57.1"
    },
    {
        id: 37,
        question: "SHRC report submitted to:",
        options: ["State Govt", "Governor", "President", "NHRC"],
        correctAnswer: 0,
        explanation: "State Government (laid before State Legislature).",
        subtopic: "57.2"
    },
    {
        id: 38,
        question: "Can NHRC investigate a case already with SHRC?",
        options: ["No", "Yes", "If serious", "On appeal"],
        correctAnswer: 0,
        explanation: "No. NHRC does not inquire if SHRC has already taken cognizance.",
        subtopic: "56.2"
    },
    {
        id: 39,
        question: "Joint State Human Rights Commission (JSHRC) created by?",
        options: ["Parliament", "President", "States concerned", "NHRC"],
        correctAnswer: 0,
        explanation: "Not explicitly mentioned in standard text mostly, but usually Joint Statutory bodies are by Parliament.",
        subtopic: "57.1"
    },
    {
        id: 40,
        question: "Can SHRC inquire into Union Territories?",
        options: ["No, Central Govt handles UTs (mostly NHRC)", "Yes", "Only Delhi", "Only Puducherry"],
        correctAnswer: 0,
        explanation: "NHRC deals with UTs usually. (However, Delhi has exception potential, but typically NHRC). Amendment 2019 empowered NHRC to handle UTs cases effectively, or assign to SHRC.",
        subtopic: "57.1"
    },
    { id: 41, question: "SHRC members salary decided by?", options: ["State Govt", "Governor", "Parliament", "Consol Fund"], correctAnswer: 0, subtopic: "57.1" },
    { id: 42, question: "Can SHRC punish?", options: ["No, recommendatory", "Yes", "Fine only", "Imprisonment"], correctAnswer: 0, subtopic: "57.2" },
    { id: 43, question: "Selection Committee for SHRC includes Speaker?", options: ["Yes", "No", "Only CM", "Only Governor"], correctAnswer: 0, subtopic: "57.1" },
    { id: 44, question: "Number of members in SHRC (excluding Chair)?", options: ["2", "4", "3", "5"], correctAnswer: 0, subtopic: "57.1" }, // 2 members (1 judicial, 1 exp)
    { id: 45, question: "Chairperson of SHRC must be?", options: ["Retired CJ/Judge of HC", "Retired SC Judge", "Any Lawyer", "IAS"], correctAnswer: 0, subtopic: "57.1" },
    { id: 46, question: "Removal ground 'Misbehavior' requires inquiry by?", options: ["Supreme Court", "High Court", "NCW", "CBI"], correctAnswer: 0, subtopic: "57.1" }, // Even for SHRC, it's SC inquiry
    { id: 47, question: "Can SHRC take cognisance if 1 year passed?", options: ["No", "Yes", "With court order", "With Governor sign"], correctAnswer: 0, subtopic: "57.2" },
    { id: 48, question: "Are SHRC members eligible for employment under Govt?", options: ["No", "Yes", "State works yes", "Central works yes"], correctAnswer: 0, subtopic: "57.1" },
    { id: 49, question: "Does SHRC have own investigation staff?", options: ["Yes", "No", "Use Police", "Use CBI"], correctAnswer: 0, subtopic: "57.2" }, // Can have own, or utilize officer of Govt
    { id: 50, question: "SHRC Chair removed by Governor?", options: ["No, President", "Yes", "Yes with Cabinet", "Yes with HC CJ"], correctAnswer: 0, subtopic: "57.1" },
    { id: 51, question: "State Home Minister in SHRC Selection Committee?", options: ["Yes", "No", "Invitee", "Observer"], correctAnswer: 0, subtopic: "57.1" },
    { id: 52, question: "Leader of Opposition (Assembly) in SHRC Committee?", options: ["Yes", "No", "Sometimes", "If recognized"], correctAnswer: 0, subtopic: "57.1" },
    { id: 53, question: "Protection of Human Rights Act passed in?", options: ["1993", "1990", "1947", "1950"], correctAnswer: 0, subtopic: "56.1" },
    { id: 54, question: "Is SHRC a constitutional body?", options: ["No", "Yes", "Quasi-judicial only", "Executive"], correctAnswer: 0, subtopic: "57.1" },
    { id: 55, question: "Can SHRC transfer cases to NHRC?", options: ["No provision", "Yes", "If requested", "If serious"], correctAnswer: 0, subtopic: "57.2" },
    { id: 56, question: "Who assists SHRC?", options: ["Secretary", "CEO", "Registrar", "None"], correctAnswer: 0, subtopic: "57.1" },
    { id: 57, question: "Term of SHRC members is renewable?", options: ["Yes", "No", "Once", "Twice"], correctAnswer: 0, subtopic: "57.1" },
    { id: 58, question: "Chairman of Legislative Council (if exists) in SHRC Committee?", options: ["Yes (Chairman & LoP Council)", "No", "Only Chairman", "Only LoP"], correctAnswer: 0, subtopic: "57.1" },
    { id: 59, question: "Can SHRC intervene in court proceedings?", options: ["Yes with court approval", "No", "Suo motu", "Always"], correctAnswer: 0, subtopic: "57.2" },
    { id: 60, question: "Is Human Rights defined in the Act?", options: ["Yes (Sec 2)", "No", "Refers to UN", "Refers to Constitution"], correctAnswer: 0, subtopic: "56.1" }
];

export default DAY23_MCQS;
