import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch28-l1-q1",
        "question": "In which country did the concept of",
        "options": ["United Kingdom","United States of America","France","India"],
        "correctAnswerIndex": 1,
        "explanation": "The concept of judicial activism originated and developed in the USA."
    },
    {
        "id": "ch28-l1-q2",
        "question": "Who is credited with coining the term",
        "options": ["Justice John Marshall","Arthur Schlesinger Jr.","Justice V.R. Krishna Iyer","Upendra Baxi"],
        "correctAnswerIndex": 1,
        "explanation": "This term was coined by Arthur Schlesinger Jr., an American historian and educator, in 1947."
    },
    {
        "id": "ch28-l1-q3",
        "question": "In India, during which decade was the doctrine of Judicial Activism primarily introduced?",
        "options": ["Mid-1950s","Mid-1960s","Mid-1970s","Mid-1990s"],
        "correctAnswerIndex": 2,
        "explanation": "In India, the doctrine of judicial activism was introduced in mid-1970s."
    },
    {
        "id": "ch28-l1-q4",
        "question": "Who among the following were the pioneers (founding fathers) of Judicial Activism in India?",
        "options": ["Justice H.R. Khanna and Justice M.H. Beg","Justice V.R. Krishna Iyer, Justice P.N. Bhagwati, Justice O. Chinnappa Reddy, and Justice D.A. Desai","Justice Y.V. Chandrachud and Justice A.N. Ray","Justice R.S. Sarkaria and Justice M.N. Venkatachaliah"],
        "correctAnswerIndex": 1,
        "explanation": "Justice V.R. Krishna Iyer, Justice P.N. Bhagwati, Justice O. Chinnappa Reddy and Justice D.A. Desai laid the foundations of judicial activism in the country."
    },
    {
        "id": "ch28-l1-q5",
        "question": "Judicial Activism denotes the proactive role played by the judiciary in:",
        "options": ["Protecting the rights of citizens and promoting justice in society.","Usurping the powers of the President.","Rewriting the Constitution without parliamentary approval.","Running the day-to-day administration of the states."],
        "correctAnswerIndex": 0,
        "explanation": "Judicial activism denotes the proactive role played by the judiciary in the protection of the rights of citizens and in the promotion of justice in the society."
    },
    {
        "id": "ch28-l1-q6",
        "question": "Judicial Activism is sometimes also referred to as:",
        "options": ["Judicial Despotism","Judicial Dynamism","Judicial Stagnation","Judicial Conservatism"],
        "correctAnswerIndex": 1,
        "explanation": "It is also known as"
    },
    {
        "id": "ch28-l1-q7",
        "question": "Judicial Activism is considered the exact opposite of which of the following concepts?",
        "options": ["Judicial Review","Judicial Independence","Judicial Restraint","Judicial Transparency"],
        "correctAnswerIndex": 2,
        "explanation": "It is the antithesis of"
    },
    {
        "id": "ch28-l1-q8",
        "question": "Which of the following closely related mechanisms is considered the primary",
        "options": ["Advisory Jurisdiction (Article 143)","Original Jurisdiction (Article 131)","Public Interest Litigation (PIL)","Special Leave Petition (Article 136)"],
        "correctAnswerIndex": 2,
        "explanation": "Judicial activism is closely related to the concept of Public Interest Litigation (PIL). Actually, PIL is the most popular form of judicial activism."
    },
    {
        "id": "ch28-l1-q9",
        "question": "What is the primary justification often given by the Judiciary when it steps into areas traditionally belonging to the executive or legislature?",
        "options": ["The Judiciary has superior intelligence.","Collapse of the responsible government or",".","The Constitution explicitly orders the judiciary to run the country.","To increase the salary of judges."],
        "correctAnswerIndex": 1,
        "explanation": "One of the main justifications is the collapse of the responsible government. When the legislature fails to make the necessary legislation and the executive fails to perform its administrative functions, the judiciary steps in to protect citizens"
    },
    {
        "id": "ch28-l1-q10",
        "question": "What does the term",
        "options": ["It forces the court to stop reviewing a state law.","It holds the government accountable to its promises made to citizens or corporations, preventing it from arbitrarily backing out.","It stops the President from declaring an emergency.","It stops a judge from resigning."],
        "correctAnswerIndex": 1,
        "explanation": "Under the activism phase, the SC expanded doctrines like"
    },
    {
        "id": "ch28-l1-q11",
        "question": "Which concept implies that the court should strictly interpret the laws enacted by the legislature and not substitute its own policy views?",
        "options": ["Judicial Activism","Judicial Restraint","Judicial Creativity","Judicial Dynamism"],
        "correctAnswerIndex": 1,
        "explanation": "Judicial restraint means courts should interpret the laws and not make them. Judges should stick to interpreting the law as written by the legislature."
    },
    {
        "id": "ch28-l1-q12",
        "question": "Which constitutional doctrine is most commonly cited as being threatened or violated when Judicial Activism turns into",
        "options": ["Rule of Law","Separation of Powers","Bicameralism","Universal Adult Franchise"],
        "correctAnswerIndex": 1,
        "explanation": "When judicial activism crosses its limits and becomes judicial adventurism, it is known as judicial overreach. This is criticized for disturbing the balance of power among the three organs of the state, violating the Doctrine of Separation of Powers."
    },
    {
        "id": "ch28-l1-q13",
        "question": "The enthusiasm of citizens to approach the courts for securing their rights and improving public administration is a major cause of judicial activism. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, citizens"
    },
    {
        "id": "ch28-l1-q14",
        "question": "According to Dr. Vandana, which of the following is considered a positive outcome of Judicial Activism?",
        "options": ["It delays the legislative process.","It provides a system of checks and balances to the other branches of government when they fail.","It makes judges more powerful than politicians.","It abolishes the need for a Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "Judicial activism provides a system of checks and balances where the judiciary can rectify the failures of the legislative and executive branches, ensuring justice is delivered."
    },
    {
        "id": "ch28-l1-q15",
        "question": "In the context of the expansion of rights by the Supreme Court, the Right to Privacy, Right to Clean Environment, and Right to Speedy Trial have all been judicially read into which Article of the Constitution?",
        "options": ["Article 14","Article 19","Article 21","Article 32"],
        "correctAnswerIndex": 2,
        "explanation": "Through judicial activism, the SC has heavily expanded the scope of Article 21 (Protection of Life and Personal Liberty) to include the right to privacy, clean environment, speedy trial, free legal aid, etc."
    },
    {
        "id": "ch28-l1-q16",
        "question": "Which of the following is NOT an attribute of Judicial Restraint?",
        "options": ["Judges should look to the original intent of the writers of the Constitution.","Judges should respect","(past precedents).","Legislatures, not courts, should make policy decisions.","Judges should actively seek out social problems and create new laws to fix them."],
        "correctAnswerIndex": 3,
        "explanation": "Actively seeking out social problems to fix by creating new laws is the hallmark of judicial activism, not restraint. Restraint emphasizes deference to the elected branches."
    },
    {
        "id": "ch28-l1-q17",
        "question": "The Supreme Court issuing guidelines to prevent sexual harassment at the workplace in the Vishakha case (1997) is a classic example of:",
        "options": ["Judicial Restraint","Judicial Activism filling a legislative vacuum","Original Jurisdiction","Appellate Jurisdiction"],
        "correctAnswerIndex": 1,
        "explanation": "Because there was no law by Parliament regarding sexual harassment at workplaces, the Supreme Court used judicial activism to lay down binding guidelines (Vishakha Guidelines) to fill this legislative vacuum until Parliament passed a law (which happened in 2013)."
    },
    {
        "id": "ch28-l1-q18",
        "question": "When the Supreme Court directed the Centre to distribute food grains rotting in godowns to the poor, this was criticized by some as an example of:",
        "options": ["Judicial Review","Judicial Restraint","Judicial Overreach (entering executive policy domain)","Judicial Pardon"],
        "correctAnswerIndex": 2,
        "explanation": "While motivated by welfare, directing the exact distribution of food grains is strictly an executive/administrative function. Critics point to such detailed administrative directions as instances where judicial activism borders on"
    },
    {
        "id": "ch28-l1-q19",
        "question": "Which organ of the state is primarily responsible for law-making under the doctrine of Separation of Powers, which judicial restraint seeks to protect?",
        "options": ["The Judiciary","The Executive","The Legislature","The Media"],
        "correctAnswerIndex": 2,
        "explanation": "Under the Doctrine of Separation of Powers, law-making is the exclusive domain of the Legislature."
    },
    {
        "id": "ch28-l1-q20",
        "question": "Upendra Baxi notes that Judicial Activism is closely associated with which kind of jurisprudence?",
        "options": ["Colonial Jurisprudence","Social Action Litigation / Public Interest Jurisprudence","Martial Law Jurisprudence","Corporate Jurisprudence"],
        "correctAnswerIndex": 1,
        "explanation": "In India, judicial activism is intimately connected with Public Interest Litigation (PIL), which Prof. Upendra Baxi prefers to call"
    },
    {
        "id": "ch28-l1-q21",
        "question": "A broad, progressive interpretation of the Constitution to adapt it to changing social realities is a characteristic of:",
        "options": ["Judicial Restraint","Judicial Conservatism","Judicial Activism","Strict Constructionism"],
        "correctAnswerIndex": 2,
        "explanation": "Judicial activism involves interpreting the Constitution broadly and progressively to meet the needs of a changing society, rather than sticking rigidly to a literal or originalist interpretation."
    },
    {
        "id": "ch28-l1-q22",
        "question": "The power to punish for its own Contempt (Article 129) provides the Supreme Court the authority to effectively enforce its",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, if the executive ignores the guidelines or orders passed by the Court during its activist interventions, the Court can use its contempt powers to force compliance."
    },
    {
        "id": "ch28-l1-q23",
        "question": "Which of the following is an argument OFTEN used AGAINST Judicial Activism?",
        "options": ["It protects minority rights.","It acts as a safety valve for public grievances.","Judges are not elected and thus lack democratic accountability to make broad policy decisions.","It accelerates the delivery of justice."],
        "correctAnswerIndex": 2,
        "explanation": "A major criticism is the"
    },
    {
        "id": "ch28-l1-q24",
        "question": "The concept of",
        "options": ["Appoint the Prime Minister.","Review and strike down Constitutional Amendments passed by the Parliament.","Dissolve State Assemblies at will.","Draft the Union Budget."],
        "correctAnswerIndex": 1,
        "explanation": "By creating the"
    },
    {
        "id": "ch28-l1-q25",
        "question": "When the Supreme Court issues an order asking the government to interlink rivers, critics point out that the Court lacks ____ to decide such complex technical and economic matters.",
        "options": ["Jurisdiction","Expertise and financial accountability","Contempt powers","Writ powers"],
        "correctAnswerIndex": 1,
        "explanation": "Judges are experts in law, not hydrology or economics. Critiques of overreach argue that courts lack the technical expertise to formulate complex policies like river interlinking, and they don"
    },
    {
        "id": "ch28-l1-q26",
        "question": "The phenomenon where the Judiciary takes over the administrative functions of the executive (e.g., monitoring the daily progress of a criminal investigation in hawala scams) is termed as carrying out a:",
        "options": ["Continuing Mandamus","Writ of Certiorari","Writ of Quo Warranto","Curative Petition"],
        "correctAnswerIndex": 0,
        "explanation": "In cases of systemic executive failure (like massive corruption investigations where politicians try to stall police), the Court doesn"
    },
    {
        "id": "ch28-l1-q27",
        "question": "Subhash Kashyap observed that",
        "options": ["Judicial Restraint","Judicial Review","Legislative Drafting","Administrative action"],
        "correctAnswerIndex": 1,
        "explanation": "Judicial activism is essentially an aggressive or proactive application of the power of judicial review."
    },
    {
        "id": "ch28-l1-q28",
        "question": "Which of the following scenarios best demonstrates",
        "options": ["The Court ordering the construction of new hospitals.","The Court ruling that creating a specific reservation policy is the job of the Legislature, refusing to mandate it.","The Court setting the pricing formula for Covid vaccines.","The Court cancelling 2G spectrum licenses."],
        "correctAnswerIndex": 1,
        "explanation": "Declining to intervene in a highly debated policy matter (like specifics of reservation quotas or economic policy) and stating"
    },
    {
        "id": "ch28-l1-q29",
        "question": "According to former CJI A.S. Anand, what is the danger if the Judiciary crosses the lakshman rekha (boundary) set by the Constitution?",
        "options": ["It will lead to a military coup.","It will cause \\","and a constitutional crisis.","It will make the Constitution stronger.","It will save the country"],
        "correctAnswerIndex": 1,
        "explanation": "Many judges have warned against overreach. If the judiciary constantly dictates to the executive and legislature, it leads to"
    },
    {
        "id": "ch28-l1-q30",
        "question": "Which Article of the Constitution requires the state to take steps to separate the judiciary from the executive in the public services of the State?",
        "options": ["Article 40","Article 50","Article 51","Article 21"],
        "correctAnswerIndex": 1,
        "explanation": "Article 50 (a Directive Principle) explicitly calls for the separation of the judiciary from the executive to ensure judicial independence, a foundational prerequisite for the judiciary to be able to act proactively without fear or favor."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch28-l2-q1",
        "question": "Analyze the fundamental distinction between",
        "options": ["Judicial Review is practiced by the High Courts, while Judicial Activism is the exclusive domain of the Supreme Court.","Judicial Review is purely a reactive process of testing the constitutionality of a law when challenged; Judicial Activism implies a proactive judicial posture, often shaping policy, filling legislative vacuums, or monitoring executive agencies (e.g., via Continuing Mandamus) to enforce structural rights.","Judicial Review can only strike down laws, whereas Judicial Activism allows the Court to formally pass new Acts of Parliament.","Judicial Review is explicitly mentioned in the Constitution, whereas Judicial Activism in India is entirely based on American precedents."],
        "correctAnswerIndex": 1,
        "explanation": "Classical Judicial Review is negative:"
    },
    {
        "id": "ch28-l2-q2",
        "question": "Consider the profound impact of the",
        "options": ["The traditional rule allowed only wealthy citizens to litigate. The SC altered it to allow only BPL (Below Poverty Line) citizens to approach the courts.","The traditional rule (Locus Standi) dictated that ONLY the person whose rights were personally violated could approach the court. The SC relaxed this heavily via Public Interest Litigation (PIL), allowing any public-spirited citizen/NGO to petition on behalf of marginalized groups who cannot afford to approach the courts themselves.","The tradition was that only the State could prosecute. The SC allowed private citizens to prosecute criminal cases directly in the Supreme Court.","The traditional rule required a lawyer to file a case. The SC mandated that citizens must argue their own cases."],
        "correctAnswerIndex": 1,
        "explanation": "This was the spark that ignited Judicial Activism. Under old British common law (strict locus standi), if a bonded laborer in a quarry was exploited, *only* he could sue the owner (impossible, given he was poor and uneducated). Justices Bhagwati and Krishna Iyer changed the rules:"
    },
    {
        "id": "ch28-l2-q3",
        "question": "Evaluate the scenario where the Supreme Court issues a directive to the Central Government to permanently ban the sale of specific diesel vehicles in Delhi-NCR citing the",
        "options": ["Judicial Restraint, as it respects the executive","Judicial Overreach, because balancing environmental concerns against economic impacts, employment, and industrial policy is intrinsically an executive/legislative function requiring domain expertise that courts lack.","Constitutional Amendment, as it permanently alters Article 21.","Original Jurisdiction under Article 131."],
        "correctAnswerIndex": 1,
        "explanation": "When courts move from checking legality to dictating complex, multi-variable administrative policy (like what type of fuel engines to ban, which directly impacts the auto industry and economy), they cross the"
    },
    {
        "id": "ch28-l2-q4",
        "question": "How did the concept of",
        "options": ["It allowed the Supreme Court to permanently disband the CBI.","It empowered the Court to not just issue a single order to investigate, but to keep the case","on its docket, requiring the agency to submit regular status reports directly to the Court, preventing political interference in high-profile corruption probes (e.g., Jain Hawala or 2G scam).","It forced the CBI Director to be appointed only from a pool of retired Supreme Court judges.","It mandated that all CBI investigations must be conducted publicly on live television."],
        "correctAnswerIndex": 1,
        "explanation": "Normally, a court issues a"
    },
    {
        "id": "ch28-l2-q5",
        "question": "Assertion (A): Judicial Activism in India has frequently relied upon a broad, expansive reading of the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is the signature technique of Indian activism. DPSPs (like the right to health or early childhood care) are"
    },
    {
        "id": "ch28-l2-q6",
        "question": "Consider the",
        "options": ["Because it was copied directly from the American Constitution without any parliamentary debate.","Because the Court effectively","Article 368 by reading an","on Parliament","s core.","Because it immediately forced the resignation of the Prime Minister.","Because it declared that the Supreme Court could abolish the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 368 simply says"
    },
    {
        "id": "ch28-l2-q7",
        "question": "According to former CJI Dr. A.S. Anand, what is the primary danger when courts cross the fine line from Judicial Activism into",
        "options": ["It will lead to a rapid increase in the number of pending cases, bankrupting the court system.","Unelected judges lack the democratic mandate to run the administration; if they fail in policy implementation, the public cannot vote them out, thereby eroding the institutional legitimacy of the Judiciary and violating the Doctrine of Separation of Powers.","It usually results in the immediate imposition of a Financial Emergency under Article 360.","It violates international treaties signed by the Executive."],
        "correctAnswerIndex": 1,
        "explanation": "Judges don"
    },
    {
        "id": "ch28-l2-q8",
        "question": "Examine the",
        "options": ["It removed the requirement for the government to hire a lawyer; anyone could appear as the Attorney General.","It allowed High Courts to appeal directly to the International Court of Justice.","It removed the strict procedural requirement of filing a formal, expensive Writ Petition. The Court began treating mere letters, telegrams, and postcards sent by prisoners, journalists, or NGOs as constitutional writ petitions, bypassing procedural red tape.","It removed the requirement for judges to write their judgments in English, allowing local languages."],
        "correctAnswerIndex": 2,
        "explanation": "Before activism, filing a case in the SC required expensive lawyers drafting complex English documents ("
    },
    {
        "id": "ch28-l2-q9",
        "question": "In the context of environmental jurisprudence, the Supreme Court has heavily relied on principles like the",
        "options": ["By strictly applying only the laws passed by the Indian Parliament regarding pollution control.","By importing evolving norms of","and reading them into the domestic framework of Article 21 (Right to Life), essentially creating new substantive environmental obligations for industries that were not explicitly mandated by domestic statutes.","By establishing new environmental courts in every district without parliamentary sanction.","By ordering the complete shutdown of all coal power plants in India indefinitely."],
        "correctAnswerIndex": 1,
        "explanation": "Activist courts don"
    },
    {
        "id": "ch28-l2-q10",
        "question": "A significant critique of Judicial Activism is that it can lead to",
        "options": ["The Judiciary physically occupies government offices, preventing work.","Bureaucrats become fearful of taking bold or innovative administrative decisions (even if legally sound) because they apprehend constant, unpredictable judicial second-guessing, PILs, and potential contempt notices, leading them to delay action or push decisions down the line.","The Judiciary rewrites the official budget, denying funds to key ministries.","The Judiciary automatically fires any civil servant whose policy they disagree with."],
        "correctAnswerIndex": 1,
        "explanation": "If every time a Secretary allocates a coal block or highway contract a PIL is filed and the SC stays the project for 5 years, bureaucrats become risk-averse. They decide it"
    },
    {
        "id": "ch28-l2-q11",
        "question": "Which of the following scenarios best illustrates the Supreme Court addressing a",
        "options": ["Striking down the NJAC Act because it violated the Basic Structure.","Issuing a stay order on the implementation of a newly passed Farm Law due to farmer protests.","Formulating detailed operational","in the D.K. Basu case regarding the exact procedures police must follow during arrests and detentions, binding on all police stations nationwide, because the CrPC was deemed insufficient.","Overruling its own previous judgment in a subsequent case."],
        "correctAnswerIndex": 2,
        "explanation": "Judicial Review strikes down bad laws (like NJAC). Activism *creates* rules where *no adequate law* exists. In D.K. Basu, the Court noted rampant custodial torture and a lack of procedural safeguards in the old Police Acts. Instead of just telling Parliament"
    },
    {
        "id": "ch28-l2-q12",
        "question": "Assertion (A): The principle of",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are completely false."
    },
    {
        "id": "ch28-l2-q13",
        "question": "Evaluate the phenomenon of",
        "options": ["The principle of Double Jeopardy.","The Doctrine of Separation of Powers.","The principle of Federalism.","The Right against Self-Incrimination."],
        "correctAnswerIndex": 1,
        "explanation": "Deciding what type of fuel public buses should use involves complex trade-offs: the cost of CNG infrastructure, the impact on bus fares, the availability of fuel, against the health benefits. This is quintessentially an"
    },
    {
        "id": "ch28-l2-q14",
        "question": "In the context of Judicial Activism, what is the primary structural vulnerability of the Supreme Court when it issues sweeping socio-economic directives (like ordering the cleaning of the River Ganga)?",
        "options": ["The Court cannot force the President to sign the order.","The Court has","(as Hamilton observed). It lacks the raw executive machinery (bureaucracy/police) to physically implement complex projects on the ground and lacks the financial control to allocate the billions of rupees required, often rendering its sweeping orders toothless or symbolic.","The Court","The Court can only issue such orders once every five years."],
        "correctAnswerIndex": 1,
        "explanation": "A judge can write an elegant 200-page order saying"
    },
    {
        "id": "ch28-l2-q15",
        "question": "How did the",
        "options": ["It ruled that only the Supreme Court could amend the Constitution.","It aggressively asserted that Fundamental Rights are","and completely unamendable, successfully challenging Parliament","It declared that all state governments must be abolished and ruled from New Delhi.","It ruled that the Prime Minister must consult the CJI before deploying the army."],
        "correctAnswerIndex": 1,
        "explanation": "Prior to 1967 (in Shankari Prasad etc.), the SC exercised restraint, saying"
    },
    {
        "id": "ch28-l2-q16",
        "question": "Consider the critique regarding the",
        "options": ["PILs are judged by a computer algorithm, removing the human element.","Because PILs often lack a specific, aggrieved individual plaintiff arguing a narrow personal injury, the","is ill-defined. This allows individual judges significant ideological leeway to pick and choose which societal","they subjectively wish to champion, leading to inconsistent jurisprudence driven by the personal philosophy of the bench (",").","PILs require the unanimous agreement of all 34 Supreme Court judges to proceed.","PILs can only tackle environmental issues, not political ones."],
        "correctAnswerIndex": 1,
        "explanation": "If you sue your neighbor over a fence, the dispute is factual and narrow. But if an NGO files a PIL saying"
    },
    {
        "id": "ch28-l2-q17",
        "question": "What was the core constitutional philosophy of",
        "options": ["To ensure foreign corporations received quick justice in international disputes.","To use the Supreme Court as a tool to democratize access to justice, transforming it from an","into an institution that actively works to emancipate the impoverished, illiterate, and bonded laborers from socio-economic exploitation.","To primarily punish corrupt politicians and send them to jail as fast as possible.","To establish a parallel police force run directly by the Judiciary."],
        "correctAnswerIndex": 1,
        "explanation": "The post-Emergency Supreme Court wanted to regain its legitimacy with the masses. Bhagwati and Krishna Iyer believed the Anglo-Saxon legal system was too rigid for a poor country like India. SAL (or PIL) was their philosophy to weaponize the Constitution for the poorest of the poor, turning the Court into a proactive agency for social justice rather than a passive umpire for the rich."
    },
    {
        "id": "ch28-l2-q18",
        "question": "A state government completely fails to enforce the existing factory safety laws, resulting in a tragic disaster. An NGO files a PIL. The Supreme Court issues sweeping orders managing the relief operations, penalizing the factory owners directly, and setting up a monitoring committee. What justifies this activist intervention?",
        "options": ["The concept of","over state authorities.","The legal doctrine of",".","The","to perform its statutory duties, which fundamentally endangers the constitutionally guaranteed Right to Life (Article 21) of the citizens, compelling the Court to step into the administrative void to prevent further rights violations.","The Court"],
        "correctAnswerIndex": 2,
        "explanation": "The most robust defense of judicial activism occurs when the executive is paralyzed, corrupt, or incompetent. If the government fails to inspect unsafe factories and people die, their Article 21 rights are crushed. The Court justifies its intervention not as"
    },
    {
        "id": "ch28-l2-q19",
        "question": "When discussing Judicial Activism, critics often quote the phrase",
        "options": ["Judges asking too many questions during oral arguments.","Judges interpreting a law so creatively that they effectively rewrite its text to fit their own policy preferences, essentially bypassing the democratic process of parliamentary debate and amendment.","Judges reviewing the budget of the High Courts.","Judges recommending other judges for appointment in the Collegium."],
        "correctAnswerIndex": 1,
        "explanation": "If Parliament writes a law saying X, but a judge thinks"
    },
    {
        "id": "ch28-l2-q20",
        "question": "Assertion (A): The Supreme Court",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a classic modern debate. The SC essentially took over the BCCI (a massive, private society running cricket) to"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch28-l3-q1",
        "question": "Examine the philosophical underpinnings of Judicial Activism as articulated by Professor Upendra Baxi. How does he differentiate the traditional",
        "options": ["The traditional model is entirely inquisitorial (judge actively investigates), whereas SAL is strictly adversarial (judge is a passive umpire between equals).","The traditional model focuses exclusively on macro-economic policy formulation, whereas SAL focuses purely on individual contractual disputes between private citizens.","The traditional model is characterized by a passive, adversarial system designed for formal dispute resolution between relatively equal parties; SAL transforms the court into an active, pro-active participant addressing systemic, institutionalized socio-economic injustices suffered by marginalized groups completely incapable of accessing the formal legal system.","The traditional model relies heavily on unwritten conventions, while SAL relies strictly on the literal wording of the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "Baxi argued that the British system we inherited assumed two equals fighting over property (Adversarial). But in India, it"
    },
    {
        "id": "ch28-l3-q2",
        "question": "A cornerstone of robust Judicial Activism in the 1990s was the invocation of the",
        "options": ["It asserts that all citizens must implicitly trust the elected government","It establishes that the State is merely a trustee of all natural resources (rivers, forests, seashores) which are meant for public use and enjoyment; the State is constitutionally barred from transferring these resources to private entities for commercial exploitation if it substantially impairs the public interest.","It mandates that the Chief Justice of India must personally approve all government tenders regarding mining leases.","It gives the President absolute discretionary power to declare any forest land as private property."],
        "correctAnswerIndex": 1,
        "explanation": "In the Kamal Nath case, a politician built a motel encroaching on exactly the path of the Beas River, changing its course. The SC intervened powerfully. They brought in the ancient Roman"
    },
    {
        "id": "ch28-l3-q3",
        "question": "Assertion (A): Article 142 (Complete Justice) is frequently deployed as the ultimate constitutional weapon of Judicial Activism, allowing the Supreme Court to pass orders overcoming statutory silences or procedural gridlocks.\\nReason (R): Because the phrase",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 2,
        "explanation": "The Assertion (A) is true; Art 142 is a massive tool for activism (e.g., ordering the transfer of the Babri Mosque title, or dissolving a marriage). However, the Reason (R) is false. The Supreme Court Bar Association case (1998) and later rulings firmly established that while Art 142 is powerful, it is NOT"
    },
    {
        "id": "ch28-l3-q4",
        "question": "Consider the constitutional ramifications of",
        "options": ["Articles 13, 21, and 368.","Articles 14, 19, and 21 (The Golden Triangle).","Articles 32, 141, and 142 working synergistically, where the Court invokes its power to enforce fundamental rights (32), do complete justice (142), and decrees that its formulated rules are binding on all authorities across the territory (141) until Parliament enacts a statute.","Articles 72, 123, and 213 relating to ordinances and pardons."],
        "correctAnswerIndex": 2,
        "explanation": "This is exactly how the"
    },
    {
        "id": "ch28-l3-q5",
        "question": "Evaluate the tension between Judicial Activism and the",
        "options": ["They argue that judges are better educated than politicians and thus naturally make superior economic policies.","They contend that the Constitution is merely a set of non-binding guidelines, allowing judges absolute freedom.","They argue that in a flawed democracy characterized by executive apathy, criminalization of politics, and systemic oppression of minorities (who cannot win elections), the unelected Judiciary is the ONLY constitutional organ capable of protecting fundamental rights (countering the","), fulfilling its true democratic mandate.","They argue that Judicial Activism is universally mandated by the United Nations Charter."],
        "correctAnswerIndex": 2,
        "explanation": "The counter-majoritarian difficulty asks:"
    },
    {
        "id": "ch28-l3-q6",
        "question": "Examine the concept of the",
        "options": ["Because it severely weakened the powers of the State Legislative Assemblies.","Originalists argue that the doctrine is fundamentally anti-democratic activism because it allows unelected judges to strike down constitutional amendments (reflecting the contemporary will of the people) based on nebulous, unwritten","concepts of the Constitution invented by the Court, rather than adhering to the explicit text of Article 368.","Because it granted the President the unprecedented power to dissolve the Supreme Court.","Because it forced the government to abandon its socialist economic planning."],
        "correctAnswerIndex": 1,
        "explanation": "Originalists believe that if words aren"
    },
    {
        "id": "ch28-l3-q7",
        "question": "How did the evolving interpretation of",
        "options": ["It transformed the Court exclusively into a criminal trial court seeking monetary damages.","It shifted the Court","It mandated that all Supreme Court judgments must be approved by a national referendum.","It forced the Court to entirely abandon the use of established precedents."],
        "correctAnswerIndex": 1,
        "explanation": "Traditional litigation is"
    },
    {
        "id": "ch28-l3-q8",
        "question": "Assertion (A): The invocation of the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a masterpiece of Indian activism by Justice Bhagwati. In England,"
    },
    {
        "id": "ch28-l3-q9",
        "question": "Consider the phenomenon of",
        "options": ["Striking down the controversial Electoral Bonds scheme for violating Article 19(1)(a) regarding the right to information.","Quashing a political appointment to a statutory body due to the total failure of the executive to verify the appointee","The Supreme Court directing the National Highway Authority to physically redesign a specific highway toll plaza in a particular state, dictating the exact number of lanes and the specific electronic toll collection technology to be utilized to alleviate traffic jams.","Issuing a writ of habeas corpus for an illegally detained journalist."],
        "correctAnswerIndex": 2,
        "explanation": "Options A, B, and D are classic Judicial Review—protecting fundamental rights or checking blatant illegality. Option C is textbook Overreach. The Supreme Court has no expertise in highway engineering, traffic flow analysis, or the budgetary constraints of the NHAI. Dictating the physical layout of a toll plaza is stepping entirely away from interpreting law and directly executing administrative policy."
    },
    {
        "id": "ch28-l3-q10",
        "question": "Evaluate the role of",
        "options": ["The Amicus is meant to act as the primary defense lawyer for the Central Government to ensure policies are not struck down.","The Amicus functions solely to review the judgments of lower courts and recommend which judge should be promoted.","The Court appoints an independent senior advocate or expert as an Amicus to act as its extended arm; the Amicus objectively investigates facts on the ground, synthesizes massive administrative data, and advises the Court on formulating complex, viable long-term policy guidelines (e.g., forest conservation), compensating for the Court","The Amicus is a political appointee confirmed by the Rajya Sabha to oversee the Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "Because courts don"
    }
];

export const CHAPTER_28_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
