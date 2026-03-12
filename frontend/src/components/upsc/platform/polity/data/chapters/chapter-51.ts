import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch51-l1-q1",
        "question": "Which Article of the Constitution provides for the Special Officer for Linguistic Minorities?",
        "options": ["Article 350","Article 350A","Article 350B","Article 351"],
        "correctAnswerIndex": 2,
        "explanation": "Article 350B was inserted by the 7th Constitutional Amendment Act, 1956."
    },
    {
        "id": "ch51-l1-q2",
        "question": "The Special Officer for Linguistic Minorities was created as a result of the recommendation of which commission?",
        "options": ["Mandal Commission","States Reorganisation Commission (SRC)","Sarkaria Commission","Shah Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The SRC recognized the need for a central officer to monitor safeguards for minority language speakers after states were reorganized on a linguistic basis."
    },
    {
        "id": "ch51-l1-q3",
        "question": "Which Constitutional Amendment Act created the office of Special Officer for Linguistic Minorities?",
        "options": ["1st Amendment","7th Amendment","42nd Amendment","44th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 7th Amendment (1956) introduced Art 350B."
    },
    {
        "id": "ch51-l1-q4",
        "question": "Who appoints the Special Officer for Linguistic Minorities?",
        "options": ["The Prime Minister","The President of India","The Union Home Minister","The Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "The officer is appointed by the President."
    },
    {
        "id": "ch51-l1-q5",
        "question": "To whom does the Special Officer for Linguistic Minorities submit his reports?",
        "options": ["The Parliament","The President of India","The Prime Minister","The Ministry of Home Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "As per Art 350B(2), he reports to the President."
    },
    {
        "id": "ch51-l1-q6",
        "question": "The Special Officer for Linguistic Minorities is popularly known as:",
        "options": ["The Language Protector","Commissioner for Linguistic Minorities (CLM)","Minority Ambassador","Language Ombudsman"],
        "correctAnswerIndex": 1,
        "explanation": "The post is officially designated as the Commissioner for Linguistic Minorities."
    },
    {
        "id": "ch51-l1-q7",
        "question": "The Commissioner for Linguistic Minorities (CLM) is under the administrative control of which ministry?",
        "options": ["Ministry of Home Affairs","Ministry of Minority Affairs","Ministry of Education","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "Initially under Home Affairs, it was later transferred to the Ministry of Minority Affairs (since 2006)."
    },
    {
        "id": "ch51-l1-q8",
        "question": "Where is the headquarters of the Commissioner for Linguistic Minorities (CLM) located?",
        "options": ["New Delhi","Prayagraj (Allahabad)","Mumbai","Chennai"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM is headquartered in Prayagraj."
    },
    {
        "id": "ch51-l1-q9",
        "question": "Which of the following is the main duty of the Special Officer for Linguistic Minorities?",
        "options": ["To translate the Hindi documents.","To investigate all matters relating to the safeguards provided for linguistic minorities.","To conduct language tests for civil servants.","To declare a language as","."],
        "correctAnswerIndex": 1,
        "explanation": "His primary role is to oversee the implementation of constitutional safeguards (e.g., instruction in mother tongue)."
    },
    {
        "id": "ch51-l1-q10",
        "question": "Article 350A provides for which of the following?",
        "options": ["Instruction in mother-tongue at primary stage of education.","Rights of religious minorities.","Parliament to increase the number of languages.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "Art 350A is a critical safeguard for the education of minority children in their mother tongue."
    },
    {
        "id": "ch51-l1-q11",
        "question": "Who is a",
        "options": ["A group speaking a language listed in 8th Schedule.","A group whose mother tongue is different from the principal language of that state.","A group with a population of less than 1%.","A group that speaks only English."],
        "correctAnswerIndex": 1,
        "explanation": "Linguistic minority status is determined at the state level based on the state"
    },
    {
        "id": "ch51-l1-q12",
        "question": "Does the Commissioner for Linguistic Minorities have the power to stay a State government order?",
        "options": ["Yes","No, his role is primarily investigative and advisory.","Only if the PM orders.","Only during elections."],
        "correctAnswerIndex": 1,
        "explanation": "He monitors and reports, but he cannot judicially interfere in state administration directly."
    },
    {
        "id": "ch51-l1-q13",
        "question": "The CLM maintains regional offices to coordinate with state governments. Which city typifies such an office?",
        "options": ["Belgaum","Kolkata","Chennai","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "CLM has regional offices at Kolkata, Belgaum, and Chennai."
    },
    {
        "id": "ch51-l1-q14",
        "question": "The",
        "options": ["The Election Commission","The Commissioner for Linguistic Minorities","The Finance Commission","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch51-l1-q15",
        "question": "Is the term of office of the CLM fixed by the Constitution?",
        "options": ["Yes, 5 years.","No, it is at the pleasure of the President (and determined by rules).","Only for the first terms.","Fixed at 62 years of age."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350B does not specify a fixed tenure."
    },
    {
        "id": "ch51-l1-q16",
        "question": "According to Art 350B(2), the President shall cause all reports of CLM to be laid before:",
        "options": ["The Supreme Court","Each House of Parliament","The Gram Sabha","The United Nations"],
        "correctAnswerIndex": 1,
        "explanation": "Parliamentary oversight is the mechanism for CLM"
    },
    {
        "id": "ch51-l1-q17",
        "question": "The Commissioner",
        "options": ["The State High Court","The Government of the States concerned","The State Police","The Opposition Leader only"],
        "correctAnswerIndex": 1,
        "explanation": "State governments must see findings related to their jurisdiction."
    },
    {
        "id": "ch51-l1-q18",
        "question": "Who is the primary representative for linguistic minorities at the national level?",
        "options": ["The Commissioner for Linguistic Minorities","The Prime Minister","The Union Home Minister","The NITI Aayog"],
        "correctAnswerIndex": 0,
        "explanation": "He is the constitutional advocate for their safeguards."
    },
    {
        "id": "ch51-l1-q19",
        "question": "Which Article allows every person to submit a representation for grievance redressal in any of the languages used in the Union or State?",
        "options": ["Article 350","Article 351","Article 352","Article 353"],
        "correctAnswerIndex": 0,
        "explanation": "Article 350 protects the right to petition in one"
    },
    {
        "id": "ch51-l1-q20",
        "question": "The",
        "options": ["Only the Central Government.","Every State and local authority within the State.","Commercial schools only.","The Parents only."],
        "correctAnswerIndex": 1,
        "explanation": "It is a mandate for the sub-national administrative units to provide facilities."
    },
    {
        "id": "ch51-l1-q21",
        "question": "Does the Special Officer for Linguistic Minorities have constitutional status?",
        "options": ["Yes","No","Only for the first 10 years","Only if the state allows"],
        "correctAnswerIndex": 0,
        "explanation": "He is established by Article 350B of the Constitution."
    },
    {
        "id": "ch51-l1-q22",
        "question": "The",
        "options": ["Fundamental Rights","States Reorganisation and related institutional changes","GST","Election Reform"],
        "correctAnswerIndex": 1,
        "explanation": "It followed the SCR recommendations of 1955."
    },
    {
        "id": "ch51-l1-q23",
        "question": "Is the Commissioner for Linguistic Minorities required to be a member of Parliament?",
        "options": ["No","Yes","Only if he is a former Speaker.","Only for 6 months."],
        "correctAnswerIndex": 0,
        "explanation": "Usually, a senior bureaucrat or eminent professional is appointed."
    },
    {
        "id": "ch51-l1-q24",
        "question": "The main objective of providing",
        "options": ["Linguistic domination or discrimination by the majority language group.","The use of English.","Learning Hindi.","Reading books."],
        "correctAnswerIndex": 0,
        "explanation": "Protection of cultural and linguistic diversity is a democratic value."
    },
    {
        "id": "ch51-l1-q25",
        "question": "Who can issue directions to states to ensure facilities for instruction in mother-tongue (Art 350A)?",
        "options": ["The Supreme Court","The President of India","The CLM","The UNO"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A empowers the President to issue such directions."
    },
    {
        "id": "ch51-l1-q26",
        "question": "Which year did the CLM receive its first Commissioner?",
        "options": ["1950","1957","1960","1993"],
        "correctAnswerIndex": 1,
        "explanation": "The office was set up in July 1957."
    },
    {
        "id": "ch51-l1-q27",
        "question": "Which body monitors the implementation of the Three Language Formula (TLF)?",
        "options": ["The CLM and Ministry of Education","UPSC","CBI","RBI"],
        "correctAnswerIndex": 0,
        "explanation": "TLF is a policy framework for linguistic balance in education."
    },
    {
        "id": "ch51-l1-q28",
        "question": "If a language is",
        "options": ["Yes, safeguards apply to","regardless of whether their language is in the 8th Schedule.","No, only 8th Schedule languages.","Only if the language has a script.","Only in South India."],
        "correctAnswerIndex": 0,
        "explanation": "Safeguards are for people (minority groups) and their speech, which is a broader category than the 8th Schedule."
    },
    {
        "id": "ch51-l1-q29",
        "question": "The CLM report is laid before the Parliament by:",
        "options": ["The Commissioner himself.","The President of India.","The Minister of Minority Affairs.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350B(2) mandates the President to cause the report to be laid."
    },
    {
        "id": "ch51-l1-q30",
        "question": "Is the post of CLM a multi-member commission like NCSC?",
        "options": ["No, it is a single Special Officer.","Yes, it has 5 members.","Only for alternate years.","It is part of the NHRC."],
        "correctAnswerIndex": 0,
        "explanation": "Article 350B specifically says"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch51-l2-q1",
        "question": "The office of Special Officer for Linguistic Minorities (CLM) was NOT in the original constitution. Why was it added in 1956?",
        "options": ["To provide jobs for retired judges.","Due to the linguistic reorganization of states, which created significant minority groups in new states needing central protection.","To replace the Minority Commission.","By a Supreme Court order in the T.M.A. Pai case."],
        "correctAnswerIndex": 1,
        "explanation": "State borders were drawn along major language lines, but every state had its own linguistic minorities that needed safeguarding from potential majority chauvinism."
    },
    {
        "id": "ch51-l2-q2",
        "question": "Assertion (A): The Commissioner for Linguistic Minorities has the rank of a Cabinet Minister.\\nReason (R): He is appointed by the President under Article 350B.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Wait. Actually, the rank is NOT specifies as Cabinet Minister in the Constitution; currently, it is usually a senior secretary-level officer. Only the Reason is true (appointment by President)."
    },
    {
        "id": "ch51-l2-q3",
        "question": "Which of the following describes Article 350A specifically?",
        "options": ["It allows for petitions in any language.","It directs every state to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children of linguistic minority groups.","It allows the President to declare a language as",".","It is part of the Directive Principles."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350A is a"
    },
    {
        "id": "ch51-l2-q4",
        "question": "How is a",
        "options": ["Based on the language spoken at the national level.","Determined on the basis of the state as a unit; any group with a separate mother tongue from the state","Languages only in the Eighth Schedule.","Only immigrant languages."],
        "correctAnswerIndex": 1,
        "explanation": "Minority status in India is state-specific (T.M.A. Pai judgment logic)."
    },
    {
        "id": "ch51-l2-q5",
        "question": "The CLM works toward the implementation of which",
        "options": ["20-Point Programme.","Practical Six-Point/Seven-Point Programme of Safeguards for Linguistic Minorities.","National Education Policy 1968 only.","The Three-Language Formula only."],
        "correctAnswerIndex": 1,
        "explanation": "These programmes include administrative steps like translating laws and publications into minority languages."
    },
    {
        "id": "ch51-l2-q6",
        "question": "Is the Union Home Minister authorized to give",
        "options": ["Yes.","No, only the President can issue such directions to any state.","Only the Supreme Court.","Only the CLM."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution specifically mentions the"
    },
    {
        "id": "ch51-l2-q7",
        "question": "The Commissioner for Linguistic Minorities (CLM) uses which method to obtain information from States?",
        "options": ["Arresting state officials.","Questionnaires, visits and conferences with state authorities.","Satellite monitoring.","Secret agents."],
        "correctAnswerIndex": 1,
        "explanation": "Civilian administrative monitoring methods are used for investigation."
    },
    {
        "id": "ch51-l2-q8",
        "question": "Where is the Southern regional office of the CLM located?",
        "options": ["Hyderabad","Chennai","Belgaum (Hubli-Dharwad focus)","Bangalore"],
        "correctAnswerIndex": 1,
        "explanation": "The three regional offices are in Kolkata (East), Belgaum (West) - wait, is Belgaum west? It"
    },
    {
        "id": "ch51-l2-q9",
        "question": "Linguistic safeguards apply to which segment of education?",
        "options": ["Post-graduate only.","Primary stage (Art 350A focus).","Technical education only.","Only for IAS training."],
        "correctAnswerIndex": 1,
        "explanation": "Primary education is the most critical stage for mother-tongue foundation."
    },
    {
        "id": "ch51-l2-q10",
        "question": "What does Art 350 state about the",
        "options": ["Must be Hindi or English.","Every person is entitled to submit a representation in ANY of the languages used in the Union or in the State.","Only the language of the majority in that district.","Only languages with a script."],
        "correctAnswerIndex": 1,
        "explanation": "This ensures that language is not a barrier to accessing justice/government."
    },
    {
        "id": "ch51-l2-q11",
        "question": "The CLM annual report is laid before the Parliament by:",
        "options": ["The Union Home Minister.","The President of India.","The Chief Justice of India.","The CLM himself."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350B(2) mandates the President to cause the report to be laid."
    },
    {
        "id": "ch51-l2-q12",
        "question": "Is the status of CLM equivalent to the NCSC (Article 338)?",
        "options": ["Yes.","No, NCSC is a multi-member commission with civil court powers; CLM is a single officer with predominantly investigative/reportive duties.","Yes, both have arrest powers.","No, CLM is not constitutional."],
        "correctAnswerIndex": 1,
        "explanation": "While both are constitutional, their internal architecture and legal powers differ significantly."
    },
    {
        "id": "ch51-l2-q13",
        "question": "Regarding",
        "options": ["Only into Hindi.","States should translate laws/rules into minority languages in districts where a linguistic minority constitutes 15% or more of the population.","They shouldn","Only for supreme court judgments."],
        "correctAnswerIndex": 1,
        "explanation": "The 15% threshold is the standard used for local administrative recognition of minority languages."
    },
    {
        "id": "ch51-l2-q14",
        "question": "The transfer of CLM from Home Ministry to Minority Affairs (2006) was to:",
        "options": ["Reduce the workload of the Home Minister.","Ensure focused attention under a dedicated ministry handling all minority-related subjects.","Satisfy the opposition.","Close the office."],
        "correctAnswerIndex": 1,
        "explanation": "It grouped all minority oversight bodies together for better synergy."
    },
    {
        "id": "ch51-l2-q15",
        "question": "Can the CLM intervene in",
        "options": ["No, only government schools.","He can investigate and recommend, but private aided/unaided schools have rights under Art 30 which he must respect.","Yes, he has absolute power.","Only if the school is old."],
        "correctAnswerIndex": 1,
        "explanation": "His role is limited by other constitutional rights (Art 29/30)."
    },
    {
        "id": "ch51-l2-q16",
        "question": "Which of the following describes the relationship between",
        "options": ["The Official Language must be used exclusively.","The State must ensure that the choice of Official Language does not lead to the marginalization or denial of rights to minority language speakers.","Minority languages are banned.","They are the same."],
        "correctAnswerIndex": 1,
        "explanation": "Coexistence and protection are the constitutional norms."
    },
    {
        "id": "ch51-l2-q17",
        "question": "Has the Parliament enacted any law to specify the",
        "options": ["Yes, 3 years.","No, it remains a Presidential determination by rules.","Yes, 6 years.","Fixed till 70 years of age."],
        "correctAnswerIndex": 1,
        "explanation": "Article 350B is silent on tenure, unlike other bodies where acts specify it."
    },
    {
        "id": "ch51-l2-q18",
        "question": "Wait. In which city is the",
        "options": ["Mumbai","Ahmedabad","Belgaum","Pune"],
        "correctAnswerIndex": 2,
        "explanation": "The three regional offices are Kolkata, Chennai and Belgaum."
    },
    {
        "id": "ch51-l2-q19",
        "question": "Who is the primary audience for the CLM",
        "options": ["The United Nations.","The Parliament and State Legislatures (via state governments).","The Supreme Court.","The Media only."],
        "correctAnswerIndex": 1,
        "explanation": "Democratic review is the intended corrective mechanism."
    },
    {
        "id": "ch51-l2-q20",
        "question": "What does Art 351 focus on?",
        "options": ["Linguistic Minorities.","Directive for development of the Hindi language.","National Emergency.","GST."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350B is for minorities; 351 is for Hindi promotion."
    },
    {
        "id": "ch51-l2-q21",
        "question": "Can the CLM participate in the meetings of the",
        "options": ["No.","Yes, typically to discuss inter-state linguistic issues.","Only if the PM is absent.","Only in election years."],
        "correctAnswerIndex": 1,
        "explanation": "Zonal councils are key for handling regional minority friction."
    },
    {
        "id": "ch51-l2-q22",
        "question": "Which Constitutional Article prohibits any discrimination on grounds of language in education?",
        "options": ["Article 15.","Article 29.","Article 350B.","Article 14."],
        "correctAnswerIndex": 1,
        "explanation": "Art 15, 29 and 30 collectively provide the legal shield which CLM monitors."
    },
    {
        "id": "ch51-l2-q23",
        "question": "How many",
        "options": ["One.","Two.","One for each State.","A commission of 5."],
        "correctAnswerIndex": 0,
        "explanation": "The text says"
    },
    {
        "id": "ch51-l2-q24",
        "question": "The CLM uses questionnaires to find if a state is providing",
        "options": ["Arrest the clerk.","Record the discrepancy in his report and highlight it to the President/Parliament.","Fine the CM.","Switch off the state"],
        "correctAnswerIndex": 1,
        "explanation": "Power is persuasive and based on reporting."
    },
    {
        "id": "ch51-l2-q25",
        "question": "The office of CLM is a reminder that India",
        "options": ["Administrative only.","Linguistic and Cultural as well.","Only for the rich.","Dictatorial."],
        "correctAnswerIndex": 1,
        "explanation": "Linguistic diversity is a pillar of the Indian Union."
    },
    {
        "id": "ch51-l2-q26",
        "question": "Wait. Is the CLM always a retired IAS officer?",
        "options": ["Yes, by law.","Not necessarily, though usually high-level bureaucrats or eminent scholars are chosen.","Must be a High Court Judge.","Must be a Politician."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution doesn"
    },
    {
        "id": "ch51-l2-q27",
        "question": "Which of the following is NOT a safeguard typically monitored by CLM?",
        "options": ["Facility for mother-tongue instruction.","Non-discrimination in state recruitment based on language.","Translation of important laws.","Providing free internet to every minority speaker."],
        "correctAnswerIndex": 3,
        "explanation": "Internet is not part of the constitutional linguistic safeguards package."
    },
    {
        "id": "ch51-l2-q28",
        "question": "The",
        "options": ["Hindi, English and a Regional Language.","Hindi, Sanskrit and English.","Mother tongue, Hindi and English (with variations for non-Hindi states).","Only Indian languages."],
        "correctAnswerIndex": 2,
        "explanation": "TLF is the primary educational compromise in India"
    },
    {
        "id": "ch51-l2-q29",
        "question": "If a language speaker feels their language is",
        "options": ["Yes, CLM can recommend measures for preservation and protection.","No, CLM only handles jobs.","Only if they have a billion speakers.","Only for 8th schedule languages."],
        "correctAnswerIndex": 0,
        "explanation": "Safeguarding the"
    },
    {
        "id": "ch51-l2-q30",
        "question": "The CLM report often mentions",
        "options": ["Low salary.","Lack of schools for minority languages, refusal of government to accept petitions in minority language, etc.","The color of the school building.","The food in the canteen."],
        "correctAnswerIndex": 1,
        "explanation": "Practical barriers to linguistic rights are the primary investigation subjects."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch51-l3-q1",
        "question": "Analyze the",
        "options": ["It declared that minority status is determined at the national level.","It established that for the purposes of Art 30 (and by extension Art 350B monitoring), the","is the unit for determining who constitutes a linguistic minority.","It abolished the office of CLM.","It mandated the use of English in all schools."],
        "correctAnswerIndex": 1,
        "explanation": "This judgment is the bedrock of identifying linguistic minorities in India"
    },
    {
        "id": "ch51-l3-q2",
        "question": "Compare Article 350A and the",
        "options": ["RTE Act ignores mother-tongue.","RTE Act (Section 29) mandates that the medium of instruction shall, as far as practicable, be in the child","They are in conflict.","RTE is only for Hindi speakers."],
        "correctAnswerIndex": 1,
        "explanation": "Statutory law (RTE) reinforces the constitutional directive (350A)."
    },
    {
        "id": "ch51-l3-q3",
        "question": "Assertion (A): The CLM",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Transparency and public debate are the tools for constitutional compliance in the absence of judicial enforcement powers for CLM."
    },
    {
        "id": "ch51-l3-q4",
        "question": "The",
        "options": ["It","It","It","It"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative feasibility meets minority rights at this threshold."
    },
    {
        "id": "ch51-l3-q5",
        "question": "In case of a conflict between the",
        "options": ["The CLM.","The Supreme Court and High Courts via judicial review (Art 226/32).","The Zonal Council.","The Local MLA."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional rights are ultimately adjudicated by the judiciary."
    },
    {
        "id": "ch51-l3-q6",
        "question": "Why is the CLM headquarters in",
        "options": ["Because the first Commissioner lived there.","A historical administrative choice dating back to the 1957 establishment to maintain a distinct identity away from the central ministries (though this has shifted over time).","Because New Delhi was too expensive.","By a lottery."],
        "correctAnswerIndex": 1,
        "explanation": "Geographic placement sometimes reflects historical contingencies of the era."
    },
    {
        "id": "ch51-l3-q7",
        "question": "Analyze the",
        "options": ["No.","Yes,","includes groups speaking any mother tongue, including dialects, which CLM is mandated to protect.","Only if they have a billion speakers.","Only if they are written in Devanagari."],
        "correctAnswerIndex": 1,
        "explanation": "Art 350B protection is for"
    },
    {
        "id": "ch51-l3-q8",
        "question": "The",
        "options": ["He can fire the state Education Minister.","He investigates the extent of the violation and reports it to the President to pressure states for better compliance.","He modifies the formula himself.","He only talks about it in his personal diary."],
        "correctAnswerIndex": 1,
        "explanation": "Reporting is the"
    },
    {
        "id": "ch51-l3-q9",
        "question": "Which of the following describes the",
        "options": ["It is the majority language.","It is a linguistic minority group since Tamil is the principal state language.","It has no status.","It is the official language of the state."],
        "correctAnswerIndex": 1,
        "explanation": "A group"
    },
    {
        "id": "ch51-l3-q10",
        "question": "Art 350B provides for",
        "options": ["Yes, by law.","No, qualifications are not fixed in the Constitution; the choice usually favors high-level administrative experience.","He must be a Professor of English.","He must speak 22 languages."],
        "correctAnswerIndex": 1,
        "explanation": "Ability to handle state-center administrative friction is the key desired skill."
    },
    {
        "id": "ch51-l3-q11",
        "question": "What is the",
        "options": ["Ban on minority languages in jobs.","Ensuring that the lack of knowledge of the official language of the state does not create an unfair barrier at the initial stage of state services recruitment.","Hiring only minority speakers.","Only for IAS."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch51-l3-q12",
        "question": "Evaluate the CLM",
        "options": ["By forcing everyone to speak one language.","By protecting the diversity of languages, it reduces linguistic insecurity and friction, promoting a","model.","By abolishing regional languages.","By encouraging people to move to other countries."],
        "correctAnswerIndex": 1,
        "explanation": "Accommodating diversity is a strategy for long-term national stability."
    },
    {
        "id": "ch51-l3-q13",
        "question": "The",
        "options": ["The first CM.","The Union Government through the","and monitored by CLM.","The Supreme Court.","The UNO."],
        "correctAnswerIndex": 1,
        "explanation": "Safeguards are part of the"
    },
    {
        "id": "ch51-l3-q14",
        "question": "Analysis of Art 350A. If a state says it has",
        "options": ["Yes.","No, the constitutional mandate","is a strong directive that budgetary constraints alone cannot easily bypass.","Only if the PM agrees.","Only during a financial emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The directive is mandatory in its spirit for educational equity."
    },
    {
        "id": "ch51-l3-q15",
        "question": "Does the CLM check for",
        "options": ["No, strictly",".","Yes, both.","Only if they overlap.","Only during religious festivals."],
        "correctAnswerIndex": 0,
        "explanation": "Article 350B is restricted to"
    },
    {
        "id": "ch51-l3-q16",
        "question": "Identify the",
        "options": ["Mumbai.","Belgaum.","Jaipur.","Panaji."],
        "correctAnswerIndex": 1,
        "explanation": "The three regional offices are Kolkata, Chennai and Belgaum."
    },
    {
        "id": "ch51-l3-q17",
        "question": "In a case of",
        "options": ["To deploy the army.","To investigate the underlying causes of linguistic grievance and report with recommendations for friction reduction.","To ban the majority language.","To arrest the CM."],
        "correctAnswerIndex": 1,
        "explanation": "The CLM is an administrative/constitutional watchdog for social peace through linguistic justice."
    },
    {
        "id": "ch51-l3-q18",
        "question": "Review the status of",
        "options": ["No.","Yes, as they speak a language different from the state","Only in Bihar.","Only if they are Brahmins."],
        "correctAnswerIndex": 1,
        "explanation": "Any group with a mother tongue distinct from the state"
    },
    {
        "id": "ch51-l3-q19",
        "question": "Can a person",
        "options": ["No.","Yes (migration, social adaptation), and the safeguards should theoretically follow the speaker in their new linguistic context/state.","Only if the President allows.","Only after a surgery."],
        "correctAnswerIndex": 1,
        "explanation": "Safeguards are"
    },
    {
        "id": "ch51-l3-q20",
        "question": "The CLM uses",
        "options": ["The CLM can file a case for contempt of the Constitution.","The lack of cooperation is reported in the annual report, highlighting the state","The CLM can stop the state","Nothing, he just ignores the state."],
        "correctAnswerIndex": 1,
        "explanation": "Political accountability is the primary corrective."
    },
    {
        "id": "ch51-l3-q21",
        "question": "The",
        "options": ["The Constitution.","The 1961 CM","The Supreme Court.","The UN Charter."],
        "correctAnswerIndex": 1,
        "explanation": "It is a consensus-based administrative guideline for practical governance."
    },
    {
        "id": "ch51-l3-q22",
        "question": "Analyze the",
        "options": ["The CLM and Central Government (Administrator).","The Prime Minister solely.","The Local Police.","The High Court of the nearest state."],
        "correctAnswerIndex": 0,
        "explanation": "CLM oversight extends to all parts of the Indian Union."
    },
    {
        "id": "ch51-l3-q23",
        "question": "Art 350 protects the right to petition in any language",
        "options": ["Yes, as it is a language used in the Union (Official Language).","No, only Indian mother-tongues.","Only for legal cases.","Only for computer science."],
        "correctAnswerIndex": 0,
        "explanation": "The provision is broad and inclusive of established languages of administration."
    },
    {
        "id": "ch51-l3-q24",
        "question": "The CLM also monitors",
        "options": ["To sell books.","Because instruction in mother-tongue (Art 350A) cannot happen without physical availability of learning materials.","To increase the weight of school bags.","To help publishers in Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Infrastructure is key to the realization of the right to education in one"
    },
    {
        "id": "ch51-l3-q25",
        "question": "Is the",
        "options": ["No.","Yes.","Only for 8th schedule languages.","Only if he is a linguist."],
        "correctAnswerIndex": 0,
        "explanation": "CLM is a single-person office, not a part of any other commission board."
    },
    {
        "id": "ch51-l3-q26",
        "question": "Analyze the",
        "options": ["Yes (under Art 350B).","No, only simple appointment.","Only for the first terms.","Only during national emergency."],
        "correctAnswerIndex": 0,
        "explanation": "Appointments by the President under specific constitutional articles usually carry this high protocol status."
    },
    {
        "id": "ch51-l3-q27",
        "question": "What is the",
        "options": ["Not applicable, it is a single-person office.","3 members.","5 members.","1 member."],
        "correctAnswerIndex": 0,
        "explanation": "It"
    },
    {
        "id": "ch51-l3-q28",
        "question": "If a language speaker in State A wants to write a petition to State B. Which language can they use under Art 350?",
        "options": ["State B","Any language","(State B).","Only English.","Only the language of the PM."],
        "correctAnswerIndex": 1,
        "explanation": "The petitioner is protected in their choice of language among those recognized for governance."
    },
    {
        "id": "ch51-l3-q29",
        "question": "The",
        "options": ["That the child feels proud of their tribe.","Transition from the home environment to the school environment without linguistic shock, improving learning outcomes.","That the child doesn","None, it is only political."],
        "correctAnswerIndex": 1,
        "explanation": "Pedagogical logic supports mother-tongue instruction for early childhood development."
    },
    {
        "id": "ch51-l3-q30",
        "question": "The CLM report often uses the term",
        "options": ["Lack of interest by parents.","Administrative apathy at the state/district level and lack of dedicated teachers for minority languages.","The existence of the Internet.","The color of the school buildings."],
        "correctAnswerIndex": 1,
        "explanation": "Systemic implementation gaps are the main concern for constitutional oversight."
    }
];

export const CHAPTER_51_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
