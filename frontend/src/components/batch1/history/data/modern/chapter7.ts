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

export const MODERN_CHAPTER_7_SUBTOPICS: Subtopic[] = [
    { id: 'causes', name: 'Causes (Political, Social, Military)' },
    { id: 'leaders_centres', name: 'Leaders and Centres' },
    { id: 'chronology', name: 'Chronology and Outbreak' },
    { id: 'suppression', name: 'Suppression and British Officials' },
    { id: 'nature_historiography', name: 'Nature and Historiography' },
    { id: 'consequences', name: 'Consequences & Admin Changes' },
    { id: 'conceptual', name: 'Conceptual & Deep Dive' }
];

export const MODERN_CHAPTER_7_MCQS: Question[] = [
    // Set 1: Causes
    {
        id: 1,
        question: "The \"General Service Enlistment Act\" of 1856 was a major cause of resentment among the sepoys. What did this Act mandate?",
        options: ["Every new recruit had to pay for his own uniform.", "Every new recruit undertook to serve anywhere in India or abroad (overseas) if required.", "Sepoys were barred from wearing caste marks.", "The ratio of Indian to British soldiers was fixed at 5:1."],
        correctAnswer: 1, // (b)
        explanation: "The General Service Enlistment Act (1856) required recruits to serve anywhere, crossing the \"Kala Pani\" (black water), which meant loss of caste for Brahmins.",
        subtopic: 'causes',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Which of the following acts allowed a convert to Christianity to inherit his ancestral property, thereby confirming the fears of orthodox Indians?",
        options: ["Religious Disabilities Act (Lex Loci Act), 1850", "Widow Remarriage Act, 1856", "Charter Act of 1833", "Abolition of Sati Act, 1829"],
        correctAnswer: 0, // (a)
        explanation: "The Lex Loci Act (1850) allowed Christian converts to inherit ancestral property.",
        subtopic: 'causes',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The annexation of Awadh in 1856 was unique because:",
        options: ["It was done under the Doctrine of Lapse.", "It was done on the pretext of \"Misgovernance\" or \"Maladministration\".", "It was captured after a bloody war.", "It was ceded voluntarily by the Nawab."],
        correctAnswer: 1, // (b)
        explanation: "Awadh was annexed in 1856 by Dalhousie on the grounds of maladministration, not Doctrine of Lapse.",
        subtopic: 'causes',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The \"Post Office Act\" of 1854 withdrew a specific privilege enjoyed by the sepoys. What was it?",
        options: ["Free ration while on march.", "The privilege of free postage (letters) to their families.", "Exemption from toll taxes.", "The right to carry personal weapons."],
        correctAnswer: 1, // (b)
        explanation: "The Post Office Act (1854) withdrew the privilege of free postage for sepoys.",
        subtopic: 'causes',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Who was the Governor-General of India when the Revolt of 1857 broke out?",
        options: ["Lord Dalhousie", "Lord Canning", "Lord Hardinge", "Lord Ellenborough"],
        correctAnswer: 1, // (b)
        explanation: "Lord Canning was the Governor-General (1856–1862).",
        subtopic: 'causes',
        difficulty: 'Easy'
    },
    // Set 2: Leaders and Centres
    {
        id: 6,
        question: "Match the following Leaders with their Centres of Revolt:\nA. Khan Bahadur -> 1. Faizabad\nB. Maulvi Ahmadullah -> 2. Bareilly\nC. Kunwar Singh -> 3. Arrah (Bihar)\nD. Begum Hazrat Mahal -> 4. Lucknow\n\nSelect the correct answer:",
        options: ["A-2, B-1, C-3, D-4", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-3, B-4, C-2, D-1"],
        correctAnswer: 0, // (a)
        explanation: "Khan Bahadur (Bareilly), Maulvi Ahmadullah (Faizabad), Kunwar Singh (Bihar/Arrah), Hazrat Mahal (Lucknow).",
        subtopic: 'leaders_centres',
        difficulty: 'Moderate'
    },
    {
        id: 7,
        question: "General Bakht Khan is best known for:",
        options: ["Leading the revolt in Kanpur.", "Heading the council of soldiers (Court of Administration) in Delhi.", "Betraying Rani Laxmibai.", "Being the Prime Minister of Nana Saheb."],
        correctAnswer: 1, // (b)
        explanation: "General Bakht Khan led the Bareilly troops to Delhi and headed the Court of Administration there.",
        subtopic: 'leaders_centres',
        difficulty: 'Moderate'
    },
    {
        id: 8,
        question: "Who among the following leaders of 1857 was known as \"Danka Shah\" (The Drummer) because he moved from village to village beating a drum to mobilize people?",
        options: ["Maulvi Ahmadullah", "Tantia Tope", "Kunwar Singh", "Shah Mal"],
        correctAnswer: 0, // (a)
        explanation: "Maulvi Ahmadullah of Faizabad was known as Danka Shah.",
        subtopic: 'leaders_centres',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "Shah Mal, a local villager, led the revolt in which region, organizing the headmen of 84 villages?",
        options: ["Baraut (Baghpat, UP)", "Jagdishpur (Bihar)", "Jhansi (Bundelkhand)", "Satara (Maharashtra)"],
        correctAnswer: 0, // (a)
        explanation: "Shah Mal mobilized the Jats of Pargana Baraut (Baghpat).",
        subtopic: 'leaders_centres',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "Who was the able commander of the forces of Nana Saheb, who later resorted to guerilla warfare in the jungles of Central India?",
        options: ["Azimullah Khan", "Tantia Tope", "Amar Singh", "Jwala Prasad"],
        correctAnswer: 1, // (b)
        explanation: "Tantia Tope was Nana Saheb's commander and an expert in guerilla warfare.",
        subtopic: 'leaders_centres',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "The revolt in Allahabad was led by:",
        options: ["Liaqat Ali", "Khan Bahadur Khan", "Devi Singh", "Kadam Singh"],
        correctAnswer: 0, // (a)
        explanation: "Liaqat Ali led the revolt in Allahabad.",
        subtopic: 'leaders_centres',
        difficulty: 'Easy'
    },
    // Set 3: Chronology
    {
        id: 12,
        question: "Arrange the following events in chronological order:\n1. Mutiny at Meerut\n2. Mangal Pandey's execution at Barrackpore\n3. Proclamation of Bahadur Shah as Emperor of India\n4. Mutiny at Berhampore (19th Native Infantry)\n\nSelect the correct answer:",
        options: ["4-2-1-3", "2-4-1-3", "4-1-2-3", "2-1-3-4"],
        correctAnswer: 0, // (a)
        explanation: "Berhampore (Feb 1857) -> Mangal Pandey (March 1857) -> Meerut (May 10) -> Delhi (May 11/12).",
        subtopic: 'chronology',
        difficulty: 'Hard'
    },
    {
        id: 13,
        question: "On which date did the sepoys at Meerut officially revolt and start their march towards Delhi?",
        options: ["March 29, 1857", "May 10, 1857", "May 11, 1857", "June 5, 1857"],
        correctAnswer: 1, // (b)
        explanation: "The revolt officially started at Meerut on May 10, 1857.",
        subtopic: 'chronology',
        difficulty: 'Easy'
    },
    // Set 4: Suppression
    {
        id: 14,
        question: "Match the British Official with the Centre they suppressed:\nA. John Nicholson -> 1. Jhansi\nB. Colin Campbell -> 2. Delhi\nC. Hugh Rose -> 3. Kanpur\nD. William Taylor -> 4. Arrah\n\nSelect the correct answer:",
        options: ["A-2, B-3, C-1, D-4", "A-2, B-1, C-3, D-4", "A-3, B-2, C-1, D-4", "A-1, B-3, C-2, D-4"],
        correctAnswer: 0, // (a)
        explanation: "Nicholson (Delhi), Campbell (Lucknow/Kanpur), Hugh Rose (Jhansi), William Taylor (Arrah).",
        subtopic: 'suppression',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "\"Here lay the woman who was the only man among the rebels.\" Who said this about Rani Laxmibai?",
        options: ["Lord Canning", "Sir Hugh Rose", "Major Hudson", "Colin Campbell"],
        correctAnswer: 1, // (b)
        explanation: "Sir Hugh Rose, who defeated her, paid this tribute.",
        subtopic: 'suppression',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "Who was the British Resident at Lucknow who lost his life during the siege of the Residency?",
        options: ["Henry Lawrence", "John Lawrence", "James Outram", "Havelock"],
        correctAnswer: 0, // (a)
        explanation: "Sir Henry Lawrence died defending the Residency at Lucknow.",
        subtopic: 'suppression',
        difficulty: 'Moderate'
    },
    {
        id: 17,
        question: "The Mughal Emperor Bahadur Shah Zafar was arrested by Lieutenant Hudson from:",
        options: ["The Red Fort", "Humayun's Tomb", "Jama Masjid", "Safdarjung Tomb"],
        correctAnswer: 1, // (b)
        explanation: "Bahadur Shah was hiding at Humayun's Tomb.",
        subtopic: 'suppression',
        difficulty: 'Easy'
    },
    // Set 5: Nature
    {
        id: 18,
        question: "Who described the Revolt of 1857 as \"Neither first, nor national, nor a war of independence\"?",
        options: ["V.D. Savarkar", "S.N. Sen", "R.C. Majumdar", "Jawaharlal Nehru"],
        correctAnswer: 2, // (c)
        explanation: "R.C. Majumdar gave this famous critique.",
        subtopic: 'nature_historiography',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "The book \"The Indian War of Independence, 1857\", which described the revolt as a planned war of national independence, was written by:",
        options: ["Syed Ahmed Khan", "V.D. Savarkar", "Har Dayal", "Dadabhai Naoroji"],
        correctAnswer: 1, // (b)
        explanation: "V.D. Savarkar called it the First War of Independence.",
        subtopic: 'nature_historiography',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "\"What began as a fight for religion ended as a war of independence.\" This is the conclusion of which official historian of independent India?",
        options: ["Dr. S.N. Sen", "Dr. Tara Chand", "Dr. R.C. Majumdar", "Ashok Mehta"],
        correctAnswer: 0, // (a)
        explanation: "Dr. S.N. Sen in his official history Eighteen Fifty-Seven.",
        subtopic: 'nature_historiography',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "According to Karl Marx, the Revolt of 1857 was:",
        options: ["A feudal reaction of the decaying aristocracy.", "A national revolt of the Indian people against foreign imperialism.", "A purely military mutiny.", "A religious war."],
        correctAnswer: 1, // (b)
        explanation: "Marx described it as a \"national revolt\" in his articles for the New York Daily Tribune.",
        subtopic: 'nature_historiography',
        difficulty: 'Moderate'
    },
    {
        id: 22,
        question: "Who among the following British politicians admitted in the House of Commons that it was a \"National Revolt\" and not just a military mutiny?",
        options: ["Benjamin Disraeli", "Lord Palmerston", "Gladstone", "Winston Churchill"],
        correctAnswer: 0, // (a)
        explanation: "Disraeli (Opposition Leader then) called it a national revolt.",
        subtopic: 'nature_historiography',
        difficulty: 'Moderate'
    },
    // Set 6: Consequences
    {
        id: 23,
        question: "The \"Queen's Proclamation\" of 1858 was read out by Lord Canning at a Durbar held in:",
        options: ["Calcutta", "Delhi", "Allahabad", "Bombay"],
        correctAnswer: 2, // (c)
        explanation: "The Proclamation was read at Allahabad on Nov 1, 1858.",
        subtopic: 'consequences',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "Which of the following was NOT a promise made in the Queen's Proclamation of 1858?",
        options: ["No further annexation of Indian states.", "Non-interference in religious beliefs of Indians.", "Introduction of democratic elections in India.", "Equal treatment of all subjects (Indians and British) in the eyes of the law."],
        correctAnswer: 2, // (c)
        explanation: "No promise of democratic elections was made.",
        subtopic: 'consequences',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "The \"Peel Commission\" was appointed after the 1857 revolt to deal with:",
        options: ["Administrative reforms in Civil Services.", "Reorganization of the Army.", "Educational reforms.", "Famine relief."],
        correctAnswer: 1, // (b)
        explanation: "Peel Commission was for Army Reorganization (reducing Indian troops, increasing Europeans).",
        subtopic: 'consequences',
        difficulty: 'Moderate'
    },
    {
        id: 26,
        question: "As part of the army reorganization after 1857, which \"martial races\" were recruited in large numbers?",
        options: ["Bengalis and Marathas", "Sikhs, Gurkhas, and Pathans", "Brahmins of UP and Bihar", "Tamils and Telugus"],
        correctAnswer: 1, // (b)
        explanation: "Sikhs, Gurkhas, and Pathans (who helped suppress the revolt) were declared martial races.",
        subtopic: 'consequences',
        difficulty: 'Easy'
    },
    {
        id: 27,
        question: "The ratio of European to Indian soldiers in the Bengal Army was fixed at _____ after the revolt.",
        options: ["1:5", "1:2", "1:3", "2:1"],
        correctAnswer: 1, // (b)
        explanation: "The ratio was fixed at 1:2 in Bengal (it was 1:5 before).",
        subtopic: 'consequences',
        difficulty: 'Moderate'
    },
    // Set 7: Conceptual & Deep Dive
    {
        id: 28,
        question: "Why did the \"Talukdars of Awadh\" join the revolt in such large numbers?",
        options: ["They were loyal to the Mughal Emperor.", "The Summary Settlement of 1856 had dispossessed them of their lands and forts.", "They were forced to convert to Christianity.", "They wanted to capture Delhi."],
        correctAnswer: 1, // (b)
        explanation: "The Summary Settlement had removed them from their lands; the revolt was their attempt to regain feudal power.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "Which of the following classes largely remained neutral or supported the British during the revolt?\n1. The Moneylenders and Merchants.\n2. The Modern Educated Indians.\n3. The Rulers of Patiala, Jind, and Gwalior.\n\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswer: 3, // (d)
        explanation: "All these groups (Merchants, Educated class, many Princes) did not support the revolt.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "Azimullah Khan was a close associate and advisor to:",
        options: ["Kunwar Singh", "Nana Saheb", "Rani Laxmibai", "Bahadur Shah Zafar"],
        correctAnswer: 1, // (b)
        explanation: "Azimullah Khan was the advisor to Nana Saheb.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 31,
        question: "The term \"White Mutiny\" in the context of 1858-59 refers to:",
        options: ["The revolt of white soldiers of the East India Company against their transfer to the Crown's control without a bounty.", "The protest of British planters against the Indigo revolt.", "The refusal of British officers to serve under the Viceroy.", "A conspiracy in the British Parliament."],
        correctAnswer: 0, // (a)
        explanation: "White Mutiny occurred when EIC's European troops refused to be transferred to the Crown without a bonus.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "Who wrote the book \"The Causes of the Indian Revolt\" (Asbab-i-Baghawat-i-Hind) in 1858, attempting to explain the Muslim perspective?",
        options: ["Maulana Azad", "Sir Syed Ahmed Khan", "Mirza Ghalib", "Altaf Hussain Hali"],
        correctAnswer: 1, // (b)
        explanation: "Sir Syed Ahmed Khan wrote Asbab-i-Baghawat-i-Hind.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "Which region of India remained relatively peaceful and unaffected during the 1857 revolt?",
        options: ["Rohilkhand", "Madras Presidency", "Bundelkhand", "Awadh"],
        correctAnswer: 1, // (b)
        explanation: "The Madras Presidency (South India) remained largely peaceful.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Inam Commission\" appointed in Bombay prior to the revolt was responsible for:",
        options: ["Giving awards to loyal soldiers.", "Investigating titles of rent-free lands and confiscating them if titles were invalid.", "Looking into the grievances of the peasants.", "promoting education."],
        correctAnswer: 1, // (b)
        explanation: "The Inam Commission (1852) confiscated nearly 20,000 estates in Bombay.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "\"The cartridge incident was only the spark that set the magazine on fire.\" Who made this observation regarding the causes of the revolt?",
        options: ["Lord Canning", "Disraeli", "Jawaharlal Nehru", "S.N. Sen"],
        correctAnswer: 0, // (a)
        explanation: "This is a famous observation often attributed to Lord Canning.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    // PART 2: Advanced Questions (Set 8-11)
    // Set 8: Micro-Level Leaders
    {
        id: 36,
        question: "Match the following Local Leaders with their regions:\nA. Devi Singh -> 1. Mathura\nB. Kadam Singh -> 2. Meerut\nC. Gajadhar Singh -> 3. Gorakhpur\nD. Surendra Sai -> 4. Sambalpur (Odisha)\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-1, B-3, C-2, D-4", "A-3, B-1, C-2, D-4"],
        correctAnswer: 0, // (a)
        explanation: "All pairs are correctly matched. These are the specific local leaders often asked in matching columns.",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    },
    {
        id: 37,
        question: "The revolt in the Kota state of Rajasthan was unique because it was led by civilians and soldiers who imprisoned the ruler. Who were the leaders of the revolt in Kota?",
        options: ["Kushal Singh and Amar Singh", "Jaidayal and Hardayal", "Man Singh and Firuz Shah", "Tantia Tope and Rao Tula Ram"],
        correctAnswer: 1, // (b)
        explanation: "Jaidayal and Hardayal led the revolt in Kota. The ruler Ram Singh was imprisoned in his own palace.",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    },
    {
        id: 38,
        question: "\"Raja Pratap Singh\" and \"Vir Singh\" led the revolt in which hill region, inspired by the general uprising?",
        options: ["Kumaon", "Garhwal", "Kullu (Himachal)", "Kangra"],
        correctAnswer: 2, // (c)
        explanation: "Raja Pratap Singh of Kullu incited the people of the hills.",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    },
    {
        id: 39,
        question: "Who among the following leaders led the revolt in Assam, declaring a restoration of the Ahom kingdom?",
        options: ["Gomdhar Konwar", "Maniram Dewan", "Tirat Singh", "Tikendrajit Singh"],
        correctAnswer: 1, // (b)
        explanation: "Maniram Dewan (along with the young prince Kandarpeshwar Singha) planned the revolt in Assam but was hanged.",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    },
    {
        id: 40,
        question: "The revolt in Faizabad was led by Maulvi Ahmadullah. He is famous for:",
        options: ["Being a Hindu ascetic who converted to Islam.", "Issuing a 'Fatwa' against the British and declaring a Jihad.", "Helping the British Resident escape.", "Surrendering peacefully to the British."],
        correctAnswer: 1, // (b)
        explanation: "Maulvi Ahmadullah (Faizabad) was a staunch enemy of the British, issued a Fatwa, and caused them massive trouble.",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    },
    // Set 9: Causes & British Perspectives
    {
        id: 41,
        question: "\"If Scindia joins the revolt, I shall have to pack off my bags tomorrow.\" Who made this panicked statement highlighting the importance of the Indian Princes' support to the British?",
        options: ["Lord Dalhousie", "Lord Canning", "John Lawrence", "Queen Victoria"],
        correctAnswer: 1, // (b)
        explanation: "Lord Canning admitted that the Princely states acted as \"breakwaters to the storm.\"",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 42,
        question: "The \"Telegram\" played a crucial role in the British victory. Which rebel leader famously said on his deathbed, \"It is this accursed string (telegraph) that strangled us\"?",
        options: ["Nana Saheb", "Tantia Tope", "A Rebel Commander (Anonymous/attributed)", "Kunwar Singh"],
        correctAnswer: 2, // (c)
        explanation: "This statement is widely attributed to the rebel side (often cited in general historiography) acknowledging the speed of British communication.",
        subtopic: 'suppression',
        difficulty: 'Hard'
    },
    {
        id: 43,
        question: "Which British officer earned the nickname \"The Butcher of Delhi\" for his brutal massacre of civilians after the recapture of the city?",
        options: ["John Nicholson", "Hudson", "General Neill", "Colin Campbell"],
        correctAnswer: 1, // (b)
        explanation: "Hudson (or Hodson) is notorious for shooting the Mughal princes and the brutal sack of Delhi. General Neill is also known for brutality in Allahabad/Kanpur, but Hudson is associated with Delhi.",
        subtopic: 'suppression',
        difficulty: 'Hard'
    },
    {
        id: 44,
        question: "The British \"Royal Commission\" (later Peel Commission) on the Army recommended \"Division and Counterpoise\". What did this policy imply?",
        options: ["Dividing the army into Presidencies.", "Mixing soldiers of different castes and communities in every regiment to prevent unity.", "Creating regiments on the basis of caste, community, and region to prevent the growth of national sentiment (e.g., Sikh Regiment, Gurkha Regiment).", "Banning Indians from the artillery."],
        correctAnswer: 2, // (c)
        explanation: "The policy was to prevent \"General\" unity. Regiments were organized on caste/community/regional lines (e.g., Sikhs, Pathans) so they could be used against each other if needed.",
        subtopic: 'consequences',
        difficulty: 'Hard'
    },
    // Set 10: Literature
    {
        id: 45,
        question: "Match the Book with the Author:\nA. The Great Rebellion -> 1. Ashok Mehta\nB. Eighteen Fifty-Seven -> 2. S.N. Sen\nC. The Sepoy Mutiny and the Revolt of 1857 -> 3. R.C. Majumdar\nD. Civil Rebellion in the Indian Mutinies -> 4. S.B. Chaudhuri\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-1, B-3, C-2, D-4", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0, // (a)
        explanation: "A-1 (Ashok Mehta), B-2 (S.N. Sen - Official Historian), C-3 (R.C. Majumdar), D-4 (S.B. Chaudhuri - focussed on Civil rebellion).",
        subtopic: 'nature_historiography',
        difficulty: 'Hard'
    },
    {
        id: 46,
        question: "Who wrote the pamphlet \"The Causes of the Indian Revolt\" (Asbab-i-Baghawat-i-Hind), where he argued that the lack of Indian representation in the Legislative Council was a primary cause?",
        options: ["Dadabhai Naoroji", "Sir Syed Ahmed Khan", "Badruddin Tyabji", "W.C. Bonnerjee"],
        correctAnswer: 1, // (b)
        explanation: "Sir Syed Ahmed Khan wrote this to explain that the British failed to understand the Indian mind because Indians were not in the Council.",
        subtopic: 'nature_historiography',
        difficulty: 'Moderate'
    },
    {
        id: 47,
        question: "The famous Urdu poet Mirza Ghalib was a contemporary of the revolt. He described the events in his diary titled:",
        options: ["Dastambul", "Diwan-i-Ghalib", "Aab-e-Hayat", "Soz-e-Watan"],
        correctAnswer: 0, // (a)
        explanation: "Dastambul is Ghalib's diary of the revolt period.",
        subtopic: 'nature_historiography',
        difficulty: 'Hard'
    },
    // Set 11: Failure & Impact
    {
        id: 48,
        question: "Which of the following states/regions remained loyal to the British or remained quiet during the 1857 revolt?\n1. Holkar of Indore (though his troops revolted)\n2. Scindia of Gwalior\n3. Nizam of Hyderabad\n4. Gulab Singh of Kashmir\n5. Rana of Nepal\n\nSelect the correct answer:",
        options: ["1, 2 and 3 only", "2, 3 and 5 only", "1, 2, 3 and 4 only", "1, 2, 3, 4 and 5"],
        correctAnswer: 3, // (d)
        explanation: "All listed powers remained loyal or neutral. The Gurkhas of Nepal actually helped the British suppress the revolt (Jang Bahadur).",
        subtopic: 'consequences',
        difficulty: 'Hard'
    },
    {
        id: 49,
        question: "The \"Summary Settlement of 1856\" in Awadh was reversed after the revolt. What was the result of the new settlement after 1858?",
        options: ["The rights of the peasants were strengthened.", "The Talukdars were reinstated as the owners of the land to ensure their loyalty.", "Awadh was merged with Bengal.", "The Zamindari system was abolished."],
        correctAnswer: 1, // (b)
        explanation: "To ensure future loyalty, the British reversed their policy and reinstated the Talukdars of Awadh, making them a firm pillar of British rule.",
        subtopic: 'consequences',
        difficulty: 'Moderate'
    },
    {
        id: 50,
        question: "Which Act formally ended the rule of the East India Company and transferred power to the British Crown?",
        options: ["The Charter Act of 1853", "The Government of India Act, 1858", "The Indian Councils Act, 1861", "The Royal Titles Act, 1876"],
        correctAnswer: 1, // (b)
        explanation: "Government of India Act, 1858 (Good Governance Act).",
        subtopic: 'consequences',
        difficulty: 'Easy'
    },
    {
        id: 51,
        question: "The \"White Mutiny\" post-1857 was resolved by:",
        options: ["Granting the white soldiers the bounty they demanded.", "Repatriating those who did not want to serve the Crown and merging the rest into the British Army.", "Executing the ringleaders.", "Disbanding the European regiments completely."],
        correctAnswer: 1, // (b)
        explanation: "The \"White Mutiny\" ended with the offer of repatriation (ticket home) or merger.",
        subtopic: 'consequences',
        difficulty: 'Moderate'
    },
    {
        id: 52,
        question: "The \"Wahabis\" participated in the Revolt of 1857. Their ideology during this phase was primarily:",
        options: ["Anti-feudal", "Anti-British and creating an Islamic State", "Pro-Mughal Restoration only", "Social Reformist"],
        correctAnswer: 1, // (b)
        explanation: "The Wahabis (followers of Sayyid Ahmed Barelvi's ideology) wanted to expel the British (Infidels).",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 53,
        question: "Who among the following rebel leaders managed to escape to Nepal and was never captured?\n1. Nana Saheb\n2. Begum Hazrat Mahal\n3. Khan Bahadur Khan\n4. Tantia Tope\n\nSelect the correct answer:",
        options: ["1 and 2 only", "1, 2 and 3 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 0, // (a)
        explanation: "Both Nana Saheb and Begum Hazrat Mahal refused to surrender and escaped to Nepal. Tantia Tope was captured and hanged. Khan Bahadur was also captured.",
        subtopic: 'suppression',
        difficulty: 'Moderate'
    },
    {
        id: 54,
        question: "The revolt at Jagdishpur (Bihar) was kept alive after the death of 80-year-old Kunwar Singh by his brother:",
        options: ["Amar Singh", "Hussain Shah", "Pheer Ali", "Wajid Ali"],
        correctAnswer: 0, // (a)
        explanation: "Amar Singh continued the guerilla struggle in Bihar for a long time after Kunwar Singh's death.",
        subtopic: 'leaders_centres',
        difficulty: 'Moderate'
    },
    {
        id: 55,
        question: "In the context of 1857, who was Rao Tula Ram?",
        options: ["A leader in South India.", "A leader in Ahirwal region (Rewari, Haryana) who fought at Nasibpur.", "The Treasurer of Bahadur Shah Zafar.", "A traitor who helped the British."],
        correctAnswer: 1, // (b)
        explanation: "Rao Tula Ram is the hero of the revolt in Haryana (Rewari/Ahirwal belt).",
        subtopic: 'leaders_centres',
        difficulty: 'Hard'
    }
];

export const MODERN_CHAPTER_7_CONTENT = `
# BLOCK 1: THE REVOLT OF 1857
## 🔥 THE CRISIS OF 1857 (Sepoy Mutiny)

**Causes:**
*   **Military:** Greased Cartridges (Enfield Rifle - Beef/Pork fat rumor). General Service Enlistment Act (Crossing sea = Loss of caste).
*   **Political:** Doctrine of Lapse (Satara, Jhansi). Annexation of Awadh (Unemployment of soldiers).
*   **Economic:** Heavy taxation, De-industrialization.
*   **Social:** Interference in Sati, Widow Remarriage, Missionaries.

**The Spark:**
*   **Mangal Pandey:** Barrackpore (March 29, 1857). Hanged.
*   **Outbreak:** Meerut (May 10, 1857) -> March to Delhi -> Bahadur Shah Zafar declared Emperor.

# BLOCK 2: LEADERS & CENTRES
## 👑 HEROES OF 1857

| Centre | Leader | British Suppressor |
| :--- | :--- | :--- |
| **Delhi** | Bahadur Shah (Symbolic), **Gen. Bakht Khan** (Real) | John Nicholson |
| **Kanpur** | **Nana Saheb**, Tantia Tope, Azimullah | Colin Campbell |
| **Lucknow** | **Begum Hazrat Mahal**, Birjis Qadir | Colin Campbell |
| **Jhansi** | **Rani Laxmibai** | Sir Hugh Rose |
| **Arrah (Bihar)** | **Kunwar Singh** (80 yrs old) | William Taylor |
| **Faizabad** | Maulvi Ahmadullah | - |
| **Bareilly** | Khan Bahadur Khan | - |

**Fate of Leaders:**
*   **Bahadur Shah:** Deported to Rangoon (Died 1862).
*   **Nana Saheb/Begum:** Escaped to Nepal.
*   **Rani Laxmibai:** Died fighting in Gwalior.
*   **Tantia Tope:** Betrayed & Hanged.

# BLOCK 3: WHY DID IT FAIL?
**1. Lack of Unity:** No All-India participation. South India, Punjab, Bengal remained quiet.
**2. Lack of Support:** Educated Class, Merchants, Zamindars, and many Princes (Scindia, Holkar, Nizam, Gurkhas) supported British. ("Breakwaters to the storm").
**3. Poor Equipment:** Swords/Muskets vs Enfield Rifles/Telegraph.
**4. No Vision:** Developing a modern state wasn't the goal; restoring the old feudal order was.

# BLOCK 4: IMPACT & NATURE
**Nature:**
*   **British View:** "Sepoy Mutiny".
*   **V.D. Savarkar:** "First War of Independence".
*   **R.C. Majumdar:** "Neither first, nor national, nor a war of independence." [Mains Quote]
*   **S.N. Sen:** "Started as religion fight, ended as war of independence."

**Consequences:**
*   **End of Company Rule:** **Govt of India Act 1858** (Crown Rule).
*   **Queen's Proclamation (1858):** No more annexation. Religious non-interference.
*   **Army Reorg (Peel Commission):** Divide & Rule. Martial Races (Sikhs, Gurkhas) recruited. 1:2 ratio (British:Indian).

> [!TIP]
> **🔥 PYQ ALERT:**
> *   **Q:** Who called it First War of Independence? -> **V.D. Savarkar**.
> *   **Q:** Who led in Bihar? -> **Kunwar Singh**.
> *   **Q:** Who said "Scindia saved the empire"? -> **Canning**.
`;

