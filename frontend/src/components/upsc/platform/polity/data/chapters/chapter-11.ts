import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch11-l1-q1",
        "question": "Which Part and Article of the Indian Constitution deal with the power of Parliament to amend the Constitution and its procedure?",
        "options": ["Part XX, Article 368","Part XVIII, Article 352","Part XXI, Article 370","Part IX, Article 243"],
        "correctAnswerIndex": 0,
        "explanation": "Article 368 in Part XX of the Constitution deals with the powers of Parliament to amend the Constitution and its procedure."
    },
    {
        "id": "ch11-l1-q2",
        "question": "The procedure for the amendment of the Constitution as laid down in Article 368 is borrowed from the constitution of which country?",
        "options": ["USA","Britain","South Africa","Ireland"],
        "correctAnswerIndex": 2,
        "explanation": "The procedure for amendment of the constitution is borrowed from the Constitution of South Africa."
    },
    {
        "id": "ch11-l1-q3",
        "question": "Who can initiate an amendment of the Constitution under Article 368?",
        "options": ["Only the President of India.","Either House of Parliament.","State Legislatures only.","The Supreme Court of India."],
        "correctAnswerIndex": 1,
        "explanation": "An amendment of the Constitution can be initiated only by the introduction of a bill for the purpose in either House of Parliament."
    },
    {
        "id": "ch11-l1-q4",
        "question": "Can a State Legislature initiate a bill to amend the Constitution of India?",
        "options": ["Yes, if passed by a special majority.","Yes, but only for matters related to the state list.","No, an amendment bill can only be introduced in Parliament.","Yes, if the Governor recommends it."],
        "correctAnswerIndex": 2,
        "explanation": "The bill can be initiated only in either House of Parliament and NOT in the state legislatures."
    },
    {
        "id": "ch11-l1-q5",
        "question": "Does the introduction of a constitutional amendment bill require the prior permission of the President?",
        "options": ["Yes, always.","No, it does not require prior permission of the President.","Yes, but only if introduced by a private member.","Yes, if it affects state boundaries."],
        "correctAnswerIndex": 1,
        "explanation": "The bill can be introduced either by a minister or by a private member and does not require prior permission of the president."
    },
    {
        "id": "ch11-l1-q6",
        "question": "In the context of Article 368, what kind of majority is required in each House of Parliament to pass a constitutional amendment bill?",
        "options": ["A simple majority of the members present and voting.","A special majority, that is, a majority of the total membership of the House and a majority of two-thirds of the members of the House present and voting.","Absolute majority of the total membership only.","Two-thirds majority of the total membership of the House."],
        "correctAnswerIndex": 1,
        "explanation": "The bill must be passed in each House by a special majority, that is, a majority of the total membership of the House and a majority of two-thirds of the members of the House present and voting."
    },
    {
        "id": "ch11-l1-q7",
        "question": "If there is a disagreement between the Lok Sabha and the Rajya Sabha over a constitutional amendment bill, how is it resolved?",
        "options": ["The President summons a joint sitting of both Houses.","The view of the Lok Sabha automatically prevails.","There is no provision for holding a joint sitting; the bill lapses.","The Supreme Court mediates the disagreement."],
        "correctAnswerIndex": 2,
        "explanation": "Each House must pass the bill separately. In case of a disagreement between the two Houses, there is no provision for holding a joint sitting of the two Houses for the purpose of deliberation and passage of the bill."
    },
    {
        "id": "ch11-l1-q8",
        "question": "If an amendment bill seeks to change the federal provisions of the Constitution, what additional requirement must be met after Parliament passes it?",
        "options": ["It must be ratified by the Supreme Court.","It must be ratified by the legislatures of half of the states by a simple majority.","It must be ratified by all states by a special majority.","It must be approved by a national referendum."],
        "correctAnswerIndex": 1,
        "explanation": "If the bill seeks to amend the federal provisions of the Constitution, it must also be ratified by the legislatures of half of the states by a simple majority, that is, a majority of the members of the House present and voting."
    },
    {
        "id": "ch11-l1-q9",
        "question": "When a constitutional amendment bill, properly passed by Parliament (and ratified by states if required), is presented to the President, what action must the President take?",
        "options": ["He may withhold his assent.","He may return the bill for reconsideration.","He must give his assent to the bill.","He must refer it to the Supreme Court for advice."],
        "correctAnswerIndex": 2,
        "explanation": "The president must give his assent to the bill. He can neither withhold his assent to the bill nor return the bill for reconsideration of the Parliament."
    },
    {
        "id": "ch11-l1-q10",
        "question": "Which Constitutional Amendment Act made it strictly obligatory for the President to give his assent to a constitutional amendment bill?",
        "options": ["24th Amendment Act of 1971","42nd Amendment Act of 1976","44th Amendment Act of 1978","86th Amendment Act of 2002"],
        "correctAnswerIndex": 0,
        "explanation": "The 24th Constitutional Amendment Act of 1971 made it obligatory for the President to give his assent to a constitutional amendment bill."
    },
    {
        "id": "ch11-l1-q11",
        "question": "How many ways are there to amend the Constitution of India, taking into account both Article 368 and other provisions?",
        "options": ["One","Two","Three","Four"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution can be amended in three ways: 1. Amendment by simple majority of the Parliament, 2. Amendment by special majority of the Parliament, and 3. Amendment by special majority of the Parliament and the ratification of half of the state legislatures."
    },
    {
        "id": "ch11-l1-q12",
        "question": "Are the amendments made by a",
        "options": ["Yes, all amendments are considered under Article 368.","No, these amendments are exclusively kept outside the purview of Article 368.","Only if they relate to fundamental rights.","Only if the President considers them under Article 368."],
        "correctAnswerIndex": 1,
        "explanation": "A number of provisions in the Constitution can be amended by a simple majority of the two Houses of Parliament outside the scope of Article 368."
    },
    {
        "id": "ch11-l1-q13",
        "question": "Which of the following matters can be amended by a simple majority of Parliament?",
        "options": ["Fundamental Rights","Directive Principles of State Policy","Formation of new states and alteration of areas, boundaries or names of existing states","Election of the President and its manner"],
        "correctAnswerIndex": 2,
        "explanation": "Formation of new states and alteration of areas, boundaries or names of existing states (Article 3) can be done by a simple majority and is explicitly outside Article 368."
    },
    {
        "id": "ch11-l1-q14",
        "question": "The abolition or creation of legislative councils in states can be done by which type of majority?",
        "options": ["Special majority of Parliament.","Simple majority of Parliament.","Special majority + Ratification by half the states.","Only by a constitutional amendment under Article 368."],
        "correctAnswerIndex": 1,
        "explanation": "Abolition or creation of legislative councils in states (Article 169) is one of the provisions that can be amended by a simple majority of the Parliament."
    },
    {
        "id": "ch11-l1-q15",
        "question": "Amendments relating to",
        "options": ["Simple majority of Parliament","Special majority of Parliament","Special majority + State Ratification","Executive Order by the Home Ministry"],
        "correctAnswerIndex": 0,
        "explanation": "Citizenship (acquisition and termination) can be amended by a simple majority of Parliament."
    },
    {
        "id": "ch11-l1-q16",
        "question": "Which of the following requires a Special Majority of Parliament (but NOT state ratification) for an amendment?",
        "options": ["Salaries and allowances of the members of Parliament.","Elections to Parliament and state legislatures.","Fundamental Rights and Directive Principles.","Power of Parliament to amend the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "The provisions which can be amended by this way (special majority only) include (i) Fundamental Rights; (ii) Directive Principles of State Policy; and (iii) All other provisions which are not covered by the first and third categories."
    },
    {
        "id": "ch11-l1-q17",
        "question": "If an amendment seeks to change the",
        "options": ["Simple majority of Parliament.","Special majority of Parliament only.","Special majority of Parliament and consent of half of the state legislatures by a simple majority.","Consent of all state legislatures."],
        "correctAnswerIndex": 2,
        "explanation": "Provisions relating to the federal structure, like the Election of the President, require a special majority of the Parliament and also the consent of half of the state legislatures by a simple majority."
    },
    {
        "id": "ch11-l1-q18",
        "question": "Which of the following provisions requires ratification by half of the states?",
        "options": ["Use of official language.","Fifth Schedule—administration of scheduled areas.","Distribution of legislative powers between the Union and the states (Seventh Schedule).","Directive Principles of State Policy."],
        "correctAnswerIndex": 2,
        "explanation": "Any of the lists in the Seventh Schedule (distribution of legislative powers) relates to the federal structure and requires special majority plus ratification by half the states."
    },
    {
        "id": "ch11-l1-q19",
        "question": "To amend Article 368 itself, which procedure must be followed?",
        "options": ["It cannot be amended under any circumstances.","Simple majority of Parliament.","Special majority of Parliament.","Special majority of Parliament and consent of half of the state legislatures."],
        "correctAnswerIndex": 3,
        "explanation": "The"
    },
    {
        "id": "ch11-l1-q20",
        "question": "Is there a time limit prescribed in the Constitution within which the state legislatures must ratify an amendment bill?",
        "options": ["Yes, 6 months.","Yes, 1 year.","No, the Constitution does not prescribe a time frame.","Yes, until the next general election."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution does not prescribe the time frame within which the state legislatures should ratify or reject an amendment submitted to them."
    },
    {
        "id": "ch11-l1-q21",
        "question": "Can an amendment bill be introduced by a private member of Parliament?",
        "options": ["No, only by a Cabinet Minister.","Yes, any member (minister or private member) can introduce it.","Only by members of the ruling party.","Only by the Leader of the Opposition."],
        "correctAnswerIndex": 1,
        "explanation": "The bill can be introduced either by a minister or by a private member."
    },
    {
        "id": "ch11-l1-q22",
        "question": "What does",
        "options": ["Only the members present on the day of voting.","The total number of members comprising the House, irrespective of whether there are vacancies or absentees.","The total number of members minus the nominated members.","The members belonging to the ruling coalition."],
        "correctAnswerIndex": 1,
        "explanation": "The expression"
    },
    {
        "id": "ch11-l1-q23",
        "question": "Does the Constitution provide for a special body like a Constitutional Convention to amend the Constitution?",
        "options": ["Yes, a Constitutional Convention is formed every 10 years.","No, there is no separate body; the constituent power is vested in the Parliament.","Yes, the Supreme Court acts as the Constitutional Convention.","Yes, the NITI Aayog."],
        "correctAnswerIndex": 1,
        "explanation": "Critics point out there is no provision for a special body like a Constitutional Convention or Constituent Assembly for amending the Constitution. The constituent power is vested in the Parliament."
    },
    {
        "id": "ch11-l1-q24",
        "question": "Which of the following describes the Indian Constitution",
        "options": ["Extremely rigid, like the USA.","Extremely flexible, like the UK.","A synthesis or mixture of both rigidity and flexibility.","Unamendable."],
        "correctAnswerIndex": 2,
        "explanation": "Indian Constitution is neither flexible nor rigid but a synthesis of both."
    },
    {
        "id": "ch11-l1-q25",
        "question": "If half of the states ratify an amendment bill concerning the federal structure, what is the status of the remaining states?",
        "options": ["The bill cannot proceed until all states ratify.","The formalities are completed, and the remaining states","The bill is sent back to Parliament.","The President must consult the remaining states."],
        "correctAnswerIndex": 1,
        "explanation": "If one half of the states give their consent, the formality is completed. There is no provision requiring the consent of all the states."
    },
    {
        "id": "ch11-l1-q26",
        "question": "According to the Supreme Court ruling in the Kesavananda Bharati case (1973), Parliament under Article 368 CANNOT amend:",
        "options": ["Fundamental Rights","Directive Principles","The","of the Constitution","Election procedures"],
        "correctAnswerIndex": 2,
        "explanation": "In the Kesavananda Bharati case (1973), the Supreme Court ruled that Parliament cannot amend those provisions which form the"
    },
    {
        "id": "ch11-l1-q27",
        "question": "The power to amend the Constitution rests almost entirely with the Parliament. State legislatures can only initiate one specific type of constitutional change. What is it?",
        "options": ["Changing the name of the state.","Passing a resolution requesting the Parliament for the creation or abolition of a legislative council in the state.","Fixing the salary of the Governor.","Drawing internal electoral boundaries."],
        "correctAnswerIndex": 1,
        "explanation": "State legislatures cannot initiate any bill or proposal for amending the Constitution except in one case, that is, passing a resolution requesting the Parliament for the creation or abolition of legislative councils in the states. And even here, the final decision rests with Parliament."
    },
    {
        "id": "ch11-l1-q28",
        "question": "Which Schedule",
        "options": ["Seventh Schedule","Ninth Schedule","Second Schedule","None of the above"],
        "correctAnswerIndex": 2,
        "explanation": "Amendments to the Second Schedule (Emoluments, allowances, privileges of the President, Governors, Speakers, judges, etc.), Fifth Schedule, and Sixth Schedule require only a simple majority."
    },
    {
        "id": "ch11-l1-q29",
        "question": "The Supreme Court and High Courts",
        "options": ["Simple Majority of Parliament.","Special Majority of Parliament only.","Special majority of Parliament + Consent of half of the state legislatures.","It cannot be amended."],
        "correctAnswerIndex": 2,
        "explanation": "Provisions regarding the Supreme Court and high courts relate to the federal structure, therefore requiring Special majority of Parliament and consent of half of the state legislatures."
    },
    {
        "id": "ch11-l1-q30",
        "question": "Can a state legislature, after ratifying a constitutional amendment bill, completely withdraw its consent at a later date?",
        "options": ["Yes, at any time before the President signs it.","Yes, but only if the ruling party changes in the state.","The Constitution is silent on this issue.","No, withdrawal of consent is expressly forbidden by Article 368."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution is silent on the issue whether the states can withdraw their approval after according the same."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch11-l2-q1",
        "question": "Consider the requirement for State Ratification under Article 368. Why did the framers of the Constitution subject certain constitutional amendments to the mandatory ratification by half the State Legislatures?",
        "options": ["To prevent the Prime Minister from becoming too powerful during a National Emergency.","To safeguard the fundamental rights of citizens from arbitrary suspension.","To protect the federal character and the distribution of powers between the Union and the States from unilateral alteration by the Parliament.","To ensure that state governments receive a share of central tax revenues."],
        "correctAnswerIndex": 2,
        "explanation": "Provisions that require state ratification (like the 7th Schedule, Presidential election, Supreme Court jurisdiction) form the core of the federal structure. The framers mandated ratification by 50% of states to ensure the Union Parliament cannot unilaterally alter the constitutional balance of power between the Centre and the States."
    },
    {
        "id": "ch11-l2-q2",
        "question": "Assertion (A): The President of India cannot return a Constitutional Amendment Bill for the reconsideration of Parliament.\\nReason (R): The 44th Amendment Act (1978) explicitly stripped the President of his veto power specifically regarding Constitutional Amendment Bills to assert parliamentary supremacy.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is true; the President MUST give assent to a Constitutional Amendment Bill. However, Reason R is false. This obligation was established by the 24th Amendment Act (1971), NOT the 44th Amendment (which actually restored some suspensive veto power for ordinary bills)."
    },
    {
        "id": "ch11-l2-q3",
        "question": "Examine the",
        "options": ["200 members vote in favor.","240 members vote in favor.","260 members vote in favor.","270 members vote in favor."],
        "correctAnswerIndex": 3,
        "explanation": "A"
    },
    {
        "id": "ch11-l2-q4",
        "question": "Critics often point out a significant procedural difference between amending the Indian Constitution and amending the US Constitution regarding the role of states. What is this crucial difference?",
        "options": ["In India, states must ratify every single constitutional amendment; in the US, states do not vote on amendments.","In the US, states can unilaterally initiate a constitutional amendment process; in India, state legislatures cannot initiate a constitutional amendment (with the minor exception of requesting a legislative council).","In India, state ratification requires a special majority in the state assembly; in the US, it requires a simple majority.","In the US, the President can veto an amendment ratified by states; in India, the President cannot."],
        "correctAnswerIndex": 1,
        "explanation": "One of the major criticisms is that the constituent power is practically vested in the Parliament. Unlike the USA, where states can petition to initiate a constitutional amendment convention, Indian state legislatures cannot initiate any bill for amending the Constitution (except requesting the creation/abolition of legislative councils)."
    },
    {
        "id": "ch11-l2-q5",
        "question": "Which of the following alterations technically changes the text of the Constitution but is explicitly declared NOT to be an amendment",
        "options": ["An alteration in the distribution of legislative lists in the 7th Schedule.","An alteration of the boundaries of a State under Article 3.","An amendment altering the election process of the President.","An amendment altering the power of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 4 explicitly states that laws made under Article 2 (admission of new states) and Article 3 (formation/alteration of boundaries of existing states) are NOT to be considered as amendments of the Constitution under Article 368. They are passed by a simple majority like ordinary legislation."
    },
    {
        "id": "ch11-l2-q6",
        "question": "Consider a scenario where the Lok Sabha passes a Constitutional Amendment Bill, but the Rajya Sabha rejects it. What is the constitutional recourse available to the ruling government to save the bill?",
        "options": ["The President can immediately summon a joint sitting of both Houses under Article 108 to pass the bill by a simple majority.","The government must dissolve the Lok Sabha and seek a fresh mandate.","The bill lapses entirely; there is no provision for a joint sitting to resolve deadlocks over Constitutional Amendment Bills.","The bill is sent to the Supreme Court for arbitration."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike ordinary legislative bills, Article 368 strictly requires that an amendment bill must be passed in EACH House separately. If the two Houses disagree, there is NO provision for holding a joint sitting. The bill simply fails."
    },
    {
        "id": "ch11-l2-q7",
        "question": "When a Constitutional Amendment Bill requires state ratification, the Constitution specifies that",
        "options": ["A special majority (two-thirds present and voting) in each state legislature.","A simple majority (majority of members present and voting) in each state legislature.","An absolute majority of the total membership in each state legislature.","A unanimous resolution by the state cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "Article 368 requires that the ratification by the State Legislatures must be done by a SIMPLE majority (i.e., a majority of the members of the House present and voting). It does not require a special majority in the states."
    },
    {
        "id": "ch11-l2-q8",
        "question": "Which of the following provisions forms part of the",
        "options": ["The specific number of judges in the Supreme Court.","The exact method of electing the President.","The power of Judicial Review under Article 32 and Article 226.","The names of the States listed in the First Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court has consistently held (e.g., in Minerva Mills, L. Chandra Kumar) that the power of Judicial Review vested in the High Courts (Art 226) and the Supreme Court (Art 32) is an integral part of the basic structure of the Constitution and cannot be entirely ousted by any constitutional amendment."
    },
    {
        "id": "ch11-l2-q9",
        "question": "In the federal context of amending the Indian Constitution, which statement accurately describes the power symmetry (or lack thereof) between Parliament and the States?",
        "options": ["States have equal constituent powers to Parliament regarding federal amendments.","The constituent power rests almost exclusively with the Union Parliament; states merely have a limited corroborative role (ratification) in specific federal matters.","State ratification requires a joint sitting of all State Assemblies.","Parliament can unilaterally alter the 7th Schedule without consulting states."],
        "correctAnswerIndex": 1,
        "explanation": "This is a key criticism of the amending procedure. It is highly unitary and skewed towards the Centre. States cannot initiate amendments, cannot force an amendment, and their ratification is only needed for federal provisions (and even then, only half the states are needed, by a simple majority)."
    },
    {
        "id": "ch11-l2-q10",
        "question": "Assertion (A): It is relatively easy for Parliament to amend provisions relating to the Fundamental Rights (Part III).\\nReason (R): Amendments to Fundamental Rights require only a Special Majority of Parliament and do NOT require the ratification of half the State Legislatures.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. While Fundamental Rights are crucial individually, structurally the framers made them amendable without state consent. They fall under the category requiring ONLY a Special Majority of Parliament, unlike federal provisions (like the 7th Schedule) which require the much harder threshold of state ratification."
    },
    {
        "id": "ch11-l2-q11",
        "question": "Consider the procedure for an amendment bill requiring state ratification (e.g., GST legislation). If 15 out of 28 states have already ratified the bill, and 5 states formally reject it, what happens to the bill?",
        "options": ["The rejection by 5 states nullifies the ratification, and the bill fails.","The bill is paused until all 28 states vote.","Because more than half (14) of the states have already ratified it, the constitutional requirement is fulfilled, and it proceeds to the President for assent regardless of the rejections.","The President must return the bill to Parliament for an overriding vote."],
        "correctAnswerIndex": 2,
        "explanation": "Article 368 only requires ratification by"
    },
    {
        "id": "ch11-l2-q12",
        "question": "Which feature of the Indian amending process is cited by critics as a clear indication of a unitary bias in the Constitution?",
        "options": ["The requirement of a special majority for most provisions.","The fact that the Constitution does not prescribe a time frame within which the state legislatures must ratify or reject an amendment submitted to them.","The absolute veto power of the President over amendments.","The ability of citizens to propose constitutional amendments through national referendums."],
        "correctAnswerIndex": 1,
        "explanation": "A major criticism highlighting unitary bias is that while state ratification is required for federal issues, the Constitution dictates no time limit for states to act. They can sit on it indefinitely. Furthermore, whether a state can withdraw its ratification is left ambiguous, leaving immense interpretive power at the Union level."
    },
    {
        "id": "ch11-l2-q13",
        "question": "If Parliament wishes to increase the number of pusine judges in the Supreme Court, what type of majority is required?",
        "options": ["Simple majority of Parliament.","Special majority of Parliament.","Special majority of Parliament + Ratification by half the states.","An executive order by the President is sufficient."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch11-l2-q14",
        "question": "Which of the following constitutional changes represents an amendment to a",
        "options": ["Inserting a new Directive Principle (e.g., Article 39A).","Amending Article 368 itself.","Restricting the Right to Property (Article 31).","Adding new Fundamental Duties (Part IVA)."],
        "correctAnswerIndex": 1,
        "explanation": "Amending Article 368 itself (the amending power and procedure) fundamentally alters the balance of the Constitution, including the federal balance. It is explicitly listed in Article 368 as a provision requiring ratification by half the states. The others (DPSP, FRs, Duties) require only a Special Majority in Parliament."
    },
    {
        "id": "ch11-l2-q15",
        "question": "Why does the Indian Constitution utilize three different types of amendment procedures (simple, special, special+ratification) instead of a single, uniform procedure?",
        "options": ["To deliberately confuse the judiciary.","Because Dr. Ambedkar believed that all parts of the Constitution were equally sacred and unchangeable.","To provide a flexible synthesis: allowing easy adjustment of administrative details (simple majority) while fiercely protecting fundamental rights (special majority) and the federal structure (ratification).","Because it was a requirement imposed by the British Parliament under the Indian Independence Act, 1947."],
        "correctAnswerIndex": 2,
        "explanation": "The framers designed a synthesis of rigidity and flexibility. Minor/administrative issues (state names, citizenship) were made flexible (simple majority) to let the nation adapt easily. Core principles (FRs) required a rigid special majority, and federal issues required state consent to protect the Union-State balance."
    },
    {
        "id": "ch11-l2-q16",
        "question": "Assertion (A): An amendment to the Fifth Schedule (administration of scheduled areas) requires a special majority under Article 368.\\nReason (R): The Fifth Schedule deals with sensitive tribal administration and forms part of the basic structure.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The Constitution explicitly places amendments to the Fifth Schedule (Administration of Scheduled Areas) and Sixth Schedule outside the purview of Article 368. They can be amended by a mere simple majority in Parliament."
    },
    {
        "id": "ch11-l2-q17",
        "question": "If Parliament attempts to circumvent the amendment procedure by burying a constitutional change inside an ordinary",
        "options": ["The amendment is valid because the Speaker","The President must automatically sign it.","The Supreme Court can strike it down through judicial review for violating the strict procedural requirements of Article 368 (colorable legislation).","The Rajya Sabha must pass it within 14 days."],
        "correctAnswerIndex": 2,
        "explanation": "A Constitutional Amendment Bill CANNOT be classified as a Money Bill. They are governed by distinct procedures (Article 368 vs Article 110). If the government attempts a"
    },
    {
        "id": "ch11-l2-q18",
        "question": "Which of the following amendments is best described as an",
        "options": ["The 1st Amendment (1951) adding the Ninth Schedule.","The 42nd Amendment (1976) adding Fundamental Duties.","The 101st Amendment (2016) introducing the Goods and Services Tax (GST) Council framework.","The 86th Amendment (2002) adding Right to Education."],
        "correctAnswerIndex": 2,
        "explanation": "The introduction of GST (101st Amendment) drastically altered the distribution of taxation powers between the Union and the States (affecting the 7th Schedule and Article 279A). Therefore, it was a classic case requiring ratification by more than half the State Legislatures."
    },
    {
        "id": "ch11-l2-q19",
        "question": "According to K.C. Wheare, how does the amendment procedure of the Indian Constitution balance different constitutional needs?",
        "options": ["It strikes a good balance by providing a variety of amending processes instead of a single uniform process.","It is excessively rigid and prone to judicial tyranny.","It is completely subsidiary to the whims of the state legislatures.","It is identical to the British unwritten constitution."],
        "correctAnswerIndex": 0,
        "explanation": "K.C. Wheare applauded India"
    },
    {
        "id": "ch11-l2-q20",
        "question": "Does the Constitution provide any specific mechanism to resolve a deadlock between the two Houses of Parliament over a Constitutional Amendment Bill?",
        "options": ["Yes, a joint sitting of both Houses presided over by the Speaker.","Yes, the bill is referred to a Parliamentary Committee.","No, there is absolutely no provision for resolving such a deadlock; the bill simply fails.","Yes, the President can use a casting vote."],
        "correctAnswerIndex": 2,
        "explanation": "If a deadlock occurs over a Constitutional Amendment Bill (unlike an ordinary bill, where a joint sitting under Art 108 is possible), the Constitution does not provide for a joint sitting. The bill lapses and fails. This ensures profound changes require independent consensus in both Houses."
    },
    {
        "id": "ch11-l2-q21",
        "question": "Consider the constitutional restriction placed on the President regarding Amendment Bills. The 24th Amendment (1971) made his assent obligatory. What was the political/historical context that drove Parliament to pass this amendment?",
        "options": ["To empower the President during the Indo-Pak War of 1971.","To prevent the President from blocking sweeping socialist constitutional changes (like abolishing privy purses) that were opposed by conservative elements.","To align with the United Nations mandate on executive powers.","To punish the Supreme Court for the Golaknath judgment."],
        "correctAnswerIndex": 1,
        "explanation": "Following the Golaknath case and the nationalization of banks, Indira Gandhi"
    },
    {
        "id": "ch11-l2-q22",
        "question": "If Parliament wants to change the boundaries of two states to form a new larger state, why is this NOT considered a constitutional amendment under Article 368, despite altering the First Schedule of the Constitution?",
        "options": ["Because states in India are sovereign and change their own boundaries.","Because Article 4 explicitly declares that laws made under Article 2 and 3 (relating to state formation) are not to be considered as amendments under Article 368 and can be passed by a simple majority.","Because the Supreme Court forbade Parliament from using Article 368 for territorial issues.","Because it requires a national referendum, bypassing Parliament entirely."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution makers designed an intensely flexible map for India. Article 4 specifically dictates that any law made to form new states (Art 3) or admit new states (Art 2) will naturally amend the 1st and 4th Schedules, but such a law"
    },
    {
        "id": "ch11-l2-q23",
        "question": "Which of the following sets of constitutional changes requires EXACTLY the same type of parliamentary majority (and procedure) to be enacted?",
        "options": ["Changing the official language AND amending the Fundamental Rights.","Abolishing a State Legislative Council AND amending the Directive Principles of State Policy.","Amending the Fundamental Rights AND amending the Directive Principles of State Policy.","Altering the boundaries of a state AND amending the election of the President."],
        "correctAnswerIndex": 2,
        "explanation": "Both Fundamental Rights (Part III) and Directive Principles (Part IV) fall squarely into the category of provisions that require a"
    },
    {
        "id": "ch11-l2-q24",
        "question": "Consider an Amendment Bill initiated by a Private Member of Parliament (not a Minister). If it passes both Houses with a Special Majority, is the procedure for presidential assent any different than a government bill?",
        "options": ["Yes, the President can veto a Private Member","Yes, the President must first seek the Cabinet","No, the procedure and the obligation of the President to give assent remain exactly the same under Article 368.","Yes, it must additionally be ratified by the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Article 368 does not distinguish between a government bill and a private member"
    },
    {
        "id": "ch11-l2-q25",
        "question": "If a constitutional amendment seeks to redefine the representation of states in the Rajya Sabha (Fourth Schedule), what is the most stringent procedural hurdle it must clear?",
        "options": ["A simple majority in the Lok Sabha.","A special majority in the Lok Sabha only.","A special majority in Parliament AND ratification by the legislatures of not less than half of the states.","Unanimous consent of all 28 states."],
        "correctAnswerIndex": 2,
        "explanation": "Representation of states in Parliament (the Fourth Schedule) directly impacts the federal balance of power. Therefore, Article 368 specifies that any amendment to this provision requires both a special majority in Parliament and the ratification of half of the state legislatures."
    },
    {
        "id": "ch11-l2-q26",
        "question": "Which prominent constitutional scholar famously criticized the Indian amendment procedure, pointing out that there is no provision for a special body like a constitutional convention, leaving the constituent power largely conflated with ordinary legislative power?",
        "options": ["Granville Austin","K.C. Wheare","Ivor Jennings","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 2,
        "explanation": "Critics, including prominent legal theorists like Sir Ivor Jennings, pointed out the lack of a separate constituent body (like a Constitutional Convention in the US) in India. The power to amend is vested in the ordinary legislature (Parliament), which acts as both the law-making and constitution-making body."
    },
    {
        "id": "ch11-l2-q27",
        "question": "What happens to a pending Constitutional Amendment Bill in the Lok Sabha if the Lok Sabha is dissolved before the bill is passed?",
        "options": ["It automatically passes to the new Lok Sabha.","It lapses, exactly like an ordinary legislative bill.","It is kept alive by the President through an ordinance.","It is transferred to the Rajya Sabha for safekeeping."],
        "correctAnswerIndex": 1,
        "explanation": "A constitutional amendment bill follows the same legislative parliamentary procedures as ordinary bills (unless Article 368 specifies otherwise). Thus, if the Lok Sabha is dissolved, any pending constitutional amendment bill in the Lok Sabha lapses and must be reintroduced by the newly elected government."
    },
    {
        "id": "ch11-l2-q28",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. The SC explicitly interpreted the word"
    },
    {
        "id": "ch11-l2-q29",
        "question": "Amendments concerning the",
        "options": ["Simple majority in Parliament.","Special majority under Article 368.","Special majority + State Ratification.","Only by a two-thirds majority in the Rajya Sabha."],
        "correctAnswerIndex": 0,
        "explanation": "According to Laxmikanth, the"
    },
    {
        "id": "ch11-l2-q30",
        "question": "Granville Austin, analyzing the Indian amending process, noted that the synthesis of simple, special, and ratification procedures creates a Constitution that is:",
        "options": ["Vulnerable to dictatorial takeover.","A","document.","Capable of adapting to changing needs while protecting basic democratic and federal principles.","Entirely dependent on judicial interpretation."],
        "correctAnswerIndex": 2,
        "explanation": "Granville Austin praised the amending process, noting that the framers deliberately avoided making it extremely rigid, choosing a flexible mechanism that allows the Constitution to grow and adapt to the nation"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch11-l3-q1",
        "question": "Consider the constitutional journey of the",
        "options": ["Article 368 contains both the power and the procedure to amend the Constitution, including Fundamental Rights.","Article 368 only lays down the procedure to amend the Constitution; the actual power to amend is derived from ordinary legislative power (Article 245), meaning an amendment is a","under Article 13(2) and cannot take away Fundamental Rights.","Article 368 gives Parliament absolute, unfettered constituent power that supersedes all judicial review.","Article 368 can only be used to amend the Directive Principles of State Policy."],
        "correctAnswerIndex": 1,
        "explanation": "In Golaknath (1967), the SC shockingly ruled that Art 368 only provided the"
    },
    {
        "id": "ch11-l3-q2",
        "question": "How did Parliament specifically react to neutralize the Supreme Court",
        "options": ["By declaring a National Emergency and suspending Article 32.","By passing the 24th Constitutional Amendment Act (1971), which explicitly stated that nothing in Article 13 shall apply to any amendment made under Article 368.","By impeaching the Chief Justice who delivered the judgment.","By amending the Preamble to remove the word","."],
        "correctAnswerIndex": 1,
        "explanation": "The 24th Amendment (1971) added a new clause (4) to Article 13, stating"
    },
    {
        "id": "ch11-l3-q3",
        "question": "The landmark Kesavananda Bharati v. State of Kerala (1973) case fundamentally reshaped Indian constitutional law. While it upheld the validity of the 24th Amendment (giving Parliament the power to amend ANY part of the constitution), what massive constitutional limit did it simultaneously invent and impose on Parliament?",
        "options": ["The Due Process Clause.","The Basic Structure (or basic features) Doctrine.","The Harmonious Construction Doctrine.","The Colourable Legislation Doctrine."],
        "correctAnswerIndex": 1,
        "explanation": "The 13-judge bench created the"
    },
    {
        "id": "ch11-l3-q4",
        "question": "Examine the 42nd Amendment Act (1976), often termed the",
        "options": ["They attempted to mandate that every amendment must be approved by the President and the Supreme Court collectively.","They declared that there is","on the constituent power of Parliament to amend the Constitution, and no amendment could be questioned in ANY court on ANY ground.","They attempted to make Fundamental Duties superior to Fundamental Rights.","They mandated a national referendum for any future basic structure changes."],
        "correctAnswerIndex": 1,
        "explanation": "The Indira Gandhi government added clauses (4) and (5) to Article 368 via the 42nd Amendment to assert total parliamentary infallibility. Clause (4) ousted judicial review ("
    },
    {
        "id": "ch11-l3-q5",
        "question": "How did the Supreme Court deal with the 42nd Amendment",
        "options": ["The Court upheld them, bowing to Parliamentary sovereignty.","The Court struck them down as unconstitutional, declaring that","and a","are themselves essential features of the Basic Structure.","The Court ignored them entirely.","The Court ruled they only applied during national emergencies."],
        "correctAnswerIndex": 1,
        "explanation": "In Minerva Mills (1980), the SC emphatically struck down clauses 4 and 5 of Art 368. Chief Justice Chandrachud ruled that Parliament"
    },
    {
        "id": "ch11-l3-q6",
        "question": "Assertion (A): Not a single provision in the Indian Constitution is completely immune from being amended.\\nReason (R): Article 368 grants Parliament constituent power to amend",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Kesavananda Bharati categorically held that ANY part of the Constitution (including the Preamble and Fundamental Rights) can be amended under Art 368. The ONLY constitutional restriction is that the"
    },
    {
        "id": "ch11-l3-q7",
        "question": "Consider the Waman Rao v. Union of India (1981) case. It specifically addressed the timeline applicability of the Basic Structure doctrine regarding amendments placing laws in the Ninth Schedule. What was the critical cut-off date established by the Supreme Court?",
        "options": ["January 26, 1950 (Adoption of the Constitution).","February 27, 1967 (Date of the Golaknath judgment).","April 24, 1973 (Date of the Kesavananda Bharati judgment).","December 18, 1976 (Date of the 42nd Amendment Act)."],
        "correctAnswerIndex": 2,
        "explanation": "The SC clarified in Waman Rao (and later affirmed in I.R. Coelho) that the Basic Structure doctrine operates retrospectively only up to the date of its creation. Any constitutional amendment bringing an act/regulation into the Ninth Schedule *after* April 24, 1973 (Kesavananda judgment date) is open to judicial review based on the basic structure test."
    },
    {
        "id": "ch11-l3-q8",
        "question": "Which of the following procedural anomalies concerning Constitutional Amendments arguably bypasses the strict scrutiny theoretically envisioned by the Indian Constitution",
        "options": ["The President","The mandatory requirement of joint sittings for all amendments.","The ability to amend several significant provisions (like modifying the 1st or 2nd schedules, creating Legislative Councils, altering territory) by a mere simple legislative majority, avoiding the stringent requirements of Article 368 entirely.","The requirement of a national referendum on all amendments."],
        "correctAnswerIndex": 2,
        "explanation": "Critics point out the"
    },
    {
        "id": "ch11-l3-q9",
        "question": "In the context of amending the Constitution, federal principles dictate that changes affecting the balance of power require state consent. However, in India, half the states can thwart a constitutional amendment, but ALL the states combined CANNOT force one. What does this indicate about the nature of Indian federalism?",
        "options": ["It proves India is a pure, classical federation like the USA.","It establishes a system of",".","It highlights the heavily asymmetrical, unitary bias (","nature) of the Constitution where the Centre holds overwhelming constituent initiative.","It proves the states have absolute sovereignty."],
        "correctAnswerIndex": 2,
        "explanation": "This is a quintessential example of India"
    },
    {
        "id": "ch11-l3-q10",
        "question": "If a Constitutional Amendment Bill relates to the",
        "options": ["A simple majority in Parliament, followed by Presidential assent.","A special majority in Parliament, followed by Presidential assent.","A special majority in Parliament, AND ratification by resolutions passed by a special majority in not less than one-half of the State Legislatures.","A special majority in Parliament, AND ratification by resolutions passed by a simple majority in not less than one-half of the State Legislatures, followed by Presidential assent."],
        "correctAnswerIndex": 3,
        "explanation": "Modifying the 7th Schedule strictly requires: 1) Special majority in Lok Sabha AND Rajya Sabha individually. 2) Ratification by at least 50% (half) of the State Assemblies by a SIMPLE MAJORITY in each assembly. 3) Finally, the obligatory assent of the President (who cannot withhold it under the 24th Amendment)."
    },
    {
        "id": "ch11-l3-q11",
        "question": "The power of Parliament to amend the Constitution includes the power to amend Article 368 itself. When doing so, which specific procedural safeguard must be adhered to?",
        "options": ["Only the Lok Sabha can vote on amending Article 368.","It requires only a Special Majority in Parliament.","It is one of the specific provisions triggering the",", requiring both a Special Majority in Parliament and Ratification by half the State Legislatures.","It requires a unanimous vote in the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "Article 368 is an"
    },
    {
        "id": "ch11-l3-q12",
        "question": "Consider the National Judicial Appointments Commission (NJAC) Act and the accompanying 99th Constitutional Amendment Act (2014). The Supreme Court struck down the amendment in 2015. On what specific",
        "options": ["It violated the fundamental right to equality (Article 14).","It violated the principles of federalism by removing state tribunals.","It compromised the","by granting the executive (Law Minister) and political entities an overriding say in the appointment of judges.","It bypassed the mandatory state ratification process."],
        "correctAnswerIndex": 2,
        "explanation": "The SC (4:1 majority) in the Fourth Judges Case struck down the 99th Amendment (NJAC) entirely. It ruled that judicial primary and the absolute separation of the executive from the judiciary regarding judge appointments is a"
    },
    {
        "id": "ch11-l3-q13",
        "question": "Assertion (A): A constitutional amendment passed strictly adhering to the special majority procedure in Article 368 cannot be declared ultra vires purely on procedural grounds.\\nReason (R): Because the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The Supreme Court exercises judicial review over constitutional amendments on BOTH substantive (Basic Structure test) AND procedural grounds. For instance, if a bill requiring state ratification didn"
    },
    {
        "id": "ch11-l3-q14",
        "question": "The power to",
        "options": ["M.V. Pylee","Granville Austin","K.C. Wheare","Ivor Jennings"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin noted that the amending process has proved itself one of the most ably conceived aspects of the Constitution. Though it appears complex, Austin praised it as the"
    },
    {
        "id": "ch11-l3-q15",
        "question": "If a new state (e.g., Telangana) is formed out of an existing state (e.g., Andhra Pradesh), the newly mapped territories legally alter the map defined in the First Schedule. Why did the formation of Telangana (2014) NOT require a Constitutional Amendment under Article 368?",
        "options": ["Because the Supreme Court issued a special exemption under Article 142.","Because Article 4 of the Constitution explicitly declares that laws making changes to the First and Fourth Schedules consequential to creating new states under Articles 2 and 3 are not considered","for the purpose of Article 368.","Because it was a Presidential decree under Emergency powers.","Because both State assemblies unanimously agreed to bypass Article 368."],
        "correctAnswerIndex": 1,
        "explanation": "This is the classic application of Article 4. Parliament alters the boundaries and immediately changes the First (territories) and Fourth (Rajya Sabha seats) Schedules using a simple ordinary legislative majority. Technically it modifies the constitutional text, but it is explicitly immunized from the rigorous procedure and definition of Article 368."
    },
    {
        "id": "ch11-l3-q16",
        "question": "Which Constitutional Amendment famously attempted to place Election disputes concerning the Prime Minister and the Speaker of the Lok Sabha entirely beyond the jurisdiction of all courts, including the Supreme Court, before being struck down in the Raj Narain case?",
        "options": ["24th Amendment Act, 1971","39th Amendment Act, 1975","42nd Amendment Act, 1976","44th Amendment Act, 1978"],
        "correctAnswerIndex": 1,
        "explanation": "During the Emergency, to protect Indira Gandhi"
    },
    {
        "id": "ch11-l3-q17",
        "question": "Examine the",
        "options": ["The Doctrine of Separation of Powers.","The Doctrine of Federalism.","The Doctrine of Parliamentary Sovereignty.","The Doctrine of Harmonious Construction."],
        "correctAnswerIndex": 1,
        "explanation": "The President is the head of the Indian State (the Union and the States essentially). The electoral college consists of elected MLAs of the states alongside MPs. Any change to this process alters the political weight and rights of the states within the Union. Thus, to protect Federalism, states are given a veto mechanism (ratification requirement)."
    },
    {
        "id": "ch11-l3-q18",
        "question": "Consider the constitutional paradox regarding the 9th Schedule (Article 31B). While placed under the protection of the shield of the 9th schedule via constitutional amendments, how did the Supreme Court in I.R. Coelho v. State of Tamil Nadu (2007) definitively rule on the amendability vs. judicial review debate?",
        "options": ["The Court ruled that any amendment placing a law in the 9th Schedule is completely immune from judicial review forever.","The Court ruled the 9th Schedule is unconstitutional and struck it out of the Constitution entirely.","The Court ruled that while Parliament can amend the Constitution to place laws in the 9th Schedule, any inclusion made *after* April 24, 1973 (Kesavananda date) is subject to judicial review if it violates the","(e.g., core fundamental rights like Arts 14, 19, 21).","The Court ruled that only State Legislatures can place laws in the 9th Schedule."],
        "correctAnswerIndex": 2,
        "explanation": "The landmark I.R. Coelho judgment (2007, 9-judge bench) definitively shattered the"
    },
    {
        "id": "ch11-l3-q19",
        "question": "If an amendment to the Constitution is passed altering the",
        "options": ["Special Majority under Article 368.","Special Majority + State Ratification under Article 368.","Simple majority in Parliament outside the strict purview of Article 368.","It requires the formation of a Constituent Assembly."],
        "correctAnswerIndex": 2,
        "explanation": "Privileges of the Parliament, its members, and its committees are listed among the specific provisions in Laxmikanth that can be amended by a simple ordinary legislative majority, rather than invoking the rigid mechanisms of a Special Majority under Article 368."
    },
    {
        "id": "ch11-l3-q20",
        "question": "Assertion (A): The President of India",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Prior to 1971, the President could theoretically withhold assent to a Constitutional Amendment Bill. The 24th Amendment changed"
    }
];

export const CHAPTER_11_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
