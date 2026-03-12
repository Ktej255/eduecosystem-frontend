import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch1-l1-q1",
        "question": "In 1765, the East India Company obtained the",
        "options": ["Bengal, Bombay, and Madras","Bengal, Bihar, and Orissa","Madras, Mysore, and Hyderabad","Bengal, Awadh, and Punjab"],
        "correctAnswerIndex": 1,
        "explanation": "In 1765, the Company, which till now had purely trading functions obtained the"
    },
    {
        "id": "ch1-l1-q2",
        "question": "Which of the following acts was the first step taken by the British Government to control and regulate the affairs of the East India Company in India?",
        "options": ["Pitt’s India Act of 1784","Charter Act of 1813","Regulating Act of 1773","Charter Act of 1833"],
        "correctAnswerIndex": 2,
        "explanation": "The Regulating Act of 1773 is of great constitutional importance as it was the first step taken by the British Government to control and regulate the affairs of the East India Company."
    },
    {
        "id": "ch1-l1-q3",
        "question": "The Regulating Act of 1773 designated the Governor of Bengal as the",
        "options": ["Lord Cornwallis","Lord William Bentinck","Lord Warren Hastings","Lord Dalhousie"],
        "correctAnswerIndex": 2,
        "explanation": "The Regulating Act of 1773 designated the Governor of Bengal as the"
    },
    {
        "id": "ch1-l1-q4",
        "question": "Which act provided for the establishment of a Supreme Court at Calcutta (1774) comprising one chief justice and three other judges?",
        "options": ["Regulating Act of 1773","Amending Act of 1781","Pitt’s India Act of 1784","Charter Act of 1793"],
        "correctAnswerIndex": 0,
        "explanation": "The Regulating Act of 1773 provided for the establishment of a Supreme Court at Calcutta (1774) comprising one chief justice and three other judges."
    },
    {
        "id": "ch1-l1-q5",
        "question": "The Amending Act of 1781 was passed to rectify the defects of the Regulating Act of 1773. By what other name is it known?",
        "options": ["Communal Award","Act of Settlement","Portfolio Act","Declaratory Act"],
        "correctAnswerIndex": 1,
        "explanation": "In a bid to rectify the defects of the Regulating Act of 1773, the British Parliament passed the Amending Act of 1781, also known as the Act of Settlement."
    },
    {
        "id": "ch1-l1-q6",
        "question": "Which of the following acts established a system of double government by creating a new body called the Board of Control to manage political affairs?",
        "options": ["Regulating Act of 1773","Pitt’s India Act of 1784","Charter Act of 1813","Charter Act of 1833"],
        "correctAnswerIndex": 1,
        "explanation": "Pitt’s India Act of 1784 established a system of double government by allowing the Court of Directors to manage commercial affairs but creating a new body called the Board of Control to manage political affairs."
    },
    {
        "id": "ch1-l1-q7",
        "question": "Pitt",
        "options": ["It ended the commercial monopoly of the East India Company.","The Company","British possessions in India","It introduced an open competition system of selection and recruitment of civil servants.","It separated the legislative and executive functions of the Governor-General’s council."],
        "correctAnswerIndex": 1,
        "explanation": "Pitt"
    },
    {
        "id": "ch1-l1-q8",
        "question": "In 1786, Lord Cornwallis was appointed as the Governor-General of Bengal. Which of the following demands did he make to accept the post?",
        "options": ["He should be given the power to override the decision of his council in special cases.","He should be the sole authority to collect revenue.","He should be the Chief Justice of the Supreme Court.","He should be exempted from the jurisdiction of the Supreme Court."],
        "correctAnswerIndex": 0,
        "explanation": "Lord Cornwallis placed two demands: 1) He should be given the power to override the decision of his council in special cases. 2) He would also be the Commander-in-Chief. Both were enacted via the Act of 1786."
    },
    {
        "id": "ch1-l1-q9",
        "question": "Which act made the Governor-General of Bengal the",
        "options": ["Charter Act of 1793","Charter Act of 1813","Charter Act of 1833","Charter Act of 1853"],
        "correctAnswerIndex": 2,
        "explanation": "The Charter Act of 1833 made the Governor-General of Bengal the"
    },
    {
        "id": "ch1-l1-q10",
        "question": "Who was the first Governor-General of India?",
        "options": ["Lord Warren Hastings","Lord Cornwallis","Lord William Bentinck","Lord Dalhousie"],
        "correctAnswerIndex": 2,
        "explanation": "Lord William Bentinck was the first governor-general of India, created under the Charter Act of 1833."
    },
    {
        "id": "ch1-l1-q11",
        "question": "The Charter Act of 1833 ended the activities of the East India Company as a commercial body. What did the company become?",
        "options": ["A military regulatory body only","A purely administrative body","A judicial body handling civil disputes","An autonomous sovereign entity"],
        "correctAnswerIndex": 1,
        "explanation": "The Charter Act of 1833 ended the activities of the East India Company as a commercial body, which became a purely administrative body."
    },
    {
        "id": "ch1-l1-q12",
        "question": "Which act for the first time separated the legislative and executive functions of the Governor-General’s council?",
        "options": ["Charter Act of 1813","Charter Act of 1833","Charter Act of 1853","Government of India Act of 1858"],
        "correctAnswerIndex": 2,
        "explanation": "The Charter Act of 1853 separated, for the first time, the legislative and executive functions of the Governor-General’s council, establishing the Indian (Central) Legislative Council."
    },
    {
        "id": "ch1-l1-q13",
        "question": "The Macaulay Committee (the Committee on the Indian Civil Service) was appointed in 1854 following which act",
        "options": ["Charter Act of 1833","Charter Act of 1853","Government of India Act of 1858","Indian Councils Act of 1861"],
        "correctAnswerIndex": 1,
        "explanation": "The Charter Act of 1853 introduced an open competition system, throwing open the covenanted civil service to Indians, leading to the appointment of the Macaulay Committee in 1854."
    },
    {
        "id": "ch1-l1-q14",
        "question": "The Government of India Act of 1858 is also known by which of the following titles?",
        "options": ["The Act for the Good Governance of India","The Act of Dominion Status","The Act of Settlement","The Act of Representative Government"],
        "correctAnswerIndex": 0,
        "explanation": "The Government of India Act of 1858 is also known as the Act for the Good Government of India."
    },
    {
        "id": "ch1-l1-q15",
        "question": "Under the Government of India Act of 1858, the designation of the Governor-General of India was changed to what?",
        "options": ["Secretary of State for India","President of India","Viceroy of India","Chief Commissioner"],
        "correctAnswerIndex": 2,
        "explanation": "The Government of India Act of 1858 changed the designation of the Governor-General of India to that of Viceroy of India."
    },
    {
        "id": "ch1-l1-q16",
        "question": "Who was the first Viceroy of India?",
        "options": ["Lord Mountbatten","Lord Curzon","Lord William Bentinck","Lord Canning"],
        "correctAnswerIndex": 3,
        "explanation": "Lord Canning became the first Viceroy of India after the enactment of the Government of India Act of 1858."
    },
    {
        "id": "ch1-l1-q17",
        "question": "Which of the following bodies were abolished by the Government of India Act of 1858 to end the system of double government?",
        "options": ["The Supreme Court of Calcutta and the Sadar Diwani Adalat","The Board of Control and Court of Directors","The Governor-General","The Provincial Legislative Councils of Bombay and Madras"],
        "correctAnswerIndex": 1,
        "explanation": "The Government of India Act of 1858 ended the system of double government by abolishing the Board of Control and Court of Directors."
    },
    {
        "id": "ch1-l1-q18",
        "question": "The Government of India Act of 1858 created a new office called the Secretary of State for India. How many members were in the Council of India established to assist him?",
        "options": ["10-member council","12-member council","15-member council","20-member council"],
        "correctAnswerIndex": 2,
        "explanation": "The Government of India Act of 1858 created a new office, Secretary of State for India, and established a 15-member Council of India to assist the Secretary of State."
    },
    {
        "id": "ch1-l1-q19",
        "question": "The Indian Councils Act of 1861 initiated the process of decentralization by restoring the legislative powers to which presidencies?",
        "options": ["Bengal and Punjab","Bombay and Madras","North-Western Frontier and Awadh","Assam and Burma"],
        "correctAnswerIndex": 1,
        "explanation": "It initiated the process of decentralization by restoring the legislative powers to the Bombay and Madras Presidencies, reversing the centralizing tendency that started from 1773."
    },
    {
        "id": "ch1-l1-q20",
        "question": "Which act gave statutory recognition to the",
        "options": ["Government of India Act of 1858","Indian Councils Act of 1861","Indian Councils Act of 1892","Indian Councils Act of 1909"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Councils Act of 1861 gave recognition to the"
    },
    {
        "id": "ch1-l1-q21",
        "question": "What was the lifespan of an ordinance issued by the Viceroy during an emergency without the concurrence of the legislative council under the Indian Councils Act of 1861?",
        "options": ["Three months","Six months","One year","Three years"],
        "correctAnswerIndex": 1,
        "explanation": "It empowered the Viceroy to issue ordinances, without the concurrence of the legislative council, during an emergency. The life of such an ordinance was six months."
    },
    {
        "id": "ch1-l1-q22",
        "question": "According to the Indian Councils Act of 1892, which of the following new powers was granted to the legislative councils?",
        "options": ["Power to vote on the budget","Power to discuss the budget and address questions to the executive","Power to override the Governor-General’s veto","Power to elect the members of the Board of Control"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Councils Act of 1892 increased the functions of legislative councils and gave them the power of discussing the budget and addressing questions to the executive."
    },
    {
        "id": "ch1-l1-q23",
        "question": "The Indian Councils Act of 1909 is also popularly known by which name?",
        "options": ["Montagu-Chelmsford Reforms","Morley-Minto Reforms","Macaulay Reforms","Simon Commission Report"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Councils Act of 1909 is also known as Morley-Minto Reforms (Lord Morley was the then Secretary of State for India and Lord Minto was the then Viceroy of India)."
    },
    {
        "id": "ch1-l1-q24",
        "question": "Under the Act of 1909, who became the first Indian to join the Viceroy’s Executive Council as the law member?",
        "options": ["Dadabhai Naoroji","Gopal Krishna Gokhale","Satyendra Prasad Sinha","Surendranath Banerjee"],
        "correctAnswerIndex": 2,
        "explanation": "Satyendra Prasad Sinha became the first Indian to join the Viceroy’s Executive Council. He was appointed as the law member."
    },
    {
        "id": "ch1-l1-q25",
        "question": "Which act introduced a system of communal representation for Muslims by accepting the concept of",
        "options": ["Indian Councils Act of 1892","Indian Councils Act of 1909","Government of India Act of 1919","Government of India Act of 1935"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Councils Act of 1909 introduced a system of communal representation for Muslims by accepting the concept of"
    },
    {
        "id": "ch1-l1-q26",
        "question": "Because of the separate electorates introduced in 1909, who came to be known as the",
        "options": ["Lord Morley","Lord Minto","Lord Curzon","Lord Hardinge"],
        "correctAnswerIndex": 1,
        "explanation": "Lord Minto came to be known as the Father of Communal Electorate."
    },
    {
        "id": "ch1-l1-q27",
        "question": "The Government of India Act of 1919 divided the provincial subjects into two parts. What were they called?",
        "options": ["Federal and State","Central and Provincial","Transferred and Reserved","Concurrent and Residuary"],
        "correctAnswerIndex": 2,
        "explanation": "The Government of India Act of 1919 further divided the provincial subjects into two parts—transferred and reserved. This dual scheme of governance was known as"
    },
    {
        "id": "ch1-l1-q28",
        "question": "Which act introduced, for the first time, bicameralism and direct elections in the country?",
        "options": ["Indian Councils Act of 1909","Government of India Act of 1919","Government of India Act of 1935","Indian Independence Act of 1947"],
        "correctAnswerIndex": 1,
        "explanation": "The Government of India Act of 1919 introduced, for the first time, bicameralism and direct elections in the country. The Indian Legislative Council was replaced by a bicameral legislature."
    },
    {
        "id": "ch1-l1-q29",
        "question": "In 1926, which body was set up for recruiting civil servants as provided by the Act of 1919?",
        "options": ["Union Public Service Commission","Central Public Service Commission","Federal Public Service Commission","Staff Selection Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Act of 1919 provided for the establishment of a public service commission. Hence, a Central Public Service Commission was set up in 1926 for recruiting civil servants."
    },
    {
        "id": "ch1-l1-q30",
        "question": "Under the Government of India Act of 1935, the powers were divided between the Centre and units in the form of three lists. To whom were the",
        "options": ["Federal Legislature","Provincial Legislature","Secretary of State for India","Viceroy"],
        "correctAnswerIndex": 3,
        "explanation": "The Act divided the powers between Centre and units into Federal List, Provincial List, and Concurrent List. The residuary powers were given to the Viceroy."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch1-l2-q1",
        "question": "Consider the following statements about the Regulating Act of 1773:\n1. It designated the Governor of Bengal as the Governor-General of Bengal.\n2. It established a Supreme Court at Calcutta comprising one chief justice and three other judges.\n3. It prohibited the servants of the Company from engaging in any private trade.\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements about the Regulating Act of 1773 are correct. It designated the Governor of Bengal as the Governor-General of Bengal, established a Supreme Court at Calcutta, and prohibited Company servants from engaging in private trade."
    },
    {
        "id": "ch1-l2-q2",
        "question": "Assertion (A): Pitt's India Act of 1784 established a system of double government.\nReason (R): It created a Board of Control to manage commercial affairs while the Court of Directors managed political affairs.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "A is true but R is false. Pitt's India Act did establish double government, but the Board of Control managed political affairs while the Court of Directors managed commercial affairs, not the other way around."
    },
    {
        "id": "ch1-l2-q3",
        "question": "Consider the following about the Charter Act of 1833:\n1. It made the Governor-General of Bengal as the Governor-General of India.\n2. It deprived the Governor of Bombay and Madras of their legislative powers.\n3. It ended the activities of the East India Company as a commercial body.\nWhich of the above statements are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements about the Charter Act of 1833 are correct. It created the post of Governor-General of India, centralized legislative powers, and ended the Company's commercial activities."
    },
    {
        "id": "ch1-l2-q4",
        "question": "Match the following Acts with their key features:\nList-I\nA. Regulating Act of 1773\nB. Charter Act of 1813\nC. Charter Act of 1853\nD. Government of India Act of 1858\n\nList-II\n1. Open competition for civil services\n2. First step to control and regulate Company affairs\n3. Ended Company's trade monopoly with India\n4. Created the office of Secretary of State for India\n\nCode (A-B-C-D):",
        "options": ["2-3-1-4","3-2-4-1","2-1-3-4","4-3-1-2"],
        "correctAnswerIndex": 0,
        "explanation": "Regulating Act 1773 was the first step to regulate Company (2), Charter Act 1813 ended trade monopoly with India (3), Charter Act 1853 introduced open competition (1), and GoI Act 1858 created Secretary of State (4)."
    },
    {
        "id": "ch1-l2-q5",
        "question": "Which of the following features were introduced by the Indian Councils Act of 1861?\n1. Portfolio system\n2. Process of decentralization\n3. Power of the Viceroy to issue ordinances\n4. System of communal representation\nSelect the correct answer:",
        "options": ["1, 2 and 3 only","2, 3 and 4 only","1, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Councils Act of 1861 introduced the portfolio system, initiated decentralization by restoring legislative powers to Bombay and Madras, and empowered the Viceroy to issue ordinances. Communal representation was introduced by the Act of 1909."
    },
    {
        "id": "ch1-l2-q6",
        "question": "Consider the following about the Morley-Minto Reforms (Indian Councils Act of 1909):\n1. It introduced a system of communal representation for Muslims.\n2. It allowed Indians to participate in elections on the basis of universal adult franchise.\n3. Satyendra Prasad Sinha became the first Indian to join the Viceroy's Executive Council.\nWhich of the above statements are correct?",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is incorrect. The Act of 1909 did not introduce universal adult franchise. It introduced communal representation for Muslims (1) and Satyendra Prasad Sinha became the first Indian on the Viceroy's Executive Council (3)."
    },
    {
        "id": "ch1-l2-q7",
        "question": "Assertion (A): The Government of India Act of 1919 introduced the concept of 'dyarchy' at the provincial level.\nReason (R): Under dyarchy, the provincial subjects were divided into transferred and reserved categories.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are correct and R correctly explains A. Dyarchy meant dual governance where transferred subjects were administered by ministers responsible to the legislative council, while reserved subjects were managed by the Governor."
    },
    {
        "id": "ch1-l2-q8",
        "question": "Consider the following features of the Government of India Act of 1935:\n1. It abolished dyarchy at the provinces and introduced provincial autonomy.\n2. It introduced dyarchy at the Centre.\n3. It provided for the establishment of an All-India Federation.\n4. It abolished the Council of India.\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only","1, 3 and 4 only","2, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four statements about the Government of India Act of 1935 are correct. It abolished provincial dyarchy, introduced dyarchy at the Centre, proposed an All-India Federation (which never materialized), and abolished the Council of India."
    },
    {
        "id": "ch1-l2-q9",
        "question": "Which of the following bodies were created for the first time by the Indian Independence Act of 1947?\n1. Constituent Assembly of India\n2. The post of Governor-General for each dominion\n3. Two independent dominions of India and Pakistan\nSelect the correct answer:",
        "options": ["1 only","3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "The Constituent Assembly existed prior to the Indian Independence Act (formed in 1946 under the Cabinet Mission Plan). The Act of 1947 created two independent dominions and provided for a separate Governor-General for each."
    },
    {
        "id": "ch1-l2-q10",
        "question": "Consider the following statements about the Charter Act of 1793:\n1. It extended the overriding power given to the Governor-General over the Governors of Bombay and Madras.\n2. It allowed the Commander-in-Chief to be a member of the Governor-General's Council.\n3. It renewed the Company's charter for twenty years.\nWhich of the above are correct?",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The Charter Act of 1793 extended the overriding power of the Governor-General, included the Commander-in-Chief in the council, and renewed the Company's charter for 20 years."
    },
    {
        "id": "ch1-l2-q11",
        "question": "Which act introduced, for the first time, the concept of local representation in Indian legislation by providing that one Indian member each should be included in the legislative councils of Bengal, Bombay, and Madras?",
        "options": ["Indian Councils Act of 1861","Indian Councils Act of 1892","Indian Councils Act of 1909","Government of India Act of 1919"],
        "correctAnswerIndex": 0,
        "explanation": "The Indian Councils Act of 1861 provided for the association of Indians in the law-making process, initiating a system where Indian members were nominated to expanded legislative councils."
    },
    {
        "id": "ch1-l2-q12",
        "question": "Assertion (A): The Charter Act of 1813 ended the trade monopoly of the East India Company.\nReason (R): The Act opened Indian trade to all British merchants but retained the Company's monopoly over tea trade and trade with China.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both A and R are true. The Charter Act of 1813 ended the Company's monopoly on Indian trade, opening it to all British merchants. However, the Company retained its monopoly on the tea trade and trade with China."
    },
    {
        "id": "ch1-l2-q13",
        "question": "Consider the following provisions of the Government of India Act of 1919:\n1. It introduced bicameralism for the first time.\n2. It extended the principle of communal representation to Sikhs, Europeans, and Anglo-Indians.\n3. It created the office of the High Commissioner for India in London.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The Act of 1919 introduced bicameralism, extended communal representation to Sikhs, Europeans, and Anglo-Indians, and created the office of High Commissioner for India in London."
    },
    {
        "id": "ch1-l2-q14",
        "question": "Match the following Governor-Generals/Viceroys with the Acts passed during their tenure:\nList-I\nA. Lord Warren Hastings\nB. Lord William Bentinck\nC. Lord Canning\nD. Lord Hardinge\n\nList-II\n1. Indian Councils Act of 1909\n2. Charter Act of 1833\n3. Government of India Act of 1858\n4. Regulating Act of 1773\n\nCode (A-B-C-D):",
        "options": ["4-2-3-1","4-3-2-1","2-4-1-3","3-2-1-4"],
        "correctAnswerIndex": 0,
        "explanation": "Warren Hastings was the first Governor-General under the Regulating Act (4), Bentinck became first Governor-General of India under Charter Act 1833 (2), Canning became the first Viceroy under GoI Act 1858 (3), and Hardinge was Viceroy when Morley-Minto Reforms came (1)."
    },
    {
        "id": "ch1-l2-q15",
        "question": "Which of the following is NOT a correct feature of the Government of India Act of 1935?\n1. It introduced responsible government at the Centre.\n2. It established the Federal Court.\n3. It established the Reserve Bank of India.\n4. It provided for the establishment of a Public Service Commission at both federal and provincial levels.",
        "options": ["1 only","1 and 3 only","3 only","2 and 4 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is incorrect. The Act of 1935 did NOT introduce responsible government at the Centre. Dyarchy was introduced at the Centre, meaning the Governor-General had overriding powers over the ministers on reserved subjects."
    },
    {
        "id": "ch1-l2-q16",
        "question": "Consider the following statements regarding the Indian Independence Act of 1947:\n1. It designated the Governor-General of India as a constitutional head.\n2. It abolished the office of Secretary of State for India.\n3. The Constituent Assembly of each dominion was empowered to make any law for that dominion.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct. The Act of 1947 made the Governor-General a constitutional head, abolished the office of Secretary of State for India, and granted the Constituent Assemblies full sovereign power to make laws."
    },
    {
        "id": "ch1-l2-q17",
        "question": "The Indian Councils Act of 1892 introduced significant changes. Which of the following was NOT one of them?",
        "options": ["It increased the number of additional (non-official) members in the Central and Provincial Legislative Councils.","It granted the councils the power of discussing the budget.","It introduced direct elections to the legislative councils.","It granted the councils the power of addressing questions to the executive."],
        "correctAnswerIndex": 2,
        "explanation": "The Act of 1892 did NOT introduce direct elections. It used the method of indirect elections through a nomination system. Direct elections were introduced later by the Act of 1919."
    },
    {
        "id": "ch1-l2-q18",
        "question": "Assertion (A): The Pitt's India Act of 1784 was more significant than the Regulating Act of 1773 in establishing British parliamentary control over Indian affairs.\nReason (R): It established a Board of Control to oversee all civil, military and revenue operations of the Company.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. The Pitt's India Act was more significant because it established the Board of Control, which gave the British Parliament effective control over the civil, military, and revenue affairs of the Company, completing the process started by the Regulating Act."
    },
    {
        "id": "ch1-l2-q19",
        "question": "Consider the following about the Government of India Act of 1858:\n1. It changed the governance of India from the Company to the Crown.\n2. The powers of the Crown were to be exercised by the Secretary of State for India.\n3. The Secretary of State was a member of the British Cabinet and was responsible to the British Parliament.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The Act transferred power to the Crown, exercised through the Secretary of State for India, who was a member of the British Cabinet and answerable to Parliament."
    },
    {
        "id": "ch1-l2-q20",
        "question": "Which of the following correctly describes the significance of the Charter Act of 1853?\n1. It separated the legislative and executive functions of the Governor-General's Council for the first time.\n2. It introduced an open competition system for civil services.\n3. It extended the Company's rule in India for an indefinite period.\nSelect the correct answer:",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is partially correct—the Act did not specify any particular period for the extension of the Company's rule, but this is generally interpreted as extending it for an indefinite period, not a fixed 20-year term as earlier. However, the answer choice recognizes the main features."
    },
    {
        "id": "ch1-l2-q21",
        "question": "Under the Government of India Act of 1935, the proposed All-India Federation was to comprise:\n1. British Indian Provinces\n2. Princely States\n3. Chief Commissioner's Provinces\nSelect the correct answer:",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The All-India Federation under the 1935 Act was to comprise all three: British Indian Provinces, Princely States, and Chief Commissioner's Provinces. However, the federation never came into existence as the required number of princely states did not join."
    },
    {
        "id": "ch1-l2-q22",
        "question": "Consider the following pairs:\nAct : Key Feature\n1. Charter Act 1813 : Provision of Rs. 1 lakh for education of Indians\n2. Charter Act 1833 : Attempted codification of Indian laws\n3. Charter Act 1853 : Macaulay Committee appointment\nWhich of the above pairs are correctly matched?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three pairs are correctly matched. The Charter Act of 1813 allotted Rs. 1 lakh for education, the Charter Act of 1833 attempted codification of laws through a Law Commission, and the Charter Act of 1853 led to the appointment of the Macaulay Committee."
    },
    {
        "id": "ch1-l2-q23",
        "question": "The Indian Councils Act of 1909 (Morley-Minto Reforms) was significant because:",
        "options": ["It introduced direct elections for the first time.","It introduced the concept of separate electorate for Muslims.","It abolished the practice of official majority in the Imperial Legislative Council.","It introduced provincial autonomy."],
        "correctAnswerIndex": 1,
        "explanation": "The most significant and controversial feature of the 1909 Act was the introduction of separate electorate for Muslims, where Muslim members were to be elected only by Muslim voters. Lord Minto came to be known as the Father of Communal Electorate."
    },
    {
        "id": "ch1-l2-q24",
        "question": "Consider the following differences between Transferred and Reserved subjects under the Act of 1919:\n1. Transferred subjects were administered by the Governor with ministers responsible to the legislative council.\n2. Reserved subjects were administered by the Governor and his executive council without responsibility to the legislature.\nWhich of the above is/are correct?",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct. This was the essence of dyarchy introduced at the provincial level. Transferred subjects like education and health were under Indian ministers, while reserved subjects like finance and law and order were under the Governor and his executive council."
    },
    {
        "id": "ch1-l2-q25",
        "question": "Which of the following Acts expressly allowed the British Parliament to legislate for India?",
        "options": ["Regulating Act of 1773","Charter Act of 1813","Charter Act of 1833","Government of India Act of 1858"],
        "correctAnswerIndex": 2,
        "explanation": "The Charter Act of 1833, for the first time, expressly gave the British Parliament the power to legislate for British India. It centralized legislative power in the Governor-General of India in Council."
    },
    {
        "id": "ch1-l2-q26",
        "question": "Consider the following statements regarding the evolution of the Viceroy's executive council:\n1. The Regulating Act of 1773 created the Governor-General's Council of four members.\n2. The Charter Act of 1833 added a fourth member called the Law Member.\nWhich of the above is/are correct?",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct. The Regulating Act created a four-member council, and the Charter Act of 1833 added the Law Member as the fourth ordinary member to the expanded Governor-General's Council."
    },
    {
        "id": "ch1-l2-q27",
        "question": "The Government of India Act of 1935 divided the powers between the Centre and the provinces through three lists. Which of the following is NOT one of these lists?",
        "options": ["Federal List","Provincial List","Concurrent List","Residuary List"],
        "correctAnswerIndex": 3,
        "explanation": "The Act divided powers into three lists: Federal List (for the Centre), Provincial List (for the provinces), and Concurrent List (for both). There was no 'Residuary List'—residuary subjects were given to the Viceroy."
    },
    {
        "id": "ch1-l2-q28",
        "question": "Which of the following was a key difference between the Government of India Act of 1858 and the Indian Councils Act of 1861?",
        "options": ["The Act of 1858 created the Viceroy's office while the Act of 1861 abolished it.","The Act of 1858 transferred power from the Company to the Crown while the Act of 1861 initiated decentralization.","The Act of 1858 introduced dyarchy while the Act of 1861 abolished it.","The Act of 1858 established the Federal Court while the Act of 1861 abolished it."],
        "correctAnswerIndex": 1,
        "explanation": "The Government of India Act of 1858 centralized power under the Crown, while the Indian Councils Act of 1861 reversed this centralizing tendency by restoring legislative powers to Bombay and Madras presidencies."
    },
    {
        "id": "ch1-l2-q29",
        "question": "Consider the following statements about the Indian Independence Act of 1947:\n1. It abolished the suzerainty of the British Crown over Indian princely states.\n2. It authorized princely states to join either dominion or remain independent.\nWhich of the above is/are correct?",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct. The Indian Independence Act abolished British suzerainty over the princely states, and they were given the choice to accede to either India or Pakistan, or to remain independent."
    },
    {
        "id": "ch1-l2-q30",
        "question": "Assertion (A): Lord Canning was the last Governor-General and the first Viceroy of India.\nReason (R): The Government of India Act of 1858 changed the designation from Governor-General to Viceroy, though both terms continued to be used interchangeably.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. Lord Canning was the last Governor-General under the Company and became the first Viceroy under the Crown after the Act of 1858. The term 'Viceroy' meant the representative of the Crown."
    }
];


const LEVEL_3_QUESTIONS = [
    {
        "id": "ch1-l3-q1",
        "question": "Consider the following statements regarding the evolution of legislative councils in British India:\n1. The Regulating Act of 1773 established the first Supreme Court in India but did not create any legislative council.\n2. The Charter Act of 1853 created a separate legislative council called the Indian (Central) Legislative Council.\n3. The Indian Councils Act of 1892 introduced the principle of election but used indirect methods of nomination.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is incorrect—the Regulating Act did not just create the Supreme Court; it also laid the foundation for a centralized administration with a Governor-General's Council that had legislative functions. Statements 2 and 3 are correct."
    },
    {
        "id": "ch1-l3-q2",
        "question": "With reference to the history of constitutional reforms in British India, consider the following chronological events:\n1. Introduction of portfolio system\n2. Establishment of Federal Court\n3. Introduction of communal representation\n4. Introduction of bicameralism\nArrange them in correct chronological order:",
        "options": ["1-3-4-2","3-1-4-2","1-3-2-4","3-4-1-2"],
        "correctAnswerIndex": 0,
        "explanation": "Portfolio system was introduced by the Indian Councils Act of 1861, communal representation by the Act of 1909, bicameralism by the Act of 1919, and the Federal Court was established by the Act of 1935."
    },
    {
        "id": "ch1-l3-q3",
        "question": "In the context of constitutional development under British rule, the concept of 'dyarchy' was introduced twice—first at the provincial level and then at the Centre. Which of the following correctly identifies the acts?",
        "options": ["Provincial: Act of 1909, Central: Act of 1919","Provincial: Act of 1919, Central: Act of 1935","Provincial: Act of 1935, Central: Act of 1919","Provincial: Act of 1919, Central: Act of 1919"],
        "correctAnswerIndex": 1,
        "explanation": "Dyarchy was first introduced at the provincial level by the Government of India Act of 1919 (Montagu-Chelmsford Reforms) and later at the Centre by the Government of India Act of 1935."
    },
    {
        "id": "ch1-l3-q4",
        "question": "Consider the following statements about the Regulating Act of 1773 and its limitations:\n1. It failed to clearly define the relationship between the Supreme Court and the Governor-General's Council.\n2. It did not address the issue of revenue administration by the Company.\n3. It led to conflicts between the Supreme Court and the Governor-General's Council.\nWhich of the above led to the passing of the Amending Act of 1781?",
        "options": ["1 and 3 only","1, 2, and 3","2 and 3 only","1 only"],
        "correctAnswerIndex": 0,
        "explanation": "The primary reasons for the Amending Act of 1781 were the undefined relationship between the Supreme Court and the Governor-General's Council (1) and the consequent conflicts between them (3). These jurisdictional disputes needed resolution."
    },
    {
        "id": "ch1-l3-q5",
        "question": "Assertion (A): The All-India Federation proposed under the Government of India Act of 1935 never materialized.\nReason (R): The princely states were unwilling to sign the Instrument of Accession required for joining the federation.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. The federation required that a certain proportion of princely states sign the Instrument of Accession. Since the princely states refused to join, the federation never came into being."
    },
    {
        "id": "ch1-l3-q6",
        "question": "Which of the following provisions were common to BOTH the Government of India Act of 1919 AND the Government of India Act of 1935?\n1. Separate electorates for Muslims\n2. Diarchy (dyarchy) at the provincial level\n3. Public Service Commission provisions\n4. A bicameral legislature at the Centre\nSelect the correct answer:",
        "options": ["1, 3 and 4 only","1 and 4 only","1, 2 and 3 only","1 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Communal electorates (1), Public Service Commission (3), and bicameral legislature at Centre (4) were common. Dyarchy at provincial level (2) was a feature of the 1919 Act only; the 1935 Act abolished provincial dyarchy and introduced provincial autonomy instead."
    },
    {
        "id": "ch1-l3-q7",
        "question": "Consider the following reforms and the rationale for their introduction:\n1. Indian Councils Act of 1892 — response to growing Indian nationalism and demands of the Indian National Congress\n2. Morley-Minto Reforms of 1909 — response to the extremist movement and the split in INC\n3. Montagu-Chelmsford Reforms of 1919 — response to Indian contribution in World War I\nWhich of the above pairs are correctly matched?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correctly matched. The INC founded in 1885 demanded reforms leading to the 1892 Act. The extremist movement and Muslim League's demands led to the 1909 reforms. India's WW-I contribution was acknowledged through the 1919 reforms."
    },
    {
        "id": "ch1-l3-q8",
        "question": "With reference to the Pitt's India Act of 1784, consider the following:\n1. The Board of Control consisted of six members including the Chancellor of the Exchequer and a Secretary of State.\n2. It distinguished between the commercial and political functions of the Company for the first time.\n3. It gave the Court of Directors the power to manage the revenues of India.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","2 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is wrong because the revenues of India were managed by the Board of Control (political affairs), not the Court of Directors (commercial affairs)."
    },
    {
        "id": "ch1-l3-q9",
        "question": "The Indian Independence Act of 1947 made several constitutional changes. Consider the following:\n1. The office of the Secretary of State for India was abolished.\n2. The Governor-General and provincial Governors were to act as constitutional heads of state.\n3. The British Parliament retained authority to legislate for India and Pakistan.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","1 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is wrong—the Indian Independence Act specifically provided that no Act of the British Parliament passed after the appointed day would extend to either dominion unless adopted by the dominion's legislature."
    },
    {
        "id": "ch1-l3-q10",
        "question": "Consider the following pairs relating to the evolution of the legislative system:\n1. Imperial Legislative Council → Created by the Indian Councils Act of 1861\n2. Council of State and Legislative Assembly → Created by the Government of India Act of 1919\n3. Federal Legislature → Created by the Government of India Act of 1935\nWhich of the above pairs are correctly matched?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correctly matched. The Imperial Legislative Council was established by the 1861 Act, the Council of State (upper house) and Legislative Assembly (lower house) by the 1919 Act, and the Federal Legislature by the 1935 Act."
    },
    {
        "id": "ch1-l3-q11",
        "question": "Which of the following was NOT a recommendation or provision of the Indian Councils Act of 1909 (Morley-Minto Reforms)?\n1. Increase in the size of legislative councils\n2. Retention of official majority in the Imperial Legislative Council\n3. Introduction of direct elections by the people at large\n4. Separate electorate for Muslims\nSelect the correct answer:",
        "options": ["3 only","2 and 3 only","1 and 4 only","3 and 4 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect. The 1909 Act did not introduce universal direct elections. It provided for elections but through limited franchise and indirect methods. The remaining statements are correct features of the Act."
    },
    {
        "id": "ch1-l3-q12",
        "question": "In the context of the Government of India Act of 1935, consider the following lists:\nFederal List: 59 items\nProvincial List: 54 items\nConcurrent List: 36 items\nWith reference to the above, which of the following statements is/are correct?\n1. Residuary powers were vested in the Governor-General.\n2. The Federal Legislature could not legislate on provincial subjects even during an emergency.\n3. The Governor had the power to override provincial legislature on certain reserved subjects.",
        "options": ["1 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect—during an emergency, the federal legislature could legislate on provincial subjects. The residuary powers were indeed with the Governor-General, and the Governor had overriding powers on certain matters."
    },
    {
        "id": "ch1-l3-q13",
        "question": "Consider the progressive expansion of franchise in British India:\n1. The Indian Councils Act of 1892 introduced limited and indirect elections.\n2. The Indian Councils Act of 1909 introduced separate electorates for Muslims but maintained limited franchise.\n3. The Government of India Act of 1919 granted nearly universal adult franchise.\n4. The Government of India Act of 1935 extended franchise to about 10 percent of the population.\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only","1, 2 and 4 only","2, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 3 is incorrect. The Act of 1919 did not grant universal adult franchise—it extended franchise but on a limited basis. The Act of 1935 extended it to about 10% of the population. Universal adult franchise came only with the Indian Constitution."
    },
    {
        "id": "ch1-l3-q14",
        "question": "The evolution of the Governor-General's office went through several constitutional changes. Arrange the following in the correct chronological order:\n1. Governor-General of Bengal\n2. Governor-General of India\n3. Viceroy of India\n4. Head of a Constitutional Dominion\nSelect the correct answer:",
        "options": ["1-2-3-4","2-1-3-4","1-3-2-4","2-1-4-3"],
        "correctAnswerIndex": 0,
        "explanation": "The correct order is: Governor-General of Bengal (Regulating Act 1773 → Warren Hastings), Governor-General of India (Charter Act 1833 → William Bentinck), Viceroy of India (GoI Act 1858 → Lord Canning), Head of Constitutional Dominion (Independence Act 1947 → Lord Mountbatten)."
    },
    {
        "id": "ch1-l3-q15",
        "question": "With reference to the concept of 'responsible government' in British India, consider the following:\n1. The Government of India Act of 1919 introduced partial responsibility at the provincial level through dyarchy.\n2. The Government of India Act of 1935 introduced responsible government at the Centre.\n3. Provincial autonomy was established under the Act of 1935.\nWhich of the above are correct?",
        "options": ["1 and 3 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect—the Act of 1935 introduced dyarchy at the Centre, not responsible government. Responsible government at the Centre came only after independence."
    },
    {
        "id": "ch1-l3-q16",
        "question": "Assertion (A): The Charter Act of 1833 is regarded as a significant step towards centralization of the British Indian administration.\nReason (R): The Act concentrated all legislative powers in the Governor-General of India in Council and deprived the governments of Bombay and Madras of their legislative powers.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. By concentrating all legislative power in the Governor-General's Council and stripping Bombay and Madras of their legislative authority, the Act achieved administrative centralization."
    },
    {
        "id": "ch1-l3-q17",
        "question": "Consider the following Acts and their respective contributions to communal representation:\n1. Indian Councils Act of 1909 — Introduced separate electorates for Muslims\n2. Government of India Act of 1919 — Extended communal representation to Sikhs, Europeans, and Anglo-Indians\n3. Government of India Act of 1935 — Introduced communal representation for Depressed Classes (Scheduled Castes)\nWhich of the above is/are correctly matched?",
        "options": ["1 only","1 and 2 only","1, 2, and 3","2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are correctly matched. The 1909 Act introduced separate electorate for Muslims, the 1919 Act extended it to Sikhs, Europeans, and Anglo-Indians, and the 1935 Act (based on the Communal Award of 1932) provided representation for Depressed Classes."
    },
    {
        "id": "ch1-l3-q18",
        "question": "Consider the following constitutional provisions borrowed from the Government of India Act of 1935 by the Indian Constitution:\n1. Federal scheme\n2. Office of Governor\n3. Judiciary\n4. Emergency provisions\n5. Administrative details\nWhich of the above were incorporated from the Act of 1935?",
        "options": ["1, 2 and 3 only","1, 2, 4 and 5 only","1, 2, 3, 4 and 5","2, 3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five elements were substantially borrowed from the Government of India Act of 1935. The Act is often called the primary source of the Indian Constitution, providing the basic framework for the federal scheme, office of Governor, judiciary, emergency provisions, and administrative details."
    },
    {
        "id": "ch1-l3-q19",
        "question": "Which of the following statements is correct regarding the distinguishing features between the Regulating Act of 1773 and the Amending Act of 1781?",
        "options": ["The Regulating Act created the Supreme Court while the Amending Act abolished it.","The Regulating Act led to conflicts between the Supreme Court and the Council while the Amending Act resolved them by defining their respective jurisdictions.","The Amending Act extended the jurisdiction of the Supreme Court to all Indian territories while the Regulating Act restricted it to Calcutta.","The Regulating Act introduced the position of Governor-General while the Amending Act upgraded it to Viceroy."],
        "correctAnswerIndex": 1,
        "explanation": "The Regulating Act created the Supreme Court but did not clearly define the boundary between the Court's jurisdiction and the Governor-General's authority, leading to conflicts. The Amending Act of 1781 resolved these by separating and defining their respective jurisdictions."
    },
    {
        "id": "ch1-l3-q20",
        "question": "Consider the following regarding the Simon Commission and its impact:\n1. It was appointed in 1927 to review the working of the Government of India Act of 1919.\n2. It was boycotted by Indians because it had no Indian member.\n3. It recommended the abolition of dyarchy and introduction of responsible government at the Centre.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","1, 2, and 3","2 and 3 only","1 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is partially incorrect—the Simon Commission recommended the abolition of dyarchy at the provincial level and extension of responsible government in the provinces, but NOT responsible government at the Centre."
    },
    {
        "id": "ch1-l3-q21",
        "question": "The Government of India Act of 1935 introduced several safeguards and special responsibilities for the Governor-General and Governors. Which of the following is/are correct about these 'special responsibilities'?\n1. Prevention of any grave menace to the peace and tranquillity of India\n2. Safeguarding the legitimate interests of minorities\n3. Prevention of discrimination against British commercial interests\nSelect the correct answer:",
        "options": ["1 and 2 only","1, 2, and 3","2 only","1 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three were special responsibilities of the Governor-General under the 1935 Act. The safeguards were extensive and included preventing threats to peace, protecting minorities, and safeguarding British commercial interests."
    },
    {
        "id": "ch1-l3-q22",
        "question": "Consider the following statements about the constitutional reforms preceding the Government of India Act of 1935:\n1. The Nehru Report of 1928 demanded dominion status for India.\n2. The Round Table Conferences (1930-1932) discussed the scheme of constitutional reforms.\n3. The Communal Award of 1932 provided separate electorates for Depressed Classes.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct. The Nehru Report demanded dominion status, the Round Table Conferences discussed reforms that eventually led to the 1935 Act, and the Communal Award by Ramsay MacDonald provided separate electorates for Depressed Classes."
    },
    {
        "id": "ch1-l3-q23",
        "question": "Assertion (A): The Indian Councils Act of 1861 was a landmark in the constitutional development of India.\nReason (R): It marked the beginning of representative institutions in India by associating Indians with the law-making process.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both A and R are true and R correctly explains A. The Act of 1861 was landmark because for the first time, three Indians were nominated to the Viceroy's enlarged council, beginning the process of associating Indians with governance."
    },
    {
        "id": "ch1-l3-q24",
        "question": "Consider the following events in the constitutional history of India:\n1. Appointment of Macaulay Committee\n2. Passing of the Communal Award\n3. Introduction of separate electorates\n4. Establishment of Federal Court\nArrange them in the correct chronological order:",
        "options": ["1-3-2-4","3-1-2-4","1-2-3-4","3-2-1-4"],
        "correctAnswerIndex": 0,
        "explanation": "Macaulay Committee (1854, under Charter Act 1853), Separate Electorates (1909, under Indian Councils Act), Communal Award (1932, before GoI Act 1935), Federal Court (1937, under GoI Act 1935)."
    },
    {
        "id": "ch1-l3-q25",
        "question": "Which of the following statements correctly distinguishes between the Government of India Act of 1858 and the Government of India Act of 1919?\n1. The 1858 Act transferred power from the Company to the Crown while the 1919 Act introduced a degree of Indian participation in governance.\n2. The 1858 Act created the Council of India while the 1919 Act created the Central Public Service Commission.\nSelect the correct answer:",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct. The 1858 Act replaced Company rule with Crown rule and created the Council of India. The 1919 Act introduced dyarchy for Indian participation and established the CPSC for civil service recruitment."
    },
    {
        "id": "ch1-l3-q26",
        "question": "The Government of India Act of 1935 is often described as the longest Act passed by the British Parliament. Consider the following:\n1. It had 321 sections and 10 schedules.\n2. It provided for the establishment of a Reserve Bank of India.\n3. It introduced a Federal Court for the first time in India.\n4. It introduced the system of joint electorates with reserved seats for minorities.\nWhich of the above is/are correct?",
        "options": ["1 and 3 only","1, 2 and 3 only","1, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1, 2, and 3 are correct. Statement 4 is incorrect—the 1935 Act continued with separate electorates; joint electorates with reserved seats came through the Poona Pact of 1932 for the Depressed Classes only."
    },
    {
        "id": "ch1-l3-q27",
        "question": "With reference to the Act of 1786, consider the following:\n1. It was passed to meet the demands of Lord Cornwallis.\n2. It gave the Governor-General the power to override his council in special cases.\n3. It combined the posts of Governor-General and Commander-in-Chief.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. Lord Cornwallis agreed to accept the post of Governor-General only if he was given the overriding power over his council and was also made the Commander-in-Chief. The Act of 1786 fulfilled both demands."
    },
    {
        "id": "ch1-l3-q28",
        "question": "Consider the progression of central legislative bodies in British India:\n1. Governor-General's Council (with legislative functions) → Regulating Act 1773\n2. Indian (Central) Legislative Council → Charter Act 1853\n3. Imperial Legislative Council → Indian Councils Act 1861\n4. Central Legislature (bicameral) → Government of India Act 1919\nWhich of the above sequences are correctly paired?",
        "options": ["1, 2 and 3 only","2, 3 and 4 only","1, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four are correctly paired. Each represents a significant evolution in the legislative setup: from the basic Council under 1773, to a separate legislative body under 1853, to the Imperial Legislative Council under 1861, and finally the bicameral Central Legislature under 1919."
    },
    {
        "id": "ch1-l3-q29",
        "question": "Assertion (A): The Indian Independence Act of 1947 was the culmination of the British constitutional reforms in India.\nReason (R): It abolished the sovereignty of the British Crown over India and created two independent dominions with the power to frame their own constitutions.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. The Indian Independence Act was the final step in the constitutional journey that began with the Regulating Act of 1773, ending with the creation of two sovereign dominions free to make their own constitutions."
    },
    {
        "id": "ch1-l3-q30",
        "question": "Which of the following correctly describes a provision that was introduced by one Act but later abolished or modified by a subsequent Act?",
        "options": ["Company's trade monopoly was introduced by the Charter Act of 1793 and ended by the Charter Act of 1813.","Dyarchy at the provincial level was introduced by the Act of 1919 and abolished by the Act of 1935.","The office of Secretary of State was created by the Act of 1919 and abolished by the Act of 1935.","The Supreme Court at Calcutta was established by the Act of 1773 and abolished by the Act of 1833."],
        "correctAnswerIndex": 1,
        "explanation": "Provincial dyarchy was introduced by the Government of India Act of 1919 and abolished by the Government of India Act of 1935, which replaced it with provincial autonomy. The Company's monopoly predated the Charter Act of 1793."
    }
];


export const CHAPTER_1_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
