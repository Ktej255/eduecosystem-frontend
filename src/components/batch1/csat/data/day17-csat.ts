// UPSC CSAT Practice Set - Day 17 (January 17)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_17_PASSAGES: CSATPassage[] = [
    {
        id: 60,
        title: "Economic Policy (Budget 2026-27)",
        content: `India faced global headwinds in 2025 but belied fears that America’s 50% tariffs would hurt its economy. The resilience of the Indian economy had a lot to do with the government’s reformist measures. Budget 2026-27 can give a fillip to the mission by prioritising growth-enhancing productive capital expenditure and social sector spending, while maintaining the fiscal consolidation glide path.

First, the government should continue the focus on defence, with higher expenditure on capex. The share of capital outlay in defence should be enhanced to 30%. Private enterprises have played a key role in augmenting defence exports, contributing nearly 65% of total defence exports in 2024-25. Second, a transition toward clean energy, semiconductors and strategic technologies is driving a demand for critical minerals. The National Critical Mineral Mission (NCMM), approved in early 2025, provides a foundation. This can be supplemented by a dedicated critical minerals tailings recovery programme under the NCMM.

Third, measures to address disputes pendency need to be prioritised. The first appellate level in direct tax disputes, the office of the Commissioner of Income Tax (Appeals), is facing severe pendency. There is a need to prioritise high-pitched assessments and cases with complete submissions. The need is a "dual-track disposal system": a fast-track for simple or low-value matters and a detailed track for complex or high-value matters. Also, around 40% vacancies at the CIT(A) level need to be filled. Finally, deepening the corporate bond markets is critical for diversification of finance credit beyond the banking system. The government could consider lowering the qualifying borrowing threshold to widen the issuer base.`
    },
    {
        id: 61,
        title: "Social Issues (Drug Abuse Trends)",
        content: `In Kochi, the number of cases under the Narcotic Drugs and Psychotropic Substances (NDPS) Act has shot up from 1,268 in 2020 to 6,914 in 2025. Enforcers are relentless, but peddlers manage to outwit them. A significant shift is the "lure of danger" associated with synthetic drugs. Unlike the past, where ganja (cannabis) was trafficked in bulk and easy to detect by smell, the new trend involves synthetic drugs like MDMA. 50g of MDMA, a lab-made drug, can overwhelm the senses of two children. It is odourless and easy to hide in small pockets or cigarette packets.

"The ease of hiding the contraband has led to an increase in addiction cases," says an officer. "Youngsters from middle-class families are easy prey." A psychiatrist notes that "Substance use carries a certain stigma, but to remove that and to treat addiction as a medical condition requires substantial training." The police seem to agree. Amid the rise in cases, enforcers have been encouraging users arrested with a small quantity of substances to make use of Section 64(A) of the NDPS Act. This provision focuses on rehabilitation rather than punishment, allowing people to escape prosecution by volunteering to undergo de-addiction treatment. However, the dark forces lurking in the world of drugs often lead to tragic outcomes, including suicide attempts by students who drop out of colleges due to addiction.`
    },
    {
        id: 62,
        title: "Tribal Culture (Medaram Jatara)",
        content: `As Telangana prepares for the biennial Sammakka-Sarakka Jatara, one of the world’s largest indigenous spiritual gatherings, the sacred heart of Medaram village has turned into a vast worksite. The redevelopment is designed to accommodate more devotees. The spiritual core of the Jatara contains four platforms dedicated to Sammakka, Sarakka, Pagididda Raju and Govinda Raju. Two trees represent Sammakka and Sarakka.

The Koya tribe commemorates the sacrifice of the four family members who died battling the Kakatiya army in the 12th century. Interestingly, the Koyas practise animism infused with Hindu elements. In particular, the Jatara symbolizes their collective memory and resistance. "The deities are formless. But now, photocopies of other goddesses are being superimposed... It is erasure of a culture," says a researcher. The floor is now granite, and permanent structures are replacing the temporary nature of the festival.

Jayadheer Tirumala Rao observes, "Many belief systems have disappeared. The Koyas practised slash-and-burn farming, and did not have any shape for gods and goddesses; they prayed to formless deities. But now, photocopies of other goddesses are being circulated." There is also an unintended historical irony. The Kakatiya rulers, who once fought the Koya tribes to impose their authority and wiped them out, were themselves displaced in 1323. Yet, the Kirti Toranas (victory arches) they erected at the heart of their kingdom now stand lonely, while the arches raised for the Sammakka-Sarakka Jatara will soon witness a vast tide of humanity flowing through them, marking the arrival of the Goddess.`
    },
    {
        id: 63,
        title: "Environment (Human-Wildlife Conflict)",
        content: `A male elephant, which has killed at least 20 people in the Chaibasa and Kolhan forest areas of West Singhbhum district, has become the symbol of the human-wildlife conflict in Jharkhand. A massive operation involving more than 100 forest personnel is under way to track the animal. Madhu Tati, 75, shudders as he remembers the morning when he couldn't bear to see the decapitated body of his 50-year-old son, Prakash, who used to operate heavy machinery. "He was not attacking the elephant. He was just going to work," Madhu said.

The residents say the elephant has also destroyed many houses. However, forest officials note a peculiar behavior: this particular tusker is not eating the crops or the food in the houses it destroys; it is simply attacking. "It was terrifying seeing it come. It killed three people in a 100-metre radius," says a villager.

The Saranda forest is spread over 82,000 hectares. It is home to several animals but also to tribal communities. The forest, however, faces threats. A December 2025 study by the Wildlife Institute of India (WII) highlighted the "adverse impact of iron ore mining on local wildlife." It says, "The degradation of elephant habitats in Jharkhand has far-reaching consequences... fragmentation of landscapes linked to mining, economic and social impacts." According to the Jharkhand Forest Department, at least 1,270 people have died due to elephant attacks in the last 18 years. Around 150 elephant deaths have been reported in the same period. "Human activities have substantially alerted elephant habits, confining these elephants to fragmented landscapes... insufficient to fulfil their dietary and water requirements," says a WII report.`
    }
];

export const DAY_17_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Budget
    {
        id: 296,
        passageId: 60,
        question: "According to the passage, what is the proposed \"dual-track disposal system\" intended to address?",
        options: [
            "The separation of defence exports from civilian exports.",
            "The severe pendency of cases at the office of the Commissioner of Income Tax (Appeals) by segregating simple/low-value cases from complex ones.",
            "The mining of critical minerals versus traditional minerals.",
            "The difference between public and private sector borrowing."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"The need is a dual-track disposal system: a fast-track for simple or low-value matters and a detailed track for complex or high-value matters\" to address disputes pendency at the CIT(A) level."
    },
    {
        id: 297,
        passageId: 60,
        question: "The passage suggests that India's resilience against \"global headwinds\" (like US tariffs) was primarily due to:",
        options: [
            "The 50% tariff imposed by India on US goods.",
            "The government's reformist measures and domestic economic resilience.",
            "A sudden increase in agricultural exports.",
            "Loans taken from the World Bank."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The resilience of the Indian economy had a lot to do with the government’s reformist measures.\""
    },
    {
        id: 298,
        passageId: 60,
        question: "Regarding the \"National Critical Mineral Mission (NCMM)\", what specific supplementary programme does the author recommend?",
        options: [
            "A ban on the export of all critical minerals.",
            "A dedicated programme for \"tailings recovery\" (extracting minerals from mine waste) to treat it as dedicated financing.",
            "Importing all critical minerals from China.",
            "Privatizing all mines in Jharkhand."
        ],
        correctAnswer: 1,
        explanation: "Text: \"This can be supplemented by a dedicated critical minerals tailings recovery programme under the NCMM.\""
    },
    {
        id: 299,
        passageId: 60,
        question: "Which of the following is cited as a reason for the need to \"deepen corporate bond markets\"?",
        options: [
            "To stop companies from issuing shares.",
            "To diversify finance credit beyond the banking system, reducing reliance on banks.",
            "To increase the interest rates for savings accounts.",
            "To help the government collect more taxes."
        ],
        correctAnswer: 1,
        explanation: "Text: \"deepening the corporate bond markets is critical for diversification of finance credit beyond the banking system.\""
    },
    {
        id: 300,
        passageId: 60,
        question: "Based on the text, what was the contribution of private enterprises to India's defence exports in 2024-25?",
        options: [
            "Less than 10%.",
            "Nearly 65% of total defence exports.",
            "They were banned from exporting defence equipment.",
            "30% of the budgetary estimate."
        ],
        correctAnswer: 1,
        explanation: "Text: \"private enterprises have played a key role... contributing nearly 65% of total defence exports in 2024-25.\""
    },
    // Passage 2: Drug Abuse
    {
        id: 301,
        passageId: 61,
        question: "What is the primary operational challenge cited in the passage regarding the shift from \"ganja\" to \"synthetic drugs\" like MDMA?",
        options: [
            "Synthetic drugs are cheaper than ganja.",
            "Synthetic drugs like MDMA are odourless and easy to hide in small quantities (e.g., cigarette packets), unlike bulky, smelly ganja, making detection difficult.",
            "Synthetic drugs are legal in Kerala.",
            "Police dogs refuse to smell synthetic drugs."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Unlike the past, where ganja was trafficked in bulk... new trend involves synthetic drugs like MDMA... odourless and easy to hide... ease of hiding the contraband has led to an increase.\""
    },
    {
        id: 302,
        passageId: 61,
        question: "The passage mentions \"Section 64(A) of the NDPS Act\" in the context of:",
        options: [
            "Increasing the jail term for drug peddlers to 20 years.",
            "A provision that focuses on rehabilitation rather than punishment, allowing users with small quantities to escape prosecution if they undergo de-addiction treatment.",
            "Allowing the police to shoot drug traffickers on sight.",
            "Making it mandatory for schools to conduct drug tests."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Section 64(A)... focuses on rehabilitation rather than punishment, allowing people to escape prosecution by volunteering to undergo de-addiction treatment.\""
    },
    {
        id: 303,
        passageId: 61,
        question: "According to the text, what is a major barrier to treating addiction effectively in the current social context?",
        options: [
            "The high cost of medicine.",
            "The stigma associated with substance use, which prevents it from being treated as a medical condition.",
            "The lack of hospitals in Kochi.",
            "The refusal of parents to admit their children are addicts."
        ],
        correctAnswer: 1,
        explanation: "Text quotes a psychiatrist: \"Substance use carries a certain stigma, but to remove that and to treat addiction as a medical condition requires...\""
    },
    {
        id: 304,
        passageId: 61,
        question: "The author uses the phrase \"outwit them with innovative means\" to describe:",
        options: [
            "How the police are catching criminals.",
            "How peddlers use encrypted messaging platforms and new delivery methods (like hiding drugs in small units) to evade enforcement.",
            "How students are studying harder to avoid drugs.",
            "How the government is changing laws."
        ],
        correctAnswer: 1,
        explanation: "Context: Peddlers use \"encrypted messaging platforms\" and hide drugs in \"small units\" to outwit enforcement."
    },
    {
        id: 305,
        passageId: 61,
        question: "The rise in NDPS cases in Kochi from 2020 to 2025 is described as:",
        options: [
            "A marginal increase.",
            "A significant surge, shooting up from 1,268 to 6,914.",
            "A decline due to better policing.",
            "Stable and unchanged."
        ],
        correctAnswer: 1,
        explanation: "Text: \"shot up from 1,268 in 2020 to 6,914 in 2025.\""
    },
    // Passage 3: Tribal Culture
    {
        id: 306,
        passageId: 62,
        question: "The \"unintended historical irony\" mentioned in the passage refers to:",
        options: [
            "The fact that the Koya tribe now worships the Kakatiya rulers.",
            "The Kakatiya rulers, who once wiped out the Koyas, have their own victory arches standing lonely/forgotten, while the arches for the Koya deities (whom they fought) now attract millions of devotees.",
            "The Jatara is held in a city instead of a forest.",
            "The government has banned the festival."
        ],
        correctAnswer: 1,
        explanation: "Text describes the Kakatiyas (who wiped out Koyas) having lonely victory arches, while the Koya deities' arches now witness a \"vast tide of humanity\" – an \"unintended historical irony.\""
    },
    {
        id: 307,
        passageId: 62,
        question: "What specific cultural shift or \"erasure\" does the researcher Jayadheer Tirumala Rao warn about?",
        options: [
            "The replacement of the Koya language with English.",
            "The imposition of \"shapes\" and \"photocopies of other goddesses\" onto the Koya's original practice of praying to formless deities/animism.",
            "The banning of slash-and-burn farming.",
            "The refusal of the government to fund the festival."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The deities are formless. But now, photocopies of other goddesses are being superimposed... It is erasure of a culture.\""
    },
    {
        id: 308,
        passageId: 62,
        question: "The deities Sammakka and Sarakka are represented physically in the spiritual core by:",
        options: [
            "Large marble statues.",
            "Two trees (and earthen pots/bamboo sticks as per animist tradition, implied).",
            "Gold coins.",
            "Electronic displays."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Two trees represent Sammakka and Sarakka.\""
    },
    {
        id: 309,
        passageId: 62,
        question: "The Sammakka-Sarakka Jatara commemorates:",
        options: [
            "A successful harvest season.",
            "The marriage of a tribal chief.",
            "The sacrifice of four family members who died battling the Kakatiya army in the 12th century.",
            "The independence of India."
        ],
        correctAnswer: 2,
        explanation: "Text: \"commemorates the sacrifice of the four family members who died battling the Kakatiya army.\""
    },
    {
        id: 310,
        passageId: 62,
        question: "The passage suggests that the \"redevelopment\" of Medaram (granite floors, permanent structures) creates a tension between:",
        options: [
            "The state government and the central government.",
            "The need to accommodate millions of devotees and the preservation of the original, nature-centric/temporary essence of the tribal festival.",
            "The tourists and the locals.",
            "The police and the priests."
        ],
        correctAnswer: 1,
        explanation: "Implied by the contrast between \"spiritual core\" (nature/trees) and the \"vast worksite/granite floors\" needed for the crowd."
    },
    // Passage 4: Environment
    {
        id: 311,
        passageId: 63,
        question: "According to the passage, what \"peculiar behavior\" of the rogue elephant in West Singhbhum has been noted by officials?",
        options: [
            "It only attacks at night.",
            "It is not eating the crops or food in the houses it destroys; it appears to be attacking simply to kill/destroy.",
            "It travels in a herd of 50.",
            "It is afraid of firecrackers."
        ],
        correctAnswer: 1,
        explanation: "Text: \"this particular tusker is not eating the crops or the food... it is simply attacking.\""
    },
    {
        id: 312,
        passageId: 63,
        question: "The December 2025 study by the Wildlife Institute of India (WII) identifies which primary factor as a driver of habitat degradation in Jharkhand?",
        options: [
            "Climate change causing droughts.",
            "The adverse impact of iron ore mining and the resulting fragmentation of landscapes.",
            "The overpopulation of tigers in the area.",
            "The construction of a new dam."
        ],
        correctAnswer: 1,
        explanation: "Text quotes WII: \"adverse impact of iron ore mining... degradation of elephant habitats... fragmentation of landscapes linked to mining.\""
    },
    {
        id: 313,
        passageId: 63,
        question: "The passage cites that \"Human activities have substantially altered elephant habits\" by:",
        options: [
            "Domesticating them for tourism.",
            "Confining them to fragmented landscapes that are insufficient to fulfil their dietary and water requirements.",
            "Feeding them too much food.",
            "Transporting them to zoos."
        ],
        correctAnswer: 1,
        explanation: "Text: \"confining these elephants to fragmented landscapes... insufficient to fulfil their dietary and water requirements.\""
    },
    {
        id: 314,
        passageId: 63,
        question: "Based on the statistics provided, the human-wildlife conflict in Jharkhand over the last 18 years has resulted in:",
        options: [
            "Zero human casualties.",
            "At least 1,270 human deaths and around 150 elephant deaths.",
            "More elephant deaths than human deaths.",
            "The complete extinction of elephants in the state."
        ],
        correctAnswer: 1,
        explanation: "Text: \"at least 1,270 people have died... Around 150 elephant deaths have been reported.\""
    },
    {
        id: 315,
        passageId: 63,
        question: "The \"Saranda forest\" mentioned in the text is significant because:",
        options: [
            "It is the only forest in India with elephants.",
            "It is a massive area (82,000 hectares) hosting both wildlife and tribal communities, now threatened by mining conflict.",
            "It has been declared a \"no-mining zone\" successfully.",
            "It is a desert ecosystem."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Saranda forest is spread over 82,000 hectares... home to several animals but also to tribal communities... faces threats [mining].\""
    }
];

export const DAY_17_SESSION = {
    day: 17,
    title: "Eco-Budget, Drug Policy & Tribal Sacrifices",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Budget 2026-27 Reforms", "Synthetic Drug Trends", "Sammakka-Sarakka Jatara", "Elephant Conflict & Mining"]
};
