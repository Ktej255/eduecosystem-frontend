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

export const MODERN_CHAPTER_10_SUBTOPICS: Subtopic[] = [
    { id: 'bengal_associations', name: 'Associations (Bengal)' },
    { id: 'bombay_madras_assoc', name: 'Associations (Bombay/Madras)' },
    { id: 'reactionary_policies', name: 'Reactionary Policies (Lytton/Ripon)' },
    { id: 'chronology', name: 'Chronology (The Trap Zone)' },
    { id: 'early_agitations', name: 'Early Agitations & Civil Services' },
    { id: 'press_literature', name: 'Press & Literature' },
    { id: 'conceptual', name: 'Conceptual & Advanced' }
];

export const MODERN_CHAPTER_10_MCQS: Question[] = [
    // Set 1: Pre-Congress Associations (Bengal)
    {
        id: 1,
        question: "Which of the following is considered the first political association to be started in India (1836), founded by associates of Raja Rammohan Roy?",
        options: ["British Indian Association", "Landholders' Society", "Bangabhasha Prakasika Sabha", "Indian League"],
        correctAnswer: 2, // (c)
        explanation: "Bangabhasha Prakasika Sabha (1836) is regarded as the first political association.",
        subtopic: 'bengal_associations',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The \"Landholders' Society\" (Zamindari Association), founded in 1838 by Dwarkanath Tagore, is historically significant because:",
        options: ["It demanded the abolition of the Permanent Settlement.", "It marked the beginning of organized political activity and used constitutional methods of agitation.", "It was the first organization to demand complete independence.", "It was an organization of peasants against landlords."],
        correctAnswer: 1, // (b)
        explanation: "It marked the beginning of organized agitation for rights, though its focus was narrow (landlords' interests).",
        subtopic: 'bengal_associations',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The \"British Indian Association\" was formed in 1851 by the merger of:",
        options: ["The Landholders' Society and the Bengal British India Society.", "The Indian League and the Indian Association.", "The Brahmo Samaj and the Tattvabodhini Sabha.", "The British India Society and the East India Association."],
        correctAnswer: 0, // (a)
        explanation: "Merged Landholders' Society and Bengal British India Society.",
        subtopic: 'bengal_associations',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who among the following founded the \"East India Association\" in London in 1866 to discuss Indian questions and influence British public opinion?",
        options: ["Surendranath Banerjea", "Dadabhai Naoroji", "W.C. Bonnerjee", "A.O. Hume"],
        correctAnswer: 1, // (b)
        explanation: "Dadabhai Naoroji founded the East India Association in London.",
        subtopic: 'bengal_associations',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Consider the following statements regarding the \"Indian Association of Calcutta\" (1876):\n1. It was founded by Surendranath Banerjea and Ananda Mohan Bose.\n2. It aimed to create a strong public opinion on political questions and unify the Indian people.\n3. It supported the interests of the Zamindars over the Ryots.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "The Indian Association was distinct because it represented the middle class and was against the pro-landlord policies of the British Indian Association.",
        subtopic: 'bengal_associations',
        difficulty: 'Moderate'
    },
    {
        id: 6,
        question: "The \"Indian League\" was started in 1875 by:",
        options: ["Sisir Kumar Ghosh", "Motilal Ghosh", "Ishwar Chandra Vidyasagar", "Bankim Chandra Chattopadhyay"],
        correctAnswer: 0, // (a)
        explanation: "Sisir Kumar Ghosh (founder of Amrita Bazar Patrika) started the Indian League.",
        subtopic: 'bengal_associations',
        difficulty: 'Easy'
    },
    // Set 2: Bombay & Madras
    {
        id: 7,
        question: "The \"Poona Sarvajanik Sabha\" was founded in 1867 by M.G. Ranade and others to:",
        options: ["Promote Vedic education.", "Serve as a bridge between the government and the people.", "Organize militant activities against the British.", "Oppose the Indian National Congress."],
        correctAnswer: 1, // (b)
        explanation: "Poona Sarvajanik Sabha (Ranade) worked to represent peasants' legal rights to the government.",
        subtopic: 'bombay_madras_assoc',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "The \"Bombay Presidency Association\" was formed in 1885 by the famous \"Triumvirate\" of Bombay. Who were they?",
        options: ["Tilak, Agarkar, and Gokhale", "Pherozeshah Mehta, K.T. Telang, and Badruddin Tyabji", "Dadabhai Naoroji, Dinshaw Wacha, and Behramji Malabari", "Ranade, Bhandarkar, and Chandavarkar"],
        correctAnswer: 1, // (b)
        explanation: "Mehta, Telang, and Tyabji are the famous Triumvirate.",
        subtopic: 'bombay_madras_assoc',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Which of the following was the earliest political organization in the Madras Presidency (1852)?",
        options: ["Madras Mahajan Sabha", "Madras Native Association", "The Hindu Literary Society", "South Indian Liberal Federation"],
        correctAnswer: 1, // (b)
        explanation: "Madras Native Association (1852) was the earliest, founded by G.L. Chetty.",
        subtopic: 'bombay_madras_assoc',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "Who among the following were the founders of the \"Madras Mahajan Sabha\" (1884)?\n1. M. Viraraghavachari\n2. G. Subramaniya Aiyar\n3. P. Anandacharlu\n\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All three were founders of the Madras Mahajan Sabha.",
        subtopic: 'bombay_madras_assoc',
        difficulty: 'Moderate'
    },
    // Set 3: Reactionary Policies
    {
        id: 11,
        question: "The \"Vernacular Press Act\" of 1878, nicknamed the 'Gagging Act', was primarily targeted against:",
        options: ["The Statesman", "Amrita Bazar Patrika", "The Hindu", "The Times of India"],
        correctAnswer: 1, // (b)
        explanation: "It was specifically aimed at Amrita Bazar Patrika (and others like Som Prakash) for their seditious tone.",
        subtopic: 'reactionary_policies',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "What was the unique feature of the Vernacular Press Act, 1878?",
        options: ["It required all newspapers (English and Vernacular) to submit content for censorship.", "It discriminated between English and Vernacular press, with no right of appeal to a court of law.", "It banned the publication of newspapers in Bengali only.", "It imposed a heavy tax on newsprint."],
        correctAnswer: 1, // (b)
        explanation: "It discriminated against the Vernacular (local language) press; English papers were exempt. No appeal to court was allowed.",
        subtopic: 'reactionary_policies',
        difficulty: 'Moderate'
    },
    {
        id: 13,
        question: "How did the Amrita Bazar Patrika escape the clutches of the Vernacular Press Act?",
        options: ["It stopped publication immediately.", "It turned into an English newspaper overnight.", "It shifted its press to London.", "It pledged loyalty to the Viceroy."],
        correctAnswer: 1, // (b)
        explanation: "It converted into an English newspaper overnight to bypass the Act.",
        subtopic: 'reactionary_policies',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The \"Ilbert Bill Controversy\" (1883) during Lord Ripon's time was related to:",
        options: ["The reduction of the age limit for Civil Services.", "The imposition of duty on cotton textiles.", "Removal of judicial disqualifications based on race (allowing Indian judges to try Europeans).", "The partition of Bengal."],
        correctAnswer: 2, // (c)
        explanation: "The Bill sought to allow Indian judges to try European offenders in criminal cases. The Europeans revolted (White Mutiny), and the bill was diluted.",
        subtopic: 'reactionary_policies',
        difficulty: 'Easy'
    },
    {
        id: 15,
        question: "The \"Arms Act\" of 1878 made it a criminal offence for Indians to keep or bear arms without a license. This act:",
        options: ["Applied equally to Indians, Anglo-Indians, and Europeans.", "Exempted Europeans and Anglo-Indians from its purview.", "Was passed by Lord Ripon.", "Was repealed immediately by the Congress."],
        correctAnswer: 1, // (b)
        explanation: "It exempted Europeans and Anglo-Indians, making it a racially discriminatory law.",
        subtopic: 'reactionary_policies',
        difficulty: 'Easy'
    },
    // Set 4: Chronology
    {
        id: 16,
        question: "Arrange the following organizations in the chronological order of their establishment:\n1. East India Association\n2. Madras Mahajan Sabha\n3. Indian Association of Calcutta\n4. Bombay Presidency Association\n\nSelect the correct answer:",
        options: ["1-3-2-4", "1-3-4-2", "3-1-2-4", "1-2-3-4"],
        correctAnswer: 0, // (a)
        explanation: "East India Assoc (1866) -> Indian Assoc (1876) -> Madras Mahajan (1884) -> Bombay Presidency (1885).",
        subtopic: 'chronology',
        difficulty: 'Hard'
    },
    {
        id: 17,
        question: "Arrange the following events during Lord Lytton's viceroyalty:\n1. The Grand Delhi Durbar\n2. Passing of the Vernacular Press Act\n3. Second Anglo-Afghan War\n\nSelect the correct answer:",
        options: ["1-2-3", "3-1-2", "1-3-2", "All happened in close succession, but usually cited as Durbar (1877) -> Press Act (1878)."],
        correctAnswer: 0, // (a)
        explanation: "Durbar (1877), Press Act (1878), Afghan War (late 1878).",
        subtopic: 'chronology',
        difficulty: 'Hard'
    },
    // Set 5: Early Agitations
    {
        id: 18,
        question: "The first major \"All-India\" agitation organized by the Indian Association (Surendranath Banerjea) was against:",
        options: ["The Ilbert Bill.", "The reduction of the maximum age for ICS examination from 21 to 19 years.", "The imposition of Income Tax.", "The Partition of Bengal."],
        correctAnswer: 1, // (b)
        explanation: "The reduction of the ICS age limit (21 to 19) by Lytton sparked the first all-India agitation.",
        subtopic: 'early_agitations',
        difficulty: 'Moderate'
    },
    {
        id: 19,
        question: "Surendranath Banerjea was dismissed from the Indian Civil Service (ICS) in 1874 for:",
        options: ["Participating in a political protest.", "A minor procedural error/technical grounds (persecution by British superiors).", "Refusing to serve in a rural district.", "Publishing a seditious article."],
        correctAnswer: 1, // (b)
        explanation: "He was dismissed on flimsy technical grounds, which fueled his nationalist zeal.",
        subtopic: 'early_agitations',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "Who among the following was the first Indian to qualify for the Indian Civil Service (ICS)?",
        options: ["Satyendranath Tagore", "Surendranath Banerjea", "R.C. Dutt", "Subhash Chandra Bose"],
        correctAnswer: 0, // (a)
        explanation: "Satyendranath Tagore (Rabindranath's brother) was the first Indian ICS officer (1863).",
        subtopic: 'early_agitations',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "The \"National Conference\" held in Calcutta in 1883 and 1885 is considered the precursor to the Indian National Congress. It was convened by:",
        options: ["W.C. Bonnerjee", "Surendranath Banerjea", "Dadabhai Naoroji", "A.O. Hume"],
        correctAnswer: 1, // (b)
        explanation: "Surendranath Banerjea convened the National Conference. (Note: This is why he missed the first session of the INC in Bombay in 1885).",
        subtopic: 'early_agitations',
        difficulty: 'Moderate'
    },
    // Set 6: Press & Literature
    {
        id: 22,
        question: "The play \"Neel Darpan\" (1860) by Dinabandhu Mitra played a crucial role in arousing nationalist sentiment. It depicted:",
        options: ["The grandeur of the Mughal court.", "The exploitation of Indigo cultivators by British planters.", "The Sanyasi Rebellion.", "The 1857 Revolt."],
        correctAnswer: 1, // (b)
        explanation: "Indigo Planters' exploitation.",
        subtopic: 'press_literature',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "Who among the following is known as the \"Father of the Indian Press\" (though he was British) for his struggle against censorship in the early 19th century?",
        options: ["James Augustus Hicky", "Charles Metcalfe", "Raja Rammohan Roy", "James Silk Buckingham"],
        correctAnswer: 0, // (a)
        explanation: "James Augustus Hicky (Hicky's Bengal Gazette, 1780).",
        subtopic: 'press_literature',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "Lord Metcalfe is known as the \"Liberator of the Indian Press\" because:",
        options: ["He passed the Vernacular Press Act.", "He repealed the Licensing Regulations of 1823.", "He started the first newspaper in India.", "He subsidized Indian newspapers."],
        correctAnswer: 1, // (b)
        explanation: "Charles Metcalfe removed the restrictions of 1823.",
        subtopic: 'press_literature',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "Which famous nationalist newspaper had the motto \"Advance\"?",
        options: ["The Hindu", "The Bengalee", "The Indian Mirror", "Amrita Bazar Patrika"],
        correctAnswer: 2, // (c)
        explanation: "\"Advance\" was associated with The Indian Mirror (Devendranath Tagore/K.C. Sen).",
        subtopic: 'press_literature',
        difficulty: 'Hard'
    },
    // Set 7: Conceptual
    {
        id: 26,
        question: "Why did the early political associations (pre-1885) fail to become truly \"National\"?",
        options: ["They were banned by the British immediately.", "They were dominated by wealthy aristocrats (Zamindars) and were regional/local in character.", "They did not know the English language.", "They were focused only on religious reforms."],
        correctAnswer: 1, // (b)
        explanation: "Early associations were elite-dominated and regional.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The agitation against the \"Inland Emigration Act\" (regarding plantation labor in Assam) was taken up by:",
        options: ["The Landholders' Society", "The Indian Association (Bengal intelligentsia)", "The Bombay Association", "The British Indian Association"],
        correctAnswer: 1, // (b)
        explanation: "The Indian Association raised its voice for the Tea Garden laborers (coolies) of Assam.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "\"The grand Durbar of 1877 was held to proclaim Queen Victoria as the Empress of India.\" This event was heavily criticized by nationalists because:",
        options: ["It was held in Calcutta instead of Delhi.", "It was held when a terrible famine was raging in the Deccan and millions were dying.", "No Indian princes were invited.", "It declared the end of the Mughal lineage."],
        correctAnswer: 1, // (b)
        explanation: "\"Nero was fiddling while Rome burned.\" The Durbar was held during the Great Famine of 1876-78.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 29,
        question: "Who called the Indian Association of Calcutta \"The First Parliament of the Indian Nation\"?",
        options: ["Mahatma Gandhi", "J.L. Nehru", "A British Journalist (Cotton)", "S.N. Banerjea himself"],
        correctAnswer: 2, // (c)
        explanation: "Henry Cotton (British official/sympathizer) made this remark.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 30,
        question: "The \"London Indian Society\" (1865), which preceded the East India Association, was founded by:",
        options: ["Dadabhai Naoroji and W.C. Bonnerjee", "Dadabhai Naoroji and Pherozeshah Mehta", "Surendranath Banerjea", "Madam Cama"],
        correctAnswer: 0, // (a)
        explanation: "Dadabhai Naoroji and W.C. Bonnerjee.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 31,
        question: "Which of the following pre-Congress leaders was known as the \"Silver Tongued Orator\"?",
        options: ["Dadabhai Naoroji", "Surendranath Banerjea", "Gopal Krishna Gokhale", "Madan Mohan Malaviya"],
        correctAnswer: 1, // (b)
        explanation: "Surendranath Banerjea was famous for his oratory skills.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 32,
        question: "The \"Indian National Union\" formed in 1884 by A.O. Hume was the organization that eventually:",
        options: ["Merged with the Indian Association.", "Convened the first session of the Indian National Congress in 1885.", "Became the Muslim League.", "Organized the Swadeshi Movement."],
        correctAnswer: 1, // (b)
        explanation: "Hume formed the Indian National Union, which met in Bombay and renamed itself the Indian National Congress.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "Which of the following was NOT a demand of the early political associations?",
        options: ["Indianization of Civil Services.", "Separation of Executive from Judiciary.", "Reduction of Military expenditure.", "Complete Independence (Purna Swaraj)."],
        correctAnswer: 3, // (d)
        explanation: "Complete Independence was NOT a demand until 1929. Early nationalists wanted colonial self-government (Dominion status) or administrative reforms.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Statutory Civil Service\" introduced by Lytton was intended to:",
        options: ["Increase the number of Indians in the ICS.", "Allow Indians to be nominated to lower-ranking posts (1/6th of covenanted posts) without full powers, effectively downgrading them.", "Abolish the exam system.", "Reserve seats for Muslims."],
        correctAnswer: 1, // (b)
        explanation: "It was a measure to divert Indians from the covenanted ICS by offering them nominated, lower-status posts.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "\"The Congress was the natural and inevitable product of forces already at work.\" This statement implies that:",
        options: ["A.O. Hume created the Congress alone.", "The Congress was not an accident but the culmination of the work done by regional associations like the Indian Association.", "The British government wanted a political party.", "The 1857 revolt directly formed the Congress."],
        correctAnswer: 1, // (b)
        explanation: "It signifies the continuity of nationalism; the INC was the logical next step of the regional associations' efforts.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    }
];
