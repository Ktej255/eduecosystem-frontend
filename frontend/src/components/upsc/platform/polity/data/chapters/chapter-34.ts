import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch34-l1-q1",
        "question": "Which part and articles of the Constitution deal with the organization, independence, jurisdiction, powers, and procedures of the High Courts?",
        "options": ["Part V, Articles 124 to 147","Part VI, Articles 214 to 231","Part VI, Articles 153 to 167","Part VII, Articles 239 to 241"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 214 to 231 in Part VI of the Constitution deal with the organisation, independence, jurisdiction, powers, procedures and so on of the high courts."
    },
    {
        "id": "ch34-l1-q2",
        "question": "The institution of high court originated in India in 1862 when the high courts were set up at:",
        "options": ["Calcutta, Bombay and Madras","Delhi, Calcutta and Allahabad","Bombay, Madras and Bangalore","Calcutta, Patna and Nagpur"],
        "correctAnswerIndex": 0,
        "explanation": "The institution of high court originated in India in 1862 when the high courts were set up at Calcutta, Bombay and Madras."
    },
    {
        "id": "ch34-l1-q3",
        "question": "Which Constitutional Amendment Act authorized the Parliament to establish a common high court for two or more states or for two or more states and a union territory?",
        "options": ["First Amendment Act of 1951","Seventh Amendment Act of 1956","Forty-Second Amendment Act of 1976","Forty-Fourth Amendment Act of 1978"],
        "correctAnswerIndex": 1,
        "explanation": "The Seventh Amendment Act of 1956 authorised the Parliament to establish a common high court for two or more states or for two or more states and a union territory."
    },
    {
        "id": "ch34-l1-q4",
        "question": "At present, how many high courts are there in India?",
        "options": ["21","24","25","28"],
        "correctAnswerIndex": 2,
        "explanation": "At present, there are 25 high courts in the country. Out of them, only three high courts have jurisdiction over more than one state."
    },
    {
        "id": "ch34-l1-q5",
        "question": "Who determines the strength of a High Court (the number of judges it will have) from time to time?",
        "options": ["The Parliament by law","The Chief Justice of India","The Governor of the concerned state","The President of India"],
        "correctAnswerIndex": 3,
        "explanation": "The Constitution does not specify the strength of a high court and leaves it to the discretion of the president. Accordingly, the President determines the strength of a high court from time to time depending upon its workload."
    },
    {
        "id": "ch34-l1-q6",
        "question": "The judges of a high court are appointed by the:",
        "options": ["Governor of the State","Chief Justice of India","President of India","Chief Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The judges of a high court are appointed by the President. The chief justice is appointed by the President after consultation with the chief justice of India and the governor of the state concerned."
    },
    {
        "id": "ch34-l1-q7",
        "question": "For the appointment of other judges of a high court (other than the Chief Justice), the President consults the Chief Justice of India, the Governor of the State, and specifically, the:",
        "options": ["Chief Minister of the State","Chief Justice of the concerned High Court","Advocate General of the State","Union Law Minister"],
        "correctAnswerIndex": 1,
        "explanation": "For appointment of other judges, the chief justice of the concerned high court is also consulted."
    },
    {
        "id": "ch34-l1-q8",
        "question": "To be appointed as a judge of a high court, a person must have held a judicial office in the territory of India for at least:",
        "options": ["5 years","7 years","10 years","15 years"],
        "correctAnswerIndex": 2,
        "explanation": "A person to be appointed as a judge of a high court, should have the following qualifications... (b) He should have held a judicial office in the territory of India for ten years; or (c) He should have been an advocate of a high court (or high courts in succession) for ten years."
    },
    {
        "id": "ch34-l1-q9",
        "question": "Does the Constitution provide for the appointment of a",
        "options": ["Yes, similarly to the Supreme Court.","Yes, but only with the consent of the Chief Justice of India.","No, only for the Supreme Court, not for High Courts.","No, it is not provided for either the Supreme Court or High Courts."],
        "correctAnswerIndex": 2,
        "explanation": "From the above, it is clear that the Constitution has not prescribed a minimum age for appointment as a judge of a high court. Moreover, unlike in the case of the Supreme Court, the Constitution makes no provision for appointment of a distinguished jurist as a judge of a high court."
    },
    {
        "id": "ch34-l1-q10",
        "question": "Before entering his office, a person appointed as a judge of a high court has to make and subscribe an oath or affirmation before the:",
        "options": ["President of India","Chief Justice of India","Governor of the state (or some person appointed by him)","Chief Justice of the concerned High Court"],
        "correctAnswerIndex": 2,
        "explanation": "A person appointed as a judge of a high court, before entering upon his office, has to make and subscribe an oath or affirmation before the governor of the state or some person appointed by him for this purpose."
    },
    {
        "id": "ch34-l1-q11",
        "question": "What is the retirement age of a judge of a High Court?",
        "options": ["60 years","62 years","65 years","70 years"],
        "correctAnswerIndex": 1,
        "explanation": "He holds office until he attains the age of 62 years. (Note: In the case of the Supreme Court, it is 65 years)."
    },
    {
        "id": "ch34-l1-q12",
        "question": "Any question regarding the age of a High Court judge is decided by the:",
        "options": ["Parliament","President after consultation with the Chief Justice of India","Governor of the State","Chief Justice of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "Any questions regarding his age is to be decided by the president after consultation with the chief justice of India and the decision of the president is final."
    },
    {
        "id": "ch34-l1-q13",
        "question": "A High Court judge can resign from his office by writing to the:",
        "options": ["Chief Justice of the High Court","Governor of the State","Chief Justice of India","President of India"],
        "correctAnswerIndex": 3,
        "explanation": "He can resign his office by writing to the president."
    },
    {
        "id": "ch34-l1-q14",
        "question": "A high court judge can be removed from his office by an order of the President based on a resolution passed by Parliament. What are the constitutional grounds for removal?",
        "options": ["Violation of the Constitution","Proved misbehaviour or incapacity","Corruption and bribery","Insolvency or unsound mind"],
        "correctAnswerIndex": 1,
        "explanation": "A judge of a high court can be removed from his office by an order of the President... on the grounds of proved misbehaviour or incapacity."
    },
    {
        "id": "ch34-l1-q15",
        "question": "Who can transfer a judge from one high court to another?",
        "options": ["The Chief Justice of India directly","The President of India after consultation with the Chief Justice of India","The Parliament by a special law","The Governors of the concerned states jointly"],
        "correctAnswerIndex": 1,
        "explanation": "The President can transfer a judge from one high court to another after consulting the Chief Justice of India."
    },
    {
        "id": "ch34-l1-q16",
        "question": "The salaries, allowances, and pensions of the judges of a high court are completely charged on the Consolidated Fund of the State. Is this statement fully correct?",
        "options": ["Yes, it is fully correct.","No, only the salaries are charged on the State Fund, but the pension is charged on the Consolidated Fund of India.","No, everything is charged on the Consolidated Fund of India.","No, everything is voted upon by the State Legislature annually."],
        "correctAnswerIndex": 1,
        "explanation": "The salaries and allowances of the judges... are charged on the consolidated fund of the state... But, the pension of a high court judge is charged on the Consolidated Fund of India and not the state."
    },
    {
        "id": "ch34-l1-q17",
        "question": "After retirement, a permanent judge of a high court is prohibited from pleading or acting in any court or before any authority in India EXCEPT the:",
        "options": ["Supreme Court and other high courts","Subordinate Courts","Administrative Tribunals","Consumer Courts only"],
        "correctAnswerIndex": 0,
        "explanation": "Ban on Practice after Retirement: A retired permanent judge of a high court is prohibited from pleading or acting in any court or before any authority in India except the Supreme Court and the other high courts."
    },
    {
        "id": "ch34-l1-q18",
        "question": "For what maximum period can the President appoint an",
        "options": ["1 year","2 years","3 years","5 years"],
        "correctAnswerIndex": 1,
        "explanation": "The President can appoint duly qualified persons as additional judges of a high court for a temporary period not exceeding two years..."
    },
    {
        "id": "ch34-l1-q19",
        "question": "Under Article 226, the high court has the power to issue writs for the enforcement of Fundamental Rights and for",
        "options": ["It is narrower than the Supreme Court.","It is wider than the Supreme Court.","It is exactly equal to the Supreme Court.","It is subordinate to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The writ jurisdiction of the high court (Article 226) is not exclusive but concurrent with the writ jurisdiction of the Supreme Court (Article 32)... However, the writ jurisdiction of the high court is wider than that of the Supreme Court. This is because, the Supreme Court can issue writs only for the enforcement of fundamental rights and not for any other purpose."
    },
    {
        "id": "ch34-l1-q20",
        "question": "Which jurisdiction of the High Court includes matters of admiralty, will, marriage, divorce, company laws, and contempt of court?",
        "options": ["Appellate Jurisdiction","Writ Jurisdiction","Original Jurisdiction","Advisory Jurisdiction"],
        "correctAnswerIndex": 2,
        "explanation": "Original jurisdiction means the power of a high court to hear disputes in the first instance, not by way of appeal. It extends to the following: (a) Matters of admiralty, will, marriage, divorce, company laws and contempt of court."
    },
    {
        "id": "ch34-l1-q21",
        "question": "A High Court has the power of",
        "options": ["Original Jurisdiction","Supervisory Jurisdiction (Article 227)","Appellate Jurisdiction","Writ Jurisdiction (Article 226)"],
        "correctAnswerIndex": 1,
        "explanation": "Supervisory Jurisdiction (Article 227): A high court has the power of superintendence over all courts and tribunals functioning in its territorial jurisdiction (except military courts or tribunals)."
    },
    {
        "id": "ch34-l1-q22",
        "question": "If the High Court is satisfied that a case pending in a subordinate court involves a substantial question of law that requires the interpretation of the Constitution, what action can it take?",
        "options": ["It must ask the Supreme Court for an advisory opinion.","It can withdraw the case to itself and either dispose of it or determine the constitutional interpretation and return it.","It can only advise the subordinate court on the law.","It must dismiss the subordinate court judge."],
        "correctAnswerIndex": 1,
        "explanation": "Control over Subordinate Courts (Article 228): It can withdraw a case pending in a subordinate court if it involves a substantial question of law that require the interpretation of the Constitution."
    },
    {
        "id": "ch34-l1-q23",
        "question": "Being a",
        "options": ["It has the power to punish for contempt of itself.","It can overrule any Supreme Court judgment.","It can pass laws for the state assembly.","It cannot be questioned by civil society."],
        "correctAnswerIndex": 0,
        "explanation": "As a court of record, a high court has two powers... (b) It has power to punish for contempt of itself, either with simple imprisonment or with fine or with both."
    },
    {
        "id": "ch34-l1-q24",
        "question": "Appointments, postings and promotions of district judges in a state are made by the Governor of the state in consultation with the:",
        "options": ["State Public Service Commission","Chief Minister","High Court","Advocate General"],
        "correctAnswerIndex": 2,
        "explanation": "District Judges: The appointment, posting and promotion of district judges in a state are made by the governor of the state in consultation with the high court."
    },
    {
        "id": "ch34-l1-q25",
        "question": "The highest judicial authority in a district is the:",
        "options": ["Munsif","Judicial Magistrate","District Judge","Chief Executive Magistrate"],
        "correctAnswerIndex": 2,
        "explanation": "The district judge is the highest judicial authority in the district. He possesses original and appellate jurisdiction in both civil as well as criminal matters."
    },
    {
        "id": "ch34-l1-q26",
        "question": "When the District Judge deals with civil cases, he is known as the district judge, but when he hears criminal cases, he is known as the:",
        "options": ["Chief Judicial Magistrate","Civil Judge","Sessions Judge","Nyayadhikari"],
        "correctAnswerIndex": 2,
        "explanation": "When he deals with civil cases, he is known as the district judge and when he hears the criminal cases, he is called as the sessions judge."
    },
    {
        "id": "ch34-l1-q27",
        "question": "Does the Sessions Judge have the power to impose a death sentence (capital punishment)?",
        "options": ["No, only High Courts can impose it.","Yes, and it is final and cannot be appealed.","Yes, but regardless of whether there is an appeal or not, the death sentence must be confirmed by the High Court.","Yes, but it must be confirmed by the Governor."],
        "correctAnswerIndex": 2,
        "explanation": "The sessions judge has the power to impose any sentence including life imprisonment and capital punishment (death sentence). However, a capital punishment passed by him is subject to confirmation by the High Court, whether there is an appeal or not."
    },
    {
        "id": "ch34-l1-q28",
        "question": "Below the District and Sessions Court, there are courts of Subordinate Judge on the civil side and Chief Judicial Magistrate on the criminal side. Below these, what is the lowest court on the civil side?",
        "options": ["Nyaya Panchayat","Family Court","Munsif","Lok Adalat"],
        "correctAnswerIndex": 2,
        "explanation": "Below the sub-judge’s court, there is the munsif’s court on the civil side. The munsif’s judge possesses limited jurisdiction and decides civil cases of small pecuniary stake."
    },
    {
        "id": "ch34-l1-q29",
        "question": "Articles 233 to 237 in Part VI of the Constitution detail the provisions regulating the organisation of the:",
        "options": ["High Courts","Subordinate Courts","Administrative Tribunals","Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 233 to 237 in Part VI of the Constitution make the following provisions to regulate the organization of subordinate courts and to ensure their independence from the executive."
    },
    {
        "id": "ch34-l1-q30",
        "question": "For determining the administrative expenses of the High Court, whose decision is generally deemed binding unless changed by a valid reason?",
        "options": ["The State Finance Minister","The Parliament","The Chief Justice of the High Court","The Governor"],
        "correctAnswerIndex": 2,
        "explanation": "The chief justice of a high court is authorised to direct the staff and officers of the high court... The administrative expenses of a high court, including all salaries, allowances and pensions of the staff... are charged on the consolidated fund of the state."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch34-l2-q1",
        "question": "How does the writ jurisdiction of the High Court (Article 226) fundamentally differ from that of the Supreme Court (Article 32)?",
        "options": ["The Supreme Court can issue writs only against the State, whereas the High Court can issue them against both the State and private individuals.","The Supreme Court can issue writs only for the enforcement of Fundamental Rights, while the High Court can issue them for Fundamental Rights and","(ordinary legal rights).","The High Court","s is discretionary.","The Supreme Court can issue the writ of Certiorari, but the High Court cannot."],
        "correctAnswerIndex": 1,
        "explanation": "Article 226 gives the High Court wider jurisdiction because it covers both fundamental rights and other legal rights. Article 32 is restricted only to the enforcement of Fundamental Rights."
    },
    {
        "id": "ch34-l2-q2",
        "question": "Can a High Court issue a writ to a person, authority, or government located OUTSIDE its territorial jurisdiction?",
        "options": ["No, Article 226 strictly restricts the High Court to its own territorial boundaries.","Yes, if the","arises, wholly or in part, within its territorial jurisdiction.","Only with the prior written permission of the Chief Justice of India.","Only in matters concerning the writ of Habeas Corpus."],
        "correctAnswerIndex": 1,
        "explanation": "The Fifteenth Amendment Act of 1963 enlarged the territorial jurisdiction of the High Court... it can issue writs to persons/authorities outside its territory if the cause of action arises within its territory."
    },
    {
        "id": "ch34-l2-q3",
        "question": "What does it mean when it is said that the writ jurisdiction of the High Court is",
        "options": ["The High Court can choose not to hear the case if an alternative, equally efficacious remedy exists.","The High Court can invent new types of writs not mentioned in the Constitution.","The Governor can direct the High Court on how to exercise its discretion.","It is immune from Judicial Review."],
        "correctAnswerIndex": 0,
        "explanation": "Article 32 is a fundamental right itself, so the SC is generally bound to issue a writ. Article 226 is a constitutional power, and the high court has discretion to refuse relief if there is an alternative remedy available (e.g., appealing to a statutory tribunal first)."
    },
    {
        "id": "ch34-l2-q4",
        "question": "Under the High Court",
        "options": ["Call for returns from them.","Make and issue general rules and prescribe forms for regulating their practice and proceedings.","Settle tables of fees to be allowed to the sheriff and all clerks and officers of such courts.","Direct the State Governor to increase their funding."],
        "correctAnswerIndex": 3,
        "explanation": "Article 227 allows the HC to call for returns, make rules/forms, and prescribe fees for subordinate courts. It does not empower the HC to command the Governor regarding funding."
    },
    {
        "id": "ch34-l2-q5",
        "question": "Does the High Court",
        "options": ["Yes, it can entirely re-hear the case and substitute its own factual findings.","No, it is generally limited to ensuring that the subordinate court stays within its bounds of authority, correcting gross defects of jurisdiction or manifest errors of law.","Yes, but only in criminal cases involving death sentences.","Only if the subordinate court explicitly requests a review of facts."],
        "correctAnswerIndex": 1,
        "explanation": "The supervisory jurisdiction under Art 227 is not an appellate jurisdiction. The HC cannot act as a court of appeal to correct errors of fact; it only intervenes if there"
    },
    {
        "id": "ch34-l2-q6",
        "question": "Following the landmark L. Chandra Kumar case (1997), what is the relationship between Administrative Tribunals and High Courts?",
        "options": ["Tribunals are completely independent, and appeals go directly to the Supreme Court.","Tribunals are subject to the writ jurisdiction (Art 226/227) of the High Court, and their decisions can be challenged before a Division Bench of the High Court.","Tribunals replaced the High Courts","Tribunals can strike down High Court judgments."],
        "correctAnswerIndex": 1,
        "explanation": "In the Chandra Kumar case, the SC ruled that the exclusion of judicial review by High Courts over tribunals was unconstitutional. Thus, tribunal decisions are subject to the writ jurisdiction of the High Court."
    },
    {
        "id": "ch34-l2-q7",
        "question": "If a dispute arises regarding the actual age of a sitting High Court judge, who possesses the final authority to determine it under the Constitution?",
        "options": ["The Chief Justice of the High Court.","The Supreme Court of India.","The President of India, after consultation with the Chief Justice of India.","The Parliament, by a simple majority resolution."],
        "correctAnswerIndex": 2,
        "explanation": "Article 217(3): Any questions regarding the age of a judge... is to be decided by the President after consultation with the CJI, and the decision of the President is final."
    },
    {
        "id": "ch34-l2-q8",
        "question": "While the salaries and allowances of High Court judges are charged on the Consolidated Fund of the State, who actually determines the quantum of these salaries?",
        "options": ["The State Legislature.","The Parliament of India.","The Finance Commission of the State.","The Governor of the State."],
        "correctAnswerIndex": 1,
        "explanation": "The salaries, allowances, privileges, leave and pension of the judges of a high court are determined from time to time by the Parliament. They cannot be altered to their disadvantage except during a financial emergency."
    },
    {
        "id": "ch34-l2-q9",
        "question": "Which Constitutional mechanism ensures that High Court judges can discharge their duties without fear of political reprisal from the state government?",
        "options": ["Their salaries are voted on annually by the State Assembly to ensure accountability.","Their conduct cannot be discussed in Parliament or the State Legislature (except upon a removal motion in Parliament).","They are granted immunity from all criminal laws after retirement.","They are appointed by the Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Independence of High Court: Ban on Discussion of Conduct - The Constitution prohibits any discussion in Parliament or in a State Legislature with respect to the conduct of the judges of a high court... except when an impeachment motion is under consideration by Parliament."
    },
    {
        "id": "ch34-l2-q10",
        "question": "In the context of the transfer of a High Court Judge by the President, what was established by the Supreme Court in the Second Judges Case (1993) to prevent arbitrary transfers?",
        "options": ["The transfer must be approved by the State Assembly.","Judicial review is available if the transfer was made without the recommendation/consent of the Chief Justice of India, proving it was for punitive rather than public interest purposes.","A judge can never be transferred against their will under any circumstances.","Only the Governor can initiate a transfer."],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that transfer should only be in the public interest and not as a punitive measure. It also held that the CJI"
    },
    {
        "id": "ch34-l2-q11",
        "question": "According to Article 233, an advocate is eligible to be appointed as a District Judge only if they have been an advocate or a pleader for at least:",
        "options": ["5 years.","7 years.","10 years.","15 years."],
        "correctAnswerIndex": 1,
        "explanation": "Qualifications for District Judge: He should have been an advocate or a pleader for seven years."
    },
    {
        "id": "ch34-l2-q12",
        "question": "Who exercises overarching administrative",
        "options": ["The State Law Minister.","The District Collector.","The Governor of the State.","The High Court of the State."],
        "correctAnswerIndex": 3,
        "explanation": "Control over Subordinate Courts (Article 235): The control over district courts and other subordinate courts including the posting, promotion and leave of persons belonging to the judicial service... is vested in the high court."
    },
    {
        "id": "ch34-l2-q13",
        "question": "The District Judge acts as the highest judicial authority in a district. In addition to original jurisdiction, does the District Judge possess appellate jurisdiction?",
        "options": ["No, appellate jurisdiction is strictly reserved for the High Court.","Yes, but only in civil matters.","Yes, in both civil and criminal matters.","Only regarding decisions made by the District Magistrate (Collector)."],
        "correctAnswerIndex": 2,
        "explanation": "The district judge possesses original and appellate jurisdiction in both civil as well as criminal matters."
    },
    {
        "id": "ch34-l2-q14",
        "question": "A Sessions Judge sentences a convict to death. The convict decides NOT to appeal the sentence. Can the state execute the convict immediately?",
        "options": ["Yes, if the time for an appeal has expired.","Yes, provided the Governor gives a warrant.","No, because a capital punishment passed by a sessions judge is subject to mandatory confirmation by the High Court, whether there is an appeal or not.","No, only the Supreme Court can confirm death sentences."],
        "correctAnswerIndex": 2,
        "explanation": "A capital punishment (death sentence) passed by a sessions judge is subject to confirmation by the High Court, even if the convict does not lodge an appeal."
    },
    {
        "id": "ch34-l2-q15",
        "question": "Does the High Court have the power of Judicial Review to examine the constitutional validity of a Central Law (a law passed by the Union Parliament)?",
        "options": ["No, High Courts can only review State Laws.","Yes, High Courts can review both State and Central Laws regarding their constitutionality.","Yes, provided the Supreme Court delegates the power to them for that specific law.","Only if the Central Law explicitly affects state subjects."],
        "correctAnswerIndex": 1,
        "explanation": "Yes. In India, both the Supreme Court and High Courts have the power to review the constitutionality of both Central and State laws."
    },
    {
        "id": "ch34-l2-q16",
        "question": "Unlike States, Union Territories do not have their own state governments. Which of the following Union Territories is unique in having its own independent High Court?",
        "options": ["Chandigarh.","Delhi.","Puducherry.","Lakshadweep."],
        "correctAnswerIndex": 1,
        "explanation": "Delhi is the only Union Territory that has a separate High Court (since 1966). Note: Jammu and Kashmir is a UT but has a common High Court with Ladakh."
    },
    {
        "id": "ch34-l2-q17",
        "question": "Where does the Advocate General of the state have the",
        "options": ["Only in the High Court of the State.","Only in the Legislative Assembly.","In any court of law within the State.","In all High Courts across India."],
        "correctAnswerIndex": 2,
        "explanation": "The Advocate General has the right of audience in all courts in the territory of the State."
    },
    {
        "id": "ch34-l2-q18",
        "question": "A person resigns from the office of a High Court Judge. To whom must the resignation letter be addressed?",
        "options": ["The Governor of the State.","The Chief Justice of the state","The President of India.","The Chief Justice of India."],
        "correctAnswerIndex": 2,
        "explanation": "A judge of a high court can resign his office by writing to the president."
    },
    {
        "id": "ch34-l2-q19",
        "question": "If the jurisdiction of a High Court needs to be extended to cover an adjoining Union Territory, who has the constitutional authority to do so?",
        "options": ["The President by an executive order.","The Parliament by law.","The Chief Justice of India.","The Legislative Assembly of the state."],
        "correctAnswerIndex": 1,
        "explanation": "Article 230: Parliament may by law extend the jurisdiction of a high court to, or exclude the jurisdiction of a high court from, any union territory."
    },
    {
        "id": "ch34-l2-q20",
        "question": "Assertion (A): The pension of a retired High Court Judge is charged to the Consolidated Fund of India.\\nReason (R): High Court judges are often transferred across multiple states during their tenure, making it administratively complex to apportion their pension liability among different state governments.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Because a judge might serve in UP, then be transferred to Madras, and retire in Bombay, charging the pension to the central fund simplifies administration and safeguards their financial independence from states."
    },
    {
        "id": "ch34-l2-q21",
        "question": "Assertion (A): The constitution provides that a distinguished jurist can be appointed as a High Court judge.\\nReason (R): The President appoints judges based on merit and exceptional legal knowledge to ensure justice.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion (A) is definitely FALSE. The Constitution makes a provision for a"
    },
    {
        "id": "ch34-l2-q22",
        "question": "Which forum functions as a",
        "options": ["Family Court.","Fast Track Court.","Lok Adalat.","Gram Nyayalaya."],
        "correctAnswerIndex": 2,
        "explanation": "Lok Adalat is one of the alternative dispute redressal mechanisms... where disputes/cases pending in the court of law or at pre-litigation stage are settled/compromised amicably."
    },
    {
        "id": "ch34-l2-q23",
        "question": "The Gram Nyayalayas Act (2008) aims to provide access to justice at the grassroots. Who presides over a Gram Nyayalaya?",
        "options": ["The local Sarpanch.","A retired District Judge.","A Nyayadhikari, who is strictly a judicial officer appointed by the State Government in consultation with the High Court.","A sub-inspector of police."],
        "correctAnswerIndex": 2,
        "explanation": "The Gram Nyayalaya shall be court of Judicial Magistrate of the first class and its presiding officer (Nyayadhikari) shall be appointed by the State Government in consultation with the High Court."
    },
    {
        "id": "ch34-l2-q24",
        "question": "The Family Courts Act (1984) provides for the establishment of Family Courts by State Governments. What is the primary objective of these courts concerning procedure?",
        "options": ["To apply strict rules of evidence and lengthy procedural codes to ensure rigorous justice.","To promote conciliation and secure speedy settlement of disputes relating to marriage and family affairs, relaxing rigid rules of procedure/evidence.","To impose criminal penalties for marital offenses.","To handle property inheritance among extended family members."],
        "correctAnswerIndex": 1,
        "explanation": "The main objectives... are to create a Specialized Court which will exclusively deal with family matters... and to lay down working rules of procedure which will dispense with rigid rules of pleading and evidence and emphasize conciliation."
    },
    {
        "id": "ch34-l2-q25",
        "question": "When the Chief Justice of a High Court is absent or unable to perform their duties, who appoints an",
        "options": ["The Governor of the State.","The Chief Justice of India.","The outgoing Chief Justice of the High Court.","The President of India."],
        "correctAnswerIndex": 3,
        "explanation": "The President can appoint a judge of a high court as an acting chief justice of the high court when: 1) office is vacant 2) temporarily absent 3) unable to perform duties."
    },
    {
        "id": "ch34-l2-q26",
        "question": "Is there a constitutional provision allowing for the appointment of",
        "options": ["No, there is only a provision for an Acting Chief Justice.","Yes, the President can appoint them if a permanent judge is temporarily absent, unable to perform duties, or appointed to act temporarily as Chief Justice.","Yes, but they are appointed by the Governor.","Yes, they are appointed from a pool of retired Supreme Court judges."],
        "correctAnswerIndex": 1,
        "explanation": "The President can appoint duly qualified persons as acting judges of a high court when a judge of that high court is... unable to perform duties... or appointed to act temporarily as chief justice."
    },
    {
        "id": "ch34-l2-q27",
        "question": "Consider a landmark constitutional case pending before a District Court. If the High Court uses its power under Article 228 to withdraw the case, what can it do next?",
        "options": ["It must refer it to the Supreme Court immediately.","It can either dispose of the case itself or determine the question of law and return the case to the subordinate court.","It can only dismiss the case without a hearing.","It must establish a special tribunal to hear it."],
        "correctAnswerIndex": 1,
        "explanation": "If the HC withdraws a case... it may either: (a) dispose of the case itself, or (b) determine the question of law and return the case to the subordinate court..."
    },
    {
        "id": "ch34-l2-q28",
        "question": "The power to",
        "options": ["No, it can only punish for its own contempt.","Yes, as the apex court of the state, its power extends to punishing for contempt of subordinate courts functioning under it.","Yes, but only if the subordinate court refers the matter formally.","Only the Supreme Court can punish for contempt of subordinate courts."],
        "correctAnswerIndex": 1,
        "explanation": "The expression"
    },
    {
        "id": "ch34-l2-q29",
        "question": "How long can an",
        "options": ["For a maximum of 2 years.","Until they reach the age of 65.","Until the permanent judge resumes their office, but not beyond the age of 62 years.","Indefinitely, until promoted."],
        "correctAnswerIndex": 2,
        "explanation": "An acting judge holds office until the permanent judge resumes his office. However, both the additional or acting judge cannot hold office after attaining the age of 62 years."
    },
    {
        "id": "ch34-l2-q30",
        "question": "Why is the High Court",
        "options": ["Because High Courts cannot strike down Parliamentary laws.","Because Article 226 is discretionary, meaning the High Court can refuse to exercise writ jurisdiction if an alternative remedy exists, whereas Article 32 is a Fundamental Right guaranteed by the Supreme Court.","Because High Courts can only review executive actions, not legislative ones.","Because it requires the Governor"],
        "correctAnswerIndex": 1,
        "explanation": "While the scope/purposes of Art 226 are wider (treating"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch34-l3-q1",
        "question": "Consider the constitutional complexities of Article 226 following recent Supreme Court clarifications on the",
        "options": ["Only in the Delhi High Court.","Only in the Supreme Court under Article 32.","In either the Delhi High Court or the High Court of State A, as a","arose in State A where the notification was enforced upon the petitioner.","In any High Court in India, treating the Central Government as omnipresent."],
        "correctAnswerIndex": 2,
        "explanation": "Article 226(2) explicitly allows a High Court to exercise jurisdiction if the cause of action (wholly or in part) arises within its territory. A central notification affecting a person locally constitutes a partial cause of action in that state, making it a convenient forum."
    },
    {
        "id": "ch34-l3-q2",
        "question": "Under the established Memorandum of Procedure (MoP) for the appointment of High Court Judges, the proposal for elevating an advocate or judicial officer to the High Court must be initiated by:",
        "options": ["The Governor of the concerned State.","The Chief Minister of the concerned State.","The Chief Justice of the concerned High Court.","The Chief Justice of India."],
        "correctAnswerIndex": 2,
        "explanation": "The Chief Justice of the High Court initiates the proposal after consulting with two senior-most colleagues. It then goes to the Governor (who adds inputs), then the Law Ministry, and finally the SC Collegium."
    },
    {
        "id": "ch34-l3-q3",
        "question": "During recent friction between the Executive and Judiciary over judicial appointments (2024-2025), if the Supreme Court Collegium reiterates a previously rejected recommendation for a High Court judge unanimously, what is the constitutional position of the Union Government?",
        "options": ["The Union Government can reject it a second time based on new inputs.","The President must return it again to the High Court.","The Union Government is constitutionally bound to accept the reiterated recommendation and make the appointment (as per the Second and Third Judges Cases).","The matter is referred to a Constitution Bench of the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "According to the collegium system established by the SC, if a recommendation is sent back by the government for reconsideration, and the Collegium unanimously reiterates it, the government is bound to clear the appointment."
    },
    {
        "id": "ch34-l3-q4",
        "question": "Examine the",
        "options": ["A resolution passed by the Lok Sabha by a two-thirds majority.","An ordinance issued by the President.","A resolution passed by the Rajya Sabha declaring it necessary or expedient in the national interest, supported by not less than two-thirds of the members present and voting.","A constitutional amendment ratified by half of the states."],
        "correctAnswerIndex": 2,
        "explanation": "Creation of any new All-India Service (including AIJS) requires a Rajya Sabha resolution under Article 312 by a 2/3rd majority of members present and voting, followed by a Parliamentary law."
    },
    {
        "id": "ch34-l3-q5",
        "question": "The Supreme Court in L. Chandra Kumar vs Union of India (1997) profoundly altered the landscape of Administrative Tribunals. It held that:",
        "options": ["Tribunals have no binding authority and act merely as recommendatory bodies.","Tribunals possess the power to test the constitutionality of State legislation.","The power of","over legislative action vested in the High Courts under Article 226/227 and the Supreme Court under Article 32 is an integral and essential feature of the Constitution, constituting part of its basic structure.","Appeals from Tribunals must fly directly to the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "This judgment ruled that Articles 323A and 323B (which excluded the jurisdiction of High Courts over tribunals) were unconstitutional. It restored the High Courts"
    },
    {
        "id": "ch34-l3-q6",
        "question": "If a High Court exercises its",
        "options": ["As an Appellate Court reviewing circumstantial evidence.","As an Original Court re-trying the labour dispute from scratch.","To ensuring that the tribunal has kept within the bounds of its authority and not to act as a regular appellate court to correct mere errors of fact.","To impose its own statutory rules on the tribunal."],
        "correctAnswerIndex": 2,
        "explanation": "Article 227 provides administrative and judicial superintendence. Crucially, the SC has repeatedly ruled that a HC under Art 227 cannot review evidence like an appellate court; it only checks for gross illegality or jurisdictional overreach."
    },
    {
        "id": "ch34-l3-q7",
        "question": "Under the Constitution, does the High Court have the power to examine the constitutional validity of a central law unilaterally, without consulting the Supreme Court?",
        "options": ["No, only the Supreme Court can invalidate Central acts.","Yes, the High Court can declare a Central law unconstitutional under its power of Judicial Review (Articles 13 and 226) if it infringes upon Fundamental Rights or operates beyond parliamentary competence.","Yes, but the judgment requires the President","No, the 42nd Amendment permanently stripped this power from High Courts."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment did attempt to strip this power, but the 43rd Amendment (1977) restored the High Courts"
    },
    {
        "id": "ch34-l3-q8",
        "question": "Analyze the procedure for the",
        "options": ["50 members.","100 members.","150 members.","200 members."],
        "correctAnswerIndex": 1,
        "explanation": "A removal motion needs the signatures of 100 members in the Lok Sabha (or 50 in the Rajya Sabha) to be admitted by the Speaker/Chairman. The procedure is identical to the removal of a Supreme Court judge."
    },
    {
        "id": "ch34-l3-q9",
        "question": "If a removal motion against a High Court judge is successfully admitted, the Speaker/Chairman forms a three-member inquiry committee to investigate the charges. Who MUST normally be included in this committee?",
        "options": ["The Union Law Minister, a Supreme Court Judge, and a retired Chief Justice of India.","The Chief Justice of India (or an SC judge), a Chief Justice of a High Court, and a distinguished jurist.","Three serving Chief Justices of various High Courts.","The Attorney General, the Solicitor General, and a senior advocate."],
        "correctAnswerIndex": 1,
        "explanation": "The three members are: 1) the CJI or a judge of the Supreme Court, 2) a Chief Justice of a High Court, and 3) a distinguished jurist."
    },
    {
        "id": "ch34-l3-q10",
        "question": "Regarding the",
        "options": ["Civil Contempt.","Criminal Contempt.","Both, depending on the damages caused.","Neither, it is protected under Article 19(1)(a) (Freedom of Speech)."],
        "correctAnswerIndex": 1,
        "explanation": "Civil contempt means willful disobedience to any judgment/order. Criminal contempt means the publication of any matter or doing an act which scandalizes or lowers the authority of any court, or interferes with judicial proceedings."
    },
    {
        "id": "ch34-l3-q11",
        "question": "In 2024, the debate over",
        "options": ["The Central Government directly funding building construction.","The Supreme Court allocating funds from the Consolidated Fund of India.","The State Government, which often struggles with budgetary allocations or delays funds, causing a massive infrastructure deficit in the subordinate judiciary.","Private Public Partnerships (PPP) managed by district courts."],
        "correctAnswerIndex": 2,
        "explanation": "The administration of justice (budgetary allocation for HC and lower courts infrastructure) is primarily a state subject (though there are central schemes). The dependence on state governments often leads to severe infrastructure bottlenecks."
    },
    {
        "id": "ch34-l3-q12",
        "question": "Assertion (A): The President can appoint an",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "While convention usually sees the senior-most judge appointed as Acting CJ, Article 223 does not mandate it. It simply states the President may appoint"
    },
    {
        "id": "ch34-l3-q13",
        "question": "Assertion (A): A retired permanent judge of a High Court can act as a senior advocate in the Supreme Court, but cannot argue a case before the High Court where they retired.\\nReason (R): Article 220 completely bans retired permanent HC judges from pleading in the specific High Court(s) where they held office as a permanent judge to prevent undue influence on their former colleagues.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 220 explicitly prohibits a retired permanent HC judge from pleading or acting in any court EXCEPT the Supreme Court and the other High Courts."
    },
    {
        "id": "ch34-l3-q14",
        "question": "Which of the following High Courts holds the record for having the largest sanctioned judge strength in India?",
        "options": ["Bombay High Court.","Madras High Court.","Calcutta High Court.","Allahabad High Court."],
        "correctAnswerIndex": 3,
        "explanation": "The Allahabad High Court has the largest sanctioned strength of judges (160) owing to the massive population and caseload of Uttar Pradesh."
    },
    {
        "id": "ch34-l3-q15",
        "question": "Gauhati High Court is notable because it has jurisdiction over:",
        "options": ["Assam, Meghalaya, Manipur, and Tripura.","Assam, Nagaland, Mizoram, and Arunachal Pradesh.","Only Assam.","Assam and West Bengal."],
        "correctAnswerIndex": 1,
        "explanation": "Originally, it covered all 7 northeastern states. However, in 2013, separate High Courts were established for Meghalaya, Manipur, and Tripura. Gauhati now covers Assam, Nagaland, Mizoram, and Arunachal Pradesh."
    },
    {
        "id": "ch34-l3-q16",
        "question": "Consider a dispute explicitly between the State Government of Karnataka and the State Government of Tamil Nadu regarding a river water sharing agreement. Where does the",
        "options": ["A fast-track tribunal set up by the High Court of either state.","Strictly the Supreme Court of India under Article 131.","The High Court whose geographical area covers the river basin.","A Joint Session of both State Legislative Assemblies."],
        "correctAnswerIndex": 1,
        "explanation": "Inter-state disputes (between two state governments, or Union vs States) fall under the exclusive original jurisdiction of the Supreme Court (Article 131), NOT the High Courts. The HC"
    },
    {
        "id": "ch34-l3-q17",
        "question": "If the Supreme Court transfers a criminal trial from a subordinate court in one state to a subordinate court in another state under its inherent powers, which High Court then exercises supervisory jurisdiction (Article 227) over that trial?",
        "options": ["The High Court of the original state.","The High Court of the state to which the trial has been transferred.","The Supreme Court itself directly supervises it.","A special bench combining judges from both High Courts."],
        "correctAnswerIndex": 1,
        "explanation": "Once a case is transferred by the SC to a subordinate court in a new state, that subordinate court falls under the territorial and supervisory jurisdiction (Article 227) of the High Court of that new state."
    },
    {
        "id": "ch34-l3-q18",
        "question": "To protect the independence of the subordinate judiciary from local executive pressures, the Constitution mandates that",
        "options": ["Posting and promotion of judges belonging to the judicial service.","The grant of leave to members of the judicial service.","Disciplinary proceedings and the imposition of minor administrative penalties.","The absolute power to dismiss or remove a District Judge from service unilaterally without referring to the Governor."],
        "correctAnswerIndex": 3,
        "explanation": "While the High Court exercises sweeping administrative and disciplinary control, the formal order of *dismissal, removal, or reduction in rank* of a District Judge can only be passed by the Governor (who is the appointing authority), acting upon the binding recommendation of the High Court."
    },
    {
        "id": "ch34-l3-q19",
        "question": "The concept of",
        "options": ["Yes, which is why it is banned in criminal trials.","No,","restricts public/media commentary that might prejudice an ongoing trial. Live streaming merely provides public access to the actual trial itself, fulfilling the constitutional requirement of an","without prejudicing the judge.","Yes, it requires amending the Contempt of Courts Act.","No, because High Courts are immune to all public opinions."],
        "correctAnswerIndex": 1,
        "explanation": "The SC in Swapnil Tripathi case ruled that live streaming promotes transparency and fulfills the"
    },
    {
        "id": "ch34-l3-q20",
        "question": "Unlike the US Constitution, which has separate federal and state court systems, India has a single integrated judicial system. How does the High Court exemplify this",
        "options": ["High Court judges are appointed by the state Governor but paid by the Union.","High Courts can ONLY enforce state laws, but appeals go to the Supreme Court.","High Courts administer both Central and State laws, and their judges are appointed, transferred, and removed by the Union authorities (President/Parliament), integrating them vertically with the Supreme Court.","High Courts must seek Presidential assent before delivering judgments."],
        "correctAnswerIndex": 2,
        "explanation": "The integration is proven by: 1) One uniform law code applied by HCs (both central/state laws), 2) Top-down appointments (President appoints HC judges), and 3) Decisions appealable to the SC. The HC is not purely a"
    },
    {
        "id": "ch34-l3-q21",
        "question": "To streamline justice delivery in rapidly developing cities, Commercial Courts have been established under the Commercial Courts Act (2015). If an ordinary High Court has",
        "options": ["The Commercial Division of the High Court.","A separate subordinate District Commercial Court.","An Administrative Tribunal.","A specialized bench sent by the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "In High Courts having ordinary original civil jurisdiction (like Delhi, Bombay, Calcutta, Madras, Himachal), a"
    },
    {
        "id": "ch34-l3-q22",
        "question": "Under the writ of",
        "options": ["Without jurisdiction or in excess of it.","In violation of principles of natural justice.","With a patent error of law apparent on the face of the record.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Certiorari is typically issued on three grounds: jurisdictional error (excess or lack), violation of natural justice, and an error of law apparent on the face of the record."
    },
    {
        "id": "ch34-l3-q23",
        "question": "Does the High Court possess the power to",
        "options": ["No, only the Supreme Court has the power of review under Article 137.","Yes, although not explicitly stated like Article 137 for the SC, the High Court as a","has the inherent power to review its judgments to prevent a miscarriage of justice or correct patent errors.","Yes, but review petitions must be filed before the Governor first.","Only in matters involving the death penalty."],
        "correctAnswerIndex": 1,
        "explanation": "High Courts possess the inherent power of review under their status as Courts of Record (Article 215), as well as procedurally under the Code of Civil Procedure (Section 114). They can correct grave and patent errors on the face of the record."
    },
    {
        "id": "ch34-l3-q24",
        "question": "A lawyer practices extensively in the Patna High Court. Can they be directly elevated as a Judge of the Supreme Court?",
        "options": ["Yes, if they have been an advocate of a High Court for at least 10 years.","No, they must serve as a High Court judge first.","Yes, if they have been an advocate for 5 years.","Only if they are considered a","."],
        "correctAnswerIndex": 0,
        "explanation": "Article 124(3) allows an advocate of a High Court with at least 10 years of standing to be directly appointed as a Supreme Court judge. Several eminent lawyers have been directly elevated (e.g., Justice Indu Malhotra)."
    },
    {
        "id": "ch34-l3-q25",
        "question": "If the Legislative Assembly of a state passes a resolution altering the jurisdiction of the state",
        "options": ["Yes, because High Courts are state subjects.","No. The constitution, organization, and jurisdiction of the High Court (except regarding internal state subjects) predominantly fall under the Union List, requiring Parliament","Yes, but subject to Governor","No, only the Chief Justice of India can alter it."],
        "correctAnswerIndex": 1,
        "explanation": "The State Legislature cannot alter the constitution, organization, or fundamental jurisdiction of the High Court. Entering"
    },
    {
        "id": "ch34-l3-q26",
        "question": "When dealing with",
        "options": ["The Election Commission of India acts as the court.","The District Court where the constituency is located.","The Supreme Court of India.","The High Court of the concerned state."],
        "correctAnswerIndex": 3,
        "explanation": "Disputes regarding the election of MPs and MLAs fall under the original jurisdiction of the High Court, as per the Representation of the People Act, 1951."
    },
    {
        "id": "ch34-l3-q27",
        "question": "Why did the 42nd Amendment Act (1976) drastically curtail the writ jurisdiction of the High Courts under Article 226, and how was it reversed?",
        "options": ["It removed the power to issue writs for Fundamental Rights; reversed by the 43rd Amendment.","It deleted the phrase",", crippling the High Court","It banned Habeas Corpus entirely; reversed by the Supreme Court.","It banned writs against the Prime Minister; never reversed."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment severely restricted Article 226 by stripping away the"
    },
    {
        "id": "ch34-l3-q28",
        "question": "Article 222 deals with the transfer of High Court judges. If a judge is transferred, the Constitution provides that they shall be entitled to receive:",
        "options": ["A promotion to Chief Justice within 2 years.","A compensatory",", in addition to their salary, as determined by Parliament.","A bungalow in the new state capital.","Exemption from income taxes for the remainder of their term."],
        "correctAnswerIndex": 1,
        "explanation": "Article 222(2): When a Judge has been or is so transferred, he shall, during the period he serves... be entitled to receive in addition to his salary such compensatory allowance as may be determined by Parliament."
    },
    {
        "id": "ch34-l3-q29",
        "question": "In the context of protecting judicial independence, what happens to the salary and allowances of a High Court judge during a",
        "options": ["They remain completely untouched because they are charged on the Consolidated Fund.","They can be reduced by a direction from the President of India.","They are postponed until the emergency ends, but not reduced.","The State Government can reduce them proportionately."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, a judge"
    },
    {
        "id": "ch34-l3-q30",
        "question": "Consider a dispute where a state government passes a law that allegedly violates a Fundamental Right. Can a citizen challenge this law directly in the Supreme Court (under Art 32) without first approaching the High Court (under Art 226)?",
        "options": ["Yes, Article 32 is a Fundamental Right itself, and exhaustion of alternative remedies (like Art 226) is not a strict constitutional bar for FR violations.","No, the Supreme Court has decreed that litigants must strictly exhaust the High Court remedy first.","Only if the State lacks a High Court.","No, because State laws can only be challenged in High Courts."],
        "correctAnswerIndex": 0,
        "explanation": "The SC ruled (e.g., in Romesh Thappar) that the right to approach the SC under Art 32 for FR enforcement is a guaranteed right, and the petitioner doesn"
    }
];

export const CHAPTER_34_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
