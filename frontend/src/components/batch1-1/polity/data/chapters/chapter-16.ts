import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch16-l1-q1",
        "question": "To ensure harmony among the states, the Constitution makes provisions regarding",
        "options": ["Adjudication of inter-state water disputes.","Coordination through Inter-State Councils.","Mutual recognition of public acts, records, and judicial proceedings.","Establishment of a permanent Federal Police Force."],
        "correctAnswerIndex": 3,
        "explanation": "The Constitution provides for water dispute adjudication (Art 262), Inter-State Councils (Art 263), mutual recognition of public acts (Art 261), and freedom of inter-state trade (Art 301). It does not provide for a permanent Federal Police Force to manage inter-state relations."
    },
    {
        "id": "ch16-l1-q2",
        "question": "Which Article of the Constitution deals with the adjudication of disputes relating to waters of inter-state rivers or river valleys?",
        "options": ["Article 131","Article 262","Article 263","Article 356"],
        "correctAnswerIndex": 1,
        "explanation": "Article 262 of the Constitution provides for the adjudication of inter-state water disputes."
    },
    {
        "id": "ch16-l1-q3",
        "question": "Under Article 262, what significant power is granted to the Parliament regarding the jurisdiction of courts over inter-state water disputes?",
        "options": ["Parliament can mandate that only the Supreme Court hears these cases.","Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint.","Parliament can allow state High Courts to issue final verdicts on these rivers.","Parliament can permanently transfer the river to Union control."],
        "correctAnswerIndex": 1,
        "explanation": "Article 262(2) states that Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint relating to inter-state rivers."
    },
    {
        "id": "ch16-l1-q4",
        "question": "To implement the provisions of Article 262, Parliament enacted two major laws. One of them is the Inter-State Water Disputes Act (1956). What is the other?",
        "options": ["The National River Conservation Act (1995)","The River Boards Act (1956)","The Inter-State Council Act (1990)","The Water Prevention and Control of Pollution Act (1974)"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 262, Parliament has enacted two laws: the River Boards Act (1956) and the Inter-State Water Disputes Act (1956)."
    },
    {
        "id": "ch16-l1-q5",
        "question": "According to the Inter-State Water Disputes Act (1956), who is empowered to set up an ad hoc tribunal for the adjudication of a dispute between two or more states in relation to the waters of an inter-state river?",
        "options": ["The Supreme Court of India","The Central Government","The Inter-State Council","The President directly"],
        "correctAnswerIndex": 1,
        "explanation": "The Inter-State Water Disputes Act empowers the Central government to set up an ad hoc tribunal for the adjudication of a dispute between two or more states."
    },
    {
        "id": "ch16-l1-q6",
        "question": "Once an Inter-State Water Dispute Tribunal gives its decision, what is its legal standing?",
        "options": ["It is merely advisory and states can ignore it.","It must be ratified by the Parliament to become binding.","The decision of the tribunal is final and binding on the parties to the dispute.","It can be instantly appealed to the local High Court."],
        "correctAnswerIndex": 2,
        "explanation": "The Inter-State Water Disputes Act states that the decision of the tribunal is final and binding on the parties to the dispute."
    },
    {
        "id": "ch16-l1-q7",
        "question": "Which states are involved in the famous, long-standing Cauvery Water Dispute?",
        "options": ["Maharashtra, Karnataka, and Andhra Pradesh","Punjab, Haryana, and Rajasthan","Karnataka, Kerala, Tamil Nadu, and Puducherry","Goa, Karnataka, and Maharashtra"],
        "correctAnswerIndex": 2,
        "explanation": "The Cauvery Water Disputes Tribunal (set up in 1990) involves the states of Karnataka, Kerala, Tamil Nadu, and the UT of Puducherry."
    },
    {
        "id": "ch16-l1-q8",
        "question": "Article 263 contemplates the establishment of an Inter-State Council. Who is authorized to establish such a council if it appears that public interests would be served by it?",
        "options": ["The Prime Minister","The Parliament","The President","The Chief Justice of India"],
        "correctAnswerIndex": 2,
        "explanation": "Article 263 states that the President can establish an Inter-State Council if at any time it appears to him that the public interest would be served by its establishment."
    },
    {
        "id": "ch16-l1-q9",
        "question": "The Inter-State Council was formally established in 1990 based on the strong recommendation of which commission?",
        "options": ["Sarkaria Commission","Punchhi Commission","First Administrative Reforms Commission","Rajamannar Committee"],
        "correctAnswerIndex": 0,
        "explanation": "The Sarkaria Commission on Centre-State Relations (1983–88) made a strong case for the establishment of a permanent Inter-State Council. The VP Singh government established it in 1990."
    },
    {
        "id": "ch16-l1-q10",
        "question": "Who is the Chairman of the Inter-State Council established under Article 263?",
        "options": ["The President","The Union Home Minister","The Prime Minister","A rotating Chief Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The Prime Minister is the Chairman of the Inter-State Council."
    },
    {
        "id": "ch16-l1-q11",
        "question": "What is the primary nature of the function of the Inter-State Council according to Article 263?",
        "options": ["It is a legislative body that can pass laws binding on states.","It is a judicial body that gives final verdicts on all state disputes.","Its function to enquire and advise upon inter-state disputes is complementary to the Supreme Court","It is a financial body that distributes tax revenue."],
        "correctAnswerIndex": 2,
        "explanation": "The Council"
    },
    {
        "id": "ch16-l1-q12",
        "question": "Under the States Reorganisation Act of 1956, the country was divided into five zones, and a",
        "options": ["They are constitutional bodies created directly by Article 263.","They are statutory bodies created by an Act of Parliament.","They are executive bodies created by a Prime Ministerial decree.","They are judicial bodies created by the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Zonal Councils are statutory (and not the constitutional) bodies. They are established by an Act of the Parliament, that is, States Reorganisation Act of 1956."
    },
    {
        "id": "ch16-l1-q13",
        "question": "Who acts as the common chairman of all the five Zonal Councils (Northern, Central, Eastern, Western, and Southern)?",
        "options": ["The Prime Minister","The President","The Union Home Minister","The Vice-President"],
        "correctAnswerIndex": 2,
        "explanation": "The Union home minister is the common chairman of the five Zonal Councils."
    },
    {
        "id": "ch16-l1-q14",
        "question": "In addition to the five Zonal Councils created in 1956, a separate North-Eastern Council was created later. By which act was it created?",
        "options": ["The States Reorganisation Act, 1956 (Amendment)","The North-Eastern Council Act, 1971","The Assam Reorganisation Act, 1969","The 7th Constitutional Amendment Act, 1956"],
        "correctAnswerIndex": 1,
        "explanation": "In addition to the above Zonal Councils, a North-Eastern Council was created by a separate Act of Parliament—the North-Eastern Council Act of 1971."
    },
    {
        "id": "ch16-l1-q15",
        "question": "Which part of the Constitution guarantees freedom of trade, commerce, and intercourse throughout the territory of India (Articles 301 to 307)?",
        "options": ["Part XI","Part XII","Part XIII","Part XIV"],
        "correctAnswerIndex": 2,
        "explanation": "Articles 301 to 307 in Part XIII of the Constitution deal with the trade, commerce and intercourse within the territory of India."
    },
    {
        "id": "ch16-l1-q16",
        "question": "Article 301 declares that trade, commerce, and intercourse throughout the territory of India shall be free. However, this freedom is not absolute. Who has the power to impose restrictions on this freedom in the",
        "options": ["State Legislatures alone","The Parliament","The Supreme Court","The Zonal Councils"],
        "correctAnswerIndex": 1,
        "explanation": "Article 302: Parliament can impose restrictions on the freedom of trade, commerce or intercourse between the states or within a state in public interest."
    },
    {
        "id": "ch16-l1-q17",
        "question": "Under Article 304, a State legislature can impose reasonable restrictions on the freedom of trade, commerce or intercourse with that state in the public interest. However, what is the prerequisite for introducing such a bill in the state legislature?",
        "options": ["Consent of the adjacent states.","Previous sanction of the President.","Approval from the Inter-State Council.","A referendum in the state."],
        "correctAnswerIndex": 1,
        "explanation": "A bill for this purpose can be introduced in the state legislature only with the previous sanction of the president (Article 304)."
    },
    {
        "id": "ch16-l1-q18",
        "question": "To prevent discrimination, Article 303 prohibits both the Parliament and the State Legislatures from making laws that give preference to one state over another regarding trade and commerce. What is the only exception allowing Parliament to discriminate?",
        "options": ["If a state is politically favored.","In the case of dealing with a situation arising from scarcity of goods in any part of India.","If the Finance Commission recommends it.","There are absolutely no exceptions."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can make discrimination or give preference to one state over another in the case of dealing with a situation arising from a scarcity of goods in any part of India (Article 303)."
    },
    {
        "id": "ch16-l1-q19",
        "question": "Can a State Legislature impose taxes on goods imported from other States or Union Territories?",
        "options": ["No, states cannot tax incoming goods under any circumstances.","Yes, provided the tax does not discriminate between goods imported from other states and goods manufactured or produced in that state.","Yes, they can tax imported goods at a much higher rate to protect local industries.","Yes, but only if the Central Government collects the tax."],
        "correctAnswerIndex": 1,
        "explanation": "The legislature of a state can impose on goods imported from other states any tax to which similar goods manufactured in that state are subject. This is to ensure no discrimination against imported goods (Article 304)."
    },
    {
        "id": "ch16-l1-q20",
        "question": "The Constitution provides for",
        "options": ["That every state must trust the financial promises of the Centre.","That Full faith and credit shall be given throughout the territory of India to public acts, records and judicial proceedings of the Union and of every State.","That states must give loans to each other without interest.","That the public must have blind faith in the government."],
        "correctAnswerIndex": 1,
        "explanation": "Article 261 declares that"
    },
    {
        "id": "ch16-l1-q21",
        "question": "Under the",
        "options": ["They are only enforceable in the state where they were issued.","They must be re-tried if enforced in another state.","They are capable of execution anywhere within India (without the necessity of a fresh suit).","They only apply to criminal cases, not civil cases."],
        "correctAnswerIndex": 2,
        "explanation": "Final judgments and orders delivered or passed by civil courts in any part of India are capable of execution anywhere within India (without the necessity of a fresh suit upon the judgment)."
    },
    {
        "id": "ch16-l1-q22",
        "question": "What does the term",
        "options": ["Only the actions of the President.","Charitable acts done by NGOs.","Both legislative and executive acts of the Government.","Only the judgments of the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "The term"
    },
    {
        "id": "ch16-l1-q23",
        "question": "While Article 301 guarantees freedom of trade and commerce, can the national or state governments create monopolies in a particular trade or business?",
        "options": ["No, monopolies are strictly unconstitutional.","Yes, but only the Central Government can create monopolies.","Yes, the freedom under Article 301 is subject to the nationalization laws (creating a monopoly for the Centre or State in a given sector).","Yes, but only for foreign companies."],
        "correctAnswerIndex": 2,
        "explanation": "Article 305 says the freedom under Article 301 is subject to the nationalisation laws. Parliament or a state legislature can make laws for carrying on any trade, business, industry or service by the government to the exclusion of citizens (creating a monopoly)."
    },
    {
        "id": "ch16-l1-q24",
        "question": "Under Article 307, Parliament can appoint an authority to carry out the purposes of provisions relating to freedom of trade and commerce (Articles 301 to 304). Has Parliament appointed any such authority to date?",
        "options": ["Yes, the Inter-State Trade Commission.","Yes, the Competition Commission of India.","Yes, the Ministry of Commerce directly.","No such authority has been appointed so far."],
        "correctAnswerIndex": 3,
        "explanation": "Article 307 empowers Parliament to appoint such authority. However, no such authority has been appointed so far."
    },
    {
        "id": "ch16-l1-q25",
        "question": "The Inter-State Council comprises several members. Which of the following is NOT a member of the Inter-State Council?",
        "options": ["The Prime Minister (Chairman)","Chief Ministers of all states","Six Central Cabinet Ministers (nominated by PM)","The Chief Justice of India"],
        "correctAnswerIndex": 3,
        "explanation": "The Inter-State Council does not include the Chief Justice of India. It consists of the PM, all CMs, Administrators of UTs, and six Central Cabinet Ministers (including the Home Minister)."
    },
    {
        "id": "ch16-l1-q26",
        "question": "A Standing Committee of the Inter-State Council was set up in 1996 for continuous consultation. Who is the Chairman of this Standing Committee?",
        "options": ["The Prime Minister","The Union Home Minister","The Finance Minister","A Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Standing Committee of the Inter-State Council is chaired by the Union Home Minister. (It also includes 5 Union Cabinet Ministers and 9 Chief Ministers)."
    },
    {
        "id": "ch16-l1-q27",
        "question": "How many active Zonal Councils are currently functioning in India under the 1956 Act?",
        "options": ["4","5","6","7"],
        "correctAnswerIndex": 1,
        "explanation": "There are 5 Zonal Councils (Northern, Central, Eastern, Western, and Southern) created by the States Reorganisation Act of 1956."
    },
    {
        "id": "ch16-l1-q28",
        "question": "Which of the following bodies act as",
        "options": ["Water Disputes Tribunals","Zonal Councils","High Courts","Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Zonal Councils are deliberative and advisory bodies. One of their stated objectives is to bring out the emotional integration of the country and arrest the growth of acute state consciousness, regionalism, linguism, and particularistic tendencies."
    },
    {
        "id": "ch16-l1-q29",
        "question": "Which of the following is a function of the Inter-State Council as explicitly defined in Article 263?",
        "options": ["To impose President","To investigate and discuss subjects in which some or all of the states, or the Union and one or more of the states, have a common interest.","To audit the financial accounts of the states.","To conduct elections for State Assemblies."],
        "correctAnswerIndex": 1,
        "explanation": "Article 263 explicitly states it is the duty of the Council to investigate and discuss subjects in which some or all of the states, or the Union and one or more of the states, have a common interest."
    },
    {
        "id": "ch16-l1-q30",
        "question": "Is the jurisdiction of the Supreme Court over inter-state water disputes completely barred the moment the dispute arises?",
        "options": ["Yes, the Supreme Court can never look at river waters.","No, the Supreme Court automatically takes all these cases under Article 131.","Under the 1956 Act, the Supreme Court","The Supreme Court and the Tribunal share parallel jurisdiction at all times."],
        "correctAnswerIndex": 2,
        "explanation": "The bar on the Supreme Court"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch16-l2-q1",
        "question": "Consider the constitutional architecture regarding Inter-State Water Disputes (Article 262). Why did the framers uniquely empower Parliament to entirely strip the Supreme Court (and all other courts) of jurisdiction over these specific disputes, unlike other Centre-State conflicts which fall under original jurisdiction (Article 131)?",
        "options": ["Because water disputes were considered too minor for the Supreme Court","Because the British had already established a separate Water Court that the framers wished to retain.","Because water sharing involves highly technical, complex socio-economic and engineering assessments (rainfall, crop patterns, basin yield) rather than pure questions of law, making specialized, ad-hoc expert Tribunals more suitable than traditional adversarial courts.","Because the Supreme Court requested to be relieved of this specific duty in 1949."],
        "correctAnswerIndex": 2,
        "explanation": "The framers recognized that dividing a river is not a simple legal interpretation of a contract. It requires immense technical, hydrological, and agricultural data evaluation. Traditional courts are ill-equipped for this dynamic, deeply political resource allocation. Hence, Art 262(2) allows Parliament to oust court jurisdiction in favor of specialized, expert-driven Tribunals."
    },
    {
        "id": "ch16-l2-q2",
        "question": "While the Inter-State Water Disputes Act (1956) makes the Tribunal",
        "options": ["By declaring the 1956 Act unconstitutional.","By entertaining Special Leave Petitions (under Article 136) appealing the Tribunal","By permanently dissolving the Tribunal.","By directing the President to invoke Article 356 over the defying state."],
        "correctAnswerIndex": 1,
        "explanation": "The statutory bar (Art 262) applies to the *original* dispute. However, the Supreme Court"
    },
    {
        "id": "ch16-l2-q3",
        "question": "Compare the Inter-State Council (Article 263) and the Zonal Councils. Which of the following highlights a fundamental structural difference between the two bodies intended to foster cooperative federalism?",
        "options": ["The Zonal Councils are headed by the Prime Minister, while the Inter-State Council is headed by the Union Home Minister.","The Inter-State Council is a permanent, constitutional body covering the entire nation simultaneously, whereas Zonal Councils are statutory bodies dealing with specific regional groupings of states.","The Inter-State Council can pass legally binding laws, whereas Zonal Councils are only advisory.","States can opt out of the Inter-State Council, but membership in Zonal Councils is mandatory."],
        "correctAnswerIndex": 1,
        "explanation": "The Inter-State Council derives its authority directly from the Constitution (Art 263) and is a pan-India forum (all CMs + PM). Zonal Councils are creations of a regular law (The States Reorganisation Act, 1956) and focus purely on regional, geographical clusters (e.g., the Southern states discussing common rail links). Both are purely advisory."
    },
    {
        "id": "ch16-l2-q4",
        "question": "Under the mandate of",
        "options": ["Yes; criminal judgments are automatically executed nationwide under the exact same clause.","No; the","clause applies universally to public acts and records, but regarding judicial proceedings, the rule of extraterritorial execution applies primarily to *civil* judgments. Penal laws and judgments are inherently territorial.","Yes; but only if the crime was committed across state lines.","No; civil judgments also require a re-trial in the new state."],
        "correctAnswerIndex": 1,
        "explanation": "A fundamental principle of jurisprudence is that courts of one jurisdiction do not automatically enforce the penal (criminal) laws or sentences of another sovereign jurisdiction. Art 261 ensures that if you win a civil suit (like debt recovery) in Delhi, you can attach the debtor"
    },
    {
        "id": "ch16-l2-q5",
        "question": "Article 301 guarantees that trade, commerce, and intercourse",
        "options": ["To ensure that only public sector companies can trade.","To prevent the balkanization of the country into fragmented, isolated economic zones by breaking down regional tariff walls and fostering a single, unified national economic market.","To allow foreign companies unlimited access to Indian markets.","To guarantee free transport on all railways without tickets."],
        "correctAnswerIndex": 1,
        "explanation": "The framers observed how the US economy thrived as a single massive market. Before integration, princely states and provinces in India had internal customs barriers, hindering movement of goods, causing local scarcity, and stunting national growth. Art 301 aimed to constitutionally weld India into one single, unbroken economic unit."
    },
    {
        "id": "ch16-l2-q6",
        "question": "While Article 301 guarantees free trade, Article 304(a) allows a State Legislature to impose taxes on goods imported from other states. What is the crucial constitutional condition attached to this taxing power to prevent economic isolationism?",
        "options": ["The tax must be approved by the WTO.","The tax MUST NOT be discriminatory; it can only be imposed if identical, akin goods manufactured *within* the state itself are subjected to the exact same tax burden.","The tax rate must not exceed 5%.","The state must share 50% of the collected tax with the originating state."],
        "correctAnswerIndex": 1,
        "explanation": "States can tax imports (e.g., an Entry Tax or Octroi), but they cannot use this tax as a protectionist weapon to shelter local industries. If a state levies a 10% tax on shoes imported from outside, it MUST also be levying a 10% tax on shoes produced locally. The tax must be"
    },
    {
        "id": "ch16-l2-q7",
        "question": "Under Article 304(b), a State Legislature can impose",
        "options": ["The bill requires unanimous consent from all members of the State Assembly.","The bill can only be introduced with the *previous sanction* of the President (acting on the advice of the Union Cabinet), effectively giving the Centre a prior veto over state trade restrictions.","The bill must first be debated in the Inter-State Council.","The bill requires the approval of the Zonal Council."],
        "correctAnswerIndex": 1,
        "explanation": "This is a profound centralizing feature protecting the national market. Even if a state has a legitimate"
    },
    {
        "id": "ch16-l2-q8",
        "question": "Examine the Zonal Councils created under the SRC Act, 1956. While the Union Home Minister chairs them all, how does the Act seek to ensure a sense of equality and shared leadership among the constituent states of each zone?",
        "options": ["By ensuring all states get equal funding from the Centre.","By mandating that the Chief Ministers of the states included in the zone act as the Vice-Chairman of the Council by rotation, holding office for a period of one year at a time.","By rotating the headquarters of the Zonal Council every month.","By allowing each state to veto any resolution of the Council."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent any one state from dominating a regional zone, the 1956 Act designed a rotating vice-chairmanship. Each CM gets a turn to act as the Vice-Chairman for a year, fostering a cooperative, peer-driven environment rather than a hierarchical one."
    },
    {
        "id": "ch16-l2-q9",
        "question": "Assertion (A): The Inter-State Council (Article 263) functions as a powerful, autonomous constitutional tribunal whose consensus decisions are legally binding upon both the Centre and the States.\\nReason (R): Because it was established specifically to coordinate Centre-State relations and resolve friction definitively, preventing the need for Supreme Court intervention in political disputes.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are absolutely FALSE. The Inter-State Council is purely an"
    },
    {
        "id": "ch16-l2-q10",
        "question": "The North-Eastern Council was uniquely restructured in 2002. While it originally comprised the",
        "options": ["West Bengal","Sikkim","Bihar","Odisha"],
        "correctAnswerIndex": 1,
        "explanation": "Sikkim was added as the 8th member state of the North-Eastern Council (NEC) by an amendment in 2002, recognizing its geographical and developmental alignment with the northeastern region."
    },
    {
        "id": "ch16-l2-q11",
        "question": "Which of the following scenarios would be a legitimate use of the Inter-State Council",
        "options": ["Adjudicating a boundary dispute between Maharashtra and Karnataka, issuing a final binding order.","Discussing a uniform national policy on agriculture or coordinated action to combat Left-Wing Extremism sweeping across the","(affecting multiple states).","Passing a constitutional amendment to alter the GST rate.","Directing the Election Commission to hold joint state elections."],
        "correctAnswerIndex": 1,
        "explanation": "The Council is deliberative, not legislative or adjudicative. It is the perfect forum to discuss pan-India challenges that require coordinated state action (like internal security threats that cross borders, or establishing consensus on national education policies). It cannot issue binding orders or pass laws."
    },
    {
        "id": "ch16-l2-q12",
        "question": "Consider the constitutional paradox in Article 303. It prohibits the Parliament from giving preference to one State over another regarding trade regulations. However, an immediate exception is provided. When CAN Parliament legally discriminate and favor one region over another?",
        "options": ["When the favored region votes for the ruling party.","When creating Special Economic Zones (SEZs).","In the specific case where it is necessary to deal with a situation arising from the","in any part of the territory of India.","Whenever the Finance Commission recommends it."],
        "correctAnswerIndex": 2,
        "explanation": "If there is a massive famine in Odisha, the Centre must intervene. Art 303(2) allows the Parliament to discriminate—for instance, by banning the export of rice from Punjab to anywhere EXCEPT Odisha, forcing the grain to the deficit area. This is a practical exception to the rule of absolute"
    },
    {
        "id": "ch16-l2-q13",
        "question": "What is the constitutional significance of Article 307 regarding the regulation of inter-state trade, a provision heavily criticized for never being utilized since 1950?",
        "options": ["It automatically abolishes all state taxes every ten years.","It actively empowers Parliament to appoint a specialized, independent","to carry out the purposes of trade freedom (Articles 301-304), similar to an Inter-State Commerce Commission, which could resolve minor trade frictions without endless court battles.","It mandates the creation of a national cryptocurrency.","It gives the President the power to dissolve state assemblies that restrict trade."],
        "correctAnswerIndex": 1,
        "explanation": "The framers modeled this on the US Interstate Commerce Commission. They envisioned a specialized, expert body to regulate the complex, technical nuances of inter-state trade, preventing predatory state taxation and resolving disputes quickly. However, Parliament has lacked the political will to create this Authority, leaving all complex trade disputes to the overburdened Supreme Court."
    },
    {
        "id": "ch16-l2-q14",
        "question": "The Sarkaria Commission recommended that the Inter-State Council (ISC) should be a permanent body. What specific name did the Commission suggest for this body to distinguish its broad mandate from a narrow tribunal?",
        "options": ["The Federal Supreme Tribunal","The National Development Council","The Inter-Governmental Council","The Union-State Coordination Committee"],
        "correctAnswerIndex": 2,
        "explanation": "The Sarkaria Commission recommended establishing a permanent council under Article 263 and suggested calling it the"
    },
    {
        "id": "ch16-l2-q15",
        "question": "In the 1990 Presidential Order establishing the Inter-State Council, who serves as the Secretariat for the Council, providing the necessary administrative and research support?",
        "options": ["The Prime Minister","The Cabinet Secretariat","The Inter-State Council Secretariat (ISCS), which has been functioning under the Ministry of Home Affairs since 2011.","The Law Commission of India"],
        "correctAnswerIndex": 2,
        "explanation": "The Inter-State Council Secretariat (ISCS) provides the administrative backbone. Originally, it functioned under the Cabinet Secretariat but was later shifted to function directly under the Ministry of Home Affairs, given the Home Minister"
    },
    {
        "id": "ch16-l2-q16",
        "question": "Assertion (A): The Constitution strictly prohibits States from levying any tax on vehicles traversing inter-state routes to protect the",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are entirely FALSE. The Supreme Court (in cases like Atiabari Tea and Automobile Transport) clarified that"
    },
    {
        "id": "ch16-l2-q17",
        "question": "Consider the North-Eastern Council (NEC). Unlike the other five Zonal Councils which are purely advisory, the NEC was given a significant functional upgrade by an amendment in 2002. What is this unique functional role of the NEC?",
        "options": ["It acts as the Supreme Court for the Northeastern states.","It functions as the","for the North Eastern Region, actively formulating and executing targeted, multi-state development projects (e.g., inter-state transport, power).","It has the power to declare President","It legally controls all international borders in the Northeast."],
        "correctAnswerIndex": 1,
        "explanation": "The 2002 amendment transformed the NEC from a purely advisory body into a statutory"
    },
    {
        "id": "ch16-l2-q18",
        "question": "What is the primary statutory mechanism used by the Central Government under the Inter-State Water Disputes Act (1956) when a State Government formally requests the Centre to intervene in a water dispute?",
        "options": ["The Centre immediately sets up a Tribunal.","The Central Government is legally bound to first attempt to settle the dispute through negotiation; an ad-hoc Tribunal is constituted ONLY if the Centre forms the opinion that the dispute cannot be settled by negotiation.","The Centre refers the matter to the Inter-State Council for a binding vote.","The Centre asks the Supreme Court for an advisory opinion."],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals are the last resort. The Act mandates that the Centre must first exhaust negotiations. This often leads to massive delays (sometimes decades), as the Centre repeatedly claims"
    },
    {
        "id": "ch16-l2-q19",
        "question": "Regarding",
        "options": ["Criminal judgments are executed exactly like civil decrees.","Penal laws are strictly territorial; one State cannot enforce the penal laws or execute the penal judgments of another State. Execution of criminal warrants across borders requires specific statutory backing (like the Code of Criminal Procedure), not automatic constitutional recognition.","Only the President can authorize inter-state criminal executions.","Penal judgments are only valid for 30 days outside the home state."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch16-l2-q20",
        "question": "Which of the following bodies is fundamentally designed to deal with the",
        "options": ["The Election Commission","The Finance Commission","The Zonal Councils","The Union Public Service Commission"],
        "correctAnswerIndex": 2,
        "explanation": "The Zonal Councils (created alongside the linguistic reorganization of states in 1956) were the brainchild of Pandit Nehru to counteract the massive fissiparous, regional, and linguistic loyalties sweeping the nation. By grouping states geographically, they aimed to foster a habit of cooperative, regional thinking over narrow state chauvinism."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch16-l3-q1",
        "question": "Analyze the constitutional interplay between Article 262 (Water Disputes) and Article 136 (Special Leave to Appeal). How has the Supreme Court consistently utilized Article 136 to retain oversight over Inter-State River Water Tribunals, effectively bypassing the statutory bar intended by Parliament?",
        "options": ["The Court declares the 1956 Act unconstitutional whenever a state requests it.","The Court claims that Article 136 gives it original jurisdiction over all water disputes, nullifying Article 262 entirely.","The Court maintains that while it cannot hear the","(which belongs to the Tribunal), Article 136 grants it the extraordinary appellate power to review the Tribunal’s final award, as no statutory bar can extinguish a fundamental constitutional appellate power.","The Court requires the President"],
        "correctAnswerIndex": 2,
        "explanation": "This is a classic UPSC constitutional nuance. Article 262 allows Parliament to bar court jurisdiction. The 1956 Act did precisely that. However, the Supreme Court ruled (e.g., in the Cauvery case) that a statutory law cannot erase Article 136 (its discretionary power to grant Special Leave to Appeal). Thus, states routinely challenge Tribunal awards in the SC, making the Tribunal merely the first step rather than the final word."
    },
    {
        "id": "ch16-l3-q2",
        "question": "Consider the constitutional mechanics of the Zonal Councils created under the States Reorganisation Act, 1956. What is the precise constitutional rationale for including the Chief Secretary of every State in the Zone as an official member, alongside political heads like Chief Ministers?",
        "options": ["Because Chief Secretaries are usually more popular than Chief Ministers.","Because Chief Secretaries have the constitutional power to veto political decisions of the Council.","Because Zonal Councils are not just deliberative political forums; they require the highest bureaucratic leadership to actually execute the agreed-upon regional coordination (e.g., joint police action, power grids) down through the administrative machinery of each state.","Because the Constitution mandates it in Article 263."],
        "correctAnswerIndex": 2,
        "explanation": "Zonal Councils are statutory, not constitutional (Art 263 is the Inter-State Council). They are designed for practical implementation of regional cooperation. While CMs make political consensus, the Chief Secretaries (and Development Commissioners) are members because they are the apex of the permanent executive machinery necessary to actually implement the Council"
    },
    {
        "id": "ch16-l3-q3",
        "question": "The",
        "options": ["Fear of foreign multinational corporations taking over domestic markets.","The desperate need to manage a chronic, nation-wide scarcity of essential commodities (like food grains) post-independence, requiring the Centre to possess the draconian power to control the movement, supply, and distribution of goods (e.g., via the Essential Commodities Act) to prevent regional famines.","The desire to completely nationalize all private industries within 10 years.","Fear that states would print their own currencies."],
        "correctAnswerIndex": 1,
        "explanation": "India in 1950 was plagued by severe"
    },
    {
        "id": "ch16-l3-q4",
        "question": "Assertion (A): The Inter-State Council (ISC) established under Article 263 has demonstrably failed to become the premier, independent constitutional tribunal for resolving Centre-State disputes as envisioned by some of its early proponents.\\nReason (R): Because the ISC was structured merely as a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. While the Sarkaria Commission wanted a robust, autonomous"
    },
    {
        "id": "ch16-l3-q5",
        "question": "Consider the landmark Supreme Court judgement in Atiabari Tea Co. v. State of Assam regarding Article 301 (Freedom of Trade). The Court established the doctrine of",
        "options": ["Any tax exceeding 10% is an unconstitutional barrier.","Taxes are valid only if collected by the Centre; state taxes are always barriers.","If a tax operates as a direct and immediate restriction on the movement of trade (e.g., a massive border entry tax for revenue), it violates Article 301. However, if a tax is","(e.g., a toll tax collected specifically to maintain the highway the truck uses), it facilitates trade rather than hindering it, and is therefore constitutional.","Taxes on essential goods are valid, while taxes on luxury goods are barriers."],
        "correctAnswerIndex": 2,
        "explanation": "This is the core test for Art 301. Freedom in 301 means freedom from barriers that *impede* the flow of commerce. A compensatory tax (like a road tax or bridge toll) isn"
    },
    {
        "id": "ch16-l3-q6",
        "question": "Under the provisions of the Inter-State Water Disputes Act (1956), Parliament made recent amendments (in 2002) to streamline the notoriously slow tribunal process. What critical new mechanism was legally mandated before the Central Government is allowed to formally constitute a Water Disputes Tribunal?",
        "options": ["A mandatory referendum in all affected states.","A mandatory 5-year cooling-off period.","The mandatory establishment of a","(DRC) comprising experts, which must attempt to resolve the dispute amicably through negotiation within a strict 1-year timeframe before a Tribunal can be activated.","Mandatory approval from the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "The 2002 amendments (and later proposed bills) aimed to end the endless political delays. Before handing the explosive issue to a Tribunal, the Act now technically requires the Centre to exhaust expert-led negotiations (via a DRC) within a strict time limit (usually one year), making the process slightly more structured than the previous open-ended political haggling."
    },
    {
        "id": "ch16-l3-q7",
        "question": "Examine the constitutional restrictions on State Legislatures imposing taxes on inter-state commerce (Article 304). While a State CAN tax goods imported from another State, what is the absolute, non-negotiable condition the Supreme Court stringently enforces to prevent the",
        "options": ["The tax must be collected by Union officers.","The tax on imported goods MUST be exactly identical to the tax levied on similar goods produced within the State itself, ensuring absolute non-discrimination and preventing states from using taxes as protectionist tariffs against their neighbors.","The tax must only apply to luxury items.","The state must obtain prior permission from the WTO."],
        "correctAnswerIndex": 1,
        "explanation": "This is the"
    },
    {
        "id": "ch16-l3-q8",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is the exact purpose of Art 261. It prevents legal chaos. If a civil right (like a divorce, or a property judgement) is finalized by a competent court in one state, all other states must respect it. The citizen doesn"
    },
    {
        "id": "ch16-l3-q9",
        "question": "Consider the North-Eastern Council (NEC). In 2002, the NEC Act was amended to fundamentally alter its mandate, recognizing the unique security and developmental challenges of the",
        "options": ["It was given the power to formulate independent foreign policy with Myanmar.","It was upgraded from an advisory body to a","tasked with securing balanced development, and crucially, it was mandated to review the measures taken by states for the maintenance of","within the region.","It was given direct control over the Assam Rifles.","It was granted the power to declare President"],
        "correctAnswerIndex": 1,
        "explanation": "The 2002 amendment recognized that insurgency and lack of infrastructure in the Northeast cross state borders constantly. The NEC was transformed into a Regional Planning Body (with its own budget) to build inter-state roads/power, and uniquely, it was tasked with discussing regional security (a highly sensitive issue usually reserved for the Home Ministry directly)."
    },
    {
        "id": "ch16-l3-q10",
        "question": "Under Article 303, Parliament is generally prohibited from making laws that give preference to one State over another regarding trade. However, it can discriminate to address a",
        "options": ["It is automatically invalid as it violates the right to equality (Article 14).","It is valid because the Constitution explicitly permits Parliament to discriminate between States if it is necessary to deal with a situation arising from a declared scarcity of goods in any part of the territory of India.","It requires a constitutional amendment every time it is invoked.","It is valid only if the Zonal Council approves."],
        "correctAnswerIndex": 1,
        "explanation": "This is the explicit exception provided in Article 303(2). The framers prioritized national survival over absolute free trade. If there is a massive famine (scarcity), Parliament MUST have the power to break the"
    },
    {
        "id": "ch16-l3-q11",
        "question": "What is the critical distinction regarding",
        "options": ["Only private farmers can file cases under the Water Disputes Act.","Under Article 131, the Centre can sue a State; under the 1956 Act, the Centre CANNOT be a party to the water dispute before the Tribunal—the dispute must strictly be between two or more State Governments.","NGOs can file Public Interest Litigations (PILs) directly in the Water Tribunals.","There is no distinction; the rules of standing are identical."],
        "correctAnswerIndex": 1,
        "explanation": "A water dispute under Art 262 (and the 1956 Act) is strictly defined as a dispute"
    },
    {
        "id": "ch16-l3-q12",
        "question": "When a State Legislature enacts a law under Article 304(b) imposing",
        "options": ["The State Legislature itself.","The President of India.","The Judiciary (specifically the High Courts and the Supreme Court).","The Inter-State Trade Commission."],
        "correctAnswerIndex": 2,
        "explanation": "Even if the President gives prior sanction allowing the state to introduce the bill, the final arbiter of"
    },
    {
        "id": "ch16-l3-q13",
        "question": "Consider the unique administrative structure of Zonal Councils. What is the fundamental reason that",
        "options": ["Because UTs contribute the most tax revenue.","Because Zonal Councils are fundamentally designed to integrate the holistic geographical region—addressing shared infrastructure (roads, police coordination, power) which naturally encompasses both States and UTs lying within that contiguous geographical block.","Because UTs are treated as full states under the 1956 SRC Act.","Because the Supreme Court mandated their inclusion in 1990."],
        "correctAnswerIndex": 1,
        "explanation": "Zonal Councils are about geography and practical ground-level coordination. If the Northern Zonal Council is discussing a massive power grid or interstate police coordination to catch criminals moving across borders, it must include Chandigarh and Delhi (UTs) alongside Punjab and Haryana. Excluding UTs would leave massive geographical administrative"
    },
    {
        "id": "ch16-l3-q14",
        "question": "Assertion (A): The freedom of trade and commerce (Article 301) applies identically to both inter-state (between states) and intra-state (within a state) commerce.\\nReason (R): Because Article 301 explicitly uses the phrase",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is a subtle but critical point. Art 301 isn"
    },
    {
        "id": "ch16-l3-q15",
        "question": "In the context of the Cauvery Water Dispute, what was the most significant structural flaw in the 1956 Act that led to decades of agonizing delay in implementing the Tribunal",
        "options": ["The 1956 Act allowed appeals to the UN Water Court.","The 1956 Act did not create a permanent, specialized judicial bench; worse, it lacked a robust, independent institutional mechanism (like an absolute River Management Board with statutory police powers) to rapidly execute the award against politically defiant State governments.","The 1956 Act required all Tribunal members to be foreign experts.","The 1956 Act mandated that the award be ratified by a 2/3rds majority of Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The fatal flaw of the 1956 framework was execution. A Tribunal consisting of retired judges would issue an award, but if a State (under massive political pressure) simply refused to release the water, there was no independent"
    },
    {
        "id": "ch16-l3-q16",
        "question": "Examine the role of the",
        "options": ["The power to collect data on inter-state truck movement.","The power to advise the President on issuing prior sanctions under Article 304(b).","The power to completely adjudicate and issue final, binding verdicts on constitutional disputes between states regarding Article 301, effectively usurping the exclusive original jurisdiction (Article 131) and judicial review powers of the Supreme Court.","The power to standardize toll tax rates."],
        "correctAnswerIndex": 2,
        "explanation": "Art 307 allows creating an"
    },
    {
        "id": "ch16-l3-q17",
        "question": "The Inter-State Council was convened for the very first time in 1990. Which intensely controversial political issue, defining Center-State relations of that era, dominated the agenda of the Council during its first decade of largely ineffective existence?",
        "options": ["The introduction of GST.","The rampant misuse of Article 356 (President’s Rule) by the Centre to dismiss opposition State governments, leading the Council to debate the Sarkaria Commission","The sharing of the Krishna River.","The formation of Telangana."],
        "correctAnswerIndex": 1,
        "explanation": "During the 1990s, coalition politics and the rampant imposition of President"
    },
    {
        "id": "ch16-l3-q18",
        "question": "Regarding Zonal Councils, what is the constitutional status of their resolutions/decisions?",
        "options": ["They are legally binding on all member states upon a majority vote.","They acts as central laws, overriding state legislation.","They possess absolutely no binding constitutional or statutory force; they are purely recommendatory, serving as high-level political agreements that rely entirely on the subsequent goodwill of the member State legislatures to enact them.","They must be ratified by the Supreme Court to take effect."],
        "correctAnswerIndex": 2,
        "explanation": "Zonal councils are deliberative and advisory. If the Southern Zonal Council agrees to establish a shared anti-Naxal police database, that agreement has no legal force. The respective State assemblies/cabinets must then go back and individually pass the necessary executive orders or budgets to make it a reality."
    },
    {
        "id": "ch16-l3-q19",
        "question": "Assertion (A): Parliament can enact a law under Article 262 stripping the Supreme Court of jurisdiction over a water dispute occurring entirely within the boundaries of a single State (intra-state river).\\nReason (R): Because Article 262 grants Parliament plenary power over all water resources in the territory of India.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. Water (Entry 17, State List) is fundamentally a State subject. The Centre (and Art 262) ONLY gets involved when the river is"
    },
    {
        "id": "ch16-l3-q20",
        "question": "Examine the concept of",
        "options": ["State B can demand a full re-trial of all facts.","The Constitution explicitly states that the *manner* in which and the *conditions* under which these acts, records, and judicial proceedings shall be proved and the effect determined shall be provided by law made exclusively by Parliament (e.g., The Indian Evidence Act, CPC).","State B can charge a massive fee to recognize the records.","The Governor of State B must personally verify the records."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure absolute uniformity, the framers didn"
    }
];

export const CHAPTER_16_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
