import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch47-l1-q1",
        "question": "The Goods and Services Tax (GST) Council is a which type of body?",
        "options": ["Statutory Body","Constitutional Body","Executive Body","Optional Body"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council is a constitutional body established under Article 279A of the Indian Constitution."
    },
    {
        "id": "ch47-l1-q2",
        "question": "Which Constitutional Amendment Act provided for the establishment of the GST Council?",
        "options": ["42nd Amendment","44th Amendment","101st Amendment","122nd Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 101st Constitutional Amendment Act of 2016 introduced GST and the GST Council."
    },
    {
        "id": "ch47-l1-q3",
        "question": "Who is the Chairperson of the GST Council?",
        "options": ["The Prime Minister","The Union Finance Minister","The RBI Governor","The Vice President"],
        "correctAnswerIndex": 1,
        "explanation": "The Union Finance Minister is the ex-officio Chairperson of the GST Council."
    },
    {
        "id": "ch47-l1-q4",
        "question": "Who represents the Union in the GST Council besides the Finance Minister?",
        "options": ["The Cabinet Secretary","The Union Minister of State in charge of Revenue or Finance","The CAG","The Chairman of UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The Union Minister of State for Finance is a member of the Council representing the Center."
    },
    {
        "id": "ch47-l1-q5",
        "question": "Who represents the States in the GST Council?",
        "options": ["The Governors","The Chief Ministers","The Minister in-charge of Finance or Taxation or any other Minister nominated by each State Government","The State Finance Secretaries"],
        "correctAnswerIndex": 2,
        "explanation": "Each state nominates a minister, usually the State Finance Minister, to be a member."
    },
    {
        "id": "ch47-l1-q6",
        "question": "What is the",
        "options": ["One-third of the total members","One-half of the total members","Two-thirds of the total members","The Chairperson alone"],
        "correctAnswerIndex": 1,
        "explanation": "One-half of the total number of members of the GST Council constitute the quorum for its meetings."
    },
    {
        "id": "ch47-l1-q7",
        "question": "Every decision of the GST Council is taken by a majority of NOT less than:",
        "options": ["Simple majority","Two-thirds majority","Three-fourths of the weighted votes of the members present and voting","Unanimous vote"],
        "correctAnswerIndex": 2,
        "explanation": "Article 279A(9) specifies a 3/4th (75%) weighted majority for all decisions."
    },
    {
        "id": "ch47-l1-q8",
        "question": "What is the weightage of the Union Government",
        "options": ["One-half (50%)","One-third (33.3%)","Two-thirds (66.6%)","One-fourth (25%)"],
        "correctAnswerIndex": 1,
        "explanation": "The vote of the Central Government has a weightage of one-third of the total votes cast."
    },
    {
        "id": "ch47-l1-q9",
        "question": "What is the combined weightage of all State Governments",
        "options": ["One-half (50%)","One-third (33.3%)","Two-thirds (66.6%)","Three-fourths (75%)"],
        "correctAnswerIndex": 2,
        "explanation": "The votes of all state governments combined have a weightage of two-thirds of the total votes cast."
    },
    {
        "id": "ch47-l1-q10",
        "question": "Which of the following matters can the GST Council make recommendations on?",
        "options": ["Taxes, cesses and surcharges to be subsumed in GST","Goods and services that may be exempted from GST","Rates of GST","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The mandate includes rates, exemptions, thresholds, and transition rules."
    },
    {
        "id": "ch47-l1-q11",
        "question": "Who is responsible for constituting the GST Council?",
        "options": ["The Parliament","The President of India","The Prime Minister","The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "The President constitutes the GST Council via an order."
    },
    {
        "id": "ch47-l1-q12",
        "question": "Who is the Vice-Chairperson of the GST Council?",
        "options": ["The Chief Minister of the largest state","A person chosen from among the Ministers of State Governments","The RBI Governor","The Opposition Leader"],
        "correctAnswerIndex": 1,
        "explanation": "The members from the States choose one amongst themselves to be the Vice-Chairperson for a period they determine."
    },
    {
        "id": "ch47-l1-q13",
        "question": "The secretariate of the GST Council is located in:",
        "options": ["Mumbai","New Delhi","Benguluru","Hyderabad"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council"
    },
    {
        "id": "ch47-l1-q14",
        "question": "Is the GST Council considered a symbol of",
        "options": ["Yes","No, it is a symbol of Centralization","Only for UTs","Only for the first 5 years"],
        "correctAnswerIndex": 0,
        "explanation": "By bringing Center and States on a common platform for decisions on taxation, it epitomizes cooperative federalism."
    },
    {
        "id": "ch47-l1-q15",
        "question": "The GST Council decides the",
        "options": ["The maximum rate that can be charged","The minimum rate with a specified band","The rate for building materials/flooring","The rate for ground-level shops"],
        "correctAnswerIndex": 1,
        "explanation": "Floor rates with bands define the range within which tax can be varied."
    },
    {
        "id": "ch47-l1-q16",
        "question": "Until the GST Council recommends a date, which of the following goods is NOT subject to GST?",
        "options": ["Luxury cars","Petroleum crude and Natural gas","Smartphones","Textiles"],
        "correctAnswerIndex": 1,
        "explanation": "Petroleum products (crude, petrol, diesel, gas, and aviation fuel) are currently outside GST by Constitution until recommended otherwise."
    },
    {
        "id": "ch47-l1-q17",
        "question": "What is the threshold limit of turnover for GST registration recommended for small businesses?",
        "options": ["Rs. 2 Lakhs","Rs. 20 Lakhs (with variations for special category states)","Rs. 1 Crore","Rs. 5 Crores"],
        "correctAnswerIndex": 1,
        "explanation": "The Council recommends the threshold below which businesses are exempted."
    },
    {
        "id": "ch47-l1-q18",
        "question": "The GST Council establishes a mechanism for which of the following?",
        "options": ["Dispute resolution between Center and States or among States","Military cooperation among states","Inter-state migration of cattle","Education policy for primary schools"],
        "correctAnswerIndex": 0,
        "explanation": "It must provide a mechanism to adjudicate disputes arising out of its recommendations (Art 279A(11))."
    },
    {
        "id": "ch47-l1-q19",
        "question": "Article 279A provides that the GST Council shall meet:",
        "options": ["Once in 5 years","Every month mandatory","As and when it considers necessary","Only after the Union Budget"],
        "correctAnswerIndex": 2,
        "explanation": "The chairperson decides the timing and frequency of the meetings."
    },
    {
        "id": "ch47-l1-q20",
        "question": "The",
        "options": ["Union Finance Secretary","Union Revenue Secretary","Cabinet Secretary","RBI Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The Revenue Secretary to the Government of India is the ex-officio Secretary to the Council."
    },
    {
        "id": "ch47-l1-q21",
        "question": "Does the Union Cabinet",
        "options": ["Yes","No, the vote is collectively representing the Union","Only if the PM is present","Only for Constitutional matters"],
        "correctAnswerIndex": 1,
        "explanation": "The Union has one weighted vote (1/3rd) regardless of the number of central ministers present."
    },
    {
        "id": "ch47-l1-q22",
        "question": "Which of the following is NOT a member of the GST Council?",
        "options": ["Union Minister of State for Finance","State Finance Ministers","Comptroller and Auditor General of India (CAG)","Union Finance Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The CAG is not a member, although it may be invited to provide technical input."
    },
    {
        "id": "ch47-l1-q23",
        "question": "The decision to subsume",
        "options": ["Parliament","States individually","GST Council","Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The Council recommends which local taxes should be merged into the GST regime."
    },
    {
        "id": "ch47-l1-q24",
        "question": "What is the reason for the",
        "options": ["To ensure the larger states have more power.","To balance the interests of the Union and the States in a federal setup.","To make the Finance Minister superior to CMs.","To prevent any state from voting."],
        "correctAnswerIndex": 1,
        "explanation": "Neither the Center nor the States can take a decision unilaterally; they must agree for a 75% majority."
    },
    {
        "id": "ch47-l1-q25",
        "question": "The 101st Amendment also provided for",
        "options": ["1 year","5 years","10 years","Permanently"],
        "correctAnswerIndex": 1,
        "explanation": "The Act provided for compensation for a transition period of 5 years."
    },
    {
        "id": "ch47-l1-q26",
        "question": "Can the GST Council recommend",
        "options": ["No, rates must be fixed.","Yes, according to Article 279A(4)(f).","Only after a Parliament vote.","Only for the affected UTs."],
        "correctAnswerIndex": 1,
        "explanation": "It can recommend special rates to raise additional resources during disasters."
    },
    {
        "id": "ch47-l1-q27",
        "question": "The",
        "options": ["Maharashtra and Tamil Nadu","Arunachal Pradesh, J&K, Himachal Pradesh, etc.","Bihar and Uttar Pradesh","Only the 7 North-Eastern states"],
        "correctAnswerIndex": 1,
        "explanation": "A list of states specified by the Constitution (11 states total) gets different thresholds."
    },
    {
        "id": "ch47-l1-q28",
        "question": "The Chairperson of the Central Board of Indirect Taxes and Customs (CBIC) is a:",
        "options": ["Member of GST Council","Permanent Invitee (non-voting) to the Council","Vice Chairman of the Council","Secretary of the Council"],
        "correctAnswerIndex": 1,
        "explanation": "He is a permanent invitee to all meetings but without voting rights."
    },
    {
        "id": "ch47-l1-q29",
        "question": "Does a vacancy in the GST Council invalidate its proceedings?",
        "options": ["Yes.","No, any act or proceeding shall not be invalid on the ground of any vacancy or defect in constitution.","Only if the Center","Only if more than 5 seats are vacant."],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(10) ensures continuity despite minor administrative defects."
    },
    {
        "id": "ch47-l1-q30",
        "question": "The GST Council is a",
        "options": ["Article 279A","Article 280","Article 312","The Preamble"],
        "correctAnswerIndex": 0,
        "explanation": "Article 279A was specifically added to the Constitution to provide for the body."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch47-l2-q1",
        "question": "The GST Council",
        "options": ["Yes.","No, because 2/3rd (66.6%) is less than 75%.","Only if the Finance Minister gives a casting vote.","Only if the Supreme Court intervenes."],
        "correctAnswerIndex": 1,
        "explanation": "The Union"
    },
    {
        "id": "ch47-l2-q2",
        "question": "Assertion (A): The GST Council is a body where the Center and States work on the principle of Cooperative Federalism.\\nReason (R): No decision can be taken by the Center alone, nor by the States alone without the Center",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The weighted voting structure mandates consensus, making it a masterpiece of cooperative federal design."
    },
    {
        "id": "ch47-l2-q3",
        "question": "Which of the following describes the",
        "options": ["Exempted by a notification of the GST Council.","Constitutionally excluded by the definition of","in Article 366(12A).","Exempted because it is a luxury item.","Exempted for religious reasons."],
        "correctAnswerIndex": 1,
        "explanation": "GST is defined as a tax on supply of goods/services"
    },
    {
        "id": "ch47-l2-q4",
        "question": "The GST Council recommends",
        "options": ["Increase the number of bureaucrats.","Create a","unified market and ease the compliance burden.","Make illegal trade easier.","Help the states fight with each other."],
        "correctAnswerIndex": 1,
        "explanation": "Harmonization is the core economic objective of the GST reform."
    },
    {
        "id": "ch47-l2-q5",
        "question": "What does the GST Council recommend regarding the",
        "options": ["The rate for inter-state supply.","The principles for determining",".","Both 1 and 2.","None, IGST is handled by the RBI."],
        "correctAnswerIndex": 2,
        "explanation": "Inter-state trade (IGST) is a major mandate area for the council to prevent friction between states."
    },
    {
        "id": "ch47-l2-q6",
        "question": "If the GST Council",
        "options": ["The state is fined by the Center.","It creates legal and administrative challenges for inter-state business, which the Council aims to resolve through dialogue.","The CM of that state is dismissed.","The state is removed from the Council."],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch47-l2-q7",
        "question": "Which of the following describes",
        "options": ["The tax must be exactly 10%.","States can vary the rate within a narrow range (band) above a minimum (floor) rate for certain goods.","The rate for flooring and carpets only.","The rate for buildings with many floors."],
        "correctAnswerIndex": 1,
        "explanation": "This allows for some fiscal autonomy while maintaining overall national uniformity."
    },
    {
        "id": "ch47-l2-q8",
        "question": "Does the GST Council recommend",
        "options": ["No.","Yes, especially regarding lower exemption thresholds for registration.","Only for the state of Goa.","Only for states with no ports."],
        "correctAnswerIndex": 1,
        "explanation": "States like Uttarakhand, Himachal, and the NE states often get higher registration thresholds or other reliefs."
    },
    {
        "id": "ch47-l2-q9",
        "question": "Wait. In the GST Council, if the Union Finance Minister is absent, who chairs the meeting?",
        "options": ["The Vice-Chairperson (from states).","The Union Minister of State for Finance.","Both 1 and 2 can preside based on rules of procedure.","The PM."],
        "correctAnswerIndex": 2,
        "explanation": "Usually, the Minister of State or the Vice-Chairperson presides according to the adopted rules of the Council."
    },
    {
        "id": "ch47-l2-q10",
        "question": "The",
        "options": ["Help the rich companies.","Balance revenue needs with ease of doing business for micro-enterprises.","Make people quit their jobs.","Charge more tax from farmers."],
        "correctAnswerIndex": 1,
        "explanation": "It protects the smallest traders from the high compliance costs of the GST system."
    },
    {
        "id": "ch47-l2-q11",
        "question": "Which type of",
        "options": ["Tax on movie tickets.","Entertainment tax levied by local bodies (Panchayats/Municipalities).","Tax on cable TV.","Tax on circuses."],
        "correctAnswerIndex": 1,
        "explanation": "Local body entertainment taxes were preserved to maintain some revenue source for the"
    },
    {
        "id": "ch47-l2-q12",
        "question": "What is the reason for the",
        "options": ["To pay for the salary of GST officers.","To generate revenue to compensate states for losses during the first 5 years of GST implementation.","To pay for war expenses.","To pay for building the GST Council building."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch47-l2-q13",
        "question": "The term",
        "options": ["Center forces states to obey.","States force center to obey.","A relationship of interdependence where neither can fulfill tax functions effectively without the other","A relationship where there is no role for the Constitution."],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch47-l2-q14",
        "question": "Does the GST Council handle",
        "options": ["Yes.","No, Customs Duty is a Union tax outside GST (though IGST is charged on imports).","Only for imports from China.","Only for luxury items."],
        "correctAnswerIndex": 1,
        "explanation": "Basic Customs Duty remains a separate central revenue source."
    },
    {
        "id": "ch47-l2-q15",
        "question": "If a decision of the GST Council is challenged as being against",
        "options": ["The Council itself.","The Supreme Court or High Courts via judicial review.","The President of India.","The PMO."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional bodies are subject to judicial review to ensure they act within their mandate."
    },
    {
        "id": "ch47-l2-q16",
        "question": "The weightage of",
        "options": ["The states cannot pass a law that the Center strongly opposes.","The Center has more money.","The Center can ignore the states.","The Center can vote for other countries."],
        "correctAnswerIndex": 0,
        "explanation": "It acts as a"
    },
    {
        "id": "ch47-l2-q17",
        "question": "Conversely, the weightage of",
        "options": ["The Center cannot make changes without winning over at least some states.","The states can ignore the Center.","The states can hire the Finance Minister.","The states can print their own money."],
        "correctAnswerIndex": 0,
        "explanation": "Neither side can"
    },
    {
        "id": "ch47-l2-q18",
        "question": "Which of the following is correct about",
        "options": ["Successfully subsumed after 2011 Census.","Kept outside GST scope until the Council recommends their inclusion.","Only diesel is included.","Only kerosene is excluded."],
        "correctAnswerIndex": 1,
        "explanation": "States were reluctant to lose their"
    },
    {
        "id": "ch47-l2-q19",
        "question": "The",
        "options": ["Destination-based consumption tax.","Fixed-rate production tax.","Export-only tax.","Income-based tax."],
        "correctAnswerIndex": 0,
        "explanation": "GST is a destination-based tax, meaning revenue accrues to the state where goods/services are consumed."
    },
    {
        "id": "ch47-l2-q20",
        "question": "What is the",
        "options": ["10 members.","50% of total members.","75% of total members.","Chairman"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(7) mandates a 50% quorum."
    },
    {
        "id": "ch47-l2-q21",
        "question": "The Secretariat of the GST Council is headed by:",
        "options": ["The Finance Minister.","The Union Revenue Secretary (as ex-officio Secretary to the Council).","The Cabinet Secretary.","The RBI Governor."],
        "correctAnswerIndex": 1,
        "explanation": "Administrative support is provided by the Revenue Department officials."
    },
    {
        "id": "ch47-l2-q22",
        "question": "Which body was abolished/merged into the GST Council",
        "options": ["National Anti-Profiteering Authority (NAA).","Competition Commission of India (now handles NAA functions).","Supreme Court.","RBI."],
        "correctAnswerIndex": 1,
        "explanation": "The NAA was merged into the Competition Commission of India (CCI) for better efficiency."
    },
    {
        "id": "ch47-l2-q23",
        "question": "Can a State representative in the GST Council be a",
        "options": ["No, only the Finance Minister.","Yes, the state government can nominate",".","Only if the Finance Minister is dead.","Only for the UTs."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution allows states to nominate"
    },
    {
        "id": "ch47-l2-q24",
        "question": "The",
        "options": ["The population of the state.","The tax collected by the state.","A fixed weightage where all states have equal votes among themselves (combined to 2/3rd).","The distance from Delhi."],
        "correctAnswerIndex": 2,
        "explanation": "Each state has one equal vote within the 2/3rd block; this ensures even small states have a voice."
    },
    {
        "id": "ch47-l2-q25",
        "question": "The GST Council meetings are mostly consensus-based. Why is this significant?",
        "options": ["They don","It shows the high degree of trust and cooperative engagement in fiscal policy.","It makes the meetings faster.","It"],
        "correctAnswerIndex": 1,
        "explanation": "In practice, very few issues have gone to a formal vote, reflecting a culture of consensus."
    },
    {
        "id": "ch47-l2-q26",
        "question": "The",
        "options": ["The Center.","The State government of the destination.","The RBI.","Both Center and State jointly."],
        "correctAnswerIndex": 0,
        "explanation": "The Center collects IGST and then apportions the destination state"
    },
    {
        "id": "ch47-l2-q27",
        "question": "Which of the following describes",
        "options": ["Subsumed in GST only.","Subsumed in GST, but the Center can also levy","on it additionally.","Exempted from GST.","Only for exported tobacco."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch47-l2-q28",
        "question": "The GST Council is considered a",
        "options": ["It has US advisors.","It provides for representation of both Center and all States.","Its decisions are final in all countries.","It is part of the Federal police."],
        "correctAnswerIndex": 1,
        "explanation": "Structurally, it bridges the gap between the two tiers of government."
    },
    {
        "id": "ch47-l2-q29",
        "question": "The term",
        "options": ["Play music during meetings.","Deviate slightly from the floor rate for specific goods to raise more revenue locally.","Wear a wristband.","Abolish taxes."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch47-l2-q30",
        "question": "Who is the ultimate adjudicator for",
        "options": ["The Finance Minister.","The Supreme Court of India.","The IAS association.","The Local Police."],
        "correctAnswerIndex": 1,
        "explanation": "Article 131 gives SC original jurisdiction for inter-state/Center-State disputes."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch47-l3-q1",
        "question": "Analyze the",
        "options": ["It allows the Center to pass any rate it wants unilaterally.","It provides the Center a","to prevent fragmentation of the unified national market by a simple coalition of states.","It makes the Center representative of the Rajya Sabha.","It is only for the first ten years of GST operation."],
        "correctAnswerIndex": 1,
        "explanation": "With decisions requiring a 75% majority, the Center"
    },
    {
        "id": "ch47-l3-q2",
        "question": "The Supreme Court in",
        "options": ["The Council","The Council is a body for","where its recommendations have a","and not","value over state legislatures","The Council should be headed by the CJI.","States have no right to collect GST."],
        "correctAnswerIndex": 1,
        "explanation": "The court emphasized that both Parliament and State Legislatures have simultaneous and equal power to legislate on GST (Art 246A)."
    },
    {
        "id": "ch47-l3-q3",
        "question": "Consider the following statements regarding the",
        "options": ["1 only","2 only","2 and 3 only","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is wrong (elected by members, not appointed by PM). Statement 3 is wrong (weighted voting applies, no single casting vote for any member)."
    },
    {
        "id": "ch47-l3-q4",
        "question": "Analyze the impact of Article 279A on",
        "options": ["States have completely lost their power to levy any tax.","States have","their sovereignty in the council to achieve a higher common market goal while retaining some flexibility through floor rates/bands.","State Assemblies have become subordinate to the GST Council Secretariat.","Sovereignty is shifted to the World Trade Organization (WTO)."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch47-l3-q5",
        "question": "The",
        "options": ["To ensure small businesses pay more tax.","To prevent internal trade barriers and protect micro-entrepreneurs from administrative cost overheads that larger firms can absorb.","To make all states have the same number of shops.","To help the Center track all citizens."],
        "correctAnswerIndex": 1,
        "explanation": "Uniformity in thresholds prevents businesses from shifting location just to avoid tax compliance based on state lines."
    },
    {
        "id": "ch47-l3-q6",
        "question": "Under Article 279A(11), the GST Council must establish a mechanism for dispute adjudication. What constitutes the",
        "options": ["Border disputes between states.","Disputes arising out of the recommendations of the Council or its implementation.","Criminal cases involving tax fraud.","Disputes between the RBI and Commercial banks."],
        "correctAnswerIndex": 1,
        "explanation": "The mechanism is internal to the GST framework to handle federal friction over tax decisions."
    },
    {
        "id": "ch47-l3-q7",
        "question": "Compare the",
        "options": ["A mere data gathering body.","A mandatory institutional bridge to ensure simultaneous legislation and horizontal equity across the federation.","A branch of the Canadian Revenue Agency.","An optional meeting for CMs."],
        "correctAnswerIndex": 1,
        "explanation": "India"
    },
    {
        "id": "ch47-l3-q8",
        "question": "The weightage of",
        "options": ["Center pays 1/3rd of the salary.","It ensures that a coalition of roughly half of the states (weighted) CANNOT pass a resolution without the Center","It represents the 1/3rd population of India.","It is a lucky number."],
        "correctAnswerIndex": 1,
        "explanation": "Statistically, it requires the Center + enough states to reach the 75% bar, ensuring broad federal and national consensus."
    },
    {
        "id": "ch47-l3-q9",
        "question": "Which of the following describes the",
        "options": ["They are fixed and cannot be changed.","They reflect social and economic priorities (e.g., zero-rating essential food items) to minimize the regressive impact of indirect tax.","They are only for government departments.","They are only for products made in Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "Policy-making in the council balances revenue needs with the objective of making essentials affordable."
    },
    {
        "id": "ch47-l3-q10",
        "question": "Is the GST Council",
        "options": ["Manage the entire Economy including interest rates.","Harmonize indirect taxation to create a single national market.","Control the stock market.","Manage the Foreign Policy."],
        "correctAnswerIndex": 1,
        "explanation": "Its mandate is specifically restricted to"
    },
    {
        "id": "ch47-l3-q11",
        "question": "Analyzing",
        "options": ["To allow for a gradual transition after evaluating state revenue health and inflation impacts.","Because petroleum is not a",".","Because the pipes were not ready.","Because the Center wanted to keep all petroleum revenue forever."],
        "correctAnswerIndex": 0,
        "explanation": "It"
    },
    {
        "id": "ch47-l3-q12",
        "question": "The",
        "options": ["A rate of 0% for everyone.","A rate that would produce the same revenue amount as the taxes it replaced.","A rate that makes everyone neutral about politics.","A rate for selling neutral spirits."],
        "correctAnswerIndex": 1,
        "explanation": "RNR is a critical calculation to ensure the transition to GST doesn"
    },
    {
        "id": "ch47-l3-q13",
        "question": "In case of a tie in the weighting of votes (e.g., exactly 75.0%), what happens?",
        "options": ["The Chairperson has a casting vote.","The motion is considered passed.","The constitution is silent, but usually, rules of procedure require a definitive majority (75% PLUS).","The Supreme Court decides the vote."],
        "correctAnswerIndex": 2,
        "explanation": "A weighted majority must be"
    },
    {
        "id": "ch47-l3-q14",
        "question": "The",
        "options": ["Schedule V.","Schedule VII (Union, State, and Concurrent lists).","Schedule XI.","The Preamble."],
        "correctAnswerIndex": 1,
        "explanation": "It overhauled the division of taxing powers between the Center and States for items subsumed in GST."
    },
    {
        "id": "ch47-l3-q15",
        "question": "Analyze the role of the",
        "options": ["To save money on hiring people.","To reflect the dual nature of the tax and ensure technical expertise from both levels of administration.","To watch over each other like spies.","Because there are no other government jobs left."],
        "correctAnswerIndex": 1,
        "explanation": "A shared bureaucracy supports the shared constitutional mandate."
    },
    {
        "id": "ch47-l3-q16",
        "question": "The",
        "options": ["Manufacturing-intensive states (like Gujarat/TN).","Consumption-intensive states (like Bihar/UP).","States with no population.","UTs only."],
        "correctAnswerIndex": 1,
        "explanation": "Revenue shifts from the place of production (origin) to the place of consumption (destination)."
    },
    {
        "id": "ch47-l3-q17",
        "question": "Why is",
        "options": ["To encourage people to smoke.","To allow the Center to levy additional","for public health/revenue while maintaining GST uniformity.","Because tobacco is neither a good nor a service.","By mistake."],
        "correctAnswerIndex": 1,
        "explanation": "This preserves the Center"
    },
    {
        "id": "ch47-l3-q18",
        "question": "The",
        "options": ["Uttar Pradesh has more votes than Sikkim.","All states (big or small) have equal weightage among themselves within that 2/3rd block.","States only get to vote on alternate days.","States must vote as one single unit."],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch47-l3-q19",
        "question": "Does the",
        "options": ["Yes.","Not easily, as it would create","and violate the legislative intent of harmonized GST Acts passed by those very state assemblies.","Only if the bureaucrat is senior to the Minister.","Only during a weekend."],
        "correctAnswerIndex": 1,
        "explanation": "The cooperative framework relies on the political commitment of the governments that are members of the Council."
    },
    {
        "id": "ch47-l3-q20",
        "question": "Article 279A(10) protects Council proceedings from",
        "options": ["To allow the Council to function even if a state assembly is dissolved or a minister hasn","To prevent the Center from stopping the meeting.","To make the meeting less crowded.","To avoid hiring new members."],
        "correctAnswerIndex": 0,
        "explanation": "Administrative continuity is essential for a body governing the entire nation"
    },
    {
        "id": "ch47-l3-q21",
        "question": "Which of the following describes the",
        "options": ["One uniform rate for everything (e.g., 15%).","Progressive rates (0, 5, 12, 18, 28) to ensure basic goods are cheap and luxury goods pay more.","Random rates for each shop.","The rate depends on the time of the day."],
        "correctAnswerIndex": 1,
        "explanation": "This structure balances the need for revenue with social equity objectives."
    },
    {
        "id": "ch47-l3-q22",
        "question": "The",
        "options": ["Where the truck is parked.","Which state gets the tax revenue for an inter-state transaction.","Where the company building is located.","The age of the supplier."],
        "correctAnswerIndex": 1,
        "explanation": "In a destination-based tax, determining the"
    },
    {
        "id": "ch47-l3-q23",
        "question": "Assertion (A): The GST Council is the second most powerful constitutional body after the Parliament.\\nReason (R): It can override any law passed by the State Legislature.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Wait. Actually, the reason is FALSE. The SC clarified (Mohit Minerals) that the Council cannot override the legislature; it"
    },
    {
        "id": "ch47-l3-q24",
        "question": "The",
        "options": ["Help large companies avoid tax.","Reduce the compliance burden for small traders (pay a flat tax on turnover without input credit).","Make small traders use more paper.","Give money to the police."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch47-l3-q25",
        "question": "What does the",
        "options": ["They can ignore GST.","They have a lower threshold for mandatory GST registration (often Rs. 10 Lakhs instead of Rs. 20/40 Lakhs).","They get money from the UN.","They have to use a different currency."],
        "correctAnswerIndex": 1,
        "explanation": "This recognizes their unique economic and geographical constraints."
    },
    {
        "id": "ch47-l3-q26",
        "question": "Is the",
        "options": ["Yes.","No, he is a permanent invitee only.","Only if the Finance Minister is absent.","Only for technical matters."],
        "correctAnswerIndex": 1,
        "explanation": "Technical experts have a voice but not a vote, maintaining the political accountability of the council."
    },
    {
        "id": "ch47-l3-q27",
        "question": "Under Article 279A(8), the GST Council determines its own procedure. This gives it:",
        "options": ["Sovereign powers.","Procedural autonomy to define how meetings are called, how voting happens, etc.","The power to fire judges.","The power to change the name of the country."],
        "correctAnswerIndex": 1,
        "explanation": "Autonomy is essential for its functioning as an independent constitutional body."
    },
    {
        "id": "ch47-l3-q28",
        "question": "The 101st Amendment Act",
        "options": ["Parliament only.","State Legislatures only.","Both Parliament and State Legislatures (Simultaneous Power).","The President only."],
        "correctAnswerIndex": 2,
        "explanation": "This is the"
    },
    {
        "id": "ch47-l3-q29",
        "question": "Analyze the impact of",
        "options": ["States (via VAT).","Union (via Service Tax).","Local Bodies.","RBI."],
        "correctAnswerIndex": 1,
        "explanation": "GST empowered states to tax services for the first time, a major expansion of their fiscal mandate."
    },
    {
        "id": "ch47-l3-q30",
        "question": "The GST Council",
        "options": ["Unified registration and single returns for multiple taxes.","Giving grants to the companies.","Controlling the prices of raw materials.","Hiring more people in the government."],
        "correctAnswerIndex": 0,
        "explanation": "By merging multiple taxes into one and providing a unified digital interface (GSTN), it reduces procedural friction."
    }
];

export const CHAPTER_47_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
