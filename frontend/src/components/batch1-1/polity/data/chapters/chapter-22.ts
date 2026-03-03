import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch22-l1-q1",
        "question": "Are Cabinet Committees mentioned in the Constitution of India?",
        "options": ["Yes, they are described in Article 74.","Yes, they are established under Article 77.","No, they are extra-constitutional in emergence.","Yes, they are mentioned in the First Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "They are extra-constitutional in emergence. In other words, they are not mentioned in the Constitution."
    },
    {
        "id": "ch22-l1-q2",
        "question": "Under which rules are the establishment of Cabinet Committees provided?",
        "options": ["Rules of Procedure of the Lok Sabha","Rules of Business of the Government of India","The Constitution of India","The Representation of the People Act"],
        "correctAnswerIndex": 1,
        "explanation": "However, the Rules of Business provide for their establishment."
    },
    {
        "id": "ch22-l1-q3",
        "question": "What are the two types of Cabinet Committees?",
        "options": ["Standing and Ad hoc","Formal and Informal","Executive and Legislative","Permanent and Temporary"],
        "correctAnswerIndex": 0,
        "explanation": "They are of two types—standing and ad hoc. The former are of a permanent nature while the latter are of a temporary nature."
    },
    {
        "id": "ch22-l1-q4",
        "question": "Who sets up the Cabinet Committees?",
        "options": ["The President","The Parliament","The Prime Minister","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "They are set up by the Prime Minister according to the exigencies of the time and requirements of the situation."
    },
    {
        "id": "ch22-l1-q5",
        "question": "Does the number, nomenclature, and composition of Cabinet Committees remain the same over time?",
        "options": ["Yes, they are fixed by law.","No, they vary from time to time.","Yes, they are changed only by constitutional amendment.","Yes, they are fixed by the President."],
        "correctAnswerIndex": 1,
        "explanation": "Hence, their number, nomenclature, and composition varies from time to time."
    },
    {
        "id": "ch22-l1-q6",
        "question": "What is the typical membership size of a Cabinet Committee?",
        "options": ["Only 2 members","Exactly 10 members","They usually include only three to eight members.","More than 15 members"],
        "correctAnswerIndex": 2,
        "explanation": "Their membership varies from three to eight. They usually include only cabinet ministers."
    },
    {
        "id": "ch22-l1-q7",
        "question": "Are non-cabinet ministers entirely excluded from membership in Cabinet Committees?",
        "options": ["Yes, they are completely barred.","No, the non-cabinet ministers are not debarred from their membership.","Yes, unless special permission is granted by the President.","No, but they cannot vote."],
        "correctAnswerIndex": 1,
        "explanation": "They usually include only cabinet ministers. However, the non-cabinet ministers are not debarred from their membership."
    },
    {
        "id": "ch22-l1-q8",
        "question": "Do Cabinet Committees only include ministers in charge of subjects covered by the committee?",
        "options": ["Yes, exclusively.","No, they not only include the ministers in charge of subjects covered by them but also include other senior ministers.","Yes, to ensure focused discussion.","No, they must include opposition members as well."],
        "correctAnswerIndex": 1,
        "explanation": "They not only include the ministers in charge of subjects covered by them but also include other senior ministers."
    },
    {
        "id": "ch22-l1-q9",
        "question": "Who mostly heads the Cabinet Committees?",
        "options": ["The Home Minister","The Prime Minister","The Finance Minister","The President"],
        "correctAnswerIndex": 1,
        "explanation": "They are mostly headed by the Prime Minister. Some time other Cabinet Ministers, particularly the Home Minister or the Finance Minister, also acts as their Chairman."
    },
    {
        "id": "ch22-l1-q10",
        "question": "If the Prime Minister is a member of a Cabinet Committee, what is his formal position in that committee?",
        "options": ["He acts as a regular member.","He acts as an observer.","He invariably presides over it.","He serves as the secretary."],
        "correctAnswerIndex": 2,
        "explanation": "But, in case the Prime Minister is a member of a committee, he invariably presides over it."
    },
    {
        "id": "ch22-l1-q11",
        "question": "What happens to the decisions taken by a Cabinet Committee?",
        "options": ["They are final and cannot be reviewed.","They must be approved by the President first.","They not only sort out issues and formulate proposals for the consideration of the Cabinet, but also take decisions. However, the Cabinet can review their decisions.","They are sent directly to Parliament for a vote."],
        "correctAnswerIndex": 2,
        "explanation": "They not only sort out issues and formulate proposals for the consideration of the Cabinet, but also take decisions. However, the Cabinet can review their decisions."
    },
    {
        "id": "ch22-l1-q12",
        "question": "Upon what principle are Cabinet Committees based?",
        "options": ["Division of labor and effective delegation","Separation of powers","Checks and balances","Federalism"],
        "correctAnswerIndex": 0,
        "explanation": "They are an organisational device to reduce the enormous workload of the Cabinet. They also facilitate in-depth examination of policy issues and effective coordination. They are based on the principles of division of labour and effective delegation."
    },
    {
        "id": "ch22-l1-q13",
        "question": "Which of the following describes",
        "options": ["They are permanent in nature.","They are formed by the Parliament.","They are constituted from time to time to deal with special problems.","They only handle financial matters."],
        "correctAnswerIndex": 2,
        "explanation": "The Ad hoc committees are constituted from time to time to deal with special problems."
    },
    {
        "id": "ch22-l1-q14",
        "question": "In 1994, how many standing cabinet committees were in existence?",
        "options": ["10","11","12","13"],
        "correctAnswerIndex": 3,
        "explanation": "In 1994, there were 13 standing cabinet committees."
    },
    {
        "id": "ch22-l1-q15",
        "question": "In 2013, how many standing cabinet committees were in existence?",
        "options": ["8","10","12","13"],
        "correctAnswerIndex": 1,
        "explanation": "In 2013, there were 10 standing cabinet committees."
    },
    {
        "id": "ch22-l1-q16",
        "question": "At present (as of the chapter",
        "options": ["6","8","10","12"],
        "correctAnswerIndex": 1,
        "explanation": "At present, there are 8 standing cabinet committees."
    },
    {
        "id": "ch22-l1-q17",
        "question": "Which of the following is NOT one of the current standing cabinet committees?",
        "options": ["Cabinet Committee on Security","Cabinet Committee on Economic Affairs","Cabinet Committee on Political Affairs","Cabinet Committee on External Affairs"],
        "correctAnswerIndex": 3,
        "explanation": "The list includes: Political Affairs, Economic Affairs, Appointments, Security, Parliamentary Affairs, Accommodation, Investment and Growth, and Employment and Skill Development. There is no"
    },
    {
        "id": "ch22-l1-q18",
        "question": "Which Cabinet Committee deals with all policy matters pertaining to domestic and foreign affairs?",
        "options": ["The Cabinet Committee on Security","The Cabinet Committee on Political Affairs","The Cabinet Committee on Economic Affairs","The Cabinet Committee on Parliamentary Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "The Cabinet Committee on Political Affairs deals with all policy matters pertaining to domestic and foreign affairs."
    },
    {
        "id": "ch22-l1-q19",
        "question": "What is the function of the Cabinet Committee on Economic Affairs?",
        "options": ["It directs and coordinates the governmental activities in the economic sphere.","It manages the progress of government business in the Parliament.","It deals with all policy matters pertaining to domestic and foreign affairs.","It decides all higher level appointments in the Central Secretariat."],
        "correctAnswerIndex": 0,
        "explanation": "The Cabinet Committee on Economic Affairs directs and coordinates the governmental activities in the economic sphere."
    },
    {
        "id": "ch22-l1-q20",
        "question": "Which Cabinet Committee decides all higher-level appointments in the Central Secretariat, Public Enterprises, Banks and Financial Institutions?",
        "options": ["The Appointments Committee of the Cabinet","The Cabinet Committee on Economic Affairs","The Cabinet Committee on Parliamentary Affairs","The Cabinet Committee on Political Affairs"],
        "correctAnswerIndex": 0,
        "explanation": "Appointments Committee of the Cabinet decides all higher level appointments in the Central Secretariat, Public Enterprises, Banks and Financial Institutions."
    },
    {
        "id": "ch22-l1-q21",
        "question": "Which Cabinet Committee looks after the progress of government business in the Parliament?",
        "options": ["The Cabinet Committee on Political Affairs","The Cabinet Committee on Parliamentary Affairs","The Appointments Committee of the Cabinet","The Cabinet Committee on Security"],
        "correctAnswerIndex": 1,
        "explanation": "Parliamentary Affairs Committee looks after the progress of government business in the Parliament."
    },
    {
        "id": "ch22-l1-q22",
        "question": "Who chairs the Cabinet Committee on Parliamentary Affairs?",
        "options": ["The Prime Minister","The Home Minister","The Finance Minister","The Speaker of Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The first three committees [Political Affairs, Economic Affairs, Appointments] are chaired by the Prime Minister and the last one [Parliamentary Affairs] by the Home Minister."
    },
    {
        "id": "ch22-l1-q23",
        "question": "Out of the four most important cabinet committees mentioned in the text (Political Affairs, Economic Affairs, Appointments, Parliamentary Affairs), which one is described as the most powerful?",
        "options": ["The Appointments Committee","The Cabinet Committee on Economic Affairs","The Cabinet Committee on Political Affairs","The Cabinet Committee on Parliamentary Affairs"],
        "correctAnswerIndex": 2,
        "explanation": "Of all the Cabinet Committees, the most powerful is the Political Affairs Committee, often described as a"
    },
    {
        "id": "ch22-l1-q24",
        "question": "Which Cabinet Committee is often referred to as the",
        "options": ["The Appointments Committee of the Cabinet","The Cabinet Committee on Economic Affairs","The Cabinet Committee on Political Affairs","The Cabinet Committee on Security"],
        "correctAnswerIndex": 2,
        "explanation": "Of all the Cabinet Committees, the most powerful is the Political Affairs Committee, often described as a"
    },
    {
        "id": "ch22-l1-q25",
        "question": "Besides Standing Committees, what other institutional mechanisms have Prime Ministers used to reduce Cabinet workload?",
        "options": ["Group of Ministers (GoMs)","Special Parliamentary Committees","Supreme Court Advisory Panels","National Security Council Directives"],
        "correctAnswerIndex": 0,
        "explanation": "In addition to cabinet committees, several Groups of Ministers (GoMs) has been constituted to look into different issues/subjects."
    },
    {
        "id": "ch22-l1-q26",
        "question": "Are Groups of Ministers (GoMs) permanent bodies?",
        "options": ["Yes, they are established by the Constitution.","No, some of these GoMs have been empowered to take decisions on behalf of the Cabinet whereas the others make recommendations to the Cabinet. They are essentially Ad hoc.","Yes, they exist as long as the Lok Sabha exists.","No, they only exist during emergencies."],
        "correctAnswerIndex": 1,
        "explanation": "GoMs are ad hoc bodies formed to give recommendations to the cabinet on certain emergent issues and critical problem areas."
    },
    {
        "id": "ch22-l1-q27",
        "question": "What is an Empowered Group of Ministers (EGoM)?",
        "options": ["A GoM headed specifically by the Prime Minister.","A GoM that has been empowered to take decisions on behalf of the Cabinet without further approval.","A GoM that includes state Chief Ministers.","A GoM sanctioned by the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Some of these GoMs have been empowered to take decisions on behalf of the Cabinet whereas the others make recommendations to the Cabinet."
    },
    {
        "id": "ch22-l1-q28",
        "question": "What happened to the existing Empowered Group of Ministers (EGoMs) and Group of Ministers (GoMs) under the Modi government in 2014?",
        "options": ["Their numbers were doubled.","They were integrated into the NITI Aayog.","The Modi government decided to abolish all the existing 9 EGoMs and 21 GoMs for greater accountability and faster decision-making.","They were made permanent constitutional bodies."],
        "correctAnswerIndex": 2,
        "explanation": "It should be noted here that the Modi government in 2014, decided to abolish all the existing 9 EGoMs (Empowered Group of Ministers) and 21 GoMs (Group of Ministers)..."
    },
    {
        "id": "ch22-l1-q29",
        "question": "What was the stated purpose behind the abolition of EGoMs and GoMs in 2014?",
        "options": ["To give more power to the President.","For greater accountability and to ensure faster decision-making by ministries and departments.","To reduce the financial burden of committee meetings.","To transfer their functions directly to the Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The Modi government in 2014, decided to abolish all the existing 9 EGoMs... for greater accountability and to ensure faster decision-making. This move was to empower the Ministries and Departments to take decisions themselves."
    },
    {
        "id": "ch22-l1-q30",
        "question": "After abolishing EGoMs/GoMs, where problems are inter-ministerial in nature, how are they typically resolved according to the 2014 directive?",
        "options": ["Through a national referendum.","By the Supreme Court.","The Cabinet Secretariat and the Prime Minister’s Office (PMO) will facilitate the decision-making process.","By forming temporary EGoMs again."],
        "correctAnswerIndex": 2,
        "explanation": "This move was to empower the Ministries and Departments to take decisions themselves... Wherever the Ministries face any difficulties, the Cabinet Secretariat and the Prime Minister’s Office (PMO) will facilitate the decision-making process."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch22-l2-q1",
        "question": "Consider the constitutional status of Cabinet Committees in India. While not mentioned in the text of the Constitution, what is their legal basis for existence and operation?",
        "options": ["They derive their authority from conventions established by the first Parliament.","They are created under the",", formulated by the President under Article 77(3) for the convenient transaction of government business.","They are established by an Act of Parliament.","They operate under the direct unwritten authority of the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Cabinet Committees are extra-constitutional, but they have a firm legal basis. Article 77(3) allows the President (acting on PM"
    },
    {
        "id": "ch22-l2-q2",
        "question": "How does the membership of Cabinet Committees reflect the political and administrative realities of the government, beyond just matching ministers to their portfolios?",
        "options": ["They strictly exclude ministers from allied coalition parties.","They are purely composed of bureaucrats with ministers only as ceremonial heads.","They often include","who may not have a direct portfolio link to the committee","Membership is determined by seniority in the Rajya Sabha."],
        "correctAnswerIndex": 2,
        "explanation": "While the Defense Minister will be on the Security Committee, PMs often add heavyweights (like a senior leader without a relevant portfolio) to important committees. This ensures that major decisions have the backing of the party"
    },
    {
        "id": "ch22-l2-q3",
        "question": "Assertion (A): The Prime Minister acts as the Chairman of all existing Cabinet Committees to maintain absolute control over the executive.\\nReason (R): Because the Prime Minister is the head of the Council of Ministers under Article 74.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is factually false. While the PM chairs the most important ones (Political Affairs, Economic Affairs, Appointments, Security), others are historically/currently chaired by senior ministers (e.g., the Home Minister traditionally chairs the Cabinet Committee on Parliamentary Affairs or Accommodation). Reason (R) is true but doesn"
    },
    {
        "id": "ch22-l2-q4",
        "question": "What is the primary rationale behind the",
        "options": ["Because it includes the President and the Vice-President.","Because it has the constitutional power to dissolve the Lok Sabha without the PM","Because of its extremely broad mandate covering all crucial domestic and foreign policy matters, meaning its decisions often dictate the overall direction of the government and are rarely overturned by the full Cabinet.","Because it is the only committee that can override Supreme Court verdicts."],
        "correctAnswerIndex": 2,
        "explanation": "The CCPA, chaired by the PM and including heavyweights like Home, Defense, and Finance, tackles the most sensitive political issues. When this tiny group of top leaders agrees on a policy (e.g., a major foreign treaty or a controversial domestic law), the full 20-member Cabinet usually rubber-stamps it. It"
    },
    {
        "id": "ch22-l2-q5",
        "question": "Differentiate between the functions of the Cabinet Committee on Economic Affairs (CCEA) and the Appointments Committee of the Cabinet (ACC).",
        "options": ["CCEA handles only rural development; ACC handles only urban appointments.","CCEA manages the national budget formulation; ACC manages the election of the President.","CCEA directs and coordinates governmental activities in the economic sphere (like setting MSPs or approving major infrastructure investments); ACC decides all higher-level appointments in the Central Secretariat, PSUs, and Banks (like appointing the RBI Governor).","Both committees perform identical overlapping functions."],
        "correctAnswerIndex": 2,
        "explanation": "These are distinct, highly specialized functions. The CCEA (chaired by the PM) acts as the final executive clearinghouse for major economic policies and investments. The ACC (also chaired by the PM, usually with just the Home Minister) controls the massive patronage and administrative network by appointing the top brass of the bureaucracy and state enterprises."
    },
    {
        "id": "ch22-l2-q6",
        "question": "Consider the constitutional flow of decision-making. If a Cabinet Committee takes a definitive decision on a policy matter, what is its status relative to the full Cabinet?",
        "options": ["The decision is completely final and the full Cabinet has no jurisdiction over it.","The decision must be ratified by Parliament before the full Cabinet sees it.","The decision is binding, but the full Cabinet retains the theoretical power to review, modify, or overturn the committee","The decision is only a recommendation and has no legal force until signed by the President."],
        "correctAnswerIndex": 2,
        "explanation": "Cabinet Committees are tools of delegation. They don"
    },
    {
        "id": "ch22-l2-q7",
        "question": "What was the strategic administrative reason behind the Modi government",
        "options": ["To centralize all decision-making directly within the President","To reduce the salaries paid to ministers sitting on these extra groups.","To remove administrative bottlenecks, end policy paralysis where GoMs were used to infinitely delay controversial decisions, and force individual Ministries/Departments to take responsibility for faster decision-making.","To replace them entirely with Parliamentary Standing Committees."],
        "correctAnswerIndex": 2,
        "explanation": "During the UPA era, dozens of GoMs/EGoMs were created for every contentious issue. This led to"
    },
    {
        "id": "ch22-l2-q8",
        "question": "Which of the following matters would most likely be placed before the",
        "options": ["Approving the procurement of advanced fighter jets.","Setting the Minimum Support Price (MSP) for wheat.","Deciding the dates for the commencement and prorogation of Parliament sessions, and strategizing on how to manage the government","Appointing the new Director of the CBI."],
        "correctAnswerIndex": 2,
        "explanation": "The CCPA (usually chaired by the Home Minister or Defense Minister, not the PM) handles the delicate political management of Parliament. It decides when to summon the Houses, which bills to prioritize, and how to deal with opposition protests to ensure government business gets passed."
    },
    {
        "id": "ch22-l2-q9",
        "question": "How do",
        "options": ["Ad hoc committees are chaired by the President; Standing committees by the PM.","Ad hoc committees are formed permanently by the Constitution; Standing committees are temporary.","Standing committees are permanent fixtures dealing with continuous broad domains (like Economy or Security); Ad hoc committees are formed temporarily by the PM to deal with a specific, immediate crisis or a singular problem, and are disbanded once the issue is resolved.","Ad hoc committees include opposition members."],
        "correctAnswerIndex": 2,
        "explanation": "The terms are self-explanatory but crucial. Standing committees (like CCEA) are the permanent engines of governance. Ad hoc committees are special task forces (e.g., an ad hoc committee formed specifically to handle a sudden national strike or a massive natural disaster), dissolving when the task ends."
    },
    {
        "id": "ch22-l2-q10",
        "question": "Who holds the definitive power to dictate the number, nomenclature, and exact composition of the Cabinet Committees at any given time?",
        "options": ["The President of India, acting in his discretion.","The Parliament, through a simple majority vote.","The Prime Minister, acting entirely according to the exigencies of the time, the requirements of the situation, and his own political strategy.","The Chief Justice of the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "This is a core Prime Ministerial prerogative. Prime Ministers mold the committee structure to suit their style. While there were 13 in the 1990s, the current number fluctuates around 8. The PM alone decides who sits on them, reflecting the PM"
    },
    {
        "id": "ch22-l2-q11",
        "question": "Assertion (A): Only Cabinet-rank Ministers can be members of Cabinet Committees.\\nReason (R): Because the term",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are false. While they usually include Cabinet ministers, Ministers of State (especially those with Independent Charge) are frequently made members or"
    },
    {
        "id": "ch22-l2-q12",
        "question": "In the context of the Appointments Committee of the Cabinet (ACC), which of the following appointments would NOT fall under its jurisdiction?",
        "options": ["The Governor of the Reserve Bank of India.","The Cabinet Secretary.","Judges of the Supreme Court.","The Director of the Central Bureau of Investigation (CBI)."],
        "correctAnswerIndex": 2,
        "explanation": "The ACC handles top executive and bureaucratic appointments. However, the appointment of Supreme Court/High Court judges is governed by Article 124/217 through the"
    },
    {
        "id": "ch22-l2-q13",
        "question": "Which of the following situations best illustrates the application of the principle of",
        "options": ["All 20 Cabinet Ministers meeting daily to debate the minute details of a minor agricultural subsidy.","The Prime Minister making all decisions alone without consulting anyone.","The Cabinet Committee on Economic Affairs scrutinizing the complex financial viability of a new railway corridor, thereby saving the full Cabinet from spending hours debating technical economic data.","The President dividing tasks among the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "The modern state is too complex for 20 politicians to understand every nuance of every policy. The CCEA does the heavy lifting, analyzing the spreadsheets and technical reports. The full Cabinet then relies on the CCEA"
    },
    {
        "id": "ch22-l2-q14",
        "question": "Consider the",
        "options": ["To allocate housing and manage land for the rural poor.","To manage the physical infrastructure of Parliament House.","To determine the allotment of government accommodation (bungalows/flats in Delhi) to Ministers, MPs, and senior officials, and to handle the shifting of government offices.","To build new embassies abroad."],
        "correctAnswerIndex": 2,
        "explanation": "While it sounds mundane, housing in Lutyens"
    },
    {
        "id": "ch22-l2-q15",
        "question": "If a Group of Ministers (GoM) is formed, what determines whether its decisions are final or merely advisory?",
        "options": ["The Supreme Court decides their mandate.","All GoMs are strictly advisory; they can never take final decisions.","It depends entirely on the specific mandate given to them by the Cabinet/PM when they are constituted. They can be","(EGoM) to take final decisions on behalf of the cabinet, or simply asked to investigate and recommend.","It depends on whether the GoM includes opposition members."],
        "correctAnswerIndex": 2,
        "explanation": "This is the distinction between a GoM and an EGoM. The establishing order dictates the power. If the PM says"
    },
    {
        "id": "ch22-l2-q16",
        "question": "Which two newer Cabinet Committees were specifically created by the NDA government in 2019 to address core macroeconomic challenges?",
        "options": ["Committee on Defense Production and Committee on IT.","Committee on Investment and Growth, and Committee on Employment and Skill Development.","Committee on Agriculture and Committee on Water Resources.","Committee on Space Exploration and Committee on Atomic Energy."],
        "correctAnswerIndex": 1,
        "explanation": "In 2019, reacting to economic slowdown and unemployment concerns, the government created two new standing committees: the Cabinet Committee on Investment and Growth, and the Cabinet Committee on Employment and Skill Development."
    },
    {
        "id": "ch22-l2-q17",
        "question": "Why might the Prime Minister include a politically powerful minister in the Cabinet Committee on Economic Affairs (CCEA) even if that minister",
        "options": ["To satisfy a constitutional quota.","Because the Transaction of Business rules mandate random selection.","To ensure",". Major economic decisions (like cutting subsidies) have massive political fallout; having senior political leaders on board early prevents a revolt within the party or cabinet later.","To give them a higher salary."],
        "correctAnswerIndex": 2,
        "explanation": "Cabinet Committees are political beasts, not just technocratic boards. Decisions made by the CCEA affect elections. Including senior politicians ensures that economic logic is tempered by political reality, and guarantees that the party"
    },
    {
        "id": "ch22-l2-q18",
        "question": "When a Cabinet Committee makes a decision, how is the principle of",
        "options": ["The decision is kept secret from the rest of the Cabinet.","Only the members of that specific committee are responsible for that decision; the rest of the Cabinet is immune.","Once a Cabinet Committee finalizes a decision (and if the full Cabinet does not overturn it), that decision becomes the authoritative decision of the entire Government, and every single minister is bound to defend it publicly.","The committee members must resign if Parliament rejects the decision."],
        "correctAnswerIndex": 2,
        "explanation": "A decision by the CCEA is a decision by the Government of India. A minister who wasn"
    },
    {
        "id": "ch22-l2-q19",
        "question": "Which of the following best describes the relationship between the",
        "options": ["The Cabinet Secretariat is subordinate to the Cabinet Committees.","The Cabinet Committees audit the finances of the Cabinet Secretariat.","The Cabinet Secretariat functions as the administrative backbone for the Committees, preparing their agendas, circulating papers, recording minutes, and monitoring the implementation of the Committees","They operate completely independently of each other."],
        "correctAnswerIndex": 2,
        "explanation": "Committees are groups of politicians making decisions. They need bureaucratic support. The Cabinet Secretariat (under the PMO"
    },
    {
        "id": "ch22-l2-q20",
        "question": "Assertion (A): The President cannot question or return a decision made by a Cabinet Committee.\\nReason (R): Because Article 74 only mentions the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion (A) is false. A decision by a Cabinet Committee (once finalized) operates as the"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch22-l3-q1",
        "question": "Analyze the constitutional validity of a decision taken by the",
        "options": ["Yes, because the Constitution explicitly vests advisory power only in the","(Article 74(1)), and delegating this to an extra-constitutional sub-committee is ultra vires.","Yes, because international treaties require a two-thirds majority in Parliament, not just a Cabinet Committee decision.","No. Under Article 77(3), the President, acting on the PM","Transaction of Business Rules","s decision holds the full constitutional weight of the Council of Ministers.","No, because the Supreme Court has no jurisdiction over international affairs under any circumstances."],
        "correctAnswerIndex": 2,
        "explanation": "This tests the intersection of Art 74 and Art 77(3). While Art 74 mentions the full Council, Art 77(3) allows the President to make rules for"
    },
    {
        "id": "ch22-l3-q2",
        "question": "Consider the strategic dominance of the Prime Minister regarding Cabinet Committees. Since the Prime Minister dictates their number, nomenclature, and composition, what fundamental principle of parliamentary democracy does this practically undermine?",
        "options": ["The principle of",", as the Rajya Sabha is excluded.","The principle of",", as courts cannot review the committees.","The principle of","(First Among Equals) and",". By packing the crucial committees (like CCPA or CCS) with loyalists and bypassing the full Cabinet, the PM exercises near-presidential power, reducing the equal voice of other ministers in major policy formulations.","The principle of",", as state Chief Ministers are not included."],
        "correctAnswerIndex": 2,
        "explanation": "This goes to the heart of the Prime Ministerial system. Theoretically, the Cabinet is a team of equals. But if the PM creates a"
    },
    {
        "id": "ch22-l3-q3",
        "question": "Evaluate the role of the",
        "options": ["To prevent the Chief Justice from interfering in bureaucratic appointments.","Because Article 312 explicitly restricts civil service appointments to a two-member committee.","To minimize political lobbying, leaks, and intra-cabinet rivalry. Top-level appointments (Secretaries, PSUs, RBI, CBI) require absolute secrecy and swift executive decision-making, which is impossible if debated loudly among 20 politicians.","To ensure that all appointments strictly reflect the Home Ministry"],
        "correctAnswerIndex": 2,
        "explanation": "The ACC controls incredible patronage and power. If the appointment of the Cabinet Secretary or RBI Governor were debated in the full Cabinet, intense lobbying, media leaks, and factional fighting would paralyze the bureaucracy. Restricting it to the PM (and Home Minister) centralizes control and maintains necessary confidentiality in personnel management."
    },
    {
        "id": "ch22-l3-q4",
        "question": "If a",
        "options": ["Whether it involves an expenditure of more than ₹1000 crores.","Whether it is chaired by the Finance Minister.","Whether the GoM was formally designated as an","Group of Ministers (EGoM) by the Cabinet or PM when constituted. An EGoM’s decision is binding and final, whereas a standard GoM","Whether the Supreme Court endorses the decision."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch22-l3-q5",
        "question": "Consider the",
        "options": ["Because Article 352 (National Emergency) requires the Finance Minister","Because the Finance Minister legally commands the paramilitary forces under the revenue department.","Because modern security and defense procurements (buying fighter jets, submarines, funding intelligence agencies) involve massive outlays of the Consolidated Fund of India. Security decisions cannot be divorced from their immense economic implications.","Because the Finance Minister must present the defense budget to the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "You cannot fight a modern war or buy Rafale jets without billions of dollars. If the Defense Minister says"
    },
    {
        "id": "ch22-l3-q6",
        "question": "Assertion (A): The abolition of all Empowered Groups of Ministers (EGoMs) and Groups of Ministers (GoMs) by the Modi government in 2014 was intended to decentralize decision-making back to individual ministries.\\nReason (R): Because replacing GoMs with the PMO and Cabinet Secretariat resolving inter-ministerial disputes effectively transferred power away from groups of politicians directly to the Prime Minister",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are true. On paper (A), the goal was to make individual ministries take responsibility instead of hiding behind a GoM. In practice (R), when conflicts inevitably arise between two ministries, they are now resolved by the PMO/Cabinet Secretariat, not a committee of peers. This achieved the stated goal of speed, but structurally centralized conflict-resolution directly under the PM rather than among ministerial equals."
    },
    {
        "id": "ch22-l3-q7",
        "question": "When comparing the structural features of the Indian Cabinet Committees with the British system, which of the following represents a significant functional similarity?",
        "options": ["Both systems constitutionally mandate the exact number of committees.","In both systems, the Supreme Court can dissolve the committees.","In both systems, the Prime Minister exercises absolute prerogative to determine the size, composition, and specific functional mandate of the Cabinet Committees, using them as a tool to streamline executive power and manage political allies.","Both systems require the Head of State (President/Monarch) to chair at least one committee."],
        "correctAnswerIndex": 2,
        "explanation": "India adopted the Westminster model"
    },
    {
        "id": "ch22-l3-q8",
        "question": "Analyze the role of the",
        "options": ["Because it gains the power to declare a financial emergency.","Because the Supreme Court monitors it more closely.","Its role in floor management, scheduling sensitive bills, determining the timing of confidence motions, and negotiating with opposition or allied parties becomes a matter of daily survival, whereas a majority government can largely bulldoze its legislative agenda.","An electoral pact must be signed with the Election Commission."],
        "correctAnswerIndex": 2,
        "explanation": "Floor management is an art. With a 300-seat majority, the CCPA just schedules bills and passes them. In a minority government (like the 1990s), the CCPA (often including deft political negotiators) must constantly plot:"
    },
    {
        "id": "ch22-l3-q9",
        "question": "If a minister firmly disagrees with a definitive decision taken by the",
        "options": ["The minister can issue a","to the press, highlighting their objection.","The minister is bound by the specific CCEA decision only if they are a member of that committee.","Under the ironclad principle of collective responsibility, the minister must publicly defend the decision as if it were their own, regardless of private objections, or tender their resignation from the Council of Ministers.","The minister can appeal to the President to override the CCEA."],
        "correctAnswerIndex": 2,
        "explanation": "A decision by the CCEA, once ratified (or not overturned) by the Cabinet, becomes the policy of the Government of India. The"
    },
    {
        "id": "ch22-l3-q10",
        "question": "Consider the creation of the",
        "options": ["It reveals that the Constitution is constantly being amended.","It shows that the Parliament is losing its legislative power.","It demonstrates the immense fluidity and responsiveness of the",". The Prime Minister can swiftly reconfigure the highest echelons of executive decision-making to address immediate, dominant national crises (like slowing growth or joblessness) without requiring any legislative approval.","It indicates that the President is demanding more specialized advice."],
        "correctAnswerIndex": 2,
        "explanation": "This highlights the"
    },
    {
        "id": "ch22-l3-q11",
        "question": "How does the functioning of the Cabinet Committees physically interlock with the bureaucratic apparatus of the Cabinet Secretariat?",
        "options": ["They share an office in Parliament.","The Cabinet Secretary, as the head of the Cabinet Secretariat, acts as the ex-officio secretary to all Cabinet Committees, ensuring that their political decisions are translated into firm administrative action across the vast labyrinth of government ministries.","The politicians do the paperwork while the bureaucrats debate the policy.","The Cabinet Secretariat only handles state-level issues."],
        "correctAnswerIndex": 1,
        "explanation": "Politicians decide; bureaucrats execute. The Cabinet Secretary sits in these committee meetings. When the CCPA decides"
    },
    {
        "id": "ch22-l3-q12",
        "question": "If the",
        "options": ["It must seek prior approval from both Houses through a secret vote.","It must immediately broadcast the operational details live on television.","The Executive has inherent powers to conduct defense and foreign affairs (Article 73). While the CCS is not constitutionally bound to seek prior approval, the principle of parliamentary accountability requires the government to inform Parliament eventually, often after the operation is concluded to protect operational secrecy.","It must secure the Chief Justice"],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the US where declaring war requires Congress, the Indian executive has immense prerogative powers in defense/treaties. The CCS decides, the military acts. However, because the Cabinet is responsible to the Lok Sabha, the PM or Defense Minister will usually make a statement in Parliament *after* the fact (e.g., post-Balakot strikes) to maintain democratic accountability."
    },
    {
        "id": "ch22-l3-q13",
        "question": "What is the key distinguishing factor between a",
        "options": ["A Special Invitee gets a higher salary for attending the meeting.","A Special Invitee is usually a member of the opposition party.","While members are core decision-makers, a special invitee (often an MoS or a specific bureaucrat like the NSA) is brought in solely to provide expert input or domain knowledge on a particular agenda item, without sharing the ultimate political responsibility of the committee","Only the President can appoint a Special Invitee."],
        "correctAnswerIndex": 2,
        "explanation": "If the CCEA is debating telecom spectrum, the regular members (PM, Finance, Home) might make the MoS for Telecom a"
    },
    {
        "id": "ch22-l3-q14",
        "question": "Assertion (A): The President of India cannot utilize the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. A decision of the ACC (or any Cabinet Committee) is legally considered the advice of the Council of Ministers under the Transaction of Business Rules. Therefore, if the ACC recommends a controversial appointment, the President CAN use his Article 74 suspensive veto to send that specific file back to the ACC for reconsideration."
    },
    {
        "id": "ch22-l3-q15",
        "question": "Consider the impact of",
        "options": ["They were entirely abolished by the Supreme Court.","They were placed under the direct control of the Election Commission.","They morphed from being mere administrative work-sharing devices into vital political instruments for managing difficult coalition allies. Key allies demanded inclusion in powerful committees (like CCPA or CCEA) to ensure their regional/party interests were not overridden by the lead national party.","They were restricted to holding only one meeting per year."],
        "correctAnswerIndex": 2,
        "explanation": "In a single-party majority, the PM puts whoever they trust on the CCEA. In a fragile coalition, if a crucial ally (like the DMK or Trinamool Congress) isn"
    },
    {
        "id": "ch22-l3-q16",
        "question": "If a conflict arises between two major ministries (e.g., Environment vs. Coal) regarding clearance for a mining project, and no specific GoM exists, which standing Cabinet Committee usually steps in to resolve such high-stakes economic gridlocks?",
        "options": ["The Cabinet Committee on Parliamentary Affairs.","The Cabinet Committee on Security.","The Cabinet Committee on Economic Affairs (CCEA), or if it has severe political ramifications, the Cabinet Committee on Political Affairs (CCPA) will arbitrate and force a final executive decision.","The Appointments Committee of the Cabinet."],
        "correctAnswerIndex": 2,
        "explanation": "The CCEA is the apex body for economic disputes. It looks at the GDP benefits vs the environmental costs. If the coal minister and environment minister are fighting, they present their cases to the PM inside the CCEA. The CCEA"
    },
    {
        "id": "ch22-l3-q17",
        "question": "Which of the following bodies operates entirely OUTSIDE the formal Cabinet Committee structure, yet exercises immense influence on long-term policy formulation and cooperative federalism, often chaired by the Prime Minister?",
        "options": ["The Cabinet Secretariat","The PMO (Prime Minister","The NITI Aayog","The Central Bureau of Investigation."],
        "correctAnswerIndex": 2,
        "explanation": "Cabinet Committees are purely central executive bodies comprising Union Ministers. The NITI Aayog"
    },
    {
        "id": "ch22-l3-q18",
        "question": "In the context of the National Security Council (NSC), what is its functional relationship with the Cabinet Committee on Security (CCS)?",
        "options": ["The NSC has the constitutional power to veto the decisions of the CCS.","The CCS is a sub-committee of the NSC.","The NSC (headed by the National Security Advisor) functions as an apex advisory and intelligence fusion body. It analyzes threats, prepares strategic options, and feeds this intelligence to the CCS, which is the supreme political body that actually takes the authoritative political decisions (like authorizing a strike or peace talks).","They are completely independent and handle different states."],
        "correctAnswerIndex": 2,
        "explanation": "The NSC is the brain (intelligence, analysis, strategy). The CCS is the muscle (political authority to act). The NSA briefs the CCS. The politicians on the CCS (PM, Home, Def, Finance) then decide:"
    },
    {
        "id": "ch22-l3-q19",
        "question": "What does the existence of the",
        "options": ["It shows that the government plans to build free housing for all citizens by 2030.","It indicates that Parliament is suffering from a lack of physical space.","It highlights how the allocation of prime real estate in Lutyens","It proves that the Supreme Court manages all public land."],
        "correctAnswerIndex": 2,
        "explanation": "In a heavily status-conscious bureaucracy, getting a Type-VIII bungalow in central Delhi is a massive prize. When a new government forms or officers are promoted, the fighting over these elite houses is intense. To prevent the Urban Development ministry from being overwhelmed by angry MPs and Judges, the Accommodation Committee makes the hard, definitive calls."
    },
    {
        "id": "ch22-l3-q20",
        "question": "Summarize the primary difference in",
        "options": ["An EGoM is accountable to the Supreme Court; a GoM is not.","A GoM is accountable directly to the President.","A GoM merely submits a report; its members carry no final political accountability until the full Cabinet accepts it. An EGoM wields delegated executive power; their decision is immediately binding, meaning the members of the EGoM themselves carry direct political accountability for the policy adopted.","There is no difference in accountability."],
        "correctAnswerIndex": 2,
        "explanation": "An EGoM is a mini-cabinet. If an EGoM decides to privatize a massive public asset, they have executed the decision. The political backlash hits the EGoM members immediately. A GoM merely says"
    }
];

export const CHAPTER_22_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
