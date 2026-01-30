// UPSC CSAT Practice Set - Day 08 (January 8)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_08_PASSAGES: CSATPassage[] = [
    {
        id: 29,
        title: "Conservation Models (Private Reserves)",
        content: `Private reserves are popular in Africa. In India, however, with 'eco-tourism' labels being used in arbitrary ways, responsible private reserves are more about potential than reality. In dissecting how wildlife returned to Jabarkhet Nature Reserve (JNR) and how it has balanced tourism needs with conservation, it is possible to trace a model for private reserves in India. More than 40 years ago, alarmed by massive deforestation in the hills, the government called for a ban on tree-cutting above 1,000 metres. The Jabarkhet Estate, privately owned, lay unused and largely unmanaged.

In 2013, the owners created a working plan. "We removed 500 kg of garbage... Three tonnes of the weed Eupatorium were removed," said co-founder Sejal Worah. The reserve, which now offers affordable ticketed trails, started with selecting people from neighbouring villages, training them to be guides, and employing them for restoration. This was new for the area, a combination of traditional skills of deeply knowing the mountains and learning bird names in English.

Is it possible that you could stroll around at your own pace, in restored woodland, a place where wildlife gets the right of way, away from mass tourism? JNR suggests yes. In the intervening years, the forest recovered. True to its Himalayan roots, the area now hosts insectivorous sundews, ground orchids, and over 150 bird species. This is more significant when we realise that places known for their natural beauty, whether the Himalayas or the Aravallies, are increasingly being cut up for mining and commercial projects. In the Himalaya, widening roads for tourism causes landslides every year. Can we see a rise of private reserves in India where wildlife gets the right of way? JNR offers a stepping stone.`
    },
    {
        id: 30,
        title: "Internal Security (NATGRID & Surveillance)",
        content: `We tend to quantify the tragedy of the 26/11 terror attack by the lives lost. But out of that psychological aftershock emerged the technological "crown jewel": the National Intelligence Grid (NATGRID). Its premise was a middleware interface allowing 11 central agencies to query databases across 21 categories (bank, travel, telecom). Yet, on June 14, 2012, NATGRID was cleared not through an Act of Parliament, but by executive order. For years, it was believed to be 'vaporware'. But two recent reports in 2025 reveal a quantitative expansion: NATGRID receives 45,000 requests monthly, and access is being widened to police units down to the rank of Superintendent of Police.

The second development is even more unsettling: the reported integration of NATGRID with the National Population Register (NPR). The NPR is a repository with details of 1.19 billion residents, a "relational cartography" of households and lineages. Grafting a population register onto an intelligence query platform crosses a fundamental boundary. It shifts the paradigm from tracking discrete events to mapping every Indian. NATGRID’s evolution is unfolding amid rapid advances in machine learning. Paired with facial recognition that can trawl telecom KYC databases, this changes the nature of the risk. Here, intentions are subjectively determined by an algorithm.

The danger of modern analytics is not omniscience, but ubiquity. NATGRID reportedly classifies queries by sensitivity. But without independent scrutiny, these are facial safeguards. When tens of thousands of requests are processed each month, logging risks becoming a clerical ritual. For a young Muslim man in a small town, an automated “hit” (false positive) can trigger an ordeal. We need professional investigation insulated from political whims and oversight vested within the judiciary, not an architecture of suspicion built in the name of safety.`
    },
    {
        id: 31,
        title: "Public Health (Antimicrobial Resistance)",
        content: `Will Prime Minister Narendra Modi’s statement on antimicrobial resistance (AMR) in his last ‘Mann Ki Baat’ broadcast be the anagnorisis (discovery/recognition) that we have been waiting for? By invoking national data and appealing directly to citizens to avoid over-the-counter antibiotics, the speech translates lab-based warnings into a public call to action. Striking at the broadest base (public awareness) is key. But merely hitting the base will no longer be sufficient. The AMR crisis has grown like a hydra-headed beast; it needs a One Health approach where cognition of the interconnectedness of human, animal, and environmental health shapes solutions.

However, a critical gap remains: surveillance. For the recent GLASS report (reporting period Jan-Dec 2023), information was gathered from 41 sites. The NARS-Net surveillance network includes government medical colleges. These labs submit data on priority bacterial pathogens. But as experts point out, while the network is expanding, there is still no exhaustive dataset for India as a whole. Surveillance sites are located largely in urban centres and tertiary care centres. This may drive up the average, as the bulk of non-urban centres are not accounted for.

Professor Abdul Ghafur notes that the only credible approach is to present true national data — inclusive of secondary and primary care centres across the country, and private hospitals too. If such data are included, the national resistance picture will naturally be more balanced. The urgent need is to expand the surveillance network to provide a reasonably accurate position of community prevalence of AMR in India.`
    },
    {
        id: 32,
        title: "Environment (Climate Targets)",
        content: `While India has achieved meaningful progress on specific metrics, they also obscure fundamental problems. Using 2005 as baseline, emissions intensity decreased by approximately 36% by 2020, enabling India to meet its original target well ahead of 2030. However, intensity gains still coexist with persistently high absolute emissions. This phenomenon exists because of "incomplete decoupling": GDP growth has outpaced emissions growth, so intensity declined, but without an economy-wide absolute fall.

India's renewable capacity scale-up is dramatic (175 GW target was nearly met), but it does not yet replace fossil baseload. Crucially, electricity generation lags capacity – renewables supplied roughly 22% of electricity in 2024-25 despite greater than 50% non-fossil capacity. This is because of lower capacity factors (solar/wind don't run 24/7) and storage shortfalls. Consequently, coal remains the backbone, with thermal capacity continuing to expand.

Regarding carbon sinks, the Forest Survey of India's definition of "forest cover" includes any land of more than one hectare with overstory 10% canopied. This includes eucalyptus monocultures, plantations of mango, and roadside trees. Satellite imagery indicating a 7,15,343 sq km forest cover confuses ecological performance with administrative designation. Plantations are dominated by monocultures which do not capture the definition's elasticity or biodiversity outcomes. Furthermore, under the Compensatory Afforestation Fund Act (2016), huge funds have accumulated, but unequal implementation remains a challenge.`
    }
];

export const DAY_08_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Private Reserves
    {
        id: 141,
        passageId: 29,
        question: "Which of the following best describes the \"Jabarkhet Model\" of conservation as presented in the passage?",
        options: [
            "A government-led initiative to ban all human activity in the Himalayas to prevent landslides.",
            "A private initiative that combines ecological restoration (weed/garbage removal) with community involvement (local employment) and regulated, low-impact tourism.",
            "A commercial project focused on building luxury resorts with \"eco-tourism\" labels to maximize profit.",
            "A strict \"no-entry\" zone where neither tourists nor locals are allowed."
        ],
        correctAnswer: 1,
        explanation: "The text describes JNR as a \"model\" involving \"restoration\" (weed removal), employing locals (\"training them to be guides\"), and enabling regulated tourism."
    },
    {
        id: 142,
        passageId: 29,
        question: "The author contrasts Jabarkhet Nature Reserve (JNR) with \"mass tourism\" in the Himalayas. What is the primary negative impact of the latter mentioned in the text?",
        options: [
            "It leads to the extinction of the Eupatorium weed.",
            "It causes massive deforestation above 1,000 metres.",
            "It involves infrastructure projects like widening roads which trigger landslides.",
            "It prevents local villagers from learning English."
        ],
        correctAnswer: 2,
        explanation: "The text explicitly states: \"In the Himalaya, widening roads for activities like tourism causes landslides every year.\""
    },
    {
        id: 143,
        passageId: 29,
        question: "The passage mentions the removal of Eupatorium. In this context, Eupatorium is likely:",
        options: [
            "An endangered medicinal plant that was poached.",
            "An invasive weed that needed to be cleared to restore the natural ecosystem.",
            "A type of plastic waste left by tourists.",
            "A traditional crop grown by the villagers."
        ],
        correctAnswer: 1,
        explanation: "Context: \"Three tonnes of the weed Eupatorium were removed... The reserve... restoration...\". In this context, it refers to an invasive species."
    },
    {
        id: 144,
        passageId: 29,
        question: "According to the passage, why is the success of JNR considered \"significant\" in the current context?",
        options: [
            "Because it proves that private reserves are more profitable than mining.",
            "Because it offers a model of conservation in a time when natural landscapes (Himalayas/Aravallis) are increasingly threatened by mining and commercial projects.",
            "Because it is the first time a leopard has been sighted in Mussoorie.",
            "Because it has successfully banned all private ownership of land in Uttarakhand."
        ],
        correctAnswer: 1,
        explanation: "The text says it is \"more significant when we realise that places known for their natural beauty... are increasingly being cut up for mining and commercial projects.\""
    },
    {
        id: 145,
        passageId: 29,
        question: "What role did the local community play in the restoration of Jabarkhet?",
        options: [
            "They were evicted from the land to make space for wildlife.",
            "They were employed for restoration work and trained as guides, combining traditional knowledge with new skills.",
            "They were fined for cutting trees in the past.",
            "They were the primary investors who funded the project."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"started with selecting people from neighbouring villages, training them to be guides, and employing them for restoration.\""
    },
    // Passage 2: NATGRID
    {
        id: 146,
        passageId: 30,
        question: "The author uses the term \"digital authoritarianism\" in the context of characterize NATGRID primarily because:",
        options: [
            "It uses digital technology to speed up passport verification.",
            "It operates without a statutory framework (Act of Parliament), lacks independent oversight, and risks creating an \"architecture of suspicion\" via mass surveillance.",
            "It is owned by a private company rather than the government.",
            "It was created immediately after the 26/11 attacks."
        ],
        correctAnswer: 1,
        explanation: "The text links the risks of the system to: \"no statutory framework... executive order... lack of autonomous oversight... architecture of suspicion.\""
    },
    {
        id: 147,
        passageId: 30,
        question: "What specific \"fundamental boundary\" is crossed by the integration of NATGRID with the National Population Register (NPR), according to the passage?",
        options: [
            "The boundary between state and central government powers.",
            "The shift from tracking \"discrete events\" (intelligence inputs) to \"mapping every Indian\" (mass surveillance of households/lineages).",
            "The boundary between civilian and military intelligence.",
            "The financial boundary, as NPR data is expensive to maintain."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"It shifts the paradigm from tracking discrete events as intelligence inputs to the mapping every Indian.\""
    },
    {
        id: 148,
        passageId: 30,
        question: "The passage highlights the risk of \"false positives\" in the context of algorithmic surveillance. What does this imply?",
        options: [
            "The algorithm correctly identifies a terrorist who is actually innocent.",
            "The algorithm identifies an innocent person as a threat (a \"hit\") due to bias or error, causing harassment/misidentification.",
            "The algorithm fails to identify a real terrorist.",
            "The algorithm crashes due to too much data."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"For a young Muslim man... an automated 'hit' can trigger an ordeal and misidentification... false positive.\""
    },
    {
        id: 149,
        passageId: 30,
        question: "The author argues that \"logging risks becoming a clerical ritual\". This suggests that:",
        options: [
            "The logs are kept in paper files which are hard to read.",
            "The sheer volume of requests (45,000/month) makes effective oversight or scrutiny of why data was accessed impossible in practice.",
            "Clerks are not trained to use computers.",
            "Logging is unnecessary because the police are always right."
        ],
        correctAnswer: 1,
        explanation: "The text argues: \"When tens of thousands of requests are processed each month, logging risks becoming a clerical ritual particularly in the absence of autonomous oversight.\""
    },
    {
        id: 150,
        passageId: 30,
        question: "Which of the following is NOT a safeguard proposed by the author to fix the issues with NATGRID?",
        options: [
            "Oversight vested within the parliamentary and the judiciary.",
            "Transparency about intelligence lapses.",
            "Increasing the number of police units with access to the data.",
            "A statutory framework (Act of Parliament) instead of an executive order."
        ],
        correctAnswer: 2,
        explanation: "Increasing access (widening to SP rank) is listed as a risk/problem (\"Worse, access... is being widened\"), not a safeguard."
    },
    // Passage 3: AMR
    {
        id: 151,
        passageId: 31,
        question: "The passage suggests that the current AMR surveillance data (NARS-Net/GLASS) might be skewed or unrepresentative because:",
        options: [
            "It relies heavily on data from urban tertiary care centres (large government hospitals), missing non-urban and primary/secondary care settings.",
            "The laboratories use outdated equipment.",
            "Private hospitals refuse to share data due to patient privacy.",
            "The Prime Minister has not authorized the collection of rural data."
        ],
        correctAnswer: 0,
        explanation: "The text states: \"Surveillance sites are located largely in urban centres and tertiary care centres... drive up the average as the bulk of non-urban centres are not accounted for.\""
    },
    {
        id: 152,
        passageId: 31,
        question: "What does the \"One Health\" approach mentioned in the passage entail?",
        options: [
            "A policy where only one hospital treats all diseases in a district.",
            "A unified health insurance scheme for all citizens.",
            "An approach that recognizes the interconnectedness of human, animal, and environmental health in tackling AMR.",
            "A ban on using antibiotics in animals completely."
        ],
        correctAnswer: 2,
        explanation: "The text defines it: \"cognition of the interconnectedness of human, animal, and environmental health now actively shapes solutions.\""
    },
    {
        id: 153,
        passageId: 31,
        question: "The author uses the term \"anagnorisis\" to describe the Prime Minister's speech. In this context, it implies:",
        options: [
            "A moment of confusion regarding the policy.",
            "A moment of critical recognition or discovery that galvanizes action on a long-ignored issue.",
            "A formal declaration of a medical emergency.",
            "A denial of the existence of the problem."
        ],
        correctAnswer: 1,
        explanation: "The text asks if it will be the \"anagnorisis... we have been waiting for to galvanise action,\" implying a moment of recognition leading to action."
    },
    {
        id: 154,
        passageId: 31,
        question: "According to the passage, why is \"striking at the broadest base\" (public awareness) considered key?",
        options: [
            "Because doctors are already fully aware and need no further training.",
            "Because the \"thoughtless and indiscriminate use of antibiotics by people\" (popping pills) is a major driver of the crisis.",
            "Because it is the cheapest way to solve the problem.",
            "Because pharmaceutical companies sponsor these campaigns."
        ],
        correctAnswer: 1,
        explanation: "The text quotes the PM: \"thoughtless and indiscriminate use of antibiotics by people\" and notes the speech translates warnings into a \"public call to action.\""
    },
    {
        id: 155,
        passageId: 31,
        question: "Which specific recommendation is made to make the \"national resistance picture\" more balanced?",
        options: [
            "Stop collecting data from government hospitals.",
            "Include data from secondary/primary care centres and private hospitals to capture community prevalence.",
            "Rely solely on WHO estimates instead of national data.",
            "Focus only on fungal pathogens instead of bacterial ones."
        ],
        correctAnswer: 1,
        explanation: "The text cites Dr. Abdul Ghafur: \"data not limited to tertiary care... inclusive of secondary and primary care... and private hospitals.\""
    },
    // Passage 4: Climate Targets
    {
        id: 156,
        passageId: 32,
        question: "What does the term \"incomplete decoupling\" refer to in the passage?",
        options: [
            "The failure to connect renewable energy grids to the main power grid.",
            "A situation where emissions intensity (emissions per unit of GDP) falls, but total absolute emissions continue to rise because the economy is growing faster than emissions are being cut.",
            "The separation of the Ministry of Environment from the Ministry of Power.",
            "The disconnect between India's climate promises and its actual actions."
        ],
        correctAnswer: 1,
        explanation: "The text explains: \"GDP growth has outpaced emissions growth, so intensity declined... without an economy-wide absolute fall.\""
    },
    {
        id: 157,
        passageId: 32,
        question: "The passage highlights a discrepancy between \"non-fossil capacity\" (>50%) and \"electricity generation\" (~22%). What is the primary reason for this gap?",
        options: [
            "Corruption in the energy sector.",
            "The lower \"capacity factors\" of renewables (intermittency) and lack of storage, compared to the consistent \"baseload\" nature of coal.",
            "The refusal of state governments to buy renewable power.",
            "The shutdown of nuclear power plants."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"because of lower capacity factors and storage shortfalls; thermal (primarily coal) capacity... provides baseload.\""
    },
    {
        id: 158,
        passageId: 32,
        question: "Why does the author criticize the Forest Survey of India's definition of \"forest cover\"?",
        options: [
            "Because it excludes mangrove forests.",
            "Because it is too strict and excludes urban trees.",
            "Because it is too broad/elastic, counting monoculture plantations (mango, eucalyptus) as \"forests,\" which masks the lack of true ecological restoration/biodiversity.",
            "Because it relies on manual counting instead of satellite imagery."
        ],
        correctAnswer: 2,
        explanation: "The text criticizes the definition (\"includes any land... with overstory 10%\") because it \"confuses ecological performance with administrative designation\"."
    },
    {
        id: 159,
        passageId: 32,
        question: "Based on the passage, what is the role of \"coal\" in India's current energy mix?",
        options: [
            "It has been completely phased out.",
            "It remains the \"backbone\" providing baseload power, with thermal capacity continuing to expand despite the growth of renewables.",
            "It is used only for cooking, not electricity generation.",
            "It is being replaced entirely by nuclear energy."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"In contrast, coal generates constant 'baseload' electricity... backbone remains the 253 GW of coal-based capacity.\""
    },
    {
        id: 160,
        passageId: 32,
        question: "The passage suggests that meeting the \"emissions intensity\" target:",
        options: [
            "Is the final goal of climate action.",
            "Is a metric that can obscure the reality of rising absolute emissions.",
            "Is impossible for a developing country like India.",
            "Requires a reduction in GDP growth."
        ],
        correctAnswer: 1,
        explanation: "The text opens with: \"While India has achieved meaningful progress on specific metrics [intensity], they also obscure fundamental problems [absolute emissions].\""
    }
];

export const DAY_08_SESSION = {
    day: 8,
    title: "Conservation, Security, AMR & Climate",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Private Reserves", "NATGRID Risks", "AMR Crisis", "Climate Metrics"]
};
