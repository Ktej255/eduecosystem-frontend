// History Flashcards - Complete Collection
// Covers all 10 Days: Ancient, Medieval, and Modern India

export interface Flashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    day: number;
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

// Day 1: IVC & Pre-History
export const day01Flashcards: Flashcard[] = [
    {
        id: "h-d01-01",
        front: "Which is the largest Indus Valley Civilization site in India?",
        back: "Rakhigarhi (Haryana) - over 350 hectares. Recent DNA studies from this site challenge the Aryan migration theory.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Sites"],
        difficulty: "easy"
    },
    {
        id: "h-d01-02",
        front: "What makes Lothal unique among IVC sites?",
        back: "Lothal (Gujarat) has the only dockyard discovered in IVC, indicating maritime trade. Also had a bead factory and fire altars.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Sites", "Trade"],
        difficulty: "medium"
    },
    {
        id: "h-d01-03",
        front: "What is Meluha?",
        back: "Meluha was the Mesopotamian name for the Indus Valley region. IVC traded carnelian beads, ivory, and copper with Mesopotamia.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Trade"],
        difficulty: "medium"
    },
    {
        id: "h-d01-04",
        front: "Which IVC site has the famous 'signboard' with Indus script?",
        back: "Dholavira (Gujarat) - has a signboard with 10 large Indus script characters. Also known for 16 water reservoirs and became UNESCO World Heritage Site in 2021.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Sites", "UNESCO"],
        difficulty: "medium"
    },
    {
        id: "h-d01-05",
        front: "What are the three things NOT found in mature Harappan phase?",
        back: "No iron, no horse, no temples. These are key distinguishing features from later civilizations.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Key Facts"],
        difficulty: "hard"
    },
    {
        id: "h-d01-06",
        front: "What is the Pashupati Seal?",
        back: "A seal from Mohenjodaro showing a figure in yogic posture surrounded by animals - often interpreted as Proto-Shiva. Evidence of early Shiva worship.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Religion", "Seals"],
        difficulty: "medium"
    },
    {
        id: "h-d01-07",
        front: "What weight system did IVC use?",
        back: "IVC used standard weights in multiples of 16. This shows high level of standardization across the civilization.",
        subject: "History",
        topic: "IVC",
        day: 1,
        tags: ["IVC", "Trade"],
        difficulty: "medium"
    },
    {
        id: "h-d01-08",
        front: "What is unique about Burzahom (Kashmir)?",
        back: "Burzahom is a Neolithic site famous for pit dwellings and dog burial with master - indicating emotional bond with pets in ancient times.",
        subject: "History",
        topic: "Pre-History",
        day: 1,
        tags: ["Neolithic", "Sites"],
        difficulty: "hard"
    }
];

// Day 2: Religion & Empires (Jainism, Buddhism, Mauryas, Guptas)
export const day02Flashcards: Flashcard[] = [
    {
        id: "h-d02-01",
        front: "What are the main doctrines of Jainism?",
        back: "Triratna (Three Jewels): Right Faith, Right Knowledge, Right Conduct. Also: Ahimsa (non-violence), Anekantavada (many-sidedness), Syadvada (conditional predication).",
        subject: "History",
        topic: "Religion",
        day: 2,
        tags: ["Jainism", "Religion"],
        difficulty: "medium"
    },
    {
        id: "h-d02-02",
        front: "What are the Four Noble Truths of Buddhism?",
        back: "1. Dukkha (suffering exists), 2. Samudaya (cause of suffering is desire), 3. Nirodha (suffering can end), 4. Magga (Eightfold Path is the way).",
        subject: "History",
        topic: "Religion",
        day: 2,
        tags: ["Buddhism", "Religion"],
        difficulty: "medium"
    },
    {
        id: "h-d02-03",
        front: "What was Ashoka's Dhamma?",
        back: "Universal ethical code emphasizing: tolerance, respect for elders, non-violence, and welfare of all beings. Not a religion but ethical principles. Spread through rock edicts.",
        subject: "History",
        topic: "Mauryas",
        day: 2,
        tags: ["Mauryas", "Ashoka"],
        difficulty: "medium"
    },
    {
        id: "h-d02-04",
        front: "What is the significance of Nalanda?",
        back: "Ancient Buddhist university (5th century CE), one of world's first residential universities. Had 10,000 students, 2,000 teachers. Destroyed by Bakhtiyar Khilji (1193 CE).",
        subject: "History",
        topic: "Buddhism",
        day: 2,
        tags: ["Buddhism", "Education"],
        difficulty: "easy"
    },
    {
        id: "h-d02-05",
        front: "Who were the Navratnas of Chandragupta II Vikramaditya?",
        back: "Nine scholars including: Kalidasa (poet), Varahamihira (astronomer), Amarasimha (lexicographer), Dhanvantari (physician). Symbol of Gupta cultural achievements.",
        subject: "History",
        topic: "Guptas",
        day: 2,
        tags: ["Guptas", "Culture"],
        difficulty: "hard"
    },
    {
        id: "h-d02-06",
        front: "What was the Arthashastra?",
        back: "Ancient treatise on statecraft, economics, and military strategy written by Kautilya (Chanakya) for Chandragupta Maurya. Describes the 'Saptanga' theory of state.",
        subject: "History",
        topic: "Mauryas",
        day: 2,
        tags: ["Mauryas", "Administration"],
        difficulty: "easy"
    }
];

// Day 3: Cholas & Delhi Sultanate
export const day03Flashcards: Flashcard[] = [
    {
        id: "h-d03-01",
        front: "What was the Chola naval achievement?",
        back: "Rajendra Chola I sent naval expeditions to Southeast Asia (Srivijaya), establishing Indian influence in the region. Called 'Gangaikonda Chola' (one who conquered the Ganga).",
        subject: "History",
        topic: "Cholas",
        day: 3,
        tags: ["Cholas", "Navy"],
        difficulty: "medium"
    },
    {
        id: "h-d03-02",
        front: "What were the market reforms of Alauddin Khilji?",
        back: "Created separate markets for grain, cloth, horses, and cattle. Fixed prices, deployed spies, and punished cheating. Purpose: maintain large army at low cost.",
        subject: "History",
        topic: "Delhi Sultanate",
        day: 3,
        tags: ["Delhi Sultanate", "Khilji"],
        difficulty: "medium"
    },
    {
        id: "h-d03-03",
        front: "What was the Iqta System?",
        back: "Land grant system where officers (Muqtis) were given land revenue rights instead of cash salary. They maintained troops and collected taxes. Started by Delhi Sultans.",
        subject: "History",
        topic: "Delhi Sultanate",
        day: 3,
        tags: ["Delhi Sultanate", "Administration"],
        difficulty: "medium"
    },
    {
        id: "h-d03-04",
        front: "What were Muhammad bin Tughlaq's famous 'experiments'?",
        back: "1. Token Currency (bronze coins failed due to forgery), 2. Transfer of Capital from Delhi to Daulatabad, 3. Taxation in Doab (failed due to famine).",
        subject: "History",
        topic: "Delhi Sultanate",
        day: 3,
        tags: ["Delhi Sultanate", "Tughlaq"],
        difficulty: "hard"
    },
    {
        id: "h-d03-05",
        front: "What is Brihadeswara Temple famous for?",
        back: "Built by Raja Raja Chola I at Thanjavur. UNESCO World Heritage Site. Has one of the tallest temple towers (66m). Dome weighs 80 tons, shadow doesn't fall on ground at noon.",
        subject: "History",
        topic: "Cholas",
        day: 3,
        tags: ["Cholas", "Architecture", "UNESCO"],
        difficulty: "medium"
    }
];

// Day 4: Mughals & Marathas
export const day04Flashcards: Flashcard[] = [
    {
        id: "h-d04-01",
        front: "What was Akbar's Mansabdari System?",
        back: "Military-bureaucratic system with dual ranks: Zat (personal rank) and Sawar (cavalry rank). Officers called Mansabdars. Ranks ranged from 10 to 10,000.",
        subject: "History",
        topic: "Mughals",
        day: 4,
        tags: ["Mughals", "Administration"],
        difficulty: "medium"
    },
    {
        id: "h-d04-02",
        front: "What was Sulh-i-Kul?",
        back: "Akbar's policy of 'Peace with All' - religious tolerance and harmony. Founded Din-i-Ilahi (Divine Faith) based on this principle.",
        subject: "History",
        topic: "Mughals",
        day: 4,
        tags: ["Mughals", "Akbar", "Religion"],
        difficulty: "easy"
    },
    {
        id: "h-d04-03",
        front: "What was the Maratha Confederacy?",
        back: "Alliance of Maratha chiefs (Peshwas, Bhonsles, Scindias, Holkars, Gaekwads) after Shivaji. Controlled large parts of India in 18th century until defeated by British.",
        subject: "History",
        topic: "Marathas",
        day: 4,
        tags: ["Marathas", "Politics"],
        difficulty: "medium"
    },
    {
        id: "h-d04-04",
        front: "What was Pietra Dura?",
        back: "Inlay technique of embedding semi-precious stones in marble. Used extensively in Mughal architecture (Taj Mahal). Italian term meaning 'hard stone'.",
        subject: "History",
        topic: "Mughals",
        day: 4,
        tags: ["Mughals", "Architecture"],
        difficulty: "medium"
    },
    {
        id: "h-d04-05",
        front: "What was the Third Battle of Panipat (1761)?",
        back: "Ahmad Shah Abdali defeated Marathas, ending their dream of all-India supremacy. One of bloodiest battles in history. Led to rise of regional powers.",
        subject: "History",
        topic: "Marathas",
        day: 4,
        tags: ["Marathas", "Battles"],
        difficulty: "hard"
    }
];

// Day 5: 1857-1905 (Revolt to Moderate Phase)
export const day05Flashcards: Flashcard[] = [
    {
        id: "h-d05-01",
        front: "What were the immediate causes of 1857 Revolt?",
        back: "Introduction of Enfield Rifle with greased cartridges (rumored to have cow/pig fat). Soldiers had to bite cartridges, offending both Hindus and Muslims.",
        subject: "History",
        topic: "1857 Revolt",
        day: 5,
        tags: ["1857", "Revolt"],
        difficulty: "easy"
    },
    {
        id: "h-d05-02",
        front: "Who were the main leaders of 1857 Revolt?",
        back: "Bahadur Shah Zafar (Delhi), Rani Lakshmibai (Jhansi), Tantia Tope, Nana Sahib (Kanpur), Kunwar Singh (Bihar), Begum Hazrat Mahal (Lucknow).",
        subject: "History",
        topic: "1857 Revolt",
        day: 5,
        tags: ["1857", "Leaders"],
        difficulty: "medium"
    },
    {
        id: "h-d05-03",
        front: "What was the 'Drain of Wealth' theory?",
        back: "Proposed by Dadabhai Naoroji. Argued that Britain was draining India's wealth through unequal trade, salaries to British officials, and 'Home Charges'.",
        subject: "History",
        topic: "Moderates",
        day: 5,
        tags: ["Moderates", "Economic Nationalism"],
        difficulty: "medium"
    },
    {
        id: "h-d05-04",
        front: "When and by whom was INC founded?",
        back: "Indian National Congress founded in 1885 by A.O. Hume. First session in Bombay under W.C. Bonnerjee. Initially had moderate demands through petitions.",
        subject: "History",
        topic: "INC",
        day: 5,
        tags: ["INC", "Origin"],
        difficulty: "easy"
    },
    {
        id: "h-d05-05",
        front: "Who were the key Moderate leaders?",
        back: "Dadabhai Naoroji (Grand Old Man), Gopal Krishna Gokhale, Pherozeshah Mehta, Surendranath Banerjee. Methods: Petitions, prayers, and constitutional agitation.",
        subject: "History",
        topic: "Moderates",
        day: 5,
        tags: ["INC", "Moderates"],
        difficulty: "medium"
    }
];

// Day 6: 1905-1919 (Swadeshi to Rowlatt)
export const day06Flashcards: Flashcard[] = [
    {
        id: "h-d06-01",
        front: "What was the Partition of Bengal (1905)?",
        back: "Lord Curzon divided Bengal into East Bengal (Muslim majority) and West Bengal (Hindu majority). Claimed for administrative efficiency but aimed at 'Divide and Rule'.",
        subject: "History",
        topic: "Swadeshi",
        day: 6,
        tags: ["Swadeshi", "Bengal Partition"],
        difficulty: "easy"
    },
    {
        id: "h-d06-02",
        front: "What were the methods of Swadeshi Movement?",
        back: "Boycott of British goods, use of Swadeshi (Indian) products, national education, emphasis on self-reliance. Songs like 'Vande Mataram' became rallying cry.",
        subject: "History",
        topic: "Swadeshi",
        day: 6,
        tags: ["Swadeshi", "Methods"],
        difficulty: "medium"
    },
    {
        id: "h-d06-03",
        front: "What was the Surat Split (1907)?",
        back: "INC split into Moderates (led by Gokhale) and Extremists (Lal-Bal-Pal). Reunited in Lucknow Pact (1916). Showed ideological differences in freedom struggle.",
        subject: "History",
        topic: "INC",
        day: 6,
        tags: ["INC", "Split"],
        difficulty: "medium"
    },
    {
        id: "h-d06-04",
        front: "What was the Lucknow Pact (1916)?",
        back: "Agreement between INC and Muslim League for joint political demands. Accepted separate electorates for Muslims. Signed during Tilak's return from prison.",
        subject: "History",
        topic: "Unity",
        day: 6,
        tags: ["INC", "Muslim League"],
        difficulty: "hard"
    },
    {
        id: "h-d06-05",
        front: "What was the Rowlatt Act (1919)?",
        back: "Allowed detention without trial, search without warrant. Called 'Black Act'. Protests against it led to Jallianwala Bagh massacre. Gandhi launched first nationwide satyagraha against it.",
        subject: "History",
        topic: "Repression",
        day: 6,
        tags: ["Rowlatt", "Repression"],
        difficulty: "medium"
    }
];

// Day 7: 1920-1935 (NCM to Communal Award)
export const day07Flashcards: Flashcard[] = [
    {
        id: "h-d07-01",
        front: "What were the methods of Non-Cooperation Movement (1920-22)?",
        back: "Surrender of titles, boycott of courts/councils/schools, use of Swadeshi, non-payment of taxes. Suspended after Chauri Chaura violence (1922).",
        subject: "History",
        topic: "NCM",
        day: 7,
        tags: ["NCM", "Gandhi"],
        difficulty: "medium"
    },
    {
        id: "h-d07-02",
        front: "What was the Khilafat Movement?",
        back: "Movement to restore Caliphate in Turkey (abolished by Mustafa Kemal). Led by Ali Brothers (Muhammad Ali, Shaukat Ali). Merged with NCM for Hindu-Muslim unity.",
        subject: "History",
        topic: "Khilafat",
        day: 7,
        tags: ["Khilafat", "Unity"],
        difficulty: "medium"
    },
    {
        id: "h-d07-03",
        front: "What was the Dandi March (1930)?",
        back: "Gandhi's 385 km march from Sabarmati to Dandi to break Salt Law. Started on March 12, 1930. Part of Civil Disobedience Movement. Symbolic defiance of British rule.",
        subject: "History",
        topic: "CDM",
        day: 7,
        tags: ["CDM", "Gandhi", "Salt"],
        difficulty: "easy"
    },
    {
        id: "h-d07-04",
        front: "What was the Poona Pact (1932)?",
        back: "Agreement between Gandhi and Ambedkar. Replaced separate electorates for Depressed Classes with reserved seats in joint electorate. Gandhi's fast ended it.",
        subject: "History",
        topic: "Social Reform",
        day: 7,
        tags: ["Poona Pact", "Ambedkar"],
        difficulty: "medium"
    },
    {
        id: "h-d07-05",
        front: "Who were the revolutionaries of this period?",
        back: "Bhagat Singh, Sukhdev, Rajguru (Lahore Conspiracy Case), Chandrasekhar Azad, Surya Sen (Chittagong Armoury Raid), Rash Behari Bose.",
        subject: "History",
        topic: "Revolutionaries",
        day: 7,
        tags: ["Revolutionaries"],
        difficulty: "medium"
    }
];

// Day 8: 1935-1947 (GoI Act to Independence)
export const day08Flashcards: Flashcard[] = [
    {
        id: "h-d08-01",
        front: "What were key features of GoI Act 1935?",
        back: "Provincial autonomy, Federal structure (never implemented), Bicameral legislature, Reserved subjects, Separate electorates. Called 'Charter of Slavery' by Nehru.",
        subject: "History",
        topic: "Constitutional",
        day: 8,
        tags: ["GoI 1935", "Constitution"],
        difficulty: "hard"
    },
    {
        id: "h-d08-02",
        front: "What was the Quit India Movement (1942)?",
        back: "Gandhi's 'Do or Die' call. Most militant mass movement. All top leaders arrested immediately. Underground resistance led by Jai Prakash Narayan, Aruna Asaf Ali.",
        subject: "History",
        topic: "QIM",
        day: 8,
        tags: ["QIM", "Gandhi"],
        difficulty: "easy"
    },
    {
        id: "h-d08-03",
        front: "What was the INA and who led it?",
        back: "Indian National Army led by Subhas Chandra Bose. Fought alongside Japanese against British. Slogan: 'Jai Hind'. Famous units: Gandhi Brigade, Rani Jhansi Regiment.",
        subject: "History",
        topic: "INA",
        day: 8,
        tags: ["INA", "Bose"],
        difficulty: "medium"
    },
    {
        id: "h-d08-04",
        front: "What was the Cabinet Mission Plan (1946)?",
        back: "Rejected Pakistan demand. Proposed three-tier federal structure: Provinces, Groups of Provinces, Union. Failed due to Nehru's interpretation dispute.",
        subject: "History",
        topic: "Partition",
        day: 8,
        tags: ["Cabinet Mission", "Partition"],
        difficulty: "hard"
    },
    {
        id: "h-d08-05",
        front: "What was Direct Action Day?",
        back: "August 16, 1946 called by Muslim League. Led to Great Calcutta Killings with communal violence. Pushed India towards partition.",
        subject: "History",
        topic: "Partition",
        day: 8,
        tags: ["Partition", "Violence"],
        difficulty: "medium"
    }
];

// Day 9: Architecture
export const day09Flashcards: Flashcard[] = [
    {
        id: "h-d09-01",
        front: "What are the features of Nagara Style temples?",
        back: "Curvilinear tower (Shikhara), no boundary wall, sanctum (Garbhagriha) at ground level. Example: Khajuraho, Konark, Lingaraja Temple (Bhubaneswar).",
        subject: "History",
        topic: "Architecture",
        day: 9,
        tags: ["Architecture", "Temples"],
        difficulty: "medium"
    },
    {
        id: "h-d09-02",
        front: "What are the features of Dravidian Style temples?",
        back: "Pyramidal tower (Vimana), elaborate gopurams (entrance gateway), rectangular courtyard, tank. Example: Brihadeswara, Meenakshi Temple.",
        subject: "History",
        topic: "Architecture",
        day: 9,
        tags: ["Architecture", "Temples"],
        difficulty: "medium"
    },
    {
        id: "h-d09-03",
        front: "What is the difference between Stupa and Chaitya?",
        back: "Stupa: Solid hemispherical dome containing relics (Sanchi, Bharhut). Chaitya: Prayer hall with stupa inside (Karle, Bhaja). Vihara: Monastery for monks.",
        subject: "History",
        topic: "Architecture",
        day: 9,
        tags: ["Architecture", "Buddhist"],
        difficulty: "hard"
    },
    {
        id: "h-d09-04",
        front: "What is the Sun Temple at Konark famous for?",
        back: "Built by Narasimhadeva I (Eastern Ganga dynasty). Designed as a giant chariot with 24 wheels. UNESCO World Heritage Site. Called 'Black Pagoda'.",
        subject: "History",
        topic: "Architecture",
        day: 9,
        tags: ["Architecture", "UNESCO"],
        difficulty: "easy"
    },
    {
        id: "h-d09-05",
        front: "What is special about Ajanta Caves?",
        back: "29 caves (Buddhist) with paintings dating 2nd century BCE to 6th century CE. Famous for: Padmapani and Vajrapani murals. UNESCO World Heritage Site.",
        subject: "History",
        topic: "Architecture",
        day: 9,
        tags: ["Architecture", "UNESCO", "Paintings"],
        difficulty: "medium"
    }
];

// Day 10: Culture & Literature
export const day10Flashcards: Flashcard[] = [
    {
        id: "h-d10-01",
        front: "What are the six schools of Indian Philosophy (Shad Darshanas)?",
        back: "Nyaya (logic), Vaisheshika (atomism), Samkhya (dualism), Yoga, Mimamsa (rituals), Vedanta (metaphysics). All except Samkhya accept Vedas.",
        subject: "History",
        topic: "Culture",
        day: 10,
        tags: ["Philosophy", "Culture"],
        difficulty: "hard"
    },
    {
        id: "h-d10-02",
        front: "What is the significance of Sangam Literature?",
        back: "Tamil literature (300 BCE - 300 CE) from three Sangams. Describes Muvendhar kings (Chera, Chola, Pandya). Tolkapiyyam is oldest Tamil grammar.",
        subject: "History",
        topic: "Literature",
        day: 10,
        tags: ["Literature", "Tamil"],
        difficulty: "medium"
    },
    {
        id: "h-d10-03",
        front: "What are the major classical dance forms of India?",
        back: "Bharatanatyam (Tamil Nadu), Kathak (North India), Odissi (Odisha), Kathakali (Kerala), Kuchipudi (Andhra), Manipuri (Manipur), Mohiniyattam (Kerala), Sattriya (Assam).",
        subject: "History",
        topic: "Culture",
        day: 10,
        tags: ["Dance", "Culture"],
        difficulty: "medium"
    },
    {
        id: "h-d10-04",
        front: "What is the difference between Hindustani and Carnatic music?",
        back: "Hindustani (North India): Persian influence, ragas like Bhairav. Carnatic (South India): Temple tradition, kriti compositions. Raga and Tala common to both.",
        subject: "History",
        topic: "Culture",
        day: 10,
        tags: ["Music", "Culture"],
        difficulty: "medium"
    },
    {
        id: "h-d10-05",
        front: "What are the Vedangas?",
        back: "Six auxiliary disciplines: Shiksha (phonetics), Kalpa (ritual), Vyakarana (grammar), Nirukta (etymology), Chhanda (metres), Jyotisha (astronomy).",
        subject: "History",
        topic: "Culture",
        day: 10,
        tags: ["Vedas", "Culture"],
        difficulty: "hard"
    }
];

// Combined export
export const historyFlashcards: Flashcard[] = [
    ...day01Flashcards,
    ...day02Flashcards,
    ...day03Flashcards,
    ...day04Flashcards,
    ...day05Flashcards,
    ...day06Flashcards,
    ...day07Flashcards,
    ...day08Flashcards,
    ...day09Flashcards,
    ...day10Flashcards
];

// Summary: 58 flashcards covering all 10 days of History curriculum
