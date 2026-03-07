import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch31-l1-q1",
        "question": "In the scheme of parliamentary system of government provided by the Constitution, who is the nominal executive authority (de jure executive) in the state?",
        "options": ["Chief Minister","Governor","President","Chief Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "As in the Centre, in the state, the Governor is the nominal executive authority (de jure executive)."
    },
    {
        "id": "ch31-l1-q2",
        "question": "In the state government, who is the real executive authority (de facto executive)?",
        "options": ["Governor","Chief Minister","Chief Justice of High Court","Speaker of the Legislative Assembly"],
        "correctAnswerIndex": 1,
        "explanation": "The Chief Minister is the real executive authority (de facto executive) in the state government."
    },
    {
        "id": "ch31-l1-q3",
        "question": "The position of the Chief Minister at the state level is analogous to the position of the ______ at the Centre.",
        "options": ["President","Vice-President","Prime Minister","Cabinet Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "In other words, the governor is the head of the state while the Chief Minister is the head of the government. Thus the position of the Chief Minister at the state level is analogous to the position of prime minister at the Centre."
    },
    {
        "id": "ch31-l1-q4",
        "question": "Does the Constitution contain any specific procedure for the selection and appointment of the Chief Minister?",
        "options": ["Yes, in Article 163.","Yes, through direct public election.","No, the Constitution does not contain any specific procedure for the selection and appointment of the Chief Minister.","Yes, by a voting college of MLAs and MLCs."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not contain any specific procedure for the selection and appointment of the Chief Minister. Article 164 only says that the Chief Minister shall be appointed by the governor."
    },
    {
        "id": "ch31-l1-q5",
        "question": "Under Article 164, the Chief Minister shall be appointed by the:",
        "options": ["President","Governor","Chief Justice of the High Court","State Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 164 only says that the Chief Minister shall be appointed by the governor."
    },
    {
        "id": "ch31-l1-q6",
        "question": "According to conventions of the parliamentary system, whom does the Governor generally appoint as the Chief Minister?",
        "options": ["The senior-most member of the State Legislative Assembly.","The leader of the majority party in the state legislative assembly.","Any eminent citizen of the state.","The runner-up in the state elections."],
        "correctAnswerIndex": 1,
        "explanation": "In accordance with the conventions of the parliamentary system of government, the governor has to appoint the leader of the majority party in the state legislative assembly as the Chief Minister."
    },
    {
        "id": "ch31-l1-q7",
        "question": "When no party has a clear majority in the assembly, the governor may exercise his personal discretion in the selection of the Chief Minister. Usually, whom does he invite to form the government?",
        "options": ["The leader of the largest party or coalition in the assembly.","The leader of the opposition.","The Speaker of the assembly.","A panel of retired judges."],
        "correctAnswerIndex": 0,
        "explanation": "When no party has a clear majority in the assembly, the governor may exercise his personal discretion... in such a situation, the governor usually invites the leader of the largest party or coalition in the assembly to form the government."
    },
    {
        "id": "ch31-l1-q8",
        "question": "If a person who is NOT a member of the state legislature is appointed as the Chief Minister, within what period must they become a member of the state legislature?",
        "options": ["3 months","6 months","1 year","They can never be appointed."],
        "correctAnswerIndex": 1,
        "explanation": "A person who is not a member of the state legislature can be appointed as Chief Minister for six months, within which time, he should be elected to the state legislature, failing which he ceases to be the Chief Minister."
    },
    {
        "id": "ch31-l1-q9",
        "question": "According to the Constitution, the Chief Minister must only be a member of the Lower House (Legislative Assembly) of the state legislature. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 1,
        "explanation": "False. According to the Constitution, the Chief Minister may be a member of any of the two Houses of a state legislature. Usually Chief Ministers are selected from the Lower House, but on a number of occasions, a member of the Upper House has been appointed as Chief Minister."
    },
    {
        "id": "ch31-l1-q10",
        "question": "Before the Chief Minister enters his office, the Governor administers to him the oaths of:",
        "options": ["Office and Secrecy","Allegiance and Wealth","Fidelity and Honour","Statecraft and Justice"],
        "correctAnswerIndex": 0,
        "explanation": "Before the Chief Minister enters his office, the governor administers to him the oaths of office and secrecy."
    },
    {
        "id": "ch31-l1-q11",
        "question": "The term of the Chief Minister is fixed at exactly five years, irrespective of whether he loses the majority confidence. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 1,
        "explanation": "False. The term of the Chief Minister is not fixed and he holds office during the pleasure of the governor. However, the governor cannot dismiss him as long as he enjoys the majority support in the legislative assembly."
    },
    {
        "id": "ch31-l1-q12",
        "question": "If a Chief Minister loses the confidence of the legislative assembly, he must resign. If he does not resign, the Governor:",
        "options": ["Must ask the President for instructions.","Can dismiss him.","Must dissolve the high court.","Can suspend the constitution."],
        "correctAnswerIndex": 1,
        "explanation": "If he loses the confidence of the assembly, he must resign or the governor can dismiss him."
    },
    {
        "id": "ch31-l1-q13",
        "question": "Who determines the salary and allowances of the Chief Minister?",
        "options": ["The Governor","The Parliament","The State Legislature","The Finance Commission of India"],
        "correctAnswerIndex": 2,
        "explanation": "The salary and allowances of the Chief Minister are determined by the state legislature."
    },
    {
        "id": "ch31-l1-q14",
        "question": "Regarding the Council of Ministers, the Governor appoints those persons as ministers who are recommended by the:",
        "options": ["President","Chief Minister","Speaker","Chief Justice of High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The governor appoints only those persons as ministers who are recommended by the Chief Minister."
    },
    {
        "id": "ch31-l1-q15",
        "question": "Who allocates and reshuffles the portfolios among the state ministers?",
        "options": ["The Governor independently","The Chief Minister","The Cabinet Secretary","The President"],
        "correctAnswerIndex": 1,
        "explanation": "He (Chief Minister) allocates and reshuffles the portfolios among ministers."
    },
    {
        "id": "ch31-l1-q16",
        "question": "If there is a difference of opinion between the Chief Minister and an individual minister, the Chief Minister can ask the minister to resign. If the minister refuses, the Chief Minister can advise the ______ to dismiss him.",
        "options": ["Speaker","Governor","High Court","President"],
        "correctAnswerIndex": 1,
        "explanation": "He can ask a minister to resign or advise the governor to dismiss him in case of difference of opinion."
    },
    {
        "id": "ch31-l1-q17",
        "question": "Who presides over the meetings of the state council of ministers?",
        "options": ["The Governor","The Chief Minister","The Speaker","The Chief Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "He (Chief Minister) presides over the meetings of the council of ministers and influences its decisions."
    },
    {
        "id": "ch31-l1-q18",
        "question": "Since the Chief Minister is the head of the council of ministers, what happens to the council of ministers when a Chief Minister resigns or dies?",
        "options": ["The senior most minister automatically becomes the Chief Minister.","The council of ministers continues to function without a head for 6 months.","His resignation or death automatically dissolves the council of ministers.","The Governor takes over the portfolios."],
        "correctAnswerIndex": 2,
        "explanation": "Since the Chief Minister is the head of the council of ministers, his resignation or death automatically dissolves the council of ministers. The resignation or death of any other minister, on the other hand, merely creates a vacancy."
    },
    {
        "id": "ch31-l1-q19",
        "question": "The Chief Minister acts as the principal channel of communication between the ______ and the council of ministers.",
        "options": ["President","Governor","Legislative Assembly","General Public"],
        "correctAnswerIndex": 1,
        "explanation": "He is the principal channel of communication between the governor and the council of ministers."
    },
    {
        "id": "ch31-l1-q20",
        "question": "It is the constitutionally mandated duty of the Chief Minister (Article 167) to communicate to the Governor all decisions of the council of ministers relating to:",
        "options": ["Only the annual budget.","The administration of the affairs of the state and proposals for legislation.","The appointment of High Court judges.","Only the transfers of IAS officers."],
        "correctAnswerIndex": 1,
        "explanation": "It is the duty of the Chief Minister (Art 167) to communicate to the governor of the state all decisions of the council of ministers relating to the administration of the affairs of the state and proposals for legislation."
    },
    {
        "id": "ch31-l1-q21",
        "question": "If a decision has been taken by a minister but has not been considered by the council, who can require the Chief Minister to submit the matter for the consideration of the council of ministers?",
        "options": ["The President","The Governor","The Speaker","The Leader of Opposition"],
        "correctAnswerIndex": 1,
        "explanation": "If the governor so requires, to submit for the consideration of the council of ministers any matter on which a decision has been taken by a minister but which has not been considered by the council."
    },
    {
        "id": "ch31-l1-q22",
        "question": "The Chief Minister advises the Governor with regard to the appointment of important officials like:",
        "options": ["Advocate General and Chairman of SPSC","President of India","Chief Justice of India","Governors of neighboring states"],
        "correctAnswerIndex": 0,
        "explanation": "He advises the governor with regard to the appointment of important officials like advocate general, chairman and members of the state public service commission, state election commissioner, and so on."
    },
    {
        "id": "ch31-l1-q23",
        "question": "In his capacity as the leader of the lower house, the Chief Minister advises the Governor with regard to ______ the sessions of the state legislature.",
        "options": ["Summoning and proroguing","Banning","Ignoring","Only dissolving"],
        "correctAnswerIndex": 0,
        "explanation": "He advises the governor with regard to the summoning and proroguing of the sessions of the state legislature."
    },
    {
        "id": "ch31-l1-q24",
        "question": "The Chief Minister can recommend the dissolution of the legislative assembly to the Governor at any time. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "He can recommend the dissolution of the legislative assembly to the governor at any time."
    },
    {
        "id": "ch31-l1-q25",
        "question": "Who announces the government policies on the floor of the House?",
        "options": ["The Governor","The Speaker","The Chief Minister","The Chief Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "He announces the government policies on the floor of the House."
    },
    {
        "id": "ch31-l1-q26",
        "question": "At the state level, the Chief Minister acts as the chairman of the:",
        "options": ["State Planning Board","Finance Commission","Public Service Commission","State Human Rights Commission"],
        "correctAnswerIndex": 0,
        "explanation": "Other Powers and Functions: He is the chairman of the State Planning Board."
    },
    {
        "id": "ch31-l1-q27",
        "question": "The Chief Minister acts as a Vice-Chairman of the concerned Zonal Council by rotation. What is the tenure of this position?",
        "options": ["Five Years","One Year","Six Months","Three Years"],
        "correctAnswerIndex": 1,
        "explanation": "He acts as a vice-chairman of the concerned zonal council by rotation, holding office for a period of one year at a time."
    },
    {
        "id": "ch31-l1-q28",
        "question": "The Chief Minister is a member of the Inter-State Council and the Governing Council of NITI Aayog. Who heads both of these bodies?",
        "options": ["The President","The Prime Minister","The Home Minister","The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "He is a member of the Inter-State Council and the Governing Council of NITI Aayog, both headed by the prime minister."
    },
    {
        "id": "ch31-l1-q29",
        "question": "Who is the chief spokesman of the state government?",
        "options": ["The Information and Broadcasting Minister","The Governor","The Chief Minister","The Director General of Police"],
        "correctAnswerIndex": 2,
        "explanation": "He is the chief spokesman of the state government."
    },
    {
        "id": "ch31-l1-q30",
        "question": "During emergencies, who acts as the crisis manager-in-chief at the political level in the state?",
        "options": ["The Chief Secretary","The Governor","The Chief Minister","The President"],
        "correctAnswerIndex": 2,
        "explanation": "He is the crisis manager-in-chief at the political level during emergencies."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch31-l2-q1",
        "question": "When replacing a Chief Minister who has died suddenly in office, the Governor generally has wide personal discretion to pick a successor. However, under what political circumstance is this discretion effectively neutralized?",
        "options": ["If the deceased Chief Minister belonged to a national rather than regional party.","If the ruling party","If the President objects to the Governor","If the state is under a financial emergency."],
        "correctAnswerIndex": 1,
        "explanation": "As established by parliamentary convention, while the Governor has initial discretion after a sudden death, if the ruling legislative party quickly anoints a successor and presents proof of majority support, the Governor is constitutionally bound to appoint that leader, effectively stripping away the"
    },
    {
        "id": "ch31-l2-q2",
        "question": "Which of the following describes a constitutional imperative that binds the Chief Minister regarding a minister whose actions he fundamentally disagrees with?",
        "options": ["He must tolerate the minister to maintain cabinet solidarity.","He is constitutionally required to ask the minister to resign or advise the Governor to dismiss him, because the principle of","dictates that the cabinet must speak with one voice.","He must wait for the next state election to remove the minister.","He must appeal to the High Court for an arbitration."],
        "correctAnswerIndex": 1,
        "explanation": "The core of the parliamentary system is collective responsibility (Article 164). If a minister openly disagrees with a cabinet decision, the CM must remove him. A divided cabinet cannot constitutionally function. He either resigns voluntarily, or the CM advises the Governor to exercise"
    },
    {
        "id": "ch31-l2-q3",
        "question": "Assertion (A): The resignation of any individual Minister does not affect the survival of the State Council of Ministers.\\nReason (R): Because the Chief Minister is the keystone of the cabinet arch; only his resignation or death automatically dissolves the entire Council of Ministers.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This highlights the"
    },
    {
        "id": "ch31-l2-q4",
        "question": "Under Article 167, the Chief Minister essentially functions as a critical constitutional",
        "options": ["The State Legislature cannot pass ordinary bills.","The Governor becomes cut off from the administrative realities and legislative proposals of his own government, hampering his ability to act as the constitutional head and report to the Centre.","The Chief Justice of the High Court assumes executive control.","The Election Commission suspends voting in the state."],
        "correctAnswerIndex": 1,
        "explanation": "Article 167 makes it a duty of the CM to keep the Governor informed. Since the Governor acts on the cabinet"
    },
    {
        "id": "ch31-l2-q5",
        "question": "Consider the scenario where a Chief Minister advises the Governor to dissolve the Legislative Assembly. Under what condition can the Governor legitimately refuse this advice?",
        "options": ["If the Governor personally dislikes the Chief Minister.","If the Chief Minister commands an absolute, unshakeable majority in the house.","If the Chief Minister has lost his majority in the Assembly (i.e., defeated on a confidence motion) and the Governor believes an alternative government can be formed.","If the term of the assembly has crossed 3 years."],
        "correctAnswerIndex": 2,
        "explanation": "If a CM with a clear majority asks for dissolution (for early elections), the Governor must oblige. However, if a defeated CM (who clearly lost a floor test) advises dissolution to prevent the opposition from forming a government, the Governor is not bound by the advice of a"
    },
    {
        "id": "ch31-l2-q6",
        "question": "The concept of a",
        "options": ["He exercises absolute dictatorial powers until elections.","His powers are identical to a regular Chief Minister; he can launch major new policy initiatives.","He should only undertake day-to-day administrative functions to keep the government running and must refrain from making major policy decisions or financial commitments that would bind the incoming elected government.","He is stripped of all security and salary."],
        "correctAnswerIndex": 2,
        "explanation": "A caretaker government exists because there cannot be a vacuum in the executive. However, since it lacks a fresh democratic mandate, convention dictates it acts only as a"
    },
    {
        "id": "ch31-l2-q7",
        "question": "A person who is not a member of the State Legislature is appointed as the Chief Minister. Within six months, he fails to get elected to either House. What is his immediate constitutional status?",
        "options": ["He can be reappointed for another six months by the Governor.","He ceases to be the Chief Minister automatically.","He can appeal to the Supreme Court for an extension.","He remains Chief Minister but loses voting rights."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164(4) strictly limits the grace period to six months. If he fails to secure a seat, he automatically ceases to be a minister. Furthermore (as established in S.R. Chaudhuri v State of Punjab 2001), he cannot simply resign on the last day and be immediately sworn in again to bypass the restriction."
    },
    {
        "id": "ch31-l2-q8",
        "question": "Regarding the appointment of the Chief Minister, which of the following scenarios is considered a violation of constitutional conventions?",
        "options": ["Appointing a member of the Legislative Council (Upper House).","Appointing a person who is not a member of either house for a 6-month period.","Appointing the leader of a post-poll coalition when no single party has a majority.","The Governor appointing a personal friend as CM, bypassing the clear leader of the party that won an absolute majority."],
        "correctAnswerIndex": 3,
        "explanation": "If a party wins an absolute majority, the Governor MUST appoint its chosen leader. Appointing anyone else is a gross violation of parliamentary democratic conventions and would likely trigger a constitutional crisis and judicial intervention."
    },
    {
        "id": "ch31-l2-q9",
        "question": "Which of the following bodies does the Chief Minister NOT chair at the state level?",
        "options": ["State Planning Board","State Wildlife Board","State Disaster Management Authority","State Human Rights Commission"],
        "correctAnswerIndex": 3,
        "explanation": "While the CM chairs the State Planning Board, Disaster Management Authority, and Wildlife Board, he does NOT chair the State Human Rights Commission (SHRC). The SHRC is headed by a retired Chief Justice or Judge of a High Court, though the CM heads the selection committee that recommends them."
    },
    {
        "id": "ch31-l2-q10",
        "question": "If a sitting Chief Minister receives an adverse judgment in a corruption case and is sentenced to 3 years imprisonment, what is the immediate effect on his position?",
        "options": ["He can continue as Chief Minister from jail.","He is granted immunity from disqualification for 3 months to file an appeal.","Under the Lily Thomas judgment (2013) and Section 8(3) of the RPA, he is instantly disqualified from being a member of the legislative assembly upon conviction (sentence >= 2 years), and consequently, immediately ceases to be the Chief Minister.","Only the President can remove him."],
        "correctAnswerIndex": 2,
        "explanation": "The Lily Thomas judgment struck down the old protection. Now, any MLA (including the CM) convicted and sentenced to 2 or more years loses his membership instantly. Because he is no longer an MLA (and cannot use the 6-month non-member rule if disqualified), he cannot remain the CM."
    },
    {
        "id": "ch31-l2-q11",
        "question": "Consider the relationship between the CM and the State Public Service Commission (SPSC). The CM advises the Governor on appointing SPSC members. However, what is the crucial limitation on the CM",
        "options": ["The CM decides their salary.","The CM decides their exam syllabus.","The CM cannot advise the Governor to remove them; they can only be removed by the President of India.","The CM must take a test conducted by the SPSC."],
        "correctAnswerIndex": 2,
        "explanation": "To maintain the independence of the civil service recruiting agency, the state government (CM) has the power to appoint, but NO power to fire SPSC members. Only the President can remove them on grounds of misbehavior."
    },
    {
        "id": "ch31-l2-q12",
        "question": "Under the constitutional framework, the Chief Minister owes his primary responsibility directly to whom?",
        "options": ["The Governor","The President of India","The State Legislative Assembly","The Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "While appointed by the Governor, the core of parliamentary democracy is that the executive (Council of Ministers, headed by the CM) is collectively responsible to the legislature—specifically, the lower house (State Legislative Assembly)."
    },
    {
        "id": "ch31-l2-q13",
        "question": "If the Governor requires the Chief Minister (under Art 167) to submit for the consideration of the council of ministers a matter decided heavily by one minister alone, what is the underlying constitutional purpose?",
        "options": ["To delay unwanted legislation.","To ensure the principle of","is maintained, preventing individual ministerial fiefdoms from bypassing full cabinet scrutiny on critical issues.","To publicly humiliate the individual minister.","To shift the power to the Central Government."],
        "correctAnswerIndex": 1,
        "explanation": "Sometimes a powerful minister might take a major decision without discussing it with other ministers. The Governor, acting as a constitutional watchdog, can force the CM to put this decision before the entire cabinet, ensuring that the whole government takes responsibility, not just one rogue actor."
    },
    {
        "id": "ch31-l2-q14",
        "question": "Assertion (A): It is practically impossible for a Chief Minister to run a dictatorial state government as long as the constitutional machinery functions normally.\\nReason (R): Because the Chief Minister is constantly checked by the Governor (Agent of Centre), the Legislative Assembly (No-Confidence Motion), and the High Court (Judicial Review).\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Constitution creates a web of checks and balances. A CM cannot be an autocrat. If he loses legislative support, the Assembly removes him. If he violates the constitution, the High Court strikes down his orders or the Governor recommends President"
    },
    {
        "id": "ch31-l2-q15",
        "question": "Which of the following scenarios best illustrates the",
        "options": ["The CM","The CM can single-handedly pass laws without the legislature.","While he is technically just one minister, his resignation dissolves the whole cabinet, he selects the other ministers, and he allocates their portfolios, making his real political power vastly superior.","The CM can imprison other ministers."],
        "correctAnswerIndex": 2,
        "explanation": "On paper, the CM is just another minister. But in practice, he is the undisputed boss. Since the other ministers only exist because he recommended them to the Governor, and since his resignation fires them all automatically, he is the"
    },
    {
        "id": "ch31-l2-q16",
        "question": "When a coalition government is formed, the Chief Minister",
        "options": ["Because the Constitution grants fewer powers to coalition leaders.","Because he cannot dictate terms to his alliance partners. He cannot arbitrarily dismiss a minister from an allied party or reshuffle major portfolios without risking the withdrawal of their vital legislative support, which would collapse his government.","Because coalition governments are illegal.","Because the Governor takes over half of the portfolios."],
        "correctAnswerIndex": 1,
        "explanation": "In a single-party majority, the CM is king. In a coalition (like the famous ones in Maharashtra or Bihar), the CM"
    },
    {
        "id": "ch31-l2-q17",
        "question": "The Sarkaria Commission made several recommendations regarding the appointment of the Chief Minister in a Hung Assembly. What is the chronological preference it normally advised a Governor to follow?",
        "options": ["Pre-poll alliance -> Single largest party -> Post-poll coalition.","Single largest party -> Post-poll coalition -> Pre-poll alliance.","Post-poll coalition -> Single largest party -> Pre-poll alliance.","Governor"],
        "correctAnswerIndex": 0,
        "explanation": "To prevent arbitrary Governors, Sarkaria laid down an order: First, invite an alliance formed BEFORE the elections (as they have a joint mandate). Second, if none, invite the single largest party to prove a majority. Third, invite a coalition formed AFTER the elections."
    },
    {
        "id": "ch31-l2-q18",
        "question": "A Chief Minister wants to heavily rely on the Advocate General of the State for a major policy rollout. The Advocate General is appointed by the Governor. Who actually chooses the Advocate General?",
        "options": ["The Governor, entirely at his personal discretion.","The Chief Minister (in consultation with his cabinet), as the","is binding on this executive appointment.","The Chief Justice of the State High Court.","The Law Minister of India."],
        "correctAnswerIndex": 1,
        "explanation": "While the"
    },
    {
        "id": "ch31-l2-q19",
        "question": "If a No-Confidence Motion is passed in the State Legislative Assembly, and the Chief Minister refuses to resign, what is the constitutional recourse available?",
        "options": ["The Speaker can dismiss the Chief Minister.","The Governor can dismiss the Council of Ministers, as they no longer enjoy the confidence of the lower house.","The President must declare a National Emergency.","The High Court can order new elections."],
        "correctAnswerIndex": 1,
        "explanation": "The bedrock rule of parliamentary democracy is that the government must hold the confidence of the Assembly. If a No-Confidence motion passes, the government falls. If the CM unconstitutionally squats in office, the Governor MUST exercise his power to dismiss the"
    },
    {
        "id": "ch31-l2-q20",
        "question": "Regarding legislative privileges, the Chief Minister differs from a normal MLA in which significant way?",
        "options": ["He has no legislative privileges; he only has executive privileges.","He has the same legislative privileges as an MLA, but in addition, he has the right to speak and take part in the proceedings of BOTH Houses (Assembly and Council), even though he can only vote in the House to which he belongs.","He cannot be arrested under any circumstances.","He can suspend the Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "As a Minister (and CM), Article 177 grants him the right to attend, speak, and participate in the proceedings of the upper house (Council) even if he is an MLA (and vice versa). However, he can only cast his vote in the specific house where he is an elected member."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch31-l3-q1",
        "question": "Consider the constitutional ramifications of a",
        "options": ["The principle of",", as the Centre dictated the Governor","The principle of",", as the Governor","horse-trading","The principle of",", as the Executive encroached upon the Legislature.","The principle of",", as the Governor bypassed a court order."],
        "correctAnswerIndex": 1,
        "explanation": "The core of parliamentary democracy is that the executive MUST command the confidence of the legislature. Pre-poll alliances are considered a joint mandate from the people. Bypassing them to install a minority CM who must then"
    },
    {
        "id": "ch31-l3-q2",
        "question": "In the context of the S.R. Bommai (1994) judgment, analyze the constitutional requirement of a",
        "options": ["The Governor must accept the CM","s advice is absolutely binding until he actually loses a vote.","The Governor must reject the advice and summon the assembly for an immediate","to ascertain the majority. Only a CM who commands the House has the authority to advise dissolution.","The Governor must declare President","The Governor must ask the High Court to conduct a secret ballot among MLAs."],
        "correctAnswerIndex": 1,
        "explanation": "Bommai firmly established that"
    },
    {
        "id": "ch31-l3-q3",
        "question": "Examine the application of Article 164(4), which allows a non-legislator to be CM for 6 months. In the landmark",
        "options": ["The reappointment is perfectly valid as long as there is a one-day operational break.","Such","without winning an election is a","and subversive of the principle of representative government. The 6-month grace period is a one-time privilege.","The reappointment is valid only if the President approves.","The reappointment is valid, but the minister loses his voting rights permanently."],
        "correctAnswerIndex": 1,
        "explanation": "The SC strongly struck down this backdoor circumvention. The intent of Article 164(4) is an emergency measure, not a permanent loophole for unelected cronies to hold power indefinitely. The 6 months is an absolute, non-renewable window."
    },
    {
        "id": "ch31-l3-q4",
        "question": "Historically, several formidable Chief Ministers (like C. Rajagopalachari) were appointed while not being members of the Legislature, and subsequently bypassed direct elections entirely by getting",
        "options": ["Because nominated members do not get salaries.","Because Article 164(4) implicitly demands that the non-member","within 6 months to establish a democratic mandate; utilizing the Governor","s own advice) to secure a seat bypasses the electorate entirely.","Because nominated members cannot be sworn in.","Because the Governor cannot nominate anyone to the Legislative Council."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164(4) says"
    },
    {
        "id": "ch31-l3-q5",
        "question": "Analyze the constitutional friction generated by the National Investigation Agency (NIA) Act in relation to the Chief Minister",
        "options": ["Because the NIA Act bans state police forces completely.","Because","and","are exclusively State Subjects (List II). The NIA Act allows a central agency to suo motu take over the investigation of terror/scheduled offences in any state without requiring the consent of the State Government/Chief Minister, effectively encroaching on state executive domains.","Because the NIA is headed by a military general.","Because the NIA Act requires the State Government to fund the central agency."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the CBI (which generally needs state consent under the DSPE Act), the NIA was created (post 26/11) with sweeping powers. It can simply take a case from the state police and investigate. CMs argue this violates the federal division of powers, where law and order is their core constitutional responsibility."
    },
    {
        "id": "ch31-l3-q6",
        "question": "Which of the following describes the most precise constitutional limitation regarding the size of the State Council of Ministers headed by the CM? (91st Amendment Act, 2003)",
        "options": ["It cannot exceed 10% of the total state population.","The total number of ministers, including the Chief Minister, shall not exceed 15% of the total strength of the Legislative Assembly of that State, provided the number shall not be less than 12.","It cannot exceed 20 ministers under any circumstances.","It must equal exactly the number of districts in the state."],
        "correctAnswerIndex": 1,
        "explanation": "The 91st Amendment clamped down on"
    },
    {
        "id": "ch31-l3-q7",
        "question": "Assertion (A): If a Chief Minister belongs to the Legislative Council (Upper House), he cannot vote in a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a critical procedural nuance. Several CMs (like Nitish Kumar, Uddhav Thackeray) were members of the Council. While they can sit in the Assembly and defend their government during a No-Confidence motion, when it comes time to push the button and vote, they cannot participate, as the vote is strictly for Assembly members testing their confidence in the executive."
    },
    {
        "id": "ch31-l3-q8",
        "question": "Evaluate the constitutional position of the",
        "options": ["The Constitution explicitly defines the powers of the Deputy Chief Minister in Article 164.","A Deputy Chief Minister acts as the Chief Minister automatically whenever the CM is travelling out of state.","It is entirely an informal, extra-constitutional","post created to satisfy coalition partners or intense internal party rivalries. For all constitutional and legal purposes, a Deputy CM is merely a Cabinet Minister, bearing no special executive override powers over other ministers.","A Deputy CM must be sworn in by the High Court Chief Justice."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution knows ONLY"
    },
    {
        "id": "ch31-l3-q9",
        "question": "In the context of the recent political upheavals (e.g., Maharashtra 2022), if a massive faction (2/3rds) of the Chief Minister",
        "options": ["The Speaker can dissolve the rebel faction instantly and imprison them.","The Speaker, acting as a tribunal under the Tenth Schedule, has the absolute original jurisdiction to decide if the rebels are disqualified. If the Speaker delays this decision indefinitely (often favoring a new CM), the Supreme Court has ruled (Kihoto Hollohan) that it generally cannot intervene prior to the Speaker","The Speaker must ask the Election Commission to decide.","The Speaker has no role; the Governor decides disqualification."],
        "correctAnswerIndex": 1,
        "explanation": "The Speaker"
    },
    {
        "id": "ch31-l3-q10",
        "question": "According to the Supreme Court",
        "options": ["The popular mandate (winning an election) can cure any constitutional disqualification (like a criminal conviction).","The Constitution does not permit a person who is disqualified from being a member of the legislature (due to a criminal conviction under RPA) to be appointed as Chief Minister, even under the 6-month grace period of Article 164(4). The","cannot override the express provisions of the Constitution.","The Governor must act blindly on the advice of the majority party, even if they elect a convicted criminal as leader.","Only the President can pardon the CM."],
        "correctAnswerIndex": 1,
        "explanation": "Jayalalithaa won a massive popular mandate while carrying a 3-year corruption sentence (which disqualified her from contesting elections). Her party elected her leader, and the Governor appointed her CM under Art 164(4) (the 6-month non-member rule). The SC famously struck this down, declaring that someone who is legally disqualified from sitting in the assembly cannot use the 6-month exception to rule the state. Constitutional supremacy trumps immediate popular mandate."
    }
];

export const CHAPTER_31_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
