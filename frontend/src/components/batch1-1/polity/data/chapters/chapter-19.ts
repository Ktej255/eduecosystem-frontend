import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch19-l1-q1",
        "question": "What is the rank of the Vice-President of India in the official warrant of precedence?",
        "options": ["First","Second","Third","Fourth"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-President occupies the second highest office in the country. He is accorded a rank next to the President in the official warrant of precedence."
    },
    {
        "id": "ch19-l1-q2",
        "question": "The office of the Indian Vice-President is modeled on the lines of the Vice-President of which country?",
        "options": ["Britain","Canada","American","France"],
        "correctAnswerIndex": 2,
        "explanation": "This office is modeled on the lines of the American Vice-President."
    },
    {
        "id": "ch19-l1-q3",
        "question": "How is the Vice-President of India elected?",
        "options": ["Directly by the people of India","By an electoral college consisting of the members of both Houses of Parliament","By the members of the Rajya Sabha only","By the State Legislative Assemblies"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-President, like the president, is elected not directly by the people but by the method of indirect election. He is elected by the members of an electoral college consisting of the members of both Houses of Parliament."
    },
    {
        "id": "ch19-l1-q4",
        "question": "Which of the following statements about the electoral college for the Vice-President is correct, unlike the Electoral College for the President?",
        "options": ["It consists only of elected members of Parliament.","It does not include nominated members of Parliament.","It consists of both elected and nominated members of the Parliament.","It includes the elected members of the state legislative assemblies."],
        "correctAnswerIndex": 2,
        "explanation": "The electoral college for the Vice-President consists of both elected and nominated members of the Parliament (in the case of president, only elected members)."
    },
    {
        "id": "ch19-l1-q5",
        "question": "Do the members of the state legislative assemblies participate in the election of the Vice-President?",
        "options": ["Yes, all elected members do.","Yes, both elected and nominated members do.","No, it does not include the members of the state legislative assemblies.","Yes, but only from bicameral states."],
        "correctAnswerIndex": 2,
        "explanation": "The electoral college for the Vice-President does not include the members of the state legislative assemblies (in the case of President, the elected members of the state legislative assemblies are included)."
    },
    {
        "id": "ch19-l1-q6",
        "question": "What system of election is used for the Vice-President?",
        "options": ["First-past-the-post","Proportional representation by means of the single transferable vote","List system","Direct territorial constituencies"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-President’s election, like that of the President’s election, is held in accordance with the system of proportional representation by means of the single transferable vote and the voting is by secret ballot."
    },
    {
        "id": "ch19-l1-q7",
        "question": "All doubts and disputes in connection with election of the Vice-President are inquired into and decided by whom?",
        "options": ["The Election Commission","The Supreme Court","The Parliament","The President"],
        "correctAnswerIndex": 1,
        "explanation": "All doubts and disputes in connection with election of the Vice-President are inquired into and decided by the Supreme Court whose decision is final."
    },
    {
        "id": "ch19-l1-q8",
        "question": "Which of the following is a mandatory qualification to be eligible for election as Vice-President?",
        "options": ["He must be qualified for election as a member of the Lok Sabha.","He must be qualified for election as a member of the Rajya Sabha.","He must have completed 30 years of age.","He must be a sitting Governor of a state."],
        "correctAnswerIndex": 1,
        "explanation": "To be Vice-President, a person must be qualified for election as a member of the Rajya Sabha. (For President, the qualification is for the Lok Sabha)."
    },
    {
        "id": "ch19-l1-q9",
        "question": "What is the minimum age prescribed for a person to be eligible for election as Vice-President?",
        "options": ["25 years","30 years","35 years","40 years"],
        "correctAnswerIndex": 2,
        "explanation": "A candidate must have completed 35 years of age to be eligible for the office of Vice-President."
    },
    {
        "id": "ch19-l1-q10",
        "question": "To whom does the Vice-President subscribe his oath of office?",
        "options": ["The Chief Justice of India","The outgoing Vice-President","The President, or some person appointed in that behalf by him","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The oath of office to the Vice-President is administered by the President or some person appointed in that behalf by him."
    },
    {
        "id": "ch19-l1-q11",
        "question": "What is the normal term of office for the Vice-President?",
        "options": ["4 years","5 years","6 years","During the pleasure of the President"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-President holds office for a term of five years from the date on which he enters upon his office."
    },
    {
        "id": "ch19-l1-q12",
        "question": "To whom does the Vice-President address his resignation letter?",
        "options": ["The Chief Justice of India","The President","The Deputy Chairman of Rajya Sabha","The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "However, he can resign from his office at any time by addressing the resignation letter to the President."
    },
    {
        "id": "ch19-l1-q13",
        "question": "Is formal impeachment required for the removal of the Vice-President?",
        "options": ["Yes, exactly like the President.","No, a formal impeachment is not required for his removal.","Yes, but only by the Rajya Sabha.","Yes, but it requires Supreme Court approval."],
        "correctAnswerIndex": 1,
        "explanation": "A formal impeachment is not required for his removal. He can be removed by a resolution of the Rajya Sabha passed by an effective majority and agreed to by the Lok Sabha."
    },
    {
        "id": "ch19-l1-q14",
        "question": "Can a resolution for the removal of the Vice-President be introduced in the Lok Sabha?",
        "options": ["Yes, it can be introduced in either House.","No, it can be introduced ONLY in the Rajya Sabha and not in the Lok Sabha.","Yes, but only with the Speaker","No, it must originate in a joint sitting."],
        "correctAnswerIndex": 1,
        "explanation": "Notably, no impeachment is required; and a resolution for his removal can be introduced only in the Rajya Sabha and not in the Lok Sabha."
    },
    {
        "id": "ch19-l1-q15",
        "question": "How many days",
        "options": ["7 days","14 days","21 days","30 days"],
        "correctAnswerIndex": 1,
        "explanation": "No such resolution can be moved unless at least 14 days’ advance notice has been given."
    },
    {
        "id": "ch19-l1-q16",
        "question": "For the removal of the Vice-President, the Rajya Sabha must pass a resolution by a special majority (effective majority). What kind of majority is required in the Lok Sabha to agree to this resolution?",
        "options": ["Absolute majority","Special majority","Simple majority","Two-thirds majority"],
        "correctAnswerIndex": 2,
        "explanation": "He can be removed by a resolution of the Rajya Sabha passed by an absolute majority (ie, a majority of the total members of the House) and agreed to by the Lok Sabha with a simple majority."
    },
    {
        "id": "ch19-l1-q17",
        "question": "What are the specific grounds mentioned in the Constitution for the removal of the Vice-President?",
        "options": ["Violation of the Constitution","Incapacity and proved misbehaviour","Corruption","No ground has been mentioned in the Constitution for his removal."],
        "correctAnswerIndex": 3,
        "explanation": "Unlike the President (who can be removed for"
    },
    {
        "id": "ch19-l1-q18",
        "question": "Can a Vice-President who has completed his five-year term be re-elected to the office?",
        "options": ["No, he can only serve one term.","Yes, he is eligible for re-election to that office for any number of terms.","Yes, but only for a maximum of two terms.","Yes, but only if the sitting President agrees."],
        "correctAnswerIndex": 1,
        "explanation": "He is eligible for re-election to that office. He may be elected for any number of terms."
    },
    {
        "id": "ch19-l1-q19",
        "question": "An election to fill a vacancy caused by the expiration of the term of office of the Vice-President must be held:",
        "options": ["Within six months of the vacancy.","Within one year of the vacancy.","Before the expiration of the term.","As soon as possible."],
        "correctAnswerIndex": 2,
        "explanation": "An election to fill a vacancy caused by the expiration of the term of office of Vice-President shall be completed before the expiration of the term."
    },
    {
        "id": "ch19-l1-q20",
        "question": "What is the primary, ex-officio role of the Vice-President of India?",
        "options": ["To advise the President on legal matters.","To act as the ex-officio Chairman of Rajya Sabha.","To head the NITI Aayog.","To command the armed forces in the President"],
        "correctAnswerIndex": 1,
        "explanation": "He acts as the ex-officio Chairman of Rajya Sabha. In this capacity, his powers and functions are similar to those of the Speaker of Lok Sabha."
    },
    {
        "id": "ch19-l1-q21",
        "question": "When the Vice-President acts as President due to a vacancy in the President",
        "options": ["He continues to perform the duties of the Chairman of Rajya Sabha simultaneously.","He does not perform the duties of the office of the chairman of Rajya Sabha.","He assumes the role of Speaker of the Lok Sabha instead.","He appoints a temporary Chairman from his staff."],
        "correctAnswerIndex": 1,
        "explanation": "While acting as President or discharging the functions of President, the Vice-President does not perform the duties of the office of the chairman of Rajya Sabha. During this period, those duties are performed by the Deputy Chairman of Rajya Sabha."
    },
    {
        "id": "ch19-l1-q22",
        "question": "For what maximum duration can the Vice-President act as President?",
        "options": ["Three months","Six months","One year","For the remainder of the deceased President"],
        "correctAnswerIndex": 1,
        "explanation": "He can act as President only for a maximum period of six months within which a new President has to be elected."
    },
    {
        "id": "ch19-l1-q23",
        "question": "During the period the Vice-President acts as President, what salary does he receive?",
        "options": ["His salary as the Chairman of the Rajya Sabha.","Half the salary of the President and half as Chairman.","The salary and allowance of the President.","A special emergency allowance determined by Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "During this period, he is not entitled to the salary or allowance payable to the chairman of Rajya Sabha, but the salary and allowance of the President."
    },
    {
        "id": "ch19-l1-q24",
        "question": "Is there any provision in the Constitution regarding the salary of the Vice-President in his capacity specifically as the Vice-President?",
        "options": ["Yes, the Constitution fixes it at Rs 4 lakh per month.","Yes, but it varies according to the economic situation.","The Constitution has not fixed any emoluments for the Vice-President in that capacity.","Yes, it is dynamically pegged to the Chief Justice"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution has not fixed any emoluments for the Vice-President in that capacity. He draws his regular salary in his capacity as the ex-officio Chairman of the Rajya Sabha."
    },
    {
        "id": "ch19-l1-q25",
        "question": "If a sitting Vice-President contests an election for the office of President, must they resign from the Vice-Presidency first?",
        "options": ["Yes, to avoid a conflict of interest.","No, a sitting Vice-President is not deemed to hold an","and is thus qualified to contest.","Yes, but only if they belong to the ruling party.","Yes, the Constitution explicitly requires it."],
        "correctAnswerIndex": 1,
        "explanation": "A sitting President or Vice-President of the Union, the governor of any state and a minister for the Union or any state is not deemed to hold any office of profit and hence qualified for being a candidate for Vice-President (or President)."
    },
    {
        "id": "ch19-l1-q26",
        "question": "Who was the first Vice-President of India?",
        "options": ["Dr. Rajendra Prasad","Dr. S. Radhakrishnan","Dr. Zakir Hussain","V.V. Giri"],
        "correctAnswerIndex": 1,
        "explanation": "Dr. S Radhakrishnan was the first Vice President of India."
    },
    {
        "id": "ch19-l1-q27",
        "question": "When the Vice-President acts as President, who presides over the Rajya Sabha?",
        "options": ["The Vice-President continues to preside.","The Speaker of the Lok Sabha.","The Deputy Chairman of the Rajya Sabha.","The Chief Justice of India."],
        "correctAnswerIndex": 2,
        "explanation": "While acting as President... those duties [Chairman] are performed by the Deputy Chairman of Rajya Sabha."
    },
    {
        "id": "ch19-l1-q28",
        "question": "The Vice-President can act as President when the President is unable to discharge his functions due to:",
        "options": ["Absence, illness, or any other cause.","Only due to impeachment.","Only due to resignation.","Only due to death."],
        "correctAnswerIndex": 0,
        "explanation": "He acts as President when a vacancy occurs in the office of the President... He can also discharge the functions of the President when he is unable to discharge his functions due to absence, illness or any other cause."
    },
    {
        "id": "ch19-l1-q29",
        "question": "In what circumstance does the Vice-President act as the President of India?",
        "options": ["During a National Emergency.","When the Lok Sabha is dissolved.","When a vacancy occurs in the office of the President due to mere resignation, removal, death or otherwise.","When the President travels abroad."],
        "correctAnswerIndex": 2,
        "explanation": "The Vice-President acts as President when a vacancy occurs in the office of the President due to his resignation, removal, death or otherwise."
    },
    {
        "id": "ch19-l1-q30",
        "question": "Which Constitutional authority checks and resolves all election disputes regarding the Vice-Presidency?",
        "options": ["The Election Commission alone.","A Joint Parliamentary Committee.","The Supreme Court of India.","The Delhi High Court."],
        "correctAnswerIndex": 2,
        "explanation": "All doubts and disputes in connection with election of the Vice-President are inquired into and decided by the Supreme Court whose decision is final."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch19-l2-q1",
        "question": "Why did the framers of the Constitution include nominated members of Parliament in the Electoral College for the Vice-President, but explicitly exclude them from the Electoral College of the President?",
        "options": ["Because nominated members lack the political experience required to choose the Head of State, but can choose the Chairman of the Rajya Sabha.","Because the Vice-President","To give the ruling party an edge in the Vice-Presidential election.","Because nominated members cannot be trusted with the nuclear codes."],
        "correctAnswerIndex": 1,
        "explanation": "The President is the Head of State; his electoral college must reflect solely the elected will of the entire nation (MPs and MLAs). The Vice-President"
    },
    {
        "id": "ch19-l2-q2",
        "question": "Consider the mechanism for removing the Vice-President (Article 67). While a formal",
        "options": ["A resolution passed by both Houses of Parliament with a two-thirds majority.","A resolution initiated and passed by the Rajya Sabha with an","(majority of all the then members of the Rajya Sabha) AND subsequently agreed to by the Lok Sabha with a simple majority.","A resolution passed solely by the Rajya Sabha.","An executive order by the President on the advice of the Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-President is primarily the officer of the Rajya Sabha. Therefore, removal proceedings MUST originate in the Rajya Sabha. It requires an"
    },
    {
        "id": "ch19-l2-q3",
        "question": "While acting as the President of India during a vacancy, the Vice-President ceases to perform the duties of the Chairman of the Rajya Sabha. During this period, what is his constitutional status regarding his Rajya Sabha salary?",
        "options": ["He draws both the salary of the President and the Chairman of the Rajya Sabha.","He draws only the salary of the Chairman of the Rajya Sabha.","He is not entitled to the salary or allowance payable to the Chairman of Rajya Sabha. He draws the salary and allowance solely of the President.","He receives no salary as it is an honorary acting position."],
        "correctAnswerIndex": 2,
        "explanation": "Article 65(3) mandate that while the Vice-President acts as President, he has all the powers and immunities of the President and is entitled to the President"
    },
    {
        "id": "ch19-l2-q4",
        "question": "A Vice-President holds office for a term of five years. What happens if this five-year term expires before his successor has been formally elected and assumed office?",
        "options": ["The office remains completely vacant.","The Chief Justice of India instantly takes over the Vice-Presidency.","The incumbent Vice-President MUST continue to hold office, notwithstanding the expiration of his term, until his successor enters upon his office.","The Deputy Chairman of the Rajya Sabha acts as the Vice-President."],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 67, the Constitution abhors a vacuum in this vital office. Even if the 5-year clock stops, the outgoing Vice-President doesn"
    },
    {
        "id": "ch19-l2-q5",
        "question": "Regarding",
        "options": ["All bills passed by the Rajya Sabha under his chairmanship are retrospectively nullified.","The Supreme Court must individually review every single action.","The acts done by him in the performance of his duties before the date of the Supreme Court declaration remain perfectly valid.","The Lok Sabha Speaker must retrospectively ratify those actions."],
        "correctAnswerIndex": 2,
        "explanation": "Just like the President, the"
    },
    {
        "id": "ch19-l2-q6",
        "question": "Compare the Indian Vice-President with the American Vice-President in the specific scenario where the office of the President falls vacant due to death. What is the fundamental difference in their succession roles?",
        "options": ["The Indian VP becomes the President for the remaining term; the American VP only acts as President for 6 months.","The American VP assumes the office of the President permanently for the unexpired term of his predecessor. The Indian VP merely","as President temporarily until a new President is elected within 6 months.","Both VP systems operate exactly the same way regarding succession.","The Indian VP cannot succeed the President under any circumstances."],
        "correctAnswerIndex": 1,
        "explanation": "This is a massive constitutional distinction. When JFK died, LBJ became the actual President for the remainder of JFK"
    },
    {
        "id": "ch19-l2-q7",
        "question": "When a resolution for the removal of the Vice-President is under consideration in the Rajya Sabha, what are his rights regarding participation in the proceedings?",
        "options": ["He must preside over his own removal debate to ensure fairness.","He is completely barred from entering the Parliament building.","He has the right to speak in, and otherwise take part in the proceedings of the Rajya Sabha, but he shall not be entitled to vote at all on such a resolution.","He has the right to vote if there is a tie."],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 92, while the resolution for his removal is discussed, the Vice-President cannot preside over the Rajya Sabha. He can sit as an ordinary member, defend himself, and participate in the debate, but he loses his normal casting vote entirely on the resolution itself."
    },
    {
        "id": "ch19-l2-q8",
        "question": "To be eligible to run for Vice-President, a candidate must be",
        "options": ["He must not hold an office of profit.","He must be a registered elector in any parliamentary constituency in India.","He must actually be a sitting member of the Rajya Sabha at the time of contesting.","He must be 35 years old."],
        "correctAnswerIndex": 2,
        "explanation": "The key phrase is"
    },
    {
        "id": "ch19-l2-q9",
        "question": "Consider the condition of office:",
        "options": ["The sitting President","A sitting Governor of a State","A sitting Union Cabinet Minister","A highly paid Chairman of a Public Sector Undertaking (PSU)"],
        "correctAnswerIndex": 3,
        "explanation": "Political executive offices (President, VP, Governor, Ministers) are constitutionally exempt from the"
    },
    {
        "id": "ch19-l2-q10",
        "question": "Assertion (A): The Constitution does not assign any significant executive functions to the Vice-President in his normal capacity.\\nReason (R): Because his office was modeled on the American Vice-President solely to create a political",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. The Vice-President has almost zero executive power while the President is alive and well. His entire day job is managing the Rajya Sabha. The framers literally created the role as a constitutional"
    },
    {
        "id": "ch19-l2-q11",
        "question": "If the Vice-President is discharging the functions of the President (due to the President",
        "options": ["He continues to perform the duties of the Chairman of Rajya Sabha simultaneously.","He does not perform the duties of the office of the Chairman of Rajya Sabha; those duties are performed by the Deputy Chairman.","The President appoints a temporary Chairman.","The Rajya Sabha sessions are suspended."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 65, whether the VP is"
    },
    {
        "id": "ch19-l2-q12",
        "question": "Which of the following bodies conducts the election for the office of the Vice-President of India?",
        "options": ["The Parliament of India","The Supreme Court of India","The Election Commission of India","The Ministry of Parliamentary Affairs"],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 324, the superintendence, direction, and control of the preparation of electoral rolls for, and the conduct of, all elections to Parliament, State Legislatures, and the offices of President and Vice-President are vested in the Election Commission."
    },
    {
        "id": "ch19-l2-q13",
        "question": "If an election to the office of the Vice-President cannot be held prior to the expiration of the term of the outgoing Vice-President, what does the Constitution propose?",
        "options": ["The office remains vacant.","The Chief Justice of India assumes the role temporarily.","The outgoing Vice-President continues to hold office, notwithstanding the expiration of his term, until his successor is elected and assumes office.","The Parliament must enact a special law."],
        "correctAnswerIndex": 2,
        "explanation": "Article 67(c) states explicitly: a Vice-President shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office."
    },
    {
        "id": "ch19-l2-q14",
        "question": "Consider the resolution for the removal of the Vice-President. Before moving this resolution in the Rajya Sabha, what is the mandatory notice period required?",
        "options": ["7 days","14 days","21 days","30 days"],
        "correctAnswerIndex": 1,
        "explanation": "Article 67(b) dictates that no resolution for the removal of the Vice-President shall be moved unless at least fourteen days"
    },
    {
        "id": "ch19-l2-q15",
        "question": "Can the Vice-President of India simultaneously be a member of the State Legislature (MLA/MLC)?",
        "options": ["Yes, provided they do not draw a salary from the State.","No, the Constitution explicitly prohibits it.","Yes, but only in their home state.","Yes, if they are nominated rather than elected."],
        "correctAnswerIndex": 1,
        "explanation": "Article 66(2) provides that the Vice-President shall not be a member of either House of Parliament or a House of the Legislature of any State. If such a member is elected VP, he shall be deemed to have vacated his seat in that House on the date he enters upon his office."
    },
    {
        "id": "ch19-l2-q16",
        "question": "What is the primary factor that decides the Vice-President",
        "options": ["His responsibilities as Vice-President.","His age and political experience.","He draws the regular salary assigned to the ex-officio Chairman of the Rajya Sabha.","A specific clause in the original Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not prescribe a salary for the Vice-President in that capacity. He draws his regular salary in his capacity as the ex-officio Chairman of the Rajya Sabha, determined by Parliament from time to time."
    },
    {
        "id": "ch19-l2-q17",
        "question": "If the Supreme Court is hearing a petition regarding an election dispute concerning the Vice-President, can the petitioner challenge the election on the ground that the electoral college was",
        "options": ["Yes, an incomplete electoral college renders the election automatically void.","No, the Constitution explicitly states that the election of a person as VP shall not be called in question on the ground of the existence of any vacancy among the members of the electoral college.","Yes, but only if more than 10% of the seats are vacant.","Yes, but only if the Election Commission agrees."],
        "correctAnswerIndex": 1,
        "explanation": "Article 71(4) is a crucial stabilizing clause. The election of a President or Vice-President cannot be challenged merely because some seats in Parliament or Assemblies were vacant at the time of voting. This prevents political games where members resign to block the election."
    },
    {
        "id": "ch19-l2-q18",
        "question": "Assertion (A): The Vice-President is strictly bound by the advice of the Council of Ministers while acting as the Chairman of the Rajya Sabha.\\nReason (R): Because Article 74 mandates that there shall be a Council of Ministers to aid and advise the President, and the Vice-President represents the President in the upper house.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The Vice-President, when presiding over the Rajya Sabha, acts as an independent legislative presiding officer (like the Speaker). He is NOT a representative of the Executive/President in the House. He is absolutely NOT bound by the advice of the Prime Minister"
    },
    {
        "id": "ch19-l2-q19",
        "question": "Compare the removal process of the Vice-President with that of a Supreme Court Judge. What is a key difference?",
        "options": ["VP requires proven misbehavior; SC judge does not.","VP requires a two-thirds majority in both houses; SC judge requires a simple majority.","VP removal is initiated only in Rajya Sabha and only requires an effective majority there and simple agreement in Lok Sabha; an SC Judge requires a strict special majority (2/3rds present and voting) in BOTH Houses.","There is no difference in the procedure."],
        "correctAnswerIndex": 2,
        "explanation": "Removing an SC Judge is intentionally harder (impeachment-style special majority in both houses) to protect judicial independence. Removing the VP is relatively easier (effective majority in RS, simple majority in LS) because the VP is primarily a parliamentary officer, not an independent adjudicator."
    },
    {
        "id": "ch19-l2-q20",
        "question": "In the event both the President and Vice-President die in a tragic accident simultaneously, who is legally designated to act as President under the",
        "options": ["The Prime Minister","The Speaker of the Lok Sabha","The Chief Justice of India (CJI), or in his absence, the senior-most Judge of the Supreme Court.","The longest-serving State Governor"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution itself only outlined the VP succeeding the President. Parliament enacted the 1969 Act to outline the further line of succession. If both top offices are suddenly vacant (as happened when Zakir Hussain died and VP V.V. Giri resigned to contest the election), the Chief Justice of India (M. Hidayatullah in that historical case) steps in as acting President."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch19-l3-q1",
        "question": "Analyze the constitutional",
        "options": ["He has a","vote like any ordinary Member of Parliament.","He has absolutely no voting power in the Rajya Sabha under any circumstances.","He cannot vote in the first instance. However, in the case of an equality of votes (a tie) on any issue or bill, he exercises a decisive","to resolve the deadlock.","He can vote only on Constitutional Amendment Bills."],
        "correctAnswerIndex": 2,
        "explanation": "Article 100(1) defines this precisely. The Chairman (or Speaker in LS) shall not vote in the first instance. This preserves the impartiality of the presiding officer. But if the House is split exactly 50/50, the presiding officer is compelled to cast the deciding vote to break the institutional paralysis."
    },
    {
        "id": "ch19-l3-q2",
        "question": "Consider the constitutional situation when the President",
        "options": ["The Acting President serves the full remainder of the deceased/resigned President","A fresh election MUST be held within exactly one year, and the new President serves only for the remaining unexpired term.","A fresh election MUST be held as soon as possible after, and in no case later than six months from, the date of occurrence of the vacancy. The newly elected President then serves a full fresh term of five years.","The Parliament decides the timeline via a simple resolution."],
        "correctAnswerIndex": 2,
        "explanation": "This is a dual testing point. First, Article 62(2) strictly mandates a 6-month deadline for the new election, ending the VP"
    },
    {
        "id": "ch19-l3-q3",
        "question": "Examine the semantic nuance of",
        "options": ["Because the Vice-President is a lesser officer.","Because an","(like Art 61) is a quasi-judicial process involving formal framing of legal charges (",") by one House and investigation by the other. The VP","Because","requires the Supreme Court","t need.","Because","can only happen for corruption, while","is for treason."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court noted this crucial difference. To oust the President, Parliament must act like a court: draft specific charges, inform him, allow him counsel, investigate, and vote 2/3rds. To oust the VP, Parliament just needs to pass a resolution (Effective majority RS, Simple majority LS). There is no constitutional requirement for a quasi-judicial trial/defense, making it a purely political"
    },
    {
        "id": "ch19-l3-q4",
        "question": "In the hypothetical scenario where the Vice-President, acting as President, issues an Ordinance (Article 123) and subsequently signs the death warrant of a convicted terrorist, but a month later the Supreme Court declares his initial election as Vice-President completely void. What is the legal status of the Ordinance and the execution?",
        "options": ["Both the Ordinance and the execution are retroactively declared illegal and murder.","The Ordinance survives, but the execution is considered invalid.","Under the","doctrine incorporated in Article 71(2), BOTH the legislative act (Ordinance) and the executive act (signing the warrant) performed by him while ostensibly discharging the functions of the President remain perfectly valid and legal.","The new Vice-President must re-sign the papers."],
        "correctAnswerIndex": 2,
        "explanation": "Article 71(2) prevents systemic breakdown. If the person was widely accepted as VP and was acting as President, the government and citizens operated under the assumption his acts were legal. An election dispute resolving months later cannot unravel the sovereign acts of the State they performed. The acts are permanently immune from invalidation on the ground of the void election."
    },
    {
        "id": "ch19-l3-q5",
        "question": "Assertion (A): The Vice-President is ex-officio Chairman of the Rajya Sabha, meaning whoever occupies the office of the VP automatically presides over the Upper House.\\nReason (R): Because the Constitution strictly follows the doctrine of separation of powers, ensuring the Executive (VP) directly controls the Legislature (Rajya Sabha) to prevent gridlock.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is the factual definition of"
    },
    {
        "id": "ch19-l3-q6",
        "question": "Consider the unique phrasing of the requirement for removing the Vice-President: passed by an",
        "options": ["More than 50% of the total strength: 123 members.","More than 50% of members present and voting: e.g., if only 100 show up, 51 votes.","More than 50% of the *effective* strength (Total strength minus vacancies): 245 - 45 = 200. The effective majority requires at least 101 affirmative votes.","Two-thirds of the members present and voting."],
        "correctAnswerIndex": 2,
        "explanation": "This tests precise parliamentary math."
    },
    {
        "id": "ch19-l3-q7",
        "question": "Evaluate the constitutional silence regarding the Acting President. While Article 65(2) states the VP",
        "options": ["The Supreme Court automatically assumes jurisdiction.","The Chief Justice of India makes the final determination.","It is a constitutional gray area heavily reliant on convention, usually determined by the Prime Minister","The Parliament must pass a constitutional amendment."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the US 25th Amendment (which has detailed rules for Presidential incapacitation), the Indian Constitution is terrifyingly silent on"
    },
    {
        "id": "ch19-l3-q8",
        "question": "Assertion (A): During the debate on a resolution seeking the removal of the Vice-President in the Rajya Sabha, the Vice-President is constitutionally barred from presiding over the house.\\nReason (R): Because the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true, and R is the fundamental jurisprudential basis for A. Article 92 explicitly removes the VP from the Chairman"
    },
    {
        "id": "ch19-l3-q9",
        "question": "Regarding",
        "options": ["Yes, the Vice-President enjoys identical textual immunity under Article 361.","No, the Constitution (Article 361) explicitly names only the President and the Governor. The Vice-President, in his normal capacity, does NOT enjoy this absolute constitutional immunity from criminal proceedings, unless he is actively","under Article 65.","Yes, but only for civil cases.","Yes, but it requires prior Parliamentary approval."],
        "correctAnswerIndex": 1,
        "explanation": "This is a frequent trap. Article 361 says"
    },
    {
        "id": "ch19-l3-q10",
        "question": "In the context of the Vice-Presidential election, the",
        "options": ["It guarantees that independent candidates win easily.","It ensures that a candidate who is vehemently opposed by 60% of the Parliament cannot win merely by securing a 40% plurality against a divided opposition, as the STV quota system mandates the eventual winner mathematically secures absolute majority support (>50%) through preference transfers.","It ensures the election process is completed in one day.","It gives the State Assemblies veto power."],
        "correctAnswerIndex": 1,
        "explanation": "This is the core rationale for STV for high constitutional offices. In FPTP (like Lok Sabha), if A gets 30%, B gets 25%, C gets 25%, and D gets 20%, candidate A wins, despite 70% of voters hating A. STV forces voters to rank choices. If A has 30%, they haven"
    },
    {
        "id": "ch19-l3-q11",
        "question": "What happens if a sitting Vice-President, elected by the Parliament, subsequently wishes to resign from their office?",
        "options": ["They must table their resignation before both Houses of Parliament.","They must submit a sealed resignation to the Chief Justice of India.","They must address their resignation in writing under their hand strictly to the President.","They must simply stop attending the Rajya Sabha."],
        "correctAnswerIndex": 2,
        "explanation": "Article 67(a) specifies a very simple procedure:"
    },
    {
        "id": "ch19-l3-q12",
        "question": "Consider the scenario where the Vice-President is acting as President. If the Rajya Sabha needs to pass a Money Bill, who exactly signs the bill and transmits it?",
        "options": ["The Vice-President (now acting President) must come back to the Rajya Sabha to sign it.","The Speaker of the Lok Sabha automatically assumes jurisdiction.","The Deputy Chairman of the Rajya Sabha, who is performing the duties of the Chairman, manages the Rajya Sabha","The President"],
        "correctAnswerIndex": 2,
        "explanation": "A Money Bill is a Lok Sabha prerogative. The Rajya Sabha only gets 14 days to make recommendations. All internal procedures of the Rajya Sabha during the VP"
    },
    {
        "id": "ch19-l3-q13",
        "question": "If the Supreme Court strikes down the election of the Vice-President, can Parliament pass a law to retroactively validate the election and reverse the Supreme Court",
        "options": ["Yes, using a special constitutional amendment.","No, the Supreme Court","Yes, using an ordinary law passed by simple majority.","Yes, but only if the Election Commission agrees."],
        "correctAnswerIndex": 1,
        "explanation": "Article 71 specifically grants the Supreme Court original and exclusive jurisdiction over these specific election disputes. Their decision is final. Parliament cannot reverse this specific judicial finding regarding a specific individual"
    },
    {
        "id": "ch19-l3-q14",
        "question": "Assertion (A): The Vice-President is politically bound to support the legislative agenda of the Prime Minister",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. While politically nominated by parties, once elected, the VP (as Chairman of RS) is expected to be strictly non-partisan and uphold the rules of the House impartially, protecting the rights of the Opposition. He is not a member of the Cabinet and is not bound to push their agenda. He represents the dignity of the House."
    },
    {
        "id": "ch19-l3-q15",
        "question": "Examine the",
        "options": ["The President of India.","The Election Commission.","The Parliament.","The Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution leaves it to Parliament to legislate exemptions. Parliament has passed the"
    },
    {
        "id": "ch19-l3-q16",
        "question": "In the",
        "options": ["State Assemblies were deemed too corrupt to participate.","The President is the Head of State representing the federal structure (Centre and States). The Vice-President, However, exercises functions only at the Centre (presiding over RS or temporarily acting as President), making state involvement unnecessary and logistically burdensome.","State Assemblies demanded too high a price for their votes.","The British model strictly forbade local participation."],
        "correctAnswerIndex": 1,
        "explanation": "Ambedkar"
    },
    {
        "id": "ch19-l3-q17",
        "question": "What specific constitutional mechanism ensures the continuous management of the Rajya Sabha when both the offices of the Vice-President (Chairman) and the Deputy Chairman fall vacant simultaneously?",
        "options": ["The Rajya Sabha cannot meet until a new Chairman is elected.","The President appoints a member of the Rajya Sabha","to perform the duties of the office until the House elects a new Deputy Chairman.","The Speaker of the Lok Sabha automatically takes over.","The Secretary-General presides."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 91(1), if the offices of Chairman and Deputy Chairman are vacant, the duties of the office are performed by such member of the Rajya Sabha as the President may appoint for the purpose. This ensures the legislative branch never paralyzes completely."
    },
    {
        "id": "ch19-l3-q18",
        "question": "Assertion (A): Only a natural-born citizen of India is eligible for the office of Vice-President.\\nReason (R): Because higher constitutional offices must be shielded from those with acquired citizenship to prevent divided national loyalties.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The US Constitution requires the President/VP to be"
    },
    {
        "id": "ch19-l3-q19",
        "question": "Consider the",
        "options": ["To uphold the supremacy of the Parliament.","To",".","To","and to faithfully discharge the duty upon which he is about to enter.","To obey the President"],
        "correctAnswerIndex": 2,
        "explanation": "The VP"
    },
    {
        "id": "ch19-l3-q20",
        "question": "If a Member of Parliament (MP) is elected as Vice-President, when exactly does their seat in Parliament become officially vacant according to the Constitution?",
        "options": ["The moment the election results are announced.","Exactly 14 days after the election.","On the exact date on which they enter upon their office as Vice-President by taking the oath.","They are never allowed to contest while holding an MP seat."],
        "correctAnswerIndex": 2,
        "explanation": "Article 66(2) creates a"
    }
];

export const CHAPTER_19_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
