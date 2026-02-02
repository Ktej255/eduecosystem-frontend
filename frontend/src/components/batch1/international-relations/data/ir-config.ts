import { SubjectConfig, WeeklyScheduleData, SubjectTopic } from "../../framework/SubjectPlanner";
import { Globe, Users, Landmark, Flag } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const IR_MODULES = [
    {
        id: "1",
        title: "India's Foreign Policy",
        description: "Principles, Neighborhood Policy, and Strategic Partnerships.",
        icon: React.createElement(Flag),
        color: "indigo",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "International Organizations",
        description: "UN, WTO, IMF, World Bank, and Regional Bodies.",
        icon: React.createElement(Landmark),
        color: "purple",
        topicRange: [16, 30] as [number, number]
    },
    {
        id: "3",
        title: "Bilateral Relations",
        description: "India's relations with major powers and neighbors.",
        icon: React.createElement(Users),
        color: "blue",
        topicRange: [31, 45] as [number, number]
    },
    {
        id: "4",
        title: "Global Issues",
        description: "Climate, Security, Terrorism, and Emerging Challenges.",
        icon: React.createElement(Globe),
        color: "teal",
        topicRange: [46, 55] as [number, number]
    }
];

// Placeholder Topics
const IR_TOPICS = ([
    { id: 1, title: "Principles of India's Foreign Policy", moduleId: "1", priority: "High", staticFocus: "Panchsheel, Strategic Autonomy, and Neighborhood First.", keyConcepts: ["Panchsheel", "Non-Alignment"] },
    { id: 2, title: "Evolution of Foreign Policy: Nehru to Present", moduleId: "1", priority: "Medium", staticFocus: "Shift from Idealism to Realism and Multi-alignment.", keyConcepts: ["Gujral Doctrine", "Look East to Act East"] },
    { id: 3, title: "Neighborhood First Policy", moduleId: "1", priority: "High", staticFocus: "Connectivity, Security, and Cultural Diplomacy with neighbors.", keyConcepts: ["Bilateralism", "SAARC vs BIMSTEC"] },
    { id: 4, title: "Sino-India Relations: Challenges & Prospects", moduleId: "1", priority: "High", staticFocus: "Border issues, Trade deficit, and String of Pearls.", keyConcepts: ["LAC", "Galwan", "CPEC"] },
    { id: 5, title: "India-Pakistan: A History of Conflict", moduleId: "1", priority: "Medium", staticFocus: "Indus Water Treaty, Terrorism, and Kashmir issue.", keyConcepts: ["Shimla Agreement", "Lahore Declaration"] },
    { id: 16, title: "United Nations: Reforms and Challenges", moduleId: "2", priority: "High", staticFocus: "UNSC expansion, Veto power, and Peacekeeping missions.", keyConcepts: ["G4 nations", "Coffee Club"] },
    { id: 17, title: "WTO: Trade Wars and Dispute Resolution", moduleId: "2", priority: "Medium", staticFocus: "Doha Development Agenda, Subsidies, and Intellectual Property.", keyConcepts: ["TRIPS", "Amber Box"] },
    { id: 18, title: "Regional Bodies: BRICS, SCO, G20", moduleId: "2", priority: "High", staticFocus: "India's presidency, Strategic importance, and Economic cooperation.", keyConcepts: ["Expansion of BRICS", "SCO Samarkand Declaration"] },
    { id: 31, title: "India-USA: The Strategic Partnership", moduleId: "3", priority: "High", staticFocus: "Defense deals, iCET, and Indo-Pacific cooperation.", keyConcepts: ["2+2 Dialogue", "QUAD", "iCET"] },
    { id: 32, title: "India-Russia: Legacy and Modern Ties", moduleId: "3", priority: "Medium", staticFocus: "Defense dependence, Energy security, and Multi-polar world.", keyConcepts: ["S-400", "BrahMos", "INSTC"] },
    { id: 46, title: "Climate Diplomacy & COP Summits", moduleId: "4", priority: "High", staticFocus: "ISA, CDRI, and Net Zero targets.", keyConcepts: ["Panchamrit", "Global Biofuel Alliance"] },
    { id: 47, title: "Global Counter-Terrorism Framework", moduleId: "4", priority: "High", staticFocus: "CCIT, FATF, and Radicalization.", keyConcepts: ["Grey List", "No Money for Terror"] }
] as const).map(t => ({
    ...t,
    currentAffairsCount: Math.floor(Math.random() * 10) + 5
} as unknown as SubjectTopic));

const IR_CHAPTERS = IR_TOPICS.map(t => ({
    chapter: Number(t.id),
    topic: t.title,
    part: t.moduleId,
    pages: 8,
    slots: 2
}));

const IR_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 20,
        totalPages: 80,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9],
            friday: [10, 11],
            saturday: ["Foreign Policy Mock 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 20,
        totalPages: 90,
        days: {
            monday: [12, 13, 14],
            tuesday: [15, 16],
            wednesday: [17, 18],
            thursday: [19, 20],
            friday: [21, 22],
            saturday: ["Intl Organizations Mock"],
            sunday: [12, 13, 14]
        }
    },
];

export const IR_CONFIG: SubjectConfig = {
    id: "international-relations",
    title: "International Relations",
    subtitle: "India's Foreign Policy and Global Governance",
    totalChapters: 55,
    totalParts: 4,
    modules: IR_MODULES,
    topics: IR_TOPICS,
    chapters: IR_CHAPTERS,
    schedules: IR_SCHEDULE,
    colors: {
        primary: "indigo",
        heroGradient: "from-indigo-700 via-purple-800 to-pink-900"
    },
    basePath: "/student/batch1/international-relations"
};
