export interface MapQuestion {
    id: string;
    question: string;
    correctPointId: string;
    category: 'National Parks' | 'Ramsar Sites' | 'Minerals' | 'Rivers';
    explanation: string;
}

export const MAP_QUIZ_QUESTIONS: MapQuestion[] = [
    {
        id: 'q1',
        question: 'Identify the oldest National Park in India, formerly known as Hailey National Park.',
        correctPointId: 'corbett',
        category: 'National Parks',
        explanation: 'Jim Corbett National Park (Uttarakhand) was established in 1936 as Hailey National Park.'
    },
    {
        id: 'q2',
        question: 'Click on the location known for the world\'s largest population of One-horned Rhinos.',
        correctPointId: 'kaziranga',
        category: 'National Parks',
        explanation: 'Kaziranga National Park in Assam is a UNESCO World Heritage site and home to 2/3rds of the global one-horned rhino population.'
    },
    {
        id: 'q3',
        question: 'Identify the largest mangrove forest in the world and the only mangrove habitat for tigers.',
        correctPointId: 'sunderbans',
        category: 'National Parks',
        explanation: 'The Sunderbans in West Bengal is a massive delta and biosphere reserve famous for Royal Bengal Tigers.'
    },
    {
        id: 'q4',
        question: 'Click on the "Mineral Heartland" of India, rich in coal and iron ore deposits.',
        correctPointId: 'chota-nagpur',
        category: 'Minerals',
        explanation: 'The Chota Nagpur Plateau (Jharkhand) is a mineral-rich region essential for India\'s heavy industries.'
    },
    {
        id: 'q5',
        question: 'Identify the largest brackish water lagoon in Asia, famous for Irrawaddy Dolphins.',
        correctPointId: 'chilika',
        category: 'Ramsar Sites',
        explanation: 'Chilika Lake in Odisha was the first Indian wetland of international importance under the Ramsar Convention.'
    },
    {
        id: 'q6',
        question: 'Click on the only habitat of the Asiatic Lion in the world.',
        correctPointId: 'gir',
        category: 'National Parks',
        explanation: 'Gir National Park in Gujarat is the last refuge of the Asiatic Lion (Panthera leo leo).'
    }
];
