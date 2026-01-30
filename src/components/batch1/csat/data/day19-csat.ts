// UPSC CSAT Practice Set - Day 19 (January 19)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_19_PASSAGES: CSATPassage[] = [
    {
        id: 68,
        title: "Agriculture & Science (Coconut Root Wilt)",
        content: `Coconut is one of the largest horticultural crops in peninsular India. However, this carefully cultivated imagery is under threat from a microscopic adversary: phytoplasma. Specifically, phytoplasma-induced root wilt disease has destroyed large tracts of traditional coconut-growing areas in Karnataka, Tamil Nadu, and Kerala, which together account for about 82-83% of India's coconut production. Root wilt disease is a debilitating condition, classified as a non-fatal disease, first identified more than a century ago. The disease spreads through insect vectors, aided by the movement of wind and uninterrupted stretches of coconut plantations.

The combined effect of abiotic stress induced by climate change and biotic stress from emerging pests has rendered coconut palms increasingly susceptible to root wilt disease. Breeding resistant and tolerant varieties remains one of the most successful tools for managing phytoplasma, as demonstrated by the high degree of success in addressing phytoplasma-related diseases in palms across the globe. However, a more prudent and sustainable approach would be to tap into the reservoir of genetic wealth already standing in farmers' fields within highly infested endemic zones. Coconut palms that display tolerance under high inoculum pressure and intense vector load hold the key to combating phytoplasma.

A participatory approach to selection offers a credible pathway to addressing this challenge. Identifying and breeding resistant and tolerant varieties in highly infested regions via "participatory selection" combined with structured observation can be undertaken with farmers playing a central role. With appropriate training, farmers can be enabled to identify potentially tolerant palms and can be instructed on the importance of careful, long-term observation and record-keeping. Once tolerant or resistant palms are identified and validated, they can be inducted into decentralised breeding programmes. This allows small, independent selection and evaluation efforts to proceed simultaneously.`
    },
    {
        id: 69,
        title: "International Relations (India-Germany)",
        content: `Last week, we witnessed something rather unusual. Television channels were full of images of Prime Minister Narendra Modi and German Chancellor Friedrich Merz flying kites together in Ahmedabad. It was quite a contrast to the other images of this very substantial meeting. But the kite is the perfect symbol to illustrate where Germany’s partnership with India is going. Germany and India have both experienced strong headwinds in recent months. The eroding international trade system is a challenge for both their economies. They both watch the increasing disregard for international law and the disruption of the rules-based global order with great worry.

One of the central messages of Chancellor Merz in India was that a free-trade agreement between Europe and India is what India and Germany need to propel their economies to the next level. And to become more resilient against unpredictable trade wars and supply chain interruptions. This was Chancellor Merz’s first visit outside the Western Alliance, and his first time in India.

The world economy is not a zero-sum game. When India profits, Germany also profits. A stronger Indian economy means a bigger market for German products, and a stronger footprint of Indian companies in Germany spells more competitive products for German businesses. Many well-established professional pathways around the world are closing up. But Germany continues to welcome smart, skilled and spirited Indians. Its migration partnership with India is built on safe, legal and predictable migration. In 2026, Germany is celebrating 75 years of diplomatic ties with India. Today, India and Germany stand closer together than ever before. Not just because external shocks brought them closer, but because in the previous years, they set a clear strategic direction.`
    },
    {
        id: 70,
        title: "Art & Culture (Piprawaha Relics)",
        content: `After being dispersed for over a century, ancient gems, charged by their proximity to the historical Buddha’s corporeal remains, have been reunited with some other extraordinary relics excavated at Piprawaha, Uttar Pradesh. This partial reunification, made possible by an Indian conglomerate’s acquisition of the gems from an overseas seller, is being celebrated by an exhibition in Delhi. How they will be housed once the exhibition closes is an urgent question. If these artifacts are carefully displayed — with lessons absorbed from a study of the ancient cult of relics — then this restitution has the potential to shift public opinion of India’s museums.

Understanding the place of Buddhist relics in early India provides insights into how small, visually indistinguishable objects were looked after and appreciated. After the Buddha’s passing, his followers periodically divided ash, charred bones and other bodily remains. These remains were placed in vessels, occasionally with gems and other offerings, and eventually interned in the cores of hemispherical mounds called stupas. A well-preserved stupa at Sanchi demonstrates how reliquaries conveyed the power of relics, helped people come close to them, and transformed them.

As little survives of the stupa that originally accommodated the Piprawaha relics, these esteemed artifacts are likely to be moved to a public institution. Merely placing them in sterile vitrines in a museum, as if they are lifeless objects, risks perpetuating the colonial paradigm that privileged seeing relics over their ability to energise communities. Thus, the museum chosen as their new home needs to design spaces that prepare diverse individuals to properly approach the relics, give them opportunities to spend time in proximity (chanting, meditating), and allow them to see the world anew.`
    },
    {
        id: 71,
        title: "Social Justice (Child Trafficking)",
        content: `Child trafficking remains a deeply disturbing reality in India. The Supreme Court in its recent decision in K. P. Kiran Kumar versus State has given strict guidelines to prevent such offences, and held that trafficking grossly violates children’s fundamental right to life as guaranteed by the Constitution. According to the National Crime Records Bureau, in 2022, about 3,098 children below 18 years were rescued. However, the conviction rate for such offences between 2018 and 2022 was only 4.8%.

Internationally, the Palermo Protocol (UN Protocol to Prevent, Suppress and Punish Trafficking in Persons) defines child trafficking. Presently, Section 143 of Bharatiya Nyaya Sanhita (BNS) 2023 provides that "whoever, for the purpose of exploitation, recruits, transports, harbours... a person or child... commits the offence of trafficking." The word 'exploitation' is wide enough in its scope and includes physical and sexual exploitation, slavery, servitude, or removal of organs.

The guidelines point out that the socio-economic vulnerabilities of the victims must be considered, especially those from marginalised communities. Society is still unable to protect children and adolescents from being criminals or being victims of crimes. Factors such as poverty, unemployment, migration, disasters and breakdown of the family system push children into vulnerability. In recent years, the spread of social media and online platforms has contributed to such offences, especially in terms of recruitment in the name of jobs or opportunities for "modelling".`
    }
];

export const DAY_19_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Agriculture
    {
        id: 336,
        passageId: 68,
        question: "Which of the following is identified as the primary vector or mode of transmission for the \"root wilt disease\" in coconut palms?",
        options: [
            "Contaminated soil and water.",
            "Insect vectors, aided by wind movement and continuous plantation stretches.",
            "Excessive use of chemical fertilizers.",
            "Genetic mutation caused by climate change."
        ],
        correctAnswer: 1,
        explanation: "Text: \"spreads through insect vectors, aided by the movement of wind and uninterrupted stretches.\""
    },
    {
        id: 337,
        passageId: 68,
        question: "The passage proposes \"participatory selection\" as a solution. What does this approach entail?",
        options: [
            "Scientists selecting seeds in a laboratory without farmer interference.",
            "Importing resistant varieties from the Caribbean.",
            "Tapping into the genetic wealth of palms already standing in infested zones, where farmers play a central role in identifying tolerant trees under high disease pressure.",
            "Replacing all coconut trees with areca nut trees."
        ],
        correctAnswer: 2,
        explanation: "Text: \"tap into the reservoir of genetic wealth already standing in farmers' fields... farmers playing a central role.\""
    },
    {
        id: 338,
        passageId: 68,
        question: "Why are palms standing in \"highly infested endemic zones\" considered valuable for breeding?",
        options: [
            "Because they produce more coconuts than regular trees.",
            "Because if they display tolerance under high inoculum pressure and intense vector load, they likely possess the genetic traits needed to combat phytoplasma.",
            "Because they are easier to transport to laboratories.",
            "Because they require less water."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Coconut palms that display tolerance under high inoculum pressure... hold the key to combating phytoplasma.\""
    },
    {
        id: 339,
        passageId: 68,
        question: "The passage mentions a \"combined effect\" that increases susceptibility to the disease. This refers to:",
        options: [
            "The combination of abiotic stress (climate change) and biotic stress (emerging pests).",
            "The combination of low prices and high labour costs.",
            "The combination of wind and rain.",
            "The combination of viral and bacterial infections."
        ],
        correctAnswer: 0,
        explanation: "Text: \"combined effect of abiotic stress induced by climate change and biotic stress from emerging pests.\""
    },
    {
        id: 340,
        passageId: 68,
        question: "Based on the text, \"root wilt disease\" is classified as:",
        options: [
            "A fatal viral infection that kills the tree immediately.",
            "A fungal disease affecting the leaves.",
            "A debilitating, non-fatal disease induced by phytoplasma.",
            "A nutrient deficiency disorder."
        ],
        correctAnswer: 2,
        explanation: "Text: \"Root wilt disease is a debilitating condition, classified as a non-fatal disease... phytoplasma-induced.\""
    },
    // Passage 2: India-Germany
    {
        id: 341,
        passageId: 69,
        question: "The author uses the metaphor of \"flying kites\" primarily to illustrate:",
        options: [
            "The casual and unserious nature of the meeting.",
            "The shared cultural heritage of festivals in India and Germany.",
            "The partnership's ability to \"soar\" despite stormy conditions (strong headwinds), symbolizing resilience and ambition.",
            "The competition between the two leaders to see whose kite flies higher."
        ],
        correctAnswer: 2,
        explanation: "Text: \"kite is the perfect symbol... shows you what it is capable of – just like the India-German partnership... experienced strong headwinds.\""
    },
    {
        id: 342,
        passageId: 69,
        question: "According to the passage, what specific economic agreement is cited by Chancellor Merz as essential for both economies?",
        options: [
            "A military alliance against China.",
            "A Free-Trade Agreement (FTA) between Europe and India.",
            "A loan agreement for infrastructure projects.",
            "A technology transfer pact for solar energy."
        ],
        correctAnswer: 1,
        explanation: "Text: \"free-trade agreement between Europe and India is what India and Germany need.\""
    },
    {
        id: 343,
        passageId: 69,
        question: "The passage challenges the notion of a \"zero-sum game\" in the world economy by arguing that:",
        options: [
            "If Germany wins, India must lose.",
            "A stronger Indian economy benefits Germany by providing a bigger market and more competitive products via Indian companies.",
            "Trade wars are beneficial for all parties.",
            "India and Germany should stop trading with other nations."
        ],
        correctAnswer: 1,
        explanation: "Text: \"not a zero-sum game... stronger Indian economy means a bigger market for German products... more competitive products.\""
    },
    {
        id: 344,
        passageId: 69,
        question: "Regarding migration, the passage highlights that:",
        options: [
            "Germany is closing its borders to all immigrants.",
            "Germany continues to welcome skilled Indians, and the partnership is built on \"safe, legal and predictable migration\" unlike other closing pathways.",
            "Indians are no longer interested in moving to Germany.",
            "Migration is the only topic discussed during the visit."
        ],
        correctAnswer: 1,
        explanation: "Text: \"Germany continues to welcome smart... Indians. Its migration partnership... is built on safe, legal and predictable migration.\""
    },
    {
        id: 345,
        passageId: 69,
        question: "What geopolitical context is mentioned as a shared concern for both India and Germany?",
        options: [
            "The stability of the Antarctic region.",
            "The eroding international trade system, increasing disregard for international law, and disruption of the rules-based global order.",
            "The rising price of oil in the Middle East.",
            "The expansion of the European Union."
        ],
        correctAnswer: 1,
        explanation: "Text: \"both watch the increasing disregard for international law and the disruption of the rules-based global order.\""
    },
    // Passage 3: Piprawaha Relics
    {
        id: 346,
        passageId: 70,
        question: "The passage argues that the \"restitution\" (return) of the Piprawaha relics has the potential to shift public opinion on museums if:",
        options: [
            "They are sold to the highest bidder.",
            "They are displayed carefully, absorbing lessons from the ancient cult of relics, rather than just being stored.",
            "They are kept hidden from the public to preserve them.",
            "They are returned to the overseas seller."
        ],
        correctAnswer: 1,
        explanation: "Text: \"If these artifacts are carefully displayed — with lessons absorbed... then this restitution has the potential to shift public opinion.\""
    },
    {
        id: 347,
        passageId: 70,
        question: "What criticism does the author make regarding the \"colonial paradigm\" of museum display?",
        options: [
            "It focuses too much on lighting.",
            "It privileges \"seeing\" relics as lifeless objects in sterile vitrines, ignoring their spiritual ability to energise and empower communities.",
            "It allows too many people to touch the artifacts.",
            "It does not provide enough security."
        ],
        correctAnswer: 1,
        explanation: "Text: \"placing them in sterile vitrines... risks perpetuating the colonial paradigm that privileged seeing relics over their ability to energise communities.\""
    },
    {
        id: 348,
        passageId: 70,
        question: "The passage cites the \"stupa at Sanchi\" to demonstrate:",
        options: [
            "How relics were ignored in ancient India.",
            "How reliquaries conveyed the power of relics, helping people approach and be transformed by them (contextualizing the display).",
            "That the Piprawaha relics belong in Sanchi.",
            "That gems were never used in Buddhist rituals."
        ],
        correctAnswer: 1,
        explanation: "Text: \"stupa at Sanchi can demonstrate how reliquaries conveyed the power of relics, helped people come close... transformed them.\""
    },
    {
        id: 349,
        passageId: 70,
        question: "According to the text, the Piprawaha relics consist of:",
        options: [
            "Only gold coins.",
            "Ancient gems reunited with extraordinary relics (likely corporeal remains/bones) excavated at Piprawaha.",
            "Statues of the Buddha made of bronze.",
            "Manuscripts written on palm leaves."
        ],
        correctAnswer: 1,
        explanation: "Text: \"ancient gems... reunited with some other extraordinary relics excavated at Piprawaha.\""
    },
    {
        id: 350,
        passageId: 70,
        question: "The author recommends that the new home for these relics should include spaces for:",
        options: [
            "Commercial shops and cafeterias only.",
            "Chanting mantras, quietly meditating, and contemplating aesthetics (engaging with the relics as living entities).",
            "Storing the relics in dark basements.",
            "Auctioning the gems to fund the museum."
        ],
        correctAnswer: 1,
        explanation: "Text: \"spaces that prepare diverse individuals... chanting mantras, quietly meditating, and contemplating aesthetics.\""
    },
    // Passage 4: Child Trafficking
    {
        id: 351,
        passageId: 71,
        question: "The conviction rate for child trafficking offences in India between 2018 and 2022 is reported as:",
        options: [
            "Over 50%.",
            "Only 4.8%.",
            "25%.",
            "90%."
        ],
        correctAnswer: 1,
        explanation: "Text: \"conviction rate for such offences between 2018 and 2022 was only 4.8%.\""
    },
    {
        id: 352,
        passageId: 71,
        question: "The passage refers to the \"Palermo Protocol\" in the context of:",
        options: [
            "Defining child trafficking internationally.",
            "Regulating the sale of Italian goods in India.",
            "A treaty between India and Pakistan.",
            "Guidelines for adoption agencies."
        ],
        correctAnswer: 0,
        explanation: "Text: \"Internationally, the Palermo Protocol... defines child trafficking.\""
    },
    {
        id: 353,
        passageId: 71,
        question: "According to Section 143 of the Bharatiya Nyaya Sanhita (BNS) 2023, the definition of \"trafficking\" includes acts done for the purpose of:",
        options: [
            "Education and employment only.",
            "Exploitation (including physical/sexual exploitation, slavery, servitude, organ removal).",
            "Religious conversion.",
            "Tourism."
        ],
        correctAnswer: 1,
        explanation: "Text: \"includes physical and sexual exploitation, slavery, servitude, or removal of organs.\""
    },
    {
        id: 354,
        passageId: 71,
        question: "What new factor does the passage identify as contributing to trafficking offences in \"recent years\"?",
        options: [
            "The rise of railway transport.",
            "The spread of social media and online platforms used for recruitment (e.g., fake modeling jobs).",
            "The decrease in the number of schools.",
            "The ban on child labour."
        ],
        correctAnswer: 1,
        explanation: "Text: \"spread of social media and online platforms has contributed... recruitment in the name of jobs or opportunities for 'modelling'.\""
    },
    {
        id: 355,
        passageId: 71,
        question: "The Supreme Court's decision in K. P. Kiran Kumar versus State held that trafficking violates:",
        options: [
            "The right to property.",
            "Children's fundamental right to life as guaranteed by the Constitution.",
            "The right to free speech.",
            "The directive principles of state policy only."
        ],
        correctAnswer: 1,
        explanation: "Text: \"held that trafficking grossly violates children’s fundamental right to life as guaranteed by the Constitution.\""
    }
];

export const DAY_19_SESSION = {
    day: 19,
    title: "Coconut Health, India-Germany Ties & Child Protection",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Coconut Root Wilt (Phytoplasma)", "India-Germany Strategic Partnership", "Piprawaha Relics Display", "Child Trafficking & BNS 2023"]
};
