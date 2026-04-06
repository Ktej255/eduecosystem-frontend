export interface MedievalChapter {
    id: number;
    title: string;
    phase: 1 | 2 | 3 | 4 | 5;
    priority: 'High' | 'Medium' | 'Low';
    pyqCount: number;
}

export const MEDIEVAL_CHAPTERS: MedievalChapter[] = [
    // Phase 1: Early Medieval & Regional Empires
    { id: 1,  title: "India and the World",                                          phase: 1, priority: 'Medium', pyqCount: 2 },
    { id: 2,  title: "Northern India: Age of the Three Empires",                     phase: 1, priority: 'High',   pyqCount: 5 },
    { id: 3,  title: "South India: The Chola Empire",                                phase: 1, priority: 'High',   pyqCount: 7 },
    { id: 4,  title: "Economic & Social Life, Education & Religion (800–1200)",      phase: 1, priority: 'Medium', pyqCount: 3 },
    { id: 5,  title: "The Age of Conflict: c. 1000–1200",                            phase: 1, priority: 'High',   pyqCount: 5 },
    // Phase 2: Delhi Sultanate
    { id: 6,  title: "The Delhi Sultanate–I: c. 1200–1400",                          phase: 2, priority: 'High',   pyqCount: 8 },
    { id: 7,  title: "The Delhi Sultanate–II: c. 1200–1400",                         phase: 2, priority: 'High',   pyqCount: 6 },
    { id: 8,  title: "Government & Economic/Social Life under the Delhi Sultanate",  phase: 2, priority: 'Medium', pyqCount: 4 },
    // Phase 3: Vijayanagara & Transition
    { id: 9,  title: "Age of Vijayanagara, Bahmanids & the Portuguese",             phase: 3, priority: 'High',   pyqCount: 7 },
    { id: 10, title: "Struggle for Empire in North India–I: c. 1400–1525",           phase: 3, priority: 'Medium', pyqCount: 3 },
    { id: 11, title: "Cultural Development in India: 1300–1500",                    phase: 3, priority: 'High',   pyqCount: 6 },
    // Phase 4: Mughal Empire
    { id: 12, title: "Struggle for Empire–II: Mughals & Afghans 1525–1555",         phase: 4, priority: 'High',   pyqCount: 5 },
    { id: 13, title: "Consolidation of the Mughal Empire: Age of Akbar",            phase: 4, priority: 'High',   pyqCount: 9 },
    { id: 14, title: "India in the First Half of the 17th Century",                 phase: 4, priority: 'Medium', pyqCount: 3 },
    { id: 15, title: "Climax & Crisis of the Mughal Empire: Aurangzeb & Marathas",  phase: 4, priority: 'High',   pyqCount: 8 },
    { id: 16, title: "Economic & Social Life under the Mughals",                    phase: 4, priority: 'Medium', pyqCount: 4 },
    // Phase 5: Decline
    { id: 17, title: "Decline of the Mughal Empire & the 18th Century",             phase: 5, priority: 'High',   pyqCount: 6 },
    { id: 18, title: "Religion and Culture",                                         phase: 5, priority: 'High',   pyqCount: 7 },
    { id: 19, title: "The Maratha Administration",                                   phase: 5, priority: 'Medium', pyqCount: 3 },
    { id: 20, title: "Foreign Travelers",                                            phase: 5, priority: 'Low',    pyqCount: 2 },
];
