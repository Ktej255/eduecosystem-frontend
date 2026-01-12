
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

export const DAY30_MCQS: MCQ[] = [
    // ==========================================
    // PUBLIC SERVICES (Ch 65) - 35 Questions
    // ==========================================
    {
        id: 1,
        question: "Part XIV of Constitution deals with?",
        options: ["Services under Union and States", "Elections", "Tribunals", "Official Language"],
        correctAnswer: 0,
        explanation: "Services under the Union and the States (Articles 308-323).",
        subtopic: "65.1"
    },
    {
        id: 2,
        question: "Article 312 empowers Parliament to create new All India Services on recommendation of?",
        options: ["Rajya Sabha", "Lok Sabha", "President", "Inter-State Council"],
        correctAnswer: 0,
        explanation: "Rajya Sabha (by resolution supported by 2/3rd members present and voting).",
        subtopic: "65.1"
    },
    {
        id: 3,
        question: "Indian Forest Service was created in?",
        options: ["1966", "1947", "1950", "1976"],
        correctAnswer: 0,
        explanation: "1966.",
        subtopic: "65.1"
    },
    {
        id: 4,
        question: "Article 310 enshrines?",
        options: ["Doctrine of Pleasure", "Doctrine of Eclipse", "Doctrine of Severability", "Doctrine of Basic Structure"],
        correctAnswer: 0,
        explanation: "Doctrine of Pleasure (Tenure of office of persons serving the Union or a State).",
        subtopic: "65.2"
    },
    {
        id: 5,
        question: "Who appoints members of All India Services?",
        options: ["President", "UPSC Chairman", "PM", "Home Minister"],
        correctAnswer: 0,
        explanation: "President.",
        subtopic: "65.1"
    },
    {
        id: 6,
        question: "Article 311 provides safeguards to?",
        options: ["Civil Servants", "Defense Personnel", "Ministers", "All Citizens"],
        correctAnswer: 0,
        explanation: "Persons employed in civil capacities under the Union or a State (Civil Servants).",
        subtopic: "65.2"
    },
    {
        id: 7,
        question: "Article 311 safeguards do not apply to?",
        options: ["Defense personnel", "IAS", "IPS", "State Civil Service"],
        correctAnswer: 0,
        explanation: "Defense personnel hold office during pleasure of President but do not get protection of Art 311.",
        subtopic: "65.2"
    },
    {
        id: 8,
        question: "Civil servant cannot be dismissed by an authority?",
        options: ["Subordinate to appointing authority", "Superior to appointing authority", "Equal to appointing authority", "Outside the department"],
        correctAnswer: 0,
        explanation: "Subordinate to that by which he was appointed.",
        subtopic: "65.2"
    },
    {
        id: 9,
        question: "Inquiry under Article 311 can be dispensed with if?",
        options: ["Convicted on criminal charge", "Suspended", "Transferred", "Promoted"],
        correctAnswer: 0,
        explanation: "Where a person is dismissed/removed/reduced in rank on ground of conduct which has led to his conviction on a criminal charge.",
        subtopic: "65.2"
    },
    {
        id: 10,
        question: "All India Services are controlled jointly by?",
        options: ["Central and State Govts", "Only Centre", "Only State", "UPSC"],
        correctAnswer: 0,
        explanation: "Joint control (Ultimate control by Centre, Immediate control by State).",
        subtopic: "65.1"
    },
    {
        id: 11,
        question: "Who is known as the 'Father of All India Services'?",
        options: ["Sardar Patel", "Nehru", "Ambedkar", "Prasad"],
        correctAnswer: 0,
        explanation: "Sardar Vallabhbhai Patel.",
        subtopic: "65.1"
    },
    {
        id: 12,
        question: "Article 309 empowers Parliament/State Legislature to regulate?",
        options: ["Recruitment and conditions of service", "Only salaries", "Only pension", "Transfers"],
        correctAnswer: 0,
        explanation: "Recruitment and conditions of service of persons appointed to public services.",
        subtopic: "65.1"
    },
    {
        id: 13,
        question: "Indian Police Service (IPS) is managed by?",
        options: ["Ministry of Home Affairs", "DoPT", "Ministry of Environment", "PMO"],
        correctAnswer: 0,
        explanation: "Ministry of Home Affairs.",
        subtopic: "65.1"
    },
    {
        id: 14,
        question: "Indian Administrative Service (IAS) is managed by?",
        options: ["Ministry of Personnel", "Home Ministry", "Finance Ministry", "PMO"],
        correctAnswer: 0,
        explanation: "Ministry of Personnel, Public Grievances and Pensions.",
        subtopic: "65.1"
    },
    {
        id: 15,
        question: "Indian Forest Service (IFoS) is managed by?",
        options: ["Ministry of Environment, Forest and Climate Change", "Agriculture Ministry", "Home Ministry", "DoPT"],
        correctAnswer: 0,
        explanation: "Ministry of Environment, Forest and Climate Change.",
        subtopic: "65.1"
    },
    {
        id: 16,
        question: "Can Article 311 protection be removed in interest of security of State?",
        options: ["Yes, if President/Governor is satisfied", "No", "Only by Court", "Only by Parliament"],
        correctAnswer: 0,
        explanation: "Yes, if President/Governor is satisfied that it is not expedient to hold such inquiry.",
        subtopic: "65.2"
    },
    { id: 17, question: "Reduction in rank covers?", options: ["Loss of seniority/post", "Suspension", "Compulsory Retirement", "Resignation"], correctAnswer: 0, subtopic: "65.2" },
    { id: 18, question: "State Civil Services are?", options: ["Exclusively under State Govt", "Joint Control", "Union Control", "None"], correctAnswer: 0, subtopic: "65.1" },
    { id: 19, question: "Which Article deals with transitional provisions for services?", options: ["313", "314", "315", "308"], correctAnswer: 0, subtopic: "65.1" }, // Art 314 was repealed. 313 Transitional.
    { id: 20, question: "Second opportunity to represent against penalty in Art 311 was removed by?", options: ["42nd Amendment", "44th", "24th", "1st"], correctAnswer: 0, subtopic: "65.2" },
    { id: 21, question: "Doctrine of Pleasure is subject to?", options: ["Fundamental Rights & Art 311", "DPSP", "Preamble", "None"], correctAnswer: 0, subtopic: "65.2" },
    { id: 22, question: "Creation of Indian Foreign Service?", options: ["Central Civil Service", "All India Service", "State Service", "Adhoc"], correctAnswer: 0, subtopic: "65.1" }, // Central Service
    { id: 23, question: "Are Ministers considered 'services' under Art 311?", options: ["No, Political", "Yes", "Partially", "If salaried"], correctAnswer: 0, subtopic: "65.2" },
    { id: 24, question: "Who recruits for Group A and B Central Services?", options: ["UPSC", "SSC", "State PSC", "Dept"], correctAnswer: 0, subtopic: "65.1" },
    { id: 25, question: "Article 312A deals with?", options: ["Power to vary or revoke service conditions", "Creation of AIS", "Protection", "Tribunals"], correctAnswer: 0, subtopic: "65.1" },
    { id: 26, question: "Constitutional validity of All India Services was upheld in?", options: ["D.S. Garewal Case", "Kesavananda Case", "Minerva Mills", "Shah Bano"], correctAnswer: 0, subtopic: "65.1" },
    { id: 27, question: "Can a State suspend an IAS officer?", options: ["Yes", "No", "Only Centre can", "Only Governor"], correctAnswer: 0, subtopic: "65.2" }, // Yes, immediate control.
    { id: 28, question: "Who is the cadre controlling authority for IAS?", options: ["DoPT", "MHA", "MoEF", "PMO"], correctAnswer: 0, subtopic: "65.1" },
    { id: 29, question: "Residuary power to create services lies with?", options: ["Parliament", "State Leg", "President", "PM"], correctAnswer: 0, subtopic: "65.1" },
    { id: 30, question: "Does Art 311 apply to temporary servants?", options: ["Yes (for dismissal)", "No", "Only Permanent", "Only Contract"], correctAnswer: 0, subtopic: "65.2" },
    { id: 31, question: "Is compulsory retirement considered punishment under Art 311?", options: ["No", "Yes", "Sometimes", "If before age"], correctAnswer: 0, subtopic: "65.2" },
    { id: 32, question: "Who makes rules for services until Parliament legislates?", options: ["President/Governor", "Any Minister", "Secretary", "Court"], correctAnswer: 0, subtopic: "65.1" },
    { id: 33, question: "Term 'Civil Post' means?", options: ["Appointment on civil side of administration", "Military", "Political", "Honorary"], correctAnswer: 0, subtopic: "65.2" },
    { id: 34, question: "Art 310 is based on?", options: ["English Common Law", "US Law", "French Law", "German Law"], correctAnswer: 0, subtopic: "65.2" },
    { id: 35, question: "Can Parliament execute AIS creation without RS resolution?", options: ["No", "Yes", "In emergency", "If LS passes"], correctAnswer: 0, subtopic: "65.1" },

    // ==========================================
    // RIGHTS & LIABILITIES (Ch 66) - 25 Questions
    // ==========================================
    {
        id: 36,
        question: "Article 300 declares that Govt of India may sue or be sued by the name of?",
        options: ["Union of India", "Bharat", "President of India", "Republic of India"],
        correctAnswer: 0,
        explanation: "Union of India.",
        subtopic: "66.1"
    },
    {
        id: 37,
        question: "State Government may sue or be sued by the name of?",
        options: ["The State of [Name]", "Governor of [Name]", "Govt of [Name]", "CM of [Name]"],
        correctAnswer: 0,
        explanation: "The State of [Name of State].",
        subtopic: "66.1"
    },
    {
        id: 38,
        question: "Liability of Govt for torts is judged by distinction between?",
        options: ["Sovereign and Non-Sovereign functions", "Civil and Criminal", "Federal and Unitary", "Public and Private"],
        correctAnswer: 0,
        explanation: "Sovereign and Non-Sovereign functions (Peninsular and Oriental Steam Navigation Company case).",
        subtopic: "66.1"
    },
    {
        id: 39,
        question: "Can the President be personally sued for official acts?",
        options: ["No (Immunity)", "Yes", "With notice", "After term"],
        correctAnswer: 0,
        explanation: "Article 361 provides personal immunity for official acts.",
        subtopic: "66.1"
    },
    {
        id: 40,
        question: "Govt liability in contracts is under which Article?",
        options: ["299", "300", "298", "301"],
        correctAnswer: 0,
        explanation: "Article 299.",
        subtopic: "66.1"
    },
    {
        id: 41,
        question: "Contracts made in exercise of executive power must be expressed to be made by?",
        options: ["President/Governor", "PM/CM", "Secretary", "Minister"],
        correctAnswer: 0,
        explanation: "President or Governor.",
        subtopic: "66.1"
    },
    {
        id: 42,
        question: "Is the President personally liable for Govt contracts?",
        options: ["No", "Yes", "If signed", "If fraudulent"],
        correctAnswer: 0,
        explanation: "No personal liability (Art 299).",
        subtopic: "66.1"
    },
    {
        id: 43,
        question: "Property of Union is exempt from State tax under Article?",
        options: ["285", "289", "287", "288"],
        correctAnswer: 0,
        explanation: "Article 285.",
        subtopic: "66.2"
    },
    {
        id: 44,
        question: "Property of State is exempt from Union tax under Article?",
        options: ["289", "285", "280", "290"],
        correctAnswer: 0,
        explanation: "Article 289.",
        subtopic: "66.2"
    },
    {
        id: 45,
        question: "Can Union tax State property used for trade/business?",
        options: ["Yes, if Parliament provides", "No", "Always", "Never"],
        correctAnswer: 0,
        explanation: "Yes, Parliament may by law provide for taxation.",
        subtopic: "66.2"
    },
    { id: 46, question: "Kasturi Lal Case (1965) relates to?", options: ["Sovereign immunity in torts", "Services", "Election", "Preamble"], correctAnswer: 0, subtopic: "66.1" },
    { id: 47, question: "Rudul Shah Case (1983) led to?", options: ["Compensation for violation of FR (Art 21)", "Service rules", "Taxation", "Trade"], correctAnswer: 0, subtopic: "66.1" },
    { id: 48, question: "Is Govt liable for negligence of its drivers (Jeep accident)?", options: ["Yes (Non-sovereign)", "No (Sovereign)", "Depends on Rank", "None"], correctAnswer: 0, subtopic: "66.1" }, // Rajasthan v. Vidhyawati.
    { id: 49, question: "Immunity of President/Governor extends to?", options: ["Official acts", "Criminal acts during term", "Both", "None"], correctAnswer: 2, subtopic: "66.1" }, // Official + No criminal proceedings during term.
    { id: 50, question: "Civil proceedings against President/Governor require notice of?", options: ["2 months", "1 month", "3 months", "6 months"], correctAnswer: 0, subtopic: "66.1" },
    { id: 51, question: "Article 298 deals with?", options: ["Power to carry on trade, etc.", "Contracts", "Suits", "Services"], correctAnswer: 0, subtopic: "66.1" },
    { id: 52, question: "Can a State Govt sue another State?", options: ["Yes (Art 131)", "No", "Only with Centre perm", "Only in HC"], correctAnswer: 0, subtopic: "66.1" },
    { id: 53, question: "Does 'Sue' include criminal prosecution against State?", options: ["Generally No", "Yes", "Article 300 only civil", "Depends"], correctAnswer: 2, subtopic: "66.1" },
    { id: 54, question: "Escheat means?", options: ["Property accruing to Govt if no owner", "Tax", "Fine", "Grant"], correctAnswer: 0, subtopic: "66.2" },
    { id: 55, question: "Bona vacantia refers to?", options: ["Property without owner found", "Good holiday", "Allowance", "Bonus"], correctAnswer: 0, subtopic: "66.2" },
    { id: 56, question: "Can corporations owned by State claim sovereign immunity?", options: ["No", "Yes", "Partially", "If notified"], correctAnswer: 0, subtopic: "66.1" },
    { id: 57, question: "Are local authorities exempt from Union tax?", options: ["No", "Yes", "Partially", "Only Panchayats"], correctAnswer: 0, subtopic: "66.2" },
    { id: 58, question: "Can Union tax electricity consumed by State Govt?", options: ["No (Art 287)", "Yes", "Sometimes", "With consent"], correctAnswer: 0, subtopic: "66.2" },
    { id: 59, question: "Doctrine of Vicarious Liability applies to Govt?", options: ["Yes (with sovereign exception)", "No", "Always", "Never"], correctAnswer: 0, subtopic: "66.1" },
    { id: 60, question: "Art 361-A protects publication of?", options: ["Parliamentary/State Leg proceedings", "Cabinet meetings", "Court records", "Secrets"], correctAnswer: 0, subtopic: "Misc" }
];

export default DAY30_MCQS;
