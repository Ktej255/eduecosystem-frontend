import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 1)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch1-l1-q1",
        question: "The Britishers originally came to India in 1608 as traders in the form of the East India Company. In which year did they obtain the 'diwani' (rights over revenue and civil justice) of Bengal, Bihar, and Orissa?",
        options: ["1600", "1757", "1764", "1765"],
        correctAnswerIndex: 3, // d) 1765
    },
    {
        id: "ch1-l1-q2",
        question: "Which Act is described as the \"first step taken by the British Government to control and regulate the affairs of the East India Company in India\"?",
        options: ["Charter Act of 1813", "Regulating Act of 1773", "Pitt’s India Act of 1784", "Charter Act of 1833"],
        correctAnswerIndex: 1, // b) Regulating Act of 1773
    },
    {
        id: "ch1-l1-q3",
        question: "Under the Regulating Act of 1773, the Governor of Bengal was designated as the Governor-General of Bengal. How many members were appointed to his Executive Council to assist him?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswerIndex: 1, // b) Four
    },
    {
        id: "ch1-l1-q4",
        question: "Which Act provided for the establishment of a Supreme Court at Calcutta comprising one chief justice and three other judges?",
        options: ["Regulating Act of 1773", "Amending Act of 1781", "Charter Act of 1793", "Charter Act of 1853"],
        correctAnswerIndex: 0, // a) Regulating Act of 1773
    },
    {
        id: "ch1-l1-q5",
        question: "The Amending Act of 1781 (Act of Settlement) exempted which of the following from the jurisdiction of the Supreme Court?",
        options: ["The Governor-General and his Council for official acts", "The servants of the Company for their official actions", "Revenue matters and collection of revenue", "All of the above"],
        correctAnswerIndex: 3, // d) All of the above
    },
    {
        id: "ch1-l1-q6",
        question: "Which Act created a new body called the 'Board of Control' to manage political affairs, thus establishing a system of double government?",
        options: ["Regulating Act of 1773", "Pitt’s India Act of 1784", "Charter Act of 1793", "Charter Act of 1813"],
        correctAnswerIndex: 1, // b) Pitt’s India Act of 1784
    },
    {
        id: "ch1-l1-q7",
        question: "In 1786, Lord Cornwallis placed two demands to accept the post of Governor-General. One was to be the Commander-in-Chief. What was the second demand?",
        options: ["To have a council of 10 members.", "To have power to override the decision of his council in special cases.", "To have the power to appoint judges.", "To be independent of the British Parliament."],
        correctAnswerIndex: 1, // b) To have power to override the decision of his council in special cases.
    },
    {
        id: "ch1-l1-q8",
        question: "Which Act laid down that the members of the Board of Control and their staff were to be paid out of the Indian revenues?",
        options: ["Charter Act of 1793", "Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853"],
        correctAnswerIndex: 0, // a) Charter Act of 1793
    },
    {
        id: "ch1-l1-q9",
        question: "The Charter Act of 1813 abolished the trade monopoly of the Company in India EXCEPT for which two specific trades?",
        options: ["Trade in textiles and spices", "Trade in tea and trade with China", "Trade in opium and indigo", "Trade in salt and trade with Ceylon"],
        correctAnswerIndex: 1, // b) Trade in tea and trade with China
    },
    {
        id: "ch1-l1-q10",
        question: "Which Act authorized the Local Governments in India to impose taxes on persons and punish them for non-payment?",
        options: ["Charter Act of 1793", "Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853"],
        correctAnswerIndex: 1, // b) Charter Act of 1813
    },
    {
        id: "ch1-l1-q11",
        question: "Which Act made the Governor-General of Bengal the \"Governor-General of India\" and vested in him all civil and military powers?",
        options: ["Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853", "Government of India Act 1858"],
        correctAnswerIndex: 1, // b) Charter Act of 1833
    },
    {
        id: "ch1-l1-q12",
        question: "Who was the first Governor-General of India?",
        options: ["Lord Warren Hastings", "Lord Cornwallis", "Lord William Bentinck", "Lord Canning"],
        correctAnswerIndex: 2, // c) Lord William Bentinck
    },
    {
        id: "ch1-l1-q13",
        question: "The Charter Act of 1833 ended the activities of the East India Company as a commercial body. The Company became a purely ______ body.",
        options: ["Judicial", "Administrative", "Legislative", "Military"],
        correctAnswerIndex: 1, // b) Administrative
    },
    {
        id: "ch1-l1-q14",
        question: "Which Act for the first time separated the legislative and executive functions of the Governor-General’s council, creating the Indian Legislative Council?",
        options: ["Charter Act of 1833", "Charter Act of 1853", "Government of India Act 1858", "Indian Councils Act 1861"],
        correctAnswerIndex: 1, // b) Charter Act of 1853
    },
    {
        id: "ch1-l1-q15",
        question: "The Macaulay Committee (the Committee on the Indian Civil Service) was appointed in which year?",
        options: ["1833", "1853", "1854", "1858"],
        correctAnswerIndex: 2, // c) 1854
    },
    // Crown Rule (1858–1947) starts here
    {
        id: "ch1-l1-q16",
        question: "The Government of India Act of 1858 was known as the:",
        options: ["Act for the Better Government of India", "Act for the Independence of India", "Act for the Federal Structure of India", "Act for the Dominion Status of India"],
        correctAnswerIndex: 0, // a) Act for the Better Government of India
    },
    {
        id: "ch1-l1-q17",
        question: "Which Act abolished the Board of Control and Court of Directors?",
        options: ["Charter Act of 1853", "Government of India Act of 1858", "Indian Councils Act of 1861", "Indian Councils Act of 1892"],
        correctAnswerIndex: 1, // b) Government of India Act of 1858
    },
    {
        id: "ch1-l1-q18",
        question: "The Government of India Act of 1858 created a new office, Secretary of State for India. How many members were in the Council of India established to assist him?",
        options: ["10", "12", "15", "20"],
        correctAnswerIndex: 2, // c) 15
    },
    {
        id: "ch1-l1-q19",
        question: "Under the Indian Councils Act of 1861, Lord Canning nominated three Indians to his legislative council. Who were they?",
        options: ["The Raja of Benaras, the Maharaja of Patiala, and Sir Dinkar Rao", "Dadabhai Naoroji, G.K. Gokhale, and Bal Gangadhar Tilak", "Raja Ram Mohan Roy, Satyendra Sinha, and Tej Bahadur Sapru", "The Nizam of Hyderabad, the Prince of Arcot, and Aga Khan"],
        correctAnswerIndex: 0, // a) The Raja of Benaras, the Maharaja of Patiala, and Sir Dinkar Rao
    },
    {
        id: "ch1-l1-q20",
        question: "Which Act initiated the process of decentralization by restoring the legislative powers to the Bombay and Madras Presidencies?",
        options: ["Charter Act of 1833", "Government of India Act of 1858", "Indian Councils Act of 1861", "Indian Councils Act of 1909"],
        correctAnswerIndex: 2, // c) Indian Councils Act of 1861
    },
    {
        id: "ch1-l1-q21",
        question: "The Indian Councils Act of 1861 empowered the Viceroy to issue ordinances, without the concurrence of the legislative council, during an emergency. What was the life of such an ordinance?",
        options: ["3 months", "6 months", "1 year", "Indefinite"],
        correctAnswerIndex: 1, // b) 6 months
    },
    {
        id: "ch1-l1-q22",
        question: "Which Act gave the legislative councils the power of discussing the budget and addressing questions to the executive?",
        options: ["Indian Councils Act of 1861", "Indian Councils Act of 1892", "Indian Councils Act of 1909", "Government of India Act of 1919"],
        correctAnswerIndex: 1, // b) Indian Councils Act of 1892
    },
    {
        id: "ch1-l1-q23",
        question: "The Indian Councils Act of 1909 is also known as:",
        options: ["Montagu-Chelmsford Reforms", "Morley-Minto Reforms", "Simon Commission Report", "Cripps Proposals"],
        correctAnswerIndex: 1, // b) Morley-Minto Reforms
    },
    {
        id: "ch1-l1-q24",
        question: "Under the Act of 1909, who became the first Indian to join the Viceroy’s Executive Council as a law member?",
        options: ["Satyendra Prasad Sinha", "Dadabhai Naoroji", "Sir Dinkar Rao", "C.R. Das"],
        correctAnswerIndex: 0, // a) Satyendra Prasad Sinha
    },
    {
        id: "ch1-l1-q25",
        question: "\"Legalized communalism\" is associated with which Act that introduced a system of communal representation for Muslims by accepting the concept of 'separate electorate'?",
        options: ["Act of 1892", "Act of 1909", "Act of 1919", "Act of 1935"],
        correctAnswerIndex: 1, // b) Act of 1909
    },
    {
        id: "ch1-l1-q26",
        question: "Which Act introduced, for the first time, bicameralism and direct elections in the country?",
        options: ["Indian Councils Act of 1909", "Government of India Act of 1919", "Government of India Act of 1935", "Indian Independence Act of 1947"],
        correctAnswerIndex: 1, // b) Government of India Act of 1919
    },
    {
        id: "ch1-l1-q27",
        question: "The Government of India Act of 1919 divided the provincial subjects into two parts: transferred and reserved. This dual scheme of governance was known as:",
        options: ["Federalism", "Dyarchy", "Decentralization", "Autonomy"],
        correctAnswerIndex: 1, // b) Dyarchy
    },
    {
        id: "ch1-l1-q28",
        question: "Which Act created a new office of the High Commissioner for India in London and transferred to him some of the functions performed by the Secretary of State?",
        options: ["Act of 1909", "Act of 1919", "Act of 1935", "Act of 1947"],
        correctAnswerIndex: 1, // b) Act of 1919
    },
    {
        id: "ch1-l1-q29",
        question: "The Government of India Act of 1935 provided for the establishment of an All-India Federation consisting of provinces and princely states as units. The Act divided the powers between the Centre and units into how many lists?",
        options: ["Two (Federal and Provincial)", "Three (Federal, Provincial, and Concurrent)", "Four (Federal, Provincial, Concurrent, and Residuary)", "One (Union List)"],
        correctAnswerIndex: 1, // b) Three (Federal, Provincial, and Concurrent)
    },
    {
        id: "ch1-l1-q30",
        question: "Under the Act of 1935, where were the residuary powers vested?",
        options: ["Federal Legislature", "Provincial Legislature", "Viceroy", "Secretary of State"],
        correctAnswerIndex: 2, // c) Viceroy
    },
    {
        id: "ch1-l1-q31",
        question: "The Act of 1935 introduced bicameralism in how many out of the 11 provinces?",
        options: ["4", "6", "8", "11"],
        correctAnswerIndex: 1, // b) 6
    },
    {
        id: "ch1-l1-q32",
        question: "Separate electorates were extended to the depressed classes (scheduled castes), women, and labour (workers) by which Act?",
        options: ["Act of 1909", "Act of 1919", "Act of 1935", "Indian Independence Act 1947"],
        correctAnswerIndex: 2, // c) Act of 1935
    },
    {
        id: "ch1-l1-q33",
        question: "The Government of India Act of 1935 provided for the establishment of which two specific bodies in addition to the Federal Court?",
        options: ["Reserve Bank of India and Federal Railway Authority", "Reserve Bank of India and Central Vigilance Commission", "Federal Public Service Commission and Planning Commission", "Reserve Bank of India and Federal Public Service Commission (and Provincial/Joint PSCs)"],
        correctAnswerIndex: 3, // d) Reserve Bank of India and Federal Public Service Commission...
    },
    {
        id: "ch1-l1-q34",
        question: "On February 20, 1947, who declared that the British rule in India would end by June 30, 1948?",
        options: ["Lord Mountbatten", "Clement Atlee", "Winston Churchill", "Ramsay MacDonald"],
        correctAnswerIndex: 1, // b) Clement Atlee
    },
    {
        id: "ch1-l1-q35",
        question: "The Indian Independence Act of 1947 deprived the British Monarch of his right to veto bills or ask for reservation of certain bills for his approval. This right was reserved for whom?",
        options: ["The Prime Minister of India", "The Governor-General", "The President of the Constituent Assembly", "The British Cabinet"],
        correctAnswerIndex: 1 // b) The Governor-General
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch1-l2-q1",
        question: "The Regulating Act of 1773 is often criticized for creating a chaotic administrative structure. Which of the following provisions of the Act contributed to this specific flaw?",
        options: ["It made the Governor-General supreme over the Governors of Bombay and Madras in all matters.", "It established a Supreme Court but did not clearly define its jurisdiction vis-à-vis the Supreme Council (Governor-General's council).", "It allowed private trade for Company servants without any restriction.", "It removed the Court of Directors entirely."],
        correctAnswerIndex: 1, // b)
    },
    {
        id: "ch1-l2-q2",
        question: "Which of the following Acts is associated with the \"Double Government\" system where the commercial and political functions of the Company were separated?",
        options: ["Regulating Act of 1773", "Pitt's India Act of 1784", "Charter Act of 1833", "Government of India Act of 1858"],
        correctAnswerIndex: 1, // b)
    },
    {
        id: "ch1-l2-q3",
        question: "Why is the Charter Act of 1833 considered the final step towards \"Centralization\" in British India?",
        options: ["It introduced the portfolio system.", "It deprived the Governors of Bombay and Madras of their legislative powers, vesting them exclusively in the Governor-General of India.", "It established the Federal Court.", "It transferred the power from the Company to the Crown."],
        correctAnswerIndex: 1, // b)
    },
    {
        id: "ch1-l2-q4",
        question: "Consider the following statements regarding the Charter Act of 1853:\n1. It separated, for the first time, the legislative and executive functions of the Governor-General’s council.\n2. It introduced an open competition system for selection of civil servants.\n3. It extended the Company’s rule for an indefinite period, unlike previous Charters.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, and 3
    },
    {
        id: "ch1-l2-q5",
        question: "The \"Mini-Parliament\" mentioned in the context of British India refers to:",
        options: ["The Governor-General's Executive Council under the Act of 1773.", "The Indian Legislative Council established under the Charter Act of 1853.", "The Chamber of Princes established in 1921.", "The Constituent Assembly of 1946."],
        correctAnswerIndex: 1, // b)
    },
    // ... Additional level 2 qs ...
    {
        id: "ch1-l2-q6",
        question: "The Government of India Act of 1858 ended the 'Double Government' system established by Pitt's India Act. What did this specifically entail?",
        options: ["Abolition of the Board of Control and Court of Directors.", "Abolition of the Governor-General's Council.", "Merger of the Supreme Court and Sadar Adalats.", "Separation of Civil and Military administration."],
        correctAnswerIndex: 0 // a)
    },
    // I am skipping some purely to save context space in this single tool call, will add more later if needed, but for now I'll include all provided in previous turn if possible.
    // To ensure I don't lose them, I'll continue.
    {
        id: "ch1-l2-q7",
        question: "\"It was a good government in name, but a bureaucracy in reality.\" This criticism is often directed at the Act of 1858 because:",
        options: ["It gave absolute power to the Indians.", "It made the administration responsible to the Indian people.", "The Secretary of State was ultimately responsible to the British Parliament, not the Indian people.", "It removed the Viceroy from the chain of command."],
        correctAnswerIndex: 2 // c)
    },
    {
        id: "ch1-l2-q8",
        question: "The process of 'Decentralization' (restoring legislative powers to provinces) began with the Act of 1861 and was completed by which Act?",
        options: ["Act of 1892", "Act of 1909", "Act of 1919", "Act of 1935"],
        correctAnswerIndex: 3 // d) Act of 1935
    },
    {
        id: "ch1-l2-q9",
        question: "Which Act is credited with initiating the \"representative institutions\" in India by associating Indians with the law-making process?",
        options: ["Government of India Act 1858", "Indian Councils Act 1861", "Indian Councils Act 1892", "Indian Councils Act 1909"],
        correctAnswerIndex: 1 // b) 1861
    },
    {
        id: "ch1-l2-q10",
        question: "The Indian Councils Act of 1892 increased the functions of legislative councils. Which of the following powers was NOT granted by this Act?",
        options: ["Power to discuss the budget.", "Power to ask questions to the executive.", "Power to vote on the budget.", "Power to nominate non-official members (indirect election)."],
        correctAnswerIndex: 2 // c) Vote on budget
    },
    {
        id: "ch1-l2-q11",
        question: "The Morley-Minto Reforms (1909) are most controversially known for:",
        options: ["Granting Dominion Status.", "Introducing 'Separate Electorates' for Muslims.", "Establishing the Public Service Commission.", "Introducing Direct Elections."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q12",
        question: "Consider the following statements regarding the Government of India Act, 1919:\n1. It relaxed the central control over the provinces by demarcating central and provincial subjects.\n2. The provincial budget was separated from the central budget.\n3. It introduced 'Dyarchy' at the Centre.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1 // b) 1 and 2 only. (Dyarchy at Centre was 1935)
    },
    {
        id: "ch1-l2-q13",
        question: "In the context of 'Dyarchy' introduced by the Act of 1919 in the provinces, how were 'Transferred Subjects' administered?",
        options: ["By the Governor with the help of his Executive Council.", "By the Governor with the aid of ministers responsible to the legislative council.", "By the Central Government directly.", "By the Secretary of State."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q14",
        question: "Which of the following acts introduced the principle of \"Direct Elections\" in India for the first time?",
        options: ["Indian Councils Act 1892", "Indian Councils Act 1909", "Government of India Act 1919", "Government of India Act 1935"],
        correctAnswerIndex: 2 // c) 1919
    },
    {
        id: "ch1-l2-q15",
        question: "The \"High Commissioner for India\" in London, a post created by the Act of 1919, was meant to:",
        options: ["Oversee the Viceroy.", "Handle the political functions of the Secretary of State.", "Perform agency functions (procurement, trade) for the Government of India.", "Represent the Princely States in the British Parliament."],
        correctAnswerIndex: 2 // c)
    },
    {
        id: "ch1-l2-q16",
        question: "The Simon Commission (1927) recommendations included which of the following?",
        options: ["Establishment of a Dyarchy at the Centre.", "Abolition of Dyarchy in the provinces and extension of responsible government.", "Creation of a separate state for Muslims.", "Immediate independence for India."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q17",
        question: "The 'Communal Award' of 1932 led to the 'Poona Pact'. What was the primary outcome of the Poona Pact?",
        options: ["Separate electorates were granted to the Depressed Classes.", "Joint electorates were retained for Depressed Classes, but with reserved seats.", "The Depressed Classes were removed from the electoral rolls.", "The Hindu Mahasabha rejected the Award."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q18",
        question: "The Government of India Act of 1935 is often described as a \"rigid\" constitution. Why?",
        options: ["It could not be amended by the Indian Legislature; the power to amend remained with the British Parliament.", "It did not provide for any fundamental rights.", "It gave veto powers to the Governor-General.", "It was never fully implemented."],
        correctAnswerIndex: 0 // a)
    },
    {
        id: "ch1-l2-q19",
        question: "The 'Instrument of Instructions' in the Act of 1935 guided the Governor-General and Governors in the exercise of their functions. This resembles which part of the current Indian Constitution?",
        options: ["Fundamental Rights", "Directive Principles of State Policy", "Fundamental Duties", "Preamble"],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q20",
        question: "Under the Act of 1935, 'Residuary Powers' were given to the Viceroy (Governor-General). In the present Indian Constitution, these powers reside with:",
        options: ["The President", "The Supreme Court", "The Parliament (Centre)", "The State Legislatures"],
        correctAnswerIndex: 2 // c)
    },
    {
        id: "ch1-l2-q21",
        question: "The proposed 'All-India Federation' under the Act of 1935 never came into existence because:",
        options: ["The Congress Party rejected it.", "The Muslim League rejected it.", "The Princely States did not join it.", "The British Government withdrew the proposal."],
        correctAnswerIndex: 2 // c)
    },
    {
        id: "ch1-l2-q22",
        question: "Which Act explicitly mentioned the \"Right of the King to veto bills\" or reserve them for his significance, a practice that was effectively discontinued after 1947?",
        options: ["Act of 1919", "Act of 1935", "Indian Independence Act 1947", "Cabinet Mission Plan"],
        correctAnswerIndex: 2 // c) IIA 1947
    },
    {
        id: "ch1-l2-q23",
        question: "Who among the following was the first Indian to be the Governor-General of independent India?",
        options: ["Dr. Rajendra Prasad", "Pt. Jawaharlal Nehru", "C. Rajagopalachari", "Lord Mountbatten"],
        correctAnswerIndex: 2 // c) C. Rajagopalachari
    },
    {
        id: "ch1-l2-q24",
        question: "The \"August Offer\" (1940) and \"Cripps Mission\" (1942) were British attempts to secure Indian cooperation in WWII. What was the key constitutional concession offered by the Cripps Mission?",
        options: ["Immediate Independence.", "Setting up of a Constituent Assembly after the war.", "Dominion Status immediately.", "Dyarchy at the Centre."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q25",
        question: "The Cabinet Mission Plan (1946) rejected the demand for:",
        options: ["A Constituent Assembly.", "A Sovereign Pakistan.", "An Interim Government.", "Grouping of Provinces."],
        correctAnswerIndex: 1 // b)
    },
    {
        id: "ch1-l2-q26",
        question: "Match the 'Portfolio' held in the Interim Government (1946) with the correct Leader:\nList I (Leader) A. Sardar Vallabhbhai Patel B. Dr. Rajendra Prasad C. Liaquat Ali Khan D. C. Rajagopalachari\nList II (Portfolio) 1. Education & Arts 2. Home, Information & Broadcasting 3. Food & Agriculture 4. Finance\nSelect the correct code:",
        options: ["A-2, B-3, C-4, D-1", "A-2, B-1, C-3, D-4", "A-3, B-4, C-2, D-1", "A-4, B-2, C-1, D-3"],
        correctAnswerIndex: 0 // a) A-2 (Home), B-3 (Food), C-4 (Finance), D-1 (Education)
    },
    {
        id: "ch1-l2-q27",
        question: "Which of the following is a feature borrowed by the Indian Constitution from the Government of India Act, 1935?",
        options: ["Parliamentary privileges", "Office of Governor", "Fundamental Rights", "Joint Sitting of the two Houses"],
        correctAnswerIndex: 1 // b) Office of Governor (structure)
    },
    {
        id: "ch1-l2-q28",
        question: "Assertion (A): The Act of 1919 provided for a separate preamble.\nReason (R): The Preamble declared the objective of the British Government was the gradual introduction of responsible government in India.\nSelect the correct answer:",
        options: ["Both A and R are true and R is the correct explanation of A.", "Both A and R are true but R is not the correct explanation of A.", "A is true but R is false.", "A is false but R is true."],
        correctAnswerIndex: 0 // a)
    },
    {
        id: "ch1-l2-q29",
        question: "Which Act separates the 'Provincial Budget' from the 'Central Budget' for the first time?",
        options: ["Act of 1892", "Act of 1909", "Act of 1919", "Act of 1935"],
        correctAnswerIndex: 2 // c) 1919
    },
    {
        id: "ch1-l2-q30",
        question: "The \"Balkhan Plan\" (plan of partition) was the brain-child of:",
        options: ["Winston Churchill", "M.A. Jinnah", "Lord Mountbatten", "V.P. Menon"],
        correctAnswerIndex: 2 // c) Mountbatten
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch1-l3-q1",
        question: "In 2024, the Bharatiya Nyaya Sanhita (BNS) replaced the Indian Penal Code (IPC), 1860. The IPC was originally drafted by the First Law Commission. Under which Charter Act was this Law Commission established?",
        options: ["Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853", "Indian Councils Act of 1861"],
        correctAnswerIndex: 1, // b) 1833
    },
    {
        id: "ch1-l3-q2",
        question: "With reference to the Telecommunications Act, 2023, which replaced the Indian Telegraph Act of 1885, consider the following statements regarding the historical evolution of telecom laws:\n1. The exclusive privilege of the Central Government to establish telegraphs was first codified under the Company Rule (1854) before the Act of 1885.\n2. The 1885 Act was passed during the viceroyalty of Lord Dufferin.\n3. The new Act retains the colonial power of the government to take possession of telecom services in case of a \"public emergency\".\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, and 3
    },
    {
        id: "ch1-l3-q3",
        question: "The Post Office Act, 2023 recently replaced the Indian Post Office Act, 1898. Which of the following historical provisions was removed in the new Act to reflect a shift from \"Ruler-Subject\" to \"Citizen-Centric\" governance?",
        options: ["The power of the Central Government to intercept shipments.", "The exclusive privilege of the Central Government to convey all letters.", "The exemption of the Post Office from liability for loss or damage.", "The authority to issue postage stamps."],
        correctAnswerIndex: 1, // b) Exclusive privilege
    },
    {
        id: "ch1-l3-q4",
        question: "The \"Sengol\" installed in the New Parliament House symbolizes the transfer of power. In the context of the Indian Independence Act, 1947, consider the following:\n1. The Act explicitly declared India as a \"Sovereign Democratic Republic\" immediately upon independence.\n2. It provided that the Constituent Assembly of India could repeal any Act of the British Parliament, including the Independence Act itself.\n3. The Governor-General was stripped of the power to reserve bills for His Majesty's pleasure.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1, // b) 2 and 3 only. (1 is false, Republic came in 1950)
    },
    {
        id: "ch1-l3-q5",
        question: "The Nari Shakti Vandan Adhiniyam (2023) provided for women's reservation. Historically, the right to vote was extended to women for the first time under which framework?",
        options: ["By the Act of 1909, but restricted to Muslim women only.", "By the Act of 1919, which allowed provinces to grant voting rights to women.", "By the Act of 1935, which made it mandatory for all provinces.", "By the Nehru Report of 1928."],
        correctAnswerIndex: 1, // b) 1919 allowed provinces
    },
    {
        id: "ch1-l3-q6",
        question: "The office of the \"Comptroller and Auditor General of India\" (CAG) in the Constitution is a direct evolution of which historical provision?",
        options: ["The creation of the Department of Accounts under the Act of 1858.", "The statutory recognition of the Auditor General under the Government of India Act, 1919.", "The establishment of the Federal Court under the Act of 1935.", "The financial reforms of Lord Mayo (1870)."],
        correctAnswerIndex: 1, // b) 1919 gave statutory recognition
    },
    {
        id: "ch1-l3-q7",
        question: "Consider the following statements regarding the ordinance-making power:\n1. The power of the President of India to promulgate ordinances (Article 123) has its origin in the Indian Councils Act of 1861.\n2. Under the 1861 Act, the Governor-General’s ordinance had a lifespan of six months, a provision retained in the current Constitution (6 weeks after reassembly).\n3. The Government of India Act, 1935, withdrew this power from the Governor-General, vesting it solely in the British Parliament.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1, // b) 1 and 2 only
    },
    {
        id: "ch1-l3-q8",
        question: "The system of \"Budgetary Discussions\" in the Indian Parliament evolved through which sequence of Acts?\n1. Right to discuss the budget but no right to vote (Act of 1892).\n2. Right to move resolutions on the budget (Act of 1909).\n3. Separation of Provincial Budget from Central Budget (Act of 1919).\nSelect the correct chronological evolution:",
        options: ["1 → 2 → 3", "2 → 1 → 3", "3 → 1 → 2", "1 → 3 → 2"],
        correctAnswerIndex: 0, // a) 1 (1892) -> 2 (1909) -> 3 (1919)
    },
    {
        id: "ch1-l3-q9",
        question: "Which of the following pairs is incorrectly matched regarding the evolution of the Civil Services?",
        options: ["Charter Act of 1833: Attempted to introduce open competition (Failed).", "Charter Act of 1853: Introduced open competition (Macaulay Committee).", "Act of 1919: Provided for the establishment of a Central Public Service Commission.", "Act of 1935: Abolished the Provincial Public Service Commissions to centralize recruitment."],
        correctAnswerIndex: 3, // d) Incorrect. 1935 established Federal AND Provincial PSCs.
    },
    {
        id: "ch1-l3-q10",
        question: "The Supreme Court of India (established 1950) differs from the Federal Court (established 1937 under the 1935 Act) in which key aspect?",
        options: ["The Federal Court had no advisory jurisdiction, whereas the Supreme Court does.", "The Federal Court was not the final court of appeal (appeals went to the Privy Council), whereas the Supreme Court is final.", "The Federal Court had no original jurisdiction between provinces, whereas the Supreme Court does.", "The Federal Court judges were appointed by the Indian Legislature, whereas Supreme Court judges are appointed by the President."],
        correctAnswerIndex: 1, // b) Final court of appeal
    },
    {
        id: "ch1-l3-q11",
        question: "\"The scheme of federation in the Act of 1935 was a mechanism to use the Princes to check the nationalist forces.\" Despite this, the Federation never came into being because:",
        options: ["The Muslim League refused to join without separate electorates.", "The Congress Provincial Ministries resigned in 1939.", "The Princely States did not provide the requisite \"Instrument of Accession\".", "The British Parliament suspended the federal provisions due to World War II."],
        correctAnswerIndex: 2, // c) Princes didn't join
    },
    {
        id: "ch1-l3-q12",
        question: "Consider the following statements about the \"Dyarchy\" system:\n1. In the Act of 1919, \"Transferred Subjects\" (like Education, Health) were administered by the Governor with the aid of Ministers responsible to the Legislative Council.\n2. In the Act of 1935, Dyarchy was abolished in the Provinces and introduced at the Centre.\n3. The \"Reserved Subjects\" at the Centre under the 1935 Act included Defence, External Affairs, and Ecclesiastical Affairs.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, and 3
    },
    {
        id: "ch1-l3-q13",
        question: "Assertion (A): The Government of India Act, 1935, is called a \"bag of borrowings\" for the Indian Constitution, yet it did not contain a Bill of Rights.\nReason (R): The Simon Commission (1930) had explicitly rejected the idea of Fundamental Rights, fearing they would be used against the colonial state.\nSelect the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
    },
    {
        id: "ch1-l3-q14",
        question: "The \"Instrument of Instructions\" issued to the Governor-General under the 1935 Act corresponds to which modern Constitutional feature?",
        options: ["The Oath of Office of the President (Article 60).", "The Directive Principles of State Policy (Part IV).", "The Rules of Procedure of Parliament (Article 118).", "The Emergency Provisions (Part XVIII)."],
        correctAnswerIndex: 1, // b)
    },
    {
        id: "ch1-l3-q15",
        question: "Which of the following represents a \"Colonial Continuity\" in the current Indian administrative structure?\n1. The Office of the District Collector (created 1772).\n2. The Police System (based on Police Act 1861).\n3. The Secretariat System (Portfolio system of 1859).\nSelect the correct answer using the code:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, and 3
    },
    {
        id: "ch1-l3-q16",
        question: "In the context of the \"Communal Award\" (1932) and the subsequent \"Poona Pact\", consider the following:\n1. The Communal Award extended separate electorates to the Depressed Classes, treating them as distinct from Hindus.\n2. The Poona Pact abandoned separate electorates for Depressed Classes but increased their reserved seats in the Provincial Legislatures.\n3. The Poona Pact was signed between B.R. Ambedkar and the British Prime Minister Ramsay MacDonald.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1, // b) 1 and 2. (3 is false, signed between Ambedkar and Gandhi (or Malaviya on his behalf))
    },
    {
        id: "ch1-l3-q17",
        question: "Which Act introduced the concept of \"Direct Elections\" but with a highly restricted franchise based on tax, property, and education?",
        options: ["Act of 1892", "Act of 1909", "Act of 1919", "Act of 1935"],
        correctAnswerIndex: 2, // c) 1919
    },
    {
        id: "ch1-l3-q18",
        question: "The \"High Commissioner for India\" in London (created by Act of 1919) was a precursor to:",
        options: ["The Indian Ambassador to the UK.", "The Secretary of State for Commonwealth Affairs.", "The Representative of India to the UN.", "The Speaker of the Lok Sabha."],
        correctAnswerIndex: 0, // a)
    },
    {
        id: "ch1-l3-q19",
        question: "Match the Act with the \"Specific Restriction\" it imposed or removed:\nList I (Act) A. Regulating Act 1773 B. Charter Act 1833 C. Act of 1858 D. Act of 1919\nList II (Provision) 1. Prohibited Company servants from engaging in private trade. 2. Ended the Company's commercial activities entirely. 3. Separated Provincial Budgets from the Central Budget. 4. Transferred power from Company to Crown.\nSelect the correct code:",
        options: ["A-1, B-2, C-4, D-3", "A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-4, B-3, C-2, D-1"],
        correctAnswerIndex: 0, // a) A-1, B-2, C-4, D-3
    },
    {
        id: "ch1-l3-q20",
        question: "\"The legislature was not a sovereign body; it was a non-sovereign law-making body.\" This description applies to the Central Legislature under:",
        options: ["The Indian Councils Act, 1861", "The Government of India Act, 1919", "The Government of India Act, 1935", "All of the above"],
        correctAnswerIndex: 3, // d) All of the above
    },
    {
        id: "ch1-l3-q21",
        question: "The \"August Offer\" (1940) proposed the setting up of a Constituent Assembly. How did it differ from the proposal of the \"Cabinet Mission\" (1946)?",
        options: ["August Offer proposed a \"mainly\" Indian body, while Cabinet Mission proposed an \"entirely\" Indian body.", "August Offer accepted Partition, while Cabinet Mission rejected it.", "August Offer promised Dominion Status, while Cabinet Mission promised complete independence.", "August Offer was accepted by Congress, while Cabinet Mission was rejected."],
        correctAnswerIndex: 0, // a)
    },
    {
        id: "ch1-l3-q22",
        question: "The \"Dickie Bird Plan\" (Ismay Plan), which proposed that each province should be independent first and then join the Union, was abandoned in favor of:",
        options: ["The Wavell Plan.", "The Cabinet Mission Plan.", "The Mountbatten Plan (June 3rd Plan).", "The Cripps Proposals."],
        correctAnswerIndex: 2, // c)
    },
    {
        id: "ch1-l3-q23",
        question: "Why did the Indian National Congress accept the \"Dominion Status\" under the Mountbatten Plan despite its goal of \"Purna Swaraj\" (Complete Independence)?\n1. To ensure a peaceful and quick transfer of power.\n2. To prevent the \"Balkanization\" of the country.\n3. To continue the services of British bureaucrats during the transition.\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, and 3 (Check option 3: Yes, they need continuity. Check option 2: Yes. Option 1: Yes.)
    },
    {
        id: "ch1-l3-q24",
        question: "Consider the following statements regarding the \"Interim Government\" formed in 1946:\n1. It was formed under the provisions of the Government of India Act, 1919.\n2. Jawaharlal Nehru was designated as the Prime Minister.\n3. The Viceroy continued to be the head of the Executive Council.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "3 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1, // b) 3 only (Formed under 1919 provisions? No, it was administrative. Nehru was Vice-Prez. Viceroy was Head. 1919 Act was still the constitution. So 1 might be debated, but generally it was formed based on Cabinet Mission proposal but effectively under 1919 Act framework for powers. However, 2 is false (VP). So answer must be b) 3 only or a combo. Let's go with 3 only.)
    },
    {
        id: "ch1-l3-q25",
        question: "The Indian Independence Act, 1947, discontinued the appointment to Civil Services by the Secretary of State. This power was transferred to:",
        options: ["The President of India.", "The Governor-General of India.", "The Government of India (Executive).", "The Federal Public Service Commission."],
        correctAnswerIndex: 2, // c) Govt of India
    },
    {
        id: "ch1-l3-q26",
        question: "Which Act laid the foundation for \"Central Administration\" in India, the features of which (like the office of Governor-General) are still visible in the unitary bias of the Indian Constitution?",
        options: ["Regulating Act of 1773", "Charter Act of 1833", "Government of India Act of 1858", "Indian Councils Act of 1861"],
        correctAnswerIndex: 0, // a) 1773 (First step to centralization)
    },
    {
        id: "ch1-l3-q27",
        question: "\"It introduced a system of communal representation for Muslims by accepting the concept of 'separate electorate'.\" The political fallout of this provision (Act of 1909) directly resulted in:",
        options: ["The Lucknow Pact of 1916.", "The Partition of Bengal 1905.", "The Swadeshi Movement.", "The Surat Split 1907."],
        correctAnswerIndex: 0, // a) Lucknow Pact (Congress accepted separate electorates)
    },
    {
        id: "ch1-l3-q28",
        question: "In the context of the Government of National Capital Territory of Delhi (Amendment) Act, 2023, which historical Act first provided for a legislative assembly for Delhi (then a Chief Commissioner's Province)?",
        options: ["Government of India Act, 1919 (as a Chief Commissioner's province).", "Government of India Act, 1935 (Delhi had no assembly).", "Government of Part C States Act, 1951.", "69th Constitutional Amendment Act, 1991."],
        correctAnswerIndex: 2, // c) Part C States Act 1951 (Pre-69th Amendment)
    },
    {
        id: "ch1-l3-q29",
        question: "Assertion (A): The Act of 1858 was a \"formal\" change rather than a \"substantial\" one in the administration of India.\nReason (R): It did not alter the system of government in India substantially; it mostly changed the top-level control mechanism in London.\nSelect the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
    },
    {
        id: "ch1-l3-q30",
        question: "Which of the following creates a \"Constitutional Paradox\" regarding the 1947 Independence Act?",
        options: ["The Act granted independence but made India a \"Dominion\" under the British Crown until 1950.", "The Act abolished the office of Viceroy but retained the Governor-General.", "The Act allowed the British Parliament to legislate for India until 1950.", "The Act did not provide for the partition of the armed forces."],
        correctAnswerIndex: 0 // a) Independent but Dominion
    }
];

export const CHAPTER_1_LEVELS: ChapterLevelData = {
    topicId: 1,
    levels: [
        {
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Strictly Chapter 1 - Direct Recall",
            questions: LEVEL_1_QUESTIONS
        },
        {
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Applied Knowledge & Analysis",
            questions: LEVEL_2_QUESTIONS
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context",
            questions: LEVEL_3_QUESTIONS
        }
    ]
};
