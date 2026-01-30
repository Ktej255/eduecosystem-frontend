// UPSC CSAT Practice Set - Day 12 (January 12)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_12_PASSAGES: CSATPassage[] = [
    {
        id: 44,
        title: "Climate Policy (Article 6)",
        content: `To strengthen the delivery and efficiency of climate finance, the carbon markets under Article 6 (A6) of the Paris Agreement were made fully operational at COP29. According to the A6 Implementation Partnership, there are 89 cooperation arrangements made under Article 6.2 across 58 Parties. The adoption of the Paris Agreement Crediting Mechanism (Article 6.4) marked a milestone in the transition from the Clean Development Mechanism. In August 2025, India entered a new era of carbon markets by signing the Joint Crediting Mechanism (JCM). This effectively operationalised Article 6.2 of the Paris Agreement and signalled a new chapter in international climate cooperation.

Why does participation of India in the A6 mechanism hold critical significance? Partnerships within A6 can translate into transfer of advanced tech and channel much-needed climate finance. This can be a lever for socio-economic transformation. Critically, the potential of A6 market mechanisms is not just restricted to generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes (ITMOs). Instead, the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation. The Paris Agreement's Rule book sets out the architecture for A6. It allows countries to cooperate bilaterally or multilaterally, transferring emissions reductions while ensuring rigorous accounting to avoid double counting.

To operationalise both Article 6.2 and 6.4, the Indian government has already strategically identified a first set of 13 eligible activities keeping both developmental and climate goals in balance. These are high-end, emerging technologies that can fundamentally shift the country's emissions profile, such as renewable energy with storage, green hydrogen, and compressed bio-gas. The current Indian list of activities reflects a deliberate strategy that aligns with India's long-term goals of deep decarbonisation.`
    },
    {
        id: 45,
        title: "Social Justice (Early Childhood Development)",
        content: `India's aspiration to become a $30 trillion economy by 2047 demands sustained investments, particularly in human capital formation. However, a critical link remains largely missing: a focused and systematic investment in early childhood care and development (ECCD). Without strengthening the foundations laid in the earliest years, India's ambitions risk being on fragile ground. An investment in ECCD is not a welfare intervention but a strategic economic investment. From conception to the second birthday—the first 1,000 days—have been recognized by the WHO as a crucial ‘window of opportunity’. The next six years constitute another 2,000 days. Thus, the first 3,000 days shape brain architecture.

Children who are well-nourished and cognitively stimulated are more likely to complete education and earn higher incomes. Paradoxically, ECCD initiatives have largely been targeted at children within government safety nets, leaving out vast sections of middle- and higher-income families. This exclusion is problematic because developmental challenges are not confined to poverty alone. Children from middle and even upper-income households increasingly face obesity, physical inactivity, excessive screen exposure, and delayed social skills. Early childhood development must be universal, not targeted.

Research in epigenetics shows that health, nutrition, and stress before conception can influence gene expression. Paradoxically, this is also when children spend almost all their time within families, with minimal engagement with formal systems beyond immunisation. In the digital age, many parents rely on social media for guidance, much of which is commercially driven or poorly informed. India must move beyond fragmented approaches. What is needed is an integrated ECCD framework that brings together health, nutrition, and early learning from conception to eight years of age.`
    },
    {
        id: 46,
        title: "Governance (Higher Education Bill)",
        content: `The Viksit Bharat Shiksha Adhishthan Bill, 2025, introduced in the Lok Sabha on December 15, 2025, aims to reimagine India's higher education institutions. India's higher education system has expanded rapidly, spanning over a 1,000 universities, but regulation has not evolved at the same pace. Multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE) have created a maze of approvals that often pulls institutions away from teaching and innovation. This has turned oversight into over-regulation.

NEP 2020 called for a “light but tight” framework—strong on transparency and standards, but minimal on procedural burden. The Bill creates an apex umbrella body, the Viksit Bharat Shiksha Adhishthan, anchored in Entry 66 of the Seventh Schedule. It proposes repealing three key Acts to unify the regulatory architecture. It envisages a technology-enabled single window system built on public self-disclosure, where institutions publish key information on governance and outcomes. This shifts institutional energy toward what truly matters: teaching and research. International credibility is not achieved by copying foreign models, but by meeting global benchmarks of outcomes and ethics.`
    },
    {
        id: 47,
        title: "Energy Science (Solar vs Biofuels)",
        content: `Electric vehicles might be promoted as the key solution, but back in the early 2000s, it was biofuels. While we might expect biofuels to be a solution of the past, production is higher than ever. In this article, we give a sense of perspective on land use. A Poland-sized area is dedicated to liquid biofuels. Collective-ly, these biofuels produce around 4% of the world's energy demand for transport.

How much solar power could you produce on that land? The answer is yes. If we put solar panels on that land, we could produce roughly 32,000 terawatt-hours of electricity each year. That is 23 times more than the energy currently produced in the form of all liquid biofuels. We estimate that the total electricity needed to power all cars and trucks is around 7,000 TWh per year. You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.

These comparisons are explained by the fact that growing crops is a very inefficient process. Plants convert less than 1% of sunlight into biomass. Solar panels convert 15% to 20% (some recent designs 25%). Our point is not that we should cover all biofuel land in solar panels. But we do want to challenge how we think about land use. People rightly question the impact of solar farms on landscapes, but rarely consider the land use of existing biofuel crops, which do very little to decarbonise.`
    }
];

export const DAY_12_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Article 6
    {
        id: 216,
        passageId: 44,
        question: "According to the passage, what is the \"real prize\" of participating in the Article 6 mechanism for India?",
        options: [
            "Selling carbon credits to generate immediate revenue for the government budget.",
            "Using the mechanism to accelerate a low-carbon industrial transformation and transfer advanced technology, rather than just exchanging credits.",
            "Replacing the Clean Development Mechanism with a purely domestic trading scheme.",
            "Ensuring that India becomes the world's largest exporter of green hydrogen."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation... transfer of advanced tech.\""
    },
    {
        id: 217,
        passageId: 44,
        question: "The passage mentions \"Article 6.2\" and \"Article 6.4\". What is the key distinction implied or mentioned?",
        options: [
            "Article 6.2 deals with bilateral/multilateral cooperation (like JCM), while Article 6.4 relates to a centralised crediting mechanism replacing the Clean Development Mechanism.",
            "Article 6.2 is for private companies, while Article 6.4 is for governments only.",
            "Article 6.2 focuses on solar energy, while Article 6.4 focuses on wind energy.",
            "Article 6.2 allows double counting, while Article 6.4 prohibits it."
        ],
        correctAnswer: 0,
        explanation: "The text links \"Article 6.2\" to \"partnerships\" and \"bilateral\" (like JCM), and \"Article 6.4\" to a centralized \"Crediting Mechanism\" replacing the CDM."
    },
    {
        id: 218,
        passageId: 44,
        question: "What is the significance of the \"Joint Crediting Mechanism (JCM)\" signed by India?",
        options: [
            "It is a trade agreement with the USA.",
            "It operationalised Article 6.2 of the Paris Agreement for India, signalling a new chapter in international climate cooperation.",
            "It mandates that all Indian companies must buy carbon credits.",
            "It is a loan from the World Bank for climate projects."
        ],
        correctAnswer: 1,
        explanation: "Text: \"signing the Joint Crediting Mechanism (JCM). This effectively operationalised Article 6.2... signalled a new chapter.\""
    },
    {
        id: 219,
        passageId: 44,
        question: "The \"13 eligible activities\" identified by the Indian government focus on:",
        options: [
            "Traditional coal-based power generation improvements.",
            "High-end, emerging technologies like renewable energy with storage, green hydrogen, and compressed bio-gas.",
            "Afforestation projects only.",
            "Importing electric vehicles from China."
        ],
        correctAnswer: 1,
        explanation: "Text lists: \"renewable energy with storage, green hydrogen, and compressed bio-gas\" as eligible high-end activities."
    },
    {
        id: 220,
        passageId: 44,
        question: "The term \"double counting\" in the context of the Paris Agreement's Rule book refers to:",
        options: [
            "Counting both carbon dioxide and methane emissions.",
            "The risk of the same emission reduction being claimed by both the selling country and the buying country towards their climate targets.",
            "Paying twice for the same technology transfer.",
            "Counting the emissions of two different factories as one."
        ],
        correctAnswer: 1,
        explanation: "In carbon markets, \"double counting\" refers to two parties claiming the same reduction. The text says accounting is needed to \"avoid double counting\" when transferring reductions."
    },
    // Passage 2: ECCD
    {
        id: 221,
        passageId: 45,
        question: "The author argues that ECCD should be viewed not as \"welfare\" but as a \"strategic economic investment\". What is the rationale behind this?",
        options: [
            "It reduces the cost of building schools in the future.",
            "It strengthens human capital formation, leading to higher incomes, expanded tax bases, and a more productive workforce, which is essential for a $30 trillion economy.",
            "It allows the government to privatize Anganwadis.",
            "It ensures that children do not watch television."
        ],
        correctAnswer: 1,
        explanation: "Text: \"not a welfare intervention but a strategic economic investment... shape child's capacity... contribute productively... expanding the tax base.\""
    },
    {
        id: 222,
        passageId: 45,
        question: "Why does the passage term the exclusion of middle- and higher-income families from ECCD initiatives as \"problematic\"?",
        options: [
            "Because wealthy families pay more taxes and deserve more services.",
            "Because developmental challenges like obesity, screen exposure, and delayed social skills are prevalent even in these households, not just in poor ones.",
            "Because the government has surplus funds to spend.",
            "Because private schools are refusing to admit children from these families."
        ],
        correctAnswer: 1,
        explanation: "Text: \"exclusion is problematic because developmental challenges are not confined to poverty alone... increasingly face obesity, physical inactivity... delayed social skills.\""
    },
    {
        id: 223,
        passageId: 45,
        question: "The \"first 3,000 days\" mentioned in the text refers to:",
        options: [
            "The time it takes to build a new school.",
            "The period from conception to eight years of age, which shapes brain architecture and future well-being.",
            "The duration of the new government policy on education.",
            "The first 10 years of a child's life."
        ],
        correctAnswer: 1,
        explanation: "Text: \"conception to eight years of age... first 3,000 days shape brain architecture.\""
    },
    {
        id: 224,
        passageId: 45,
        question: "The passage highlights a \"paradox\" regarding the early years of childhood. What is it?",
        options: [
            "Children learn faster when they are asleep.",
            "Children spend the most critical developmental phase almost entirely within families with minimal formal system engagement, often relying on poor information from social media.",
            "Parents spend more money on toys than on food.",
            "Children are healthier in rural areas than in urban areas."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Paradoxically, this is also when children spend almost all their time within families, with minimal engagement with formal systems... rely on social media.\""
    },
    {
        id: 225,
        passageId: 45,
        question: "Based on the text, what is the role of \"epigenetics\" in this context?",
        options: [
            "It proves that genes determine everything and cannot be changed.",
            "It shows that environmental factors like nutrition and stress before and during conception can influence gene expression and long-term health.",
            "It is a new subject introduced in primary schools.",
            "It suggests that only genetic engineering can solve health problems."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Research in epigenetics shows that health, nutrition, and stress... before conception can influence gene expression.\""
    },
    // Passage 3: Higher Ed Bill
    {
        id: 226,
        passageId: 46,
        question: "The primary structural problem with the current higher education regulation identified in the passage is:",
        options: [
            "The lack of funding for private universities.",
            "The existence of multiple statutory bodies (UGC, AICTE, NCTE) with overlapping mandates, creating a \"maze of approvals\" and over-regulation.",
            "The shortage of qualified teachers in rural areas.",
            "The excessive interference of foreign universities."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Multiple statutory bodies with overlapping mandates... created a maze of approvals... turned oversight into over-regulation.\""
    },
    {
        id: 227,
        passageId: 46,
        question: "What does the \"light but tight\" framework imply?",
        options: [
            "Light funding but tight control over student unions.",
            "Minimal procedural burden and bureaucratic interference (\"light\"), but strict adherence to transparency, standards, and outcomes (\"tight\").",
            "Light penalties for corruption but tight rules for admission.",
            "A framework that is easy to understand but hard to implement."
        ],
        correctAnswer: 1,
        explanation: "Text: \"strong on transparency and standards, but minimal on procedural burden.\""
    },
    {
        id: 228,
        passageId: 46,
        question: "The \"Viksit Bharat Shiksha Adhishthan\" body is anchored in which constitutional provision?",
        options: [
            "Entry 66 of the Seventh Schedule (Coordination and determination of standards in institutions for higher education).",
            "Article 21A (Right to Education).",
            "The Preamble of the Constitution.",
            "The Directive Principles of State Policy."
        ],
        correctAnswer: 0,
        explanation: "Text: \"anchored in Entry 66 of the Seventh Schedule.\""
    },
    {
        id: 229,
        passageId: 46,
        question: "How does the Bill propose to replace the current system of \"inspections and approvals\"?",
        options: [
            "By increasing the number of inspectors.",
            "By a technology-enabled single window system built on public self-disclosure of governance and outcomes.",
            "By outsourcing regulation to private companies.",
            "By asking students to inspect the colleges."
        ],
        correctAnswer: 1,
        explanation: "Text: \"envisages a technology-enabled single window system built on public self-disclosure.\""
    },
    {
        id: 230,
        passageId: 46,
        question: "According to the passage, \"International credibility\" for Indian institutions will come from:",
        options: [
            "Adopting the curriculum of American universities.",
            "Meeting global benchmarks of outcomes, ethics, and research culture while remaining rooted in Indian priorities.",
            "Hiring Nobel laureates as vice-chancellors.",
            "Changing the medium of instruction to English only."
        ],
        correctAnswer: 1,
        explanation: "Text: \"not achieved by copying foreign models, but by meeting global benchmarks... while remaining rooted in Indian priorities.\""
    },
    // Passage 4: Solar vs Biofuels
    {
        id: 231,
        passageId: 47,
        question: "The central argument of the passage regarding land use efficiency is that:",
        options: [
            "Biofuels are more efficient than solar panels because they can be grown anywhere.",
            "Solar panels are vastly more land-efficient than biofuels, generating ~23 times more energy on the same area.",
            "We should stop using electricity and switch back to petrol.",
            "Poland is the world leader in solar energy production."
        ],
        correctAnswer: 1,
        explanation: "Text: \"If we put solar panels on that land... 23 times more than the energy currently produced... liquid biofuels.\""
    },
    {
        id: 232,
        passageId: 47,
        question: "Based on the data provided, if the land currently used for biofuels were converted to solar energy, it could:",
        options: [
            "Power all the world's cars and trucks using less than one-quarter of that land.",
            "Barely produce enough energy to light a single city.",
            "Cause a global food shortage.",
            "Increase global warming by 4%."
        ],
        correctAnswer: 0,
        explanation: "Text: \"You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.\""
    },
    {
        id: 233,
        passageId: 47,
        question: "Why is there such a large disparity in energy output between biofuels and solar panels?",
        options: [
            "Because solar panels work at night.",
            "Because plants biologically convert less than 1% of sunlight into biomass, whereas solar panels convert 15-25%.",
            "Because biofuels are made from coal.",
            "Because solar panels are subsidized by the government."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Plants convert less than 1%... Solar panels convert 15% to 20%.\""
    },
    {
        id: 234,
        passageId: 47,
        question: "The author mentions that \"People rightly question the impact of solar farms on landscapes, but...\"",
        options: [
            "\"...they forget that solar farms are beautiful.\"",
            "\"...rarely consider the land use of existing biofuel crops, which occupy vast areas for very little decarbonisation benefit.\"",
            "\"...they should question the impact of wind farms instead.\"",
            "\"...they do not understand physics.\""
        ],
        correctAnswer: 1,
        explanation: "Text: \"rarely consider the land use of existing biofuel crops, which do very little to decarbonise.\""
    },
    {
        id: 235,
        passageId: 47,
        question: "What percentage of the world's transport energy demand is currently met by liquid biofuels?",
        options: [
            "50%",
            "25%",
            "4%",
            "1%"
        ],
        correctAnswer: 2,
        explanation: "Text: \"produce around 4% of the world's energy demand for transport.\""
    }
];

export const DAY_12_SESSION = {
    day: 12,
    title: "Climate Finance, Child Growth & Education Reforms",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Article 6 Carbon Markets", "Early Childhood Development", "Higher Education Bill", "Energy Efficiency (Solar vs Biofuels)"]
};
