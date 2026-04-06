# Gap fill: Ch24 +2 L3, Ch25 +1 L3, Ch28 full (30L1+30L2+30L3), Ch32 full (30L1+30L2+30L3), Ch34 +30 L1

QUESTIONS = [
    # ── CH24 L3 – 2 gap questions ──
    # Chapter 24 = President of India
    {
        "text": "Consider the following statements about the President's power to promulgate ordinances under Article 123:\n1. An ordinance promulgated by the President must be laid before Parliament and ceases to operate at the expiration of six weeks from the reassembly of Parliament.\n2. An ordinance can be withdrawn by the President at any time.\n3. An ordinance can repeal or amend a Constitutional provision.\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        "correct_answer": "1 and 2 only",
        "explanation": "Statements 1 and 2 are correct under Article 123. Statement 3 is incorrect — an ordinance can have the same force as an Act of Parliament BUT cannot amend or repeal a constitutional provision — only a constitutional amendment under Article 368 can do that.",
        "chapter_number": 24,
        "level": 3
    },
    {
        "text": "The Supreme Court in Krishna Kumar Singh v. State of Bihar (2017) held regarding ordinances:\n1. Re-promulgation of ordinances without placing them before Parliament is unconstitutional.\n2. The power to promulgate ordinances is not absolute and is subject to judicial review.\n3. An ordinance automatically gets deemed to be an Act of Parliament after 6 weeks if not disapproved.\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        "correct_answer": "1 and 2 only",
        "explanation": "Statements 1 and 2 are correct per the Constitutional Bench ruling in Krishna Kumar Singh (2017). Statement 3 is incorrect — an ordinance does NOT automatically become an Act if not disapproved; it simply ceases to operate if not passed within 6 weeks.",
        "chapter_number": 24,
        "level": 3
    },

    # ── CH25 L3 – 1 gap question ──
    # Chapter 25 = Special Powers of Parliament
    {
        "text": "Consider the following statements about the constitutional position after the 42nd Amendment Act (1976) vis-à-vis the 44th Amendment Act (1978) and the Seventh Schedule:\n1. The 42nd Amendment moved education from the State List to the Concurrent List.\n2. The 44th Amendment restored education back to the State List.\n3. Today, education is in the Concurrent List.\nWhich of the statements given above are correct?",
        "options": ["1 and 3 only", "2 only", "1 and 2 only", "1, 2 and 3"],
        "correct_answer": "1 and 3 only",
        "explanation": "Statement 1 is correct — the 42nd Amendment (1976) moved education to Concurrent List (Entry 25). Statement 2 is incorrect — the 44th Amendment did NOT restore education to the State List. Today, education remains in the Concurrent List (Statement 3 correct).",
        "chapter_number": 25,
        "level": 3
    },

    # ── CH28: High Courts – 30 L1 ──
    {
        "text": "Under which Part and Articles of the Constitution are the High Courts of India established?",
        "options": ["Part V, Articles 124-147", "Part VI, Articles 214-232", "Part VII, Articles 264-290", "Part XIV, Articles 308-313"],
        "correct_answer": "Part VI, Articles 214-232",
        "explanation": "The High Courts are constituted under Part VI of the Constitution. Articles 214 to 232 deal with their establishment, constitution, jurisdiction, and powers.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Who appoints the judges of a High Court?",
        "options": ["The Governor of the State", "The Chief Minister on advice of the Cabinet", "The President, after consultation with the CJI and the Governor of the State", "The Supreme Court collegium"],
        "correct_answer": "The President, after consultation with the CJI and the Governor of the State",
        "explanation": "Under Article 217, High Court judges are appointed by the President after consultation with the Chief Justice of India and the Governor of the State, and in the case of appointment of a judge other than the Chief Justice, the Chief Justice of the High Court.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "What is the retirement age of a High Court judge?",
        "options": ["58 years", "60 years", "62 years", "65 years"],
        "correct_answer": "62 years",
        "explanation": "Under Article 217(1), a High Court judge holds office until he attains the age of 62 years. This differs from the Supreme Court (65 years).",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which Article of the Constitution empowers High Courts to issue writs for enforcement of fundamental rights AND for any other purpose?",
        "options": ["Article 32", "Article 226", "Article 227", "Article 214"],
        "correct_answer": "Article 226",
        "explanation": "Article 226 empowers High Courts to issue directions, orders, or writs (habeas corpus, mandamus, etc.) for enforcement of fundamental rights AND for any other purpose — giving them wider jurisdiction than the Supreme Court's Article 32 (which is only for fundamental rights).",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The superintendence over all subordinate courts and tribunals in a state is vested in the High Court by which Article?",
        "options": ["Article 226", "Article 227", "Article 228", "Article 229"],
        "correct_answer": "Article 227",
        "explanation": "Article 227 vests in every High Court the power of superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction. This is an administrative as well as judicial superintendence.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "A judge of a High Court can be transferred from one High Court to another by whom?",
        "options": ["Governor of the State", "The President after consultation with the CJI", "The Parliament by a special majority", "The Chief Justice of India independently"],
        "correct_answer": "The President after consultation with the CJI",
        "explanation": "Under Article 222, the President may transfer a judge of a High Court to another High Court after consultation with the Chief Justice of India. In practice, the transfer is initiated by the collegium.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Under which Article can a judge of the Supreme Court be appointed to act as a judge of a High Court?",
        "options": ["Article 219", "Article 220", "Article 228A", "Article 224A"],
        "correct_answer": "Article 224A",
        "explanation": "Article 224A allows the Chief Justice of a High Court, with the previous consent of the President, to request any person who has previously held the office of a judge of that or any other High Court to sit and act as a judge of that HC.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "After retirement, a High Court judge is barred from practicing in which courts?",
        "options": ["Only the Supreme Court", "Only the High Court where they served", "Only courts in their state", "The Supreme Court and the High Court where they last served"],
        "correct_answer": "The Supreme Court and the High Court where they last served",
        "explanation": "Under Article 220, a permanent judge of a High Court shall not plead or act in any court or before any authority in India except the Supreme Court and the other High Courts (i.e., not in the HC where they last served).",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which Article provides for the establishment of a High Court for a Union Territory?",
        "options": ["Article 214", "Article 230", "Article 231", "Article 241"],
        "correct_answer": "Article 241",
        "explanation": "Article 241 empowers Parliament to constitute a High Court for a Union Territory or declare any court in a Union Territory as a High Court for the purposes of the Constitution.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which High Court was established under Article 231 as a common High Court for two or more states?",
        "options": ["Bombay High Court", "Calcutta High Court", "Guwahati High Court", "Punjab and Haryana High Court"],
        "correct_answer": "Punjab and Haryana High Court",
        "explanation": "Article 231 allows Parliament to establish a common High Court for two or more states. Punjab and Haryana High Court (and Guwahati HC for NE states) are examples of High Courts serving multiple states.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The qualification to be appointed as a High Court judge includes being an advocate of a High Court for at least how many years?",
        "options": ["5 years", "7 years", "10 years", "15 years"],
        "correct_answer": "10 years",
        "explanation": "Under Article 217(2), a person is qualified for appointment as a High Court judge if they have been an advocate of a High Court (or two or more such Courts in succession) for at least ten years.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The salaries of High Court judges are charged to which fund?",
        "options": ["The Consolidated Fund of the respective State", "The Consolidated Fund of India", "The Public Account of India", "The contingency fund of the State"],
        "correct_answer": "The Consolidated Fund of India",
        "explanation": "Under the Constitution (Seventh Amendment) Act, 1956, the salaries of High Court judges are charged to the Consolidated Fund of India — not to the state fund — ensuring their financial independence from state governments.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Under Article 228, a High Court can withdraw cases from subordinate courts when:",
        "options": ["The case involves a large amount of money.", "The case involves a substantial question of law as to the interpretation of the Constitution.", "The subordinate court judge requests the High Court to take it up.", "The state government directs the High Court to withdraw the case."],
        "correct_answer": "The case involves a substantial question of law as to the interpretation of the Constitution.",
        "explanation": "Article 228 allows a High Court to withdraw a pending case from a subordinate court if the HC is satisfied that the case involves a substantial question of law as to the interpretation of the Constitution that needs to be settled.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which of the following correctly describes the original jurisdiction of a High Court?",
        "options": ["All High Courts have the same original jurisdiction in civil and criminal matters.", "Only High Courts in Calcutta, Bombay, and Madras have original jurisdiction in civil and criminal matters.", "All High Courts have original jurisdiction in all matters.", "The original jurisdiction of a High Court is entirely determined by Parliament."],
        "correct_answer": "Only High Courts in Calcutta, Bombay, and Madras have original jurisdiction in civil and criminal matters.",
        "explanation": "The High Courts of Calcutta, Bombay and Madras have original jurisdiction in civil and criminal matters, a legacy of the Charter Acts. Other High Courts have limited or no original civil/criminal jurisdiction but all have original jurisdiction in fundamental rights cases (Article 226).",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "An additional judge of a High Court is appointed under which Article?",
        "options": ["Article 216", "Article 217", "Article 224", "Article 224A"],
        "correct_answer": "Article 224",
        "explanation": "Article 224 allows the President to appoint a duly qualified person as an additional judge of a High Court for a period not exceeding two years when there is an increase in workload or arrears of work.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Is a High Court's writ jurisdiction under Article 226 subject to territorial limits?",
        "options": ["No — all High Courts can issue writs throughout the country.", "Yes — a High Court can only issue writs to authorities located within its territorial jurisdiction or in relation to persons resident in its territory.", "Only the Bombay and Calcutta HCs can issue writs beyond their territory.", "Article 226 applies only to the Union Government, not to state governments."],
        "correct_answer": "Yes — a High Court can only issue writs to authorities located within its territorial jurisdiction or in relation to persons resident in its territory.",
        "explanation": "A High Court's writ jurisdiction is territorial. It can issue writs to any person, authority or government within the limits of its jurisdiction. Cause of action can also be a basis for territorial jurisdiction.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The acting Chief Justice of a High Court is appointed by:",
        "options": ["The Governor of the State", "The President of India", "The Chief Justice of India", "The Council of Ministers of the State"],
        "correct_answer": "The President of India",
        "explanation": "Under Article 223, when the office of Chief Justice of a High Court is vacant, or the Chief Justice is absent or unable to perform duties of his office, the duties shall be performed by such one of the other judges of the Court as the President may appoint.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which Article of the Constitution allows High Courts to transfer cases to itself from a subordinate court and decide the constitutional question?",
        "options": ["Article 226", "Article 227", "Article 228", "Article 229"],
        "correct_answer": "Article 228",
        "explanation": "Article 228 specifically provides for transfer of a case from a subordinate court to the High Court when it involves a substantial constitutional question. The HC then decides the question and may return the case to the subordinate court for disposal.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "A High Court judge takes oath before whom?",
        "options": ["The President of India", "The Chief Justice of the High Court", "The Governor of the State", "The Chief Minister of the State"],
        "correct_answer": "The Governor of the State",
        "explanation": "Under Article 219, every person appointed to be a judge of a High Court shall, before entering upon his office, make and subscribe before the Governor of the State (or some person appointed by him) an oath or affirmation.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which of the following is NOT a ground for appointment as a High Court judge?",
        "options": ["Being an advocate of a High Court for 10 years", "Having been a judge in a subordinate court for 10 years", "Having been an advocate of a District Court for 10 years", "Being a holder of a judicial office in India for 10 years"],
        "correct_answer": "Having been an advocate of a District Court for 10 years",
        "explanation": "Under Article 217(2), a qualified person must have been an advocate of a High Court for 10 years, or held judicial office in India for 10 years. Experience in District Courts alone does not qualify unless it is a 'judicial office' as specified.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Under which Article is the removal of a High Court judge provided for?",
        "options": ["Article 217(1)(b)", "Article 218", "Article 219", "Article 221"],
        "correct_answer": "Article 217(1)(b)",
        "explanation": "Article 217(1)(b) provides that a High Court judge may be removed from office by the President on an address by each House of Parliament in the same session on grounds of proved misbehaviour or incapacity — the same process as SC judges under Article 124(4).",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "An appeal from a High Court's judgment in a civil matter can be taken to the Supreme Court under which Article?",
        "options": ["Article 131", "Article 132", "Article 133", "Article 134"],
        "correct_answer": "Article 133",
        "explanation": "Appeals from High Court judgments in civil proceedings where a substantial question of law of general importance is certified by the HC go to the SC under Article 133.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The High Court of Judicature at Allahabad has jurisdiction over which state?",
        "options": ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "Uttarakhand only"],
        "correct_answer": "Uttar Pradesh",
        "explanation": "The Allahabad High Court has jurisdiction over the state of Uttar Pradesh. Uttarakhand, after its formation as a separate state in 2000, initially fell under Allahabad HC but got its own High Court (Uttarakhand HC) headquartered at Nainital.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Which of the following is a power of a High Court under Article 229?",
        "options": ["To appoint and dismiss its own staff and officers", "To levy fines on subordinate court judges", "To constitute benches of subordinate courts", "To transfer cases to the Supreme Court"],
        "correct_answer": "To appoint and dismiss its own staff and officers",
        "explanation": "Article 229 deals with the officers and servants of the High Courts — the Chief Justice has the power to appoint and dismiss officers and servants of the court, subject to any law made by the state legislature.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The expenses related to salaries of High Court judges are borne by the Consolidated Fund of India under which provision?",
        "options": ["Original Article 214", "Seventh Schedule, List I", "Constitution (Seventh Amendment) Act, 1956", "Article 266"],
        "correct_answer": "Constitution (Seventh Amendment) Act, 1956",
        "explanation": "The Seventh Amendment Act (1956) restructured the High Courts after States Reorganization and provided that High Court judges' salaries and pensions would be charged to the Consolidated Fund of India.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Under the Constitution, a High Court has appellate jurisdiction over Sessions Courts and District Courts. This appellate jurisdiction is:",
        "options": ["Only in criminal matters", "Only in civil matters", "Both in civil and criminal matters", "Only in constitutional matters"],
        "correct_answer": "Both in civil and criminal matters",
        "explanation": "Under the Code of Civil Procedure and Code of Criminal Procedure, High Courts have appellate jurisdiction in both civil and criminal matters over lower courts within their territorial jurisdiction.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The High Court's power of 'record' (similar to Article 129 for SC) is given under which Article?",
        "options": ["Article 214", "Article 215", "Article 216", "Article 217"],
        "correct_answer": "Article 215",
        "explanation": "Article 215 declares every High Court to be a Court of Record, with all the powers of such a court including the power to punish for contempt of itself.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "Can Parliament increase the number of judges in a High Court?",
        "options": ["No — only the President can by an executive order", "Yes — Parliament can by law increase the number of judges in any High Court", "No — this requires a Constitutional Amendment in each case", "Yes — but only with the consent of the concerned State Legislature"],
        "correct_answer": "Yes — Parliament can by law increase the number of judges in any High Court",
        "explanation": "Under Article 216, every High Court shall consist of a Chief Justice and such other judges as the President may from time to time deem it necessary to appoint. Parliament can also legislate to prescribe a number.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The process for establishing a new High Court for a new state (e.g., Telangana created in 2014) is governed by:",
        "options": ["Article 3 alone", "Article 3 read with Article 214", "Article 231", "Article 241"],
        "correct_answer": "Article 3 read with Article 214",
        "explanation": "When a new state is created under Article 3, the new state must have its own High Court (Article 214). Parliament establishes the High Court for the new state through the legislation creating the state or through a separate law.",
        "chapter_number": 28,
        "level": 1
    },
    {
        "text": "The primary reason why High Court judges' salaries are charged to the Consolidated Fund of India rather than the State Consolidated Fund is:",
        "options": ["To ensure uniformity of salaries across all states", "To guarantee judicial independence by removing state financial control over judges", "To reduce burden on state budgets", "To enable the Union Government to control the judiciary"],
        "correct_answer": "To guarantee judicial independence by removing state financial control over judges",
        "explanation": "Charging salaries to the central Consolidated Fund insulates judges from state financial pressure and control, ensuring judicial independence — a core constitutional value.",
        "chapter_number": 28,
        "level": 1
    },

    # ── CH32: Bar Councils & Legal Profession – 30 L1 ──
    # Chapter 32 = Election Commission of India (confirmed from Laxmikanth order)
    {
        "text": "Which Part and Article of the Constitution establishes the Election Commission of India?",
        "options": ["Part XIV, Article 315", "Part XV, Article 324", "Part XVI, Article 341", "Part V, Article 118"],
        "correct_answer": "Part XV, Article 324",
        "explanation": "The Election Commission of India is established under Part XV of the Constitution. Article 324 vests the superintendence, direction and control of the preparation of electoral rolls and the conduct of all elections in the Election Commission.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The Election Commission of India was a single-member body from 1950 to:",
        "options": ["1985", "1989", "1993", "2002"],
        "correct_answer": "1989",
        "explanation": "The ECI was a single-member body (with only the Chief Election Commissioner) from its establishment in 1950 until 1989, when two additional Election Commissioners were appointed for the first time (before the 1989 elections). This was made a permanent arrangement from 1993.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Who appoints the Chief Election Commissioner and other Election Commissioners?",
        "options": ["President, on the advice of the Prime Minister", "President, subject to the provisions of Parliament's law", "Chief Justice of India", "Parliament by special majority"],
        "correct_answer": "President, subject to the provisions of Parliament's law",
        "explanation": "Under Article 324(2), the Election Commission shall consist of the Chief Election Commissioner and such number of other Election Commissioners as the President may fix, subject to the provisions of any law made in that behalf by Parliament. They are appointed by the President.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "How can the Chief Election Commissioner be removed from office?",
        "options": ["By the President on his own motion", "In the same manner as a judge of the Supreme Court — by an address of Parliament with special majority", "By the Council of Ministers recommending removal to the President", "By the Supreme Court upon application of 50 MPs"],
        "correct_answer": "In the same manner as a judge of the Supreme Court — by an address of Parliament with special majority",
        "explanation": "Article 324(5) provides that the Chief Election Commissioner shall not be removed from his office except in like manner and on the like grounds as a judge of the Supreme Court — ensuring strong security of tenure.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The Election Commission of India is responsible for the conduct of elections to which of the following?\n1. Lok Sabha\n2. Rajya Sabha\n3. State Legislative Assemblies\n4. Panchayati Raj Institutions",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "1 and 3 only", "1, 2 and 4 only"],
        "correct_answer": "1, 2 and 3 only",
        "explanation": "The ECI conducts elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies and Legislative Councils, and the offices of the President and Vice-President. Elections to Panchayati Raj Institutions are conducted by State Election Commissions (not the ECI).",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The State Election Commission (SEC), created by the 73rd Amendment, is responsible for conducting elections to:",
        "options": ["State Legislative Assemblies", "Lok Sabha elections in the State", "Panchayati Raj Institutions and Municipalities", "All elections within the state"],
        "correct_answer": "Panchayati Raj Institutions and Municipalities",
        "explanation": "The 73rd and 74th Constitutional Amendment Acts (1992) created State Election Commissions under Articles 243K and 243ZA, responsible for superintending, directing and controlling elections to Panchayats and Municipal bodies.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The 'Model Code of Conduct' enforced during elections is:",
        "options": ["A constitutional provision under Article 324", "A statutory instrument under the Representation of People Act", "Non-statutory guidelines evolved by the Election Commission and enforced using Article 324 powers", "A directive issued by the Supreme Court"],
        "correct_answer": "Non-statutory guidelines evolved by the Election Commission and enforced using Article 324 powers",
        "explanation": "The Model Code of Conduct (MCC) is not statutory — it evolved over time as a consensual document among political parties. The ECI enforces it using its plenary powers under Article 324 and its residuary powers.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Under Article 324, the Election Commission has superintendence, direction and control of elections to which offices?",
        "options": ["Only the President and Vice-President", "Parliament and State Legislatures only", "President, Vice-President, Parliament, State Legislatures", "All constitutional bodies including judiciary"],
        "correct_answer": "President, Vice-President, Parliament, State Legislatures",
        "explanation": "Article 324 covers elections to Parliament, State Legislatures, and the offices of the President and Vice-President — four categories of elections.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which Act primarily governs parliamentary and state assembly elections in India?",
        "options": ["The Indian Elections Act, 1950", "The Representation of the People Act, 1951", "The Election Commission Act, 2023", "The Conduct of Elections Rules, 1961"],
        "correct_answer": "The Representation of the People Act, 1951",
        "explanation": "The Representation of the People Act, 1951 is the primary statute governing the qualifications, conduct, and disputes related to elections to Parliament and State Legislatures.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "What is the term of office of the Chief Election Commissioner?",
        "options": ["5 years or until age 65, whichever is earlier", "6 years or until age 65, whichever is earlier", "5 years or until age 62, whichever is earlier", "6 years or until age 62, whichever is earlier"],
        "correct_answer": "6 years or until age 65, whichever is earlier",
        "explanation": "The Chief Election Commissioner has a tenure of 6 years or until the age of 65, whichever comes earlier. This is provided under the Chief Election Commissioner and Other Election Commissioner (Service Condition) Act, 2023.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which body prepares and maintains the electoral rolls for parliamentary and state assembly elections?",
        "options": ["State Election Commission", "Election Commission of India", "Ministry of Home Affairs", "District Collectors"],
        "correct_answer": "Election Commission of India",
        "explanation": "Under Article 324, the preparation of electoral rolls for elections to Parliament and State Legislatures falls under the superintendence of the Election Commission of India (not the State Election Commission).",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The ECI can recognize a political party as a 'national party' or a 'state party' under which powers?",
        "options": ["Article 324 read with the Election Symbols (Reservation and Allotment) Order", "Representation of People Act, 1951 Section 29A", "Both Article 324 and the Representation of People Act", "Conduct of Elections Rules, 1961"],
        "correct_answer": "Article 324 read with the Election Symbols (Reservation and Allotment) Order",
        "explanation": "The ECI regulates and recognizes political parties and assigns election symbols under the Election Symbols (Reservation and Allotment) Order, 1968, exercising its Article 324 powers.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which of the following statements about the 'Election Commission Act 2023' (Chief Election Commissioner and Other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act) is correct?",
        "options": ["It replaced the collegium system for appointing election commissioners with a committee that includes the Prime Minister, the Leader of Opposition, and the CJI.", "It replaced the collegium system; the new committee comprises the PM, Leader of Opposition, and a Union Cabinet Minister nominated by the PM.", "It mandates approval by the Supreme Court for all ECI appointments.", "It created an independent ECI with no governmental involvement in appointments."],
        "correct_answer": "It replaced the collegium system; the new committee comprises the PM, Leader of Opposition, and a Union Cabinet Minister nominated by the PM.",
        "explanation": "The 2023 Act replaced the earlier appointment mechanism. The new Selection Committee is the PM (Chairperson), Leader of Opposition in the Lok Sabha, and a Union Cabinet Minister nominated by the PM — replacing the earlier draft law that included the CJI.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The Election Commission of India recognizes 'Nota' (None of the Above) option on the EVM ballot. This was directed by:",
        "options": ["Parliament through an amendment to RPA 1951", "The Supreme Court in People's Union for Civil Liberties (PUCL) v. Union of India (2013)", "The President's Constitutional order", "A directive from the Ministry of Law and Justice"],
        "correct_answer": "The Supreme Court in People's Union for Civil Liberties (PUCL) v. Union of India (2013)",
        "explanation": "The SC in PUCL v. UoI (2013) held that voters have a right to express their negative choice under Article 19(1)(a) and ordered the ECI to provide 'NOTA' option on ballot papers and EVMs.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which of the following is NOT a function of the Election Commission of India?",
        "options": ["Registration of political parties", "Allotment of election symbols", "Resolution of disputes about electoral rolls for Panchayat elections", "Delimitation of parliamentary constituencies"],
        "correct_answer": "Resolution of disputes about electoral rolls for Panchayat elections",
        "explanation": "Panchayat elections fall under State Election Commissions. The ECI handles parliamentary/state level elections. Delimitation is done by the Delimitation Commission (not ECI directly) but ECI oversees the process.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "In which case did the Supreme Court hold that Article 324 is a plenary provision, conferring wide powers on the Election Commission?",
        "options": ["Mohinder Singh Gill v. Chief Election Commissioner (1978)", "S.S. Dhanoa v. Union of India", "People's Union for Civil Liberties v. Union of India", "T.N. Seshan v. Union of India"],
        "correct_answer": "Mohinder Singh Gill v. Chief Election Commissioner (1978)",
        "explanation": "In Mohinder Singh Gill v. CEC (1978), the SC held that Article 324 is a plenary provision and the EC's power extends to all such acts as may be necessary to ensure the conduct of free and fair elections, even if not specifically enumerated.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which constitutional amendment inserted 'Electorates' as a subject under the 7th Schedule in connection with ensuring free and fair elections?",
        "options": ["42nd Amendment", "44th Amendment", "61st Amendment", "No amendment was needed — elections were always listed"],
        "correct_answer": "No amendment was needed — elections were always listed",
        "explanation": "Elections to Parliament and State Legislatures are covered under Union List Entry 72 and 73 respectively in the Seventh Schedule from the original Constitution.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which Article deals with the superintendence, direction and control of the preparation of electoral rolls?",
        "options": ["Article 327", "Article 328", "Article 324", "Article 329"],
        "correct_answer": "Article 324",
        "explanation": "Article 324 vests in the Election Commission the superintendence, direction and control of the preparation of the electoral rolls and the conduct of all elections to Parliament, State Legislatures, and offices of the President and VP.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "What does 'One Nation One Election' proposal seek to achieve?",
        "options": ["Synchronize Lok Sabha and all State Assembly elections to be held simultaneously.", "Merge the Election Commission with State Election Commissions.", "Allow only national parties to contest in state elections.", "Hold elections every 3 years instead of 5."],
        "correct_answer": "Synchronize Lok Sabha and all State Assembly elections to be held simultaneously.",
        "explanation": "The 'One Nation One Election' proposal seeks to synchronize Lok Sabha elections with all State Assembly elections, reducing frequency of elections. It would require significant constitutional amendments (including Articles 83, 85, 172, 174, 356).",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which Article empowers Parliament to make laws regarding the conduct of elections?",
        "options": ["Article 324", "Article 327", "Article 329", "Article 330"],
        "correct_answer": "Article 327",
        "explanation": "Article 327 empowers Parliament to make provision with respect to all matters relating to or in connection with elections to Parliament or State Legislatures, including the preparation of electoral rolls, delimitation of constituencies, etc.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Can a High Court bar its courts from trying disputes relating to elections to Parliament or State Legislatures during an ongoing election?",
        "options": ["Yes — this is a common judicial practice.", "No — only the Election Commission can bar court intervention.", "Yes — under Article 329, courts cannot question the validity of any law relating to delimitation or allotment of seats until election is complete.", "No — courts always retain jurisdiction even during elections."],
        "correct_answer": "Yes — under Article 329, courts cannot question the validity of any law relating to delimitation or allotment of seats until election is complete.",
        "explanation": "Article 329 creates a bar against courts questioning the validity of any law relating to delimitation of constituencies or allotment of seats. Similarly, no election can be questioned except in the manner provided (election petition post-election).",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The delimitation of constituencies for elections to Parliament and State Assemblies is done by:",
        "options": ["The Election Commission of India alone", "A Delimitation Commission appointed by the President under a law made by Parliament", "The Ministry of Home Affairs", "The Registrar General of India (Census Commissioner)"],
        "correct_answer": "A Delimitation Commission appointed by the President under a law made by Parliament",
        "explanation": "Under Article 327 and the Delimitation Acts, the Delimitation Commission is constituted by the President under the provisions of Parliament's law. The ECI assists in the process but the Commission is a separate statutory body.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The principle of 'one vote one value' in Indian elections is implemented through:",
        "options": ["Proportional representation with single transferable vote for the President's election", "First Past The Post (FPTP) for Lok Sabha and State Assembly elections", "Both FPTP (Lok Sabha/State Assembly) and proportional representation (President/VP/Rajya Sabha elections)", "Uniform implementation of proportional representation in all elections"],
        "correct_answer": "Both FPTP (Lok Sabha/State Assembly) and proportional representation (President/VP/Rajya Sabha elections)",
        "explanation": "Lok Sabha and State Assembly elections use FPTP. Presidential and VP elections use Single Transferable Vote (proportional representation). Rajya Sabha uses open ballot single transferable vote.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Electronic Voting Machines (EVMs) were first used in India in which election?",
        "options": ["1982 Kerala Assembly election (some constituencies)", "1989 Lok Sabha election", "1998 Lok Sabha election", "2004 Lok Sabha election"],
        "correct_answer": "1982 Kerala Assembly election (some constituencies)",
        "explanation": "EVMs were first experimentally used in some constituencies of the Kerala State Assembly election in 1982. They were gradually adopted and became universal in Lok Sabha elections by 2004.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "How many Election Commissioners, including the CEC, does the Election Commission of India currently have?",
        "options": ["1 (CEC only)", "2 (CEC + 1 EC)", "3 (CEC + 2 ECs)", "5 (CEC + 4 ECs)"],
        "correct_answer": "3 (CEC + 2 ECs)",
        "explanation": "The Election Commission of India has been a three-member body since 1993 — comprising the Chief Election Commissioner and two Election Commissioners.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "The Electoral Bond Scheme introduced in 2018 was struck down by the Supreme Court as unconstitutional in which case?",
        "options": ["ADR v. Union of India (2024)", "Kihoto Hollohan v. Zachillhu (1992)", "PUCL v. Union of India (2013)", "Indira Gandhi v. Raj Narain (1975)"],
        "correct_answer": "ADR v. Union of India (2024)",
        "explanation": "The Supreme Court in Association for Democratic Reforms (ADR) v. Union of India (2024) struck down the Electoral Bond Scheme as unconstitutional — it violates voters' right to information about political funding under Article 19(1)(a).",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Article 326 guarantees the right to vote at elections to the House of the People and Legislative Assemblies on the basis of:",
        "options": ["Property ownership", "Adult suffrage — every person who is a citizen of India and aged 18 years and above", "Educational qualification — minimum primary level", "Payment of taxes"],
        "correct_answer": "Adult suffrage — every person who is a citizen of India and aged 18 years and above",
        "explanation": "Article 326 establishes adult suffrage based on Indian citizenship and age 18+. The voting age was reduced from 21 to 18 by the 61st Constitutional Amendment Act, 1988.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "Which of the following elections does NOT fall under the jurisdiction of the Election Commission of India?",
        "options": ["Election to the office of the Vice-President", "Election to the office of the President", "Election to the Rajya Sabha", "Election to block-level panchayats"],
        "correct_answer": "Election to block-level panchayats",
        "explanation": "Block-level panchayat elections fall under the State Election Commission — not the ECI. Presidential, VP, Rajya Sabha, and Lok Sabha elections all fall under the ECI's jurisdiction.",
        "chapter_number": 32,
        "level": 1
    },
    {
        "text": "What is the minimum voting age in India as per the Constitution after the 61st Amendment?",
        "options": ["21 years", "18 years", "16 years", "20 years"],
        "correct_answer": "18 years",
        "explanation": "The 61st Constitutional Amendment Act (1988) reduced the voting age from 21 to 18 years by amending Article 326.",
        "chapter_number": 32,
        "level": 1
    },

    # ── CH34: Inter-State Relations – 30 L1 ──
    {
        "text": "Which Article of the Constitution provides for inter-state trade, commerce and intercourse?",
        "options": ["Article 262", "Article 301", "Article 263", "Article 257"],
        "correct_answer": "Article 301",
        "explanation": "Article 301 declares that trade, commerce, and intercourse throughout the territory of India shall be free. It is the foundational provision for freedom of inter-state trade.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Inter-State Council is established under which Article?",
        "options": ["Article 261", "Article 263", "Article 262", "Article 256"],
        "correct_answer": "Article 263",
        "explanation": "Article 263 empowers the President to establish an Inter-State Council if it appears to him that the public interest would be served by the establishment of such a Council for enquiring into and advising on disputes and coordination between states.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Inter-State Council was established in India in which year?",
        "options": ["1950", "1967", "1990", "2006"],
        "correct_answer": "1990",
        "explanation": "The Inter-State Council was established in 1990 on the recommendation of the Sarkaria Commission (1988) under Article 263 by a Presidential Order.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Who chairs the Inter-State Council?",
        "options": ["President of India", "Vice-President", "Chief Justice of India", "Prime Minister"],
        "correct_answer": "Prime Minister",
        "explanation": "The Prime Minister is the Chairman of the Inter-State Council. Its members include Chief Ministers of all states, administrators of union territories with legislatures, and six Union Cabinet Ministers nominated by the PM.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Inter-state water disputes in India are adjudicated by a tribunal set up under which Article?",
        "options": ["Article 131", "Article 262", "Article 263", "Article 282"],
        "correct_answer": "Article 262",
        "explanation": "Article 262 provides for adjudication of disputes relating to waters of inter-state rivers or river valleys. Parliament may by law provide for the adjudication of such disputes, and may also provide that neither the SC nor any other court shall exercise jurisdiction in such disputes.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Zonal Councils in India are created under which authority?",
        "options": ["Under Article 263 of the Constitution", "Under the States Reorganisation Act, 1956", "By the Planning Commission", "By the National Development Council"],
        "correct_answer": "Under the States Reorganisation Act, 1956",
        "explanation": "Zonal Councils are statutory (not constitutional) bodies created under the States Reorganisation Act, 1956. They are NOT constitutional bodies under Article 263.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Who chairs the Zonal Councils?",
        "options": ["The Governor of the senior-most state in the zone", "The Union Home Minister", "The Prime Minister on rotation", "The Chief Justice of the State"],
        "correct_answer": "The Union Home Minister",
        "explanation": "The Union Home Minister is the common chairman of all Zonal Councils. Each zone also has a Vice Chairman who is the Chief Minister of the host state on rotation.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "India is divided into how many Zonal Councils?",
        "options": ["4", "5", "6", "7"],
        "correct_answer": "5",
        "explanation": "India has 5 Zonal Councils: Northern, Central, Eastern, Western, and Southern. A North-Eastern Council for 8 north-eastern states was separately created.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The North-Eastern Council, unlike the other 5 Zonal Councils, was established by:",
        "options": ["Resolution of the Inter-State Council", "The North-Eastern Council Act, 1971", "The States Reorganisation Act, 1956", "Article 371 of the Constitution"],
        "correct_answer": "The North-Eastern Council Act, 1971",
        "explanation": "The North-Eastern Council was created separately under the North-Eastern Council Act, 1971, covering the 8 north-eastern states for special coordination.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Under Article 258, the Union Government can entrust its functions to state governments with their consent. This provision promotes which concept?",
        "options": ["Fiscal federalism", "Cooperative federalism", "Competitive federalism", "Centralism"],
        "correct_answer": "Cooperative federalism",
        "explanation": "Article 258 allows the Union to delegate its executive functions to state governments (with their consent), while Article 258A allows states to delegate to the Union — together these articles facilitate cooperative federalism.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Article 301 guarantees freedom of inter-state trade. This freedom can be restricted by Parliament under Article 302 on grounds of:",
        "options": ["Revenue needs of state governments", "National security or public interest", "Protection of state industries only", "Environmental reasons only"],
        "correct_answer": "National security or public interest",
        "explanation": "Article 302 allows Parliament to impose restrictions on freedom of trade under Article 301 in the public interest. State legislatures have more limited powers to impose restrictions (only with Presidential sanction for discriminatory restrictions).",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The 'full faith and credit clause,' similar to the US Constitution, is found in which Indian constitutional provision?",
        "options": ["Article 260", "Article 261", "Article 262", "Article 264"],
        "correct_answer": "Article 261",
        "explanation": "Article 261 provides that full faith and credit shall be given throughout India to public acts, records, and judicial proceedings of the Union and every state — similar to the Full Faith and Credit clause in the US Constitution.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Which body was set up following the Sarkaria Commission recommendations specifically to study Centre-State relations?",
        "options": ["NITI Aayog", "Inter-State Council", "National Integration Council", "Finance Commission"],
        "correct_answer": "Inter-State Council",
        "explanation": "The Sarkaria Commission (1983-1988) investigated Centre-State relations and recommended the creation of a permanent Inter-State Council. The council was set up in 1990.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Under Article 257, the executive power of every state must be exercised so as to ensure compliance with laws made by Parliament and to not impede or prejudice the exercise of the executive power of the Union. This Article ensures:",
        "options": ["State supremacy in its executive matters", "The Union's executive power has primacy in case of conflict with state executive power", "States can freely override Union executive directions", "No power is vested in the Union to give directions to states"],
        "correct_answer": "The Union's executive power has primacy in case of conflict with state executive power",
        "explanation": "Article 257 establishes the Union's executive authority over states — states must not impede Union executive power. The Union can give directions to states in certain matters under Articles 256-257.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Under which Article can the Union give directions to a state on matters of national highways and railways maintenance?",
        "options": ["Article 253", "Article 256", "Article 257", "Article 258"],
        "correct_answer": "Article 257",
        "explanation": "Article 257(2) specifically empowers the Union to give directions to states for construction and maintenance of means of communication (national highways, railways) declared to be of national/military importance.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "What is the constitutional provision for interstate migration and its impact on fundamental rights?",
        "options": ["Citizens lose rights when crossing state borders", "Article 19(1)(d) guarantees the right to move freely throughout India", "Special permission is required to work in another state", "Only Union Territories allow free migration"],
        "correct_answer": "Article 19(1)(d) guarantees the right to move freely throughout India",
        "explanation": "Article 19(1)(d) guarantees every citizen the right to move freely throughout the territory of India, facilitating inter-state movement. Article 19(1)(e) further guarantees the right to reside and settle in any part of the territory of India.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Cauvery Water Disputes Tribunal was set up under which law?",
        "options": ["The Cauvery River Authority Act", "The Inter-State Water Disputes Act, 1956 (under Article 262)", "The River Boards Act, 1956", "A Special Act of Parliament for the Cauvery only"],
        "correct_answer": "The Inter-State Water Disputes Act, 1956 (under Article 262)",
        "explanation": "The Inter-State Water Disputes Act, 1956 was enacted under Article 262 to adjudicate interstate river water disputes. The Cauvery Water Disputes Tribunal was established under this Act.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The GST Council is an important body for Centre-State fiscal coordination. It was established under which Article?",
        "options": ["Article 279", "Article 279A", "Article 280", "Article 263"],
        "correct_answer": "Article 279A",
        "explanation": "Article 279A was inserted by the 101st Constitutional Amendment Act (2016) to constitute a Goods and Services Tax Council as a constitutional body for federal coordination on GST.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "How does Article 365 relate to Centre-State relations?",
        "options": ["It allows states to call for renegotiation of Central laws.", "It provides that if a state fails to comply with Union directions, the President may hold that a situation has arisen where government of the state cannot be carried on in accordance with the Constitution.", "It gives states veto power over central directives.", "It creates an independent dispute resolution mechanism."],
        "correct_answer": "It provides that if a state fails to comply with Union directions, the President may hold that a situation has arisen where government of the state cannot be carried on in accordance with the Constitution.",
        "explanation": "Article 365 is a coercive measure — non-compliance with Union executive directions (under Articles 256-257) gives the President grounds to invoke Article 356 (President's Rule) against the state.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Punchhi Commission (2007-2010) was constituted to review:",
        "options": ["Centre-State relations in India", "Federal financial arrangements only", "Election Commission's powers", "Constitutional validity of emergency provisions"],
        "correct_answer": "Centre-State relations in India",
        "explanation": "The Punchhi Commission (chaired by M.M. Punchhi, former CJI) was created to review Centre-State relations. It submitted its report in 2010, recommending various reforms in Centre-State legislative, executive, and financial relations.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Under Article 263, the Inter-State Council can:\n1. Inquire into and advise upon disputes between states.\n2. Investigate subjects of common interest between the Union and states or among states.\n3. Make binding decisions on Centre-State disputes.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        "correct_answer": "1 and 2 only",
        "explanation": "The Inter-State Council can inquire into disputes and advise upon them, and investigate matters of common interest. However, its decisions are recommendatory — NOT binding (Statement 3 is incorrect).",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Which of the following Articles deals with public acts, records and judicial proceedings and their full faith and credit across states (like the Full Faith and Credit clause)?",
        "options": ["Article 260", "Article 261", "Article 262", "Article 263"],
        "correct_answer": "Article 261",
        "explanation": "Article 261 is the Indian equivalent of the Full Faith and Credit Clause — it provides for mutual recognition of public acts, records and judicial proceedings across all states and the Union.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The National Development Council (NDC) in India is:",
        "options": ["A constitutional body under Article 263", "A constitutional body under Article 280", "A statutory body created by Parliament", "A non-constitutional, extra-constitutional advisory body"],
        "correct_answer": "A non-constitutional, extra-constitutional advisory body",
        "explanation": "The NDC is not a constitutional or statutory body — it was created by an executive resolution in 1952. It was effectively superseded by NITI Aayog (2015), though it was never formally abolished.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Under Article 304, a state legislature can impose taxes on goods imported from other states, provided the tax is not discriminatory. This provision aims to:",
        "options": ["Completely restrict inter-state trade", "Allow states fiscal autonomy while ensuring non-discrimination between goods from different states", "Give states power to block imports from other states", "Override Article 301's freedom of trade"],
        "correct_answer": "Allow states fiscal autonomy while ensuring non-discrimination between goods from different states",
        "explanation": "Article 304 balances a state's right to tax with the constitutional guarantee of non-discriminatory treatment of goods from other states. The key is that taxes must not discriminate between locally produced and imported goods.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Article 302 empowers Parliament to impose restrictions on the freedom of trade under Article 301. Which of the following restrictions by Parliament requires Presidential sanction and cannot discriminate between states?",
        "options": ["Parliament can impose any restriction in emergency", "A law under Article 303(1) cannot give advantages to one state over another, except through Article 303(2) with Presidential approval", "State legislatures can override Article 301 restrictions freely", "Only the Supreme Court can authorize trade restrictions"],
        "correct_answer": "A law under Article 303(1) cannot give advantages to one state over another, except through Article 303(2) with Presidential approval",
        "explanation": "Article 303 prohibits Parliament from giving trading preferences to one state over another. Under Article 303(2), Parliament may by law authorize measures giving preferential treatment if Parliament declares it to be expedient in the national interest.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "River water disputes between states, adjudicated by a tribunal under Article 262, can be excluded from the Supreme Court's jurisdiction. This exclusion is decided by:",
        "options": ["The President's proclamation", "An Act of Parliament under Article 262", "The Inter-State Council recommendation", "The SC itself waiving jurisdiction"],
        "correct_answer": "An Act of Parliament under Article 262",
        "explanation": "Article 262(2) explicitly empowers Parliament to provide by law that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any water dispute referred to a tribunal.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Which of the following is NOT an objective of the Inter-State Council as defined under Article 263?",
        "options": ["Inquiring into and advising on inter-state disputes", "Investigating subjects of common interest to Union and states", "Making recommendations for better coordination of policy", "Having final judicial authority over Centre-State disputes"],
        "correct_answer": "Having final judicial authority over Centre-State disputes",
        "explanation": "The Inter-State Council is an advisory and recommendatory body — it has no judicial authority. Courts (especially the SC under Article 131) are the final authority on legal Centre-State disputes.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "The Sarkaria Commission was set up to review:",
        "options": ["Electoral reforms in India", "Internal security administration", "Centre-State relations especially on legislative and financial matters", "Constitutional amendments related to Fundamental Rights"],
        "correct_answer": "Centre-State relations especially on legislative and financial matters",
        "explanation": "The Sarkaria Commission (1983-1988), headed by Justice R.S. Sarkaria, was set up to review the structure of Centre-State relations in India. Its landmark report recommended creation of the Inter-State Council and cautious use of Article 356.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "What is the core principle underlying Article 301 (freedom of trade throughout India)?",
        "options": ["Free markets must be state-controlled", "India shall function as a single economic unit with free movement of goods, services and persons", "Union alone can conduct inter-state trade", "States have absolute control over goods entering their territory"],
        "correct_answer": "India shall function as a single economic unit with free movement of goods, services and persons",
        "explanation": "Article 301 is inspired by the 'freedom of trade' provisions in the Australian constitution and aims to make India a single national market by guaranteeing free movement of trade, commerce, and intercourse throughout the country.",
        "chapter_number": 34,
        "level": 1
    },
    {
        "text": "Which authority can make laws providing for joint sitting (common statute) applicable to multiple states under the entry 'Population and demographics'?",
        "options": ["Parliament, using its concurrent powers", "Parliament may not legislate on purely state matters even if common", "States can enter into inter-state treaties without Parliament", "The Inter-State Council can enact binding legislation"],
        "correct_answer": "Parliament, using its concurrent powers",
        "explanation": "Inter-state coordination of law often occurs through Parliament using Concurrent List powers or through Articles 249/252/253. States can also adopt a common model legislation voluntarily.",
        "chapter_number": 34,
        "level": 1
    },
]
