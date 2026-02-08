
import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 19)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch19-l1-q1",
        question: "The Vice-President occupies the ______ highest office in the country.",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswerIndex: 1,
        explanation: "Vice-President is the second highest office in the country."
    },
    {
        id: "ch19-l1-q2",
        question: "The office of the Vice-President is modelled on the lines of the:",
        options: ["British Vice-President.", "American Vice-President.", "Canadian Vice-President.", "Russian Vice-President."],
        correctAnswerIndex: 1,
        explanation: "Modelled on the American Vice-President."
    },
    {
        id: "ch19-l1-q3",
        question: "The Vice-President is elected by an electoral college consisting of:",
        options: ["Only elected members of Parliament.", "Only elected members of Rajya Sabha.", "Members of both Houses of Parliament (both elected and nominated).", "Members of Parliament and State Assemblies."],
        correctAnswerIndex: 2,
        explanation: "Elected by both elected and nominated members of Parliament."
    },
    {
        id: "ch19-l1-q4",
        question: "Do the members of the State Legislative Assemblies participate in the election of the Vice-President?",
        options: ["Yes.", "No.", "Only in case of a tie.", "Only if Parliament permits."],
        correctAnswerIndex: 1,
        explanation: "State Legislative Assembly members do not participate."
    },
    {
        id: "ch19-l1-q5",
        question: "The election is held in accordance with the system of:",
        options: ["Proportional representation by means of the single transferable vote.", "First Past the Post system.", "List System.", "Mixed System."],
        correctAnswerIndex: 0,
        explanation: "Proportional representation by single transferable vote."
    },
    {
        id: "ch19-l1-q6",
        question: "The Vice-President's election is held by:",
        options: ["Secret Ballot.", "Open Ballot.", "Show of hands.", "Voice vote."],
        correctAnswerIndex: 0,
        explanation: "Voting is by secret ballot."
    },
    {
        id: "ch19-l1-q7",
        question: "All doubts and disputes in connection with the election of the Vice-President are inquired into and decided by the:",
        options: ["Election Commission of India.", "Supreme Court of India.", "High Court of Delhi.", "President of India."],
        correctAnswerIndex: 1,
        explanation: "Supreme Court decides election disputes."
    },
    {
        id: "ch19-l1-q8",
        question: "To be eligible for election as Vice-President, a person must be a citizen of India, have completed 35 years of age, and be qualified for election as a member of the:",
        options: ["Rajya Sabha.", "Lok Sabha.", "State Legislative Assembly.", "Legislative Council."],
        correctAnswerIndex: 0,
        explanation: "Must be qualified for election to Rajya Sabha."
    },
    {
        id: "ch19-l1-q9",
        question: "The oath of office to the Vice-President is administered by the:",
        options: ["President.", "Chief Justice of India.", "Speaker of Lok Sabha.", "Prime Minister."],
        correctAnswerIndex: 0,
        explanation: "President administers the oath."
    },
    {
        id: "ch19-l1-q10",
        question: "The Vice-President holds office for a term of:",
        options: ["5 years.", "6 years.", "Until the pleasure of the President.", "Until the pleasure of Parliament."],
        correctAnswerIndex: 0,
        explanation: "Holds office for 5 years."
    },
    {
        id: "ch19-l1-q11",
        question: "Does the Vice-President continue in office even after the expiration of his term until his successor assumes charge?",
        options: ["Yes.", "No, the office becomes vacant.", "No, the Deputy Chairman takes over.", "Depends on President."],
        correctAnswerIndex: 0,
        explanation: "Yes, he continues until successor assumes charge."
    },
    {
        id: "ch19-l1-q12",
        question: "The Vice-President can resign from his office at any time by addressing the resignation letter to the:",
        options: ["President.", "Prime Minister.", "Chief Justice of India.", "Speaker of Lok Sabha."],
        correctAnswerIndex: 0,
        explanation: "Resignation is addressed to the President."
    },
    {
        id: "ch19-l1-q13",
        question: "The Vice-President can be removed from his office by a resolution of the:",
        options: ["Rajya Sabha passed by an effective majority and agreed to by the Lok Sabha.", "Lok Sabha passed by an effective majority and agreed to by the Rajya Sabha.", "Both Houses by a special majority.", "Impeachment process similar to President."],
        correctAnswerIndex: 0,
        explanation: "Removal by Rajya Sabha effective majority + Lok Sabha agreement."
    },
    {
        id: "ch19-l1-q14",
        question: "A formal impeachment is required for the removal of the Vice-President.",
        options: ["True.", "False."],
        correctAnswerIndex: 1,
        explanation: "False, no formal impeachment; resolution is sufficient."
    },
    {
        id: "ch19-l1-q15",
        question: "Can a resolution for the removal of the Vice-President be introduced in the Lok Sabha?",
        options: ["Yes.", "No, only in Rajya Sabha.", "Yes, if Speaker permits.", "Yes, if 50 members support."],
        correctAnswerIndex: 1,
        explanation: "Resolution can only be introduced in Rajya Sabha."
    },
    {
        id: "ch19-l1-q16",
        question: "At least how many days' notice should be given before moving such a resolution?",
        options: ["14 days.", "30 days.", "7 days.", "No notice required."],
        correctAnswerIndex: 0,
        explanation: "14 days' notice is required."
    },
    {
        id: "ch19-l1-q17",
        question: "The Vice-President is the ex-officio Chairman of the:",
        options: ["Lok Sabha.", "Rajya Sabha.", "Both Houses.", "NITI Aayog."],
        correctAnswerIndex: 1,
        explanation: "Ex-officio Chairman of Rajya Sabha."
    },
    {
        id: "ch19-l1-q18",
        question: "While acting as President or discharging the functions of the President, does the Vice-President perform the duties of the Chairman of Rajya Sabha?",
        options: ["Yes.", "No.", "Partially.", "Only voting."],
        correctAnswerIndex: 1,
        explanation: "No, he does not perform duties of Rajya Sabha Chairman."
    },
    {
        id: "ch19-l1-q19",
        question: "During this period (acting as President), the duties of the Chairman represent performed by the:",
        options: ["Deputy Chairman of Rajya Sabha.", "Speaker of Lok Sabha.", "Chief Justice.", "Senior-most member."],
        correctAnswerIndex: 0,
        explanation: "Deputy Chairman performs the duties."
    },
    {
        id: "ch19-l1-q20",
        question: "The Vice-President can act as President for a maximum period of:",
        options: ["6 months.", "1 year.", "3 months.", "Indefinitely."],
        correctAnswerIndex: 0,
        explanation: "Maximum period is 6 months (election must be held)."
    },
    {
        id: "ch19-l1-q21",
        question: "While acting as President, the Vice-President is entitled to the salary and allowances of the:",
        options: ["President.", "Chairman of Rajya Sabha.", "Vice-President.", "Member of Parliament."],
        correctAnswerIndex: 0,
        explanation: "Entitled to President's salary and allowances."
    },
    {
        id: "ch19-l1-q22",
        question: "The Constitution has not fixed any emoluments for the Vice-President in that capacity. He draws his regular salary in his capacity as:",
        options: ["Ex-officio Chairman of the Rajya Sabha.", "Vice-President of India.", "Member of Parliament.", "Head of State."],
        correctAnswerIndex: 0,
        explanation: "Draws salary as Chairman of Rajya Sabha."
    },
    {
        id: "ch19-l1-q23",
        question: "If the office of Vice-President falls vacant, the election should be held:",
        options: ["As soon as possible (no 6-month limit specified).", "Within 6 months.", "Within 1 year.", "Immediately."],
        correctAnswerIndex: 0,
        explanation: "Election to be held 'as soon as possible'."
    },
    {
        id: "ch19-l1-q24",
        question: "Who determines the doubts and disputes relating to the election of the Vice-President?",
        options: ["Supreme Court.", "Election Commission.", "Parliament.", "President."],
        correctAnswerIndex: 0,
        explanation: "Supreme Court determines disputes."
    },
    {
        id: "ch19-l1-q25",
        question: "Can the election of the Vice-President be challenged on the ground that the electoral college was incomplete (e.g., some seats were vacant)?",
        options: ["Yes.", "No.", "Yes, if substantial seats vacant.", "Depends on court."],
        correctAnswerIndex: 1,
        explanation: "No, cannot be challenged on ground of vacancy."
    },
    {
        id: "ch19-l1-q26",
        question: "Are the nominated members of Parliament eligible to vote in the Vice-Presidential election?",
        options: ["Yes.", "No.", "Only if they join a party.", "Only in Lok Sabha."],
        correctAnswerIndex: 0,
        explanation: "Yes, nominated members can vote."
    },
    {
        id: "ch19-l1-q27",
        question: "Is the Vice-President a member of the House of which he is the Chairman?",
        options: ["Yes.", "No.", "Only if elected.", "Ex-officio member."],
        correctAnswerIndex: 1,
        explanation: "No, he is not a member of Rajya Sabha."
    },
    {
        id: "ch19-l1-q28",
        question: "Can the Vice-President vote in the first instance in the Rajya Sabha?",
        options: ["Yes.", "No.", "Only on financial bills.", "Only on constitutional amendments."],
        correctAnswerIndex: 1,
        explanation: "No, he has no vote in the first instance."
    },
    {
        id: "ch19-l1-q29",
        question: "Can the Vice-President exercise a casting vote in the case of an equality of votes?",
        options: ["Yes.", "No.", "Only if permitted by the House.", "Only in joint sittings."],
        correctAnswerIndex: 0,
        explanation: "Yes, he has a casting vote."
    },
    {
        id: "ch19-l1-q30",
        question: "Is the Vice-President subject to impeachment for violation of the Constitution?",
        options: ["Yes.", "No (Constitution does not mention grounds).", "Yes, on grounds of incapacity.", "Yes, for corruption."],
        correctAnswerIndex: 1,
        explanation: "No formal impeachment; Constitution mentions no grounds."
    },
    {
        id: "ch19-l1-q31",
        question: "When the Vice-President acts as President, does he have the power to pardon (Article 72)?",
        options: ["Yes.", "No.", "Only for minor offenses.", "Only with CJI concurrence."],
        correctAnswerIndex: 0,
        explanation: "Yes, he exercises all powers of the President."
    },
    {
        id: "ch19-l1-q32",
        question: "The nomination of a candidate for election to the office of Vice-President must be subscribed by at least ______ electors as proposers and ______ electors as seconders.",
        options: ["20 proposers, 20 seconders.", "50 proposers, 50 seconders.", "10 proposers, 10 seconders.", "5 proposers, 5 seconders."],
        correctAnswerIndex: 0,
        explanation: "20 proposers and 20 seconders required."
    },
    {
        id: "ch19-l1-q33",
        question: "The security deposit for the Vice-Presidential election is:",
        options: ["₹15,000.", "₹25,000.", "₹10,000.", "₹5,000."],
        correctAnswerIndex: 0,
        explanation: "Security deposit is ₹15,000."
    },
    {
        id: "ch19-l1-q34",
        question: "Who was the first Vice-President of India?",
        options: ["Dr. S. Radhakrishnan.", "Dr. Zakir Hussain.", "V.V. Giri.", "G.S. Pathak."],
        correctAnswerIndex: 0,
        explanation: "Dr. S. Radhakrishnan was the first Vice-President."
    },
    {
        id: "ch19-l1-q35",
        question: "Can a sitting Governor of a State contest the election for Vice-President?",
        options: ["Yes, the office of Governor is not an office of profit for this purpose.", "No, he must resign first.", "Yes, but he must take leave.", "No, strictly prohibited."],
        correctAnswerIndex: 0,
        explanation: "Yes, Governor is not an office of profit."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch19-l2-q1",
        question: "The American Vice-President succeeds to the presidency when it falls vacant, and serves the unexpired term of his predecessor. Does the Indian Vice-President do the same?",
        options: ["Yes.", "No, he acts as President only until a new President is elected (max 6 months).", "Yes, if Parliament approves.", "Yes, if the remaining term is less than 1 year."],
        correctAnswerIndex: 1,
        explanation: "No, he acts only until a new President is elected."
    },
    {
        id: "ch19-l2-q2",
        question: "The Constitution has not assigned any significant function to the Vice-President in that capacity. Hence, scholars often call him:",
        options: ["His Superfluous Highness.", "The Second Citizen.", "The Spare Wheel.", "Note the wording."],
        correctAnswerIndex: 0,
        explanation: "Often called 'His Superfluous Highness'."
    },
    {
        id: "ch19-l2-q3",
        question: "While acting as President, can the Vice-President preside over the Rajya Sabha?",
        options: ["Yes.", "No.", "Only for formal occasions.", "If the House permits."],
        correctAnswerIndex: 1,
        explanation: "No, he cannot preside over Rajya Sabha while acting as President."
    },
    {
        id: "ch19-l2-q4",
        question: "While acting as President, the salary of the Vice-President (as Chairman of Rajya Sabha) ______.",
        options: ["Continues.", "Ceases.", "Is reduced by half.", "Is doubled."],
        correctAnswerIndex: 1,
        explanation: "Salary as Chairman ceases."
    },
    {
        id: "ch19-l2-q5",
        question: "The removal resolution of the Vice-President is listed in Article 67(b). It requires:",
        options: ["Majority of all the then members of the Rajya Sabha (Effective Majority) + Simple Majority in Lok Sabha.", "Special Majority in both Houses.", "Simple Majority in both Houses.", "Absolute Majority in both Houses."],
        correctAnswerIndex: 0,
        explanation: "Effective Majority in RS + Simple Majority in LS."
    },
    {
        id: "ch19-l2-q6",
        question: "This \"Effective Majority\" in Rajya Sabha means:",
        options: ["More than 50% of the Total Strength.", "More than 50% of the Total Strength minus Vacancies.", "Two-thirds of members present and voting.", "Two-thirds of total membership."],
        correctAnswerIndex: 1,
        explanation: "Majority of 'then members' (Total - Vacancies)."
    },
    {
        id: "ch19-l2-q7",
        question: "Dr. S. Radhakrishnan was elected as Vice-President for how many terms?",
        options: ["Once.", "Twice.", "Thrice.", "Four times."],
        correctAnswerIndex: 1,
        explanation: "He was elected twice (1952 and 1957)."
    },
    {
        id: "ch19-l2-q8",
        question: "Krishna Kant was the first Vice-President to:",
        options: ["Resign.", "Die in office.", "Be removed.", "Become President."],
        correctAnswerIndex: 1,
        explanation: "First Vice-President to die in office."
    },
    {
        id: "ch19-l2-q9",
        question: "When B.D. Jatti acted as President (after Fakhruddin Ali Ahmed's death), who discharged the duties of the Chairman of Rajya Sabha?",
        options: ["The Deputy Chairman.", "A member nominated by the President.", "The Speaker.", "The Chief Justice."],
        correctAnswerIndex: 0,
        explanation: "The Deputy Chairman discharged the duties."
    },
    {
        id: "ch19-l2-q10",
        question: "Only one Vice-President resigned from his office to contest for the Presidency and won. Who was he?",
        options: ["V.V. Giri.", "R. Venkataraman.", "S.D. Sharma.", "B.S. Shekhawat."],
        correctAnswerIndex: 0,
        explanation: "V.V. Giri resigned to contest."
    },
    {
        id: "ch19-l2-q11",
        question: "Is the Vice-President impeached?",
        options: ["Yes, Article 61 applies.", "No, Article 61 applies only to the President.", "Yes, but by a different procedure.", "Yes, by the Supreme Court."],
        correctAnswerIndex: 1,
        explanation: "No, Article 61 is only for President."
    },
    {
        id: "ch19-l2-q12",
        question: "Can the Vice-President be removed on the ground of \"Violation of the Constitution\"?",
        options: ["The Constitution mentions no ground for his removal.", "Yes, explicitly mentioned.", "No, only for corruption.", "No, only for incapacity."],
        correctAnswerIndex: 0,
        explanation: "Constitution mentions no ground for removal."
    },
    {
        id: "ch19-l2-q13",
        question: "Who decides the election disputes of the Vice-President?",
        options: ["Supreme Court (Article 71).", "High Court.", "Election Commission.", "Parliament."],
        correctAnswerIndex: 0,
        explanation: "Supreme Court under Article 71."
    },
    {
        id: "ch19-l2-q14",
        question: "The Vice-Presidential election is conducted by:",
        options: ["Election Commission of India.", "Parliament Secretariat.", "Supreme Court.", "State Election Commissions."],
        correctAnswerIndex: 0,
        explanation: "Conducted by Election Commission of India."
    },
    {
        id: "ch19-l2-q15",
        question: "The \"Returning Officer\" for the Vice-Presidential election is typically:",
        options: ["Secretary General of Lok Sabha or Rajya Sabha (by rotation).", "Chief Election Commissioner.", "Law Minister.", "Cabinet Secretary."],
        correctAnswerIndex: 0,
        explanation: "Secretary General of LS/RS by rotation."
    },
    {
        id: "ch19-l2-q16",
        question: "If a person is elected as Vice-President, he is deemed to have vacated his seat in Parliament or State Legislature on:",
        options: ["The date he enters upon his office as Vice-President.", "The date of his election.", "The date of his nomination.", "Generally he resigns before contesting."],
        correctAnswerIndex: 0,
        explanation: "Vacates seat on date of entering office."
    },
    {
        id: "ch19-l2-q17",
        question: "The oath of the Vice-President (Article 69) is to:",
        options: ["Bear true faith and allegiance to the Constitution.", "Preserve, protect and defend the Constitution (This is for President).", "Uphold the sovereignty of India.", "Do right to all manner of people."],
        correctAnswerIndex: 0,
        explanation: "Bear true faith and allegiance to the Constitution."
    },
    {
        id: "ch19-l2-q18",
        question: "The President's oath includes \"Preserve, protect and defend the Constitution\". The Vice-President's oath is:",
        options: ["Simpler (Faith and allegiance + faithfully discharge duty).", "Same as President.", "Same as PM.", "Same as CJI."],
        correctAnswerIndex: 0,
        explanation: "Simpler: Faith and allegiance + faithfully discharge duty."
    },
    {
        id: "ch19-l2-q19",
        question: "Can the Vice-President be re-elected?",
        options: ["Yes, for any number of terms.", "No, only two terms.", "No, only one term.", "Yes, but not consecutively."],
        correctAnswerIndex: 0,
        explanation: "Yes, for any number of terms."
    },
    {
        id: "ch19-l2-q20",
        question: "If the election of a person as Vice-President is declared void by the Supreme Court, act done by him before the date of such declaration are:",
        options: ["Invalidated.", "Not invalidated (They remain in force).", "Suspended.", "Reviewed by Parliament."],
        correctAnswerIndex: 1,
        explanation: "Acts remain valid (not invalidated)."
    },
    {
        id: "ch19-l2-q21",
        question: "Comparison with Speaker. The Speaker is a member of the House. The Vice-President is not. Both have a casting vote. Who can vote in the first instance?",
        options: ["Speaker (No) - VP (No).", "Speaker (No) - VP (Yes).", "Speaker (Yes, in removal) - VP (No).", "Neither."],
        correctAnswerIndex: 2,
        explanation: "Neither generally, but Speaker can vote in removal proceedings."
    },
    {
        id: "ch19-l2-q22",
        question: "During the removal of the Vice-President in Rajya Sabha, can he vote?",
        options: ["No, he cannot vote (not a member).", "Yes, he can vote.", "He has a casting vote.", "He can vote in first instance."],
        correctAnswerIndex: 0,
        explanation: "No, he cannot vote as he is not a member."
    },
    {
        id: "ch19-l2-q23",
        question: "During the removal of the Speaker in Lok Sabha, can he vote?",
        options: ["Yes, in the first instance (Article 96).", "No.", "Only casting vote.", "Only if tie."],
        correctAnswerIndex: 0,
        explanation: "Yes, Speaker can vote in first instance during removal."
    },
    {
        id: "ch19-l2-q24",
        question: "The Vice-President submits his resignation to the President. Who communicates it to the Speaker?",
        options: ["President (unlike VP resignation which goes to President).", "No specific provision.", "VP himself.", "Cabinet."],
        correctAnswerIndex: 1,
        explanation: "No specific provision for communicating VP resignation."
    },
    {
        id: "ch19-l2-q25",
        question: "Is there any provision for the \"Deputy Vice-President\"?",
        options: ["No.", "Yes.", "In practice only.", "In Constitution."],
        correctAnswerIndex: 0,
        explanation: "No such office exists."
    },
    {
        id: "ch19-l2-q26",
        question: "Who was the only Vice-President to die in office?",
        options: ["Krishna Kant.", "B.S. Shekhawat.", "G.S. Pathak.", "B.D. Jatti."],
        correctAnswerIndex: 0,
        explanation: "Krishna Kant."
    },
    {
        id: "ch19-l2-q27",
        question: "When the Vice-President acts as President, who performs the duties of the Chairman of Rajya Sabha?",
        options: ["Deputy Chairman of Rajya Sabha.", "Senior-most member.", "Speaker.", "None."],
        correctAnswerIndex: 0,
        explanation: "Deputy Chairman."
    },
    {
        id: "ch19-l2-q28",
        question: "Can the Vice-President be appointed as the Governor of a State?",
        options: ["No, he holds a constitutional office.", "Yes, after his term ends.", "Yes, concurrently.", "Yes, if President allows."],
        correctAnswerIndex: 1,
        explanation: "Yes, after his term ends (no bar)."
    },
    {
        id: "ch19-l2-q29",
        question: "The Vice-President is chairman of which of the following awards juries?",
        options: ["Pravasi Bharatiya Samman.", "Padma Awards.", "Gandhi Peace Prize.", "Bharat Ratna."],
        correctAnswerIndex: 0,
        explanation: "Chairman of Pravasi Bharatiya Samman jury."
    },
    {
        id: "ch19-l2-q30",
        question: "Does the Vice-President have a right to speak in the Rajya Sabha?",
        options: ["Yes, as its Chairman.", "No.", "Only on bills.", "Only on Fridays."],
        correctAnswerIndex: 0,
        explanation: "Yes, as Presiding Officer."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch19-l3-q1",
        question: "The Supreme Court in the \"Dr. N.B. Khare vs Election Commission\" (1957) case held that:",
        options: ["The election of the President/Vice-President cannot be challenged on the ground that there is a vacancy in the Electoral College.", "The election can be challenged on vacancy grounds.", "The election must be postponed if seats are vacant.", "The EC must fill vacancies first."],
        correctAnswerIndex: 0,
        explanation: "Cannot be challenged on ground of vacancy in electoral college."
    },
    {
        id: "ch19-l3-q2",
        question: "Jagdeep Dhankhar, the current Vice-President, was previously the:",
        options: ["Governor of West Bengal.", "Union Minister of Law.", "Governor of Bihar.", "Chief Justice of Rajasthan."],
        correctAnswerIndex: 0,
        explanation: "Previously Governor of West Bengal."
    },
    {
        id: "ch19-l3-q3",
        question: "If the Rajya Sabha initiates the removal of the Vice-President, can the Vice-President preside over the session?",
        options: ["Article 92 says \"No\". He cannot preside while a resolution for his removal is under consideration.", "Yes, he can preside.", "He can be present but provided he does not vote.", "He presides until voted out."],
        correctAnswerIndex: 0,
        explanation: "Article 92: Cannot preside during removal consideration."
    },
    {
        id: "ch19-l3-q4",
        question: "If the Vice-President cannot preside under Article 92, who presides?",
        options: ["Deputy Chairman.", "A member from the Panel of Vice-Chairmen.", "Speaker.", "Any member determined by the House."],
        correctAnswerIndex: 0,
        explanation: "Deputy Chairman presides."
    },
    {
        id: "ch19-l3-q5",
        question: "While a resolution for his removal is under consideration, the Vice-President has the right to speak and take part in the proceedings of:",
        options: ["Rajya Sabha.", "Lok Sabha.", "Joint Sitting.", "None."],
        correctAnswerIndex: 0,
        explanation: "Can speak/participate in Rajya Sabha proceedings."
    },
    {
        id: "ch19-l3-q6",
        question: "However, unlike the Speaker (who can vote in the first instance during his removal), the Vice-President:",
        options: ["Was not given the right to vote at all (Article 92(2)).", "Can vote in first instance.", "Can casting vote.", "Can vote if tie."],
        correctAnswerIndex: 0,
        explanation: "Article 92(2): No right to vote at all during removal."
    },
    {
        id: "ch19-l3-q7",
        question: "The Vice-President also serves as the Chancellor of central universities like:",
        options: ["Delhi University, Panjab University, Pondicherry University.", "JNU, BHU.", "IGNOU.", "All Central Universities."],
        correctAnswerIndex: 0,
        explanation: "Chancellor of PU, DU, Pondicherry University etc."
    },
    {
        id: "ch19-l3-q8",
        question: "The election of the Vice-President 2022. The opposition candidate was:",
        options: ["Margaret Alva.", "Gopalalkrishna Gandhi.", "Yashwant Sinha.", "Meira Kumar."],
        correctAnswerIndex: 0,
        explanation: "Margaret Alva was the opposition candidate."
    },
    {
        id: "ch19-l3-q9",
        question: "Assertion (A): The Constitution provides for the removal of the Vice-President by a resolution of the Rajya Sabha agreed to by the Lok Sabha. Reason (R): The Vice-President is the ex-officio Chairman of the Rajya Sabha, so the initiative for his removal must come from that House. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains A."
    },
    {
        id: "ch19-l3-q10",
        question: "The Vice-President's pension is:",
        options: ["50% of the salary of the Vice-President (Chairman of RS).", "Not provided in the Constitution (Provided by Parliament Act).", "Same as President.", "100% of salary."],
        correctAnswerIndex: 1,
        explanation: "Provided by Parliament Act, 50% of salary."
    },
    {
        id: "ch19-l3-q11",
        question: "The \"Order of Precedence\". The Vice-President ranks:",
        options: ["Second (After President).", "Third (After President and PM).", "First.", "Fourth."],
        correctAnswerIndex: 0,
        explanation: "Ranks Second in Order of Precedence."
    },
    {
        id: "ch19-l3-q12",
        question: "During the joint sitting of Parliament, if the Speaker and Deputy Speaker are absent, who presides?",
        options: ["The Deputy Chairman of Rajya Sabha (The Vice-President/Chairman does NOT preside over Joint Sitting).", "The Vice-President.", "The PM.", "Senior member."],
        correctAnswerIndex: 0,
        explanation: "Deputy Chairman (VP does not preside Joint Sittings)."
    },
    {
        id: "ch19-l3-q13",
        question: "Why does the Vice-President not preside over a Joint Sitting?",
        options: ["Because he is not a member of either House of Parliament.", "Because he is busy.", "Because he is from Rajya Sabha.", "Protocol."],
        correctAnswerIndex: 0,
        explanation: "Because he is not a member of either House."
    },
    {
        id: "ch19-l3-q14",
        question: "Can the Vice-President be re-elected for a third term?",
        options: ["Constitution places no bar.", "No, strictly two terms.", "Convention is two terms (Hamid Ansari was re-elected).", "No."],
        correctAnswerIndex: 0,
        explanation: "No Constitutional bar."
    },
    {
        id: "ch19-l3-q15",
        question: "In the Warrant of Precedence, who comes after the Vice-President?",
        options: ["Prime Minister.", "Governors of States within their respective states.", "Former Presidents.", "Deputy PM."],
        correctAnswerIndex: 0,
        explanation: "Prime Minister ranks third."
    },
    {
        id: "ch19-l3-q16",
        question: "The Vice-President's election dispute petition must be filed within:",
        options: ["30 days of the date of publication of the result.", "15 days.", "60 days.", "90 days."],
        correctAnswerIndex: 0,
        explanation: "Within 30 days of result."
    },
    {
        id: "ch19-l3-q17",
        question: "The \"Acting President\" (Vice-President) can resign by writing to:",
        options: ["The President (The office, theoretically).", "The Chief Justice.", "The Speaker.", "Self."],
        correctAnswerIndex: 0,
        explanation: "Resigns to the office of President."
    },
    {
        id: "ch19-l3-q18",
        question: "The Anti-Defection Law (10th Schedule) applies to:",
        options: ["MPs and MLAs.", "President.", "Vice-President.", "Governor."],
        correctAnswerIndex: 0,
        explanation: "Applies to MPs and MLAs only."
    },
    {
        id: "ch19-l3-q19",
        question: "Who decides the disqualification of the Vice-President from being a member of Rajya Sabha (if he was one)?",
        options: ["He ceases to be a member automatically upon election (Article 66(2)).", "President.", "Speaker.", "EC."],
        correctAnswerIndex: 0,
        explanation: "Ceases to be member automatically."
    },
    {
        id: "ch19-l3-q20",
        question: "The Vice-President's \"Term of Office\" (5 years) includes:",
        options: ["The period until his successor enters upon his office (Article 67(c)).", "Only 5 calendar years.", "Until Parliament dissolves.", "Until President dismisses."],
        correctAnswerIndex: 0,
        explanation: "Includes period until successor enters office."
    },
    {
        id: "ch19-l3-q21",
        question: "If the Vice-President dies in office, who performs his duties as Chairman of Rajya Sabha?",
        options: ["Deputy Chairman.", "Speaker.", "President's nominee.", "Secretary General."],
        correctAnswerIndex: 0,
        explanation: "Deputy Chairman performs duties."
    },
    {
        id: "ch19-l3-q22",
        question: "The Vice-President is answerable to:",
        options: ["The Constitution.", "The President.", "The Parliament.", "The Courts."],
        correctAnswerIndex: 0,
        explanation: "Answerable to the Constitution."
    },
    {
        id: "ch19-l3-q23",
        question: "Can a Minister contest the Vice-Presidential election?",
        options: ["Yes, but if elected, he is holding an office of profit? No, Ministers are exempted from office of profit disqualification.", "No, he must resign first.", "Yes, but he acts as both.", "No."],
        correctAnswerIndex: 0,
        explanation: "Yes, Ministers are exempted but must vacate ministry on election."
    },
    {
        id: "ch19-l3-q24",
        question: "Comparison: US Vice-President is the President of the Senate. Indian Vice-President is Chairman of Rajya Sabha. Difference:",
        options: ["US VP is not a member of Senate. Indian VP is not a member of RS. (Similarity). US VP succeeds to Presidency for remaining term. Indian VP acts only temporarily. (Difference).", "No difference.", "US VP is appointed.", "Indian VP is appointed."],
        correctAnswerIndex: 0,
        explanation: "Key difference is succession to Presidency."
    },
    {
        id: "ch19-l3-q25",
        question: "The salary of the Chairman of Rajya Sabha is charged on:",
        options: ["Consolidated Fund of India.", "Public Account.", "Contingency Fund.", "Estimates."],
        correctAnswerIndex: 0,
        explanation: "Charged on Consolidated Fund of India."
    },
    {
        id: "ch19-l3-q26",
        question: "Article 71 says election matters of President and Vice-President are regulated by:",
        options: ["Parliament by law (Presidential and Vice-Presidential Elections Act, 1952).", "Election Commission rules.", "Supreme Court rules.", "Presidential Order."],
        correctAnswerIndex: 0,
        explanation: "Regulated by Parliament by law."
    },
    {
        id: "ch19-l3-q27",
        question: "If the Vice-Presidency is vacant, and the President dies. Who acts as President?",
        options: ["Chief Justice of India.", "Speaker.", "Deputy Chairman.", "PM."],
        correctAnswerIndex: 0,
        explanation: "Chief Justice of India."
    },
    {
        id: "ch19-l3-q28",
        question: "The oath of the Vice-President is mentioned in:",
        options: ["Article 69.", "Third Schedule.", "Second Schedule.", "Fourth Schedule."],
        correctAnswerIndex: 0,
        explanation: "Mentioned in Article 69 (Not in Third Schedule)."
    },
    {
        id: "ch19-l3-q29",
        question: "Which Vice-President called the Rajya Sabha \"The House of Elders, not the House of Eldest\"?",
        options: ["M. Venkaiah Naidu.", "Jagdeep Dhankhar.", "Hamid Ansari.", "S. Radhakrishnan."],
        correctAnswerIndex: 0,
        explanation: "M. Venkaiah Naidu."
    },
    {
        id: "ch19-l3-q30",
        question: "The power to decide the date of election of Vice-President rests with:",
        options: ["Election Commission of India.", "Parliament.", "President.", "Outgoing VP."],
        correctAnswerIndex: 0,
        explanation: "Election Commission of India."
    }
];

export const CHAPTER_19_LEVELS: ChapterLevelData = {
    topicId: 19,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 19",
            questions: LEVEL_1_QUESTIONS
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge",
            questions: LEVEL_2_QUESTIONS
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context",
            questions: LEVEL_3_QUESTIONS
        }
    ]
};
