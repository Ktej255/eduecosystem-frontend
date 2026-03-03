import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch23-l1-q1",
        "question": "Which part of the Constitution deals with the Parliament?",
        "options": ["Part IV","Part V","Part VI","Part IX"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 79 to 122 in Part V of the Constitution deal with the organisation, composition, duration, officers, procedures, privileges, powers and so on of the Parliament."
    },
    {
        "id": "ch23-l1-q2",
        "question": "According to the Constitution, the Parliament of India consists of:",
        "options": ["Lok Sabha and Rajya Sabha only","The President and Lok Sabha only","The President, the Council of States (Rajya Sabha), and the House of the People (Lok Sabha)","The Prime Minister, Lok Sabha, and Rajya Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "Under the Constitution, the Parliament of India consists of three parts viz, the President, the Council of States and the House of the People."
    },
    {
        "id": "ch23-l1-q3",
        "question": "In which year were the Hindi names",
        "options": ["1950","1952","1954","1956"],
        "correctAnswerIndex": 2,
        "explanation": "In 1954, the Hindi names ‘Rajya Sabha’ and ‘Lok Sabha’ were adopted by the Council of States and the House of People respectively."
    },
    {
        "id": "ch23-l1-q4",
        "question": "Is the President of India a member of either House of Parliament?",
        "options": ["Yes, of the Lok Sabha","Yes, of the Rajya Sabha","Yes, of both Houses","No, he is not a member of either House."],
        "correctAnswerIndex": 3,
        "explanation": "Though the President of India is not a member of either House of Parliament and does not sit in the Parliament to attend its meetings, he is an integral part of the Parliament."
    },
    {
        "id": "ch23-l1-q5",
        "question": "What is the maximum strength of the Rajya Sabha fixed by the Constitution?",
        "options": ["250","245","552","545"],
        "correctAnswerIndex": 0,
        "explanation": "The maximum strength of the Rajya Sabha is fixed at 250, out of which, 238 are to be the representatives of the states and union territories (elected indirectly) and 12 are nominated by the president."
    },
    {
        "id": "ch23-l1-q6",
        "question": "How many members are nominated by the President to the Rajya Sabha?",
        "options": ["2","10","12","14"],
        "correctAnswerIndex": 2,
        "explanation": "...and 12 are nominated by the president."
    },
    {
        "id": "ch23-l1-q7",
        "question": "Which Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha to the states and union territories?",
        "options": ["First Schedule","Third Schedule","Fourth Schedule","Ninth Schedule"],
        "correctAnswerIndex": 2,
        "explanation": "The Fourth Schedule of the Constitution deals with the allocation of seats in the Rajya Sabha to the states and union territories."
    },
    {
        "id": "ch23-l1-q8",
        "question": "By what method are the representatives of states in the Rajya Sabha elected?",
        "options": ["Direct election by the people","Proportional representation by means of the single transferable vote","First-past-the-post system","Nomination by the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The election is held in accordance with the system of proportional representation by means of the single transferable vote."
    },
    {
        "id": "ch23-l1-q9",
        "question": "On what basis are seats allocated to the states in the Rajya Sabha?",
        "options": ["Equal representation for all states","On the basis of population","On the basis of area size","On the basis of tax contribution"],
        "correctAnswerIndex": 1,
        "explanation": "The seats are allotted to the states in the Rajya Sabha on the basis of population. Hence, the number of representatives varies from state to state."
    },
    {
        "id": "ch23-l1-q10",
        "question": "What is the maximum strength of the Lok Sabha fixed by the Constitution (prior to the 104th Amendment regarding Anglo-Indians)?",
        "options": ["543","545","550","552"],
        "correctAnswerIndex": 3,
        "explanation": "The maximum strength of the Lok Sabha is fixed at 552. Out of this, 530 members are to be the representatives of the states, 20 members are to be the representatives of the union territories and 2 members are to be nominated by the president from the Anglo-Indian community."
    },
    {
        "id": "ch23-l1-q11",
        "question": "What is the minimum voting age for Lok Sabha elections after the 61st Constitutional Amendment Act (1988)?",
        "options": ["21 years","18 years","25 years","16 years"],
        "correctAnswerIndex": 1,
        "explanation": "The voting age was reduced from 21 to 18 years by the 61st Constitutional Amendment Act, 1988."
    },
    {
        "id": "ch23-l1-q12",
        "question": "According to the 84th Amendment Act of 2001, until which year was the total number of seats in the Lok Sabha frozen?",
        "options": ["2010","2020","2026","2030"],
        "correctAnswerIndex": 2,
        "explanation": "This ban on readjustment was extended for another year (i.e., upto year 2026) by the 84th Amendment Act of 2001."
    },
    {
        "id": "ch23-l1-q13",
        "question": "Is the Rajya Sabha subject to dissolution?",
        "options": ["Yes, every 5 years","Yes, every 6 years","No, it is a continuing chamber","Yes, by the President at any time"],
        "correctAnswerIndex": 2,
        "explanation": "The Rajya Sabha (first constituted in 1952) is a continuing chamber, that is, it is a permanent body and not subject to dissolution."
    },
    {
        "id": "ch23-l1-q14",
        "question": "What proportion of Rajya Sabha members retire every second year?",
        "options": ["One-half","One-third","Two-thirds","One-fourth"],
        "correctAnswerIndex": 1,
        "explanation": "However, one-third of its members retire every second year. Their seats are filled up by fresh elections and presidential nominations at the beginning of every third year."
    },
    {
        "id": "ch23-l1-q15",
        "question": "What is the normal term of the Lok Sabha?",
        "options": ["4 years","5 years","6 years","Until the Prime Minister resigns"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the Rajya Sabha, the Lok Sabha is not a continuing chamber. Its normal term is five years from the date of its first meeting after the general elections, after which it automatically dissolves."
    },
    {
        "id": "ch23-l1-q16",
        "question": "During a National Emergency, by how much time can the term of the Lok Sabha be extended at a time?",
        "options": ["Six months","One year at a time","Two years at a time","Indefinitely without limit"],
        "correctAnswerIndex": 1,
        "explanation": "However, the term of the Lok Sabha can be extended during the period of national emergency be a law of Parliament for one year at a time for any length of time."
    },
    {
        "id": "ch23-l1-q17",
        "question": "What is the minimum age qualification for a person to be chosen as a member of the Rajya Sabha?",
        "options": ["21 years","25 years","30 years","35 years"],
        "correctAnswerIndex": 2,
        "explanation": "He must be not less than 30 years of age in the case of the Rajya Sabha and not less than 25 years of age in the case of the Lok Sabha."
    },
    {
        "id": "ch23-l1-q18",
        "question": "Which of the following is NOT a ground for disqualification under the Constitution (Article 102)?",
        "options": ["Holding an office of profit","Being of unsound mind as declared by a court","Being an undischarged insolvent","Failing to submit election expense returns"],
        "correctAnswerIndex": 3,
        "explanation": "Failing to lodge an account of election expenses is a disqualification under the Representation of the People Act (1951), not explicitly under the constitutional provisions of Article 102."
    },
    {
        "id": "ch23-l1-q19",
        "question": "Who decides the question of disqualification of a member of Parliament (other than on grounds of defection)?",
        "options": ["The Speaker / Chairman","The Supreme Court","The Election Commission alone","The President, whose decision is final"],
        "correctAnswerIndex": 3,
        "explanation": "On the question whether a member is subject to any of the above disqualifications [under Constitution/RPA], the president’s decision is final. However, he should obtain the opinion of the election commission and act accordingly."
    },
    {
        "id": "ch23-l1-q20",
        "question": "Under the Tenth Schedule, who decides questions of disqualification on the ground of defection?",
        "options": ["The President","The Election Commission","The Chairman/Speaker of the respective House","The Supreme Court directly"],
        "correctAnswerIndex": 2,
        "explanation": "The question of disqualification under the Tenth Schedule is decided by the Chairman in the case of Rajya Sabha and Speaker in the case of Lok Sabha (and not by the president of India)."
    },
    {
        "id": "ch23-l1-q21",
        "question": "If a person is elected to both Houses of Parliament, within how many days must they intimate in which House they desire to serve?",
        "options": ["7 days","10 days","14 days","30 days"],
        "correctAnswerIndex": 1,
        "explanation": "If a person is elected to both the Houses of Parliament, he must intimate within 10 days in which House he desires to serve. In default of such intimation, his seat in the Rajya Sabha becomes vacant."
    },
    {
        "id": "ch23-l1-q22",
        "question": "A House of Parliament can declare the seat of a member vacant if they are absent from all its meetings for a period of:",
        "options": ["30 days","60 days","90 days","6 months"],
        "correctAnswerIndex": 1,
        "explanation": "A House can declare the seat of a member vacant if he is absent from all its meetings for a period of sixty days without its permission."
    },
    {
        "id": "ch23-l1-q23",
        "question": "Who is the presiding officer of the Lok Sabha?",
        "options": ["The Prime Minister","The Vice-President","The Speaker","The Chief Justice"],
        "correctAnswerIndex": 2,
        "explanation": "Each House of Parliament has its own presiding officer. There is a Speaker and a Deputy Speaker for the Lok Sabha..."
    },
    {
        "id": "ch23-l1-q24",
        "question": "Who decides whether a bill is a money bill or not?",
        "options": ["The Finance Minister","The Prime Minister","The President","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 3,
        "explanation": "He [Speaker] decides whether a bill is a money bill or not and his decision on this question is final."
    },
    {
        "id": "ch23-l1-q25",
        "question": "Who presides over a joint sitting of the two Houses of Parliament?",
        "options": ["The President","The Vice-President (Chairman of Rajya Sabha)","The Speaker of Lok Sabha","The Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "He [Speaker] presides over a joint sitting of the two Houses of Parliament. Such a sitting is summoned by the President to settle a deadlock between the two Houses on a bill."
    },
    {
        "id": "ch23-l1-q26",
        "question": "Who acts as the ex-officio Chairman of the Rajya Sabha?",
        "options": ["The President of India","The Vice-President of India","The senior-most member of Rajya Sabha","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The presiding officer of the Rajya Sabha is known as the Chairman. The vice-president of India is the ex-officio Chairman of the Rajya Sabha."
    },
    {
        "id": "ch23-l1-q27",
        "question": "Can the Chairman of the Rajya Sabha vote in the first instance during proceedings?",
        "options": ["Yes, he has a regular vote.","No, he cannot vote in the first instance, but can cast a deciding vote in case of an equality of votes.","He cannot vote under any circumstances.","Only on constitutional amendment bills."],
        "correctAnswerIndex": 1,
        "explanation": "However, like the Speaker, the Chairman also cannot vote in the first instance. He too can cast a casting vote in the case of an equality of votes."
    },
    {
        "id": "ch23-l1-q28",
        "question": "What is the quorum required to constitute a meeting of either House of Parliament?",
        "options": ["One-fifth of the total number of members","One-tenth of the total number of members in each House including the presiding officer","One-third of the total number of members","Fifty members in Lok Sabha and twenty-five in Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "Quorum is the minimum number of members required to be present in the House before it can transact any business. It is one-tenth of the total number of members in each House including the presiding officer."
    },
    {
        "id": "ch23-l1-q29",
        "question": "What is",
        "options": ["The last hour of every sitting where votes are taken.","The first hour of every parliamentary sitting devoted to asking and answering questions.","A special session held on Sundays to question the Prime Minister.","The time allotted for passing the Budget."],
        "correctAnswerIndex": 1,
        "explanation": "The first hour of every parliamentary sitting is slotted for this. During this time, the members ask questions and the ministers usually give answers."
    },
    {
        "id": "ch23-l1-q30",
        "question": "Which of the following motions is moved to express lack of confidence in the Council of Ministers?",
        "options": ["Adjournment Motion","Censure Motion","No-Confidence Motion","Calling Attention Motion"],
        "correctAnswerIndex": 2,
        "explanation": "Article 75 of the Constitution says that the council of ministers shall be collectively responsible to the Lok Sabha... In other words, the Lok Sabha can remove the ministry from office by passing a no-confidence motion."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch23-l2-q1",
        "question": "Consider the constitutional status of the President in relation to Parliament. Why is the President considered an",
        "options": ["Because the President presides over joint sittings.","Because the President appoints all members of the Rajya Sabha.","Because a bill passed by both Houses of Parliament cannot become law without the President","Because the President has the power to veto constitutional amendments."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament = Lok Sabha + Rajya Sabha + President. This mirrors the British model (Crown in Parliament). Although the President doesn"
    },
    {
        "id": "ch23-l2-q2",
        "question": "Analyze the principle behind the election to the Rajya Sabha. It uses",
        "options": ["It guarantees that only the ruling party at the Centre wins all seats.","It almost guarantees that a party","s Rajya Sabha delegation is roughly proportional to its numerical strength in that State Assembly, giving a voice to significant minority parties.","It ensures that only independent candidates can win.","It effectively gives the Governor the power to nominate members."],
        "correctAnswerIndex": 1,
        "explanation": "In First-Past-The-Post, a party with 51% votes gets 100% of the seats. Proportional Representation (PR) ensures that if a party holds 30% of the State Assembly seats, they get roughly 30% of the Rajya Sabha seats from that state. This prevents a tyrannical majority and reflects the true political spectrum of the states."
    },
    {
        "id": "ch23-l2-q3",
        "question": "Consider the delimitation of constituencies. The 84th (2001) and 87th (2003) Amendment Acts froze the total number of Lok Sabha seats, but allowed the redrawing of boundaries *within* states based on the 2001 census. What was the core demographic rationale for freezing the total seats per state?",
        "options": ["To save money on conducting large elections.","To prevent states that successfully implemented family planning (mostly Southern states) from being politically penalized with fewer Lok Sabha seats compared to populous states that failed to control population growth.","To ensure urban areas always have more seats than rural areas.","Because the Parliament building ran out of physical seating space."],
        "correctAnswerIndex": 1,
        "explanation": "This is a profound federal issue. If seats were constantly readjusted based on rising population, states like UP and Bihar would gain massive power, while Tamil Nadu and Kerala (which stabilized their populations) would lose representation. The"
    },
    {
        "id": "ch23-l2-q4",
        "question": "Differentiate between",
        "options": ["Adjournment sine die terminates the sitting and is done by the Speaker/Chairman; Prorogation terminates the session itself and is done by the President.","Prorogation is done by the Speaker to pause a debate; Adjournment sine die is done by the PM to end the day.","Both are identical actions performed by the President.","Adjournment sine die dissolves the Lok Sabha; Prorogation dissolves the Rajya Sabha."],
        "correctAnswerIndex": 0,
        "explanation": "A"
    },
    {
        "id": "ch23-l2-q5",
        "question": "What is the crucial constitutional effect of",
        "options": ["The Bill survives and is taken up by the next Lok Sabha.","The Bill is immediately sent to the President for passing via Ordinance.","The Bill lapses completely. It must be reintroduced as a fresh bill in the newly elected Lok Sabha.","The Bill goes to a joint sitting automatically."],
        "correctAnswerIndex": 2,
        "explanation": "Dissolution wipes the slate clean for the Lok Sabha. A bill originating in the Lok Sabha (or passed by it) represents the will of *that specific* House. When the House dies, its pending work dies. However, a bill originating in the Rajya Sabha and *never yet passed* by the Lok Sabha survives, because the Rajya Sabha is permanent."
    },
    {
        "id": "ch23-l2-q6",
        "question": "Analyze the concept of",
        "options": ["It prevents politicians from earning a double salary.","Because MPs are expected to work for free like social workers.","To safeguard the independence of the legislature. An MP","Because only IAS officers are allowed to hold such offices."],
        "correctAnswerIndex": 2,
        "explanation": "The purpose is purely to prevent conflicts of interest. The legislature checks the executive. If the executive hands out lucrative chairmanships of state corporations (offices of profit) to MPs, it buys their loyalty, destroying legislative independence. Ministers are explicitly exempted from this rule by law."
    },
    {
        "id": "ch23-l2-q7",
        "question": "Consider the powers of the Speaker of the Lok Sabha. If a dispute arises regarding whether a newly introduced bill is a",
        "options": ["The Speaker refers the matter to the Supreme Court for an advisory opinion.","The Speaker consults the Finance Minister and follows their advice.","The Speaker decides the matter definitively. The Speaker","The Speaker calls a joint sitting to resolve the definition."],
        "correctAnswerIndex": 2,
        "explanation": "The Speaker"
    },
    {
        "id": "ch23-l2-q8",
        "question": "Differentiate between a",
        "options": ["Starred questions are for the PM; Unstarred are for other ministers.","Starred questions receive a written reply; Unstarred receive an oral reply.","A Starred question requires an ORAL answer in the House, allowing members to ask spontaneous supplementary questions to grill the minister. An Unstarred question requires a WRITTEN reply, barring supplementary questions.","Starred questions are asked by the ruling party; Unstarred by the opposition."],
        "correctAnswerIndex": 2,
        "explanation": "This determines the level of heat a minister faces. An unstarred question just gets a data-heavy paper reply laid on the table. A starred question forces the minister to stand up, give the answer, and immediately face fierce follow-up (supplementary) questions from the opposition attempting to catch them off guard."
    },
    {
        "id": "ch23-l2-q9",
        "question": "What is the unique constitutional requirement for passing a Constitutional Amendment Bill under Article 368, as compared to an Ordinary Bill, regarding resolving deadlocks between the Houses?",
        "options": ["If the houses disagree, a joint sitting is immediately summoned.","The Rajya Sabha has no power; Lok Sabha can override it.","There is NO provision for a joint sitting. If the Lok Sabha and Rajya Sabha disagree mathematically (fail to pass it separately by a special majority), the Constitutional Amendment Bill immediately dies.","The President can pass it by Ordinance."],
        "correctAnswerIndex": 2,
        "explanation": "This is a critical protection for the Constitution. Joint sittings (where the Lok Sabha"
    },
    {
        "id": "ch23-l2-q10",
        "question": "Analyze the",
        "options": ["Because it automatically passes a law without debate.","Because it suspends the salaries of all ministers.","It interrupts the normal, pre-scheduled business of the House to discuss a","(like a massive train crash or riot). By forcing this discussion, it inherently involves an element of censure against the government, hence it is not permitted in the Rajya Sabha.","It is used to impeach the President."],
        "correctAnswerIndex": 2,
        "explanation": "Parliamentary agenda is tight. An Adjournment Motion says"
    },
    {
        "id": "ch23-l2-q11",
        "question": "Consider the concept of",
        "options": ["To allow MPs to commit libel against private citizens for personal gain.","To ensure they can criticize the Supreme Court judges daily.","To enable absolutely fearless debate, fearless scrutiny of the executive, and the uninhibited expression of constituents","To make MPs legally superior to ordinary citizens in all aspects of life."],
        "correctAnswerIndex": 2,
        "explanation": "Privilege isn"
    },
    {
        "id": "ch23-l2-q12",
        "question": "Regarding",
        "options": ["It can reject the bill completely.","It can amend the bill forcefully.","It can only discuss it, make recommendations, and MUST return it to the Lok Sabha within 14 days. The Lok Sabha can accept or entirely reject these recommendations, and the bill is passed regardless.","It can withhold assent for 6 months."],
        "correctAnswerIndex": 2,
        "explanation": "On taxation and expenditure (Money Bills), the directly elected House reigns supreme. The RS is just an advisory speedbump. If the RS sits on it for 15 days, it"
    },
    {
        "id": "ch23-l2-q13",
        "question": "Differentiate between a",
        "options": ["A Private Member","Only Public Bills require Presidential Assent.","A Public Bill is introduced by a Minister representing the government","s Bill is introduced by ANY Member of Parliament who is NOT a Minister, requiring a one-month notice.","Private Bills can exclusively amend the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "This is a key procedural distinction."
    },
    {
        "id": "ch23-l2-q14",
        "question": "What is the specific purpose of a",
        "options": ["Executing corrupt politicians.","Expelling members for unruly behavior.","When the allotted time for discussing the vast Demands for Grants in the Budget expires, the Speaker groups all remaining undiscussed demands together and forces an immediate, un-debated vote on them to ensure the budget passes before the financial year ends.","Terminating the Lok Sabha immediately."],
        "correctAnswerIndex": 2,
        "explanation": "The Budget is massive. Parliament debates specific ministries (Defense, Health) in detail. But time runs out. On the last allotted day, the Speaker uses the"
    },
    {
        "id": "ch23-l2-q15",
        "question": "Consider the",
        "options": ["It can be moved in either House, requires 100 members","It can only be moved in the Lok Sabha, needs the support of at least 50 members to be admitted, and crucially, it need NOT state the specific reasons or grounds on which it is based.","It is moved by the President based on intelligence reports.","It requires a two-thirds majority just to be debated."],
        "correctAnswerIndex": 1,
        "explanation": "Differences from a Censure Motion are key. Censure must state reasons ("
    },
    {
        "id": "ch23-l2-q16",
        "question": "Assertion (A): The Vice-President, as the Chairman of the Rajya Sabha, can be removed from his office by a resolution passed solely by the Rajya Sabha without involving the Lok Sabha.\\nReason (R): Because the Vice-President is exclusively the presiding officer of the Rajya Sabha and not a member of the Lok Sabha.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is entirely false. While the resolution to remove the VP must *originate* in the Rajya Sabha (passed by an effective majority), it absolutely MUST be agreed to by the Lok Sabha (by a simple majority). The Lok Sabha has a defining say. Reason R is true regarding his status, but false as a justification for exclusion from removal."
    },
    {
        "id": "ch23-l2-q17",
        "question": "How does the",
        "options": ["Zero hour is at night; Question hour is in the morning.","Zero hour is mentioned in the Constitution; Question hour is an informal convention.","Question Hour is heavily structured, requiring advance notice of questions under the Rules of Procedure. Zero Hour is an informal Indian innovation (not in the rules) where MPs can abruptly raise matters of extreme urgency without any prior notice.","Zero hour is strictly for passing the budget."],
        "correctAnswerIndex": 2,
        "explanation": "Question hour is polite, bureaucratic accountability (ministers have 15 days to prepare answers). Zero Hour (starts exactly at 12 noon) is structured chaos. Because there"
    },
    {
        "id": "ch23-l2-q18",
        "question": "Evaluate the role of the",
        "options": ["The Whip physically protects the Speaker.","The Whip acts as the Election Commissioner.","The Whip is a political party official who issues binding directives to their party MPs on how to vote on crucial bills. Defying the Whip (voting against party lines) is the primary trigger for disqualification under the Anti-Defection Law (Tenth Schedule).","The Whip manages the financial accounts of the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "The Whip is the enforcer. If a three-line whip is issued saying"
    },
    {
        "id": "ch23-l2-q19",
        "question": "Under the First-Past-The-Post (FPTP) system used for Lok Sabha elections, what is the",
        "options": ["A party always gets the exact percentage of seats as its vote share.","The Election Commission redistributes extra votes to smaller parties.","There is often a massive disproportion. A party winning 35% of the national popular vote could win 280 seats (a majority), while another party winning 20% might win only 10 seats, deeply punishing dispersed minority voting bases.","The President ensures mathematical equality."],
        "correctAnswerIndex": 2,
        "explanation": "This is FPTP"
    },
    {
        "id": "ch23-l2-q20",
        "question": "What is the primary function of the",
        "options": ["To draft the annual Union Budget.","To collect taxes from citizens.","To act as the Parliament","To advise the RBI on monetary policy."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament holds the purse strings. The PAC completes the circle of accountability. The CAG acts as the accountant, checking the government"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch23-l3-q1",
        "question": "Analyze the constitutional safeguards surrounding",
        "options": ["Yes, because any bill involving money is a Money Bill.","Yes, if the amount of the fine exceeds ₹10,000.","No. Article 110 explicitly excludes a bill from being a Money Bill by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licenses or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration or regulation of any tax by any local authority or body for local purposes.","Yes, but only if the Speaker certifies it."],
        "correctAnswerIndex": 2,
        "explanation": "This is a favorite UPSC trap. A Money Bill is EXCLUSIVELY about Union taxation, borrowing, or the Consolidated/Contingency Funds (Art 110(1)). Art 110(2) explicitly lists exceptions: fines, license fees, and *local* taxes. Even if a bill deals with local Panchayat taxation, it"
    },
    {
        "id": "ch23-l3-q2",
        "question": "Consider a scenario involving a",
        "options": ["It can be introduced in either House.","It does not require the prior recommendation of the President.","Like a Money Bill, it can ONLY be introduced in the Lok Sabha and ONLY on the President","The Rajya Sabha must return it within 14 days."],
        "correctAnswerIndex": 2,
        "explanation": "Financial Bill (I) is a hybrid. It has a"
    },
    {
        "id": "ch23-l3-q3",
        "question": "Examine the constitutional mechanics of the",
        "options": ["Because the Supreme Court forbids it.","Because the President lacks the power to summon a joint sitting for amendments.","Because Article 368 mandates that an amendment must be passed by EACH House separately by the required special majority. The mathematical design of a joint sitting (where Lok Sabha","s independent consent to alter the constitutional fabric.","Because joint sittings are restricted solely to passing the Budget."],
        "correctAnswerIndex": 2,
        "explanation": "The architecture of the Constitution relies on the Rajya Sabha defending federal balance. If a joint sitting (543 vs 245) were allowed for amendments, a powerful Lok Sabha could rewrite the Constitution (e.g., abolish state powers) while completely ignoring a hostile Rajya Sabha. Article 368 prevents this tyranny of the majority."
    },
    {
        "id": "ch23-l3-q4",
        "question": "Consider the",
        "options": ["Because minority commissions are unconstitutional.","Because it is an unpaid honorary position.","Because Parliament has proactively used its legislative power under Article 102(1)(a) to pass specific laws exempting dozens of specific statutory bodies (like various National Commissions or parliamentary secretaries) from the definition of an",", thereby protecting the MP.","Because the Supreme Court granted a blanket exemption to all MPs."],
        "correctAnswerIndex": 2,
        "explanation": "Article 102(1)(a) says"
    },
    {
        "id": "ch23-l3-q5",
        "question": "Analyze the",
        "options": ["A No-Confidence Motion.","A Censure Motion.","A Privilege Motion against the Minister. Deliberately misleading the House constitutes a","and contempt of Parliament, as it cripples the House","An Adjournment Motion."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament demands truth from the executive. A mistake is corrected later. A *deliberate* lie disrespects the sovereign body. Moving a privilege motion triggers a quasi-judicial investigation by a parliamentary committee. If found guilty of contempt, the Minister can theoretically be expelled, reprimanded, or jailed by Parliament itself."
    },
    {
        "id": "ch23-l3-q6",
        "question": "Assertion (A): The Rajya Sabha possesses exclusive power under Article 249 to authorize Parliament to make laws on a subject enumerated in the State List.\\nReason (R): Because the Rajya Sabha represents the States, its resolution mathematically overriding state autonomy preserves the spirit of federalism by demonstrating collective state consent at the Union level.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is a brilliant federal design. The Union cannot arbitrarily hijack State subjects. However, if the Rajya Sabha (composed of State representatives) passes a resolution by a 2/3rds majority declaring it"
    },
    {
        "id": "ch23-l3-q7",
        "question": "What is the crucial difference between a",
        "options": ["A Cut Motion increases the budget; Vote on Account decreases it.","A Cut Motion relates strictly to the Railways; Vote on Account to General Administration.","A","is moved by the opposition to signal intense disapproval of a specific policy (reducing the demand to Re. 1). A","is a routine constitutional device used by the government to withdraw a lump sum (usually 1/6th of total) from the Consolidated Fund to keep the government running for 2 months while the agonizingly long Budget debate continues.","Both are identical financial vetoes."],
        "correctAnswerIndex": 2,
        "explanation": "The Budget takes weeks to debate. Financial year ends March 31. The government needs cash on April 1. The"
    },
    {
        "id": "ch23-l3-q8",
        "question": "If the government proposes to create a brand new All-India Service (e.g., an All-India Judicial Service), what specific constitutional hurdle must it clear, highlighting an exclusive power of the Rajya Sabha?",
        "options": ["The Lok Sabha must pass it unanimously.","The Supreme Court must issue a writ of mandamus.","The Rajya Sabha must first pass a resolution by a special majority (2/3rds of members present and voting) under Article 312 declaring it necessary in the national interest. Without this initiating RS resolution, Parliament cannot enact the law creating the service.","The President must declare a national emergency."],
        "correctAnswerIndex": 2,
        "explanation": "All-India Services (IAS, IPS) dilute state autonomy because the officers serve the state but are controlled by the Centre. To create a *new* one (further eroding state power), federal logic dictates that the Council of States (RS) must initiate the move, fiercely protecting state interests against unilateral Union encroachment."
    },
    {
        "id": "ch23-l3-q9",
        "question": "Analyze the",
        "options": ["It activates on constitutional amendments to ensure a 2/3rds majority.","It activates any time the government requests it.","The Presiding Officer does not vote in the","to maintain absolute neutrality. The casting vote activates ONLY in the case of an exact tie (equality of votes). It is used to break the deadlock and allow the House to reach a decision, often maintaining the status quo.","It is used to override a Supreme Court injunction."],
        "correctAnswerIndex": 2,
        "explanation": "The Speaker is an umpire. Umpires don"
    },
    {
        "id": "ch23-l3-q10",
        "question": "Consider the constitutional situation involving an",
        "options": ["6 months from the date of assembly.","It survives indefinitely until formally repealed.","It automatically ceases to operate at the expiration of six weeks from the reassembly of Parliament. If the two Houses reassemble on different dates, the period of six weeks is calculated from the later of those dates.","14 days, similar to a Money Bill."],
        "correctAnswerIndex": 2,
        "explanation": "Ordinances are emergency executive legislation. Parliament must ratify them. Once Parliament meets (the later date if RS and LS meet separately), the clock starts. The government has exactly 6 weeks (42 days) to replace the Ordinance with an Act (bill passing both houses). If Parliament just ignores it for 6 weeks, it dies a natural death."
    },
    {
        "id": "ch23-l3-q11",
        "question": "Assertion (A): Prorogation does not affect pending bills in either House of Parliament.\\nReason (R): Because prorogation merely terminates a session, not the life of the House, thereby allowing pending legislative business (unlike notices or motions) to resume smoothly in the next session without lapsing.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true."
    },
    {
        "id": "ch23-l3-q12",
        "question": "Evaluate the",
        "options": ["It refers to the final budget session before an election.","It refers to a session held during a period of national emergency.","It refers to the last session of the existing Lok Sabha, held *after* a new Lok Sabha has been elected but before the old one is formally dissolved. The existing members who could not get re-elected to the new Lok Sabha are termed",".","It refers to sessions boycotted by the opposition."],
        "correctAnswerIndex": 2,
        "explanation": "A technical term defining a transition period. The election is over, the new winners are announced, but the old Lok Sabha technically exists for a few more days to wind up final business before dissolution. The defeated MPs sitting in this session are politically powerless ("
    },
    {
        "id": "ch23-l3-q13",
        "question": "Which of the following motions, if successfully passed in the Lok Sabha, does NOT constitutionally oblige the Council of Ministers to resign?",
        "options": ["A No-Confidence Motion.","A motion rejecting the motion of thanks on the President","A","directed strictly at an individual minister for a specific policy failure, even though it expresses severe House disapproval.","A motion rejecting a Money Bill (the Budget)."],
        "correctAnswerIndex": 2,
        "explanation": "While a No-Confidence motion or losing a major vote (like the Budget or the President"
    },
    {
        "id": "ch23-l3-q14",
        "question": "Consider the procedure for the removal of a Supreme Court Judge (under the Judges Inquiry Act, 1968, supporting Art 124(4)). What is the role of Parliament in this complex process?",
        "options": ["The Parliament initiates the process, investigates the charges itself through a floor debate, and votes.","The Parliament","guilty","The Lok Sabha alone decides by simple majority.","Parliament only ratifies the President"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament doesn"
    },
    {
        "id": "ch23-l3-q15",
        "question": "If a Member of Parliament voluntarily gives up the membership of their political party after being elected, they trigger disqualification under the Tenth Schedule. However, what is the crucial exception regarding",
        "options": ["Nominated members can join any party at any time without penalty.","Nominated members cannot join any party; doing so instantly disqualifies them regardless of timing.","A nominated member is disqualified if he joins any political party AFTER the expiry of six months from the date on which he takes his seat in the House. They have a 6-month window to choose a political alignment.","Nominated members are completely exempt from the Tenth Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "This is a specific nuance of the Anti-Defection law. Independents are disqualified if they join *any* party. Nominated members (like sports stars or scientists nominated to RS) are given a 6-month grace period to decide if they want to officially align with a political party. If they join on month 7, they are disqualified."
    },
    {
        "id": "ch23-l3-q16",
        "question": "What is the primary function of the",
        "options": ["To audit the business transactions of PSUs.","To advise the Prime Minister on industrial policy.","It regulates the program and timetable of the House. It allocates time for the transaction of legislative and other business brought before the House by the government.","It advises the Speaker on legal interpretations of bills."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament has hundreds of hours of work but limited days. The Business Advisory Committee (headed by the Speaker and including leaders of all parties) acts as the traffic controller, deciding"
    },
    {
        "id": "ch23-l3-q17",
        "question": "Analyze the",
        "options": ["Because DSCs have the actual power to veto budget allocations.","Because Ministers must face intense, unscripted cross-examination by the committees.","Because after the general discussion, the Houses are adjourned for 3-4 weeks. During this recess, the 24 DSCs microscopically examine the","of respective ministries in closed-door sessions alongside top bureaucrats, producing detailed reports BEFORE the final voting on the budget takes place.","Because DSCs replace the Public Accounts Committee."],
        "correctAnswerIndex": 2,
        "explanation": "Before 1993, Parliament voted on the massive budget largely blindly after a few speeches. Now, the 24 DSCs (which include Lok Sabha and Rajya Sabha members) take a"
    },
    {
        "id": "ch23-l3-q18",
        "question": "Which of the following scenarios describes the legislative device known as a",
        "options": ["A motion to formally close the Parliament session for the year.","A motion moved by a member to cut short the debate on a matter before the House. If approved by the House, debate is stopped forthwith and the matter is put to vote, preventing endless filibustering.","A motion to close the galleries to the public.","A motion to permanently close a specific government department."],
        "correctAnswerIndex": 1,
        "explanation": "Politicians love to talk, and oppositions love to stall. If a debate is dragging on for days simply to delay a vote, a majority member moves a"
    },
    {
        "id": "ch23-l3-q19",
        "question": "In the context of the",
        "options": ["It cannot examine any financial documents without the Finance Minister","It cannot investigate matters of major government policy as distinct from business or commercial functions. It evaluates efficiency and autonomy, not the underlying political rationale for creating/running the PSU.","It is restricted solely to examining the hiring practices of lower-level staff.","It cannot call executive directors for questioning."],
        "correctAnswerIndex": 1,
        "explanation": "COPU audits the PSUs based on CAG reports. It asks"
    },
    {
        "id": "ch23-l3-q20",
        "question": "Consider the constitutional anomaly regarding the",
        "options": ["The AG has the right to cast a vote in committee meetings.","The AG can introduce a Private Member","The AG has the right to speak in, and otherwise take part in the proceedings of either House, any joint sitting, and any committee of which he may be named a member, but critically, he does NOT have the right to vote. He acts as the chief legal counsel to the government on the floor of the House.","The AG acts as the Deputy Speaker."],
        "correctAnswerIndex": 2,
        "explanation": "Article 88 gives an unelected lawyer (the Attorney General) massive parliamentary access. When a complex constitutional bill is debated, the PM or Law Minister might ask the AG to sit in the Lok Sabha, take the microphone, and explain the legal nuances to the MPs. It"
    }
];

export const CHAPTER_23_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
