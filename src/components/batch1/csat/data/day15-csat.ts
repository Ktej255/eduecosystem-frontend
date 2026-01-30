// UPSC CSAT Practice Set - Day 15 (January 15)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_15_PASSAGES: CSATPassage[] = [
    {
        id: 56,
        title: "Frontier Physics (The \"Smoking Gun\" Problem)",
        content: `Imagine you are a detective looking for proof of something extraordinary. You find what looks like the perfect clue, a "smoking gun" that seems to prove your theory. But what if that clue could be explained by something more ordinary? Many physicists around the world are trying to create and identify special materials with unusual electronic properties called topological materials. They could potentially revolutionise quantum computing, but finding them also requires a willingness to question initial results that seem too good to be true. There have already been many high-profile cases in this area where physicists have announced sensational findings only to withdraw them later after independent scientists spotted mistakes or even fraud. Recently, physicist Ranga Dias was found to have fabricated data to claim a room-temperature superconductor.

The authors of a new review in Science have called this the "smoking gun" problem. Scientists predict what a dramatic discovery should look like, then go searching for that pattern. But at the atomic scale, there are so many things happening that they can accidentally find patterns that match their expectations even when the exotic physics they’re looking for isn’t actually there. To understand how, the team performed four experiments with deceptively exciting signals. At the 'nanoscopic' scale at which topological effects play out, materials are complicated and different effects can create apparently similar patterns.

For instance, the race to be the first to claim an exciting finding is the cause of the tumult. In one case, researchers looked for Majorana particles—quantum particles that are their own antiparticles. They looked for peaks on a graph. But later work revealed that ordinary effects could cause fleeting peaks that looked like the "smoking gun." When researchers measured over wider ranges of conditions and collected more data, the exciting signals probably weren't evidence of exotic physics. The review suggests that researchers should look for data to confirm their hypothesis as well as search for conditions in which the effect should disappear.`
    },
    {
        id: 57,
        title: "International Relations (Minerals Diplomacy)",
        content: `Today, India's clean energy transitions are impossible without imported critical minerals and rare earths. The country needs these minerals now, and China's tightening export controls only heighten the urgency. Just like other countries around the world, India is also committing to diversify mineral trade linkages. India needs a two-pronged strategy to build long-term capability at home while securing immediate access abroad. Realising this, New Delhi has pursued close to a dozen bilateral and multilateral partnerships. The question is what these engagements have delivered.

Some partnerships have advanced more meaningfully than others. Australia emerges as reliable, offering political stability, large reserves, and a strategic vision. Cooperation here is active with long-term supply discussions and targeted investments. In 2022, under the India-Australia Critical Minerals Investment Partnership, the two countries identified five target projects for potential investment in lithium and cobalt. Japan provides a template for resilience, exemplifying an institutional model for long-term planning rather than reactive deals. When China restricted rare earth exports to Tokyo a decade ago, Japan responded with diversification, stockpiling, and sustained research.

However, competition for Indian companies is intense. In Africa, given long-standing trade linkages, nations offer similar opportunities with mineral abundance. But India must approach Africa with a long-term industrial mindset or risk losing ground to more coordinated competitors. Despite political enthusiasm around "friend-shoring", cooperation with the United States has struggled to move beyond dialogue. The volatility of U.S. trade policy makes it hard for New Delhi to rely on Washington. Meanwhile, Russia's reserves of rare earths, cobalt, and lithium are substantial, but sanctions and financing challenges constrain reliability. Russia could be an important hedge, not a foundation.`
    },
    {
        id: 58,
        title: "Social Justice (Mentoring & Education)",
        content: `India stands at a pivotal moment. More than 40 million young people are in higher education, and over 10 million are entering the labour market every year. It is crucial that we equip them with the skills, confidence, and networks they need to thrive. Recent policy initiatives reflect a growing focus on strengthening the education-to-employment pipeline. But policy and infrastructure alone cannot bridge the gap between learning and livelihood. This gap is deeply human. It shows up in the fears, uncertainties, and limited exposure that young people, especially first-generation learners, carry as they step into adulthood.

The answer lies in mentoring. Mentoring bridges the space between what systems provide and what young people need at a personal level: someone who listens, helps them articulate aspirations, and navigates uncertainty alongside them. Mentoring has particular resonance for India because it responds directly to inequalities in access to opportunity. LinkedIn data show that the median network strength for men is 8.3 percentile points higher than that of women, and job seekers are four times more likely to secure employment where they already have connections.

The time is ripe for India to launch a national mentoring movement. This requires massive collective action. Governments can create the policy architecture that enables mentoring to become a structural part of education, skilling, and employment systems. Non-profits build training frameworks. Corporates can mobilise volunteers. When companies embed mentoring within CSR and leadership development strategies, they strengthen young people’s access to opportunity while building empathetic leaders within their own workforce. Researchers can test what works. Ultimately, if even a fraction of India’s working professionals mentor one young person a year, we could unlock a shift in opportunity.`
    },
    {
        id: 59,
        title: "Environment (Illegal Mining)",
        content: `The districts in Rajasthan, which host roughly 70% of the entire Aravalli range, are suffering from a disproportionately high volume of illegal mining. While these Aravalli districts account for less than 45% of the State’s mining leases and contribute only 40% of its total mineral output, their share of illegal mining cases exceeds 56%. The Aravalli districts also account for more than 77% of all First Information Reports (FIRs) lodged for illegal mining in the State. Clearly, the Aravalli landscape is the epicentre of Rajasthan’s mining crisis.

Recent proposed changes to the legal definition of what constitutes an ‘Aravalli hill’ threaten to further aggravate this situation by potentially removing protections against mining from vast stretches of the range. Ironically, the changes proposed were actually initiated as a measure to curb illegal mining in the first place. The Aravalli hills, among the oldest mountain systems in the world, have been the focus of an ongoing legal and policy dispute over their definition. In May 2024, the Supreme Court observed that the lack of a consistent definition has been a key factor enabling illegal mining.

Since 2010, expert agencies like the Forest Survey of India (FSI) have identified the Aravalli hills based on physical parameters: a slope greater than three degrees, a 100-metre foothill buffer, and an inter-hill distance of 500 metres. However, a technical committee in 2024 suggested a different approach, suggesting that only landforms with a slope of at least 4.57 degrees and a height of at least 30 metres be identified as an Aravalli hill. This reclassification carries significant implications. If a landform is no longer classified as part of the Aravallis, it falls outside the specific mining controls and moratorium linked to the Aravalli framework.`
    }
];

export const DAY_15_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Physics
    {
        id: 276,
        passageId: 56,
        question: "What is the \"smoking gun\" problem in topological physics described in the passage?",
        options: [
            "The issue of scientists using guns to destroy their equipment.",
            "The tendency of researchers to find data patterns that match their expectations for a dramatic discovery (like a \"perfect clue\") while overlooking ordinary effects that could create the same pattern.",
            "The proven fact that topological materials are dangerous and radioactive.",
            "The lack of funding for quantum computing research."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Scientists predict what a dramatic discovery should look like... can accidentally find patterns that match their expectations... ordinary effects can create apparently similar patterns.\""
    },
    {
        id: 277,
        passageId: 56,
        question: "The passage mentions the case of \"Majorana particles\" to illustrate:",
        options: [
            "A successful discovery that revolutionized quantum computing immediately.",
            "How ordinary effects can create fleeting signals (peaks) that mimic the expected \"smoking gun\" of exotic physics, leading to false positives if not rigorously tested.",
            "The first particle to be discovered using a room-temperature superconductor.",
            "That antiparticles do not exist in reality."
        ],
        correctAnswer: 1,
        explanation: "How ordinary effects can create fleeting signals (peaks) that mimic the expected \"smoking gun\" of exotic physics, leading to false positives if not rigorously tested."
    },
    {
        id: 278,
        passageId: 56,
        question: "According to the text, what recommendation do the authors of the review make to avoid these errors?",
        options: [
            "Scientists should stop sharing their data with others.",
            "Researchers should only publish results that are sensational.",
            "Researchers should look for data to confirm their hypothesis and search for conditions in which the effect should disappear or change, confirming it isn't a fluke.",
            "Scientists should rely solely on computer simulations instead of experiments."
        ],
        correctAnswer: 2,
        explanation: "Text: \"researchers should look for data to confirm their hypothesis as well as search for conditions in which the effect should disappear.\""
    },
    {
        id: 279,
        passageId: 56,
        question: "The \"nanoscopic scale\" is cited as a contributing factor to the problem because:",
        options: [
            "Materials at this scale are too small to be seen.",
            "At this scale, materials are complicated, and different ordinary effects can create patterns that apparently resemble exotic topological effects.",
            "Nanoscopic materials always behave predictably.",
            "Microscopes are not powerful enough to see atoms."
        ],
        correctAnswer: 1,
        explanation: "Text: \"At the 'nanoscopic' scale... materials are complicated and different effects can create apparently similar patterns.\""
    },
    {
        id: 280,
        passageId: 56,
        question: "The passage implies that the \"tumult\" (high-profile retractions/mistakes) in the field is partly driven by:",
        options: [
            "The government banning research.",
            "The race to be the first to claim an exciting finding, fueled by high stakes like Nobel Prizes or funding.",
            "The lack of intelligent scientists in the field.",
            "The shortage of topological materials."
        ],
        correctAnswer: 1,
        explanation: "Text: \"race to be the first to claim an exciting finding is the cause of the tumult.\""
    },
    // Passage 2: Minerals
    {
        id: 281,
        passageId: 57,
        question: "Which country is cited as a \"template for resilience\" in handling critical mineral supply shocks?",
        options: [
            "The United States, due to its \"friend-shoring\" policy.",
            "Japan, due to its institutional model of diversification, stockpiling, and research following China's export restrictions.",
            "Russia, due to its vast reserves of cobalt.",
            "Argentina, due to the KABIL agreement."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Japan provides a template for resilience, exemplifying an institutional model... rather than reactive deals.\""
    },
    {
        id: 282,
        passageId: 57,
        question: "According to the passage, what is the primary limitation of the partnership with the United States regarding critical minerals?",
        options: [
            "The U.S. has no critical minerals to offer.",
            "Cooperation has struggled to move beyond dialogue, and the volatility of U.S. trade policy makes reliance difficult.",
            "The U.S. has banned all exports to India.",
            "India prefers to trade only with China."
        ],
        correctAnswer: 1,
        explanation: "Text: \"cooperation with the United States has struggled to move beyond dialogue. The volatility of U.S. trade policy makes it hard for New Delhi to rely on Washington.\""
    },
    {
        id: 283,
        passageId: 57,
        question: "The passage suggests that India's engagement with Africa for minerals requires:",
        options: [
            "A focus on short-term extraction only.",
            "A long-term industrial mindset to avoid losing ground to coordinated competitors.",
            "Ignoring local value creation demands.",
            "Relying solely on private sector investments without government support."
        ],
        correctAnswer: 1,
        explanation: "Text: \"India must approach Africa with a long-term industrial mindset or risk losing ground to more coordinated competitors.\""
    },
    {
        id: 284,
        passageId: 57,
        question: "What is the status of Russia in India's critical mineral strategy, as described in the text?",
        options: [
            "It is the primary foundation of India's supply chain.",
            "It is an irrelevant player with no resources.",
            "It serves as an important \"hedge\" rather than a foundation, due to constraints like sanctions and financing challenges.",
            "It has formed a monopoly with India to control global prices."
        ],
        correctAnswer: 2,
        explanation: "Text: \"Russia could be an important hedge, not a foundation... sanctions, financing challenges... constrain reliability.\""
    },
    {
        id: 285,
        passageId: 57,
        question: "The \"India-Australia Critical Minerals Investment Partnership\" (2022) focused on:",
        options: [
            "Identifying target projects for potential investment in lithium and cobalt.",
            "Buying Australian coal mines.",
            "Exporting Indian labor to Australia.",
            "Sharing nuclear technology."
        ],
        correctAnswer: 0,
        explanation: "Text: \"identified five target projects for potential investment in lithium and cobalt.\""
    },
    // Passage 3: Mentoring
    {
        id: 286,
        passageId: 58,
        question: "The \"gap\" between learning and livelihood described in the passage is characterized as \"deeply human\" because:",
        options: [
            "It is caused by a lack of robots in the workplace.",
            "It manifests in the fears, uncertainties, and limited exposure/networks of young people, especially first-generation learners.",
            "It is a biological difference between generations.",
            "It refers to the lack of physical strength in the workforce."
        ],
        correctAnswer: 1,
        explanation: "Text: \"This gap is deeply human. It shows up in the fears, uncertainties, and limited exposure... especially first-generation learners.\""
    },
    {
        id: 287,
        passageId: 58,
        question: "The passage cites LinkedIn data to highlight which specific inequality?",
        options: [
            "Men earn higher salaries than women for the same job.",
            "Women have stronger networks than men in the technology sector.",
            "The median network strength for men is higher than that of women, and existing connections significantly increase the likelihood of securing employment.",
            "Job seekers without connections are four times more likely to get jobs."
        ],
        correctAnswer: 2,
        explanation: "Text: \"median network strength for men is 8.3 percentile points higher... job seekers are four times more likely to secure employment where they already have connections.\""
    },
    {
        id: 288,
        passageId: 58,
        question: "According to the author, what role should \"mentoring\" play in the Indian education system?",
        options: [
            "It should be an optional activity for students who are failing.",
            "It should become a structural part of education, skilling, and employment systems, not just an extra component.",
            "It should replace formal classroom teaching entirely.",
            "It should be paid for by the students."
        ],
        correctAnswer: 1,
        explanation: "Text: \"enables mentoring to become a structural part of education... not just an extra.\""
    },
    {
        id: 289,
        passageId: 58,
        question: "How does embedding mentoring in Corporate Social Responsibility (CSR) benefit the companies themselves, according to the text?",
        options: [
            "It allows them to save tax money without doing any work.",
            "It builds empathetic, skilled leaders within their own workforce while strengthening access to opportunity for youth.",
            "It reduces the need for hiring new employees.",
            "It is a legal requirement under the Companies Act."
        ],
        correctAnswer: 1,
        explanation: "Text: \"strengthen young people’s access to opportunity while building empathetic leaders within their own workforce.\""
    },
    {
        id: 290,
        passageId: 58,
        question: "The central proposal of the passage is:",
        options: [
            "To reduce the number of students in higher education.",
            "To launch a national mentoring movement involving government, non-profits, and corporates to bridge the opportunity gap.",
            "To ban LinkedIn because it promotes inequality.",
            "To make internships mandatory for all students."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The time is ripe for India to launch a national mentoring movement. This requires massive collective action... Governments... Non-profits... Corporates.\""
    },
    // Passage 4: Mining
    {
        id: 291,
        passageId: 59,
        question: "The data presented in the passage highlights a \"disproportionate\" impact on Aravalli districts because:",
        options: [
            "They produce 90% of the state's minerals but have no illegal mining.",
            "They account for a minority of mining leases (45%) and output (40%) but a majority of illegal mining cases (>56%) and FIRs (>77%).",
            "They have fewer police stations than other districts.",
            "They are not part of Rajasthan."
        ],
        correctAnswer: 1,
        explanation: "Text: \"account for less than 45% of the State’s mining leases... but their share of illegal mining cases exceeds 56%.\""
    },
    {
        id: 292,
        passageId: 59,
        question: "What is the potential risk of the \"new technical committee\" proposal regarding the definition of Aravalli hills?",
        options: [
            "It would classify the entire state of Rajasthan as a protected hill.",
            "It suggests stricter parameters (steeper slope, minimum height) which might de-classify many landforms as \"Aravalli hills,\" removing them from specific mining protections.",
            "It bans mining in all of India.",
            "It uses satellite imagery which is inaccurate."
        ],
        correctAnswer: 1,
        explanation: "Text: \"suggesting that only landforms with a slope of at least 4.57 degrees... be identified... If a landform is no longer classified... it falls outside the specific mining controls.\""
    },
    {
        id: 293,
        passageId: 59,
        question: "The Supreme Court's observation in May 2024 identified which factor as a key enabler of illegal mining?",
        options: [
            "The lack of police personnel.",
            "The lack of a consistent definition of the Aravalli hills.",
            "The high price of minerals in the global market.",
            "The absence of fencing around the hills."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Supreme Court observed that the lack of a consistent definition has been a key factor enabling illegal mining.\""
    },
    {
        id: 294,
        passageId: 59,
        question: "Why is the classification of a landform as \"Aravalli hill\" legally significant?",
        options: [
            "Because it determines the tax rate for the land.",
            "Because if it is classified as part of the Aravallis, it falls under specific mining controls and moratoriums; if not, it loses those protections.",
            "Because only Aravalli hills can be used for tourism.",
            "Because the government owns all Aravalli hills."
        ],
        correctAnswer: 1,
        explanation: "Text: \"falls out side the specific mining controls and moratorium linked to the Aravalli framework.\""
    },
    {
        id: 295,
        passageId: 59,
        question: "The passage states that the Aravalli landscape is the \"epicentre\" of which crisis?",
        options: [
            "Rajasthan's water crisis.",
            "Rajasthan's mining crisis (specifically illegal mining).",
            "The agricultural crisis in North India.",
            "The tourism crisis in Jaipur."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Clearly, the Aravalli landscape is the epicentre of Rajasthan’s mining crisis.\""
    }
];

export const DAY_15_SESSION = {
    day: 15,
    title: "Quantum Physics, Job Mentoring & Mining Crisis",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Topological Physics (Majorana)", "Critical Minerals Strategy", "National Mentoring Movement", "Aravalli Mining Crisis"]
};
