
export const MEDIEVAL_PHASES = [
    {
        id: 1,
        name: "Phase 1: Early Medieval India",
        range: "Day 1 - 5",
        description: "Tripartite Struggle, Cholas, and Arab Invasions",
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
        id: 2,
        name: "Phase 2: The Delhi Sultanate",
        range: "Day 6 - 10",
        description: "Slave, Khilji, Tughlaq, Sayyid & Lodi Dynasties",
        color: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300"
    },
    {
        id: 3,
        name: "Phase 3: The Mughal Empire",
        range: "Day 11 - 15",
        description: "Babur to Aurangzeb, Administration, and Decline",
        color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
    }
];

export const MEDIEVAL_SCHEDULE = [
    {
        day: 1,
        title: "Tripartite Struggle & The Cholas",
        chapters: [1, 2],
        topics: ["Palas, Pratiharas, Rashtrakutas", "Chola Administration & Art"],
        phase: 1
    },
    {
        day: 2,
        title: "Arab Conquest & Rajput States",
        chapters: [3],
        topics: ["Mahmud of Ghazni", "Muhammad Ghori", "Rajput Clans"],
        phase: 1
    },
    {
        day: 3,
        title: "Delhi Sultanate: Slave & Khilji Dynasties",
        chapters: [4, 5],
        topics: ["Qutbuddin Aibak, Iltutmish, Balban", "Alauddin Khilji's Market Reforms"],
        phase: 2
    },
    {
        day: 4,
        title: "Delhi Sultanate: Tughlaqs",
        chapters: [6],
        topics: ["Muhammad bin Tughlaq", "Firoz Shah Tughlaq"],
        phase: 2
    },
    {
        day: 5,
        title: "Sayyid, Lodi & Vijayanagar Empire",
        chapters: [7, 8],
        topics: ["Timur's Invasion", "Krishnadevaraya", "Bahmani Kingdom"],
        phase: 2
    },
    {
        day: 6,
        title: "Bhakti & Sufi Movements",
        chapters: [9],
        topics: ["Kabir, Nanak, Mirabai", "Chishti & Suhrawardi Orders"],
        phase: 2
    },
    {
        day: 7,
        title: "Coming of Mughals: Babur & Humayun",
        chapters: [10],
        topics: ["Battle of Panipat", "Sher Shah Suri's Administration"],
        phase: 3
    },
    {
        day: 8,
        title: "The Age of Akbar",
        chapters: [11],
        topics: ["Mansabdari System", "Religious Policy (Din-i-Ilahi)", "Land Revenue"],
        phase: 3
    },
    {
        day: 9,
        title: "Jahangir & Shah Jahan",
        chapters: [12],
        topics: ["Golden Age of Architecture", "Paintings"],
        phase: 3
    },
    {
        day: 10,
        title: "Aurangzeb & Decline of Mughals",
        chapters: [13],
        topics: ["Deccan Policy", "Rise of Marathas"],
        phase: 3
    },
    {
        day: 11,
        title: "Rise of Marathas",
        chapters: [14],
        topics: ["Shivaji's Administration", "Peshwas"],
        phase: 3
    },
    {
        day: 12,
        title: "Medieval Administration & Culture",
        chapters: [15],
        topics: ["Provincial Govt", "Literature", "Scientific Developments"],
        phase: 3
    },
    {
        day: 13,
        title: "Revision: Early Medieval",
        chapters: [1, 2, 3],
        topics: ["Revision of North & South Indian Kingdoms"],
        phase: 1
    },
    {
        day: 14,
        title: "Revision: Sultanate Period",
        chapters: [4, 5, 6, 7, 8],
        topics: ["Consolidation of Sultanate"],
        phase: 2
    },
    {
        day: 15,
        title: "Revision: Mughal Empire",
        chapters: [10, 11, 12, 13],
        topics: ["Consolidation of Mughals"],
        phase: 3
    }
];

export const getMedievalDaySchedule = (day: number = 1) => {
    return MEDIEVAL_SCHEDULE.find(s => s.day === day) || MEDIEVAL_SCHEDULE[0];
};
