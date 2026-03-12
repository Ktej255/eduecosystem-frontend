import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch29-l1-q1",
        "question": "In which country did the concept of Public Interest Litigation (PIL) originate and develop in the 1960s?",
        "options": ["United Kingdom","United States of America","India","Canada"],
        "correctAnswerIndex": 1,
        "explanation": "The concept of Public Interest Litigation (PIL) originated and developed in the USA in the 1960s."
    },
    {
        "id": "ch29-l1-q2",
        "question": "In the context of its origins in the USA, PIL was initially designed to provide legal representation to which groups?",
        "options": ["Multinational Corporations","Foreign Governments","Previously unrepresented groups like the poor, racial minorities, and environmentalists","High net-worth individuals"],
        "correctAnswerIndex": 2,
        "explanation": "In the USA, it was designed to provide legal representation to previously unrepresented groups and interests, such as the poor, environmentalists, consumers, and racial minorities."
    },
    {
        "id": "ch29-l1-q3",
        "question": "What alternative term did Justice V.R. Krishna Iyer prefer to use instead of",
        "options": ["Class Action Litigation","Social Action Litigation (SAL)","Private Interest Litigation","Constitutional Action Litigation"],
        "correctAnswerIndex": 1,
        "explanation": "In India, PIL is also known as Social Action Litigation (SAL), Social Interest Litigation (SIL) and Class Action Litigation (CAL). Justice Krishna Iyer and Prof. Upendra Baxi preferred the term"
    },
    {
        "id": "ch29-l1-q4",
        "question": "The traditional rule of",
        "options": ["Anyone can file a case on behalf of anyone else.","Only the person whose rights are directly violated (the aggrieved person) can approach the court for a remedy.","Only lawyers can file cases, not citizens.","Only the government can approach the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The traditional rule of locus standi means that only the aggrieved person (the person whose rights have been violated) can approach the court for a remedy."
    },
    {
        "id": "ch29-l1-q5",
        "question": "Public Interest Litigation (PIL) is fundamentally an exception to which traditional legal rule?",
        "options": ["Habeas Corpus","Stare Decisis","Locus Standi","Double Jeopardy"],
        "correctAnswerIndex": 2,
        "explanation": "PIL is an exception to the traditional rule of locus standi. Under PIL, any public-spirited citizen can move the court on behalf of others."
    },
    {
        "id": "ch29-l1-q6",
        "question": "Under the principles of PIL in India, who is eligible to move the court for the enforcement of the rights of marginalized groups who cannot approach the court themselves?",
        "options": ["Only the victims","Only a registered political party","Any public-spirited citizen or social organization","Only a sitting High Court Judge"],
        "correctAnswerIndex": 2,
        "explanation": "Under PIL, any public-spirited citizen or social organization can move the court for the enforcement of the rights of any person or group who, because of poverty or ignorance, cannot approach the court themselves."
    },
    {
        "id": "ch29-l1-q7",
        "question": "Which of the following landmark cases is widely considered as laying the foundation of Public Interest Litigation in India (regarding undertrial prisoners)?",
        "options": ["Kesavananda Bharati case (1973)","Hussainara Khatoon case (1979)","Minerva Mills case (1980)","Golaknath case (1967)"],
        "correctAnswerIndex": 1,
        "explanation": "The Hussainara Khatoon case (1979), dealing with the agonizing conditions of thousands of undertrial prisoners languishing in Bihar jails, laid the foundation of PIL in India."
    },
    {
        "id": "ch29-l1-q8",
        "question": "Justices V.R. Krishna Iyer and P.N. Bhagwati are widely recognized as the pioneers of PIL in India. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, Justice V.R. Krishna Iyer and Justice P.N. Bhagwati were the pioneers of the concept of PIL in India."
    },
    {
        "id": "ch29-l1-q9",
        "question": "According to the Supreme Court guidelines, which of the following subjects is GENERALLY ENTERTAINED as a Public Interest Litigation?",
        "options": ["Landlord-Tenant disputes","Matters pertaining to neglected children","Service matters like pension and transfers","Admission to medical or engineering colleges"],
        "correctAnswerIndex": 1,
        "explanation": "According to SC guidelines, petitions pertaining to neglected children are entertained as PIL. Landlord-tenant, service matters, and college admissions are explicitly excluded."
    },
    {
        "id": "ch29-l1-q10",
        "question": "According to the Supreme Court guidelines on PIL, a petition seeking early hearing of a case pending in a High Court or Subordinate Court:",
        "options": ["Is a valid ground for a PIL.","Is NOT a valid ground for a PIL.","Is valid only if the delay is more than 10 years.","Is valid only if filed by a Senior Advocate."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court guidelines explicitly explicitly state that petitions for early hearing of cases pending in High Courts and Subordinate Courts will NOT be entertained as PILs."
    },
    {
        "id": "ch29-l1-q11",
        "question": "According to the Supreme Court",
        "options": ["Pecuniary (financial) or legal interest","Political interest only","Interest in overturning an election","Personal vengeance against an official"],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court defines it as a legal action initiated to enforce"
    },
    {
        "id": "ch29-l1-q12",
        "question": "Which of the following matters is explicitly EXCLUDED from being filed as a PIL according to the Supreme Court guidelines?",
        "options": ["Petitions against police for refusing to register FIRs","Petitions complaining of harassment on women","Petitions relating to Environmental pollution","Petitions regarding Landlord-Tenant matters"],
        "correctAnswerIndex": 3,
        "explanation": "Landlord-Tenant matters are strictly private disputes and are explicitly listed in the SC guidelines as subjects that will NOT be entertained as PILs."
    },
    {
        "id": "ch29-l1-q13",
        "question": "A PIL can be filed against the Central Government, State Governments, and Municipal Authorities, but it generally cannot be filed against:",
        "options": ["The Railways","The Police Department","A private party alone (unless a state authority is also involved)","A Government Hospital"],
        "correctAnswerIndex": 2,
        "explanation": "A PIL is filed against the"
    },
    {
        "id": "ch29-l1-q14",
        "question": "In the context of protecting the poor who cannot afford lawyers, PIL is described as a strategic arm of what major social movement in India?",
        "options": ["The Land Reform Movement","The Legal Aid Movement","The Cooperative Movement","The Panchayat Raj Movement"],
        "correctAnswerIndex": 1,
        "explanation": "PIL is considered a strategic arm of the legal aid movement. It brings justice within the reach of poor masses who are socially and economically disadvantaged."
    },
    {
        "id": "ch29-l1-q15",
        "question": "The",
        "options": ["Issue writs directly to Parliament.","Treat letters and telegrams addressed to the court as formal writ petitions.","Review the judgments of the Election Commission.","Summon the President for testimony."],
        "correctAnswerIndex": 1,
        "explanation": "Epistolary jurisdiction refers to the practice of the court treating mere letters, telegrams, or postcards sent by citizens directly to the judges as formal writ petitions, avoiding strict legal formatting."
    },
    {
        "id": "ch29-l1-q16",
        "question": "Which specific phrase did Justice P.N. Bhagwati explicitly use to describe litigation that is",
        "options": ["Class Action Suit","Social Action Litigation","Private Interest Litigation","Constitutional Litigation"],
        "correctAnswerIndex": 2,
        "explanation": "Justice Bhagwati warned that the court must not allow its process to be abused by politicians or others who file"
    },
    {
        "id": "ch29-l1-q17",
        "question": "One of the Supreme Court",
        "options": ["be automatically admitted as PILs.","NOT be entertained as PILs.","be transferred to the Education Ministry.","be decided by the President."],
        "correctAnswerIndex": 1,
        "explanation": "The guidelines explicitly list"
    },
    {
        "id": "ch29-l1-q18",
        "question": "A petition filed against the non-payment of minimum wages to workers is an acceptable ground for a PIL. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes,"
    },
    {
        "id": "ch29-l1-q19",
        "question": "Who is an",
        "options": ["The person who committed the crime.","The respondent state government","A","(usually an unbiased lawyer or expert) appointed to assist the court.","The main petitioner in the PIL."],
        "correctAnswerIndex": 2,
        "explanation": "An Amicus Curiae (Friend of the Court) is an independent lawyer or expert appointed by the Court to assist it impartially in investigating facts and formulating guidelines in complex PILs."
    },
    {
        "id": "ch29-l1-q20",
        "question": "Why does the Supreme Court insist on verifying the credentials of the petitioner before admitting a PIL?",
        "options": ["To ascertain if they can pay high court fees.","To ensure the petitioner relies on the","rule.","To ensure only certified lawyers file cases.","To prevent the judicial process from being abused by individuals acting for personal gain, private profit, political motive, or oblique consideration."],
        "correctAnswerIndex": 3,
        "explanation": "The SC guidelines dictate that courts must be fully satisfied that the petition has been filed to vindicate public interest and not to pursue a private feud or political motive. Verifying the credentials of the petitioner is step one."
    },
    {
        "id": "ch29-l1-q21",
        "question": "Under which Article(s) can a citizen directly move the Supreme Court and High Court respectively through a Public Interest Litigation?",
        "options": ["Articles 14 and 19","Articles 32 and 226","Articles 131 and 132","Articles 72 and 161"],
        "correctAnswerIndex": 1,
        "explanation": "A PIL is essentially a writ petition. It can be filed in the Supreme Court under Article 32 and in the High Courts under Article 226."
    },
    {
        "id": "ch29-l1-q22",
        "question": "In the context of PIL, the Supreme Court has clarified that",
        "options": ["Media should not report on court proceedings.","Courts should not publish their judgments.","People should not file frivolous PILs simply to get their names in the newspapers.","The government should not advertise its policies."],
        "correctAnswerIndex": 2,
        "explanation": "The court repeatedly warns against"
    },
    {
        "id": "ch29-l1-q23",
        "question": "Which of the following matters concerning the police is EXPLICITLY listed as something that WILL NOT be entertained as a PIL?",
        "options": ["Police torture or death in police custody","Issues relating to bonded labour","Petitions against police refusing to register a case (FIR)","Issues relating to neglected children"],
        "correctAnswerIndex": 2,
        "explanation": "According to the SC guidelines, if police refuse to register a case, the petitioner should use the CrPC route (approaching a Magistrate). Petitions against police refusing to register a case will NOT be entertained as PIL."
    },
    {
        "id": "ch29-l1-q24",
        "question": "The concept of PIL asserts that the courtroom is not just for formal dispute resolution between two parties, but is also a forum for:",
        "options": ["Passing new economic legislation.","Conducting criminal trials without evidence.","Socio-economic reform and vindication of public rights.","Overriding the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "PIL transforms the court into an active participant. It is not just about resolving a contract dispute; it is used as a tool for socio-economic reform and protecting the fundamental rights of the vulnerable masses."
    },
    {
        "id": "ch29-l1-q25",
        "question": "If an ordinary citizen reads a newspaper article about a severe environmental disaster affecting thousands and sends a telegram containing this clipping to a Supreme Court judge, can the court treat this as a PIL?",
        "options": ["No, an affidavit must be sworn.","No, only a formal writ petition on stamp paper is valid.","Yes, under its Epistolary Jurisdiction, it can treat the letter/telegram as a writ petition.","Yes, but only if the person sending it is the Chief Minister."],
        "correctAnswerIndex": 2,
        "explanation": "Yes, this is the very definition of Epistolary Jurisdiction. The Court relaxes formal procedural rules and can treat a letter, telegram, or newspaper clipping as a valid writ petition if it highlights a gross violation of fundamental rights."
    },
    {
        "id": "ch29-l1-q26",
        "question": "According to the Supreme Court guidelines on the abuse of PIL (Balwant Singh Chaufal case), what action should the Court take if it finds a PIL is completely frivolous and filed with an",
        "options": ["Transfer it to a High Court.","Dismiss it outright and impose exemplary costs (fines) on the petitioner.","Suspend the petitioner","Ask the Parliament to debate the issue."],
        "correctAnswerIndex": 1,
        "explanation": "To deter the filing of frivolous PILs that waste judicial time, the Supreme Court has ruled that courts should dismiss such petitions at the threshold and impose exemplary costs (heavy fines) on the petitioner."
    },
    {
        "id": "ch29-l1-q27",
        "question": "Cases relating to minimum wages of casual workers are explicitly part of the allowed category for Public Interest Litigation. True or False?",
        "options": ["True","False","Partially True","Cannot be determined"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, petitions for"
    },
    {
        "id": "ch29-l1-q28",
        "question": "Which of these matters will NOT be entertained as a PIL?",
        "options": ["Petitions from jails regarding unhygienic conditions","Petitions regarding non-payment of pension and gratuity to a retired government servant","Petitions involving environmental pollution","Petitions concerning atrocities on women"],
        "correctAnswerIndex": 1,
        "explanation": "Service matters concerning individual government servants (like pension, gratuity, transfer) are strictly excluded from the PIL category. The retired servant must approach the Administrative Tribunal or High Court directly."
    },
    {
        "id": "ch29-l1-q29",
        "question": "Unlike traditional litigation which is described as",
        "options": ["Retributive","Punitive","Non-adversarial or collaborative","Inquisitorial"],
        "correctAnswerIndex": 2,
        "explanation": "PIL is broadly non-adversarial or collaborative. The petitioner and the state are not supposed to fight strictly to"
    },
    {
        "id": "ch29-l1-q30",
        "question": "The Supreme Court has the power to take a case",
        "options": ["Taking action on a petition filed by the Prime Minister.","Relying exclusively on judgments of foreign courts.","Taking cognizance of a matter on its own initiative (e.g., after reading a newspaper report), without any citizen or lawyer filing a formal petition.","Deciding a case without hearing the opposition."],
        "correctAnswerIndex": 2,
        "explanation": "Suo Motu means"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch29-l2-q1",
        "question": "Consider the constitutional jurisprudence behind PIL. Traditional English law relies heavily on",
        "options": ["Inquisitorial","Punitive","Collaborative/Inquisitorial","Retributive"],
        "correctAnswerIndex": 2,
        "explanation": "Unlike a landlord-tenant dispute where both parties fight to win money (adversarial), a PIL concerning bonded laborers requires the State and the Petitioner to ideally collaborate. The Court doesn"
    },
    {
        "id": "ch29-l2-q2",
        "question": "A lawyer files a PIL in the Supreme Court demanding that a specific state government be dismissed and President",
        "options": ["The Court will immediately admit the petition and summon the Chief Minister.","The Court will dismiss the petition outright as","because assessing the breakdown of constitutional machinery is generally a political/executive function (Governor/President), not judicially manageable originally via a PIL from a random citizen.","The Court will transfer the petition to the International Court of Justice.","The Court will appoint the lawyer as the new Governor of the state."],
        "correctAnswerIndex": 1,
        "explanation": "PIL cannot be used to settle political scores or dictate macro-political decisions like imposing President"
    },
    {
        "id": "ch29-l2-q3",
        "question": "Assertion (A): The Supreme Court in the Balwant Singh Chaufal case laid down strict guidelines to deter frivolous PILs, including the power to impose exemplary costs.\\nReason (R): Because the massive influx of",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a major crisis currently. People file PILs to ban movies, change the name of the country, or stop infrastructure projects for extortion. The SC spends crucial time hearing these absurd matters. To stop this abuse, the Court formulated guidelines mandating strict credential checks and heavy financial penalties for frivolous PILs."
    },
    {
        "id": "ch29-l2-q4",
        "question": "Examine the role of an",
        "options": ["Because the Supreme Court judges are not legally permitted to read environmental statutes themselves.","To act as the defense attorney for the polluting industries to ensure a fair trial.","Because the Court lacks inherent investigative machinery and technical expertise; the Amicus acts as an objective officer of the court to synthesize voluminous scientific data, inspect sites, and help the Court draft realistic, enforceable guidelines.","To collect fines from the polluters and deposit them into the judges"],
        "correctAnswerIndex": 2,
        "explanation": "In cases like the Godavarman forest case (which ran for decades), judges dealing with thousands of pages of satellite imagery and state forest reports need help. The"
    },
    {
        "id": "ch29-l2-q5",
        "question": "Which of the following scenarios is an example where the Supreme Court would most likely invoke its",
        "options": ["A multinational corporation sending an email complaining about high corporate tax rates.","A retired IAS officer sending a formal, stamped petition regarding his delayed pension.","A postcard written in Hindi by a social worker detailing the blinding of prisoners by police in a remote district jail in Bihar.","A sitting Member of Parliament tweeting about the poor quality of food in the Parliament canteen."],
        "correctAnswerIndex": 2,
        "explanation": "Epistolary jurisdiction was designed specifically for situations where gross human rights violations are occurring, and the victims are so marginalized (like prisoners) that they cannot possibly hire a lawyer in Delhi. A simple postcard highlighting police brutality or bonded labor is enough to trigger the Court"
    },
    {
        "id": "ch29-l2-q6",
        "question": "A key criticism of the rampant use of PILs in India is the",
        "options": ["Writ of Quo Warranto","Continuing Mandamus","Advisory Opinion under Article 143","Original Suit under Article 131"],
        "correctAnswerIndex": 1,
        "explanation": "Instead of just ordering"
    },
    {
        "id": "ch29-l2-q7",
        "question": "According to the evolution of PIL jurisprudence, if an NGO files a PIL challenging the environmental clearance given to a major dam project but later attempts to unilaterally withdraw the petition because the builder allegedly offered them a bribe, what is the legal position?",
        "options": ["The NGO, as the","(master of the suit), has the absolute right to withdraw it at any time.","Once the Court admits a genuine PIL, it ceases to be a private dispute. The Court becomes the custodian of the",". The NGO cannot unilaterally withdraw it to settle privately; the Court will continue the case, perhaps by appointing an Amicus.","The Court will immediately force the builder to finish the dam.","The Court must dismiss the case and arrest all members of the NGO."],
        "correctAnswerIndex": 1,
        "explanation": "In normal civil litigation, if A sues B, A can withdraw the case tomorrow if B pays him off. In a PIL (e.g., stopping deforestation), the"
    },
    {
        "id": "ch29-l2-q8",
        "question": "Consider the constitutional basis of PIL. While Article 32 is utilized for Fundamental Rights, what gives the High Courts potentially an even *broader* scope to entertain PILs compared to the Supreme Court?",
        "options": ["High Courts have military jurisdiction under Article 227.","The wording of Article 226, which allows High Courts to issue writs not just for the enforcement of Fundamental Rights, but also \\","(e.g., enforcing broader statutory rights or addressing severe administrative malafide even if a strict Fundamental Right isn","High Courts can amend the State Constitution directly.","High Courts have more judges than the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 32 in the Supreme Court is strictly limited to Part III (Fundamental Rights). Example: Right to Life (Art 21). Article 226 gives HCs the power to enforce FRs AND"
    },
    {
        "id": "ch29-l2-q9",
        "question": "Justice P.N. Bhagwati famously stated that the Anglo-Saxon legal system was unsuited for India because it was designed for a society where",
        "options": ["By making all lawyers completely free for every citizen through a constitutional amendment.","By relaxing locus standi and procedural formalities (like epistolary jurisdiction), thereby allowing a single public-spirited individual or NGO with resources to shoulder the financial and legal burden of fighting for thousands of destitute victims simultaneously.","By abolishing the Supreme Court entirely and replacing it with village Panchayats.","By making the President of India personally pay for all litigation."],
        "correctAnswerIndex": 1,
        "explanation": "If a contractor exploits 500 tribal laborers deep in a forest, none of them know what Article 21 is, nor can they afford a train ticket to Delhi, let alone a Supreme Court advocate. They lack the"
    },
    {
        "id": "ch29-l2-q10",
        "question": "Which of the following PILs would most likely be dismissed at the threshold by the Supreme Court based on the principle that",
        "options": ["A PIL asking the Court to direct the police to register FIRs in cases of organized mob lynching.","A PIL asking the Court to command the Parliament to immediately draft and pass a Uniform Civil Code (UCC) as directed in Article 44.","A PIL asking the Court to stop the illegal felling of trees in a protected national park.","A PIL asking the Court to provide compensation for victims of a proven illegal police encounter."],
        "correctAnswerIndex": 1,
        "explanation": "Under the Separation of Powers, a Writ of Mandamus cannot be issued against the Legislature commanding them to pass a specific law. While courts can give"
    },
    {
        "id": "ch29-l2-q11",
        "question": "A group of residents file a PIL in the High Court seeking the removal of a specific corrupt police inspector from their district, alleging he harassed them. The Court dismisses the PIL. What is the most legally sound reason for this dismissal according to PIL guidelines?",
        "options": ["The residents are not citizens of India.","PILs cannot be filed in High Courts.","The matter is essentially a","(transfer/posting of a specific official) combined with a private grievance, which the guidelines explicitly exclude from the purview of PILs. They must pursue individual legal/departmental remedies.","Police inspectors have diplomatic immunity."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court guidelines explicitly exclude"
    },
    {
        "id": "ch29-l2-q12",
        "question": "Assertion (A): Unlike a typical civil suit where the burden of proof rests entirely on the plaintiff to gather evidence, in a complex PIL (like investigating child labor in illegal mines), the Court may actively gather its own evidence.\\nReason (R): Because the Court frequently appoints",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This highlights the"
    },
    {
        "id": "ch29-l2-q13",
        "question": "In the context of protecting the fundamental rights of prisoners (e.g., Sunil Batra cases regarding solitary confinement and torture), how does PIL intersect with Article 21?",
        "options": ["PIL established that prisoners forfeit Article 21 entirely upon conviction.","PIL was used to establish that","Article 21 protects a prisoner from torture and inhumane treatment, allowing courts to dictate prison administration reforms.","PIL established that only the President can review prison conditions.","PIL ruled that European human rights laws apply directly to Indian prisons."],
        "correctAnswerIndex": 1,
        "explanation": "Justice Krishna Iyer famously used epistolary PILs (letters smuggled out of jail) to establish that a convict is not a"
    },
    {
        "id": "ch29-l2-q14",
        "question": "Evaluate the concept of",
        "options": ["They are completely identical concepts with no functional difference.","In a US Class Action, the plaintiff must actually be a member of the aggrieved class (e.g., one injured consumer suing for all consumers). In Indian PIL, the petitioner often has completely *no* personal connection to the victims (e.g., a Delhi lawyer suing on behalf of distinct, unrelated bonded laborers in Tamil Nadu).","Indian PIL requires the signatures of at least one million citizens.","US Class Actions can only be filed against the government, not corporations."],
        "correctAnswerIndex": 1,
        "explanation": "A US class action (like the famous Erin Brockovich case) relies on"
    },
    {
        "id": "ch29-l2-q15",
        "question": "When a High Court entertains a PIL under Article 226 challenging a highly localized municipal decision (e.g., arbitrarily converting a neighborhood park into a commercial complex), what specific legal interest is the",
        "options": ["The Right to Property under Article 300A.","A generalized, diffuse","to a healthy local environment and civic amenities, enforcing the statutory duties of the municipality even if the citizen doesn","The citizen","The fundamental right to freedom of religion."],
        "correctAnswerIndex": 1,
        "explanation": "If you don"
    },
    {
        "id": "ch29-l2-q16",
        "question": "Which of the following describes",
        "options": ["An NGO filing a case to stop the exploitation of child laborers in a matchbox factory.","An environmental activist filing a case against a major polluting chemical plant.","A real estate developer filing a","seeking the demolition of a competitor","s business.","A citizen writing a letter to the CJI about inhumane conditions in an orphanage."],
        "correctAnswerIndex": 2,
        "explanation": "This is the classic abuse of the PIL process. The developer is not filing the case to protect the city"
    },
    {
        "id": "ch29-l2-q17",
        "question": "Consider the constitutional remedy",
        "options": ["The Court ordered the immediate execution of the police officer.","The Court declared that an infringement of Article 21 (e.g., illegal detention for 14 years) by the","creates strict liability in public law. The Court bypassed the civil trial and instantly awarded monetary compensation as a","remedy directly under the writ jurisdiction.","The Court forced the victim to file a case in the International Criminal Court.","The Court deducted the compensation money from the salaries of all Parliament members."],
        "correctAnswerIndex": 1,
        "explanation": "Before Rudul Sah (1983), if police illegally detained you, the SC would issue Habeas Corpus to free you. But to get compensation, you had to hire a lawyer and fight a 10-year civil suit against the specific cops (who would claim"
    },
    {
        "id": "ch29-l2-q18",
        "question": "According to the detailed guidelines framed in the State of Uttaranchal v. Balwant Singh Chaufal case, which of the following MUST a court do before admitting a PIL?",
        "options": ["Consult the Prime Minister.","Hold a local referendum on the issue.","Ensure that the petition involves a question of","and is not driven by","or aimed at settling a",".","Require the petitioner to deposit one million rupees as security."],
        "correctAnswerIndex": 2,
        "explanation": "The Chaufal guidelines are the Bible for PIL admission now. Courts must verify: 1) Petitioner"
    },
    {
        "id": "ch29-l2-q19",
        "question": "What is the primary danger to the Indian Legal System if the courts fail to aggressively filter out",
        "options": ["The Parliament will be permanently dissolved.","The Judiciary will run out of paper to print judgments.","With over 5 crore cases pending in Indian courts, indulging wealthy litigants fighting vanity battles dressed up as PILs consumes disproportionate Apex Court time, severely delaying justice for thousands of ordinary citizens waiting decades for their regular appeals.","Foreign investors will immediately withdraw all capital from India."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court is meant to be the final appellate court. If 3 judges are forced to spend a week hearing a PIL demanding the renaming of the Arabian Sea, that is a week stolen from hearing the appeal of a man who has been wrongfully languishing on death row since 2012."
    },
    {
        "id": "ch29-l2-q20",
        "question": "In the context of the environment, how did the Supreme Court utilize PIL to enforce the",
        "options": ["By waiting for the Parliament to pass the Environment Protection Act and strictly following its procedures.","By refusing to hear the case, stating it belonged in a civil tort court.","By entertaining the PIL directly under Article 32, asserting that the right to a clean and safe environment is inherent in the",", and proactively laying down the new substantive legal doctrine of Absolute Liability for hazardous industries without waiting for legislation.","By ordering the complete shutdown of the city of Delhi."],
        "correctAnswerIndex": 2,
        "explanation": "Following the Bhopal tragedy, a massive toxic leak happened in Delhi. Parliament was slow. The SC, via a PIL filed by lawyer M.C. Mehta, didn"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch29-l3-q1",
        "question": "Consider the constitutional paradox of",
        "options": ["The Right to Equality under Article 14.","The Right against Exploitation under Article 23.","The Right to Speedy Justice implicitly guaranteed under Article 21.","The Right to Constitutional Remedies under Article 32."],
        "correctAnswerIndex": 2,
        "explanation": "Every hour the Supreme Court spends discussing whether a movie should be banned or a city renamed (frivolous PIL) is an hour stolen from thousands of undertrial prisoners languishing in jails or citizens waiting decades for their civil appeals. The Court has ruled that the right to a speedy trial/justice is an integral part of the Right to Life and Liberty (Art 21). Entertaining"
    },
    {
        "id": "ch29-l3-q2",
        "question": "Evaluate the role of PIL in shaping India",
        "options": ["In Vineet Narain, it was used to direct the CBI to investigate corruption. In Godavarman, the Court created a permanent parallel administrative structure (Central Empowered Committee) to oversee all forest approvals nationwide, essentially taking over the daily regulatory function of the Ministry of Environment for decades.","In both cases, the Court simply issued a fine and closed the case on day one.","In Vineet Narain, the Court dissolved the parliament, whereas in Godavarman, it dissolved state assemblies.","In Godavarman, the Court refused to use",", opting instead for a strict","."],
        "correctAnswerIndex": 0,
        "explanation": "Godavarman is the ultimate example of administrative takeover via PIL. The SC didn"
    },
    {
        "id": "ch29-l3-q3",
        "question": "Assertion (A): While a PIL can be filed under Article 226 in a High Court or Article 32 in the Supreme Court, a petitioner challenging a complex, non-fundamental statutory violation (e.g., misallocation of municipal parking tenders) should ideally approach the High Court first.\\nReason (R): Because Article 226 provides a fundamentally wider jurisdiction allowing writs for",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "This is a classic UPSC trap. People think the Supreme Court is all-powerful. But specifically regarding WRITS, the High Court under 226 is wider. A bad parking tender doesn"
    },
    {
        "id": "ch29-l3-q4",
        "question": "In the landmark",
        "options": ["Article 39(a)","Article 44","Article 51(c)","Article 253"],
        "correctAnswerIndex": 2,
        "explanation": "Article 51(c) is a DPSP that directs the State to"
    },
    {
        "id": "ch29-l3-q5",
        "question": "Critically analyze the distinction between",
        "options": ["Indian PIL requires the petitioner to personally compensate all victims out of pocket.","In an American Class Action, the lead plaintiff MUST be a direct victim belonging to the injured class. In Indian PIL, the petitioner can be a complete","to the dispute (e.g., a Delhi professor suing on behalf of displaced tribals in Odisha) as long as they have no malafide intent.","Indian PIL can only be filed by the Attorney General, not citizens.","American Class Actions cannot seek monetary damages."],
        "correctAnswerIndex": 1,
        "explanation": "The genius of Indian PIL is the total decoupling of"
    },
    {
        "id": "ch29-l3-q6",
        "question": "The Supreme Court in",
        "options": ["The Court must verify the clean credentials of the petitioner.","The Court must be satisfied that the PIL involves a substantial public interest.","The Court must ensure the petition is aimed at redressing genuine public harm, not pursuing a private vendetta.","The Court must refer every PIL to the Prime Minister"],
        "correctAnswerIndex": 3,
        "explanation": "Requiring PMO clearance would destroy the independence of the Judiciary and violate Separation of Powers. The guidelines focus entirely on the judges internally vetting the petitioner"
    },
    {
        "id": "ch29-l3-q7",
        "question": "Examine the doctrine of",
        "options": ["Yes, because","never applies to PILs as the public interest is eternal.","Yes, because NGO","is a different petitioner with different fundamental rights.","No. The principle of","applies forcefully to PILs. If a bona fide public interest issue is conclusively decided by the Apex Court in one PIL, it binds all other citizens/NGOs seeking to agitate the exact same issue based on the exact same facts, preventing endless repetitive litigation.","No, but only if the river has dried up."],
        "correctAnswerIndex": 2,
        "explanation": "Res Judicata means"
    },
    {
        "id": "ch29-l3-q8",
        "question": "Assertion (A): The Supreme Court can utilize its",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "In India, the finality of SC judgments is: Original Judgment -> Review Petition (dismissed) -> Curative Petition (very rare, last resort). In complex PILs (like the Bhopal Gas Tragedy settlement, which was challenged via curative petition years later), if there is a glaring error or violation of natural justice (e.g., a judge was secretly biased), the SC invented the Curative Petition to fix its own rare but catastrophic mistakes."
    },
    {
        "id": "ch29-l3-q9",
        "question": "When evaluating the economic impact of PILs, critics often point to decisions like the cancellation of the 122 2G spectrum licenses (2012) or the complete ban on iron ore mining in Goa/Karnataka. While these PIL interventions targeted massive corruption, what is the primary macroeconomic critique leveled against the Judiciary in these specific cases?",
        "options": ["The Judiciary failed to put the Chief Ministers in jail immediately.","By taking drastic,","approaches—cancelling entire sectors of the economy overnight without conducting rigorous cost-benefit analyses or understanding the cascading effects on banks (NPAs), employment, and foreign sovereign investment treaties—the Court triggered massive, unintended economic recessions in those specific sectors.","The Judiciary illegally printed money to pay for the lost revenue.","The Judiciary forced the companies to relocate to Pakistan."],
        "correctAnswerIndex": 1,
        "explanation": "This is the most severe critique of the"
    },
    {
        "id": "ch29-l3-q10",
        "question": "In the context of the evolving jurisprudence of PIL, what does the term",
        "options": ["When the police physically capture and arrest environmental activists.","A situation where specialized government regulatory agencies (who are supposed to protect the public) become dominated or corrupted by the very industries they are charged with regulating, requiring independent judicial intervention (via PIL) to protect the public interest.","When foreign soldiers capture an Indian government building.","When the Supreme Court takes over the Parliament building."],
        "correctAnswerIndex": 1,
        "explanation": "Regulatory Capture is a classic economic/political failing. For example, if the Telecom Regulatory Authority (TRAI) is entirely controlled by ex-telecom CEOs who rig rules to favor massive corporations at the expense of citizens, the Executive has failed. A PIL is often filed precisely because the statutory"
    }
];

export const CHAPTER_29_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
