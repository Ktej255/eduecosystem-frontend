import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch27-l1-q1",
        "question": "In which country did the doctrine of",
        "options": ["United Kingdom","United States of America","France","India"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine of judicial review originated and developed in the USA."
    },
    {
        "id": "ch27-l1-q2",
        "question": "Which landmark 1803 case in the USA established the principle of Judicial Review?",
        "options": ["Roe vs. Wade","Marbury vs. Madison","Brown vs. Board of Education","McCulloch vs. Maryland"],
        "correctAnswerIndex": 1,
        "explanation": "It was propounded for the first time in the famous case of Marbury V. Madison (1803) by John Marshall, the then chief justice of the American Supreme Court."
    },
    {
        "id": "ch27-l1-q3",
        "question": "In India, does the Constitution explicitly confer the power of judicial review on the judiciary?",
        "options": ["No, it is an implied convention.","Yes, the Constitution itself confers the power of judicial review on the judiciary.","Yes, but only on the Supreme Court, not the High Courts.","No, it was granted by an Act of Parliament in 1951."],
        "correctAnswerIndex": 1,
        "explanation": "In India, on the other hand, the Constitution itself confers the power of judicial review on the judiciary (both the Supreme Court as well as High Courts)."
    },
    {
        "id": "ch27-l1-q4",
        "question": "The Supreme Court has declared the power of judicial review to be a",
        "options": ["It can be amended by a simple majority in Parliament.","It cannot be curtailed or excluded even by a constitutional amendment.","It applies only to the basic rights of citizens.","It expires after 50 years."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has declared the power of judicial review as a basic feature of the Constitution or an element of the basic structure of the Constitution. Hence, the power of judicial review cannot be curtailed or excluded even by a constitutional amendment."
    },
    {
        "id": "ch27-l1-q5",
        "question": "Justice Syed Shah Mohamed Quadri classified Judicial Review into three categories. Which of the following is NOT one of those categories?",
        "options": ["Judicial review of constitutional amendments.","Judicial review of legislation of Parliament and State Legislatures.","Judicial review of administrative action of the Union and State.","Judicial review of treaties signed with foreign nations."],
        "correctAnswerIndex": 3,
        "explanation": "Justice Syed Shah Mohamed Quadri has classified the judicial review into the following three categories: 1. Judicial review of constitutional amendments. 2. Judicial review of legislation of the Parliament and State Legislatures and subordinate legislations. 3. Judicial review of administrative action of the Union and State..."
    },
    {
        "id": "ch27-l1-q6",
        "question": "A legislative enactment or an executive order can be challenged in the Supreme Court or the High Courts on which of the following grounds?",
        "options": ["It infringes upon the Fundamental Rights.","It is outside the competence of the authority which has framed it.","It is repugnant to the constitutional provisions.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "A legislative enactment or an executive order can be challenged in the Supreme Court or in the High Courts on the following three grounds: (a) it infringes the Fundamental Rights; (b) it is outside the competence of the authority which has framed it; (c) it is repugnant to the constitutional provisions."
    },
    {
        "id": "ch27-l1-q7",
        "question": "Which Article explicitly declares that all laws that are inconsistent with or in derogation of the Fundamental Rights shall be null and void?",
        "options": ["Article 11","Article 13","Article 21","Article 32"],
        "correctAnswerIndex": 1,
        "explanation": "Article 13 declares that all laws that are inconsistent with or in derogation of the Fundamental Rights shall be null and void."
    },
    {
        "id": "ch27-l1-q8",
        "question": "Which Article guarantees the right to move the Supreme Court for the enforcement of the Fundamental Rights and empowers it to issue writs?",
        "options": ["Article 14","Article 32","Article 131","Article 226"],
        "correctAnswerIndex": 1,
        "explanation": "Article 32 guarantees the right to move the Supreme Court for the enforcement of the Fundamental Rights and empowers the Supreme Court to issue directions or orders or writs for that purpose."
    },
    {
        "id": "ch27-l1-q9",
        "question": "Which Article empowers the High Courts to issue directions, orders, or writs for the enforcement of Fundamental Rights and for any other purpose?",
        "options": ["Article 131","Article 136","Article 226","Article 227"],
        "correctAnswerIndex": 2,
        "explanation": "Article 226 empowers the High Courts to issue directions or orders or writs for the enforcement of the Fundamental Rights and for any other purpose."
    },
    {
        "id": "ch27-l1-q10",
        "question": "Article 131 deals with the Original Jurisdiction of the Supreme Court in center-state and inter-state disputes. Does this fall under the ambit of Judicial Review?",
        "options": ["Yes, it ensures the federal limits are maintained.","No, it is purely an arithmetic division of property.","No, original jurisdiction is separate from judicial review.","Yes, but only if the President asks for it."],
        "correctAnswerIndex": 0,
        "explanation": "Article 131 provides for the original jurisdiction of the Supreme Court in centre-state and inter-state disputes... This is a crucial area where the SC reviews if one entity has overstepped its constitutional boundaries."
    },
    {
        "id": "ch27-l1-q11",
        "question": "Which Article vests the Supreme Court with the power of",
        "options": ["Article 132","Article 133","Article 136","Article 143"],
        "correctAnswerIndex": 2,
        "explanation": "Article 136 authorises the Supreme Court to grant special leave to appeal from any judgement, decree, determination, sentence or order in any cause or matter passed or made by any court or tribunal in the territory of India (except military tribunal)."
    },
    {
        "id": "ch27-l1-q12",
        "question": "Article 143 authorizes the President to seek the opinion of the Supreme Court. This is known as:",
        "options": ["Original Jurisdiction","Appellate Jurisdiction","Advisory Jurisdiction","Writ Jurisdiction"],
        "correctAnswerIndex": 2,
        "explanation": "Article 143 authorises the President to seek the opinion of the Supreme Court on any question of law or fact and on any pre-constitution legal matters. This is known as Advisory Jurisdiction."
    },
    {
        "id": "ch27-l1-q13",
        "question": "Article 245 deals with the territorial extent of laws made by Parliament and State Legislatures. Any law made outside this competence is subject to judicial review. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Article 245 deals with the territorial extent of laws made by Parliament and by the Legislatures of States. It is a ground for judicial review if a legislature passes a law outside its territorial competence."
    },
    {
        "id": "ch27-l1-q14",
        "question": "Which Article read with the Seventh Schedule ensures that Parliament and State Legislatures stick to their respective subject lists (Union, State, Concurrent)?",
        "options": ["Article 245","Article 246","Article 254","Article 368"],
        "correctAnswerIndex": 1,
        "explanation": "Article 246 read with the Seventh Schedule deals with the subject-matter of laws made by Parliament and by the Legislatures of States."
    },
    {
        "id": "ch27-l1-q15",
        "question": "According to Article 254, if there is an inconsistency between a law made by Parliament and a law made by the Legislature of a State regarding a matter in the Concurrent List, which law generally prevails?",
        "options": ["The State law always prevails.","The law made by Parliament prevails.","The Supreme Court drafts a new compromise law.","The President decides."],
        "correctAnswerIndex": 1,
        "explanation": "Article 254 provides that in case of a conflict between a central law and a state law on the same subject in the Concurrent List, the central law prevails over the state law."
    },
    {
        "id": "ch27-l1-q16",
        "question": "How does the scope of judicial review in India compare to that of the USA?",
        "options": ["It is much wider in India.","It is exactly the same.","It is narrower in India than that of what exists in the USA.","It is completely non-existent in the USA."],
        "correctAnswerIndex": 2,
        "explanation": "The scope of judicial review in India is narrower than that of what exists in USA."
    },
    {
        "id": "ch27-l1-q17",
        "question": "The American Constitution provides for",
        "options": ["Rule of Law","Procedure Established by Law","Equality before Law","Substantive Due Process"],
        "correctAnswerIndex": 1,
        "explanation": "This is because the American Constitution provides for"
    },
    {
        "id": "ch27-l1-q18",
        "question": "Under",
        "options": ["If the law was passed unanimously.","If the law itself is fair, just, and not arbitrary.","If the law was signed by the President within 10 days.","If the law applies to foreigners."],
        "correctAnswerIndex": 1,
        "explanation": "The due process of law gives wide scope to the Supreme Court to grant protection to the rights of its citizens. It can declare laws violative of these rights void not only on substantive grounds of being unlawful, but also on procedural grounds of being unreasonable. Our Supreme Court... examines only the substantive question i.e., whether the law is within the powers of the authority concerned or not (initially)."
    },
    {
        "id": "ch27-l1-q19",
        "question": "Which Schedule of the Indian Constitution was originally created (by the 1st Amendment in 1951) to protect certain laws (especially land reforms) from judicial review on the ground of violating Fundamental Rights?",
        "options": ["Sixth Schedule","Eighth Schedule","Ninth Schedule","Tenth Schedule"],
        "correctAnswerIndex": 2,
        "explanation": "Article 31B saves the acts and regulations included in the Ninth Schedule from being challenged and invalidated on the ground of contravention of any of the Fundamental Rights."
    },
    {
        "id": "ch27-l1-q20",
        "question": "In the landmark I.R. Coelho Case (2007) [also known as the Ninth Schedule Case], the Supreme Court ruled that there could not be a blanket immunity from judicial review. They set a specific cut-off date. What is this date?",
        "options": ["January 26, 1950","August 15, 1947","April 24, 1973","June 25, 1975"],
        "correctAnswerIndex": 2,
        "explanation": "In a landmark judgement delivered in January 2007, the Supreme Court ruled that there could not be any blanket immunity from judicial review of laws included in the Ninth Schedule. The apex court held that judicial review is a"
    },
    {
        "id": "ch27-l1-q21",
        "question": "Why was",
        "options": ["It was the day the Emergency was declared.","It was the day the Constitution was originally adopted.","It is the date of the Kesavananda Bharati judgment, which propounded the","doctrine.","It was the day the Ninth Schedule was created."],
        "correctAnswerIndex": 2,
        "explanation": "The date April 24, 1973 is the date of the historic Kesavananda Bharati judgement, wherein the Supreme Court propounded the doctrine of"
    },
    {
        "id": "ch27-l1-q22",
        "question": "Therefore, according to the 2007 judgment, laws placed in the Ninth Schedule AFTER April 24, 1973, can be challenged in court if they violate:",
        "options": ["Only Article 14","Only Article 19","Only Article 21","The Fundamental Rights guaranteed under Articles 14, 15, 19 and 21 or the basic structure of the Constitution."],
        "correctAnswerIndex": 3,
        "explanation": "It said that the laws placed under the Ninth Schedule after April 24, 1973, are open to challenge in court if they violated Fundamental Rights guaranteed under Articles 14, 15, 19 and 21 or the basic structure of the Constitution."
    },
    {
        "id": "ch27-l1-q23",
        "question": "Is",
        "options": ["Yes, in Article 13.","Yes, in Article 32.","Yes, in the Preamble.","No, the phrase","has nowhere been used in the Constitution."],
        "correctAnswerIndex": 3,
        "explanation": "Though the phrase"
    },
    {
        "id": "ch27-l1-q24",
        "question": "Article 227 vests the High Courts with the power of ________ over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction.",
        "options": ["Original Jurisdiction","Superintendence","Advisory powers","Financial control"],
        "correctAnswerIndex": 1,
        "explanation": "Article 227 vests the High Courts with the power of superintendence over all courts and tribunals throughout the territories in relation to which it exercises jurisdiction."
    },
    {
        "id": "ch27-l1-q25",
        "question": "Which Constitutional Amendment Act (1976) severely curtailed the judicial review power of the Supreme Court and High Courts?",
        "options": ["24th Amendment","25th Amendment","42nd Amendment","44th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment Act of 1976 curtailed the judicial review power of the Supreme Court and High Courts..."
    },
    {
        "id": "ch27-l1-q26",
        "question": "Which subsequent Constitutional Amendment Act (1977) restored the original jurisdiction of the Supreme Court in respect of judicial review to a large extent?",
        "options": ["43rd Amendment Act","44th Amendment Act","45th Amendment Act","46th Amendment Act"],
        "correctAnswerIndex": 0,
        "explanation": "However, the 43rd Amendment Act of 1977 restored the original position (power of judicial review) to the Supreme Court and High Courts."
    },
    {
        "id": "ch27-l1-q27",
        "question": "Article 137 empowers the Supreme Court to review any judgment pronounced or order made by it. This is directly an exercise of:",
        "options": ["Reviewing its own previous decisions to correct errors.","Reviewing the laws made by the State Legislatures.","Reviewing the administrative actions of the President.","Reviewing military tribunal proceedings."],
        "correctAnswerIndex": 0,
        "explanation": "Article 137 lays down that the Supreme Court shall have the power to review any judgement pronounced or order made by it."
    },
    {
        "id": "ch27-l1-q28",
        "question": "If the Central Government uses Article 356 (President",
        "options": ["No, it is purely a political decision by the President.","Yes, administrative actions of the Union and State fall under the scope of judicial review.","No, unless the Parliament passes a resolution to allow it.","Yes, but only if the Governor requests it."],
        "correctAnswerIndex": 1,
        "explanation": "Judicial review of administrative action of the Union and State and authorities under the state is one of the three categories of judicial review. The S.R. Bommai case specifically brought Article 356 under judicial review."
    },
    {
        "id": "ch27-l1-q29",
        "question": "The power of judicial review in India is shared by:",
        "options": ["Only the Supreme Court","Only the High Courts","The Supreme Court and the High Courts","The Supreme Court, High Courts, and District Courts."],
        "correctAnswerIndex": 2,
        "explanation": "In India, on the other hand, the Constitution itself confers the power of judicial review on the judiciary (both the Supreme Court as well as High Courts)."
    },
    {
        "id": "ch27-l1-q30",
        "question": "Article 372 (1) ensures the continuance in force of existing laws and their adaptation. If a pre-constitution law is found to violate Fundamental Rights, it can be reviewed and struck down. True or False?",
        "options": ["True","False","Partially True","Depends on the President"],
        "correctAnswerIndex": 0,
        "explanation": "Article 372 (1) establishes the continuity of the pre-constitution laws. However, if they conflict with part III, they are void under Article 13(1), which is a key mechanism of judicial review."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch27-l2-q1",
        "question": "Analyze the fundamental distinction between the American constitutional doctrine of",
        "options": ["Both doctrines allow courts to strike down laws based merely on political disagreements with the legislature.","Under",", courts can only review whether the legislature had the competence to pass the law and followed the correct procedural steps. Under",", courts can additionally evaluate the substantive fairness, justice, and non-arbitrariness of the law itself, thereby widening the scope of judicial review in the USA.","Under",", courts can strike down constitutional amendments, whereas under","they cannot.","Under",", the judiciary is subservient to the legislature, narrowing Judicial Review."],
        "correctAnswerIndex": 1,
        "explanation": "This is a core conceptual difference. Initially, under Article 21, the Indian Supreme Court held that if the Parliament had the power to pass a law depriving a person of liberty, and followed the right steps, the Court couldn"
    },
    {
        "id": "ch27-l2-q2",
        "question": "Consider the evolution of",
        "options": ["It abolished Article 21 entirely.","It strictly reaffirmed the mechanical interpretation of the A.K. Gopalan case, confining itself only to checking legislative competence.","It imported the American concept of","into Article 21 by ruling that the","established by law must be right, just, and fair, and not arbitrary or oppressive, effectively broadening the scope of judicial review over parliamentary legislation.","It ruled that judicial review cannot apply to passport revocation cases."],
        "correctAnswerIndex": 2,
        "explanation": "This was a watershed moment. The SC moved away from the narrow"
    },
    {
        "id": "ch27-l2-q3",
        "question": "Evaluate the creation and initial purpose of the",
        "options": ["The conflict between the Election Commission and Parliament regarding the delimitation of constituencies.","The conflict between state-mandated agrarian land reforms (Zamindari abolition) aiming for socio-economic justice (Directive Principles) and the Fundamental Right to Property (Article 31), which was frequently used by landlords to strike down the reform laws through judicial review.","The conflict between the Central Government and State Governments regarding the imposition of President","The conflict over the official language of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "When India became independent, the government urgently needed to abolish the Zamindari system and redistribute land to the poor. However, the landlords kept going to court arguing their Fundamental Right to Property was violated, and the courts kept striking the laws down via Judicial Review. To bypass this immense roadblock, Nehru"
    },
    {
        "id": "ch27-l2-q4",
        "question": "In the I.R. Coelho Case (2007), the Supreme Court ruled on the validity of laws placed in the Ninth Schedule. Which constitutional doctrine formed the bedrock of the Court",
        "options": ["The Doctrine of Severability.","The Doctrine of Pith and Substance.","The Basic Structure Doctrine, asserting that","is a fundamental feature of the Constitution that cannot be entirely abrogated even by a constitutional amendment moving a law into the Ninth Schedule.","The Doctrine of Colorable Legislation."],
        "correctAnswerIndex": 2,
        "explanation": "The government thought putting a law in the 9th Schedule made it invincible. The SC in 2007 said:"
    },
    {
        "id": "ch27-l2-q5",
        "question": "Assertion (A): The power of Judicial Review allows the Supreme Court to suo motu (on its own motion) review and strike down any law passed by Parliament immediately upon its enactment, even before anyone challenges it.\\nReason (R): Because Judicial Review acts as an omnipresent veto power over the legislature to prevent constitutional violations.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are completely false. Judicial Review in India (unlike the"
    },
    {
        "id": "ch27-l2-q6",
        "question": "Consider the presumption applied by the Judiciary when reviewing a statute. The courts always begin with the",
        "options": ["The burden of proof lies entirely on the Government to prove the law is valid.","The burden of proof lies on the Parliament to justify its passing.","The courts presume the legislature understands the needs of its people and did not intentionally violate the Constitution. Therefore, the burden of proof falls heavily on the petitioner challenging the law to demonstrate clearly that it is unconstitutional.","The courts presume the law is unconstitutional until the Attorney General proves otherwise."],
        "correctAnswerIndex": 2,
        "explanation": "Courts do not start out hostile to laws. They respect the democratic mandate of Parliament. They start with the"
    },
    {
        "id": "ch27-l2-q7",
        "question": "What is the primary function of the",
        "options": ["It allows the Court to sever diplomatic ties with foreign nations.","If a part of a statute is found unconstitutional, the Court uses this doctrine to strike down that specific offending part (","it). If the remaining perfectly valid part can stand independently and function, the entire statute is NOT struck down; only the unconstitutional portion is voided.","It severs the relationship between the Centre and the States during National Emergencies.","It allows the President to sever the tenure of a judge without impeachment."],
        "correctAnswerIndex": 1,
        "explanation": "When checking a 100-page law, if the court finds Clause 4 on page 50 violates Article 14, they don"
    },
    {
        "id": "ch27-l2-q8",
        "question": "Evaluate the concept of",
        "options": ["The Directive Principles of State Policy (Part IV).","The Preamble of the Constitution.","Article 246 read with the Seventh Schedule (The Union, State, and Concurrent Lists) distributing subject-matter jurisdiction between the Parliament and State Legislatures.","Article 368 dealing with constitutional amendments."],
        "correctAnswerIndex": 2,
        "explanation": "Before a court even asks"
    },
    {
        "id": "ch27-l2-q9",
        "question": "How does the",
        "options": ["It allows the Court to prioritize State laws over Central laws.","It forces the Court to strike down any law that accidentally mentions a subject belonging to the other List.","It helps the Court determine the","(the pith and substance) of a law. If a State makes a law primarily on a State List subject, but it incidentally encroaches slightly onto a Union List subject, the law is upheld as valid, preventing rigid, unworkable federal compartmentalization.","It empowers the President to resolve the dispute without judicial interference."],
        "correctAnswerIndex": 2,
        "explanation": "Federalism is messy. A state law regulating"
    },
    {
        "id": "ch27-l2-q10",
        "question": "Consider the relationship between Judicial Review and Constitutional Amendments. Historically, how did the Parliament attempt to shield its constitutional amendments (especially regarding Fundamental Rights) from Judicial Review, leading up to the 24th Amendment Act (1971)?",
        "options": ["By arguing that","under Article 13 does not include a","under Article 368, and thus amendments cannot be struck down for violating Fundamental Rights.","By declaring emergency powers continuously.","By arresting judges who attempted to review amendments.","By shifting the Supreme Court out of Delhi."],
        "correctAnswerIndex": 0,
        "explanation": "Article 13 says"
    },
    {
        "id": "ch27-l2-q11",
        "question": "Which of the following scenarios is NOT an appropriate application of Judicial Review over",
        "options": ["Reviewing a policy decision made by a Cabinet Minister to determine if it is politically popular.","Reviewing an order by a civil servant cancelling a license without providing the affected party an opportunity to be heard (violating audi alteram partem).","Reviewing a government tender allocation that was granted through blatant nepotism or malice.","Reviewing a police arrest made without following the guidelines laid down in the CrPC or D.K. Basu case."],
        "correctAnswerIndex": 0,
        "explanation": "Judicial Review of administrative action checks for illegality, irrationality (Wednesbury unreasonableness), and procedural impropriety (violation of natural justice). It does NOT check the"
    },
    {
        "id": "ch27-l2-q12",
        "question": "Assertion (A): The Supreme Court of India exercises",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The US has"
    },
    {
        "id": "ch27-l2-q13",
        "question": "Under the doctrine of Judicial Review, what occurs if the Supreme Court declares a statute passed by Parliament",
        "options": ["The statute is sent back to the President for a second signature.","The statute remains valid but only in Union Territories.","The statute becomes a dead letter, void ab initio (invalid from the beginning), and cannot be enforced by the executive anywhere in the country.","The statute is suspended for one year to allow Parliament to fix it."],
        "correctAnswerIndex": 2,
        "explanation": "When a law is declared unconstitutional (ultra vires), it doesn"
    },
    {
        "id": "ch27-l2-q14",
        "question": "Consider the",
        "options": ["Justice delayed is justice denied.","What cannot be done directly, cannot be done indirectly.","The king can do no wrong.","Ignorance of the law is no excuse."],
        "correctAnswerIndex": 1,
        "explanation": "This doctrine tests"
    },
    {
        "id": "ch27-l2-q15",
        "question": "How did the 42nd Constitutional Amendment Act (1976) attempt to insulate",
        "options": ["By abolishing the Supreme Court entirely during the Emergency.","By amending Article 31C to provide that no law giving effect to ANY of the Directive Principles (Part IV) could be declared void for infringing Fundamental Rights (Articles 14, 19, or 31).","By declaring the DPSP justiciable and superior to Fundamental rights in all courts.","By requesting the President to issue an ordinance banning SC interference."],
        "correctAnswerIndex": 1,
        "explanation": "Initially, Article 31C (added by 25th Amendment) protected only laws implementing socialist Directives 39(b) and (c). The 42nd Amendment wildly expanded this, saying no law implementing *ANY* DPSP policy could be touched by Judicial Review even if it crushed Fundamental Rights. (The Minerva Mills case later struck down this massive expansion, restoring the balance between FRs and DPSP)."
    },
    {
        "id": "ch27-l2-q16",
        "question": "In the context of protecting legislation from Judicial Review, what structural difference exists between putting a law in the Ninth Schedule versus utilizing Article 31C?",
        "options": ["They are identical mechanisms.","The Ninth Schedule requires a specific law to be explicitly inserted by a Constitutional Amendment Act, providing it targeted protection. Article 31C is a general constitutional shield that automatically protects any ordinary legislation passing the test of implementing specific Directive Principles without needing a constitutional amendment to list the law.","The Ninth Schedule protects State laws; Article 31C protects Central laws.","The Ninth Schedule requires UN approval; Article 31C does not."],
        "correctAnswerIndex": 1,
        "explanation": "To put the"
    },
    {
        "id": "ch27-l2-q17",
        "question": "Why is",
        "options": ["To ensure the Prime Minister remains more powerful than the Chief Ministers.","To act as the impartial umpire to maintain the constitutional equilibrium, interpreting the strict division of powers (List I, II, III) and preventing the more powerful Centre from legislatively obliterating the autonomy of the States.","To allow the Supreme Court to collect taxes directly from the States.","To enforce international treaties against State Governments."],
        "correctAnswerIndex": 1,
        "explanation": "Without an independent umpire with the power of Judicial Review, federalism fails. The Centre (Union Parliament), having more power and money, would constantly pass laws encroaching on State Subjects (Agriculture, Police, Health). The framers needed the Supreme Court to watch the boundary lines (Schedule VII) and strike down any laws where one entity tried to steal power from the other."
    },
    {
        "id": "ch27-l2-q18",
        "question": "Consider the term",
        "options": ["Rules made by a Minister are immune from Judicial Review.","They are subject to Judicial Review. The Court can strike down the Rules if they are","the Parent Act (i.e., the Rules exceed or contradict the power granted by the original Act).","The Court can only review them if the Parliament passes a resolution asking it to.","Rules are reviewed only by the President, not the Courts."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament passes a broad"
    },
    {
        "id": "ch27-l2-q19",
        "question": "If a constitutional amendment is challenged in the Supreme Court on the grounds that it violates the",
        "options": ["It checks if the amendment was passed with a simple majority.","It checks if the amendment violates Article 14, 19, or 21 directly.","It applies a substantive test to see if the amendment fundamentally alters, damages, or abolishes the core identity and essential characteristics of the Constitution (like secularism, democracy, judicial review) formulated in Kesavananda Bharati.","It checks if the President signed it within the mandated timeframe."],
        "correctAnswerIndex": 2,
        "explanation": "This is the zenith of Judicial Review. The SC isn"
    },
    {
        "id": "ch27-l2-q20",
        "question": "Assertion (A): The inclusion of a law in the Ninth Schedule completely debars the Supreme Court from exercising its power of Judicial Review over it.\\nReason (R): Because Article 31B explicitly states that none of the Acts in the Ninth Schedule shall be deemed void on the ground that it is inconsistent with Part III.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "A tricky but crucial distinction post-2007. The Reason (R) is true; Article 31B does say that textually. However, the Assertion (A) is FALSE because of the I.R. Coelho judgment. The Supreme Court ruled that despite the text of Art 31B, laws put into the 9th Schedule *after* April 24, 1973, CAN be judicially reviewed if they abrogate the"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch27-l3-q1",
        "question": "Consider the constitutional architecture of the",
        "options": ["The",". If a law violates any right enumerated in Part III, it is automatically struck down regardless of its placement in the Ninth Schedule.","The",". The Government must prove a compelling state interest to justify any law in the Ninth Schedule.","The",". First, does the law violate the fundamental rights under Articles 14, 15, 19, or 21? If yes, second, does this violation physically damage or destroy the","of the Constitution? If it damages the basic structure, the law is struck down despite Article 31B immunity.","The",". If Parliament had the power to pass the law, it receives absolute immunity."],
        "correctAnswerIndex": 2,
        "explanation": "This is the crux of the Coelho judgment. Merely violating a fundamental right isn"
    },
    {
        "id": "ch27-l3-q2",
        "question": "Evaluate the interplay between",
        "options": ["It upheld the 42nd Amendment, declaring that DPSPs always override Fundamental Rights, barring Judicial Review completely.","It struck down the 42nd Amendment","harmonious balance","basic feature","It declared DPSPs to be completely non-justiciable and therefore irrelevant to Judicial Review.","It mandated that all DPSPs be immediately converted into Fundamental Rights."],
        "correctAnswerIndex": 1,
        "explanation": "The 42nd Amendment ( इंदिरा गांधी"
    },
    {
        "id": "ch27-l3-q3",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The"
    },
    {
        "id": "ch27-l3-q4",
        "question": "Consider the historical trajectory of Judicial Review in India. The landmark judgment in Menaka Gandhi vs. Union of India (1978) represented a paradigm shift. Which specific constitutional",
        "options": ["The barrier that prevented the Court from reviewing Constitutional Amendments.","The A.K. Gopalan","approach, which read Articles 14, 19, and 21 as mutually exclusive, watertight compartments. By ruling they form an integrated",", the Court mandated that any procedure depriving liberty under Art 21 must ALSO be fair (Art 14) and reasonable (Art 19), effectively importing",".","The barrier preventing the review of the President","The barrier holding that the Preamble is not a part of the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "Before Maneka Gandhi (1978), if the government locked you up according to a valid law (Art 21), you couldn"
    },
    {
        "id": "ch27-l3-q5",
        "question": "How does the",
        "options": ["It permanently blinds the government from enacting laws related to solar energy without SC approval.","It revives pre-constitutional laws that were","(rendered dormant) by the advent of Fundamental Rights in 1950, IF a subsequent constitutional amendment removes the specific Fundamental Right that was casting the","(e.g., the Right to Property).","It dictates that all Supreme Court hearings must be transparent and televised (sunlight as a disinfectant).","It only applies to post-constitutional laws passed by state legislatures during an eclipse."],
        "correctAnswerIndex": 1,
        "explanation": "This is the classic understanding of"
    },
    {
        "id": "ch27-l3-q6",
        "question": "Analyze the jurisdictional limits of Judicial Review over",
        "options": ["The Supreme Court can intervene if a Member of Parliament uses unparliamentary language.","The Court can intervene if it determines the Speaker","The Court cannot inquire into proceedings on the ground of any",". However, if the proceeding suffers from substantive","or","(e.g., passing a bill without a quorum or violating a specific constitutional mandate), Judicial Review is permissible.","The Supreme Court has absolute, unfettered jurisdiction to review all parliamentary proceedings daily."],
        "correctAnswerIndex": 2,
        "explanation": "Article 122 protects Parliament from micromanagement. If the Speaker bends a rule book regarding how a debate is conducted (procedural irregularity), the SC cannot intervene. BUT, if the Speaker passes a Constitutional Amendment without the constitutionally mandated 2/3rds majority (substantive unconstitutionality), it is no longer just a"
    },
    {
        "id": "ch27-l3-q7",
        "question": "Consider the constitutional status of",
        "options": ["It declared that all Tribunals are unconstitutional and must be disbanded.","It ruled that Tribunals have supreme authority, and their decisions cannot be appealed to any court in India.","It struck down the clauses in Articles 323A and 323B that excluded the writ jurisdiction of High Courts (Article 226) and the Supreme Court (Article 32) over tribunal decisions, declaring Judicial Review by constitutional courts an unamendable",".","It allowed Parliament to replace High Courts entirely with specialized Tribunals."],
        "correctAnswerIndex": 2,
        "explanation": "During the Emergency (42nd Amendment), the government created Tribunals mathematically designed to bypass High Courts by inserting"
    },
    {
        "id": "ch27-l3-q8",
        "question": "Assertion (A): The Supreme Court of India does not possess the power of Judicial Review over a formal",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The 38th Amendment (1975) tried to make the declaration of Emergency immune from Judicial Review. The 44th Amendment (1978) removed this immunity. Furthermore, the Supreme Court unequivocally stated in Minerva Mills that if a Proclamation of Emergency is made on"
    },
    {
        "id": "ch27-l3-q9",
        "question": "In the realm of",
        "options": ["When the judge believes he could have made a better policy decision than the administrator.","When the administrator fails to consult the Leader of the Opposition.","When an administrative decision is so outrageous in its defiance of logic or accepted moral standards that no sensible person who had applied their mind to the question to be decided could have arrived at it.","When the decision results in a financial loss for a private corporation."],
        "correctAnswerIndex": 2,
        "explanation": "This is the strict threshold for striking down an administrative order on the ground of"
    },
    {
        "id": "ch27-l3-q10",
        "question": "Examine the dynamic of Judicial Review regarding the",
        "options": ["It ruled that a Governor","It established that a Governor can dissolve an assembly without the advice of the Chief Minister at any time.","It held that Article 163 does not give the Governor a general discretionary power to act against or without the advice of his Council of Ministers. The Governor","It allowed the President to override Judicial Review of a Governor"],
        "correctAnswerIndex": 2,
        "explanation": "In the Arunachal Pradesh crisis (Nabam Rebia), the Governor tried to advance the Assembly session unilaterally to help topple the government. The SC struck it down. They clarified that"
    },
    {
        "id": "ch27-l3-q11",
        "question": "What is the primary implication of the Supreme Court shifting from traditional Judicial Review towards an",
        "options": ["It guarantees that all state actions are presumed unconstitutional.","It replaces the basic structure doctrine.","It forces the State to prove not just that a law is rational, but that the restriction on a right is backed by a legitimate state aim, is suitable, is the","measure possible, and balances the rights of the citizen against the state","It prevents the state from ever collecting citizen data."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch27-l3-q12",
        "question": "Assertion (A): A law declared unconstitutional by a High Court under its Judicial Review power (Article 226) immediately becomes void and inoperative across the entire territory of India.\\nReason (R): Because High Courts, while geographically bound, interpret central statutes which apply PAN-India.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "This is a complex procedural point. An Assertion is false. If the Madras High Court strikes down a Central IT Rule, historically, it only applied within Tamil Nadu. It took a while (and often a Supreme Court stay) to clarify the nationwide impact. However, in Kusum Ingots (2004), the SC ruled an order striking down a central act by an HC *may* have all-India effect, BUT it is highly debated and often stayed by the SC. Generally, HC judgments are binding only within their territorial jurisdiction unless the SC explicitly extends them."
    },
    {
        "id": "ch27-l3-q13",
        "question": "Consider the deployment of Judicial Review over constitutional amendments. If Parliament passes an amendment transferring the subject of",
        "options": ["It requires an absolute majority of the total population of India via a referendum.","It requires the unanimous consent of all High Court Chief Justices.","Under Article 368(2), it requires not only a special majority in both Houses of Parliament but ALSO ratification by the legislatures of not less than one-half of the States, as it alters the federal distribution of legislative powers.","It cannot be done; the Lists are unamendable features."],
        "correctAnswerIndex": 2,
        "explanation": "This tests procedural judicial review. If Parliament amends a"
    },
    {
        "id": "ch27-l3-q14",
        "question": "When exercising Judicial Review, how does the Supreme Court utilize the",
        "options": ["It must automatically strike down the statute for being",".","It must return the statute to Parliament for redrafting.","It must read down the statute (Doctrine of Reading Down)—choosing the narrower interpretation that aligns with constitutional boundaries to salvage the legislation, rather than adopting the broader unconstitutional interpretation that would require striking it down.","It assumes the unconstitutional interpretation is what Parliament intended."],
        "correctAnswerIndex": 2,
        "explanation": "Courts hate striking down laws (counter-majoritarian difficulty). If a law says"
    },
    {
        "id": "ch27-l3-q15",
        "question": "Assertion (A): The power of Judicial Review cannot be used to force the Executive or Legislature to introduce a specific bill or law into Parliament.\\nReason (R): Because doing so would violate the Doctrine of Separation of Powers, as legislating is strictly the domain of the legislative branch.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "A court can strike down a bad law. A court can issue guidelines (Vishakha case) to fill a vacuum. BUT, a court CANNOT issue a Writ of Mandamus ordering Parliament:"
    },
    {
        "id": "ch27-l3-q16",
        "question": "If a petitioner challenges a newly enacted",
        "options": ["The petitioner must prove both the violation and the unreasonableness of the law.","The State must immediately prove the petitioner is a national security threat.","First, the petitioner must objectively prove that their fundamental right (Art 19) is infringed by the law. Once that is established, the burden shifts entirely to the State to prove that the law falls squarely within the","(Art 19(2))—like public order or security of the state.","The burden remains on the President throughout the hearing."],
        "correctAnswerIndex": 2,
        "explanation": "This is the mechanics of a Part III challenge. You (the citizen) prove:"
    },
    {
        "id": "ch27-l3-q17",
        "question": "Consider the challenge to the Aadhaar Act (K.S. Puttaswamy II). One of the primary grounds for Judicial Review was an alleged procedural illegality regarding how the bill was passed. What was this specific constitutional contention?",
        "options": ["That it was passed during a Midnight Session without President","That it was unconstitutionally certified and passed as a","(Article 110) by the Speaker of the Lok Sabha, intentionally bypassing the Rajya Sabha","That it was passed without the required ratification by half the State Legislatures.","That it was passed using a joint sitting (Article 108) which is forbidden for privacy laws."],
        "correctAnswerIndex": 1,
        "explanation": "The government lacked a majority in the Rajya Sabha. To pass the controversial Aadhaar Act, the Speaker labelled it a"
    },
    {
        "id": "ch27-l3-q18",
        "question": "How does the",
        "options": ["It prohibits the Supreme Court from hearing cases involving politicians.","It prevents the Court from reviewing laws passed by a coalition government.","The Court sometimes refuses to adjudicate disputes that are inherently entirely political in nature, lacking judicially manageable standards for resolution (e.g., recognizing a foreign government, or signing a peace treaty), deferring to the competence of the elected Executive.","It forces the Court to consult political parties before delivering a verdict."],
        "correctAnswerIndex": 2,
        "explanation": "If you file a PIL asking the Supreme Court to"
    },
    {
        "id": "ch27-l3-q19",
        "question": "Assertion (A): In India, unlike the UK Constitution, the concept of",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "In the UK, Parliament is totally sovereign—it can make or unmake any law (no written constitution limits it). In India, Parliament cannot do whatever it wants. It cannot pass a law taking away the Right to Life without a process. It cannot pass a law on a State subject. The Constitution is Sovereign, not Parliament. Judicial Review is the tool used to remind Parliament of its limits."
    },
    {
        "id": "ch27-l3-q20",
        "question": "Evaluate the power of Judicial Review over",
        "options": ["If the Court feels the criminal is dangerous and the pardon is immoral.","Pardoning power is absolute and completely immune from Judicial Review under all circumstances.","The Court can review a pardon if it was granted on the basis of extraneous/irrelevant considerations (political affiliation, caste), was arbitrary,","(bad faith), or if relevant materials were kept away from the President/Governor.","If the pardon was not approved by a 2/3rds majority of Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "Even the highest act of executive mercy (pardoning a murderer on death row) is NOT immune from Judicial Review. The SC won"
    }
];

export const CHAPTER_27_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
