
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

export const DAY18_MCQS: MCQ[] = [
    // ==========================================
    // ELECTION COMMISSION (20 Questions)
    // ==========================================
    {
        id: 1,
        question: "Article 324 vests the superintendence, direction and control of elections in:",
        options: ["Parliament", "Supreme Court", "Election Commission", "President"],
        correctAnswer: 2,
        explanation: "Election Commission of India.",
        subtopic: "38.1"
    },
    {
        id: 2,
        question: "The Election Commission consists of:",
        options: ["Chief Election Commissioner only", "CEC and such number of other ECs as President fixes", "CEC and 2 other ECs fixed by Constitution", "CEC and 4 ECs"],
        correctAnswer: 1,
        explanation: "CEC and such number of other Election Commissioners as the President may from time to time fix.",
        subtopic: "38.1"
    },
    {
        id: 3,
        question: "CEC can be removed from office in like manner as:",
        options: ["Attorney General", "Judge of Supreme Court", "Chairman of UPSC", "Speaker of Lok Sabha"],
        correctAnswer: 1,
        explanation: "Judge of the Supreme Court (Article 324(5)).",
        subtopic: "38.1"
    },
    {
        id: 4,
        question: "Who appoints the Regional Commissioners for elections?",
        options: ["CEC", "Governor", "President", "Parliament"],
        correctAnswer: 2,
        explanation: "President, after consultation with the Election Commission.",
        subtopic: "38.1"
    },
    {
        id: 5,
        question: "Does the EC conduct elections to Local Bodies (Panchayats/Municipalities)?",
        options: ["Yes", "No", "Only if Parliament says", "Under supervision of SEC"],
        correctAnswer: 1,
        explanation: "No. State Election Commission (SEC) conducts local body elections (Articles 243K, 243ZA).",
        subtopic: "38.1"
    },
    {
        id: 6,
        question: "In case of difference of opinion between CEC and other ECs, the matter is decided by:",
        options: ["President", "Supreme Court", "Majority", "CEC prevails"],
        correctAnswer: 2,
        explanation: "Majority.",
        subtopic: "38.1"
    },
    {
        id: 7,
        question: "The EC became a multi-member body permanently in:",
        options: ["1989", "1990", "1993", "2000"],
        correctAnswer: 2,
        explanation: "1993. (It was briefly multi-member in 1989, then single, then multi again in 1993).",
        subtopic: "38.1"
    },
    {
        id: 8,
        question: "Which of the following is NOT a function of ECI?",
        options: ["Prepare electoral rolls", "Grant recognition to political parties", "Allocate symbols", "Select candidates for parties"],
        correctAnswer: 3,
        explanation: "Selection of candidates is an internal matter of political parties.",
        subtopic: "38.1"
    },
    {
        id: 9,
        question: "Model Code of Conduct comes into force:",
        options: ["From date of polling", "From date of notification/announcement of schedule", "From last date of nomination", "One month before election"],
        correctAnswer: 1,
        explanation: "Immediately from the announcement of the election schedule by the ECI.",
        subtopic: "93.1"
    },
    {
        id: 10,
        question: "Right to Vote is a:",
        options: ["Fundamental Right", "Constitutional Right", "Natural Right", "Fundamental Duty"],
        correctAnswer: 1,
        explanation: "Constitutional Right (Article 326) / Legal Right (RPA 1951). UPSC tends to favor Constitutional Right.",
        subtopic: "38.1"
    },
    {
        id: 11,
        question: "Service conditions of ECs are determined by:",
        options: ["Parliament", "President", "Constitution", "CEC"],
        correctAnswer: 1,
        explanation: "President (Chief Election Commissioner and other Election Commissioners (Conditions of Service) Act).",
        subtopic: "38.1"
    },
    {
        id: 12,
        question: "Are EC members eligible for reappointment?",
        options: ["Yes", "No", "Constitution is silent", "Only once"],
        correctAnswer: 2,
        explanation: "Constitution is silent. They are NOT debarred from further appointment by the government.",
        subtopic: "38.1"
    },
    {
        id: 13,
        question: "Who decides disputes relating to election of President and VP?",
        options: ["ECI", "Supreme Court", "Parliament", "Speaker"],
        correctAnswer: 1,
        explanation: "Supreme Court (Article 71).",
        subtopic: "18.1"
    },
    {
        id: 14,
        question: "Political Parties Registration is done under:",
        options: ["Constitution", "RPA 1950", "RPA 1951", "Party Act 1985"],
        correctAnswer: 2,
        explanation: "Representation of the People Act, 1951 (Section 29A).",
        subtopic: "93.1"
    },
    {
        id: 15,
        question: "Who acts as the Returning Officer for President election?",
        options: ["CEC", "Secretary General of LS/RS (Rotation)", "CJI", "Cabinet Secretary"],
        correctAnswer: 1,
        explanation: "Secretary General of Lok Sabha and Rajya Sabha (by rotation).",
        subtopic: "18.1"
    },
    {
        id: 16,
        question: "National Voters Day is celebrated on:",
        options: ["25 January", "26 January", "15 August", "2 October"],
        correctAnswer: 0,
        explanation: "25 January (Foundation day of ECI).",
        subtopic: "38.1"
    },
    {
        id: 17,
        question: "Delimitation Commission orders are:",
        options: ["Final and cannot be challenged in court", "Subject to Judicial Review", "Advisory", "Subject to Parliament approval"],
        correctAnswer: 0,
        explanation: "Final and cannot be challenged in any court of law.",
        subtopic: "70.1"
    },
    {
        id: 18,
        question: "EVM was first used in:",
        options: ["Kerala", "Goa", "Delhi", "Rajasthan"],
        correctAnswer: 0,
        explanation: "Used on experimental basis in Paravur assembly constituency in Kerala (1982).",
        subtopic: "38.1"
    },
    {
        id: 19,
        question: "VVPAT stands for:",
        options: ["Voter Verifiable Paper Audit Trail", "Vote Verification Paper Audit Test", "Voter Validation Paper Audit Trail", "None"],
        correctAnswer: 0,
        explanation: "Voter Verifiable Paper Audit Trail.",
        subtopic: "80.1"
    },
    {
        id: 20,
        question: "Article 329 bars interference of courts in:",
        options: ["Electoral matters", "Delimitation of constituencies", "Both", "None"],
        correctAnswer: 2,
        explanation: "Both. Validity of law relating to delimitation or allotment of seats cannot be questioned.",
        subtopic: "38.1"
    },

    // ==========================================
    // CAG (20 Questions)
    // ==========================================
    {
        id: 21,
        question: "Article 148 deals with:",
        options: ["Attorney General", "CAG", "Advocate General", "Finance Commission"],
        correctAnswer: 1,
        explanation: "Comptroller and Auditor General of India.",
        subtopic: "25.1"
    },
    {
        id: 22,
        question: "CAG is appointed by:",
        options: ["President", "PM", "Parliament", "CJI"],
        correctAnswer: 0,
        explanation: "President by warrant under his hand and seal.",
        subtopic: "25.1"
    },
    {
        id: 23,
        question: "Tenure of CAG?",
        options: ["5 years", "6 years or 65 age", "6 years or 62 age", "Pleasure of President"],
        correctAnswer: 1,
        explanation: "6 years or 65 years of age, whichever is earlier.",
        subtopic: "25.1"
    },
    {
        id: 24,
        question: "CAG can be removed:",
        options: ["By President at pleasure", "On same grounds and manner as SC Judge", "By Parliament resolution", "By PM"],
        correctAnswer: 1,
        explanation: "Same manner as Judge of Supreme Court (Article 148(1)).",
        subtopic: "25.1"
    },
    {
        id: 25,
        question: "Salary of CAG is charged on:",
        options: ["Consolidated Fund of India", "Contingency Fund", "Public Account", "Grants"],
        correctAnswer: 0,
        explanation: "Consolidated Fund of India (Not subject to vote of Parliament).",
        subtopic: "25.1"
    },
    {
        id: 26,
        question: "Reports of CAG relating to accounts of a State are submitted to:",
        options: ["President", "Governor", "CM", "Speaker of Assembly"],
        correctAnswer: 1,
        explanation: "Governor (Article 151).",
        subtopic: "25.1"
    },
    {
        id: 27,
        question: "Does CAG have control over issue of money from Consolidated Fund?",
        options: ["Yes", "No", "Only for Centre", "Only for State"],
        correctAnswer: 1,
        explanation: "No. In India, CAG is only an Auditor, not a Comptroller (unlike UK). He has no control over issue of money.",
        subtopic: "25.1"
    },
    {
        id: 28,
        question: "Which Corporation is audited totally and directly by CAG?",
        options: ["LIC", "RBI", "ONGC", "SBI"],
        correctAnswer: 2,
        explanation: "ONGC, DVC, Air India etc are audited directly. LIC, RBI, SBI have private audits (CAG may have supplementary role).",
        subtopic: "25.1"
    },
    {
        id: 29,
        question: "CAG is a friend and guide of:",
        options: ["Estimates Committee", "Public Accounts Committee", "Committee on Public Undertakings", "Select Committee"],
        correctAnswer: 1,
        explanation: "Public Accounts Committee (PAC).",
        subtopic: "23.1"
    },
    {
        id: 30,
        question: "Who called CAG as the 'most important Officer under the Constitution'?",
        options: ["Nehru", "Ambedkar", " पटेल", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "Dr. B.R. Ambedkar.",
        subtopic: "25.1"
    },
    {
        id: 31,
        question: "CAG Act (Duties, Powers and Conditions of Service) was passed in:",
        options: ["1971", "1976", "1951", "1948"],
        correctAnswer: 0,
        explanation: "1971.",
        subtopic: "25.1"
    },
    {
        id: 32,
        question: "Separation of accounts from audit was done in 1976 for:",
        options: ["Centre only", "States only", "Both", "None"],
        correctAnswer: 0,
        explanation: "Centre only. (CAG was relieved from compiling accounts of Central Govt).",
        subtopic: "25.1"
    },
    {
        id: 33,
        question: "CAG audits receipts of:",
        options: ["Centre & States", "Centre only", "Govt Companies", "All of above"],
        correctAnswer: 3,
        explanation: "All expenditures and receipts of Centre and States.",
        subtopic: "25.1"
    },
    {
        id: 34,
        question: "Can CAG audit private bodies?",
        options: ["Never", "Always", "If revenue sharing with govt exists", "With SC order"],
        correctAnswer: 2,
        explanation: "Yes, if they have revenue sharing arrangement (e.g., Telecom companies) - SC ruling 2014.",
        subtopic: "25.1"
    },
    {
        id: 35,
        question: "Condition of service of persons in Indian Audit and Accounts Dept prescribed by:",
        options: ["CAG", "Parliament", "President after consultation with CAG", "Finance Minister"],
        correctAnswer: 2,
        explanation: "President after consultation with CAG (Article 148(5)).",
        subtopic: "25.1"
    },
    {
        id: 36,
        question: "CAG oath form is in:",
        options: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
        correctAnswer: 2,
        explanation: "Third Schedule.",
        subtopic: "3.2"
    },
    {
        id: 37,
        question: "Is CAG eligible for further office?",
        options: ["Yes", "No", "Only in State", "Only in UN"],
        correctAnswer: 1,
        explanation: "No.",
        subtopic: "25.1"
    },
    {
        id: 38,
        question: "Which Article says 'Audit of Accounts of Panchayats'?",
        options: ["243J", "243K", "243I", "243Z"],
        correctAnswer: 0,
        explanation: "Article 243J (State Legislature may make provisions for audit).",
        subtopic: "39.1"
    },
    {
        id: 39,
        question: "Administrative expenses of CAG office are charged on:",
        options: ["CFI", "Contingency Fund", "Public Account", "Grants"],
        correctAnswer: 0,
        explanation: "Consolidated Fund of India.",
        subtopic: "25.1"
    },
    {
        id: 40,
        question: "Does CAG have power to penalize govt officials?",
        options: ["Yes", "No", "Sometimes", "Only fine"],
        correctAnswer: 1,
        explanation: "No. His observations are advisory/audit findings.",
        subtopic: "25.1"
    },

    // ==========================================
    // UPSC (20 Questions)
    // ==========================================
    {
        id: 41,
        question: "Article 315 provides for:",
        options: ["UPSC only", "SPSC only", "UPSC & SPSC", "Joint PSC only"],
        correctAnswer: 2,
        explanation: "Public Service Commissions for the Union and for the States.",
        subtopic: "38.1"
    },
    {
        id: 42,
        question: "Who appoints the Chairman of UPSC?",
        options: ["PM", "President", "Home Minister", "Chief Justice"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "38.1"
    },
    {
        id: 43,
        question: "Term of UPSC member?",
        options: ["5 years / 60 age", "6 years / 65 age", "6 years / 62 age", "5 years / 65 age"],
        correctAnswer: 1,
        explanation: "6 years or 65 years of age.",
        subtopic: "38.1"
    },
    {
        id: 44,
        question: "Removal of UPSC member inquiry is done by:",
        options: ["High Court", "Supreme Court", "Parliament Committee", "CBI"],
        correctAnswer: 1,
        explanation: "Supreme Court holds inquiry on reference by President (Article 317).",
        subtopic: "38.1"
    },
    {
        id: 45,
        question: "Composition of UPSC is determined by:",
        options: ["Constitution", "Parliament", "President", "Chairman"],
        correctAnswer: 2,
        explanation: "President (Constitution does not specify strength).",
        subtopic: "38.1"
    },
    {
        id: 46,
        question: "Article 320 deals with:",
        options: ["Functions of PSCs", "Expenses of PSCs", "Reports of PSCs", "Appointment"],
        correctAnswer: 0,
        explanation: "Functions of Public Service Commissions.",
        subtopic: "38.1"
    },
    {
        id: 47,
        question: "Is UPSC advice binding on Government?",
        options: ["Yes", "No", "Yes in disciplinary matters", "Yes in promotion"],
        correctAnswer: 1,
        explanation: "No. It is advisory. But non-acceptance must be explained in Parliament.",
        subtopic: "38.1"
    },
    {
        id: 48,
        question: "UPSC's jurisdiction can be extended by:",
        options: ["President", "Parliament", "DoPT", "Supreme Court"],
        correctAnswer: 1,
        explanation: "Parliament (Article 321).",
        subtopic: "38.1"
    },
    {
        id: 49,
        question: "UPSC is NOT consulted on:",
        options: ["Methods of recruitment", "Principles of appointment", "Reservations (SC/ST/OBC)", "Disciplinary matters"],
        correctAnswer: 2,
        explanation: "Reservations for backward classes/SC/ST (Article 320(4)).",
        subtopic: "38.1"
    },
    {
        id: 50,
        question: "Chairman of UPSC is eligible for:",
        options: ["Reappointment", "Chairman of SPSC", "Governor", "No further employment under Govt"],
        correctAnswer: 3,
        explanation: "Ineligible for further employment under the Government of India or a State. (Governor is generally considered Constitutional Office not employment, but UPSC Chair usually retires). Constitution says 'employment'.",
        subtopic: "38.1"
    },
    {
        id: 51,
        question: "Annual Report of UPSC is submitted to:",
        options: ["Parliament", "President", "DoPT Minister", "PM"],
        correctAnswer: 1,
        explanation: "President (who lays it before Parliament).",
        subtopic: "38.1"
    },
    {
        id: 52,
        question: "Joint State Public Service Commission (JSPSC) can be created by:",
        options: ["President", "Parliament", "State Legislatures", "UPSC"],
        correctAnswer: 1,
        explanation: "Parliament by an Act (on request of concerned State Legislatures). JSPSC is Statutory, not Constitutional.",
        subtopic: "38.1"
    },
    {
        id: 53,
        question: "Qualifications for UPSC members?",
        options: ["Graduate", "10 years govt service for 1/2 members", "Lawyer", "None"],
        correctAnswer: 1,
        explanation: "Constitution says one-half of members should have held office for at least 10 years under GOI or State Govt.",
        subtopic: "38.1"
    },
    {
        id: 54,
        question: "Which Act set up the Central Public Service Commission in 1926?",
        options: ["GOI Act 1919", "GOI Act 1935", "Indian Councils Act 1909", "Lee Commission"],
        correctAnswer: 0,
        explanation: "GOI Act 1919 (Mont-Ford Reforms). Lee Commission (1924) recommended it.",
        subtopic: "38.1"
    },
    {
        id: 55,
        question: "Expenses of UPSC are:",
        options: ["Voted by Parliament", "Charged on CFI", "Paid by candidates", "Grants"],
        correctAnswer: 1,
        explanation: "Charged on Consolidated Fund of India.",
        subtopic: "38.1"
    },
    {
        id: 56,
        question: "Who can exclude posts from purview of UPSC?",
        options: ["President", "Parliament", "PM", "DoPT"],
        correctAnswer: 0,
        explanation: "President (Article 320(3) proviso). Regulations must be laid before Parliament.",
        subtopic: "38.1"
    },
    {
        id: 57,
        question: "Which Article deals with Removal of PSC member?",
        options: ["315", "316", "317", "318"],
        correctAnswer: 2,
        explanation: "Article 317.",
        subtopic: "38.1"
    },
    {
        id: 58,
        question: "Who appoints the Acting Chairman of UPSC?",
        options: ["President", "Retiring Chairman", "Senior most member", "PM"],
        correctAnswer: 0,
        explanation: "President (Article 316(1A)).",
        subtopic: "38.1"
    },
    {
        id: 59,
        question: "Central Vigilance Commission (CVC) role limits UPSC function in?",
        options: ["Recruitment", "Disciplinary matters", "Training", "Pension"],
        correctAnswer: 1,
        explanation: "Disciplinary matters (Government consults CVC also, leading to duality).",
        subtopic: "38.1"
    },
    {
        id: 60,
        question: "Article 312 deals with:",
        options: ["All India Services", "UPSC", "Transfers", "Pensions"],
        correctAnswer: 0,
        explanation: "All India Services.",
        subtopic: "38.1"
    }
];

export default DAY18_MCQS;
