import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch74-l1-q1",
        "question": "Which Part of the Indian Constitution deals with Official Language?",
        "options": [
            "Part XVI",
            "Part XVII",
            "Part XVIII",
            "Part XIX"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XVII (Articles 343 to 351) of the Constitution deals with the Official Language."
    },
    {
        "id": "ch74-l1-q2",
        "question": "According to Article 343, the official language of the Union shall be:",
        "options": [
            "English",
            "Hindi in Devanagari script",
            "Sanskrit",
            "Hindustani"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(1) states that the official language of the Union shall be Hindi in Devanagari script."
    },
    {
        "id": "ch74-l1-q3",
        "question": "For how many years from the commencement of the Constitution was English to continue as official language alongside Hindi?",
        "options": [
            "10 years",
            "15 years",
            "20 years",
            "25 years"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(2) originally provided that English shall continue for 15 years (until 1965) for official purposes of the Union."
    },
    {
        "id": "ch74-l1-q4",
        "question": "The Official Languages Act was enacted in which year?",
        "options": [
            "1950",
            "1956",
            "1963",
            "1976"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Official Languages Act, 1963 was enacted to provide for the languages to be used after the 15-year period."
    },
    {
        "id": "ch74-l1-q5",
        "question": "The Official Languages Act, 1963 provides that English may continue to be used:",
        "options": [
            "For 10 more years",
            "Until 1985",
            "Indefinitely, in addition to Hindi",
            "Only in courts"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 1963 Act provides that English may continue to be used indefinitely in addition to Hindi for all official purposes of the Union."
    },
    {
        "id": "ch74-l1-q6",
        "question": "How many languages are listed in the Eighth Schedule of the Constitution?",
        "options": [
            "14",
            "18",
            "22",
            "25"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Currently, 22 languages are listed in the Eighth Schedule."
    },
    {
        "id": "ch74-l1-q7",
        "question": "Which Constitutional Amendment added Bodo, Dogri, Maithili, and Santhali to the Eighth Schedule?",
        "options": [
            "71st Amendment",
            "86th Amendment",
            "92nd Amendment",
            "100th Amendment"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 92nd Constitutional Amendment Act (2003) added Bodo, Dogri, Maithili, and Santhali."
    },
    {
        "id": "ch74-l1-q8",
        "question": "Which Article provides for the appointment of a Commission on Official Language?",
        "options": [
            "Article 343",
            "Article 344",
            "Article 345",
            "Article 351"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 344 provides for the President to constitute a Commission on Official Language after 5 years and thereafter every 10 years."
    },
    {
        "id": "ch74-l1-q9",
        "question": "The first Official Language Commission was constituted in which year under whose chairmanship?",
        "options": [
            "1955, B.G. Kher",
            "1960, K.M. Munshi",
            "1965, Sarkaria",
            "1975, Gulzarilal Nanda"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The first Official Language Commission was constituted in 1955 under the chairmanship of B.G. Kher."
    },
    {
        "id": "ch74-l1-q10",
        "question": "Article 345 empowers which authority to adopt any language as the official language of a State?",
        "options": [
            "The President",
            "The Governor",
            "The State Legislature",
            "The Parliament"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 345 empowers the State Legislature to adopt any one or more languages in use in the State as the official language(s) of that State."
    },
    {
        "id": "ch74-l1-q11",
        "question": "Which Article provides for the language to be used in the Supreme Court and High Courts?",
        "options": [
            "Article 346",
            "Article 347",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348 provides that the language of the Supreme Court and every High Court shall be English until Parliament by law provides otherwise."
    },
    {
        "id": "ch74-l1-q12",
        "question": "According to Article 348, the authoritative texts of all Bills and Acts shall be in:",
        "options": [
            "Hindi",
            "English",
            "Both Hindi and English",
            "The regional language"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(1) states that the authoritative texts of Bills, Acts, ordinances, orders, and rules shall be in the English language."
    },
    {
        "id": "ch74-l1-q13",
        "question": "Which Article provides for the Special Directive regarding Hindi language development?",
        "options": [
            "Article 349",
            "Article 350",
            "Article 350A",
            "Article 351"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 351 contains a directive for the development and spread of the Hindi language."
    },
    {
        "id": "ch74-l1-q14",
        "question": "Article 350 provides that every person shall be entitled to submit a representation for the redress of any grievance to any officer or authority in:",
        "options": [
            "Only English",
            "Only Hindi",
            "Any language used in the Union or the State",
            "Only the official language of that State"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 350 allows representations in any language used in the Union or the State."
    },
    {
        "id": "ch74-l1-q15",
        "question": "Which Article provides for facilities for instruction in mother-tongue at the primary stage of education?",
        "options": [
            "Article 350",
            "Article 350A",
            "Article 350B",
            "Article 351"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A was added by the 7th Amendment to provide adequate facilities for instruction in mother-tongue at the primary stage."
    },
    {
        "id": "ch74-l1-q16",
        "question": "Article 350B provides for the appointment of:",
        "options": [
            "Commissioner for Linguistic Minorities",
            "Official Language Commission",
            "National Education Commission",
            "Hindi Advisory Board"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 350B provides for a Special Officer for Linguistic Minorities appointed by the President."
    },
    {
        "id": "ch74-l1-q17",
        "question": "The Commissioner for Linguistic Minorities reports to:",
        "options": [
            "The Prime Minister",
            "The President",
            "The Home Minister",
            "The Parliament"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Commissioner for Linguistic Minorities reports to the President, who lays it before each House of Parliament."
    },
    {
        "id": "ch74-l1-q18",
        "question": "Which language was originally listed in the Eighth Schedule and later removed?",
        "options": [
            "English",
            "Sanskrit",
            "Sindhi",
            "None was removed"
        ],
        "correctAnswerIndex": 3,
        "explanation": "No language has been removed from the Eighth Schedule; languages have only been added over time."
    },
    {
        "id": "ch74-l1-q19",
        "question": "The numerals used for official purposes of the Union shall be:",
        "options": [
            "Roman numerals",
            "International form of Indian numerals",
            "Devanagari numerals only",
            "As prescribed by the PM"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(1) specifies that the numerals shall be the international form of Indian numerals."
    },
    {
        "id": "ch74-l1-q20",
        "question": "Which Article provides for language to be used for communication between States?",
        "options": [
            "Article 345",
            "Article 346",
            "Article 347",
            "Article 348"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 346 provides for the language to be used for communication between one State and another or between a State and the Union."
    },
    {
        "id": "ch74-l1-q21",
        "question": "Under Article 346, the language for inter-State communication is:",
        "options": [
            "Hindi only",
            "English only",
            "Hindi or the language authorized for Union purposes",
            "The language of the receiving State"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The authorized language of the Union (currently Hindi and English) is used for inter-State communication."
    },
    {
        "id": "ch74-l1-q22",
        "question": "Article 347 empowers the President to direct that a language spoken by a section of the population be officially recognized in a State. This requires:",
        "options": [
            "A demand by a substantial proportion of the population",
            "A Supreme Court order",
            "A constitutional amendment",
            "A referendum"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 347 allows the President to direct recognition of a language if satisfied that a substantial proportion of the population desires it."
    },
    {
        "id": "ch74-l1-q23",
        "question": "Which of the following languages was NOT originally in the Eighth Schedule?",
        "options": [
            "Hindi",
            "Bengali",
            "Sindhi",
            "Tamil"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Sindhi was added to the Eighth Schedule by the 21st Amendment Act, 1967. It was not in the original list of 14 languages."
    },
    {
        "id": "ch74-l1-q24",
        "question": "The original Eighth Schedule contained how many languages?",
        "options": [
            "14",
            "15",
            "18",
            "22"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The original Eighth Schedule contained 14 languages."
    },
    {
        "id": "ch74-l1-q25",
        "question": "The 21st Amendment Act (1967) added which language to the Eighth Schedule?",
        "options": [
            "Konkani",
            "Manipuri",
            "Sindhi",
            "Nepali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 21st Amendment added Sindhi to the Eighth Schedule."
    },
    {
        "id": "ch74-l1-q26",
        "question": "The 71st Amendment Act (1992) added which languages to the Eighth Schedule?",
        "options": [
            "Bodo, Dogri, Maithili",
            "Konkani, Manipuri, Nepali",
            "Sindhi, Santhali, Maithili",
            "Bodo, Santhali, Dogri"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 71st Amendment added Konkani, Manipuri, and Nepali to the Eighth Schedule."
    },
    {
        "id": "ch74-l1-q27",
        "question": "The Committee of Parliament on Official Language was constituted under which section of the Official Languages Act?",
        "options": [
            "Section 3",
            "Section 4",
            "Section 5",
            "Section 6"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Section 4 of the Official Languages Act, 1963 provides for the constitution of a Committee of Parliament on Official Language."
    },
    {
        "id": "ch74-l1-q28",
        "question": "The Committee of Parliament on Official Language consists of how many members?",
        "options": [
            "20 from Lok Sabha and 10 from Rajya Sabha",
            "10 from Lok Sabha and 5 from Rajya Sabha",
            "30 from Lok Sabha and 10 from Rajya Sabha",
            "25 from Lok Sabha and 15 from Rajya Sabha"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Committee consists of 30 members: 20 from Lok Sabha and 10 from Rajya Sabha."
    },
    {
        "id": "ch74-l1-q29",
        "question": "The three-language formula was recommended by which committee?",
        "options": [
            "Official Language Commission",
            "Kothari Commission",
            "National Education Commission",
            "All of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The three-language formula was recommended by the National Education Commission (Kothari Commission, 1964-66)."
    },
    {
        "id": "ch74-l1-q30",
        "question": "Under the three-language formula, students in Hindi-speaking areas should learn:",
        "options": [
            "Hindi, English, and a modern Indian language",
            "Hindi, Sanskrit, and English",
            "Hindi, Urdu, and English",
            "Hindi, English, and French"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Hindi-speaking students should learn Hindi, English, and a modern Indian language (preferably a South Indian language)."
    },
    {
        "id": "ch74-l1-q31",
        "question": "Can the Governor of a State authorize the use of Hindi or any other language for proceedings of the High Court?",
        "options": [
            "No",
            "Yes, with the consent of the President",
            "Yes, without any condition",
            "Only if English is also used"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(2) allows the Governor with the previous consent of the President to authorize Hindi or any other official language for HC proceedings."
    },
    {
        "id": "ch74-l1-q32",
        "question": "Which of the following is NOT in the Eighth Schedule?",
        "options": [
            "English",
            "Assamese",
            "Gujarati",
            "Kashmiri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "English is not included in the Eighth Schedule, even though it is used as an official language."
    },
    {
        "id": "ch74-l1-q33",
        "question": "The Anti-Hindi agitation of 1965 was primarily led by people of which state?",
        "options": [
            "Kerala",
            "Karnataka",
            "Tamil Nadu",
            "Andhra Pradesh"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The anti-Hindi agitation of 1965 was primarily led by people in Tamil Nadu opposing the imposition of Hindi."
    },
    {
        "id": "ch74-l1-q34",
        "question": "The Official Languages Resolution of 1968 was passed by:",
        "options": [
            "The Supreme Court",
            "The Parliament",
            "The Constituent Assembly",
            "The Planning Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Official Languages Resolution was passed by both Houses of Parliament in 1968."
    },
    {
        "id": "ch74-l1-q35",
        "question": "The 1968 Resolution states that the advancement of Hindi shall not prejudice the use of:",
        "options": [
            "Sanskrit",
            "English",
            "Any of the languages in the Eighth Schedule",
            "All of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Resolution ensured that Hindi advancement would not prejudice any Eighth Schedule language."
    },
    {
        "id": "ch74-l1-q36",
        "question": "Article 344 provides for a Parliamentary Committee to examine the recommendations of the Official Language Commission. This committee consists of:",
        "options": [
            "20 members from Lok Sabha and 10 from Rajya Sabha",
            "10 members each from both Houses",
            "30 from Lok Sabha only",
            "As determined by the Speaker"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Parliamentary Committee under Article 344(4) consists of 20 members from Lok Sabha and 10 from Rajya Sabha."
    },
    {
        "id": "ch74-l1-q37",
        "question": "Which commission is associated with the promotion and development of Hindi as mentioned in Article 351?",
        "options": [
            "Central Hindi Directorate",
            "Official Language Commission",
            "Sahitya Akademi",
            "University Grants Commission"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Central Hindi Directorate works towards the promotion and development of Hindi."
    },
    {
        "id": "ch74-l1-q38",
        "question": "The use of English in the Supreme Court is mandated by:",
        "options": [
            "Article 343",
            "Article 346",
            "Article 348",
            "Article 350"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1) mandates English as the language of the Supreme Court."
    },
    {
        "id": "ch74-l1-q39",
        "question": "Can Parliament provide for the use of Hindi in the Supreme Court?",
        "options": [
            "Yes, by law under Article 348",
            "No, only English can be used",
            "Only with the CJI's consent",
            "Only during an emergency"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 348(1) states that the language shall be English until Parliament by law provides otherwise."
    },
    {
        "id": "ch74-l1-q40",
        "question": "Which language does Article 351 direct the Union to promote?",
        "options": [
            "Sanskrit",
            "Hindi",
            "English",
            "All Eighth Schedule languages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 directs the Union to promote the spread of Hindi so that it may serve as a medium of expression for all elements of the composite culture of India."
    },
    {
        "id": "ch74-l1-q41",
        "question": "According to Article 351, Hindi should draw its vocabulary primarily from:",
        "options": [
            "English",
            "Sanskrit",
            "Urdu",
            "Persian and Arabic"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 specifies that Hindi should draw primarily on Sanskrit and secondarily on other languages of the Eighth Schedule for its vocabulary."
    },
    {
        "id": "ch74-l1-q42",
        "question": "The Classical Language status has been granted to how many Indian languages as of 2024?",
        "options": [
            "4",
            "6",
            "8",
            "11"
        ],
        "correctAnswerIndex": 1,
        "explanation": "As of 2024, six languages have been granted Classical Language status: Tamil, Sanskrit, Kannada, Telugu, Malayalam, and Odia."
    },
    {
        "id": "ch74-l1-q43",
        "question": "Which was the first language to be granted Classical Language status in India?",
        "options": [
            "Sanskrit",
            "Hindi",
            "Tamil",
            "Kannada"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Tamil was the first language granted Classical Language status in 2004."
    },
    {
        "id": "ch74-l1-q44",
        "question": "The Eighth Schedule is mentioned in which Article of the Constitution?",
        "options": [
            "Article 344(1)",
            "Article 351",
            "Article 343",
            "Article 348"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 344(1) refers to the Eighth Schedule in the context of the Official Language Commission."
    },
    {
        "id": "ch74-l1-q45",
        "question": "Which of the following is a constitutional body related to Official Language?",
        "options": [
            "Official Language Commission (Article 344)",
            "Commissioner for Linguistic Minorities (Article 350B)",
            "Both of the above",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both the Official Language Commission and the Commissioner for Linguistic Minorities are constitutional provisions."
    },
    {
        "id": "ch74-l1-q46",
        "question": "The Official Languages Rules were framed in which year?",
        "options": [
            "1963",
            "1965",
            "1976",
            "1980"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Official Languages Rules were framed in 1976 under the Official Languages Act, 1963 (as amended in 1967)."
    },
    {
        "id": "ch74-l1-q47",
        "question": "Regions in India are classified into how many categories for official language purposes?",
        "options": [
            "2 (A and B)",
            "3 (A, B, and C)",
            "4",
            "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "India is divided into three regions: A (Hindi-speaking states), B (non-Hindi states like Gujarat, Maharashtra, Punjab), and C (remaining non-Hindi states)."
    },
    {
        "id": "ch74-l1-q48",
        "question": "Under Constitution, who has the power to authorize translation of State laws into Hindi?",
        "options": [
            "The President",
            "The Governor",
            "The State Legislature",
            "The PM"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor of a State can authorize the official translation of state legislation into Hindi or any other state language."
    },
    {
        "id": "ch74-l1-q49",
        "question": "Article 349 restricts the President's power regarding official language during the first 15 years. Which body must be consulted?",
        "options": [
            "The Supreme Court",
            "The Official Language Commission",
            "The committee constituted under Article 344",
            "Cabinet"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 requires the President to consider the recommendations of the Article 344 committee for certain language-related purposes."
    },
    {
        "id": "ch74-l1-q50",
        "question": "The Rajbhasha Vibhag (Department of Official Language) functions under which ministry?",
        "options": [
            "Ministry of Education",
            "Ministry of Home Affairs",
            "Ministry of Culture",
            "PM Office"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Department of Official Language (Rajbhasha Vibhag) functions under the Ministry of Home Affairs."
    },
    {
        "id": "ch74-l1-q51",
        "question": "How many times has the Eighth Schedule been amended to add new languages?",
        "options": [
            "2 times",
            "3 times",
            "4 times",
            "5 times"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule has been amended three times: 21st Amendment (Sindhi), 71st Amendment (Konkani, Manipuri, Nepali), and 92nd Amendment (Bodo, Dogri, Maithili, Santhali)."
    },
    {
        "id": "ch74-l1-q52",
        "question": "Which Directive Principle relates to the development of the Hindi language?",
        "options": [
            "Article 39",
            "Article 43",
            "Article 48",
            "Article 351"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 351 is a directive for the development of Hindi language. Though placed in Part XVII, it has the character of a DPSP."
    },
    {
        "id": "ch74-l1-q53",
        "question": "The use of Hindi on currency notes is mandated by:",
        "options": [
            "The Constitution directly",
            "The RBI Act",
            "The Official Languages Act and rules",
            "Article 343"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Currency notes carry Hindi text as per the Official Languages Act and RBI regulations."
    },
    {
        "id": "ch74-l1-q54",
        "question": "Which committee recommended the continuation of English along with Hindi for official purposes?",
        "options": [
            "B.G. Kher Commission",
            "Sarkaria Commission",
            "Munshi-Ayyangar formula",
            "None of the above"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The B.G. Kher Commission (first Official Language Commission) recommended gradual transition to Hindi with English continuing."
    },
    {
        "id": "ch74-l1-q55",
        "question": "Hindi Diwas is celebrated on which date?",
        "options": [
            "January 26",
            "August 15",
            "September 14",
            "November 14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi Diwas is celebrated on September 14, commemorating the adoption of Hindi as the official language by the Constituent Assembly in 1949."
    },
    {
        "id": "ch74-l1-q56",
        "question": "The Constituent Assembly adopted Hindi as the official language on:",
        "options": [
            "August 15, 1947",
            "January 26, 1950",
            "September 14, 1949",
            "November 26, 1949"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi was adopted as the official language by the Constituent Assembly on September 14, 1949."
    },
    {
        "id": "ch74-l1-q57",
        "question": "Which of the following is NOT a language in the Eighth Schedule?",
        "options": [
            "Tulu",
            "Manipuri",
            "Bodo",
            "Dogri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tulu is not currently in the Eighth Schedule, though there have been demands for its inclusion."
    },
    {
        "id": "ch74-l1-q58",
        "question": "The formula for the script of Hindi as the official language is:",
        "options": [
            "Roman script",
            "Persian script",
            "Devanagari script",
            "Kaithi script"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 343 specifically mandates Hindi in Devanagari script."
    },
    {
        "id": "ch74-l1-q59",
        "question": "Which Article of the Constitution protects the language rights of minorities?",
        "options": [
            "Article 29",
            "Article 30",
            "Article 350A",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Articles 29, 30, and 350A all protect various language rights of minorities including education and conservation."
    },
    {
        "id": "ch74-l1-q60",
        "question": "The Sahitya Akademi recognizes how many Indian languages for its awards?",
        "options": [
            "14",
            "22",
            "24",
            "26"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Sahitya Akademi recognizes 24 languages including the 22 Eighth Schedule languages plus English and Rajasthani."
    },
    {
        "id": "ch74-l1-q61",
        "question": "Consider the following statements regarding the Official Language provisions:\\n1. Hindi in Devanagari script is the official language of the Union.\\n2. English can no longer be used for official purposes.\\n3. The Eighth Schedule originally contained 14 languages.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is false. The Official Languages Act, 1963 allows English to continue indefinitely."
    },
    {
        "id": "ch74-l1-q62",
        "question": "Assertion (A): English continues as an official language of the Union.\\nReason (R): The anti-Hindi agitation of 1965 led to the Official Languages Act being amended to provide for indefinite continuation of English.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1967 amendment to the 1963 Act provided for indefinite use of English, primarily as a response to the anti-Hindi agitation."
    },
    {
        "id": "ch74-l1-q63",
        "question": "Which of the following correctly matches the amendment with the language added?",
        "options": [
            "21st Amendment - Konkani",
            "71st Amendment - Sindhi",
            "92nd Amendment - Bodo",
            "92nd Amendment - Nepali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 92nd Amendment added Bodo, Dogri, Maithili, and Santhali."
    },
    {
        "id": "ch74-l1-q64",
        "question": "Which Article requires that orders, rules, and notifications issued under the Constitution be in English?",
        "options": [
            "Article 343",
            "Article 346",
            "Article 348",
            "Article 351"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1)(b) requires orders, rules, regulations, and bye-laws to be in English."
    },
    {
        "id": "ch74-l1-q65",
        "question": "In which High Courts can proceedings be conducted in Hindi?",
        "options": [
            "All High Courts",
            "Only the Supreme Court",
            "High Courts of Rajasthan, Madhya Pradesh, Uttar Pradesh, and Bihar (with President's consent)",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Some High Courts in Hindi-speaking states have been authorized to use Hindi in proceedings with the President's consent."
    },
    {
        "id": "ch74-l1-q66",
        "question": "Article 350A was added by which amendment?",
        "options": [
            "1st Amendment",
            "7th Amendment",
            "21st Amendment",
            "42nd Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A was added by the 7th Constitutional Amendment Act, 1956."
    },
    {
        "id": "ch74-l1-q67",
        "question": "The Munshi-Ayyangar formula relates to:",
        "options": [
            "Reservation",
            "Official Language",
            "Emergency provisions",
            "Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Munshi-Ayyangar formula was a compromise in the Constituent Assembly regarding the official language provisions."
    },
    {
        "id": "ch74-l1-q68",
        "question": "Under the Official Languages Act, 1963, both Hindi and English shall be used for which of the following?",
        "options": [
            "Resolutions and general orders",
            "Rules and notifications",
            "Contracts and agreements",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Section 3(3) of the Act provides for bilingual publication of specified documents."
    },
    {
        "id": "ch74-l1-q69",
        "question": "Which of the following is a function of the Official Language Commission?",
        "options": [
            "Making recommendations for the progressive use of Hindi",
            "Promoting English in non-Hindi states",
            "Abolishing regional languages",
            "Setting examination standards"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Commission makes recommendations to the President regarding the progressive use of Hindi for official purposes."
    },
    {
        "id": "ch74-l1-q70",
        "question": "Can a State Legislature adopt English as its official language?",
        "options": [
            "No",
            "Yes, under Article 345",
            "Only with Parliament's approval",
            "Only during President's Rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 allows a State Legislature to adopt any language, including English, as its official language."
    },
    {
        "id": "ch74-l1-q71",
        "question": "Which of the following pairs is correctly matched?\\n1. Article 343 - Official Language of the Union\\n2. Article 345 - State Official Language\\n3. Article 348 - Language of SC/HC",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch74-l1-q72",
        "question": "The Central Hindi Committee was set up in:",
        "options": [
            "1960",
            "1967",
            "1972",
            "1976"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Central Hindi Committee was set up in 1967 under the Official Languages Resolution."
    },
    {
        "id": "ch74-l1-q73",
        "question": "Which of the following correctly describes the status of the Eighth Schedule?",
        "options": [
            "It lists the official languages of all States",
            "It lists languages recognized for certain constitutional purposes",
            "It lists only the national languages",
            "It is part of Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule lists languages recognized for purposes like the Official Language Commission and other constitutional provisions."
    },
    {
        "id": "ch74-l1-q74",
        "question": "Which of the following demands for inclusion in the Eighth Schedule has been long-standing?",
        "options": [
            "Tulu",
            "Bhojpuri",
            "Chhattisgarhi",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Tulu, Bhojpuri, Chhattisgarhi, and several other languages have had long-standing demands for Eighth Schedule inclusion."
    },
    {
        "id": "ch74-l1-q75",
        "question": "Under which Article can the President issue directions for the development of Hindi?",
        "options": [
            "Article 343",
            "Article 344",
            "Article 351",
            "Article 350B"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 351 contains the directive for development of Hindi."
    },
    {
        "id": "ch74-l1-q76",
        "question": "The language of legislation in States is determined by:",
        "options": [
            "Article 343",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 relates to official languages of States, which also covers the language of legislation."
    },
    {
        "id": "ch74-l1-q77",
        "question": "Assertion (A): India has no national language.\\nReason (R): The Constitution only provides for official languages, not a national language.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Constitution only designates official languages, not a national language. Hindi is the official language, not the national language."
    },
    {
        "id": "ch74-l1-q78",
        "question": "The use of mother tongue in local administration is promoted under:",
        "options": [
            "Article 345",
            "Article 347",
            "Article 350A",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple constitutional provisions promote the use of mother tongue and regional languages in administration and education."
    },
    {
        "id": "ch74-l1-q79",
        "question": "Which committee recommended the three-language formula for education?",
        "options": [
            "Kher Commission",
            "Kothari Commission (1964-66)",
            "Sarkaria Commission",
            "Punchhi Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Kothari Commission (1964-66) recommended the three-language formula."
    },
    {
        "id": "ch74-l1-q80",
        "question": "Which of the following is correct about the Commissioner for Linguistic Minorities?",
        "options": [
            "It is a statutory body",
            "It is a constitutional body under Article 350B",
            "It is a non-constitutional body",
            "It was created by an executive order"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Commissioner for Linguistic Minorities is a constitutional body created under Article 350B (7th Amendment)."
    },
    {
        "id": "ch74-l1-q81",
        "question": "Under the Official Languages Act, a complaint about non-compliance can be made to:",
        "options": [
            "The Supreme Court",
            "The Official Language Department of the Ministry of Home Affairs",
            "The Election Commission",
            "The UPSC"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Complaints about non-compliance with official language rules are handled by the Official Language Department."
    },
    {
        "id": "ch74-l1-q82",
        "question": "Which of the following languages was the LAST to be added to the Eighth Schedule?",
        "options": [
            "Sindhi",
            "Nepali",
            "Santhali",
            "Maithili"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Santhali was added by the 92nd Amendment (2003), the most recent addition along with Bodo, Dogri, and Maithili."
    },
    {
        "id": "ch74-l1-q83",
        "question": "The protection of interests of linguistic minorities is a duty of:",
        "options": [
            "Only the State",
            "Only the Union",
            "Both the Union and the States",
            "Only the Supreme Court"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both Union and States have responsibilities regarding linguistic minority protection under Articles 29, 30, 347, and 350A-B."
    },
    {
        "id": "ch74-l1-q84",
        "question": "Which Part of the Constitution deals with the language of the Supreme Court?",
        "options": [
            "Part V",
            "Part XIV",
            "Part XVII",
            "Part XVIII"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part XVII (Official Language) contains Article 348 which deals with the language of the Supreme Court and High Courts."
    },
    {
        "id": "ch74-l1-q85",
        "question": "The Committee of Parliament on Official Language reviews the progress of Hindi and reports to:",
        "options": [
            "The Speaker",
            "The PM",
            "The President",
            "The Home Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Committee reports to the President on the progress made in the use of Hindi for official purposes."
    },
    {
        "id": "ch74-l1-q86",
        "question": "Which of the following languages in the Eighth Schedule has the largest number of speakers?",
        "options": [
            "Bengali",
            "Telugu",
            "Hindi",
            "Marathi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi has the largest number of speakers among all Eighth Schedule languages."
    },
    {
        "id": "ch74-l1-q87",
        "question": "The term 'Rajbhasha' means:",
        "options": [
            "National Language",
            "King's Language / Official Language",
            "People's Language",
            "Sacred Language"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rajbhasha literally means 'Language of the State' or official language, as distinct from Rashtrabhasha (national language)."
    },
    {
        "id": "ch74-l1-q88",
        "question": "The Official Languages Act, 1963 was amended in which year to provide for indefinite use of English?",
        "options": [
            "1965",
            "1967",
            "1968",
            "1976"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Act was amended in 1967 to provide that English may continue indefinitely."
    },
    {
        "id": "ch74-l1-q89",
        "question": "Which Article empowers Parliament to provide for the use of Hindi or any other official language for specified purposes?",
        "options": [
            "Article 343(3)",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 343(3) empowers Parliament to provide by law for the continued use of English or Hindi for specified purposes."
    },
    {
        "id": "ch74-l1-q90",
        "question": "Which of the following correctly describes Part XVII of the Constitution?",
        "options": [
            "It deals with only Hindi as official language",
            "It comprehensively covers official language of the Union, States, language of courts, and special directives",
            "It only covers State languages",
            "It deals with foreign languages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XVII comprehensively covers: Chapter I (Language of the Union), Chapter II (Regional Languages), Chapter III (Language of SC/HC), Chapter IV (Special Directives)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch74-l2-q1",
        "question": "Can the Governor of a State authorize the use of Hindi or any other language for proceedings of the High Court?",
        "options": [
            "No",
            "Yes, with the consent of the President",
            "Yes, without any condition",
            "Only if English is also used"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(2) allows the Governor with the previous consent of the President to authorize Hindi or any other official language for HC proceedings."
    },
    {
        "id": "ch74-l2-q2",
        "question": "Which of the following is NOT in the Eighth Schedule?",
        "options": [
            "English",
            "Assamese",
            "Gujarati",
            "Kashmiri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "English is not included in the Eighth Schedule, even though it is used as an official language."
    },
    {
        "id": "ch74-l2-q3",
        "question": "The Anti-Hindi agitation of 1965 was primarily led by people of which state?",
        "options": [
            "Kerala",
            "Karnataka",
            "Tamil Nadu",
            "Andhra Pradesh"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The anti-Hindi agitation of 1965 was primarily led by people in Tamil Nadu opposing the imposition of Hindi."
    },
    {
        "id": "ch74-l2-q4",
        "question": "The Official Languages Resolution of 1968 was passed by:",
        "options": [
            "The Supreme Court",
            "The Parliament",
            "The Constituent Assembly",
            "The Planning Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Official Languages Resolution was passed by both Houses of Parliament in 1968."
    },
    {
        "id": "ch74-l2-q5",
        "question": "The 1968 Resolution states that the advancement of Hindi shall not prejudice the use of:",
        "options": [
            "Sanskrit",
            "English",
            "Any of the languages in the Eighth Schedule",
            "All of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Resolution ensured that Hindi advancement would not prejudice any Eighth Schedule language."
    },
    {
        "id": "ch74-l2-q6",
        "question": "Article 344 provides for a Parliamentary Committee to examine the recommendations of the Official Language Commission. This committee consists of:",
        "options": [
            "20 members from Lok Sabha and 10 from Rajya Sabha",
            "10 members each from both Houses",
            "30 from Lok Sabha only",
            "As determined by the Speaker"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Parliamentary Committee under Article 344(4) consists of 20 members from Lok Sabha and 10 from Rajya Sabha."
    },
    {
        "id": "ch74-l2-q7",
        "question": "Which commission is associated with the promotion and development of Hindi as mentioned in Article 351?",
        "options": [
            "Central Hindi Directorate",
            "Official Language Commission",
            "Sahitya Akademi",
            "University Grants Commission"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Central Hindi Directorate works towards the promotion and development of Hindi."
    },
    {
        "id": "ch74-l2-q8",
        "question": "The use of English in the Supreme Court is mandated by:",
        "options": [
            "Article 343",
            "Article 346",
            "Article 348",
            "Article 350"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1) mandates English as the language of the Supreme Court."
    },
    {
        "id": "ch74-l2-q9",
        "question": "Can Parliament provide for the use of Hindi in the Supreme Court?",
        "options": [
            "Yes, by law under Article 348",
            "No, only English can be used",
            "Only with the CJI's consent",
            "Only during an emergency"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 348(1) states that the language shall be English until Parliament by law provides otherwise."
    },
    {
        "id": "ch74-l2-q10",
        "question": "Which language does Article 351 direct the Union to promote?",
        "options": [
            "Sanskrit",
            "Hindi",
            "English",
            "All Eighth Schedule languages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 directs the Union to promote the spread of Hindi so that it may serve as a medium of expression for all elements of the composite culture of India."
    },
    {
        "id": "ch74-l2-q11",
        "question": "According to Article 351, Hindi should draw its vocabulary primarily from:",
        "options": [
            "English",
            "Sanskrit",
            "Urdu",
            "Persian and Arabic"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 351 specifies that Hindi should draw primarily on Sanskrit and secondarily on other languages of the Eighth Schedule for its vocabulary."
    },
    {
        "id": "ch74-l2-q12",
        "question": "The Classical Language status has been granted to how many Indian languages as of 2024?",
        "options": [
            "4",
            "6",
            "8",
            "11"
        ],
        "correctAnswerIndex": 1,
        "explanation": "As of 2024, six languages have been granted Classical Language status: Tamil, Sanskrit, Kannada, Telugu, Malayalam, and Odia."
    },
    {
        "id": "ch74-l2-q13",
        "question": "Which was the first language to be granted Classical Language status in India?",
        "options": [
            "Sanskrit",
            "Hindi",
            "Tamil",
            "Kannada"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Tamil was the first language granted Classical Language status in 2004."
    },
    {
        "id": "ch74-l2-q14",
        "question": "The Eighth Schedule is mentioned in which Article of the Constitution?",
        "options": [
            "Article 344(1)",
            "Article 351",
            "Article 343",
            "Article 348"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 344(1) refers to the Eighth Schedule in the context of the Official Language Commission."
    },
    {
        "id": "ch74-l2-q15",
        "question": "Which of the following is a constitutional body related to Official Language?",
        "options": [
            "Official Language Commission (Article 344)",
            "Commissioner for Linguistic Minorities (Article 350B)",
            "Both of the above",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both the Official Language Commission and the Commissioner for Linguistic Minorities are constitutional provisions."
    },
    {
        "id": "ch74-l2-q16",
        "question": "The Official Languages Rules were framed in which year?",
        "options": [
            "1963",
            "1965",
            "1976",
            "1980"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Official Languages Rules were framed in 1976 under the Official Languages Act, 1963 (as amended in 1967)."
    },
    {
        "id": "ch74-l2-q17",
        "question": "Regions in India are classified into how many categories for official language purposes?",
        "options": [
            "2 (A and B)",
            "3 (A, B, and C)",
            "4",
            "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "India is divided into three regions: A (Hindi-speaking states), B (non-Hindi states like Gujarat, Maharashtra, Punjab), and C (remaining non-Hindi states)."
    },
    {
        "id": "ch74-l2-q18",
        "question": "Under Constitution, who has the power to authorize translation of State laws into Hindi?",
        "options": [
            "The President",
            "The Governor",
            "The State Legislature",
            "The PM"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor of a State can authorize the official translation of state legislation into Hindi or any other state language."
    },
    {
        "id": "ch74-l2-q19",
        "question": "Article 349 restricts the President's power regarding official language during the first 15 years. Which body must be consulted?",
        "options": [
            "The Supreme Court",
            "The Official Language Commission",
            "The committee constituted under Article 344",
            "Cabinet"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 349 requires the President to consider the recommendations of the Article 344 committee for certain language-related purposes."
    },
    {
        "id": "ch74-l2-q20",
        "question": "The Rajbhasha Vibhag (Department of Official Language) functions under which ministry?",
        "options": [
            "Ministry of Education",
            "Ministry of Home Affairs",
            "Ministry of Culture",
            "PM Office"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Department of Official Language (Rajbhasha Vibhag) functions under the Ministry of Home Affairs."
    },
    {
        "id": "ch74-l2-q21",
        "question": "How many times has the Eighth Schedule been amended to add new languages?",
        "options": [
            "2 times",
            "3 times",
            "4 times",
            "5 times"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule has been amended three times: 21st Amendment (Sindhi), 71st Amendment (Konkani, Manipuri, Nepali), and 92nd Amendment (Bodo, Dogri, Maithili, Santhali)."
    },
    {
        "id": "ch74-l2-q22",
        "question": "Which Directive Principle relates to the development of the Hindi language?",
        "options": [
            "Article 39",
            "Article 43",
            "Article 48",
            "Article 351"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 351 is a directive for the development of Hindi language. Though placed in Part XVII, it has the character of a DPSP."
    },
    {
        "id": "ch74-l2-q23",
        "question": "The use of Hindi on currency notes is mandated by:",
        "options": [
            "The Constitution directly",
            "The RBI Act",
            "The Official Languages Act and rules",
            "Article 343"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Currency notes carry Hindi text as per the Official Languages Act and RBI regulations."
    },
    {
        "id": "ch74-l2-q24",
        "question": "Which committee recommended the continuation of English along with Hindi for official purposes?",
        "options": [
            "B.G. Kher Commission",
            "Sarkaria Commission",
            "Munshi-Ayyangar formula",
            "None of the above"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The B.G. Kher Commission (first Official Language Commission) recommended gradual transition to Hindi with English continuing."
    },
    {
        "id": "ch74-l2-q25",
        "question": "Hindi Diwas is celebrated on which date?",
        "options": [
            "January 26",
            "August 15",
            "September 14",
            "November 14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi Diwas is celebrated on September 14, commemorating the adoption of Hindi as the official language by the Constituent Assembly in 1949."
    },
    {
        "id": "ch74-l2-q26",
        "question": "The Constituent Assembly adopted Hindi as the official language on:",
        "options": [
            "August 15, 1947",
            "January 26, 1950",
            "September 14, 1949",
            "November 26, 1949"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi was adopted as the official language by the Constituent Assembly on September 14, 1949."
    },
    {
        "id": "ch74-l2-q27",
        "question": "Which of the following is NOT a language in the Eighth Schedule?",
        "options": [
            "Tulu",
            "Manipuri",
            "Bodo",
            "Dogri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tulu is not currently in the Eighth Schedule, though there have been demands for its inclusion."
    },
    {
        "id": "ch74-l2-q28",
        "question": "The formula for the script of Hindi as the official language is:",
        "options": [
            "Roman script",
            "Persian script",
            "Devanagari script",
            "Kaithi script"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 343 specifically mandates Hindi in Devanagari script."
    },
    {
        "id": "ch74-l2-q29",
        "question": "Which Article of the Constitution protects the language rights of minorities?",
        "options": [
            "Article 29",
            "Article 30",
            "Article 350A",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Articles 29, 30, and 350A all protect various language rights of minorities including education and conservation."
    },
    {
        "id": "ch74-l2-q30",
        "question": "The Sahitya Akademi recognizes how many Indian languages for its awards?",
        "options": [
            "14",
            "22",
            "24",
            "26"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Sahitya Akademi recognizes 24 languages including the 22 Eighth Schedule languages plus English and Rajasthani."
    },
    {
        "id": "ch74-l2-q31",
        "question": "Consider the following statements regarding the Official Language provisions:\\n1. Hindi in Devanagari script is the official language of the Union.\\n2. English can no longer be used for official purposes.\\n3. The Eighth Schedule originally contained 14 languages.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is false. The Official Languages Act, 1963 allows English to continue indefinitely."
    },
    {
        "id": "ch74-l2-q32",
        "question": "Assertion (A): English continues as an official language of the Union.\\nReason (R): The anti-Hindi agitation of 1965 led to the Official Languages Act being amended to provide for indefinite continuation of English.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1967 amendment to the 1963 Act provided for indefinite use of English, primarily as a response to the anti-Hindi agitation."
    },
    {
        "id": "ch74-l2-q33",
        "question": "Which of the following correctly matches the amendment with the language added?",
        "options": [
            "21st Amendment - Konkani",
            "71st Amendment - Sindhi",
            "92nd Amendment - Bodo",
            "92nd Amendment - Nepali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 92nd Amendment added Bodo, Dogri, Maithili, and Santhali."
    },
    {
        "id": "ch74-l2-q34",
        "question": "Which Article requires that orders, rules, and notifications issued under the Constitution be in English?",
        "options": [
            "Article 343",
            "Article 346",
            "Article 348",
            "Article 351"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1)(b) requires orders, rules, regulations, and bye-laws to be in English."
    },
    {
        "id": "ch74-l2-q35",
        "question": "In which High Courts can proceedings be conducted in Hindi?",
        "options": [
            "All High Courts",
            "Only the Supreme Court",
            "High Courts of Rajasthan, Madhya Pradesh, Uttar Pradesh, and Bihar (with President's consent)",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Some High Courts in Hindi-speaking states have been authorized to use Hindi in proceedings with the President's consent."
    },
    {
        "id": "ch74-l2-q36",
        "question": "Article 350A was added by which amendment?",
        "options": [
            "1st Amendment",
            "7th Amendment",
            "21st Amendment",
            "42nd Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A was added by the 7th Constitutional Amendment Act, 1956."
    },
    {
        "id": "ch74-l2-q37",
        "question": "The Munshi-Ayyangar formula relates to:",
        "options": [
            "Reservation",
            "Official Language",
            "Emergency provisions",
            "Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Munshi-Ayyangar formula was a compromise in the Constituent Assembly regarding the official language provisions."
    },
    {
        "id": "ch74-l2-q38",
        "question": "Under the Official Languages Act, 1963, both Hindi and English shall be used for which of the following?",
        "options": [
            "Resolutions and general orders",
            "Rules and notifications",
            "Contracts and agreements",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Section 3(3) of the Act provides for bilingual publication of specified documents."
    },
    {
        "id": "ch74-l2-q39",
        "question": "Which of the following is a function of the Official Language Commission?",
        "options": [
            "Making recommendations for the progressive use of Hindi",
            "Promoting English in non-Hindi states",
            "Abolishing regional languages",
            "Setting examination standards"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Commission makes recommendations to the President regarding the progressive use of Hindi for official purposes."
    },
    {
        "id": "ch74-l2-q40",
        "question": "Can a State Legislature adopt English as its official language?",
        "options": [
            "No",
            "Yes, under Article 345",
            "Only with Parliament's approval",
            "Only during President's Rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 allows a State Legislature to adopt any language, including English, as its official language."
    },
    {
        "id": "ch74-l2-q41",
        "question": "Which of the following pairs is correctly matched?\\n1. Article 343 - Official Language of the Union\\n2. Article 345 - State Official Language\\n3. Article 348 - Language of SC/HC",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch74-l2-q42",
        "question": "The Central Hindi Committee was set up in:",
        "options": [
            "1960",
            "1967",
            "1972",
            "1976"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Central Hindi Committee was set up in 1967 under the Official Languages Resolution."
    },
    {
        "id": "ch74-l2-q43",
        "question": "Which of the following correctly describes the status of the Eighth Schedule?",
        "options": [
            "It lists the official languages of all States",
            "It lists languages recognized for certain constitutional purposes",
            "It lists only the national languages",
            "It is part of Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule lists languages recognized for purposes like the Official Language Commission and other constitutional provisions."
    },
    {
        "id": "ch74-l2-q44",
        "question": "Which of the following demands for inclusion in the Eighth Schedule has been long-standing?",
        "options": [
            "Tulu",
            "Bhojpuri",
            "Chhattisgarhi",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Tulu, Bhojpuri, Chhattisgarhi, and several other languages have had long-standing demands for Eighth Schedule inclusion."
    },
    {
        "id": "ch74-l2-q45",
        "question": "Under which Article can the President issue directions for the development of Hindi?",
        "options": [
            "Article 343",
            "Article 344",
            "Article 351",
            "Article 350B"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 351 contains the directive for development of Hindi."
    },
    {
        "id": "ch74-l2-q46",
        "question": "The language of legislation in States is determined by:",
        "options": [
            "Article 343",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 relates to official languages of States, which also covers the language of legislation."
    },
    {
        "id": "ch74-l2-q47",
        "question": "Assertion (A): India has no national language.\\nReason (R): The Constitution only provides for official languages, not a national language.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Constitution only designates official languages, not a national language. Hindi is the official language, not the national language."
    },
    {
        "id": "ch74-l2-q48",
        "question": "The use of mother tongue in local administration is promoted under:",
        "options": [
            "Article 345",
            "Article 347",
            "Article 350A",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple constitutional provisions promote the use of mother tongue and regional languages in administration and education."
    },
    {
        "id": "ch74-l2-q49",
        "question": "Which committee recommended the three-language formula for education?",
        "options": [
            "Kher Commission",
            "Kothari Commission (1964-66)",
            "Sarkaria Commission",
            "Punchhi Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Kothari Commission (1964-66) recommended the three-language formula."
    },
    {
        "id": "ch74-l2-q50",
        "question": "Which of the following is correct about the Commissioner for Linguistic Minorities?",
        "options": [
            "It is a statutory body",
            "It is a constitutional body under Article 350B",
            "It is a non-constitutional body",
            "It was created by an executive order"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Commissioner for Linguistic Minorities is a constitutional body created under Article 350B (7th Amendment)."
    },
    {
        "id": "ch74-l2-q51",
        "question": "Under the Official Languages Act, a complaint about non-compliance can be made to:",
        "options": [
            "The Supreme Court",
            "The Official Language Department of the Ministry of Home Affairs",
            "The Election Commission",
            "The UPSC"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Complaints about non-compliance with official language rules are handled by the Official Language Department."
    },
    {
        "id": "ch74-l2-q52",
        "question": "Which of the following languages was the LAST to be added to the Eighth Schedule?",
        "options": [
            "Sindhi",
            "Nepali",
            "Santhali",
            "Maithili"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Santhali was added by the 92nd Amendment (2003), the most recent addition along with Bodo, Dogri, and Maithili."
    },
    {
        "id": "ch74-l2-q53",
        "question": "The protection of interests of linguistic minorities is a duty of:",
        "options": [
            "Only the State",
            "Only the Union",
            "Both the Union and the States",
            "Only the Supreme Court"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both Union and States have responsibilities regarding linguistic minority protection under Articles 29, 30, 347, and 350A-B."
    },
    {
        "id": "ch74-l2-q54",
        "question": "Which Part of the Constitution deals with the language of the Supreme Court?",
        "options": [
            "Part V",
            "Part XIV",
            "Part XVII",
            "Part XVIII"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part XVII (Official Language) contains Article 348 which deals with the language of the Supreme Court and High Courts."
    },
    {
        "id": "ch74-l2-q55",
        "question": "The Committee of Parliament on Official Language reviews the progress of Hindi and reports to:",
        "options": [
            "The Speaker",
            "The PM",
            "The President",
            "The Home Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Committee reports to the President on the progress made in the use of Hindi for official purposes."
    },
    {
        "id": "ch74-l2-q56",
        "question": "Which of the following languages in the Eighth Schedule has the largest number of speakers?",
        "options": [
            "Bengali",
            "Telugu",
            "Hindi",
            "Marathi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi has the largest number of speakers among all Eighth Schedule languages."
    },
    {
        "id": "ch74-l2-q57",
        "question": "The term 'Rajbhasha' means:",
        "options": [
            "National Language",
            "King's Language / Official Language",
            "People's Language",
            "Sacred Language"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rajbhasha literally means 'Language of the State' or official language, as distinct from Rashtrabhasha (national language)."
    },
    {
        "id": "ch74-l2-q58",
        "question": "The Official Languages Act, 1963 was amended in which year to provide for indefinite use of English?",
        "options": [
            "1965",
            "1967",
            "1968",
            "1976"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Act was amended in 1967 to provide that English may continue indefinitely."
    },
    {
        "id": "ch74-l2-q59",
        "question": "Which Article empowers Parliament to provide for the use of Hindi or any other official language for specified purposes?",
        "options": [
            "Article 343(3)",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 343(3) empowers Parliament to provide by law for the continued use of English or Hindi for specified purposes."
    },
    {
        "id": "ch74-l2-q60",
        "question": "Which of the following correctly describes Part XVII of the Constitution?",
        "options": [
            "It deals with only Hindi as official language",
            "It comprehensively covers official language of the Union, States, language of courts, and special directives",
            "It only covers State languages",
            "It deals with foreign languages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XVII comprehensively covers: Chapter I (Language of the Union), Chapter II (Regional Languages), Chapter III (Language of SC/HC), Chapter IV (Special Directives)."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch74-l3-q1",
        "question": "Consider the following statements regarding the Official Language provisions:\\n1. Hindi in Devanagari script is the official language of the Union.\\n2. English can no longer be used for official purposes.\\n3. The Eighth Schedule originally contained 14 languages.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is false. The Official Languages Act, 1963 allows English to continue indefinitely."
    },
    {
        "id": "ch74-l3-q2",
        "question": "Assertion (A): English continues as an official language of the Union.\\nReason (R): The anti-Hindi agitation of 1965 led to the Official Languages Act being amended to provide for indefinite continuation of English.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1967 amendment to the 1963 Act provided for indefinite use of English, primarily as a response to the anti-Hindi agitation."
    },
    {
        "id": "ch74-l3-q3",
        "question": "Which of the following correctly matches the amendment with the language added?",
        "options": [
            "21st Amendment - Konkani",
            "71st Amendment - Sindhi",
            "92nd Amendment - Bodo",
            "92nd Amendment - Nepali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 92nd Amendment added Bodo, Dogri, Maithili, and Santhali."
    },
    {
        "id": "ch74-l3-q4",
        "question": "Which Article requires that orders, rules, and notifications issued under the Constitution be in English?",
        "options": [
            "Article 343",
            "Article 346",
            "Article 348",
            "Article 351"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 348(1)(b) requires orders, rules, regulations, and bye-laws to be in English."
    },
    {
        "id": "ch74-l3-q5",
        "question": "In which High Courts can proceedings be conducted in Hindi?",
        "options": [
            "All High Courts",
            "Only the Supreme Court",
            "High Courts of Rajasthan, Madhya Pradesh, Uttar Pradesh, and Bihar (with President's consent)",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Some High Courts in Hindi-speaking states have been authorized to use Hindi in proceedings with the President's consent."
    },
    {
        "id": "ch74-l3-q6",
        "question": "Article 350A was added by which amendment?",
        "options": [
            "1st Amendment",
            "7th Amendment",
            "21st Amendment",
            "42nd Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A was added by the 7th Constitutional Amendment Act, 1956."
    },
    {
        "id": "ch74-l3-q7",
        "question": "The Munshi-Ayyangar formula relates to:",
        "options": [
            "Reservation",
            "Official Language",
            "Emergency provisions",
            "Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Munshi-Ayyangar formula was a compromise in the Constituent Assembly regarding the official language provisions."
    },
    {
        "id": "ch74-l3-q8",
        "question": "Under the Official Languages Act, 1963, both Hindi and English shall be used for which of the following?",
        "options": [
            "Resolutions and general orders",
            "Rules and notifications",
            "Contracts and agreements",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Section 3(3) of the Act provides for bilingual publication of specified documents."
    },
    {
        "id": "ch74-l3-q9",
        "question": "Which of the following is a function of the Official Language Commission?",
        "options": [
            "Making recommendations for the progressive use of Hindi",
            "Promoting English in non-Hindi states",
            "Abolishing regional languages",
            "Setting examination standards"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Commission makes recommendations to the President regarding the progressive use of Hindi for official purposes."
    },
    {
        "id": "ch74-l3-q10",
        "question": "Can a State Legislature adopt English as its official language?",
        "options": [
            "No",
            "Yes, under Article 345",
            "Only with Parliament's approval",
            "Only during President's Rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 allows a State Legislature to adopt any language, including English, as its official language."
    },
    {
        "id": "ch74-l3-q11",
        "question": "Which of the following pairs is correctly matched?\\n1. Article 343 - Official Language of the Union\\n2. Article 345 - State Official Language\\n3. Article 348 - Language of SC/HC",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 3,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch74-l3-q12",
        "question": "The Central Hindi Committee was set up in:",
        "options": [
            "1960",
            "1967",
            "1972",
            "1976"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Central Hindi Committee was set up in 1967 under the Official Languages Resolution."
    },
    {
        "id": "ch74-l3-q13",
        "question": "Which of the following correctly describes the status of the Eighth Schedule?",
        "options": [
            "It lists the official languages of all States",
            "It lists languages recognized for certain constitutional purposes",
            "It lists only the national languages",
            "It is part of Fundamental Rights"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule lists languages recognized for purposes like the Official Language Commission and other constitutional provisions."
    },
    {
        "id": "ch74-l3-q14",
        "question": "Which of the following demands for inclusion in the Eighth Schedule has been long-standing?",
        "options": [
            "Tulu",
            "Bhojpuri",
            "Chhattisgarhi",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Tulu, Bhojpuri, Chhattisgarhi, and several other languages have had long-standing demands for Eighth Schedule inclusion."
    },
    {
        "id": "ch74-l3-q15",
        "question": "Under which Article can the President issue directions for the development of Hindi?",
        "options": [
            "Article 343",
            "Article 344",
            "Article 351",
            "Article 350B"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 351 contains the directive for development of Hindi."
    },
    {
        "id": "ch74-l3-q16",
        "question": "The language of legislation in States is determined by:",
        "options": [
            "Article 343",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 relates to official languages of States, which also covers the language of legislation."
    },
    {
        "id": "ch74-l3-q17",
        "question": "Assertion (A): India has no national language.\\nReason (R): The Constitution only provides for official languages, not a national language.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Constitution only designates official languages, not a national language. Hindi is the official language, not the national language."
    },
    {
        "id": "ch74-l3-q18",
        "question": "The use of mother tongue in local administration is promoted under:",
        "options": [
            "Article 345",
            "Article 347",
            "Article 350A",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple constitutional provisions promote the use of mother tongue and regional languages in administration and education."
    },
    {
        "id": "ch74-l3-q19",
        "question": "Which committee recommended the three-language formula for education?",
        "options": [
            "Kher Commission",
            "Kothari Commission (1964-66)",
            "Sarkaria Commission",
            "Punchhi Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Kothari Commission (1964-66) recommended the three-language formula."
    },
    {
        "id": "ch74-l3-q20",
        "question": "Which of the following is correct about the Commissioner for Linguistic Minorities?",
        "options": [
            "It is a statutory body",
            "It is a constitutional body under Article 350B",
            "It is a non-constitutional body",
            "It was created by an executive order"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Commissioner for Linguistic Minorities is a constitutional body created under Article 350B (7th Amendment)."
    },
    {
        "id": "ch74-l3-q21",
        "question": "Under the Official Languages Act, a complaint about non-compliance can be made to:",
        "options": [
            "The Supreme Court",
            "The Official Language Department of the Ministry of Home Affairs",
            "The Election Commission",
            "The UPSC"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Complaints about non-compliance with official language rules are handled by the Official Language Department."
    },
    {
        "id": "ch74-l3-q22",
        "question": "Which of the following languages was the LAST to be added to the Eighth Schedule?",
        "options": [
            "Sindhi",
            "Nepali",
            "Santhali",
            "Maithili"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Santhali was added by the 92nd Amendment (2003), the most recent addition along with Bodo, Dogri, and Maithili."
    },
    {
        "id": "ch74-l3-q23",
        "question": "The protection of interests of linguistic minorities is a duty of:",
        "options": [
            "Only the State",
            "Only the Union",
            "Both the Union and the States",
            "Only the Supreme Court"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both Union and States have responsibilities regarding linguistic minority protection under Articles 29, 30, 347, and 350A-B."
    },
    {
        "id": "ch74-l3-q24",
        "question": "Which Part of the Constitution deals with the language of the Supreme Court?",
        "options": [
            "Part V",
            "Part XIV",
            "Part XVII",
            "Part XVIII"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part XVII (Official Language) contains Article 348 which deals with the language of the Supreme Court and High Courts."
    },
    {
        "id": "ch74-l3-q25",
        "question": "The Committee of Parliament on Official Language reviews the progress of Hindi and reports to:",
        "options": [
            "The Speaker",
            "The PM",
            "The President",
            "The Home Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Committee reports to the President on the progress made in the use of Hindi for official purposes."
    },
    {
        "id": "ch74-l3-q26",
        "question": "Which of the following languages in the Eighth Schedule has the largest number of speakers?",
        "options": [
            "Bengali",
            "Telugu",
            "Hindi",
            "Marathi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Hindi has the largest number of speakers among all Eighth Schedule languages."
    },
    {
        "id": "ch74-l3-q27",
        "question": "The term 'Rajbhasha' means:",
        "options": [
            "National Language",
            "King's Language / Official Language",
            "People's Language",
            "Sacred Language"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rajbhasha literally means 'Language of the State' or official language, as distinct from Rashtrabhasha (national language)."
    },
    {
        "id": "ch74-l3-q28",
        "question": "The Official Languages Act, 1963 was amended in which year to provide for indefinite use of English?",
        "options": [
            "1965",
            "1967",
            "1968",
            "1976"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Act was amended in 1967 to provide that English may continue indefinitely."
    },
    {
        "id": "ch74-l3-q29",
        "question": "Which Article empowers Parliament to provide for the use of Hindi or any other official language for specified purposes?",
        "options": [
            "Article 343(3)",
            "Article 345",
            "Article 348",
            "Article 349"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 343(3) empowers Parliament to provide by law for the continued use of English or Hindi for specified purposes."
    },
    {
        "id": "ch74-l3-q30",
        "question": "Which of the following correctly describes Part XVII of the Constitution?",
        "options": [
            "It deals with only Hindi as official language",
            "It comprehensively covers official language of the Union, States, language of courts, and special directives",
            "It only covers State languages",
            "It deals with foreign languages"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XVII comprehensively covers: Chapter I (Language of the Union), Chapter II (Regional Languages), Chapter III (Language of SC/HC), Chapter IV (Special Directives)."
    }
];

export const CHAPTER_74_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
