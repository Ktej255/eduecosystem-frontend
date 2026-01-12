
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

export const DAY14_MCQS: MCQ[] = [
    // ==========================================
    // DAY 14: SUNDAY MOCK TEST 2 (100 Questions)
    // Syllabus: Week 1 + Week 2 (Integrated)
    // ==========================================

    {
        id: 1,
        question: "1. The 'Basic Structure' doctrine prevents Parliament from:",
        options: ["Amending the Constitution", "Altering the core features of Constitution", "Increasing number of SC Judges", "Making laws on State List"],
        correctAnswer: 1,
        explanation: "Kesavananda Bharati case: Parliament cannot alter the basic features.",
        subtopic: "11.1"
    },
    {
        id: 2,
        question: "2. Which of the following is NOT a fundamental duty?",
        options: ["To respect the National Flag", "To defend the country", "To vote in elections", "To safeguard public property"],
        correctAnswer: 2,
        explanation: "Voting is a legal right, not a Fundamental Duty (Though suggested by Verma Committee, not in Art 51A).",
        subtopic: "9.1"
    },
    {
        id: 3,
        question: "3. 'Equality before Law' (Art 14) is borrowed from:",
        options: ["USA", "UK", "France", "USSR"],
        correctAnswer: 1,
        explanation: "UK (British Constitution - Rule of Law). 'Equal Protection of Laws' is from USA.",
        subtopic: "7.1"
    },
    {
        id: 4,
        question: "4. Who presides over the joint sitting of State Legislature?",
        options: ["Speaker", "Chairman", "Governor", "None of these"],
        correctAnswer: 3,
        explanation: "There is NO provision for Joint Sitting in State Legislature.",
        subtopic: "36.5"
    },
    {
        id: 5,
        question: "5. The salary of the Speaker of Lok Sabha is fixed by:",
        options: ["President", "Parliament", "Consolidated Fund", "Pay Commission"],
        correctAnswer: 1,
        explanation: "Parliament by Law.",
        subtopic: "22.4"
    },
    {
        id: 6,
        question: "6. Which writ is known as 'Bulwark of Individual Liberty'?",
        options: ["Mandamus", "Habeas Corpus", "Quo Warranto", "Certiorari"],
        correctAnswer: 1,
        explanation: "Habeas Corpus.",
        subtopic: "26.3"
    },
    {
        id: 7,
        question: "7. The President can resign by writing to:",
        options: ["CJI", "Vice-President", "Speaker", "PM"],
        correctAnswer: 1,
        explanation: "Vice-President.",
        subtopic: "17.1"
    },
    {
        id: 8,
        question: "8. Total strength of Lok Sabha is currently fixed based on which census?",
        options: ["1971", "1991", "2001", "2011"],
        correctAnswer: 0,
        explanation: "1971 Census (Seats allocation) - frozen till 2026/following census.",
        subtopic: "22.2"
    },
    {
        id: 9,
        question: "9. Tenth Schedule was added by which Amendment?",
        options: ["42nd", "44th", "52nd", "61st"],
        correctAnswer: 2,
        explanation: "52nd Amendment Act, 1985.",
        subtopic: "3.2"
    },
    {
        id: 10,
        question: "10. Who appoints the Judges of the High Court?",
        options: ["Governor", "Chief Justice of HC", "President", "CJI"],
        correctAnswer: 2,
        explanation: "President.",
        subtopic: "34.1"
    },
    {
        id: 11,
        question: "11. 'Economic Justice' is mentioned in?",
        options: ["Preamble and FR", "Preamble and DPSP", "FR and DPSP", "Preamble only"],
        correctAnswer: 1,
        explanation: "Preamble and Directive Principles (Art 38, 39).",
        subtopic: "4.1"
    },
    {
        id: 12,
        question: "12. Who can remove a High Court Judge?",
        options: ["President", "Governor", "Parliament", "Supreme Court"],
        correctAnswer: 0,
        explanation: "President (after Parliamentary address).",
        subtopic: "34.1"
    },
    {
        id: 13,
        question: "13. The Union Council of Ministers is collectively responsible to?",
        options: ["House of the People", "Council of States", "President", "PM"],
        correctAnswer: 0,
        explanation: "House of the People (Lok Sabha).",
        subtopic: "21.2"
    },
    {
        id: 14,
        question: "14. Which Article gives the President power to grant pardons?",
        options: ["72", "76", "75", "123"],
        correctAnswer: 0,
        explanation: "Article 72.",
        subtopic: "17.2"
    },
    {
        id: 15,
        question: "15. The 'Sarkaria Commission' examined?",
        options: ["Centre-State Relations", "Banking Reforms", "Election Reforms", "Judicial Reforms"],
        correctAnswer: 0,
        explanation: "Centre-State Relations.",
        subtopic: "14.1"
    },
    {
        id: 16,
        question: "16. Article 32 is a Fundamental Right?",
        options: ["Yes", "No", "Legal Right", "Constitutional Right"],
        correctAnswer: 0,
        explanation: "Yes, Right to Constitutional Remedies is a FR.",
        subtopic: "7.1"
    },
    {
        id: 17,
        question: "17. Who is the constitutional head of the State?",
        options: ["CM", "President", "Governor", "Chief Justice"],
        correctAnswer: 2,
        explanation: "Governor.",
        subtopic: "30.1"
    },
    {
        id: 18,
        question: "18. What is the quorum for Rajya Sabha?",
        options: ["25", "50", "100", "30"],
        correctAnswer: 0,
        explanation: "25 (1/10th of 250).",
        subtopic: "22.3"
    },
    {
        id: 19,
        question: "19. The concept of 'Due Process of Law' is a feature of?",
        options: ["UK Constitution", "US Constitution", "Indian Constitution", "French Constitution"],
        correctAnswer: 1,
        explanation: "USA. India follows 'Procedure Established by Law' (though expanded by SC to 'Due Process' in Maneka Gandhi case).",
        subtopic: "26.4"
    },
    {
        id: 20,
        question: "20. Which budget is known as the 'Budget of the Constitution'?",
        options: ["Article 110", "Article 112", "Article 265", "Article 280"],
        correctAnswer: 1,
        explanation: "Annual Financial Statement (Art 112).",
        subtopic: "22.8"
    },
    {
        id: 21,
        question: "21. A Money Bill passed by Lok Sabha is deemed passed by Rajya Sabha if not returned in?",
        options: ["1 month", "14 days", "3 months", "21 days"],
        correctAnswer: 1,
        explanation: "14 days.",
        subtopic: "22.6"
    },
    {
        id: 22,
        question: "22. Who administers oath to the State Council of Ministers?",
        options: ["Governor", "CM", "Speaker", "Chief Justice"],
        correctAnswer: 0,
        explanation: "Governor.",
        subtopic: "31.1"
    },
    {
        id: 23,
        question: "23. 86th Amendment Act dealt with?",
        options: ["Right to Education", "Panchayati Raj", "Anti-Defection", "GST"],
        correctAnswer: 0,
        explanation: "Right to Education (Article 21A) in 2002.",
        subtopic: "7.1"
    },
    {
        id: 24,
        question: "24. Can a Governor be dismissed by the President at any time?",
        options: ["Yes", "No", "Only after inquiry", "Only on impeachment"],
        correctAnswer: 0,
        explanation: "Yes ('Pleasure of President').",
        subtopic: "30.1"
    },
    {
        id: 25,
        question: "25. Who is the head of the State Judiciary?",
        options: ["Governor", "Chief Justice of HC", "Law Minister", "Advocate General"],
        correctAnswer: 1,
        explanation: "Chief Justice of High Court.",
        subtopic: "34.1"
    },
    // Rapid Fire 26-50
    { id: 26, question: "26. Finance Commission article?", options: ["280", "281", "360", "112"], correctAnswer: 0, subtopic: "14.2" },
    { id: 27, question: "27. CAG article?", options: ["148", "76", "165", "324"], correctAnswer: 0, subtopic: "25.1" },
    { id: 28, question: "28. Election Commission article?", options: ["324", "325", "326", "280"], correctAnswer: 0, subtopic: "38.1" },
    { id: 29, question: "29. UPSC members appointed by?", options: ["President", "PM", "Chairman", "Parliament"], correctAnswer: 0, subtopic: "38.1" },
    { id: 30, question: "30. SPSC members appointed by?", options: ["Governor", "President", "CM", "UPSC"], correctAnswer: 0, subtopic: "38.1" },
    { id: 31, question: "31. Removal of SPSC members by?", options: ["President", "Governor", "HC", "CM"], correctAnswer: 0, subtopic: "38.1" },
    { id: 32, question: "32. GST Council Article?", options: ["279A", "268", "269", "270"], correctAnswer: 0, subtopic: "14.1" },
    { id: 33, question: "33. Voting age reduced from 21 to 18 by?", options: ["61st Amd", "42nd Amd", "44th Amd", "86th Amd"], correctAnswer: 0, subtopic: "22.2" },
    { id: 34, question: "34. Co-operative Societies Fundamental Right?", options: ["19(1)(c)", "21", "14", "32"], correctAnswer: 0, subtopic: "7.1" },
    { id: 35, question: "35. Protection of Wildlife DPSP?", options: ["48A", "48", "49", "51A"], correctAnswer: 0, subtopic: "8.1" },
    { id: 36, question: "36. Free Legal Aid DPSP?", options: ["39A", "38", "37", "40"], correctAnswer: 0, subtopic: "8.1" },
    { id: 37, question: "37. President Rule Max duration?", options: ["3 years", "1 year", "6 months", "Indefinite"], correctAnswer: 0, subtopic: "16.1" },
    { id: 38, question: "38. National Emergency approval time?", options: ["1 month", "2 months", "6 months", "14 days"], correctAnswer: 0, subtopic: "16.1" },
    { id: 39, question: "39. Financial Emergency approval time?", options: ["2 months", "1 month", "6 months", "14 days"], correctAnswer: 0, subtopic: "16.1" },
    { id: 40, question: "40. Attorney General right to vote in Parliament?", options: ["No", "Yes", "Only in Joint Sitting", "Tie breaker"], correctAnswer: 0, subtopic: "20.3" },
    { id: 41, question: "41. Lok Sabha Speaker Cast Vote?", options: ["In tie", "Always", "Never", "First instance"], correctAnswer: 0, subtopic: "22.4" },
    { id: 42, question: "42. Who acts as President if President and VP absent?", options: ["CJI", "Senior SC Judge", "Speaker", "PM"], correctAnswer: 0, subtopic: "17.1" },
    { id: 43, question: "43. Impeachment of President Notice period?", options: ["14 days", "1 month", "7 days", "2 months"], correctAnswer: 0, subtopic: "17.1" },
    { id: 44, question: "44. Can President dissolve Rajya Sabha?", options: ["No", "Yes", "On advice of PM", "On advice of Chairman"], correctAnswer: 0, subtopic: "22.2" },
    { id: 45, question: "45. Term of Rajya Sabha member?", options: ["6 years", "5 years", "2 years", "Reference"], correctAnswer: 0, subtopic: "22.2" },
    { id: 46, question: "46. Composition of RS?", options: ["238 + 12", "250 + 2", "543 + 2", "550"], correctAnswer: 0, subtopic: "22.1" },
    { id: 47, question: "47. Max strength of LS?", options: ["552", "545", "500", "250"], correctAnswer: 0, subtopic: "22.1" },
    { id: 48, question: "48. Anglo-Indian nomination abolished by?", options: ["104th Amd", "103rd Amd", "102nd Amd", "101st Amd"], correctAnswer: 0, subtopic: "22.2" },
    { id: 49, question: "49. 102nd Amendment?", options: ["NCBC status", "EWS", "GST", "Land Boundary"], correctAnswer: 0, subtopic: "38.1" },
    { id: 50, question: "50. 103rd Amendment?", options: ["EWS 10%", "NCBC", "GST", "SC/ST"], correctAnswer: 0, subtopic: "7.1" },
    // 51-100 Filler similar high-yield
    { id: 51, question: "51. Which Schedule deals with Languages?", options: ["8th", "7th", "9th", "10th"], correctAnswer: 0, subtopic: "3.2" },
    { id: 52, question: "52. Which Schedule deals with Allocation of Seats in RS?", options: ["4th", "3rd", "2nd", "5th"], correctAnswer: 0, subtopic: "3.2" },
    { id: 53, question: "53. Forms of Oaths are in?", options: ["3rd Schedule", "2nd Schedule", "4th Schedule", "Preamble"], correctAnswer: 0, subtopic: "3.2" },
    { id: 54, question: "54. Anti-Defection Schedule?", options: ["10th", "11th", "12th", "9th"], correctAnswer: 0, subtopic: "3.2" },
    { id: 55, question: "55. Panchayat powers Schedule?", options: ["11th", "12th", "10th", "9th"], correctAnswer: 0, subtopic: "3.2" },
    { id: 56, question: "56. Municipality powers Schedule?", options: ["12th", "11th", "10th", "9th"], correctAnswer: 0, subtopic: "3.2" },
    { id: 57, question: "57. Land Reform Acts protection?", options: ["9th Schedule", "10th Schedule", "8th Schedule", "7th Schedule"], correctAnswer: 0, subtopic: "3.2" },
    { id: 58, question: "58. Division of powers lists?", options: ["7th Schedule", "8th Schedule", "6th Schedule", "5th Schedule"], correctAnswer: 0, subtopic: "3.2" },
    { id: 59, question: "59. Tribal Areas administration (Assam, Meghalaya...)?", options: ["6th Schedule", "5th Schedule", "7th Schedule", "4th Schedule"], correctAnswer: 0, subtopic: "3.2" },
    { id: 60, question: "60. Scheduled Areas administration (General)?", options: ["5th Schedule", "6th Schedule", "8th Schedule", "9th Schedule"], correctAnswer: 0, subtopic: "3.2" },
    { id: 61, question: "61. Right to Sleep is a part of?", options: ["Art 21", "Art 19", "Art 20", "Art 22"], correctAnswer: 0, subtopic: "7.1" },
    { id: 62, question: "62. Right to Privacy is a part of?", options: ["Art 21", "Art 19", "Art 14", "Art 25"], correctAnswer: 0, subtopic: "7.1" },
    { id: 63, question: "63. Right to Internet access?", options: ["Art 19", "Art 21", "Art 14", "Art 32"], correctAnswer: 0, subtopic: "7.1" },
    { id: 64, question: "64. Abolition of Titles?", options: ["Art 18", "Art 17", "Art 19", "Art 20"], correctAnswer: 0, subtopic: "7.1" },
    { id: 65, question: "65. Freedom of Press implicit in?", options: ["19(1)(a)", "19(1)(b)", "21", "14"], correctAnswer: 0, subtopic: "7.1" },
    { id: 66, question: "66. Prohibition of Traffic in Human Beings?", options: ["Art 23", "Art 24", "Art 21", "Art 22"], correctAnswer: 0, subtopic: "7.1" },
    { id: 67, question: "67. Prohibition of Child Labour?", options: ["Art 24", "Art 23", "Art 21A", "Art 45"], correctAnswer: 0, subtopic: "7.1" },
    { id: 68, question: "68. Freedom of Conscience?", options: ["Art 25", "Art 26", "Art 27", "Art 28"], correctAnswer: 0, subtopic: "7.1" },
    { id: 69, question: "69. Protection of interests of minorities?", options: ["Art 29", "Art 30", "Art 28", "Art 27"], correctAnswer: 0, subtopic: "7.1" },
    { id: 70, question: "70. Right of minorities to establish educational institutions?", options: ["Art 30", "Art 29", "Art 28", "Art 21A"], correctAnswer: 0, subtopic: "7.1" },
    { id: 71, question: "71. Who is the first Law Officer of State?", options: ["Advocate General", "Attorney General", "Solicitor General", "Law Minister"], correctAnswer: 0, subtopic: "30.3" },
    { id: 72, question: "72. Which Article deals with State Legislature?", options: ["168", "169", "170", "152"], correctAnswer: 0, subtopic: "36.1" },
    { id: 73, question: "73. Who appoints Chief Minister?", options: ["Governor", "President", "Party", "Speaker"], correctAnswer: 0, subtopic: "31.1" },
    { id: 74, question: "74. Minimum age for Governor?", options: ["35", "30", "25", "40"], correctAnswer: 0, subtopic: "30.1" },
    { id: 75, question: "75. Can a person be Governor of two states?", options: ["Yes", "No", "Only temporarily", "Only UTs"], correctAnswer: 0, subtopic: "30.1" },
    { id: 76, question: "76. Salary of Governor charged on?", options: ["Consolidated Fund of State", "India", "Contingency", "Grants"], correctAnswer: 0, subtopic: "30.1" },
    { id: 77, question: "77. Ordinance of Governor life?", options: ["6 weeks from reassembly", "6 months", "3 months", "1 year"], correctAnswer: 0, subtopic: "31.4" },
    { id: 78, question: "78. Joint Sitting of State Legislature?", options: ["No Provision", "Yes", "For Money Bills", "For Ordinary Bills"], correctAnswer: 0, subtopic: "36.5" },
    { id: 79, question: "79. Creation of Legislative Council Process?", options: ["Assembly Special Resolution + Parl Simple Law", "Parl Amendment", "State Act", "President Order"], correctAnswer: 0, subtopic: "36.2" },
    { id: 80, question: "80. How many states have Vidhan Parishad?", options: ["6", "7", "5", "28"], correctAnswer: 0, subtopic: "36.1" },
    { id: 81, question: "81. Andhra Pradesh Capital?", options: ["Amaravati", "Hyderabad", "Vizag", "Kurnool"], correctAnswer: 0, subtopic: "5.1" },
    { id: 82, question: "82. Language of Supreme Court?", options: ["English", "Hindi", "Both", "Any"], correctAnswer: 0, subtopic: "26.1" },
    { id: 83, question: "83. SC Judges retirement age?", options: ["65", "62", "60", "70"], correctAnswer: 0, subtopic: "26.1" },
    { id: 84, question: "84. HC Judges retirement age?", options: ["62", "65", "60", "58"], correctAnswer: 0, subtopic: "34.1" },
    { id: 85, question: "85. Strength of SC decided by?", options: ["Parliament", "President", "CJI", "Constitution"], correctAnswer: 0, subtopic: "26.1" },
    { id: 86, question: "86. Strength of HC decided by?", options: ["President", "Parliament", "Governor", "CJ HC"], correctAnswer: 0, subtopic: "34.1" },
    { id: 87, question: "87. Separation of Powers is in?", options: ["Basic Structure", "Preamble", "DPSP", "FR"], correctAnswer: 0, subtopic: "11.1" },
    { id: 88, question: "88. Judicial Review source?", options: ["Art 13", "Art 32", "Art 226", "All"], correctAnswer: 3, subtopic: "26.4" },
    { id: 89, question: "89. PIL introduced by?", options: ["Justice PN Bhagwati", "Justice Iyer", "Justice Ray", "Justice Beg"], correctAnswer: 0, subtopic: "26.4" },
    { id: 90, question: "90. Curative Petition concept from?", options: ["Rupa Ashok Hurra case", "Maneka Gandhi case", "Kesavananda case", "Minerva case"], correctAnswer: 0, subtopic: "26.3" },
    { id: 91, question: "91. Largest Committee of Parliament?", options: ["Estimates Committee", "PAC", "CPU", "Ethics"], correctAnswer: 0, subtopic: "23.1" },
    { id: 92, question: "92. Chairman of PAC from?", options: ["Opposition", "Ruling", "RS", "Speaker"], correctAnswer: 0, subtopic: "23.1" },
    { id: 93, question: "93. 'Friend, Philosopher and Guide' of PAC?", options: ["CAG", "Speaker", "Secretary General", "Attorney General"], correctAnswer: 0, subtopic: "25.1" },
    { id: 94, question: "94. Ethics Committee in LS started in?", options: ["2000", "1997", "2005", "1990"], correctAnswer: 0, subtopic: "23.4" },
    { id: 95, question: "95. Committee on Women Empowerment members?", options: ["30 (20 LS + 10 RS)", "22", "15", "45"], correctAnswer: 0, subtopic: "23.3" },
    { id: 96, question: "96. Who is not a member of Zonal Councils?", options: ["President", "Home Minister", "CMs", "Administrator of UTs"], correctAnswer: 0, subtopic: "15.1" },
    { id: 97, question: "97. Chairman of Zonal Councils?", options: ["Home Minister", "PM", "President", "VP"], correctAnswer: 0, subtopic: "15.1" },
    { id: 98, question: "98. Inter-State Council set up by?", options: ["President", "Parliament", "SC", "PM"], correctAnswer: 0, subtopic: "14.3" },
    { id: 99, question: "99. Article 263 deals with?", options: ["Inter-State Council", "Water disputes", "Finance Commission", "GST"], correctAnswer: 0, subtopic: "14.3" },
    { id: 100, question: "100. Punchhi Commission related to?", options: ["Centre-State Relations", "Police Reforms", "Electoral Reforms", "Education"], correctAnswer: 0, subtopic: "14.1" }
];

export default DAY14_MCQS;
