// UPSC CSAT Practice Set - Day 14 (January 14)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_14_PASSAGES: CSATPassage[] = [
    {
        id: 52,
        title: "Culture & Sustainability (Edible Insects)",
        content: `Why does the idea of eating insects provoke discomfort, even before taste enters the conversation? At an edible insects stall at the Science Gallery, Bengaluru, this question surfaced repeatedly. Visitors negotiated curiosity, disgust, and the boundaries of what they consider "normal" food. Many assumed they were encountering a foreign idea. Yet insects have been consumed across several Indian States for generations, particularly in parts of Northeast India such as Nagaland and Arunachal Pradesh. Entomophagy, the practice of eating insects, is often imagined as something that happens elsewhere.

Insects are often framed as an efficient source of calories and protein in a world facing growing food demands. As populations increase and food systems strain under climate pressures, edible insects are frequently cited as a sustainable alternative protein source. Many insect species are rich in protein, vitamins, and micronutrients. They also require significantly less land, water, and feed to produce the same amount of protein. For instance, crickets need far fewer resources than conventional livestock.

However, despite these benefits, people are increasingly moving away from insect-based foods. Urbanisation has created both physical and cultural distance from such practices. Many younger generations settled in cities are often unaware that insects are eaten even within their own home States. During conversations at the stall, insect-eating was frequently framed as something "indigenous" acknowledged but distanced. It was seen as belonging to rural communities rather than to urban food cultures. Ironically, in the regions where these practices continue, insect-based foods are neither novel nor marginal. They are seasonal, familiar, and often tied to specific occasions. From an urban lens, these foods are frequently dismissed as backward, revealing how ideas of progress shape what is considered acceptable to eat.`
    },
    {
        id: 53,
        title: "Geopolitics (Iran's Crisis)",
        content: `The recent civic unrest in Iran has been enveloped in a media fog. Yet, given Iran’s geopolitical importance, a granular exercise is required. The genesis of the ongoing crisis lies in increasingly dire eco-political conditions. It began when a group of Tehran merchants (“Bazaari”) staged a shutdown to protest the frequent devaluation of the rial. The rial's decline made importing essential commodities such as rice and medicine unprofitable. Subsequently, other dissatisfied sections joined the stir.

The dynamics in Iran expose systemic vulnerabilities. First, the Bazaari strike against the clergy-led regime was unprecedented. In Iran’s modern history, the Bazaaris have been an influential bellwether lobby; their withdrawal of support doomed the Shah in 1979. Second, the ruling elite lacks eco-political levers to fix the recurring social convulsions. The leadership's steadfast pursuit of a nuclear programme and support to regional proxies diverts scarce economic resources, causing social angst. Over two-thirds of Iranians were born after the Revolution and have different aspirations. They hold the leadership responsible for their abject penury while seeing the affluence of Gulf Arab neighbours.

Despite U.S. pressure, China and the UAE remain Iran's top trading partners. The proposed secondary sanctions by the U.S. may not curb such trade but only obfuscate it. The notion that turmoil in Tehran is inconsequential for India is misplaced. First, any conflagration in Iran would affect the security and stability in the Gulf, where India has substantive stakes in terms of diaspora, oil, and investments. Second, it would allow Pakistan to project itself as a security arbiter. Third, South Asia has the largest number of Shias, who are natural stakeholders in what happens to their Iranian co-confessionals.`
    },
    {
        id: 54,
        title: "Technology & Policy (AI & Environment)",
        content: `The use of Artificial Intelligence (AI) takes up much discussion, but concerns about its impact on the environment have not attracted much discussion. According to an OECD working paper, the development of AI algorithms comes with certain environmental costs such as an increased carbon footprint which exacerbates climate change. The report says that the global ICT industry is estimated to be responsible for 1.8%-2.8% of global greenhouse gas emissions. A Google report claims that a single text AI prompt consumes electricity of only 0.24 watt-hours. What may seem to be low levels of electricity consumption has also drawn criticism for the report’s incomplete and misleading conclusions.

In September 2024, an issue note by UNEP said that house AI servers may utilise 4.2 billion cubic meters (bcm) to 6.6 bcm of water in 2027, leading to water scarcity. The note also refers to a study which indicates that training a single Large Language Model (LLM) can generate almost 3,00,000 kilograms of carbon emissions.

Since there are global conversations about the carbon cost of AI use, India also needs to recognise the environmental costs. Current discussions focus on how AI can help protect the environment, but without going into the demerits of developing large AI algorithms. The first step is to carry out an exercise to measure the environmental impacts. In India, an Environmental Impact Assessment (EIA) is mandatory as in the EIA Notification, 2006. While an EIA is often conducted for projects like river water projects, its scope can be extended to include assessing the impact of development of AI algorithms.`
    },
    {
        id: 55,
        title: "Tech Policy & Security (Source Code)",
        content: `The newswire agency Reuters reported that the Indian government was contemplating a requirement for smartphone makers to disclose their source code to third party testing agencies, and make this code open for review. Source code is the core repository of software programmes and their associated digital assets. Also, each firm jealously guards the technology driving these respective changes. Source code is kept secret not just for commercial reasons, but also as a security measure. If a software system’s internal visibility would greatly amplify the risks of such vulnerabilities being found, especially if the source code includes detailed documentation on a system’s inner workings.

Why is such a demand controversial? It is highly unusual for source code of any kind of system to be disclosed outside a company, except perhaps in sensitive fields like defence. Apple Inc., for instance, has not disclosed its source code to the Chinese government. The Ministry of Electronics and Information Technology (MeitY) decided that the MTCTE regime (Mandatory Testing and Certification of Telecommunication Equipment) should be done away with for smartphones. However, Reuters reported that the requirement might still be pushed.

The Internet Freedom Foundation (IFF) pushed back on the government's denial, pointing out that meetings were not transparent. IFF asserts that "stakeholder consultation" cannot be limited to closed-door meetings. If the source code is opened for review, cyber attackers could find and take advantage of software vulnerabilities. As such, mobile phone operating systems, even if they are running on open source Android, do not expose every detail of their actual implementation.`
    }
];

export const DAY_14_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Edible Insects
    {
        id: 256,
        passageId: 52,
        question: "Which one of the following best captures the central \"irony\" regarding insect consumption mentioned in the passage?",
        options: [
            "Insects are rich in protein but taste terrible to urban palates.",
            "Insects are seen as a \"foreign\" or \"backward\" concept by urban Indians, even though they are a seasonal, familiar, and indigenous part of food cultures in many Indian states.",
            "Urbanisation has increased the demand for insect protein, but rural areas are unable to supply it.",
            "Insects require more water to farm than chickens, despite popular belief."
        ],
        correctAnswer: 1,
        explanation: "The irony is that urban Indians view it as \"foreign\" or \"backward\" when it is actually \"indigenous,\" \"seasonal,\" and \"familiar\" in many states."
    },
    {
        id: 257,
        passageId: 52,
        question: "The passage suggests that the reluctance to adopt \"entomophagy\" in urban India is primarily driven by:",
        options: [
            "The high cost of insect-based foods.",
            "Cultural and physical distancing caused by urbanisation, where ideas of \"progress\" frame such foods as backward.",
            "Scientific evidence showing insects are unsafe to eat.",
            "The lack of availability of insects in city markets."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Urbanisation has created both physical and cultural distance... ideas of progress shape what is considered acceptable.\""
    },
    {
        id: 258,
        passageId: 52,
        question: "According to the text, why are edible insects cited as a \"sustainable alternative protein source\"?",
        options: [
            "Because they can be genetically modified to taste like chicken.",
            "Because they are rich in micronutrients and require significantly less land, water, and feed compared to conventional livestock.",
            "Because they destroy crops and eating them saves the harvest.",
            "Because they have a longer shelf life than beef."
        ],
        correctAnswer: 1,
        explanation: "Text: \"require significantly less land, water, and feed... rich in protein.\""
    },
    {
        id: 259,
        passageId: 52,
        question: "The author notes that for many visitors at the Science Gallery, the experience of eating insects was marked by:",
        options: [
            "Immediate acceptance and enjoyment.",
            "A negotiation between curiosity, disgust, and the boundaries of what is considered \"normal\" food.",
            "Anger at being served non-vegetarian food.",
            "Indifference, as they were used to it."
        ],
        correctAnswer: 1,
        explanation: "Text: \"visitors negotiated curiosity, disgust, and the boundaries of what they consider 'normal' food.\""
    },
    {
        id: 260,
        passageId: 52,
        question: "Based on the passage, how does \"urbanisation\" affect traditional food practices like insect eating?",
        options: [
            "It promotes them as exotic delicacies.",
            "It creates a physical and cultural distance, leading to younger generations becoming unaware of or disconnected from these practices.",
            "It industrializes the process, making it more efficient.",
            "It has no impact on food choices."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Urbanisation has created... distance... younger generations... are often unaware.\""
    },
    // Passage 2: Iran
    {
        id: 261,
        passageId: 53,
        question: "The author cites the \"Bazaari strike\" as a significant indicator of the crisis because:",
        options: [
            "It caused a shortage of rice in Tehran.",
            "The Bazaaris have historically been an influential bellwether lobby, and their withdrawal of support was pivotal in dooming the Shah in 1979.",
            "The merchants are the only group supporting the nuclear programme.",
            "It proved that the sanctions were ineffective."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Bazaaris have been an influential bellwether lobby; their withdrawal of support doomed the Shah in 1979.\""
    },
    {
        id: 262,
        passageId: 53,
        question: "Which of the following is identified as a structural cause for the \"social angst\" in Iran?",
        options: [
            "The excessive import of luxury goods.",
            "The diversion of scarce economic resources toward a nuclear programme and regional proxies instead of domestic needs.",
            "The refusal of China to trade with Iran.",
            "The lack of religious education in schools."
        ],
        correctAnswer: 1,
        explanation: "Text: \"steadfast pursuit of a nuclear programme and support to regional proxies diverts scarce economic resources, causing social angst.\""
    },
    {
        id: 263,
        passageId: 53,
        question: "According to the passage, why is the turmoil in Iran consequential for India?",
        options: [
            "It threatens stability in the Gulf, impacting India's energy security and diaspora.",
            "It could allow Pakistan to gain strategic leverage as a security arbiter.",
            "It has implications for the large Shia population in South Asia.",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All three are listed: Security/Gulf stability (1), Pakistan as arbiter (2), and Shia stakeholders (3)."
    },
    {
        id: 264,
        passageId: 53,
        question: "The passage suggests that U.S. \"secondary sanctions\" on countries trading with Iran:",
        options: [
            "Will successfully stop all trade immediately.",
            "May not curb trade completely but only obfuscate it, as China and UAE remain top partners.",
            "Will lead to the collapse of the Chinese economy.",
            "Are supported by the United Nations."
        ],
        correctAnswer: 1,
        explanation: "Text: \"may not curb such trade but only obfuscate it.\""
    },
    {
        id: 265,
        passageId: 53,
        question: "What \"generational divide\" is highlighted in the text regarding the Iranian population?",
        options: [
            "The older generation wants modernization, while the youth want tradition.",
            "Over two-thirds of Iranians were born after the Revolution and have different aspirations, resenting the gerontocratic leadership for their poverty.",
            "The youth are more supportive of the nuclear programme than the elderly.",
            "There is no divide; all generations support the clergy."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Over two-thirds... born after the Revolution... have different aspirations... hold the leadership responsible for their abject penury.\""
    },
    // Passage 3: AI
    {
        id: 266,
        passageId: 54,
        question: "The primary environmental concern regarding AI highlighted in the passage is:",
        options: [
            "The noise pollution caused by server farms.",
            "The significant consumption of energy (carbon footprint) and water by AI servers and the training of Large Language Models (LLMs).",
            "The generation of electronic waste from discarded robots.",
            "The risk of AI taking over nuclear power plants."
        ],
        correctAnswer: 1,
        explanation: "Text highlights \"increased carbon footprint,\" \"greenhouse gas emissions,\" and water usage (4.2-6.6 bcm)."
    },
    {
        id: 267,
        passageId: 54,
        question: "What specific policy intervention does the author suggest for India to address the environmental cost of AI?",
        options: [
            "Banning all AI development immediately.",
            "Extending the scope of the Environmental Impact Assessment (EIA) to include the development of AI algorithms.",
            "Importing AI technology only from the European Union.",
            "Taxing every Google search."
        ],
        correctAnswer: 1,
        explanation: "Text: \"scope can be extended to include assessing the impact of development of AI algorithms [in EIA].\""
    },
    {
        id: 268,
        passageId: 54,
        question: "The passage mentions a discrepancy in reporting regarding AI's energy use. What is it?",
        options: [
            "The OECD says AI uses no energy, while UNEP says it uses too much.",
            "A Google report claims very low per-prompt consumption (0.24 Wh), which critics argue is incomplete and misleading compared to the massive aggregate footprint.",
            "Indian scientists disagree with American scientists.",
            "The government refuses to release data."
        ],
        correctAnswer: 1,
        explanation: "Text mentions Google claims 0.24 Wh per prompt, but this has drawn criticism for being \"incomplete and misleading.\""
    },
    {
        id: 269,
        passageId: 54,
        question: "According to the UNEP note mentioned in the text, the water consumption by AI servers by 2027 could lead to:",
        options: [
            "Flooding in coastal areas.",
            "Water scarcity, with usage reaching up to 6.6 billion cubic meters.",
            "Improved water quality due to AI filtering.",
            "No significant impact on water resources."
        ],
        correctAnswer: 1,
        explanation: "Text: \"leading to water scarcity.\""
    },
    {
        id: 270,
        passageId: 54,
        question: "The author argues that current discussions on AI and climate change in India are one-sided because:",
        options: [
            "They focus only on how AI can help protect the environment, ignoring the environmental costs of developing the AI itself.",
            "They focus only on the negative aspects.",
            "They are dominated by foreign NGOs.",
            "They ignore the role of the private sector."
        ],
        correctAnswer: 0,
        explanation: "Text: \"Current discussions focus on how AI can help protect the environment, but without going into the demerits...\""
    },
    // Passage 4: Source Code
    {
        id: 271,
        passageId: 55,
        question: "Why do companies typically keep their \"source code\" secret?",
        options: [
            "Because it contains illegal content.",
            "For commercial reasons (intellectual property) and as a security measure to prevent attackers from discovering internal vulnerabilities.",
            "Because the government forces them to hide it.",
            "Because it is too large to share."
        ],
        correctAnswer: 1,
        explanation: "Text: \"kept secret not just for commercial reasons, but also as a security measure... internal visibility would greatly amplify the risks.\""
    },
    {
        id: 272,
        passageId: 55,
        question: "The passage describes the government's potential demand for source code disclosure as \"controversial\" and \"highly unusual\" because:",
        options: [
            "It is standard practice in all countries except India.",
            "Such disclosure is rarely required outside of sensitive fields like defence, and even firms like Apple have refused similar demands from China.",
            "It would make smartphones cheaper.",
            "It is required by the World Trade Organization."
        ],
        correctAnswer: 1,
        explanation: "Text: \"highly unusual... except perhaps in sensitive fields... Apple Inc... has not disclosed... to Chinese government.\""
    },
    {
        id: 273,
        passageId: 55,
        question: "What is the \"security paradox\" mentioned regarding opening source code for review?",
        options: [
            "Opening the code makes it 100% secure.",
            "Opening the code for security review might actually amplify risks by making internal workings and vulnerabilities visible to cyber attackers.",
            "Security agencies do not know how to read code.",
            "Open source code is always less secure than closed source."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Cyber attackers that find... vulnerabilities... internal visibility would greatly amplify the risks.\""
    },
    {
        id: 274,
        passageId: 55,
        question: "The \"MTCTE regime\" mentioned in the passage relates to:",
        options: [
            "Mandatory tax collection from telecom companies.",
            "Mandatory Testing and Certification of Telecommunication Equipment, a bureaucratic step for importing telecom gear.",
            "A new trade treaty with the US.",
            "The censorship of internet content."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Mandatory Testing and Certification of Telecommunication Equipment... bureaucratic step for importing.\""
    },
    {
        id: 275,
        passageId: 55,
        question: "The Internet Freedom Foundation (IFF) criticizes the government's approach primarily for:",
        options: [
            "Being too slow.",
            "Lack of transparency in meetings and limiting \"stakeholder consultation\" to closed-door meetings with big tech giants.",
            "Not asking for enough data.",
            "Charging high fees for certification."
        ],
        correctAnswer: 1,
        explanation: "Text: \"meetings... were not transparently conducted... consultation cannot be limited to closed-door meetings.\""
    }
];

export const DAY_14_SESSION = {
    day: 14,
    title: "Eco-Food, Iran Crisis & AI Carbon Cost",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Entomophagy (Edible Insects)", "Iran's Eco-Political Crisis", "AI Environmental Impact", "Source Code Privacy"]
};
