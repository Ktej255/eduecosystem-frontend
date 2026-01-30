// UPSC CSAT Practice Set - Day 20 (January 20)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_20_PASSAGES: CSATPassage[] = [
    {
        id: 72,
        title: "Economic Policy (Budget 2026-27)",
        content: `India faced global headwinds in 2025 but belied fears that America’s 50% tariffs would hurt its economy. The resilience of the Indian economy had a lot to do with the government’s reformist measures. Budget 2026-27 can give a fillip to the mission by prioritising growth-enhancing productive capital expenditure and social sector spending, while maintaining the fiscal consolidation glide path.

First, the government should continue the focus on defence, with higher expenditure on capex. The share of capital outlay in defence should be enhanced to 30%. Private enterprises have played a key role in augmenting defence exports, contributing nearly 65% of total defence exports in 2024-25. Second, a transition toward clean energy, semiconductors and strategic technologies is driving a demand for critical minerals. The National Critical Mineral Mission (NCMM), approved in early 2025, provides a foundation. This can be supplemented by a dedicated critical minerals tailings recovery programme under the NCMM.

Third, measures to address disputes pendency need to be prioritised. The first appellate level in direct tax disputes, the office of the Commissioner of Income Tax (Appeals), is facing severe pendency. There is a need to prioritise high-pitched assessments and cases with complete submissions. The need is a "dual-track disposal system": a fast-track for simple or low-value matters and a detailed track for complex or high-value matters. Also, around 40% vacancies at the CIT(A) level need to be filled. Finally, deepening the corporate bond markets is critical for diversification of finance credit beyond the banking system. The government could consider lowering the qualifying borrowing threshold to widen the issuer base.`
    },
    {
        id: 73,
        title: "Social Issues (Drug Abuse Trends)",
        content: `In Kochi, the number of cases under the Narcotic Drugs and Psychotropic Substances (NDPS) Act has shot up from 1,268 in 2020 to 6,914 in 2025. Enforcers are relentless, but peddlers manage to outwit them. A significant shift is the "lure of danger" associated with synthetic drugs. Unlike the past, where ganja (cannabis) was trafficked in bulk and easy to detect by smell, the new trend involves synthetic drugs like MDMA. 50g of MDMA, a lab-made drug, can overwhelm the senses of two children. It is odourless and easy to hide in small pockets or cigarette packets.

"The ease of hiding the contraband has led to an increase in addiction cases," says an officer. "Youngsters from middle-class families are easy prey." A psychiatrist notes that "Substance use carries a certain stigma, but to remove that and to treat addiction as a medical condition requires substantial training." The police seem to agree. Amid the rise in cases, enforcers have been encouraging users arrested with a small quantity of substances to make use of Section 64(A) of the NDPS Act. This provision focuses on rehabilitation rather than punishment, allowing people to escape prosecution by volunteering to undergo de-addiction treatment. However, the dark forces lurking in the world of drugs often lead to tragic outcomes, including suicide attempts by students who drop out of colleges due to addiction.`
    },
    {
        id: 74,
        title: "International Relations (Diplomacy)",
        content: `On January 26, 2026, Kartavya Path will send a signal that goes beyond ceremony. The chief guests at the Republic Day parade will be the European Union (EU)'s institutional leadership, representing a 27-member bloc rather than a single capital. That break with tradition points to a wider truth about 2026. India's best openings may lie in "diplomatic white spaces". Think of them as gaps in global leadership. Problems need coordination, but no major power can credibly take charge. They are crowded rooms without a convenor. In such spaces, India can work through coalitions to shape rules and deliver global public goods.

The G-20 shows the strain. In theory, it is the premier table for economic coordination. In practice, it is increasingly exposed to domestic politics and agenda fights. The next is BRICS and the Quad. BRICS in 2026 is not what it was. Expansion has widened its reach but blurred its focus because members do not want the same things at the same speed. The third white space is the Quad. If India hosts a Quad leaders' summit, it could be hosting U.S. President Donald Trump. The Quad's agenda on maritime domain awareness and resilient ports matters to Indian Ocean littoral states that want capacity without being drawn into great power rivalries.

In a divided world, it is rarely the biggest table that shapes the future. It is the "small tables" where things actually get done. In 2026, India's advantage will lie in making the tables that it chooses work. For example, the AI Impact Summit in Delhi (February 2026) is India's chance to get governments, companies and researchers together to bridge differences. As Washington experiments with new forums, including Mr. Trump's proposed ‘Board of Peace’, Delhi will need to choose carefully. An invitation for India to join "Pax Silica", a U.S.-led capability club for Artificial Intelligence and semiconductor supply chains, is reportedly in the works.`
    },
    {
        id: 75,
        title: "Governance (Pension Reform)",
        content: `The Tamil Nadu government has unveiled the Tamil Nadu Assured Pension Scheme (TAPS) for government employees, combining features of the Old and Unified Pension Schemes. In June 2023, the Andhra Pradesh government guaranteed the Andhra Pradesh Guaranteed Pension Scheme (APGPS). Some of the features of the APGPS include that pensioners would get 50% of the basic salary of the last drawn salary as pension, while their contribution would be the same at 10% of their basic salary. In August 2024, the Centre came out with its own variant – the Unified Pension Scheme (UPS). As per this scheme effective April 1, 2025, an assured payout is allowed at the rate of 50% of the average basic pay drawn over the last 12 months of service with a minimum qualifying service of 25 years.

On January 3, Mr. Stalin announced that his government would implement the Tamil Nadu Assured Pension Scheme (TAPS), a hybrid model of the OPS, the APGPS and the UPS. The scheme came into effect from January 1, 2026. In addition to the monthly individual contribution of 10% along with at least a matching contribution from the government, there is no pension reset in the new scheme. And unlike in the case of UPS where 50% of the average of the last 12 months' basic pay is taken to fix the pension, TAPS enables pension determination based on 50% of the pay drawn in the last month of service.

In the UPS, a minimum assured payout is made if superannuation is after 10 years. Apart from the provision of a death-cum-retirement gratuity (DCRG) of not more than ₹25 lakh, a special compassionate pension will be paid to CPS beneficiaries who retired before the TAPS implementation. The government is confident that the pension burden as a percentage of the State's own tax revenue will be "much lower than" 21%-22 % in the long run.`
    }
];

export const DAY_20_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Budget
    {
        id: 356,
        passageId: 72,
        question: "According to the passage, what is the proposed \"dual-track disposal system\" intended to address?",
        options: [
            "The separation of defence exports from civilian exports.",
            "The severe pendency of cases at the office of the Commissioner of Income Tax (Appeals) by segregating simple/low-value cases from complex ones.",
            "The mining of critical minerals versus traditional minerals.",
            "The difference between public and private sector borrowing."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The need is a dual-track disposal system: a fast-track for simple... and a detailed track for complex... to address disputes pendency\" at CIT(A)."
    },
    {
        id: 357,
        passageId: 72,
        question: "The passage suggests that India's resilience against \"global headwinds\" (like US tariffs) was primarily due to:",
        options: [
            "The 50% tariff imposed by India on US goods.",
            "The government's reformist measures and domestic economic resilience.",
            "A sudden increase in agricultural exports.",
            "Loans taken from the World Bank."
        ],
        correctAnswer: 1,
        explanation: "Text: \"resilience of the Indian economy had a lot to do with the government’s reformist measures.\""
    },
    {
        id: 358,
        passageId: 72,
        question: "Regarding the \"National Critical Mineral Mission (NCMM)\", what specific supplementary programme does the author recommend?",
        options: [
            "A ban on the export of all critical minerals.",
            "A dedicated programme for \"tailings recovery\" (extracting minerals from mine waste) to treat it as dedicated financing.",
            "Importing all critical minerals from China.",
            "Privatizing all mines in Jharkhand."
        ],
        correctAnswer: 1,
        explanation: "Text: \"supplemented by a dedicated critical minerals tailings recovery programme under the NCMM.\""
    },
    {
        id: 359,
        passageId: 72,
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
        id: 360,
        passageId: 72,
        question: "Based on the text, what was the contribution of private enterprises to India's defence exports in 2024-25?",
        options: [
            "Less than 10%.",
            "Nearly 65% of total defence exports.",
            "They were banned from exporting defence equipment.",
            "30% of the budgetary estimate."
        ],
        correctAnswer: 1,
        explanation: "Text: \"private enterprises... contributing nearly 65% of total defence exports in 2024-25.\""
    },
    // Passage 2: Drug Abuse
    {
        id: 361,
        passageId: 73,
        question: "What is the primary operational challenge cited in the passage regarding the shift from \"ganja\" to \"synthetic drugs\" like MDMA?",
        options: [
            "Synthetic drugs are cheaper than ganja.",
            "Synthetic drugs like MDMA are odourless and easy to hide in small quantities (e.g., cigarette packets), unlike bulky, smelly ganja, making detection difficult.",
            "Synthetic drugs are legal in Kerala.",
            "Police dogs refuse to smell synthetic drugs."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Unlike the past... ganja... trafficked in bulk... new trend involves synthetic drugs like MDMA... odourless and easy to hide in small pockets.\""
    },
    {
        id: 362,
        passageId: 73,
        question: "The passage mentions \"Section 64(A) of the NDPS Act\" in the context of:",
        options: [
            "Increasing the jail term for drug peddlers to 20 years.",
            "A provision that focuses on rehabilitation rather than punishment, allowing users with small quantities to escape prosecution if they undergo de-addiction treatment.",
            "Allowing the police to shoot drug traffickers on sight.",
            "Making it mandatory for schools to conduct drug tests."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Section 64(A)... focuses on rehabilitation rather than punishment, allowing people to escape prosecution by volunteering to undergo de-addiction.\""
    },
    {
        id: 363,
        passageId: 73,
        question: "According to the text, what is a major barrier to treating addiction effectively in the current social context?",
        options: [
            "The high cost of medicine.",
            "The stigma associated with substance use, which prevents it from being treated as a medical condition.",
            "The lack of hospitals in Kochi.",
            "The refusal of parents to admit their children are addicts."
        ],
        correctAnswer: 1,
        explanation: "Text quotes psychiatrist: \"Substance use carries a certain stigma, but to remove that... requires substantial training.\""
    },
    {
        id: 364,
        passageId: 73,
        question: "The author uses the phrase \"outwit them\" (peddlers outwitting enforcers) to describe:",
        options: [
            "How the police are catching criminals.",
            "How peddlers use new methods (like hiding odourless synthetic drugs in small pockets/packets) to evade enforcement mechanisms designed for bulky drugs.",
            "How students are studying harder to avoid drugs.",
            "How the government is changing laws."
        ],
        correctAnswer: 1,
        explanation: "Contextual inference from \"ease of hiding... small units... outwit them\". (Peddlers use these tactics)."
    },
    {
        id: 365,
        passageId: 73,
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
    // Passage 3: Diplomacy
    {
        id: 366,
        passageId: 74,
        question: "The author uses the term \"diplomatic white spaces\" to refer to:",
        options: [
            "Areas covered in snow where diplomacy is difficult.",
            "Gaps in global leadership where problems need coordination but no major power can take charge, allowing India to work through coalitions.",
            "Countries that have no diplomatic relations with India.",
            "The space inside the United Nations building."
        ],
        correctAnswer: 1,
        explanation: "Text: \"diplomatic white spaces. Think of them as gaps in global leadership... no major power can credibly take charge... India can work through coalitions.\""
    },
    {
        id: 367,
        passageId: 74,
        question: "What is the author's critique of the expanded BRICS grouping?",
        options: [
            "It has become too small to be effective.",
            "Expansion has widened its reach but blurred its focus because members have diverging interests and speeds.",
            "It is completely controlled by the US.",
            "It has stopped meeting annually."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Expansion has widened its reach but blurred its focus because members do not want the same things.\""
    },
    {
        id: 368,
        passageId: 74,
        question: "The invitation to the EU leadership for Republic Day 2026 is described as a \"break with tradition\" because:",
        options: [
            "India usually invites only Asian leaders.",
            "It represents a 27-member bloc (institutional leadership) rather than a single capital/country.",
            "The EU refused to come initially.",
            "It is the first time a foreign leader is invited."
        ],
        correctAnswer: 1,
        explanation: "Text: \"representing a 27-member bloc rather than a single capital. That break with tradition points to a wider truth.\""
    },
    {
        id: 369,
        passageId: 74,
        question: "The \"Pax Silica\" mentioned in the passage refers to:",
        options: [
            "A peace treaty between India and China.",
            "A reported U.S.-led capability club for Artificial Intelligence and semiconductor supply chains.",
            "A new mining law in Silicon Valley.",
            "A UN resolution on sand mining."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Pax Silica, a U.S.-led capability club for Artificial Intelligence and semiconductor supply chains.\""
    },
    {
        id: 370,
        passageId: 74,
        question: "The central thesis regarding \"small tables\" in the passage is:",
        options: [
            "Large tables are too expensive to maintain.",
            "In a divided world, it is the smaller, functional coalitions (\"small tables\") where things actually get done, rather than the biggest forums.",
            "India should only attend summits with fewer than 5 people.",
            "Small nations should rule the world."
        ],
        correctAnswer: 1,
        explanation: "Text: \"In a divided world, it is rarely the biggest table that shapes the future. It is the 'small tables' where things actually get done.\""
    },
    // Passage 4: Pension
    {
        id: 371,
        passageId: 75,
        question: "What is the key difference between the Unified Pension Scheme (UPS) and the Tamil Nadu Assured Pension Scheme (TAPS) regarding the calculation of pension?",
        options: [
            "UPS gives 100% pension, TAPS gives 50%.",
            "UPS calculates pension based on the average of the last 12 months' basic pay, whereas TAPS bases it on 50% of the pay drawn in the last month of service.",
            "TAPS requires no contribution from employees.",
            "UPS is only for military personnel."
        ],
        correctAnswer: 1,
        explanation: "Text: \"unlike in the case of UPS where 50% of the average of the last 12 months... TAPS enables pension determination based on 50% of the pay drawn in the last month.\""
    },
    {
        id: 372,
        passageId: 75,
        question: "The \"TAPS\" model is described as a \"hybrid model\" because:",
        options: [
            "It combines features of the Old Pension Scheme (OPS), APGPS, and UPS (e.g., employee contribution exists, but payout is defined/assured).",
            "It uses both cash and digital currency for payments.",
            "It allows employees to work from home.",
            "It applies to both private and public sector employees."
        ],
        correctAnswer: 0,
        explanation: "Text: \"combining features of the Old and Unified Pension Schemes... hybrid model.\""
    },
    {
        id: 373,
        passageId: 75,
        question: "According to the passage, the Andhra Pradesh Guaranteed Pension Scheme (APGPS) mandates an employee contribution of:",
        options: [
            "0%",
            "10% of their basic salary.",
            "50% of their basic salary.",
            "14% of their basic salary."
        ],
        correctAnswer: 1,
        explanation: "Text: \"their contribution would be the same at 10% of their basic salary.\""
    },
    {
        id: 374,
        passageId: 75,
        question: "What is the government's projection regarding the \"pension burden\" under TAPS?",
        options: [
            "It will increase to 50% of tax revenue.",
            "It will be \"much lower than\" 21%-22% of the State's own tax revenue in the long run.",
            "It will bankrupt the state immediately.",
            "It will require central government funding."
        ],
        correctAnswer: 1,
        explanation: "Text: \"confident that the pension burden... will be 'much lower than' 21%-22 % in the long run.\""
    },
    {
        id: 375,
        passageId: 75,
        question: "The TAPS scheme came into effect from which date?",
        options: [
            "April 1, 2025",
            "January 1, 2026",
            "June 2023",
            "August 2024"
        ],
        correctAnswer: 1,
        explanation: "Text: \"The scheme came into effect from January 1, 2026.\""
    }
];

export const DAY_20_SESSION = {
    day: 20,
    title: "Global Coalitions, TAPS & Deep Economic Resilience",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Budget 2026-27 Reforms", "Synthetic Drug Trends (Kochi)", "EU leadership & White Spaces", "TN Assured Pension Scheme (TAPS)"]
};
