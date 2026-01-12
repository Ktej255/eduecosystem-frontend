export interface VocabularyItem {
    word: string;
    definition: string;
    context: string;
    synonyms: string[];
    antonyms: string[];
    toneIndicator: 'positive' | 'negative' | 'neutral';
    csatTip?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface Passage {
    id: number;
    title: string;
    text: string;
    questions: Question[];
}

export interface CSATSessionData {
    day: number;
    title: string; // e.g., "Reading Comprehension Foundation"
    vocabulary: VocabularyItem[];
    passages: Passage[];
}

// Map Day Number (1-30) to Session Data
export const CSAT_DATA_MAP: Record<number, CSATSessionData> = {
    1: {
        day: 1,
        title: "Reading Comprehension Foundation",
        vocabulary: [
            {
                word: "Implication",
                definition: "The conclusion that can be drawn from something although it is not explicitly stated.",
                context: "The implication of the new policy was severe for small businesses.",
                synonyms: ["suggestion", "inference", "insinuation"],
                antonyms: ["proof", "truth"],
                toneIndicator: "neutral",
                csatTip: "Look for what the author 'means' but doesn't 'say'."
            },
            {
                word: "Ambiguous",
                definition: "Open to more than one interpretation; having a double meaning.",
                context: "The phrasing of the law was ambiguous, leading to confusion.",
                synonyms: ["vague", "obscure", "uncertain"],
                antonyms: ["clear", "explicit"],
                toneIndicator: "negative",
                csatTip: "Ambiguous options in CSAT are usually incorrect unless the question asks for possibilities."
            },
            {
                word: "Corroborate",
                definition: "Confirm or give support to (a statement, theory, or finding).",
                context: "The witness corroborated the defendant's alibi.",
                synonyms: ["confirm", "verify", "endorse"],
                antonyms: ["contradict", "disprove"],
                toneIndicator: "positive",
                csatTip: "Used often in Critical Reasoning questions."
            }
        ],
        passages: [
            {
                id: 101,
                title: "Passage 1: The Nature of Climate Change",
                text: `Climate change is not just an environmental issue; it is a profound economic and social challenge. The disruption of weather patterns affects agriculture, which in turn impacts food security and prices. Furthermore, the displacement of populations due to rising sea levels creates a refugee crisis that the current geopolitical framework is ill-equipped to handle. 
                
                However, framing it solely as a crisis ignores the opportunity for innovation. The transition to renewable energy could spark a new industrial revolution, creating jobs and fostering technological advancements. The reluctance to act is often rooted in short-term economic thinking, whereas the long-term cost of inaction far outweighs the investment required today.
                
                Therefore, policy-makers must shift their perspective from cost-mitigation to investment-opportunity. This requires a fundamental restructuring of how we value natural resources and carbon footprints in our economic models.`,
                questions: [
                    {
                        id: 1,
                        question: "What is the primary argument of the author regarding climate change?",
                        options: [
                            "It is primarily an environmental disaster that requires immediate conservation efforts.",
                            "It presents both a crisis for current systems and an economic opportunity for innovation.",
                            "It will cause geopolitical instability due to refugee crises.",
                            "It requires a complete shutdown of short-term economic activities."
                        ],
                        correctAnswer: 1,
                        explanation: "The author explicitly states it's not just environmental (Para 1) and highlights the 'opportunity for innovation' (Para 2), balancing the crisis view with economic potential."
                    },
                    {
                        id: 2,
                        question: "Which of the following aligns with the author's view on 'short-term economic thinking'?",
                        options: [
                            "It is necessary to protect current jobs.",
                            "It prevents the realization of long-term benefits of climate action.",
                            "It is the only viable way to manage natural resources.",
                            "It creates a stable geopolitical framework."
                        ],
                        correctAnswer: 1,
                        explanation: "The passage states 'reluctance to act is often rooted in short-term economic thinking, whereas the long-term cost of inaction far outweighs...' implying it hinders long-term benefits."
                    },
                    {
                        id: 3,
                        question: "What does the author suggest about the current geopolitical framework?",
                        options: [
                            "It is well-prepared for the refugee crisis.",
                            "It needs to focus more on agriculture.",
                            "It is not capable of managing the displacement caused by rising sea levels.",
                            "It is driving the new industrial revolution."
                        ],
                        correctAnswer: 2,
                        explanation: "Para 1 says: '...creates a refugee crisis that the current geopolitical framework is ill-equipped to handle.'"
                    }
                ]
            },
            {
                id: 102,
                title: "Passage 2: Artificial Intelligence and Ethics",
                text: `The rapid deployment of Artificial Intelligence (AI) in decision-making processes raises significant ethical concerns. Algorithmic bias, where AI systems replicate historical prejudices present in training data, is a well-documented phenomenon. For instance, hiring algorithms have been shown to favor candidates from certain demographics, not because of valid criteria, but due to biased historical hiring patterns.

                The solution is not to abandon AI but to implement rigorous ethical auditing. Just as financial institutions are audited for compliance, AI systems must be scrutinized for fairness. Transparency in how algorithms reach conclusions is known as 'Explainable AI' (XAI). Without XAI, we risk creating a 'black box' society where decisions affecting lives are made by opaque machines.

                Ultimately, the responsibility lies with the developers and regulators. Technology is a tool, and like any powerful tool, it requires safeguards to ensure it serves humanity equitably rather than amplifying existing inequalities.`,
                questions: [
                    {
                        id: 4,
                        question: "According to the passage, what is the core problem with 'Algorithmic bias'?",
                        options: [
                            "AI systems are naturally malicious.",
                            "AI systems are too expensive to train properly.",
                            "AI replicates historical prejudices found in the data used to train it.",
                            "AI developers intentionally program bias into the system."
                        ],
                        correctAnswer: 2,
                        explanation: "Para 1: 'Algorithmic bias, where AI systems replicate historical prejudices present in training data...'"
                    },
                    {
                        id: 5,
                        question: "What is 'Explainable AI' (XAI) as described in the passage?",
                        options: [
                            "AI that can speak and communicate with humans.",
                            "Transparency in the logic and process of how algorithms reach conclusions.",
                            "A legal framework for punishing unethical AI developers.",
                            "The process of abandoning AI in critical sectors."
                        ],
                        correctAnswer: 1,
                        explanation: "Para 2: 'Transparency in how algorithms reach conclusions is known as Explainable AI (XAI).'"
                    }
                ]
            }
        ]
    }
    // Add more days here...
};
