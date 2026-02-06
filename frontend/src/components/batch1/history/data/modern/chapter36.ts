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

export const MODERN_CHAPTER_36_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Foundations of Indian Foreign Policy", status: 'done' },
    { id: '2', name: "Panchsheel & Non-Alignment (NAM)", status: 'done' },
    { id: '3', name: "Bandung Conference & Afro-Asian Unity", status: 'done' },
    { id: '4', name: "India-China Relations (1947-1962)", status: 'done' },
    { id: '5', name: "India-Pakistan Relations & Kashmir Issue", status: 'done' },
];

export const MODERN_CHAPTER_36_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Panchsheel Agreement' was signed in 1954 between India and:",
        options: ["Pakistan", "China", "United States", "USSR"],
        correctAnswer: 1,
        explanation: "Signed by Nehru and Zhou Enlai; it outlined five principles of peaceful coexistence.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Which of the following is NOT one of the 'Panchsheel' principles?",
        options: ["Mutual respect for territorial integrity.", "Mutual non-aggression.", "Mutual non-interference.", "Mutual defense alliance."],
        correctAnswer: 3,
        explanation: "India avoided military alliances as part of its non-aligned policy.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Bandung Conference' (1955) was a precursor to which organization?",
        options: ["SAARC", "ASEAN", "Non-Aligned Movement (NAM)", "United Nations"],
        correctAnswer: 2,
        explanation: "The 29-nation Afro-Asian conference laid the groundwork for NAM.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The first NAM Summit was held in 1961 at:",
        options: ["New Delhi", "Cairo", "Belgrade", "Jakarta"],
        correctAnswer: 2,
        explanation: "Held in Belgrade, Yugoslavia.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Who were the five founding fathers of the Non-Aligned Movement?",
        options: ["Nehru, Tito, Nasser, Sukarno, Nkrumah", "Gandhi, Patel, Nehru, Bose, Azad", "Kennedy, Khrushchev, Nehru, Churchill, Mao", "None of the above"],
        correctAnswer: 0,
        explanation: "India, Yugoslavia, Egypt, Indonesia, and Ghana.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The main objective of 'Non-Alignment' was:",
        options: ["Remaining neutral during any war.", "Refusing to join either of the two Cold War power blocs (USA/USSR).", "Isolating India from world affairs.", "Joining the Commonwealth."],
        correctAnswer: 1,
        explanation: "It was an active policy of independence in foreign affairs.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 7,
        question: "India recognized the 'People's Republic of China' in 1950. India was:",
        options: ["The first non-communist country to do so.", "The last country to do so.", "Forced by the USSR.", "Regretting it immediately."],
        correctAnswer: 0,
        explanation: "India was among the first to recognize the new regime in Beijing.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Tibetan Uprising' of 1959 and India's asylum to ______ worsened India-China ties.",
        options: ["Mao Zedong", "The Dalai Lama", "Chiang Kai-shek", "Panchen Lama"],
        correctAnswer: 1,
        explanation: "China viewed the asylum to Dalai Lama as interference in its internal affairs.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The India-China war occurred in which year?",
        options: ["1948", "1962", "1965", "1971"],
        correctAnswer: 1,
        explanation: "A major boundary dispute led to a full-scale conflict in Oct 1962.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Indus Waters Treaty' (1960) was mediated by:",
        options: ["United Nations", "World Bank", "United States", "USSR"],
        correctAnswer: 1,
        explanation: "It divided the river waters between India and Pakistan.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_36_MCQS.push(
    {
        id: 11,
        question: "India's foreign policy was largely a continuation of the anti-colonial stance formed during the:",
        options: ["1857 Revolt.", "Freedom Struggle (under Congress foreign policy wing).", "WWI years.", "British Raj official policy."],
        correctAnswer: 1,
        explanation: "Nehru had been the key architect of Congress foreign policy since the 1920s.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "What was the 'Hindi-Chini Bhai-Bhai' slogan associated with?",
        options: ["1962 War.", "The era of Panchsheel (mid-1950s).", "Post-1991 trade.", "The 1947 partition."],
        correctAnswer: 1,
        explanation: "A high point in relations before the border dispute.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The first conflict between India and Pakistan in 1947-48 was over:",
        options: ["Junagadh.", "Hyderabad.", "Kashmir.", "Rann of Kutch."],
        correctAnswer: 2,
        explanation: "Triggered by Pakistani tribal incursions supported by their army.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "India took the Kashmir issue to the United Nations in Jan 1948. This resulted in:",
        options: ["Immediate withdrawal of Pakistan.", "A ceasefire and the creation of a 'Line of Control'.", "A plebiscite held in 1949.", "The transfer of Kashmir to Pakistan."],
        correctAnswer: 1,
        explanation: "The UN called for a ceasefire but conditions for plebiscite were never fully met.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Which Indian leader criticized Non-Alignment as 'Neutrality of the Brave'?",
        options: ["Jawaharlal Nehru", "Indira Gandhi", "Atal Bihari Vajpayee", "None (it was Nehru's own description)"],
        correctAnswer: 0,
        explanation: "Nehru emphasized it was not an 'escape' or 'passivity' but a positive choice.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "What was the result of the '1962 War' for India?",
        options: ["India gained Aksai Chin.", "India faced a military defeat and lost territory in Aksai Chin.", "China withdrew completely to its pre-war positions.", "There was no change in borders."],
        correctAnswer: 1,
        explanation: "The war was a major setback to India's prestige and policy.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Panchsheel was incorporated in the Preamble of which treaty?",
        options: ["Treaty of Trade and Intercourse between Tibet and India (1954).", "Treaty of Versailles.", "Simla Agreement.", "Tashkent Declaration."],
        correctAnswer: 0,
        explanation: "It was part of the preamble of the agreement on trade and intercourse between the Tibet region of China and India.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "In the context of NAM, 'Disarmament' referred to:",
        options: ["Elimination of all armies.", "Global elimination of weapons of mass destruction, especially nuclear weapons.", "Selling weapons to third world countries.", "None of the above."],
        correctAnswer: 1,
        explanation: "A core demand of the non-aligned world.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 19,
        question: "The 'Suez Canal Crisis' (1956) saw India strongly supporting:",
        options: ["Britain and France.", "Egypt (under Nasser).", "Israel.", "None of the above."],
        correctAnswer: 1,
        explanation: "India opposed the Anglo-French aggression and supported Egypt's right to nationalize.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Which of the following describes the relationship between India and USA during 1947-64?",
        options: ["Strategic Alliance.", "Formal military partnership.", "Trained relations due to USA's pro-Pakistan stance and military aid to Pakistan.", "Hostility leading to war."],
        correctAnswer: 2,
        explanation: "The US-Pakistan military alliance (CENTO/SEATO) bothered India.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 21,
        question: "V.K. Krishna Menon was Nehru's close advisor and served as:",
        options: ["Education Minister.", "Defense Minister during 1962 war.", "Home Minister.", "Chief Justice."],
        correctAnswer: 1,
        explanation: "He resigned after the debacle of the 1962 war.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Which country acted as a major supporter of India's heavy industrialization and steel plants (e.g., Bhilai)?",
        options: ["USA", "USSR", "Japan", "West Germany"],
        correctAnswer: 1,
        explanation: "Soviet aid was crucial for public sector industries.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Goa Liberation' 1961 was criticized by which country in the UN?",
        options: ["USSR", "United States", "Egypt", "China"],
        correctAnswer: 1,
        explanation: "The West viewed it as a violation of international law, while the USSR supported it.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "India's policy towards the 'Korean War' (1950-53) was:",
        options: ["Supporting the North.", "Supporting the South.", "Neutrality and playing a mediating role (NNRC).", "Joining the war with troops."],
        correctAnswer: 2,
        explanation: "India chaired the Neutral Nations Repatriation Commission.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The 'McMahon Line' is the boundary between:",
        options: ["India and Pakistan.", "India and China (Eastern Sector).", "India and Bangladesh.", "India and Afghanistan."],
        correctAnswer: 1,
        explanation: "Delineated in 1914, China later contested it.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "In 1947, which organization did Nehru organize to demonstrate Asian solidarity?",
        options: ["Asian Relations Conference (New Delhi).", "SAARC.", "UN General Assembly.", "Commonwealth."],
        correctAnswer: 0,
        explanation: "Held in March-April 1947, even before independence.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Why did India choose to stay in the 'Commonwealth of Nations'?",
        options: ["To remain a British colony.", "To maintain economic and educational ties while asserting full sovereignty (Republic status).", "Because it was mandatory.", "To get military protection from UK."],
        correctAnswer: 1,
        explanation: "Nehru redefined the Commonwealth as an association of free and equal nations.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "The 'Colombo Proposals' (1962) were related to:",
        options: ["Economic trade.", "Boundary dispute between India and China post-war.", "River water sharing.", "Maritime security."],
        correctAnswer: 1,
        explanation: "Six non-aligned nations proposed a solution to the border crisis.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "'Apartheid' was a policy of racial discrimination against which India was among the first to speak out in the UN. It was prevalent in:",
        options: ["USA", "South Africa", "Australia", "Rhodesia"],
        correctAnswer: 1,
        explanation: "India broke diplomatic and economic ties with South Africa in protest.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Who was the 'Foreign Minister' of India during Nehru's tenure (1947-64)?",
        options: ["Sardar Patel", "External Affairs Portfolio was held by Nehru himself.", "V.K. Krishna Menon", "Lal Bahadur Shastri"],
        correctAnswer: 1,
        explanation: "Nehru personally shaped and directed foreign policy.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Founding Summit' of NAM in 1961 was attended by how many countries?",
        options: ["10", "25", "100", "50"],
        correctAnswer: 1,
        explanation: "25 sovereign nations were the initial members.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The issue of 'Aksai Chin' involves which region?",
        options: ["Ladakh Sector", "Arunachal Sector (NEFA)", "Sikkim Sector", "Uttarakhand Sector"],
        correctAnswer: 0,
        explanation: "The western sector of the India-China border.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "India-Pakistan relations were further complicated in the 1950s because Pakistan joined:",
        options: ["SEATO and CENTO.", "The Soviet Bloc.", "The NAM.", "European Union."],
        correctAnswer: 0,
        explanation: "Cold War security alliances of the Western bloc.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Panchsheel' principles emphasizes 'Peaceful Coexistence' because:",
        options: ["India was weak.", "Modern warfare (Nuclear) made coexistence a necessity for survival.", "China was our only friend.", "British asked us to do so."],
        correctAnswer: 1,
        explanation: "Nehru was acutely aware of the dangers of the Atomic age.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The main failure of Nehru's foreign policy is often cited as:",
        options: ["Staying in Commonwealth.", "Poor military preparation and miscalculation of China's intent in 1962.", "Joining NAM.", "Supporting Egypt."],
        correctAnswer: 1,
        explanation: "The 'Idealism' of Panchsheel failed against the 'Realism' of China's expansion.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    }
);
