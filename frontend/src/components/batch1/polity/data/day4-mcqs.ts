
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

export const DAY4_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 18: PRESIDENT (40 Questions)
    // ==========================================

    {
        id: 1,
        question: "Who among the following is NOT part of the electoral college for the election of the President?",
        options: ["Elected members of Lok Sabha", "Elected members of Rajya Sabha", "Nominated members of Rajya Sabha", "Elected members of State Legislative Assemblies"],
        correctAnswer: 2,
        explanation: "Nominated members of both Houses of Parliament do not participate in the election of the President.",
        subtopic: "18.1"
    },
    {
        id: 2,
        question: "The value of the vote of an MLA in the Presidential election depends on:",
        options: ["Population of the State", "Number of MLAs in the State", "Area of the State", "Number of MPs from the State"],
        correctAnswer: 0,
        explanation: "Value of vote = Total Population of State / (Total Elected MLAs * 1000). So it depends on the population of the state.",
        subtopic: "18.1"
    },
    {
        id: 3,
        question: "The President submits his resignation to:",
        options: ["Chief Justice of India", "Prime Minister", "Vice-President", "Speaker of Lok Sabha"],
        correctAnswer: 2,
        explanation: "The President addresses his resignation letter to the Vice-President.",
        subtopic: "18.2"
    },
    {
        id: 4,
        question: "Grounds for impeachment of the President is:",
        options: ["Proven misbehavior", "Incapacity", "Violation of the Constitution", "Corruption"],
        correctAnswer: 2,
        explanation: "Article 61 mentions 'Violation of the Constitution' as the only ground for impeachment.",
        subtopic: "18.2"
    },
    {
        id: 5,
        question: "An ordinance promulgated by the President must be approved by Parliament within:",
        options: ["6 months", "6 weeks from reassembly", "3 months", "1 year"],
        correctAnswer: 1,
        explanation: "It must be approved within 6 weeks of the reassembly of Parliament. Otherwise, it ceases to operate.",
        subtopic: "18.5"
    },
    {
        id: 6,
        question: "Which power of the President is not a 'discretionary power'?",
        options: ["Appointment of PM when no party has clear majority", "Dismissal of Council of Ministers when it loses confidence", "Returning a bill for reconsideration", "Pardoning power under Art 72"],
        correctAnswer: 3,
        explanation: "Pardoning power is exercised on the advice of the Council of Ministers (Home Ministry). It is not discretionary.",
        subtopic: "18.6"
    },
    {
        id: 7,
        question: "Who administers the oath of office to the President?",
        options: ["Outgoing President", "Vice-President", "Chief Justice of India", "Speaker of Lok Sabha"],
        correctAnswer: 2,
        explanation: "The Chief Justice of India (or senior-most judge in his absence) administers the oath.",
        subtopic: "18.1"
    },
    {
        id: 8,
        question: "The power of the President to consult the Supreme Court is given under:",
        options: ["Article 142", "Article 143", "Article 124", "Article 226"],
        correctAnswer: 1,
        explanation: "Article 143 empowers the President to seek the opinion of the Supreme Court on any question of law or fact.",
        subtopic: "18.3"
    },
    {
        id: 9,
        question: "Money Bills can be introduced in the Parliament only with the prior recommendation of:",
        options: ["Prime Minister", "Finance Minister", "President", "Speaker"],
        correctAnswer: 2,
        explanation: "Money bills require the prior recommendation of the President.",
        subtopic: "18.3"
    },
    {
        id: 10,
        question: "The President can return a Money Bill for reconsideration.",
        options: ["True", "False", "Only once", "Only if Rajya Sabha rejects it"],
        correctAnswer: 1,
        explanation: "The President CANNOT return a Money Bill. He can either give assent or withhold it, but usually gives assent as it is introduced with his approval.",
        subtopic: "18.4"
    },
    {
        id: 11,
        question: "Which Veto power allows the President to keep a bill pending indefinitely?",
        options: ["Absolute Veto", "Qualified Veto", "Suspensive Veto", "Pocket Veto"],
        correctAnswer: 3,
        explanation: "Pocket Veto allows the President to neither ratify nor return the bill, effectively killing it by inaction.",
        subtopic: "18.4"
    },
    {
        id: 12,
        question: "The only President to exercise Pocket Veto was:",
        options: ["V.V. Giri", "Zail Singh", "A.P.J. Abdul Kalam", "K.R. Narayanan"],
        correctAnswer: 1,
        explanation: "Presient Zail Singh exercised Pocket Veto in the Indian Post Office (Amendment) Bill, 1986.",
        subtopic: "18.4"
    },
    {
        id: 13,
        question: "The 42nd Amendment made it obligatory for the President to act on the advice of:",
        options: ["Prime Minister", "Council of Ministers", "Vice President", "Parliament"],
        correctAnswer: 1,
        explanation: "It made the advice of the Council of Ministers binding on the President.",
        subtopic: "18.3"
    },
    {
        id: 14,
        question: "Who decides disputes regarding the election of the President?",
        options: ["Election Commission", "Parliament", "Supreme Court", "Vice-President"],
        correctAnswer: 2,
        explanation: "Article 71: All doubts/disputes in connection with election of President/VP are decided by the Supreme Court.",
        subtopic: "18.1"
    },
    {
        id: 15,
        question: "Which Article deals with the impeachment of the President?",
        options: ["Article 52", "Article 61", "Article 72", "Article 123"],
        correctAnswer: 1,
        explanation: "Article 61 describes the procedure for impeachment of the President.",
        subtopic: "18.2"
    },
    {
        id: 16,
        question: "The President nominates 12 members to Rajya Sabha from fields of:",
        options: ["Science, Art, Literature, Social Service", "Sports, Art, Science, Politics", "Literature, Science, Art, Cooperative movement", "Economy, Science, Art, Social Service"],
        correctAnswer: 0,
        explanation: "Literature, Science, Art, and Social Service (LASS). Note: Sports is NOT mentioned explicitly (Sachin was nominated under Art/Social Service interpretation). Cooperative movement is for Governor (Legislative Council), not President.",
        subtopic: "18.3"
    },
    {
        id: 17,
        question: "Can the President grant pardon in case of Court Martial?",
        options: ["Yes", "No", "Only if recommended by Army Chief", "Only in war time"],
        correctAnswer: 0,
        explanation: "Yes, Article 72 empowers the President to grant pardon in all cases where the punishment is by a Court Martial. Governor cannot do this.",
        subtopic: "18.6"
    },
    {
        id: 18,
        question: "To be eligible for election as President, a person must be qualified for election as a member of:",
        options: ["Rajya Sabha", "Lok Sabha", "State Assembly", "Any House"],
        correctAnswer: 1,
        explanation: "He must be qualified for election as a member of the House of the People (Lok Sabha).",
        subtopic: "18.1"
    },
    {
        id: 19,
        question: "The maximum age limit for the post of President is:",
        options: ["65 years", "70 years", "75 years", "No limit"],
        correctAnswer: 3,
        explanation: "There is no upper age limit for the office of President. Minimum age is 35.",
        subtopic: "18.1"
    },
    {
        id: 20,
        question: "Nominated members of Parliament can participate in:",
        options: ["Election of President", "Impeachment of President", "Both", "Neither"],
        correctAnswer: 1,
        explanation: "They CANNOT participate in election, but they CAN participate in impeachment.",
        subtopic: "18.2"
    },
    {
        id: 21,
        question: "The President sends his resignation to VP. Who does the VP report this to immediately?",
        options: ["Chief Justice", "Prime Minister", "Speaker of Lok Sabha", "Election Commission"],
        correctAnswer: 2,
        explanation: "The Vice-President must immediately communicate the resignation to the Speaker of the Lok Sabha.",
        subtopic: "18.2"
    },
    {
        id: 22,
        question: "Which of the following appointments is NOT made by the President?",
        options: ["Attorney General", "Comptroller and Auditor General", "Speaker of Lok Sabha", "Chief Election Commissioner"],
        correctAnswer: 2,
        explanation: "The Speaker of Lok Sabha is elected by the members of Lok Sabha, not appointed by the President.",
        subtopic: "18.3"
    },
    {
        id: 23,
        question: "A bill passed by State Legislature can be reserved for President by:",
        options: ["CM", "Speaker of Assembly", "Governor", "High Court"],
        correctAnswer: 2,
        explanation: "The Governor can reserve a bill for the consideration of the President (Article 200).",
        subtopic: "18.3"
    },
    {
        id: 24,
        question: "How many times can a person be re-elected as President of India?",
        options: ["Once", "Twice", "Any number of times", "Not allowed"],
        correctAnswer: 2,
        explanation: "Article 57 provides that a person who holds/held office is eligible for re-election. No limit is specified.",
        subtopic: "18.1"
    },
    {
        id: 25,
        question: "The interval between two sessions of Parliament cannot exceed:",
        options: ["3 months", "4 months", "6 months", "9 months"],
        correctAnswer: 2,
        explanation: "Article 85 mandates that 6 months shall not intervene between its last sitting in one session and first sitting in next.",
        subtopic: "18.3"
    },
    {
        id: 26,
        question: "Which President was elected unopposed?",
        options: ["Rajendra Prasad", "Neelam Sanjiva Reddy", "Giani Zail Singh", "Pranab Mukherjee"],
        correctAnswer: 1,
        explanation: "Neelam Sanjiva Reddy was elected unopposed in 1977.",
        subtopic: "18.1"
    },
    {
        id: 27,
        question: "The executive actions of the Government of India are formally taken in the name of:",
        options: ["Prime Minister", "Cabinet Secretary", "President", "Home Minister"],
        correctAnswer: 2,
        explanation: "Article 77 states all executive action of GOI shall be expressed to be taken in the name of the President.",
        subtopic: "18.3"
    },
    {
        id: 28,
        question: "Before 1971, the population of which census was used for Presidential election value of votes?",
        options: ["1951", "1961", "1971 is fixed", "Last preceding census"],
        correctAnswer: 3,
        explanation: "It was the last preceding census. Since 42nd Amendment (1976), it was frozen to 1971 Census to encourage family planning. Extended till 2026 by 84th Amendment.",
        subtopic: "18.1"
    },
    {
        id: 29,
        question: "Impeachment is a:",
        options: ["Judicial procedure", "Quasi-judicial procedure", "Legislative procedure", "Executive procedure"],
        correctAnswer: 1,
        explanation: "It is a quasi-judicial procedure in the Parliament.",
        subtopic: "18.2"
    },
    {
        id: 30,
        question: "Who fixes the emoluments of the President?",
        options: ["Finance Minister", "Parliament", "Supreme Court", "Public"],
        correctAnswer: 1,
        explanation: "Parliament determines the valid emoluments, allowances and privileges by law.",
        subtopic: "18.2"
    },
    {
        id: 31,
        question: "Does the President have 'Suspensive Veto' over Constitutional Amendment Bills?",
        options: ["Yes", "No", "Only if ratified by states", "Only with SC permission"],
        correctAnswer: 1,
        explanation: "No. The 24th Amendment Act, 1971 made it obligatory for the President to give his assent to a Constitutional Amendment Bill.",
        subtopic: "18.4"
    },
    {
        id: 32,
        question: "Who causes the Union Budget to be laid before the Parliament?",
        options: ["Finance Minister", "Prime Minister", "President", "Speaker"],
        correctAnswer: 2,
        explanation: "Article 112: The President shall cause to be laid before both Houses the Annual Financial Statement.",
        subtopic: "18.3"
    },
    {
        id: 33,
        question: "Residuary powers in the US are with States. In India they are with Centre. This reflects:",
        options: ["US influence", "Canadian influence", "British influence", "French influence"],
        correctAnswer: 1,
        explanation: "The strong Centre with residuary powers is borrowed from the Canadian Constitution.",
        subtopic: "18.0"
    },
    {
        id: 34,
        question: "The President declares National Emergency on written recommendation of Cabinet. This provision was added by:",
        options: ["42nd Amendment", "44th Amendment", "86th Amendment", "None"],
        correctAnswer: 1,
        explanation: "44th Amendment Act 1978.",
        subtopic: "18.3"
    },
    {
        id: 35,
        question: "Can courts inquire into the advice given by Council of Ministers to the President?",
        options: ["Yes", "No", "Only SC", "Only High Court"],
        correctAnswer: 1,
        explanation: "Article 74(2): The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.",
        subtopic: "18.3"
    },
    {
        id: 36,
        question: "The 'Pardoning Power' is subject to judicial review if:",
        options: ["It is arbitrary or mala fide", "The President is biased", "Never subject to review", "A and B"],
        correctAnswer: 3,
        explanation: "Epuru Sudhakar case (2006): SC ruled that pardoning power is subject to limited judicial review on grounds of mala fide, arbitrariness, etc.",
        subtopic: "18.6"
    },
    {
        id: 37,
        question: "Who addresses the first session of Parliament after each general election and the first session of each year?",
        options: ["Speaker", "Prime Minister", "President", "Vice-President"],
        correctAnswer: 2,
        explanation: "Article 87: Special address by the President.",
        subtopic: "18.3"
    },
    {
        id: 38,
        question: "Security deposit for Presidential candidate is:",
        options: ["Rs 10,000", "Rs 15,000", "Rs 25,000", "Rs 50,000"],
        correctAnswer: 1,
        explanation: "Rs 15,000 to be deposited in RBI.",
        subtopic: "18.1"
    },
    {
        id: 39,
        question: "Minimum number of proposers and seconders required for Presidential nomination:",
        options: ["10 each", "20 each", "50 each", "100 each"],
        correctAnswer: 2,
        explanation: "50 electors as proposers and 50 electors as seconders (Total 100).",
        subtopic: "18.1"
    },
    {
        id: 40,
        question: "Which term is NOT used in the Constitution for the removal of Vice-President?",
        options: ["Removal", "Impeachment", "Resolution", "Vacancy"],
        correctAnswer: 1,
        explanation: "The term 'Impeachment' is technically used only for the President (Article 61). For VP, it is 'Removal by Resolution'.",
        subtopic: "18.0" // Comparative
    },

    // ==========================================
    // CHAPTER 19: VICE-PRESIDENT (20 Questions)
    // ==========================================

    {
        id: 41,
        question: "The Vice-President is the ex-officio Chairman of:",
        options: ["Lok Sabha", "Rajya Sabha", "NITI Aayog", "Zonal Councils"],
        correctAnswer: 1,
        explanation: "VP acts as the ex-officio Chairman of the Rajya Sabha (Article 64).",
        subtopic: "19.3"
    },
    {
        id: 42,
        question: "Who elects the Vice-President?",
        options: ["Only elected members of Parliament", "All members of Parliament", "Elected MPs and MLAs", "All MPs and MLAs"],
        correctAnswer: 1,
        explanation: "The electoral college consists of members of both Houses of Parliament (Elected + Nominated). It does not include MLAs.",
        subtopic: "19.1"
    },
    {
        id: 43,
        question: "To remove the Vice-President, a resolution must be passed by:",
        options: ["Lok Sabha with Special Majority", "Rajya Sabha with Effective Majority", "Both Houses with Special Majority", "Rajya Sabha Simple Majority"],
        correctAnswer: 1,
        explanation: "Article 67(b): Resolution passed by Rajya Sabha by a majority of all the then members (Effective Majority) and agreed to by Lok Sabha (Simple Majority).",
        subtopic: "19.2"
    },
    {
        id: 44,
        question: "The oath of office to the Vice-President is administered by:",
        options: ["Chief Justice", "President", "Speaker", "Prime Minister"],
        correctAnswer: 1,
        explanation: "The President (or some person appointed by him) administers the oath.",
        subtopic: "19.1"
    },
    {
        id: 45,
        question: "Which of the following creates a vacancy in the VP office?",
        options: ["Expiry of 5 year term", "Resignation", "Removal", "All of the above"],
        correctAnswer: 3,
        explanation: "Expiry, Resignation, Removal, Death, or Disqualification.",
        subtopic: "19.2"
    },
    {
        id: 46,
        question: "When the VP acts as President, he draws the salary of:",
        options: ["Vice-President", "Chairman of Rajya Sabha", "President", "Member of Parliament"],
        correctAnswer: 2,
        explanation: "He is entitled to such emoluments, allowances and privileges as are determined by Parliament for the President.",
        subtopic: "19.3"
    },
    {
        id: 47,
        question: "Is the Vice-President a member of the Rajya Sabha?",
        options: ["Yes", "No", "Ex-officio member", "Honorary member"],
        correctAnswer: 1,
        explanation: "He is the Chairman, but he is NOT a member of the House. Thus he cannot vote in the first instance.",
        subtopic: "19.3"
    },
    {
        id: 48,
        question: "The concept of Vice-President is borrowed from:",
        options: ["UK Constitution", "US Constitution", "Canadian Constitution", "Irish Constitution"],
        correctAnswer: 1,
        explanation: "The office of the Indian Vice-President is modelled on the lines of the American Vice-President.",
        subtopic: "19.4"
    },
    {
        id: 49,
        question: "How many electors are needed as proposers and seconders for VP nomination?",
        options: ["50 each", "20 each", "10 each", "5 each"],
        correctAnswer: 1,
        explanation: "20 electors as proposers and 20 as seconders.",
        subtopic: "19.1"
    },
    {
        id: 50,
        question: "Can the Vice-President be re-elected?",
        options: ["Yes, any number of times", "No", "Only once", "Twice max"],
        correctAnswer: 0,
        explanation: "Yes, he is eligible for re-election for any number of terms. Dr. S. Radhakrishnan and Hamid Ansari were elected for two consecutive terms.",
        subtopic: "19.2"
    },
    {
        id: 51,
        question: "Who performs the duties of the Chairman of Rajya Sabha when the VP acts as President?",
        options: ["Deputy Chairman of Rajya Sabha", "Speaker of Lok Sabha", "Senior most member", "Chief Justice"],
        correctAnswer: 0,
        explanation: "The Deputy Chairman of Rajya Sabha performs the duties of the Chairman.",
        subtopic: "19.3"
    },
    {
        id: 52,
        question: "Does the Constitution specify any emoluments for the Vice-President in that capacity?",
        options: ["Yes", "No", "Same as President", "Half of President"],
        correctAnswer: 1,
        explanation: "No. He draws his regular salary in his capacity as the ex-officio Chairman of the Rajya Sabha. There is no salary for the post of 'Vice-President' per se.",
        subtopic: "19.3"
    },
    {
        id: 53,
        question: "Disputes regarding VP election are heard by:",
        options: ["Election Commission", "Supreme Court", "High Court", "President"],
        correctAnswer: 1,
        explanation: "Supreme Court. (Article 71).",
        subtopic: "19.1"
    },
    {
        id: 54,
        question: "Minimum age for Vice-President:",
        options: ["25", "30", "35", "40"],
        correctAnswer: 2,
        explanation: "35 years (Same as President).",
        subtopic: "19.1"
    },
    {
        id: 55,
        question: "The Vice-President submits resignation to:",
        options: ["Chief Justice", "Speaker", "President", "Prime Minister"],
        correctAnswer: 2,
        explanation: "To the President.",
        subtopic: "19.2"
    },
    {
        id: 56,
        question: "Article 63 states:",
        options: ["There shall be a President", "There shall be a Vice-President", "There shall be a PM", "None"],
        correctAnswer: 1,
        explanation: "Article 63: There shall be a Vice-President of India.",
        subtopic: "19.1"
    },
    {
        id: 57,
        question: "Who was the first Vice-President to die in office?",
        options: ["Dr. Zakir Hussain", "Krishna Kant", "B.D. Jatti", "G.S. Pathak"],
        correctAnswer: 1,
        explanation: "Krishna Kant was the first Vice-President to die in office (2002).",
        subtopic: "19.2"
    },
    {
        id: 58,
        question: "The election of Vice-President must be held:",
        options: ["Within 6 months of expiry", "Before the expiry of the term", "Within 3 months", "Any time"],
        correctAnswer: 1,
        explanation: "Article 68: An election to fill a vacancy caused by the expiration of the term shall be completed BEFORE the expiration of the term.",
        subtopic: "19.1"
    },
    {
        id: 59,
        question: "Who among the following was never a Vice-President before becoming President?",
        options: ["Dr. S. Radhakrishnan", "Dr. Zakir Hussain", "V.V. Giri", "Neelam Sanjiva Reddy"],
        correctAnswer: 3,
        explanation: "Neelam Sanjiva Reddy was Speaker of Lok Sabha. The others were VPs.",
        subtopic: "19.1"
    },
    {
        id: 60,
        question: "Can a nominated member of Rajya Sabha vote in the removal of Vice-President?",
        options: ["Yes", "No", "Only if permitted by Chairman", "Only if unrelated to political issues"],
        correctAnswer: 0,
        explanation: "Yes. Since the removal resolution is declared in Rajya Sabha, and nominated members are full members of the House, they can vote.",
        subtopic: "19.2"
    }
];

export default DAY4_MCQS;
