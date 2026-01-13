// CSAT Day 2 Practice Test - UPSC CSAT Practice Set Day 02
// Updated: January 13, 2026 - Evening Session
// Passages: Climate Finance, Early Childhood Development, Higher Education, Solar vs Biofuels

export interface CSATQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    passageNumber: number;
}

export interface CSATPassage {
    id: number;
    title: string;
    source: string;
    content: string;
    questionRange: [number, number]; // [startQ, endQ]
}

export interface VocabularyItem {
    word: string;
    context: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    csatTip?: string;
    toneIndicator?: 'positive' | 'negative' | 'neutral';
}

// Vocabulary unlocked after test completion
export const DAY2_VOCABULARY: VocabularyItem[] = [
    // Climate & Technology Terms
    {
        word: "ITMOs (Internationally Transferred Mitigation Outcomes)",
        context: "...generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes.",
        definition: "Carbon credits that can be transferred between countries under Article 6 of the Paris Agreement, allowing emission reductions achieved in one country to be counted toward another country's NDC.",
        synonyms: ["Carbon credits", "Emission reduction units", "Climate offsets"],
        antonyms: [],
        csatTip: "When you see 'ITMO' in passages about climate, think of it as a tradeable unit of emission reduction.",
        toneIndicator: 'neutral'
    },
    {
        word: "NDC (Nationally Determined Contributions)",
        context: "...Counting the same emission reduction towards the climate targets (NDCs) of both countries.",
        definition: "A country's self-defined national climate pledge under the Paris Agreement, specifying their targets for reducing emissions.",
        synonyms: ["Climate pledge", "National climate target"],
        antonyms: [],
        toneIndicator: 'neutral'
    },
    {
        word: "Decarbonisation",
        context: "...India's long-term goals of deep decarbonisation.",
        definition: "The process of reducing or eliminating carbon dioxide emissions from energy and industrial processes, typically by switching to low-carbon energy sources.",
        synonyms: ["Low-carbon transition", "Carbon neutrality", "Emission reduction"],
        antonyms: ["Carbonization", "Fossil fuel dependence"],
        toneIndicator: 'positive'
    },
    {
        word: "Epigenetics",
        context: "Research in epigenetics shows that health, nutrition, and stress before conception can influence gene expression.",
        definition: "The study of how behaviors and environment can cause changes that affect the way genes work, without altering the DNA sequence itself.",
        synonyms: ["Gene expression study", "Environmental genetics"],
        antonyms: [],
        csatTip: "Epigenetics bridges the nature vs nurture debate - showing environment CAN affect gene expression.",
        toneIndicator: 'neutral'
    },
    {
        word: "Statutory Body",
        context: "Multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE) have created a maze of approvals.",
        definition: "An organization established by an Act of Parliament or State Legislature, having specific powers and duties as defined by that law.",
        synonyms: ["Legal body", "Regulatory authority"],
        antonyms: ["Constitutional body", "Executive body"],
        toneIndicator: 'neutral'
    },
    {
        word: "Fiscal Federalism",
        context: "...Centre's power to cap State's net borrowing ceiling.",
        definition: "The financial relations between units of governments in a federal system, including how revenue and spending responsibilities are divided.",
        synonyms: ["Financial federalism", "Fiscal autonomy"],
        antonyms: ["Fiscal centralization"],
        toneIndicator: 'neutral'
    },
    {
        word: "Cooperative Federalism",
        context: "...signalled a new chapter in international climate cooperation.",
        definition: "A model of federalism where national and state governments work together as partners rather than as separate, competing entities.",
        synonyms: ["Collaborative federalism", "Partnership federalism"],
        antonyms: ["Competitive federalism", "Dual federalism"],
        toneIndicator: 'positive'
    }
];


export const DAY2_CSAT_PASSAGES: CSATPassage[] = [
    {
        id: 1,
        title: "Article 6 and Climate Finance",
        source: "Paris Agreement Climate Cooperation Analysis",
        content: `To strengthen the delivery and efficiency of climate finance, the carbon markets under Article 6 (A6) of the Paris Agreement were made fully operational at COP29. According to the A6 Implementation Partnership, there are 89 cooperation arrangements made under Article 6.2 across 58 Parties. The adoption of the Paris Agreement Crediting Mechanism (Article 6.4) marked a milestone in the transition from the Clean Development Mechanism. In August 2025, India entered a new era of carbon markets by signing the Joint Crediting Mechanism (JCM). This effectively operationalised Article 6.2 of the Paris Agreement and signalled a new chapter in international climate cooperation.

Why does participation of India in the A6 mechanism hold critical significance? Partnerships within A6 can translate into transfer of advanced tech and channel much-needed climate finance. This can be a lever for socio-economic transformation. Critically, the potential of A6 market mechanisms is not just restricted to generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes. Instead, the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation. The Paris Agreement's Rule book sets out the architecture for A6. It allows countries to cooperate bilaterally or multilaterally, transferring emissions reductions while ensuring rigorous accounting to avoid double counting. India's new JCM partnership with Japan is an early example.

To operationalise both Article 6.2 and 6.4, the Indian government has already strategically identified a first set of 13 eligible activities keeping both developmental and climate goals in balance. These are high-end, emerging technologies that can fundamentally shift the country's emissions profile, such as renewable energy with storage, green hydrogen, and compressed bio-gas. The current Indian list of activities reflects a deliberate strategy that aligns with India's long-term goals of deep decarbonisation.`,
        questionRange: [1, 5]
    },
    {
        id: 2,
        title: "Early Childhood Care and Development (ECCD)",
        source: "Human Capital and Economic Growth Analysis",
        content: `India's aspiration to become a $30 trillion economy by 2047 demands sustained investments, particularly in human capital formation. However, a critical link remains largely missing: a focused and systematic investment in early childhood care and development (ECCD). Without strengthening the foundations laid in the earliest years, India's ambitions risk being on fragile ground. An investment in ECCD is not a welfare intervention but a strategic economic investment. From conception to the second birthday—the first 1,000 days—have been recognized by the WHO as a crucial 'window of opportunity'. The next six years constitute another 2,000 days. Thus, the first 3,000 days shape brain architecture.

Children who are well-nourished and cognitively stimulated are more likely to complete education and earn higher incomes. Paradoxically, ECCD initiatives have largely been targeted at children within government safety nets, leaving out vast sections of middle- and higher-income families. This exclusion is problematic because developmental challenges are not confined to poverty alone. Children from middle and even upper-income households increasingly face obesity, physical inactivity, excessive screen exposure, and delayed social skills. Early childhood development must be universal, not targeted.

Research in epigenetics shows that health, nutrition, and stress before conception can influence gene expression. Paradoxically, this is also when children spend almost all their time within families, with minimal engagement with formal systems beyond immunisation. In the digital age, many parents rely on social media for guidance, much of which is commercially driven or poorly informed. India must move beyond fragmented approaches. What is needed is an integrated ECCD framework that brings together health, nutrition, and early learning from conception to eight years of age.`,
        questionRange: [6, 10]
    },
    {
        id: 3,
        title: "Higher Education Regulation Bill",
        source: "Viksit Bharat Shiksha Adhishthan Bill 2025 Analysis",
        content: `The Viksit Bharat Shiksha Adhishthan Bill, 2025, introduced in the Lok Sabha on December 15, 2025, aims to reimagine India's higher education institutions. India's higher education system has expanded rapidly, spanning over a 1,000 universities, but regulation has not evolved at the same pace. Multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE) have created a maze of approvals that often pulls institutions away from teaching and innovation. This has turned oversight into over-regulation.

NEP 2020 called for a "light but tight" framework—strong on transparency and standards, but minimal on procedural burden. The Bill creates an apex umbrella body, the Viksit Bharat Shiksha Adhishthan, anchored in Entry 66 of the Seventh Schedule. It proposes repealing three key Acts to unify the regulatory architecture. It envisages a technology-enabled single window system built on public self-disclosure, where institutions publish key information on governance and outcomes. This shifts institutional energy toward what truly matters: teaching and research. International credibility is not achieved by copying foreign models, but by meeting global benchmarks of outcomes and ethics.`,
        questionRange: [11, 15]
    },
    {
        id: 4,
        title: "Solar vs Biofuels - Land Use Efficiency",
        source: "Energy Land Use Comparative Analysis",
        content: `Electric vehicles might be promoted as the key solution, but back in the early 2000s, it was biofuels. While we might expect biofuels to be a solution of the past, production is higher than ever. In this article, we give a sense of perspective on land use. A Poland-sized area is dedicated to liquid biofuels. Collectively, these biofuels produce around 4% of the world's energy demand for transport.

How much solar power could you produce on that land? The answer is yes. If we put solar panels on that land, we could produce roughly 32,000 terawatt-hours of electricity each year. That is 23 times more than the energy currently produced in the form of all liquid biofuels. We estimate that the total electricity needed to power all cars and trucks is around 7,000 TWh per year. You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.

These comparisons are explained by the fact that growing crops is a very inefficient process. Plants convert less than 1% of sunlight into biomass. Solar panels convert 15% to 20% (some recent designs 25%). Our point is not that we should cover all biofuel land in solar panels. But we do want to challenge how we think about land use. People rightly question the impact of solar farms on landscapes, but rarely consider the land use of existing biofuel crops, which do very little to decarbonise.`,
        questionRange: [16, 20]
    }
];

export const DAY2_CSAT_QUESTIONS: CSATQuestion[] = [
    // Passage 1 Questions (Climate/Article 6)
    {
        id: 1,
        question: "Based on the passage, what is the \"real prize\" for India in participating in the Article 6 mechanism, beyond just financial gain?",
        options: [
            "The ability to sell surplus carbon credits to developed nations to balance the fiscal deficit.",
            "The acceleration of low-carbon industrial and technological transformation through advanced tech transfer.",
            "The permanent removal of all coal-based power plants by 2030.",
            "The complete replacement of the Clean Development Mechanism with a domestic carbon tax."
        ],
        correctAnswer: 1,
        explanation: "The text explicitly states: 'the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation... transfer of advanced tech.'",
        passageNumber: 1
    },
    {
        id: 2,
        question: "Which of the following statements best describes the operational difference between Article 6.2 and Article 6.4 as implied in the text?",
        options: [
            "Article 6.2 deals with bilateral/multilateral cooperation like the JCM, while Article 6.4 relates to a centralized crediting mechanism replacing the Clean Development Mechanism.",
            "Article 6.2 focuses on green hydrogen, while Article 6.4 focuses on solar energy storage.",
            "Article 6.2 is for private sector companies, while Article 6.4 is strictly for government-to-government transfers.",
            "Article 6.2 has not yet been operationalized, whereas Article 6.4 was fully operationalized in 2024."
        ],
        correctAnswer: 0,
        explanation: "The text links 'Article 6.2' to 'partnerships' and 'bilateral' (like JCM), and mentions 'Article 6.4' (Paris Agreement Crediting Mechanism) as a centralized transition from the Clean Development Mechanism.",
        passageNumber: 1
    },
    {
        id: 3,
        question: "The passage mentions \"rigorous accounting to avoid double counting\" as a key feature of the Paris Agreement's Rule book. In this context, \"double counting\" likely refers to:",
        options: [
            "Counting the same emission reduction towards the climate targets (NDCs) of both the selling country and the buying country.",
            "Counting both carbon dioxide and methane emissions in the same calculation.",
            "Paying for the same technology transfer twice—once through aid and once through credits.",
            "Registering the same project under both the Indian government and the Japanese government."
        ],
        correctAnswer: 0,
        explanation: "In carbon markets, 'double counting' standardly refers to both the host and buyer country claiming the same emission reduction. The text mentions 'rigorous accounting' is needed to avoid this.",
        passageNumber: 1
    },
    {
        id: 4,
        question: "With reference to India's strategy for Article 6, consider the following statements:\n1. India has signed a Joint Crediting Mechanism (JCM) with Japan to operationalize Article 6.2.\n2. The government has identified eligible activities that focus primarily on traditional coal efficiency rather than emerging technologies.\n3. Green hydrogen and compressed bio-gas are among the identified eligible activities.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is correct (JCM signed). Statement 2 is incorrect (focus is on 'high-end, emerging technologies', not coal). Statement 3 is correct (Green hydrogen, bio-gas listed).",
        passageNumber: 1
    },
    {
        id: 5,
        question: "The author suggests that India must \"move from intent to action.\" Which of the following is NOT explicitly mentioned as a required policy priority in the text?",
        options: [
            "Detailing the scope of activities and articulation of rules for Letters of Authorisation.",
            "Creating a single-window clearance system for carbon projects to reduce registration time.",
            "Mandatory privatization of all renewable energy storage facilities.",
            "Building a domestic market for removal activities like Biochar."
        ],
        correctAnswer: 2,
        explanation: "Options (a), (b), and (d) relate to mentioned priorities (Domestic framework/rules, Streamline project clearances, Build removals market). Privatization (c) is not mentioned.",
        passageNumber: 1
    },

    // Passage 2 Questions (ECCD)
    {
        id: 6,
        question: "Which one of the following is the most logical corollary to the author's argument that \"ECCD is not a welfare intervention but a strategic economic investment\"?",
        options: [
            "The government should privatize all Anganwadis to ensure they generate profit.",
            "Spending on early childhood care directly contributes to future workforce productivity, tax base expansion, and national competitiveness.",
            "Welfare schemes are generally wasteful and should be replaced by stock market investments.",
            "The primary goal of ECCD is to reduce the medical bills of senior citizens."
        ],
        correctAnswer: 1,
        explanation: "The text says ECCD is a 'strategic economic investment' because it shapes 'capacity to learn, adapt and contribute productively,' 'expanding the tax base,' and 'lift families out of poverty.'",
        passageNumber: 2
    },
    {
        id: 7,
        question: "The passage argues that ECCD initiatives should be \"universal, not targeted.\" What is the primary justification given for this claim?",
        options: [
            "Government safety nets have surplus funds that need to be spent on wealthy families.",
            "Developmental challenges such as screen exposure, obesity, and delayed social skills are prevalent even in middle and upper-income households.",
            "Poor families are already receiving too much support compared to the middle class.",
            "Universal coverage is the only way to meet WHO standards."
        ],
        correctAnswer: 1,
        explanation: "The text states exclusion of middle/upper class is problematic because 'developmental challenges are not confined to poverty alone... increasingly face obesity, physical inactivity...'",
        passageNumber: 2
    },
    {
        id: 8,
        question: "According to the passage, the period of \"the first 3,000 days\" is critical because:",
        options: [
            "It is the only time when the government provides free immunization.",
            "It shapes the child's brain architecture, physical health, and emotional regulation, determining their adult capacity to learn and adapt.",
            "It is the period before the child enters the formal school system, after which development stops.",
            "It allows the government to collect data for the National Health Mission."
        ],
        correctAnswer: 1,
        explanation: "The text defines the first 3,000 days (conception to age 8) as the time that 'shape(s) brain architecture, physical health...' determining a child's capacity to learn.",
        passageNumber: 2
    },
    {
        id: 9,
        question: "The author notes a \"paradox\" regarding the time children spend within families during their early years. What is this paradox?",
        options: [
            "Parents spend the most money on education when the child is at home, but the child learns the least.",
            "Children spend almost all their time with families during the most critical developmental phase, yet this is when engagement with formal support systems is minimal.",
            "Parents in the digital age are better informed than doctors, yet children are less healthy.",
            "Children are most safe at home, yet that is where they face the highest risk of physical injury."
        ],
        correctAnswer: 1,
        explanation: "The paradox is: 'this is also when children spend almost all their time within families, with minimal engagement with formal systems' despite it being the most critical developmental phase.",
        passageNumber: 2
    },
    {
        id: 10,
        question: "Based on the passage, \"epigenetics\" is relevant to ECCD because:",
        options: [
            "It proves that genes are unchangeable and determining.",
            "It shows that environmental exposures, stress, and nutrition even before conception can influence a child's long-term health and gene expression.",
            "It suggests that only medical doctors should be involved in child-rearing.",
            "It indicates that digital learning is superior to traditional parenting."
        ],
        correctAnswer: 1,
        explanation: "The text states: 'Research in epigenetics shows that health, nutrition, and stress... before conception can influence gene expression.'",
        passageNumber: 2
    },

    // Passage 3 Questions (Higher Education Bill)
    {
        id: 11,
        question: "The \"Viksit Bharat Shiksha Adhishthan Bill, 2025\" seeks to resolve which primary structural issue in Indian higher education?",
        options: [
            "The lack of funding for private universities.",
            "The fragmentation of regulation caused by multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE).",
            "The refusal of foreign universities to set up campuses in India.",
            "The inability of students to pass competitive entrance exams."
        ],
        correctAnswer: 1,
        explanation: "The text cites 'Multiple statutory bodies with overlapping mandates... created a maze of approvals' as the problem the Bill aims to solve by unifying them.",
        passageNumber: 3
    },
    {
        id: 12,
        question: "The term \"light but tight\" framework, as mentioned in the context of NEP 2020 and the Bill, implies:",
        options: [
            "Minimal government funding but tight control over student unions.",
            "Minimal procedural burden and bureaucratic interference, but strict adherence to transparency, outcomes, and academic standards.",
            "Light penalties for non-compliance but tight restrictions on faculty recruitment.",
            "A framework that is easy to implement in rural areas but strict in urban areas."
        ],
        correctAnswer: 1,
        explanation: "The text defines it: 'strong on transparency and standards, but minimal on procedural burden.'",
        passageNumber: 3
    },
    {
        id: 13,
        question: "According to the passage, the Bill proposes to replace the current system of inspections and approvals with:",
        options: [
            "A technology-enabled single window system based on public self-disclosure and transparency.",
            "A system where international agencies conduct all audits.",
            "A decentralized system where each state government creates its own standards.",
            "A manual system of physical verification by police officers."
        ],
        correctAnswer: 0,
        explanation: "The text mentions: 'technology-enabled single window system built on public self-disclosure.'",
        passageNumber: 3
    },
    {
        id: 14,
        question: "The Bill is anchored in \"Entry 66 of the Seventh Schedule\" of the Constitution. This entry typically relates to:",
        options: [
            "Law and Order.",
            "Foreign Affairs.",
            "Coordination and determination of standards in institutions for higher education or research.",
            "Agricultural income tax."
        ],
        correctAnswer: 2,
        explanation: "This is a standard Polity fact reinforced by the text's mention of 'Anchored in Entry 66... coordination and determination of standards.'",
        passageNumber: 3
    },
    {
        id: 15,
        question: "The author argues that \"International credibility\" for Indian institutions will come from:",
        options: [
            "Copying the curriculum of Harvard and Oxford.",
            "Hiring only foreign faculty members.",
            "Meeting global benchmarks of outcomes, ethics, and research culture while remaining rooted in Indian priorities.",
            "Increasing the fees to match international standards."
        ],
        correctAnswer: 2,
        explanation: "The text says: 'not achieved by copying foreign models, but by meeting global benchmarks... while remaining rooted in Indian priorities.'",
        passageNumber: 3
    },

    // Passage 4 Questions (Solar vs Biofuels)
    {
        id: 16,
        question: "What is the central data-driven argument presented in the passage against the expansion of biofuels?",
        options: [
            "Biofuels cause more pollution than petrol and diesel.",
            "Biofuels are extremely land-inefficient compared to solar energy; solar can generate 23 times more energy on the same amount of land.",
            "Biofuel crops like sugarcane and corn are impossible to grow in Europe.",
            "Electric vehicles are too expensive for the average consumer."
        ],
        correctAnswer: 1,
        explanation: "The core argument is the massive efficiency gap: Solar is 23x more energy-dense per acre than biofuels.",
        passageNumber: 4
    },
    {
        id: 17,
        question: "Based on the passage, if the land currently used for biofuels were converted to solar panels, what would be the potential outcome regarding transport energy?",
        options: [
            "It would barely cover 10% of the world's transport energy needs.",
            "It would generate enough electricity to power all the world's cars and trucks, using only about one-quarter of that land.",
            "It would require 32 million more hectares of land to be effective.",
            "It would lead to a collapse of the global food supply chain."
        ],
        correctAnswer: 1,
        explanation: "The text says: 'You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.'",
        passageNumber: 4
    },
    {
        id: 18,
        question: "The huge disparity in energy efficiency between biofuels and solar panels is attributed to:",
        options: [
            "The high cost of solar panel manufacturing.",
            "The biological limit where plants convert less than 1% of sunlight into biomass, versus solar panels converting 15-25%.",
            "The fact that biofuels are mostly produced in Brazil and the US.",
            "The government subsidies provided to the solar industry."
        ],
        correctAnswer: 1,
        explanation: "The text explains: 'Plants convert less than 1% of sunlight... Solar panels convert 15% to 20%.'",
        passageNumber: 4
    },
    {
        id: 19,
        question: "Which of the following best captures the author's intent in making this comparison?",
        options: [
            "To advocate for the immediate destruction of all farms.",
            "To prove that electric vehicles are a failed technology.",
            "To challenge the public perception of land use, highlighting that existing biofuel crops occupy vast land for minimal energy benefit compared to solar.",
            "To suggest that Poland should become the world's leading solar energy producer."
        ],
        correctAnswer: 2,
        explanation: "The author states: 'We do want to challenge how we think about land use... rarely consider the land use of existing biofuel crops.'",
        passageNumber: 4
    },
    {
        id: 20,
        question: "What is the approximate current contribution of liquid biofuels to the world's transport energy demand, as per the text?",
        options: [
            "4%",
            "15%",
            "25%",
            "50%"
        ],
        correctAnswer: 0,
        explanation: "The text explicitly states: 'produce around 4% of the world's energy demand for transport.'",
        passageNumber: 4
    }
];

export default { DAY2_CSAT_PASSAGES, DAY2_CSAT_QUESTIONS, DAY2_VOCABULARY };
