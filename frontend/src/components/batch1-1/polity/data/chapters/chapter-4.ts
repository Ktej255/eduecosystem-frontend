import { LevelData, ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 4)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch4-l1-q1",
        question: "The Constitution of India is the lengthiest written constitution in the world. Originally (1949), how many Articles and Schedules did it contain?",
        options: ["395 Articles and 8 Schedules", "395 Articles and 10 Schedules", "448 Articles and 12 Schedules", "395 Articles and 12 Schedules"],
        correctAnswerIndex: 0,
        explanation: "Originally (1949), the Constitution contained a Preamble, 395 Articles (divided into 22 Parts) and 8 Schedules."
    },
    {
        id: "ch4-l1-q2",
        question: "Which Amendment Act is known as the \"Mini-Constitution\" due to the large number of changes it made?",
        options: ["24th Amendment Act, 1971", "42nd Amendment Act, 1976", "44th Amendment Act, 1978", "73rd Amendment Act, 1992"],
        correctAnswerIndex: 1,
        explanation: "The 42nd Amendment Act of 1976 is known as the \"Mini-Constitution\"."
    },
    {
        id: "ch4-l1-q3",
        question: "The structural part of the Constitution is, to a large extent, derived from:",
        options: ["The Government of India Act of 1919", "The Government of India Act of 1935", "The British Constitution", "The American Constitution"],
        correctAnswerIndex: 1,
        explanation: "The structural part is largely derived from the Government of India Act of 1935."
    },
    {
        id: "ch4-l1-q4",
        question: "The philosophical part of the Constitution (Fundamental Rights and Directive Principles) derives its inspiration from which two constitutions respectively?",
        options: ["American and Irish", "Irish and American", "British and American", "French and Irish"],
        correctAnswerIndex: 0,
        explanation: "Fundamental Rights from the American Constitution; Directive Principles from the Irish Constitution."
    },
    {
        id: "ch4-l1-q5",
        question: "The political part of the Constitution (Cabinet Government, relations between executive and legislature) is largely drawn from:",
        options: ["American Constitution", "British Constitution", "Canadian Constitution", "Australian Constitution"],
        correctAnswerIndex: 1,
        explanation: "The political part is largely drawn from the British Constitution."
    },
    {
        id: "ch4-l1-q6",
        question: "The Constitution of India establishes a federal system of government. Which of the following is NOT a federal feature mentioned in the text?",
        options: ["Two Governments", "Division of Powers", "Independent Judiciary", "Single Citizenship"],
        correctAnswerIndex: 3,
        explanation: "Single Citizenship is a Unitary feature. Federal features include Two Govts, Division of Powers, Written Constitution, Supremacy of Constitution, Rigidity, Independent Judiciary, Bicameralism."
    },
    {
        id: "ch4-l1-q7",
        question: "The Indian Constitution also possesses unitary or non-federal features. Which of the following is one such feature?",
        options: ["Written Constitution", "Rigidity of Constitution", "All-India Services", "Bicameralism"],
        correctAnswerIndex: 2,
        explanation: "All-India Services is a unitary feature."
    },
    {
        id: "ch4-l1-q8",
        question: "Article 1 of the Constitution describes India as a:",
        options: ["Federation of States", "Union of States", "Confederation of States", "United States of India"],
        correctAnswerIndex: 1,
        explanation: "Article 1 describes India as a 'Union of States'."
    },
    {
        id: "ch4-l1-q9",
        question: "The Parliamentary system is also known as the \"Westminster\" model of government. It is based on the principle of:",
        options: ["Separation of powers between executive and legislature", "Cooperation and coordination between legislative and executive organs", "Fusion of judiciary and executive", "Absolute power of the Parliament"],
        correctAnswerIndex: 1,
        explanation: "It is based on the principle of cooperation and coordination between the legislative and executive organs."
    },
    {
        id: "ch4-l1-q10",
        question: "Which of the following is NOT a feature of the Parliamentary government in India?",
        options: ["Presence of nominal and real executives", "Majority party rule", "Dissolution of the Lower House", "Indestructibility of states"],
        correctAnswerIndex: 3,
        explanation: "'Indestructibility of states' is a feature of the US Federal system, not the Indian Parliamentary system."
    },
    {
        id: "ch4-l1-q11",
        question: "The doctrine of \"Sovereignty of Parliament\" is associated with the ______ Parliament, while the principle of \"Judicial Supremacy\" is associated with the ______ Supreme Court.",
        options: ["American; British", "British; American", "Indian; British", "French; American"],
        correctAnswerIndex: 1,
        explanation: "British Parliament (Sovereignty) and American Supreme Court (Judicial Supremacy)."
    },
    {
        id: "ch4-l1-q12",
        question: "The scope of judicial review power of the Supreme Court of India is ______ than that of the US Supreme Court.",
        options: ["Wider", "Narrower", "Same", "Unlimited"],
        correctAnswerIndex: 1,
        explanation: "It is narrower because the US Constitution provides for 'Due Process of Law' vs 'Procedure Established by Law' in India (originally)."
    },
    {
        id: "ch4-l1-q13",
        question: "This difference in judicial review exists because the American Constitution provides for \"Due Process of Law\" while the Indian Constitution (Article 21) provides for:",
        options: ["Procedure Established by Law", "Rule of Law", "Equality before Law", "Equal Protection of Laws"],
        correctAnswerIndex: 0,
        explanation: "India follows 'Procedure Established by Law' (Art 21)."
    },
    {
        id: "ch4-l1-q14",
        question: "Part III of the Constitution guarantees how many Fundamental Rights (currently)?",
        options: ["Five", "Six", "Seven", "Eight"],
        correctAnswerIndex: 1,
        explanation: "Currently, there are Six Fundamental Rights."
    },
    {
        id: "ch4-l1-q15",
        question: "The Right to Property was deleted from the list of Fundamental Rights by which Amendment Act?",
        options: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "97th Amendment Act, 2011"],
        correctAnswerIndex: 1,
        explanation: "Deleted by the 44th Amendment Act of 1978."
    },
    {
        id: "ch4-l1-q16",
        question: "Dr. B.R. Ambedkar described the Directive Principles of State Policy (Part IV) as a ______ feature of the Indian Constitution.",
        options: ["Fundamental", "Novel", "Basic", "Critical"],
        correctAnswerIndex: 1,
        explanation: "He described it as a 'novel' feature."
    },
    {
        id: "ch4-l1-q17",
        question: "The Directive Principles are meant for promoting the ideal of:",
        options: ["Political Democracy", "Social and Economic Democracy", "Religious Freedom", "International Peace"],
        correctAnswerIndex: 1,
        explanation: "They promote the ideal of social and economic democracy."
    },
    {
        id: "ch4-l1-q18",
        question: "The Fundamental Duties were added to the Constitution by the 42nd Amendment Act of 1976 on the recommendation of which committee?",
        options: ["Verma Committee", "Swaran Singh Committee", "Sarkaria Commission", "Santhanam Committee"],
        correctAnswerIndex: 1,
        explanation: "Swaran Singh Committee."
    },
    {
        id: "ch4-l1-q19",
        question: "How many Fundamental Duties are currently listed in Part IV-A of the Constitution?",
        options: ["10", "11", "12", "9"],
        correctAnswerIndex: 1,
        explanation: "Currently 11 (One was added by 86th AA, 2002)."
    },
    {
        id: "ch4-l1-q20",
        question: "The term 'Secular' was added to the Preamble of the Constitution by the:",
        options: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "1st Amendment Act, 1951", "86th Amendment Act, 2002"],
        correctAnswerIndex: 0,
        explanation: "Added by the 42nd Amendment Act, 1976."
    },
    {
        id: "ch4-l1-q21",
        question: "The Indian Constitution embodies the ______ concept of secularism.",
        options: ["Negative (complete separation of church and state)", "Positive (giving equal respect to all religions)", "Neutral", "Atheistic"],
        correctAnswerIndex: 1,
        explanation: "Positive concept: giving equal respect to all religions or protecting all religions equally."
    },
    {
        id: "ch4-l1-q22",
        question: "The voting age was reduced from 21 to 18 years by which Constitutional Amendment Act?",
        options: ["42nd Amendment Act, 1976", "52nd Amendment Act, 1985", "61st Amendment Act, 1988", "69th Amendment Act, 1991"],
        correctAnswerIndex: 2,
        explanation: "61st Constitutional Amendment Act, 1988."
    },
    {
        id: "ch4-l1-q23",
        question: "Unlike the USA, where a citizen is a citizen of the USA and a citizen of his state, India has:",
        options: ["Dual Citizenship", "Single Citizenship", "Triple Citizenship (Local, State, National)", "No Citizenship concept"],
        correctAnswerIndex: 1,
        explanation: "India provides for Single Citizenship."
    },
    {
        id: "ch4-l1-q24",
        question: "The Constitution establishes certain independent bodies to ensure the democratic system. Which of the following is NOT one such body mentioned in this chapter?",
        options: ["Election Commission", "Comptroller and Auditor General (CAG)", "Union Public Service Commission (UPSC)", "Central Bureau of Investigation (CBI)"],
        correctAnswerIndex: 3,
        explanation: "CBI is not a constitutional independent body mentioned in this context (it is statutory/executive)."
    },
    {
        id: "ch4-l1-q25",
        question: "The Comptroller and Auditor General (CAG) acts as the guardian of:",
        options: ["Fundamental Rights", "Public Purse", "Constitution", "Civil Services"],
        correctAnswerIndex: 1,
        explanation: "CAG is the guardian of the public purse."
    },
    {
        id: "ch4-l1-q26",
        question: "The Constitution provides for three types of emergencies. Which of the following is NOT one of them?",
        options: ["National Emergency (Article 352)", "State Emergency / President’s Rule (Article 356)", "Financial Emergency (Article 360)", "Health Emergency (Article 365)"],
        correctAnswerIndex: 3,
        explanation: "There is no 'Health Emergency'. Art 365 relates to failure to comply with Centre's direction."
    },
    {
        id: "ch4-l1-q27",
        question: "During an emergency, the Central Government becomes all-powerful and the states go into total control of the Centre. This converts the federal structure into a ______ one without a formal amendment.",
        options: ["Confederal", "Unitary", "Quasi-federal", "Autocratic"],
        correctAnswerIndex: 1,
        explanation: "It converts the federal structure into a unitary one."
    },
    {
        id: "ch4-l1-q28",
        question: "Originally, the Indian Constitution provided for a dual polity. Which Amendment Act gave constitutional recognition to the \"Panchayats\" (Rural Local Government)?",
        options: ["73rd Amendment Act, 1992", "74th Amendment Act, 1992", "42nd Amendment Act, 1976", "44th Amendment Act, 1978"],
        correctAnswerIndex: 0,
        explanation: "73rd Amendment Act, 1992."
    },
    {
        id: "ch4-l1-q29",
        question: "Which Amendment Act gave constitutional recognition to the \"Municipalities\" (Urban Local Government)?",
        options: ["73rd Amendment Act, 1992", "74th Amendment Act, 1992", "69th Amendment Act, 1991", "97th Amendment Act, 2011"],
        correctAnswerIndex: 1,
        explanation: "74th Amendment Act, 1992."
    },
    {
        id: "ch4-l1-q30",
        question: "Part IX-A of the Constitution was added by the 74th Amendment Act. Which Schedule was added by the same Act?",
        options: ["Schedule 10", "Schedule 11", "Schedule 12", "Schedule 9"],
        correctAnswerIndex: 2,
        explanation: "Schedule 12 was added by the 74th AA."
    },
    {
        id: "ch4-l1-q31",
        question: "The 97th Constitutional Amendment Act of 2011 gave a constitutional status and protection to:",
        options: ["Co-operative Societies", "Non-Governmental Organizations (NGOs)", "Self-Help Groups (SHGs)", "Trade Unions"],
        correctAnswerIndex: 0,
        explanation: "Co-operative Societies."
    },
    {
        id: "ch4-l1-q32",
        question: "The 97th Amendment made the right to form co-operative societies a Fundamental Right under which Article?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correctAnswerIndex: 1,
        explanation: "Article 19."
    },
    {
        id: "ch4-l1-q33",
        question: "It also included a new Directive Principle of State Policy on the promotion of co-operative societies under Article:",
        options: ["43-A", "43-B", "45", "39-A"],
        correctAnswerIndex: 1,
        explanation: "Article 43-B."
    },
    {
        id: "ch4-l1-q34",
        question: "A new Part was added to the Constitution regarding Co-operative Societies. Which Part is it?",
        options: ["Part IX-A", "Part IX-B", "Part XIV-A", "Part IV-A"],
        correctAnswerIndex: 1,
        explanation: "Part IX-B."
    },
    {
        id: "ch4-l1-q35",
        question: "The Constitution of India is ______ rigid and ______ flexible.",
        options: ["Fully; Fully", "Partly; Partly", "Neither; Nor", "Only; Not"],
        correctAnswerIndex: 1,
        explanation: "It is partly rigid and partly flexible (a blend)."
    }
];

// Level 2: The Conceptual Bridge
const LEVEL_2_QUESTIONS = [
    {
        question: "K.C. Wheare described the Indian Constitution as \"Quasi-Federal\". This implies that:",
        options: ["The states have more power than the Centre.", "It is a unitary state with subsidiary federal features.", "It is a federal state with subsidiary unitary features.", "It is a confederation where states have the right to secede."],
        correctAnswerIndex: 1,
        explanation: "K.C. Wheare's description implies 'a unitary state with subsidiary federal features rather than a federal state with subsidiary unitary features'."
    },
    {
        question: "Which of the following provisions of the Constitution represents a \"Unitary Bias\" (tilting power towards the Centre)?\n1. Single Constitution for both Centre and States.\n2. Appointment of Governor by the Centre.\n3. Integrated Judiciary.\n4. All-India Services.",
        options: ["1 and 2 only", "2 and 4 only", "1, 2, and 4 only", "1, 2, 3, and 4"],
        correctAnswerIndex: 3,
        explanation: "All listed features (Single Constitution, Governor appointment, Integrated Judiciary, All-India Services) are unitary features."
    },
    {
        question: "\"India is an Indestructible Union of Destructible States.\" This means:",
        options: ["The Centre cannot change the boundaries of a state without its consent.", "The States have the right to secede from the Union.", "The Parliament can alter the boundaries, names, or areas of any state by a simple majority.", "The Union Government cannot be dissolved, but the State Governments can be dissolved."],
        correctAnswerIndex: 2,
        explanation: "The Parliament can alter the boundaries, names, or areas of any state by a simple majority, making states destructible."
    },
    {
        question: "In the context of the \"Synthesis of Parliamentary Sovereignty and Judicial Supremacy,\" consider the following:\n1. The Indian Parliament cannot amend the \"Basic Structure\" of the Constitution.\n2. The Supreme Court can declare any law void if it violates the Constitution.\n3. The Parliament can override a Supreme Court judgment by amending the Constitution (subject to Basic Structure).",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All statements are correct, reflecting the synthesis."
    },
    {
        question: "The Directive Principles of State Policy (DPSP) are \"non-justiciable.\" This means:",
        options: ["They cannot be amended by the Parliament.", "They are superior to Fundamental Rights.", "They cannot be enforced by the courts for their violation.", "They are not part of the Constitution."],
        correctAnswerIndex: 2,
        explanation: "Non-justiciable means they are not legally enforceable by the courts."
    },
    {
        question: "Despite being non-justiciable, the Constitution declares that the Directive Principles are:",
        options: ["Fundamental in the governance of the country.", "Optional for the State to follow.", "Inferior to Fundamental Rights in all cases.", "Merely moral precepts with no legal value."],
        correctAnswerIndex: 0,
        explanation: "Article 37 declared them 'fundamental in the governance of the country'."
    },
    {
        question: "The \"Minerva Mills Case\" (1980) established the relationship between Fundamental Rights and Directive Principles as:",
        options: ["Fundamental Rights are always superior.", "Directive Principles are always superior.", "A \"balance\" or \"harmony\" between the two is an essential feature of the Basic Structure.", "Fundamental Duties are superior to both."],
        correctAnswerIndex: 2,
        explanation: "The Court held that the Constitution is founded on the bedrock of the balance between FRs and DPSPs."
    },
    {
        question: "Fundamental Duties (Article 51-A) are applicable to:",
        options: ["All persons residing in India.", "Only Citizens of India.", "Only Government servants.", "Only Citizens above 18 years of age."],
        correctAnswerIndex: 1,
        explanation: "Fundamental Duties are confined to citizens only and do not extend to foreigners."
    },
    {
        question: "The Indian concept of \"Secularism\" differs from the Western concept because:",
        options: ["India has no state religion, whereas Western countries do.", "In India, the state maintains a \"principled distance\" but can intervene in religious affairs for reform.", "India promotes one religion as the state religion.", "In India, religion is considered a private affair with no public role."],
        correctAnswerIndex: 1,
        explanation: "Indian secularism is 'Positive' and allows state intervention for reform (like abolishing untouchability), unlike strict Western separation."
    },
    {
        question: "Single Citizenship in India promotes national integration. However, exceptions exist. Which of the following is NOT an exception to the rule of equality in employment/residence?",
        options: ["Parliament can prescribe residence as a condition for certain employments in a state (Article 16).", "The Constitution provides special provisions for certain states (Article 371).", "State governments can ban outsiders from buying property in Tribal Areas.", "States can have their own separate citizenship for state benefits."],
        correctAnswerIndex: 3,
        explanation: "States CANNOT have their own separate citizenship. This is NOT an exception because it doesn't exist in India."
    },
    {
        question: "The \"Integrated Judicial System\" in India means:",
        options: ["The Supreme Court and High Courts enforce both Central and State laws.", "There are separate courts for Central laws and State laws.", "The High Courts are under the administrative control of the State Government.", "The District Courts are independent of the High Courts."],
        correctAnswerIndex: 0,
        explanation: "A single system of courts enforces both Central laws and State laws (unlike the US)."
    },
    {
        question: "Why is the Indian Constitution called a \"Living Document\"?",
        options: ["Because it can be amended easily to adapt to changing needs.", "Because it has grown through judicial interpretation and conventions.", "Because it is not static but dynamic.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All factors contribute to its dynamic, living nature."
    },
    {
        question: "The \"Three-Tier Government\" (Centre, State, Local) is unique to India. Before 1992, the Local Government was a subject under:",
        options: ["The Union List", "The State List", "The Concurrent List", "It was not mentioned in any list."],
        correctAnswerIndex: 1,
        explanation: "Local Government is a State Subject (Entry 5 of State List)."
    },
    {
        question: "The \"Independent Bodies\" (EC, CAG, UPSC) are often called the \"Bulwarks of the Democratic System of India.\" To ensure their independence, the Constitution provides:",
        options: ["They can be removed only by the President on the advice of the PM.", "Their expenses are charged on the Consolidated Fund of India.", "They are eligible for further employment under the Government of India.", "Their tenure is at the pleasure of the President."],
        correctAnswerIndex: 1,
        explanation: "Expenses charged on the Consolidated Fund of India (not subject to vote) ensures financial independence."
    },
    {
        question: "The blend of \"Rigidity and Flexibility\" in the Indian Constitution is evident in the amendment process (Article 368). Which of the following provisions requires a \"Special Majority + Ratification by half of the States\"?",
        options: ["Fundamental Rights", "Directive Principles", "Election of the President and its manner.", "Admission of new states."],
        correctAnswerIndex: 2,
        explanation: "Election of the President affects the federal structure, hence requires ratification."
    },
    {
        question: "When a National Emergency (Article 352) is in operation:",
        options: ["The State Governments are suspended.", "The Parliament can legislate on subjects in the State List.", "The Fundamental Rights under Article 19 are automatically suspended (in case of war/external aggression).", "Both (b) and (c)."],
        correctAnswerIndex: 3,
        explanation: "Parliament can legislate on State subjects, and Art 19 is suspended (if War/External Aggression)."
    },
    {
        question: "The \"Financial Emergency\" (Article 360) has been declared in India:",
        options: ["Once in 1991.", "Twice (1962, 1991).", "Never.", "During the Covid-19 pandemic."],
        correctAnswerIndex: 2,
        explanation: "Financial Emergency has never been declared so far."
    },
    {
        question: "The Indian Parliamentary System differs from the British Parliamentary System in which respect?",
        options: ["India has a Republican Head of State (elected President), whereas Britain has a Monarch.", "The British Parliament is sovereign, whereas the Indian Parliament is not.", "In Britain, the PM must belong to the Lower House; in India, the PM can be from either House.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these are differences between Indian and British systems."
    },
    {
        question: "The feature of \"Single Citizenship\" was borrowed from:",
        options: ["USA", "Canada", "UK", "Australia"],
        correctAnswerIndex: 2,
        explanation: "Borrowed from the UK."
    },
    {
        question: "The concept of \"Concurrent List\" (where both Centre and States can make laws) was borrowed from:",
        options: ["Canada", "Australia", "Ireland", "South Africa"],
        correctAnswerIndex: 1,
        explanation: "Borrowed from Australia."
    },
    {
        question: "\"The Constitution is a lawyer's paradise.\" This criticism implies:",
        options: ["It is too detailed and complicated.", "The language is legalistic and difficult for the common man to understand.", "It leads to frequent litigation and diverse interpretations.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Critics condemn it because of its legalistic phrases and complexity."
    },
    {
        question: "The \"Basic Structure Doctrine\" (Kesavananda Bharati Case, 1973) acts as a limitation on:",
        options: ["The Judicial Review power of the Supreme Court.", "The Amending power of the Parliament.", "The Executive power of the President.", "The Legislative power of the State Assemblies."],
        correctAnswerIndex: 1,
        explanation: "It limits the Constituent power of the Parliament to amend the Constitution."
    },
    {
        question: "Which of the following is NOT a part of the Basic Structure of the Constitution?",
        options: ["Supremacy of the Constitution", "Secular character of the Constitution", "Federal character of the Constitution", "The power of Parliament to amend the Constitution (unlimited)."],
        correctAnswerIndex: 3,
        explanation: "Unlimited amending power is NOT basic structure; 'Limited' amending power IS."
    },
    {
        question: "The term \"Cabinet\" was originally not in the Constitution. It was inserted by the 44th Amendment Act in:",
        options: ["Article 74", "Article 75", "Article 352", "Article 356"],
        correctAnswerIndex: 2,
        explanation: "Inserted in Article 352 (defines Cabinet for written recommendation of emergency)."
    },
    {
        question: "The \"Co-operative Societies\" amendment (97th Amendment) was largely struck down by the Supreme Court in 2021. Why?",
        options: ["Because it violated the Basic Structure.", "Because \"Co-operative Societies\" is a State Subject, and the amendment was passed without ratification by half the states.", "Because it infringed on Fundamental Rights.", "Because it was procedurally incorrect in the Lok Sabha."],
        correctAnswerIndex: 1,
        explanation: "SC struck down the part dealing with Co-op Societies within states for want of ratification."
    },
    {
        question: "Assertion (A): The Indian Constitution is federal in form but unitary in spirit. Reason (R): The residue of powers (Residuary Powers) is vested in the Centre, unlike in the USA where it is with the States.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Vesting residuary powers in the Centre is a strong unitary feature explaining the spirit."
    },
    {
        question: "\"Due Process of Law\" vs \"Procedure Established by Law\": The Supreme Court in the Maneka Gandhi case (1978) interpreted Article 21 to include:",
        options: ["Only Procedure Established by Law.", "Due Process of Law (meaning the law must be fair, just, and reasonable).", "Only Executive action, not Legislative action.", "The American definition strictly."],
        correctAnswerIndex: 1,
        explanation: "SC interpreted 'Procedure Established by Law' to mean a procedure that is reasonable, fair, and just (analogous to Due Process)."
    },
    {
        question: "The 73rd and 74th Amendments created a \"Three-Tier\" structure. However, in many states, this is criticized as being ineffective because:",
        options: ["The Constitution does not specify their powers clearly.", "The States have not devolved enough funds, functions, and functionaries (3Fs) to the local bodies.", "The elections are not held regularly.", "The Central Government interferes too much."],
        correctAnswerIndex: 1,
        explanation: "The major criticism is the lack of devolution of Funds, Functions, and Functionaries (3Fs)."
    },
    {
        question: "Which Schedule of the Constitution contains the \"Anti-Defection Law\"?",
        options: ["9th Schedule", "10th Schedule", "11th Schedule", "12th Schedule"],
        correctAnswerIndex: 1,
        explanation: "10th Schedule (added by 52nd AA, 1985)."
    },
    {
        question: "The \"Ninth Schedule\" was added by the 1st Amendment (1951) to:",
        options: ["Protect land reform laws from judicial review on the ground of violation of Fundamental Rights.", "Add new languages to the official list.", "Create the state of Andhra Pradesh.", "Abolish the Privy Purses."],
        correctAnswerIndex: 0,
        explanation: "To protect land reform laws from judicial scrutiny."
    }
];

// Level 3: The UPSC Simulation
const LEVEL_3_QUESTIONS = [
    {
        question: "In the context of the Supreme Court's judgment on the borrowing powers of States (2024), consider the following regarding the financial federalism of India:\n1. The Constitution (Article 293) allows a State to borrow within the territory of India upon the security of the Consolidated Fund of the State.\n2. A State cannot raise any loan without the consent of the Centre if there is still outstanding any part of a loan made to the State by the Centre.\n3. The Centre has the absolute power to impose conditions while granting such consent.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All statements are correct. The SC affirmed the Centre's power to regulate state borrowing to ensure fiscal prudence."
    },
    {
        question: "The \"Cooperative Federalism\" vs \"Competitive Federalism\" debate has evolved. Which of the following bodies is structurally designed to promote Cooperative Federalism but is often criticized for being dormant?",
        options: ["NITI Aayog", "Inter-State Council (Article 263)", "Finance Commission (Article 280)", "Zonal Councils (Statutory)"],
        correctAnswerIndex: 1,
        explanation: "The Inter-State Council was designed for coordination but meets infrequently."
    },
    {
        question: "With reference to the \"Asymmetric Federalism\" in India, consider the following:\n1. The special provisions for states under Article 371 to 371-J are examples of asymmetric federalism.\n2. The Fifth and Sixth Schedules create autonomous regions within states, further deepening this asymmetry.\n3. The UT of Jammu & Kashmir (post-2019) represents a unique case of a UT with a legislature having fewer powers than other states like Delhi.",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All are examples of Asymmetric Federalism."
    },
    {
        question: "The Bharatiya Nyaya Sanhita (BNS) 2023 replaces the IPC. In this context, how does the \"Procedure Established by Law\" (Article 21) interplay with the new definition of \"Terrorist Act\"?",
        options: ["The Supreme Court has held that any law defining terrorism must pass the test of \"Just, Fair and Reasonable\" procedure (Maneka Gandhi doctrine).", "The BNS is immune from judicial review as it is a sovereign function.", "Article 21 does not apply to special laws like UAPA or BNS.", "The definition of terrorism is now a part of the Basic Structure."],
        correctAnswerIndex: 0,
        explanation: "Any law affecting life and liberty must satisfy the test of reasonableness (Maneka Gandhi)."
    },
    {
        question: "The \"Right to be Forgotten\" is currently being debated in the Supreme Court (2024-25). This right is considered an intrinsic part of which Fundamental Right?",
        options: ["Right to Equality (Article 14)", "Right to Freedom of Speech (Article 19)", "Right to Life and Personal Liberty (Article 21 - Right to Privacy)", "Right to Constitutional Remedies (Article 32)"],
        correctAnswerIndex: 2,
        explanation: "It is part of the Right to Privacy under Article 21 (Puttaswamy Judgment)."
    },
    {
        question: "The Digital Personal Data Protection Act, 2023 has raised concerns regarding the \"Right to Information\" (RTI). Critics argue that:",
        options: ["It amends the RTI Act to exempt \"personal information\" from disclosure entirely, overriding public interest.", "It abolishes the Information Commissions.", "It makes the Data Protection Board a constitutional body.", "It allows the government to sell personal data."],
        correctAnswerIndex: 0,
        explanation: "It amends Sec 8(1)(j) of RTI Act to exempt all personal information from disclosure."
    },
    {
        question: "The \"National Judicial Appointments Commission (NJAC)\" verdict (2015) is often cited in the ongoing Executive vs Judiciary tussle. The Supreme Court struck down the 99th Amendment because:",
        options: ["It violated the Federal Structure.", "It violated the \"Independence of Judiciary,\" which is a Basic Feature of the Constitution.", "It was passed without the ratification of half the states.", "It gave veto power to the Law Minister."],
        correctAnswerIndex: 1,
        explanation: "It was struck down for violating the Independence of the Judiciary."
    },
    {
        question: "In the context of the Basic Structure Doctrine, which of the following features has the Supreme Court specifically declared as part of the Basic Structure in recent judgments (post-2015)?",
        options: ["The Parliamentary System of Government.", "The powers of the High Court under Article 226 and 227.", "The welfare state nature of the Constitution.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these have been reiterated as Basic Structure features."
    },
    {
        question: "The \"Master of the Roster\" controversy relates to the administrative power of the Chief Justice of India (CJI). This power is derived from:",
        options: ["Article 124 of the Constitution.", "The Supreme Court Rules, 2013, framed under Article 145.", "The Judges Inquiry Act, 1968.", "A convention inherited from the Federal Court."],
        correctAnswerIndex: 1,
        explanation: "It is an administrative power derived from the Supreme Court Rules framed under Art 145 and convention."
    },
    {
        question: "The \"One Nation, One Election\" proposal (High-Level Committee Report 2024) suggests synchronizing Lok Sabha and State Assembly elections. This would require amendments to which of the following Constitutional provisions?\n1. Article 83 (Duration of Houses of Parliament)\n2. Article 172 (Duration of State Legislatures)\n3. Article 356 (President's Rule)\n4. The Tenth Schedule (Anti-Defection Law)",
        options: ["1 and 2 only", "1, 2, and 3 only", "1, 2, and 4 only", "1, 2, 3, and 4"],
        correctAnswerIndex: 3,
        explanation: "Comprehensive amendments to all these provisions would be required to sustain simultaneous elections."
    },
    {
        question: "The Nari Shakti Vandan Adhiniyam (2023) links the implementation of women's reservation to the \"Delimitation\" process. With the freeze on delimitation (84th Amendment) ending in 2026, consider the following:\n1. The current allocation of Lok Sabha seats to states is based on the 1971 Census.\n2. The delimitation of constituencies within states is currently based on the 2001 Census.\n3. The 2026 delimitation will necessarily require a Constitutional Amendment if the total number of seats is to be increased beyond 550.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All statements are correct."
    },
    {
        question: "The \"Uniform Civil Code\" (UCC) (Article 44) has seen state-level implementation (e.g., Uttarakhand). How does this affect the \"Federal\" nature of the Constitution?",
        options: ["Personal laws are in the Union List, so states cannot legislate on them.", "Personal laws are in the Concurrent List; hence, a state law can prevail over central law if it receives the President's assent.", "UCC is a Basic Structure feature; hence states cannot implement it individually.", "Article 44 expressly prohibits state-level UCCs."],
        correctAnswerIndex: 1,
        explanation: "Personal laws are in Concurrent List (Entry 5), so states can legislate with President's assent."
    },
    {
        question: "In 2024, the Supreme Court overruled the E.V. Chinnaiah judgment, allowing for the \"Sub-classification of Scheduled Castes\" for reservations. This judgment interprets which fundamental aspect of the Constitution?",
        options: ["Article 14 (Right to Equality) allows \"reasonable classification\" even within a reserved category to ensure substantive equality.", "Article 341 empowers only the Parliament to include/exclude castes, but States can sub-classify for benefits.", "The \"Creamy Layer\" concept is now applicable to SCs/STs as well.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "The judgment covered all these aspects: reasonable classification, state power to sub-classify, and creamy layer applicability."
    },
    {
        question: "The \"Power of the Governor to withhold assent\" (Article 200) was clarified by the Supreme Court in the Punjab and Tamil Nadu Governor cases (2023-24). The Court held that:",
        options: ["The Governor has absolute veto power over state bills.", "Once the Governor \"withholds assent,\" the bill is dead and cannot be returned.", "If the Governor decides to withhold assent, they must return the bill to the legislature \"as soon as possible\"; they cannot simply \"sit\" on it (Pocket Veto).", "The Governor can reserve any bill for the President without giving reasons."],
        correctAnswerIndex: 2,
        explanation: "The SC ruled that 'withholding assent' implies returning the bill. The Governor cannot pocket veto it indefinitely."
    },
    {
        question: "The Chief Election Commissioner and Other Election Commissioners Act, 2023 replaced the CJI in the selection panel with a Cabinet Minister. Critics argue this violates the spirit of the Anoop Baranwal judgment (2023). The Supreme Court's stance on this is based on:",
        options: ["The doctrine of Separation of Powers.", "Article 324(2), which leaves the appointment \"subject to the provisions of any law made by Parliament.\"", "The Basic Structure doctrine of \"Free and Fair Elections.\"", "The theory of Checks and Balances."],
        correctAnswerIndex: 1,
        explanation: "The Court refused to stay the Act because Art 324(2) explicitly allows Parliament to make such a law."
    },
    {
        question: "Parliamentary Privileges (Article 105) were in focus during the expulsion of MPs (e.g., Mahua Moitra case). The Supreme Court has held that:",
        options: ["The Parliament is the sole judge of its own proceedings and courts cannot interfere even if there is \"gross illegality.\"", "The expulsion of a member is subject to limited judicial review if it violates fundamental rights or is procedurally unconstitutional.", "A member cannot be expelled without a criminal conviction.", "The Privileges Committee's decision is final and binding on the Courts."],
        correctAnswerIndex: 1,
        explanation: "Expulsion is subject to limited judicial review (Raja Ram Pal case)."
    },
    {
        question: "Article 142 (\"Complete Justice\") was recently used by the Supreme Court to grant divorce on grounds of \"irretrievable breakdown of marriage.\" This is significant because:",
        options: ["\"Irretrievable breakdown\" is not a ground for divorce under the Hindu Marriage Act.", "It overrides the legislative intent of the Parliament.", "It converts a moral obligation into a legal right.", "It allows the Supreme Court to legislate on the Concurrent List."],
        correctAnswerIndex: 0,
        explanation: "SC used Art 142 to grant divorce because 'Irretrievable Breakdown' is not a statutory ground yet."
    },
    {
        question: "The \"Electoral Bonds\" verdict (2024) struck down the scheme as unconstitutional. Which specific conflict of rights did the Court resolve?",
        options: ["Right to Privacy of Donors (Article 21) vs. Right to Information of Voters (Article 19(1)(a)).", "Right to Trade (Article 19(1)(g)) vs. Right to Equality (Article 14).", "Freedom of Association vs. National Security.", "Corporate Rights vs. Individual Rights."],
        correctAnswerIndex: 0,
        explanation: "The Court balanced Donor Privacy vs Voter Information and held Voter Information (Art 19(1)(a)) prevails."
    },
    {
        question: "The Citizenship Amendment Act (CAA) Rules were notified in 2024. Constitutional challenges to the CAA are primarily based on the argument that:",
        options: ["It violates Article 14 by using religion as a criterion for citizenship (granting, not depriving).", "It violates the \"Secular\" basic structure.", "It violates the Assam Accord (Article 6A of Citizenship Act).", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Challenges cover Article 14, Basic Structure (Secularism), and Assam Accord violation."
    },
    {
        question: "The \"Lateral Entry\" in bureaucracy advertisement (2024) was withdrawn after political backlash regarding reservations. Constitutionally, \"Single Cadre\" posts (like Joint Secretary):",
        options: ["Are exempt from reservation rules under Article 16(4).", "Are subject to reservation if the total number of posts exceeds 3.", "Are considered distinct from the \"Service\" cadre, making the application of the 13-point roster difficult.", "Must always have 50% reservation."],
        correctAnswerIndex: 0,
        explanation: "Single cadre posts (where there is only one post in a cadre) cannot be reserved as it would amount to 100% reservation (Chakradhar Paswan judgment)."
    },
    {
        question: "The \"Whip System\" and \"Cross-Voting\" in Rajya Sabha elections (2024) highlighted a conflict. The Supreme Court has previously held (in Kuldip Nayar case) that:",
        options: ["The Anti-Defection Law (10th Schedule) applies fully to Rajya Sabha elections.", "Open ballot in Rajya Sabha elections violates the secrecy of voting.", "The 10th Schedule does not apply to Rajya Sabha elections; hence, cross-voting does not lead to disqualification, but may invite party disciplinary action.", "Rajya Sabha members must vote according to their conscience only."],
        correctAnswerIndex: 2,
        explanation: "10th Schedule does NOT apply to Rajya Sabha elections."
    },
    {
        question: "The \"Preamble Controversy\" (2023) arose when copies of the Constitution distributed in the New Parliament lacked the words \"Socialist\" and \"Secular.\" These words were:",
        options: ["Present in the original 1950 text.", "Added by the 42nd Amendment (1976) but deemed retrospectively applicable.", "Added by the 42nd Amendment (1976) to make explicit what was already implicit.", "Added by the 44th Amendment (1978)."],
        correctAnswerIndex: 2,
        explanation: "They were added by 42nd AA to make explicit what was already implicit."
    },
    {
        question: "\"Adverse Possession\" was recently upheld by the Supreme Court, stating that a person can acquire ownership rights if they possess a property for 12 years hostile to the true owner. This relates to the current status of the \"Right to Property\" as:",
        options: ["A Fundamental Right (Article 19).", "A Constitutional Right (Article 300A) and a Human Right.", "A Statutory Right only.", "A Natural Right."],
        correctAnswerIndex: 1,
        explanation: "SC has held that Right to Property is not just constitutional/statutory but also a Human Right."
    },
    {
        question: "The \"Official Language\" debate (Hindi imposition) often resurfaces. Article 351 directs the Union to promote the spread of Hindi so that it may serve as:",
        options: ["The sole national language of India.", "A medium of expression for all the elements of the composite culture of India.", "The language of all High Courts.", "The replacement for English within 15 years."],
        correctAnswerIndex: 1,
        explanation: "Art 351: 'medium of expression for all the elements of the composite culture of India'."
    },
    {
        question: "The \"Basic Structure\" doctrine is often criticized by the Executive as \"tyranny of the unelected.\" However, the Minerva Mills case (1980) cemented it by striking down clauses that:",
        options: ["Gave primacy to all Directive Principles over all Fundamental Rights.", "Excluded Judicial Review of Constitutional Amendments.", "Abolished the Rajya Sabha.", "Both (a) and (b)."],
        correctAnswerIndex: 3,
        explanation: "Minerva Mills struck down Art 31C (primacy to all DPSPs) and Art 368(4)&(5) (exclusion of judicial review)."
    },
    {
        question: "In the context of \"Fiscal Federalism,\" the Goods and Services Tax (GST) Council (Article 279A) is a unique body where:",
        options: ["The Centre has a veto power (75% vote share).", "The States together have a weighted vote of two-thirds, and the Centre has one-third; decisions require a three-fourths majority.", "Decisions are taken by simple majority.", "It is a purely advisory body."],
        correctAnswerIndex: 1,
        explanation: "Centre has 1/3rd vote, States have 2/3rd. Decision requires 3/4th majority."
    },
    {
        question: "The \"Right to Silence\" of an accused (Article 20(3) - Self Incrimination) was debated in the context of the PMLA (Prevention of Money Laundering Act) judgments. The Supreme Court held that:",
        options: ["PMLA officers are police officers, so statements given to them are inadmissible.", "PMLA officers are not police officers; hence, statements made to them are admissible and do not violate Article 20(3).", "The Right to Silence is absolute in all civil and criminal cases.", "Article 20(3) does not apply to economic offenses."],
        correctAnswerIndex: 1,
        explanation: "SC passed the controversial judgment (Vijay Madanlal Choudhary case) that PMLA officers are not police officers."
    },
    {
        question: "The \"Inner Line Permit\" (ILP) system protects the indigenous culture of certain North-Eastern states. Which Fundamental Right is restricted by this regime for other Indian citizens?",
        options: ["Article 19(1)(d) - Freedom to move freely throughout the territory of India.", "Article 19(1)(e) - Freedom to reside and settle in any part of the territory of India.", "Article 14 - Right to Equality.", "Both (a) and (b)."],
        correctAnswerIndex: 3,
        explanation: "It restricts both free movement and settlement."
    },
    {
        question: "The \"Sengol\" installation in Parliament was justified as a symbol of \"Dharma\" (Righteousness). In Constitutional terms, the concept of Dharma is most closely aligned with:",
        options: ["The concept of 'Religion' in Article 25.", "The concept of 'Rule of Law' and 'Constitutional Morality'.", "The concept of 'Ritual Sovereignty'.", "The Directive Principles of State Policy."],
        correctAnswerIndex: 1,
        explanation: "Dharma (Righteousness/Duty) aligns with Rule of Law and Constitutional Morality in a secular sense."
    },
    {
        question: "Assertion (A): The Indian Constitution allows for the \"renaming of states\" by a simple majority in Parliament (Article 3). Reason (R): This reflects the \"Indestructible Union of Destructible States\" nature, where the territorial integrity of a state is not guaranteed by the Constitution.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Correct explanation."
    }
];

export const CHAPTER_4_LEVELS: ChapterLevelData = {
    topicId: 4,
    levels: [
        {
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Strictly Chapter 4: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch4-l3-q${i + 1}` }))
        }
    ]
};
