import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { BookOpen, Scroll, Landmark, Flag } from "lucide-react";
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
        title: "Modern India: Expansion", // 1757 - 1857
        description: "European advent, British expansion, and the Revolt of 1857.",
        icon: React.createElement(Flag),
        color: "blue",
        topicRange: [29, 45] as [number, number]
    },
    {
        id: "4",
        title: "Modern India: Freedom Struggle", // 1857 - 1947
        description: "National Movement, Gandhian Era, and Independence.",
        icon: React.createElement(BookOpen),
        color: "orange",
        topicRange: [46, 65] as [number, number]
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
            { id: "M1Q2", question: "The urban planning of the Indus Valley Civilization was advanced for its time. Elaborate.", marks: 15 }
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

    // --- Modern India (Module 3 & 4) ---
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
        moduleId: "4",
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
        moduleId: "4",
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
        moduleId: "4",
        priority: "Medium",
        staticFocus: "Formation, Moderates vs Extremists, Partition of Bengal.",
        keyConcepts: ["Swadeshi Movement", "Surat Split"],
        currentAffairsCount: 0
    },
    {
        id: 49,
        title: "Gandhian Era (1915-1947)",
        moduleId: "4",
        priority: "High",
        staticFocus: "Champaran, Non-Cooperation, Civil Disobedience, Quit India.",
        keyConcepts: ["Satyagraha", "Salt March", "Poona Pact"],
        currentAffairsCount: 3,
        mainsQuestions: [
            { id: "M4Q3", question: "Analyze the significance of the Quit India Movement in the freedom struggle.", marks: 15 }
        ]
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
