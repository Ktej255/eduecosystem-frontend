
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

export const DAY9_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 22: PARLIAMENT Part 2 (60 Questions)
    // Legislative Procedure, Bills, Budget, Funds
    // ==========================================

    {
        id: 1,
        question: "Ordinary Bill can be introduced in:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Either House", "Joint Sitting"],
        correctAnswer: 2,
        explanation: "Ordinary bills can be introduced in either House.",
        subtopic: "22.6"
    },
    {
        id: 2,
        question: "Who can introduce an Ordinary Bill?",
        options: ["Minister only", "Private Member only", "Any Member", "Speaker"],
        correctAnswer: 2,
        explanation: "Any member (Minister or Private Member) can introduce an ordinary bill.",
        subtopic: "22.6"
    },
    {
        id: 3,
        question: "Money Bill refers to Article:",
        options: ["110", "112", "117", "108"],
        correctAnswer: 0,
        explanation: "Article 110.",
        subtopic: "22.6"
    },
    {
        id: 4,
        question: "A Money Bill can be introduced only in:",
        options: ["Rajya Sabha", "Lok Sabha", "Either House", "Joint Committee"],
        correctAnswer: 1,
        explanation: "Lok Sabha only.",
        subtopic: "22.6"
    },
    {
        id: 5,
        question: "Prior recommendation of President is required for introduction of:",
        options: ["Ordinary Bill", "Constitutional Amendment Bill", "Money Bill", "Private Member Bill"],
        correctAnswer: 2,
        explanation: "Money Bill requires prior recommendation of the President.",
        subtopic: "22.6"
    },
    {
        id: 6,
        question: "Rajya Sabha must return a Money Bill within:",
        options: ["7 days", "14 days", "1 month", "6 months"],
        correctAnswer: 1,
        explanation: "14 days.",
        subtopic: "22.6"
    },
    {
        id: 7,
        question: "If Rajya Sabha does not return the Money Bill within 14 days:",
        options: ["Bill lapses", "President calls Joint Sitting", "Deemed to have been passed", "Sent back to LS"],
        correctAnswer: 2,
        explanation: "Deemed to have been passed by both Houses in the form it was passed by Lok Sabha.",
        subtopic: "22.6"
    },
    {
        id: 8,
        question: "Who certifies a bill as Money Bill?",
        options: ["President", "Finance Minister", "Speaker", "PM"],
        correctAnswer: 2,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "22.6"
    },
    {
        id: 9,
        question: "Financial Bill (I) is under Article:",
        options: ["117(1)", "117(3)", "110", "112"],
        correctAnswer: 0,
        explanation: "Article 117(1).",
        subtopic: "22.6"
    },
    {
        id: 10,
        question: "Financial Bill (I) is similar to Money Bill in that:",
        options: ["It can be rejected by RS", "It can be introduced in RS", "It requires President's recommendation", "It is certified by Speaker"],
        correctAnswer: 2,
        explanation: "It can be introduced only in LS and requires President's recommendation (Similarity). But RS CAN reject it (Difference).",
        subtopic: "22.6"
    },
    {
        id: 11,
        question: "Joint Sitting is provided under Article:",
        options: ["108", "110", "112", "123"],
        correctAnswer: 0,
        explanation: "Article 108.",
        subtopic: "22.7"
    },
    {
        id: 12,
        question: "Joint Sitting applies to:",
        options: ["Money Bills", "Constitutional Amendment Bills", "Ordinary Bills", "All of above"],
        correctAnswer: 2,
        explanation: "It applies to Ordinary Bills and Financial Bills. NOT to Money Bills or Constitutional Amendment Bills.",
        subtopic: "22.7"
    },
    {
        id: 13,
        question: "Who presides over the Joint Sitting?",
        options: ["President", "Speaker", "Chairman RS", "PM"],
        correctAnswer: 1,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "22.7"
    },
    {
        id: 14,
        question: "If Speaker is absent, who presides over Joint Sitting?",
        options: ["Chairman RS", "Deputy Speaker", "Deputy Chairman RS", "President's nominee"],
        correctAnswer: 1,
        explanation: "Deputy Speaker.",
        subtopic: "22.7"
    },
    {
        id: 15,
        question: "If even Deputy Speaker is absent, who presides over Joint Sitting?",
        options: ["Chairman RS", "Deputy Chairman RS", "Senior most MP", "PM"],
        correctAnswer: 1,
        explanation: "Deputy Chairman of Rajya Sabha. (Chairman RS never presides as he is not a member).",
        subtopic: "22.7"
    },
    {
        id: 16,
        question: "The Annual Financial Statement is popularly known as:",
        options: ["Economic Survey", "Budget", "Finance Bill", "Appropriation Bill"],
        correctAnswer: 1,
        explanation: "Budget.",
        subtopic: "22.8"
    },
    {
        id: 17,
        question: "Railway Budget was separated from General Budget in:",
        options: ["1921", "1924", "1950", "1947"],
        correctAnswer: 1,
        explanation: "1924 (Acworth Committee report). Re-merged in 2017.",
        subtopic: "22.8"
    },
    {
        id: 18,
        question: "Charged Expenditure is:",
        options: ["Voted by Parliament", "Not voted but discussed", "Neither voted nor discussed", "Voted by RS only"],
        correctAnswer: 1,
        explanation: "It is non-votable but can be discussed.",
        subtopic: "22.8"
    },
    {
        id: 19,
        question: "Which of the following is Charged Expenditure?",
        options: ["Salary of PM", "Salary of Ministers", "Salary of Judges of SC", "Salary of MPs"],
        correctAnswer: 2,
        explanation: "Salary of SC Judges (and pensions of SC/HC judges). PM/Ministers salaries are voted.",
        subtopic: "22.8"
    },
    {
        id: 20,
        question: "The budget goes through how many stages?",
        options: ["3", "5", "6", "4"],
        correctAnswer: 2,
        explanation: "6 stages: Presentation, General Discussion, Scrutiny by Committees, Voting on Demands for Grants, Passing of Appropriation Bill, Passing of Finance Bill.",
        subtopic: "22.8"
    },
    {
        id: 21,
        question: "Voting on Demands for Grants is done by:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both Houses", "Joint Committee"],
        correctAnswer: 0,
        explanation: "Lok Sabha only.",
        subtopic: "22.8"
    },
    {
        id: 22,
        question: "Cut Motion to reduce demand to Re 1 is:",
        options: ["Economy Cut", "Token Cut", "Policy Cut", "Budget Cut"],
        correctAnswer: 2,
        explanation: "Policy Cut Motion (Disapproval of Policy).",
        subtopic: "22.8"
    },
    {
        id: 23,
        question: "Cut Motion to reduce demand by a specified amount:",
        options: ["Economy Cut", "Token Cut", "Policy Cut", "Specific Cut"],
        correctAnswer: 0,
        explanation: "Economy Cut Motion.",
        subtopic: "22.8"
    },
    {
        id: 24,
        question: "Cut Motion to reduce demand by Rs 100:",
        options: ["Economy Cut", "Token Cut", "Policy Cut", "Minor Cut"],
        correctAnswer: 1,
        explanation: "Token Cut Motion (to ventilate a specific grievance).",
        subtopic: "22.8"
    },
    {
        id: 25,
        question: "Guillotine refers to:",
        options: ["Execution of Speaker", "Putting all undiscussed demands to vote together", "Stopping the session", "Rejecting a bill"],
        correctAnswer: 1,
        explanation: "On the last day, Speaker puts all remaining demands to vote without discussion. This is Guillotine.",
        subtopic: "22.8"
    },
    {
        id: 26,
        question: "Which bill authorizes withdrawal of funds from Consolidated Fund of India?",
        options: ["Finance Bill", "Appropriation Bill", "Money Bill", "Ordinary Bill"],
        correctAnswer: 1,
        explanation: "Appropriation Bill.",
        subtopic: "22.8"
    },
    {
        id: 27,
        question: "Vote on Account is valid for:",
        options: ["Whole year", "2 months", "6 months", "1 month"],
        correctAnswer: 1,
        explanation: "Usually 2 months (for expenditure until Appropriation Bill is passed).",
        subtopic: "22.8"
    },
    {
        id: 28,
        question: "Consolidated Fund of India is under Article:",
        options: ["266", "267", "280", "292"],
        correctAnswer: 0,
        explanation: "Article 266.",
        subtopic: "22.10"
    },
    {
        id: 29,
        question: "Contingency Fund of India is under Article:",
        options: ["266", "267", "112", "110"],
        correctAnswer: 1,
        explanation: "Article 267.",
        subtopic: "22.10"
    },
    {
        id: 30,
        question: "Who operates the Contingency Fund of India?",
        options: ["PM", "Finance Minister", "President", "RBI Governor"],
        correctAnswer: 2,
        explanation: "Held by Finance Secretary on behalf of the President.",
        subtopic: "22.10"
    },
    {
        id: 31,
        question: "Public Account of India consists of:",
        options: ["Tax revenue", "PF deposits, Judicial deposits, etc.", "Loans raised", "Foreign aid"],
        correctAnswer: 1,
        explanation: "Provident fund deposits, judicial deposits, savings bank deposits, etc. (Act 266(2)).",
        subtopic: "22.10"
    },
    {
        id: 32,
        question: "Are parliamentary approvals required for payments from Public Account?",
        options: ["Yes", "No", "Only for > 100 Cr", "Only if PAC recommends"],
        correctAnswer: 1,
        explanation: "No. Operated by executive action.",
        subtopic: "22.10"
    },
    {
        id: 33,
        question: "Pocket Veto was used by President Zail Singh in:",
        options: ["Dowry Prohibition Bill", "Indian Post Office (Amendment) Bill", "PEPSU Appropriation Bill", "Hindu Code Bill"],
        correctAnswer: 1,
        explanation: "Indian Post Office (Amendment) Bill, 1986.",
        subtopic: "22.6"
    },
    {
        id: 34,
        question: "Assent to bills by President is under Article:",
        options: ["100", "111", "108", "123"],
        correctAnswer: 1,
        explanation: "Article 111.",
        subtopic: "22.6"
    },
    {
        id: 35,
        question: "Which of the following is NOT a session of Parliament?",
        options: ["Budget Session", "Monsoon Session", "Summer Session", "Winter Session"],
        correctAnswer: 2,
        explanation: "There is no 'Summer Session'.",
        subtopic: "22.3"
    },
    // More deep dives
    {
        id: 36,
        question: "A bill for alteration of boundaries of states (Art 3) introduced without President recommendation:",
        options: ["Is valid", "Is invalid/void", "Can be validated by later assent", "Speaker decides"],
        correctAnswer: 1,
        explanation: "It requires prior recommendation. If introduced without it, it's a defect, though some argue later assent cures it, for Art 3 specifically it is a pre-requisite.",
        subtopic: "22.6"
    },
    {
        id: 37,
        question: "Finance Bill contains:",
        options: ["Expenditure proposals", "Taxation proposals", "Policy Matters", "Defense deals"],
        correctAnswer: 1,
        explanation: "Taxation proposals (Income side of budget).",
        subtopic: "22.8"
    },
    {
        id: 38,
        question: "If the Budget is defeated in Lok Sabha:",
        options: ["FM resigns", "PM resigns", "Council of Ministers resigns", "Budget is modified"],
        correctAnswer: 2,
        explanation: "It amounts to a no-confidence motion. The Government must resign.",
        subtopic: "22.8"
    },
    {
        id: 39,
        question: "Departmental Standing Committees were established in:",
        options: ["1950", "1993", "2004", "1977"],
        correctAnswer: 1,
        explanation: "1993.",
        subtopic: "22.8"
    },
    {
        id: 40,
        question: "How many Departmental Standing Committees are there currently?",
        options: ["17", "24", "32", "12"],
        correctAnswer: 1,
        explanation: "24 (since 2004).",
        subtopic: "22.8"
    },
    {
        id: 41,
        question: "Grants-in-aid to states are charged on:",
        options: ["Consolidated Fund of India", "Contingency Fund", "Public Account", "State Fund"],
        correctAnswer: 0,
        explanation: "Consolidated Fund of India.",
        subtopic: "22.10"
    },
    {
        id: 42,
        question: "Discretionary Grant is under Article:",
        options: ["275", "282", "280", "265"],
        correctAnswer: 1,
        explanation: "Article 282.",
        subtopic: "22.10"
    },
    {
        id: 43,
        question: "GST Council is under Article:",
        options: ["279A", "269A", "246A", "280"],
        correctAnswer: 0,
        explanation: "Article 279A.",
        subtopic: "22.10"
    },
    {
        id: 44,
        question: "Supplementary Grant is granted when:",
        options: ["Money is insufficient", "New service is started", "Excess money spent", "Budget not passed"],
        correctAnswer: 0,
        explanation: "When amount authorized for a service is found to be insufficient.",
        subtopic: "22.8"
    },
    {
        id: 45,
        question: "Excess Grant is voted by LS after:",
        options: ["Budget year ends", "PAC approval", "FM request", "PM request"],
        correctAnswer: 0,
        explanation: "It is granted AFTER the financial year (for money spent in excess). Must be approved by PAC first.",
        subtopic: "22.8"
    },
    {
        id: 46,
        question: "Vote of Credit is known as:",
        options: ["Blank Cheque", "Token Cheque", "Credit Card", "Loan"],
        correctAnswer: 0,
        explanation: "It is like a blank cheque given to the executive for indefinite character of national demand.",
        subtopic: "22.8"
    },
    {
        id: 47,
        question: "Exceptional Grant forms:",
        options: ["Part of current service", "No part of current service", "Future service", "Past service"],
        correctAnswer: 1,
        explanation: "It forms no part of the current service of any financial year.",
        subtopic: "22.8"
    },
    {
        id: 48,
        question: "The power of adjournment sine die lies with:",
        options: ["President", "Presiding Officer", "PM", "Minister of Parliamentary Affairs"],
        correctAnswer: 1,
        explanation: "Presiding Officer.",
        subtopic: "22.3"
    },
    {
        id: 49,
        question: "The power of prorogation lies with:",
        options: ["President", "Presiding Officer", "PM", "Speaker"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "22.3"
    },
    {
        id: 50,
        question: "Lamington Rule is related to:",
        options: ["Adjournment", "Dissolution", "Questions", "Motions"],
        correctAnswer: 1,
        explanation: "Not common, but implies dissolution. (Usually we verify common exam questions)",
        subtopic: "22.3"
    },
    // Extra fill
    {
        id: 51,
        question: "Constitutional Amendment Bill requires:",
        options: ["Simple Majority", "Special Majority", "Absolute Majority", "Effective Majority"],
        correctAnswer: 1,
        explanation: "Special Majority (Majority of total membership AND 2/3rd of members present and voting).",
        subtopic: "22.6"
    },
    {
        id: 52,
        question: "Who decides the date of election of Speaker?",
        options: ["Pro-tem Speaker", "President", "PM", "Election Commission"],
        correctAnswer: 1,
        explanation: "The President.",
        subtopic: "22.4"
    },
    {
        id: 53,
        question: "Who decides the date of election of Deputy Speaker?",
        options: ["President", "Speaker", "PM", "Pro-tem Speaker"],
        correctAnswer: 1,
        explanation: "The Speaker.",
        subtopic: "22.4"
    },
    {
        id: 54,
        question: "Panel of Chairpersons in Lok Sabha consists of not more than:",
        options: ["6", "10", "12", "5"],
        correctAnswer: 1,
        explanation: "10 members.",
        subtopic: "22.4"
    },
    {
        id: 55,
        question: "No-Confidence Motion needs support of how many members to be admitted?",
        options: ["50", "100", "1/10th", "25"],
        correctAnswer: 0,
        explanation: "50 members.",
        subtopic: "22.6"
    },
    {
        id: 56,
        question: "Censure Motion differs from No-Confidence Motion as:",
        options: ["It needs no ground", "It needs ground to be stated", "It removes govt", "It is against whole council only"],
        correctAnswer: 1,
        explanation: "Censure motion requires reasons/grounds to be stated. No-Confidence motion does not.",
        subtopic: "22.6"
    },
    {
        id: 57,
        question: "Calling Attention Motion is:",
        options: ["British Concept", "Indian Innovation", "American Concept", "French Concept"],
        correctAnswer: 1,
        explanation: "Indian Innovation (1954).",
        subtopic: "22.6"
    },
    {
        id: 58,
        question: "Privilege Motion is moved against:",
        options: ["Minister", "Private Member", "Speaker", "President"],
        correctAnswer: 0,
        explanation: "Against a Minister for breach of privilege.",
        subtopic: "22.6"
    },
    {
        id: 59,
        question: "Point of Order is raised when:",
        options: ["Proceedings follow rules", "Proceedings breach rules", "Minister lies", "Member is absent"],
        correctAnswer: 1,
        explanation: "When proceedings do not follow the normal rules of procedure.",
        subtopic: "22.6"
    },
    {
        id: 60,
        question: "Special Mention is equivalent to what in Rajya Sabha?",
        options: ["Option to Zero Hour", "Notice under Rule 377", "Adjournment Motion", "Censure Motion"],
        correctAnswer: 1,
        explanation: "Notice under Rule 377 in Lok Sabha is similar to Special Mention in Rajya Sabha.",
        subtopic: "22.6"
    }
];

export default DAY9_MCQS;
