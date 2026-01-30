// UPSC CSAT Practice Set - Day 09 (January 09)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_09_PASSAGES: CSATPassage[] = [
    {
        id: 33,
        title: "Public Health (Spina Bifida)",
        content: `The fact that pre-conceptional intake of folic acid can prevent more than 70% of Spina Bifida cases has been known; yet, India is one of the few countries where no meaningful efforts have been made to create awareness, making it home to one of the highest prevalence rates of the condition. Spina Bifida is a birth defect of the spinal cord that causes serious childhood paralysis and occurs in more than 25,000 children in India each year. The range of paralysis varies from mild weakness in the feet to complete paralysis from the hip downwards, resulting in many patients being wheelchair dependent right from early childhood. Additionally, affected children may have associated problems such as excessive water in the brain (hydrocephalus) and incontinence.

What is both tragic and unpardonable is the fact that despite the knowledge that Spina Bifida can be largely prevented with a B complex vitamin (folic acid), awareness regarding this simple and inexpensive intervention continues to remain lacking. Since 1991, the fact that pre-conceptional intake of folic acid by women can prevent defects has been known. Yet, 30 years later, India is one of the few countries where no meaningful efforts to create awareness have been carried out. While it is understood that in unplanned pregnancies awareness about pre-conceptional vitamins may not be given, the lack of any effort to educate the public cannot be termed anything less than gross public health negligence.

Research is ongoing to study the fortification of food vehicles such as salt and tea that are widely and uniformly consumed. A preliminary trial for tea fortification (results published in BMJ Nutrition) found that tea could potentially be a vehicle for fortification with folate and vitamin B12. It is time for a national awareness campaign. Until every woman knows that a folic acid tablet, taken before conception and during pregnancy, can help prevent Spina Bifida, the work remains incomplete.`
    },
    {
        id: 34,
        title: "Regulatory Governance (Drug Safety)",
        content: `The new guidelines to compound minor drug violations that the Central Drugs Standard Control Organization (CDSCO) has released operationalise a legal change in the works since 2023. Until recently, many instances of relatively minor or technical non-compliance under the Drugs and Cosmetics Act, 1940, invoked criminal prosecution. The new guidance standardises compounding instead, whereby firms can settle certain offences by paying a fine, instead of litigating. The legal backdrop is the Jan Vishwas Act, framed as an exercise in "decriminalising... for ease of living and doing business".

This change is for the better if the regulatory apparatus implements it in good faith. For offences based on record keeping and disclosure, compounding prevents needless criminalisation. However, the main pitfalls are the guidelines regressing into a ‘pay and pass’ scheme and the CDSCO’s transparency. If the CDSCO does not publish compounding orders and the underlying case details, the public may lose faith. Even if repeat offenders cannot avail of the benefit, there needs to be a publicly auditable trail.

The guidance’s emphasis on discretion cannot substitute for public reporting that lets independent actors check whether the same firms are repeat offenders. Next, the way the errors that can be compounded are written is broad enough in practice to cover a wide range of behaviours, from lapses in paperwork to more substantive compliance failures. If the compounding fines are also set too low, applied inconsistently or used routinely in place of deterrence, compliance will falter. The CDSCO also needs to link compounding to corrective actions and public-facing actions such as issuing alerts or recalling products.`
    },
    {
        id: 35,
        title: "Judiciary & Environment",
        content: `Over the last decade, the Supreme Court of India has increasingly moved from reviewing the legality of administrative decisions to issuing forward-looking directions mimicking regulation in important environmental cases. This shift has emerged in a series of matters in which regulators have dropped the ball, pulling the Court into a managerial role. But the Court has then compounded the problem by continuing to substitute for the regulator instead of correcting the regulator’s process and stepping back.

In the Aravalli matter, the Court adopted a unified definition for "Aravalli hills" to control mining, but within weeks placed that order in abeyance after realizing the ecological basis varied considerably across landscapes. In the ESZ (Eco-Sensitive Zone) issue, a uniform buffer sounded decisive at first but met with resistance due to feasibility issues. The Court has often shifted from being rooted in legality to that in consequences. In May 2025, the Court said ex post facto environmental clearances were "anathema", but in November, it recalled that position.

While the Court conducting itself as an approving authority has bitten the hardest is the consequences for public challenge. Project proponents and governments have been forced to approach the Court for permissions even before statutory authorities have finished examining a project, at the same time conferring a sense of finality that discourages contestation later. The bigger problem is that its early entry into the approval process can smother meaningful judicial review in other fora. Instead, the Court should consider adopting a steadier hand, protecting the environment by disciplining the state back into regulation.`
    },
    {
        id: 36,
        title: "Space Policy (ISRO's Challenge)",
        content: `ISRO’s past accomplishments raise the bar for future missions. The soft landing of the Chandrayaan-3 lander and the Aditya-L1 mission placed India in a coterie of countries with demonstrated capabilities. But the next phase depends less on individual feats and more on sustained institutional performance, clearer legal structures, and the capacity to execute ambitious missions in a routine way.

First, ISRO currently confronts a deceptive structural prioritisation problem. Specifically, the organisation prepares in parallel for the human spaceflight mission (Gaganyaan), complex science missions, satellite replenishment, and the development of NGLV (Next-Generation Launch Vehicle). However, its annual launch cadence and project timelines have become an increasingly obvious bottleneck. Experts have linked its low number of launches in 2025 to project delays.

Second, ISRO’s role in India’s liberalised space ecosystem is conceptually clear only on paper. The principal issue here is that India still lacks a comprehensive national space law. If a commercial mission fails, creates third-party liabilities, nobody can say in advance who is responsible for what, leaving ISRO to be pulled in by 'default' because it’s the most capable state actor. A national space law would not merely help startups; it would also protect ISRO by reducing the ad hoc demands placed on it. Finally, investment in India’s space sector fell sharply in 2024. Building systems and operating them requires more production depth and higher capital. The capacity to execute will determine whether the Indian space programme will also be able to deliver ambitious missions in a routine way.`
    }
];

export const DAY_09_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Spina Bifida
    {
        id: 161,
        passageId: 33,
        question: "Which one of the following statements best reflects the \"crux\" of the passage?",
        options: [
            "Tea is the most effective vehicle for vitamin fortification in India compared to salt.",
            "Spina Bifida is a genetic disorder that cannot be treated, only managed through surgery.",
            "India faces a crisis of \"gross public health negligence\" because it has failed to create awareness about a simple, inexpensive preventive measure (folic acid) for a debilitating birth defect.",
            "The Medical Research Council (MRC) Vitamin Study of 1991 was flawed."
        ],
        correctAnswer: 2,
        explanation: "The passage highlights the high prevalence of Spina Bifida and calls the lack of awareness about the simple preventive measure (folic acid) \"gross public health negligence.\""
    },
    {
        id: 162,
        passageId: 33,
        question: "The passage emphasizes \"pre-conceptional\" intake of folic acid. Based on the text, why is the timing (before conception) critical?",
        options: [
            "Because folic acid is expensive and should only be taken for a short duration.",
            "Because the text implies prevention effectiveness is linked to intake before and during pregnancy, and unplanned pregnancies often miss this window due to lack of awareness.",
            "Because taking it after the child is born causes side effects.",
            "Because it helps the mother recover from childbirth."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"pre-conceptional intake... can prevent... unplanned pregnancies awareness... may not be given.\" The defect happens early (spinal cord formation), so intake before conception is key."
    },
    {
        id: 163,
        passageId: 33,
        question: "According to the passage, which of the following are potential complications associated with Spina Bifida?\n1. Paralysis from the hip downwards.\n2. Hydrocephalus (excessive water in the brain).\n3. Incontinence (lack of control over bowel/bladder).",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are listed in the passage as associated problems or results of the condition."
    },
    {
        id: 164,
        passageId: 33,
        question: "The author mentions a study published in BMJ Nutrition regarding \"food vehicles\". What was the key finding?",
        options: [
            "Salt is the only viable vehicle for folic acid fortification.",
            "Tea could potentially be a vehicle for fortification with folate and vitamin B12 in India.",
            "Fortified foods cause more harm than good.",
            "Indian diets are already rich enough in folate."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"trial for tea fortification... found that tea could potentially be a vehicle for fortification with folate and vitamin B12.\""
    },
    {
        id: 165,
        passageId: 33,
        question: "What is the author's primary criticism of the Indian public health system in this context?",
        options: [
            "It spends too much money on surgeries.",
            "It has failed to implement a national awareness campaign despite knowing the solution for over 30 years.",
            "It relies too heavily on foreign doctors.",
            "It has banned the sale of folic acid tablets."
        ],
        correctAnswer: 1,
        explanation: "The text calls it \"unpardonable\" that \"30 years later, India is one of the few countries where no meaningful efforts to create awareness have been carried out.\""
    },
    // Passage 2: Drug Safety
    {
        id: 166,
        passageId: 34,
        question: "The author uses the term \"pay and pass scheme\" to describe a potential risk. What does this imply?",
        options: [
            "A system where companies pay bribes to get licenses.",
            "A scenario where regulatory compounding becomes a mechanism for firms to simply pay a fine to hide substantive failures without fixing them or facing public scrutiny.",
            "A tax scheme for pharmaceutical exports.",
            "A transparent method of collecting revenue for the government."
        ],
        correctAnswer: 1,
        explanation: "The author warns of guidelines \"regressing into a ‘pay and pass’ scheme\" where firms settle offences by paying fines (\"pay\") and avoid transparency or corrective action (\"pass\")."
    },
    {
        id: 167,
        passageId: 34,
        question: "What is the primary objective of the \"Jan Vishwas Act\" mentioned in the passage?",
        options: [
            "To increase the jail term for drug adulteration to life imprisonment.",
            "To decriminalize and rationalize offences to promote \"ease of living and doing business.\"",
            "To privatize the CDSCO.",
            "To ban the import of foreign medicines."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"The legal backdrop is the Jan Vishwas Act that was framed as an exercise in 'decriminalising... for ease of living and doing business'.\""
    },
    {
        id: 168,
        passageId: 34,
        question: "Why does the author argue that a \"publicly auditable trail\" (transparency) is essential for the success of these guidelines?",
        options: [
            "Because it allows the government to collect more taxes.",
            "Because without publishing orders, independent actors cannot verify if the same firms are repeat offenders, leading to a loss of public faith.",
            "Because it is required by the World Health Organization.",
            "Because it helps companies advertise their products."
        ],
        correctAnswer: 1,
        explanation: "The text argues: \"If the CDSCO does not publish... the public may lose faith... lets independent actors check whether the same firms are repeat offenders.\""
    },
    {
        id: 169,
        passageId: 34,
        question: "According to the passage, \"compounding\" of offences is most appropriate for:",
        options: [
            "Spurious or adulterated drugs that cause death.",
            "Offences based on record keeping, disclosure, and technical non-compliance.",
            "All types of drug violations including manufacturing fake drugs.",
            "Companies that refuse to pay taxes."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"For offences based on record keeping and disclosure... preventing needless criminalisation.\""
    },
    {
        id: 170,
        passageId: 34,
        question: "Which of the following is a specific recommendation made by the author to ensure safety?",
        options: [
            "Compounding must be linked to corrective actions (like recalls) and public alerts.",
            "The fines for compounding should be removed entirely.",
            "The CDSCO should stop inspecting factories.",
            "Compounding should be available even for repeat offenders."
        ],
        correctAnswer: 0,
        explanation: "The text concludes: \"CDSCO also needs to link compounding to corrective and preventive actions... issuing alerts or directing firms to recall products.\""
    },
    // Passage 3: Judiciary & Environment
    {
        id: 171,
        passageId: 35,
        question: "The central criticism of the Supreme Court's \"managerial role\" in environmental cases is that:",
        options: [
            "The Court lacks the scientific expertise to make any environmental decisions.",
            "By substituting for the regulator, the Court creates uncertainty/instability and smothers meaningful judicial review in other forums.",
            "The Court is too lenient on polluters.",
            "The Court is blocking all development projects in India."
        ],
        correctAnswer: 1,
        explanation: "The text argues the Court's \"managerial role... substituted for the regulator,\" leading to \"uncertainty,\" \"instability,\" and potentially \"smothering meaningful judicial review in other fora.\""
    },
    {
        id: 172,
        passageId: 35,
        question: "The passage cites the \"Aravalli matter\" and \"ESZ issue\" to illustrate:",
        options: [
            "The success of the Court in stopping illegal mining.",
            "The \"push-pull relationship\" where the Court issues sweeping uniform rules (like unified definitions/buffers) that often have to be modified or retracted due to practical/ecological complexities.",
            "The refusal of the government to follow court orders.",
            "The need for a complete ban on mining in all of India."
        ],
        correctAnswer: 1,
        explanation: "The text describes how the \"unified definition\" (Aravalli) and \"uniform buffer\" (ESZ) had to be placed in abeyance or modified because they didn't account for ecological variation."
    },
    {
        id: 173,
        passageId: 35,
        question: "What is the implication of the Court's \"early entry into the approval process\" mentioned in the text?",
        options: [
            "It speeds up development projects significantly.",
            "It confers a sense of finality that discourages later contestation and meaningful review in other forums (like the NGT).",
            "It saves money for the project proponents.",
            "It ensures that no environmental damage ever happens."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"conferring a sense of finality that discourages contestation later... smother meaningful judicial review in other fora.\""
    },
    {
        id: 174,
        passageId: 35,
        question: "The author suggests the Supreme Court should shift its approach to:",
        options: [
            "Banning all industrial activity.",
            "\"Disciplining the state back into regulation\" – insisting on time-bound regulatory action with reasons, rather than taking over the regulator's job.",
            "Appointing itself as the permanent environment minister.",
            "Ignoring environmental cases entirely."
        ],
        correctAnswer: 1,
        explanation: "The text concludes the Court should adopt a \"steadier hand... disciplining the state back into regulation... specifying thresholds... insisting on time-bound regulatory action.\""
    },
    {
        id: 175,
        passageId: 35,
        question: "The phrase \"ex post facto clearances\" refers to:",
        options: [
            "Clearances granted before a project starts.",
            "Clearances granted after a project has already violated environmental norms or started operations (retroactive approval).",
            "Clearances granted by foreign governments.",
            "Clearances for export purposes only."
        ],
        correctAnswer: 1,
        explanation: "Ex post facto means \"after the fact.\" The text refers to \"post facto environmental clearances\" (approving a project after it has already started/violated norms)."
    },
    // Passage 4: ISRO
    {
        id: 176,
        passageId: 36,
        question: "According to the passage, the \"next phase\" of India's space journey depends primarily on:",
        options: [
            "Achieving a manned landing on Mars.",
            "Moving from individual feats to \"sustained institutional performance\" and routine execution of complex missions.",
            "Privatizing ISRO completely.",
            "Reducing the budget for space missions."
        ],
        correctAnswer: 1,
        explanation: "The text says the next phase depends \"less on individual feats and more on sustained institutional performance... capacity to execute ambitious missions in a routine way.\""
    },
    {
        id: 177,
        passageId: 36,
        question: "What is the \"structural prioritisation problem\" ISRO faces?",
        options: [
            "It has too much money and doesn't know how to spend it.",
            "It is trying to do too many things in parallel (Human spaceflight, NGLV, science missions, satellites) while facing a bottleneck in launch cadence (frequency).",
            "The government has stopped funding science missions.",
            "Scientists are leaving ISRO for NASA."
        ],
        correctAnswer: 1,
        explanation: "The text says ISRO \"prepares in parallel for human spaceflight... complex science missions... but its annual launch cadence... has become an increasingly obvious bottleneck.\""
    },
    {
        id: 178,
        passageId: 36,
        question: "Why does the author argue that a \"national space law\" is necessary to protect ISRO?",
        options: [
            "Because ISRO needs legal permission to launch rockets.",
            "Because currently, if a private commercial mission fails or creates liability, ISRO is pulled in by \"default\" as the state actor; a law would clarify roles and liabilities.",
            "Because startups are trying to steal ISRO's technology.",
            "Because the UN mandates every country to have a space law."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"If a commercial mission fails... nobody can say in advance who is responsible... leaving ISRO to be pulled in by 'default'... A national space law... would also protect ISRO.\""
    },
    {
        id: 179,
        passageId: 36,
        question: "The \"NGLV\" mentioned in the passage stands for:",
        options: [
            "New Global Launch Vehicle.",
            "Next-Generation Launch Vehicle (a more powerful launch vehicle successor).",
            "Nuclear Guided Launch Vehicle.",
            "National Geospatial Launch Vehicle."
        ],
        correctAnswer: 1,
        explanation: "In the passage's list of parallel preparations, NGLV stands for Next-Generation Launch Vehicle."
    },
    {
        id: 180,
        passageId: 36,
        question: "The passage notes that investment in India's space sector \"fell sharply in 2024\". This reflects:",
        options: [
            "The global lack of interest in space.",
            "Specific difficulties of financing hardware that is deployed on long horizons, requiring \"patient capital\" and production depth.",
            "The failure of the Chandrayaan-3 mission.",
            "The government banning foreign investment in space."
        ],
        correctAnswer: 1,
        explanation: "The text links the fall in investment to the need for more production depth and higher capital for systems that require long horizons."
    }
];

export const DAY_09_SESSION = {
    day: 9,
    title: "Public Health, Regulation, Judiciary & Space",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Spina Bifida", "Drug Safety Guidelines", "Green Governance", "ISRO Challenges"]
};
