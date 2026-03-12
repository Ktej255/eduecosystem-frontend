import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch7-l1-q1",
        "question": "Like any other modern state, India has two kinds of people. Who are they?",
        "options": ["Citizens and Aliens","Nationals and Expatriates","Natives and Immigrants","Residents and Non-Residents"],
        "correctAnswerIndex": 0,
        "explanation": "India has two kinds of people—citizens and aliens. Citizens are full members of the Indian State and owe allegiance to it. Aliens are the citizens of some other state."
    },
    {
        "id": "ch7-l1-q2",
        "question": "Aliens are divided into two categories. What are they?",
        "options": ["Legal aliens and Illegal aliens","Friendly aliens and Enemy aliens","Temporary aliens and Permanent aliens","Resident aliens and Non-resident aliens"],
        "correctAnswerIndex": 1,
        "explanation": "Aliens are divided into two categories—friendly aliens and enemy aliens. Friendly aliens are subjects of countries with which India has cordial relations."
    },
    {
        "id": "ch7-l1-q3",
        "question": "Which of the following Fundamental Rights is available ONLY to Indian citizens and NOT to aliens?",
        "options": ["Right to equality before the law (Article 14)","Right to freedom of speech and expression (Article 19)","Protection of life and personal liberty (Article 21)","Right to freedom of religion (Article 25)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 19 (Right to freedom of speech and expression, assembly, association, movement, residence and profession) is available exclusively to citizens of India."
    },
    {
        "id": "ch7-l1-q4",
        "question": "Is there any difference between a citizen by birth and a naturalized citizen regarding eligibility for the office of the President of India?",
        "options": ["Yes, only a citizen by birth is eligible for the President","No, both a citizen by birth as well as a naturalized citizen are eligible for the President","Yes, a naturalized citizen must have lived in India for 35 years before becoming eligible.","No, but a naturalized citizen cannot hold the office of the Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "In India, both a citizen by birth as well as a naturalized citizen are eligible for the office of President while in USA, only a citizen by birth and not a naturalized citizen is eligible for the office of President."
    },
    {
        "id": "ch7-l1-q5",
        "question": "Which Part and Articles of the Constitution deal with Citizenship?",
        "options": ["Part I, Articles 1 to 4","Part II, Articles 5 to 11","Part III, Articles 12 to 35","Part IV, Articles 36 to 51"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution deals with the citizenship from Articles 5 to 11 under Part II."
    },
    {
        "id": "ch7-l1-q6",
        "question": "Does the Constitution contain permanent and elaborate provisions relating to citizenship?",
        "options": ["Yes, it extensively defines the acquisition of citizenship forever.","No, it only identifies the persons who became citizens of India at its commencement (i.e., on January 26, 1950).","Yes, it details every condition under which citizenship can be lost.","No, it leaves everything completely blank for the states to decide."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not contain any permanent or elaborate provisions in this regard. It only identifies the persons who became citizens of India at its commencement (i.e., on January 26, 1950)."
    },
    {
        "id": "ch7-l1-q7",
        "question": "Which Article empowers the Parliament to enact a law to provide for the acquisition and termination of citizenship subsequent to the commencement of the Constitution?",
        "options": ["Article 5","Article 8","Article 10","Article 11"],
        "correctAnswerIndex": 3,
        "explanation": "Article 11 empowers the Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship."
    },
    {
        "id": "ch7-l1-q8",
        "question": "Following the power granted by Article 11, which comprehensive act did Parliament pass relating to citizenship?",
        "options": ["The Indian Citizenship Act, 1947","The Citizenship Act, 1950","The Citizenship Act, 1955","The Foreigners Act, 1946"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament enacted the Citizenship Act, 1955, which has been amended comprehensively over the years."
    },
    {
        "id": "ch7-l1-q9",
        "question": "According to Article 5, a person became a citizen of India at the commencement of the Constitution if they had their domicile in India AND fulfilled which of the following conditions?",
        "options": ["They were born in India.","Either of their parents was born in India.","They had been ordinarily resident in India for five years immediately before the commencement of the Constitution.","Any one of the above three conditions."],
        "correctAnswerIndex": 3,
        "explanation": "Article 5 states a person having domicile in India became a citizen if he fulfilled any one of the three conditions: born in India, OR either parent born in India, OR ordinarily resident in India for 5 years before Jan 26, 1950."
    },
    {
        "id": "ch7-l1-q10",
        "question": "Under Article 9, what happens to an Indian citizen who voluntarily acquires the citizenship of any foreign state?",
        "options": ["They acquire dual citizenship.","They must pay an expatriation tax.","They shall no longer remain a citizen of India.","They are stripped of voting rights but retain the passport."],
        "correctAnswerIndex": 2,
        "explanation": "Article 9: No person shall be a citizen of India or be deemed to be a citizen of India, if he has voluntarily acquired the citizenship of any foreign state."
    },
    {
        "id": "ch7-l1-q11",
        "question": "How many ways are prescribed by the Citizenship Act, 1955, to acquire Indian citizenship?",
        "options": ["Three","Four","Five","Six"],
        "correctAnswerIndex": 2,
        "explanation": "The Citizenship Act of 1955 prescribes five ways of acquiring citizenship, viz, birth, descent, registration, naturalisation and incorporation of territory."
    },
    {
        "id": "ch7-l1-q12",
        "question": "Under the Citizenship Act, 1955 (as amended), a person born in India on or after 3rd December 2004 is considered a citizen of India by birth if:",
        "options": ["Only the father is a citizen of India.","Any one parent is a citizen of India, regardless of the other","Both of their parents are citizens of India or one is a citizen and the other is not an illegal migrant at the time of birth.","They are born on Indian soil, irrespective of the parents"],
        "correctAnswerIndex": 2,
        "explanation": "Those born in India on or after 3rd December 2004 are considered citizens of India only if both of their parents are citizens of India or one of whose parents is a citizen of India and the other is not an illegal migrant at the time of their birth."
    },
    {
        "id": "ch7-l1-q13",
        "question": "Are the children of foreign diplomats posted in India and enemy aliens eligible to acquire Indian citizenship by birth?",
        "options": ["Yes, absolutely, if born on Indian soil.","No, they cannot acquire Indian citizenship by birth.","Yes, but only after residing in India for 7 years.","Yes, provided they apply for registration at age 18."],
        "correctAnswerIndex": 1,
        "explanation": "The children of foreign diplomats posted in India and enemy aliens cannot acquire Indian citizenship by birth."
    },
    {
        "id": "ch7-l1-q14",
        "question": "A person born outside India on or after December 3, 2004, shall NOT be a citizen of India by descent unless their birth is registered at an Indian consulate within what time period?",
        "options": ["Six months","One year","Five years","Before attaining the age of 18"],
        "correctAnswerIndex": 1,
        "explanation": "From December 3, 2004 onwards, a person born outside India shall not be a citizen of India by descent, unless his birth is registered at an Indian consulate within one year of the date of birth or with the permission of the Central Government."
    },
    {
        "id": "ch7-l1-q15",
        "question": "The Central Government may, on an application, register as a citizen of India any person (not being an illegal migrant) if they belong to any of several categories. One such category is",
        "options": ["Five years","Seven years","Ten years","Twelve years"],
        "correctAnswerIndex": 1,
        "explanation": "A person of Indian origin who is ordinarily resident in India for seven years before making an application for registration can be registered as an Indian citizen."
    },
    {
        "id": "ch7-l1-q16",
        "question": "Under",
        "options": ["They are not a subject of a country where Indians are prevented from becoming naturalized citizens.","They have an adequate knowledge of a language specified in the Eighth Schedule of the Constitution.","They are of good character.","They must have invested a minimum of $1 million in India."],
        "correctAnswerIndex": 3,
        "explanation": "Investment of money is not a qualification for naturalization under the Citizenship Act. Qualifications include repudiating past citizenship, residing in India (or govt service) for 12 months, good character, adequate language knowledge, etc."
    },
    {
        "id": "ch7-l1-q17",
        "question": "However, the Government of India may waive ALL or ANY of the conditions for naturalization if the person has rendered distinguished service in which fields?",
        "options": ["Politics and Administration only.","Science, philosophy, art, literature, world peace or human progress.","Business, commerce, and trade.","Military service solely."],
        "correctAnswerIndex": 1,
        "explanation": "The Government of India may waive all or any of the conditions for naturalisation in the case of a person who has rendered distinguished service to the science, philosophy, art, literature, world peace or human progress."
    },
    {
        "id": "ch7-l1-q18",
        "question": "When Puducherry became a part of India, the Government of India issued the Citizenship (Pondicherry) Order, 1962. This exemplifies which method of acquiring citizenship?",
        "options": ["Descent","Registration","Naturalisation","By Incorporation of Territory"],
        "correctAnswerIndex": 3,
        "explanation": "If any foreign territory becomes a part of India, the Government of India specifies the persons who among the people of the territory shall be the citizens of India. Such persons become the citizens of India from the notified date (Incorporation of Territory)."
    },
    {
        "id": "ch7-l1-q19",
        "question": "The Citizenship Act, 1955 prescribes three ways of losing citizenship whether acquired under the Act or prior to it under the Constitution. What are they?",
        "options": ["Renunciation, Termination, and Deprivation","Expulsion, Deportation, and Extradition","Resignation, Expiration, and Cancellation","Abandonment, Forfeiture, and Exile"],
        "correctAnswerIndex": 0,
        "explanation": "The three ways of losing citizenship are renunciation, termination, and deprivation."
    },
    {
        "id": "ch7-l1-q20",
        "question": "If an Indian citizen of full age and capacity makes a declaration relinquishing his Indian citizenship, what happens to their minor children?",
        "options": ["They retain Indian citizenship indefinitely.","They immediately lose Indian citizenship as well.","They are given dual citizenship.","They become stateless until the age of 18."],
        "correctAnswerIndex": 1,
        "explanation": "Every minor child of that person also loses Indian citizenship. However, when such a child attains the age of eighteen, he may resume Indian citizenship."
    },
    {
        "id": "ch7-l1-q21",
        "question": "By",
        "options": ["Yes, it applies unconditionally at all times.","No, this provision does not apply during a war in which India is engaged.","It depends on the permission of the Supreme Court.","Yes, but only if they join the enemy state."],
        "correctAnswerIndex": 1,
        "explanation": "When an Indian citizen voluntarily acquires the citizenship of another country, his Indian citizenship automatically terminates. This provision, however, does not apply during a war in which India is engaged."
    },
    {
        "id": "ch7-l1-q22",
        "question": "Which of the following is a condition under which the Central Government can compulsorily",
        "options": ["If the citizen has merely lived abroad for 2 years continuously.","If the citizen has obtained the citizenship by fraud.","If the citizen refuses to vote in two consecutive general elections.","If the citizen is born in India but later adopts a foreign religion."],
        "correctAnswerIndex": 1,
        "explanation": "Compulsory deprivation occurs if the citizen has obtained the citizenship by fraud, shown disloyalty to the Constitution, unlawfully traded with the enemy during a war, etc."
    },
    {
        "id": "ch7-l1-q23",
        "question": "The Indian Constitution establishes what type of citizenship system?",
        "options": ["Dual Citizenship (National and State)","Single Citizenship","Triple Citizenship (National, State, and Municipal)","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), it provides for only a single citizenship, that is, the Indian citizenship."
    },
    {
        "id": "ch7-l1-q24",
        "question": "In countries like the USA and Switzerland, what kind of citizenship system is adopted?",
        "options": ["Single citizenship","Dual citizenship","Stateless citizenship","Supranational citizenship"],
        "correctAnswerIndex": 1,
        "explanation": "In countries like USA and Switzerland, there is a system of dual citizenship. In USA, a person is a citizen of USA and also a citizen of the particular state to which he belongs."
    },
    {
        "id": "ch7-l1-q25",
        "question": "As a general rule in India, all citizens irrespective of the state in which they are born or reside enjoy the same political and civil rights over the entire country. However, Article 16 allows Parliament to prescribe",
        "options": ["Yes, any State Legislature can prescribe residence qualifications.","No, only Parliament can prescribe residence as a condition, not a State Legislature.","Yes, but only with the Governor","No,","can never be a condition for any government job in India."],
        "correctAnswerIndex": 1,
        "explanation": "The Parliament (under Article 16) can prescribe residence within a state or union territory as a condition for certain employments... this power relies strictly with Parliament and NOT a state legislature."
    },
    {
        "id": "ch7-l1-q26",
        "question": "Article 15 prohibits discrimination against any citizen on grounds of religion, race, caste, sex or place of birth. Does it prohibit discrimination on the ground of",
        "options": ["Yes,","is explicitly mentioned as a prohibited ground in Article 15.","No, it does not prohibit discrimination on the ground of residence.","Yes, the Supreme Court interpreted","to completely mean",".","No, it only prohibits discrimination based on caste."],
        "correctAnswerIndex": 1,
        "explanation": "Article 15 prohibits discrimination on grounds ONLY of religion, race, caste, sex or place of birth. It does NOT include"
    },
    {
        "id": "ch7-l1-q27",
        "question": "In September 2000, the Ministry of External Affairs setup a High Level Committee on the Indian Diaspora. Who was its Chairman?",
        "options": ["V.N. Khare","L.M. Singhvi","P.N. Bhagwati","Nanabhoy Palkhivala"],
        "correctAnswerIndex": 1,
        "explanation": "In September 2000, the Ministry of External Affairs setup a High Level Committee on the Indian Diaspora under the Chairmanship of L.M. Singhvi."
    },
    {
        "id": "ch7-l1-q28",
        "question": "Based on the L.M. Singhvi Committee report, the Citizenship (Amendment) Act 2003 provided for the acquisition of Overseas Citizenship of India (OCI) to PIOs belonging to certain specified countries except:",
        "options": ["USA and UK","Pakistan and Bangladesh","Canada and Australia","South Africa and Mauritius"],
        "correctAnswerIndex": 1,
        "explanation": "The 2003 amendment made provision for the acquisition of Overseas Citizenship of India (OCI) by the PIOs of 16 specified countries (later expanded to all except Pakistan and Bangladesh)."
    },
    {
        "id": "ch7-l1-q29",
        "question": "The Citizenship (Amendment) Act, 2015 introduced a new scheme called",
        "options": ["Non-Resident Indian (NRI) scheme","Persons of Indian Origin (PIO) card scheme","Dual Citizenship scheme","Expatriate Identity Card scheme"],
        "correctAnswerIndex": 1,
        "explanation": "The Citizenship (Amendment) Act, 2015 merged the Person of Indian Origin (PIO) card scheme and the Overseas Citizen of India (OCI) card scheme, creating a single scheme called"
    },
    {
        "id": "ch7-l1-q30",
        "question": "Does an Overseas Citizen of India (OCI) Cardholder enjoy the Fundamental Right to equality of opportunity in matters of public employment (Article 16)?",
        "options": ["Yes, they enjoy all Fundamental Rights.","No, they do not enjoy the right to equality of opportunity in matters of public employment.","Yes, but only in central government jobs.","Yes, provided they pay Indian income tax."],
        "correctAnswerIndex": 1,
        "explanation": "An OCI cardholder is NOT entitled to the right to equality of opportunity in matters of public employment (Article 16). They also lack voting rights and cannot hold offices like President or Supreme Court Judge."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch7-l2-q1",
        "question": "Consider the constitutional definition of",
        "options": ["In India, states cannot grant any special rights strictly on the basis of state citizenship, whereas US states have separate citizenships granting exclusive political rights.","In India, states issue separate passports, but the Centre issues the primary passport.","In the USA, federal citizenship automatically supersedes state citizenship in all matters.","In India, single citizenship means citizens can only vote once in their lifetime."],
        "correctAnswerIndex": 0,
        "explanation": "The USA holds dual citizenship (national + state), allowing states to discriminate in favor of their own citizens in political rights. India"
    },
    {
        "id": "ch7-l2-q2",
        "question": "Article 9 states that no person shall be a citizen of India if he has voluntarily acquired the citizenship of a foreign state. Does acquiring an",
        "options": ["Yes, OCI is technically dual citizenship and thus violates Article 9.","No, because OCI is not actual citizenship in the constitutional sense; it is merely a lifelong visa with certain privileges.","Yes, but the Supreme Court granted an exemption for NRIs.","No, because OCI cardholders automatically surrender their foreign passports."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution explicitly prohibits dual citizenship under Article 9. The OCI scheme is NOT dual citizenship; it is a statutory right under the Citizenship Act granting lifelong visa and some economic parity, but no political rights."
    },
    {
        "id": "ch7-l2-q3",
        "question": "Under the Citizenship Act 1955, how does the acquisition of citizenship by",
        "options": ["Registration is for aliens with no Indian connection, while naturalization is for persons of Indian origin (PIOs).","Registration is primarily for persons of Indian origin (PIOs) or persons married to Indian citizens, whereas Naturalization is generally for foreigners with no prior ancestral link to India.","Registration is done by the State Government, whereas Naturalization is done by the Central Government.","Registration grants immediate voting rights, while Naturalization has a 5-year waiting period."],
        "correctAnswerIndex": 1,
        "explanation": "Registration (Section 5) caters mostly to people with a preexisting link to India (e.g., PIOs, spouses of citizens). Naturalization (Section 6) applies broadly to any foreigner who resides in India for the requisite period and meets the qualifications."
    },
    {
        "id": "ch7-l2-q4",
        "question": "Consider the principle of",
        "options": ["India shifted from strict jus sanguinis in 1950 to strict jus soli in 2003.","India started with a liberal jus soli principle in 1950 but progressively moved towards jus sanguinis to prevent illegal migration.","India has always strictly maintained jus soli without amendments.","India transitioned to a system where citizenship is only granted by naturalization."],
        "correctAnswerIndex": 1,
        "explanation": "Initially (1950-1987), anyone born in India was a citizen (jus soli). Amendments in 1986 and 2003 added requirements of parental citizenship (jus sanguinis), meaning birth on Indian soil alone is no longer sufficient to automatically confer citizenship if parents are foreign/illegal."
    },
    {
        "id": "ch7-l2-q5",
        "question": "If an Indian citizen voluntarily acquires US citizenship during a peacetime scenario, their Indian citizenship is automatically terminated under Section 9 of the Citizenship Act. However, if this happens while India is engaged in a war, what is the legal position?",
        "options": ["The termination is accelerated and their property is confiscated.","The termination does not take place immediately; the Central Government may withhold it.","They are declared an","retroactively.","The Supreme Court automatically revokes their foreign citizenship."],
        "correctAnswerIndex": 1,
        "explanation": "The provision for automatic termination does not apply during a war in which India is engaged. The Central Government has the discretion to withhold the termination to prevent individuals from escaping treason/wartime duties by naturalizing elsewhere."
    },
    {
        "id": "ch7-l2-q6",
        "question": "Which of the following constitutional rights is denied to",
        "options": ["Protection of life and personal liberty (Article 21)","Protection against arrest and detention (Article 22)","Equality before the law (Article 14)","Freedom of speech and expression (Article 19)"],
        "correctAnswerIndex": 1,
        "explanation": "Article 22 (protection against arrest and detention) is available to citizens and friendly aliens, but NOT to enemy aliens. (Articles 14 and 21 are available to all persons, while Art 19 is exclusively for citizens)."
    },
    {
        "id": "ch7-l2-q7",
        "question": "Under the provisions of the Constitution (Articles 5-8),",
        "options": ["Birthplace and Employment.","Fact of residence (factum) and intention to reside permanently (animus).","Paying taxes and registering to vote.","Holding property and religious affiliation."],
        "correctAnswerIndex": 1,
        "explanation": "Domicile implies two elements: (1) actual residence in a place (factum), and (2) the intention to make it a permanent home (animus). Mere temporary residence without intention to stay permanently does not constitute domicile."
    },
    {
        "id": "ch7-l2-q8",
        "question": "Consider the deprivation of citizenship by the Central Government. The government CANNOT compulsorily deprive someone of their citizenship if they acquired it by:",
        "options": ["Naturalization","Registration","Birth or Descent","Incorporation of territory"],
        "correctAnswerIndex": 2,
        "explanation": "Deprivation applies only to citizens by naturalization or registration. A citizen by birth or descent cannot be compulsorily deprived of his citizenship by the Central Government under Section 10 of the Act."
    },
    {
        "id": "ch7-l2-q9",
        "question": "Assertion (A): Unlike the USA, a person born to foreign diplomats in India on Indian soil does not constitutionally become an Indian citizen by birth under current laws.\\nReason (R): The Citizenship Act explicitly states that children of foreign diplomats posted in India cannot acquire Indian citizenship by birth.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. India"
    },
    {
        "id": "ch7-l2-q10",
        "question": "The Citizenship (Amendment) Act, 2015 empowered the Central Government to cancel the registration of an OCI cardholder on certain grounds. Which of the following is NOT one of those statutory grounds?",
        "options": ["The OCI cardholder has shown disloyalty to the Constitution of India.","The OCI cardholder has been sentenced to imprisonment for not less than two years within five years of registration.","The OCI cardholder has continuously remained out of India for more than two years.","The OCI cardholder obtained the card by fraud."],
        "correctAnswerIndex": 2,
        "explanation": "Staying out of India is not a ground for OCI cancellation (it"
    },
    {
        "id": "ch7-l2-q11",
        "question": "With respect to Overseas Citizen of India (OCI) Cardholders, which of the following rights is explicitly granted to them?",
        "options": ["The right to vote in Lok Sabha elections.","The right to purchase agricultural land in India.","Parity with NRIs in respect of all facilities available to them in economic, financial, and educational fields (except agricultural/plantation properties).","The right to serve as a Judge of a High Court."],
        "correctAnswerIndex": 2,
        "explanation": "OCI cardholders are granted parity with NRIs in economic, financial, and educational fields, EXCEPT in the acquisition of agricultural or plantation properties. They do not have voting rights or eligibility for constitutional posts."
    },
    {
        "id": "ch7-l2-q12",
        "question": "Article 16 allows Parliament to make",
        "options": ["To ensure that states do not create chaotic, conflicting local-preference laws, thereby destroying the all-India character of citizenship.","Because Parliament handles all state public service commission exams.","To prevent linguistic minorities from getting government jobs.","Because the Supreme Court mandated centralized employment."],
        "correctAnswerIndex": 0,
        "explanation": "If states were allowed to restrict jobs to their own residents, it would splinter the unity of the nation and violate the spirit of single citizenship. Parliament retains this power to act uniformly as an exception (e.g., Public Employment (Requirement as to Residence) Act)."
    },
    {
        "id": "ch7-l2-q13",
        "question": "Consider the mechanism of",
        "options": ["When the citizen refuses to pay a renunciation fee.","When the declaration is made during a war in which India is engaged; the Central Government may withhold registration.","When the citizen has unpaid bank loans in India.","When the citizen is a minor."],
        "correctAnswerIndex": 1,
        "explanation": "If such a declaration is made during a war in which India is engaged, its registration shall be withheld by the Central Government."
    },
    {
        "id": "ch7-l2-q14",
        "question": "Prior to 2003, there was a distinction between",
        "options": ["It was elevated to grant dual citizenship to all Commonwealth nations.","It was repealed by the Citizenship (Amendment) Act, 2003.","It was expanded to include SAARC nations.","It remains unamended but ignored."],
        "correctAnswerIndex": 1,
        "explanation": "The provision for Commonwealth Citizenship (which previously allowed the government to extend certain rights of Indian citizens to citizens of other Commonwealth countries) was repealed by the Citizenship (Amendment) Act, 2003."
    },
    {
        "id": "ch7-l2-q15",
        "question": "The Constitution distinguishes between a citizen and an alien. Which of the following public offices can theoretically be held by a",
        "options": ["Vice-President of India","Governor of a State","Advocate General of a State","None of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Certain offices can be held ONLY by citizens of India. These include President, Vice-President, Judges of SC/HC, Governor, Attorney General, and Advocate General."
    },
    {
        "id": "ch7-l2-q16",
        "question": "Which of the following is true regarding",
        "options": ["A citizen by birth can be deprived if they reside out of India for 7 continuous years.","A naturalized citizen can be deprived if they reside out of India for 7 continuous years, unless they register annually at an Indian consulate.","No citizen can ever be deprived for merely residing abroad.","Any citizen residing abroad for 5 years loses citizenship automatically."],
        "correctAnswerIndex": 1,
        "explanation": "The Central Government can deprive a naturalized/registered citizen if they have been ordinarily resident out of India for seven years continuously (without registering annually at a consulate or being a student/servant of the government)."
    },
    {
        "id": "ch7-l2-q17",
        "question": "An NRI (Non-Resident Indian), an OCI (Overseas Citizen of India), and a PIO (Person of Indian Origin) are distinct categories. Who among the following is actually an Indian citizen holding an Indian passport?",
        "options": ["Only the NRI","Both NRI and OCI","Only the PIO","None; they are all foreign citizens"],
        "correctAnswerIndex": 0,
        "explanation": "An NRI is an Indian citizen who is ordinarily residing outside India and holds an Indian passport. OCI and PIO (now merged into OCI) are foreign nationals holding foreign passports."
    },
    {
        "id": "ch7-l2-q18",
        "question": "According to Article 7, a person who migrated to Pakistan after March 1, 1947, would not be a citizen of India. However, they could still become an Indian citizen under Article 7 if they:",
        "options": ["Paid a repatriation tax.","Returned to India under a permit for resettlement or permanent return.","Proved they were forced out under duress.","Married an Indian citizen."],
        "correctAnswerIndex": 1,
        "explanation": "A person who migrated to Pakistan after March 1, 1947 but returned to India under a permit for resettlement or permanent return could become an Indian citizen (they had to reside in India for 6 months and register)."
    },
    {
        "id": "ch7-l2-q19",
        "question": "In India, Article 11 acts as a",
        "options": ["It makes Articles 5 to 10 immune to any constitutional amendment.","It clarifies that Articles 5 to 10 are temporary provisions dealing with the situation at the commencement of the Constitution, and Parliament has absolute plenary power to regulate citizenship thereafter.","It subjugates Parliament","s veto.","It transfers the power of granting citizenship entirely to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 11 clearly states that nothing in the foregoing provisions (Arts 5-10) shall derogate from the power of Parliament to make any provision with respect to citizenship. Therefore, the earlier articles were just to solve the immediate 1950 partition crisis; Parliament holds plenary power."
    },
    {
        "id": "ch7-l2-q20",
        "question": "Regarding equality of rights, a law restricting the freedom of movement (Article 19(1)(d)) of an illegal migrant is constitutionally valid because:",
        "options": ["Illegal migrants are enemy aliens.","Article 19 rights are explicitly confined only to citizens of India.","The Inter-State Council strips migrants of rights.","The Supreme Court declared illegal migrants non-persons."],
        "correctAnswerIndex": 1,
        "explanation": "Article 19 rights (movement, speech, assembly, residence, profession) are available ONLY to citizens. Any alien (legal or illegal migrant) does not possess these fundamental rights."
    },
    {
        "id": "ch7-l2-q21",
        "question": "Under the OCI scheme, can a person who is or had been a citizen of Pakistan or Bangladesh be eligible for registration as an OCI cardholder?",
        "options": ["Yes, provided they pay an increased fee.","No, persons with past or present citizenship of Pakistan or Bangladesh are explicitly ineligible.","Yes, but they must renounce their Pakistani/Bangladeshi citizenship first.","Yes, if they are married to an Indian citizen."],
        "correctAnswerIndex": 1,
        "explanation": "No person, who is or had been a citizen of Pakistan or Bangladesh (or any other country the Central Government may specify), shall be eligible for registration as an Overseas Citizen of India Cardholder."
    },
    {
        "id": "ch7-l2-q22",
        "question": "Consider the acquisition of citizenship by",
        "options": ["That the minor child intends to live in India permanently.","That the minor does not hold the passport of another country.","That the minor child will serve in the Indian military.","That the parents will pay Indian income tax on the child"],
        "correctAnswerIndex": 1,
        "explanation": "An application for registration of the birth of a minor child to an Indian consulate shall be accompanied by an undertaking in writing from the parents that the minor child does not hold the passport of another country."
    },
    {
        "id": "ch7-l2-q23",
        "question": "The Citizenship Act incorporates",
        "options": ["All persons who migrated from Bangladesh entirely regardless of the timeline.","Persons of Indian origin who came to Assam from Bangladesh before January 1, 1966.","Persons who fled religious persecution from Afghanistan after 2014.","Sri Lankan Tamil refugees who arrived before 1991."],
        "correctAnswerIndex": 1,
        "explanation": "Section 6A (inserted in 1985) grants citizenship to persons of Indian origin who came to Assam from Bangladesh before January 1, 1966. Those who came between Jan 1, 1966 and March 25, 1971 get voting rights after a 10-year holding period."
    },
    {
        "id": "ch7-l2-q24",
        "question": "Assertion (A): A person can acquire Indian citizenship by naturalization only if they belong to a country that allows Indians to become naturalized citizens of that country.\\nReason (R): The principle of reciprocity is embedded in the conditions for naturalization under the Citizenship Act.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. One of the conditions for naturalization is that the applicant is not a subject or citizen of any country where citizens of India are prevented by law or practice from becoming naturalized citizens."
    },
    {
        "id": "ch7-l2-q25",
        "question": "What distinction exists between",
        "options": ["Renunciation is involuntary, while Termination is voluntary.","Renunciation involves a conscious declaration of relinquishment by the citizen; Termination is a legal consequence automatically triggered by acquiring foreign citizenship.","Renunciation requires Parliament","There is no legal difference; both terms are used interchangeably."],
        "correctAnswerIndex": 1,
        "explanation": "Renunciation refers to a voluntary formal declaration by the individual. Termination is an automatic operation of law (under Section 9) the moment an Indian voluntarily acquires the citizenship of another country."
    },
    {
        "id": "ch7-l2-q26",
        "question": "When a person is registered as an OCI cardholder, their spouse (who is a foreign origin national) can also be registered as an OCI. However, what is the mandatory time requirement for their marriage to have subsisted legally before the application?",
        "options": ["A continuous period of not less than one year.","A continuous period of not less than two years.","A continuous period of not less than five years.","There is no time requirement."],
        "correctAnswerIndex": 1,
        "explanation": "A spouse of a citizen of India or an OCI cardholder, whose marriage has been registered and subsisted for a continuous period of not less than two years immediately preceding the presentation of the application, is eligible for OCI."
    },
    {
        "id": "ch7-l2-q27",
        "question": "Under Article 8, certain persons of Indian origin residing outside India (undivided India) were deemed citizens at the commencement of the Constitution. What was the critical procedural step they had to take to activate this right?",
        "options": ["Pay a tax to the Indian treasury.","Register as a citizen of India with the diplomatic or consular representative of India in the country where they were residing.","Return to India within 6 months.","Serve in the Indian Army."],
        "correctAnswerIndex": 1,
        "explanation": "Article 8 covers overseas Indians. They could become citizens provided they registered themselves as citizen of India by the diplomatic or consular representative of India in the country of their residence."
    },
    {
        "id": "ch7-l2-q28",
        "question": "The power of",
        "options": ["Yes, if they show disloyalty to the Constitution.","No, deprivation applies only to citizenship acquired by naturalization or registration.","Yes, if they trade with an enemy during war.","Yes, if they reside outside India for 7 years."],
        "correctAnswerIndex": 1,
        "explanation": "Deprivation is a compulsory termination ONLY applicable to citizens who acquired their status by Naturalization or Registration. You cannot be compulsorily"
    },
    {
        "id": "ch7-l2-q29",
        "question": "Which of the following Fundamental Duties (Article 51A) logically stems directly from the concept of citizenship and the implicit allegiance a citizen owes to the state?",
        "options": ["To uphold and protect the sovereignty, unity and integrity of India.","To defend the country and render national service when called upon to do so.","To promote harmony and the spirit of common brotherhood.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Only citizens owe full allegiance to the Indian state. Thus, all Fundamental Duties—protecting sovereignty, defending the country, promoting brotherhood—are duties legally expected of citizens flowing from their citizenship status."
    },
    {
        "id": "ch7-l2-q30",
        "question": "A child born in India whose parents are both illegal migrants. According to the Citizenship Act 1955 (post-2003 amendment), what is the citizenship status of this child?",
        "options": ["Citizen by birth due to jus soli.","Not a citizen of India by birth.","Citizen by descent.","Citizen if they reside continuously for 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "Post 3rd December 2004, a child is a citizen by birth ONLY if both parents are citizens, OR one is a citizen and the other is NOT an illegal migrant. If both are illegal migrants, the child is not a citizen by birth."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch7-l3-q1",
        "question": "Consider the constitutional interplay between",
        "options": ["Protection against ex-post facto laws (Article 20) only.","Protection of life and personal liberty (Article 21) only.","Both Articles 20 and 21, as well as equality before law (Article 14).","No fundamental rights are guaranteed to an illegal migrant."],
        "correctAnswerIndex": 2,
        "explanation": "Articles 14, 20, 21, 22, 23, 24, 25, 26, 27, and 28 are available to all"
    },
    {
        "id": "ch7-l3-q2",
        "question": "Section 6A of the Citizenship Act, 1955, added to operationalize the Assam Accord, establishes a tiered citizenship framework. Consider the following:\\n1. Those entering Assam from Bangladesh between 1966 and 1971 were granted all rights as citizens, EXCEPT the right to vote for 10 years after registration.\\n2. The Supreme Court declared Section 6A constitutional, validating this differential classification to resolve the geopolitical crisis.\\nWhich of the above statements is/are correct?",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "To resolve the Assam agitation, migrants arriving between Jan 1, 1966 and Mar 24, 1971 were registered and given all citizen rights except the right to vote for a period of 10 years (Statement 1). The Supreme Court recently (2024) upheld the constitutional validity of Section 6A (Statement 2)."
    },
    {
        "id": "ch7-l3-q3",
        "question": "Consider the constitutional standing of",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 3,
        "explanation": "Statement 1 is incorrect: The Supreme Court (State Trading Corporation v. CTO) ruled that a company is an artificial person, NOT a citizen, and cannot claim Article 19 rights. Statement 2 is incorrect: OCI is only for natural persons, not corporate entities."
    },
    {
        "id": "ch7-l3-q4",
        "question": "Examine the",
        "options": ["If the citizen has shown themselves to be disloyal to the Constitution of India.","If the citizen unlawfully communicated with an enemy during war.","If within 5 years of naturalization, the citizen is sentenced to imprisonment anywhere in the world for 2+ years.","There is no mandatory deprivation; the Act explicitly states","."],
        "correctAnswerIndex": 3,
        "explanation": "Section 10 of the Citizenship Act 1955 uses the word"
    },
    {
        "id": "ch7-l3-q5",
        "question": "The Citizenship Act incorporates",
        "options": ["That the child will formally renounce the birth country","That the child currently does not hold the passport of another country.","That both parents intend to return to India before the child turns 18.","That the child is primarily domiciled in India under international law."],
        "correctAnswerIndex": 1,
        "explanation": "Since December 2004, the application for registration of a minor child born abroad MUST be accompanied by a sworn undertaking from the parents that the minor child does not hold the passport of another country, explicitly preventing dual nationality from birth."
    },
    {
        "id": "ch7-l3-q6",
        "question": "With reference to the OCI (Overseas Citizen of India) scheme, consider the following privileges:\\n1. Purchasing agricultural land in India.\\n2. Pursuing the profession of medicine, dentistry, or nursing in India under relevant statutory acts.\\n3. Sitting for the All India Pre-Medical Test or such other tests to make them eligible for admission.\\nWhich of the above privileges is/are NOT granted to an OCI cardholder?",
        "options": ["1 only","1 and 2 only","3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "OCI cardholders are granted parity with NRIs regarding pursuing professions (like biology, medicine, law, architecture) under relevant Acts (Statement 2) and appearing for all India entrance tests (Statement 3). They are strictly PROHIBITED from acquiring agricultural or plantation properties (Statement 1)."
    },
    {
        "id": "ch7-l3-q7",
        "question": "Assertion (A): Article 11 acts as a unique",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Article 11 explicitly preserves Parliament"
    },
    {
        "id": "ch7-l3-q8",
        "question": "Under the provisions of the Foreigners Act, 1946 (which intersects with citizenship verification), upon whom does the",
        "options": ["The State Government prosecuting the individual.","The Election Commission of India.","The Foreigners Tribunals via independent investigation.","The individual who is alleged to be a foreigner."],
        "correctAnswerIndex": 3,
        "explanation": "Section 9 of the Foreigners Act, 1946 explicitly places the burden of proof firmly on the individual. If a question arises"
    },
    {
        "id": "ch7-l3-q9",
        "question": "Consider the constitutional impact of the",
        "options": ["They automatically became an Indian citizen due to birth (jus soli).","They were not a citizen because","was the fundamental prerequisite to invoke birth, descent, or residence clauses under Article 5.","They were granted dual citizenship temporarily.","They became an","retroactively."],
        "correctAnswerIndex": 1,
        "explanation": "Article 5 requires TWO things: Domicile in India PLUS (birth OR descent OR 5 years residence). Without a domicile in India (an intention to reside permanently), birth in India alone did not grant citizenship at commencement under Article 5."
    },
    {
        "id": "ch7-l3-q10",
        "question": "According to the Citizenship (Amendment) Act passed recently, members of six minority communities from Afghanistan, Bangladesh, and Pakistan who entered India before Dec 31, 2014, will NOT be treated as illegal migrants. However, this exception does NOT apply to the tribal areas of which states protected under the 6th Schedule?",
        "options": ["Assam, Meghalaya, Tripura, and Mizoram","Arunachal Pradesh, Nagaland, and Manipur","Assam, West Bengal, and Sikkim","Tripura, Mizoram, Manipur, and Nagaland"],
        "correctAnswerIndex": 0,
        "explanation": "The CAA provisions do not apply to the tribal areas of Assam, Meghalaya, Mizoram, or Tripura as included in the Sixth Schedule to the Constitution and the area covered under"
    },
    {
        "id": "ch7-l3-q11",
        "question": "Regarding the",
        "options": ["The Supreme Court of India under original jurisdiction.","The Foreigners Tribunals.","The Central Government (specifically designated authorities within the Ministry of Home Affairs).","The Election Commission of India."],
        "correctAnswerIndex": 2,
        "explanation": "As per the Citizenship Rules, the Central Government (MHA) has the exclusive jurisdiction to determine the question of whether, when, or how a citizen of India has acquired the citizenship of another country."
    },
    {
        "id": "ch7-l3-q12",
        "question": "Examine the concept of",
        "options": ["To prevent the loss of tax revenue necessary for funding the war effort.","To prevent individuals from escaping treason charges, conscription duties, or collaborating with the enemy by hiding behind a new, neutral, or enemy nationality.","To ensure that Indians abroad can be conscripted into allied armies.","To violate the UN Declaration of Human Rights."],
        "correctAnswerIndex": 1,
        "explanation": "The jurisprudential rationale is to prevent individuals from escaping their duties of allegiance—such as conscription, or facing treason charges for collaborating with an enemy—by simply shedding their Indian citizenship during wartime."
    },
    {
        "id": "ch7-l3-q13",
        "question": "A child born in India in 1990 whose father was an Indian citizen and mother was an illegal migrant from Bangladesh. Under the Citizenship Act 1955, what was the citizenship status of this child at birth?",
        "options": ["Not a citizen, because one parent was an illegal migrant.","Citizen of India by birth.","Citizen only after naturalization at age 18.","Citizen of Bangladesh due to jus sanguinis."],
        "correctAnswerIndex": 1,
        "explanation": "From July 1, 1987 to Dec 3, 2004, the law only required"
    },
    {
        "id": "ch7-l3-q14",
        "question": "Consider the constitutional definition of single citizenship compared to the",
        "options": ["Jammu & Kashmir","Andhra Pradesh and Telangana","The North-Eastern Council states","Goa, Daman and Diu"],
        "correctAnswerIndex": 1,
        "explanation": "While the 1957 Act largely expired in 1974, Article 371D (inserted by the 32nd Amendment) provided special provisions regarding public employment and education based on local residence specifically for Andhra Pradesh and Telangana."
    },
    {
        "id": "ch7-l3-q15",
        "question": "Which constitutional doctrine prevents a state legislature (e.g., Maharashtra) from passing a law that reserves 100% of all private sector jobs exclusively for",
        "options": ["Article 11 assigns sole power of citizenship to Parliament.","Article 15 prohibits discrimination on grounds of residence.","The concept of single citizenship implies a single unified national economic market; moreover, only Parliament can prescribe residence restrictions under Article 16, and Article 19(1)(g) protects the right to practice any profession anywhere for all citizens.","Actually, state legislatures have full constitutional power to reserve 100% private jobs under the 7th Schedule State List."],
        "correctAnswerIndex": 2,
        "explanation": "State laws mandating 100% reservation for"
    },
    {
        "id": "ch7-l3-q16",
        "question": "Regarding",
        "options": ["Mother Teresa","Dalai Lama","Adnan Sami","None of the above; the waiver has never been used for citizenship, only for awarded honors."],
        "correctAnswerIndex": 2,
        "explanation": "While Mother Teresa became a naturalized citizen after a long period of residency (following standard procedures eventually), Adnan Sami (a Pakistani singer) was granted Indian citizenship through naturalization where the government utilized its discretionary powers acknowledging distinguished service to art/music."
    },
    {
        "id": "ch7-l3-q17",
        "question": "Assertion (A): The Constitution of India explicitly defines the term",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion is false. The Constitution does NOT define the word"
    },
    {
        "id": "ch7-l3-q18",
        "question": "Consider the rights of an",
        "options": ["Yes, because an OCI cardholder is a registered quasi-citizen.","Yes, because Article 19 is available to all persons lawfully residing in India.","No, because OCI cardholders are statutory foreign nationals who are explicitly denied Article 19 rights by the Constitution.","No, because the Supreme Court restricts all foreigners from speaking altogether."],
        "correctAnswerIndex": 2,
        "explanation": "An OCI is a foreign national holding a foreign passport. Article 19 rights are EXCLUSIVELY granted to citizens (meaning full citizens holding Indian passports). OCI cardholders cannot constitutionally claim Article 19 protections."
    },
    {
        "id": "ch7-l3-q19",
        "question": "Under the provisions for acquiring citizenship by",
        "options": ["Registration requires an oath to the Constitution; Naturalization requires an oath to the ruling Government.","Registration requires renouncing previous citizenship immediately; Naturalization allows retaining it for 5 years.","There is no difference; both require identical oaths of allegiance to the Constitution of India.","Registration requires an oath; Naturalization does not require an oath but requires a financial bond."],
        "correctAnswerIndex": 2,
        "explanation": "Both Registration (Section 5(2)) and Naturalization (Section 6(2)) require the applicant to take an identical oath of allegiance:"
    },
    {
        "id": "ch7-l3-q20",
        "question": "The",
        "options": ["The Parliament, via an Article 368 Amendment.","The Central Government, via a notified executive order.","The Supreme Court, via judicial review of the treaty.","The United Nations High Commissioner for Refugees."],
        "correctAnswerIndex": 1,
        "explanation": "Section 7 of the Citizenship Act, 1955 states:"
    },
    {
        "id": "ch7-l3-q21",
        "question": "Article 6 deals with the rights of citizenship of certain persons who migrated to India from Pakistan. It bifurcates migrants into two groups based on a critical cut-off date to establish citizenship at commencement. What was the exact cut-off date and why was it chosen?",
        "options": ["August 15, 1947: The day of India","January 26, 1950: The commencement of the Constitution.","July 19, 1948: The date when the permit system for migration was introduced.","March 1, 1947: The commencement of serious partition riots."],
        "correctAnswerIndex": 2,
        "explanation": "The date of July 19, 1948, is the precise cut-off date used in Article 6 because it was the date on which an ordinance introducing a strict"
    },
    {
        "id": "ch7-l3-q22",
        "question": "Consider the constitutional anomaly surrounding the",
        "options": ["Both NRIs and OCI cardholders have the right to seek information.","NRIs, being Indian citizens, have the right; OCI cardholders, being foreign nationals, do NOT have the right.","Neither NRIs nor OCI cardholders have the right, as physical residence in India is required.","OCI cardholders have the right, but NRIs lose it if they reside abroad for over 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "The RTI Act explicitly provides that all"
    },
    {
        "id": "ch7-l3-q23",
        "question": "The Citizenship Act establishes harsh penalties for obtaining an OCI card by fraud. If the Central Government exercises its power to cancel an OCI registration on the grounds of fraud, does the affected person have a statutory right to be heard before the cancellation?",
        "options": ["No, the cancellation is absolute, immediate, and without appeal.","Yes, the Act explicitly limits cancellation only to cases where the person has been given a reasonable opportunity of being heard.","No, unless the Supreme Court explicitly orders a hearing via a writ of Mandamus.","Yes, but only if they are physically present in Delhi to defend themselves."],
        "correctAnswerIndex": 1,
        "explanation": "Section 7D of the Citizenship Act (which governs cancellation of OCI registration) has a crucial proviso:"
    },
    {
        "id": "ch7-l3-q24",
        "question": "Assertion (A): The principle of",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. D.P. Joshi v. State of Madhya Bharat (1955) established that while citizenship is single,"
    },
    {
        "id": "ch7-l3-q25",
        "question": "Examine the",
        "options": ["No, the child must go through the standard 12-year naturalization process once they turn 18.","Yes, the child can simply resume Indian citizenship by making a declaration to that effect within one year of attaining full age (18 years).","Yes, but only if the mother remained an Indian citizen.","No, the child","s action."],
        "correctAnswerIndex": 1,
        "explanation": "Section 8(2) provides a unique relief: any minor child of a person who renounces citizenship also ceases to be a citizen. However, that child may, within one year of attaining full age (18), make a declaration that they wish to resume Indian citizenship, and they shall thereupon again become a citizen."
    },
    {
        "id": "ch7-l3-q26",
        "question": "The power of",
        "options": ["Seven continuous years with zero exits from Indian territory.","Resident in India for twelve months immediately preceding the date of application, PLUS resident in India for six years in the aggregate in the eight years preceding the twelve months.","Physical presence for 182 days in each of the seven calendar years.","Seven years counting from the date they first held an employment visa."],
        "correctAnswerIndex": 1,
        "explanation": "The statutory calculation for"
    },
    {
        "id": "ch7-l3-q27",
        "question": "Consider Section 9 of the Citizenship Act (",
        "options": ["The Supreme Court via a writ of Habeas Corpus.","The Central Government, evaluating the intent and facts under the Citizenship Rules.","The High Court of the state where they previously resided.","The Foreign Consulate that issued the passport."],
        "correctAnswerIndex": 1,
        "explanation": "The determination of whether foreign citizenship was acquired"
    },
    {
        "id": "ch7-l3-q28",
        "question": "The Citizenship (Amendment) Act passed recently grants a pathway to citizenship for certain persecuted minorities from three neighboring countries. Aside from easing naturalization timelines, what fundamental constitutional immunity does it grant them immediately concerning their entry into India?",
        "options": ["Immunity from all criminal prosecutions pending against them in India.","Exemption from being treated or classified as","under the Passports Act, 1920, and the Foreigners Act, 1946.","Immunity from paying income tax for 5 years.","Automatic induction into the state legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "The core operative mechanism of the CAA was to exempt members of these six communities (who entered before Dec 31, 2014) from the definition of"
    },
    {
        "id": "ch7-l3-q29",
        "question": "Under the provisions of the Constitution, what is the precise legal distinction between",
        "options": ["Domicile implies a permanent legal connection and intention to stay permanently; Residence implies mere physical presence which can be temporary or permanent.","Domicile implies holding an Indian passport; Residence implies holding an OCI card.","Domicile relates strictly to voting rights; Residence relates to tax status.","There is no legal distinction; both terms are used interchangeably by the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "Residence is a physical fact indicating where a person lives, whereas Domicile is a legal concept combining physical residence AND an"
    },
    {
        "id": "ch7-l3-q30",
        "question": "The Constitution of India limits the enjoyment of certain vital offices strictly to",
        "options": ["The President of India (Article 58)","A Judge of the Supreme Court (Article 124)","A Minister in the Union Cabinet (Article 75)","The Attorney General for India (Article 76, which mandates qualifications of an SC Judge)"],
        "correctAnswerIndex": 2,
        "explanation": "Article 75 (Other provisions as to Ministers) does not explicitly state"
    }
];

export const CHAPTER_7_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
