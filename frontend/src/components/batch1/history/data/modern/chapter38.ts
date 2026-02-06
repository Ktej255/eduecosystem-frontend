export interface Subtopic {
    id: string;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_38_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Nehru's Vision of a Modern India", status: 'done' },
    { id: '2', name: "Planning & Industrialization (Mahalanobis Model)", status: 'done' },
    { id: '3', name: "Science, Technology & Educational Infrastructure", status: 'done' },
    { id: '4', name: "Social & Agrarian Reforms", status: 'done' },
    { id: '5', name: "Democratic Legacy & Political Stability", status: 'done' },
];

export const MODERN_CHAPTER_38_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Second Five-Year Plan' (1956-61) was based on which economic model?",
        options: ["Harrod-Domar Model", "P.C. Mahalanobis Model", "Gandhian Model", "Solow Model"],
        correctAnswer: 1,
        explanation: "Focused on rapid industrialization and development of heavy and basic industries.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Nehru described which of the following as the 'Temples of Modern India'?",
        options: ["Religious shrines.", "Dams and Power projects.", "Primary schools.", "Agriculture labs."],
        correctAnswer: 1,
        explanation: "Emphasizing the importance of infrastructure for a developing nation.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The first 'Indian Institute of Technology' (IIT) was established in 1951 at:",
        options: ["Bombay", "Kanpur", "Kharagpur", "Madras"],
        correctAnswer: 2,
        explanation: "IIT Kharagpur was the first of its kind in India.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'University Grants Commission' (UGC) was established in 1953 based on whose recommendations?",
        options: ["Radhakrishnan Commission", "Kothari Commission", "Hunter Commission", "Macaulay's Minute"],
        correctAnswer: 0,
        explanation: "Following the recommendations of the University Education Commission (1948–49).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Sahitya Akademi', 'Lalit Kala Akademi' and 'Sangeet Natak Akademi' were set up to promote:",
        options: ["Sports.", "Indian arts and culture.", "Agricultural research.", "Defense production."],
        correctAnswer: 1,
        explanation: "Nehru believed in nurturing the cultural soul of the nation.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Which of the following atomic research organizations was founded by Homi J. Bhabha with Nehru's support in 1954?",
        options: ["ISRO", "DRDO", "Department of Atomic Energy (DAE)", "HAL"],
        correctAnswer: 2,
        explanation: "DAE was established to manage nuclear research and energy.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Nehru’s policy of 'Socialist Pattern of Society' was adopted by Congress at which session?",
        options: ["Karachi (1931)", "Avadi (1955)", "Nagpur (1959)", "Bombay (1948)"],
        correctAnswer: 1,
        explanation: "It aimed at a society where the state controls the key sectors.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "What was the main focus of the 'First Five-Year Plan' (1951-56)?",
        options: ["Heavy Industries", "Agriculture and Irrigation", "Foreign Trade", "Nuclear Power"],
        correctAnswer: 1,
        explanation: "To address food shortages and the immediate needs of a post-partition economy.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Bhilai', 'Durgapur' and 'Rourkela' steel plants were established during which plan?",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: 1,
        explanation: "These was set up with foreign collaboration (USSR, UK, Germany) under the 2nd Plan.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "'P.C. Mahalanobis' was the founder of which institution in Calcutta?",
        options: ["Indian Statistical Institute (ISI)", "IIM Calcutta", "Saha Institute of Nuclear Physics", "Bose Institute"],
        correctAnswer: 0,
        explanation: "He was a pioneer in statistics and planning.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_38_MCQS.push(
    {
        id: 11,
        question: "In the 1950s, the 'Hindu Code Bill' was passed in four separate acts. Which of the following was NOT one of them?",
        options: ["Hindu Marriage Act", "Hindu Succession Act", "Hindu Minority and Guardianship Act", "Hindu Land Reform Act"],
        correctAnswer: 3,
        explanation: "The four acts were Marriage, Succession, Minority/Guardianship, and Adoptions/Maintenance.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "Nehru's 'Kamraj Plan' (1963) was an attempt to:",
        options: ["Expand the army.", "Ask senior ministers and CMs to resign and work for the party organization.", "Sign a peace treaty with China.", "Adopt a new constitution."],
        correctAnswer: 1,
        explanation: "To restore the importance of the party work.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Third Five-Year Plan' (1961-66) was disrupted primarily by:",
        options: ["Global economic depression.", "1962 China war and 1965 Pakistan war.", "Collapse of the Congress.", "Invention of computers."],
        correctAnswer: 1,
        explanation: "Defense spending was prioritized over development.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "Who was the 'Father of Indian Space Program' supported by Nehru?",
        options: ["Vikram Sarabhai", "Homi Bhabha", "A.P.J. Abdul Kalam", "Satish Dhawan"],
        correctAnswer: 0,
        explanation: "INCOSPAR (precursor to ISRO) was set up in 1962.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Which major dam was described by Nehru as 'The Bhakra-Nangal is something tremendous, something stupendous...'?",
        options: ["Hirakud", "Bhakra", "Tehri", "Sardar Sarovar"],
        correctAnswer: 1,
        explanation: "One of the highest gravity dams in the world.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "Nehru’s approach to 'Tribal Policy' (Panchsheel for tribals) focused on:",
        options: ["Assimilating them into mainstream culture immediately.", "Allowing them to develop along lines of their own genius and culture.", "Converting them to other religions.", "Relocating them to cities."],
        correctAnswer: 1,
        explanation: "Developed in consultation with Verrier Elwin.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 17,
        question: "The 'LIC' (Life Insurance Corporation) was formed in 1956 by:",
        options: ["International funding.", "Nationalizing 245 insurance companies.", "British grant.", "Tata group."],
        correctAnswer: 1,
        explanation: "A major step in state-led financial control.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "'Land Reforms' under Nehru primarily succeeded in:",
        options: ["Distributing all land to landless.", "Abolition of intermediaries like Zamindars and Jagirdars.", "Mechanizing all farms.", "Total collective farming."],
        correctAnswer: 1,
        explanation: "Legislation was successful in ending the Zamindari system, though tenancy and ceiling laws faced hurdles.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Imperial Bank of India' was transformed into ______ in 1955.",
        options: ["Reserve Bank of India", "State Bank of India", "Bank of Baroda", "Punjab National Bank"],
        correctAnswer: 1,
        explanation: "Following the recommendations of the All India Rural Credit Survey Committee.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Why was the 'Nagpur Resolution' (1959) of the Congress controversial?",
        options: ["It called for war.", "It advocated for 'joint cooperative farming'.", "It asked for the removal of the President.", "It proposed the end of English language."],
        correctAnswer: 1,
        explanation: "The fear of 'Soviet-style' forced farming led to the formation of the Swatantra Party.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Indo-Soviet' friendship blossomed during the mid-1950s after the visit of:",
        options: ["Stalin to India.", "Bulganin and Khrushchev to India (1955).", "Gorbachev.", "Putin."],
        correctAnswer: 1,
        explanation: "A momentous state visit that solidified economic and political ties.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Which city was chosen as the temporary capital of East Punjab before Chandigarh?",
        options: ["Amritsar", "Shimla", "Delhi", "Ludhiana"],
        correctAnswer: 1,
        explanation: "The hill station served as the capital for a few years.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Which of the following describes 'Nehruvian Democracy' best?",
        options: ["One party dictatorship.", "A lively multi-party system with high respect for parliamentary institutions and opposition (despite Congress's size).", "Appointment based rule.", "Guided democracy."],
        correctAnswer: 1,
        explanation: "Nehru took the parliament very seriously and attended regularly.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 24,
        question: "Nehru passed away in which year?",
        options: ["1962", "1964", "1966", "1952"],
        correctAnswer: 1,
        explanation: "His death on May 27, 1964, left a huge vacuum in Indian politics.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The 1960s were called the 'Dangerous Decade' by whom?",
        options: ["Selig Harrison", "J.L. Nehru", "Winston Churchill", "Rammanohar Lohia"],
        correctAnswer: 0,
        explanation: "Due to fears of internal breakdown, succession issues, and external threats.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "In the 1951-64 period, the 'Indian Science' was characterized by:",
        options: ["Complete neglect.", "Foundation of CSIR, TIFR, NCL and various laboratories.", "Importing all technology.", "Banning scientists."],
        correctAnswer: 1,
        explanation: "Nehru's 'Scientific Temper' led to large state investment in research.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Which major industrial project was built with German collaboration?",
        options: ["Bhilai Steel Plant", "Rourkela Steel Plant", "Durgapur Steel Plant", "Bokaro Steel Plant"],
        correctAnswer: 1,
        explanation: "Collaborated with Krups-Demag of West Germany.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'Community Development Programme' (CDP) launched in 1952 aimed at:",
        options: ["Urban planning.", "Rural upliftment through local cooperation and state technical help.", "Space research.", "Banking reform."],
        correctAnswer: 1,
        explanation: "A large-scale project for village development.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "What was the 'Hindu Marriage Act, 1955's most radical change?",
        options: ["Allowing child marriage.", "Abolishing polygamy and introducing divorce as a legal right.", "Banning marriage for lower castes.", "None of the above."],
        correctAnswer: 1,
        explanation: "A major step in improving the status of Hindu women.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 30,
        question: "The 'Planning Commission' was chaired by:",
        options: ["The Finance Minister.", "The Prime Minister.", "The RBI Governor.", "Common Man's representative."],
        correctAnswer: 1,
        explanation: "Nehru himself was the first chairman.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The first 'Asian Games' were hosted by India at New Delhi in:",
        options: ["1947", "1951", "1956", "1960"],
        correctAnswer: 1,
        explanation: "Reflecting India's leading role in Asian solidarity.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "Under the Nehru-Mahalanobis strategy, the 'Public Sector' was meant to occupy the:",
        options: ["Commanding heights of the economy.", "Lowest priority.", "Only defense sector.", "Agri sector."],
        correctAnswer: 0,
        explanation: "State control of resources for social growth.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "Which of the following was a member of the First Planning Commission?",
        options: ["Gulzarilal Nanda (Deputy Chairman)", "Sardar Patel", "Ambedkar", "Rajendra Prasad"],
        correctAnswer: 0,
        explanation: "Nanda played a key role in drafting the plans.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The phrase 'Scientific Temper' was coined by:",
        options: ["Albert Einstein", "Jawaharlal Nehru", "Marie Curie", "Homi Bhabha"],
        correctAnswer: 1,
        explanation: "He mentions it in 'Discovery of India'.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "India's rate of growth during the first three plans was often mockingly called:",
        options: ["The Nehru Growth Rate.", "The Hindu Rate of Growth (around 3.5%).", "The Tiger Growth.", "The Green Rate."],
        correctAnswer: 1,
        explanation: "Term coined by Prof. Raj Krishna for the modest but steady growth rate.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    }
);
