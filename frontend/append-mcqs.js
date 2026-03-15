const fs = require('fs');
const path = require('./src/components/batch1/geography/data/mcqs/ncert-mcqs.json');

const newQuestions = [
    // BOOK 1: Chapter 10
    {
        "id": "ncert-b1-c10-001",
        "question": "Which of the following statements about the Coriolis force is correct?",
        "options": [
            "It is maximum at the equator and zero at the poles.",
            "It deflects the wind to the right direction in the southern hemisphere.",
            "It deflects the wind to the right direction in the northern hemisphere.",
            "It is directly proportional to the altitude."
        ],
        "correctAnswer": 2,
        "explanation": "Coriolis force deflects the wind to the right direction in the northern hemisphere and to the left in the southern hemisphere. It is maximum at the poles and absent at the equator.",
        "module": "physical",
        "topic": "NCERT Ch 10",
        "difficulty": "medium",
        "chapter": "10",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b1-c10-002",
        "question": "Consider the following statements regarding air masses:\n1. When the air remains over a homogenous area for a sufficiently long time, it acquires the characteristics of the area.\n2. The homogenous surfaces over which air masses form are called source regions.\nWhich of the above statements is/are correct?",
        "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        "correctAnswer": 2,
        "explanation": "Both statements are correct. Air masses acquire distinct temperature and moisture characteristics from their source regions.",
        "module": "physical",
        "topic": "NCERT Ch 10",
        "difficulty": "easy",
        "chapter": "10",
        "subtopic": "Level 1 Practice",
        "question_type": "statement_based"
    },
    {
        "id": "ncert-b1-c10-003",
        "question": "Extra tropical cyclones differ from tropical cyclones in that:",
        "options": [
            "Extra tropical cyclones have a clear eye.",
            "Extra tropical cyclones can originate over both land and sea.",
            "Tropical cyclones cover a larger area.",
            "Tropical cyclones move from west to east."
        ],
        "correctAnswer": 1,
        "explanation": "Extra tropical cyclones form along fronts and can originate over both land and sea, whereas tropical cyclones only originate over warm oceans.",
        "module": "physical",
        "topic": "NCERT Ch 10",
        "difficulty": "medium",
        "chapter": "10",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    // BOOK 1: Chapter 12
    {
        "id": "ncert-b1-c12-001",
        "question": "The continental shelf is:",
        "options": [
            "The deepest part of the ocean.",
            "The extended margin of each continent occupied by relatively shallow seas and gulfs.",
            "A steep underwater mountain range.",
            "A flat featureless plain at the ocean bottom."
        ],
        "correctAnswer": 1,
        "explanation": "The continental shelf is the extended margin of each continent, occupied by shallow seas and gulfs, and is the shallowest part of the ocean.",
        "module": "physical",
        "topic": "NCERT Ch 12",
        "difficulty": "easy",
        "chapter": "12",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b1-c12-002",
        "question": "Which of the following ocean currents is a cold current?",
        "options": [
            "Gulf Stream",
            "Kuroshio Current",
            "Canary Current",
            "Agulhas Current"
        ],
        "correctAnswer": 2,
        "explanation": "The Canary Current is a cold current flowing along the western coast of North Africa. The others are warm currents.",
        "module": "physical",
        "topic": "NCERT Ch 12",
        "difficulty": "medium",
        "chapter": "12",
        "subtopic": "Level 1 Practice",
        "question_type": "factual"
    },
    {
        "id": "ncert-b1-c12-003",
        "question": "Spring tides occur when:",
        "options": [
            "The sun, the moon and the earth are in a straight line.",
            "The sun and the moon are at right angles to the earth.",
            "The moon is at its apogee.",
            "The earth is at its aphelion."
        ],
        "correctAnswer": 0,
        "explanation": "Spring tides (highest high tides) occur when the sun, the moon, and the earth are in a straight line (syzygy), combining their gravitational pulls.",
        "module": "physical",
        "topic": "NCERT Ch 12",
        "difficulty": "easy",
        "chapter": "12",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    
    // BOOK 3: Human Geography (Chapters 1-8 expected)
    {
        "id": "ncert-b3-c1-001",
        "question": "Who defines Human Geography as 'the synthetic study of relationship between human societies and earth’s surface'?",
        "options": [
            "Ellen C. Semple",
            "Friedrich Ratzel",
            "Paul Vidal de la Blache",
            "Griffith Taylor"
        ],
        "correctAnswer": 1,
        "explanation": "Friedrich Ratzel defined Human Geography as the synthetic study of relationship between human societies and earth’s surface.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 1",
        "difficulty": "hard",
        "chapter": "1",
        "subtopic": "Level 1 Practice",
        "question_type": "factual"
    },
    {
        "id": "ncert-b3-c2-001",
        "question": "Which one of the following is NOT a push factor for migration?",
        "options": [
            "Water shortage",
            "Medical/educational facilities",
            "Unemployment",
            "Epidemics"
        ],
        "correctAnswer": 1,
        "explanation": "Medical and educational facilities attract people to a destination, making them 'pull factors'. Shortages, unemployment, and epidemics push people away.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 2",
        "difficulty": "easy",
        "chapter": "2",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b3-c3-001",
        "question": "The sex ratio is defined as:",
        "options": [
            "Number of males per 1000 females",
            "Number of females per 1000 males",
            "Number of live births per 1000 women",
            "Ratio of working population to dependent population"
        ],
        "correctAnswer": 1,
        "explanation": "In India and many countries, sex ratio is defined as the number of females per 1000 males in the population.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 3",
        "difficulty": "easy",
        "chapter": "3",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b3-c4-001",
        "question": "Which of the following is NOT a pillar of Human Development?",
        "options": [
            "Equity",
            "Sustainability",
            "Productivity",
            "Capitalism"
        ],
        "correctAnswer": 3,
        "explanation": "The four pillars of human development are Equity, Sustainability, Productivity, and Empowerment.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 4",
        "difficulty": "easy",
        "chapter": "4",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b3-c5-001",
        "question": "Which of these is a characteristic of Plantation Agriculture?",
        "options": [
            "Small land holding",
            "Low capital investment",
            "Single crop specialization",
            "Reliance on family labor"
        ],
        "correctAnswer": 2,
        "explanation": "Plantation agriculture is characterized by large estates, high capital investment, scientific methods, and single crop specialization (e.g., tea, coffee, rubber).",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 5",
        "difficulty": "medium",
        "chapter": "5",
        "subtopic": "Level 1 Practice",
        "question_type": "factual"
    },
    {
        "id": "ncert-b3-c6-001",
        "question": "Secondary activities add value to natural resources by:",
        "options": [
            "Extracting them directly from nature.",
            "Providing services like banking.",
            "Transforming raw materials into valuable products.",
            "Conducting advanced research and development."
        ],
        "correctAnswer": 2,
        "explanation": "Secondary activities involve manufacturing, processing, and construction, which transform raw materials into finished, valuable products.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 6",
        "difficulty": "easy",
        "chapter": "6",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b3-c7-001",
        "question": "Tertiary activities depend entirely on:",
        "options": [
            "Heavy machinery",
            "Skill, experience and knowledge of the workers",
            "The immediate physical environment",
            "Raw material availability"
        ],
        "correctAnswer": 1,
        "explanation": "Tertiary activities are service-based (e.g., teaching, doctor, trade) and depend on the specialized skills and knowledge of the individuals providing them.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 7",
        "difficulty": "medium",
        "chapter": "7",
        "subtopic": "Level 1 Practice",
        "question_type": "conceptual"
    },
    {
        "id": "ncert-b3-c8-001",
        "question": "The Trans-Siberian Railway connects:",
        "options": [
            "St. Petersburg to Vladivostok",
            "Moscow to Beijing",
            "London to Paris",
            "New York to San Francisco"
        ],
        "correctAnswer": 0,
        "explanation": "The Trans-Siberian Railway is the longest railway system in the world, connecting St. Petersburg in western Russia to Vladivostok on the Pacific coast.",
        "module": "human_geography",
        "topic": "NCERT Book 3 Ch 8",
        "difficulty": "medium",
        "chapter": "8",
        "subtopic": "Level 1 Practice",
        "question_type": "factual"
    }
];

const filePath = './src/components/batch1/geography/data/mcqs/ncert-mcqs.json';
const existingData = require('./src/components/batch1/geography/data/mcqs/ncert-mcqs.json');
const combined = [...existingData, ...newQuestions];

fs.writeFileSync(filePath, JSON.stringify(combined, null, 4));
console.log(`Successfully added ${newQuestions.length} questions. New total: ${combined.length}`);
