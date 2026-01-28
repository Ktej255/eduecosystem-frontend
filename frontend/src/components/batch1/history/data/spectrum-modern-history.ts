
export interface HistoryChapter {
    id: number;
    unit: string;
    title: string;
    subtopics?: string[];
    period?: string;
    pageCount?: number; // Approximate, TBD based on future input if needed
}

export const SPECTRUM_MODERN_HISTORY: HistoryChapter[] = [
    // Unit 1: Sources and Approaches
    {
        id: 1,
        unit: "UNIT 1",
        title: "Sources for the History of Modern India",
        subtopics: ["Archival Materials", "Biographies, Memoirs and Travel Accounts", "Newspapers and Journals", "Oral Evidence", "Creative Literature", "Painting"]
    },
    {
        id: 2,
        unit: "UNIT 1",
        title: "Major Approaches to the History of Modern India",
        subtopics: ["Colonial Approach", "Nationalist Historiography", "Marxist Historiography", "Subaltern Approach", "Communalist Approach", "Cambridge School", "Liberal and Neo-Liberal Interpretations", "Feminist Historiography"]
    },

    // Unit 2: Advent of Europeans
    {
        id: 3,
        unit: "UNIT 2",
        title: "Advent of the Europeans in India",
        subtopics: ["The Portuguese in India", "The Dutch", "The English", "The French", "The Danes", "Why the English Succeeded"]
    },
    {
        id: 4,
        unit: "UNIT 2",
        title: "India on the Eve of British Conquest",
        subtopics: ["Challenges before the Mughals", "Causes of Decline of Mughal Empire", "Rise of Regional States", "Socio-Economic Conditions"]
    },
    {
        id: 5,
        unit: "UNIT 2",
        title: "Expansion and Consolidation of British Power in India",
        subtopics: ["British Conquest of Bengal", "Mysore’s Resistance", "Anglo-Maratha Struggle", "Conquest of Sindh", "Conquest of Punjab", "Extension of British Paramountcy", "Relations with Neighbouring Countries"]
    },

    // Unit 3: Rising Resentment
    {
        id: 6,
        unit: "UNIT 3",
        title: "People’s Resistance Against British Before 1857",
        subtopics: ["Civil Uprisings", "Peasant Movements with Religious Overtones", "Tribal Revolts", "Sepoy Mutinies"]
    },
    {
        id: 7,
        unit: "UNIT 3",
        title: "The Revolt of 1857",
        subtopics: ["Simmering Discontent", "Causes", "Beginning and Spread", "Suppression", "Why the Revolt Failed", "Consequences", "Significance"]
    },

    // Unit 4: Reform Movements
    {
        id: 8,
        unit: "UNIT 4",
        title: "Socio-Religious Reform Movements: General Features",
        subtopics: ["Factors Giving Rise to Desire for Reform", "Social and Ideological Bases", "Direction of Social Reform"]
    },
    {
        id: 9,
        unit: "UNIT 4",
        title: "A General Survey of Socio–Cultural Reform Movements",
        subtopics: ["Raja Rammohan Roy & Brahmo Samaj", "Prarthana Samaj", "Young Bengal", "Arya Samaj", "Ramakrishna Mission", "Theosophical Movement", "Aligarh Movement", "Sikh Reform Movements"]
    },

    // Unit 5: The Struggle Begins
    {
        id: 10,
        unit: "UNIT 5",
        title: "Beginning of Modern Nationalism in India",
        subtopics: ["Factors in Growth", "Political Associations Before Congress"]
    },
    {
        id: 11,
        unit: "UNIT 5",
        title: "Indian National Congress: Foundation and Moderate Phase",
        subtopics: ["Foundation", "Aims and Objectives", "Contributions of Moderate Nationalists", "An Evaluation"]
    },

    // Unit 6: National Movement (1905-1918)
    {
        id: 12,
        unit: "UNIT 6",
        title: "Era of Militant Nationalism (1905–1909)",
        subtopics: ["Swadeshi and Boycott Movement", "Surat Split", "Morley-Minto Reforms"]
    },
    {
        id: 13,
        unit: "UNIT 6",
        title: "First Phase of Revolutionary Activities (1907–1917)",
        subtopics: ["Bengal", "Maharashtra", "Punjab", "Revolutionary Activities Abroad", "Decline"]
    },
    {
        id: 14,
        unit: "UNIT 6",
        title: "First World War and Nationalist Response",
        subtopics: ["Home Rule League Movement", "Lucknow Session (1916)", "Montagu’s Statement"]
    },

    // Unit 7: Era of Mass Nationalism (1919-1939)
    {
        id: 15,
        unit: "UNIT 7",
        title: "Emergence of Gandhi",
        subtopics: ["Why Nationalist Resurgence", "Montagu-Chelmsford Reforms", "Making of Gandhi", "Early Satyagrahas (Champaran, Kheda, Ahmedabad)", "Rowlatt Act & Jallianwala Bagh"]
    },
    {
        id: 16,
        unit: "UNIT 7",
        title: "Non-Cooperation Movement and Khilafat Aandolan",
        subtopics: ["Khilafat Issue", "The Movement", "Chauri Chaura & Withdrawal", "Evaluation"]
    },
    {
        id: 17,
        unit: "UNIT 7",
        title: "Emergence of Swarajists, Socialists, and New Forces",
        subtopics: ["Swarajists vs No-Changers", "Spread of Socialist Ideas", "Revolutionary Activity in 1920s (HRA, HSRA, Bengal)"]
    },
    {
        id: 18,
        unit: "UNIT 7",
        title: "Simon Commission and the Nehru Report",
        subtopics: ["Simon Commission", "Nehru Report", "Communal Responses"]
    },
    {
        id: 19,
        unit: "UNIT 7",
        title: "Civil Disobedience Movement and Round Table Conferences",
        subtopics: ["Run-up to CDM", "Dandi March", "Gandhi-Irwin Pact", "Round Table Conferences", "Communal Award & Poona Pact"]
    },
    {
        id: 20,
        unit: "UNIT 7",
        title: "Debates on Future Strategy after CDM",
        subtopics: ["First Stage Debate", "Government of India Act 1935", "Second Stage Debate"]
    },
    {
        id: 21,
        unit: "UNIT 7",
        title: "Congress Rule in Provinces",
        subtopics: ["Work under Congress Ministries", "Evaluation"]
    },

    // Unit 8: Towards Freedom and Partition (1939-1947)
    {
        id: 22,
        unit: "UNIT 8",
        title: "Nationalist Response in Wake of World War II",
        subtopics: ["Congress Crisis (Tripuri)", "Gandhi vs Bose", "August Offer", "Individual Satyagraha", "Cripps Mission"]
    },
    {
        id: 23,
        unit: "UNIT 8",
        title: "Quit India Movement, Demand for Pakistan, and INA",
        subtopics: ["Quit India Movement", "Famine of 1943", "Rajagopalachari Formula", "Wavell Plan", "INA"]
    },
    {
        id: 24,
        unit: "UNIT 8",
        title: "Post-War National Scenario",
        subtopics: ["INA Trials", "RIN Mutiny", "Congress Strategy", "Cabinet Mission", "Direct Action Day"]
    },
    {
        id: 25,
        unit: "UNIT 8",
        title: "Independence with Partition",
        subtopics: ["Attlee’s Statement", "Mountbatten Plan", "Indian Independence Act", "Why Congress Accepted Partition"]
    },

    // Unit 9: India Under British Rule
    {
        id: 26,
        unit: "UNIT 9",
        title: "Constitutional, Administrative, and Judicial Developments",
        subtopics: ["Constitutional Acts (1773-1935)", "Civil Services", "Police", "Judiciary", "Local Bodies"]
    },
    {
        id: 27,
        unit: "UNIT 9",
        title: "Survey of British Policies in India",
        subtopics: ["Administrative Policies", "Revenue Policies (Permanent, Ryotwari, Mahalwari)", "Social and Cultural Policy", "Foreign Policy"]
    },
    {
        id: 28,
        unit: "UNIT 9",
        title: "Economic Impact of British Rule in India",
        subtopics: ["Deindustrialisation", "Impoverishment of Peasantry", "Famine", "Commercialisation of Agriculture", "Drain of Wealth"]
    },
    {
        id: 29,
        unit: "UNIT 9",
        title: "Development of Indian Press",
        subtopics: ["Early Regulations", "Vernacular Press Act 1878", "Press During Wars"]
    },
    {
        id: 30,
        unit: "UNIT 9",
        title: "Development of Education",
        subtopics: ["Orientalist-Anglicist Controversy", "Wood’s Despatch", "Hunter Commission", "Sadler Commission", "Wardha Scheme"]
    },
    {
        id: 31,
        unit: "UNIT 9",
        title: "Peasant Movements 1857–1947",
        subtopics: ["Indigo Revolt", "Deccan Riots", "Eka Movement", "Mappila Revolt", "Bardoli", "Tebhaga", "Telangana"]
    },
    {
        id: 32,
        unit: "UNIT 9",
        title: "The Movement of the Working Class",
        subtopics: ["Early Efforts", "AITUC", "Meerut Conspiracy", "Trade Unionism"]
    },

    // Unit 10: Independence and After
    {
        id: 33,
        unit: "UNIT 10",
        title: "Challenges before the Newborn Nation",
        subtopics: ["Communal Riots", "Refugee Rehabilitation", "Assassination of Gandhi"]
    },
    {
        id: 34,
        unit: "UNIT 10",
        title: "The Indian States",
        subtopics: ["Integration and Merger (Patel's Role)"]
    },
    {
        id: 35,
        unit: "UNIT 10",
        title: "Making of the Constitution for India",
        subtopics: ["Constituent Assembly", "Drafting Committee"]
    },
    {
        id: 36,
        unit: "UNIT 10",
        title: "The Evolution of Nationalist Foreign Policy",
        subtopics: ["NAM", "Panchsheel"]
    },
    {
        id: 37,
        unit: "UNIT 10",
        title: "First General Elections",
        subtopics: ["Election Commission", "Results"]
    },
    {
        id: 38,
        unit: "UNIT 10",
        title: "Developments under Nehru’s Leadership (1947–64)",
        subtopics: ["Linguistic States", "Planning Commission", "Science & Tech", "Foreign Relations"]
    },
    {
        id: 39,
        unit: "UNIT 10",
        title: "After Nehru",
        subtopics: ["Shastri Years", "Indira Gandhi (Phase 1)", "Emergency", "Janata Party", "Indira Gandhi (Phase 2)", "Rajiv Gandhi", "Post-1991 Reforms", "NDA & UPA Eras"]
    }
];
