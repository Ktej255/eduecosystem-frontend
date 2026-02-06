export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string | number;
    difficulty?: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_26_SUBTOPICS = [
    { id: 1, name: "Phase I (1740–1813): Ring Fence", status: 'todo' },
    { id: 2, name: "Phase II (1813–1857): Subordinate Isolation", status: 'todo' },
    { id: 3, name: "Phase III (1857–1935): Subordinate Union", status: 'todo' },
    { id: 4, name: "Integration (1947): Instrument of Accession", status: 'todo' },
    { id: 5, name: "People's Movements (Praja Mandals)", status: 'todo' },
];

export const MODERN_CHAPTER_26_MCQS = [
    {
        id: 1,
        question: "Which of the following correctly describes the 'Policy of Ring Fence' (1765–1813) followed by the East India Company?",
        options: ["Total non-intervention in Indian states.", "Creating buffer zones to defend the Company’s frontiers from invaders (like Marathas/Afghans).", "Integrating states into the British Empire.", "Forcing states to adopt British culture."],
        correctAnswer: 1,
        explanation: "Ring Fence: Creating buffer states (like Awadh) to absorb the shock of invasion.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 2,
        question: "Who among the following Governor-Generals is most closely associated with the 'Policy of Subordinate Isolation' (1813–1857)?",
        options: ["Warren Hastings", "Lord Hastings", "Lord Canning", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Lord Hastings (1813–1823) ended the fiction of equality and imposed British Paramountcy (Subordinate Isolation).",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The shift from 'Subordinate Isolation' to 'Subordinate Union' (1857 onwards) meant that:",
        options: ["The British would now annex states for maladministration.", "The British abandoned the policy of annexation but asserted the right to interfere in internal affairs and punish rulers for misconduct.", "The Princes were given complete independence.", "The Princes were allowed to have foreign relations."],
        correctAnswer: 1,
        explanation: "After 1857, the British needed the Princes as allies ('Breakwaters'). So, no annexation, but strict control over internal affairs (Subordinate Union).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "The 'Doctrine of Lapse' was applied by Dalhousie to annex:",
        options: ["Awadh", "Satara, Jaipur, and Sambalpur", "Mysore", "Hyderabad"],
        correctAnswer: 1,
        explanation: "Satara, Jaipur, Sambalpur, Baghat, Udaipur, Jhansi, Nagpur. (Awadh was Annexed for Misgovernance).",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Policy of Masterly Inactivity' is usually associated with British relations with:",
        options: ["The Indian Princely States", "Afghanistan", "Burma", "Tibet"],
        correctAnswer: 1,
        explanation: "Masterly Inactivity (John Lawrence) refers to the policy towards Afghanistan.",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Chamber of Princes' (Narendra Mandal) was established in 1921 on the recommendation of:",
        options: ["The Morley-Minto Reforms (1909)", "The Montagu-Chelmsford Reforms (1919)", "The Simon Commission", "The Butler Committee"],
        correctAnswer: 1,
        explanation: "Mont-Ford Reforms (Act of 1919) created the Chamber.",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The primary objective of the 'Butler Committee' (1927) was to:",
        options: ["Define the relationship between the Government of India and the Indian States (Princes).", "Decide the boundaries of Pakistan.", "Recommend reforms in the army.", "Investigate the 1857 revolt."],
        correctAnswer: 0,
        explanation: "To inquire into the relationship between the Indian States and the Paramount Power.",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "What was the core conclusion of the Butler Committee regarding 'Paramountcy'?",
        options: ["Paramountcy has lapsed.", "Paramountcy is limited to defence only.", "'Paramountcy must remain paramount' and it cannot be transferred to an Indian Government without the Princes' consent.", "Paramountcy resides with the Viceroy, not the Crown."],
        correctAnswer: 2,
        explanation: "It reinforced that Paramountcy (British Crown's supremacy) remained supreme and could not be handed over to an Indian elected government without the Princes' agreement. (This was a trap for the nationalists).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 9,
        question: "Who was the first Chancellor of the Chamber of Princes?",
        options: ["The Maharaja of Bikaner (Ganga Singh)", "The Nizam of Hyderabad", "The Maharaja of Baroda", "The Maharaja of Patiala"],
        correctAnswer: 0,
        explanation: "Ganga Singh (Maharaja of Bikaner).",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "Lord Curzon's policy towards the Native States can be described as:",
        options: ["Policy of Non-Interference.", "Policy of Patronage and Intrusive Surveillance (treating Princes as mere agents of the Crown).", "Policy of Equality.", "Policy of Ring Fence."],
        correctAnswer: 1,
        explanation: "Patronage and Surveillance. He forbade Princes from traveling abroad without permission.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 11,
        question: "The trial of 'Malhar Rao Gaekwad' of Baroda in 1874 was significant because:",
        options: ["He was executed.", "It established that the Paramount Power had the right to depose a ruler for gross misconduct (trying to poison the Resident) but the state would not be annexed.", "He was the first Prince to join the Congress.", "He defeated the British army."],
        correctAnswer: 1,
        explanation: "It set a precedent: The British could depose a ruler for misconduct but would not annex the state (they installed a young boy, Sayajirao III, instead).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "The 'States Ministry' (Department of States) was set up in July 1947 under the charge of:",
        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Rajendra Prasad", "Lord Mountbatten"],
        correctAnswer: 1,
        explanation: "Sardar Patel.",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Instrument of Accession' signed by the Princes in 1947 transferred control of which three subjects to the Dominion of India?",
        options: ["Defence, Finance, Law", "Defence, Foreign Affairs, Communications", "Trade, Commerce, Industries", "Home, Police, Justice"],
        correctAnswer: 1,
        explanation: "Defence, Foreign Affairs, Communications.",
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Which of the following states held a 'Plebiscite' to decide its accession?",
        options: ["Hyderabad", "Junagadh", "Kashmir", "Jodhpur"],
        correctAnswer: 1,
        explanation: "Junagadh held a plebiscite (overwhelming vote for India) after the Nawab fled to Pakistan.",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "'Operation Polo' was the code name for:",
        options: ["The integration of Junagadh.", "The police action in Hyderabad (Sept 1948).", "The war in Kashmir.", "The annexation of Goa."],
        correctAnswer: 1,
        explanation: "Police Action in Hyderabad to subdue the Nizam and Razakars.",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The ruler of which state signed the Instrument of Accession only after Pakistani tribal raiders invaded his territory?",
        options: ["Hyderabad", "Kashmir (Maharaja Hari Singh)", "Jodhpur", "Bhopal"],
        correctAnswer: 1,
        explanation: "Kashmir. Hari Singh signed it on Oct 26, 1947, after the raid began.",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Which of the following states initially flirted with the idea of joining Pakistan (due to the influence of Jinnah) but was persuaded by Patel and Mountbatten to join India?",
        options: ["Jodhpur (Hanwant Singh)", "Travancore", "Mysore", "Patiala"],
        correctAnswer: 0,
        explanation: "Jodhpur. Hanwant Singh was offered a blank cheque by Jinnah but Patel persuaded him.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'All India States People's Conference' (AISPC) was founded in 1927. Its first session was held in:",
        options: ["Bombay", "Lahore", "Delhi", "Madras"],
        correctAnswer: 0,
        explanation: "Bombay (Dec 1927).",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Praja Mandal' movements in the Princely States fought for:",
        options: ["Preservation of the Princes' rights.", "Democratic rights and responsible government within the states.", "Separation from India.", "Support to the British."],
        correctAnswer: 1,
        explanation: "Responsible Government within the states.",
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "In 1939, who became the President of the AISPC, signaling a closer link between the Congress and the States' people?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Pattabhi Sitaramayya"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru. This marked the integration of the States' people's struggle with the National Movement.",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Arrange the following policies in chronological order:\n1. Policy of Subordinate Isolation\n2. Policy of Ring Fence\n3. Policy of Subordinate Union",
        options: ["1-2-3", "2-1-3", "2-3-1", "3-2-1"],
        correctAnswer: 1,
        explanation: "Ring Fence (1765) -> Subordinate Isolation (1813) -> Subordinate Union (1857).",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Match the State with the specific issue during integration:\nA. Junagadh - 1. Police Action (Razakars)\nB. Hyderabad - 2. Plebiscite\nC. Kashmir - 3. Tribal Invasion\nD. Travancore - 4. Declaration of Independence (American Model)",
        options: ["A-2, B-1, C-3, D-4", "A-1, B-2, C-3, D-4", "A-2, B-3, C-1, D-4", "A-4, B-1, C-3, D-2"],
        correctAnswer: 0,
        explanation: "Junagadh (Plebiscite), Hyderabad (Police Action), Kashmir (Invasion), Travancore (Independence bid).",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Privy Purses' were:",
        options: ["Taxes paid by Princes to the British.", "Annual pensions granted to the rulers of Princely States for surrendering their dominions to the Indian Union.", "Secret funds of the Congress.", "War indemnity."],
        correctAnswer: 1,
        explanation: "Pensions given to Princes (Abolished in 1971 by Indira Gandhi).",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The concept of 'Paramountcy' implied that:",
        options: ["The Princes were sovereign equals.", "The British Crown was supreme, and the Princes held their states only by the grace of the Crown; the Crown could intervene in internal affairs.", "The Viceroy was an employee of the Princes.", "The States were independent of the British Empire."],
        correctAnswer: 1,
        explanation: "The Crown was supreme.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 25,
        question: "Why did the 'Federal Scheme' of the 1935 Act fail?",
        options: ["The Congress refused to join.", "The Princes refused to join because they feared losing their internal sovereignty and hated the democratic pressure from Praja Mandals.", "The Muslim League vetoed it.", "The British withdrew it."],
        correctAnswer: 1,
        explanation: "Princes feared the democratic influence of the Congress-led centre.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "Which Governor-General declared that the 'fiction of equality' with the Indian states must end (initiating Subordinate Isolation)?",
        options: ["Lord Wellesley", "Lord Hastings", "Lord Dalhousie", "Lord Cornwallis"],
        correctAnswer: 1,
        explanation: "Lord Hastings.",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Standstill Agreement' (1947) was a temporary arrangement to:",
        options: ["Stop the partition violence.", "Maintain the existing administrative/commercial relations between the Dominion and the State until a final agreement was reached.", "Stop the war in Kashmir.", "Freeze the assets of the Princes."],
        correctAnswer: 1,
        explanation: "To maintain the status quo (trade, travel, post) until accession.",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'Razakars' were a paramilitary force associated with:",
        options: ["The Nizam of Hyderabad (Kasim Razvi).", "The Nawab of Junagadh.", "The Maharaja of Kashmir.", "The Goa liberation movement."],
        correctAnswer: 0,
        explanation: "Kasim Razvi's private militia in Hyderabad which terrorized the people.",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Who served as the Secretary of the States Ministry and was the right-hand man of Sardar Patel in the integration process?",
        options: ["K.M. Panikkar", "V.P. Menon", "H.V. Kamath", "Krishna Menon"],
        correctAnswer: 1,
        explanation: "V.P. Menon.",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Lapse of Paramountcy' under the Indian Independence Act 1947 meant:",
        options: ["All states automatically became part of India.", "All states automatically became part of Pakistan.", "The legal relationship between the Crown and the States ended, leaving them technically independent.", "The British would continue to protect the states."],
        correctAnswer: 2,
        explanation: "The treaties ended, creating a vacuum.",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Which state was the first to accede to India?",
        options: ["Bikaner", "Baroda", "Gwalior", "Bhavnagar"],
        correctAnswer: 0,
        explanation: "Bikaner and Baroda were among the first to sign.",
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "Who drafted the 'Instrument of Accession'?",
        options: ["Dr. B.R. Ambedkar", "V.P. Menon", "Sardar Patel", "Lord Mountbatten"],
        correctAnswer: 1,
        explanation: "V.P. Menon (under Patel's guidance).",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Radcliffe Line' demarcated the boundaries between:",
        options: ["India and China", "India and Pakistan (Punjab and Bengal)", "India and Burma", "Hyderabad and India"],
        correctAnswer: 1,
        explanation: "Punjab and Bengal (Partition lines).",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Mountbatten Plan' is also known as:",
        options: ["The June 3rd Plan", "The August Offer", "The Cripps Proposal", "The Cabinet Mission"],
        correctAnswer: 0,
        explanation: "June 3rd Plan.",
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "'We are today 400 millions of people, but we are also 600 separate states.' This problem was solved by the policy of:",
        options: ["Ring Fence", "Subordinate Isolation", "Integration and Merger", "Divide and Rule"],
        correctAnswer: 2,
        explanation: "Integration.",
        cognitiveLevel: "Fact"
    }
];
