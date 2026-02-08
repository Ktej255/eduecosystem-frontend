
import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 18)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch18-l1-q1",
        question: "Articles 52 to 78 in Part V of the Constitution deal with the:",
        options: ["Union Executive.", "Union Legislature.", "State Executive.", "State Legislature."],
        correctAnswerIndex: 0,
        explanation: "Articles 52-78 deal with the Union Executive."
    },
    {
        id: "ch18-l1-q2",
        question: "The President is the head of the Indian State. He is the first citizen of India and acts as the symbol of:",
        options: ["Unity, integrity and solidarity of the nation.", "Democracy.", "Secularism.", "Federalism."],
        correctAnswerIndex: 0,
        explanation: "President symbolizes unity, integrity, and solidarity."
    },
    {
        id: "ch18-l1-q3",
        question: "The President is elected not directly by the people but by members of an electoral college consisting of:",
        options: ["The elected members of both the Houses of Parliament.", "The elected members of the legislative assemblies of the states.", "The elected members of the legislative assemblies of the Union Territories of Delhi, Puducherry and J&K.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Electoral college includes all elected members listed."
    },
    {
        id: "ch18-l1-q4",
        question: "Who among the following does NOT participate in the election of the President?",
        options: ["Nominated members of both Houses of Parliament.", "Nominated members of the state legislative assemblies.", "Members of the state legislative councils (both elected and nominated).", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Nominated members and MLCs do not participate."
    },
    {
        id: "ch18-l1-q5",
        question: "The election of the President is held in accordance with the system of:",
        options: ["Proportional representation by means of the single transferable vote.", "First Past the Post system.", "List System.", "Mixed System."],
        correctAnswerIndex: 0,
        explanation: "Proportional representation by single transferable vote."
    },
    {
        id: "ch18-l1-q6",
        question: "The value of the vote of an MLA is calculated based on the total population of the state (1971 census) divided by the:",
        options: ["Total number of elected members in the state legislative assembly x 1000.", "Total number of elected members in the state legislative assembly x 100.", "Number of Lok Sabha seats in the state x 1000.", "Total voters in the state."],
        correctAnswerIndex: 0,
        explanation: "Population / (Elected MLAs * 1000)."
    },
    {
        id: "ch18-l1-q7",
        question: "All doubts and disputes in connection with the election of the President are inquired into and decided by the:",
        options: ["Election Commission of India.", "Supreme Court of India.", "Parliament.", "High Court of Delhi."],
        correctAnswerIndex: 1,
        explanation: "Supreme Court decides election disputes."
    },
    {
        id: "ch18-l1-q8",
        question: "To be eligible for election as President, a person must be a citizen of India, have completed 35 years of age, and be qualified for election as a member of the:",
        options: ["Rajya Sabha.", "Lok Sabha.", "State Legislative Assembly.", "Legislative Council."],
        correctAnswerIndex: 1,
        explanation: "Must be qualified for election to Lok Sabha."
    },
    {
        id: "ch18-l1-q9",
        question: "The oath of office to the President is administered by the:",
        options: ["Vice-President.", "Prime Minister.", "Chief Justice of India.", "Speaker of Lok Sabha."],
        correctAnswerIndex: 2,
        explanation: "Chief Justice of India administers the oath."
    },
    {
        id: "ch18-l1-q10",
        question: "The President holds office for a term of:",
        options: ["5 years from the date on which he enters upon his office.", "5 years from the date of election.", "6 years.", "Until the pleasure of the Parliament."],
        correctAnswerIndex: 0,
        explanation: "5 years from date of entering office."
    },
    {
        id: "ch18-l1-q11",
        question: "The President can resign from his office at any time by addressing the resignation letter to the:",
        options: ["Prime Minister.", "Vice-President.", "Chief Justice of India.", "Speaker of Lok Sabha."],
        correctAnswerIndex: 1,
        explanation: "Resignation is addressed to the Vice-President."
    },
    {
        id: "ch18-l1-q12",
        question: "The President can be removed from office by a process of impeachment for:",
        options: ["Violation of the Constitution.", "Proved misbehavior.", "Incapacity.", "Corruption."],
        correctAnswerIndex: 0,
        explanation: "Impeachment is for 'Violation of the Constitution'."
    },
    {
        id: "ch18-l1-q13",
        question: "The impeachment charges can be initiated by:",
        options: ["Lok Sabha only.", "Rajya Sabha only.", "Either House of Parliament.", "Supreme Court."],
        correctAnswerIndex: 2,
        explanation: "Either House can initiate impeachment."
    },
    {
        id: "ch18-l1-q14",
        question: "The impeachment resolution must be passed by a majority of:",
        options: ["Two-thirds of the total membership of the House.", "Two-thirds of members present and voting.", "Simple majority of the total membership.", "Absolute majority."],
        correctAnswerIndex: 0,
        explanation: "Two-thirds of total membership is required."
    },
    {
        id: "ch18-l1-q15",
        question: "Consider the vacancy in the President's office. If the vacancy occurs due to expiration of term, an election must be held:",
        options: ["Before the expiration of the term.", "Within 6 months after expiration.", "Whenever the EC decides.", "Within 1 year."],
        correctAnswerIndex: 0,
        explanation: "Election must be held before expiration of term."
    },
    {
        id: "ch18-l1-q16",
        question: "If the office falls vacant by resignation, removal, death or otherwise, the election should be held within:",
        options: ["6 months from the date of occurrence of such a vacancy.", "1 year.", "3 months.", "Before the vacancy occurs."],
        correctAnswerIndex: 0,
        explanation: "Within 6 months from the date of vacancy."
    },
    {
        id: "ch18-l1-q17",
        question: "Who acts as the President when a vacancy occurs due to resignation, removal, death or otherwise?",
        options: ["The Vice-President.", "The Chief Justice of India.", "The Speaker of Lok Sabha.", "The Prime Minister."],
        correctAnswerIndex: 0,
        explanation: "Vice-President acts as President."
    },
    {
        id: "ch18-l1-q18",
        question: "The executive power of the Union is vested in the President. All executive actions of the Government of India are formally taken in his name.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, actions are taken in his name."
    },
    {
        id: "ch18-l1-q19",
        question: "The President appoints the Prime Minister and other ministers. They hold office during his:",
        options: ["Pleasure.", "Term of 5 years.", "Confidence in the House.", "Good behavior."],
        correctAnswerIndex: 0,
        explanation: "They hold office during his pleasure."
    },
    {
        id: "ch18-l1-q20",
        question: "The President appoints the Attorney General of India. Does he determine his remuneration?",
        options: ["Yes.", "No, Parliament determines it.", "No, Constitution fixes it.", "No, Supreme Court determines it."],
        correctAnswerIndex: 0,
        explanation: "Yes, President determines AG's remuneration."
    },
    {
        id: "ch18-l1-q21",
        question: "The President can summon or prorogue the Parliament and dissolve the:",
        options: ["Rajya Sabha.", "Lok Sabha.", "Both Houses.", "State Assemblies."],
        correctAnswerIndex: 1,
        explanation: "President can dissolve the Lok Sabha."
    },
    {
        id: "ch18-l1-q22",
        question: "He can nominate 12 members to the Rajya Sabha from amongst persons having special knowledge or practical experience in:",
        options: ["Literature, science, art and social service.", "Literature, science, art and cooperative movement.", "Sports, literature, science and art.", "Politics, social service, economics and art."],
        correctAnswerIndex: 0,
        explanation: "Literature, science, art, and social service."
    },
    {
        id: "ch18-l1-q23",
        question: "Prior recommendation or permission of the President is required to introduce certain bills in Parliament. Which of the following requires it?",
        options: ["Money Bill.", "Bill for alteration of boundaries of states (Article 3).", "Bill involving expenditure from Consolidated Fund of India.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All listed bills require prior recommendation."
    },
    {
        id: "ch18-l1-q24",
        question: "When a bill is sent to the President after it has been passed by the Parliament, he can:",
        options: ["Give his assent to the bill.", "Withhold his assent to the bill.", "Return the bill (if it is not a Money Bill) for reconsideration.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "He can take any of these actions."
    },
    {
        id: "ch18-l1-q25",
        question: "If the President returns a bill for reconsideration and the Parliament passes it again with or without amendments, the President:",
        options: ["Can again return it.", "Must act according to his conscience.", "Must give his assent.", "Can refer it to Supreme Court."],
        correctAnswerIndex: 2,
        explanation: "He must give his assent."
    },
    {
        id: "ch18-l1-q26",
        question: "The President can promulgate ordinances when:",
        options: ["Both Houses of Parliament are not in session.", "Either of the two Houses of Parliament is not in session.", "He is satisfied that circumstances exist which render it necessary to take immediate action.", "All of the above conditions apply."],
        correctAnswerIndex: 3,
        explanation: "All conditions must be met for ordinance promulgation."
    },
    {
        id: "ch18-l1-q27",
        question: "An ordinance promulgated by the President must be approved by the Parliament within ______ from its reassembly.",
        options: ["6 weeks.", "6 months.", "3 months.", "30 days."],
        correctAnswerIndex: 0,
        explanation: "Must be approved within 6 weeks of reassembly."
    },
    {
        id: "ch18-l1-q28",
        question: "The President lays the reports of the following bodies before the Parliament:",
        options: ["Comptroller and Auditor General.", "Union Public Service Commission.", "Finance Commission.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Lays reports of all these bodies."
    },
    {
        id: "ch18-l1-q29",
        question: "Article 72 empowers the President to grant pardons etc. in all cases where the punishment or sentence is:",
        options: ["For an offence against a Union Law.", "By a court martial (military court).", "A sentence of death.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Pardon power covers all these cases."
    },
    {
        id: "ch18-l1-q30",
        question: "The pardoning power of the President is independent of the Judiciary. It is an executive power.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, it is an executive power."
    },
    {
        id: "ch18-l1-q31",
        question: "Under Article 143, the President can seek the opinion of the Supreme Court on any question of law or fact. Is the advice binding on the President?",
        options: ["Yes.", "No.", "Yes, if the question predates the Constitution.", "Yes, if five judges give it."],
        correctAnswerIndex: 1,
        explanation: "The advice is not binding."
    },
    {
        id: "ch18-l1-q32",
        question: "The President is the Supreme Commander of the Defence Forces of India. In this capacity, he appoints the chiefs of the Army, Navy and Air Force.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True."
    },
    {
        id: "ch18-l1-q33",
        question: "The President has veto powers over bills passed by the Parliament. Which type of veto is NOT possessed by the Indian President?",
        options: ["Absolute Veto.", "Suspensive Veto.", "Pocket Veto.", "Qualified Veto (Overridden by special majority)."],
        correctAnswerIndex: 3,
        explanation: "Indian President does not have Qualified Veto."
    },
    {
        id: "ch18-l1-q34",
        question: "Are the emergency powers of the President discretionary?",
        options: ["Yes.", "No, exercised on the advice of the Cabinet.", "Partially.", "Depends on the emergency."],
        correctAnswerIndex: 1,
        explanation: "No, exercised on Cabinet advice."
    },
    {
        id: "ch18-l1-q35",
        question: "Can the President grant pardon in cases of punishment under a state law?",
        options: ["Yes, if it is a death sentence.", "No, only Governor can.", "Yes, in all cases.", "Yes, if Governor refers it."],
        correctAnswerIndex: 0,
        explanation: "President can pardon death sentences even under state law."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch18-l2-q1",
        question: "The Constitution of India envisages a parliamentary form of government. Therefore, the President has been made only a nominal executive. The real executive power is vested in the:",
        options: ["Council of Ministers headed by the Prime Minister.", "Parliament.", "Supreme Court.", "People."],
        correctAnswerIndex: 0,
        explanation: "Real power is in the Council of Ministers."
    },
    {
        id: "ch18-l2-q2",
        question: "Article 74 provides that there shall be a Council of Ministers to aid and advise the President, who shall acts in accordance with such advice. The 42nd Amendment (1976) made this advice binding. The 44th Amendment (1978) added that:",
        options: ["The President can return the advice for reconsideration once.", "The President can reject the advice.", "The President can seek Supreme Court opinion.", "The President can dissolve the Council."],
        correctAnswerIndex: 0,
        explanation: "President can return advice for reconsideration once."
    },
    {
        id: "ch18-l2-q3",
        question: "\"Discretionary Powers\" of the President. Though mainly a formal head, the President has \"Constitutional Discretion\" in:",
        options: ["Appointment of PM when no party has a clear majority.", "Dismissal of Council of Ministers when it cannot prove confidence.", "Dissolution of Lok Sabha if the Council of Ministers has lost majority.", "None of the above (These are situational discretions)."],
        correctAnswerIndex: 3,
        explanation: "The Constitution does not explicitly grant discretion; these are situational."
    },
    {
        id: "ch18-l2-q4",
        question: "Regarding \"Pocket Veto\", the President keeps a bill pending indefinitely. He can do this because:",
        options: ["The Constitution does not prescribe any time limit within which he has to take the decision.", "Article 74 allows it.", "He is superior to Parliament.", "It is a convention."],
        correctAnswerIndex: 0,
        explanation: "No time limit is prescribed for assent."
    },
    {
        id: "ch18-l2-q5",
        question: "President Zail Singh exercised Pocket Veto in 1986 regarding the:",
        options: ["Indian Post Office (Amendment) Bill.", "Dowry Prohibition Bill.", "PEPSU Appropriation Bill.", "Prevention of Terrorism Bill."],
        correctAnswerIndex: 0,
        explanation: "Exercised Pocket Veto on Indian Post Office Bill."
    },
    {
        id: "ch18-l2-q6",
        question: "The President has \"absolute veto\" in two cases: Private members' bills and:",
        options: ["Government bills when the cabinet resigns and the new cabinet advises the President not to give his assent.", "Money Bills.", "Constitutional Amendment Bills.", "State Bills."],
        correctAnswerIndex: 0,
        explanation: "Absolute veto on Government bills if cabinet advises revocation."
    },
    {
        id: "ch18-l2-q7",
        question: "Does the President have veto power over Constitutional Amendment Bills?",
        options: ["Yes, Suspensive Veto.", "Yes, Pocket Veto.", "No, he must give his assent (24th Amendment Act, 1971).", "Only if it affects federal structure."],
        correctAnswerIndex: 2,
        explanation: "No, he must give assent (24th Amendment)."
    },
    {
        id: "ch18-l2-q8",
        question: "Ordinance Making Power (Article 123). Is this power a parallel power of legislation?",
        options: ["Yes.", "No, it is held to be a power 'co-extensive' as to subject matter but not parallel (it's for emergencies).", "Yes, but only for financial matters.", "Only for security."],
        correctAnswerIndex: 1,
        explanation: "Not a parallel power, meant for exigencies."
    },
    {
        id: "ch18-l2-q9",
        question: "In D.C. Wadhwa case (1987), the Supreme Court ruled that:",
        options: ["Successive invalidation of ordinances without placing them before the legislature is unconstitutional (\"Ordinance Raj\").", "Ordinances are superior to laws.", "President cannot make ordinances.", "Ordinances are permanent."],
        correctAnswerIndex: 0,
        explanation: "Re-promulgation without legislative approval is unconstitutional."
    },
    {
        id: "ch18-l2-q10",
        question: "Can the satisfaction of the President regarding the promulgation of an ordinance be questioned in a court of law?",
        options: ["No, it is non-justiciable.", "Yes, on the ground of mala fides (Cooper case 1970).", "Only by the Parliament.", "Only by the Vice-President."],
        correctAnswerIndex: 1,
        explanation: "Yes, on grounds of mala fides."
    },
    {
        id: "ch18-l2-q11",
        question: "The pardoning power of the President (Article 72) vs Governor (Article 161). The President can pardon death sentences. Can the Governor?",
        options: ["Yes.", "No.", "Yes, if the state law allows.", "Yes, if the High Court allows."],
        correctAnswerIndex: 1,
        explanation: "Governor cannot pardon death sentences."
    },
    {
        id: "ch18-l2-q12",
        question: "The President can pardon sentences by a Court Martial. Can the Governor?",
        options: ["Yes.", "No.", "Only for state police.", "Only during emergency."],
        correctAnswerIndex: 1,
        explanation: "Governor deals with state laws, not Court Martial."
    },
    {
        id: "ch18-l2-q13",
        question: "In Kehar Singh case (1989), the Supreme Court held that while exercising pardoning power, the President:",
        options: ["Acts as a court of appeal.", "Does not sit as a court of appeal; he can take a different view of the evidence.", "Must follow the Supreme Court judgment.", "Cannot hear the petitioner orally."],
        correctAnswerIndex: 1,
        explanation: "President does not sit as a court of appeal."
    },
    {
        id: "ch18-l2-q14",
        question: "The petitioner for mercy has no right to an oral hearing by the President.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, no right to oral hearing."
    },
    {
        id: "ch18-l2-q15",
        question: "Article 123: An ordinance ceases to operate on the expiry of 6 weeks from the reassembly of Parliament. What is the maximum life of an ordinance?",
        options: ["6 months.", "6 months and 6 weeks.", "7.5 months.", "1 year."],
        correctAnswerIndex: 1,
        explanation: "6 months (max gap between sessions) + 6 weeks."
    },
    {
        id: "ch18-l2-q16",
        question: "Can an ordinance be retrospective?",
        options: ["Yes.", "No.", "Only in criminal matters.", "Only in tax matters."],
        correctAnswerIndex: 0,
        explanation: "Yes, ordinance can be retrospective."
    },
    {
        id: "ch18-l2-q17",
        question: "Can an ordinance amend the Constitution?",
        options: ["Yes.", "No.", "Yes, partially.", "Only Fundamental Rights."],
        correctAnswerIndex: 1,
        explanation: "No, ordinance cannot amend Constitution."
    },
    {
        id: "ch18-l2-q18",
        question: "The President has the power to appoint the Judges of Supreme Court and High Courts. However, in this matter, he is bound by the advice of:",
        options: ["Prime Minister.", "Council of Ministers.", "Collegium of Judges (CJI + senior judges).", "Parliament."],
        correctAnswerIndex: 2,
        explanation: "Bound by collegium advice (Second/Third Judges Case)."
    },
    {
        id: "ch18-l2-q19",
        question: "Impeachment of President (Article 61) is a:",
        options: ["Legislative procedure.", "Judicial procedure.", "Quasi-judicial procedure.", "Executive procedure."],
        correctAnswerIndex: 2,
        explanation: "It is a quasi-judicial procedure."
    },
    {
        id: "ch18-l2-q20",
        question: "In the impeachment of the President, the nominated members of Parliament:",
        options: ["Cannot participate.", "Can participate.", "Participate only in Rajya Sabha.", "Participate only if elected."],
        correctAnswerIndex: 1,
        explanation: "Nominated members can participate in impeachment."
    },
    {
        id: "ch18-l2-q21",
        question: "Elected members of State Legislative Assemblies participate in the President's election. Do they participate in his impeachment?",
        options: ["Yes.", "No.", "Only if the charge is federal violation.", "Only if Parliament permits."],
        correctAnswerIndex: 1,
        explanation: "They do not participate in impeachment."
    },
    {
        id: "ch18-l2-q22",
        question: "The Vice-President acts as President during a vacancy. While acting as President, does he perform the duties of the Chairman of Rajya Sabha?",
        options: ["Yes.", "No.", "Partially.", "Only voting."],
        correctAnswerIndex: 1,
        explanation: "No, he does not perform duties of Rajya Sabha Chairman."
    },
    {
        id: "ch18-l2-q23",
        question: "If the offices of both President and Vice-President fall vacant, who discharges the functions of the President?",
        options: ["Speaker of Lok Sabha.", "Chief Justice of India.", "Senior-most Governor.", "Prime Minister."],
        correctAnswerIndex: 1,
        explanation: "Chief Justice of India discharges functions."
    },
    {
        id: "ch18-l2-q24",
        question: "Justice M. Hidayatullah (then CJI) acted as President in:",
        options: ["1969.", "1977.", "1984.", "1991."],
        correctAnswerIndex: 0,
        explanation: "Acted as President in 1969."
    },
    {
        id: "ch18-l2-q25",
        question: "The President is immune from criminal proceedings during his term. Can civil proceedings be instituted against him?",
        options: ["No, never.", "Yes, in respect of his personal acts, after giving two months' notice.", "Yes, immediately.", "Only for official acts."],
        correctAnswerIndex: 1,
        explanation: "Yes, for personal acts after 2 months' notice."
    },
    {
        id: "ch18-l2-q26",
        question: "The total value of votes of all MPs is roughly equal to the total value of votes of all MLA's. This is to ensure:",
        options: ["Parity between the States and the Union.", "Supremacy of Parliament.", "Supremacy of States.", "Direct democracy."],
        correctAnswerIndex: 0,
        explanation: "Ensures parity between States and Union."
    },
    {
        id: "ch18-l2-q27",
        question: "Proportional Representation by means of Single Transferable Vote ensures:",
        options: ["The winning candidate has absolute majority (more than 50% of valid votes).", "Majority party sweeps the election.", "Minority voices are ignored.", "Simple plurality wins."],
        correctAnswerIndex: 0,
        explanation: "Ensures winning candidate has absolute majority."
    },
    {
        id: "ch18-l2-q28",
        question: "Under the anti-defection law, does a party whip apply to the Presidential election?",
        options: ["Yes.", "No, voters are free to vote according to conscience.", "Yes, if the party issues a 3-line whip.", "Only for MPs."],
        correctAnswerIndex: 1,
        explanation: "No, whip does not apply; conscience vote."
    },
    {
        id: "ch18-l2-q29",
        question: "If a sitting President is re-elected, he can take the oath:",
        options: ["Without resigning.", "After resigning.", "On the expiration of his current term.", "Anytime."],
        correctAnswerIndex: 2,
        explanation: "Generally on expiration of current term."
    },
    {
        id: "ch18-l2-q30",
        question: "The President sends a message to the Parliament under Article 86. Is the Parliament bound to discuss it?",
        options: ["Yes, immediately.", "Yes, 'with all convenient dispatch'.", "No, it can ignore it.", "Only if Speaker allows."],
        correctAnswerIndex: 1,
        explanation: "Parliament must discuss it 'with all convenient dispatch'."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch18-l3-q1",
        question: "In the 2022 Presidential Election, the value of the vote of an MP was 700. In previous elections (since 1997), it was 708. The reduction was due to:",
        options: ["The absence of a Legislative Assembly in Jammu & Kashmir (J&K is now a UT with provision for an Assembly, which was dissolved).", "Decrease in population.", "Increase in number of MPs.", "Change in calculation formula."],
        correctAnswerIndex: 0,
        explanation: "Absence of J&K Assembly reduced total MLA votes, thus MP value."
    },
    {
        id: "ch18-l3-q2",
        question: "The \"Office of Profit\" disqualification (Article 102). A person is disqualified from being chosen as President if he holds any office of profit. However, certain offices are exempted. Which of the following is NOT an office of profit for this purpose?",
        options: ["President.", "Vice-President.", "Governor.", "Minister of Union or State.", "All of the above are exempted."],
        correctAnswerIndex: 4,
        explanation: "All listed offices are exempted."
    },
    {
        id: "ch18-l3-q3",
        question: "Regarding the \"Mercy Petition\" (Article 72), the Supreme Court in Epuru Sudhakar case (2006) held that:",
        options: ["Judicial review of the President's order is available on limited grounds (mala fide, irrelevant considerations, arbitrariness).", "Judicial review is barred completely.", "The President must give reasons for rejection.", "The victim's family must be heard."],
        correctAnswerIndex: 0,
        explanation: "Judicial review available on limited grounds."
    },
    {
        id: "ch18-l3-q4",
        question: "The President's power to \"Summon\" the Parliament (Article 85). If the Cabinet advises the President to summon the House, but the Speaker (of the previous session) refuses to notify the members.",
        options: ["The President's summons prevails; the Secretary General of the Lok Sabha executes it.", "The Speaker is the head of the legislature; he can block it.", "The President must consult the Speaker first.", "The Courts must intervene."],
        correctAnswerIndex: 0,
        explanation: "President's summons prevails."
    },
    {
        id: "ch18-l3-q5",
        question: "The \"Motion of Thanks\" on the President's Address. If the Motion of Thanks is defeated in the Lok Sabha:",
        options: ["It amounts to a No-Confidence Motion; the Government must resign.", "The President must address again.", "The censure motion is passed.", "It has no effect."],
        correctAnswerIndex: 0,
        explanation: "Government must resign as it shows loss of confidence."
    },
    {
        id: "ch18-l3-q6",
        question: "The President's Rule (Article 356) and the Governor's Report. In the Rameshwar Prasad case (2006), the SC criticized the Governor for sending reports with \"mala fide intent\" to prevent a particular party from forming the government. If the President acts on such a report:",
        options: ["The President's proclamation is unconstitutional.", "Only the Governor is liable.", "The President is immune.", "Parliament must decide."],
        correctAnswerIndex: 0,
        explanation: "Proclamation based on mala fide report is unconstitutional."
    },
    {
        id: "ch18-l3-q7",
        question: "Can the President refuse to appoint a Judge recommended by the Collegium?",
        options: ["No, he can only return the recommendation for reconsideration once. If reiterated, he is bound to appoint.", "Yes, he has absolute veto.", "Yes, if the Law Minister advises.", "Yes, pending the Memorandum of Procedure."],
        correctAnswerIndex: 0,
        explanation: "Bound to appoint if recommendation is reiterated."
    },
    {
        id: "ch18-l3-q8",
        question: "The \"Caretaker Government\" and Presidential powers. If the Lok Sabha is dissolved, the Council of Ministers continues. Can the President make major policy decisions or appointments during this period?",
        options: ["Conventionally, the Caretaker Government should not take major policy decisions; the President ensures this.", "Yes, the government has full powers.", "No, everything stops.", "President takes over administration."],
        correctAnswerIndex: 0,
        explanation: "President ensures Caretaker Govt allows no major policy shifts."
    },
    {
        id: "ch18-l3-q9",
        question: "The Bills reserved by the Governor for the consideration of the President (Article 201). If the President directs the Governor to return the bill to the House:",
        options: ["The House must reconsider it within 6 months. If passed again, the President is NOT bound to give assent (unlike Parliament bills).", "The House must reconsider it within 6 months. If passed again, the President IS bound to give assent.", "The Bill lapses.", "The High Court decides."],
        correctAnswerIndex: 0,
        explanation: "President is NOT bound to assent to reiterated State bills."
    },
    {
        id: "ch18-l3-q10",
        question: "Under Article 103, the President decides on questions of disqualification of MPs (other than deflection). In this, he acts on the opinion of:",
        options: ["The Election Commission of India (Binding opinion).", "The Supreme Court.", "The Speaker.", "The Council of Ministers."],
        correctAnswerIndex: 0,
        explanation: "The EC opinion is binding on the President."
    },
    {
        id: "ch18-l3-q11",
        question: "Regarding Article 123 (Ordinances). The Krishna Kumar Singh vs State of Bihar (2017) judgment by a 7-judge Constitution Bench held that:",
        options: ["The failure to place an ordinance before the legislature constitutes an abuse of power and a fraud on the Constitution.", "Ordinances confer no rights if they lapse without legislative approval (unless irreversible effects occurred).", "Both (a) and (b).", "Ordinances are superior legislation."],
        correctAnswerIndex: 2,
        explanation: "Both held: failure to place is abuse, lapsed confers no rights."
    },
    {
        id: "ch18-l3-q12",
        question: "The President's power to make regulations for the peace, progress and good government of certain Union Territories (Article 240) applies to:",
        options: ["Andaman & Nicobar Islands, Lakshadweep, Dadra & Nagar Haveli and Daman & Diu, and Ladakh.", "Delhi and Chandigarh.", "All UTs.", "Only Islands."],
        correctAnswerIndex: 0,
        explanation: "Applies to A&N, Lakshadweep, DNH&DD, and Ladakh."
    },
    {
        id: "ch18-l3-q13",
        question: "In the case of Puducherry, the President can make regulations (Article 240) only when:",
        options: ["The Assembly is suspended or dissolved.", "The Assembly is in session.", "The CM requests.", "Always."],
        correctAnswerIndex: 0,
        explanation: "Only when Assembly is suspended or dissolved."
    },
    {
        id: "ch18-l3-q14",
        question: "Assertion (A): The President of India has no constitutional discretion, but he has situational discretion. Reason (R): The Constitution does not use the word \"discretion\" for the President (unlike Article 163 for Governor), but political realities may require independent judgment (e.g., hung Parliament). Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains A."
    },
    {
        id: "ch18-l3-q15",
        question: "The \"Electoral College\" for President excludes:",
        options: ["Members of Legislative Councils (MLCs) because not all states have councils, which would disrupt uniformity.", "Nominated members, because they are nominated by the President himself (conflict of interest).", "Both (a) and (b).", "Neither."],
        correctAnswerIndex: 2,
        explanation: "Excludes both for stated reasons."
    },
    {
        id: "ch18-l3-q16",
        question: "If a State Assembly is dissolved, are its members excluded from voting in the Presidential election?",
        options: ["Yes.", "No, they can vote by post.", "No, their votes are counted from previous records.", "Depends on EC."],
        correctAnswerIndex: 0,
        explanation: "Yes, dissolved assembly members cannot vote."
    },
    {
        id: "ch18-l3-q17",
        question: "Can an election petition against the President be filed by any citizen?",
        options: ["No, only by a candidate or at least 20 electors as petitioners and 20 as seconders.", "Yes, under PIL.", "No, only by MPs.", "No, only by political parties."],
        correctAnswerIndex: 0,
        explanation: "Only by a candidate or 20 electors."
    },
    {
        id: "ch18-l3-q18",
        question: "The term \"Violation of the Constitution\" for impeachment is:",
        options: ["Not defined in the Constitution.", "Defined in Article 366.", "Defined in the General Clauses Act.", "Defined by the Supreme Court."],
        correctAnswerIndex: 0,
        explanation: "It is not defined in the Constitution."
    },
    {
        id: "ch18-l3-q19",
        question: "The President's emoluments and allowances are charged on the Consolidated Fund of India. This means:",
        options: ["They are non-votable by Parliament.", "They cannot be diminished during his term of office.", "Both (a) and (b).", "He pays no tax."],
        correctAnswerIndex: 2,
        explanation: "Charged expenditure is non-votable and protected."
    },
    {
        id: "ch18-l3-q20",
        question: "Can the President resign to the Chief Justice if the Vice-Presidency is vacant?",
        options: ["No, he must address it to the Vice-President (the office), even if vacant. It is then communicated to the Speaker.", "Yes, CJI accepts it.", "No, he cannot resign.", "He resigns to PM."],
        correctAnswerIndex: 0,
        explanation: "Resignation addressed to Vice-President office."
    },
    {
        id: "ch18-l3-q21",
        question: "The power to declare an area as a \"Scheduled Area\" belongs to:",
        options: ["The President.", "The Parliament.", "The Governor.", "Tribal Council."],
        correctAnswerIndex: 0,
        explanation: "President declares Scheduled Areas."
    },
    {
        id: "ch18-l3-q22",
        question: "Under the 10th Schedule (Anti-defection), the deciding authority is the Presiding Officer (Speaker/Chairman). Does the President have any role?",
        options: ["No.", "Yes, as appellate authority.", "Yes, if Speaker fails.", "Yes, for nominated members."],
        correctAnswerIndex: 0,
        explanation: "President has no role in 10th Schedule."
    },
    {
        id: "ch18-l3-q23",
        question: "Shatrughan Chauhan vs Union of India (2014) - Death Penalty case. The SC held that:",
        options: ["Inordinate delay in deciding mercy petitions is a ground for commuting death sentence to life imprisonment.", "Mercy petitions have no time limit.", "President cannot reject mercy petitions.", "Death penalty is unconstitutional."],
        correctAnswerIndex: 0,
        explanation: "Delay is ground for commutation."
    },
    {
        id: "ch18-l3-q24",
        question: "If a Bill is passed by a Joint Sitting of Parliament (Article 108), can the President withhold assent?",
        options: ["Yes, technically.", "No, Constitutionally he must sign.", "Only suspensive veto.", "Only pocket veto."],
        correctAnswerIndex: 0,
        explanation: "Yes, technically he has the same options."
    },
    {
        id: "ch18-l3-q25",
        question: "The President causes to be laid before Parliament the \"Union Budget\" (Annual Financial Statement). This is under Article:",
        options: ["112.", "110.", "266.", "265."],
        correctAnswerIndex: 0,
        explanation: "Under Article 112."
    },
    {
        id: "ch18-l3-q26",
        question: "Which President of India was elected unopposed?",
        options: ["N. Sanjeeva Reddy (1977).", "Dr. Rajendra Prasad.", "Dr. A.P.J. Abdul Kalam.", "Ram Nath Kovind."],
        correctAnswerIndex: 0,
        explanation: "N. Sanjeeva Reddy was elected unopposed."
    },
    {
        id: "ch18-l3-q27",
        question: "The \"Jallikattu\" ordinance/bill of Tamil Nadu was reserved for the President's assent because:",
        options: ["It conflicted with a Central Law (Prevention of Cruelty to Animals Act). State law prevails in that state if President assents (Article 254(2)).", "It was a Money Bill.", "It was unconstitutional.", "Governor disliked it."],
        correctAnswerIndex: 0,
        explanation: "Reserved to resolve conflict with Central Law via Art 254(2)."
    },
    {
        id: "ch18-l3-q28",
        question: "When the President is to be impeached, notice must be given:",
        options: ["14 days in advance.", "1 month in advance.", "7 days in advance.", "Immediately."],
        correctAnswerIndex: 0,
        explanation: "14 days advance notice required."
    },
    {
        id: "ch18-l3-q29",
        question: "The \"Rules of Business\" of the Government of India are made by:",
        options: ["The President (Article 77).", "The Prime Minister.", "The Cabinet Secretary.", "The Parliament."],
        correctAnswerIndex: 0,
        explanation: "Made by President under Article 77."
    },
    {
        id: "ch18-l3-q30",
        question: "Article 361 provides personal immunity to the President. \"No criminal proceedings whatsoever shall be instituted...\" This immunity lasts:",
        options: ["During his term of office.", "For life.", "Until impeachment charges are framed.", "Only regarding official acts."],
        correctAnswerIndex: 0,
        explanation: "Immunity lasts only during term of office."
    }
];

export const CHAPTER_18_LEVELS: ChapterLevelData = {
    topicId: 18,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 18",
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
