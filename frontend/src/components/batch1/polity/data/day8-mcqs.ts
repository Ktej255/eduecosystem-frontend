
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

export const DAY8_MCQS: MCQ[] = [
    // ==========================================
    // CHAPTER 22: PARLIAMENT (60 Questions)
    // Part 1: Organization, Composition, Sessions
    // ==========================================

    {
        id: 1,
        question: "The Parliament of India consists of:",
        options: ["Lok Sabha & Rajya Sabha", "President, LS & RS", "President, LS, RS & Vice President", "Lok Sabha, Rajya Sabha & Speaker"],
        correctAnswer: 1,
        explanation: "Under Article 79, Parliament consists of the President and two Houses.",
        subtopic: "22.1"
    },
    {
        id: 2,
        question: "Which of the following is NOT a part of Parliament but is an integral part of it?",
        options: ["Speaker", "President", "Attorney General", "Secretary General"],
        correctAnswer: 1,
        explanation: "The President is not a member of either House but is an integral part of Parliament.",
        subtopic: "22.1"
    },
    {
        id: 3,
        question: "The maximum strength of Rajya Sabha is fixed at:",
        options: ["250", "245", "545", "238"],
        correctAnswer: 0,
        explanation: "250 (238 Representatives + 12 Nominated).",
        subtopic: "22.1"
    },
    {
        id: 4,
        question: "How many members are nominated by the President to the Rajya Sabha?",
        options: ["2", "10", "12", "14"],
        correctAnswer: 2,
        explanation: "12 members having special knowledge in Art, Literature, Science, and Social Service.",
        subtopic: "22.1"
    },
    {
        id: 5,
        question: "Representation of States in Rajya Sabha is based on:",
        options: ["Equal representation", "Population", "Area", "GDP"],
        correctAnswer: 1,
        explanation: "Based on Population (unlike US Senate where it is equal).",
        subtopic: "22.1"
    },
    {
        id: 6,
        question: "The Fourth Schedule of the Constitution deals with:",
        options: ["Anti-Defection", "Allocation of seats in Rajya Sabha", "Languages", "Tribal Areas"],
        correctAnswer: 1,
        explanation: "Allocation of seats in the Council of States.",
        subtopic: "22.1"
    },
    {
        id: 7,
        question: "Representatives of Union Territories in Rajya Sabha are chosen by:",
        options: ["Direct Election", "Electoral College", "Nomination", "Lieutenant Governor"],
        correctAnswer: 1,
        explanation: "By an electoral college specially constituted for the purpose (indirect election).",
        subtopic: "22.1"
    },
    {
        id: 8,
        question: "Which UTs have representation in Rajya Sabha?",
        options: ["Delhi & Puducherry", "Delhi, Puducherry & J&K", "All UTs", "Delhi only"],
        correctAnswer: 1,
        explanation: "Delhi, Puducherry, and Jammu & Kashmir (after reorganization).",
        subtopic: "22.1"
    },
    {
        id: 9,
        question: "The maximum strength of Lok Sabha is:",
        options: ["552", "550", "545", "543"],
        correctAnswer: 0,
        explanation: "Originally 552. (However, 104th Amendment Act ceased the reservation for Anglo-Indians, effectively making it 550 electable).",
        subtopic: "22.1"
    },
    {
        id: 10,
        question: "The 61st Constitutional Amendment Act, 1988 reduced voting age from:",
        options: ["21 to 18", "25 to 21", "18 to 16", "21 to 20"],
        correctAnswer: 0,
        explanation: "21 to 18 years.",
        subtopic: "22.1"
    },
    {
        id: 11,
        question: "Territorial constituencies for Lok Sabha are readjusted after each:",
        options: ["General Election", "Census", "5 Years", "Presidential Election"],
        correctAnswer: 1,
        explanation: "After each Census (Article 82).",
        subtopic: "22.1"
    },
    {
        id: 12,
        question: "The 84th Amendment Act, 2001 froze the allocation of seats in Lok Sabha till:",
        options: ["2010", "2020", "2026", "2030"],
        correctAnswer: 2,
        explanation: "Till the year 2026.",
        subtopic: "22.1"
    },
    {
        id: 13,
        question: "Reservation of seats for SCs and STs in Lok Sabha is provided based on:",
        options: ["Religion", "Population ratio", "Education", "Area"],
        correctAnswer: 1,
        explanation: "On the basis of population ratio (Article 330).",
        subtopic: "22.1"
    },
    {
        id: 14,
        question: "Rajya Sabha is a permanent body. How many members retire every 2 years?",
        options: ["1/2", "1/3", "1/4", "2/3"],
        correctAnswer: 1,
        explanation: "One-third of its members retire every second year.",
        subtopic: "22.2"
    },
    {
        id: 15,
        question: "The term of office for a member of Rajya Sabha is:",
        options: ["5 years", "6 years", "4 years", "Life"],
        correctAnswer: 1,
        explanation: "6 years.",
        subtopic: "22.2"
    },
    {
        id: 16,
        question: "Can the term of Lok Sabha be extended?",
        options: ["No", "Yes, by 6 months", "Yes, by 1 year at a time during emergency", "Yes, by President's wish"],
        correctAnswer: 2,
        explanation: "During National Emergency, it can be extended by Law of Parliament for one year at a time.",
        subtopic: "22.2"
    },
    {
        id: 17,
        question: "Minimum age to be a member of Lok Sabha is:",
        options: ["21", "25", "30", "35"],
        correctAnswer: 1,
        explanation: "25 years.",
        subtopic: "22.2"
    },
    {
        id: 18,
        question: "Minimum age to be a member of Rajya Sabha is:",
        options: ["25", "30", "35", "40"],
        correctAnswer: 1,
        explanation: "30 years.",
        subtopic: "22.2"
    },
    {
        id: 19,
        question: "A person found guilty of corrupt practice in elections can be disqualified by:",
        options: ["Supreme Court", "High Court", "President", "Speaker"],
        correctAnswer: 2,
        explanation: "President (on advice of Election Commission).",
        subtopic: "22.2"
    },
    {
        id: 20,
        question: "Disqualification on ground of defection (10th Schedule) is decided by:",
        options: ["President", "Election Commission", "Speaker/Chairman", "High Court"],
        correctAnswer: 2,
        explanation: "The Presiding Officer of the House (Speaker/Chairman).",
        subtopic: "22.2"
    },
    {
        id: 21,
        question: "If a member is absent from all meetings for ____ days without permission, his seat may be declared vacant.",
        options: ["30", "60", "90", "100"],
        correctAnswer: 1,
        explanation: "60 days.",
        subtopic: "22.2"
    },
    {
        id: 22,
        question: "If a person is elected to both houses, he must intimate within 10 days, else:",
        options: ["RS seat becomes vacant", "LS seat becomes vacant", "Both seats become vacant", "President decides"],
        correctAnswer: 0,
        explanation: "His seat in Rajya Sabha becomes vacant.",
        subtopic: "22.2"
    },
    {
        id: 23,
        question: "The 'Oath or Affirmation' for MPs is mentioned in:",
        options: ["Second Schedule", "Third Schedule", "Fourth Schedule", "Fifth Schedule"],
        correctAnswer: 1,
        explanation: "Third Schedule.",
        subtopic: "22.2"
    },
    {
        id: 24,
        question: "Double Membership: A person cannot be a member of both Parliament and State Legislature. He must resign from State Legislature within:",
        options: ["10 days", "14 days", "30 days", "60 days"],
        correctAnswer: 1,
        explanation: "14 days. If not, his seat in Parliament becomes vacant.",
        subtopic: "22.2"
    },
    {
        id: 25,
        question: "The power to summon the Houses of Parliament rests with:",
        options: ["Speaker", "Prime Minister", "President", "Vice President"],
        correctAnswer: 2,
        explanation: "President summons each House.",
        subtopic: "22.3"
    },
    {
        id: 26,
        question: "The maximum gap between two sessions of Parliament cannot be more than:",
        options: ["3 months", "4 months", "6 months", "9 months"],
        correctAnswer: 2,
        explanation: "6 months.",
        subtopic: "22.3"
    },
    {
        id: 27,
        question: "Normally, how many sessions does Parliament have in a year?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "Three: Budget, Monsoon, and Winter sessions.",
        subtopic: "22.3"
    },
    {
        id: 28,
        question: "'Adjournment' of the House is done by:",
        options: ["President", "Prime Minister", "Presiding Officer", "Ministry of Parliamentary Affairs"],
        correctAnswer: 2,
        explanation: "Presiding Officer (Speaker/Chairman).",
        subtopic: "22.3"
    },
    {
        id: 29,
        question: "'Prorogation' of the House is done by:",
        options: ["Presiding Officer", "President", "Prime Minister", "Cabinet"],
        correctAnswer: 1,
        explanation: "The President issues a notification for prorogation.",
        subtopic: "22.3"
    },
    {
        id: 30,
        question: "Dissolution ends the life of:",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both", "Parliament"],
        correctAnswer: 0,
        explanation: "Lok Sabha only (Rajya Sabha is permanent).",
        subtopic: "22.3"
    },
    {
        id: 31,
        question: "A bill pending in Lok Sabha lapses when:",
        options: ["It is prorogued", "It is adjourned sine die", "Lok Sabha is dissolved", "Cabinet resigns"],
        correctAnswer: 2,
        explanation: "When Lok Sabha is dissolved, pending bills lapse (with exceptions).",
        subtopic: "22.3"
    },
    {
        id: 32,
        question: "A bill pending in Rajya Sabha but NOT passed by Lok Sabha:",
        options: ["Lapses on dissolution of LS", "Does NOT lapse", "Requires President assent to survive", "Lapses immediately"],
        correctAnswer: 1,
        explanation: "It does NOT lapse on dissolution of Lok Sabha.",
        subtopic: "22.3"
    },
    {
        id: 33,
        question: "Quorum to constitute a meeting of either House is:",
        options: ["1/5th", "1/10th", "1/2", "100 members"],
        correctAnswer: 1,
        explanation: "One-tenth of the total number of members of the House.",
        subtopic: "22.3"
    },
    {
        id: 34,
        question: "The first hour of every parliamentary sitting is generally reserved for:",
        options: ["Zero Hour", "Question Hour", "Calling Attention", "Agenda"],
        correctAnswer: 1,
        explanation: "Question Hour.",
        subtopic: "22.3"
    },
    {
        id: 35,
        question: "Zero Hour is:",
        options: ["Mentioned in Rules of Procedure", "An Indian innovation", "First hour of sitting", "When money bills are introduced"],
        correctAnswer: 1,
        explanation: "It is an Indian innovation (existing since 1962). Not mentioned in Rules of Procedure.",
        subtopic: "22.3"
    },
    {
        id: 36,
        question: "Starred Questions require:",
        options: ["Written answer", "Oral answer", "No answer", "President's answer"],
        correctAnswer: 1,
        explanation: "Oral answer (and supplementary questions can follow).",
        subtopic: "22.3"
    },
    {
        id: 37,
        question: "Unstarred Questions require:",
        options: ["Written answer", "Oral answer", "Immediate answer", "Short notice"],
        correctAnswer: 0,
        explanation: "Written answer.",
        subtopic: "22.3"
    },
    {
        id: 38,
        question: "'Lame Duck Session' refers to:",
        options: ["First session of new Lok Sabha", "Last session of existing Lok Sabha", "Joint session", "Emergency session"],
        correctAnswer: 1,
        explanation: "Last session of the existing Lok Sabha after a new Lok Sabha has been elected.",
        subtopic: "22.3"
    },
    {
        id: 39,
        question: "Who is the Speaker Pro Tem?",
        options: ["Speaker of RS", "Senior most member usually appointed to administer oath", "Dy Speaker", "Leader of Opposition"],
        correctAnswer: 1,
        explanation: "Usually the senior-most member, appointed by President to administer oath to new members and enable election of Speaker.",
        subtopic: "22.4"
    },
    {
        id: 40,
        question: "The Speaker of Lok Sabha submits his resignation to:",
        options: ["President", "Prime Minister", "Deputy Speaker", "Chief Justice"],
        correctAnswer: 2,
        explanation: "Deputy Speaker of Lok Sabha.",
        subtopic: "22.4"
    },
    {
        id: 41,
        question: "The Speaker can vote in the House:",
        options: ["Normally", "Only in case of a tie", "Never", "If PM requests"],
        correctAnswer: 1,
        explanation: "He has a casting vote in the case of an equality of votes.",
        subtopic: "22.4"
    },
    {
        id: 42,
        question: "Who decides whether a bill is a Money Bill or not?",
        options: ["President", "Finance Minister", "Speaker", "Chairman of RS"],
        correctAnswer: 2,
        explanation: "The Speaker of Lok Sabha. His decision is final.",
        subtopic: "22.4"
    },
    {
        id: 43,
        question: "Can the Speaker be removed?",
        options: ["No", "Yes, by President", "Yes, by effective majority of Lok Sabha", "Yes, by 2/3rd majority of Parliament"],
        correctAnswer: 2,
        explanation: "By a resolution passed by a majority of all the then members of the Lok Sabha (Effective Majority).",
        subtopic: "22.4"
    },
    {
        id: 44,
        question: "When the Lok Sabha is dissolved, does the Speaker vacate his office immediately?",
        options: ["Yes", "No, continues till next LS meets", "Becomes Caretaker", "Resigns to President"],
        correctAnswer: 1,
        explanation: "No. He continues in office until immediately before the first meeting of the newly elected Lok Sabha.",
        subtopic: "22.4"
    },
    {
        id: 45,
        question: "Who presides over the Joint Sitting of two Houses?",
        options: ["President", "Speaker of Lok Sabha", "Chairman of Rajya Sabha", "Prime Minister"],
        correctAnswer: 1,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "22.4"
    },
    {
        id: 46,
        question: "The Chairman of Rajya Sabha is:",
        options: ["Elected by RS members", "Nominated by President", "Vice-President (ex-officio)", "Leader of House"],
        correctAnswer: 2,
        explanation: "The Vice-President is the ex-officio Chairman.",
        subtopic: "22.4"
    },
    {
        id: 47,
        question: "Can the Chairman of Rajya Sabha (VP) vote in the first instance?",
        options: ["Yes", "No", "Yes if he is a member", "Yes on Money Bills"],
        correctAnswer: 1,
        explanation: "No. He is not a member of the House. He can only exercise a casting vote in case of a tie.",
        subtopic: "22.4"
    },
    {
        id: 48,
        question: "Who appoints the Secretary General of Lok Sabha?",
        options: ["President", "Speaker", "PM", "UPSC"],
        correctAnswer: 1,
        explanation: "The Speaker.",
        subtopic: "22.4"
    },
    {
        id: 49,
        question: "The Leader of Opposition is a statutory office given recognition by:",
        options: ["Constitution", "Salary and Allowances of Leaders of Opposition in Parliament Act, 1977", "Convention", "Rules of Procedure"],
        correctAnswer: 1,
        explanation: "Act of 1977.",
        subtopic: "22.5"
    },
    {
        id: 50,
        question: "To be recognized as Leader of Opposition, a party needs at least:",
        options: ["1/2 seats", "1/10th seats", "1/3rd seats", "1/4th seats"],
        correctAnswer: 1,
        explanation: "1/10th of the total strength of the House.",
        subtopic: "22.5"
    },
    // Extra
    {
        id: 51,
        question: "The 'Whip' is mentioned in:",
        options: ["Constitution", "Rules of Procedure", "Parliamentary Statute", "None of the above"],
        correctAnswer: 3,
        explanation: "It is based on convention (British practice). Not mentioned in Constitution or Rules.",
        subtopic: "22.5"
    },
    {
        id: 52,
        question: "A bill passed by Lok Sabha and sent to Rajya Sabha. If RS rejects it:",
        options: ["Bill lapses", "Joint Sitting may be called", "President decides", "LS overrides it directly"],
        correctAnswer: 1,
        explanation: "President may summon a joint sitting (unless it's a Money Bill or Constitutional Amendment).",
        subtopic: "22.3"
    },
    {
        id: 53,
        question: "Which state has the largest representation in Lok Sabha?",
        options: ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"],
        correctAnswer: 2,
        explanation: "Uttar Pradesh (80 seats).",
        subtopic: "22.1"
    },
    {
        id: 54,
        question: "The First Lok Sabha was constituted in:",
        options: ["1950", "1951", "1952", "1947"],
        correctAnswer: 2,
        explanation: "April 1952.",
        subtopic: "22.1"
    },
    {
        id: 55,
        question: "Voting on Demand for Grants is the exclusive privilege of:",
        options: ["Lok Sabha", "Rajya Sabha", "Both", "PAC"],
        correctAnswer: 0,
        explanation: "Lok Sabha only.",
        subtopic: "22.3"
    },
    {
        id: 56,
        question: "A person can be elected to Lok Sabha from maximum how many constituencies?",
        options: ["1", "2", "3", "No limit"],
        correctAnswer: 1,
        explanation: "Two (restricted to 2 by RPA amendment in 1996).",
        subtopic: "22.2"
    },
    {
        id: 57,
        question: "The decision of the Speaker regarding disqualification under Anti-Defection Law is:",
        options: ["Final", "Subject to Judicial Review", "Subject to President's approval", "Subject to RS Chairman"],
        correctAnswer: 1,
        explanation: "Subject to Judicial Review (Kihoto Hollohan case, 1992).",
        subtopic: "22.2"
    },
    {
        id: 58,
        question: "Who is the custodian of the rights and privileges of the House?",
        options: ["President", "Speaker", "PM", "Home Minister"],
        correctAnswer: 1,
        explanation: "Speaker.",
        subtopic: "22.4"
    },
    {
        id: 59,
        question: "A member resigning from his seat addresses the letter to:",
        options: ["President", "Presiding Officer of the House", "PM", "Election Commission"],
        correctAnswer: 1,
        explanation: "Speaker (LS) or Chairman (RS).",
        subtopic: "22.2"
    },
    {
        id: 60,
        question: "Which House is known as the 'House of Elders'?",
        options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Gram Sabha"],
        correctAnswer: 1,
        explanation: "Rajya Sabha.",
        subtopic: "22.1"
    }
];

export default DAY8_MCQS;
