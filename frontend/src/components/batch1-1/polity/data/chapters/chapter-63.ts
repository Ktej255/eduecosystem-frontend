import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch63-l1-q1",
        "question": "The Special Officer for Linguistic Minorities is provided under:",
        "options": ["Article 338", "Article 350B of the Constitution", "National Commission for Minorities Act, 1992", "Official Languages Act, 1963"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350B provides for a Special Officer for Linguistic Minorities (Commissioner for Linguistic Minorities), appointed by the President."
    },
    {
        "id": "ch63-l1-q2",
        "question": "Article 350B was inserted by which Constitutional Amendment?",
        "options": ["1st Amendment", "7th Constitutional Amendment Act, 1956", "42nd Amendment", "44th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350B was inserted by the 7th Constitutional Amendment Act, 1956, on the recommendation of the States Reorganisation Commission."
    },
    {
        "id": "ch63-l1-q3",
        "question": "The Commissioner for Linguistic Minorities (CLM) is appointed by:",
        "options": ["The Parliament", "The President of India", "The Supreme Court", "The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 350B(1), the President appoints the Special Officer for Linguistic Minorities."
    },
    {
        "id": "ch63-l1-q4",
        "question": "The primary duty of the CLM is to:",
        "options": ["Create new languages", "Investigate all matters relating to the safeguards provided for linguistic minorities under the Constitution", "Administer Union Territories", "Approve state language policies"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350B(2) mandates the CLM to investigate all matters relating to safeguards for linguistic minorities and report to the President."
    },
    {
        "id": "ch63-l1-q5",
        "question": "The CLM submits reports to:",
        "options": ["The Parliament directly", "The President, who causes them to be laid before Parliament and sent to state governments concerned", "The Supreme Court", "The Home Ministry only"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 350B(2), the CLM reports to the President, who lays the report before Parliament and sends copies to relevant state governments."
    },
    {
        "id": "ch63-l1-q6",
        "question": "Article 29(1) of the Constitution provides:",
        "options": ["Right to education only", "Any section of citizens having a distinct language, script, or culture has the right to conserve the same", "Right to vote only", "Right to property only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 29(1) protects the cultural and linguistic identity of minorities, including the right to conserve their distinct language, script, or culture."
    },
    {
        "id": "ch63-l1-q7",
        "question": "Article 30(1) provides linguistic minorities with the right to:",
        "options": ["Only practice religion", "Establish and administer educational institutions of their choice", "Only form political parties", "Only publish newspapers"],
        "correctAnswerIndex": 1,
        "explanation": "Article 30(1) grants all minorities, whether based on religion or language, the right to establish and administer educational institutions."
    },
    {
        "id": "ch63-l1-q8",
        "question": "Article 350 of the Constitution provides:",
        "options": ["Right to vote in any language", "The right of every person to submit a representation for redress of grievances to any officer or authority of the Union or State in any of the languages used in the Union or State", "Only Hindi as the official language", "Only English as the official language"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350 guarantees the right to use any language of the Union or State for submitting representations to government authorities."
    },
    {
        "id": "ch63-l1-q9",
        "question": "Article 350A provides for:",
        "options": ["Adult education in all languages", "Facilities for instruction in mother tongue at the primary stage of education for children belonging to linguistic minority groups", "Only higher education in English", "Compulsory Hindi education"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A directs every State and local authority to provide adequate facilities for mother-tongue instruction at the primary education stage for linguistic minority children."
    },
    {
        "id": "ch63-l1-q10",
        "question": "The CLM is headquartered at:",
        "options": ["New Delhi", "Allahabad (Prayagraj)", "Mumbai", "Kolkata"],
        "correctAnswerIndex": 1,
        "explanation": "The office of the Commissioner for Linguistic Minorities is headquartered at Allahabad (Prayagraj), Uttar Pradesh."
    },
    {
        "id": "ch63-l1-q11",
        "question": "The CLM has zonal offices at:",
        "options": ["Only New Delhi", "Belgaum, Chennai, and Kolkata", "Only Mumbai", "No zonal offices exist"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM has three zonal offices — South Zone (Belgaum/Chennai), East Zone (Kolkata), and the headquarters at Allahabad."
    },
    {
        "id": "ch63-l1-q12",
        "question": "The Eighth Schedule of the Constitution currently lists:",
        "options": ["14 languages", "18 languages", "22 languages", "25 languages"],
        "correctAnswerIndex": 2,
        "explanation": "The Eighth Schedule currently lists 22 languages including the four added by the 92nd Amendment (2003): Bodo, Dogri, Maithili, and Santhali."
    },
    {
        "id": "ch63-l1-q13",
        "question": "A linguistic minority is determined at which level?",
        "options": ["National level only", "State/Union Territory level", "District level only", "Village level only"],
        "correctAnswerIndex": 1,
        "explanation": "As per the Supreme Court in TMA Pai Foundation (2002), linguistic minority status is determined at the State level — a community is a linguistic minority if it is numerically inferior in a particular state."
    },
    {
        "id": "ch63-l1-q14",
        "question": "The States Reorganisation Commission (1953-55) recommended:",
        "options": ["No protection for linguistic minorities", "The appointment of a Special Officer for Linguistic Minorities, leading to Article 350B", "Only military protection for minorities", "Only economic protection"],
        "correctAnswerIndex": 1,
        "explanation": "The SRC, chaired by Justice Fazal Ali, recommended safeguards for linguistic minorities including the appointment of a Special Officer, leading to the 7th Amendment."
    },
    {
        "id": "ch63-l1-q15",
        "question": "Article 345 provides that:",
        "options": ["Only Hindi can be a state language", "The Legislature of a State may adopt any one or more of the languages in use in the State, or Hindi, as the official language of that State", "Only English is allowed", "States cannot have official languages"],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 empowers state legislatures to adopt one or more languages in use or Hindi as the official language of the state."
    },
    {
        "id": "ch63-l1-q16",
        "question": "The three-language formula for education recommends:",
        "options": ["Only Hindi and English", "Hindi (or regional language in Hindi states), English, and a modern Indian language (preferably a southern language) in Hindi-speaking states", "Only mother tongue", "Only English"],
        "correctAnswerIndex": 1,
        "explanation": "The three-language formula (from NEP 1968) aims at Hindi, English, and a modern Indian language — ensuring linguistic diversity in education."
    },
    {
        "id": "ch63-l1-q17",
        "question": "The CLM investigates safeguards mentioned in which constitutional provisions?",
        "options": ["Only Article 350B", "Articles 29, 30, 347, 350, 350A, and related provisions safeguarding linguistic minorities", "Only Article 14", "Only Article 21"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM investigates safeguards under Articles 29 (cultural rights), 30 (educational rights), 347 (official language in a state), 350 (right to representations), and 350A (mother tongue education)."
    },
    {
        "id": "ch63-l1-q18",
        "question": "Article 347 provides that:",
        "options": ["Only Hindi can be used officially", "The President may, on demand, direct that a language spoken by a substantial proportion of the population of a State be officially recognized throughout or in part of that State", "States must adopt all 22 languages", "Only English can be used in courts"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 enables the President to direct official recognition of a language used by a substantial proportion of a state's population."
    },
    {
        "id": "ch63-l1-q19",
        "question": "The CLM's status is that of a:",
        "options": ["Constitutional body equivalent to a commission", "A one-member constitutional office appointed by the President", "A statutory body under an Act of Parliament", "An executive office created by government order"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM is a one-person constitutional office (not a multi-member commission) directly established by Article 350B."
    },
    {
        "id": "ch63-l1-q20",
        "question": "The Office of the CLM falls under the administrative control of:",
        "options": ["Ministry of Home Affairs", "Ministry of Minority Affairs", "Ministry of Education", "Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Office of the CLM falls under the administrative purview of the Ministry of Minority Affairs."
    },
    {
        "id": "ch63-l1-q21",
        "question": "Which of the following is NOT a function of the CLM?",
        "options": ["Investigating linguistic minority safeguards", "Reporting to the President", "Directing states to change their official language", "Monitoring mother-tongue education facilities"],
        "correctAnswerIndex": 2,
        "explanation": "The CLM cannot direct states to change official languages. The CLM investigates, monitors, and reports — but lacks directive powers over state language policy."
    },
    {
        "id": "ch63-l1-q22",
        "question": "The 92nd Constitutional Amendment Act, 2003 added which languages to the Eighth Schedule?",
        "options": ["Hindi and English", "Bodo, Dogri, Maithili, and Santhali", "Tamil and Telugu", "Marathi and Gujarati"],
        "correctAnswerIndex": 1,
        "explanation": "The 92nd Amendment (2003) added four languages — Bodo, Dogri, Maithili, and Santhali — bringing the total to 22."
    },
    {
        "id": "ch63-l1-q23",
        "question": "The concept of linguistic reorganization of states was primarily based on:",
        "options": ["Religious identity", "Language as the basis for state boundaries, following the Dhar Commission, JVP Committee, and ultimately the Fazal Ali Commission", "Economic factors only", "Military considerations"],
        "correctAnswerIndex": 1,
        "explanation": "Linguistic reorganization followed the Dhar Commission (1948), JVP Committee (1948), and the Fazal Ali Commission (1953-55), making language the primary basis for state formation."
    },
    {
        "id": "ch63-l1-q24",
        "question": "The CLM monitors whether linguistic minorities receive:",
        "options": ["Only financial benefits", "Primary education in mother tongue, use of minority languages in official communications, and representation in government services", "Only political reservations", "Only land rights"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM monitors three key areas: mother-tongue education, minority language use in official dealings, and adequate representation — all constitutional safeguards."
    },
    {
        "id": "ch63-l1-q25",
        "question": "Article 29(2) provides that:",
        "options": ["Only majority language speakers can get admission", "No citizen shall be denied admission to any educational institution maintained or aided by the State on grounds only of religion, race, caste, language, or any of them", "Only English medium schools are allowed", "Only minority institutions can exist"],
        "correctAnswerIndex": 1,
        "explanation": "Article 29(2) prohibits discrimination in admission to state-maintained or state-aided educational institutions based on religion, race, caste, or language."
    },
    {
        "id": "ch63-l1-q26",
        "question": "The Official Languages Act, 1963 provides for:",
        "options": ["Only Hindi as the national language", "Continued use of English for official purposes alongside Hindi even after 1965, and other provisions for official languages", "Abolition of all regional languages", "Only Sanskrit as official language"],
        "correctAnswerIndex": 1,
        "explanation": "The Act allows continued use of English for official purposes of the Union, ensuring language accommodation for non-Hindi linguistic groups."
    },
    {
        "id": "ch63-l1-q27",
        "question": "The number of annual reports submitted by the CLM to the President as of recent years is approximately:",
        "options": ["5 reports", "More than 50 reports", "Only 1 report", "None"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM has been submitting annual reports since the office was created. Over the decades, more than 50 reports have been submitted to the President."
    },
    {
        "id": "ch63-l1-q28",
        "question": "The CLM's recommendations are:",
        "options": ["Legally binding on states", "Advisory in nature — states are expected to act on them but are not legally compelled", "Binding on courts", "Binding on Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The CLM's recommendations are advisory. While the reports are laid before Parliament and sent to state governments, compliance is not legally mandated."
    },
    {
        "id": "ch63-l1-q29",
        "question": "Which Part of the Constitution deals with Official Language provisions?",
        "options": ["Part III", "Part XVII (Articles 343-351)", "Part IV", "Part IX"],
        "correctAnswerIndex": 1,
        "explanation": "Part XVII (Articles 343-351) deals with Official Language — covering the official language of the Union, regional languages, and language of the Supreme Court and High Courts."
    },
    {
        "id": "ch63-l1-q30",
        "question": "Article 351 provides for:",
        "options": ["Abolishing Hindi", "A directive for the spread of Hindi language — it shall be the duty of the Union to promote the spread of Hindi and develop it as a medium of expression for composite culture", "Making English compulsory", "Removing all regional languages"],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 directs the Union to promote Hindi, drawing from Hindustani and Sanskrit, while assimilating elements from other Eighth Schedule languages."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch63-l2-q1",
        "question": "Consider the following about the CLM:\\n1. It is a statutory body.\\n2. It is a constitutional office under Article 350B.\\n3. It was introduced by the 7th Amendment, 1956.\\n4. The CLM reports to the President.\\nWhich are correct?",
        "options": ["1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4", "2 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2, 3, and 4 are correct. Statement 1 is incorrect — CLM is a constitutional office, not statutory."
    },
    {
        "id": "ch63-l2-q2",
        "question": "Assertion (A): The linguistic reorganization of states in 1956 necessitated special safeguards for linguistic minorities.\\nReason (R): When states were reorganized on linguistic lines, speakers of non-dominant languages within each state became linguistic minorities requiring constitutional protection.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Linguistic reorganization created linguistic minorities in every state, necessitating safeguards through Articles 350A and 350B."
    },
    {
        "id": "ch63-l2-q3",
        "question": "Match the following constitutional provisions with their subject:\\nA. Article 343 → Official language of the Union\\nB. Article 345 → Official language(s) of a State\\nC. Article 350 → Language for representations\\nD. Article 350A → Mother tongue instruction\\nWhich are correctly matched?",
        "options": ["Only A and B", "All four are correctly matched", "Only C and D", "Only A"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correctly matched: 343 (Union official language — Hindi in Devanagari), 345 (State official languages), 350 (representations in any language), 350A (mother tongue education)."
    },
    {
        "id": "ch63-l2-q4",
        "question": "Statement I: The CLM monitors safeguards for linguistic minorities at both the Union and State levels.\\nStatement II: The safeguards include education in mother tongue, use of minority languages in administration, and adequate representation in public services.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The CLM monitors three broad categories of safeguards at all government levels — education, administration, and representation."
    },
    {
        "id": "ch63-l2-q5",
        "question": "In TMA Pai Foundation v. State of Karnataka (2002), the Supreme Court held regarding linguistic minorities:",
        "options": ["Linguistic minority status is determined nationally", "Linguistic minority status is determined at the State level — a community that is numerically less than 50% in a state is a linguistic minority in that state", "Only religious minorities have educational rights", "Linguistic minorities have no constitutional protection"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that for linguistic minorities, the unit for determining minority status is the State, not the nation — a landmark ruling for CLM's jurisdiction."
    },
    {
        "id": "ch63-l2-q6",
        "question": "The difference between the CLM (Article 350B) and NCM (NCM Act, 1992) is:\\n1. CLM is constitutional; NCM is statutory\\n2. CLM focuses on linguistic minorities; NCM on religious minorities\\n3. CLM is a single-officer office; NCM is a multi-member commission\\nWhich are correct?",
        "options": ["1 only", "1, 2 and 3", "2 and 3 only", "1 and 2 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three differences are correct — CLM is constitutional/linguistic/single-officer while NCM is statutory/religious/multi-member."
    },
    {
        "id": "ch63-l2-q7",
        "question": "Assertion (A): The three-language formula has faced implementation challenges.\\nReason (R): Hindi-speaking states have often not implemented the third language (a southern language) effectively, while some southern states have resisted Hindi learning.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The three-language formula has been uneven — Hindi belt states often substitute Sanskrit for the third language, while Tamil Nadu and some southern states resist Hindi."
    },
    {
        "id": "ch63-l2-q8",
        "question": "The CLM has identified key challenges including:\\n1. Non-availability of teachers for minority language instruction\\n2. Lack of textbooks in minority languages\\n3. Administrative apathy towards linguistic safeguards\\n4. Absence of data on linguistic minority populations\\nWhich are documented challenges?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are documented in CLM's annual reports — teacher shortage, textbook unavailability, administrative neglect, and data gaps."
    },
    {
        "id": "ch63-l2-q9",
        "question": "Statement I: Hindi is the 'national language' of India as declared by the Constitution.\\nStatement II: The Constitution designates Hindi in Devanagari script as the 'official language' of the Union, not as the 'national language.'\\nSelect the correct answer:",
        "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 2,
        "explanation": "Only Statement II is correct. The Constitution does not designate any language as a 'national language.' Article 343 designates Hindi as the 'official language' of the Union."
    },
    {
        "id": "ch63-l2-q10",
        "question": "In D.A.V. College, Bhatinda v. State of Punjab (1971), the Supreme Court held:",
        "options": ["Linguistic minorities have no educational rights", "Hindi-speaking communities in Punjab are linguistic minorities and can establish and administer educational institutions under Article 30", "Only Punjabi speakers have educational rights in Punjab", "All colleges must teach in Punjabi only"],
        "correctAnswerIndex": 1,
        "explanation": "The SC recognized Hindi speakers in Punjab as a linguistic minority entitled to Article 30 rights — establishing that the state is the unit for determining minority status."
    },
    {
        "id": "ch63-l2-q11",
        "question": "The CLM's report format typically covers:\\n1. State-wise compliance with linguistic safeguards\\n2. Status of mother-tongue education facilities\\n3. Complaints received and their resolution\\n4. Recommendations for improvements\\nSelect the correct answer:",
        "options": ["1 only", "1, 2, 3 and 4", "3 and 4 only", "1 and 2 only"],
        "correctAnswerIndex": 1,
        "explanation": "CLM reports comprehensively cover state-wise compliance, education facilities, complaint handling, and forward-looking recommendations."
    },
    {
        "id": "ch63-l2-q12",
        "question": "Assertion (A): The NEP 2020 has implications for linguistic minority education.\\nReason (R): NEP 2020 emphasizes mother tongue/regional language as the medium of instruction up to Class 5 (preferably Class 8), which directly impacts the CLM's mandate under Article 350A.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEP 2020's emphasis on mother tongue instruction aligns with Article 350A and has significant implications for linguistic minority education facilitated by CLM."
    },
    {
        "id": "ch63-l2-q13",
        "question": "The Gujral Committee on the use of Hindi alongside English considered:",
        "options": ["Abolishing English entirely", "Progressive use of Hindi in Union government offices while ensuring that non-Hindi speakers' rights under Article 350 are protected", "Making English the sole official language", "Removing all regional languages"],
        "correctAnswerIndex": 1,
        "explanation": "The Gujral Committee recommended progressive Hindi use while safeguarding the rights of non-Hindi speakers — balancing national integration with linguistic diversity."
    },
    {
        "id": "ch63-l2-q14",
        "question": "Statement I: Article 346 provides that the language authorized for use in the Union shall be the official language for inter-state communication.\\nStatement II: If two states agree, Hindi may be used for inter-state communication between them.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Article 346 governs inter-state communication language — the authorized Union language (English/Hindi) is used, and Hindi can be used by mutual agreement."
    },
    {
        "id": "ch63-l2-q15",
        "question": "The CLM's monitoring of linguistic safeguards includes checking whether:\\n1. State governments provide forms and notices in minority languages\\n2. Government orders and rules are available in minority languages\\n3. Minority language speakers can use their language in courts at lower levels\\n4. Broadcasting services cover minority languages\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "CLM monitors all aspects of linguistic accommodation — government forms, official publications, court proceedings, and broadcasting services for linguistic minorities."
    },
    {
        "id": "ch63-l2-q16",
        "question": "The safeguards for linguistic minorities as per the Nehru-Nagappa formula (1956) include:",
        "options": ["Only educational rights", "Education in mother tongue at primary level, use of minority languages at district and state levels for official purposes where speakers constitute a defined percentage", "Only employment reservation", "Only political reservations"],
        "correctAnswerIndex": 1,
        "explanation": "The Nehru-Nagappa safeguards cover education in mother tongue, use of minority languages in administration at district/state levels, and related protections."
    },
    {
        "id": "ch63-l2-q17",
        "question": "Assertion (A): There has been a demand to upgrade the CLM office to a full Commission for Linguistic Minorities.\\nReason (R): A single-officer office has limited capacity compared to a multi-member commission with greater powers, staff, and visibility.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The single-officer model limits CLM's effectiveness compared to multi-member commissions like NCSC, NCST, or NCM."
    },
    {
        "id": "ch63-l2-q18",
        "question": "The protection of endangered and tribal languages is part of CLM's concern because:",
        "options": ["CLM has no interest in language preservation", "Many linguistic minorities speak endangered languages that lack institutional support, educational materials, and official recognition — threatening their survival", "Only Eighth Schedule languages matter", "Only English matters"],
        "correctAnswerIndex": 1,
        "explanation": "CLM's mandate extends to all linguistic minorities, including speakers of endangered and tribal languages that face extinction without institutional support."
    },
    {
        "id": "ch63-l2-q19",
        "question": "Statement I: The Census of India is the primary source for identifying linguistic minorities.\\nStatement II: However, the Census language data has limitations including classification of dialects as separate languages or sub-languages.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Census data is crucial for CLM but faces methodological challenges in dialect/language classification affecting minority identification."
    },
    {
        "id": "ch63-l2-q20",
        "question": "The CLM reviews the implementation of the Presidential Order regarding minority languages at which administrative level?",
        "options": ["Only national level", "At district, state, and Union government levels — checking whether administration accommodates minority languages wherever speakers constitute 15% or more of the population", "Only village level", "Only Supreme Court level"],
        "correctAnswerIndex": 1,
        "explanation": "The Presidential Orders and Government directives require accommodation of minority languages where speakers constitute significant proportions. CLM reviews compliance at all levels."
    },
    {
        "id": "ch63-l2-q21",
        "question": "The language composition of India as per Census shows approximately:\\n1. Hindi speakers — ~44% (including related dialects)\\n2. Bengali — ~8%\\n3. Marathi — ~7%\\n4. Telugu — ~7%\\nThis data is relevant to CLM because:",
        "options": ["It has no relevance", "It identifies which language groups constitute minorities in which states, directly informing CLM's investigation priorities", "Only for cultural purposes", "Only for entertainment purposes"],
        "correctAnswerIndex": 1,
        "explanation": "Census language data determines linguistic minority status at the state level, which is fundamental to CLM's investigative mandate."
    },
    {
        "id": "ch63-l2-q22",
        "question": "Assertion (A): The anti-Hindi agitation in Tamil Nadu (1960s) had lasting implications for India's language policy.\\nReason (R): The agitation led to the Official Languages Act amendment ensuring continued use of English alongside Hindi, protecting linguistic minorities in non-Hindi states.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The anti-Hindi agitation resulted in the 1967 amendment to the Official Languages Act, ensuring English would continue indefinitely alongside Hindi."
    },
    {
        "id": "ch63-l2-q23",
        "question": "The CLM's powers include:\\n1. Investigating safeguard implementation\\n2. Receiving and processing complaints\\n3. Recommending measures to governments\\n4. Issuing binding orders to states\\nWhich are correct?",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "4 only", "1 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are correct. Statement 4 is incorrect — CLM can only recommend, not issue binding orders to states."
    },
    {
        "id": "ch63-l2-q24",
        "question": "The Classical Languages status in India recognizes languages based on:\\n1. High antiquity of early texts\\n2. Rich ancient heritage\\n3. Original literary tradition\\n4. Not borrowed from another language community\\nCurrently recognized classical languages include Tamil, Sanskrit, Telugu, Kannada, Malayalam, and Odia. This relates to CLM's work because:",
        "options": ["No relation", "Classical language status strengthens the cultural identity of linguistic groups, affecting minority rights and educational provisions", "Only financial implications", "Only archaeological significance"],
        "correctAnswerIndex": 1,
        "explanation": "Classical language recognition strengthens linguistic identity, educational provisions, and institutional support — all areas CLM monitors for minority language communities."
    },
    {
        "id": "ch63-l2-q25",
        "question": "Statement I: Some states have established State Linguistic Minority Commissioners to complement the national CLM.\\nStatement II: However, many states lack such dedicated offices, creating gaps in monitoring linguistic safeguards at the state level.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. While some states have state-level linguistic minority offices, many lack them, creating monitoring gaps that CLM highlights in its reports."
    },
    {
        "id": "ch63-l2-q26",
        "question": "The 'script controversy' in some states (e.g., Sindhi, Konkani) relates to CLM because:",
        "options": ["CLM has no interest in scripts", "Disputes over the script for a minority language affect education, official communication, and cultural preservation — areas within CLM's monitoring mandate", "Only courts can decide scripts", "Only Parliament decides scripts"],
        "correctAnswerIndex": 1,
        "explanation": "Script disputes (e.g., Devanagari vs. Arabic for Sindhi, Roman vs. Devanagari for Konkani) directly affect minority language education and official use — CLM's core concerns."
    },
    {
        "id": "ch63-l2-q27",
        "question": "The demand for inclusion of additional languages in the Eighth Schedule impacts CLM because:",
        "options": ["No impact", "Eighth Schedule inclusion provides official recognition, educational support, and institutional backing — strengthening linguistic minorities' rights that CLM monitors", "Only symbolic impact", "Only financial impact"],
        "correctAnswerIndex": 1,
        "explanation": "Eighth Schedule inclusion affects education, official use, media, and institutional support — all areas CLM monitors. Languages like Tulu, Bhojpuri, and others seek inclusion."
    },
    {
        "id": "ch63-l2-q28",
        "question": "CLM's annual report is laid before both Houses of Parliament. This ensures:",
        "options": ["Only formality", "Parliamentary oversight of linguistic safeguard implementation, public accountability of state governments, and democratic scrutiny of minority language protection", "Only archival purposes", "No practical effect"],
        "correctAnswerIndex": 1,
        "explanation": "Parliamentary laying ensures democratic oversight, public accountability, and creates pressure for states to implement linguistic safeguards."
    },
    {
        "id": "ch63-l2-q29",
        "question": "Assertion (A): Technology can help in preserving and promoting minority languages.\\nReason (R): Digital platforms, language apps, online education, and AI-based translation tools can extend minority language access beyond traditional institutional mechanisms.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Digital tools can enhance minority language preservation and access — an evolving area relevant to CLM's mandate."
    },
    {
        "id": "ch63-l2-q30",
        "question": "The CLM's relationship with other constitutional and statutory bodies includes:\\n1. NCM (religious minorities)\\n2. NCSC (Scheduled Castes)\\n3. NCST (Scheduled Tribes)\\n4. NCBC (Backward Classes)\\nThese bodies have overlapping concerns because:",
        "options": ["They have no overlap", "Many communities are simultaneously linguistic minorities AND SCs/STs/BCs/religious minorities — requiring coordinated protection across multiple bodies", "Only CLM matters", "Only NCM matters"],
        "correctAnswerIndex": 1,
        "explanation": "Intersectional identities mean many communities face multiple forms of marginalization — requiring coordination between CLM and other commissions for comprehensive protection."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch63-l3-q1",
        "question": "Consider the complete constitutional framework for linguistic minorities:\\n1. Article 29 — Cultural conservation rights\\n2. Article 30 — Educational institution rights\\n3. Article 345-347 — Official language provisions\\n4. Article 350 — Right to representation in any language\\n5. Article 350A — Mother tongue education\\n6. Article 350B — Commissioner for Linguistic Minorities\\nWhich constitute the comprehensive framework?",
        "options": ["1 and 2 only", "1, 2, 5 and 6 only", "1, 2, 3, 4, 5 and 6", "3, 4, 5 and 6 only"],
        "correctAnswerIndex": 2,
        "explanation": "All six together form the complete constitutional framework — from rights (29/30) to official language provisions (345-347) to specific safeguards (350/350A/350B)."
    },
    {
        "id": "ch63-l3-q2",
        "question": "Assertion (A): India's language policy reflects 'unity in diversity' rather than 'one nation, one language.'\\nReason (R): The Constitution recognizes 22 Eighth Schedule languages, protects linguistic minorities through Articles 29/30/350A-B, and does not impose any single language as the national language.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's multilingual policy — 22 scheduled languages, linguistic minority protections, no 'national language' — reflects accommodation of linguistic diversity."
    },
    {
        "id": "ch63-l3-q3",
        "question": "In Kerala Education Bill case (1958), the Supreme Court held regarding Article 30 and linguistic minorities:",
        "options": ["Article 30 is absolute", "While Article 30 protects the right to establish and administer educational institutions, reasonable regulations ensuring educational standards are permissible — the state cannot, however, destroy the minority character of the institution", "Only religious minorities have educational rights", "The state has unlimited power over minority institutions"],
        "correctAnswerIndex": 1,
        "explanation": "The SC established that Article 30 (applicable to both religious and linguistic minorities) allows reasonable regulation but protects minority institution character."
    },
    {
        "id": "ch63-l3-q4",
        "question": "Statement I: The UNESCO Atlas of World Languages in Danger identifies several Indian languages as endangered.\\nStatement II: India has the highest number of minority languages at risk globally, with CLM's mandate covering protection of these linguistic minorities' rights.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India has significant linguistic diversity with many endangered languages. CLM's mandate extends to safeguarding all linguistic minorities, including speakers of endangered languages."
    },
    {
        "id": "ch63-l3-q5",
        "question": "The challenges faced by the CLM office include:\\n1. Single-officer structure limiting capacity\\n2. Advisory-only recommendations lacking enforcement power\\n3. Inadequate data on linguistic minority populations between censuses\\n4. Limited visibility and public awareness\\n5. Overlapping jurisdictions with NCM on some issues\\nWhich are recognized?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five are well-documented challenges limiting the effectiveness of the CLM's office in protecting linguistic minorities."
    },
    {
        "id": "ch63-l3-q6",
        "question": "In State of Bombay v. Bombay Education Society (1954), the Supreme Court held regarding Article 29(2):",
        "options": ["Only majority language speakers can get admission", "Article 29(2) prevents discrimination in admission based on language — a linguistic minority cannot be denied admission solely because of their language", "Language is irrelevant to education", "Only English medium schools are protected"],
        "correctAnswerIndex": 1,
        "explanation": "The SC upheld Article 29(2)'s protection against linguistic discrimination in admission to state-aided educational institutions — a foundational ruling for linguistic minorities."
    },
    {
        "id": "ch63-l3-q7",
        "question": "Assertion (A): The debate on Hindi imposition has resurfaced with the NEP 2020's language provisions.\\nReason (R): NEP 2020's emphasis on mother tongue instruction and the three-language formula has raised concerns among southern states about potential Hindi imposition, particularly relevant to CLM's monitoring role.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEP 2020's language provisions have reignited the Hindi debate, with CLM needing to monitor whether linguistic minority rights are protected in the new education framework."
    },
    {
        "id": "ch63-l3-q8",
        "question": "The relationship between the Eighth Schedule and linguistic minorities is complex because:\\n1. Non-scheduled languages lack official recognition and institutional support.\\n2. Speakers of non-scheduled languages are more vulnerable as linguistic minorities.\\n3. The process for adding languages to the Schedule is political and contested.\\n4. Scheduled language status affects education, media, and government use.\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four points reflect the complex relationship — Schedule inclusion affects institutional support, minorities' vulnerability, and is politically contested."
    },
    {
        "id": "ch63-l3-q9",
        "question": "Statement I: The Supreme Court in Ahmedabad St. Xavier's College v. State of Gujarat (1974) upheld Article 30 rights for linguistic minorities against governmental interference.\\nStatement II: The court held that even aided minority institutions retain their right to administer, subject only to reasonable regulations for academic standards.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC upheld minority educational rights while allowing reasonable regulations — a key precedent for linguistic minority institution administration."
    },
    {
        "id": "ch63-l3-q10",
        "question": "The concept of 'linguistic federalism' in India means:",
        "options": ["Only one language is used federally", "The federal structure accommodates multiple languages at different levels — Union (Hindi/English), States (regional languages), with constitutional protections for linguistic minorities at each level", "All states must use Hindi", "English is the only federal language"],
        "correctAnswerIndex": 1,
        "explanation": "India's linguistic federalism operates through multi-level language accommodation — Union languages, state languages, and constitutional protections for minorities at every level."
    },
    {
        "id": "ch63-l3-q11",
        "question": "Assertion (A): The protection of linguistic minorities is integral to India's federal democratic framework.\\nReason (R): Without linguistic protections, states reorganized on linguistic lines could marginalize non-dominant language speakers, undermining both federalism and democratic equality.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Linguistic minority protection is essential to prevent majoritarian language policies in linguistically organized states."
    },
    {
        "id": "ch63-l3-q12",
        "question": "Consider the evolution of language policy in India:\\n1. Constituent Assembly debates (1946-49) — Hindi vs. Hindustani vs. English\\n2. Munshi-Ayyangar formula — Hindi as official language with 15-year English transition\\n3. Official Languages Act, 1963 — Continued English use\\n4. Anti-Hindi agitation (1965) — Led to Act amendment\\n5. Three-language formula (NEP 1968)\\n6. NEP 2020 — Mother tongue emphasis\\nThe correct chronological order is:",
        "options": ["1, 2, 3, 4, 5, 6", "2, 1, 3, 4, 5, 6", "1, 3, 2, 4, 5, 6", "3, 1, 2, 4, 5, 6"],
        "correctAnswerIndex": 0,
        "explanation": "Correct chronological order reflecting India's evolving language policy from the Constituent Assembly to NEP 2020."
    },
    {
        "id": "ch63-l3-q13",
        "question": "Statement I: The CLM has recommended that states must specify the threshold (percentage of minority language speakers) at which linguistic safeguards become applicable.\\nStatement II: The commonly accepted threshold by the CLM is 15% or more of the population at the district/taluk level.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 15% threshold at district/taluk level is the commonly accepted benchmark for triggering linguistic safeguards like forms, notices, and administrative accommodation."
    },
    {
        "id": "ch63-l3-q14",
        "question": "The impact of globalization on linguistic minorities includes:\\n1. English dominance threatening minority languages\\n2. Migration creating new linguistic minorities in cities\\n3. Digital platforms creating both opportunities and threats for minority languages\\n4. Economic pressures pushing minority language speakers towards dominant languages\\nWhich are part of CLM's contemporary concerns?",
        "options": ["1 only", "1, 2, 3 and 4", "3 and 4 only", "1 and 2 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent contemporary challenges that CLM must address in the context of globalization's impact on linguistic minorities."
    },
    {
        "id": "ch63-l3-q15",
        "question": "Assertion (A): The CLM's effectiveness would be enhanced by converting it into a multi-member National Commission for Linguistic Minorities.\\nReason (R): A commission structure would provide greater institutional capacity, investigative power, geographic reach, and political visibility compared to a single-officer office.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The single-officer model constrains CLM's capacity. A commission structure (like NCSC/NCST) would significantly enhance effectiveness."
    },
    {
        "id": "ch63-l3-q16",
        "question": "The relationship between language rights and democratic participation is important because:",
        "options": ["Language has no effect on democracy", "Citizens who cannot access government services, education, and justice in their language face effective exclusion from democratic participation — making linguistic safeguards essential for substantive democracy", "Only voting requires language accommodation", "Only courts need multilingual facilities"],
        "correctAnswerIndex": 1,
        "explanation": "Language barriers can effectively disenfranchise citizens, making linguistic safeguards essential for meaningful democratic participation — a core concern of CLM."
    },
    {
        "id": "ch63-l3-q17",
        "question": "Statement I: The Peoples' Linguistic Survey of India (PLSI) documented over 780 languages in India.\\nStatement II: This is significantly more than the Census-recognized count, highlighting the challenge of protecting numerous small linguistic minorities.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. PLSI documented 780+ languages compared to Census's ~121 languages — revealing the vast diversity and the challenge of protecting smaller linguistic communities."
    },
    {
        "id": "ch63-l3-q18",
        "question": "The SDGs relevant to CLM's mandate include:\\n1. SDG 4 — Quality Education (in mother tongue)\\n2. SDG 10 — Reduced Inequalities (linguistic inclusion)\\n3. SDG 16 — Peace, Justice and Strong Institutions (linguistic access to justice)\\nWhich are correct?",
        "options": ["1 only", "1, 2 and 3", "2 and 3 only", "None"],
        "correctAnswerIndex": 1,
        "explanation": "All three SDGs are relevant — education in mother tongue (SDG 4), reducing linguistic inequality (SDG 10), and ensuring access to justice in minority languages (SDG 16)."
    },
    {
        "id": "ch63-l3-q19",
        "question": "Consider the intersection of linguistic rights with other fundamental rights:\\n1. Article 14 (Equality) — Equal treatment regardless of language\\n2. Article 19(1)(a) (Speech) — Right to express in any language\\n3. Article 21 (Life/Liberty) — Linguistic access to justice\\n4. Article 25 (Religion) — Language of religious practice\\nWhich intersections are recognized?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four intersections are recognized — linguistic rights intersect with equality, speech, life/liberty, and religious freedom, creating a web of constitutional protections."
    },
    {
        "id": "ch63-l3-q20",
        "question": "Assertion (A): Inter-state migration has created new linguistic minority issues in metropolitan areas.\\nReason (R): Migrants from other linguistic regions (e.g., Hindi speakers in Maharashtra, Bengali speakers in Delhi) form sizeable linguistic minorities requiring safeguards.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Urban migration creates new linguistic minority populations requiring accommodation in education, administration, and public services."
    },
    {
        "id": "ch63-l3-q21",
        "question": "Statement I: The concept of 'linguistic justice' requires not just formal equality but substantive accommodation of linguistic diversity.\\nStatement II: This includes making government services, education, and judicial proceedings accessible in minority languages — a core objective of CLM's mandate.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Linguistic justice requires substantive accommodation beyond formal equality — ensuring real access to services, education, and justice in minority languages."
    },
    {
        "id": "ch63-l3-q22",
        "question": "The tribal languages and their protection by CLM presents unique challenges because:\\n1. Many tribal languages lack a written script\\n2. Tribal languages are often not in the Eighth Schedule\\n3. Tribal areas have limited educational infrastructure\\n4. Tribal language speakers are socio-economically marginalized\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four present unique challenges — script absence, non-Schedule status, infrastructure gaps, and socio-economic marginalization compound tribal linguistic minorities' vulnerabilities."
    },
    {
        "id": "ch63-l3-q23",
        "question": "In Unni Krishnan v. State of Andhra Pradesh (1993), the Supreme Court's recognition of the right to education (later formalized in Article 21A) has implications for linguistic minorities because:",
        "options": ["No implications", "Education rights include the right to mother-tongue instruction under Article 350A, and CLM monitors whether this right is substantively provided to linguistic minority children", "Only English education is protected", "Only Hindi education matters"],
        "correctAnswerIndex": 1,
        "explanation": "The right to education includes quality in the child's mother tongue, directly linking Article 21A with 350A — CLM ensures this combined right is effective for linguistic minorities."
    },
    {
        "id": "ch63-l3-q24",
        "question": "Assertion (A): India's language policy must balance national integration with linguistic diversity.\\nReason (R): Excessive uniformity could alienate linguistic minorities, while unchecked fragmentation could undermine national cohesion — the Constitution attempts this balance through multiple provisions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Constitution balances integration (Hindi promotion under Article 351) with diversity (linguistic minority protections under 29/30/350A-B)."
    },
    {
        "id": "ch63-l3-q25",
        "question": "Consider CLM's evolving mandate in the digital age:\\n1. Ensuring government digital services are available in minority languages\\n2. Promoting digital literacy in minority languages\\n3. Monitoring social media for linguistic discrimination\\n4. Advocating for AI and machine translation in minority languages\\nWhich represent contemporary extensions of CLM's mandate?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent how CLM's mandate extends into the digital age — ensuring linguistic minorities are not further marginalized by the digital transformation."
    },
    {
        "id": "ch63-l3-q26",
        "question": "Statement I: The multilingual structure of Indian courts (Supreme Court in English, High Courts in English/Hindi, lower courts in regional languages) has implications for linguistic minorities seeking justice.\\nStatement II: CLM monitors whether linguistic minorities can access lower courts in their language, especially in mixed-language districts.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The multilingual court structure affects access to justice for linguistic minorities, and CLM monitors this crucial safeguard."
    },
    {
        "id": "ch63-l3-q27",
        "question": "The comprehensive institutional framework for language protection includes:\\n1. CLM (constitutional) — Monitoring linguistic safeguards\\n2. NCM (statutory) — Religious minorities including linguistic concerns\\n3. Official Language Department — Union language policy\\n4. State Language Departments — State language implementation\\n5. CIIL (Central Institute of Indian Languages) — Language research/development\\nWhich constitute the complete framework?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3, 4 and 5", "5 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five institutions together form the comprehensive language protection and promotion framework in India."
    },
    {
        "id": "ch63-l3-q28",
        "question": "Assertion (A): The disappearance of minority languages represents a loss of cultural heritage and democratic plurality.\\nReason (R): Each language encodes unique worldviews, traditional knowledge, and cultural expressions — their loss diminishes India's pluralistic character that the Constitution seeks to protect.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Language extinction means loss of unique knowledge systems and cultural heritage — directly relevant to CLM's constitutional mandate of protecting linguistic minorities."
    },
    {
        "id": "ch63-l3-q29",
        "question": "Consider the dual challenge facing CLM:\\n1. Protecting existing linguistic minorities' rights in their current states\\n2. Addressing new forms of linguistic marginalization (digital exclusion, migration, globalization)\\nHow should the CLM's mandate evolve?",
        "options": ["No evolution needed", "The mandate should expand to cover both traditional safeguards (education, administration) and contemporary challenges (digital inclusion, migrant language rights, endangered language preservation)", "Only traditional safeguards matter", "Only digital challenges matter"],
        "correctAnswerIndex": 1,
        "explanation": "CLM's mandate must evolve to address both traditional safeguards and contemporary challenges — digital exclusion, migration-related minorities, and language endangerment."
    },
    {
        "id": "ch63-l3-q30",
        "question": "Statement I: The CLM's constitutional office represents India's commitment to protecting linguistic pluralism within a federal democratic framework.\\nStatement II: However, the office's effectiveness depends on adequate resources, enforcement mechanisms, and genuine political will to implement linguistic safeguards across all states.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The constitutional mandate reflects commitment to linguistic pluralism, but effective implementation requires institutional strengthening beyond the current single-officer model."
    }
];

export const CHAPTER_63_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
