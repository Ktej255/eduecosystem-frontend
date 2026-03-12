import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch25-l1-q1",
        "question": "When was the Indian Parliamentary Group (IPG) formed?",
        "options": ["1947","1949","1950","1952"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Parliamentary Group (IPG) is an autonomous body formed in the year 1949 in pursuance of a motion adopted by the Constituent Assembly (Legislative) on 16 August, 1948."
    },
    {
        "id": "ch25-l1-q2",
        "question": "Is the Indian Parliamentary Group (IPG) an autonomous body?",
        "options": ["Yes, it is an autonomous body.","No, it is a department under the Ministry of External Affairs.","No, it is a sub-committee of the Lok Sabha.","Yes, but it is financially controlled by the UN."],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Parliamentary Group is an autonomous body."
    },
    {
        "id": "ch25-l1-q3",
        "question": "Who can become a member of the Indian Parliamentary Group?",
        "options": ["Only current Members of Parliament (Lok Sabha and Rajya Sabha).","Current Members of Parliament and former Members of Parliament.","Any citizen of India.","Only Cabinet Ministers."],
        "correctAnswerIndex": 1,
        "explanation": "Membership of the IPG is open to all current Members of Parliament. Former Members of Parliament can also become associate members."
    },
    {
        "id": "ch25-l1-q4",
        "question": "What type of membership is granted to former Members of Parliament in the IPG?",
        "options": ["Honorary Membership","Life Membership","Associate Membership","Full Voting Membership"],
        "correctAnswerIndex": 2,
        "explanation": "Former Members of Parliament can also become associate members."
    },
    {
        "id": "ch25-l1-q5",
        "question": "Who acts as the ex-officio President of the Indian Parliamentary Group (IPG)?",
        "options": ["The Prime Minister","The President of India","The Speaker of the Lok Sabha","The Chairman of the Rajya Sabha"],
        "correctAnswerIndex": 2,
        "explanation": "The Speaker of the Lok Sabha is the ex-officio President of the Group."
    },
    {
        "id": "ch25-l1-q6",
        "question": "Who acts as the ex-officio Vice-Presidents of the Indian Parliamentary Group?",
        "options": ["The Prime Minister and the Leader of the Opposition.","The Deputy Speaker of the Lok Sabha and the Deputy Chairman of the Rajya Sabha.","The Minister of Parliamentary Affairs and the Minister of External Affairs.","The oldest members of the Lok Sabha and Rajya Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "The Deputy Speaker of the Lok Sabha and the Deputy Chairman of the Rajya Sabha are the ex-officio Vice-Presidents of the Group."
    },
    {
        "id": "ch25-l1-q7",
        "question": "Who acts as the ex-officio Secretary-General of the Indian Parliamentary Group?",
        "options": ["The Secretary of the Ministry of Parliamentary Affairs","The Secretary-General of the Lok Sabha","The Secretary-General of the Rajya Sabha","A retired diplomat appointed by the President"],
        "correctAnswerIndex": 1,
        "explanation": "The Secretary-General of the Lok Sabha acts as the ex-officio Secretary-General of the IPG."
    },
    {
        "id": "ch25-l1-q8",
        "question": "The Indian Parliamentary Group acts as the National Group of Which international organization?",
        "options": ["The United Nations General Assembly (UNGA)","The Inter-Parliamentary Union (IPU)","The Commonwealth Secretariat","The Non-Aligned Movement (NAM)"],
        "correctAnswerIndex": 1,
        "explanation": "The IPG acts as the National Group of the Inter-Parliamentary Union (IPU) and also as the India Branch of the Commonwealth Parliamentary Association (CPA)."
    },
    {
        "id": "ch25-l1-q9",
        "question": "Besides the IPU, the Indian Parliamentary Group also acts as the India branch for which other major international parliamentary association?",
        "options": ["The European Parliament","The SAARC Parliamentary Forum","The Commonwealth Parliamentary Association (CPA)","The BRICS Parliamentary Committee"],
        "correctAnswerIndex": 2,
        "explanation": "The IPG also acts... as the India Branch of the Commonwealth Parliamentary Association (CPA)."
    },
    {
        "id": "ch25-l1-q10",
        "question": "When was the Inter-Parliamentary Union (IPU) founded?",
        "options": ["1889","1919","1945","1950"],
        "correctAnswerIndex": 0,
        "explanation": "The Inter-Parliamentary Union (IPU) is an international organization of parliaments of sovereign states. It was founded in 1889."
    },
    {
        "id": "ch25-l1-q11",
        "question": "What is a primary aim of the Indian Parliamentary Group?",
        "options": ["To fund election campaigns for its members.","To promote personal contacts between Members of Parliament in India.","To decide the foreign policy of the Indian government.","To audit the travel expenses of diplomats."],
        "correctAnswerIndex": 1,
        "explanation": "One of the aims is to promote personal contacts between Members of Parliament."
    },
    {
        "id": "ch25-l1-q12",
        "question": "Does the IPG aim to study questions of public importance that are likely to come up before the Parliament?",
        "options": ["Yes, it aims to study such questions and arrange seminars and discussions on them.","No, discussing pending parliamentary business is forbidden in the IPG.","Only if the Supreme Court requests a study.","Yes, but only questions related to defense."],
        "correctAnswerIndex": 0,
        "explanation": "To study questions of public importance that are likely to come up before the Parliament; arrange seminars and discussions and orientation courses..."
    },
    {
        "id": "ch25-l1-q13",
        "question": "Which body arranges lectures on political, defense, economic, social, and educational problems by Members of Parliament and distinguished persons?",
        "options": ["The Public Accounts Committee","The Indian Parliamentary Group","The Election Commission","The Union Public Service Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Group arranges lectures on political, defense, economic, social and educational problems by Members of Parliament and distinguished persons."
    },
    {
        "id": "ch25-l1-q14",
        "question": "Does the IPG arrange visits to foreign countries for Indian Parliamentarians?",
        "options": ["Yes, with a view to develop contacts with members of other Parliaments.","No, only the Ministry of External Affairs can arrange foreign visits.","Yes, but only for Cabinet Ministers.","No, the IPG strictly operates within India."],
        "correctAnswerIndex": 0,
        "explanation": "To arrange visits to foreign countries with a view to develop contacts with members of other Parliaments."
    },
    {
        "id": "ch25-l1-q15",
        "question": "Under the auspices of the IPG, which award is conferred on sitting Members of Parliament to recognize their overall contribution?",
        "options": ["Bharat Ratna","Outstanding Parliamentarian Award","Padma Vibhushan","Best Legislator Trophy"],
        "correctAnswerIndex": 1,
        "explanation": "The Outstanding Parliamentarian Award is conferred under the auspices of the IPG."
    },
    {
        "id": "ch25-l1-q16",
        "question": "When was the Outstanding Parliamentarian Award instituted by the IPG?",
        "options": ["1950","1990","1995","2005"],
        "correctAnswerIndex": 2,
        "explanation": "An award for Outstanding Parliamentarian was instituted in the year 1995."
    },
    {
        "id": "ch25-l1-q17",
        "question": "Who was the first recipient of the Outstanding Parliamentarian Award in 1995?",
        "options": ["Atal Bihari Vajpayee","Chandra Shekhar","Indrajit Gupta","Somnath Chatterjee"],
        "correctAnswerIndex": 1,
        "explanation": "The first recipient of the award was Shri Chandra Shekhar."
    },
    {
        "id": "ch25-l1-q18",
        "question": "Which of the following describes the nature of the Inter-Parliamentary Union (IPU)?",
        "options": ["It is a military alliance.","It is an international organization of Parliaments of sovereign states.","It is a branch of the World Bank.","It is a subset of the Indian Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "The Inter-Parliamentary Union (IPU) is an international organization of parliaments of sovereign states."
    },
    {
        "id": "ch25-l1-q19",
        "question": "Where are the headquarters of the Inter-Parliamentary Union (IPU) located?",
        "options": ["New York","London","Geneva","Paris"],
        "correctAnswerIndex": 2,
        "explanation": "Its headquarters are at Geneva (Switzerland)."
    },
    {
        "id": "ch25-l1-q20",
        "question": "Does the Inter-Parliamentary Union (IPU) have a close working relationship with the United Nations?",
        "options": ["Yes, it supports the objectives of the UN and works in close co-operation with it.","No, it was formed to counter the UN.","No, it restricts its affiliation solely to the Commonwealth.","Yes, but it only interacts with the UN Security Council."],
        "correctAnswerIndex": 0,
        "explanation": "The IPU supports the objectives of the United Nations, whose efforts it backs and with which it works in close co-operation."
    },
    {
        "id": "ch25-l1-q21",
        "question": "What is an",
        "options": ["Vote in all General Body meetings.","Represent India at the IPU conferences universally.","Enjoy limited rights; they are not entitled to representation on the Executive Committee or to vote at meetings, nor represent the Group abroad.","Run for the Presidency of the IPG."],
        "correctAnswerIndex": 2,
        "explanation": "Associate members enjoy limited rights. They are not entitled to representation on the Executive Committee or to vote at meetings, nor are they eligible for inclusion in the Indian Parliamentary Delegations abroad."
    },
    {
        "id": "ch25-l1-q22",
        "question": "Who nominates the members of the Indian Parliamentary Delegations to foreign countries sent by the IPG?",
        "options": ["The Prime Minister","The Minister of External Affairs","The Speaker of Lok Sabha in his capacity as the President of the Group","The President of India"],
        "correctAnswerIndex": 2,
        "explanation": "The composition of Indian Parliamentary Delegations to foreign countries is decided by the Speaker, Lok Sabha, in his capacity as President of the Group."
    },
    {
        "id": "ch25-l1-q23",
        "question": "Is the Commonwealth Parliamentary Association (CPA) limited to sovereign nations?",
        "options": ["Yes, only fully independent sovereign states.","No, it consists of National, Provincial, State and Territorial Parliaments and Legislatures of the countries of the Commonwealth.","Yes, but only members of the UN Security Council.","No, any country in the world can join."],
        "correctAnswerIndex": 1,
        "explanation": "The CPA is an association of Commonwealth Parliamentarians who... It consists of National, Provincial, State and Territorial Parliaments and Legislatures..."
    },
    {
        "id": "ch25-l1-q24",
        "question": "Do members of State Legislatures in India have their own branches of the Commonwealth Parliamentary Association (CPA)?",
        "options": ["Yes, state legislatures can form their own State Branches of the CPA.","No, only the Union Parliament represents the CPA in India.","Yes, but they must operate under the Home Ministry.","No, state MLAs are banned from joining international bodies."],
        "correctAnswerIndex": 0,
        "explanation": "In India, the CPA has its India Union Branch in Parliament and State Branches in the State Legislatures."
    },
    {
        "id": "ch25-l1-q25",
        "question": "What is the primary motive behind the creation of the IPG regarding international diplomacy?",
        "options": ["To declare war independently of the executive.","To establish a forum for","supplementing the efforts of formal executive diplomacy.","To negotiate trade tariffs with the WTO.","To audit the foreign aid received by India."],
        "correctAnswerIndex": 1,
        "explanation": "The IPG acts as a link between Parliament of India and Parliaments of the world, fostering relationships (parliamentary diplomacy) that run parallel to traditional executive-driven foreign policy."
    },
    {
        "id": "ch25-l1-q26",
        "question": "Which of the following is NOT an ex-officio position in the IPG?",
        "options": ["President (Speaker of Lok Sabha)","Vice-President (Deputy Chairman, Rajya Sabha)","Secretary-General (Secretary-General, Lok Sabha)","Treasurer (Finance Minister)"],
        "correctAnswerIndex": 3,
        "explanation": "The Finance Minister has no ex-officio role in the IPG. The President, Vice-Presidents, and Secretary-General positions are all tied to parliamentary offices, not executive ones."
    },
    {
        "id": "ch25-l1-q27",
        "question": "How does the IPG facilitate interaction between MPs and foreign leaders visiting India?",
        "options": ["By taking the foreign leaders to the MP","By arranging addresses by visiting Heads of State and Government to Members of Parliament.","By offering foreign leaders Indian citizenship.","By funding the foreign travel of the visiting leaders."],
        "correctAnswerIndex": 1,
        "explanation": "One of the functions of the Group is to arrange addresses by visiting Heads of State and Government to Members of Parliament."
    },
    {
        "id": "ch25-l1-q28",
        "question": "If a Member of Parliament ceases to be an MP (e.g., they lose an election), what happens to their IPG membership?",
        "options": ["They remain a full member for life.","They immediately cease to be a regular member but become eligible to be an",".","They are expelled from the IPG permanently.","They become President of the IPG."],
        "correctAnswerIndex": 1,
        "explanation": "Regular membership is for current MPs. Former MPs can become"
    },
    {
        "id": "ch25-l1-q29",
        "question": "Which body shares the secretarial work of the IPG?",
        "options": ["The Prime Minister","The Lok Sabha Secretariat.","The Ministry of External Affairs.","The Election Commission."],
        "correctAnswerIndex": 1,
        "explanation": "As the Secretary-General of the Lok Sabha is the ex-officio Secretary-General of the IPG, the Lok Sabha Secretariat handles its administrative function."
    },
    {
        "id": "ch25-l1-q30",
        "question": "Is IPG membership compulsory for every Member of Parliament?",
        "options": ["Yes, it is automatically assigned upon swearing in.","No, it is an autonomous body, and membership is voluntary.","Yes, if they want to sit in the front rows.","Yes, but only for Lok Sabha members."],
        "correctAnswerIndex": 1,
        "explanation": "It is an autonomous body, and membership is"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch25-l2-q1",
        "question": "Analyze the foundational nature of the Indian Parliamentary Group (IPG). How does its origin significantly differentiate it from other parliamentary bodies like the Public Accounts Committee (PAC) or Departmentally-Related Standing Committees (DRSCs)?",
        "options": ["The IPG was created via an amendment to the Representation of the People Act, giving it statutory authority over elections, unlike the purely advisory PAC.","The IPG is an autonomous body formed by a historic motion of the Constituent Assembly (Legislative) in 1948. It is neither a constitutional body nor a statutory creation of the modern Parliament, functioning instead as a voluntary, autonomous association of legislators for diplomatic and networking purposes.","The IPG is explicitly mentioned in Article 118 of the Constitution, while the PAC is merely a convention.","The IPG was established by the Supreme Court to monitor parliamentary corruption."],
        "correctAnswerIndex": 1,
        "explanation": "This tests institutional genesis. The PAC is rooted in historical conventions and parliamentary rules. DRSCs were created by changing the Rules of Procedure in 1993. The IPG predates the formal Constitution; it was formed by the Constituent Assembly acting as a legislature in 1948. It is an autonomous club for MPs, not a formal organ of the State machinery like a standing committee."
    },
    {
        "id": "ch25-l2-q2",
        "question": "Consider the dual role of the Indian Parliamentary Group (IPG) on the international stage. It acts as the",
        "options": ["The United Nations General Assembly (UNGA) and the World Trade Organization (WTO).","The Inter-Parliamentary Union (IPU) and the Commonwealth Parliamentary Association (CPA).","The SAARC Parliamentary Forum and the ASEAN Inter-Parliamentary Assembly (AIPA).","The European Parliament and the Non-Aligned Movement (NAM) Parliamentary Network."],
        "correctAnswerIndex": 1,
        "explanation": "The IPG wears two hats abroad. When it sends an Indian delegation to Geneva, it represents India at the Inter-Parliamentary Union (the oldest global org of parliaments). When it sends a delegation to a meeting in London or Sydney, it acts as the India Branch of the Commonwealth Parliamentary Association (linking former British territories)."
    },
    {
        "id": "ch25-l2-q3",
        "question": "Evaluate the concept of",
        "options": ["Parliamentary diplomacy relies on negotiating binding defense treaties, which the MEA cannot legally do without parliamentary approval.","The IPG possesses the constitutional power to unilaterally open embassies in foreign countries, bypassing the MEA.","While MEA diplomacy is formal, rigid, and constrained by official government policy (","), Parliamentary Diplomacy through the IPG allows for more informal, nuanced political dialogue (","or",") between legislators holding differing views, building goodwill and understanding without the pressure of binding national commitments.","Parliamentary diplomacy allows MPs to declare economic sanctions against hostile nations."],
        "correctAnswerIndex": 2,
        "explanation": "Executive diplomacy is rigid. An ambassador speaks only the government"
    },
    {
        "id": "ch25-l2-q4",
        "question": "Why is the Speaker of the Lok Sabha inherently positioned as the ex-officio President of the Indian Parliamentary Group (IPG), over the Chairman of the Rajya Sabha (who is the Vice-President of India)?",
        "options": ["Because the Constitution mandates the Speaker","Because the Lok Sabha provides funding for the IPG.","The Speaker represents the Lok Sabha, the house directly elected by the population, symbolizing the ultimate democratic will of the nation in international parliamentary forums, whereas the Chairman is indirectly elected and structurally presides over the Council of States.","Because the Inter-Parliamentary Union strictly forbids members of upper houses from holding presidencies."],
        "correctAnswerIndex": 2,
        "explanation": "In diplomatic settings where"
    },
    {
        "id": "ch25-l2-q5",
        "question": "Assertion (A): The Indian Parliamentary Group (IPG) has the legal authority to ratify international treaties signed by the Prime Minister before they become binding on India at the United Nations.\\nReason (R): Because the IPG serves as the supreme legislative check on executive foreign policy under Article 246.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are completely false. In India, the Executive (the Cabinet) has the exclusive power to negotiate and sign international treaties; they do not automatically require parliamentary ratification (unless a specific domestic law needs to be changed to implement them). The IPG is an autonomous networking club; it has absolutely zero constitutional power to ratify treaties or dictate foreign policy."
    },
    {
        "id": "ch25-l2-q6",
        "question": "Consider the operational dynamics of an Indian Parliamentary Delegation sent abroad by the IPG. Apart from representing India",
        "options": ["It secretly negotiates campaign funding from foreign political parties.","It functions as a traveling disciplinary committee to penalize unruly MPs.","The delegations are purposely comprised of Members from both the ruling party and the opposition. Traveling together and presenting a united","front on foreign soil fosters camaraderie and dilutes intense domestic partisan hostility, indirectly improving the working atmosphere back in the Parliament.","It allows the opposition to publicly criticize the ruling party in international forums."],
        "correctAnswerIndex": 2,
        "explanation": "This is the unwritten benefit of the IPG. In Delhi, a BJP and a Congress MP might yell at each other all day. When the Speaker puts them on a plane to Paris as the"
    },
    {
        "id": "ch25-l2-q7",
        "question": "Identify the critical distinction in the membership rights between a sitting MP and a former MP within the Indian Parliamentary Group (IPG).",
        "options": ["Former MPs pay double the subscription fee but hold the same voting rights.","Former MPs can only join the Commonwealth Parliamentary Association, not the Inter-Parliamentary Union.","Former MPs become",". While they can attend functions and addresses to maintain their connection with parliamentary life, they explicitly lose the right to vote in the IPG","Former MPs are legally barred from entering the Parliament building even if they are IPG members."],
        "correctAnswerIndex": 2,
        "explanation": "The IPG honors political veterans by letting them stay associated ("
    },
    {
        "id": "ch25-l2-q8",
        "question": "Which of the following activities best exemplifies the IPG",
        "options": ["Drafting the annual Union Budget for the Finance Ministry.","Organizing a multi-party seminar inviting defense analysts to brief MPs on the geopolitical implications of a new border conflict, elevating the baseline knowledge of legislators before the issue is debated in the House.","Ruling on the constitutional validity of a data privacy bill before it is introduced.","Managing the security protocols of the Parliament building."],
        "correctAnswerIndex": 1,
        "explanation": "The IPG is an educational and networking hub. It doesn"
    },
    {
        "id": "ch25-l2-q9",
        "question": "Regarding the",
        "options": ["The award is chosen by a public SMS voting system.","The selection is made by the President of India acting in their sole discretion.","The selection is intrinsically balanced. The Speaker (IPG President) heads the selection committee, but crucially, it includes veteran leaders across party lines, ensuring the award honors genuine parliamentary excellence, debating skill, and dignified conduct respected universally across the political spectrum.","The award is financially sponsored by an independent UN agency."],
        "correctAnswerIndex": 2,
        "explanation": "If the ruling party alone picked the winner, it would be meaningless. The IPG functions by consensus. The award committee involves senior leaders from both sides. When a communist MP (Indrajit Gupta) or an opposition leader (Sushma Swaraj) wins the award, it reinforces the non-partisan, institutional prestige of the IPG, recognizing skill over ideology."
    },
    {
        "id": "ch25-l2-q10",
        "question": "How does the Inter-Parliamentary Union (IPU), for which the IPG acts as the Indian node, fundamentally differ from the United Nations (UN) in terms of its core representational philosophy?",
        "options": ["The IPU has a standing army; the UN does not.","The IPU only accepts democratic nations; the UN accepts all nations.","The UN is an organization of sovereign GOVERNMENTS representing the executive branch internationally. The IPU is an organization of PARLIAMENTS, representing the legislative branches, allowing politicians outside the dominant ruling executive (like opposition members) to interact globally.","The IPU is older but subservient to the UN Security Council."],
        "correctAnswerIndex": 2,
        "explanation": "This is the essence of the IPU. At the UN, the Indian Ambassador (acting for the PM) speaks for India. If the BJP is in power, the UN only hears the BJP"
    },
    {
        "id": "ch25-l2-q11",
        "question": "What is the primary role of the Indian Parliamentary Group regarding visiting foreign dignitaries (Heads of State)?",
        "options": ["To grant them diplomatic immunity.","To negotiate bilateral trade agreements with them on behalf of the cabinet.","To organize their official address to the Members of the Indian Parliament, usually in the Central Hall, facilitating a direct interface between the foreign leader and the Indian legislative body outside the formal executive channels.","To audit their travel expenses while in India."],
        "correctAnswerIndex": 2,
        "explanation": "When the US President or British PM visits India, the MEA organizes the state dinners. The IPG organizes the address to the Parliament. This is a crucial diplomatic honor and a function of the IPG, providing a platform where the foreign leader speaks directly to the representatives of the Indian people."
    },
    {
        "id": "ch25-l2-q12",
        "question": "Assertion (A): Membership in the Indian Parliamentary Group (IPG) is mandatory for all newly elected Lok Sabha Members before they can take their oath.\\nReason (R): Because the IPG controls the induction and orientation courses necessary to understand parliamentary procedure.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. The IPG is strictly an"
    },
    {
        "id": "ch25-l2-q13",
        "question": "Consider the funding and administrative support mechanism of the Indian Parliamentary Group.",
        "options": ["It is funded entirely by membership fees and operates out of a private office in New Delhi.","It receives its budget directly from the United Nations as part of the IPU mandate.","Despite being autonomous, it relies heavily on the state apparatus; the Secretary-General of the Lok Sabha acts as its Secretary, and the Lok Sabha Secretariat provides the necessary administrative machinery, office space, and institutional support within the Parliament complex.","It is funded by corporate sponsorships and CSR funds."],
        "correctAnswerIndex": 2,
        "explanation": "The IPG is a strange hybrid. It"
    },
    {
        "id": "ch25-l2-q14",
        "question": "Identify the shared characteristic that fundamentally connects the",
        "options": ["Both possess the power to sanction nations for human rights abuses.","Both provide substantial development loans to their member nations.","Both serve exclusively as vast, international networking and knowledge-sharing platforms, allowing legislators to exchange ideas, debate global issues, and build relationships, completely devoid of any binding legislative or executive authority over sovereign states.","Both require their members to abandon their national constitutions."],
        "correctAnswerIndex": 2,
        "explanation": "Neither the IPU nor the CPA can pass a law or drop a bomb. They are giant, global debate clubs. They exist so an Indian MP can talk to a Canadian MP about how they reformed their healthcare system, sharing best practices and fostering international understanding without impinging on sovereignty."
    },
    {
        "id": "ch25-l2-q15",
        "question": "How does the structure of the Commonwealth Parliamentary Association (CPA) differ slightly from the Inter-Parliamentary Union (IPU) regarding its domestic applicability in a federal structure like India?",
        "options": ["The CPA only accepts the ruling party; the IPU accepts the opposition.","The IPU allows state legislatures to join; the CPA strictly accepts only the national Parliament.","While the IPU formally interacts only with the national Parliament (the IPG), the CPA","India Union Branch","State Branches","The CPA is headquartered in India; the IPU in Geneva."],
        "correctAnswerIndex": 2,
        "explanation": "The British Commonwealth is highly decentralized. Recognizing federal structures, the CPA allows provincial/state parliaments to have their own branches. An MLA from the Karnataka Assembly might travel to a CPA conference in Africa representing the Karnataka State Branch, whereas the IPU usually only deals with the sovereign national Parliament (Lok Sabha/Rajya Sabha)."
    },
    {
        "id": "ch25-l2-q16",
        "question": "Which of the following serves as the primary executive organ managing the day-to-day affairs and policy orientation of the Indian Parliamentary Group?",
        "options": ["The Prime Minister","The overwhelming General Body of all 700+ members through weekly consensus voting.","An Executive Committee, consisting of the President, Vice-Presidents, the Treasurer, and other members elected by the General Body, acting as the centralized steering mechanism for the IPG","The Chief Justice of India."],
        "correctAnswerIndex": 2,
        "explanation": "Any organization with 700+ members (all the MPs) needs a smaller steering committee. The General Body meets rarely. The Executive Committee (headed by the Speaker) meets regularly to decide things like"
    },
    {
        "id": "ch25-l2-q17",
        "question": "What specific demographic does the",
        "options": ["Current civil servants and IAS officers.","Elected members of local Panchayats.","Former Members of Parliament (as Associate Members), preventing a complete disconnect and allowing the institution to retain and tap into their historical experience and political wisdom through seminars and group events.","Members of the Armed Forces."],
        "correctAnswerIndex": 2,
        "explanation": "When an MP loses an election, they usually lose all access to power. The IPG"
    },
    {
        "id": "ch25-l2-q18",
        "question": "Consider the",
        "options": ["The ability to aggressively lead walkouts and stall parliamentary proceedings to secure media coverage.","The ability to secure the highest constituency funding from the Prime Minister.","Debating prowess, deep knowledge of parliamentary rules, respectful conduct towards the Chair and opponents, and a consistent, constructive contribution to the legislative heavily prioritizing institutional dignity over raw partisan aggression.","The ability to introduce the maximum number of Private Members"],
        "correctAnswerIndex": 2,
        "explanation": "Parliament is increasingly plagued by screaming and disruptions. The IPG award is a psychological tool. It signals to MPs:"
    },
    {
        "id": "ch25-l2-q19",
        "question": "Which official conceptually bridges the operational gap between the Lok Sabha",
        "options": ["The Minister of External Affairs.","The Leader of the Opposition.","The Secretary-General of the Lok Sabha, who, by acting simultaneously as the chief administrative officer of the House and the ex-officio Secretary-General of the IPG, ensures seamless coordination and resource sharing.","The President of India."],
        "correctAnswerIndex": 2,
        "explanation": "The Secretary-General is the ultimate bureaucratic insider of Parliament. By placing them at the heart of the IPG, the Speaker guarantees that the IPG, despite being"
    },
    {
        "id": "ch25-l2-q20",
        "question": "In the broader context of",
        "options": ["The IPG delegation has the legal authority to declare war.","The MEA delegation is always composed entirely of military generals.","An MEA delegation represents the hardened stance of the current Executive Government. An IPG delegation, comprising multiple, often adversarial parties, represents the broader","spectrum, allowing for more flexible, empathetic, and politically diverse engagement that isn","The host nation is legally required to agree with everything the IPG says."],
        "correctAnswerIndex": 2,
        "explanation": "If India and Nation X are having a massive formal diplomatic dispute, the MEA Ambassador must remain rigid. But if the IPG sends a delegation, a suave opposition leader in that delegation might sit down with politicians from Nation X, find common ground over dinner, and slowly de-escalate the tension, providing a"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch25-l3-q1",
        "question": "Consider the constitutional positioning of the Indian Parliamentary Group (IPG) vis-a-vis the Departmentally-Related Standing Committees (DRSCs). Which of the following statements most accurately captures their respective institutional paradigms?",
        "options": ["DRSCs deal strictly with the ex post facto audit of government accounts (under Article 151), whereas the IPG is constitutionally mandated under Article 118 to scrutinize the Demands for Grants of the Ministry of External Affairs given its diplomatic role.","Both possess identical statutory backing under the Representation of the People Act, 1951, empowering them to summon private citizens and penalize contempt.","DRSCs are formalized institutional gears embedded in the Rules of Procedure of Parliament designed to scrutinize executive legislation and budgets, thereby exercising","accountability. Conversely, the IPG is a purely non-statutory, autonomous association possessing no legislative or financial oversight powers, focusing entirely on","capacity building, parliamentary diplomacy, and networking.","The IPG has the constitutional authority to ratify international treaties negotiated by the Executive, a power specifically denied to the DRSCs."],
        "correctAnswerIndex": 2,
        "explanation": "A classic UPSC trap. DRSCs are powerful, formal institutional mechanisms of accountability—they tear apart bills and budgets. The IPG, despite its grand name and the Speaker"
    },
    {
        "id": "ch25-l3-q2",
        "question": "Evaluate the systemic utility of",
        "options": ["Executive diplomacy is legally prohibited from negotiating multilateral treaties without prior IPG authorization.","Executive diplomats (ambassadors) lack the constitutional authority to sign binding agreements, a power exclusively held by the IPG delegation.","Executive diplomacy is inherently rigid, constrained by the prevailing government","Track 1","Track 1.5","Track 2","Executive diplomacy can only be conducted within the UN framework, while parliamentary diplomacy operates independently."],
        "correctAnswerIndex": 2,
        "explanation": "An MEA bureaucrat or the PM must stick to the script. They cannot publicly agree with an adversary. But an IPG delegation includes opposition leaders who aren"
    },
    {
        "id": "ch25-l3-q3",
        "question": "Assertion (A): The membership structure of the IPG explicitly bars former Members of Parliament from joining, thereby ensuring the group",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are completely false. The IPG thrives on institutional memory. It deliberately allows former MPs to become"
    },
    {
        "id": "ch25-l3-q4",
        "question": "Analyze the leadership architecture of the Indian Parliamentary Group where the Speaker of the Lok Sabha acts as the ex-officio President, while the Deputy Speaker (LS) and Deputy Chairman (RS) act as Vice-Presidents. Crucially, why does the Chairman of the Rajya Sabha intentionally not hold an executive position within this specific group?",
        "options": ["Because the IPG","Because the Chairman of the Rajya Sabha is the Vice-President of India, making them the second-highest constitutional authority in the Republic. Having the Vice-President serve *under* the Speaker of the Lok Sabha (who ranks lower in the Table of Precedence) in any formalized group would violently breach established constitutional protocol and hierarchy.","Because the Rajya Sabha is constitutionally barred from participating in international affairs.","Because the Inter-Parliamentary Union refuses to recognize the presiding officers of upper houses."],
        "correctAnswerIndex": 1,
        "explanation": "This is a profound insight into protocol. The Speaker heads the IPG because the Lok Sabha is the"
    },
    {
        "id": "ch25-l3-q5",
        "question": "Regarding the",
        "options": ["The award is vetoed by the Chief Justice of India if political bias is detected.","The selection is outsourced to an independent panel of United Nations observers.","The award is chosen by an institutionalized, multi-partisan selection committee headed by the Speaker (who is expected to act neutrally) and traditionally includes senior, respected leaders from across the political aisle, necessitating consensus and ensuring the award honors genuine debating prowess and cross-party respect.","The Constitution mandates that the award alternate between the ruling party and the opposition annually."],
        "correctAnswerIndex": 2,
        "explanation": "Awards by governments are often partisan. An award by the *Parliament* (via the IPG) must transcend this. The Speaker heads the committee, but to maintain the award"
    },
    {
        "id": "ch25-l3-q6",
        "question": "Evaluate the role of the",
        "options": ["It grants the Executive branch immediate veto power over the proceedings of the IPG.","It ensures that the IPG is disbanded the moment the Lok Sabha is dissolved.","It guarantees institutional continuity, bureaucratic memory, and uninterrupted logistical support. While the political class (the MPs) may churn entirely every five years, the permanent Secretariat of the Lok Sabha ensures the IPG continues its diplomatic and educational functions without disruption.","It allows the Secretary-General to unilaterally appoint the Indian delegations sent abroad."],
        "correctAnswerIndex": 2,
        "explanation": "If you leave an autonomous body entirely in the hands of politicians, it collapses when elections happen. By embedding the IPG"
    },
    {
        "id": "ch25-l3-q7",
        "question": "Consider the dual identity of the IPG acting as both the",
        "options": ["The CPA is a military alliance, while the IPU is strictly an economic forum.","The IPU mandates that states secessionist movements be given representation, which the CPA forbids.","The IPU conventionally represents sovereign","on the global stage, restricting its primary interface to the Union Parliament. However, acknowledging the decentralized nature of its member nations, the CPA integrates","into its network, allowing Indian MLAs to participate directly in international parliamentary discourse.","The CPA operates under the United Nations, while the IPU operates under the World Bank."],
        "correctAnswerIndex": 2,
        "explanation": "The IPU handles sovereign nations. India speaks as one voice through the Delhi-based IPG. The CPA (rooted in the British Empire"
    },
    {
        "id": "ch25-l3-q8",
        "question": "Assertion (A): During an address by a visiting foreign Head of State to the Members of Parliament, organized under the auspices of the IPG in the Central Hall, MPs are permitted to move cut motions or raise points of order against the foreign leader",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both are false. When the IPG organizes an address by a foreign leader (like Obama or Putin), it is a solemn, ceremonial, diplomatic event, NOT a legislative session. There is no Speaker sitting in the chair taking votes. It is an act of extreme diplomatic courtesy. Raising points of order or moving motions is totally inapplicable and would cause a massive international incident."
    },
    {
        "id": "ch25-l3-q9",
        "question": "Which of the following scenarios would represent a catastrophic overreach of the IPG",
        "options": ["The IPG organizing a closed-door seminar where civil society activists harshly criticize the National Security Advisor","The IPG sending a delegation to a hostile neighboring country to discuss water treaties without a formal brief from the MEA.","The IPG passing a formal resolution denouncing the Union Budget and demanding a mandatory, immediate 10% increase in the allocation for the Ministry of Defense under threat of parliamentary boycott.","The IPG refusing to grant","to a former Prime Minister."],
        "correctAnswerIndex": 2,
        "explanation": "The IPG can hold seminars, critique policy unofficially, and travel for diplomacy. But it has NO legislative or financial teeth. It cannot pass binding resolutions dictating budgetary allocations. Demanding changes to the Union Budget via threats is the exclusive domain of the formal Houses, the Financial Committees, or the Opposition block, not a voluntary inter-parliamentary club."
    },
    {
        "id": "ch25-l3-q10",
        "question": "In the context of the IPG",
        "options": ["It reveals that the IPG was forced upon India by the departing British colonial administration.","It demonstrates that the IPG was designed to be superior to the Supreme Court, which had not yet been established.","It proves that the institutional architecture of India","It shows that the IPG was originally intended to be the executive cabinet of the nation."],
        "correctAnswerIndex": 2,
        "explanation": "The Constituent Assembly had two jobs: write the Constitution (morning session) and run the country as a provisional parliament (afternoon session). They didn"
    },
    {
        "id": "ch25-l3-q11",
        "question": "What differentiates the formal output of an IPG-organized seminar on a \\",
        "options": ["The IPG seminar output is legally binding on the courts, whereas the DRSC report is only advisory.","The DRSC report must be vetted by the UN before publication, whereas the IPG seminar output is domestic.","A DRSC produces a formal","that is officially tabled in both Houses, forming part of the permanent parliamentary record and mandating an","from the Ministry. The IPG seminar produces informal knowledge, increased awareness, and perhaps a summarized booklet, but generates no formal legislative mandate compelling executive action.","The IPG output immediately dissolves the Lok Sabha if it criticizes the Prime Minister."],
        "correctAnswerIndex": 2,
        "explanation": "This is the"
    },
    {
        "id": "ch25-l3-q12",
        "question": "Consider the phenomenon where the Speaker of the Lok Sabha curates the list of MPs who will form the",
        "options": ["The Speaker must randomly select names from a lottery system mandated by the Election Commission.","The Speaker only selects members from the ruling party to ensure a unified message is presented abroad.","While possessing discretionary authority as the IPG President, the Speaker invariably ensures the delegation is broadly representative of the numerical strength of various political parties in Parliament, including prominent opposition leaders, to reflect the true, multi-vocal democratic character of the Indian legislature.","The Speaker must delegate the selection entirely to the Ministry of External Affairs."],
        "correctAnswerIndex": 2,
        "explanation": "If an IPU conference hears 10 Indian MPs all praising the Indian Prime Minister flawlessly, it looks like a dictatorship. The strength of a democracy is its diversity. The Speaker deliberately includes firebrand opposition MPs. When an opposition MP goes to Geneva and defends India"
    },
    {
        "id": "ch25-l3-q13",
        "question": "Assertion (A): The Indian Parliamentary Group (IPG) actively supersedes the jurisdiction of the Privileges Committee by independently punishing",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are completely false. The Privileges Committee of the House is a powerful, formal body dealing with breaches by sitting MPs or outsiders. The IPG is essentially a diplomatic club. It has absolutely zero disciplinary or quasi-judicial powers over MPs or former MPs regarding parliamentary decorum."
    },
    {
        "id": "ch25-l3-q14",
        "question": "If a severe diplomatic crisis erupts between India and another Commonwealth nation resulting in the expulsion of High Commissioners, how might the Commonwealth Parliamentary Association (CPA) structure—facilitated through the IPG—offer a unique avenue for de-escalation?",
        "options": ["The CPA has the authority to threaten military intervention against the offending nation.","The IPG can unilaterally order the Indian Navy to blockade the other nation under CPA rules.","The IPG can deploy its network of parliamentarians to initiate","diplomacy. While official executive relations are frozen, Indian MPs can leverage long-standing personal relationships forged at previous CPA conferences with legislators from the adversarial nation to maintain a backchannel dialogue, seeking off-the-record avenues for compromise.","The CPA forces both nations to submit to binding arbitration in London."],
        "correctAnswerIndex": 2,
        "explanation": "This is the exact utility of groups like the IPG and associations like the CPA. When the formal doors are slammed shut (ambassadors expelled, PMs refusing to talk), the informal doors remain open. Because MPs have spent years networking at CPA conferences, an Indian opposition MP can quietly call a friend in the other country"
    },
    {
        "id": "ch25-l3-q15",
        "question": "Examine the philosophical justification for utilizing tax-payer funds to support the administrative functions of the IPG, despite its",
        "options": ["The Supreme Court declared that all autonomous bodies must receive 1% of the Union Budget.","It essentially functions as a critical, albeit informal, institutional upgrade. In a globally interconnected world, a legislature composed of insular politicians is dangerous. Funding the IPG","Core Legislature","It is required to prevent the United Nations from sanctioning India.","It is a loophole to bypass the Election Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Why pay for an MP to go to a seminar or fly to Geneva? Because an ignorant MP passes bad laws. If an Indian MP travels to Scandinavia via the IPG, sees their public transport system, and returns to demand better policy in the Lok Sabha, the taxpayer investment pays off. The IPG is an investment in the intellectual capital of the Parliament."
    },
    {
        "id": "ch25-l3-q16",
        "question": "When the IPG acts to \\",
        "options": ["The inability of MPs to secure lucrative private sector jobs after retiring.","The constitutional ban on MPs speaking to members of opposing parties outside the chamber.","The hyper-partisanship and hostility intrinsic to the","of adversarial politics. By providing a neutral, non-legislative forum (dinners, seminars, foreign trips), the IPG forces bitterly opposed politicians out of their toxic silos, fostering the human-to-human relationships necessary to achieve consensus on critical national issues.","The lack of adequate seating in the Central Hall."],
        "correctAnswerIndex": 2,
        "explanation": "Parliament is designed for conflict (Government vs Opposition). If politicians only interact while screaming at each other across the floor, the system breaks down. They need spaces where they aren"
    },
    {
        "id": "ch25-l3-q17",
        "question": "What differentiates the",
        "options": ["Life members pay a one-time fee and can vote; Associate Members pay annually and cannot vote.","Associate members can travel abroad for the IPU; Life members cannot.","There is no concept of a privileged","that retains Executive voting power for ex-MPs. Once an MP ceases to be a sitting member, they automatically default to the status of an Associate Member, deliberately stripped of the democratic authority to vote or represent the active institution, regardless of past seniority.","Associate members are appointed by the President; Life members are elected."],
        "correctAnswerIndex": 2,
        "explanation": "Power in Parliament flows strictly from the mandate of the people. The second you lose an election, you lose power. The IPG respects this. A former Prime Minister who loses his seat can remain in the IPG, but only as a toothless"
    },
    {
        "id": "ch25-l3-q18",
        "question": "If the ruling government introduces a complex",
        "options": ["The IPG has the authority to veto the JPC","The IPG can subpoena the CEOs of foreign tech companies to testify under oath, whereas the JPC cannot.","While the JPC conducts the slow, grueling, clause-by-clause legal dissection of the bill involving formal witness testimonies, the IPG might swiftly arrange a high-level symposium with global tech experts to give the broader MP base a rapid, conceptual education on cybersecurity threats, elevating the general debate in the House when the JPC finally tables its report.","The IPG replaces the JPC if the JPC fails to submit its report in time."],
        "correctAnswerIndex": 2,
        "explanation": "The JPC is a legal scalpel. It works slowly and methodically. The IPG is a megaphone for knowledge. Not every MP is on the JPC. When the JPC report comes to the floor, 500 MPs have to vote on it. The IPG ensures those 500 MPs aren"
    },
    {
        "id": "ch25-l3-q19",
        "question": "Assertion (A): The Inter-Parliamentary Union (IPU) functions as a parallel United Nations, possessing the authority to deploy peacekeeping forces if member parliaments agree on a resolution.\\nReason (R): Because the IPU",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "The IPU has ZERO military, economic, or executive power. It cannot deploy a single soldier or sanction a single country. It is purely a conversational arena for legislators. It predates the UN (founded in 1889) and works *with* the UN, but it absolutely does not have the"
    },
    {
        "id": "ch25-l3-q20",
        "question": "Consider the constitutional paradox of Parliamentary Groups and Forums. Despite operating without formal constitutional or statutory anchoring, they exercise immense influence. What unwritten principle of parliamentary democracy primarily sustains their legitimacy and operational power?",
        "options": ["The doctrine of",", which states all groups formed by MPs become parts of the core constitution.","The legal precedent set by the","case, which granted autonomous bodies judicial immunity.","The principle of",". By embedding themselves within the administrative machinery of the Speaker (the preserver of the House","soft legitimacy","The threat of moving a","against the government."],
        "correctAnswerIndex": 2,
        "explanation": "How does a"
    }
];

export const CHAPTER_25_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
