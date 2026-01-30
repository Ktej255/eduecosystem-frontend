// UPSC CSAT Practice Set - Day 10 (January 10)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_10_PASSAGES: CSATPassage[] = [
    {
        id: 37,
        title: "International Relations (Somaliland & Geopolitics)",
        content: `Israel’s decision, in December 2025, to recognise Somaliland as an independent sovereign state marks a significant diplomatic rupture in the Horn of Africa. Beyond the immediate diplomatic fallout, the move carries wider risks. It may intensify Cold War-style proxy conflicts, provoke economic and political coercion, and further militarise an already volatile maritime corridor of the Red Sea. For Beijing, Somaliland sits at the intersection of three core interests: safeguarding the “One China” principle, securing the Red Sea corridor, and controlling the intensifying great-power competition in Africa.

China has condemned Israel’s decision as an endorsement of separatism, reiterating that Somaliland is an “inseparable part” of Somalia. This language is consistent with Beijing’s long-standing position, driven primarily by its domestic sensitivities over Taiwan. Yet, China may find it harder to reject Somaliland’s claim to sovereignty compared to many other contested territories. Unlike many separatist territories, Somaliland has maintained relative peace, built functioning institutions, and held competitive elections for over three decades. Its stability contrasts sharply with Somalia’s chronic insecurity.

The wider geopolitical context makes China’s dilemma even sharper. Ethiopia’s memorandum of understanding, in 2024, to recognise Somaliland in exchange for port access, growing U.S. congressional interest in Somaliland as a democratic partner, and tacit support from the UAE, all suggest that Israel’s move could trigger a geopolitical recalibration. Beijing thus faces an uncomfortable strategic trade-off. It is obliged to oppose Somaliland’s recognition to protect its Taiwan stance. Yet, excessive pressure on Somaliland risks driving Hargeisa further into the arms of China’s rivals. What is clear is that Somaliland is no longer a diplomatic footnote.`
    },
    {
        id: 38,
        title: "Social Justice (Victim Dignity & Law)",
        content: `The suicide of a young lady doctor in Phaltan, Maharashtra, in October 2025, was a wake-up call. The doctor had written a note on her hand alleging rape and harassment by a police official. Her passing highlights the 'first crime', which is the failure of administrative systems that disregarded her pleas. The 'second crime' is derived from this, which is the public character assassination that follows when a victim’s family begins their quest for justice. This secondary victimisation by society was evident in comments made by public functionaries detailing the victim’s private communication. These comments reveal how strongly the culture of questioning the victim persists.

Unless India addresses this ‘second crime’ with the same legal and moral seriousness as the original offence, no amount of legislative changes will lead to genuine justice. Although the Bharatiya Nyaya Sanhita (BNS), 2023, aims to create a more women-centric justice system, the Phaltan case remains a stark reminder of the challenges. The core of the legal mandate to protect a victim’s dignity lies in the Criminal Law (Amendment) Act, 2013 (Nirbhaya Act). Specifically, Section 50 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, implies that a woman’s personal life or character cannot be used by the defence to argue that she “deserved it” or that her consent should be presumed.

Yet, public character assassination acts as an extra-judicial function of victim shaming. It creates a “social verdict” that tries the victim’s character. This act is a breach of the spirit of the judicial directions to treat the victim with fairness. Passing laws alone does not guarantee real justice; there is a large gap between policy and practice rooted in a patriarchal societal mindset. The solution lies in training police and judges to respond empathetically, and a society that stops questioning a victim’s character.`
    },
    {
        id: 39,
        title: "Governance (Land Records & Sada Bainama)",
        content: `Decades-old Sada Bainamas — informal, plain-paper land agreements — have left over nine lakh farmers in Telangana without titles as procedural hurdles and record discrepancies stall regularisation. Farmers find themselves trapped in a legal limbo over 22 guntas of agricultural land their fathers had bought in the early 1980s through a ‘Sada Bainama’. After inheriting it, attempts to regularise the land have stalled, with revenue officials insisting on an affidavit from the legal heirs of the original seller, an almost impossible condition that has left many waiting indefinitely.

The result is a cruel paradox: farmers who have cultivated land for decades appear in official “enjoyment columns”, are still denied ownership. This lack of title prevents them from accessing welfare schemes like Rythu Bharosa (investment support) or bank loans. The launch of the Dharani portal in 2020 aimed to simplify land records but often ended up freezing the status quo, failing to accommodate these historical informal transactions.

Neighboring Andhra Pradesh’s decision to order a resurvey and extend regularisation is cited as an example to follow. In Telangana, officials verify possession but are held back by the lack of clear guidelines or fear of litigation. A ‘Gram Sabha’ to be conducted to ascertain facts regarding the sale of land through Sada Bainamas has been proposed. Another expert suggests that notices could be issued to both sellers and buyers, enabling affidavits to be furnished publicly, easing verification. If implemented, such measures are expected not only to unlock regularisation but also reduce land disputes that have long plagued Telangana.`
    }
];

export const DAY_10_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Somaliland
    {
        id: 181,
        passageId: 37,
        question: "According to the passage, why does Somaliland present a unique \"dilemma\" for China compared to other separatist territories?",
        options: [
            "Because Somaliland has threatened to block Chinese ships in the Red Sea.",
            "Because Somaliland has maintained relative peace, functioning institutions, and competitive elections for decades, contrasting with Somalia’s instability, making it harder to dismiss its claims solely on internal legitimacy grounds.",
            "Because Somaliland officially recognizes Taiwan as an independent country.",
            "Because Somaliland has larger oil reserves than Somalia."
        ],
        correctAnswer: 1,
        explanation: "The text contrasts Somaliland with other separatist territories, noting its \"relative peace, functioning institutions, and competitive elections\" make it harder for China to reject its claim solely on internal legitimacy grounds."
    },
    {
        id: 182,
        passageId: 37,
        question: "The passage suggests that Israel's recognition of Somaliland could trigger a \"geopolitical recalibration\" because:",
        options: [
            "It aligns Israel with the African Union's policy of non-interference.",
            "It might encourage other actors like the U.S., UAE, and Ethiopia (who have strategic/port interests) to deepen ties with Somaliland, creating a rival security architecture near China's Djibouti base.",
            "It will force Somalia to declare war on Israel immediately.",
            "It will lead to the immediate closure of the Suez Canal."
        ],
        correctAnswer: 1,
        explanation: "The text mentions interest from the U.S., UAE, and Ethiopia, stating that \"Israel’s move could trigger a geopolitical recalibration... emergence of a rival security architecture near Djibouti.\""
    },
    {
        id: 183,
        passageId: 37,
        question: "What is the primary reason for China's opposition to Somaliland's independence, as highlighted in the text?",
        options: [
            "China wants to colonize Somaliland itself.",
            "China fears that recognizing Somaliland would weaken its domestic \"One China\" principle regarding Taiwan.",
            "China believes Somaliland is a terrorist state.",
            "China has a defense treaty with Somalia that requires it to intervene."
        ],
        correctAnswer: 1,
        explanation: "The text explicitly states Beijing's position is \"driven primarily by its domestic sensitivities over Taiwan\" and the \"One China\" principle."
    },
    {
        id: 184,
        passageId: 37,
        question: "The author implies that \"excessive pressure\" by China on Somaliland could be counter-productive because:",
        options: [
            "It would cause Somaliland to attack China's base in Djibouti.",
            "It might drive Somaliland further into the arms of China's rivals (Taiwan, Israel, Western powers), undermining China's influence in the Red Sea region.",
            "It would violate UN Security Council resolutions.",
            "It would bankrupt the Chinese economy."
        ],
        correctAnswer: 1,
        explanation: "The text warns: \"excessive pressure on Somaliland risks driving Hargeisa further into the arms of China’s rivals.\""
    },
    {
        id: 185,
        passageId: 37,
        question: "The term \"diplomatic footnote\" used in the conclusion implies that:",
        options: [
            "Somaliland was previously considered insignificant or marginal in global diplomacy but has now moved to the centre of great-power competition.",
            "Somaliland has been erased from diplomatic maps.",
            "Somaliland is only important for writing diplomatic history books.",
            "Israel made a mistake in its diplomatic correspondence."
        ],
        correctAnswer: 0,
        explanation: "Context: \"Somaliland is no longer a diplomatic footnote. Israel’s recognition has pushed it to the centre of great-power competition.\""
    },
    // Passage 2: Phaltan Case
    {
        id: 186,
        passageId: 38,
        question: "What does the author mean by the \"second crime\" in the context of the Phaltan case?",
        options: [
            "The failure of the police to register an FIR immediately.",
            "The subsequent suicide of the victim due to police inaction.",
            "The public character assassination and secondary victimisation of the victim by society and officials after the original offence.",
            "The harassment of the victim's family by the accused."
        ],
        correctAnswer: 2,
        explanation: "The text defines the 'second crime' as: \"the public character assassination that follows... secondary victimisation by society... acts as an extra-judicial function of victim shaming.\""
    },
    {
        id: 187,
        passageId: 38,
        question: "According to the passage, Section 50 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, provides which specific protection?",
        options: [
            "It mandates the death penalty for all rapists.",
            "It prevents the defence from using a woman's personal life, character, or history to argue that her consent should be presumed or that she \"deserved it\".",
            "It allows the victim to remain anonymous during the trial.",
            "It requires the trial to be completed within 60 days."
        ],
        correctAnswer: 1,
        explanation: "The text states Section 50 implies \"a woman’s personal life... cannot be used by the defence to argue that she 'deserved it' or that her consent should be presumed.\""
    },
    {
        id: 188,
        passageId: 38,
        question: "The passage argues that \"passing laws alone does not guarantee real justice\" because:",
        options: [
            "The laws are not strict enough.",
            "There is a large gap between progressive policy and a practice rooted in a patriarchal societal mindset that continues to judge victims.",
            "The judiciary is corrupt and inefficient.",
            "Victims prefer out-of-court settlements."
        ],
        correctAnswer: 1,
        explanation: "The text notes the irony: \"while the law has moved forward, the societal mindset is still rooted in a patriarchal past.\""
    },
    {
        id: 189,
        passageId: 38,
        question: "The comments made by public functionaries detailing the victim's private communications are criticized in the passage as:",
        options: [
            "Necessary for a transparent investigation.",
            "An \"institutional act of de facto character assassination\" that breaches the spirit of judicial directions on dignity.",
            "A brave attempt to reveal the truth.",
            "A legal requirement under the new BNS code."
        ],
        correctAnswer: 1,
        explanation: "The text calls it a \"breach of the spirit of the judicial directions... It is an institutional act of de facto character assassination.\""
    },
    {
        id: 190,
        passageId: 38,
        question: "What is the central contradiction highlighted in the Phaltan case?",
        options: [
            "The contradiction between the doctor's suicide note and the police report.",
            "The contradiction between the strong judicial/legal mandate to protect victim dignity and the failed social behaviour/administrative response.",
            "The contradiction between the state government and the central government.",
            "The contradiction between the medical evidence and the forensic report."
        ],
        correctAnswer: 1,
        explanation: "The text describes the \"profound contradiction between this strong judicial mandate [to protect dignity] and failed social behaviour.\""
    },
    // Passage 3: Sada Bainama
    {
        id: 191,
        passageId: 39,
        question: "The term \"Sada Bainama\" refers to:",
        options: [
            "A government-issued land title deed printed on stamp paper.",
            "An informal land sale agreement executed on plain paper, often used in the past but lacking official registration.",
            "A tax receipt given to farmers for selling crops.",
            "A special loan scheme for landless labourers."
        ],
        correctAnswer: 1,
        explanation: "The text defines them as \"informal, plain-paper land agreements.\""
    },
    {
        id: 192,
        passageId: 39,
        question: "What is the \"cruel paradox\" faced by farmers mentioned in the passage?",
        options: [
            "They have title deeds but are not allowed to cultivate the land.",
            "They cultivate the land and appear in \"enjoyment columns\" (possession records), yet are denied legal ownership/title, blocking access to welfare and loans.",
            "They receive welfare schemes like Rythu Bharosa but cannot sell their crops.",
            "They are forced to sell their land to the government at low prices."
        ],
        correctAnswer: 1,
        explanation: "The paradox is: \"farmers who have cultivated land for decades... appear in official 'enjoyment columns', are still denied ownership.\""
    },
    {
        id: 193,
        passageId: 39,
        question: "Why has the requirement for an \"affidavit from the legal heirs of the original seller\" become a roadblock?",
        options: [
            "Because the legal heirs demand too much money.",
            "Because for transactions that happened decades ago (e.g., 1980s), locating legal heirs of the original seller is often impossible or they refuse to cooperate.",
            "Because affidavits are not legal documents in Telangana.",
            "Because the farmers do not know how to write."
        ],
        correctAnswer: 1,
        explanation: "Inferred from the text saying it is \"an almost impossible condition\" for land bought in the early 1980s, leaving many waiting indefinitely."
    },
    {
        id: 194,
        passageId: 39,
        question: "The passage suggests that the \"Dharani portal\" launched in 2020:",
        options: [
            "Successfully resolved all Sada Bainama issues immediately.",
            "Simplified land records but often ended up freezing the status quo, failing to accommodate historical informal transactions like Sada Bainamas.",
            "Was declared illegal by the Supreme Court.",
            "Was used only for urban land records, not agricultural."
        ],
        correctAnswer: 1,
        explanation: "The text states Dharani \"aimed to simplify... but often ended up freezing the status quo, failing to accommodate these historical informal transactions.\""
    },
    {
        id: 195,
        passageId: 39,
        question: "Which solution is proposed in the passage to resolve the verification issue?",
        options: [
            "Conducting a 'Gram Sabha' to ascertain facts regarding the sale and issuing public notices to enable affidavit furnishing.",
            "Evicting all farmers who do not have registered deeds.",
            "Asking the farmers to pay a penalty equal to the land value.",
            "Waiting for the original sellers to return from abroad."
        ],
        correctAnswer: 0,
        explanation: "The text mentions: \"We proposed a Gram Sabha to be conducted... notices could be issued... enabling affidavits to be furnished publicly.\""
    }
];

export const DAY_10_SESSION = {
    day: 10,
    title: "Geopolitics, Victim Rights & Land Governance",
    passageCount: 3,
    questionCount: 15,
    duration: 40,
    topics: ["Somaliland Geopolitics", "Victim Dignity", "Sada Bainama Records"]
};
