export interface Subtopic {
    id: string;
    name: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string; // ID of the subtopic
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const ANCIENT_CHAPTER_1_SUBTOPICS: Subtopic[] = [
    { id: 'stone_age', name: 'Stone Age Cultures' },
    { id: 'ivc_sites', name: 'IVC Sites & Excavations' },
    { id: 'ivc_features', name: 'IVC Features (Town Planning)' }
];

export const ANCIENT_CHAPTER_1_MCQS: Question[] = [
    {
        id: 1,
        question: "Which among the following sites provides the earliest evidence of settled agriculture in the Indian subcontinent?",
        options: ["Mehrgarh", "Harappa", "Lothal", "Kalibangan"],
        correctAnswer: 0,
        explanation: "Mehrgarh (in Pakistan) provides the earliest evidence of settled agriculture (wheat/barley) and domestication of animals, dating back to 7000 BC.",
        subtopic: 'stone_age',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding the Harappan Civilization:\n1. The streets intersected at right angles creating a grid pattern.\n2. There was a sophisticated underground drainage system.\n3. Iron was widely used for making tools and weapons.\n\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statements 1 & 2 are correct. Statement 3 is incorrect: The Harappans did NOT know the use of Iron. It was a Bronze Age civilization.",
        subtopic: 'ivc_features',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Match the following IVC sites with their unique features:\nA. Lothal -> 1. Great Bath\nB. Kalibangan -> 2. Dockyard\nC. Mohenjodaro -> 3. Ploughed Field\nD. Dholavira -> 4. Water Harvesting System\n\nSelect the correct answer:",
        options: ["A-2, B-3, C-1, D-4", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0,
        explanation: "Lothal: Dockyard. Kalibangan: Ploughed Field/Fire Altars. Mohenjodaro: Great Bath/Granary. Dholavira: Unique Water Harnessing System & Signboard.",
        subtopic: 'ivc_sites',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The 'Pashupati Seal' found at Mohenjodaro depicts a figure surrounded by which of the following animals?",
        options: ["Lion, Elephant, Deer, Bull", "Elephant, Tiger, Rhino, Buffalo", "Horse, Cow, Lion, Tiger", "Bull, Tiger, Horse, Elephant"],
        correctAnswer: 1,
        explanation: "The Pashupati seal shows a yogi surrounded by an Elephant, Tiger, Rhino, and Buffalo (with two deer at his feet). The Lion and Horse are generally absent from IVC seals.",
        subtopic: 'ivc_features',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Bhimbetka Caves in Madhya Pradesh are famous for:",
        options: ["Ashokan Inscriptions", "Prehistoric Rock Paintings", "Gupta era Temples", "Buddhist Stupas"],
        correctAnswer: 1,
        explanation: "Bhimbetka is famous for its Paleolithic and Mesolithic rock shelters and cave paintings, depicting hunting, dancing, and daily life.",
        subtopic: 'stone_age',
        difficulty: 'Easy'
    }
];

export const ANCIENT_CHAPTER_1_CONTENT = `
# BLOCK 1: PREHISTORIC INDIA
## ⛰️ THE STONE AGE

**1. Paleolithic Age (Old Stone Age) - Upto 10,000 BC:**
*   **Tools:** Quartzite, crude hand-axes, cleavers.
*   **Lifestyle:** Hunters and Food Gatherers. No agriculture, no fire (early), no pottery.
*   **Sites:** Bhimbetka (MP) - Cave Paintings, Soan Valley (Punjab), Belan Valley (UP).

**2. Mesolithic Age (Late Stone Age) - 10,000 BC to 6,000 BC:**
*   **Tools:** Microliths (Tiny stone tools).
*   **Lifestyle:** Domestication of animals began (Adamgarh & Bagor provide earliest evidence).
*   **Climate:** Warmer climate led to flora/fauna growth.

**3. Neolithic Age (New Stone Age) - 6,000 BC to 1,000 BC:**
*   **Revolution:** Invention of **Agriculture** (Wheat/Barley).
*   **Features:** Settled life, Pottery, Polished tools.
*   **Sites:**
    *   **Mehrgarh (Baluchistan):** Earliest agricultural settlement (7000 BC).
    *   **Burzahom (Kashmir):** Pit dwelling, Dog buried with master.

# BLOCK 2: INDUS VALLEY CIVILIZATION (2600-1900 BC)
## 🧱 HARAPPAN CULTURE

**Features of Urban Planning:**
*   **Grid System:** Streets cut at right angles.
*   **Citadel & Lower Town:** Citadel for elite/public buildings, Lower town for commoners.
*   **Drainage:** Covered drains with manholes. (Unique to IVC).
*   **Bricks:** Use of burnt bricks in standard ratio 1:2:4.

**Key Sites & Findings (High Yield):**
1.  **Harappa (Ravi):** 6 Granaries, Coffin burial.
2.  **Mohenjodaro (Indus):** Great Bath, Great Granary, Bronze Dancing Girl, Pashupati Seal, Bearded Priest.
3.  **Lothal (Bhogava):** Artificial Dockyard, Rice husk, Fire altars.
4.  **Kalibangan (Ghaggar):** Ploughed field, Fire altars, Bangle factory.
5.  **Dholavira (Luni):** Three divisions of city (Citadel, Middle, Lower), Water reservoir, Stadium.
6.  **Surkotada (Gujarat):** Horse remains (Controversial/Rare).

**Decline:**
*   Aryan Invasion (Wheeler) - largely rejected now.
*   Ecological imbalance / Floods / Shifting of rivers (Most accepted).
`;
