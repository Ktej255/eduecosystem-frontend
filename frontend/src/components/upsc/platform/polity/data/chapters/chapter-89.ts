import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch89-l1-q1",
        "question": "The meaning of",
        "options": ["Economic growth of all states.","The feeling of oneness and common identity among citizens despite diversity of language, religion and caste.","Uniformity of all cultures.","Merging of all political parties."],
        "correctAnswerIndex": 1,
        "explanation": "National integration involves psychological and educational processes for developing a feeling of unity/solidarity."
    },
    {
        "id": "ch89-l1-q2",
        "question": "Which of the following is considered a major",
        "options": ["Secularism","Regionalism","Parliamentary Democracy","Fundamental Duties"],
        "correctAnswerIndex": 1,
        "explanation": "Communalism, Regionalism, Casteism, and Linguism are major hurdles to integration."
    },
    {
        "id": "ch89-l1-q3",
        "question": "The",
        "options": ["1950","1961","1975","2004"],
        "correctAnswerIndex": 1,
        "explanation": "The NIC was born out of the 1961 conference convened by PM Nehru."
    },
    {
        "id": "ch89-l1-q4",
        "question": "Who is the",
        "options": ["The President","The Prime Minister","The Home Minister","The Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The PM heads this extra-constitutional advisory body."
    },
    {
        "id": "ch89-l1-q5",
        "question": "The",
        "options": ["Constitution of India (Art 263)","States Reorganisation Act, 1956","National Integration Act, 1962","Regional Development Act"],
        "correctAnswerIndex": 1,
        "explanation": "Zonal Councils are statutory bodies created to promote cooperation among states."
    },
    {
        "id": "ch89-l1-q6",
        "question": "How many",
        "options": ["3","5","8","12"],
        "correctAnswerIndex": 1,
        "explanation": "Northern, Central, Eastern, Western, and Southern Zonal Councils."
    },
    {
        "id": "ch89-l1-q7",
        "question": "The",
        "options": ["States Reorganisation Act, 1956","North-Eastern Council Act, 1971","7th Amendment","Assam Reorganisation Act"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch89-l1-q8",
        "question": "Which of the following describes",
        "options": ["Promoting community service.","The use of religious identity for political gains often leading to tension.","Supporting minority education.","Studying different religions."],
        "correctAnswerIndex": 1,
        "explanation": "Communalism is the priority given to one"
    },
    {
        "id": "ch89-l1-q9",
        "question": "The",
        "options": ["K. Santhanam","Dr. Sampurnanand","G.B. Pant","Lal Bahadur Shastri"],
        "correctAnswerIndex": 1,
        "explanation": "It was set up to study the youth and education role in integration."
    },
    {
        "id": "ch89-l1-q10",
        "question": "Which Article of the Constitution promotes",
        "options": ["Article 14","Article 51A (Fundamental Duties)","Article 32","Article 44"],
        "correctAnswerIndex": 1,
        "explanation": "Promoting harmony/brotherhood is a Fundamental Duty [Art 51A(e)]."
    },
    {
        "id": "ch89-l1-q11",
        "question": "Is the",
        "options": ["Yes","No, it is an extra-constitutional advisory body.","Only during wars.","Yes, under Art 263."],
        "correctAnswerIndex": 1,
        "explanation": "It was created through executive resolution/conferences, not the constitution."
    },
    {
        "id": "ch89-l1-q12",
        "question": "Who is the",
        "options": ["The Chief Minister of the host state.","The Union Home Minister.","The PM.","The Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The Union Home Minister is the common chairman of all zonal councils."
    },
    {
        "id": "ch89-l1-q13",
        "question": "Who acts as the",
        "options": ["The Governor.","The Chief Ministers of the member states (by rotation for one year).","The Union Home Secretary.","The local Mayor."],
        "correctAnswerIndex": 1,
        "explanation": "The CMs serve as Vice-Chairman by rotation."
    },
    {
        "id": "ch89-l1-q14",
        "question": "Which of the following states is included in the",
        "options": ["Maharashtra","Karnataka, Kerala, Tamil Nadu, Andhra Pradesh, Telangana (and Puducherry UT).","Gujarat","Odisha"],
        "correctAnswerIndex": 1,
        "explanation": "The southern cluster forms this council."
    },
    {
        "id": "ch89-l1-q15",
        "question": "Which of the following is a",
        "options": ["Planning for defense.","Promoting Inter-state cooperation and checking the growth of regionalism/linguism.","Winning elections.","Levying taxes."],
        "correctAnswerIndex": 1,
        "explanation": "They provide a forum for discussing matters of common interest."
    },
    {
        "id": "ch89-l1-q16",
        "question": "Which of the following is NOT an obstacle to national integration?",
        "options": ["Casteism","Linguism","Secularism","Communalism"],
        "correctAnswerIndex": 2,
        "explanation": "Secularism is a facilitator, while the others are obstacles."
    },
    {
        "id": "ch89-l1-q17",
        "question": "Which body focuses on state-level integration through",
        "options": ["NITI Aayog","Zonal Councils","The Cabinet","The Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Zonal councils harmonize interests between regional and national levels."
    },
    {
        "id": "ch89-l1-q18",
        "question": "A person who puts the interests of their",
        "options": ["Nationalism","Regionalism","Internationalism","Patriotism"],
        "correctAnswerIndex": 1,
        "explanation": "Extreme regionalism can lead to centrifugal (breaking) tendencies."
    },
    {
        "id": "ch89-l1-q19",
        "question": "Which city hosted the",
        "options": ["Mumbai","New Delhi","Chennai","Kolkata"],
        "correctAnswerIndex": 1,
        "explanation": "It was held in New Delhi under PM Nehru."
    },
    {
        "id": "ch89-l1-q20",
        "question": "The",
        "options": ["Only Assam and Sikkim.","The","plus Sikkim.","Only West Bengal.","Only Bihar."],
        "correctAnswerIndex": 1,
        "explanation": "Sikkim was added in 2002."
    },
    {
        "id": "ch89-l1-q21",
        "question": "Is the",
        "options": ["Yes","No, they are only","bodies.","Only if the PM signs them.","Only in UTs."],
        "correctAnswerIndex": 1,
        "explanation": "They discuss and recommend; they do not dictate."
    },
    {
        "id": "ch89-l1-q22",
        "question": "The",
        "options": ["Communalism","National Integration","Regionalism","Casteism"],
        "correctAnswerIndex": 1,
        "explanation": "Secularism provides a common platform for all religions."
    },
    {
        "id": "ch89-l1-q23",
        "question": "Which Ministry provides the",
        "options": ["Ministry of Finance","Ministry of Home Affairs","NITI Aayog","Law Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "Each council has its own staff but Home Ministry oversees the system."
    },
    {
        "id": "ch89-l1-q24",
        "question": "",
        "options": ["The study of languages.","Extreme attachment to one","Bilingualism.","Learning Hindi."],
        "correctAnswerIndex": 1,
        "explanation": "Linguism is a form of narrow identity that can hurt national unity."
    },
    {
        "id": "ch89-l1-q25",
        "question": "The 16-point",
        "options": ["1950s","1960s (at the first conference)","1990s","2010s"],
        "correctAnswerIndex": 1,
        "explanation": "1961 conference laid the groundwork."
    },
    {
        "id": "ch89-l1-q26",
        "question": "Wait. Is",
        "options": ["Yes","No","Only if it","Only if it"],
        "correctAnswerIndex": 0,
        "explanation": "Violence and extremism disrupt the social fabric and sense of security."
    },
    {
        "id": "ch89-l1-q27",
        "question": "The",
        "options": ["Individualism","National Integration","Globalism","Separation"],
        "correctAnswerIndex": 1,
        "explanation": "Fraternity ensures the dignity of the individual and the"
    },
    {
        "id": "ch89-l1-q28",
        "question": "Which of the following is a",
        "options": ["Single Citizenship","Constitutional Supremacy","Integrated Judiciary","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These features provide a common framework across India."
    },
    {
        "id": "ch89-l1-q29",
        "question": "Are",
        "options": ["Yes, as nominated by the commission/Aayog.","No.","Only if they are from that zone.","Only as observers without speaking."],
        "correctAnswerIndex": 0,
        "explanation": "NITI Aayog (formerly Planning Commission) provides experts to assist."
    },
    {
        "id": "ch89-l1-q30",
        "question": "Does the",
        "options": ["Yes","No, it meets periodically (often with long gaps between meetings).","Only on Jan 26.","Only if there is a riot."],
        "correctAnswerIndex": 1,
        "explanation": "Its meetings are irregular and depends on the union government"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch89-l2-q1",
        "question": "The",
        "options": ["It was declared unconstitutional by the Supreme Court.","It is an extra-constitutional body whose functioning depends on the political will of the Union government.","The Home Ministry was abolished.","Members refused to attend."],
        "correctAnswerIndex": 1,
        "explanation": "As an advisory body created by resolution, its meetings are at the discretion of the government."
    },
    {
        "id": "ch89-l2-q2",
        "question": "Assertion (A): Zonal Councils are statutory bodies, unlike the Inter-State Council which is a constitutional body.\\nReason (R): Zonal Councils were created by the States Reorganisation Act of 1956.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Inter-State Council is under Art 263; Zonal Councils are under a 1956 Act of Parliament."
    },
    {
        "id": "ch89-l2-q3",
        "question": "Which of the following is an",
        "options": ["State Legislatures.","Single Citizenship.","Concurrent List.","Local Self-Government."],
        "correctAnswerIndex": 1,
        "explanation": "Single citizenship ensures all Indians have equal rights regardless of their state of birth/residence."
    },
    {
        "id": "ch89-l2-q4",
        "question": "The",
        "options": ["All Union Cabinet Ministers.","All Chief Ministers of States and Union Territories with Legislatures.","Leaders of recognized National political parties.","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "The composition is broad-based, including CMs, political leaders, and eminent persons."
    },
    {
        "id": "ch89-l2-q5",
        "question": "Wait. In which year was",
        "options": ["1971","1975","2002","2014"],
        "correctAnswerIndex": 2,
        "explanation": "The NEC Act was amended in 2002 to include Sikkim as the eighth member."
    },
    {
        "id": "ch89-l2-q6",
        "question": "Which of the following describes the",
        "options": ["NIC is for international integration; Zonal is for domestic.","NIC focuses on psychological and social unity; Zonal Councils focus on administrative and economic cooperation between states.","NIC has constitutional powers; Zonal has none.","There is no difference."],
        "correctAnswerIndex": 1,
        "explanation": "NIC handles issues like communalism/unity; Zonal Councils handle river-water, border, and transport disputes."
    },
    {
        "id": "ch89-l2-q7",
        "question": "The",
        "options": ["The use of English as a link language only.","The importance of the educational system and the student","The redrawing of state boundaries on religious lines.","The abolition of zonal councils."],
        "correctAnswerIndex": 1,
        "explanation": "Education was seen as the primary vehicle for achieving emotional integration."
    },
    {
        "id": "ch89-l2-q8",
        "question": "The",
        "options": ["It only hurt integration.","It helped by strengthening regional identities within the Indian Union, though it sometimes fuelled linguism.","It had no effect.","It was reversed in 1976."],
        "correctAnswerIndex": 1,
        "explanation": "Cultural pride can be a stabilizing force if balanced with national loyalty."
    },
    {
        "id": "ch89-l2-q9",
        "question": "Which of the following UTs is a part of the",
        "options": ["Delhi and Chandigarh.","Daman and Diu.","Puducherry.","Lakshadweep."],
        "correctAnswerIndex": 0,
        "explanation": "The Northern zone includes Punjab, Haryana, Rajasthan, HP, and the UTs of Delhi, Chandigarh, J&K, and Ladakh."
    },
    {
        "id": "ch89-l2-q10",
        "question": "Who appoints the",
        "options": ["The President.","A Chief Secretary of the member states (by rotation).","The Union Home Minister.","The PM."],
        "correctAnswerIndex": 1,
        "explanation": "Administrative support is rotated among the participation states."
    },
    {
        "id": "ch89-l2-q11",
        "question": "Is",
        "options": ["No, it","Yes, because it divides society into small groups with conflicting interests.","Only for reservation purposes.","Only in rural areas."],
        "correctAnswerIndex": 1,
        "explanation": "Caste-based mobilization often overrides national identity in politics."
    },
    {
        "id": "ch89-l2-q12",
        "question": "Which of the following describes the",
        "options": ["They can pass laws.","They are forums for","discussion on inter-state issues, presided by a neutral Union Minister.","They are courts of law.","They are only for police coordination."],
        "correctAnswerIndex": 1,
        "explanation": "Their advisory and deliberative nature promotes bridge-building."
    },
    {
        "id": "ch89-l2-q13",
        "question": "The",
        "options": ["Creation of separate states.","Imposition of reasonable restrictions on freedom of speech in the interest of the","of India.","Banning of Hindi.","Creation of the NIC."],
        "correctAnswerIndex": 1,
        "explanation": "Integrity of India was added as a ground for restriction to check secessionist tendencies."
    },
    {
        "id": "ch89-l2-q14",
        "question": "In the",
        "options": ["Representative of FICCI/ASSOCHAM.","Nominees by the Central Government.","The Finance Minister acts as their proxy.","There is no industry representation."],
        "correctAnswerIndex": 1,
        "explanation": "The Govt nominates eminent persons from various walks of life, including industry."
    },
    {
        "id": "ch89-l2-q15",
        "question": "The",
        "options": ["Inter-state Council.","Zonal Councils.","Election Commission.","UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "Both emphasize cooperation over conflict for collective progress."
    },
    {
        "id": "ch89-l2-q16",
        "question": "Regionalism can be",
        "options": ["Demanding a separate country.","Wishing for the development of one","Hating people from other states.","Refusing to pay central taxes."],
        "correctAnswerIndex": 1,
        "explanation": "Healthy regional pride is a part of the diversity of federalism."
    },
    {
        "id": "ch89-l2-q17",
        "question": "Which of the following bodies is",
        "options": ["Finance Commission.","National Integration Council.","Zonal Councils.","Both 2 and 3."],
        "correctAnswerIndex": 3,
        "explanation": "Extra-constitutional means not provided in the Constitution. (NIC is by resolution, Zonal is statutory)."
    },
    {
        "id": "ch89-l2-q18",
        "question": "Which Zonal Council includes the state of",
        "options": ["Central Zonal Council.","Eastern Zonal Council.","Northern Zonal Council.","Western Zonal Council."],
        "correctAnswerIndex": 1,
        "explanation": "Bihar, Jharkhand, Odisha, and West Bengal form the Eastern zone."
    },
    {
        "id": "ch89-l2-q19",
        "question": "Does the",
        "options": ["Yes.","No, it usually meets in the capital of one of the member states on a rotational basis.","Only in the Home Minister","Only in the PMO."],
        "correctAnswerIndex": 1,
        "explanation": "The rotation ensures that every state gets to host and highlight its regional context."
    },
    {
        "id": "ch89-l2-q20",
        "question": "The",
        "options": ["Dhar Commission.","Fazl Ali Commission.","JVP Committee.","Santhanam Committee."],
        "correctAnswerIndex": 1,
        "explanation": "Fazl Ali commission recommended 16 states and 3 UTs; Act made 14 states and 6 UTs."
    },
    {
        "id": "ch89-l2-q21",
        "question": "Is the",
        "options": ["Yes, as part of representative leadership.","No.","Only if she is an MP.","Only for matters of divorce."],
        "correctAnswerIndex": 0,
        "explanation": "Chairpersons of various commissions are often invited/nominated to the NIC."
    },
    {
        "id": "ch89-l2-q22",
        "question": "What is the",
        "options": ["Fixed at 10.","Not fixed, depends on the number of states in that zone (as all CMs and two more ministers from each state are included).","Always 5.","Only the CMs."],
        "correctAnswerIndex": 1,
        "explanation": "It includes CM + 2 ministers + Governor (for some roles) + Union Minister."
    },
    {
        "id": "ch89-l2-q23",
        "question": "The",
        "options": ["Handle International borders directly.","Act as a Regional planning body and monitor funds for specific projects.","Declare an Emergency.","Hire the Army."],
        "correctAnswerIndex": 1,
        "explanation": "NEC has a much more executive and financial role in the region"
    },
    {
        "id": "ch89-l2-q24",
        "question": "Which of the following documents is",
        "options": ["The Original Constitution of India.","The NIC Resolution.","The Home Ministry reports.","The Budget."],
        "correctAnswerIndex": 0,
        "explanation": "It"
    },
    {
        "id": "ch89-l2-q25",
        "question": "The use of",
        "options": ["The Constitution only.","Representation of the People Act, 1951 (Corrupt practice).","Criminal Law only.","None of the above."],
        "correctAnswerIndex": 1,
        "explanation": "Secular politics is enforced through various statutes to check communalism."
    },
    {
        "id": "ch89-l2-q26",
        "question": "Wait. Which",
        "options": ["Northern Zone.","Central Zonal Council.","Southern Zone.","Eastern Zone."],
        "correctAnswerIndex": 1,
        "explanation": "UP, MP, Uttarakhand, and Chhattisgarh form the Central Zonal Council."
    },
    {
        "id": "ch89-l2-q27",
        "question": "Regionalism can manifest as a demand for a separate",
        "options": ["Article 1.","Article 2.","Article 3.","Article 4."],
        "correctAnswerIndex": 2,
        "explanation": "Article 3 allows for internal reorganisation of the Union."
    },
    {
        "id": "ch89-l2-q28",
        "question": "The feeling of",
        "options": ["Police action.","Recommendations for socio-economic development and educational outreach.","Banning internet.","Only through elections."],
        "correctAnswerIndex": 1,
        "explanation": "Psychological integration requires positive State engagement."
    },
    {
        "id": "ch89-l2-q29",
        "question": "The",
        "options": ["Goa, Gujarat, Maharashtra and UTs of Dadra & Nagar Haveli and Daman & Diu.","Karnataka and Goa.","Only Rajasthan.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "The western coastal cluster forms this council."
    },
    {
        "id": "ch89-l2-q30",
        "question": "Which of the following is a",
        "options": ["Unequal economic development.","Untouchability and Caste-based discrimination.","River water disputes.","Border disputes."],
        "correctAnswerIndex": 1,
        "explanation": "Social inequalities prevent the development of a"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch89-l3-q1",
        "question": "Analyze the",
        "options": ["It promotes secularism too aggressively.","It is an extra-constitutional body with no statutory or constitutional basis, making its existence and utility purely dependent on the executive","It includes Chief Ministers who are already part of the Inter-State Council.","It has too many members."],
        "correctAnswerIndex": 1,
        "explanation": "Critics argue that such important matters should be handled by a constitutional body like the Inter-State Council (Art 263)."
    },
    {
        "id": "ch89-l3-q2",
        "question": "Evaluate the",
        "options": ["1st Amendment, 1951.","16th Amendment, 1963.","42nd Amendment, 1976.","44th Amendment, 1978."],
        "correctAnswerIndex": 1,
        "explanation": "The 16th amendment was a response to the Dravidian secessionist movement and recommendations of the National Integration Council."
    },
    {
        "id": "ch89-l3-q3",
        "question": "The",
        "options": ["Zonal Councils are for security; Inter-State is for economy.","Zonal Councils are statutory and regional; Inter-State Council is constitutional and national in scope.","There is no difference.","Inter-State Council is only for UTs."],
        "correctAnswerIndex": 1,
        "explanation": "Zonal councils handle regional clusters; the Inter-State council handles the whole Union-State ecosystem."
    },
    {
        "id": "ch89-l3-q4",
        "question": "Assertion (A): Communalism is often cited as the biggest threat to Indian secularism and integration.\\nReason (R): It encourages the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch89-l3-q5",
        "question": "Consider the",
        "options": ["It is the only one with a permanent secretariat.","It is mandated to formulate a","for the states and act as an advisory body for security and public order in the region.","It includes foreign members from Myanmar.","It can declare war on rebels."],
        "correctAnswerIndex": 1,
        "explanation": "NEC"
    },
    {
        "id": "ch89-l3-q6",
        "question": "The",
        "options": ["That everyone must speak one language.","That unity must be found in diversity, acknowledging and respecting cultural differences while maintaining a common national bond.","That states should be abolished.","That religion should be banned."],
        "correctAnswerIndex": 1,
        "explanation": "Emotional integration is a psychological state of belonging, not a mechanical suppression of differences."
    },
    {
        "id": "ch89-l3-q7",
        "question": "Analyze",
        "options": ["The use of regional languages.","The","disparities in development and the feeling of neglect in certain areas (e.g., Vidarbha, Telangana context).","Historical pride.","Religious festivals."],
        "correctAnswerIndex": 1,
        "explanation": "Economic neglect often leads to political mobilization and demands for separate states or autonomy."
    },
    {
        "id": "ch89-l3-q8",
        "question": "Could a",
        "options": ["No.","Yes, it is within its deliberative mandate to discuss and recommend",".","Only if the Supreme Court allows.","Only if the President requests."],
        "correctAnswerIndex": 1,
        "explanation": "While they can"
    },
    {
        "id": "ch89-l3-q9",
        "question": "A",
        "options": ["It will make everyone Hindus.","It will remove legal diversity in personal matters, providing a common legal identity for all citizens regardless of religion.","It will reduce the population.","It will increase taxes."],
        "correctAnswerIndex": 1,
        "explanation": "Proponents argue that a common law for family matters would strengthen social cohesion."
    },
    {
        "id": "ch89-l3-q10",
        "question": "Analyze the",
        "options": ["Because it meets too often.","Because it has no executive power, its meetings are infrequent, and its recommendations are often not implemented.","Because it is too expensive.","Because only politicians attend it."],
        "correctAnswerIndex": 1,
        "explanation": "The lack of regular meetings and"
    },
    {
        "id": "ch89-l3-q11",
        "question": "How does the",
        "options": ["By giving more power to the PM.","By deepening democracy and giving people a stake in governance at the local level, thereby reducing alienation.","By collecting more taxes for the Centre.","By banning regional parties."],
        "correctAnswerIndex": 1,
        "explanation": "Inclusion and empowerment at the grass-roots level reduce the"
    },
    {
        "id": "ch89-l3-q12",
        "question": "Is",
        "options": ["Yes.","No, it can be positive when it leads to the preservation and development of literature and culture; it becomes negative only when it turns into",".","Only in South India.","Only if Hindi is not used."],
        "correctAnswerIndex": 1,
        "explanation": "Laxmikanth distinguishes between"
    },
    {
        "id": "ch89-l3-q13",
        "question": "The",
        "options": ["Western Zone.","Northern Zonal Council.","Central Zone.","None of the above."],
        "correctAnswerIndex": 1,
        "explanation": "Rajasthan is part of the Northern zone despite its geographical"
    },
    {
        "id": "ch89-l3-q14",
        "question": "In the",
        "options": ["It allows the govt to interfere in temples.","It provides a constitutional","against communal politics that could tear the nation apart.","It allows regional parties to flourish.","It reduces the power of the CM."],
        "correctAnswerIndex": 1,
        "explanation": "By making secularism"
    },
    {
        "id": "ch89-l3-q15",
        "question": "Assertion (A): The North-Eastern Council (NEC) is more powerful than other Zonal Councils.\\nReason (R): It has a separate Act (1971) and is headed by a Chairman nominated by the President (usually the Home Minister).",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Its statutory mandate is broader and its resources are specifically earmarked for regional planning."
    },
    {
        "id": "ch89-l3-q16",
        "question": "Evaluate the",
        "options": ["That everyone is equal.","That local residents should have preferential rights in employment and resources within their state/region.","That farmers are the most important class.","That land should be divided equally."],
        "correctAnswerIndex": 1,
        "explanation": "This theory is a manifestation of regionalism that often creates conflicts with"
    },
    {
        "id": "ch89-l3-q17",
        "question": "Does the",
        "options": ["Yes, they can make final awards.","No, they can only discuss and try to facilitate a settlement; legal resolution is through Tribunals under Art 262.","Only the PM can decide.","Only the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Zonal councils are"
    },
    {
        "id": "ch89-l3-q18",
        "question": "Analysis of",
        "options": ["Both.","Only Secessionist (demanding separation from India).","Only Nationalist (demanding more state funds).","Neither."],
        "correctAnswerIndex": 1,
        "explanation": "Demanding a separate country is a threat to"
    },
    {
        "id": "ch89-l3-q19",
        "question": "The",
        "options": ["Creating communal electorates.","Banning communal parties and checking the use of religion in elections.","Increasing the number of states.","Decreasing the powers of the Home Minister."],
        "correctAnswerIndex": 1,
        "explanation": "This led to various reforms in the RPA and the IPC."
    },
    {
        "id": "ch89-l3-q20",
        "question": "Who is the",
        "options": ["Chief Executive Officer of NITI Aayog.","A person nominated by the Aayog (usually a Joint Secretary level officer).","The Vice-Chairman.","The Finance Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Professional expertise is provided to assist in regional planning discussions."
    },
    {
        "id": "ch89-l3-q21",
        "question": "If a member state is",
        "options": ["Appeal to the SC.","Simply ignore it, as it is non-binding advice.","Resign from the Council.","Ask for a re-vote."],
        "correctAnswerIndex": 1,
        "explanation": "The councils rely on"
    },
    {
        "id": "ch89-l3-q22",
        "question": "Critically analyze",
        "options": ["It is a problem for South India.","It is an educational compromise intended to balance regional, national, and international language needs for unity.","It is a religious policy.","It is for farmers only."],
        "correctAnswerIndex": 1,
        "explanation": "Proposed by the Kothari Commission, it aims to reduce linguistic alienation."
    },
    {
        "id": "ch89-l3-q23",
        "question": "Is",
        "options": ["Yes, critics argue it will harden caste identities and lead to more divisive politics.","No, proponents argue it is needed for social justice and targeted integration.","Both views exist in Indian political and constitutional discourse.","None of the above."],
        "correctAnswerIndex": 2,
        "explanation": "This is a contemporary debate reflecting the friction between"
    },
    {
        "id": "ch89-l3-q24",
        "question": "The",
        "options": ["Yes.","No, Zonal Councils operate at a","(mid) level providing a more granular regional focus that a single national body cannot.","Only for small states.","Only for big states."],
        "correctAnswerIndex": 1,
        "explanation": "Regional issues (like border rows or transport) are better handled in smaller groups."
    },
    {
        "id": "ch89-l3-q25",
        "question": "Evaluate the",
        "options": ["Because it was too short.","Because it was seen as an interference in the","domain of states and a violation of federalism.","Because it gave more power to the police.","Because it banned all religions."],
        "correctAnswerIndex": 1,
        "explanation": "The friction between"
    },
    {
        "id": "ch89-l3-q26",
        "question": "Wait. Which",
        "options": ["Southern Zonal Council.","Eastern Zonal Council.","Northern Zonal Council.","Actually, they all have roughly 4-6 members (excluding NEC which is separate)."],
        "correctAnswerIndex": 3,
        "explanation": "The 1956 Act tried to maintain a balance in the size of zones."
    },
    {
        "id": "ch89-l3-q27",
        "question": "Can a",
        "options": ["Yes.","No, it is assigned to one specific zone as per the Act.","Only Delhi.","Only if it"],
        "correctAnswerIndex": 1,
        "explanation": "Membership is based on geographical contiguity."
    },
    {
        "id": "ch89-l3-q28",
        "question": "Analyze the role of the",
        "options": ["He is the Chairman.","He is not part of it.","In some zones, he/she may be part of the delegation or involved in inter-state coordination behind the scenes.","He only signs the minutes."],
        "correctAnswerIndex": 2,
        "explanation": "While CMs are the political faces, the Governor as a Central appointee has a"
    },
    {
        "id": "ch89-l3-q29",
        "question": "The phrase",
        "options": ["Fundamental Rights (Art 19).","Fundamental Duties (Art 51A).","Oaths/Affirmations (3rd Schedule).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The 16th and 42nd amendments deeply embedded"
    },
    {
        "id": "ch89-l3-q30",
        "question": "Who summarized the goal of NIC as",
        "options": ["Dr. S. Radhakrishnan.","Jawaharlal Nehru.","Dr. Ambedkar.","Sardar Patel."],
        "correctAnswerIndex": 0,
        "explanation": "Radhakrishnan"
    }
];

export const CHAPTER_89_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
