
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

export const DAY13_MCQS: MCQ[] = [
    // ==========================================
    // PAPER 1: WEEK 2 TOPICS (Q1-50)
    // Parliament, Judiciary, State Legislature
    // ==========================================

    {
        id: 1,
        question: "1. Which of the following statements about Money Bills is INCORRECT?",
        options: ["Must be introduced in Lok Sabha", "Must be introduced on recommendation of President", "Rajya Sabha can detain it for 1 month", "Speaker certifies it"],
        correctAnswer: 2,
        explanation: "Rajya Sabha can detain a Money Bill for a maximum of 14 DAYS only.",
        subtopic: "22.6"
    },
    {
        id: 2,
        question: "2. The 'Shadow Cabinet' is a unique institution of?",
        options: ["British Cabinet System", "American System", "French System", "Japanese System"],
        correctAnswer: 0,
        explanation: "British Cabinet System. It is formed by the Opposition party to balance the ruling cabinet.",
        subtopic: "22.1"
    },
    {
        id: 3,
        question: "3. Who decides the question of disqualification under the Tenth Schedule?",
        options: ["President", "Election Commission", "Chairman/Speaker", "Supreme Court"],
        correctAnswer: 2,
        explanation: "The Presiding Officer of the House (Speaker in LS, Chairman in RS/Council).",
        subtopic: "22.2"
    },
    {
        id: 4,
        question: "4. The concept of 'Public Interest Litigation' (PIL) originated in?",
        options: ["USA", "UK", "Australia", "India"],
        correctAnswer: 0,
        explanation: "USA in the 1960s.",
        subtopic: "26.4"
    },
    {
        id: 5,
        question: "5. Disputes between the Centre and States come under which Jurisdiction of SC?",
        options: ["Writ", "Advisory", "Original", "Appellate"],
        correctAnswer: 2,
        explanation: "Original Jurisdiction (Article 131).",
        subtopic: "26.3"
    },
    {
        id: 6,
        question: "6. Which committee examinations the 'Demands for Grants'?",
        options: ["Public Accounts Committee", "Estimates Committee", "Departmental Standing Committees", "Business Advisory Committee"],
        correctAnswer: 2,
        explanation: "Departmental Standing Committees (DSCs) scrutinize the demands for grants.",
        subtopic: "23.2"
    },
    {
        id: 7,
        question: "7. Who appoints the District Judges?",
        options: ["Governor", "President", "Chief Justice of HC", "State Public Service Commission"],
        correctAnswer: 0,
        explanation: "Governor (in consultation with High Court).",
        subtopic: "35.1"
    },
    {
        id: 8,
        question: "8. The maximum gap between two sessions of Parliament cannot be more than?",
        options: ["3 months", "6 months", "9 months", "1 year"],
        correctAnswer: 1,
        explanation: "6 months.",
        subtopic: "22.3"
    },
    {
        id: 9,
        question: "9. Joint Sitting of Parliament is summoned by?",
        options: ["Speaker", "President", "PM", "Chairman RS"],
        correctAnswer: 1,
        explanation: "Summoned by President, Presided by Speaker.",
        subtopic: "22.7"
    },
    {
        id: 10,
        question: "10. Article 226 empowers High Courts to issue writs for?",
        options: ["Fundamental Rights only", "Ordinary Legal Rights only", "Both FR and Legal Rights", "Constitutional Rights only"],
        correctAnswer: 2,
        explanation: "For the enforcement of Fundamental Rights AND 'for any other purpose' (legal rights).",
        subtopic: "34.2"
    },
    {
        id: 11,
        question: "11. Legislative Council can delay an Ordinary Bill for a maximum of?",
        options: ["3 months", "4 months", "6 months", "14 days"],
        correctAnswer: 1,
        explanation: "4 months (3 months in first instance + 1 month in second instance).",
        subtopic: "36.5"
    },
    {
        id: 12,
        question: "12. Who is the Chairman of the Rajya Sabha?",
        options: ["President", "Vice-President", "PM", "Elected by RS members"],
        correctAnswer: 1,
        explanation: "The Vice-President of India is the ex-officio Chairman of Rajya Sabha.",
        subtopic: "22.4"
    },
    {
        id: 13,
        question: "13. What is the strength of the Supreme Court at present (2024)?",
        options: ["31", "34", "33", "30"],
        correctAnswer: 1,
        explanation: "34 (33 Judges + 1 CJI).",
        subtopic: "26.1"
    },
    {
        id: 14,
        question: "14. A High Court Judge is removed in the same manner as?",
        options: ["Governor", "Attorney General", "Supreme Court Judge", "Speaker"],
        correctAnswer: 2,
        explanation: "Same as a Supreme Court Judge.",
        subtopic: "34.1"
    },
    {
        id: 15,
        question: "15. Which of the following funds is under the disposal of the President?",
        options: ["Consolidated Fund", "Contingency Fund", "Public Account", "Prime Minister Relief Fund"],
        correctAnswer: 1,
        explanation: "He acts as the guardian of the Contingency Fund of India.",
        subtopic: "22.10"
    },
    {
        id: 16,
        question: "16. Estimates Committee members are from?",
        options: ["Lok Sabha only", "Rajya Sabha only", "Both Houses", "Nominated members only"],
        correctAnswer: 0,
        explanation: "Only from Lok Sabha (30 members).",
        subtopic: "23.1"
    },
    {
        id: 17,
        question: "17. Who admits a motion of 'No Confidence'?",
        options: ["President", "Speaker", "PM", "Leader of Opposition"],
        correctAnswer: 1,
        explanation: "Speaker (needs support of 50 members).",
        subtopic: "22.4"
    },
    {
        id: 18,
        question: "18. Which Article deals with the Annual Financial Statement (Budget)?",
        options: ["110", "112", "266", "267"],
        correctAnswer: 1,
        explanation: "Article 112.",
        subtopic: "22.8"
    },
    {
        id: 19,
        question: "19. Can a minister who is not a member of Parliament participate in proceedings?",
        options: ["Yes, but cannot vote", "No", "Yes, and can vote", "Only in Joint Sitting"],
        correctAnswer: 0,
        explanation: "Yes, he can participate in proceedings of both Houses but cannot vote until he becomes a member.",
        subtopic: "22.5"
    },
    {
        id: 20,
        question: "20. The quorum to hold a meeting of the House of Parliament is?",
        options: ["1/10th of total membership", "1/2 of total membership", "1/3rd of total membership", "50 members"],
        correctAnswer: 0,
        explanation: "One-tenth of the total number of members of the House.",
        subtopic: "22.3"
    },
    {
        id: 21,
        question: "21. Original Jurisdiction of SC DOES NOT extend to?",
        options: ["Inter-state water disputes", "Centre-State disputes", "State-State disputes", "Dispute involving Govt of India"],
        correctAnswer: 0,
        explanation: "Inter-state water disputes are excluded (Article 262).",
        subtopic: "26.3"
    },
    {
        id: 22,
        question: "22. NJAC Act (2014) was declared unconstitutional by SC in?",
        options: ["First Judges Case", "Second Judges Case", "Third Judges Case", "Fourth Judges Case"],
        correctAnswer: 3,
        explanation: "Fourth Judges Case (2015).",
        subtopic: "26.1"
    },
    {
        id: 23,
        question: "23. Which writ commands a public official to perform his duty?",
        options: ["Certiorari", "Mandamus", "Prohibition", "Quo Warranto"],
        correctAnswer: 1,
        explanation: "Mandamus ('We Command').",
        subtopic: "26.3"
    },
    {
        id: 24,
        question: "24. The 'Advisory Jurisdiction' of SC is taken from which Constitution?",
        options: ["USA", "Canada", "UK", "Australia"],
        correctAnswer: 1,
        explanation: "Canadian Constitution.",
        subtopic: "26.3"
    },
    {
        id: 25,
        question: "25. Who can abolish a State Legislative Council?",
        options: ["President", "Parliament", "Governor", "State Assembly"],
        correctAnswer: 1,
        explanation: "Parliament (on resolution of State Assembly).",
        subtopic: "36.2"
    },
    // ... Fill up to 50 with mixed Qs from Week 2
    {
        id: 26,
        question: "26. The Speaker of Lok Sabha submits his resignation to?",
        options: ["President", "PM", "Deputy Speaker", "CJI"],
        correctAnswer: 2,
        explanation: "Deputy Speaker.",
        subtopic: "22.4"
    },
    {
        id: 27,
        question: "27. Lok Adalats have been given statutory status by?",
        options: ["Legal Services Authorities Act, 1987", "Constitution Act", "Civil Procedure Code", "Supreme Court Order"],
        correctAnswer: 0,
        explanation: "Legal Services Authorities Act, 1987.",
        subtopic: "35.2"
    },
    {
        id: 28,
        question: "28. Who appoints the Chairman of the Public Accounts Committee?",
        options: ["Speaker", "PM", "President", "Leader of Opposition"],
        correctAnswer: 0,
        explanation: "Speaker of Lok Sabha.",
        subtopic: "23.1"
    },
    {
        id: 29,
        question: "29. Minimum age for being a member of Rajya Sabha?",
        options: ["25", "30", "35", "21"],
        correctAnswer: 1,
        explanation: "30 years.",
        subtopic: "22.2"
    },
    {
        id: 30,
        question: "30. Constitution Bench of Supreme Court refers to a bench with?",
        options: ["3 judges", "5 or more judges", "All judges", "Single judge"],
        correctAnswer: 1,
        explanation: "5 or more judges.",
        subtopic: "26.1"
    },
    // Random filling 31-50 with rapid fire Week 2 topics
    { id: 31, question: "31. Salary of HC Judges charged on?", options: ["Consolidated Fund of India", "Consolidated Fund of State", "Contingency Fund", "Grants"], correctAnswer: 1, subtopic: "34.1" },
    { id: 32, question: "32. Pension of HC Judges charged on?", options: ["Consolidated Fund of India", "Consolidated Fund of State", "Both", "None"], correctAnswer: 0, subtopic: "34.1" },
    { id: 33, question: "33. Who is the first Law Officer of India?", options: ["CJI", "Law Minister", "Attorney General", "Solicitor General"], correctAnswer: 2, subtopic: "20.0" },
    { id: 34, question: "34. Can Courts inquire into validity of proceedings in Parliament?", options: ["Yes", "No", "Only if unconstitutional", "Only SC"], correctAnswer: 1, subtopic: "22.9" },
    { id: 35, question: "35. Which House is the 'House of Elders'?", options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "None"], correctAnswer: 1, subtopic: "22.1" },
    { id: 36, question: "36. First hour of every parliamentary sitting is?", options: ["Zero Hour", "Question Hour", "Prayer Hour", "Agenda Hour"], correctAnswer: 1, subtopic: "22.3" },
    { id: 37, question: "37. Zero Hour is an innovation of?", options: ["UK", "India", "USA", "France"], correctAnswer: 1, subtopic: "22.3" },
    { id: 38, question: "38. Who presides over Joint Sitting if Speaker & Deputy Speaker are absent?", options: ["Chairman RS", "Deputy Chairman RS", "Senior Member", "PM"], correctAnswer: 1, subtopic: "22.7" },
    { id: 39, question: "39. Anti-Defection Law is in which Schedule?", options: ["8th", "9th", "10th", "11th"], correctAnswer: 2, subtopic: "22.2" },
    { id: 40, question: "40. Can a Nominated Member join a political party?", options: ["No", "Yes, anytime", "Yes, within 6 months", "Yes, after 6 months"], correctAnswer: 2, subtopic: "22.2" },
    { id: 41, question: "41. Whip is mentioned in?", options: ["Constitution", "Rules of House", "Parliamentary Statute", "Convention"], correctAnswer: 3, subtopic: "22.5" },
    { id: 42, question: "42. Lame Duck Session refers to?", options: ["First session", "Budget session", "Last session of existing Lok Sabha", "Emergency session"], correctAnswer: 2, subtopic: "22.3" },
    { id: 43, question: "43. Vote on Account is for?", options: ["Expenditure", "Income", "Taxation", "Loans"], correctAnswer: 0, subtopic: "22.8" },
    { id: 44, question: "44. Guillotine is applied to?", options: ["Demands for Grants", "Questions", "Motions", "Bills"], correctAnswer: 0, subtopic: "22.8" },
    { id: 45, question: "45. Who appoints the Secretary General of Lok Sabha?", options: ["President", "PM", "Speaker", "Civil Service Board"], correctAnswer: 2, subtopic: "22.4" },
    { id: 46, question: "46. Rajya Sabha has equal power with Lok Sabha in?", options: ["Money Bills", "Constitutional Amendment", "No Conflict Motion", "All bills"], correctAnswer: 1, subtopic: "22.6" },
    { id: 47, question: "47. How many Departmental Standing Committees are there?", options: ["17", "24", "30", "15"], correctAnswer: 1, subtopic: "23.2" },
    { id: 48, question: "48. Integrated Judicial System was adopted from?", options: ["USA", "GOI Act 1935", "UK", "Canada"], correctAnswer: 1, subtopic: "26.1" },
    { id: 49, question: "49. Supreme Court of Calcutta was established by?", options: ["Regulating Act 1773", "Pitts India Act 1784", "Charter Act 1833", "GOI Act 1858"], correctAnswer: 0, subtopic: "26.1" },
    { id: 50, question: "50. Who removes a State Public Service Commission member?", options: ["Governor", "President", "Chairman UPSC", "CM"], correctAnswer: 1, subtopic: "34.1" },

    // ==========================================
    // PAPER 2: WEEK 1 TOPICS (Q51-100)
    // Const Framework, Union & State Executive
    // ==========================================

    {
        id: 51,
        question: "51. The idea of Constituent Assembly was first proposed by?",
        options: ["M.N. Roy", "J.L. Nehru", "Gandhi", "Ambedkar"],
        correctAnswer: 0,
        explanation: "M.N. Roy in 1934.",
        subtopic: "2.1"
    },
    {
        id: 52,
        question: "52. Preamble is?",
        options: ["Justiciable", "Not Justiciable", "Enforceable", "Supreme Law"],
        correctAnswer: 1,
        explanation: "Non-justiciable (Not enforceable in courts).",
        subtopic: "4.1"
    },
    {
        id: 53,
        question: "53. 'Socialist' and 'Secular' were added by?",
        options: ["42nd Amendment", "44th Amendment", "1st Amendment", "86th Amendment"],
        correctAnswer: 0,
        explanation: "42nd Amendment Act, 1976.",
        subtopic: "4.1"
    },
    {
        id: 54,
        question: "54. Article 1 describes India as?",
        options: ["Federal State", "Unitary State", "Union of States", "Confederation"],
        correctAnswer: 2,
        explanation: "Union of States.",
        subtopic: "5.1"
    },
    {
        id: 55,
        question: "55. Citizenship is in which Part of Constitution?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        correctAnswer: 1,
        explanation: "Part II (Articles 5-11).",
        subtopic: "6.1"
    },
    {
        id: 56,
        question: "56. Fundamental Duties were added on recommendation of?",
        options: ["Verma Committee", "Swaran Singh Committee", "Mandal Commission", "Sarkaria Commission"],
        correctAnswer: 1,
        explanation: "Swaran Singh Committee (1976).",
        subtopic: "9.1"
    },
    {
        id: 57,
        question: "57. Which Article deals with 'Abolition of Untouchability'?",
        options: ["16", "17", "18", "23"],
        correctAnswer: 1,
        explanation: "Article 17.",
        subtopic: "7.1"
    },
    {
        id: 58,
        question: "58. Right to Property is now a?",
        options: ["Fundamental Right", "Legal Right", "Moral Right", "Review Right"],
        correctAnswer: 1,
        explanation: "Legal Right (Article 300A).",
        subtopic: "7.1"
    },
    {
        id: 59,
        question: "59. Impeachment of President can be initiated in?",
        options: ["Lok Sabha only", "Rajya Sabha only", "Either House", "Joint Sitting"],
        correctAnswer: 2,
        explanation: "Either House of Parliament.",
        subtopic: "17.1"
    },
    {
        id: 60,
        question: "60. Who appoints the Prime Minister?",
        options: ["Lok Sabha", "President", "Majority Party", "Chief Justice"],
        correctAnswer: 1,
        explanation: "President (Article 75).",
        subtopic: "20.1"
    },
    {
        id: 61,
        question: "61. The President can dissolve Lok Sabha on advice of?",
        options: ["Speaker", "Council of Ministers", "CJI", "VP"],
        correctAnswer: 1,
        explanation: "Council of Ministers headed by PM.",
        subtopic: "17.2"
    },
    {
        id: 62,
        question: "62. Minimum age to be President of India?",
        options: ["30", "35", "25", "40"],
        correctAnswer: 1,
        explanation: "35 years.",
        subtopic: "17.1"
    },
    {
        id: 63,
        question: "63. The Governor holds office during the pleasure of?",
        options: ["PM", "President", "CM", "Parliament"],
        correctAnswer: 1,
        explanation: "President.",
        subtopic: "30.1"
    },
    {
        id: 64,
        question: "64. Article 72 deals with?",
        options: ["Pardoning power of President", "Pardoning power of Governor", "PM appointment", "Attorney General"],
        correctAnswer: 0,
        explanation: "Pardoning power of President.",
        subtopic: "17.2"
    },
    {
        id: 65,
        question: "65. Who is the ex-officio Chairman of NITI Aayog?",
        options: ["President", "PM", "Finance Minister", "Planning Minister"],
        correctAnswer: 1,
        explanation: "Prime Minister.",
        subtopic: "20.1"
    },
    {
        id: 66,
        question: "66. Emergency Provisions are taken from?",
        options: ["Germany (Weimar)", "USA", "Canada", "UK"],
        correctAnswer: 0,
        explanation: "Germany.",
        subtopic: "16.1"
    },
    {
        id: 67,
        question: "67. Financial Emergency is under Article?",
        options: ["352", "356", "360", "365"],
        correctAnswer: 2,
        explanation: "Article 360.",
        subtopic: "16.1"
    },
    {
        id: 68,
        question: "68. Who administers oath to the President?",
        options: ["VP", "PM", "CJI", "Speaker"],
        correctAnswer: 2,
        explanation: "Chief Justice of India.",
        subtopic: "17.1"
    },
    {
        id: 69,
        question: "69. Directive Principles (DPSP) are taken from?",
        options: ["Irish Constitution", "USA", "UK", "France"],
        correctAnswer: 0,
        explanation: "Irish Constitution.",
        subtopic: "8.1"
    },
    {
        id: 70,
        question: "70. Uniform Civil Code is mentioned in Article?",
        options: ["40", "44", "45", "50"],
        correctAnswer: 1,
        explanation: "Article 44.",
        subtopic: "8.1"
    },
    // Filling 71-100 (Rapid Fire Week 1)
    { id: 71, question: "71. Fundamental Rights are justiciable?", options: ["Yes", "No", "Partially", "None"], correctAnswer: 0, subtopic: "7.1" },
    { id: 72, question: "72. Which article is 'Heart and Soul' of Constitution?", options: ["14", "19", "32", "21"], correctAnswer: 2, subtopic: "7.1" },
    { id: 73, question: "73. Who called Preamble the 'Identity Card'?", options: ["Palkhivala", "Nehru", "Ambedkar", "Munshi"], correctAnswer: 0, subtopic: "4.1" },
    { id: 74, question: "74. 10th Schedule added by?", options: ["52nd Amd", "42nd Amd", "44th Amd", "61st Amd"], correctAnswer: 0, subtopic: "3.2" },
    { id: 75, question: "75. Drafting Committee Chairman?", options: ["Ambedkar", "Nehru", "Patel", "Prasad"], correctAnswer: 0, subtopic: "2.1" },
    { id: 76, question: "76. Procedure established by law is from?", options: ["Japan", "USA", "UK", "Russia"], correctAnswer: 0, subtopic: "3.2" },
    { id: 77, question: "77. Federal System with strong centre is from?", options: ["Canada", "USA", "Aus", "UK"], correctAnswer: 0, subtopic: "3.2" },
    { id: 78, question: "78. Concurrent List is from?", options: ["Australia", "Canada", "USA", "UK"], correctAnswer: 0, subtopic: "3.2" },
    { id: 79, question: "79. Article 368 deals with?", options: ["Amendment", "Emergency", "Finance", "Election"], correctAnswer: 0, subtopic: "10.1" },
    { id: 80, question: "80. Basic Structure doctrine case?", options: ["Kesavananda", "Golaknath", "Minerva", "Maneka"], correctAnswer: 0, subtopic: "11.1" },
    { id: 81, question: "81. Who elects Vice President?", options: ["Parliament (All members)", "Parliament (Elected only)", "Parliament + States", "RS only"], correctAnswer: 0, subtopic: "18.1" },
    { id: 82, question: "82. Ordinance making power of President?", options: ["123", "213", "143", "52"], correctAnswer: 0, subtopic: "17.2" },
    { id: 83, question: "83. Max gap between two sessions of Parliament?", options: ["6 months", "3 months", "9 months", "1 year"], correctAnswer: 0, subtopic: "22.3" },
    { id: 84, question: "84. Total number of Schedules in Constitution?", options: ["8", "10", "12", "9"], correctAnswer: 2, subtopic: "3.2" },
    { id: 85, question: "85. How many Fundamental Duties?", options: ["10", "11", "9", "12"], correctAnswer: 1, subtopic: "9.1" },
    { id: 86, question: "86. Right to Education (21A) added by?", options: ["86th Amd", "42nd Amd", "44th Amd", "91st Amd"], correctAnswer: 0, subtopic: "7.1" },
    { id: 87, question: "87. Gram Panchayats organization article?", options: ["40", "41", "42", "43"], correctAnswer: 0, subtopic: "8.1" },
    { id: 88, question: "88. Separation of Judiciary from Executive?", options: ["50", "51", "48", "49"], correctAnswer: 0, subtopic: "8.1" },
    { id: 89, question: "89. Promotion of International Peace?", options: ["51", "50", "52", "45"], correctAnswer: 0, subtopic: "8.1" },
    { id: 90, question: "90. Writ of Habeas Corpus means?", options: ["To have the body", "We command", "By what authority", "To certify"], correctAnswer: 0, subtopic: "7.1" },
    { id: 91, question: "91. Financial Emergency declared how many times?", options: ["Never", "Once", "Twice", "Thrice"], correctAnswer: 0, subtopic: "16.1" },
    { id: 92, question: "92. National Emergency grounds?", options: ["War, External Aggression, Armed Rebellion", "Internal Disturbance", "Economic Crisis", "Political Instability"], correctAnswer: 0, subtopic: "16.1" },
    { id: 93, question: "93. President's Rule article?", options: ["356", "360", "352", "358"], correctAnswer: 0, subtopic: "16.1" },
    { id: 94, question: "94. Council of Ministers is collectively responsible to?", options: ["Lok Sabha", "Parliament", "President", "PM"], correctAnswer: 0, subtopic: "21.2" },
    { id: 95, question: "95. Who appoints the Governor?", options: ["President", "PM", "CJI", "CM"], correctAnswer: 0, subtopic: "30.1" },
    { id: 96, question: "96. Advocate General appointed by?", options: ["Governor", "President", "Chief Justice", "CM"], correctAnswer: 0, subtopic: "30.3" },
    { id: 97, question: "97. Power to grant pardons by Governor is under?", options: ["161", "72", "163", "164"], correctAnswer: 0, subtopic: "30.2" },
    { id: 98, question: "98. State Election Commissioner removed by?", options: ["President", "Governor", "Parliament", "CM"], correctAnswer: 0, subtopic: "30.1" },
    { id: 99, question: "99. Money Bill in State Legislature requires prior recommendation of?", options: ["Governor", "President", "CM", "Speaker"], correctAnswer: 0, subtopic: "30.2" },
    { id: 100, question: "100. 73rd Amendment deals with?", options: ["Panchayati Raj", "Municipalities", "Cooperatives", "Languages"], correctAnswer: 0, subtopic: "38.1" }
];

export default DAY13_MCQS;
