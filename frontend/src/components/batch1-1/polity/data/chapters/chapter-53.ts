import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch53-l1-q1",
        "question": "Which Constitutional Amendment Act provided for the establishment of the GST Council?",
        "options": ["100th Amendment Act","101st Amendment Act","102nd Amendment Act","122nd Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 101st Constitutional Amendment Act of 2016 paved the way for the introduction of the Goods and Services Tax (GST) and the establishment of the GST Council."
    },
    {
        "id": "ch53-l1-q2",
        "question": "Under which Article of the Constitution of India is the GST Council constituted?",
        "options": ["Article 246A","Article 269A","Article 279A","Article 280"],
        "correctAnswerIndex": 2,
        "explanation": "Article 279A of the Constitution empowers the President to constitute a GST Council as a joint forum of the Centre and the States."
    },
    {
        "id": "ch53-l1-q3",
        "question": "The GST Council is a joint forum of the Centre and the States. Who is the ex-officio Chairperson of this Council?",
        "options": ["The Prime Minister","The Union Finance Minister","The NITI Aayog Vice-Chairman","The Union Cabinet Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Union Finance Minister is the Chairperson of the GST Council."
    },
    {
        "id": "ch53-l1-q4",
        "question": "The Vice-Chairperson of the GST Council is chosen from among:",
        "options": ["The Union Ministers of State for Finance","The State Finance Ministers (by themselves)","The Governors of the States","The Members of the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The members of the GST Council (State Finance Ministers) choose one from among themselves to be the Vice-Chairperson of the Council."
    },
    {
        "id": "ch53-l1-q5",
        "question": "The",
        "options": ["One-third of the total number of members","One-half of the total number of members","Two-thirds of the total number of members","Simple majority of the members"],
        "correctAnswerIndex": 1,
        "explanation": "One-half of the total number of members of the GST Council shall constitute the quorum for its meetings."
    },
    {
        "id": "ch53-l1-q6",
        "question": "Every decision of the GST Council must be passed by a majority of not less than:",
        "options": ["One-half of the weighted votes of the members present and voting","Two-thirds of the weighted votes of the members present and voting","Three-fourths of the weighted votes of the members present and voting","Absolute majority of all members"],
        "correctAnswerIndex": 2,
        "explanation": "Decisions of the GST Council are taken by a majority of not less than three-fourths (75%) of the weighted votes of the members present and voting."
    },
    {
        "id": "ch53-l1-q7",
        "question": "In the GST Council, the vote of the Central Government has a weightage of:",
        "options": ["One-half of the total votes cast","One-third of the total votes cast","Two-thirds of the total votes cast","One-fourth of the total votes cast"],
        "correctAnswerIndex": 1,
        "explanation": "The vote of the Central Government has a weightage of one-third (33.33%) of the total votes cast in the meeting."
    },
    {
        "id": "ch53-l1-q8",
        "question": "The votes of all the State Governments taken together have a weightage of:",
        "options": ["One-third of the total votes cast","Two-thirds of the total votes cast","One-half of the total votes cast","Three-fourths of the total votes cast"],
        "correctAnswerIndex": 1,
        "explanation": "The votes of all the State Governments taken together have a weightage of two-thirds (66.66%) of the total votes cast in the meeting."
    },
    {
        "id": "ch53-l1-q9",
        "question": "The GST Council recommends the date on which GST shall be levied on which of the following products?",
        "options": ["Tobacco and tobacco products","Petroleum crude, high-speed diesel, and motor spirit","Alcohol for human consumption","Electronic goods"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(5) specifies that the GST Council shall recommend the date on which GST shall be levied on petroleum crude, high-speed diesel, motor spirit (petrol), natural gas, and aviation turbine fuel."
    },
    {
        "id": "ch53-l1-q10",
        "question": "The GST Council is a ______ body.",
        "options": ["Statutory","Constitutional","Executive","Judicial"],
        "correctAnswerIndex": 1,
        "explanation": "Since it is established under Article 279A of the Constitution, it is a constitutional body."
    },
    {
        "id": "ch53-l1-q11",
        "question": "Who appoints the GST Council?",
        "options": ["The Prime Minister","The President of India","The Finance Minister","The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The President is empowered to constitute the GST Council within 60 days of the commencement of the 101st Amendment Act."
    },
    {
        "id": "ch53-l1-q12",
        "question": "The Union Minister of State in charge of Revenue or Finance is a ____ of the GST Council.",
        "options": ["Chairman","Vice-Chairman","Member","Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "The Union Minister of State in charge of Revenue or Finance is one of the members of the Council representing the Centre."
    },
    {
        "id": "ch53-l1-q13",
        "question": "The GST Council makes recommendations on which of the following?",
        "options": ["Taxes, cesses and surcharges to be subsumed in GST","Exemptions from GST","Model GST Laws","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 279A(4) lists various matters on which the Council makes recommendations, including taxes to be subsumed, exemptions, and model laws."
    },
    {
        "id": "ch53-l1-q14",
        "question": "Which of the following describes the nature of the GST Council?",
        "options": ["Arbitrary","Cooperative Federalism","Unitary","Monarchical"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council is considered a masterpiece of cooperative federalism as it brings the Centre and States together for decision-making on indirect taxes."
    },
    {
        "id": "ch53-l1-q15",
        "question": "The headquarters of the GST Council is located at:",
        "options": ["Mumbai","New Delhi","Bengaluru","Chennai"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council Secretariat is based in New Delhi."
    },
    {
        "id": "ch53-l1-q16",
        "question": "The GST laws include:",
        "options": ["CGST Act","SGST Act","IGST Act","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The GST framework comprises the Central GST (CGST), State GST (SGST), and Integrated GST (IGST) acts."
    },
    {
        "id": "ch53-l1-q17",
        "question": "The GST Council provides recommendations on the threshold limit of turnover below which units may be:",
        "options": ["Abolished","Exempted from GST","Heavily taxed","Merged with the Centre"],
        "correctAnswerIndex": 1,
        "explanation": "The Council determines the turnover limit (e.g., 20 lakhs or 40 lakhs) below which small businesses are exempt from registration and tax."
    },
    {
        "id": "ch53-l1-q18",
        "question": "The",
        "options": ["7","10","11","12"],
        "correctAnswerIndex": 2,
        "explanation": "There are 11 states (mostly in North-East and Himalayan regions) designated as Special Category States for GST purposes."
    },
    {
        "id": "ch53-l1-q19",
        "question": "The GST Council can recommend",
        "options": ["General Elections","Any natural calamity or disaster","International sports events","State festivals"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(4)(f) allows special rates for raising resources during calamities/disasters."
    },
    {
        "id": "ch53-l1-q20",
        "question": "Is the Union Revenue Secretary a",
        "options": ["Yes","No, he is the ex-officio Secretary to the Council without voting rights","Only if the Finance Minister is absent","Only during the budget session"],
        "correctAnswerIndex": 1,
        "explanation": "The Revenue Secretary acts as the Secretary to the GST Council but does not have a vote."
    },
    {
        "id": "ch53-l1-q21",
        "question": "The",
        "options": ["Member of the GST Council","Permanent Invitee (non-voting) to all proceedings of the Council","Chairperson of the Council","Vice-Chairman of the Council"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman of CBIC is a permanent invitee to the Council meetings but cannot vote."
    },
    {
        "id": "ch53-l1-q22",
        "question": "The GST Council was created to replace which previous body",
        "options": ["The Finance Commission","The Empowered Committee of State Finance Ministers","The Planning Commission","The Zonal Councils"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council institutionalized the coordination work previously done informally by the Empowered Committee."
    },
    {
        "id": "ch53-l1-q23",
        "question": "The",
        "options": ["Article 246","Article 246A","Article 269","Article 301"],
        "correctAnswerIndex": 1,
        "explanation": "Article 246A is the most significant addition, enabling both Centre and States to tax the same transaction (supply of goods/services)."
    },
    {
        "id": "ch53-l1-q24",
        "question": "The GST Council oversees the",
        "options": ["Increase government profit","Ensure that the benefit of tax rate cuts is passed on to the final consumers","Stop states from borrowing too much","Tax the luxury goods more"],
        "correctAnswerIndex": 1,
        "explanation": "Anti-profiteering measures ensure that businesses don"
    },
    {
        "id": "ch53-l1-q25",
        "question": "The",
        "options": ["Google","The GST Council","The Ministry of IT alone","The RBI"],
        "correctAnswerIndex": 1,
        "explanation": "While GSTN is a company, its functional policies and system requirements are determined by the GST Council."
    },
    {
        "id": "ch53-l1-q26",
        "question": "Alcohol for human consumption is kept ______ the GST.",
        "options": ["Inside","Outside","Partially inside","Only for exports"],
        "correctAnswerIndex": 1,
        "explanation": "Alcohol for human consumption is constitutionally excluded from the definition of GST and remains taxable by States."
    },
    {
        "id": "ch53-l1-q27",
        "question": "The GST Council",
        "options": ["Veto power of the Centre","Consensus","Secret ballot","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "While the Constitution provides for a voting machinery (75% majority), most decisions in history have been reached via consensus."
    },
    {
        "id": "ch53-l1-q28",
        "question": "The",
        "options": ["The State government only","The Central government","The local bodies","The importer only"],
        "correctAnswerIndex": 1,
        "explanation": "Integrated GST on inter-state trade is collected by the Centre and kemudian and then apportioned between the Centre and States based on Council recommendations (Article 269A)."
    },
    {
        "id": "ch53-l1-q29",
        "question": "The",
        "options": ["Competitive Federalism","Cooperative Federalism","Fiscal Unitarianism","Dual Federalism"],
        "correctAnswerIndex": 1,
        "explanation": "It is the prime example of cooperative federalism in India."
    },
    {
        "id": "ch53-l1-q30",
        "question": "Can the GST Council recommend a",
        "options": ["No, cesses are abolished","Yes, like the Compensation Cess to compensate states for revenue loss","Only on luxury cars","Only during a war"],
        "correctAnswerIndex": 1,
        "explanation": "The Council recommended various cesses, most notably the Compensation Cess."
    },
    {
        "id": "ch53-l1-q31",
        "question": "Why is alcohol for human consumption constitutionally kept outside the purview of the GST Council",
        "options": ["It is a religious matter","It remains a major source of revenue exclusively for the State Governments, which they did not want to surrender","The Centre does not want to tax it for public health reasons","It is already prohibited under the Directive Principles"],
        "correctAnswerIndex": 1,
        "explanation": "During the GST negotiations, states insisted on keeping alcohol and petroleum outside GST to ensure they have an independent source of revenue that isn"
    },
    {
        "id": "ch53-l1-q32",
        "question": "The GST Council is tasked with establishing a mechanism to adjudicate any dispute arising out of its recommendations between:",
        "options": ["The Centre and one or more States","The Centre and any State or States on one side and one or more other States on the other side","Two or more States","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 279A(11) requires the GST Council to establish a mechanism for resolving disputes between different combinations of Centre and States."
    },
    {
        "id": "ch53-l1-q33",
        "question": "In the landmark Mohit Minerals case (2022), the Supreme Court clarified what regarding the nature of GST Council recommendations?",
        "options": ["They are legally binding on both Parliament and State Legislatures","They are not legally binding but have persuasive value, as both the Centre and States have simultaneous power to legislate (Article 246A)","They only bind the Union Government","They only bind the State Governments"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that the GST Council"
    },
    {
        "id": "ch53-l1-q34",
        "question": "The",
        "options": ["Neither the Centre nor the States can take a decision unilaterally","The Centre can veto any decision by the States","Large States like UP have more voting power than smaller States like Sikkim","The Prime Minister has the final say"],
        "correctAnswerIndex": 0,
        "explanation": "With Centre having 1/3rd (33.3%) and States having 2/3rd (66.6%), and a 75% majority required for a decision, no decision can be made without the support of both (Center + at least some states). Unilateralism is mathematically impossible."
    },
    {
        "id": "ch53-l1-q35",
        "question": "Which of the following is NOT a function of the GST Council?",
        "options": ["Recommending the taxes to be subsumed in GST","Recommending the threshold limit of turnover for exemption","Determining the physical distribution of GST revenue at the local police station level","Recommending special rates during natural calamities"],
        "correctAnswerIndex": 2,
        "explanation": "The Council deals with high-level policy and tax sharing; the minute local-level administrative spending for police etc. is a state executive matter."
    },
    {
        "id": "ch53-l1-q36",
        "question": "The",
        "options": ["The President","The GST Council (Article 279A specifically lists them, and the Council can decide to treat them specially)","The Finance Commission","The Ministry of Home Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(4)(g) allows the Council to make special provisions for the states mentioned in the Article (11 states)."
    },
    {
        "id": "ch53-l1-q37",
        "question": "Which of the following taxes was NOT subsumed under GST?",
        "options": ["Central Excise Duty","Service Tax","Basic Customs Duty","State VAT/Sales Tax"],
        "correctAnswerIndex": 2,
        "explanation": "Basic Customs Duty remains separate from GST and is still levied on imports, though IGST is also levied on imports."
    },
    {
        "id": "ch53-l1-q38",
        "question": "The GST Council Secretariat is headed by the:",
        "options": ["Union Finance Minister","Union Finance Secretary or Revenue Secretary (as ex-officio Secretary to the Council)","An IAS officer of the rank of Secretary","CEO of GSTN"],
        "correctAnswerIndex": 1,
        "explanation": "The Revenue Secretary to the Government of India acts as the ex-officio Secretary to the GST Council."
    },
    {
        "id": "ch53-l1-q39",
        "question": "If a State Minister is unable to attend the GST Council meeting, can they nominate another person?",
        "options": ["No","Yes, any other Minister or any person nominated by the State Government","Only a civil servant","Only the Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution allows each state to nominate"
    },
    {
        "id": "ch53-l1-q40",
        "question": "The frequency of the GST Council meetings is governed by:",
        "options": ["Once every month mandatory","Once every quarter","Once every year","The Constitution does not specify; it meets as often as it thinks fit at the call of the Chairperson"],
        "correctAnswerIndex": 3,
        "explanation": "Unlike the Parliament which must meet every 6 months, the GST Council meetings are called by the Union Finance Minister as and when required by the agenda."
    },
    {
        "id": "ch53-l1-q41",
        "question": "Which of the following is true regarding the",
        "options": ["Populous states like UP have more votes than Goa","All states (big or small) have equal voting status (one state, one vote weightage within the 2/3rd state pool)","Only BJP-ruled states have votes","Votes are based on the state"],
        "correctAnswerIndex": 1,
        "explanation": "A key feature is that all states are equal in the Council, regardless of their size or contribution to the revenue, ensuring federal equality."
    },
    {
        "id": "ch53-l1-q42",
        "question": "Does the GST Council have the power to",
        "options": ["Yes, its decisions are the law","No, it only","rates; the actual change is notified by the Centre and States under their respective GST Acts","It only fixes rates for Union Territories","It only fixes floor rates"],
        "correctAnswerIndex": 1,
        "explanation": "Legally, the Council is an advisory body. But its recommendations are followed in practice through notifications issued by the executive branch of each government."
    },
    {
        "id": "ch53-l1-q43",
        "question": "The",
        "options": ["2 years","5 years","10 years","Indefinitely"],
        "correctAnswerIndex": 1,
        "explanation": "The 101st Amendment Act provided for compensation to the States for loss of revenue arising on account of implementation of the GST for a period of five years (until June 2022)."
    },
    {
        "id": "ch53-l1-q44",
        "question": "The",
        "options": ["Taxed under GST","Outside the definition of GST","Included in the GST Act but to be levied from a date recommended by the GST Council","Exempt for another 50 years"],
        "correctAnswerIndex": 2,
        "explanation": "Unlike alcohol (which is constitutionally out), petroleum is in the GST framework but the date of levy is yet to be decided by the Council. Until then, states levy VAT and Centre levies Excise."
    },
    {
        "id": "ch53-l1-q45",
        "question": "The 101st Amendment also introduced",
        "options": ["Abolition of Service Tax","Levy and Collection of IGST on inter-state trade and commerce and its apportionment","The Finance Commission","State-level surcharges"],
        "correctAnswerIndex": 1,
        "explanation": "Article 269A handles the complex task of who collects tax when goods cross state borders, ensuring the Centre collects it and shares it with the destination state."
    },
    {
        "id": "ch53-l1-q46",
        "question": "Which of the following",
        "options": ["Education Cess on Income Tax","Swachh Bharat Cess","Krishi Kalyan Cess","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Cesses and surcharges on goods and services (like Swachh Bharat and Krishi Kalyan) were subsumed. Cesses on direct taxes like Income Tax continue separately."
    },
    {
        "id": "ch53-l1-q47",
        "question": "The GST Council is a",
        "options": ["A vacancy in the Council","A defect in the constitution of the Council","Any procedural irregularity that doesn","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 279A(10) specifies that no act or proceeding of the GST Council shall be invalid merely by reason of any vacancy, defect in constitution, or procedural irregularity."
    },
    {
        "id": "ch53-l1-q48",
        "question": "The GST Council",
        "options": ["Hiring all tax officers for states","Harmonization of tax administration between the Centre and States (IT systems, audit protocols, etc.)","Managing the personal files of the Finance Minister","Conducting elections for the Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "Harmonization ensures that the"
    },
    {
        "id": "ch53-l1-q49",
        "question": "The",
        "options": ["The Prime Minister","The GST Council","The NITI Aayog","The Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Council is the primary body that debates and finalizes the multi-tier tax structure."
    },
    {
        "id": "ch53-l1-q50",
        "question": "The GST Council embodies the concept of",
        "options": ["States have lost their sovereignty","Centre has absolute power","Both Centre and States have voluntarily pooled their power into a common body to achieve economic unity","Sovereignty is now with the GSTN company"],
        "correctAnswerIndex": 2,
        "explanation": "It is a paradigm shift where both levels of government agreed to share their exclusive taxation powers for the larger benefit of a common national market."
    },
    {
        "id": "ch53-l1-q51",
        "question": "Which of the following can currently be taxed by the States outside GST?",
        "options": ["Electricity and Real Estate (Stamp Duty)","Alcohol and Tobacco (partially)","Petroleum (temporarily)","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "States retain power over electricity, real estate transactions, alcohol, and currently petroleum. Tobacco is subject to GST but the Centre can also levy additional excise."
    },
    {
        "id": "ch53-l1-q52",
        "question": "The",
        "options": ["A statutory body","A fully government-owned company (100% equity with Centre and States)","A department of the RBI","A subsidiary of Infosys"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure better strategic control, the government decided to buy out all private stakes and make GSTN a 100% government-owned entity."
    },
    {
        "id": "ch53-l1-q53",
        "question": "The",
        "options": ["Each state can have its own GST rates","States and Centre both administer the tax on a single base, using the same law","Tax is collected by the village panchayats","There is no central intervention"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch53-l1-q54",
        "question": "The GST Council",
        "options": ["Higher tax rates","Lower threshold limits for GST registration (e.g., 10 lakhs instead of 20 lakhs)","No taxes at all","A separate currency"],
        "correctAnswerIndex": 1,
        "explanation": "Because these states have smaller economic bases, the threshold for tax registration is lower to capture more businesses for revenue."
    },
    {
        "id": "ch53-l1-q55",
        "question": "The",
        "options": ["Union Territories for voting","States for the purpose of the GST Council","Non-members","Observers"],
        "correctAnswerIndex": 1,
        "explanation": "For the GST Council, UTs with legislatures are treated as"
    },
    {
        "id": "ch53-l1-q56",
        "question": "The",
        "options": ["Political leaders","Tax officials from both Centre and States who work on the technical details of tax rates","Supreme Court Judges","Representatives from CII and FICCI"],
        "correctAnswerIndex": 1,
        "explanation": "The Fitment Committee is a technical body that does the"
    },
    {
        "id": "ch53-l1-q57",
        "question": "The",
        "options": ["All goods","Only essential medicines","Demerit and luxury goods (like tobacco, aerated drinks, coal, and luxury cars)","Software exports"],
        "correctAnswerIndex": 2,
        "explanation": "The cess is specifically levied on"
    },
    {
        "id": "ch53-l1-q58",
        "question": "One of the guiding principles of the GST Council is to avoid",
        "options": ["Collecting tax twice a year","Tax on tax (allowing input tax credit to only tax the",")","Increasing tax during rain","Abolishing the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Input Tax Credit (ITC) is the heart of GST, ensuring that tax paid at the previous stage is set off, effectively taxing only the value added at each stage."
    },
    {
        "id": "ch53-l1-q59",
        "question": "The GST Council recently approved the setting up of",
        "options": ["The issue of double voting","The heavy burden on High Courts regarding GST-related service disputes and assessments","The selection of the Chairman","The border disputes"],
        "correctAnswerIndex": 1,
        "explanation": "GSTAT provides a specialized forum for taxpayers to appeal against the orders of tax authorities, reducing the judicial backlog."
    },
    {
        "id": "ch53-l1-q60",
        "question": "The",
        "options": ["Tax is paid at the factory gate","Tax accrues to the state where the goods are consumed, not where they are produced","Tax only applies to exports","Tax is fixed by the state government"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the older VAT/CST system which was origin-based, GST follows the consumption principle, benefiting consumption states."
    },
    {
        "id": "ch53-l1-q61",
        "question": "Consider the following statements regarding the GST Council",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is false. Even if all 31 states vote together, they only command 2/3rd (66.6%) weightage. Since a 3/4th (75%) majority is required, they cannot override the Centre (1/3rd = 33.3%). Conversely, the Centre cannot pass anything without the support of at least some states."
    },
    {
        "id": "ch53-l1-q62",
        "question": "The",
        "options": ["To provide a permanent source of revenue for the GST Council Secretariat","To repay the principal and interest of the back-to-back loans taken by the Centre to compensate States for revenue shortfalls during the COVID-19 pandemic","To fund the Green Energy transition in industrial states","To reduce the corporate tax rates in manufacturing states"],
        "correctAnswerIndex": 1,
        "explanation": "While the 5-year compensation period ended in June 2022, the cess was extended to service and repay the debt incurred by the Centre to bridge the compensation gap during the pandemic years."
    },
    {
        "id": "ch53-l1-q63",
        "question": "Regarding the",
        "options": ["It makes the Union law superior to State law in case of conflict (Repugnancy under Article 254)","It is a sui generis (unique) power where both Parliament and State Legislatures have equal and simultaneous power, and Article 254 (repugnancy) does not apply to GST laws","Only the Parliament can tax the","of services","The States can only tax intra-state trade if the Parliament gives permission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 246A is unique because it doesn"
    },
    {
        "id": "ch53-l1-q64",
        "question": "Assertion (A): The GST Council is the first constitutional body in India that embodies the principle of",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Before GST, the Centre had no say in VAT and States had no say in Service Tax. Now, they share power over both, representing a"
    },
    {
        "id": "ch53-l1-q65",
        "question": "The GST Council recently discussed the",
        "options": ["Higher tax on finished products than on raw materials to encourage exports","Higher tax on raw materials/inputs than on the finished product, causing tax accumulation and hindering the","initiative","Taxing services more than goods to shift to a service economy","Reducing tax for the luxury sector"],
        "correctAnswerIndex": 1,
        "explanation": "Inverse duty means the inputs are taxed more (e.g., 18%) than the final output (e.g., 5%). This makes locally produced goods more expensive and creates refund issues, which the Council tries to"
    },
    {
        "id": "ch53-l1-q66",
        "question": "If a vacancy exists in the GST Council (e.g., a state doesn",
        "options": ["Yes, as it is a constitutional body and must be fully constituted","No, Article 279A(10) explicitly protects the Council","Only if more than five states are vacant","Only if the Centre"],
        "correctAnswerIndex": 1,
        "explanation": "This is a structural safeguard to ensure that the national tax machinery doesn"
    },
    {
        "id": "ch53-l1-q67",
        "question": "Which Article deals with the",
        "options": ["Article 246","Article 269A","Article 270","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Article 269A provides that GST on inter-state trade shall be levied and collected by the Union and apportioned as per the recommendations of the GST Council."
    },
    {
        "id": "ch53-l1-q68",
        "question": "The GST Appellate Tribunal (GSTAT) will have",
        "options": ["The Supreme Court","The GST Council","The Parliament through a law","The NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council oversees the entire structural ecosystem, including the recommendation for setting up GSTAT benches across the country."
    },
    {
        "id": "ch53-l1-q69",
        "question": "Which of the following describes the impact of the",
        "options": ["It completely deleted List II (State List)","It modified entries in List I and List II to exclude the items subsumed into GST, while inserting Article 246A as an overriding provision","It merged List I and List II into a single list","It had no impact on the 7th Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "Entries like 84 of List I (Excise) and 54 of List II (Sales Tax) were narrowed down to only a few items (tobacco, alcohol, petroleum), while GST was given its own basis in 246A."
    },
    {
        "id": "ch53-l1-q70",
        "question": "The",
        "options": ["The States have no voting power","States have lost the flexibility to change tax rates to meet local emergencies without the Council","The Centre collects all the taxes","The Finance Commission is abolished"],
        "correctAnswerIndex": 1,
        "explanation": "Since states can no longer unilaterally change rates on most goods/services, it reduces their independent fiscal flexibility, which is why the"
    },
    {
        "id": "ch53-l1-q71",
        "question": "The GST Council is a",
        "options": ["Yes, the Parliament is now subordinate to the Council","No, the Parliament remains supreme in its legislative power, but by convention and the structure of the GST Acts, it only acts on the recommendations of the Council to maintain national unity","Only the Rajya Sabha can change rates","Rates are fixed for 100 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Council recommends; the Parliament (for CGST) and State Legislatures (for SGST) legislate. The"
    },
    {
        "id": "ch53-l1-q72",
        "question": "The",
        "options": ["The Supreme Court","The GST Council","The RBI","The World Trade Organization"],
        "correctAnswerIndex": 1,
        "explanation": "These technical rules define the core of"
    },
    {
        "id": "ch53-l1-q73",
        "question": "When comparing the GST Council with the Finance Commission, which of the following is correct?",
        "options": ["Both are permanent bodies","The Finance Commission is concerned with vertical and horizontal devolution of all taxes, while the GST Council is a specialized body for indirect tax policy and harmony","The GST Council has no states as members","The Finance Commission is headed by the Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The FC is periodic and broad-based; the GST Council is permanent and focused on one (albeit huge) tax category."
    },
    {
        "id": "ch53-l1-q74",
        "question": "The 101st Amendment Act also required the formation of a",
        "options": ["Yes, the GST Court","No, the Council itself is the forum for negotiation and dispute resolution, although GSTAT handles individual litigation","The dispute is settled by the NITI Aayog","The President decides all disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The Council acts as a political-administrative forum for resolving disputes between governments, avoiding the need for a separate"
    },
    {
        "id": "ch53-l1-q75",
        "question": "Which of the following",
        "options": ["Jammu and Kashmir (converted from State to UT, then assigned a legislature)","Telangana","Goa","Sikkim"],
        "correctAnswerIndex": 0,
        "explanation": "The change in status of J&K required the GST Council to adjust its voting and administrative protocols to treat the UT of J&K as a"
    },
    {
        "id": "ch53-l1-q76",
        "question": "The",
        "options": ["The Income Tax Department (PAN)","The Ministry of Corporate Affairs (DIN/CIN)","The RBI (Payment Gateways)","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "GSTN is a data-driven ecosystem that communicates with other government departments to prevent tax evasion and ensure seamless compliance."
    },
    {
        "id": "ch53-l1-q77",
        "question": "What is the constitutional significance of",
        "options": ["It creates a new Supreme Court","It empowers the Council to solve its own internal political and fiscal disputes, keeping them out of the regular judicial system as much as possible to ensure fast decision-making","It allows the Centre to abolish any state","It is a dead letter"],
        "correctAnswerIndex": 1,
        "explanation": "The mechanism is intended for inter-governmental disputes, recognizing that fiscal federalism is best managed through negotiation and consensus rather than purely adversarial litigation."
    },
    {
        "id": "ch53-l1-q78",
        "question": "The",
        "options": ["The Origin-based Principle","The Destination-based Consumption Principle (where the state of the consumer gets the tax)","The Production-based Principle","The Global Income Principle"],
        "correctAnswerIndex": 1,
        "explanation": "This is the fundamental shift of GST. It protects the revenue of consumption states (importers) rather than just the manufacturing states (exporters)."
    },
    {
        "id": "ch53-l1-q79",
        "question": "In the context of",
        "options": ["States have 100% of the votes","States collectively hold 2/3rd (66.6%) of the weighted vote, which is more than the Centre","The Chairman is always a State Finance Minister","States can pass any decision without the Centre"],
        "correctAnswerIndex": 1,
        "explanation": "While states cannot override the Centre, they do have a larger share in the vote pool (66.6%), reflecting the importance of states in India"
    },
    {
        "id": "ch53-l1-q80",
        "question": "Assertion (A): The GST Council recently allowed",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "GSTAT is the much-awaited judicial-administrative bridge in the GST ecosystem. It provides a dedicated mechanism to resolve complex tax assessment disputes."
    },
    {
        "id": "ch53-l1-q81",
        "question": "If a candidate is appearing for the UPSC in 2026, which of the following",
        "options": ["Aviation Turbine Fuel (ATF) and Natural Gas","High Speed Diesel","Motor Spirit (Petrol)","None, as the Council has not yet recommended a date"],
        "correctAnswerIndex": 3,
        "explanation": "As of early 2024, the Council has deferred the decision. Inclusion of petrol/diesel is a high-stake political and fiscal decision that requires consensus from both sides."
    },
    {
        "id": "ch53-l1-q82",
        "question": "The 101st Amendment Act (2016) also amended",
        "options": ["To abolish all state taxes","To restrict states from imposing tax on the supply of goods/services taking place outside the state or during import/export, aligning with the IGST framework","To allow states to tax the Parliament","To make GST a central subject"],
        "correctAnswerIndex": 1,
        "explanation": "Article 286 (Restrictions as to imposition of tax on the sale or purchase of goods) was modified to"
    },
    {
        "id": "ch53-l1-q83",
        "question": "The",
        "options": ["Open API and XBRL for seamless integration with accounting softwares","Proprietary encrypted formats that no one can access","Manual data entry only","Paper-based filing only"],
        "correctAnswerIndex": 0,
        "explanation": "GSTN is a modern tech platform that allows businesses to sync their accounting data directly with the tax portal, reducing compliance costs."
    },
    {
        "id": "ch53-l1-q84",
        "question": "Which of the following is TRUE about the",
        "options": ["It has a separate vote as a state","It is represented by the Central Government (Union Finance Minister) as it is a UT without a legislature","It is represented by the Governor of J&K","It has no representation"],
        "correctAnswerIndex": 1,
        "explanation": "UTs without legislatures (like Ladakh, Chandigarh, Dadra & Nagar Haveli, etc.) are under the direct administrative/fiscal umbrella of the Union and thus don"
    },
    {
        "id": "ch53-l1-q85",
        "question": "The 101st Amendment also touched upon the",
        "options": ["Article 246A (the power to tax)","Section 18 of the 101st Amendment Act (the","clause that mandated compensation)","Article 360 (Financial Emergency)","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Section 18 of the Amendment Act was the legal anchor for the GST (Compensation to States) Act, mandateing that Parliament shall provide for compensation for five years."
    },
    {
        "id": "ch53-l1-q86",
        "question": "In the case of",
        "options": ["Increasing the tax on the finished product or decreasing the tax on the raw materials so that the tax on the output is at least equal to or more than the inputs","Abolishing the finished product","Doubling the tax on the inputs","Asking the consumer to pay more"],
        "correctAnswerIndex": 0,
        "explanation": "Correcting the inversion ensures that businesses don"
    },
    {
        "id": "ch53-l1-q87",
        "question": "The",
        "options": ["The Motor Vehicles Act","The GST Act (under the administrative power of the state/centre on the recommendation of the Council)","The IPC","The Constitution 42nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "E-way bills track the movement of goods (>50,000 value) to prevent tax evasion and ensure tax compliance across state borders."
    },
    {
        "id": "ch53-l1-q88",
        "question": "The GST Council",
        "options": ["Import duties (Basic Customs)","Exemptions on the import of life-saving drugs or specialized equipment","Determining the exchange rate of the Rupee","Signing Free Trade Agreements"],
        "correctAnswerIndex": 1,
        "explanation": "While Basic Customs is with the Centre, the IGST (which is also levied on imports) is overseen by the Council, allowing it to provide relief during humanitarian or economic crises."
    },
    {
        "id": "ch53-l1-q89",
        "question": "The",
        "options": ["The Economic Cabinet of India","The Parliament of Taxation","The Supreme Judicial Forum for Tax","Either (a) or (b)"],
        "correctAnswerIndex": 3,
        "explanation": "It is effectively an"
    },
    {
        "id": "ch53-l1-q90",
        "question": "Which of the following is the most significant",
        "options": ["Decreasing tax revenue","Expanding the tax base to include petroleum and electricity while balancing the revenue needs of both Centre and States","Abolishing the GSTN","Merging with the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Bringing petroleum and electricity into GST is the"
    },
    {
        "id": "ch53-l1-q91",
        "question": "Which Article of the Constitution provides for the office of the Attorney General of India?",
        "options": ["Article 72","Article 74","Article 76","Article 78"],
        "correctAnswerIndex": 2,
        "explanation": "Article 76 provides for the Attorney General of India, the highest law officer in the country."
    },
    {
        "id": "ch53-l1-q92",
        "question": "The Attorney General of India is appointed by:",
        "options": ["The Chief Justice of India","The President of India","The Parliament","The Law Minister"],
        "correctAnswerIndex": 1,
        "explanation": "He is appointed by the President."
    },
    {
        "id": "ch53-l1-q93",
        "question": "To be appointed as the Attorney General of India, a person must be qualified to be appointed as a:",
        "options": ["Judge of a High Court","Judge of the Supreme Court","District Judge","Senior Advocate of 5 years standing"],
        "correctAnswerIndex": 1,
        "explanation": "He must be a person who is qualified to be appointed a judge of the Supreme Court."
    },
    {
        "id": "ch53-l1-q94",
        "question": "The Attorney General holds office during the pleasure of:",
        "options": ["The Parliament","The President of India","The Prime Minister","The Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not fix his term; he holds office during the pleasure of the President."
    },
    {
        "id": "ch53-l1-q95",
        "question": "Does the Attorney General have the right of audience in all courts in the territory of India?",
        "options": ["Yes","No, only in the Supreme Court","Only in High Courts","Only in District Courts"],
        "correctAnswerIndex": 0,
        "explanation": "As per Art 76(3), he has the right of audience in all courts in the territory of India."
    },
    {
        "id": "ch53-l1-q96",
        "question": "Is the Attorney General a member of the Union Cabinet?",
        "options": ["Yes","No","Ex-officio member with voting right","Only during legal emergencies"],
        "correctAnswerIndex": 1,
        "explanation": "He is not a member of the Cabinet, although he is a part of the Union Executive."
    },
    {
        "id": "ch53-l1-q97",
        "question": "The Attorney General has the right to speak and take part in the proceedings of:",
        "options": ["Both Houses of Parliament","Any joint sitting of the Houses","Any committee of Parliament of which he may be named a member","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "But he does not have the right to vote in these proceedings."
    },
    {
        "id": "ch53-l1-q98",
        "question": "Can the Attorney General vote in the Parliament?",
        "options": ["Yes","No","Only in Rajya Sabha","Only during a tie"],
        "correctAnswerIndex": 1,
        "explanation": "He participates in proceedings but has no right to vote."
    },
    {
        "id": "ch53-l1-q99",
        "question": "The",
        "options": ["The Parliament","The President","The Constitution","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not fix his remuneration; it is determined by the President."
    },
    {
        "id": "ch53-l1-q100",
        "question": "Which of the following describes the",
        "options": ["A constitutional post under Art 76.","A statutory post created to assist the Attorney General.","The head of the Law Commission.","The same as Attorney General."],
        "correctAnswerIndex": 1,
        "explanation": "Wait. Actually, Solicitor General is NOT a constitutional post; only Attorney General is constitutional. It is established by rules/law."
    },
    {
        "id": "ch53-l1-q101",
        "question": "By convention, the Attorney General resigns when:",
        "options": ["He completes 5 years.","The Council of Ministers (Government) resigns or is replaced.","The Chief Justice retires.","He turns 65."],
        "correctAnswerIndex": 1,
        "explanation": "Since he is appointed on the advice of the council of ministers, he resigns when the govt changes."
    },
    {
        "id": "ch53-l1-q102",
        "question": "Is the Attorney General a",
        "options": ["Yes","No, he is not a whole-time counsel and can have private practice.","Only if he is in Delhi.","Only for alternate years."],
        "correctAnswerIndex": 1,
        "explanation": "He is not a permanent government servant and is allowed private legal practice with certain restrictions."
    },
    {
        "id": "ch53-l1-q103",
        "question": "The Attorney General must NOT advise or hold a brief against:",
        "options": ["Any individual.","The Government of India.","The High Court.","The President."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot act against the government as he is its chief legal representative."
    },
    {
        "id": "ch53-l1-q104",
        "question": "Who was the",
        "options": ["M.C. Setalvad","C.K. Daphtary","Niren De","Soli Sorabjee"],
        "correctAnswerIndex": 0,
        "explanation": "M.C. Setalvad was the first Attorney General (1950-1963)."
    },
    {
        "id": "ch53-l1-q105",
        "question": "The Attorney General represents the Government of India in any reference made by the President to the Supreme Court under:",
        "options": ["Article 110","Article 143","Article 148","Article 356"],
        "correctAnswerIndex": 1,
        "explanation": "Article 143 is the Advisory Jurisdiction of the Supreme Court."
    },
    {
        "id": "ch53-l1-q106",
        "question": "Can the Attorney General defend an accused person in regular criminal prosecutions?",
        "options": ["Yes, freely.","No, not without the permission of the Government of India.","Only if the person is a relative.","Only in the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "This is a restriction mentioned in his conditions of service to avoid conflict of interest."
    },
    {
        "id": "ch53-l1-q107",
        "question": "Is the Attorney General required to be a citizen of India?",
        "options": ["Yes","No","Only if he is a Judge","Only for the first terms"],
        "correctAnswerIndex": 0,
        "explanation": "He must meet SC judge qualifications, which includes citizenship."
    },
    {
        "id": "ch53-l1-q108",
        "question": "Does the Attorney General enjoy the",
        "options": ["Yes, when participating in proceedings.","No, only salary.","Only if he is elected.","Only during a travel."],
        "correctAnswerIndex": 0,
        "explanation": "Art 88 gives him rights and Art 105(4) gives him MP privileges."
    },
    {
        "id": "ch53-l1-q109",
        "question": "Who is the",
        "options": ["Chief Justice of India","Attorney General of India","Law Minister","Solicitor General"],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief legal advisor to the executive."
    },
    {
        "id": "ch53-l1-q110",
        "question": "The",
        "options": ["Constitutional post.","Statutory/Administrative post to assist the AG.","Member of Parliament.","High Court Judge."],
        "correctAnswerIndex": 1,
        "explanation": "Only AG is constitutional; PG and APG are not defined in the constitution."
    },
    {
        "id": "ch53-l1-q111",
        "question": "Who was the Attorney General who served the longest term (13 years)?",
        "options": ["M.C. Setalvad","Soli Sorabjee","K.K. Venugopal","C.K. Daphtary"],
        "correctAnswerIndex": 0,
        "explanation": "M.C. Setalvad served from 1950 to 1963."
    },
    {
        "id": "ch53-l1-q112",
        "question": "Can the Attorney General accept appointment as a director of a company without permission?",
        "options": ["Yes","No, not without permission from the Government.","Only for PSU companies.","Only if he is the Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "This is another restriction to prevent conflict of interest."
    },
    {
        "id": "ch53-l1-q113",
        "question": "The Attorney General is part of which organ of the government?",
        "options": ["Legislature","Judiciary","Union Executive","NITI Aayog"],
        "correctAnswerIndex": 2,
        "explanation": "The Union Executive consists of President, VP, PM, Council of Ministers, and the Attorney General."
    },
    {
        "id": "ch53-l1-q114",
        "question": "Which Article provides for",
        "options": ["Article 76","Article 165","Article 202","Article 324"],
        "correctAnswerIndex": 1,
        "explanation": "Article 165 is for States."
    },
    {
        "id": "ch53-l1-q115",
        "question": "Is the Law Minister allowed to perform the duties of the Attorney General?",
        "options": ["No, they are separate offices.","Yes, always.","Only during a war.","Only in the Lok Sabha."],
        "correctAnswerIndex": 0,
        "explanation": "Attorney General is a constitutional professional post; Law Minister is a political post."
    },
    {
        "id": "ch53-l1-q116",
        "question": "Does the AG have the right to speak in both Rajya Sabha and Lok Sabha?",
        "options": ["Yes","No, only Lok Sabha","No, only Rajya Sabha","Only if he is an MP"],
        "correctAnswerIndex": 0,
        "explanation": "He has the right to speak in both Houses as per Art 88."
    },
    {
        "id": "ch53-l1-q117",
        "question": "Is the AG",
        "options": ["Yes","No, it is recommendatory/legal opinion.","Only in criminal matters.","Only if the PM signing it."],
        "correctAnswerIndex": 1,
        "explanation": "He provides legal expertise, but the final decision is the Cabinet"
    },
    {
        "id": "ch53-l1-q118",
        "question": "Can the Attorney General be",
        "options": ["Yes, as he holds office during the","of the President.","No, ground is mandatory.","Only if CJI agrees.","Only by impeachment."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike the CAG or Election Commissioner, the AG has no security of tenure."
    },
    {
        "id": "ch53-l1-q119",
        "question": "Which city is the primary place of work for the Attorney General?",
        "options": ["Mumbai","New Delhi","Kolkata","Chennai"],
        "correctAnswerIndex": 1,
        "explanation": "He works at the seat of the Union Government and the Supreme Court in New Delhi."
    },
    {
        "id": "ch53-l1-q120",
        "question": "Does the Attorney General have a",
        "options": ["Yes","No, he has no right to vote at all.","Only in the Rajya Sabha.","Only for the Law committee."],
        "correctAnswerIndex": 1,
        "explanation": "Participation in debate does not translate to voting rights for non-members."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch53-l2-q1",
        "question": "Why is alcohol for human consumption constitutionally kept outside the purview of the GST Council",
        "options": ["It is a religious matter","It remains a major source of revenue exclusively for the State Governments, which they did not want to surrender","The Centre does not want to tax it for public health reasons","It is already prohibited under the Directive Principles"],
        "correctAnswerIndex": 1,
        "explanation": "During the GST negotiations, states insisted on keeping alcohol and petroleum outside GST to ensure they have an independent source of revenue that isn"
    },
    {
        "id": "ch53-l2-q2",
        "question": "The GST Council is tasked with establishing a mechanism to adjudicate any dispute arising out of its recommendations between:",
        "options": ["The Centre and one or more States","The Centre and any State or States on one side and one or more other States on the other side","Two or more States","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 279A(11) requires the GST Council to establish a mechanism for resolving disputes between different combinations of Centre and States."
    },
    {
        "id": "ch53-l2-q3",
        "question": "In the landmark Mohit Minerals case (2022), the Supreme Court clarified what regarding the nature of GST Council recommendations?",
        "options": ["They are legally binding on both Parliament and State Legislatures","They are not legally binding but have persuasive value, as both the Centre and States have simultaneous power to legislate (Article 246A)","They only bind the Union Government","They only bind the State Governments"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that the GST Council"
    },
    {
        "id": "ch53-l2-q4",
        "question": "The",
        "options": ["Neither the Centre nor the States can take a decision unilaterally","The Centre can veto any decision by the States","Large States like UP have more voting power than smaller States like Sikkim","The Prime Minister has the final say"],
        "correctAnswerIndex": 0,
        "explanation": "With Centre having 1/3rd (33.3%) and States having 2/3rd (66.6%), and a 75% majority required for a decision, no decision can be made without the support of both (Center + at least some states). Unilateralism is mathematically impossible."
    },
    {
        "id": "ch53-l2-q5",
        "question": "Which of the following is NOT a function of the GST Council?",
        "options": ["Recommending the taxes to be subsumed in GST","Recommending the threshold limit of turnover for exemption","Determining the physical distribution of GST revenue at the local police station level","Recommending special rates during natural calamities"],
        "correctAnswerIndex": 2,
        "explanation": "The Council deals with high-level policy and tax sharing; the minute local-level administrative spending for police etc. is a state executive matter."
    },
    {
        "id": "ch53-l2-q6",
        "question": "The",
        "options": ["The President","The GST Council (Article 279A specifically lists them, and the Council can decide to treat them specially)","The Finance Commission","The Ministry of Home Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279A(4)(g) allows the Council to make special provisions for the states mentioned in the Article (11 states)."
    },
    {
        "id": "ch53-l2-q7",
        "question": "Which of the following taxes was NOT subsumed under GST?",
        "options": ["Central Excise Duty","Service Tax","Basic Customs Duty","State VAT/Sales Tax"],
        "correctAnswerIndex": 2,
        "explanation": "Basic Customs Duty remains separate from GST and is still levied on imports, though IGST is also levied on imports."
    },
    {
        "id": "ch53-l2-q8",
        "question": "The GST Council Secretariat is headed by the:",
        "options": ["Union Finance Minister","Union Finance Secretary or Revenue Secretary (as ex-officio Secretary to the Council)","An IAS officer of the rank of Secretary","CEO of GSTN"],
        "correctAnswerIndex": 1,
        "explanation": "The Revenue Secretary to the Government of India acts as the ex-officio Secretary to the GST Council."
    },
    {
        "id": "ch53-l2-q9",
        "question": "If a State Minister is unable to attend the GST Council meeting, can they nominate another person?",
        "options": ["No","Yes, any other Minister or any person nominated by the State Government","Only a civil servant","Only the Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution allows each state to nominate"
    },
    {
        "id": "ch53-l2-q10",
        "question": "The frequency of the GST Council meetings is governed by:",
        "options": ["Once every month mandatory","Once every quarter","Once every year","The Constitution does not specify; it meets as often as it thinks fit at the call of the Chairperson"],
        "correctAnswerIndex": 3,
        "explanation": "Unlike the Parliament which must meet every 6 months, the GST Council meetings are called by the Union Finance Minister as and when required by the agenda."
    },
    {
        "id": "ch53-l2-q11",
        "question": "Which of the following is true regarding the",
        "options": ["Populous states like UP have more votes than Goa","All states (big or small) have equal voting status (one state, one vote weightage within the 2/3rd state pool)","Only BJP-ruled states have votes","Votes are based on the state"],
        "correctAnswerIndex": 1,
        "explanation": "A key feature is that all states are equal in the Council, regardless of their size or contribution to the revenue, ensuring federal equality."
    },
    {
        "id": "ch53-l2-q12",
        "question": "Does the GST Council have the power to",
        "options": ["Yes, its decisions are the law","No, it only","rates; the actual change is notified by the Centre and States under their respective GST Acts","It only fixes rates for Union Territories","It only fixes floor rates"],
        "correctAnswerIndex": 1,
        "explanation": "Legally, the Council is an advisory body. But its recommendations are followed in practice through notifications issued by the executive branch of each government."
    },
    {
        "id": "ch53-l2-q13",
        "question": "The",
        "options": ["2 years","5 years","10 years","Indefinitely"],
        "correctAnswerIndex": 1,
        "explanation": "The 101st Amendment Act provided for compensation to the States for loss of revenue arising on account of implementation of the GST for a period of five years (until June 2022)."
    },
    {
        "id": "ch53-l2-q14",
        "question": "The",
        "options": ["Taxed under GST","Outside the definition of GST","Included in the GST Act but to be levied from a date recommended by the GST Council","Exempt for another 50 years"],
        "correctAnswerIndex": 2,
        "explanation": "Unlike alcohol (which is constitutionally out), petroleum is in the GST framework but the date of levy is yet to be decided by the Council. Until then, states levy VAT and Centre levies Excise."
    },
    {
        "id": "ch53-l2-q15",
        "question": "The 101st Amendment also introduced",
        "options": ["Abolition of Service Tax","Levy and Collection of IGST on inter-state trade and commerce and its apportionment","The Finance Commission","State-level surcharges"],
        "correctAnswerIndex": 1,
        "explanation": "Article 269A handles the complex task of who collects tax when goods cross state borders, ensuring the Centre collects it and shares it with the destination state."
    },
    {
        "id": "ch53-l2-q16",
        "question": "Which of the following",
        "options": ["Education Cess on Income Tax","Swachh Bharat Cess","Krishi Kalyan Cess","Both (b) and (c)"],
        "correctAnswerIndex": 3,
        "explanation": "Cesses and surcharges on goods and services (like Swachh Bharat and Krishi Kalyan) were subsumed. Cesses on direct taxes like Income Tax continue separately."
    },
    {
        "id": "ch53-l2-q17",
        "question": "The GST Council is a",
        "options": ["A vacancy in the Council","A defect in the constitution of the Council","Any procedural irregularity that doesn","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 279A(10) specifies that no act or proceeding of the GST Council shall be invalid merely by reason of any vacancy, defect in constitution, or procedural irregularity."
    },
    {
        "id": "ch53-l2-q18",
        "question": "The GST Council",
        "options": ["Hiring all tax officers for states","Harmonization of tax administration between the Centre and States (IT systems, audit protocols, etc.)","Managing the personal files of the Finance Minister","Conducting elections for the Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "Harmonization ensures that the"
    },
    {
        "id": "ch53-l2-q19",
        "question": "The",
        "options": ["The Prime Minister","The GST Council","The NITI Aayog","The Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Council is the primary body that debates and finalizes the multi-tier tax structure."
    },
    {
        "id": "ch53-l2-q20",
        "question": "The GST Council embodies the concept of",
        "options": ["States have lost their sovereignty","Centre has absolute power","Both Centre and States have voluntarily pooled their power into a common body to achieve economic unity","Sovereignty is now with the GSTN company"],
        "correctAnswerIndex": 2,
        "explanation": "It is a paradigm shift where both levels of government agreed to share their exclusive taxation powers for the larger benefit of a common national market."
    },
    {
        "id": "ch53-l2-q21",
        "question": "Which of the following can currently be taxed by the States outside GST?",
        "options": ["Electricity and Real Estate (Stamp Duty)","Alcohol and Tobacco (partially)","Petroleum (temporarily)","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "States retain power over electricity, real estate transactions, alcohol, and currently petroleum. Tobacco is subject to GST but the Centre can also levy additional excise."
    },
    {
        "id": "ch53-l2-q22",
        "question": "The",
        "options": ["A statutory body","A fully government-owned company (100% equity with Centre and States)","A department of the RBI","A subsidiary of Infosys"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure better strategic control, the government decided to buy out all private stakes and make GSTN a 100% government-owned entity."
    },
    {
        "id": "ch53-l2-q23",
        "question": "The",
        "options": ["Each state can have its own GST rates","States and Centre both administer the tax on a single base, using the same law","Tax is collected by the village panchayats","There is no central intervention"],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch53-l2-q24",
        "question": "The GST Council",
        "options": ["Higher tax rates","Lower threshold limits for GST registration (e.g., 10 lakhs instead of 20 lakhs)","No taxes at all","A separate currency"],
        "correctAnswerIndex": 1,
        "explanation": "Because these states have smaller economic bases, the threshold for tax registration is lower to capture more businesses for revenue."
    },
    {
        "id": "ch53-l2-q25",
        "question": "The",
        "options": ["Union Territories for voting","States for the purpose of the GST Council","Non-members","Observers"],
        "correctAnswerIndex": 1,
        "explanation": "For the GST Council, UTs with legislatures are treated as"
    },
    {
        "id": "ch53-l2-q26",
        "question": "The",
        "options": ["Political leaders","Tax officials from both Centre and States who work on the technical details of tax rates","Supreme Court Judges","Representatives from CII and FICCI"],
        "correctAnswerIndex": 1,
        "explanation": "The Fitment Committee is a technical body that does the"
    },
    {
        "id": "ch53-l2-q27",
        "question": "The",
        "options": ["All goods","Only essential medicines","Demerit and luxury goods (like tobacco, aerated drinks, coal, and luxury cars)","Software exports"],
        "correctAnswerIndex": 2,
        "explanation": "The cess is specifically levied on"
    },
    {
        "id": "ch53-l2-q28",
        "question": "One of the guiding principles of the GST Council is to avoid",
        "options": ["Collecting tax twice a year","Tax on tax (allowing input tax credit to only tax the",")","Increasing tax during rain","Abolishing the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Input Tax Credit (ITC) is the heart of GST, ensuring that tax paid at the previous stage is set off, effectively taxing only the value added at each stage."
    },
    {
        "id": "ch53-l2-q29",
        "question": "The GST Council recently approved the setting up of",
        "options": ["The issue of double voting","The heavy burden on High Courts regarding GST-related service disputes and assessments","The selection of the Chairman","The border disputes"],
        "correctAnswerIndex": 1,
        "explanation": "GSTAT provides a specialized forum for taxpayers to appeal against the orders of tax authorities, reducing the judicial backlog."
    },
    {
        "id": "ch53-l2-q30",
        "question": "The",
        "options": ["Tax is paid at the factory gate","Tax accrues to the state where the goods are consumed, not where they are produced","Tax only applies to exports","Tax is fixed by the state government"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the older VAT/CST system which was origin-based, GST follows the consumption principle, benefiting consumption states."
    },
    {
        "id": "ch53-l2-q31",
        "question": "The Attorney General of India (AGI) is considered a",
        "options": ["President, VP, PM and Council of Ministers.","Chief Justice of India and Governors.","CAG and UPSC Chairman.","Only the PM and Law Minister."],
        "correctAnswerIndex": 0,
        "explanation": "As per Art 52-78, the Union Executive includes the President, VP, PM, Council of Ministers, and the AGI."
    },
    {
        "id": "ch53-l2-q32",
        "question": "Assertion (A): The Attorney General does not have the right to vote in Parliament.\\nReason (R): He is not a member of either House of Parliament.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Only members of the House can vote. AGI"
    },
    {
        "id": "ch53-l2-q33",
        "question": "What are the",
        "options": ["Must be a citizen of India.","Must have been a judge of some high court for 5 years or an advocate for 10 years.","Must be an eminent jurist in the opinion of the President.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These are the same qualifications as prescribed for a judge of the Supreme Court."
    },
    {
        "id": "ch53-l2-q34",
        "question": "Which of the following is a",
        "options": ["He should not advise or hold a brief against the Government of India.","He should not advise or hold a brief in cases in which he is called upon to advise the Government.","He should not defend an accused person in criminal prosecutions without permission of the Government.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These rules prevent conflict of interest between his public duty and private profession."
    },
    {
        "id": "ch53-l2-q35",
        "question": "Is the",
        "options": ["Yes.","No, only the Attorney General is created by the Constitution; the Solicitor and Additional Solicitors are statutory/administrative.","Only if the PM notifies.","Only in the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Article 76 only mentions the Attorney General. Other law officers help him perform his duties but lack constitutional status."
    },
    {
        "id": "ch53-l2-q36",
        "question": "The Attorney General resigns when the Government changes because:",
        "options": ["It is a constitutional mandate.","It is a",", as he is appointed on the advice of the specific Council of Ministers.","The Law Minister fires him.","By an order of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "His role is to represent the"
    },
    {
        "id": "ch53-l2-q37",
        "question": "Which Article gives the Attorney General the",
        "options": ["Article 76.","Article 88.","Article 105.","Article 110."],
        "correctAnswerIndex": 1,
        "explanation": "Article 88 deals with the rights of ministers and the Attorney General as respects Houses."
    },
    {
        "id": "ch53-l2-q38",
        "question": "The",
        "options": ["Article 76.","Article 105(4).","Article 194.","Article 300."],
        "correctAnswerIndex": 1,
        "explanation": "Article 105 deals with powers, privileges and immunities of Parliament and its members/officials."
    },
    {
        "id": "ch53-l2-q39",
        "question": "Does the Attorney General have a",
        "options": ["Yes.","No, he has no right to vote at all.","Only if requested by the Chairman.","Only if he is a former judge."],
        "correctAnswerIndex": 1,
        "explanation": "Non-members have zero voting rights in the House proceedings."
    },
    {
        "id": "ch53-l2-q40",
        "question": "The Attorney General represents the Union Govt in all cases in the Supreme Court in which the govt is concerned. Is he also required to appear in High Courts?",
        "options": ["No.","Yes, in any High Court in which the Government of India is concerned, as per the rules/duties.","Only in the Delhi High Court.","Only for tax cases."],
        "correctAnswerIndex": 1,
        "explanation": "His duties include appearing in HCs for any case involving the Union Government."
    },
    {
        "id": "ch53-l2-q41",
        "question": "Why is the AGI NOT called a",
        "options": ["Because he is a politician.","Because he is not debarred from private legal practice (with conditions) and is not a part of the civil services.","Because he is appointed for life.","Because he is part of the Judiciary."],
        "correctAnswerIndex": 1,
        "explanation": "He is a constitutional professional officer, not a career bureaucrat."
    },
    {
        "id": "ch53-l2-q42",
        "question": "If the President makes a reference to the SC under Article 143, who represents the government?",
        "options": ["The Law Minister.","The Attorney General of India.","The Chief Justice.","The Solicitor General only."],
        "correctAnswerIndex": 1,
        "explanation": "Handling Art 143 references is a specific duty of the AGI."
    },
    {
        "id": "ch53-l2-q43",
        "question": "Does the Attorney General have the power to",
        "options": ["No.","Yes.","Only for the High Courts.","Only during a vacancy."],
        "correctAnswerIndex": 0,
        "explanation": "Judges are appointed by the President using the collegium system; AG is only a legal counsel."
    },
    {
        "id": "ch53-l2-q44",
        "question": "The AGI can accept an appointment as a",
        "options": ["The President.","The Government of India.","The Supreme Court.","The SEBI."],
        "correctAnswerIndex": 1,
        "explanation": "Permission from the executive is mandatory for such commercial roles."
    },
    {
        "id": "ch53-l2-q45",
        "question": "Is the Attorney General a",
        "options": ["Purely Political.","Constitutional (Art 76), although effectively it is a political appointment made by the Cabinet.","Administrative only.","Judicial."],
        "correctAnswerIndex": 1,
        "explanation": "It is a constitutional post that follows the political life-cycle of the government."
    },
    {
        "id": "ch53-l2-q46",
        "question": "Which of the following is correct about",
        "options": ["They are listed in Art 76.","They are not constitutional; their presence is authorized by the Law Officers (Conditions of Service) Rules, 1987.","They have the power to vote in Parliament.","They can never be promoted to AG."],
        "correctAnswerIndex": 1,
        "explanation": "Rules, not the Constitution, define these supportive legal posts."
    },
    {
        "id": "ch53-l2-q47",
        "question": "The AG",
        "options": ["All courts in India.","Only to Courts of Record.","Only to the Supreme Court.","Only to criminal courts."],
        "correctAnswerIndex": 0,
        "explanation": "He can appear in any court in India from District level upwards for government cases."
    },
    {
        "id": "ch53-l2-q48",
        "question": "Can the AGI serve as a member of a",
        "options": ["No.","Yes, if he is","of such a committee.","Only if he is also an MP.","Only for the Ethics committee."],
        "correctAnswerIndex": 1,
        "explanation": "Article 88 allows him to be part of any committee he is assigned to."
    },
    {
        "id": "ch53-l2-q49",
        "question": "The",
        "options": ["5 years.","6 years or 65 years of age.","It is NOT fixed by the Constitution.","At the pleasure of the Law Minister."],
        "correctAnswerIndex": 2,
        "explanation": "Art 76(4) says he holds office during the pleasure of the President."
    },
    {
        "id": "ch53-l2-q50",
        "question": "Wait. In the UK, the Attorney General is usually a member of which body?",
        "options": ["The Judiciary.","The Cabinet (and is a politician).","The Civil Service.","The Monarchy Secretariat."],
        "correctAnswerIndex": 1,
        "explanation": "In UK, the post is political; in India, it is a professional counsel (who might have political leanings)."
    },
    {
        "id": "ch53-l2-q51",
        "question": "Who receives the legal advice from the AGI?",
        "options": ["The Parliament.","The Government of India (Executive).","The Chief Justice.","The NITI Aayog."],
        "correctAnswerIndex": 1,
        "explanation": "His primary client is the Union Government."
    },
    {
        "id": "ch53-l2-q52",
        "question": "Which of the following describes the",
        "options": ["Cabinet Minister.","Minister of State.","He has no fixed political rank but is the first legal officer in protocol.","Secretary to Govt."],
        "correctAnswerIndex": 2,
        "explanation": "He is a high constitutional officer but doesn"
    },
    {
        "id": "ch53-l2-q53",
        "question": "The Advocate General of a State (Art 165) has similar powers to AGI but for:",
        "options": ["District Courts only.","The State Government.","The High Court only.","Election cases only."],
        "correctAnswerIndex": 1,
        "explanation": "Advocate General is the state-level counterpart of the AGI."
    },
    {
        "id": "ch53-l2-q54",
        "question": "If a Law Minister is also an Advocate, can he appear for the Government in SC?",
        "options": ["Yes.","Usually no, the Attorney General or other Law Officers appear; the Minister performs political/administrative functions.","Only for family law cases.","Only if the AGI is sick."],
        "correctAnswerIndex": 1,
        "explanation": "The roles of political head (Minister) and legal counsel (AG) are distinct in Indian practice."
    },
    {
        "id": "ch53-l2-q55",
        "question": "The AGI",
        "options": ["High (Like SC Judge).","Low (Hold office during pleasure).","Same as CAG.","Fixed for 10 years."],
        "correctAnswerIndex": 1,
        "explanation": "AGI can be removed anytime without specified procedure or grounds."
    },
    {
        "id": "ch53-l2-q56",
        "question": "Article 88 protects which",
        "options": ["Right to vote.","Right to speak in House proceedings without being a member.","Right to arrest an MP.","Right to increase his salary."],
        "correctAnswerIndex": 1,
        "explanation": "This provision helps the government present its legal view in the house."
    },
    {
        "id": "ch53-l2-q57",
        "question": "Is the",
        "options": ["Yes.","No, by the Appointments Committee of the Cabinet (ACC).","By the Chief Justice.","By the AGI himself."],
        "correctAnswerIndex": 1,
        "explanation": "Since it"
    },
    {
        "id": "ch53-l2-q58",
        "question": "The",
        "options": ["He doesn","The Dignity and Impartiality of the high office.","He stays in Delhi.","He doesn"],
        "correctAnswerIndex": 1,
        "explanation": "Public interest must prevail over private gain in his professional conduct."
    },
    {
        "id": "ch53-l2-q59",
        "question": "Which of the following is NOT a duty of the AGI?",
        "options": ["Advising govt on legal matters.","Representing govt in SC.","Presiding over the Rajya Sabha.","Performing duties of a legal character assigned by the President."],
        "correctAnswerIndex": 2,
        "explanation": "Presiding over Rajya Sabha is the duty of the Vice-President."
    },
    {
        "id": "ch53-l2-q60",
        "question": "Can the AGI appear for a State Government against the Union Government?",
        "options": ["Yes.","No, it would be a direct conflict with his primary role as advisor to the Union (Art 76).","Only for West Bengal.","Only if the PM allows."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot brief against his primary client (The Union)."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch53-l3-q1",
        "question": "Consider the following statements regarding the GST Council",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is false. Even if all 31 states vote together, they only command 2/3rd (66.6%) weightage. Since a 3/4th (75%) majority is required, they cannot override the Centre (1/3rd = 33.3%). Conversely, the Centre cannot pass anything without the support of at least some states."
    },
    {
        "id": "ch53-l3-q2",
        "question": "The",
        "options": ["To provide a permanent source of revenue for the GST Council Secretariat","To repay the principal and interest of the back-to-back loans taken by the Centre to compensate States for revenue shortfalls during the COVID-19 pandemic","To fund the Green Energy transition in industrial states","To reduce the corporate tax rates in manufacturing states"],
        "correctAnswerIndex": 1,
        "explanation": "While the 5-year compensation period ended in June 2022, the cess was extended to service and repay the debt incurred by the Centre to bridge the compensation gap during the pandemic years."
    },
    {
        "id": "ch53-l3-q3",
        "question": "Regarding the",
        "options": ["It makes the Union law superior to State law in case of conflict (Repugnancy under Article 254)","It is a sui generis (unique) power where both Parliament and State Legislatures have equal and simultaneous power, and Article 254 (repugnancy) does not apply to GST laws","Only the Parliament can tax the","of services","The States can only tax intra-state trade if the Parliament gives permission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 246A is unique because it doesn"
    },
    {
        "id": "ch53-l3-q4",
        "question": "Assertion (A): The GST Council is the first constitutional body in India that embodies the principle of",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Before GST, the Centre had no say in VAT and States had no say in Service Tax. Now, they share power over both, representing a"
    },
    {
        "id": "ch53-l3-q5",
        "question": "The GST Council recently discussed the",
        "options": ["Higher tax on finished products than on raw materials to encourage exports","Higher tax on raw materials/inputs than on the finished product, causing tax accumulation and hindering the","initiative","Taxing services more than goods to shift to a service economy","Reducing tax for the luxury sector"],
        "correctAnswerIndex": 1,
        "explanation": "Inverse duty means the inputs are taxed more (e.g., 18%) than the final output (e.g., 5%). This makes locally produced goods more expensive and creates refund issues, which the Council tries to"
    },
    {
        "id": "ch53-l3-q6",
        "question": "If a vacancy exists in the GST Council (e.g., a state doesn",
        "options": ["Yes, as it is a constitutional body and must be fully constituted","No, Article 279A(10) explicitly protects the Council","Only if more than five states are vacant","Only if the Centre"],
        "correctAnswerIndex": 1,
        "explanation": "This is a structural safeguard to ensure that the national tax machinery doesn"
    },
    {
        "id": "ch53-l3-q7",
        "question": "Which Article deals with the",
        "options": ["Article 246","Article 269A","Article 270","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Article 269A provides that GST on inter-state trade shall be levied and collected by the Union and apportioned as per the recommendations of the GST Council."
    },
    {
        "id": "ch53-l3-q8",
        "question": "The GST Appellate Tribunal (GSTAT) will have",
        "options": ["The Supreme Court","The GST Council","The Parliament through a law","The NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The GST Council oversees the entire structural ecosystem, including the recommendation for setting up GSTAT benches across the country."
    },
    {
        "id": "ch53-l3-q9",
        "question": "Which of the following describes the impact of the",
        "options": ["It completely deleted List II (State List)","It modified entries in List I and List II to exclude the items subsumed into GST, while inserting Article 246A as an overriding provision","It merged List I and List II into a single list","It had no impact on the 7th Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "Entries like 84 of List I (Excise) and 54 of List II (Sales Tax) were narrowed down to only a few items (tobacco, alcohol, petroleum), while GST was given its own basis in 246A."
    },
    {
        "id": "ch53-l3-q10",
        "question": "The",
        "options": ["The States have no voting power","States have lost the flexibility to change tax rates to meet local emergencies without the Council","The Centre collects all the taxes","The Finance Commission is abolished"],
        "correctAnswerIndex": 1,
        "explanation": "Since states can no longer unilaterally change rates on most goods/services, it reduces their independent fiscal flexibility, which is why the"
    },
    {
        "id": "ch53-l3-q11",
        "question": "The GST Council is a",
        "options": ["Yes, the Parliament is now subordinate to the Council","No, the Parliament remains supreme in its legislative power, but by convention and the structure of the GST Acts, it only acts on the recommendations of the Council to maintain national unity","Only the Rajya Sabha can change rates","Rates are fixed for 100 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Council recommends; the Parliament (for CGST) and State Legislatures (for SGST) legislate. The"
    },
    {
        "id": "ch53-l3-q12",
        "question": "The",
        "options": ["The Supreme Court","The GST Council","The RBI","The World Trade Organization"],
        "correctAnswerIndex": 1,
        "explanation": "These technical rules define the core of"
    },
    {
        "id": "ch53-l3-q13",
        "question": "When comparing the GST Council with the Finance Commission, which of the following is correct?",
        "options": ["Both are permanent bodies","The Finance Commission is concerned with vertical and horizontal devolution of all taxes, while the GST Council is a specialized body for indirect tax policy and harmony","The GST Council has no states as members","The Finance Commission is headed by the Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The FC is periodic and broad-based; the GST Council is permanent and focused on one (albeit huge) tax category."
    },
    {
        "id": "ch53-l3-q14",
        "question": "The 101st Amendment Act also required the formation of a",
        "options": ["Yes, the GST Court","No, the Council itself is the forum for negotiation and dispute resolution, although GSTAT handles individual litigation","The dispute is settled by the NITI Aayog","The President decides all disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The Council acts as a political-administrative forum for resolving disputes between governments, avoiding the need for a separate"
    },
    {
        "id": "ch53-l3-q15",
        "question": "Which of the following",
        "options": ["Jammu and Kashmir (converted from State to UT, then assigned a legislature)","Telangana","Goa","Sikkim"],
        "correctAnswerIndex": 0,
        "explanation": "The change in status of J&K required the GST Council to adjust its voting and administrative protocols to treat the UT of J&K as a"
    },
    {
        "id": "ch53-l3-q16",
        "question": "The",
        "options": ["The Income Tax Department (PAN)","The Ministry of Corporate Affairs (DIN/CIN)","The RBI (Payment Gateways)","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "GSTN is a data-driven ecosystem that communicates with other government departments to prevent tax evasion and ensure seamless compliance."
    },
    {
        "id": "ch53-l3-q17",
        "question": "What is the constitutional significance of",
        "options": ["It creates a new Supreme Court","It empowers the Council to solve its own internal political and fiscal disputes, keeping them out of the regular judicial system as much as possible to ensure fast decision-making","It allows the Centre to abolish any state","It is a dead letter"],
        "correctAnswerIndex": 1,
        "explanation": "The mechanism is intended for inter-governmental disputes, recognizing that fiscal federalism is best managed through negotiation and consensus rather than purely adversarial litigation."
    },
    {
        "id": "ch53-l3-q18",
        "question": "The",
        "options": ["The Origin-based Principle","The Destination-based Consumption Principle (where the state of the consumer gets the tax)","The Production-based Principle","The Global Income Principle"],
        "correctAnswerIndex": 1,
        "explanation": "This is the fundamental shift of GST. It protects the revenue of consumption states (importers) rather than just the manufacturing states (exporters)."
    },
    {
        "id": "ch53-l3-q19",
        "question": "In the context of",
        "options": ["States have 100% of the votes","States collectively hold 2/3rd (66.6%) of the weighted vote, which is more than the Centre","The Chairman is always a State Finance Minister","States can pass any decision without the Centre"],
        "correctAnswerIndex": 1,
        "explanation": "While states cannot override the Centre, they do have a larger share in the vote pool (66.6%), reflecting the importance of states in India"
    },
    {
        "id": "ch53-l3-q20",
        "question": "Assertion (A): The GST Council recently allowed",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "GSTAT is the much-awaited judicial-administrative bridge in the GST ecosystem. It provides a dedicated mechanism to resolve complex tax assessment disputes."
    },
    {
        "id": "ch53-l3-q21",
        "question": "If a candidate is appearing for the UPSC in 2026, which of the following",
        "options": ["Aviation Turbine Fuel (ATF) and Natural Gas","High Speed Diesel","Motor Spirit (Petrol)","None, as the Council has not yet recommended a date"],
        "correctAnswerIndex": 3,
        "explanation": "As of early 2024, the Council has deferred the decision. Inclusion of petrol/diesel is a high-stake political and fiscal decision that requires consensus from both sides."
    },
    {
        "id": "ch53-l3-q22",
        "question": "The 101st Amendment Act (2016) also amended",
        "options": ["To abolish all state taxes","To restrict states from imposing tax on the supply of goods/services taking place outside the state or during import/export, aligning with the IGST framework","To allow states to tax the Parliament","To make GST a central subject"],
        "correctAnswerIndex": 1,
        "explanation": "Article 286 (Restrictions as to imposition of tax on the sale or purchase of goods) was modified to"
    },
    {
        "id": "ch53-l3-q23",
        "question": "The",
        "options": ["Open API and XBRL for seamless integration with accounting softwares","Proprietary encrypted formats that no one can access","Manual data entry only","Paper-based filing only"],
        "correctAnswerIndex": 0,
        "explanation": "GSTN is a modern tech platform that allows businesses to sync their accounting data directly with the tax portal, reducing compliance costs."
    },
    {
        "id": "ch53-l3-q24",
        "question": "Which of the following is TRUE about the",
        "options": ["It has a separate vote as a state","It is represented by the Central Government (Union Finance Minister) as it is a UT without a legislature","It is represented by the Governor of J&K","It has no representation"],
        "correctAnswerIndex": 1,
        "explanation": "UTs without legislatures (like Ladakh, Chandigarh, Dadra & Nagar Haveli, etc.) are under the direct administrative/fiscal umbrella of the Union and thus don"
    },
    {
        "id": "ch53-l3-q25",
        "question": "The 101st Amendment also touched upon the",
        "options": ["Article 246A (the power to tax)","Section 18 of the 101st Amendment Act (the","clause that mandated compensation)","Article 360 (Financial Emergency)","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Section 18 of the Amendment Act was the legal anchor for the GST (Compensation to States) Act, mandateing that Parliament shall provide for compensation for five years."
    },
    {
        "id": "ch53-l3-q26",
        "question": "In the case of",
        "options": ["Increasing the tax on the finished product or decreasing the tax on the raw materials so that the tax on the output is at least equal to or more than the inputs","Abolishing the finished product","Doubling the tax on the inputs","Asking the consumer to pay more"],
        "correctAnswerIndex": 0,
        "explanation": "Correcting the inversion ensures that businesses don"
    },
    {
        "id": "ch53-l3-q27",
        "question": "The",
        "options": ["The Motor Vehicles Act","The GST Act (under the administrative power of the state/centre on the recommendation of the Council)","The IPC","The Constitution 42nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "E-way bills track the movement of goods (>50,000 value) to prevent tax evasion and ensure tax compliance across state borders."
    },
    {
        "id": "ch53-l3-q28",
        "question": "The GST Council",
        "options": ["Import duties (Basic Customs)","Exemptions on the import of life-saving drugs or specialized equipment","Determining the exchange rate of the Rupee","Signing Free Trade Agreements"],
        "correctAnswerIndex": 1,
        "explanation": "While Basic Customs is with the Centre, the IGST (which is also levied on imports) is overseen by the Council, allowing it to provide relief during humanitarian or economic crises."
    },
    {
        "id": "ch53-l3-q29",
        "question": "The",
        "options": ["The Economic Cabinet of India","The Parliament of Taxation","The Supreme Judicial Forum for Tax","Either (a) or (b)"],
        "correctAnswerIndex": 3,
        "explanation": "It is effectively an"
    },
    {
        "id": "ch53-l3-q30",
        "question": "Which of the following is the most significant",
        "options": ["Decreasing tax revenue","Expanding the tax base to include petroleum and electricity while balancing the revenue needs of both Centre and States","Abolishing the GSTN","Merging with the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Bringing petroleum and electricity into GST is the"
    },
    {
        "id": "ch53-l3-q31",
        "question": "Analyze the",
        "options": ["In both countries, the AG is a member of the Cabinet.","In India, the AG is a professional lawyer who is NOT part of the Cabinet; in the UK, the AG is a politician and a member of the Cabinet.","The Indian AG has the power to vote in Parliament like the UK AG.","The UK AG is appointed by the Chief Justice, while the Indian AG by the President."],
        "correctAnswerIndex": 1,
        "explanation": "India follows a"
    },
    {
        "id": "ch53-l3-q32",
        "question": "Assertion (A): The Attorney General can participate in the sittings of a Parliamentary Committee without being a member of Parliament.\\nReason (R): Article 88 empowers the AGI to speak in and participate in the proceedings of any committee of Parliament to which he may be named a member.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This is a unique constitutional privilege that allows the executive"
    },
    {
        "id": "ch53-l3-q33",
        "question": "How does the",
        "options": ["There is no difference.","The AG can be removed at any time WITHOUT assigned grounds or a special parliamentary procedure, whereas CAG/EC have security of tenure.","The AG must be impeached.","The AG is appointed for life."],
        "correctAnswerIndex": 1,
        "explanation": "The AG is essentially the government"
    },
    {
        "id": "ch53-l3-q34",
        "question": "The 1987 Law Officers (Conditions of Service) Rules specify that the AGI must NOT",
        "options": ["To prevent him from making more money.","To avoid","as the","is always the prosecutor in criminal cases, and the AG is the chief lawyer of the State.","To save time for government work.","Only for terrorist cases."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot fight against the entity (State) he represents as the head of the legal wing."
    },
    {
        "id": "ch53-l3-q35",
        "question": "In a case of",
        "options": ["A judge.","Amicus Curiae (Friend of the Court).","The representative of the President/Union of India to present the government","A witness."],
        "correctAnswerIndex": 2,
        "explanation": "Art 143 is for the President"
    },
    {
        "id": "ch53-l3-q36",
        "question": "Does the",
        "options": ["Yes.","No, he has the","in cases involving the Government, but he must follow the procedural sittings and rules of the respective court.","Only in the Delhi High Court.","Only if the PM is the petitioner."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional rights do not imply procedural administrative supremacy over the judiciary."
    },
    {
        "id": "ch53-l3-q37",
        "question": "Evaluate the role of the",
        "options": ["Yes, he is mentioned similarly in Art 76.","No, the AGI is the ONLY constitutional office; the SG and ASGs are statutory roles that provide support but have no independent constitutional duties.","The SG is superior to AGI.","The SG cannot appear in court."],
        "correctAnswerIndex": 1,
        "explanation": "AGI stands alone in Article 76. Everything else is supportive infrastructure."
    },
    {
        "id": "ch53-l3-q38",
        "question": "Does the AGI have the",
        "options": ["No.","Yes, he enjoys the same immunity as an MP regarding anything said or any vote given (except he can","Only for statements on the budget.","Only if he is a Senior Advocate."],
        "correctAnswerIndex": 1,
        "explanation": "Free speech in the house is essential for him to provide legal context to the legislature."
    },
    {
        "id": "ch53-l3-q39",
        "question": "If a State Government sues the Union Government (Art 131), can the AGI represent the State?",
        "options": ["Yes.","No, it would be a fundamental breach of his oath and duty to the Union Executive which appointed him.","Only with the PM","Only if the State is a border state."],
        "correctAnswerIndex": 1,
        "explanation": "Representation of the Union is the core mandate of the AGI."
    },
    {
        "id": "ch53-l3-q40",
        "question": "Analyze the",
        "options": ["Yes.","No, it is NOT mentioned as","; the constitution says he shall receive such remuneration as the President may determine (Art 76(4)).","Only the travel allowance is charged.","Only after 10 years of service."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Judges or CAG, his pay is at the discretion of the executive, reflecting the"
    },
    {
        "id": "ch53-l3-q41",
        "question": "Does the AGI have the power to",
        "options": ["No.","Yes, under the Contempt of Courts Act, 1971, his consent (or Solicitor General","Only for the Speaker.","Only if the Supreme Court CJI is absent."],
        "correctAnswerIndex": 1,
        "explanation": "The AG acts as a"
    },
    {
        "id": "ch53-l3-q42",
        "question": "Analysis of Art 88. Can the AGI be a member of a",
        "options": ["No.","Yes, the article allows him to be named a member of ANY committee of Parliament.","Only for the Public Accounts Committee.","Only if he is also a lawyer in the SC."],
        "correctAnswerIndex": 1,
        "explanation": "Technical assistance to joints committees (like on a complex Bill) is common."
    },
    {
        "id": "ch53-l3-q43",
        "question": "The AGI must be",
        "options": ["No, only 10 years advocate.","Yes, since the President can appoint an eminent jurist to the SC (Art 124), the AG can also be chosen from this category.","Only for the first 5 years of the constitution.","Only by an Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "The parity of qualification is absolute as per the text of Art 76."
    },
    {
        "id": "ch53-l3-q44",
        "question": "Consider the",
        "options": ["It becomes invalid.","It remains as","but the new AGI may provide a fresh/different opinion to the new executive.","The AGI is arrested.","The advice is deleted from the files."],
        "correctAnswerIndex": 1,
        "explanation": "Institutional continuity of the record is maintained, but political/legal strategy is updated."
    },
    {
        "id": "ch53-l3-q45",
        "question": "Does the Attorney General have a",
        "options": ["Yes (under Art 100).","No, he has NO right to vote anywhere in Parliament (Art 88).","Only if the Chairman of the committee allows.","Only if he is the oldest member."],
        "correctAnswerIndex": 1,
        "explanation": "The prohibition on voting (Art 88) is total and applies to committees as well."
    },
    {
        "id": "ch53-l3-q46",
        "question": "Analyze the",
        "options": ["No.","Yes, for government matters requiring confidentiality where the court permits in-camera proceedings.","Only for spy cases.","Only during midnight."],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief representative of the State"
    },
    {
        "id": "ch53-l3-q47",
        "question": "Has the AGI any",
        "options": ["Yes, on legal grounds.","No, he is an",". The Minister (Executive) is responsible to the Parliament for policy decisions.","Only for constitutional amendments.","Only if he is older than the Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Expert advice vs Democratic finality; the latter prevails in the Cabinet system."
    },
    {
        "id": "ch53-l3-q48",
        "question": "The",
        "options": ["On every court brief.","Actually, AGI doesn","Office Seal","Only on his salary slip.","Only on the budget."],
        "correctAnswerIndex": 1,
        "explanation": "He is an officer appearing"
    },
    {
        "id": "ch53-l3-q49",
        "question": "If the AGI is found to be in",
        "options": ["Impeachment.","The President can fire him instantly as he holds office during",".","The Supreme Court can fire him.","Only the PM can decide."],
        "correctAnswerIndex": 1,
        "explanation": "No complex procedure is required for removal of AGI."
    },
    {
        "id": "ch53-l3-q50",
        "question": "Review the history of AGI. Who was the AG during the",
        "options": ["Niren De.","M.C. Setalvad.","Soli Sorabjee.","K.Parasaran."],
        "correctAnswerIndex": 0,
        "explanation": "Niren De is well-known for his defense of the government during the ADM Jabalpur (Habeas Corpus) case."
    },
    {
        "id": "ch53-l3-q51",
        "question": "Analyze the",
        "options": ["No.","Yes, standard legal ethics and professional conduct rules (Bar Council) apply to him besides his terms of service.","The family must stop practicing law.","Only if they work in the same court."],
        "correctAnswerIndex": 1,
        "explanation": "Professional integrity is a baseline expectation for the highest law officer."
    },
    {
        "id": "ch53-l3-q52",
        "question": "Does the AGI have any power to",
        "options": ["Yes.","No, they are appointed by the Government of India through the Ministry of Law and Appointments Committee of the Cabinet (ACC).","By the Supreme Court.","By the CJI."],
        "correctAnswerIndex": 1,
        "explanation": "Government controls the legal infrastructure staffing."
    },
    {
        "id": "ch53-l3-q53",
        "question": "The",
        "options": ["Losing a vote in Parliament.","The convention of resignation following a change in the political executive (Government).","His salary being paid by the political party.","He only appears for the PM."],
        "correctAnswerIndex": 1,
        "explanation": "He is the"
    },
    {
        "id": "ch53-l3-q54",
        "question": "Can the AGI write a",
        "options": ["Yes.","No, he is not a member of the Cabinet; he provides a","which the Cabinet may or may not accept.","Only for tax bills.","Only if the PM agrees."],
        "correctAnswerIndex": 1,
        "explanation": "His input is"
    },
    {
        "id": "ch53-l3-q55",
        "question": "Is the AGI the",
        "options": ["No.","Yes.","Only for alternate years.","Only if he is a former judge."],
        "correctAnswerIndex": 0,
        "explanation": "Bar Council of India (BCI) has its own elected chairman. The AG is an ex-officio"
    },
    {
        "id": "ch53-l3-q56",
        "question": "Analyze Article 76(2). Who specifies",
        "options": ["The Parliament.","The President of India.","The Chief Justice.","The Law Minister solely."],
        "correctAnswerIndex": 1,
        "explanation": "The President assigns the specific mandates beyond the standard ones."
    },
    {
        "id": "ch53-l3-q57",
        "question": "Does the AGI have any authority to",
        "options": ["No, they are independent constitutional officers under Art 165.","Yes.","Only during a National Emergency.","Only for water disputes."],
        "correctAnswerIndex": 0,
        "explanation": "They report to their respective state governors/governments; no hierarchical link exists."
    },
    {
        "id": "ch53-l3-q58",
        "question": "If the Parliament passes an",
        "options": ["Yes.","No, legal advice is given in good faith; the Parliament is sovereign and the law is subject to judicial review by courts.","The AG must be arrested.","The AG has to pay the court costs."],
        "correctAnswerIndex": 1,
        "explanation": "Advice does not equal the final legislative act."
    },
    {
        "id": "ch53-l3-q59",
        "question": "Who receives the AGI",
        "options": ["The Speaker.","The House as a whole (Table of the House).","The Opposition leader.","The President only."],
        "correctAnswerIndex": 1,
        "explanation": "Public legal advice to the legislature becomes part of the public record."
    },
    {
        "id": "ch53-l3-q60",
        "question": "Why did the first AGI (Setalvad) serve for 13 years despite being under",
        "options": ["Because he was the PM","Because the same government (Nehru) served for that period and chose to retain him for continuity and expertise.","By an amendment.","Because nobody else applied."],
        "correctAnswerIndex": 1,
        "explanation": "Retention is a sign of immense professional trust from the executive."
    }
];

export const CHAPTER_53_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
