import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch15-l1-q1",
        "question": "The Constitution of India divides Centre-State relations into three parts. Which of the following is NOT one of those parts?",
        "options": ["Legislative relations","Administrative relations","Judicial relations","Financial relations"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution divides Centre-State relations into Legislative, Administrative, and Financial relations. There is no division of judicial powers as India has an integrated judicial system."
    },
    {
        "id": "ch15-l1-q2",
        "question": "Which Part of the Constitution deals with the Legislative Relations between the Centre and the states (Articles 245 to 255)?",
        "options": ["Part X","Part XI","Part XII","Part XIII"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 245 to 255 in Part XI of the Constitution deal with the legislative relations between the Centre and the states."
    },
    {
        "id": "ch15-l1-q3",
        "question": "Regarding the",
        "options": ["They apply only to Union Territories.","They can apply to the whole or any part of the territory of India.","They apply only outside the territory of India (extra-territorial laws).","They apply only to states that have ratified them."],
        "correctAnswerIndex": 1,
        "explanation": "The Parliament can make laws for the whole or any part of the territory of India. The territory of India includes the states, the union territories, and any other area for the time being included in the territory of India."
    },
    {
        "id": "ch15-l1-q4",
        "question": "Which legislative body in India alone possesses the power to make",
        "options": ["State Legislatures","The Supreme Court","The Parliament","The Inter-State Council"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament alone can make"
    },
    {
        "id": "ch15-l1-q5",
        "question": "Though Parliament has pan-India jurisdiction, the President can make regulations for the peace, progress, and good government of five specific Union Territories, which have the same force as acts of Parliament. Which of the following is NOT one of those UTs?",
        "options": ["Andaman and Nicobar Islands","Lakshadweep","Delhi","Ladakh"],
        "correctAnswerIndex": 2,
        "explanation": "The President makes regulations for five UTs: Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli, Daman and Diu, and Ladakh. Delhi is a specifically governed UT with its own Legislative Assembly under Art 239AA."
    },
    {
        "id": "ch15-l1-q6",
        "question": "In the Seventh Schedule of the Constitution, which List gives exclusive power to the Parliament to make laws? (It currently has 98 subjects).",
        "options": ["State List (List II)","Concurrent List (List III)","Union List (List I)","Residuary List"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament has exclusive powers to make laws with respect to any of the matters enumerated in the Union List (List I)."
    },
    {
        "id": "ch15-l1-q7",
        "question": "Which of the following subjects is correctly matched with its respective List in the Seventh Schedule?",
        "options": ["Defense - State List","Police - Union List","Education - Concurrent List","Banking - State List"],
        "correctAnswerIndex": 2,
        "explanation": "Education is in the Concurrent List (shifted from State List by the 42nd Amendment). Defense and Banking are Union List subjects. Police is a key State List subject."
    },
    {
        "id": "ch15-l1-q8",
        "question": "The power to make laws on",
        "options": ["The State Legislatures","The Parliament","The Supreme Court","The President directly"],
        "correctAnswerIndex": 1,
        "explanation": "The Parliament has the power to make laws with respect to any matter for any part of the territory of India not enumerated in any of the three Lists (Article 248). This is called the residuary legislative power."
    },
    {
        "id": "ch15-l1-q9",
        "question": "In case of a conflict or overlapping between the Union List and the State List, which list prevails?",
        "options": ["The State List","The Union List","The Supreme Court decides on a case-by-case basis","The matter is moved to the Concurrent List"],
        "correctAnswerIndex": 1,
        "explanation": "In case of overlapping between the Union List and the State List, the former should prevail. The Union List always secures predominance over the State List."
    },
    {
        "id": "ch15-l1-q10",
        "question": "According to Article 254, what happens if there is a conflict (repugnancy) between a Central law and a State law regarding a subject in the Concurrent List?",
        "options": ["The State law prevails immediately.","The Central law prevails, and the State law is void to the extent of repugnancy.","Both laws are struck down by the courts.","The President suspends the subject for an entire year."],
        "correctAnswerIndex": 1,
        "explanation": "In case of a conflict between the Central law and the state law on a subject enumerated in the Concurrent List, the Central law prevails over the state law."
    },
    {
        "id": "ch15-l1-q11",
        "question": "Under Article 249, Parliament can make laws on a subject in the State List if a particular constitutional body passes a resolution declaring it is",
        "options": ["The Lok Sabha","The Legislative Assemblies of at least half the states","The Rajya Sabha","The Inter-State Council"],
        "correctAnswerIndex": 2,
        "explanation": "If the Rajya Sabha declares that it is necessary in the national interest that Parliament should make laws with respect to a matter in the State List, then the Parliament becomes competent to make laws on that matter (Article 249)."
    },
    {
        "id": "ch15-l1-q12",
        "question": "When a National Emergency (Article 352) is in operation, what happens to the legislative powers concerning the State List?",
        "options": ["The State Legislatures are permanently dissolved.","State Legislatures retain exclusive power, Parliament cannot interfere.","Parliament acquires the power to legislate with respect to ANY matter in the State List for the entire country.","Only the President can legislate via ordinance; Parliament is suspended."],
        "correctAnswerIndex": 2,
        "explanation": "During a national emergency, Parliament acquires the power to legislate with respect to matters in the State List. The states"
    },
    {
        "id": "ch15-l1-q13",
        "question": "When does the Parliament acquire the power to legislate on a State List subject during",
        "options": ["Never; state laws remain valid.","When the Rajya Sabha passes a resolution.","When the President issues an order declaring that the powers of the state legislature shall be exercised by or under the authority of Parliament.","Only after the Supreme Court approves the takeover."],
        "correctAnswerIndex": 2,
        "explanation": "When President"
    },
    {
        "id": "ch15-l1-q14",
        "question": "Part XI covers Administrative Relations under Articles 256 to 263. A key principle is that the executive power of every state must be exercised so as to ensure compliance with:",
        "options": ["The orders of the local High Court.","The laws made by the Parliament and any existing laws which apply in that state.","The directives of neighboring states.","The demands of the dominant political party."],
        "correctAnswerIndex": 1,
        "explanation": "Article 256 states that the executive power of every state is to be exercised in such a way as to ensure compliance with the laws made by the Parliament."
    },
    {
        "id": "ch15-l1-q15",
        "question": "Under Article 365, what is the consequence if a state fails to comply with or give effect to any administrative directions given by the Centre?",
        "options": ["The State Chief Minister is fined.","The State is excluded from national elections.","It is lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution (leading to President","The Centre must negotiate a treaty with the state."],
        "correctAnswerIndex": 2,
        "explanation": "Article 365 says that where any state has failed to comply with any directions given by the Centre, it will be lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution (meaning Article 356 can be applied)."
    },
    {
        "id": "ch15-l1-q16",
        "question": "The Centre can give directions to the states regarding the construction and maintenance of means of communication declared to be of",
        "options": ["State highways only","Private internet networks","The railways within the state","Local municipal water supplies"],
        "correctAnswerIndex": 2,
        "explanation": "The Centre can direct states regarding the measures to be taken for the protection of the railways within the state."
    },
    {
        "id": "ch15-l1-q17",
        "question": "Which of the following bodies resolves disputes regarding the use, distribution, and control of waters of any inter-state river or river valley?",
        "options": ["The Supreme Court exclusively","The National Green Tribunal","Parliament can legally provide for the adjudication of such disputes, usually by creating an ad hoc Tribunal.","The Inter-State Council"],
        "correctAnswerIndex": 2,
        "explanation": "Article 262 empowers Parliament to provide for the adjudication of any dispute or complaint with respect to the use, distribution and control of waters of any inter-state river or river valley. Parliament enacted the Inter-State Water Disputes Act (1956) creating Tribunals."
    },
    {
        "id": "ch15-l1-q18",
        "question": "Under Article 263, who has the constitutional authority to establish an Inter-State Council if it appears that the public interests would be served by its establishment?",
        "options": ["The Prime Minister","The Parliament","The Chief Justice of India","The President"],
        "correctAnswerIndex": 3,
        "explanation": "Article 263 contemplates the establishment of an Inter-State Council to effect coordination between the states and between Centre and states. The President can establish such a council if at any time it appears to him that the public interest would be served by its establishment."
    },
    {
        "id": "ch15-l1-q19",
        "question": "The",
        "options": ["IAS, IPS, Indian Revenue Service (IRS)","IAS, IPS, Indian Foreign Service (IFS)","IAS, IPS, Indian Forest Service (IFS)","IAS, Indian Railway Traffic Service (IRTS), IPS"],
        "correctAnswerIndex": 2,
        "explanation": "There are currently three all-India services: Indian Administrative Service (IAS), Indian Police Service (IPS), and Indian Forest Service (IFS). (Note: Indian Foreign Service is a Central service, not an All-India service)."
    },
    {
        "id": "ch15-l1-q20",
        "question": "While Members of the All-India Services serve in state administrations, who possesses the",
        "options": ["The State Chief Minister","The State Public Service Commission","The Central Government","The Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The members of these services are recruited and trained by the Centre but are assigned to different states for work. The ultimate control lies with the Central government while immediate control vests with the state governments."
    },
    {
        "id": "ch15-l1-q21",
        "question": "State Public Service Commissions conduct exams for state civil services. However, who appoints and who removes the Chairman and members of a State Public Service Commission?",
        "options": ["Appointed by the Governor, removed by the Governor.","Appointed by the President, removed by the President.","Appointed by the Governor, but removed only by the President.","Appointed by the Chief Minister, removed by the High Court."],
        "correctAnswerIndex": 2,
        "explanation": "The Chairman and members of a state public service commission are appointed by the governor of the state, but they can be removed only by the President (not the governor)."
    },
    {
        "id": "ch15-l1-q22",
        "question": "During a National Emergency (Article 352), what directive power does the Centre acquire over the States",
        "options": ["The Centre can only direct states regarding external affairs.","The Centre becomes entitled to give executive directions to a state on","matter.","The Centre has no administrative power; only legislative.","The states become completely independent administratively to handle the emergency."],
        "correctAnswerIndex": 1,
        "explanation": "During a national emergency, the Centre becomes entitled to give executive directions to a state on"
    },
    {
        "id": "ch15-l1-q23",
        "question": "Which Part of the Constitution deals with Centre-State",
        "options": ["Part X","Part XI","Part XII","Part XIV"],
        "correctAnswerIndex": 2,
        "explanation": "Articles 268 to 293 in Part XII of the Constitution deal with Centre-state financial relations."
    },
    {
        "id": "ch15-l1-q24",
        "question": "Regarding the allocation of taxing powers, who has the exclusive power to levy taxes on subjects enumerated in the Union List?",
        "options": ["The State Legislature","The Finance Commission","The Parliament","Municipal Corporations"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament has exclusive power to levy taxes on subjects enumerated in the Union List (e.g., income tax, customs, corporation tax)."
    },
    {
        "id": "ch15-l1-q25",
        "question": "Article 280 provides for a",
        "options": ["The Prime Minister, every year.","The Parliament, every 10 years.","The President of India, every fifth year or at such earlier time as he considers necessary.","The Supreme Court, when disputes arise."],
        "correctAnswerIndex": 2,
        "explanation": "Article 280 provides for a Finance Commission as a quasi-judicial body. It is constituted by the President of India every fifth year or at such earlier time as he considers necessary."
    },
    {
        "id": "ch15-l1-q26",
        "question": "What is the primary function of the Finance Commission regarding Central and State finances?",
        "options": ["To collect taxes from citizens directly.","To audit the accounts of the central and state governments.","To make recommendations to the President regarding the distribution of net proceeds of taxes between the Centre and the states, and the allocation between the states of the respective shares of such proceeds.","To print currency notes."],
        "correctAnswerIndex": 2,
        "explanation": "The Finance Commission is required to make recommendations regarding the distribution of the net proceeds of taxes to be shared between the Centre and the states, and the allocation between the states of the respective shares of such proceeds."
    },
    {
        "id": "ch15-l1-q27",
        "question": "Besides sharing taxes, the Constitution provides for",
        "options": ["The Contingency Fund of India","The Consolidated Fund of India","The Public Account of India","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Article 275 empowers the Parliament to make grants to the states which are in need of financial assistance. These sums are charged on the Consolidated Fund of India every year."
    },
    {
        "id": "ch15-l1-q28",
        "question": "States can borrow money within India. However, under what condition must a State obtain the explicit",
        "options": ["If the loan amount exceeds 1 Crore rupees.","If the loan is raised from an international bank.","If there is still outstanding any part of a loan made to the State by the Centre, or in respect of which the Centre has given a guarantee.","States never need Central consent to borrow internally."],
        "correctAnswerIndex": 2,
        "explanation": "A state cannot raise any loan without the consent of the Centre, if there is still outstanding any part of a loan made to the state by the Centre or in respect of which a guarantee has been given by the Centre. (In practice, all states have debt to the Centre, meaning they always need consent)."
    },
    {
        "id": "ch15-l1-q29",
        "question": "During a",
        "options": ["The Centre can abolish state taxes.","The President can mandate that all money bills passed by the state legislature be reserved for his consideration.","The Centre takes over the collection of all local taxes.","The state budget is voted on by the Lok Sabha instead of the State Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "During a Financial Emergency, the President can give directions requiring all money bills or other financial bills to be reserved for the consideration of the President after they are passed by the state legislature."
    },
    {
        "id": "ch15-l1-q30",
        "question": "In 1983, the Central Government appointed a major three-member commission to thoroughly examine the working of Centre-State relations. What was the name of this famous commission?",
        "options": ["Rajamannar Committee","Kothari Commission","Sarkaria Commission","Punchhi Commission"],
        "correctAnswerIndex": 2,
        "explanation": "In 1983, the Central government appointed a three-member Commission on Centre-state relations under the chairmanship of R.S. Sarkaria, a retired judge of the Supreme Court."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch15-l2-q1",
        "question": "Consider the constitutional division of legislative powers under the Seventh Schedule. While the Union has 98 subjects (originally 97) and the State has 59 (originally 66), the Concurrent List has 52 (originally 47). What was the primary constitutional justification provided by the framers for including a Concurrent List, unlike the classical US Federation which lacks one?",
        "options": ["To allow states to gradually take over Union subjects over a 50-year transition period.","To provide a constitutional space where both Centre and States can legislate on matters which are not singularly of national or local importance, but where uniformity across the nation is desirable though not strictly essential (e.g., criminal law, marriage).","To serve as a temporary list of subjects that the Supreme Court must eventually assign to either the Union or the States.","To ensure that whatever law the State makes on these subjects can never be overridden by the Centre."],
        "correctAnswerIndex": 1,
        "explanation": "The Concurrent List (borrowed from the Australian Constitution) provides flexibility. Certain subjects like Criminal Law or Marriage don"
    },
    {
        "id": "ch15-l2-q2",
        "question": "Assertion (A): The Parliament is endowed with",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is generally true; only Parliament has unlimited extra-territorial jurisdiction. Reason (R) is FALSE. Due to the"
    },
    {
        "id": "ch15-l2-q3",
        "question": "Under Article 252, Parliament can legislate on a State List subject if the legislatures of two or more States pass a resolution requesting it. Which of the following prominent Central acts was passed using this specific constitutional mechanism?",
        "options": ["The Right to Information Act, 2005","The Right to Education Act, 2009","The Wildlife (Protection) Act, 1972","The National Food Security Act, 2013"],
        "correctAnswerIndex": 2,
        "explanation": "The Wildlife Protection Act, 1972, the Water (Prevention and Control of Pollution) Act, 1974, and the Transplantation of Human Organs Act, 1994, are classic examples. States surrendered their power on these specific subjects to Parliament to ensure uniform national legislation."
    },
    {
        "id": "ch15-l2-q4",
        "question": "The",
        "options": ["If the State law was passed with a 2/3rds special majority, it permanently overrides the Central law.","If the State law was reserved for the consideration of the President and received his assent, it prevails over an *existing* Central law within that specific State.","If the State approaches the Supreme Court, the Court automatically nullifies the Central law for that state.","If the State has a higher population than 50 million, its laws supersede Central laws."],
        "correctAnswerIndex": 1,
        "explanation": "This is a vital safeguard for state autonomy in the Concurrent sphere. If a state wants a law (say, on land acquisition) that conflicts with a Central law, it can pass it, but the Governor MUST reserve it for the President. If the President (acting on the Union Cabinet"
    },
    {
        "id": "ch15-l2-q5",
        "question": "Consider the financial relations and the concept of",
        "options": ["Surcharges are collected by the States on behalf of the Centre, saving administrative costs.","The proceeds of a Surcharge form part of the Consolidated Fund of India and exclusively belong to the Centre; they are expressly EXCLUDED from the divisible pool of taxes that must be shared with the States.","Surcharges can only be levied during a National Emergency.","States are legally required to match the value of the surcharge from their own funds."],
        "correctAnswerIndex": 1,
        "explanation": "This is a major point of friction in Centre-State relations. While regular income tax or corporate tax goes into the divisible pool (currently 41% given to states as per the 15th FC), whatever revenue the Centre gathers via"
    },
    {
        "id": "ch15-l2-q6",
        "question": "Examine the",
        "options": ["The State must bear the cost fully, as it is a subordinate administrative unit.","The Constitution mandates that the Centre must compensate the State for any extra costs incurred in executing Central laws or directions, the quantum of which is determined by an arbitrator appointed by the Chief Justice of India if they cannot agree.","The State has the right to refuse to implement the law unless paid first.","The extra cost is deducted from the State"],
        "correctAnswerIndex": 1,
        "explanation": "Article 258(3) contains this equitable provision. If the Centre delegates executive functions or issues directions (e.g., maintaining national highways) that force the State agencies to spend extra money, the Government of India is constitutionally obligated to pay that extra cost. An arbitrator (appointed by the CJI) determines the sum if negotiations fail."
    },
    {
        "id": "ch15-l2-q7",
        "question": "In the context of the Zonal Councils, created under the States Reorganisation Act of 1956, they are statutory (not constitutional) bodies designed to promote cooperative federalism. Who serves as the common Chairman of all the five Zonal Councils in India?",
        "options": ["The Prime Minister","The President of India","The Union Home Minister","The Chief Minister of the largest state in the respective zone (rotating annually)"],
        "correctAnswerIndex": 2,
        "explanation": "The Union Home Minister is the common Chairman of all five Zonal Councils (Northern, Central, Eastern, Western, Southern). The Chief Ministers of the states in the zone serve as Vice-Chairmen, rotating annually."
    },
    {
        "id": "ch15-l2-q8",
        "question": "The Sarkaria Commission (1983) made profound recommendations regarding Centre-State relations. Which of the following was one of its most critical recommendations designed specifically to protect democratically elected State governments?",
        "options": ["That Article 356 (President","That Article 356 must be used very sparingly, only as a measure of","when all other constitutional alternatives to rectify the failure of constitutional machinery in the state have been exhausted.","That the Governor should be directly elected by the people of the state.","That the Concurrent List should be abolished entirely."],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission did NOT recommend abolishing Article 356 (unlike the Rajamannar Committee). However, to stop its rampant misuse, it strongly advocated that it should be an absolute"
    },
    {
        "id": "ch15-l2-q9",
        "question": "Assertion (A): The Centre enjoys absolute immunity from taxation by State governments on its properties situated within a state.\\nReason (R): Under the doctrine of mutual immunity from taxation, properties of the Union (e.g., railways, post offices) are entirely exempt from all taxes imposed by a State or local authority (like municipalities), unless Parliament by law permits otherwise.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Article 285 provides that the property of the Union is exempt from all taxes imposed by a State or by any authority within a State (like a municipal corporation taxing a central railway station structure), establishing financial sovereignty of the Centre over its assets."
    },
    {
        "id": "ch15-l2-q10",
        "question": "Consider the inverse of the previous rule regarding taxation immunities (Article 289). Property and income of a State are generally exempt from Union taxation. However, what is the crucial exception where the Centre CAN constitutionally tax a State",
        "options": ["The Centre can tax a State","The Centre can tax the commercial trade or business activities carried on by a State (e.g., a State-run profitable corporation like a state transport service), if Parliament provides for it by law.","The Centre can tax the salary of the Chief Minister.","The Centre can tax the land revenue collected by the State."],
        "correctAnswerIndex": 1,
        "explanation": "While the sovereign functions and general property of a state are exempt from central tax (Art 289), the Constitution explicitly states that this exemption does NOT prevent the Union from imposing a tax on any trade or business (commercial activity) carried on by or on behalf of the Government of a State."
    },
    {
        "id": "ch15-l2-q11",
        "question": "Under Article 258, the President can, with the consent of the State Government, entrust either conditionally or unconditionally to that Government or its officers, functions relating to any matter to which the executive power of the Union extends. What distinct, reciprocal power does Article 258A provide regarding state executive functions?",
        "options": ["It empowers the Supreme Court to mandate such delegation.","It empowers a State Governor, with the consent of the Central Government, to entrust state executive functions to the Central Government or its officers.","It prevents states from delegating any power whatsoever.","It allows states to bypass the President and negotiate directly with the UN."],
        "correctAnswerIndex": 1,
        "explanation": "Delegation is a two-way street for administrative convenience. Just as the Centre can entrust its functions to state officers (Art 258), the 7th Amendment (1956) added Art 258A, allowing the Governor of a State to reciprocally delegate the execution of state functions to Central officers."
    },
    {
        "id": "ch15-l2-q12",
        "question": "Regarding legislative relations, what happens if Parliament passes a law (Act",
        "options": ["Act","is summarily dismissed by the Governor.","Act","(the Central law) prevails, and Act","(the State law) is inoperative to the extent of the repugnancy, but only as long as Act","remains in force (usually 1 year after the resolution expires).","Act","permanently overrides Act","instantly.","Both Acts are suspended until reviewed by the CJI."],
        "correctAnswerIndex": 1,
        "explanation": "When Parliament legislates under Art 249, it doesn"
    },
    {
        "id": "ch15-l2-q13",
        "question": "Consider the constitutional constraints on state taxing powers regarding inter-state commerce. Under Article 286, what specific prohibition is placed on a State Legislature concerning the imposition of sales tax?",
        "options": ["States are prohibited from levying sales tax on any agricultural produce.","States cannot impose a tax on the supply of goods or services where such supply takes place in the course of inter-state trade or commerce. Only Parliament can levy the Integrated Goods and Services Tax (IGST) in these scenarios.","States cannot levy sales tax on items bought by women.","States must surrender all sales tax revenue to the Centre."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent states from erecting trade barriers and destroying the common economic market of India, Art 286 strictly prohibits a state from taxing a transaction (sale/purchase) that occurs across state lines (inter-state) or in the course of international import/export. Only the Centre can tax inter-state supply (e.g., via IGST)."
    },
    {
        "id": "ch15-l2-q14",
        "question": "The",
        "options": ["Statutory grants are for individuals, discretionary are for corporations.","Statutory grants are given strictly on the binding recommendation of the Finance Commission (charged on the Consolidated Fund); Discretionary grants (historically managed by the Planning Commission) are made voluntarily by the Centre for public purposes, without any legal compulsion.","Statutory grants can only be used for defense; discretionary for education.","There is no functional difference; they are just different names."],
        "correctAnswerIndex": 1,
        "explanation": "Art 275 grants are mandatory, structured financial transfers based on the Finance Commission"
    },
    {
        "id": "ch15-l2-q15",
        "question": "Assertion (A): While the Constitution provides a clear division of legislative powers, it does not guarantee parallel financial resources to the States, creating",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Unlike the legislative division (which gives states substantial subjects to govern like Police/Health), the financial division explicitly favors the Centre, ensuring that the Union controls the vast majority of national revenue. This structural"
    },
    {
        "id": "ch15-l2-q16",
        "question": "When evaluating the Punchhi Commission",
        "options": ["It recommended that Governors serve for life.","It recommended the Governor should only be removed by a resolution of the State Legislative Assembly, ending the","doctrine.","It proposed providing the Governor with a fixed tenure of 5 years and determining their removal through a process similar to the impeachment of the President (involving Parliament), rather than by a simple central executive order.","It suggested abolishing the post entirely."],
        "correctAnswerIndex": 2,
        "explanation": "The Punchhi Commission noted that the"
    },
    {
        "id": "ch15-l2-q17",
        "question": "Article 253 of the Constitution empowers the Parliament to make laws for the whole or any part of the territory of India for implementing International Treaties, Agreements, or Conventions. What is the profound federal implication of this specific Article?",
        "options": ["It forbids Parliament from signing treaties.","It permits Parliament to single-handedly legislate on subjects squarely enumerated in the State List, if such legislation is genuinely necessary to implement an international treaty obligation, effectively overriding state autonomy in that specific instance.","It mandates that all international treaties must be ratified by all 28 states.","It forces the Supreme Court to translate treaties."],
        "correctAnswerIndex": 1,
        "explanation": "This is a massive unitary feature. To ensure the nation speaks with one voice globally, Art 253 allows the Centre to bypass the 7th Schedule. If India signs a UN treaty on"
    },
    {
        "id": "ch15-l2-q18",
        "question": "Consider the borrowing powers under Articles 292 and 293. While the Central Government can borrow domestically or globally upon the security of the Consolidated Fund of India, what is the absolute restriction placed on the borrowing power of the States?",
        "options": ["States can only borrow from the World Bank, not the IMF.","States are constitutionally prohibited from borrowing directly from foreign governments or international financial institutions outside the territory of India.","States can borrow internationally only if they pay a 10% fee to the Centre.","States are not allowed to borrow any money whatsoever."],
        "correctAnswerIndex": 1,
        "explanation": "State governments cannot borrow externally (from other countries or entities like the World Bank directly on their own sovereign guarantee). They can only borrow internally within the territory of India (from the market or the Central government itself). All external national debt is managed solely by the Centre to maintain macroeconomic stability."
    },
    {
        "id": "ch15-l2-q19",
        "question": "The Inter-State Council was established remarkably late, in 1990, via a Presidential Order based on the recommendations of which major commission?",
        "options": ["The Kothari Commission","The Punchhi Commission","The Second Administrative Reforms Commission","The Sarkaria Commission on Centre-State Relations"],
        "correctAnswerIndex": 3,
        "explanation": "Although Article 263 existed since 1950, it was essentially dormant. The Sarkaria Commission (1983-88) strongly recommended creating a permanent Inter-State Council as an independent national forum for consultation. The V.P. Singh government finally established it in 1990."
    },
    {
        "id": "ch15-l2-q20",
        "question": "If a State Legislature passes a Bill seeking to acquire property compulsorily for a public purpose, under what condition does it require the assent of the President to be legally valid?",
        "options": ["It always requires Presidential assent.","Under Article 31A, a State law dealing with the acquisition of an","(agrarian reform) must be reserved for the consideration of the President and receive his assent to be immunized against challenges based on violating Fundamental Rights (Articles 14, 19).","Only if the land belongs exclusively to a foreign national.","Never; land is exclusively a State subject."],
        "correctAnswerIndex": 1,
        "explanation": "While land is a state subject, radical agrarian reform laws inherently violated the Right to Property/Equality. To save these state laws from being struck down by courts, the Constitution (First Amendment) introduced Art 31A. It provides immunity to these laws, but ONLY IF they have been reserved for and received the President"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch15-l3-q1",
        "question": "Consider the profound implications of Article 250 acting in concert with Article 352 (National Emergency). If the Parliament passes a law on a subject traditionally residing in the State List (",
        "options": ["It permanently overrides all State laws and becomes part of the permanent legal code of India.","It can be amended by the State Assembly immediately.","The law remains operative only during the period of the emergency and officially ceases to have effect on the expiration of six months after the emergency has ceased to operate.","It is automatically subjected to judicial review and repealed immediately."],
        "correctAnswerIndex": 2,
        "explanation": "Article 250 empowers Parliament to legislate on State subjects during a Proclamation of Emergency. However, this power is strictly"
    },
    {
        "id": "ch15-l3-q2",
        "question": "The Supreme Court’s interpretation of",
        "options": ["It would strike down the entire Act instantly because it touches the Union List.","It would sever the offending portions and declare the rest valid.","If the Court determines the","(pith and substance) of the Act genuinely centers on Agricultural Indebtedness, it will uphold the Act as perfectly valid, treating the encroachment on Promissory Notes as merely","and constitutionally insignificant.","It would declare a Constitutional Emergency and suspend the State Assembly."],
        "correctAnswerIndex": 2,
        "explanation": "This is the classic application of Pith and Substance (e.g., Prafulla Kumar Mukherjee v. Bank of Commerce case). The lists are not watertight compartments. If a law genuinely belongs to its intended list, incidental encroachment into another list does not invalidate it. This doctrine powerfully protects state legislative autonomy from hyper-technical central challenges."
    },
    {
        "id": "ch15-l3-q3",
        "question": "Assertion (A): The President’s absolute veto over State Bills reserved by the Governor under Article 201 constitutes a severe breach in the federal principle of coordinate sovereignties.\\nReason (R): Unlike the suspensive veto applied to Parliamentary Bills (which Parliament can override), the State Legislature possesses absolutely no constitutional mechanism to override a Presidential veto, effectively granting the Centre absolute power to kill inconvenient state legislation.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. If the President returns a State Bill, the State Assembly has 6 months to reconsider it. BUT, even if they pass it again (with or without amendments) and send it back to the President, the President is NOT bound to give assent (unlike for Union Bills). The President can kill it permanently, representing a huge unitary bias."
    },
    {
        "id": "ch15-l3-q4",
        "question": "The",
        "options": ["When evaluating the colour schemes of state flags.","When determining if the President","When a Legislature (Union or State) completely lacks the constitutional competence to legislate on a specific subject, yet attempt to covertly achieve the same result by drafting a law that superficially appears to fall within their permitted list, thereby committing a",".","When evaluating environmental laws concerning pollution."],
        "correctAnswerIndex": 2,
        "explanation": "If a state cannot directly tax"
    },
    {
        "id": "ch15-l3-q5",
        "question": "Consider the financial dimension of Centre-State relations enshrined in Article 268 (Duties levied by the Union but collected and appropriated by the States). Which of the following taxes prominently falls perfectly under this unique category, ensuring that while the Centre mandates the rate, the States retain the entire revenue?",
        "options": ["Income Tax","Corporation Tax","Stamp duties on Bills of Exchange and Promissory Notes (e.g., in financial transactions).","Customs Duties"],
        "correctAnswerIndex": 2,
        "explanation": "Article 268 covers Stamp Duties on bills of exchange, cheques, promissory notes, policies of insurance, transfer of shares, etc. The Union (Parliament) levies them (fixes uniform rates nationally for economic stability), but the States collect them within their territories and keep the money entirely; it never enters the Consolidated Fund of India."
    },
    {
        "id": "ch15-l3-q6",
        "question": "Analyze the implications of the 101st Amendment Act (GST) on the",
        "options": ["Yes; GST applies uniformly to all government commercial activities (e.g., State Transport, Railway freight), destroying the previous immunities completely.","No; because GST is explicitly defined as an indirect tax, it technically falls outside the scope of","immunities defined in 285 & 289. Therefore, if a State engages in commercial","(e.g., selling timber), it must legally pay Central GST/IGST just like a private corporation.","Yes; but the Supreme Court blocked its implementation.","No; the Centre still cannot tax any commercial activity of a state."],
        "correctAnswerIndex": 1,
        "explanation": "The immunities in 285 & 289 relate primarily to direct taxes (property/income). GST is an indirect tax on"
    },
    {
        "id": "ch15-l3-q7",
        "question": "Which of the following bodies is a constitutional entity established solely to promote",
        "options": ["The Inter-State Council","The Finance Commission","The Planning Commission (replaced by NITI Aayog)","The Zonal Councils"],
        "correctAnswerIndex": 2,
        "explanation": "The Planning Commission (created by executive resolution in 1950, NOT constitutional) wielded immense power over discretionary grants (Art 282) and state five-year plans. States often resented it acting as a"
    },
    {
        "id": "ch15-l3-q8",
        "question": "Assertion (A): Under Article 356 (President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are entirely FALSE. This is a critical distinction. A National Emergency (Art 352) allows the suspension of Fundamental Rights (Arts 358 & 359). However, President"
    },
    {
        "id": "ch15-l3-q9",
        "question": "Regarding",
        "options": ["The Centre cannot deploy forces without the State","The Centre must declare an Emergency first.","The Centre has the constitutional authority to deploy its armed forces in any State to maintain public order and resolve internal disturbances, even if the State Government explicitly opposes or refuses to consent to the deployment.","Only the Governor can request troops."],
        "correctAnswerIndex": 2,
        "explanation": "While"
    },
    {
        "id": "ch15-l3-q10",
        "question": "Evaluate the role of the",
        "options": ["The Finance Commission includes State Chief Ministers, the GST Council does not.","The Finance Commission’s recommendations are largely binding, while the GST Council is entirely advisory with no statutory teeth.","The Finance Commission is an expert body unilaterally appointed by the Centre (President) which dictates terms downwards. The GST Council is a joint constitutional forum comprising both Union Ministers AND State Finance Ministers, where decisions require a 3/4ths weighted majority (States have 2/3rd vote weight, Centre 1/3rd), guaranteeing that neither the Centre alone nor the States alone can enforce a major tax change.","The Finance Commission handles indirect taxes, the GST Council handles direct taxes."],
        "correctAnswerIndex": 2,
        "explanation": "This highlights the paradigm shift. The Finance Commission is central-heavy (appointed by the President). The GST Council (Art 279A) is truly federal; it structurally forces the Centre and States to sit at a common table. The voting arithmetic (Centre = 33.3%, States combined = 66.6%, needing 75% to pass) legally mandates cooperation and consensus-building for every single tax rate change."
    },
    {
        "id": "ch15-l3-q11",
        "question": "Recall the 1994 S.R. Bommai judgment. Regarding the imposition of President",
        "options": ["The Governor must conduct exit polls.","The determination of whether the Chief Minister has lost the confidence of the Assembly MUST be tested strictly on the","(via a trust vote) and NOT based on the subjective, private assessment of the Governor or the parading of MLAs at the Raj Bhavan.","The Governor must consult the Chief Justice of India.","The Governor must wait for the next general election."],
        "correctAnswerIndex": 1,
        "explanation": "Historically, Governors dismissed CMs by claiming they"
    },
    {
        "id": "ch15-l3-q12",
        "question": "Under the provisions of the Inter-State River Water Disputes Act, 1956 (enacted under Article 262), Parliament has significantly curtailed the power of the Judiciary. Which specific judicial power is explicitly barred concerning these tribunals?",
        "options": ["The Supreme Court cannot appoint the tribunal members.","Neither the Supreme Court nor any other court shall have jurisdiction in respect of any water dispute which may be referred to such a tribunal under this Act, barring original jurisdiction (Article 131) and forcing reliance on the Tribunal","The Supreme Court can only hear appeals after 10 years.","High Courts can hear appeals, but the Supreme Court cannot."],
        "correctAnswerIndex": 1,
        "explanation": "Article 262(2) allows Parliament to exclude the jurisdiction of the SC. The 1956 Act explicitly states that once a dispute is referred to a Tribunal, neither the SC nor any other court has jurisdiction. (Note: The SC technically still entertains Special Leave Petitions under Art 136 regarding the *implementation* of the award, but the core dispute must be handled by the Tribunal)."
    },
    {
        "id": "ch15-l3-q13",
        "question": "Assertion (A): The Union Government can legally direct a State Government regarding the language to be used in its administration and the educational facilities for linguistic minority groups.\\nReason (R): Under Articles 347 and 350A, the President can direct a State to officially recognize a specific language if a substantial proportion of the population desires it, and mandate that States provide adequate facilities for instruction in the mother-tongue at the primary stage of education.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. This administrative directive power serves to protect linguistic minorities. It prevents the majoritarian imposition of a single regional language on diverse populations within a state, allowing the Centre to intervene (via Presidential directives) to safeguard constitutional linguistic rights."
    },
    {
        "id": "ch15-l3-q14",
        "question": "Consider the constitutional mechanics of the",
        "options": ["Approval from the RBI.","No money can be withdrawn from the Consolidated Fund of a State EXCEPT under appropriation made by law passed by the State Legislature (the passing of the Appropriation Bill following the budget debate).","Approval from the President.","Approval from the Finance Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Financial sovereignty lies with the legislature. The executive cannot spend a single rupee blindly. To handle sudden emergencies when the assembly isn"
    },
    {
        "id": "ch15-l3-q15",
        "question": "The Sarkaria Commission investigated the notorious friction between Governors and Chief Ministers. Regarding the appointment of a Governor, what strong",
        "options": ["The Governor must belong to the ruling party at the Centre.","The Governor must be an active politician from a neighboring state.","The Chief Minister of the concerned State must be genuinely consulted prior to the appointment of the Governor; and the appointee should be an eminent person from outside the State, detached from active local politics.","The Governor should be chosen via an online poll."],
        "correctAnswerIndex": 2,
        "explanation": "To ensure the Governor acts as an impartial constitutional head rather than a political agent, Sarkaria (and later Punchhi) strongly recommended consulting the CM and appointing apolitical, eminent outsiders. The frequent ignoring of this convention (appointing active politicians contrary to the CM"
    },
    {
        "id": "ch15-l3-q16",
        "question": "Assertion (A): Article 365 fundamentally strengthens the coercive power of Article 356 (President",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. Article 356 requires a"
    },
    {
        "id": "ch15-l3-q17",
        "question": "Examine the",
        "options": ["Never; Parliament","When the proposed tax is unpopular.","If the Court, interpreting the entries broadly, finds that the substance of the newly proposed Central tax subtly overlaps or attempts to encompass an area already implicitly covered by a specific taxing entry assigned to the State List.","If the tax rate exceeds 30%."],
        "correctAnswerIndex": 2,
        "explanation": "The Residuary power is truly"
    },
    {
        "id": "ch15-l3-q18",
        "question": "Regarding",
        "options": ["The State","The Governor of the State takes command.","Despite operating in the State at its request, the Central armed forces remain strictly under the command, control, and superintendence of the Central Government (Ministry of Home Affairs), not the State authorities.","The local District Magistrate acts as the Supreme Commander."],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment added Entry 2A to the Union List, explicitly stating that deployment of armed forces of the Union in aid of civil power remains under Central control. While they assist the State Police, the ultimate chain of command leads back to Delhi, preventing State CMs from issuing direct operational orders to Union troops."
    },
    {
        "id": "ch15-l3-q19",
        "question": "In analyzing the Punchhi Commission",
        "options": ["Abolishing the Concurrent List entirely.","Before introducing a Bill on a Concurrent subject, the Centre must engage in broad-based prior consultation with States through the Inter-State Council mechanism to build consensus, rather than simply passing a law and imposing","on existing state laws.","Giving States the right to veto Central Concurrent laws.","Only allowing the Supreme Court to draft Concurrent laws."],
        "correctAnswerIndex": 1,
        "explanation": "A major grievance of States is that the Centre unilaterally passes laws on the Concurrent List (like Education or Forests), instantly overriding carefully crafted State policies. Punchhi recommended establishing a strong constitutional convention of"
    },
    {
        "id": "ch15-l3-q20",
        "question": "Consider the profound impact of the",
        "options": ["The President can seize all funds in the State Consolidated Funds.","The President must double the financial grants to the affected states.","The President can, by order, massively modify or entirely suspend the constitutional provisions relating to the distribution of revenues between the Centre and the States, freezing devolutions and grants indefinitely for the remainder of the financial year.","The President has no power over financial distribution during Article 352."],
        "correctAnswerIndex": 2,
        "explanation": "During a National Emergency fighting a war or rebellion, the Centre needs absolute control over all national resources. Article 354 allows the President to unilaterally suspend the recommendations of the Finance Commission and halt the sharing of taxes and grants with the States, legally starving them of funds to finance the national war effort."
    }
];

export const CHAPTER_15_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
