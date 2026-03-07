import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch77-l1-q1",
        "question": "Which Part of the Indian Constitution deals with",
        "options": ["Part XIV","Part XV","Part XVI","Part XVII"],
        "correctAnswerIndex": 3,
        "explanation": "Part XVII of the Constitution (Articles 343 to 351) deals with Official Language."
    },
    {
        "id": "ch77-l1-q2",
        "question": "According to Article 343, what is the official language of the Union?",
        "options": ["Hindi in Devanagari script","English only","Hindustani","Sanskrit"],
        "correctAnswerIndex": 0,
        "explanation": "Article 343(1) states that the official language of the Union shall be Hindi in Devanagari script."
    },
    {
        "id": "ch77-l1-q3",
        "question": "The Constitution provided that for a period of ______ years from the commencement, the English language shall continue to be used for all official purposes of the Union.",
        "options": ["5 years","10 years","15 years","20 years"],
        "correctAnswerIndex": 2,
        "explanation": "Article 343(2) originally provided for the use of English for 15 years (until 1965)."
    },
    {
        "id": "ch77-l1-q4",
        "question": "Which Act allows the use of English for official purposes infinitely beyond the initial 15-year period?",
        "options": ["The Official Languages Act, 1963","The States Reorganisation Act, 1956","The Representation of the People Act, 1951","The Citizenship Act, 1955"],
        "correctAnswerIndex": 0,
        "explanation": "The Official Languages Act of 1963 allows the continued use of English for official purposes and in Parliament indefinitely."
    },
    {
        "id": "ch77-l1-q5",
        "question": "Under Article 344, who has the power to appoint a Commission on Official Language?",
        "options": ["The Prime Minister","The Parliament","The President","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "Article 344(1) empowers the President to appoint a Commission on Official Language after 5 years and 10 years from the commencement of the Constitution."
    },
    {
        "id": "ch77-l1-q6",
        "question": "How many members are there in the Parliamentary Committee on Official Language (Article 344)?",
        "options": ["10","20","30","40"],
        "correctAnswerIndex": 2,
        "explanation": "The Committee consists of 30 members (20 from Lok Sabha and 10 from Rajya Sabha)."
    },
    {
        "id": "ch77-l1-q7",
        "question": "Which Schedule of the Indian Constitution lists the languages recognized as official languages?",
        "options": ["Sixth Schedule","Seventh Schedule","Eighth Schedule","Twelfth Schedule"],
        "correctAnswerIndex": 2,
        "explanation": "The Eighth Schedule contains the list of 22 languages presently recognized by the Constitution."
    },
    {
        "id": "ch77-l1-q8",
        "question": "Which Article provides for the",
        "options": ["Article 343","Article 350A","Article 350B","Article 351"],
        "correctAnswerIndex": 2,
        "explanation": "Article 350B (inserted by the 7th Amendment) provides for a Special Officer for Linguistic Minorities appointed by the President."
    },
    {
        "id": "ch77-l1-q9",
        "question": "Article 351 of the Constitution directs the Union to promote the spread of which language?",
        "options": ["English","Hindi","Sanskrit","All regional languages"],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 provides a directive for the development and promotion of Hindi language to serve as a medium of expression for India"
    },
    {
        "id": "ch77-l1-q10",
        "question": "Until Parliament by law otherwise provides, all proceedings in the Supreme Court shall be in:",
        "options": ["Hindi","English","Sanskrit","Any regional language"],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(1) states that until Parliament provides otherwise, all proceedings in the Supreme Court and every High Court shall be in English."
    },
    {
        "id": "ch77-l1-q11",
        "question": "The Governor of a State, with the previous consent of the ______, may authorize the use of Hindi in the proceedings of the High Court.",
        "options": ["Chief Justice of High Court","Chief Justice of India","President","Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(2) allows the use of Hindi/State language in High Court proceedings with the President"
    },
    {
        "id": "ch77-l1-q12",
        "question": "How many languages were originally listed in the Eighth Schedule of the Constitution?",
        "options": ["14","15","18","22"],
        "correctAnswerIndex": 0,
        "explanation": "The Eighth Schedule originally had 14 languages."
    },
    {
        "id": "ch77-l1-q13",
        "question": "Which was the first language to be added to the Eighth Schedule after the commencement of the Constitution?",
        "options": ["Sindhi","Konkani","Manipuri","Nepali"],
        "correctAnswerIndex": 0,
        "explanation": "Sindhi was added by the 21st Amendment Act of 1967."
    },
    {
        "id": "ch77-l1-q14",
        "question": "Konkani, Manipuri, and Nepali were added to the Eighth Schedule by which amendment?",
        "options": ["21st Amendment","71st Amendment","92nd Amendment","96th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 71st Amendment Act of 1992 added Konkani, Manipuri, and Nepali."
    },
    {
        "id": "ch77-l1-q15",
        "question": "Bodo, Dogri, Maithili, and Santhali were added to the Eighth Schedule by which amendment?",
        "options": ["71st Amendment","92nd Amendment","96th Amendment","97th Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 92nd Amendment Act (2003) added these four languages."
    },
    {
        "id": "ch77-l1-q16",
        "question": "Which was the first language in India to be accorded",
        "options": ["Sanskrit","Tamil","Kannada","Telugu"],
        "correctAnswerIndex": 1,
        "explanation": "Tamil was the first language (in 2004) to be declared a Classical Language."
    },
    {
        "id": "ch77-l1-q17",
        "question": "Article 350A (inserted by 7th Amendment) mandates that every State shall provide adequate facilities for instruction in the ______ at the primary stage of education.",
        "options": ["Regional Language","Hindi Language","Mother-tongue","English Language"],
        "correctAnswerIndex": 2,
        "explanation": "Article 350A provides for primary education in the mother-tongue for children belonging to linguistic minority groups."
    },
    {
        "id": "ch77-l1-q18",
        "question": "Who appoints the Special Officer for Linguistic Minorities?",
        "options": ["The President","The Chief Justice of India","The Prime Minister","The Speaker of Lok Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "The Special Officer is appointed by the President under Article 350B."
    },
    {
        "id": "ch77-l1-q19",
        "question": "Regarding",
        "options": ["Yes, according to Article 345","No, it must be from the Eighth Schedule","Only if the President consents","Only if it is Hindi/English"],
        "correctAnswerIndex": 0,
        "explanation": "Article 345 allows the State Legislature to adopt any one or more of the languages in use in the State or Hindi as the official language of that State."
    },
    {
        "id": "ch77-l1-q20",
        "question": "What is the official language for communication between one State and another State?",
        "options": ["Hindi always","English always","The language authorized by the Union","Sanskrit"],
        "correctAnswerIndex": 2,
        "explanation": "Article 346 states the official language for communication between States (or State/Union) shall be as authorized by the Union (currently Hindi/English by convention/law)."
    },
    {
        "id": "ch77-l1-q21",
        "question": "Is English included in the Eighth Schedule of the Constitution?",
        "options": ["Yes","No","Temporarily added","Only for official use"],
        "correctAnswerIndex": 1,
        "explanation": "English is NOT one of the 22 languages listed in the Eighth Schedule."
    },
    {
        "id": "ch77-l1-q22",
        "question": "Which Article provides that every person shall be entitled to submit a representation for the redress of any grievance in any of the languages used in the Union or the State?",
        "options": ["Article 343","Article 350","Article 351","Article 350A"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350 ensures the right to submit representations in any language for grievance redressal."
    },
    {
        "id": "ch77-l1-q23",
        "question": "Which body reviews the progress of the use of Hindi and submits a report to the President?",
        "options": ["The Finance Commission","The Official Language Commission","The Parliamentary Committee on Official Language","The NITI Aayog"],
        "correctAnswerIndex": 2,
        "explanation": "The Committee of Parliament (Art 344) reviews the progress and reports to the President."
    },
    {
        "id": "ch77-l1-q24",
        "question": "The 96th Amendment Act (2011) substituted the word",
        "options": ["Odiya","Odia","Orissan","Utkali"],
        "correctAnswerIndex": 1,
        "explanation": "The 96th Amendment substituted"
    },
    {
        "id": "ch77-l1-q25",
        "question": "Which of the following became the latest language (in Oct 2024 context) to be recommended for Classical Language status?",
        "options": ["Marathi","Bengali","Pali and Prakrit","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "In October 2024, the Union Cabinet approved Classical status for Marathi, Bengali, Pali, Prakrit, and Assamese simultaneously."
    },
    {
        "id": "ch77-l1-q26",
        "question": "The Hindi language should draw its vocabulary primarily from ______ according to Article 351.",
        "options": ["Urdu","Sanskrit","English","Hindustani"],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 specifies drawing vocabulary primarily from Sanskrit and secondarily from other languages."
    },
    {
        "id": "ch77-l1-q27",
        "question": "What is the form of numerals to be used for the official purposes of the Union?",
        "options": ["Devanagari numerals","International form of Indian numerals","Roman numerals","Arabic numerals"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(1) states the form of numerals shall be the international form of Indian numerals."
    },
    {
        "id": "ch77-l1-q28",
        "question": "Can a High Court deliver judgments in Hindi?",
        "options": ["No, always in English","Yes, if the Governor with President","Only in Northern India","Only for lower courts"],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(2) allows the authorizing of Hindi for proceedings, but judgments/orders must generally be in English unless specifically provided by law (though translation is provided)."
    },
    {
        "id": "ch77-l1-q29",
        "question": "Which Article allows the President to direct that a language spoken by a section of the population of a State shall also be officially recognized throughout that State?",
        "options": ["Article 343","Article 347","Article 348","Article 349"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 provides for special provisions relating to language spoken by a section of the population of a State."
    },
    {
        "id": "ch77-l1-q30",
        "question": "The official language of the Judiciary (HC/SC) can be changed into Hindi by:",
        "options": ["Presidential Order","State Governor","Parliament by law","Supreme Court Rules"],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1) states that until Parliament by law otherwise provides, all proceedings shall be in English."
    },
    {
        "id": "ch77-l1-q31",
        "question": "The Official Languages Act, 1963, provides for the use of English for which of the following purposes even after 1965?",
        "options": ["For all official purposes of the Union","For transaction of business in Parliament","For communication between the Union and a State which has not adopted Hindi","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The 1963 Act (amended in 1967) ensures the continued use of English for all purposes mentioned, alongside Hindi."
    },
    {
        "id": "ch77-l1-q32",
        "question": "Which Article provides for the appointment of a",
        "options": ["Article 343","Article 344","Article 345","Article 346"],
        "correctAnswerIndex": 1,
        "explanation": "Article 344(4) provides for the constitution of a committee of 30 members to examine the recommendations of the Commission."
    },
    {
        "id": "ch77-l1-q33",
        "question": "Assertion (A): English is the official language of the Supreme Court of India.\\nReason (R): Article 348(1) provides that until Parliament by law otherwise provides, all proceedings in the Supreme Court shall be in English.",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Article 348 is the specific constitutional provision defining the language of the higher judiciary."
    },
    {
        "id": "ch77-l1-q34",
        "question": "Who appoints the Chairman and members of the Official Language Commission?",
        "options": ["The Chief Justice of India","The President","The Prime Minister","The Lok Sabha Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 344(1), the President constitutes the Commission representing the different languages specified in the Eighth Schedule."
    },
    {
        "id": "ch77-l1-q35",
        "question": "Under the",
        "options": ["Region A, B, and C","North, South, and Central","Hindi, Non-Hindi, and Mixed","Tiers 1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Rules categorize states into Region A (Hindi speaking), Region B (partially Hindi), and Region C (Non-Hindi)."
    },
    {
        "id": "ch77-l1-q36",
        "question": "Which of the following is NOT a criterion for a language to be declared as a",
        "options": ["High antiquity of its early texts over a period of 1500–2000 years","A body of ancient literature/texts considered a valuable heritage","The literary tradition must be original and not borrowed from another speech community","It must be spoken by at least 10% of the Indian population"],
        "correctAnswerIndex": 3,
        "explanation": "Population size is not a criterion for Classical status; it focuses on antiquity and literary heritage."
    },
    {
        "id": "ch77-l1-q37",
        "question": "Which Article allows the Governor (with President",
        "options": ["Article 346","Article 347","Article 348(2)","Article 350"],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(2) specifically allows use for proceedings but maintain English for judgments/decrees unless Parliament laws change."
    },
    {
        "id": "ch77-l1-q38",
        "question": "The Special Officer for Linguistic Minorities (Art 350B) submits reports to which authority?",
        "options": ["The Parliament","The President","The National Commission for Minorities","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Special Officer reports to the President, who then causes them to be laid before each House of Parliament and sent to State Governments."
    },
    {
        "id": "ch77-l1-q39",
        "question": "If a Bill is introduced in the Parliament in Hindi, a translation of the same in ______ must also be published under Article 348(3).",
        "options": ["English","Sanskrit","All 22 languages","Urdu"],
        "correctAnswerIndex": 0,
        "explanation": "Article 348(3) requires an authoritative text in the English language for Bills, Acts, Ordinances, etc., even if they are in Hindi."
    },
    {
        "id": "ch77-l1-q40",
        "question": "Which Amendment Act changed the name of",
        "options": ["92nd Amendment","94th Amendment","96th Amendment","98th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 96th Amendment Act of 2011 changed both the name of the language (Oriya to Odia) and the state (Orissa to Odisha)."
    },
    {
        "id": "ch77-l1-q41",
        "question": "Regarding the 21st Amendment (1967), which language was added to the Eighth Schedule?",
        "options": ["Sindhi","Konkani","Manipuri","Nepali"],
        "correctAnswerIndex": 0,
        "explanation": "Sindhi was the 15th language added via the 21st Amendment."
    },
    {
        "id": "ch77-l1-q42",
        "question": "The B.G. Kher Commission (1955) was the first:",
        "options": ["Backward Classes Commission","Official Language Commission","Finance Commission","States Reorganisation Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The First Official Language Commission (1955) was headed by Shri B.G. Kher."
    },
    {
        "id": "ch77-l1-q43",
        "question": "Which Article provides for the right to petition the President for the recognition of a language spoken by a minority in a State?",
        "options": ["Article 345","Article 347","Article 350","Article 350A"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 empowers the President to direct a State to recognize a language spoken by a section of its population."
    },
    {
        "id": "ch77-l1-q44",
        "question": "If two states agree to use Hindi for communication between them, which Article governs this?",
        "options": ["Article 343","Article 346","Article 344","Article 349"],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 346 allows two or more States to agree that the official language for communication between them shall be Hindi."
    },
    {
        "id": "ch77-l1-q45",
        "question": "Which language was added most recently to the Eighth Schedule among the following?",
        "options": ["Santhali","Sindhi","Manipuri","Konkani"],
        "correctAnswerIndex": 0,
        "explanation": "Santhali was added by the 92nd Amendment (2003), while Sindhi (1967) and others (1992) were earlier."
    },
    {
        "id": "ch77-l1-q46",
        "question": "Who is currently (as per Constitution) the primary authority to promote the spread of the Hindi language?",
        "options": ["The State Governments","The Union Government (Article 351)","The Supreme Court","The President personally"],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 makes it the duty of the Union to promote the spread and development of the Hindi language."
    },
    {
        "id": "ch77-l1-q47",
        "question": "Can a person take the Civil Services Examination (UPSC) in any of the languages listed in the Eighth Schedule?",
        "options": ["Yes","No, only Hindi/English","Only if they are from that state","Only for optional subjects"],
        "correctAnswerIndex": 0,
        "explanation": "Candidates can opt for any of the 22 languages in the Eighth Schedule as a medium for the examination."
    },
    {
        "id": "ch77-l1-q48",
        "question": "Which of the following bodies advises the Ministry of Education on the development of languages?",
        "options": ["Central Advisory Board of Education (CABE)","Sahitya Akademi","UGC","The Official Language Committee"],
        "correctAnswerIndex": 1,
        "explanation": "While CABE is general, the Sahitya Akademi is specifically for the promotion of Indian languages and literature."
    },
    {
        "id": "ch77-l1-q49",
        "question": "Article 349 provides for",
        "options": ["5 years","10 years","15 years","25 years"],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 relates to the special procedure for language laws during the 15-year transition period."
    },
    {
        "id": "ch77-l1-q50",
        "question": "If a State does not adopt Hindi as an official language, its official language for communication with the Union remains:",
        "options": ["The State language","English","Sanskrit","None"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Official Languages Act, English remains the language of communication between the Union and a non-Hindi state."
    },
    {
        "id": "ch77-l1-q51",
        "question": "The Special Officer for Linguistic Minorities falls under which Ministry",
        "options": ["Ministry of Home Affairs","Ministry of Minority Affairs","Ministry of Culture","Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Special Officer (Commissioner for Linguistic Minorities) is under the Ministry of Minority Affairs."
    },
    {
        "id": "ch77-l1-q52",
        "question": "The",
        "options": ["2004","2010","2014","2024"],
        "correctAnswerIndex": 2,
        "explanation": "Odia was declared a Classical Language in 2014, being the 6th to get the status."
    },
    {
        "id": "ch77-l1-q53",
        "question": "Which of the following is NOT a classical language (as per the status granted *before* 2024)?",
        "options": ["Malayalam","Kannada","Marathi","Telugu"],
        "correctAnswerIndex": 2,
        "explanation": "Before the 2024 expansion, Tamil, Sanskrit, Kannada, Telugu, Malayalam, and Odia were the classical languages. Marathi joined the list in 2024."
    },
    {
        "id": "ch77-l1-q54",
        "question": "According to the Eighth Schedule, how many Dravidian languages are currently listed?",
        "options": ["2","3","4","5"],
        "correctAnswerIndex": 2,
        "explanation": "Tamil, Telugu, Kannada, and Malayalam are the four major Dravidian languages in the 8th Schedule."
    },
    {
        "id": "ch77-l1-q55",
        "question": "The Directive in Article 351 to promote Hindi mentions that it should serve as a medium of expression for the ______ culture of India.",
        "options": ["ancient","secular","composite","spiritual"],
        "correctAnswerIndex": 2,
        "explanation": "The text of Article 351 specifically uses the word"
    },
    {
        "id": "ch77-l1-q56",
        "question": "Is there a constitutional requirement for the President to appoint an Official Language Commission every 10 years?",
        "options": ["Yes, Article 344(1)","No, only once in 10 years after commencement","Only if the Parliament requests","Only for state languages"],
        "correctAnswerIndex": 1,
        "explanation": "Article 344(1) says at the expiration of 5 years and 10 years. It does not mandate a permanent 10-year cycle thereafter."
    },
    {
        "id": "ch77-l1-q57",
        "question": "Which language of the Eight Schedule is NOT the official language of any state of India?",
        "options": ["Nepali","Santhali","Sanskrit","All of the above"],
        "correctAnswerIndex": 2,
        "explanation": "Actually, Sanskrit is an official language of Uttarakhand. Usually,"
    },
    {
        "id": "ch77-l1-q58",
        "question": "In the Eighth Schedule, which language is the primary official language of Sikkim?",
        "options": ["Sikkimese","Nepali","Hindi","English"],
        "correctAnswerIndex": 1,
        "explanation": "Nepali is widely spoken and is one of the official languages of Sikkim."
    },
    {
        "id": "ch77-l1-q59",
        "question": "Under Article 343(3), who can authorize the use of English after the 15-year period?",
        "options": ["The President","The Parliament by law","The Supreme Court","The State Legislatures"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(3) empowers Parliament to provide for the use of English by law beyond 15 years."
    },
    {
        "id": "ch77-l1-q60",
        "question": "Which Article provides that the Union shall have power to issue directions to any State for the use of Hindi?",
        "options": ["Article 344","Article 351","Article 256/257","Article 343"],
        "correctAnswerIndex": 1,
        "explanation": "The Union"
    },
    {
        "id": "ch77-l1-q61",
        "question": "Assertion (A): Article 348(1) mandate of using English in the Supreme Court is not absolute and can be changed by Parliament by law.\\nReason (R): The Official Languages Act, 1963, has already changed this mandate to allow Hindi as the primary language of the Supreme Court for all purposes.",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 2,
        "explanation": "Parliament has the power to change the language of the Supreme Court under Art 348(1), but the 1963 Act has not exercised this power for the SC yet; it only addressed the Union"
    },
    {
        "id": "ch77-l1-q62",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct as per the Oct 2024 cabinet decision, which expanded the list to 11 languages (Original 6 + Marathi, Bengali, Pali, Prakrit, and Assamese)."
    },
    {
        "id": "ch77-l1-q63",
        "question": "Which Article provides for",
        "options": ["Article 343; redundant due to 1963 Act","Article 344; redundant after the first two commissions","Article 349; redundant because the fifteen-year period specified for the special procedure has elapsed","Article 351; redundant as Hindi is now well-developed"],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 specified a special procedure only for the first 15 years from the commencement of the Constitution; since that period is over, the article is now of historical/redundant significance."
    },
    {
        "id": "ch77-l1-q64",
        "question": "Regarding",
        "options": ["The office was created by the original Constitution under Article 350B","The Commissioner is appointed by the Governor of each state","The office was created by the 7th Constitutional Amendment Act based on the SRC recommendations","The Commissioner has the power of a High Court for enforcing rights"],
        "correctAnswerIndex": 2,
        "explanation": "The 7th Amendment (1956) based on the States Reorganisation Commission (SRC) recommendations inserted Article 350B."
    },
    {
        "id": "ch77-l1-q65",
        "question": "Assertion (A): The Governor of a state can authorize the use of Hindi in the proceedings of a High Court without any central interference.\\nReason (R): Article 348(2) specifies that the",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is false but R is true","A is true but R is false"],
        "correctAnswerIndex": 2,
        "explanation": "A is false because the President"
    },
    {
        "id": "ch77-l1-q66",
        "question": "Which of the following describes the",
        "options": ["The Hindi version published in the Gazette","The English version published in the Gazette","Both version are equally authoritative","The version in which the bill was originally introduced"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 348(1)(b) and (3), even if an Act is in Hindi, the English translation published under the President"
    },
    {
        "id": "ch77-l1-q67",
        "question": "In the context of Article 351, consider these statements:\\n1. It is the Union",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All are correct. Art 351 is the final article of Part XVII, serving as a directive for the Union."
    },
    {
        "id": "ch77-l1-q68",
        "question": "Regarding Article 347, which of the following is true?",
        "options": ["The President has no role in state languages","The President can direct a state to use a second language if a substantial proportion of the population requests it","It allows for the creation of new languages in the 8th Schedule","It relates to the language of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 empowers the President to provide for the official recognition of a language spoken by a section of a state"
    },
    {
        "id": "ch77-l1-q69",
        "question": "The",
        "options": ["Judicial Appointments","Official Language","Center-State relations","Panchayati Raj"],
        "correctAnswerIndex": 1,
        "explanation": "The Munshi-Ayyangar formula was the compromise solution during the Constituent Assembly debates to resolve the deadlock over Hindi vs English as the official language."
    },
    {
        "id": "ch77-l1-q70",
        "question": "Which of the following is a legal effect of the Official Languages Act, 1963 (Section 3)?",
        "options": ["It made Hindi the only language of the Union","It allowed English to be used for all types of official work and in Parliament","to Hindi","It abolished the 15-year transition period","It transferred the power of language legislation to the States"],
        "correctAnswerIndex": 1,
        "explanation": "Section 3 of the 1963 Act provides that English"
    },
    {
        "id": "ch77-l1-q71",
        "question": "Is",
        "options": ["Yes, as a synonym for Hindi","No, Article 343 mentions","","Yes, according to the Munshi-Ayyangar formula","Only for Radio and TV"],
        "correctAnswerIndex": 1,
        "explanation": "While Article 351 mentions Hindustani as a style to be assimilated, Article 343 specifically names"
    },
    {
        "id": "ch77-l1-q72",
        "question": "Consider the language",
        "options": ["It is the only language of Austro-Asiatic origin","It was added by the 100th Amendment","It is the official language of Jharkhand exclusively","It uses the Gurmukhi script"],
        "correctAnswerIndex": 0,
        "explanation": "Santhali (added by 92nd Amendment) represents the Austro-Asiatic (Munda) group, making it linguistically distinct from Indo-Aryan/Dravidian languages in the schedule."
    },
    {
        "id": "ch77-l1-q73",
        "question": "Can a person submit a representation for the redress of any grievance to the President in",
        "options": ["Yes, under Article 350","No, only in languages used in the Union or the States","Only with the Ministry of External Affairs","Only in the UT of Puducherry"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350 specifies"
    },
    {
        "id": "ch77-l1-q74",
        "question": "Regarding",
        "options": ["Ministry of Home Affairs","Ministry of Culture","Ministry of Education","Ministry of Information and Broadcasting"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Culture currently provides the guidelines and notifications for Classical Languages."
    },
    {
        "id": "ch77-l1-q75",
        "question": "Under Article 348(3), who decides the",
        "options": ["The State Legislature","The Governor through publication in the Gazette (English translation)","The President","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor causes the English translation to be published, which then becomes the authoritative text for the purpose of Article 348."
    },
    {
        "id": "ch77-l1-q76",
        "question": "Consider the following regarding the 71st and 92nd Constitutional Amendment Acts:\\n1. The 71st Amendment added three languages: Konkani, Manipuri, and Nepali.\\n2. The 92nd Amendment added four languages: Bodo, Dogri, Maithili, and Santhali.\\n3. Both amendments were primarily aimed at giving classical status to these languages.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is false as these amendments were for inclusion in the 8th Schedule (Official Languages), not for Classical status."
    },
    {
        "id": "ch77-l1-q77",
        "question": "Regarding the 2024 Classical Language recognition, which of the following is correct about",
        "options": ["They are official languages of Bihar and Madhya Pradesh","They are historical languages of Buddhist and Jain canonical texts respectively","They were added to the 8th Schedule in 2024","They are listed in the 7th Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "Pali is the language of early Buddhist scriptures (Tripitaka), and Prakrit is associated with early Jain texts and various ancient inscriptions (like Ashoka"
    },
    {
        "id": "ch77-l1-q78",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The office (Art 350B) was created (7th Amendment, 1956) to monitor safeguards (like Art 350A mother-tongue instruction) for linguistic minorities."
    },
    {
        "id": "ch77-l1-q79",
        "question": "Which of the following describes the difference between the",
        "options": ["Official language is chosen by the President, regional by the Governor","Official language is used for administrative work; regional languages are all languages spoken in the state","There is no constitutional difference","Official language must be from the 8th Schedule, regional languages need not be"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 345, the State Legislature can choose any language (official/regional) for its official administrative purposes."
    },
    {
        "id": "ch77-l1-q80",
        "question": "In the case of Union Territories, who has the final authority to determine the official language(s)?",
        "options": ["The Lieutenant Governor","The Parliament (Article 239/343)","The President","The Ministry of Home Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "For UTs, the Parliament has the ultimate power to regulate the official language through law, though the President/Administrator may exercise delegated powers."
    },
    {
        "id": "ch77-l1-q81",
        "question": "The",
        "options": ["The translation of Central Acts into all regional languages","The Hindi translation of Central Acts to be treated as","under Article 348","Judgments of the Supreme Court to be delivered in Hindi","The 8th Schedule to be expanded by the Home Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "This Act provides for the authoritative text of Central Acts in Hindi, which fulfills the constitutional requirement of Art 348."
    },
    {
        "id": "ch77-l1-q82",
        "question": "Which of the following is NOT a consequence of being declared a",
        "options": ["Two major annual international awards for scholars of eminence","A","is set up","The University Grants Commission (UGC) can create Professional Chairs for the language in Central Universities","The language is automatically added to the 8th Schedule if not already there"],
        "correctAnswerIndex": 3,
        "explanation": "Classical status and 8th Schedule inclusion are separate processes. For example, Pali and Prakrit have classical status (2024) but are not yet in the 8th Schedule."
    },
    {
        "id": "ch77-l1-q83",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "The Committee is a joint committee (30 members) and by convention, the Union Home Minister is elected as its chairperson."
    },
    {
        "id": "ch77-l1-q84",
        "question": "Which Article provides that",
        "options": ["Article 350","Article 351","Article 29","Article 30"],
        "correctAnswerIndex": 0,
        "explanation": "Article 350 ensures the right to use any language for grievance redressal without disqualification."
    },
    {
        "id": "ch77-l1-q85",
        "question": "The status of",
        "options": ["Official Language Commission","A committee of linguistic experts constituted by the Ministry of Culture","Inter-State Council","National Security Council"],
        "correctAnswerIndex": 1,
        "explanation": "The criteria were evolved by a committee of experts representing linguistic fields under the Ministry of Culture."
    },
    {
        "id": "ch77-l1-q86",
        "question": "Regarding the 92nd Amendment (2003), which language was NOT added to the Schedule?",
        "options": ["Bodo","Dogri","Maithili","Nepali"],
        "correctAnswerIndex": 3,
        "explanation": "Nepali was added by the 71st Amendment (1992)."
    },
    {
        "id": "ch77-l1-q87",
        "question": "Can a State Legislature pass a law making",
        "options": ["Yes, Article 345 does not restrict the choice to the 8th Schedule","No, it must be an Indian language","Only if French is spoken by 10% population","Only with Parliament"],
        "correctAnswerIndex": 0,
        "explanation": "Article 345 states"
    },
    {
        "id": "ch77-l1-q88",
        "question": "Article 351 directs the Union to secure the enrichment of Hindi by assimilating forms from ______.",
        "options": ["Regional languages only","Hindustani and other languages specified in the 8th Schedule","English and Sanskrit","Dravidian languages only"],
        "correctAnswerIndex": 1,
        "explanation": "The text explicitly mentions"
    },
    {
        "id": "ch77-l1-q89",
        "question": "Does the 8th Schedule currently include any foreign language?",
        "options": ["Yes, Nepali","Yes, English","No","Only for diplomatic use"],
        "correctAnswerIndex": 0,
        "explanation": "Nepali (added 1992) is the language of a foreign country (Nepal), though spoken by millions in India (Sikkim, WB)."
    },
    {
        "id": "ch77-l1-q90",
        "question": "If a question arises regarding the translation of a Central Act, which text prevails in the court of law?",
        "options": ["The Hindi translation provided by the Ministry","The English Authoritative Text (Art 348)","The Regional language translation","The one decided by the Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 348, the English authoritative text prevails in case of conflict or for official judicial interpretation."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch77-l2-q1",
        "question": "The Official Languages Act, 1963, provides for the use of English for which of the following purposes even after 1965?",
        "options": ["For all official purposes of the Union","For transaction of business in Parliament","For communication between the Union and a State which has not adopted Hindi","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The 1963 Act (amended in 1967) ensures the continued use of English for all purposes mentioned, alongside Hindi."
    },
    {
        "id": "ch77-l2-q2",
        "question": "Which Article provides for the appointment of a",
        "options": ["Article 343","Article 344","Article 345","Article 346"],
        "correctAnswerIndex": 1,
        "explanation": "Article 344(4) provides for the constitution of a committee of 30 members to examine the recommendations of the Commission."
    },
    {
        "id": "ch77-l2-q3",
        "question": "Assertion (A): English is the official language of the Supreme Court of India.\\nReason (R): Article 348(1) provides that until Parliament by law otherwise provides, all proceedings in the Supreme Court shall be in English.",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Article 348 is the specific constitutional provision defining the language of the higher judiciary."
    },
    {
        "id": "ch77-l2-q4",
        "question": "Who appoints the Chairman and members of the Official Language Commission?",
        "options": ["The Chief Justice of India","The President","The Prime Minister","The Lok Sabha Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 344(1), the President constitutes the Commission representing the different languages specified in the Eighth Schedule."
    },
    {
        "id": "ch77-l2-q5",
        "question": "Under the",
        "options": ["Region A, B, and C","North, South, and Central","Hindi, Non-Hindi, and Mixed","Tiers 1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Rules categorize states into Region A (Hindi speaking), Region B (partially Hindi), and Region C (Non-Hindi)."
    },
    {
        "id": "ch77-l2-q6",
        "question": "Which of the following is NOT a criterion for a language to be declared as a",
        "options": ["High antiquity of its early texts over a period of 1500–2000 years","A body of ancient literature/texts considered a valuable heritage","The literary tradition must be original and not borrowed from another speech community","It must be spoken by at least 10% of the Indian population"],
        "correctAnswerIndex": 3,
        "explanation": "Population size is not a criterion for Classical status; it focuses on antiquity and literary heritage."
    },
    {
        "id": "ch77-l2-q7",
        "question": "Which Article allows the Governor (with President",
        "options": ["Article 346","Article 347","Article 348(2)","Article 350"],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(2) specifically allows use for proceedings but maintain English for judgments/decrees unless Parliament laws change."
    },
    {
        "id": "ch77-l2-q8",
        "question": "The Special Officer for Linguistic Minorities (Art 350B) submits reports to which authority?",
        "options": ["The Parliament","The President","The National Commission for Minorities","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Special Officer reports to the President, who then causes them to be laid before each House of Parliament and sent to State Governments."
    },
    {
        "id": "ch77-l2-q9",
        "question": "If a Bill is introduced in the Parliament in Hindi, a translation of the same in ______ must also be published under Article 348(3).",
        "options": ["English","Sanskrit","All 22 languages","Urdu"],
        "correctAnswerIndex": 0,
        "explanation": "Article 348(3) requires an authoritative text in the English language for Bills, Acts, Ordinances, etc., even if they are in Hindi."
    },
    {
        "id": "ch77-l2-q10",
        "question": "Which Amendment Act changed the name of",
        "options": ["92nd Amendment","94th Amendment","96th Amendment","98th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 96th Amendment Act of 2011 changed both the name of the language (Oriya to Odia) and the state (Orissa to Odisha)."
    },
    {
        "id": "ch77-l2-q11",
        "question": "Regarding the 21st Amendment (1967), which language was added to the Eighth Schedule?",
        "options": ["Sindhi","Konkani","Manipuri","Nepali"],
        "correctAnswerIndex": 0,
        "explanation": "Sindhi was the 15th language added via the 21st Amendment."
    },
    {
        "id": "ch77-l2-q12",
        "question": "The B.G. Kher Commission (1955) was the first:",
        "options": ["Backward Classes Commission","Official Language Commission","Finance Commission","States Reorganisation Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The First Official Language Commission (1955) was headed by Shri B.G. Kher."
    },
    {
        "id": "ch77-l2-q13",
        "question": "Which Article provides for the right to petition the President for the recognition of a language spoken by a minority in a State?",
        "options": ["Article 345","Article 347","Article 350","Article 350A"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 empowers the President to direct a State to recognize a language spoken by a section of its population."
    },
    {
        "id": "ch77-l2-q14",
        "question": "If two states agree to use Hindi for communication between them, which Article governs this?",
        "options": ["Article 343","Article 346","Article 344","Article 349"],
        "correctAnswerIndex": 1,
        "explanation": "The proviso to Article 346 allows two or more States to agree that the official language for communication between them shall be Hindi."
    },
    {
        "id": "ch77-l2-q15",
        "question": "Which language was added most recently to the Eighth Schedule among the following?",
        "options": ["Santhali","Sindhi","Manipuri","Konkani"],
        "correctAnswerIndex": 0,
        "explanation": "Santhali was added by the 92nd Amendment (2003), while Sindhi (1967) and others (1992) were earlier."
    },
    {
        "id": "ch77-l2-q16",
        "question": "Who is currently (as per Constitution) the primary authority to promote the spread of the Hindi language?",
        "options": ["The State Governments","The Union Government (Article 351)","The Supreme Court","The President personally"],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 makes it the duty of the Union to promote the spread and development of the Hindi language."
    },
    {
        "id": "ch77-l2-q17",
        "question": "Can a person take the Civil Services Examination (UPSC) in any of the languages listed in the Eighth Schedule?",
        "options": ["Yes","No, only Hindi/English","Only if they are from that state","Only for optional subjects"],
        "correctAnswerIndex": 0,
        "explanation": "Candidates can opt for any of the 22 languages in the Eighth Schedule as a medium for the examination."
    },
    {
        "id": "ch77-l2-q18",
        "question": "Which of the following bodies advises the Ministry of Education on the development of languages?",
        "options": ["Central Advisory Board of Education (CABE)","Sahitya Akademi","UGC","The Official Language Committee"],
        "correctAnswerIndex": 1,
        "explanation": "While CABE is general, the Sahitya Akademi is specifically for the promotion of Indian languages and literature."
    },
    {
        "id": "ch77-l2-q19",
        "question": "Article 349 provides for",
        "options": ["5 years","10 years","15 years","25 years"],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 relates to the special procedure for language laws during the 15-year transition period."
    },
    {
        "id": "ch77-l2-q20",
        "question": "If a State does not adopt Hindi as an official language, its official language for communication with the Union remains:",
        "options": ["The State language","English","Sanskrit","None"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Official Languages Act, English remains the language of communication between the Union and a non-Hindi state."
    },
    {
        "id": "ch77-l2-q21",
        "question": "The Special Officer for Linguistic Minorities falls under which Ministry",
        "options": ["Ministry of Home Affairs","Ministry of Minority Affairs","Ministry of Culture","Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Special Officer (Commissioner for Linguistic Minorities) is under the Ministry of Minority Affairs."
    },
    {
        "id": "ch77-l2-q22",
        "question": "The",
        "options": ["2004","2010","2014","2024"],
        "correctAnswerIndex": 2,
        "explanation": "Odia was declared a Classical Language in 2014, being the 6th to get the status."
    },
    {
        "id": "ch77-l2-q23",
        "question": "Which of the following is NOT a classical language (as per the status granted *before* 2024)?",
        "options": ["Malayalam","Kannada","Marathi","Telugu"],
        "correctAnswerIndex": 2,
        "explanation": "Before the 2024 expansion, Tamil, Sanskrit, Kannada, Telugu, Malayalam, and Odia were the classical languages. Marathi joined the list in 2024."
    },
    {
        "id": "ch77-l2-q24",
        "question": "According to the Eighth Schedule, how many Dravidian languages are currently listed?",
        "options": ["2","3","4","5"],
        "correctAnswerIndex": 2,
        "explanation": "Tamil, Telugu, Kannada, and Malayalam are the four major Dravidian languages in the 8th Schedule."
    },
    {
        "id": "ch77-l2-q25",
        "question": "The Directive in Article 351 to promote Hindi mentions that it should serve as a medium of expression for the ______ culture of India.",
        "options": ["ancient","secular","composite","spiritual"],
        "correctAnswerIndex": 2,
        "explanation": "The text of Article 351 specifically uses the word"
    },
    {
        "id": "ch77-l2-q26",
        "question": "Is there a constitutional requirement for the President to appoint an Official Language Commission every 10 years?",
        "options": ["Yes, Article 344(1)","No, only once in 10 years after commencement","Only if the Parliament requests","Only for state languages"],
        "correctAnswerIndex": 1,
        "explanation": "Article 344(1) says at the expiration of 5 years and 10 years. It does not mandate a permanent 10-year cycle thereafter."
    },
    {
        "id": "ch77-l2-q27",
        "question": "Which language of the Eight Schedule is NOT the official language of any state of India?",
        "options": ["Nepali","Santhali","Sanskrit","All of the above"],
        "correctAnswerIndex": 2,
        "explanation": "Actually, Sanskrit is an official language of Uttarakhand. Usually,"
    },
    {
        "id": "ch77-l2-q28",
        "question": "In the Eighth Schedule, which language is the primary official language of Sikkim?",
        "options": ["Sikkimese","Nepali","Hindi","English"],
        "correctAnswerIndex": 1,
        "explanation": "Nepali is widely spoken and is one of the official languages of Sikkim."
    },
    {
        "id": "ch77-l2-q29",
        "question": "Under Article 343(3), who can authorize the use of English after the 15-year period?",
        "options": ["The President","The Parliament by law","The Supreme Court","The State Legislatures"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(3) empowers Parliament to provide for the use of English by law beyond 15 years."
    },
    {
        "id": "ch77-l2-q30",
        "question": "Which Article provides that the Union shall have power to issue directions to any State for the use of Hindi?",
        "options": ["Article 344","Article 351","Article 256/257","Article 343"],
        "correctAnswerIndex": 1,
        "explanation": "The Union"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch77-l3-q1",
        "question": "Assertion (A): Article 348(1) mandate of using English in the Supreme Court is not absolute and can be changed by Parliament by law.\\nReason (R): The Official Languages Act, 1963, has already changed this mandate to allow Hindi as the primary language of the Supreme Court for all purposes.",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 2,
        "explanation": "Parliament has the power to change the language of the Supreme Court under Art 348(1), but the 1963 Act has not exercised this power for the SC yet; it only addressed the Union"
    },
    {
        "id": "ch77-l3-q2",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct as per the Oct 2024 cabinet decision, which expanded the list to 11 languages (Original 6 + Marathi, Bengali, Pali, Prakrit, and Assamese)."
    },
    {
        "id": "ch77-l3-q3",
        "question": "Which Article provides for",
        "options": ["Article 343; redundant due to 1963 Act","Article 344; redundant after the first two commissions","Article 349; redundant because the fifteen-year period specified for the special procedure has elapsed","Article 351; redundant as Hindi is now well-developed"],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 specified a special procedure only for the first 15 years from the commencement of the Constitution; since that period is over, the article is now of historical/redundant significance."
    },
    {
        "id": "ch77-l3-q4",
        "question": "Regarding",
        "options": ["The office was created by the original Constitution under Article 350B","The Commissioner is appointed by the Governor of each state","The office was created by the 7th Constitutional Amendment Act based on the SRC recommendations","The Commissioner has the power of a High Court for enforcing rights"],
        "correctAnswerIndex": 2,
        "explanation": "The 7th Amendment (1956) based on the States Reorganisation Commission (SRC) recommendations inserted Article 350B."
    },
    {
        "id": "ch77-l3-q5",
        "question": "Assertion (A): The Governor of a state can authorize the use of Hindi in the proceedings of a High Court without any central interference.\\nReason (R): Article 348(2) specifies that the",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is false but R is true","A is true but R is false"],
        "correctAnswerIndex": 2,
        "explanation": "A is false because the President"
    },
    {
        "id": "ch77-l3-q6",
        "question": "Which of the following describes the",
        "options": ["The Hindi version published in the Gazette","The English version published in the Gazette","Both version are equally authoritative","The version in which the bill was originally introduced"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 348(1)(b) and (3), even if an Act is in Hindi, the English translation published under the President"
    },
    {
        "id": "ch77-l3-q7",
        "question": "In the context of Article 351, consider these statements:\\n1. It is the Union",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All are correct. Art 351 is the final article of Part XVII, serving as a directive for the Union."
    },
    {
        "id": "ch77-l3-q8",
        "question": "Regarding Article 347, which of the following is true?",
        "options": ["The President has no role in state languages","The President can direct a state to use a second language if a substantial proportion of the population requests it","It allows for the creation of new languages in the 8th Schedule","It relates to the language of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 empowers the President to provide for the official recognition of a language spoken by a section of a state"
    },
    {
        "id": "ch77-l3-q9",
        "question": "The",
        "options": ["Judicial Appointments","Official Language","Center-State relations","Panchayati Raj"],
        "correctAnswerIndex": 1,
        "explanation": "The Munshi-Ayyangar formula was the compromise solution during the Constituent Assembly debates to resolve the deadlock over Hindi vs English as the official language."
    },
    {
        "id": "ch77-l3-q10",
        "question": "Which of the following is a legal effect of the Official Languages Act, 1963 (Section 3)?",
        "options": ["It made Hindi the only language of the Union","It allowed English to be used for all types of official work and in Parliament","to Hindi","It abolished the 15-year transition period","It transferred the power of language legislation to the States"],
        "correctAnswerIndex": 1,
        "explanation": "Section 3 of the 1963 Act provides that English"
    },
    {
        "id": "ch77-l3-q11",
        "question": "Is",
        "options": ["Yes, as a synonym for Hindi","No, Article 343 mentions","","Yes, according to the Munshi-Ayyangar formula","Only for Radio and TV"],
        "correctAnswerIndex": 1,
        "explanation": "While Article 351 mentions Hindustani as a style to be assimilated, Article 343 specifically names"
    },
    {
        "id": "ch77-l3-q12",
        "question": "Consider the language",
        "options": ["It is the only language of Austro-Asiatic origin","It was added by the 100th Amendment","It is the official language of Jharkhand exclusively","It uses the Gurmukhi script"],
        "correctAnswerIndex": 0,
        "explanation": "Santhali (added by 92nd Amendment) represents the Austro-Asiatic (Munda) group, making it linguistically distinct from Indo-Aryan/Dravidian languages in the schedule."
    },
    {
        "id": "ch77-l3-q13",
        "question": "Can a person submit a representation for the redress of any grievance to the President in",
        "options": ["Yes, under Article 350","No, only in languages used in the Union or the States","Only with the Ministry of External Affairs","Only in the UT of Puducherry"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350 specifies"
    },
    {
        "id": "ch77-l3-q14",
        "question": "Regarding",
        "options": ["Ministry of Home Affairs","Ministry of Culture","Ministry of Education","Ministry of Information and Broadcasting"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Culture currently provides the guidelines and notifications for Classical Languages."
    },
    {
        "id": "ch77-l3-q15",
        "question": "Under Article 348(3), who decides the",
        "options": ["The State Legislature","The Governor through publication in the Gazette (English translation)","The President","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor causes the English translation to be published, which then becomes the authoritative text for the purpose of Article 348."
    },
    {
        "id": "ch77-l3-q16",
        "question": "Consider the following regarding the 71st and 92nd Constitutional Amendment Acts:\\n1. The 71st Amendment added three languages: Konkani, Manipuri, and Nepali.\\n2. The 92nd Amendment added four languages: Bodo, Dogri, Maithili, and Santhali.\\n3. Both amendments were primarily aimed at giving classical status to these languages.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is false as these amendments were for inclusion in the 8th Schedule (Official Languages), not for Classical status."
    },
    {
        "id": "ch77-l3-q17",
        "question": "Regarding the 2024 Classical Language recognition, which of the following is correct about",
        "options": ["They are official languages of Bihar and Madhya Pradesh","They are historical languages of Buddhist and Jain canonical texts respectively","They were added to the 8th Schedule in 2024","They are listed in the 7th Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "Pali is the language of early Buddhist scriptures (Tripitaka), and Prakrit is associated with early Jain texts and various ancient inscriptions (like Ashoka"
    },
    {
        "id": "ch77-l3-q18",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The office (Art 350B) was created (7th Amendment, 1956) to monitor safeguards (like Art 350A mother-tongue instruction) for linguistic minorities."
    },
    {
        "id": "ch77-l3-q19",
        "question": "Which of the following describes the difference between the",
        "options": ["Official language is chosen by the President, regional by the Governor","Official language is used for administrative work; regional languages are all languages spoken in the state","There is no constitutional difference","Official language must be from the 8th Schedule, regional languages need not be"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 345, the State Legislature can choose any language (official/regional) for its official administrative purposes."
    },
    {
        "id": "ch77-l3-q20",
        "question": "In the case of Union Territories, who has the final authority to determine the official language(s)?",
        "options": ["The Lieutenant Governor","The Parliament (Article 239/343)","The President","The Ministry of Home Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "For UTs, the Parliament has the ultimate power to regulate the official language through law, though the President/Administrator may exercise delegated powers."
    },
    {
        "id": "ch77-l3-q21",
        "question": "The",
        "options": ["The translation of Central Acts into all regional languages","The Hindi translation of Central Acts to be treated as","under Article 348","Judgments of the Supreme Court to be delivered in Hindi","The 8th Schedule to be expanded by the Home Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "This Act provides for the authoritative text of Central Acts in Hindi, which fulfills the constitutional requirement of Art 348."
    },
    {
        "id": "ch77-l3-q22",
        "question": "Which of the following is NOT a consequence of being declared a",
        "options": ["Two major annual international awards for scholars of eminence","A","is set up","The University Grants Commission (UGC) can create Professional Chairs for the language in Central Universities","The language is automatically added to the 8th Schedule if not already there"],
        "correctAnswerIndex": 3,
        "explanation": "Classical status and 8th Schedule inclusion are separate processes. For example, Pali and Prakrit have classical status (2024) but are not yet in the 8th Schedule."
    },
    {
        "id": "ch77-l3-q23",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "The Committee is a joint committee (30 members) and by convention, the Union Home Minister is elected as its chairperson."
    },
    {
        "id": "ch77-l3-q24",
        "question": "Which Article provides that",
        "options": ["Article 350","Article 351","Article 29","Article 30"],
        "correctAnswerIndex": 0,
        "explanation": "Article 350 ensures the right to use any language for grievance redressal without disqualification."
    },
    {
        "id": "ch77-l3-q25",
        "question": "The status of",
        "options": ["Official Language Commission","A committee of linguistic experts constituted by the Ministry of Culture","Inter-State Council","National Security Council"],
        "correctAnswerIndex": 1,
        "explanation": "The criteria were evolved by a committee of experts representing linguistic fields under the Ministry of Culture."
    },
    {
        "id": "ch77-l3-q26",
        "question": "Regarding the 92nd Amendment (2003), which language was NOT added to the Schedule?",
        "options": ["Bodo","Dogri","Maithili","Nepali"],
        "correctAnswerIndex": 3,
        "explanation": "Nepali was added by the 71st Amendment (1992)."
    },
    {
        "id": "ch77-l3-q27",
        "question": "Can a State Legislature pass a law making",
        "options": ["Yes, Article 345 does not restrict the choice to the 8th Schedule","No, it must be an Indian language","Only if French is spoken by 10% population","Only with Parliament"],
        "correctAnswerIndex": 0,
        "explanation": "Article 345 states"
    },
    {
        "id": "ch77-l3-q28",
        "question": "Article 351 directs the Union to secure the enrichment of Hindi by assimilating forms from ______.",
        "options": ["Regional languages only","Hindustani and other languages specified in the 8th Schedule","English and Sanskrit","Dravidian languages only"],
        "correctAnswerIndex": 1,
        "explanation": "The text explicitly mentions"
    },
    {
        "id": "ch77-l3-q29",
        "question": "Does the 8th Schedule currently include any foreign language?",
        "options": ["Yes, Nepali","Yes, English","No","Only for diplomatic use"],
        "correctAnswerIndex": 0,
        "explanation": "Nepali (added 1992) is the language of a foreign country (Nepal), though spoken by millions in India (Sikkim, WB)."
    },
    {
        "id": "ch77-l3-q30",
        "question": "If a question arises regarding the translation of a Central Act, which text prevails in the court of law?",
        "options": ["The Hindi translation provided by the Ministry","The English Authoritative Text (Art 348)","The Regional language translation","The one decided by the Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 348, the English authoritative text prevails in case of conflict or for official judicial interpretation."
    }
];

export const CHAPTER_77_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
