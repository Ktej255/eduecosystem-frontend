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

export const MODERN_CHAPTER_22_SUBTOPICS = [
    { id: 1, name: "Acts under Company Rule (1773–1853)", status: 'todo' },
    { id: 2, name: "Acts under Crown Rule (1858–1947)", status: 'todo' },
    { id: 3, name: "Civil Services", status: 'todo' },
    { id: 4, name: "Judicial Developments", status: 'todo' },
    { id: 5, name: "Local Self-Government", status: 'todo' },
    { id: 6, name: "Press Acts", status: 'todo' },
];

export const MODERN_CHAPTER_22_MCQS = [
    {
        id: 1,
        question: "Which Act designated the Governor of Bengal as the 'Governor-General of Bengal' and created an Executive Council of four members to assist him?",
        options: ["Charter Act of 1833", "Regulating Act of 1773", "Pitt’s India Act of 1784", "Charter Act of 1813"],
        correctAnswer: 1,
        explanation: "Regulating Act 1773. Warren Hastings became the first GG of Bengal.",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Consider the following statements regarding the 'Charter Act of 1813':\n1. It ended the trade monopoly of the East India Company in India completely.\n2. It asserted the sovereignty of the British Crown over the Indian territories held by the Company.\n3. It allowed Christian missionaries to come to India for the purpose of enlightening the people.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1,
        explanation: "It ended monopoly except in tea and trade with China. So statement 1 is false.",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Which Act made the Governor-General of Bengal the 'Governor-General of India' and vested in him all civil and military powers?",
        options: ["Charter Act of 1833", "Charter Act of 1853", "Government of India Act 1858", "Regulating Act 1773"],
        correctAnswer: 0,
        explanation: "Charter Act 1833. William Bentinck became the first GG of India.",
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Law Member' was added to the Governor-General’s Council for the first time by the:",
        options: ["Pitt’s India Act 1784", "Charter Act 1813", "Charter Act 1833", "Charter Act 1853"],
        correctAnswer: 2,
        explanation: "Charter Act 1833 added the Law Member (Macaulay).",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Who was the first Law Member appointed under the Charter Act of 1833, responsible for codifying Indian laws?",
        options: ["Lord Macaulay", "William Bentinck", "Charles Wood", "Drinkwater Bethune"],
        correctAnswer: 0,
        explanation: "Lord Macaulay.",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Which Act introduced, for the first time, an open competition system for the selection of civil servants (throwing it open to Indians theoretically)?",
        options: ["Charter Act of 1833", "Charter Act of 1853", "Government of India Act 1858", "Indian Councils Act 1861"],
        correctAnswer: 1,
        explanation: "Charter Act 1853 introduced open competition (Macaulay Committee 1854 implemented it).",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 'Portfolio System', where a member of the Council was made in-charge of one or more departments, was introduced by Lord Canning and validated by the:",
        options: ["Indian Councils Act, 1861", "Indian Councils Act, 1892", "Government of India Act, 1858", "Charter Act, 1853"],
        correctAnswer: 0,
        explanation: "Indian Councils Act 1861 gave recognition to the Portfolio system introduced by Canning in 1859.",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Which Act empowered the Viceroy to issue 'Ordinances' during an emergency, valid for six months?",
        options: ["Indian Councils Act, 1861", "Indian Councils Act, 1892", "Indian Councils Act, 1909", "Government of India Act, 1919"],
        correctAnswer: 0,
        explanation: "Act of 1861.",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The system of 'Dyarchy' (Dual Rule) was introduced in the Provinces by the:",
        options: ["Morley-Minto Reforms (1909)", "Montagu-Chelmsford Reforms (1919)", "Simon Commission Recommendations", "Government of India Act, 1935"],
        correctAnswer: 1,
        explanation: "Mont-Ford Reforms (1919) introduced Dyarchy in Provinces.",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "Under the 'Dyarchy' system of 1919, the 'Reserved Subjects' (like Law & Order, Finance) were administered by:",
        options: ["The Governor and his Executive Council (not responsible to the legislature).", "The Governor and his Ministers (responsible to the legislature).", "The Central Government.", "The High Court."],
        correctAnswer: 0,
        explanation: "Reserved Subjects (Police, Justice, Finance) were with the Governor + Executive Council (Not responsible). Transferred Subjects (Health, Education) were with Ministers.",
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "Which Act introduced 'Bicameralism' (two houses) at the Centre for the first time?",
        options: ["Indian Councils Act, 1892", "Indian Councils Act, 1909", "Government of India Act, 1919", "Government of India Act, 1935"],
        correctAnswer: 2,
        explanation: "Act of 1919 introduced Bicameralism (Council of State & Legislative Assembly) at the Centre.",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'High Commissioner for India' in London, a new post to look after Indian trade and agency functions, was created by:",
        options: ["The Act of 1909", "The Act of 1919", "The Act of 1935", "The Independence Act of 1947"],
        correctAnswer: 1,
        explanation: "Act of 1919.",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Who is known as the 'Father of Civil Services in India'?",
        options: ["Lord Wellesley", "Lord Cornwallis", "Lord Dalhousie", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Cornwallis (Europeanized the services, raised salaries, enforced rules).",
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "The 'Fort William College' was set up by Lord Wellesley in 1800 to:",
        options: ["Train Indian sepoys.", "Train young British recruits of the Civil Service in Indian languages and customs.", "Promote Sanskrit education among Indians.", "House the Supreme Court."],
        correctAnswer: 1,
        explanation: "To train British recruits (Civil Servants). The Court of Directors didn't like it and shifted training to Haileybury (London).",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Lee Commission' (1924) was appointed to recommend reforms in:",
        options: ["Police Administration", "Civil Services (Superior Civil Services)", "Judiciary", "Education"],
        correctAnswer: 1,
        explanation: "Lee Commission (Superior Civil Services) recommended the establishment of a Public Service Commission (set up in 1926).",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Aitchison Commission' (1886) recommended:",
        options: ["Holding the ICS exam simultaneously in India and England (It rejected this).", "Raising the age limit for ICS to 23.", "Classification of services into Imperial, Provincial, and Subordinate.", "Both (b) and (c)."],
        correctAnswer: 3,
        explanation: "Aitchison Commission rejected simultaneous exams but recommended the 3-tier classification (Imperial, Provincial, Subordinate) and raising the age limit.",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The first Indian to qualify for the Indian Civil Service (ICS) in 1863 was:",
        options: ["Surendranath Banerjea", "Satyendranath Tagore", "R.C. Dutt", "Subhash Chandra Bose"],
        correctAnswer: 1,
        explanation: "Satyendranath Tagore.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Supreme Court' at Calcutta was established by the Regulating Act of 1773. Who was the first Chief Justice?",
        options: ["Sir Elijah Impey", "Sir Philip Francis", "Sir Charles Wood", "Sir William Jones"],
        correctAnswer: 0,
        explanation: "Sir Elijah Impey.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Cornwallis Code' (1793) is famous for:",
        options: ["Separating revenue administration from judicial administration.", "Combining the office of Collector and Magistrate.", "Introducing the Jury system.", "Allowing Indians to be High Court judges."],
        correctAnswer: 0,
        explanation: "Separation of Power: Collector should only collect revenue; judicial power given to District Judges.",
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Who abolished the 'Mobile/Circuit Courts' established by Cornwallis and transferred their functions to District Magistrates?",
        options: ["Lord Hastings", "William Bentinck", "Lord Dalhousie", "Lord Canning"],
        correctAnswer: 1,
        explanation: "William Bentinck abolished Circuit Courts (they were slow) and empowered Commissioners/Magistrates.",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Federal Court of India' was established in Delhi in 1937 under the provisions of:",
        options: ["The Act of 1919", "The Act of 1935", "The Indian Independence Act", "A Royal Charter"],
        correctAnswer: 1,
        explanation: "GOI Act 1935. (It functioned until the Supreme Court of India was inaugurated in 1950).",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The 'Ilbert Bill' (1883) controversy was related to:",
        options: ["The freedom of the press.", "The removal of judicial disqualifications based on race (allowing Indian magistrates to try Europeans).", "The age of consent for marriage.", "The imposition of Income Tax."],
        correctAnswer: 1,
        explanation: "Racial equality in judicial trials.",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Who is known as the 'Father of Local Self-Government in India'?",
        options: ["Lord Mayo", "Lord Ripon", "Lord Lytton", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Lord Ripon.",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Lord Mayo’s Resolution of 1870 was the first step towards:",
        options: ["Financial Decentralization.", "Separation of Judiciary from Executive.", "Communal Electorates.", "University Reforms."],
        correctAnswer: 0,
        explanation: "Financial Decentralization.",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Under the Act of 1919, 'Local Self-Government' became a:",
        options: ["Reserved Subject.", "Transferred Subject.", "Central Subject.", "Concurrent Subject."],
        correctAnswer: 1,
        explanation: "Transferred Subject (managed by Indian Ministers).",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "Which Act is known as the 'Gagging Act'?",
        options: ["The Licensing Regulations, 1823", "The Vernacular Press Act, 1878", "The Newspaper (Incitement to Offences) Act, 1908", "The Indian Press Act, 1910"],
        correctAnswer: 1,
        explanation: "Vernacular Press Act 1878.",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Who is known as the 'Liberator of the Indian Press'?",
        options: ["Lord Hastings", "Charles Metcalfe", "Lord Macaulay", "Lord Ripon"],
        correctAnswer: 1,
        explanation: "Charles Metcalfe (repealed the 1823 regulations).",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'Sadler Commission' (1917) was appointed to study the problems of:",
        options: ["Primary Education", "Calcutta University", "Technical Education", "Female Education"],
        correctAnswer: 1,
        explanation: "Calcutta University (but its recommendations were applied to others too).",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Raleigh Commission' (1902) led to the passing of:",
        options: ["The Indian Universities Act, 1904", "The Primary Education Act", "The Technical Education Act", "The Compulsory Education Bill"],
        correctAnswer: 0,
        explanation: "Indian Universities Act 1904 (Curzon’s restrictive act).",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Match the Act with the Feature:\nA. Act of 1784 - 1. Double Government (Board of Control)\nB. Act of 1833 - 2. Governor-General of India\nC. Act of 1858 - 3. Secretary of State for India\nD. Act of 1909 - 4. Separate Electorates",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-3, C-4, D-1", "A-1, B-3, C-2, D-4", "A-4, B-2, C-3, D-1"],
        correctAnswer: 0,
        explanation: "All pairs correctly matched.",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Which Act for the first time separated the legislative and executive functions of the Governor-General’s Council (creating a mini-parliament called the Indian Legislative Council)?",
        options: ["Charter Act of 1833", "Charter Act of 1853", "Indian Councils Act 1861", "Indian Councils Act 1892"],
        correctAnswer: 1,
        explanation: "Charter Act 1853 created a separate Legislative Council (Mini-Parliament).",
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Chamber of Princes' (Narendra Mandal) was established in 1921 as a result of:",
        options: ["The Act of 1909", "The Act of 1919 (Mont-Ford Reforms)", "The Act of 1935", "The Butler Committee"],
        correctAnswer: 1,
        explanation: "Act of 1919 provided for it.",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which of the following was NOT a recommendation of the 'Nehru Report' regarding the constitution?",
        options: ["Complete Independence.", "Responsible Government at the Centre and in Provinces.", "Secular State.", "Universal Adult Suffrage."],
        correctAnswer: 0,
        explanation: "Nehru Report asked for Dominion Status.",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Sargent Plan' (1944) was related to:",
        options: ["Post-war educational development in India.", "Partition of the army.", "Railway development.", "Development of atomic energy."],
        correctAnswer: 0,
        explanation: "Sargent Plan (Education).",
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Hunter Commission' of 1882 (not 1919) was related to:",
        options: ["Police Reforms.", "Education (Primary and Secondary).", "Famine relief.", "Judicial Reforms."],
        correctAnswer: 1,
        explanation: "W.W. Hunter Commission (1882) focused on Primary and Secondary Education. (Don't confuse with Hunter Committee on Jallianwala Bagh 1919).",
        cognitiveLevel: "Fact"
    }
];
