export interface Subtopic {
    id: string;
    name: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string; // ID of the subtopic
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_1_SUBTOPICS: Subtopic[] = [
    { id: 'archival', name: 'Archival Materials' },
    { id: 'biographies', name: 'Biographies, Memoirs & Travel Accounts' },
    { id: 'newspapers', name: 'Newspapers & Journals' },
    { id: 'oral', name: 'Oral Evidence' },
    { id: 'literature', name: 'Creative Literature' },
    { id: 'painting', name: 'Painting' }
];

export const MODERN_CHAPTER_1_MCQS: Question[] = [
    // Set 1: Archival & Official Records
    {
        id: 1,
        question: "Consider the following statements regarding the archives of the Three Presidencies:\n1. The early records of Fort Williams (Bengal Presidency) were preserved intact despite the sack of Calcutta in 1756.\n2. The archives of the Bombay Presidency include records of the Kingdom of Mysore incorporated in 1956.\n3. The records of Fort St. George (Madras Presidency) begin as early as AD 1670.\n\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b) 2 and 3 only
        explanation: "Statement 1 is Incorrect: The text explicitly states that the early records of Fort Williams were lost during the sack of Calcutta in 1756.\nStatement 2 is Correct: Bombay Presidency archives contain records of Gujarat, Sindh, and the Kannada-speaking districts incorporated into Mysore in 1956.\nStatement 3 is Correct: The Madras Presidency records begin from AD 1670.",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "With reference to the 'Survey of India', consider the following statements:\n1. It was established to map the unknown territories of India to support colonial administration.\n2. James Rennell was appointed as the first Surveyor General of Bengal in 1767.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c) Both 1 and 2
        explanation: "Both statements are correct. The Survey of India was crucial for mapping the colony, and James Rennell was indeed the first Surveyor General of Bengal appointed in 1767.",
        subtopic: 'archival',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Match the following European Archives with their corresponding repository locations:\nA. Portuguese -> 1. The Hague\nB. Dutch -> 2. Lisbon\nC. French -> 3. Copenhagen\nD. Danish -> 4. Paris\n\nSelect the correct answer using the code given below:",
        options: ["A-2, B-1, C-4, D-3", "A-2, B-4, C-1, D-3", "A-4, B-1, C-2, D-3", "A-1, B-2, C-3, D-4"],
        correctAnswer: 0, // (a)
        explanation: "Portuguese: Records in Lisbon (Torre do Tombo).\nDutch: Records in The Hague (Rijksarchief).\nFrench: Records in Paris (Archives Nationales).\nDanish: Records in Copenhagen (Rigsarkivet).",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    // Set 2: Literature, Press & Travel Accounts
    {
        id: 4,
        question: "The novel \"Hind ane Britania\", which criticized the British rule, was written by which of the following Gujarati writers?",
        options: ["Girija Devi", "Rammohan Roy", "Icha Ram Suryaram Desai", "K.M. Munshi"],
        correctAnswer: 2, // (c)
        explanation: "Icha Ram Suryaram Desai wrote Hind ane Britania, a Gujarati novel famous for its political critique.",
        subtopic: 'literature',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Consider the following pairs of newspapers and their associated personalities/origins:\n1. Bengal Gazette: James Augustus Hicky\n2. The Hindu: G. Subramaniya Iyer\n3. Calcutta Journal: J.S. Buckingham\n\nWhich of the pairs given above are correctly matched?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All pairs are correctly matched. J.A. Hicky started the first newspaper Bengal Gazette (1780). The Hindu was associated with G. Subramaniya Iyer, and J.S. Buckingham was the editor of the Calcutta Journal.",
        subtopic: 'newspapers',
        difficulty: 'Easy'
    },
    {
        id: 6,
        question: "Which of the following literary works is associated with the 'Sanyasi Revolt' of the 1760s?",
        options: ["Neeldarpan", "Anandamath", "Rajsimha", "Ghasiram Kotwal"],
        correctAnswer: 1, // (b)
        explanation: "Anandamath by Bankim Chandra Chattopadhyay is the semi-historical novel based on the Sanyasi Revolt. Neeldarpan is associated with the Indigo Revolt.",
        subtopic: 'literature',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "Who among the following travelers wrote \"Travels in Kashmir and the Punjab\"?",
        options: ["Victor Jacquemont", "William Moorcroft", "Baron Charles", "George Forster"],
        correctAnswer: 2, // (c)
        explanation: "Baron Charles wrote Travels in Kashmir and the Punjab. Victor Jacquemont wrote Letters from India.",
        subtopic: 'biographies',
        difficulty: 'Moderate'
    },
    // Set 3: Art & Culture (Paintings)
    {
        id: 8,
        question: "With reference to the 'Company School' of painting (Patna Kalam), consider the following statements:\n1. It emerged under the patronage of the East India Company to capture picturesque views of Indian trades, festivals, and costumes.\n2. It relied heavily on the use of oil paintings rather than watercolours.\n3. It completely rejected the use of perspective and shading common in European art.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a)
        explanation: "Statement 1 is Correct: Company paintings (Patna School) were created to document Indian life for British clients.\nStatement 2 is Incorrect: They primarily used watercolours, not oil.\nStatement 3 is Incorrect: They adopted linear perspective and shading (European techniques), unlike traditional flat Indian styles.",
        subtopic: 'painting',
        difficulty: 'Moderate'
    },
    {
        id: 9,
        question: "The 'Kalighat Paintings' that emerged in the 19th century in Calcutta are best described by which of the following features?",
        options: ["They were strictly religious paintings depicting only Goddess Kali.", "They were aristocratic portraits commissioned by the Zamindars.", "They were often social satires depicting the hypocrisy of the urban wealthy class.", "They were oil paintings influenced solely by Victorian styles."],
        correctAnswer: 2, // (c)
        explanation: "Kalighat paintings evolved to depict not just religious figures but also social satire, criticizing the \"Babu\" culture and the hypocrisy of the rising urban middle class in Calcutta.",
        subtopic: 'painting',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "Who among the following was the principal of the Calcutta Art School and played a vital role in the rise of the 'Bengal School of Art' alongside Abanindranath Tagore?",
        options: ["Raja Ravi Varma", "E.B. Havell", "Nandalal Bose", "Amrita Sher-Gil"],
        correctAnswer: 1, // (b)
        explanation: "E.B. Havell joined the art school in Calcutta as principal and, along with Abanindranath Tagore, led the Bengal School movement.",
        subtopic: 'painting',
        difficulty: 'Easy'
    },
    // Subtopic: Archival Materials (Central, State, Judicial, & Foreign)
    {
        id: 11,
        question: "The 'Khalsa Darbar' records, which are a significant source for the history of Punjab, cover the period of:",
        options: ["The early Sikh Gurus (1469–1606)", "The misl period only (1760s–1790s)", "The reign of Maharaja Ranjit Singh and his successors (1800–1849)", "The post-annexation British administration (1849–1947)"],
        correctAnswer: 2, // (c)
        explanation: "The Khalsa Darbar records (1800–1849) mainly cover the reign of Maharaja Ranjit Singh and his successors.",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    {
        id: 12,
        question: "Which of the following courts' proceedings, preserved in the Madras Record Office, serve as a crucial source for the judicial history of the region?",
        options: ["The Mayor's Court at Madras (established in 1726)", "The Sadar Diwani Adalat (established in 1793)", "The Federal Court of India (established in 1937)", "The Supreme Court of Calcutta"],
        correctAnswer: 0, // (a)
        explanation: "The records of the Mayor's Court at Madras, established in AD 1726, are a key source for judicial history.",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    {
        id: 13,
        question: "In the context of foreign repositories, the 'Rijksarchief', which contains records of the Dutch East India Company relevant to India, is located in:",
        options: ["Copenhagen", "The Hague", "Lisbon", "Paris"],
        correctAnswer: 1, // (b)
        explanation: "The Rijksarchief is the Dutch National Archives located in The Hague.",
        subtopic: 'archival',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The 'India Office Records', one of the most important archives for the British colonial period, are housed in:",
        options: ["The National Archives of India, New Delhi", "The Commonwealth Relations Office, London", "The British Museum, London", "The Victoria Memorial, Calcutta"],
        correctAnswer: 1, // (b)
        explanation: "The India Office Records are housed in the Commonwealth Relations Office (London) (often part of the British Library now, but traditionally cited as such in older texts).",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "Consider the following statements regarding the records of the 'Supreme Court of Bengal':\n1. The Supreme Court of Bengal was established under the Regulating Act of 1773.\n2. Its voluminous records are currently preserved in the Calcutta High Court.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2, // (c)
        explanation: "The Supreme Court of Bengal was established by the Regulating Act of 1773, and its records are in the Calcutta High Court.",
        subtopic: 'archival',
        difficulty: 'Moderate'
    },
    {
        id: 16,
        question: "The archives of the Kingdom of Lahore (1800–1849) are primarily housed in which of the following cities?",
        options: ["Amritsar", "New Delhi", "Lahore", "Chandigarh"],
        correctAnswer: 2, // (c)
        explanation: "The records of the Kingdom of Lahore are housed in the Record Office, Lahore (Pakistan).",
        subtopic: 'archival',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "The 'Danish' colonial records, which primarily relate to the settlements of Tranquebar and Serampore, are housed in:",
        options: ["Lisbon", "The Hague", "Copenhagen", "Paris"],
        correctAnswer: 2, // (c)
        explanation: "Danish records (Tranquebar/Serampore) are in Copenhagen (Rigsarkivet).",
        subtopic: 'archival',
        difficulty: 'Easy'
    },
    // Subtopic: Biographies, Memoirs & Travel Accounts
    {
        id: 18,
        question: "Who among the following is the author of the travel account \"Journey from Bengal to St. Petersburg\"?",
        options: ["William Moorcroft", "George Forster", "Victor Jacquemont", "Bishop Heber"],
        correctAnswer: 1, // (b)
        explanation: "George Forster wrote Journey from Bengal to St. Petersburg.",
        subtopic: 'biographies',
        difficulty: 'Moderate'
    },
    {
        id: 19,
        question: "The work \"Hindu Manners, Customs and Ceremonies\", which provides valuable insights into the social conditions of early 19th-century India, was written by:",
        options: ["Abbe Dubois", "James Tod", "Alexander Cunningham", "Francis Buchanan"],
        correctAnswer: 0, // (a)
        explanation: "Abbe Dubois wrote Hindu Manners, Customs and Ceremonies.",
        subtopic: 'biographies',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "Which famous traveler/missionary wrote a detailed journal covering the period 1824–1825 while serving as the Bishop of Calcutta?",
        options: ["Reginald Heber", "William Carey", "Alexander Duff", "Henry Martyn"],
        correctAnswer: 0, // (a)
        explanation: "Bishop Reginald Heber wrote the famous journal Narrative of a Journey through the Upper Provinces of India.",
        subtopic: 'biographies',
        difficulty: 'Moderate'
    },
    {
        id: 21,
        question: "Match the following authors with their works:\nA. James Tod -> 1. Annals and Antiquities of Rajasthan\nB. William Moorcroft -> 2. Travels in the Himalayan Provinces\nC. Victor Jacquemont -> 3. Letters from India\n\nSelect the correct answer using the code given below:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1", "A-1, B-3, C-2"],
        correctAnswer: 0, // (a)
        explanation: "James Tod is famous for Annals and Antiquities of Rajasthan; Moorcroft for Travels in the Himalayan Provinces; Jacquemont for Letters from India.",
        subtopic: 'biographies',
        difficulty: 'Moderate'
    },
    // Subtopic: Newspapers & Journals
    {
        id: 22,
        question: "Who among the following was the first to attempt the publication of a newspaper in India in 1776, but was forced to resign by the East India Company before it could materialize?",
        options: ["James Augustus Hicky", "William Bolts", "J.S. Buckingham", "Raja Rammohan Roy"],
        correctAnswer: 1, // (b)
        explanation: "William Bolts resigned from the Company and attempted to start a newspaper in 1776 but was deported.",
        subtopic: 'newspapers',
        difficulty: 'Moderate'
    },
    {
        id: 23,
        question: "Which of the following acts/regulations was the first to impose censorship on the Indian press?",
        options: ["The Vernacular Press Act, 1878", "The Censorship of Press Act, 1799", "The Licensing Regulations, 1823", "The Metcalfe Act, 1835"],
        correctAnswer: 1, // (b)
        explanation: "The Censorship of Press Act, 1799 (by Lord Wellesley) was the first specific regulation on the press.",
        subtopic: 'newspapers',
        difficulty: 'Moderate'
    },
    {
        id: 24,
        question: "The newspaper \"Amrita Bazar Patrika\", which played a key role in the national movement, was initially published in which language before switching to English to evade the Vernacular Press Act?",
        options: ["Hindi", "Bengali", "Marathi", "Urdu"],
        correctAnswer: 1, // (b)
        explanation: "Amrita Bazar Patrika was originally Bengali (or bilingual) and turned overnight into an English newspaper to escape the Vernacular Press Act, 1878.",
        subtopic: 'newspapers',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "The journal \"Indian Sociologist\" was published from London by which revolutionary leader?",
        options: ["Shyamji Krishna Varma", "Madam Bhikaji Cama", "V.D. Savarkar", "Lala Hardayal"],
        correctAnswer: 0, // (a)
        explanation: "Shyamji Krishna Varma started Indian Sociologist in London.",
        subtopic: 'newspapers',
        difficulty: 'Easy'
    },
    {
        id: 26,
        question: "Who was the editor of the revolutionary journal \"Bande Mataram\" published from Paris?",
        options: ["Virendranath Chattopadhyaya", "Madam Bhikaji Cama", "Ajit Singh", "Tarak Nath Das"],
        correctAnswer: 1, // (b)
        explanation: "Madam Bhikaji Cama is associated with Bande Mataram (Paris).",
        subtopic: 'newspapers',
        difficulty: 'Moderate'
    },
    // Subtopic: Creative Literature
    {
        id: 27,
        question: "The play \"Nil Darpan\", which depicted the atrocities of Indigo planters, was written by:",
        options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Dinabandhu Mitra", "Michael Madhusudan Dutt"],
        correctAnswer: 2, // (c)
        explanation: "Dinabandhu Mitra wrote Nil Darpan.",
        subtopic: 'literature',
        difficulty: 'Easy'
    },
    {
        id: 28,
        question: "Which of the following authors is associated with the collection of short stories titled \"Soz-e-Watan\", which was banned by the British government?",
        options: ["Premchand", "Mulk Raj Anand", "R.K. Narayan", "Saadat Hasan Manto"],
        correctAnswer: 0, // (a)
        explanation: "Premchand's Soz-e-Watan was banned for its patriotic fervor.",
        subtopic: 'literature',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "The Gujarati novel \"Saraswatichandra\", a classic of modern Indian literature, was written by:",
        options: ["Govardhanram Tripathi", "Narmad", "K.M. Munshi", "Pannalal Patel"],
        correctAnswer: 0, // (a)
        explanation: "Govardhanram Tripathi wrote the Gujarati classic Saraswatichandra.",
        subtopic: 'literature',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "The famous Tamil writer 'Subramania Bharati' was the editor of which of the following newspapers/journals?",
        options: ["Swadesamitran", "The Hindu", "Dinamani", "Ananda Vikatan"],
        correctAnswer: 0, // (a)
        explanation: "Subramania Bharati was the sub-editor and later associated with Swadesamitran.",
        subtopic: 'newspapers',
        difficulty: 'Moderate'
    },
    // Subtopic: Painting & Visual Arts
    {
        id: 31,
        question: "The 'Company School' of painting is also commonly known as the:",
        options: ["Murshidabad School", "Patna School/Patna Kalam", "Lucknow School", "Mysore School"],
        correctAnswer: 1, // (b)
        explanation: "The Company School is also known as the Patna School or Patna Kalam.",
        subtopic: 'painting',
        difficulty: 'Easy'
    },
    {
        id: 32,
        question: "Consider the following statements regarding the 'Bengal School of Art':\n1. It was a reaction against the 'Company School' and Western academic art.\n2. It drew inspiration from Mughal, Rajput, and Ajanta traditions.\n3. Ananda Kentish Coomaraswamy was a key figure in this movement alongside the Tagores.\n\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "The Bengal School was indeed a reaction to Western art, used Indian themes (Mughal/Ajanta), and was led by Abanindranath Tagore with support from Havell and Coomaraswamy.",
        subtopic: 'painting',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "Raja Ravi Varma, a contemporary of the Bengal School, is most famous for:",
        options: ["Reviving the miniature painting style of the Mughals.", "Using oil paints and Western techniques to depict Indian mythological themes.", "Creating abstract art devoid of human figures.", "Promoting the use of natural vegetable dyes in art."],
        correctAnswer: 1, // (b)
        explanation: "Raja Ravi Varma is distinct for using oil painting (a Western medium) to depict Indian mythological subjects.",
        subtopic: 'painting',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The term 'Picturesque' in the context of 18th-19th century colonial painting referred to:",
        options: ["Paintings that were scientifically accurate maps.", "A style that idealized the Indian landscape as wild, rugged, and untouched.", "Portraits of British officials in formal attire.", "Paintings made exclusively by Indian artists for British patrons."],
        correctAnswer: 1, // (b)
        explanation: "The 'Picturesque' style focused on the wild, rugged, and 'exotic' beauty of the Indian landscape, often seen in the works of the Daniells.",
        subtopic: 'painting',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "Who among the following British artists is known for their massive oil paintings of Indian landscapes and monuments, particularly the Daniells (Thomas and William)?",
        options: ["Portraiture", "Landscape painting (Aquatints)", "Caricature", "Abstract expressionism"],
        correctAnswer: 1, // (b)
        explanation: "Thomas and William Daniell are most famous for their Landscape paintings and Aquatints of India.",
        subtopic: 'painting',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_1_CONTENT = `
# BLOCK 1: INTRODUCTION & ARCHIVES (The Official Memory)
## 🏛️ ARCHIVAL MATERIALS (State Papers)

**Central Government:**
*   **National Archives of India (NAI):** Located in New Delhi. Custodians of Govt of India records.
    *   *Key Collection:* Public & Judicial Department records (1748 onwards).

**State Governments (Key Terms for Prelims):**
*   **Khalsa Darbar Records:** (Lahore) – Pre-1849 Punjab History (Ranjit Singh's reign).
*   **Peshwa Dafter:** (Pune) – Maratha History (Study of Anglo-Maratha relations).
*   **Rajasthan State Archives:** (Bikaner) – Huge collection of Princely State records.

**The Three Presidencies:**
*   **Bengal (Fort William):** Lost many records in 1756 (Siege of Calcutta), survived post-Plassey (1757).
*   **Madras (Fort St. George):** Oldest records (from AD 1670). Essential for Anglo-French struggle.
*   **Bombay:** Records of Surat Presidency + Bombay.

### 🗺️ MAP WORK (Mark these locations):
*   **Lisbon:** (Portuguese records).
*   **Goa:** (1530-1610 Portuguese relation with Vijayanagar).
*   **Pondicherry:** (French records).
*   **Tranquebar & Serampore:** (Danish records – moved to Copenhagen).
*   **Lahore:** (Khalsa records).

# BLOCK 2: JUDICIAL & FOREIGN RECORDS
## ⚖️ JUDICIAL RECORDS & FOREIGN REPOSITORIES

**Judicial Evolution:**
*   **Mayor's Court (1728):** Bombay (Earliest records).
*   **Supreme Court of Bengal (1774):** Established by Regulating Act 1773.
*   **Sadar Nizamat Adalat:** Records at Allahabad.

**Foreign Repositories (The European View):**
*   **India Office Records (London):** The most important collection (Court of Directors + Board of Control minutes).
*   **The Dutch:** Records in Cochin (Malabar) & Chinsura/Coromandel.
*   **The French:** Archives de la Seine (Paris).

> [!WARNING]
> **EXAMINER'S TRAP:**
> Don't confuse **Archives of the Indies** (Portuguese) with **India Office Records** (British).

# BLOCK 3: BIOGRAPHIES, TRAVELERS & NEWSPAPERS
## 🚶‍♂️ TRAVELERS & NEWSPAPERS (The Critical Eye)

**Key Travelers:**
*   **George Forster:** Traveled North India (1783).
*   **Victor Jacquemont:** Wrote on Kashmir & Ranjit Singh.
*   **Bishop Heber:** Journal of travel (1820s).
*   **Abbe Dubois:** *Hindu Manners, Customs and Ceremonies*.

**Newspapers (The "Fourth Estate"):**
*   **First Paper:** *Bengal Gazette* (1780) by James Augustus Hickey. [Nickname: "Hickey's Gazette"].
    *   *Fate:* Seized in 1782 for criticizing Hastings.
*   **Early Papers:** *Calcutta Gazette* (1784), *Madras Courier* (1788).

**Vernacular Press:**
*   **Swadeshamitram (Tamil)** – G. Subramaniya Iyer.
*   **Kesari (Marathi) & Mahratta (English)** – Tilak.
*   **Amrita Bazar Patrika (Bengali/English)** – Sisir Kumar Ghosh. [PYQ Focus]

> [!TIP]
> **🔥 PYQ ALERT (Prelims):**
> *   **Q:** Who started the first newspaper in India? -> **J.A. Hickey**.
> *   **Q:** Which paper turned from Bengali to English overnight to escape Vernacular Press Act? -> ***Amrita Bazar Patrika***.

# BLOCK 4: CREATIVE LITERATURE & PAINTINGS
## 🎨 LITERATURE & ART (The Cultural Mirror)

**The Novel:**
*   **Bankim Chandra Chatterji:**
    *   *Anandmath* (1882): Based on Sanyasi Rebellion (1763-1800). Contains song "Vande Mataram". [PYQ 2006, 2018]
    *   *Rajasimha:* Historical novel.
*   **Iswar Chandra Gupta:** Bengali poet/satirist.
*   **G.H. Deshmukh (Lokhitwadi):** Focused on social reform in Maharashtra.

**Paintings:**
*   **Company School (Patna Kalam):** Emerged as patronage shifted from Mughals to British/Company officers.
    *   *Features:* Use of watercolours, focus on "exotic" Indian life (trades, festivals), hybrid style.
    *   *Key Artists:* The Daniells (Thomas & William) – "Oriental Scenery".
*   **Modern School:**
    *   **Raja Ravi Varma:** Combined Indian mythology with Western realism (Oil painting).
    *   **Abanindranath Tagore:** Bengal School (Reaction against Western art).
    *   **Nandalal Bose:** Illustrated the Constitution.

> [!TIP]
> **🔥 PYQ ALERT (Mains/Prelims):**
> *   **Q (2018 Prelims):** With reference to the 'Sanyasi Rebellion', which novel made it famous? -> ***Anandmath***.
> *   **Q (Mains):** Discuss the features of the Patna Kalam/Company School of painting.

# BLOCK 5: ORAL TRADITION & CENSUS
## 🗣️ MISCELLANEOUS SOURCES

**Oral Tradition:** Folk songs, ballads. Important for constructing "Subaltern" history (history from below), as archives mostly represent the "Colonial/Elite" view.

**Census:**
*   **First attempt:** 1872 (Lord Mayo).
*   **First synchronized/complete census:** 1881 (Lord Rippon). [High Yield Fact]
`;
