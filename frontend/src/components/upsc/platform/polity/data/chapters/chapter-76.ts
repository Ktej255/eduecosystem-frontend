import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch76-l1-q1",
        "question": "Which Part of the Indian Constitution deals with the Property, Contracts, Rights, Liabilities, Obligations, and Suits of the Government?",
        "options": [
            "Part XI",
            "Part XII",
            "Part XIII",
            "Part XIV"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XII (Articles 264 to 300A) deals with Finance, Property, Contracts, Rights, Liabilities, and Suits."
    },
    {
        "id": "ch76-l1-q2",
        "question": "Which Article of the Constitution deals with the suability of the Government of India?",
        "options": [
            "Article 294",
            "Article 299",
            "Article 300",
            "Article 300A"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 300 provides that the Government of India may sue or be sued by the name of the Union of India."
    },
    {
        "id": "ch76-l1-q3",
        "question": "The Government of India can sue or be sued in the name of:",
        "options": [
            "The President of India",
            "The Union of India",
            "The Republic of India",
            "The Prime Minister"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(1) states that the Government of India may sue or be sued by the name of the Union of India."
    },
    {
        "id": "ch76-l1-q4",
        "question": "A State Government can sue or be sued in the name of:",
        "options": [
            "The Governor",
            "The State of [Name]",
            "The State Legislature",
            "The Chief Minister"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(1) provides that a State may sue or be sued by the name of the State."
    },
    {
        "id": "ch76-l1-q5",
        "question": "All contracts made in the exercise of the executive power of the Union shall be expressed to be made by:",
        "options": [
            "The Prime Minister",
            "The President",
            "The Cabinet Secretary",
            "The Attorney General"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 299(1) states all Union contracts shall be expressed to be made by the President."
    },
    {
        "id": "ch76-l1-q6",
        "question": "Is the President or Governor personally liable for contracts made under Article 299?",
        "options": [
            "Yes, always",
            "No, they are protected from personal liability",
            "Only if they signed the contract",
            "Only for contracts above a certain value"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 299(2) explicitly states that neither the President nor the Governor shall be personally liable."
    },
    {
        "id": "ch76-l1-q7",
        "question": "Which Article deals with the property rights of the Union and State governments (succession to property)?",
        "options": [
            "Article 294",
            "Article 296",
            "Article 297",
            "Article 298"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 294 deals with the succession to property, assets, rights, liabilities, and obligations from the pre-independence government."
    },
    {
        "id": "ch76-l1-q8",
        "question": "Article 296 deals with:",
        "options": [
            "Government contracts",
            "Property accruing by escheat or lapse or as bona vacantia",
            "Continental shelf resources",
            "Commercial activities of government"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 296 provides that property which vested in His Majesty by escheat, lapse, or bona vacantia shall vest in the Union or State."
    },
    {
        "id": "ch76-l1-q9",
        "question": "The doctrine of Escheat means the State takes property when:",
        "options": [
            "The owner dies without a will and without legal heirs",
            "The owner fails to pay taxes",
            "The property is seized for public use",
            "The owner abandons the property voluntarily"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Escheat is the right of the state to take property of persons who die intestate without legal heirs."
    },
    {
        "id": "ch76-l1-q10",
        "question": "Bona vacantia refers to:",
        "options": [
            "Government bonds",
            "Ownerless property that vests in the State",
            "Property acquired by eminent domain",
            "Public debt"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Bona vacantia refers to property without an owner that lapses to the State."
    },
    {
        "id": "ch76-l1-q11",
        "question": "Article 297 deals with things of value within:",
        "options": [
            "State borders",
            "Territorial waters, continental shelf, and EEZ",
            "Foreign territories",
            "Air space"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 297 provides that all lands, minerals, and other things of value in territorial waters, continental shelf, and EEZ vest in the Union."
    },
    {
        "id": "ch76-l1-q12",
        "question": "Article 298 empowers the Union and State governments to:",
        "options": [
            "Carry on any trade or business",
            "Acquire, hold, and dispose of property",
            "Make contracts",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 298 gives wide proprietary and commercial powers to the governments."
    },
    {
        "id": "ch76-l1-q13",
        "question": "For a government contract to be valid under Article 299, it must be:",
        "options": [
            "In writing only",
            "Oral with witnesses",
            "In writing, expressed to be made by the President/Governor, and executed by authorized person",
            "Registered with the Supreme Court"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 299(1) mandates three requirements: writing, expression by President/Governor, and execution by authorized person."
    },
    {
        "id": "ch76-l1-q14",
        "question": "If a government contract does not comply with Article 299, it is:",
        "options": [
            "Valid but voidable",
            "Void and unenforceable",
            "Valid if approved later",
            "Binding on the officer only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Non-compliance with Article 299 makes the contract void and unenforceable against the government."
    },
    {
        "id": "ch76-l1-q15",
        "question": "The immunity of the President from criminal proceedings during office is provided by:",
        "options": [
            "Article 299",
            "Article 300",
            "Article 361",
            "Article 363"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 361 provides personal immunity to the President and Governors during their term of office."
    },
    {
        "id": "ch76-l1-q16",
        "question": "Under Article 361, the President cannot be:",
        "options": [
            "Sued in civil court during office for personal acts done before office",
            "Arrested or imprisoned during office",
            "Subject to criminal proceedings during office",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 361 provides comprehensive immunity during the term of office."
    },
    {
        "id": "ch76-l1-q17",
        "question": "A civil suit against the President for personal acts requires a prior notice of:",
        "options": [
            "1 month",
            "2 months",
            "3 months",
            "6 months"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 361(4) requires 2 months written notice before filing a civil suit."
    },
    {
        "id": "ch76-l1-q18",
        "question": "The distinction between sovereign and non-sovereign functions of the government is important for:",
        "options": [
            "Determining liability in tort",
            "Determining tax rates",
            "Legislative competence",
            "Judicial appointments"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The sovereign/non-sovereign distinction determines whether the government can be held liable for tortious acts."
    },
    {
        "id": "ch76-l1-q19",
        "question": "In which landmark case did the Supreme Court hold the State liable for tort committed during non-sovereign function?",
        "options": [
            "Kasturi Lal v. State of UP",
            "State of Rajasthan v. Vidyawati",
            "Minerva Mills case",
            "Golaknath case"
        ],
        "correctAnswerIndex": 1,
        "explanation": "In Vidyawati (1962), the SC held the State of Rajasthan vicariously liable for negligent driving by a government employee."
    },
    {
        "id": "ch76-l1-q20",
        "question": "In Kasturi Lal v. State of UP, the Supreme Court held:",
        "options": [
            "The State was liable for all torts",
            "The State was not liable as police seizure was a sovereign function",
            "The State should pay compensation regardless",
            "The plaintiff had no standing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Court held that seizure of property by police was a sovereign function and the State was immune from tort liability."
    },
    {
        "id": "ch76-l1-q21",
        "question": "Sovereign functions of the State include:",
        "options": [
            "Defense and maintenance of law and order",
            "Running railways and hospitals",
            "Operating state-owned airlines",
            "Managing hotels"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Sovereign functions are core governmental functions like defense, police, and administration of justice."
    },
    {
        "id": "ch76-l1-q22",
        "question": "Non-sovereign functions of the State include:",
        "options": [
            "Military operations",
            "Running commercial enterprises like railways",
            "Diplomatic relations",
            "Legislative activities"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Non-sovereign functions include commercial and business activities of the State."
    },
    {
        "id": "ch76-l1-q23",
        "question": "The principle of vicarious liability means:",
        "options": [
            "The State cannot be sued",
            "The employer is liable for acts of employees in course of employment",
            "Only the employee is liable",
            "The State is always immune"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Vicarious liability holds the employer (including the State) responsible for torts committed by employees during employment."
    },
    {
        "id": "ch76-l1-q24",
        "question": "Article 300A provides that no person shall be deprived of his property save by:",
        "options": [
            "Executive order",
            "Authority of law",
            "Presidential decree",
            "Judicial order only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300A (inserted by the 44th Amendment) states that no person shall be deprived of property save by authority of law."
    },
    {
        "id": "ch76-l1-q25",
        "question": "Article 300A was inserted by which Constitutional Amendment?",
        "options": [
            "42nd Amendment",
            "44th Amendment",
            "46th Amendment",
            "48th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment (1978) inserted Article 300A, replacing the fundamental right to property with a constitutional right."
    },
    {
        "id": "ch76-l1-q26",
        "question": "The right to property was originally a Fundamental Right under which Article?",
        "options": [
            "Article 19(1)(f) and Article 31",
            "Article 14 and Article 21",
            "Article 32",
            "Article 300"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The right to property was a fundamental right under Articles 19(1)(f) and 31, removed by the 44th Amendment."
    },
    {
        "id": "ch76-l1-q27",
        "question": "Section 80 of the Code of Civil Procedure requires what before suing the Government?",
        "options": [
            "Payment of court fees",
            "A 2-month prior notice",
            "Permission from the Attorney General",
            "Filing a PIL first"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Section 80 CPC requires a 2-month notice before filing a civil suit against the Government or a public officer."
    },
    {
        "id": "ch76-l1-q28",
        "question": "The suability of the Government of India under Article 300 traces its origin to:",
        "options": [
            "The Mughal Empire",
            "The East India Company and Government of India Act, 1858",
            "The Indian Constitution alone",
            "British Parliament Act"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300 traces the suability to the historical position under the Government of India Act, 1935 which traced it to the 1858 Act."
    },
    {
        "id": "ch76-l1-q29",
        "question": "The right of priority in payment of government debts is called:",
        "options": [
            "Eminent domain",
            "Crown prerogative / Priority of the Crown",
            "Sovereign immunity",
            "Bona fide doctrine"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State has priority in recovery of debts over private creditors, a continuation of the Crown prerogative."
    },
    {
        "id": "ch76-l1-q30",
        "question": "Which Article provides that the territorial waters, continental shelf, and EEZ resources vest in the Union?",
        "options": [
            "Article 294",
            "Article 296",
            "Article 297",
            "Article 298"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 297 vests all mineral and other resources of the maritime zones in the Union of India."
    },
    {
        "id": "ch76-l1-q31",
        "question": "The 40th Amendment Act (1976) expanded Article 297 to include:",
        "options": [
            "Air space resources",
            "Continental shelf and EEZ",
            "Land borders",
            "River resources"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 40th Amendment expanded Article 297 to include the continental shelf and Exclusive Economic Zone."
    },
    {
        "id": "ch76-l1-q32",
        "question": "The doctrine of sovereign immunity has been:",
        "options": [
            "Fully upheld in India",
            "Progressively narrowed by the Supreme Court",
            "Expanded by parliament",
            "Made absolute by the 44th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has progressively narrowed the scope of sovereign immunity, especially in cases involving fundamental rights."
    },
    {
        "id": "ch76-l1-q33",
        "question": "In Nilabati Behera v. State of Orissa, the Supreme Court held:",
        "options": [
            "Sovereign immunity applies to custodial deaths",
            "The State cannot claim sovereign immunity when fundamental rights are violated",
            "Only the officer is liable",
            "No compensation can be awarded"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC rejected sovereign immunity and awarded compensation for custodial death as a violation of Article 21."
    },
    {
        "id": "ch76-l1-q34",
        "question": "Can arbitration clauses in government contracts be enforced?",
        "options": [
            "No, the government is immune",
            "Yes, if the contract is valid under Article 299",
            "Only in the Supreme Court",
            "Only for foreign contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Arbitration clauses in valid government contracts are enforceable."
    },
    {
        "id": "ch76-l1-q35",
        "question": "If a government contract is void under Article 299, can the person claim compensation?",
        "options": [
            "No, the contract is entirely void",
            "Yes, under Section 70 of the Indian Contract Act (quantum meruit)",
            "Only through a writ petition",
            "Only if the PM approves"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Section 70 provides for compensation on a quantum meruit basis when a benefit has been received under a void contract."
    },
    {
        "id": "ch76-l1-q36",
        "question": "Which case first distinguished between sovereign and non-sovereign functions for government liability?",
        "options": [
            "Peninsular & Oriental Steam Navigation Co. v. Secretary of State",
            "Vidyawati case",
            "Kasturi Lal case",
            "Nilabati Behera case"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The P&O case (1861) first made this distinction in the context of government tort liability in India."
    },
    {
        "id": "ch76-l1-q37",
        "question": "Judicial officers enjoy immunity for:",
        "options": [
            "All their actions",
            "Acts done in discharge of judicial duties in good faith",
            "Personal misconduct",
            "Financial transactions"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Under the Judicial Officers Protection Act, 1850 and common law, judges have immunity for judicial acts done in good faith."
    },
    {
        "id": "ch76-l1-q38",
        "question": "Can the Government of India be sued for breach of a valid contract?",
        "options": [
            "No, sovereign immunity applies",
            "Yes, if the contract complies with Article 299",
            "Only in the Supreme Court",
            "Only with the President's consent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Valid contracts under Article 299 are binding and can be enforced against the government."
    },
    {
        "id": "ch76-l1-q39",
        "question": "The Government's power to carry on trade or business is under which Article?",
        "options": [
            "Article 296",
            "Article 297",
            "Article 298",
            "Article 300"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 298 gives the Union and States power to carry on any trade or business and to acquire property."
    },
    {
        "id": "ch76-l1-q40",
        "question": "Under Article 361, the President is answerable to:",
        "options": [
            "The Supreme Court for all acts",
            "No court for the exercise of official powers and duties",
            "The Parliament at all times",
            "The Attorney General"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 361(1) provides that the President shall not be answerable to any court for the exercise of official powers."
    },
    {
        "id": "ch76-l1-q41",
        "question": "Can the Governor be arrested during his term of office?",
        "options": [
            "Yes, for criminal offences",
            "No, Article 361(3) provides immunity from arrest during office",
            "Only with the CJI's permission",
            "Only for treason"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 361(3) provides that no process for arrest or imprisonment shall be issued against the President or Governor during office."
    },
    {
        "id": "ch76-l1-q42",
        "question": "The liability of the State for torts committed by its employees is based on:",
        "options": [
            "Article 300 read with common law principles",
            "Article 299 alone",
            "Article 361",
            "The CPC only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tort liability is derived from Article 300 read with the common law position and judicial interpretations."
    },
    {
        "id": "ch76-l1-q43",
        "question": "Which of the following is NOT a government prerogative under the Constitution?",
        "options": [
            "Priority in debts",
            "Escheat of ownerless property",
            "Immunity from all tax laws",
            "Ownership of maritime resources"
        ],
        "correctAnswerIndex": 2,
        "explanation": "While the government has various prerogatives, immunity from all tax laws is not one of them."
    },
    {
        "id": "ch76-l1-q44",
        "question": "Article 295 deals with:",
        "options": [
            "Succession to assets within States",
            "Government contracts",
            "Suability of the State",
            "Official language"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 295 deals with the succession to property, assets, rights, liabilities from pre-independence provinces and princely states."
    },
    {
        "id": "ch76-l1-q45",
        "question": "Can a foreign national sue the Government of India?",
        "options": [
            "No",
            "Yes, subject to procedural laws",
            "Only through diplomatic channels",
            "Only in an international court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Foreign nationals can sue the GoI in Indian courts, subject to CPC and other procedural requirements."
    },
    {
        "id": "ch76-l1-q46",
        "question": "The concept of eminent domain refers to the power of the State to:",
        "options": [
            "Claim diplomatic immunity",
            "Acquire private property for public purpose",
            "Sue citizens for defamation",
            "Override judicial decisions"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Eminent domain is the power of the State to acquire private property for public purpose, subject to payment of compensation."
    },
    {
        "id": "ch76-l1-q47",
        "question": "After the 44th Amendment, the right to property is now:",
        "options": [
            "A Fundamental Right",
            "A Directive Principle",
            "A Constitutional Right under Article 300A",
            "Abolished completely"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The right to property is now a constitutional right (not fundamental) under Article 300A."
    },
    {
        "id": "ch76-l1-q48",
        "question": "Statutory bodies and local authorities are sued in:",
        "options": [
            "The name of the Union of India",
            "Their own corporate name",
            "The name of the President",
            "The name of the state"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Statutory bodies are juristic persons with their own legal identity and are sued in their own name."
    },
    {
        "id": "ch76-l1-q49",
        "question": "Who handles litigation on behalf of the Government of India?",
        "options": [
            "The UPSC",
            "The Attorney General and panels of advocates under the Law Ministry",
            "The CBI",
            "The Supreme Court Registry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Attorney General and specialized panels of advocates under the Ministry of Law and Justice handle government litigation."
    },
    {
        "id": "ch76-l1-q50",
        "question": "The India doctrine of State liability draws from which legal tradition?",
        "options": [
            "Roman law",
            "English common law (Rule of Law)",
            "French administrative law",
            "Islamic Sharia law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Indian State liability follows the English common law tradition where the State is generally suable like any other person."
    },
    {
        "id": "ch76-l1-q51",
        "question": "Can the State be held liable for torts committed during sovereign functions after the Nilabati Behera case?",
        "options": [
            "No, sovereign immunity still applies absolutely",
            "Yes, especially when fundamental rights are violated",
            "Only in tort law, not under Article 32",
            "Only with permission from the AG"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After Nilabati Behera, the SC has awarded compensation even for sovereign function torts that violate fundamental rights."
    },
    {
        "id": "ch76-l1-q52",
        "question": "Article 300(1) says the suability of the GoI is the same as the suability of:",
        "options": [
            "The British Crown",
            "The Dominion of India immediately before the Constitution",
            "The Mughal Emperor",
            "The Parliament"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(1) says the Government of India may sue or be sued as the Dominion of India could have been sued before the Constitution."
    },
    {
        "id": "ch76-l1-q53",
        "question": "Can estoppel be applied against the Government to enforce a void contract?",
        "options": [
            "Yes, always",
            "No, Article 299 requirements are mandatory and cannot be bypassed by estoppel",
            "Only in High Courts",
            "Only for petty contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has held that constitutional requirements of Article 299 cannot be overridden by the doctrine of estoppel."
    },
    {
        "id": "ch76-l1-q54",
        "question": "The Government's proprietary right over a leased property is considered:",
        "options": [
            "Sovereign function",
            "Non-sovereign/commercial function",
            "Military function",
            "Legislative function"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Leasing property is a commercial activity (non-sovereign function) for which the government can be held liable."
    },
    {
        "id": "ch76-l1-q55",
        "question": "Under Article 297 (as amended), resources in the EEZ extend up to:",
        "options": [
            "12 nautical miles",
            "24 nautical miles",
            "100 nautical miles",
            "200 nautical miles"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The EEZ extends to 200 nautical miles from the baseline."
    },
    {
        "id": "ch76-l1-q56",
        "question": "Can a writ petition be filed against the government for violating property rights under Article 300A?",
        "options": [
            "No, it is not a fundamental right",
            "Yes, under Article 226 before High Courts",
            "Only with permission of the PM",
            "Only for agricultural land"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Though not a fundamental right, Article 300A rights can be enforced through Article 226 (High Court writs)."
    },
    {
        "id": "ch76-l1-q57",
        "question": "Which of the following is an example of the Government being held liable in tort?",
        "options": [
            "Negligence by a government hospital doctor",
            "Defense operations during war",
            "Legislative debate",
            "Passing an unconstitutional law"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Medical negligence in a government hospital is a non-sovereign function for which the State can be liable."
    },
    {
        "id": "ch76-l1-q58",
        "question": "The Government Suits Act was initially enacted in:",
        "options": [
            "1857",
            "1909",
            "1915",
            "1947"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Government Suits Act, 1909 provided for the limitation period and other procedural aspects for suits against the government."
    },
    {
        "id": "ch76-l1-q59",
        "question": "Can the Parliament modify the provisions relating to government contracts?",
        "options": [
            "No",
            "Yes, under Article 300(2)",
            "Only through a Constitutional Amendment",
            "Only with SC permission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(2) empowers Parliament to make provisions regarding the suability of the Union/States by law."
    },
    {
        "id": "ch76-l1-q60",
        "question": "Which of the following is NOT a property right of the Union under Part XII?",
        "options": [
            "Ownership of maritime resources (Art 297)",
            "Succession to pre-independence property (Art 294)",
            "Escheat and bona vacantia (Art 296)",
            "Right to tax foreign governments"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The right to tax foreign governments is not a property right; it falls under sovereign immunity and diplomatic law."
    },
    {
        "id": "ch76-l1-q61",
        "question": "Consider the following statements:\\n1. The President is personally liable for government contracts.\\n2. The State can be sued for torts committed during non-sovereign functions.\\n3. Article 300A provides a fundamental right to property.\\nWhich are correct?",
        "options": [
            "1 only",
            "2 only",
            "1 and 3",
            "2 and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Only Statement 2 is correct. Statement 1 is false (Art 299(2) protects the President). Statement 3 is false (it is a constitutional, not fundamental, right)."
    },
    {
        "id": "ch76-l1-q62",
        "question": "Assertion (A): The doctrine of sovereign immunity has been progressively narrowed in India.\\nReason (R): The Supreme Court has held that sovereign immunity cannot be claimed when fundamental rights are violated.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The SC has consistently narrowed sovereign immunity, especially when Article 21 and other fundamental rights are at stake."
    },
    {
        "id": "ch76-l1-q63",
        "question": "Which of the following correctly matches the Article with its subject?\\n1. Article 294 - Succession to property\\n2. Article 297 - Maritime resources\\n3. Article 300 - Government contracts",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 300 deals with suits, not contracts (Article 299 deals with contracts)."
    },
    {
        "id": "ch76-l1-q64",
        "question": "In the N. Nagendra Rao case, the Supreme Court observed that the distinction between sovereign and non-sovereign functions is:",
        "options": [
            "Fundamental to Indian law",
            "Outdated in a modern welfare state",
            "Expanding in scope",
            "Created by the 44th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Court observed that in a welfare state, the distinction has largely vanished in terms of tort liability."
    },
    {
        "id": "ch76-l1-q65",
        "question": "Can the government be sued for defamation?",
        "options": [
            "No, the government has absolute privilege",
            "Yes, if the defamatory publication was unauthorized or malicious",
            "Only by other governments",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government can be vicariously liable for defamation if the publication was unauthorized or malicious."
    },
    {
        "id": "ch76-l1-q66",
        "question": "Under Article 298(proviso), when the Union carries on trade in a State:",
        "options": [
            "It is exempt from all State laws",
            "It is subject to legislation by that State",
            "It must get permission from the Governor",
            "It can only trade in Union Territories"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 298 makes Union trade subject to legislation by the State in which it operates."
    },
    {
        "id": "ch76-l1-q67",
        "question": "The Government of India Act, 1935 is relevant to Article 300 because:",
        "options": [
            "It created the suability of the government",
            "Article 300 links current suability to the position under that Act",
            "It abolished sovereign immunity",
            "It created Article 300A"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300 traces the suability of the Union/States to the position under the Government of India Act, 1935."
    },
    {
        "id": "ch76-l1-q68",
        "question": "Which of the following is a limitation on the State's immunity in tort?",
        "options": [
            "The State cannot claim immunity for fundamental rights violations",
            "The State cannot claim immunity for commercial activities",
            "Courts can award compensation even for sovereign function torts involving rights violations",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All these are recognized limitations on sovereign immunity in Indian law."
    },
    {
        "id": "ch76-l1-q69",
        "question": "The Territorial Waters, Continental Shelf, EEZ Act was passed in:",
        "options": [
            "1973",
            "1976",
            "1986",
            "1991"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Territorial Waters, Continental Shelf, Exclusive Economic Zone and other Maritime Zones Act was passed in 1976."
    },
    {
        "id": "ch76-l1-q70",
        "question": "The principle that the State takes property subject to all existing liabilities is called:",
        "options": [
            "Sovereign immunity",
            "Succession cum onere (with burden)",
            "Eminent domain",
            "Bona fide acquisition"
        ],
        "correctAnswerIndex": 1,
        "explanation": "When the State takes property by escheat or bona vacantia, it takes it cum onere - with all existing legal burdens."
    },
    {
        "id": "ch76-l1-q71",
        "question": "Can the State refuse to pay compensation when acquiring property under law?",
        "options": [
            "Yes, sovereign immunity applies",
            "No, Article 300A requires deprivation only by authority of law, and the SC has read compensation into it",
            "Only for agricultural land",
            "Only during emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has interpreted Article 300A to require just and fair compensation for property acquisition."
    },
    {
        "id": "ch76-l1-q72",
        "question": "Which of the following correctly describes crown prerogative?",
        "options": [
            "The right of the monarch to rule absolutely",
            "Special rights and privileges of the State, including priority in debts",
            "The right of the PM to dissolve Parliament",
            "The right to declare war"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Crown prerogative, now State prerogative, includes special rights like priority in debt recovery."
    },
    {
        "id": "ch76-l1-q73",
        "question": "The Prime Minister does NOT enjoy immunity under Article 361. This means:",
        "options": [
            "The PM can be sued during office",
            "The PM has absolute immunity",
            "The PM is above all laws",
            "Article 361 applies to the PM"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 361 only covers the President and Governors, not the Prime Minister."
    },
    {
        "id": "ch76-l1-q74",
        "question": "Can the President's official acts be challenged in court?",
        "options": [
            "No, the President has absolute immunity for everything",
            "Yes, his official acts exercised on the aid and advice of the Council of Ministers can be challenged",
            "Only after leaving office",
            "Only through impeachment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "While the President is personally immune, official acts can be challenged as they are done on the advice of the Council of Ministers."
    },
    {
        "id": "ch76-l1-q75",
        "question": "Which Article authorizes the President to make rules for government contracts?",
        "options": [
            "Article 296",
            "Article 298",
            "Article 299",
            "Article 300"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 299 provides the framework for government contracts including authorization rules."
    },
    {
        "id": "ch76-l1-q76",
        "question": "The concept of Rule of Law in the context of government liability means:",
        "options": [
            "The government is above the law",
            "The government is subject to the same laws as citizens",
            "Only Parliament can make laws",
            "Laws apply only to citizens"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rule of Law means the government is equally subject to the law and can be held liable like any other person."
    },
    {
        "id": "ch76-l1-q77",
        "question": "Assertion (A): A government contract that does not comply with Article 299 is void.\\nReason (R): Article 299 requirements are constitutional mandates that cannot be waived.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The constitutional nature of Article 299 requirements makes non-compliant contracts void."
    },
    {
        "id": "ch76-l1-q78",
        "question": "Can the government claim sovereign immunity for negligence in maintaining roads?",
        "options": [
            "Yes, road maintenance is a sovereign function",
            "No, road maintenance is a non-sovereign function",
            "Only for national highways",
            "Only during monsoon season"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Road maintenance is considered a non-sovereign administrative function for which the government can be held liable."
    },
    {
        "id": "ch76-l1-q79",
        "question": "The doctrine of State necessity allows the government to:",
        "options": [
            "Override fundamental rights during emergency",
            "Take property without compensation",
            "Act beyond constitutional limits",
            "None of these - state necessity is not recognized as absolute in India"
        ],
        "correctAnswerIndex": 3,
        "explanation": "India does not recognize state necessity as overriding constitutional rights absolutely."
    },
    {
        "id": "ch76-l1-q80",
        "question": "Which of the following correctly describes the evolution of government liability in India?",
        "options": [
            "From full immunity to limited immunity with expanding liability",
            "From full liability to complete immunity",
            "No change since independence",
            "From limited liability to full immunity"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Government liability has evolved from broad sovereign immunity to progressively narrowed immunity with expanding State liability."
    },
    {
        "id": "ch76-l1-q81",
        "question": "Can the government be held liable for false imprisonment by police?",
        "options": [
            "No, policing is a sovereign function",
            "Yes, under Article 21 and tort law",
            "Only if the PM orders",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After Nilabati Behera and other cases, the government can be held liable for custodial violations under Article 21."
    },
    {
        "id": "ch76-l1-q82",
        "question": "Which of the following is a requirement under Section 80 CPC for suing the government?",
        "options": [
            "Filing a PIL",
            "Obtaining a senior advocate",
            "Giving a 2-month notice specifying the cause of action",
            "Paying a special court fee"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Section 80 CPC requires a 2-month written notice before suing the government."
    },
    {
        "id": "ch76-l1-q83",
        "question": "The Law Commission of India has recommended which change regarding government tort liability?",
        "options": [
            "Complete abolition of liability",
            "Enactment of a comprehensive Act on State tort liability",
            "Maintenance of the status quo",
            "Transfer of all cases to tribunals"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission has recommended comprehensive legislation to codify State tort liability."
    },
    {
        "id": "ch76-l1-q84",
        "question": "Can the State ratify a government contract that was initially void under Article 299?",
        "options": [
            "Yes, ratification can cure the defect",
            "No, a void contract cannot be ratified to become binding",
            "Only with the AG's opinion",
            "Only for defense contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A contract void under Article 299 cannot be ratified to become binding on the government."
    },
    {
        "id": "ch76-l1-q85",
        "question": "The principle that no person shall be deprived of property except by authority of law is enshrined in:",
        "options": [
            "Article 21",
            "Article 31",
            "Article 300A",
            "Article 299"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 300A provides this protection for property rights."
    },
    {
        "id": "ch76-l1-q86",
        "question": "Which of the following aspects of government liability remains unsettled in Indian law?",
        "options": [
            "Whether the government can enter contracts",
            "Whether sovereign immunity applies to fundamental rights violations",
            "The precise scope of sovereign functions for tort liability",
            "Whether the government can own property"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The exact boundary between sovereign and non-sovereign functions for tort liability remains debated."
    },
    {
        "id": "ch76-l1-q87",
        "question": "Can private individuals sue government officers personally for tortious acts?",
        "options": [
            "No, officers have absolute immunity",
            "Yes, officers can be personally liable for tortious acts outside the scope of duty",
            "Only the government can be sued",
            "Only for financial torts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Officers acting beyond their authority or with malice can be personally liable."
    },
    {
        "id": "ch76-l1-q88",
        "question": "The Federal Tort Claims Act model (USA) differs from India in that:",
        "options": [
            "USA has codified State tort liability while India relies on common law and judicial interpretation",
            "India has more comprehensive legislation",
            "Both are identical",
            "Neither country allows government suits"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The USA has the FTCA codifying federal tort liability, while India still relies on common law and court decisions."
    },
    {
        "id": "ch76-l1-q89",
        "question": "Under which Article are the assets of former Indian States (princely states) distributed?",
        "options": [
            "Article 294",
            "Article 295",
            "Article 296",
            "Article 297"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 295 deals with the succession to assets and liabilities of the former princely states."
    },
    {
        "id": "ch76-l1-q90",
        "question": "Which of the following best summarizes the current position on government liability in India?",
        "options": [
            "The government has absolute immunity",
            "The government is liable like any other person, subject to limited sovereign immunity for core functions",
            "The government can only be sued with its consent",
            "Only the President can waive immunity"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government is generally liable, with sovereign immunity limited to core governmental functions and not applicable to fundamental rights violations."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch76-l2-q1",
        "question": "The 40th Amendment Act (1976) expanded Article 297 to include:",
        "options": [
            "Air space resources",
            "Continental shelf and EEZ",
            "Land borders",
            "River resources"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 40th Amendment expanded Article 297 to include the continental shelf and Exclusive Economic Zone."
    },
    {
        "id": "ch76-l2-q2",
        "question": "The doctrine of sovereign immunity has been:",
        "options": [
            "Fully upheld in India",
            "Progressively narrowed by the Supreme Court",
            "Expanded by parliament",
            "Made absolute by the 44th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has progressively narrowed the scope of sovereign immunity, especially in cases involving fundamental rights."
    },
    {
        "id": "ch76-l2-q3",
        "question": "In Nilabati Behera v. State of Orissa, the Supreme Court held:",
        "options": [
            "Sovereign immunity applies to custodial deaths",
            "The State cannot claim sovereign immunity when fundamental rights are violated",
            "Only the officer is liable",
            "No compensation can be awarded"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC rejected sovereign immunity and awarded compensation for custodial death as a violation of Article 21."
    },
    {
        "id": "ch76-l2-q4",
        "question": "Can arbitration clauses in government contracts be enforced?",
        "options": [
            "No, the government is immune",
            "Yes, if the contract is valid under Article 299",
            "Only in the Supreme Court",
            "Only for foreign contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Arbitration clauses in valid government contracts are enforceable."
    },
    {
        "id": "ch76-l2-q5",
        "question": "If a government contract is void under Article 299, can the person claim compensation?",
        "options": [
            "No, the contract is entirely void",
            "Yes, under Section 70 of the Indian Contract Act (quantum meruit)",
            "Only through a writ petition",
            "Only if the PM approves"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Section 70 provides for compensation on a quantum meruit basis when a benefit has been received under a void contract."
    },
    {
        "id": "ch76-l2-q6",
        "question": "Which case first distinguished between sovereign and non-sovereign functions for government liability?",
        "options": [
            "Peninsular & Oriental Steam Navigation Co. v. Secretary of State",
            "Vidyawati case",
            "Kasturi Lal case",
            "Nilabati Behera case"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The P&O case (1861) first made this distinction in the context of government tort liability in India."
    },
    {
        "id": "ch76-l2-q7",
        "question": "Judicial officers enjoy immunity for:",
        "options": [
            "All their actions",
            "Acts done in discharge of judicial duties in good faith",
            "Personal misconduct",
            "Financial transactions"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Under the Judicial Officers Protection Act, 1850 and common law, judges have immunity for judicial acts done in good faith."
    },
    {
        "id": "ch76-l2-q8",
        "question": "Can the Government of India be sued for breach of a valid contract?",
        "options": [
            "No, sovereign immunity applies",
            "Yes, if the contract complies with Article 299",
            "Only in the Supreme Court",
            "Only with the President's consent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Valid contracts under Article 299 are binding and can be enforced against the government."
    },
    {
        "id": "ch76-l2-q9",
        "question": "The Government's power to carry on trade or business is under which Article?",
        "options": [
            "Article 296",
            "Article 297",
            "Article 298",
            "Article 300"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 298 gives the Union and States power to carry on any trade or business and to acquire property."
    },
    {
        "id": "ch76-l2-q10",
        "question": "Under Article 361, the President is answerable to:",
        "options": [
            "The Supreme Court for all acts",
            "No court for the exercise of official powers and duties",
            "The Parliament at all times",
            "The Attorney General"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 361(1) provides that the President shall not be answerable to any court for the exercise of official powers."
    },
    {
        "id": "ch76-l2-q11",
        "question": "Can the Governor be arrested during his term of office?",
        "options": [
            "Yes, for criminal offences",
            "No, Article 361(3) provides immunity from arrest during office",
            "Only with the CJI's permission",
            "Only for treason"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 361(3) provides that no process for arrest or imprisonment shall be issued against the President or Governor during office."
    },
    {
        "id": "ch76-l2-q12",
        "question": "The liability of the State for torts committed by its employees is based on:",
        "options": [
            "Article 300 read with common law principles",
            "Article 299 alone",
            "Article 361",
            "The CPC only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tort liability is derived from Article 300 read with the common law position and judicial interpretations."
    },
    {
        "id": "ch76-l2-q13",
        "question": "Which of the following is NOT a government prerogative under the Constitution?",
        "options": [
            "Priority in debts",
            "Escheat of ownerless property",
            "Immunity from all tax laws",
            "Ownership of maritime resources"
        ],
        "correctAnswerIndex": 2,
        "explanation": "While the government has various prerogatives, immunity from all tax laws is not one of them."
    },
    {
        "id": "ch76-l2-q14",
        "question": "Article 295 deals with:",
        "options": [
            "Succession to assets within States",
            "Government contracts",
            "Suability of the State",
            "Official language"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 295 deals with the succession to property, assets, rights, liabilities from pre-independence provinces and princely states."
    },
    {
        "id": "ch76-l2-q15",
        "question": "Can a foreign national sue the Government of India?",
        "options": [
            "No",
            "Yes, subject to procedural laws",
            "Only through diplomatic channels",
            "Only in an international court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Foreign nationals can sue the GoI in Indian courts, subject to CPC and other procedural requirements."
    },
    {
        "id": "ch76-l2-q16",
        "question": "The concept of eminent domain refers to the power of the State to:",
        "options": [
            "Claim diplomatic immunity",
            "Acquire private property for public purpose",
            "Sue citizens for defamation",
            "Override judicial decisions"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Eminent domain is the power of the State to acquire private property for public purpose, subject to payment of compensation."
    },
    {
        "id": "ch76-l2-q17",
        "question": "After the 44th Amendment, the right to property is now:",
        "options": [
            "A Fundamental Right",
            "A Directive Principle",
            "A Constitutional Right under Article 300A",
            "Abolished completely"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The right to property is now a constitutional right (not fundamental) under Article 300A."
    },
    {
        "id": "ch76-l2-q18",
        "question": "Statutory bodies and local authorities are sued in:",
        "options": [
            "The name of the Union of India",
            "Their own corporate name",
            "The name of the President",
            "The name of the state"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Statutory bodies are juristic persons with their own legal identity and are sued in their own name."
    },
    {
        "id": "ch76-l2-q19",
        "question": "Who handles litigation on behalf of the Government of India?",
        "options": [
            "The UPSC",
            "The Attorney General and panels of advocates under the Law Ministry",
            "The CBI",
            "The Supreme Court Registry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Attorney General and specialized panels of advocates under the Ministry of Law and Justice handle government litigation."
    },
    {
        "id": "ch76-l2-q20",
        "question": "The India doctrine of State liability draws from which legal tradition?",
        "options": [
            "Roman law",
            "English common law (Rule of Law)",
            "French administrative law",
            "Islamic Sharia law"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Indian State liability follows the English common law tradition where the State is generally suable like any other person."
    },
    {
        "id": "ch76-l2-q21",
        "question": "Can the State be held liable for torts committed during sovereign functions after the Nilabati Behera case?",
        "options": [
            "No, sovereign immunity still applies absolutely",
            "Yes, especially when fundamental rights are violated",
            "Only in tort law, not under Article 32",
            "Only with permission from the AG"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After Nilabati Behera, the SC has awarded compensation even for sovereign function torts that violate fundamental rights."
    },
    {
        "id": "ch76-l2-q22",
        "question": "Article 300(1) says the suability of the GoI is the same as the suability of:",
        "options": [
            "The British Crown",
            "The Dominion of India immediately before the Constitution",
            "The Mughal Emperor",
            "The Parliament"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(1) says the Government of India may sue or be sued as the Dominion of India could have been sued before the Constitution."
    },
    {
        "id": "ch76-l2-q23",
        "question": "Can estoppel be applied against the Government to enforce a void contract?",
        "options": [
            "Yes, always",
            "No, Article 299 requirements are mandatory and cannot be bypassed by estoppel",
            "Only in High Courts",
            "Only for petty contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has held that constitutional requirements of Article 299 cannot be overridden by the doctrine of estoppel."
    },
    {
        "id": "ch76-l2-q24",
        "question": "The Government's proprietary right over a leased property is considered:",
        "options": [
            "Sovereign function",
            "Non-sovereign/commercial function",
            "Military function",
            "Legislative function"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Leasing property is a commercial activity (non-sovereign function) for which the government can be held liable."
    },
    {
        "id": "ch76-l2-q25",
        "question": "Under Article 297 (as amended), resources in the EEZ extend up to:",
        "options": [
            "12 nautical miles",
            "24 nautical miles",
            "100 nautical miles",
            "200 nautical miles"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The EEZ extends to 200 nautical miles from the baseline."
    },
    {
        "id": "ch76-l2-q26",
        "question": "Can a writ petition be filed against the government for violating property rights under Article 300A?",
        "options": [
            "No, it is not a fundamental right",
            "Yes, under Article 226 before High Courts",
            "Only with permission of the PM",
            "Only for agricultural land"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Though not a fundamental right, Article 300A rights can be enforced through Article 226 (High Court writs)."
    },
    {
        "id": "ch76-l2-q27",
        "question": "Which of the following is an example of the Government being held liable in tort?",
        "options": [
            "Negligence by a government hospital doctor",
            "Defense operations during war",
            "Legislative debate",
            "Passing an unconstitutional law"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Medical negligence in a government hospital is a non-sovereign function for which the State can be liable."
    },
    {
        "id": "ch76-l2-q28",
        "question": "The Government Suits Act was initially enacted in:",
        "options": [
            "1857",
            "1909",
            "1915",
            "1947"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Government Suits Act, 1909 provided for the limitation period and other procedural aspects for suits against the government."
    },
    {
        "id": "ch76-l2-q29",
        "question": "Can the Parliament modify the provisions relating to government contracts?",
        "options": [
            "No",
            "Yes, under Article 300(2)",
            "Only through a Constitutional Amendment",
            "Only with SC permission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300(2) empowers Parliament to make provisions regarding the suability of the Union/States by law."
    },
    {
        "id": "ch76-l2-q30",
        "question": "Which of the following is NOT a property right of the Union under Part XII?",
        "options": [
            "Ownership of maritime resources (Art 297)",
            "Succession to pre-independence property (Art 294)",
            "Escheat and bona vacantia (Art 296)",
            "Right to tax foreign governments"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The right to tax foreign governments is not a property right; it falls under sovereign immunity and diplomatic law."
    },
    {
        "id": "ch76-l2-q31",
        "question": "Consider the following statements:\\n1. The President is personally liable for government contracts.\\n2. The State can be sued for torts committed during non-sovereign functions.\\n3. Article 300A provides a fundamental right to property.\\nWhich are correct?",
        "options": [
            "1 only",
            "2 only",
            "1 and 3",
            "2 and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Only Statement 2 is correct. Statement 1 is false (Art 299(2) protects the President). Statement 3 is false (it is a constitutional, not fundamental, right)."
    },
    {
        "id": "ch76-l2-q32",
        "question": "Assertion (A): The doctrine of sovereign immunity has been progressively narrowed in India.\\nReason (R): The Supreme Court has held that sovereign immunity cannot be claimed when fundamental rights are violated.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The SC has consistently narrowed sovereign immunity, especially when Article 21 and other fundamental rights are at stake."
    },
    {
        "id": "ch76-l2-q33",
        "question": "Which of the following correctly matches the Article with its subject?\\n1. Article 294 - Succession to property\\n2. Article 297 - Maritime resources\\n3. Article 300 - Government contracts",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 300 deals with suits, not contracts (Article 299 deals with contracts)."
    },
    {
        "id": "ch76-l2-q34",
        "question": "In the N. Nagendra Rao case, the Supreme Court observed that the distinction between sovereign and non-sovereign functions is:",
        "options": [
            "Fundamental to Indian law",
            "Outdated in a modern welfare state",
            "Expanding in scope",
            "Created by the 44th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Court observed that in a welfare state, the distinction has largely vanished in terms of tort liability."
    },
    {
        "id": "ch76-l2-q35",
        "question": "Can the government be sued for defamation?",
        "options": [
            "No, the government has absolute privilege",
            "Yes, if the defamatory publication was unauthorized or malicious",
            "Only by other governments",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government can be vicariously liable for defamation if the publication was unauthorized or malicious."
    },
    {
        "id": "ch76-l2-q36",
        "question": "Under Article 298(proviso), when the Union carries on trade in a State:",
        "options": [
            "It is exempt from all State laws",
            "It is subject to legislation by that State",
            "It must get permission from the Governor",
            "It can only trade in Union Territories"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 298 makes Union trade subject to legislation by the State in which it operates."
    },
    {
        "id": "ch76-l2-q37",
        "question": "The Government of India Act, 1935 is relevant to Article 300 because:",
        "options": [
            "It created the suability of the government",
            "Article 300 links current suability to the position under that Act",
            "It abolished sovereign immunity",
            "It created Article 300A"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300 traces the suability of the Union/States to the position under the Government of India Act, 1935."
    },
    {
        "id": "ch76-l2-q38",
        "question": "Which of the following is a limitation on the State's immunity in tort?",
        "options": [
            "The State cannot claim immunity for fundamental rights violations",
            "The State cannot claim immunity for commercial activities",
            "Courts can award compensation even for sovereign function torts involving rights violations",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All these are recognized limitations on sovereign immunity in Indian law."
    },
    {
        "id": "ch76-l2-q39",
        "question": "The Territorial Waters, Continental Shelf, EEZ Act was passed in:",
        "options": [
            "1973",
            "1976",
            "1986",
            "1991"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Territorial Waters, Continental Shelf, Exclusive Economic Zone and other Maritime Zones Act was passed in 1976."
    },
    {
        "id": "ch76-l2-q40",
        "question": "The principle that the State takes property subject to all existing liabilities is called:",
        "options": [
            "Sovereign immunity",
            "Succession cum onere (with burden)",
            "Eminent domain",
            "Bona fide acquisition"
        ],
        "correctAnswerIndex": 1,
        "explanation": "When the State takes property by escheat or bona vacantia, it takes it cum onere - with all existing legal burdens."
    },
    {
        "id": "ch76-l2-q41",
        "question": "Can the State refuse to pay compensation when acquiring property under law?",
        "options": [
            "Yes, sovereign immunity applies",
            "No, Article 300A requires deprivation only by authority of law, and the SC has read compensation into it",
            "Only for agricultural land",
            "Only during emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has interpreted Article 300A to require just and fair compensation for property acquisition."
    },
    {
        "id": "ch76-l2-q42",
        "question": "Which of the following correctly describes crown prerogative?",
        "options": [
            "The right of the monarch to rule absolutely",
            "Special rights and privileges of the State, including priority in debts",
            "The right of the PM to dissolve Parliament",
            "The right to declare war"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Crown prerogative, now State prerogative, includes special rights like priority in debt recovery."
    },
    {
        "id": "ch76-l2-q43",
        "question": "The Prime Minister does NOT enjoy immunity under Article 361. This means:",
        "options": [
            "The PM can be sued during office",
            "The PM has absolute immunity",
            "The PM is above all laws",
            "Article 361 applies to the PM"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 361 only covers the President and Governors, not the Prime Minister."
    },
    {
        "id": "ch76-l2-q44",
        "question": "Can the President's official acts be challenged in court?",
        "options": [
            "No, the President has absolute immunity for everything",
            "Yes, his official acts exercised on the aid and advice of the Council of Ministers can be challenged",
            "Only after leaving office",
            "Only through impeachment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "While the President is personally immune, official acts can be challenged as they are done on the advice of the Council of Ministers."
    },
    {
        "id": "ch76-l2-q45",
        "question": "Which Article authorizes the President to make rules for government contracts?",
        "options": [
            "Article 296",
            "Article 298",
            "Article 299",
            "Article 300"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 299 provides the framework for government contracts including authorization rules."
    },
    {
        "id": "ch76-l2-q46",
        "question": "The concept of Rule of Law in the context of government liability means:",
        "options": [
            "The government is above the law",
            "The government is subject to the same laws as citizens",
            "Only Parliament can make laws",
            "Laws apply only to citizens"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rule of Law means the government is equally subject to the law and can be held liable like any other person."
    },
    {
        "id": "ch76-l2-q47",
        "question": "Assertion (A): A government contract that does not comply with Article 299 is void.\\nReason (R): Article 299 requirements are constitutional mandates that cannot be waived.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The constitutional nature of Article 299 requirements makes non-compliant contracts void."
    },
    {
        "id": "ch76-l2-q48",
        "question": "Can the government claim sovereign immunity for negligence in maintaining roads?",
        "options": [
            "Yes, road maintenance is a sovereign function",
            "No, road maintenance is a non-sovereign function",
            "Only for national highways",
            "Only during monsoon season"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Road maintenance is considered a non-sovereign administrative function for which the government can be held liable."
    },
    {
        "id": "ch76-l2-q49",
        "question": "The doctrine of State necessity allows the government to:",
        "options": [
            "Override fundamental rights during emergency",
            "Take property without compensation",
            "Act beyond constitutional limits",
            "None of these - state necessity is not recognized as absolute in India"
        ],
        "correctAnswerIndex": 3,
        "explanation": "India does not recognize state necessity as overriding constitutional rights absolutely."
    },
    {
        "id": "ch76-l2-q50",
        "question": "Which of the following correctly describes the evolution of government liability in India?",
        "options": [
            "From full immunity to limited immunity with expanding liability",
            "From full liability to complete immunity",
            "No change since independence",
            "From limited liability to full immunity"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Government liability has evolved from broad sovereign immunity to progressively narrowed immunity with expanding State liability."
    },
    {
        "id": "ch76-l2-q51",
        "question": "Can the government be held liable for false imprisonment by police?",
        "options": [
            "No, policing is a sovereign function",
            "Yes, under Article 21 and tort law",
            "Only if the PM orders",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After Nilabati Behera and other cases, the government can be held liable for custodial violations under Article 21."
    },
    {
        "id": "ch76-l2-q52",
        "question": "Which of the following is a requirement under Section 80 CPC for suing the government?",
        "options": [
            "Filing a PIL",
            "Obtaining a senior advocate",
            "Giving a 2-month notice specifying the cause of action",
            "Paying a special court fee"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Section 80 CPC requires a 2-month written notice before suing the government."
    },
    {
        "id": "ch76-l2-q53",
        "question": "The Law Commission of India has recommended which change regarding government tort liability?",
        "options": [
            "Complete abolition of liability",
            "Enactment of a comprehensive Act on State tort liability",
            "Maintenance of the status quo",
            "Transfer of all cases to tribunals"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission has recommended comprehensive legislation to codify State tort liability."
    },
    {
        "id": "ch76-l2-q54",
        "question": "Can the State ratify a government contract that was initially void under Article 299?",
        "options": [
            "Yes, ratification can cure the defect",
            "No, a void contract cannot be ratified to become binding",
            "Only with the AG's opinion",
            "Only for defense contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A contract void under Article 299 cannot be ratified to become binding on the government."
    },
    {
        "id": "ch76-l2-q55",
        "question": "The principle that no person shall be deprived of property except by authority of law is enshrined in:",
        "options": [
            "Article 21",
            "Article 31",
            "Article 300A",
            "Article 299"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 300A provides this protection for property rights."
    },
    {
        "id": "ch76-l2-q56",
        "question": "Which of the following aspects of government liability remains unsettled in Indian law?",
        "options": [
            "Whether the government can enter contracts",
            "Whether sovereign immunity applies to fundamental rights violations",
            "The precise scope of sovereign functions for tort liability",
            "Whether the government can own property"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The exact boundary between sovereign and non-sovereign functions for tort liability remains debated."
    },
    {
        "id": "ch76-l2-q57",
        "question": "Can private individuals sue government officers personally for tortious acts?",
        "options": [
            "No, officers have absolute immunity",
            "Yes, officers can be personally liable for tortious acts outside the scope of duty",
            "Only the government can be sued",
            "Only for financial torts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Officers acting beyond their authority or with malice can be personally liable."
    },
    {
        "id": "ch76-l2-q58",
        "question": "The Federal Tort Claims Act model (USA) differs from India in that:",
        "options": [
            "USA has codified State tort liability while India relies on common law and judicial interpretation",
            "India has more comprehensive legislation",
            "Both are identical",
            "Neither country allows government suits"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The USA has the FTCA codifying federal tort liability, while India still relies on common law and court decisions."
    },
    {
        "id": "ch76-l2-q59",
        "question": "Under which Article are the assets of former Indian States (princely states) distributed?",
        "options": [
            "Article 294",
            "Article 295",
            "Article 296",
            "Article 297"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 295 deals with the succession to assets and liabilities of the former princely states."
    },
    {
        "id": "ch76-l2-q60",
        "question": "Which of the following best summarizes the current position on government liability in India?",
        "options": [
            "The government has absolute immunity",
            "The government is liable like any other person, subject to limited sovereign immunity for core functions",
            "The government can only be sued with its consent",
            "Only the President can waive immunity"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government is generally liable, with sovereign immunity limited to core governmental functions and not applicable to fundamental rights violations."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch76-l3-q1",
        "question": "Consider the following statements:\\n1. The President is personally liable for government contracts.\\n2. The State can be sued for torts committed during non-sovereign functions.\\n3. Article 300A provides a fundamental right to property.\\nWhich are correct?",
        "options": [
            "1 only",
            "2 only",
            "1 and 3",
            "2 and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Only Statement 2 is correct. Statement 1 is false (Art 299(2) protects the President). Statement 3 is false (it is a constitutional, not fundamental, right)."
    },
    {
        "id": "ch76-l3-q2",
        "question": "Assertion (A): The doctrine of sovereign immunity has been progressively narrowed in India.\\nReason (R): The Supreme Court has held that sovereign immunity cannot be claimed when fundamental rights are violated.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The SC has consistently narrowed sovereign immunity, especially when Article 21 and other fundamental rights are at stake."
    },
    {
        "id": "ch76-l3-q3",
        "question": "Which of the following correctly matches the Article with its subject?\\n1. Article 294 - Succession to property\\n2. Article 297 - Maritime resources\\n3. Article 300 - Government contracts",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 300 deals with suits, not contracts (Article 299 deals with contracts)."
    },
    {
        "id": "ch76-l3-q4",
        "question": "In the N. Nagendra Rao case, the Supreme Court observed that the distinction between sovereign and non-sovereign functions is:",
        "options": [
            "Fundamental to Indian law",
            "Outdated in a modern welfare state",
            "Expanding in scope",
            "Created by the 44th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Court observed that in a welfare state, the distinction has largely vanished in terms of tort liability."
    },
    {
        "id": "ch76-l3-q5",
        "question": "Can the government be sued for defamation?",
        "options": [
            "No, the government has absolute privilege",
            "Yes, if the defamatory publication was unauthorized or malicious",
            "Only by other governments",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government can be vicariously liable for defamation if the publication was unauthorized or malicious."
    },
    {
        "id": "ch76-l3-q6",
        "question": "Under Article 298(proviso), when the Union carries on trade in a State:",
        "options": [
            "It is exempt from all State laws",
            "It is subject to legislation by that State",
            "It must get permission from the Governor",
            "It can only trade in Union Territories"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 298 makes Union trade subject to legislation by the State in which it operates."
    },
    {
        "id": "ch76-l3-q7",
        "question": "The Government of India Act, 1935 is relevant to Article 300 because:",
        "options": [
            "It created the suability of the government",
            "Article 300 links current suability to the position under that Act",
            "It abolished sovereign immunity",
            "It created Article 300A"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 300 traces the suability of the Union/States to the position under the Government of India Act, 1935."
    },
    {
        "id": "ch76-l3-q8",
        "question": "Which of the following is a limitation on the State's immunity in tort?",
        "options": [
            "The State cannot claim immunity for fundamental rights violations",
            "The State cannot claim immunity for commercial activities",
            "Courts can award compensation even for sovereign function torts involving rights violations",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All these are recognized limitations on sovereign immunity in Indian law."
    },
    {
        "id": "ch76-l3-q9",
        "question": "The Territorial Waters, Continental Shelf, EEZ Act was passed in:",
        "options": [
            "1973",
            "1976",
            "1986",
            "1991"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Territorial Waters, Continental Shelf, Exclusive Economic Zone and other Maritime Zones Act was passed in 1976."
    },
    {
        "id": "ch76-l3-q10",
        "question": "The principle that the State takes property subject to all existing liabilities is called:",
        "options": [
            "Sovereign immunity",
            "Succession cum onere (with burden)",
            "Eminent domain",
            "Bona fide acquisition"
        ],
        "correctAnswerIndex": 1,
        "explanation": "When the State takes property by escheat or bona vacantia, it takes it cum onere - with all existing legal burdens."
    },
    {
        "id": "ch76-l3-q11",
        "question": "Can the State refuse to pay compensation when acquiring property under law?",
        "options": [
            "Yes, sovereign immunity applies",
            "No, Article 300A requires deprivation only by authority of law, and the SC has read compensation into it",
            "Only for agricultural land",
            "Only during emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The SC has interpreted Article 300A to require just and fair compensation for property acquisition."
    },
    {
        "id": "ch76-l3-q12",
        "question": "Which of the following correctly describes crown prerogative?",
        "options": [
            "The right of the monarch to rule absolutely",
            "Special rights and privileges of the State, including priority in debts",
            "The right of the PM to dissolve Parliament",
            "The right to declare war"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Crown prerogative, now State prerogative, includes special rights like priority in debt recovery."
    },
    {
        "id": "ch76-l3-q13",
        "question": "The Prime Minister does NOT enjoy immunity under Article 361. This means:",
        "options": [
            "The PM can be sued during office",
            "The PM has absolute immunity",
            "The PM is above all laws",
            "Article 361 applies to the PM"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 361 only covers the President and Governors, not the Prime Minister."
    },
    {
        "id": "ch76-l3-q14",
        "question": "Can the President's official acts be challenged in court?",
        "options": [
            "No, the President has absolute immunity for everything",
            "Yes, his official acts exercised on the aid and advice of the Council of Ministers can be challenged",
            "Only after leaving office",
            "Only through impeachment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "While the President is personally immune, official acts can be challenged as they are done on the advice of the Council of Ministers."
    },
    {
        "id": "ch76-l3-q15",
        "question": "Which Article authorizes the President to make rules for government contracts?",
        "options": [
            "Article 296",
            "Article 298",
            "Article 299",
            "Article 300"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 299 provides the framework for government contracts including authorization rules."
    },
    {
        "id": "ch76-l3-q16",
        "question": "The concept of Rule of Law in the context of government liability means:",
        "options": [
            "The government is above the law",
            "The government is subject to the same laws as citizens",
            "Only Parliament can make laws",
            "Laws apply only to citizens"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rule of Law means the government is equally subject to the law and can be held liable like any other person."
    },
    {
        "id": "ch76-l3-q17",
        "question": "Assertion (A): A government contract that does not comply with Article 299 is void.\\nReason (R): Article 299 requirements are constitutional mandates that cannot be waived.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The constitutional nature of Article 299 requirements makes non-compliant contracts void."
    },
    {
        "id": "ch76-l3-q18",
        "question": "Can the government claim sovereign immunity for negligence in maintaining roads?",
        "options": [
            "Yes, road maintenance is a sovereign function",
            "No, road maintenance is a non-sovereign function",
            "Only for national highways",
            "Only during monsoon season"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Road maintenance is considered a non-sovereign administrative function for which the government can be held liable."
    },
    {
        "id": "ch76-l3-q19",
        "question": "The doctrine of State necessity allows the government to:",
        "options": [
            "Override fundamental rights during emergency",
            "Take property without compensation",
            "Act beyond constitutional limits",
            "None of these - state necessity is not recognized as absolute in India"
        ],
        "correctAnswerIndex": 3,
        "explanation": "India does not recognize state necessity as overriding constitutional rights absolutely."
    },
    {
        "id": "ch76-l3-q20",
        "question": "Which of the following correctly describes the evolution of government liability in India?",
        "options": [
            "From full immunity to limited immunity with expanding liability",
            "From full liability to complete immunity",
            "No change since independence",
            "From limited liability to full immunity"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Government liability has evolved from broad sovereign immunity to progressively narrowed immunity with expanding State liability."
    },
    {
        "id": "ch76-l3-q21",
        "question": "Can the government be held liable for false imprisonment by police?",
        "options": [
            "No, policing is a sovereign function",
            "Yes, under Article 21 and tort law",
            "Only if the PM orders",
            "Only in the Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "After Nilabati Behera and other cases, the government can be held liable for custodial violations under Article 21."
    },
    {
        "id": "ch76-l3-q22",
        "question": "Which of the following is a requirement under Section 80 CPC for suing the government?",
        "options": [
            "Filing a PIL",
            "Obtaining a senior advocate",
            "Giving a 2-month notice specifying the cause of action",
            "Paying a special court fee"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Section 80 CPC requires a 2-month written notice before suing the government."
    },
    {
        "id": "ch76-l3-q23",
        "question": "The Law Commission of India has recommended which change regarding government tort liability?",
        "options": [
            "Complete abolition of liability",
            "Enactment of a comprehensive Act on State tort liability",
            "Maintenance of the status quo",
            "Transfer of all cases to tribunals"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission has recommended comprehensive legislation to codify State tort liability."
    },
    {
        "id": "ch76-l3-q24",
        "question": "Can the State ratify a government contract that was initially void under Article 299?",
        "options": [
            "Yes, ratification can cure the defect",
            "No, a void contract cannot be ratified to become binding",
            "Only with the AG's opinion",
            "Only for defense contracts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A contract void under Article 299 cannot be ratified to become binding on the government."
    },
    {
        "id": "ch76-l3-q25",
        "question": "The principle that no person shall be deprived of property except by authority of law is enshrined in:",
        "options": [
            "Article 21",
            "Article 31",
            "Article 300A",
            "Article 299"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 300A provides this protection for property rights."
    },
    {
        "id": "ch76-l3-q26",
        "question": "Which of the following aspects of government liability remains unsettled in Indian law?",
        "options": [
            "Whether the government can enter contracts",
            "Whether sovereign immunity applies to fundamental rights violations",
            "The precise scope of sovereign functions for tort liability",
            "Whether the government can own property"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The exact boundary between sovereign and non-sovereign functions for tort liability remains debated."
    },
    {
        "id": "ch76-l3-q27",
        "question": "Can private individuals sue government officers personally for tortious acts?",
        "options": [
            "No, officers have absolute immunity",
            "Yes, officers can be personally liable for tortious acts outside the scope of duty",
            "Only the government can be sued",
            "Only for financial torts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Officers acting beyond their authority or with malice can be personally liable."
    },
    {
        "id": "ch76-l3-q28",
        "question": "The Federal Tort Claims Act model (USA) differs from India in that:",
        "options": [
            "USA has codified State tort liability while India relies on common law and judicial interpretation",
            "India has more comprehensive legislation",
            "Both are identical",
            "Neither country allows government suits"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The USA has the FTCA codifying federal tort liability, while India still relies on common law and court decisions."
    },
    {
        "id": "ch76-l3-q29",
        "question": "Under which Article are the assets of former Indian States (princely states) distributed?",
        "options": [
            "Article 294",
            "Article 295",
            "Article 296",
            "Article 297"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 295 deals with the succession to assets and liabilities of the former princely states."
    },
    {
        "id": "ch76-l3-q30",
        "question": "Which of the following best summarizes the current position on government liability in India?",
        "options": [
            "The government has absolute immunity",
            "The government is liable like any other person, subject to limited sovereign immunity for core functions",
            "The government can only be sued with its consent",
            "Only the President can waive immunity"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The government is generally liable, with sovereign immunity limited to core governmental functions and not applicable to fundamental rights violations."
    }
];

export const CHAPTER_76_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
