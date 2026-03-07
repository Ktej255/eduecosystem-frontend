import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch85-l1-q1",
        "question": "The term",
        "options": ["To divide","To grow together","To fight against","To rule alone"],
        "correctAnswerIndex": 1,
        "explanation": "The term"
    },
    {
        "id": "ch85-l1-q2",
        "question": "Which of the following is NOT a core feature of a coalition government?",
        "options": ["At least two parties must join hands","Partners must have exactly the same ideology","The purpose is to grab or retain political power","It is based on the principle of",""],
        "correctAnswerIndex": 1,
        "explanation": "Coalition partners often have different ideologies; the alliance is based on a common minimum program or pragmatic power-sharing rather than ideological identity."
    },
    {
        "id": "ch85-l1-q3",
        "question": "In a coalition government, the administration is typically guided by a document called:",
        "options": ["The National Charter","Common Minimum Programme","Presidential Directive","Coalition Manifesto"],
        "correctAnswerIndex": 1,
        "explanation": "A Common Minimum Programme (CMP) is a document that outlines the agreed-upon priorities and policies of the various parties in a coalition."
    },
    {
        "id": "ch85-l1-q4",
        "question": "Which of the following describes the",
        "options": ["The religious duties of a politician","Consensus-building and respecting the concerns of all alliance partners","A law passed to prevent parties from leaving a coalition","The rule that only the largest party can lead"],
        "correctAnswerIndex": 1,
        "explanation": "Coalition Dharma refers to the unwritten rules of consensus, compromise, and mutual respect among diverse partners to maintain a stable government."
    },
    {
        "id": "ch85-l1-q5",
        "question": "Who was the Prime Minister of the first-ever coalition government at the Centre in India (1977)?",
        "options": ["Indira Gandhi","Morarji Desai","Charan Singh","V.P. Singh"],
        "correctAnswerIndex": 1,
        "explanation": "The Janata Party government formed in 1977 under Morarji Desai was the first non-Congress coalition government at the Centre."
    },
    {
        "id": "ch85-l1-q6",
        "question": "The era of",
        "options": ["United Front","National Front","NDA","UPA"],
        "correctAnswerIndex": 1,
        "explanation": "The National Front government (1989-1990) led by V.P. Singh marked the beginning of a prolonged era of multi-party coalitions at the Centre."
    },
    {
        "id": "ch85-l1-q7",
        "question": "The",
        "options": ["Congress and CPI","BJP and Left Front","Shiv Sena and Akali Dal","DMK and TDP"],
        "correctAnswerIndex": 1,
        "explanation": "The V.P. Singh government (National Front) was a unique experiment supported by both the BJP and the Left Front from the outside."
    },
    {
        "id": "ch85-l1-q8",
        "question": "Which coalition government was in power at the Centre during the 1996-1998 period?",
        "options": ["National Front","United Front","NDA","UPA"],
        "correctAnswerIndex": 1,
        "explanation": "The United Front (led by H.D. Deve Gowda and later I.K. Gujral) was in power from 1996 to 1998 with outside support from the Congress."
    },
    {
        "id": "ch85-l1-q9",
        "question": "The",
        "options": ["L.K. Advani","A.B. Vajpayee","Narendra Modi","Pramod Mahajan"],
        "correctAnswerIndex": 1,
        "explanation": "The NDA was formed in 1998 under the leadership of Atal Bihari Vajpayee, leading to the first stable non-Congress coalition to complete its term (1999–2004)."
    },
    {
        "id": "ch85-l1-q10",
        "question": "The",
        "options": ["Support the BJP","Form a stable non-NDA government led by the Congress","Abolish the Rajya Sabha","Implement a single-party rule"],
        "correctAnswerIndex": 1,
        "explanation": "The UPA was a Congress-led coalition formed after the 2004 elections to provide a secular alternative to the NDA."
    },
    {
        "id": "ch85-l1-q11",
        "question": "Which of the following is considered a",
        "options": ["Speedy decision-making","Representativeness and consensus-based governance","Complete dominance of the Prime Minister","Low cost of governance"],
        "correctAnswerIndex": 1,
        "explanation": "Coalitions are more representative as they cater to diverse regional and sectional interests, ensuring that policies are more balanced."
    },
    {
        "id": "ch85-l1-q12",
        "question": "A",
        "options": ["Too much national unity","Instability and frequent collapse due to internal contradictions","Extremely high voter turnout","Abolition of regional parties"],
        "correctAnswerIndex": 1,
        "explanation": "Coalitions are often unstable because different partners may withdraw support due to disagreements, leading to"
    },
    {
        "id": "ch85-l1-q13",
        "question": "In a coalition setup, the Prime Minister",
        "options": ["Absolute and unquestioned","Restricted by the demands and quotas of coalition partners","Eliminated entirely","Transferred to the Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The PM must often accommodate leaders of alliance partners in the cabinet, regardless of personal preference, to ensure the government"
    },
    {
        "id": "ch85-l1-q14",
        "question": "The role of a",
        "options": ["The person who Crowns the King","A medium-sized or regional party that holds the balance of power to form a government","The Election Commissioner","The Governor during an emergency"],
        "correctAnswerIndex": 1,
        "explanation": "A kingmaker is a party (like TDP or JDU in various phases) whose support is essential for any national party to reach the majority mark."
    },
    {
        "id": "ch85-l1-q15",
        "question": "What is meant by an",
        "options": ["A coalition formed after the election","A pre-poll alliance with formal structures and a shared agenda","A coalition mandated by the Constitution","A merger of parties into one"],
        "correctAnswerIndex": 1,
        "explanation": "Formal pre-poll alliances like NDA or UPA, which have a shared name and program, are increasingly seen as institutionalized coalitions."
    },
    {
        "id": "ch85-l1-q16",
        "question": "Which Prime Minister led the longest and most stable coalition governments (UPA-I and UPA-II) between 2004 and 2014?",
        "options": ["Atal Bihari Vajpayee","Manmohan Singh","Narendra Modi","I.K. Gujral"],
        "correctAnswerIndex": 1,
        "explanation": "Dr. Manmohan Singh led the UPA coalition for two consecutive full terms from 2004 to 2014."
    },
    {
        "id": "ch85-l1-q17",
        "question": "The 2024 General Election resulted in the return of a coalition government at the Centre led by which alliance?",
        "options": ["I.N.D.I.A.","NDA","United Front","National Front"],
        "correctAnswerIndex": 1,
        "explanation": "After the 2024 elections, while the BJP was the largest party, it formed a government with its NDA partners (like TDP and JDU) as it fell short of a majority on its own."
    },
    {
        "id": "ch85-l1-q18",
        "question": "Which of the following phenomena is a direct outcome of the coalition era in India?",
        "options": ["One-party dominance","Increased importance of regional parties in national decision-making","Reduction in the number of states","Direct election of the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The coalition era empowered regional leaders (like Mamata Banerjee, Chandrababu Naidu, Nitish Kumar) to become key players at the national level."
    },
    {
        "id": "ch85-l1-q19",
        "question": "The Cabinet Committee on Political Affairs (CCPA) in a coalition government is often used to:",
        "options": ["Draft the budget alone","Resolve conflicts and build consensus among coalition partners","Appoint Judges","Supervise the Army"],
        "correctAnswerIndex": 1,
        "explanation": "The CCPA, often called the"
    },
    {
        "id": "ch85-l1-q20",
        "question": "Which of the following is NOT a reason for the rise of coalition politics in India?",
        "options": ["Rise of regional identities","Decline of the Congress","Increase in the number of voters","Assertion of various caste and sectional interests"],
        "correctAnswerIndex": 2,
        "explanation": "While voter numbers increased, the primary reasons were socio-political shifts, regionalism, and the fragmentation of the political landscape."
    },
    {
        "id": "ch85-l1-q21",
        "question": "A",
        "options": ["Only members of minority communities are ministers","The ruling party/coalition does not have a majority on its own but is supported from the outside","The government is appointed by the Supreme Court","The government has only three ministers"],
        "correctAnswerIndex": 1,
        "explanation": "Governments like the National Front (1989) or United Front (1996) were minority governments because the parties *in* the government lacked a majority and depended on"
    },
    {
        "id": "ch85-l1-q22",
        "question": "The principle of",
        "options": ["Strictly followed without exception","Diluted as ministers from different parties may speak in different voices","Automatically abolished","Applied only to the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Internal friction often leads to cabinet members criticizing their own government"
    },
    {
        "id": "ch85-l1-q23",
        "question": "Which of the following describes",
        "options": ["States bargaining with each other","The Centre having to bargain with powerful state-based allies to stay in power","The Centre imposing its will on all states","States refusing to pay taxes"],
        "correctAnswerIndex": 1,
        "explanation": "Political scientist Morris Jones used this term to describe how regional parties in a national coalition use their leverage to get better deals for their home states."
    },
    {
        "id": "ch85-l1-q24",
        "question": "The",
        "options": ["The constitutional power to stop a bill","The threat to withdraw support and collapse the government if its demands are not met","The power to appoint the Governor","The power to lead the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "Even a small party with just a few seats can hold a"
    },
    {
        "id": "ch85-l1-q25",
        "question": "The",
        "options": ["Two small parties joining","The two largest, traditionally rival parties joining to form a stable majority","A coalition of 100 parties","A coalition that lasted only one day"],
        "correctAnswerIndex": 1,
        "explanation": "A Grand Coalition occurs when the primary rivals join hands, often to prevent smaller extremist parties from gaining leverage or during a national crisis."
    },
    {
        "id": "ch85-l1-q26",
        "question": "Since 1989, how many General Elections in India resulted in a single party gaining a full majority on its own (up to 2024)?",
        "options": ["None","Only one (2014)","Two (2014 and 2019)","All of them"],
        "correctAnswerIndex": 2,
        "explanation": "In the long era of coalitions, only the 2014 and 2019 elections saw a single party (BJP) cross the 272-seat mark, though it still chose to rule as part of the NDA coalition."
    },
    {
        "id": "ch85-l1-q27",
        "question": "Which state in India is often cited as a pioneer of stable coalition politics (LDF and UDF experiments)?",
        "options": ["Uttar Pradesh","Kerala","Tamil Nadu","Gujarat"],
        "correctAnswerIndex": 1,
        "explanation": "Kerala has a long history of two stable, pre-poll multi-party fronts (LDF and UDF) that alternate in power."
    },
    {
        "id": "ch85-l1-q28",
        "question": "The",
        "options": ["Writ of the Supreme Court","Common Minimum Programme (CMP)","Orders of the President","Constitution of India"],
        "correctAnswerIndex": 1,
        "explanation": "The CMP acts as a guiding light for the cabinet, ensuring that the disparate parties work towards a set of shared goals."
    },
    {
        "id": "ch85-l1-q29",
        "question": "A",
        "options": ["The Parliament is dissolved early","No single party wins an absolute majority in the Lok Sabha","The Speaker resigns","The President refuses to address the house"],
        "correctAnswerIndex": 1,
        "explanation": "A hung or hanging parliament triggers the process of coalition-building or minority government formation."
    },
    {
        "id": "ch85-l1-q30",
        "question": "Is the term",
        "options": ["Yes, in Part XV","No, it is a concept of political practice and conventions","Yes, under Article 75","Yes, in the Preamble"],
        "correctAnswerIndex": 1,
        "explanation": "Like the"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch85-l2-q1",
        "question": "The emergence of coalition politics at the Centre in 1989 is often linked to the",
        "options": ["The Congress Party was banned","The Congress lost its status as a","that could accommodate all interests","The Congress turned into a regional party of Maharashtra","The Congress stopped contesting elections"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch85-l2-q2",
        "question": "In the context of the",
        "options": ["It makes the PM even more powerful as they control many parties","It reduces the PM to a","in a truer, often constrained sense, needing constantly to consult allies","It replaces the PM with a","","It has no impact on the PM"],
        "correctAnswerIndex": 1,
        "explanation": "In a coalition, the PM"
    },
    {
        "id": "ch85-l2-q3",
        "question": "Which of the following describes the",
        "options": ["They were governments for religious minorities only","They consisted of parties that together did not have a majority but were supported","by larger parties","They were coalitions formed by the President","They were governments with very few members in the Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "These governments were fragile because the parties *in* government lacked the 272-seat mark and depended on the"
    },
    {
        "id": "ch85-l2-q4",
        "question": "The",
        "options": ["It legally overrides the Indian Constitution","It provides a negotiated policy framework that bridges the ideological gaps between different parties","It is written by the Supreme Court","It abolishes the manifestos of all parties"],
        "correctAnswerIndex": 1,
        "explanation": "Since partners may have conflicting manifestos (e.g., Left vs Liberal), the CMP focuses on the"
    },
    {
        "id": "ch85-l2-q5",
        "question": "Analyze the impact of coalition governments on",
        "options": ["Lack of work","Conflicting directions from ministers belonging to different political parties with different agendas","Direct election of IAS officers","Abolition of the Secretariat system"],
        "correctAnswerIndex": 1,
        "explanation": "Policy paralysis often occurs when different ministries (held by different partners) work at cross-purposes or block each other"
    },
    {
        "id": "ch85-l2-q6",
        "question": "The term",
        "options": ["The smallest party in the alliance","The largest party that provides the Prime Minister and the core stability to the coalition","A party that remains neutral","The party that holds the Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "In NDA, the BJP is the anchor; in UPA, the Congress was the anchor. Without a strong anchor, coalitions tend to be"
    },
    {
        "id": "ch85-l2-q7",
        "question": "How did the era of coalitions (1989-2014) affect the",
        "options": ["It made the Governor a purely ceremonial figure","It often made the Governor","It abolished the post of Governor","It allowed Governors to lead political parties"],
        "correctAnswerIndex": 1,
        "explanation": "With unstable state coalitions, Governors were often accused of acting as agents of the Centre to install or dismiss governments (e.g., S.R. Bommai case context)."
    },
    {
        "id": "ch85-l2-q8",
        "question": "The",
        "options": ["Coalitions are illegal","The floor of the House is the only place to test a government","s chamber","The President can dismiss any coalition","Only national parties can form a government"],
        "correctAnswerIndex": 1,
        "explanation": "This judgment protected state coalitions from arbitrary dismissal by the Centre under Article 356, emphasizing the"
    },
    {
        "id": "ch85-l2-q9",
        "question": "The 2024 General Election shown that even if a party is",
        "options": ["Abridge the Constitution","Ensure broader political legitimacy and manage regional complexities","Reduce the salary of MPs","Hand over power to the Opposition"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch85-l2-q10",
        "question": "Which of the following describes the difference between",
        "options": ["Pre-poll is mandatory; post-poll is optional","Pre-poll coalitions are based on a shared electoral mandate; post-poll coalitions are often seen as","to reach the majority","Post-poll coalitions are always more stable","There is no difference in the eyes of the Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Pre-poll alliances (like NDA) are considered more legitimate as voters know the partnership before casting their vote."
    },
    {
        "id": "ch85-l2-q11",
        "question": "In a coalition,",
        "options": ["They have fewer members","They are the real sites for negotiation where coalition partners settle their differences away from the full cabinet","Only the PM attends them","They are required by Article 74"],
        "correctAnswerIndex": 1,
        "explanation": "Disputes are often"
    },
    {
        "id": "ch85-l2-q12",
        "question": "The",
        "options": ["Regional minorities decide the budget","A small party with a few critical seats blocks a major national policy (e.g., nuclear deal during UPA-I)","The President vetoes all coalition bills","The Opposition has more power than the government"],
        "correctAnswerIndex": 1,
        "explanation": "During UPA-I, the Left parties (outside supporters) famously"
    },
    {
        "id": "ch85-l2-q13",
        "question": "Assertion (A): Coalition governments have reduced the",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The era of coalitions (1989-2014) saw less use of Article 356 and more devolution of funds as state leaders held the keys to power in Delhi."
    },
    {
        "id": "ch85-l2-q14",
        "question": "The",
        "options": ["The largest party in the Lok Sabha","A small regional party, after larger parties failed to agree on a leader","The Rajya Sabha directly by the President","The British Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "Deve Gowda (Janata Dal) was a"
    },
    {
        "id": "ch85-l2-q15",
        "question": "What is the",
        "options": ["Coalitions are always stable","Small parties provide stability by never leaving","Coalitions can be more stable than single-party governments if they follow a",", but they appear more fragile due to constant bickering","Stability depends on the weather"],
        "correctAnswerIndex": 2,
        "explanation": "Despite the"
    },
    {
        "id": "ch85-l2-q16",
        "question": "In a coalition era, the",
        "options": ["The Speaker gets a higher salary","The Speaker has the power to decide on","cases (10th Schedule), which can save or sink a coalition government","The Speaker can dissolve the Lok Sabha","Only the Speaker can be a coalition leader"],
        "correctAnswerIndex": 1,
        "explanation": "Neutrality or perceived bias of the Speaker in disqualifying members during a"
    },
    {
        "id": "ch85-l2-q17",
        "question": "The 10th Schedule (Anti-Defection Law) was originally designed to stop",
        "options": ["It made coalitions impossible","It stabilized them by making it harder for individual members to jump parties, though","defections (splits/mergers) still occurred","It forced all parties to merge into one","It abolished the post of Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "While it stopped individual"
    },
    {
        "id": "ch85-l2-q18",
        "question": "Analyze the role of",
        "options": ["Regional identities have no role in national politics","Coalitions allow regional identities (Tamil, Marathi, Dalit, etc.) to have a seat at the national high table","Regional identities are a threat to the Constitution","Regional parties are banned from the Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "Coalition politics in India is often a"
    },
    {
        "id": "ch85-l2-q19",
        "question": "The term",
        "options": ["It is cheap","It creates","—the supporting party influences policy but is not accountable for the government","It is required by the President","It allows the Opposition to join the Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "Outside supporters can pull the plug anytime without facing the"
    },
    {
        "id": "ch85-l2-q20",
        "question": "Which of the following describes the impact of coalitions on",
        "options": ["Juiciary becomes weak in a coalition","A weak, fragmented Executive often allows for","as the courts step in to fill the policy vacuum","The PM appoints CJI directly in a coalition","There is no impact"],
        "correctAnswerIndex": 1,
        "explanation": "The 1990s (peak coalition era) was also the era of the"
    },
    {
        "id": "ch85-l2-q21",
        "question": "The",
        "options": ["Pro-Congress and Pro-BJP","Non-Congress and Non-BJP, consisting of regional and left parties","Led by the President","Consisting of only independent candidates"],
        "correctAnswerIndex": 1,
        "explanation": "The Third Front (or National Front/United Front) sought to provide a"
    },
    {
        "id": "ch85-l2-q22",
        "question": "In a coalition government, the",
        "options": ["Enhanced","Severely curtailed as it might upset the","between partners","Handed over to the Speaker","Abolished by law"],
        "correctAnswerIndex": 1,
        "explanation": "Re-shuffling often requires intense negotiation with ally bosses (e.g., Mamata Banerjee or Nitish Kumar in their respective alliance years)."
    },
    {
        "id": "ch85-l2-q23",
        "question": "What is the primary motive behind",
        "options": ["To share the same office space","To aggregate votes and prevent the","of support against a common rival","To reduce the number of candidates in a country","To obey a Supreme Court order"],
        "correctAnswerIndex": 1,
        "explanation": "Pre-poll alliances help in"
    },
    {
        "id": "ch85-l2-q24",
        "question": "The",
        "options": ["Regionalism disappears at the Centre","Regional parties behave like national parties when in power at the Centre, but return to regionalism once out of it","Regional parties are the only ones that matter","National parties become regional"],
        "correctAnswerIndex": 1,
        "explanation": "When regional leaders become Union Ministers, they must balance their state interests with national responsibilities (though many continue to prioritize their states)."
    },
    {
        "id": "ch85-l2-q25",
        "question": "Coalition governments are sometimes called",
        "options": ["They only appear after rain","They consist of a wide spectrum of parties representing different social, linguistic, and ideological","","They are very short-lived like a rainbow","They are formed by the Meteorological Department"],
        "correctAnswerIndex": 1,
        "explanation": "The term emphasizes the diversity and inclusive nature of multi-party alliances."
    },
    {
        "id": "ch85-l2-q26",
        "question": "Which of the following describes the impact of coalition politics on",
        "options": ["It makes foreign policy more aggressive","It can lead to","(e.g., allies influencing India","It has no impact due to Article 51","Foreign policy is decided by the UN in a coalition"],
        "correctAnswerIndex": 1,
        "explanation": "Allies like DMK (Sri Lanka issue) or TMC (Teesta Water sharing) have historically constrained or influenced the Union"
    },
    {
        "id": "ch85-l2-q27",
        "question": "The 2024-2026 phase of Indian politics is described as",
        "options": ["There are no national parties anymore","The lead party still has a very large number of seats (near 240), unlike the 1990s where the lead party was often around 140-160","It is mandated by a New Act","The President chooses the PM via an exam"],
        "correctAnswerIndex": 1,
        "explanation": "A"
    },
    {
        "id": "ch85-l2-q28",
        "question": "Which of the following institutions becomes a",
        "options": ["NITI Aayog","The Governor or President","The Army Chief","The Chief Minister of the largest state"],
        "correctAnswerIndex": 1,
        "explanation": "The Head of State must use his discretion (within constitutional conventions) to invite the leader most likely to command a majority."
    },
    {
        "id": "ch85-l2-q29",
        "question": "Compare the",
        "options": ["Strict one-party rule","High levels of accommodation,",", and constant consultation with disparate allies","Abolition of regional parties","Direct rule from the PMO without Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "Vajpayee is often hailed as a"
    },
    {
        "id": "ch85-l2-q30",
        "question": "What is the primary constitutional safety valve against frequent",
        "options": ["The Anti-Defection Law (10th Schedule)","The power of the President to appoint a caretaker government","The fixed tenure of the Rajya Sabha","The Supreme Court"],
        "correctAnswerIndex": 0,
        "explanation": "While not perfect, the 10th Schedule makes it difficult for small groups to topple a government by jumping ship for individual gains."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch85-l3-q1",
        "question": "Regarding the 2024 General Election and the formation of the 18th Lok Sabha, consider the following statements:\\n1. For the first time since 2014, the Union Government is a",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect as the Speaker"
    },
    {
        "id": "ch85-l3-q2",
        "question": "With reference to",
        "options": ["Increased centralization of power in the PMO","The use of","(GoMs) and Cabinet Committees to build multi-party consensus before formal cabinet approval","The abolition of the Rajya Sabha","Direct appointment of CMs by the PM"],
        "correctAnswerIndex": 1,
        "explanation": "Coalitions require"
    },
    {
        "id": "ch85-l3-q3",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct and illustrate the legal and political risks faced by coalition governments in India."
    },
    {
        "id": "ch85-l3-q4",
        "question": "Assertion (A): Coalition governments at the Centre have historically been more",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "This is a classic manifestation of"
    },
    {
        "id": "ch85-l3-q5",
        "question": "In the context of",
        "options": ["Removing the Governor","Securing higher central grants (90:10 ratio) and tax exemptions for their states","Mandatory use of regional languages in Parliament","Merging states"],
        "correctAnswerIndex": 1,
        "explanation": "SCS provides significant financial benefits (90% central grant for centrally sponsored schemes) which regional allies prioritize during coalition negotiations."
    },
    {
        "id": "ch85-l3-q6",
        "question": "Which of the following describes the impact of the",
        "options": ["It made the President the actual ruler","It forced the President to develop","for inviting the leader most likely to provide a stable government (e.g., President K.R. Narayanan","It abolished the post of Vice-President","It allowed the President to choose any citizen as PM"],
        "correctAnswerIndex": 1,
        "explanation": "During coalitional instability, the President"
    },
    {
        "id": "ch85-l3-q7",
        "question": "Compare the 1990s",
        "options": ["Excessive debate in Parliament","Policy Paralysis (indisposition to take bold or controversial decisions due to fear of upsetting allies)","Frequent use of Article 356","Increase in the power of state governments"],
        "correctAnswerIndex": 1,
        "explanation": ""
    },
    {
        "id": "ch85-l3-q8",
        "question": "Analyze the",
        "options": ["Lack of funds","Internal contradictions between parties competing for the same social vote base (e.g., SP and BSP or JDU and RJD)","Supreme Court","The use of computers in elections"],
        "correctAnswerIndex": 1,
        "explanation": "Parties that compete for the same"
    },
    {
        "id": "ch85-l3-q9",
        "question": "In the context of the 2026 Simulation, how could a",
        "options": ["It makes India look weak in the UN","It requires the Union to balance national interest with","or","concerns of allies (e.g., Fishermen issue with Sri Lanka)","It abolishes the Ministry of External Affairs","It gives the Army the power to decide foreign policy"],
        "correctAnswerIndex": 1,
        "explanation": "Coalition partners from border states (like Tamil Nadu or West Bengal) often exert pressure on India"
    },
    {
        "id": "ch85-l3-q10",
        "question": "Match the",
        "options": ["(a)-2, (b)-1, (c)-3, (d)-4","(a)-1, (b)-2, (c)-4, (d)-3","(a)-3, (b)-4, (c)-1, (d)-2","(a)-2, (b)-3, (c)-1, (d)-4"],
        "correctAnswerIndex": 0,
        "explanation": "This correctly maps the unique support structures of India"
    },
    {
        "id": "ch85-l3-q11",
        "question": "The",
        "options": ["Do nothing as it is a political matter","Declare the proclamation unconstitutional and even restore the dismissed ministry (as in Uttarakhand and Arunachal cases)","Dissolve the Parliament","Appoint a new Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Judicial review of the material for recommending Article 356 is now a standard practice, protecting coalitional state governments."
    },
    {
        "id": "ch85-l3-q12",
        "question": "Consider the following regarding",
        "options": ["1 is the Ideal, 2 is the Real","2 is the Ideal, 1 is the Real","Both are Ideal","Both are Real"],
        "correctAnswerIndex": 0,
        "explanation": "The constitutional mandate (75) for collective responsibility is often subverted by the"
    },
    {
        "id": "ch85-l3-q13",
        "question": "What is the",
        "options": ["Abolishing the post of Home Minister","Selecting a","Prime Minister (H.D. Deve Gowda) after more prominent leaders were vetoed","Appointing a Judge as PM","The longest term of any coalition"],
        "correctAnswerIndex": 1,
        "explanation": "In coalitions, the"
    },
    {
        "id": "ch85-l3-q14",
        "question": "Regarding the",
        "options": ["They want fewer seats","They fear a loss of representation/seats compared to more populous North Indian states, which could weaken their","in Delhi","They want to shift the Parliament to Bengaluru","They want to abolish the 15th Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Their reduced numerical strength in Parliament would directly impact their ability to act as"
    },
    {
        "id": "ch85-l3-q15",
        "question": "Analytically, does a coalition government strengthen or weaken",
        "options": ["It weakens it by making it unstable","It strengthens it by reflecting the","of India and preventing the","(over-centralization)","It has no impact","It replaces democracy with monarchy"],
        "correctAnswerIndex": 1,
        "explanation": "Coalitions force dialogue and inclusivity, ensuring that diverse viewpoints are heard in the cabinet, which is the heart of a representative democracy."
    },
    {
        "id": "ch85-l3-q16",
        "question": "The",
        "options": ["The rise of educated politicians","The","as small partners often use muscle power to stay relevant in a hung assembly","The increase in tax collection","The reduction in party funding"],
        "correctAnswerIndex": 1,
        "explanation": "Fragile coalitions often provide"
    },
    {
        "id": "ch85-l3-q17",
        "question": "Assertion (A): Coalition governments at the national level have led to a",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Counter-intuitively, while the PM"
    },
    {
        "id": "ch85-l3-q18",
        "question": "Compare",
        "options": ["The government can fall immediately on a vote of no-confidence","The President is the head of the coalition","The coalition partners are not allowed to join the Cabinet","There is no Prime Minister"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the US or Brazil where the President stays for a fixed term despite coalition shifts, an Indian coalition government must maintain its majority *every day* on the floor of the House."
    },
    {
        "id": "ch85-l3-q19",
        "question": "The term",
        "options": ["Mandal (OBC politics) led to the rise of regional parties, while Mandir (Hindutva) led to the rise of BJP, forcing them to coalesce at the national level","Mandal politics abolished all regional parties","Mandir politics made coalitions unnecessary","They are two rivers in South India"],
        "correctAnswerIndex": 0,
        "explanation": "These two phenomena created distinct vote banks that necessitated the alliance architectures we see today."
    },
    {
        "id": "ch85-l3-q20",
        "question": "Regarding",
        "options": ["Nothing, as the partner","Advise the President to dismiss the minister, but at the risk of the entire party withdrawing support and the government falling","Ask the Supreme Court to punish the minister","Resign themselves immediately"],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch85-l3-q21",
        "question": "In 2024 results, the TDP and JDU chose to be",
        "options": ["Outside support is better for India","By being",", they share the","and are bound by the principle of collective responsibility","Being","means they can","There is no difference"],
        "correctAnswerIndex": 1,
        "explanation": "Cabinet ministers are part of the decision-making process and cannot (theoretically) criticize the government in Parliament."
    },
    {
        "id": "ch85-l3-q22",
        "question": "The",
        "options": ["1 -> 2 -> 3","2 -> 1 -> 3","3 -> 1 -> 2","1 -> 3 -> 2"],
        "correctAnswerIndex": 0,
        "explanation": "A pre-poll alliance is given priority because it is seen as a unified democratic mandate from the voters."
    },
    {
        "id": "ch85-l3-q23",
        "question": "What is the role of",
        "options": ["They have no power","They become","who can demand highly disproportionate cabinet berths or policy concessions (Retail Politics)","They are merged into large parties by law","They are not allowed to join the government"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch85-l3-q24",
        "question": "Assertion (A): Coalition governments led to the",
        "options": ["Both A and R are true but R is not the correct explanation of A","A is false; Rajya Sabha actually became stronger as no national party had a majority there for decades, making every bill a site for coalitional negotiation","A is true; B is true","Both are false"],
        "correctAnswerIndex": 1,
        "explanation": "In fact, the Rajya Sabha became the"
    },
    {
        "id": "ch85-l3-q25",
        "question": "Analyze the impact of",
        "options": ["More stable as everyone is watched","More volatile as every minor disagreement in the cabinet is magnified instantly, creating public pressure on allies to","","Impossible to form","Abolished by mandatory silence periods"],
        "correctAnswerIndex": 1,
        "explanation": "Media often thrives on"
    },
    {
        "id": "ch85-l3-q26",
        "question": "The",
        "options": ["Double-headed executive which provided political cover to the technical PM, but was criticized for","authority","Triple-blind executive","Unitary command under the President","System where the CJI was the real boss"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch85-l3-q27",
        "question": "The 104th Amendment abolished the",
        "options": ["It made the house smaller","It removed two","seats that were often used by the ruling coalition as","during a no-confidence motion","It increased the number of regional parties","It has no relation"],
        "correctAnswerIndex": 1,
        "explanation": "The two nominated seats usually supported the"
    },
    {
        "id": "ch85-l3-q28",
        "question": "In the",
        "options": ["A general election","An ideological clash","A national crisis like an external war or a total collapse of the economy","Every year on Republic Day"],
        "correctAnswerIndex": 2,
        "explanation": "While rare in India,"
    },
    {
        "id": "ch85-l3-q29",
        "question": "Which of the following is the",
        "options": ["The need to ignore small partners","The effectiveness of having a","to resolve issues regularly before they become public crises","Abolition of the cabinet","The need for a single religion"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch85-l3-q30",
        "question": "Final Conclusion: The success of a coalition government in a parliamentary democracy essentially depends on the culture of:",
        "options": ["Majoritarianism","Accommodative consensus and compromise among diverse political forces","Strict ideological purity","Absolute rule of the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Without the culture of"
    }
];

export const CHAPTER_85_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
