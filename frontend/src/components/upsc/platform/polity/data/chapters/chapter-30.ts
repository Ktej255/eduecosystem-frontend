import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch30-l1-q1",
        "question": "Articles 153 to 167 in Part VI of the Constitution deal with the:",
        "options": ["State Legislature","State Executive","High Courts","Subordinate Courts"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 153 to 167 in Part VI of the Constitution deal with the state executive, which consists of the governor, the chief minister, the council of ministers and the advocate general of the state."
    },
    {
        "id": "ch30-l1-q2",
        "question": "Usually, there is a governor for each state. However, which Constitutional Amendment Act facilitated the appointment of the same person as a governor for two or more states?",
        "options": ["1st Amendment Act of 1951","7th Amendment Act of 1956","42nd Amendment Act of 1976","44th Amendment Act of 1978"],
        "correctAnswerIndex": 1,
        "explanation": "The 7th Constitutional Amendment Act of 1956 facilitated the appointment of the same person as a governor for two or more states."
    },
    {
        "id": "ch30-l1-q3",
        "question": "The Governor of a State is appointed by the:",
        "options": ["Chief Justice of India","President by warrant under his hand and seal","Prime Minister","Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The governor is neither directly elected by the people nor indirectly elected by a specially constituted electoral college. He is appointed by the president by warrant under his hand and seal."
    },
    {
        "id": "ch30-l1-q4",
        "question": "The Constituent Assembly adopted the system of appointing the Governor by the President (Centre",
        "options": ["USA","Canada","Australia","Ireland"],
        "correctAnswerIndex": 1,
        "explanation": "The Draft Constitution provided for the direct election of the governor on the basis of universal adult suffrage. But the Constituent Assembly opted for the present system of appointment of governor by the president, following the Canadian model."
    },
    {
        "id": "ch30-l1-q5",
        "question": "The Constitution lays down only two qualifications for the appointment of a person as a Governor. He should be a citizen of India and he should have completed the age of:",
        "options": ["30 years","35 years","40 years","25 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution lays down only two qualifications for the appointment of a person as a governor: 1. He should be a citizen of India. 2. He should have completed the age of 35 years."
    },
    {
        "id": "ch30-l1-q6",
        "question": "Additionally, two conventions have developed over the years regarding the appointment of a Governor. One is that he should be an",
        "options": ["He should be a retired civil servant.","The President is required to consult the Chief Minister of the state concerned to ensure smooth functioning of the constitutional machinery in the state.","He should be an eminent lawyer or judge.","He should have absolutely no political affiliation past or present."],
        "correctAnswerIndex": 1,
        "explanation": "The two conventions are: 1. He should be an outsider. 2. While appointing the governor, the president is required to consult the chief minister of the state concerned."
    },
    {
        "id": "ch30-l1-q7",
        "question": "One of the conditions of the Governor",
        "options": ["The date of his appointment.","The date on which he enters upon his office.","The date of submitting his formal resignation.","Within 6 months of his appointment."],
        "correctAnswerIndex": 1,
        "explanation": "If any such person is appointed as governor, he is deemed to have vacated his seat in that House on the date on which he enters upon his office as the governor."
    },
    {
        "id": "ch30-l1-q8",
        "question": "The emoluments and allowances of the Governor are determined by the:",
        "options": ["President","Parliament","State Legislature","Consolidated Fund of India independently"],
        "correctAnswerIndex": 1,
        "explanation": "He is entitled to such emoluments, allowances and privileges as may be determined by Parliament."
    },
    {
        "id": "ch30-l1-q9",
        "question": "When the same person is appointed as the governor of two or more states, the emoluments and allowances payable to him are shared by the states in such proportion as determined by the:",
        "options": ["Parliament","President","NITI Aayog","Inter-State Council"],
        "correctAnswerIndex": 1,
        "explanation": "When the same person is appointed as the governor of two or more states, the emoluments and allowances payable to him are shared by the states in such proportion as determined by the president."
    },
    {
        "id": "ch30-l1-q10",
        "question": "The Governor holds office for a term of five years. However, this term is subject to the pleasure of the:",
        "options": ["Prime Minister","President","Chief Minister","Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "A governor holds office for a term of five years from the date on which he enters upon his office. However, this term of five years is subject to the pleasure of the president."
    },
    {
        "id": "ch30-l1-q11",
        "question": "Does the Constitution mention any specific grounds upon which the Governor may be removed by the President?",
        "options": ["Yes,",".","Yes,",".","No, the Constitution does not lay down any grounds upon which a governor may be removed by the President.","Yes,","."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not lay down any grounds upon which a governor may be removed by the president. He holds office entirely during the pleasure of the president."
    },
    {
        "id": "ch30-l1-q12",
        "question": "The President may transfer a Governor appointed to one state to another state for the rest of the term. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, the President may transfer a Governor appointed to one state to another state for the rest of the term."
    },
    {
        "id": "ch30-l1-q13",
        "question": "Can the Governor resign from his office before his five-year term is complete?",
        "options": ["No, he must complete the term.","Yes, by addressing a resignation letter to the President.","Yes, by addressing a resignation letter to the Chief Justice of the High Court.","Yes, by addressing a resignation letter to the Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "The governor can resign at any time by addressing a resignation letter to the president."
    },
    {
        "id": "ch30-l1-q14",
        "question": "All executive actions of the government of a state are formally taken in the name of the:",
        "options": ["Chief Minister","Governor","President","Chief Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "All executive actions of the government of a state are formally taken in his (Governor"
    },
    {
        "id": "ch30-l1-q15",
        "question": "Apart from the Chief Minister and the council of ministers, which of the following significant state officials are appointed by the Governor?",
        "options": ["Advocate General of the state","State Election Commissioner","Chairman and members of the State Public Service Commission","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The Governor appoints the chief minister, other ministers, the advocate general of a state, the state election commissioner, and the chairman and members of the state public service commission."
    },
    {
        "id": "ch30-l1-q16",
        "question": "The Advocate General of a state holds office during the pleasure of the Governor. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "The Advocate General holds office during the pleasure of the governor."
    },
    {
        "id": "ch30-l1-q17",
        "question": "The State Election Commissioner is appointed by the Governor. How can the State Election Commissioner be removed from office?",
        "options": ["Only in like manner and on like grounds as a Judge of a High Court.","By the Governor at any time (holds office during the pleasure of the Governor).","By the Chief Minister passing an executive order.","Only in like manner and on like grounds as a District Judge."],
        "correctAnswerIndex": 0,
        "explanation": "He appoints the state election commissioner... However, the state election commissioner can be removed only in like manner and on the like grounds as a judge of a high court."
    },
    {
        "id": "ch30-l1-q18",
        "question": "The Chairman and members of the State Public Service Commission (SPSC) are appointed by the Governor. Who holds the power to *remove* them?",
        "options": ["The Governor","The President","The Chief Justice of the State High Court","The State Legislature through a resolution"],
        "correctAnswerIndex": 1,
        "explanation": "He appoints the chairman and members of the state public service commission. However, they can be removed only by the president and not by a governor."
    },
    {
        "id": "ch30-l1-q19",
        "question": "The Governor can recommend the imposition of constitutional emergency (President",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "He can recommend the imposition of constitutional emergency in a state to the president. During the period of President"
    },
    {
        "id": "ch30-l1-q20",
        "question": "What is the standard role of the Governor concerning universities in the state?",
        "options": ["He acts as the Chancellor of universities in the state and appoints the Vice-Chancellors.","He acts as the Vice-Chancellor of the largest university.","He has no role; the Chief Minister is exclusively the Chancellor.","He acts as the chief accountant for university funds."],
        "correctAnswerIndex": 0,
        "explanation": "He acts as the chancellor of universities in the state. He also appoints the vice-chancellors of universities in the state."
    },
    {
        "id": "ch30-l1-q21",
        "question": "The Governor is an integral part of the state legislature, even though he is not a member of either House. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "A governor is an integral part of the state legislature. In that capacity, he has multiple legislative powers."
    },
    {
        "id": "ch30-l1-q22",
        "question": "Regarding the sessions of the state legislature, the Governor has the power to:",
        "options": ["Summon the state legislature.","Prorogue the state legislature.","Dissolve the state legislative assembly.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "He can summon or prorogue the state legislature and dissolve the state legislative assembly."
    },
    {
        "id": "ch30-l1-q23",
        "question": "Historically (before the 104th Amendment Act, 2019 abolished it), the Governor had the power to nominate one member to the state legislative assembly from which community?",
        "options": ["Scheduled Tribes","Scheduled Castes","Anglo-Indian Community","Jain Community"],
        "correctAnswerIndex": 2,
        "explanation": "He can nominate one member to the state legislative assembly from the Anglo-Indian Community. (Note: This provision was discontinued in 2020 by the 104th Amendment Act, 2019)."
    },
    {
        "id": "ch30-l1-q24",
        "question": "In states that have a bicameral legislature, the Governor nominates a fraction of the members of the State Legislative Council from amongst persons having special knowledge in Literature, Science, Art, Cooperative Movement, and Social Service. What is this fraction?",
        "options": ["1/3rd","1/6th","1/12th","1/10th"],
        "correctAnswerIndex": 1,
        "explanation": "He can nominate one-sixth (1/6) of the members of the state legislative council from amongst persons having special knowledge or practical experience in literature, science, art, cooperative movement and social service."
    },
    {
        "id": "ch30-l1-q25",
        "question": "When a bill is passed by the state legislature and sent to the Governor for assent, which of the following is an option available to him (assuming it is an ordinary bill)?",
        "options": ["Give his assent to the bill.","Withhold his assent to the bill.","Return the bill for reconsideration of the state legislature.","Reserve the bill for the consideration of the President.","All of the above."],
        "correctAnswerIndex": 4,
        "explanation": "When a bill is sent to the governor after it is passed by state legislature, he can: (a) Give his assent to the bill, or (b) Withhold his assent to the bill, or (c) Return the bill (if it is not a money bill) for reconsideration of the state legislature... (d) Reserve the bill for the consideration of the president."
    },
    {
        "id": "ch30-l1-q26",
        "question": "The Governor can promulgate Ordinances (Article 213) when the state legislature is not in session. These ordinances must be approved by the state legislature within what time frame from its reassembly?",
        "options": ["6 weeks","6 months","3 months","14 days"],
        "correctAnswerIndex": 0,
        "explanation": "He can promulgate ordinances when the state legislature is not in session. These ordinances must be approved by the state legislature within six weeks from its reassembly."
    },
    {
        "id": "ch30-l1-q27",
        "question": "The Governor lays the reports of the State Finance Commission, State Public Service Commission, and the Comptroller and Auditor-General relating to the accounts of the state before the state legislature. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, he lays the reports of the State Finance Commission, the State Public Service Commission and the Comptroller and Auditor-General relating to the accounts of the state, before the state legislature."
    },
    {
        "id": "ch30-l1-q28",
        "question": "A Money Bill can be introduced in the state legislature only with the prior recommendation of the:",
        "options": ["Chief Minister","Governor","Speaker of the Legislative Assembly","President"],
        "correctAnswerIndex": 1,
        "explanation": "Money bills can be introduced in the state legislature only with his (Governor"
    },
    {
        "id": "ch30-l1-q29",
        "question": "The Governor constitutes a State Finance Commission to review the financial position of the panchayats and municipalities. How often is this Commission constituted?",
        "options": ["Every 3 years","Every 5 years","Every 10 years","Every 2 years"],
        "correctAnswerIndex": 1,
        "explanation": "He constitutes a finance commission after every five years to review the financial position of the panchayats and the municipalities."
    },
    {
        "id": "ch30-l1-q30",
        "question": "The Constitution explicitly distinguishes between the",
        "options": ["The President","The Governor","The Supreme Court","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 163, if any question arises whether a matter falls within the governor"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch30-l2-q1",
        "question": "When a bill is reserved by the Governor for the consideration of the President under Article 200, which of the following accurately describes the Governor",
        "options": ["The Governor must wait for the President","The Governor has no further role in the enactment of that bill; the President alone can give or withhold assent.","The Governor can still veto the bill even if the President approves it, acting as a double check.","The Governor must send the bill to the Supreme Court for an advisory opinion before the President acts."],
        "correctAnswerIndex": 1,
        "explanation": "Once a Governor reserves a bill for the President, the Governor drops out of the picture completely. If the President gives assent, it becomes law. The Governor"
    },
    {
        "id": "ch30-l2-q2",
        "question": "Under which specific circumstance is the Governor constitutionally OBLIGED (mandatory) to reserve a state bill for the President",
        "options": ["If the bill is deeply opposed by the State","If the bill seeks to abolish the State Legislative Council.","If the bill contains provisions that would endanger the constitutional position and independence of the State High Court.","If the bill deals with the compulsory acquisition of private agricultural land."],
        "correctAnswerIndex": 2,
        "explanation": "While the Governor has discretion to reserve bills that are unconstitutional or against national interest, it is mandatory (obligatory) for him to reserve a bill that endangers the position of the State High Court. This is to protect the independence of the state judiciary from the state legislature."
    },
    {
        "id": "ch30-l2-q3",
        "question": "Consider the scenario where the President returns a state bill (reserved by the Governor) to the State Legislature for reconsideration. Within six months, the state legislature passes the bill again, without any changes, and it is sent back to the President. What is the President",
        "options": ["The President must give his assent (similar to the rule for Parliament bills).","The President is not bound to give his assent; he can still withhold his assent a second time.","The bill automatically becomes law without anyone","The President must refer the bill to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "This is a crucial difference. If Parliament re-passes a returned bill, the President MUST sign it. But if a State Legislature re-passes a returned bill, the President is NOT bound to give assent. He can pocket it or veto it again. This gives the Centre an absolute veto over state legislation."
    },
    {
        "id": "ch30-l2-q4",
        "question": "The pardoning powers of the Governor (Article 161) differ significantly from those of the President (Article 72). Which of the following statements correctly identifies these differences?",
        "options": ["The Governor cannot pardon a sentence of death, nor can he pardon a sentence inflicted by a Court Martial.","The Governor can pardon a death sentence if the crime falls under purely state law, but cannot pardon a Court Martial sentence.","The Governor and the President have identical powers concerning crimes committed within the state","The President cannot pardon a death sentence, but the Governor can."],
        "correctAnswerIndex": 0,
        "explanation": "Even if a state law prescribes the death penalty, the Governor cannot grant a full pardon for a death sentence (he can only suspend, remit, or commute it). Only the President can pardon a death sentence. Furthermore, the Governor has no power over Court Martial (military court) sentences."
    },
    {
        "id": "ch30-l2-q5",
        "question": "In 2021, the Supreme Court clarified an important aspect of the Governor",
        "options": ["The Governor","The constitutional power of the Governor under Article 161 overrides the statutory restrictions of Section 433A of the CrPC; thus, the Governor can grant pardon even before the prisoner has completed 14 years of actual imprisonment.","The Governor must consult the High Court before granting remission.","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The SC ruled that the sovereign power of the Governor (advised by the state cabinet) under Article 161 is a constitutional power. It cannot be restricted by a statutory law like the CrPC. Therefore, the Governor can remit a life sentence even if the convict hasn"
    },
    {
        "id": "ch30-l2-q6",
        "question": "Unlike the President, the Constitution explicitly grants",
        "options": ["Appointing the Chief Minister when no party has a clear majority.","Reserving a bill for the consideration of the President.","Dismissing the Council of Ministers when it cannot prove its majority.","Dissolving the State Legislative Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "Reserving a bill for the President is a clear example of Constitutional Discretion (mentioned in the Constitution). Options A, C, and D are examples of"
    },
    {
        "id": "ch30-l2-q7",
        "question": "Which of the following scenarios describes the Governor exercising",
        "options": ["Seeking information from the Chief Minister regarding administrative and legislative matters of the state.","Determining the amount payable by the Government of Assam to the autonomous Tribal District Council as royalty from mineral licenses.","Appointing a Chief Minister after the sudden death of the incumbent CM in office, when there is no obvious successor and the ruling party is fractured.","Recommending the imposition of President"],
        "correctAnswerIndex": 2,
        "explanation": "Appointing a Chief Minister when a clear leader is absent or after a sudden death is a political judgment call forced by the situation—hence"
    },
    {
        "id": "ch30-l2-q8",
        "question": "Article 163 explicitly states that the decision of the Governor is final if a question arises regarding whether a matter falls within his discretionary power. Can this decision be challenged in a court of law?",
        "options": ["Yes, it can be freely challenged like any other executive action.","No, the Constitution states that the validity of anything done by the Governor cannot be called into question on the ground that he ought or ought not to have acted in his discretion.","Yes, but only in the Supreme Court under Article 131.","Only if the Chief Minister gives explicit written permission to the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 163(2) provides immunity to the Governor"
    },
    {
        "id": "ch30-l2-q9",
        "question": "In the landmark S.R. Bommai Case (1994), the Supreme Court severely restricted the misuse of the Governor",
        "options": ["The Governor must consult the Prime Minister before sending his report to the President.","The majority of the incumbent government must be tested on the floor of the House (a","), and the Governor cannot dismiss the government based purely on his own subjective assessment or head-counts in the Raj Bhavan.","The Governor must ask the High Court to arbitrate the political crisis.","The Governor must dissolve the assembly immediately without giving anyone a chance to form the government."],
        "correctAnswerIndex": 1,
        "explanation": "Prior to Bommai, Governors would often dismiss state governments claiming they"
    },
    {
        "id": "ch30-l2-q10",
        "question": "The role of the Governor is often a subject of friction between the Centre and the States because the Governor performs a",
        "options": ["Head of the Legislature and Head of the Judiciary.","Constitutional Head of the State (acting on the advice of the State Ministers) AND the Agent/Representative of the Central Government.","Commander-in-Chief of State Police and Chancellor of Universities.","Judicial Magistrate and Executive Head."],
        "correctAnswerIndex": 1,
        "explanation": "As the Constitutional Head, he must act on the aid and advice of the CM. As the Agent of the Centre (who appoints and can fire him), he must keep an eye on the state and report breakdowns. This dual loyalty is the root cause of frequent political crises between opposition-ruled states and Governors."
    },
    {
        "id": "ch30-l2-q11",
        "question": "In the Nabam Rebia Case (2016) regarding the political crisis in Arunachal Pradesh, the Supreme Court delivered a decisive ruling on the Governor",
        "options": ["The Governor","The Governor can summon the House only when the President specifically orders it.","The Governor","aid and advice","The Governor can summon the House only after consulting the Speaker."],
        "correctAnswerIndex": 2,
        "explanation": "The SC clarified in Nabam Rebia that the Governor cannot independently decide to call a session of the Assembly against the wishes of the CM (unless the CM is avoiding a floor test after visibly losing the majority). Normally, summoning the Assembly is strictly an executive decision made by the Cabinet."
    },
    {
        "id": "ch30-l2-q12",
        "question": "The Governor",
        "options": ["If the ordinance deals with increasing the salaries of state ministers.","If the Chief Minister is from an opposition party.","If the Governor would have deemed it necessary to reserve a bill containing the same provisions for the consideration of the President.","Ordinances can never be issued without the President"],
        "correctAnswerIndex": 2,
        "explanation": "There are three restrictions where Presidential instruction is needed: 1) If an identical bill would have required the President"
    },
    {
        "id": "ch30-l2-q13",
        "question": "An ordinance promulgated by the Governor has the same force as an Act of the state legislature. What is its maximum possible lifespan if the state legislature takes NO action on it after reassembly?",
        "options": ["It remains law permanently.","3 years.","6 months.","It ceases to operate 6 weeks from the reassembly of the state legislature."],
        "correctAnswerIndex": 3,
        "explanation": "Every ordinance issued by the Governor must be laid before the state legislature when it reassembles. If the legislature takes no action, the ordinance automatically expires six weeks from the date of the legislature"
    },
    {
        "id": "ch30-l2-q14",
        "question": "The Governor appoints the members of the State Public Service Commission (SPSC). Which constitutional paradox exists regarding their removal?",
        "options": ["The Governor appoints them, but cannot remove them. They can only be removed by the President of India.","The Governor appoints them and can remove them at his pleasure without any inquiry.","They are appointed by the Governor but removed by the Chief Minister.","They are appointed by the Governor but removed by the State Legislative Assembly."],
        "correctAnswerIndex": 0,
        "explanation": "To guarantee independence, while the Governor appoints SPSC members, they do not hold office during his"
    },
    {
        "id": "ch30-l2-q15",
        "question": "In several states (like West Bengal, Kerala, and Punjab) over the recent years, friction between the state governments and their Governors has led state legislatures to pass controversial bills regarding State Universities. What do these bills generally aim to do?",
        "options": ["Make the Governor the supreme academic head of all schools.","Remove the Governor from the ex-officio position of","of state universities, aiming to transfer the power of appointing Vice-Chancellors to the Chief Minister or state-appointed academic panels.","Abolish all state universities and replace them with Central universities.","Force the Governor to personally teach classes in state colleges."],
        "correctAnswerIndex": 1,
        "explanation": "Because Governors often appoint Vice-Chancellors against the wishes of the state government (using their independent statutory power as Chancellor), several opposition-ruled states have attempted to amend university laws to remove the Governor as Chancellor entirely, sparking major constitutional standoffs when the Governor refuses to sign his own removal bill."
    },
    {
        "id": "ch30-l2-q16",
        "question": "Article 361 provides significant privileges and immunities to the Governor. Which of the following protections is granted to the Governor during his term of office?",
        "options": ["He enjoys complete immunity from criminal proceedings, even in respect of his personal acts.","He cannot be arrested or imprisoned.","He is not answerable to any court for the exercise and performance of the powers and duties of his office.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Article 361 grants all these protections. He is not personally liable for his official acts. Furthermore, he enjoys absolute immunity from criminal prosecution (even for personal acts) while in office, and cannot be arrested."
    },
    {
        "id": "ch30-l2-q17",
        "question": "While a Governor enjoys absolute immunity from criminal proceedings during his term, can a civil proceeding be instituted against him for his personal acts (e.g., failing to pay a personal debt)?",
        "options": ["No, civil proceedings are also completely barred until he leaves office.","Yes, civil proceedings can be instituted immediately without any conditions.","Yes, civil proceedings can be instituted against him during his term in respect of his personal acts, but only after giving two months","Only if the President permits the civil court to proceed."],
        "correctAnswerIndex": 2,
        "explanation": "According to Article 361(4), civil proceedings against a Governor in respect of an act done by him in his personal capacity can be instituted during his term of office only after the expiration of two months from the date on which a notice in writing has been delivered to him."
    },
    {
        "id": "ch30-l2-q18",
        "question": "In the B.P. Singhal case (2010), the Supreme Court examined the concept of the",
        "options": ["The President can remove a Governor without assigning any reason, BUT this power cannot be exercised in an arbitrary, capricious, or unreasonable manner. The court cannot compel the government to reveal reasons, but if reasons are apparent and found mala fide, the court can strike down the removal.","The pleasure is absolute and completely immune from any judicial review, no matter how arbitrary.","A newly elected Central Government has the absolute right to automatically dismiss all Governors appointed by the previous government.","A Governor can only be removed via impeachment by Parliament."],
        "correctAnswerIndex": 0,
        "explanation": "This judgment struck a balance. The Court said"
    },
    {
        "id": "ch30-l2-q19",
        "question": "Assertion (A): The President has no",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a key structural difference. The 42nd Amendment forced the President to obey the PM"
    },
    {
        "id": "ch30-l2-q20",
        "question": "When a Governor refuses to sign a bill indefinitely without taking any of the four actions prescribed in Article 200 (Assent, Withhold, Return, or Reserve), he is effectively exercising a:",
        "options": ["Suspensive Veto","Absolute Veto","Qualified Veto","Pocket Veto"],
        "correctAnswerIndex": 3,
        "explanation": "Taking no action, keeping the bill pending indefinitely on his desk (putting it in his"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch30-l3-q1",
        "question": "In the pivotal State of Tamil Nadu vs Governor judgment (April 2025), the Supreme Court provided crucial interpretation on Article 200 regarding the Governor",
        "options": ["The Governor","The phrase","in the proviso to Article 200 implies that an indefinite delay in acting on a bill is unconstitutional. A Governor cannot perpetually sit on a bill without choosing one of the three options: Assent, Return, or Reserve.","The Governor must sign every bill passed by the state legislature within exactly 14 days, converting Article 200 strictly into the procedure for Money Bills.","The Governor can unilaterally refer any state bill to the International Court of Justice for an advisory opinion."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court cracked down heavily on the growing practice of Governors"
    },
    {
        "id": "ch30-l3-q2",
        "question": "A significant controversy arose in the same Tamil Nadu vs Governor (2025) case when the Supreme Court initially invoked Article 142 to grant",
        "options": ["The Supreme Court declared that","is a permanent, valid judicial remedy for all recalcitrant Governors across India.","The Court ruled that the doctrine of","is alien to the constitutional scheme; the Judiciary cannot bypass the Governor","passed","unexplained inaction","s signing authority.","The Court ruled that only the President, not the Supreme Court, can grant",".","The Court held that Article 142 can never be used in any matter involving state legislation."],
        "correctAnswerIndex": 1,
        "explanation": "This is a critical nuance regarding Separation of Powers. While the SC can order the Governor *to act* (stop delaying), the Court cannot hold the pen and *sign* the bill for the Governor ("
    },
    {
        "id": "ch30-l3-q3",
        "question": "Consider the scenario where a Governor officially",
        "options": ["Yes, the legislature can immediately hold a special session to re-pass and override the","bill.","No. The constitutional mechanism allowing the legislature to override the Governor by re-passing a bill specifically applies only when the Governor","the bill.","assent outright kills the bill definitively.","Yes, but only if they secure a 2/3rds special majority.","Yes, but they must first seek the permission of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "This is a subtle but vital distinction in Article 200."
    },
    {
        "id": "ch30-l3-q4",
        "question": "In the high-profile V. Senthil Balaji case (2024), the Supreme Court addressed a novel constitutional question: Can a State Governor unilaterally dismiss a sitting Cabinet Minister because the Minister is facing serious corruption charges and is under arrest, without the Chief Minister",
        "options": ["Yes, the Governor can act unilaterally because","overrides the Chief Minister","No. The Supreme Court strongly reiterated that the","concerning individual ministers is entirely contingent upon the","of the Chief Minister. The Governor cannot independently sack a minister he disapproves of.","Yes, the Governor can dismiss any minister provided the High Court chief justice gives silent consent.","No. Only the Speaker of the Legislative Assembly can dismiss a minister."],
        "correctAnswerIndex": 1,
        "explanation": "Article 164 states that ministers hold office during the"
    },
    {
        "id": "ch30-l3-q5",
        "question": "Examine the role of the Governor as the",
        "options": ["It is a core constitutional duty explicitly mandated alongside his executive powers in Part VI.","It is an","statutory role derived not from the Constitution, but from the specific University Acts passed by the State Legislature. Consequently, he acts in his independent statutory capacity as Chancellor, not necessarily on the","of the State Cabinet.","It is a judicial role conferred by the Supreme Court.","It is an honorary title carrying no actual administrative power over Vice-Chancellor appointments."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not make the Governor the Chancellor. The State Legislature creates a university via a statute (Act) and usually designates the Governor as the Chancellor in that Act. Because it"
    },
    {
        "id": "ch30-l3-q6",
        "question": "In light of the controversies surrounding the Governor-as-Chancellor role, several State Legislative Assemblies passed Amendment Bills seeking to replace the Governor with the Chief Minister (or a panel of experts) as the Chancellor of state universities. When these bills were presented to the Governors, what constitutional impasse frequently occurred?",
        "options": ["The Supreme Court automatically struck down the bills via suo motu intervention.","The bills were immediately assented to, acknowledging legislative supremacy.","The Governors systematically utilized their","power under Article 200, indefinitely shifting the battleground to the Union Home Ministry, claiming the bills altered the federal balance.","The Governors dissolved the State Assemblies to prevent the bills from passing."],
        "correctAnswerIndex": 2,
        "explanation": "This is the classic modern federal deadlock. A state passes a law to curb the Governor"
    },
    {
        "id": "ch30-l3-q7",
        "question": "Assertion (A): The Supreme Court ruling in Nabam Rebia (2016) completely extinguished the Governor",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Nabam Rebia heavily restricted, but did NOT extinguish the discretion. The general rule (Reason) is TRUE—summoning is based on Cabinet advice. However, the"
    },
    {
        "id": "ch30-l3-q8",
        "question": "Under Article 163, the phrase",
        "options": ["Because states are more susceptible to foreign invasion and need quicker autonomous executive action.","Because the President is directly elected by the people, while the Governor is an appointed bureaucrat.","Because the Governor, unlike the President, is required to retain the State as an integral part of the Union. His discretion acts as a vital","to ensure a state government does not operate contrary to the Constitution or national integrity, necessitating an independent channel of action.","Because the Constituent Assembly forgot to amend the state provisions."],
        "correctAnswerIndex": 2,
        "explanation": "The President only has one role: Constitutional Head. He has no higher authority to report to. The Governor has two roles: Constitutional Head AND the"
    },
    {
        "id": "ch30-l3-q9",
        "question": "Consider the constitutional immunities provided under Article 361. Can a State High Court issue a Writ of Mandamus directly ordering a sitting Governor to sign a specific state bill into law?",
        "options": ["Yes, if the bill has been pending for more than six months.","No. Article 361 strictly provides that the Governor is not answerable to any court for the exercise and performance of the powers and duties of his office. A court cannot compel him to exercise his executive/legislative functions.","Yes, but only if the Supreme Court gives written prior permission.","Yes, because legislative processes must always be judicially reviewable."],
        "correctAnswerIndex": 1,
        "explanation": "A court cannot order the President or a Governor to sign a bill, dissolve an assembly, or appoint a specific person. This is the absolute immunity under Article 361(1). While the *legality* of their actions (e.g., President"
    },
    {
        "id": "ch30-l3-q10",
        "question": "In the context of",
        "options": ["It made the Governor","It ruled that the Governor","subjective satisfaction","It declared that the Governor","It ruled that only the Chief Minister can send a report under Article 356, not the Governor."],
        "correctAnswerIndex": 1,
        "explanation": "Pre-Bommai, the assumption was that the"
    }
];

export const CHAPTER_30_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
