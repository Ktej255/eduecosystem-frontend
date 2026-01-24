
export interface RASSession {
    type: "Deep Work" | "Quick Review" | "Test" | "Practice";
    topic: string;
    description?: string;
    durationMinutes: number;
    resourceLink?: string;
    completed?: boolean;
}

export interface RASDayPlan {
    day: number;
    date: string; // YYYY-MM-DD
    title: string; // e.g., "Raj History & Polity Basics"
    sessions: RASSession[];
    targetHours: number;
    status: "locked" | "active" | "completed" | "missed";
}

// Helper to generate dates
const startDate = new Date("2026-01-20");
const getDate = (dayOffset: number) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + dayOffset - 1); // Day 1 is offset 0
    return d.toISOString().split('T')[0];
};

export const RAS_REVISION_PLAN: RASDayPlan[] = [
    // --- PHASE 1: RAJASTHAN CORE (Days 1-20) ---
    {
        day: 1,
        date: getDate(1),
        title: "Rajasthan Geography: Physical Features",
        targetHours: 6,
        status: "active",
        sessions: [
            { type: "Deep Work", topic: "Physical Divisions of Rajasthan", description: "Western Sandy Plains, Aravalli Range, Eastern Plains, SE Plateau.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Climatic Regions", description: "Koppen's classification, Rainfall distribution.", durationMinutes: 45 },
            { type: "Quick Review", topic: "Map Work: Districts & Physical Features", description: "Locate major peaks and divisions on map.", durationMinutes: 30 },
            { type: "Practice", topic: "PYQ: Physical Geography", description: "Solve last 10 years prelims questions.", durationMinutes: 30 }
        ]
    },
    {
        day: 2,
        date: getDate(2),
        title: "Rajasthan Geography: Drainage & Lakes",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "River Systems", description: "Chambal, Banas, Luni, Mahi systems.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Lakes & Water Conservation", description: "Saline vs Freshwater lakes, Traditional water conservation.", durationMinutes: 45 },
            { type: "Practice", topic: "District-wise River Map", description: "Draw river paths through districts.", durationMinutes: 30 }
        ]
    },
    {
        day: 3,
        date: getDate(3),
        title: "Rajasthan History: Ancient Civilizations",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Major Sites", description: "Kalibangan, Ahar, Ganeshwar, Balathal, Bairath.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Rajput Dynasties Overview", description: "Timeline of major dynasties (Guhil, Pratihar, Chauhan).", durationMinutes: 45 },
            { type: "Test", topic: "Ancient Rajasthan Quiz", description: "20 Questions on civilizations.", durationMinutes: 20 }
        ]
    },
    {
        day: 4,
        date: getDate(4),
        title: "Rajasthan History: Major Dynasties I",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Mewar Dynasty", description: "Bappa Rawal to Maharana Pratap & Raj Singh.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Marwar (Rathores)", description: "Rao Jodha, Maldeo, Chandrasen.", durationMinutes: 60 }
        ]
    },
    {
        day: 5,
        date: getDate(5),
        title: "Rajasthan History: Major Dynasties II",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Amber (Kachchwaha)", description: "Man Singh, Sawai Jai Singh II.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Chauhans of Ajmer & Ranthambore", description: "Prithviraj III, Hamir Dev.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Administrative Systems", description: "Revenue & Military systems of Rajput states.", durationMinutes: 30 }
        ]
    },
    {
        day: 6,
        date: getDate(6),
        title: "Rajasthan Art & Culture: Forts & Palaces",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "UNESCO Hill Forts", description: "Chittor, Kumbhalgarh, Ranthambore, Amber, Jaisalmer, Gagron.", durationMinutes: 90 },
            { type: "Quick Review", topic: "Haveli Architecture", description: "Shekhawati frescoes & Patwon ki Haveli.", durationMinutes: 30 }
        ]
    },
    {
        day: 7,
        date: getDate(7),
        title: "Rajasthan Art & Culture: Paintings & Fairs",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Schools of Painting", description: "Mewar, Marwar, Hadoti, Dhundhar schools.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Major Fairs & Festivals", description: "Pushkar, Desert Festival, Teej, Gangaur.", durationMinutes: 60 },
            { type: "Practice", topic: "Match the Following: Paintings", description: "Artists vs Schools.", durationMinutes: 20 }
        ]
    },
    {
        day: 8,
        date: getDate(8),
        title: "Rajasthan Folk Arts & Music",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Folk Music & Instruments", description: "Langa, Manganiyar, professional singing communities.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Folk Dances & Theatre", description: "Ghoomar, Kalbelia, Khayal, Tamasha.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Famous Folk Artists", description: "Padma Shri awardees from Rajasthan.", durationMinutes: 30 }
        ]
    },
    {
        day: 9,
        date: getDate(9),
        title: "Rajasthan Religious Movements & Saints",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Folk Deities (Lok Devta)", description: "Panch-Peeer: Pabuji, Harbhu, Ramdev, Goga, Mehaji.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Sufism & Bhakti Movement", description: "Dadu Dayal, Meera Bai, Laldariya sect.", durationMinutes: 60 }
        ]
    },
    {
        day: 10,
        date: getDate(10),
        title: "Rajasthan Polity: State Executive",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Governor & CM", description: "Constitutional powers and historical context in Rajasthan.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Council of Ministers", description: "State administration structure.", durationMinutes: 45 }
        ]
    },
    {
        day: 11,
        date: getDate(11),
        title: "Rajasthan Polity: Institutions",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Rajasthan High Court & RPSC", description: "Appointments, powers, and current members.", durationMinutes: 60 },
            { type: "Deep Work", topic: "State Election & Information Commission", description: "Lokpal (Lokayukta) and Human Rights commission.", durationMinutes: 60 }
        ]
    },
    {
        day: 12,
        date: getDate(12),
        title: "Rajasthan Economy: Agriculture & Industry",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Major Crops & Irrigation", description: "Indira Gandhi Canal, solar pumps, agriculture budget.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Industrial Outlook", description: "RIICO, RFC, MSME policy 2022.", durationMinutes: 60 }
        ]
    },
    {
        day: 13,
        date: getDate(13),
        title: "Rajasthan Economy: Social Sector",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Welfare Schemes", description: "Chiranjeevi, Jan Aadhaar, Indira Rasoi.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Tourism & Handicrafts", description: "RTDC, major circuits, geographical indications.", durationMinutes: 45 }
        ]
    },
    {
        day: 14,
        date: getDate(14),
        title: "Economic Survey & Budget 2024-25",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Survey Highlights", description: "GDP, GVA, per capita income of Rajasthan.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Budget Announcements", description: "New districts, infrastructure projects.", durationMinutes: 60 }
        ]
    },
    {
        day: 15,
        date: getDate(15),
        title: "Unit Test: Rajasthan Core",
        targetHours: 4,
        status: "locked",
        sessions: [
            { type: "Test", topic: "Full Rajasthan Mock (100 Qs)", description: "Geo, Hist, Art, Polity, Econ of Rajasthan.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Weak Area Analysis", description: "Reviewing incorrect answers.", durationMinutes: 60 }
        ]
    },
    {
        day: 16,
        date: getDate(16),
        title: "Modern Rajasthan: Freedom Struggle",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Peasant & Tribal Movements", description: "Bijolia, Begun, Eki, Bhagat movements.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Political Awakening & Prajamandals", description: "Role of major leaders like Hiralal Shastri, Manikya Lal Verma.", durationMinutes: 60 }
        ]
    },
    {
        day: 17,
        date: getDate(17),
        title: "Integration of Rajasthan",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Seven Stages of Integration", description: "Matsya Union to United State of Rajasthan.", durationMinutes: 90 },
            { type: "Quick Review", topic: "History Recap", description: "Quick timeline review of all 17 days.", durationMinutes: 30 }
        ]
    },
    {
        day: 18,
        date: getDate(18),
        title: "Rajasthan Geography: Resources II",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Minerals & Mines", description: "Zinc, Lead, Copper, Marble, Granite distribution.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Livestock & Dairy", description: "Breeds, milk production, government schemes.", durationMinutes: 60 }
        ]
    },
    {
        day: 19,
        date: getDate(19),
        title: "Rajasthan Industry & Minerals",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Handicrafts & Clusters", description: "Blue pottery, Thewa art, Terracotta.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Energy Resources", description: "Solar, Wind, and Thermal power plants.", durationMinutes: 60 }
        ]
    },
    {
        day: 20,
        date: getDate(20),
        title: "Social Geography of Rajasthan",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Population & Literacy", description: "2011 Census: Sex ratio, SC/ST distribution.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Tribes of Rajasthan", description: "Meena, Bhil, Garasia, Sahariya characteristics.", durationMinutes: 45 }
        ]
    },

    // --- PHASE 2: INDIA CORE (Days 21-50) ---
    {
        day: 21,
        date: getDate(21),
        title: "Indian Polity: Constitutional Framework",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Preamble & Fundamental Rights", description: "Articles 12-35, features & amendments.", durationMinutes: 90 },
            { type: "Deep Work", topic: "DPSP & Duties", description: "Articles 36-51A.", durationMinutes: 45 },
            { type: "Test", topic: "Polity Sectional Test 1", description: "50 MCQs on Framework.", durationMinutes: 60 }
        ]
    },
    {
        day: 22,
        date: getDate(22),
        title: "Indian Polity: Parliament & Executive",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "President & Governor", description: "Powers, election, comparison.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Parliament System", description: "Lok Sabha, Rajya Sabha, Bills process.", durationMinutes: 90 }
        ]
    },
    {
        day: 23,
        date: getDate(23),
        title: "Indian History: Ancient India",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Indus Valley & Vedic Period", description: "Religious, social, and economic life.", durationMinutes: 90 },
            { type: "Quick Review", topic: "Buddhism & Jainism", description: "Philosophies, councils, and literature.", durationMinutes: 60 }
        ]
    },
    {
        day: 24,
        date: getDate(24),
        title: "Indian History: Maurya & Gupta Empire",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Mauryan Administration", description: "Ashoka's Dhamma, Art and Architecture.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Gupta Period: Golden Age", description: "Literature, Science, and Temple Architecture.", durationMinutes: 60 }
        ]
    },
    {
        day: 25,
        date: getDate(25),
        title: "Indian History: Medieval India",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Delhi Sultanate", description: "Slave to Lodi dynasties, administration.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Mughal Empire", description: "Akbar to Aurangzeb, Mansabdari system.", durationMinutes: 90 }
        ]
    },
    {
        day: 26,
        date: getDate(26),
        title: "Modern History: British Expansion",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Plassy to 1857 Revolt", description: "Economic impact of British rule.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Social-Religious Reforms", description: "Raja Ram Mohan Roy, Dayanand Saraswati.", durationMinutes: 45 }
        ]
    },
    {
        day: 27,
        date: getDate(27),
        title: "Indian National Movement I",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Moderate & Extremist Phase", description: "Partition of Bengal, Surat Split.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Revolutionary Movements", description: "HSRA, Ghadar Party.", durationMinutes: 60 }
        ]
    },
    {
        day: 28,
        date: getDate(28),
        title: "Indian National Movement II",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Gandhian Era", description: "NCM, CDM, Quit India Movement.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Independence & Partition", description: "Cabinet Mission, Mountbatten Plan.", durationMinutes: 45 }
        ]
    },
    {
        day: 29,
        date: getDate(29),
        title: "Indian Polity: Judiciary",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Supreme Court & High Courts", description: "Appointments, powers, PIL, Judicial activism.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Subordinate Courts", description: "Lok Adalats, Gram Nyayalayas.", durationMinutes: 45 }
        ]
    },
    {
        day: 30,
        date: getDate(30),
        title: "Indian Polity: Local Governance",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Panchayati Raj (73rd Act)", description: "Structure, committees (Balwant Rai, Ashok Mehta).", durationMinutes: 60 },
            { type: "Deep Work", topic: "Urban Local Bodies (74th Act)", description: "Municipalities structure and powers.", durationMinutes: 60 }
        ]
    },
    {
        day: 31,
        date: getDate(31),
        title: "Indian Polity: Constitutional Bodies",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Election Commission & UPSC", description: "Composition, functions, and independence.", durationMinutes: 60 },
            { type: "Deep Work", topic: "CAG & Finance Commission", description: "Powers and role in public finance.", durationMinutes: 60 }
        ]
    },
    {
        day: 32,
        date: getDate(32),
        title: "World Geography: Physical Features",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Continents & Oceans", description: "Major mountain ranges, rivers, and plateaus.", durationMinutes: 90 },
            { type: "Quick Review", topic: "Environmental Issues", description: "Ozone depletion, Biodiversity hotspots.", durationMinutes: 45 }
        ]
    },
    {
        day: 33,
        date: getDate(33),
        title: "World Geography: Economy & Mapping",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Agriculture Regions", description: "Rice, Wheat, Cotton belts of the world.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Industrial Regions", description: "Great Lakes, Ruhr Valley, Tokyo-Yokohama.", durationMinutes: 60 }
        ]
    },
    {
        day: 34,
        date: getDate(34),
        title: "Indian Geography: Physiography Recap",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Coastal Plains & Islands", description: "Western vs Eastern ghats, Andaman & Nicobar.", durationMinutes: 60 },
            { type: "Practice", topic: "Map Work: Major Passes", description: "Identify and mark 20 major passes.", durationMinutes: 30 }
        ]
    },
    {
        day: 35,
        date: getDate(35),
        title: "Indian Geography: Soils & Vegetation",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Soil Types of India", description: "ICAR classification, soil erosion and conservation.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Natural Vegetation", description: "Tropical evergreen, deciduous, and mangrove forests.", durationMinutes: 60 }
        ]
    },
    {
        day: 36,
        date: getDate(36),
        title: "Indian Geography: Wildlife & Agriculture",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "National Parks & Sanctuaries", description: "Biosphere reserves, Project Tiger, Project Elephant.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Major Crops of India", description: "Food crops, cash crops, and plantation agriculture.", durationMinutes: 60 }
        ]
    },
    {
        day: 37,
        date: getDate(37),
        title: "Mental Ability: Number System",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "LCM & HCF, Surds & Indices", description: "Basic concepts and practice questions.", durationMinutes: 90 },
            { type: "Practice", topic: "Simplification", description: "Calculation speed drills.", durationMinutes: 60 }
        ]
    },
    {
        day: 38,
        date: getDate(38),
        title: "Mental Ability: Percentage & Profit/Loss",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Percentage Concepts", description: "Fraction to percentage conversions.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Profit, Loss & Discount", description: "Common exam patterns.", durationMinutes: 60 }
        ]
    },
    {
        day: 39,
        date: getDate(39),
        title: "Mental Ability: Ratio & Average",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Ratio & Proportion", description: "Partnership and age problems.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Average & Mixtures", description: "Allegation method practice.", durationMinutes: 60 }
        ]
    },
    {
        day: 40,
        date: getDate(40),
        title: "Indian Geography: Physical & Climate",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Himalayas & Peninsular Plateau", description: "Major peaks, passes, and divisions.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Monsoon & Rainfall", description: "Mechanism of Indian monsoon, El Nino effects.", durationMinutes: 60 }
        ]
    },
    {
        day: 41,
        date: getDate(41),
        title: "Indian Geography: Resources",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Rivers & Drainage", description: "Himalayan vs Peninsular rivers.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Minerals & Energy", description: "Coal, Petroleum, Iron ore distribution.", durationMinutes: 60 }
        ]
    },
    {
        day: 42,
        date: getDate(42),
        title: "Indian Economy: National Income",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "GDP, GNP, NNP", description: "Concepts and measurement methods.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Inflation & Monetary Policy", description: "CPI, WPI, RBI tools (Repo, Reverse Repo).", durationMinutes: 90 }
        ]
    },
    {
        day: 43,
        date: getDate(43),
        title: "Indian Economy: Public Finance",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Fiscal Policy & Budget", description: "Revenue vs Capital expenditure, Deficits.", durationMinutes: 60 },
            { type: "Quick Review", topic: "GST & Finance Commission", description: "15th Finance Commission recommendations.", durationMinutes: 45 }
        ]
    },
    {
        day: 44,
        date: getDate(44),
        title: "Indian Economy: Banking & Market",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Banking Reforms", description: "NPA issue, IBC, Mergers.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Stock Market basics", description: "SEBI, Bull & Bear market concepts.", durationMinutes: 45 }
        ]
    },
    {
        day: 45,
        date: getDate(45),
        title: "Unit Test: Indian Core",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Test", topic: "FLT: Indian Segment", description: "History, Polity, Geo, Econ of India.", durationMinutes: 150 },
            { type: "Quick Review", topic: "Revise Mistaken Concepts", description: "High-yield topics focused review.", durationMinutes: 60 }
        ]
    },
    {
        day: 46,
        date: getDate(46),
        title: "Indian Economy: Poverty & Inequality",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Poverty Measurement", description: "Lakdawala, Tendulkar, Rangarajan committees.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Unemployment Types", description: "Structural, seasonal, disguised unemployment.", durationMinutes: 60 }
        ]
    },
    {
        day: 47,
        date: getDate(47),
        title: "Mental Ability: Time, Speed & Distance",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Basics & Relative Speed", description: "Train and boat problems.", durationMinutes: 90 },
            { type: "Practice", topic: "Time & Work", description: "Efficiency and wages problems.", durationMinutes: 60 }
        ]
    },
    {
        day: 48,
        date: getDate(48),
        title: "Reasoning: Logical Reasoning",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Syllogism & Venn Diagrams", description: "Mastering logical deductions.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Data Sufficiency", description: "Choosing relevant data for answers.", durationMinutes: 60 }
        ]
    },
    {
        day: 49,
        date: getDate(49),
        title: "Reasoning: Non-Verbal",
        targetHours: 4,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Mirror & Water Images", description: "Pattern recognition.", durationMinutes: 30 },
            { type: "Practice", topic: "Series & Classification", description: "Visual reasoning drills.", durationMinutes: 60 }
        ]
    },
    {
        day: 50,
        date: getDate(50),
        title: "Half-Way Review: Full Revision",
        targetHours: 8,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "All Rajasthan Core", description: "Super-fast browse of days 1-20 notes.", durationMinutes: 180 },
            { type: "Quick Review", topic: "All Indian Core", description: "Super-fast browse of days 21-45 notes.", durationMinutes: 180 }
        ]
    },
    // ... More Indian History, Geo, Economy here ...

    // --- PHASE 3: SCIENCE & REASONING & CURRENT AFFAIRS (Days 51-65) ---
    {
        day: 51,
        date: getDate(51),
        title: "Science: Biology Basics",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Human Body Systems", description: "Digestive, Circulatory, Nervous systems.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Diseases & Nutrition", description: "Vitamins, deficiency diseases.", durationMinutes: 45 }
        ]
    },
    {
        day: 52,
        date: getDate(52),
        title: "Reasoning: Logical Analysis",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Statement & Assumptions", description: "Critical reasoning practice.", durationMinutes: 60 },
            { type: "Practice", topic: "Coding-Decoding & Series", description: "Speed practice 50 questions.", durationMinutes: 60 }
        ]
    },
    {
        day: 53,
        date: getDate(53),
        title: "Science: Physics I",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Work, Energy & Power", description: "Units, scalar vs vector, kinetic vs potential energy.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Light & Sound", description: "Reflection, refraction, lens formulas, ultrasonic waves.", durationMinutes: 90 }
        ]
    },
    {
        day: 54,
        date: getDate(54),
        title: "Science: Physics II",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Electricity & Magnetism", description: "Ohm's law, circuits, electromagnetic induction.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Modern Physics", description: "Atoms, radioactivity, nuclear fission.", durationMinutes: 60 }
        ]
    },
    {
        day: 55,
        date: getDate(55),
        title: "Science: Chemistry I",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "States of Matter", description: "Elements, compounds, mixtures, pH scale.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Metals & Non-metals", description: "Ores, alloys, and their uses in daily life.", durationMinutes: 90 }
        ]
    },
    {
        day: 56,
        date: getDate(56),
        title: "Science: Chemistry II",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Polymers & Soap", description: "Synthetic fibers, detergents, medicines.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Corrosion & Prevention", description: "Oxidation, reduction, galvanization.", durationMinutes: 60 }
        ]
    },
    {
        day: 57,
        date: getDate(57),
        title: "Current Affairs I: National Highlights",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Major Events (Last 6 months)", description: "Supreme Court judgments, new schemes, summits.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Appointments & Awards", description: "Padma awards, major dignitary visits.", durationMinutes: 60 }
        ]
    },
    {
        day: 58,
        date: getDate(58),
        title: "Current Affairs II: International",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Global Relations", description: "G20, BRICS, UN highlights, neighborhood policy.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Global Indexes", description: "India's rank in Hunger, Happiness, Press Freedom.", durationMinutes: 60 }
        ]
    },
    {
        day: 59,
        date: getDate(59),
        title: "Current Affairs III: Sports & Technology",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Major Sports Tournaments", description: "Olympics, Asian Games, World Cups.", durationMinutes: 90 },
            { type: "Deep Work", topic: "Science & Tech News", description: "New AI models, Biotech breakthroughs, Defense deals.", durationMinutes: 90 }
        ]
    },
    {
        day: 60,
        date: getDate(60),
        title: "S&T: Space Technology",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "ISRO Missions", description: "Chandrayaan, Mangalyaan, Gaganyaan, Aditya-L1.", durationMinutes: 90 },
            { type: "Quick Review", topic: "Satellite Orbits & Launchers", description: "PSLV, GSLV, SSLV differences.", durationMinutes: 45 }
        ]
    },
    {
        day: 61,
        date: getDate(61),
        title: "S&T: Defense & Nuclear",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Missile Systems", description: "Agni, Prithvi, Akash, Brahmos.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Nuclear Program", description: "3-stage program, major power plants.", durationMinutes: 60 }
        ]
    },
    {
        day: 62,
        date: getDate(62),
        title: "S&T: Information Technology",
        targetHours: 5,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "AI, Blockchain & IoT", description: "Basics and government applications.", durationMinutes: 60 },
            { type: "Quick Review", topic: "Cyber Security", description: "CERT-In, major threats, and safety laws.", durationMinutes: 30 }
        ]
    },
    {
        day: 63,
        date: getDate(63),
        title: "S&T: Environment & Ecology",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Global Warming & Protocols", description: "Paris Agreement, COP summits.", durationMinutes: 60 },
            { type: "Deep Work", topic: "Biodiversity in Rajasthan", description: "National Parks, Sanctuary and Ramsar sites.", durationMinutes: 90 }
        ]
    },
    {
        day: 64,
        date: getDate(64),
        title: "Rajasthan Current Affairs I",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Suo-Motu & Key Policies", description: "Recent Rajasthan government bills and acts.", durationMinutes: 120 },
            { type: "Quick Review", topic: "State Appointments", description: "New CS, DGP, and commission chairpersons.", durationMinutes: 60 }
        ]
    },
    {
        day: 65,
        date: getDate(65),
        title: "Rajasthan Current Affairs II",
        targetHours: 7,
        status: "locked",
        sessions: [
            { type: "Deep Work", topic: "Awards & Honors in Rajasthan", description: "State level awards, sports achievements of residents.", durationMinutes: 90 },
            { type: "Deep Work", topic: "New Districts & Admin changes", description: "Review of 50 districts map and divisions.", durationMinutes: 90 }
        ]
    },
    {
        day: 66,
        date: getDate(66),
        title: "Quick Review: Ancient & Medieval India",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Timeline of Dynasties", description: "Maurya to Mughals key facts.", durationMinutes: 120 },
            { type: "Test", topic: "History Blitz Quiz", description: "Rapid fire 50 questions.", durationMinutes: 45 }
        ]
    },
    {
        day: 67,
        date: getDate(67),
        title: "Quick Review: Modern India",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Congress Sessions & Resolutions", description: "Key meetings from 1885 to 1947.", durationMinutes: 120 },
            { type: "Test", topic: "National Movement Quiz", description: "Focus on years and leaders.", durationMinutes: 45 }
        ]
    },
    {
        day: 68,
        date: getDate(68),
        title: "Quick Review: Geography of India",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Map Recap", description: "Peaks, rivers, and boundaries.", durationMinutes: 120 },
            { type: "Practice", topic: "Resource Distribution", description: "Quick recall of coal/iron/oil belts.", durationMinutes: 60 }
        ]
    },
    {
        day: 69,
        date: getDate(69),
        title: "Quick Review: Indian Polity",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Articles & Amendments", description: "List of top 100 important articles.", durationMinutes: 120 },
            { type: "Test", topic: "Polity Blitz Quiz", description: "Judiciary and Parliament focus.", durationMinutes: 45 }
        ]
    },

    // --- PHASE 4: FINAL SPRINT & MOCKS (Days 66-75) ---
    {
        day: 70,
        date: getDate(70),
        title: "Full Mock Test 1",
        targetHours: 8,
        status: "locked",
        sessions: [
            { type: "Test", topic: "RAS Prelims Mock 1 (Paper I)", description: "Full 3-hour simulation.", durationMinutes: 180 },
            { type: "Deep Work", topic: "Mock Analysis", description: "Analyze weak areas and error patterns.", durationMinutes: 120 }
        ]
    },
    {
        day: 71,
        date: getDate(71),
        title: "Full Mock Test 2",
        targetHours: 8,
        status: "locked",
        sessions: [
            { type: "Test", topic: "RAS Prelims Mock 2 (Paper I)", description: "Full 3-hour simulation.", durationMinutes: 180 },
            { type: "Deep Work", topic: "Mock Analysis", description: "Deep dive into time management.", durationMinutes: 120 }
        ]
    },
    {
        day: 72,
        date: getDate(72),
        title: "Final Review: Rajasthan Economy",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Eco Survey 2024-25 Data", description: "GSDP, Growth rates, Agriculture share.", durationMinutes: 120 },
            { type: "Deep Work", topic: "Current Schemes Review", description: "Eligibility and benefits of top 20 schemes.", durationMinutes: 90 }
        ]
    },
    {
        day: 73,
        date: getDate(73),
        title: "Final Review: Indian Economy",
        targetHours: 6,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Union Budget & Key Stats", description: "Revenue vs Capital, major outlays.", durationMinutes: 120 },
            { type: "Test", topic: "Economy Mixed Quiz", description: "India and Rajasthan mixed.", durationMinutes: 60 }
        ]
    },
    {
        day: 74,
        date: getDate(74),
        title: "Confidence Booster & Chill",
        targetHours: 4,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Success Mantra & Exam Tips", description: "Time management and negative marking strategies.", durationMinutes: 60 },
            { type: "Quick Review", topic: "High-Freq Terminology", description: "Science and Economy keywords.", durationMinutes: 60 }
        ]
    },
    {
        day: 75,
        date: getDate(75),
        title: "Final Relax & Review",
        targetHours: 4,
        status: "locked",
        sessions: [
            { type: "Quick Review", topic: "Rajasthan Budget & Economic Survey", description: "Key data points review.", durationMinutes: 120 },
            { type: "Quick Review", topic: "Current Affairs Highlights", description: "Last 6 months major headlines.", durationMinutes: 60 }
        ]
    }
];
