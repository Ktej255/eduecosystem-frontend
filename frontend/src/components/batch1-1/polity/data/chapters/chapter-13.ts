import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 13)
const LEVEL_1_QUESTIONS = [
    {
        question: "The Constitution of India provides for a parliamentary form of government at:",
        options: ["The Centre only.", "The States only.", "Both the Centre and the States.", "The Centre, States, and Panchayats."],
        correctAnswerIndex: 2, // c) Both the Centre and the States
        explanation: "The Constitution provides for a parliamentary form of government both at the Centre and in the States."
    },
    {
        question: "Articles 74 and 75 deal with the parliamentary system at the:",
        options: ["Centre", "States", "Union Territories", "Local Bodies"],
        correctAnswerIndex: 0, // a) Centre
        explanation: "Articles 74 and 75 deal with the parliamentary system at the Centre."
    },
    {
        question: "Articles 163 and 164 deal with the parliamentary system at the:",
        options: ["Centre", "States", "Union Territories", "Municipalities"],
        correctAnswerIndex: 1, // b) States
        explanation: "Articles 163 and 164 deal with the parliamentary system in the States."
    },
    {
        question: "Modern democratic governments are classified into parliamentary and presidential on the basis of the:",
        options: ["Method of election of the head of state.", "Nature of relations between the executive and the legislative organs.", "Nature of relations between the executive and the judiciary.", "Division of powers between the Centre and the States."],
        correctAnswerIndex: 1, // b) Nature of relations
        explanation: "Classified based on the nature of relations between the executive and the legislative organs."
    },
    {
        question: "The parliamentary system of government is also known as:",
        options: ["Cabinet Government", "Responsible Government", "Westminster model of government", "All of the above"],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "Known as Cabinet Government, Responsible Government, and Westminster model."
    },
    {
        question: "Ivor Jennings called the parliamentary system as:",
        options: ["Cabinet system.", "Responsible government.", "Prime Ministerial Government.", "Westminster model."],
        correctAnswerIndex: 0, // a) Cabinet system
        explanation: "Ivor Jennings described the parliamentary system as the Cabinet system."
    },
    {
        question: "In the Indian parliamentary system, the President is the ______ executive, while the Prime Minister is the ______ executive.",
        options: ["Real; Nominal", "Nominal; Real", "Legal; Political", "Permanent; Temporary"],
        correctAnswerIndex: 1, // b) Nominal; Real
        explanation: "The President is the nominal executive (de jure), while the PM is the real executive (de facto)."
    },
    {
        question: "The political party which secures majority seats in the Lok Sabha forms the government. This feature is known as:",
        options: ["Majority Party Rule.", "Coalition Rule.", "Minority Rule.", "Single Party Rule."],
        correctAnswerIndex: 0, // a) Majority Party Rule
        explanation: "Majority Party Rule is a key feature."
    },
    {
        question: "The ministers are collectively responsible to the:",
        options: ["President", "Prime Minister", "Parliament (specifically Lok Sabha)", "Rajya Sabha"],
        correctAnswerIndex: 2, // c) Lok Sabha
        explanation: "Ministers are collectively responsible to the Lok Sabha."
    },
    {
        question: "The principle of collective responsibility implies that the Lok Sabha can remove the ministry by passing a:",
        options: ["Vote of No-Confidence.", "Censure Motion.", "Adjournment Motion.", "Cut Motion."],
        correctAnswerIndex: 0, // a) Vote of No-Confidence
        explanation: "Passed to remove the ministry if they lose confidence."
    },
    {
        question: "In the Indian parliamentary system, the ministers are members of:",
        options: ["The Legislature only.", "The Executive only.", "Both the Legislature and the Executive.", "Neither."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Ministers must be members of Parliament (Legislature) and form the Executive."
    },
    {
        question: "A person who is not a member of Parliament can be appointed as a minister for a maximum period of:",
        options: ["3 months", "6 months", "1 year", "5 years"],
        correctAnswerIndex: 1, // b) 6 months
        explanation: "6 months."
    },
    {
        question: "The Prime Minister plays the leadership role in the system of government. He is the leader of:",
        options: ["Council of Ministers.", "Parliament.", "The party in power.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Leader of the Council of Ministers, Parliament, and the party in power."
    },
    {
        question: "The lower house of Parliament (Lok Sabha) can be dissolved by the President on the recommendation of the:",
        options: ["Speaker", "Chief Justice of India", "Prime Minister", "Vice-President"],
        correctAnswerIndex: 2, // c) Prime Minister
        explanation: "President can dissolve Lok Sabha on PM's recommendation."
    },
    {
        question: "The ministers operate on the principle of secrecy of procedure. The oath of secrecy is administered by the:",
        options: ["Prime Minister", "Speaker of Lok Sabha", "President", "Chief Justice of India"],
        correctAnswerIndex: 2, // c) President
        explanation: "Administered by the President."
    },
    {
        question: "In the Presidential system (like USA), the President is:",
        options: ["The Head of the State only.", "The Head of the Government only.", "Both the Head of the State and the Head of the Government.", "Neither."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both head of state and head of government."
    },
    {
        question: "The President of the USA is elected by an electoral college for a fixed tenure of:",
        options: ["3 years", "4 years", "5 years", "6 years"],
        correctAnswerIndex: 1, // b) 4 years
        explanation: "4 years."
    },
    {
        question: "The President governs with the help of a cabinet or a smaller body called 'Kitchen Cabinet'. Its members are:",
        options: ["Elected representatives.", "Non-elected departmental secretaries.", "Members of Congress.", "Judges."],
        correctAnswerIndex: 1, // b) Non-elected secretaries
        explanation: "Consists of non-elected departmental secretaries."
    },
    {
        question: "The doctrine of separation of powers is the basis of the:",
        options: ["Parliamentary system.", "Presidential system.", "Unitary system.", "Federal system."],
        correctAnswerIndex: 1, // b) Presidential system
        explanation: "Presidential system is based on strict separation of powers."
    },
    {
        question: "Which of the following is a merit of the Parliamentary System?",
        options: ["Harmony between legislature and executive.", "Stable government.", "Continuity of policies.", "Separation of powers."],
        correctAnswerIndex: 0, // a) Harmony
        explanation: "Harmony between legislature and executive is a key merit."
    },
    {
        question: "The parliamentary system establishes 'Responsible Government'. The ministers are responsible to the Parliament for:",
        options: ["Acts of omission and commission.", "Only legislative acts.", "Only financial acts.", "Only administrative acts."],
        correctAnswerIndex: 0, // a) Acts of omission and commission
        explanation: "Responsible for all their acts."
    },
    {
        question: "The parliamentary system prevents 'Despotism' because:",
        options: ["The executive authority is vested in a single person.", "The executive authority is vested in a group of individuals (Council of Ministers).", "The judiciary is supreme.", "The President has veto power."],
        correctAnswerIndex: 1, // b) Group of individuals
        explanation: "Authority is group-based, preventing one-person despotism."
    },
    {
        question: "Which of the following is a demerit of the Parliamentary System?",
        options: ["Responsible Government.", "Wide Representation.", "Unstable Government.", "Prevents Despotism."],
        correctAnswerIndex: 2, // c) Unstable Government
        explanation: "Governments can fall due to lack of majority support."
    },
    {
        question: "In the parliamentary system, the tenure of the government depends on the mercy of:",
        options: ["The President.", "The majority legislators.", "The Judiciary.", "The Bureaucracy."],
        correctAnswerIndex: 1, // b) Majority legislators
        explanation: "Depends on confidence of majority legislators."
    },
    {
        question: "The parliamentary system often leads to 'Government by Amateurs' because:",
        options: ["Ministers are experts in their fields.", "Ministers are not experts in their fields (administrative tasks).", "Bureaucrats run the government.", "Ministers are elected for a lifetime."],
        correctAnswerIndex: 1, // b) Not experts
        explanation: "Politicians are not necessarily experts in administrative departments."
    },
    {
        question: "Why did the Constituent Assembly adopt the Parliamentary System?",
        options: ["Familiarity with the system.", "Preference for more responsibility.", "Need to avoid legislative-executive conflicts.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Familiarity, responsibility, and avoiding conflicts."
    },
    {
        question: "Dr. B.R. Ambedkar pointed out that a democratic executive must satisfy two conditions:",
        options: ["Stability and Responsibility.", "Accountability and Transparency.", "Efficiency and Economy.", "Liberty and Equality."],
        correctAnswerIndex: 0, // a) Stability and Responsibility
        explanation: "Stability and Responsibility."
    },
    {
        question: "According to Dr. Ambedkar, the American system gives more ______ but less ______. ",
        options: ["Stability; Responsibility", "Responsibility; Stability", "Power; Accountability", "Accountability; Power"],
        correctAnswerIndex: 0, // a) Stability; Responsibility
        explanation: "More stability, but less responsibility compared to parliamentary system."
    },
    {
        question: "The British system is based on the doctrine of the sovereignty of Parliament, while the Parliament in India is:",
        options: ["Sovereign.", "Not supreme (restricted by written Constitution, federal system, judicial review, etc.).", "Subordinate to the Executive.", "Subordinate to the Judiciary."],
        correctAnswerIndex: 1, // b) Not supreme
        explanation: "Restricted by various constitutional factors."
    },
    {
        question: "In Britain, the Prime Minister should be a member of the:",
        options: ["House of Commons (Lower House).", "House of Lords (Upper House).", "Either House.", "Privy Council."],
        correctAnswerIndex: 0, // a) House of Commons
        explanation: "Must be from the Lower House."
    },
    {
        question: "In India, the Prime Minister may be a member of:",
        options: ["The Lok Sabha only.", "The Rajya Sabha only.", "Any of the two Houses of Parliament.", "Neither (initially)."],
        correctAnswerIndex: 2, // c) Any of the two
        explanation: "Can be from either House."
    },
    {
        question: "In India, a person who is not a member of Parliament can be appointed as minister for a maximum period of:",
        options: ["3 months.", "6 months.", "9 months.", "1 year."],
        correctAnswerIndex: 1, // b) 6 months
        explanation: "6 months."
    },
    {
        question: "Does India have a system of legal responsibility of the minister (i.e., does the minister countersign official acts)?",
        options: ["Yes, like Britain.", "No.", "Only for financial matters.", "Only for defense matters."],
        correctAnswerIndex: 1, // b) No
        explanation: "No legal responsibility system for ministers in India."
    },
    {
        question: "The institution of 'Shadow Cabinet' is a unique institution of the:",
        options: ["American cabinet system.", "British cabinet system.", "Indian cabinet system.", "French cabinet system."],
        correctAnswerIndex: 1, // b) British
        explanation: "Unique to the British system."
    },
    {
        question: "The Shadow Cabinet is formed by the:",
        options: ["Ruling party.", "Opposition party.", "Coalition partners.", "Speaker."],
        correctAnswerIndex: 1, // b) Opposition party
        explanation: "Formed by the opposition party."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "The \"Westminster Model\" adopted by India differs from the British model in a fundamental way. In India, Parliament is:",
        options: ["Sovereign.", "Supreme but not sovereign.", "Limited by a written Constitution, federalism, and judicial review.", "Subordinate to the President."],
        correctAnswerIndex: 2, // c) Limited
        explanation: "Limited by various constitutional safeguards."
    },
    {
        question: "In the British system, the Head of State (Monarch) is hereditary. In India, the Head of State (President) is:",
        options: ["Hereditary.", "Elected directly by the people.", "Elected indirectly (Republic).", "Nominated by the Prime Minister."],
        correctAnswerIndex: 2, // c) Elected indirectly
        explanation: "India is a Republic."
    },
    {
        question: "\"Collective Responsibility\" (Article 75) means that:",
        options: ["All ministers are jointly responsible to the Lok Sabha.", "Entire Council of Ministers must resign if no-confidence is passed against PM.", "Cabinet decisions are binding on all ministers.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Encompasses all these dimensions."
    },
    {
        question: "\"Individual Responsibility\" (Article 75) means that:",
        options: ["Ministers hold office during the pleasure of the President.", "President can remove a minister even if they enjoy confidence of Lok Sabha.", "President removes a minister only on the advice of the Prime Minister.", "Both (a) and (c)."],
        correctAnswerIndex: 3, // d) Both a and c
        explanation: "Hold office during pleasure, and removed on PM's advice."
    },
    {
        question: "The \"Legal Responsibility\" of a minister (countersigning official acts) is a feature of:",
        options: ["The British System.", "The Indian System.", "The American System.", "Both Indian and British Systems."],
        correctAnswerIndex: 0, // a) British System
        explanation: "India does not have legal responsibility for ministers."
    },
    {
        question: "The \"Shadow Cabinet\" is a unique institution of the British system. Its purpose is:",
        options: ["To spy on the government.", "To form an alternative cabinet ready to take over if the government falls.", "To assist the ruling cabinet.", "To manage the Parliament canteen."],
        correctAnswerIndex: 1, // b) Alternative cabinet
        explanation: "Preparation for future governance."
    },
    {
        question: "Which feature is common to both the Indian Parliamentary System and the US Presidential System?",
        options: ["Collective Responsibility.", "Dissolution of the Lower House.", "Supremacy of the Constitution (Written Constitution).", "Membership of ministers in the Legislature."],
        correctAnswerIndex: 2, // c) Written Constitution
        explanation: "Both have written constitutions."
    },
    {
        question: "In the Presidential system (USA), the doctrine of \"Separation of Powers\" is:",
        options: ["Strict and rigid.", "Flexible (Fusion of powers).", "Non-existent.", "Similar to India."],
        correctAnswerIndex: 0, // a) Strict and rigid
        explanation: "Strict separation is key."
    },
    {
        question: "In the Parliamentary system (India), there is a \"Fusion of Powers\" because:",
        options: ["The Executive is a part of the Legislature.", "The Legislature controls the Executive.", "The Executive is responsible to the Legislature.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Integration of organs."
    },
    {
        question: "Dr. B.R. Ambedkar preferred the Parliamentary system because he prioritized:",
        options: ["Stability over Responsibility.", "Responsibility over Stability.", "Separation of powers over Fusion of powers.", "A strong President."],
        correctAnswerIndex: 1, // b) Responsibility over Stability
        explanation: "Prioritized daily accountability."
    },
    {
        question: "The \"Double Membership\" is a feature of:",
        options: ["Parliamentary System.", "Presidential System.", "Unitary System.", "Federal System."],
        correctAnswerIndex: 0, // a) Parliamentary System
        explanation: "Ministers are members of both Legislature and Executive."
    },
    {
        question: "The dissolution of the Lok Sabha before the expiry of its term is a prerogative of the:",
        options: ["Prime Minister (advice to President).", "Speaker of Lok Sabha.", "Rajya Sabha.", "Election Commission."],
        correctAnswerIndex: 0, // a) PM's advice
        explanation: "PM advises President to dissolve."
    },
    {
        question: "In the USA, the President cannot dissolve the House of Representatives. This ensures:",
        options: ["Accountability.", "Stability of tenure.", "Responsibility.", "Flexibility."],
        correctAnswerIndex: 1, // b) Stability
        explanation: "Fixed term without threat of early dissolution."
    },
    {
        question: "In India, a person can become a Minister without being a Member of Parliament for 6 months. Upheld by SC in:",
        options: ["S.R. Chaudhuri vs State of Punjab (2001).", "A.H. Ahmadi case.", "Kuldip Nayar case.", "Lily Thomas case."],
        correctAnswerIndex: 0, // a) SR Chaudhuri
        explanation: "SR Chaudhuri case (but re-appointment without election ruled out)."
    },
    {
        question: "If a Minister who is not a member of either House fails to get elected within 6 months:",
        options: ["He ceases to be a Minister.", "He can be re-appointed for another 6 months.", "He continues as a Minister but cannot vote.", "He becomes a permanent invitee."],
        correctAnswerIndex: 0, // a) Ceases to be a Minister
        explanation: "Mandatory requirement."
    },
    {
        question: "The Prime Minister of India can be a member of the Rajya Sabha. This was first established when:",
        options: ["Indira Gandhi became PM in 1966.", "Deve Gowda became PM in 1996.", "Manmohan Singh became PM in 2004.", "Morarji Desai became PM in 1977."],
        correctAnswerIndex: 0, // a) Indira Gandhi
        explanation: "Indira Gandhi (1966) was the first RS member to be PM."
    },
    {
        question: "The \"Kitchen Cabinet\" or \"Inner Cabinet\" is an extra-constitutional body consisting of:",
        options: ["15-20 Cabinet Ministers.", "The PM and 2-4 influential colleagues/friends whom he consults daily.", "The entire Council of Ministers.", "The leaders of allied parties."],
        correctAnswerIndex: 1, // b) 2-4 influential colleagues
        explanation: "Informal circle of influence."
    },
    {
        question: "The concept of \"Prime Ministerial Government\" (where the PM dominates the Cabinet) was highlighted by analysts like:",
        options: ["Richard Crossman.", "Ivor Jennings.", "Lord Morley.", "Ramsay Muir."],
        correctAnswerIndex: 0, // a) Richard Crossman
        explanation: "Crossman highlighted the shift towards PM dominance."
    },
    {
        question: "Why is the Indian Parliamentary System often described as a \"Cabinet Dictatorship\"?",
        options: ["Because the Cabinet controls the Parliament due to its majority.", "Because the PM is a dictator.", "Because the President has no powers.", "Because there is no opposition."],
        correctAnswerIndex: 0, // a) Control due to majority
        explanation: "Majority power allows Cabinet dominance."
    },
    {
        question: "Which of the following is NOT a reason for adopting the Parliamentary System in India?",
        options: ["Familiarity with the system during British rule.", "Preference for responsibility.", "Avoidance of legislative-executive conflict.", "Need for a strict separation of powers."],
        correctAnswerIndex: 3, // d) Strict separation
        explanation: "Parliamentary system involves fusion, not strict separation."
    },
    {
        question: "The \"swearing-in\" of the Prime Minister in India involves oaths of:",
        options: ["Office and Secrecy.", "Office and Allegiance.", "Secrecy and Faith.", "Truth and Non-violence."],
        correctAnswerIndex: 0, // a) Office and Secrecy
        explanation: "Office and Secrecy."
    },
    {
        question: "In the event of a \"Hung Parliament\", the role of the President becomes:",
        options: ["Ceremonial.", "Crucial/Discretionary (in inviting a leader).", "Dictatorial.", "Redundant."],
        correctAnswerIndex: 1, // b) Crucial
        explanation: "President uses discretion to invite the potential majority leader."
    },
    {
        question: "The \"Anti-Defection Law\" (10th Schedule) strengthens the Parliamentary System by:",
        options: ["Preventing instability caused by floor-crossing.", "Ensuring collective responsibility.", "Empowering the Speaker.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Enhances stability and party discipline."
    },
    {
        question: "Assertion (A): The Parliamentary system provides for a fusion of the executive and the legislature. Reason (R): The executive is a part of the legislature and is responsible to it.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): The President of India is a nominal executive. Reason (R): The Constitution requires the President to act in accordance with the aid and advice of the Council of Ministers headed by the PM.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Which system allows for \"experts\" to be appointed as ministers easily without election?",
        options: ["Parliamentary System.", "Presidential System (USA).", "Both.", "Neither."],
        correctAnswerIndex: 1, // b) Presidential system
        explanation: "Ministers are drawn from experts outdoors of legislature."
    },
    {
        question: "The \"vote of no-confidence\" is mentioned in:",
        options: ["The Constitution (Article 75).", "The Rules of Procedure of Lok Sabha (Rule 198).", "The Conventions only.", "The Representation of People Act."],
        correctAnswerIndex: 1, // b) Rules of Procedure
        explanation: "Specific mechanism in LS Rules."
    },
    {
        question: "In India, the Parliament is not sovereign because:\n1. It has a written Constitution.\n2. It has a federal system.\n3. It has a system of judicial review.\n4. Fundamental Rights restrict its power.",
        options: ["1 and 2 only.", "1, 2, and 3 only.", "1, 3, and 4 only.", "1, 2, 3, and 4."],
        correctAnswerIndex: 3, // d) All
        explanation: "All factors limit Parliamentary sovereignty in India."
    },
    {
        question: "The \"Presidential System\" is fundamentally based on:",
        options: ["Single Executive.", "Plural Executive.", "Elected Legislature.", "Judicial Supremacy."],
        correctAnswerIndex: 0, // a) Single Executive
        explanation: "Single real executive (President)."
    },
    {
        question: "In the Indian Parliamentary context, \"The buck stops here\" applies most aptly to:",
        options: ["The President.", "The Prime Minister.", "The Chief Justice.", "The Speaker."],
        correctAnswerIndex: 1, // b) Prime Minister
        explanation: "The Prime Minister is the effective head of government."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "Theme: Stability vs Accountability (One Nation, One Election)\nCritics argue ONOE undermines a core feature. Which feature is most at risk?",
        options: ["Collective Responsibility (Accountability).", "Individual Responsibility.", "The Fixed Tenure of the Executive (Stability).", "The Nominal Executive."],
        correctAnswerIndex: 0, // a) Accountability
        explanation: "Fixing tenure artificially reduces the daily accountability inherent in the parliamentary system."
    },
    {
        question: "If a \"No-Confidence Motion\" is passed mid-term under the new ONOE regime, the proposed solution is:",
        options: ["President's Rule.", "Holding a \"Remainder Term\" election.", "Formation of a \"National Unity Government\".", "Governor runs admin."],
        correctAnswerIndex: 1, // b) Remainder Term election
        explanation: "Election only for the remaining period to maintain cycle."
    },
    {
        question: "Theme: Anti-Defection (Maharashtra Case)\nThe Court held that for deciding the \"Real Party\" faction:",
        options: ["Speaker must decide within 3 months.", "Legislative Majority is not sole criteria; Org structure matters.", "Speaker cannot decide if removal motion is pending.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Recent SC directions."
    },
    {
        question: "In the context of a party split, who has the authority to issue the Whip according to SC?",
        options: ["Leader of Legislative Party.", "President/Chief of the Political Party.", "The Speaker.", "The Chief Minister."],
        correctAnswerIndex: 1, // b) Political Party wing
        explanation: "The political party appoints the Whip."
    },
    {
        question: "Theme: Executive Accountability (Ordinances)\nRe-promulgation of Ordinances is criticized because:",
        options: ["Bypasses Legislature's scrutiny and \"Collective Responsibility\".", "Makes President a dictator.", "Violates Federal structure.", "Violates Judicial Review."],
        correctAnswerIndex: 0, // a) Bypasses Scrutiny
        explanation: "Fraud on the constitution by avoiding legislative debate."
    },
    {
        question: "Decline in referral of Bills to Parliamentary Standing Committees weakens:",
        options: ["Law-making power.", "Executive Accountability (scrutiny).", "Judicial Review.", "Federal Balance."],
        correctAnswerIndex: 1, // b) Executive Accountability
        explanation: "Scrutiny of administrative and financial aspects is lost."
    },
    {
        question: "Excessive use of the Guillotine undermines:",
        options: ["Financial Accountability.", "Power of Rajya Sabha.", "President's veto.", "CAG's audit."],
        correctAnswerIndex: 0, // a) Financial Accountability
        explanation: "Demands passed without debate."
    },
    {
        question: "Theme: Governor Conflicts\nSC held that Governor cannot \"sit on bills\" indefinitely, reaffirming:",
        options: ["Governor is real executive.", "Governor is constitutional head bound by \"aid and advice\".", "Governor has absolute veto.", "Reports to President only."],
        correctAnswerIndex: 1, // b) Constitutional head
        explanation: "Reaffirms the advice-bound nature of the role."
    },
    {
        question: "In a Parliamentary democracy like India, sovereignty resides in:",
        options: ["The Constitution.", "The Parliament.", "The People (represented by the Parliament).", "The Executive."],
        correctAnswerIndex: 2, // c) The People
        explanation: "Popular sovereignty via representatives."
    },
    {
        question: "Theme: Coalition Politics (2024 context)\nIn a coalition, \"Collective Responsibility\" faces a challenge regarding:",
        options: ["PM's prerogative to select ministers (Coalition Dharma).", "President's discretion.", "Secrecy.", "Individual responsibility."],
        correctAnswerIndex: 0, // a) PM's choice vs Coalition Dharma
        explanation: "Compromises on ministerial selection due to ally pressure."
    },
    {
        question: "Sarkaria Commission's preference for appointing PM in a Hung Parliament:",
        options: ["1, 2, 3", "2, 1, 3", "3, 2, 1", "1, 3, 2"],
        correctAnswerIndex: 1, // b) Pre-poll alliance first
        explanation: "Pre-poll alliance is given first preference."
    },
    {
        question: "Why has the \"Shadow Cabinet\" not been successful in India?",
        options: ["Lack of strong two-party system.", "Unconstitutional.", "Requires Amendment.", "Speaker disallowed."],
        correctAnswerIndex: 0, // a) Fragmented Opposition
        explanation: "Difficulty in forming a single alternative team."
    },
    {
        question: "Key difference between US President and Indian PM:",
        options: ["US President dissolves Congress; PM doesn't.", "US President not responsible to Congress for tenure; PM is.", "US President appoints from Congress; PM from outside.", "PM has fixed term; US President doesn't."],
        correctAnswerIndex: 1, // b) Tenure responsibility
        explanation: "President has fixed term (Stability), PM has term during confidence (Accountability)."
    },
    {
        question: "Assertion (A): Indian Parliamentary system is not a \"Cabinet Dictatorship\" true sense. Reason (R): Written Constitution, federalism, and judicial review check the power.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Checks and balances exist."
    },
    {
        question: "Assertion (A): Six-month Minister provision induction. Reason (R): Induction of technocrats/experts with mandate requirement.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct logic for the provision."
    },
    {
        question: "Suspension of Question Hour affects:",
        options: ["Legislative power.", "Accountability of Executive.", "Judicial power.", "Federal power."],
        correctAnswerIndex: 1, // b) Accountability
        explanation: "MPs cannot ask direct questions to ministers."
    },
    {
        question: "Parliament ensures \"Delegated Legislation\" doesn't overstep via:",
        options: ["Committee on Subordinate Legislation.", "Estimates Committee.", "PAC.", "Privileges Committee."],
        correctAnswerIndex: 0, // a) Subordinate Legislation Committee
        explanation: "Scrutinizes executive rules."
    },
    {
        question: "If \"Motion of Thanks\" is defeated in Lok Sabha:",
        options: ["President resigns.", "Government must resign.", "Parliament dissolved.", "No effect."],
        correctAnswerIndex: 1, // b) Government resigns
        explanation: "Equivalent to no-confidence."
    },
    {
        question: "Individual Responsibility (Article 75(2)) is effectively a power for:",
        options: ["President.", "Prime Minister.", "Speaker.", "Chief Justice."],
        correctAnswerIndex: 1, // b) Prime Minister
        explanation: "PM advises dismissal to enforce discipline."
    },
    {
        question: "In NCT Delhi (2023), civil services must be accountable to:",
        options: ["LG.", "Ministers (Elected Representatives).", "Central Govt.", "President."],
        correctAnswerIndex: 1, // b) Ministers
        explanation: "Chain of accountability."
    },
    {
        question: "\"Office of Profit\" rule enforces:",
        options: ["Separation of Powers.", "Financial Prudence.", "Federal Balance.", "Judicial Independence."],
        correctAnswerIndex: 0, // a) Separation of Powers
        explanation: "Protects legislature from executive influence."
    },
    {
        question: "Post of Leader of Opposition if no party has 10% seats:",
        options: ["Kept vacant.", "Given to single largest opposition party.", "President decides.", "SC decides."],
        correctAnswerIndex: 0, // a) Kept vacant
        explanation: "Strict 10% rule implementation in 2014/19."
    },
    {
        question: "During \"Caretaker Government\" period:",
        options: ["Major policy decisions allowed.", "No major policy decisions (Convention).", "No powers.", "President's Rule."],
        correctAnswerIndex: 1, // b) No major policy decisions
        explanation: "Conventionally restricted to routine admin."
    },
    {
        question: "Parliamentary Privileges ensure:",
        options: ["Freedom of Speech to hold Executive accountable.", "Immunity from corruption.", "Superiority over judges.", "Personal liberty."],
        correctAnswerIndex: 0, // a) Freedom of Speech
        explanation: "Protects speech for accountability."
    },
    {
        question: "Extra-constitutional advisory bodies (SPG/NSC) potentially reduce importance of:",
        options: ["Cabinet Committee on Security (CCS).", "Parliament.", "President.", "Supreme Court."],
        correctAnswerIndex: 0, // a) CCS
        explanation: "Shifts decision-making focus."
    },
    {
        question: "Judiciary justifies \"Judicial Activism\" as:",
        options: ["Enforcing Rule of Law when Executive fails.", "Taking over Executive.", "Expanding Jurisdiction.", "Amending Constitution."],
        correctAnswerIndex: 0, // a) Enforcing Rule of Law
        explanation: "Vacuum theory."
    },
    {
        question: "Lateral Entry scheme affects Parliamentary system by:",
        options: ["Experts in executive.", "Bypassing UPSC.", "Politicizing bureaucracy.", "All are debated."],
        correctAnswerIndex: 3, // d) All
        explanation: "Debated topic with multiple facets."
    },
    {
        question: "If the Prime Minister resigns:",
        options: ["Entire Council of Ministers stands dissolved.", "Only PM's post vacant.", "President becomes head.", "Senior minister becomes PM."],
        correctAnswerIndex: 0, // a) Entire Council dissolved
        explanation: "The PM is the keystone of the cabinet arch."
    },
    {
        question: "\"Cabinet Solidarity\" means:",
        options: ["Publicly support decisions.", "Same family.", "Share salaries.", "Same complex."],
        correctAnswerIndex: 0, // a) Public support
        explanation: "Joint accountability."
    },
    {
        question: "Which of the following is an example of \"Executive Legislation\"?",
        options: ["Act.", "Ordinance.", "Amendment.", "Private Bill."],
        correctAnswerIndex: 1, // b) Ordinance
        explanation: "Legislative act by Executive."
    }
];

export const CHAPTER_13_LEVELS: ChapterLevelData = {
    topicId: 13,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 13: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch13-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch13-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch13-l3-q${i + 1}` }))
        }
    ]
};
