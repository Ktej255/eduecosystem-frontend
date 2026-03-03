import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch32-l1-q1",
        "question": "Which Article of the Constitution deals with the status of the council of ministers in the states?",
        "options": ["Article 163","Article 164","Article 166","Article 167"],
        "correctAnswerIndex": 0,
        "explanation": "Article 163 deals with the status of the council of ministers while Article 164 deals with the appointment, tenure, responsibility, qualifications, oath and salaries and allowances of the ministers."
    },
    {
        "id": "ch32-l1-q2",
        "question": "According to Article 163, there shall be a Council of Ministers with the Chief Minister at the head to aid and advise the ______ in the exercise of his functions.",
        "options": ["President","Governor","State Legislature","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 163: There shall be a council of ministers with the Chief Minister as the head to aid and advise the governor in the exercise of his functions."
    },
    {
        "id": "ch32-l1-q3",
        "question": "Does the Constitution explicitly state that the advice tendered by Ministers to the Governor shall be inquired into in any court?",
        "options": ["Yes, in the Supreme Court only.","Yes, in any High Court.","No, the advice tendered by Ministers to the Governor shall not be inquired into in any court.","Yes, but only with the President"],
        "correctAnswerIndex": 2,
        "explanation": "Article 163 states: The question whether any, and if so what, advice was tendered by ministers to the governor shall not be inquired into in any court."
    },
    {
        "id": "ch32-l1-q4",
        "question": "Article 164 explicitly mentions that the Chief Minister shall be appointed by the Governor, and the other Ministers shall be appointed by the Governor on the advice of the:",
        "options": ["President","Chief Justice of High Court","Speaker of Assembly","Chief Minister"],
        "correctAnswerIndex": 3,
        "explanation": "Article 164 says that the Chief Minister shall be appointed by the governor and the other ministers shall be appointed by the governor on the advice of the Chief Minister."
    },
    {
        "id": "ch32-l1-q5",
        "question": "In which of the following groups of states does the Constitution specifically mandate the appointment of a Minister in charge of tribal welfare?",
        "options": ["Chhattisgarh, Jharkhand, Madhya Pradesh, and Odisha","Bihar, Uttar Pradesh, and Rajasthan","Assam, Meghalaya, and Tripura","Kerala, Tamil Nadu, and Karnataka"],
        "correctAnswerIndex": 0,
        "explanation": "In the states of Chhattisgarh, Jharkhand, Madhya Pradesh and Odisha, there shall be a minister in charge of tribal welfare who may in addition be in charge of the welfare of the scheduled castes and backward classes."
    },
    {
        "id": "ch32-l1-q6",
        "question": "The 94th Amendment Act of 2006 freed which state from the obligation of having a minister in charge of tribal welfare?",
        "options": ["Madhya Pradesh","Odisha","Bihar","Jharkhand"],
        "correctAnswerIndex": 2,
        "explanation": "Originally, this provision was applicable to Bihar, Madhya Pradesh and Odisha. The 94th Amendment Act of 2006 freed Bihar from the obligation of having such a minister..."
    },
    {
        "id": "ch32-l1-q7",
        "question": "According to the 91st Amendment Act of 2003, the total number of ministers, including the Chief Minister, in the council of ministers in a state shall not exceed what percentage of the total strength of the Legislative Assembly?",
        "options": ["10%","12%","15%","20%"],
        "correctAnswerIndex": 2,
        "explanation": "The total number of ministers, including the chief minister, in the council of ministers in a state shall not exceed 15 per cent of the total strength of the legislative assembly of that state."
    },
    {
        "id": "ch32-l1-q8",
        "question": "While the maximum limit is 15%, the 91st Amendment Act also prescribed that the number of ministers, including the Chief Minister, in a state shall not be less than:",
        "options": ["10","12","15","7"],
        "correctAnswerIndex": 1,
        "explanation": "But, the number of ministers, including the chief minister, in a state shall not be less than 12."
    },
    {
        "id": "ch32-l1-q9",
        "question": "If a member of the state legislature is disqualified on the ground of defection under the Tenth Schedule, what happens to their eligibility to become a minister?",
        "options": ["They can be appointed as a minister with Governor","They are completely disqualified to be appointed as a minister.","They can only be appointed as a Minister of State, not Cabinet Minister.","Defection has no impact on ministerial eligibility."],
        "correctAnswerIndex": 1,
        "explanation": "A member of either House of state legislature belonging to any political party who is disqualified on the ground of defection shall also be disqualified to be appointed as a minister. (91st Amendment)"
    },
    {
        "id": "ch32-l1-q10",
        "question": "The ministers hold office during the pleasure of the:",
        "options": ["Chief Minister","President","Governor","Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "The ministers shall hold office during the pleasure of the governor (Article 164)."
    },
    {
        "id": "ch32-l1-q11",
        "question": "The council of ministers shall be collectively responsible to the:",
        "options": ["Governor","State Legislative Council","State Legislative Assembly","Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The council of ministers shall be collectively responsible to the state Legislative Assembly."
    },
    {
        "id": "ch32-l1-q12",
        "question": "Before a minister enters upon his office, the Governor administers to him the oaths of office and:",
        "options": ["Allegiance","Wealth","Secrecy","Justice"],
        "correctAnswerIndex": 2,
        "explanation": "The governor shall administer the oaths of office and secrecy to a minister."
    },
    {
        "id": "ch32-l1-q13",
        "question": "A minister who for any period of six consecutive months is not a member of the state legislature:",
        "options": ["Is suspended without pay.","Must resign within the next 30 days.","Ceases to be a minister at the expiration of that period.","Can continue as a minister if the CM permits."],
        "correctAnswerIndex": 2,
        "explanation": "A minister who for any period of six consecutive months is not a member of the state legislature shall at the expiration of that period cease to be a minister."
    },
    {
        "id": "ch32-l1-q14",
        "question": "Who determines the salaries and allowances of the state ministers?",
        "options": ["The Governor","The Parliament","The State Legislature","The Finance Commission"],
        "correctAnswerIndex": 2,
        "explanation": "The salaries and allowances of ministers shall be determined by the state legislature."
    },
    {
        "id": "ch32-l1-q15",
        "question": "Article 166 deals with the conduct of business of the Government of a State. According to this article, all executive action of the Government of a State shall be expressed to be taken in the name of the:",
        "options": ["Chief Minister","Governor","Chief Secretary","President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 166: All executive action of the Government of a State shall be expressed to be taken in the name of the Governor."
    },
    {
        "id": "ch32-l1-q16",
        "question": "Who makes rules for the more convenient transaction of the business of the government of the state, and for the allocation among ministers of the said business?",
        "options": ["The Speaker","The Governor","The Chief Minister","The Chief Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor shall make rules for the more convenient transaction of the business of the government of the state, and for the allocation among ministers of the said business."
    },
    {
        "id": "ch32-l1-q17",
        "question": "According to Article 177, every minister has the right to speak and take part in the proceedings of the Assembly (and Council, if any), but he cannot:",
        "options": ["Vote in the House of which he is not a member.","Sit in the front row.","Ask questions to other ministers.","Participate in legislative committees."],
        "correctAnswerIndex": 0,
        "explanation": "Article 177: Every minister shall have the right to speak and take part in the proceedings of the Assembly... but shall not be entitled to vote (in the House where he is not a member)."
    },
    {
        "id": "ch32-l1-q18",
        "question": "What does the principle of",
        "options": ["They are totally independent in their respective departments.","They are directly responsible to the Governor for their departments.","They swim and sink together. If the assembly passes a no-confidence motion, all ministers have to resign.","Only the Chief Minister is responsible for the government"],
        "correctAnswerIndex": 2,
        "explanation": "The fundamental principle underlying the working of parliamentary system of government is the principle of collective responsibility... They swim and sink together."
    },
    {
        "id": "ch32-l1-q19",
        "question": "If the legislative assembly passes a no-confidence motion against the council of ministers, who among the following must resign?",
        "options": ["Only the cabinet ministers.","Only the ministers who are members of the legislative assembly.","All the ministers, including those belonging to the legislative council.","Only the Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "When the legislative assembly passes a no-confidence motion against the council of ministers, all the ministers have to resign including those ministers who are from the legislative council."
    },
    {
        "id": "ch32-l1-q20",
        "question": "While the council of ministers is collectively responsible to the assembly, to whom is a minister individually responsible?",
        "options": ["The Chief Minister","The Speaker","The Governor","The People"],
        "correctAnswerIndex": 2,
        "explanation": "Article 164 also contains the principle of individual responsibility. It states that the ministers hold office during the pleasure of the governor."
    },
    {
        "id": "ch32-l1-q21",
        "question": "Under",
        "options": ["President","Chief Minister","Speaker","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "However, the governor can remove a minister only on the advice of the Chief Minister."
    },
    {
        "id": "ch32-l1-q22",
        "question": "Is there any provision in the Constitution for the system of",
        "options": ["Yes, a minister must countersign every order of the Governor.","No, there is no provision in the Constitution for the system of legal responsibility of a minister in the states.","Yes, but only for financial bills.","Yes, a minister is legally immune from all actions."],
        "correctAnswerIndex": 1,
        "explanation": "As at the Centre, there is no provision in the Constitution for the system of legal responsibility of a minister in the states... Further, the courts are barred from enquiring into the nature of advice rendered by the ministers to the governor."
    },
    {
        "id": "ch32-l1-q23",
        "question": "The state council of ministers consists of three categories of ministers. Which of the following is NOT one of these standard categories?",
        "options": ["Cabinet Ministers","Ministers of State","Deputy Ministers","Associate Ministers"],
        "correctAnswerIndex": 3,
        "explanation": "The council of ministers consists of three categories of ministers, namely, cabinet ministers, ministers of state, and deputy ministers."
    },
    {
        "id": "ch32-l1-q24",
        "question": "Which category of ministers heads the important departments of the state government like home, education, finance, agriculture and so on?",
        "options": ["Ministers of State","Deputy Ministers","Cabinet Ministers","Parliamentary Secretaries"],
        "correctAnswerIndex": 2,
        "explanation": "The cabinet ministers head the important departments of the state government like home, education, finance, agriculture and so on."
    },
    {
        "id": "ch32-l1-q25",
        "question": "Which body actually attends meetings and plays a crucial role in deciding policies within the state government?",
        "options": ["The entire Council of Ministers","Only the Cabinet","Only the Ministers of State","Only the Deputy Ministers"],
        "correctAnswerIndex": 1,
        "explanation": "They (Cabinet ministers) are members of the cabinet, attend its meetings and play an important role in deciding policies... Thus, cabinet is the real centre of power in the state government."
    },
    {
        "id": "ch32-l1-q26",
        "question": "Ministers of state can either be given independent charge of departments or can be attached to:",
        "options": ["Deputy Ministers","The Governor","Cabinet Ministers","The Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "The ministers of state can either be given independent charge of departments or can be attached to cabinet ministers."
    },
    {
        "id": "ch32-l1-q27",
        "question": "Are Ministers of State members of the Cabinet?",
        "options": ["Yes, always.","No, they are not members of the cabinet and do not attend the cabinet meetings unless specially invited.","They are members, but without voting rights.","They are members only during emergencies."],
        "correctAnswerIndex": 1,
        "explanation": "They (Ministers of State) are not members of the cabinet and do not attend the cabinet meetings unless specially invited..."
    },
    {
        "id": "ch32-l1-q28",
        "question": "Deputy ministers are given independent charge of departments. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 1,
        "explanation": "False. Next in rank are the deputy ministers. They are not given independent charge of departments. They are attached to the cabinet ministers..."
    },
    {
        "id": "ch32-l1-q29",
        "question": "Sometimes, the council of ministers may also include a",
        "options": ["Constitutional requirement under Article 164.","Local political reasons.","To assist the Governor in administrative matters.","To substitute the Chief Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "At times, the council of ministers may also include a deputy chief minister. The deputy chief ministers are appointed mostly for local political reasons."
    },
    {
        "id": "ch32-l1-q30",
        "question": "The",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "True. It is a smaller body consisting of cabinet ministers... It is the highest decision-making authority in the politico-administrative system of a state."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch32-l2-q1",
        "question": "Consider the constitutional paradox regarding the removal of a state minister. While a minister holds office during the",
        "options": ["The Governor can dismiss the minister anytime based on his subjective assessment of the minister","The pleasure of the Governor is essentially the pleasure of the Chief Minister; the Governor can only dismiss a minister upon the specific advice of the Chief Minister.","The pleasure is subject to confirmation by the High Court.","The pleasure means the minister serves for exactly 5 years unless impeached."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164 states they hold office during the Governor"
    },
    {
        "id": "ch32-l2-q2",
        "question": "If the State Legislative Assembly rejects the annual state budget presented by the Finance Minister, what is the immediate constitutional consequence?",
        "options": ["Only the Finance Minister must resign.","The Governor must dissolve the Assembly immediately without giving anyone a chance to form the government.","It is treated as equivalent to the passage of a no-confidence motion, and the entire Council of Ministers (including the CM) must resign.","The budget is automatically sent to the President for approval."],
        "correctAnswerIndex": 2,
        "explanation": "The budget is the core financial policy of the government. In a parliamentary system, the defeat of a money bill or the budget in the lower house is a clear indication that the government has lost its majority support. By convention, the CM and his cabinet must resign immediately."
    },
    {
        "id": "ch32-l2-q3",
        "question": "Which of the following constitutional provisions acts as a safeguard against a minister taking major policy decisions entirely independently (a",
        "options": ["Article 163, barring judicial review of advice.","Article 167, which empowers the Governor to require the CM to place before the entire Council any matter decided by an individual minister that hasn","Article 164, limiting the size of the Council.","Article 166, requiring rules of business."],
        "correctAnswerIndex": 1,
        "explanation": "Article 167(c) allows the Governor (who functions as a constitutional watchdog) to spot a major decision taken by a single minister and force the CM to bring it to the full cabinet. This ensures"
    },
    {
        "id": "ch32-l2-q4",
        "question": "Examine the composition of the State Legislature relative to the Council of Ministers. Can a",
        "options": ["No, ministers must be popularly elected.","Yes, the Constitution does not distinguish between elected and nominated members regarding eligibility for ministerial appointment.","Only as a Minister of State, not a Cabinet Minister.","Yes, but only if the nominated member belongs to the SC/ST community."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164 simply requires a minister to be a"
    },
    {
        "id": "ch32-l2-q5",
        "question": "The 91st Amendment Act (2003) clamped down on",
        "options": ["4 (since 15% of 32 is roughly 4.8).","12, because the Constitution specifically provides a floor limit to ensure government viability in smaller states.","15.","10% of 32."],
        "correctAnswerIndex": 1,
        "explanation": "While the general ceiling is 15%, the proviso to Article 164(1A) states that the number of ministers, including the CM, shall not be less than 12. For small states like Goa, Mizoram, or Sikkim, applying the 15% rule would yield too few ministers to run a government, hence the minimum threshold of 12."
    },
    {
        "id": "ch32-l2-q6",
        "question": "Regarding the",
        "options": ["It is a formal body mentioned in the Rules of Business under Article 166.","It consists exclusively of Cabinet Ministers.","It is an informal, extra-constitutional body consisting of the CM","It is headed by the Governor."],
        "correctAnswerIndex": 2,
        "explanation": "A Kitchen Cabinet is a completely informal circle of advisors. It has no constitutional validity. The danger of a Kitchen Cabinet is that non-elected, unaccountable individuals (friends, relatives, powerful bureaucrats) heavily influence decisions while bypassing the formal, democratically accountable Council of Ministers."
    },
    {
        "id": "ch32-l2-q7",
        "question": "Every executive action of the State Government is expressed to be taken in the name of the Governor (Article 166). What immunity does an order, correctly authenticated by a state bureaucrat according to the Governor",
        "options": ["It cannot be challenged in any court under any circumstances.","It cannot be called in question on the ground that it is not an order made or executed by the Governor.","It grants the Chief Minister absolute immunity from prosecution.","It prevents the legislature from reviewing the order."],
        "correctAnswerIndex": 1,
        "explanation": "Article 166(2) provides"
    },
    {
        "id": "ch32-l2-q8",
        "question": "Assertion (A): The advice tendered by Ministers to the Governor cannot be inquired into in any court (Article 163).\\nReason (R): This aims to foster frank and candid discussions within the Cabinet, protecting the confidentiality of the decision-making process from judicial dissection.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a cornerstone of the Westminster parliamentary system. Cabinet secrecy is paramount. If ministers fear their dissenting opinions inside the cabinet room will be dragged into public courts, they won"
    },
    {
        "id": "ch32-l2-q9",
        "question": "Which of the following scenarios is a direct violation of the principle of",
        "options": ["A minister speaking in the Legislative Council instead of the Assembly.","The Chief Minister holding three different portfolios simultaneously.","A Cabinet Minister publicly criticizing a policy that was recently approved by the Cabinet, and refusing to resign.","A Minister appointing an IAS officer from his home district as his secretary."],
        "correctAnswerIndex": 2,
        "explanation": "Once a decision is taken in the Cabinet, every minister is bound by it outside the cabinet room, regardless of their personal view. If a minister publicly opposes a cabinet decision, he is violating collective responsibility and must either resign voluntarily or be sacked by the CM."
    },
    {
        "id": "ch32-l2-q10",
        "question": "In the structure of the State Council of Ministers, what is the primary functional difference between a",
        "options": ["The former draws a higher salary than a Cabinet Minister.","The former handles smaller/less crucial departments independently (without reporting to a Cabinet Minister) and attends cabinet meetings when matters related to their department are discussed. The latter operates under the guidance of a Cabinet Minister.","Only the former is a member of the Legislative Assembly.","The former is appointed by the Governor directly, bypassing the CM."],
        "correctAnswerIndex": 1,
        "explanation": "An MoS (Independent Charge) is essentially a junior cabinet minister running a smaller ministry. They answer directly to the CM, not to another minister. A regular MoS acts more like a deputy, assisting a senior Cabinet Minister in a large department like Home or Finance."
    },
    {
        "id": "ch32-l2-q11",
        "question": "Consider a state with a bicameral legislature (Assembly and Council). A minister belongs to the Legislative Council. A money bill is introduced in the Assembly. What rights does this minister have regarding the bill?",
        "options": ["He cannot enter the Assembly at all since it is a Money Bill.","He can enter the Assembly, participate in the debate, answer questions on behalf of the government, but he CANNOT cast a vote when the bill is put to a division.","He can participate and vote in the Assembly since he is a minister.","He can only vote if the Chief Minister gives him written permission."],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 grants every minister the right to speak and participate in the proceedings of the House they do *not* belong to. However, the right to *vote* is strictly restricted to the House where they are actually a member. Thus, an MLC minister can defend the budget in the Assembly but cannot vote on it."
    },
    {
        "id": "ch32-l2-q12",
        "question": "Historically, the institution of",
        "options": ["Because they are usually uneducated.","Because appointing them with ranks, salaries, and perks equivalent to ministers is an illegal attempt to bypass the 15% constitutional ceiling on the size of the Council of Ministers (Article 164-1A).","Because they are appointed by the President instead of the Governor.","Because they belong to opposition parties."],
        "correctAnswerIndex": 1,
        "explanation": "When states hit the 15% ceiling set by the 91st Amendment, CMs started appointing MLAs as"
    },
    {
        "id": "ch32-l2-q13",
        "question": "Which of the following scenarios best demonstrates the concept of",
        "options": ["The entire government resigning after losing a trust vote.","A Minister resigning because he was caught in a personal corruption scandal or committed a grave administrative error within his specific department, shielding the rest of the cabinet from the fallout.","The Governor dissolving the Assembly against the CM","The High Court striking down a state law."],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch32-l2-q14",
        "question": "Under the Constitution, the oath of office for a state minister includes swearing to bear true faith and allegiance to the Constitution, and to:",
        "options": ["Always follow the orders of the Chief Minister.","Uphold the sovereignty and integrity of India.","Never implement central laws.","Remain loyal to the ruling political party."],
        "correctAnswerIndex": 1,
        "explanation": "The oath demands ultimate loyalty to the nation"
    },
    {
        "id": "ch32-l2-q15",
        "question": "A Minister",
        "options": ["When journalists file an RTI application.","As may be required for the due discharge of their duties as a minister.","When their political party","When the Leader of the Opposition requests it."],
        "correctAnswerIndex": 1,
        "explanation": "The oath of secrecy (Third Schedule) states a minister will not reveal matters"
    },
    {
        "id": "ch32-l2-q16",
        "question": "In the context of the State Government",
        "options": ["They are permanent constitutional bodies created by Article 165.","They are extra-constitutional bodies formated to reduce the enormous workload of the Cabinet, facilitating in-depth examination of policy issues before final cabinet approval.","They are judicial panels comprising retired High Court judges.","They are headed by the Governor to bypass the Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Just like at the Centre, state governments use Cabinet Committees (e.g., Political Affairs Committee, Economic Affairs Committee). They are not mentioned in the Constitution (extra-constitutional) but are set up under the Rules of Business to sort through complex issues before presenting a refined proposal to the full cabinet."
    },
    {
        "id": "ch32-l2-q17",
        "question": "If a sitting MLA is convicted of a crime and sentenced to 3 years in prison, taking into account the Lily Thomas judgment and the 91st Amendment:",
        "options": ["He can continue as a minister but cannot vote in the Assembly.","He is instantly disqualified from being an MLA, and consequently, immediately loses his ministerial position.","He is immune from disqualification because he is a minister.","The Governor must ask the Election Commission after 3 months."],
        "correctAnswerIndex": 1,
        "explanation": "Conviction of 2+ years triggers instant disqualification from the legislature (RPA Sec 8). Unlike a normal citizen who gets 6 months to get elected, a *disqualified* individual cannot utilize the 6-month non-member rule. Therefore, losing MLA status via criminal disqualification means instant termination as a minister."
    },
    {
        "id": "ch32-l2-q18",
        "question": "Does the Constitution mandate having a",
        "options": ["Yes, it is a constitutional requirement for states with more than 100 MLAs.","No. The post of Deputy CM has no constitutional mention or special powers; it is purely a political arrangement. Legally, they are just a Cabinet Minister.","Yes, under Article 164(2).","Yes, to take over if the Governor is absent."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution only knows"
    },
    {
        "id": "ch32-l2-q19",
        "question": "Assertion (A): The Governor cannot be sued for any action taken by the state government in his name.\\nReason (R): In the Indian states, the system of legal responsibility of a minister ensures that ministers countersign and take legal liability for the Governor",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "A is TRUE: The Governor enjoys absolute immunity under Article 361. R is FALSE: Unlike Britain (where"
    },
    {
        "id": "ch32-l2-q20",
        "question": "If the Council of Ministers resigns, the Governor generally asks them to continue as a",
        "options": ["They cannot use official vehicles.","They cannot collect taxes.","They should not take major policy decisions or initiate new schemes that could tie the hands of the incoming democratically elected government.","They must take orders directly from the High Court."],
        "correctAnswerIndex": 2,
        "explanation": "A caretaker government lacks the fresh confidence of the legislature. Therefore, by convention, it only performs routine day-to-day administration. It is considered highly improper to sign massive financial contracts, declare new populist policies, or make major bureaucratic transfers right before an election."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch32-l3-q1",
        "question": "Examine the constitutional implications of the Supreme Court judgment in",
        "options": ["Yes, Article 164(4) provides a blanket 6-month immunity to anyone appointed by the Governor, regardless of prior disqualifications.","No. The Supreme Court established that Article 164(4) is an exception only for those who are *eligible* to be members but simply haven","Yes, but only if they are nominated to the Legislative Council within 14 days.","Only the President can grant such an appointment under Article 356."],
        "correctAnswerIndex": 1,
        "explanation": "This case famously struck down Jayalalithaa"
    },
    {
        "id": "ch32-l3-q2",
        "question": "Analyze the",
        "options": ["They violate the maximum limits of salaries prescribed by the Finance Commission.","They are a","designed to circumvent the 15% ceiling on the size of the Council of Ministers (Article 164(1A)) established by the 91st Amendment, by giving MLAs ministerial rank and perks under a disguised title.","Only the UPSC can appoint Parliamentary Secretaries.","They violate the linguistic diversity rules of the State Secretariat."],
        "correctAnswerIndex": 1,
        "explanation": "The 91st Amendment capped the Cabinet size at 15%. To appease"
    },
    {
        "id": "ch32-l3-q3",
        "question": "In the context of",
        "options": ["The Constitution mandates that the entire Council of Ministers must immediately resign upon the indictment of any single member.","Collective Responsibility means the government is politically responsible to the Assembly as a whole. However, for specific, severe misconduct,","allows the Chief Minister to sack ONLY the corrupt ministers to save the rest of the government, UNLESS the Assembly specifically votes","in the *entire* Council.","The Governor must instantly proclaim President","Only the High Court can order resignations."],
        "correctAnswerIndex": 1,
        "explanation": "Collective Responsibility (they swim and sink together) means the government defends its policies as a team. But it doesn"
    },
    {
        "id": "ch32-l3-q4",
        "question": "Assertion (A): Unlike the President of India (Article 74), the Governor of a State has",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is the single most important difference between the Union and State executives. The 42nd Amendment made cabinet advice binding on the President completely. No such amendment was made to Article 163. The Governor explicitly retains"
    },
    {
        "id": "ch32-l3-q5",
        "question": "Under the",
        "options": ["To divide the state","To streamline decision-making. The Cabinet acts as the supreme steering committee deciding major policies. Plenary sessions of all 30-40 ministers are unwieldy; thus, only Cabinet Ministers attend cabinet meetings by right, making the executive functional and fast.","To ensure that only Cabinet Ministers can answer questions in the Assembly.","To create a legal hierarchy where MoS must always agree with the Opposition."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch32-l3-q6",
        "question": "Consider the constitutional paradox of",
        "options": ["Yes, the Secretary becomes the real executive head.","No. The authentication is merely a formal legal shield. The substantive decision behind the order MUST still be taken by a Minister or the Cabinet in accordance with the Rules of Business. If a Secretary issues an order without ministerial approval, it is unconstitutional.","Yes, but only during an emergency.","No, only the Chief Secretary has such power."],
        "correctAnswerIndex": 1,
        "explanation": "Article 166 authentication stops frivolous lawsuits complaining"
    },
    {
        "id": "ch32-l3-q7",
        "question": "According to the Supreme Court",
        "options": ["If the Governor personally feels the Assembly needs to meet to discuss a budget.","If the Chief Minister has demonstrably lost the majority (e.g., massive defections) and is deliberately delaying conveying the","to summon the Assembly to evade a Floor Test.","The Governor can never summon the Assembly without advice.","If the President orders the Governor to dissolve the state entirely."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, summoning the House (Article 174) is an executive function done *only* on the CM"
    },
    {
        "id": "ch32-l3-q8",
        "question": "A controversial trend involves State Governments passing laws to remove the Governor from the position of",
        "options": ["Universities are purely a Union Subject (List I), so the states want to claim them.","The role of Chancellor is a statutory creation of the State Legislature, not a constitutional mandate. Since the Governor uses this statutory position independently to appoint Vice-Chancellors (often against the State Cabinet","The Governor is not educated enough to be Chancellor.","The Constitution explicitly bans Governors from entering universities."],
        "correctAnswerIndex": 1,
        "explanation": "As Chancellor, the Governor does not act on the"
    },
    {
        "id": "ch32-l3-q9",
        "question": "Consider the impact of the",
        "options": ["It stopped MLAs from resigning their seats continuously.","It ended","where Chief Ministers would buy the loyalty of massive numbers of opposition defectors by instantly rewarding them all with lucrative Ministerial berths, thus stabilizing inherently unstable coalitions.","It forced the Election Commission to fund political parties.","It mandated that all Ministers must be from the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Before 2003, if a CM needed 10 MLAs to survive, he would encourage 10 opposition MLAs to defect and instantly invent 10 new Ministries (even trivial ones) to reward them, bloating the cabinet to 40-50 people at massive public expense. The 91st Amendment stopped this dead: First, you can"
    },
    {
        "id": "ch32-l3-q10",
        "question": "In the context of the Senthil Balaji case (Tamil Nadu, 2024), where the Governor attempted to unilaterally",
        "options": ["The Governor is the supreme commander of the state police.","The","doctrine regarding individual ministers is entirely subordinate to the bedrock parliamentary principle of the Chief Minister","Only the High Court can dismiss a minister.","The President must pre-approve all ministerial dismissals."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164 says ministers serve at the Governor"
    }
];

export const CHAPTER_32_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
