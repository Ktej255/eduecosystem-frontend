import { LevelData, ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler
const LEVEL_1_QUESTIONS = [
    {
        question: "Who put forward the idea of a Constituent Assembly for India for the first time in 1934?",
        options: ["M.N. Roy", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
        correctAnswerIndex: 0,
        explanation: "The idea of a Constituent Assembly for India was put forward for the first time in 1934 by M.N. Roy."
    },
    {
        question: "In which year did the Indian National Congress (INC) officially demand a Constituent Assembly to frame the Constitution of India?",
        options: ["1934", "1935", "1938", "1940"],
        correctAnswerIndex: 1,
        explanation: "In 1935, the Indian National Congress (INC), for the first time, officially demanded a Constituent Assembly to frame the Constitution of India."
    },
    {
        question: "The demand for a Constituent Assembly was finally accepted in principle by the British Government in what is known as the:",
        options: ["August Offer of 1940", "Cripps Proposal of 1942", "Cabinet Mission Plan of 1946", "Mountbatten Plan of 1947"],
        correctAnswerIndex: 0,
        explanation: "The demand was finally accepted in principle by the British Government in what is known as the 'August Offer' of 1940."
    },
    {
        question: "Why were the proposals of the Cripps Mission (1942) rejected by the Muslim League?",
        options: ["It did not grant immediate independence.", "It wanted India to be divided into two autonomous states with two separate Constituent Assemblies.", "It proposed a weak centre.", "It did not provide for separate electorates."],
        correctAnswerIndex: 1,
        explanation: "The Muslim League rejected the Cripps Proposals because it wanted India to be divided into two autonomous states with two separate Constituent Assemblies."
    },
    {
        question: "The Constituent Assembly was constituted in November 1946 under the scheme formulated by the:",
        options: ["August Offer", "Cripps Mission", "Cabinet Mission Plan", "Wavell Plan"],
        correctAnswerIndex: 2,
        explanation: "The Constituent Assembly was constituted in November 1946 under the scheme formulated by the Cabinet Mission Plan."
    },
    {
        question: "What was the total strength of the Constituent Assembly as per the Cabinet Mission Plan?",
        options: ["296", "389", "208", "412"],
        correctAnswerIndex: 1,
        explanation: "The total strength of the Constituent Assembly was to be 389."
    },
    {
        question: "Out of the 389 seats, how many were allotted to British India and how many to the Princely States?",
        options: ["296 to British India and 93 to Princely States", "292 to British India and 97 to Princely States", "208 to British India and 73 to Princely States", "300 to British India and 89 to Princely States"],
        correctAnswerIndex: 0,
        explanation: "296 seats were allotted to British India and 93 seats to the Princely States."
    },
    {
        question: "The seats in British India were to be divided among the three principal communities. Which were they?",
        options: ["Hindus, Muslims, and Sikhs", "Muslims, Sikhs, and General (all except Muslims and Sikhs)", "Hindus, Muslims, and Christians", "General, Scheduled Castes, and Scheduled Tribes"],
        correctAnswerIndex: 1,
        explanation: "The seats were divided among the three principal communities: Muslims, Sikhs, and General (all except Muslims and Sikhs)."
    },
    {
        question: "How were the representatives of the Princely States to be selected?",
        options: ["Elected directly by the people.", "Nominated by the heads of the Princely States.", "Elected by an electoral college.", "Selected by the British Viceroy."],
        correctAnswerIndex: 1,
        explanation: "The representatives of the Princely States were to be nominated by the heads of the Princely States."
    },
    {
        question: "The Constituent Assembly was, therefore, a:",
        options: ["Fully elected body.", "Fully nominated body.", "Partly elected and partly nominated body.", "Sovereign body from the start."],
        correctAnswerIndex: 2,
        explanation: "It was a partly elected and partly nominated body."
    },
    {
        question: "The elections to the Constituent Assembly (for 296 seats of British India) were held in July-August 1946. How many seats did the Indian National Congress win?",
        options: ["73", "208", "211", "296"],
        correctAnswerIndex: 1,
        explanation: "The Indian National Congress won 208 seats."
    },
    {
        question: "Who among the following key personalities of India was NOT a member of the Constituent Assembly?",
        options: ["Dr. Rajendra Prasad", "Mahatma Gandhi", "J.B. Kripalani", "K.M. Munshi"],
        correctAnswerIndex: 1,
        explanation: "Mahatma Gandhi was not a member of the Constituent Assembly."
    },
    {
        question: "When was the first meeting of the Constituent Assembly held?",
        options: ["December 6, 1946", "December 9, 1946", "December 11, 1946", "December 13, 1946"],
        correctAnswerIndex: 1,
        explanation: "The Constituent Assembly held its first meeting on December 9, 1946."
    },
    {
        question: "Who was elected as the temporary President of the Assembly, following the French practice, as the oldest member?",
        options: ["Dr. Rajendra Prasad", "Dr. Sachchidanand Sinha", "H.C. Mukherjee", "B.N. Rau"],
        correctAnswerIndex: 1,
        explanation: "Dr. Sachchidanand Sinha, the oldest member, was elected as the temporary President of the Assembly."
    },
    {
        question: "Who was elected as the permanent President of the Constituent Assembly on December 11, 1946?",
        options: ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel"],
        correctAnswerIndex: 2,
        explanation: "Dr. Rajendra Prasad was elected as the permanent President of the Assembly."
    },
    {
        question: "Who were elected as the two Vice-Presidents of the Constituent Assembly?",
        options: ["H.C. Mukherjee and V.T. Krishnamachari", "B.N. Rau and S.N. Mukherjee", "K.M. Munshi and Alladi Krishnaswami Ayyar", "Pattabhi Sitaramayya and G.V. Mavalankar"],
        correctAnswerIndex: 0,
        explanation: "H.C. Mukherjee and V.T. Krishnamachari were elected as the Vice-Presidents."
    },
    {
        question: "On December 13, 1946, who moved the historic 'Objectives Resolution' in the Assembly?",
        options: ["Dr. B.R. Ambedkar", "Sardar Patel", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        correctAnswerIndex: 2,
        explanation: "Jawaharlal Nehru moved the historic 'Objectives Resolution'."
    },
    {
        question: "The 'Objectives Resolution' was unanimously adopted by the Assembly on which date?",
        options: ["December 26, 1946", "January 22, 1947", "January 26, 1947", "August 15, 1947"],
        correctAnswerIndex: 1,
        explanation: "It was unanimously adopted by the Assembly on January 22, 1947."
    },
    {
        question: "The modified version of the 'Objectives Resolution' forms which part of the present Constitution?",
        options: ["Fundamental Rights", "Directive Principles", "Preamble", "Fundamental Duties"],
        correctAnswerIndex: 2,
        explanation: "Its modified version forms the Preamble of the present Constitution."
    },
    {
        question: "Which Act formally empowered the Constituent Assembly to frame any Constitution it pleased and repeal any British Act, including the Independence Act itself?",
        options: ["Cabinet Mission Plan", "Indian Independence Act of 1947", "Government of India Act 1935", "Third June Plan"],
        correctAnswerIndex: 1,
        explanation: "The Indian Independence Act of 1947."
    },
    {
        question: "After the Indian Independence Act of 1947, who chaired the Assembly when it met as a legislative body (Dominion Legislature)?",
        options: ["Dr. Rajendra Prasad", "G.V. Mavalankar", "B.R. Ambedkar", "Jawaharlal Nehru"],
        correctAnswerIndex: 1,
        explanation: "G.V. Mavalankar chaired the Assembly when it met as a legislative body."
    },
    {
        question: "When the Assembly met as a Constitution-making body, it was chaired by _______; when it met as a legislative body, it was chaired by _______.",
        options: ["G.V. Mavalankar; Dr. Rajendra Prasad", "Dr. Rajendra Prasad; G.V. Mavalankar", "Dr. Rajendra Prasad; B.N. Rau", "B.R. Ambedkar; G.V. Mavalankar"],
        correctAnswerIndex: 1,
        explanation: "Dr. Rajendra Prasad (Constitution-making) and G.V. Mavalankar (Legislative body)."
    },
    {
        question: "The Constituent Assembly adopted the National Flag on:",
        options: ["July 22, 1947", "August 15, 1947", "January 26, 1950", "January 24, 1950"],
        correctAnswerIndex: 0,
        explanation: "July 22, 1947."
    },
    {
        question: "On January 24, 1950, the Constituent Assembly adopted which of the following?",
        options: ["National Anthem", "National Song", "Dr. Rajendra Prasad as the first President of India", "All of the above"],
        correctAnswerIndex: 3,
        explanation: "All of the above."
    },
    {
        question: "How much time did the Constituent Assembly take to frame the Constitution?",
        options: ["2 years, 11 months, and 18 days", "3 years, 1 month, and 10 days", "2 years, 10 months, and 8 days", "3 years exactly"],
        correctAnswerIndex: 0,
        explanation: "2 years, 11 months, and 18 days."
    },
    {
        question: "Who was the Chairman of the Union Powers Committee and the Union Constitution Committee?",
        options: ["Sardar Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "J.B. Kripalani"],
        correctAnswerIndex: 1,
        explanation: "Jawaharlal Nehru."
    },
    {
        question: "Who was the Chairman of the Provincial Constitution Committee?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad", "H.C. Mukherjee"],
        correctAnswerIndex: 1,
        explanation: "Sardar Patel."
    },
    {
        question: "The Drafting Committee was set up on August 29, 1947. How many members did it have?",
        options: ["5", "6", "7", "9"],
        correctAnswerIndex: 2,
        explanation: "7 members."
    },
    {
        question: "Who among the following was NOT a member of the Drafting Committee?",
        options: ["Dr. K.M. Munshi", "Syed Mohammad Saadullah", "N. Madhava Rau", "Pattabhi Sitaramayya"],
        correctAnswerIndex: 3,
        explanation: "Pattabhi Sitaramayya."
    },
    {
        question: "Who replaced B.L. Mitter on the Drafting Committee due to ill health?",
        options: ["N. Madhava Rau", "T.T. Krishnamachari", "Alladi Krishnaswami Ayyar", "D.P. Khaitan"],
        correctAnswerIndex: 0,
        explanation: "N. Madhava Rau."
    },
    {
        question: "Who replaced D.P. Khaitan on the Drafting Committee after his death in 1948?",
        options: ["H.V. Kamath", "T.T. Krishnamachari", "K.C. Sharma", "S.N. Mukherjee"],
        correctAnswerIndex: 1,
        explanation: "T.T. Krishnamachari."
    },
    {
        question: "The Constitution as adopted on November 26, 1949, contained a Preamble, ____ Articles, and ____ Schedules.",
        options: ["395 Articles, 8 Schedules", "395 Articles, 10 Schedules", "448 Articles, 12 Schedules", "390 Articles, 8 Schedules"],
        correctAnswerIndex: 0,
        explanation: "395 Articles and 8 Schedules."
    },
    {
        question: "The Preamble was enacted:",
        options: ["Before the entire Constitution was enacted.", "After the entire Constitution was already enacted.", "Simultaneously with the Objectives Resolution.", "On August 15, 1947."],
        correctAnswerIndex: 1,
        explanation: "After the entire Constitution was already enacted."
    },
    {
        question: "Some provisions of the Constitution (like Citizenship, Elections, Provisional Parliament) came into force on November 26, 1949 itself. The remaining provisions came into force on:",
        options: ["January 26, 1950", "August 15, 1950", "January 1, 1950", "December 26, 1949"],
        correctAnswerIndex: 0,
        explanation: "January 26, 1950."
    },
    {
        question: "Why was January 26 chosen as the 'date of commencement' of the Constitution?",
        options: ["It was the birthdate of Dr. Ambedkar.", "To commemorate the 'Purna Swaraj' day celebrated in 1930.", "It was the day the Drafting Committee was formed.", "It was the day the Second World War ended."],
        correctAnswerIndex: 1,
        explanation: "To commemorate the 'Purna Swaraj' day."
    }
];

// Level 2: The Conceptual Bridge
const LEVEL_2_QUESTIONS = [
    {
        question: "\"The Constituent Assembly was not a sovereign body.\" This criticism is often leveled against the Assembly because:",
        options: ["It was created by the British Parliament's proposal (Cabinet Mission Plan).", "It was elected indirectly by the Provincial Assemblies.", "It included nominated members from Princely States.", "It did not have the power to alter its own composition."],
        correctAnswerIndex: 0,
        explanation: "Critics argue it wasn't sovereign initially because it was created by the proposals of the British Government (Cabinet Mission Plan)."
    },
    {
        question: "How did the Indian Independence Act of 1947 change the position of the Constituent Assembly regarding its sovereignty?",
        options: ["It made the Assembly a fully sovereign body, free to abrogate any British law.", "It dissolved the Assembly and called for fresh elections.", "It restricted the Assembly's power to framing the Constitution only.", "It made the Governor-General the head of the Assembly."],
        correctAnswerIndex: 0,
        explanation: "The Act made the Assembly a fully sovereign body, empowered to frame any Constitution and repeal any act of the British Parliament."
    },
    {
        question: "The Constituent Assembly performed two separate functions. Which of the following statements are correct?\n1. Both functions were performed on the same days.\n2. When it met as the Constituent Assembly, it was chaired by Dr. Rajendra Prasad.\n3. When it met as the Legislative body, it was chaired by G.V. Mavalankar.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 1,
        explanation: "Statement 1 is incorrect because the two functions were performed on separate days. Statements 2 and 3 are correct."
    },
    {
        question: "Critics argue that the Constituent Assembly was \"dominated by Congress.\" Which famous British expert commented, \"The Constituent Assembly was a one-party body in an essentially one-party country\"?",
        options: ["Winston Churchill", "Lord Mountbatten", "Granville Austin", "Clement Attlee"],
        correctAnswerIndex: 2,
        explanation: "This comment was made by Granville Austin, a British constitutional expert."
    },
    {
        question: "Why did the Constituent Assembly rely on \"Indirect Election\" rather than \"Direct Election\" by adult franchise?",
        options: ["Direct elections were considered too expensive and time-consuming.", "The literacy rate was too low for direct elections.", "The Congress Party feared losing a direct election.", "The British Government prohibited direct elections."],
        correctAnswerIndex: 0,
        explanation: "Given the urgency and the communal atmosphere, direct elections were considered too slow and cumbersome."
    },
    {
        question: "The \"Drafting Committee\" is often considered the most important committee. However, it did not work in isolation. Its primary task was to:",
        options: ["Generate new ideas for the Constitution from scratch.", "Scrutinize the draft prepared by the Constitutional Advisor (B.N. Rau) and other committees.", "Copy the Government of India Act, 1935 verbatim.", "Translate the British Constitution into Indian languages."],
        correctAnswerIndex: 1,
        explanation: "Its task was to scrutinize the draft prepared by the Constitutional Advisor (B.N. Rau) and give it a final shape."
    },
    {
        question: "Match the Committee with its Chairman:\nA. Steering Committee\nB. Fundamental Rights Sub-Committee\nC. Union Constitution Committee\nD. States Committee (Negotiating)",
        options: ["A-2 (Prasad), B-3 (Kripalani), C-1 (Nehru), D-1 (Nehru)", "A-2 (Prasad), B-4 (Patel), C-1 (Nehru), D-1 (Nehru)", "A-1, B-3, C-2, D-4", "A-2, B-3, C-4, D-1"],
        correctAnswerIndex: 0,
        explanation: "Correct Match: Steering - Rajendra Prasad (2), FR Sub-Committee - J.B. Kripalani (3), Union Constitution - Nehru (1), States Committee (Negotiating) - Nehru (1)."
    },
    {
        question: "The \"Objective Resolution\" moved by Nehru laid down the fundamentals. Which of the following was NOT explicitly mentioned in the original resolution?",
        options: ["India is to be an Independent Sovereign Republic.", "Territories of India shall possess residuary powers (Federalism).", "Social, economic, and political justice for all people.", "A secular state with a uniform civil code."],
        correctAnswerIndex: 3,
        explanation: "The word 'Secular' was not explicitly mentioned in the original resolution."
    },
    {
        question: "Why did Dr. Ambedkar call the \"Draft Constitution\" a \"Federal\" constitution despite its strong centralizing tendency?",
        options: ["Because it created a dual polity (Union and States).", "Because the States had the right to secede.", "Because the judiciary was independent.", "Because the Governor was elected."],
        correctAnswerIndex: 0,
        explanation: "He argued it is federal because it establishes a dual polity (Union and States) with authority derived from the Constitution."
    },
    {
        question: "The Constituent Assembly appointed a \"Drafting Committee\" on August 29, 1947. Who among the following was the only Congress member in this committee (originally)?",
        options: ["K.M. Munshi", "Alladi Krishnaswami Ayyar", "N. Madhava Rau", "Mohammad Saadullah"],
        correctAnswerIndex: 0,
        explanation: "K.M. Munshi was the most prominent Congress member (originally)."
    },
    {
        question: "\"The Constitution was adopted on November 26, 1949.\" What is the legal significance of the word \"Adopted\" here?",
        options: ["It means the Constitution came into full force on this day.", "It means the people of India enacted the Constitution and gave it to themselves on this day.", "It means the British Parliament approved it on this day.", "It means the Draft was finalized, but it had no legal force until Jan 26, 1950."],
        correctAnswerIndex: 1,
        explanation: "The Preamble states 'do hereby Adopt, Enact and Give to ourselves this Constitution', signifying the people's act of giving the law to themselves."
    },
    {
        question: "The \"Elephant size\" of the Indian Constitution is often attributed to:",
        options: ["The dominance of legal luminaries in the Assembly.", "The inclusion of administrative details from the Act of 1935.", "The need to accommodate the diversity of a vast country.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All factors contributed: Geography, Diversity, 1935 Act influence, and dominance of legal luminaries."
    },
    {
        question: "Why did the Constituent Assembly take nearly 3 years to frame the Constitution?",
        options: ["There was a lack of consensus on key issues.", "The Partition of India disrupted the process.", "The Assembly wanted to incorporate the best provisions from world constitutions.", "The members were busy with administration."],
        correctAnswerIndex: 2,
        explanation: "The framers wanted to incorporate the best provisions from various constitutions and adapt them to Indian conditions."
    },
    {
        question: "Which of the following provisions came into force immediately on November 26, 1949?\n1. Citizenship\n2. Elections\n3. Fundamental Rights\n4. Provisional Parliament",
        options: ["1 and 2 only", "1, 2, and 3 only", "1, 2, and 4 only", "1, 2, 3, and 4"],
        correctAnswerIndex: 2,
        explanation: "Fundamental Rights (Part III) came into force on Jan 26, 1950. Citizenship, Elections, and Provisional Parliament came into force on Nov 26, 1949."
    },
    {
        question: "Which Constitutional Amendment later authorized the President to publish the Hindi translation of the Constitution?",
        options: ["42nd Amendment Act, 1976", "58th Amendment Act, 1987", "44th Amendment Act, 1978", "61st Amendment Act, 1988"],
        correctAnswerIndex: 1,
        explanation: "The 58th Amendment Act of 1987 authorized the President to publish the translation of the Constitution in Hindi."
    },
    {
        question: "The idea of the \"Constituent Assembly\" being elected by \"Adult Franchise\" was advocated by Nehru in 1938. Why was this not implemented in 1946?",
        options: ["The British Government refused to organize such a massive election.", "The Cabinet Mission Plan mandated indirect elections to speed up the transfer of power.", "The Muslim League opposed adult franchise.", "There were no electoral rolls available."],
        correctAnswerIndex: 1,
        explanation: "The Cabinet Mission Plan mandated indirect elections to avoid delay in the transfer of power."
    },
    {
        question: "Which of the following functions did the Constituent Assembly perform in addition to making the Constitution?\n1. Ratified India's membership of the Commonwealth.\n2. Adopted the National Flag.\n3. Elected the first President of India.\n4. Legislated the Hindu Code Bill (in part).",
        options: ["1 and 2 only", "2 and 3 only", "1, 2, and 3 only", "1, 2, 3, and 4"],
        correctAnswerIndex: 2,
        explanation: "It ratified Commonwealth membership (May 1949), adopted the Flag (July 1947), and elected the first President (Jan 1950)."
    },
    {
        question: "The \"Advisory Committee on Fundamental Rights...\" was chaired by Sardar Patel. Who chaired the 'Minorities Sub-Committee'?",
        options: ["J.B. Kripalani", "H.C. Mukherjee", "Gopinath Bardoloi", "A.V. Thakkar"],
        correctAnswerIndex: 1,
        explanation: "H.C. Mukherjee chaired the Minorities Sub-Committee."
    },
    {
        question: "\"It is a Lawyer's Paradise.\" This criticism of the Constitution refers to:",
        options: ["The complexity and legalistic language used in the Constitution.", "The fact that only lawyers can contest elections.", "The dominance of the Judiciary over the Legislature.", "The excessive number of laws in India."],
        correctAnswerIndex: 0,
        explanation: "Sir Ivor Jennings called it a 'Lawyer's Paradise' because the legalistic language would lead to endless litigation."
    },
    {
        question: "Consider the following statements regarding the \"States Committee\":\n1. It was chaired by Jawaharlal Nehru.\n2. Its primary task was to integrate the Princely States.",
        options: ["1 only", "1 and 2", "2 only", "Neither 1 nor 2"],
        correctAnswerIndex: 0,
        explanation: "It was chaired by Nehru. Its task was 'Negotiating with States' for entry. 'Integration' was Patel's work."
    },
    {
        question: "Deep Dive: Why did the Constituent Assembly retain the \"Federal Scheme\" of the 1935 Act despite the Partition?",
        options: ["Because they wanted to appease the remaining Princely States.", "Because they realized a vast country like India could not be governed from a single centre.", "Because the British insisted on it.", "Because it was the only model they knew."],
        correctAnswerIndex: 1,
        explanation: "The framers realized that a unitary system was not feasible for a vast and diverse country like India."
    },
    {
        question: "What triggered the gradual joining of representatives from Princely States after April 28, 1947?",
        options: ["The Mountbatten Plan of June 3, 1947.", "The threat of military action by Sardar Patel.", "The acceptance of the partition principle became imminent.", "The persuasion by Lord Wavell."],
        correctAnswerIndex: 0,
        explanation: "The acceptance of the Mountbatten Plan (June 3) made it clear that partition was happening, leading most remaining states to join."
    },
    {
        question: "Assertion (A): The Constituent Assembly was a \"representative\" body, though not directly elected.\nReason (R): The seats were allocated in proportion to the population, and the method of election (PR with STV) ensured that all communities were represented.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "While not directly elected, the allocation and PR method ensured it represented all sections of Indian society fairly well."
    },
    {
        question: "Who was the \"Constitutional Advisor\" to the Constituent Assembly?",
        options: ["B.N. Rau", "S.N. Mukherjee", "H.V.R. Iyengar", "Prem Behari Narain Raizada"],
        correctAnswerIndex: 0,
        explanation: "Sir B.N. Rau was the Constitutional Advisor."
    },
    {
        question: "The \"Calligrapher\" of the Indian Constitution (who hand-wrote the original document) was:",
        options: ["Nand Lal Bose", "Prem Behari Narain Raizada", "Beohar Rammanohar Sinha", "Vasant Krishan Vaidya"],
        correctAnswerIndex: 1,
        explanation: "Prem Behari Narain Raizada was the calligrapher."
    },
    {
        question: "The artists from which institution were responsible for the beautification of the original Constitution?",
        options: ["J.J. School of Art, Bombay", "Shantiniketan", "Madras School of Art", "Calcutta School of Art"],
        correctAnswerIndex: 1,
        explanation: "Artists from Shantiniketan, including Nandalal Bose, decorated it."
    },
    {
        question: "How many \"Sessions\" did the Constituent Assembly hold in total?",
        options: ["9", "11", "12", "15"],
        correctAnswerIndex: 1,
        explanation: "The Constituent Assembly held 11 sessions in total (spanning 2 years, 11 months, 18 days)."
    },
    {
        question: "In the \"Mountbatten Plan\" (June 3, 1947), it was decided that:",
        options: ["The Constituent Assembly would continue as one body.", "A separate Constituent Assembly would be set up for Pakistan.", "The Constituent Assembly of India would have no power.", "The British Parliament would draft the Constitution."],
        correctAnswerIndex: 1,
        explanation: "It provided for the creation of a separate Constituent Assembly for Pakistan."
    },
    {
        question: "Which of the following political groups formally boycotted the first meeting of the Constituent Assembly?",
        options: ["The Justice Party", "The Muslim League", "The Hindu Mahasabha", "The Scheduled Castes Federation"],
        correctAnswerIndex: 1,
        explanation: "The Muslim League boycotted the meeting to demand Pakistan."
    },
    {
        question: "The \"Chief Draftsman\" of the Constitution in the Constituent Assembly was:",
        options: ["S.N. Mukherjee", "H.V.R. Iyengar", "B.N. Rau", "Dr. B.R. Ambedkar"],
        correctAnswerIndex: 0,
        explanation: "S.N. Mukherjee was the Chief Draftsman of the Constitution."
    }
];

// Level 3: The UPSC Simulation
const LEVEL_3_QUESTIONS = [
    {
        question: "In September 2023, the Old Parliament House was renamed \"Samvidhan Sadan\". Historically, what was the specific significance of the \"Central Hall\" of this building?",
        options: ["It was where the first meeting of the Constituent Assembly was held.", "It was the library of the Constituent Assembly.", "It was the office of the Drafting Committee.", "It was where the Transfer of Power ceremony took place only."],
        correctAnswerIndex: 0,
        explanation: "The Central Hall (Constitution Hall) is where the Constituent Assembly met to frame the Constitution."
    },
    {
        question: "With the implementation of the Nari Shakti Vandan Adhiniyam, women's representation is set to increase. In the Constituent Assembly (1946-1950), what was the total strength of women members?",
        options: ["9", "12", "15", "21"],
        correctAnswerIndex: 2,
        explanation: "There were 15 women members in the Constituent Assembly."
    },
    {
        question: "Dakshayani Velayudhan was a significant figure in the Constituent Assembly. She was distinct because:",
        options: ["She was the only female member of the Drafting Committee.", "She was the first and only Dalit woman to be elected to the Constituent Assembly.", "She was the youngest member of the Assembly.", "She presided over the Assembly in the absence of Dr. Rajendra Prasad."],
        correctAnswerIndex: 1,
        explanation: "She was the first and only Dalit woman to be elected to the Constituent Assembly."
    },
    {
        question: "The \"Hamara Samvidhan Hamara Samman\" campaign emphasizes decolonization. Which decision of the Constituent Assembly most reflects this spirit?",
        options: ["Adopting the Parliamentary system.", "Repealing the Indian Independence Act, 1947, via Article 395.", "Retaining the \"Rule of Law\".", "Using English as the language of the High Courts."],
        correctAnswerIndex: 1,
        explanation: "Article 395 repealed the Indian Independence Act, 1947 and the Government of India Act, 1935, severing legal ties with the British Parliament."
    },
    {
        question: "The First Amendment Act, 1951—which added the Ninth Schedule—was passed by which body?",
        options: ["The Lok Sabha.", "The Provisional Parliament (which was the Constituent Assembly).", "The Rajya Sabha.", "A Joint Sitting."],
        correctAnswerIndex: 1,
        explanation: "It was passed by the Provisional Parliament (the Constituent Assembly functioning as the legislature) in 1951."
    },
    {
        question: "Consider the following regarding the \"Sovereignty\" of the Constituent Assembly:\n1. Before August 15, 1947, the Assembly was not fully sovereign.\n2. The Indian Independence Act, 1947, expressly declared the Assembly to be a sovereign body.\n3. The Assembly had the power to abrogate any British law.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3,
        explanation: "All statements are correct. It became sovereign only after the Independence Act."
    },
    {
        question: "S.N. Mukherjee is often an unsung hero. His role was described as:",
        options: ["The Constitutional Advisor.", "The Chief Draftsman who put the complex proposals into clear legal language.", "The Calligrapher.", "The Chairman of the Credentials Committee."],
        correctAnswerIndex: 1,
        explanation: "He was the Chief Draftsman, praised by Ambedkar for his ability to put intricate proposals into legal form."
    },
    {
        question: "Match the Member with the specific Community they represented:\nA. Frank Anthony\nB. H.P. Modi\nC. Jaipal Singh Munda\nD. Shyama Prasad Mukherjee",
        options: ["A-2 (Anglo-Indian), B-1 (Parsee), C-4 (Tribal), D-3 (Hindu Mahasabha)", "A-2, B-3, C-4, D-1", "A-1, B-2, C-3, D-4", "A-4, B-1, C-2, D-3"],
        correctAnswerIndex: 0,
        explanation: "Frank Anthony (Anglo-Indians), H.P. Modi (Parsees), Jaipal Singh (Tribals), S.P. Mukherjee (Hindu Mahasabha)."
    },
    {
        question: "The \"Provincial Constitution Committee\" was chaired by:",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad", "B.N. Rau"],
        correctAnswerIndex: 1,
        explanation: "Sardar Patel chaired the Provincial Constitution Committee."
    },
    {
        question: "Who among the following was the Constitutional Advisor to the Assembly, and also played a key role in representing India at the ICJ?",
        options: ["Dr. B.R. Ambedkar", "Sir B.N. Rau", "Alladi Krishnaswami Ayyar", "K.M. Munshi"],
        correctAnswerIndex: 1,
        explanation: "Sir B.N. Rau was the Constitutional Advisor and later served as a judge at the ICJ."
    },
    {
        question: "The final session (January 24, 1950) is often considered the 12th session. What was the specific agenda?",
        options: ["To debate the Preamble.", "To sign the Constitution, adopt the National Anthem/Song, and elect the first President.", "To pass the Indian Independence Act.", "To partition the Assembly seats."],
        correctAnswerIndex: 1,
        explanation: "On Jan 24, 1950, the Assembly met to just sign the Constitution and elect the President, not for debate."
    },
    {
        question: "The Assembly was elected:\n1. Directly by the people.\n2. Indirectly by the members of the Provincial Legislative Assemblies.\n3. Nominated entirely.",
        options: ["1 only", "2 only", "3 only", "1 and 2"],
        correctAnswerIndex: 1,
        explanation: "The Constituent Assembly was elected indirectly by the members of the Provincial Legislative Assemblies."
    },
    {
        question: "Why did the Constituent Assembly reject the system of \"Proportional Representation\" for the Lok Sabha?",
        options: ["It was too complicated for illiterate voters.", "It would lead to unstable governments (coalitions).", "It creates a distance between the voter and the representative.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All reasons were cited: complexity, instability, and lack of direct contact."
    },
    {
        question: "Granville Austin described the Congress in the Assembly not as a dictatorial party but as:",
        options: ["A rigid dictatorial party.", "A broad umbrella or \"consensus\" party representing diverse viewpoints.", "A party of the elite lawyers only.", "A party controlled by the British."],
        correctAnswerIndex: 1,
        explanation: "He described it as a party of 'Consensus' and 'Accommodation'."
    },
    {
        question: "The method of Proportional Representation by means of Single Transferable Vote is currently used in India for the election of:",
        options: ["President only", "President and Rajya Sabha Members", "Rajya Sabha Members and Lok Sabha Members", "All of the above"],
        correctAnswerIndex: 1,
        explanation: "It is used for the President, Vice-President, and Rajya Sabha members, but NOT for Lok Sabha."
    },
    {
        question: "Which artist from Shantiniketan sketched the 'Lion Capital of Ashoka' for the emblem and the borders of the pages?",
        options: ["Beohar Rammanohar Sinha", "Nandalal Bose", "Abanindranath Tagore", "Raja Ravi Varma"],
        correctAnswerIndex: 1,
        explanation: "Nandalal Bose sketched the Lion Capital and led the art team."
    },
    {
        question: "On the Preamble page, the signature \"Ram\" belongs to:",
        options: ["Beohar Rammanohar Sinha", "Prem Behari Narain Raizada", "Vasant Krishan Vaidya", "Nandalal Bose"],
        correctAnswerIndex: 0,
        explanation: "It belongs to Beohar Rammanohar Sinha (Jabalpur-born artist from Shantiniketan)."
    },
    {
        question: "The \"Seal\" of the Constituent Assembly depicted which animal?",
        options: ["Tiger", "Lion", "Elephant", "Bull"],
        correctAnswerIndex: 2,
        explanation: "The Elephant was the symbol (seal) of the Constituent Assembly."
    },
    {
        question: "How did the \"Mountbatten Plan\" (June 3, 1947) affect the composition of the Constituent Assembly?",
        options: ["The total strength increased.", "The members from the areas included in Pakistan withdrew, reducing the strength to 299.", "The Princely States were removed.", "The British members were added."],
        correctAnswerIndex: 1,
        explanation: "The members from Pakistan territories withdrew, reducing the strength from 389 to 299."
    },
    {
        question: "Who was the Law Minister in the first cabinet of free India and also the Chairman of the Drafting Committee?",
        options: ["Dr. B.R. Ambedkar", "K.M. Munshi", "Alladi Krishnaswami Ayyar", "N. Madhava Rau"],
        correctAnswerIndex: 0,
        explanation: "Dr. B.R. Ambedkar was the First Law Minister and Chairman of the Drafting Committee."
    },
    {
        question: "Assertion (A): The Constitution of India is the longest written constitution.\nReason (R): The Assembly incorporated provisions from various constitutions and detailed administrative provisions to prevent ambiguity.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "The detailed nature was intentional to avoid future legal ambiguities, leading to its length."
    },
    {
        question: "The \"Hindi Translation\" of the Constitution was signed by the members on:",
        options: ["January 24, 1950", "January 26, 1950", "November 26, 1949", "It was not signed"],
        correctAnswerIndex: 0,
        explanation: "The members signed both the English and Hindi versions on January 24, 1950."
    },
    {
        question: "Which provision was used by the Constituent Assembly to function as the \"Provisional Parliament\"?",
        options: ["Article 368", "Article 370", "Article 379", "Article 395"],
        correctAnswerIndex: 2,
        explanation: "Article 379 (now repealed) contained the transitional provision for the Provisional Parliament."
    },
    {
        question: "Decisions in the Assembly were mostly arrived at by:",
        options: ["Simple Majority", "Two-thirds Majority", "Consensus and Accommodation", "Direction of the Congress"],
        correctAnswerIndex: 2,
        explanation: "They preferred Consensus and Accommodation over simple majority voting to ensure wide acceptance."
    },
    {
        question: "The inclusion of DPSP was influenced by the Irish Constitution and the report of which committee?",
        options: ["Nehru Report", "Sapru Committee (1945)", "Simon Commission", "Butler Committee"],
        correctAnswerIndex: 1,
        explanation: "The Sapru Committee (1945) recommended dividing rights into Justiciable (Fundamental Rights) and Non-Justiciable (DPSP)."
    },
    {
        question: "The date \"November 26, 1949\" in the Preamble signifies:",
        options: ["Date of commencement", "The date on which the people Adopted, Enacted and gave to themselves the Constitution", "British ratification", "Republic Day"],
        correctAnswerIndex: 1,
        explanation: "It is the date of Adoption and Enactment."
    },
    {
        question: "\"Constitution Day\" was first celebrated in 2015 to mark the 125th birth anniversary of:",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B.R. Ambedkar", "Sardar Patel"],
        correctAnswerIndex: 2,
        explanation: "It marks the 125th birth anniversary of Dr. B.R. Ambedkar."
    },
    {
        question: "Which of the following was NOT a function of the Constituent Assembly?",
        options: ["Adopting the National Flag.", "Ratifying the Commonwealth membership.", "Appointing the first Prime Minister.", "Electing the first President."],
        correctAnswerIndex: 2,
        explanation: "The Prime Minister was appointed, but the Constituent Assembly (as a body) Elected the President. The PM was already head of the Interim Govt."
    },
    {
        question: "Which member was a strong advocate of the \"Trinity\" of Liberty, Equality, and Fraternity?",
        options: ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "K.M. Munshi", "Sarojini Naidu"],
        correctAnswerIndex: 1,
        explanation: "Dr. B.R. Ambedkar strongly argued that Liberty, Equality, and Fraternity form a union of trinity."
    },
    {
        question: "The Central Hall is historically unique because:",
        options: ["It was only used by the CA.", "It was used for British Joint Sittings.", "It was the meeting place of the Chamber of Princes, the Constituent Assembly, and later Joint Sittings.", "It was built specifically for the CA."],
        correctAnswerIndex: 2,
        explanation: "It housed the Chamber of Princes (pre-1947), the Constituent Assembly (1946-49), and Parliament Joint Sittings (post-1950)."
    }
];

export const CHAPTER_2_LEVELS: ChapterLevelData = {
    topicId: 2,
    levels: [
        {
            levelId: 1,
            title: "Text-Book Stickler",
            description: "Strictly Chapter 2: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch2-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch2-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch2-l3-q${i + 1}` }))
        }
    ]
};
