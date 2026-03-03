import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch18-l1-q1",
        "question": "Which part of the Constitution deals with the Union Executive, including the President of India?",
        "options": ["Part IV","Part V","Part VI","Part VII"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 52 to 78 in Part V of the Constitution deal with the Union executive. The Union executive consists of the President, the Vice-President, the Prime Minister, the council of ministers, and the attorney general of India."
    },
    {
        "id": "ch18-l1-q2",
        "question": "Who is considered the head of the Indian State and acts as the symbol of unity, integrity, and solidarity of the nation?",
        "options": ["The Prime Minister","The Chief Justice of India","The President","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "The President is the head of the Indian State. He is the first citizen of India and acts as the symbol of unity, integrity and solidarity of the nation."
    },
    {
        "id": "ch18-l1-q3",
        "question": "The President of India is not elected directly by the people. He is elected by an Electoral College. Which of the following is NOT a member of this Electoral College?",
        "options": ["Elected members of both the Houses of Parliament.","Elected members of the legislative assemblies of the states.","Nominated members of both the Houses of Parliament.","Elected members of the legislative assemblies of the Union Territories of Delhi and Puducherry."],
        "correctAnswerIndex": 2,
        "explanation": "The Electoral College consists ONLY of ELECTED members. It includes elected members of both Houses of Parliament, elected members of state legislative assemblies, and elected members of the legislative assemblies of Delhi, Puducherry, and Jammu & Kashmir. Nominated members do not participate."
    },
    {
        "id": "ch18-l1-q4",
        "question": "What is the system of election used for electing the President of India?",
        "options": ["First Past the Post system","Proportional representation by means of the single transferable vote","List system","Direct popular vote"],
        "correctAnswerIndex": 1,
        "explanation": "The President’s election is held in accordance with the system of proportional representation by means of the single transferable vote and the voting is by secret ballot."
    },
    {
        "id": "ch18-l1-q5",
        "question": "All doubts and disputes in connection with the election of the President are inquired into and decided by which authority?",
        "options": ["The Election Commission of India","The Parliament","The Supreme Court","The High Court of Delhi"],
        "correctAnswerIndex": 2,
        "explanation": "All doubts and disputes in connection with election of the President are inquired into and decided by the Supreme Court whose decision is final."
    },
    {
        "id": "ch18-l1-q6",
        "question": "Which of the following is a mandatory qualification to be eligible for election as President of India?",
        "options": ["He must have completed 30 years of age.","He must be a member of the Rajya Sabha.","He should be qualified for election as a member of the Lok Sabha.","He must hold an office of profit under the Government of India."],
        "correctAnswerIndex": 2,
        "explanation": "The qualifications for President are: citizen of India, completed 35 years of age, qualified for election as a member of the Lok Sabha, and should not hold any office of profit."
    },
    {
        "id": "ch18-l1-q7",
        "question": "What is the minimum age prescribed by the Constitution to be eligible for the office of the President?",
        "options": ["25 years","30 years","35 years","40 years"],
        "correctAnswerIndex": 2,
        "explanation": "A candidate must have completed 35 years of age to be eligible for election as President."
    },
    {
        "id": "ch18-l1-q8",
        "question": "Who administers the oath of office to the President of India?",
        "options": ["The Prime Minister","The outgoing President","The Chief Justice of India","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "The oath of office to the President is administered by the Chief Justice of India and in his absence, the senior-most judge of the Supreme Court available."
    },
    {
        "id": "ch18-l1-q9",
        "question": "What is the normal term of office for the President of India?",
        "options": ["4 years","5 years","6 years","7 years"],
        "correctAnswerIndex": 1,
        "explanation": "The President holds office for a term of five years from the date on which he enters upon his office."
    },
    {
        "id": "ch18-l1-q10",
        "question": "To whom does the President address his resignation letter if he wishes to resign before his term expires?",
        "options": ["The Prime Minister","The Chief Justice of India","The Vice-President","The Speaker of Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The President can resign from his office at any time by addressing the resignation letter to the Vice-President."
    },
    {
        "id": "ch18-l1-q11",
        "question": "What is the only ground mentioned in the Constitution for the impeachment of the President of India (Article 61)?",
        "options": ["Proved misbehaviour","Incapacity","Violation of the Constitution","Corruption"],
        "correctAnswerIndex": 2,
        "explanation": "The President can be removed from office by a process of impeachment for ‘violation of the Constitution’. However, the Constitution does not define the meaning of the phrase ‘violation of the Constitution’."
    },
    {
        "id": "ch18-l1-q12",
        "question": "In which House of Parliament can the impeachment charges against the President be initiated?",
        "options": ["Only in the Lok Sabha","Only in the Rajya Sabha","In either House of Parliament","In a joint sitting of Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The impeachment charges can be initiated by either House of Parliament. These charges should be signed by one-fourth members of the House (that framed the charges)."
    },
    {
        "id": "ch18-l1-q13",
        "question": "Before a resolution for the impeachment of the President can be moved, how many days",
        "options": ["7 days","14 days","21 days","30 days"],
        "correctAnswerIndex": 1,
        "explanation": "A 14 days’ notice should be given to the President before the resolution is moved."
    },
    {
        "id": "ch18-l1-q14",
        "question": "What type of majority is required in both Houses of Parliament to pass the impeachment resolution against the President?",
        "options": ["Simple majority","Absolute majority","Majority of two-thirds of the members present and voting","Majority of two-thirds of the total membership of that House"],
        "correctAnswerIndex": 3,
        "explanation": "The impeachment resolution must be passed by a majority of two-thirds of the *total membership* of that House. This is the strictest special majority in the Constitution."
    },
    {
        "id": "ch18-l1-q15",
        "question": "While nominated members of Parliament CANNOT vote in the election of the President, do they have a role in his impeachment?",
        "options": ["No, nominated members cannot participate in impeachment either.","Yes, nominated members of either House of Parliament can participate in the impeachment of the President.","Only nominated members of the Rajya Sabha can participate.","Only nominated members of the Lok Sabha can participate."],
        "correctAnswerIndex": 1,
        "explanation": "Nominated members of either House of Parliament can participate in the impeachment of the President though they do not participate in his election."
    },
    {
        "id": "ch18-l1-q16",
        "question": "If the office of the President falls vacant due to his death, resignation, or removal, an election to fill the vacancy must be held within what time limit?",
        "options": ["1 month","3 months","6 months","1 year"],
        "correctAnswerIndex": 2,
        "explanation": "An election to fill the vacancy must be held within six months from the date of the occurrence of such a vacancy."
    },
    {
        "id": "ch18-l1-q17",
        "question": "Who acts as the President of India when a vacancy occurs in the office of the President due to his death or resignation, until a new President is elected?",
        "options": ["The Chief Justice of India","The Prime Minister","The Speaker of the Lok Sabha","The Vice-President"],
        "correctAnswerIndex": 3,
        "explanation": "When a vacancy occurs in the office of the President due to his resignation, removal, death or otherwise, the Vice-President acts as the President until a new President is elected."
    },
    {
        "id": "ch18-l1-q18",
        "question": "If both the offices of the President and the Vice-President fall vacant simultaneously, who acts as the President?",
        "options": ["The Prime Minister","The Speaker of the Lok Sabha","The Chief Justice of India","The senior-most Governor of a State"],
        "correctAnswerIndex": 2,
        "explanation": "In case the office of Vice-President is vacant, the Chief Justice of India (or if his office is also vacant, the senior-most judge of the Supreme Court available) acts as the President."
    },
    {
        "id": "ch18-l1-q19",
        "question": "All executive actions of the Government of India are formally taken in whose name?",
        "options": ["The Prime Minister","The Parliament","The President","The Council of Ministers"],
        "correctAnswerIndex": 2,
        "explanation": "All executive actions of the Government of India are formally taken in his (the President"
    },
    {
        "id": "ch18-l1-q20",
        "question": "Who appoints the Prime Minister and the other ministers of the Union?",
        "options": ["The Parliament","The Chief Justice of India","The President","The Lok Sabha Speaker"],
        "correctAnswerIndex": 2,
        "explanation": "The President appoints the prime minister and the other ministers. They hold office during his pleasure."
    },
    {
        "id": "ch18-l1-q21",
        "question": "Who appoints the Attorney General of India and determines his remuneration?",
        "options": ["The Prime Minister","The Law Minister","The Chief Justice of India","The President"],
        "correctAnswerIndex": 3,
        "explanation": "The President appoints the attorney general of India and determines his remuneration. The attorney general holds office during the pleasure of the President."
    },
    {
        "id": "ch18-l1-q22",
        "question": "Which of the following is an integral part of the Parliament of India?",
        "options": ["The Prime Minister","The Chief Justice","The President","The Attorney General"],
        "correctAnswerIndex": 2,
        "explanation": "The President is an integral part of the Parliament of India, and enjoys extensive legislative powers (Article 79 states Parliament consists of the President and two Houses)."
    },
    {
        "id": "ch18-l1-q23",
        "question": "The President can nominate how many members to the Rajya Sabha from amongst persons having special knowledge or practical experience in literature, science, art, and social service?",
        "options": ["2","10","12","14"],
        "correctAnswerIndex": 2,
        "explanation": "The President nominates 12 members to the Rajya Sabha from amongst persons having special knowledge or practical experience in literature, science, art and social service."
    },
    {
        "id": "ch18-l1-q24",
        "question": "Article 123 empowers the President to promulgate ordinances. When can the President issue an ordinance?",
        "options": ["Only when the Lok Sabha is dissolved.","At any time, regardless of Parliament","Only when Parliament is NOT in session (i.e., when both Houses or either House is not in session).","Only during a National Emergency."],
        "correctAnswerIndex": 2,
        "explanation": "He can promulgate ordinances when the Parliament is not in session (Article 123). These ordinances have the same force and effect as an act of Parliament."
    },
    {
        "id": "ch18-l1-q25",
        "question": "What is the maximum lifespan of an ordinance issued by the President (without being approved by Parliament)?",
        "options": ["Six months","Six months and six weeks","One year","Three months"],
        "correctAnswerIndex": 1,
        "explanation": "Every ordinance must be approved by Parliament within six weeks of its reassembly. The maximum gap between two sessions of Parliament is six months. Hence, the maximum life of an ordinance is six months and six weeks."
    },
    {
        "id": "ch18-l1-q26",
        "question": "No money bill can be introduced in the Parliament except on the recommendation of:",
        "options": ["The Finance Minister","The Prime Minister","The Speaker of the Lok Sabha","The President"],
        "correctAnswerIndex": 3,
        "explanation": "Money bills can be introduced in the Parliament only with the prior recommendation of the President. (Financial Powers)."
    },
    {
        "id": "ch18-l1-q27",
        "question": "Who is the supreme commander of the defence forces of India?",
        "options": ["The Chief of Defence Staff","The Defence Minister","The Prime Minister","The President"],
        "correctAnswerIndex": 3,
        "explanation": "The President is the supreme commander of the defence forces of India. In that capacity, he appoints the chiefs of the Army, the Navy and the Air Force. (Military Powers)."
    },
    {
        "id": "ch18-l1-q28",
        "question": "Article 72 empowers the President to grant pardons, reprieves, respites, and remissions. Can the President pardon a death sentence?",
        "options": ["No, only the Supreme Court can pardon a death sentence.","Yes, the President is the only authority in India who can pardon a death sentence.","Yes, but only if the crime was committed during a war.","No, the pardoning power does not cover capital punishment."],
        "correctAnswerIndex": 1,
        "explanation": "The President can grant pardon, etc., in all cases where the sentence is a sentence of death. (He is the only authority to pardon a death sentence)."
    },
    {
        "id": "ch18-l1-q29",
        "question": "When a bill is passed by Parliament and sent to the President, he has three alternatives under Article 111. Which veto power allows the President to withhold his assent to a bill, thus ending it completely?",
        "options": ["Suspensive Veto","Pocket Veto","Absolute Veto","Qualified Veto"],
        "correctAnswerIndex": 2,
        "explanation": "Absolute veto refers to the power of the President to withhold his assent to a bill passed by the Parliament. The bill then ends and does not become an act."
    },
    {
        "id": "ch18-l1-q30",
        "question": "Does the President of India enjoy a",
        "options": ["Yes, he uses it for constitutional amendment bills.","Yes, he uses it for ordinary bills.","No, there is no qualified veto in the case of the Indian President; it is possessed by the American President.","Yes, but only during an emergency."],
        "correctAnswerIndex": 2,
        "explanation": "The Indian President has Absolute, Suspensive, and Pocket vetos. There is no qualified veto in the case of the Indian President; it is possessed by the American President."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch18-l2-q1",
        "question": "Consider the composition of the Electoral College for the President. Why did the framers of the Constitution deliberately exclude the members of the State Legislative Councils (the upper houses found in some states) from voting in the Presidential election?",
        "options": ["Because they are purely advisory bodies and lack any real constitutional power.","Because only a few states are bicameral (have Legislative Councils). Including them would violate the principle of uniformity and parity of voting weightage across all states.","Because they are entirely composed of nominated members chosen by the Governor.","Because their terms are shorter than that of the Legislative Assemblies."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution mandates"
    },
    {
        "id": "ch18-l2-q2",
        "question": "Calculate the value of the vote of an MLA in the Presidential election. The formula divides the total population of the state by the total number of elected members in the state legislative assembly, and then divides that quotient by 1,000. Which",
        "options": ["The 1951 Census","The 1971 Census","The 2001 Census","The 2011 Census"],
        "correctAnswerIndex": 1,
        "explanation": "To prevent financially freezing states (especially in the South) that successfully implemented family planning from losing political weightage in the Electoral College, the 42nd (and later the 84th) Amendment froze the population figures using the 1971 census. This freeze stands until the first census taken after the year 2026 is published."
    },
    {
        "id": "ch18-l2-q3",
        "question": "Examine the",
        "options": ["To ensure the election process takes longer than a week.","To prevent the Election Commission from manipulating the results.","To ensure that the winning candidate secures an absolute majority (more than 50% of the votes cast), proving they have the broad, national consensus required for the Head of State, rather than just a simple plurality.","To allow candidates with the least votes to win based on second preferences."],
        "correctAnswerIndex": 2,
        "explanation": "In a First-Past-The-Post system (like Lok Sabha elections), a candidate can win with just 30% of the vote if everyone else gets less. A Head of State, however, must symbolize national unity. The"
    },
    {
        "id": "ch18-l2-q4",
        "question": "If a sitting Member of Parliament (MP) or a Member of the State Legislative Assembly (MLA) is successfully elected as the President of India, what is the constitutional procedure regarding their previous seat?",
        "options": ["They are allowed to hold both positions concurrently.","They must formally submit a resignation letter from their MP/MLA seat before taking the Presidential oath.","They are *deemed* to have vacated their seat in that House automatically on the exact date on which they enter upon the office as President.","They retain their seat but their voting rights in the House are suspended."],
        "correctAnswerIndex": 2,
        "explanation": "Article 59(1) of the Constitution is clear. A President cannot be a member of either House of Parliament or a State Legislature. If such a member is elected President, the Constitution employs a legal fiction: they don"
    },
    {
        "id": "ch18-l2-q5",
        "question": "Analyze the Impeachment procedure (Article 61). Why is the impeachment of the Indian President considered a",
        "options": ["Because the Chief Justice of India presides exactly like a criminal trial.","Because the President is actively arrested and jailed during the process.","Because while it occurs within the political arena of the Parliament, it involves formal, legal-style investigation where the House framing the charges acts as the prosecutor, and the other House physically investigates the charges (or appoints a tribunal), allowing the President the right to appear and be legally represented.","Because the final vote is cast not by MPs, but by all High Court judges."],
        "correctAnswerIndex": 2,
        "explanation": "Impeachment is not a simple"
    },
    {
        "id": "ch18-l2-q6",
        "question": "If the Supreme Court declares the election of a person as the President of India to be completely void, what happens to the official actions and bills signed by that person during the period they acted as President?",
        "options": ["All actions are retroactively declared illegal and nullified.","Only the actions taken in the week preceding the Supreme Court verdict are nullified.","The acts done by him in the performance of his duties of the office of President before the date of the declaration of his election as void remain perfectly valid and continue to remain in force.","The Vice-President must review and approve all previous actions."],
        "correctAnswerIndex": 2,
        "explanation": "This is a stabilizing constitutional principle (the"
    },
    {
        "id": "ch18-l2-q7",
        "question": "The President wields immense executive power (Article 53). However, Article 74 heavily restricts this power, mandating that the President SHALL act in accordance with the aid and advice of the Council of Ministers headed by the Prime Minister. What singular, crucial check does the President possess regarding this binding advice (introduced by the 44th Amendment Act)?",
        "options": ["The President can reject the advice completely and fire the Prime Minister.","The President can refer the advice to the Supreme Court for an advisory opinion.","The President can require the Council of Ministers to reconsider such advice (either generally or otherwise). But if the Council resubmits the same advice after reconsideration, the President is absolutely bound to act in accordance with it.","The President can refer the advice to the United Nations."],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment made the PM"
    },
    {
        "id": "ch18-l2-q8",
        "question": "Evaluate the",
        "options": ["The Indian President is older, inherently granting more time.","The United States Constitution mandates that the President must return a bill for reconsideration within a strict 10-day period. The Indian Constitution, remarkably, prescribes no specific time limit within which the President must declare his assent or return the bill.","The Indian President can use the Pocket Veto on Constitutional Amendments, unlike the US President.","The Indian Parliament rarely meets, allowing bills to easily lapse."],
        "correctAnswerIndex": 1,
        "explanation": "A Pocket Veto means doing absolutely nothing—neither signing nor actively returning the bill. The US President must decide within 10 days. The Indian Constitution (Article 111) simply says"
    },
    {
        "id": "ch18-l2-q9",
        "question": "Regarding",
        "options": ["He can only hold it for a maximum of 6 months.","He must sign it if the State legislature passes it a second time.","He possesses an absolute veto over state bills. Even if he returns the bill for reconsideration and the state legislature passes it again and resubmits it, the President is STILL not constitutionally bound to give his assent.","He can only exercise a pocket veto on state bills."],
        "correctAnswerIndex": 2,
        "explanation": "This is a massive unitary feature destroying state legislative autonomy. With a *Parliamentary* bill, if the President returns it and Parliament repasses it, he MUST sign it (Suspensive Veto). But with a *State* bill reserved for him, if he returns it, and the State Assembly stubbornly repasses it and sends it back to Delhi, the President is NOT obligated to sign it. He can kill it absolutely."
    },
    {
        "id": "ch18-l2-q10",
        "question": "Analyze the nature of the President",
        "options": ["No, it is strictly subjected to the advice of the Supreme Court.","Yes, ordinances are permanent and legally superior to Parliamentary Acts.","No, it is a co-extensive and temporary power. His power is co-extensive with the legislative power of Parliament (he can only issue ordinances on subjects Parliament can legislate on), and it is temporary because it MUST be laid before Parliament when it reassembles.","Yes, he uses it to directly rewrite state legislative lists."],
        "correctAnswerIndex": 2,
        "explanation": "The President is not a dictator. The Ordinance-making power is an emergency mechanism designed to deal with unforeseen crises merely because Parliament is physically not in session. It is"
    },
    {
        "id": "ch18-l2-q11",
        "question": "Assertion (A): The President of India is immune from any criminal proceedings, including arrest or imprisonment, during his term of office.\\nReason (R): Because the Constitution completely places the President above the law to ensure the dignity of the highest office is never tarnished by malicious local police forces.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is completely true. Article 361 provides absolute personal immunity from criminal proceedings to the President and Governors during their term. However, Reason (R) is false. The President is NOT"
    },
    {
        "id": "ch18-l2-q12",
        "question": "While the President is immune from criminal proceedings during his term, can civil proceedings (e.g., a massive lawsuit regarding his private property disputes) be initiated against him during his term regarding acts done in his personal capacity?",
        "options": ["No, civil proceedings are also absolutely barred.","Yes, civil proceedings can be instituted instantly like any ordinary citizen.","Yes, civil proceedings regarding his personal acts can be instituted, BUT only after serving a two-month formal written notice outlining the proceedings.","Yes, but only if the Supreme Court grants permission."],
        "correctAnswerIndex": 2,
        "explanation": "The immunity regarding *civil* cases for *personal* acts is not absolute. If the President refuses to pay a personal debt, they can be sued while in office. However, to prevent frivolous harassment of the Head of State, Article 361(4) mandates a cooling-off period: the plaintiff must deliver a written notice detailing the claim and wait two full months before filing the lawsuit in an actual court."
    },
    {
        "id": "ch18-l2-q13",
        "question": "Consider the President",
        "options": ["A Simple majority (majority of members present and voting).","An Absolute majority (majority of the total membership).","A Special majority (2/3rds present and voting).","A Unanimous majority."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the US President, whose veto requires a massive 2/3rds supermajority in Congress to override, the Indian President"
    },
    {
        "id": "ch18-l2-q14",
        "question": "The President has no veto power in respect of a Constitutional Amendment Bill. This absolute obligation to give assent to Constitutional Amendment Bills was introduced by which Constitutional Amendment?",
        "options": ["The 1st Amendment Act (1951)","The 24th Amendment Act (1971)","The 42nd Amendment Act (1976)","The 44th Amendment Act (1978)"],
        "correctAnswerIndex": 1,
        "explanation": "Under the original Constitution, there was ambiguity regarding amending bills. The 24th Amendment Act of 1971 definitively altered Article 368, making it obligatory and mandatory for the President to give his assent to a Constitutional Amendment Bill once duly passed by Parliament."
    },
    {
        "id": "ch18-l2-q15",
        "question": "What is the crucial limitation placed upon the President’s Ordinance-making power (Article 123) concerning the Fundamental Rights enshrined in Part III of the Constitution?",
        "options": ["Ordinances can temporarily suspend Fundamental Rights if national security demands it.","An ordinance is legally inferior to a Parliamentary Act, and thus cannot touch Fundamental Rights under any circumstances.","An ordinance cannot be issued to abridge or take away any of the Fundamental Rights. If an ordinance violates Fundamental Rights, it is wholly void, exactly like a regular law passed by Parliament.","An ordinance can abridge Fundamental Rights, but only Article 19."],
        "correctAnswerIndex": 2,
        "explanation": "An ordinance promulgated by the President has the *same force and effect* as an Act of Parliament (Art 123(2)). It is subject to the exact same constitutional limitations as an Act of Parliament. Therefore, under Article 13(2), an ordinance cannot take away or abridge Fundamental Rights. If it does, the Supreme Court will strike it down."
    },
    {
        "id": "ch18-l2-q16",
        "question": "Can an Ordinance issued by the President be retrospective (having effect from a date in the past)?",
        "options": ["No, an ordinance can only have prospective effect.","Yes, an ordinance can be retrospective, and it can even modify or repeal an Act of Parliament or another existing ordinance.","Yes, but it can only be retrospective regarding civil laws, never criminal or taxation laws.","No, giving retrospective effect requires a formal constitutional amendment."],
        "correctAnswerIndex": 1,
        "explanation": "An ordinance has the exact same status as an Act of Parliament. Just as Parliament can pass retrospective legislation (especially common in taxation), the President can promulgate a retrospective ordinance. It can also amend or repeal an existing law passed by Parliament."
    },
    {
        "id": "ch18-l2-q17",
        "question": "Considering the pardoning power of the President (Article 72) and the Governor (Article 161), identify the correct statement regarding their comparative jurisdiction.",
        "options": ["Both possess identical powers, but the Governor","The Governor can pardon a death sentence if given by a State High Court, but cannot pardon Court Martial sentences.","The President can pardon sentences inflicted by a Court Martial (military court) and is the only authority who can pardon a death sentence. The Governor possesses neither of these two specific powers.","The President can grant pardon only in criminal cases, while the Governor can grant pardon in civil cases."],
        "correctAnswerIndex": 2,
        "explanation": "This highlights the President"
    },
    {
        "id": "ch18-l2-q18",
        "question": "Assertion (A): The President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are firmly FALSE. In Cooper case (1970) and definitively in D.C. Wadhwa case (1987), the Supreme Court ruled that the President"
    },
    {
        "id": "ch18-l2-q19",
        "question": "What specific constitutional mechanism ensures that the President, despite being the executive head, remains informed but powerless to unilaterally dictate the day-to-day governance undertaken by the Prime Minister?",
        "options": ["Article 142 gives the Supreme Court the right to monitor communications between the PM and President.","Article 78 imposes a positive duty on the Prime Minister to spontaneously communicate all decisions of the Council of Ministers to the President, and allows the President to call for specific information, ensuring the President is an informed advisor, not a blind rubber stamp.","The President is required to attend all Cabinet meetings.","The PM must submit his diary to the President daily."],
        "correctAnswerIndex": 1,
        "explanation": "The Prime Minister isn"
    },
    {
        "id": "ch18-l2-q20",
        "question": "Under the concept of",
        "options": ["During a National Emergency.","When the incumbent Prime Minister loses an election but refuses to resign.","When no single political party has a clear, absolute majority in the Lok Sabha after a general election (a","), or when the PM in office dies suddenly leaving no obvious successor.","When a new Chief Justice of India is appointed."],
        "correctAnswerIndex": 2,
        "explanation": "Usually, the President MUST appoint the leader of the majority party as PM; it is an automatic mathematical duty. But a"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch18-l3-q1",
        "question": "Analyze the intersection of the President",
        "options": ["The length of the sentence being pardoned.","The personal moral beliefs of the President regarding the death penalty.","Whether the pardon was granted on considerations that were wholly irrelevant, irrational, discriminatory, or mala fide (e.g., granting clemency purely for political/caste reasons rather than penological facts).","The specific section of the IPC under which the convict was sentenced."],
        "correctAnswerIndex": 2,
        "explanation": "The pardoning power is not an arbitrary, unreviewable royal prerogative. The SC held it is an executive function, subject to judicial review. If the Cabinet advises a pardon purely to win a caste vote-bank (mala fide) or ignores the brutal facts of the crime, the Court can strike down the Presidential pardon, forcing the executive to reconsider objectively."
    },
    {
        "id": "ch18-l3-q2",
        "question": "Consider the constitutional paradox of the",
        "options": ["Because the President is immune from all laws.","Because the Supreme Court automatically protects the President.","Because under Article 74, the President is merely a constitutional rubber stamp bound by the advice of the Prime Minister’s Cabinet. Any unconstitutional act is truly the act of the Cabinet, making the President legally unaccountable for the content of the action, transferring political culpability entirely to the Prime Minister.","Because impeachment requires the UN"],
        "correctAnswerIndex": 2,
        "explanation": "This is a profound nuance of Indian Parliamentary democracy. The President never acts alone. He acts on the PM"
    },
    {
        "id": "ch18-l3-q3",
        "question": "Examine the mechanics of the President",
        "options": ["An ordinance completely replaces existing Parliamentary laws permanently.","An ordinance cannot be issued on subjects in the Concurrent List.","An ordinance cannot be used to amend the Constitution itself. The power under Article 368 resides exclusively within the constituent power of the two Houses of Parliament, not the legislative power of the executive.","An ordinance requires the prior permission of the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "While an ordinance has the force of an Act, it is a tool of ordinary legislation. Changing the Basic Structure or textual Constitution (amending Article 368) requires a special constituent process debating the very fabric of the nation. The President cannot unilaterally rewrite the Constitution via an overnight executive decree, even if Parliament is in recess."
    },
    {
        "id": "ch18-l3-q4",
        "question": "Assertion (A): If the Union Cabinet resigns immediately after advising the President to dissolve the Lok Sabha, the President must dissolve the house but is not constitutionally bound to accept their subsequent advice to remain in office as an interim",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are firmly FALSE. In U.N.R. Rao v. Indira Gandhi (1971), the Supreme Court ruled that Article 74 is mandatory. There MUST always be a Council of Ministers to"
    },
    {
        "id": "ch18-l3-q5",
        "question": "In the context of",
        "options": ["When the PM becomes unpopular in media polls.","When the President subjectively uncovers massive corruption in the PMO.","When the Prime Minister unambiguously fails to prove his majority in a legally mandated floor test in the Lok Sabha (a vote of no-confidence) and stubbornly refuses to tender his resignation.","When the Rajya Sabha passes an impeachment motion against the PM."],
        "correctAnswerIndex": 2,
        "explanation": "The President cannot sack a PM just because he dislikes him. As long as the PM commands the"
    },
    {
        "id": "ch18-l3-q6",
        "question": "Analyze the difference in",
        "options": ["Because Presidents were using pocket vetoes too frequently.","To prevent the President from acting as a third, un-elected, conservative chamber of Parliament capable of blocking massive, progressive socio-economic restructuring (like abolishing Privy Purses or land reforms) that required amending the Constitution.","To align with the British monarchy","To give the Rajya Sabha ultimate veto power."],
        "correctAnswerIndex": 1,
        "explanation": "In the 1970s, Indira Gandhi was pushing radical socialist amendments overturning Supreme Court judgements (Golaknath, Bank Nationalization). She feared a conservative President might use a suspensive or pocket veto to delay or kill these vital constitutional changes. The 24th Amendment legally neutered the President:"
    },
    {
        "id": "ch18-l3-q7",
        "question": "Consider the President",
        "options": ["Private Member","State Reorganization Bills","Money Bills","Ordinary Bills originating in the Rajya Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The President cannot use the"
    },
    {
        "id": "ch18-l3-q8",
        "question": "Examine the doctrine of",
        "options": ["It is the personal, subjective happiness of the President.","It is a legal fiction;","is actually entirely contingent upon the Prime Minister continuing to enjoy the","(majority) of the Lok Sabha. The President’s pleasure is simply the formal expression of the Lok Sabha","It depends on the unreviewable discretion of the Supreme Court.","It requires the consent of all State Governors."],
        "correctAnswerIndex": 1,
        "explanation": "This is a core convention. The President cannot wake up unhappy and decide to sack the Finance Minister. Ministers hold office during the"
    },
    {
        "id": "ch18-l3-q9",
        "question": "Regarding",
        "options": ["If the bill alters state taxes.","If the bill touches upon subjects in the Concurrent List.","If the bill contains provisions which in the opinion of the Governor would so derogate from the powers of the State High Court as to endanger the position which that Court is by this Constitution designed to fill.","If the bill renames a state capital."],
        "correctAnswerIndex": 2,
        "explanation": "This is a fundamental safeguard for judicial independence in federalism. A state legislature (acting out of malice or control) might pass a law trying to strip its own High Court of jurisdiction over local matters. To prevent this constitutional sabotage, Art 200 legally compels the Governor to immediately freeze the bill and send it to the President (the Centre), who acts as the protector of the unified judicial framework."
    },
    {
        "id": "ch18-l3-q10",
        "question": "Assertion (A): The President can exercise his",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is the brilliant loophole of the Pocket Veto. Art 74 binds the President"
    },
    {
        "id": "ch18-l3-q11",
        "question": "Consider the President",
        "options": ["The President can declare war unilaterally, but peace requires Parliament","The President must personally lead troops on the battlefield.","The","is subject to legislative control. The President cannot unilaterally declare war or deploy troops without the vast statutory framework, funding, and ultimately political approval (via the Cabinet) provided by Parliament.","The President","s review."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the historical absolute monarchs, the Indian President is a civilian figurehead of the military. He cannot wake up and order a nuclear strike. His"
    },
    {
        "id": "ch18-l3-q12",
        "question": "Examine the role of the President regarding the appointment of the Chief Justice of India (CJI). While Article 124 states the President appoints the judges",
        "options": ["The President can ignore the collegium and appoint anyone based on the PM","The President is bound solely by the singular, subjective opinion of the outgoing CJI.","The","genuinely means",". The President is absolutely bound by the final recommendation of a collegium comprising the CJI and the four senior-most judges of the Supreme Court.","The President must hold a national referendum for Supreme Court appointments."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court re-interpreted the Constitution to protect its independence. The"
    },
    {
        "id": "ch18-l3-q13",
        "question": "Calculate the mathematical precision of the Electoral College. In the formula for the value of an MLA",
        "options": ["To make the arithmetic deliberately complex to prevent fraud.","To ensure that heavier taxation states get more voting power.","To secure uniformity among the States inter se; it ensures that the vote of an MLA from a massively populous state (like UP) carries mathematically heavier","in the Electoral College than the vote of an MLA from a tiny state (like Sikkim), maintaining the","principle nationally.","To ensure urban MLAs get more votes than rural MLAs."],
        "correctAnswerIndex": 2,
        "explanation": "If every MLA had exactly 1 vote, Sikkim (representing 6 lakh people with 32 MLAs) would possess massively disproportionate sway compared to UP (representing 20 crore people with 403 MLAs). The formula derives a"
    },
    {
        "id": "ch18-l3-q14",
        "question": "Assertion (A): Not all bills passed by the Parliament require the formal assent of the President to become an Act.\\nReason (R): Because Money Bills, having already received the President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are completely FALSE. Article 111 is absolute. EVERY bill passed by Parliament (Ordinary, Money, Financial, or Constitutional Amendment) MUST be presented to the President for his assent. Without the President"
    },
    {
        "id": "ch18-l3-q15",
        "question": "Consider the",
        "options": ["Because the Supreme Court must first give an advisory opinion.","Because the Constitution provides only ONE explicit ground (","), and initiating the charge itself requires a massive, immediate hurdle: 1/4th of the total membership of the initiating House must formally sign the written notice.","Because the Prime Minister has veto power over impeachment motions.","Because impeachment requires the UN"],
        "correctAnswerIndex": 1,
        "explanation": "The framers designed impeachment to be excruciatingly difficult to prevent political vengeance against the Head of State. You need 25% of the Lok Sabha (135+ MPs) or Rajya Sabha just to *introduce* the preliminary charges for debate, before even reaching the investigation and the massive 2/3rds total majority votes required to actually convict."
    },
    {
        "id": "ch18-l3-q16",
        "question": "What is the constitutional significance of Article 143 (Advisory Jurisdiction)? It allows the President to seek the opinion of the Supreme Court on questions of law or fact. Is the Supreme Court constitutionally bound to provide the answer?",
        "options": ["Yes, always binding.","No, the Supreme Court is never bound to answer.","If the question entails a pre-constitutional treaty or agreement, the Supreme Court MUST tender its opinion. On other general questions of public importance, the Supreme Court may decline to tender an opinion (as it did in the Ayodhya reference).","The Supreme Court can only advise if the Prime Minister requests it."],
        "correctAnswerIndex": 2,
        "explanation": "Art 143 has two clauses. For everyday complex legal questions (like the 2G spectrum auction legality), the SC can politely refuse to answer. However, for disputes arising out of pre-Constitution treaties (which are usually barred from the SC"
    },
    {
        "id": "ch18-l3-q17",
        "question": "In the event the President uses an",
        "options": ["The President is acting illegally against the Constitution.","The President is usually vetoing a","s Bill","t support, OR a new Cabinet has come to power while the bill is pending assent and they advise the President to veto the previous government","The President is acting on the advice of the Supreme Court.","The President is using his pocket veto simultaneously."],
        "correctAnswerIndex": 1,
        "explanation": "It seems contradictory: Parliament (controlled by the PM) passes a bill, then the PM"
    },
    {
        "id": "ch18-l3-q18",
        "question": "Examine the",
        "options": ["They are perpetually valid without any further review.","They must be ratified by the United Nations instantly.","They are inherently subject to the approval of the Parliament. The President’s signature alone on an international treaty does not automatically make its domestic enforcement legally binding without Parliamentary enabling legislation (Article 253).","They must be ratified by the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "The President heads international diplomacy, but India is a dualist state. A treaty signed by the President in Geneva doesn"
    },
    {
        "id": "ch18-l3-q19",
        "question": "Assertion (A): The President of India possesses the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are fundamentally FALSE regarding the Indian Constitution. The Indian President DOES NOT have a Line-Item Veto (which some US Governors possess). If Parliament sends a 500-page bill, the President must accept it entirely or reject it entirely (or return the whole thing). He cannot surgically redact individual lines or clauses."
    },
    {
        "id": "ch18-l3-q20",
        "question": "Consider the unique aspect of the Presidential Oath (Article 60). While Ministers swear to bear true faith and allegiance to the Constitution, the President takes a distinct, elevated oath. What is the explicit phrasing in the President",
        "options": ["To uphold the sovereignty of the Parliament over the Judiciary.","To promote international peace and security constantly.","To",", making him the ultimate constitutional guardian alongside the Supreme Court.","To obey the advice of the Prime Minister unconditionally."],
        "correctAnswerIndex": 2,
        "explanation": "This specific phrase ("
    }
];

export const CHAPTER_18_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
