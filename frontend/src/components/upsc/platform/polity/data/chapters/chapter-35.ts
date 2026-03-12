import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch35-l1-q1",
        "question": "Under which Articles of the Indian Constitution are provisions relating to Subordinate Courts contained?",
        "options": ["Articles 214-231", "Articles 233-237", "Articles 124-147", "Articles 245-263"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 233 to 237 in Part VI of the Constitution deal with the Subordinate Courts, covering appointment, control, and interpretation of 'District Judge' and 'judicial service'."
    },
    {
        "id": "ch35-l1-q2",
        "question": "Article 233 of the Constitution deals with the appointment of District Judges. Who makes this appointment?",
        "options": ["The Chief Justice of the High Court", "The Governor of the State in consultation with the High Court", "The President of India on the advice of the Governor", "The State Public Service Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 233, appointments of District Judges in any state shall be made by the Governor of that State in consultation with the High Court exercising jurisdiction in relation to that state."
    },
    {
        "id": "ch35-l1-q3",
        "question": "A person not already in the service of the Union or of the State can be appointed as a District Judge only if he has been an advocate or pleader for at least:",
        "options": ["5 years", "7 years", "10 years", "3 years"],
        "correctAnswerIndex": 1,
        "explanation": "Article 233(2) provides that a person not already in the service can be appointed as District Judge only if he has been an advocate or pleader for not less than 7 years."
    },
    {
        "id": "ch35-l1-q4",
        "question": "Article 235 vests the control over District Courts and courts subordinate thereto in:",
        "options": ["The Governor of the State", "The High Court", "The Supreme Court", "The State Legislature"],
        "correctAnswerIndex": 1,
        "explanation": "Article 235 provides that the control over district courts and courts subordinate thereto shall be vested in the High Court, including posting, promotions, and leave of judicial officers."
    },
    {
        "id": "ch35-l1-q5",
        "question": "Under Article 236, the term 'District Judge' includes:",
        "options": ["Only the principal civil judge of a district", "Judge of a city civil court, additional district judge, joint district judge, assistant district judge, and chief presidency magistrate", "Only High Court judges posted to districts", "Only sessions judges"],
        "correctAnswerIndex": 1,
        "explanation": "Article 236(a) broadly defines 'District Judge' to include judge of a city civil court, additional district judge, joint district judge, assistant district judge, chief judge of a small cause court, chief presidency magistrate, additional chief presidency magistrate, sessions judge, additional sessions judge, and assistant sessions judge."
    },
    {
        "id": "ch35-l1-q6",
        "question": "The highest civil court in a district is the:",
        "options": ["Court of Sessions", "Court of the District Judge", "Chief Judicial Magistrate Court", "Munsif Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Court of the District Judge is the highest civil court in a district with both original and appellate jurisdiction in civil matters."
    },
    {
        "id": "ch35-l1-q7",
        "question": "The highest criminal court in a district is the:",
        "options": ["Court of the District Judge", "Court of the Chief Judicial Magistrate", "Court of the Sessions Judge", "Court of the Executive Magistrate"],
        "correctAnswerIndex": 2,
        "explanation": "The Sessions Court (Court of the Sessions Judge) is the highest criminal court at the district level, competent to try any offence and pass any sentence including the death penalty."
    },
    {
        "id": "ch35-l1-q8",
        "question": "The Court of Sessions can impose the maximum sentence of:",
        "options": ["Imprisonment up to 7 years", "Imprisonment up to 14 years", "Life imprisonment only", "Death sentence (subject to confirmation by the High Court)"],
        "correctAnswerIndex": 3,
        "explanation": "The Sessions Court can impose any sentence including the death sentence, but a death sentence must be confirmed by the High Court before execution (Section 366 CrPC / Section 394 BNSS)."
    },
    {
        "id": "ch35-l1-q9",
        "question": "The Court of the Chief Judicial Magistrate (CJM) can impose imprisonment up to:",
        "options": ["1 year", "3 years", "7 years", "10 years"],
        "correctAnswerIndex": 2,
        "explanation": "The CJM can impose imprisonment up to 7 years and any amount of fine. The CJM is subordinate to the Sessions Judge in criminal matters."
    },
    {
        "id": "ch35-l1-q10",
        "question": "The Court of a Judicial Magistrate First Class (JMFC) can impose imprisonment up to:",
        "options": ["6 months", "1 year", "3 years", "5 years"],
        "correctAnswerIndex": 2,
        "explanation": "A JMFC can impose imprisonment up to 3 years and fine up to Rs. 10,000. This is the most common trial court for minor criminal offences."
    },
    {
        "id": "ch35-l1-q11",
        "question": "The Court of a Judicial Magistrate Second Class (JMSC) can impose imprisonment up to:",
        "options": ["3 months", "6 months", "1 year", "2 years"],
        "correctAnswerIndex": 2,
        "explanation": "A JMSC can impose imprisonment up to 1 year and fine up to Rs. 5,000."
    },
    {
        "id": "ch35-l1-q12",
        "question": "Additional and Assistant Sessions Judges can impose a maximum sentence of:",
        "options": ["Death sentence", "Life imprisonment", "Imprisonment up to 10 years", "Imprisonment up to 7 years"],
        "correctAnswerIndex": 2,
        "explanation": "Additional and Assistant Sessions Judges cannot impose the death sentence or life imprisonment. Their maximum sentencing power is imprisonment up to 10 years."
    },
    {
        "id": "ch35-l1-q13",
        "question": "The District Judge in most states also functions as the:",
        "options": ["Collector of the district", "Sessions Judge for criminal cases", "Chief Executive Officer", "Advocate General"],
        "correctAnswerIndex": 1,
        "explanation": "In most states, the same person functions as both the District Judge (civil jurisdiction) and the Sessions Judge (criminal jurisdiction), though they are technically separate offices."
    },
    {
        "id": "ch35-l1-q14",
        "question": "Article 234 provides for the recruitment of persons other than district judges to the judicial service. Such appointments are made by:",
        "options": ["The High Court directly", "The Governor in accordance with rules made after consultation with the State PSC and the High Court", "The District Judge", "The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "Article 234 provides that appointments of persons other than District Judges shall be made by the Governor in accordance with rules made by him after consultation with the SPSC and the High Court."
    },
    {
        "id": "ch35-l1-q15",
        "question": "The directive to separate the judiciary from the executive is contained in which Article of the Constitution?",
        "options": ["Article 48", "Article 50", "Article 51", "Article 39"],
        "correctAnswerIndex": 1,
        "explanation": "Article 50 (Directive Principle) directs the State to take steps to separate the judiciary from the executive in the public services of the State."
    },
    {
        "id": "ch35-l1-q16",
        "question": "Which of the following courts handles civil cases of small pecuniary value with simplified procedures?",
        "options": ["Sessions Court", "Court of Small Causes", "High Court", "Gram Nyayalaya"],
        "correctAnswerIndex": 1,
        "explanation": "Courts of Small Causes handle civil suits involving small monetary values with simplified and summary procedures for quick disposal."
    },
    {
        "id": "ch35-l1-q17",
        "question": "The Code of Criminal Procedure (CrPC) 1973, which governs criminal trial procedures in subordinate courts, has been replaced by:",
        "options": ["Indian Penal Code, 2023", "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023", "Bharatiya Nyaya Sanhita (BNS), 2023", "Bharatiya Sakshya Adhiniyam (BSA), 2023"],
        "correctAnswerIndex": 1,
        "explanation": "The CrPC 1973 was replaced by the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023. BNS replaced IPC, and BSA replaced the Indian Evidence Act."
    },
    {
        "id": "ch35-l1-q18",
        "question": "Executive Magistrates are under the control of:",
        "options": ["The High Court", "The State Government (District Magistrate/Collector)", "The Supreme Court", "The Sessions Judge"],
        "correctAnswerIndex": 1,
        "explanation": "Executive Magistrates are under the executive control of the State Government through the District Magistrate, unlike Judicial Magistrates who are under the control of the High Court."
    },
    {
        "id": "ch35-l1-q19",
        "question": "Family Courts in India were established under:",
        "options": ["Hindu Marriage Act, 1955", "Family Courts Act, 1984", "Code of Civil Procedure, 1908", "Special Marriage Act, 1954"],
        "correctAnswerIndex": 1,
        "explanation": "Family Courts were established under the Family Courts Act, 1984 to provide for speedy settlement of family disputes including matrimonial matters, child custody, and maintenance."
    },
    {
        "id": "ch35-l1-q20",
        "question": "Gram Nyayalayas were established under which Act?",
        "options": ["Panchayati Raj Act, 1992", "Gram Nyayalayas Act, 2008", "Legal Services Authorities Act, 1987", "Village Courts Act, 2000"],
        "correctAnswerIndex": 1,
        "explanation": "The Gram Nyayalayas Act, 2008 provides for the establishment of Gram Nyayalayas (village courts) at the grassroot level for providing access to justice at the doorstep."
    },
    {
        "id": "ch35-l1-q21",
        "question": "The presiding officer of a Gram Nyayalaya is called:",
        "options": ["Village Judge", "Nyayadhikari", "Panchayat Adhyaksha", "Gram Sevak"],
        "correctAnswerIndex": 1,
        "explanation": "The presiding officer of a Gram Nyayalaya is called a Nyayadhikari, appointed by the State Government in consultation with the High Court."
    },
    {
        "id": "ch35-l1-q22",
        "question": "The Munsif Court (Civil Judge Junior Division) is:",
        "options": ["A criminal court", "The lowest level civil court at the district level", "An appellate court only", "A revenue court"],
        "correctAnswerIndex": 1,
        "explanation": "The Munsif Court (Civil Judge Junior Division) is the lowest rung of the civil court hierarchy at the district level, handling civil cases within the lowest pecuniary jurisdiction."
    },
    {
        "id": "ch35-l1-q23",
        "question": "The 42nd Amendment Act, 1976 introduced Articles 323A and 323B dealing with:",
        "options": ["Fundamental Duties", "Administrative and Other Tribunals", "Panchayati Raj Institutions", "Emergency Provisions"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV-A (Articles 323A and 323B) was added by the 42nd Amendment to provide for Administrative Tribunals (323A) and Tribunals for Other Matters (323B)."
    },
    {
        "id": "ch35-l1-q24",
        "question": "The National Legal Services Authority (NALSA) was established under:",
        "options": ["Legal Services Authorities Act, 1987", "Constitution (42nd Amendment) Act", "Advocates Act, 1961", "Code of Civil Procedure"],
        "correctAnswerIndex": 0,
        "explanation": "NALSA was constituted under the Legal Services Authorities Act, 1987 to organize legal aid programs, Lok Adalats, and implement policies for providing free legal services to weaker sections."
    },
    {
        "id": "ch35-l1-q25",
        "question": "The District Legal Services Authority (DLSA) is headed by:",
        "options": ["The District Collector", "The District Judge as Chairman", "The Superintendent of Police", "The Advocate General"],
        "correctAnswerIndex": 1,
        "explanation": "The District Judge serves as the Chairman of the District Legal Services Authority by virtue of his office."
    },
    {
        "id": "ch35-l1-q26",
        "question": "Article 237 empowers the Governor to apply provisions relating to District Judges (Articles 233 and 235) to:",
        "options": ["High Court judges posted in districts", "Any class of magistrates in the state", "Revenue officers", "Police officers"],
        "correctAnswerIndex": 1,
        "explanation": "Article 237 provides that the Governor may, by notification, direct that the provisions of Articles 233 and 235 shall apply to any class or classes of magistrates in the state."
    },
    {
        "id": "ch35-l1-q27",
        "question": "The Commercial Courts Act, 2015 was enacted to:",
        "options": ["Replace all subordinate courts", "Provide for establishment of Commercial Courts for speedy adjudication of commercial disputes of specified value", "Create a new Supreme Court bench", "Handle only international trade disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The Commercial Courts Act, 2015 provides for the establishment of Commercial Courts, Commercial Divisions, and Appellate Divisions in High Courts for adjudication of commercial disputes of a specified value."
    },
    {
        "id": "ch35-l1-q28",
        "question": "The e-Courts project in India was launched to:",
        "options": ["Replace judges with AI systems", "Computerize and digitize the functioning of district and subordinate courts", "Create virtual Supreme Courts only", "Abolish paper records in High Courts only"],
        "correctAnswerIndex": 1,
        "explanation": "The e-Courts Mission Mode Project was launched to computerize district and subordinate courts across the country — including digitization of records, case management, and online filing."
    },
    {
        "id": "ch35-l1-q29",
        "question": "In the criminal court hierarchy within a district, the correct descending order of courts is:",
        "options": ["Court of Session → CJM → JMFC → JMSC", "CJM → Court of Session → JMFC → JMSC", "JMFC → JMSC → CJM → Court of Session", "Court of Session → JMFC → CJM → JMSC"],
        "correctAnswerIndex": 0,
        "explanation": "The hierarchy from highest to lowest: Court of Session (highest — can award death penalty) → Chief Judicial Magistrate (up to 7 years) → JMFC (up to 3 years) → JMSC (up to 1 year)."
    },
    {
        "id": "ch35-l1-q30",
        "question": "The process of transferring a criminal case from a Magistrate's Court to the Court of Session for trial is called:",
        "options": ["Committal proceedings", "Transfer petition", "Review application", "Revision petition"],
        "correctAnswerIndex": 0,
        "explanation": "Committal proceedings are the process by which a Magistrate commits (transfers) a case triable exclusively by the Sessions Court to the Court of Session for trial."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch35-l2-q1",
        "question": "Consider the following statements about Article 233:\\n1. District Judges are appointed by the Governor.\\n2. The Governor must consult the High Court before making the appointment.\\n3. The High Court has a veto power over the Governor's appointment decision.\\nWhich of the statements given above is/are correct?",
        "options": ["1 and 2 only", "1 only", "1, 2 and 3", "1 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct (Article 233). Statement 3 is incorrect — the High Court is consulted but does not have a formal veto. However, in practice, the Supreme Court has held that the High Court's recommendation should ordinarily be accepted."
    },
    {
        "id": "ch35-l2-q2",
        "question": "Assertion (A): The subordinate judiciary in India is under the administrative control of the High Court, not the State Government.\\nReason (R): Article 235 vests control over district courts and subordinate courts in the High Court to ensure judicial independence.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct and R explains A. Article 235 deliberately places subordinate courts under the High Court's control (not the executive) to maintain judicial independence and prevent executive interference."
    },
    {
        "id": "ch35-l2-q3",
        "question": "In the case of All India Judges Association v. Union of India (1993), the Supreme Court directed:",
        "options": ["Abolition of all subordinate courts", "Uniform pay scales and improved service conditions for subordinate judiciary across India", "Direct appointment of judges by the President", "Merger of all state judicial services into one All India Judicial Service"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court directed uniform service conditions, better pay scales, and standardized infrastructure for the subordinate judiciary to maintain its independence and attract competent persons."
    },
    {
        "id": "ch35-l2-q4",
        "question": "Article 312 provides for the creation of an 'All India Judicial Service' (AIJS). Which of the following is correct about this proposal?\\n1. It requires a Rajya Sabha resolution supported by two-thirds majority.\\n2. The AIJS, if created, would recruit judges for the subordinate judiciary on an all-India basis.\\n3. The AIJS has already been implemented across all states.\\nSelect the correct answer:",
        "options": ["1 and 2 only", "2 and 3 only", "1 only", "1, 2 and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — the AIJS has not been implemented despite recommendations, due to resistance from states and High Courts over concerns about federalism and linguistic diversity."
    },
    {
        "id": "ch35-l2-q5",
        "question": "The 'control' exercised by the High Court over subordinate courts under Article 235, as interpreted by the Supreme Court, includes:",
        "options": ["Only disciplinary control over judicial officers", "Only administrative matters like leave and transfers", "Both administrative and disciplinary control, but not interference with judicial decisions", "Complete control including overriding judicial orders of subordinate courts"],
        "correctAnswerIndex": 2,
        "explanation": "In the Pradyat Kumar Bose case (1955), the SC held that 'control' under Article 235 includes both administrative and disciplinary control. However, it does not extend to interference with judicial functions — that can only happen through the appellate process."
    },
    {
        "id": "ch35-l2-q6",
        "question": "The difference between Article 227 (superintendence by High Court) and Article 235 (control over subordinate courts) is:",
        "options": ["Article 227 covers administrative and judicial superintendence over all courts and tribunals; Article 235 deals specifically with control over judicial officers of subordinate courts", "They are identical provisions", "Article 235 covers tribunals; Article 227 does not", "Article 227 applies only to criminal courts; Article 235 to civil courts"],
        "correctAnswerIndex": 0,
        "explanation": "Article 227 gives the HC power of superintendence over all courts and tribunals (both administrative and judicial). Article 235 deals specifically with administrative control (posting, promotion, discipline) over subordinate judicial officers."
    },
    {
        "id": "ch35-l2-q7",
        "question": "The Shetty Commission (First National Judicial Pay Commission, 1999) primarily recommended:",
        "options": ["Abolition of subordinate courts", "Better service conditions, uniform pay scales, and infrastructure for the subordinate judiciary", "Merger of High Courts", "Reducing the number of judges in subordinate courts"],
        "correctAnswerIndex": 1,
        "explanation": "Justice K.J. Shetty Commission recommended comprehensive improvements in pay, service conditions, and infrastructure of the subordinate judiciary to make it more effective and independent."
    },
    {
        "id": "ch35-l2-q8",
        "question": "The right to appeal in criminal cases in India is:",
        "options": ["An absolute fundamental right under the Constitution", "A statutory right provided by the CrPC (now BNSS)", "Not available in any case", "Available only to the prosecution, not the accused"],
        "correctAnswerIndex": 1,
        "explanation": "The right to appeal in criminal cases is a statutory right (under CrPC/BNSS), not a constitutional fundamental right. It is available to both the accused and the prosecution under specified conditions."
    },
    {
        "id": "ch35-l2-q9",
        "question": "Which of the following statements about Gram Nyayalayas is/are correct?\\n1. The Nyayadhikari is appointed by the State Government in consultation with the High Court.\\n2. They exercise jurisdiction over both civil and criminal cases of compoundable nature.\\n3. They follow strict rules of evidence as under the Indian Evidence Act.\\nSelect the correct answer:",
        "options": ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — Gram Nyayalayas follow simplified/summary procedures and are NOT strictly bound by the rules of evidence. This is designed to make justice accessible at the village level."
    },
    {
        "id": "ch35-l2-q10",
        "question": "The 'National Judicial Data Grid' (NJDG) provides:",
        "options": ["Only Supreme Court case data", "Real-time data on pending and disposed cases across all courts in India", "Information about judges' salaries only", "Data exclusively for High Courts"],
        "correctAnswerIndex": 1,
        "explanation": "NJDG is an online database providing real-time information about cases instituted, pending, and disposed in district and taluk courts across the country, as part of the e-Courts project."
    },
    {
        "id": "ch35-l2-q11",
        "question": "Article 233A was inserted by the 20th Amendment Act, 1966 to deal with:",
        "options": ["Creation of new subordinate courts", "Validation of appointments of, and judgments delivered by, certain district judges whose appointments were potentially irregular", "Retirement age of subordinate judges", "Salary structure of judicial officers"],
        "correctAnswerIndex": 1,
        "explanation": "Article 233A was added to validate certain appointments and judgments that could have been challenged as irregular under the strict requirements of Article 233."
    },
    {
        "id": "ch35-l2-q12",
        "question": "The role of the Public Prosecutor in the Sessions Court is:",
        "options": ["To defend the accused", "To represent the State/prosecution in criminal cases and assist the court in the administration of justice", "To act as the judge in certain matters", "To handle civil cases exclusively"],
        "correctAnswerIndex": 1,
        "explanation": "The Public Prosecutor represents the State in criminal cases before the Sessions Court. Under Section 24 CrPC (now BNSS), the State Government appoints a Public Prosecutor for every Sessions Court."
    },
    {
        "id": "ch35-l2-q13",
        "question": "The doctrine of 'stare decisis' in the Indian subordinate court system means:",
        "options": ["Every court is free to decide cases without considering any precedent", "Lower courts are bound to follow the decisions of higher courts in the same hierarchy", "Only Supreme Court decisions are binding on anyone", "Higher courts must follow lower court decisions"],
        "correctAnswerIndex": 1,
        "explanation": "Under the doctrine of stare decisis, subordinate courts must follow the decisions of the High Court under whose jurisdiction they fall, and all courts must follow Supreme Court decisions (Article 141)."
    },
    {
        "id": "ch35-l2-q14",
        "question": "Fast Track Courts (FTCs) in India were established based on the recommendation of:",
        "options": ["Sarkaria Commission", "11th Finance Commission", "Law Commission of India", "Planning Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Fast Track Courts were established based on the recommendation of the 11th Finance Commission for speedy disposal of long-pending sessions cases, especially those involving undertrials who had been in jail for extended periods."
    },
    {
        "id": "ch35-l2-q15",
        "question": "Under the Indian Evidence Act (now Bharatiya Sakshya Adhiniyam), which court has the power to record dying declarations?",
        "options": ["Only the Sessions Court", "Any Magistrate, Metropolitan Magistrate, or any person in the presence of a Magistrate", "Only the District Judge", "Only the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "A dying declaration can be recorded by any Magistrate. In practice, it can also be recorded by a doctor, police officer, or even a private person if a Magistrate is not available, though the evidentiary value may differ."
    },
    {
        "id": "ch35-l2-q16",
        "question": "Fast Track Special Courts (FTSCs) are specifically constituted for:",
        "options": ["Revenue disputes", "Speedy trial of cases of rape and offences under the POCSO Act", "International commercial arbitration", "Traffic challan disputes only"],
        "correctAnswerIndex": 1,
        "explanation": "FTSCs were established as a centrally-sponsored scheme for the expeditious trial and disposal of pending cases of rape and offences under the Protection of Children from Sexual Offences (POCSO) Act."
    },
    {
        "id": "ch35-l2-q17",
        "question": "The plea bargaining provisions in India were introduced by:",
        "options": ["The original CrPC 1973", "Criminal Law (Amendment) Act, 2005 which added Chapter XXIA to CrPC", "42nd Constitutional Amendment Act, 1976", "The Indian Evidence Act, 1872"],
        "correctAnswerIndex": 1,
        "explanation": "Plea bargaining was introduced in India by the Criminal Law (Amendment) Act, 2005, inserting Chapter XXIA (Sections 265A-265L) in CrPC. It applies to offences punishable with imprisonment up to 7 years."
    },
    {
        "id": "ch35-l2-q18",
        "question": "The Constitution provides for a unified/integrated judiciary in India. This means:",
        "options": ["All courts are at the same level with equal jurisdiction", "The Supreme Court, High Courts, and Subordinate Courts form a single hierarchy with the SC at the apex, enforcing both Central and State laws", "States have completely independent judicial systems", "Only criminal courts are unified; civil courts are separate"],
        "correctAnswerIndex": 1,
        "explanation": "India has a single integrated judiciary — subordinate courts feed into High Courts which feed into the Supreme Court. All courts enforce both central and state laws, unlike the US which has separate federal and state court systems."
    },
    {
        "id": "ch35-l2-q19",
        "question": "Which body conducts recruitment examinations for Civil Judges (Junior Division) in most states?",
        "options": ["UPSC", "State Public Service Commission or the High Court (varies by state)", "District Judge", "Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "Recruitment of Civil Judges at the Junior Division level is conducted by either the State PSC or the concerned High Court, depending on the rules of the particular state."
    },
    {
        "id": "ch35-l2-q20",
        "question": "The civil court hierarchy within a district (ascending order) is typically:",
        "options": ["District Court → Senior Civil Judge → Junior Civil Judge (Munsif)", "Junior Civil Judge (Munsif) → Senior Civil Judge → District Court", "Sessions Court → CJM → JMFC", "Lok Adalat → District Court → High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The ascending hierarchy is: Junior Civil Judge/Munsif (lowest pecuniary jurisdiction) → Senior Civil Judge/Subordinate Judge → District Judge (highest civil court in district)."
    },
    {
        "id": "ch35-l2-q21",
        "question": "The Malimath Committee (2003) on Reforms of Criminal Justice System recommended:",
        "options": ["Abolition of subordinate courts", "A shift from adversarial to inquisitorial system, increased use of forensic science, establishment of a National Judicial Commission, and victim compensation", "Reducing the number of judges", "Abolishing the appellate system"],
        "correctAnswerIndex": 1,
        "explanation": "The Justice V.S. Malimath Committee (2003) made 158 recommendations for comprehensive reform of the criminal justice system, including procedural changes, victim rights, and institutional reforms."
    },
    {
        "id": "ch35-l2-q22",
        "question": "Which constitutional provision is most directly relevant for ensuring free legal aid in subordinate courts?",
        "options": ["Article 14 (Right to Equality)", "Article 39A (Equal Justice and Free Legal Aid)", "Article 50 (Separation of Judiciary from Executive)", "Article 141 (Law declared by Supreme Court binding on all courts)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 39A (DPSP added by the 42nd Amendment) specifically directs the State to provide free legal aid to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities."
    },
    {
        "id": "ch35-l2-q23",
        "question": "The concept of 'case management' in subordinate courts involves:",
        "options": ["Only administrative record-keeping", "Active judicial management of case progression including setting timelines, identifying issues early, and monitoring hearings to reduce delays", "Transferring all cases to the High Court", "Hiring private firms to manage cases"],
        "correctAnswerIndex": 1,
        "explanation": "Case management involves proactive judicial management — setting timelines, limiting adjournments, identifying issues at the preliminary stage, and monitoring case progression to reduce pendency."
    },
    {
        "id": "ch35-l2-q24",
        "question": "The judge-to-population ratio in India's subordinate courts is approximately:",
        "options": ["50 judges per million population", "Around 20 judges per million population — one of the lowest globally", "100 judges per million population", "200 judges per million population"],
        "correctAnswerIndex": 1,
        "explanation": "India has approximately 20 judges per million population, one of the lowest ratios globally. The Law Commission has repeatedly recommended significantly increasing this ratio to address the massive pendency of cases."
    },
    {
        "id": "ch35-l2-q25",
        "question": "Virtual courts, launched under the e-Courts Phase II project, primarily handle:",
        "options": ["Only Supreme Court cases", "Traffic challan cases and petty offences where personal appearance is not necessary", "Only criminal appeals", "International arbitration"],
        "correctAnswerIndex": 1,
        "explanation": "Virtual courts were launched to handle cases like traffic challans and minor offences where accused can plead guilty and pay fines online without physical appearance, reducing the burden on regular courts."
    },
    {
        "id": "ch35-l2-q26",
        "question": "The power of a High Court to transfer cases from one subordinate court to another within the state is exercised under:",
        "options": ["Article 233 only", "Article 227 (superintendence) and Section 407 CrPC/BNSS (transfer of criminal cases)", "Article 32", "Article 136"],
        "correctAnswerIndex": 1,
        "explanation": "The HC exercises its power of superintendence (Art 227) and statutory provisions (CrPC/BNSS for criminal, CPC for civil) to transfer cases between subordinate courts within the state."
    },
    {
        "id": "ch35-l2-q27",
        "question": "Which of the following statements about Family Courts (under the Family Courts Act, 1984) is/are correct?\\n1. They deal with matrimonial disputes, child custody, and maintenance matters.\\n2. They follow simplified procedures and emphasis on conciliation.\\n3. Lawyers are completely banned from appearing before Family Courts.\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "2 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — lawyers are not completely banned; the court can permit their appearance, though the Act encourages settlement through conciliation proceedings."
    },
    {
        "id": "ch35-l2-q28",
        "question": "The 14th Law Commission Report (1958) was significant for the subordinate judiciary because it recommended:",
        "options": ["Abolition of all subordinate courts", "Comprehensive reforms including increasing the number of judges, improving infrastructure, and ensuring better service conditions", "Direct election of judges by people", "Merging civil and criminal courts into a single court"],
        "correctAnswerIndex": 1,
        "explanation": "The 14th Report laid the foundation for reforming the subordinate judiciary by recommending more judges, better infrastructure, improved service conditions, and procedural reforms."
    },
    {
        "id": "ch35-l2-q29",
        "question": "In the Munsif-Magistrate system prevalent in some states:",
        "options": ["Two different officers handle civil and criminal work at the lowest level", "The same judicial officer serves as both Munsif (civil) and Judicial Magistrate (criminal) at the lowest level", "Munsif handles only revenue cases", "Magistrate handles only executive functions"],
        "correctAnswerIndex": 1,
        "explanation": "In some states, the same judicial officer at the lowest level discharges both civil functions (as Munsif/Civil Judge Junior Division) and criminal functions (as Judicial Magistrate), combining both jurisdictions."
    },
    {
        "id": "ch35-l2-q30",
        "question": "The Mediation Act, 2023 impacts subordinate courts by:",
        "options": ["Replacing subordinate courts with mediation centres", "Providing a statutory framework for mediation as a pre-litigation mechanism and allowing courts to refer disputes to mediation at any stage", "Abolishing all ADR mechanisms", "Making mediation mandatory for all criminal cases"],
        "correctAnswerIndex": 1,
        "explanation": "The Mediation Act, 2023 provides statutory recognition to mediation, encourages pre-litigation mediation in certain disputes, and empowers courts (including subordinate courts) to refer suitable disputes to mediation."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch35-l3-q1",
        "question": "Consider the following articles:\\n1. Article 233 — Appointment of District Judges\\n2. Article 234 — Recruitment of other judicial officers\\n3. Article 235 — Control over subordinate courts by the High Court\\n4. Article 236 — Interpretation of 'District Judge' and 'judicial service'\\n5. Article 237 — Application to magistrates\\nWhich of the above are correctly matched?",
        "options": ["1, 2 and 3 only", "1, 3 and 5 only", "1, 2, 3, 4 and 5", "2, 4 and 5 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five are correctly matched. Articles 233-237 form a complete framework for the subordinate judiciary covering appointment (233, 234), control (235), definitions (236), and extension to magistrates (237)."
    },
    {
        "id": "ch35-l3-q2",
        "question": "Statement I: The 'control' under Article 235 includes the power of the High Court to transfer a District Judge from one district to another.\\nStatement II: The Governor can dismiss a District Judge without consulting the High Court.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statement I is correct — transfer is part of administrative control under Article 235. Statement II is incorrect — the Governor cannot take disciplinary action against a District Judge without consulting the High Court, as this would violate Article 235."
    },
    {
        "id": "ch35-l3-q3",
        "question": "In the Pradyat Kumar Bose v. The Chief Justice of the Calcutta High Court case, the Supreme Court held that 'control' under Article 235:",
        "options": ["Is limited to disciplinary matters only", "Includes both administrative and disciplinary control but does not extend to judicial review of subordinate court decisions", "Gives the High Court power to overturn judicial decisions of subordinate courts through administrative orders", "Is merely advisory in nature"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that 'control' under Article 235 is comprehensive — covering posting, promotion, leave, discipline — but it cannot be used to interfere with the judicial functions of subordinate courts. Judicial correction happens only through appeals."
    },
    {
        "id": "ch35-l3-q4",
        "question": "Assertion (A): The subordinate judiciary handles the bulk of litigation in India.\\nReason (R): Over 80% of the total pending cases across all Indian courts are in the subordinate/district courts.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct and R explains A. The subordinate courts are the primary courts of original jurisdiction (both civil and criminal), and the vast majority (over 4 crore) of pending cases are in these courts."
    },
    {
        "id": "ch35-l3-q5",
        "question": "Which of the following is a constitutional provision and NOT merely a statutory arrangement?\\n1. Establishment of subordinate courts and appointment of District Judges (Articles 233-237)\\n2. Provision for All India Judicial Service (Article 312)\\n3. Establishment of Lok Adalats\\n4. Establishment of Family Courts\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "1, 2, 3 and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Only items 1 and 2 are constitutional provisions. Lok Adalats are statutory (LSAA, 1987) and Family Courts are statutory (Family Courts Act, 1984), not constitutionally established."
    },
    {
        "id": "ch35-l3-q6",
        "question": "Consider the following about the sentencing powers in the criminal court hierarchy:\\n1. Sessions Court — Can award death sentence (subject to HC confirmation)\\n2. Additional Sessions Judge — Can award life imprisonment\\n3. CJM — Can award imprisonment up to 7 years\\n4. JMFC — Can award imprisonment up to 3 years\\nWhich of the above are correct?",
        "options": ["1, 3 and 4 only", "All four", "1, 2, 3 and 4", "1 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 3, and 4 are correct. Statement 2 is INCORRECT — an Additional Sessions Judge can award imprisonment up to 10 years only, NOT life imprisonment. Only the Sessions Judge can award life imprisonment or death sentence."
    },
    {
        "id": "ch35-l3-q7",
        "question": "In the Second Judges Case (Supreme Court Advocates-on-Record Association v. Union of India, 1993), the implications for the subordinate judiciary were:",
        "options": ["The executive was given complete control over subordinate judicial appointments", "The primacy of the judiciary (High Court collegium) in appointments and transfers of subordinate judicial officers was reinforced", "The subordinate judiciary was placed under UPSC", "All district judges were to be appointed by the President"],
        "correctAnswerIndex": 1,
        "explanation": "The Second Judges Case reinforced the principle that the judiciary (HC) has primacy in the matter of appointments and transfers. For subordinate judiciary, it strengthened the High Court's role under Articles 233-235."
    },
    {
        "id": "ch35-l3-q8",
        "question": "The concept of a 'unified judiciary' in India, as opposed to the American dual court system, means:",
        "options": ["India has only one court — the Supreme Court", "Subordinate courts, High Courts, and the Supreme Court form a single hierarchical system enforcing both central and state laws, unlike the US which has separate federal and state courts", "States cannot have their own courts", "All cases must be filed in the Supreme Court first"],
        "correctAnswerIndex": 1,
        "explanation": "India's unified judiciary means there is a single hierarchy of courts from village level to the Supreme Court, enforcing all laws (Union and State). The US has parallel federal and state court systems operating independently."
    },
    {
        "id": "ch35-l3-q9",
        "question": "The National Mission for Justice Delivery and Legal Reforms aims to:",
        "options": ["Create a new Constitution for the judiciary", "Reduce delays, reduce case pendency, and improve access to justice through institutional reforms, policy changes, and technology adoption in subordinate courts", "Abolish appellate courts", "Replace subordinate courts with arbitration only"],
        "correctAnswerIndex": 1,
        "explanation": "The National Mission targets reducing pendency, improving infrastructure, filling judicial vacancies, adopting technology, and implementing procedural reforms across the judicial system, especially at subordinate court level."
    },
    {
        "id": "ch35-l3-q10",
        "question": "Statement I: Article 235 ensures independence of subordinate judiciary from executive interference by placing it under the High Court's control.\\nStatement II: Subordinate courts are funded entirely by the Central Government.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statement I is correct — Article 235 is a crucial safeguard for judicial independence. Statement II is incorrect — subordinate courts are primarily funded by State Governments, though centrally sponsored schemes (like NJDG, e-Courts) supplement funding."
    },
    {
        "id": "ch35-l3-q11",
        "question": "Consider the following chronological sequence of legislation affecting subordinate courts:\\n1. Family Courts Act, 1984\\n2. Legal Services Authorities Act, 1987\\n3. Gram Nyayalayas Act, 2008\\n4. Commercial Courts Act, 2015\\n5. Mediation Act, 2023\\nWhich of the following represents the correct chronological order?",
        "options": ["1 → 2 → 3 → 4 → 5", "2 → 1 → 3 → 4 → 5", "3 → 4 → 1 → 2 → 5", "1 → 3 → 2 → 4 → 5"],
        "correctAnswerIndex": 0,
        "explanation": "The correct chronological order is: Family Courts Act (1984) → LSAA (1987) → Gram Nyayalayas Act (2008) → Commercial Courts Act (2015) → Mediation Act (2023)."
    },
    {
        "id": "ch35-l3-q12",
        "question": "In the context of the e-Courts project, the integration of Artificial Intelligence (AI) in subordinate courts includes:",
        "options": ["AI replacing judges completely", "SUPACE (Supreme Court Portal for Assistance in Court Efficiency) and AI tools for case categorization, translation, and transcription to assist judicial officers", "Using AI only for administrative tasks like salary processing", "Banning all technology from courtrooms"],
        "correctAnswerIndex": 1,
        "explanation": "AI integration includes SUPACE and various AI-powered tools for case management, language translation, transcription, and research assistance — as decision-support tools for judicial officers, not as replacements."
    },
    {
        "id": "ch35-l3-q13",
        "question": "Which of the following correctly describes Article 237?",
        "options": ["It deals with removal of judges from subordinate courts", "It empowers the Governor to extend the provisions of Articles 233 and 235 (appointment and control) to any class of magistrates by notification", "It creates the All India Judicial Service", "It provides for appeals from subordinate courts to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 237 provides that the Governor may, by public notification, direct that the provisions relating to District Judges and High Court control shall apply to any class or classes of magistrates in the state."
    },
    {
        "id": "ch35-l3-q14",
        "question": "The Arrears Committee (Justice Malimath Committee, 1990) primarily recommended:",
        "options": ["Reducing the working days of courts", "Increasing the number of judges and supporting staff, establishing evening courts and morning courts, simplifying procedures, and setting time limits for disposal of cases", "Abolishing appeals in all cases", "Transferring all cases to High Courts directly"],
        "correctAnswerIndex": 1,
        "explanation": "The committee recommended expanding judicial capacity, extending working hours, simplifying procedures, and setting time limits — a comprehensive approach to reducing arrears in subordinate courts."
    },
    {
        "id": "ch35-l3-q15",
        "question": "Assertion (A): The High Court under Article 227 has superintendence over subordinate courts and tribunals.\\nReason (R): This superintendence power is both judicial and administrative, and it extends to all courts and tribunals throughout the territory of the state.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. Article 227 gives the HC power of superintendence over all courts and tribunals (except military tribunals) throughout the state, covering both administrative and judicial matters."
    },
    {
        "id": "ch35-l3-q16",
        "question": "Consider the following reforms in the subordinate judiciary:\\n1. e-Courts Phase I (2007) — Computerization of courts\\n2. e-Courts Phase II (2015) — Virtual courts, NJDG, e-filing\\n3. e-Courts Phase III (2023) — Full digitization, AI integration\\nWhich of the above correctly describe the e-Courts project phases?",
        "options": ["1 and 2 only", "All three", "1 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three phases are correctly described. Phase I focused on basic computerization, Phase II on networking, virtual courts, and NJDG, and Phase III on full digital transformation with AI integration."
    },
    {
        "id": "ch35-l3-q17",
        "question": "The concept of 'cadre restructuring' in the subordinate judiciary refers to:",
        "options": ["Removing all existing judges", "Reorganizing the hierarchy and number of posts at various levels to improve career progression, attract talent, and enhance efficiency of the subordinate judicial system", "Converting civil courts to criminal courts", "Abolishing district courts"],
        "correctAnswerIndex": 1,
        "explanation": "Cadre restructuring involves reorganizing the number and levels of judicial posts to create better career progression, fill vacancies, and improve the overall effectiveness of the subordinate judiciary."
    },
    {
        "id": "ch35-l3-q18",
        "question": "Which of the following types of courts are NOT classified as 'subordinate courts' under the Constitution?\\n1. High Courts\\n2. Tribunals established under Article 323A\\n3. District Courts\\n4. Revenue Courts presided over by Collectors\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 4", "1 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "High Courts are superior courts, not subordinate courts. Tribunals under 323A are separate from the regular court hierarchy. Revenue Courts are part of the executive, not the regular judicial hierarchy under Article 235."
    },
    {
        "id": "ch35-l3-q19",
        "question": "The Hussainara Khatoon v. State of Bihar (1979) case had significant implications for subordinate courts because the Supreme Court:",
        "options": ["Abolished subordinate courts in Bihar", "Held that 'right to speedy trial' is a fundamental right under Article 21, and directed release of undertrials who had been incarcerated for periods exceeding the maximum sentence for their alleged offences", "Increased the number of judges in Bihar", "Transferred all Bihar cases to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark case exposed the plight of undertrial prisoners languishing in jails longer than the maximum sentence possible. The SC declared speedy trial as a fundamental right, directly impacting how subordinate courts handle their dockets."
    },
    {
        "id": "ch35-l3-q20",
        "question": "Assertion (A): Despite the constitutional mandate under Article 50 to separate the judiciary from the executive, complete separation has not been achieved in all states.\\nReason (R): In some rural areas, executive magistrates (who are part of the executive branch and not under High Court control) still exercise limited judicial functions for maintaining public order.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. While judicial magistrates have been separated from the executive in most states, executive magistrates (SDMs, Collectors) still exercise quasi-judicial functions like preventive detention orders under CrPC/BNSS."
    },
    {
        "id": "ch35-l3-q21",
        "question": "In the context of judicial reforms, the '120th Law Commission Report' specifically dealt with:",
        "options": ["Marital laws", "Manpower planning for the judiciary, recommending a substantial increase in judicial strength to clear pendency", "Election reform", "Police reform"],
        "correctAnswerIndex": 1,
        "explanation": "The 120th Law Commission Report addressed manpower planning for the judiciary, recommending an increase in the judge-to-population ratio from approximately 10 per million to 50 per million to address the massive backlog."
    },
    {
        "id": "ch35-l3-q22",
        "question": "Consider the challenges facing the Indian subordinate judiciary:\\n1. High vacancy of judicial positions (over 20% in many states)\\n2. Inadequate infrastructure and courtrooms\\n3. Massive pendency of cases (over 4 crore)\\n4. Low judge-to-population ratio\\nWhich of the above are correctly identified challenges?",
        "options": ["1 and 3 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are well-documented challenges facing the subordinate judiciary. The Supreme Court, Law Commissions, and various committees have repeatedly highlighted the need to address all these issues."
    },
    {
        "id": "ch35-l3-q23",
        "question": "The distinction between 'Judicial Magistrates' and 'Executive Magistrates' under the CrPC/BNSS is significant because:",
        "options": ["They are the same officers with identical functions", "Judicial Magistrates are under the control of the High Court and try criminal cases, while Executive Magistrates are under the State Government and perform executive functions like maintaining public order", "Executive Magistrates can try all criminal cases", "Judicial Magistrates cannot hear any criminal case"],
        "correctAnswerIndex": 1,
        "explanation": "This distinction is the practical implementation of Article 50 (separation of judiciary from executive). Judicial Magistrates (under HC) perform judicial functions; Executive Magistrates (under State Government) handle preventive actions, public order, etc."
    },
    {
        "id": "ch35-l3-q24",
        "question": "In Malik Mazhar Sultan v. U.P. Public Service Commission (2006), the Supreme Court held regarding recruitment to subordinate judiciary:",
        "options": ["UPSC should conduct all judicial recruitment examinations", "The selection process must be fair, transparent, merit-based, and must not suffer from any arbitrariness, and the High Court and State PSC must work in tandem", "District Judges should recruit their own staff", "Only advocates with 15 years of experience should be recruited"],
        "correctAnswerIndex": 1,
        "explanation": "The SC emphasized that recruitment to the subordinate judiciary must be merit-based, fair, and transparent, with proper coordination between the High Court and State PSC as envisaged under Article 234."
    },
    {
        "id": "ch35-l3-q25",
        "question": "The Supreme Court, in various judgments, has expanded the definition of 'control' under Article 235 to include all of the following EXCEPT:",
        "options": ["Posting and transfer of judicial officers", "Disciplinary proceedings against judicial officers", "Inspection and annual confidential reports of judicial officers", "Power to overturn the judicial decisions of subordinate courts through administrative orders"],
        "correctAnswerIndex": 3,
        "explanation": "Control under Article 235 covers posting, transfer, discipline, inspections, and ACRs. However, it does NOT include the power to overturn judicial decisions through administrative mechanism — that can only happen through the appellate process."
    },
    {
        "id": "ch35-l3-q26",
        "question": "Consider the following statements about the Gram Nyayalayas Act, 2008:\\n1. Gram Nyayalayas are courts of record.\\n2. They can impose imprisonment up to 1 year for criminal offences.\\n3. Appeals from Gram Nyayalayas lie to the District Court.\\n4. Very few states have implemented them despite the 2008 Act.\\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4", "2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct. Gram Nyayalayas are courts of record, can impose up to 1 year imprisonment, appeals go to District Court, and implementation has been very limited — only a handful of states have established them despite the Act being over 15 years old."
    },
    {
        "id": "ch35-l3-q27",
        "question": "The relationship between the doctrine of separation of powers and the subordinate judiciary in India can be described as:",
        "options": ["Complete separation — the judiciary is entirely independent of the executive at all levels", "Imperfect separation — while judicial magistrates are under the High Court, executive magistrates exercising quasi-judicial functions remain under the state government, and the executive (Governor) plays a role in judicial appointments", "No separation at all — the executive controls all courts", "Separation exists only at the Supreme Court level"],
        "correctAnswerIndex": 1,
        "explanation": "The separation is imperfect at the subordinate level — while Article 50 mandates separation, executive magistrates still perform quasi-judicial functions, and the executive (Governor) is involved in judicial appointments under Article 233 (though in consultation with the HC)."
    },
    {
        "id": "ch35-l3-q28",
        "question": "In the landmark case of State of Bihar v. Bihar Distillery Ltd. (1997), the Supreme Court emphasized regarding subordinate courts that:",
        "options": ["Subordinate courts can ignore High Court precedents", "The High Court's control under Article 235 is not merely administrative but also ensures maintenance of standards and discipline in the subordinate judiciary", "Only the Supreme Court has control over subordinate courts", "Revenue courts are equivalent to civil courts"],
        "correctAnswerIndex": 1,
        "explanation": "The SC reaffirmed that Article 235 control is comprehensive — meant to ensure standards, efficiency, and discipline in the entire subordinate judicial system to maintain public confidence in the administration of justice."
    },
    {
        "id": "ch35-l3-q29",
        "question": "The e-Committee of the Supreme Court of India, chaired initially by Justice Dr. Gyansudha Misra, has been instrumental in:",
        "options": ["Abolishing paper courts", "Formulating the National Policy and Action Plan for implementing ICT in the Indian Judiciary, leading to the e-Courts project", "Replacing all judges with AI", "Only digitizing Supreme Court records"],
        "correctAnswerIndex": 1,
        "explanation": "The e-Committee has been the driving force behind the e-Courts project — formulating policy, overseeing implementation, and guiding the digital transformation of district and subordinate courts across India."
    },
    {
        "id": "ch35-l3-q30",
        "question": "Consider the following statement: 'The subordinate judiciary is the backbone of the Indian judicial system.' This is validated by:\\n1. Over 80% of cases originate and are disposed at the subordinate court level.\\n2. Subordinate courts are the courts of first contact for the common citizen.\\n3. The quality of subordinate courts directly impacts public trust in the rule of law.\\n4. Supreme Court and High Court judgments are meaningless without proper enforcement at the subordinate level.\\nWhich of the above statements validate the claim?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "3 and 4 only", "1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four statements validate why the subordinate judiciary is the backbone of the system. The effectiveness of the entire judicial system depends fundamentally on the capacity, quality, and efficiency of subordinate courts."
    }
];

export const CHAPTER_35_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
