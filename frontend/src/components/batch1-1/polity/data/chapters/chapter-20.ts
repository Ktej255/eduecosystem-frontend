import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch20-l1-q1",
        "question": "In the scheme of the parliamentary system of government provided by the Constitution, the President is the nominal executive authority. Who is the real executive authority?",
        "options": ["The Chief Justice of India","The Speaker of the Lok Sabha","The Prime Minister","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "In the scheme of parliamentary system of government provided by the constitution, the President is the nominal executive authority (de jure executive) and Prime Minister is the real executive authority (de facto executive)."
    },
    {
        "id": "ch20-l1-q2",
        "question": "While the President is the head of the State, the Prime Minister is the head of the:",
        "options": ["Judiciary","Legislature","Government","Republic"],
        "correctAnswerIndex": 2,
        "explanation": "In other words, president is the head of the State while Prime Minister is the head of the government."
    },
    {
        "id": "ch20-l1-q3",
        "question": "Which Article of the Constitution states that",
        "options": ["Article 72","Article 74","Article 78","Article 111"],
        "correctAnswerIndex": 1,
        "explanation": "Article 74: There shall be a council of ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice."
    },
    {
        "id": "ch20-l1-q4",
        "question": "Which Article of the Constitution formally states that the Prime Minister shall be appointed by the President?",
        "options": ["Article 73","Article 74","Article 75","Article 78"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not contain any specific procedure for the selection and appointment of the Prime Minister. Article 75 says only that the Prime Minister shall be appointed by the president."
    },
    {
        "id": "ch20-l1-q5",
        "question": "Does the Constitution mandate that the President can appoint ANYONE as the Prime Minister?",
        "options": ["Yes, the President has completely free will in the appointment.","No, in accordance with the conventions of the parliamentary system, the President has to appoint the leader of the majority party in the Lok Sabha as the Prime Minister.","Yes, but only from the Rajya Sabha.","No, the Supreme Court must ratify the choice."],
        "correctAnswerIndex": 1,
        "explanation": "However, this does not imply that the president is free to appoint any one as the Prime Minister. In accordance with the conventions of the parliamentary system of government, the President has to appoint the leader of the majority party in the Lok Sabha as the Prime Minister."
    },
    {
        "id": "ch20-l1-q6",
        "question": "Is it constitutionally required for a person to prove his majority in the Lok Sabha BEFORE he is appointed as the Prime Minister?",
        "options": ["Yes, it is an absolute constitutional mandate.","No, the Supreme Court held that the President can first appoint him the Prime Minister and then ask him to prove his majority in the Lok Sabha within a reasonable period.","Yes, but only in the case of a hung parliament.","Yes, a formal floor test is the first step of appointment."],
        "correctAnswerIndex": 1,
        "explanation": "In 1980, the Delhi High Court held that the Constitution does not require that a person must prove his majority in the Lok Sabha before he is appointed as the Prime Minister. The President may first appoint him... and then ask him to prove his majority..."
    },
    {
        "id": "ch20-l1-q7",
        "question": "Can a person who is NOT a member of either House of Parliament be appointed as the Prime Minister of India?",
        "options": ["No, membership of Parliament is a strict pre-condition.","Yes, but only if they promise to be elected to the Lok Sabha.","Yes, the Supreme Court held that a person who is not a member of either House of Parliament can be appointed as Prime Minister for six months, within which, he should become a member of either House.","Yes, and they can remain PM for their full five-year term without being elected."],
        "correctAnswerIndex": 2,
        "explanation": "In 1997, the Supreme Court held that a person who is not a member of either House of Parliament can be appointed as Prime Minister for six months, within which, he should become a member of either House of Parliament; otherwise, he ceases to be the Prime Minister."
    },
    {
        "id": "ch20-l1-q8",
        "question": "Constitutionally, the Prime Minister may be a member of any of the two Houses of Parliament. Which of the following Prime Ministers was a member of the Rajya Sabha when appointed?",
        "options": ["Jawaharlal Nehru","Lal Bahadur Shastri","Indira Gandhi (in 1966)","Narendra Modi"],
        "correctAnswerIndex": 2,
        "explanation": "Three Prime Ministers, Indira Gandhi (1966), Deve Gowda (1996) and Manmohan Singh (2004), were members of the Rajya Sabha."
    },
    {
        "id": "ch20-l1-q9",
        "question": "Who administers the oath of office and secrecy to the Prime Minister?",
        "options": ["The Chief Justice of India","The outgoing Prime Minister","The President","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "Before the Prime Minister enters upon his office, the president administers to him the oaths of office and secrecy."
    },
    {
        "id": "ch20-l1-q10",
        "question": "According to the Constitution, what is the",
        "options": ["Exactly five years.","The term of the Prime Minister is not fixed and he holds office during the pleasure of the president.","Six years.","Four years."],
        "correctAnswerIndex": 1,
        "explanation": "The term of the Prime Minister is not fixed and he holds office during the pleasure of the president."
    },
    {
        "id": "ch20-l1-q11",
        "question": "Does the phrase",
        "options": ["Yes, the President has absolute discretion to dismiss the PM whenever he chooses.","No, so long as the Prime Minister enjoys the majority support in the Lok Sabha, he cannot be dismissed by the President.","Yes, but only on the advice of the Chief Justice.","Yes, but he must give three months"],
        "correctAnswerIndex": 1,
        "explanation": "However, this does not mean that the president can dismiss the Prime Minister at any time. So long as the Prime Minister enjoys the majority support in the Lok Sabha, he cannot be dismissed by the President."
    },
    {
        "id": "ch20-l1-q12",
        "question": "Who determines the salary and allowances of the Prime Minister?",
        "options": ["The President","The Parliament from time to time","The Finance Commission","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The salary and allowances of the Prime Minister are determined by the Parliament from time to time. He gets the salary and allowances that are payable to a member of Parliament."
    },
    {
        "id": "ch20-l1-q13",
        "question": "Regarding his relationship with the Council of Ministers, who advises the President on the appointment of other ministers?",
        "options": ["The Chief Justice of India","The Speaker of the Lok Sabha","The Prime Minister","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "He recommends persons who can be appointed as ministers by the president. The President can appoint only those persons as ministers who are recommended by the Prime Minister."
    },
    {
        "id": "ch20-l1-q14",
        "question": "Who allocates and reshuffles various portfolios among the ministers?",
        "options": ["The President","The Prime Minister","The Cabinet Secretary","The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "He [Prime Minister] allocates and reshuffles various portfolios among the ministers."
    },
    {
        "id": "ch20-l1-q15",
        "question": "If there is a difference of opinion between a Minister and the Prime Minister, what drastic action can the Prime Minister take regarding that minister?",
        "options": ["He can ask the minister to resign or advise the President to dismiss him.","He can suspend the minister for 30 days.","He must refer the matter to the Supreme Court.","He can do nothing; the minister is protected by Parliament."],
        "correctAnswerIndex": 0,
        "explanation": "He can ask a minister to resign or advise the President to dismiss him in case of difference of opinion."
    },
    {
        "id": "ch20-l1-q16",
        "question": "Who presides over the meetings of the Council of Ministers (the Cabinet) and influences its decisions?",
        "options": ["The President","The Prime Minister","The Senior-most Cabinet Minister","The Vice-President"],
        "correctAnswerIndex": 1,
        "explanation": "He [Prime Minister] presides over the meeting of council of ministers and influences its decisions."
    },
    {
        "id": "ch20-l1-q17",
        "question": "Historically and constitutionally, what happens to the entire Council of Ministers if the Prime Minister resigns or dies?",
        "options": ["The senior-most minister automatically becomes the new Prime Minister.","The Council of Ministers continues to function under the President","The resignation or death of an incumbent Prime Minister automatically dissolves the council of ministers and thereby generates a vacuum.","The Parliament elects a new Prime Minister within 24 hours."],
        "correctAnswerIndex": 2,
        "explanation": "Since the Prime Minister stands at the head of the council of ministers, the other ministers cannot function when the Prime Minister resigns or dies. In other words, the resignation or death of an incumbent Prime Minister automatically dissolves the council of ministers."
    },
    {
        "id": "ch20-l1-q18",
        "question": "Who serves as the principal channel of communication between the President and the Council of Ministers?",
        "options": ["The Cabinet Secretary","The Speaker of the Lok Sabha","The Prime Minister","The Home Minister"],
        "correctAnswerIndex": 2,
        "explanation": "He [Prime Minister] is the principal channel of communication between the President and the council of ministers (Article 78)."
    },
    {
        "id": "ch20-l1-q19",
        "question": "Under Article 78, is it the duty of the Prime Minister to communicate to the President all decisions of the Council of Ministers relating to the administration of the affairs of the Union?",
        "options": ["Yes, it is his constitutional duty.","No, it is optional and depends on the Prime Minister","Yes, but only regarding foreign policy.","No, the President must legally request this information first."],
        "correctAnswerIndex": 0,
        "explanation": "Article 78: It shall be the duty of the Prime Minister to communicate to the President all decisions of the council of ministers relating to the administration of the affairs of the Union and proposals for legislation..."
    },
    {
        "id": "ch20-l1-q20",
        "question": "The Prime Minister advises the President with regard to the appointment of important officials. Which of the following is NOT an official mentioned in the text whose appointment the PM advises the President on?",
        "options": ["Attorney General of India","Comptroller and Auditor General of India","Chairman and members of the UPSC","Chief Ministers of States"],
        "correctAnswerIndex": 3,
        "explanation": "He advises the president with regard to the appointment of important officials like attorney general of India, Comptroller and Auditor General of India, chairman and members of the UPSC, election commissioners, chairman and members of the finance commission and so on. (Chief Ministers are appointed by the Governor of the state, not the President/PM)."
    },
    {
        "id": "ch20-l1-q21",
        "question": "Regarding his relationship with Parliament, the Prime Minister advises the President on what matter concerning the sessions of Parliament?",
        "options": ["On how to judge the debates.","On the seating arrangement.","He advises the President with regard to summoning and proroguing of the sessions of the Parliament.","On deciding the Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "He advises the President with regard to summoning and proroguing of the sessions of the Parliament."
    },
    {
        "id": "ch20-l1-q22",
        "question": "Can the Prime Minister recommend the dissolution of the Lok Sabha to the President at any time?",
        "options": ["Yes, he can recommend dissolution of the Lok Sabha to President at any time.","No, he must get permission from the Election Commission first.","Yes, but only in the fifth year of its term.","No, only the Supreme Court can order dissolution."],
        "correctAnswerIndex": 0,
        "explanation": "He can recommend dissolution of the Lok Sabha to President at any time."
    },
    {
        "id": "ch20-l1-q23",
        "question": "Who announces government policies on the floor of the House in Parliament?",
        "options": ["The President","The Speaker of the Lok Sabha","The Prime Minister","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "He [Prime Minister] announces government policies on the floor of the House."
    },
    {
        "id": "ch20-l1-q24",
        "question": "The Prime Minister is the ex-officio Chairman of several important national bodies. Which of the following bodies is NOT chaired by the Prime Minister?",
        "options": ["NITI Aayog","National Integration Council","Inter-State Council","Zonal Councils"],
        "correctAnswerIndex": 3,
        "explanation": "He is the chairman of the NITI Aayog (which succeded the planning commission), National Integration Council, Inter-State Council, National Water Resources Council and some other bodies. (Zonal Councils are chaired by the Union Home Minister)."
    },
    {
        "id": "ch20-l1-q25",
        "question": "Who plays a significant role in shaping the foreign policy of the country?",
        "options": ["The Home Minister","The Speaker of Lok Sabha","The Prime Minister","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "He plays a significant role in shaping the foreign policy of the country."
    },
    {
        "id": "ch20-l1-q26",
        "question": "During emergencies, what is the role of the Prime Minister regarding disaster management?",
        "options": ["He advises local NGOs.","He is the chief crisis manager at the political level.","He steps down and military takes over.","He is immune from emergency duties."],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief crisis manager at the political level during emergencies."
    },
    {
        "id": "ch20-l1-q27",
        "question": "Lord Morely comprehensively described the Prime Minister (in relation to the Cabinet) using WHICH famous phrase?",
        "options": ["First among equals (primus inter pares) and key stone of the cabinet arch.","The absolute dictator of Parliament.","A mere servant of the Crown.","The moon among the stars."],
        "correctAnswerIndex": 0,
        "explanation": "Lord Morely described him as"
    },
    {
        "id": "ch20-l1-q28",
        "question": "Who among the following constitutional authorities once remarked about the British Prime Minister that",
        "options": ["Laski","H R G Greaves","Lord Morley","Munro"],
        "correctAnswerIndex": 2,
        "explanation": "Lord Morley: He described him as... first among equals... He said:"
    },
    {
        "id": "ch20-l1-q29",
        "question": "Sir William Vernon Harcourt described the Prime Minister as:",
        "options": ["A dictator.","A figurehead.","Inter stellas luna minores (a moon among lesser stars).","A temporary servant."],
        "correctAnswerIndex": 2,
        "explanation": "Sir William Vernon Harcourt: He described him as"
    },
    {
        "id": "ch20-l1-q30",
        "question": "According to Sir Ivor Jennings, the Prime Minister is the:",
        "options": ["Moon among lesser stars.","Keystone of the cabinet arch.","The sun around which planets revolve.","The pivot of the whole system of government."],
        "correctAnswerIndex": 2,
        "explanation": "Sir Ivor Jennings: He described him as"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch20-l2-q1",
        "question": "Examine the dynamic of",
        "options": ["The President must hold a national referendum to confirm the new leader.","The President can ignore the party","The President functionally loses his situational discretion. He is conventionally bound to appoint the leader newly elected by the majority party as the Prime Minister, as they clearly command the confidence of the House.","The President must dissolve the Lok Sabha and call for fresh elections."],
        "correctAnswerIndex": 2,
        "explanation": "Situational discretion (choosing a PM when there"
    },
    {
        "id": "ch20-l2-q2",
        "question": "Consider the constitutional eligibility regarding the House membership of the Prime Minister in India compared to the United Kingdom. What is the fundamental difference?",
        "options": ["In India, the PM must be from the Lok Sabha; in the UK, the PM must be from the House of Lords.","In both countries, the PM can be from either House.","In Britain, the Prime Minister must definitively belong to the Lower House (House of Commons). In India, the Prime Minister may be a member of *either* the Rajya Sabha or the Lok Sabha.","In India, the PM cannot be a member of either house; they must be an outsider."],
        "correctAnswerIndex": 2,
        "explanation": "This is a key divergence from the Westminster model we copied. The UK rigidly enforces that the PM must sit in the directly elected House of Commons. India is much more flexible; a PM can sit in the indirectly elected Rajya Sabha (e.g., Manmohan Singh for a decade), though they are still collectively responsible *only* to the Lok Sabha."
    },
    {
        "id": "ch20-l2-q3",
        "question": "If a person who is not a member of Parliament is appointed as Prime Minister (as allowed for six months), what are their specific rights regarding participation in Parliamentary proceedings during that period?",
        "options": ["They can only sit in the visitor","They can participate in debates but cannot introduce bills.","They have the right to speak in, and otherwise to take part in the proceedings of, either House, but they shall NOT be entitled to vote in either House until they are formally elected as a member.","They enjoy full voting rights in both Houses by virtue of being the PM."],
        "correctAnswerIndex": 2,
        "explanation": "Article 88 applies here. A Minister (including the PM) who is not an MP can enter Parliament, give speeches, defend policies, and answer questions. However, the core democratic act—voting—is strictly reserved for elected/nominated MPs. An unelected PM cannot vote on a bill or a no-confidence motion until they win a seat."
    },
    {
        "id": "ch20-l2-q4",
        "question": "Analyze the principle:",
        "options": ["Because regular ministers are not appointed by the President.","Because the Prime Minister is the","or",". The Council is constituted entirely upon his advice and exists under his leadership; without the head, the body ceases to exist.","Because regular ministers do not swear an oath of secrecy.","Because regular ministers are accountable to the Rajya Sabha, not the Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "This illustrates the PM"
    },
    {
        "id": "ch20-l2-q5",
        "question": "Under Article 78, the Prime Minister holds a",
        "options": ["To resign from the Prime Ministership.","To submit for the consideration of the Council of Ministers any matter on which a decision has been taken by a single minister but which has NOT been considered by the collective Council.","To dissolve the Lok Sabha immediately.","To declare a financial emergency."],
        "correctAnswerIndex": 1,
        "explanation": "This highlights the President"
    },
    {
        "id": "ch20-l2-q6",
        "question": "The Prime Minister advises the President to summon and prorogue Parliament. Can the Prime Minister, utilizing this power, avoid facing a devastating",
        "options": ["Yes, the advice is binding and the President must blindly prorogue the House.","Yes, prorogation is solely the prerogative of the Prime Minister.","No, if a no-confidence motion is pending, or if the PM has clearly lost the majority, the President can use his situational discretion to refuse the advice to prorogue the House and insist the floor test happen.","Yes, but only if the Speaker agrees."],
        "correctAnswerIndex": 2,
        "explanation": "While the PM normally controls the parliamentary calendar,"
    },
    {
        "id": "ch20-l2-q7",
        "question": "Regarding early dissolution of the Lok Sabha: The Prime Minister can advise the President to dissolve the Lok Sabha before its 5-year term ends. Under what circumstances can the President justifiably REFUSE this advice from a sitting Prime Minister?",
        "options": ["The President can NEVER refuse this advice; it is always binding.","The President can refuse only if the PM belongs to a coalition government.","If the Prime Minister advising the dissolution has clearly lost the majority in the Lok Sabha (e.g., after a no-confidence vote). The President is not bound by the advice of a defeated PM and can explore forming an alternative government first.","The President can refuse if the Supreme Court advises against dissolution."],
        "correctAnswerIndex": 2,
        "explanation": "A PM with a solid majority can dissolve the house whenever they want (to call early elections). However, if a PM loses a no-confidence vote, they cannot spitefully say"
    },
    {
        "id": "ch20-l2-q8",
        "question": "What is the constitutional rationale behind the convention that the President appoints the leader of the",
        "options": ["To prevent the President from choosing someone from their own home state.","Because Article 75 explicitly commands it in its text.","Because the Constitution (Article 75(3)) dictates that the Council of Ministers shall be collectively responsible strictly to the Lok Sabha. A PM without a majority cannot pass budgets or laws, rendering the government instantly paralyzed.","To ensure the Rajya Sabha is completely powerless."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch20-l2-q9",
        "question": "Consider the constitutional oath of the Prime Minister. While both the PM and the President swear to the Constitution, what specific phrase is present in the President",
        "options": ["To",".","To",".","To",".","To","."],
        "correctAnswerIndex": 1,
        "explanation": "The Prime Minister swears allegiance, secrecy, and to do right by the people without fear or favor. But ONLY the President (and Governors) take the ultimate oath to actively"
    },
    {
        "id": "ch20-l2-q10",
        "question": "Lord Morley described the PM as",
        "options": ["Because the Cabinet now meets entirely via email.","Because the President transferred all his powers to the PM via the 44th Amendment.","Because the PM","equal","Because Parliament passed a law abolishing the Cabinet."],
        "correctAnswerIndex": 2,
        "explanation": "19th-century"
    },
    {
        "id": "ch20-l2-q11",
        "question": "If a Prime Minister who belongs to the Rajya Sabha introduces a Money Bill in the Lok Sabha through his Finance Minister, can the Prime Minister himself vote on that Money Bill in the Lok Sabha?",
        "options": ["Yes, because Money Bills are the strict prerogative of the Government.","Yes, the Prime Minister can vote in any House on any matter.","No, while he can clearly speak and participate in the proceedings of the Lok Sabha, he can VOTE only in the House of which he is a member (the Rajya Sabha).","No, Prime Ministers from the Rajya Sabha are banned from entering the Lok Sabha during Money Bill debates."],
        "correctAnswerIndex": 2,
        "explanation": "This tests Article 88. A minister can speak in either House to defend government policy. Manmohan Singh (RS MP) gave many speeches in the Lok Sabha. However, the right to vote is strictly tied to membership. He can only cast a physical vote when he returns to his seat in the Rajya Sabha."
    },
    {
        "id": "ch20-l2-q12",
        "question": "Which of the following scenarios would definitively NOT lead to the automatic dissolution of the Council of Ministers?",
        "options": ["The sudden death of the sitting Prime Minister.","The formal resignation of the Prime Minister submitted to the President.","The tragic death of the powerful Home Minister who is second-in-command.","The Prime Minister losing a vote of no-confidence and subsequently submitting his resignation."],
        "correctAnswerIndex": 2,
        "explanation": "The Prime Minister is the keystone. Their departure (death/resignation) shatters the arch (the entire Cabinet falls). However, the death or resignation of ANY other minister—no matter how powerful or crucial—merely creates a single vacancy that the PM can fill. The Cabinet continues uninterrupted."
    },
    {
        "id": "ch20-l2-q13",
        "question": "Consider the constitutional paradox: The Prime Minister is",
        "options": ["Because the Election Commission sends a binding sealed envelope with the winner","Because the Constitution textually mandates the President to appoint the oldest MP.","Because the President is bound by the rigid Parliamentary convention that he MUST appoint the leader of the party (or coalition) that has secured an absolute mathematical majority in the Lok Sabha.","Because the Chief Justice dictates the choice."],
        "correctAnswerIndex": 2,
        "explanation": "The President"
    },
    {
        "id": "ch20-l2-q14",
        "question": "Assertion (A): A person who is not elected to either House of Parliament can become the Prime Minister of India, but they can hold the office for a maximum of 6 months without getting elected.\\nReason (R): Because the Supreme Court has ruled that requiring immediate election would unfairly restrict the President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is true (based on Art 75(5) and the 1997 SC ruling). Reason (R) is false. The real reason is practical flexibility inherent in parliamentary systems (allowing someone to be brought in laterally, perhaps from state politics or academia), provided they submit themselves to the democratic test (get elected to a seat) within a strict six-month window."
    },
    {
        "id": "ch20-l2-q15",
        "question": "What is the primary role of the Prime Minister regarding the",
        "options": ["He essentially suggests portfolios to the President, who has the final say and can override his choices.","He must allocate portfolios based strictly on seniority in the party.","He has absolute authority to allocate and reshuffle various portfolios among the ministers as he pleases, demonstrating his absolute dominance over the composition of the Cabinet.","He must get the portfolio allocations approved by a vote in the Lok Sabha."],
        "correctAnswerIndex": 2,
        "explanation": "While the President formally appoints ministers on the PM"
    },
    {
        "id": "ch20-l2-q16",
        "question": "Which of the following highlights the Prime Minister",
        "options": ["He legally assumes all powers of all state Chief Ministers.","He is the unquestionable pivot at the political level, directing the entire governmental apparatus, coordinating between ministries, and communicating directly with the nation, bypassing typical bureaucratic hierarchies.","He is granted immunity from all criminal laws during the emergency.","He must temporarily hand over power to a military council."],
        "correctAnswerIndex": 1,
        "explanation": "During a crisis (war, pandemic), slow inter-ministerial file pushing stops. The PMO (Prime Minister"
    },
    {
        "id": "ch20-l2-q17",
        "question": "In the context of",
        "options": ["The advice is merely suggestive, and the President can ignore it if he finds it unconstitutional.","The advice is legally binding on the President, transforming the President into a nominal head who must act in accordance with the PM","The advice requires the Supreme Court","The advice applies only to financial matters, leaving legal matters to the President"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment fundamentally locked the President down. Article 74(1) says the President"
    },
    {
        "id": "ch20-l2-q18",
        "question": "If a Prime Minister wishes to dissolve the Lok Sabha and call for early elections while he currently commands a massive, undisputed majority in the House, what is the usual outcome?",
        "options": ["The President invariably refuses, forcing the PM to complete the 5-year term.","The Election Commission must first audit the government","The President accepts the advice. A PM with a clear majority has the democratic prerogative to seek a fresh mandate from the people whenever they choose.","The opposition can veto this in the Rajya Sabha."],
        "correctAnswerIndex": 2,
        "explanation": "A PM with a majority is the master of the House. If they feel it"
    },
    {
        "id": "ch20-l2-q19",
        "question": "Who among the following Prime Ministers was appointed by the President using his",
        "options": ["Lal Bahadur Shastri","Charan Singh","Rajiv Gandhi","V.P. Singh"],
        "correctAnswerIndex": 2,
        "explanation": "When Indira Gandhi was assassinated in 1984, the situation was chaotic. President Zail Singh did not wait for the Congress Parliamentary Party to formally meet and elect a leader over several days. He used his situational discretion to instantly appoint her son, Rajiv Gandhi, as PM, a choice the party subsequently ratified."
    },
    {
        "id": "ch20-l2-q20",
        "question": "Assertion (A): The Prime Minister acts as the ex-officio chairman of the NITI Aayog and the National Integration Council.\\nReason (R): Because these bodies handle issues that deeply intertwine Centre-State relations, economic planning, and national cohesion, requiring the supreme political authority of the Head of Government to enforce coordination.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. The PM isn"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch20-l3-q1",
        "question": "Analyze the constitutional implications of",
        "options": ["He retains absolute powers, exactly as if he had a majority.","He can only sign administrative orders, but all policy decisions require the Supreme Court","By constitutional convention, rather than textual law, a caretaker government should not take major policy decisions or sign significant international treaties that bind the incoming elected government, though they possess the full legal authority to do so.","His term is strictly limited to 14 days."],
        "correctAnswerIndex": 2,
        "explanation": "This is a classic UPSC trap. Article 74 doesn"
    },
    {
        "id": "ch20-l3-q2",
        "question": "Consider the dynamic between the President (Article 53) and the Prime Minister (Article 74) regarding executive power. The Supreme Court in UNR Rao vs Indira Gandhi (1971) held that the Council of Ministers must ALWAYS exist. Why is a",
        "options": ["Because the President lacks the administrative machinery.","Because Article 74 is mandatory (","). Since the President cannot exercise executive power WITHOUT the aid and advice of the CoM, a vacuum of the PM/Cabinet would paralyze the State; hence, even a defeated PM must act until replaced.","Because the Chief Justice is mandated to take over instead.","Because the Parliament would immediately impeach a President trying to rule directly."],
        "correctAnswerIndex": 1,
        "explanation": "Article 74 is non-negotiable."
    },
    {
        "id": "ch20-l3-q3",
        "question": "Examine the Prime Minister",
        "options": ["The Minister is allowed to dissent publicly as long as they vote with the government.","The Minister must be fined by the Privileges Committee.","The convention of collective responsibility demands absolute public unanimity. The Minister must either publicly support the decision, or gracefully resign from the Cabinet. If they do neither, the PM must advise the President to dismiss them.","The Minister can appeal to the President for protection."],
        "correctAnswerIndex": 2,
        "explanation": "This is the essence of Cabinet solidarity ("
    },
    {
        "id": "ch20-l3-q4",
        "question": "The power to",
        "options": ["The President must blindly follow the advice under Article 74(1).","The President can utilize his",". He is NOT bound by the advice of a PM who has lost (or is likely to lose) the majority, and should ideally explore if an alternative viable government can be formed.","The President must consult the Supreme Court before acting.","The President must order the Election Commission to verify the vote counts."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch20-l3-q5",
        "question": "Analyze the",
        "options": ["The power to veto Supreme Court judgments.","The absolute power to dictate the internal allocation and reshuffling of individual portfolios among ministers.","The power to dissolve State Assemblies at will.","The power to amend the Constitution unilaterally."],
        "correctAnswerIndex": 1,
        "explanation": "Article 75 says the PM advises who becomes a minister. It does NOT explicitly say the PM assigns the ministries (Finance, Defense, etc.). However, under the Govt of India (Allocation of Business) Rules, this power is entirely the PM"
    },
    {
        "id": "ch20-l3-q6",
        "question": "Assertion (A): The Prime Minister of India must necessarily belong to the Lok Sabha, similar to the British convention regarding the House of Commons.\\nReason (R): Because Article 75 explicitly mandates that the Council of Ministers shall be collectively responsible to the House of the People (Lok Sabha) alone.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is demonstrably false. Indira Gandhi (1966), Deve Gowda, and Manmohan Singh were Rajya Sabha MPs when appointed PM. Reason R is true; the whole Cabinet (including a RS PM) is responsible *only* to the elected Lok Sabha. This highlights India"
    },
    {
        "id": "ch20-l3-q7",
        "question": "Consider Article 78 regarding the Prime Minister",
        "options": ["The President can immediately dismiss the PM.","The President can sue the PM in the Supreme Court.","The President has no direct coercive remedy. He can only warn, counsel, or theoretically go public, as dismissing a PM who commands a majority in the Lok Sabha would trigger a massive constitutional crisis.","The President can declare a national emergency."],
        "correctAnswerIndex": 2,
        "explanation": "This highlights the"
    },
    {
        "id": "ch20-l3-q8",
        "question": "Examine the role of the",
        "options": ["It is defined in Article 74 as the core advisory group.","It is a completely informal, extra-constitutional body consisting of the PM and 2-4 trusted colleagues (ministers or outsiders) who take the real critical decisions, bypassing the formal, larger Cabinet, signifying the PM","It is a sub-committee of Parliament that audits the PM","It manages the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Kitchen Cabinet is nowhere in the Constitution. Yet, it"
    },
    {
        "id": "ch20-l3-q9",
        "question": "If a sitting Member of the Rajya Sabha is appointed as the Prime Minister, they possess the right to speak in the Lok Sabha. However, regarding their participation in a",
        "options": ["They cannot even be present during the debate.","They can participate in the debate, defend the government vehemently, but they CANNOT physically vote against the motion because they are not a member of the Lok Sabha.","They can vote to save their government by special presidential decree.","They must resign their Rajya Sabha seat immediately upon the motion being introduced."],
        "correctAnswerIndex": 1,
        "explanation": "A No-Confidence Motion is an exclusive tool of the Lok Sabha. Under Article 88, a Minister (even PM) can speak in either House. So a Rajya Sabha PM will give the final, stirring defense speech. But when the Speaker calls for the crucial division (vote), the PM must sit out; they cannot cast a vote to save their own government."
    },
    {
        "id": "ch20-l3-q10",
        "question": "Consider the constitutional paradox of",
        "options": ["The pleasure is absolute and unchallengeable in court.","The","is not individual whimsy, but is fundamentally linked to the",". As long as the PM enjoys majority support, the President","pleasure","The pleasure must be renewed every year by a formal vote.","The pleasure only applies if the PM commits a crime."],
        "correctAnswerIndex": 1,
        "explanation": "The written text says the PM serves at the President"
    },
    {
        "id": "ch20-l3-q11",
        "question": "What is the crucial difference between the",
        "options": ["They are exactly the same thing.","The Cabinet is a smaller, core body of senior ministers that meets regularly to decide policy, whereas the Council of Ministers is the larger body including Ministers of State and Deputy Ministers, who rarely meet as a whole group.","The Cabinet consists only of bureaucrats, while the Council is politicians.","The Cabinet is a state-level body."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution primarily uses"
    },
    {
        "id": "ch20-l3-q12",
        "question": "If the Prime Minister loses a vote of conscience (on a major policy issue, but NOT a formal no-confidence motion) in the Lok Sabha, is he constitutionally mandated to resign immediately?",
        "options": ["Yes, losing any major vote automatically dissolves the government.","No, he can ignore the vote completely.","Conventionally, yes. Losing a vote on a major policy (like a Budget or a central manifesto promise) implies a loss of the House","t titled a",".","He must refer the failed policy to the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Collective responsibility isn"
    },
    {
        "id": "ch20-l3-q13",
        "question": "Which of the following bodies, chaired by the Prime Minister, plays the most significant role in coordinating policies that require the cooperation of both the Central Government and the State Governments?",
        "options": ["The Union Cabinet","The National Development Council (or governing council of NITI Aayog)","The Finance Commission","The Zonal Councils"],
        "correctAnswerIndex": 1,
        "explanation": "While the Finance Commission allocates money, the NITI Aayog"
    },
    {
        "id": "ch20-l3-q14",
        "question": "Assertion (A): The Prime Minister possesses the ultimate authority to determine the size of his Council of Ministers, appointing as many loyalists as he wishes to secure his political position.\\nReason (R): Because Article 75 states the other Ministers shall be appointed solely on the advice of the Prime Minister.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is absolutely false. Before 2003, PMs did this (creating massive jumbo cabinets). However, the 91st Constitutional Amendment Act (2003) capped the total number of ministers (including the PM) at a strict maximum of 15% of the total strength of the Lok Sabha. The PM"
    },
    {
        "id": "ch20-l3-q15",
        "question": "Consider the Prime Minister",
        "options": ["The text says the PM appoints them, but the President actually decides.","The Constitution says the Governor is",". However, under the binding advice of Article 74, it is the Prime Minister (and his Home Minister) who dictate exactly who gets appointed; the President merely signs the warrant.","The Chief Minister of the state actually appoints the Governor.","The Supreme Court appoints the Governor based on the PM"],
        "correctAnswerIndex": 1,
        "explanation": "This highlights the"
    },
    {
        "id": "ch20-l3-q16",
        "question": "If a highly sensitive defense treaty must be signed immediately to avert a war, and the Parliament cannot be convened, how does the Prime Minister execute this?",
        "options": ["He must wait for Parliament to convene.","He can advise the President to issue an Ordinance (Article 123) if law is required, or simply use the executive power of the Union (Article 73) to enter into the treaty, as treaty-making is largely an executive act requiring subsequent, not prior, legislative approval.","He must get the Supreme Court","He needs a national referendum."],
        "correctAnswerIndex": 1,
        "explanation": "In India, the executive (led by the PM) has immense power in foreign affairs. Unlike the US where the Senate must ratify treaties beforehand, the Indian Executive can negotiate and sign treaties independently under Article 73. Parliament only gets involved later if the treaty requires domestic legislation to implement it."
    },
    {
        "id": "ch20-l3-q17",
        "question": "According to Dr. B.R. Ambedkar, if any functionary under our constitution is to be compared with the US President, he is the:",
        "options": ["President of India","Prime Minister of India","Chief Justice of India","Speaker of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "Ambedkar famously noted that despite the title, the Indian President is like the British Crown. The actual center of political gravity, policy formulation, and administrative command in India—much like the American President—is the Prime Minister."
    },
    {
        "id": "ch20-l3-q18",
        "question": "In the context of",
        "options": ["The colleague is protected by Parliament and cannot be moved.","The PM must wait until the next election.","The Prime Minister will advise the President to dismiss the defiant minister. Since the PM","s absolute disciplinary control.","The PM must resign instead."],
        "correctAnswerIndex": 2,
        "explanation": "This is the ultimate stick. A minister serves at the"
    },
    {
        "id": "ch20-l3-q19",
        "question": "Consider the Prime Minister",
        "options": ["Always the Lok Sabha.","Always the Rajya Sabha.","Both Houses simultaneously.","He is the Leader of the House of which he is a member. If he is in the Lok Sabha, he leads it. If he is in the Rajya Sabha (like Manmohan Singh), he leads the RS and appoints another senior minister to act as the Leader of the Lok Sabha."],
        "correctAnswerIndex": 3,
        "explanation": "The"
    },
    {
        "id": "ch20-l3-q20",
        "question": "Which of the following summarizes the",
        "options": ["He is equal in salary but superior in age.","He is technically just another minister within the collective Cabinet, holding one vote. Yet, his power to hire, fire, allocate portfolios, and singularly dissolve the entire government elevates his practical power to near-dictatorial levels within the executive branch.","He is equal to the President but superior to Governors.","He is equal only within his inner Kitchen Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "The phrase"
    }
];

export const CHAPTER_20_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
