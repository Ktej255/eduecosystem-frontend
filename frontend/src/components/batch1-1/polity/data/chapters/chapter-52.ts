import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch52-l1-q1",
        "question": "Which Article of the Constitution of India provides for the establishment of a Finance Commission?",
        "options": ["Article 260","Article 280","Article 300","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280 of the Constitution provides for a Finance Commission as a quasi-judicial body."
    },
    {
        "id": "ch52-l1-q2",
        "question": "The Finance Commission is constituted by the President of India every:",
        "options": ["Three years","Five years or at such earlier time as he considers necessary","Six years","Ten years"],
        "correctAnswerIndex": 1,
        "explanation": "According to Article 280(1), the President constitutes the Finance Commission at the expiration of every fifth year or at such earlier time as he considers necessary."
    },
    {
        "id": "ch52-l1-q3",
        "question": "The Finance Commission consists of a Chairman and how many other members?",
        "options": ["Three","Four","Five","Six"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission consists of a Chairman and four other members appointed by the President."
    },
    {
        "id": "ch52-l1-q4",
        "question": "The qualifications of the Chairman and members of the Finance Commission are determined by:",
        "options": ["The President","The Parliament by law","The Constitution of India","The Ministry of Finance"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(2) empowers the Parliament to determine by law the qualifications which shall be required for appointment as members of the Commission."
    },
    {
        "id": "ch52-l1-q5",
        "question": "A member of the Finance Commission holds office for such period as specified by:",
        "options": ["The Constitution","The President in his order","The Parliament","The Cabinet Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The members hold office for such period as is specified by the President in his order of appointment."
    },
    {
        "id": "ch52-l1-q6",
        "question": "Are the members of the Finance Commission eligible for re-appointment?",
        "options": ["No, never","Yes, they are eligible for re-appointment","Only the Chairman is eligible","Only once"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Finance Commission (Miscellaneous Provisions) Act, 1951, the Chairman and members are eligible for re-appointment."
    },
    {
        "id": "ch52-l1-q7",
        "question": "The Finance Commission is required to make recommendations to the President regarding the distribution of net proceeds of taxes between:",
        "options": ["The Union and the States","The States and the Panchayats","The Union and the Municipalities","Different Ministries of the Union"],
        "correctAnswerIndex": 0,
        "explanation": "The primary function (vertical devolution) is to recommend the distribution of the net proceeds of taxes to be shared between the Union and the States."
    },
    {
        "id": "ch52-l1-q8",
        "question": "The principles that should govern the",
        "options": ["NITI Aayog","Finance Commission","Inter-State Council","Public Accounts Committee"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(3)(b) mandates the Commission to recommend the principles which should govern the grants-in-aid of the revenues of the States out of the Consolidated Fund of India."
    },
    {
        "id": "ch52-l1-q9",
        "question": "To whom does the Finance Commission submit its report?",
        "options": ["The Prime Minister","The Finance Minister","The President","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The Commission submits its report to the President, who then causes it to be laid before both Houses of Parliament."
    },
    {
        "id": "ch52-l1-q10",
        "question": "The recommendations of the Finance Commission are:",
        "options": ["Legally binding on the Government","Advisory in nature and not binding on the Government","Binding only if approved by the Rajya Sabha","Binding only during a Financial Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "It must be noted that the recommendations made by the Finance Commission are only of advisory nature and hence, not binding on the government."
    },
    {
        "id": "ch52-l1-q11",
        "question": "The 15th Finance Commission was headed by:",
        "options": ["Y.V. Reddy","Vijay Kelkar","N.K. Singh","Arvind Panagariya"],
        "correctAnswerIndex": 2,
        "explanation": "The 15th Finance Commission (2021-26) was chaired by N.K. Singh."
    },
    {
        "id": "ch52-l1-q12",
        "question": "Which Article deals with the Finance Commission",
        "options": ["Article 280(3)(bb)","Article 243-I","Article 243-Y","Article 281"],
        "correctAnswerIndex": 0,
        "explanation": "Article 280(3)(bb) (added by the 73rd Amendment) requires the Commission to recommend measures to augment the State"
    },
    {
        "id": "ch52-l1-q13",
        "question": "The 16th Finance Commission, constituted in 2023, is headed by:",
        "options": ["Raghuram Rajan","Arvind Panagariya","N.K. Singh","Bibek Debroy"],
        "correctAnswerIndex": 1,
        "explanation": "The 16th Finance Commission is headed by Dr. Arvind Panagariya, former Vice-Chairman of NITI Aayog."
    },
    {
        "id": "ch52-l1-q14",
        "question": "A person qualified for appointment to the Finance Commission as a member must have:",
        "options": ["Wide experience in financial matters and administration","Special knowledge of economics","Special knowledge of finance and accounts of government","Any of the above (as per Parliament"],
        "correctAnswerIndex": 3,
        "explanation": "The Parliament has specified four categories: High Court judges (or qualified), special knowledge of gov accounts/finance, wide experience in financial matters/admin, and special knowledge of economics."
    },
    {
        "id": "ch52-l1-q15",
        "question": "Which of the following is NOT a function of the Finance Commission?",
        "options": ["Distribution of taxes between Union and States","Determining the principles of grants-in-aid to states","Preparing the Union Budget","Augmenting resources of local bodies"],
        "correctAnswerIndex": 2,
        "explanation": "Preparing the Union Budget is the function of the Department of Economic Affairs in the Ministry of Finance, not the Finance Commission."
    },
    {
        "id": "ch52-l1-q16",
        "question": "The",
        "options": ["Income Tax","Corporation Tax","Cesses and Surcharges (unless specifically shared)","Central GST"],
        "correctAnswerIndex": 2,
        "explanation": "Cesses and surcharges collected by the Union are generally not part of the divisible pool shared with the states under Article 270 (unless explicitly specified)."
    },
    {
        "id": "ch52-l1-q17",
        "question": "Who appoints the Chairman of the Finance Commission?",
        "options": ["The Prime Minister","The Finance Minister","The President of India","The Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Article 280(1) states that the Chairman and members are appointed by the President."
    },
    {
        "id": "ch52-l1-q18",
        "question": "The State Finance Commission (SFC) is provided for under which Article(s)?",
        "options": ["Article 280","Article 243-I and 243-Y","Article 263","Article 315"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243-I deals with SFC for Panchayats and 243-Y for Municipalities."
    },
    {
        "id": "ch52-l1-q19",
        "question": "How many Finance Commissions have been constituted in India so far (as of early 2024)?",
        "options": ["14","15","16","17"],
        "correctAnswerIndex": 2,
        "explanation": "The 16th Finance Commission was constituted by the President on December 31, 2023."
    },
    {
        "id": "ch52-l1-q20",
        "question": "The Finance Commission is a ______ body.",
        "options": ["Statutory","Constitutional","Executive","Non-constitutional advisory"],
        "correctAnswerIndex": 1,
        "explanation": "As it is established under Article 280, it is a constitutional body."
    },
    {
        "id": "ch52-l1-q21",
        "question": "The recommendation of the Finance Commission to increase the share of states in taxes is an example of:",
        "options": ["Horizontal Devolution","Vertical Devolution","Fiscal Consolidation","Grants-in-aid"],
        "correctAnswerIndex": 1,
        "explanation": "Vertical devolution refers to the division of resources between the Centre and the States."
    },
    {
        "id": "ch52-l1-q22",
        "question": "Which criteria given below is NOT used for Horizontal Devolution (sharing among states)?",
        "options": ["Population","Income Distance","Distance from New Delhi","Forest and Ecology"],
        "correctAnswerIndex": 2,
        "explanation": "Physical distance from the capital is never a criteria for resource allocation."
    },
    {
        "id": "ch52-l1-q23",
        "question": "The first Finance Commission was constituted in 1951 under the chairmanship of:",
        "options": ["K.C. Neogy","K. Santhanam","A.K. Chanda","P.V. Rajamannar"],
        "correctAnswerIndex": 0,
        "explanation": "The 1st Finance Commission was headed by K.C. Neogy."
    },
    {
        "id": "ch52-l1-q24",
        "question": "The Finance Commission submits its report to the President under:",
        "options": ["Article 280","Article 281","Article 282","Article 263"],
        "correctAnswerIndex": 1,
        "explanation": "Article 281 deals with the recommendations of the Finance Commission and their laying before the Parliament."
    },
    {
        "id": "ch52-l1-q25",
        "question": "Under Article 281, the President must also lay before Parliament:",
        "options": ["A copy of the Union Budget","An explanatory memorandum as to the action taken on each recommendation","The SPSC reports","A list of all dissenting members"],
        "correctAnswerIndex": 1,
        "explanation": "Article 281 requires the report to be laid together with an explanatory memorandum as to the action taken on it."
    },
    {
        "id": "ch52-l1-q26",
        "question": "The tenure of Finance Commission members is fixed by:",
        "options": ["The Constitution (5 years)","The President in the appointment order","The Parliament","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution doesn"
    },
    {
        "id": "ch52-l1-q27",
        "question": "Which body",
        "options": ["NITI Aayog","GST Council","Finance Commission (reinforced role)","Inter-state Council"],
        "correctAnswerIndex": 0,
        "explanation": "NITI Aayog replaced the Planning Commission, although the Finance Commission remains the primary constitutional body for fiscal transfers."
    },
    {
        "id": "ch52-l1-q28",
        "question": "Can a person with a criminal record be appointed to the Finance Commission?",
        "options": ["Yes, if the President allows","No, the Finance Commission Act specifies disqualifications including unsound mind or conviction for an offense involving moral turpitude","Yes, for a short term","Only if they are economists"],
        "correctAnswerIndex": 1,
        "explanation": "The Finance Commission (Miscellaneous Provisions) Act, 1951, lists disqualifications like unsoundness of mind, insolvency, and criminal conviction."
    },
    {
        "id": "ch52-l1-q29",
        "question": "The Finance Commission",
        "options": ["Uniform taxation across states","Equitable distribution of financial resources between Centre and States","Abolition of state debts","Direct funding to political parties"],
        "correctAnswerIndex": 1,
        "explanation": "Its goal is to manage the vertical and horizontal fiscal imbalances in the Indian federation."
    },
    {
        "id": "ch52-l1-q30",
        "question": "The Finance Commission makes recommendations for a period of:",
        "options": ["One year","Five years (usually)","Ten years","Until the next election"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission usually recommends for a five-year period (e.g., the 15th FC for 2021-26)."
    },
    {
        "id": "ch52-l1-q31",
        "question": "The Chairman of the Finance Commission must be a person having experience in:",
        "options": ["Judicial matters","Public affairs","Economics","Accounting"],
        "correctAnswerIndex": 1,
        "explanation": "According to the Finance Commission (Miscellaneous Provisions) Act, 1951, the Chairman should be a person having experience in public affairs."
    },
    {
        "id": "ch52-l1-q32",
        "question": "Which of the following is NOT one of the qualifications for being a member (other than Chairman) of the Finance Commission?",
        "options": ["A judge of a High Court or one qualified to be appointed as one","A person with specialized knowledge of finance and accounts of the government","A person with wide experience in financial matters and administration","A person who has served as a Governor of a State"],
        "correctAnswerIndex": 3,
        "explanation": "Having served as a Governor is not a specified qualification. The four categories are: HC judge (or qualified), gov finance/accounts knowledge, wide financial/admin experience, and special knowledge of economics."
    },
    {
        "id": "ch52-l1-q33",
        "question": "The Finance Commission recommends measures to augment the Consolidated Fund of a State based on recommendations made by:",
        "options": ["The Union Finance Minister","The State Finance Commission","The NITI Aayog","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(3)(bb) and (c) specify that the Union Finance Commission"
    },
    {
        "id": "ch52-l1-q34",
        "question": "The",
        "options": ["Total tax collected minus the cost of collection","Total tax collected including cesses and surcharges","Only the corporate tax","The tax collected after excluding the share of the Union Territories"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 279,"
    },
    {
        "id": "ch52-l1-q35",
        "question": "Who certifies the",
        "options": ["The Finance Minister","The Comptroller and Auditor General (CAG) of India","The Governor of the RBI","The Chairman of the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279(1) states that the net proceeds shall be ascertained and certified by the CAG, whose certificate shall be final."
    },
    {
        "id": "ch52-l1-q36",
        "question": "The Finance Commission is described as a",
        "options": ["It can punish people for financial crimes","It has the powers of a civil court under the CCP while summoning witnesses or requiring production of documents","It is always headed by a Supreme Court Judge","Its reports are reviewed by the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the powers of a civil court for purposes of gathering evidence and summoning witnesses, which gives it a quasi-judicial character."
    },
    {
        "id": "ch52-l1-q37",
        "question": "Which body has historically overlapped with the Finance Commission",
        "options": ["The Planning Commission (now NITI Aayog)","The National Development Council","The Zonal Councils","The GST Council"],
        "correctAnswerIndex": 0,
        "explanation": "Historically, the Planning Commission (a non-constitutional body) made significant discretionary grants, which often overshadowed the Finance Commission"
    },
    {
        "id": "ch52-l1-q38",
        "question": "The 15th Finance Commission used which census data for its population-related criteria, departing from the 1971 census used by previous commissions?",
        "options": ["1991 Census","2001 Census","2011 Census","The latest projected data"],
        "correctAnswerIndex": 2,
        "explanation": "The 15th Finance Commission was specifically mandated to use the 2011 Census data, which was a point of contention for states that had performed well in population control."
    },
    {
        "id": "ch52-l1-q39",
        "question": "What is the significance of the",
        "options": ["They define the specific issues and the period the Commission needs to cover","They are fixed by the Constitution and cannot be changed","They are decided by the State Legislatures","They are advisory for the Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The ToR (issued by the President) provides the scope of work for the Commission, including additional matters in the"
    },
    {
        "id": "ch52-l1-q40",
        "question": "Can the Finance Commission be asked to look into any other matter beyond tax sharing and grants?",
        "options": ["No, its duties are strictly limited to Article 280(3)(a) and (b)","Yes, any other matter referred to it by the President in the interest of sound finance","Only if requested by all State Governors","Only during a Financial Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(3)(d) allows the President to refer"
    },
    {
        "id": "ch52-l1-q41",
        "question": "The",
        "options": ["Have the highest per capita income","Have the lowest per capita income (to help them catch up)","Collect the most GST","Have the highest literacy rates"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance measures the gap between a state"
    },
    {
        "id": "ch52-l1-q42",
        "question": "The Finance Commission",
        "options": ["The Chairman of the Commission","The Finance Minister","The President of India","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "Article 281 states:"
    },
    {
        "id": "ch52-l1-q43",
        "question": "Which of the following describes the",
        "options": ["The government can ignore its findings without any explanation","The government is not legally bound to implement the recommendations, but it usually accepts the key sharing formula","The recommendations must be ratified by the Supreme Court","The Commission only gives advice to the states, not the centre"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional tradition dictates that the government accepts the Commission"
    },
    {
        "id": "ch52-l1-q44",
        "question": "The 15th Finance Commission introduced a new criteria for devolution called",
        "options": ["Reward states with higher population growth","Reward states that have made progress in lowering their Fertility Rate","Punish states with aging populations","Incentivize migration to cities"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l1-q45",
        "question": "How does the Finance Commission facilitate",
        "options": ["By giving the Centre power to control state spending","By providing a neutral, expert-driven platform for resource sharing between different tiers of government","By abolishing state-level taxes","By forcing states to follow central laws"],
        "correctAnswerIndex": 1,
        "explanation": "The FC balances the fiscal needs of the Union and the States, acting as an institutional bridge that sustains the federal balance."
    },
    {
        "id": "ch52-l1-q46",
        "question": "The",
        "options": ["Difference in fiscal capacity between the Union and the States","Difference in fiscal capacity among various States","Difference in spending between Agriculture and Industry","Difference in male and female income"],
        "correctAnswerIndex": 1,
        "explanation": "Horizontal imbalance is the gap in resources and needs between different states, which the FC tries to rectify through its sharing criteria."
    },
    {
        "id": "ch52-l1-q47",
        "question": "The 14th Finance Commission is notable for increasing the vertical devolution from 32% to:",
        "options": ["35%","40%","42%","45%"],
        "correctAnswerIndex": 2,
        "explanation": "The 14th FC (Y.V. Reddy) made a historic jump in vertical devolution to 42%, giving states much more unconditional fiscal space."
    },
    {
        "id": "ch52-l1-q48",
        "question": "Why was the share for states slightly reduced to 41% by the 15th Finance Commission?",
        "options": ["Due to the COVID-19 pandemic","To account for the newly created Union Territories of Jammu & Kashmir and Ladakh","Because states were spending too much","To fund the central defense budget"],
        "correctAnswerIndex": 1,
        "explanation": "The reduction from 42% (14th FC) to 41% was essentially a 1% adjustment to provide funds for the requirements of the new UTs of J&K and Ladakh."
    },
    {
        "id": "ch52-l1-q49",
        "question": "The",
        "options": ["Have the lowest tax rates","Show efficiency in tax collection relative to their economic potential","Abolish professional tax","Depend entirely on central grants"],
        "correctAnswerIndex": 1,
        "explanation": "Tax effort incentives states to improve their own tax-to-GSDP ratios and collection efficiency."
    },
    {
        "id": "ch52-l1-q50",
        "question": "Does the Union Finance Commission directly distribute money to individual Panchayats?",
        "options": ["Yes, through direct benefit transfer","No, it recommends grants to be given by the Centre to the States, which the States then pass on to the local bodies","Only in Union Territories","Only during a local body emergency"],
        "correctAnswerIndex": 1,
        "explanation": "The FC recommends grants-in-aid to the states for local bodies. The states are responsible for the actual disbursement based on SFC recommendations."
    },
    {
        "id": "ch52-l1-q51",
        "question": "The Finance Commission is required to review its own criteria every five years because:",
        "options": ["To reflect the changing demographic and economic realities of the states","To ensure the ruling party keeps its promises","Because the Constitution mandates a change of members","To increase the fiscal deficit"],
        "correctAnswerIndex": 0,
        "explanation": "The periodic nature ensures that the resource sharing formula remains relevant to the current needs of the federation."
    },
    {
        "id": "ch52-l1-q52",
        "question": "Which of the following characterizes a",
        "options": ["Power to imprison a Finance Minister","Power to summon any person and require the discovery and production of any document","Power to strike down a state tax law","Power to oversee the CAG"],
        "correctAnswerIndex": 1,
        "explanation": "The ability to summon witnesses and compel document production (under the CCP) is the hallmark of its quasi-judicial status."
    },
    {
        "id": "ch52-l1-q53",
        "question": "The",
        "options": ["Discretionary grants at the will of the PM","Statutory grants recommended by the Finance Commission","Loans that must be repaid with interest","Emergency funds for war only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 275 provides for statutory grants, which are a major part of the FC"
    },
    {
        "id": "ch52-l1-q54",
        "question": "The Finance Commission",
        "options": ["Male and Female issues","Analytical framework/recommendations and State-wise profiles","Central and State budgets","Economic theory and Practice"],
        "correctAnswerIndex": 1,
        "explanation": "Typically, Vol I contains the main recommendations and Vol II contains detailed financial/demographic profiles of each state."
    },
    {
        "id": "ch52-l1-q55",
        "question": "Can the Parliament override the recommendations of the Finance Commission?",
        "options": ["No, they are supreme","Yes, as the Parliament is the sovereign law-making body and the FC is only advisory","Only with the President","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "While Parliament acts on the recommendations (and the cabinet usually accepts them), legally the Parliament remains the authority to decide on fiscal laws."
    },
    {
        "id": "ch52-l1-q56",
        "question": "The",
        "options": ["Its ability to borrow from the World Bank","Its potential to raise revenue from its own tax and non-tax sources","The total number of government employees it has","The amount of gold in its treasury"],
        "correctAnswerIndex": 1,
        "explanation": "Fiscal capacity reflects the state"
    },
    {
        "id": "ch52-l1-q57",
        "question": "The 15th FC",
        "options": ["Vertical Devolution","Horizontal Devolution using","(Article 280(3)(d))","Abolition of the SPSC","A directive of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The President used the power under 280(3)(d) to refer the matter of power sector reform incentives to the Commission."
    },
    {
        "id": "ch52-l1-q58",
        "question": "Which of the following is TRUE about the Finance Commission",
        "options": ["He must be an active IAS officer","He should be a person having experience in","","He must be the same as the NITI Aayog Chairman","He is appointed for life"],
        "correctAnswerIndex": 1,
        "explanation": "The legal requirement is experience in public affairs."
    },
    {
        "id": "ch52-l1-q59",
        "question": "The",
        "options": ["Reduced the role of the Finance Commission","Expanded the percentage and types of taxes shared with states (including GST and Corporation tax)","Abolished grants-in-aid","Made states independent of the centre"],
        "correctAnswerIndex": 1,
        "explanation": "The 80th Amendment introduced the"
    },
    {
        "id": "ch52-l1-q60",
        "question": "If the Finance Commission recommends a grant for",
        "options": ["Article 280(3)(a)","Article 280(3)(b)","Article 280(3)(d)","Article 281"],
        "correctAnswerIndex": 2,
        "explanation": "Specific sectoral grants or thematic grants (like disaster management) are typically referred as additional matters under the"
    },
    {
        "id": "ch52-l1-q61",
        "question": "Consider the following statements regarding the 16th Finance Commission (constituted for 2026-2031):\\n1. It is chaired by Dr. Arvind Panagariya.\\n2. Its mandate includes recommending the tax-sharing formula for the period starting April 1, 2026.\\n3. It has been specifically tasked to review the present arrangements for financing Disaster Management initiatives.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The 16th FC was constituted in Dec 2023 with Panagariya as chair. Its ToR includes vertical/horizontal devolution for 2026-31 and a review of Disaster Management financing."
    },
    {
        "id": "ch52-l1-q62",
        "question": "Regarding",
        "options": ["To discourage state-level populist spending","To provide 1% separately for the requirements of the newly formed Union Territories of Jammu & Kashmir and Ladakh out of the divisible pool","To increase the central share for defense modernization","To adjust for the higher GST collections"],
        "correctAnswerIndex": 1,
        "explanation": "The 14th FC gave 42% to 29 states. After J&K"
    },
    {
        "id": "ch52-l1-q63",
        "question": "The concept of",
        "options": ["The cost of administration in hilly states","The gap between a State’s fiscal capacity (per capita GSDP) and the fiscal capacity of the benchmark state (highest income state)","The distance between the state capital and the prime market","The difference between urban and rural income"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance is the main criterion for horizontal devolution (getting 45% weight in 15th FC). It ensures that states with lower revenue-generating capacity get more resources to provide comparable services."
    },
    {
        "id": "ch52-l1-q64",
        "question": "Assertion (A): The Role of the Finance Commission has become more complex after the introduction of GST in 2017.\\nReason (R): While the GST Council decides on tax rates and exemptions for a significant part of state/central revenue, the Finance Commission still has to recommend the division of the remaining divisible pool and assess states",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch52-l1-q65",
        "question": "Which of the following criteria was GIVEN weightage by the 15th Finance Commission to reward states for",
        "options": ["Forest and Ecology","Demographic Performance","Tax Effort","Infrastructure Gap"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l1-q66",
        "question": "The term",
        "options": ["Distribution of resources between the Union and the States","Distribution of resources among the various States themselves based on specific criteria like population, income distance, and area","Distribution of funds between the State and Panchayats","The transfer of loans from Center to States"],
        "correctAnswerIndex": 1,
        "explanation": "Horizontal devolution is the formula-based sharing of the states"
    },
    {
        "id": "ch52-l1-q67",
        "question": "When the President lays the Finance Commission",
        "options": ["The cost incurred by the Commission in its research","The action taken by the Government on the recommendations","The dissenting opinions of the opposition parties","A list of all civil servants consulted"],
        "correctAnswerIndex": 1,
        "explanation": "Article 281 mandates that the report be laid along with a memorandum explaining the action taken. This ensures that the government"
    },
    {
        "id": "ch52-l1-q68",
        "question": "Is the Finance Commission a",
        "options": ["Yes, it is a permanent office with a permanent staff in the Ministry of Finance","No, it is a periodic body that is constituted every 5 years (or earlier) and ceases to exist after it submits its final report","It is a permanent body of the Parliament","It is a permanent wing of the NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The FC is"
    },
    {
        "id": "ch52-l1-q69",
        "question": "Which specific Article deals with the",
        "options": ["Article 275","Article 282","Article 293","Article 360"],
        "correctAnswerIndex": 0,
        "explanation": "Article 275 provides for statutory grants which are given to needy states on the recommendation of the Finance Commission. Article 282 deals with discretionary grants made for public purposes."
    },
    {
        "id": "ch52-l1-q70",
        "question": "The 16th Finance Commission",
        "options": ["Increasing the printing of currency notes by RBI","The present arrangements for the financing of the fiscal deficit and debt-to-GDP ratio for both the Centre and the States","Merging state budgets into the Union budget","Abolishing all state-level borrowing powers"],
        "correctAnswerIndex": 1,
        "explanation": "Fiscal consolidation is the process of reducing the fiscal deficit and public debt. The FC often recommends a roadmap for both levels of government to maintain fiscal discipline."
    },
    {
        "id": "ch52-l1-q71",
        "question": "The mandate of the Finance Commission under Article 280(3)(c) (measures for municipalities) was added by which Amendment?",
        "options": ["42nd Amendment","44th Amendment","73rd and 74th Amendments","80th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 73rd (Panchayats) and 74th (Municipalities) Constitutional Amendment Acts of 1992 added sub-sections (bb) and (c) to Article 280(3) to include local bodies in the FC"
    },
    {
        "id": "ch52-l1-q72",
        "question": "Which of the following correctly describes the 80th Constitutional Amendment Act (2000)?",
        "options": ["It abolished the Finance Commission","It introduced the","where almost all central taxes (except cesses/surcharges) became shareable with states","It made the Finance Commission a permanent body","It transferred tax power to the states"],
        "correctAnswerIndex": 1,
        "explanation": "The 80th Amendment effectively pooled almost all central taxes (like income tax, customs, union excise, etc.) into a single pool for sharing, based on the 10th FC"
    },
    {
        "id": "ch52-l1-q73",
        "question": "The",
        "options": ["Article 263","Article 270","Article 275","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Article 270 provides for the sharing of net proceeds of taxes between the Union and the States."
    },
    {
        "id": "ch52-l1-q74",
        "question": "The Finance Commission",
        "options": ["The Balancing Wheel of Fiscal Federalism","The Auditor General of State Accounts","The Supreme Court of Finance","The Governor of Governors"],
        "correctAnswerIndex": 0,
        "explanation": "Dr. Ambedkar and other constitutionalists described the FC as the balancing wheel that ensures the financial stability and equity of the federal units."
    },
    {
        "id": "ch52-l1-q75",
        "question": "If a member of the Finance Commission has an interest in a business, must he disclose it?",
        "options": ["No, this is a private matter","Yes, the Finance Commission Act 1951 requires members to have","","Only if he is the Chairman","Only if the Parliament asks"],
        "correctAnswerIndex": 1,
        "explanation": "To maintain impartiality, the law requires that members must be free from any conflict of interest that could bias their recommendations."
    },
    {
        "id": "ch52-l1-q76",
        "question": "The 15.5% weightage given to",
        "options": ["Punish states with high pollution","Reward states for maintaining and increasing their forest cover, recognizing the","they provide to the rest of the country","Fund tribal welfare only","Decrease the central share in GST"],
        "correctAnswerIndex": 1,
        "explanation": "States with high forest cover (e.g., in the North-East and Himalayas) have limited area for industrial development. This criterion compensates them for protecting the environment."
    },
    {
        "id": "ch52-l1-q77",
        "question": "If the Finance Commission",
        "options": ["The recommendation becomes legally binding regardless","The Government must explain the reasons for non-acceptance in the memorandum laid before Parliament (Article 281)","The Chairman of the Commission can sue the Government","The President must dismiss the Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Accountability is ensured through transparency. While the gov isn"
    },
    {
        "id": "ch52-l1-q78",
        "question": "The",
        "options": ["Only the CGST","The CGST and the Centre","The SGST only","Only the import duties"],
        "correctAnswerIndex": 1,
        "explanation": "Central GST (CGST) and the portion of Integrated GST (IGST) that accrues to the Union are part of the divisible pool shared based on FC recommendations."
    },
    {
        "id": "ch52-l1-q79",
        "question": "Assertion (A): The 15th Finance Commission recommended a total of 1.1 lakh crore as",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The FC doesn"
    },
    {
        "id": "ch52-l1-q80",
        "question": "The 16th Finance Commission has been requested to recommend measures for",
        "options": ["Article 280(3)(a)","Article 280(3)(b)","The","clause (Article 280(3)(d))","The 101st Amendment Act"],
        "correctAnswerIndex": 2,
        "explanation": "Since Disaster Management is not explicitly listed in (a), (b), or (c), it is referred by the President as an additional matter in the interest of sound finance."
    },
    {
        "id": "ch52-l1-q81",
        "question": "The weightage for",
        "options": ["The higher cost of providing services in geographically larger states","The number of farms in the state","The total population density","The amount of gold mines"],
        "correctAnswerIndex": 0,
        "explanation": "Larger states have higher administrative and infrastructure costs per capita (e.g., Rajasthan, Madhya Pradesh). This criterion recognizes that"
    },
    {
        "id": "ch52-l1-q82",
        "question": "Which of the following describes the",
        "options": ["It has decreased from 50% to 32%","It has generally increased over the decades (from ~10% in 1st FC to 41% in 15th FC), reflecting the growing expenditure needs of states","It has remained fixed at 42% since independence","It is abolished after GST"],
        "correctAnswerIndex": 1,
        "explanation": "The share of states in the divisible pool has consistently risen as India became more decentralized and state responsibilities in health, education, etc., grew."
    },
    {
        "id": "ch52-l1-q83",
        "question": "The",
        "options": ["They mandated the use of the 1971 census","They mandated the use of the 2011 census, which was seen as","states that had controlled their population","They abolished the tax-sharing formula","They were issued by the NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "Southern states argued that using 2011 figures would reduce their share because their population proportion in India had declined due to better family planning."
    },
    {
        "id": "ch52-l1-q84",
        "question": "Regarding",
        "options": ["They should be given only to urban bodies","They should be","for sanitation and water to ensure basic services","They should be used for paying state debt","They should be stopped immediately"],
        "correctAnswerIndex": 1,
        "explanation": "The 15th FC emphasized"
    },
    {
        "id": "ch52-l1-q85",
        "question": "The",
        "options": ["Population (1971)","Demographic Performance","GST Effort","Defense Fund"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance weight was 50% in the 14th FC and was reduced to 45% in the 15th FC to accommodate the"
    },
    {
        "id": "ch52-l1-q86",
        "question": "If a State Finance Commission (SFC) is not constituted on time, how does it affect the Union Finance Commission",
        "options": ["The Union FC cannot give any money to that state","The Union FC usually uses this as a reason to penalize the state by reducing its local body grants, as SFC recommendations are the constitutional basis for Union grants","It has no effect","The Union FC takes over the SFC functions"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 280(3)(bb), the Union FC must act"
    },
    {
        "id": "ch52-l1-q87",
        "question": "Which of the following is NOT part of the",
        "options": ["Roadmap for fiscal consolidation","Incentives for power sector reforms","Funding of the state police directly from the divisible pool","Financing of disaster risk management"],
        "correctAnswerIndex": 2,
        "explanation": "Law and Order (Police) is a state subject and its"
    },
    {
        "id": "ch52-l1-q88",
        "question": "The 16th Finance Commission has to submit its report by which date?",
        "options": ["April 1, 2026","October 31, 2025","December 31, 2024","January 1, 2027"],
        "correctAnswerIndex": 1,
        "explanation": "The 16th FC is mandated to submit its report by Oct 31, 2025, so that the government can process it before the 2026 budget."
    },
    {
        "id": "ch52-l1-q89",
        "question": "The",
        "options": ["States not getting any share in income tax","The inequity where some taxes (like Customs) were entirely with the Union, making states uninterested in their collection and growth","GST being too complicated","High inflation"],
        "correctAnswerIndex": 1,
        "explanation": "Before the 80th Amendment, states only had a share in Income Tax and Excise. By pooling all taxes, states now have a stake in the growth of all central taxes."
    },
    {
        "id": "ch52-l1-q90",
        "question": "Which of the following summarizes the",
        "options": ["To make the Centre a provider and States the beggars","To ensure that all citizens of India (regardless of the state they live in) have access to a minimum level of basic services without excessive tax burden","To abolish the concept of states","To maximize central tax revenue"],
        "correctAnswerIndex": 1,
        "explanation": "This is the principle of"
    },
    {
        "id": "ch52-l1-q91",
        "question": "Which Article of the Constitution provides for the office of the Comptroller and Auditor General (CAG) of India?",
        "options": ["Article 76","Article 148","Article 149","Article 151"],
        "correctAnswerIndex": 1,
        "explanation": "Article 148 provides for an independent office of the CAG of India."
    },
    {
        "id": "ch52-l1-q92",
        "question": "The CAG is popularly known as the:",
        "options": ["Guardian of the Public Purse","Chief Justice of Accounts","Financial Advisor to PM","Head of the RBI"],
        "correctAnswerIndex": 0,
        "explanation": "He is the guardian of the public purse and controls the entire financial system of the country at both the levels."
    },
    {
        "id": "ch52-l1-q93",
        "question": "Who appoints the Comptroller and Auditor General of India?",
        "options": ["The Prime Minister","The President of India","The Speaker of Lok Sabha","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The CAG is appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch52-l1-q94",
        "question": "What is the tenure of the office of the CAG?",
        "options": ["5 years or 62 years of age","6 years or 65 years of age","6 years or 62 years of age","At the pleasure of the President"],
        "correctAnswerIndex": 1,
        "explanation": "The CAG holds office for a period of six years or up to the age of 65 years, whichever is earlier."
    },
    {
        "id": "ch52-l1-q95",
        "question": "The CAG can be removed from office by the President only in the same manner and on the same grounds as a:",
        "options": ["Union Minister","Judge of the Supreme Court","Governor","Election Commissioner (Wait. It"],
        "correctAnswerIndex": 1,
        "explanation": "This provision ensures the independence of the high office of CAG."
    },
    {
        "id": "ch52-l1-q96",
        "question": "Is the CAG eligible for further office under the Government of India or any State Government after retirement?",
        "options": ["Yes","No","Only as a Governor","Only in the RBI"],
        "correctAnswerIndex": 1,
        "explanation": "To maintain impartiality, he is ineligible for any further office after his term."
    },
    {
        "id": "ch52-l1-q97",
        "question": "The administrative expenses of the office of the CAG are:",
        "options": ["Voted by the Parliament","Charged upon the Consolidated Fund of India","Included in the Finance Ministry budget","Paid by the World Bank"],
        "correctAnswerIndex": 1,
        "explanation": "They are charged upon the Consolidated Fund of India and are not subject to vote."
    },
    {
        "id": "ch52-l1-q98",
        "question": "To whom does the CAG submit his audit reports relating to the accounts of the Union?",
        "options": ["The Parliament","The President of India","The Prime Minister","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The CAG submits reports to the President, who then lays them before both Houses of Parliament."
    },
    {
        "id": "ch52-l1-q99",
        "question": "To whom does the CAG submit his audit reports relating to the accounts of a State?",
        "options": ["The President","The Governor of the State","The Chief Minister","The State Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "He submits reports relating to the state to the Governor, who lays them before the state legislature."
    },
    {
        "id": "ch52-l1-q100",
        "question": "Which Article empowers the Parliament to prescribe the duties and powers of the CAG?",
        "options": ["Article 148","Article 149","Article 150","Article 151"],
        "correctAnswerIndex": 1,
        "explanation": "Article 149 deals with the duties and powers of the CAG."
    },
    {
        "id": "ch52-l1-q101",
        "question": "Does the CAG audit the accounts of the",
        "options": ["Yes","No","Only if requested by the PM","Only during a war"],
        "correctAnswerIndex": 0,
        "explanation": "He audits all expenditure from the Consolidated Fund, Contingency Fund, and Public Account of both Centre and States."
    },
    {
        "id": "ch52-l1-q102",
        "question": "The CAG acts as a guide, friend and philosopher of which committee of Parliament?",
        "options": ["Estimates Committee","Public Accounts Committee (PAC)","Committee on Public Undertakings","Ethics Committee"],
        "correctAnswerIndex": 1,
        "explanation": "He assists the Public Accounts Committee in examining the appropriation accounts and his audit reports."
    },
    {
        "id": "ch52-l1-q103",
        "question": "The CAG audits the accounts of which of the following?",
        "options": ["Union Government","State Governments","Both Union and State Governments","Only the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "He is a common officer for both the Center and the States."
    },
    {
        "id": "ch52-l1-q104",
        "question": "Who was the",
        "options": ["V. Narahari Rao","A.K. Chanda","M.C. Setalvad","Sukumar Sen"],
        "correctAnswerIndex": 0,
        "explanation": "V. Narahari Rao was the first CAG (1948-1954)."
    },
    {
        "id": "ch52-l1-q105",
        "question": "Does the CAG certify the",
        "options": ["No","Yes, according to Article 279","Only for Income Tax","Only for Customs"],
        "correctAnswerIndex": 1,
        "explanation": "His certificate is final regarding net proceeds (Art 279)."
    },
    {
        "id": "ch52-l1-q106",
        "question": "The salary and other conditions of service of the CAG are determined by:",
        "options": ["The President","The Parliament","The Cabinet","The Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament determines these by law."
    },
    {
        "id": "ch52-l1-q107",
        "question": "Is the CAG a member of the Parliament?",
        "options": ["Yes","No","Ex-officio member","Member of Rajya Sabha only"],
        "correctAnswerIndex": 1,
        "explanation": "He is an independent constitutional authority, not a member of the legislature."
    },
    {
        "id": "ch52-l1-q108",
        "question": "In 1976, the CAG was relieved from the responsibility of which task regarding",
        "options": ["Auditing","Compilation of accounts (Accounting)","Summoning witnesses","Signing the cheque"],
        "correctAnswerIndex": 1,
        "explanation": "Accounting was separated from auditing at the Union level in 1976."
    },
    {
        "id": "ch52-l1-q109",
        "question": "Which Article provides that the accounts of the Union and states shall be kept in such form as the President may prescribe on the advice of CAG?",
        "options": ["Article 148","Article 149","Article 150","Article 151"],
        "correctAnswerIndex": 2,
        "explanation": "Article 150 deals with the form of accounts."
    },
    {
        "id": "ch52-l1-q110",
        "question": "The CAG",
        "options": ["Simple majority","2/3rd majority of members present and voting and majority of total membership (same as SC judge)","10% of members","Only Rajya Sabha vote"],
        "correctAnswerIndex": 1,
        "explanation": "He is removed by the President on the basis of a resolution passed by both houses with a special majority."
    },
    {
        "id": "ch52-l1-q111",
        "question": "The CAG is a",
        "options": ["No.","Yes, but only for summoning records.","Only for state accounts.","Only if the Supreme Court allows."],
        "correctAnswerIndex": 0,
        "explanation": "Wait. Actually, CAG is primarily an audit and reporting body; it doesn"
    },
    {
        "id": "ch52-l1-q112",
        "question": "Which of the following describes the",
        "options": ["Security of tenure.","Fixed salary mentioned in 2nd schedule.","Ban on further employment.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Various constitutional safeguards ensure the CAG can work without executive fear or favor."
    },
    {
        "id": "ch52-l1-q113",
        "question": "Does the CAG audit the accounts of Local Bodies?",
        "options": ["No.","Only if requested by the President / Governor (Technical Guidance and Supervision).","Monthly audit is mandatory.","Only in Delhi and Mumbai."],
        "correctAnswerIndex": 1,
        "explanation": "Audit of local bodies is usually done by state audit departments, but CAG can be requested for oversight."
    },
    {
        "id": "ch52-l1-q114",
        "question": "Which of the following is NOT audited by CAG?",
        "options": ["Expenditure from Consolidated Fund of India.","Expenditure from Public Account of a State.","Expenditure of the Supreme Court.","Private income of the Prime Minister."],
        "correctAnswerIndex": 3,
        "explanation": "CAG only audits public money and government accounts."
    },
    {
        "id": "ch52-l1-q115",
        "question": "The",
        "options": ["Issue of money from the treasury (not actually used in India).","Audit after spending only.","Pricing of goods in the market.","The salary of MPs."],
        "correctAnswerIndex": 0,
        "explanation": "In India, the CAG is primarily an Auditor; the"
    },
    {
        "id": "ch52-l1-q116",
        "question": "How many audit reports does the CAG submit to the President?",
        "options": ["One","Two","Three (Appropriation, Finance, and Public Undertakings)","Monthly"],
        "correctAnswerIndex": 2,
        "explanation": "He submits three reports to the President."
    },
    {
        "id": "ch52-l1-q117",
        "question": "Does the CAG have the power to audit",
        "options": ["Yes, full access.","No, he only receives a certificate from the administrative head regarding the amount spent.","Only if the PM allows.","Only for the RAW."],
        "correctAnswerIndex": 1,
        "explanation": "This is a major limitation on the CAG"
    },
    {
        "id": "ch52-l1-q118",
        "question": "The office of the CAG was originally created in which era?",
        "options": ["Mughal Era","British Rule (1858)","After 1950 only","Gupta Period"],
        "correctAnswerIndex": 1,
        "explanation": "The office was first established in 1858 under the British Crown."
    },
    {
        "id": "ch52-l1-q119",
        "question": "Who is the current Comptroller and Auditor General of India? (Standard question for context)",
        "options": ["G.C. Murmu","Rajiv Mehrishi","Shashi Kant Sharma","Vinod Rai"],
        "correctAnswerIndex": 0,
        "explanation": "G.C. Murmu is the 14th CAG of India."
    },
    {
        "id": "ch52-l1-q120",
        "question": "The CAG",
        "options": ["The Preamble","The Oath of office (Third Schedule)","The First Schedule","The Seventh Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The CAG takes an oath to bear true faith and allegiance to the Constitution."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch52-l2-q1",
        "question": "The CAG",
        "options": ["Security of tenure and removal only by a process similar to an SC Judge.","Fixed salary mentioned in the Second Schedule.","Salary and expenses are","on the Consolidated Fund of India.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These provisions ensure the CAG is not dependent on the pleasure of the executive."
    },
    {
        "id": "ch52-l2-q2",
        "question": "Assertion (A): The CAG is not a member of the Public Accounts Committee (PAC).\\nReason (R): The CAG acts as a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 1,
        "explanation": "CAG is an independent officer who"
    },
    {
        "id": "ch52-l2-q3",
        "question": "Which of the following is NOT a mandate of the CAG under Article 149?",
        "options": ["Audit of accounts of the Union and the States.","Audit of accounts of any other authority when provided by a law made by Parliament.","Control over the issue of money from the Consolidated Fund of India.","Both 1 and 2."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the British CAG, the Indian CAG has no control over the actual withdrawal/issue of money from the treasury."
    },
    {
        "id": "ch52-l2-q4",
        "question": "The CAG submits three audit reports to the President. Which of the following is NOT one of them?",
        "options": ["Audit report on Appropriation accounts.","Audit report on Finance accounts.","Audit report on Defense Strategy.","Audit report on Public Undertakings."],
        "correctAnswerIndex": 2,
        "explanation": "CAG does not audit military/defense"
    },
    {
        "id": "ch52-l2-q5",
        "question": "According to Article 279, whose certificate is final regarding the",
        "options": ["The Finance Minister.","The Governor of RBI.","The Comptroller and Auditor General.","The NITI Aayog."],
        "correctAnswerIndex": 2,
        "explanation": "CAG certifies net proceeds to ensure fair distribution between Centre and States."
    },
    {
        "id": "ch52-l2-q6",
        "question": "In 1976, accounting was separated from auditing for the Union. Does this apply to the",
        "options": ["Yes.","No, the CAG still maintains (compiles) the accounts of the State governments.","Only for the UTs.","Only for the Southern States."],
        "correctAnswerIndex": 1,
        "explanation": "State accounting remains with the CAG to save costs for the states."
    },
    {
        "id": "ch52-l2-q7",
        "question": "Which of the following describes",
        "options": ["Checking if money was spent as per law.","Ensuring that government programmes have achieved their objectives with Economy, Efficiency and Effectiveness (3Es).","Counting the number of employees.","Checking the attendance of Ministers."],
        "correctAnswerIndex": 1,
        "explanation": "It goes beyond mere legality to evaluate the"
    },
    {
        "id": "ch52-l2-q8",
        "question": "Regarding",
        "options": ["RBI and SBI.","ONGC, Air India (formerly), and LIC (Partial).","Damodar Valley Corporation and National Highways Authority.","All Private companies."],
        "correctAnswerIndex": 2,
        "explanation": "Some statutory corporations are under the exclusive audit of CAG."
    },
    {
        "id": "ch52-l2-q9",
        "question": "The CAG",
        "options": ["That the government is collecting enough tax.","That rules/procedures are designed to secure an effective check on assessment and collection of revenue.","That tax rates are reduced.","That everyone pays their taxes on time."],
        "correctAnswerIndex": 1,
        "explanation": "Audit of receipts is as important as audit of expenditure."
    },
    {
        "id": "ch52-l2-q10",
        "question": "Can the CAG audit",
        "options": ["No.","Yes, he audits the accounts of all bodies/authorities substantially financed from the Union or State revenues.","Only if they are NGOs.","Only if they are in the 8th schedule."],
        "correctAnswerIndex": 1,
        "explanation": "Public money usage is the criterion for audit eligibility."
    },
    {
        "id": "ch52-l2-q11",
        "question": "How does the CAG handle",
        "options": ["Detailed vouchers are examined.","A certificate is accepted from the competent administrative authority; details cannot be audited.","He asks the RAW chief for a meeting.","He manages the secret service himself."],
        "correctAnswerIndex": 1,
        "explanation": "This is a constitutional limitation on the audit scope of CAG."
    },
    {
        "id": "ch52-l2-q12",
        "question": "The",
        "options": ["Only the mathematical accuracy.","The wisdom, faithfulness and economy of government expenditure and to comment on wastefulness.","The property owned by bureaucrats.","The legal status of a law."],
        "correctAnswerIndex": 1,
        "explanation": "Propriety audit allows him to question"
    },
    {
        "id": "ch52-l2-q13",
        "question": "Who determines the",
        "options": ["The Parliament.","The President, on the advice of the CAG.","The Finance Minister.","The Governor of RBI."],
        "correctAnswerIndex": 1,
        "explanation": "Article 150 prescribes this consultative procedure."
    },
    {
        "id": "ch52-l2-q14",
        "question": "Upon laying the Audit Report in Parliament, it is automatically referred to which Committee?",
        "options": ["Estimates Committee.","Public Accounts Committee (PAC).","Departmental Standing Committee.","Business Advisory Committee."],
        "correctAnswerIndex": 1,
        "explanation": "PAC is the legislative arm that analyzes CAG"
    },
    {
        "id": "ch52-l2-q15",
        "question": "The CAG is an agent of whom?",
        "options": ["The President.","The Parliament.","The Prime Minister.","The World Bank."],
        "correctAnswerIndex": 1,
        "explanation": "CAG is an agent of the Parliament and conducts audit on its behalf; he is responsible only to Parliament."
    },
    {
        "id": "ch52-l2-q16",
        "question": "Why does the CAG NOT have the power of",
        "options": ["To give more power to the PM.","Because in India, money can be drawn from the Consolidated Fund without the CAG","Because he is not a member of the Cabinet.","Because the Queen doesn"],
        "correctAnswerIndex": 1,
        "explanation": "In UK, the Exchequer cannot issue money without the CAG"
    },
    {
        "id": "ch52-l2-q17",
        "question": "Which Article says",
        "options": ["Article 148","Article 149","Article 150","Article 151"],
        "correctAnswerIndex": 1,
        "explanation": "Art 149 is the source of delegating audit functions to CAG."
    },
    {
        "id": "ch52-l2-q18",
        "question": "Can the CAG serve as a member of a",
        "options": ["Yes.","No, Article 148(4) prohibits any further office under the government.","Only if it is unpaid.","Only as the Chairman of UPSC."],
        "correctAnswerIndex": 1,
        "explanation": "Wait. Actually, if a post is specifically"
    },
    {
        "id": "ch52-l2-q19",
        "question": "Regarding",
        "options": ["Exclusively audits them.","Appoints private auditors (in consultation with Central Govt) and can conduct a supplementary audit.","No role.","Only for the profit-making ones."],
        "correctAnswerIndex": 1,
        "explanation": "CAG oversees the professional audit of government companies under the Companies Act."
    },
    {
        "id": "ch52-l2-q20",
        "question": "The",
        "options": ["First Chief Justice.","First CAG of India.","First Chief Election Commissioner.","First Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "He was the first CAG post-independence."
    },
    {
        "id": "ch52-l2-q21",
        "question": "Wait. Does the CAG audit the",
        "options": ["No, RBI has its own audit system.","Yes, full audit.","Only the printing of notes.","Only during a financial emergency."],
        "correctAnswerIndex": 0,
        "explanation": "RBI, SBI, and some other financial bodies are outside the CAG"
    },
    {
        "id": "ch52-l2-q22",
        "question": "Which Constitutional Article provides for the laying of CAG reports before the Parliament?",
        "options": ["Article 148","Article 151","Article 112","Article 266"],
        "correctAnswerIndex": 1,
        "explanation": "Article 151(1) for Union and 151(2) for States."
    },
    {
        "id": "ch52-l2-q23",
        "question": "The",
        "options": ["Provident Funds, Small Savings, etc.","Income Tax collection only.","Military spending only.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "CAG audits all three funds (Consolidated, Contingency, Public Account)."
    },
    {
        "id": "ch52-l2-q24",
        "question": "The",
        "options": ["The Prime Minister by a decree.","The President based on a resolution of both Houses of Parliament with a special majority.","The Supreme Court.","The World Bank."],
        "correctAnswerIndex": 1,
        "explanation": "Same procedure as the removal of a Supreme Court judge."
    },
    {
        "id": "ch52-l2-q25",
        "question": "The CAG",
        "options": ["Cabinet Secretary.","Judge of the Supreme Court.","UPSC Chairman.","Attorney General."],
        "correctAnswerIndex": 1,
        "explanation": "Protocol and salary parity is with SC judges."
    },
    {
        "id": "ch52-l2-q26",
        "question": "Why is the CAG ineligible for further office under the government?",
        "options": ["Because he knows too many secrets.","To ensure his independence and prevent any bias in audit reports in hopes of a post-retirement job.","Because he is too old.","By a law of 1950."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch52-l2-q27",
        "question": "The CAG performs a",
        "options": ["He checks if the law is good.","He checks if the money spent has been legally available and correctly utilized as per rules.","He writes the law.","He arrests rule-breakers."],
        "correctAnswerIndex": 1,
        "explanation": "Legality of expenditure is the primary layer of audit."
    },
    {
        "id": "ch52-l2-q28",
        "question": "Wait. In the UK, the CAG is also the",
        "options": ["He collects the taxes.","He controls the","of money from the treasury, a power the Indian CAG lacks.","He is the PM.","He is the King"],
        "correctAnswerIndex": 1,
        "explanation": "Exchequer role provides pre-spending control."
    },
    {
        "id": "ch52-l2-q29",
        "question": "The",
        "options": ["Yearly by force.","If the CAG thinks the original audit by private CA was incomplete/unsatisfactory.","Only for loss-making companies.","Only for companies in Delhi."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch52-l2-q30",
        "question": "Has the CAG any authority over",
        "options": ["No.","Yes, he is the head of the Indian Audit and Accounts Department which functions for both Center and States.","Only if the Governor requests.","Only for the GST share."],
        "correctAnswerIndex": 1,
        "explanation": "Indian audit system is unified and centralized."
    },
    {
        "id": "ch52-l2-q31",
        "question": "The Chairman of the Finance Commission must be a person having experience in:",
        "options": ["Judicial matters","Public affairs","Economics","Accounting"],
        "correctAnswerIndex": 1,
        "explanation": "According to the Finance Commission (Miscellaneous Provisions) Act, 1951, the Chairman should be a person having experience in public affairs."
    },
    {
        "id": "ch52-l2-q32",
        "question": "Which of the following is NOT one of the qualifications for being a member (other than Chairman) of the Finance Commission?",
        "options": ["A judge of a High Court or one qualified to be appointed as one","A person with specialized knowledge of finance and accounts of the government","A person with wide experience in financial matters and administration","A person who has served as a Governor of a State"],
        "correctAnswerIndex": 3,
        "explanation": "Having served as a Governor is not a specified qualification. The four categories are: HC judge (or qualified), gov finance/accounts knowledge, wide financial/admin experience, and special knowledge of economics."
    },
    {
        "id": "ch52-l2-q33",
        "question": "The Finance Commission recommends measures to augment the Consolidated Fund of a State based on recommendations made by:",
        "options": ["The Union Finance Minister","The State Finance Commission","The NITI Aayog","The Governor"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(3)(bb) and (c) specify that the Union Finance Commission"
    },
    {
        "id": "ch52-l2-q34",
        "question": "The",
        "options": ["Total tax collected minus the cost of collection","Total tax collected including cesses and surcharges","Only the corporate tax","The tax collected after excluding the share of the Union Territories"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 279,"
    },
    {
        "id": "ch52-l2-q35",
        "question": "Who certifies the",
        "options": ["The Finance Minister","The Comptroller and Auditor General (CAG) of India","The Governor of the RBI","The Chairman of the Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Article 279(1) states that the net proceeds shall be ascertained and certified by the CAG, whose certificate shall be final."
    },
    {
        "id": "ch52-l2-q36",
        "question": "The Finance Commission is described as a",
        "options": ["It can punish people for financial crimes","It has the powers of a civil court under the CCP while summoning witnesses or requiring production of documents","It is always headed by a Supreme Court Judge","Its reports are reviewed by the High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has the powers of a civil court for purposes of gathering evidence and summoning witnesses, which gives it a quasi-judicial character."
    },
    {
        "id": "ch52-l2-q37",
        "question": "Which body has historically overlapped with the Finance Commission",
        "options": ["The Planning Commission (now NITI Aayog)","The National Development Council","The Zonal Councils","The GST Council"],
        "correctAnswerIndex": 0,
        "explanation": "Historically, the Planning Commission (a non-constitutional body) made significant discretionary grants, which often overshadowed the Finance Commission"
    },
    {
        "id": "ch52-l2-q38",
        "question": "The 15th Finance Commission used which census data for its population-related criteria, departing from the 1971 census used by previous commissions?",
        "options": ["1991 Census","2001 Census","2011 Census","The latest projected data"],
        "correctAnswerIndex": 2,
        "explanation": "The 15th Finance Commission was specifically mandated to use the 2011 Census data, which was a point of contention for states that had performed well in population control."
    },
    {
        "id": "ch52-l2-q39",
        "question": "What is the significance of the",
        "options": ["They define the specific issues and the period the Commission needs to cover","They are fixed by the Constitution and cannot be changed","They are decided by the State Legislatures","They are advisory for the Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The ToR (issued by the President) provides the scope of work for the Commission, including additional matters in the"
    },
    {
        "id": "ch52-l2-q40",
        "question": "Can the Finance Commission be asked to look into any other matter beyond tax sharing and grants?",
        "options": ["No, its duties are strictly limited to Article 280(3)(a) and (b)","Yes, any other matter referred to it by the President in the interest of sound finance","Only if requested by all State Governors","Only during a Financial Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "Article 280(3)(d) allows the President to refer"
    },
    {
        "id": "ch52-l2-q41",
        "question": "The",
        "options": ["Have the highest per capita income","Have the lowest per capita income (to help them catch up)","Collect the most GST","Have the highest literacy rates"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance measures the gap between a state"
    },
    {
        "id": "ch52-l2-q42",
        "question": "The Finance Commission",
        "options": ["The Chairman of the Commission","The Finance Minister","The President of India","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "Article 281 states:"
    },
    {
        "id": "ch52-l2-q43",
        "question": "Which of the following describes the",
        "options": ["The government can ignore its findings without any explanation","The government is not legally bound to implement the recommendations, but it usually accepts the key sharing formula","The recommendations must be ratified by the Supreme Court","The Commission only gives advice to the states, not the centre"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional tradition dictates that the government accepts the Commission"
    },
    {
        "id": "ch52-l2-q44",
        "question": "The 15th Finance Commission introduced a new criteria for devolution called",
        "options": ["Reward states with higher population growth","Reward states that have made progress in lowering their Fertility Rate","Punish states with aging populations","Incentivize migration to cities"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l2-q45",
        "question": "How does the Finance Commission facilitate",
        "options": ["By giving the Centre power to control state spending","By providing a neutral, expert-driven platform for resource sharing between different tiers of government","By abolishing state-level taxes","By forcing states to follow central laws"],
        "correctAnswerIndex": 1,
        "explanation": "The FC balances the fiscal needs of the Union and the States, acting as an institutional bridge that sustains the federal balance."
    },
    {
        "id": "ch52-l2-q46",
        "question": "The",
        "options": ["Difference in fiscal capacity between the Union and the States","Difference in fiscal capacity among various States","Difference in spending between Agriculture and Industry","Difference in male and female income"],
        "correctAnswerIndex": 1,
        "explanation": "Horizontal imbalance is the gap in resources and needs between different states, which the FC tries to rectify through its sharing criteria."
    },
    {
        "id": "ch52-l2-q47",
        "question": "The 14th Finance Commission is notable for increasing the vertical devolution from 32% to:",
        "options": ["35%","40%","42%","45%"],
        "correctAnswerIndex": 2,
        "explanation": "The 14th FC (Y.V. Reddy) made a historic jump in vertical devolution to 42%, giving states much more unconditional fiscal space."
    },
    {
        "id": "ch52-l2-q48",
        "question": "Why was the share for states slightly reduced to 41% by the 15th Finance Commission?",
        "options": ["Due to the COVID-19 pandemic","To account for the newly created Union Territories of Jammu & Kashmir and Ladakh","Because states were spending too much","To fund the central defense budget"],
        "correctAnswerIndex": 1,
        "explanation": "The reduction from 42% (14th FC) to 41% was essentially a 1% adjustment to provide funds for the requirements of the new UTs of J&K and Ladakh."
    },
    {
        "id": "ch52-l2-q49",
        "question": "The",
        "options": ["Have the lowest tax rates","Show efficiency in tax collection relative to their economic potential","Abolish professional tax","Depend entirely on central grants"],
        "correctAnswerIndex": 1,
        "explanation": "Tax effort incentives states to improve their own tax-to-GSDP ratios and collection efficiency."
    },
    {
        "id": "ch52-l2-q50",
        "question": "Does the Union Finance Commission directly distribute money to individual Panchayats?",
        "options": ["Yes, through direct benefit transfer","No, it recommends grants to be given by the Centre to the States, which the States then pass on to the local bodies","Only in Union Territories","Only during a local body emergency"],
        "correctAnswerIndex": 1,
        "explanation": "The FC recommends grants-in-aid to the states for local bodies. The states are responsible for the actual disbursement based on SFC recommendations."
    },
    {
        "id": "ch52-l2-q51",
        "question": "The Finance Commission is required to review its own criteria every five years because:",
        "options": ["To reflect the changing demographic and economic realities of the states","To ensure the ruling party keeps its promises","Because the Constitution mandates a change of members","To increase the fiscal deficit"],
        "correctAnswerIndex": 0,
        "explanation": "The periodic nature ensures that the resource sharing formula remains relevant to the current needs of the federation."
    },
    {
        "id": "ch52-l2-q52",
        "question": "Which of the following characterizes a",
        "options": ["Power to imprison a Finance Minister","Power to summon any person and require the discovery and production of any document","Power to strike down a state tax law","Power to oversee the CAG"],
        "correctAnswerIndex": 1,
        "explanation": "The ability to summon witnesses and compel document production (under the CCP) is the hallmark of its quasi-judicial status."
    },
    {
        "id": "ch52-l2-q53",
        "question": "The",
        "options": ["Discretionary grants at the will of the PM","Statutory grants recommended by the Finance Commission","Loans that must be repaid with interest","Emergency funds for war only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 275 provides for statutory grants, which are a major part of the FC"
    },
    {
        "id": "ch52-l2-q54",
        "question": "The Finance Commission",
        "options": ["Male and Female issues","Analytical framework/recommendations and State-wise profiles","Central and State budgets","Economic theory and Practice"],
        "correctAnswerIndex": 1,
        "explanation": "Typically, Vol I contains the main recommendations and Vol II contains detailed financial/demographic profiles of each state."
    },
    {
        "id": "ch52-l2-q55",
        "question": "Can the Parliament override the recommendations of the Finance Commission?",
        "options": ["No, they are supreme","Yes, as the Parliament is the sovereign law-making body and the FC is only advisory","Only with the President","Only during a National Emergency"],
        "correctAnswerIndex": 1,
        "explanation": "While Parliament acts on the recommendations (and the cabinet usually accepts them), legally the Parliament remains the authority to decide on fiscal laws."
    },
    {
        "id": "ch52-l2-q56",
        "question": "The",
        "options": ["Its ability to borrow from the World Bank","Its potential to raise revenue from its own tax and non-tax sources","The total number of government employees it has","The amount of gold in its treasury"],
        "correctAnswerIndex": 1,
        "explanation": "Fiscal capacity reflects the state"
    },
    {
        "id": "ch52-l2-q57",
        "question": "The 15th FC",
        "options": ["Vertical Devolution","Horizontal Devolution using","(Article 280(3)(d))","Abolition of the SPSC","A directive of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The President used the power under 280(3)(d) to refer the matter of power sector reform incentives to the Commission."
    },
    {
        "id": "ch52-l2-q58",
        "question": "Which of the following is TRUE about the Finance Commission",
        "options": ["He must be an active IAS officer","He should be a person having experience in","","He must be the same as the NITI Aayog Chairman","He is appointed for life"],
        "correctAnswerIndex": 1,
        "explanation": "The legal requirement is experience in public affairs."
    },
    {
        "id": "ch52-l2-q59",
        "question": "The",
        "options": ["Reduced the role of the Finance Commission","Expanded the percentage and types of taxes shared with states (including GST and Corporation tax)","Abolished grants-in-aid","Made states independent of the centre"],
        "correctAnswerIndex": 1,
        "explanation": "The 80th Amendment introduced the"
    },
    {
        "id": "ch52-l2-q60",
        "question": "If the Finance Commission recommends a grant for",
        "options": ["Article 280(3)(a)","Article 280(3)(b)","Article 280(3)(d)","Article 281"],
        "correctAnswerIndex": 2,
        "explanation": "Specific sectoral grants or thematic grants (like disaster management) are typically referred as additional matters under the"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch52-l3-q1",
        "question": "Analyze Dr. B.R. Ambedkar",
        "options": ["Because he manages the PM","Because the Parliament cannot function without him.","Because he is the only officer who can check the","of executive expenditure and ensure legislative control over the public purse.","Because he is the head of the Judiciary."],
        "correctAnswerIndex": 2,
        "explanation": "Ambedkar saw CAG as the bedrock of financial accountability in a parliamentary democracy."
    },
    {
        "id": "ch52-l3-q2",
        "question": "Compare the Indian CAG with the British CAG (Comptroller and Auditor General). What is the",
        "options": ["The Indian CAG is more powerful.","The British CAG has the power of","(no money can be issued from the public treasury without his approval), whereas the Indian CAG only performs","audit.","The Indian CAG is a member of the Cabinet.","The British CAG is appointed by the Queen for life."],
        "correctAnswerIndex": 1,
        "explanation": "In India, money is spent first, then audited; in UK, audit approval is required for spending."
    },
    {
        "id": "ch52-l3-q3",
        "question": "The",
        "options": ["Expenditure was not authorized by the Appropriation Act.","The government bought high-end luxury SUVs for a drought relief mission, which is a waste of public funds even if legally sanctioned.","The voucher was not signed by the Secretary.","The money was spent on the wrong date."],
        "correctAnswerIndex": 1,
        "explanation": "Propriety audit questions the"
    },
    {
        "id": "ch52-l3-q4",
        "question": "How does the",
        "options": ["It increased his workload.","It relieved him of the conflict of interest inherent in both","the accounts and","them; now the Departments maintain their own accounts (via CGA).","It made him a part of the Ministry of Finance.","It restricted him to auditing only State accounts."],
        "correctAnswerIndex": 1,
        "explanation": "Efficiency and objectivity were the primary drivers for this separation."
    },
    {
        "id": "ch52-l3-q5",
        "question": "Assertion (A): The CAG",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "CAG provides the"
    },
    {
        "id": "ch52-l3-q6",
        "question": "The",
        "options": ["CAG conducts the social audit himself.","CAG provides the","for social audits and can verify the final outcomes as part of his overall audit of the scheme.","CAG bans social audits to prevent interference.","He only audits the social audit"],
        "correctAnswerIndex": 1,
        "explanation": "Social audit is a community-level check; CAG provides the institutional framework and secondary verification."
    },
    {
        "id": "ch52-l3-q7",
        "question": "Analyze the",
        "options": ["Because CAG doesn","Because it allows the executive to spend large sums of public money (under the","tag) without any independent verification of whether it was actually used for the claimed purpose.","Because secret money is always fake.","Because only the RAW chief handles money."],
        "correctAnswerIndex": 1,
        "explanation": "Absolute reliance on an executive"
    },
    {
        "id": "ch52-l3-q8",
        "question": "The CAG",
        "options": ["CAG has no right to audit PPP.","SC ruled that if","with the government is involved, CAG can audit the private partner","Only the private auditor can check PPP.","PPP is above audit."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l3-q9",
        "question": "Is the CAG of India a",
        "options": ["Yes.","No, he is the","to the committee; he sits in meetings to explain technicalities but cannot vote.","Only during the budget session.","He is the Chairman of PAC."],
        "correctAnswerIndex": 1,
        "explanation": "PAC consists only of MPs (elected by proportional representation)."
    },
    {
        "id": "ch52-l3-q10",
        "question": "What is the",
        "options": ["CAG arrests tax evaders.","CAG audits the systems of the Revenue Department to check for","and inefficiencies in tax collection procedures.","CAG sets the tax rates.","None of the above."],
        "correctAnswerIndex": 1,
        "explanation": "Audit of the"
    },
    {
        "id": "ch52-l3-q11",
        "question": "Does the CAG have the power to",
        "options": ["Yes.","No, unlike some European audit courts, he can only","the illegality; he cannot stop the payment or recover the money himself.","Only for the State governments.","Only for the Defense ministry."],
        "correctAnswerIndex": 1,
        "explanation": "He is an"
    },
    {
        "id": "ch52-l3-q12",
        "question": "The term",
        "options": ["Only the loss-making ones.","Statutory Corporations, Government Companies, and Departmental Undertakings (like Railways).","Only the banks.","Only the private companies."],
        "correctAnswerIndex": 1,
        "explanation": "The entire public sector spectrum is under his monitoring."
    },
    {
        "id": "ch52-l3-q13",
        "question": "The CAG",
        "options": ["Yes.","No, it is","on the Consolidated Fund (Art 148(6)), ensuring he doesn","Wait. Actually, salary is charged. Is pension too? Yes,","include all salaries, allowances and pensions.","Only after 15 years."],
        "correctAnswerIndex": 1,
        "explanation": "Financial independence is absolute for the high office."
    },
    {
        "id": "ch52-l3-q14",
        "question": "Analyze the impact of",
        "options": ["Because CAG used","calculations (Alternative scenarios) which were criticized as interfering in","rather than just",".","Because CAG arrested the ministers.","Because the reports were in the wrong language.","Because he refused to audit."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch52-l3-q15",
        "question": "According to Article 150, who prescribes the form of accounts for both Union and States?",
        "options": ["The Finance Minister.","The President (of India), on the advice of the CAG.","The Governors (for States).","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Unity of form is maintained across the federation via this presidential power."
    },
    {
        "id": "ch52-l3-q16",
        "question": "A",
        "options": ["The Supreme Court.","The","of the Executive (President/PM) and requires broad legislative consensus for removal.","Having to pay taxes.","Going to prison."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot be fired simply for an inconvenient report."
    },
    {
        "id": "ch52-l3-q17",
        "question": "The",
        "options": ["The Cabinet Secretary.","The President of India (under his hand and seal).","The Chief Justice.","The PM only."],
        "correctAnswerIndex": 1,
        "explanation": "Protocol weight signifies the independence and dignity of the post."
    },
    {
        "id": "ch52-l3-q18",
        "question": "Does the CAG audit the",
        "options": ["No, Judiciary is independent.","Yes, he audits all expenditure from the Consolidated Fund, including that of the Judiciary, to ensure financial regularity.","Only for the canteen.","Only for the building maintenance."],
        "correctAnswerIndex": 1,
        "explanation": "Judicial independence is from"
    },
    {
        "id": "ch52-l3-q19",
        "question": "Who is the authority to determine",
        "options": ["The GST Council.","The CAG (Art 279 applies).","The Finance Commission.","The NITI Aayog."],
        "correctAnswerIndex": 1,
        "explanation": "For any tax/duty, CAG"
    },
    {
        "id": "ch52-l3-q20",
        "question": "Does the CAG have any power over",
        "options": ["Yes.","No, he only audits bodies","by the public exchequer.","Only if they are in the Stock Market.","Only if they are very large."],
        "correctAnswerIndex": 1,
        "explanation": "Public money is the touchstone for CAG"
    },
    {
        "id": "ch52-l3-q21",
        "question": "Analyze the",
        "options": ["Yes.","No, the CAG is the head of the Indian Audit and Accounts Department, and individual states have","(AGs) who work under his central authority.","Only in the North-East.","Only in Jammu and Kashmir."],
        "correctAnswerIndex": 1,
        "explanation": "India has a"
    },
    {
        "id": "ch52-l3-q22",
        "question": "The CAG",
        "options": ["The Parliament Floor debate.","The Public Accounts Committee (PAC) report back to the Lok Sabha.","The Rajya Sabha.","The Cabinet."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l3-q23",
        "question": "Can the",
        "options": ["Yes.","No, the President (Executive) must act on the","of CAG for the form of accounts (Art 150), effectively making CAG the authority on accounting rules.","Only with the approval of CJI.","Only during an emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Professional dominance of CAG in his field is constitutionally mandated."
    },
    {
        "id": "ch52-l3-q24",
        "question": "Does the CAG have the power to",
        "options": ["Yes.","No, he only audits the budget","after it is passed; he doesn","Proposal","Only for the States.","Only for the Railways."],
        "correctAnswerIndex": 1,
        "explanation": "Budgeting is the sole prerogative of the Legislature/Executive."
    },
    {
        "id": "ch52-l3-q25",
        "question": "The",
        "options": ["The Election Commission and UPSC.","The Cabinet Secretariat.","The Prime Minister","The RBI."],
        "correctAnswerIndex": 0,
        "explanation": "They are the"
    },
    {
        "id": "ch52-l3-q26",
        "question": "Can the CAG serve as a",
        "options": ["Yes.","No, the prohibition on","(Art 148(4)) is generally interpreted strictly to exclude all high political/administrative posts.","Only after a gap of 2 years.","Only if the PM requests."],
        "correctAnswerIndex": 1,
        "explanation": "Maintaining the image of impartiality is paramount."
    },
    {
        "id": "ch52-l3-q27",
        "question": "Who was the CAG during the",
        "options": ["Vinod Rai.","G.C. Murmu.","Shashi Kant Sharma.","A.K. Chanda."],
        "correctAnswerIndex": 0,
        "explanation": "Vinod Rai is famously associated with the era of"
    },
    {
        "id": "ch52-l3-q28",
        "question": "Is the",
        "options": ["Article 324.","Articles related to","cross-reference him for data verification.","Article 110 (Money Bill) mentions him.","No, only 148-151."],
        "correctAnswerIndex": 3,
        "explanation": "He has a dedicated chapter (V) in Part V of the Constitution."
    },
    {
        "id": "ch52-l3-q29",
        "question": "What is",
        "options": ["Auditing personal debts of the President.","Auditing a government","Cancelling the debts of the state.","Investing govt money in the share market."],
        "correctAnswerIndex": 1,
        "explanation": "Comprehensive audit of all government liabilities and cash flows."
    },
    {
        "id": "ch52-l3-q30",
        "question": "Why is the term",
        "options": ["Because he is older.","Because he is the","of the entire audit machinery of the country (Center + States).","Because it sounds better.","By a law of 1935."],
        "correctAnswerIndex": 1,
        "explanation": "The suffix"
    },
    {
        "id": "ch52-l3-q31",
        "question": "Consider the following statements regarding the 16th Finance Commission (constituted for 2026-2031):\\n1. It is chaired by Dr. Arvind Panagariya.\\n2. Its mandate includes recommending the tax-sharing formula for the period starting April 1, 2026.\\n3. It has been specifically tasked to review the present arrangements for financing Disaster Management initiatives.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The 16th FC was constituted in Dec 2023 with Panagariya as chair. Its ToR includes vertical/horizontal devolution for 2026-31 and a review of Disaster Management financing."
    },
    {
        "id": "ch52-l3-q32",
        "question": "Regarding",
        "options": ["To discourage state-level populist spending","To provide 1% separately for the requirements of the newly formed Union Territories of Jammu & Kashmir and Ladakh out of the divisible pool","To increase the central share for defense modernization","To adjust for the higher GST collections"],
        "correctAnswerIndex": 1,
        "explanation": "The 14th FC gave 42% to 29 states. After J&K"
    },
    {
        "id": "ch52-l3-q33",
        "question": "The concept of",
        "options": ["The cost of administration in hilly states","The gap between a State’s fiscal capacity (per capita GSDP) and the fiscal capacity of the benchmark state (highest income state)","The distance between the state capital and the prime market","The difference between urban and rural income"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance is the main criterion for horizontal devolution (getting 45% weight in 15th FC). It ensures that states with lower revenue-generating capacity get more resources to provide comparable services."
    },
    {
        "id": "ch52-l3-q34",
        "question": "Assertion (A): The Role of the Finance Commission has become more complex after the introduction of GST in 2017.\\nReason (R): While the GST Council decides on tax rates and exemptions for a significant part of state/central revenue, the Finance Commission still has to recommend the division of the remaining divisible pool and assess states",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch52-l3-q35",
        "question": "Which of the following criteria was GIVEN weightage by the 15th Finance Commission to reward states for",
        "options": ["Forest and Ecology","Demographic Performance","Tax Effort","Infrastructure Gap"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch52-l3-q36",
        "question": "The term",
        "options": ["Distribution of resources between the Union and the States","Distribution of resources among the various States themselves based on specific criteria like population, income distance, and area","Distribution of funds between the State and Panchayats","The transfer of loans from Center to States"],
        "correctAnswerIndex": 1,
        "explanation": "Horizontal devolution is the formula-based sharing of the states"
    },
    {
        "id": "ch52-l3-q37",
        "question": "When the President lays the Finance Commission",
        "options": ["The cost incurred by the Commission in its research","The action taken by the Government on the recommendations","The dissenting opinions of the opposition parties","A list of all civil servants consulted"],
        "correctAnswerIndex": 1,
        "explanation": "Article 281 mandates that the report be laid along with a memorandum explaining the action taken. This ensures that the government"
    },
    {
        "id": "ch52-l3-q38",
        "question": "Is the Finance Commission a",
        "options": ["Yes, it is a permanent office with a permanent staff in the Ministry of Finance","No, it is a periodic body that is constituted every 5 years (or earlier) and ceases to exist after it submits its final report","It is a permanent body of the Parliament","It is a permanent wing of the NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The FC is"
    },
    {
        "id": "ch52-l3-q39",
        "question": "Which specific Article deals with the",
        "options": ["Article 275","Article 282","Article 293","Article 360"],
        "correctAnswerIndex": 0,
        "explanation": "Article 275 provides for statutory grants which are given to needy states on the recommendation of the Finance Commission. Article 282 deals with discretionary grants made for public purposes."
    },
    {
        "id": "ch52-l3-q40",
        "question": "The 16th Finance Commission",
        "options": ["Increasing the printing of currency notes by RBI","The present arrangements for the financing of the fiscal deficit and debt-to-GDP ratio for both the Centre and the States","Merging state budgets into the Union budget","Abolishing all state-level borrowing powers"],
        "correctAnswerIndex": 1,
        "explanation": "Fiscal consolidation is the process of reducing the fiscal deficit and public debt. The FC often recommends a roadmap for both levels of government to maintain fiscal discipline."
    },
    {
        "id": "ch52-l3-q41",
        "question": "The mandate of the Finance Commission under Article 280(3)(c) (measures for municipalities) was added by which Amendment?",
        "options": ["42nd Amendment","44th Amendment","73rd and 74th Amendments","80th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 73rd (Panchayats) and 74th (Municipalities) Constitutional Amendment Acts of 1992 added sub-sections (bb) and (c) to Article 280(3) to include local bodies in the FC"
    },
    {
        "id": "ch52-l3-q42",
        "question": "Which of the following correctly describes the 80th Constitutional Amendment Act (2000)?",
        "options": ["It abolished the Finance Commission","It introduced the","where almost all central taxes (except cesses/surcharges) became shareable with states","It made the Finance Commission a permanent body","It transferred tax power to the states"],
        "correctAnswerIndex": 1,
        "explanation": "The 80th Amendment effectively pooled almost all central taxes (like income tax, customs, union excise, etc.) into a single pool for sharing, based on the 10th FC"
    },
    {
        "id": "ch52-l3-q43",
        "question": "The",
        "options": ["Article 263","Article 270","Article 275","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "Article 270 provides for the sharing of net proceeds of taxes between the Union and the States."
    },
    {
        "id": "ch52-l3-q44",
        "question": "The Finance Commission",
        "options": ["The Balancing Wheel of Fiscal Federalism","The Auditor General of State Accounts","The Supreme Court of Finance","The Governor of Governors"],
        "correctAnswerIndex": 0,
        "explanation": "Dr. Ambedkar and other constitutionalists described the FC as the balancing wheel that ensures the financial stability and equity of the federal units."
    },
    {
        "id": "ch52-l3-q45",
        "question": "If a member of the Finance Commission has an interest in a business, must he disclose it?",
        "options": ["No, this is a private matter","Yes, the Finance Commission Act 1951 requires members to have","","Only if he is the Chairman","Only if the Parliament asks"],
        "correctAnswerIndex": 1,
        "explanation": "To maintain impartiality, the law requires that members must be free from any conflict of interest that could bias their recommendations."
    },
    {
        "id": "ch52-l3-q46",
        "question": "The 15.5% weightage given to",
        "options": ["Punish states with high pollution","Reward states for maintaining and increasing their forest cover, recognizing the","they provide to the rest of the country","Fund tribal welfare only","Decrease the central share in GST"],
        "correctAnswerIndex": 1,
        "explanation": "States with high forest cover (e.g., in the North-East and Himalayas) have limited area for industrial development. This criterion compensates them for protecting the environment."
    },
    {
        "id": "ch52-l3-q47",
        "question": "If the Finance Commission",
        "options": ["The recommendation becomes legally binding regardless","The Government must explain the reasons for non-acceptance in the memorandum laid before Parliament (Article 281)","The Chairman of the Commission can sue the Government","The President must dismiss the Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Accountability is ensured through transparency. While the gov isn"
    },
    {
        "id": "ch52-l3-q48",
        "question": "The",
        "options": ["Only the CGST","The CGST and the Centre","The SGST only","Only the import duties"],
        "correctAnswerIndex": 1,
        "explanation": "Central GST (CGST) and the portion of Integrated GST (IGST) that accrues to the Union are part of the divisible pool shared based on FC recommendations."
    },
    {
        "id": "ch52-l3-q49",
        "question": "Assertion (A): The 15th Finance Commission recommended a total of 1.1 lakh crore as",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The FC doesn"
    },
    {
        "id": "ch52-l3-q50",
        "question": "The 16th Finance Commission has been requested to recommend measures for",
        "options": ["Article 280(3)(a)","Article 280(3)(b)","The","clause (Article 280(3)(d))","The 101st Amendment Act"],
        "correctAnswerIndex": 2,
        "explanation": "Since Disaster Management is not explicitly listed in (a), (b), or (c), it is referred by the President as an additional matter in the interest of sound finance."
    },
    {
        "id": "ch52-l3-q51",
        "question": "The weightage for",
        "options": ["The higher cost of providing services in geographically larger states","The number of farms in the state","The total population density","The amount of gold mines"],
        "correctAnswerIndex": 0,
        "explanation": "Larger states have higher administrative and infrastructure costs per capita (e.g., Rajasthan, Madhya Pradesh). This criterion recognizes that"
    },
    {
        "id": "ch52-l3-q52",
        "question": "Which of the following describes the",
        "options": ["It has decreased from 50% to 32%","It has generally increased over the decades (from ~10% in 1st FC to 41% in 15th FC), reflecting the growing expenditure needs of states","It has remained fixed at 42% since independence","It is abolished after GST"],
        "correctAnswerIndex": 1,
        "explanation": "The share of states in the divisible pool has consistently risen as India became more decentralized and state responsibilities in health, education, etc., grew."
    },
    {
        "id": "ch52-l3-q53",
        "question": "The",
        "options": ["They mandated the use of the 1971 census","They mandated the use of the 2011 census, which was seen as","states that had controlled their population","They abolished the tax-sharing formula","They were issued by the NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "Southern states argued that using 2011 figures would reduce their share because their population proportion in India had declined due to better family planning."
    },
    {
        "id": "ch52-l3-q54",
        "question": "Regarding",
        "options": ["They should be given only to urban bodies","They should be","for sanitation and water to ensure basic services","They should be used for paying state debt","They should be stopped immediately"],
        "correctAnswerIndex": 1,
        "explanation": "The 15th FC emphasized"
    },
    {
        "id": "ch52-l3-q55",
        "question": "The",
        "options": ["Population (1971)","Demographic Performance","GST Effort","Defense Fund"],
        "correctAnswerIndex": 1,
        "explanation": "Income distance weight was 50% in the 14th FC and was reduced to 45% in the 15th FC to accommodate the"
    },
    {
        "id": "ch52-l3-q56",
        "question": "If a State Finance Commission (SFC) is not constituted on time, how does it affect the Union Finance Commission",
        "options": ["The Union FC cannot give any money to that state","The Union FC usually uses this as a reason to penalize the state by reducing its local body grants, as SFC recommendations are the constitutional basis for Union grants","It has no effect","The Union FC takes over the SFC functions"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 280(3)(bb), the Union FC must act"
    },
    {
        "id": "ch52-l3-q57",
        "question": "Which of the following is NOT part of the",
        "options": ["Roadmap for fiscal consolidation","Incentives for power sector reforms","Funding of the state police directly from the divisible pool","Financing of disaster risk management"],
        "correctAnswerIndex": 2,
        "explanation": "Law and Order (Police) is a state subject and its"
    },
    {
        "id": "ch52-l3-q58",
        "question": "The 16th Finance Commission has to submit its report by which date?",
        "options": ["April 1, 2026","October 31, 2025","December 31, 2024","January 1, 2027"],
        "correctAnswerIndex": 1,
        "explanation": "The 16th FC is mandated to submit its report by Oct 31, 2025, so that the government can process it before the 2026 budget."
    },
    {
        "id": "ch52-l3-q59",
        "question": "The",
        "options": ["States not getting any share in income tax","The inequity where some taxes (like Customs) were entirely with the Union, making states uninterested in their collection and growth","GST being too complicated","High inflation"],
        "correctAnswerIndex": 1,
        "explanation": "Before the 80th Amendment, states only had a share in Income Tax and Excise. By pooling all taxes, states now have a stake in the growth of all central taxes."
    },
    {
        "id": "ch52-l3-q60",
        "question": "Which of the following summarizes the",
        "options": ["To make the Centre a provider and States the beggars","To ensure that all citizens of India (regardless of the state they live in) have access to a minimum level of basic services without excessive tax burden","To abolish the concept of states","To maximize central tax revenue"],
        "correctAnswerIndex": 1,
        "explanation": "This is the principle of"
    }
];

export const CHAPTER_52_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
