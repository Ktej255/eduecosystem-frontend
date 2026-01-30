// UPSC CSAT Practice Set - Day 18 (January 18)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_18_PASSAGES: CSATPassage[] = [
    {
        id: 64,
        title: "Polity (Arbitration Council of India)",
        content: `Nearly six years after the 2019 amendments to the Arbitration and Conciliation Act, 1996, the Union government is yet to constitute the Arbitration Council of India (ACI), envisaged as the central regulatory and promotional body for institutional arbitration. The 2019 amendments proposed the establishment of the ACI to promote, reform, and advance the practice of arbitration. It drew from the High-Level Committee on Arbitration, chaired by Justice B.N. Srikrishna. The ACI was proposed to be headed by a Chairperson appointed by the Union government in consultation with the Chief Justice of India.

However, experts have cautioned that a government-dominated arbitration regulator with powers to grade institutions and advise on policy raises serious questions of independence and finds little precedent in arbitration-friendly jurisdictions. Most of its members are either nominated or appointed by the Union government. This has raised concerns given that the government remains the single largest litigant in India. Concerns have also been raised about the ACI’s role in accrediting and grading arbitral institutions. While this framework is said to draw inspiration from Singapore and Hong Kong, a key distinction remains: in both those jurisdictions, arbitration is administered primarily through a single, centralised arbitral institution rather than through a regulatory body overseeing multiple institutions. The 2019 amendments empower the ACI to accredit an unlimited number of arbitral institutions, a feature that could dilute quality standards.

On October 18, 2024, the Union government released the draft Arbitration and Conciliation (Amendment) Bill, 2024. It introduces a revised definition of an "arbitral institution" and proposes to expand their role by vesting them with powers currently lying exclusively with courts, such as extending the time limit for making an award. Another significant proposal is the introduction of a new Section 9-A, allowing parties to seek interim measures from an emergency arbitrator once proceedings commence, reducing judicial intervention.`
    },
    {
        id: 65,
        title: "Economy & Tech (Crypto Regulation)",
        content: `On January 8, India's Financial Intelligence Unit (FIU-IND) updated the existing ‘AML & CFT Guidelines for Reporting Entities Providing Services Related to Virtual Digital Assets’. These guidelines apply to cryptocurrency exchanges, setting down rules for vetting customers. Cryptocurrency exchanges will have to carry out due diligence and obtain verified Know-Your-Client (KYC) details. In addition to this, exchanges will have to collect their customers’ occupation and income range, a selfie with "liveness detection," and coordinates of the onboarding location. What’s more, the customer’s bank account will have to be verified through the "penny drop method," in which a small sum is transacted to make sure the account belongs to the stated person.

Numerous decentralised exchanges, called DEXs, offer a fully anonymous and unregulated transacting experience with far fewer controls. While there are non-criminal reasons for using a DEX, such as ensuring privacy, DEXs are also attractive options for money launderers and terrorists. Regulators fear cryptocurrencies could be used to financially support terrorist groups, leading to Countering the Financing of Terrorism (CFT) regulations.

WazirX founder Nischal Shetty stated that leading Indian exchanges were already following global best practices, with the FIU’s new rules formalising existing ones. For instance, WazirX and CoinDCX were already collecting selfies and performing geo-tagging. Though crypto sees capital gains taxed at 30% and a TDS rate of 1%, there is almost no reliable safety net for Indian investors in case they are scammed or subjected to unfair terms by private players. The updated guidelines do not introduce drastic changes to the existing KYC framework but tighten the verification process.`
    },
    {
        id: 66,
        title: "Space Science (PSLV Failure)",
        content: `On January 12, the Indian Space Research Organisation's (ISRO) PSLV-C62 mission lifted off from Sriharikota carrying the EOS-N1 satellite along with 15 co-passenger satellites. Within minutes, ISRO said the mission had "encountered an anomaly during end of the PS3 stage". In a televised briefing, ISRO chairman V. Narayanan described that performance was "as expected" up to the third stage, called PS3. However, towards the end of the third stage, the rocket was spinning uncontrollably; enough for it to not be able to continue on its planned path. Thailand’s space agency GISTDA, whose THEOS-2A satellite was on board, said a malfunction late in the third stage caused an attitude-control abnormality and the vehicle deviated from its trajectory.

ISRO noted a drop in chamber pressure in the third-stage motor case during the PS3 operation. Based on reports, the main symptom in C62 was a "roll rate disturbance" late in the PS3 stage operation. ISRO chairman constituted a Failure Analysis Committee (FAC) to look into the causes. The FAC is not a standing body of experts within ISRO but an entity the chairman constitutes in the event of a major incident. Its responsibility is to reconstruct the chain of events leading up to the failure using telemetry data.

Though the PSLV-C61 (a previous mission) FAC submitted its report to the PMO, the PMO hasn't cleared it for public release yet. Independent experts criticised the decision to withhold it after PSLV-C62 also suffered an anomaly in its third stage. ISRO has also not said whether it has constituted an FAC for the C62 mission publically yet. Earlier, even when the FAC report wasn't public, ISRO had issued detailed summaries. The aftermath of PSLV-C61 is a break from the past in this sense. The mission's primary payload was EOS-N1, a surveillance satellite.`
    },
    {
        id: 67,
        title: "International Relations (Iran Protests)",
        content: `What began as a shopkeepers' strike transformed into one of the largest anti-government protests the Islamic Republic has seen. The fuse was lit on December 28, when traders and shopkeepers in Tehran’s Grand Bazaar went on strike over the collapsing currency, the rial. The Bazaar carries immense symbolic weight in Iran’s revolutionary folklore. In the late 1970s, it was a key hub of revolutionary activity. The bazaaris (the trading class), conservative in outlook and angered by the Shah’s economic policies, threw their weight behind the anti-Shah movement, which snowballed into a nationwide uprising in 1979.

In December 2025, the bazaaris shut their shops and staged rallies, demanding solutions to mounting economic grievances. But on January 2, after meeting Israeli Prime Minister Benjamin Netanyahu in Florida, U.S. President Donald Trump warned Iran’s rulers against killing protesters. "The U.S. is locked and loaded," he wrote in a social media post. Soon after, as protests spread, the Iranian regime imposed a nationwide internet shutdown. According to state media, "foreign agents" killed civilians. However, Mr. Izadi said the Western media portrayed "peaceful protests" while in reality, Mossad agents were shooting at ordinary citizens to make it look like the regime was killing them.

The regime has committed a grave crime by killing thousands. The opposition remains fragmented. Barring that, it is likely that forces inside the regime will implement changes to the regime's core policies. But the ground reality appears more complex. "Back-to-back crises are fraying the social contract. Iranians demand structural reforms – if not regime change," said the Tehran academic. The republic may have weathered the storm for now, but tornadoes lie ahead.`
    }
];

export const DAY_18_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Arbitration
    {
        id: 316,
        passageId: 64,
        question: "What is the primary criticism regarding the composition of the proposed Arbitration Council of India (ACI)?",
        options: [
            "It has too many foreign members.",
            "It lacks a Chairperson.",
            "It is seen as a government-dominated regulator, raising independence concerns since the government is the single largest litigant.",
            "It excludes the Chief Justice of India from the consultation process entirely."
        ],
        correctAnswer: 2,
        explanation: "The text states experts caution that \"a government-dominated arbitration regulator... raises serious questions of independence... given that the government remains the single largest litigant.\""
    },
    {
        id: 317,
        passageId: 64,
        question: "The passage highlights a \"key distinction\" between the proposed Indian framework and the models in Singapore and Hong Kong. What is this distinction?",
        options: [
            "Singapore and Hong Kong do not have arbitration laws.",
            "India proposes a regulatory body (ACI) overseeing multiple accredited institutions, whereas Singapore/Hong Kong primarily rely on a single, centralized arbitral institution.",
            "India allows foreign lawyers, while Singapore bans them.",
            "Singapore uses ad-hoc arbitration only."
        ],
        correctAnswer: 1,
        explanation: "Text: \"In both jurisdictions [Singapore/Hong Kong], arbitration is administered primarily through a single, centralised arbitral institution rather than through a regulatory body overseeing multiple institutions.\""
    },
    {
        id: 318,
        passageId: 64,
        question: "According to the draft Arbitration and Conciliation (Amendment) Bill, 2024, what significant power is proposed to be transferred from courts to arbitral institutions?",
        options: [
            "The power to arrest people who refuse arbitration.",
            "The authority to extend the time limit for making an arbitral award and substitute arbitrators.",
            "The power to rewrite the Constitution.",
            "The power to hear criminal cases."
        ],
        correctAnswer: 1,
        explanation: "Text: \"proposes to expand... including the authority to extend the time limit for making an arbitral award... substitute arbitrators.\""
    },
    {
        id: 319,
        passageId: 64,
        question: "The proposed \"Section 9-A\" mentioned in the text aims to:",
        options: [
            "Ban emergency arbitration.",
            "Allow parties to seek interim measures from an emergency arbitrator instead of approaching courts, thereby curbing delays.",
            "Mandate that all arbitration must happen in Hindi.",
            "Allow the government to cancel any arbitral award it dislikes."
        ],
        correctAnswer: 1,
        explanation: "Text: \"introduction of a new Section 9-A... seek interim measures from an emergency arbitrator... reducing judicial intervention.\""
    },
    {
        id: 320,
        passageId: 64,
        question: "Why do experts fear that the ACI's power to accredit an \"unlimited number\" of arbitral institutions might be problematic?",
        options: [
            "It could lead to a monopoly.",
            "It could dilute quality standards and place significant administrative demands on the Council.",
            "It would make arbitration too expensive.",
            "It would prevent foreign companies from investing in India."
        ],
        correctAnswer: 1,
        explanation: "Text: \"empower the ACI to accredit an unlimited number of arbitral institutions, a feature that could dilute quality standards.\""
    },
    // Passage 2: Crypto
    {
        id: 321,
        passageId: 65,
        question: "The \"penny drop method\" mentioned in the FIU-IND guidelines serves which specific purpose?",
        options: [
            "To deduct a small tax from every transaction.",
            "To verify that the customer's bank account is active and belongs to the stated person by transacting a small sum.",
            "To check if the customer has enough money to buy Bitcoin.",
            "To donate small change to charity."
        ],
        correctAnswer: 1,
        explanation: "Text: \"verified through the penny drop method, in which a small sum is transacted to make sure that the account belongs to the stated person.\""
    },
    {
        id: 322,
        passageId: 65,
        question: "Why do regulators view \"Decentralised Exchanges (DEXs)\" with concern, according to the passage?",
        options: [
            "Because they are too slow.",
            "Because they offer a fully anonymous and unregulated experience, making them attractive for money laundering and financing terrorism.",
            "Because they do not charge fees.",
            "Because they only trade in Indian Rupees."
        ],
        correctAnswer: 1,
        explanation: "Text: \"offer a fully anonymous and unregulated transacting experience... attractive options for money launderers and those financing terrorism.\""
    },
    {
        id: 323,
        passageId: 65,
        question: "Which of the following new requirements for crypto exchanges is explicitly mentioned in the updated guidelines?",
        options: [
            "Mandatory physical verification of the customer's home address.",
            "Collection of a selfie with \"liveness detection\" and geo-tagging (latitude/longitude) of the onboarding location.",
            "A ban on all customers earning less than ₹5 lakh per year.",
            "Requirement to store all data on servers located in Mumbai."
        ],
        correctAnswer: 1,
        explanation: "Text: \"collect... a selfie with 'liveness detection,' and latitude and longitude coordinates of the onboarding location.\""
    },
    {
        id: 324,
        passageId: 65,
        question: "What is the current tax structure for crypto in India mentioned in the text?",
        options: [
            "It is tax-free.",
            "18% GST only.",
            "30% tax on capital gains and a 1% TDS rate.",
            "5% VAT."
        ],
        correctAnswer: 2,
        explanation: "Text: \"capital gains taxed at 30% and a TDS rate of 1%.\""
    },
    {
        id: 325,
        passageId: 65,
        question: "The author concludes that despite these regulations, a major gap remains for Indian investors. What is it?",
        options: [
            "There is almost no reliable safety net for investors if they are scammed or subjected to unfair terms by private players.",
            "The taxes are too low.",
            "Investors are not allowed to buy foreign crypto.",
            "The KYC process is too fast."
        ],
        correctAnswer: 0,
        explanation: "Text: \"there is almost no reliable safety net for Indian investors in case they are scammed or subjected to unfair terms.\""
    },
    // Passage 3: Space
    {
        id: 326,
        passageId: 66,
        question: "What was the specific technical anomaly described by the ISRO Chairman regarding the PSLV-C62 mission?",
        options: [
            "The rocket exploded on the launchpad.",
            "The first stage failed to ignite.",
            "Increased \"disturbance in the vehicle roll rates\" (uncontrollable spinning) towards the end of the third stage (PS3).",
            "The satellite separated too early."
        ],
        correctAnswer: 2,
        explanation: "Text: \"increased 'disturbance in the vehicle roll rates'... rocket was spinning uncontrollably.\""
    },
    {
        id: 327,
        passageId: 66,
        question: "The passage notes a similarity between the failure of PSLV-C62 and the previous PSLV-C61 mission. What is it?",
        options: [
            "Both failed due to bad weather.",
            "Both suffered anomalies related to the third stage (PS3), specifically involving chamber pressure drops or roll rate disturbances.",
            "Both were carrying human passengers.",
            "Both were launched from foreign soil."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The anomaly resembled the events preceding the failure of the PSLV-C61 mission... anomaly in its third stage.\""
    },
    {
        id: 328,
        passageId: 66,
        question: "What is the role of the \"Failure Analysis Committee (FAC)\" mentioned in the text?",
        options: [
            "To punish the scientists responsible for the failure.",
            "To reconstruct the chain of events leading to failure using telemetry data and recommend corrective action before the vehicle is cleared for return to flight.",
            "To calculate the financial loss of the mission.",
            "To design the next rocket."
        ],
        correctAnswer: 1,
        explanation: "Text: \"reconstruct the chain of events... identify the causes, and recommend corrective action before the vehicle is cleared for a 'return to flight'.\""
    },
    {
        id: 329,
        passageId: 66,
        question: "Why have independent experts criticized the government regarding the FAC reports?",
        options: [
            "Because the FAC reports are too long.",
            "Because the report for the previous failure (PSLV-C61) has not been cleared for public release by the PMO, breaking past precedents of transparency.",
            "Because the FAC is composed of foreign experts.",
            "Because the FAC blamed the weather."
        ],
        correctAnswer: 1,
        explanation: "Text: \"PMO hasn't cleared it for public release yet. Independent experts criticised the decision... break from the past.\""
    },
    {
        id: 330,
        passageId: 66,
        question: "The primary payload of the failed PSLV-C62 mission was:",
        options: [
            "Chandrayaan-4.",
            "EOS-N1, a surveillance satellite from the Defence Research and Development Organisation.",
            "A communications satellite for rural education.",
            "A weather satellite for fishermen."
        ],
        correctAnswer: 1,
        explanation: "Text: \"primary payload was EOS-N1, a surveillance satellite.\""
    },
    // Passage 4: Iran
    {
        id: 331,
        passageId: 67,
        question: "Why is the participation of the \"Bazaaris\" (traders of the Grand Bazaar) in the protests considered historically significant?",
        options: [
            "Because they are the wealthiest group in Iran.",
            "Because they historically supported the Shah.",
            "Because they were a key hub of revolutionary activity in 1979, and their support was crucial in the overthrow of the Shah; their turning against the current regime is a symbolic blow.",
            "Because they control the oil industry."
        ],
        correctAnswer: 2,
        explanation: "Text: \"In the late 1970s, it was a key hub... their withdrawal of support doomed the Shah... The Bazaar carries immense symbolic weight.\""
    },
    {
        id: 332,
        passageId: 67,
        question: "What was the immediate trigger for the shopkeepers' strike on December 28?",
        options: [
            "A ban on importing goods.",
            "The collapsing currency, the rial, and mounting economic grievances.",
            "The arrest of a religious leader.",
            "A new tax on carpets."
        ],
        correctAnswer: 1,
        explanation: "Text: \"strike over the collapsing currency, the rial. The Bazaar carries immense symbolic weight... mounting economic grievances.\""
    },
    {
        id: 333,
        passageId: 67,
        question: "How did the Iranian government/state media characterize the violence during the protests?",
        options: [
            "They admitted the police used excessive force.",
            "They blamed \"foreign agents\" and \"Western intelligence agencies\" (like Mossad) for hijacking the protests and killing civilians to frame the regime.",
            "They claimed the protests were peaceful.",
            "They blamed climate change."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Tehran says Western intelligence agencies hijacked the protest... Mossad agents were shooting at ordinary citizens.\""
    },
    {
        id: 334,
        passageId: 67,
        question: "The passage mentions a statement by U.S. President Donald Trump. What was its content?",
        options: [
            "He offered to lift all sanctions on Iran.",
            "He warned Iran's rulers against killing protesters, stating \"The U.S. is locked and loaded.\"",
            "He declared war on Iran immediately.",
            "He praised the Iranian government for maintaining order."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Trump warned Iran’s rulers... 'The U.S. is locked and loaded,' he wrote.\""
    },
    {
        id: 335,
        passageId: 67,
        question: "According to the conclusion, what is the state of the \"social contract\" in Iran?",
        options: [
            "It is stronger than ever.",
            "It is fraying due to back-to-back crises, with Iranians demanding structural reforms or regime change.",
            "It has been replaced by a military dictatorship.",
            "It is unaffected by the protests."
        ],
        correctAnswer: 1,
        explanation: "Text: \"'Back-to-back crises are fraying the social contract. Iranians demand structural reforms – if not regime change'.\""
    }
];

export const DAY_18_SESSION = {
    day: 18,
    title: "Arbitration, Crypto & Space Failure",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Arbitration Council of India", "Crypto AML/CFT Guidelines", "PSLV-C62 Mission Failure", "Iran Civic Unrest 2025"]
};
