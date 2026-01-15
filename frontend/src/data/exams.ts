
export interface BookReference {
    id: string;
    title: string;
    author: string;
    image?: string;
    link?: string;
}

export interface SubjectModule {
    id: string;
    name: string;
    description: string;
    chapters: string[];
    recommendedBooks: BookReference[];
}

export interface ExamRequirements {
    qualification: string;
    ageLimit: string;
    attempts: string;
    nationality: string;
}

export interface ExamData {
    id: string;
    slug: string; // for url
    name: string;
    shortName: string;
    category: "Civil Services" | "Engineering" | "Medical" | "Entrance" | "Other";
    description: string;
    heroImage: string;
    requirements: ExamRequirements;
    syllabusOverview: string[];
    subjects: SubjectModule[];
    features: string[]; // Highlights like "Free Access"
    isActive: boolean;
}

export const exams: ExamData[] = [
    {
        id: "upsc-cse",
        slug: "upsc",
        name: "Union Public Service Commission - Civil Services Exam",
        shortName: "UPSC CSE",
        category: "Civil Services",
        description: "The most prestigious and competitive examination in India for recruitment to higher Civil Services of the Government of India, including the IAS, IPS, and IFS.",
        heroImage: "/images/exams/upsc-hero.jpg", // Placeholder
        isActive: true,
        features: [
            "Get a free access of the customized revision portal",
            "Comprehensive Syllabus Coverage",
            "Adaptive Learning Path",
            "AI-Powered Progress Tracking"
        ],
        requirements: {
            qualification: "Degree from a recognized University",
            ageLimit: "21-32 years (General), relaxations apply",
            attempts: "6 (General), 9 (OBC), Unlimited (SC/ST)",
            nationality: "Indian Citizen (for IAS/IPS)"
        },
        syllabusOverview: [
            "Preliminary Examination (Objective Type)",
            "Main Examination (Descriptive Type)",
            "Personality Test (Interview)"
        ],
        subjects: [
            {
                id: "history",
                name: "History",
                description: "Covers Ancient, Medieval, Modern Indian History, and Art & Culture.",
                chapters: [
                    "Ancient India: Indus Valley to Guptas",
                    "Medieval India: Delhi Sultanate to Mughals",
                    "Modern India: 1857 Revolt to Independence",
                    "Art & Culture: Architecture, Music, Dance",
                    "World History (Mains)"
                ],
                recommendedBooks: [
                    { id: "h1", title: "India's Struggle for Independence", author: "Bipan Chandra" },
                    { id: "h2", title: "History of Medieval India", author: "Satish Chandra" },
                    { id: "h3", title: "Ancient India", author: "R.S. Sharma" },
                    { id: "h4", title: "Indian Art and Culture", author: "Nitin Singhania" }
                ]
            },
            {
                id: "geography",
                name: "Geography",
                description: "Physical, Social, and Economic Geography of India and the World.",
                chapters: [
                    "Physical Geography: Geomorphology, Climatology",
                    "Indian Geography: Drainage, Resources, Agriculture",
                    "Human Geography: Demographics, Urbanization",
                    "Economic Geography: Industries, Transport"
                ],
                recommendedBooks: [
                    { id: "g1", title: "Certificate Physical and Human Geography", author: "G.C. Leong" },
                    { id: "g2", title: "Indian Geography", author: "Majid Husain" },
                    { id: "g3", title: "NCERT Class XI & XII", author: "NCERT" }
                ]
            },
            {
                id: "polity",
                name: "Polity & Governance",
                description: "Indian Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues.",
                chapters: [
                    "Constitutional Framework",
                    "System of Government",
                    "Central & State Government",
                    "Local Government",
                    "Constitutional & Non-Constitutional Bodies"
                ],
                recommendedBooks: [
                    { id: "p1", title: "Indian Polity", author: "M. Laxmikanth" },
                    { id: "p2", title: "Introduction to the Constitution of India", author: "D.D. Basu" }
                ]
            },
            {
                id: "economics",
                name: "Economy",
                description: "Economic and Social Development, Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives.",
                chapters: [
                    "Sectors of Indian Economy",
                    "Government Budgeting",
                    "Banking & Finance",
                    "External Sector & Trade",
                    "International Economic Organizations"
                ],
                recommendedBooks: [
                    { id: "e1", title: "Indian Economy", author: "Ramesh Singh" },
                    { id: "e2", title: "Economic Survey", author: "Govt of India" }
                ]
            },
            {
                id: "environment",
                name: "Environment & Ecology",
                description: "Bio-diversity, Climate Change, Environmental Pollution and Degradation, Environmental Impact Assessment.",
                chapters: [
                    "Ecology & Ecosystems",
                    "Biodiversity & Conservation",
                    "Climate Change & Conventions",
                    "Pollution: Air, Water, Noise",
                    "Acts & Policies"
                ],
                recommendedBooks: [
                    { id: "en1", title: "Environment", author: "Shankar IAS Academy" }
                ]
            },
            {
                id: "csat",
                name: "CSAT (Paper II)",
                description: "Comprehension, Interpersonal skills, Logical reasoning, Decision making, General mental ability.",
                chapters: [
                    "Reading Comprehension",
                    "Interpersonal Skills",
                    "Logical Reasoning & Analytical Ability",
                    "Decision Making & Problem Solving",
                    "General Mental Ability",
                    "Basic Numeracy"
                ],
                recommendedBooks: [
                    { id: "c1", title: "Analytical Reasoning", author: "M.K. Pandey" },
                    { id: "c2", title: "Quantitative Aptitude", author: "R.S. Aggarwal" }
                ]
            }
        ]
    },
    // Placeholders for other categories to show in the list
    {
        id: "neet",
        slug: "neet",
        name: "National Eligibility cum Entrance Test",
        shortName: "NEET",
        category: "Medical",
        description: "Entrance examination for students who wish to study undergraduate medical courses and dental courses in government or private medical colleges.",
        heroImage: "/images/exams/neet-hero.jpg",
        isActive: false, // Not focus yet
        features: ["Free Revision Access"],
        requirements: { qualification: "10+2 PCB", ageLimit: "Min 17", attempts: "N/A", nationality: "Indian/OCI" },
        syllabusOverview: [],
        subjects: []
    },
    {
        id: "jee-main",
        slug: "jee-main",
        name: "Joint Entrance Examination - Main",
        shortName: "JEE Main",
        category: "Engineering",
        description: "Computer-based test for admission to various technical undergraduate programs in engineering, architecture, and planning.",
        heroImage: "/images/exams/jee-hero.jpg",
        isActive: false,
        features: ["Free Revision Access"],
        requirements: { qualification: "10+2 PCM", ageLimit: "N/A", attempts: "3 consecutive years", nationality: "Indian" },
        syllabusOverview: [],
        subjects: []
    }
];

export const examCategories = [
    "All",
    "Civil Services",
    "Engineering",
    "Medical",
    "Entrance",
    "Other"
];
