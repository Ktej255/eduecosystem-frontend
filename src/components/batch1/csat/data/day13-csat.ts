// UPSC CSAT Practice Set - Day 13 (January 13)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_13_PASSAGES: CSATPassage[] = [
    {
        id: 48,
        title: "Environment & Social Justice (Conservation Rights)",
        content: `In an article in Nature, a group of researchers has argued for greater rights, agency, and education among communities. The colonial legacy in the world of conservation, of privileging individual wildlife over human well-being, endures in the Global South. The article suggests the marginalisation and "othering" — the treatment of people as "different", or creating an "us" versus "them" narrative — continues to affect indigenous people when conservation projects are concerned.

The discourse on racism in conservation was renewed by the Black Lives Matter protests of 2020. The authors propose a framework for more "inclusive" conservation that supports human rights of Black, Indigenous and People of Colour (BIPOC) communities. The history of conservation has always been steeped in marginalisation. "Othering" has primarily occurred against BIPOC communities, and is exacerbated in the global south, where governance systems and the rule of law are weaker. The main players in this form of discrimination are the wealthy elite, multi-national corporations, and the inheritance of the colonial penchant for a "pristine" wilderness devoid of people.

Colonial rulers routinely forced indigenous peoples and communities out of protected areas. However, the paper added that the prevailing notion of a "pristine wilderness without human occupation" casts local people "as enemies, rather than custodians of nature." Indigenous peoples and local communities (IPLCs), on the contrary, can be "very effective stewards of nature." In India, the British colonial administration created public works projects such as irrigation and railways but also instituted mechanisms to displace local communities for forestry and plantations. The authors use the recent example of the tiger Avni, killed in 2018, to illustrate the disparity: urban animal lovers demanded "justice" for the tigress, while the number of children left parentless following Avni’s killing of at least 13 rural villagers was barely noted.`
    },
    {
        id: 49,
        title: "Frontier Physics (Nuclear Fusion)",
        content: `Scientists at a nuclear fusion reactor in China recently surmounted an important obstacle in operating reactor vessels at high density. They pushed plasma density 65% beyond a special threshold, entering a stable state that overcomes a long-standing barrier to achieving burning plasma, the stage where a fusion reaction becomes self-sustaining. The density is the number of fuel particles that can be squeezed into the reactor. More density means more collisions and more fusion. But there’s a catch. For decades, tokamaks—the donut-shaped magnetic vessels designed to hold the superhot plasma—ran into the "Greenwald density limit". Beyond this limit, the plasma collapses in a disruption that could damage the reactor.

The EAST fusion reactor in Hefei, China, reported it had achieved stable plasmas at densities 1.3x to 1.65x of the limit. The team achieved this by combining two techniques. First, they used electron cyclotron resonance heating (ECRH) during start-up. In ECRH, microwave beams are shot into the plasma to heat electrons. Second, the current-carrying plasma created the magnetic cage. For the experiments, EAST's tungsten surfaces were also coated with a thin layer of lithium.

Tungsten is an impurity that radiates a lot of heat away, potentially causing the plasma to collapse. This creates a vicious cycle. Hot plasma strikes the walls, releases impurities, the impurities radiate heat, the plasma gets hotter in spots to compensate, those hot spots hit the walls harder, releasing more impurities. Eventually the system may spiral into disruption. The new experiment managed to mitigate this. The findings suggest a practical and scalable pathway for extending density limits in tokamaks and next-generation burning plasma fusion devices like ITER.`
    },
    {
        id: 50,
        title: "Maritime Strategy (History & Policy)",
        content: `India’s maritime policy has undergone significant evolution, intricately linked to its historical and geographical context. The two most prominent geographic features of the Indian subcontinent are the Himalayas and the Indian Ocean. While foreigners came to India through the land route in the north to establish empires, in the south of the Vindhyas, Indians sailed east and west for trade, cultural exchange, and the occasional conquest. History has taught us the all-pervading significance of the maritime domain. The capabilities of Indian sailors to reach the far corners of the west and the east in ancient and medieval times is a source of pride. Authors like N. Manoharan called the Cholas "The Nautical Tigers."

However, the colonial period marked a shift. As K.M. Panikkar critically analyses, the lack of control over the seas by Indian rulers led to the establishment of European empires. Panikkar observed, "History has shown that whatever power controls the Indian Ocean has, in the first instance, India's seaborne trade at her mercy, and, in the second, India's very independence itself."

Today, the "Indo-Pacific" concept has dominated strategic discourse. It reflects the political and economic confluence of like-minded regional powers. The Indian Navy has transformed from an observer into a net security provider, curbing piracy in the Arabian Sea. The challenge now lies in the "underwater domain awareness" (UDA) and integrating the "Blue Economy" revolution with climate resilience. India needs to refine its Indo-Pacific strategy in the context of China as an economic competitor rather than just a geopolitical adversary.`
    },
    {
        id: 51,
        title: "International Law (Sovereignty & Immunity)",
        content: `The attack by the United States on Venezuela and the capture of the Venezuelan President, Nicolás Maduro, is yet another gigantic affront to international law. This adventure comes on the heels of a series of illegal American strikes. It is axiomatic that Article 2(4) of the United Nations Charter proscribes the use of force in international relations. The UN Charter outlawed war and fundamentally reshaped international law. Article 2(4) permits only two narrow exceptions: force may be used in self-defence or with the authorisation of the UN Security Council. None is present in the extant case.

Legal scholar Nico Krisch has argued that the prohibition on the use of force is the most constraining aspect of international law. Hegemonic states like the U.S. have consistently sought to overcome this constraint by broadening the concept of self-defence. However, forcibly taking the custody of a foreigner, let alone a head of state, on foreign land without that state’s consent is an internationally wrongful act.

The other legal issue is the treatment of President Maduro. As the International Court of Justice held in the Arrest Warrant Case (Democratic Republic of the Congo vs Belgium), heads of state enjoy inviolability and immunity ratione personae (personal immunity) from the criminal jurisdiction of a foreign court. The U.S. argument that it does not recognise Maduro as the legitimate President cuts no ice under international law. Irrespective of how someone came to office, what matters is the test of effective control. The Maduro administration exercised effective control over Venezuelan territory. Thus, he is entitled to personal immunity. Holding otherwise would give states a licence to stop recognising regimes they do not consider lawful, thereby denying them immunity, which would wreak havoc in the international legal system.`
    }
];

export const DAY_13_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Conservation Rights
    {
        id: 236,
        passageId: 48,
        question: "The author uses the term \"pristine wilderness\" to describe a concept that:",
        options: [
            "Is the most effective model for conserving biodiversity in the 21st century.",
            "Is a colonial inheritance that falsely envisions nature as devoid of people, often leading to the displacement and villainization of local communities.",
            "Refers to the specific type of forest found only in the Amazon basin.",
            "Is a legal term defined under the Wildlife Protection Act, 1972."
        ],
        correctAnswer: 1,
        explanation: "The text states the \"colonial legacy... of privileging individual wildlife over human well-being... inheritance of the colonial penchant for a 'pristine' wilderness devoid of people.\""
    },
    {
        id: 237,
        passageId: 48,
        question: "Which of the following best reflects the \"framework\" proposed by the researchers in Nature?",
        options: [
            "A ban on all human entry into national parks to protect wildlife.",
            "A shift towards \"inclusive\" conservation that supports the human rights and agency of Indigenous and BIPOC communities, countering exclusion.",
            "The privatization of forests to multi-national corporations for better management.",
            "The relocation of all indigenous people to urban areas to provide them with better jobs."
        ],
        correctAnswer: 1,
        explanation: "The text proposes a framework for \"more 'inclusive' conservation that supports human rights... countering exclusion.\""
    },
    {
        id: 238,
        passageId: 48,
        question: "The passage cites the incident of \"Avni the tigress\" (2018) primarily to highlight:",
        options: [
            "The success of India's Project Tiger.",
            "The dangerous nature of tigers in Maharashtra.",
            "The disparity in public empathy, where the rights of an individual animal were prioritized by urban elites over the lives and well-being of rural villagers.",
            "The need for better weapons for forest guards."
        ],
        correctAnswer: 2,
        explanation: "The text highlights the disparity: \"urban animal lovers demanded 'justice' for the tigress... while the number of children left parentless... was barely noted.\""
    },
    {
        id: 239,
        passageId: 48,
        question: "According to the passage, how does the \"colonial legacy\" continue to manifest in conservation today?",
        options: [
            "By funding too many railways in forest areas.",
            "By privileging individual wildlife over human well-being and perpetuating the \"othering\" of local communities as enemies of nature.",
            "By forcing everyone to speak English in national parks.",
            "By refusing to use modern technology for tracking animals."
        ],
        correctAnswer: 1,
        explanation: "The text says colonial rulers \"forced indigenous peoples out,\" casting them as \"enemies, rather than custodians,\" and this \"othering\" persists."
    },
    {
        id: 240,
        passageId: 48,
        question: "The researchers argue that Indigenous Peoples and Local Communities (IPLCs) should be viewed as:",
        options: [
            "Enemies of nature who poach animals.",
            "Passive recipients of government aid.",
            "Effective stewards of nature rather than trespassers.",
            "Tourists in their own land."
        ],
        correctAnswer: 2,
        explanation: "Direct quote: \"Indigenous peoples and local communities (IPLCs), on the contrary, can be 'very effective stewards of nature'.\""
    },
    // Passage 2: Nuclear Fusion
    {
        id: 241,
        passageId: 49,
        question: "What is the \"Greenwald limit\" mentioned in the passage?",
        options: [
            "The maximum temperature a fusion reactor can reach before melting.",
            "A theoretical density threshold for plasma in tokamaks, beyond which the plasma typically becomes unstable and collapses.",
            "The limit on the amount of funding a scientific project can receive.",
            "The maximum speed at which electrons can travel in a magnetic field."
        ],
        correctAnswer: 1,
        explanation: "The text defines it: \"a density limit beyond which the plasma could collapse... known as the Greenwald limit.\""
    },
    {
        id: 242,
        passageId: 49,
        question: "How did the scientists at the EAST reactor overcome the density limit?",
        options: [
            "By using a reactor made entirely of plastic.",
            "By lowering the temperature to absolute zero.",
            "By combining Electron Cyclotron Resonance Heating (ECRH) with a lithium coating on the tungsten surfaces to manage impurities and stability.",
            "By removing all magnetic fields from the reactor."
        ],
        correctAnswer: 2,
        explanation: "The team achieved this by \"combining two techniques... electron cyclotron resonance heating (ECRH)... and EAST's tungsten surfaces were also coated with a thin layer of lithium.\""
    },
    {
        id: 243,
        passageId: 49,
        question: "Why is \"Tungsten\" considered problematic in the context of fusion reactors, despite being used?",
        options: [
            "It is too soft and melts easily.",
            "It is an impurity that radiates a lot of heat away from the plasma, potentially causing cooling and collapse (the \"vicious cycle\").",
            "It is radioactive and dangerous to handle.",
            "It prevents the microwave beams from entering the reactor."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"Tungsten is an impurity that radiates a lot of heat away... potentially causing the plasma to collapse.\""
    },
    {
        id: 244,
        passageId: 49,
        question: "The achievement of \"stable plasmas at densities 1.3x to 1.65x of the limit\" is significant because:",
        options: [
            "It proves that the Greenwald limit was a mathematical error.",
            "It widens the path to \"burning plasma,\" where the fusion reaction becomes self-sustaining (energy output exceeds input).",
            "It allows the reactor to run without any fuel.",
            "It reduces the cost of electricity to zero immediately."
        ],
        correctAnswer: 1,
        explanation: "The text says it \"widens path to power... overcoming a long-standing barrier to achieving burning plasma, the stage where a fusion reaction becomes self-sustaining.\""
    },
    {
        id: 245,
        passageId: 49,
        question: "Based on the passage, what is the role of \"burning plasma\"?",
        options: [
            "To burn nuclear waste.",
            "To achieve a state where the fusion reaction becomes self-sustaining.",
            "To heat the reactor walls for cleaning.",
            "To test the melting point of tungsten."
        ],
        correctAnswer: 1,
        explanation: "Defined in text: \"burning plasma, the stage where a fusion reaction becomes self-sustaining.\""
    },
    // Passage 3: Maritime Strategy
    {
        id: 246,
        passageId: 50,
        question: "The author cites K.M. Panikkar to emphasize which strategic lesson?",
        options: [
            "That the Himalayas are the only true barrier defending India.",
            "That control over the Indian Ocean is critical for India's trade and independence; losing it historically led to colonization.",
            "That India should stop all maritime trade to become self-reliant.",
            "That European empires were superior in land warfare."
        ],
        correctAnswer: 1,
        explanation: "Panikkar observed that whoever controls the Indian Ocean has \"India's very independence itself\" at their mercy."
    },
    {
        id: 247,
        passageId: 50,
        question: "The term \"Nautical Tigers\" refers to:",
        options: [
            "The modern Indian Navy's submarine fleet.",
            "The Chola dynasty, highlighting their historical maritime prowess and outward reach.",
            "The tigers found in the Sundarbans mangroves.",
            "Pirate groups operating in the Bay of Bengal."
        ],
        correctAnswer: 1,
        explanation: "Text: \"N. Manoharan called the Cholas 'The Nautical Tigers'.\""
    },
    {
        id: 248,
        passageId: 50,
        question: "According to the passage, the Indian Navy's role has evolved in the first decade of this century towards:",
        options: [
            "Becoming a passive observer of international events.",
            "Acting as a net security provider, notably curbing piracy in the Arabian Sea.",
            "Focusing exclusively on riverine warfare.",
            "Withdrawing from the Indian Ocean to save costs."
        ],
        correctAnswer: 1,
        explanation: "Text: \"In the first decade of this century, the Indian Navy played a stellar role in curbing piracy... transformed from an observer into a net security provider.\""
    },
    {
        id: 249,
        passageId: 50,
        question: "The \"Indo-Pacific\" concept is described in the passage as:",
        options: [
            "A military alliance strictly between India and the USA.",
            "A geographic error that confuses the Indian and Pacific Oceans.",
            "A concept reflecting the \"political and economic confluence\" of like-minded regional powers.",
            "A strategy to colonize East Africa."
        ],
        correctAnswer: 2,
        explanation: "Text: \"reflects the political and economic confluence of like-minded regional powers.\""
    },
    {
        id: 250,
        passageId: 50,
        question: "What future challenge is identified for India's maritime strategy?",
        options: [
            "Building wooden ships like in ancient times.",
            "Addressing \"underwater domain awareness\" (UDA) and integrating the Blue Economy with climate resilience.",
            "Banning all fishing in the Indian Ocean.",
            "Renaming the Indian Ocean to the South Asia Ocean."
        ],
        correctAnswer: 1,
        explanation: "Text: \"The challenge now lies in the 'underwater domain awareness' (UDA) and integrating the Blue Economy...\""
    },
    // Passage 4: International Law
    {
        id: 251,
        passageId: 51,
        question: "The author contends that the U.S. action against Venezuela violates Article 2(4) of the UN Charter because:",
        options: [
            "The U.S. did not use enough force.",
            "Article 2(4) prohibits the use of force in international relations, and neither of the two exceptions (self-defence or UNSC authorisation) applies in this case.",
            "Venezuela is a member of NATO.",
            "The UN Charter allows force only if the President is unpopular."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Article 2(4) permits only two narrow exceptions... None is present in the extant case.\""
    },
    {
        id: 252,
        passageId: 51,
        question: "The concept of \"immunity ratione personae\" cited from the Arrest Warrant Case implies that:",
        options: [
            "Heads of state can be arrested anywhere if they commit crimes.",
            "Heads of state enjoy personal immunity and inviolability from the criminal jurisdiction of a foreign court while in office.",
            "Only democratically elected leaders have immunity.",
            "Immunity applies only to diplomats, not Presidents."
        ],
        correctAnswer: 1,
        explanation: "Text: \"heads of state enjoy inviolability and immunity... from the criminal jurisdiction of a foreign court.\""
    },
    {
        id: 253,
        passageId: 51,
        question: "How does the author counter the U.S. argument that Maduro is not the \"legitimate\" President?",
        options: [
            "By arguing that the U.S. elections were also rigged.",
            "By stating that under international law, the test is \"effective control\" over territory, which the Maduro administration possessed, entitling him to immunity regardless of recognition.",
            "By claiming that Maduro is a U.S. citizen.",
            "By citing the Venezuelan constitution."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Irrespective of how someone came to office... what matters is the test of effective control... Thus, President Maduro... is entitled to personal immunity.\""
    },
    {
        id: 254,
        passageId: 51,
        question: "The passage suggests that denying immunity based on \"subjective criteria\" of legitimacy would:",
        options: [
            "Strengthen democracy worldwide.",
            "Wreak havoc in the international legal system by giving states a licence to target any regime they dislike.",
            "Reduce the cost of international litigation.",
            "Help the UN Security Council function better."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Holding otherwise would give states a licence... thereby denying them immunity, which would wreak havoc in the international legal system.\""
    },
    {
        id: 255,
        passageId: 51,
        question: "The overarching theme of the passage is:",
        options: [
            "A defense of the U.S. war on drugs.",
            "A critique of the weakening of international law and the rule of law by hegemonic powers through unilateral use of force.",
            "A detailed history of Venezuela's oil industry.",
            "An argument for the abolition of the International Court of Justice."
        ],
        correctAnswer: 1,
        explanation: "The text argues the U.S. action is a \"gigantic affront to international law\" and discusses how powerful nations weaken the rule of law."
    }
];

export const DAY_13_SESSION = {
    day: 13,
    title: "Conservation, Fusion, Maritime & International Law",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Inclusive Conservation", "Nuclear Fusion Limits", "Maritime History (Cholas)", "Sovereignty & Immunity"]
};
