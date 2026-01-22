// Science & Technology MCQs - Practice Questions
// UPSC Prelims-style questions on Space, Defense, IT, Biotech

export interface SciTechMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const sciTechMCQs: SciTechMCQ[] = [
    {
        id: "st-mcq-01",
        question: "Which rocket is used by ISRO to launch satellites to Sun-synchronous orbit?",
        options: ["GSLV Mk II", "PSLV", "GSLV Mk III", "SSLV"],
        correctAnswer: 1,
        explanation: "PSLV (Polar Satellite Launch Vehicle) is ISRO's workhorse for launching satellites to LEO and Sun-synchronous orbits.",
        topic: "Space",
        difficulty: "easy"
    },
    {
        id: "st-mcq-02",
        question: "NavIC is India's:",
        options: [
            "Communication satellite system",
            "Regional navigation satellite system",
            "Weather satellite",
            "Remote sensing satellite"
        ],
        correctAnswer: 1,
        explanation: "NavIC (Navigation with Indian Constellation) is India's regional satellite navigation system providing GPS-like coverage over India and surrounding region.",
        topic: "Space",
        difficulty: "easy"
    },
    {
        id: "st-mcq-03",
        question: "What is the range of Agni-V missile?",
        options: [
            "1000 km",
            "2500 km",
            "3500 km",
            "5000+ km"
        ],
        correctAnswer: 3,
        explanation: "Agni-V is an intercontinental ballistic missile with range of 5,000+ km, making India a nuclear power with ICBM capability.",
        topic: "Defense",
        difficulty: "medium"
    },
    {
        id: "st-mcq-04",
        question: "BrahMos missile is jointly developed by India and:",
        options: ["USA", "France", "Russia", "Israel"],
        correctAnswer: 2,
        explanation: "BrahMos is a supersonic cruise missile jointly developed by India and Russia. It's the world's fastest cruise missile.",
        topic: "Defense",
        difficulty: "easy"
    },
    {
        id: "st-mcq-05",
        question: "CRISPR-Cas9 is used for:",
        options: [
            "Nuclear fusion",
            "Gene editing",
            "Satellite communication",
            "Quantum computing"
        ],
        correctAnswer: 1,
        explanation: "CRISPR-Cas9 is a revolutionary gene editing technology that can cut DNA at specific locations. Nobel Prize 2020.",
        topic: "Biotech",
        difficulty: "easy"
    },
    {
        id: "st-mcq-06",
        question: "India's three-stage nuclear program was conceived by:",
        options: [
            "Vikram Sarabhai",
            "Homi J. Bhabha",
            "APJ Abdul Kalam",
            "C.V. Raman"
        ],
        correctAnswer: 1,
        explanation: "Homi J. Bhabha conceived India's three-stage nuclear program to utilize India's thorium reserves.",
        topic: "Nuclear",
        difficulty: "medium"
    },
    {
        id: "st-mcq-07",
        question: "Quantum computing uses:",
        options: [
            "Bits (0 or 1)",
            "Qubits (superposition)",
            "Analog signals",
            "Optical fibers"
        ],
        correctAnswer: 1,
        explanation: "Quantum computers use qubits which can exist in superposition (0 and 1 simultaneously), enabling parallel processing.",
        topic: "IT",
        difficulty: "medium"
    },
    {
        id: "st-mcq-08",
        question: "UPI (Unified Payments Interface) was developed by:",
        options: ["RBI", "NPCI", "IRDAI", "SEBI"],
        correctAnswer: 1,
        explanation: "UPI was developed by NPCI (National Payments Corporation of India) and launched in 2016. Part of India Stack.",
        topic: "IT",
        difficulty: "easy"
    },
    {
        id: "st-mcq-09",
        question: "5G technology operates in which frequency band?",
        options: [
            "Low band only (below 1 GHz)",
            "Mid and High band (1-100 GHz)",
            "Only visible light spectrum",
            "Radio waves below 100 MHz"
        ],
        correctAnswer: 1,
        explanation: "5G uses low band (<1 GHz), mid band (1-6 GHz), and high band/mmWave (24-100 GHz) for different applications.",
        topic: "IT",
        difficulty: "medium"
    },
    {
        id: "st-mcq-10",
        question: "Tejas is India's indigenous:",
        options: [
            "Battle tank",
            "Light Combat Aircraft",
            "Submarine",
            "Aircraft carrier"
        ],
        correctAnswer: 1,
        explanation: "Tejas is India's indigenous Light Combat Aircraft (LCA) developed by HAL and ADA. A 4th generation multirole fighter.",
        topic: "Defense",
        difficulty: "easy"
    }
];
