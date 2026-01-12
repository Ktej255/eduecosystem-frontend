
export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
    explanation?: string;
    level?: string;
    // Topic metadata for detailed analytics
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

export const DAY2_MCQS: MCQ[] = [
    // SET 1: Legislative Relations (Articles 245-255)
    {
        id: 1,
        question: "With reference to Centre-State legislative relations, consider the following statements:\n1. Parliament can make laws for the whole or any part of the territory of India.\n2. A law made by Parliament cannot be invalidated on the ground that it has extra-territorial operation.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Article 245 provides that Parliament may make laws for the whole or any part of India. Article 245(2) states that no law made by Parliament shall be deemed to be invalid on the ground that it would have extra-territorial operation.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 2,
        question: "Which of the following subjects is NOT included in the Union List?",
        options: ["Defence", "Banking", "Public Health and Sanitation", "Foreign Affairs"],
        correctAnswer: 2,
        explanation: "Public Health and Sanitation is a State List subject (Entry 6). Defence, Banking, and Foreign Affairs are Union List subjects.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 3,
        question: "Under Article 249 of the Constitution, a resolution empowering Parliament to legislate on a State List subject must be passed by:",
        options: [
            "Simple majority of Lok Sabha",
            "Special majority of Lok Sabha",
            "Simple majority of Rajya Sabha",
            "Two-thirds of members present and voting in Rajya Sabha"
        ],
        correctAnswer: 3,
        explanation: "Article 249 requires a resolution supported by not less than two-thirds of the members present and voting in the Rajya Sabha (Council of States).",
        level: "Moderate"
    },
    {
        id: 4,
        question: "Which Article of the Constitution deals with the residuary powers of legislation?",
        options: ["Article 246", "Article 248", "Article 250", "Article 254"],
        correctAnswer: 1,
        explanation: "Article 248 vests the residuary powers of legislation (subjects not enumerated in any of the three lists) exclusively in the Parliament.",
        level: "Easy"
    },
    {
        id: 5,
        question: "In case of a conflict between the Union law and the State law on a subject in the Concurrent List, which law prevails?",
        options: [
            "The State law always prevails",
            "The Union law prevails, unless the State law has received Presidential assent",
            "The Supreme Court decides which law prevails",
            "Both laws cease to operate"
        ],
        correctAnswer: 1,
        explanation: "Under Article 254, the Union law prevails. However, if the State law has been reserved for the consideration of the President and has received his assent, the State law prevails in that State.",
        level: "Moderate"
    },
    {
        id: 6,
        question: "Parliament can legislate on State List subjects during a National Emergency under which Article?",
        options: ["Article 249", "Article 250", "Article 252", "Article 356"],
        correctAnswer: 1,
        explanation: "Article 250 empowers Parliament to legislate with respect to any matter in the State List if a Proclamation of Emergency is in operation.",
        level: "Easy"
    },
    {
        id: 7,
        question: "When the legislatures of two or more states pass resolutions requesting Parliament to enact laws on a matter in the State List, then:",
        options: [
            "The law enacted applies to all states in India",
            "The law enacted applies only to those states which passed the resolutions",
            "The law cannot be amended or repealed by the Parliament",
            "The State legislature can amend the law subsequently"
        ],
        correctAnswer: 1,
        explanation: "Under Article 252, such a law applies only to those states. Other states can adopt it later. Such a law can be amended or repealed only by Parliament, not by the State legislatures.",
        level: "Moderate"
    },
    {
        id: 8,
        question: "The power to make laws for implementing international treaties, agreements, or conventions belongs to:",
        options: ["State Legislature", "Parliament", "President", "Ministry of External Affairs"],
        correctAnswer: 1,
        explanation: "Article 253 empowers Parliament to make any law for the whole or any part of the territory of India for implementing any treaty, agreement or convention.",
        level: "Easy"
    },
    {
        id: 9,
        question: "Which of the following changes was made by the 42nd Amendment Act regarding the division of powers?",
        options: [
            "Transferred 'Education' from Union List to State List",
            "Transferred 'Education' from State List to Concurrent List",
            "Transferred 'Police' from State List to Concurrent List",
            "Transferred 'Agriculture' from State List to Union List"
        ],
        correctAnswer: 1,
        explanation: "The 42nd Amendment Act of 1976 transferred five subjects from the State List to the Concurrent List: Education, Forests, Weights & Measures, Protection of Wild Animals/Birds, and Administration of Justice.",
        level: "Moderate"
    },
    {
        id: 10,
        question: "The doctrine of 'Pith and Substance' is used to resolve disputes regarding:",
        options: [
            "Fundamental Rights",
            "Centre-State Legislative Competence",
            "Appointment of Judges",
            "Emergency Provisions"
        ],
        correctAnswer: 1,
        explanation: "The doctrine of 'Pith and Substance' determines the true nature and character of a legislation to decide which list it falls under, especially when there is an apparent encroachment.",
        level: "Moderate"
    },

    // SET 2: Administrative Relations (Articles 256-263)
    {
        id: 11,
        question: "The executive power of the Union extends to giving directions to the State in which of the following matters?\n1. Construction and maintenance of means of communication of national importance.\n2. Measures for the protection of railways within the state.\n3. Implementation of schemes for the welfare of Scheduled Tribes.",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswer: 3,
        explanation: "Articles 257 and 339(2) empower the Centre to give directions on all these matters.",
        level: "Moderate"
    },
    {
        id: 12,
        question: "Article 263 of the Constitution deals with the establishment of:",
        options: [
            "Finance Commission",
            "Inter-State Council",
            "Zonal Council",
            "NITI Aayog"
        ],
        correctAnswer: 1,
        explanation: "Article 263 provides for the establishment of an Inter-State Council by the President.",
        level: "Easy"
    },
    {
        id: 13,
        question: "Who among the following imposes the 'President's Rule' in a state on the ground of failure to comply with Centre's directions?",
        options: ["Governor", "Prime Minister", "President", "Chief Justice of India"],
        correctAnswer: 2,
        explanation: "Under Article 365, if a state fails to comply with any direction given by the Centre, the President can hold that a situation has arisen where the state government cannot be carried on in accordance with the Constitution.",
        level: "Easy"
    },
    {
        id: 14,
        question: "Which of the following is NOT a constitutional provision for Centre-State administrative cooperation?",
        options: [
            "Delegation of Union functions to State functions",
            "All-India Services",
            "Grants-in-aid",
            "Zonal Councils"
        ],
        correctAnswer: 3,
        explanation: "Zonal Councils are statutory bodies established under the States Reorganisation Act, 1956. They are not constitutional bodies.",
        level: "Moderate"
    },
    {
        id: 15,
        question: "The adjudication of disputes relating to waters of inter-state rivers or river valleys is dealt with under:",
        options: ["Article 262", "Article 263", "Article 280", "Article 275"],
        correctAnswer: 0,
        explanation: "Article 262 deals with the adjudication of disputes relating to waters of inter-state rivers or river valleys. Parliament provides for this by law.",
        level: "Easy"
    },
    {
        id: 16,
        question: "Consider the following statements about All-India Services:\n1. They are recruited by the Centre.\n2. They are trained by the Centre.\n3. They serve both the Centre and the States.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswer: 3,
        explanation: "All-India Services (IAS, IPS, IFoS) are recruited and trained by the Centre but serve both the Centre and the States. They are controlled jointly.",
        level: "Easy"
    },
    {
        id: 17,
        question: "The 'Full Faith and Credit' clause (Article 261) applies to:",
        options: [
            "Only public acts",
            "Only judicial proceedings",
            "Public acts, records and judicial proceedings",
            "Only legislative acts"
        ],
        correctAnswer: 2,
        explanation: "Article 261 states that full faith and credit shall be given throughout the territory of India to public acts, records and judicial proceedings of the Union and of every State.",
        level: "Moderate"
    },
    {
        id: 18,
        question: "With the consent of the State Government, the President can entrust to that Government any function in relation to any matter to which the executive power of the Union extends. This is provided under:",
        options: ["Article 258", "Article 258A", "Article 260", "Article 263"],
        correctAnswer: 0,
        explanation: "Article 258(1) allows the President, with the consent of the State Government, to entrust Union executive functions to the State.",
        level: "Tough"
    },
    {
        id: 19,
        question: "Who is the Chairman of the Inter-State Council?",
        options: ["President", "Home Minister", "Prime Minister", "Chief Justice of India"],
        correctAnswer: 2,
        explanation: "The Prime Minister is the Chairman of the Inter-State Council.",
        level: "Easy"
    },
    {
        id: 20,
        question: "The Constitution of India empowers the Parliament to adjudicate inter-state water disputes. In exercise of this power, Parliament has enacted:",
        options: [
            "River Boards Act, 1956",
            "Inter-State Water Disputes Act, 1956",
            "Both A and B",
            "Neither A nor B"
        ],
        correctAnswer: 2,
        explanation: "Parliament enacted both the River Boards Act (1956) and the Inter-State Water Disputes Act (1956) under Article 262.",
        level: "Moderate"
    },

    // SET 3: Financial Relations (Articles 268-293)
    {
        id: 21,
        question: "Which Constitutional Amendment introduced the Goods and Services Tax (GST)?",
        options: ["100th Amendment", "101st Amendment", "102nd Amendment", "103rd Amendment"],
        correctAnswer: 1,
        explanation: "The 101st Constitution Amendment Act, 2016 introduced GST in India.",
        level: "Easy"
    },
    {
        id: 22,
        question: "Article 280 of the Constitution provides for the appointment of a:",
        options: ["Planning Commission", "Finance Commission", "GST Council", "NITI Aayog"],
        correctAnswer: 1,
        explanation: "Article 280 provides for the constitution of a Finance Commission by the President every five years.",
        level: "Easy"
    },
    {
        id: 23,
        question: "Grants-in-aid to the states from the Consolidated Fund of India under Article 275 are known as:",
        options: ["Statutory Grants", "Discretionary Grants", "Plan Grants", "Special Grants"],
        correctAnswer: 0,
        explanation: "Article 275 provides for 'Statutory Grants' to states in need of assistance, on the recommendation of the Finance Commission.",
        level: "Moderate"
    },
    {
        id: 24,
        question: "Which Article deals with the exemption of property of the Union from State taxation?",
        options: ["Article 285", "Article 287", "Article 289", "Article 292"],
        correctAnswer: 0,
        explanation: "Article 285 exempts the property of the Union from all taxes imposed by a State or any authority within a State.",
        level: "Moderate"
    },
    {
        id: 25,
        question: "Who is the Chairman of the GST Council?",
        options: ["Prime Minister", "Union Finance Minister", "RBI Governor", "President"],
        correctAnswer: 1,
        explanation: "The Union Finance Minister is the Chairman of the GST Council (Article 279A).",
        level: "Easy"
    },
    {
        id: 26,
        question: "The power of a State to borrow money is limited to:",
        options: [
            "Borrowing only from the Central Government",
            "Borrowing within the territory of India",
            "Borrowing from foreign countries only",
            "Borrowing from RBI only"
        ],
        correctAnswer: 1,
        explanation: "Under Article 293, the executive power of a State extends to borrowing within the territory of India upon the security of the Consolidated Fund of the State.",
        level: "Moderate"
    },
    {
        id: 27,
        question: "Which of the following taxes are levied and collected by the Union but assigned to the States?",
        options: [
            "Stamp duties",
            "Duties in respect of succession to property other than agricultural land",
            "Taxes on railway fares and freights",
            "Taxes on newspapers and advertisements"
        ],
        correctAnswer: 3,
        explanation: "Under Article 269 (before GST) and current provisions, taxes on sale/purchase of goods in inter-state trade and taxes on consignment of goods are levied/collected by Union but assigned to States. (Note: Many older tax categories subsumed under GST).",
        level: "Tough"
    },
    {
        id: 28,
        question: "Which Article provides for 'Discretionary Grants' by the Union or a State for any public purpose?",
        options: ["Article 275", "Article 282", "Article 293", "Article 266"],
        correctAnswer: 1,
        explanation: "Article 282 empowers the Union or a State to make any grants for any public purpose, even if it is not within their respective legislative competence. These are discretionary.",
        level: "Moderate"
    },
    {
        id: 29,
        question: "The net proceeds of any tax or duty are ascertained and certified by:",
        options: ["Finance Minister", "Prime Minister", "Comptroller and Auditor-General of India", "President"],
        correctAnswer: 2,
        explanation: "Article 279 states that the net proceeds are ascertained and certified by the CAG, whose certificate is final.",
        level: "Moderate"
    },
    {
        id: 30,
        question: "The recommendation of the Finance Commission regarding the distribution of taxes is:",
        options: [
            "Binding on the Government",
            "Advisory in nature",
            "Subject to approval by Supreme Court",
            "Final and cannot be rejected"
        ],
        correctAnswer: 1,
        explanation: "The recommendations of the Finance Commission are advisory in nature and not binding on the government, although they are generally accepted by convention.",
        level: "Moderate"
    },

    // SET 4: Commissions & Committees (Sarkaria, Punchhi, Rajamannar, etc.)
    {
        id: 31,
        question: "The Sarkaria Commission was appointed in 1983 to review:",
        options: [
            "Centre-State Relations",
            "Electoral Reforms",
            "Judicial Reforms",
            "Police Reforms"
        ],
        correctAnswer: 0,
        explanation: "The Sarkaria Commission was appointed to examine and review the working of the existing arrangements between the Union and States.",
        level: "Easy"
    },
    {
        id: 32,
        question: "Which of the following was NOT a recommendation of the Sarkaria Commission?",
        options: [
            "Establishment of Inter-State Council",
            "Appointment of Governor in consultation with CM",
            "Abolition of the post of Governor",
            "Reasons for Governors removal should be laid before the Parliament"
        ],
        correctAnswer: 2,
        explanation: "The Sarkaria Commission explicitly rejected the demand for the abolition of the post of Governor. It recommended reforms, not abolition.",
        level: "Moderate"
    },
    {
        id: 33,
        question: "The Punchhi Commission on Centre-State Relations was submitted in which year?",
        options: ["2000", "2007", "2010", "2015"],
        correctAnswer: 2,
        explanation: "The Punchhi Commission was constituted in 2007 and submitted its report in 2010.",
        level: "Moderate"
    },
    {
        id: 34,
        question: "Which state government appointed the Rajamannar Committee (1969) to study Centre-State relations?",
        options: ["Kerala", "West Bengal", "Tamil Nadu", "Andhra Pradesh"],
        correctAnswer: 2,
        explanation: "The DMK Government of Tamil Nadu appointed the Rajamannar Committee in 1969.",
        level: "Easy"
    },
    {
        id: 35,
        question: "The Anandpur Sahib Resolution (1973) demanded:",
        options: [
            "A separate nation meant for Sikhs",
            "Greater autonomy for the States, retaining only Defence, Foreign Affairs, Communications and Currency with the Centre",
            "Creation of new States based on language",
            "Implementation of Uniform Civil Code"
        ],
        correctAnswer: 1,
        explanation: "The Anandpur Sahib Resolution demanded that the Centre's jurisdiction should be restricted only to Defence, Foreign Affairs, Communications, and Currency.",
        level: "Moderate"
    },
    {
        id: 36,
        question: "The Punchhi Commission recommended that the Governor should have a fixed tenure of:",
        options: ["3 years", "5 years", "6 years", "No fixed tenure"],
        correctAnswer: 1,
        explanation: "The Punchhi Commission recommended a fixed tenure of 5 years for the Governor and that they should not be removed at the pleasure of the President.",
        level: "Easy"
    },
    {
        id: 37,
        question: "Which Commission/Committee observed that 'Federalism is more a functional arrangement for cooperative action, than a static institutional concept'?",
        options: ["Sarkaria Commission", "National Commission to Review the Working of the Constitution", "Administrative Reforms Commission", "Rajamannar Committee"],
        correctAnswer: 0,
        explanation: "This observation was made by the Sarkaria Commission.",
        level: "Tough"
    },
    {
        id: 38,
        question: "The 1st Administrative Reforms Commission (1966) was initially chaired by:",
        options: ["Morarji Desai", "K. Hanumanthaiya", "M.C. Setalvad", "G.S. Pathak"],
        correctAnswer: 0,
        explanation: "The 1st ARC was constituted in 1966 under the chairmanship of Morarji Desai. Later, K. Hanumanthaiya became chairman when Desai became Deputy PM.",
        level: "Moderate"
    },
    {
        id: 39,
        question: "The West Bengal Memorandum (1977) suggested that:",
        options: [
            "The word 'Union' should be replaced by 'Federal'",
            "The office of Governor should be strengthened",
            "Article 356 should be used more frequently",
            "Residuary powers should be with the Centre"
        ],
        correctAnswer: 0,
        explanation: "The West Bengal Memorandum suggested that the word 'Union' in the Constitution should be replaced by the word 'Federal', and residuary powers should lie with the States.",
        level: "Moderate"
    },
    {
        id: 40,
        question: "Which of the following is NOT an extra-constitutional device for Centre-State cooperation?",
        options: ["NITI Aayog", "National Development Council", "Zonal Councils", "Inter-State Council"],
        correctAnswer: 3,
        explanation: "The Inter-State Council is a Constitutional body (Article 263). The others are extra-constitutional (Statutory or Executive resolution).",
        level: "Moderate"
    },

    // SET 5: Mix & Applied (Recent Trends, Case Laws)
    {
        id: 41,
        question: "In which case did the Supreme Court declare that 'Federalism is a part of the basic structure of the Constitution'?",
        options: ["Kesavananda Bharati Case", "S.R. Bommai Case", "Minerva Mills Case", "Golaknath Case"],
        correctAnswer: 1,
        explanation: "In the S.R. Bommai case (1994), the Supreme Court declared that Federalism is a basic feature of the Constitution.",
        level: "Easy"
    },
    {
        id: 42,
        question: "Under the 7th Schedule, 'Education' falls under which list?",
        options: ["Union List", "State List", "Concurrent List", "Residuary List"],
        correctAnswer: 2,
        explanation: "Education was transferred to the Concurrent List by the 42nd Amendment Act of 1976.",
        level: "Easy"
    },
    {
        id: 43,
        question: "Which of the following creates a 'Unitary Bias' in the Indian Constitution?",
        options: [
            "Rigidity of Constitution",
            "Division of Powers",
            "Appointment of Governor by Centre",
            "Bicameralism"
        ],
        correctAnswer: 2,
        explanation: "The appointment of the Governor by the Centre, who acts as an agent of the Centre, is a strong unitary feature.",
        level: "Easy"
    },
    {
        id: 44,
        question: "Which Article empowers the Rajya Sabha to create a new All-India Service?",
        options: ["Article 312", "Article 315", "Article 320", "Article 324"],
        correctAnswer: 0,
        explanation: "Article 312 empowers Parliament to create new All-India Services if the Rajya Sabha passes a resolution to that effect.",
        level: "Moderate"
    },
    {
        id: 45,
        question: "The power to decide whether a bill is a Money Bill in the State Legislature rests with:",
        options: ["Chief Minister", "Governor", "Speaker of Legislative Assembly", "High Court"],
        correctAnswer: 2,
        explanation: "The Speaker of the Legislative Assembly has the final power to decide whether a bill is a Money Bill.",
        level: "Easy"
    },
    {
        id: 46,
        question: "If the President reserves a State Bill for consideration, does he have a time limit to give assent?",
        options: ["Yes, 6 months", "Yes, 3 months", "No time limit", "Yes, 1 year"],
        correctAnswer: 2,
        explanation: "The Constitution does not prescribe any time limit for the President to give assent to a state bill reserved for his consideration (Pocket Veto).",
        level: "Moderate"
    },
    {
        id: 47,
        question: "The 'Mutual Delegation of Functions' between Centre and State can happen:",
        options: [
            "Only from Centre to State",
            "Only from State to Centre",
            "Either way",
            "Neither way"
        ],
        correctAnswer: 2,
        explanation: "The Constitution allows for inter-governmental delegation of executive functions from Centre to State (Art 258) and from State to Centre (Art 258A).",
        level: "Easy"
    },
    {
        id: 48,
        question: "Taxes on Agricultural Income are listed in the:",
        options: ["Union List", "State List", "Concurrent List", "Exempted List"],
        correctAnswer: 1,
        explanation: "Taxes on agricultural income is a subject in the State List (Entry 46). Central Income Tax does not apply to agricultural income.",
        level: "Moderate"
    },
    {
        id: 49,
        question: "The report of the CAG relating to the accounts of a State is submitted to:",
        options: ["The President", "The Governor", "The Parliament", "The State Legislature"],
        correctAnswer: 1,
        explanation: "Under Article 151, the CAG submits the audit reports relating to the accounts of a State to the Governor, who lays them before the State Legislature.",
        level: "Moderate"
    },
    {
        id: 50,
        question: "Which of the following is an example of 'Cooperative Federalism'?",
        options: [
            "Article 356",
            "GST Council",
            "Appointment of Governor",
            "Vet power of President on State bills"
        ],
        correctAnswer: 1,
        explanation: "The GST Council (Article 279A) is a prime example of cooperative federalism where Centre and States jointly decide on tax matters.",
        level: "Easy"
    },
    {
        id: 51,
        question: "Which of the following subjects is in the Concurrent List?",
        options: ["Fisheries", "Agriculture", "Forests", "Banking"],
        correctAnswer: 2,
        explanation: "Forests was transferred to the Concurrent List by the 42nd Amendment. Fisheries and Agriculture are State subjects. Banking is a Union subject.",
        level: "Moderate"
    },
    {
        id: 52,
        question: "The President can establish a Joint Public Service Commission (JPSC) for two or more states on the request of:",
        options: [
            "Governors of concerned states",
            "Chief Ministers of concerned states",
            "State Legislatures of concerned states",
            "Parliament"
        ],
        correctAnswer: 2,
        explanation: "Actually, a JPSC can be created by Parliament by law on the request of the State Legislatures of the concerned states. The question phrasing is tricky; Parliament creates it, but on request of Legislatures.",
        level: "Tough",
        topic: "Note: The option C is close, but technically Parliament creates it. Re-reading M. Lax: 'Parliament can provide for the establishment of a JPSC... on the request of the state legislatures concerned.' So correct answer in context of 'request' is Legislatures."
    },
    {
        id: 52, // Correction
        question: "A Joint Public Service Commission (JPSC) for two or more states can be created by:",
        options: [
            "President",
            "Parliament",
            "UPSC",
            "Agreement between States"
        ],
        correctAnswer: 1,
        explanation: "Parliament can provide for the establishment of a JPSC for two or more states on the request of the state legislatures concerned.",
        level: "Moderate"
    },
    {
        id: 53,
        question: "Under Article 260, the Government of India may undertake any legislative, executive or judicial functions in:",
        options: [
            "Jammu and Kashmir",
            "Any territory outside India",
            "Union Territories only",
            "Tribal Areas only"
        ],
        correctAnswer: 1,
        explanation: "Article 260 empowers the Government of India to undertake any legislative, executive or judicial functions in relation to any territory outside India by agreement with the government of that territory.",
        level: "Tough"
    },
    {
        id: 54,
        question: "The salary and allowances of the judges of High Courts are charged on:",
        options: [
            "Consolidated Fund of India",
            "Consolidated Fund of the State",
            "Contingency Fund of India",
            "Public Account of India"
        ],
        correctAnswer: 1,
        explanation: "The salaries and allowances are charged on the Consolidated Fund of the State, BUT their pension is charged on the Consolidated Fund of India.",
        level: "Moderate"
    },
    {
        id: 55,
        question: "Who can initiate the process of changing the name or boundary of a state?",
        options: [
            "State Legislature",
            "Parliament (on recommendation of President)",
            "Governor",
            "NITI Aayog"
        ],
        correctAnswer: 1,
        explanation: "Article 3 empowers Parliament to form new states and alter areas, boundaries or names of existing states. The bill can be introduced only on the recommendation of the President.",
        level: "Easy"
    },
    {
        id: 56,
        question: "Which of the following is NOT true regarding the recommendations of the Punchhi Commission?",
        options: [
            "It recommended impeachment of Governor",
            "It supported the 'Pocket Veto' of the President for indefinite period",
            "It recommended that Governor should have fixed tenure",
            "It recommended that convention of appointing Governor from outside state should be followed"
        ],
        correctAnswer: 1,
        explanation: "The Punchhi Commission actually recommended that a time limit of 6 months should be prescribed for the President to decide on reserved bills, opposing indefinite Pocket Veto.",
        level: "Tough"
    },
    {
        id: 57,
        question: "Corporation Tax is:",
        options: [
            "Levied by Centre and shared with States",
            "Levied by Centre and appropriated by Centre",
            "Levied by State and appropriated by State",
            "Levied by Centre but collected by State"
        ],
        correctAnswer: 0,
        explanation: "Before the 80th Amendment (2000), Corporation Tax was not consistently shared. Now, all central taxes (except cesses/surcharges) are shared with states under the divisible pool (Article 270).",
        level: "Moderate"
    },
    {
        id: 58,
        question: "The subject 'Local Government' is mentioned in:",
        options: ["Union List", "State List", "Concurrent List", "Not mentioned"],
        correctAnswer: 1,
        explanation: "Local Government is a subject in the State List (Entry 5).",
        level: "Easy"
    },
    {
        id: 59,
        question: "Who settles disputes between the Centre and States regarding the distribution of powers?",
        options: ["President", "Parliament", "Supreme Court", "Finance Commission"],
        correctAnswer: 2,
        explanation: "The Supreme Court has original and exclusive jurisdiction in disputes between the Centre and States (Article 131).",
        level: "Easy"
    },
    {
        id: 60,
        question: "Which of the following articles deals with 'Grants in aid' from the Union to certain States?",
        options: ["Article 275", "Article 265", "Article 280", "Article 300A"],
        correctAnswer: 0,
        explanation: "Article 275 deals with Grants-in-aid from the Union to certain States.",
        level: "Easy"
    }
];

export default DAY2_MCQS;
