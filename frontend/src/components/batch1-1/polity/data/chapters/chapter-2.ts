import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch2-l1-q1",
        "question": "Who was the first person to pitch the idea of a Constituent Assembly for India in 1934?",
        "options": ["Jawaharlal Nehru","Mahatma Gandhi","M.N. Roy","Sardar Vallabhbhai Patel"],
        "correctAnswerIndex": 2,
        "explanation": "It was in 1934 that the idea of a Constituent Assembly for India was put forward for the first time by M.N. Roy, a pioneer of communist movement in India."
    },
    {
        "id": "ch2-l1-q2",
        "question": "In which year did the Indian National Congress (INC) for the first time officially demand a Constituent Assembly to frame the Constitution of India?",
        "options": ["1928","1934","1935","1940"],
        "correctAnswerIndex": 2,
        "explanation": "In 1935, the Indian National Congress (INC), for the first time, officially demanded a Constituent Assembly to frame the Constitution of India."
    },
    {
        "id": "ch2-l1-q3",
        "question": "The demand for a Constituent Assembly was finally accepted in principle by the British Government in what is known as:",
        "options": ["The August Offer of 1940","The Cripps Proposal of 1942","The Cabinet Mission Plan of 1946","The Mountbatten Plan of 1947"],
        "correctAnswerIndex": 0,
        "explanation": "The demand was finally accepted in principle by the British Government in what is known as the"
    },
    {
        "id": "ch2-l1-q4",
        "question": "Under the Cabinet Mission Plan (1946), what was the total assigned strength of the Constituent Assembly?",
        "options": ["296","389","292","308"],
        "correctAnswerIndex": 1,
        "explanation": "The total strength of the Constituent Assembly was to be 389. Of these, 296 seats were to be allotted to British India and 93 seats to the Princely States."
    },
    {
        "id": "ch2-l1-q5",
        "question": "Who among the following boycotted the first meeting of the Constituent Assembly held on December 9, 1946?",
        "options": ["The Indian National Congress","The Muslim League","The Princely States","The Hindu Mahasabha"],
        "correctAnswerIndex": 1,
        "explanation": "The Muslim League boycotted the meeting and insisted on a separate state of Pakistan. Thus, the meeting was attended by only 211 members."
    },
    {
        "id": "ch2-l1-q6",
        "question": "Following the French practice, who was elected as the temporary President of the Constituent Assembly during its first meeting?",
        "options": ["Dr. Rajendra Prasad","Dr. B.R. Ambedkar","Dr. Sachchidananda Sinha","Jawaharlal Nehru"],
        "correctAnswerIndex": 2,
        "explanation": "Dr. Sachchidananda Sinha, the oldest member, was elected as the temporary President of the Assembly, following the French practice."
    },
    {
        "id": "ch2-l1-q7",
        "question": "Who was elected as the permanent President of the Constituent Assembly on December 11, 1946?",
        "options": ["Dr. Rajendra Prasad","H.C. Mukherjee","V.T. Krishnamachari","B.N. Rau"],
        "correctAnswerIndex": 0,
        "explanation": "On December 11, 1946, Dr. Rajendra Prasad and H.C. Mukherjee were elected as the President and Vice-President of the Assembly respectively."
    },
    {
        "id": "ch2-l1-q8",
        "question": "The Constituent Assembly had two Vice-Presidents. One was H.C. Mukherjee. Who was the other?",
        "options": ["K.M. Munshi","V.T. Krishnamachari","Alladi Krishnaswami Ayyar","T.T. Krishnamachari"],
        "correctAnswerIndex": 1,
        "explanation": "The Assembly had two Vice-Presidents. Both H.C. Mukherjee and V.T. Krishnamachari were elected as the Vice-Presidents of the Assembly."
    },
    {
        "id": "ch2-l1-q9",
        "question": "On December 13, 1946, who moved the historic",
        "options": ["Jawaharlal Nehru","Dr. B.R. Ambedkar","Sardar Vallabhbhai Patel","Dr. Rajendra Prasad"],
        "correctAnswerIndex": 0,
        "explanation": "On December 13, 1946, Jawaharlal Nehru moved the historic"
    },
    {
        "id": "ch2-l1-q10",
        "question": "Who was appointed as the Constitutional Advisor (Legal Advisor) to the Constituent Assembly?",
        "options": ["S.N. Mukherjee","Prem Behari Narain Raizada","Sir B.N. Rau","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 2,
        "explanation": "Sir B.N. Rau was appointed as the constitutional advisor (Legal advisor) to the Constituent Assembly."
    },
    {
        "id": "ch2-l1-q11",
        "question": "What was the total time taken by the Constituent Assembly to draft the Constitution of India?",
        "options": ["2 years, 11 months and 18 days","3 years, 1 month and 15 days","2 years, 9 months and 10 days","1 year, 11 months and 18 days"],
        "correctAnswerIndex": 0,
        "explanation": "The Constituent Assembly took 2 years, 11 months and 18 days to finalize the Constitution."
    },
    {
        "id": "ch2-l1-q12",
        "question": "On which date did the Constituent Assembly adopt the National Flag?",
        "options": ["August 15, 1947","July 22, 1947","January 24, 1950","January 26, 1950"],
        "correctAnswerIndex": 1,
        "explanation": "The Constituent Assembly adopted the national flag on July 22, 1947."
    },
    {
        "id": "ch2-l1-q13",
        "question": "On which date did the Constituent Assembly adopt the National Anthem and the National Song?",
        "options": ["August 15, 1947","November 26, 1949","January 24, 1950","January 26, 1950"],
        "correctAnswerIndex": 2,
        "explanation": "The Constituent Assembly adopted the national anthem and the national song on January 24, 1950."
    },
    {
        "id": "ch2-l1-q14",
        "question": "Who was elected as the first President of India by the Constituent Assembly on January 24, 1950?",
        "options": ["Dr. S. Radhakrishnan","Dr. Rajendra Prasad","Jawaharlal Nehru","C. Rajagopalachari"],
        "correctAnswerIndex": 1,
        "explanation": "The Constituent Assembly elected Dr. Rajendra Prasad as the first President of India on January 24, 1950."
    },
    {
        "id": "ch2-l1-q15",
        "question": "The Constituent Assembly appointed several committees to deal with different tasks. Who chaired the",
        "options": ["Sardar Vallabhbhai Patel","Dr. B.R. Ambedkar","Jawaharlal Nehru","Dr. Rajendra Prasad"],
        "correctAnswerIndex": 2,
        "explanation": "The Union Powers Committee was chaired by Jawaharlal Nehru."
    },
    {
        "id": "ch2-l1-q16",
        "question": "Who among the following was the Chairman of the Provincial Constitution Committee?",
        "options": ["Sardar Vallabhbhai Patel","Jawaharlal Nehru","Dr. Rajendra Prasad","J.B. Kripalani"],
        "correctAnswerIndex": 0,
        "explanation": "The Provincial Constitution Committee was chaired by Sardar Vallabhbhai Patel."
    },
    {
        "id": "ch2-l1-q17",
        "question": "The Drafting Committee, set up on August 29, 1947, was entrusted with the task of preparing a draft of the new Constitution. How many members did it consist of?",
        "options": ["Five","Seven","Nine","Eleven"],
        "correctAnswerIndex": 1,
        "explanation": "The Drafting Committee consisted of seven members, chaired by Dr. B.R. Ambedkar."
    },
    {
        "id": "ch2-l1-q18",
        "question": "Who was the Chairman of the Drafting Committee?",
        "options": ["Dr. Rajendra Prasad","Jawaharlal Nehru","Dr. B.R. Ambedkar","K.M. Munshi"],
        "correctAnswerIndex": 2,
        "explanation": "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee."
    },
    {
        "id": "ch2-l1-q19",
        "question": "N. Madhava Rau replaced a member in the Drafting Committee who resigned due to ill-health. Who did he replace?",
        "options": ["D.P. Khaitan","Alladi Krishnaswamy Ayyar","Syed Mohammad Saadullah","B.L. Mitter"],
        "correctAnswerIndex": 3,
        "explanation": "N. Madhava Rau replaced B.L. Mitter who resigned due to ill-health."
    },
    {
        "id": "ch2-l1-q20",
        "question": "Who replaced D.P. Khaitan in the Drafting Committee after his death in 1948?",
        "options": ["N. Gopalaswamy Ayyangar","T.T. Krishnamachari","K.M. Munshi","S.N. Mukherjee"],
        "correctAnswerIndex": 1,
        "explanation": "T.T. Krishnamachari replaced D.P. Khaitan who died in 1948."
    },
    {
        "id": "ch2-l1-q21",
        "question": "The Constitution as adopted on November 26, 1949, contained a Preamble, 395 Articles, and how many Schedules?",
        "options": ["Eight","Nine","Ten","Twelve"],
        "correctAnswerIndex": 0,
        "explanation": "The Constitution as adopted on November 26, 1949, contained a Preamble, 395 Articles and 8 Schedules."
    },
    {
        "id": "ch2-l1-q22",
        "question": "Who introduced the final draft of the Constitution in the Assembly on November 4, 1948 (first reading)?",
        "options": ["Jawaharlal Nehru","Dr. Rajendra Prasad","Dr. B.R. Ambedkar","Sardar Vallabhbhai Patel"],
        "correctAnswerIndex": 2,
        "explanation": "Dr. B.R. Ambedkar introduced the final draft of the Constitution in the Assembly on November 4, 1948."
    },
    {
        "id": "ch2-l1-q23",
        "question": "Which of the following dates is mentioned in the Preamble as the date on which the people of India adopted, enacted, and gave to themselves the Constitution?",
        "options": ["August 15, 1947","November 26, 1949","January 24, 1950","January 26, 1950"],
        "correctAnswerIndex": 1,
        "explanation": "November 26, 1949, is the date of adoption mentioned in the Preamble."
    },
    {
        "id": "ch2-l1-q24",
        "question": "Which date was specifically chosen as the",
        "options": ["August 15","November 26","January 26","October 2"],
        "correctAnswerIndex": 2,
        "explanation": "January 26 was specifically chosen as the"
    },
    {
        "id": "ch2-l1-q25",
        "question": "Who is recognized as the",
        "options": ["Mahatma Gandhi","Dr. Rajendra Prasad","Jawaharlal Nehru","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 3,
        "explanation": "Dr. B.R. Ambedkar is recognized as the Father of the Constitution of India."
    },
    {
        "id": "ch2-l1-q26",
        "question": "What was the symbol (seal) adopted by the Constituent Assembly?",
        "options": ["Lion Capital of Ashoka","Elephant","Tiger","Peacock"],
        "correctAnswerIndex": 1,
        "explanation": "The Elephant was adopted as the symbol (seal) of the Constituent Assembly."
    },
    {
        "id": "ch2-l1-q27",
        "question": "Who was the chief draftsman of the Constitution in the Constituent Assembly?",
        "options": ["Sir B.N. Rau","S.N. Mukherjee","Prem Behari Narain Raizada","T.T. Krishnamachari"],
        "correctAnswerIndex": 1,
        "explanation": "S.N. Mukherjee was the chief draftsman of the constitution in the Constituent Assembly."
    },
    {
        "id": "ch2-l1-q28",
        "question": "The original Constitution of India was handwritten by whom?",
        "options": ["Nandalal Bose","Beohar Rammanohar Sinha","Prem Behari Narain Raizada","S.N. Mukherjee"],
        "correctAnswerIndex": 2,
        "explanation": "Prem Behari Narain Raizada was the calligrapher of the Indian Constitution. The original constitution was handwritten by him in a flowing italic style."
    },
    {
        "id": "ch2-l1-q29",
        "question": "Who illuminated and beautified the original version of the Constitution?",
        "options": ["Artists from Shantiniketan including Nandalal Bose and Beohar Rammanohar Sinha","Artists from the JJ School of Art","S.N. Mukherjee and his team","British calligraphers based in London"],
        "correctAnswerIndex": 0,
        "explanation": "The original version was beautified and decorated by artists from Shantiniketan including Nandalal Bose and Beohar Rammanohar Sinha."
    },
    {
        "id": "ch2-l1-q30",
        "question": "Who calligraphed the Hindi version of the original Constitution?",
        "options": ["Prem Behari Narain Raizada","Nandalal Bose","Vasant Krishnan Vaidya","Beohar Rammanohar Sinha"],
        "correctAnswerIndex": 2,
        "explanation": "The calligraphy of the Hindi version of the original constitution was done by Vasant Krishnan Vaidya and elegantly decorated and illuminated by Nandalal Bose."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch2-l2-q1",
        "question": "Consider the following statements regarding the composition of the Constituent Assembly under the Cabinet Mission Plan (1946):\\n1. The members were directly elected by the people of India on the basis of universal adult franchise.\\n2. The seats allocated to each British province were divided among Muslims, Sikhs, and General, in proportion to their population.\\n3. The representatives of princely states were to be nominated by the heads of the princely states.\\nWhich of the statements given above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is incorrect; members were indirectly elected by the members of the provincial assemblies, who themselves were elected on a limited franchise."
    },
    {
        "id": "ch2-l2-q2",
        "question": "Which of the following was NOT a function performed by the Constituent Assembly of India?",
        "options": ["It ratified India","It enacted the completely new national budget for the year 1948-49.","It adopted the National Flag on July 22, 1947.","It adopted the National Anthem on January 24, 1950."],
        "correctAnswerIndex": 1,
        "explanation": "While the Assembly functioned as a provisional Parliament,"
    },
    {
        "id": "ch2-l2-q3",
        "question": "With reference to the Indian Independence Act of 1947, how did it alter the position of the Constituent Assembly?\\n1. It made the Assembly a fully sovereign body, free to abrogate any British law.\\n2. The Assembly became a bicameral legislative body.\\n3. The total strength of the Assembly was reduced due to the creation of Pakistan.\\nSelect the correct answer:",
        "options": ["1 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is incorrect. The Assembly became the first Parliament of free India (a single, unicameral body at the time), not bicameral. It was made fully sovereign (1) and its strength reduced to 299 (3)."
    },
    {
        "id": "ch2-l2-q4",
        "question": "When the Constituent Assembly met as the provisional Parliament (legislative body), who presided over its sessions?",
        "options": ["Dr. Rajendra Prasad","Jawaharlal Nehru","G.V. Mavalankar","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 2,
        "explanation": "Whenever the Assembly met as the Constituent body it was chaired by Dr. Rajendra Prasad, and when it met as the legislative body, it was chaired by G.V. Mavalankar."
    },
    {
        "id": "ch2-l2-q5",
        "question": "Assertion (A): The Constituent Assembly was a partly elected and partly nominated body.\\nReason (R): The members from British Indian Provinces were indirectly elected, while those from the Princely States were nominated.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true and the reason correctly explains the assertion."
    },
    {
        "id": "ch2-l2-q6",
        "question": "Match the following Committees of the Constituent Assembly with their Chairmen:\\nList-I\\nA. Advisory Committee on Fundamental Rights\\nB. Rules of Procedure Committee\\nC. States Committee (Committee for Negotiating with States)\\nD. Drafting Committee\\n\\nList-II\\n1. Dr. Rajendra Prasad\\n2. Jawaharlal Nehru\\n3. Sardar Vallabhbhai Patel\\n4. Dr. B.R. Ambedkar\\n\\nCode (A-B-C-D):",
        "options": ["3-1-2-4","1-3-2-4","3-2-1-4","2-1-3-4"],
        "correctAnswerIndex": 0,
        "explanation": "Advisory FR (Patel), Rules (Prasad), States (Nehru), Drafting (Ambedkar)."
    },
    {
        "id": "ch2-l2-q7",
        "question": "The Advisory Committee on Fundamental Rights, Minorities and Tribal and Excluded Areas had several sub-committees. Who among the following chaired the Fundamental Rights Sub-Committee?",
        "options": ["J.B. Kripalani","H.C. Mukherjee","Gopinath Bardoloi","A.V. Thakkar"],
        "correctAnswerIndex": 0,
        "explanation": "J.B. Kripalani chaired the Fundamental Rights Sub-Committee."
    },
    {
        "id": "ch2-l2-q8",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect; the Objectives Resolution proposed that the residuary powers would vest in the States (territories comprising the autonomous units), reflecting the initial loose federation idea."
    },
    {
        "id": "ch2-l2-q9",
        "question": "The Preamble to the Indian Constitution is based directly on which of the following?",
        "options": ["The Charter Act of 1853","The Government of India Act 1935","The Objectives Resolution drafted and moved by Jawaharlal Nehru","The Mountbatten Plan"],
        "correctAnswerIndex": 2,
        "explanation": "The Preamble is essentially a modified version of the Objectives Resolution moved by Nehru in 1946."
    },
    {
        "id": "ch2-l2-q10",
        "question": "Which of the following constitutional provisions came into force on November 26, 1949, before the full commencement of the Constitution?",
        "options": ["Fundamental Rights and Directive Principles","Citizenship, Elections, and Provisional Parliament","The Supreme Court and High Courts","Emergency Provisions and Amendment Procedures"],
        "correctAnswerIndex": 1,
        "explanation": "Some provisions pertaining to citizenship, elections, provisional parliament, temporary and transitional provisions (Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392 and 393) came into force on November 26, 1949 itself."
    },
    {
        "id": "ch2-l2-q11",
        "question": "In the Constituent Assembly, the representation of princely states was to be determined by:",
        "options": ["Direct election by the citizens of the princely states.","Election by the rulers of the princely states.","Nomination by the heads of the princely states.","A mix of election and nomination supervised by the British Resident."],
        "correctAnswerIndex": 2,
        "explanation": "The members from princely states were to be nominated by the heads of the princely states."
    },
    {
        "id": "ch2-l2-q12",
        "question": "Assertion (A): The Constituent Assembly was criticized for being a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Granville Austin noted the Assembly was a one-party body in an essentially one-party country heavily dominated by Congress (208 seats)."
    },
    {
        "id": "ch2-l2-q13",
        "question": "Consider the following differences between the Interim Government (1946) and the First Cabinet of Free India (1947):\\n1. Jawaharlal Nehru was the Vice-President of the Viceroy",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is incorrect; Joginder Nath Mandal (Muslim League) was the Law Member in 1946. Dr. Ambedkar became Law Minister only in 1947."
    },
    {
        "id": "ch2-l2-q14",
        "question": "Who among the following was the Chairman of the",
        "options": ["G.V. Mavalankar","K.M. Munshi","Rajendra Prasad","J.B. Kripalani"],
        "correctAnswerIndex": 0,
        "explanation": "G.V. Mavalankar was the chairman of the Committee on the Functions of the Constituent Assembly."
    },
    {
        "id": "ch2-l2-q15",
        "question": "Which of the following is an INCORRECT match regarding the Sources of the Indian Constitution?",
        "options": ["Concurrent List – Australian Constitution","Emergency Provisions – Weimar Constitution of Germany","Directive Principles of State Policy – Irish Constitution","Procedure Established by Law – British Constitution"],
        "correctAnswerIndex": 3,
        "explanation": "Procedure Established by Law is sourced from the Japanese Constitution, not the British. The British Constitution provided the Rule of Law."
    },
    {
        "id": "ch2-l2-q16",
        "question": "From which Constitution did India borrow the",
        "options": ["US Constitution","Irish Constitution","Canadian Constitution","South African Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The Method of Election of the President was adopted from the Irish Constitution."
    },
    {
        "id": "ch2-l2-q17",
        "question": "The concept of",
        "options": ["US Constitution","Canadian Constitution","Government of India Act 1935","Australian Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The Canadian Constitution provided features for a strong centre, including vesting residuary powers in the Centre."
    },
    {
        "id": "ch2-l2-q18",
        "question": "Consider the following features:\\n1. Office of Governor\\n2. Public Service Commissions\\n3. Bi-cameralism at the Centre\\nWhich of these were borrowed directly from the Government of India Act of 1935?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "While bicameralism at the Centre existed in the 1919 and 1935 Acts, standard textbook"
    },
    {
        "id": "ch2-l2-q19",
        "question": "Assertion (A): Some critics argue that the Constituent Assembly was a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "The critics argue it wasn"
    },
    {
        "id": "ch2-l2-q20",
        "question": "Which of the following members of the Drafting Committee was the only Congress member initially?",
        "options": ["K.M. Munshi","T.T. Krishnamachari","Alladi Krishnaswamy Ayyar","N. Gopalaswamy Ayyangar"],
        "correctAnswerIndex": 0,
        "explanation": "K.M. Munshi was the only original Congress member of the Drafting Committee. Others like TTK joined later representing Congress."
    },
    {
        "id": "ch2-l2-q21",
        "question": "Who among the following was the Chairman of the",
        "options": ["Dr. Rajendra Prasad","Jawaharlal Nehru","Sardar Patel","J.B. Kripalani"],
        "correctAnswerIndex": 0,
        "explanation": "Dr. Rajendra Prasad was the Chairman of the Ad hoc Committee on National Flag."
    },
    {
        "id": "ch2-l2-q22",
        "question": "Which among the following committees of the Constituent Assembly was headed by Jawaharlal Nehru?",
        "options": ["Provincial Constitution Committee","Steering Committee","Union Constitution Committee","Advisory Committee on Fundamental Rights"],
        "correctAnswerIndex": 2,
        "explanation": "Jawaharlal Nehru headed the Union Powers Committee, Union Constitution Committee, and States Committee."
    },
    {
        "id": "ch2-l2-q23",
        "question": "The idea of",
        "options": ["The American Declaration of Independence","The French Constitution (Revolution)","The Russian Revolution","The Irish Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The ideals of liberty, equality and fraternity in the Preamble are taken from the French Constitution (French Revolution)."
    },
    {
        "id": "ch2-l2-q24",
        "question": "Consider the following statements:\\n1. Dr. Sachchidananda Sinha was the oldest member of the Assembly.\\n2. The Muslim League",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 2 is incorrect; there were some nationalist Muslims (like Maulana Abul Kalam Azad) who were Congress members and attended the first meeting."
    },
    {
        "id": "ch2-l2-q25",
        "question": "The Indian Constitution borrows the feature of",
        "options": ["British Constitution","Canadian Constitution","Australian Constitution","Irish Constitution"],
        "correctAnswerIndex": 2,
        "explanation": "Concurrent List, freedom of trade, commerce and inter-course, and joint sitting of the two Houses of Parliament are sourced from Australia."
    },
    {
        "id": "ch2-l2-q26",
        "question": "The Constitution of India was legally enacted by the Constituent Assembly acting as:",
        "options": ["A representative body of the Indian people.","The Parliament of the Dominion of India.","The legislature of the Republic of India.","An advisory body to the British Crown."],
        "correctAnswerIndex": 0,
        "explanation": "The Preamble says"
    },
    {
        "id": "ch2-l2-q27",
        "question": "With reference to the criticism of the Constituent Assembly as a",
        "options": ["Winston Churchill","Lord Mountbatten","Lord Viscount Simon","Granville Austin"],
        "correctAnswerIndex": 2,
        "explanation": "Lord Viscount Simon called it a"
    },
    {
        "id": "ch2-l2-q28",
        "question": "Which of the following functions of the Constituent Assembly required it to act as the",
        "options": ["Drafting the Fundamental Rights chapter.","Passing ordinary laws for the country","Negotiating with Princely States for integration.","Appointing Judges to the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "After adopting the Constitution, the Constituent Assembly ceased to exist as a constitution-making body and became the Provisional Parliament to pass ordinary laws until the first general elections in 1951-52."
    },
    {
        "id": "ch2-l2-q29",
        "question": "How did the",
        "options": ["As a completely Unitary State with no provincial autonomy.","As a loose Union of autonomous territories with residuary powers resting in the units.","As an absolute Monarchy under the British Crown.","As a Federation with a highly centralized residuary power structure."],
        "correctAnswerIndex": 1,
        "explanation": "The original Objectives Resolution proposed a union composed of autonomous units retaining all residuary powers, though the final Constitution changed this due to Partition, making a strong Centre."
    },
    {
        "id": "ch2-l2-q30",
        "question": "Match the personality with their role in the making of the Constitution:\\nList-I\\nA. H.V.R. Iyengar\\nB. S.N. Mukherjee\\nC. Prem Behari Narain Raizada\\nList-II\\n1. Chief Draftsman\\n2. Calligrapher\\n3. Secretary to the Constituent Assembly\\nCode (A-B-C):",
        "options": ["3-1-2","1-3-2","2-1-3","3-2-1"],
        "correctAnswerIndex": 0,
        "explanation": "HVR Iyengar was the Secretary, SN Mukherjee was Chief Draftsman, and Raizada was the Calligrapher."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch2-l3-q1",
        "question": "In November 2024, the President released the Constitution of India in Sanskrit and Maithili languages. Regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect; Article 394-A specifically grants"
    },
    {
        "id": "ch2-l3-q2",
        "question": "A recent debate in 2024 (sparked by Bibek Debroy) suggested India needs a",
        "options": ["Article 395, which explicitly repealed the Indian Independence Act, 1947, and the Government of India Act, 1935.","Article 368, which grants the Parliament the power to amend the Constitution.","The Objectives Resolution, which declared the source of all power to be the",".","Article 394, which brought certain provisional clauses into immediate effect on Nov 26, 1949."],
        "correctAnswerIndex": 0,
        "explanation": "Article 395 is the crucial"
    },
    {
        "id": "ch2-l3-q3",
        "question": "With reference to the drafting of the Constitution, what is the significance of the difference in phraseology between",
        "options": ["It differentiates between the legal drafting experts and the political consensus of the Assembly.","It conceptually limits the Constitution","It establishes the doctrine of popular sovereignty, meaning the Constitution","It meant that the document required ratification by adult franchise through a national referendum."],
        "correctAnswerIndex": 2,
        "explanation": "The phrase signifies"
    },
    {
        "id": "ch2-l3-q4",
        "question": "Consider the following bodies associated with the framing of India",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The INC appointed an Experts Committee in July 1946 (headed by Nehru) to prepare material and draft proposals for the Constituent Assembly before it even met in December."
    },
    {
        "id": "ch2-l3-q5",
        "question": "Which of the following criticisms was NOT commonly levelled against the Constituent Assembly by constitutional scholars like Granville Austin or Ivor Jennings?",
        "options": ["It was a",", making the language overly complex and bulky.","It was","because it was not directly elected by adult franchise.","It lacked legitimacy because it failed to incorporate the Government of India Act 1935.","It was essentially a","body (according to Viscount Simon)."],
        "correctAnswerIndex": 2,
        "explanation": "The Assembly actually incorporated massive chunks of the 1935 Act into the Constitution. Jennings criticized it for being a"
    },
    {
        "id": "ch2-l3-q6",
        "question": "The structural part of the Indian Constitution is largely derived from the Government of India Act of 1935. However, which of the following",
        "options": ["The establishment of an independent federal judiciary.","The distribution of legislative powers into three lists.","The enshrinement of a justiciable Bill of Rights (Fundamental Rights).","The creation of entirely autonomous provincial executives responsible to the legislature."],
        "correctAnswerIndex": 2,
        "explanation": "The 1935 Act fiercely avoided including a Bill of Rights (Fundamental Rights) due to British colonial fears. The inclusion of Part III fundamentally differentiated the new structural governance from the colonial era."
    },
    {
        "id": "ch2-l3-q7",
        "question": "In the ongoing debates regarding the",
        "options": ["The requirement of ratification by half the state legislatures for amending federal provisions.","The ability of Parliament to alter the names, boundaries, and areas of states by a simple majority without using Article 368.","The explicit provision giving the Supreme Court the power to review constitutional amendments.","The necessity of a special majority (2/3rds) in both Houses for most amendments."],
        "correctAnswerIndex": 1,
        "explanation": "Article 4 allows Parliament to form new states or alter boundaries by a simple majority, explicitly stating this is NOT an amendment under Article 368, showcasing extreme flexibility."
    },
    {
        "id": "ch2-l3-q8",
        "question": "Compare the framing trajectories of the Indian and Pakistani Constituent Assemblies. The Indian Assembly successfully framed the Constitution by 1949. The original Pakistani Assembly, formed concurrently in 1947, faced which of the following primary constitutional deadlocks that stalled its process for years?",
        "options": ["Refusal of the princely states to integrate into Pakistan.","Inability to agree on the representation formula between the two heavily disproportionate wings (East and West Pakistan).","An immediate military coup led by Ayub Khan in 1948.","The British Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The primary deadlock in Pakistan"
    },
    {
        "id": "ch2-l3-q9",
        "question": "Consider the dual role of the Constituent Assembly (CA). When dealing with the integration of princely states, which committee formed by the CA played an early communicative role, even before Sardar Patel",
        "options": ["Union Powers Committee","Rules of Procedure Committee","The States Committee (Committee for Negotiating with States)","Provincial Constitution Committee"],
        "correctAnswerIndex": 2,
        "explanation": "The States Committee (headed by Nehru) was explicitly formed to negotiate with the Chamber of Princes to bring their representatives into the Assembly."
    },
    {
        "id": "ch2-l3-q10",
        "question": "How did the Cabinet Mission Plan",
        "options": ["The Assembly immediately divided itself into three distinct legislative groups (A, B, and C) to draft provincial constitutions.","The Assembly fiercely rejected it immediately, leading directly to the partition of India.","The initial Committees (like Union Powers) envisioned a very weak Centre with limited powers (Defense, Foreign Affairs, Communications) to accommodate the Grouping plan.","The Grouping plan forced the Assembly to prioritize minority rights over fundamental rights."],
        "correctAnswerIndex": 2,
        "explanation": "Initially, the Assembly worked within the Cabinet Mission framework which proposed a weak center (only 3 subjects). Only after the Partition plan (Mountbatten plan) did the Assembly switch to drafting a strong Centre."
    },
    {
        "id": "ch2-l3-q11",
        "question": "In the context of the recent simultaneous elections (",
        "options": ["Provisions relating to Elections (Article 324) were kept pending until the First General Elections in 1951.","Provisions relating to Elections came into force immediately on Nov 26, 1949, to prepare the institutional framework (ECI) for impending adult-franchise elections.","Elections were not fundamentally addressed until the Representation of the People Act, 1950, was passed.","The entire constitutional framework for elections was borrowed from the US Constitution and enforced in 1950."],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 (Election Commission) was among the few articles that came into force immediately on November 26, 1949, because preparing electoral rolls for universal adult franchise required the immediate establishment of the ECI."
    },
    {
        "id": "ch2-l3-q12",
        "question": "Consider the following statements regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect; the third reading was moved by Dr. B.R. Ambedkar. Dr. Rajendra Prasad was the President of the Assembly, not the mover of the draft readings."
    },
    {
        "id": "ch2-l3-q13",
        "question": "Why did the Constituent Assembly adopt the",
        "options": ["To allow the Drafting Committee time to review its legal terminology.","To wait for the Muslim League to join the Assembly and participate in this foundational resolution.","Because Dr. Ambedkar heavily opposed its socialist undertones initially.","Because the British Cabinet explicitly ordered a delay pending the partition plan."],
        "correctAnswerIndex": 1,
        "explanation": "The Assembly postponed its adoption to late January 1947 to give the Muslim League a chance to join the Assembly and partake in adopting the foundational resolution."
    },
    {
        "id": "ch2-l3-q14",
        "question": "Assertion (A): The Indian Constitution is often called a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Ambedkar proudly defended this"
    },
    {
        "id": "ch2-l3-q15",
        "question": "During recent debates on federalism, several states invoked their autonomy. At the Constituent Assembly, the",
        "options": ["Sardar Patel; a parliamentary model for provinces similar to the Centre.","Jawaharlal Nehru; a presidential model for provinces with an elected Governor.","Dr. B.R. Ambedkar; a highly centralized model where Governors act as full agents of the Centre.","K.M. Munshi; a federal model but without upper legislative houses for any province."],
        "correctAnswerIndex": 0,
        "explanation": "Sardar Patel chaired the Provincial Constitution Committee, which recommended a parliamentary form of government for the provinces (states), mirroring the central structure."
    },
    {
        "id": "ch2-l3-q16",
        "question": "Which of the following describes the unique",
        "options": ["It acted as the constitution-making body for both India and Pakistan simultaneously.","It exercised executive powers as the Cabinet and legislative powers as the Parliament.","It functioned as a sovereign Constituent Assembly for framing the Constitution and as the Dominion Legislature (Provisional Parliament) for making ordinary laws.","It functioned as the Supreme Court for appellate cases and as the Parliament."],
        "correctAnswerIndex": 2,
        "explanation": "It performed two separate functions: making the Constitution (chaired by Rajendra Prasad) and enacting ordinary laws (chaired by G.V. Mavalankar)."
    },
    {
        "id": "ch2-l3-q17",
        "question": "Consider the following statements about the",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "The Elephant was adopted as the symbol (seal) of the Constituent Assembly. The Lion Capital is the National Emblem but was not the Constituent Assembly"
    },
    {
        "id": "ch2-l3-q18",
        "question": "Regarding the incorporation of international mechanisms in the Constitution, the",
        "options": ["British Constitution","Irish Constitution","Japanese Constitution","Canadian Constitution"],
        "correctAnswerIndex": 2,
        "explanation": "The phrase"
    },
    {
        "id": "ch2-l3-q19",
        "question": "At the time of its adoption, the Constitution contained 395 Articles and 8 Schedules. Since then, the number of Schedules has grown to 12. Which was the FIRST Schedule to be added to the Constitution post-adoption, protecting laws from judicial review?",
        "options": ["Eighth Schedule","Ninth Schedule","Tenth Schedule","Eleventh Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Ninth Schedule was added by the 1st Amendment in 1951 to protect land reform laws from judicial review, a significant evolution from the original 8 schedules."
    },
    {
        "id": "ch2-l3-q20",
        "question": "Which Indian artist was entrusted with illuminating the Preamble page of the original Constitution, embedding intricate artwork reflecting India",
        "options": ["Beohar Rammanohar Sinha","Nandalal Bose","Prem Behari Narain Raizada","S.N. Mukherjee"],
        "correctAnswerIndex": 0,
        "explanation": "While Nandalal Bose directed the artwork for the entire document, the specific illumination and beautification of the Preamble page was done by Beohar Rammanohar Sinha (his signature"
    },
    {
        "id": "ch2-l3-q21",
        "question": "The",
        "options": ["To draft the fundamental rights applicable strictly to the princely states.","To negotiate with the princely states to secure their entry into the Constituent Assembly.","To draw the geographical boundaries of the newly created states after partition.","To decide the division of assets between India and Pakistan."],
        "correctAnswerIndex": 1,
        "explanation": "The States Committee (headed by Nehru) was specifically a"
    },
    {
        "id": "ch2-l3-q22",
        "question": "The Constituent Assembly was criticized as a",
        "options": ["That the 1935 Act was actually drafted by Indians during the Round Table Conferences.","That the Constitution included a Bill of Rights, which the British acts lacked.","That nobody holds any patent rights in the fundamental ideas of a Constitution, and administrative continuity was vital for a new nation.","That the 1935 Act was only a temporary measure until a fully socialist constitution could be enacted."],
        "correctAnswerIndex": 2,
        "explanation": "Ambedkar bluntly defended the borrowing:"
    },
    {
        "id": "ch2-l3-q23",
        "question": "In the final drafting stages, the Constituent Assembly rejected the",
        "options": ["The Parliamentary system ensures absolute stability of the executive over accountability.","The Indian populace was more familiar with the Parliamentary system due to decades of British rule, emphasizing daily responsibility over periodic stability.","The Presidential system would contradict the fundamental rights guaranteed to minorities.","The Princely States demanded a Parliamentary system to maintain their local monarchies."],
        "correctAnswerIndex": 1,
        "explanation": "The framers preferred"
    },
    {
        "id": "ch2-l3-q24",
        "question": "Identify the correct chronological order of the following events during the making of the Constitution:\\n1. Adoption of the National Flag.\\n2. Adoption of the Objectives Resolution.\\n3. The passing of the historic",
        "options": ["3-2-1-4","3-1-2-4","2-3-1-4","1-2-3-4"],
        "correctAnswerIndex": 0,
        "explanation": "Purna Swaraj (1929) -> Objectives Resolution (Jan 1947) -> Flag (July 1947) -> Anthem (Jan 1950)."
    },
    {
        "id": "ch2-l3-q25",
        "question": "Article 393 of the Constitution contains the",
        "options": ["This Constitution may be called the Constitution of India.","This Constitution constitutes India into a Sovereign Socialist Secular Democratic Republic.","This Constitution repeals the Government of India Act, 1935.","This Constitution shall come into force on the twenty-sixth day of January, 1950."],
        "correctAnswerIndex": 0,
        "explanation": "Article 393 states the short title:"
    },
    {
        "id": "ch2-l3-q26",
        "question": "Which of the following elements of the Constitution was fundamentally inspired by the Canadian Constitution?",
        "options": ["Advisory jurisdiction of the Supreme Court.","Election of members of the Rajya Sabha.","Ideal of justice in the Preamble.","Fundamental Duties."],
        "correctAnswerIndex": 0,
        "explanation": "Canadian features: Federation with strong centre, residuary powers in the centre, appointment of state governors by the centre, and advisory jurisdiction of the Supreme Court."
    },
    {
        "id": "ch2-l3-q27",
        "question": "The",
        "options": ["The US Constitution","The British Defence of the Realm Act","The Government of India Act, 1935","The Constitution of South Africa"],
        "correctAnswerIndex": 2,
        "explanation": "The detailed emergency provisions are largely drawn from the Government of India Act, 1935 (Section 93 for state emergencies, etc.), while the specific suspension of FRs comes from Weimar."
    },
    {
        "id": "ch2-l3-q28",
        "question": "Consider the critique that the Constituent Assembly was a",
        "options": ["The inclusion of philosophical ideals in the Preamble.","The vast bulk and highly complicated legalistic language defining detailed administrative procedures.","The borrowing of non-justiciable Directive Principles from Ireland.","The guarantee of universal adult franchise."],
        "correctAnswerIndex": 1,
        "explanation": "The massive size, detailed administrative provisions, and complex legal jargon inserted by the lawyer-dominated Assembly led Sir Ivor Jennings to call it a"
    },
    {
        "id": "ch2-l3-q29",
        "question": "Under the Independence Act 1947, the Constituent Assembly became the Dominion Legislature. What was the legal consequence for the representation of the Muslim League in the Assembly post-Partition?",
        "options": ["The Muslim League members who opted for India were expelled.","The Muslim League members from the Indian Dominion territories boycotted the CA entirely.","The members from areas forming Pakistan withdrew completely, reducing the total Assembly strength to 299.","The Muslim League"],
        "correctAnswerIndex": 2,
        "explanation": "Post-partition, Muslim League members from areas allocated to Pakistan withdrew, reducing the Assembly"
    },
    {
        "id": "ch2-l3-q30",
        "question": "Which of the following statements explains the legal significance of the",
        "options": ["On Nov 26, the Assembly became a Republic, but the Constitution was not ready until Jan 26.","On Nov 26, the people enacted the Constitution in its entirety, but kept the President","On Nov 26, the Constitution was adopted and minor provisions enacted, whereas on Jan 26, the entire Constitution was enforced and India formally became a sovereign Republic.","There is no legal difference; both days celebrate the end of British rule."],
        "correctAnswerIndex": 2,
        "explanation": "Nov 26 is the date of adoption with minor provisions (Citizenship, Elections) coming into force. Jan 26 is the"
    }
];

export const CHAPTER_2_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
