
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

export const DAY28_MCQS: MCQ[] = [
    // ==========================================
    // CONSTITUTIONAL BODIES (20 Questions)
    // ==========================================
    {
        id: 1,
        question: "Who decides the number of Election Commissioners?",
        options: ["President", "Parliament", "Chief Election Commissioner", "Supreme Court"],
        correctAnswer: 0,
        explanation: "The President fixes the number of Election Commissioners from time to time.",
        subtopic: "43.1"
    },
    {
        id: 2,
        question: "UPSC submits its annual report to?",
        options: ["Parliament", "President", "DoPT Minister", "Cabinet Secretary"],
        correctAnswer: 1,
        explanation: "President, who places it before Parliament.",
        subtopic: "44.1"
    },
    {
        id: 3,
        question: "Finance Commission is constituted every?",
        options: ["5 years", "4 years", "6 years", "10 years"],
        correctAnswer: 0,
        explanation: "Every 5th year or earlier.",
        subtopic: "46.1"
    },
    {
        id: 4,
        question: "Who acts as the Chairman of the GST Council?",
        options: ["PM", "Union Finance Minister", "RBI Governor", "Home Minister"],
        correctAnswer: 1,
        explanation: "Union Finance Minister.",
        subtopic: "47.1"
    },
    {
        id: 5,
        question: "CAG is responsible to?",
        options: ["President", "Parliament", "PM", "Supreme Court"],
        correctAnswer: 1,
        explanation: "CAG is an agent of Parliament and conducts audits on its behalf.",
        subtopic: "52.1"
    },
    {
        id: 6,
        question: "The NCSC (National Commission for SCs) has powers of?",
        options: ["Civil Court", "Criminal Court", "High Court", "Sessions Court"],
        correctAnswer: 0,
        explanation: "Civil Court while investigating complaints.",
        subtopic: "48.1"
    },
    {
        id: 7,
        question: "Attorney General holds office during the pleasure of?",
        options: ["President", "PM", "CJI", "Parliament"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "53.1"
    },
    {
        id: 8,
        question: "Advocate General is appointed by?",
        options: ["President", "Governor", "CM", "High Court CJ"],
        correctAnswer: 1,
        explanation: "Governor.",
        subtopic: "54.1"
    },
    {
        id: 9,
        question: "Article 338B deals with?",
        options: ["NCBC", "NCSC", "NCST", "Special Officer for Linguistic Minorities"],
        correctAnswer: 0,
        explanation: "National Commission for Backward Classes.",
        subtopic: "50.1"
    },
    {
        id: 10,
        question: "Special Officer for Linguistic Minorities reports to?",
        options: ["President", "Minority Affairs Minister", "Parliament", "Home Minister"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "51.1"
    },
    { id: 11, question: "Salaries of Supreme Court Judges are charged on?", options: ["Consolidated Fund of India", "Contingency Fund", "Public Account", "Estimate Fund"], correctAnswer: 0, subtopic: "26.1" },
    { id: 12, question: "State Election Commission is appointed by?", options: ["Governor", "President", "CEC", "CM"], correctAnswer: 0, subtopic: "Constitutional" },
    { id: 13, question: "Can a retired UPSC Chairman be employed in Govt of India?", options: ["No", "Yes", "With Permission", "Only in State"], correctAnswer: 0, subtopic: "44.1" },
    { id: 14, question: "Joint State Public Service Commission is created by?", options: ["An Act of Parliament", "Presidential Order", "State Legislatures", "Constitution"], correctAnswer: 0, subtopic: "45.1" }, // Statutory body, not constitutional
    { id: 15, question: "Who recommends the distribution of taxes between Centre and States?", options: ["Finance Commission", "NITI Aayog", "GST Council", "RBI"], correctAnswer: 0, subtopic: "46.1" },
    { id: 16, question: "District Judges are appointed by?", options: ["Governor", "President", "High Court CJ", "CM"], correctAnswer: 0, subtopic: "34.1" },
    { id: 17, question: "Who certifies a Money Bill in State Legislature?", options: ["Speaker of Assembly", "Governor", "CM", "Council Chairman"], correctAnswer: 0, subtopic: "32.1" },
    { id: 18, question: "Maximum gap between two sessions of Parliament?", options: ["6 months", "3 months", "9 months", "1 year"], correctAnswer: 0, subtopic: "22.1" },
    { id: 19, question: "Concept of Judicial Review borrowed from?", options: ["USA", "UK", "Canada", "Australia"], correctAnswer: 0, subtopic: "27.1" },
    { id: 20, question: "Inter-State Council is set up by?", options: ["President", "Parliament", "NITI Aayog", "Supreme Court"], correctAnswer: 0, subtopic: "15.1" },

    // ==========================================
    // NON-CONSTITUTIONAL BODIES (20 Questions)
    // ==========================================
    {
        id: 21,
        question: "CVC was established on recommendation of?",
        options: ["Santhanam Committee", "Kripalani Committee", "Gorwala Committee", "Sarkaria Commission"],
        correctAnswer: 0,
        explanation: "Santhanam Committee on Prevention of Corruption.",
        subtopic: "60.1"
    },
    {
        id: 22,
        question: "NHRC Chairperson must be?",
        options: ["Former CJI or Judge of SC", "Former CJ of HC", "Eminent Jurist", "Social Worker"],
        correctAnswer: 0,
        explanation: "Former Chief Justice of India or Judge of the Supreme Court.",
        subtopic: "56.1"
    },
    {
        id: 23,
        question: "CIC is appointed by President on recommendation of committee headed by?",
        options: ["Prime Minister", "Home Minister", "CJI", "Vice President"],
        correctAnswer: 0,
        explanation: "Prime Minister.",
        subtopic: "58.1"
    },
    {
        id: 24,
        question: "Lokpal institution was first introduced in Parliament in?",
        options: ["1968", "1971", "1985", "2011"],
        correctAnswer: 0,
        explanation: "1968.",
        subtopic: "62.1"
    },
    {
        id: 25,
        question: "NITI Aayog was established by?",
        options: ["Executive Resolution", "Act of Parliament", "Constitutional Amendment", "Supreme Court Order"],
        correctAnswer: 0,
        explanation: "Executive Resolution (Cabinet).",
        subtopic: "55.1"
    },
    {
        id: 26,
        question: "CBI Director is appointed based on which Act currently?",
        options: ["DSPE Act 1946 (as amended by Lokpal Act)", "CVC Act", "Police Act", "CBI Act"],
        correctAnswer: 0,
        explanation: "Selection committee mechanism is in DSPE Act, as amended by Lokpal Act.",
        subtopic: "61.1"
    },
    {
        id: 27,
        question: "Who removes Information Commissioners?",
        options: ["President", "CIC", "PM", "Supreme Court"],
        correctAnswer: 0,
        explanation: "President (after SC inquiry).",
        subtopic: "58.1"
    },
    {
        id: 28,
        question: "Does NHRC have power to punish for contempt?",
        options: ["No", "Yes", "Limited", "Same as Court"],
        correctAnswer: 0,
        explanation: "No, it is a recommendatory body.",
        subtopic: "56.2"
    },
    {
        id: 29,
        question: "Tenure of Lokpal Members?",
        options: ["5 years/70 years", "5 years/65 years", "6 years/65 years", "3 years/70 years"],
        correctAnswer: 0,
        explanation: "5 years or 70 years of age.",
        subtopic: "62.1"
    },
    {
        id: 30,
        question: "Central Information Commission falls under which Ministry?",
        options: ["Ministry of Personnel", "Home Ministry", "Law Ministry", "I&B Ministry"],
        correctAnswer: 0,
        explanation: "Ministry of Personnel, Public Grievances and Pensions.",
        subtopic: "58.1"
    },
    { id: 31, question: "State Information Commissioner tenure?", options: ["3 years or 65 age", "5 years or 65 age", "5 years or 70 age", "Prescribed by Central Govt"], correctAnswer: 3, subtopic: "59.1" }, // Current rule: Fixed by Centre (3 years).
    { id: 32, question: "SHRC report submitted to?", options: ["State Govt", "Governor", "President", "NHRC"], correctAnswer: 0, subtopic: "57.1" },
    { id: 33, question: "Can CBI investigate in a state without general consent?", options: ["No, unless HC/SC orders", "Yes", "For terrorism only", "With Governor permission"], correctAnswer: 0, subtopic: "61.2" },
    { id: 34, question: "Who appoints the Special Director of CBI?", options: ["Central Govt on CVC Committee Rec", "CBI Director", "PM", "President"], correctAnswer: 0, subtopic: "61.1" },
    { id: 35, question: "National Human Rights Commission set up in?", options: ["1993", "1990", "1995", "2000"], correctAnswer: 0, subtopic: "56.1" },
    { id: 36, question: "Is CVC a multi-member body?", options: ["Yes (Max 2 VC)", "No", "Max 5 VC", "Max 3 VC"], correctAnswer: 0, subtopic: "60.1" },
    { id: 37, question: "Can Lokpal investigate Judiciary?", options: ["No", "Yes", "Only Lower", "Only Admin side"], correctAnswer: 0, subtopic: "62.2" },
    { id: 38, question: "Who is the 'amicus curiae' of Indian Federalism?", options: ["Supreme Court", "President", "Governor", "Finance Commission"], correctAnswer: 0, subtopic: "Concept" },
    { id: 39, question: "Whistle Blowers Protection Act, 2014 sets up?", options: ["Competent Authorities", "Special Police", "New Courts", "None"], correctAnswer: 0, subtopic: "Misc" },
    { id: 40, question: "Lokpal expenditures charged on?", options: ["Consolidated Fund of India", "Contingency Fund", "Grants", "Department Fund"], correctAnswer: 0, subtopic: "62.1" },

    // ==========================================
    // REVISION OF WEEKS 1-3 (20 Questions)
    // ==========================================
    {
        id: 41,
        question: "Fundamental Duties were added by which Amendment?",
        options: ["42nd", "44th", "86th", "91st"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "9.1"
    },
    {
        id: 42,
        question: "Procedure established by law is from?",
        options: ["Japan", "USA", "UK", "France"],
        correctAnswer: 0,
        explanation: "Japan.",
        subtopic: "3.1"
    },
    {
        id: 43,
        question: "Tenth Schedule was added by?",
        options: ["52nd Amendment", "3th Amendment", "42nd Amendment", "73rd Amendment"],
        correctAnswer: 0,
        explanation: "52nd Amendment Act, 1985 (Anti-Defection).",
        subtopic: "22.6"
    },
    {
        id: 44,
        question: "Money Bill can be introduced in?",
        options: ["Lok Sabha only", "Rajya Sabha only", "Either House", "Joint Sitting"],
        correctAnswer: 0,
        explanation: "Lok Sabha only.",
        subtopic: "22.3"
    },
    {
        id: 45,
        question: "Who presides over Joint Sitting of Parliament?",
        options: ["Speaker of LS", "Chairman of RS", "President", "PM"],
        correctAnswer: 0,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "22.3"
    },
    {
        id: 46,
        question: "Pardon power of President is under Article?",
        options: ["72", "161", "74", "76"],
        correctAnswer: 0,
        explanation: "Article 72.",
        subtopic: "17.1"
    },
    {
        id: 47,
        question: "Impeachment of President requires majority of?",
        options: ["2/3rd of total membership", "2/3rd present and voting", "Simple majority", "Absolute majority"],
        correctAnswer: 0,
        explanation: "2/3rd of total membership of the House.",
        subtopic: "17.1"
    },
    {
        id: 48,
        question: "Council of Ministers is collectively responsible to?",
        options: ["Lok Sabha", "Parliament", "President", "People"],
        correctAnswer: 0,
        explanation: "Lok Sabha (Article 75).",
        subtopic: "20.1"
    },
    {
        id: 49,
        question: "Article 123 deals with?",
        options: ["President's Ordinance", "Supreme Court", "Governor's Ordinance", "Financial Emergency"],
        correctAnswer: 0,
        explanation: "Power of President to promulgate Ordinances.",
        subtopic: "17.2"
    },
    {
        id: 50,
        question: "Sarkaria Commission dealt with?",
        options: ["Centre-State Relations", "Electoral Reforms", "Banking", "Police Reforms"],
        correctAnswer: 0,
        explanation: "Centre-State Relations (1983).",
        subtopic: "14.1"
    },
    { id: 51, question: "Which Article allows Parliament to legislate on State List in national interest?", options: ["249", "250", "252", "253"], correctAnswer: 0, subtopic: "14.1" },
    { id: 52, question: "Financial Emergency (Article 360) imposed how many times?", options: ["Never", "Once", "Twice", "During 1991"], correctAnswer: 0, subtopic: "16.1" },
    { id: 53, question: "Right to Property is a?", options: ["Legal Right", "Fundamental Right", "Natural Right", "Moral Right"], correctAnswer: 0, subtopic: "7.1" },
    { id: 54, question: "Who appoints the District Judges?", options: ["Governor", "High Court CJ", "President", "CM"], correctAnswer: 0, subtopic: "34.1" },
    { id: 55, question: "Judicial Activism originated in?", options: ["USA", "UK", "India", "Germany"], correctAnswer: 0, subtopic: "28.1" },
    { id: 56, question: "PIL was introduced in India by?", options: ["Justice P.N. Bhagwati", "Justice Krishna Iyer", "Both", "Justice Ray"], correctAnswer: 2, subtopic: "29.1" },
    { id: 57, question: "Basic Structure doctrine came from?", options: ["Kesavananda Bharati Case", "Golaknath Case", "Minerva Mills Case", "Maneka Gandhi Case"], correctAnswer: 0, subtopic: "11.1" },
    { id: 58, question: "Who can dissolve the Lok Sabha?", options: ["President", "PM", "Speaker", "CJI"], correctAnswer: 0, subtopic: "22.1" },
    { id: 59, question: "Quorum to constitute a meeting of the House?", options: ["1/10th of total members", "1/5th", "1/3rd", "50 members"], correctAnswer: 0, subtopic: "22.3" },
    { id: 60, question: "First hour of every parliamentary sitting is?", options: ["Question Hour", "Zero Hour", "Lunch Hour", "Motion Hour"], correctAnswer: 0, subtopic: "22.3" }
];

export default DAY28_MCQS;
