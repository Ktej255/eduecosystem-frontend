import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch43-l1-q1",
        "question": "The Election Commission of India is established under which Article of the Constitution?",
        "options": ["Article 280", "Article 324", "Article 356", "Article 368"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 vests the superintendence, direction and control of elections in the Election Commission of India."
    },
    {
        "id": "ch43-l1-q2",
        "question": "The Election Commission is:",
        "options": ["A statutory body", "A permanent constitutional body", "An advisory body", "A temporary body"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Commission is a permanent and independent constitutional body established directly by the Constitution."
    },
    {
        "id": "ch43-l1-q3",
        "question": "The Election Commission is responsible for conducting elections to:",
        "options": ["Only Lok Sabha", "Parliament, State Legislatures, and offices of President and Vice-President", "Only State Legislatures", "Panchayats and Municipalities"],
        "correctAnswerIndex": 1,
        "explanation": "The EC conducts elections to Parliament (both Houses), State Legislatures (both Houses), and offices of President and Vice-President."
    },
    {
        "id": "ch43-l1-q4",
        "question": "The Chief Election Commissioner (CEC) is appointed by:",
        "options": ["The Prime Minister", "The President of India", "The Parliament", "The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC and other Election Commissioners are appointed by the President of India."
    },
    {
        "id": "ch43-l1-q5",
        "question": "India originally had a single-member Election Commission. When did it become multi-member?",
        "options": ["1950", "1989 (first time, then again in 1993 permanently)", "1975", "2000"],
        "correctAnswerIndex": 1,
        "explanation": "Two additional commissioners were first appointed in 1989, removed, and then permanently appointed in 1993, making it a three-member body."
    },
    {
        "id": "ch43-l1-q6",
        "question": "The tenure of the CEC and Election Commissioners is:",
        "options": ["5 years", "6 years or until age 65, whichever is earlier", "4 years", "Until removed by Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC and ECs hold office for 6 years or until 65 years of age, whichever is earlier."
    },
    {
        "id": "ch43-l1-q7",
        "question": "The CEC can be removed from office:",
        "options": ["By the President at any time", "Only by impeachment — in the same manner and on the same grounds as a Supreme Court judge", "By a simple majority in Parliament", "By the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The CEC enjoys security of tenure and can only be removed through impeachment like a Supreme Court judge (Art. 324(5))."
    },
    {
        "id": "ch43-l1-q8",
        "question": "Other Election Commissioners can be removed by:",
        "options": ["Parliament through impeachment", "The President on the recommendation of the CEC", "The Supreme Court", "The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Other ECs can be removed by the President on the recommendation of the CEC, unlike the CEC who requires impeachment."
    },
    {
        "id": "ch43-l1-q9",
        "question": "The Election Commission does NOT conduct elections for:",
        "options": ["President", "Vice-President", "Panchayats and Municipalities", "Lok Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "Elections to panchayats and municipalities are conducted by State Election Commissions (Article 243K and 243ZA), not the national EC."
    },
    {
        "id": "ch43-l1-q10",
        "question": "The State Election Commission for panchayat and municipality elections is provided under:",
        "options": ["Article 324", "Article 243K (for panchayats) and Article 243ZA (for municipalities)", "Article 280", "Article 356"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243K provides for State Election Commissions for panchayat elections and Article 243ZA for municipality elections."
    },
    {
        "id": "ch43-l1-q11",
        "question": "Who was the first Chief Election Commissioner of India?",
        "options": ["T.N. Seshan", "Sukumar Sen", "K.V.K. Sundaram", "S.P. Sen Varma"],
        "correctAnswerIndex": 1,
        "explanation": "Sukumar Sen was the first CEC of India (1950-1958) who conducted the first two general elections."
    },
    {
        "id": "ch43-l1-q12",
        "question": "T.N. Seshan is remembered for:",
        "options": ["Being the first CEC", "Enforcing the Model Code of Conduct strictly and reforming electoral practices", "Introducing EVMs", "Introducing NOTA"],
        "correctAnswerIndex": 1,
        "explanation": "T.N. Seshan (CEC 1990-96) is credited with transforming the Election Commission by rigorous enforcement of election rules and the Model Code of Conduct."
    },
    {
        "id": "ch43-l1-q13",
        "question": "Electronic Voting Machines (EVMs) were used in all constituencies of a general election for the first time in:",
        "options": ["1999", "2004", "2009", "2014"],
        "correctAnswerIndex": 1,
        "explanation": "EVMs were used in all 543 Lok Sabha constituencies for the first time in the 2004 general elections."
    },
    {
        "id": "ch43-l1-q14",
        "question": "The Model Code of Conduct (MCC) comes into operation:",
        "options": ["On the date of election", "From the date of announcement of elections (schedule)", "One month before elections", "Only on polling day"],
        "correctAnswerIndex": 1,
        "explanation": "The MCC comes into effect from the date the election schedule is announced and remains in force until results are declared."
    },
    {
        "id": "ch43-l1-q15",
        "question": "The Model Code of Conduct is:",
        "options": ["A statutory law enacted by Parliament", "A set of guidelines — not legally enforceable through any statute but enforced by the EC through moral authority and administrative powers", "A Constitutional provision", "A Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "The MCC is not backed by any specific statute but derives its authority from the EC's constitutional powers under Article 324."
    },
    {
        "id": "ch43-l1-q16",
        "question": "NOTA (None of the Above) option was introduced in Indian elections following which Supreme Court judgment?",
        "options": ["Kesavananda Bharati case", "PUCL vs Union of India (2013)", "Vishaka case", "Minerva Mills case"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in PUCL vs Union of India (2013) directed the EC to include NOTA option in EVMs."
    },
    {
        "id": "ch43-l1-q17",
        "question": "Voter Verifiable Paper Audit Trail (VVPAT) was introduced to:",
        "options": ["Speed up counting", "Allow voters to verify that their vote was recorded correctly by producing a paper slip", "Eliminate manual counting", "Replace EVMs"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT provides a paper trail — a printed slip is shown to the voter for 7 seconds to verify the vote before it drops into a sealed box."
    },
    {
        "id": "ch43-l1-q18",
        "question": "The Election Commission maintains the Electoral Roll. The minimum age for voter registration is:",
        "options": ["21 years", "18 years (as per the 61st Constitutional Amendment Act, 1988)", "16 years", "25 years"],
        "correctAnswerIndex": 1,
        "explanation": "The 61st Amendment (1988) reduced the voting age from 21 to 18 years. All citizens aged 18+ on the qualifying date can register."
    },
    {
        "id": "ch43-l1-q19",
        "question": "The Election Commission can postpone or cancel elections in a constituency due to:",
        "options": ["Only natural disasters", "Booth capturing, violence, natural disasters, or any situation preventing free and fair elections", "Only booth capturing", "Only on government's request"],
        "correctAnswerIndex": 1,
        "explanation": "The EC has plenary powers to ensure free and fair elections and can postpone/cancel polls for various disruptions."
    },
    {
        "id": "ch43-l1-q20",
        "question": "The election symbol policy is governed by:",
        "options": ["A Constitutional provision", "The Election Symbols (Reservation and Allotment) Order, 1968", "The Representation of the People Act alone", "A Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Symbols Order, 1968 governs the recognition of parties and allotment of symbols."
    },
    {
        "id": "ch43-l1-q21",
        "question": "A political party is recognized as a 'National Party' if it secures at least:",
        "options": ["10% votes in any 4 states", "6% of valid votes in 4 or more states AND wins at least 4 Lok Sabha seats, OR wins 2% of total Lok Sabha seats from at least 3 states", "5% votes nationally", "Wins 10 Lok Sabha seats"],
        "correctAnswerIndex": 1,
        "explanation": "The criteria for national party status require a minimum vote share across multiple states or a minimum number of Lok Sabha seats from multiple states."
    },
    {
        "id": "ch43-l1-q22",
        "question": "The power to delimit constituencies rests with:",
        "options": ["The Election Commission", "The Delimitation Commission (a separate body); the EC only conducts elections within those boundaries", "Parliament", "State Governments"],
        "correctAnswerIndex": 1,
        "explanation": "Delimitation is done by a separate Delimitation Commission, though the CEC is an ex-officio member of it."
    },
    {
        "id": "ch43-l1-q23",
        "question": "The CEC and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023 provides that the CEC and ECs are appointed by the President on the recommendation of:",
        "options": ["The Prime Minister alone", "A Selection Committee comprising the PM, a Union Cabinet Minister, and the Leader of Opposition in Lok Sabha", "The Supreme Court", "A parliamentary committee"],
        "correctAnswerIndex": 1,
        "explanation": "The 2023 Act replaced the earlier convention of appointment solely on PM's advice with a Selection Committee process."
    },
    {
        "id": "ch43-l1-q24",
        "question": "In Anoop Baranwal vs Union of India (2023), the Supreme Court held that:",
        "options": ["EVMs are unconstitutional", "The appointment of CEC and ECs should be made by the President on the advice of a committee comprising PM, CJI, and Leader of Opposition until Parliament makes a law", "NOTA should be abolished", "State Election Commissions should be merged with EC"],
        "correctAnswerIndex": 1,
        "explanation": "The SC mandated an independent appointment mechanism including the CJI, which was later modified by Parliament's 2023 Act replacing CJI with a Cabinet Minister."
    },
    {
        "id": "ch43-l1-q25",
        "question": "The salary and service conditions of the CEC and ECs are determined by:",
        "options": ["The Constitution", "Parliament by law", "The President alone", "The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324(5) states that the conditions of service are determined by Parliament. The 2023 Act equates their status to that of a Cabinet Secretary."
    },
    {
        "id": "ch43-l1-q26",
        "question": "The Election Commission's power under Article 324 is:",
        "options": ["Limited to specific enumerated functions", "Plenary — it extends to superintendence, direction and control of all elections", "Only advisory", "Shared with State Governments"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 vests plenary (complete) power in the EC for conducting elections — including residuary powers for situations not covered by specific laws."
    },
    {
        "id": "ch43-l1-q27",
        "question": "The EC has the power to disqualify candidates under:",
        "options": ["Article 324 directly", "The Representation of the People Act, 1951 — the EC acts on court orders or specific disqualification grounds", "Its own discretion", "State laws"],
        "correctAnswerIndex": 1,
        "explanation": "Disqualification powers come from the RPA 1951, not directly from Article 324. The EC implements these provisions."
    },
    {
        "id": "ch43-l1-q28",
        "question": "Election expenditure limits for candidates are set by:",
        "options": ["The Constitution", "The Election Commission under the Conduct of Elections Rules", "The Supreme Court", "State Governments"],
        "correctAnswerIndex": 1,
        "explanation": "The EC prescribes expenditure limits for candidates in Lok Sabha and State Assembly elections under statutory rules."
    },
    {
        "id": "ch43-l1-q29",
        "question": "The system of 'One Nation, One Election' refers to:",
        "options": ["Single-party rule", "Holding simultaneous elections for Lok Sabha and all State Assemblies", "Abolishing state elections", "Online voting"],
        "correctAnswerIndex": 1,
        "explanation": "One Nation One Election proposes synchronizing Lok Sabha and State Assembly elections to reduce costs and policy paralysis from frequent elections."
    },
    {
        "id": "ch43-l1-q30",
        "question": "Which committee recommended simultaneous elections in India?",
        "options": ["Sarkaria Commission", "The Ram Nath Kovind Committee (High Level Committee on One Nation One Election, 2023)", "Dinesh Goswami Committee", "Tarkunde Committee"],
        "correctAnswerIndex": 1,
        "explanation": "The High Level Committee chaired by former President Ram Nath Kovind recommended simultaneous elections in its 2024 report."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch43-l2-q1",
        "question": "Consider the following:\\n1. The CEC and other ECs have equal powers.\\n2. The CEC can overrule other ECs.\\n3. Decisions are taken by majority.\\n4. The CEC has a casting vote.\\nWhich are correct?",
        "options": ["1 and 4", "1 and 3 only", "2 and 4", "1, 2 and 3"],
        "correctAnswerIndex": 1,
        "explanation": "All three members have equal voting power and decisions are by majority. The CEC cannot overrule others and there is no special casting vote for the CEC."
    },
    {
        "id": "ch43-l2-q2",
        "question": "Assertion (A): The CEC enjoys greater security of tenure than other Election Commissioners.\\nReason (R): The CEC can only be removed through impeachment, while other ECs can be removed by the President on the CEC's recommendation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "The asymmetry in removal provisions gives the CEC greater security. This differential treatment has been criticized as it could undermine the independence of other ECs."
    },
    {
        "id": "ch43-l2-q3",
        "question": "Statement I: The Election Commission has the power to register political parties.\\nStatement II: Registration is granted under Section 29A of the Representation of the People Act, 1951.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC registers political parties under Section 29A of the RPA 1951, which is a prerequisite for contesting elections."
    },
    {
        "id": "ch43-l2-q4",
        "question": "The EC's powers include:\\n1. Superintendence of electoral rolls\\n2. Determination of election schedules\\n3. Recognition of political parties and allocation of symbols\\n4. Settlement of disputes regarding party splits\\n5. Granting of party status (national/state)\\nWhich are correct?",
        "options": ["1, 2 and 3 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five are EC powers. The Symbols Order 1968 gives EC the power to resolve party disputes and allocate symbols, and the EC grants national/state party status."
    },
    {
        "id": "ch43-l2-q5",
        "question": "Assertion (A): The Model Code of Conduct lacks statutory backing.\\nReason (R): Despite being non-statutory, the MCC is effective because the EC uses its constitutional powers under Art. 324 and provisions of the RPA to enforce compliance.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "The MCC is a voluntary code but the EC enforces it using Art. 324's plenary powers and statutory provisions of the RPA."
    },
    {
        "id": "ch43-l2-q6",
        "question": "Statement I: The Supreme Court in Mohinder Singh Gill v. CEC (1978) established that Art. 324 gives the EC residuary power.\\nStatement II: This means the EC can fill gaps in election law where Parliament has not legislated, to ensure free and fair elections.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC held that where election law is silent, Art. 324's residuary power fills the vacuum to ensure free and fair elections."
    },
    {
        "id": "ch43-l2-q7",
        "question": "The 2023 CEC Act changed the appointment process by replacing the CJI in the selection committee with:\\n1. A Union Cabinet Minister nominated by the PM\\nThe concerns raised include:\\n2. This may reduce independence of appointments\\n3. Government gets 2 of 3 votes in the committee\\nWhich are correct?",
        "options": ["Only 1", "1, 2 and 3", "Only 2 and 3", "Only 1 and 2"],
        "correctAnswerIndex": 1,
        "explanation": "All three are correct. The 2023 Act replaced the CJI with a Cabinet Minister, giving the government a 2:1 majority in the selection committee, raising independence concerns."
    },
    {
        "id": "ch43-l2-q8",
        "question": "Statement I: Section 8 of the RPA 1951 deals with disqualification of candidates on ground of criminal conviction.\\nStatement II: A person convicted and sentenced to imprisonment of 2 years or more is disqualified for 6 years after release.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Section 8 provides for disqualification upon conviction. The disqualification continues for 6 years after release."
    },
    {
        "id": "ch43-l2-q9",
        "question": "Assertion (A): The EC's decision in party symbol disputes is final.\\nReason (R): Under the Election Symbols Order, the EC acts as a quasi-judicial authority in deciding symbol disputes when a party splits.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "The EC exercises quasi-judicial powers under the Symbols Order to determine which faction gets the party symbol — subject only to judicial review."
    },
    {
        "id": "ch43-l2-q10",
        "question": "The EC's independence is ensured by:\\n1. Constitutional status under Art. 324\\n2. Security of tenure for CEC\\n3. Fixed salary and conditions determined by Parliament\\n4. Expenses charged on Consolidated Fund of India\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "1, 2 and 3 only", "Only 1"],
        "correctAnswerIndex": 1,
        "explanation": "All four measures — constitutional status, security of tenure, Parliament-determined conditions, and charged expenditure — ensure EC's independence."
    },
    {
        "id": "ch43-l2-q11",
        "question": "Statement I: The EC has used Art. 324 to transfer officials during elections.\\nStatement II: The EC can direct the transfer of any officer connected with election work if their continued presence could affect free and fair elections.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC has extensive power to transfer officials during election periods to ensure neutrality and prevent bias."
    },
    {
        "id": "ch43-l2-q12",
        "question": "Assertion (A): Paid news is a significant challenge for the Election Commission.\\nReason (R): Paid news — disguised political advertising — is difficult to detect and undermines voter information, but the EC has established monitoring committees to address it.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Paid news is a major challenge and the EC has set up Media Certification and Monitoring Committees (MCMC) to counter it."
    },
    {
        "id": "ch43-l2-q13",
        "question": "The EC's voter registration reforms include:\\n1. Systematic Voters' Education and Electoral Participation (SVEEP)\\n2. National Voters' Day (January 25)\\n3. Electoral Photo Identity Card (EPIC)\\n4. Online voter registration\\nWhich are EC initiatives?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are EC initiatives to improve voter registration and participation — SVEEP, NVD, EPIC, and online registration."
    },
    {
        "id": "ch43-l2-q14",
        "question": "Statement I: The EC can deploy Central Armed Police Forces (CAPF) during elections.\\nStatement II: This power is exercised to ensure polling booth security and prevent electoral violence, especially in sensitive areas.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC has the power to requisition security forces for election duties to maintain order and ensure free polling."
    },
    {
        "id": "ch43-l2-q15",
        "question": "Assertion (A): The two-member SC bench in S.S. Dhanoa v. Union of India held that the CEC's position is 'primus inter pares'.\\nReason (R): This means 'first among equals' — the CEC chairs meetings but has equal voting rights with other ECs.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "The CEC is first among equals — presides over meetings but each member has equal voting power. Decisions are by majority."
    },
    {
        "id": "ch43-l2-q16",
        "question": "The challenges of social media in elections include:\\n1. Fake news and misinformation\\n2. Targeted political advertising\\n3. Difficulty in applying MCC to online platforms\\n4. Deepfakes and AI-generated content\\nWhich are concerns for the EC?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent significant challenges for the EC in the digital age — from misinformation to AI-generated content."
    },
    {
        "id": "ch43-l2-q17",
        "question": "Statement I: VVPAT verification has increased voter confidence in EVMs.\\nStatement II: The Supreme Court in 2019 directed VVPAT verification of a sample of 5 EVMs per Assembly constituency.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC directed VVPAT verification of 5 randomly selected EVMs per constituency, up from the earlier 1 EVM per constituency."
    },
    {
        "id": "ch43-l2-q18",
        "question": "The EC's cVIGIL app allows:\\n1. Citizens to report MCC violations in real-time\\n2. Geo-tagged photo/video evidence\\n3. Response within 100 minutes\\n4. Anonymous complaints\\nWhich features are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 3,
        "explanation": "cVIGIL allows real-time reporting with geo-tagged evidence and a 100-minute response target. However, complainants must verify identity, so it's not fully anonymous."
    },
    {
        "id": "ch43-l2-q19",
        "question": "Assertion (A): The EC's quasi-judicial function in deciding party disputes was upheld by the Supreme Court.\\nReason (R): In Sadiq Ali v. ECI (1972), the SC held that the EC's decision under the Symbols Order has the force of law.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC upheld the EC's quasi-judicial authority in party dispute resolution under the Symbols Order."
    },
    {
        "id": "ch43-l2-q20",
        "question": "The Dinesh Goswami Committee (1990) recommended:\\n1. State funding of elections\\n2. Strengthening the EC\\n3. Electoral reforms including anti-defection amendments\\n4. Compulsory voting\\nWhich were its recommendations?",
        "options": ["1 only", "1, 2 and 3", "1 and 4", "All four"],
        "correctAnswerIndex": 1,
        "explanation": "The Goswami Committee recommended state funding, strengthening EC, and electoral reforms. It did NOT recommend compulsory voting."
    },
    {
        "id": "ch43-l2-q21",
        "question": "Statement I: The EC prepares electoral rolls on the basis of adult suffrage (Art. 326).\\nStatement II: No person can be denied inclusion on grounds of religion, race, caste, sex, or any of them.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Article 326 guarantees adult suffrage without discrimination — forming the basis for EC's voter registration."
    },
    {
        "id": "ch43-l2-q22",
        "question": "Assertion (A): The 'level playing field' principle is central to the EC's mandate.\\nReason (R): The MCC ensures the ruling party cannot use government machinery for electoral advantage during elections.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The MCC specifically prevents misuse of government resources and official machinery by the ruling party during elections."
    },
    {
        "id": "ch43-l2-q23",
        "question": "The EC's observer system includes:\\n1. General Observers\\n2. Expenditure Observers\\n3. Police Observers\\n4. Micro Observers\\nWhich are deployed during elections?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four types of observers are deployed — general observers for overall monitoring, expenditure observers for spending limits, police observers for security, and micro observers at booths."
    },
    {
        "id": "ch43-l2-q24",
        "question": "Statement I: The EC's voter helpline number is 1950.\\nStatement II: The Systematic Voters' Education and Electoral Participation (SVEEP) program aims to increase informed and ethical voting participation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. 1950 is the EC's voter helpline and SVEEP is its flagship voter education program."
    },
    {
        "id": "ch43-l2-q25",
        "question": "The EC's power in the MCC period includes:\\n1. Halting government advertisements\\n2. Stopping new welfare scheme announcements\\n3. Preventing transfers/postings benefiting candidates\\n4. Controlling poll-related expenditure\\nWhich are enforced?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are enforced during the MCC period to ensure a level playing field — no government ads, no new schemes, no biased transfers, expenditure controls."
    },
    {
        "id": "ch43-l2-q26",
        "question": "Assertion (A): The Representation of the People Act, 1950 deals with electoral rolls and seat allocation.\\nReason (R): The Representation of the People Act, 1951 deals with the conduct of elections, corrupt practices, and election disputes.\\nSelect the correct answer:",
        "options": ["Both A and R are correct", "Only A is correct", "Only R is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. RPA 1950 covers voter rolls and seat allocation, while RPA 1951 covers election conduct, offences, and disputes."
    },
    {
        "id": "ch43-l2-q27",
        "question": "The concept of 'totalizer' for counting votes means:\\n1. Votes from multiple EVMs are mixed before counting\\n2. This prevents identification of voting patterns in specific booths\\n3. It protects voter secrecy at booth level\\nWhich are correct?",
        "options": ["1 only", "1, 2 and 3", "1 and 3 only", "None"],
        "correctAnswerIndex": 1,
        "explanation": "All three are correct. The totalizer concept prevents retaliation against specific booths by mixing votes from multiple machines before counting."
    },
    {
        "id": "ch43-l2-q28",
        "question": "Statement I: Postal ballots are available to service voters (armed forces), diplomats, and voters on election duty.\\nStatement II: The EC expanded postal ballot eligibility to senior citizens (80+), PwD, and COVID-19 affected persons.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Postal ballots were expanded beyond traditional service voters to include senior citizens, PwD, and COVID-affected voters."
    },
    {
        "id": "ch43-l2-q29",
        "question": "Assertion (A): The EC has the power to de-register a political party.\\nReason (R): Under the current legal framework, de-registration is possible only if a party is declared illegal by the government, obtained registration by fraud, or has ceased to exist.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "A is incorrect", "A is correct but R is incorrect", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "The EC can de-register parties only under very limited circumstances — fraud, being declared illegal, or cessation of existence. There is no general deregistration power."
    },
    {
        "id": "ch43-l2-q30",
        "question": "The Tarkunde Committee (1975) recommended:\\n1. An independent EC\\n2. Lowering voting age\\n3. Electoral reforms\\nThe Indrajit Gupta Committee (1998) recommended:\\n4. State funding of elections\\nWhich are correctly attributed?",
        "options": ["Only 1 and 3", "1, 2, 3 and 4", "Only 4", "Only 1"],
        "correctAnswerIndex": 1,
        "explanation": "All correctly attributed — Tarkunde recommended EC independence, lower voting age, and reforms; Indrajit Gupta recommended state funding."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch43-l3-q1",
        "question": "Consider the evolution of the Election Commission:\\n1. Single-member body (1950-1989)\\n2. Multi-member (1989, then reverted)\\n3. Permanently multi-member since 1993\\n4. 2023 Act changed appointment process\\nWhat does this evolution indicate?",
        "options": ["Consistent structure since inception", "Progressive institutionalization of electoral independence through structural reforms — from single-member dependence to multi-member checks and formalized appointment", "Declining importance of the EC", "No significant changes"],
        "correctAnswerIndex": 1,
        "explanation": "The evolution shows progressive institutional strengthening — from dependence on a single appointee to multi-member decision-making and formalized appointment procedures."
    },
    {
        "id": "ch43-l3-q2",
        "question": "Assertion (A): The 2023 CEC Act has been criticized as potentially undermining EC independence.\\nReason (R): By replacing the CJI with a government-nominated Cabinet Minister in the selection committee (PM + Cabinet Minister vs LoP), the government effectively controls 2 of 3 votes, unlike the SC-mandated PM + CJI + LoP formula.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The substitution of CJI with a Cabinet Minister creates a government majority in the selection committee, raising concerns about appointment independence."
    },
    {
        "id": "ch43-l3-q3",
        "question": "Statement I: The EC's power under Art. 324 includes residuary powers that go beyond enacted legislation.\\nStatement II: In Common Cause v. Union of India, the SC held that Art. 324 empowers the EC to issue directions for ensuring free and fair elections even in areas where specific law is absent.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC has consistently upheld the EC's residuary powers under Art. 324 to fill legislative gaps in election management."
    },
    {
        "id": "ch43-l3-q4",
        "question": "The tension between the EC's independence and its accountability involves:\\n1. No mechanism for Parliament to question EC decisions during elections\\n2. Judicial review is available but only post-election\\n3. The EC is not subject to CAG audit for operational decisions\\n4. Public accountability through transparency\\nWhich are relevant?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent the independence-accountability balance — operational independence during elections with post-election judicial review and transparency mechanisms."
    },
    {
        "id": "ch43-l3-q5",
        "question": "Assertion (A): The EC's handling of coalition-era party splits requires quasi-judicial skills.\\nReason (R): When parties split, the EC must determine which faction is the 'real' party entitled to the symbol — applying legal tests like majority of organizational office-bearers, legislators, and state units.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC applies specific legal tests under the Symbols Order to determine genuine party factions — a quasi-judicial function."
    },
    {
        "id": "ch43-l3-q6",
        "question": "The EC's role in India's democracy includes:\\n1. Electoral administration\\n2. Quasi-judicial functions\\n3. Regulatory functions\\n4. Advisory to President/Governor on disqualification\\n5. Voter education\\nWhich represent its comprehensive mandate?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1, 2 and 3 only", "1 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five — the EC's mandate spans administration, quasi-judicial decisions, regulation, constitutional advice, and voter education."
    },
    {
        "id": "ch43-l3-q7",
        "question": "Statement I: State Election Commissions lack the constitutional protection enjoyed by the national EC.\\nStatement II: Unlike the CEC who has impeachment-level protection, State Election Commissioners can be removed by the Governor, and the scope of their authority is limited to local body elections.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. SECs have weaker constitutional protection than the national EC — a structural issue that affects their independence in conducting local elections."
    },
    {
        "id": "ch43-l3-q8",
        "question": "Assertion (A): Technology has transformed the EC's functioning.\\nReason (R): From EVMs and VVPAT to cVIGIL, voter helpline, online registration, digital voter lists, and social media monitoring — technology has enhanced transparency, efficiency, and voter engagement.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Technology adoption has been a key driver of EC's modernization and effectiveness."
    },
    {
        "id": "ch43-l3-q9",
        "question": "Consider the debate on electoral bonds:\\n1. The EC opposed electoral bonds as they reduced transparency\\n2. The SC struck down the Electoral Bond Scheme in 2024\\n3. The ruling cited violation of Right to Information (Art. 19)\\n4. The EC supported disclosure of donor information\\nWhich are correct?",
        "options": ["1 and 4 only", "1, 2, 3 and 4", "1 and 2 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct. The EC opposed electoral bonds, the SC struck them down citing Art. 19 violations, and the EC supported full donor disclosure."
    },
    {
        "id": "ch43-l3-q10",
        "question": "Statement I: The EC's international reputation as a model election management body is well-established.\\nStatement II: The EC has provided election assistance to over 100 countries, and Sukumar Sen even helped organize Sudan's first elections.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's EC is internationally recognized, and its expertise has been shared with dozens of countries since Sukumar Sen's Sudan assignment."
    },
    {
        "id": "ch43-l3-q11",
        "question": "Assertion (A): The EC faces the challenge of regulating digital campaigning.\\nReason (R): Social media platforms operate transnationally, algorithms create echo chambers, targeted ads bypass traditional regulation, and AI-generated deepfakes threaten electoral integrity.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Digital campaigning presents regulatory challenges that traditional election law was not designed to handle."
    },
    {
        "id": "ch43-l3-q12",
        "question": "The reform proposals for the Election Commission include:\\n1. Collegium system for appointments (involving CJI)\\n2. Independent secretariat and budget\\n3. Statutory backing for MCC\\n4. Equal protection for all ECs (not just CEC)\\n5. Expanded mandate to include local elections\\nWhich have been proposed?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "1, 3 and 4 only", "2 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five reforms have been proposed by various committees, courts, and experts to strengthen the EC's independence and effectiveness."
    },
    {
        "id": "ch43-l3-q13",
        "question": "Statement I: The one-nation-one-election proposal would require at least 5 Constitutional Amendments.\\nStatement II: Changes would be needed to Art. 83 (Lok Sabha tenure), Art. 172 (State Assembly tenure), Art. 85 (dissolution), Art. 174, and related provisions.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Simultaneous elections would require fundamental constitutional amendments affecting the tenure and dissolution provisions of both Parliament and State Assemblies."
    },
    {
        "id": "ch43-l3-q14",
        "question": "Assertion (A): The EC's credibility is its most important asset.\\nReason (R): Since the MCC and many EC directives lack statutory force, public trust and institutional credibility are the primary enforcement mechanisms — without credibility, the EC's authority collapses.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC's effectiveness depends heavily on its credibility since many of its powers operate through moral authority rather than statutory compulsion."
    },
    {
        "id": "ch43-l3-q15",
        "question": "The comprehensive challenges facing the EC in the 21st century include:\\n1. Money power in elections\\n2. Criminalization of politics\\n3. Social media regulation\\n4. Ensuring inclusion (PwD, transgender, migrant voters)\\n5. Climate change impacts on polling logistics\\nWhich are current challenges?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "1, 2 and 3 only", "4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent 21st-century challenges — money power, criminalization, digital threats, inclusion, and climate-related logistical difficulties."
    },
    {
        "id": "ch43-l3-q16",
        "question": "Statement I: The EC's role extends beyond mere election management to include democratic capacity building.\\nStatement II: Through SVEEP, voter education, accessibility initiatives, and electoral literacy clubs, the EC promotes democratic values and informed citizenship.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC's mandate has evolved from administrative election management to broader democratic engagement and education."
    },
    {
        "id": "ch43-l3-q17",
        "question": "Assertion (A): The relationship between the EC and judiciary is both supportive and defined by boundaries.\\nReason (R): Courts cannot interfere during ongoing elections (Art. 329) but can review EC decisions post-election through election petitions — creating a balance between electoral autonomy and judicial oversight.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Art. 329 bars judicial intervention during elections but allows post-election judicial review through petitions — balancing EC autonomy with accountability."
    },
    {
        "id": "ch43-l3-q18",
        "question": "Consider the comparative analysis of electoral bodies:\\n1. India's EC is independent — UK Electoral Commission advises only\\n2. US has no central election body — elections are state-run\\n3. Australia's AEC shares India's independent model\\n4. India's EC has broader powers than most equivalents\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "1 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct. India's EC is among the world's most powerful election management bodies, with broader powers than most international counterparts."
    },
    {
        "id": "ch43-l3-q19",
        "question": "Statement I: The ECI manages the world's largest democratic exercise.\\nStatement II: With 900+ million eligible voters, 1 million+ polling stations, and multi-phase elections across diverse geography, the EC's logistical achievement is unparalleled globally.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India's elections are the largest democratic exercise in human history, and the EC's logistical management is a model studied worldwide."
    },
    {
        "id": "ch43-l3-q20",
        "question": "Assertion (A): Strengthening the EC is essential for India's democratic future.\\nReason (R): As challenges evolve — from money power and criminalization to AI deepfakes and cross-border digital influence — the EC needs enhanced powers, technology, and institutional independence.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The evolving nature of threats to electoral integrity requires continuous strengthening of the EC's capabilities and independence."
    },
    {
        "id": "ch43-l3-q21",
        "question": "The EC's role in preventing hate speech during elections involves:\\n1. Monitoring speeches and social media\\n2. Issuing notices to violators\\n3. Filing complaints with police\\n4. Banning candidates from campaigning temporarily\\nWhich powers does the EC exercise?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "The EC exercises all four powers — monitoring, notices, police complaints, and temporary campaign bans to control hate speech during elections."
    },
    {
        "id": "ch43-l3-q22",
        "question": "Statement I: The EC's use of Geographical Information Systems (GIS) has improved electoral mapping.\\nStatement II: GIS helps in accurate voter counting by area, planning polling station locations, and deploying security resources efficiently.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. GIS technology has significantly improved the EC's planning, mapping, and resource deployment capabilities."
    },
    {
        "id": "ch43-l3-q23",
        "question": "Assertion (A): The concept of 'free and fair elections' has evolved beyond basic voting to include informed choice.\\nReason (R): The SC's directions on disclosure of criminal antecedents, assets, and educational qualifications of candidates (Union of India v. ADR, 2002) expanded the concept to include voter's right to information about candidates.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The ADR judgment expanded 'free and fair' to include informed voting — candidates must disclose criminal cases, assets, and qualifications."
    },
    {
        "id": "ch43-l3-q24",
        "question": "The key reforms needed for the EC include:\\n1. Equal removal protection for all ECs (not just CEC)\\n2. Independent budget mechanism\\n3. Legal backing for MCC\\n4. Enhanced digital regulation powers\\n5. Permanent voter awareness programs\\nWhich are essential?",
        "options": ["1 and 3 only", "1, 2, 3, 4 and 5", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five reforms are essential for the EC to meet current and future challenges effectively."
    },
    {
        "id": "ch43-l3-q25",
        "question": "Statement I: The EC plays a crucial role in India's democratic consolidation.\\nStatement II: By conducting elections for over 7 decades across the world's most diverse population, the EC has made regular elections a non-negotiable feature of Indian democracy.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC's consistent conduct of elections has embedded electoral democracy as the foundational principle of Indian governance."
    },
    {
        "id": "ch43-l3-q26",
        "question": "Assertion (A): The question of whether the EC should regulate social media platforms more aggressively is a constitutional debate.\\nReason (R): Aggressive regulation could infringe on free speech (Art. 19) while lack of regulation threatens electoral integrity — requiring the EC to balance fundamental rights with democratic fairness.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Social media regulation involves a constitutional tension between free speech rights and the need for electoral integrity."
    },
    {
        "id": "ch43-l3-q27",
        "question": "The EC's accessibility initiatives include:\\n1. 'Accessible Elections' framework for PwD\\n2. Braille-enabled EVMs\\n3. Wheelchair ramps at polling stations\\n4. Sign language interpreters\\n5. Transport facilities for elderly voters\\nWhich are EC initiatives?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1, 2 and 3 only", "4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five are EC accessibility initiatives — the EC has made inclusive elections a priority with comprehensive accessibility measures."
    },
    {
        "id": "ch43-l3-q28",
        "question": "Statement I: India's election management model has been exported internationally.\\nStatement II: The India International Institute of Democracy and Election Management (IIIDEM) under the EC provides training to election officials from other countries.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. IIIDEM is the EC's international training center that has trained election officials from numerous countries."
    },
    {
        "id": "ch43-l3-q29",
        "question": "Assertion (A): The EC must balance technological innovation with inclusivity.\\nReason (R): While digital tools improve efficiency, India's digital divide means rural, elderly, and marginalized voters may be left behind if technology replaces rather than supplements traditional methods.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The EC must ensure technology enhances inclusion rather than creating barriers for digitally disadvantaged populations."
    },
    {
        "id": "ch43-l3-q30",
        "question": "The ultimate measure of the EC's success is:\\n1. Conducting timely elections without interruption since 1952\\n2. Managing the world's largest electorate\\n3. Maintaining public trust in the electoral process\\n4. Peaceful transfer of power regardless of outcome\\n5. Progressive inclusion of marginalized communities\\nWhich together define success?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 4 only", "3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five criteria together define the EC's success — timeliness, scale management, public trust, peaceful transitions, and progressive inclusion."
    }
];

export const CHAPTER_43_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
