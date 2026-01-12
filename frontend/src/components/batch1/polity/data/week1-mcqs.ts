import { Question } from "../../../qa/testing-data";

export const WEEK1_MCQS: Question[] = [
    // 1
    {
        id: "q1",
        question: "Consider the following statements regarding the amendment of the Indian Constitution:\n1. A Constitutional Amendment Bill can be introduced in either House of Parliament or in the State Legislature.\n2. The President cannot withhold his assent to a Constitutional Amendment Bill.\n3. A joint sitting of both Houses can be summoned to resolve a deadlock over a Constitutional Amendment Bill.\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "1 is incorrect (Cannot be introduced in State Legislature). 3 is incorrect (No joint sitting). 2 is correct (24th Amendment made it obligatory).",
        subtopicId: "11.1"
    },
    // 2
    {
        id: "q2",
        question: "Which of the following provisions of the Constitution require ratification by the legislatures of not less than one-half of the States?\n1. Election of the President and its manner.\n2. Extent of the executive power of the Union and the States.\n3. Fundamental Rights (Part III).\n4. Representation of States in Parliament.",
        options: ["1, 2 and 4 only", "1, 3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 0, // (a)
        explanation: "Fundamental Rights (Part III) can be amended by Special Majority of Parliament only, without state ratification.",
        subtopicId: "11.2"
    },
    // 3
    {
        id: "q3",
        question: "In the context of the 'Basic Structure Doctrine', consider the following statements:\n1. The doctrine was first propounded in the Golaknath case (1967).\n2. The Supreme Court has the power to test the validity of a Constitutional Amendment on the touchstone of Basic Structure.\n3. The doctrine applies retrospectively to all Constitutional Amendments made since 1950.",
        options: ["1 and 2 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "1 is incorrect (Kesavananda Bharati 1973). 3 is incorrect (Applies prospectively from April 24, 1973 - Waman Rao Case).",
        subtopicId: "12.1"
    },
    // 4
    {
        id: "q4",
        question: "With reference to the Parliamentary System in India, which of the following best describes the principle of 'Collective Responsibility'?",
        options: [
            "The Cabinet is responsible to the Rajya Sabha for its policies.",
            "A vote of no-confidence against one Minister leads to the resignation of the entire Council of Ministers.",
            "Ministers are legally responsible for the acts of the President.",
            "The Prime Minister can dismiss a Minister who disagrees with the Cabinet decision."
        ],
        correctAnswer: 1, // (b)
        explanation: "Collective responsibility means they swim or sink together. A no-confidence motion against one acts against the whole.",
        subtopicId: "13.2"
    },
    // 5
    {
        id: "q5",
        question: "Consider the following statements regarding the 'Federal System' in India:\n1. The term 'Federation' has been used in Article 1 of the Constitution to describe India.\n2. The Indian federation is an indestructible union of destructible states.\n3. The Governor’s power to reserve state bills for the President’s consideration is a unitary feature.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "1 is incorrect (Article 1 says 'Union of States'). 2 and 3 are correct.",
        subtopicId: "14.1"
    },
    // 6
    {
        id: "q6",
        question: "Regarding the dissolution of the Lok Sabha, consider the following statements:\n1. A Bill pending in the Rajya Sabha which has not been passed by the Lok Sabha lapses on dissolution.\n2. A Bill passed by both Houses but pending assent of the President does not lapse.\n3. A Bill returned by the President for reconsideration lapses if the Lok Sabha is dissolved before it is reconsidered.",
        options: ["1 and 2 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 2, // (c)
        explanation: "1 is incorrect (Pending in RS and NOT passed by LS does NOT lapse). 2 and 3 are correct.",
        subtopicId: "13.1"
    },
    // 7
    {
        id: "q7",
        question: "Which of the following are considered as 'Basic Features' of the Constitution as per various Supreme Court judgments?\n1. Secularism\n2. Federalism\n3. Judicial Review\n4. Parliamentary System",
        options: ["1 and 3 only", "2 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "All listed features have been declared as Basic Features in various judgments (Bommai, Minerva Mills, etc).",
        subtopicId: "12.2"
    },
    // 8
    {
        id: "q8",
        question: "Consider the following statements regarding the 9th Schedule of the Constitution:\n1. It was added by the First Constitutional Amendment Act, 1951.\n2. Laws placed in the 9th Schedule are completely immune from judicial review under all circumstances.\n3. The I.R. Coelho judgment (2007) upheld the 'Basic Structure' test for 9th Schedule laws.",
        options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "2 is incorrect (Post-1973 laws in 9th Schedule are open to review if they violate Basic Structure - I.R. Coelho case).",
        subtopicId: "11.1"
    },
    // 9
    {
        id: "q9",
        question: "In the context of Centre-State relations, the 'Doctrine of Pith and Substance' is used to:",
        options: [
            "Resolve repugnancy between Central and State laws on the Concurrent List.",
            "Determine the legislative competence of a legislature when a law incidentally encroaches upon a subject in another list.",
            "Interpret the Preamble of the Constitution.",
            "Validate the ordinances issued by the Governor."
        ],
        correctAnswer: 1, // (b)
        explanation: "It examines the true nature and character of the legislation to determine which list it belongs to.",
        subtopicId: "14.2"
    },
    // 10
    {
        id: "q10",
        question: "Which of the following amendments provided for the 'National Judicial Appointments Commission' (NJAC), which was later struck down by the Supreme Court?",
        options: ["97th Amendment Act", "98th Amendment Act", "99th Amendment Act", "100th Amendment Act"],
        correctAnswer: 2, // (c)
        explanation: "The 99th Amendment Act (2014) created NJAC, declared unconstitutional in 2015.",
        subtopicId: "11.3"
    },
    // 11
    {
        id: "q11",
        question: "Consider the following statements regarding the office of the Governor:\n1. The Governor has the security of tenure and cannot be removed before the expiry of 5 years.\n2. The Supreme Court in the BP Singhal case ruled that a change in the central government is not a valid ground for the mass removal of Governors.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 1, // (b) key says 11-b (2 only)
        explanation: "1 is incorrect (Governor holds office during pleasure of President, no security of tenure). 2 is correct.",
        subtopicId: "14.2"
    },
    // 12
    {
        id: "q12",
        question: "The Indian Constitution is described as 'Quasi-Federal'. Which of the following features support this description?\n1. Single Constitution for both Centre and States.\n2. Emergency Provisions.\n3. Appointment of Governor by the Centre.\n4. Independent Judiciary.",
        options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 0, // (a) from key
        explanation: "Independent Judiciary (4) is a Federal feature, not Quasi-Federal (Unitary bias). 1, 2, 3 are unitary features supporting 'Quasi-Federal'.",
        subtopicId: "14.3"
    },
    // 13
    {
        id: "q13",
        question: "With reference to the 'Cabinet Committee System', consider the following statements:\n1. They are mentioned in the Constitution of India.\n2. Non-cabinet ministers cannot be members of these committees.\n3. The Political Affairs Committee is often described as the 'Super-Cabinet'.",
        options: ["1 only", "3 only", "2 and 3 only", "1 and 2 only"],
        correctAnswer: 1, // (b) from key -> 3 only
        explanation: "1 is incorrect (Extra-constitutional). 2 is incorrect (Ministers of State can be members).",
        subtopicId: "13.3"
    },
    // 14
    {
        id: "q14",
        question: "Consider the following statements regarding the amendment of the Constitution under Article 368:\n1. The Bill must be passed in each House by a special majority.\n2. The term 'Total Membership' means the members physically present on the day of voting.\n3. There is no provision for a joint sitting to pass a constitutional amendment bill.",
        options: ["1 and 2 only", "1 and 3 only", "3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) from key -> 1 and 3
        explanation: "2 is incorrect (Total Membership means total authorized strength irrespective of vacancies/absentees).",
        subtopicId: "11.1"
    },
    // 15
    {
        id: "q15",
        question: "Which of the following is/are 'Federal' features of the Indian Constitution?\n1. Bicameralism\n2. Integrated Judiciary\n3. Division of Powers\n4. Rigidity of Constitution",
        options: ["1 and 3 only", "1, 3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 1, // (b) from key -> 1, 3, 4
        explanation: "Integrated Judiciary is a Unitary feature. 1, 3, 4 are Federal.",
        subtopicId: "14.1"
    },
    // 16
    {
        id: "q16",
        question: "In the S.R. Bommai case (1994), the Supreme Court laid down that:\n1. Federalism is a basic feature of the Constitution.\n2. The burden lies on the Centre to prove that relevant material existed to impose President's Rule.\n3. The Assembly cannot be dissolved until the Parliament approves the proclamation under Article 356.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) from key -> all
        explanation: "All statements are guidelines from Bommai case.",
        subtopicId: "14.3"
    },
    // 17
    {
        id: "q17",
        question: "Regarding the Inter-State Council, consider the following statements:\n1. It is a permanent constitutional body established under Article 263.\n2. It is chaired by the Union Home Minister.\n3. Its decisions are binding on the Centre and States.",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "None of the above"],
        correctAnswer: 3, // (d) from key -> None
        explanation: "1 is incorrect (Not permanent, set up by President order. V.P. Singh established it in 1990). 2 is incorrect (PM is Chairman). 3 incorrect (Advisory).",
        subtopicId: "14.2"
    },
    // 18
    {
        id: "q18",
        question: "Consider the following statements regarding the Constitution (106th Amendment) Act, 2023:\n1. It provides for reservation of seats for women in the Lok Sabha and Rajya Sabha.\n2. The reservation will be effective only after the completion of the next delimitation exercise.\n3. The reservation is valid for a period of 15 years from the commencement of the Act.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) from key -> 2 and 3
        explanation: "1 incorrect (Lok Sabha and State Assemblies, NOT Rajya Sabha).",
        subtopicId: "11.3"
    },
    // 19
    {
        id: "q19",
        question: "Which of the following can be amended by a simple majority of the Parliament?\n1. Admission or establishment of new states.\n2. Abolition of Legislative Councils in states.\n3. Use of English language in Parliament.\n4. Directive Principles of State Policy.",
        options: ["1, 2 and 3 only", "1 and 2 only", "3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 0, // (a)
        explanation: "DPSP require Special Majority.",
        subtopicId: "11.2"
    },
    // 20
    {
        id: "q20",
        question: "The 'Doctrine of Colourable Legislation' signifies that:",
        options: [
            "The Legislature cannot delegate its essential functions to the Executive.",
            "What cannot be done directly cannot be done indirectly by the Legislature.",
            "State laws are void if they conflict with Central laws on Concurrent subjects.",
            "Taxation laws cannot be retrospective in nature."
        ],
        correctAnswer: 1, // (b)
        explanation: "It limits the competency of the legislature.",
        subtopicId: "11.3"
    },
    // 21
    {
        id: "q21",
        question: "Consider the following statements regarding the 'Shadow Cabinet':\n1. It is a unique feature of the American Presidential System.\n2. In India, there is no formal recognition of a Shadow Cabinet.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 1, // (b)
        explanation: "1 is incorrect (It is British feature). 2 is correct.",
        subtopicId: "13.3"
    },
    // 22
    {
        id: "q22",
        question: "Which of the following pairs is/are correctly matched regarding the Amendment procedure?\n1. Creation of UTs: Simple Majority\n2. Election of President: Special Majority + Ratification\n3. Fundamental Rights: Special Majority",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) from key -> all
        explanation: "All are correctly matched.",
        subtopicId: "11.2"
    },
    // 23
    {
        id: "q23",
        question: "In the context of the Parliamentary System, the 'office of profit' disqualification is designed to:",
        options: [
            "Prevent corruption among members.",
            "Maintain the separation of powers between the Executive and the Legislature.",
            "Ensure the financial stability of the Parliamentarians.",
            "Prevent criminalization of politics."
        ],
        correctAnswer: 1, // (b)
        explanation: "It ensures MPs/MLAs remain independent of the Executive (who might offer profitable posts).",
        subtopicId: "13.1"
    },
    // 24
    {
        id: "q24",
        question: "Consider the following statements regarding Article 368:\n1. It deals with the power of Parliament to amend the Constitution and its procedure.\n2. The 24th Amendment Act, 1971 made it obligatory for the President to give his assent to a Constitutional Amendment Bill.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c)
        explanation: "Both are correct.",
        subtopicId: "11.1"
    },
    // 25
    {
        id: "q25",
        question: "Which of the following cases is related to the 'Basic Structure' doctrine?\n1. Minerva Mills case\n2. Waman Rao case\n3. Kihoto Hollohan case",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All these cases reaffirmed the Basic Structure doctrine.",
        subtopicId: "12.1"
    },
    // 26
    {
        id: "q26",
        question: "Regarding the 'Zonal Councils', consider the following:\n1. They are constitutional bodies established under Article 263.\n2. The Union Home Minister is the common chairman of all Zonal Councils.\n3. They aim to promote cooperation and coordination between states, union territories, and the Centre.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) -> 2 and 3
        explanation: "1 is incorrect (Statutory bodies under States Reorganisation Act 1956).",
        subtopicId: "14.2"
    },
    // 27
    {
        id: "q27",
        question: "The Constitution of India empowers the Parliament to form new States and alter the areas, boundaries or names of existing States under Article 3. In this context, consider the following:\n1. A Bill for this purpose can be introduced in the Parliament only with the prior recommendation of the President.\n2. The President must refer the Bill to the State Legislature concerned for expressing its views within a specified period.\n3. The Parliament is bound by the views of the State Legislature.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, 3"],
        correctAnswer: 0, // (a) -> 1 and 2
        explanation: "3 is incorrect (Parliament is NOT bound).",
        subtopicId: "14.1"
    },
    // 28
    {
        id: "q28",
        question: "Which of the following unitary features are present in the Indian Constitution?\n1. Single Citizenship\n2. Flexibility of the Constitution\n3. Integrated Judiciary\n4. Appointment of State Governor by the Centre",
        options: ["1, 3 and 4 only", "1 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d) -> all
        explanation: "All are Unitary features.",
        subtopicId: "14.2"
    },
    // 29
    {
        id: "q29",
        question: "Consider the following statements regarding the 'Vote on Account':\n1. It allows the Government to withdraw money from the Consolidated Fund of India for a limited period before the passing of the Appropriation Bill.\n2. It is passed after the general discussion on the Budget is over.\n3. It usually covers the expenditure for two months.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) -> all
        explanation: "All statements are correct.",
        subtopicId: "13.2"
    },
    // 30
    {
        id: "q30",
        question: "With reference to the 'Doctrine of Harmonious Construction', consider the following statements:\n1. It is applied when there is a conflict between two different provisions of the Constitution.\n2. It aims to give effect to both provisions as much as possible.\n3. It was applied in the Shankari Prasad case regarding Fundamental Rights and DPSP.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) -> All
        explanation: "Correct.",
        subtopicId: "11.3"
    },
    // 31
    {
        id: "q31",
        question: "Consider the following statements regarding the President’s power to veto Constitutional Amendment Bills:\n1. The President can exercise a pocket veto but not a suspensive veto.\n2. The President has no veto power in case of Constitutional Amendment Bills.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 1, // (b)
        explanation: "President must give assent. No veto power.",
        subtopicId: "11.1"
    },
    // 32
    {
        id: "q32",
        question: "Which of the following is NOT a feature of the Parliamentary Government in India?",
        options: ["Presence of nominal and real executives", "Majority party rule", "Dissolution of the Rajya Sabha", "Leadership of the Prime Minister"],
        correctAnswer: 2, // (c)
        explanation: "Rajya Sabha is a permanent house and not subject to dissolution.",
        subtopicId: "13.1"
    },
    // 33
    {
        id: "q33",
        question: "In the context of the 'anti-defection law' (10th Schedule), consider the following statements:\n1. The decision of the Speaker regarding disqualification is subject to judicial review.\n2. The law does not apply if a member goes out of his party as a result of a merger of the party with another party.\n3. A nominated member is disqualified if he joins any political party before the expiry of six months.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a) -> 1 and 2
        explanation: "3 is incorrect (Disqualified if joins AFTER 6 months).",
        subtopicId: "13.3"
    },
    // 34
    {
        id: "q34",
        question: "The provision of 'Joint Sitting' of the Parliament is available for:\n1. Ordinary Bills\n2. Money Bills\n3. Constitutional Amendment Bills\n4. Financial Bills (Category I)",
        options: ["1 and 4 only", "1, 2 and 4 only", "1 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 0, // (a) -> 1 and 4
        explanation: "Not available for Money Bills or Const. Amendment Bills.",
        subtopicId: "13.2"
    },
    // 35
    {
        id: "q35",
        question: "With reference to the 'Sarkaria Commission' on Centre-State relations, which of the following recommendations were made?\n1. Establishment of a permanent Inter-State Council.\n2. Abolition of the office of Governor.\n3. Strengthening of All India Services.",
        options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) -> 1 and 3
        explanation: "It rejected the demand for abolition of Governor office.",
        subtopicId: "14.3"
    },
    // 36
    {
        id: "q36",
        question: "Consider the following statements regarding the impact of National Emergency (Article 352) on Centre-State relations:\n1. The Centre can give executive directions to a State on 'any' matter.\n2. The Parliament becomes empowered to make laws on any subject mentioned in the State List.\n3. The President can modify the constitutional distribution of revenues between the Centre and the States.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All are correct consequences.",
        subtopicId: "14.2"
    },
    // 37
    {
        id: "q37",
        question: "Which of the following amendments substituted the words \"armed rebellion\" for \"internal disturbance\" in Article 352?",
        options: ["42nd Amendment Act", "44th Amendment Act", "52nd Amendment Act", "61st Amendment Act"],
        correctAnswer: 1, // (b)
        explanation: "44th Amendment Act 1978.",
        subtopicId: "11.2"
    },
    // 38
    {
        id: "q38",
        question: "Consider the following statements regarding the 'Motion of Thanks':\n1. It is addressed by the President at the commencement of the first session after each general election and the first session of every fiscal year.\n2. The motion must be passed in the Lok Sabha only.\n3. Defeat of the motion implies the defeat of the government.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 2, // (c) -> 1 and 3
        explanation: "2 is incorrect (Must be passed in BOTH houses).",
        subtopicId: "13.2"
    },
    // 39
    {
        id: "q39",
        question: "In the context of recent Supreme Court observations (2024) regarding the Governor's power under Article 200:\n1. If the Governor withholds assent to a Bill, he must return the Bill to the Legislature.\n2. The Governor cannot kill a Bill by simply withholding assent without returning it.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c)
        explanation: "SC ruled Governor must return the bill if assent withheld.",
        subtopicId: "14.2"
    },
    // 40
    {
        id: "q40",
        question: "The 'Doctrine of Severability' is related to:",
        options: [
            "Separation of powers between Centre and State.",
            "Separation of the void part of a law from the valid part if it violates Fundamental Rights.",
            "Division of subjects in the Seventh Schedule.",
            "Removal of Judges of the Supreme Court."
        ],
        correctAnswer: 1, // (b)
        explanation: "Article 13.",
        subtopicId: "12.2"
    },
    // 41
    {
        id: "q41",
        question: "Which of the following features of the Indian Constitution were borrowed from the Canadian Constitution?\n1. Federation with a strong Centre.\n2. Vesting of residuary powers in the Centre.\n3. Appointment of State Governors by the Centre.\n4. Advisory jurisdiction of the Supreme Court.",
        options: ["1 and 2 only", "1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "All are borrowed from Canada.",
        subtopicId: "14.1"
    },
    // 42
    {
        id: "q42",
        question: "Consider the following statements regarding 'Department Related Standing Committees' (DRSCs):\n1. Their main function is to secure the accountability of the Executive to the Parliament.\n2. They consider the demands for grants of the concerned ministries.\n3. A Minister cannot be a member of these committees.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) -> all
        explanation: "Correct.",
        subtopicId: "13.2"
    },
    // 43
    {
        id: "q43",
        question: "Regarding the 'Basic Structure', the Supreme Court has declared which of the following as part of it?\n1. Rule of Law\n2. Separation of Powers\n3. Free and fair elections\n4. Welfare State",
        options: ["1, 2 and 3 only", "1, 3 and 4 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d) -> all
        explanation: "All are basic features.",
        subtopicId: "12.2"
    },
    // 44
    {
        id: "q44",
        question: "The 'GST Council' (Article 279A) is a:",
        options: ["Statutory Body", "Constitutional Body", "Extra-Constitutional Body", "Advisory Body formed by Executive Resolution"],
        correctAnswer: 1, // (b)
        explanation: "Article 279A makes it a constitutional body.",
        subtopicId: "11.2"
    },
    // 45
    {
        id: "q45",
        question: "Which schedule of the Constitution deals with the allocation of powers and functions between the Union and the States?",
        options: ["Sixth Schedule", "Seventh Schedule", "Eighth Schedule", "Ninth Schedule"],
        correctAnswer: 1, // (b)
        explanation: "7th Schedule (Union, State, Concurrent lists).",
        subtopicId: "14.1"
    },
    // 46
    {
        id: "q46",
        question: "Consider the following statements regarding the 'Legislative Council' (Vidhan Parishad):\n1. Parliament can abolish or create a Legislative Council in a state by a simple majority.\n2. The resolution for creation/abolition must be passed by the State Assembly by a special majority.\n3. This process requires a Constitutional Amendment under Article 368.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a) -> 1 and 2
        explanation: "3 is incorrect (Does NOT require amendment under Art 368 - Art 169).",
        subtopicId: "13.1"
    },
    // 47
    {
        id: "q47",
        question: "In the Indian Parliamentary System, the 'Leader of the Opposition' is:\n1. A statutory office mentioned in the Salary and Allowances of Leaders of Opposition in Parliament Act, 1977.\n2. Entitled to the salary and allowances equivalent to a Cabinet Minister.\n3. Recognized only if the party secures at least 10% of the total seats.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d) -> all
        explanation: "All are correct.",
        subtopicId: "13.3"
    },
    // 48
    {
        id: "q48",
        question: "Which of the following bills must be passed by each House of Parliament separately, with no provision for a joint sitting?\n1. Money Bill\n2. Constitution Amendment Bill\n3. Financial Bill (Category II)",
        options: ["1 and 2 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) -> 2 only? Wait. Money bills don't have joint sitting but aren't passed by RS strictly speaking (RS only recommends).
        // Key says (b) -> 2 only. 
        // Money bills: RS cannot reject, only delay 14 days. So "passed by each house separately" isn't strictly true in the sense of equal power.
        // Const Amendment: Must be passed separately.
        // Fin Bill II: Treated as ordinary bill, joint sitting possible.
        // So 2 is the best answer.
        explanation: "Money bills don't require passage by RS (deemed passed). Fin Bill II allows joint sitting. Const Amendment requires separate passage.",
        subtopicId: "11.1"
    },
    // 49
    {
        id: "q49",
        question: "Consider the following statements regarding 'Delegated Legislation':\n1. It refers to laws made by the Executive under the authority of an Act of Parliament.\n2. The Committee on Subordinate Legislation examines whether the powers delegated are being properly exercised.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c)
        explanation: "Both are correct.",
        subtopicId: "13.2"
    },
    // 50
    {
        id: "q50",
        question: "The concept of 'Judicial Review' in India is:",
        options: [
            "Explicitly mentioned in Article 13.",
            "Derived from the US Constitution but is narrower in scope.",
            "Part of the Basic Structure of the Constitution.",
            "All of the above."
        ],
        correctAnswer: 3, // (d)
        explanation: "Implicitly in 13 (laws inconsistent are void), borrowed from US but narrower (procedure established by law vs due process), and basic structure.",
        subtopicId: "12.1"
    },
    // 51
    {
        id: "q51",
        question: "Regarding the 'Consolidated Fund of India', consider the following:\n1. All revenues received by the Government of India flow into it.\n2. No money can be withdrawn from this Fund without parliamentary authorization.\n3. Public Account of India is a part of the Consolidated Fund.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a) -> 1 and 2
        explanation: "3 is incorrect (Public Account is separate, Article 266(2)).",
        subtopicId: "13.2"
    },
    // 52
    {
        id: "q52",
        question: "Which of the following statements about the 'Prime Minister's Office' (PMO) is correct?",
        options: [
            "It is a constitutional body.",
            "It is a statutory body created by an Act of Parliament.",
            "It is an extra-constitutional body given status by the Allocation of Business Rules.",
            "It was created by the 42nd Amendment Act."
        ],
        correctAnswer: 2, // (c)
        explanation: "It is an extra-constitutional body.",
        subtopicId: "13.1"
    },
    // 53
    {
        id: "q53",
        question: "Consider the following statements regarding the 'Starred Question' in Parliament:\n1. It requires an oral answer.\n2. Supplementary questions can follow.\n3. It is distinguished by an asterisk.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All are correct.",
        subtopicId: "13.2"
    },
    // 54
    {
        id: "q54",
        question: "The 'Doctrine of Territorial Nexus' is relevant in the context of:",
        options: [
            "Extra-territorial operation of Parliamentary laws.",
            "Dispute between two states over territory.",
            "Governor's power in Scheduled Areas.",
            "Application of International Treaties."
        ],
        correctAnswer: 0, // (a)
        explanation: "Article 245. Laws made by Parliament can have extra-territorial operation. State laws cannot, unless territorial nexus exists.",
        subtopicId: "14.1"
    },
    // 55
    {
        id: "q55",
        question: "Which of the following is/are the correct implications of the 'Parliamentary Sovereignty' in India?\n1. Parliament can amend any part of the Constitution without any limitation.\n2. Laws made by Parliament are not subject to Judicial Review.\n3. Parliament is the supreme legislative body.",
        options: ["1 and 2 only", "3 only", "1 and 3 only", "None of the above"],
        correctAnswer: 1, // (b) -> 3 only
        explanation: "1 incorrect (Basic Structure limitation). 2 incorrect (Subject to review). 3 correct (Supreme legislative body within constitutional limits).",
        subtopicId: "13.1"
    },
    // 56
    {
        id: "q56",
        question: "Consider the following regarding 'Fiscal Federalism' in India:\n1. The Finance Commission is a quasi-judicial body.\n2. The recommendations of the Finance Commission are binding on the Government.\n3. Surcharges on taxes are shared with the States.",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a) -> 1 only
        explanation: "2 incorrect (Advisory). 3 incorrect (Surcharges NOT shared, Art 271).",
        subtopicId: "14.2"
    },
    // 57
    {
        id: "q57",
        question: "The 'Residuary Powers' of legislation in India:\n1. Are vested in the Parliament (Article 248).\n2. Include the power to levy taxes not mentioned in any of the three lists.\n3. In the US and Australia, these powers are vested in the States.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, 3"],
        correctAnswer: 3, // (d) -> all
        explanation: "All statements are correct.",
        subtopicId: "14.1"
    },
    // 58
    {
        id: "q58",
        question: "Which of the following amendments restricted the size of the Council of Ministers to 15% of the total strength of the Lok Sabha?",
        options: ["86th Amendment Act", "91st Amendment Act", "97th Amendment Act", "102nd Amendment Act"],
        correctAnswer: 1, // (b)
        explanation: "91st Amendment Act, 2003.",
        subtopicId: "13.1"
    },
    // 59
    {
        id: "q59",
        question: "Consider the following statements regarding 'Special Majority' under Article 368:\n1. It is required for the impeachment of the President.\n2. It is required for the removal of Supreme Court Judges.\n3. It is required for the amendment of Directive Principles of State Policy.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) -> 2 and 3
        explanation: "1 is incorrect (Impeachment under Art 61 requires different Special Majority - 2/3 of TOTAL, not just present & voting). Art 368 special majority is for 2 and 3.",
        subtopicId: "11.1"
    },
    // 60
    {
        id: "q60",
        question: "With reference to the 'Office of Profit' controversy and recent developments:\n1. The Constitution defines the term 'Office of Profit' clearly under Article 102.\n2. Parliament has enacted the Parliament (Prevention of Disqualification) Act, 1959 to exempt certain posts from this disqualification.\n3. Holding an office of profit invites disqualification for being chosen as, and for being, a member of Parliament.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, 3"],
        correctAnswer: 1, // (b) -> 2 and 3
        explanation: "1 is incorrect (Constitution mentions it but does NOT define it).",
        subtopicId: "13.1"
    }
];
