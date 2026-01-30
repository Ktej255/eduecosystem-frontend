// UPSC CSAT Practice Set - Day 06 (January 6)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_06_PASSAGES: CSATPassage[] = [
    {
        id: 21,
        title: "Frontier Physics (Hydrogen Molecule)",
        content: `The hydrogen molecule (H₂) is the simplest stable molecule, with two protons and two electrons bound together. Scientists have studied it for more than a century because it is small enough that theory can try to predict its behaviour from basic physics, yet rich enough to include many features found in larger molecules. A recent study by researchers from the University of Warsaw and Adam Mickiewicz University has tested basic physics more precisely. Modern techniques can measure gaps between different energy levels of the H₂ molecule with an accuracy of about one part in a 100 billion. At this precision, experiments are sensitive not only to the main predictions of quantum mechanics but also to extremely small effects due to quantum electrodynamics (QED).

To match today's experimental precision, the new study's authors skipped a common shortcut called the Born-Oppenheimer approximation. This approximation assumes the nuclei to be almost fixed while electrons move, allowing physicists to ignore the effects of the nuclei's small movements. Instead, the authors solved the Schrödinger equation for H₂, treating the two electrons and two protons together, without using the approximation. This is called the direct nonadiabatic approach.

The study found that the theoretical predictions and recent measurements of energy levels agreed almost perfectly. This agreement is significant because it forces basic physics to pass an "exam": any disagreements between them would have to be extraordinarily small. If there were a mismatch, it could interpret an unknown force rather than a gap in existing theory. The study also pointed to the next bottleneck: further progress for excited states will require fully nonadiabatic calculations of some especially difficult QED ingredients.`
    },
    {
        id: 22,
        title: "Aviation Safety & Governance",
        content: `On June 12, 2025, Air India flight 171 crashed at Ahmedabad, Gujarat within a minute of its take-off. Out of the 242 passengers, there was one survivor. The investigation involves the Aircraft Accident Investigation Bureau (AAIB) of India, along with the NTSB (USA) and AAIB (UK). The preliminary report clearly mentioned two points: first, the fuel control switches of both engines had moved to cut off from three to four seconds after lift-off. Second, one pilot asked the other "why did you do that?" and the other responded "I did not do that." It has been established that the fuel control switches can only be moved mechanically by lifting the spring loaded switches.

The author argues that India has a dangerous credibility deficit. The DFDR and CVR would have clearly indicated what happened, yet the Indian authorities appear to lack transparency. The site was not sanitised immediately; television crews trampled through crash debris, wiping out clues. The airport opened in three hours with zero rescue and fire fighting services on standby. By delaying findings and couching facts, the AAIB is playing into the hands of social media narratives.

Comparatively, when a UPS cargo aircraft crashed in 2025, the NTSB had press briefings and findings within days, and the FAA issued an Emergency Airworthiness Directive immediately. In the AI 171 case, if there was a system failure on the Boeing 787, the FAA would have grounded all Boeing 787s, which it has not done. This indicates they know the reason behind the crash (likely pilot error/human factor), but the "political massaging" of the report by Indian authorities is creating a transparency crisis. India’s standing is dropping on the diplomatic front due to this lack of transparency.`
    },
    {
        id: 23,
        title: "International Relations (India-US Ties)",
        content: `In 2025, despite political strains and the postponement of the Quad Leaders’ Summit, the underlying machinery of India-United States cooperation remains vigorous. While political engagement appears low, notably amid U.S. trade sanctions on India and its warming ties with Pakistan, institutional collaboration continues to expand. The U.S. tariff regime on Indian goods and India's exports dropping in 2025 are stark indicators of tension. However, Washington’s balance-of-interest pragmatism ensures relations remain vital.

Since the 2008 civil nuclear deal, bilateral ties have been predominantly driven by defence and technology agreements. The 2025 Defence Framework Agreement marks a new chapter. Institutional continuity is fostering trust while shielding essential cooperation from political volatility. Examples include the Initiative on Critical and Emerging Technologies (iCET) and the Security of Supply Arrangement (SOSA) signed in 2024. In October 2025, a significant 10-year defence framework agreement was signed. Further bolstering ties, Hindustan Aeronautics Limited signed a billion-dollar deal in November 2025 with General Electric for fighter jet engines.

Despite political challenges, this enduring institutional engagement reveals a "dual-track dynamic." While political leaders manage strategic diplomacy and national interests, bureaucratic and institutional frameworks sustain core collaborations. The resilience of the partnership will depend on these parallel institutional tracks surviving short-term headwinds.`
    },
    {
        id: 24,
        title: "Nuclear Policy (SHANTI Bill)",
        content: `Parliament has cleared the Sustainable Harnessing and Advancement of Nuclear Energy in India (SHANTI) Bill, opening India’s nuclear power sector to private and foreign participation. This ends the monopoly of the Nuclear Power Corporation of India Limited (NPCIL) while retaining 51% government control over sensitive activities. The Bill allows up to 49% private participation. It facilitates the deployment of Small Modular Reactors (SMRs) to achieve net-zero targets.

The Opposition argues that the Bill dilutes accountability by capping operator liability at ₹2,000 crore (or ₹100 crore for SMRs) in case of accidents, which is considered unreasonable compared to actual damages in disasters like Fukushima. The "polluter pays" principle has been undermined. The Bill removes supplier liability completely, a move defended as necessary to attract foreign firms but criticised as diluting safety.

Section 39 of the Bill overrides the RTI Act of 2005, making crucial nuclear sector information—including plant details, operations, and safety data—"restricted". This dilutes public accountability. The Bill also overrides occupational safety norms for nuclear workers. The government argues that nuclear energy ensures clean baseload power, essential as India still relies on coal. However, critics claim it compromises safety and transparency for profit.`
    }
];

export const DAY_06_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Hydrogen Molecule
    {
        id: 101,
        passageId: 21,
        question: "What is the primary significance of the agreement between theoretical predictions and experimental measurements mentioned in the passage?",
        options: [
            "It proves that the Born-Oppenheimer approximation is the only valid method for studying molecules.",
            "It confirms that the hydrogen molecule is unstable and cannot be measured accurately.",
            "It serves as a high-precision \"exam\" for fundamental physics, showing that quantum mechanics and QED are accurate to an extraordinary degree (one part in 100 billion).",
            "It demonstrates that unknown forces are currently disrupting the energy levels of hydrogen."
        ],
        correctAnswer: 2,
        explanation: "The text states: \"force basic physics to pass an 'exam'... theory now agree at a level such that any disagreements... would have to be extraordinarily small.\""
    },
    {
        id: 102,
        passageId: 21,
        question: "The \"Born-Oppenheimer approximation\" is described in the passage as:",
        options: [
            "A method that treats electrons and protons as moving together simultaneously without separation.",
            "A shortcut that assumes nuclei are almost fixed while electrons move, allowing physicists to ignore the effects of the nuclei's small movements.",
            "A theory that ignores the existence of electrons entirely.",
            "A calculation used only for large molecules, not hydrogen."
        ],
        correctAnswer: 1,
        explanation: "The text defines it: \"assumes the nuclei to be almost fixed while electrons move... ignoring effects of nuclei's small movements.\""
    },
    {
        id: 103,
        passageId: 21,
        question: "Why is the Hydrogen molecule (H₂) chosen for this high-precision testing?",
        options: [
            "Because it is the only molecule that contains neutrons.",
            "Because it is small enough for theory to predict its behavior from basic physics, yet rich enough to include features of larger molecules.",
            "Because it is the only stable molecule in the universe.",
            "Because it is easy to see with a standard microscope."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"small enough that theory can try to predict... yet rich enough to include many features found in larger molecules.\""
    },
    {
        id: 104,
        passageId: 21,
        question: "According to the passage, if a mismatch were found between the theory and experiment at this level of precision, it could indicate:",
        options: [
            "The discovery of a new planet.",
            "A possible sign of an unknown force rather than just a gap in existing theory.",
            "That the Schrödinger equation is mathematically incorrect for all atoms.",
            "That the researchers made a calculation error in the Born-Oppenheimer approximation."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"interpret an unknown force rather than a gap in existing theory.\""
    },
    {
        id: 105,
        passageId: 21,
        question: "What is the \"direct nonadiabatic approach\" mentioned in the text?",
        options: [
            "Solving the Schrödinger equation by treating electrons and protons together, without assuming the nuclei are fixed.",
            "Using the Born-Oppenheimer approximation to simplify calculations.",
            "Ignoring the effects of quantum electrodynamics (QED).",
            "Measuring only the heat generated by the molecule."
        ],
        correctAnswer: 0,
        explanation: "The text says: \"treating the two electrons and two protons together... This is called the direct nonadiabatic approach.\""
    },
    // Passage 2: Aviation
    {
        id: 106,
        passageId: 22,
        question: "The author contends that the lack of grounding of Boeing 787s by the FAA after the AI 171 crash indicates:",
        options: [
            "The FAA does not care about safety in India.",
            "The crash was likely caused by a specific human action (fuel switches moved mechanically) rather than a systemic aircraft defect, otherwise the fleet would have been grounded.",
            "The FAA is waiting for the Indian AAIB to finish its report before taking any action.",
            "The Boeing 787 is immune to all mechanical failures."
        ],
        correctAnswer: 1,
        explanation: "The text argues: \"If there was an indication of serious system failures... the FAA would have grounded all Boeing 787s. The very fact that no such action has been done is a clear indication that they know the reason behind the crash.\""
    },
    {
        id: 107,
        passageId: 22,
        question: "Which of the following is cited as a major procedural failure at the crash site in Ahmedabad?",
        options: [
            "The airport was closed for too long (3 days) causing traffic jams.",
            "The site was not sanitised; media crews trampled debris, potentially destroying clues, and the airport reopened without rescue services on standby.",
            "The NTSB refused to send investigators to the site.",
            "The local police arrested the surviving passenger."
        ],
        correctAnswer: 1,
        explanation: "The text lists: \"site was not sanitised... crews tramping... wiping out clues. The airport was opened in three hours, with the zero availability of rescue and fire fighting services.\""
    },
    {
        id: 108,
        passageId: 22,
        question: "The passage contrasts the Indian investigation with the NTSB's handling of the UPS cargo crash to highlight:",
        options: [
            "The superior technology of the NTSB.",
            "The speed and transparency of the NTSB/FAA in issuing briefings and directives, versus the delay and \"political massaging\" by Indian authorities.",
            "The fact that cargo planes are safer than passenger planes.",
            "The difference in weather conditions between the US and India."
        ],
        correctAnswer: 1,
        explanation: "The comparison shows the NTSB had briefings/directives within days (transparency/speed), whereas India had a \"vague report,\" \"political massaging,\" and delays."
    },
    {
        id: 109,
        passageId: 22,
        question: "According to the preliminary report mentioned in the text, what was the immediate mechanical cause of the engine shutdown?",
        options: [
            "A bird hit both engines simultaneously.",
            "The fuel control switches of both engines moved to \"cut off\" shortly after lift-off.",
            "The landing gear failed to retract.",
            "The pilot spilled coffee on the controls."
        ],
        correctAnswer: 1,
        explanation: "The preliminary report mentioned: \"fuel control switches of both engines had moved to cut off from three to four seconds after lift-off.\""
    },
    {
        id: 110,
        passageId: 22,
        question: "The author argues that transparency in accident investigation is crucial because:",
        options: [
            "It allows YouTubers to make better videos.",
            "It helps \"recapture the ability to act as one\" and strengthens public confidence, as per the ICAO Chairman's 2006 message.",
            "It ensures that Boeing stock prices remain high.",
            "It allows the government to blame foreign manufacturers easily."
        ],
        correctAnswer: 1,
        explanation: "The text quotes the ICAO Chairman: \"By being transparent... you recapture the ability to act as one... to strengthen public confidence.\""
    },
    // Passage 3: India-US
    {
        id: 111,
        passageId: 23,
        question: "The \"dual-track dynamic\" of India-US relations described in the passage refers to:",
        options: [
            "The separation of trade relations from military relations.",
            "The contrast between strained political/trade engagement (sanctions, tariffs) and robust/expanding institutional & defence cooperation.",
            "The ability of India to maintain ties with both the US and Russia simultaneously.",
            "The parallel development of nuclear and solar energy projects."
        ],
        correctAnswer: 1,
        explanation: "The text describes the dynamic: \"While political engagement appears low... institutional collaboration... continues to expand... parallel institutional tracks.\""
    },
    {
        id: 112,
        passageId: 23,
        question: "Which of the following is listed as a sign of tension or \"political strain\" in 2025?",
        options: [
            "The signing of the SOSA agreement.",
            "The U.S. tariff regime on Indian goods and the drop in India's exports to the US.",
            "The HAL-General Electric deal for jet engines.",
            "The successful hosting of the Quad summit in New Delhi."
        ],
        correctAnswer: 1,
        explanation: "The text cites \"U.S. tariff regime levied on Indian goods and India’s exports to the U.S., which dropped sharply in 2025\" as indicators of tension."
    },
    {
        id: 113,
        passageId: 23,
        question: "The passage suggests that the \"resilience\" of the India-US partnership is primarily sustained by:",
        options: [
            "The personal friendship between the Indian PM and the US President.",
            "The shared religion of the majority populations.",
            "Deep institutional frameworks, defence agreements (like iCET, SOSA), and bureaucratic collaboration that shield ties from political volatility.",
            "The complete absence of any trade disputes."
        ],
        correctAnswer: 2,
        explanation: "The text concludes: \"resilience... will depend heavily on these parallel institutional tracks... bureaucratic and institutional frameworks continue to sustain... shielding essential cooperation.\""
    },
    {
        id: 114,
        passageId: 23,
        question: "The \"General Electric\" deal mentioned in the text relates to:",
        options: [
            "Supply of nuclear fuel for power plants.",
            "Manufacturing of fighter jet engines with Hindustan Aeronautics Limited (HAL).",
            "Construction of new ports in Mumbai.",
            "Export of Indian mangoes to the US."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"Hindustan Aeronautics Limited signed a billion-dollar deal... with the U.S.’s General Electric for fighter jet engines.\""
    },
    {
        id: 115,
        passageId: 23,
        question: "According to the passage, Washington's approach to India is characterized as:",
        options: [
            "\"Balance-of-interest pragmatism\" where relations remain vital despite transactional pressures.",
            "\"Total isolationism\" where the US is cutting all ties with India.",
            "\"Unconditional support\" regardless of India's actions.",
            "\"Cold War hostility\" due to India's ties with Russia."
        ],
        correctAnswer: 0,
        explanation: "The text states: \"Washington’s balance-of-interest pragmatism manifests itself in signals... that relations with New Delhi remain vital despite transactional pressures.\""
    },
    // Passage 4: Nuclear Policy
    {
        id: 116,
        passageId: 24,
        question: "What is the primary structural change introduced by the SHANTI Bill regarding the nuclear sector's ownership?",
        options: [
            "It privatizes NPCIL completely, selling 100% of it to foreign companies.",
            "It ends NPCIL's monopoly by allowing up to 49% private participation (including foreign) while retaining 51% government control over sensitive activities.",
            "It bans all private participation in the nuclear sector.",
            "It transfers control of nuclear plants to the state governments."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"ends the monopoly of NPCIL... allowing up to 49% private participation... while retaining 51% government control over sensitive activities.\""
    },
    {
        id: 117,
        passageId: 24,
        question: "Why has the \"liability clause\" in the SHANTI Bill faced criticism from the Opposition?",
        options: [
            "Because it sets the liability too high, scaring away investors.",
            "Because it removes supplier liability entirely and caps operator liability at a nominal amount (e.g., ₹2,000 crore), potentially leaving the state/public to bear the cost of a major disaster.",
            "Because it makes the Prime Minister personally liable for accidents.",
            "Because it applies only to solar power plants, not nuclear."
        ],
        correctAnswer: 1,
        explanation: "The text cites opposition arguments: \"dilutes accountability... Removing supplier liability and capping operator liability... is considered unreasonable.\""
    },
    {
        id: 118,
        passageId: 24,
        question: "The passage mentions \"Small Modular Reactors (SMRs)\" in the context of:",
        options: [
            "Replacing all coal plants immediately.",
            "Achieving net-zero targets and energy security through flexible, advanced reactor technologies facilitated by the Bill.",
            "Being banned under the new law due to safety concerns.",
            "Being used exclusively for military purposes."
        ],
        correctAnswer: 1,
        explanation: "The text says the Bill \"facilitates the deployment of Small Modular Reactors (SMRs)... to achieve India's net zero targets.\""
    },
    {
        id: 119,
        passageId: 24,
        question: "How does the SHANTI Bill affect the Right to Information (RTI) Act, according to the text?",
        options: [
            "It strengthens the RTI Act by making all nuclear data public.",
            "It has no effect on the RTI Act.",
            "Section 39 overrides the RTI Act, classifying crucial information like plant details and safety data as \"restricted,\" thereby reducing transparency.",
            "It mandates that all RTI queries must be answered within 24 hours."
        ],
        correctAnswer: 2,
        explanation: "The text states: \"Section 39 of the Bill seeks to override the RTI Act of 2005... make most crucial nuclear sector-related information... 'restricted'.\""
    },
    {
        id: 120,
        passageId: 24,
        question: "The government's primary justification for pushing the SHANTI Bill and nuclear energy is:",
        options: [
            "To create a monopoly for Adani and Ambani.",
            "To ensure clean, affordable \"baseload\" power capacity to support India's development and net-zero goals, reducing reliance on coal.",
            "To produce nuclear weapons for export.",
            "To reduce the number of jobs in the energy sector."
        ],
        correctAnswer: 1,
        explanation: "The text mentions: \"Nuclear power ensures clean energy... facilitates achieving India's net zero targets... electricity mix must have enough baseload generation capacity... to make it affordable and reliable.\""
    }
];

export const DAY_06_SESSION = {
    day: 6,
    title: "Physics, Aviation, IR & Nuclear Policy",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Hydrogen Molecule", "Aviation Safety", "India-US Ties", "SHANTI Bill"]
};
