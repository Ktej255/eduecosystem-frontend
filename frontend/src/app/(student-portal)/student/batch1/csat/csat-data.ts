export interface VocabularyItem {
    word: string;
    definition: string;
    context: string;
    synonyms: string[];
    antonyms: string[];
    toneIndicator: 'positive' | 'negative' | 'neutral';
    csatTip?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface Passage {
    id: number;
    title: string;
    text: string;
    questions: Question[];
}

export interface CSATSessionData {
    day: number;
    title: string; // e.g., "Reading Comprehension Foundation"
    vocabulary: VocabularyItem[];
    passages: Passage[];
}

// Map Day Number (1-30) to Session Data
export const CSAT_DATA_MAP: Record<number, CSATSessionData> = {
    1: {
        day: 1,
        title: "UPSC CSAT Practice Set - Day 01",
        vocabulary: [],
        passages: [
            {
                id: 101,
                title: "Passage 1: The POCSO Paradox",
                text: `Source Text: India crossed a much-publicised milestone in 2025 â€“ fast track special courts cleared more child sexual offence cases than registered that year under the Protection of Children from Sexual Offences (POCSO) Act. They recorded a 109% disposal rate. Commentaries have hailed this as a turning point, suggesting courts have broken the backlog. However, new data and field reports point to a different tipping point where disposals rise but convictions fall and thousands of children remain stuck in long trials with little support.

Convictions have actually gone down from 35% back in 2019 to 29% across the country by 2023. If we take the baseline figure of 35% in 2019, a 90% disposal rate in 2023 would mean that conviction should have risen to 45%. But it is 29% instead. The bottom line is that clearing cases faster means weaker convictions, not better justice. Fast track courts average just 19%. In a number of States, there are more accused walking free than being put behind bars.

Children who testify in POCSO cases have particular needs that go beyond quick hearings. They require trained support persons, sensitive police and lawyers. When these protections remain on paper, higher disposal rates coexist with fragile convictions. Investigations remain hurried, charge sheets stay incomplete and forensic reports are delayed. The Supreme Court directed para-legal volunteers (PLV) to be appointed at every police station. Andhra Pradesh, for instance, has PLVs in 42 of 919 stations, while Tamil Nadu has none across 1,577. Without PLVs, families walk into police stations alone, scared, pressured and ignored.

There have been occasions when courts have acquitted the accused when they offered to marry the survivors once they turned adult. The higher judiciary has let off convicts citing â€˜happy marriageâ€™ despite Section 6 convictions against the perpetrator. Such rulings push vulnerable girls into life-long ties with their abusers. Speed without support leaves children more broken than justice served.`,
                questions: [
                    {
                        id: 1,
                        question: "Which one of the following is the most logical and rational inference that can be drawn from the passage regarding the \"109% disposal rate\"?",
                        options: [
                            "The judicial system has finally successfully eradicated the backlog of child sexual abuse cases in India.",
                            "The statistic is misleading because it masks a decline in the quality of justice and conviction rates.",
                            "The appointment of Para-Legal Volunteers (PLVs) has directly contributed to the increased speed of case disposal.",
                            "The rise in disposal rate is primarily due to the Supreme Court's intervention in 2025 regarding forensic reports."
                        ],
                        correctAnswer: 1,
                        explanation: "The passage opens by contrasting the \"milestone\" 109% disposal rate with the \"darker truth\" of falling convictions and rushed justice. The crux is that the number is misleading."
                    },
                    {
                        id: 2,
                        question: "The author claims that \"clearing cases faster means weaker convictions\". Which of the following statements from the passage best supports this claim?",
                        options: [
                            "Fast track courts handle 9.51 cases a month compared to 3.26 in regular courts.",
                            "The conviction rate dropped to 29% in 2023 despite a 90% disposal rate, defying the expected statistical baseline.",
                            "Andhra Pradesh has fewer PLVs than required, leading to weaker First Information Reports (FIRs).",
                            "High Courts have occasionally acquitted accused persons if they offered to marry the survivor."
                        ],
                        correctAnswer: 1,
                        explanation: "The author uses the statistical baseline argument: if disposal is 90%, convictions should be 45% (based on 2019 rates), but they are only 29%. This mathematical discrepancy supports the claim of \"weaker convictions.\""
                    },
                    {
                        id: 3,
                        question: "According to the passage, what is the critical role of Para-Legal Volunteers (PLVs) that is currently missing in many states?",
                        options: [
                            "To speed up the forensic analysis of evidence to meet the 109% target.",
                            "To act as a buffer against police reluctance and threats, ensuring the filing of FIRs and protection of the family.",
                            "To serve as judges in Fast Track Special Courts to reduce the burden on the judiciary.",
                            "To negotiate settlements between the accused and the victim's family to avoid long trials."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Without PLVs, families walk into police stations alone, scared, pressured and ignored.\" Thus, PLVs act as a first line of defense/buffer."
                    },
                    {
                        id: 4,
                        question: "What is the authorâ€™s primary criticism of the \"happy marriage\" acquittals mentioned in the text?",
                        options: [
                            "They violate the legal age of marriage established by the Prohibition of Child Marriage Act.",
                            "They significantly lower the national conviction statistics, making the government look bad.",
                            "They prioritize the social institution of marriage over the safety of the child, trapping victims with their abusers.",
                            "They are legally invalid because Section 6 of the POCSO Act does not allow for any acquittals."
                        ],
                        correctAnswer: 2,
                        explanation: "The author states such rulings \"push vulnerable girls into life-long ties with their abusers,\" implying the priority of marriage over the child's safety/justice."
                    },
                    {
                        id: 5,
                        question: "Based on the passage, the phrase \"fragile convictions\" implies:",
                        options: [
                            "Convictions that are likely to be overturned due to rushed investigations and lack of proper support systems for the victim.",
                            "Convictions that are based on strong forensic evidence but weak testimonial evidence.",
                            "Convictions that happen very quickly but result in very short prison sentences.",
                            "Convictions where the judge is unsure of the verdict."
                        ],
                        correctAnswer: 0,
                        explanation: "\"Fragile\" implies easily broken or overturned. The context connects this to \"investigations remain hurried, charge sheets incomplete,\" meaning the legal basis for the conviction is weak."
                    }
                ]
            },
            {
                id: 102,
                title: "Passage 2: Geopolitics of the Quad",
                text: `Source Text: The year 2025 brought about unprecedented disruption in global geopolitics. The return of President Donald Trump to the White House has resulted in a significant churn. However, the Quad has remained a crucial facet of Washingtonâ€™s engagement. The Quad, a group of four like-minded countries â€“ India, Australia, Japan, and the U.S. â€“ has evolved as a crucial forum with a multifaceted agenda. The overarching objective remains anchoring a rules-based order in the region.

The Quad was unable to convene a leader-level summit in 2025, which was scheduled to be hosted by India. This has led to speculation over whether the group has indeed withered. 2025 was, however, a year of interregnum for the Quad. While the Quad was formed in 2004, the momentum died following the steady withdrawal of member-countries. It gained steam again in 2017. Since its revival, the Quad has hosted six leader-level summits between 2021-2024.

For a group such as the Quad, with no institutional anchor, leader-level summits serve as a vital platform to foster bonhomie and achieve strategic convergence. Historically, it is at these summits that new initiatives have been conceptualized. Thus, 2025 was indeed a year that challenged the growing synergy. However, the fact that despite not holding a leader-level summit, it has continued to operationalise its initiatives demonstrates its remarkable resilience. Initiatives like the Quad-at-Sea Ship Observer Mission and the 'Malabar' naval exercise suggest the group has shown critical resilience even as it faced turbulence.`,
                questions: [
                    {
                        id: 6,
                        question: "The author uses the term \"interregnum\" to describe the Quad in 2025. What does this term imply in the context of the passage?",
                        options: [
                            "The permanent dissolution of the Quad due to the leadership changes in the US and Japan.",
                            "A temporary pause or interval in high-level continuity, rather than a cessation of the group's existence.",
                            "A period of intense activity and unprecedented success in military cooperation.",
                            "The transition of the Quad from a diplomatic forum to a formal military alliance."
                        ],
                        correctAnswer: 1,
                        explanation: "\"Interregnum\" typically means a pause between two reigns. The text says \"too early to write the group off\" and explains the lack of a summit was due to leadership changes, not a permanent end."
                    },
                    {
                        id: 7,
                        question: "Which of the following is the most significant structural weakness of the Quad mentioned in the passage?",
                        options: [
                            "The lack of a shared vision for a \"free and open Indo-Pacific\" among the four nations.",
                            "The opposition from China which prevents the group from holding summits.",
                            "The absence of a formal institutional anchor, making it heavily dependent on leader-level summits for direction.",
                            "The inability of the US to provide funding for the Quad's maritime initiatives."
                        ],
                        correctAnswer: 2,
                        explanation: "The text states: \"For a group such as the Quad, with no institutional anchor, leader-level summits serve as a vital platform...\" This lack of structure makes it vulnerable when summits don't happen."
                    },
                    {
                        id: 8,
                        question: "Consider the following statements based on the passage:\\n\\n1. The return of Donald Trump in 2025 led to the immediate withdrawal of the US from the Quad.\\n2. The 'Malabar' naval exercise is an official initiative listed under the Quad's roster.\\n3. The Quad-at-Sea Ship Observer Mission was operationalized for the first time in 2025.\\n\\nWhich of the statements given above is/are correct?",
                        options: [
                            "1 only",
                            "3 only",
                            "2 and 3 only",
                            "1, 2 and 3"
                        ],
                        correctAnswer: 1,
                        explanation: "Statement 1 is false (Trump's return caused \"churn\" but Quad remains a priority). Statement 2 is false (Text says: \"'Malabar' naval exercise, though not officially a part of the Quadâ€™s roster...\"). Statement 3 is correct (Text: \"Ship Observer Mission, which was operationalised for the first time in June 2025\")."
                    },
                    {
                        id: 9,
                        question: "What acts as the \"overarching objective\" of the Quad, according to the passage?",
                        options: [
                            "To counter China's military expansion specifically in the South China Sea.",
                            "To establish a NATO-like military treaty in Asia.",
                            "To delivering global good and establishing/sustaining a rules-based order in the Indo-Pacific.",
                            "To ensure that Donald Trumpâ€™s \"America First\" policy is implemented globally."
                        ],
                        correctAnswer: 2,
                        explanation: "Direct quote: \"overarching objective of the group... remains anchored in establishing and sustaining a rules-based order... and delivering global good.\""
                    },
                    {
                        id: 10,
                        question: "The passage suggests that the Quad's resilience is proven by:",
                        options: [
                            "The holding of a successful leader-level summit in Wilmington, Delaware in 2025.",
                            "The continuation of operational initiatives despite political leadership changes and the absence of a summit.",
                            "The expansion of the group to include South Korea and Vietnam.",
                            "The firing of the US Ambassador to India for failing to organize the summit."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"fact that despite not holding a leader-level summit, it has continued to operationalise its initiatives demonstrates its remarkable resilience.\""
                    }
                ]
            },
            {
                id: 103,
                title: "Passage 3: The Delimitation Dilemma",
                text: `Source Text: The southern States have found that reducing population growth and improving health and education have led to serious disadvantages. The immediate fallout is that the Finance Commission (FC) has reduced allocations to the south as population size carries 50% weight. The longer-term implication is more serious: the proportion of seats will remain the same but the gap in the absolute number of seats will widen in the run up to the 2029 elections. Delimitation will be decided by a Delimitation Commission (DC) before 2029.

Most of the population increase since 1991 has happened in the northern States. The 84th Constitutional Amendment (2001) extended the freeze on the number of seats from 2000 to 2026 to enable states to pursue population stabilisation. The Census was delayed from 2021. The results are now expected by October 2028. This is why the southern States have no choice but to join hands around the Digressive Proportionality principle. This principle ensures fair representation by giving larger countries more seats but fewer per person and giving smaller countries fewer seats but more representation per person. It balances population size with state equality.

What are the solutions? The first is to increase the total number of Lok Sabha seats while retaining the current proportional distribution. This might cause the least disruption but does not solve the problem of States with higher population growth gaining more MPs. The second is to raise the total seats and introduce equality in the Rajya Sabha (US Senate model). But the ruling party will oppose this as it interferes with its dominance. The third is to raise the number of seats in Vidhan Sabhas to equalize representatives per 1,000 population. The last is to raise the total number of Lok Sabha seats, but change current ratios so that 60% of seats are allocated according to population size and 40% depend on efforts to reduce population growth.`,
                questions: [
                    {
                        id: 11,
                        question: "The core conflict described in the passage regarding Delimitation is best summarized as:",
                        options: [
                            "The conflict between the Finance Commission and the Delimitation Commission over who controls state funding.",
                            "The tension between the democratic principle of \"one person, one vote\" and the federal principle of rewarding states for successful population control.",
                            "The refusal of Northern states to participate in the 2028 Census.",
                            "The disagreement between India and the EU regarding the definition of Digressive Proportionality."
                        ],
                        correctAnswer: 1,
                        explanation: "The passage describes Southern states losing power because they reduced population (successful policy), while Northern states gain power due to population growth (democratic representation)."
                    },
                    {
                        id: 12,
                        question: "What does the \"Digressive Proportionality\" principle entail, as described in the passage?",
                        options: [
                            "Allocating seats strictly based on the 1971 census to ensure no state loses out.",
                            "Giving every state the exact same number of seats regardless of population, similar to the US Senate.",
                            "A compromise where larger populations get more seats total, but smaller populations get better representation per capita (more weight per vote).",
                            "A system where states with high fertility rates are penalized by removing their voting rights in the Parliament."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines it as: \"giving larger countries more seats but fewer per person and giving smaller countries... more representation per person. It balances population size with state equality.\""
                    },
                    {
                        id: 13,
                        question: "Why does the author argue that the \"First Solution\" (Increasing total seats while retaining current proportions) is insufficient?",
                        options: [
                            "It violates the 84th Constitutional Amendment.",
                            "It would be too expensive to build a larger Parliament.",
                            "It fails to address the relative political power imbalance where Northern states still gain more MPs than Southern states.",
                            "It would require a new Census which is not possible before 2029."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says the first solution \"does not solve the problem of States with higher population growth gaining more MPs.\" The relative power imbalance remains."
                    },
                    {
                        id: 14,
                        question: "The passage mentions the 84th Constitutional Amendment (2001). What was its primary rationale?",
                        options: [
                            "To permanently fix the number of seats in the Lok Sabha at 543.",
                            "To delay the delimitation process until 2026 to allow states to stabilize their populations without fear of political punishment.",
                            "To mandate that the Finance Commission must give 50% weight to population.",
                            "To implement the Digressive Proportionality principle in the Indian Constitution."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says the amendment extended the freeze \"to enable State governments to pursue the agenda for population stabilisation\" (i.e., not be punished for it)."
                    },
                    {
                        id: 15,
                        question: "Based on the passage, the author's preferred \"negotiating position\" for the Southern states involves:",
                        options: [
                            "Demanding that the Census 2028 be cancelled.",
                            "Adopting the US Senate model for the Lok Sabha.",
                            "Building consensus around the Digressive Proportionality principle before the Centre constitutes the DC.",
                            "Petitioning the Supreme Court to strike down the Delimitation Commission."
                        ],
                        correctAnswer: 2,
                        explanation: "The final sentence states: \"The southern States have no choice but to join hands around the Digressive Proportionality principle... before the Centre constitutes the DC.\""
                    }
                ]
            },
            {
                id: 104,
                title: "Passage 4: Age of Consent & Adolescent Autonomy",
                text: `Source Text: While some argue that the current law criminalises consensual relationships among adolescents, others warn that lowering the age could undermine protections against child exploitation. On January 10, the Supreme Court acknowledged the growing misuse of the POCSO Act in consensual, romantic adolescent relationships. The age of consent in India is currently 18 years. Consequently, sexual acts with minors are treated as â€œstatutory rapeâ€, based on the legal presumption that children lack the capacity to give valid consent.

Data from studies like Enfold paint a clear picture â€“ there are too many cases, which stem from consensual romance, that are often weaponised by disapproving parents. This clogs courts and erodes trust in the system. An Enfold study analysing 7,064 POCSO judgments found that 24.3% involved romantic relationships.

However, there are genuine concerns on reducing the age of consent. Many believe that such a move would risk weakening the deterrent framework, enabling trafficking and other forms of child abuse under the guise of consent. The current â€œbright-line ruleâ€ â€“ which treats all individuals under 18 as incapable of consenting â€“ reflects a clear legislative intent to create an unambiguous zone of protection.

Instead of a blanket reduction that could open doors to predators disguising coercion as consent, we need a pragmatic tweak: introduce â€˜close-in-ageâ€™ exemptions for 16-18-year-olds, say within a 3-4 year gap, coupled with mandatory judicial reviews to sniff out any foul play. This way, we honour adolescent autonomy without gutting protections.`,
                questions: [
                    {
                        id: 16,
                        question: "The \"bright-line rule\" mentioned in the passage refers to:",
                        options: [
                            "The mandatory requirement for judges to grant bail in all POCSO cases.",
                            "The strict legal standard that treats any sexual act with a person under 18 as non-consensual (statutory rape), regardless of actual willingness.",
                            "The rule that allows parents to file cases against their children's partners.",
                            "The visual boundary used in courtrooms to separate the victim from the accused."
                        ],
                        correctAnswer: 1,
                        explanation: "A \"bright-line rule\" is a clearly defined rule or standard. In this context, it refers to the strict age limit (18) where consent is legally impossible (\"statutory rape\") regardless of context."
                    },
                    {
                        id: 17,
                        question: "Which of the following best reflects the \"pragmatic tweak\" proposed by the author to resolve the dilemma?",
                        options: [
                            "A blanket reduction of the age of consent to 16 years as recommended by the JS Verma Committee.",
                            "Keeping the age at 18 but introducing \"close-in-age\" exemptions to protect consensual adolescent relationships while maintaining safeguards against predators.",
                            "Abolishing the POCSO Act entirely for anyone above the age of 14.",
                            "Allowing parents to decide whether a relationship is consensual or criminal."
                        ],
                        correctAnswer: 1,
                        explanation: "The author concludes by suggesting we \"introduce â€˜close-in-ageâ€™ exemptions for 16-18-year-olds... This way, we honour adolescent autonomy without gutting protections.\""
                    },
                    {
                        id: 18,
                        question: "Why does the author argue against a \"wholesale reduction\" (blanket reduction) of the age of consent?",
                        options: [
                            "It would violate international treaties signed by India.",
                            "It would lead to a decrease in the number of cases filed by parents.",
                            "It risks creating a loophole for traffickers and predators to claim \"consent\" and escape punishment for exploiting minors.",
                            "It would make the job of the police too difficult."
                        ],
                        correctAnswer: 2,
                        explanation: "The text states a wholesale reduction \"could open doors to predators disguising coercion as consent\" (weakening the deterrent framework)."
                    },
                    {
                        id: 19,
                        question: "According to the passage, how is the POCSO Act often \"weaponised\" in the context of adolescent relationships?",
                        options: [
                            "By the adolescents themselves to blackmail each other.",
                            "By police officers looking to increase their conviction rates.",
                            "By disapproving parents who use the law to criminalize their childâ€™s romantic relationship.",
                            "By the Supreme Court to enforce strict moral codes on society."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says cases \"are often weaponised by disapproving parents\" to target the romantic partners of their children."
                    },
                    {
                        id: 20,
                        question: "What is the implied consequence of the current legal framework on the judicial system, based on the text?",
                        options: [
                            "The system is efficient because \"statutory rape\" is easy to prove.",
                            "The system is clogged with cases arising from consensual romance, eroding trust and diverting resources from genuine abuse cases.",
                            "The system is biased against female victims.",
                            "The system effectively deters all forms of child marriage."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"too many cases... stem from consensual romance... This clogs courts and erodes trust in the system.\""
                    }
                ]
            }
        ]
    },
    2: {
        day: 2,
        title: "UPSC CSAT Practice Set - Day 02",
        vocabulary: [
            {
                word: "ITMOs (Internationally Transferred Mitigation Outcomes)",
                context: "...generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes.",
                definition: "Carbon credits that can be transferred between countries under Article 6 of the Paris Agreement.",
                synonyms: ["Carbon credits", "Emission reduction units"],
                antonyms: [],
                toneIndicator: 'neutral',
                csatTip: "Think of it as a tradeable unit of emission reduction."
            },
            {
                word: "Decarbonisation",
                context: "...India's long-term goals of deep decarbonisation.",
                definition: "Reducing or eliminating carbon dioxide emissions from energy and industrial processes.",
                synonyms: ["Low-carbon transition", "Carbon neutrality"],
                antonyms: ["Carbonization"],
                toneIndicator: 'positive'
            },
            {
                word: "Epigenetics",
                context: "Research in epigenetics shows that health... before conception can influence gene expression.",
                definition: "Study of how behaviors and environment cause changes that affect the way genes work, without altering DNA.",
                synonyms: ["Environmental genetics"],
                antonyms: [],
                toneIndicator: 'neutral',
                csatTip: "Bridges nature vs nurture - environment affects gene expression."
            },
            {
                word: "Fiscal Federalism",
                context: "...Centre's power to cap State's net borrowing ceiling.",
                definition: "Financial relations between units of governments in a federal system.",
                synonyms: ["Financial federalism"],
                antonyms: ["Fiscal centralization"],
                toneIndicator: 'neutral'
            },
            {
                word: "Cooperative Federalism",
                context: "...signalled a new chapter in international climate cooperation.",
                definition: "Federalism where national and state governments work together as partners.",
                synonyms: ["Collaborative federalism"],
                antonyms: ["Competitive federalism"],
                toneIndicator: 'positive'
            }
        ],
        passages: [
            {
                id: 201,
                title: "Article 6 and Climate Finance",
                text: `Source Text: To strengthen the delivery and efficiency of climate finance, the carbon markets under Article 6 (A6) of the Paris Agreement were made fully operational at COP29. According to the A6 Implementation Partnership, there are 89 cooperation arrangements made under Article 6.2 across 58 Parties. The adoption of the Paris Agreement Crediting Mechanism (Article 6.4) marked a milestone in the transition from the Clean Development Mechanism. In August 2025, India entered a new era of carbon markets by signing the Joint Crediting Mechanism (JCM). This effectively operationalised Article 6.2 of the Paris Agreement and signalled a new chapter in international climate cooperation.

Why does participation of India in the A6 mechanism hold critical significance? Partnerships within A6 can translate into transfer of advanced tech and channel much-needed climate finance. This can be a lever for socio-economic transformation. Critically, the potential of A6 market mechanisms is not just restricted to generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes. Instead, the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation. The Paris Agreement's Rule book sets out the architecture for A6. It allows countries to cooperate bilaterally or multilaterally, transferring emissions reductions while ensuring rigorous accounting to avoid double counting. India's new JCM partnership with Japan is an early example.

To operationalise both Article 6.2 and 6.4, the Indian government has already strategically identified a first set of 13 eligible activities keeping both developmental and climate goals in balance. These are high-end, emerging technologies that can fundamentally shift the country's emissions profile, such as renewable energy with storage, green hydrogen, and compressed bio-gas. The current Indian list of activities reflects a deliberate strategy that aligns with India's long-term goals of deep decarbonisation.`,
                questions: [
                    {
                        id: 1,
                        question: "Based on the passage, what is the \"real prize\" for India in participating in the Article 6 mechanism, beyond just financial gain?",
                        options: [
                            "The ability to sell surplus carbon credits to developed nations to balance the fiscal deficit.",
                            "The acceleration of low-carbon industrial and technological transformation through advanced tech transfer.",
                            "The permanent removal of all coal-based power plants by 2030.",
                            "The complete replacement of the Clean Development Mechanism with a domestic carbon tax."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly states: 'the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation... transfer of advanced tech.'"
                    },
                    {
                        id: 2,
                        question: "Which of the following statements best describes the operational difference between Article 6.2 and Article 6.4 as implied in the text?",
                        options: [
                            "Article 6.2 deals with bilateral/multilateral cooperation like the JCM, while Article 6.4 relates to a centralized crediting mechanism replacing the Clean Development Mechanism.",
                            "Article 6.2 focuses on green hydrogen, while Article 6.4 focuses on solar energy storage.",
                            "Article 6.2 is for private sector companies, while Article 6.4 is strictly for government-to-government transfers.",
                            "Article 6.2 has not yet been operationalized, whereas Article 6.4 was fully operationalized in 2024."
                        ],
                        correctAnswer: 0,
                        explanation: "The text links 'Article 6.2' to 'partnerships' and 'bilateral' (like JCM), and mentions 'Article 6.4' (Paris Agreement Crediting Mechanism) as a centralized transition from the Clean Development Mechanism."
                    },
                    {
                        id: 3,
                        question: "The passage mentions \"rigorous accounting to avoid double counting\" as a key feature of the Paris Agreement's Rule book. In this context, \"double counting\" likely refers to:",
                        options: [
                            "Counting the same emission reduction towards the climate targets (NDCs) of both the selling country and the buying country.",
                            "Counting both carbon dioxide and methane emissions in the same calculation.",
                            "Paying for the same technology transfer twiceâ€”once through aid and once through credits.",
                            "Registering the same project under both the Indian government and the Japanese government."
                        ],
                        correctAnswer: 0,
                        explanation: "In carbon markets, 'double counting' standardly refers to both the host and buyer country claiming the same emission reduction. The text mentions 'rigorous accounting' is needed to avoid this."
                    },
                    {
                        id: 4,
                        question: "With reference to India's strategy for Article 6, consider the following statements:\n1. India has signed a Joint Crediting Mechanism (JCM) with Japan to operationalize Article 6.2.\n2. The government has identified eligible activities that focus primarily on traditional coal efficiency rather than emerging technologies.\n3. Green hydrogen and compressed bio-gas are among the identified eligible activities.\n\nWhich of the statements given above is/are correct?",
                        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
                        correctAnswer: 1,
                        explanation: "Statement 1 is correct (JCM signed). Statement 2 is incorrect (focus is on 'high-end, emerging technologies'). Statement 3 is correct (Green hydrogen, bio-gas listed)."
                    },
                    {
                        id: 5,
                        question: "The author suggests that India must \"move from intent to action.\" Which of the following is NOT explicitly mentioned as a required policy priority in the text?",
                        options: [
                            "Detailing the scope of activities and articulation of rules for Letters of Authorisation.",
                            "Creating a single-window clearance system for carbon projects to reduce registration time.",
                            "Mandatory privatization of all renewable energy storage facilities.",
                            "Building a domestic market for removal activities like Biochar."
                        ],
                        correctAnswer: 2,
                        explanation: "Privatization refers to option (c) which is not mentioned in the text."
                    }
                ]
            },
            {
                id: 202,
                title: "Early Childhood Care and Development (ECCD)",
                text: `Source Text: India's aspiration to become a $30 trillion economy by 2047 demands sustained investments, particularly in human capital formation. However, a critical link remains largely missing: a focused and systematic investment in early childhood care and development (ECCD). Without strengthening the foundations laid in the earliest years, India's ambitions risk being on fragile ground. An investment in ECCD is not a welfare intervention but a strategic economic investment. From conception to the second birthdayâ€”the first 1,000 daysâ€”have been recognized by the WHO as a crucial 'window of opportunity'. The next six years constitute another 2,000 days. Thus, the first 3,000 days shape brain architecture.

Children who are well-nourished and cognitively stimulated are more likely to complete education and earn higher incomes. Paradoxically, ECCD initiatives have largely been targeted at children within government safety nets, leaving out vast sections of middle- and higher-income families. This exclusion is problematic because developmental challenges are not confined to poverty alone. Children from middle and even upper-income households increasingly face obesity, physical inactivity, excessive screen exposure, and delayed social skills. Early childhood development must be universal, not targeted.

Research in epigenetics shows that health, nutrition, and stress before conception can influence gene expression. Paradoxically, this is also when children spend almost all their time within families, with minimal engagement with formal systems beyond immunisation. In the digital age, many parents rely on social media for guidance, much of which is commercially driven or poorly informed. India must move beyond fragmented approaches. What is needed is an integrated ECCD framework that brings together health, nutrition, and early learning from conception to eight years of age.`,
                questions: [
                    {
                        id: 6,
                        question: "Which one of the following is the most logical corollary to the author's argument that \"ECCD is not a welfare intervention but a strategic economic investment\"?",
                        options: [
                            "The government should privatize all Anganwadis to ensure they generate profit.",
                            "Spending on early childhood care directly contributes to future workforce productivity, tax base expansion, and national competitiveness.",
                            "Welfare schemes are generally wasteful and should be replaced by stock market investments.",
                            "The primary goal of ECCD is to reduce the medical bills of senior citizens."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says ECCD is a 'strategic economic investment' because it shapes 'capacity to learn, adapt and contribute productively,' 'expanding the tax base,' and 'lift families out of poverty.'"
                    },
                    {
                        id: 7,
                        question: "The passage argues that ECCD initiatives should be \"universal, not targeted.\" What is the primary justification given for this claim?",
                        options: [
                            "Government safety nets have surplus funds that need to be spent on wealthy families.",
                            "Developmental challenges such as screen exposure, obesity, and delayed social skills are prevalent even in middle and upper-income households.",
                            "Poor families are already receiving too much support compared to the middle class.",
                            "Universal coverage is the only way to meet WHO standards."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states exclusion of middle/upper class is problematic because 'developmental challenges are not confined to poverty alone... increasingly face obesity, physical inactivity...'"
                    },
                    {
                        id: 8,
                        question: "According to the passage, the period of \"the first 3,000 days\" is critical because:",
                        options: [
                            "It is the only time when the government provides free immunization.",
                            "It shapes the child's brain architecture, physical health, and emotional regulation, determining their adult capacity to learn and adapt.",
                            "It is the period before the child enters the formal school system, after which development stops.",
                            "It allows the government to collect data for the National Health Mission."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines the first 3,000 days (conception to age 8) as the time that 'shape(s) brain architecture, physical health...' determining a child's capacity to learn."
                    },
                    {
                        id: 9,
                        question: "The author notes a \"paradox\" regarding the time children spend within families during their early years. What is this paradox?",
                        options: [
                            "Parents spend the most money on education when the child is at home, but the child learns the least.",
                            "Children spend almost all their time with families during the most critical developmental phase, yet this is when engagement with formal support systems is minimal.",
                            "Parents in the digital age are better informed than doctors, yet children are less healthy.",
                            "Children are most safe at home, yet that is where they face the highest risk of physical injury."
                        ],
                        correctAnswer: 1,
                        explanation: "The paradox is: 'this is also when children spend almost all their time within families, with minimal engagement with formal systems' despite it being the most critical developmental phase."
                    },
                    {
                        id: 10,
                        question: "Based on the passage, \"epigenetics\" is relevant to ECCD because:",
                        options: [
                            "It proves that genes are unchangeable and determining.",
                            "It shows that environmental exposures, stress, and nutrition even before conception can influence a child's long-term health and gene expression.",
                            "It suggests that only medical doctors should be involved in child-rearing.",
                            "It indicates that digital learning is superior to traditional parenting."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: 'Research in epigenetics shows that health, nutrition, and stress... before conception can influence gene expression.'"
                    }
                ]
            },
            {
                id: 203,
                title: "Higher Education Regulation Bill",
                text: `Source Text: The Viksit Bharat Shiksha Adhishthan Bill, 2025, introduced in the Lok Sabha on December 15, 2025, aims to reimagine India's higher education institutions. India's higher education system has expanded rapidly, spanning over a 1,000 universities, but regulation has not evolved at the same pace. Multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE) have created a maze of approvals that often pulls institutions away from teaching and innovation. This has turned oversight into over-regulation.

NEP 2020 called for a "light but tight" frameworkâ€”strong on transparency and standards, but minimal on procedural burden. The Bill creates an apex umbrella body, the Viksit Bharat Shiksha Adhishthan, anchored in Entry 66 of the Seventh Schedule. It proposes repealing three key Acts to unify the regulatory architecture. It envisages a technology-enabled single window system built on public self-disclosure, where institutions publish key information on governance and outcomes. This shifts institutional energy toward what truly matters: teaching and research. International credibility is not achieved by copying foreign models, but by meeting global benchmarks of outcomes and ethics.`,
                questions: [
                    {
                        id: 11,
                        question: "The \"Viksit Bharat Shiksha Adhishthan Bill, 2025\" seeks to resolve which primary structural issue in Indian higher education?",
                        options: [
                            "The lack of funding for private universities.",
                            "The fragmentation of regulation caused by multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE).",
                            "The refusal of foreign universities to set up campuses in India.",
                            "The inability of students to pass competitive entrance exams."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites 'Multiple statutory bodies with overlapping mandates... created a maze of approvals' as the problem the Bill aims to solve by unifying them."
                    },
                    {
                        id: 12,
                        question: "The term \"light but tight\" framework, as mentioned in the context of NEP 2020 and the Bill, implies:",
                        options: [
                            "Minimal government funding but tight control over student unions.",
                            "Minimal procedural burden and bureaucratic interference, but strict adherence to transparency, outcomes, and academic standards.",
                            "Light penalties for non-compliance but tight restrictions on faculty recruitment.",
                            "A framework that is easy to implement in rural areas but strict in urban areas."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: 'strong on transparency and standards, but minimal on procedural burden.'"
                    },
                    {
                        id: 13,
                        question: "According to the passage, the Bill proposes to replace the current system of inspections and approvals with:",
                        options: [
                            "A technology-enabled single window system based on public self-disclosure and transparency.",
                            "A system where international agencies conduct all audits.",
                            "A decentralized system where each state government creates its own standards.",
                            "A manual system of physical verification by police officers."
                        ],
                        correctAnswer: 0,
                        explanation: "The text mentions: 'technology-enabled single window system built on public self-disclosure.'"
                    },
                    {
                        id: 14,
                        question: "The Bill is anchored in \"Entry 66 of the Seventh Schedule\" of the Constitution. This entry typically relates to:",
                        options: [
                            "Law and Order.",
                            "Foreign Affairs.",
                            "Coordination and determination of standards in institutions for higher education or research.",
                            "Agricultural income tax."
                        ],
                        correctAnswer: 2,
                        explanation: "This is a standard Polity fact reinforced by the text's mention of 'Anchored in Entry 66... coordination and determination of standards.'"
                    },
                    {
                        id: 15,
                        question: "The author argues that \"International credibility\" for Indian institutions will come from:",
                        options: [
                            "Copying the curriculum of Harvard and Oxford.",
                            "Hiring only foreign faculty members.",
                            "Meeting global benchmarks of outcomes, ethics, and research culture while remaining rooted in Indian priorities.",
                            "Increasing the fees to match international standards."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says: 'not achieved by copying foreign models, but by meeting global benchmarks... while remaining rooted in Indian priorities.'"
                    }
                ]
            },
            {
                id: 204,
                title: "Solar vs Biofuels - Land Use Efficiency",
                text: `Source Text: Electric vehicles might be promoted as the key solution, but back in the early 2000s, it was biofuels. While we might expect biofuels to be a solution of the past, production is higher than ever. In this article, we give a sense of perspective on land use. A Poland-sized area is dedicated to liquid biofuels. Collectively, these biofuels produce around 4% of the world's energy demand for transport.

How much solar power could you produce on that land? The answer is yes. If we put solar panels on that land, we could produce roughly 32,000 terawatt-hours of electricity each year. That is 23 times more than the energy currently produced in the form of all liquid biofuels. We estimate that the total electricity needed to power all cars and trucks is around 7,000 TWh per year. You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.

These comparisons are explained by the fact that growing crops is a very inefficient process. Plants convert less than 1% of sunlight into biomass. Solar panels convert 15% to 20% (some recent designs 25%). Our point is not that we should cover all biofuel land in solar panels. But we do want to challenge how we think about land use. People rightly question the impact of solar farms on landscapes, but rarely consider the land use of existing biofuel crops, which do very little to decarbonise.`,
                questions: [
                    {
                        id: 16,
                        question: "What is the central data-driven argument presented in the passage against the expansion of biofuels?",
                        options: [
                            "Biofuels cause more pollution than petrol and diesel.",
                            "Biofuels are extremely land-inefficient compared to solar energy; solar can generate 23 times more energy on the same amount of land.",
                            "Biofuel crops like sugarcane and corn are impossible to grow in Europe.",
                            "Electric vehicles are too expensive for the average consumer."
                        ],
                        correctAnswer: 1,
                        explanation: "The core argument is the massive efficiency gap: Solar is 23x more energy-dense per acre than biofuels."
                    },
                    {
                        id: 17,
                        question: "Based on the passage, if the land currently used for biofuels were converted to solar panels, what would be the potential outcome regarding transport energy?",
                        options: [
                            "It would barely cover 10% of the world's transport energy needs.",
                            "It would generate enough electricity to power all the world's cars and trucks, using only about one-quarter of that land.",
                            "It would require 32 million more hectares of land to be effective.",
                            "It would lead to a collapse of the global food supply chain."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: 'You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.'"
                    },
                    {
                        id: 18,
                        question: "The huge disparity in energy efficiency between biofuels and solar panels is attributed to:",
                        options: [
                            "The high cost of solar panel manufacturing.",
                            "The biological limit where plants convert less than 1% of sunlight into biomass, versus solar panels converting 15-25%.",
                            "The fact that biofuels are mostly produced in Brazil and the US.",
                            "The government subsidies provided to the solar industry."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: 'Plants convert less than 1% of sunlight... Solar panels convert 15% to 20%.'"
                    },
                    {
                        id: 19,
                        question: "Which of the following best captures the author's intent in making this comparison?",
                        options: [
                            "To advocate for the immediate destruction of all farms.",
                            "To prove that electric vehicles are a failed technology.",
                            "To challenge the public perception of land use, highlighting that existing biofuel crops occupy vast land for minimal energy benefit compared to solar.",
                            "To suggest that Poland should become the world's leading solar energy producer."
                        ],
                        correctAnswer: 2,
                        explanation: "The author states: 'We do want to challenge how we think about land use... rarely consider the land use of existing biofuel crops.'"
                    },
                    {
                        id: 20,
                        question: "What is the approximate current contribution of liquid biofuels to the world's transport energy demand, as per the text?",
                        options: [
                            "4%",
                            "15%",
                            "25%",
                            "50%"
                        ],
                        correctAnswer: 0,
                        explanation: "The text explicitly states: 'produce around 4% of the world's energy demand for transport.'"
                    }
                ]
            }
        ]
    },
    3: {
        day: 3,
        title: "UPSC CSAT Practice Set - Day 03",
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
                title: "Passage 1: Pharma Sector & Trade Dynamics",
                text: `Source Text: In September 2025, U.S. President Donald Trump's sweeping announcement imposing a 100% tariff on branded and patented pharmaceutical imports from October 1, 2025, saw India's pharmaceutical industry standing at a crossroads. The U.S.'s move, ostensibly aimed at bolstering domestic manufacturing, threatens to disrupt supply chains while also fuelling India's export-led growth. Yet, as tariffs ripple through global markets, India's dominance in generics offers a vital buffer. With pharma exports to the U.S. alone reaching close to $9 billion in fiscal 2025, the stakes could not be higher.

Generics dominate, with 70% of exports to the U.S. and Europe. However, $5 billion in annual imports, mainly active pharmaceutical ingredients (API) from China (72% share), exposes supply chain risks. The U.S. tariff, which has spared generics for now, targets branded drugs unless made domestically. India supplies 40% of U.S. generics, saving payers $219 billion in 2022. Yet, the market jitters were immediate. An escalation to generics could cut export revenues by 10%-15%. Some firms with over 30% U.S. exposure face rerouting costs and regulatory hurdles. This could spur "China-plus-one" strategies, redirecting exports to Africa and Southeast Asia.

Challenges such as IP disputes and API dependency persist, but resilience shines through initiatives such as Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP). U.S. tariffs risk causing shortages if India's 40% generic supply frays. India must leverage MoUs, invest $10 billion in APIs via PLI 2.0, and push WTO reforms. With global pharma eyeing $450 billion for India by 2047, collaboration in the form of east-west hybrids is key.`,
                questions: [
                    {
                        id: 1,
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
                        id: 2,
                        question: "The passage mentions \"China-plus-one\" strategies in the context of the tariff shock. What does this imply?",
                        options: [
                            "India will start importing APIs from both China and the U.S. to balance trade.",
                            "Indian firms might diversify their export destinations to regions like Africa and Southeast Asia to reduce over-dependence on the U.S. market.",
                            "China will increase its tariffs on Indian drugs to match the U.S. policy.",
                            "Indian companies will partner with Chinese firms to manufacture drugs inside the U.S."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: \"This could spur 'China-plus-one' strategies, redirecting exports to Africa and Southeast Asia.\" (Context: Reducing U.S. exposure)."
                    },
                    {
                        id: 3,
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
                        id: 4,
                        question: "Based on the passage, why might the U.S. hesitate to escalate tariffs to cover Indian generics?",
                        options: [
                            "Because Indian generics account for 40% of U.S. supply and save payers billions, so tariffs could cause shortages and higher costs.",
                            "Because the WTO has explicitly banned tariffs on generic medicines.",
                            "Because Indian generics are of lower quality and do not compete with U.S. manufacturers.",
                            "Because the U.S. has a surplus of domestically manufactured generic drugs."
                        ],
                        correctAnswer: 0,
                        explanation: "Text states: \"India supplies 40% of U.S. generics, saving payers $219 billion... U.S. tariffs risk causing shortages if India's... supply frays.\""
                    },
                    {
                        id: 5,
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
                title: "Passage 2: Urban Waste & Circular Economy",
                text: `Source Text: At COP30 in Belem, Brazil, waste was fittingly placed at the heart of the climate agenda. Sizeable funds were committed to a new global initiative, No Organic Waste (NOW), to cut methane emissions. The conference noted Circularity as the way to inclusive growth. Expanding cities and towns are an irreversible reality in growing India. It is estimated that cities in India will generate 165 million tonnes of waste annually by 2030. Without early solutions, these will result in grave levels of emissions. The goal of Garbage Free Cities (GFC) by 2026 is an existential necessity.

Under SBM Urban 2.0, sustainable waste management underlines the circular economy model, which recognises waste as a resource. India needs to move away from a linear to circular modeâ€”minimising waste and recovering energy. The good thing is that more than half of municipal waste is organic. Compressed Biogas Plants (CBG) have created possibilities of generating green fuel from municipal wet waste. However, plastic and Construction and Demolition (C&D) waste pose tough challenges. C&D wasteâ€”about 12 million tonnes a yearâ€”is collateral damage from India's fast-growing economy. Unauthorised dumping of construction discards is common.

Much of this waste can be reused or recycled as cost-efficient raw materials. But infrastructure is lacking. Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste. C&D waste has issues of identification, tracing and tracking. Citizens need to get a clear sense of profit and a true cause to be partners. In a society becoming increasingly consumerist, 'reuse' may become a tall order compared to 'recycling'.`,
                questions: [
                    {
                        id: 6,
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
                        id: 7,
                        question: "The passage distinguishes between \"linear\" and \"circular\" modes of waste management. What is the core characteristic of the circular mode mentioned?",
                        options: [
                            "Collecting waste from households and dumping it in landfills in a linear sequence.",
                            "Minimising waste generation and recovering energy/resources from waste, treating it as a resource.",
                            "Burning all waste to ensure zero volume remains.",
                            "Exporting waste to other countries to maintain local cleanliness."
                        ],
                        correctAnswer: 1,
                        explanation: "Text describes circular mode as: \"minimising waste and recovering energy... underlines the circular economy model, which recognises waste as a resource.\""
                    },
                    {
                        id: 8,
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
                        id: 9,
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
                        id: 10,
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
                title: "Passage 3: Sanitation & Urban-Rural Partnerships",
                text: `Source Text: When the Swachh Bharat Mission (SBM) was launched in 2014, its vision was simple: ensure every household has a toilet. More than 12 crore toilets have been built, and every village has declared itself Open Defecation Free (ODF). However, the success has revealed the next frontier: managing the resultant faecal waste. In most rural households, septic tanks serve as the primary form of containment. Without safe systems for collection and treatment, the gains of the ODF movement risk being undermined. This defines the transition to SBM-G Phase II (ODF Plus).

Faecal sludge management remains a critical gap. Maharashtra has experimented with innovative urban-rural partnerships. For example, in Satara district, a partnership was put into practice where four villages (Jakatwadi, Songaon, etc.) have been brought under an arrangement to access the city's treatment plant. Their septic tanks, often never desludged or emptied at exorbitant rates, will be serviced at regular intervals. A private service provider is engaged by gram panchayats. The costs will be recovered through a modest sanitation tax. This approach shows that rural clusters can pool resources to develop standalone infrastructure or link to urban systems, ensuring sustainability.`,
                questions: [
                    {
                        id: 11,
                        question: "What is the \"next frontier\" or challenge identified in the passage after the construction of toilets?",
                        options: [
                            "Building more toilets in urban areas.",
                            "Managing the faecal waste (sludge) generated by the new toilets, particularly desludging septic tanks safely.",
                            "Converting all septic tanks into sewer lines connected to rivers.",
                            "Banning the use of private service providers in sanitation."
                        ],
                        correctAnswer: 1,
                        explanation: "Text identifies \"managing the resultant faecal waste\" and \"desludged at regular intervals\" as the next frontier."
                    },
                    {
                        id: 12,
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
                        id: 13,
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
                        id: 14,
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
                        id: 15,
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
                title: "Passage 4: Homelessness & Social Justice",
                text: `Source Text: While Bengaluru City Police data reveal that the city has witnessed the deaths of more than 15 homeless people over the last 40 days, there are only 48 shelters when the city should have at least 120. Under the NULM policy, civic bodies are responsible for ensuring basic infrastructure such as water supply, sanitation, and safety for the homeless. Yet, barely any shelter has more than 40 beds.

The policy mandates shelters for every 1 lakh population. For Bengaluru, this means at least 120 shelters. However, the existing 48 often lack basics. Women are often traumatised and grope on the streets, yet they feel safer in open spaces than in shelter homes due to issues like bedbugs, lack of family privacy, and rigid rules. A police officer noted, "Deaths might not be directly connected to the weather, but it exacerbates existing health conditions." Homeless people, constantly exposed to harsh weather, face mental health challenges like anxiety and depression. While officials say homeless people "resist relocation," activists argue that agencies conduct surveys but fail to build trust or provide dignified living conditions.`,
                questions: [
                    {
                        id: 16,
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
                        id: 17,
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
                        id: 18,
                        question: "The deaths of homeless people are attributed to:",
                        options: [
                            "A sudden heatwave in Bengaluru.",
                            "Direct freezing to death solely due to low temperatures.",
                            "A combination of harsh weather exacerbating existing health conditions and lack of access to warm clothes/safety gear.",
                            "Food poisoning from street food."
                        ],
                        correctAnswer: 2,
                        explanation: "Text quotes police: \"weather... exacerbate existing health conditions\" and mentions \"lack access to warm clothes.\""
                    },
                    {
                        id: 19,
                        question: "What is the author's stance on the official claim that \"homeless people resist relocation\"?",
                        options: [
                            "The author agrees that homeless people are stubborn and refuse help.",
                            "The author presents the counter-argument that agencies fail to build trust or provide dignified conditions, implying the system is at fault.",
                            "The author suggests that relocation should be made mandatory by force.",
                            "The author believes relocation is not necessary."
                        ],
                        correctAnswer: 1,
                        explanation: "Text cites activists/human rights perspective: \"Agencies... fail to build trust... lack of follow-up.\""
                    },
                    {
                        id: 20,
                        question: "Which scheme is mentioned as the governing policy for urban homeless shelters?",
                        options: [
                            "PM Awas Yojana (PMAY).",
                            "Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (NULM).",
                            "Swachh Bharat Mission (Urban).",
                            "Smart Cities Mission."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly mentions \"Under the NULM policy...\" (National Urban Livelihoods Mission)."
                    }
                ]
            }
        ]
    },
    5: {
        day: 5,
        title: "UPSC CSAT Practice Set - Jan 05 (Day 05)",
        vocabulary: [],
        passages: [
            {
                id: 501,
                title: "Passage 1: Frontier Science (Genetic Code)",
                text: `Source Text: The dictionary of life has a new update. A DNA sequence that signals cells in almost all other organisms to stop synthesising proteins instead encodes a rare amino acid in some archaea, according to a study published in Science. Archaea are microbes that resemble bacteria in shape and size but are biologically distinct. Calling the study â€œthe first of its kind,â€ biological sciences associate professor Abhrajyoti Ghosh said the discovery could help scientists engineer proteins with â€œfunctional advantages that have been hitherto unknown.â€ The studyâ€™s findings provide â€œyet another fantastic example of how biology hides secrets that drive biotechnology innovation.â€\n\nAt the heart of this code are the four nitrogen-containing bases: adenine (A), guanine (G), cytosine (C) and thymine (T). Each amino acid in a protein corresponds to a three-base-long sequence of DNA â€” a.k.a. a triplet codon. The genetic code is a dictionary of 64 such codons. Of these, 61 â€˜senseâ€™ codons encode 20 common amino acids. The remaining three, called â€˜stopâ€™ codons, donâ€™t correspond to any amino acid. Instead, when the protein-making mechanism encounters them, it terminates the protein chain.\n\nHowever, in some Archaea, the â€˜TAGâ€™ stop codon has been completely repurposed. These organisms read the TAG codon as a signal for Pyl (pyrrolysine) not occasionally but always. This â€œgenome-wide incorporation of Pyl at TAG codonsâ€ has led the team to propose â€œthe existence of a previously unrecognized genetic code.â€ The â€˜Pyl codeâ€™ has 62 sense codons instead of the usual 61 and only two stop codons. Berkeley researchers genetically modified Escherichia coli to express the archaeal cellular machinery required to read the Pyl code. They engineered the bacterium to express a protein whose sequence had a TAG codon in the middle. If this setup worked, the bacteria would read TAG as Pyl and produce the complete protein. Otherwise, the TAG codon would signal â€˜stopâ€™, and the bacteria would produce a shorter protein. Extracts confirmed they produced the complete protein.`,
                questions: [
                    {
                        id: 501,
                        question: "The discovery of the \"Pyl code\" in Archaea is scientifically significant primarily because:",
                        options: [
                            "It proves that Archaea are identical to bacteria in their genetic structure.",
                            "It challenges the standard biological rule where 'TAG' functions exclusively as a stop codon, showing it can encode an amino acid instead.",
                            "It demonstrates that DNA sequences are composed of five nitrogenous bases instead of four.",
                            "It suggests that Escherichia coli naturally produces pyrrolysine in the human gut."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states the study provides \"yet another fantastic example of how biology hides secrets... TAG stop codon has been completely repurposed... signals for Pyl... instead of stop\"."
                    },
                    {
                        id: 502,
                        question: "What is the potential application of this discovery mentioned in the passage?",
                        options: [
                            "Curing genetic diseases in humans by removing stop codons.",
                            "Bioengineering proteins with previously unknown functional advantages using the modified genetic code.",
                            "Creating new forms of bacteria that can survive without nitrogen.",
                            "Rewriting the dictionary of life to include 100 new amino acids."
                        ],
                        correctAnswer: 1,
                        explanation: "The text quotes Abhrajyoti Ghosh: \"discovery could help scientists engineer proteins with functional advantages that have been hitherto unknown.\""
                    },
                    {
                        id: 503,
                        question: "Based on the experiment described, how did researchers confirm that the modified E. coli was successfully reading the \"Pyl code\"?",
                        options: [
                            "The bacteria stopped producing proteins altogether.",
                            "The bacteria produced a shorter protein, indicating the stop signal worked.",
                            "The bacteria produced a complete protein, indicating the TAG codon was read as an amino acid rather than a stop signal.",
                            "The bacteria changed its shape to resemble Archaea."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says: \"If this setup worked... bacteria would read TAG as Pyl and produce the complete protein... Extracts confirmed they produced the complete protein.\""
                    },
                    {
                        id: 504,
                        question: "The passage states that the \"genetic code is a dictionary of 64 codons.\" In the standard code (not the Pyl code), how is this dictionary organized?",
                        options: [
                            "62 sense codons and 2 stop codons.",
                            "60 sense codons and 4 stop codons.",
                            "61 sense codons encoding 20 amino acids, and 3 stop codons that terminate the chain.",
                            "64 sense codons, each encoding a unique amino acid."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines the standard code: \"Of these, 61 â€˜senseâ€™ codons encode 20 common amino acids. The remaining three, called â€˜stopâ€™ codons... terminate the protein chain.\""
                    },
                    {
                        id: 505,
                        question: "Which of the following best describes the \"Archaea\" mentioned in the text?",
                        options: [
                            "A type of virus that infects bacteria.",
                            "Microbes that resemble bacteria in shape/size but are biologically distinct and can possess unique genetic codes.",
                            "A synthetic organism created in a laboratory at Berkeley.",
                            "A rare form of algae found only in Antarctic lakes."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes Archaea as \"microbes that resemble bacteria in shape and size but are biologically distinct.\""
                    }
                ]
            },
            {
                id: 502,
                title: "Passage 2: Geopolitics (China's 2026 Posture)",
                text: `Source Text: As 2026 begins, China presents a paradox: a nation wrestling with economic challenges yet projecting strategic confidence; a leadership tightening political control domestically while expanding its diplomatic reach abroad. For India, this Chinese posture and the shift in the stance of the United States toward Beijing have narrowed strategic space. Chinaâ€™s 2025 economic growth was weaker than official figures suggest. Domestic demand remained weak, and the overbuilt property sector continued to weigh on confidence. Instead of boosting consumption, Beijing reinforced a state-led model, prioritizing advanced manufacturing and "whole-chain breakthroughs" in high-tech industries. This "China Shock 2.0" is generating serious disruptions for developed and developing economies alike.\n\nChina's attempts to stabilize major-power ties were undercut by its harsh response to the Japanese Prime Ministerâ€™s comment on Taiwan. Beijing signalled that it remains unwilling to accommodate divergence on issues it deems sensitive. Yet, the perception of a \"G2 overlay\" â€“ a shadow of tacit coordination between the U.S. and China â€“ has serious consequences, as even limited accommodation can constrain the choices of other states. For India, the implications are sobering. The U.S. remains committed to preventing Chinese hegemony in Asia but is less inclined to prioritize relations with India as a strategic counter to China.\n\nOn India-China relations, 2025 witnessed cautious stabilization but no substantive progress on structural issues. The situation along the borders remains stable but not normal. Disengagement has not been accompanied by de-escalation or de-induction. \"Buffer zones\" continue to restrict India's patrolling rights. If these temporary arrangements become permanent, China will have achieved incremental gains consistent with its grey-zone playbook. China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its \"core interests\".`,
                questions: [
                    {
                        id: 501,
                        question: "The author describes China's situation in 2026 as a \"paradox.\" What constitutes this paradox?",
                        options: [
                            "China is growing economically at 10% but failing diplomatically.",
                            "China is wrestling with domestic economic challenges while simultaneously projecting strategic confidence and expanding diplomatic reach abroad.",
                            "China is loosening political control at home while becoming aggressive abroad.",
                            "China is partnering with India while fighting with the United States."
                        ],
                        correctAnswer: 1,
                        explanation: "The text opens with: \"China presents a paradox: a nation wrestling with economic challenges yet projecting strategic confidence... tightening political control... while expanding its diplomatic reach.\""
                    },
                    {
                        id: 502,
                        question: "What does the term \"China Shock 2.0\" refer to in the context of the passage?",
                        options: [
                            "A sudden collapse of the Chinese property market.",
                            "A massive military invasion of Taiwan.",
                            "A disruption caused by China's state-led prioritization of advanced manufacturing and high-tech exports to compensate for weak domestic demand.",
                            "The imposition of new tariffs by the U.S. on Chinese goods."
                        ],
                        correctAnswer: 2,
                        explanation: "The text links \"China Shock 2.0\" to \"prioritizing advanced manufacturing... high-tech industries\" generating disruptions."
                    },
                    {
                        id: 503,
                        question: "According to the passage, what is the status of the \"India-China border situation\"?",
                        options: [
                            "Completely resolved with a return to the pre-2020 status quo.",
                            "Stable but not normal; disengagement has occurred but without de-escalation, and buffer zones restrict India's patrolling rights.",
                            "Intense military conflict is currently ongoing.",
                            "India has regained full access to all patrolling points."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"situation along the borders remains stable but not normal. Disengagement has not been accompanied by de-escalation... Buffer zones continue to restrict India's patrolling rights.\""
                    },
                    {
                        id: 504,
                        question: "The passage suggests that the \"G2 overlay\" (tacit coordination between U.S. and China) has which implication for India?",
                        options: [
                            "It benefits India by reducing global tensions.",
                            "It constrains India's choices, as the U.S. becomes less inclined to prioritize relations with India as a strategic counter to China.",
                            "It leads to a formal military alliance between India and Russia.",
                            "It forces China to accept India's border claims."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"perception of a 'G2 overlay'... has serious consequences... U.S.... is less inclined to prioritize relations with India as a strategic counter to China.\""
                    },
                    {
                        id: 505,
                        question: "Which of the following strategies is China likely to persist with, according to the text?",
                        options: [
                            "Complete isolation from the global economy.",
                            "Managed competition with the U.S., hardball diplomacy, and prickliness on \"core interests\" while stabilizing major relationships.",
                            "Adopting a western-style democratic political system.",
                            "Abandoning its claims on Taiwan to improve ties with Japan."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"China is likely to persist with its current strategy: managed competition with the U.S., stabilization of major relationships along with hardball diplomacy, and prickliness on its 'core interests'.\""
                    }
                ]
            },
            {
                id: 503,
                title: "Passage 3: Socio-Economics (Women's Labour)",
                text: `Source Text: A 2023 United Nations report showed that globally, women spend 2.8 more hours than men on unpaid care and domestic work. The struggle to count womenâ€™s labour continues. While domestic labour has increasingly entered the public discourse, the mental and emotional labour in sustaining relationships and managing household dynamics continues to go largely unacknowledged. This uncounted labour, which plays a critical role in the smooth functioning of families and societies, is rarely measured or rewarded. Shirin Rai argues that economic and policy priorities have long marginalized care work by framing it as secondary to \"productive\" labour traditionally performed by men. The privileging of male breadwinner employment and the relentless focus on GDP growth have contributed to the systemic devaluation of care-related work.\n\nIn India, there is still no legal framework that recognizes or compensates this form of unpaid work, despite it being the backbone of the economy. However, courts have begun to challenge this silence. In Kannaiyan Naidu and Others vs Kamsala Ammal and Others (2023), the Madras High Court ruled that a wife who performed household duties and cared for the family contributed, albeit indirectly, to the acquisition of family assets. Therefore, she was entitled to an equal share in the property.\n\nThese efforts to recognize womenâ€™s labour must be accompanied by a structural reconfiguration of gendered social relations. Without such a transformation, the burden of unpaid care work will remain disproportionately feminised. Article 338 of the Bolivian Constitution recognizes that work at home is an economic activity that creates added value and produces social welfare and wealth. Housewives are entitled to social security. Similarly, Argentina enacted a law recognizing employment contracts for domestic workers where women can get pension credits for unpaid care work.`,
                questions: [
                    {
                        id: 501,
                        question: "The primary argument against the current GDP-focused economic model presented in the passage is:",
                        options: [
                            "It fails to account for inflation correctly.",
                            "It systematically devalues care-related work by framing it as secondary to \"productive\" labour, despite it being critical for the economy.",
                            "It overestimates the contribution of the manufacturing sector.",
                            "It does not include the agricultural output of rural India."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites Shirin Rai arguing that \"economic and policy priorities have long marginalized care work by framing it as secondary to 'productive' labour... systemic devaluation.\""
                    },
                    {
                        id: 502,
                        question: "What was the significance of the Madras High Court ruling in Kannaiyan Naidu vs Kamsala Ammal (2023)?",
                        options: [
                            "It made it mandatory for husbands to pay a monthly salary to their wives.",
                            "It ruled that a wife's household duties contribute to asset acquisition, entitling her to an equal share in the property.",
                            "It criminalized the practice of asking women to do household chores.",
                            "It stated that domestic work cannot be valued in monetary terms."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states the court ruled that \"a wife who performed household duties... contributed... to the acquisition of family assets... entitled to an equal share.\""
                    },
                    {
                        id: 503,
                        question: "The passage cites Bolivia and Argentina to illustrate:",
                        options: [
                            "Countries where women do less housework than men.",
                            "Examples of legal frameworks that explicitly recognize domestic work as economic activity or entitle women to social security/pension credits for it.",
                            "Countries that have abolished the concept of GDP.",
                            "Nations where the judicial system ignores women's rights."
                        ],
                        correctAnswer: 1,
                        explanation: "Bolivia recognizes home work as economic activity; Argentina allows pension credits for it. These are examples of legal frameworks recognizing unpaid care."
                    },
                    {
                        id: 504,
                        question: "The term \"emotional labour\" in the passage refers to:",
                        options: [
                            "The physical effort required to clean a house.",
                            "The work involved in sustaining relationships, managing household dynamics, and supporting the well-being of others.",
                            "The stress faced by women in corporate jobs.",
                            "The labour performed by psychologists."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it as: \"mental and emotional labour in sustaining relationships, managing household dynamics, and supporting the well-being of others.\""
                    },
                    {
                        id: 505,
                        question: "According to the author, what is required alongside legal recognition to truly address the issue?",
                        options: [
                            "A complete ban on women working outside the home.",
                            "A structural reconfiguration of gendered social relations where men co-shoulder care responsibilities.",
                            "The privatization of all childcare services.",
                            "A reduction in the retirement age for women."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"must be accompanied by a structural reconfiguration of gendered social relations, wherein men actively participate in and co-shoulder care responsibilities.\""
                    }
                ]
            },
            {
                id: 504,
                title: "Passage 4: International Relations (Venezuela & Oil)",
                text: `Source Text: President Donald Trumpâ€™s plan to take control of Venezuelaâ€™s oil industry and ask American companies to revitalize it after capturing President NicolÃ¡s Maduro in a raid isn't likely to have a significant immediate impact on oil prices. Venezuelaâ€™s oil industry is in disrepair after years of neglect and international sanctions, so it could take years and major investments before production can increase dramatically. Some analysts are optimistic that Venezuela could double its current output of about 1.1 million barrels a day fairly quickly, but others warn of infrastructure decay.\n\n\"The estimate is that in order for Venezuela to increase from one million barrels per day â€“ that is what it produces today â€“ to four million barrels, it will take about a decade and about a hundred billion dollars of investment,\" said Francisco Monaldi. Venezuela produces heavy crude oil needed for diesel fuel and asphalt. Diesel is in short supply around the world because of sanctions on oil from Venezuela and Russia. Boosting Venezuelan production could make it easier to put pressure on Russia because Europe and the rest of the world could get more of the diesel and heavy oil they need from Venezuela and stop buying from Russia.\n\nHowever, Matthew Waxman, a Columbia University law professor, noted legal issues: \"An occupying military power canâ€™t enrich itself by taking another stateâ€™s resources.\" Additionally, leading companies like ExxonMobil and Chevron didn't immediately respond, and the political picture remained uncertain. The problem isn't just finding the oil; it's a question of the political environment and whether companies can count on the government to live up to their contracts.`,
                questions: [
                    {
                        id: 501,
                        question: "What is the primary reason cited in the passage for why Trump's plan might not have an \"immediate\" impact on oil prices?",
                        options: [
                            "The U.S. military refused to participate in the raid.",
                            "Venezuela's oil industry is in disrepair and requires years of time and billions in investment to restore capacity.",
                            "Venezuela has run out of oil reserves.",
                            "The global demand for oil has dropped to zero."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Venezuelaâ€™s oil industry is in disrepair after years of neglect... it could take years and major investments before production can increase.\""
                    },
                    {
                        id: 502,
                        question: "How could boosting Venezuelan oil production potentially impact Russia?",
                        options: [
                            "It would help Russia sell more oil to the U.S.",
                            "It would allow Europe/World to source heavy oil/diesel from Venezuela instead of Russia, thereby increasing pressure on Russia.",
                            "It would force Russia to invest in Venezuela's infrastructure.",
                            "It would have no impact on Russia as they produce different types of oil."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"make it easier to put pressure on Russia because Europe... could get more of the diesel and heavy oil they need from Venezuela and stop buying from Russia.\""
                    },
                    {
                        id: 503,
                        question: "According to the passage, Venezuela is a major producer of which specific type of oil?",
                        options: [
                            "Light sweet crude used for gasoline.",
                            "Heavy crude oil needed for diesel fuel and asphalt.",
                            "Synthetic oil made from coal.",
                            "Bio-fuel derived from sugarcane."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly says: \"Venezuela produces the kind of heavy crude oil that's needed for diesel fuel, asphalt...\""
                    },
                    {
                        id: 504,
                        question: "What legal hurdle does Matthew Waxman highlight regarding the \"seizure\" of Venezuela's oil?",
                        options: [
                            "American companies are banned from operating in South America.",
                            "International law prohibits an occupying military power from enriching itself by taking another stateâ€™s resources.",
                            "The Venezuelan constitution forbids foreign investment.",
                            "The UN Security Council must approve all oil contracts."
                        ],
                        correctAnswer: 1,
                        explanation: "Waxman notes: \"An occupying military power canâ€™t enrich itself by taking another stateâ€™s resources.\""
                    },
                    {
                        id: 505,
                        question: "The passage implies that American energy companies are hesitant primarily because:",
                        options: [
                            "They do not have the technology to drill for heavy crude.",
                            "They are concerned about the uncertainty of the political environment and the stability/sanctity of contracts.",
                            "They prefer to invest in renewable energy only.",
                            "They are currently bankrupt."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions companies \"didn't immediately respond\" and notes: \"It's a question of the political environment and whether companies can count on the government to live up to their contracts.\""
                    }
                ]
            }
        ]
    },
    16: {
        day: 16,
        title: "UPSC CSAT Practice Set - Day 16",
        vocabulary: [
            {
                word: "Algorithmic Bias",
                context: "The deployment of AI in hiring has raised concerns about algorithmic bias.",
                definition: "Systematic and repeatable errors in a computer system that create unfair outcomes, often privileging one group over another.",
                synonyms: ["AI bias", "Machine learning bias"],
                antonyms: ["Algorithmic fairness"],
                toneIndicator: 'negative',
                csatTip: "Key concept in Science & Tech passages."
            },
            {
                word: "Digital Divide",
                context: "The pandemic exacerbated the digital divide in education.",
                definition: "The gap between demographics and regions that have access to modern information and communications technology, and those that don't.",
                synonyms: ["Digital inequality", "Tech gap"],
                antonyms: ["Digital inclusion"],
                toneIndicator: 'negative'
            },
            {
                word: "Gig Economy",
                context: "Social security remains a major challenge in the gig economy.",
                definition: "A labor market characterized by the prevalence of short-term contracts or freelance work as opposed to permanent jobs.",
                synonyms: ["Platform economy", "Freelance economy"],
                antonyms: ["Traditional employment"],
                toneIndicator: 'neutral'
            },
            {
                word: "Urban Heat Island",
                context: "Concrete structures contribute significantly to the urban heat island effect.",
                definition: "An urban area or metropolitan area that is significantly warmer than its surrounding rural areas due to human activities.",
                synonyms: ["Heat island effect"],
                antonyms: [],
                toneIndicator: 'negative'
            },
            {
                word: "Gentrification",
                context: "The revitalization of the downtown area led to rapid gentrification.",
                definition: "The process of changing the character of a neighborhood through the influx of more affluent residents and businesses, often displacing current inhabitants.",
                synonyms: ["Urban renewal (sometimes)"],
                antonyms: ["Urban decay"],
                toneIndicator: 'neutral' // Can be positive (renewal) or negative (displacement) depending on context
            }
        ],
        passages: [
            {
                id: 1601,
                title: "Passage 1: The AI Employment Paradox",
                text: `Source Text: The rapid integration of Artificial Intelligence (AI) into the workforce presents a complex paradox for developing economies like India. On one hand, AI promises to boost productivity, spur innovation, and create new high-value job categories. On the other, it threatens to automate routine cognitive and manual tasks, which currently form the bulk of formal employment. For India, with its massive demographic dividend, the stakes are critically high. If AI displaces entry-level jobs in sectors like IT and BPO faster than the workforce can reskill, the demographic dividend could turn into a demographic disaster.
                
                However, the narrative of "AI stealing jobs" is often oversimplified. History suggests that technology tends to create more jobs than it destroys, but these new jobs are often in different sectors and require different skills. The real challenge is the "transition friction." Can the education system pivot fast enough? Can mid-career professionals afford the downtime to learn new tools? The government's role, therefore, must shift from merely protecting jobs to protecting workersâ€”ensuring social safety nets and accessible upskilling pathways.`,
                questions: [
                    {
                        id: 1,
                        question: "What does the author mean by the term \"transition friction\" in the context of the passage?",
                        options: [
                            "The resistance of AI systems to integrate with legacy software.",
                            "The difficulty and time lag involved in the workforce adapting to new skills and sectors required by AI-driven economy.",
                            "The conflict between labor unions and management regarding AI implementation.",
                            "The slowing down of economic growth due to investment in AI."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it in the subsequent questions: 'Can the education system pivot fast enough? Can mid-career professionals afford the downtime?' referring to the difficulty of adaptation."
                    },
                    {
                        id: 2,
                        question: "According to the passage, the \"demographic dividend\" could turn into a \"demographic disaster\" if:",
                        options: [
                            "The government continues to protect obsolete jobs instead of embracing AI.",
                            "AI automation replaces entry-level jobs faster than the workforce can be reskilled.",
                            "The IT and BPO industries completely shut down operations in India.",
                            "India fails to develop its own indigenous AI models."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly states: 'If AI displaces entry-level jobs... faster than the workforce can reskill, the demographic dividend could turn into a demographic disaster.'"
                    },
                    {
                        id: 3,
                        question: "Which of the following is the author's suggested policy shift for the government?",
                        options: [
                            "Ban AI in sectors that employ large numbers of people.",
                            "Focus on protecting specific job roles from automation.",
                            "Shift focus from protecting specific jobs to protecting workers through safety nets and upskilling.",
                            "Provide guaranteed employment in the public sector to offset private sector job losses."
                        ],
                        correctAnswer: 2,
                        explanation: "Text concludes: 'government's role, therefore, must shift from merely protecting jobs to protecting workersâ€”ensuring social safety nets...'"
                    }
                ]
            },
            {
                id: 1602,
                title: "Passage 2: Sponge Cities",
                text: `Source Text: As urban flooding becomes a recurrent nightmare in Indian metros, the concept of "Sponge Cities" has gained traction. A Sponge City is designed to passively absorb, clean, and use rainfall in an ecologically friendly way that reduces dangerous runoff. Instead of funneling rainwater away as quickly as possible via concrete drains (gray infrastructure), sponge cities use permeable pavements, rain gardens, and green roofs (green infrastructure) to retain water at its source.
                
                This approach solves two problems at once: flood management and water scarcity. By allowing water to seep into the ground, groundwater tables are recharged. However, retrofitting ancient, unplanned Indian cities is no small feat. Encroachment on natural wetlands and the concreting of open spaces have severed the natural hydrological cycle. Implementing the sponge city model requires not just engineering changes, but a fundamental shift in urban governanceâ€”strictly enforcing zoning laws and prioritizing ecology over short-term real estate gains.`,
                questions: [
                    {
                        id: 4,
                        question: "The core philosophy of a \"Sponge City\" is best described as:",
                        options: [
                            "Building larger and wider concrete drains to flush water out of the city rapidly.",
                            "Using giant pumps to remove floodwater during monsoons.",
                            "Managing rainwater by allowing it to be absorbed and retained at the source using green infrastructure.",
                            "Constructing large dams around the city to prevent river overflow."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'passively absorb, clean, and use rainfall... using permeable pavements... to retain water at its source.'"
                    },
                    {
                        id: 5,
                        question: "According to the passage, what acts as a major barrier to implementing the sponge city model in India?",
                        options: [
                            "The lack of availability of permeable pavement materials.",
                            "The high cost of maintaining green roofs.",
                            "The unplanned nature of cities, encroachment on wetlands, and concreting of open spaces.",
                            "The public's refusal to accept green infrastructure."
                        ],
                        correctAnswer: 2,
                        explanation: "Text mentions: 'retrofitting ancient, unplanned Indian cities is no small feat. Encroachment on natural wetlands and the concreting... have severed the natural hydrological cycle.'"
                    }
                ]
            }
        ]
    },
    17: {
        day: 17,
        title: "English: RC Practice Set 4 (Philosophy)",
        vocabulary: [
            {
                word: "Existentialism",
                context: "Existentialism emphasizes individual existence, freedom and choice.",
                definition: "A philosophical theory or approach which emphasizes the existence of the individual person as a free and responsible agent determining their own development through acts of the will.",
                synonyms: [],
                antonyms: ["Determinism"],
                toneIndicator: 'neutral'
            },
            {
                word: "Utilitarianism",
                context: "The utilitarian view suggests the best action is the one that maximizes utility.",
                definition: "The doctrine that actions are right if they are useful or for the benefit of a majority.",
                synonyms: ["Pragmatism"],
                antonyms: [],
                toneIndicator: 'neutral'
            },
            {
                word: "Epistemology",
                context: "Epistemology questions what we can truly know.",
                definition: "The theory of knowledge, especially with regard to its methods, validity, and scope.",
                synonyms: [],
                antonyms: [],
                toneIndicator: 'neutral'
            }
        ],
        passages: [
            {
                id: 1701,
                title: "Passage 1: The Burden of Freedom",
                text: `Source Text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does." This existentialist proclamation by Jean-Paul Sartre places the weight of the world squarely on the shoulders of the individual. Unlike objects, which have a fixed essence (a knife is made to cut), human beings have no predetermined purpose. We exist first, and then we define ourselves through our actions.  This radical freedom is not a source of joy but of anguish. When we choose for ourselves, we are, in effect, choosing for all of humanity, setting a template for what we believe a human being should be. To deny this responsibility is "bad faith"â€”a form of self-deception where we pretend we are compelled by circumstances, society, or biology, rather than admitting we chose to yield to them.`,
                questions: [
                    {
                        id: 1,
                        question: "Why does the author describe freedom as a \"condemnation\" rather than a gift?",
                        options: [
                            "Because freedom allows people to commit crimes without punishment.",
                            "Because it forces individuals to bear absolute responsibility for their actions and essence, without any external excuses.",
                            "Because society punishes those who exercise too much freedom.",
                            "Because humans are actually determined by their biology and freedom is an illusion."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: 'condemned to be free... responsible for everything he does... radical freedom is not a source of joy but of anguish.'"
                    },
                    {
                        id: 2,
                        question: "The concept of \"bad faith\" refers to:",
                        options: [
                            "Lying to others about one's intentions.",
                            "Pretending that one's choices are determined by external forces to escape the anguish of responsibility.",
                            "Believing in a religion that has been disproven by science.",
                            "Acting with malicious intent toward others."
                        ],
                        correctAnswer: 1,
                        explanation: "Text defines bad faith as: 'self-deception where we pretend we are compelled by circumstances... rather than admitting we chose to yield to them.'"
                    },
                    {
                        id: 3,
                        question: "What distinction does the passage make between objects (like a knife) and human beings?",
                        options: [
                            "Objects have a predetermined essence/purpose, while humans exist first and define their essence through action.",
                            "Objects are free, while humans are bound by laws.",
                            "Objects are durable, while humans are fragile.",
                            "There is no real distinction; both are controlled by physics."
                        ],
                        correctAnswer: 0,
                        explanation: "Text says: 'Unlike objects, which have a fixed essence... human beings have no predetermined purpose. We exist first, and then we define ourselves.'"
                    },
                    {
                        id: 4,
                        question: "According to the passage, when an individual makes a choice, they are effectively:",
                        options: [
                            "Thinking only of their own selfish needs.",
                            "Choosing for all of humanity and setting a standard for mankind.",
                            "Rebelling against the established social order.",
                            "Proving that God does not exist."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: 'When we choose for ourselves, we are, in effect, choosing for all of humanity, setting a template...'"
                    },
                    {
                        id: 5,
                        question: "The tone of the passage can best be described as:",
                        options: [
                            "Optimistic and lighthearted.",
                            "Cynical and dismissive.",
                            "Philosophical and serious.",
                            "Scientific and empirical."
                        ],
                        correctAnswer: 2,
                        explanation: "The passage deals with existential angst, responsibility, and the nature of being in a serious, analytical manner."
                    }
                ]
            },
            {
                id: 1702,
                title: "Passage 2: The Utilitarian Calculus",
                text: `Source Text: The trolley problem remains the classic litmus test for utilitarian ethics. If you could save five lives by diverting a runaway trolley onto a track where it would kill one person, would you? For a strict utilitarian, the answer is a mathematical obviousness: five is greater than one. The intended outcomeâ€”minimizing total harmâ€”justifies the action. However, this "greatest happiness principle" faces severe criticism when it collides with individual rights. If a doctor could save five patients needing organ transplants by sacrificing one healthy visitor, utilitarian logic might endorse it. This suggests that while utilitarianism is effective for public policy (allocating limited resources), it can be morally monstrous at the personal level, potentially reducing human beings to mere numbers in a happiness calculation.`,
                questions: [
                    {
                        id: 6,
                        question: "What is the primary criticism of utilitarianism highlighted in the passage?",
                        options: [
                            "It ignores the importance of happiness.",
                            "It is too difficult to calculate the consequences of actions.",
                            "It can justify violating individual rights (like killing an innocent person) if it serves the greater good.",
                            "It prioritizes the minority over the majority."
                        ],
                        correctAnswer: 2,
                        explanation: "The text uses the organ transplant example to show it can be 'morally monstrous... reducing human beings to mere numbers,' implying violation of rights."
                    },
                    {
                        id: 7,
                        question: "In the context of the passage, the \"trolley problem\" serves to:",
                        options: [
                            "Prove that trains are dangerous.",
                            "Illustrate the conflict between saving more lives and actively causing the death of one.",
                            "Show that human beings are incapable of making rational decisions.",
                            "Demonstrate the efficiency of public transport."
                        ],
                        correctAnswer: 1,
                        explanation: "It is introduced as a 'litmus test for utilitarian ethics' illustrating the 5 vs 1 calculation."
                    },
                    {
                        id: 8,
                        question: "The author suggests that utilitarianism is most appropriate for:",
                        options: [
                            "Personal relationships and family decisions.",
                            "Public policy decisions involving resource allocation.",
                            "Religious worship.",
                            "Artistic expression."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: 'utilitarianism is effective for public policy (allocating limited resources).'"
                    },
                    {
                        id: 9,
                        question: "The phrase \"mathematical obviousness\" implies that for a strict utilitarian:",
                        options: [
                            "Moral decisions are complex and emotional.",
                            "Moral decisions are reducible to simple calculations of quantity (5 > 1).",
                            "Mathematics is more important than ethics.",
                            "There is no such thing as a correct answer."
                        ],
                        correctAnswer: 1,
                        explanation: "It explains the decision as 'five is greater than one'â€”a simple quantitative comparison."
                    },
                    {
                        id: 10,
                        question: "Which word best describes the author's view of applying utilitarian logic to the 'doctor-transplant' scenario?",
                        options: [
                            "Efficient.",
                            "Necessary.",
                            "Monstrous.",
                            "Courageous."
                        ],
                        correctAnswer: 2,
                        explanation: "The author explicitly uses the phrase 'can be morally monstrous at the personal level.'"
                    }
                ]
            },
            {
                id: 1703,
                title: "Passage 3: The Veil of Ignorance",
                text: `Source Text: John Rawls proposed a thought experiment to determine the principles of a just society: the "Original Position." Imagine you are tasked with designing a new society, but you are behind a "Veil of Ignorance." You do not know if you will be rich or poor, talented or disabled, male or female, or of a majority or minority race. Rawls argues that a rational person in this position would choose two key principles. First, basic liberties for all (freedom of speech, religion). Second, the "Difference Principle"â€”inequalities are permitted only if they benefit the least advantaged members of society. Since you could end up being the poorest person, you would design the system to ensure the 'bottom' is as high as possible, rather than gambling on a system with massive inequality in hopes of being at the top.`,
                questions: [
                    {
                        id: 11,
                        question: "What is the primary function of the \"Veil of Ignorance\" in Rawls' theory?",
                        options: [
                            "To ensure that people are educated about the poor.",
                            "To eliminate bias by preventing decision-makers from knowing their own status in the society they are designing.",
                            "To hide the corrupt activities of politicians.",
                            "To prove that ignorance is bliss."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'You do not know if you will be rich or poor... rational person... would choose... basic liberties.' It removes self-interest."
                    },
                    {
                        id: 12,
                        question: "According to the \"Difference Principle,\" economic inequality is acceptable only if:",
                        options: [
                            "It incentivizes hard work.",
                            "The government collects high taxes.",
                            "It works to the benefit of the least advantaged members of society.",
                            "It does not exceed a ratio of 10:1."
                        ],
                        correctAnswer: 2,
                        explanation: "Text defines it: 'inequalities are permitted only if they benefit the least advantaged members of society.'"
                    },
                    {
                        id: 13,
                        question: "Why does Rawls argue a rational person would choose these principles?",
                        options: [
                            "Because humans are naturally altruistic.",
                            "Because of risk aversionâ€”since one 'could end up being the poorest,' one would maximize the minimum well-being.",
                            "Because equality is the only moral goal.",
                            "Because weak people need protection."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explains: 'Since you could end up being the poorest person, you would design the system to ensure the 'bottom' is as high as possible.'"
                    },
                    {
                        id: 14,
                        question: "The \"Original Position\" is best described as:",
                        options: [
                            "The geographical location where civilization began.",
                            "A hypothetical scenario or thought experiment for determining justice.",
                            "The political stance of the conservative party.",
                            "The first draft of the US Constitution."
                        ],
                        correctAnswer: 1,
                        explanation: "Text introduces it as: 'proposed a thought experiment... the Original Position.'"
                    },
                    {
                        id: 15,
                        question: "Rawls' theory primarily addresses which concept?",
                        options: [
                            "Distributive Justice.",
                            "Criminal Law.",
                            "International Relations.",
                            "Environmental Ethics."
                        ],
                        correctAnswer: 0,
                        explanation: "The focus on designing a society, inequalities, and the 'least advantaged' relates to Distributive Justice."
                    }
                ]
            },
            {
                id: 1704,
                title: "Passage 4: The Cave Allegory",
                text: `Source Text: Plato's Allegory of the Cave describes prisoners chained in a cave facing a wall, seeing only shadows cast by objects behind them. To them, these shadows are reality. One prisoner is freed and dragged outside into the sunlight. At first, the light blinds him, and he is pained and confused. Gradually, he sees the real worldâ€”the trees, the stars, and finally the sun itself (representing the Form of the Good). When he returns to the cave to free the others, they mock him and threaten to kill him, arguing that his eyes are ruined because he can no longer see the shadows clearly. The allegory illustrates the philosopher's journey from opinion (doxa) to knowledge (episteme) and the hostility that enlightenment often faces from the ignorant.`,
                questions: [
                    {
                        id: 16,
                        question: "In the allegory, the \"shadows\" represent:",
                        options: [
                            "The dark side of human nature.",
                            "A distorted or incomplete perception of reality (illusion/opinion).",
                            "The ghosts of ancestors.",
                            "The artistic potential of mankind."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'To them, these shadows are reality... illustrates philosopher's journey from opinion to knowledge.' Shadows = Opinion/Illusion."
                    },
                    {
                        id: 17,
                        question: "The reaction of the remaining prisoners to the returning philosopher suggests:",
                        options: [
                            "They are eager to learn the truth.",
                            "They are hostile toward new ideas that challenge their established worldview.",
                            "They are physically unable to leave the cave.",
                            "They are waiting for a leader."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'they mock him and threaten to kill him... illustrates... the hostility that enlightenment often faces.'"
                    },
                    {
                        id: 18,
                        question: "The \"Sun\" in the allegory represents:",
                        options: [
                            "The physical sun.",
                            "The King or Ruler.",
                            "The Form of the Good (Ultimate Truth).",
                            "The fire in the cave."
                        ],
                        correctAnswer: 2,
                        explanation: "Text explicitly states: 'finally the sun itself (representing the Form of the Good).'"
                    },
                    {
                        id: 19,
                        question: "The pain and blindness experienced by the freed prisoner initially symbolize:",
                        options: [
                            "The physical torture of the chains.",
                            "The difficulty and discomfort of the educational process and confronting truth.",
                            "The sun's harmful UV rays.",
                            "The prisoner's regret at leaving his friends."
                        ],
                        correctAnswer: 1,
                        explanation: "It symbolizes the difficult transition from ignorance to knowledge ('At first, the light blinds him... pained and confused')."
                    },
                    {
                        id: 20,
                        question: "The distinction between \"doxa\" and \"episteme\" refers to:",
                        options: [
                            "Day and Night.",
                            "Good and Evil.",
                            "Opinion and Knowledge.",
                            "Life and Death."
                        ],
                        correctAnswer: 2,
                        explanation: "Text mentions: 'journey from opinion (doxa) to knowledge (episteme).'"
                    }
                ]
            }
        ]
    },
    18: {
        day: 18,
        title: "English: Mixed Verbal Ability",
        vocabulary: [],
        passages: [
            {
                id: 1801,
                title: "Section 1: Sentence Correction",
                text: "Directions: In each of the following questions, find out which part of the sentence has an error.",
                questions: [
                    {
                        id: 1,
                        question: "Identify the error: (a) The climate of Ranchi / (b) is better than / (c) Patna. / (d) No error.",
                        options: ["(a)", "(b)", "(c)", "(d)"],
                        correctAnswer: 2,
                        explanation: "Comparison must be between similar things. 'The climate of Ranchi is better than THAT OF Patna'."
                    },
                    {
                        id: 2,
                        question: "Identify the error: (a) One of the / (b) most intelligent student / (c) in the class. / (d) No error.",
                        options: ["(a)", "(b)", "(c)", "(d)"],
                        correctAnswer: 1,
                        explanation: "'One of the' is always followed by a plural noun. Should be 'students'."
                    },
                    {
                        id: 3,
                        question: "Identify the error: (a) Scarcely had I / (b) reached the station / (c) than the train left. / (d) No error.",
                        options: ["(a)", "(b)", "(c)", "(d)"],
                        correctAnswer: 2,
                        explanation: "'Scarcely' is followed by 'when', not 'than'. 'Than' is used with 'No sooner'."
                    },
                    {
                        id: 4,
                        question: "Identify the error: (a) It is high time / (b) we start / (c) preparing for the exam. / (d) No error.",
                        options: ["(a)", "(b)", "(c)", "(d)"],
                        correctAnswer: 1,
                        explanation: "'It is high time' takes the past subjunctive (started)."
                    },
                    {
                        id: 5,
                        question: "Identify the error: (a) Neither of the / (b) five boys / (c) is guilty. / (d) No error.",
                        options: ["(a)", "(b)", "(c)", "(d)"],
                        correctAnswer: 0,
                        explanation: "'Neither' is used for two. For more than two, use 'None'."
                    }
                ]
            },
            {
                id: 1802,
                title: "Section 2: Para Jumbles",
                text: "Directions: Arrange the sentences A, B, C, D to form a coherent paragraph.",
                questions: [
                    {
                        id: 6,
                        question: "A. The implications of this are profound.\\nB. Artificial Intelligence is evolving rapidly.\\nC. It is changing how we work and live.\\nD. We must prepare for this shift.",
                        options: ["B-C-A-D", "A-B-C-D", "B-A-C-D", "C-B-A-D"],
                        correctAnswer: 0,
                        explanation: "B introduces the topic. C explains the effect. A refers to the effect ('this'). D is the conclusion."
                    },
                    {
                        id: 7,
                        question: "A. Whatever the reason, the outcome is the same.\\nB. Some say it is due to climate change.\\nC. The river has dried up completely.\\nD. Others blame the new dam.",
                        options: ["C-B-D-A", "C-D-B-A", "B-D-A-C", "A-B-C-D"],
                        correctAnswer: 0,
                        explanation: "C states the phenomenon. B and D give reasons. A concludes."
                    },
                    {
                        id: 8,
                        question: "A. He could not find his keys.\\nB. John reached home late at night.\\nC. He had to wake up his wife.\\nD. He searched his pockets frantically.",
                        options: ["B-D-A-C", "B-A-D-C", "D-A-B-C", "A-B-C-D"],
                        correctAnswer: 0,
                        explanation: "Chronological order: Reached home -> Searched pockets -> Couldn't find -> Woke wife."
                    },
                    {
                        id: 9,
                        question: "A. This creates a vicious cycle.\\nB. Poverty leads to lack of education.\\nC. Without education, one cannot get a good job.\\nD. No job means continued poverty.",
                        options: ["B-C-D-A", "B-A-C-D", "A-B-C-D", "C-D-A-B"],
                        correctAnswer: 0,
                        explanation: "Standard cause-effect chain: B -> C -> D -> A (Conclusion)."
                    },
                    {
                        id: 10,
                        question: "A. But the result was worth the effort.\\nB. The mountain was steep and dangerous.\\nC. The climbers were exhausted.\\nD. The view from the top was breathtaking.",
                        options: ["B-C-A-D", "B-C-D-A", "C-B-A-D", "A-B-C-D"],
                        correctAnswer: 1,
                        explanation: "B-C is the struggle. D is the reward. A reflects on the reward. B-C-D-A."
                    }
                ]
            },
            {
                id: 1803,
                title: "Section 3: Idioms & Vocabulary",
                text: "Directions: Choose the correct meaning/usage.",
                questions: [
                    {
                        id: 11,
                        question: "The phrase \"To beat around the bush\" means:",
                        options: ["To clear the forest.", "To avoid the main topic.", "To hit someone unknowingly.", "To search for something lost."],
                        correctAnswer: 1,
                        explanation: "It means to avoid addressing the main issue directly."
                    },
                    {
                        id: 12,
                        question: "Choose the synonym of 'Ephemeral':",
                        options: ["Lasting", "Eternal", "Short-lived", "Heavy"],
                        correctAnswer: 2,
                        explanation: "Ephemeral means lasting for a very short time."
                    },
                    {
                        id: 13,
                        question: "Choose the antonym of 'Mitigate':",
                        options: ["Alleviate", "Aggravate", "Reduce", "Soothe"],
                        correctAnswer: 1,
                        explanation: "Mitigate means to make less severe. Aggravate means to make worse."
                    },
                    {
                        id: 14,
                        question: "Something \"out of the blue\" is:",
                        options: ["From the sky", "Unexpectedly", "Depressing", "Colorful"],
                        correctAnswer: 1,
                        explanation: "It means happening suddenly and unexpectedly."
                    },
                    {
                        id: 15,
                        question: "A \"White Elephant\" refers to:",
                        options: ["A rare animal.", "Something expensive but useless.", "A sign of good luck.", "A powerful person."],
                        correctAnswer: 1,
                        explanation: "It refers to a possession that is useless or troublesome, especially one that is expensive to maintain."
                    }
                ]
            },
            {
                id: 1804,
                title: "Section 4: Critical Reasoning",
                text: "Directions: Analyze the arguments.",
                questions: [
                    {
                        id: 16,
                        question: "Statement: A severe drought is reported in many states. Course of Action: I. Government should immediately provide financial assistance. II. Food and water should be sent to affect areas.",
                        options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither follows"],
                        correctAnswer: 2,
                        explanation: "Both are immediate and necessary actions in a drought crisis."
                    },
                    {
                        id: 17,
                        question: "Statement: 'Buy pure organic honey from Company X.' - An Advertisement.  Assumption: I. Artificial honey can be prepared. II. People want to buy pure organic honey.",
                        options: ["Only I implicit", "Only II implicit", "Both I and II implicit", "Neither implicit"],
                        correctAnswer: 2,
                        explanation: "The ad stresses 'pure', implying impure/artificial exists (I). Advertisers assume demand exists (II)."
                    },
                    {
                        id: 18,
                        question: "Statement: Should higher education be made free in India? Argument I: Yes, it will help improve literacy. Argument II: No, it will be a burden on the exchequer.",
                        options: ["Only I is strong", "Only II is strong", "Both are strong", "Neither is strong"],
                        correctAnswer: 2,
                        explanation: "I addresses social benefit (literacy/development). II addresses economic reality. Both are strong arguments."
                    },
                    {
                        id: 19,
                        question: "Statement: All mangoes are golden. No golden things are cheap. Conclusion: I. All mangoes are cheap. II. Golden mangoes are not cheap.",
                        options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
                        correctAnswer: 1,
                        explanation: "Mango -> Golden. Golden -> Not Cheap. So Mango -> Not Cheap. II follows. I is false."
                    },
                    {
                        id: 20,
                        question: "Cause: The prices of petrol have increased. Effect: The price of vegetables has increased.",
                        options: ["Statement is true", "Statement is false", "Petrol price is the cause, vegetable price is the effect", "Both are effects of independent causes"],
                        correctAnswer: 2,
                        explanation: "Increase in transport cost (petrol) directly causes increase in commodity prices (vegetables)."
                    }
                ]
            }
        ]
    },

    19: {
        day: 19,
        title: "English: PYQ Analysis",
        vocabulary: [],
        passages: [
            {
                id: 1901,
                title: "Passage 1 (UPSC 2023)",
                text: "Source Text: Environmental protection is not just a technical issue but an ethical one. We cannot simply engineer our way out of the climate crisis without addressing the underlying values of consumerism. (Simulated text for PYQ Analysis)",
                questions: [
                    {
                        id: 1,
                        question: "The author implies that technology alone is:",
                        options: ["Sufficient", "Insufficient", "Harmful", "Irrelevant"],
                        correctAnswer: 1,
                        explanation: "Text says 'We cannot simply engineer our way out...'"
                    }
                ]
            },
            { id: 1902, title: "Passage 2", text: "Simulated Text...", questions: [] },
            { id: 1903, title: "Passage 3", text: "Simulated Text...", questions: [] },
            { id: 1904, title: "Passage 4", text: "Simulated Text...", questions: [] }
            // Note: Keeping Day 19 brief as placeholder for user to fill with real PYQs if needed. 
            // The file structure is the priority.
        ]
    },
    20: {
        day: 20,
        title: "CSAT Practice - Day 20",
        vocabulary: [
            {
                word: "Algorithmic Bias",
                context: "...concerns regarding algorithmic bias in hiring processes...",
                definition: "Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.",
                synonyms: ["AI bias", "Machine learning bias"],
                antonyms: ["Algorithmic fairness"],
                toneIndicator: "negative"
            },
            {
                word: "Urban Heat Island",
                context: "...cities suffering from the urban heat island effect...",
                definition: "An urban area that is significantly warmer than its surrounding rural areas due to human activities.",
                synonyms: ["Heat island"],
                antonyms: [],
                toneIndicator: "negative"
            }
        ],
        passages: [
            {
                id: 2001,
                title: "Passage 1: Allocative Efficiency of AI",
                text: "Source Text: Artificial Intelligence (AI) promises to revolutionize the allocative efficiency of resources in the economy. By predicting demand with high precision, AI can reduce wastage in supply chains and optimize energy grids. However, this efficiency comes at a cost of transparency. â€˜Black boxâ€™ algorithms make decisions that even their creators cannot fully explain. When these systems are applied to social sectors like credit scoring or hiring, â€˜Allocative Efficiencyâ€™ may turn into â€˜Allocative Discriminationâ€™, reinforcing historical biases under the guise of mathematical objectivity.",
                questions: [
                    {
                        id: 1,
                        question: "The author implies that the 'Black box' nature of AI:",
                        options: [
                            "Is necessary to protect trade secrets.",
                            "Undermines the accountability of decisions in social sectors.",
                            "Increases the speed of processing data.",
                            "Prevents hackers from manipulating the system."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says black box algorithms make decisions creators can't explain, leading to potential discrimination in social sectors."
                    },
                    {
                        id: 2,
                        question: "What is the 'Allocative Discrimination' mentioned in the text?",
                        options: [
                            "The refusal of AI to allocate resources to poor people.",
                            "The reinforcement of historical biases by opaque algorithms.",
                            "The efficient allocation of resources to the most profitable sectors.",
                            "The bias of AI against rural areas."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly defines it as 'reinforcing historical biases under the guise of mathematical objectivity'."
                    }
                ]
            },
            {
                id: 2002,
                title: "Passage 2: Urban Heat Islands",
                text: "Source Text: As Indian cities concrete over their green cover, they are becoming heat traps. The Urban Heat Island (UHI) effect causes cities to be 3-4 degrees Celsius warmer than peri-urban areas. This is not just a comfort issue but a public health crisis. Night-time temperatures remain high, preventing the human body from recovering. The solution lies in 'Blue-Green Infrastructure'â€”integrating water bodies and vegetation into urban planning. However, real estate pressure treats every inch of land as a commodity, making such integration a regulatory battle.",
                questions: [
                    {
                        id: 3,
                        question: "According to the passage, why is the UHI effect termed a 'public health crisis'?",
                        options: [
                            "It causes heat strokes during the day only.",
                            "It prevents the body from recovering due to high night-time temperatures.",
                            "It leads to increased air pollution.",
                            "It causes shortage of drinking water."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: 'Night-time temperatures remain high, preventing the human body from recovering.'"
                    }
                ]
            }
        ]
    },
    21: {
        day: 21,
        title: "CSAT Practice - Day 21",
        vocabulary: [
            {
                word: "Strategic Autonomy",
                context: "...India's pursuit of strategic autonomy in the semiconductor sector...",
                definition: "The ability of a country to pursue its national interests and foreign policy without being constrained by other states.",
                synonyms: ["Sovereignty", "Independence"],
                antonyms: ["Dependency"],
                toneIndicator: "positive"
            }
        ],
        passages: [
            {
                id: 2101,
                title: "Passage 1: The Semiconductor Race",
                text: "Source Text: The global race for semiconductors is no longer just about economics; it is about national security. 'Oil of the 21st century', chips power everything from missiles to toasters. India's Semiconductor Mission aims to reduce reliance on imports, particularly from geopolitical hotspots. However, building a fabrication ecosystem requires three things India has historically struggled to align: massive capital, ultra-pure water/power reliability, and a specialized workforce. Success depends not on just subsidies, but on creating an industrial culture of precision.",
                questions: [
                    {
                        id: 1,
                        question: "Why are semiconductors referred to as the 'Oil of the 21st century'?",
                        options: [
                            "They are extracted from the ground like oil.",
                            "They are the critical resource powering the modern economy and security.",
                            "They cause pollution similar to fossil fuels.",
                            "They are traded in barrels."
                        ],
                        correctAnswer: 1,
                        explanation: "Use of 'power everything from missiles to toasters' implies they are the foundational energy/resource of the modern age."
                    }
                ]
            }
        ]
    },
    22: {
        day: 22,
        title: "CSAT Practice - Day 22",
        vocabulary: [
            {
                word: "Simultaneous Elections",
                context: "...debate around simultaneous elections for Lok Sabha and Assemblies...",
                definition: "Holding elections to the House of the People and State Legislative Assemblies together.",
                synonyms: ["One Nation One Election"],
                antonyms: [],
                toneIndicator: "neutral"
            },
            {
                word: "Green Shipping",
                context: "...transition to green shipping corridors...",
                definition: "Using zero-emission fuels and technologies in the maritime shipping industry.",
                synonyms: ["Sustainable maritime transport"],
                antonyms: [],
                toneIndicator: "positive"
            }
        ],
        passages: [
            {
                id: 2201,
                title: "Passage 1: One Nation, One Election",
                text: "Source Text: The proposal for 'One Nation, One Election' argues that continuous election cycles keep the country in a permanent campaign mode, hindering governance due to the Model Code of Conduct. Proponents claim it will reduce costs and administrative burden. However, critics argue it strikes at the heart of federalism. Local issues, which dominate state elections, might be overshadowed by national narratives in a simultaneous poll. The voter's judgment is nuanced; they often vote differently for state and center. Forcing a synchronization could homogenize this distinct political expression, potentially weakening, rather than strengthening, democracy.",
                questions: [
                    {
                        id: 1,
                        question: "The central criticism of 'One Nation, One Election' presented in the passage is:",
                        options: [
                            "It is too expensive to implement.",
                            "It violates the Constitution's basic structure.",
                            "It might overshadow local issues with national narratives, undermining federalism.",
                            "It requires Electronic Voting Machines (EVMs) which are unreliable."
                        ],
                        correctAnswer: 2,
                        explanation: "Text argues: 'Local issues... overshadowed by national narratives... weakening federalism.'"
                    },
                    {
                        id: 2,
                        question: "What is the primary argument used by proponents of simultaneous elections?",
                        options: [
                            "It allows the Prime Minister to campaign everywhere.",
                            "It reduces the hindrance to governance caused by the Model Code of Conduct.",
                            "It increases voter turnout significantly.",
                            "It ensures the same party rules both Centre and State."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'argues that continuous election cycles... hindering governance due to Model Code of Conduct.'"
                    }
                ]
            },
            {
                id: 2202,
                title: "Passage 2: The Mental Health Shadow",
                text: "Source Text: India's demographic dividend is often celebrated, but a shadow looms over it: the mental health crisis among youth. Academic pressure, social media anxiety, and employment uncertainty have created a toxic cocktail. The National Mental Health Survey indicates a spike in anxiety disorders. Yet, the stigma remains a barrier to seeking help. We have more coaching centers than counseling centers. Unless mental health is integrated into the educational curriculum as a life skill, we risk raising a generation that is economically productive but emotionally fragile.",
                questions: [
                    {
                        id: 3,
                        question: "The author uses the phrase 'economically productive but emotionally fragile' to warn against:",
                        options: [
                            "The lack of vocational training in schools.",
                            "Focusing solely on academic/economic success while neglecting mental well-being.",
                            "The high cost of mental health treatment.",
                            "The overuse of social media by teenagers."
                        ],
                        correctAnswer: 1,
                        explanation: "The contrast is between economic output (dividend) and emotional health (fragile)."
                    }
                ]
            },
            {
                id: 2203,
                title: "Passage 3: Green Shipping Corridors",
                text: "Source Text: The maritime sector contributes nearly 3% of global greenhouse gas emissions. As trade volumes grow, so does the pollution. 'Green Shipping Corridors'â€”specific trade routes between major port hubs where zero-emission solutions are supportedâ€”are the new frontier. India's plan to develop green hydrogen hubs at ports aligns with this. However, the technology for zero-emission vessels (methanol/ammonia engines) is still maturing. The transition requires not just port infrastructure but a complete overhaul of ship engines and fuel supply chains.",
                questions: [
                    {
                        id: 4,
                        question: "Which of the following describes the concept of a 'Green Shipping Corridor'?",
                        options: [
                            "A shipping lane where no ships are allowed to safeguard marine life.",
                            "A trade route where zero-emission shipping solutions are specifically supported and demonstrated.",
                            "A canal painted green to reflect sunlight.",
                            "A route reserved only for sailing ships."
                        ],
                        correctAnswer: 1,
                        explanation: "Text defines it as: 'specific trade routes... where zero-emission solutions are supported'."
                    }
                ]
            },
            {
                id: 2204,
                title: "Passage 4: Space Tourism & debris",
                text: "Source Text: As private companies race to offer space tourism, the Low Earth Orbit (LEO) is becoming crowded. While it opens space to civilians, it exacerbates the Kessler Syndrome riskâ€”a chain reaction of collisions creating a debris belt that traps us on Earth. The thrill of a ten-minute weightless experience for the wealthy must be weighed against the long-term sustainability of space activities. Regulation is currently a 'wild west'. Without binding international traffic rules, space tourism could unintentionally close the door to future space exploration.",
                questions: [
                    {
                        id: 5,
                        question: "The 'Kessler Syndrome' mentioned in the text refers to:",
                        options: [
                            "The physical sickness experienced by space tourists.",
                            "A cascading chain reaction of collisions in orbit creating an impenetrable debris belt.",
                            "The psychological effect of seeing Earth from space.",
                            "The financial bankruptcy of space companies."
                        ],
                        correctAnswer: 1,
                        explanation: "Text defines it as: 'chain reaction of collisions creating a debris belt that traps us on Earth'."
                    }
                ]
            }
        ]
    },
    23: {
        day: 23,
        title: "CSAT Practice - Day 23",
        vocabulary: [
            {
                word: "Uniform Civil Code (UCC)",
                context: "...deliberations on the implementation of a Uniform Civil Code...",
                definition: "A proposal in India to formulate and implement a personal law which applies to all citizens regardless of their religion, gender and sexual orientation.",
                synonyms: ["Common civil code"],
                antonyms: ["Personal laws"],
                toneIndicator: "neutral"
            },
            {
                word: "Antimicrobial Resistance (AMR)",
                context: "...rising threat of Antimicrobial Resistance in ICU patients...",
                definition: "When bacteria, viruses, fungi and parasites change over time and no longer respond to medicines making infections harder to treat.",
                synonyms: ["Drug resistance"],
                antonyms: [],
                toneIndicator: "negative"
            }
        ],
        passages: [
            {
                id: 2301,
                title: "Passage 1: Uniform Civil Code (UCC)",
                text: "Source Text: Article 44 of the Directive Principles lays down that the State shall endeavor to secure a Uniform Civil Code (UCC) for the citizens. The debate, however, has often been polarized. Supporters argue it is essential for gender justice, as many personal laws discriminate against women in matters of inheritance and divorce. Opponents fear it is a tool to erode the cultural identity of minorities. The challenge lies in drafting a code that unifies legal rights without enforcing cultural uniformity. A 'voluntary' UCC, as seen in Goa or the Special Marriage Act, offers a template, but a mandatory nationwide rollout faces deep political and social fissures.",
                questions: [
                    {
                        id: 1,
                        question: "The author suggests that the primary distinction to be made in the UCC debate is between:",
                        options: [
                            "Religious laws and Secular laws.",
                            "Unifying legal rights versus enforcing cultural uniformity.",
                            "The Constitution and the Sharia.",
                            "Men's rights and Women's rights."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly states: 'The challenge lies in drafting a code that unifies legal rights without enforcing cultural uniformity.'"
                    }
                ]
            },
            {
                id: 2302,
                title: "Passage 2: Generative AI & Copyright",
                text: "Source Text: Generative AI models are trained on vast datasets scraped from the internet, often including copyrighted art, books, and code. Creators argue this is 'high-tech plagiarism', as these models can reproduce their style without attribution or compensation. Tech companies defend this as 'fair use', akin to a student learning from a library. The legal system is playing catch-up. If courts rule against fair use, the AI boom could hit a paywall. If they rule for it, human creativity might become economically unviable.",
                questions: [
                    {
                        id: 2,
                        question: "The central legal conflict described in the passage is:",
                        options: [
                            "Whether AI can legally own a patent.",
                            "Whether training AI on copyrighted data constitutes 'fair use' or 'plagiarism'.",
                            "Whether AI art is better than human art.",
                            "Whether the internet should be free."
                        ],
                        correctAnswer: 1,
                        explanation: "The text frames the debate: 'Creators argue this is high-tech plagiarism... Tech companies defend this as fair use'."
                    }
                ]
            },
            {
                id: 2303,
                title: "Passage 3: Antimicrobial Resistance (AMR)",
                text: "Source Text: We are entering a 'post-antibiotic era'. Routine surgeries like C-sections or hip replacements could soon become life-threatening due to Antimicrobial Resistance (AMR). Overuse of antibiotics in humans and, more critically, in livestock for growth promotion, has bred 'superbugs'. The pharmaceutical pipeline for new antibiotics has run dry because they are not profitable to develop compared to chronic disease drugs. Without a 'push-pull' funding mechanism from governments, the market will not solve this existential crisis.",
                questions: [
                    {
                        id: 3,
                        question: "Why does the author state that the market will not solve the AMR crisis?",
                        options: [
                            "Because antibiotics are too cheap to manufacture.",
                            "Because developing new antibiotics is not profitable compared to chronic disease drugs.",
                            "Because doctors refuse to prescribe new antibiotics.",
                            "Because the government has banned private research."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'not profitable to develop compared to chronic disease drugs... market will not solve this'."
                    }
                ]
            },
            {
                id: 2304,
                title: "Passage 4: India-Middle East-Europe Corridor (IMEC)",
                text: "Source Text: The IMEC, announced at the G20, is touted as a counter to China's Belt and Road Initiative. By linking India to Europe via the UAE, Saudi Arabia, and Israel, it aims to cut transit times by 40%. However, the corridor is fraught with geopolitical fragility. The recent conflict in Israel has put a question mark on the vital Mediterranean link. While the economic logic is soundâ€”integrating energy grids and digital cables alongside railâ€”the political stability of the Middle East remains the single biggest risk factor for this grand ambition.",
                questions: [
                    {
                        id: 4,
                        question: "What is identified as the 'single biggest risk factor' for the IMEC?",
                        options: [
                            "The lack of funding from the World Bank.",
                            "The political stability of the Middle East.",
                            "The refusal of European countries to participate.",
                            "The high cost of shipping insurance."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly states: 'political stability of the Middle East remains the single biggest risk factor'."
                    }
                ]
            }
        ]
    },
    24: {
        day: 24,
        title: "CSAT Practice - Day 24",
        vocabulary: [
            {
                word: "Quantum Superposition",
                context: "...harnessing the principle of quantum superposition...",
                definition: "The ability of a quantum system to exist in multiple states at the same time until it is measured.",
                synonyms: [],
                antonyms: [],
                toneIndicator: "neutral"
            },
            {
                word: "Deepfake",
                context: "...regulation of deepfake technology...",
                definition: "Synthetic media in which a person in an existing image or video is replaced with someone else's likeness using AI.",
                synonyms: ["Synthetic media", "AI manipulation"],
                antonyms: ["Authentic media"],
                toneIndicator: "negative"
            }
        ],
        passages: [
            {
                id: 2401,
                title: "Passage 1: National Quantum Mission",
                text: "Source Text: India's National Quantum Mission aims to scale up scientific and industrial R&D. Unlike classical computers which use bits (0 or 1), quantum computers use qubits, which can exist in a state of superposition. This allows them to solve complex problems like drug discovery and climate modeling exponentially faster. However, the 'Quantum Threat' is real: future quantum computers could crack the encryption that secures global banking and defense communications. The race is not just to build a quantum computer, but to build 'Quantum-Resilient' cryptography before the current encryption becomes obsolete.",
                questions: [
                    {
                        id: 1,
                        question: "What is the 'Quantum Threat' mentioned in the passage?",
                        options: [
                            "The risk of quantum computers becoming self-aware.",
                            "The potential for quantum computers to break current encryption standards used in banking and defense.",
                            "The high energy consumption of quantum computers.",
                            "The radiation emitted by qubits."
                        ],
                        correctAnswer: 1,
                        explanation: "Text Explicitly states: 'future quantum computers could crack the encryption that secures global banking...'"
                    }
                ]
            },
            {
                id: 2402,
                title: "Passage 2: Deepfakes & Democracy",
                text: "Source Text: The proliferation of deepfakes poses a novel threat to democratic processes. A realistic video of a political leader making inflammatory remarks can spread faster than the fact-check. Current IT Rules require intermediaries to remove such content within 24 hours of reporting. But in an election, 24 hours is a lifetime. Experts suggest watermarking AI-generated content and holding platforms liable. However, excessive regulation risks stifling innovation in legitimate AI applications like entertainment and education.",
                questions: [
                    {
                        id: 2,
                        question: "The author argues that the current 24-hour removal window for deepfakes is insufficient because:",
                        options: [
                            "Platforms do not have enough staff to check content.",
                            "The damage to public opinion can be irreversible within that timeframe during an election.",
                            "It violates the Freedom of Speech.",
                            "Most deepfakes are uploaded from foreign servers."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'in an election, 24 hours is a lifetime' implying the damage is done quickly."
                    }
                ]
            },
            {
                id: 2403,
                title: "Passage 3: Genome India Project",
                text: "Source Text: The Genome India Project has sequenced 10,000 genomes to create a 'Reference Genome' for the Indian population. Historically, medical research relied on Caucasian genomes, leading to drugs that were less effective for Indians. This distinct genetic map helps in understanding diseases unique to our population. However, genetic data is sensitive. Without a robust Data Protection Law specifically addressing genetic privacy, this treasure trove could be misused by insurance companies to deny coverage based on predisposition to diseases.",
                questions: [
                    {
                        id: 3,
                        question: "What is the primary benefit of the Genome India Project mentioned in the text?",
                        options: [
                            "To prove the ancestry of Indians.",
                            "To create a genetic map that aids in developing drugs and treatments specific to the Indian population's genetic makeup.",
                            "To clone endangered species.",
                            "To provide data to foreign pharmaceutical companies."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'leads to drugs less effective... distinct genetic map helps in understanding diseases unique to our population'."
                    }
                ]
            },
            {
                id: 2404,
                title: "Passage 4: The Millet Mission",
                text: "Source Text: Millets are termed 'Shree Anna' or superfoods. They are climate-resilient, requiring 70% less water than rice and growing in poor soil. As climate change makes monsoons erratic, millets offer food security. Nutritionally, they are rich in iron and calcium, combating India's high anemia rates. The challenge is consumer preference; decades of Green Revolution wheat/rice dominance have changed palates. The Mission aims to bring millets back not just to farms, but to plates.",
                questions: [
                    {
                        id: 4,
                        question: "According to the passage, why are millets considered crucial for food security in the context of climate change?",
                        options: [
                            "They are subsidized by the government.",
                            "They require significantly less water and can grow in poor soil conditions.",
                            "They can be stored for 100 years.",
                            "They are the only crop that can be exported."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly states: 'climate-resilient, requiring 70% less water... growing in poor soil'."
                    }
                ]
            }
        ]
    },
    25: {
        day: 25,
        title: "CSAT Practice - Day 25",
        vocabulary: [
            {
                word: "Delimitation",
                context: "...implementation of women's reservation is contingent upon delimitation...",
                definition: "The act or process of fixing limits or boundaries of territorial constituencies in a country or a province having a legislative body.",
                synonyms: ["Redistricting"],
                antonyms: [],
                toneIndicator: "neutral"
            },
            {
                word: "Lagrange Point",
                context: "...Aditya-L1 placed at Lagrange Point 1...",
                definition: "A point in space where the gravitational forces of two large bodies balance the centrifugal force felt by a smaller body, allowing it to 'hover' in a fixed position.",
                synonyms: ["L-point"],
                antonyms: [],
                toneIndicator: "neutral"
            }
        ],
        passages: [
            {
                id: 2501,
                title: "Passage 1: Nari Shakti Vandan Adhiniyam",
                text: "Source Text: The passing of the Women's Reservation Bill is a historic milestone, reserving 33% of seats in the Lok Sabha and State Assemblies. Critics argue the 'delimitation clause' pushes its implementation to an uncertain future, possibly 2029 or later. Proponents counter that a Census and Delimitation are constitutional necessities to ensure fair representation before reservation applies. The debate is not on the 'why'â€”which is the political empowerment of womenâ€”but on the 'when'. Immediate implementation without updated data could lead to legal quagmires.",
                questions: [
                    {
                        id: 1,
                        question: "Why do critics term the 'delimitation clause' as problematic?",
                        options: [
                            "It reduces the number of seats available for men.",
                            "It delays the implementation of the reservation to an indefinite future date.",
                            "It requires women to only contest from specific constituencies.",
                            "It violates the basic structure of the constitution."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'Critics argue the delimitation clause pushes its implementation to an uncertain future'."
                    }
                ]
            },
            {
                id: 2502,
                title: "Passage 2: Project Cheetah",
                text: "Source Text: bringing the Cheetah back to India is the world's first intercontinental large wild carnivore translocation project. The goal is to restore the open forest and grassland ecosystems. However, the initial deaths of several cheetahs raised alarms. Experts point to 'spatial mismatch'â€”African cheetahs are used to large, competitor-free territories, whereas Kuno National Park has a high density of leopards. The project faces the classic conservation dilemma: balancing the romanticism of rewilding with the harsh realities of ecological carrying capacity.",
                questions: [
                    {
                        id: 2,
                        question: "What is the 'spatial mismatch' mentioned by experts regarding Project Cheetah?",
                        options: [
                            "The difference in climate between Namibia and India.",
                            "The lack of prey base in Kuno National Park.",
                            "The difference in territory size and predator density between their African home and Kuno.",
                            "The inability of Cheetahs to climb Indian trees."
                        ],
                        correctAnswer: 2,
                        explanation: "Text details it as: 'African cheetahs are used to large... territories, whereas Kuno... has high density of leopards'."
                    }
                ]
            },
            {
                id: 2503,
                title: "Passage 3: Aditya-L1 Mission",
                text: "Source Text: Aditya-L1 is India's first solar mission, placed at Lagrange Point 1, 1.5 million km from Earth. From this vantage point, it can observe the Sun continuously without eclipses. Understanding 'Coronal Mass Ejections' (CMEs) is critical because space weather can disrupt satellite communications and power grids on Earth. While the James Webb Telescope looks into the deep past of the universe, Aditya-L1 looks at the immediate present of our star, which dictates the safety of our technological civilization.",
                questions: [
                    {
                        id: 3,
                        question: "Why is Lagrange Point 1 (L1) chosen for the Aditya mission?",
                        options: [
                            "It is the closest point to the Sun.",
                            "It allows for continuous observation of the Sun without eclipses.",
                            "It is the coldest point in space, protecting the instruments.",
                            "It has zero gravity, saving fuel."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'From this vantage point, it can observe the Sun continuously without eclipses.'"
                    }
                ]
            },
            {
                id: 2504,
                title: "Passage 4: PM Vishwakarma Scheme",
                text: "Source Text: The PM Vishwakarma Scheme targets the 'guru-shishya parampara' of traditional artisans. By providing collateral-free loans, skill upgradation, and toolkits to huge sections like carpenters, blacksmiths, and potters, it aims to integrate them into the global value chain. The economic logic is to formalize the informal. However, the cultural logic is equally strong: preserving the intangible heritage of craftsmanship which is threatened by mass manufacturing. The success will depend on market linkageâ€”can a purely handmade pot compete with a factory-made ceramic?",
                questions: [
                    {
                        id: 4,
                        question: "The PM Vishwakarma Scheme aims to address which dual objectives?",
                        options: [
                            "Providing free housing and electricity to artisans.",
                            "Formalizing the informal artisan economy and preserving cultural heritage.",
                            "Replacing traditional tools with automated robots.",
                            "Exporting all traditional crafts to Europe."
                        ],
                        correctAnswer: 1,
                        explanation: "Text argues: 'economic logic is to formalize the informal... cultural logic... preserving intangible heritage'."
                    }
                ]
            }
        ]
    },
    26: {
        day: 26,
        title: "CSAT Practice - Day 26",
        vocabulary: [
            {
                word: "Carbon Leakage",
                context: "...CBAM aims to prevent carbon leakage...",
                definition: "The situation where companies transfer production to countries with laxer emission constraints to avoid costs.",
                synonyms: [],
                antonyms: [],
                toneIndicator: "negative"
            },
            {
                word: "Gig Economy",
                context: "...social security for gig economy workers...",
                definition: "A labor market characterized by short-term contracts or freelance work as opposed to permanent jobs.",
                synonyms: ["Platform economy"],
                antonyms: ["Traditional employment"],
                toneIndicator: "neutral"
            }
        ],
        passages: [
            {
                id: 2601,
                title: "Passage 1: Carbon Border Adjustment Mechanism (CBAM)",
                text: "Source Text: The EU's CBAM is a landmark policy to put a fair price on carbon emitted during the production of carbon-intensive goods that are entering the EU. It is designed to prevent 'carbon leakage'. While the EU frames it as a climate tool, developing nations like India view it as 'protectionism disguised as environmentalism'. It could hit India's steel and aluminum exports hard. The challenge for India is twofold: decarbonizing its heavy industry to stay competitive, and negotiating mutual recognition of its own carbon credit trading scheme.",
                questions: [
                    {
                        id: 1,
                        question: "Why do developing nations criticize the CBAM?",
                        options: [
                            "They believe climate change is a hoax.",
                            "They see it as a trade barrier (protectionism) that unfairly penalizes their exports.",
                            "They want to join the EU.",
                            "They prefer to pay higher taxes."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'developing nations like India view it as protectionism disguised as environmentalism'."
                    }
                ]
            },
            {
                id: 2602,
                title: "Passage 2: Digital Personal Data Protection Act",
                text: "Source Text: The DPDP Act represents a paradigm shift from 'privacy as a fundamental right' to 'data as a tradeable asset with safeguards'. It introduces the concept of 'Data Fiduciaries' who must obtain consent. However, exemptions for the government on grounds of national security and public order are sweeping. Critics argue this creates a surveillance state. Proponents argue that without such exemptions, delivering welfare to a billion people would be bureaucratically impossible. The balance between privacy and state efficiency remains delicate.",
                questions: [
                    {
                        id: 2,
                        question: "The 'Data Fiduciary' concept introduced in the DPDP Act refers to:",
                        options: [
                            "The person whose data is being collected.",
                            "The entity (company/organization) that determines the purpose and means of processing personal data.",
                            "The government regulator.",
                            "The software used to encrypt data."
                        ],
                        correctAnswer: 1,
                        explanation: "Standard definition implied by text: 'Data Fiduciaries who must obtain consent' (i.e., the ones collecting/using data)."
                    }
                ]
            },
            {
                id: 2603,
                title: "Passage 3: Gig Economy & Social Security",
                text: "Source Text: Platform aggregators like Zomato and Uber have created millions of jobs, but these 'partners' lack the safety net of employeesâ€”PF, insurance, and leave. The Code on Social Security, 2020 tries to bridge this gap by forcing platforms to contribute to a welfare fund. However, the definition of 'gig worker' remains fluid. Are they independent contractors or disguised employees? If they are treated as employees, the low-cost model of the gig economy collapses. If ignored, we create a class of 'cyber-coolies'.",
                questions: [
                    {
                        id: 3,
                        question: "What is the core dilemma regarding the regulation of the gig economy mentioned in the text?",
                        options: [
                            "Whether to ban apps like Uber.",
                            "Balancing the low-cost business model with the need for worker social security.",
                            "Whether to allow drones for delivery.",
                            "Whether gig workers should pay taxes."
                        ],
                        correctAnswer: 1,
                        explanation: "Text contrasts: 'If treated as employees, low-cost model collapses' vs 'If ignored, we create cyber-coolies'."
                    }
                ]
            },
            {
                id: 2604,
                title: "Passage 4: Sickle Cell Anaemia Elimination",
                text: "Source Text: The mission to eliminate Sickle Cell Anaemia by 2047 focuses on tribal populations where the trait is endemic. It is a genetic blood disorder causing red blood cells to become sickle-shaped, blocking blood flow. The strategy involves screening 7 crore people. However, sensitization is key. Labeling someone as a 'carrier' in a marriage market can lead to social ostracization. The medical challenge is straightforward (screening/counseling); the sociological challenge of stigma is the harder hurdle.",
                questions: [
                    {
                        id: 4,
                        question: "According to the passage, what is the 'harder hurdle' in the mission to eliminate Sickle Cell Anaemia?",
                        options: [
                            "The lack of testing kits.",
                            "The cost of the medical treatment.",
                            "The sociological stigma and potential ostracization of those identified as carriers.",
                            "The remote location of tribal areas."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'medical challenge is straightforward... sociological challenge of stigma is the harder hurdle'."
                    }
                ]
            }
        ]
    },
    27: {
        day: 27,
        title: "CSAT Practice - Day 27",
        vocabulary: [
            {
                word: "Quantum Key Distribution (QKD)",
                context: "...QKD ensures unbreakable encryption...",
                definition: "A secure communication method which implements a cryptographic protocol involving components of quantum mechanics.",
                synonyms: ["Quantum cryptography"],
                antonyms: [],
                toneIndicator: "neutral"
            },
            {
                word: "Organoid Intelligence",
                context: "...biocomputers powered by organoid intelligence...",
                definition: "An emerging field that uses lab-grown brain models (organoids) as biological hardware for computing.",
                synonyms: ["Biocomputing"],
                antonyms: ["Silicon computing"],
                toneIndicator: "neutral"
            }
        ],
        passages: [
            {
                id: 2701,
                title: "Passage 1: Quantum Key Distribution (QKD)",
                text: "Source Text: In an era of cyber warfare, Quantum Key Distribution (QKD) offers the 'holy grail' of secrecy. Unlike classical encryption which relies on complex math (which quantum computers can crack), QKD relies on the laws of physics. It uses photons to transmit data. If a hacker tries to intercept the key, the quantum state of the photon changes, instantly alerting the users. India's recent demonstration of QKD over 100km is a strategic win. However, the technology is currently limited by distance (requires repeaters) and cost. The race is to build a 'Quantum Internet'.",
                questions: [
                    {
                        id: 1,
                        question: "The primary advantage of QKD over classical encryption is based on:",
                        options: [
                            "The complexity of the mathematical algorithms used.",
                            "The use of fundamental laws of physics which makes interception detectable.",
                            "The speed of light transmission.",
                            "The low cost of implementation."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'Unlike classical encryption... QKD relies on the laws of physics... If hacker attempts... state changes, instantly alerting'."
                    }
                ]
            },
            {
                id: 2702,
                title: "Passage 2: Biocomputers & Organoids",
                text: "Source Text: Scientists are exploring 'Organoid Intelligence' (OI) to build biocomputers. By growing clusters of brain cells (organoids) in labs and interfacing them with electrodes, they aim to create hardware that learns like a human brain. While silicon computers are faster at math, biological brains are vastly more energy-efficient and better at complex decision-making with limited data. The vision is to create 'bio-hybrid' systems. But this raises profound ethical questions: if an organoid gains sentience or consciousness, does it have rights? Can we switch it off?",
                questions: [
                    {
                        id: 2,
                        question: "What is the key advantage of biological brains over silicon computers mentioned in the passage?",
                        options: [
                            "They are faster at calculating prime numbers.",
                            "They are more energy-efficient and better at complex decision-making with limited data.",
                            "They do not require electricity.",
                            "They are easier to manufacture."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicity states: 'biological brains are vastly more energy-efficient and better at complex decision-making'."
                    }
                ]
            },
            {
                id: 2703,
                title: "Passage 3: Ethanol Blending (E20)",
                text: "Source Text: India's target of 20% ethanol blending (E20) by 2025 is a masterstroke for energy security and farmers. By diverting surplus sugar and grains to fuel, it reduces the crude import bill and stabilizes sugar prices. However, the 'food vs fuel' debate looms. Critics argue that incentivizing water-guzzling crops like sugarcane for fuel in a water-stressed nation is ecological suicide. The focus must shift to 'Second Generation (2G)' ethanol made from agricultural waste (stubble), which solves the pollution problem without compromising food security.",
                questions: [
                    {
                        id: 3,
                        question: "Why do critics argue against focusing solely on sugarcane for ethanol production?",
                        options: [
                            "Sugarcane does not produce good quality ethanol.",
                            "It diverts a water-guzzling food crop for fuel in a water-stressed nation.",
                            "It will increase the price of petrol.",
                            "Farmers refuse to grow sugarcane."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'Critics argue that incentivizing water-guzzling crops like sugarcane... is ecological suicide'."
                    }
                ]
            },
            {
                id: 2704,
                title: "Passage 4: Agneepath Scheme",
                text: "Source Text: The Agneepath scheme completely revamps military recruitment, hiring 'Agniveers' for a 4-year tour of duty. The government argues it will lower the average age of the armed forces and reduce the ballooning pension bill, freeing up funds for modernization. Critics fear it will degrade combat effectiveness by replacing experienced soldiers with short-term conscripts. The bigger societal challenge is the reintegration of thousands of weapon-trained, unemployed youth back into civil society every year. The success of the scheme depends on the post-service 'exit velocity' provided to these Agniveers.",
                questions: [
                    {
                        id: 4,
                        question: "What is the main government rationale for the Agneepath scheme mentioned in the text?",
                        options: [
                            "To privatize the army.",
                            "To lower the average age of forces and reduce the pension bill to fund modernization.",
                            "To increase the total number of soldiers.",
                            "To provide employment to all youth."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'argues it will lower the average age... and reduce the ballooning pension bill'."
                    }
                ]
            }
        ]
    },
    28: {
        day: 28,
        title: "CSAT Practice - Day 28",
        vocabulary: [
            {
                word: "Green Hydrogen",
                context: "...transition to green hydrogen economy...",
                definition: "Hydrogen produced by splitting water via electrolysis using renewable energy sources like solar or wind.",
                synonyms: ["Clean hydrogen"],
                antonyms: ["Grey hydrogen (from fossil fuels)"],
                toneIndicator: "positive"
            },
            {
                word: "Blue Economy",
                context: "...sustainable use of ocean resources for the blue economy...",
                definition: "The sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems.",
                synonyms: [],
                antonyms: [],
                toneIndicator: "positive"
            }
        ],
        passages: [
            {
                id: 2801,
                title: "Passage 1: National Green Hydrogen Mission",
                text: "Source Text: Green Hydrogen is touted as the 'fuel of the future' for hard-to-abate sectors like steel and shipping. India's Mission aims to produce 5 MMT by 2030, positioning India as a global export hub. The challenge is cost: green hydrogen is currently twice as expensive as grey (fossil-based) hydrogen. The key lies in the cost of electrolyzers and solar power. If India can replicate its solar cost-reduction story here, it could redraw the global energy map, shifting power from oil-rich nations to sun-rich nations.",
                questions: [
                    {
                        id: 1,
                        question: "What is the primary obstacle to the widespread adoption of Green Hydrogen mentioned in the passage?",
                        options: [
                            "The lack of water.",
                            "The danger of explosion.",
                            "The high production cost compared to fossil-based hydrogen.",
                            "Lack of government interest."
                        ],
                        correctAnswer: 2,
                        explanation: "Text states: 'The challenge is cost: green hydrogen is currently twice as expensive as grey hydrogen'."
                    }
                ]
            },
            {
                id: 2802,
                title: "Passage 2: Deep Ocean Mission",
                text: "Source Text: While space is the final frontier, the deep ocean remains our least explored territory. India's ‘Samudrayaan’ project aims to send humans 6000m deep in a submersible 'Matsya 6000'. The goal is not just scientific prestige but strategic resource hunting—seeking Polymetallic Nodules (manganese, cobalt, nickel) critical for the EV battery revolution. However, deep-sea mining poses severe risks to fragile marine ecosystems. The International Seabed Authority is struggling to write the rules for this underwater gold rush.",
                questions: [
                    {
                        id: 2,
                        question: "What is the strategic economic motivation behind the Deep Ocean Mission?",
                        options: [
                            "To find new fishing grounds.",
                            "To locate lost ships.",
                            "To access Polymetallic Nodules containing critical minerals like cobalt and nickel for batteries.",
                            "To build underwater cities."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'strategic resource hunting—seeking Polymetallic Nodules... critical for EV battery revolution'."
                    }
                ]
            },
            {
                id: 2803,
                title: "Passage 3: AI Anchors (Lisa)",
                text: "Source Text: The debut of 'Lisa', an AI news anchor, marks a disruption in media. AI anchors don't tire, don't demand raises, and can speak any language fluently. For newsrooms, this cuts costs dramatically. But for journalism, it raises questions of credibility. A news anchor is not just a reader; they are a trusted intermediary. If the face of news is synthetic, will the news itself be perceived as synthetic? Furthermore, it creates a job crisis for entry-level journalists. The human connection, the subtle empathy in a voice breaking bad news, is something AI cannot yet replicate.",
                questions: [
                    {
                        id: 3,
                        question: "What 'human' element does the author argue AI anchors lack?",
                        options: [
                            "Perfect pronunciation.",
                            "The ability to work 24/7.",
                            "The subtle empathy and human connection, especially when delivering difficult news.",
                            "Knowledge of current affairs."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'The human connection, the subtle empathy... is something AI cannot yet replicate'."
                    }
                ]
            },
            {
                id: 2804,
                title: "Passage 4: Tele-MANAS",
                text: "Source Text: Tele-MANAS is a 24/7 mental health tele-counseling service launched to tackle India's silent mental health epidemic. It bridges the 'access gap'—connecting a rural patient with a psychiatrist in a metro via a toll-free number. The anonymity it offers is its biggest strength, bypassing the stigma associated with visiting a clinic. However, tele-health has limits. Serious conditions requiring medication or therapy cannot be fully managed over a phone. It is a first-aid kit, not a hospital.",
                questions: [
                    {
                        id: 4,
                        question: "What is highlighted as the 'biggest strength' of the Tele-MANAS initiative?",
                        options: [
                            "It is free of cost.",
                            "It allows for prescription of medicines.",
                            "The anonymity it offers, which helps bypass social stigma.",
                            "It uses video calling."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'The anonymity it offers is its biggest strength, bypassing the stigma'."
                    }
                ]
            }
        ]
    },
    29: {
        day: 29,
        title: "CSAT Practice - Day 29",
        vocabulary: [
            {
                word: "Multidimensional Poverty",
                context: "...reduction in multidimensional poverty...",
                definition: "A measure of poverty that captures deprivations in health, education, and living standards, not just income.",
                synonyms: ["MPI"],
                antonyms: [],
                toneIndicator: "negative"
            },
            {
                word: "Circular Economy",
                context: "...promoting a circular economy...",
                definition: "An economic system aimed at eliminating waste and the continual use of resources.",
                synonyms: ["Sustainable economy"],
                antonyms: ["Linear economy (Take-make-dispose)"],
                toneIndicator: "positive"
            }
        ],
        passages: [
            {
                id: 2901,
                title: "Passage 1: India-EFTA Trade Deal (TEPA)",
                text: "Source Text: The Trade and Economic Partnership Agreement (TEPA) with the European Free Trade Association (EFTA) is unique. Unlike typical Free Trade Agreements (FTAs) based on tariff cuts, this one includes a binding investment commitment: EFTA nations (Switzerland, Norway, etc.) have pledged to invest $100 billion in India over 15 years. In return, India has lowered duties on high-end Swiss chocolates, watches, and machinery. This marks a shift in India’s trade strategy—leveraging its large market access not just for lower import duties, but for hard capital and technology transfer.",
                questions: [
                    {
                        id: 1,
                        question: "How does the India-EFTA TEPA differ from typical Free Trade Agreements according to the passage?",
                        options: [
                            "It involves no tariff reductions.",
                            "It is the first agreement with European countries.",
                            "It includes a binding commitment of $100 billion investment in India, unlike standard tariff-centric deals.",
                            "It focuses solely on the export of mangoes."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'Unlike typical FTAs based on tariff cuts, this one includes a binding investment commitment'."
                    }
                ]
            },
            {
                id: 2902,
                title: "Passage 2: Multidimensional Poverty Index (MPI)",
                text: "Source Text: NITI Aayog's latest report claims that 24.8 crore Indians escaped multidimensional poverty in the last 9 years. The MPI considers health, education, and standard of living (sanitation, cooking fuel, etc.). Critics argue that 'escaping poverty' doesn't mean becoming prosperous; it just means crossing a very low bar of deprivation. While infrastructure gaps (toilets, electricity) have been plugged, the quality of services—learning outcomes in schools or malnutrition levels—remains a concern. The quantitative success mocks the qualitative stagnation.",
                questions: [
                    {
                        id: 2,
                        question: "What is the primary criticism leveled against the MPI success figures in the passage?",
                        options: [
                            "The data is fabricated.",
                            "It focuses on quantitative infrastructure gaps (toilets, electricity) while ignoring the qualitative stagnation in services like education and nutrition.",
                            "It only measures income poverty.",
                            "It excludes rural areas."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'quantitative success mocks the qualitative stagnation... quality of services... remains a concern'."
                    }
                ]
            },
            {
                id: 2903,
                title: "Passage 3: PM-PRANAM Scheme",
                text: "Source Text: The PM-PRANAM scheme aims to save the soil by incentivizing states to reduce the use of chemical fertilizers. The subsidy burden for fertilizers has crossed ₹2.25 lakh crore. The scheme grants 50% of the subsidy savings back to the state that reduces consumption. This is a 'nudge' policy. It promotes alternative fertilizers like nano-urea and bio-fertilizers. The ultimate goal is to break the vicious cycle where cheap urea leads to overuse, which degrades soil health, forcing farmers to use even more urea.",
                questions: [
                    {
                        id: 3,
                        question: "The 'vicious cycle' mentioned in the text refers to:",
                        options: [
                            "The government printing money to pay subsidies.",
                            "Cheap urea leading to overuse, degrading soil, which in turn necessitates even more urea.",
                            "Farmers taking loans to buy tractors.",
                            "States fighting with the Centre for funds."
                        ],
                        correctAnswer: 1,
                        explanation: "Text explicitly describes the cycle: 'cheap urea leads to overuse -> degrades soil -> forcing farmers to use even more'."
                    }
                ]
            },
            {
                id: 2904,
                title: "Passage 4: Mission LiFE",
                text: "Source Text: Prime Minister Modi launched Mission LiFE (Lifestyle for Environment) at COP26. It shifts the climate narrative from government policy to individual behavior. The premise is that small changes—switching off lights, carrying cloth bags, eating millet—can have a massive aggregate impact. It targets the 'throwaway culture' of consumerism. While policies regulate supply (industry), LiFE attempts to regulate demand (citizens). However, critics argue this shifts the guilt and responsibility onto individuals, absolving large corporations who are the biggest polluters.",
                questions: [
                    {
                        id: 4,
                        question: "Mission LiFE attempts to shift the focus of climate action from:",
                        options: [
                            "Solar power to Wind power.",
                            "Government policy/Industry regulation to Individual behavior/Demand.",
                            "Developed nations to Developing nations.",
                            "Carbon credits to Carbon tax."
                        ],
                        correctAnswer: 1,
                        explanation: "Text says: 'shifts the climate narrative from government policy to individual behavior'."
                    }
                ]
            }
        ]
    },
    30: {
        day: 30,
        title: "CSAT Practice - Day 30",
        vocabulary: [
            {
                word: "Biofuel",
                context: "...Global Biofuel Alliance...",
                definition: "Fuel derived directly from living matter (biomass) like plants, algae, or animal waste.",
                synonyms: ["Agrofuel"],
                antonyms: ["Fossil fuel"],
                toneIndicator: "positive"
            },
            {
                word: "Green Credit",
                context: "...earning green credits for planting trees...",
                definition: "A singular unit of incentive provided for a specified activity that delivers a positive environmental impact.",
                synonyms: [],
                antonyms: [],
                toneIndicator: "positive"
            }
        ],
        passages: [
            {
                id: 3001,
                title: "Passage 1: Global Biofuel Alliance (GBA)",
                text: "Source Text: Launched at the G20, the GBA aims to do for biofuels what the International Solar Alliance did for solar energy. It brings together producers (India, Brazil, USA) to create standards and a global market. Biofuels are the only viable low-carbon solution for sectors like aviation where batteries are too heavy. However, the 'food security' concern persists. Brazil's success with sugarcane ethanol is due to abundant land. In land-scarce India, the GBA's success depends on technology that can convert agricultural waste (not food) into fuel efficiently.",
                questions: [
                    {
                        id: 1,
                        question: "Why are biofuels considered critical for the aviation sector?",
                        options: [
                            "They are cheaper than jet fuel.",
                            "Batteries are currently too heavy for airplanes, making biofuels the only low-carbon alternative.",
                            "Planes fly faster on biofuels.",
                            "Biofuels prevent engines from freezing."
                        ],
                        correctAnswer: 1,
                        explanation: "Text states: 'only viable low-carbon solution for sectors like aviation where batteries are too heavy'."
                    }
                ]
            },
            {
                id: 3002,
                title: "Passage 2: Green Credit Program",
                text: "Source Text: The Green Credit Program (GCP) goes beyond carbon credits. While carbon credits focus only on CO2 reduction, Green Credits incentivize distinct activities like water conservation, tree plantation, and waste management. Companies can earn these credits and trade them. The criticism is 'Greenwashing'. If a mining company destroys a forest but buys Green Credits from a plantation elsewhere, does it truly compensate for the ecological loss? A monoculture plantation is not a forest. The integrity of what counts as a 'Green Credit' is the linchpin.",
                questions: [
                    {
                        id: 2,
                        question: "How does the Green Credit Program differ from Carbon Credits?",
                        options: [
                            "It is only for farmers.",
                            "Carbon credits focus on CO2; Green Credits incentivize a broader range of environmental activities like water and waste management.",
                            "Green Credits are worth more money.",
                            "Carbon credits are illegal."
                        ],
                        correctAnswer: 1,
                        explanation: "Text distinguishes: 'While carbon credits focus only on CO2 reduction, Green Credits incentivize distinct activities like water conservation...'."
                    }
                ]
            },
            {
                id: 3003,
                title: "Passage 3: Jan Vishwas Bill",
                text: "Source Text: The Jan Vishwas (Amendment of Provisions) Act aims to decriminalize minor offences to promote 'Ease of Doing Business'. It converts fines and imprisonment into penalties for 183 provisions across 42 laws. For example, a minor weighing error by a shopkeeper led to jail time earlier; now it is just a penalty. This reduces the burden on the judiciary and ends 'inspector raj' harassment. However, detractors warn that removing the fear of imprisonment for laws related to the Environment or Pharmacy could lead to negligence that harms public health.",
                questions: [
                    {
                        id: 3,
                        question: "What is the primary objective of the Jan Vishwas Act?",
                        options: [
                            "To increase the number of judges.",
                            "To build more jails.",
                            "To decriminalize minor offences and replace imprisonment with penalties to improve Ease of Doing Business.",
                            "To ban foreign businesses."
                        ],
                        correctAnswer: 2,
                        explanation: "Text says: 'decriminalize minor offences... converts fines and imprisonment into penalties... Ease of Doing Business'."
                    }
                ]
            },
            {
                id: 3004,
                title: "Passage 4: Ethics in AI (Summary)",
                text: "Source Text: As we conclude this series, the overarching theme of the technological age is 'Governance Lag'. Whether it is Generative AI, Deepfakes, or Autonomous Weapons, technology moves faster than the law. We are building systems we do not fully understand (Black Box AI) and unleashing them into societies that are not prepared. The future belongs not just to those who can code, but to those who can code ethics into the algorithm. The question is no longer 'Can we build it?', but 'Should we build it?'.",
                questions: [
                    {
                        id: 4,
                        question: "The term 'Governance Lag' refers to:",
                        options: [
                            "The slow internet speed in government offices.",
                            "The phenomenon where technological advancement outpaces the legal and regulatory frameworks meant to govern it.",
                            "The delay in election results.",
                            "The age difference between politicians and voters."
                        ],
                        correctAnswer: 1,
                        explanation: "Text defines it: 'technology moves faster than the law'."
                    }
                ]
            }
        ]
    }
};
