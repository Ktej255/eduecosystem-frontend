import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch75-l1-q1",
        "question": "Which Article of the Constitution of India provides for the office of the Advocate General for the States?",
        "options": ["Article 163","Article 165","Article 167","Article 177"],
        "correctAnswerIndex": 1,
        "explanation": "Article 165 of the Constitution of India provides for the office of the Advocate General for the States."
    },
    {
        "id": "ch75-l1-q2",
        "question": "The Advocate General of a State is appointed by:",
        "options": ["The President of India","The Governor of the State","The Chief Justice of the High Court","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is appointed by the Governor of the state."
    },
    {
        "id": "ch75-l1-q3",
        "question": "To be eligible for appointment as Advocate General, a person must be qualified to be appointed as:",
        "options": ["A District Judge","A Judge of a High Court","A Judge of the Supreme Court","The Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "He must be a person who is qualified to be appointed a judge of a High Court."
    },
    {
        "id": "ch75-l1-q4",
        "question": "The term of office of the Advocate General is:",
        "options": ["5 years","6 years or until the age of 62","Not fixed by the Constitution; holds office during the pleasure of the Governor","Co-terminus with the term of the State Legislative Assembly"],
        "correctAnswerIndex": 2,
        "explanation": "The term of office of the Advocate General is not fixed by the Constitution. He holds office during the pleasure of the Governor."
    },
    {
        "id": "ch75-l1-q5",
        "question": "The remuneration of the Advocate General is determined by:",
        "options": ["The State Legislature","The Constitution","The Governor","The President"],
        "correctAnswerIndex": 2,
        "explanation": "The remuneration of the Advocate General is not fixed by the Constitution. He receives such remuneration as the Governor may determine."
    },
    {
        "id": "ch75-l1-q6",
        "question": "To whom does the Advocate General submit their resignation?",
        "options": ["The Chief Justice of the High Court","The Governor","The Chief Minister","The President"],
        "correctAnswerIndex": 1,
        "explanation": "He can resign any time by addressing his resignation letter to the Governor."
    },
    {
        "id": "ch75-l1-q7",
        "question": "The Advocate General has the right to speak and take part in the proceedings of:",
        "options": ["Both Houses of the State Legislature (where applicable)","Any Committee of the State Legislature of which they may be named a member","Both (a) and (b)","Only the State Cabinet meetings"],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 177, the Advocate General has the right to speak and participate in the proceedings of the state legislature and its committees, but without the right to vote."
    },
    {
        "id": "ch75-l1-q8",
        "question": "Does the Advocate General have the right to vote in the State Legislature?",
        "options": ["Yes, in the Legislative Assembly","Yes, in the Legislative Council","No, they have no right to vote","Only in case of a tie"],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General has the right to speak and take part in proceedings but does NOT have the right to vote."
    },
    {
        "id": "ch75-l1-q9",
        "question": "The Advocate General enjoys all the privileges and immunities that are available to:",
        "options": ["A Judge of the High Court","A Member of the State Legislature","The Governor","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "He enjoys all the privileges and immunities that are available to a member of the state legislature."
    },
    {
        "id": "ch75-l1-q10",
        "question": "The primary duty of the Advocate General is to advise the ______ upon such legal matters as may be referred to them.",
        "options": ["Governor","State Government","High Court","President"],
        "correctAnswerIndex": 1,
        "explanation": "His primary duty is to give advice to the Government of the State upon such legal matters as may be referred to him by the Governor."
    },
    {
        "id": "ch75-l1-q11",
        "question": "Which Article deals with the rights of the Advocate General as respects the Houses of State Legislature?",
        "options": ["Article 165","Article 177","Article 194","Article 213"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 deals with the rights of ministers and Advocate General as respects the Houses."
    },
    {
        "id": "ch75-l1-q12",
        "question": "Is the Advocate General a member of the State Cabinet?",
        "options": ["Yes","No","Only if he is an MLA","Ex-officio"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is not a member of the state cabinet. There is a separate Law Minister at the cabinet level."
    },
    {
        "id": "ch75-l1-q13",
        "question": "The eligibility for Advocate General is the same as that of a:",
        "options": ["Supreme Court Judge","High Court Judge","District Judge","Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "He must be qualified to be appointed as a judge of a High Court."
    },
    {
        "id": "ch75-l1-q14",
        "question": "Who determines the remuneration of the Advocate General?",
        "options": ["The President","The Governor","The Chief Minister","The State Legislature"],
        "correctAnswerIndex": 1,
        "explanation": "Article 165(3) states he shall receive such remuneration as the Governor may determine."
    },
    {
        "id": "ch75-l1-q15",
        "question": "The Advocate General is the",
        "options": ["Union Government","State Government","District Administration","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "He is the highest law officer in the state."
    },
    {
        "id": "ch75-l1-q16",
        "question": "Qualification for Advocate General includes being a citizen of India and having held a judicial office in India for ______ years.",
        "options": ["5","10","15","20"],
        "correctAnswerIndex": 1,
        "explanation": "He must have held a judicial office for 10 years or been an advocate of a HC for 10 years."
    },
    {
        "id": "ch75-l1-q17",
        "question": "If a person has been an Advocate of a High Court for 10 years, can they be Advocate General?",
        "options": ["Yes","No","Only if they are also a PhD","Only with President"],
        "correctAnswerIndex": 0,
        "explanation": "10 years as an advocate in a High Court is a valid qualification."
    },
    {
        "id": "ch75-l1-q18",
        "question": "The Advocate General is part of the",
        "options": ["Judiciary","Executive","Legislature","Service Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is part of the State Executive (Article 153-167)."
    },
    {
        "id": "ch75-l1-q19",
        "question": "Can the Advocate General be a member of a committee of the State Legislature?",
        "options": ["Yes","No","Only if he is an MLC","Only in special sittings"],
        "correctAnswerIndex": 0,
        "explanation": "Article 177 allows him to be a member and participate in committees."
    },
    {
        "id": "ch75-l1-q20",
        "question": "The Advocate General",
        "options": ["Statutory","Constitutional","Executive","Military"],
        "correctAnswerIndex": 1,
        "explanation": "It is established under Article 165, making it a constitutional office."
    },
    {
        "id": "ch75-l1-q21",
        "question": "In the performance of his duties, the Advocate General has the right of audience in:",
        "options": ["Any court of law within the State","Only the High Court","Only the Supreme Court","Any court in India"],
        "correctAnswerIndex": 0,
        "explanation": "His right of audience is specifically within the state territory."
    },
    {
        "id": "ch75-l1-q22",
        "question": "Does the state legislature fix the salary of the Advocate General?",
        "options": ["Yes","No","Only if the Governor forgets","Only during financial emergencies"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor determines the remuneration."
    },
    {
        "id": "ch75-l1-q23",
        "question": "Who is the",
        "options": ["Chief Justice of HC","Advocate General","Law Minister","Director General of Police"],
        "correctAnswerIndex": 1,
        "explanation": "Advocate General is the chief legal advisor to the state government."
    },
    {
        "id": "ch75-l1-q24",
        "question": "Can the Advocate General take up private legal practice?",
        "options": ["Yes","No","Only in the Supreme Court","Only after 5 years"],
        "correctAnswerIndex": 0,
        "explanation": "He is not a full-time government servant and is not debarred from private practice."
    },
    {
        "id": "ch75-l1-q25",
        "question": "The Advocate General resides in which part of the Constitution?",
        "options": ["Part V","Part VI","Part III","Part IX"],
        "correctAnswerIndex": 1,
        "explanation": "Part VI deals with States."
    },
    {
        "id": "ch75-l1-q26",
        "question": "Conventionally, the Advocate General is appointed on the advice of:",
        "options": ["High Court Collegium","State Council of Ministers","Governor","President"],
        "correctAnswerIndex": 1,
        "explanation": "Like the AG at the center, the Advocate General is appointed on the advice of the state cabinet."
    },
    {
        "id": "ch75-l1-q27",
        "question": "Is there a security of tenure for the Advocate General?",
        "options": ["Yes, 5 years","No, he holds office during the pleasure of the Governor","Yes, like an HC Judge","Only during a majority government"],
        "correctAnswerIndex": 1,
        "explanation": "He serves at the pleasure of the Governor."
    },
    {
        "id": "ch75-l1-q28",
        "question": "Does the Advocate General need to be a",
        "options": ["Yes, mandatory","No, not specified in the Constitution, but they must be qualified as an HC judge","Only in states with a Legislative Council","Only if they are above 50 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution only mentions the qualifications of an HC judge."
    },
    {
        "id": "ch75-l1-q29",
        "question": "The Advocate General",
        "options": ["165","177","194","213"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 is the relevant provision."
    },
    {
        "id": "ch75-l1-q30",
        "question": "The Advocate General is considered the",
        "options": ["True","False, he is the first law officer of the STATE"],
        "correctAnswerIndex": 1,
        "explanation": "He is the first law officer of the state, not the second in any national ranking."
    },
    {
        "id": "ch75-l1-q31",
        "question": "Regarding the removal of the Advocate General, which of the following is true?",
        "options": ["They are removed by the same process as a High Court Judge","They are removed by the Governor at any time","They are removed only after an impeachment by the State Legislature","They are removed by the President of India"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General holds office during the pleasure of the Governor. There is no specific procedure or ground for their removal mentioned in the Constitution."
    },
    {
        "id": "ch75-l1-q32",
        "question": "Is the Advocate General a full-time government servant?",
        "options": ["Yes, they are part of the State Civil Services","No, they are not debarred from private legal practice","Yes, and they cannot take up private cases","They are a part-time employee of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is not a full-time counsel for the Government and is not debarred from private legal practice, provided it"
    },
    {
        "id": "ch75-l1-q33",
        "question": "Conventionally, the Advocate General resigns when:",
        "options": ["The High Court Chief Justice is transferred","The Council of Ministers (State) resigns or is replaced","The Governor’s term ends","A new Financial Year begins"],
        "correctAnswerIndex": 1,
        "explanation": "Since the Advocate General is appointed on the advice of the Council of Ministers, they conventionally resign when the government changes."
    },
    {
        "id": "ch75-l1-q34",
        "question": "The Advocate General",
        "options": ["Only the High Court of that specific State","Only the Subordinate Courts of that State","Any Court of law within the State","Only the Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "In the performance of his official duties, the Advocate General has the right of audience in any court in the state."
    },
    {
        "id": "ch75-l1-q35",
        "question": "Which of the following is a limitation on the Advocate General?",
        "options": ["They should not advise against the State Government","They should not defend an accused in criminal cases without the State Government","They should not accept a directorship in a company without permission","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These limitations ensure that there is no conflict of interest between his official duties and private practice."
    },
    {
        "id": "ch75-l1-q36",
        "question": "The office of the Advocate General is the highest ______ in the state.",
        "options": ["Judicial office","Executive office","Law office","Administrative office"],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General is the highest law officer in the state."
    },
    {
        "id": "ch75-l1-q37",
        "question": "If a person has been an advocate of a High Court for ______ years, they are eligible to be the Advocate General.",
        "options": ["5 years","7 years","10 years","15 years"],
        "correctAnswerIndex": 2,
        "explanation": "Qualification for Advocate General matches that of an HC Judge: 10 years of judicial office or 10 years of advocate practice in a High Court."
    },
    {
        "id": "ch75-l1-q38",
        "question": "Can the Advocate General appear for the State Government in the Supreme Court?",
        "options": ["No, only the Attorney General can do that","Yes, if instructed by the State Government","Only with the permission of the President","Only if they are also a Senior Advocate"],
        "correctAnswerIndex": 1,
        "explanation": "While his right of audience is in state courts, the State Government can and does engage him to represent the state in the Supreme Court."
    },
    {
        "id": "ch75-l1-q39",
        "question": "Who is the",
        "options": ["The Chief Justice of the High Court","The Law Secretary","The Advocate General","The Chief Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General"
    },
    {
        "id": "ch75-l1-q40",
        "question": "The Advocate General",
        "options": ["Article 165","Article 177","Article 194","Article 202"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 grants the Advocate General the right to speak and participate in the proceedings of state legislative houses."
    },
    {
        "id": "ch75-l1-q41",
        "question": "The salary of the Advocate General is:",
        "options": ["Fixed in the Second Schedule","Fixed by the State Legislature by law","Determined by the Governor","Equivalent to a High Court Judge"],
        "correctAnswerIndex": 2,
        "explanation": "His remuneration is at the discretion of the Governor; it is not fixed by the Constitution or necessarily by the legislature."
    },
    {
        "id": "ch75-l1-q42",
        "question": "Can the Advocate General be a member of more than one House in a bicameral state?",
        "options": ["Yes, he has the right to speak in both","No, he must choose one","Only if he is elected","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Article 177 gives him the right to speak in both Houses (Assembly and Council) where they exist."
    },
    {
        "id": "ch75-l1-q43",
        "question": "Regarding",
        "options": ["Subject to the same privileges as an MLA/MLC while in the House","Immune from all civil arrests","Higher than the CM in the House","Only entitled to privileges in court"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 194(4), the same privileges available to members of the legislature are available to the Advocate General."
    },
    {
        "id": "ch75-l1-q44",
        "question": "Why does the Advocate General resign when the Cabinet resigns?",
        "options": ["Because he is part of the","executive by convention","Because the Constitution mandates it","Because the Governor is also changed","To take a rest"],
        "correctAnswerIndex": 0,
        "explanation": "Conventionally, he is the appointee of the specific political executive and leaves with them."
    },
    {
        "id": "ch75-l1-q45",
        "question": "The Advocate General belongs to which of the following groups?",
        "options": ["Constitutional Body","Statutory Body","Judicial Body","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Since the office is established by Article 165, it is a constitutional body."
    },
    {
        "id": "ch75-l1-q46",
        "question": "Can the Advocate General represent a private client against the State Government?",
        "options": ["Yes, if he charges a high fee","No, he should not advise or hold a brief against the Government of India or the State","Only if it","Only with the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Advising against the state would be a direct conflict of interest with his official duties."
    },
    {
        "id": "ch75-l1-q47",
        "question": "Who performs the",
        "options": ["The Chief Minister","The Governor","The High Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor assigns legal duties and roles to the Advocate General under Article 165."
    },
    {
        "id": "ch75-l1-q48",
        "question": "Is the Advocate General considered the",
        "options": ["Yes, he is the chief advocate representing the state in legal forums","No, he is a judge","Only for revenue cases","Only for central government cases"],
        "correctAnswerIndex": 0,
        "explanation": "He is the chief advocate and legal representative of the state executive."
    },
    {
        "id": "ch75-l1-q49",
        "question": "To be eligible as Advocate General, a person who has held judicial office must have done so in ______.",
        "options": ["Any court in the world","The territory of India","Only in that specific state","Only in High Courts"],
        "correctAnswerIndex": 1,
        "explanation": "The qualification specifies holding judicial office in the"
    },
    {
        "id": "ch75-l1-q50",
        "question": "Does the Advocate General have the right to speak in the Parliament of India?",
        "options": ["Yes","No, his right is restricted to the state legislature","Only if he is a member of Rajya Sabha","Only during national emergencies"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General"
    },
    {
        "id": "ch75-l1-q51",
        "question": "The Advocate General should not accept appointment as a director in any company without the permission of the ______.",
        "options": ["Governor","State Government","President","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "To prevent conflict of interest, the state government"
    },
    {
        "id": "ch75-l1-q52",
        "question": "In case of a criminal defense, the Advocate General needs permission from ______ to represent the accused.",
        "options": ["The CJI","The State Government","The Governor","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Similar to the AG, the Advocate General needs government permission to defend individuals in criminal cases."
    },
    {
        "id": "ch75-l1-q53",
        "question": "Who ranks higher in the state warrant of precedence?",
        "options": ["Advocate General","High Court Judges","Cabinet Ministers of the State","Speakers of the Assembly"],
        "correctAnswerIndex": 2,
        "explanation": "In most state orders of precedence, Cabinet Ministers and the Speaker are ranked higher than the Advocate General."
    },
    {
        "id": "ch75-l1-q54",
        "question": "Can the Advocate General provide",
        "options": ["No, only when referred by the Governor","Yes, he is a proactive legal advisor","Only in criminal matters","Only if the CM requests"],
        "correctAnswerIndex": 1,
        "explanation": "While his core duty is acting on referrals, a proactive legal advisor (Advocate General) often gives advice on sensitive legal matters to prevent litigation."
    },
    {
        "id": "ch75-l1-q55",
        "question": "Does the Advocate General",
        "options": ["Yes","No, his term is independent of the Governor","Only if the new Governor dismisses him","Yes, by convention"],
        "correctAnswerIndex": 1,
        "explanation": "He serves at the"
    },
    {
        "id": "ch75-l1-q56",
        "question": "The Advocate General is the counterpart of which Union official?",
        "options": ["Attorney General","Solicitor General","Law Minister","CJI"],
        "correctAnswerIndex": 0,
        "explanation": "The Advocate General is the state counterpart of the Attorney General of India."
    },
    {
        "id": "ch75-l1-q57",
        "question": "Can the Advocate General be a part of a",
        "options": ["Yes, if the state has a bicameral legislature and a joint sitting is called","No","Only if he is the Speaker","Only for budget sittings"],
        "correctAnswerIndex": 0,
        "explanation": "Article 177 applies to both Houses and any joint sitting thereof."
    },
    {
        "id": "ch75-l1-q58",
        "question": "Qualification for Advocate General: Does",
        "options": ["Yes, it","No, only HC judgeship counts","Only if the High Court certifies it","Only if they were also an advocate"],
        "correctAnswerIndex": 0,
        "explanation": "Holding a judicial office for 10 years at any level (including district) fulfills the criterion."
    },
    {
        "id": "ch75-l1-q59",
        "question": "Regarding",
        "options": ["Arresting in civil cases","Proceedings in court for anything said in the legislature","Paying for local transport","Paying state income tax"],
        "correctAnswerIndex": 1,
        "explanation": "Freedom of speech and immunity from court proceedings for legislative speech are key privileges."
    },
    {
        "id": "ch75-l1-q60",
        "question": "Who appoints the",
        "options": ["The Advocate General","The State Government (often in consultation with the Advocate General)","The High Court Chief Justice","The Governor directly"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative appointments are by the government, but the Advocate General often plays a lead role in selection."
    },
    {
        "id": "ch75-l1-q61",
        "question": "Consider the following statements regarding the Advocate General (AG) of a State:\\n1. Their salary is charged on the Consolidated Fund of the State.\\n2. The Constitution does not specify the grounds for their removal.\\n3. They must be a citizen of India.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2 and 3 are correct. Statement 1 is false: The Constitution says they receive such remuneration as the Governor may determine; it"
    },
    {
        "id": "ch75-l1-q62",
        "question": "In a 2025-26 scenario where a State Government",
        "options": ["The Governor","The Advocate General","The Attorney General","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is the highest law officer of the state and responsible for defending the state"
    },
    {
        "id": "ch75-l1-q63",
        "question": "Which of the following features are common to both the Attorney General of India and the Advocate General of a State?\\n1. Holding office during the pleasure of the appointing authority.\\n2. Right to speak in the respective legislatures without the right to vote.\\n3. Qualifications being equivalent to a Judge of the respective highest court (SC/HC).\\nSelect the correct answer:",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Both serve at pleasure, have right to speak without vote, and have qualifications equivalent to judges of the respective superior courts."
    },
    {
        "id": "ch75-l1-q64",
        "question": "Assertion (A): The Advocate General is conventionally a",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "His tenure is tied to the political executive"
    },
    {
        "id": "ch75-l1-q65",
        "question": "Can the Advocate General be appointed as a Judge of the High Court while holding office?",
        "options": ["Yes, provided they resign as Advocate General first","No, this is a conflict of interest","Yes, if they have been an advocate for 10 years","Only if the President permits"],
        "correctAnswerIndex": 2,
        "explanation": "If they fulfill the HC judge qualification (which they must to be AG), they can be elevated to the bench."
    },
    {
        "id": "ch75-l1-q66",
        "question": "Regarding",
        "options": ["The Governor acting in his personal capacity","The Governor acting on the aid and advice of the Council of Ministers","The Governor acting on the advice of the High Court","The Governor acting as an agent of the President"],
        "correctAnswerIndex": 1,
        "explanation": "The appointment and removal of the AG is an executive power exercised on the advice of the cabinet."
    },
    {
        "id": "ch75-l1-q67",
        "question": "Is the Advocate General an",
        "options": ["Yes","No, he is a constitutional appointee and doesn","civil post","Only if he is on a fixed salary","Only for disciplinary purposes"],
        "correctAnswerIndex": 1,
        "explanation": "Article 311 protections for civil servants do not apply to constitutional offices like the Advocate General."
    },
    {
        "id": "ch75-l1-q68",
        "question": "If the State Legislative Assembly is dissolved, should the Advocate General resign immediately?",
        "options": ["Yes, by constitutional mandate","No, he continues until the Council of Ministers resigns or is replaced (caretaker government period)","Yes, his office is tied to the Assembly directly","Only if the Speaker says so"],
        "correctAnswerIndex": 1,
        "explanation": "His primary link is with the Council of Ministers, not the Assembly itself."
    },
    {
        "id": "ch75-l1-q69",
        "question": "The Advocate General",
        "options": ["Civil cases only","Criminal cases only","Any court within the state including tribunals and commissions","Only the High Court"],
        "correctAnswerIndex": 2,
        "explanation": "The right is comprehensive for all legal forums within the state"
    },
    {
        "id": "ch75-l1-q70",
        "question": "In a situation of",
        "options": ["Is automatically dismissed","Continues until the President/Governor removes him","Is replaced by the Solicitor General of India","Becomes a judge"],
        "correctAnswerIndex": 1,
        "explanation": "He holds office during"
    },
    {
        "id": "ch75-l1-q71",
        "question": "Can the Advocate General be a member of a committee of the",
        "options": ["No","Yes, under Article 177, he can be named as a member of any committee of the state legislature","Only if he is an MLA","Only with the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 is quite clear about his right to be a member of any committee regardless of his membership in either house."
    },
    {
        "id": "ch75-l1-q72",
        "question": "If an Advocate General is designated as a",
        "options": ["Yes, subject to the constraints of the Senior Advocate rules and his official duty towards the state","No, it","Only in the Supreme Court","Only after he resigns"],
        "correctAnswerIndex": 0,
        "explanation": "Dual status as a constitutional officer and a senior advocate doesn"
    },
    {
        "id": "ch75-l1-q73",
        "question": "The Advocate General",
        "options": ["Yes, it","charged","No, all constitutional salaries are charged","Only during financial emergencies","It depends on the State Law"],
        "correctAnswerIndex": 0,
        "explanation": "Since it"
    },
    {
        "id": "ch75-l1-q74",
        "question": "Can the Advocate General hold two state AG offices simultaneously?",
        "options": ["Yes, for a temporary period if the Governor(s) agree","No, impossible","Only for North Eastern states","Only during wars"],
        "correctAnswerIndex": 0,
        "explanation": "Like the Governor, a person can sometimes hold additional charge if required, though it"
    },
    {
        "id": "ch75-l1-q75",
        "question": "Does the",
        "options": ["Yes, he is a member of the selection committee","No, he has no formal role in the appointment process of HC judges","He can veto a candidate","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "The appointment is through the collegium (judiciary) and the executive (Governor/President), not the Advocate General."
    },
    {
        "id": "ch75-l1-q76",
        "question": "The Advocate General",
        "options": ["Any court proceeding in respect of anything said or any vote given in the legislature","Immunity from income tax on official remuneration","Protection from any civil lawsuits in their personal capacity","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Like members of the house, the AG gets immunity for things said in the legislature/committees, ensuring professional freedom of advice."
    },
    {
        "id": "ch75-l1-q77",
        "question": "Assertion (A): The Governor can remove the Advocate General at any time without any reason.\\nReason (R): The Advocate General holds office during the pleasure of the Governor and has no security of tenure under Article 165.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch75-l1-q78",
        "question": "Can the Advocate General",
        "options": ["Yes, the Union and the State are one in many matters","No, he should not advise any authority against the State Government he represents","Only if the Supreme Court orders so","Only for inter-state water disputes"],
        "correctAnswerIndex": 1,
        "explanation": "To maintain professional integrity and constitutional loyalty, him representing or advising any party (including the Union) against his own state is restricted."
    },
    {
        "id": "ch75-l1-q79",
        "question": "Does the",
        "options": ["Yes, he is a permanent invitee to the judges","No, this would violate the independence of the judiciary","Only in revenue cases","Only with the President"],
        "correctAnswerIndex": 1,
        "explanation": "Judicial administration is separate from the role of the Advocate General, who is an executive officer/representative in court."
    },
    {
        "id": "ch75-l1-q80",
        "question": "If a Bill in the State Assembly is sent to a",
        "options": ["Yes, under Article 177, if he is named as a member of such a committee","No, he can only speak in the House floors","Only if both houses agree","Only in special budget committees"],
        "correctAnswerIndex": 0,
        "explanation": "His right to participate in any committee of the legislature includes Select Committees, which often require technical legal advice."
    },
    {
        "id": "ch75-l1-q81",
        "question": "Which of the following is equivalent to the AG",
        "options": ["Article 76(3)","Article 88","Article 105","Article 143"],
        "correctAnswerIndex": 0,
        "explanation": "Article 76(3) gives the AG the right of audience in all courts in India. Article 165(3) (implied/stated in text) gives the same to state AGs within the state."
    },
    {
        "id": "ch75-l1-q82",
        "question": "Does the Advocate General have the power to",
        "options": ["Yes, in all criminal matters","No, that power rests with the police and the Home Department/Directorate of Prosecution","Only for corruption cases","Only with Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General advises and represents; he is not the investigating authority or the one who institutes regular police cases."
    },
    {
        "id": "ch75-l1-q83",
        "question": "Regarding",
        "options": ["No, it must be the same as HC Judge","Yes, as the Governor (Cabinet) has the power to","his remuneration","Only if approved by the President","Only in major states"],
        "correctAnswerIndex": 1,
        "explanation": "The discretion given by Article 165(3) allows the state to decide the payment model."
    },
    {
        "id": "ch75-l1-q84",
        "question": "Can a person who is 65 years old be appointed as Advocate General?",
        "options": ["Yes, since the Constitution doesn","No, HC judges retire at 62, so he is ineligible","Only with President","Only in union territories"],
        "correctAnswerIndex": 0,
        "explanation": "While retirement age of HC judges is 62, there is no age limit for being"
    },
    {
        "id": "ch75-l1-q85",
        "question": "The Advocate General",
        "options": ["The Law Secretary is his senior","He is the senior-most legal person; Law Secretary is an administrative officer","They are the same person","They have no relationship"],
        "correctAnswerIndex": 1,
        "explanation": "The AG is a constitutional officer (equivalent to minister level); the Law Secretary is a civil servant coordinating the ministry."
    },
    {
        "id": "ch75-l1-q86",
        "question": "If the state government wants to challenge a Central Law, who coordinates the state",
        "options": ["The Attorney General","The Advocate General (reporting to the Cabinet)","The High Court","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The AG leads the state"
    },
    {
        "id": "ch75-l1-q87",
        "question": "Does the state legislature have the power to",
        "options": ["Yes, by a 2/3rd majority","No, there is no provision for impeachment","Yes, for proved corruption","Only if the Assembly is biennial"],
        "correctAnswerIndex": 1,
        "explanation": "He is not an officer whose removal is protected by a specific procedure (like judges); he serves at"
    },
    {
        "id": "ch75-l1-q88",
        "question": "The title",
        "options": ["The terminology used by the Mughals","The British Colonial period nomenclature (Government of India Act 1935)","American federalism","Ancient Greek systems"],
        "correctAnswerIndex": 1,
        "explanation": "The GOI Act 1935 established the office in India, and the 1950 Constitution refined its role."
    },
    {
        "id": "ch75-l1-q89",
        "question": "Can the Advocate General continue his private practice after being appointed?",
        "options": ["Yes, he is not a full-time counsel and can continue his practice alongside official work","No, he must give up all cases","Only in cases occurring outside the state","Only pro-bono cases"],
        "correctAnswerIndex": 0,
        "explanation": "Private practice is allowed as long as it doesn"
    },
    {
        "id": "ch75-l1-q90",
        "question": "The",
        "options": ["Strict","Political (as he is often changed with the government)","Legalistic","Academic"],
        "correctAnswerIndex": 1,
        "explanation": "The link with political executive is the main characteristic of the AG"
    },
    {
        "id": "ch75-l1-q91",
        "question": "Which Article of the Indian Constitution empowers the Parliament and State Legislatures to regulate the recruitment and conditions of service of public servants?",
        "options": ["Article 308","Article 309","Article 310","Article 311"],
        "correctAnswerIndex": 1,
        "explanation": "Article 309 provides for the recruitment and conditions of service of persons serving the Union or a State."
    },
    {
        "id": "ch75-l1-q92",
        "question": "The",
        "options": ["Article 309","Article 310","Article 311","Article 312"],
        "correctAnswerIndex": 1,
        "explanation": "Article 310 states that members of the civil services hold office during the pleasure of the President (for Union) or the Governor (for State)."
    },
    {
        "id": "ch75-l1-q93",
        "question": "Article 311 of the Indian Constitution provides safeguards against:",
        "options": ["Frequent transfers","Dismissal, removal or reduction in rank","Salary deductions","Suspension pending inquiry"],
        "correctAnswerIndex": 1,
        "explanation": "Article 311 provides two major safeguards: no dismissal by an authority subordinate to the appointing one, and an opportunity for inquiry."
    },
    {
        "id": "ch75-l1-q94",
        "question": "Which Article of the Constitution deals with the",
        "options": ["Article 310","Article 311","Article 312","Article 315"],
        "correctAnswerIndex": 2,
        "explanation": "Article 312 provides for the creation of All-India Services common to the Union and the States."
    },
    {
        "id": "ch75-l1-q95",
        "question": "Which of the following is NOT an All-India Service?",
        "options": ["IAS","IPS","Indian Forest Service","Indian Foreign Service"],
        "correctAnswerIndex": 3,
        "explanation": "The Indian Foreign Service is a Central Service, not an All-India Service. Only IAS, IPS, and Indian Forest Service (IFS) are All-India Services."
    },
    {
        "id": "ch75-l1-q96",
        "question": "The Indian Forest Service was established as the third All-India Service in which year?",
        "options": ["1950","1966","1972","1985"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Forest Service (IFS) was created in 1966."
    },
    {
        "id": "ch75-l1-q97",
        "question": "Who is considered the",
        "options": ["Jawaharlal Nehru","Sardar Vallabhbhai Patel","Lord Cornwallis","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 1,
        "explanation": "Sardar Vallabhbhai Patel is hailed as the"
    },
    {
        "id": "ch75-l1-q98",
        "question": "Central Services are classified into how many groups?",
        "options": ["Groups A and B","Groups A, B, and C","Groups A, B, C, and D","Only Gazetted and Non-Gazetted"],
        "correctAnswerIndex": 2,
        "explanation": "Central Services are traditionally classified into four groups: A, B, C, and D."
    },
    {
        "id": "ch75-l1-q99",
        "question": "The ultimate control over All-India Services vests with the:",
        "options": ["State Government","Central Government","UPSC","President of India directly"],
        "correctAnswerIndex": 1,
        "explanation": "While AIS officers serve under States, their ultimate control lies with the Central Government."
    },
    {
        "id": "ch75-l1-q100",
        "question": "Members of State Services are recruited by:",
        "options": ["UPSC","State Public Service Commission","Central Government","Governor directly"],
        "correctAnswerIndex": 1,
        "explanation": "Each State has its own Public Service Commission for recruitment to various state-level services."
    },
    {
        "id": "ch75-l1-q101",
        "question": "Which Department acts as the nodal agency for the personnel management of IAS?",
        "options": ["Ministry of Home Affairs","Department of Personnel and Training (DoPT)","Prime Minister","Cabinet Secretariat"],
        "correctAnswerIndex": 1,
        "explanation": "The DoPT is the nodal agency for IAS."
    },
    {
        "id": "ch75-l1-q102",
        "question": "The Administrative Tribunals were established to adjudicate service disputes under which Amendment?",
        "options": ["24th Amendment","42nd Amendment","44th Amendment","52nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment of 1976 added Part XIV-A and Article 323A for Administrative Tribunals."
    },
    {
        "id": "ch75-l1-q103",
        "question": "Which Ministry has administrative control over the Indian Police Service (IPS)?",
        "options": ["Ministry of Personnel","Ministry of Home Affairs","Ministry of Defence","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Home Affairs is the cadre-controlling authority for IPS."
    },
    {
        "id": "ch75-l1-q104",
        "question": "The Indian Forest Service is under the administrative control of which Ministry?",
        "options": ["Ministry of Agriculture","Ministry of Environment, Forest and Climate Change","Ministry of Home Affairs","Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Environment, Forest and Climate Change controls the IFoS."
    },
    {
        "id": "ch75-l1-q105",
        "question": "Which Article provides that no civil servant shall be dismissed by an authority subordinate to that by which he was appointed?",
        "options": ["Article 309","Article 310","Article 311(1)","Article 312"],
        "correctAnswerIndex": 2,
        "explanation": "This is a key procedural safeguard under Article 311(1)."
    },
    {
        "id": "ch75-l1-q106",
        "question": "The recruitment process for All-India Services is conducted by:",
        "options": ["DoPT","UPSC","SSC","Cabinet Secretariat"],
        "correctAnswerIndex": 1,
        "explanation": "The Union Public Service Commission (UPSC) conducts the Civil Services Examination."
    },
    {
        "id": "ch75-l1-q107",
        "question": "Which of the following is a",
        "options": ["Indian Foreign Service","Indian Engineering Services","Indian Postal Service","Indian Revenue Service"],
        "correctAnswerIndex": 1,
        "explanation": "Indian Engineering Services is a specialised technical service recruited via a separate exam."
    },
    {
        "id": "ch75-l1-q108",
        "question": "Civil servants have equality of opportunity in public employment under which Fundamental Right?",
        "options": ["Article 14","Article 15","Article 16","Article 19"],
        "correctAnswerIndex": 2,
        "explanation": "Article 16 guarantees equality of opportunity in matters of public employment."
    },
    {
        "id": "ch75-l1-q109",
        "question": "The term",
        "options": ["The Constitution","The Judiciary","The Civil Services","The Indian Army"],
        "correctAnswerIndex": 2,
        "explanation": "He believed civil services were essential for national unity and administration."
    },
    {
        "id": "ch75-l1-q110",
        "question": "The Central Staffing Scheme handles:",
        "options": ["Recruitment of Group C staff","Deputation of officers from AIS to Central Government","Training of IPS officers","Electoral roll preparation"],
        "correctAnswerIndex": 1,
        "explanation": "It regulates the movement of AIS and Group A Central Service officers to the Centre for fixed tenures."
    },
    {
        "id": "ch75-l1-q111",
        "question": "Under Article 309, who has the power to make rules regarding services until the respective legislature acts?",
        "options": ["The President (Union) or Governor (State)","The Supreme Court","The UPSC","The Cabinet Secretary"],
        "correctAnswerIndex": 0,
        "explanation": "The proviso to Article 309 grants this power to the executive until legislation is passed."
    },
    {
        "id": "ch75-l1-q112",
        "question": "Article 311 safeguards apply to which of the following?",
        "options": ["Members of the Defence Services","Persons holding civil posts under the Union or States","Employees of Public Sector Undertakings (PSUs)","All of the above"],
        "correctAnswerIndex": 1,
        "explanation": "It explicitly excludes military personnel and those in private/corporate sectors."
    },
    {
        "id": "ch75-l1-q113",
        "question": "The primary role of All-India Services in India is to:",
        "options": ["Advise the President on foreign policy","Ensure uniform administrative standards across the country","Control the state police forces only","Organize Lok Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "AIS act as a bridge between Centre and States, ensuring nationwide administrative consistency."
    },
    {
        "id": "ch75-l1-q114",
        "question": "The IAS officers are trained at which iconic institute?",
        "options": ["SVP National Police Academy","Lal Bahadur Shastri National Academy of Administration (LBSNAA)","National Defence College","Indian Institute of Public Administration"],
        "correctAnswerIndex": 1,
        "explanation": "LBSNAA in Mussoorie is the premier training school for IAS probationers."
    },
    {
        "id": "ch75-l1-q115",
        "question": "Which of the following describes the",
        "options": ["Officers are always posted in their home state","Officers are allocated to a specific State or group of States for their career","Officers must change their state every three years","Officers are only allowed to work in Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "Every AIS officer is assigned a State cadre (like TN, MH, UP) after recruitment."
    },
    {
        "id": "ch75-l1-q116",
        "question": "The",
        "options": ["Indian Foreign Service","Indian Administrative Service","Indian Economic Service","Indian Revenue Service"],
        "correctAnswerIndex": 1,
        "explanation": "IAS is the successor to the ICS."
    },
    {
        "id": "ch75-l1-q117",
        "question": "Which Article provides for the creation of",
        "options": ["Article 323A","Article 324","Article 329","Article 312"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323A empowers Parliament to establish tribunals for service matters."
    },
    {
        "id": "ch75-l1-q118",
        "question": "Maximum tenure of a UPSC member is:",
        "options": ["5 years or 62 years of age","6 years or 65 years of age","5 years or 65 years of age","No fixed tenure"],
        "correctAnswerIndex": 1,
        "explanation": "UPSC members serve for 6 years or until age 65."
    },
    {
        "id": "ch75-l1-q119",
        "question": "Civil servants are prohibited from taking part in politics by:",
        "options": ["The Constitution explicitly","Service Conduct Rules","The Representation of People Act","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Central Civil Services (Conduct) Rules prohibit active political participation."
    },
    {
        "id": "ch75-l1-q120",
        "question": "Who is the executive head of a district in India?",
        "options": ["Member of Parliament","District Collector / District Magistrate","Superintendent of Police","Zila Parishad Chairman"],
        "correctAnswerIndex": 1,
        "explanation": "The DM/DC is the principal executive officer of the district."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch75-l2-q1",
        "question": "The",
        "options": ["Article 309","Article 311","Article 312","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the absolute pleasure of the Crown in Britain, the Indian Constitution limits the pleasure of the President/Governor through procedural safeguards under Article 311."
    },
    {
        "id": "ch75-l2-q2",
        "question": "What is the primary difference between All-India Services (AIS) and Central Services?",
        "options": ["AIS work only in states; Central Services work only in Delhi.","AIS can serve both Union and State governments; Central Services work only in the Union Government.","Central Service officers have higher salaries than AIS officers.","AIS are recruited by the President; Central Services by the PM."],
        "correctAnswerIndex": 1,
        "explanation": "AIS members are common to both Union and States. Central Services are exclusively for the Union government"
    },
    {
        "id": "ch75-l2-q3",
        "question": "Which of the following is true regarding Article 311(2)?",
        "options": ["It allows for summary dismissal under any circumstances.","It requires a mandatory inquiry before dismissal, removal, or reduction in rank.","It protects military personnel from arbitrary firing.","It applies only to Group D employees."],
        "correctAnswerIndex": 1,
        "explanation": "Article 311(2) mandates that no person shall be dismissed, removed, or reduced in rank except after an inquiry."
    },
    {
        "id": "ch75-l2-q4",
        "question": "The power to create an All-India Judicial Service (AIJS) was added by which Constitutional Amendment?",
        "options": ["24th Amendment","42nd Amendment","44th Amendment","102nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment of 1976 added the provision for AIJS in Article 312."
    },
    {
        "id": "ch75-l2-q5",
        "question": "Under the",
        "options": ["1:1","1:2","1:3","2:1"],
        "correctAnswerIndex": 1,
        "explanation": "The policy generally maintains a ratio of 1 home state officer to 2 outside state officers to promote national integration."
    },
    {
        "id": "ch75-l2-q6",
        "question": "Which landmark judgment upheld that judicial review of Administrative Tribunals by High Courts is part of the basic structure?",
        "options": ["Minerva Mills v. Union of India","L. Chandra Kumar v. Union of India","Kihoto Hollohan v. Zachillhu","S.R. Bommai v. Union of India"],
        "correctAnswerIndex": 1,
        "explanation": "In L. Chandra Kumar (1997), the SC held that the power of judicial review of High Courts under Art 226 and 227 remains over Administrative Tribunals."
    },
    {
        "id": "ch75-l2-q7",
        "question": "Why are All-India Services sometimes called",
        "options": ["Because they integrate with the judiciary.","Because they serve two levels of government (Union and State) with a common recruitment process.","Because they are only composed of technical experts.","Because they integrate with private sector companies."],
        "correctAnswerIndex": 1,
        "explanation": "AIS members are recruited and trained centrally but allocated to state cadres, allowing them to work interchangeably at both levels."
    },
    {
        "id": "ch75-l2-q8",
        "question": "A",
        "options": ["The President on his own","The Parliament by an act on the request of the respective state legislatures","A joint resolution of the affected state governors","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "A JSPSC is a statutory body (unlike UPSC/SPSC), created by Parliament on state request."
    },
    {
        "id": "ch75-l2-q9",
        "question": "The safeguard under Article 311 does NOT apply in which of the following cases?",
        "options": ["Dishonesty in administrative work","Conduct which led to criminal conviction","Minor penalties like a fine","Failure to complete a project on time"],
        "correctAnswerIndex": 1,
        "explanation": "Article 311(2) specifically lists conviction on a criminal charge as an exception to the mandatory inquiry."
    },
    {
        "id": "ch75-l2-q10",
        "question": "The",
        "options": ["Satyendranath Tagore","Subhas Chandra Bose","Surendranath Banerjee","W.C. Bonnerjee"],
        "correctAnswerIndex": 0,
        "explanation": "Satyendranath Tagore became the first Indian to join the ICS in 1863."
    },
    {
        "id": "ch75-l2-q11",
        "question": "Regarding",
        "options": ["District Collector","Joint Secretary and above","Probationers","Tehsildars"],
        "correctAnswerIndex": 1,
        "explanation": "Lateral entry targets mid-career professionals for senior-level advisory/governance roles like Joint Secretary."
    },
    {
        "id": "ch75-l2-q12",
        "question": "One of the reasons for creating All-India Services was to maintain",
        "options": ["Ensuring all states follow the same party politics.","Ensuring high and uniform caliber of administration across the federation.","Eliminating the role of State Governments in recruitment.","Centralizing all power in Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Uniform administrative standards help provide stability and efficiency across different states."
    },
    {
        "id": "ch75-l2-q13",
        "question": "Assertion (A): Article 311 is the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The procedural safeguards offer substantial security of tenure, preventing arbitrary removals."
    },
    {
        "id": "ch75-l2-q14",
        "question": "In the context of civil services, the",
        "options": ["Macaulay Committee (1854)","Lee Commission (1923)","Aitchison Committee (1886)","Hota Committee (2004)"],
        "correctAnswerIndex": 0,
        "explanation": "Lord Macaulay"
    },
    {
        "id": "ch75-l2-q15",
        "question": "The tenure of a Governor",
        "options": ["The Chief Minister","The State Legislature","The safeguards of Article 311","The High Court"],
        "correctAnswerIndex": 2,
        "explanation": "Article 311 limits the absolute"
    },
    {
        "id": "ch75-l2-q16",
        "question": "Which of the following describes the",
        "options": ["To the Minister and the UPSC","To the current government and the permanent Constitution","To their family and the state","To the Central Government and the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Civil servants must execute policies of the elected government while remaining neutral and upholding constitutional law."
    },
    {
        "id": "ch75-l2-q17",
        "question": "What is the role of the",
        "options": ["Recruit officers","Handle disciplinary and corruption cases involving senior officers","Train the IPS officers","Audit the accounts of the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The CVC is the main body for preventing corruption and recommending disciplinary action."
    },
    {
        "id": "ch75-l2-q18",
        "question": "The",
        "options": ["Abolition of the ICS","Establishment of the Public Service Commission (precursor to UPSC)","Creation of the Indian Forest Service","Salary freeze for British officers"],
        "correctAnswerIndex": 1,
        "explanation": "The Lee Commission recommended the creation of an independent Public Service Commission, which led to the 1926 body."
    },
    {
        "id": "ch75-l2-q19",
        "question": "Article 312 specifies that",
        "options": ["The President","The Rajya Sabha via a resolution","The Supreme Court","The UPSC annual report"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha must pass a resolution declaring it necessary in the national interest before Parliament creates the service."
    },
    {
        "id": "ch75-l2-q20",
        "question": "Which level of government handles",
        "options": ["State suspends; State removes.","Centre suspends; Centre removes.","State can suspend; Only Centre can remove/dismiss.","Only the High Court can do both."],
        "correctAnswerIndex": 2,
        "explanation": "The immediate employing government (State) can suspend for misconduct, but final dismissal/removal lies with the Central Government (appointing authority)."
    },
    {
        "id": "ch75-l2-q21",
        "question": "The 42nd Amendment added the phrase",
        "options": ["Transfer to a remote area","Reversion to a lower post or scale as a penalty","Deduction of one month","Loss of seniority in the list"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch75-l2-q22",
        "question": "The",
        "options": ["Judicial Reforms","Civil Service Reforms","Police modernization","Federal reorganization"],
        "correctAnswerIndex": 1,
        "explanation": "The P.C. Hota Committee made far-reaching recommendations on civil services recruitment and governance."
    },
    {
        "id": "ch75-l2-q23",
        "question": "If a Joint State Public Service Commission is created, its members are appointed by:",
        "options": ["The affected State Governors jointly","The President of India","The Chairman of the UPSC","The Chief Minister of the largest state involved"],
        "correctAnswerIndex": 1,
        "explanation": "Members of a JSPSC are appointed by the President. (UPSC/SPSC members are appointed by President/Governor respectively)."
    },
    {
        "id": "ch75-l2-q24",
        "question": "Why is the term",
        "options": ["Because they hold office until the age of 100.","Because they survive changes in the political government (Ministry).","Because they cannot be fired even if they commit a crime.","Because they own the government buildings."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike ministers who change with elections, civil servants provide continuity and administrative tenure."
    },
    {
        "id": "ch75-l2-q25",
        "question": "The",
        "options": ["Sarkaria Commission","First ARC","Second ARC (Veerappa Moily)","Verma Committee"],
        "correctAnswerIndex": 2,
        "explanation": "The Fourth Report of the 2nd Administrative Reforms Commission (ARC-II) is titled"
    },
    {
        "id": "ch75-l2-q26",
        "question": "A civil servant who takes",
        "options": ["Article 19","The UPSC Act","Service Conduct Rules (Central Civil Services Rules, 1964)","None of the above"],
        "correctAnswerIndex": 2,
        "explanation": "Codified conduct rules restrict civil servants from political partisanship to maintain neutrality."
    },
    {
        "id": "ch75-l2-q27",
        "question": "Article 312(2) states that the Indian Administrative Service and Indian Police Service are",
        "options": ["They are not actually created by the Constitution.","They existed before the Constitution and were adopted by it.","They were abolished and re-created in 1950.","Parliament cannot control them."],
        "correctAnswerIndex": 1,
        "explanation": "They are legacy services from the pre-1950 era (Successors of ICS and IP) that the Constitution continued as AIS."
    },
    {
        "id": "ch75-l2-q28",
        "question": "In the case of a",
        "options": ["The officer can represent against the proposed penalty even before being found guilty.","The second hearing for the","is no longer mandatory.","The officer has the absolute right to have a lawyer represent him.","The Governor must personally conduct the hearing."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment did away with the requirement to represent against the proposed penalty separately."
    },
    {
        "id": "ch75-l2-q29",
        "question": "The",
        "options": ["Give every officer a fixed life-time post.","Ensure freshness by rotating officers back to their state cadres after a few years at the Centre.","Eliminate state cadres entirely.","Fill all posts with only Delhi-based officers."],
        "correctAnswerIndex": 1,
        "explanation": "It brings fresh field experience to policy making at the Centre and takes policy knowledge back to the States."
    },
    {
        "id": "ch75-l2-q30",
        "question": "Which of the following describes",
        "options": ["Lower level manual work.","Mostly gazetted and non-gazetted technical/clerical senior support roles.","Only IAS/IPS.","Defence services only."],
        "correctAnswerIndex": 1,
        "explanation": "Group B sits below Group A (Policy/Management) and above Group C (Clerical/Execution)."
    },
    {
        "id": "ch75-l2-q31",
        "question": "Regarding the removal of the Advocate General, which of the following is true?",
        "options": ["They are removed by the same process as a High Court Judge","They are removed by the Governor at any time","They are removed only after an impeachment by the State Legislature","They are removed by the President of India"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General holds office during the pleasure of the Governor. There is no specific procedure or ground for their removal mentioned in the Constitution."
    },
    {
        "id": "ch75-l2-q32",
        "question": "Is the Advocate General a full-time government servant?",
        "options": ["Yes, they are part of the State Civil Services","No, they are not debarred from private legal practice","Yes, and they cannot take up private cases","They are a part-time employee of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is not a full-time counsel for the Government and is not debarred from private legal practice, provided it"
    },
    {
        "id": "ch75-l2-q33",
        "question": "Conventionally, the Advocate General resigns when:",
        "options": ["The High Court Chief Justice is transferred","The Council of Ministers (State) resigns or is replaced","The Governor’s term ends","A new Financial Year begins"],
        "correctAnswerIndex": 1,
        "explanation": "Since the Advocate General is appointed on the advice of the Council of Ministers, they conventionally resign when the government changes."
    },
    {
        "id": "ch75-l2-q34",
        "question": "The Advocate General",
        "options": ["Only the High Court of that specific State","Only the Subordinate Courts of that State","Any Court of law within the State","Only the Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "In the performance of his official duties, the Advocate General has the right of audience in any court in the state."
    },
    {
        "id": "ch75-l2-q35",
        "question": "Which of the following is a limitation on the Advocate General?",
        "options": ["They should not advise against the State Government","They should not defend an accused in criminal cases without the State Government","They should not accept a directorship in a company without permission","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These limitations ensure that there is no conflict of interest between his official duties and private practice."
    },
    {
        "id": "ch75-l2-q36",
        "question": "The office of the Advocate General is the highest ______ in the state.",
        "options": ["Judicial office","Executive office","Law office","Administrative office"],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General is the highest law officer in the state."
    },
    {
        "id": "ch75-l2-q37",
        "question": "If a person has been an advocate of a High Court for ______ years, they are eligible to be the Advocate General.",
        "options": ["5 years","7 years","10 years","15 years"],
        "correctAnswerIndex": 2,
        "explanation": "Qualification for Advocate General matches that of an HC Judge: 10 years of judicial office or 10 years of advocate practice in a High Court."
    },
    {
        "id": "ch75-l2-q38",
        "question": "Can the Advocate General appear for the State Government in the Supreme Court?",
        "options": ["No, only the Attorney General can do that","Yes, if instructed by the State Government","Only with the permission of the President","Only if they are also a Senior Advocate"],
        "correctAnswerIndex": 1,
        "explanation": "While his right of audience is in state courts, the State Government can and does engage him to represent the state in the Supreme Court."
    },
    {
        "id": "ch75-l2-q39",
        "question": "Who is the",
        "options": ["The Chief Justice of the High Court","The Law Secretary","The Advocate General","The Chief Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General"
    },
    {
        "id": "ch75-l2-q40",
        "question": "The Advocate General",
        "options": ["Article 165","Article 177","Article 194","Article 202"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 grants the Advocate General the right to speak and participate in the proceedings of state legislative houses."
    },
    {
        "id": "ch75-l2-q41",
        "question": "The salary of the Advocate General is:",
        "options": ["Fixed in the Second Schedule","Fixed by the State Legislature by law","Determined by the Governor","Equivalent to a High Court Judge"],
        "correctAnswerIndex": 2,
        "explanation": "His remuneration is at the discretion of the Governor; it is not fixed by the Constitution or necessarily by the legislature."
    },
    {
        "id": "ch75-l2-q42",
        "question": "Can the Advocate General be a member of more than one House in a bicameral state?",
        "options": ["Yes, he has the right to speak in both","No, he must choose one","Only if he is elected","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Article 177 gives him the right to speak in both Houses (Assembly and Council) where they exist."
    },
    {
        "id": "ch75-l2-q43",
        "question": "Regarding",
        "options": ["Subject to the same privileges as an MLA/MLC while in the House","Immune from all civil arrests","Higher than the CM in the House","Only entitled to privileges in court"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 194(4), the same privileges available to members of the legislature are available to the Advocate General."
    },
    {
        "id": "ch75-l2-q44",
        "question": "Why does the Advocate General resign when the Cabinet resigns?",
        "options": ["Because he is part of the","executive by convention","Because the Constitution mandates it","Because the Governor is also changed","To take a rest"],
        "correctAnswerIndex": 0,
        "explanation": "Conventionally, he is the appointee of the specific political executive and leaves with them."
    },
    {
        "id": "ch75-l2-q45",
        "question": "The Advocate General belongs to which of the following groups?",
        "options": ["Constitutional Body","Statutory Body","Judicial Body","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Since the office is established by Article 165, it is a constitutional body."
    },
    {
        "id": "ch75-l2-q46",
        "question": "Can the Advocate General represent a private client against the State Government?",
        "options": ["Yes, if he charges a high fee","No, he should not advise or hold a brief against the Government of India or the State","Only if it","Only with the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Advising against the state would be a direct conflict of interest with his official duties."
    },
    {
        "id": "ch75-l2-q47",
        "question": "Who performs the",
        "options": ["The Chief Minister","The Governor","The High Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor assigns legal duties and roles to the Advocate General under Article 165."
    },
    {
        "id": "ch75-l2-q48",
        "question": "Is the Advocate General considered the",
        "options": ["Yes, he is the chief advocate representing the state in legal forums","No, he is a judge","Only for revenue cases","Only for central government cases"],
        "correctAnswerIndex": 0,
        "explanation": "He is the chief advocate and legal representative of the state executive."
    },
    {
        "id": "ch75-l2-q49",
        "question": "To be eligible as Advocate General, a person who has held judicial office must have done so in ______.",
        "options": ["Any court in the world","The territory of India","Only in that specific state","Only in High Courts"],
        "correctAnswerIndex": 1,
        "explanation": "The qualification specifies holding judicial office in the"
    },
    {
        "id": "ch75-l2-q50",
        "question": "Does the Advocate General have the right to speak in the Parliament of India?",
        "options": ["Yes","No, his right is restricted to the state legislature","Only if he is a member of Rajya Sabha","Only during national emergencies"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General"
    },
    {
        "id": "ch75-l2-q51",
        "question": "The Advocate General should not accept appointment as a director in any company without the permission of the ______.",
        "options": ["Governor","State Government","President","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "To prevent conflict of interest, the state government"
    },
    {
        "id": "ch75-l2-q52",
        "question": "In case of a criminal defense, the Advocate General needs permission from ______ to represent the accused.",
        "options": ["The CJI","The State Government","The Governor","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Similar to the AG, the Advocate General needs government permission to defend individuals in criminal cases."
    },
    {
        "id": "ch75-l2-q53",
        "question": "Who ranks higher in the state warrant of precedence?",
        "options": ["Advocate General","High Court Judges","Cabinet Ministers of the State","Speakers of the Assembly"],
        "correctAnswerIndex": 2,
        "explanation": "In most state orders of precedence, Cabinet Ministers and the Speaker are ranked higher than the Advocate General."
    },
    {
        "id": "ch75-l2-q54",
        "question": "Can the Advocate General provide",
        "options": ["No, only when referred by the Governor","Yes, he is a proactive legal advisor","Only in criminal matters","Only if the CM requests"],
        "correctAnswerIndex": 1,
        "explanation": "While his core duty is acting on referrals, a proactive legal advisor (Advocate General) often gives advice on sensitive legal matters to prevent litigation."
    },
    {
        "id": "ch75-l2-q55",
        "question": "Does the Advocate General",
        "options": ["Yes","No, his term is independent of the Governor","Only if the new Governor dismisses him","Yes, by convention"],
        "correctAnswerIndex": 1,
        "explanation": "He serves at the"
    },
    {
        "id": "ch75-l2-q56",
        "question": "The Advocate General is the counterpart of which Union official?",
        "options": ["Attorney General","Solicitor General","Law Minister","CJI"],
        "correctAnswerIndex": 0,
        "explanation": "The Advocate General is the state counterpart of the Attorney General of India."
    },
    {
        "id": "ch75-l2-q57",
        "question": "Can the Advocate General be a part of a",
        "options": ["Yes, if the state has a bicameral legislature and a joint sitting is called","No","Only if he is the Speaker","Only for budget sittings"],
        "correctAnswerIndex": 0,
        "explanation": "Article 177 applies to both Houses and any joint sitting thereof."
    },
    {
        "id": "ch75-l2-q58",
        "question": "Qualification for Advocate General: Does",
        "options": ["Yes, it","No, only HC judgeship counts","Only if the High Court certifies it","Only if they were also an advocate"],
        "correctAnswerIndex": 0,
        "explanation": "Holding a judicial office for 10 years at any level (including district) fulfills the criterion."
    },
    {
        "id": "ch75-l2-q59",
        "question": "Regarding",
        "options": ["Arresting in civil cases","Proceedings in court for anything said in the legislature","Paying for local transport","Paying state income tax"],
        "correctAnswerIndex": 1,
        "explanation": "Freedom of speech and immunity from court proceedings for legislative speech are key privileges."
    },
    {
        "id": "ch75-l2-q60",
        "question": "Who appoints the",
        "options": ["The Advocate General","The State Government (often in consultation with the Advocate General)","The High Court Chief Justice","The Governor directly"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative appointments are by the government, but the Advocate General often plays a lead role in selection."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch75-l3-q1",
        "question": "Analyze the scope of the",
        "options": ["The officer now has the right to cross-examine witnesses twice.","The officer","The amendment made the inquiry optional if the officer is a Group A member.","The amendment added a third stage of hearing before the Cabinet Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "Before 1976, an officer had two rights: inquiry and representation against penalty. The 42nd Amendment removed the second stage to expedite proceedings, while keeping the inquiry mandatory."
    },
    {
        "id": "ch75-l3-q2",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 only","2 and 3 only","1, 2 and 3"],
        "correctAnswerIndex": 1,
        "explanation": "The pleasure is not absolute in India; it is restricted by Articles 311 and Fundamental Rights (like Art 14/16). A contract cannot override the constitutional pleasure (Art 310)."
    },
    {
        "id": "ch75-l3-q3",
        "question": "The Supreme Court in",
        "options": ["The creation of IAS","The exceptions to the requirement of holding an inquiry under Art 311(2)","The salary of the UPSC Chairman","The retirement age of SPSC members"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark judgment clarified the three exceptions (criminal conviction, impracticality, and state security) where no inquiry is needed."
    },
    {
        "id": "ch75-l3-q4",
        "question": "A newly created All-India Service (AIS) can be regulated by rules made by the Central Government under the All-India Services Act, 1951. However, such rules:",
        "options": ["Must be approved by the Supreme Court.","Must be laid before each House of Parliament for 30 days.","Cannot be modified for 10 years.","Must be signed by the Governors of all states."],
        "correctAnswerIndex": 1,
        "explanation": "Section 3 of the AIS Act, 1951 requires that all rules be laid before Parliament and are subject to modification by it."
    },
    {
        "id": "ch75-l3-q5",
        "question": "Regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. However, Article 312 provides for centralized recruitment (likely by UPSC), not by High Courts for AIJS."
    },
    {
        "id": "ch75-l3-q6",
        "question": "Which of the following is an",
        "options": ["The existence of an independent UPSC","The provision for Administrative Tribunals","The tenure system in the Secretariat","The role of the Cabinet Secretary as head of the civil service"],
        "correctAnswerIndex": 0,
        "explanation": "The UPSC"
    },
    {
        "id": "ch75-l3-q7",
        "question": "In the context of All-India Services, the term",
        "options": ["Sending an officer to a foreign government permanently.","The temporary movement of a state cadre officer to work under the Union government or vice-versa.","The resignation of an officer to join politics.","The attachment of an officer to a private firm for training."],
        "correctAnswerIndex": 1,
        "explanation": "Deputation is the core of the"
    },
    {
        "id": "ch75-l3-q8",
        "question": "The",
        "options": ["Faster promotion for officers who complete projects before the deadline.","Tying pay and career progression to a transparent performance management system.","Giving luxury cars to top performers.","Allowing officers to bypass the UPSC for promotion."],
        "correctAnswerIndex": 1,
        "explanation": "ARC-II emphasized moving from seniority-based promotions to performance-based incentives."
    },
    {
        "id": "ch75-l3-q9",
        "question": "Which of the following describes the",
        "options": ["Ministry of Personnel","Ministry of Home Affairs","Ministry of Environment, Forest and Climate Change","UPSC"],
        "correctAnswerIndex": 2,
        "explanation": "Each of the three AIS has a different controlling ministry: IAS (Personnel), IPS (Home), IFoS (Environment)."
    },
    {
        "id": "ch75-l3-q10",
        "question": "Under Article 312, a resolution by the Rajya Sabha to create an All-India Service remains in force for:",
        "options": ["One year","Six months","Until a law is passed by the Parliament","One decade"],
        "correctAnswerIndex": 2,
        "explanation": "The resolution empowers the Parliament to act; once passed, the Parliament can enact the law at its discretion."
    },
    {
        "id": "ch75-l3-q11",
        "question": "The",
        "options": ["24 years","26 years","30 years","32 years"],
        "correctAnswerIndex": 0,
        "explanation": "The Hota Committee recommended 21-24 years for general candidates to ensure younger entrants."
    },
    {
        "id": "ch75-l3-q12",
        "question": "Which constitutional provision allows for the protection of service conditions for members of the",
        "options": ["Article 312","Article 314 (now repealed)","Article 310","Article 308"],
        "correctAnswerIndex": 1,
        "explanation": "Article 314 originally protected the legacy conditions of ICS/IP officers, but it was repealed in 1972."
    },
    {
        "id": "ch75-l3-q13",
        "question": "The",
        "options": ["Parshotam Lal Dhingra v. Union of India","Golaknath v. State of Punjab","Kesavananda Bharati","S.R. Bommai"],
        "correctAnswerIndex": 0,
        "explanation": "The Dhingra case (1958) is a foundational case for interpreting the relationship between Art 310 and 311."
    },
    {
        "id": "ch75-l3-q14",
        "question": "A",
        "options": ["Constitutional Body","Statutory Body","Executive Body","Quasi-judicial Body"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike UPSC/SPSC (Constitutional), the JSPSC is created by an Act of Parliament and is thus statutory."
    },
    {
        "id": "ch75-l3-q15",
        "question": "Assertion (A): All-India Services are considered essential for the unity and integrity of India.\\nReason (R): They provide a common administrative framework and facilitate cooperation between Centre and States.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch75-l3-q16",
        "question": "Which of the following is NOT an exception to the",
        "options": ["Conviction on a criminal charge.","Impracticability of holding an inquiry based on reasons recorded in writing.","Dismissal in the interest of the security of the State.","Dismissal on grounds of political affiliation."],
        "correctAnswerIndex": 3,
        "explanation": "Political affiliation is not a constitutional ground for bypassing the inquiry procedure."
    },
    {
        "id": "ch75-l3-q17",
        "question": "The",
        "options": ["Cabinet Secretary","Joint Secretary","Secretary","District Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "The initial focus has been on hiring experts at the Joint Secretary/Director level."
    },
    {
        "id": "ch75-l3-q18",
        "question": "The civil services under the Union and States are regulated by laws made under which Article?",
        "options": ["Article 308","Article 309","Article 310","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Article 309 gives legislatures the power to regulate recruitment and conditions."
    },
    {
        "id": "ch75-l3-q19",
        "question": "The",
        "options": ["Can never be fired.","Is on","and can be terminated if unsuitable according to rules, without triggers of Art 311 in some cases.","Has no constitutional rights.","Must work without salary."],
        "correctAnswerIndex": 1,
        "explanation": "While they have rights, the termination process during probation is simpler than for confirmed officers."
    },
    {
        "id": "ch75-l3-q20",
        "question": "In the case of",
        "options": ["Civil service neutrality","Reservation in promotions for public services","Salary of IAS officers","UPSC term duration"],
        "correctAnswerIndex": 1,
        "explanation": "The case is a landmark in the jurisprudence of reservations in public services."
    },
    {
        "id": "ch75-l3-q21",
        "question": "The",
        "options": ["Recommended the","concept.","Laid the foundation of the merit-based, open competitive examination for the ICS.","Proposed the creation of the IPS.","Advice on the Partition of India."],
        "correctAnswerIndex": 1,
        "explanation": "It shifted the service from patronage/nepotism to merit-based recruitment."
    },
    {
        "id": "ch75-l3-q22",
        "question": "Which of the following is correct regarding the",
        "options": ["It is a constitutional body.","It was given statutory status in 2003.","It directly recruits IAS officers.","It is headed by the CJI."],
        "correctAnswerIndex": 1,
        "explanation": "Following the Vineet Narain case, the CVC was given statutory status via an act in 2003."
    },
    {
        "id": "ch75-l3-q23",
        "question": "The",
        "options": ["That the President is always happy.","The efficiency and integrity of the administration.","That the PM can fire anyone he dislikes.","To mimic the British monarchy."],
        "correctAnswerIndex": 1,
        "explanation": "Legal scholars argue it allows for removing unsuitable officers to maintain the health of the public system, though balanced by Art 311."
    },
    {
        "id": "ch75-l3-q24",
        "question": "Which Article provides that the recruitment to All-India Services must be through an",
        "options": ["The Constitution doesn","open competition","Article 312 explicitly says",".","Article 16.","Article 315."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution provides the framework (Art 312); the specific method of"
    },
    {
        "id": "ch75-l3-q25",
        "question": "A civil servant who is",
        "options": ["Full salary","A subsistence allowance","No payment until inquiry is over","A pension"],
        "correctAnswerIndex": 1,
        "explanation": "Under service rules, a suspended officer gets a subsistence allowance which is a portion of their salary."
    },
    {
        "id": "ch75-l3-q26",
        "question": "Which of the following services is NOT recruited through the annual Civil Services Exam?",
        "options": ["Indian P&T Accounts and Finance Service","Indian Railway Protection Force Service","Indian Forest Service","Indian Information Service"],
        "correctAnswerIndex": 2,
        "explanation": "The Indian Forest Service (IFoS) has a separate preliminary level (common) but a different main examination."
    },
    {
        "id": "ch75-l3-q27",
        "question": "The satisfaction of the President/Governor under Article 311(2)(c) (interest of state security) is:",
        "options": ["Totally immune from judicial review.","Subject to review if it is shown to be mala fide or based on no evidence.","Subject to approval by the Parliament.","Only for Group C employees."],
        "correctAnswerIndex": 1,
        "explanation": "While subjective, like any executive power, it cannot be arbitrary or mala fide according to the SC."
    },
    {
        "id": "ch75-l3-q28",
        "question": "The",
        "options": ["5 years","10 years","15 years of service","Every year"],
        "correctAnswerIndex": 2,
        "explanation": "Wait, the Hota committee suggested a review for"
    },
    {
        "id": "ch75-l3-q29",
        "question": "The",
        "options": ["Cabinet Secretariat","DoPT","UPSC","Planning Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The DoPT handles the empanelment and deputation process."
    },
    {
        "id": "ch75-l3-q30",
        "question": "The ultimate power to dismiss a member of an All-India Service serving in a State cadre lies with:",
        "options": ["The Chief Minister of the State","The Governor of the State","The President of India","The State Legislature"],
        "correctAnswerIndex": 2,
        "explanation": "As the appointing authority, only the President (representing the Union Executive) can dismiss AIS officers."
    },
    {
        "id": "ch75-l3-q31",
        "question": "Consider the following statements regarding the Advocate General (AG) of a State:\\n1. Their salary is charged on the Consolidated Fund of the State.\\n2. The Constitution does not specify the grounds for their removal.\\n3. They must be a citizen of India.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2 and 3 are correct. Statement 1 is false: The Constitution says they receive such remuneration as the Governor may determine; it"
    },
    {
        "id": "ch75-l3-q32",
        "question": "In a 2025-26 scenario where a State Government",
        "options": ["The Governor","The Advocate General","The Attorney General","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General is the highest law officer of the state and responsible for defending the state"
    },
    {
        "id": "ch75-l3-q33",
        "question": "Which of the following features are common to both the Attorney General of India and the Advocate General of a State?\\n1. Holding office during the pleasure of the appointing authority.\\n2. Right to speak in the respective legislatures without the right to vote.\\n3. Qualifications being equivalent to a Judge of the respective highest court (SC/HC).\\nSelect the correct answer:",
        "options": ["1 and 2 only","2 and 3 only","1, 2, and 3","1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "Both serve at pleasure, have right to speak without vote, and have qualifications equivalent to judges of the respective superior courts."
    },
    {
        "id": "ch75-l3-q34",
        "question": "Assertion (A): The Advocate General is conventionally a",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "His tenure is tied to the political executive"
    },
    {
        "id": "ch75-l3-q35",
        "question": "Can the Advocate General be appointed as a Judge of the High Court while holding office?",
        "options": ["Yes, provided they resign as Advocate General first","No, this is a conflict of interest","Yes, if they have been an advocate for 10 years","Only if the President permits"],
        "correctAnswerIndex": 2,
        "explanation": "If they fulfill the HC judge qualification (which they must to be AG), they can be elevated to the bench."
    },
    {
        "id": "ch75-l3-q36",
        "question": "Regarding",
        "options": ["The Governor acting in his personal capacity","The Governor acting on the aid and advice of the Council of Ministers","The Governor acting on the advice of the High Court","The Governor acting as an agent of the President"],
        "correctAnswerIndex": 1,
        "explanation": "The appointment and removal of the AG is an executive power exercised on the advice of the cabinet."
    },
    {
        "id": "ch75-l3-q37",
        "question": "Is the Advocate General an",
        "options": ["Yes","No, he is a constitutional appointee and doesn","civil post","Only if he is on a fixed salary","Only for disciplinary purposes"],
        "correctAnswerIndex": 1,
        "explanation": "Article 311 protections for civil servants do not apply to constitutional offices like the Advocate General."
    },
    {
        "id": "ch75-l3-q38",
        "question": "If the State Legislative Assembly is dissolved, should the Advocate General resign immediately?",
        "options": ["Yes, by constitutional mandate","No, he continues until the Council of Ministers resigns or is replaced (caretaker government period)","Yes, his office is tied to the Assembly directly","Only if the Speaker says so"],
        "correctAnswerIndex": 1,
        "explanation": "His primary link is with the Council of Ministers, not the Assembly itself."
    },
    {
        "id": "ch75-l3-q39",
        "question": "The Advocate General",
        "options": ["Civil cases only","Criminal cases only","Any court within the state including tribunals and commissions","Only the High Court"],
        "correctAnswerIndex": 2,
        "explanation": "The right is comprehensive for all legal forums within the state"
    },
    {
        "id": "ch75-l3-q40",
        "question": "In a situation of",
        "options": ["Is automatically dismissed","Continues until the President/Governor removes him","Is replaced by the Solicitor General of India","Becomes a judge"],
        "correctAnswerIndex": 1,
        "explanation": "He holds office during"
    },
    {
        "id": "ch75-l3-q41",
        "question": "Can the Advocate General be a member of a committee of the",
        "options": ["No","Yes, under Article 177, he can be named as a member of any committee of the state legislature","Only if he is an MLA","Only with the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 is quite clear about his right to be a member of any committee regardless of his membership in either house."
    },
    {
        "id": "ch75-l3-q42",
        "question": "If an Advocate General is designated as a",
        "options": ["Yes, subject to the constraints of the Senior Advocate rules and his official duty towards the state","No, it","Only in the Supreme Court","Only after he resigns"],
        "correctAnswerIndex": 0,
        "explanation": "Dual status as a constitutional officer and a senior advocate doesn"
    },
    {
        "id": "ch75-l3-q43",
        "question": "The Advocate General",
        "options": ["Yes, it","charged","No, all constitutional salaries are charged","Only during financial emergencies","It depends on the State Law"],
        "correctAnswerIndex": 0,
        "explanation": "Since it"
    },
    {
        "id": "ch75-l3-q44",
        "question": "Can the Advocate General hold two state AG offices simultaneously?",
        "options": ["Yes, for a temporary period if the Governor(s) agree","No, impossible","Only for North Eastern states","Only during wars"],
        "correctAnswerIndex": 0,
        "explanation": "Like the Governor, a person can sometimes hold additional charge if required, though it"
    },
    {
        "id": "ch75-l3-q45",
        "question": "Does the",
        "options": ["Yes, he is a member of the selection committee","No, he has no formal role in the appointment process of HC judges","He can veto a candidate","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "The appointment is through the collegium (judiciary) and the executive (Governor/President), not the Advocate General."
    },
    {
        "id": "ch75-l3-q46",
        "question": "The Advocate General",
        "options": ["Any court proceeding in respect of anything said or any vote given in the legislature","Immunity from income tax on official remuneration","Protection from any civil lawsuits in their personal capacity","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Like members of the house, the AG gets immunity for things said in the legislature/committees, ensuring professional freedom of advice."
    },
    {
        "id": "ch75-l3-q47",
        "question": "Assertion (A): The Governor can remove the Advocate General at any time without any reason.\\nReason (R): The Advocate General holds office during the pleasure of the Governor and has no security of tenure under Article 165.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch75-l3-q48",
        "question": "Can the Advocate General",
        "options": ["Yes, the Union and the State are one in many matters","No, he should not advise any authority against the State Government he represents","Only if the Supreme Court orders so","Only for inter-state water disputes"],
        "correctAnswerIndex": 1,
        "explanation": "To maintain professional integrity and constitutional loyalty, him representing or advising any party (including the Union) against his own state is restricted."
    },
    {
        "id": "ch75-l3-q49",
        "question": "Does the",
        "options": ["Yes, he is a permanent invitee to the judges","No, this would violate the independence of the judiciary","Only in revenue cases","Only with the President"],
        "correctAnswerIndex": 1,
        "explanation": "Judicial administration is separate from the role of the Advocate General, who is an executive officer/representative in court."
    },
    {
        "id": "ch75-l3-q50",
        "question": "If a Bill in the State Assembly is sent to a",
        "options": ["Yes, under Article 177, if he is named as a member of such a committee","No, he can only speak in the House floors","Only if both houses agree","Only in special budget committees"],
        "correctAnswerIndex": 0,
        "explanation": "His right to participate in any committee of the legislature includes Select Committees, which often require technical legal advice."
    },
    {
        "id": "ch75-l3-q51",
        "question": "Which of the following is equivalent to the AG",
        "options": ["Article 76(3)","Article 88","Article 105","Article 143"],
        "correctAnswerIndex": 0,
        "explanation": "Article 76(3) gives the AG the right of audience in all courts in India. Article 165(3) (implied/stated in text) gives the same to state AGs within the state."
    },
    {
        "id": "ch75-l3-q52",
        "question": "Does the Advocate General have the power to",
        "options": ["Yes, in all criminal matters","No, that power rests with the police and the Home Department/Directorate of Prosecution","Only for corruption cases","Only with Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The Advocate General advises and represents; he is not the investigating authority or the one who institutes regular police cases."
    },
    {
        "id": "ch75-l3-q53",
        "question": "Regarding",
        "options": ["No, it must be the same as HC Judge","Yes, as the Governor (Cabinet) has the power to","his remuneration","Only if approved by the President","Only in major states"],
        "correctAnswerIndex": 1,
        "explanation": "The discretion given by Article 165(3) allows the state to decide the payment model."
    },
    {
        "id": "ch75-l3-q54",
        "question": "Can a person who is 65 years old be appointed as Advocate General?",
        "options": ["Yes, since the Constitution doesn","No, HC judges retire at 62, so he is ineligible","Only with President","Only in union territories"],
        "correctAnswerIndex": 0,
        "explanation": "While retirement age of HC judges is 62, there is no age limit for being"
    },
    {
        "id": "ch75-l3-q55",
        "question": "The Advocate General",
        "options": ["The Law Secretary is his senior","He is the senior-most legal person; Law Secretary is an administrative officer","They are the same person","They have no relationship"],
        "correctAnswerIndex": 1,
        "explanation": "The AG is a constitutional officer (equivalent to minister level); the Law Secretary is a civil servant coordinating the ministry."
    },
    {
        "id": "ch75-l3-q56",
        "question": "If the state government wants to challenge a Central Law, who coordinates the state",
        "options": ["The Attorney General","The Advocate General (reporting to the Cabinet)","The High Court","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The AG leads the state"
    },
    {
        "id": "ch75-l3-q57",
        "question": "Does the state legislature have the power to",
        "options": ["Yes, by a 2/3rd majority","No, there is no provision for impeachment","Yes, for proved corruption","Only if the Assembly is biennial"],
        "correctAnswerIndex": 1,
        "explanation": "He is not an officer whose removal is protected by a specific procedure (like judges); he serves at"
    },
    {
        "id": "ch75-l3-q58",
        "question": "The title",
        "options": ["The terminology used by the Mughals","The British Colonial period nomenclature (Government of India Act 1935)","American federalism","Ancient Greek systems"],
        "correctAnswerIndex": 1,
        "explanation": "The GOI Act 1935 established the office in India, and the 1950 Constitution refined its role."
    },
    {
        "id": "ch75-l3-q59",
        "question": "Can the Advocate General continue his private practice after being appointed?",
        "options": ["Yes, he is not a full-time counsel and can continue his practice alongside official work","No, he must give up all cases","Only in cases occurring outside the state","Only pro-bono cases"],
        "correctAnswerIndex": 0,
        "explanation": "Private practice is allowed as long as it doesn"
    },
    {
        "id": "ch75-l3-q60",
        "question": "The",
        "options": ["Strict","Political (as he is often changed with the government)","Legalistic","Academic"],
        "correctAnswerIndex": 1,
        "explanation": "The link with political executive is the main characteristic of the AG"
    }
];

export const CHAPTER_75_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
