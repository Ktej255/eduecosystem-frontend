
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

export const DAY12_MCQS: MCQ[] = [
    // ==========================================
    // DAY 12: STATE LEGISLATURE (60 Questions)
    // Comparisons with Parliament, Procedure, Composition
    // ==========================================

    {
        id: 1,
        question: "Which Articles deal with the State Legislature?",
        options: ["168 to 212", "152 to 167", "124 to 147", "214 to 232"],
        correctAnswer: 0,
        explanation: "Articles 168 to 212 in Part VI.",
        subtopic: "36.1"
    },
    {
        id: 2,
        question: "How many states in India have a Bicameral Legislature?",
        options: ["5", "6", "7", "28"],
        correctAnswer: 1,
        explanation: "6 States (Andhra, Telangana, UP, Bihar, Maharashtra, Karnataka).",
        subtopic: "36.1"
    },
    {
        id: 3,
        question: "Creation or Abolition of Legislative Council is done by:",
        options: ["President", "Parliament", "State Assembly", "Governor"],
        correctAnswer: 1,
        explanation: "Parliament (on recommendation of State Assembly).",
        subtopic: "36.2"
    },
    {
        id: 4,
        question: "The resolution for creation/abolition of Council must be passed by Assembly with:",
        options: ["Simple Majority", "Special Majority", "Absolute Majority", "Effective Majority"],
        correctAnswer: 1,
        explanation: "Special Majority (Two-thirds present & voting + Majority of total strength).",
        subtopic: "36.2"
    },
    {
        id: 5,
        question: "Does the Parliament need to amend the Constitution for creating a Council?",
        options: ["Yes, under Art 368", "No, it is an ordinary law", "Yes, with ratification", "Depends on state"],
        correctAnswer: 1,
        explanation: "No. It is deemed NOT to be an amendment under Article 368 (passed by Simple Majority in Parliament).",
        subtopic: "36.2"
    },
    {
        id: 6,
        question: "Maximum strength of Legislative Assembly is:",
        options: ["500", "552", "450", "600"],
        correctAnswer: 0,
        explanation: "500.",
        subtopic: "36.3"
    },
    {
        id: 7,
        question: "Minimum strength of Legislative Assembly is (generally):",
        options: ["40", "50", "60", "30"],
        correctAnswer: 2,
        explanation: "60 (Exceptions exist like Sikkim, Goa, etc.).",
        subtopic: "36.3"
    },
    {
        id: 8,
        question: "Minimum age for membership of Legislative Council is:",
        options: ["25", "30", "35", "21"],
        correctAnswer: 1,
        explanation: "30 Years (Same as Rajya Sabha).",
        subtopic: "36.3"
    },
    {
        id: 9,
        question: "What proportion of Council members are elected by MLAs?",
        options: ["1/3", "1/6", "1/12", "1/2"],
        correctAnswer: 0,
        explanation: "1/3rd.",
        subtopic: "36.3"
    },
    {
        id: 10,
        question: "What proportion of Council members are nominated by Governor?",
        options: ["1/3", "1/6", "1/10", "1/12"],
        correctAnswer: 1,
        explanation: "1/6th.",
        subtopic: "36.3"
    },
    {
        id: 11,
        question: "Graduates of how many years standing can vote for Council seats?",
        options: ["1 year", "2 years", "3 years", "5 years"],
        correctAnswer: 2,
        explanation: "3 years.",
        subtopic: "36.3"
    },
    {
        id: 12,
        question: "The ultimate power to pass an Ordinary Bill lies with:",
        options: ["Assembly", "Council", "Governor", "Joint Sitting"],
        correctAnswer: 0,
        explanation: "Assembly. (It can override the Council by passing it a second time).",
        subtopic: "36.5"
    },
    {
        id: 13,
        question: "What is the maximum period a Council can delay a bill in the FIRST instance?",
        options: ["1 month", "3 months", "4 months", "14 days"],
        correctAnswer: 1,
        explanation: "3 months.",
        subtopic: "36.5"
    },
    {
        id: 14,
        question: "What is the maximum TOTAL delay a Council can cause to a bill?",
        options: ["3 months", "4 months", "6 months", "1 year"],
        correctAnswer: 1,
        explanation: "4 months (3 months first time + 1 month second time).",
        subtopic: "36.5"
    },
    {
        id: 15,
        question: "Is there a provision for Joint Sitting in State Legislature?",
        options: ["Yes", "No", "Only for Money Bills", "Only for Constitutional Amendments"],
        correctAnswer: 1,
        explanation: "No provision for Joint Sitting.",
        subtopic: "36.5"
    },
    {
        id: 16,
        question: "Who presides over the Legislative Council?",
        options: ["Speaker", "Chairman", "Governor", "CM"],
        correctAnswer: 1,
        explanation: "Chairman (elected by the Council members from amongst themselves).",
        subtopic: "36.4"
    },
    {
        id: 17,
        question: "Can an Ordinary Bill be introduced in the Legislative Council?",
        options: ["Yes", "No", "Only with Governor permission", "Only Ministers can"],
        correctAnswer: 0,
        explanation: "Yes.",
        subtopic: "36.5"
    },
    {
        id: 18,
        question: "Can a Money Bill be introduced in the Legislative Council?",
        options: ["Yes", "No", "Only with Speaker permission", "Only with Governor permission"],
        correctAnswer: 1,
        explanation: "No. Only in Assembly.",
        subtopic: "36.5"
    },
    {
        id: 19,
        question: "Who decides if a bill is a Money Bill in the State Legislature?",
        options: ["Governor", "Chairman", "Speaker", "CM"],
        correctAnswer: 2,
        explanation: "Speaker of the Assembly.",
        subtopic: "36.6"
    },
    {
        id: 20,
        question: "The quorum for a meeting of State Legislature is:",
        options: ["1/10th or 10", "1/10th or 50", "1/5th or 20", "1/3rd"],
        correctAnswer: 0,
        explanation: "1/10th of total membership OR 10 members, whichever is GREATER.",
        subtopic: "36.6"
    },
    {
        id: 21,
        question: "The Governor can reserve a bill for President's consideration under Article:",
        options: ["200", "201", "213", "163"],
        correctAnswer: 0,
        explanation: "Article 200.",
        subtopic: "36.5"
    },
    {
        id: 22,
        question: "Is it mandatory for Governor to reserve a bill that endangers the High Court?",
        options: ["Yes", "No", "Discretionary", "Depends on CM"],
        correctAnswer: 0,
        explanation: "Yes, it is mandatory.",
        subtopic: "36.5"
    },
    {
        id: 23,
        question: "The privileges of State Legislature are mentioned in Article:",
        options: ["105", "194", "164", "172"],
        correctAnswer: 1,
        explanation: "Article 194. (105 is for Parliament).",
        subtopic: "36.6"
    },
    {
        id: 24,
        question: "Members of Legislative Assembly participate in election of:",
        options: ["President", "Vice President", "Governor", "All"],
        correctAnswer: 0,
        explanation: "President (Not VP, not Governor).",
        subtopic: "36.3"
    },
    {
        id: 25,
        question: "Do nominated members of Assembly participate in President's election?",
        options: ["Yes", "No", "Only if permitted", "In case of tie"],
        correctAnswer: 1,
        explanation: "No.",
        subtopic: "36.3"
    },
    {
        id: 26,
        question: "The Council of Ministers is collectively responsible to:",
        options: ["Governor", "Assembly", "Council", "Legislature"],
        correctAnswer: 1,
        explanation: "Legislative Assembly (Article 164).",
        subtopic: "36.3"
    },
    {
        id: 27,
        question: "A Minister who is not a member of either House must become one within:",
        options: ["3 months", "6 months", "1 year", "Impossible"],
        correctAnswer: 1,
        explanation: "6 months.",
        subtopic: "36.3"
    },
    {
        id: 28,
        question: "Who appoints the Advocate General of the State?",
        options: ["President", "Governor", "Chief Justice of HC", "CM"],
        correctAnswer: 1,
        explanation: "Governor (Article 165).",
        subtopic: "36.1" // Related Executive
    },
    {
        id: 29,
        question: "Minimum age to be an MLA is:",
        options: ["21", "25", "30", "35"],
        correctAnswer: 1,
        explanation: "25 Years.",
        subtopic: "36.3"
    },
    {
        id: 30,
        question: "Usually the term of Assembly is:",
        options: ["4 years", "5 years", "6 years", "Permanent"],
        correctAnswer: 1,
        explanation: "5 years.",
        subtopic: "36.3"
    },
    {
        id: 31,
        question: "The term of Assembly can be extended during National Emergency by:",
        options: ["6 months", "1 year", "2 years", "Indefinite"],
        correctAnswer: 1,
        explanation: "1 year at a time.",
        subtopic: "36.3"
    },
    {
        id: 32,
        question: "Who adjourns the meeting of the Assembly?",
        options: ["Speaker", "Governor", "CM", "President"],
        correctAnswer: 0,
        explanation: "Speaker (Adjournment is by Presiding Officer; Prorogation is by Governor).",
        subtopic: "36.4"
    },
    {
        id: 33,
        question: "Who prorogues the session of the State Legislature?",
        options: ["Speaker", "Governor", "CM", "President"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "36.3"
    },
    {
        id: 34,
        question: "Does dissolution of Assembly affect bills pending in the Council which have NOT been passed by Assembly?",
        options: ["They lapse", "They do not lapse", "Depends on Speaker", "Depends on Governor"],
        correctAnswer: 1,
        explanation: "They DO NOT lapse. (Originating in Council, pending in Council, not passed by Assembly).",
        subtopic: "36.5"
    },
    {
        id: 35,
        question: "A bill passed by Assembly but pending in Council at time of dissolution:",
        options: ["Lapses", "Does not lapse", "Sent to President", "Becomes Act"],
        correctAnswer: 0,
        explanation: "Lapses.",
        subtopic: "36.5"
    },
    {
        id: 36,
        question: "Can the Governor promulgate an ordinance when only one House is in session?",
        options: ["Yes", "No", "Only if President agrees", "Only for money bills"],
        correctAnswer: 0,
        explanation: "Yes (Article 213).",
        subtopic: "31.4"
    },
    {
        id: 37,
        question: "An ordinance issued by Governor must be approved by Legislature within:",
        options: ["6 months", "6 weeks", "3 months", "1 year"],
        correctAnswer: 1,
        explanation: "6 weeks from reassembly.",
        subtopic: "31.4"
    },
    {
        id: 38,
        question: "Nominated members of Council are chosen from fields: Art, Lit, Science, Social Service and:",
        options: ["Sports", "Cooperative Movement", "Business", "Politics"],
        correctAnswer: 1,
        explanation: "Cooperative Movement (This 5th category is unique to States; Rajya Sabha has only 4).",
        subtopic: "36.3"
    },
    {
        id: 39,
        question: "Voting on Demands for Grants is done by:",
        options: ["Assembly only", "Council only", "Both Houses", "Governor"],
        correctAnswer: 0,
        explanation: "Assembly only.",
        subtopic: "36.6"
    },
    {
        id: 40,
        question: "The Speaker of Legislative Assembly resigns writing to:",
        options: ["Governor", "Chief Minister", "Deputy Speaker", "Chairman"],
        correctAnswer: 2,
        explanation: "Deputy Speaker.",
        subtopic: "36.4"
    },
    {
        id: 41,
        question: "When the Speaker is absent, who presides?",
        options: ["Chief Minister", "Deputy Speaker", "Senior Most Member", "Governor"],
        correctAnswer: 1,
        explanation: "Deputy Speaker.",
        subtopic: "36.4"
    },
    {
        id: 42,
        question: "Does the Chairman of Legislative Council vote in the first instance?",
        options: ["Yes", "No", "Always", "Unless forbidden"],
        correctAnswer: 1,
        explanation: "No. He casts a casting vote in case of equality of votes.",
        subtopic: "36.4"
    },
    {
        id: 43,
        question: "Who fixes the salaries of members of State Legislature?",
        options: ["Parliament", "State Legislature", "Governor", "President"],
        correctAnswer: 1,
        explanation: "State Legislature by law.",
        subtopic: "36.6"
    },
    {
        id: 44,
        question: "Which State has the largest Legislative Assembly?",
        options: ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"],
        correctAnswer: 2,
        explanation: "Uttar Pradesh (403 members).",
        subtopic: "36.3"
    },
    {
        id: 45,
        question: "Can Parliament increase the number of seats in State Assembly?",
        options: ["Yes", "No", "State subject", "Only Election Commission"],
        correctAnswer: 0,
        explanation: "Yes (Delimitation Acts).",
        subtopic: "36.1"
    },
    {
        id: 46,
        question: "Anti-Defection Law (10th Schedule) applies to:",
        options: ["Only Parliament", "Only State Legislature", "Both", "Panchayats"],
        correctAnswer: 2,
        explanation: "Both Parliament and State Legislatures.",
        subtopic: "36.6"
    },
    {
        id: 47,
        question: "If a person is elected to both Assembly and Parliament, his seat in:",
        options: ["Parliament becomes vacant", "Assembly becomes vacant", "Both become vacant", "He chooses"],
        correctAnswer: 0,
        explanation: "Parliament seat becomes vacant if he does not resign from Assembly within 14 days (Rule 2 of Prohibition of Simultaneous Membership Rules).",
        subtopic: "36.3"
    },
    {
        id: 48,
        question: "In the absence of Speaker and Deputy Speaker, who presides?",
        options: ["CM", "Governor", "Person from Panel of Chairpersons", "Senior Member"],
        correctAnswer: 2,
        explanation: "Member from the Panel of Chairpersons.",
        subtopic: "36.4"
    },
    {
        id: 49,
        question: "Which state abolished its Legislative Council recently (resolution pass)?",
        options: ["Andhra Pradesh", "Tamil Nadu", "Punjab", "Assam"],
        correctAnswer: 0,
        explanation: "Andhra Pradesh Assembly passed resolution to abolish, but Parliament hasn't acted yet. (Contextual factual update).",
        subtopic: "36.2"
    },
    {
        id: 50,
        question: "West Bengal recently passed a resolution to:",
        options: ["Create a Council", "Abolish Assembly", "Change Name", "None"],
        correctAnswer: 0,
        explanation: "Create a Legislative Council.",
        subtopic: "36.2"
    },
    {
        id: 51,
        question: "The power of State Legislature to make laws is on:",
        options: ["Union List", "State and Concurrent List", "Residuary Subjects", "All Lists"],
        correctAnswer: 1,
        explanation: "State List and Concurrent List.",
        subtopic: "36.6"
    },
    {
        id: 52,
        question: "Residuary Powers belong to:",
        options: ["Parliament", "State Legislature", "President", "SC"],
        correctAnswer: 0,
        explanation: "Parliament.",
        subtopic: "36.6"
    },
    {
        id: 53,
        question: "In case of conflict on Concurrent List law:",
        options: ["State law prevails", "Central law prevails", "SC decides", "Governor decides"],
        correctAnswer: 1,
        explanation: "Central law prevails (Unless State law received President's assent).",
        subtopic: "36.6"
    },
    {
        id: 54,
        question: "The 'Leader of Opposition' is a statutory post:",
        options: ["Yes", "No", "Constitutional", "Convention"],
        correctAnswer: 0,
        explanation: "Yes.",
        subtopic: "36.4"
    },
    {
        id: 55,
        question: "Language used in State Legislature is:",
        options: ["English only", "hindi only", "Official language of state / Hindi / English", "Any language"],
        correctAnswer: 2,
        explanation: "Official language of the state, Hindi, or English. (Presiding officer can permit mother tongue).",
        subtopic: "36.6"
    },
    {
        id: 56,
        question: "Can a court inquire into proceedings of the Legislature?",
        options: ["Yes", "No", "Only SC", "Only HC"],
        correctAnswer: 1,
        explanation: "No (Article 212).",
        subtopic: "36.6"
    },
    {
        id: 57,
        question: "Who is the 'first citizen' of a State?",
        options: ["CM", "Governor", "Chief Justice", "Speaker"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "31.1"
    },
    {
        id: 58,
        question: "The maximum gap between two sessions of state legislature cannot be more than:",
        options: ["3 months", "6 months", "9 months", "1 year"],
        correctAnswer: 1,
        explanation: "6 months.",
        subtopic: "36.3"
    },
    {
        id: 59,
        question: "In which list is 'Public Order'?",
        options: ["Union", "State", "Concurrent", "Residuary"],
        correctAnswer: 1,
        explanation: "State List.",
        subtopic: "36.6"
    },
    {
        id: 60,
        question: "Which Constitutional Amendment capped the size of Council of Ministers?",
        options: ["91st", "92nd", "86th", "42nd"],
        correctAnswer: 0,
        explanation: "91st Amendment Act (15% of Assembly strength).",
        subtopic: "33.1"
    }
];

export default DAY12_MCQS;
