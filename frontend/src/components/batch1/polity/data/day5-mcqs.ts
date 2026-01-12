
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

export const DAY5_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 20: PRIME MINISTER (10 Questions)
    // ==========================================

    {
        id: 1,
        question: "Article 75 says that the Prime Minister shall be appointed by:",
        options: ["The Parliament", "The President", "The Lok Sabha", "The Chief Justice of India"],
        correctAnswer: 1,
        explanation: "Article 75 says the Prime Minister shall be appointed by the President.",
        subtopic: "20.1"
    },
    {
        id: 2,
        question: "Does the Constitution contain any specific procedure for the selection and appointment of the Prime Minister?",
        options: ["Yes, detailed in Art 75", "No, it relies on conventions", "Yes, in Art 74", "Yes, in Art 78"],
        correctAnswer: 1,
        explanation: "Article 75 only says PM shall be appointed by President. It does not contain a specific procedure; the system of parliamentary government conventions is followed.",
        subtopic: "20.1"
    },
    {
        id: 3,
        question: "According to the Supreme Court (1997), a person who is not a member of either House of Parliament:",
        options: ["Cannot be appointed as PM", "Can be appointed as PM regarding he becomes a member within 6 months", "Can be appointed as PM for 1 year", "Can be appointed if Rajya Sabha approves"],
        correctAnswer: 1,
        explanation: "A person who is not a member of either House can be appointed as PM for 6 months, within which he must become a member of either House.",
        subtopic: "20.1"
    },
    {
        id: 4,
        question: "The Prime Minister serves:",
        options: ["For a fixed 5 year term", "During the pleasure of the President", "As long as he enjoys the confidence of Rajya Sabha", "As long as the President wants"],
        correctAnswer: 1,
        explanation: "Technically, he holds office during the pleasure of the President. However, this pleasure is not arbitrary; he cannot be dismissed as long as he enjoys majority support in Lok Sabha.",
        subtopic: "20.1"
    },
    {
        id: 5,
        question: "It is the duty of the Prime Minister to communicate to the President all decisions of the Council of Ministers related to administration. This is under:",
        options: ["Article 74", "Article 75", "Article 78", "Article 77"],
        correctAnswer: 2,
        explanation: "Article 78 defines the duties of the Prime Minister regarding furnishing information to the President.",
        subtopic: "20.3"
    },
    {
        id: 6,
        question: "Who acts as the potential link between the President and the Council of Ministers?",
        options: ["Speaker", "Cabinet Secretary", "Prime Minister", "Vice-President"],
        correctAnswer: 2,
        explanation: "The Prime Minister is the principal channel of communication between the President and the Council of Ministers.",
        subtopic: "20.3"
    },
    {
        id: 7,
        question: "Who creates the portfolio allocation for Ministers?",
        options: ["The President", "The Prime Minister", "The Parliament", "The Cabinet Secretary"],
        correctAnswer: 1,
        explanation: "The President allocates portfolios, but strictly on the advice of the Prime Minister. The PM is the real architect.",
        subtopic: "20.4"
    },
    {
        id: 8,
        question: "If the Prime Minister resigns or dies:",
        options: ["The senior-most minister takes over automatically", "The Council of Ministers dissolves", "The President runs the government", "The Parliament elects a new leader immediately"],
        correctAnswer: 1,
        explanation: "The death or resignation of the PM automatically brings about the dissolution of the Council of Ministers.",
        subtopic: "20.4"
    },
    {
        id: 9,
        question: "Which Prime Minister was a member of Rajya Sabha when appointed?",
        options: ["Indira Gandhi", "Morarji Desai", "Charan Singh", "V.P. Singh"],
        correctAnswer: 0,
        explanation: "Indira Gandhi (1966), Deve Gowda (1996), and Manmohan Singh (2004) were members of Rajya Sabha.",
        subtopic: "20.1"
    },
    {
        id: 10,
        question: "The term 'Prime Minister' is mentioned in:",
        options: ["Article 52", "Article 74", "Article 352", "All of the above"],
        correctAnswer: 3,
        explanation: "It is mentioned in Art 74 (Head of Council), Art 75 (Appointment), Art 78 (Duties). Interestingly, Art 352 (National Emergency) mentions 'Prime Minister and other Ministers of Cabinet level'.",
        subtopic: "20.0"
    },

    // ==========================================
    // CHAPTER 21: CENTRAL COUNCIL OF MINISTERS (10 Questions)
    // ==========================================

    {
        id: 11,
        question: "The total number of Ministers, including the Prime Minister, in the Council of Ministers shall not exceed:",
        options: ["10% of Lok Sabha", "15% of Lok Sabha", "15% of Parliament", "20% of Lok Sabha"],
        correctAnswer: 1,
        explanation: "15% of the total strength of the Lok Sabha (Added by 91st Amendment Act, 2003).",
        subtopic: "21.1"
    },
    {
        id: 12,
        question: "Ministers enter office after taking an oath of:",
        options: ["Office only", "Secrecy only", "Office and Secrecy", "Allegiance to Flag"],
        correctAnswer: 2,
        explanation: "The President administers the oaths of office and secrecy.",
        subtopic: "21.1"
    },
    {
        id: 13,
        question: "The Council of Ministers is collectively responsible to:",
        options: ["The President", "The Parliament", "The Lok Sabha", "The Rajya Sabha"],
        correctAnswer: 2,
        explanation: "Article 75 states they are collectively responsible to the House of the People (Lok Sabha).",
        subtopic: "21.2"
    },
    {
        id: 14,
        question: "Individual ministers hold office during the pleasure of:",
        options: ["The Prime Minister", "The President", "The Speaker", "The voters"],
        correctAnswer: 1,
        explanation: "Individually, they hold office during the pleasure of the President (meaning they can be removed by the President on PM's advice).",
        subtopic: "21.2"
    },
    {
        id: 15,
        question: "Is the 'Cabinet' mentioned in the original Constitution?",
        options: ["Yes, in Article 74", "Yes, in Article 75", "No", "Yes, in Article 352"],
        correctAnswer: 2,
        explanation: "Cabinet was NOT mentioned in the original Constitution. It was inserted in Article 352 by the 44th Amendment Act, 1978.",
        subtopic: "21.4"
    },
    {
        id: 16,
        question: "'Kitchen Cabinet' refers to:",
        options: ["The catering committee of Parliament", "The highest decision making body technically", "An informal body consisting of the PM and few influential colleagues", "The Cabinet Committee on Economic Affairs"],
        correctAnswer: 2,
        explanation: "It is an informal body (Inner Cabinet) often consisting of friends and family, not necessarily ministers.",
        subtopic: "21.4"
    },
    {
        id: 17,
        question: "If a No-Confidence Motion is passed:",
        options: ["Only Lok Sabha ministers resign", "Only Cabinet ministers resign", "The entire Council of Ministers resigns", "Only PM resigns"],
        correctAnswer: 2,
        explanation: "The entire Council (including those from Rajya Sabha) must resign.",
        subtopic: "21.2"
    },
    {
        id: 18,
        question: "Which Cabinet Committee is often usually described as the 'Super-Cabinet'?",
        options: ["Appointments Committee", "Political Affairs Committee", "Economic Affairs Committee", "Parliamentary Affairs Committee"],
        correctAnswer: 1,
        explanation: "The Political Affairs Committee deals with all policy matters pertaining to domestic and foreign affairs.",
        subtopic: "21.3"
    },
    {
        id: 19,
        question: "A person who is not a member of Parliament can act as Minister for max period of:",
        options: ["3 months", "6 months", "9 months", "1 month"],
        correctAnswer: 1,
        explanation: "6 consecutive months.",
        subtopic: "21.1"
    },
    {
        id: 20,
        question: "Who presides over the Cabinet meetings?",
        options: ["President", "Cabinet Secretary", "Prime Minister", "Home Minister"],
        correctAnswer: 2,
        explanation: "The Prime Minister presides over Cabinet meetings.",
        subtopic: "21.3"
    },

    // ==========================================
    // CHAPTER 31: GOVERNOR (20 Questions)
    // ==========================================

    {
        id: 21,
        question: "The Governor of a State is appointed by:",
        options: ["The Prime Minister", "The Chief Justice of India", "The President", "The Chief Minister"],
        correctAnswer: 2,
        explanation: "He is appointed by the President by warrant under his hand and seal.",
        subtopic: "31.1"
    },
    {
        id: 22,
        question: "To be appointed as Governor, a person must be of age:",
        options: ["25", "30", "35", "40"],
        correctAnswer: 2,
        explanation: "35 years.",
        subtopic: "31.1"
    },
    {
        id: 23,
        question: "The Governor holds office:",
        options: ["For a fixed 5 year term", "During the pleasure of the President", "Until the State Assembly passes a resolution", "As long as CM wants"],
        correctAnswer: 1,
        explanation: "He holds office during the pleasure of the President. (Though normally 5 years).",
        subtopic: "31.1"
    },
    {
        id: 24,
        question: "Can the same person be appointed as Governor for two or more states?",
        options: ["No, one state only", "Yes, allowed by 7th Amendment Act", "Yes, only for 6 months", "Yes, but salary is doubled"],
        correctAnswer: 1,
        explanation: "7th Constitutional Amendment Act, 1956 authorized the appointment of the same person as Governor for two or more states.",
        subtopic: "31.1"
    },
    {
        id: 25,
        question: "The salary of the Governor is charged on:",
        options: ["Consolidated Fund of India", "Consolidated Fund of the State", "Contingency Fund of India", "Grants from Home Ministry"],
        correctAnswer: 1,
        explanation: "Charged on the Consolidated Fund of the State.",
        subtopic: "31.1"
    },
    {
        id: 26,
        question: "Under Article 163, the discretionary power of the Governor is:",
        options: ["Implicit", "Explicitly mentioned", "Non-existent", "Same as President"],
        correctAnswer: 1,
        explanation: "Unlike the President, the Constitution (Art 163) explicitly mentions that the Governor acts in his discretion in certain matters.",
        subtopic: "31.6"
    },
    {
        id: 27,
        question: "Which of the following powers does the Governor NOT possess?",
        options: ["Diplomatic powers", "Executive powers", "Legislative powers", "Judicial powers"],
        correctAnswer: 0,
        explanation: "Governor has no diplomatic, military, or emergency powers (unlike President).",
        subtopic: "31.6"
    },
    {
        id: 28,
        question: "The power to issue ordinances is given to the Governor under Article:",
        options: ["123", "213", "356", "161"],
        correctAnswer: 1,
        explanation: "Article 213. (123 is for President).",
        subtopic: "31.4"
    },
    {
        id: 29,
        question: "The Governor can pardon a death sentence.",
        options: ["True", "False", "Only if State law was violated", "Only if President allows"],
        correctAnswer: 1,
        explanation: "False. Only the President can pardon a death sentence. The Governor can suspend, remit or commute it, but not pardon it.",
        subtopic: "31.5"
    },
    {
        id: 30,
        question: "Who administers the oath to the Governor?",
        options: ["President", "Chief Justice of India", "Chief Justice of the concerned High Court", "Chief Minister"],
        correctAnswer: 2,
        explanation: "Chief Justice of the concerned High Court.",
        subtopic: "31.1"
    },
    {
        id: 31,
        question: "When a bill is sent to the Governor, he CANNOT:",
        options: ["Give assent", "Withhold assent", "Return it (if not Money Bill)", "Refer it to the High Court"],
        correctAnswer: 3,
        explanation: "He can reserve it for the President, but cannot refer it to the High Court directly holding it.",
        subtopic: "31.3"
    },
    {
        id: 32,
        question: "In the appointment of Chief Minister, if no party has a clear majority, the Governor uses:",
        options: ["Situational Discretion", "Constitutional Discretion", "Cabinet advice", "President's advice"],
        correctAnswer: 0,
        explanation: "This is a situational discretion (derived from the political situation), not constitutional (written).",
        subtopic: "31.2"
    },
    {
        id: 33,
        question: "Article 371 provides special responsibilities to Governors of certain states like:",
        options: ["Maharashtra and Gujarat", "Tamil Nadu and Kerala", "Bihar and UP", "Punjab and Haryana"],
        correctAnswer: 0,
        explanation: "Maharashtra (Vidarbha/Marathwada) and Gujarat (Saurashtra/Kutch).",
        subtopic: "31.2"
    },
    {
        id: 34,
        question: "Can the Governor summon the House when the CM has lost majority?",
        options: ["Yes, at his discretion", "No, only on CM advice", "Only via President", "No"],
        correctAnswer: 0,
        explanation: "If the CM loses majority, the Governor can summon the house to test the majority.",
        subtopic: "31.2"
    },
    {
        id: 35,
        question: "The Governor is the Chancellor of universities in the state.",
        options: ["True, structurally", "False, CM is Chancellor", "True, by Constitution", "False, Education Minister is"],
        correctAnswer: 0,
        explanation: "He acts as Chancellor by virtue of status (statutory position usually), not strictly constitutional executive power, but it's a standard convention in State University laws.",
        subtopic: "31.2"
    },
    {
        id: 36,
        question: "Who determines the size of the State Council of Ministers?",
        options: ["Governor", "Chief Minister", "Parliament", "Constitution"],
        correctAnswer: 1,
        explanation: "The CM determines the size (within the 15% limit).",
        subtopic: "32.1"
    },
    {
        id: 37,
        question: "Who acts as the Governor if the sitting Governor dies?",
        options: ["Chief Justice of High Court", "Chief Minister", "President appoints an acting Governor (often CJ of HC)", "Neighbouring Governor"],
        correctAnswer: 2,
        explanation: "The President makes such provision as he thinks fit (Art 160). Usually, CJ of HC is appointed to discharge functions.",
        subtopic: "31.1"
    },
    {
        id: 38,
        question: "Can a Governor be removed by a process of impeachment?",
        options: ["Yes", "No", "Only if State Assembly demands", "Only if Parliament demands"],
        correctAnswer: 1,
        explanation: "No. There is no impeachment for Governor. President removes him at pleasure.",
        subtopic: "31.1"
    },
    {
        id: 39,
        question: "Pardoning power of Governor is under Article:",
        options: ["72", "161", "163", "164"],
        correctAnswer: 1,
        explanation: "Article 161.",
        subtopic: "31.5"
    },
    {
        id: 40,
        question: "The Advocate General of the State is appointed by:",
        options: ["President", "Governor", "Chief Justice of HC", "CM"],
        correctAnswer: 1,
        explanation: "Appointed by the Governor (who holds office during his pleasure).",
        subtopic: "31.2"
    },

    // ==========================================
    // CHAPTER 32 & 33: CM & STATE COUNCIL (10 Questions)
    // ==========================================

    {
        id: 41,
        question: "The Chief Minister's salary is determined by:",
        options: ["The Governor", "The State Legislature", "The President", "The Parliament"],
        correctAnswer: 1,
        explanation: "Determined by the State Legislature.",
        subtopic: "32.1"
    },
    {
        id: 42,
        question: "The relationship between Governor and CM is similar to that between:",
        options: ["President and PM", "President and VP", "Speaker and Chairman", "PM and Cabinet"],
        correctAnswer: 0,
        explanation: "It mirrors the relationship between President and Prime Minister.",
        subtopic: "32.3"
    },
    {
        id: 43,
        question: "Minimum strength of Council of Ministers in a State (including CM) is:",
        options: ["10", "12", "15", "7"],
        correctAnswer: 1,
        explanation: "It shall not be less than 12 (Article 164(1A)).",
        subtopic: "33.1"
    },
    {
        id: 44,
        question: "Who allocates portfolios to State Ministers?",
        options: ["Governor", "Chief Minister", "President", "Speaker"],
        correctAnswer: 0,
        explanation: "The Governor appoints them and allocates portfolios on the advice of the CM.",
        subtopic: "32.2"
    },
    {
        id: 45,
        question: "If a CM resigns, the entire council of ministers collapses.",
        options: ["True", "False", "Only if coalition", "False, new CM takes over"],
        correctAnswer: 0,
        explanation: "True. The resignation or death of the CM dissolves the Council.",
        subtopic: "32.2"
    },
    // Ch 20-33 Mixed
    {
        id: 46,
        question: "Who is the head of the State Planning Board?",
        options: ["Governor", "Chief Minister", "Finance Minister", "Planning Secretary"],
        correctAnswer: 1,
        explanation: "Chief Minister.",
        subtopic: "32.2"
    },
    {
        id: 47,
        question: "Which Articles deal with the organization of State Executive?",
        options: ["153 to 167", "52 to 78", "12 to 35", "36 to 51"],
        correctAnswer: 0,
        explanation: "Part VI, Articles 153 to 167.",
        subtopic: "31.0"
    },
    {
        id: 48,
        question: "Can an outsider (non-legislator) be appointed as CM?",
        options: ["Yes, for 6 months", "No", "Yes, indefinitely", "Yes, if Governor allows"],
        correctAnswer: 0,
        explanation: "Yes, provided he gets elected to State Legislature within 6 months.",
        subtopic: "32.1"
    },
    {
        id: 49,
        question: "Is the Governor liable to any court for the exercise of his powers?",
        options: ["Yes", "No", "Only for personal acts", "Only after resignation"],
        correctAnswer: 1,
        explanation: "Article 361 provides immunity. He is not answerable to any court for the exercise of the powers and duties of his office.",
        subtopic: "31.1"
    },
    {
        id: 50,
        question: "The power to recommend the dissolution of the Admin Assembly rests with:",
        options: ["Speaker", "Chief Justice", "Chief Minister", "Leader of Opposition"],
        correctAnswer: 2,
        explanation: "The CM can recommend the dissolution of the Legislative Assembly to the Governor at any time.",
        subtopic: "32.2"
    },

    // Extra fill
    {
        id: 51,
        question: "The oath of the Prime Minister includes:",
        options: ["To preserve, protect and defend the Constitution (Like President)", "To bear true faith and allegiance to the Constitution"],
        correctAnswer: 1,
        explanation: "The PM/Ministers swear 'true faith and allegiance'. The President swears to 'preserve, protect and defend'.",
        subtopic: "20.1"
    },
    {
        id: 52,
        question: "Which PM coined the term 'Jai Jawan, Jai Kisan'?",
        options: ["Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Vajpayee"],
        correctAnswer: 1,
        explanation: "Lal Bahadur Shastri.",
        subtopic: "20.0"
    },
    {
        id: 53,
        question: "The Shadow Cabinet is a feature of:",
        options: ["American System", "British System", "French System", "Indian System"],
        correctAnswer: 1,
        explanation: "It is a unique institution of the British Cabinet system (formed by Opposition).",
        subtopic: "21.4"
    },
    {
        id: 54,
        question: "Who was the first woman Chief Minister of a State?",
        options: ["Sarojini Naidu", "Sucheta Kripalani", "Indira Gandhi", "Mamata Banerjee"],
        correctAnswer: 1,
        explanation: "Sucheta Kripalani (UP, 1963).",
        subtopic: "32.0"
    },
    {
        id: 55,
        question: "Can a Minister vote in the House of which he is not a member?",
        options: ["Yes", "No", "Only if PM allows", "Only in joint sitting"],
        correctAnswer: 1,
        explanation: "He can speak and participate, but he can VOTE only in the House of which he is a member.",
        subtopic: "21.2"
    },
    {
        id: 56,
        question: "Article 167 defines:",
        options: ["Duties of CM", "Appointment of CM", "Duties of Governor", "Powers of Governor"],
        correctAnswer: 0,
        explanation: "Duties of Chief Minister as respects the furnishing of information to Governor (Parallel to Art 78 for PM).",
        subtopic: "32.3"
    },
    {
        id: 57,
        question: "The Governor can promulgate an ordinance when:",
        options: ["State Legislature is not in session", "CM advises him to", "President orders", "Emergency is on"],
        correctAnswer: 0,
        explanation: "And he is satisfied that circumstances exist which render it necessary for him to take immediate action.",
        subtopic: "31.4"
    },
    {
        id: 58,
        question: "Who is the Chairman of the State Planning Commission?",
        options: ["Governor", "CM", "Chief Secretary", "Finance Minister"],
        correctAnswer: 1,
        explanation: "Chief Minister.",
        subtopic: "32.2"
    },
    {
        id: 59,
        question: "The 91st Amendment limited the council size. Which state has the smallest Assembly strength (thus needing the exception of min 12)?",
        options: ["Sikkim", "Goa", "Mizoram", "All of the above"],
        correctAnswer: 3,
        explanation: "Sikkim (32), Goa (40), Mizoram (40) have small assemblies.",
        subtopic: "33.1"
    },
    {
        id: 60,
        question: "Collective Responsibility means that Cabinet decisions bind all cabinet ministers:",
        options: ["Even if they differed in the cabinet meeting", "Only if they agreed", "Only if they voted", "None"],
        correctAnswer: 0,
        explanation: "They must support the decision inside and outside Parliament. If they cannot, they must resign.",
        subtopic: "21.2"
    }
];

export default DAY5_MCQS;
