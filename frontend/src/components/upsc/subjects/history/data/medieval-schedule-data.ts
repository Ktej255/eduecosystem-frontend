
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
        chapterNames: ["Palas, Pratiharas, Rashtrakutas", "Chola Administration & Art"],
        phase: 1
    },
    {
        day: 2,
        title: "Arab Conquest & Rajput States",
        chapters: [3],
        chapterNames: ["Mahmud of Ghazni", "Muhammad Ghori", "Rajput Clans"],
        phase: 1
    },
    {
        day: 3,
        title: "Delhi Sultanate: Slave & Khilji Dynasties",
        chapters: [4, 5],
        chapterNames: ["Qutbuddin Aibak, Iltutmish, Balban", "Alauddin Khilji's Market Reforms"],
        phase: 2
    },
    {
        day: 4,
        title: "Delhi Sultanate: Tughlaqs",
        chapters: [6],
        chapterNames: ["Muhammad bin Tughlaq", "Firoz Shah Tughlaq"],
        phase: 2
    },
    {
        day: 5,
        title: "Delhi Sultanate: Sayyid & Lodi Dynasties",
        chapters: [7],
        chapterNames: ["Timur's Invasion", "Ibrahim Lodi & Battle of Panipat"],
        phase: 2
    },
    {
        day: 6,
        title: "Vijayanagara & Bahmani Kingdoms",
        chapters: [8, 9],
        chapterNames: ["Krishnadevaraya", "Bahmani Sultanate Conflicts"],
        phase: 2
    },
    {
        day: 7,
        title: "Bhakti & Sufi Movements",
        chapters: [10],
        chapterNames: ["Kabir, Guru Nanak, Mirabai", "Chishti & Suhrawardi Orders"],
        phase: 2
    },
    {
        day: 8,
        title: "Mughal Empire: Babur & Humayun",
        chapters: [11],
        chapterNames: ["First Battle of Panipat", "Battle of Chausa & Kannauj"],
        phase: 3
    },
    {
        day: 9,
        title: "Sher Shah Suri & Sur Empire",
        chapters: [12],
        chapterNames: ["Administrative Reforms", "Grand Trunk Road"],
        phase: 3
    },
    {
        day: 10,
        title: "Akbar the Great",
        chapters: [13],
        chapterNames: ["Mansabdari System", "Din-i-Ilahi", "Rajput Policy"],
        phase: 3
    },
    {
        day: 11,
        title: "Jahangir & Shah Jahan",
        chapters: [14],
        chapterNames: ["Golden Age of Architecture", "Arrival of Europeans"],
        phase: 3
    },
    {
        day: 12,
        title: "Aurangzeb & Decline of Mughals",
        chapters: [15],
        chapterNames: ["Deccan Policy", "Religious Policies"],
        phase: 3
    },
    {
        day: 13,
        title: "Maratha Empire: Shivaji Maharaj",
        chapters: [16],
        chapterNames: ["Guerrilla Warfare", "Ashtapradhan System"],
        phase: 3
    },
    {
        day: 14,
        title: "Later Mughals & Regional States",
        chapters: [17],
        chapterNames: ["Rise of Bengal, Awadh, Hyderabad"],
        phase: 3
    },
    {
        day: 15,
        title: "Advent of Europeans in India",
        chapters: [18],
        chapterNames: ["Portuguese, Dutch, French, British Rivalry"],
        phase: 3
    }
];

export const getMedievalDaySchedule = (day: number = 1) => {
    return MEDIEVAL_SCHEDULE.find(s => s.day === day) || MEDIEVAL_SCHEDULE[0];
};
