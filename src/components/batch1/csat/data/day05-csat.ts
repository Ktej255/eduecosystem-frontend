// UPSC CSAT Practice Set - Day 05 (January 5)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_05_PASSAGES: CSATPassage[] = [
    {
        id: 17,
        title: "Frontier Science (Genetic Code)",
        content: `The dictionary of life has a new update. A DNA sequence that signals cells in almost all other organisms to stop synthesising proteins instead encodes a rare amino acid in some archaea, according to a study published in Science. Archaea are microbes that resemble bacteria in shape and size but are biologically distinct. Calling the study “the first of its kind,” biological sciences associate professor Abhrajyoti Ghosh said the discovery could help scientists engineer proteins with “functional advantages that have been hitherto unknown.” The study’s findings provide “yet another fantastic example of how biology hides secrets that drive biotechnology innovation.”

At the heart of this code are the four nitrogen-containing bases: adenine (A), guanine (G), cytosine (C) and thymine (T). Each amino acid in a protein corresponds to a three-base-long sequence of DNA — a.k.a. a triplet codon. The genetic code is a dictionary of 64 such codons. Of these, 61 ‘sense’ codons encode 20 common amino acids. The remaining three, called ‘stop’ codons, don’t correspond to any amino acid. Instead, when the protein-making mechanism encounters them, it terminates the protein chain.

However, in some Archaea, the ‘TAG’ stop codon has been completely repurposed. These organisms read the TAG codon as a signal for Pyl (pyrrolysine) not occasionally but always. This “genome-wide incorporation of Pyl at TAG codons” has led the team to propose “the existence of a previously unrecognized genetic code.” The ‘Pyl code’ has 62 sense codons instead of the usual 61 and only two stop codons. Berkeley researchers genetically modified Escherichia coli to express the archaeal cellular machinery required to read the Pyl code. They engineered the bacterium to express a protein whose sequence had a TAG codon in the middle. If this setup worked, the bacteria would read TAG as Pyl and produce the complete protein. Otherwise, the TAG codon would signal ‘stop’, and the bacteria would produce a shorter protein. Extracts confirmed they produced the complete protein.`
    },
    {
        id: 18,
        title: "Geopolitics (China's 2026 Posture)",
        content: `As 2026 begins, China presents a paradox: a nation wrestling with economic challenges yet projecting strategic confidence; a leadership tightening political control domestically while expanding its diplomatic reach abroad. For India, this Chinese posture and the shift in the stance of the United States toward Beijing have narrowed strategic space. China’s 2025 economic growth was weaker than official figures suggest. Domestic demand remained weak, and the overbuilt property sector continued to weigh on confidence. Instead of boosting consumption, Beijing reinforced a state-led model, prioritizing advanced manufacturing and "whole-chain breakthroughs" in high-tech industries. This "China Shock 2.0" is generating serious disruptions for developed and developing economies alike.

China's attempts to stabilize major-power ties were undercut by its harsh response to the Japanese Prime Minister’s comment on Taiwan. Beijing signalled that it remains unwilling to accommodate divergence on issues it deems sensitive. Yet, the perception of a "G2 overlay" – a shadow of tacit coordination between the U.S. and China – has serious consequences, as even limited accommodation can constrain the choices of other states. For India, the implications are sobering. The U.S. remains committed to preventing Chinese hegemony in Asia but is less inclined to prioritize relations with India as a strategic counter to China.

On India-China relations, 2025 witnessed cautious stabilization but no substantive progress on structural issues. The situation along the borders remains stable but not normal. Disengagement has not been accompanied by de-escalation or de-induction. "Buffer zones" continue to restrict India's patrolling rights. If these temporary arrangements become permanent, China will have achieved incremental gains consistent with its grey-zone playbook. China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its "core interests".`
    },
    {
        id: 19,
        title: "Socio-Economics (Women's Labour)",
        content: `A 2023 United Nations report showed that globally, women spend 2.8 more hours than men on unpaid care and domestic work. The struggle to count women’s labour continues. While domestic labour has increasingly entered the public discourse, the mental and emotional labour in sustaining relationships and managing household dynamics continues to go largely unacknowledged. This uncounted labour, which plays a critical role in the smooth functioning of families and societies, is rarely measured or rewarded. Shirin Rai argues that economic and policy priorities have long marginalized care work by framing it as secondary to "productive" labour traditionally performed by men. The privileging of male breadwinner employment and the relentless focus on GDP growth have contributed to the systemic devaluation of care-related work.

In India, there is still no legal framework that recognizes or compensates this form of unpaid work, despite it being the backbone of the economy. However, courts have begun to challenge this silence. In Kannaiyan Naidu and Others vs Kamsala Ammal and Others (2023), the Madras High Court ruled that a wife who performed household duties and cared for the family contributed, albeit indirectly, to the acquisition of family assets. Therefore, she was entitled to an equal share in the property.

These efforts to recognize women’s labour must be accompanied by a structural reconfiguration of gendered social relations. Without such a transformation, the burden of unpaid care work will remain disproportionately feminised. Article 338 of the Bolivian Constitution recognizes that work at home is an economic activity that creates added value and produces social welfare and wealth. Housewives are entitled to social security. Similarly, Argentina enacted a law recognizing employment contracts for domestic workers where women can get pension credits for unpaid care work.`
    },
    {
        id: 20,
        title: "International Relations (Venezuela & Oil)",
        content: `President Donald Trump’s plan to take control of Venezuela’s oil industry and ask American companies to revitalize it after capturing President Nicolás Maduro in a raid isn't likely to have a significant immediate impact on oil prices. Venezuela’s oil industry is in disrepair after years of neglect and international sanctions, so it could take years and major investments before production can increase dramatically. Some analysts are optimistic that Venezuela could double its current output of about 1.1 million barrels a day fairly quickly, but others warn of infrastructure decay.

"The estimate is that in order for Venezuela to increase from one million barrels per day – that is what it produces today – to four million barrels, it will take about a decade and about a hundred billion dollars of investment," said Francisco Monaldi. Venezuela produces heavy crude oil needed for diesel fuel and asphalt. Diesel is in short supply around the world because of sanctions on oil from Venezuela and Russia. Boosting Venezuelan production could make it easier to put pressure on Russia because Europe and the rest of the world could get more of the diesel and heavy oil they need from Venezuela and stop buying from Russia.

However, Matthew Waxman, a Columbia University law professor, noted legal issues: "An occupying military power can’t enrich itself by taking another state’s resources." Additionally, leading companies like ExxonMobil and Chevron didn't immediately respond, and the political picture remained uncertain. The problem isn't just finding the oil; it's a question of the political environment and whether companies can count on the government to live up to their contracts.`
    }
];

export const DAY_05_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Genetics (Questions 81-85)
    {
        id: 81,
        passageId: 17,
        question: "The discovery of the \"Pyl code\" in Archaea is scientifically significant primarily because:",
        options: [
            "(a) It proves that Archaea are identical to bacteria in their genetic structure.",
            "(b) It challenges the standard biological rule where 'TAG' functions exclusively as a stop codon, showing it can encode an amino acid instead.",
            "(c) It demonstrates that DNA sequences are composed of five nitrogenous bases instead of four.",
            "(d) It suggests that Escherichia coli naturally produces pyrrolysine in the human gut."
        ],
        correctAnswer: 1,
        explanation: "The text states the study provides \"yet another fantastic example of how biology hides secrets... TAG stop codon has been completely repurposed... signals for Pyl... instead of stop\"."
    },
    {
        id: 82,
        passageId: 17,
        question: "What is the potential application of this discovery mentioned in the passage?",
        options: [
            "(a) Curing genetic diseases in humans by removing stop codons.",
            "(b) Bioengineering proteins with previously unknown functional advantages using the modified genetic code.",
            "(c) Creating new forms of bacteria that can survive without nitrogen.",
            "(d) Rewriting the dictionary of life to include 100 new amino acids."
        ],
        correctAnswer: 1,
        explanation: "The text quotes Abhrajyoti Ghosh: \"discovery could help scientists engineer proteins with functional advantages that have been hitherto unknown.\""
    },
    {
        id: 83,
        passageId: 17,
        question: "Based on the experiment described, how did researchers confirm that the modified E. coli was successfully reading the \"Pyl code\"?",
        options: [
            "(a) The bacteria stopped producing proteins altogether.",
            "(b) The bacteria produced a shorter protein, indicating the stop signal worked.",
            "(c) The bacteria produced a complete protein, indicating the TAG codon was read as an amino acid rather than a stop signal.",
            "(d) The bacteria changed its shape to resemble Archaea."
        ],
        correctAnswer: 2,
        explanation: "The text says: \"If this setup worked... bacteria would read TAG as Pyl and produce the complete protein... Extracts confirmed they produced the complete protein.\""
    },
    {
        id: 84,
        passageId: 17,
        question: "The passage states that the \"genetic code is a dictionary of 64 codons.\" In the standard code (not the Pyl code), how is this dictionary organized?",
        options: [
            "(a) 62 sense codons and 2 stop codons.",
            "(b) 60 sense codons and 4 stop codons.",
            "(c) 61 sense codons encoding 20 amino acids, and 3 stop codons that terminate the chain.",
            "(d) 64 sense codons, each encoding a unique amino acid."
        ],
        correctAnswer: 2,
        explanation: "The text defines the standard code: \"Of these, 61 ‘sense’ codons encode 20 common amino acids. The remaining three, called ‘stop’ codons... terminate the protein chain.\""
    },
    {
        id: 85,
        passageId: 17,
        question: "Which of the following best describes the \"Archaea\" mentioned in the text?",
        options: [
            "(a) A type of virus that infects bacteria.",
            "(b) Microbes that resemble bacteria in shape/size but are biologically distinct and can possess unique genetic codes.",
            "(c) A synthetic organism created in a laboratory at Berkeley.",
            "(d) A rare form of algae found only in Antarctic lakes."
        ],
        correctAnswer: 1,
        explanation: "The text describes Archaea as \"microbes that resemble bacteria in shape and size but are biologically distinct.\""
    },
    // Passage 2: China (Questions 86-90)
    {
        id: 86,
        passageId: 18,
        question: "The author describes China's situation in 2026 as a \"paradox.\" What constitutes this paradox?",
        options: [
            "(a) China is growing economically at 10% but failing diplomatically.",
            "(b) China is wrestling with domestic economic challenges while simultaneously projecting strategic confidence and expanding diplomatic reach abroad.",
            "(c) China is loosening political control at home while becoming aggressive abroad.",
            "(d) China is partnering with India while fighting with the United States."
        ],
        correctAnswer: 1,
        explanation: "The text opens with: \"China presents a paradox: a nation wrestling with economic challenges yet projecting strategic confidence... tightening political control... while expanding its diplomatic reach.\""
    },
    {
        id: 87,
        passageId: 18,
        question: "What does the term \"China Shock 2.0\" refer to in the context of the passage?",
        options: [
            "(a) A sudden collapse of the Chinese property market.",
            "(b) A massive military invasion of Taiwan.",
            "(c) A disruption caused by China's state-led prioritization of advanced manufacturing and high-tech exports (EVs, batteries) to compensate for weak domestic demand.",
            "(d) The imposition of new tariffs by the U.S. on Chinese goods."
        ],
        correctAnswer: 2,
        explanation: "The text links \"China Shock 2.0\" to \"prioritizing advanced manufacturing... high-tech industries\" (like EVs, though EVs implied by context of high-tech exports) generating disruptions."
    },
    {
        id: 88,
        passageId: 18,
        question: "According to the passage, what is the status of the \"India-China border situation\"?",
        options: [
            "(a) Completely resolved with a return to the pre-2020 status quo.",
            "(b) Stable but not normal; disengagement has occurred but without de-escalation, and buffer zones restrict India's patrolling rights.",
            "(c) Intense military conflict is currently ongoing.",
            "(d) India has regained full access to all patrolling points."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"situation along the borders remains stable but not normal. Disengagement has not been accompanied by de-escalation... Buffer zones continue to restrict India's patrolling rights.\""
    },
    {
        id: 89,
        passageId: 18,
        question: "The passage suggests that the \"G2 overlay\" (tacit coordination between U.S. and China) has which implication for India?",
        options: [
            "(a) It benefits India by reducing global tensions.",
            "(b) It constrains India's choices, as the U.S. becomes less inclined to prioritize relations with India as a strategic counter to China.",
            "(c) It leads to a formal military alliance between India and Russia.",
            "(d) It forces China to accept India's border claims."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"perception of a 'G2 overlay'... has serious consequences... U.S.... is less inclined to prioritize relations with India as a strategic counter to China.\""
    },
    {
        id: 90,
        passageId: 18,
        question: "Which of the following strategies is China likely to persist with, according to the text?",
        options: [
            "(a) Complete isolation from the global economy.",
            "(b) Managed competition with the U.S., hardball diplomacy, and prickliness on \"core interests\" while stabilizing major relationships.",
            "(c) Adopting a western-style democratic political system.",
            "(d) Abandoning its claims on Taiwan to improve ties with Japan."
        ],
        correctAnswer: 1,
        explanation: "The text concludes: \"China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its 'core interests'.\""
    },
    // Passage 3: Women's Labour (Questions 91-95)
    {
        id: 91,
        passageId: 19,
        question: "The primary argument against the current GDP-focused economic model presented in the passage is:",
        options: [
            "(a) It fails to account for inflation correctly.",
            "(b) It systematically devalues care-related work by framing it as secondary to \"productive\" labour, despite it being critical for the economy.",
            "(c) It overestimates the contribution of the manufacturing sector.",
            "(d) It does not include the agricultural output of rural India."
        ],
        correctAnswer: 1,
        explanation: "The text cites Shirin Rai arguing that \"economic and policy priorities have long marginalized care work by framing it as secondary to 'productive' labour... systemic devaluation.\""
    },
    {
        id: 92,
        passageId: 19,
        question: "What was the significance of the Madras High Court ruling in Kannaiyan Naidu vs Kamsala Ammal (2023)?",
        options: [
            "(a) It made it mandatory for husbands to pay a monthly salary to their wives.",
            "(b) It ruled that a wife's household duties contribute to asset acquisition, entitling her to an equal share in the property.",
            "(c) It criminalized the practice of asking women to do household chores.",
            "(d) It stated that domestic work cannot be valued in monetary terms."
        ],
        correctAnswer: 1,
        explanation: "The text states the court ruled that \"a wife who performed household duties... contributed... to the acquisition of family assets... entitled to an equal share.\""
    },
    {
        id: 93,
        passageId: 19,
        question: "The passage cites Bolivia and Argentina to illustrate:",
        options: [
            "(a) Countries where women do less housework than men.",
            "(b) Examples of legal frameworks that explicitly recognize domestic work as economic activity or entitle women to social security/pension credits for it.",
            "(c) Countries that have abolished the concept of GDP.",
            "(d) Nations where the judicial system ignores women's rights."
        ],
        correctAnswer: 1,
        explanation: "Bolivia recognizes home work as economic activity; Argentina allows pension credits for it. These are examples of legal frameworks recognizing unpaid care."
    },
    {
        id: 94,
        passageId: 19,
        question: "The term \"emotional labour\" in the passage refers to:",
        options: [
            "(a) The physical effort required to clean a house.",
            "(b) The work involved in sustaining relationships, managing household dynamics, and supporting the well-being of others.",
            "(c) The stress faced by women in corporate jobs.",
            "(d) The labour performed by psychologists."
        ],
        correctAnswer: 1,
        explanation: "The text defines it as: \"mental and emotional labour in sustaining relationships, managing household dynamics, and supporting the well-being of others.\""
    },
    {
        id: 95,
        passageId: 19,
        question: "According to the author, what is required alongside legal recognition to truly address the issue?",
        options: [
            "(a) A complete ban on women working outside the home.",
            "(b) A structural reconfiguration of gendered social relations where men co-shoulder care responsibilities.",
            "(c) The privatization of all childcare services.",
            "(d) A reduction in the retirement age for women."
        ],
        correctAnswer: 1,
        explanation: "The text argues: \"must be accompanied by a structural reconfiguration of gendered social relations, wherein men actively participate in and co-shoulder care responsibilities.\""
    },
    // Passage 4: Venezuela (Questions 96-100)
    {
        id: 96,
        passageId: 20,
        question: "What is the primary reason cited in the passage for why Trump's plan might not have an \"immediate\" impact on oil prices?",
        options: [
            "(a) The U.S. military refused to participate in the raid.",
            "(b) Venezuela's oil industry is in disrepair and requires years of time and billions in investment to restore capacity.",
            "(c) Venezuela has run out of oil reserves.",
            "(d) The global demand for oil has dropped to zero."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"Venezuela’s oil industry is in disrepair after years of neglect... it could take years and major investments before production can increase.\""
    },
    {
        id: 97,
        passageId: 20,
        question: "How could boosting Venezuelan oil production potentially impact Russia?",
        options: [
            "(a) It would help Russia sell more oil to the U.S.",
            "(b) It would allow Europe/World to source heavy oil/diesel from Venezuela instead of Russia, thereby increasing pressure on Russia.",
            "(c) It would force Russia to invest in Venezuela's infrastructure.",
            "(d) It would have no impact on Russia as they produce different types of oil."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"make it easier to put pressure on Russia because Europe... could get more of the diesel and heavy oil they need from Venezuela and stop buying from Russia.\""
    },
    {
        id: 98,
        passageId: 20,
        question: "According to the passage, Venezuela is a major producer of which specific type of oil?",
        options: [
            "(a) Light sweet crude used for gasoline.",
            "(b) Heavy crude oil needed for diesel fuel and asphalt.",
            "(c) Synthetic oil made from coal.",
            "(d) Bio-fuel derived from sugarcane."
        ],
        correctAnswer: 1,
        explanation: "The text explicitly says: \"Venezuela produces the kind of heavy crude oil that's needed for diesel fuel, asphalt...\""
    },
    {
        id: 99,
        passageId: 20,
        question: "What legal hurdle does Matthew Waxman highlight regarding the \"seizure\" of Venezuela's oil?",
        options: [
            "(a) American companies are banned from operating in South America.",
            "(b) International law prohibits an occupying military power from enriching itself by taking another state’s resources.",
            "(c) The Venezuelan constitution forbids foreign investment.",
            "(d) The UN Security Council must approve all oil contracts."
        ],
        correctAnswer: 1,
        explanation: "Waxman notes: \"An occupying military power can’t enrich itself by taking another state’s resources.\""
    },
    {
        id: 100,
        passageId: 20,
        question: "The passage implies that American energy companies are hesitant primarily because:",
        options: [
            "(a) They do not have the technology to drill for heavy crude.",
            "(b) They are concerned about the uncertainty of the political environment and the stability/sanctity of contracts.",
            "(c) They prefer to invest in renewable energy only.",
            "(d) They are currently bankrupt."
        ],
        correctAnswer: 1,
        explanation: "The text mentions companies \"didn't immediately respond\" and notes: \"It's a question of the political environment and whether companies can count on the government to live up to their contracts.\""
    }
];

export const DAY_05_SESSION = {
    day: 5,
    title: "Genetic Code, China 2026, Women's Labour & Venezuela",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Frontier Science (Archaea)", "Geopolitics (China)", "Women's Unpaid Labour", "Venezuela Oil Industry"]
};
