
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

export const DAY31_MCQS: MCQ[] = [
    // ==========================================
    // SPECIAL PROVISIONS (Ch 67) - 60 Questions
    // ==========================================
    {
        id: 1,
        question: "Part XVI of the Constitution deals with?",
        options: ["Special Provisions relating to Certain Classes", "Elections", "Official Language", "Emergency"],
        correctAnswer: 0,
        explanation: "Special Provisions relating to Certain Classes (Articles 330-342).",
        subtopic: "67.1"
    },
    {
        id: 2,
        question: "Article 330 provides reservation for SCs and STs in?",
        options: ["Lok Sabha", "Rajya Sabha", "State Assemblies", "Panchayats"],
        correctAnswer: 0,
        explanation: "House of the People (Lok Sabha).",
        subtopic: "67.1"
    },
    {
        id: 3,
        question: "Article 332 provides reservation for SCs and STs in?",
        options: ["State Legislative Assemblies", "State Legislative Councils", "Lok Sabha", "Cabinet"],
        correctAnswer: 0,
        explanation: "Legislative Assemblies of the States.",
        subtopic: "67.1"
    },
    {
        id: 4,
        question: "The reservation of seats for SCs and STs was originally for?",
        options: ["10 years", "20 years", "50 years", "Permanent"],
        correctAnswer: 0,
        explanation: "Originally for 10 years (extended continuously, currently till 2030 by 104th Amendment).",
        subtopic: "67.1"
    },
    {
        id: 5,
        question: "104th Amendment Act, 2019 ceased the reservation for?",
        options: ["Anglo-Indians in LS and Assemblies", "SCs in LS", "STs in LS", "Women in Panchayats"],
        correctAnswer: 0,
        explanation: "Discontinued the reservation of seats for Anglo-Indians.",
        subtopic: "67.1"
    },
    {
        id: 6,
        question: "Article 335 mentions 'maintenance of efficiency of administration' regarding?",
        options: ["Claims of SCs/STs to services", "Claims of OBCs", "Reservation in Promotions", "Transfer of Judges"],
        correctAnswer: 0,
        explanation: "Claims of Scheduled Castes and Scheduled Tribes to services and posts.",
        subtopic: "67.2"
    },
    {
        id: 7,
        question: "Who specifies the Scheduled Castes in relation to a particular State?",
        options: ["President", "Parliament", "Governor", "National Commission for SCs"],
        correctAnswer: 0,
        explanation: "President (in consultation with Governor).",
        subtopic: "67.3"
    },
    {
        id: 8,
        question: "Can the list of Scheduled Castes specified by President be varied by?",
        options: ["Parliament by law", "President by notification", "Governor", "Supreme Court"],
        correctAnswer: 0,
        explanation: "Only Parliament can include/exclude from the list.",
        subtopic: "67.3"
    },
    {
        id: 9,
        question: "Article 338 establishes?",
        options: ["National Commission for SCs", "National Commission for STs", "NCBC", "Minority Commission"],
        correctAnswer: 0,
        explanation: "National Commission for Scheduled Castes.",
        subtopic: "67.3"
    },
    {
        id: 10,
        question: "Article 338A establishes?",
        options: ["National Commission for STs", "NCSC", "NCBC", "Human Rights Commission"],
        correctAnswer: 0,
        explanation: "National Commission for Scheduled Tribes (added by 89th Amendment, 2003).",
        subtopic: "67.3"
    },
    {
        id: 11,
        question: "Article 338B establishes?",
        options: ["National Commission for Backward Classes", "NCSC", "NCST", "Linguistic Officer"],
        correctAnswer: 0,
        explanation: "National Commission for Backward Classes (added by 102nd Amendment, 2018).",
        subtopic: "67.3"
    },
    {
        id: 12,
        question: "First Backward Classes Commission was headed by?",
        options: ["Kaka Kalelkar", "B.P. Mandal", "Ranganath Mishra", "Indra Sawhney"],
        correctAnswer: 0,
        explanation: "Kaka Kalelkar (1953).",
        subtopic: "67.3"
    },
    {
        id: 13,
        question: "Second Backward Classes Commission was headed by?",
        options: ["B.P. Mandal", "Kaka Kalelkar", "V.P. Singh", "Morarji Desai"],
        correctAnswer: 0,
        explanation: "B.P. Mandal (1979).",
        subtopic: "67.3"
    },
    {
        id: 14,
        question: "Article 340 empowers President to appoint a commission to investigate?",
        options: ["Conditions of backward classes", "Conditions of SCs", "Conditions of STs", "Conditions of Minorities"],
        correctAnswer: 0,
        explanation: "Conditions of socially and educationally backward classes.",
        subtopic: "67.3"
    },
    {
        id: 15,
        question: "Creamy layer concept is applicable to?",
        options: ["OBCs", "SCs", "STs", "All of the above"],
        correctAnswer: 0,
        explanation: "OBCs (for exclusion from reservation).",
        subtopic: "67.3"
    },
    {
        id: 16,
        question: "Article 341 deals with?",
        options: ["Scheduled Castes", "Scheduled Tribes", "Backward Classes", "Anglo Indians"],
        correctAnswer: 0,
        explanation: "Scheduled Castes.",
        subtopic: "67.3"
    },
    {
        id: 17,
        question: "Article 342 deals with?",
        options: ["Scheduled Tribes", "Scheduled Castes", "OBCs", "Languages"],
        correctAnswer: 0,
        explanation: "Scheduled Tribes.",
        subtopic: "67.3"
    },
    {
        id: 18,
        question: "Does the Constitution specify the castes/tribes to be included?",
        options: ["No, it empowers President to specify", "Yes, in a Schedule", "Partially", "In Preamble"],
        correctAnswer: 0,
        explanation: "No list in Constitution itself; President issues Orders.",
        subtopic: "67.3"
    },
    {
        id: 19,
        question: "Reservation for SC/ST in Lok Sabha is based on?",
        options: ["Population ratio", "Fixed number", "Area ratio", "Poverty ratio"],
        correctAnswer: 0,
        explanation: "Population ratio (Article 330).",
        subtopic: "67.1"
    },
    {
        id: 20,
        question: "Is there reservation for OBCs in Lok Sabha?",
        options: ["No", "Yes", "27%", "Same as SC"],
        correctAnswer: 0,
        explanation: "No. Only SC and ST reservation exists in Legislature.",
        subtopic: "67.1"
    },
    { id: 21, question: "105th Constitutional Amendment (2021) relates to?", options: ["Restoring State power to identify SEBCs", "EWS reservation", "GST", "Land Boundary"], correctAnswer: 0, subtopic: "67.3" },
    { id: 22, question: "Article 342A deals with?", options: ["Socially and Educationally Backward Classes", "STs", "SCs", "EWS"], correctAnswer: 0, subtopic: "67.3" },
    { id: 23, question: "Definition of 'Scheduled Castes' is in Article?", options: ["366(24)", "341", "338", "330"], correctAnswer: 0, subtopic: "67.3" }, // Art 366(24) defines, referring to Art 341.
    { id: 24, question: "Definition of 'Scheduled Tribes' is in Article?", options: ["366(25)", "342", "338A", "332"], correctAnswer: 0, subtopic: "67.3" },
    { id: 25, question: "Definition of 'Anglo-Indian' was in Article?", options: ["366(2)", "300", "331", "333"], correctAnswer: 0, subtopic: "67.1" },
    { id: 26, question: "Who appointed the Rohini Commission?", options: ["President", "PM", "Supreme Court", "Parliament"], correctAnswer: 0, subtopic: "67.3" },
    { id: 27, question: "Rohini Commission was for?", options: ["Sub-categorization of OBCs", "SC Status", "ST Status", "EWS"], correctAnswer: 0, subtopic: "Misc" },
    { id: 28, question: "Can a person professing religion different from Hindu/Sikh/Buddhist be SC?", options: ["No (generally)", "Yes", "Depends on State", "If converted"], correctAnswer: 0, subtopic: "67.3" }, // Presidential Order limitation.
    { id: 29, question: "Can a person of any religion be ST?", options: ["Yes", "No", "Only Hindu", "Only Christian"], correctAnswer: 0, subtopic: "67.3" }, // ST has no religious bar.
    { id: 30, question: "Article 16(4) enables reservation in?", options: ["Services", "Legislature", "Panchayats", "Housing"], correctAnswer: 0, subtopic: "67.2" },
    { id: 31, question: "Article 16(4A) enables?", options: ["Reservation in Promotion", "Creamy Layer", "EWS", "Private Sector"], correctAnswer: 0, subtopic: "67.2" },
    { id: 32, question: "Carry Forward Rule is validated by Article?", options: ["16(4B)", "16(4)", "335", "320"], correctAnswer: 0, subtopic: "67.2" },
    { id: 33, question: "Indra Sawhney Case (1992) capped reservation at?", options: ["50%", "33%", "49%", "60%"], correctAnswer: 0, subtopic: "67.2" },
    { id: 34, question: "103rd Amendment provides for?", options: ["EWS Reservation (10%)", "NCBC", "SC/ST", "GST"], correctAnswer: 0, subtopic: "Misc" },
    { id: 35, question: "Is EWS reservation applicable in Lok Sabha?", options: ["No", "Yes", "Proposed", "Maybe"], correctAnswer: 0, subtopic: "Misc" },
    { id: 36, question: "Is there reservation for women in Lok Sabha?", options: ["No (Not yet implemented)", "Yes", "33%", "50%"], correctAnswer: 0, subtopic: "67.1" }, // Women's Reservation Bill passed (106th Amendment) but not yet effective/delimitations tied.
    { id: 37, question: "Article 339 deals with?", options: ["Control of Union over Admin of Scheduled Areas", "SC Commission", "Language", "Elections"], correctAnswer: 0, subtopic: "67.3" },
    { id: 38, question: "Who appoints the NCSC Chairperson?", options: ["President", "PM", "Parliament", "Social Justice Minister"], correctAnswer: 0, subtopic: "67.3" },
    { id: 39, question: "Tenure of NCSC/NCST members?", options: ["3 years", "5 years", "6 years", "Fixed by Parliament"], correctAnswer: 0, subtopic: "67.3" },
    { id: 40, question: "Report of NCSC is submitted to?", options: ["President", "Parliament", "PM", "Supreme Court"], correctAnswer: 0, subtopic: "67.3" },
    { id: 41, question: "Article 331 provided for nomination of?", options: ["2 Anglo-Indians to LS", "1 Anglo-Indian", "12 members", "2 SCs"], correctAnswer: 0, subtopic: "67.1" },
    { id: 42, question: "Article 333 provided for nomination of?", options: ["1 Anglo-Indian to State Assembly", "2 Anglo-Indians", "SC Members", "Women"], correctAnswer: 0, subtopic: "67.1" },
    { id: 43, question: "Are Anglo-Indian provisions currently active?", options: ["No", "Yes", "Suspended", "Only in Kerala"], correctAnswer: 0, subtopic: "67.1" },
    { id: 44, question: "Article 334 deals with?", options: ["Time limit for Cessation of Reservation", "Conditions", "Services", "Commission"], correctAnswer: 0, subtopic: "67.1" },
    { id: 45, question: "Nagaraj Case (2006) relates to?", options: ["Reservation in Promotion", "Creamy Layer", "Basic Structure", "Preamble"], correctAnswer: 0, subtopic: "67.2" },
    { id: 46, question: "Jarnail Singh Case (2018) relates to?", options: ["Creamy layer in SC/ST promotions", "OBC", "EWS", "Women"], correctAnswer: 0, subtopic: "67.2" },
    { id: 47, question: "Reservation in specialized posts (Scientists/Space) is?", options: ["Generally Exempted", "Mandatory", "Double", "None"], correctAnswer: 0, subtopic: "67.2" },
    { id: 48, question: "National Commission for Safai Karamcharis is?", options: ["Statutory (Non-Permanent)", "Constitutional", "NGO", "Dept"], correctAnswer: 0, subtopic: "Misc" },
    { id: 49, question: "Article 46 (DPSP) mandates promotion of interests of?", options: ["SC/ST and weaker sections", "Minorities", "Workers", "Children"], correctAnswer: 0, subtopic: "67.3" },
    { id: 50, question: "PESA Act 1996 applies to?", options: ["Fifth Schedule Areas", "Sixth Schedule", "Urban Areas", "UTs"], correctAnswer: 0, subtopic: "Misc" },
    { id: 51, question: "Which Ministry is nodal for SCs?", options: ["Ministry of Social Justice & Empowerment", "Tribal Affairs", "Home", "HRD"], correctAnswer: 0, subtopic: "Misc" },
    { id: 52, question: "Which Ministry is nodal for STs?", options: ["Ministry of Tribal Affairs", "Social Justice", "Home", "Culture"], correctAnswer: 0, subtopic: "Misc" },
    { id: 53, question: "Which Ministry is nodal for OBCs?", options: ["Ministry of Social Justice & Empowerment", "DoPT", "Education", "Rural Dev"], correctAnswer: 0, subtopic: "Misc" },
    { id: 54, question: "Does Constitution define 'Backward Classes'?", options: ["No", "Yes", "In Art 366", "In Art 340"], correctAnswer: 0, subtopic: "67.3" },
    { id: 55, question: "Power to identify SEBCs lies with?", options: ["Both Centre (Central List) and States (State List)", "Only Centre", "Only State", "President"], correctAnswer: 0, subtopic: "67.3" }, // Post 105th Amendment.
    { id: 56, question: "Can a community be ST in one state and SC in another?", options: ["Yes", "No", "Impossible", "Only OBC"], correctAnswer: 0, subtopic: "67.3" },
    { id: 57, question: "Article 335 proviso added by 82nd Amendment allows?", options: ["Relaxing qualifying marks for SC/ST in promotion", "Reservation", "Scholarships", "Leaves"], correctAnswer: 0, subtopic: "67.2" },
    { id: 58, question: "Article 15(4) was added by?", options: ["1st Amendment", "42nd", "86th", "93rd"], correctAnswer: 0, subtopic: "Misc" },
    { id: 59, question: "Article 15(5) (Reservation in Education) added by?", options: ["93rd Amendment", "1st", "92nd", "103rd"], correctAnswer: 0, subtopic: "Misc" },
    { id: 60, question: "Scope of Art 330 includes?", options: ["Scheduled Castes & Scheduled Tribes", "OBC", "Women", "Muslims"], correctAnswer: 0, subtopic: "67.1" }
];

export default DAY31_MCQS;
