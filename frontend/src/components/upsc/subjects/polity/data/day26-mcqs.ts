import type { MCQ } from './mcq-utils';

export const DAY26_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 26)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which articles in Part V of the Constitution specifically deal with the Supreme Court?",
        options: [
            "Articles 52 to 78",
            "Articles 124 to 147",
            "Articles 148 to 151",
            "Articles 214 to 231"
        ],
        correctAnswer: 1, // B
        explanation: "Articles 124 to 147 in Part V of the Constitution deal with the organisation, independence, jurisdiction, powers, procedures and so on of the Supreme Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 2,
        question: "When was the Supreme Court of India inaugurated?",
        options: [
            "August 15, 1947",
            "November 26, 1949",
            "January 26, 1950",
            "January 28, 1950"
        ],
        correctAnswer: 3, // D
        explanation: "The Supreme Court of India was inaugurated on January 28, 1950.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 3,
        question: "Which pre-independence judicial body did the Supreme Court of India succeed?",
        options: [
            "The High Court of Calcutta",
            "The Privy Council",
            "The Federal Court of India",
            "The Crown Court"
        ],
        correctAnswer: 2, // C
        explanation: "It succeeded the Federal Court of India, established under the Government of India Act of 1935.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 4,
        question: "Who is authorized by the Constitution to regulate the strength (number of judges) of the Supreme Court?",
        options: [
            "The President of India",
            "The Chief Justice of India",
            "The Parliament",
            "The Union Cabinet"
        ],
        correctAnswer: 2, // C
        explanation: "The Parliament is authorised to regulate the strength of the Supreme Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Authority", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 5,
        question: "Who appoints the judges of the Supreme Court?",
        options: [
            "The Chief Justice of India",
            "The Prime Minister",
            "The Law Minister",
            "The President"
        ],
        correctAnswer: 3, // D
        explanation: "The judges of the Supreme Court are appointed by the President.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Role Identification", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 6,
        question: "According to the 'Third Judges Case' (1998), the Chief Justice of India must consult a collegium of how many senior-most judges of the Supreme Court for appointments?",
        options: [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        correctAnswer: 2, // C
        explanation: "The Chief Justice of India should consult a collegium of four senior-most judges of the Supreme Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 7,
        question: "Which Constitutional Amendment Act attempted to replace the Collegium System with the National Judicial Appointments Commission (NJAC)?",
        options: [
            "97th Amendment Act",
            "99th Amendment Act",
            "100th Amendment Act",
            "101st Amendment Act"
        ],
        correctAnswer: 1, // B
        explanation: "The 99th Constitutional Amendment Act of 2014 and the National Judicial Appointments Commission Act of 2014 replaced the collegium system of appointing judges to the Supreme Court and High Courts with a new body called the National Judicial Appointments Commission (NJAC).",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Constitutional Amendment", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 8,
        question: "In which year did the Supreme Court declare the 99th Constitutional Amendment Act (NJAC) unconstitutional and void?",
        options: [
            "2014",
            "2015",
            "2016",
            "2017"
        ],
        correctAnswer: 1, // B
        explanation: "In 2015, the Supreme Court declared both the 99th Constitutional Amendment as well as the NJAC Act as unconstitutional and void.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 9,
        question: "To be appointed as a judge of the Supreme Court, a person must have been a judge of a High Court (or High Courts in succession) for at least:",
        options: [
            "3 years",
            "5 years",
            "7 years",
            "10 years"
        ],
        correctAnswer: 1, // B
        explanation: "He should have been a judge of a High Court (or high courts in succession) for five years.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Qualification", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 10,
        question: "To be appointed as a judge of the Supreme Court based on advocacy, a person must have been an advocate of a High Court for at least:",
        options: [
            "5 years",
            "10 years",
            "15 years",
            "20 years"
        ],
        correctAnswer: 1, // B
        explanation: "He should have been an advocate of a High Court (or High Courts in succession) for ten years.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Qualification", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 11,
        question: "A distinguished jurist can be appointed as a Judge of the Supreme Court if they hold that distinction in the opinion of the:",
        options: [
            "Chief Justice of India",
            "Parliament",
            "President",
            "Bar Council of India"
        ],
        correctAnswer: 2, // C
        explanation: "He should be a distinguished jurist in the opinion of the president.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Qualification", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 12,
        question: "Does the Constitution prescribe a minimum age for appointment as a judge of the Supreme Court?",
        options: [
            "Yes, 35 years.",
            "Yes, 45 years.",
            "Yes, 50 years.",
            "No, the Constitution has not prescribed a minimum age."
        ],
        correctAnswer: 3, // D
        explanation: "From the above, it is clear that the Constitution has not prescribed a minimum age for appointment as a judge of the Supreme Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Qualification", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 13,
        question: "Before whom does a person appointed as a judge of the Supreme Court make and subscribe an oath or affirmation?",
        options: [
            "The Chief Justice of India",
            "The Prime Minister",
            "The President, or some person appointed by him for this purpose",
            "The Speaker of the Lok Sabha"
        ],
        correctAnswer: 2, // C
        explanation: "A person appointed as a judge of the Supreme Court, before entering upon his office, has to make and subscribe an oath or affirmation before the President, or some person appointed by him for this purpose.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Oath", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 14,
        question: "At what age does a Judge of the Supreme Court retire?",
        options: [
            "60 years",
            "62 years",
            "65 years",
            "70 years"
        ],
        correctAnswer: 2, // C
        explanation: "He holds office until he attains the age of 65 years.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Tenure", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 15,
        question: "To whom does a Judge of the Supreme Court write to resign from his office?",
        options: [
            "The Parliament",
            "The Chief Justice of India",
            "The Law Minister",
            "The President"
        ],
        correctAnswer: 3, // D
        explanation: "He can resign his office by writing to the president.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Resignation", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 16,
        question: "Who has the power to issue the formal order to remove a Judge of the Supreme Court?",
        options: [
            "The Parliament",
            "The Chief Justice of India",
            "The President",
            "The Prime Minister"
        ],
        correctAnswer: 2, // C
        explanation: "A judge of the Supreme Court can be removed from his Office by an order of the president.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Removal", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 17,
        question: "What are the two grounds mentioned in the Constitution for the removal of a Supreme Court judge?",
        options: [
            "Violation of the Constitution and Corruption",
            "Proved misbehaviour or incapacity",
            "Insolvency and Moral turpitude",
            "Treason and Bribery"
        ],
        correctAnswer: 1, // B
        explanation: "The grounds of removal are two—proved misbehaviour or incapacity.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Grounds for Removal", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 18,
        question: "Which Act regulates the procedure relating to the removal of a judge of the Supreme Court by the process of impeachment?",
        options: [
            "The Supreme Court Rules, 1966",
            "The Constitution (Amendment) Act, 1971",
            "The Judges (Inquiry) Act, 1968",
            "The Representation of the People Act, 1951"
        ],
        correctAnswer: 2, // C
        explanation: "The Judges (Inquiry) Act (1968) regulates the procedure relating to the removal of a judge of the Supreme Court by the process of impeachment.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 19,
        question: "To initiate the removal process under the Judges (Inquiry) Act, a removal motion in the Lok Sabha must be signed by at least how many members?",
        options: [
            "50 members",
            "100 members",
            "150 members",
            "200 members"
        ],
        correctAnswer: 1, // B
        explanation: "A removal motion signed by 100 members (in the case of Lok Sabha) or 50 members (in the case of Rajya Sabha) is to be given to the Speaker/Chairman.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Procedure", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 20,
        question: "Who determines the salaries, allowances, privileges, leave, and pension of the Judges of the Supreme Court?",
        options: [
            "The President",
            "The Finance Commission",
            "The Parliament",
            "The Chief Justice of India"
        ],
        correctAnswer: 2, // C
        explanation: "The salaries, allowances, privileges, leave and pension of the judges of the Supreme Court are determined from time to time by the Parliament.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Financial Authority", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 21,
        question: "Can the salaries and allowances of Supreme Court judges be altered to their disadvantage after their appointment?",
        options: [
            "Yes, by a simple majority in Parliament.",
            "Yes, immediately after an election.",
            "No, except during a National Emergency.",
            "No, except during a Financial Emergency."
        ],
        correctAnswer: 3, // D
        explanation: "They cannot be varied to their disadvantage after their appointment except during a financial emergency.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Safeguard", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 22,
        question: "Who can appoint a judge of the Supreme Court as an Acting Chief Justice of India when the office of Chief Justice is vacant?",
        options: [
            "The outgoing Chief Justice of India",
            "The Parliament",
            "The President",
            "The senior-most judge automatically takes over without appointment"
        ],
        correctAnswer: 2, // C
        explanation: "The President can appoint a judge of the Supreme Court as an acting Chief Justice of India when... the office of Chief Justice of India is vacant.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Appointment", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 23,
        question: "When there is a lack of quorum of permanent judges, who can appoint a Judge of a High Court as an ad hoc judge of the Supreme Court?",
        options: [
            "The President",
            "The Chief Justice of India (with previous consent of the President)",
            "The Parliament",
            "The Chief Justice of the concerned High Court directly"
        ],
        correctAnswer: 1, // B
        explanation: "The Chief Justice of India can appoint a judge of a High Court as an ad hoc judge of the Supreme Court... He can do so only after consultation with the chief justice of the High Court concerned and with the previous consent of the president.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Appointment", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 24,
        question: "A retired judge acting as a judge of the Supreme Court is entitled to such allowances as determined by the:",
        options: [
            "President",
            "Parliament",
            "Chief Justice of India",
            "Consolidated Fund of India directly"
        ],
        correctAnswer: 0, // A
        explanation: "He is entitled to such allowances as the president may determine.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Allowances", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 25,
        question: "Which city is declared by the Constitution as the seat of the Supreme Court?",
        options: [
            "Mumbai",
            "Kolkata",
            "Delhi",
            "Chennai"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution declares Delhi as the seat of the Supreme Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 26,
        question: "Can the Chief Justice of India appoint a place other than Delhi as the seat of the Supreme Court?",
        options: [
            "No, Delhi is the only constitutionally permitted seat.",
            "Yes, independently without consulting anyone.",
            "Yes, but only with the approval of the Parliament.",
            "Yes, but only with the approval of the President."
        ],
        correctAnswer: 3, // D
        explanation: "But, it also authorises the chief justice of India to appoint other place or places as seat of the Supreme Court. He can take decision in this regard only with the approval of the President.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Seat of Court", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 27,
        question: "Who approves the rules made by the Supreme Court for regulating the general practice and procedure of the Court?",
        options: [
            "The Parliament",
            "The Law Minister",
            "The President",
            "They do not require approval."
        ],
        correctAnswer: 2, // C
        explanation: "The Supreme Court can, with the approval of the president, make rules for regulating generally the practice and procedure of the Court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Procedure", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 28,
        question: "The Constitutional cases or references made by the President under Article 143 are decided by a Bench consisting of at least how many judges?",
        options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
        ],
        correctAnswer: 1, // B
        explanation: "The Constitutional cases or references made by the President under Article 143 are decided by a Bench consisting of at least five judges.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Bench Strength", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 29,
        question: "What type of bench usually decides 'all other cases' (non-constitutional cases) in the Supreme Court?",
        options: [
            "A Single-Judge Bench",
            "A Division Bench of not less than three judges",
            "A Division Bench of not less than two judges",
            "A Full Court Bench"
        ],
        correctAnswer: 2, // C
        explanation: "All other cases are usually decided by a bench consisting of not less than two judges.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Bench Strength", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    },
    {
        id: 30,
        question: "Are the judgments of the Supreme Court delivered by open court?",
        options: [
            "Yes, all judgments are delivered in open court.",
            "No, they are always delivered in closed chambers.",
            "Only judgments regarding the President are open.",
            "Only constitutional judgments are open."
        ],
        correctAnswer: 0, // A
        explanation: "The judgments are delivered by the open court.",
        level: "Easy", topic: "Supreme Court", difficulty_tier: "Level_1", cognitive_tag: "Procedure", source_mapping: { book: "M. Laxmikanth", chapter: "Supreme Court" }
    }
];
