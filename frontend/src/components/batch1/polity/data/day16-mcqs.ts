
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

export const DAY16_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 47: GST COUNCIL (30 Questions)
    // ==========================================
    {
        id: 1,
        question: "Which Article provides for the establishment of GST Council?",
        options: ["Article 269A", "Article 279A", "Article 268A", "Article 246A"],
        correctAnswer: 1,
        explanation: "Article 279A (Added by 101st Amendment).",
        subtopic: "47.1"
    },
    {
        id: 2,
        question: "Who is the Chairman of the GST Council?",
        options: ["PM", "Union Finance Minister", "RBI Governor", "President"],
        correctAnswer: 1,
        explanation: "Union Finance Minister.",
        subtopic: "47.2"
    },
    {
        id: 3,
        question: "The weightage of the Centre's vote in GST Council is:",
        options: ["1/2", "1/3", "2/3", "1/4"],
        correctAnswer: 1,
        explanation: "One-third (33.33%).",
        subtopic: "47.2"
    },
    {
        id: 4,
        question: "The weightage of States' votes (combined) in GST Council is:",
        options: ["1/2", "1/3", "2/3", "3/4"],
        correctAnswer: 2,
        explanation: "Two-thirds (66.67%).",
        subtopic: "47.2"
    },
    {
        id: 5,
        question: "Decision in GST Council requires a majority of:",
        options: ["Simple Majority", "2/3rds", "3/4ths", "Unanimity"],
        correctAnswer: 2,
        explanation: "Three-fourths (75%) of weighted votes of members present and voting.",
        subtopic: "47.2"
    },
    {
        id: 6,
        question: "Who appoints the Vice-Chairperson of GST Council?",
        options: ["President", "Union FM", "Members elect amongst themselves", "PM"],
        correctAnswer: 2,
        explanation: "The Members (State FMs) choose one amongst themselves for a period they decide.",
        subtopic: "47.2"
    },
    {
        id: 7,
        question: "Quorum for GST Council meeting is:",
        options: ["1/3rd", "1/2", "2/3rd", "1/10th"],
        correctAnswer: 1,
        explanation: "One-half of the total number of members.",
        subtopic: "47.2"
    },
    {
        id: 8,
        question: "GST Council was constituted by the President within ___ days of the Act commencement?",
        options: ["30", "60", "90", "15"],
        correctAnswer: 1,
        explanation: "60 days (Art 279A says President shall constitute within 60 days).",
        subtopic: "47.1"
    },
    {
        id: 9,
        question: "The Secretary to the GST Council is:",
        options: ["Cabinet Secretary", "Finance Secretary", "Revenue Secretary", "GST Commissioner"],
        correctAnswer: 2,
        explanation: "Union Revenue Secretary (Ex-Officio).",
        subtopic: "47.2"
    },
    {
        id: 10,
        question: "GST Council recommends rates on:",
        options: ["Alcohol", "Petroleum", "Electricity", "Tobacco"],
        correctAnswer: 3,
        explanation: "Tobacco is under GST (plus Central Excise). Alcohol, Electricity are outside. Petroleum is outside for now.",
        subtopic: "47.3"
    },
    {
        id: 11,
        question: "Who decides when GST will be levied on Petroleum products?",
        options: ["Parliament", "President", "GST Council", "Finance Commission"],
        correctAnswer: 2,
        explanation: "Article 279A(5): GST Council will recommend the date.",
        subtopic: "47.3"
    },
    {
        id: 12,
        question: "The headquarters of GST Council Secretariat is in:",
        options: ["Mumbai", "New Delhi", "Kolkata", "Bengaluru"],
        correctAnswer: 1,
        explanation: "New Delhi.",
        subtopic: "47.2"
    },
    {
        id: 13,
        question: "101st Amendment Act came into force on:",
        options: ["1 July 2017", "1 April 2017", "16 Sept 2016", "1 Jan 2017"],
        correctAnswer: 2,
        explanation: "16 September 2016 (Notification date). GST launched 1 July 2017.",
        subtopic: "47.1"
    },
    {
        id: 14,
        question: "Does the GST Council have power to adjudicate disputes?",
        options: ["Yes, establishes mechanism", "No, SC does", "No, Tribunals only", "No, Finance Commission"],
        correctAnswer: 0,
        explanation: "Yes, it can establish a mechanism to adjudicate disputes (Art 279A(11)).",
        subtopic: "47.3"
    },
    {
        id: 15,
        question: "Chairperson of CBIC is a ___ to the GST Council.",
        options: ["Member with vote", "Permanent Invitee (non-voting)", "Secretary", "Observer"],
        correctAnswer: 1,
        explanation: "Permanent Invitee (non-voting).",
        subtopic: "47.2"
    },
    {
        id: 16,
        question: "Compensation to states for GST revenue loss was guaranteed for:",
        options: ["3 years", "5 years", "10 years", "Permanent"],
        correctAnswer: 1,
        explanation: "5 years (ended 2022).",
        subtopic: "47.3"
    },
    {
        id: 17,
        question: "Voting in GST Council is designed to promote:",
        options: ["Centre's Dominance", "State's Dominance", "Cooperative Federalism", "President's Will"],
        correctAnswer: 2,
        explanation: "Cooperative Federalism (Neither Centre nor States can act alone; they need each other).",
        subtopic: "47.2"
    },
    {
        id: 18,
        question: "Which of the following taxes is subsumed under GST?",
        options: ["Stamp Duty", "Electricity Duty", "Entertainment Tax (by Local Bodies)", "Service Tax"],
        correctAnswer: 3,
        explanation: "Service Tax is subsumed. Others are not (Entertainment tax by local bodies is not subsumed).",
        subtopic: "47.3"
    },
    {
        id: 19,
        question: "Who represents states in the GST Council?",
        options: ["Governor", "Chief Minister", "Minister of Finance/Taxation or any other Minister", "Chief Secretary"],
        correctAnswer: 2,
        explanation: "Minister in charge of Finance/Taxation or any other Minister nominated by State Govt.",
        subtopic: "47.2"
    },
    {
        id: 20,
        question: "Is GST Council a statutory body?",
        options: ["Yes", "No, Constitutional", "No, Executive", "No, NGO"],
        correctAnswer: 1,
        explanation: "Constitutional Body (Art 279A).",
        subtopic: "47.1"
    },
    { id: 21, question: "Subsumed Tax: Central Excise Duty?", options: ["Yes", "No"], correctAnswer: 0, subtopic: "47.3" },
    { id: 22, question: "Subsumed Tax: VAT/Sales Tax?", options: ["Yes", "No"], correctAnswer: 0, subtopic: "47.3" },
    { id: 23, question: "Subsumed Tax: Professional Tax?", options: ["Yes", "No"], correctAnswer: 1, subtopic: "47.3" },
    { id: 24, question: "Subsumed Tax: Luxury Tax?", options: ["Yes", "No"], correctAnswer: 0, subtopic: "47.3" },
    { id: 25, question: "Subsumed Tax: Octroi/Entry Tax?", options: ["Yes", "No"], correctAnswer: 0, subtopic: "47.3" },
    { id: 26, question: "Taxes credited to GST Compensation Fund comes from?", options: ["Cess", "Income Tax", "Corporate Tax", "Customs"], correctAnswer: 0, subtopic: "47.3" },
    { id: 27, question: "Rate bands of GST includes:", options: ["5, 12, 18, 28", "10, 20, 30", "5, 10, 15, 20", "None"], correctAnswer: 0, subtopic: "47.3" },
    { id: 28, question: "IGST is levied by:", options: ["Centre", "State", "Both", "GST Council"], correctAnswer: 0, subtopic: "47.3" },
    { id: 29, question: "IGST is shared between?", options: ["Centre & Origin State", "Centre & Destination State", "Centre only", "States only"], correctAnswer: 1, subtopic: "47.3" },
    { id: 30, question: "Purpose of Article 246A?", options: ["Concurrent power to legislate on GST", "Exclusive power to Centre", "Residual Power", "State List mod"], correctAnswer: 0, subtopic: "47.1" },

    // ==========================================
    // CHAPTER 55: NITI AAYOG (30 Questions)
    // ==========================================
    {
        id: 31,
        question: "NITI Aayog came into existence on:",
        options: ["1 Jan 2014", "1 Jan 2015", "15 Aug 2014", "26 Jan 2015"],
        correctAnswer: 1,
        explanation: "1 January 2015.",
        subtopic: "55.1"
    },
    {
        id: 32,
        question: "NITI Aayog is a:",
        options: ["Constitutional Body", "Statutory Body", "Executive Body", "NGO"],
        correctAnswer: 2,
        explanation: "Executive Body (Created by Resolution of Cabinet). Non-Constitutional, Non-Statutory.",
        subtopic: "55.1"
    },
    {
        id: 33,
        question: "Who is the Chairperson of NITI Aayog?",
        options: ["President", "PM", "Finance Minister", "Home Minister"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "55.2"
    },
    {
        id: 34,
        question: "Governing Council of NITI Aayog comprises:",
        options: ["PM & Cabinet", "PM & CMs", "PM + CMs + Lt. Governors", "Ministers only"],
        correctAnswer: 2,
        explanation: "PM + CMs of all States + CMs of UTs (Delhi/Puducherry/J&K) + LGs of other UTs.",
        subtopic: "55.2"
    },
    {
        id: 35,
        question: "Who appoints the Vice-Chairman of NITI Aayog?",
        options: ["President", "PM", "Governing Council", "Parliament"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "55.2"
    },
    {
        id: 36,
        question: "Regional Councils of NITI Aayog are convened to address:",
        options: ["National Issues", "Specific Regional Issues", "Foreign Policy", "Defense"],
        correctAnswer: 1,
        explanation: "Specific issues affecting more than one state/region. Convened by PM, chaired by NITI Chair or his nominee.",
        subtopic: "55.2"
    },
    {
        id: 37,
        question: "Parent Agency of NITI Aayog is:",
        options: ["Ministry of Finance", "Ministry of Planning", "PMO", "Ministry of Home"],
        correctAnswer: 1,
        explanation: "Ministry of Planning (Nodal Ministry). Although PMO drives it.",
        subtopic: "55.1"
    },
    {
        id: 38,
        question: "The rank of Vice-Chairman of NITI Aayog is equivalent to:",
        options: ["Cabinet Minister", "Minister of State", "Safety Secretary", "CJI"],
        correctAnswer: 0,
        explanation: "Cabinet Minister.",
        subtopic: "55.2"
    },
    {
        id: 39,
        question: "NITI stands for:",
        options: ["National Institute for Transforming India", "National Institution for Transforming India", "New Initiative to Transform India", "National Initiative for Technology India"],
        correctAnswer: 1,
        explanation: "National Institution for Transforming India.",
        subtopic: "55.1"
    },
    {
        id: 40,
        question: "Full-time members of NITI Aayog enjoy rank of:",
        options: ["Cabinet Minister", "MoS", "Secretary", "Director"],
        correctAnswer: 1,
        explanation: "Minister of State.",
        subtopic: "55.2"
    },
    {
        id: 41,
        question: "Who serves as Ex-officio members of NITI Aayog?",
        options: ["Max 4 Council of Ministers", "Max 2", "All Cabinet", "Chief Secretaries"],
        correctAnswer: 0,
        explanation: "Maximum 4 members of Union Council of Ministers nominated by PM.",
        subtopic: "55.2"
    },
    {
        id: 42,
        question: "Chief Executive Officer (CEO) of NITI Aayog is appointed by:",
        options: ["PM", "President", "Vice-Chairman", "UPSC"],
        correctAnswer: 0,
        explanation: "Prime Minister (Fixed tenure, rank of Secretary to GoI).",
        subtopic: "55.2"
    },
    {
        id: 43,
        question: "Does NITI Aayog allocate funds to states?",
        options: ["Yes", "No", "Sometimes", "Only for weak states"],
        correctAnswer: 1,
        explanation: "No. The financial powers (Gadgil Formula) of Planning Commission were removed. MoF does it now.",
        subtopic: "55.4"
    },
    {
        id: 44,
        question: "Core philosophy of NITI Aayog is:",
        options: ["Centralization", "Cooperative Federalism", "Command Economy", "Unitary bias"],
        correctAnswer: 1,
        explanation: "Cooperative Federalism (Bottom-Up approach).",
        subtopic: "55.3"
    },
    {
        id: 45,
        question: "Sustainable Action for Transforming Human Capital (SATH) is an initiative of:",
        options: ["Health Ministry", "NITI Aayog", "HRD Ministry", "World Bank"],
        correctAnswer: 1,
        explanation: "NITI Aayog.",
        subtopic: "55.5"
    },
    {
        id: 46,
        question: "Aspirational Districts Programme launched by:",
        options: ["Rural Dev Ministry", "NITI Aayog", "PMO", "Home Ministry"],
        correctAnswer: 1,
        explanation: "NITI Aayog.",
        subtopic: "55.5"
    },
    {
        id: 47,
        question: "National Development Council (NDC) abolished?",
        options: ["Yes", "No, but defunct", "Merged with NITI", "Replaced by GST Council"],
        correctAnswer: 1,
        explanation: "Effectively defunct as its functions are taken over by NITI's Governing Council, but no formal abolition order passed (as of latest updates).",
        subtopic: "55.6"
    },
    {
        id: 48,
        question: "Atal Innovation Mission (AIM) promotes:",
        options: ["Agriculture", "Entrepreneurship & Innovation", "Space Tech", "Defense"],
        correctAnswer: 1,
        explanation: "Innovation and Entrepreneurship.",
        subtopic: "55.5"
    },
    {
        id: 49,
        question: "Planning Commission was established in:",
        options: ["1950", "1947", "1952", "1951"],
        correctAnswer: 0,
        explanation: "March 1950 (by Executive Resolution).",
        subtopic: "55.6"
    },
    {
        id: 50,
        question: "The 'Seven Years Strategy' document replaced:",
        options: ["Five Year Plans", "Annual Budget", "Vision Document", "None"],
        correctAnswer: 0,
        explanation: "NITI Aayog replaced 5-Year Plans with 15-Year Vision, 7-Year Strategy, 3-Year Action Agenda.",
        subtopic: "55.5"
    },
    { id: 51, question: "Special Invitees include?", options: ["Experts", "Foreigners", "Governors", "Judges"], correctAnswer: 0, subtopic: "55.2" },
    { id: 52, question: "Part-time members max number?", options: ["2", "4", "5", "3"], correctAnswer: 0, subtopic: "55.2" },
    { id: 53, question: "Part-time members come from?", options: ["Universities/Research Orgs", "Industry", "Politics", "Civil Service"], correctAnswer: 0, subtopic: "55.2" },
    { id: 54, question: "Strategy for New India @ 75 released by?", options: ["NITI Aayog", "Finance Ministry", "PMO", "RBI"], correctAnswer: 0, subtopic: "55.5" },
    { id: 55, question: "Composite Water Management Index released by?", options: ["Jal Shakti", "NITI Aayog", "Environment Min", "CWC"], correctAnswer: 1, subtopic: "55.5" },
    { id: 56, question: "School Education Quality Index (SEQI)?", options: ["Education Min", "NITI Aayog", "NCERT", "CBSE"], correctAnswer: 1, subtopic: "55.5" },
    { id: 57, question: "India Innovation Index?", options: ["DST", "NITI Aayog", "CSIR", "Commerce Min"], correctAnswer: 1, subtopic: "55.5" },
    { id: 58, question: "SDG India Index?", options: ["MoSPI", "NITI Aayog", "Env Ministry", "UN"], correctAnswer: 1, subtopic: "55.5" },
    { id: 59, question: "Who recommends MSP initially?", options: ["CACP", "NITI Aayog", "Finance Comm", "Agriculture Min"], correctAnswer: 0, subtopic: "55.5" }, // CACP does, NITI works on policy
    { id: 60, question: "Is NITI Aayog a Constitutional Body?", options: ["No", "Yes", "Partially", "Quasi"], correctAnswer: 0, subtopic: "55.1" }
];

export default DAY16_MCQS;
