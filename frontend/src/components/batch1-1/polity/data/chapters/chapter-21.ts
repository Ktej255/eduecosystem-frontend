import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch21-l1-q1",
        "question": "Which Article of the Constitution deals with the status of the council of ministers?",
        "options": ["Article 74","Article 75","Article 77","Article 78"],
        "correctAnswerIndex": 0,
        "explanation": "Article 74 deals with the status of the council of ministers while Article 75 deals with the appointment, tenure, responsibility, qualification, oath and salaries and allowances of the ministers."
    },
    {
        "id": "ch21-l1-q2",
        "question": "Who is the real executive authority in the parliamentary system of government in India?",
        "options": ["The President","The Parliament","The Council of Ministers headed by the Prime Minister","The Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "As the Constitution of India provides for a parliamentary system of government modelled on the British pattern, the council of ministers headed by the prime minister is the real executive authority is our politico-administrative system."
    },
    {
        "id": "ch21-l1-q3",
        "question": "According to Article 74, who shall act in accordance with the advice of the Council of Ministers?",
        "options": ["The Prime Minister","The Chief Justice of India","The President","The Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "Article 74: There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice."
    },
    {
        "id": "ch21-l1-q4",
        "question": "Can the President ask the Council of Ministers to reconsider their advice?",
        "options": ["No, the advice is final the first time.","Yes, but only once; and the President must act in accordance with the reconsidered advice.","Yes, he can return it as many times as he likes.","Yes, but only if the Supreme Court agrees."],
        "correctAnswerIndex": 1,
        "explanation": "However, the President may require the Council of Ministers to reconsider such advice and the President shall act in accordance with the advice tendered after such reconsideration."
    },
    {
        "id": "ch21-l1-q5",
        "question": "Can any court in India inquire into the advice tendered by Ministers to the President?",
        "options": ["Yes, the Supreme Court can inquire into it.","Yes, any High Court can inquire into it.","No, the question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court.","Yes, if it violates Fundamental Rights."],
        "correctAnswerIndex": 2,
        "explanation": "The question whether any, and if so what, advice was tendered by Ministers to the President shall not be inquired into in any court."
    },
    {
        "id": "ch21-l1-q6",
        "question": "According to Article 75, who appoints the Prime Minister?",
        "options": ["The Parliament","The Chief Justice of India","The President","The outgoing Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "Article 75: The Prime Minister shall be appointed by the President..."
    },
    {
        "id": "ch21-l1-q7",
        "question": "How are the other Ministers appointed?",
        "options": ["By the Prime Minister directly.","By the Parliament.","By the President on the advice of the Prime Minister.","By the Chief Justice of India."],
        "correctAnswerIndex": 2,
        "explanation": "...and the other Ministers shall be appointed by the President on the advice of the Prime Minister."
    },
    {
        "id": "ch21-l1-q8",
        "question": "What is the maximum limit on the total number of ministers, including the Prime Minister, in the Council of Ministers?",
        "options": ["10% of the total strength of the Lok Sabha.","15% of the total strength of the Parliament (both Houses).","15% of the total strength of the Lok Sabha.","There is no constitutional limit."],
        "correctAnswerIndex": 2,
        "explanation": "The total number of ministers, including the Prime Minister, in the Council of Ministers shall not exceed 15% of the total strength of the Lok Sabha."
    },
    {
        "id": "ch21-l1-q9",
        "question": "Which Constitutional Amendment Act added the provision limiting the size of the Council of Ministers to 15% of the Lok Sabha?",
        "options": ["42nd Amendment Act of 1976","44th Amendment Act of 1978","91st Amendment Act of 2003","97th Amendment Act of 2011"],
        "correctAnswerIndex": 2,
        "explanation": "This [15% limit] provision was added by the 91st Amendment Act of 2003."
    },
    {
        "id": "ch21-l1-q10",
        "question": "If a member of Parliament is disqualified on the ground of defection, can they still be appointed as a minister?",
        "options": ["Yes, but only as a Minister of State.","No, a member disqualified on the ground of defection shall also be disqualified to be appointed as a minister.","Yes, if the Prime Minister insists.","Yes, for a maximum of 6 months."],
        "correctAnswerIndex": 1,
        "explanation": "A member of either house of Parliament belonging to any political party who is disqualified on the ground of defection shall also be disqualified to be appointed as a minister."
    },
    {
        "id": "ch21-l1-q11",
        "question": "During whose pleasure do the ministers hold office?",
        "options": ["The Prime Minister","The Parliament","The President","The Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The ministers shall hold office during the pleasure of the President."
    },
    {
        "id": "ch21-l1-q12",
        "question": "To which body is the Council of Ministers COLLECTIVELY responsible?",
        "options": ["The President","The Rajya Sabha","The Parliament as a whole","The Lok Sabha"],
        "correctAnswerIndex": 3,
        "explanation": "The council of ministers shall be collectively responsible to the Lok Sabha."
    },
    {
        "id": "ch21-l1-q13",
        "question": "Who administers the oaths of office and secrecy to a minister?",
        "options": ["The Prime Minister","The Chief Justice of India","The President","The Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "The President shall administer the oaths of office and secrecy to a minister."
    },
    {
        "id": "ch21-l1-q14",
        "question": "What happens if a minister is NOT a member of either House of Parliament for six consecutive months?",
        "options": ["They remain a minister but cannot vote.","They cease to be a minister.","They must pay a fine.","Their term is extended by the President."],
        "correctAnswerIndex": 1,
        "explanation": "A minister who is not a member of the Parliament (either house) for any period of six consecutive months shall cease to be a minister."
    },
    {
        "id": "ch21-l1-q15",
        "question": "Who determines the salaries and allowances of ministers?",
        "options": ["The President","The Prime Minister","The Parliament","The Finance Commission"],
        "correctAnswerIndex": 2,
        "explanation": "The salaries and allowances of ministers shall be determined by the Parliament."
    },
    {
        "id": "ch21-l1-q16",
        "question": "According to Article 77, all executive action of the Government of India shall be expressed to be taken in the name of the:",
        "options": ["Prime Minister","Government of India","President","Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Article 77: All executive action of the Government of India shall be expressed to be taken in the name of the President."
    },
    {
        "id": "ch21-l1-q17",
        "question": "Who makes rules for the more convenient transaction of the business of the Government of India, and for the allocation of business among Ministers?",
        "options": ["The Prime Minister","The Parliament","The President","The Cabinet Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "The President shall make rules for the more convenient transaction of the business of the Government of India, and for the allocation among Ministers of the said business."
    },
    {
        "id": "ch21-l1-q18",
        "question": "What does the principle of",
        "options": ["Only the Prime Minister has to resign.","Only the minister responsible for the specific failure has to resign.","All the ministers, including those from the Rajya Sabha, have to resign.","The Parliament is automatically dissolved."],
        "correctAnswerIndex": 2,
        "explanation": "When the Lok Sabha passes a no-confidence motion against the council of ministers, all the ministers have to resign including those ministers who are from the Rajya Sabha."
    },
    {
        "id": "ch21-l1-q19",
        "question": "Besides collective responsibility, what other type of responsibility does Article 75 contain?",
        "options": ["Financial Responsibility","Legal Responsibility","Individual Responsibility","Moral Responsibility"],
        "correctAnswerIndex": 2,
        "explanation": "Article 75 also contains the principle of individual responsibility. It states that the ministers hold office during the pleasure of the president, which means that the President can remove a minister even at a time when the council of ministers enjoys the confidence of the Lok Sabha."
    },
    {
        "id": "ch21-l1-q20",
        "question": "If a minister disagrees with a cabinet decision and is not prepared to defend it in Parliament, what is they constitutionally expected to do?",
        "options": ["Vote against it in Parliament secretly.","Resign.","Publicly criticize the decision but stay in the cabinet.","Appeal to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "If any minister disagrees with a cabinet decision and is not prepared to defend it, he must resign."
    },
    {
        "id": "ch21-l1-q21",
        "question": "Does the Indian Constitution provide for the legal responsibility of a minister regarding Presidential orders?",
        "options": ["Yes, every order of the President requires a minister","No, there is no provision in the Constitution for the system of legal responsibility of a minister.","Yes, ministers are legally immune from all actions.","Yes, if the order violates a fundamental right."],
        "correctAnswerIndex": 1,
        "explanation": "In India, there is no provision in the Constitution for the system of legal responsibility of a minister. It is not required that an order of the President for a public act should be countersigned by a minister."
    },
    {
        "id": "ch21-l1-q22",
        "question": "Which of the following describes the",
        "options": ["It is a larger body than the Council.","It consists of all three categories of ministers (Cabinet, State, Deputy).","It is a smaller body consisting of only cabinet ministers, about 15 to 20 in number.","It never meets as a body to transact government business."],
        "correctAnswerIndex": 2,
        "explanation": "It [the Cabinet] is a smaller body consisting of 15 to 20 ministers. It includes the cabinet ministers only."
    },
    {
        "id": "ch21-l1-q23",
        "question": "Which category of ministers are given independent charge of ministries/departments or attached to cabinet ministers?",
        "options": ["Cabinet Ministers","Ministers of State","Deputy Ministers","Parliamentary Secretaries"],
        "correctAnswerIndex": 1,
        "explanation": "The ministers of state can either be given independent charge of ministries/ departments or can be attached to cabinet ministers."
    },
    {
        "id": "ch21-l1-q24",
        "question": "Are Deputy Ministers given independent charge of departments?",
        "options": ["Yes, very frequently.","No, they are not given independent charge of departments or ministries.","Yes, but only in the Home Ministry.","Yes, but only if they are from the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Next in rank are the deputy ministers. They are not given independent charge of departments or ministries. They are attached to the cabinet ministers or ministers of state and assist them..."
    },
    {
        "id": "ch21-l1-q25",
        "question": "Do Ministers of State generally attend Cabinet meetings?",
        "options": ["Yes, always.","No, they do not attend the cabinet meetings unless specially invited when something related to their ministries/departments is considered by the cabinet.","Yes, but they cannot vote.","Only if the PM is absent."],
        "correctAnswerIndex": 1,
        "explanation": "They [Ministers of State] are not members of the cabinet and do not attend the cabinet meetings unless specially invited when something related to their ministries/departments is considered by the cabinet."
    },
    {
        "id": "ch21-l1-q26",
        "question": "Which of the following is the highest decision-making authority in our politico-administrative system?",
        "options": ["The Parliament","The Supreme Court","The Cabinet","The National Development Council"],
        "correctAnswerIndex": 2,
        "explanation": "Role of Cabinet: 1. It is the highest decision-making authority in our politico-administrative system."
    },
    {
        "id": "ch21-l1-q27",
        "question": "Was the word",
        "options": ["Yes, it was in Article 74.","Yes, it was in Article 75.","No, it was not there in the original text of the Constitution.","Yes, it was defined in the Preamble."],
        "correctAnswerIndex": 2,
        "explanation": "It was inserted in Article 352 of the Constitution in 1978 by the 44th Constitutional Amendment Act. Thus, it did not find a place in the original text of the Constitution."
    },
    {
        "id": "ch21-l1-q28",
        "question": "Which body",
        "options": ["The Parliament as a whole","The Council of Ministers","The Cabinet","The Inter-State Council"],
        "correctAnswerIndex": 2,
        "explanation": "Distinction between Council of Ministers and Cabinet... Cabinet: It meets, as a body, frequently and usually once in a week to deliberate and take decisions regarding the transaction of government business... Its decisions bind on all ministers."
    },
    {
        "id": "ch21-l1-q29",
        "question": "Who is the chief crisis manager in the politico-administrative system of India?",
        "options": ["The Home Secretary","The Cabinet","The Prime Minister solely","The President"],
        "correctAnswerIndex": 1,
        "explanation": "Role of Cabinet... 5. It is the chief crisis manager and thus deals with all emergency situations."
    },
    {
        "id": "ch21-l1-q30",
        "question": "What is an",
        "options": ["A subset of bureaucrats managing food supply.","An informal body consisting of the Prime Minister and two to four influential colleagues in whom he has faith and with whom he can discuss every problem.","A formal sub-committee appointed by the President.","The lowest tier of ministers (Deputy Ministers)."],
        "correctAnswerIndex": 1,
        "explanation": "It is an informal body consisting of the Prime Minister and two to four influential colleagues in whom he has faith and with whom he can discuss every problem. It advises the prime minister on important political and administrative issues and assists him in making crucial decisions."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch21-l2-q1",
        "question": "How does the Indian Constitution legally enforce the principle that the President is a nominal executive and the Council of Ministers is the real executive?",
        "options": ["By explicitly stating in the Preamble that India is a Prime Ministerial Democracy.","Through Article 74, which mandates that the President","act in accordance with the advice rendered by the Council of Ministers, legally binding him to their decisions.","By giving the Supreme Court the power to veto Presidential actions if they disagree with the Prime Minister.","By electing the President through an Electoral College rather than a direct popular vote."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd and 44th Amendments concretised this in Article 74. The usage of the word"
    },
    {
        "id": "ch21-l2-q2",
        "question": "Consider the President",
        "options": ["It gives the President an absolute veto over Cabinet decisions.","It empowers the Supreme Court to arbitrate if the Cabinet and the President disagree.","It acts merely as a","or a warning mechanism. If the Cabinet ignores the President","It forces the Prime Minister to resign if the advice is returned."],
        "correctAnswerIndex": 2,
        "explanation": "The 44th Amendment (by the Janata government) gave the President a tiny sliver of agency. If President K.R. Narayanan feels the advice to impose President"
    },
    {
        "id": "ch21-l2-q3",
        "question": "Article 74(2) states:",
        "options": ["To make ministers immune from all criminal prosecution.","To establish the absolute supremacy of the Supreme Court.","To protect the extreme confidentiality and frankness of the intimate relationship and communication between the executive (Cabinet) and the Head of State from judicial scrutiny or public exposure.","To prevent the Election Commission from intervening."],
        "correctAnswerIndex": 2,
        "explanation": "This clause ensures"
    },
    {
        "id": "ch21-l2-q4",
        "question": "Analyze the principle of",
        "options": ["Since the motion was passed by the Lok Sabha, the Rajya Sabha minister is unaffected and remains in office.","The Rajya Sabha minister must face a separate No-Confidence vote in the Rajya Sabha.","The principle of collective responsibility dictates that the ENTIRE Council of Ministers sinks together. The Rajya Sabha minister must resign immediately along with the rest of the Cabinet.","Only the Prime Minister resigns; the Rajya Sabha minister takes over as acting PM."],
        "correctAnswerIndex": 2,
        "explanation": "Article 75(3) states the Council is collectively responsible to the Lok Sabha. It does NOT matter which House the individual minister sits in. If the Lok Sabha says"
    },
    {
        "id": "ch21-l2-q5",
        "question": "Contrast",
        "options": ["To the Prime Minister directly.","To the Speaker of the Lok Sabha.","To the President, meaning the President can theoretically dismiss an individual minister (on the advice of the PM) even if the entire Cabinet enjoys the confidence of the Lok Sabha.","To the electorate of their constituency."],
        "correctAnswerIndex": 2,
        "explanation": "Article 75(2) says"
    },
    {
        "id": "ch21-l2-q6",
        "question": "Examine the concept of the",
        "options": ["India strictly follows the British convention; ministers must countersign and take legal blame for Presidential orders.","The Indian Constitution completely lacks a system of legal responsibility for a minister. An order of the President for a public act does NOT require a minister","In India, legal responsibility lies solely with the Chief Justice.","Ministers are legally responsible only for financial legislation."],
        "correctAnswerIndex": 1,
        "explanation": "This is a major difference between the UK and India. We did not adopt the legal fiction that the Head of State can"
    },
    {
        "id": "ch21-l2-q7",
        "question": "Differentiate between the",
        "options": ["The Council of Ministers meets weekly to take decisions; the Cabinet only meets during emergencies.","The Constitution vests executive power in the Cabinet, making the Council of Ministers relatively powerless.","The Cabinet is a smaller, supreme decision-making body that meets frequently to direct policy, whereas the full Council of Ministers rarely meets as a cohesive body to transact government business.","The Council of Ministers consists only of bureaucrats, while the Cabinet consists of politicians."],
        "correctAnswerIndex": 2,
        "explanation": "The Council of Ministers is a constitutional term encompassing every level of minister (Cabinet, MoS, Deputy). It"
    },
    {
        "id": "ch21-l2-q8",
        "question": "Consider the role of a",
        "options": ["They are co-equals and have a permanent voting seat in all Cabinet meetings.","They are merely administrative assistants and have no political power.","They are not members of the core Cabinet and cannot attend its meetings unless they hold independent charge of a ministry or are specifically invited when their department","They automatically become Cabinet Ministers after two years."],
        "correctAnswerIndex": 2,
        "explanation": "An MoS is the second tier. If they are attached to a Cabinet Minister (e.g., MoS Home Affairs assisting Amit Shah), they do not sit in the Cabinet meeting. Even if they have"
    },
    {
        "id": "ch21-l2-q9",
        "question": "Assertion (A): A member of the Rajya Sabha appointed as the Finance Minister can present the Union Budget in the Lok Sabha.\\nReason (R): Because Article 88 gives every minister the right to speak in and participate in the proceedings of either House of Parliament, irrespective of their membership.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true and R perfectly explains A. Even though Money Bills/Budgets are the domain of the Lok Sabha, the Constitution allows a minister from the Upper House (like Manmohan Singh when he was Finance Minister) to walk into the Lower House, give the budget speech, and debate it. He just cannot *vote* on it when the division is called in the Lok Sabha."
    },
    {
        "id": "ch21-l2-q10",
        "question": "What was the fundamental constitutional necessity behind the 91st Amendment Act (2003) capping the number of ministers at 15% of the Lok Sabha?",
        "options": ["To reduce the financial burden of paying ministerial salaries.","To prevent the Prime Minister from turning into a dictator.","To curb the rampant political practice of creating","cabinets merely to offer ministerial bait to wavering MPs to prevent defections or secure coalition support.","To ensure equal representation for all states in the Cabinet."],
        "correctAnswerIndex": 2,
        "explanation": "Prior to 2003, in the era of fractured coalitions, a PM might make 90 or 100 MPs into ministers just to keep their parties happy and prevent the government from falling. This"
    },
    {
        "id": "ch21-l2-q11",
        "question": "Which of the following scenarios best illustrates the principle of",
        "options": ["The Home Minister resigning due to ill health.","The Finance Minister being transferred to the Defense Ministry by the PM.","A powerful Cabinet Minister resigning because they fundamentally disagree with the Cabinet","The President returning a bill for reconsideration."],
        "correctAnswerIndex": 2,
        "explanation": "Collective responsibility requires absolute public unanimity. Once the Cabinet room doors open, every minister must speak with one voice. If a minister finds a policy so repugnant that they cannot stand in Parliament and defend it as if it were their own (even if they argued against it internally), their only honorable constitutional exit is resignation."
    },
    {
        "id": "ch21-l2-q12",
        "question": "Consider the appointment of a person who is NOT a Member of Parliament as a Minister (Article 75(5)). What is the status of this individual if they fail to get elected to either House within six months?",
        "options": ["They can be re-appointed for another consecutive six months by a special Presidential order.","They simply lose their voting rights but can continue as a Minister.","They automatically cease to be a Minister at the expiration of the six-month period, and the Supreme Court has ruled they cannot be immediately re-appointed without first getting elected.","They must refund all salaries drawn during the six months."],
        "correctAnswerIndex": 2,
        "explanation": "The six-month grace period is strict. If you don"
    },
    {
        "id": "ch21-l2-q13",
        "question": "The",
        "options": ["Directing the foreign policies and foreign affairs of the State.","Exercising control over higher appointments like constitutional authorities and senior secretariat administrators.","Adjudicating legal disputes between two state governments.","Preparing and finalizing the legislative agenda of the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "The Cabinet is the supreme political executive. It decides foreign policy, makes key appointments, and drafts laws. However, adjudicating legal disputes between states is the exclusive original jurisdiction of the Supreme Court (Article 131). The executive cannot perform judicial functions."
    },
    {
        "id": "ch21-l2-q14",
        "question": "Assertion (A): The President of India can theoretically dismiss the entire Council of Ministers even if they enjoy a clear majority in the Lok Sabha.\\nReason (R): Because Article 75(2) explicitly states that the ministers hold office solely during the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is thoroughly false under parliamentary democracy. The President cannot sack a majority government just because he dislikes them. Reason (R) is factually true (it"
    },
    {
        "id": "ch21-l2-q15",
        "question": "How does the",
        "options": ["The Kitchen Cabinet is mandated by the Constitution, the formal Cabinet is not.","The Kitchen Cabinet","The formal Cabinet consists strictly of Cabinet-rank ministers. The Kitchen Cabinet is a totally informal group chosen by the PM, which can include junior ministers, party leaders, or even close friends and family members who have no official government position.","There is no difference; they are synonymous terms."],
        "correctAnswerIndex": 2,
        "explanation": "The Kitchen Cabinet is a phenomenon of extra-constitutional power centralization. A Prime Minister might rely more for major decisions on an unelected political advisor, a trusted bureaucrat, or strictly two close ministers, rather than bringing the sensitive issue to the full 20-member formal Cabinet."
    },
    {
        "id": "ch21-l2-q16",
        "question": "What is the primary role of the",
        "options": ["They preside over Cabinet meetings in the absence of the PM.","They hold independent charge of crucial ministries like Finance and Defense.","They are attached to Cabinet Ministers or Ministers of State to assist them in their administrative, political, and parliamentary duties, but hold no independent charge.","They are exclusively responsible for liaising with State Governments."],
        "correctAnswerIndex": 2,
        "explanation": "Deputy Ministers are the lowest rung. They are essentially trainees or assistants to the senior ministers. They do not get their own independent departments to run. They help answer questions in Parliament or handle minor administrative files within a larger ministry."
    },
    {
        "id": "ch21-l2-q17",
        "question": "Regarding",
        "options": ["They were the highest-ranking civil servants in the country.","They were the members of the final tier of the council of ministers, appointed to assist senior ministers specifically in discharging their parliamentary duties.","They were the legal advisors to the President.","They were responsible for translating parliamentary debates."],
        "correctAnswerIndex": 1,
        "explanation": "Parliamentary Secretaries used to be considered the fourth tier of the political executive (below Deputy Ministers). They were essentially MPs appointed by the PM to shadow and assist senior ministers in Parliament. The practice has faded at the Centre, partly due to the 15% cap and"
    },
    {
        "id": "ch21-l2-q18",
        "question": "Consider the phrase",
        "options": ["Yes, a formal recorded quorum is legally required for any advice.","No, the advice doesn","Yes, and the President must also be present at the meeting.","No, during a disaster, the President can act without advice."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not dictate the *manner* in which advice is formulated. While major policies are debated in the Cabinet, the"
    },
    {
        "id": "ch21-l2-q19",
        "question": "If a minister is accused of corruption, how does the doctrine of",
        "options": ["The entire Cabinet must resign to take moral responsibility for his corruption.","The Parliament must dissolve itself.","Collective responsibility applies to executive policies, not individual criminal acts. The PM will enforce","by advising the President to dismiss the corrupt minister, insulating the rest of the Cabinet.","The Supreme Court automatically assumes control of the Ministry."],
        "correctAnswerIndex": 2,
        "explanation": "Collective responsibility means they agree on policy. It does NOT mean 19 honest ministers must resign because the 20th took a bribe. The PM uses Individual Responsibility (Article 75(2) - Pleasure of President) to surgically amputate the corrupt minister, saving the collective body."
    },
    {
        "id": "ch21-l2-q20",
        "question": "What does the phrase",
        "options": ["The President personally dictates every government file.","Every single government document must have the President","It is a constitutional formality. While decisions are made by ministers/bureaucrats, official government orders and notifications are legally issued starting with",", providing them constitutional validity.","It means the President assumes all legal liability for mistakes."],
        "correctAnswerIndex": 2,
        "explanation": "This is the essence of a republican head of state. A section officer in the Home Ministry might draft an order, the Joint Secretary might approve it, and the Minister might authorize it. But the actual gazette notification will say"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch21-l3-q1",
        "question": "Analyze the constitutional doctrine of",
        "options": ["The Minister heading the relevant economic department must resign individually.","The government is unaffected because it was a private member","The passage of this bill demonstrates that the government has lost control of its own majority in the House. Under the strict convention of collective responsibility, the entire Council of Ministers is morally obligated to resign.","The Prime Minister must expel the private member from the party."],
        "correctAnswerIndex": 2,
        "explanation": "This is a profound test of parliamentary mechanics. A government must command a majority to survive. If a government cannot prevent its own MPs from passing legislation hostile to its core cabinet policy, it has demonstrably lost the"
    },
    {
        "id": "ch21-l3-q2",
        "question": "Consider the constitutional paradox regarding the",
        "options": ["By directly suing the President in the Supreme Court.","By impeaching the specific Minister who advised the action.","The courts cannot challenge the *advice* (Art 74(2)), but under judicial review, they can absolutely strike down the resulting executive *order* (e.g., a notification issued by a Ministry) if it violates statutory law or Fundamental Rights, holding the government *collectively* accountable for the illegal act.","The accountability is purely political, and courts have absolutely no jurisdiction."],
        "correctAnswerIndex": 2,
        "explanation": "In Britain, a minister signs the order and is legally sued if it"
    },
    {
        "id": "ch21-l3-q3",
        "question": "Examine the 91st Amendment Act (2003) regarding the size of the Council of Ministers. The total number of ministers cannot exceed 15% of the total strength of the Lok Sabha. What specific constitutional remedy is provided if a Prime Minister violates this and insists on an oversized cabinet?",
        "options": ["The President can simply veto the excess appointments.","The Supreme Court automatically disqualifies the excess ministers.","The Constitution itself (Art 75(1A)) mandates the 15% limit. Any appointment beyond this (e.g., the 83rd minister if the limit is 81) is constitutionally void ab initio, and the courts can issue a writ of quo warranto to remove the excess members.","The Comptroller and Auditor General stops paying their salaries."],
        "correctAnswerIndex": 2,
        "explanation": "Before 2003, it was a convention. Now it"
    },
    {
        "id": "ch21-l3-q4",
        "question": "What was the fundamental constitutional rationale, as argued by the Supreme Court in the landmark S.R. Bommai case (1994), for deciding whether a Council of Ministers has lost the majority (confidence) of the House?",
        "options": ["The President must use internal IB reports and discrete counting to determine the majority.","The Election Commission should conduct a quick national opinion poll.","The Supreme Court declared that the determining of majority cannot be done in the corridors of Rashtrapati Bhavan or Raj Bhavan through physical parades or signatures; it MUST be tested exclusively on the floor of the House (the ultimate democratic forum).","The Cabinet Secretary certifies the majority."],
        "correctAnswerIndex": 2,
        "explanation": "This is a cornerstone principle of Indian parliamentary democracy. Presidents (and Governors) used to dismiss governments by counting letters of support in their drawing rooms. S.R. Bommai mandated the"
    },
    {
        "id": "ch21-l3-q5",
        "question": "Consider the constitutional status of",
        "options": ["Yes, they are established under Article 77.","Yes, their powers are defined in the First Schedule.","No, they are extra-constitutional in emergence. They are established by the Prime Minister under the Transaction of Business Rules to manage the massive workload of the Cabinet via specialized functional division.","Yes, they are essentially parliamentary sub-committees."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution only mentions the"
    },
    {
        "id": "ch21-l3-q6",
        "question": "Assertion (A): The President of India must always have a Council of Ministers to advise him, even after the Lok Sabha is dissolved prior to a general election.\\nReason (R): Because Article 74(1) uses mandatory language (",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true and R correctly explains A. This was settled in the U.N.R. Rao vs Indira Gandhi (1971) case. Even when Indira Gandhi dissolved the Lok Sabha in 1970, she didn"
    },
    {
        "id": "ch21-l3-q7",
        "question": "Examine the doctrine of",
        "options": ["Discussing the Cabinet agenda with their party president before the meeting.","Leaking the information to the press anonymously for public debate.","The Minister can reveal the information only","(e.g., communicating a Cabinet policy to their department secretaries strictly to execute the decision).","Discussing the matter with the Supreme Court Chief Justice informally."],
        "correctAnswerIndex": 2,
        "explanation": "The oath is absolute except for operational execution. A minister cannot chat about Cabinet decisions at a dinner party. The only constitutional exception is when the minister *must* communicate that decision to the senior bureaucrats in their ministry so that the policy can actually be implemented by the government machinery."
    },
    {
        "id": "ch21-l3-q8",
        "question": "If the Council of Ministers is collectively responsible to the",
        "options": ["There is absolutely no relationship.","The government must resign if defeated on a major bill in the Rajya Sabha.","While they are not collectively responsible to the Rajya Sabha (meaning the RS cannot vote them out of power), ministers must attend its sessions, answer questions, defend policies, and pilot bills through the Upper House, demonstrating legislative accountability.","Only ministers from the Rajya Sabha are accountable to it."],
        "correctAnswerIndex": 2,
        "explanation": "This is a subtle but crucial distinction. Article 75 says they are responsible (can be fired by) ONLY the Lok Sabha. However, under parliamentary rules, the executive is still accountable to the entire Parliament. The Rajya Sabha can embarrass the government, stall bills, and grill ministers during Question Hour, but it lacks the ultimate weapon: the No-Confidence Motion."
    },
    {
        "id": "ch21-l3-q9",
        "question": "Regarding",
        "options": ["An MoS (Independent Charge) draws a higher salary similar to a Cabinet Minister.","An MoS (Independent Charge) is inherently a member of the core Cabinet.","A regular MoS is physically embedded in a large ministry (like Home or Finance), reporting directly to the Cabinet Minister managing it. An MoS (Independent Charge) runs a smaller, standalone ministry entirely on their own, answering directly to the Prime Minister.","There is no practical difference."],
        "correctAnswerIndex": 2,
        "explanation": "MoS (Independent Charge) is a unique Indian administrative invention. If you are MoS Home Affairs, Amit Shah is your ultimate boss. However, if you are MoS (Independent Charge) for Youth Affairs & Sports, you are the absolute head of that smaller ministry. You do not report to a Cabinet Minister; you report to the PM, and you attend Cabinet meetings whenever sports are discussed."
    },
    {
        "id": "ch21-l3-q10",
        "question": "Consider the constitutional situation where the Prime Minister attempts to advise the President to dismiss an individual minister (using",
        "options": ["The resulting gridlock goes to the Supreme Court.","The Minister stays in office, protected by the President.","The President","pleasure of the President","s binding advice. If the PM insists, the President MUST formally dismiss the minister, or face severe constitutional crisis.","The Parliament must vote on the Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch21-l3-q11",
        "question": "How does the",
        "options": ["By taking decisions that affect only foreign policy, which is exempt from collective responsibility.","By secretly changing the minutes of Cabinet meetings.","Because its members are not formally sworn in as ministers.","By centralizing critical decision-making in an informal, closed group of trusted individuals (sometimes non-ministers), reducing the formal Cabinet meetings to mere rubber-stamping arenas, thus undermining the spirit of shared policy debate guaranteed by collective responsibility."],
        "correctAnswerIndex": 3,
        "explanation": "Collective responsibility assumes the 20 Cabinet ministers debate heavily and agree on a policy. The Kitchen Cabinet model short-circuits this. The PM and 3 advisors decide the policy beforehand. The Cabinet meeting simply nods along. This centralizes extreme power and makes"
    },
    {
        "id": "ch21-l3-q12",
        "question": "In the event a Minister holding a massive portfolio suddenly resigns during a Parliamentary session, what is the immediate constitutional mechanism to ensure the ministry",
        "options": ["The Secretary of the Ministry assumes full executive control.","The President automatically assumes the portfolio.","The portfolio automatically reverts to the charge of the Prime Minister until he chooses to appoint a new minister or officially redistributes the portfolio.","The Parliament temporarily appoints a caretaker minister."],
        "correctAnswerIndex": 2,
        "explanation": "The Prime Minister runs the entire machine. If a spoke breaks (a minister resigns), the PM absorbs that spoke. Until the PM goes via the formal process to advise the President to allocate that specific portfolio to a newly sworn-in or existing minister, the PM holds the concurrent charge of that vacant ministry."
    },
    {
        "id": "ch21-l3-q13",
        "question": "Assertion (A): The advice tendered by the Council of Ministers under Article 74 must be kept absolutely secret and the courts are barred from inquiring into it.\\nReason (R): Because public disclosure of such advice might embarrass the government or the President, disrupting the smooth functioning of the executive branch.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is the rationale behind Article 74(2). The relationship between the President (Head of State) and the Cabinet (Head of Government) must remain intimate and confidential. Forcing its disclosure in court would create political sensationalism, pit the President against the PM publicly, and destroy the neutrality of the Presidency."
    },
    {
        "id": "ch21-l3-q14",
        "question": "Consider a scenario where the Election Commission disqualifies an MP who is also a sitting Cabinet Minister for possessing an",
        "options": ["The Minister retains their ministerial rank but loses voting rights in Parliament.","The Prime Minister must hold a confidence vote within 30 days.","The Minister can continue in office for 6 months while they appeal to the Supreme Court.","The Minister immediately ceases to be a member of Parliament, which means they must technically resign or","to be a minister according to convention, although Article 75(5) theoretically gives an unelected person 6 months, conventions generally demand immediate resignation."],
        "correctAnswerIndex": 3,
        "explanation": "While Article 75(5) says"
    },
    {
        "id": "ch21-l3-q15",
        "question": "Regarding",
        "options": ["The Cabinet Committee on Parliamentary Affairs","The Cabinet Committee on Accommodation","The Cabinet Committee on Political Affairs (often alongside the Cabinet Committee on Security)","The Cabinet Committee on Economic Affairs"],
        "correctAnswerIndex": 2,
        "explanation": "While all are important, the Cabinet Committee on Political Affairs (CCPA) and the Cabinet Committee on Security (CCS) are the titans. Overlapping in membership (PM, Home, Def, Finance), they handle the most explosive, existential issues facing the nation, often making decisions that the full Cabinet merely ratifies without question."
    },
    {
        "id": "ch21-l3-q16",
        "question": "Evaluate the role of the",
        "options": ["It is the political wing of the ruling party managing elections.","It serves as a massive bureaucratic nervous system, functioning under the direct leadership of the Prime Minister, to coordinate inter-ministerial efforts, prepare the agenda for Cabinet meetings, and ensure the execution of Cabinet decisions.","It manages the personal security detail of the Ministers.","It conducts independent audits of the ministers"],
        "correctAnswerIndex": 1,
        "explanation": "The Prime Minister cannot personally track every ministry. The Cabinet Secretariat (headed by the Cabinet Secretary, the seniormost IAS officer) is the machine doing the work. It takes the rough policy ideas, coordinates across ministries, schedules the Cabinet meeting, takes the minutes, and issues the official orders to make sure the decision happens."
    },
    {
        "id": "ch21-l3-q17",
        "question": "If a new Prime Minister wishes to reorganize the entirely existing departmental structure of the Government (e.g., merging the Ministry of Water Resources with the Ministry of Drinking Water into a new",
        "options": ["They must pass a constitutional amendment.","They use the President","Rules for the more convenient transaction of business","They must pass an ordinary bill through both Houses of Parliament.","They must secure approval from the Election Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Ministries are not hard-coded into the Constitution. Article 77 gives the President (acting on PM"
    },
    {
        "id": "ch21-l3-q18",
        "question": "Assertion (A): The Governor in a state has",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is false. The President DOES have situational discretion (e.g., appointing a PM when no party has a majority, or dismissing a PM who loses confidence but refuses to resign). Reason R is true (Article 74 binds him generally), but it doesn"
    },
    {
        "id": "ch21-l3-q19",
        "question": "How does the",
        "options": ["Secrecy only applies to financial budgets, which is universally accepted.","The oath forces total secrecy on cabinet deliberations to ensure open internal debate, but this often conflicts with the public","The oath only prevents ministers from talking to foreign powers.","The oath is largely ignored in modern practice."],
        "correctAnswerIndex": 1,
        "explanation": "This is a major friction point. The Right to Information Act pushes for total transparency. But the Constitution demands Cabinet secrecy so ministers can argue freely without fear of press leaks. The RTI Act itself contains exemptions (Section 8) specifically protecting Cabinet papers (until the decision is finalized) to manage this tension."
    },
    {
        "id": "ch21-l3-q20",
        "question": "Summarize the constitutional journey of the",
        "options": ["Pre-1976: Legally Binding. Post-1976: Suggestive.","Pre-1976: Suggestive. Post-1976 (42nd Amendment): Absolutely Binding. Post-1978 (44th Amendment): Binding, but the President can return it once for reconsideration; if returned again, it is absolutely binding.","Pre-1976: Bound by Supreme Court. Post-1976: Bound by Parliament.","It has always been an optional mechanism since 1950."],
        "correctAnswerIndex": 1,
        "explanation": "Before 1976, it was a"
    }
];

export const CHAPTER_21_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
