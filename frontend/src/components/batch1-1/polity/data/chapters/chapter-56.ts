import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch56-l1-q1",
        "question": "Which of the following statements regarding the territorial jurisdiction of Parliament is correct?",
        "options": ["The Parliament can make laws for the whole or any part of the territory of India.","The Parliament can only make laws for states, not Union Territories.","The Parliament","The Parliament cannot make laws for newly acquired territories without state consent."],
        "correctAnswerIndex": 0,
        "explanation": "The Parliament has the authority to make laws for the whole or any part of the territory of India."
    },
    {
        "id": "ch56-l1-q2",
        "question": "Does a law made by a State Legislature generally apply outside the boundaries of that state?",
        "options": ["Yes, it applies throughout India.","No, except when there is a","between the state and the object.","Yes, if approved by the Governor.","No, under no circumstances can it apply outside the state."],
        "correctAnswerIndex": 1,
        "explanation": "A state law does not apply outside the state, except when there is a"
    },
    {
        "id": "ch56-l1-q3",
        "question": "Which legislative body in India has the exclusive power to make",
        "options": ["State Legislatures","The Inter-State Council","The Parliament","The Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The Parliament alone has the power to make extra-territorial laws applicable to Indian citizens and their property globally."
    },
    {
        "id": "ch56-l1-q4",
        "question": "The laws of Parliament are NOT automatically applicable to which specific areas without the President",
        "options": ["The certain Union Territories (A&N, Lakshadweep, D&NH and D&D).","Scheduled Areas (5th Schedule).","Tribal Areas (6th Schedule).","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Parliamentary laws can be modified, excepted, or restricted in their application to certain UTs, 5th Schedule, and 6th Schedule areas by the President or Governor."
    },
    {
        "id": "ch56-l1-q5",
        "question": "The Constitution provides for a three-fold distribution of legislative subjects in the ______ Schedule.",
        "options": ["Seventh","Eighth","Ninth","Tenth"],
        "correctAnswerIndex": 0,
        "explanation": "The Seventh Schedule of the Constitution provides for a three-fold distribution of legislative subjects."
    },
    {
        "id": "ch56-l1-q6",
        "question": "The",
        "options": ["100","61","52","110"],
        "correctAnswerIndex": 0,
        "explanation": "Currently, there are 100 subjects in the Union List (originally 97)."
    },
    {
        "id": "ch56-l1-q7",
        "question": "The",
        "options": ["61","100","52","47"],
        "correctAnswerIndex": 0,
        "explanation": "Currently, there are 61 subjects in the State List (originally 66)."
    },
    {
        "id": "ch56-l1-q8",
        "question": "The",
        "options": ["52","61","100","42"],
        "correctAnswerIndex": 0,
        "explanation": "Currently, there are 52 subjects in the Concurrent List (originally 47)."
    },
    {
        "id": "ch56-l1-q9",
        "question": "The power to make laws with respect to",
        "options": ["The State Legislature","The Parliament","Both","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The power to make laws with respect to Residuary Subjects is exclusively vested in the Parliament."
    },
    {
        "id": "ch56-l1-q10",
        "question": "The 42nd Amendment Act (1976) transferred five subjects from the State List to the Concurrent List. These include Education, Forests, Weights and Measures, Protection of Wild Animals, and:",
        "options": ["Administration of Justice (except SC and HCs)","Police","Agriculture","Public Health"],
        "correctAnswerIndex": 0,
        "explanation": "The fifth subject transferred to the Concurrent List was Administration of Justice (constitution and organization of all courts except the Supreme Court and the High Courts)."
    },
    {
        "id": "ch56-l1-q11",
        "question": "Under Article 249, the Parliament can legislate on a State List subject if the ______ passes a resolution supported by 2/3rd of members present and voting.",
        "options": ["Lok Sabha","Rajya Sabha","State Assembly","Zonal Council"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha must pass a resolution supported by two-thirds of the members present and voting to empower Parliament to legislate on a State subject in the national interest."
    },
    {
        "id": "ch56-l1-q12",
        "question": "A resolution passed under Article 249 remains in force for a period not exceeding:",
        "options": ["6 months","1 year","2 years","5 years"],
        "correctAnswerIndex": 1,
        "explanation": "Such a resolution remains in force for a period not exceeding one year, though it can be renewed any number of times."
    },
    {
        "id": "ch56-l1-q13",
        "question": "During a National Emergency (Article 250), the Parliament acquires the power to legislate with respect to matters in the State List. These laws cease to have effect on the expiration of ______ after the emergency has ceased to operate.",
        "options": ["3 months","6 months","9 months","1 year"],
        "correctAnswerIndex": 1,
        "explanation": "Such laws become inoperative on the expiration of six months after the emergency has ceased to operate."
    },
    {
        "id": "ch56-l1-q14",
        "question": "If the legislatures of ______ or more states pass a resolution requesting Parliament to enact laws on a State List subject, Parliament can do so (Article 252).",
        "options": ["Two","Three","Five","All"],
        "correctAnswerIndex": 0,
        "explanation": "If two or more states pass a resolution, Parliament can enact laws on a State List subject for those states."
    },
    {
        "id": "ch56-l1-q15",
        "question": "A law passed under Article 252 can be amended or repealed only by:",
        "options": ["The participating States","The Parliament","The President","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Any such law made by Parliament under Article 252 can be amended or repealed only by the Parliament and not by the legislatures of those states."
    },
    {
        "id": "ch56-l1-q16",
        "question": "Does Parliament have the power to make laws on any subject in the State List for implementing international treaties or agreements?",
        "options": ["Yes, under Article 253.","No, it requires a Constitutional Amendment under Article 368.","Yes, provided the concerned states pass a resolution.","No, the state list is exclusively for state legislatures regardless of international treaties."],
        "correctAnswerIndex": 0,
        "explanation": "Article 253 grants Parliament the power to make laws on any subject in the State List to implement international treaties or agreements."
    },
    {
        "id": "ch56-l1-q17",
        "question": "During President",
        "options": ["Plenary","Non-existent","Restricted to financial matters","Limited to 6 months"],
        "correctAnswerIndex": 0,
        "explanation": "During President"
    },
    {
        "id": "ch56-l1-q18",
        "question": "What role does the Governor play regarding bills passed by the state legislature that may affect the powers of the High Court?",
        "options": ["The Governor can veto the bill directly.","The Governor must return the bill to the state legislature.","The Governor must reserve such bills for the consideration of the President.","The Governor has no special powers and must give assent."],
        "correctAnswerIndex": 2,
        "explanation": "The Governor is obligated to reserve certain bills, particularly those endangering the position of the High Court, for the consideration of the President."
    },
    {
        "id": "ch56-l1-q19",
        "question": "Certain bills, such as those imposing restrictions on the freedom of trade and commerce, can be introduced in the state legislature only with:",
        "options": ["The previous sanction of the President.","The approval of the Inter-State Council.","A two-thirds majority of the State Assembly.","The recommendation of the Finance Commission."],
        "correctAnswerIndex": 0,
        "explanation": "Bills imposing reasonable restrictions on the freedom of trade and commerce within the state can be introduced only with the previous sanction of the President."
    },
    {
        "id": "ch56-l1-q20",
        "question": "During a Financial Emergency, the President can direct the State to reserve ______ for his consideration.",
        "options": ["Ordinary Bills","Money Bills and other Financial Bills","Only Amendment Bills","No bills"],
        "correctAnswerIndex": 1,
        "explanation": "During a Financial Emergency, the President can direct the state to reserve all money bills and other financial bills for his consideration."
    },
    {
        "id": "ch56-l1-q21",
        "question": "In case of an overlap between the Union List and the State List, the ______ List prevails.",
        "options": ["Union","State","Neither","They are harmonized"],
        "correctAnswerIndex": 0,
        "explanation": "Under the doctrine of federal supremacy, the Union List prevails over the State List in case of an overlap or conflict."
    },
    {
        "id": "ch56-l1-q22",
        "question": "In case of an overlap between the Union List and the Concurrent List, the ______ List prevails.",
        "options": ["Concurrent","Union","Neither","State"],
        "correctAnswerIndex": 1,
        "explanation": "The Union List prevails over the Concurrent List in case of an overlap."
    },
    {
        "id": "ch56-l1-q23",
        "question": "In case of a conflict between a Central Law and a State Law on a Concurrent subject, the Central Law prevails. However, a State Law prevails if it has received the ______.",
        "options": ["Assent of the Governor","Assent of the President","Approval of the Rajya Sabha","Approval of the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "If the State law has been reserved for the consideration of the President and has received his assent, it prevails in that state despite the conflict."
    },
    {
        "id": "ch56-l1-q24",
        "question": "The",
        "options": ["If a person is a citizen","Whether a legislature has encroached upon the sphere of another","The salary of judges","The boundaries of a state"],
        "correctAnswerIndex": 1,
        "explanation": "This doctrine is applied when a law enacted by one legislature is challenged for encroaching upon the domain of another, focusing on its true nature and character."
    },
    {
        "id": "ch56-l1-q25",
        "question": "What does the",
        "options": ["A legislature can legislate on any subject given a genuine motive.","The legislature cannot do indirectly what it cannot do directly.","Legislation must be enacted in public interest.","Laws passed during an emergency are temporary."],
        "correctAnswerIndex": 1,
        "explanation": "This doctrine tests the competence of the legislature and implies that it cannot do indirectly what it has no direct power to do."
    },
    {
        "id": "ch56-l1-q26",
        "question": "Which Article deals with the",
        "options": ["Article 245","Article 248","Article 250","Article 254"],
        "correctAnswerIndex": 1,
        "explanation": "Article 248 grants the residuary powers of legislation exclusively to the Parliament."
    },
    {
        "id": "ch56-l1-q27",
        "question": "The power to levy GST (Goods and Services Tax) is a special provision introduced by the ______ Amendment Act.",
        "options": ["100th","101st","102nd","99th"],
        "correctAnswerIndex": 1,
        "explanation": "The 101st Amendment Act of 2016 introduced special provisions for the Goods and Services Tax (GST)."
    },
    {
        "id": "ch56-l1-q28",
        "question": "Article 246A gives ______ the power to make laws with respect to GST.",
        "options": ["Parliament only","State Legislatures only","Both Parliament and State Legislatures concurrently","The GST Council"],
        "correctAnswerIndex": 2,
        "explanation": "Article 246A gives concurrent power to both the Parliament and the State Legislatures to make laws with respect to GST."
    },
    {
        "id": "ch56-l1-q29",
        "question": "Which body has the",
        "options": ["Parliament","State Legislature","Local Bodies","Finance Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The Parliament has exclusive power to make laws concerning GST for inter-state trade or commerce (IGST)."
    },
    {
        "id": "ch56-l1-q30",
        "question": "The",
        "options": ["Banking reforms","Centre-State relations","Electoral reforms","Border disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission was appointed in 1983 to examine and review the working of the existing arrangements between the Union and States."
    },
    {
        "id": "ch56-l1-q31",
        "question": "If a state legislature enacts a law on",
        "options": ["Doctrine of Severability.","Doctrine of Pith and Substance.","Doctrine of Colourable Legislation.","Doctrine of Pleasure."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Pith and Substance protects a law if its true nature and character fall within the legislature"
    },
    {
        "id": "ch56-l1-q32",
        "question": "The",
        "options": ["Motive","Competence (Power)","Wisdom","Popularity"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine tests the competence of the legislature to enact a law, ensuring it cannot indirectly legislate on subjects beyond its power, irrespective of its motive."
    },
    {
        "id": "ch56-l1-q33",
        "question": "If a part of a statute is unconstitutional while the rest is valid, and the valid part can stand independently, the court will apply the:",
        "options": ["Doctrine of Eclipse.","Doctrine of Severability.","Doctrine of Harmonious Construction.","Doctrine of Territorial Nexus."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Severability allows the valid portion of a law to survive if it can be separated from the unconstitutional part without altering the legislature"
    },
    {
        "id": "ch56-l1-q34",
        "question": "The",
        "options": ["There is a conflict between two provisions of the same Act or between two different lists.","The Governor refuses to sign a bill.","The Centre and State agree on a policy.","A law is partially implemented."],
        "correctAnswerIndex": 0,
        "explanation": "Courts use the Doctrine of Harmonious Construction to read conflicting provisions in a way that gives effect to both, avoiding a situation where one provision renders another dead."
    },
    {
        "id": "ch56-l1-q35",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary Powers."],
        "correctAnswerIndex": 2,
        "explanation": "Article 254 limits the application of the doctrine of repugnancy to conflicts between Union and State laws regarding subjects enumerated in the Concurrent List."
    },
    {
        "id": "ch56-l1-q36",
        "question": "If a State law on a Concurrent subject is inconsistent with a prior Central law, but the State law was reserved for the President and received his assent:",
        "options": ["The Central law still prevails.","The State law prevails in that particular state.","Both laws become void.","The High Court must strike down the Central law."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 254(2), if a state law on a Concurrent subject receives Presidential assent, it circumvents repugnancy and prevails over the existing Central law within that specific state."
    },
    {
        "id": "ch56-l1-q37",
        "question": "Even if a State law prevails due to Presidential assent, can the Parliament later enact a new law on the same subject to override that State law?",
        "options": ["No, once the President gives assent, the State law is permanent.","Yes, Parliament can add to, amend, vary, or repeal the state law on a Concurrent subject at any time."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament"
    },
    {
        "id": "ch56-l1-q38",
        "question": "The",
        "options": ["Presidential Discretion.","Federal Supremacy (Union List prevails over State List).","Harmonious Construction.","Judicial Review only."],
        "correctAnswerIndex": 1,
        "explanation": "In a direct conflict between the Union List and State List, the principle of Federal Supremacy applies, granting absolute primacy to the Union List under Article 246."
    },
    {
        "id": "ch56-l1-q39",
        "question": "Under Article 249, the Rajya Sabha passes a resolution for the Centre to legislate on a State subject",
        "options": ["Only once.","Any number of times, but for 1 year at a time.","For 5 years at a stretch.","Only during an emergency."],
        "correctAnswerIndex": 1,
        "explanation": "An Article 249 resolution is valid for a maximum of one year but can be renewed indefinitely by successive resolutions, each for up to one year."
    },
    {
        "id": "ch56-l1-q40",
        "question": "When Parliament legislates under Article 252 (Request by two or more states):",
        "options": ["The law applies to all states automatically.","The law applies only to those states that made the request and those that adopt it later by passing a resolution.","The law is a","and cannot be adopted by other states.","The states can amend the law for their own territory."],
        "correctAnswerIndex": 1,
        "explanation": "A law passed under Article 252 applies only to the states resolving to request it, and any other state that subsequently adopts it by passing a similar resolution."
    },
    {
        "id": "ch56-l1-q41",
        "question": "Under Article 253 (International Agreements), Parliament can make laws on State subjects. Does this require the consent of the affected states?",
        "options": ["Yes, by a simple majority.","No, Parliament can do so unilaterally to fulfill international obligations.","Only if the Supreme Court agrees.","Only in the border states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 253 empowers Parliament to unilaterally enact laws on any State List subject to implement an international treaty, obligation, or convention, without needing state consent."
    },
    {
        "id": "ch56-l1-q42",
        "question": "During a National Emergency (Article 250), the power of the State Legislature to make laws on subjects in the State List is:",
        "options": ["Suspended.","Abolished.","Continued, but subject to the overriding power of the Parliament.","Transferred to the Governor."],
        "correctAnswerIndex": 2,
        "explanation": "During a National Emergency, state legislatures aren"
    },
    {
        "id": "ch56-l1-q43",
        "question": "Article 246A is unique because it provides for",
        "options": ["Judicial Review","Watertight Compartmentalization (Exclusivity)","Federal Structure","Residuary Power"],
        "correctAnswerIndex": 1,
        "explanation": "Before GST and Article 246A, tax powers were strictly exclusive (watertight compartmentalization). A tax power belonged exclusively either to the Centre or the State."
    },
    {
        "id": "ch56-l1-q44",
        "question": "Which body makes recommendations on the rates of GST and the exemption lists?",
        "options": ["Finance Commission","NITI Aayog","GST Council","Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The GST Council, established under Article 279A, is the apex federal body responsible for making recommendations on GST rates, exemptions, and dispute resolution mechanisms."
    },
    {
        "id": "ch56-l1-q45",
        "question": "In the GST Council, the Central Government has a weightage of ______ of the total votes cast.",
        "options": ["One-half","One-third","Two-thirds","One-fourth"],
        "correctAnswerIndex": 1,
        "explanation": "The Centre"
    },
    {
        "id": "ch56-l1-q46",
        "question": "A state law imposing restrictions on",
        "options": ["Consent of the Speaker.","Previous sanction of the President.","Approval of the GST Council.","Approval of the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 304(b), any bill imposing reasonable restrictions on trade and commerce within a state must receive the previous sanction of the President before introduction."
    },
    {
        "id": "ch56-l1-q47",
        "question": "If the President refuses to give assent to a State Bill reserved by the Governor:",
        "options": ["The Bill dies; the State Legislature cannot override the President","The State Legislature can pass it again to make it law.","The Governor can sign it instead.","The matter goes to the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the US system where a veto can be overridden by a supermajority, the President"
    },
    {
        "id": "ch56-l1-q48",
        "question": "The power of",
        "options": ["USA.","Canada.","Australia.","Switzerland."],
        "correctAnswerIndex": 1,
        "explanation": "India follows the Canadian model by vesting residuary legislative powers with the Centre. In the USA, Australia, and Switzerland, residuary powers remain with the states."
    },
    {
        "id": "ch56-l1-q49",
        "question": "The",
        "options": ["The object is located in another state.","There is a real and sufficient connection between the state and the subject matter.","The Governor is from that other state.","The Parliament permits it."],
        "correctAnswerIndex": 1,
        "explanation": "A state law can operate extra-territorially only if there is a"
    },
    {
        "id": "ch56-l1-q50",
        "question": "Is the",
        "options": ["No.","Yes, with the consent of the State Government (Article 258)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 258 allows the President, with the consent of the State Government, to entrust executive functions relating to Union matters to the State officers or authorities."
    },
    {
        "id": "ch56-l1-q51",
        "question": "Assertion (A): The Parliament can make laws for any part of the territory of India with respect to any matter in the State List during a National Emergency. Reason (R): During an emergency, the federal structure of the Constitution is converted into a unitary one.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution allows its normally federal structure to functionally convert into a unitary one during a National Emergency, explicitly permitting Parliament to legislate on State subjects."
    },
    {
        "id": "ch56-l1-q52",
        "question": "Assertion (A): Residuary powers rest with the Parliament in India. Reason (R): The Indian Constitution follows the Canadian model of federalism in this regard.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The choice to vest residuary powers in the Union is explicitly based on the Canadian model of federalism, aiming for a strong center."
    },
    {
        "id": "ch56-l1-q53",
        "question": "Which list includes",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "The audit of accounts for both the Union and the States is centralized under the CAG and is enumerated as a subject in the Union List."
    },
    {
        "id": "ch56-l1-q54",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "Preventive detention for reasons connected with defense, foreign affairs, or the security of India falls exclusively under the Union List."
    },
    {
        "id": "ch56-l1-q55",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 2,
        "explanation": "Preventive detention connected to state security, public order, and the maintenance of essential supplies and services is placed in the Concurrent List."
    },
    {
        "id": "ch56-l1-q56",
        "question": "The power to abolish or create a Legislative Council (Article 169) is a ______ power.",
        "options": ["State","Parliamentary","Concurrent","Judicial"],
        "correctAnswerIndex": 1,
        "explanation": "Although triggered by a special majority resolution from the State Assembly, the actual legislative power to create or abolish a Legislative Council lies exclusively with Parliament."
    },
    {
        "id": "ch56-l1-q57",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution expressly excludes agricultural income from the Union"
    },
    {
        "id": "ch56-l1-q58",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 1,
        "explanation": "Betting and Gambling are classified as subjects of local interest and regulation, and are thus enumerated in the State List."
    },
    {
        "id": "ch56-l1-q59",
        "question": "Which Article prevents the State from taxing the property of the Union?",
        "options": ["Article 285","Article 289","Article 300","Article 265"],
        "correctAnswerIndex": 0,
        "explanation": "Article 285 provides immunity to the property of the Union from all taxes imposed by a State or by any authority within a State."
    },
    {
        "id": "ch56-l1-q60",
        "question": "Which Article prevents the Union from taxing the property and income of a State?",
        "options": ["Article 285","Article 289","Article 245","Article 255"],
        "correctAnswerIndex": 1,
        "explanation": "Article 289 provides the reciprocal immunity, exempting the property and income of a State from Union taxation, though commercial operations aren"
    },
    {
        "id": "ch56-l1-q61",
        "question": "In the context of the Union of India vs. VKC Footsteps and subsequent 2024 rulings, the Supreme Court clarified that the recommendations of the GST Council under Article 279A are:",
        "options": ["Constitutionally binding on both the Union and the States.","Only of persuasive value, but serve as a platform for","","Binding on the States but not on the Union.","Subject to the approval of the Finance Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (building on Mohit Minerals) clarified that GST Council recommendations are not strictly binding, possessing only"
    },
    {
        "id": "ch56-l1-q62",
        "question": "Article 246A (Special provision with respect to GST) is the only provision in the Constitution that provides for:",
        "options": ["Absolute separation of powers.","Simultaneous and concurrent power to both Parliament and State Legislatures.","The President","Judicial review of tax rates."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the mutually exclusive tax domains in the rest of the Constitution, Article 246A uniquely grants simultaneous and concurrent power to both the Union and States to levy taxes on the same supply transaction."
    },
    {
        "id": "ch56-l1-q63",
        "question": "If the GST Council decides to tax",
        "options": ["Yes, if 3/4th of the members of the Council agree.","No. Alcohol for human consumption is constitutionally excluded from the GST regime and remains in the State","Only during a National Emergency.","Only with a simple majority in Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 366(12A) expressly defines GST as excluding taxes on the supply of"
    },
    {
        "id": "ch56-l1-q64",
        "question": "Under Article 253 (Legislation for giving effect to international agreements), the Parliament enacted the Biological Diversity Act. Does this Act require the ratification by half of the states if it impacts subjects in the State List?",
        "options": ["Yes, under Article 368.","No. Article 253 provides an independent and overriding power to Parliament to implement international obligations regardless of the Seventh Schedule.","Only if it affects the North-Eastern states.","Only if the Rajya Sabha objects."],
        "correctAnswerIndex": 1,
        "explanation": "Article 253 gives Parliament the plenary power to enact laws on any subject—including State List subjects—to implement international treaties, fundamentally bypassing the state legislative process without needing ratification."
    },
    {
        "id": "ch56-l1-q65",
        "question": "A resolution passed by the Rajya Sabha under Article 249 (Power of Parliament to legislate in national interest) empowers the Parliament to make laws on a State List subject. Such a law:",
        "options": ["Replaces the State law completely.","Co-exists with the State law, but in case of a conflict, the Parliamentary law prevails (Article 251).","Prevents the State Legislature from making any further laws on that subject.","Must be renewed every 6 months."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 251, laws made under Article 249 do not restrict the State Legislature from making laws on the same subject; however, in case of repugnancy, the Central law prevails as long as it is in effect."
    },
    {
        "id": "ch56-l1-q66",
        "question": "In the context of",
        "options": ["The use of","entries to indirectly legislate on","subjects.","The","","Both (a) and (b).","The end of state sovereignty."],
        "correctAnswerIndex": 2,
        "explanation": "The farm laws highlighted the tension where Parliament utilized Entry 33 of the Concurrent List to intervene in agricultural trade, leading to accusations of colourable legislation—doing indirectly what it lacked direct power to do under the State List."
    },
    {
        "id": "ch56-l1-q67",
        "question": "The",
        "options": ["Article 254 applies directly.","Article 254 does not apply; instead, the","doctrine is used to see if the State Law is valid in its own sphere.","The State Law is automatically void.","The President decides within 14 days."],
        "correctAnswerIndex": 1,
        "explanation": "Article 254 strictly governs repugnancy within the Concurrent List. When a List II subject conflicts with a List III subject, courts apply the Doctrine of Pith and Substance to determine the true nature of the State law."
    },
    {
        "id": "ch56-l1-q68",
        "question": "If a State legislature re-enacts a law on a Concurrent subject that was previously struck down for being repugnant to a Central Law, and this new law receives the President",
        "options": ["It becomes valid in that state despite the Central Law.","It remains invalid.","The Supreme Court must re-examine it.","It becomes a Central Law."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 254(2), a repugnant state law on a Concurrent subject survives and prevails in that state if it has been reserved for and received the assent of the President."
    },
    {
        "id": "ch56-l1-q69",
        "question": "The",
        "options": ["The business owner is a resident of the taxing state.","The","or the","has a sufficient connection with the taxing state.","The other state gives a","","The Parliament passes a resolution."],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine validates a state"
    },
    {
        "id": "ch56-l1-q70",
        "question": "When a Legislature has no power to legislate on an item directly, but it attempts to do so by",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Colourable Legislation.","Doctrine of Harmonious Construction.","Doctrine of Immunity of Instrumentalities."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Colourable Legislation is grounded in the maxim"
    },
    {
        "id": "ch56-l1-q71",
        "question": "The",
        "options": ["Name","True nature and character","Date of passing","Financial impact"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine allows a law to be upheld if its"
    },
    {
        "id": "ch56-l1-q72",
        "question": "The",
        "options": ["Entry 31 of List I (Post and Telegraphs).","Entry 97 of List I (Residuary Powers).","Concurrent List (Education).","State List (Local Government)."],
        "correctAnswerIndex": 1,
        "explanation": "Novel subjects like Data Privacy and Artificial Intelligence, which were unforeseen by the Constitution"
    },
    {
        "id": "ch56-l1-q73",
        "question": "Can the Parliament delegate",
        "options": ["Yes, by a simple law.","No. Residuary powers are exclusively vested in the Parliament and cannot be delegated.","Only during a Financial Emergency.","Only if the Supreme Court permits."],
        "correctAnswerIndex": 1,
        "explanation": "Residuary powers are a constitutional grant exclusively to the Union Parliament. Delegating them would alter the fundamental distribution of powers, requiring a Constitutional Amendment, not an ordinary law."
    },
    {
        "id": "ch56-l1-q74",
        "question": "The Governor is required to reserve a State Bill for the President if it",
        "options": ["Discretionary.","Mandatory.","Voluntary.","Only during President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 200 expressly marks it as mandatory for the Governor to reserve a bill for the President if it in any way derogates from the powers of the High Court, endangering its constitutional position."
    },
    {
        "id": "ch56-l1-q75",
        "question": "If the President returns a State Bill for reconsideration and the State Legislature passes it again (with or without changes), is the President then bound to give assent?",
        "options": ["Yes, within 6 months.","No. Unlike the President","mandatory assent","Only if the Governor recommends it.","Only if it is a Money Bill."],
        "correctAnswerIndex": 1,
        "explanation": "While the President is bound to sign a reconsidered Central Bill, Article 201 does not place the same restriction on State Bills. The President can continue to withhold assent indefinitely."
    },
    {
        "id": "ch56-l1-q76",
        "question": "The power of Parliament to establish",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "While Article 247 is a specific constitutional grant, the power to establish additional courts for"
    },
    {
        "id": "ch56-l1-q77",
        "question": "Which Commission recommended that the",
        "options": ["Sarkaria Commission.","Punchhi Commission.","Rajamannar Committee (Tamil Nadu Govt).","First Administrative Reforms Commission."],
        "correctAnswerIndex": 0,
        "explanation": "The Sarkaria Commission on Centre-State Relations (1983) recommended transferring residuary legislative powers (other than taxation) to the Concurrent List to foster cooperative federalism."
    },
    {
        "id": "ch56-l1-q78",
        "question": "Assertion (A): The Parliament has exclusive power to make laws on any matter for the Union Territories, even if that matter falls in the State List. Reason (R): Union Territories are under the direct administration of the President and do not enjoy the same federal status as States.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 246(4) grants Parliament paramount legislative power over UTs across all lists. This stems from their direct administrative relationship with the President, lacking a fully independent federal identity."
    },
    {
        "id": "ch56-l1-q79",
        "question": "Assertion (A): A law made by Parliament under Article 252 (Request by states) cannot be amended by the state legislatures of the requesting states. Reason (R): Once the power to legislate is surrendered to Parliament under Article 252, the state legislature loses its competence over that subject for the duration the law is in force.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 252, state legislatures surrender legislative competence regarding that specific act to Parliament. Consequently, only Parliament can amend or repeal the resulting unified legislation."
    },
    {
        "id": "ch56-l1-q80",
        "question": "",
        "options": ["Article 249 (National Interest).","Article 252 (Request of states).","Article 253 (International treaty).","It can do so directly under residuary powers."],
        "correctAnswerIndex": 1,
        "explanation": "Lacking a relevant international treaty or national emergency, Parliament cannot directly legislate on"
    },
    {
        "id": "ch56-l1-q81",
        "question": "The",
        "options": ["The Supreme Court.","The Parliament (which can exclude the jurisdiction of any court).","The President.","The State Legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "Article 262 empowers Parliament to provide for the adjudication of inter-state river disputes by law. Crucially, Parliament may explicitly exclude the jurisdiction of all courts, including the Supreme Court, over such disputes."
    },
    {
        "id": "ch56-l1-q82",
        "question": "In the K.C. Gajapati Narayan Deo vs. State of Orissa case, the Court dealt with which doctrine?",
        "options": ["Pith and Substance.","Colourable Legislation.","Harmonious Construction.","Severability."],
        "correctAnswerIndex": 1,
        "explanation": "This landmark Supreme Court case crystallized the Doctrine of Colourable Legislation, establishing that the legislature"
    },
    {
        "id": "ch56-l1-q83",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 2,
        "explanation": "Economic and Social Planning, critical for coordinated national development while allowing regional nuance, was strategically placed in the Concurrent List."
    },
    {
        "id": "ch56-l1-q84",
        "question": "",
        "options": ["Only the Centre can make laws on education.","Both Centre and States can make laws, but Central law prevails in case of conflict.","The States must seek the Centre","Only the President can decide the syllabus."],
        "correctAnswerIndex": 1,
        "explanation": "Placement in the Concurrent List allows both tiers of government to legislate on education, subject to the rule of federal supremacy (Article 254) where the Central law prevails if there"
    },
    {
        "id": "ch56-l1-q85",
        "question": "The power to legislate on",
        "options": ["Union List.","State List.","Concurrent List.","Residuary (List I, Entry 97)."],
        "correctAnswerIndex": 3,
        "explanation": "As these are modern developments not explicitly foreseen in the original lists, the power defaults to Parliament under its exclusive residuary powers (Entry 97, Union List)."
    },
    {
        "id": "ch56-l1-q86",
        "question": "Which specific Article deals with the",
        "options": ["Article 251.","Article 254.","Article 246.","Article 250."],
        "correctAnswerIndex": 1,
        "explanation": "Article 254 explicitly addresses the doctrine of repugnancy, providing the mechanism to resolve direct inconsistencies between Central and State laws on Concurrent subjects."
    },
    {
        "id": "ch56-l1-q87",
        "question": "Under Article 248, who has the power to make laws on",
        "options": ["Parliament.","State Legislature.","Local Bodies.","Finance Commission."],
        "correctAnswerIndex": 0,
        "explanation": "Article 248 vests Parliament with the exclusive power to legislate on any matter—including establishing new taxes—that is not enumerated in the Concurrent or State Lists."
    },
    {
        "id": "ch56-l1-q88",
        "question": "Is the",
        "options": ["Yes.","No, it is subject to the constitutional distribution of powers and judicial review for basic structure."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament is sovereign within its assigned bounds, but it is not supreme over the Constitution. Its laws are subject to the Seventh Schedule"
    },
    {
        "id": "ch56-l1-q89",
        "question": "The",
        "options": ["Consult the States.","Get 1/2 of state legislatures","Ask the Supreme Court.","Abolish the State List."],
        "correctAnswerIndex": 0,
        "explanation": "To foster cooperative federalism, the Sarkaria Commission strongly recommended that the Union Government actively consult state governments before introducing legislation on Concurrent subjects."
    },
    {
        "id": "ch56-l1-q90",
        "question": "In the A.S. Krishna vs. State of Madras case, the SC applied which doctrine to resolve a conflict between the Madras Prohibition Act and the Central CrPC?",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Repugnancy.","Doctrine of Harmonious Construction.","Doctrine of Colourable Legislation."],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court applied the Doctrine of Pith and Substance, determining that the true nature of the Madras Act fell under the State List (intoxicating liquors), validating its incidental clash with CrPC procedures."
    },
    {
        "id": "ch56-l1-q91",
        "question": "Which Article of the Constitution states that the official language of the Union shall be Hindi in Devanagari script?",
        "options": ["Article 340","Article 343","Article 345","Article 351"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343 (1) specifies Hindi in Devanagari script as the official language of the Union."
    },
    {
        "id": "ch56-l1-q92",
        "question": "For how many years from the commencement of the Constitution was English allowed to continue for official purposes of the Union?",
        "options": ["5 years","10 years","15 years","25 years"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution initially provided for the use of English for a period of 15 years (up to 1965)."
    },
    {
        "id": "ch56-l1-q93",
        "question": "Which Article empowers the President to constitute a",
        "options": ["Article 343","Article 344","Article 348","Article 350"],
        "correctAnswerIndex": 1,
        "explanation": "Article 344 provides for the constitution of a Commission and a Committee of Parliament on official language."
    },
    {
        "id": "ch56-l1-q94",
        "question": "Who appoints the Chairman of the Official Language Commission?",
        "options": ["The Prime Minister","The President of India","The Speaker of Lok Sabha","The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "The President constitutes the commission and appoints its members/chairman."
    },
    {
        "id": "ch56-l1-q95",
        "question": "Until Parliament by law otherwise provides, all proceedings in the Supreme Court shall be in:",
        "options": ["Hindi","English","Any regional language","Sanskrit"],
        "correctAnswerIndex": 1,
        "explanation": "Article 348 specifies that until Parliament provides otherwise, proceedings in SC and HCs shall be in English."
    },
    {
        "id": "ch56-l1-q96",
        "question": "Which Article contains the",
        "options": ["Article 343","Article 345","Article 350","Article 351"],
        "correctAnswerIndex": 3,
        "explanation": "Article 351 makes it the duty of the Union to promote the spread and development of the Hindi language."
    },
    {
        "id": "ch56-l1-q97",
        "question": "Language of the",
        "options": ["The Parliament","The Legislature of the State (by law)","The Governor","The President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 345 allows state legislatures to adopt any one or more languages or Hindi as official languages."
    },
    {
        "id": "ch56-l1-q98",
        "question": "Which Article provides for",
        "options": ["Article 350","Article 350A","Article 350B","Article 351"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A was added by the 7th Amendment Act, 1956."
    },
    {
        "id": "ch56-l1-q99",
        "question": "Which Article provides for the",
        "options": ["Article 350","Article 350A","Article 350B","Article 351"],
        "correctAnswerIndex": 2,
        "explanation": "Article 350B was added by the 7th Amendment Act, 1956."
    },
    {
        "id": "ch56-l1-q100",
        "question": "Every person is entitled to submit a",
        "options": ["Only Hindi","Only English","Any of the languages used in the Union or the State","Sanskrit only"],
        "correctAnswerIndex": 2,
        "explanation": "Article 350 ensures this right to every person in their own language."
    },
    {
        "id": "ch56-l1-q101",
        "question": "The",
        "options": ["20","30 (20 from LS, 10 from RS)","40","15"],
        "correctAnswerIndex": 1,
        "explanation": "It has 30 members: 20 from Lok Sabha and 10 from Rajya Sabha."
    },
    {
        "id": "ch56-l1-q102",
        "question": "Which Schedule of the Constitution lists the",
        "options": ["Seventh Schedule","Eighth Schedule","Ninth Schedule","Tenth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Eighth Schedule contains the list of 22 recognized languages."
    },
    {
        "id": "ch56-l1-q103",
        "question": "Numerical data in official purposes of the Union must be in which form?",
        "options": ["Roman numerals","International form of Indian numerals","Sanskrit numerals","Devanagari numerals only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 343(1) specifies the international form of Indian numerals."
    },
    {
        "id": "ch56-l1-q104",
        "question": "Can a state adopt a language NOT mentioned in the 8th Schedule as its official language?",
        "options": ["Yes","No","Only if the President allows","Only if it is a tribal language"],
        "correctAnswerIndex": 0,
        "explanation": "Article 345 does not restrict the choice to 8th schedule languages (e.g., French was official in Puducherry)."
    },
    {
        "id": "ch56-l1-q105",
        "question": "Who was the",
        "options": ["B.G. Kher","G.B. Pant","C. Rajagopalachari","Zakir Hussain"],
        "correctAnswerIndex": 0,
        "explanation": "B.G. Kher headed the first commission."
    },
    {
        "id": "ch56-l1-q106",
        "question": "Official Language Act was passed by the Parliament in which year to continue English?",
        "options": ["1956","1963","1976","1985"],
        "correctAnswerIndex": 1,
        "explanation": "The 1963 Act allowed the use of English alongside Hindi even after 1965."
    },
    {
        "id": "ch56-l1-q107",
        "question": "Is Hindi the",
        "options": ["Yes","No, it is the","(Rajbhasha) of the Union.","Only after the 42nd amendment.","Only for the Northern states."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution uses the term"
    },
    {
        "id": "ch56-l1-q108",
        "question": "The Governor of a State, with the previous consent of whom, may authorize the use of Hindi for the High Court proceedings?",
        "options": ["The Chief Justice of HC","The President of India","The State Legislature","The CJI"],
        "correctAnswerIndex": 1,
        "explanation": "Presidential consent is mandatory for changing language in HC (Art 348(2))."
    },
    {
        "id": "ch56-l1-q109",
        "question": "Official Language Commission submits its recommendations to whom?",
        "options": ["The Parliament","The President","The Prime Minister","The Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "It submits its report to the President, who lays it before Parliament and gets it examined by the Committee."
    },
    {
        "id": "ch56-l1-q110",
        "question": "Which language was added to the 8th Schedule by the 21st Amendment Act, 1967?",
        "options": ["Sindhi","Manipuri","Konkani","Bodo"],
        "correctAnswerIndex": 0,
        "explanation": "Sindhi was the first language added after the original 14."
    },
    {
        "id": "ch56-l1-q111",
        "question": "How many languages are currently in the 8th Schedule?",
        "options": ["14","22","25","18"],
        "correctAnswerIndex": 1,
        "explanation": "Starting with 14, now there are 22."
    },
    {
        "id": "ch56-l1-q112",
        "question": "Which Article allows the President to direct that a language spoken by a section of state population should be officially recognized by the state?",
        "options": ["Article 343","Article 347","Article 349","Article 350"],
        "correctAnswerIndex": 1,
        "explanation": "Article 347 deals with special provisions for languages spoken by a section of population."
    },
    {
        "id": "ch56-l1-q113",
        "question": "Directive for development of Hindi (Art 351) says it should draw vocabulary primarily from:",
        "options": ["Arabic/Persian","Sanskrit","English","Regional dialects"],
        "correctAnswerIndex": 1,
        "explanation": "Vocabulary should be drawn primarily from Sanskrit and secondarily from other languages."
    },
    {
        "id": "ch56-l1-q114",
        "question": "Language of an",
        "options": ["State language","English (Art 348)","Hindi only","Sanskrit"],
        "correctAnswerIndex": 1,
        "explanation": "Art 348 specifies that all Bills, Acts, Ordinances, etc., shall be in English."
    },
    {
        "id": "ch56-l1-q115",
        "question": "Who appoints the Special Officer for Linguistic Minorities?",
        "options": ["The President","The Governor","The PM","The Home Minister"],
        "correctAnswerIndex": 0,
        "explanation": "He is appointed by the President (Art 350B)."
    },
    {
        "id": "ch56-l1-q116",
        "question": "Wait. Is",
        "options": ["Yes","No","Only since 2003","Only for Nagaland"],
        "correctAnswerIndex": 1,
        "explanation": "English is an"
    },
    {
        "id": "ch56-l1-q117",
        "question": "Can the President authorize the",
        "options": ["Yes","No","Only for UP/Bihar","Only if SC allows"],
        "correctAnswerIndex": 0,
        "explanation": "Authority to provide translations exists within the framework."
    },
    {
        "id": "ch56-l1-q118",
        "question": "The implementation of Art 350A (primary mother-tongue) is primarily the duty of:",
        "options": ["The Union","Every State and local authority","The NGOs","The UN"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch56-l1-q119",
        "question": "Which Article mentions",
        "options": ["Article 348","Article 349","Article 350","Article 351"],
        "correctAnswerIndex": 1,
        "explanation": "Article 349 (now largely redundant post-1965) provided for special procedure."
    },
    {
        "id": "ch56-l1-q120",
        "question": "Classical language status is given to which of the following?",
        "options": ["Tamil","Sanskrit","Kannada, Telugu, Malayalam, Odia","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These 6 languages have been given classical status (plus Marathi recently in 2024 - check update context)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch56-l2-q1",
        "question": "The Official Languages Act of 1963 was amended in 1967. What was the major change?",
        "options": ["Hindi was made the sole official language.","English was made an additional official language for an","period (until all non-Hindi states agreed to stop).","Sanskrit was made optional.","Regional languages were banned in courts."],
        "correctAnswerIndex": 1,
        "explanation": "The 1967 amendment ensured that English would continue as long as non-Hindi speaking states desired it."
    },
    {
        "id": "ch56-l2-q2",
        "question": "Which of the following describes the",
        "options": ["High antiquity of early texts/recorded history over 1500-2000 years.","A body of ancient literature/texts considered a valuable heritage by generations.","The literary tradition must be original and not borrowed from another speech community.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These criteria ensure only languages with deep original roots get classical status."
    },
    {
        "id": "ch56-l2-q3",
        "question": "Assertion (A): The President can direct a state to recognize a language spoken by a section of its population as an official language (Art 347).\\nReason (R): This is a safeguard to protect the interests of linguistic minorities within a state.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 347 acts as a buffer against linguistic majoritarianism in states."
    },
    {
        "id": "ch56-l2-q4",
        "question": "Under Article 348, can the",
        "options": ["Yes.","No, he needs the",".","Only if the state legislature passes a bill.","Only if the Chief Justice of India allows."],
        "correctAnswerIndex": 1,
        "explanation": "Presidential oversight is mandatory for any change in the HC language (Art 348(2))."
    },
    {
        "id": "ch56-l2-q5",
        "question": "In case of a",
        "options": ["Hindi version.","English version.","The one signed by the President first.","The court decides case-by-case."],
        "correctAnswerIndex": 1,
        "explanation": "Article 348(1)(b) specifies the English version as authoritative until Parliament provides otherwise."
    },
    {
        "id": "ch56-l2-q6",
        "question": "The",
        "options": ["The Parliament.","The President of India.","The Ministry of Minority Affairs.","The National Commission for SCs."],
        "correctAnswerIndex": 1,
        "explanation": "The President is the recipient of the reports, who then lays them before Parliament."
    },
    {
        "id": "ch56-l2-q7",
        "question": "Which Amendment added",
        "options": ["71st Amendment (1992).","92nd Amendment (2003).","21st Amendment (1967).","101st Amendment (2016)."],
        "correctAnswerIndex": 1,
        "explanation": "The 92nd Amendment brought the total to 22 languages."
    },
    {
        "id": "ch56-l2-q8",
        "question": "What is the",
        "options": ["Hindi, English, and a Modern Indian Language (preferably South Indian for North, and vice versa).","Sanskrit, Arabic, and Persian.","Mother tongue, State language, and Hindi.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "It aims to promote national integration through multi-lingual education."
    },
    {
        "id": "ch56-l2-q9",
        "question": "The",
        "options": ["Ministry of Education.","Ministry of Home Affairs.","Ministry of Culture.","Ministry of Information and Broadcasting."],
        "correctAnswerIndex": 1,
        "explanation": "Home Ministry is responsible for implementing language policy."
    },
    {
        "id": "ch56-l2-q10",
        "question": "According to Article 351, Hindi should be developed so that it may serve as a medium of expression for all components of the:",
        "options": ["Vedic culture.","Composite culture of India.","Global Indian diaspora.","Hindu population."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution emphasizes a"
    },
    {
        "id": "ch56-l2-q11",
        "question": "Wait. Which language was the",
        "options": ["Sanskrit.","Tamil.","Kannada.","Malayalam."],
        "correctAnswerIndex": 1,
        "explanation": "Tamil was the first, followed by Sanskrit in 2005."
    },
    {
        "id": "ch56-l2-q12",
        "question": "The 71st Amendment Act (1992) added which three languages to the 8th schedule?",
        "options": ["Sindhi, Nepali, Konkani.","Konkani, Manipuri, Nepali.","Maithili, Santhali, Dogri.","Tulu, Kodava, Garo."],
        "correctAnswerIndex": 1,
        "explanation": "Konkani, Manipuri and Nepali (KMN) were added in 1992."
    },
    {
        "id": "ch56-l2-q13",
        "question": "Article 348 covers the language of which document-types?",
        "options": ["Bills and Amendments in Parliament/State Legislatures.","Acts, Ordinances and Orders.","Rules, Regulations and Bye-laws.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Art 348 provides a wide range for the use of English in legal/legislative context."
    },
    {
        "id": "ch56-l2-q14",
        "question": "The",
        "options": ["The Prime Minister.","The Union Home Minister.","The Speaker of Lok Sabha.","The Vice President."],
        "correctAnswerIndex": 1,
        "explanation": "By convention, the Home Minister chairs this committee."
    },
    {
        "id": "ch56-l2-q15",
        "question": "Which Article provides for the",
        "options": ["Article 343.","Article 350.","Article 351.","Article 29."],
        "correctAnswerIndex": 1,
        "explanation": "It protects the right of individuals to petition in any language."
    },
    {
        "id": "ch56-l2-q16",
        "question": "Can a state declare",
        "options": ["Yes (e.g., UP, Bihar, Rajasthan).","No, English is mandatory.","Only if it is a UT.","Only if it is in the 8th schedule."],
        "correctAnswerIndex": 0,
        "explanation": "States have full autonomy under Art 345."
    },
    {
        "id": "ch56-l2-q17",
        "question": "What is the primary benefit of a language getting",
        "options": ["Financial assistance for international awards.","Creation of Chairs for the language in Central Universities.","Setting up of a Center of Excellence for studies in that language.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The status brings institutional support and prestige for preserving the language."
    },
    {
        "id": "ch56-l2-q18",
        "question": "The",
        "options": ["High Schools.","Primary stage of education.","Civil Service coaching.","Universities."],
        "correctAnswerIndex": 1,
        "explanation": "Foundation levels are prioritized for linguistic minority protection."
    },
    {
        "id": "ch56-l2-q19",
        "question": "Which of the following languages is NOT in the 8th Schedule?",
        "options": ["Sanskrit.","Nepali.","Marwari.","Dogri."],
        "correctAnswerIndex": 2,
        "explanation": "Marwari is a dialect/language not yet included in the 8th Schedule."
    },
    {
        "id": "ch56-l2-q20",
        "question": "The",
        "options": ["1950.","1955.","1960.","1963."],
        "correctAnswerIndex": 1,
        "explanation": "It was appointed five years after the commencement of the constitution (Art 344(1))."
    },
    {
        "id": "ch56-l2-q21",
        "question": "The",
        "options": ["The Chief Justice.","The President (under the Authoritative Texts (Central Laws) Act, 1973).","The Home Minister.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "President"
    },
    {
        "id": "ch56-l2-q22",
        "question": "Can a High Court hear cases in",
        "options": ["Yes (Art 348(2)).","No, only English.","Only for oral arguments, not for judgments.","Only in Delhi HC."],
        "correctAnswerIndex": 0,
        "explanation": "Arguments and proceedings can be in Hindi; however, judgments/decrees involve further rules."
    },
    {
        "id": "ch56-l2-q23",
        "question": "Which organ provides the",
        "options": ["Official Language Commission.","Census of India (Registrar General).","NITI Aayog.","Home Ministry."],
        "correctAnswerIndex": 1,
        "explanation": "Census includes linguistic data for policy planning."
    },
    {
        "id": "ch56-l2-q24",
        "question": "Article 351 directives aim to make Hindi a medium of expression for:",
        "options": ["Hindus only.","The Composite Culture of India.","The World.","Technical education only."],
        "correctAnswerIndex": 1,
        "explanation": "Composite culture is the key phrase in Article 351."
    },
    {
        "id": "ch56-l2-q25",
        "question": "Who is responsible for safeguarding",
        "options": ["National Commission for SCs.","Special Officer for Linguistic Minorities.","Election Commission.","UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "The dedicated officer under Art 350B investigates all matters relating to safeguards."
    },
    {
        "id": "ch56-l2-q26",
        "question": "Wait. Is",
        "options": ["No.","Yes, Uttarakhand has made Sanskrit its second official language.","Only in Vedic schools.","Only in Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Some states have adopted Sanskrit for symbolic/cultural value."
    },
    {
        "id": "ch56-l2-q27",
        "question": "The",
        "options": ["2004.","2014.","2024.","Not yet approved."],
        "correctAnswerIndex": 2,
        "explanation": "Marathi (along with 4 other languages like Bengali, Pali, Prakrit, Assamese) received approval in October 2024 (Current Affairs context added to Laxmikanth updates)."
    },
    {
        "id": "ch56-l2-q28",
        "question": "Article 347 protection applies if a language section is",
        "options": ["100% population.","A substantial proportion of the population of the state.","Only the CM.","Only the Governor."],
        "correctAnswerIndex": 1,
        "explanation": "President determines"
    },
    {
        "id": "ch56-l2-q29",
        "question": "The primary objective of Art 350 is to ensure that language is not a barrier to:",
        "options": ["Voting.","Seeking justice/redress of grievances from any government authority.","Getting a job.","Entering a temple."],
        "correctAnswerIndex": 1,
        "explanation": "Petitions cannot be rejected on linguistic grounds."
    },
    {
        "id": "ch56-l2-q30",
        "question": "Who appoints the",
        "options": ["The President.","The respective Departmental Heads.","The UPSC.","The Home Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Each department manages its own internal linguistic compliance."
    },
    {
        "id": "ch56-l2-q31",
        "question": "If a state legislature enacts a law on",
        "options": ["Doctrine of Severability.","Doctrine of Pith and Substance.","Doctrine of Colourable Legislation.","Doctrine of Pleasure."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Pith and Substance protects a law if its true nature and character fall within the legislature"
    },
    {
        "id": "ch56-l2-q32",
        "question": "The",
        "options": ["Motive","Competence (Power)","Wisdom","Popularity"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine tests the competence of the legislature to enact a law, ensuring it cannot indirectly legislate on subjects beyond its power, irrespective of its motive."
    },
    {
        "id": "ch56-l2-q33",
        "question": "If a part of a statute is unconstitutional while the rest is valid, and the valid part can stand independently, the court will apply the:",
        "options": ["Doctrine of Eclipse.","Doctrine of Severability.","Doctrine of Harmonious Construction.","Doctrine of Territorial Nexus."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Severability allows the valid portion of a law to survive if it can be separated from the unconstitutional part without altering the legislature"
    },
    {
        "id": "ch56-l2-q34",
        "question": "The",
        "options": ["There is a conflict between two provisions of the same Act or between two different lists.","The Governor refuses to sign a bill.","The Centre and State agree on a policy.","A law is partially implemented."],
        "correctAnswerIndex": 0,
        "explanation": "Courts use the Doctrine of Harmonious Construction to read conflicting provisions in a way that gives effect to both, avoiding a situation where one provision renders another dead."
    },
    {
        "id": "ch56-l2-q35",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary Powers."],
        "correctAnswerIndex": 2,
        "explanation": "Article 254 limits the application of the doctrine of repugnancy to conflicts between Union and State laws regarding subjects enumerated in the Concurrent List."
    },
    {
        "id": "ch56-l2-q36",
        "question": "If a State law on a Concurrent subject is inconsistent with a prior Central law, but the State law was reserved for the President and received his assent:",
        "options": ["The Central law still prevails.","The State law prevails in that particular state.","Both laws become void.","The High Court must strike down the Central law."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 254(2), if a state law on a Concurrent subject receives Presidential assent, it circumvents repugnancy and prevails over the existing Central law within that specific state."
    },
    {
        "id": "ch56-l2-q37",
        "question": "Even if a State law prevails due to Presidential assent, can the Parliament later enact a new law on the same subject to override that State law?",
        "options": ["No, once the President gives assent, the State law is permanent.","Yes, Parliament can add to, amend, vary, or repeal the state law on a Concurrent subject at any time."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament"
    },
    {
        "id": "ch56-l2-q38",
        "question": "The",
        "options": ["Presidential Discretion.","Federal Supremacy (Union List prevails over State List).","Harmonious Construction.","Judicial Review only."],
        "correctAnswerIndex": 1,
        "explanation": "In a direct conflict between the Union List and State List, the principle of Federal Supremacy applies, granting absolute primacy to the Union List under Article 246."
    },
    {
        "id": "ch56-l2-q39",
        "question": "Under Article 249, the Rajya Sabha passes a resolution for the Centre to legislate on a State subject",
        "options": ["Only once.","Any number of times, but for 1 year at a time.","For 5 years at a stretch.","Only during an emergency."],
        "correctAnswerIndex": 1,
        "explanation": "An Article 249 resolution is valid for a maximum of one year but can be renewed indefinitely by successive resolutions, each for up to one year."
    },
    {
        "id": "ch56-l2-q40",
        "question": "When Parliament legislates under Article 252 (Request by two or more states):",
        "options": ["The law applies to all states automatically.","The law applies only to those states that made the request and those that adopt it later by passing a resolution.","The law is a","and cannot be adopted by other states.","The states can amend the law for their own territory."],
        "correctAnswerIndex": 1,
        "explanation": "A law passed under Article 252 applies only to the states resolving to request it, and any other state that subsequently adopts it by passing a similar resolution."
    },
    {
        "id": "ch56-l2-q41",
        "question": "Under Article 253 (International Agreements), Parliament can make laws on State subjects. Does this require the consent of the affected states?",
        "options": ["Yes, by a simple majority.","No, Parliament can do so unilaterally to fulfill international obligations.","Only if the Supreme Court agrees.","Only in the border states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 253 empowers Parliament to unilaterally enact laws on any State List subject to implement an international treaty, obligation, or convention, without needing state consent."
    },
    {
        "id": "ch56-l2-q42",
        "question": "During a National Emergency (Article 250), the power of the State Legislature to make laws on subjects in the State List is:",
        "options": ["Suspended.","Abolished.","Continued, but subject to the overriding power of the Parliament.","Transferred to the Governor."],
        "correctAnswerIndex": 2,
        "explanation": "During a National Emergency, state legislatures aren"
    },
    {
        "id": "ch56-l2-q43",
        "question": "Article 246A is unique because it provides for",
        "options": ["Judicial Review","Watertight Compartmentalization (Exclusivity)","Federal Structure","Residuary Power"],
        "correctAnswerIndex": 1,
        "explanation": "Before GST and Article 246A, tax powers were strictly exclusive (watertight compartmentalization). A tax power belonged exclusively either to the Centre or the State."
    },
    {
        "id": "ch56-l2-q44",
        "question": "Which body makes recommendations on the rates of GST and the exemption lists?",
        "options": ["Finance Commission","NITI Aayog","GST Council","Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The GST Council, established under Article 279A, is the apex federal body responsible for making recommendations on GST rates, exemptions, and dispute resolution mechanisms."
    },
    {
        "id": "ch56-l2-q45",
        "question": "In the GST Council, the Central Government has a weightage of ______ of the total votes cast.",
        "options": ["One-half","One-third","Two-thirds","One-fourth"],
        "correctAnswerIndex": 1,
        "explanation": "The Centre"
    },
    {
        "id": "ch56-l2-q46",
        "question": "A state law imposing restrictions on",
        "options": ["Consent of the Speaker.","Previous sanction of the President.","Approval of the GST Council.","Approval of the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 304(b), any bill imposing reasonable restrictions on trade and commerce within a state must receive the previous sanction of the President before introduction."
    },
    {
        "id": "ch56-l2-q47",
        "question": "If the President refuses to give assent to a State Bill reserved by the Governor:",
        "options": ["The Bill dies; the State Legislature cannot override the President","The State Legislature can pass it again to make it law.","The Governor can sign it instead.","The matter goes to the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the US system where a veto can be overridden by a supermajority, the President"
    },
    {
        "id": "ch56-l2-q48",
        "question": "The power of",
        "options": ["USA.","Canada.","Australia.","Switzerland."],
        "correctAnswerIndex": 1,
        "explanation": "India follows the Canadian model by vesting residuary legislative powers with the Centre. In the USA, Australia, and Switzerland, residuary powers remain with the states."
    },
    {
        "id": "ch56-l2-q49",
        "question": "The",
        "options": ["The object is located in another state.","There is a real and sufficient connection between the state and the subject matter.","The Governor is from that other state.","The Parliament permits it."],
        "correctAnswerIndex": 1,
        "explanation": "A state law can operate extra-territorially only if there is a"
    },
    {
        "id": "ch56-l2-q50",
        "question": "Is the",
        "options": ["No.","Yes, with the consent of the State Government (Article 258)."],
        "correctAnswerIndex": 1,
        "explanation": "Article 258 allows the President, with the consent of the State Government, to entrust executive functions relating to Union matters to the State officers or authorities."
    },
    {
        "id": "ch56-l2-q51",
        "question": "Assertion (A): The Parliament can make laws for any part of the territory of India with respect to any matter in the State List during a National Emergency. Reason (R): During an emergency, the federal structure of the Constitution is converted into a unitary one.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution allows its normally federal structure to functionally convert into a unitary one during a National Emergency, explicitly permitting Parliament to legislate on State subjects."
    },
    {
        "id": "ch56-l2-q52",
        "question": "Assertion (A): Residuary powers rest with the Parliament in India. Reason (R): The Indian Constitution follows the Canadian model of federalism in this regard.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The choice to vest residuary powers in the Union is explicitly based on the Canadian model of federalism, aiming for a strong center."
    },
    {
        "id": "ch56-l2-q53",
        "question": "Which list includes",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "The audit of accounts for both the Union and the States is centralized under the CAG and is enumerated as a subject in the Union List."
    },
    {
        "id": "ch56-l2-q54",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "Preventive detention for reasons connected with defense, foreign affairs, or the security of India falls exclusively under the Union List."
    },
    {
        "id": "ch56-l2-q55",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 2,
        "explanation": "Preventive detention connected to state security, public order, and the maintenance of essential supplies and services is placed in the Concurrent List."
    },
    {
        "id": "ch56-l2-q56",
        "question": "The power to abolish or create a Legislative Council (Article 169) is a ______ power.",
        "options": ["State","Parliamentary","Concurrent","Judicial"],
        "correctAnswerIndex": 1,
        "explanation": "Although triggered by a special majority resolution from the State Assembly, the actual legislative power to create or abolish a Legislative Council lies exclusively with Parliament."
    },
    {
        "id": "ch56-l2-q57",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution expressly excludes agricultural income from the Union"
    },
    {
        "id": "ch56-l2-q58",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 1,
        "explanation": "Betting and Gambling are classified as subjects of local interest and regulation, and are thus enumerated in the State List."
    },
    {
        "id": "ch56-l2-q59",
        "question": "Which Article prevents the State from taxing the property of the Union?",
        "options": ["Article 285","Article 289","Article 300","Article 265"],
        "correctAnswerIndex": 0,
        "explanation": "Article 285 provides immunity to the property of the Union from all taxes imposed by a State or by any authority within a State."
    },
    {
        "id": "ch56-l2-q60",
        "question": "Which Article prevents the Union from taxing the property and income of a State?",
        "options": ["Article 285","Article 289","Article 245","Article 255"],
        "correctAnswerIndex": 1,
        "explanation": "Article 289 provides the reciprocal immunity, exempting the property and income of a State from Union taxation, though commercial operations aren"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch56-l3-q1",
        "question": "Analyze the",
        "options": ["Immediate adoption of Hindi as the sole language.","Recognition of Hindi in Devanagari script as the","language, but English to continue for a transitional period (15 years) to accommodate non-Hindi states.","Recognition of English as the sole language for 50 years.","Adoption of Sanskrit as the national language."],
        "correctAnswerIndex": 1,
        "explanation": "This formula balanced the nationalistic aspiration for Hindi with the practical administrative reality of English."
    },
    {
        "id": "ch56-l3-q2",
        "question": "Assertion (A): The Supreme Court of India conducts all its proceedings in English exclusively (Art 348(1)).\\nReason (R): Parliament has not yet made a law under Article 348(1) to provide for the use of any other language in the Supreme Court.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Legal certainty and pan-India judicial uniformity are the primary reasons for the continued use of English in the higher judiciary."
    },
    {
        "id": "ch56-l3-q3",
        "question": "Compare Article 345 with Article 347. What is the",
        "options": ["President appoints the state language.","Under Art 347, if the President is satisfied that a","of a state","President can ban regional languages.","No difference."],
        "correctAnswerIndex": 1,
        "explanation": "Art 347 is a"
    },
    {
        "id": "ch56-l3-q4",
        "question": "How does Article 350A (Mother tongue instruction) interact with the",
        "options": ["They are unrelated.","Art 350A is a","primarily to ensure that the fundamental right to education for linguistic minorities is meaningful at the foundational stage.","Art 350A overrides Art 21A.","Art 21A bans mother tongue education."],
        "correctAnswerIndex": 1,
        "explanation": "Foundation in mother tongue is scientifically proven to improve learning outcomes for minority children."
    },
    {
        "id": "ch56-l3-q5",
        "question": "The 1967 Amendment to the Official Languages Act 1963 introduced a",
        "options": ["The","policy.","The","clause (use of English shall not be discontinued until all non-Hindi states consent).","The","clause.","The","."],
        "correctAnswerIndex": 1,
        "explanation": "This gives a"
    },
    {
        "id": "ch56-l3-q6",
        "question": "Analyze the",
        "options": ["Yes.","No, while vocabulary should be drawn","from Sanskrit, it should also assimilate forms, style and expressions from","and other 8th Schedule languages.","Only from English.","Only from regional dialects."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution seeks to develop a"
    },
    {
        "id": "ch56-l3-q7",
        "question": "The",
        "options": ["English only.","Any language mentioned in the Eighth Schedule, as authorized by the President.","Only tribal languages.","None."],
        "correctAnswerIndex": 1,
        "explanation": "Expansion of linguistic access to law is the key objective."
    },
    {
        "id": "ch56-l3-q8",
        "question": "In the",
        "options": ["Art 30 gives minorities the right to establish institutions; Art 350A puts the","on the state to provide mother-tongue facilities in public/local primary schools.","They are the same.","Art 30 is for majority groups.","Art 350A is only for religious minorities."],
        "correctAnswerIndex": 0,
        "explanation": "Art 30 is a Right (Active); Art 350A is a Directive (Obligatory state action)."
    },
    {
        "id": "ch56-l3-q9",
        "question": "Is",
        "options": ["Yes.","No, only the Governor","proceedings","Only from the State Legislature.","Only from the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural change in HC has a simplified constitutional path compared to Union-level changes."
    },
    {
        "id": "ch56-l3-q10",
        "question": "Analyze the role of",
        "options": ["Yes.","No, the President can issue directions only","the committee","Only after a Referendum.","Only after the CJI signs."],
        "correctAnswerIndex": 1,
        "explanation": "Phased implementation and careful examination are constitutionally mandated."
    },
    {
        "id": "ch56-l3-q11",
        "question": "The status of",
        "options": ["Malayalam.","Odia.","Manipuri (as of mid-2024).","Kannada."],
        "correctAnswerIndex": 2,
        "explanation": "While many languages are in demand, as of the current standard Laxmikanth updates, Manipuri is not yet in the Classical category."
    },
    {
        "id": "ch56-l3-q12",
        "question": "Which Article was invoked by the Supreme Court to rule that English is mandatory for judgments of all High Courts until Parliament legislates otherwise?",
        "options": ["Article 343.","Article 345.","Article 348(1).","Article 351."],
        "correctAnswerIndex": 2,
        "explanation": "Art 348(1) explicitly puts all court proceedings, bills, acts etc in English unless a law provides otherwise."
    },
    {
        "id": "ch56-l3-q13",
        "question": "Analyze Article 349. Is it still",
        "options": ["Yes, for every new language law.","No, it was a","provision intended only for the first 15 years; now it is largely obsolete.","Only for Tribal states.","Only for the 8th Schedule."],
        "correctAnswerIndex": 1,
        "explanation": "Art 349"
    },
    {
        "id": "ch56-l3-q14",
        "question": "The",
        "options": ["Hindi always.","English (as the official language for communication) unless two or more states agree to use Hindi.","Regional language of the larger state.","Sanskrit."],
        "correctAnswerIndex": 1,
        "explanation": "English serves as the"
    },
    {
        "id": "ch56-l3-q15",
        "question": "Does the",
        "options": ["Yes.","No, it only lists recognized languages; the Union","Only if it is Hindi.","Only if the PM belongs to that language group."],
        "correctAnswerIndex": 1,
        "explanation": "Schedule 8 is for representation in commissions and cultural development, not for Union-level officiality."
    },
    {
        "id": "ch56-l3-q16",
        "question": "Evaluate the",
        "options": ["Yes.","No, it is an","and","body that submits findings to the President.","Actually, it is a part of the Supreme Court.","It is a branch of the UN."],
        "correctAnswerIndex": 1,
        "explanation": "Like the NCSC/NCST, its primary power is to highlight issues through annual reports."
    },
    {
        "id": "ch56-l3-q17",
        "question": "The",
        "options": ["Uttar Pradesh.","Tamil Nadu (follows 2-language formula: Tamil and English).","Maharashtra.","Karnataka."],
        "correctAnswerIndex": 1,
        "explanation": "Tamil Nadu has a dedicated policy against the 3-language formula to avoid perceived"
    },
    {
        "id": "ch56-l3-q18",
        "question": "Wait. Can the President",
        "options": ["Yes.","No, only Parliament can amend the Constitution (8th schedule is part of the constitution).","Only if the SC allows.","Only if the census shows 0 speakers."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional schedules require Art 368 parliamentary procedure."
    },
    {
        "id": "ch56-l3-q19",
        "question": "What is the role of the",
        "options": ["To translate poetry.","To evolve and define scientific and technical terminology in Hindi and other Indian languages.","To teach English.","To manage the internet."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch56-l3-q20",
        "question": "Which Article uses the phrase",
        "options": ["Article 343(1).","Article 344.","Article 348.","Article 350."],
        "correctAnswerIndex": 0,
        "explanation": "This was another compromise to balance traditional scripts with modern global standards."
    },
    {
        "id": "ch56-l3-q21",
        "question": "Analyze the impact of",
        "options": ["It promotes secession.","It allows for the recognition of regional aspirations (like Santali or Urdu) without needing a separate state, if the President intervenes.","It is never used.","It makes the Governor more powerful."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch56-l3-q22",
        "question": "Does Article 120 (Language in Parliament) override Article 343?",
        "options": ["Yes.","No, Art 120 only regulates the","language, whereas Art 343 deals with the","language of the Union.","Only for the Speaker.","Only for the Opposition."],
        "correctAnswerIndex": 1,
        "explanation": "Documentary record vs Oral participation have different constitutional protections."
    },
    {
        "id": "ch56-l3-q23",
        "question": "If a Bill is passed in Hindi in a state legislature, can it be challenged if no English translation is provided?",
        "options": ["No.","Yes, under Art 348(3), while a state can use its own language, an","MUST be published alongside for bills and acts.","Only in the Supreme Court.","Only if the PM objects."],
        "correctAnswerIndex": 1,
        "explanation": "English translation is a mandatory"
    },
    {
        "id": "ch56-l3-q24",
        "question": "Analyze the",
        "options": ["Because lawyers didn","It was a matter of administrative processing; Tamil groups were the first to formally petition with the predefined criteria in 2004.","Sanskrit is not an Indian language.","Only the 21st amendment allowed it."],
        "correctAnswerIndex": 1,
        "explanation": "The timeline reflects procedural activation rather than comparative merit."
    },
    {
        "id": "ch56-l3-q25",
        "question": "Is the",
        "options": ["Yes.","No, it is a","constituted by the President under Art 344(4) and is distinct from regular DRSCs.","Actually, it is a subcommittee of the Home Ministry.","It is a temporary committee."],
        "correctAnswerIndex": 1,
        "explanation": "Its specific constitutional genesis sets it apart from usual parliamentary business committees."
    },
    {
        "id": "ch56-l3-q26",
        "question": "Who is the",
        "options": ["The Home Minister.","The Parliament (by a Constitutional Amendment Bill).","The President (by an executive order).","The Election Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional change requires Art 368 parliamentary procedure."
    },
    {
        "id": "ch56-l3-q27",
        "question": "Which Article provides for",
        "options": ["Article 348.","Article 349.","Article 350.","Article 351."],
        "correctAnswerIndex": 1,
        "explanation": "Art 349 (Transitional) required any language law in the first 15 years to have prior Presidential sanction."
    },
    {
        "id": "ch56-l3-q28",
        "question": "Does",
        "options": ["Yes.","No, classical status is","; Official status is",". They are different categories.","Only for Sanskrit.","Only for Tamil."],
        "correctAnswerIndex": 1,
        "explanation": "Classification depends on purpose: Heritage vs Governance."
    },
    {
        "id": "ch56-l3-q29",
        "question": "Review the",
        "options": ["Only Marathi got it in 2024.","All five were approved in October 2024 by the Union Cabinet.","None are approved yet.","They were classical since 1950."],
        "correctAnswerIndex": 1,
        "explanation": "This was a major recent expansion of the classical language list (Current affairs update)."
    },
    {
        "id": "ch56-l3-q30",
        "question": "Why is the 8th Schedule called",
        "options": ["Because they represent the diverse linguistic soul of the nation.","Because Art 351 says Hindi should draw from them.","Because candidates can take UPSC exams in these languages.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Functional and cultural importance leads to this popular (though not strictly legal) designation."
    },
    {
        "id": "ch56-l3-q31",
        "question": "In the context of the Union of India vs. VKC Footsteps and subsequent 2024 rulings, the Supreme Court clarified that the recommendations of the GST Council under Article 279A are:",
        "options": ["Constitutionally binding on both the Union and the States.","Only of persuasive value, but serve as a platform for","","Binding on the States but not on the Union.","Subject to the approval of the Finance Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court (building on Mohit Minerals) clarified that GST Council recommendations are not strictly binding, possessing only"
    },
    {
        "id": "ch56-l3-q32",
        "question": "Article 246A (Special provision with respect to GST) is the only provision in the Constitution that provides for:",
        "options": ["Absolute separation of powers.","Simultaneous and concurrent power to both Parliament and State Legislatures.","The President","Judicial review of tax rates."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the mutually exclusive tax domains in the rest of the Constitution, Article 246A uniquely grants simultaneous and concurrent power to both the Union and States to levy taxes on the same supply transaction."
    },
    {
        "id": "ch56-l3-q33",
        "question": "If the GST Council decides to tax",
        "options": ["Yes, if 3/4th of the members of the Council agree.","No. Alcohol for human consumption is constitutionally excluded from the GST regime and remains in the State","Only during a National Emergency.","Only with a simple majority in Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Article 366(12A) expressly defines GST as excluding taxes on the supply of"
    },
    {
        "id": "ch56-l3-q34",
        "question": "Under Article 253 (Legislation for giving effect to international agreements), the Parliament enacted the Biological Diversity Act. Does this Act require the ratification by half of the states if it impacts subjects in the State List?",
        "options": ["Yes, under Article 368.","No. Article 253 provides an independent and overriding power to Parliament to implement international obligations regardless of the Seventh Schedule.","Only if it affects the North-Eastern states.","Only if the Rajya Sabha objects."],
        "correctAnswerIndex": 1,
        "explanation": "Article 253 gives Parliament the plenary power to enact laws on any subject—including State List subjects—to implement international treaties, fundamentally bypassing the state legislative process without needing ratification."
    },
    {
        "id": "ch56-l3-q35",
        "question": "A resolution passed by the Rajya Sabha under Article 249 (Power of Parliament to legislate in national interest) empowers the Parliament to make laws on a State List subject. Such a law:",
        "options": ["Replaces the State law completely.","Co-exists with the State law, but in case of a conflict, the Parliamentary law prevails (Article 251).","Prevents the State Legislature from making any further laws on that subject.","Must be renewed every 6 months."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 251, laws made under Article 249 do not restrict the State Legislature from making laws on the same subject; however, in case of repugnancy, the Central law prevails as long as it is in effect."
    },
    {
        "id": "ch56-l3-q36",
        "question": "In the context of",
        "options": ["The use of","entries to indirectly legislate on","subjects.","The","","Both (a) and (b).","The end of state sovereignty."],
        "correctAnswerIndex": 2,
        "explanation": "The farm laws highlighted the tension where Parliament utilized Entry 33 of the Concurrent List to intervene in agricultural trade, leading to accusations of colourable legislation—doing indirectly what it lacked direct power to do under the State List."
    },
    {
        "id": "ch56-l3-q37",
        "question": "The",
        "options": ["Article 254 applies directly.","Article 254 does not apply; instead, the","doctrine is used to see if the State Law is valid in its own sphere.","The State Law is automatically void.","The President decides within 14 days."],
        "correctAnswerIndex": 1,
        "explanation": "Article 254 strictly governs repugnancy within the Concurrent List. When a List II subject conflicts with a List III subject, courts apply the Doctrine of Pith and Substance to determine the true nature of the State law."
    },
    {
        "id": "ch56-l3-q38",
        "question": "If a State legislature re-enacts a law on a Concurrent subject that was previously struck down for being repugnant to a Central Law, and this new law receives the President",
        "options": ["It becomes valid in that state despite the Central Law.","It remains invalid.","The Supreme Court must re-examine it.","It becomes a Central Law."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 254(2), a repugnant state law on a Concurrent subject survives and prevails in that state if it has been reserved for and received the assent of the President."
    },
    {
        "id": "ch56-l3-q39",
        "question": "The",
        "options": ["The business owner is a resident of the taxing state.","The","or the","has a sufficient connection with the taxing state.","The other state gives a","","The Parliament passes a resolution."],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine validates a state"
    },
    {
        "id": "ch56-l3-q40",
        "question": "When a Legislature has no power to legislate on an item directly, but it attempts to do so by",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Colourable Legislation.","Doctrine of Harmonious Construction.","Doctrine of Immunity of Instrumentalities."],
        "correctAnswerIndex": 1,
        "explanation": "The Doctrine of Colourable Legislation is grounded in the maxim"
    },
    {
        "id": "ch56-l3-q41",
        "question": "The",
        "options": ["Name","True nature and character","Date of passing","Financial impact"],
        "correctAnswerIndex": 1,
        "explanation": "The doctrine allows a law to be upheld if its"
    },
    {
        "id": "ch56-l3-q42",
        "question": "The",
        "options": ["Entry 31 of List I (Post and Telegraphs).","Entry 97 of List I (Residuary Powers).","Concurrent List (Education).","State List (Local Government)."],
        "correctAnswerIndex": 1,
        "explanation": "Novel subjects like Data Privacy and Artificial Intelligence, which were unforeseen by the Constitution"
    },
    {
        "id": "ch56-l3-q43",
        "question": "Can the Parliament delegate",
        "options": ["Yes, by a simple law.","No. Residuary powers are exclusively vested in the Parliament and cannot be delegated.","Only during a Financial Emergency.","Only if the Supreme Court permits."],
        "correctAnswerIndex": 1,
        "explanation": "Residuary powers are a constitutional grant exclusively to the Union Parliament. Delegating them would alter the fundamental distribution of powers, requiring a Constitutional Amendment, not an ordinary law."
    },
    {
        "id": "ch56-l3-q44",
        "question": "The Governor is required to reserve a State Bill for the President if it",
        "options": ["Discretionary.","Mandatory.","Voluntary.","Only during President"],
        "correctAnswerIndex": 1,
        "explanation": "Article 200 expressly marks it as mandatory for the Governor to reserve a bill for the President if it in any way derogates from the powers of the High Court, endangering its constitutional position."
    },
    {
        "id": "ch56-l3-q45",
        "question": "If the President returns a State Bill for reconsideration and the State Legislature passes it again (with or without changes), is the President then bound to give assent?",
        "options": ["Yes, within 6 months.","No. Unlike the President","mandatory assent","Only if the Governor recommends it.","Only if it is a Money Bill."],
        "correctAnswerIndex": 1,
        "explanation": "While the President is bound to sign a reconsidered Central Bill, Article 201 does not place the same restriction on State Bills. The President can continue to withhold assent indefinitely."
    },
    {
        "id": "ch56-l3-q46",
        "question": "The power of Parliament to establish",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 0,
        "explanation": "While Article 247 is a specific constitutional grant, the power to establish additional courts for"
    },
    {
        "id": "ch56-l3-q47",
        "question": "Which Commission recommended that the",
        "options": ["Sarkaria Commission.","Punchhi Commission.","Rajamannar Committee (Tamil Nadu Govt).","First Administrative Reforms Commission."],
        "correctAnswerIndex": 0,
        "explanation": "The Sarkaria Commission on Centre-State Relations (1983) recommended transferring residuary legislative powers (other than taxation) to the Concurrent List to foster cooperative federalism."
    },
    {
        "id": "ch56-l3-q48",
        "question": "Assertion (A): The Parliament has exclusive power to make laws on any matter for the Union Territories, even if that matter falls in the State List. Reason (R): Union Territories are under the direct administration of the President and do not enjoy the same federal status as States.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 246(4) grants Parliament paramount legislative power over UTs across all lists. This stems from their direct administrative relationship with the President, lacking a fully independent federal identity."
    },
    {
        "id": "ch56-l3-q49",
        "question": "Assertion (A): A law made by Parliament under Article 252 (Request by states) cannot be amended by the state legislatures of the requesting states. Reason (R): Once the power to legislate is surrendered to Parliament under Article 252, the state legislature loses its competence over that subject for the duration the law is in force.",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 252, state legislatures surrender legislative competence regarding that specific act to Parliament. Consequently, only Parliament can amend or repeal the resulting unified legislation."
    },
    {
        "id": "ch56-l3-q50",
        "question": "",
        "options": ["Article 249 (National Interest).","Article 252 (Request of states).","Article 253 (International treaty).","It can do so directly under residuary powers."],
        "correctAnswerIndex": 1,
        "explanation": "Lacking a relevant international treaty or national emergency, Parliament cannot directly legislate on"
    },
    {
        "id": "ch56-l3-q51",
        "question": "The",
        "options": ["The Supreme Court.","The Parliament (which can exclude the jurisdiction of any court).","The President.","The State Legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "Article 262 empowers Parliament to provide for the adjudication of inter-state river disputes by law. Crucially, Parliament may explicitly exclude the jurisdiction of all courts, including the Supreme Court, over such disputes."
    },
    {
        "id": "ch56-l3-q52",
        "question": "In the K.C. Gajapati Narayan Deo vs. State of Orissa case, the Court dealt with which doctrine?",
        "options": ["Pith and Substance.","Colourable Legislation.","Harmonious Construction.","Severability."],
        "correctAnswerIndex": 1,
        "explanation": "This landmark Supreme Court case crystallized the Doctrine of Colourable Legislation, establishing that the legislature"
    },
    {
        "id": "ch56-l3-q53",
        "question": "",
        "options": ["Union List.","State List.","Concurrent List.","Residuary."],
        "correctAnswerIndex": 2,
        "explanation": "Economic and Social Planning, critical for coordinated national development while allowing regional nuance, was strategically placed in the Concurrent List."
    },
    {
        "id": "ch56-l3-q54",
        "question": "",
        "options": ["Only the Centre can make laws on education.","Both Centre and States can make laws, but Central law prevails in case of conflict.","The States must seek the Centre","Only the President can decide the syllabus."],
        "correctAnswerIndex": 1,
        "explanation": "Placement in the Concurrent List allows both tiers of government to legislate on education, subject to the rule of federal supremacy (Article 254) where the Central law prevails if there"
    },
    {
        "id": "ch56-l3-q55",
        "question": "The power to legislate on",
        "options": ["Union List.","State List.","Concurrent List.","Residuary (List I, Entry 97)."],
        "correctAnswerIndex": 3,
        "explanation": "As these are modern developments not explicitly foreseen in the original lists, the power defaults to Parliament under its exclusive residuary powers (Entry 97, Union List)."
    },
    {
        "id": "ch56-l3-q56",
        "question": "Which specific Article deals with the",
        "options": ["Article 251.","Article 254.","Article 246.","Article 250."],
        "correctAnswerIndex": 1,
        "explanation": "Article 254 explicitly addresses the doctrine of repugnancy, providing the mechanism to resolve direct inconsistencies between Central and State laws on Concurrent subjects."
    },
    {
        "id": "ch56-l3-q57",
        "question": "Under Article 248, who has the power to make laws on",
        "options": ["Parliament.","State Legislature.","Local Bodies.","Finance Commission."],
        "correctAnswerIndex": 0,
        "explanation": "Article 248 vests Parliament with the exclusive power to legislate on any matter—including establishing new taxes—that is not enumerated in the Concurrent or State Lists."
    },
    {
        "id": "ch56-l3-q58",
        "question": "Is the",
        "options": ["Yes.","No, it is subject to the constitutional distribution of powers and judicial review for basic structure."],
        "correctAnswerIndex": 1,
        "explanation": "Parliament is sovereign within its assigned bounds, but it is not supreme over the Constitution. Its laws are subject to the Seventh Schedule"
    },
    {
        "id": "ch56-l3-q59",
        "question": "The",
        "options": ["Consult the States.","Get 1/2 of state legislatures","Ask the Supreme Court.","Abolish the State List."],
        "correctAnswerIndex": 0,
        "explanation": "To foster cooperative federalism, the Sarkaria Commission strongly recommended that the Union Government actively consult state governments before introducing legislation on Concurrent subjects."
    },
    {
        "id": "ch56-l3-q60",
        "question": "In the A.S. Krishna vs. State of Madras case, the SC applied which doctrine to resolve a conflict between the Madras Prohibition Act and the Central CrPC?",
        "options": ["Doctrine of Pith and Substance.","Doctrine of Repugnancy.","Doctrine of Harmonious Construction.","Doctrine of Colourable Legislation."],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court applied the Doctrine of Pith and Substance, determining that the true nature of the Madras Act fell under the State List (intoxicating liquors), validating its incidental clash with CrPC procedures."
    }
];

export const CHAPTER_56_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
