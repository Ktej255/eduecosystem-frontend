import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch14-l1-q1",
        "question": "Political scientists typically classify political systems into two categories based on the nature of relations between the national government and the regional governments. What are these two categories?",
        "options": ["Parliamentary and Presidential","Democratic and Authoritarian","Unitary and Federal","Republic and Monarchy"],
        "correctAnswerIndex": 2,
        "explanation": "Political scientists classify governments into unitary and federal based on the nature of relations between the national government and the regional governments."
    },
    {
        "id": "ch14-l1-q2",
        "question": "By definition, what is a Unitary government?",
        "options": ["A government where all powers are divided between the Centre and the states by the Constitution.","A government where powers are concentrated in the hands of the states.","A government in which all powers are vested in the national government, and the regional governments, if they exist, derive their authority from the national government.","A government headed exclusively by a Monarch."],
        "correctAnswerIndex": 2,
        "explanation": "A unitary government is one in which all the powers are vested in the national government and the regional governments derive their authority from the national government."
    },
    {
        "id": "ch14-l1-q3",
        "question": "Which of the following countries is a prominent example of a Federal model of government?",
        "options": ["Britain","France","Japan","USA"],
        "correctAnswerIndex": 3,
        "explanation": "The US is the first and the oldest federation in the world. Britain, France, and Japan are examples of unitary models."
    },
    {
        "id": "ch14-l1-q4",
        "question": "The term",
        "options": ["Power or Authority","Treaty or Agreement","Division or Separation","Union or State"],
        "correctAnswerIndex": 1,
        "explanation": "The term"
    },
    {
        "id": "ch14-l1-q5",
        "question": "A federation can be formed in two ways:",
        "options": ["Canada","India","USA","Britain"],
        "correctAnswerIndex": 2,
        "explanation": "The US is the first and oldest federation formed by the"
    },
    {
        "id": "ch14-l1-q6",
        "question": "The Indian federal system is based on the model of which country?",
        "options": ["United States of America","Switzerland","Canada","Australia"],
        "correctAnswerIndex": 2,
        "explanation": "The Indian federal system is based on the"
    },
    {
        "id": "ch14-l1-q7",
        "question": "Does the Constitution of India explicitly contain the word",
        "options": ["Yes, in the Preamble.","Yes, in Article 1.","Yes, in the Seventh Schedule.","No, the word","has nowhere been used in the Constitution."],
        "correctAnswerIndex": 3,
        "explanation": "The word"
    },
    {
        "id": "ch14-l1-q8",
        "question": "According to Dr. B.R. Ambedkar, Article 1 describes India as a",
        "options": ["Indian federation is the result of an agreement among the states like the American Federation.","The states have the right to secede from the federation.","The Indian federation is NOT the result of an agreement among the states like the American Federation.","The states are completely sovereign and independent."],
        "correctAnswerIndex": 2,
        "explanation": "Dr. Ambedkar stated it implies two things: one, Indian federation is not the result of an agreement among the states like the American Federation; and two, the states have no right to secede from the federation. The federation is a union because it is indestructible."
    },
    {
        "id": "ch14-l1-q9",
        "question": "Which of the following is a classic feature of a Federal system of government?",
        "options": ["Single Government (only at the Centre).","Unwritten Constitution.","Dual Government (national government and regional governments).","Flexibility of the entire Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "A key feature of a federal system is the"
    },
    {
        "id": "ch14-l1-q10",
        "question": "In the Federal features of the Indian Constitution, how are powers divided between the Centre and the states?",
        "options": ["Through a verbal agreement between the Prime Minister and Chief Ministers.","Through the Seventh Schedule of the Constitution containing Union, State, and Concurrent Lists.","By the Supreme Court on a case-by-case basis.","By the President issuing ordinances every year."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution divides power between the Centre and the states in terms of the Union List, State List, and Concurrent List in the Seventh Schedule."
    },
    {
        "id": "ch14-l1-q11",
        "question": "Why is a",
        "options": ["So that citizens can read it in historical archives.","To ensure that the division of powers between the Centre and states is clear, defined, and acts as a binding document on both.","Because an unwritten constitution only allows for Presidential systems.","To prevent the Supreme Court from having any power."],
        "correctAnswerIndex": 1,
        "explanation": "A written Constitution is essential for a federation to specify the structure, organization, powers, and functions of both the Central and state governments, defining limits so they do not trespass into each other"
    },
    {
        "id": "ch14-l1-q12",
        "question": "The",
        "options": ["The Constitution can never be changed under any circumstances.","The Constitution cannot be understood easily.","Provisions concerned with the federal structure can only be amended by the joint action of the Central and state governments (special majority plus state ratification).","Only the President can amend the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "The division of powers established by the Constitution as well as its supremacy can be maintained only if the method of its amendment is rigid. The structural provisions require ratification by half the state legislatures."
    },
    {
        "id": "ch14-l1-q13",
        "question": "What role does the",
        "options": ["It conducts elections for state legislatures.","It appoints the Governors of the states.","It works to protect the supremacy of the Constitution and settle disputes between the Centre and the states or between the states.","It collects taxes for both Centre and states."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution establishes an independent judiciary headed by the Supreme Court to settle disputes between the Centre and the states and to protect the supremacy of the Constitution."
    },
    {
        "id": "ch14-l1-q14",
        "question": "How does",
        "options": ["By ensuring two Prime Ministers exists at all times.","The upper house (Rajya Sabha) represents the states of Indian Federation and protects state interests against undue interference by the Centre.","The lower house (Lok Sabha) consists exclusively of state governors.","By having two separate Constitutions, one for the Lok Sabha and one for the Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Bicameralism provides an Upper House (Rajya Sabha) that represents the states of the Indian Federation, acting as a mechanism to maintain the federal equilibrium and protect states"
    },
    {
        "id": "ch14-l1-q15",
        "question": "Although India is a federation, it has many",
        "options": ["Division of powers","Written Constitution","Single Constitution for both Centre and States","Bicameralism"],
        "correctAnswerIndex": 2,
        "explanation": "In a true federation like the US, states have the right to frame their own constitution. In India, there is a"
    },
    {
        "id": "ch14-l1-q16",
        "question": "How does the",
        "options": ["It allows states to constantly rewrite the Constitution.","The bulk of the Constitution can be amended by the unilateral action of the Parliament (simple or special majority) without any state consent.","It allows the President to suspend the Constitution at will.","It means the Constitution is physically printed on flexible paper."],
        "correctAnswerIndex": 1,
        "explanation": "The process of constitutional amendment is less rigid than in typical federations. The bulk of the Constitution can be amended by the unilateral action of the Parliament, a hallmark of a unitary system."
    },
    {
        "id": "ch14-l1-q17",
        "question": "The states in India do not have equal representation in the Rajya Sabha. How are the seats in the Rajya Sabha distributed among the states?",
        "options": ["Equally, every state gets 10 seats.","Based on their geographic area.","Based on their population (e.g., UP has 31, while Tripura has 1).","Based on their financial contribution to the Centre."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the US Senate, where states have equal representation regardless of size, Indian states are given representation in the Rajya Sabha on the basis of population. This is considered a unitary bias."
    },
    {
        "id": "ch14-l1-q18",
        "question": "Which of the following describes the",
        "options": ["During an emergency, the Centre","During an emergency, the federal structure converts into a unitary one without a formal amendment of the Constitution, giving the Central government absolute control over states.","Emergencies can only be declared by state governments.","State legislatures gain the power to impeach the President during emergencies."],
        "correctAnswerIndex": 1,
        "explanation": "During an emergency, the Central government becomes all-powerful and the states go into the total control of the Centre. It converts the federal structure into a unitary one without a formal amendment."
    },
    {
        "id": "ch14-l1-q19",
        "question": "In classical federations like the USA, there involves",
        "options": ["India also has Dual Citizenship.","India has Triple Citizenship (National, State, District).","India adopted a Single Citizenship (Indian citizenship only, no separate state citizenship).","India has no concept of citizenship."],
        "correctAnswerIndex": 2,
        "explanation": "In spite of a dual polity, the Constitution of India, like that of Canada, adopted the system of single citizenship. There is only Indian citizenship and no separate state citizenship."
    },
    {
        "id": "ch14-l1-q20",
        "question": "The Indian Judiciary is described as an",
        "options": ["It means state Supreme Courts are independent of the national Supreme Court.","There is a single system of courts (Supreme Court at the top, High Courts below) that enforces both Central laws as well as state laws.","State laws can only be enforced by state-run local courts.","The executive and judiciary are merged."],
        "correctAnswerIndex": 1,
        "explanation": "India has a single system of courts enforcing both Central laws as well as state laws. In contrast, the US has a double system of courts where federal courts enforce federal laws and state courts enforce state laws."
    },
    {
        "id": "ch14-l1-q21",
        "question": "The All-India Services (like IAS, IPS, IFS) are considered a unitary feature. Why?",
        "options": ["Because they are recruited exclusively by state governments.","Because they only serve in the Central government offices in Delhi.","Because they serve both the Centre and states, but they are recruited uniquely by the Centre, which retains ultimate control over them, violating strict federal division.","Because they are exempt from all state laws."],
        "correctAnswerIndex": 2,
        "explanation": "Though All-India services serve both Centre and states, they are recruited and trained by the Centre. They hold key posts in states, but ultimate control lies with the Central government, restricting state autonomy."
    },
    {
        "id": "ch14-l1-q22",
        "question": "How is the appointment of the state Governor by the President considered a unitary feature?",
        "options": ["The Governor is elected directly by the people of the state.","The Governor acts entirely on the advice of the state Chief Minister.","The Governor is appointed by the President, acts as an agent of the Centre, and holds office during the pleasure of the President.","The Governor can veto Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The governor is appointed by the President, holds office during his pleasure, and acts as an agent of the Centre. Central control over the states is maintained through this office."
    },
    {
        "id": "ch14-l1-q23",
        "question": "The institution of the Comptroller and Auditor General (CAG) restricts the financial autonomy of states (a unitary feature) because:",
        "options": ["The CAG is elected by the state assemblies.","The CAG audits only the Central government","The CAG audits the accounts of not only the Central government but also those of the states, yet is appointed solely by the President without consulting the states.","The CAG demands a share of the state taxes."],
        "correctAnswerIndex": 2,
        "explanation": "The CAG audits the accounts of both the Central and state governments. But his appointment and removal are done solely by the President, without consulting the states, restricting state financial autonomy."
    },
    {
        "id": "ch14-l1-q24",
        "question": "The Governor has the power to reserve certain types of bills passed by the state legislature for the consideration of the President. What leverage does this give the Centre?",
        "options": ["It gives the Centre no leverage.","It forces the President to sign all state bills immediately.","The President enjoys absolute veto over these bills, establishing a Central veto over state legislation.","It forces the Supreme Court to review the bills."],
        "correctAnswerIndex": 2,
        "explanation": "The governor is empowered to reserve certain types of bills passed by the state legislature for the consideration of the President. The President can withhold his assent to such bills in the first instance or in the second instance. Thus, the President enjoys absolute veto over State bills."
    },
    {
        "id": "ch14-l1-q25",
        "question": "Which prominent political scientist described the Indian Constitution as",
        "options": ["Granville Austin","K.C. Wheare","Ivor Jennings","Paul Appleby"],
        "correctAnswerIndex": 1,
        "explanation": "K.C. Wheare described the Constitution of India as"
    },
    {
        "id": "ch14-l1-q26",
        "question": "Granville Austin famously described the Indian federalism using which distinct term, signifying a system that produces a strong central government but doesn",
        "options": ["Bargaining Federalism","Co-operative Federalism","Federation with a centralizing tendency","Extremely Unitary"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin called the Indian federalism a"
    },
    {
        "id": "ch14-l1-q27",
        "question": "In the landmark S.R. Bommai case (1994), what did the Supreme Court explicitly declare regarding the structural nature of the Indian Constitution?",
        "options": ["That federalism is a superficial, non-essential feature.","That the Constitution is strictly unitary.","That","is an essential","of the Constitution.","That states have the constitutional right to declare independence."],
        "correctAnswerIndex": 2,
        "explanation": "In the S.R. Bommai case (1994), the Supreme Court laid down that the Constitution is federal and characterized federalism as its"
    },
    {
        "id": "ch14-l1-q28",
        "question": "The Supreme Court in S.R. Bommai noted that while the Centre is endowed with more powers, the States are not merely",
        "options": ["Completely subordinate to the Governor.","Agencies of the Central Government.","Supreme, with an independent constitutional existence.","Regulated directly by the United Nations."],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court stated that states have an independent constitutional existence. They are not appendages or agencies of the Centre. Within the sphere allotted to them, the states are supreme."
    },
    {
        "id": "ch14-l1-q29",
        "question": "Which of the following describes the distribution of power regarding the",
        "options": ["Residuary powers rest with the States, similar to the US.","Residuary powers rest with the Centre, similar to Canada, unlike the US where they rest with the States.","Residuary powers are shared equally between Centre and States.","There are no residuary powers; the lists are exhaustive forever."],
        "correctAnswerIndex": 1,
        "explanation": "The Centre has residuary powers in India (as in Canada), unlike in the US or Australia where residuary powers are vested in the states. This signifies a strong Centre."
    },
    {
        "id": "ch14-l1-q30",
        "question": "Morris Jones described the Indian federal system using which of the following phrases to highlight the constant negotiation between the Centre and States?",
        "options": ["Co-operative Federalism","Competitive Federalism","Bargaining Federalism","Coercive Federalism"],
        "correctAnswerIndex": 2,
        "explanation": "Morris Jones described it as"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch14-l2-q1",
        "question": "Consider the formation of federations globally. While the US Federation was formed by",
        "options": ["It is identical to the US; independent princely states voluntarily signed a treaty to form the Union of India.","Like Canada, it was formed by","; India was a unitary system under the British, and power was constitutionally devolved to states primarily for administrative convenience rather than based on a voluntary pact between sovereign entities.","It was formed by a United Nations mandate forcing different linguistic regions into a single union.","It was formed by integrating neighboring sovereign nations like Nepal and Bhutan."],
        "correctAnswerIndex": 1,
        "explanation": "The Indian federation resembles the Canadian model. It wasn"
    },
    {
        "id": "ch14-l2-q2",
        "question": "B.R. Ambedkar noted that the use of the word",
        "options": ["It signifies that states have the constitutional right to unilaterally secede from the Union if a state referendum approves it.","It signifies that the federation is an indestructible union; it is not the result of a voluntary agreement among the states, and therefore, no state possesses the right to secede from it.","It means the Centre can completely abolish all states at any time without amending the Constitution.","It signifies India is meant to eventually merge into a larger South Asian Union."],
        "correctAnswerIndex": 1,
        "explanation": "The term"
    },
    {
        "id": "ch14-l2-q3",
        "question": "Examine the",
        "options": ["The State List contains more subjects than the Union List.","The residuary powers (subjects not mentioned in any of the three lists) are exclusively vested in the Centre (Union Parliament), unlike the US/Australia where they belong to the states.","States can override central laws on subjects in the Concurrent List automatically.","The Centre relies entirely on states to collect all taxes."],
        "correctAnswerIndex": 1,
        "explanation": "A true federation usually leaves unspecified/future subjects (residuary powers) to the constituent units to protect their autonomy. India (following Canada) vested residuary powers in the Centre via Article 248, solidifying its dominance over emerging areas of legislation."
    },
    {
        "id": "ch14-l2-q4",
        "question": "Assertion (A): Unlike the US Constitution, which guarantees the territorial integrity of its constituent states, the Indian Constitution describes an",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. In the US, the federal government cannot alter a state"
    },
    {
        "id": "ch14-l2-q5",
        "question": "The",
        "options": ["Because the Supreme Court frequently amends the Constitution unilaterally.","Because the President can suspend the entire Constitution during peacetime.","Because the sheer bulk of the Constitution can be amended by the unilateral action of Parliament alone (either by simple or special majority), and only a very small fraction of core structural provisions requires ratification by half the states.","Because states have the power to initiate constitutional amendments."],
        "correctAnswerIndex": 2,
        "explanation": "In the US, EVERY constitutional amendment requires ratification by 3/4ths of the states. In India, Parliament can amend fundamental rights, directive principles, and vast procedural mechanisms without ever asking the states. State ratification is only needed for purely federal structure issues (like elections to the presidency or the 7th schedule)."
    },
    {
        "id": "ch14-l2-q6",
        "question": "The institution of the Governor is frequently criticized as undermining the federal architecture of India. How does the constitutional design of this office functionally serve as an",
        "options": ["Because the Governor is directly elected by the people of the state, challenging the Chief Minister","Because the Governor is appointed by the President, holds office entirely during the","(meaning they can be dismissed instantly without cause), and submits periodic reports to the Centre regarding the state","Because the Governor has the power to permanently dissolve the state legislature without reason.","Because the Governor controls the state"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor is not elected (unlike in the US). They are central appointees lacking secure tenure, surviving only on the Centre"
    },
    {
        "id": "ch14-l2-q7",
        "question": "Which of the following constitutional provisions acts as a direct, unilateral veto by the Central executive over laws passed by democratically elected State Legislatures?",
        "options": ["Article 131 (Original jurisdiction of the Supreme Court).","Article 200 and 201 (The Governor reserving state bills for the President","Article 249 (Rajya Sabha authorizing Parliament to legislate on state subjects).","Article 356 (President"],
        "correctAnswerIndex": 1,
        "explanation": "Under Art 200, a Governor can reserve a state bill. Under Art 201, the President (acting on the Union Cabinet"
    },
    {
        "id": "ch14-l2-q8",
        "question": "In classical federations (USA, Switzerland), the principle of equality among states is strictly maintained in the Upper House. How does the Indian Constitution deviate from this federal principle regarding the Rajya Sabha?",
        "options": ["All states have exactly 5 seats in the Rajya Sabha, but Union Territories have none.","Representation in the Rajya Sabha is allocated strictly on the basis of population, meaning heavily populated states (like UP with 31 seats) dominate smaller states (like Nagaland with 1 seat), undermining state equality.","The Rajya Sabha is entirely nominated by the President.","State governors appoint the members of the Rajya Sabha directly."],
        "correctAnswerIndex": 1,
        "explanation": "The US Senate gives every state exactly 2 seats, irrespective of population, ensuring tiny Rhode Island has the same legislative weight as massive California. India rejected this. The Rajya Sabha reflects demographic size, giving populous Hindi-belt states massive leverage over smaller North-Eastern or Southern states."
    },
    {
        "id": "ch14-l2-q9",
        "question": "Assertion (A): During a National Emergency (Article 352), the Indian Constitution automatically transforms from a federal system into a pure unitary system.\\nReason (R): Because the Central Government becomes all-powerful, and while State governments continue to exist, the Parliament acquires the power to legislate on any subject in the State List for the entire country.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is a unique feature of the Indian Constitution. Unlike the US, where federalism cannot be suspended, India"
    },
    {
        "id": "ch14-l2-q10",
        "question": "Which esteemed political scientist coined the phrase",
        "options": ["K.C. Wheare","Granville Austin","Morris Jones","Ivor Jennings"],
        "correctAnswerIndex": 2,
        "explanation": "Morris Jones used"
    },
    {
        "id": "ch14-l2-q11",
        "question": "Consider the Integrated Election Machinery in India. Is the Election Commission of India a federal or a unitary feature, and why?",
        "options": ["Federal, because each state has an independent Election Commission for state elections.","Unitary, because a single, centralized body constituted exclusively by the President conducts elections for both the central Parliament and the state legislatures, with states having no say in its composition or functioning.","Federal, because states fund half of its budget.","Unitary, because it can dissolve the Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the US, where states manage their own elections, India has an integrated machinery. The ECI (appointed solely by the Centre) conducts state elections. While there are State Election Commissions, they are completely separate and ONLY manage local bodies (Panchayats/Municipalities), not the State Assembly."
    },
    {
        "id": "ch14-l2-q12",
        "question": "In the context of",
        "options": ["The Lok Sabha","The Inter-State Council","The Rajya Sabha","The Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The All-India services directly intrude upon state autonomy as these officers man key state posts but are ultimately controlled by the Centre. Therefore, Constitution creators mandated that before creating a new such service, the Rajya Sabha (representing the states) must agree to it via a 2/3rds majority resolution."
    },
    {
        "id": "ch14-l2-q13",
        "question": "How does the Supreme Court",
        "options": ["It has no impact; Parliament can amend anything.","Because the Court designated","as a","of the Constitution, Parliament is legally barred from using Article 368 to completely alter the Constitution into a pure unitary state during peacetime.","It gives Parliament the explicit power to abolish federalism via a referendum.","It allows states to veto any constitutional amendment instantly."],
        "correctAnswerIndex": 1,
        "explanation": "This is a profound legal intersection. By elevating federalism to the"
    },
    {
        "id": "ch14-l2-q14",
        "question": "Which of the following bodies is a prime example of an extra-constitutional mechanism that historically fostered",
        "options": ["The Supreme Court of India.","The Election Commission.","The Planning Commission (and now the NITI Aayog).","The Comptroller and Auditor General (CAG)."],
        "correctAnswerIndex": 2,
        "explanation": "While unmentioned in the Constitution (they are executive bodies), the Planning Commission and NITI Aayog serve as crucial platforms where the Centre and States negotiate five-year plans, resource allocation, and development strategies, functioning as the primary engines of"
    },
    {
        "id": "ch14-l2-q15",
        "question": "If a severe financial crisis threatens the financial stability of India, the President can declare a Financial Emergency (Article 360). How does this impact the federal distribution of financial powers?",
        "options": ["The Centre must transfer all its funds to the states.","It has no impact on state finances; they remain autonomous.","The Centre acquires complete control over the states","States are permitted to print their own currency."],
        "correctAnswerIndex": 2,
        "explanation": "A Financial Emergency severely curtails state financial autonomy (a unitary feature). The Centre essentially takes over state budgets, can order reductions in salaries of state employees (including High Court judges), and forces all state money bills to be routed to the President."
    },
    {
        "id": "ch14-l2-q16",
        "question": "Assertion (A): The Constitution of India guarantees",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Neither A nor R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are absolutely false. India deliberately rejected Dual Citizenship (unlike the USA) to foster a single national identity and prevent acute regionalism. There is only ONE citizenship—Indian. Furthermore, states in India (post the abrogation of Article 370 for J&K) do NOT have separate Constitutions."
    },
    {
        "id": "ch14-l2-q17",
        "question": "K.C. Wheare",
        "options": ["India acts like a federation only regarding foreign policy.","The system is, in normal times, a unitary state with subsidiary federal features, rather than a true federal state with subsidiary unitary features.","The states have the power to secede, making it weakly federal.","The Parliament is weak and frequently overpowered by state legislatures."],
        "correctAnswerIndex": 1,
        "explanation": "Wheare argued the centralizing tilt (residuary powers, emergency powers, single citizenship, all-India services) was so profound that India was essentially a unitary state that merely operated with federal mechanics for administrative convenience, hence"
    },
    {
        "id": "ch14-l2-q18",
        "question": "Consider the Integrated Audit Machinery. The CAG audits both central and state accounts. Why is this considered an infringement on the purely federal character of the states?",
        "options": ["Because the CAG is an employee of the state government.","Because the CAG only audits states and exempts the Centre.","Because a purely federal state would have a separate, independent state auditor appointed by the state legislature to audit state funds, whereas the CAG is an external central appointee auditing sovereign state finances.","Because the CAG can arrest State Chief Ministers."],
        "correctAnswerIndex": 2,
        "explanation": "Financial accountability is a hallmark of sovereignty. By having a central appointee (the CAG) audit state accounts and determine financial propriety, the state"
    },
    {
        "id": "ch14-l2-q19",
        "question": "Which of the following best explains why the framers of the Indian Constitution opted for a",
        "options": ["Because they hated the idea of local governance.","To emulate the economic success of Canada.","Due to the sheer size of the country, the immediate trauma of Partition, diverse linguistic/religious fault lines, and the fear of Balkanization (fragmentation into smaller countries); a strong Centre was deemed vital to maintain national unity and integrity.","Because the British forced them to adopt the Canadian model."],
        "correctAnswerIndex": 2,
        "explanation": "Historical context is key. The bloody reality of Partition and the presence of over 500 princely states made the framers paranoid about disintegration. They built a strong Centre (unitary bias) specifically to act as an iron hoop binding the diverse, potentially fissiparous nation together."
    },
    {
        "id": "ch14-l2-q20",
        "question": "If a clear, direct conflict arises between a law passed by the Parliament and a law passed by a State Legislature on a subject present in the Concurrent List, what is the standard constitutional resolution?",
        "options": ["The State law prevails within that state.","The Supreme Court flips a coin.","The Parliamentary law prevails, rendering the State law void to the extent of the repugnancy.","Both laws are suspended and the subject is moved to the Union List."],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 254(1), in case of a conflict (repugnancy) between a central law and a state law on a concurrent subject, the central law prevails. The state law becomes void to the extent it contradicts the central law. This explicitly establishes the supremacy of the Union Parliament in shared areas of legislation."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch14-l3-q1",
        "question": "Consider the constitutional anomaly of Article 249. If the Rajya Sabha passes a resolution declaring that it is necessary",
        "options": ["The State Legislature permanently loses the power to legislate on that specific subject.","The State Legislature can concurrently legislate on the subject, but in case of repugnancy, the Central law prevails; however, the resolution typically expires after one year.","The State Legislature must immediately ratify the Rajya Sabha resolution.","The State Legislature can override the Central law with a 2/3rds majority."],
        "correctAnswerIndex": 1,
        "explanation": "Art 249 allows Parliament to legislate on a state subject temporarily (the resolution lasts 1 year, extendable). Crucially, it does NOT remove the legislative power of the State (unlike a National Emergency under Art 250). The State can still pass laws concurrently, but the overarching principle of central supremacy (Art 254) means the central law prevails if they clash."
    },
    {
        "id": "ch14-l3-q2",
        "question": "In the context of the S.R. Bommai v. Union of India (1994) judgment, the Supreme Court fundamentally altered the application of Article 356 (President",
        "options": ["That Article 356 was unconstitutional and should be deleted.","That the President","That federalism is a","of the Constitution, state governments possess independent constitutional existence, and therefore the power under Art 356 is conditional, subject to strict judicial review, and cannot be used arbitrarily to dismiss opposition governments.","That the Centre must consult the UN before imposing President"],
        "correctAnswerIndex": 2,
        "explanation": "The Bommai judgment was a watershed moment for Indian federalism. By declaring federalism a"
    },
    {
        "id": "ch14-l3-q3",
        "question": "Assertion (A): The constitutional mechanism for resolving disputes between the Centre and States (Article 131) vests exclusive original jurisdiction in the Supreme Court, highlighting a pure federal characteristic.\\nReason (R): Because in a true federation, an independent federal court is essential to neutrally arbitrate conflicts arising from the defined constitutional division of powers between the sovereign entities.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. This is one of the few"
    },
    {
        "id": "ch14-l3-q4",
        "question": "Consider the criticism that the",
        "options": ["If the bill is a Money Bill.","If the bill concerns agricultural tax.","If the bill derogates from (endangers) the position or powers of the State High Court.","If the bill alters the state capital."],
        "correctAnswerIndex": 2,
        "explanation": "Generally, reservation of bills is at the Governor"
    },
    {
        "id": "ch14-l3-q5",
        "question": "Which of the following scenarios best illustrates the phenomenon of",
        "options": ["The Constitution providing a uniform administrative structure for all states without exception.","The division of powers being exactly identical for every state.","The existence of special constitutional provisions (like Article 371-A for Nagaland, 371-G for Mizoram) that grant these specific states unique autonomy over customary laws and land ownership, rights not available to other states like UP or Bihar.","The Centre having the power to declare emergencies uniformly across India."],
        "correctAnswerIndex": 2,
        "explanation": "Symmetric federalism means all states have identical rights (like the 50 US states). India exhibits"
    },
    {
        "id": "ch14-l3-q6",
        "question": "In evaluating the nature of Indian Federalism, Paul Appleby characterized the system as",
        "options": ["Because states have their own distinct constitutions and citizenships.","Because the Supreme Court ruled federalism unconstitutional in 1973.","Because in times of crisis (Emergency), the constitutional structure metamorphoses into a unitary one without formal amendment, allowing the Centre to assume sovereign control over subjects exclusively listed in the State List.","Because the Prime Minister is not elected directly."],
        "correctAnswerIndex": 2,
        "explanation": "The defining characteristic of a true federation is that the division of powers is absolute and cannot be suspended unilaterally by the center. India"
    },
    {
        "id": "ch14-l3-q7",
        "question": "Consider the constitutional paradox regarding the residuary powers (Article 248). While residuary powers vest with the Union Parliament, what is the prerequisite process if a dispute arises regarding whether a new subject (e.g., Artificial Intelligence regulation) is actually a",
        "options": ["Parliament unilaterally passes a resolution defining it as residuary.","The President defines the matter securely within the Union List.","The Supreme Court exercises original jurisdiction to interpret the entries in the three lists (Seventh Schedule) to conclusively determine if the subject is genuinely","or merely an extension of an existing state/concurrent subject.","The state legislatures hold a joint referendum."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament cannot simply"
    },
    {
        "id": "ch14-l3-q8",
        "question": "Assertion (A): The Indian Constitution provides for a dual polity but lacks dual citizenship, creating a paradox in a supposedly federal state.\\nReason (R): The architects of the Constitution feared that dual citizenship (like in the US) would foster regionalism and secessionist tendencies in a deeply fractured, nascent nation, hence prioritizing national integration over classical federal aesthetics.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both A and R are true. In classical federations (US, Switzerland), citizens owe allegiance to both the federal state and their provincial state, holding dual citizenship. India rejected this (following Canada) to forge unified"
    },
    {
        "id": "ch14-l3-q9",
        "question": "Which of the following features fundamentally separates the Indian",
        "options": ["The US Constitution requires a unanimous vote of all 50 states to alter a boundary.","In India, Parliament requires a 2/3rds special majority to alter a state","In the US, no state can be formed within the jurisdiction of another, or by the junction of two or more states, without the explicit, legally binding consent of the legislatures of the States concerned.","In India, states can alter their own boundaries freely without Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Article IV, Section 3 of the US Constitution guarantees territory; Congress cannot carve up a state without that state legislature"
    },
    {
        "id": "ch14-l3-q10",
        "question": "Regarding",
        "options": ["It is chaired by the Chief Justice, not the Prime Minister.","Its recommendations are purely advisory; it is an investigative and deliberative body, not a legislative or judicial tribunal capable of rendering binding verdicts.","It meets only once every ten years.","It consists exclusively of Central government ministers with no state representation."],
        "correctAnswerIndex": 1,
        "explanation": "The Inter-State Council investigates disputes and recommends better coordination of policy. However, unlike a decree from the Supreme Court (Art 131), the Council"
    },
    {
        "id": "ch14-l3-q11",
        "question": "Consider the Doctrine of",
        "options": ["It automatically shifts the subject to the Concurrent List.","It dictates that if the","(pith and substance) of the state law falls squarely within the State List, the law is entirely valid, even if it incidentally or accidentally encroaches upon a Union subject.","It allows states to deliberately override Union laws if they have a","reason.","It forces the Centre to rewrite the law in substance."],
        "correctAnswerIndex": 1,
        "explanation": "This is a vital judicial tool. Without it, the rigid lists would paralyze states. If a state passes a law clearly regarding"
    },
    {
        "id": "ch14-l3-q12",
        "question": "In 2016, the monumental 101st Constitutional Amendment Act (GST) dramatically reorganized fiscal federalism. How did this amendment fundamentally alter the constitutional mechanics of the division of power?",
        "options": ["It transferred all taxation powers exclusively to the Union Government.","It replaced the rigid separation of tax powers (Centre taxed manufacturing; States taxed sales) with a","taxation model (Article 246A), where BOTH Parliament and State Legislatures hold simultaneous, co-equal power to levy taxes on the same transaction (supply of goods/services).","It abolished the Finance Commission.","It allowed States to collect customs duties on international borders."],
        "correctAnswerIndex": 1,
        "explanation": "Pre-GST, there was a strict wall: Centre taxed production (Excise), States taxed consumption (VAT/Sales). GST (Art 246A) shattered this, giving both the Centre and the States simultaneous, concurrent jurisdiction to tax every transaction across the supply chain. This was the most radical shift in Indian fiscal federalism since 1950."
    },
    {
        "id": "ch14-l3-q13",
        "question": "Assertion (A): The Governor",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "Assertion (A) is true; the Governor uses this tool to protect central interests. Reason (R) is FALSE. While a Governor cannot return a Money Bill to the state assembly for reconsideration, they CAN reserve a Money Bill for the President"
    },
    {
        "id": "ch14-l3-q14",
        "question": "The role of the",
        "options": ["Because states have zero taxation power of their own.","Because the Constitution structurally created a vertical fiscal imbalance: the Centre was allocated the most lucrative, elastic tax heads (Income Tax, Corp Tax) to ensure national economic power, while states were given expensive developmental responsibilities (health, police) with limited tax bases.","Because the British left a massive national debt.","Because the Election Commission cannot handle financial distribution."],
        "correctAnswerIndex": 1,
        "explanation": "This is"
    },
    {
        "id": "ch14-l3-q15",
        "question": "When evaluating the",
        "options": ["It allows the Centre to amend the Schedule secretly overnight.","The Centre can amend the Schedule merely via an executive order (ordinance) without consulting Parliament.","Any amendment attempting to alter the lists in the Seventh Schedule requires a special majority in Parliament AND mandatory ratification by the legislatures of at least half the states, giving states a collective veto over structural alterations.","It gives the Supreme Court the sole power to rewrite the lists."],
        "correctAnswerIndex": 2,
        "explanation": "While much of the Constitution is"
    },
    {
        "id": "ch14-l3-q16",
        "question": "Consider the constitutional paradox of",
        "options": ["Frequent border invasions by foreign powers.","The emergence of coalition politics at the Centre coupled with differing opposition parties holding power in the States, leading Central governments to cynically dismiss hostile state governments to consolidate political control.","The Supreme Court continuously ordering the Centre to dissolve state assemblies.","States repeatedly declaring independence."],
        "correctAnswerIndex": 1,
        "explanation": "During the era of Congress dominance (and later Janata Party), whenever the party at the Centre lost an election in a state to a rival party, they frequently fabricated a"
    },
    {
        "id": "ch14-l3-q17",
        "question": "Under Article 252, Parliament can legislate on a State List subject if two or more states pass resolutions requesting it. If Parliament passes such a law (e.g., the Wildlife Protection Act, 1972), what is the subsequent constitutional limitation on the states that requested it?",
        "options": ["They can amend the Parliamentary law at any point independently.","They can repeal the Parliamentary law within their state borders.","Any law so made by Parliament cannot be amended or repealed by the Legislatures of the adopting States; the power to amend or repeal surrenders entirely to the Parliament.","They must pay a federal tax to maintain the law."],
        "correctAnswerIndex": 2,
        "explanation": "This is a voluntary surrender of sovereignty. If states ask the Centre to step in to create uniform legislation (e.g., for Wildlife or Water Pollution), they give up their right to modify that law later. Only the Parliament can amend or repeal it, cementing another centralizing tool."
    },
    {
        "id": "ch14-l3-q18",
        "question": "In analyzing the concept of a",
        "options": ["There is no dual executive; the Prime Minister rules the states directly.","There is a dual executive (President/PM at Centre; Governor/CM at State). However, the fault line is that the State","(Governor) is an appointee of the Central","(President), fundamentally compromising state executive autonomy.","The President and Governors are both directly elected simultaneously.","States do not have Chief Ministers, only Governors."],
        "correctAnswerIndex": 1,
        "explanation": "This highlights the"
    },
    {
        "id": "ch14-l3-q19",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are FALSE. The Doctrine of Repugnancy (Art 254) ONLY applies squarely to subjects in the CONCURRENT LIST (where both have power). It does not apply if the Centre tries to legislate on purely State List subjects (except in emergencies/resolutions). Also, a major exception exists: if a State law on a concurrent subject gets Presidential assent, it prevails over an earlier central law in that specific state."
    },
    {
        "id": "ch14-l3-q20",
        "question": "If the Supreme Court were to review a proposed Constitutional Amendment (passed by a 2/3rds majority in Parliament) that entirely removed the",
        "options": ["The Court would uphold it, as Parliament","The Court would strike it down unconditionally as violating the","pillar of the",".","The Court would uphold it purely if 50% of the States paradoxically ratified their own destruction.","The Court would mandate a national referendum on the issue."],
        "correctAnswerIndex": 1,
        "explanation": "Since Bommai (1994), federalism is a basic feature. Erasing the State List destroys the"
    }
];

export const CHAPTER_14_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
