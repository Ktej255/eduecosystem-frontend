
export interface CSATQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
}

export interface CSATPassage {
    id: number;
    title: string;
    source: string;
    content: string;
    questions: CSATQuestion[];
}

export interface VocabularyItem {
    word: string;
    context: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    csatTip?: string;
    toneIndicator?: 'positive' | 'negative' | 'neutral';
}

export interface CSATDayData {
    dayId: number;
    title: string;
    description: string;
    passages: CSATPassage[];
    vocabulary: VocabularyItem[];
}

export const CSAT_BATCH1_1_DATA: Record<number, CSATDayData> = {
    // Day 2 content
    2: {
        dayId: 2,
        title: "UPSC CSAT Practice Set - Day 02",
        description: "Climate Finance, ECCD, Higher Education & Energy Efficiency",
        vocabulary: [
            {
                word: "ITMOs (Internationally Transferred Mitigation Outcomes)",
                context: "...generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes.",
                definition: "Carbon credits that can be transferred between countries under Article 6 of the Paris Agreement.",
                synonyms: ["Carbon credits", "Emission reduction units"],
                antonyms: [],
                csatTip: "Think of it as a tradeable unit of emission reduction.",
                toneIndicator: 'neutral'
            }
        ],
        passages: [
            {
                id: 1,
                title: "Article 6 and Climate Finance",
                source: "Paris Agreement Analysis 2025",
                content: "To strengthen the delivery and efficiency of climate finance, the carbon markets under Article 6 (A6) of the Paris Agreement were made fully operational at COP29. India's new JCM partnership with Japan is an early example. The real prize lies in using this mechanism to accelerate a low-carbon industrial transformation.",
                questions: [
                    {
                        id: 1,
                        question: "Based on the passage, what is the 'real prize' for India in participating in the Article 6 mechanism?",
                        options: [
                            "Immediate financial gain through credit sales",
                            "Acceleration of low-carbon industrial and technological transformation",
                            "Universal adoption of electric vehicles",
                            "Complete removal of coal-based power"
                        ],
                        correctAnswer: 1,
                        explanation: "The text states the real prize is the acceleration of low-carbon industrial transformation."
                    }
                ]
            }
        ]
    },
    // Day 3 content (POCSO, Quad, etc.)
    3: {
        dayId: 3,
        title: "UPSC CSAT Practice Set - Day 03",
        description: "Pharma Sector, Urban Waste, Sanitation & Homelessness",
        vocabulary: [
            {
                word: "Generics",
                context: "Generics dominate, with 70% of exports to the U.S. and Europe.",
                definition: "Non-branded pharmaceutical drugs that are chemically equivalent to their branded counterparts but sold at lower prices after patent expiry.",
                synonyms: ["Generic drugs", "Off-patent medicines"],
                antonyms: ["Branded drugs", "Patented drugs"],
                toneIndicator: 'neutral',
                csatTip: "In pharma context, generics = affordable alternatives to patented drugs."
            },
            {
                word: "API (Active Pharmaceutical Ingredients)",
                context: "...mainly active pharmaceutical ingredients (API) from China (72% share)...",
                definition: "The biologically active component of a pharmaceutical drug that produces the intended therapeutic effect.",
                synonyms: ["Active ingredients", "Drug substances"],
                antonyms: [],
                toneIndicator: 'neutral',
                csatTip: "APIs are the 'core' ingredient that makes a medicine work."
            },
            {
                word: "Circular Economy",
                context: "...sustainable waste management underlines the circular economy model...",
                definition: "An economic system aimed at eliminating waste through the continual use of resources via recycling, reusing, and recovering materials.",
                synonyms: ["Closed-loop economy", "Regenerative economy"],
                antonyms: ["Linear economy"],
                toneIndicator: 'positive'
            },
            {
                word: "Extended Producer Responsibility (EPR)",
                context: "Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste.",
                definition: "A policy approach where producers are given significant responsibility for the treatment or disposal of post-consumer products.",
                synonyms: ["Producer responsibility", "Take-back policy"],
                antonyms: [],
                toneIndicator: 'neutral',
                csatTip: "EPR shifts waste management burden from consumers/government to producers."
            },
            {
                word: "Open Defecation Free (ODF)",
                context: "...every village has declared itself Open Defecation Free (ODF).",
                definition: "A status given to communities where no one practices open defecation and proper sanitation facilities are available.",
                synonyms: ["ODF status", "Sanitation coverage"],
                antonyms: [],
                toneIndicator: 'positive'
            }
        ],
        passages: [
            {
                id: 301,
                title: "Pharma Sector & Trade Dynamics",
                source: "U.S. Pharma Policy Announcement 2025",
                content: "In September 2025, U.S. President Donald Trump's sweeping announcement imposing a 100% tariff on branded and patented pharmaceutical imports from October 1, 2025, saw India's pharmaceutical industry standing at a crossroads. The U.S.'s move, ostensibly aimed at bolstering domestic manufacturing, threatens to disrupt supply chains while also fuelling India's export-led growth. Yet, as tariffs ripple through global markets, India's dominance in generics offers a vital buffer. With pharma exports to the U.S. alone reaching close to $9 billion in fiscal 2025, the stakes could not be higher.\n\nGenerics dominate, with 70% of exports to the U.S. and Europe. However, $5 billion in annual imports, mainly active pharmaceutical ingredients (API) from China (72% share), exposes supply chain risks. The U.S. tariff, which has spared generics for now, targets branded drugs unless made domestically. India supplies 40% of U.S. generics, saving payers $219 billion in 2022. Yet, the market jitters were immediate. An escalation to generics could cut export revenues by 10%-15%. Some firms with over 30% U.S. exposure face rerouting costs and regulatory hurdles. This could spur \"China-plus-one\" strategies, redirecting exports to Africa and Southeast Asia.\n\nChallenges such as IP disputes and API dependency persist, but resilience shines through initiatives such as Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP). U.S. tariffs risk causing shortages if India's 40% generic supply frays. India must leverage MoUs, invest $10 billion in APIs via PLI 2.0, and push WTO reforms. With global pharma eyeing $450 billion for India by 2047, collaboration in the form of east-west hybrids is key.",
                questions: [
                    {
                        id: 301,
                        question: "What is the primary \"buffer\" that protects the Indian pharmaceutical industry from the immediate impact of the new U.S. tariffs, according to the passage?",
                        options: [
                            "The 100% tariff exemption granted to all Indian companies by President Trump.",
                            "India's dominance in the generics market, which has been currently spared from the tariffs that target branded/patented drugs.",
                            "The robust domestic supply of Active Pharmaceutical Ingredients (APIs) which reduces reliance on China.",
                            "The redirection of all exports to the African and Southeast Asian markets."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: \"India's dominance in generics offers a vital buffer... U.S. tariff... has spared generics for now\"."
                    },
                    {
                        id: 302,
                        question: "The passage mentions \"China-plus-one\" strategies in the context of the tariff shock. What does this imply?",
                        options: [
                            "India will start importing APIs from both China and the U.S. to balance trade.",
                            "Indian firms might diversify their export destinations to regions like Africa and Southeast Asia to reduce over-dependence on the U.S. market.",
                            "China will increase its tariffs on Indian drugs to match the U.S. policy.",
                            "Indian companies will partner with Chinese firms to manufacture drugs inside the U.S."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: \"This could spur 'China-plus-one' strategies, redirecting exports to Africa and Southeast Asia.\""
                    },
                    {
                        id: 303,
                        question: "Which of the following is identified as a critical structural vulnerability of the Indian pharma sector?",
                        options: [
                            "Low demand for Indian drugs in Europe.",
                            "High dependence on China for Active Pharmaceutical Ingredients (APIs), constituting 72% of imports.",
                            "The lack of government schemes like PLI 2.0 to support manufacturing.",
                            "The inability to produce branded drugs for the domestic market."
                        ],
                        correctAnswer: 1,
                        explanation: "Text cites: \"mainly active pharmaceutical ingredients (API) from China (72% share), exposes supply chain risks.\""
                    },
                    {
                        id: 304,
                        question: "Based on the passage, why might the U.S. hesitate to escalate tariffs to cover Indian generics?",
                        options: [
                            "Because Indian generics account for 40% of U.S. supply and save payers billions, so tariffs could cause shortages and higher costs.",
                            "Because the WTO has explicitly banned tariffs on generic medicines.",
                            "Because Indian generics are of lower quality and do not compete with U.S. manufacturers.",
                            "Because the U.S. has a surplus of domestically manufactured generic drugs."
                        ],
                        correctAnswer: 0,
                        explanation: "Text states: \"India supplies 40% of U.S. generics, saving payers $219 billion in 2022.\""
                    },
                    {
                        id: 305,
                        question: "The author suggests that \"collaboration in the form of east-west hybrids is key.\" This likely refers to:",
                        options: [
                            "Merging Indian and Chinese pharmaceutical companies.",
                            "A strategic approach where India leverages global partnerships, innovation, and equitable access to secure its pharma supremacy.",
                            "Importing western medicine to replace traditional Indian medicine.",
                            "Exclusively manufacturing drugs that are popular in Western countries."
                        ],
                        correctAnswer: 1,
                        explanation: "Inferred from the conclusion: \"collaboration... east-west hybrids... equitable access is key.\""
                    }
                ]
            },
            {
                id: 302,
                title: "Urban Waste & Circular Economy",
                source: "COP30 Climate Agenda Belem",
                content: "At COP30 in Belem, Brazil, waste was fittingly placed at the heart of the climate agenda. Sizeable funds were committed to a new global initiative, No Organic Waste (NOW), to cut methane emissions. The conference noted Circularity as the way to inclusive growth. Expanding cities and towns are an irreversible reality in growing India. It is estimated that cities in India will generate 165 million tonnes of waste annually by 2030. Without early solutions, these will result in grave levels of emissions. The goal of Garbage Free Cities (GFC) by 2026 is an existential necessity.\n\nUnder SBM Urban 2.0, sustainable waste management underlines the circular economy model, which recognises waste as a resource. India needs to move away from a linear to circular mode—minimising waste and recovering energy. The good thing is that more than half of municipal waste is organic. Compressed Biogas Plants (CBG) have created possibilities of generating green fuel from municipal wet waste. However, plastic and Construction and Demolition (C&D) waste pose tough challenges. C&D waste—about 12 million tonnes a year—is collateral damage from India's fast-growing economy. Unauthorised dumping of construction discards is common.\n\nMuch of this waste can be reused or recycled as cost-efficient raw materials. But infrastructure is lacking. Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste. C&D waste has issues of identification, tracing and tracking. Citizens need to get a clear sense of profit and a true cause to be partners. In a society becoming increasingly consumerist, 'reuse' may become a tall order compared to 'recycling'.",
                questions: [
                    {
                        id: 306,
                        question: "According to the passage, why is the goal of Garbage Free Cities (GFC) described as an \"existential necessity\"?",
                        options: [
                            "Because it is a mandatory requirement for India to get a permanent seat at the UN Security Council.",
                            "Because the projected increase in waste to 165 million tonnes by 2030 will cause grave emissions and health havoc if not managed.",
                            "Because it is the only way to ensure that Compressed Biogas Plants remain profitable.",
                            "Because plastic waste is currently the largest component of municipal waste."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: \"result in grave levels of emissions... The goal of Garbage Free Cities (GFC) by 2026 is an existential necessity.\""
                    },
                    {
                        id: 307,
                        question: "The passage distinguishes between \"linear\" and \"circular\" modes of waste management. What is the core characteristic of the circular mode mentioned?",
                        options: [
                            "Collecting waste from households and dumping it in landfills in a linear sequence.",
                            "Minimising waste generation and recovering energy/resources from waste, treating it as a resource.",
                            "Burning all waste to ensure zero volume remains.",
                            "Exporting waste to other countries to maintain local cleanliness."
                        ],
                        correctAnswer: 1,
                        explanation: "Text describes circular mode as: \"minimising waste and recovering energy... recognizes waste as a resource.\""
                    },
                    {
                        id: 308,
                        question: "Which of the following is cited as a major hurdle in managing Construction and Demolition (C&D) waste?",
                        options: [
                            "The lack of technology to recycle concrete.",
                            "The sheer volume of organic waste mixed with C&D waste.",
                            "Issues of identification, tracing, tracking, and unauthorised dumping of discards.",
                            "The ban on using recycled materials in new buildings."
                        ],
                        correctAnswer: 2,
                        explanation: "Text states C&D waste has \"issues of identification, tracing and tracking of its origin.\""
                    },
                    {
                        id: 309,
                        question: "The author argues that 'reuse' might be a \"tall order\" (difficult to achieve) compared to 'recycling' because:",
                        options: [
                            "Recycling technology is cheaper than reuse methods.",
                            "The society is becoming increasingly consumerist with new products arriving daily, making people less likely to reuse old items.",
                            "The government provides subsidies only for recycling.",
                            "Reuse is illegal under the new SBM Urban 2.0 guidelines."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: \"In a society becoming increasingly consumerist... 'reuse' may become a tall order.\""
                    },
                    {
                        id: 310,
                        question: "What role does \"Extended Producer Responsibility (EPR)\" play in the context of the passage?",
                        options: [
                            "It is a successfully implemented policy that covers all waste categories.",
                            "It is a policy that currently has gaps, as it has yet to extend to all categories of dry waste.",
                            "It puts the entire burden of waste management on the consumer.",
                            "It is responsible for the unauthorised dumping of construction waste."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: \"Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste.\""
                    }
                ]
            },
            {
                id: 303,
                title: "Sanitation & Urban-Rural Partnerships",
                source: "Swachh Bharat Mission (SBM-G) Phase II",
                content: "When the Swachh Bharat Mission (SBM) was launched in 2014, its vision was simple: ensure every household has a toilet. More than 12 crore toilets have been built, and every village has declared itself Open Defecation Free (ODF). However, the success has revealed the next frontier: managing the resultant faecal waste. In most rural households, septic tanks serve as the primary form of containment. Without safe systems for collection and treatment, the gains of the ODF movement risk being undermined. This defines the transition to SBM-G Phase II (ODF Plus).\n\nFaecal sludge management remains a critical gap. Maharashtra has experimented with innovative urban-rural partnerships. For example, in Satara district, a partnership was put into practice where four villages (Jakatwadi, Songaon, etc.) have been brought under an arrangement to access the city's treatment plant. Their septic tanks, often never desludged or emptied at exorbitant rates, will be serviced at regular intervals. A private service provider is engaged by gram panchayats. The costs will be recovered through a modest sanitation tax. This approach shows that rural clusters can pool resources to develop standalone infrastructure or link to urban systems, ensuring sustainability.",
                questions: [
                    {
                        id: 311,
                        question: "What is the \"next frontier\" or challenge identified in the passage after the construction of toilets?",
                        options: [
                            "Building more toilets in urban areas.",
                            "Managing the faecal waste (sludge) generated by the new toilets, particularly desludging septic tanks safely.",
                            "Converting all septic tanks into sewer lines connected to rivers.",
                            "Banning the use of private service providers in sanitation."
                        ],
                        correctAnswer: 1,
                        explanation: "Text identifies \"managing the resultant faecal waste\" as the next frontier."
                    },
                    {
                        id: 312,
                        question: "The \"Satara model\" described in the passage relies on which key mechanism?",
                        options: [
                            "Building a new treatment plant in every single village.",
                            "An urban-rural partnership where villages access the city's existing treatment infrastructure or pool resources.",
                            "Transporting waste to landfills in other districts.",
                            "Asking villagers to empty their own septic tanks manually."
                        ],
                        correctAnswer: 1,
                        explanation: "Text describes: \"villages... have been brought under an arrangement that will allow them to access the city's treatment plant.\""
                    },
                    {
                        id: 313,
                        question: "How does the passage propose to ensure the financial sustainability of the desludging services?",
                        options: [
                            "By demanding full funding from the Central Government forever.",
                            "By levying a modest sanitation tax collected by the gram panchayats.",
                            "By selling the sludge to farmers as raw fertilizer without treatment.",
                            "By charging the private service provider a fee to operate."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly states: \"costs will be recovered through a modest sanitation tax levied by the gram panchayats.\""
                    },
                    {
                        id: 314,
                        question: "The term \"ODF Plus\" implies:",
                        options: [
                            "Building larger toilets than before.",
                            "Going beyond toilet construction to ensure solid/liquid waste management and safe sanitation service chains.",
                            "Declaring a village free of plastic waste.",
                            "Providing water connections to toilets."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says ODF Plus \"goes beyond toilet construction to ensure... safe sanitation service chains.\""
                    },
                    {
                        id: 315,
                        question: "Why is \"regular desludging\" emphasized over the current practice?",
                        options: [
                            "Because current practices often involve exorbitant rates by informal operators or unsafe disposal.",
                            "Because septic tanks break if they are full.",
                            "Because it creates more jobs for city municipal workers.",
                            "Because the SBM guidelines require desludging every month."
                        ],
                        correctAnswer: 0,
                        explanation: "Text contrasts regular service with: \"often never desludged or emptied only at exorbitant rates by informal operators.\""
                    }
                ]
            },
            {
                id: 304,
                title: "Homelessness & Social Justice",
                source: "NULM Policy Analysis Bengaluru",
                content: "While Bengaluru City Police data reveal that the city has witnessed the deaths of more than 15 homeless people over the last 40 days, there are only 48 shelters when the city should have at least 120. Under the NULM policy, civic bodies are responsible for ensuring basic infrastructure such as water supply, sanitation, and safety for the homeless. Yet, barely any shelter has more than 40 beds.\n\nThe policy mandates shelters for every 1 lakh population. For Bengaluru, this means at least 120 shelters. However, the existing 48 often lack basics. Women are often traumatised and grope on the streets, yet they feel safer in open spaces than in shelter homes due to issues like bedbugs, lack of family privacy, and rigid rules. A police officer noted, \"Deaths might not be directly connected to the weather, but it exacerbates existing health conditions.\" Homeless people, constantly exposed to harsh weather, face mental health challenges like anxiety and depression. While officials say homeless people \"resist relocation,\" activists argue that agencies conduct surveys but fail to build trust or provide dignified living conditions.",
                questions: [
                    {
                        id: 316,
                        question: "The passage highlights a discrepancy between \"policy\" and \"reality\" regarding homeless shelters. What is this discrepancy?",
                        options: [
                            "The policy forbids shelters in residential areas, but reality requires them there.",
                            "The NULM policy mandates at least 120 shelters based on population, but only 48 exist.",
                            "The policy requires luxury amenities, but shelters only provide basics.",
                            "The policy allows only men in shelters, leaving women on the streets."
                        ],
                        correctAnswer: 1,
                        explanation: "Text notes: \"should have at least 120 shelters... there are only 48 shelters.\""
                    },
                    {
                        id: 317,
                        question: "According to the passage, why do some homeless people, particularly women, prefer sleeping in open spaces despite the risks?",
                        options: [
                            "Because shelters charge high fees that they cannot afford.",
                            "Because shelters often have poor conditions (bedbugs), lack privacy for families, and have rigid rules.",
                            "Because the police force them to stay on the streets to watch over markets.",
                            "Because the weather inside the shelters is worse than outside."
                        ],
                        correctAnswer: 1,
                        explanation: "Text mentions: \"feel safer in open spaces than in shelter homes due to issues like bedbugs, lack of family privacy...\""
                    },
                    {
                        id: 318,
                        question: "The deaths of homeless people are attributed to:",
                        options: [
                            "A sudden heatwave in Bengaluru.",
                            "Direct freezing to death solely due to low temperatures.",
                            "A combination of harsh weather exacerbating existing health conditions and lack of access to warm clothes/safety gear.",
                            "Food poisoning from street food."
                        ],
                        correctAnswer: 2,
                        explanation: "Text quotes police: \"weather... exacerbate existing health conditions\"."
                    },
                    {
                        id: 319,
                        question: "What is the author's stance on the official claim that \"homeless people resist relocation\"?",
                        options: [
                            "The author agrees that homeless people are stubborn and refuse help.",
                            "The author presents the counter-argument that agencies fail to build trust or provide dignified conditions, implying the system is at fault.",
                            "The author suggests that relocation should be made mandatory by force.",
                            "The author believes relocation is not necessary."
                        ],
                        correctAnswer: 1,
                        explanation: "Text cites activists/human rights perspective: \"Agencies... fail to build trust...\""
                    },
                    {
                        id: 320,
                        question: "Which scheme is mentioned as the governing policy for urban homeless shelters?",
                        options: [
                            "PM Awas Yojana (PMAY).",
                            "Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (NULM).",
                            "Swachh Bharat Mission (Urban).",
                            "Smart Cities Mission."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly mentions \"Under the NULM policy...\""
                    }
                ]
            }
        ]
    },
    // Day 5 content
    5: {
        dayId: 5,
        title: "UPSC CSAT Practice Set - Jan 05 (Day 05)",
        description: "Frontier Science, China's 2026 Posture, Women's Labour & Venezuela Oil",
        vocabulary: [],
        passages: [
            {
                id: 501,
                title: "Frontier Science (Genetic Code)",
                source: "Science / Abhrajyoti Ghosh",
                content: "The dictionary of life has a new update. A DNA sequence that signals cells in almost all other organisms to stop synthesising proteins instead encodes a rare amino acid in some archaea, according to a study published in Science. Archaea are microbes that resemble bacteria in shape and size but are biologically distinct. Calling the study “the first of its kind,” biological sciences associate professor Abhrajyoti Ghosh said the discovery could help scientists engineer proteins with “functional advantages that have been hitherto unknown.” The study’s findings provide “yet another fantastic example of how biology hides secrets that drive biotechnology innovation.”\n\nAt the heart of this code are the four nitrogen-containing bases: adenine (A), guanine (G), cytosine (C) and thymine (T). Each amino acid in a protein corresponds to a three-base-long sequence of DNA — a.k.a. a triplet codon. The genetic code is a dictionary of 64 such codons. Of these, 61 ‘sense’ codons encode 20 common amino acids. The remaining three, called ‘stop’ codons, don’t correspond to any amino acid. Instead, when the protein-making mechanism encounters them, it terminates the protein chain.\n\nHowever, in some Archaea, the ‘TAG’ stop codon has been completely repurposed. These organisms read the TAG codon as a signal for Pyl (pyrrolysine) not occasionally but always. This “genome-wide incorporation of Pyl at TAG codons” has led the team to propose “the existence of a previously unrecognized genetic code.” The ‘Pyl code’ has 62 sense codons instead of the usual 61 and only two stop codons. Berkeley researchers genetically modified Escherichia coli to express the archaeal cellular machinery required to read the Pyl code. They engineered the bacterium to express a protein whose sequence had a TAG codon in the middle. If this setup worked, the bacteria would read TAG as Pyl and produce the complete protein. Otherwise, the TAG codon would signal ‘stop’, and the bacteria would produce a shorter protein. Extracts confirmed they produced the complete protein.",
                questions: [
                    {
                        id: 501,
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
                        id: 502,
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
                        id: 503,
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
                        id: 504,
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
                        id: 505,
                        question: "Which of the following best describes the \"Archaea\" mentioned in the text?",
                        options: [
                            "(a) A type of virus that infects bacteria.",
                            "(b) Microbes that resemble bacteria in shape/size but are biologically distinct and can possess unique genetic codes.",
                            "(c) A synthetic organism created in a laboratory at Berkeley.",
                            "(d) A rare form of algae found only in Antarctic lakes."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes Archaea as \"microbes that resemble bacteria in shape and size but are biologically distinct.\""
                    }
                ]
            },
            {
                id: 502,
                title: "Geopolitics (China's 2026 Posture)",
                source: "Strategic Analysis 2026",
                content: "As 2026 begins, China presents a paradox: a nation wrestling with economic challenges yet projecting strategic confidence; a leadership tightening political control domestically while expanding its diplomatic reach abroad. For India, this Chinese posture and the shift in the stance of the United States toward Beijing have narrowed strategic space. China’s 2025 economic growth was weaker than official figures suggest. Domestic demand remained weak, and the overbuilt property sector continued to weigh on confidence. Instead of boosting consumption, Beijing reinforced a state-led model, prioritizing advanced manufacturing and \"whole-chain breakthroughs\" in high-tech industries. This \"China Shock 2.0\" is generating serious disruptions for developed and developing economies alike.\n\nChina's attempts to stabilize major-power ties were undercut by its harsh response to the Japanese Prime Minister’s comment on Taiwan. Beijing signalled that it remains unwilling to accommodate divergence on issues it deems sensitive. Yet, the perception of a \"G2 overlay\" – a shadow of tacit coordination between the U.S. and China – has serious consequences, as even limited accommodation can constrain the choices of other states. For India, the implications are sobering. The U.S. remains committed to preventing Chinese hegemony in Asia but is less inclined to prioritize relations with India as a strategic counter to China.\n\nOn India-China relations, 2025 witnessed cautious stabilization but no substantive progress on structural issues. The situation along the borders remains stable but not normal. Disengagement has not been accompanied by de-escalation or de-induction. \"Buffer zones\" continue to restrict India's patrolling rights. If these temporary arrangements become permanent, China will have achieved incremental gains consistent with its grey-zone playbook. China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its \"core interests\".",
                questions: [
                    {
                        id: 506,
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
                        id: 507,
                        question: "What does the term \"China Shock 2.0\" refer to in the context of the passage?",
                        options: [
                            "(a) A sudden collapse of the Chinese property market.",
                            "(b) A massive military invasion of Taiwan.",
                            "(c) A disruption caused by China's state-led prioritization of advanced manufacturing and high-tech exports to compensate for weak domestic demand.",
                            "(d) The imposition of new tariffs by the U.S. on Chinese goods."
                        ],
                        correctAnswer: 2,
                        explanation: "The text links \"China Shock 2.0\" to \"prioritizing advanced manufacturing... high-tech industries\" generating disruptions."
                    },
                    {
                        id: 508,
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
                        id: 509,
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
                        id: 510,
                        question: "Which of the following strategies is China likely to persist with, according to the text?",
                        options: [
                            "(a) Complete isolation from the global economy.",
                            "(b) Managed competition with the U.S., hardball diplomacy, and prickliness on \"core interests\" while stabilizing major relationships.",
                            "(c) Adopting a western-style democratic political system.",
                            "(d) Abandoning its claims on Taiwan to improve ties with Japan."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its 'core interests'.\""
                    }
                ]
            },
            {
                id: 503,
                title: "Socio-Economics (Women's Labour)",
                source: "UN Report 2023 / Shirin Rai",
                content: "A 2023 United Nations report showed that globally, women spend 2.8 more hours than men on unpaid care and domestic work. The struggle to count women’s labour continues. While domestic labour has increasingly entered the public discourse, the mental and emotional labour in sustaining relationships and managing household dynamics continues to go largely unacknowledged. This uncounted labour, which plays a critical role in the smooth functioning of families and societies, is rarely measured or rewarded. Shirin Rai argues that economic and policy priorities have long marginalized care work by framing it as secondary to \"productive\" labour traditionally performed by men. The privileging of male breadwinner employment and the relentless focus on GDP growth have contributed to the systemic devaluation of care-related work.\n\nIn India, there is still no legal framework that recognizes or compensates this form of unpaid work, despite it being the backbone of the economy. However, courts have begun to challenge this silence. In Kannaiyan Naidu and Others vs Kamsala Ammal and Others (2023), the Madras High Court ruled that a wife who performed household duties and cared for the family contributed, albeit indirectly, to the acquisition of family assets. Therefore, she was entitled to an equal share in the property.\n\nThese efforts to recognize women’s labour must be accompanied by a structural reconfiguration of gendered social relations. Without such a transformation, the burden of unpaid care work will remain disproportionately feminised. Article 338 of the Bolivian Constitution recognizes that work at home is an economic activity that creates added value and produces social welfare and wealth. Housewives are entitled to social security. Similarly, Argentina enacted a law recognizing employment contracts for domestic workers where women can get pension credits for unpaid care work.",
                questions: [
                    {
                        id: 511,
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
                        id: 512,
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
                        id: 513,
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
                        id: 514,
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
                        id: 515,
                        question: "According to the author, what is required alongside legal recognition to truly address the issue?",
                        options: [
                            "(a) A complete ban on women working outside the home.",
                            "(b) A structural reconfiguration of gendered social relations where men co-shoulder care responsibilities.",
                            "(c) The privatization of all childcare services.",
                            "(d) A reduction in the retirement age for women."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"must be accompanied by a structural reconfiguration of gendered social relations, wherein men actively participate in and co-shoulder care responsibilities.\""
                    }
                ]
            },
            {
                id: 504,
                title: "International Relations (Venezuela & Oil)",
                source: "Energy Market Analysis / Francisco Monaldi",
                content: "President Donald Trump’s plan to take control of Venezuela’s oil industry and ask American companies to revitalize it after capturing President Nicolás Maduro in a raid isn't likely to have a significant immediate impact on oil prices. Venezuela’s oil industry is in disrepair after years of neglect and international sanctions, so it could take years and major investments before production can increase dramatically. Some analysts are optimistic that Venezuela could double its current output of about 1.1 million barrels a day fairly quickly, but others warn of infrastructure decay.\n\n\"The estimate is that in order for Venezuela to increase from one million barrels per day – that is what it produces today – to four million barrels, it will take about a decade and about a hundred billion dollars of investment,\" said Francisco Monaldi. Venezuela produces heavy crude oil needed for diesel fuel and asphalt. Diesel is in short supply around the world because of sanctions on oil from Venezuela and Russia. Boosting Venezuelan production could make it easier to put pressure on Russia because Europe and the rest of the world could get more of the diesel and heavy oil they need from Venezuela and stop buying from Russia.\n\nHowever, Matthew Waxman, a Columbia University law professor, noted legal issues: \"An occupying military power can’t enrich itself by taking another state’s resources.\" Additionally, leading companies like ExxonMobil and Chevron didn't immediately respond, and the political picture remained uncertain. The problem isn't just finding the oil; it's a question of the political environment and whether companies can count on the government to live up to their contracts.",
                questions: [
                    {
                        id: 516,
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
                        id: 517,
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
                        id: 518,
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
                        id: 519,
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
                        id: 520,
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
                ]
            }
        ]
    }
};
