export type YieldLevel = 'High' | 'Medium' | 'Low';

export interface ChapterTrend {
    yield: YieldLevel;
    lastSeen: string;
    focus: string;
    insight: string;
}

export const ANCIENT_TRENDS: Record<number, ChapterTrend> = {
    1: { yield: 'Low', lastSeen: '2018', focus: 'Geographical factors', insight: 'Rarely asked directly; useful for background.' },
    2: { yield: 'Medium', lastSeen: '2021', focus: 'Tool types & sites', insight: 'Focus on transition from Mesolithic to Neolithic.' },
    3: { yield: 'Medium', lastSeen: '2020', focus: 'Chalcolithic sites', insight: 'Know the regional variations and major excavation sites.' },
    4: { yield: 'High', lastSeen: '2023', focus: 'Town planning & Trade', insight: 'UPSC favorite. Focus on drainage, seals, and script.' },
    5: { yield: 'Medium', lastSeen: '2022', focus: 'Social structure', insight: 'Compare RigVedic vs Later Vedic social hierarchies.' },
    6: { yield: 'Medium', lastSeen: '2019', focus: 'Varna system', insight: 'Understand the rigidity of the later Vedic caste system.' },
    7: { yield: 'High', lastSeen: '2023', focus: 'Philosophical concepts', insight: 'Critical for Culture. Know the concepts of Maya and Atman.' },
    8: { yield: 'High', lastSeen: '2024', focus: 'Ethics & Councils', insight: 'Extremely High Yield. Memorize the 4 Buddhist Councils.' },
    9: { yield: 'High', lastSeen: '2024', focus: 'Philosophy & Tirthankaras', insight: 'Focus on Anekantavada and Syadvada concepts.' },
    10: { yield: 'Medium', lastSeen: '2021', focus: 'Rise of Magadha', insight: 'Know the geographical reasons for Magadha\'s dominance.' },
    11: { yield: 'Medium', lastSeen: '2020', focus: 'Alexander\'s impact', insight: 'Focus on the cultural exchange and Indo-Greek influence.' },
    12: { yield: 'High', lastSeen: '2022', focus: 'Mahajanapadas map', insight: 'UPSC asks map-based questions on these 16 states.' },
    13: { yield: 'Medium', lastSeen: '2017', focus: 'Persian inscriptions', insight: 'Compare Persian vs Asokan inscription styles.' },
    14: { yield: 'High', lastSeen: '2023', focus: 'Ashokan Dhamma', insight: 'Understand the secular nature of Dhamma for Mains.' },
    15: { yield: 'High', lastSeen: '2024', focus: 'Art & Architecture', insight: 'Focus on Stupas, Viharas, and Sanchi Sculpture.' },
    16: { yield: 'Medium', lastSeen: '2022', focus: 'Megasthenes\' Indika', insight: 'Know the 7 classes of society mentioned by Megasthenes.' },
    17: { yield: 'Medium', lastSeen: '2021', focus: 'Kushan coinage', insight: 'First to issue gold coins in India. Focus on Kanishka.' },
    18: { yield: 'Medium', lastSeen: '2020', focus: 'Sangam Literature', insight: 'Memorize Silappadikaram and Manimekalai authors.' },
    19: { yield: 'Medium', lastSeen: '2019', focus: 'Roman trade', insight: 'Arikamedu excavation is a repeated UPSC theme.' },
    20: { yield: 'High', lastSeen: '2023', focus: 'Golden Age arts', insight: 'Focus on Sanskrit literature (Kalidasa) and Temple art.' },
    21: { yield: 'Medium', lastSeen: '2022', focus: 'Economic decline', insight: 'Debate on whether land grants led to feudalism.' },
    22: { yield: 'Medium', lastSeen: '2021', focus: 'Religious tolerance', insight: 'Patronage to multiple faiths under Guptas.' },
    23: { yield: 'Medium', lastSeen: '2023', focus: 'Harsha\'s assemblies', insight: 'Focus on the Kanauj assembly and Hieun Tsang.' },
    24: { yield: 'High', lastSeen: '2024', focus: 'Education centers', insight: 'Nalanda, Vikramshila, and Taxila are UPSC favorites.' },
    25: { yield: 'Medium', lastSeen: '2022', focus: 'Caste proliferation', insight: 'Know how tribal assimilation led to sub-castes.' },
    26: { yield: 'High', lastSeen: '2023', focus: 'Temple architecture', insight: 'Compare Nagara, Dravida, and Vesara styles.' },
    27: { yield: 'Medium', lastSeen: '2019', focus: 'Ancient legacies', insight: 'Understand the concept of "Unity in Diversity" origins.' }
};
