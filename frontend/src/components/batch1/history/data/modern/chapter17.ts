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

export const MODERN_CHAPTER_17_SUBTOPICS: Subtopic[] = [
    { id: 1, name: "Swarajists vs. No-Changers", status: 'commenced' },
    { id: 2, name: "Emergence of Socialist Ideas (Left Wing)", status: 'commenced' },
    { id: 3, name: "Revolutionary Activities Phase II: North India (HRA/HSRA)", status: 'commenced' },
    { id: 4, name: "Revolutionary Activities Phase II: Bengal (Surya Sen)", status: 'commenced' },
];

export const MODERN_CHAPTER_17_MCQS = [
    {
        id: 1,
        question: "The 'Gaya Session' of the Congress (1922) is historically significant because:",
        options: [
            "The resolution to enter the Legislative Councils was passed",
            "The resolution to enter the Legislative Councils was defeated, leading to the formation of the Swaraj Party",
            "Gandhi was elected President for the only time",
            "The decision to launch Civil Disobedience was taken"
        ],
        correctAnswer: 1,
        explanation: "Swarajists wanted to enter councils; Gaya Session (Presided by C.R. Das) rejected it. Das resigned and formed the Swaraj Party."
    },
    {
        id: 2,
        question: "Who among the following were the leaders of the 'No-Changers' group who opposed council entry and advocated constructive work?",
        options: [
            "C.R. Das and Motilal Nehru",
            "Vallabhbhai Patel, Rajendra Prasad, and C. Rajagopalachari",
            "Subhash Chandra Bose and Jawaharlal Nehru",
            "Lala Lajpat Rai and Madan Mohan Malaviya"
        ],
        correctAnswer: 1,
        explanation: "Patel, Rajendra Prasad, C. Rajagopalachari (The Gandhian loyalists)."
    },
    {
        id: 3,
        question: "The Swarajists argued that entering the councils would allow them to:",
        options: [
            "Cooperate with the British to get reforms",
            "Wreck the reforms from within by creating a deadlock ('End or Mend')",
            "Enjoy the privileges of power",
            "Support the British against the revolutionaries"
        ],
        correctAnswer: 1,
        explanation: "'End or Mend': Use the councils to expose their hollowness."
    },
    {
        id: 4,
        question: "A major achievement of the Swarajists was the election of __________ as the Speaker (President) of the Central Legislative Assembly in 1925.",
        options: [
            "Motilal Nehru",
            "Vithalbhai Patel",
            "C.R. Das",
            "Madan Mohan Malaviya"
        ],
        correctAnswer: 1,
        explanation: "Vithalbhai Patel (Vallabhbhai's brother) became the first Indian Speaker in 1925."
    },
    {
        id: 5,
        question: "The 'Das-Gandhi Pact' (1924) effectively:",
        options: [
            "Expelled the Swarajists from the Congress",
            "Recognized the Swarajists as the parliamentary wing of the Congress authorized to work in the councils",
            "Merged the Swaraj Party with the Muslim League",
            "Declared Gandhi as the dictator of the Congress"
        ],
        correctAnswer: 1,
        explanation: "Gandhi accepted the Swarajists as the parliamentary wing of the Congress to avoid a 1907-style split."
    },
    {
        id: 6,
        question: "The 'Hindustan Republican Association' (HRA) was founded in 1924 at:",
        options: [
            "Lahore",
            "Kanpur",
            "Delhi",
            "Allahabad"
        ],
        correctAnswer: 1,
        explanation: "Kanpur (1924). Founders: Bismil, Sanyal, Chatterjee."
    },
    {
        id: 7,
        question: "The 'Kakori Train Robbery' (1925) was executed by members of the HRA. Who among the following was NOT hanged for this case?",
        options: [
            "Ram Prasad Bismil",
            "Ashfaqullah Khan",
            "Chandrashekhar Azad",
            "Roshan Singh"
        ],
        correctAnswer: 2,
        explanation: "Chandrashekhar Azad escaped. Bismil, Ashfaqullah, Roshan Singh, and Rajendra Lahiri were hanged."
    },
    {
        id: 8,
        question: "The book 'Bandi Jiwan', which served as a textbook for the revolutionaries, was written by:",
        options: [
            "Bhagat Singh",
            "Sachindranath Sanyal",
            "Ram Prasad Bismil",
            "Bhagwati Charan Vohra"
        ],
        correctAnswer: 1,
        explanation: "Sachindranath Sanyal."
    },
    {
        id: 9,
        question: "The 'Hindustan Socialist Republican Association' (HSRA) was formed in 1928 at Feroz Shah Kotla (Delhi). The word 'Socialist' was added at the insistence of:",
        options: [
            "Chandrashekhar Azad",
            "Bhagat Singh",
            "Sukhdev",
            "Yashpal"
        ],
        correctAnswer: 1,
        explanation: "Bhagat Singh insisted on adding 'Socialist' to emphasize the goal of ending class exploitation, not just British rule."
    },
    {
        id: 10,
        question: "Bhagat Singh and Shivaram Rajguru assassinated J.P. Saunders in December 1928 to avenge:",
        options: [
            "The Jallianwala Bagh massacre",
            "The death of Lala Lajpat Rai due to lathi blows during the anti-Simon Commission protests",
            "The hanging of Ashfaqullah Khan",
            "The arrest of Communist leaders"
        ],
        correctAnswer: 1,
        explanation: "To avenge Lala Lajpat Rai's death (killed by Scott/Saunders' lathi charge)."
    },
    {
        id: 11,
        question: "The 'Central Assembly Bombing' (April 8, 1929) by Bhagat Singh and Batukeshwar Dutt was intended to:",
        options: [
            "Kill the Viceroy",
            "Protest against the Public Safety Bill and Trade Disputes Bill",
            "Destroy the Parliament building",
            "Escape from the police"
        ],
        correctAnswer: 1,
        explanation: "'To make the deaf hear.' They threw harmless bombs to protest the Public Safety Bill and Trade Disputes Bill."
    },
    {
        id: 12,
        question: "The famous pamphlet 'The Philosophy of the Bomb' was written by:",
        options: [
            "Bhagat Singh",
            "Bhagwati Charan Vohra",
            "Surya Sen",
            "Jatin Das"
        ],
        correctAnswer: 1,
        explanation: "Bhagwati Charan Vohra. It was a reply to Gandhi's 'The Cult of the Bomb'."
    },
    {
        id: 13,
        question: "The 'Chittagong Armoury Raid' (1930) was organized by the Indian Republican Army (IRA) led by:",
        options: [
            "Rashbehari Bose",
            "Surya Sen (Masterda)",
            "Bagha Jatin",
            "Hemchandra Kanungo"
        ],
        correctAnswer: 1,
        explanation: "Surya Sen (Masterda)."
    },
    {
        id: 14,
        question: "Who among the following women revolutionaries fired at the European Club in Pahartali (Chittagong) and committed suicide by consuming potassium cyanide to avoid arrest?",
        options: [
            "Kalpana Dutt",
            "Pritilata Waddedar",
            "Bina Das",
            "Suniti Chaudhary"
        ],
        correctAnswer: 1,
        explanation: "Pritilata Waddedar."
    },
    {
        id: 15,
        question: "Bina Das, a student of Calcutta University, is famous for:",
        options: [
            "Leading a women's regiment",
            "Firing at the Governor (Stanley Jackson) while receiving her degree at the Convocation",
            "Bombing the Calcutta Corporation",
            "Writing the biography of Surya Sen"
        ],
        correctAnswer: 1,
        explanation: "Bina Das fired at the Governor during the convocation ceremony."
    },
    {
        id: 16,
        question: "The 'Tebhaga Movement' in Bengal (later phase) was a peasant struggle, but many former revolutionaries joined it. It demanded:",
        options: [
            "Abolition of Zamindari",
            "Reduction of the share of the landlord from 1/2 to 1/3",
            "Independence from British rule",
            "Religious freedom"
        ],
        correctAnswer: 1,
        explanation: "Reduction of share from 1/2 to 1/3 (Two-thirds for the tiller)."
    },
    {
        id: 17,
        question: "The 'Meerut Conspiracy Case' (1929) was primarily directed against:",
        options: [
            "The Ghadarites",
            "The Trade Unionists and Communists",
            "The Congress Socialists",
            "The Swarajists"
        ],
        correctAnswer: 1,
        explanation: "It was a crackdown on Communists and trade union leaders (Muzaffar Ahmed, S.A. Dange)."
    },
    {
        id: 18,
        question: "Who was the first President of the 'All India Trade Union Congress' (AITUC) founded in 1920?",
        options: [
            "N.M. Joshi",
            "Lala Lajpat Rai",
            "Dewan Chaman Lal",
            "Jawaharlal Nehru"
        ],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai was the first President of AITUC (1920)."
    },
    {
        id: 19,
        question: "The 'Public Safety Bill' (1928), which the government tried to pass to curb socialist activities, was famously termed 'A direct attack on Indian nationalism' by:",
        options: [
            "Motilal Nehru",
            "Bhagat Singh",
            "Gandhi",
            "Jawaharlal Nehru"
        ],
        correctAnswer: 0,
        explanation: "Motilal Nehru (Swarajist leader) defeated the bill in the assembly."
    },
    {
        id: 20,
        question: "Jatin Das is remembered in Indian history for:",
        options: [
            "Assassinating a British official",
            "His 63-day hunger strike in Lahore Jail demanding better status for political prisoners",
            "Founding the CPI",
            "Being the first martyr of the Quit India movement"
        ],
        correctAnswer: 1,
        explanation: "Jatin Das died after a 63-day hunger strike."
    },
    {
        id: 21,
        question: "Arrange the following events in chronological order: (1) Kakori Robbery, (2) Formation of HSRA, (3) Chittagong Armoury Raid, (4) Death of Jatin Das",
        options: [
            "1-2-4-3",
            "1-2-3-4",
            "2-1-4-3",
            "1-4-2-3"
        ],
        correctAnswer: 0,
        explanation: "Kakori (1925) -> HSRA (1928) -> Jatin Das (Sept 1929) -> Chittagong (1930)."
    },
    {
        id: 22,
        question: "Match the Revolutionary with their Organization/Case: (A) Ram Prasad Bismil - Kakori, (B) Surya Sen - Chittagong, (C) Bhagat Singh - Lahore Conspiracy, (D) Kalpana Dutt - IRA.",
        options: [
            "A-2, B-1, C-3, D-4",
            "A-2, B-4, C-3, D-1",
            "A-3, B-1, C-2, D-4",
            "A-2, B-1, C-3, D-1"
        ],
        correctAnswer: 1,
        explanation: "All matched correctly. Kalpana Dutt was part of the Chittagong group (IRA). (Note: Option (b) is A-2, B-4, C-3, D-1 where 1=Chittagong, 4=IRA; wait, Surya Sen LEAD Chittagong/IRA. Let's look at the options carefully. (b) says B-4 (IRA) and D-1 (Chittagong), both are same organization. Let's assume standard matching. A->2. B->4(IRA) or 1(Chittagong). C->3. D->1 or 4. The user provided answer is (d) A-2, B-1, C-3, D-1?? No, wait. Let's re-read the user's answer key for Q22. 'Ans: (b) All matched correctly.' Wait, if A is Bismil (Kakori-2), B is Surya Sen (Chittagong-1 or IRA-4), C is Bhagat Singh (Lahore-3), D is Kalpana Dutt (IRA-4 or Chittagong-1). The User's Answer Key says (b) is correct. Let's check (b) in the question. (b) A-2, B-4, C-3, D-1. So Bismil-Kakori, Surya Sen-IRA, Bhagat Singh-Lahore, Kalpana Dutt-Chittagong. This makes sense."
    },
    {
        id: 23,
        question: "The 'Whitley Commission' (1929) was related to:",
        options: [
            "Education reforms",
            "Labour conditions",
            "Police reforms",
            "Constitutional reforms"
        ],
        correctAnswer: 1,
        explanation: "Labour conditions."
    },
    {
        id: 24,
        question: "How did the revolutionaries of Phase II (HSRA) differ from Phase I (1905–1915)?",
        options: [
            "Phase II was more religious and Hindu revivalist",
            "Phase II was influenced by Socialist and Marxist ideas and moved towards atheism",
            "Phase II believed only in individual heroic action, not mass revolution",
            "Phase II was restricted to Bengal only"
        ],
        correctAnswer: 1,
        explanation: "Phase II was deeply influenced by Socialism, Marxism, and moved away from religious nationalism to atheism/secularism."
    },
    {
        id: 25,
        question: "Bhagat Singh wrote the famous essay 'Why I am an Atheist' in jail to:",
        options: [
            "Counter the religious propaganda of the British",
            "Address the questions raised by his fellow revolutionary Baba Randhir Singh regarding his lack of belief in God",
            "Criticize Gandhi's religious politics",
            "Support the Arya Samaj"
        ],
        correctAnswer: 1,
        explanation: "He wrote it to explain that his atheism was not vanity but a reasoned belief."
    },
    {
        id: 26,
        question: "'The cult of the bomb and the pistol is useless.' Who said this while criticizing the revolutionary approach, emphasizing mass movement instead?",
        options: [
            "Mahatma Gandhi",
            "C.R. Das",
            "Motilal Nehru",
            "Subhash Chandra Bose"
        ],
        correctAnswer: 0,
        explanation: "Mahatma Gandhi wrote 'The Cult of the Bomb' to criticize violence."
    },
    {
        id: 27,
        question: "The Swarajists' tactic of 'Obstructionism' in the councils involved:",
        options: [
            "Physically blocking the entry of British officials",
            "Voting against every government bill and budget to expose the sham of the legislature",
            "Resigning en masse",
            "Supporting the government to gain favors"
        ],
        correctAnswer: 1,
        explanation: "Obstructionism: Creating deadlocks to force the government to rule by decree, thus exposing it."
    },
    {
        id: 28,
        question: "The 'Responsivists' was a splinter group of the Swaraj Party (Lala Lajpat Rai, Madan Mohan Malaviya, N.C. Kelkar) who believed in:",
        options: [
            "Total obstruction",
            "Cooperation with the government for the protection of Hindu interests",
            "Joining the Communist Party",
            "Retiring from politics"
        ],
        correctAnswer: 1,
        explanation: "Responsivists wanted to cooperate with the government to protect Hindu interests (drifted towards communalism)."
    },
    {
        id: 29,
        question: "The 'Independent Party' in the Central Legislative Assembly was led by:",
        options: [
            "M.A. Jinnah",
            "Madan Mohan Malaviya",
            "Lala Lajpat Rai",
            "Tej Bahadur Sapru"
        ],
        correctAnswer: 0,
        explanation: "M.A. Jinnah led the Independent Party, often holding the balance of power between Swarajists and the Government."
    },
    {
        id: 30,
        question: "Who was the defense lawyer for the INA trials later, but in the 1920s was a prominent Swarajist leader?",
        options: [
            "Bhulabhai Desai",
            "Tej Bahadur Sapru",
            "Jawaharlal Nehru",
            "Kailash Nath Katju"
        ],
        correctAnswer: 0,
        explanation: "Bhulabhai Desai (Leader of Opposition later, and INA defense lawyer)."
    },
    {
        id: 31,
        question: "The 'Workers and Peasants Party' (WPP) operated inside the Congress to:",
        options: [
            "Give the Congress a more radical, pro-labor orientation",
            "Break the Congress",
            "Support the British",
            "Promote communalism"
        ],
        correctAnswer: 0,
        explanation: "They worked within Congress to push for radical economic policies."
    },
    {
        id: 32,
        question: "The 'Naujawan Bharat Sabha' was founded by Bhagat Singh in 1926 to:",
        options: [
            "Recruit youth for the British army",
            "Do political work among the youth, peasants, and workers",
            "Organize religious festivals",
            "Fight the Swarajists"
        ],
        correctAnswer: 1,
        explanation: "It was an open wing for mass work (rationalism, anti-caste, anti-communal)."
    },
    {
        id: 33,
        question: "Which revolutionary was known as 'Quick Silver' due to his agility and ability to escape the police (he was never captured alive)?",
        options: [
            "Bhagat Singh",
            "Chandrashekhar Azad",
            "Rajguru",
            "Sukhdev"
        ],
        correctAnswer: 1,
        explanation: "Chandrashekhar Azad."
    },
    {
        id: 34,
        question: "The 'Sharada Act' (1930) fixed the minimum marriageable age for girls and boys at:",
        options: [
            "12 and 16",
            "14 and 18",
            "15 and 21",
            "18 and 21"
        ],
        correctAnswer: 1,
        explanation: "14 for girls and 18 for boys."
    },
    {
        id: 35,
        question: "'Inquilab Zindabad' (Long Live Revolution) – this slogan was popularized by:",
        options: [
            "Muhammad Iqbal",
            "Bhagat Singh",
            "Subhash Chandra Bose",
            "Hasrat Mohani"
        ],
        correctAnswer: 1,
        explanation: "Bhagat Singh made it the slogan of the youth."
    }
];
