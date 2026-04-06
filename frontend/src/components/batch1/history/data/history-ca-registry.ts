export interface HistoryCurrentAffair {
    id: string;
    era: 'Ancient' | 'Medieval' | 'Modern' | 'Art & Culture';
    chapterIds?: number[]; // Can link to multiple chapters
    date: string;
    headline: string;
    source: string;
    summary: string;
    upscAngle: string; 
    link?: string;
}

export const HISTORY_CA_REGISTRY: HistoryCurrentAffair[] = [
    // --- ANCIENT HISTORY (1-20) ---
    {
        id: "ca-anc-1",
        era: "Ancient",
        chapterIds: [6, 7],
        date: "2024-03-15",
        headline: "New Harappan Site Evidences Maritime Trade Links",
        source: "ASI Reports",
        summary: "Recent excavations at a coastal site in Gujarat revealed dockyard structures and seals matching those found in Mesopotamia.",
        upscAngle: "Focus on IVC trade networks, external links, and the significance of Lothal/Dholavira in maritime history."
    },
    {
        id: "ca-anc-2",
        era: "Ancient",
        chapterIds: [14],
        date: "2024-01-20",
        headline: "Mauryan Era Pillar Found Intact in Bihar",
        source: "The Hindu",
        summary: "A polished sandstone pillar bearing inscriptions similar to Ashokan edicts has been unearthed.",
        upscAngle: "Connecting Ashokan Dhamma, Mauryan art/architecture, and Brahmi script decipherment."
    },
    {
        id: "ca-anc-3",
        era: "Ancient",
        chapterIds: [4, 5],
        date: "2023-11-10",
        headline: "Megalithic Burial Sites Uncovered in Tamil Nadu",
        source: "Indian Express",
        summary: "Iron age implements and black-and-red ware pottery trace back to 1000 BCE overlapping with Sangam age sites.",
        upscAngle: "Understand Megalithic culture in South India and its transition to early historic periods."
    },
    {
        id: "ca-anc-4",
        era: "Ancient",
        chapterIds: [11],
        date: "2023-09-05",
        headline: "Jain Relics found near Mathura",
        source: "PTI",
        summary: "Ayagapatas (votive tablets) dating back to Kushana period detail the evolution of Jain iconography.",
        upscAngle: "Mathura School of Art, post-Mauryan developments, and Jainism popularity."
    },
    {
        id: "ca-anc-5",
        era: "Ancient",
        chapterIds: [20],
        date: "2024-02-12",
        headline: "Gupta Period Gold Coins Discovered in UP",
        source: "ASI",
        summary: "A hoard of gold Dinars featuring Samudragupta playing the Veena highlights the economic prosperity of the era.",
        upscAngle: "Understand the 'Golden Age' debate and numismatic evidence of Gupta kings' personal attributes."
    },
    { id: "ca-anc-6", era: "Ancient", chapterIds: [1], date: "2024-04-10", headline: "Pleistocene Epoch Fossils Found in Narmada Valley", source: "Science Daily", summary: "New hominid fossil evidence bridges the gap between early human migrations.", upscAngle: "Prehistoric India and evolutionary biology links." },
    { id: "ca-anc-7", era: "Ancient", chapterIds: [8], date: "2023-12-01", headline: "Rigvedic Saraswati River Mapping Update", source: "ISRO", summary: "Satellite mapping provides fresh evidence on the dried channels of the ancient Saraswati.", upscAngle: "Vedic geography and the Aryan debate." },
    { id: "ca-anc-8", era: "Ancient", chapterIds: [10], date: "2024-01-05", headline: "Buddhism Spread: New Vihara Ruins in Andhra", source: "The Hindu", summary: "Excavations reveal a major learning center from the Satavahana period.", upscAngle: "Spread of Buddhism, Mahayana evolution, and Satavahana patronage." },
    { id: "ca-anc-9", era: "Ancient", chapterIds: [18], date: "2023-10-22", headline: "Sangam Era Trade Port Identified at Keezhadi", source: "TN Archaeology", summary: "Roman coins and amphorae confirm extensive Roman trade with ancient Tamilkam.", upscAngle: "Indo-Roman trade and Sangam literature corroboration." },
    { id: "ca-anc-10", era: "Ancient", chapterIds: [26], date: "2024-03-08", headline: "Pallava Rock-Cut Architecture Conservation", source: "Ministry of Culture", summary: "Major restoration work at Mamallapuram highlights structural vulnerabilities.", upscAngle: "Dravidian architecture evolution and UNESCO heritage conservation." },
    { id: "ca-anc-11", era: "Ancient", chapterIds: [21], date: "2023-08-15", headline: "Harsha's Copper Plate Grant Decoded", source: "Epigraphy Journal", summary: "Provides fresh insights into the administrative revenue system of 7th century India.", upscAngle: "Post-Gupta administration and the role of land grants (Agrahara)." },
    { id: "ca-anc-12", era: "Ancient", chapterIds: [3], date: "2024-02-28", headline: "Chalcolithic Copper Hoard in Rajasthan", source: "ASI", summary: "Demonstrates advanced metallurgical skills of pre-iron cultures.", upscAngle: "Evolution of metallurgy and Chalcolithic settlements like Ahar/Ganeshwar." },
    { id: "ca-anc-13", era: "Ancient", chapterIds: [15], date: "2023-11-18", headline: "Indo-Greek Numismatic Discovery", source: "Indian Antiquary", summary: "Bilingual coins of Menander found in Punjab.", upscAngle: "Central Asian contacts and the synthesis of Greek/Indian cultural elements." },
    { id: "ca-anc-14", era: "Ancient", chapterIds: [22], date: "2024-01-30", headline: "Chalukyan Temple Architecture Study", source: "Deccan Herald", summary: "Aihole and Pattadakal temples show early experimentation of Vesara style.", upscAngle: "Temple architecture styles distinction (Nagara, Dravida, Vesara)." },
    { id: "ca-anc-15", era: "Ancient", chapterIds: [12], date: "2023-09-12", headline: "Mahajanapada Era Fortifications Found", source: "The Telegraph", summary: "Massive mud-brick walls in eastern UP indicate urbanization during Buddha's time.", upscAngle: "Second urbanization and the rise of Magadha." },
    { id: "ca-anc-16", era: "Ancient", chapterIds: [19], date: "2024-04-02", headline: "Vakataka Cave Paintings Restored", source: "Ajanta Conservation", summary: "Non-invasive tech reveals lost colors of Ajanta Cave 16.", upscAngle: "Vakataka patronage and classical Indian painting techniques." },
    { id: "ca-anc-17", era: "Ancient", chapterIds: [7], date: "2023-07-25", headline: "Rakhigarhi DNA Study Published", source: "Nature", summary: "Raises questions on the Aryan invasion theory by proving genetic continuity.", upscAngle: "Scientific inputs into historical debates regarding IVC decline." },
    { id: "ca-anc-18", era: "Ancient", chapterIds: [13], date: "2024-02-05", headline: "Arthashastra Translation Unveils Economic Policies", source: "History Review", summary: "A new critical edition emphasizes the role of the state in commodity pricing.", upscAngle: "Mauryan statecraft and comparison with modern economic regulations." },
    { id: "ca-anc-19", era: "Ancient", chapterIds: [25], date: "2023-10-10", headline: "Chola Bronzes Repatriated", source: "Govt of India", summary: "Stolen 10th-century Nataraja idols return from Australia.", upscAngle: "Chola art, lost-wax casting technique, and cultural heritage laws." },
    { id: "ca-anc-20", era: "Ancient", chapterIds: [9], date: "2024-03-25", headline: "Later Vedic Painted Grey Ware Found", source: "ASI", summary: "Iron tools mixed with PGW found traversing the Doab region.", upscAngle: "Material culture of the Later Vedic period and agricultural expansion." },


    // --- MEDIEVAL HISTORY (21-40) ---
    {
        id: "ca-med-1",
        era: "Medieval",
        chapterIds: [13],
        date: "2024-03-10",
        headline: "Akbar's Translation Bureau (Maktab Khana) Documents Digitized",
        source: "National Archives",
        summary: "Persian translations of the Mahabharata (Razmnama) are now available online.",
        upscAngle: "Mughal cultural synthesis, Sulh-i-Kul, and state patronage of literature."
    },
    {
        id: "ca-med-2",
        era: "Medieval",
        chapterIds: [5, 6],
        date: "2024-01-15",
        headline: "Delhi Sultanate Water Works Excavated near Siri Fort",
        source: "ASI",
        summary: "Alauddin Khalji's Hauz Khas water supply system mechanics decoded.",
        upscAngle: "Urban planning in Medieval India and the architectural contributions of the Khaljis."
    },
    {
        id: "ca-med-3",
        era: "Medieval",
        chapterIds: [9],
        date: "2023-11-20",
        headline: "Vijayanagara Advanced Irrigation Network Mapped",
        source: "The Hindu",
        summary: "Use of anicuts and canals connected to the Tungabhadra River shows sophisticated agrarian engineering.",
        upscAngle: "Economic history of Vijayanagara and the role of the state in agriculture (Amaram system)."
    },
    { id: "ca-med-4", era: "Medieval", chapterIds: [4], date: "2024-02-18", headline: "Chahamana Inscriptions Decoded", source: "Rajasthan Patrika", summary: "Sheds light on the Rajput administrative structure pre-Ghurid invasion.", upscAngle: "Feudalism debate in India and Rajput polity." },
    { id: "ca-med-5", era: "Medieval", chapterIds: [11], date: "2023-09-30", headline: "Bhakti Movement: Kabir Math Restored", source: "Ministry of Culture", summary: "Conservation of sites related to the Nirguna Bhakti saint in Varanasi.", upscAngle: "Socio-religious reform movements and the synthesis of Hindu-Muslim ideas." },
    { id: "ca-med-6", era: "Medieval", chapterIds: [14], date: "2024-04-05", headline: "Mansabdari System Ledger Found", source: "Aligarh Muslim University", summary: "Reveals the exact zat and sawar ranks during Shah Jahan's reign.", upscAngle: "Evolution of Mughal administration and the jagirdari crisis." },
    { id: "ca-med-7", era: "Medieval", chapterIds: [18], date: "2023-12-15", headline: "Maratha Navy Shipwreck Found off Konkan Coast", source: "NIO", summary: "Suggests Kanhoji Angre's fleet used advanced European-style cannons.", upscAngle: "Maratha military strategy and early resistance to European sea power." },
    { id: "ca-med-8", era: "Medieval", chapterIds: [7], date: "2024-01-22", headline: "Tughlaqabad Fort Conservation Project", source: "ASI", summary: "Focusing on the defensive architecture of Muhammad bin Tughlaq.", upscAngle: "Indo-Islamic architectural elements (batter walls, arch and dome)." },
    { id: "ca-med-9", era: "Medieval", chapterIds: [10], date: "2023-10-05", headline: "Sufi Silsilas Documentation", source: "Jamia Millia", summary: "New linguistic study on Awadhi poetry composed by Chishti saints.", upscAngle: "Sufism's impact on vernacular languages and cultural assimilation." },
    { id: "ca-med-10", era: "Medieval", chapterIds: [16], date: "2024-03-01", headline: "Aurangzeb's Farman on Temple Grants", source: "Deccan Herald", summary: "Discovered documents show continuous grants to non-Muslim shrines alongside demolitions.", upscAngle: "Nuanced understanding of Mughal religious policies beyond binary narratives." },
    { id: "ca-med-11", era: "Medieval", chapterIds: [8], date: "2023-08-20", headline: "Bahmani Kingdom Coin Hoard", source: "Gulbarga Museum", summary: "Silver tankas highlight flourishing trade with the Middle East.", upscAngle: "Economy of the Deccan Sultanates and their integration into Indian Ocean trade." },
    { id: "ca-med-12", era: "Medieval", chapterIds: [12], date: "2024-02-14", headline: "Sher Shah Suri's Sadak-e-Azam Mapped", source: "National Highways", summary: "Original alignments of the Grand Trunk Road corroborated with Kos Minars.", upscAngle: "Sur dynasty's administrative and infrastructural innovations." },
    { id: "ca-med-13", era: "Medieval", chapterIds: [2], date: "2023-11-05", headline: "Pala Bronzes Found in Bengal", source: "Kolkata Museum", summary: "Demonstrates the zenith of eastern Indian Buddhist art.", upscAngle: "Cultural contributions of Palas and their links with SE Asia." },
    { id: "ca-med-14", era: "Medieval", chapterIds: [17], date: "2024-01-10", headline: "Sikh Gurdwara Architectural Origins", source: "Punjab Heritage", summary: "Study traces the evolution from Manji system to formal Gurdwaras.", upscAngle: "Evolution of Sikhism from a spiritual movement to a political entity." },
    { id: "ca-med-15", era: "Medieval", chapterIds: [3], date: "2023-09-25", headline: "Chola Naval Expeditions Reassessed", source: "Maritime History Society", summary: "New evidence on Rajendra I's Srivijaya campaign logistics.", upscAngle: "Imperial Cholas and the concept of a 'Blue Water' navy in medieval India." },
    { id: "ca-med-16", era: "Medieval", chapterIds: [15], date: "2024-04-12", headline: "Mughal Miniature Painting Exhibition", source: "National Museum", summary: "Highlights the transition from Persian flatness to European realism under Jahangir.", upscAngle: "Evolution of Mughal Art and cultural synthesis." },
    { id: "ca-med-17", era: "Medieval", chapterIds: [19], date: "2023-12-28", headline: "Ahom Kingdom's Maidams Recommended for UNESCO", source: "Ministry of Culture", summary: "The unique burial mounds of Assam's royalty gain global attention.", upscAngle: "Ahom administration, resistance to Mughals, and cultural practices." },
    { id: "ca-med-18", era: "Medieval", chapterIds: [1], date: "2024-03-18", headline: "Tripartite Struggle Copper Plates", source: "Kanauj Antiquity", summary: "Clarifies the chronological battles between Gurjara-Pratiharas, Palas, and Rashtrakutas.", upscAngle: "Political fragmentation and the struggle for Kanauj." },
    { id: "ca-med-19", era: "Medieval", chapterIds: [20], date: "2023-10-15", headline: "Rise of Regional States: Awadh and Hyderabad", source: "Modern Indian History Journal", summary: "Documents bridging the late Mughal decline to 18th century successor states.", upscAngle: "18th Century debate: Dark Age vs Economic Prosperity." },
    { id: "ca-med-20", era: "Medieval", chapterIds: [6], date: "2024-02-02", headline: "Iqta System Variations Documented", source: "Iqra Research", summary: "How provincial governors modified the land grant system under the Lodhis.", upscAngle: "Land revenue systems and the centralization vs decentralization tug-of-war." },


    // --- MODERN HISTORY (41-60) ---
    {
        id: "ca-mod-1",
        era: "Modern",
        chapterIds: [12, 13],
        date: "2024-04-05",
        headline: "Declassification of Netaji Subhas Chandra Bose Files",
        source: "Home Ministry",
        summary: "Newly accessible documents shed light on INA's strategy and international diplomacy during WWII.",
        upscAngle: "Role of INA in the freedom struggle, differences between moderate and extremist approaches."
    },
    {
        id: "ca-mod-2",
        era: "Modern",
        chapterIds: [7],
        date: "2024-02-28",
        headline: "1857 Revolt: Subaltern Perspectives Highlighted",
        source: "Indian Historical Review",
        summary: "New research focuses on the participation of peasants and tribal communities rather than just sepoy mutineers.",
        upscAngle: "Nature of the 1857 revolt, its causes, and subaltern history."
    },
    {
        id: "ca-mod-3",
        era: "Modern",
        chapterIds: [20],
        date: "2023-11-15",
        headline: "Centenary of the Non-Cooperation Movement",
        source: "The Hindu",
        summary: "Special editorials reflect on Gandhi's mass mobilization techniques and the Khilafat synthesis.",
        upscAngle: "Gandhian phase, tools of Satyagraha, and Hindu-Muslim unity."
    },
    { id: "ca-mod-4", era: "Modern", chapterIds: [5], date: "2024-03-01", headline: "Permanent Settlement Records Digitized", source: "West Bengal Archives", summary: "Highlights the sociological impact of the Zamindari system on rural Bengal.", upscAngle: "British land revenue policies and the impoverishment of peasantry." },
    { id: "ca-mod-5", era: "Modern", chapterIds: [15], date: "2023-09-10", headline: "Socio-Religious Reforms: Raja Ram Mohan Roy", source: "Ministry of Culture", summary: "250th birth anniversary celebrations focus on his role in women's education.", upscAngle: "Indian Renaissance and the fight against orthodoxy." },
    { id: "ca-mod-6", era: "Modern", chapterIds: [25], date: "2024-01-26", headline: "Constituent Assembly Debates Re-published", source: "Lok Sabha Secretariat", summary: "Focus on the drafting of Fundamental Rights and Directive Principles.", upscAngle: "Post-independence consolidation and constitutional evolution." },
    { id: "ca-mod-7", era: "Modern", chapterIds: [11], date: "2023-12-05", headline: "Swadeshi Movement's Economic Impact", source: "Economic and Political Weekly", summary: "Data showing the rise of indigenous banking and industry during 1905-1911.", upscAngle: "Economic nationalism and the boycott strategy." },
    { id: "ca-mod-8", era: "Modern", chapterIds: [30], date: "2024-04-10", headline: "Integration of Princely States: Operation Polo", source: "Defense Ministry", summary: "75th anniversary of the integration of Hyderabad into the Indian Union.", upscAngle: "Sardar Patel's role and the challenges of post-1947 integration." },
    { id: "ca-mod-9", era: "Modern", chapterIds: [18], date: "2023-10-20", headline: "Ghadar Party Global Footprint", source: "Diaspora Studies", summary: "New evidence of Ghadar networks operating in South America.", upscAngle: "Revolutionary terrorism and the role of the Indian diaspora in the freedom struggle." },
    { id: "ca-mod-10", era: "Modern", chapterIds: [22], date: "2024-02-15", headline: "Civil Disobedience Movement: Salt March Re-enacted", source: "Gujarat Tourism", summary: "Highlights the symbolic brilliance of choosing salt as a political tool.", upscAngle: "Mass movements, women's participation, and breaking of colonial laws." },
    { id: "ca-mod-11", era: "Modern", chapterIds: [3], date: "2023-08-30", headline: "Battle of Buxar: Military Logistics Analysed", source: "Army War College", summary: "Why the combined Indian forces failed against Hector Munro.", upscAngle: "Establishment of British paramountcy and the granting of Diwani rights." },
    { id: "ca-mod-12", era: "Modern", chapterIds: [9], date: "2024-03-22", headline: "Tribal Uprisings: Santhal Rebellion", source: "Tribal Affairs Ministry", summary: "Hul Diwas recognizes the anti-colonial struggle of the Santhals.", upscAngle: "Tribal response to British forest laws and outsider (Diku) exploitation." },
    { id: "ca-mod-13", era: "Modern", chapterIds: [14], date: "2023-11-28", headline: "Formation of INC: Safety Valve Theory Debated", source: "History Congress", summary: "Modern historians reject the Hume conspiracy theory.", upscAngle: "Rise of organized political associations and Moderate ideology." },
    { id: "ca-mod-14", era: "Modern", chapterIds: [28], date: "2024-01-12", headline: "Quit India Movement Underground Networks", source: "National Archives", summary: "Role of Usha Mehta's secret radio and socialist leaders.", upscAngle: "Leaderless mass uprising and the shift towards militant nationalism." },
    { id: "ca-mod-15", era: "Modern", chapterIds: [8], date: "2023-09-15", headline: "Drain of Wealth Theory: Naoroji Honored", source: "London School of Economics", summary: "Plaque unveiled highlighting his economic critique of British rule.", upscAngle: "Economic critique of colonialism by early nationalists." },
    { id: "ca-mod-16", era: "Modern", chapterIds: [24], date: "2024-04-01", headline: "Government of India Act 1935: Blueprint of Constitution", source: "PRS Legislature", summary: "Tracing the structural borrowings of the modern Indian constitution.", upscAngle: "Constitutional developments and the transition towards provincial autonomy." },
    { id: "ca-mod-17", era: "Modern", chapterIds: [32], date: "2023-12-10", headline: "Bhoodan Movement Relevance Today", source: "Sarvodaya Trust", summary: "Vinoba Bhave's land reform alternative reconsidered.", upscAngle: "Post-independence land reforms and Gandhian socialism." },
    { id: "ca-mod-18", era: "Modern", chapterIds: [16], date: "2024-02-08", headline: "Dalit Emancipation: Ambedkar's Mahad Satyagraha", source: "Social Justice Ministry", summary: "Commemorating the fight for public water access.", upscAngle: "Lower caste movements and the making of an egalitarian constitution." },
    { id: "ca-mod-19", era: "Modern", chapterIds: [21], date: "2023-10-02", headline: "Simon Commission Boycott Re-assessed", source: "Modern History Journal", summary: "Impact of the boycott on uniting disparate Indian political factions.", upscAngle: "Constitutional struggle and the demand for Poorna Swaraj." },
    { id: "ca-mod-20", era: "Modern", chapterIds: [29], date: "2024-03-30", headline: "Mountbatten Plan and Partition Violence", source: "Partition Museum", summary: "New oral histories highlight the human cost of the boundary commission.", upscAngle: "Transfer of power, communalism, and the legacy of partition." }
];
