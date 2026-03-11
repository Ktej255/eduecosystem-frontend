import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { BookOpen, Scroll, Landmark, Flag, Globe } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const HISTORY_MODULES = [
    {
        id: "1",
        title: "Ancient India", // Indus to Guptas
        description: "From Stone Age to the Golden Age of Guptas. Focus on Art, Society & Administration.",
        icon: React.createElement(Landmark),
        color: "amber",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Medieval India", // Sultanate to Mughals
        description: "The age of Sultanates, Mughals, and Marathas. Bhakti & Sufi Movements.",
        icon: React.createElement(Scroll),
        color: "purple",
        topicRange: [16, 28] as [number, number]
    },
    {
        id: "3",
        title: "Modern India",
        description: "From Advent of Europeans to Freedom Struggle (1757 - 1947).",
        icon: React.createElement(Flag),
        color: "blue",
        topicRange: [29, 65] as [number, number]
    },
    {
        id: "4",
        title: "World History",
        description: "Enlightenment, Industrial Revolution, World Wars, and Cold War Era.",
        icon: React.createElement(Globe),
        color: "indigo",
        topicRange: [66, 80] as [number, number]
    }
];

// Placeholder Topics (to be expanded)
// Enhanced Types for History Config
const HISTORY_TOPICS = [
    // --- Ancient India (Module 1) ---
    {
        id: 1,
        title: "Prehistoric India: Stone Age",
        moduleId: "1",
        priority: "Low",
        staticFocus: "Paleolithic, Mesolithic, Neolithic sites and tools.",
        keyConcepts: ["Microliths", "Rock Shelters", "Domestication of Animals"],
        currentAffairsCount: 1,
        mainsQuestions: [
            { id: "M1Q1", question: "Discuss the significance of rock art in reconstructing the cultural life of prehistoric India.", marks: 10 }
        ]
    },
    {
        id: 2,
        title: "Indus Valley Civilization",
        moduleId: "1",
        priority: "High",
        staticFocus: "Town planning, Society, Religion, Decline theories.",
        keyConcepts: ["Urban Planning", "Great Bath", "Seals", "Bronze Dancing Girl"],
        currentAffairsCount: 2,
        mainsQuestions: [
            {
                id: "M1Q2",
                question: "The urban planning of the Indus Valley Civilization was advanced for its time. Elaborate.",
                marks: 15,
                modelAnswer: `The Indus Valley Civilization (IVC), also known as the Harappan Civilization, showcased remarkably advanced urban planning for its era (2600-1900 BCE).

**Key Features of Urban Planning:**

1. **Grid Pattern**: Cities like Mohenjo-daro and Harappa were laid out in a grid pattern with streets intersecting at right angles, indicating centralized planning.

2. **Drainage System**: Perhaps the most impressive feature was the sophisticated drainage system. Every house had drains connected to main street drains, which were covered with bricks. This was unparalleled in the ancient world.

3. **Citadel and Lower Town**: Cities were typically divided into a raised citadel (with public buildings) and a lower town (residential areas), suggesting social stratification and organized governance.

4. **Standardized Bricks**: The use of bricks of uniform size (ratio 4:2:1) across different sites indicates centralized control and standardization.

5. **Public Structures**: The Great Bath at Mohenjo-daro, granaries, and assembly halls suggest well-organized community life and possibly religious practices.

**Conclusion:**
The urban planning of the IVC reflects a sophisticated understanding of civil engineering, public health, and governance, making it one of the most organized ancient civilizations.`
            }
        ]
    },
    {
        id: 3,
        title: "Vedic Age (Early & Later)",
        moduleId: "1",
        priority: "Medium",
        staticFocus: "Vedas, Social stratification (Varna), Iron usage.",
        keyConcepts: ["Sabha & Samiti", "Ashramas", "Rituals"],
        currentAffairsCount: 0
    },
    {
        id: 4,
        title: "Jainism and Buddhism",
        moduleId: "1",
        priority: "High",
        staticFocus: "Causes of origin, Doctrines, Patronage, Spread.",
        keyConcepts: ["Nirvana", "Ahimsa", "Councils", "Stupas"],
        currentAffairsCount: 3,
        mainsQuestions: [
            { id: "M1Q3", question: "Compare and contrast the teachings of Jainism and Buddhism.", marks: 10 }
        ]
    },
    {
        id: 5,
        title: "Mauryan Empire",
        moduleId: "1",
        priority: "High",
        staticFocus: "Chandragupta, Ashoka's Dhamma, Administration, Art.",
        keyConcepts: ["Ashokan Edicts", "Centralized Administration", "Yakshini Figures"],
        currentAffairsCount: 1
    },
    {
        id: 6,
        title: "Post-Mauryan Period",
        moduleId: "1",
        priority: "Medium",
        staticFocus: "Indo-Greeks, Shungas, Satavahanas, Sangam Age.",
        keyConcepts: ["Gandhara Art", "Mathura Art", "Silk Route"],
        currentAffairsCount: 0
    },
    {
        id: 7,
        title: "Gupta Age",
        moduleId: "1",
        priority: "High",
        staticFocus: "Golden Age debate, Science, Literature, Temple Architecture.",
        keyConcepts: ["Navratnas", "Nagaram Style", "Kalidasa"],
        currentAffairsCount: 1,
        mainsQuestions: [
            { id: "M1Q4", question: "Critically evaluate the claim that the Gupta period was the 'Golden Age' of ancient India.", marks: 15 }
        ]
    },
    { id: 8, title: "Post-Gupta Period (Pushyabhutis, Maukharis)", moduleId: "1", priority: "Medium", staticFocus: "Harshavardhana, Hiuen Tsang accounts.", keyConcepts: ["Kannauj Assembly", "Nalanda"], currentAffairsCount: 0 },
    { id: 9, title: "South Indian Kingdoms (Pallavas, Chalukyas)", moduleId: "1", priority: "High", staticFocus: "Rock-cut architecture, Shore Temple, Pulakesin II.", keyConcepts: ["Vatapi", "Mamallapuram"], currentAffairsCount: 1 },
    { id: 10, title: "Ancient Indian Society & Religion", moduleId: "1", priority: "Medium", staticFocus: "Varna, Untouchability, Position of Women.", keyConcepts: ["Dharmashastras"], currentAffairsCount: 0 },
    { id: 11, title: "Ancient Science & Technology", moduleId: "1", priority: "Medium", staticFocus: "Aryabhatta, Varahamihira, Metallurgy (Iron Pillar).", keyConcepts: ["Zero", "Decimals", "Ayurveda"], currentAffairsCount: 1 },
    { id: 12, title: "Early Medieval Transition", moduleId: "1", priority: "Low", staticFocus: "Feudalism debate, Land grants.", keyConcepts: ["Agraharas"], currentAffairsCount: 0 },
    { id: 13, title: "Tripartite Struggle (Palas, Pratiharas, Rashtrakutas)", moduleId: "1", priority: "Medium", staticFocus: "Struggle for Kannauj, Cultural patronage.", keyConcepts: ["Vikramshila", "Ellora"], currentAffairsCount: 0 },
    { id: 14, title: "The Rajputs & Chahamanas", moduleId: "1", priority: "Medium", staticFocus: "Prithviraj Chauhan, Feudal structure, Rajput Valour.", keyConcepts: ["Jauhar", "Agni-Kula Theory"], currentAffairsCount: 0 },
    { id: 15, title: "The Cholas (Imperial)", moduleId: "1", priority: "High", staticFocus: "Local self-government, Naval power, Bronzes.", keyConcepts: ["Uttaramerur Inscription", "Nataraja"], currentAffairsCount: 1 },

    // --- Medieval India (Module 2) ---
    {
        id: 16,
        title: "Delhi Sultanate: Slave to Khilji",
        moduleId: "2",
        priority: "Medium",
        staticFocus: "Qutb-ud-din Aibak, Iltutmish, Alauddin Khilji's reforms.",
        keyConcepts: ["Iqta System", "Market Reforms", "Persian Literature"],
        currentAffairsCount: 0
    },
    {
        id: 17,
        title: "Delhi Sultanate: Tughlaq to Lodi",
        moduleId: "2",
        priority: "Medium",
        staticFocus: "Muhammad bin Tughlaq's experiments, Firoz Shah's canals.",
        keyConcepts: ["Token Currency", "Capital Transfer"],
        currentAffairsCount: 0
    },
    {
        id: 18,
        title: "Bhakti and Sufi Movements",
        moduleId: "2",
        priority: "High",
        staticFocus: "Saints (Kabir, Nanak, Chishti), Impact on Society.",
        keyConcepts: ["Nirguna vs Saguna", "Silsilas", "Vernacular Literature"],
        currentAffairsCount: 2,
        mainsQuestions: [
            { id: "M2Q1", question: "Assess the impact of the Bhakti movement on the social structure of medieval India.", marks: 10 }
        ]
    },
    {
        id: 19,
        title: "Mughal Empire: Babur to Akbar",
        moduleId: "2",
        priority: "High",
        staticFocus: "Babur's invasions, Akbar's Rajputs/Religious policies.",
        keyConcepts: ["Mansabdari System", "Sulh-i-kul", "Din-i-Ilahi"],
        currentAffairsCount: 1
    },
    {
        id: 20,
        title: "Mughal Empire: Jahangir to Aurangzeb",
        moduleId: "2",
        priority: "Medium",
        staticFocus: "Art & Architecture, Decline of Mughals.",
        keyConcepts: ["Pietra Dura", "Miniature Painting", "Jagirdari Crisis"],
        currentAffairsCount: 0
    },

    // --- Modern India (Module 3) ---
    {
        id: 29,
        title: "Advent of Europeans",
        moduleId: "3",
        priority: "Low",
        staticFocus: "Portuguese, Dutch, French, English rivalry.",
        keyConcepts: ["Blue Water Policy", "Battle of Plassey", "Battle of Buxar"],
        currentAffairsCount: 0
    },
    {
        id: 30,
        title: "British Expansion (1757-1857)",
        moduleId: "3",
        priority: "Medium",
        staticFocus: "Subsidiary Alliance, Doctrine of Lapse, Economic policies.",
        keyConcepts: ["Permanent Settlement", "Ryotwari", "Drain of Wealth"],
        currentAffairsCount: 1
    },
    {
        id: 46,
        title: "Revolt of 1857",
        moduleId: "3",
        priority: "High",
        staticFocus: "Causes, Leaders, Failure, Queen's Proclamation.",
        keyConcepts: ["Sepoy Mutiny", "Hindu-Muslim Unity"],
        currentAffairsCount: 0,
        mainsQuestions: [
            { id: "M4Q1", question: "Was the Revolt of 1857 a 'Sepoy Mutiny' or the 'First War of Independence'? Discuss.", marks: 15 }
        ]
    },
    {
        id: 47,
        title: "Socio-Religious Reform Movements",
        moduleId: "3",
        priority: "High",
        staticFocus: "Brahmo Samaj, Arya Samaj, Aligarh Movement.",
        keyConcepts: ["Raja Ram Mohan Roy", "Sati", "Widow Remarriage"],
        currentAffairsCount: 2,
        mainsQuestions: [
            { id: "M4Q2", question: "Highlight the role of socio-religious reform movements in the awakening of nationalism in India.", marks: 15 }
        ]
    },
    {
        id: 48,
        title: "Indian National Congress (Early Phase)",
        moduleId: "3",
        priority: "Medium",
        staticFocus: "Formation, Moderates vs Extremists, Partition of Bengal.",
        keyConcepts: ["Swadeshi Movement", "Surat Split"],
        currentAffairsCount: 0
    },
    {
        id: 49,
        title: "Gandhian Era (1915-1947)",
        moduleId: "3",
        priority: "High",
        staticFocus: "Champaran, Non-Cooperation, Civil Disobedience, Quit India.",
        keyConcepts: ["Satyagraha", "Salt March", "Poona Pact"],
        currentAffairsCount: 3,
        mainsQuestions: [
            { id: "M4Q3", question: "Analyze the significance of the Quit India Movement in the freedom struggle.", marks: 15 }
        ]
    },

    // --- World History (Module 4) ---
    {
        id: 66,
        title: "Industrial Revolution",
        moduleId: "4",
        priority: "Medium",
        staticFocus: "Causes, Spread to other countries, Impact on society.",
        keyConcepts: ["Capitalism", "Urbanization", "Factory System"],
        currentAffairsCount: 0
    }
] as any[]; // Ensuring type capability with SubjectTopic from SubjectPlanner


// Placeholder Chapters (generic mapping)
const HISTORY_CHAPTERS = HISTORY_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 15,
    slots: 2
}));

// Placeholder Schedule (3 Weeks)
const HISTORY_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 100,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11, 12],
            saturday: ["Ancient History Mock 1"],
            sunday: [1, 2, 3, 4, 5] // Revision
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [13, 14, 15],
            tuesday: [16, 17],
            wednesday: [18, 19],
            thursday: [20, 21, 22],
            friday: [23, 24],
            saturday: ["Medieval History Mock 1"],
            sunday: [13, 14, 15]
        }
    },
    {
        week: 3,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [29, 30],
            tuesday: [31, 32],
            wednesday: [33, 34],
            thursday: [35, 36],
            friday: [37, 38, 39],
            saturday: ["Modern History Mock 1"],
            sunday: [29, 30, 31]
        }
    }
];

export const HISTORY_CONFIG: SubjectConfig = {
    id: "history",
    title: "Indian History",
    subtitle: "Comprehensive coverage from Indus Valley to Independence (Strictly Prelims-Focused)",
    totalChapters: 65,
    totalParts: 4,
    modules: HISTORY_MODULES,
    topics: HISTORY_TOPICS,
    chapters: HISTORY_CHAPTERS,
    schedules: HISTORY_SCHEDULE,
    colors: {
        primary: "amber",
        heroGradient: "from-amber-700 via-orange-800 to-red-900"
    },
    basePath: "/student/batch1/history"
};
