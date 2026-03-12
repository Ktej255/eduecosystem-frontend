import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch26-l1-q1",
        "question": "Which articles in Part V of the Constitution specifically deal with the Supreme Court?",
        "options": ["Articles 52 to 78","Articles 124 to 147","Articles 148 to 151","Articles 214 to 231"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 124 to 147 in Part V of the Constitution deal with the organisation, independence, jurisdiction, powers, procedures and so on of the Supreme Court."
    },
    {
        "id": "ch26-l1-q2",
        "question": "When was the Supreme Court of India inaugurated?",
        "options": ["August 15, 1947","November 26, 1949","January 26, 1950","January 28, 1950"],
        "correctAnswerIndex": 3,
        "explanation": "The Supreme Court of India was inaugurated on January 28, 1950."
    },
    {
        "id": "ch26-l1-q3",
        "question": "Which pre-independence judicial body did the Supreme Court of India succeed?",
        "options": ["The High Court of Calcutta","The Privy Council","The Federal Court of India","The Crown Court"],
        "correctAnswerIndex": 2,
        "explanation": "It succeeded the Federal Court of India, established under the Government of India Act of 1935."
    },
    {
        "id": "ch26-l1-q4",
        "question": "Who is authorized by the Constitution to regulate the strength (number of judges) of the Supreme Court?",
        "options": ["The President of India","The Chief Justice of India","The Parliament","The Union Cabinet"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament is authorised to regulate the strength of the Supreme Court."
    },
    {
        "id": "ch26-l1-q5",
        "question": "Who appoints the judges of the Supreme Court?",
        "options": ["The Chief Justice of India","The Prime Minister","The Law Minister","The President"],
        "correctAnswerIndex": 3,
        "explanation": "The judges of the Supreme Court are appointed by the President."
    },
    {
        "id": "ch26-l1-q6",
        "question": "According to the",
        "options": ["Two","Three","Four","Five"],
        "correctAnswerIndex": 2,
        "explanation": "The Chief Justice of India should consult a collegium of four senior-most judges of the Supreme Court."
    },
    {
        "id": "ch26-l1-q7",
        "question": "Which Constitutional Amendment Act attempted to replace the Collegium System with the National Judicial Appointments Commission (NJAC)?",
        "options": ["97th Amendment Act","99th Amendment Act","100th Amendment Act","101st Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 99th Constitutional Amendment Act of 2014 and the National Judicial Appointments Commission Act of 2014 replaced the collegium system of appointing judges to the Supreme Court and High Courts with a new body called the National Judicial Appointments Commission (NJAC)."
    },
    {
        "id": "ch26-l1-q8",
        "question": "In which year did the Supreme Court declare the 99th Constitutional Amendment Act (NJAC) unconstitutional and void?",
        "options": ["2014","2015","2016","2017"],
        "correctAnswerIndex": 1,
        "explanation": "In 2015, the Supreme Court declared both the 99th Constitutional Amendment as well as the NJAC Act as unconstitutional and void."
    },
    {
        "id": "ch26-l1-q9",
        "question": "To be appointed as a judge of the Supreme Court, a person must have been a judge of a High Court (or High Courts in succession) for at least:",
        "options": ["3 years","5 years","7 years","10 years"],
        "correctAnswerIndex": 1,
        "explanation": "He should have been a judge of a High Court (or high courts in succession) for five years."
    },
    {
        "id": "ch26-l1-q10",
        "question": "To be appointed as a judge of the Supreme Court based on advocacy, a person must have been an advocate of a High Court for at least:",
        "options": ["5 years","10 years","15 years","20 years"],
        "correctAnswerIndex": 1,
        "explanation": "He should have been an advocate of a High Court (or High Courts in succession) for ten years."
    },
    {
        "id": "ch26-l1-q11",
        "question": "A distinguished jurist can be appointed as a Judge of the Supreme Court if they hold that distinction in the opinion of the:",
        "options": ["Chief Justice of India","Parliament","President","Bar Council of India"],
        "correctAnswerIndex": 2,
        "explanation": "He should be a distinguished jurist in the opinion of the president."
    },
    {
        "id": "ch26-l1-q12",
        "question": "Does the Constitution prescribe a minimum age for appointment as a judge of the Supreme Court?",
        "options": ["Yes, 35 years.","Yes, 45 years.","Yes, 50 years.","No, the Constitution has not prescribed a minimum age."],
        "correctAnswerIndex": 3,
        "explanation": "From the above, it is clear that the Constitution has not prescribed a minimum age for appointment as a judge of the Supreme Court."
    },
    {
        "id": "ch26-l1-q13",
        "question": "Before whom does a person appointed as a judge of the Supreme Court make and subscribe an oath or affirmation?",
        "options": ["The Chief Justice of India","The Prime Minister","The President, or some person appointed by him for this purpose","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "A person appointed as a judge of the Supreme Court, before entering upon his office, has to make and subscribe an oath or affirmation before the President, or some person appointed by him for this purpose."
    },
    {
        "id": "ch26-l1-q14",
        "question": "At what age does a Judge of the Supreme Court retire?",
        "options": ["60 years","62 years","65 years","70 years"],
        "correctAnswerIndex": 2,
        "explanation": "He holds office until he attains the age of 65 years."
    },
    {
        "id": "ch26-l1-q15",
        "question": "To whom does a Judge of the Supreme Court write to resign from his office?",
        "options": ["The Parliament","The Chief Justice of India","The Law Minister","The President"],
        "correctAnswerIndex": 3,
        "explanation": "He can resign his office by writing to the president."
    },
    {
        "id": "ch26-l1-q16",
        "question": "Who has the power to issue the formal order to remove a Judge of the Supreme Court?",
        "options": ["The Parliament","The Chief Justice of India","The President","The Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "A judge of the Supreme Court can be removed from his Office by an order of the president."
    },
    {
        "id": "ch26-l1-q17",
        "question": "What are the two grounds mentioned in the Constitution for the removal of a Supreme Court judge?",
        "options": ["Violation of the Constitution and Corruption","Proved misbehaviour or incapacity","Insolvency and Moral turpitude","Treason and Bribery"],
        "correctAnswerIndex": 1,
        "explanation": "The grounds of removal are two—proved misbehaviour or incapacity."
    },
    {
        "id": "ch26-l1-q18",
        "question": "Which Act regulates the procedure relating to the removal of a judge of the Supreme Court by the process of impeachment?",
        "options": ["The Supreme Court Rules, 1966","The Constitution (Amendment) Act, 1971","The Judges (Inquiry) Act, 1968","The Representation of the People Act, 1951"],
        "correctAnswerIndex": 2,
        "explanation": "The Judges (Inquiry) Act (1968) regulates the procedure relating to the removal of a judge of the Supreme Court by the process of impeachment."
    },
    {
        "id": "ch26-l1-q19",
        "question": "To initiate the removal process under the Judges (Inquiry) Act, a removal motion in the Lok Sabha must be signed by at least how many members?",
        "options": ["50 members","100 members","150 members","200 members"],
        "correctAnswerIndex": 1,
        "explanation": "A removal motion signed by 100 members (in the case of Lok Sabha) or 50 members (in the case of Rajya Sabha) is to be given to the Speaker/Chairman."
    },
    {
        "id": "ch26-l1-q20",
        "question": "Who determines the salaries, allowances, privileges, leave, and pension of the Judges of the Supreme Court?",
        "options": ["The President","The Finance Commission","The Parliament","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "The salaries, allowances, privileges, leave and pension of the judges of the Supreme Court are determined from time to time by the Parliament."
    },
    {
        "id": "ch26-l1-q21",
        "question": "Can the salaries and allowances of Supreme Court judges be altered to their disadvantage after their appointment?",
        "options": ["Yes, by a simple majority in Parliament.","Yes, immediately after an election.","No, except during a National Emergency.","No, except during a Financial Emergency."],
        "correctAnswerIndex": 3,
        "explanation": "They cannot be varied to their disadvantage after their appointment except during a financial emergency."
    },
    {
        "id": "ch26-l1-q22",
        "question": "Who can appoint a judge of the Supreme Court as an Acting Chief Justice of India when the office of Chief Justice is vacant?",
        "options": ["The outgoing Chief Justice of India","The Parliament","The President","The senior-most judge automatically takes over without appointment"],
        "correctAnswerIndex": 2,
        "explanation": "The President can appoint a judge of the Supreme Court as an acting Chief Justice of India when... the office of Chief Justice of India is vacant."
    },
    {
        "id": "ch26-l1-q23",
        "question": "When there is a lack of quorum of permanent judges, who can appoint a Judge of a High Court as an ad hoc judge of the Supreme Court?",
        "options": ["The President","The Chief Justice of India (with previous consent of the President)","The Parliament","The Chief Justice of the concerned High Court directly"],
        "correctAnswerIndex": 1,
        "explanation": "The Chief Justice of India can appoint a judge of a High Court as an ad hoc judge of the Supreme Court... He can do so only after consultation with the chief justice of the High Court concerned and with the previous consent of the president."
    },
    {
        "id": "ch26-l1-q24",
        "question": "A retired judge acting as a judge of the Supreme Court is entitled to such allowances as determined by the:",
        "options": ["President","Parliament","Chief Justice of India","Consolidated Fund of India directly"],
        "correctAnswerIndex": 0,
        "explanation": "He is entitled to such allowances as the president may determine."
    },
    {
        "id": "ch26-l1-q25",
        "question": "Which city is declared by the Constitution as the seat of the Supreme Court?",
        "options": ["Mumbai","Kolkata","Delhi","Chennai"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution declares Delhi as the seat of the Supreme Court."
    },
    {
        "id": "ch26-l1-q26",
        "question": "Can the Chief Justice of India appoint a place other than Delhi as the seat of the Supreme Court?",
        "options": ["No, Delhi is the only constitutionally permitted seat.","Yes, independently without consulting anyone.","Yes, but only with the approval of the Parliament.","Yes, but only with the approval of the President."],
        "correctAnswerIndex": 3,
        "explanation": "But, it also authorises the chief justice of India to appoint other place or places as seat of the Supreme Court. He can take decision in this regard only with the approval of the President."
    },
    {
        "id": "ch26-l1-q27",
        "question": "Who approves the rules made by the Supreme Court for regulating the general practice and procedure of the Court?",
        "options": ["The Parliament","The Law Minister","The President","They do not require approval."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court can, with the approval of the president, make rules for regulating generally the practice and procedure of the Court."
    },
    {
        "id": "ch26-l1-q28",
        "question": "The Constitutional cases or references made by the President under Article 143 are decided by a Bench consisting of at least how many judges?",
        "options": ["Three","Five","Seven","Nine"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitutional cases or references made by the President under Article 143 are decided by a Bench consisting of at least five judges."
    },
    {
        "id": "ch26-l1-q29",
        "question": "What type of bench usually decides",
        "options": ["A Single-Judge Bench","A Division Bench of not less than three judges","A Division Bench of not less than two judges","A Full Court Bench"],
        "correctAnswerIndex": 2,
        "explanation": "All other cases are usually decided by a bench consisting of not less than two judges."
    },
    {
        "id": "ch26-l1-q30",
        "question": "Are the judgments of the Supreme Court delivered by open court?",
        "options": ["Yes, all judgments are delivered in open court.","No, they are always delivered in closed chambers.","Only judgments regarding the President are open.","Only constitutional judgments are open."],
        "correctAnswerIndex": 0,
        "explanation": "The judgments are delivered by the open court."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch26-l2-q1",
        "question": "Under its",
        "options": ["A dispute between the Central Government and the Election Commission of India.","A dispute between the Government of Karnataka and the Government of Tamil Nadu regarding the sharing of Cauvery river water.","A dispute between the Government of India and the State of West Bengal regarding the constitutional validity of the Citizenship Amendment Act.","A dispute regarding the election of the President of India."],
        "correctAnswerIndex": 2,
        "explanation": "Article 131 deals strictly with disputes involving a question of law or fact on which the existence or extent of a"
    },
    {
        "id": "ch26-l2-q2",
        "question": "Consider the limitations on the Supreme Court",
        "options": ["Because pre-Constitution treaties were drafted in English, creating interpretation issues.","Because such disputes fall under the exclusive jurisdiction of the International Court of Justice.","To prevent the newly formed Republic from being legally paralyzed by hundreds of disputes regarding the complex integration agreements (Instrument of Accession) signed with Princely States prior to 1950, treating them as","rather than purely","matters.","Because pre-Constitution laws are inherently void."],
        "correctAnswerIndex": 2,
        "explanation": "Sardar Patel integrated over 500 princely states using various covenants and agreements. The framers realized that if these former rulers could drag the Union to the Supreme Court arguing breach of these pre-constitution political treaties, the new nation would be bogged down in endless litigation. Therefore, Article 131 explicitly excluded pre-constitution treaties from its ambit."
    },
    {
        "id": "ch26-l2-q3",
        "question": "Analyze the",
        "options": ["The Supreme Court","The Supreme Court","and for any other purpose","They are identical in scope, forming concurrent jurisdiction.","The Supreme Court can only issue writs against the Central Government, while High Courts can issue them against State Governments."],
        "correctAnswerIndex": 1,
        "explanation": "This is a frequent point of confusion. The SC is the apex court geographically, but textually, Article 32 is exclusively a remedy for the violation of Part III (Fundamental Rights). You cannot approach the SC under Art 32 for a simple breach of contract or a statutory right. Article 226 gives HCs the power to issue writs for FRs *plus*"
    },
    {
        "id": "ch26-l2-q4",
        "question": "In the context of",
        "options": ["When the President asks a question of law or fact of profound","(e.g., the Ayodhya reference).","When the President refers a dispute arising out of a pre-constitution treaty, agreement, or covenant.","The Supreme Court is completely bound to give advice on ALL references made by the President.","The Supreme Court is never bound; giving advice is always discretionary."],
        "correctAnswerIndex": 1,
        "explanation": "Art 143 has two parts: 143(1) for matters of public importance, where the SC *may* refuse to answer (as it did in the 1993 Ayodhya reference). But under 143(2), regarding disputes arising out of pre-constitution treaties (which are excluded from Original Jurisdiction under Art 131), the President *can* ask for an opinion, and the SC *must* give it."
    },
    {
        "id": "ch26-l2-q5",
        "question": "How does the Supreme Court",
        "options": ["It restricts the SC to only hearing appeals regarding death sentences.","It means the SC can only hear appeals filed by the Government.","It transforms the SC","right of the appellant","privilege granted by the Court","It means only cases involving foreign nationals can be appealed."],
        "correctAnswerIndex": 2,
        "explanation": "Usually, you have a"
    },
    {
        "id": "ch26-l2-q6",
        "question": "Assertion (A): The salaries and administrative expenses of the Supreme Court are",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion A is true; this ensures financial independence. However, Reason R is false. While"
    },
    {
        "id": "ch26-l2-q7",
        "question": "Regarding",
        "options": ["Civil contempt involves politicians; criminal contempt involves ordinary citizens.","Civil contempt is merely the willful disobedience of a court order (ignoring a decree), whereas criminal contempt involves actions or publications that scandalize the court, lower its authority, or actively interfere with the administration of justice.","Civil contempt results in fines; criminal contempt results only in imprisonment.","Civil contempt cases are heard by High Courts; criminal contempt by the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "If a court orders a person to vacate a house and they don"
    },
    {
        "id": "ch26-l2-q8",
        "question": "The Constitution provides that a Judge of the Supreme Court can only be removed on the grounds of",
        "options": ["It means the President must personally witness the misbehaviour.","It mandates that the","must be established through a quasi-judicial investigation by a specialized independent three-member committee (consisting of Supreme Court/High Court judges and a jurist) BEFORE Parliament can even debate the motion, preventing purely political impeachments based on hearsay.","It means the judge must confess to the crime before being removed.","It requires the Supreme Court itself to vote on the removal."],
        "correctAnswerIndex": 1,
        "explanation": "In a highly polarized parliament, politicians might try to impeach a judge simply because they gave an unfavorable ruling. The word"
    },
    {
        "id": "ch26-l2-q9",
        "question": "Article 141 states that",
        "options": ["The Supreme Court is permanently bound by its own previous decisions and cannot reverse them.","The phrase","technically includes the Supreme Court, making its precedents absolutely rigid.","The Supreme Court is the ONLY court in India not bound by its own decisions. It has the power to overrule its previous judgments to correct errors or adapt to changing socio-economic realities.","The President can exempt certain courts from following Supreme Court precedents."],
        "correctAnswerIndex": 2,
        "explanation": "A High Court in Madras MUST follow a Supreme Court ruling. But if the Supreme Court realizes its 1995 ruling was flawed, it must have the power to fix it. Therefore, the SC is not bound by its own precedents (stare decisis is not absolute). It can overrule itself (e.g., overruling the Golaknath case in Kesavananda Bharati)."
    },
    {
        "id": "ch26-l2-q10",
        "question": "Evaluate the evolution of the concept of",
        "options": ["The First case held the CJI was supreme; the Second case gave power back to the President.","The First case (S.P. Gupta) held that",", giving the Executive (Government) primacy in appointments. The Second case (1993) reversed this, ruling that consultation means",", thereby transferring the primacy of appointment from the Executive to the Judiciary (CJI).","The Second case introduced the National Judicial Appointments Commission (NJAC).","The First case mandated consulting the Parliament; the Second case removed this requirement."],
        "correctAnswerIndex": 1,
        "explanation": "This is the bedrock of the Collegium system. In 1982, the Court said"
    },
    {
        "id": "ch26-l2-q11",
        "question": "Which Constitutional mechanism allows the Supreme Court to theoretically intervene in a dispute between two private citizens if a lower court has made an egregious error, despite the Supreme Court not being a trial court for private disputes?",
        "options": ["Original Jurisdiction under Article 131.","Writ Jurisdiction under Article 32.","Special Leave Petition (SLP) under Article 136.","Advisory Jurisdiction under Article 143."],
        "correctAnswerIndex": 2,
        "explanation": "If Citizen A and Citizen B are fighting over a property, it goes to District Court, then High Court. Under normal appellate rules, it might stop there. However, if the High Court makes a shocking, manifest error of law causing severe injustice, Citizen A can file an SLP under Article 136, asking the Supreme Court to grant"
    },
    {
        "id": "ch26-l2-q12",
        "question": "Why does the Constitution prohibit a retired Judge of the Supreme Court from pleading or acting in any court or before any authority within the territory of India?",
        "options": ["Because they receive a pension and are technically still employed by the state.","To prevent the","phenomenon where a former Apex Court judge influences lower court judges or administrative authorities merely through their past prestige and personal relationships within the judicial hierarchy, ensuring the integrity and impartiality of post-retirement proceedings.","Because they lose their license to practice law upon taking the oath of a judge.","To force them to take up political appointments instead."],
        "correctAnswerIndex": 1,
        "explanation": "Imagine a District Judge hearing a case where the lawyer arguing before him is a retired Supreme Court Justice. The psychological pressure on the District Judge to agree with the"
    },
    {
        "id": "ch26-l2-q13",
        "question": "Consider the constitutional protection regarding the discussion of a Judge",
        "options": ["During the Question Hour.","When the Prime Minister specifically requests a debate.","Upon a motion for presenting an address to the President praying for the removal of the judge.","During the debate on the Ministry of Law and Justice"],
        "correctAnswerIndex": 2,
        "explanation": "This is a key pillar of independence. MPs cannot stand in Parliament and attack a judge just because they don"
    },
    {
        "id": "ch26-l2-q14",
        "question": "What is the primary function of an",
        "options": ["To replace a permanent judge who has been impeached.","To advise the President on complex legal matters.","To make up the quorum if there is a lack of permanent judges available to hold or continue any session of the Supreme Court.","To specifically hear cases involving terrorism."],
        "correctAnswerIndex": 2,
        "explanation": "If the Supreme Court needs a 9-judge bench, but several judges are sick or recused, creating a"
    },
    {
        "id": "ch26-l2-q15",
        "question": "Assertion (A): The Supreme Court acts as the guarantor and defender of the Fundamental Rights of citizens.\\nReason (R): Under Article 32, the Supreme Court is granted the power to issue writs like Habeas Corpus and Mandamus, and it cannot refuse to exercise this jurisdiction as the right to move the Supreme Court under Article 32 is itself a Fundamental Right.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R explains A. Article 32 is the"
    },
    {
        "id": "ch26-l2-q16",
        "question": "In the context of the",
        "options": ["The Government is bound by the CJI","The recommendation is valid, but the Government can delay it indefinitely.","The Government is not bound to accept the recommendation, as it violates the consultative norms laid down by the Supreme Court itself.","The President must refer the matter to the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "The 1998 case ruled that"
    },
    {
        "id": "ch26-l2-q17",
        "question": "Consider the concept of",
        "options": ["To allow the ruling party a second chance to win a case.","Because there is no higher court of appeal. As human institutions are fallible, a mechanism must exist to correct glaring","to prevent permanent miscarriage of justice.","To allow lower courts to challenge the Supreme Court.","It was forced upon the Constituent Assembly by the British."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court is the end of the road. If they make a mistake, nobody else can fix it. Therefore, Article 137 gives them the inherent power to review their own rulings. However, it is not an"
    },
    {
        "id": "ch26-l2-q18",
        "question": "What is the primary significance of the",
        "options": ["It stripped the Supreme Court of Judicial Review.","It established that the Supreme Court can review and strike down even Constitutional Amendments (passed under Article 368) if they violate the","of the Constitution.","It ruled that Directive Principles override Fundamental Rights in all cases.","It gave the President the power to overrule the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Prior to 1973, it was debated whether Parliament could amend the Constitution to take away Fundamental Rights. In Kesavananda Bharati, a 13-judge bench ruled that Parliament can amend ANY part, BUT it cannot destroy the"
    },
    {
        "id": "ch26-l2-q19",
        "question": "Regarding",
        "options": ["To hear any criminal appeal involving a death sentence.","To decide any case involving a substantial question of law as to the interpretation of the Constitution.","To hear any dispute between the Central Government and a State.","To punish a citizen for criminal contempt."],
        "correctAnswerIndex": 1,
        "explanation": "Interpreting the Constitution is the highest duty of the Court. Because these rulings affect the entire nation permanently, the Constitution mandates a"
    },
    {
        "id": "ch26-l2-q20",
        "question": "How does the power of",
        "options": ["By allowing the Supreme Court to disband state legislative assemblies.","By empowering the Supreme Court to declare laws enacted by either the Parliament or State Legislatures unconstitutional if they transgress the boundary lines drawn by the Union and State Lists (Schedule VII).","By giving the Supreme Court the power to appoint Governors.","By allowing the Court to rewrite state budgets."],
        "correctAnswerIndex": 1,
        "explanation": "India has a divided jurisdiction (Union List, State List). If the Centre passes a law on"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch26-l3-q1",
        "question": "Consider the constitutional friction surrounding the",
        "options": ["The MoP is a statutory document under the Judges Inquiry Act, and the Executive is attempting to amend it via an unconstitutional ordinance to veto Collegium recommendations on the grounds of",".","The MoP is essentially an administrative agreement between the Government and the Judiciary evolved after the 1993/1998 judgments. The core friction lies in the Executive","national security","The MoP is entirely dictated by the Chief Justice of India under Article 145, and the Executive is challenging it in the International Court of Justice.","The MoP strictly mandates that the Collegium must consult the Leader of the Opposition, a clause the current Executive refuses to acknowledge."],
        "correctAnswerIndex": 1,
        "explanation": "The MoP is not a law passed by Parliament; it"
    },
    {
        "id": "ch26-l3-q2",
        "question": "Analyze the Supreme Court",
        "options": ["Article 142 allows the Supreme Court to permanently repeal any statutory law (like the Hindu Marriage Act) if it finds it outdated.","Article 142 empowers the Court to issue decrees that supplement statutory law to bridge systemic gaps and deliver justice where rigid procedural adherence would cause undue hardship; however, it cannot be used to pass an order that directly nullifies or squarely conflicts with an express, substantive statutory provision.","The Supreme Court ruled that Article 142 can only be invoked during a declared National Emergency.","The power under Article 142 is entirely subservient to the Code of Criminal Procedure; if a procedure exists, the Court cannot bypass it."],
        "correctAnswerIndex": 1,
        "explanation": "This is a favorite UPSC nuance. Article 142 is an"
    },
    {
        "id": "ch26-l3-q3",
        "question": "Assertion (A): The Supreme Court in In Re: Prashant Bhushan (2020) affirmed that its power to punish for contempt is inherent under Article 129, rendering the restrictive procedural limitations (like the 1-year limitation period) of the Contempt of Courts Act, 1971, unconstitutional.\\nReason (R): Because a mere statutory law passed by Parliament cannot abridge or restrict a plenary power granted to a Constitutional Court directly by the Constitution itself.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "A tricky one. The Reason (R) is perfectly true—a statute cannot override a constitutional provision. However, the Assertion (A) is false. The Supreme Court *did* affirm its inherent power under Art 129, BUT it explicitly stated that it generally *respects* the procedures in the 1971 Act (including the 1-year limit) to prevent arbitrary usage of contempt. It did not declare the Act unconstitutional. It ruled that while the Act doesn"
    },
    {
        "id": "ch26-l3-q4",
        "question": "Evaluate the",
        "options": ["The principle of Federalism, as State Legislatures were not adequately represented on the NJAC panel.","The Separation of Powers, specifically the",". The Court reasoned that giving the Executive (Law Minister) and two","(who could be chosen by the Executive) a veto over appointments fundamentally compromised the primacy of judicial input, threatening the independence of the institution.","The principle of Free and Fair Elections, as it allowed politicians to appoint judges who would oversee election disputes.","The doctrine of Judicial Review, as the NJAC Act explicitly forbade the Supreme Court from reviewing its own composition."],
        "correctAnswerIndex": 1,
        "explanation": "The NJAC was struck down not because the Collegium is perfect, but because the structure of the NJAC (CJI + 2 SC Judges + Law Minister + 2 Eminent Persons) meant that any two members could veto an appointment. The Court argued that the Law Minister and one"
    },
    {
        "id": "ch26-l3-q5",
        "question": "Consider the mechanism of a",
        "options": ["If the petitioner discovers new empirical evidence that was ignored by the trial court.","Only if a subsequent Constitutional Bench overrules the legal principle upon which the original judgment was based.","It is restricted strictly to cases alleging a gross violation of the principles of natural justice (e.g., the petitioner was not heard) or a demonstrable apprehension of bias on the part of the judge, aiming to prevent a blatant miscarriage of justice after a Review Petition has failed.","If the President of India explicitly pardons the individual under Article 72."],
        "correctAnswerIndex": 2,
        "explanation": "You can"
    },
    {
        "id": "ch26-l3-q6",
        "question": "Analyze the strategic filing of suits by various State Governments (e.g., Kerala against the Citizenship Amendment Act, Punjab against BSF jurisdiction expansion) directly in the Supreme Court under Article 131. What is the fundamental constitutional argument States use to invoke",
        "options": ["They argue that the Central laws violate the Fundamental Rights of their state citizens under Part III.","They argue that the Supreme Court is the only forum that can hear appeals against laws passed by the Union Parliament.","They assert that the Center","dispute","They argue that the President failed to give proper assent to the bills."],
        "correctAnswerIndex": 2,
        "explanation": "A State cannot file a writ under Article 32 saying"
    },
    {
        "id": "ch26-l3-q7",
        "question": "Regarding the deeply debated administrative concept of",
        "options": ["The CJI is bound by the decisions of the Collegium when allocating cases to maintain democratic functioning.","Judicial power is hierarchically distributed; therefore, a bench headed by the CJI can overrule a bench headed by any other judge.","While all judges are completely equal in their judicial capacity (a judgment by the newest judge carries the same weight as the CJI","first among equals","The CJI must allocate cases via a randomized computer algorithm to prevent allegations of bench-hunting."],
        "correctAnswerIndex": 2,
        "explanation": "Following the unprecedented 2018 press conference by four senior judges alleging the CJI was assigning sensitive cases to preferred junior judges, the dispute went to court. The SC decisively ruled that administratively, the CJI is not a first among equals—he is the absolute Master of the Roster. He alone decides who hears what. However, judicially, all are equal. A 2-judge bench headed by the CJI cannot overrule a 2-judge bench headed by a junior judge."
    },
    {
        "id": "ch26-l3-q8",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a profound theoretical distinction in Article 13. A pre-1950 law was perfectly legal when the British made it. On Jan 26, 1950, a Fundamental Right overshadowed it. It is"
    },
    {
        "id": "ch26-l3-q9",
        "question": "Consider the intricate procedure for the removal (impeachment) of a Supreme Court Judge. At what exact stage does the process transition from a purely",
        "options": ["When the Speaker/Chairman decides whether to admit or reject the motion signed by 100/50 MPs.","When the three-member committee (Judge SC, Judge HC, Jurist) submits its report finding the judge",", after which it becomes the discretionary prerogative of Parliament to debate and vote (with a special majority) on whether to actually adopt the motion for removal.","When the President issues the final order of removal.","It remains a purely judicial process throughout, ending with a Supreme Court trial."],
        "correctAnswerIndex": 1,
        "explanation": "The Judges Inquiry Act beautifully separates law from politics. The initial 100 signatures are political noise. The 3-member committee is pure law (quasi-judicial)—they must find"
    },
    {
        "id": "ch26-l3-q10",
        "question": "If a Constitutional Bench of the Supreme Court issues a judgment outlining comprehensive guidelines to curb",
        "options": ["They are mere advisory suggestions and lack legal enforceability.","They derive authority from the Supreme Court","They operate as binding law across the entire territory of India under Article 141 acting synergistically with Article 142 (complete justice), filling the legislative vacuum until the Parliament formally supersedes them with a statute.","They are valid only if ratified by the President under Article 143."],
        "correctAnswerIndex": 2,
        "explanation": "This is judicial activism in the realm of policy formulation. When there is a"
    }
];

export const CHAPTER_26_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
