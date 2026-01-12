
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

export const DAY10_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 23: PARLIAMENTARY COMMITTEES (60 Questions)
    // Financial, Standing, Ad-hoc Committees, Forums
    // ==========================================

    {
        id: 1,
        question: "Which of the following is NOT a Financial Committee?",
        options: ["Public Accounts Committee", "Estimates Committee", "Committee on Public Undertakings", "Committee on Privileges"],
        correctAnswer: 3,
        explanation: "Committee on Privileges is not a Financial Committee (It is an Inquiry Committee).",
        subtopic: "23.1"
    },
    {
        id: 2,
        question: "The Public Accounts Committee (PAC) was first set up in:",
        options: ["1921", "1950", "1952", "1947"],
        correctAnswer: 0,
        explanation: "1921 (under GOI Act of 1919).",
        subtopic: "23.1"
    },
    {
        id: 3,
        question: "Total members in Public Accounts Committee are:",
        options: ["22", "30", "15", "10"],
        correctAnswer: 0,
        explanation: "22 Members (15 LS + 7 RS).",
        subtopic: "23.1"
    },
    {
        id: 4,
        question: "The Chairman of PAC is appointed by:",
        options: ["President", "Speaker", "PM", "Minister of Parliamentary Affairs"],
        correctAnswer: 1,
        explanation: "The Speaker of Lok Sabha.",
        subtopic: "23.1"
    },
    {
        id: 5,
        question: "Since 1967, the Chairman of PAC is invariably from:",
        options: ["Ruling Party", "Opposition Party", "Coalition Partner", "Nominated Members"],
        correctAnswer: 1,
        explanation: "Opposition Party (By convention).",
        subtopic: "23.1"
    },
    {
        id: 6,
        question: "The Estimates Committee consists of how many members?",
        options: ["22", "25", "30", "31"],
        correctAnswer: 2,
        explanation: "30 Members.",
        subtopic: "23.1"
    },
    {
        id: 7,
        question: "Which committee has members ONLY from Lok Sabha?",
        options: ["PAC", "Estimates Committee", "Public Undertakings", "Departmental Standing Committee"],
        correctAnswer: 1,
        explanation: "Estimates Committee (30 members from Lok Sabha only).",
        subtopic: "23.1"
    },
    {
        id: 8,
        question: "The Committee on Public Undertakings was recommended by:",
        options: ["Sarkaria Commission", "Krishna Menon Committee", "Santhanam Committee", "Ashok Mehta Committee"],
        correctAnswer: 1,
        explanation: "Krishna Menon Committee (1964).",
        subtopic: "23.1"
    },
    {
        id: 9,
        question: "A Minister is eligible to be a member of:",
        options: ["PAC", "Estimates Committee", "Any Parliamentary Committee", "None of the Financial Committees"],
        correctAnswer: 3,
        explanation: "Ministers cannot be members of Financial Committees.",
        subtopic: "23.1"
    },
    {
        id: 10,
        question: "The term of office of members of Financial Committees is:",
        options: ["1 year", "2 years", "5 years", "Co-terminus with House"],
        correctAnswer: 0,
        explanation: "1 year.",
        subtopic: "23.1"
    },
    // Standing Committees (DSCs)
    {
        id: 11,
        question: "How many Departmental Standing Committees exist currently?",
        options: ["17", "24", "32", "12"],
        correctAnswer: 1,
        explanation: "24.",
        subtopic: "23.2"
    },
    {
        id: 12,
        question: "DSCs scrutinize the Demands for Grants:",
        options: ["Before voting in House", "After voting in House", "After budget passes", "During guillotine"],
        correctAnswer: 0,
        explanation: "Before voting. The House goes into recess for 3-4 weeks for this scrutiny.",
        subtopic: "23.2"
    },
    {
        id: 13,
        question: "Each DSC has how many members?",
        options: ["22", "30", "31", "45"],
        correctAnswer: 2,
        explanation: "31 (21 LS + 10 RS).",
        subtopic: "23.2"
    },
    {
        id: 14,
        question: "Out of 24 DSCs, how many work under the Chairman of Rajya Sabha?",
        options: ["8", "16", "12", "6"],
        correctAnswer: 0,
        explanation: "8 work under RS Chairman, 16 under LS Speaker.",
        subtopic: "23.2"
    },
    {
        id: 15,
        question: "Can DSCs suggest cuts in Demands for Grants?",
        options: ["Yes", "No", "Only Economy Cut", "Only Token Cut"],
        correctAnswer: 1,
        explanation: "No. They cannot suggest cuts. Their reports are persuasive in nature.",
        subtopic: "23.2"
    },
    // Other Committees
    {
        id: 16,
        question: "Which committee examines the cases of breach of privilege?",
        options: ["Committee on Ethics", "Committee on Privileges", "Rules Committee", "Ad-hoc Committee"],
        correctAnswer: 1,
        explanation: "Committee on Privileges.",
        subtopic: "23.3"
    },
    {
        id: 17,
        question: "Committee on Subordinate Legislation examines:",
        options: ["Bills", "Budgets", "Delegated Legislation/Rules", "Petitions"],
        correctAnswer: 2,
        explanation: "Delegated legislation (Rules, regulations, bye-laws made by Executive).",
        subtopic: "23.3"
    },
    {
        id: 18,
        question: "Business Advisory Committee of Lok Sabha is chaired by:",
        options: ["Speaker", "PM", "Minister of Parliamentary Affairs", "Deputy Speaker"],
        correctAnswer: 0,
        explanation: "Speaker.",
        subtopic: "23.4"
    },
    {
        id: 19,
        question: "The Rules Committee of Lok Sabha consists of how many members?",
        options: ["11", "15", "22", "30"],
        correctAnswer: 1,
        explanation: "15 members including Speaker (Chairman).",
        subtopic: "23.4"
    },
    {
        id: 20,
        question: "Committee on Absence of Members is present in:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both Houses", "Neither"],
        correctAnswer: 0,
        explanation: "In Lok Sabha only. (Rajya Sabha handles it directly).",
        subtopic: "23.4"
    },
    {
        id: 21,
        question: "Committee on Private Members' Bills and Resolutions exists in:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both", "Jointly"],
        correctAnswer: 0,
        explanation: "Lok Sabha only. (In RS, Business Advisory Committee generally does this function).",
        subtopic: "23.4"
    },
    {
        id: 22,
        question: "The function of Committee on Government Assurances is to:",
        options: ["Assure government stability", "Scrutinize promises made by Ministers", "Check budget", "Check corruption"],
        correctAnswer: 1,
        explanation: "Scrutinize the assurances, promises, undertakings given by Ministers.",
        subtopic: "23.3"
    },
    {
        id: 23,
        question: "Which committee examines the petitions on public importance pending before the House?",
        options: ["Committee on Petitions", "Public Grievances Committee", "Ethics Committee", "Rules Committee"],
        correctAnswer: 0,
        explanation: "Committee on Petitions.",
        subtopic: "23.3"
    },
    {
        id: 24,
        question: "Joint Committee on Offices of Profit consists of:",
        options: ["10 members", "15 members", "22 members", "30 members"],
        correctAnswer: 1,
        explanation: "15 members (10 LS + 5 RS).",
        subtopic: "23.3"
    },
    {
        id: 25,
        question: "Committee on Empowerment of Women was constituted in:",
        options: ["1950", "1990", "1997", "2005"],
        correctAnswer: 2,
        explanation: "1997.",
        subtopic: "23.3"
    },
    {
        id: 26,
        question: "Library Committee consists of:",
        options: ["9 members", "6 members", "3 members", "15 members"],
        correctAnswer: 0,
        explanation: "9 members (6 LS + 3 RS).",
        subtopic: "23.5"
    },
    {
        id: 27,
        question: "Consultative Committees are constituted by:",
        options: ["Parliament", "Ministry of Parliamentary Affairs", "Speaker", "President"],
        correctAnswer: 1,
        explanation: "Ministry of Parliamentary Affairs.",
        subtopic: "23.5"
    },
    {
        id: 28,
        question: "The Chairman of Consultative Committee is:",
        options: ["Speaker", "Minister/Minister of State in charge", "Senior Member", "Opposition Leader"],
        correctAnswer: 1,
        explanation: "Minister / Minister of State in charge of the Ministry concerned.",
        subtopic: "23.5"
    },
    {
        id: 29,
        question: "Who is the Chairman of the General Purposes Committee?",
        options: ["Speaker", "Deputy Speaker", "PM", "Home Minister"],
        correctAnswer: 0,
        explanation: "Presiding Officer (Speaker in LS, Chairman in RS) is Ex-officio Chairman.",
        subtopic: "23.5"
    },
    {
        id: 30,
        question: "The main role of the Ethics Committee is to:",
        options: ["Oversee moral conduct of members", "Check corruption in government", "Audit accounts", "Select ministers"],
        correctAnswer: 0,
        explanation: "Enforce code of conduct and examine cases of misconduct/unethical behavior of members.",
        subtopic: "23.3"
    },
    // Ch 24 Forums & Groups
    {
        id: 31,
        question: "How many Parliamentary Forums are there currently?",
        options: ["5", "6", "8", "10"],
        correctAnswer: 2,
        explanation: "8 Forums (Water, Youth, Children, Population, Disaster Mgmt, Artisans, Millennium Goals, Dig. Economy - note: updates occur, standard is 8).",
        subtopic: "24.1"
    },
    {
        id: 32,
        question: "The first Parliamentary Forum established was on:",
        options: ["Water Conservation", "Youth", "Children", "Population"],
        correctAnswer: 0,
        explanation: "Water Conservation and Management (2005).",
        subtopic: "24.1"
    },
    {
        id: 33,
        question: "Who is the President of the Parliamentary Forum on Population and Public Health?",
        options: ["Speaker", "Chairman Rajya Sabha", "Health Minister", "PM"],
        correctAnswer: 1,
        explanation: "Chairman of Rajya Sabha.",
        subtopic: "24.1"
    },
    {
        id: 34,
        question: "For all other Parliamentary Forums (except Population), the President is:",
        options: ["Speaker", "Chairman RS", "Concerned Minister", "PM"],
        correctAnswer: 0,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "24.1"
    },
    {
        id: 35,
        question: "The Indian Parliamentary Group (IPG) acts as the National Group of:",
        options: ["UN", "IPU (Inter-Parliamentary Union)", "SAARC", "Commonwealth"],
        correctAnswer: 1,
        explanation: "IPU and CPA (Commonwealth Parliamentary Association).",
        subtopic: "24.2"
    },
    {
        id: 36,
        question: "Membership of IPG is open to:",
        options: ["All MPs", "Only LS MPs", "Only Ministers", "Only Senior MPs"],
        correctAnswer: 0,
        explanation: "All members of Parliament.",
        subtopic: "24.2"
    },
    {
        id: 37,
        question: "Who confers the 'Outstanding Parliamentarian Award'?",
        options: ["President", "IPG", "Speaker", "Prime Minister"],
        correctAnswer: 1,
        explanation: "Indian Parliamentary Group (IPG).",
        subtopic: "24.2"
    },
    {
        id: 38,
        question: "Which committee assists the Speaker in deciding allocation of time for discussions?",
        options: ["Rules Committee", "Business Advisory Committee", "General Purposes Committee", "House Committee"],
        correctAnswer: 1,
        explanation: "Business Advisory Committee (BAC).",
        subtopic: "23.4"
    },
    {
        id: 39,
        question: "The report of the PAC is submitted to:",
        options: ["President", "Prime Minister", "Lok Sabha", "Parliament"],
        correctAnswer: 2,
        explanation: "Lok Sabha (Speaker).",
        subtopic: "23.1"
    },
    {
        id: 40,
        question: "Which committee examines the audit reports of the CAG?",
        options: ["PAC", "Estimates", "Privileges", "Ethics"],
        correctAnswer: 0,
        explanation: "Public Accounts Committee.",
        subtopic: "23.1"
    },
    {
        id: 41,
        question: "Estimates Committee report is debatable in the House:",
        options: ["Yes", "No", "Only if Speaker allows", "After 1 year"],
        correctAnswer: 1,
        explanation: "No. The reports are not debated in the House (Convention).",
        subtopic: "23.1"
    },
    {
        id: 42,
        question: "Which committee is also known as 'Rashtriya Barh Ayog'?",
        options: ["None", "Flood Commission", "Disaster Mgmt Forum", "Water Forum"],
        correctAnswer: 0,
        explanation: "Rashtriya Barh Ayog is National Flood Commission (Executive), not a Parliamentary Committee. Trick question.",
        subtopic: "23.1"
    },
    {
        id: 43,
        question: "Select Committees are appointed for:",
        options: ["General purpose", "Specific Bill/Purpose", "Permanent purpose", "Financial purpose"],
        correctAnswer: 1,
        explanation: "Specific Bill or specific investigation. They become 'functus officio' after reporting.",
        subtopic: "23.1"
    },
    {
        id: 44,
        question: "Joint Parliamentary Committee (JPC) has members from:",
        options: ["LS only", "RS only", "Both Houses", "Outside experts"],
        correctAnswer: 2,
        explanation: "Both Houses (Usually 2:1 ratio for LS:RS).",
        subtopic: "23.1"
    },
    {
        id: 45,
        question: "The salaries of MPs are determined by:",
        options: ["Parliament", "President", "Speaker", "Pay Commission"],
        correctAnswer: 0,
        explanation: "Parliament by law (Article 106).",
        subtopic: "22.2"
    },
    {
        id: 46,
        question: "Salary and Allowances of Leaders of Opposition in Parliament Act was passed in:",
        options: ["1977", "1985", "1950", "1991"],
        correctAnswer: 0,
        explanation: "1977.",
        subtopic: "22.5"
    },
    {
        id: 47,
        question: "Who is the final interpreter of the Rules of Procedure in the House?",
        options: ["President", "Speaker", "Attorney General", "Secretary General"],
        correctAnswer: 1,
        explanation: "Speaker.",
        subtopic: "22.4"
    },
    {
        id: 48,
        question: "Adjournment Motion needs support of how many members?",
        options: ["50", "100", "20", "10"],
        correctAnswer: 0,
        explanation: "50 members.",
        subtopic: "22.6"
    },
    {
        id: 49,
        question: "Half-an-hour discussion is for:",
        options: ["Matter of sufficient public importance requiring elucidation", "Budget", "Adjournment", "Censure"],
        correctAnswer: 0,
        explanation: "To elucidate on a matter of public importance arising out of a previous answer.",
        subtopic: "22.6"
    },
    {
        id: 50,
        question: "Rule 377 in Lok Sabha allows members to:",
        options: ["Raise matters which are not points of order", "Raise money bills", "Dismiss government", "Vote"],
        correctAnswer: 0,
        explanation: "Raise matters which cannot be raised under any other rule.",
        subtopic: "22.6"
    },
    {
        id: 51,
        question: "The maximum duration of 'Zero Hour' is:",
        options: ["30 mins", "1 hour", "Indefinite", "Not specified"],
        correctAnswer: 3,
        explanation: "Not specified in rules. Usually lasts until agenda is taken up (approx 1 hr).",
        subtopic: "22.3"
    },
    {
        id: 52,
        question: "Short Duration Discussion is also called:",
        options: ["Two-hour discussion", "Half-hour discussion", "Zero hour", "Question hour"],
        correctAnswer: 0,
        explanation: "Two-hour discussion.",
        subtopic: "22.6"
    },
    {
        id: 53,
        question: "Who prepares the list of business for the House?",
        options: ["Secretary General", "Speaker", "Leader of House", "Leader of Opposition"],
        correctAnswer: 0,
        explanation: "Secretary General (under Speaker's directions).",
        subtopic: "22.4"
    },
    {
        id: 54,
        question: "Can Parliament increase the number of SC judges?",
        options: ["Yes", "No", "Only if CJI requests", "Only if President requests"],
        correctAnswer: 0,
        explanation: "Yes, by law.",
        subtopic: "22.9"
    },
    {
        id: 55,
        question: "Which Article deals with the 'Language to be used in Parliament'?",
        options: ["120", "210", "343", "345"],
        correctAnswer: 0,
        explanation: "Article 120.",
        subtopic: "22.9"
    },
    {
        id: 56,
        question: "A member can speak in his mother tongue in the House with permission of:",
        options: ["Presiding Officer", "PM", "Leader of House", "Cannot speak"],
        correctAnswer: 0,
        explanation: "Presiding Officer.",
        subtopic: "22.9"
    },
    {
        id: 57,
        question: "The 'quarum' to constitute a meeting of a Parliamentary Committee is:",
        options: ["1/3rd", "1/4th", "1/10th", "1/2"],
        correctAnswer: 0,
        explanation: "One-third of the total number of members of the committee.",
        subtopic: "23.1"
    },
    {
        id: 58,
        question: "Who appoints the Chairman of a Parliamentary Committee?",
        options: ["Presiding Officer", "Committee Members", "PM", "President"],
        correctAnswer: 0,
        explanation: "Speaker (LS) or Chairman (RS).",
        subtopic: "23.1"
    },
    {
        id: 59,
        question: "Does a Parliamentary Committee hold its sittings in public?",
        options: ["Yes", "No", "Sometimes", "With permission"],
        correctAnswer: 1,
        explanation: "No. The sittings are held in private.",
        subtopic: "23.1"
    },
    {
        id: 60,
        question: "Which committee acts as the 'Watchdog' of the subordinate legislation?",
        options: ["Committee on Subordinate Legislation", "PAC", "Estimates", "Rules Committee"],
        correctAnswer: 0,
        explanation: "Committee on Subordinate Legislation.",
        subtopic: "23.3"
    }
];

export default DAY10_MCQS;
