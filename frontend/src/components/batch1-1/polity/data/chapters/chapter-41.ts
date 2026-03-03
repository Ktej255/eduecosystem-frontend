import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch41-l1-q1",
        "question": "Which Part and specific Articles of the Indian Constitution deal exclusively with the administration of the Union Territories?",
        "options": ["Part VII, Article 238","Part VIII, Articles 239 to 241","Part IX, Articles 243 to 243O","Part X, Article 244"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 239 to 241 in Part VIII of the Constitution deal with the Union Territories. Even though all the union territories belong to one category, there is no uniformity in their administrative system."
    },
    {
        "id": "ch41-l1-q2",
        "question": "Why are Union Territories often referred to as",
        "options": ["Because they are located geographically in the center of India.","Because they are under the direct administrative and executive control of the Central Government.","Because they share a single common capital at New Delhi.","Because their budget is generated entirely from central public sector units."],
        "correctAnswerIndex": 1,
        "explanation": "The union territories are those areas which are under the direct control and administration of the Central government. Hence, they are also known as"
    },
    {
        "id": "ch41-l1-q3",
        "question": "The formal constitutional concept of",
        "options": ["1st Constitutional Amendment Act (1951)","7th Constitutional Amendment Act (1956)","42nd Constitutional Amendment Act (1976)","69th Constitutional Amendment Act (1991)"],
        "correctAnswerIndex": 1,
        "explanation": "During the British Rule, certain areas were constituted as"
    },
    {
        "id": "ch41-l1-q4",
        "question": "Every Union Territory is administered fundamentally by the:",
        "options": ["Prime Minister of India","President of India acting through an administrator appointed by him","Union Home Minister","Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "Article 239: Every union territory is administered by the President acting to such extent as he thinks fit, through an administrator appointed by him."
    },
    {
        "id": "ch41-l1-q5",
        "question": "What is the primary constitutional difference between the",
        "options": ["The Administrator is elected, while the Governor is appointed.","The Governor is a constitutional head of the state, whereas the Administrator is an agent or delegate of the President, not a head of state.","The Administrator has a longer fixed tenure than a Governor.","The Governor handles defense, while the Administrator handles police."],
        "correctAnswerIndex": 1,
        "explanation": "An administrator of a union territory is an agent of the President and not head of state like a governor. He does not hold a constitutional post."
    },
    {
        "id": "ch41-l1-q6",
        "question": "The President can specify various designations for the administrator of a Union Territory. Which of the following is an officially used designation?",
        "options": ["Lieutenant Governor","Chief Commissioner","Administrator","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The President can specify the designation of an administrator; it may be Lieutenant Governor or Chief Commissioner or Administrator."
    },
    {
        "id": "ch41-l1-q7",
        "question": "At present, which of the following Union Territories are administratively headed by a person designated as a",
        "options": ["Only Delhi and Puducherry","Only Andaman and Nicobar Islands","Delhi, Puducherry, Andaman and Nicobar Islands, Jammu and Kashmir, and Ladakh","Lakshadweep and Chandigarh only"],
        "correctAnswerIndex": 2,
        "explanation": "At present, it is Lieutenant Governor in the case of Delhi, Puducherry, Andaman and Nicobar Islands, Jammu and Kashmir and Ladakh."
    },
    {
        "id": "ch41-l1-q8",
        "question": "Can the President appoint the Governor of a State as the administrator of an adjoining Union Territory?",
        "options": ["No, this violates the separation of state and central administration.","Yes, the President can appoint the Governor of a State as the administrator of an adjoining union territory.","Only if the Chief Minister of that state passes a resolution.","Only during a declared National Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239 allows the President to appoint the governor of a state as the administrator of an adjoining union territory."
    },
    {
        "id": "ch41-l1-q9",
        "question": "When a Governor of a State is appointed as the administrator of an adjoining Union Territory, how is he required to exercise his administrative functions regarding that UT?",
        "options": ["Strictly on the advice of his State Council of Ministers.","Independently of his State Council of Ministers.","In consultation with the Chief Justice of the High Court.","By referring all matters to the Union Home Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Where a governor is so appointed, he exercises his functions as such administrator independently of his council of ministers (of the state)."
    },
    {
        "id": "ch41-l1-q10",
        "question": "Which constitutional body holds the supreme power to create or establish a State-like Legislative Assembly and a Council of Ministers for a Union Territory?",
        "options": ["The President via an ordinance","The Supreme Court","The Parliament of India by enacting a law","The NITI Aayog"],
        "correctAnswerIndex": 2,
        "explanation": "Article 239A gives the Parliament power to create a legislature or council of ministers or both for certain Union Territories."
    },
    {
        "id": "ch41-l1-q11",
        "question": "Which of the following sets of Union Territories currently possess their own elected Legislative Assemblies?",
        "options": ["Delhi, Puducherry, and Jammu & Kashmir","Delhi and Chandigarh","Ladakh and Puducherry","Andaman & Nicobar Islands and Lakshadweep"],
        "correctAnswerIndex": 0,
        "explanation": "The Union Territories of Puducherry (in 1963), Delhi (in 1992) and Jammu & Kashmir (in 2019) are provided with a legislative assembly and a council of ministers."
    },
    {
        "id": "ch41-l1-q12",
        "question": "What is the extent of Parliament",
        "options": ["Parliament cannot legislate on State List subjects for UTs.","Parliament can legislate, but only during a national emergency.","Parliament can make laws on any subject of the three lists (including the State List) for the Union Territories.","It requires the prior consent of the Administrator."],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament can make laws on any subject of the three lists (including the State List) for the union territories. This power of Parliament also extends to Puducherry, Delhi and J&K despite them having their own local legislatures."
    },
    {
        "id": "ch41-l1-q13",
        "question": "For a Union Territory that possesses its own local legislature (like Puducherry or Delhi), what happens to the legislative power of the Parliament over the State List?",
        "options": ["It is completely suspended.","It remains completely intact and concurrent with the local legislature.","It is restricted only to financial matters.","It is transferred to the Lieutenant Governor."],
        "correctAnswerIndex": 1,
        "explanation": "The legislative power of Parliament for the union territories on subjects of the State List remain unaffected even after establishing a local legislature for them. It is an overriding and concurrent power."
    },
    {
        "id": "ch41-l1-q14",
        "question": "The 69th Constitutional Amendment Act of 1991 altered the administrative setup of Delhi. What new official designation was granted to Delhi by this amendment?",
        "options": ["Federal Territory of Delhi","National Capital Territory of Delhi","Capital State of India","Union Province of Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "The 69th Constitutional Amendment Act of 1991 provided a special status to the Union Territory of Delhi, and redesignated it the National Capital Territory of Delhi and designated the administrator of Delhi as the lieutenant (lt.) governor."
    },
    {
        "id": "ch41-l1-q15",
        "question": "The Legislative Assembly of Delhi can make laws on all subjects of the State List and Concurrent List, EXCEPT for three specific subjects. Which are they?",
        "options": ["Health, Education, and Transport","Public Order, Police, and Land","Agriculture, Irrigation, and Forests","Prisons, Local Government, and Markets"],
        "correctAnswerIndex": 1,
        "explanation": "The assembly can make laws on all the matters of the State List and the Concurrent List except the three matters of the State List, that is, public order, police and land."
    },
    {
        "id": "ch41-l1-q16",
        "question": "In standard States, the Chief Minister is appointed by the Governor. Who appoints the Chief Minister of Delhi?",
        "options": ["The Lieutenant Governor","The President of India","The Prime Minister","The Chief Justice of the Delhi High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The chief minister is appointed by the President (not by the lt. governor). The other ministers are appointed by the president on the advice of the chief minister."
    },
    {
        "id": "ch41-l1-q17",
        "question": "Unlike ministers in a full State who hold office during the pleasure of the Governor, the Ministers of the Delhi Government hold office during the pleasure of the:",
        "options": ["Lieutenant Governor","President of India","Chief Minister","Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The ministers hold office during the pleasure of the president. The council of ministers is collectively responsible to the assembly."
    },
    {
        "id": "ch41-l1-q18",
        "question": "To whom is the Council of Ministers in Delhi collectively responsible regarding their legislative and executive actions?",
        "options": ["The President of India","The Lieutenant Governor","The Legislative Assembly of Delhi","The Union Home Ministry"],
        "correctAnswerIndex": 2,
        "explanation": "Like any democratic setup, the council of ministers comprising the Chief Minister and other ministers is collectively responsible to the assembly (the elected representatives of Delhi)."
    },
    {
        "id": "ch41-l1-q19",
        "question": "In the case of a fundamental difference of opinion between the Lieutenant Governor (LG) of Delhi and his Ministers on any matter, what is the LG",
        "options": ["He can unilaterally dismiss the Council of Ministers.","He shall refer the matter to the President for a decision and act according to the decision given thereon.","He must refer the matter to the Supreme Court for arbitration.","He must yield to the elected Ministers"],
        "correctAnswerIndex": 1,
        "explanation": "Article 239AA(4): In the case of difference of opinion between the lt. governor and his ministers, the lt. governor is to refer the matter to the president for decision and act accordingly."
    },
    {
        "id": "ch41-l1-q20",
        "question": "Does the Constitution provide a mechanism equivalent to",
        "options": ["No, Article 356 does not apply to Union Territories.","Yes, under Article 239AB, the President can suspend the operations of Article 239AA (and related provisions) if the administration cannot be carried on in accordance with it.","The Parliament automatically assumes direct control without Presidential proclamation.","The Lieutenant Governor becomes the absolute dictator permanently."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239AB provides for failure of constitutional machinery in Delhi. The President can suspend the provisions of Article 239AA for such period as he thinks fit and make necessary incidental arrangements."
    },
    {
        "id": "ch41-l1-q21",
        "question": "The Lieutenant Governor of Delhi can promulgate ordinances during the recess of the Assembly. However, this power is subject to which significant restriction?",
        "options": ["He requires the prior permission/instructions of the President.","He requires the prior approval of the Chief Minister.","He must consult the Delhi High Court before promulgating.","He can only promulgate ordinances relating to financial matters."],
        "correctAnswerIndex": 0,
        "explanation": "The lt. governor is empowered to promulgate ordinances during recess of the assembly... But, an ordinance can be promulgated only with the prior permission of the president."
    },
    {
        "id": "ch41-l1-q22",
        "question": "The President possesses the unique power to make",
        "options": ["Delhi, Puducherry, and Chandigarh","Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli and Daman and Diu, and Ladakh","Only Jammu & Kashmir","All Union Territories without exception"],
        "correctAnswerIndex": 1,
        "explanation": "The President can make regulations for the peace, progress and good government of the Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli and Daman and Diu, and Ladakh."
    },
    {
        "id": "ch41-l1-q23",
        "question": "When the President makes a regulation for a Union Territory (like the Andaman & Nicobar Islands), what is the legal standing of this regulation compared to an Act passed by the Parliament?",
        "options": ["It is subordinate to an Act of Parliament.","It has the same force and effect as an Act of Parliament, and can even repeal or amend any act of Parliament applicable to that territory.","It only functions as an executive order and cannot alter laws.","It must be ratified by the Parliament within 6 months to remain valid."],
        "correctAnswerIndex": 1,
        "explanation": "A regulation made by the President has the same force and effect as an act of Parliament and can also repeal or amend any act of Parliament in relation to these union territories."
    },
    {
        "id": "ch41-l1-q24",
        "question": "In the case of Puducherry, the President can also make regulations, but under what specific situational condition?",
        "options": ["At any time, even if the Assembly is functional.","Only when the assembly is suspended or dissolved.","Only during a National Emergency.","Never, Puducherry is exempt from Presidential regulations."],
        "correctAnswerIndex": 1,
        "explanation": "In the case of Puducherry also, the President can legislate by making regulations but only when the assembly is suspended or dissolved."
    },
    {
        "id": "ch41-l1-q25",
        "question": "Regarding the judicial administration of Union Territories, what options does the Constitution grant to the Parliament?",
        "options": ["Parliament can establish a High Court for a Union Territory or put it under the jurisdiction of a High Court of an adjacent state.","Parliament must establish a separate High Court for every UT indiscriminately.","All UTs must inherently fall under the direct, original jurisdiction of the Supreme Court only.","The Administrator acts as the functioning High Court for the UT."],
        "correctAnswerIndex": 0,
        "explanation": "Article 241: The Parliament can establish a high court for a union territory or put it under the jurisdiction of the high court of adjacent state."
    },
    {
        "id": "ch41-l1-q26",
        "question": "Out of all the Union Territories, which one is unique for having had its own completely separate High Court since 1966?",
        "options": ["Jammu & Kashmir","Delhi","Puducherry","Chandigarh"],
        "correctAnswerIndex": 1,
        "explanation": "Delhi is the only union territory that has a high court of its own (since 1966). Note: J&K has a High Court, but it is currently a common high court for the UTs of J&K and Ladakh."
    },
    {
        "id": "ch41-l1-q27",
        "question": "The Jammu & Kashmir Reorganisation Act of 2019 drastically altered the region",
        "options": ["It created two UTs: J&K (without a legislature) and Ladakh (with a legislature).","It created two UTs: J&K (with a legislature) and Ladakh (without a legislature).","It merged Ladakh with Himachal Pradesh and made J&K a standalone UT.","It divided the state into three separate Union Territories."],
        "correctAnswerIndex": 1,
        "explanation": "The Jammu and Kashmir Reorganisation Act, 2019, bifurcated the erstwhile State of Jammu and Kashmir into two separate Union territories, namely, the Union territory of Jammu and Kashmir (with a legislature) and the Union territory of Ladakh (without a legislature)."
    },
    {
        "id": "ch41-l1-q28",
        "question": "In an effort to streamline administration and reduce duplication of efforts, the Union Territories of Dadra and Nagar Haveli and Daman and Diu were merged into a single UT in which year?",
        "options": ["2014","2019","2020","2022"],
        "correctAnswerIndex": 2,
        "explanation": "The Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019, merged the two UTs into one. The merger came into effect firmly in 2020."
    },
    {
        "id": "ch41-l1-q29",
        "question": "At the Central Government level, which Ministry officially acts as the",
        "options": ["Ministry of Law and Justice","Ministry of Home Affairs","Ministry of Finance","Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Home Affairs at the Centre is the nodal ministry for all matters of legislation, finance and budget, services and appointment of Lt. Governors and Administrators in the Union Territories."
    },
    {
        "id": "ch41-l1-q30",
        "question": "For Union Territories without a legislature (like Andaman & Nicobar, Lakshadweep, Chandigarh, etc.), how is public representation structurally ensured at the central policy level?",
        "options": ["Through mandatory referendums held every 2 years.","Through the constitution of the Home Minister","s Advisory Committees (AACs).","By directly making all their municipal councillors Members of Parliament.","They have no representation whatsoever."],
        "correctAnswerIndex": 1,
        "explanation": "For the UTs without legislature, the Home Minister"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch41-l2-q1",
        "question": "While a State Governor holds an independent constitutional office, the Administrator of a Union Territory is strictly a",
        "options": ["The Administrator can be abruptly dismissed without any formal impeachment procedure.","The Administrator","The Administrator is fundamentally more powerful than a Governor due to direct Presidential backing.","Both Administrator and Governor share the exact same constitutional immunity under Article 361."],
        "correctAnswerIndex": 1,
        "explanation": "As an agent of the President (and not a constitutional head of state like a Governor), the actions of the administrator are essentially the actions of the President."
    },
    {
        "id": "ch41-l2-q2",
        "question": "When both the Parliament and the Legislative Assembly of Delhi enact a law on a subject listed in the Concurrent List, what is the constitutional mechanism for resolving any resulting conflict?",
        "options": ["The law made by the Delhi Assembly automatically prevails as it is localized.","The law made by Parliament rigidly prevails, regardless of when it was enacted, overriding the Delhi Assembly","The matter is immediately referred to the Supreme Court","The Lieutenant Governor unilaterally decides which law to implement."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239AA explicitly states that the laws of Parliament prevail over those made by the Assembly. If there is a repugnancy, the law of Parliament prevails."
    },
    {
        "id": "ch41-l2-q3",
        "question": "In the landmark",
        "options": ["Services fall entirely under the exclusive jurisdiction of the Lieutenant Governor.","Services fall within the legislative and executive domain of the elected Government of Delhi (excluding Public Order, Police, and Land).","Services are jointly managed by the Union Home Ministry and the UPSC.","Services in Delhi are permanently frozen by the Central Administrative Tribunal."],
        "correctAnswerIndex": 1,
        "explanation": "The SC ruled that the elected government of Delhi has legislative and executive control over administrative services, except on matters relating to public order, police and land. (Note: This was subsequently modified by an Ordinance/Act)."
    },
    {
        "id": "ch41-l2-q4",
        "question": "To counter the 2023 Supreme Court ruling, the Parliament passed the Government of National Capital Territory of Delhi (Amendment) Act, 2023. This Act established a",
        "options": ["The Lieutenant Governor of Delhi","The Chief Minister of Delhi","The Chief Secretary of Delhi","The Union Home Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The NCCSA consists of the Chief Minister (as Chairperson), the Chief Secretary, and the Principal Home Secretary of Delhi. It makes recommendations to the LG regarding transfers and postings."
    },
    {
        "id": "ch41-l2-q5",
        "question": "In Puducherry, if a sharp difference of opinion arises between the Lieutenant Governor and the Council of Ministers, the matter is referred to the President. However, if the matter is deemed",
        "options": ["He must wait passively for the President","He is empowered to take immediate action or give such directions in the matter as he deems necessary.","He can dissolve the Council of Ministers instantly.","He must forcibly obtain the Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Government of Union Territories Act, 1963 (applying to Puducherry), if the matter is urgent, the Administrator is competent to take such action as he deems necessary pending the President"
    },
    {
        "id": "ch41-l2-q6",
        "question": "For Union Territories operating without a Legislative Assembly,",
        "options": ["The Lieutenant Governor of the respective UT","The Union Home Minister","The Prime Minister of India","The Cabinet Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Home Minister"
    },
    {
        "id": "ch41-l2-q7",
        "question": "The President possesses a staggering power to make regulations that can formally overrule or repeal a legitimate Act of Parliament. This extraordinary power is specifically applicable to which set of Union Territories?",
        "options": ["None; the Parliament is constitutionally supreme in all territories.","Andaman & Nicobar Islands, Lakshadweep, Dadra & Nagar Haveli and Daman & Diu, and Ladakh.","Delhi and Puducherry exclusively.","Jammu & Kashmir only."],
        "correctAnswerIndex": 1,
        "explanation": "Article 240 empowers the President to make regulations for certain UTs. A regulation so made has the same force as an Act of Parliament and can repeal or amend any Act of Parliament applicable to that territory."
    },
    {
        "id": "ch41-l2-q8",
        "question": "Under the provisions of Article 239AA governing Delhi, if the Lieutenant Governor wishes to refer a disputed matter to the President, can he forcefully halt the implementation of the Chief Minister",
        "options": ["No, he cannot stay the elected government","Yes, he is explicitly empowered to direct that the decision be suspended pending the President","Only if the Delhi High Court grants a temporary injunction.","Only on financial matters exceeding Rs. 100 Crores."],
        "correctAnswerIndex": 1,
        "explanation": "Under the Transaction of Business Rules and related statutes, where a matter is referred to the Central Government / President, the LG can direct that action be suspended pending the decision of the President."
    },
    {
        "id": "ch41-l2-q9",
        "question": "Unlike separate States which draw their consolidated funds directly from the Constitution, which specific legal instrument provides for the creation of the",
        "options": ["Article 266 of the Constitution itself","The Government of Union Territories Act, 1963","The recommendations of the Finance Commission","A specific ordinance by the Reserve Bank of India"],
        "correctAnswerIndex": 1,
        "explanation": "For UTs with a legislature, the Consolidated Fund is created and governed by the provisions of the Government of Union Territories Act, 1963 (and similar specific acts like the GNCTD Act for Delhi)."
    },
    {
        "id": "ch41-l2-q10",
        "question": "Following the abrogation of Article 370, the vast Union Territory of Ladakh was uniquely structured for local governance. It is currently administered through:",
        "options": ["A fully functional Legislative Assembly.","A Lieutenant Governor and two incredibly powerful Autonomous Hill Development Councils (Leh and Kargil).","The Governor of neighboring Jammu & Kashmir.","Direct edicts from the Ministry of Tribal Affairs."],
        "correctAnswerIndex": 1,
        "explanation": "Ladakh operates without a legislative assembly. However, it possesses two strong Autonomous Hill Development Councils (LAHDC Leh and LAHDC Kargil) which manage local developmental subjects under the LG"
    },
    {
        "id": "ch41-l2-q11",
        "question": "Is it constitutionally permissible for the President of India to appoint a person who is currently serving as an elected Minister in a State Government to simultaneously act as the Administrator of an adjoining Union Territory?",
        "options": ["Yes, provided the State Legislature passes a consenting resolution.","No, this would grossly violate the","doctrine and separation of powers; an Administrator must be independent.","Yes, there is no explicit constitutional bar.","Only if the Union Territory is strictly under martial law."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239 says the President may appoint the Governor of a state as the administrator. It does not allow a serving political"
    },
    {
        "id": "ch41-l2-q12",
        "question": "In several landmark constitutional cases regarding the President",
        "options": ["A purely executive power meant only for drafting administrative guidelines.","A plenary power of legislation, as expansive and absolute as the legislative power of Parliament itself within that territory.","Heavily subordinated to any laws passed by neighboring state legislatures.","Strictly limited to subjects concerning national internal security and defense."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has clarified that the President"
    },
    {
        "id": "ch41-l2-q13",
        "question": "Historically, the vibrant city of Chandigarh was carved out and designated as a Union Territory in 1966 primarily to serve what crucial strategic/political purpose?",
        "options": ["To function as a critical defense outpost near Pakistan.","To serve peacefully as the common capital for both the newly formed states of Punjab and Haryana, averting a bitter territorial dispute.","To independently protect its uniquely massive tribal population.","To preserve the French colonial architecture within the city."],
        "correctAnswerIndex": 1,
        "explanation": "Following the Punjab Reorganisation Act of 1966, Chandigarh was made a Union Territory to act as the shared capital of both Punjab and Haryana, resolving the contentious issue of which state would claim the developed capital city."
    },
    {
        "id": "ch41-l2-q14",
        "question": "Which specific legal framework formally gave birth to the Legislative Assembly and the Council of Ministers for the Union Territory of Puducherry?",
        "options": ["The original unamended text of the Constitution in 1950.","An Act of Parliament specifically known as the Government of Union Territories Act, 1963.","The 14th Constitutional Amendment alone.","The historic","signed desperately between India and France in 1954."],
        "correctAnswerIndex": 1,
        "explanation": "While the 14th Amendment created Article 239A giving Parliament the enabling power, it was the Government of Union Territories Act, 1963 enacted by Parliament that actually established the legislature for Puducherry."
    },
    {
        "id": "ch41-l2-q15",
        "question": "The Lieutenant Governor of Delhi can promulgate powerful ordinances when the Assembly is not in session. However, to remain valid, what is the fate of this ordinance once the Assembly reconvenes?",
        "options": ["It must automatically be laid before the Assembly and will cease to operate at the expiration of six weeks from the reassembly.","It permanently becomes a binding regulation without any Assembly overview.","It must be immediately sent to the Supreme Court for judicial review.","It requires a mandatory public referendum within 90 days."],
        "correctAnswerIndex": 0,
        "explanation": "Article 239B states that an ordinance promulgated by the administrator must be laid before the legislature of the UT and ceases to operate at the expiration of six weeks from the reassembly of the legislature."
    },
    {
        "id": "ch41-l2-q16",
        "question": "Assertion (A): The Parliament is constitutionally empowered to abolish the High Court of a Union Territory.\\nReason (R): Article 241 grants Parliament the supreme power to constitute, or by implication, dissolve High Courts operating within UTs.\\nSelect the most analytically rigorous answer:",
        "options": ["Both A and R are undeniably true, and R provides the exact structural explanation for A.","Both A and R are true, but R fails to explain A.","A is undeniably true, but R is functionally false.","Both A and R are strictly false; High Courts cannot be abolished."],
        "correctAnswerIndex": 0,
        "explanation": "Article 241 empowers Parliament by law to constitute a High Court for a Union Territory, or to declare any court in any such territory to be a High Court. Consequently, Parliament retains the legislative power to reorganize or abolish it."
    },
    {
        "id": "ch41-l2-q17",
        "question": "When comparing the models of Delhi and Puducherry, why is the Lieutenant Governor of Delhi generally considered to possess substantially more discretionary friction and overriding powers than the LG of Puducherry?",
        "options": ["Delhi","Article 239AA specifically entrenches the","(Police, Public Order, Land) in the Constitution for Delhi, whereas Puducherry is governed by a standard Parliamentary Act lacking such rigid constitutional carve-outs.","The LG of Puducherry is structurally subordinate to the Chief Minister.","Puducherry enjoys full Statehood."],
        "correctAnswerIndex": 1,
        "explanation": "The constitutional architecture of Delhi (Article 239AA) explicitly removes Police, Public Order, and Land from the elected government"
    },
    {
        "id": "ch41-l2-q18",
        "question": "Who is constitutionally empowered to frame the complex",
        "options": ["The Chief Minister of Delhi.","The President of India.","The Lieutenant Governor unilaterally.","The Speaker of the Delhi Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239AA states that the President shall make rules for the allocation of business to the ministers, and for the more convenient transaction of business."
    },
    {
        "id": "ch41-l2-q19",
        "question": "If the Legislative Assembly of Puducherry is dramatically dissolved mid-term due to extreme political instability, who immediately assumes the mantle of making crucial laws for the UT?",
        "options": ["The Lieutenant Governor acts as a dictator.","The President of India via the promulgation of powerful regulations.","The Parliament via a special session.","The Chief Minister acting simultaneously as an unaccountable caretaker."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 240, the President can make regulations for the peace, progress and good government of Puducherry, but only when the assembly is suspended or dissolved."
    },
    {
        "id": "ch41-l2-q20",
        "question": "Can a Union Territory, possessing limited powers, actively sit as a full member in the strategically vital",
        "options": ["Yes, Union Territories are formal members of the Zonal Councils.","No, UTs are strictly barred from participating in inter-state forums.","Only UTs with a Legislative Assembly can participate.","Yes, but only as mute observers without voting rights."],
        "correctAnswerIndex": 0,
        "explanation": "The Zonal Councils (created under the States Reorganisation Act 1956) consist of the Chief Ministers of States AND the Administrators of the Union Territories located in the respective zone."
    },
    {
        "id": "ch41-l2-q21",
        "question": "Prior to the monumental 7th Amendment (1956) which crystallized the concept of Union Territories, both Delhi and Himachal Pradesh belonged to which distinct category in the original 1950 Constitution?",
        "options": ["Part A States.","Part B States.","Part C States (Chief Commissioners","Part D Territories."],
        "correctAnswerIndex": 2,
        "explanation": "In the 1950 Constitution, areas like Delhi, Himachal Pradesh, Ajmer, Bhopal, etc., were categorized as Part C states, administered centrally by Chief Commissioners."
    },
    {
        "id": "ch41-l2-q22",
        "question": "Article 239AA(4) mandates the Council of Ministers to",
        "options": ["The LG is required by law to fiercely act in his own exclusive discretion.","The matter concerns the annual financial budget alone.","The matter involves the appointment of ordinary clerks.","The matter touches upon public health infrastructure."],
        "correctAnswerIndex": 0,
        "explanation": "The Council of Ministers aids and advises the LG"
    },
    {
        "id": "ch41-l2-q23",
        "question": "The deeply complex",
        "options": ["The Sarkaria Commission.","The Balakrishnan Committee.","The Punchhi Commission.","The Fazl Ali Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The genesis of Article 239AA and the special setup for Delhi lies heavily in the detailed recommendations of the Balakrishnan Committee (Committee on Reorganisation of Delhi Set-up, 1989)."
    },
    {
        "id": "ch41-l2-q24",
        "question": "During a Council of Ministers meeting in Delhi, if the Chief Minister is unfortunately absent due to severe illness, who is constitutionally designated to preside tightly over the cabinet meeting?",
        "options": ["The Lieutenant Governor unilaterally.","A specific minister explicitly nominated by the Chief Minister.","The Chief Secretary taking administrative control.","The fiercely independent Speaker of the Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "The Chief Minister presides over the meetings of the council of ministers. In his absence, a minister nominated by the CM presides."
    },
    {
        "id": "ch41-l2-q25",
        "question": "If the Council of Ministers in Delhi sends a binding resolution to the Lieutenant Governor regarding a newly proposed aggressive land acquisition policy within the city, is the LG constitutionally bound strictly to follow their advice?",
        "options": ["Yes, immediately.","No, because","is explicitly an excluded, reserved subject under Article 239AA, leaving the LG to act independently.","Yes, provided the Mayor signs the resolution.","Only if the land value is beneath ten million rupees."],
        "correctAnswerIndex": 1,
        "explanation": "The elected government has no executive or legislative jurisdiction over Public Order, Police, and Land. Therefore, the LG is not bound by their advice on these specific subjects."
    },
    {
        "id": "ch41-l2-q26",
        "question": "Citizens residing in the pristine, isolated Union Territory of Lakshadweep must travel far for high-level justice. Which High Court exercises vast territorial jurisdiction over Lakshadweep?",
        "options": ["Madras High Court.","Kerala High Court.","Bombay High Court.","Karnataka High Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Kerala High Court at Ernakulam exercises jurisdiction over the Union Territory of Lakshadweep."
    },
    {
        "id": "ch41-l2-q27",
        "question": "The massive, strategically vital Union Territory of Andaman & Nicobar Islands falls under the immense judicial umbrella of which remote High Court?",
        "options": ["Madras High Court.","Calcutta High Court.","Odisha High Court.","Delhi High Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Calcutta High Court possesses circuit bench functioning at Port Blair, exercising rigid jurisdiction over the Andaman & Nicobar Islands."
    },
    {
        "id": "ch41-l2-q28",
        "question": "The unique Union Territory of Puducherry constitutes an extraordinary geographical anomaly, comprising four widely dispersed erstwhile French establishments. Which of these enclaves is nestled tightly within the borders of Kerala?",
        "options": ["Karaikal.","Yanam.","Mahe.","Puducherry (City)."],
        "correctAnswerIndex": 2,
        "explanation": "Mahe is a small enclave situated geographically on the Malabar Coast, entirely surrounded by the State of Kerala."
    },
    {
        "id": "ch41-l2-q29",
        "question": "Continuing the geographical anomaly of Puducherry, which specific French establishment is located defensively on the expansive eastern coast within the State of Andhra Pradesh?",
        "options": ["Karaikal.","Yanam.","Mahe.","Auroville."],
        "correctAnswerIndex": 1,
        "explanation": "Yanam is a critically located enclave situated geographically amidst the Godavari Delta, entirely within the State of Andhra Pradesh."
    },
    {
        "id": "ch41-l2-q30",
        "question": "To actively prevent an oversized, unwieldy political machinery in the capital, the Constitution severely caps the maximum strength of the Council of Ministers in Delhi (including the CM) at what precise number?",
        "options": ["15% of the total strength of the Assembly.","Exactly 10% of the total strength of the Assembly (constituting precisely 7 members).","A fixed number of 12 cabinet members.","There is absolutely no constitutional limit."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the standard 15% limit for States (under the 91st Amendment), Article 239AA specifically limits the Delhi cabinet to 10% of the assembly"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch41-l3-q1",
        "question": "In the evolving 2024-2025 legal framework surrounding Delhi",
        "options": ["With the Chief Minister of Delhi, as the elected head of the Authority.","With the Lieutenant Governor, whose decision is explicitly declared final in the case of a difference of opinion.","With the Union Home Minister via a mandatory reference.","With the Central Administrative Tribunal (CAT)."],
        "correctAnswerIndex": 1,
        "explanation": "The GNCTD (Amendment) Act, 2023 explicitly states that in case of a difference of opinion between the LG and the NCCSA regarding"
    },
    {
        "id": "ch41-l3-q2",
        "question": "The monumental Supreme Court judgment in the GNCTD case (2023) fundamentally held that the",
        "options": ["Health, Education, and Transport.","Public Order, Police, and Land.","Finance, Urban Planning, and Environment.","Prisons, State Civil Services, and Municipal Corporations."],
        "correctAnswerIndex": 1,
        "explanation": "The SC affirmed that the executive power of the GNCTD extends to all matters in the State and Concurrent Lists EXCEPT the three rigidly reserved subjects: Public Order, Police, and Land (Entries 1, 2, and 18 of the State List)."
    },
    {
        "id": "ch41-l3-q3",
        "question": "Under the complex",
        "options": ["The Delhi Assembly law, because Parliament","The law that receives the President","The Parliamentary law prevails overwhelmingly and unconditionally (as per Article 239AA).","The Supreme Court must sever the contradictory clauses."],
        "correctAnswerIndex": 2,
        "explanation": "Article 239AA(3)(c) dictates that if any provision of a law made by the Legislative Assembly with respect to any matter is repugnant to a law made by Parliament... the law made by Parliament shall prevail."
    },
    {
        "id": "ch41-l3-q4",
        "question": "The Lieutenant Governor of Delhi possesses the discretionary power to",
        "options": ["No, reservation of bills is entirely at his absolute political discretion.","Yes, he is explicitly mandated to reserve any bill which would, in his opinion, so derogate from the powers of the High Court as to endanger its constitutional position.","Yes, any bill concerning the annual municipal budget.","Yes, any bill relating indirectly to the official designation of the Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Similar to State Governors under Article 200, the Administrator of a UT must legally reserve any bill that threatens to derogate the established powers and jurisdiction of the relevant High Court."
    },
    {
        "id": "ch41-l3-q5",
        "question": "Article 239AB introduces a mechanism mimicking Article 356 (President",
        "options": ["The Chief Minister, admitting a loss of majority.","The Lieutenant Governor.","The Chief Justice of the Delhi High Court.","The Speaker of the Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 239AB explicitly states that if the President, on receipt of a report from the Lieutenant Governor or otherwise, is satisfied that a situation has arisen where the administration cannot be carried on, he may suspend Article 239AA provisions."
    },
    {
        "id": "ch41-l3-q6",
        "question": "Federal representation is a hallmark of the Rajya Sabha. Does the Parliament possess the constitutional authority to create a",
        "options": ["Yes, Parliament can legally allocate a seat even if no Assembly exists to form an electoral college.","No, only UTs possessing a functional Legislative Assembly can constitutionally have representation in the Rajya Sabha.","Only if the President specially nominates them outside the 12 expert quota.","Only for Delhi and Puducherry historically."],
        "correctAnswerIndex": 0,
        "explanation": "Currently, only UTs with legislatures (Delhi, Puducherry, J&K) have representation because the electoral college comprises MLAs. However, Parliament *can* bypass this and create representation if it wishes, though practically it hasn"
    },
    {
        "id": "ch41-l3-q7",
        "question": "Following the abrogation of Article 370, the immensely modified J&K Reorganisation Act (specifically tracking 2023-24 amendments) grants the Lieutenant Governor the special power to strategically",
        "options": ["Exactly 2 members from the exiled Kashmiri Pandit community.","Up to 2 Kashmiri Migrants (at least one being a woman) AND 1 Displaced Person from Pakistan-occupied Jammu & Kashmir (PoJK).","5 members primarily drawn from the nomadic Gujjar and Bakarwal tribes.","Only 1 representative explicitly from the Indian Armed Forces veterans."],
        "correctAnswerIndex": 1,
        "explanation": "The amended J&K Reorganisation Act allows the LG to nominate two members from the Kashmiri migrant community (one must be a woman) and one member representing the displaced persons from PoJK, to ensure their political voice."
    },
    {
        "id": "ch41-l3-q8",
        "question": "Who holds the ultimate constitutional and statutory authority to definitively decide the",
        "options": ["The Lieutenant Governor unilaterally.","The Parliament of India (effectuated through an independent Delimitation Commission).","The President of India acting solely on the Union Cabinet","The Election Commission of India independently."],
        "correctAnswerIndex": 1,
        "explanation": "The number of seats and the delimitation of constituencies in the J&K Assembly were rigidly determined by a Delimitation Commission set up by the Central Government under the vast powers of the J&K Reorganisation Act passed by Parliament."
    },
    {
        "id": "ch41-l3-q9",
        "question": "In the unique political ecosystem of Puducherry, the Central Government holds the powerful prerogative to drastically alter the legislative balance by officially nominating how many members to the Legislative Assembly?",
        "options": ["2","3","5","0 (Nominations are strictly banned)"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Government of Union Territories Act, 1963, the Central Government is legally empowered to nominate 3 members to the Legislative Assembly of Puducherry."
    },
    {
        "id": "ch41-l3-q10",
        "question": "In heavily contested constitutional litigation (culminating in the K. Lakshminarayanan Case), the Supreme Court ruled definitively on whether the 3 nominated members in the Puducherry Assembly possess the",
        "options": ["No, nominated members emphatically cannot vote in any capacity whatsoever.","Yes, nominated members possess absolute, full voting rights inside the Assembly, just like directly elected members.","They can vote only during the election of the Speaker.","They can vote on all matters EXCEPT passing the annual budget."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court clarified that the UT Act of 1963 does not differentiate between elected and nominal members regarding voting within the house. Thus, the 3 nominated members in Puducherry enjoy full voting rights (unlike nominated members in the Rajya Sabha regarding Presidential elections)."
    },
    {
        "id": "ch41-l3-q11",
        "question": "The Lieutenant Governor of Delhi possesses",
        "options": ["He must secure a prior validating signature from the Chief Minister.","He must wait until the Assembly is officially dissolved permanently.","He absolutely cannot promulgate any ordinance without obtaining the specific","or permission from the President of India.","He can only promulgate ordinances explicitly drafted by the Union Home Ministry."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike a State Governor who generally acts on the CM"
    },
    {
        "id": "ch41-l3-q12",
        "question": "Regarding the complex fiscal machinery of the nation, the colossal",
        "options": ["Delhi and Puducherry exclusively.","Strictly those Union Territories that operate WITHOUT their own separate Legislative Assemblies (e.g., Chandigarh, Lakshadweep).","Only the strategically sensitive J&K and Ladakh.","All Union Territories universally."],
        "correctAnswerIndex": 1,
        "explanation": "UTs with legislatures (Delhi, Puducherry, J&K) have their own separate Consolidated Funds. The receipts and expenditures of UTs without legislatures form a direct, inseparable part of the Consolidated Fund of India."
    },
    {
        "id": "ch41-l3-q13",
        "question": "A deeply technical but crucial legal distinction exists regarding official terminology. Under the definitions explicitly provided in the",
        "options": ["Yes, they are legally synonymous for all administrative purposes.","No, the legal definition of","strictly and purposefully excludes the Administrator or Lieutenant Governor of a Union Territory.","Yes, but only in the specific territories of Delhi and Puducherry.","Yes, but only when assenting to a legally binding bill."],
        "correctAnswerIndex": 1,
        "explanation": "The General Clauses Act defines"
    },
    {
        "id": "ch41-l3-q14",
        "question": "If a Union Territory completely lacks a Legislative Assembly (like the Andaman & Nicobar Islands), who holds the immense constitutional authority to formally approve its crucial",
        "options": ["The appointed Administrator unilaterally enacts it.","The President of India, as it is formally presented before the Parliament for rigorous voting and approval.","The Home Minister acts single-handedly via executive decree.","The Zonal Council of the relevant region."],
        "correctAnswerIndex": 1,
        "explanation": "For UTs without legislatures, their budget is a direct part of the Union Budget. The President causes it to be laid before the Parliament, and it requires full Parliamentary approval to authorize the massive expenditure."
    },
    {
        "id": "ch41-l3-q15",
        "question": "The administrative architecture of Puducherry is fundamentally governed by the powers derived from which specific, enabling constitutional Article?",
        "options": ["Article 239AA","Article 239A","Article 239","Article 240"],
        "correctAnswerIndex": 1,
        "explanation": "It was Article 239A (introduced by the 14th Amendment in 1962) that gave the Parliament the enabling power to create a legislature for certain UTs, leading directly to the GNCTD Act for Puducherry."
    },
    {
        "id": "ch41-l3-q16",
        "question": "Under Article 240, the President has the draconian power to make",
        "options": ["Yes, the President inherently retains overarching regulatory power over all UTs at all times.","No, the Constitution strictly limits this specific President","Only concerning extreme matters of severe national security.","Yes, provided the relevant High Court has been duly consulted."],
        "correctAnswerIndex": 1,
        "explanation": "Article 240 explicitly states that in the case of Puducherry, the President can only make regulations"
    },
    {
        "id": "ch41-l3-q17",
        "question": "The",
        "options": ["The Governor of the expansive State of Punjab holds it as an additional charge.","The Governor of the adjacent State of Haryana.","The Lieutenant Governor of Delhi manages it concurrently.","A specially appointed independent Chief Commissioner from the IAS."],
        "correctAnswerIndex": 0,
        "explanation": "Since 1984, to maintain delicate political parity, the Governor of Punjab has concurrently served as the Administrator of the Union Territory of Chandigarh."
    },
    {
        "id": "ch41-l3-q18",
        "question": "Following the complex post-370 restructuring, what is the exact, current judicial reality concerning the highest appellate court for the vast regions of Jammu & Kashmir and Ladakh?",
        "options": ["They strictly possess two fundamentally separate High Courts.","They fiercely share a","officially designated as the High Court of Jammu & Kashmir and Ladakh.","They are both completely subjugated strictly under the Delhi High Court.","They currently operate under an interim military tribunal."],
        "correctAnswerIndex": 1,
        "explanation": "The J&K Reorganisation Act, 2019 clearly stipulated that the pre-existing High Court of Jammu and Kashmir shall be the common High Court for the Union territory of Jammu and Kashmir and the Union territory of Ladakh."
    },
    {
        "id": "ch41-l3-q19",
        "question": "If a rapidly growing Union Territory urgently requires independent, localized superior judicial oversight, who holds the exclusive constitutional power to formally",
        "options": ["The President via an executive order.","The Parliament, operating strictly by enacting a formal law.","The Chief Justice of India issuing a binding administrative mandate.","The Governor of the neighboring State acting on Cabinet advice."],
        "correctAnswerIndex": 1,
        "explanation": "Article 230 explicitly states that Parliament may by law extend the jurisdiction of a High Court to, or exclude the jurisdiction of a High Court from, any Union territory."
    },
    {
        "id": "ch41-l3-q20",
        "question": "Under the provisions of Article 239AA, the Lieutenant Governor of Delhi can refer a",
        "options": ["The SC ruled the LG can rightfully refer","trivial administrative matter without restriction.","While the text says",", the Supreme Court heavily stressed that it shouldn","every","The LG is utterly barred from referring any matter unless a brutal riot occurs.","The LG must first hold a city-wide binding referendum before referring to the President."],
        "correctAnswerIndex": 1,
        "explanation": "In standard GNCTD judgments, the Supreme Court has clarified that the phrase"
    },
    {
        "id": "ch41-l3-q21",
        "question": "Given its strategic proximity to hostile borders and China, which Central Government ministry officially acts as the primary",
        "options": ["Ministry of Development of North Eastern Region (DoNER).","Ministry of Home Affairs (MHA).","Ministry of Tribal Affairs.","Ministry of External Affairs."],
        "correctAnswerIndex": 1,
        "explanation": "Despite its tribal demographics and strategic location, all Union Territories (including the newly formed Ladakh) fall under the direct, nodal administrative umbrella of the Ministry of Home Affairs."
    },
    {
        "id": "ch41-l3-q22",
        "question": "In the complex, fractured governance of Delhi, the elected government completely lacks executive power over",
        "options": ["Yes,","inherently and legally constitute a core sub-set of",".","No,","cleanly constitutes a wholly separate legislative entry (Entry 4 of the State List) and thus rightly falls firmly under the jurisdiction of the elected Delhi Government.","Yes, the Tihar jail complex is directly managed by the Union Cabinet.","No, Prisons are entirely privatized in the NCT setting."],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch41-l3-q23",
        "question": "For a Union Territory possessing a vibrant, newly established Legislative Assembly, who holds the constitutional prerogative to debate and formally definitively decide the",
        "options": ["The President of India via forced regulation.","The Legislative Assembly of the UT itself, by passing a binding local Act.","The Parliament of India mandating absolute uniformity.","The Ministry of Home Affairs unequivocally declaring Hindi."],
        "correctAnswerIndex": 1,
        "explanation": "Similar to States acting under Article 345, UTs with legislatures (like Delhi or Puducherry) use their democratic authority to officially adopt the languages extensively used in their territory for official purposes via their own legislative acts."
    },
    {
        "id": "ch41-l3-q24",
        "question": "In the fascinating constitutional history of Indian statehood, which specific territory uniquely held the unprecedented, fleeting status of an",
        "options": ["Goa.","Sikkim.","Mizoram.","Manipur."],
        "correctAnswerIndex": 1,
        "explanation": "Sikkim enjoyed a unique status as a"
    },
    {
        "id": "ch41-l3-q25",
        "question": "Under the J&K Reorganisation Act, the Lieutenant Governor of J&K has been aggressively granted a vague but immense",
        "options": ["It solely concerns external border defense.","It firmly encompasses the entire","apparatus, guaranteeing the LG overriding executive command over law enforcement.","It concerns cybersecurity networks only.","It applies exclusively to protecting VIP politicians."],
        "correctAnswerIndex": 1,
        "explanation": "In J&K, unlike standard UTs but similar to Delhi,"
    },
    {
        "id": "ch41-l3-q26",
        "question": "To combat immediate, unforeseen financial crises (like a massive cyclone hitting the coast), where is the",
        "options": ["Tightly under the absolute control of the Supreme Court.","Directly at the disposal of the Administrator (Lieutenant Governor) to desperately meet unforeseen expenditures pending legislative authorization.","Firmly controlled by the democratically elected Chief Minister.","Exclusively locked within the massive Contingency Fund of India."],
        "correctAnswerIndex": 1,
        "explanation": "Under the UT Act, the Contingency Fund of the UT is placed at the disposal of the Administrator to enable advances to be made for unforeseen expenditure, pending its eventual authorization by the Legislative Assembly."
    },
    {
        "id": "ch41-l3-q27",
        "question": "According to a strictly literal, technical reading of Article 239 (",
        "options": ["Yes, the Constitution literally states he administers it",", meaning direct, personal administration without an agent is theoretically valid.","No, the phrase","makes the delegation absolutely mandatory and binding in all cases.","Only during extreme periods of martial law.","Only for deeply isolated islands."],
        "correctAnswerIndex": 1,
        "explanation": "While the power rests with the President, the machinery must operate"
    },
    {
        "id": "ch41-l3-q28",
        "question": "In the highly sensitive, ceremonially rigid official",
        "options": ["Exactly equal to a State Governor universally.","He majestically ranks ABOVE the democratically elected Chief Minister identically within that specific Union Territory.","He strictly ranks firmly BELOW the elected Chief Minister.","He ranks entirely equal to a Union Cabinet Secretary."],
        "correctAnswerIndex": 1,
        "explanation": "Within their respective charges, the Administrator / Lieutenant Governor ranks strictly above the Chief Minister of that particular Union Territory in the official ceremonial Warrant of Precedence."
    },
    {
        "id": "ch41-l3-q29",
        "question": "The North Eastern Council (NEC) is crucial for regional integration. Unlike the Zonal Councils where the Home Minister presides, who is officially designated as the powerful",
        "options": ["The Governor of Assam.","The Union Home Minister.","The Chief Minister of the largest state (Assam).","The visionary Secretary of the DoNER Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Initially, the Governors of Northeastern states were chairmen by rotation. However, following the 2002 amendment to the NEC Act, the Union Home Minister became the ex-officio Chairman of the North Eastern Council."
    },
    {
        "id": "ch41-l3-q30",
        "question": "Operating entirely on the core principles of robust democratic participation, what is the exact",
        "options": ["21 years universally.","18 years (Universal Adult Franchise as secured by the 61st Amendment).","16 years for local municipal voting.","25 years, aligning with candidate eligibility."],
        "correctAnswerIndex": 1,
        "explanation": "Elections to the Legislative Assembly of Delhi or Puducherry are conducted fundamentally on the basis of universal adult suffrage under Article 326. The 61st Amendment Act (1988) universally lowered the voting age from 21 to 18 years for both Lok Sabha and State/UT Assemblies."
    }
];

export const CHAPTER_41_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
