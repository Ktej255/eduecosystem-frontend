import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch13-l1-q1",
        "question": "Which Articles of the Indian Constitution deal with the parliamentary system at the Centre?",
        "options": ["Articles 74 and 75","Articles 163 and 164","Articles 52 and 53","Articles 148 and 149"],
        "correctAnswerIndex": 0,
        "explanation": "Articles 74 and 75 deal with the parliamentary system at the Centre, while Articles 163 and 164 deal with it in the states."
    },
    {
        "id": "ch13-l1-q2",
        "question": "A parliamentary system is based on the principle of:",
        "options": ["Strict separation of powers between the legislature and executive.","Cooperation and co-ordination between the legislative and executive organs.","Supremacy of the judiciary over the executive.","Direct election of the head of state by the people."],
        "correctAnswerIndex": 1,
        "explanation": "The parliamentary system is based on the principle of cooperation and co-ordination between the legislative and executive organs, unlike the presidential system which is based on the separation of powers."
    },
    {
        "id": "ch13-l1-q3",
        "question": "What is another common name for the parliamentary system of government?",
        "options": ["Presidential system","Non-responsible government","Cabinet government","Fixed executive system"],
        "correctAnswerIndex": 2,
        "explanation": "The parliamentary system is also known as cabinet government or responsible government or Westminster model of government."
    },
    {
        "id": "ch13-l1-q4",
        "question": "In the Indian parliamentary system, who is the",
        "options": ["The Prime Minister","The Chief Justice of India","The President","The Speaker of Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "In India, the President is the nominal executive (de jure executive or titular executive) while the Prime Minister is the real executive (de facto executive)."
    },
    {
        "id": "ch13-l1-q5",
        "question": "In the context of the parliamentary system, the term",
        "options": ["The President","The Prime Minister and the Council of Ministers","The Parliament as a whole","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Prime Minister (along with the Council of Ministers) is the real executive (de facto executive), exercising actual power."
    },
    {
        "id": "ch13-l1-q6",
        "question": "Article 75 of the Indian Constitution states that the Council of Ministers is collectively responsible to:",
        "options": ["The President","The Prime Minister","The Parliament in general","The Lok Sabha (House of the People) in particular"],
        "correctAnswerIndex": 3,
        "explanation": "Article 75 states that the council of ministers is collectively responsible to the Parliament in general and to the Lok Sabha in particular."
    },
    {
        "id": "ch13-l1-q7",
        "question": "What happens in a parliamentary system if the Lok Sabha passes a",
        "options": ["Only the Prime Minister must resign.","The entire Council of Ministers must resign.","The President must dissolve the Lok Sabha immediately but the ministers remain.","A national referendum is held."],
        "correctAnswerIndex": 1,
        "explanation": "Collective responsibility means they swim and sink together. If the Lok Sabha passes a vote of no-confidence, the entire council of ministers must resign."
    },
    {
        "id": "ch13-l1-q8",
        "question": "Which of the following is a key feature of the Indian Parliamentary system regarding the membership of ministers?",
        "options": ["Ministers must not be members of Parliament.","A person cannot be a minister even for a day if they are not an MP.","The ministers are members of both the legislature and the executive.","Ministers are chosen exclusively from the civil services."],
        "correctAnswerIndex": 2,
        "explanation": "A key feature is"
    },
    {
        "id": "ch13-l1-q9",
        "question": "In a parliamentary system, who plays the leadership role over the Council of Ministers, the Parliament, and the ruling party?",
        "options": ["The President","The Speaker","The Prime Minister","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "The Prime Minister plays the leadership role in this system of government. He is the leader of the council of ministers, leader of the Parliament, and leader of the party in power."
    },
    {
        "id": "ch13-l1-q10",
        "question": "The lower house of the Indian Parliament (Lok Sabha) can be dissolved by the President on the advice of:",
        "options": ["The Chief Justice of India","The Prime Minister","The Speaker of the Lok Sabha","The Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The lower house of the Parliament (Lok Sabha) can be dissolved by the President on recommendation of the Prime Minister, even before the expiry of its term."
    },
    {
        "id": "ch13-l1-q11",
        "question": "Which of the following describes the principle of",
        "options": ["Members of Parliament cannot speak to the press.","The opposition is not allowed to know the budget details.","Ministers operate on the principle of secrecy of procedure and cannot divulge information about cabinet proceedings, policies, and decisions.","The Constitution itself is a secret document."],
        "correctAnswerIndex": 2,
        "explanation": "Ministers operate on the principle of secrecy of procedure and cannot divulge information about cabinet proceedings. They take an oath of secrecy administered by the President."
    },
    {
        "id": "ch13-l1-q12",
        "question": "While India adopted the British parliamentary system, there is a fundamental difference between the head of the state in India and Britain. What is it?",
        "options": ["India has a monarch; Britain has an elected President.","India has an elected head (Republic); Britain has a hereditary head (Monarchy).","In India, the head of state is the Prime Minister.","There is no difference; both are hereditary monarchs."],
        "correctAnswerIndex": 1,
        "explanation": "India has a republican system in place of the British monarchical system. The Head of the State in India (President) is elected, while in Britain, the Head of the State (King/Queen) enjoys a hereditary position."
    },
    {
        "id": "ch13-l1-q13",
        "question": "Another major difference between the Indian and British parliamentary systems is the concept of",
        "options": ["The Indian Parliament is fully sovereign like the British Parliament.","The British Parliament is sovereign, but the Indian Parliament is NOT supreme/sovereign; its powers are limited by a written Constitution, federalism, judicial review, and fundamental rights.","Neither Parliament is sovereign; they are both subordinate to the UN.","The Indian Parliament only makes laws for states, not the Union."],
        "correctAnswerIndex": 1,
        "explanation": "The British system is based on the doctrine of the sovereignty of Parliament, while the Parliament is not supreme in India due to a written Constitution, federal system, judicial review, and fundamental rights."
    },
    {
        "id": "ch13-l1-q14",
        "question": "In Britain, there is a concept of",
        "options": ["Yes, every order of the President must be countersigned by a minister.","No, India has no system of legal responsibility of a minister; the President","Yes, but only for financial bills.","Yes, the Prime Minister countersigns all acts of the Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "In Britain, the minister who countersigns an order is legally responsible for it. In India, unlike Britain, there is no system of legal responsibility of a minister. It is not required that an order of the President for a public act should be countersigned by a minister."
    },
    {
        "id": "ch13-l1-q15",
        "question": "In Britain, it is a convention that the Prime Minister MUST be a member of the Lower House (House of Commons). What is the rule in India?",
        "options": ["The PM in India must also invariably belong to the Lok Sabha.","The PM in India must belong to the Rajya Sabha.","The PM in India can be a member of either House of Parliament (Lok Sabha or Rajya Sabha).","The PM in India cannot be a member of either House."],
        "correctAnswerIndex": 2,
        "explanation": "In India, the Prime Minister may be a member of any of the two Houses of Parliament (e.g., Indira Gandhi, Manmohan Singh from Rajya Sabha). In Britain, the PM should definitely be a member of the Lower House."
    },
    {
        "id": "ch13-l1-q16",
        "question": "Can a person who is NOT a Member of Parliament (MP) be appointed as a minister in India?",
        "options": ["No, it is strictly forbidden.","Yes, they can be a minister indefinitely.","Yes, but they can remain a minister for a maximum period of six months without becoming an MP.","Yes, but only if they are nominated by the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "In India, a person who is not a member of Parliament can be appointed as minister for a maximum period of six months. In Britain, members of Parliament alone are appointed as ministers."
    },
    {
        "id": "ch13-l1-q17",
        "question": "Which of the following systems is characterized by the",
        "options": ["Parliamentary System","Presidential System","Cabinet System","Westminster System"],
        "correctAnswerIndex": 1,
        "explanation": "The presidential system of government (like in the USA) is based on the doctrine of separation of powers between the two organs—the executive and the legislature."
    },
    {
        "id": "ch13-l1-q18",
        "question": "A significant demerit of the Parliamentary system, often highlighted by critics, is:",
        "options": ["It prevents harmony between the legislature and executive.","It leads to a highly stable government that cannot be removed.","It can lead to unstable governments and a sudden change in policies when the ruling party loses its majority.","It establishes an irreversible autocracy of the President."],
        "correctAnswerIndex": 2,
        "explanation": "Demerits of the parliamentary system include: Unstable Government (mercy of majority votes), No Continuity of Policies (due to changing governments), and Government by Amateurs."
    },
    {
        "id": "ch13-l1-q19",
        "question": "In contrast to the parliamentary system, the Presidential system (like the USA) offers what major advantage?",
        "options": ["More responsibility to the legislature.","Greater harmony between the executive and legislative branches.","A highly stable government for the entire fixed term.","The ability of the legislature to easily remove the President on political grounds."],
        "correctAnswerIndex": 2,
        "explanation": "The presidential system offers a"
    },
    {
        "id": "ch13-l1-q20",
        "question": "The concept of",
        "options": ["India","USA","Britain","France"],
        "correctAnswerIndex": 2,
        "explanation": "Britain has the system of"
    },
    {
        "id": "ch13-l1-q21",
        "question": "Which of the following was a primary reason given by the Constituent Assembly for adopting the Parliamentary system over the Presidential system?",
        "options": ["Familiarity with the system due to British rule and the operation of the 1919 and 1935 Acts.","The desire to have a single dictatorial executive.","The need for total separation of powers to prevent tyranny.","Pressure from the international community."],
        "correctAnswerIndex": 0,
        "explanation": "Reasons for adopting the parliamentary system included: 1) Familiarity with the system during British rule. 2) Preference to more responsibility over stability. 3) Need to avoid legislative-executive conflicts. 4) Nature of Indian society (heterogeneous)."
    },
    {
        "id": "ch13-l1-q22",
        "question": "Dr. B.R. Ambedkar noted that a democratic executive must satisfy two conditions:",
        "options": ["It favored more stability over responsibility.","It favored more responsibility over stability.","It completely ignored both.","It achieved perfect equality between the two."],
        "correctAnswerIndex": 1,
        "explanation": "Dr. B.R. Ambedkar pointed out that the draft constitution, in recommending the parliamentary system, preferred"
    },
    {
        "id": "ch13-l1-q23",
        "question": "The parliamentary system is sometimes criticized as",
        "options": ["Because ministers are primarily politicians who may lack specialized, technical knowledge of the ministries they head, unlike the expert secretaries in a presidential system.","Because members of parliament are usually unpaid volunteers.","Because the President randomly selects citizens to be ministers.","Because there is no civil service to assist them."],
        "correctAnswerIndex": 0,
        "explanation": "It is called a government by amateurs because the ministers are not experts in their fields (they are politicians). The PM is restricted to choosing ministers from MPs, preventing the drafting of outside experts as is done in the US Presidential system."
    },
    {
        "id": "ch13-l1-q24",
        "question": "If a single political party secures an absolute majority in the Lok Sabha, what does the President ordinarily do?",
        "options": ["Declares an Emergency to prevent monopoly.","Invites the leader of that majority party to form the government (become the Prime Minister).","Appoints the Chief Justice to head the government.","Dissolves the Lok Sabha immediately."],
        "correctAnswerIndex": 1,
        "explanation": "The political party which secures majority seats in the Lok Sabha forms the government. The President invites the leader of the majority party to form the government and appoints him as the Prime Minister."
    },
    {
        "id": "ch13-l1-q25",
        "question": "What does the phrase",
        "options": ["Every minister must write a personal report to Parliament daily.","The Council of Ministers works as a team; if the government loses a major vote in the Lok Sabha, the whole cabinet must resign, not just one minister.","Ministers are responsible only for their specific individual departments, but not the overall government policy.","Parliament can legally force ministers to pay fines collectively."],
        "correctAnswerIndex": 1,
        "explanation": "Collective responsibility means the ministers are jointly responsible to the Lok Sabha for all their acts of omission and commission. They swim and sink together. A no-confidence motion defeats the whole government."
    },
    {
        "id": "ch13-l1-q26",
        "question": "In the context of the parliamentary system, what is the role of ministers regarding the defense of government policies in Parliament?",
        "options": ["They can freely criticize government policies they disagree with.","Once a cabinet decision is taken, all ministers must stand by it and defend it, both within and outside the Parliament.","They are only expected to defend policies originating from their own ministry.","They must remain completely silent during parliamentary debates."],
        "correctAnswerIndex": 1,
        "explanation": "As part of collective responsibility, it is the fundamental duty of every minister to stand by cabinet decisions and support them both within and outside the Parliament, even if they personally disagree."
    },
    {
        "id": "ch13-l1-q27",
        "question": "Which of the following is a recognized merit of the parliamentary system?",
        "options": ["It guarantees fixed continuity of policies even if governments change.","It ensures harmony between the legislature and executive, preventing deadlocks.","It allows for the widespread use of independent, non-political experts in the cabinet.","Strict separation of powers ensures zero overlap."],
        "correctAnswerIndex": 1,
        "explanation": "A major merit is"
    },
    {
        "id": "ch13-l1-q28",
        "question": "A presidential system is generally considered to be:",
        "options": ["Responsible but unstable.","Non-responsible (to the legislature) but highly stable.","Neither responsible nor stable.","Both highly responsible and highly stable."],
        "correctAnswerIndex": 1,
        "explanation": "The presidential system is categorized as a"
    },
    {
        "id": "ch13-l1-q29",
        "question": "Does the Indian Constitution specify both the parliamentary system at the centre AND in the states?",
        "options": ["No, states have a presidential system.","Yes, Articles 74/75 for the Centre and Articles 163/164 for the states.","No, states are ruled directly by the President","States are free to choose their own system."],
        "correctAnswerIndex": 1,
        "explanation": "Yes, the Constitution of India provides for a parliamentary form of government both at the Centre (Arts 74, 75) and in the states (Arts 163, 164)."
    },
    {
        "id": "ch13-l1-q30",
        "question": "Ivor Jennings called the parliamentary system the",
        "options": ["It is held in a small room called a cabinet.","The cabinet is the nucleus of power and the real directing engine of government in this system.","Only cabinet makers can become ministers.","It requires cabinets to be elected directly by the people."],
        "correctAnswerIndex": 1,
        "explanation": "Ivor Jennings called it the"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch13-l2-q1",
        "question": "Consider the constitutional paradox regarding",
        "options": ["It establishes a system where the President and the Prime Minister share executive power equally as a diarchy.","It creates a constitutional fiction where the President is the de jure (nominal) head who wields formal power, while the Prime Minister heading the Council of Ministers is the de facto (real) executive wielding substantive power.","It establishes that the President can override the Council of Ministers whenever he deems fit.","It signifies that India follows a Presidential system but calls it Parliamentary."],
        "correctAnswerIndex": 1,
        "explanation": "This is the essence of the Westminster model. The Constitution formally vests all power in the President (Art 53, creating a de jure head), but immediately limits that power by binding the President entirely to the advice of the Council of Ministers headed by the PM (Art 74, creating a de facto real executive)."
    },
    {
        "id": "ch13-l2-q2",
        "question": "Assertion (A): In a Parliamentary System, the executive is essentially an emanation derived directly from the legislature.\\nReason (R): A defining characteristic of the system is the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. In India, the executive (Council of Ministers) is literally drawn from the legislature (Parliament). If you are not an MP, you can only be a minister for 6 months before you must secure membership. This"
    },
    {
        "id": "ch13-l2-q3",
        "question": "The principle of",
        "options": ["The Prime Minister disagreeing with a minister in private.","A cabinet minister publicly criticizing a major policy decision taken conclusively by the Cabinet, refusing to defend it in the Lok Sabha.","The President asking the Council of Ministers to reconsider a piece of advice once.","The Rajya Sabha passing a vote of no-confidence."],
        "correctAnswerIndex": 1,
        "explanation": "Collective Responsibility (swimming and sinking together) means absolute unified front in public and Parliament. If a minister violently disagrees with a Cabinet decision, constitutional convention dictates they must resign (e.g., Dr. Ambedkar resigning over the Hindu Code Bill). Refusing to defend it while remaining a minister breaks this core principle."
    },
    {
        "id": "ch13-l2-q4",
        "question": "While drafting the Constitution, K.M. Munshi argued forcefully for the Parliamentary system over the Presidential system. He stated,",
        "options": ["That Indians inherently prefer kings and queens over elected presidents.","That the gradual introduction of responsible government under British Acts (1919, 1935) had made Indian political leaders intimately familiar with parliamentary procedures, unlike the alien American presidential system.","That the US Constitution was too poorly written to emulate.","That the UN demanded India adopt a British-style democracy."],
        "correctAnswerIndex": 1,
        "explanation": "A major reason for choosing the Parliamentary system was historical familiarity. Through the Minto-Morley reforms, Montague-Chelmsford reforms, and the Govt. of India Act 1935, generations of Indian leaders had fought for, and eventually practiced, iterations of responsible parliamentary government."
    },
    {
        "id": "ch13-l2-q5",
        "question": "The Presidential System is often lauded for providing",
        "options": ["Because parliamentary term lengths are shorter.","Because the executive in a parliamentary system survives only as long as it commands the daily confidence (majority support) of the lower house, meaning a government can fall at any moment via a no-confidence vote, defection, or coalition collapse.","Because the President randomly dismisses Prime Ministers every year.","Because the judiciary frequently annuls elections."],
        "correctAnswerIndex": 1,
        "explanation": "In a presidential system (USA), the President has a fixed term and isn"
    },
    {
        "id": "ch13-l2-q6",
        "question": "Consider the criticism of the Parliamentary System as",
        "options": ["It forces experts to take political exams.","Because a Prime Minister is strictly limited to selecting ministers largely from the pool of elected MPs (who are primarily politicians, not subject-matter experts), whereas a US President can appoint outside experts (scientists, CEOs) as Cabinet Secretaries without them needing a legislative seat.","It means MPs are barely paid.","It allows the President to appoint his unqualified friends."],
        "correctAnswerIndex": 1,
        "explanation": "Because an Indian minister MUST be an MP (or become one rapidly), the PM"
    },
    {
        "id": "ch13-l2-q7",
        "question": "Compare the Doctrine of Separation of Powers in the US Presidential system with its application in the Indian Parliamentary system. Which statement is accurate?",
        "options": ["Both systems enforce a rigid, watertight separation between Executive, Legislative, and Judicial branches.","The US enforces strict separation, while India completely merges all three branches into the Parliament.","The US enforces strict separation; India rejects strict separation between the Executive and Legislature (as they overlap heavily), but maintains significant separation of the Judiciary from the other two.","India enforces strict separation; the US merges the Executive and Legislature."],
        "correctAnswerIndex": 2,
        "explanation": "The Parliamentary system is based on"
    },
    {
        "id": "ch13-l2-q8",
        "question": "If the Prime Minister of a coalition government suddenly resigns citing ideological differences with allies, what is the immediate constitutional fate of the remaining Council of Ministers?",
        "options": ["They remain in power and elect a new Prime Minister from among themselves.","They continue to run the government until the President calls for fresh elections.","The entire Council of Ministers automatically collapses instantly because the Prime Minister is the keystone of the cabinet arch.","The President takes over all ministerial portfolios directly."],
        "correctAnswerIndex": 2,
        "explanation": "The PM is the"
    },
    {
        "id": "ch13-l2-q9",
        "question": "Assertion (A): The British Parliament is fully sovereign, but the Indian Parliament is decidedly sovereign but limited.\\nReason (R): Unlike Britain which lacks a written constitution, the Indian Parliament operates under a written Constitution, a federal structure, and is subject to Judicial Review.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is a critical departure from the British Westminster model. Britain has"
    },
    {
        "id": "ch13-l2-q10",
        "question": "Which of the following scenarios is an exclusive",
        "options": ["The ability of the President to veto all legislation.","The prevention of harmonious action between organs to prevent tyranny.","Its","to changing public opinion, where a widely unpopular government can be legally ousted immediately via a no-confidence vote rather than waiting years for the next fixed election cycle.","The guarantee of continuity in long-term foreign policy."],
        "correctAnswerIndex": 2,
        "explanation": "A major merit of the parliamentary system is that it"
    },
    {
        "id": "ch13-l2-q11",
        "question": "Consider the principle of",
        "options": ["The Supreme Court automatically sentences them to prison.","The Minister can be constitutionally dismissed from the Council of Ministers by the President on the advice of the Prime Minister.","The whistle-blowers act protects them.","It is a minor infraction with no political consequence."],
        "correctAnswerIndex": 1,
        "explanation": "Ministers operate on the principle of secrecy regarding cabinet proceedings. A violation of the oath of secrecy is a grave breach of constitutional convention and collective responsibility, leading almost certainly to the PM demanding the minister"
    },
    {
        "id": "ch13-l2-q12",
        "question": "In the context of the Constitutional Assembly Debates, why did the framers feel that a Presidential System (with its rigid separation of powers) might be dangerous for a newly independent India?",
        "options": ["They feared the President would ally with the British.","They worried it would require too many elections.","They feared that the strict separation could lead to frequent legislative-executive deadlocks and conflicts, paralyzing a nascent democracy that urgently needed rapid, coordinated action to develop.","They believed Indians were incapable of voting for a single person."],
        "correctAnswerIndex": 2,
        "explanation": "The framers explicitly wanted to avoid the conflicts between the executive and legislature that often paralyze the American system. India needed a strong, cohesive government capable of passing rapid socio-economic reforms, which the"
    },
    {
        "id": "ch13-l2-q13",
        "question": "Regarding",
        "options": ["They must immediately resign their Lok Sabha seat.","They retain their Lok Sabha seat, draw salary as a Minister, and possess the right to speak and vote in BOTH the Lok Sabha and the Rajya Sabha.","They retain their Lok Sabha seat, can speak in both houses, but can ONLY vote in the Lok Sabha.","They become a member of the Rajya Sabha automatically."],
        "correctAnswerIndex": 2,
        "explanation": "A minister has the right to attend and speak in the proceedings of either house of Parliament (or joint sittings). However, they can only VOTE in the house of which they are actually an elected/nominated member."
    },
    {
        "id": "ch13-l2-q14",
        "question": "Which feature of the British Parliamentary system did India explicitly REJECT in favor of a Republic?",
        "options": ["Collective Responsibility.","Bicameralism.","The absolute supremacy or sovereignty of the legislative body.","The presence of a nominal and a real executive."],
        "correctAnswerIndex": 2,
        "explanation": "While India rejected the British Monarchy for a Republic (Elected Head), it also fundamentally rejected"
    },
    {
        "id": "ch13-l2-q15",
        "question": "According to Ivor Jennings, the parliamentary system is better described as a",
        "options": ["That the Prime Minister has officially absorbed the powers of the President.","That power has concentrated heavily in the hands of the Prime Minister, dwarfing the influence of other cabinet ministers, making the PM a pseudo-presidential figure.","That the cabinet no longer meets.","That Parliament is dissolved."],
        "correctAnswerIndex": 1,
        "explanation": "Due to the massive concentration of power, media focus, election campaigns surrounding a single personality, and control over patronage, political scientists note the"
    },
    {
        "id": "ch13-l2-q16",
        "question": "If a government introduces a Money Bill in the Lok Sabha, and the Lok Sabha surprisingly defeats it due to cross-voting by ruling party members, what is the immediate constitutional consequence based on the principles of the parliamentary system?",
        "options": ["The bill is sent to the President for a veto.","The Finance Minister alone must resign.","It is treated as a severe expression of loss of confidence, and the Prime Minister along with the entire Council of Ministers must resign.","The bill is sent to the Rajya Sabha for a second chance."],
        "correctAnswerIndex": 2,
        "explanation": "A Money Bill is a primary policy instrument of the government. Its defeat in the Lok Sabha signifies that the executive has lost the"
    },
    {
        "id": "ch13-l2-q17",
        "question": "Assertion (A): The Parliamentary system in India prevents the establishment of an absolute dictatorship by the executive.\\nReason (R): Under this system, the executive is responsible to the legislature, and the ministers are subject to constant scrutiny through question hour, adjournment motions, and no-confidence motions.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. A key merit of the parliamentary system is the prevention of despotism. Because the executive does not have a guaranteed fixed term and must face the daily, rigorous scrutiny of the opposition in Parliament, it cannot easily mutate into an unchecked dictatorship."
    },
    {
        "id": "ch13-l2-q18",
        "question": "Why did the Constituent Assembly cite the",
        "options": ["Because an agrarian society requires slow decision-making.","India is highly heterogeneous and complex; the parliamentary system, through its inclusive nature and cabinet formation, allows for the representation of various diverse sections, regions, and interests in the government.","Because they wanted a pure Hindu state.","They believed illiterate populations could only understand a parliamentary system."],
        "correctAnswerIndex": 1,
        "explanation": "India is one of the most heterogeneous societies. A presidential system theoretically places all executive power in one individual from one background. The parliamentary/cabinet system inherently accommodates diversity, allowing a PM to build a cabinet representing various states, religions, and castes, promoting national integration."
    },
    {
        "id": "ch13-l2-q19",
        "question": "In comparing the British and Indian parliamentary systems, the concept of",
        "options": ["It is a secret intelligence committee.","It is a parallel cabinet formed by the opposition party, mimicking the actual cabinet, to strictly scrutinize relevant ministers and prepare an alternative government in waiting.","It is a group of retired Prime Ministers.","It oversees the monarchy."],
        "correctAnswerIndex": 1,
        "explanation": "The Shadow Cabinet is a unique British institution. The opposition creates a"
    },
    {
        "id": "ch13-l2-q20",
        "question": "A defining characteristic of the Presidential System is the",
        "options": ["The Lok Sabha and the Rajya Sabha share executive power.","The President possesses de jure (nominal) authority, while the Prime Minister wields de facto (real) authority.","The Prime Minister and the Chief Justice rule jointly.","The Union Government and State Governments share the exact same powers."],
        "correctAnswerIndex": 1,
        "explanation": "This dualism is the hallmark of the parliamentary system. The President is the ceremonial head of State (in whose name all actions are taken), while the Prime Minister is the real head of government who exercises all the substantive executive power."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch13-l3-q1",
        "question": "Consider the constitutional paradox regarding the dissolution of the lower house. In India, the President can dissolve the Lok Sabha on the advice of the Prime Minister. However, if a Prime Minister who has lost the confidence of the Lok Sabha advises dissolution, what is the constitutional position of the President?",
        "options": ["The President is absolutely bound by Article 74(1) to accept the advice and must dissolve the Lok Sabha immediately.","The President must consult the Supreme Court under Article 143 before acting on the advice.","The President is not bound by the advice of a Council of Ministers that has lost the confidence of the Lok Sabha, and can exercise situational discretion (e.g., exploring alternative government formation).","The President must dissolve the Lok Sabha, but only after declaring a National Emergency."],
        "correctAnswerIndex": 2,
        "explanation": "This is a critical nuance of the Parliamentary system. While Article 74(1) generally binds the President to the aid and advice of the CoM, constitutional conventions dictate that if a PM has lost majority support (lost a no-confidence vote), their advice is *not* binding. The President enjoys situational discretion to either dissolve the house or invite another leader to form a government."
    },
    {
        "id": "ch13-l3-q2",
        "question": "How does the principle of",
        "options": ["It is suspended for coalition governments.","Ministers from different parties are only responsible for their own portfolios and not for the overall government policy.","The principle remains absolute. Regardless of ideological differences, once a Cabinet decision is reached, all ministers from all coalition partners must stand by it publicly or resign; they sink and swim together.","It only applies to the ministers beloning to the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The doctrine of collective responsibility (Art 75) does not differentiate between single-party majorities and coalitions. It is an absolute constitutional requirement. If a coalition partner minister disagrees fundamentally with a cabinet decision, they cannot publicly dissent while remaining in the cabinet; they must resign."
    },
    {
        "id": "ch13-l3-q3",
        "question": "Assertion (A): The Indian Constitution provides for a Parliamentary form of government because the framers preferred",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true, and R correctly explains A. Dr. Ambedkar stated that the Indian system chose"
    },
    {
        "id": "ch13-l3-q4",
        "question": "Which of the following constitutional provisions fundamentally ensures the",
        "options": ["Article 53: Executive power vested in the President.","Article 74: Council of Ministers to aid and advise the President.","Article 75(5): A Minister who for any period of six consecutive months is not a member of either House of Parliament shall at the expiration of that period cease to be a Minister.","Article 81: Composition of the House of the People."],
        "correctAnswerIndex": 2,
        "explanation": "Article 75(5) enforces the"
    },
    {
        "id": "ch13-l3-q5",
        "question": "Consider the difference between",
        "options": ["Both laws would be struck down by their respective Supreme Courts.","The British law is valid because no British court can strike down an Act of Parliament (Parliament is sovereign). The Indian law is void because the Supreme Court can strike it down under Article 13 for violating Fundamental Rights (Constitution is supreme).","The British law is void, but the Indian law requires a referendum to be valid.","Both laws are valid due to the principle of legislative privilege."],
        "correctAnswerIndex": 1,
        "explanation": "This highlights the core difference. The UK lacks a master written constitution; Parliament is supreme (it can"
    },
    {
        "id": "ch13-l3-q6",
        "question": "In the context of",
        "options": ["The Prime Minister has the sole constitutional authority to declare an Emergency without consulting the Cabinet.","The President appoints ministers solely on the advice of the Prime Minister, and the PM can advise the President to dismiss any minister at any time (individual responsibility).","The Prime Minister is directly elected by the entire population, bypassing the Parliament.","The Prime Minister can veto acts of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The PM"
    },
    {
        "id": "ch13-l3-q7",
        "question": "The",
        "options": ["The Indian Constitution explicitly forbids the formation of a Shadow Cabinet in Article 105.","India","The Supreme Court ruled it unconstitutional in the S.R. Bommai case.","Indian politicians are generally not interested in preparing for ministerial roles."],
        "correctAnswerIndex": 1,
        "explanation": "The Shadow Cabinet thrives in a strong two-party system where the opposition is a unified block ready to assume power. India"
    },
    {
        "id": "ch13-l3-q8",
        "question": "Assertion (A): Unlike Britain, where there is a system of legal responsibility of a minister and every order of the King requires a minister",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. In the UK, the King"
    },
    {
        "id": "ch13-l3-q9",
        "question": "Consider the debate over adopting a Presidential vs. Parliamentary system in India. In 1975, the Swaran Singh Committee was formed partly to study whether the Parliamentary system should be abandoned. What was the committee",
        "options": ["It strongly recommended switching to a French-style semi-presidential system.","It recommended replacing the Prime Minister with an elected President while keeping the Lok Sabha.","It concluded that the parliamentary system has been doing well and there is no need to replace it with the presidential system.","It suggested abolishing the states to make the parliamentary system work better."],
        "correctAnswerIndex": 2,
        "explanation": "During the Emergency, there was significant debate (fueled by Indira Gandhi"
    },
    {
        "id": "ch13-l3-q10",
        "question": "If a",
        "options": ["The President can refuse if he feels the Lok Sabha still has 2 years left in its term.","The President can refuse if he believes an alternative leader can cobble together a majority and form a stable government from the existing House.","The President cannot ever refuse the advice because Article 74(1) makes the PM","The President can refuse only if the Rajya Sabha explicitly requests him to."],
        "correctAnswerIndex": 1,
        "explanation": "This is a key area of Presidential"
    },
    {
        "id": "ch13-l3-q11",
        "question": "The Indian Parliamentary system is characterized by the",
        "options": ["The Prime Minister appointing the Chief Justice of India.","The Council of Ministers possessing significant delegated legislative powers and exclusively initiating nearly all major public bills (legislation) in Parliament.","The President presiding over the daily sessions of the Lok Sabha.","The cabinet functioning as a supreme court for civil disputes."],
        "correctAnswerIndex": 1,
        "explanation": "In India, the executive completely dominates the legislative agenda. Important legislation is invariably introduced by Ministers (Government Bills). Because they command a majority, the executive effectively controls law-making, fusing the execution of laws with their creation."
    },
    {
        "id": "ch13-l3-q12",
        "question": "In the hypothetical scenario where the President of India explicitly rejects a piece of advice tendered by the Council of Ministers *after* it has been reconsidered (as per the proviso to Article 74(1)), what constitutional crisis is triggered?",
        "options": ["The President is automatically impeached.","The Supreme Court steps in to arbitrate the dispute.","The President","The issue is referred to a national referendum."],
        "correctAnswerIndex": 2,
        "explanation": "The 44th Amendment allowed the President to return advice for reconsideration *once*. However, if the Council sends the same advice back, the President"
    },
    {
        "id": "ch13-l3-q13",
        "question": "Assertion (A): The Cabinet (a smaller body within the Council of Ministers) has no explicit original mention in the core articles defining the executive in the Constitution of India.\\nReason (R):",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Articles 74 and 75 speak only of a"
    },
    {
        "id": "ch13-l3-q14",
        "question": "Which feature differentiates the",
        "options": ["The government is collectively responsible to BOTH houses equally.","The government is formed based on the party/coalition commanding a majority exclusively in the Lok Sabha, while the Rajya Sabha has no role in the making or unmaking of the government.","The Prime Minister must always be drawn from the Lok Sabha.","Only the Rajya Sabha can pass a vote of no-confidence."],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha cannot pass a vote of no-confidence. Under Article 75, collective responsibility is solely to the Lok Sabha. A party can have zero seats in the Rajya Sabha and still form the government if it controls the Lok Sabha. The Rajya Sabha reviews legislation but does not determine who rules."
    },
    {
        "id": "ch13-l3-q15",
        "question": "In analyzing",
        "options": ["Because the Indian PM is commander-in-chief of the armed forces.","Because a US President faces a hostile, independent Congress that must approve laws; an Indian PM with an absolute majority simultaneously controls the executive machinery AND functions as the undisputed master of the legislature, guaranteeing all government laws are passed.","Because the Indian PM can ignore the Supreme Court entirely.","Because the Indian PM cannot be voted out in elections."],
        "correctAnswerIndex": 1,
        "explanation": "This is a crucial criticism (Cabinet Dictatorship). A US President (separated powers) often struggles to push legislation through Congress. An Indian PM with a brute majority (fusion of powers) simply commands their party MPs to vote"
    },
    {
        "id": "ch13-l3-q16",
        "question": "Consider the principle of",
        "options": ["It gives the President the independent power to dismiss corrupt ministers.","It is a dead letter with no practical application.","It functionally means",". The PM can ask a minister to resign, or advise the President to dismiss them, enforcing party discipline and PM supremacy without bringing down the whole government.","It applies only to Ministers of State, not Cabinet Ministers."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch13-l3-q17",
        "question": "If a constitutional amendment were proposed to mandate that",
        "options": ["It would mildly reform the electoral process.","It would require only a simple majority to pass.","It would constitute an immediate transition from a Parliamentary system to a Presidential system, likely violating the","(as the Parliamentary system is a basic feature).","It would violate the federal nature of the state."],
        "correctAnswerIndex": 2,
        "explanation": "This scenario describes dismantling the core pillars of the Westminster system:"
    },
    {
        "id": "ch13-l3-q18",
        "question": "A distinguishing feature of the British Prime Minister is that he/she MUST be a member of the House of Commons. In India, numerous PMs have governed from the Rajya Sabha. What structural nuance of the Indian Constitution makes this democratic discrepancy possible?",
        "options": ["The Indian Constitution does not mention Parliament.","Article 75 merely stipulates that a minister must be a member of",", making no distinction between the directly elected lower house and indirectly elected upper house for holding the highest executive office.","The President can nominate the PM directly.","The Rajya Sabha is considered the more powerful house in India."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the rigid UK convention, the Indian Constitution"
    },
    {
        "id": "ch13-l3-q19",
        "question": "When evaluating the",
        "options": ["The President serving a 10-year term.","The presence of a large, permanent, politically neutral Civil Service (bureaucracy) that continues to administer the state regardless of which political executive holds power.","The Supreme Court directing all long-term policies.","Treaties signed by previous governments being unalterable."],
        "correctAnswerIndex": 1,
        "explanation": "While the *political* executive (ministers) changes rapidly causing policy shifts, the *permanent* executive (civil servants/IAS) remains in place. This bureaucracy provides the institutional memory and administrative continuity required to keep the state functioning smoothly during political turbulence."
    },
    {
        "id": "ch13-l3-q20",
        "question": "In the landmark Supreme Court judgments regarding the nature of the Parliamentary system, the Court has consistently held that the President (and Governors) are analogous to the British Crown. Which of the following accurately describes their specific constitutional limitation based on these rulings?",
        "options": ["They can exercise executive power personally and directly if Ministers refuse to act.","They represent the nation but do not rule the nation; they cannot act independently of their Council of Ministers, and personal exercise of executive power is generally prohibited.","They have absolute veto power over all legislation, identical to the US President.","They can dissolve the Council of Ministers arbitrarily when the Parliament is not in session."],
        "correctAnswerIndex": 1,
        "explanation": "The SC has repeatedly clarified (e.g., in Ram Jawaya Kapur case, Shamsher Singh case) that the President is the formal, constitutional head. The President simply acts"
    },
    {
        "id": "ch13-l3-q21",
        "question": "The concept of",
        "options": ["Interference by the Judiciary.","The lack of a single-party majority means the executive does not naturally control the legislature. The executive must constantly bargain with distinct legislative factions for survival, leading to legislative paralysis and compromised policies.","The President refusing to sign bills.","The Rajya Sabha becoming too powerful."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch13-l3-q22",
        "question": "Compare the role of the",
        "options": ["In India and the UK, the Head of State is entirely separate from the Head of Government. In the USA, the President holds both offices simultaneously.","In all three countries, the Head of State and Head of Government are the same person.","In India, the President is both Head of State and Head of Government.","In the UK, the Prime Minister is both Head of State and Head of Government."],
        "correctAnswerIndex": 0,
        "explanation": "This highlights the structural difference. Parliamentary systems (UK, India) split the executive roles to isolate the ceremonial unity of the State (Monarch/President) from the partisan politics of Government (PM). The Presidential system (USA) fuses both immense roles into one individual (the US President)."
    },
    {
        "id": "ch13-l3-q23",
        "question": "Assertion (A): A Presidential system is technically",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true."
    },
    {
        "id": "ch13-l3-q24",
        "question": "Consider the constitutional restriction preventing a non-MP from being a minister for more than 6 months (Article 75(5)). During this 6-month period, if a critical vote takes place in the Lok Sabha, what is the right of this non-MP minister?",
        "options": ["They can participate in the debate and vote.","They can neither participate in the debate nor vote.","They can participate in the debate and answer questions as a minister, but they possess absolutely NO right to vote.","They can vote only if the Prime Minister authorizes them."],
        "correctAnswerIndex": 2,
        "explanation": "A minister who is not a member of either house still has the rights of a minister (to attend Parliament, speak, defend policies) under Article 88. However, the right to VOTE is strictly tied to democratic membership of the house. Since they aren"
    },
    {
        "id": "ch13-l3-q25",
        "question": "To ensure the Parliament exercises true",
        "options": ["The Attorney General of India.","The Comptroller and Auditor General of India (CAG).","The Chief Justice of India.","The Election Commission of India."],
        "correctAnswerIndex": 1,
        "explanation": "The CAG audits all receipts and expenditures of the government and submits reports to the President/Governor, who lay them before the Parliament/State Legislature. Without the CAG"
    },
    {
        "id": "ch13-l3-q26",
        "question": "According to K.M. Munshi in the Constituent Assembly,",
        "options": ["The President","The principle of Double Membership (Ministers being MPs).","The Supreme Court","The Election Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Double Membership is the literal mechanism of fusion. Because the cabinet consists entirely of people who are simultaneously the leading figures of the legislature, the cabinet acts as the transmission belt (the"
    },
    {
        "id": "ch13-l3-q27",
        "question": "If a minister in the Indian government publicly outlines a new, controversial policy without the prior approval of the Cabinet, and the Prime Minister disagrees with it, what is the convention derived from the British system to resolve this?",
        "options": ["The Prime Minister must publicly debate the minister.","The President decides the outcome.","Under the doctrine of individual and collective responsibility, the Prime Minister will compel the minister to either entirely retract the statement and align with the Cabinet, or demand their immediate resignation.","The Supreme Court issues a gag order."],
        "correctAnswerIndex": 2,
        "explanation": "Cabinet solidarity is paramount. A minister cannot act as a"
    },
    {
        "id": "ch13-l3-q28",
        "question": "Why does the",
        "options": ["It arises to manage the President","It arises because the full Cabinet is too large (20-30 ministers) for rapid, secretive decision-making; criticized because it is an extra-constitutional body, often including unelected friends/advisors of the PM, subverting the formal Cabinet","It arises to deal solely with agricultural issues; criticized for ignoring industry.","It is a mandatory Constitutional body criticized for over-regulating."],
        "correctAnswerIndex": 1,
        "explanation": "The Prime Minister often relies on a very small, informal circle of trusted colleagues and friends (the"
    },
    {
        "id": "ch13-l3-q29",
        "question": "Assertion (A): The President of India cannot declare war without the specific advice of the Council of Ministers.\\nReason (R): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is true; due to the Parliamentary system, the President exercises all powers (including declaring war) ONLY on the advice of the CoM. Reason (R) is false because while Art 53(2) vests command in the President, it explicitly adds that its exercise"
    },
    {
        "id": "ch13-l3-q30",
        "question": "In the 1970s, the Indian National Congress (under Indira Gandhi) briefly debated adopting the Presidential system. The core argument for this shift, historically popular during times of national distress, was primarily aimed at curing which highly specific institutional",
        "options": ["The lack of representation for minorities.","The susceptibility of the Executive to be paralyzed or ousted by shifting loyalties, defections, or coalition pressures in the Legislature, paralyzing swift, decisive national action.","The overbearing power of the Supreme Court.","The inability to conduct foreign policy."],
        "correctAnswerIndex": 1,
        "explanation": "The primary historical allure of the Presidential system is"
    }
];

export const CHAPTER_13_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
