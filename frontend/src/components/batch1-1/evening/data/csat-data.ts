
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
    toneIndicator?: 'positive' | 'negative' | 'neutral' | string;
}

export interface CSATDayData {
    dayId: number;
    title: string;
    description: string;
    passages: CSATPassage[];
    vocabulary: VocabularyItem[];
}

export const CSAT_BATCH1_1_DATA: Record<number, CSATDayData> = {
    1: {
        dayId: 1,
        title: "UPSC CSAT Practice Set - Day 01",
        description: "CSAT Practice for Day 1",
        vocabulary: [],
        passages: [
            {
                id: 101,
                title: "Passage 1: The POCSO Paradox",
                source: "UPSC/Editorial",
                content: `Source Text: India crossed a much-publicised milestone in 2025 â€“ fast track special courts cleared more child sexual offence cases than registered that year under the Protection of Children from Sexual Offences (POCSO) Act. They recorded a 109% disposal rate. Commentaries have hailed this as a turning point, suggesting courts have broken the backlog. However, new data and field reports point to a different tipping point where disposals rise but convictions fall and thousands of children remain stuck in long trials with little support.

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
                source: "UPSC/Editorial",
                content: `Source Text: The year 2025 brought about unprecedented disruption in global geopolitics. The return of President Donald Trump to the White House has resulted in a significant churn. However, the Quad has remained a crucial facet of Washingtonâ€™s engagement. The Quad, a group of four like-minded countries â€“ India, Australia, Japan, and the U.S. â€“ has evolved as a crucial forum with a multifaceted agenda. The overarching objective remains anchoring a rules-based order in the region.

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
                source: "UPSC/Editorial",
                content: `Source Text: The southern States have found that reducing population growth and improving health and education have led to serious disadvantages. The immediate fallout is that the Finance Commission (FC) has reduced allocations to the south as population size carries 50% weight. The longer-term implication is more serious: the proportion of seats will remain the same but the gap in the absolute number of seats will widen in the run up to the 2029 elections. Delimitation will be decided by a Delimitation Commission (DC) before 2029.

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
                source: "UPSC/Editorial",
                content: `Source Text: While some argue that the current law criminalises consensual relationships among adolescents, others warn that lowering the age could undermine protections against child exploitation. On January 10, the Supreme Court acknowledged the growing misuse of the POCSO Act in consensual, romantic adolescent relationships. The age of consent in India is currently 18 years. Consequently, sexual acts with minors are treated as â€œstatutory rapeâ€, based on the legal presumption that children lack the capacity to give valid consent.

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
        dayId: 2,
        title: "UPSC CSAT Practice Set - Day 02",
        description: "Climate Finance, ECCD, Higher Education & Solar vs Biofuels",
        vocabulary: [
            {
                word: "ITMOs (Internationally Transferred Mitigation Outcomes)",
                context: "...generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes.",
                definition: "Carbon credits that can be transferred between countries under Article 6 of the Paris Agreement.",
                synonyms: ["Carbon credits", "Emission reduction units"],
                antonyms: [],
                csatTip: "Think of it as a tradeable unit of emission reduction.",
                toneIndicator: 'neutral'
            },
            {
                word: "Epigenetics",
                context: "Research in epigenetics shows that health, nutrition, and stress before conception can influence gene expression.",
                definition: "The study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself.",
                synonyms: ["Gene regulation"],
                antonyms: [],
                toneIndicator: 'neutral'
            }
        ],
        passages: [
            {
                id: 201,
                title: "Passage 1: Article 6 and Climate Finance",
                source: "Paris Agreement Analysis 2025",
                content: "To strengthen the delivery and efficiency of climate finance, the carbon markets under Article 6 (A6) of the Paris Agreement were made fully operational at COP29. According to the A6 Implementation Partnership, there are 89 cooperation arrangements made under Article 6.2 across 58 Parties. The adoption of the Paris Agreement Crediting Mechanism (Article 6.4) marked a milestone in the transition from the Clean Development Mechanism. In August 2025, India entered a new era of carbon markets by signing the Joint Crediting Mechanism (JCM). This effectively operationalised Article 6.2 of the Paris Agreement and signalled a new chapter in international climate cooperation.\n\nWhy does participation of India in the A6 mechanism hold critical significance? Partnerships within A6 can translate into transfer of advanced tech and channel much-needed climate finance. This can be a lever for socio-economic transformation. Critically, the potential of A6 market mechanisms is not just restricted to generating finance through the exchange of carbon credits, known as internationally transferred mitigation outcomes. Instead, the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation. The Paris Agreement's Rule book sets out the architecture for A6. It allows countries to cooperate bilaterally or multilaterally, transferring emissions reductions while ensuring rigorous accounting to avoid double counting. India's new JCM partnership with Japan is an early example.\n\nTo operationalise both Article 6.2 and 6.4, the Indian government has already strategically identified a first set of 13 eligible activities keeping both developmental and climate goals in balance. These are high-end, emerging technologies that can fundamentally shift the country's emissions profile, such as renewable energy with storage, green hydrogen, and compressed bio-gas. The current Indian list of activities reflects a deliberate strategy that aligns with India's long-term goals of deep decarbonisation.",
                questions: [
                    {
                        id: 1,
                        question: "Based on the passage, what is the 'real prize' for India in participating in the Article 6 mechanism, beyond just financial gain?",
                        options: [
                            "(a) The ability to sell surplus carbon credits to developed nations to balance the fiscal deficit.",
                            "(b) The acceleration of low-carbon industrial and technological transformation through advanced tech transfer.",
                            "(c) The permanent removal of all coal-based power plants by 2030.",
                            "(d) The complete replacement of the Clean Development Mechanism with a domestic carbon tax."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly states: 'the real prize lies in using this mechanism to accelerate a low-carbon industrial transformation... transfer of advanced tech.'"
                    },
                    {
                        id: 2,
                        question: "Which of the following statements best describes the operational difference between Article 6.2 and Article 6.4 as implied in the text?",
                        options: [
                            "(a) Article 6.2 deals with bilateral/multilateral cooperation like the JCM, while Article 6.4 relates to a centralized crediting mechanism replacing the Clean Development Mechanism.",
                            "(b) Article 6.2 focuses on green hydrogen, while Article 6.4 focuses on solar energy storage.",
                            "(c) Article 6.2 is for private sector companies, while Article 6.4 is strictly for government-to-government transfers.",
                            "(d) Article 6.2 has not yet been operationalized, whereas Article 6.4 was fully operationalized in 2024."
                        ],
                        correctAnswer: 0,
                        explanation: "The text links 'Article 6.2' to 'partnerships' and 'bilateral' (like JCM), and mentions 'Article 6.4' (Paris Agreement Crediting Mechanism) as a centralized transition from the Clean Development Mechanism."
                    },
                    {
                        id: 3,
                        question: "The passage mentions 'rigorous accounting to avoid double counting' as a key feature. In this context, 'double counting' likely refers to:",
                        options: [
                            "(a) Counting the same emission reduction towards the climate targets (NDCs) of both the selling country and the buying country.",
                            "(b) Counting both carbon dioxide and methane emissions in the same calculation.",
                            "(c) Paying for the same technology transfer twice—once through aid and once through credits.",
                            "(d) Registering the same project under both the Indian government and the Japanese government."
                        ],
                        correctAnswer: 0,
                        explanation: "In carbon markets, 'double counting' standardly refers to both the host and buyer country claiming the same emission reduction. The text mentions 'rigorous accounting' is needed to avoid this."
                    },
                    {
                        id: 4,
                        question: "With reference to India's strategy for Article 6, consider the following statements:\n1. India has signed a Joint Crediting Mechanism (JCM) with Japan to operationalize Article 6.2.\n2. The government has identified eligible activities that focus primarily on traditional coal efficiency rather than emerging technologies.\n3. Green hydrogen and compressed bio-gas are among the identified eligible activities.\nWhich of the statements given above is/are correct?",
                        options: [
                            "(a) 1 only",
                            "(b) 1 and 3 only",
                            "(c) 2 and 3 only",
                            "(d) 1, 2 and 3"
                        ],
                        correctAnswer: 1,
                        explanation: "Statement 1 is correct (JCM signed). Statement 2 is incorrect (focus is on 'high-end, emerging technologies'). Statement 3 is correct (Green hydrogen, bio-gas listed)."
                    },
                    {
                        id: 5,
                        question: "The author suggests that India must 'move from intent to action.' Which of the following is NOT explicitly mentioned as a required policy priority in the text?",
                        options: [
                            "(a) Detailing the scope of activities and articulation of rules for Letters of Authorisation.",
                            "(b) Creating a single-window clearance system for carbon projects to reduce registration time.",
                            "(c) Mandatory privatization of all renewable energy storage facilities.",
                            "(d) Building a domestic market for removal activities like Biochar."
                        ],
                        correctAnswer: 2,
                        explanation: "Options (a), (b), and (d) are mentioned as priorities. Privatization (c) is not mentioned."
                    }
                ]
            },
            {
                id: 202,
                title: "Passage 2: Early Childhood Care and Development (ECCD)",
                source: "UPSC/Editorial",
                content: "India's aspiration to become a $30 trillion economy by 2047 demands sustained investments, particularly in human capital formation. However, a critical link remains largely missing: a focused and systematic investment in early childhood care and development (ECCD). Without strengthening the foundations laid in the earliest years, India's ambitions risk being on fragile ground. An investment in ECCD is not a welfare intervention but a strategic economic investment. From conception to the second birthday—the first 1,000 days—have been recognized by the WHO as a crucial 'window of opportunity'. The next six years constitute another 2,000 days. Thus, the first 3,000 days shape brain architecture.\n\nChildren who are well-nourished and cognitively stimulated are more likely to complete education and earn higher incomes. Paradoxically, ECCD initiatives have largely been targeted at children within government safety nets, leaving out vast sections of middle- and higher-income families. This exclusion is problematic because developmental challenges are not confined to poverty alone. Children from middle and even upper-income households increasingly face obesity, physical inactivity, excessive screen exposure, and delayed social skills. Early childhood development must be universal, not targeted.\n\nResearch in epigenetics shows that health, nutrition, and stress before conception can influence gene expression. Paradoxically, this is also when children spend almost all their time within families, with minimal engagement with formal systems beyond immunisation. In the digital age, many parents rely on social media for guidance, much of which is commercially driven or poorly informed. India must move beyond fragmented approaches. What is needed is an integrated ECCD framework that brings together health, nutrition, and early learning from conception to eight years of age.",
                questions: [
                    {
                        id: 6,
                        question: "Which one of the following is the most logical corollary to the author's argument that 'ECCD is not a welfare intervention but a strategic economic investment'?",
                        options: [
                            "(a) The government should privatize all Anganwadis to ensure they generate profit.",
                            "(b) Spending on early childhood care directly contributes to future workforce productivity, tax base expansion, and national competitiveness.",
                            "(c) Welfare schemes are generally wasteful and should be replaced by stock market investments.",
                            "(d) The primary goal of ECCD is to reduce the medical bills of senior citizens."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says ECCD is a 'strategic economic investment' because it shapes 'capacity to learn, adapt and contribute productively,' 'expanding the tax base,' and 'lift families out of poverty.'"
                    },
                    {
                        id: 7,
                        question: "The passage argues that ECCD initiatives should be 'universal, not targeted.' What is the primary justification given for this claim?",
                        options: [
                            "(a) Government safety nets have surplus funds that need to be spent on wealthy families.",
                            "(b) Developmental challenges such as screen exposure, obesity, and delayed social skills are prevalent even in middle and upper-income households.",
                            "(c) Poor families are already receiving too much support compared to the middle class.",
                            "(d) Universal coverage is the only way to meet WHO standards."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states exclusion of middle/upper class is problematic because 'developmental challenges are not confined to poverty alone... increasingly face obesity, physical inactivity...'"
                    },
                    {
                        id: 8,
                        question: "According to the passage, the period of 'the first 3,000 days' is critical because:",
                        options: [
                            "(a) It is the only time when the government provides free immunization.",
                            "(b) It shapes the child's brain architecture, physical health, and emotional regulation, determining their adult capacity to learn and adapt.",
                            "(c) It is the period before the child enters the formal school system, after which development stops.",
                            "(d) It allows the government to collect data for the National Health Mission."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines the first 3,000 days (conception to age 8) as the time that 'shape(s) brain architecture, physical health... determine a child's capacity to learn.'"
                    },
                    {
                        id: 9,
                        question: "The author notes a 'paradox' regarding the time children spend within families during their early years. What is this paradox?",
                        options: [
                            "(a) Parents spend the most money on education when the child is at home, but the child learns the least.",
                            "(b) Children spend almost all their time with families during the most critical developmental phase, yet this is when engagement with formal support systems is minimal.",
                            "(c) Parents in the digital age are better informed than doctors, yet children are less healthy.",
                            "(d) Children are most safe at home, yet that is where they face the highest risk of physical injury."
                        ],
                        correctAnswer: 1,
                        explanation: "The paradox is: 'this is also when children spend almost all their time within families, with minimal engagement with formal systems' despite it being the most critical developmental phase."
                    },
                    {
                        id: 10,
                        question: "Based on the passage, 'epigenetics' is relevant to ECCD because:",
                        options: [
                            "(a) It proves that genes are unchangeable and determining.",
                            "(b) It shows that environmental exposures, stress, and nutrition even before conception can influence a child's long-term health and gene expression.",
                            "(c) It suggests that only medical doctors should be involved in child-rearing.",
                            "(d) It indicates that digital learning is superior to traditional parenting."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: 'Research in epigenetics shows that health, nutrition, and stress... before conception can influence gene expression.'"
                    }
                ]
            },
            {
                id: 203,
                title: "Passage 3: Higher Education Regulation Bill",
                source: "UPSC/Editorial",
                content: "The Viksit Bharat Shiksha Adhishthan Bill, 2025, introduced in the Lok Sabha on December 15, 2025, aims to reimagine India's higher education institutions. India's higher education system has expanded rapidly, spanning over a 1,000 universities, but regulation has not evolved at the same pace. Multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE) have created a maze of approvals that often pulls institutions away from teaching and innovation. This has turned oversight into over-regulation.\n\nNEP 2020 called for a 'light but tight' framework—strong on transparency and standards, but minimal on procedural burden. The Bill creates an apex umbrella body, the Viksit Bharat Shiksha Adhishthan, anchored in Entry 66 of the Seventh Schedule. It proposes repealing three key Acts to unify the regulatory architecture. It envisages a technology-enabled single window system built on public self-disclosure, where institutions publish key information on governance and outcomes. This shifts institutional energy toward what truly matters: teaching and research. International credibility is not achieved by copying foreign models, but by meeting global benchmarks of outcomes and ethics.",
                questions: [
                    {
                        id: 11,
                        question: "The 'Viksit Bharat Shiksha Adhishthan Bill, 2025' seeks to resolve which primary structural issue in Indian higher education?",
                        options: [
                            "(a) The lack of funding for private universities.",
                            "(b) The fragmentation of regulation caused by multiple statutory bodies with overlapping mandates (UGC, AICTE, NCTE).",
                            "(c) The refusal of foreign universities to set up campuses in India.",
                            "(d) The inability of students to pass competitive entrance exams."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites 'Multiple statutory bodies with overlapping mandates... created a maze of approvals' as the problem the Bill aims to solve by unifying them."
                    },
                    {
                        id: 12,
                        question: "The term 'light but tight' framework, as mentioned in the context of NEP 2020 and the Bill, implies:",
                        options: [
                            "(a) Minimal government funding but tight control over student unions.",
                            "(b) Minimal procedural burden and bureaucratic interference, but strict adherence to transparency, outcomes, and academic standards.",
                            "(c) Light penalties for non-compliance but tight restrictions on faculty recruitment.",
                            "(d) A framework that is easy to implement in rural areas but strict in urban areas."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: 'strong on transparency and standards, but minimal on procedural burden.'"
                    },
                    {
                        id: 13,
                        question: "According to the passage, the Bill proposes to replace the current system of inspections and approvals with:",
                        options: [
                            "(a) A technology-enabled single window system based on public self-disclosure and transparency.",
                            "(b) A system where international agencies conduct all audits.",
                            "(c) A decentralized system where each state government creates its own standards.",
                            "(d) A manual system of physical verification by police officers."
                        ],
                        correctAnswer: 0,
                        explanation: "The text mentions: 'technology-enabled single window system built on public self-disclosure.'"
                    },
                    {
                        id: 14,
                        question: "The Bill is anchored in 'Entry 66 of the Seventh Schedule' of the Constitution. This entry typically relates to:",
                        options: [
                            "(a) Law and Order.",
                            "(b) Foreign Affairs.",
                            "(c) Coordination and determination of standards in institutions for higher education or research.",
                            "(d) Agricultural income tax."
                        ],
                        correctAnswer: 2,
                        explanation: "This is a standard Polity fact reinforced by the text's mention of 'Anchored in Entry 66... coordination and determination of standards.'"
                    },
                    {
                        id: 15,
                        question: "The author argues that 'International credibility' for Indian institutions will come from:",
                        options: [
                            "(a) Copying the curriculum of Harvard and Oxford.",
                            "(b) Hiring only foreign faculty members.",
                            "(c) Meeting global benchmarks of outcomes, ethics, and research culture while remaining rooted in Indian priorities.",
                            "(d) Increasing the fees to match international standards."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says: 'not achieved by copying foreign models, but by meeting global benchmarks... while remaining rooted in Indian priorities.'"
                    }
                ]
            },
            {
                id: 204,
                title: "Passage 4: Solar vs Biofuels (Data Interpretation)",
                source: "UPSC/Editorial",
                content: "Electric vehicles might be promoted as the key solution, but back in the early 2000s, it was biofuels. While we might expect biofuels to be a solution of the past, production is higher than ever. In this article, we give a sense of perspective on land use. A Poland-sized area is dedicated to liquid biofuels. Collectively, these biofuels produce around 4% of the world's energy demand for transport.\n\nHow much solar power could you produce on that land? The answer is yes. If we put solar panels on that land, we could produce roughly 32,000 terawatt-hours of electricity each year. That is 23 times more than the energy currently produced in the form of all liquid biofuels. We estimate that the total electricity needed to power all cars and trucks is around 7,000 TWh per year. You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.\n\nThese comparisons are explained by the fact that growing crops is a very inefficient process. Plants convert less than 1% of sunlight into biomass. Solar panels convert 15% to 20% (some recent designs 25%). Our point is not that we should cover all biofuel land in solar panels. But we do want to challenge how we think about land use. People rightly question the impact of solar farms on landscapes, but rarely consider the land use of existing biofuel crops, which do very little to decarbonise.",
                questions: [
                    {
                        id: 16,
                        question: "What is the central data-driven argument presented in the passage against the expansion of biofuels?",
                        options: [
                            "(a) Biofuels cause more pollution than petrol and diesel.",
                            "(b) Biofuels are extremely land-inefficient compared to solar energy; solar can generate 23 times more energy on the same amount of land.",
                            "(c) Biofuel crops like sugarcane and corn are impossible to grow in Europe.",
                            "(d) Electric vehicles are too expensive for the average consumer."
                        ],
                        correctAnswer: 1,
                        explanation: "The core argument is the massive efficiency gap (Solar is 23x more energy-dense per acre)."
                    },
                    {
                        id: 17,
                        question: "Based on the passage, if the land currently used for biofuels were converted to solar panels, what would be the potential outcome regarding transport energy?",
                        options: [
                            "(a) It would barely cover 10% of the world's transport energy needs.",
                            "(b) It would generate enough electricity to power all the world's cars and trucks, using only about one-quarter of that land.",
                            "(c) It would require 32 million more hectares of land to be effective.",
                            "(d) It would lead to a collapse of the global food supply chain."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: 'You could power all of the world's cars and trucks on this solar energy using less than one-quarter of the biofuel land.'"
                    },
                    {
                        id: 18,
                        question: "The huge disparity in energy efficiency between biofuels and solar panels is attributed to:",
                        options: [
                            "(a) The high cost of solar panel manufacturing.",
                            "(b) The biological limit where plants convert less than 1% of sunlight into biomass, versus solar panels converting 15-25%.",
                            "(c) The fact that biofuels are mostly produced in Brazil and the US.",
                            "(d) The government subsidies provided to the solar industry."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: 'Plants convert less than 1% of sunlight... Solar panels convert 15% to 20%.'"
                    },
                    {
                        id: 19,
                        question: "Which of the following best captures the author's intent in making this comparison?",
                        options: [
                            "(a) To advocate for the immediate destruction of all farms.",
                            "(b) To prove that electric vehicles are a failed technology.",
                            "(c) To challenge the public perception of land use, highlighting that existing biofuel crops occupy vast land for minimal energy benefit compared to solar.",
                            "(d) To suggest that Poland should become the world's leading solar energy producer."
                        ],
                        correctAnswer: 2,
                        explanation: "The author states: 'We do want to challenge how we think about land use... rarely consider the land use of existing biofuel crops.'"
                    },
                    {
                        id: 20,
                        question: "What is the approximate current contribution of liquid biofuels to the world's transport energy demand, as per the text?",
                        options: [
                            "(a) 4%",
                            "(b) 15%",
                            "(c) 25%",
                            "(d) 50%"
                        ],
                        correctAnswer: 0,
                        explanation: "The text explicitly states: 'produce around 4% of the world's energy demand for transport.'"
                    }
                ]
            }
        ]
    },
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
    4: {
        dayId: 4,
        title: "UPSC CSAT Practice Set - Day 04",
        description: "Biodiversity, Social Justice, Science & Tech, Environment",
        vocabulary: [
            {
                word: "Ramsar Sites",
                context: "...every year several migratory birds flock to wetlands and Ramsar sites in Assam.",
                definition: "Wetlands of international importance designated under the Ramsar Convention for conservation.",
                synonyms: ["Protected wetlands"],
                antonyms: [],
                toneIndicator: 'neutral'
            },
            {
                word: "Presolar Grains",
                context: "Bennu also showed unusually abundant presolar grains, especially supernova dust.",
                definition: "Microscopic particles that formed before the creation of our solar system, originating from dying stars.",
                synonyms: ["Stardust"],
                antonyms: [],
                toneIndicator: 'neutral'
            }
        ],
        passages: [
            {
                id: 401,
                title: "Passage 1: Biodiversity (Assam's Wetlands)",
                source: "UPSC/Editorial",
                content: "With winter, tiny moving specks appearing on the sky over Assam mark the arrival of avian guests that flock to riverbeds, wetlands, and natural and artificial reservoirs. To escape the biting cold of Siberian, Tibetan, and European landscapes, every year several migratory birds flock to wetlands and Ramsar sites in Assam. This year too, these winged guests have made their way to birding spots in the northeastern State, boosting its biodiversity and ecotourism initiatives. Vibrant migratory species such as white-fronted geese, pied avocets, greylag geese, ruddy shelducks, falcated ducks, ferruginous pochards, northern pintails, great crested grebes, and bar-headed geese – known for their high-altitude migratory flight – have arrived to roost in the State's wetlands.\n\nDespite threats posed by unsustainable development activities to waterbodies and wildlife reserves, Assam remains an important seasonal hub for migratory birds. Some of the popular birding destinations in the State include Deepor Beel in Kamrup Metropolitan district; Maguri Motapung Beel in Tinsukia; Poni Diling Beel in Sivasagar; the lakes within the Kaziranga National Park and Tiger Reserve; and the largest of all, Son Beel in Karimganj district. Apart from these regular stopovers, the winter visitors also explore new and picturesque locations each year. Assam has long hosted these long-distance travellers with sustained conservation efforts, which continue to be strengthened to protect their habitats.",
                questions: [
                    {
                        id: 1,
                        question: "Which one of the following statements best reflects the central theme of the passage?",
                        options: [
                            "(a) The impact of climate change on the migration patterns of Siberian birds.",
                            "(b) The role of Assam's wetlands as a critical seasonal habitat for migratory birds despite developmental threats.",
                            "(c) The economic potential of Deepor Beel as a tourist destination.",
                            "(d) The decline in the population of bar-headed geese due to pollution in Assam."
                        ],
                        correctAnswer: 1,
                        explanation: "The text focuses on migratory birds arriving in Assam's wetlands and the dual reality of them being an 'important seasonal hub' despite 'threats posed by unsustainable development.'"
                    },
                    {
                        id: 2,
                        question: "According to the passage, which of the following is NOT listed as a location where migratory birds are found in Assam?",
                        options: [
                            "(a) Maguri Motapung Beel",
                            "(b) Son Beel",
                            "(c) Loktak Lake",
                            "(d) Poni Diling Beel"
                        ],
                        correctAnswer: 2,
                        explanation: "Loktak Lake is in Manipur. The text lists Deepor Beel, Maguri Motapung Beel, Poni Diling Beel, and Son Beel."
                    },
                    {
                        id: 3,
                        question: "The passage mentions the 'bar-headed geese' specifically for which characteristic?",
                        options: [
                            "(a) Their vibrant white-fronted plumage.",
                            "(b) Their high-altitude migratory flight.",
                            "(c) Their status as an endangered species.",
                            "(d) Their nesting habits in artificial reservoirs."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly describes 'bar-headed geese – known for their high-altitude migratory flight.'"
                    },
                    {
                        id: 4,
                        question: "What is the author's stance on the relationship between 'development' and 'biodiversity' in the context of Assam?",
                        options: [
                            "(a) Development has completely destroyed the habitat, forcing birds to find new locations.",
                            "(b) Sustainable development has successfully eliminated all threats to wildlife.",
                            "(c) Threats from unsustainable development activities exist, yet the state remains a vital hub due to conservation efforts.",
                            "(d) The author suggests that development activities should be banned in all wetland areas."
                        ],
                        correctAnswer: 2,
                        explanation: "The text states: 'Despite threats posed by unsustainable development... Assam remains an important seasonal hub... sustained conservation efforts continue.'"
                    },
                    {
                        id: 5,
                        question: "Based on the passage, the arrival of these 'winged guests' contributes primarily to:",
                        options: [
                            "(a) The agricultural output of the state by controlling pests.",
                            "(b) The state's biodiversity and ecotourism initiatives.",
                            "(c) The reduction of water levels in artificial reservoirs.",
                            "(d) The increase in fish production in Son Beel."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states their arrival is 'boosting its biodiversity and ecotourism initiatives.'"
                    }
                ]
            },
            {
                id: 402,
                title: "Passage 2: Social Justice (Acid Attacks)",
                source: "UPSC/Editorial",
                content: "In 2023, 57 reported acid attacks took place in West Bengal, 31 in Uttar Pradesh, and 15 in Gujarat. According to the National Crime Records Bureau (NCRB), there were 207 reported cases of acid attacks in 2023, yet the conviction rate remains low. Of 703 acid attack cases in Indian courts in 2023 (including pending ones), there were only 16 convictions and 27 acquittals. Survivor Shaheen Malik's case highlights the judicial insensitivity; she did not get a verdict for 16 years, and the accused were acquitted. The crime is severely underreported due to societal stigma, family pressure, and fear of retaliation.\n\nSection 124 of the Bharatiya Nyaya Sanhita (BNS) mandates a minimum punishment of 10 years in prison up to life imprisonment, and a 'just and reasonable' fine to meet the victim's medical expenses. The law also requires all public and private hospitals to provide free treatment to victims. In 2013, the Supreme Court mandated the regulation of acid sales, with a photo ID for buyers and a register of purchases, but this is poorly implemented. Survivors have called for a more comprehensive ban. In contrast, neighbouring Bangladesh passed stringent laws against acid sales and attacks in 2002, accompanied by large-scale awareness campaigns, after which the number of reported attacks has fallen 15% to 20% each year; from 494 attacks in 2002, there were only 13 in 2024.",
                questions: [
                    {
                        id: 6,
                        question: "Based on the passage, which of the following best explains the low conviction rate in acid attack cases in India?",
                        options: [
                            "(a) The lack of stringent laws punishing the crime.",
                            "(b) The absence of medical evidence in most cases.",
                            "(c) Factors such as judicial delays, poor investigation, and witnesses/victims turning hostile due to pressure or settlements.",
                            "(d) The fact that most acid attacks are accidental."
                        ],
                        correctAnswer: 2,
                        explanation: "The text mentions judicial insensitivity, 16-year delay, and the crime being underreported due to 'societal stigma, family pressure, and fear of retaliation.'"
                    },
                    {
                        id: 7,
                        question: "What distinction does the passage draw between India and Bangladesh regarding acid attacks?",
                        options: [
                            "(a) Bangladesh has failed to control acid attacks while India has succeeded.",
                            "(b) India relies on social awareness while Bangladesh relies on police enforcement.",
                            "(c) Bangladesh successfully reduced attacks from 494 to 13 through stringent laws and awareness, whereas India struggles with poor implementation and rising cases.",
                            "(d) Bangladesh has completely banned the production of acid, whereas India has not."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says Bangladesh passed 'stringent laws... accompanied by large-scale public awareness campaigns' leading to attacks falling from 494 to 13."
                    },
                    {
                        id: 8,
                        question: "According to the text, Section 124 of the Bharatiya Nyaya Sanhita (BNS) includes which of the following provisions?\n1. Minimum punishment of 10 years imprisonment.\n2. Mandatory death penalty for all offenders.\n3. A 'just and reasonable' fine to cover the victim's medical expenses.\nSelect the correct answer:",
                        options: [
                            "(a) 1 only",
                            "(b) 1 and 3 only",
                            "(c) 2 and 3 only",
                            "(d) 1, 2, and 3"
                        ],
                        correctAnswer: 1,
                        explanation: "The text says Section 124 mandates 'minimum punishment of 10 years... up to life' and a 'just and reasonable fine.' It does not mention a mandatory death penalty."
                    },
                    {
                        id: 9,
                        question: "The Supreme Court's 2013 mandate regarding acid sales requires:",
                        options: [
                            "(a) A total ban on the sale of all corrosive substances.",
                            "(b) Buyers to provide a photo ID and sellers to maintain a register of purchases.",
                            "(c) Acid to be sold only in government hospitals.",
                            "(d) Buyers to obtain a license from the District Magistrate."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states the 2013 mandate requires 'a photo ID for buyers, and sellers required to keep a register of purchases.'"
                    },
                    {
                        id: 10,
                        question: "The passage cites the 'Shaheen Malik' case primarily to illustrate:",
                        options: [
                            "(a) The success of the 'Brave Souls Foundation' in securing convictions.",
                            "(b) The effectiveness of the Delhi High Court in speeding up trials.",
                            "(c) The 'denial of justice' caused by extreme judicial delay (16 years) and insensitivity leading to acquittal.",
                            "(d) The importance of financial compensation over legal rights."
                        ],
                        correctAnswer: 2,
                        explanation: "The text uses her case to show 'judicial insensitivity' where she 'did not get a verdict for 16 years' and the accused were acquitted."
                    }
                ]
            },
            {
                id: 403,
                title: "Passage 3: Science & Tech (Asteroid Bennu)",
                source: "UPSC/Editorial",
                content: "In 2020, NASA's OSIRIS-REx mission collected samples from asteroid Bennu. On December 2, three teams published papers reporting Bennu contains sugar and other important molecules required to form RNA, and is also surprisingly abundant in supernova dust. Scientists reported finding ribose, the sugar molecule required for RNA, and glucose. Together with previous findings of amino acids and nucleobases, the entire inventory of molecules scientists believe are needed for life have now been confirmed on Bennu.\n\nThe findings strengthen the 'RNA world' hypothesis: that early life used RNA as a source of genetic information and for catalytic functions, before DNA and proteins evolved. According to the study, the abundance of asteroids like Bennu in the inner solar system would have provided sugars and amino acids, leading to the formation of life on earth more than 3.5 billion years ago. Scientists also found evidence of chemical reactions between ices forming polymer molecules before the ices melted. Bennu also showed unusually abundant presolar grains, especially supernova dust. The concentration of presolar grains was at least 6x higher than in other similar asteroids. These grains originated from various types of stars, with high concentrations from supernovae.",
                questions: [
                    {
                        id: 11,
                        question: "The discovery of ribose on Asteroid Bennu is significant because:",
                        options: [
                            "(a) It proves that life currently exists on Bennu.",
                            "(b) Ribose is the sugar molecule required for RNA, supporting the theory that asteroids delivered key ingredients for life to Earth.",
                            "(c) It indicates that Bennu was once a planet like Earth.",
                            "(d) It suggests that Bennu is made entirely of sugar and ice."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states findings 'strengthen the RNA world hypothesis... asteroids... would have provided sugars... leading to the formation of life.'"
                    },
                    {
                        id: 12,
                        question: "The 'RNA world hypothesis' mentioned in the passage proposes that:",
                        options: [
                            "(a) DNA evolved before RNA and proteins.",
                            "(b) Early life relied on RNA for both genetic information and catalytic functions before DNA and proteins evolved.",
                            "(c) Life on Earth originated solely from volcanic activity.",
                            "(d) RNA can only be formed in the presence of liquid water on Earth."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it as: 'early life used RNA as a source of genetic information and for catalytic functions, before DNA and proteins evolved.'"
                    },
                    {
                        id: 13,
                        question: "What are 'presolar grains' as described in the context of the passage?",
                        options: [
                            "(a) Grains of sand found on Mars.",
                            "(b) Dust particles that formed from the sun's surface.",
                            "(c) Dust particles, including supernova dust, that originated from stars before the sun formed.",
                            "(d) Frozen water droplets found in the asteroid belt."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says 'presolar grains... especially supernova dust... originated from various types of stars' before our sun formed."
                    },
                    {
                        id: 14,
                        question: "The passage notes that the concentration of presolar grains on Bennu was 'at least 6x higher' than in other similar asteroids. What does this suggest about Bennu?",
                        options: [
                            "(a) Bennu is much younger than other asteroids.",
                            "(b) Bennu formed in a part of space where supernova dust was present in abundant quantities.",
                            "(c) Bennu has been contaminated by space debris from Earth.",
                            "(d) Bennu is rapidly disintegrating into dust."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says concentrations were highest for grains of supernova origin, indicating Bennu formed where supernova dust was abundant."
                    },
                    {
                        id: 15,
                        question: "Consider the following statements about the findings from the OSIRIS-REx mission mentioned in the text:\n1. Bennu contains the entire inventory of molecules believed to be needed for life, including amino acids and nucleobases.\n2. Evidence of chemical reactions forming nitrogen-rich polymers was found.\n3. The mission failed to bring samples back to Earth.\nWhich of the statements given above is/are correct?",
                        options: [
                            "(a) 1 only",
                            "(b) 1 and 2 only",
                            "(c) 2 and 3 only",
                            "(d) 1, 2, and 3"
                        ],
                        correctAnswer: 1,
                        explanation: "Statement 1 is correct ('entire inventory... confirmed'). Statement 2 is correct ('evidence of chemical reactions... forming polymer molecules'). Statement 3 is incorrect (Scientists are studying the samples, so they successfully returned)."
                    }
                ]
            },
            {
                id: 404,
                title: "Passage 4: Environment (Cauvery Pollution)",
                source: "UPSC/Editorial",
                content: "Along its course, the Cauvery receives water from multiple tributaries but reservoirs like the Mettur Dam regulate its flow. For generations, the river sustained temple towns and planting seasons. Today, it absorbs sullage and sewage that cities and industries are unable or unwilling to treat. Only a fraction of the sewage generated across the basin is treated adequately. The rest enters the river largely untreated. Clandestine dumping of waste is common. When surplus water is released (from dams), industrial effluents are allegedly discharged into the river under the cover of night.\n\nAt Mettur, where industrial clusters draw water, dyeing and bleaching units discharge effluents. In Erode, one of the most acute urban pressure points, tanneries remain the most contaminated source. Wastewater from many units enters streams such as Pichaikaranpallam, which drain into the river. Erode generates 35 to 40 MLD of sewage, but only about 8 MLD is treated. The Central Pollution Control Board classified this stretch as polluted. Further downstream, in Tiruppur, the Noyyal river (a tributary) brings effluents from dyeing units. A 2021 study published in Science of the Total Environment examined the presence of pharmaceutically active compounds. Researchers detected substances such as caffeine, carbamazepine, diclofenac, and triclosan at most sampling locations. High chemical concentrations cause the soil to silt up and harden, preventing roots from penetrating.",
                questions: [
                    {
                        id: 16,
                        question: "According to the passage, what is the primary behavior of industries regarding effluent discharge during the release of surplus water from dams?",
                        options: [
                            "(a) They shut down operations to prevent overflow.",
                            "(b) They use the opportunity to allegedly discharge effluents into the river under the cover of night, masking the pollution.",
                            "(c) They increase their treatment capacity to match the water flow.",
                            "(d) They divert the effluents to agricultural fields."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: 'When surplus water is released... industrial effluents are allegedly discharged into the river under the cover of night.'"
                    },
                    {
                        id: 17,
                        question: "The passage highlights a '2021 study' that detected which specific type of contamination in the Cauvery?",
                        options: [
                            "(a) Heavy metals like lead and mercury only.",
                            "(b) Radioactive waste from nuclear plants.",
                            "(c) Pharmaceutically active compounds like caffeine, antibiotics, and painkillers (diclofenac).",
                            "(d) Microplastics from textile industries only."
                        ],
                        correctAnswer: 2,
                        explanation: "The text mentions the study detected 'pharmaceutically active compounds' including 'caffeine, carbamazepine, diclofenac.'"
                    },
                    {
                        id: 18,
                        question: "Which of the following locations is correctly paired with its primary source of industrial pollution as mentioned in the text?",
                        options: [
                            "(a) Erode – Software Parks",
                            "(b) Tiruppur – Tanneries",
                            "(c) Erode – Tanneries",
                            "(d) Mettur – Automobile manufacturing"
                        ],
                        correctAnswer: 2,
                        explanation: "The text explicitly states: 'In Erode... tanneries remain the most contaminated source.' (Tiruppur is linked to dyeing)."
                    },
                    {
                        id: 19,
                        question: "What is the impact of 'high chemical concentrations' on agriculture mentioned in the passage?",
                        options: [
                            "(a) It increases the crop yield by providing extra nutrients.",
                            "(b) It causes the soil to silt up and harden, preventing roots from penetrating.",
                            "(c) It attracts pests that destroy crops.",
                            "(d) It lowers the soil pH, making it too acidic for rice."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: 'High chemical concentrations cause the soil to silt up and harden, preventing roots from penetrating.'"
                    },
                    {
                        id: 20,
                        question: "The passage suggests that the 'Central Pollution Control Board' (CPCB) has:",
                        options: [
                            "(a) Classified the Erode stretch of the Cauvery as polluted.",
                            "(b) Declared the Cauvery water fit for drinking without treatment.",
                            "(c) Shut down all industries in Tiruppur.",
                            "(d) Built 40 new sewage treatment plants in Mettur."
                        ],
                        correctAnswer: 0,
                        explanation: "The text states: 'The Central Pollution Control Board classified this stretch [Erode] of the Cauvery as polluted.'"
                    }
                ]
            }
        ]
    },
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
    },
    6: {
        dayId: 6,
        title: "UPSC CSAT Practice Set - Jan 06 (Day 06)",
        description: "Frontier Physics, Aviation Safety, India-US Ties, Nuclear Policy",
        vocabulary: [],
        passages: [
            {
                id: 601,
                title: "Passage 1: Frontier Physics (Hydrogen Molecule)",
                source: "Frontier Physics (Hydrogen Molecule)",
                content: "The hydrogen molecule (H₂) is the simplest stable molecule, with two protons and two electrons bound together. Scientists have studied it for more than a century because it is small enough that theory can try to predict its behaviour from basic physics, yet rich enough to include many features found in larger molecules. A recent study by researchers from the University of Warsaw and Adam Mickiewicz University has tested basic physics more precisely. Modern techniques can measure gaps between different energy levels of the H₂ molecule with an accuracy of about one part in a 100 billion. At this precision, experiments are sensitive not only to the main predictions of quantum mechanics but also to extremely small effects due to quantum electrodynamics (QED).\n\nTo match today's experimental precision, the new study's authors skipped a common shortcut called the Born-Oppenheimer approximation. This approximation assumes the nuclei to be almost fixed while electrons move, allowing physicists to ignore the effects of the nuclei's small movements. Instead, the authors solved the Schrödinger equation for H₂, treating the two electrons and two protons together, without using the approximation. This is called the direct nonadiabatic approach.\n\nThe study found that the theoretical predictions and recent measurements of energy levels agreed almost perfectly. This agreement is significant because it forces basic physics to pass an \"exam\": any disagreements between them would have to be extraordinarily small. If there were a mismatch, it could interpret an unknown force rather than a gap in existing theory. The study also pointed to the next bottleneck: further progress for excited states will require fully nonadiabatic calculations of some especially difficult QED ingredients.",
                questions: [
                    {
                        id: 601,
                        question: "What is the primary significance of the agreement between theoretical predictions and experimental measurements mentioned in the passage?",
                        options: [
                            "(a) It proves that the Born-Oppenheimer approximation is the only valid method for studying molecules.",
                            "(b) It confirms that the hydrogen molecule is unstable and cannot be measured accurately.",
                            "(c) It serves as a high-precision \"exam\" for fundamental physics, showing that quantum mechanics and QED are accurate to an extraordinary degree (one part in 100 billion).",
                            "(d) It demonstrates that unknown forces are currently disrupting the energy levels of hydrogen."
                        ],
                        correctAnswer: 2,
                        explanation: "The text states: \"force basic physics to pass an 'exam'... theory now agree at a level such that any disagreements... would have to be extraordinarily small.\""
                    },
                    {
                        id: 602,
                        question: "The \"Born-Oppenheimer approximation\" is described in the passage as:",
                        options: [
                            "(a) A method that treats electrons and protons as moving together simultaneously without separation.",
                            "(b) A shortcut that assumes nuclei are almost fixed while electrons move, allowing physicists to ignore the effects of the nuclei's small movements.",
                            "(c) A theory that ignores the existence of electrons entirely.",
                            "(d) A calculation used only for large molecules, not hydrogen."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"assumes the nuclei to be almost fixed while electrons move... ignoring effects of nuclei's small movements.\""
                    },
                    {
                        id: 603,
                        question: "Why is the Hydrogen molecule (H₂) chosen for this high-precision testing?",
                        options: [
                            "(a) Because it is the only molecule that contains neutrons.",
                            "(b) Because it is small enough for theory to predict its behavior from basic physics, yet rich enough to include features of larger molecules.",
                            "(c) Because it is the only stable molecule in the universe.",
                            "(d) Because it is easy to see with a standard microscope."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"small enough that theory can try to predict... yet rich enough to include many features found in larger molecules.\""
                    },
                    {
                        id: 604,
                        question: "According to the passage, if a mismatch were found between the theory and experiment at this level of precision, it could indicate:",
                        options: [
                            "(a) The discovery of a new planet.",
                            "(b) A possible sign of an unknown force rather than just a gap in existing theory.",
                            "(c) That the Schrödinger equation is mathematically incorrect for all atoms.",
                            "(d) That the researchers made a calculation error in the Born-Oppenheimer approximation."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"interpret an unknown force rather than a gap in existing theory.\""
                    },
                    {
                        id: 605,
                        question: "What is the \"direct nonadiabatic approach\" mentioned in the text?",
                        options: [
                            "(a) Solving the Schrödinger equation by treating electrons and protons together, without assuming the nuclei are fixed.",
                            "(b) Using the Born-Oppenheimer approximation to simplify calculations.",
                            "(c) Ignoring the effects of quantum electrodynamics (QED).",
                            "(d) Measuring only the heat generated by the molecule."
                        ],
                        correctAnswer: 0,
                        explanation: "The text says: \"treating the two electrons and two protons together... This is called the direct nonadiabatic approach.\""
                    }
                ]
            },
            {
                id: 602,
                title: "Passage 2: Aviation Safety & Governance",
                source: "Aviation Safety & Governance",
                content: "On June 12, 2025, Air India flight 171 crashed at Ahmedabad, Gujarat within a minute of its take-off. Out of the 242 passengers, there was one survivor. The investigation involves the Aircraft Accident Investigation Bureau (AAIB) of India, along with the NTSB (USA) and AAIB (UK). The preliminary report clearly mentioned two points: first, the fuel control switches of both engines had moved to cut off from three to four seconds after lift-off. Second, one pilot asked the other \"why did you do that?\" and the other responded \"I did not do that.\" It has been established that the fuel control switches can only be moved mechanically by lifting the spring loaded switches.\n\nThe author argues that India has a dangerous credibility deficit. The DFDR and CVR would have clearly indicated what happened, yet the Indian authorities appear to lack transparency. The site was not sanitised immediately; television crews trampled through crash debris, wiping out clues. The airport opened in three hours with zero rescue and fire fighting services on standby. By delaying findings and couching facts, the AAIB is playing into the hands of social media narratives.\n\nComparatively, when a UPS cargo aircraft crashed in 2025, the NTSB had press briefings and findings within days, and the FAA issued an Emergency Airworthiness Directive immediately. In the AI 171 case, if there was a system failure on the Boeing 787, the FAA would have grounded all Boeing 787s, which it has not done. This indicates they know the reason behind the crash (likely pilot error/human factor), but the \"political massaging\" of the report by Indian authorities is creating a transparency crisis. India’s standing is dropping on the diplomatic front due to this lack of transparency.",
                questions: [
                    {
                        id: 606,
                        question: "The author contends that the lack of grounding of Boeing 787s by the FAA after the AI 171 crash indicates:",
                        options: [
                            "(a) The FAA does not care about safety in India.",
                            "(b) The crash was likely caused by a specific human action (fuel switches moved mechanically) rather than a systemic aircraft defect, otherwise the fleet would have been grounded.",
                            "(c) The FAA is waiting for the Indian AAIB to finish its report before taking any action.",
                            "(d) The Boeing 787 is immune to all mechanical failures."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"If there was an indication of serious system failures... the FAA would have grounded all Boeing 787s. The very fact that no such action has been done is a clear indication that they know the reason behind the crash [implying pilot/human factor].\""
                    },
                    {
                        id: 607,
                        question: "Which of the following is cited as a major procedural failure at the crash site in Ahmedabad?",
                        options: [
                            "(a) The airport was closed for too long (3 days) causing traffic jams.",
                            "(b) The site was not sanitised; media crews trampled debris, potentially destroying clues, and the airport reopened without rescue services on standby.",
                            "(c) The NTSB refused to send investigators to the site.",
                            "(d) The local police arrested the surviving passenger."
                        ],
                        correctAnswer: 1,
                        explanation: "The text lists: \"site was not sanitised... crews tramping... wiping out clues. The airport was opened in three hours, with the zero availability of rescue and fire fighting services.\""
                    },
                    {
                        id: 608,
                        question: "The passage contrasts the Indian investigation with the NTSB's handling of the UPS cargo crash to highlight:",
                        options: [
                            "(a) The superior technology of the NTSB.",
                            "(b) The speed and transparency of the NTSB/FAA in issuing briefings and directives, versus the delay and \"political massaging\" by Indian authorities.",
                            "(c) The fact that cargo planes are safer than passenger planes.",
                            "(d) The difference in weather conditions between the US and India."
                        ],
                        correctAnswer: 1,
                        explanation: "The comparison shows the NTSB had briefings/directives within days (transparency/speed), whereas India had a \"vague report,\" \"political massaging,\" and delays."
                    },
                    {
                        id: 609,
                        question: "According to the preliminary report mentioned in the text, what was the immediate mechanical cause of the engine shutdown?",
                        options: [
                            "(a) A bird hit both engines simultaneously.",
                            "(b) The fuel control switches of both engines moved to \"cut off\" shortly after lift-off.",
                            "(c) The landing gear failed to retract.",
                            "(d) The pilot spilled coffee on the controls."
                        ],
                        correctAnswer: 1,
                        explanation: "The preliminary report mentioned: \"fuel control switches of both engines had moved to cut off from three to four seconds after lift-off.\""
                    },
                    {
                        id: 610,
                        question: "The author argues that transparency in accident investigation is crucial because:",
                        options: [
                            "(a) It allows YouTubers to make better videos.",
                            "(b) It helps \"recapture the ability to act as one\" and strengthens public confidence, as per the ICAO Chairman's 2006 message.",
                            "(c) It ensures that Boeing stock prices remain high.",
                            "(d) It allows the government to blame foreign manufacturers easily."
                        ],
                        correctAnswer: 1,
                        explanation: "The text quotes the ICAO Chairman: \"By being transparent... you recapture the ability to act as one... to strengthen public confidence.\""
                    }
                ]
            },
            {
                id: 603,
                title: "Passage 3: International Relations (India-US Ties)",
                source: "International Relations (India-US Ties)",
                content: "In 2025, despite political strains and the postponement of the Quad Leaders’ Summit, the underlying machinery of India-United States cooperation remains vigorous. While political engagement appears low, notably amid U.S. trade sanctions on India and its warming ties with Pakistan, institutional collaboration continues to expand. The U.S. tariff regime on Indian goods and India's exports dropping in 2025 are stark indicators of tension. However, Washington’s balance-of-interest pragmatism ensures relations remain vital.\n\nSince the 2008 civil nuclear deal, bilateral ties have been predominantly driven by defence and technology agreements. The 2025 Defence Framework Agreement marks a new chapter. Institutional continuity is fostering trust while shielding essential cooperation from political volatility. Examples include the Initiative on Critical and Emerging Technologies (iCET) and the Security of Supply Arrangement (SOSA) signed in 2024. In October 2025, a significant 10-year defence framework agreement was signed. Further bolstering ties, Hindustan Aeronautics Limited signed a billion-dollar deal in November 2025 with General Electric for fighter jet engines.\n\nDespite political challenges, this enduring institutional engagement reveals a \"dual-track dynamic.\" While political leaders manage strategic diplomacy and national interests, bureaucratic and institutional frameworks sustain core collaborations. The resilience of the partnership will depend on these parallel institutional tracks surviving short-term headwinds.",
                questions: [
                    {
                        id: 611,
                        question: "The \"dual-track dynamic\" of India-US relations described in the passage refers to:",
                        options: [
                            "(a) The separation of trade relations from military relations.",
                            "(b) The contrast between strained political/trade engagement (sanctions, tariffs) and robust/expanding institutional & defence cooperation.",
                            "(c) The ability of India to maintain ties with both the US and Russia simultaneously.",
                            "(d) The parallel development of nuclear and solar energy projects."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes the dynamic: \"While political engagement appears low... institutional collaboration... continues to expand... parallel institutional tracks.\""
                    },
                    {
                        id: 612,
                        question: "Which of the following is listed as a sign of tension or \"political strain\" in 2025?",
                        options: [
                            "(a) The signing of the SOSA agreement.",
                            "(b) The U.S. tariff regime on Indian goods and the drop in India's exports to the U.S.",
                            "(c) The HAL-General Electric deal for jet engines.",
                            "(d) The successful hosting of the Quad summit in New Delhi."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites \"U.S. tariff regime levied on Indian goods and India’s exports to the U.S., which dropped sharply in 2025\" as indicators of tension."
                    },
                    {
                        id: 613,
                        question: "The passage suggests that the \"resilience\" of the India-US partnership is primarily sustained by:",
                        options: [
                            "(a) The personal friendship between the Indian PM and the US President.",
                            "(b) The shared religion of the majority populations.",
                            "(c) Deep institutional frameworks, defence agreements (like iCET, SOSA), and bureaucratic collaboration that shield ties from political volatility.",
                            "(d) The complete absence of any trade disputes."
                        ],
                        correctAnswer: 2,
                        explanation: "The text concludes: \"resilience... will depend heavily on these parallel institutional tracks... bureaucratic and institutional frameworks continue to sustain... shielding essential cooperation.\""
                    },
                    {
                        id: 614,
                        question: "The \"General Electric\" deal mentioned in the text relates to:",
                        options: [
                            "(a) Supply of nuclear fuel for power plants.",
                            "(b) Manufacturing of fighter jet engines with Hindustan Aeronautics Limited (HAL).",
                            "(c) Construction of new ports in Mumbai.",
                            "(d) Export of Indian mangoes to the U.S."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Hindustan Aeronautics Limited signed a billion-dollar deal... with the U.S.’s General Electric for fighter jet engines.\""
                    },
                    {
                        id: 615,
                        question: "According to the passage, Washington's approach to India is characterized as:",
                        options: [
                            "(a) \"Balance-of-interest pragmatism\" where relations remain vital despite transactional pressures.",
                            "(b) \"Total isolationism\" where the U.S. is cutting all ties with India.",
                            "(c) \"Unconditional support\" regardless of India's actions.",
                            "(d) \"Cold War hostility\" due to India's ties with Russia."
                        ],
                        correctAnswer: 0,
                        explanation: "The text states: \"Washington’s balance-of-interest pragmatism manifests itself in signals... that relations with New Delhi remain vital despite transactional pressures.\""
                    }
                ]
            },
            {
                id: 604,
                title: "Passage 4: Nuclear Policy (SHANTI Bill)",
                source: "Nuclear Policy (SHANTI Bill)",
                content: "Parliament has cleared the Sustainable Harnessing and Advancement of Nuclear Energy in India (SHANTI) Bill, opening India’s nuclear power sector to private and foreign participation. This ends the monopoly of the Nuclear Power Corporation of India Limited (NPCIL) while retaining 51% government control over sensitive activities. The Bill allows up to 49% private participation. It facilitates the deployment of Small Modular Reactors (SMRs) to achieve net-zero targets.\n\nThe Opposition argues that the Bill dilutes accountability by capping operator liability at ₹2,000 crore (or ₹100 crore for SMRs) in case of accidents, which is considered unreasonable compared to actual damages in disasters like Fukushima. The \"polluter pays\" principle has been undermined. The Bill removes supplier liability completely, a move defended as necessary to attract foreign firms but criticised as diluting safety.\n\nSection 39 of the Bill overrides the RTI Act of 2005, making crucial nuclear sector information—including plant details, operations, and safety data—\"restricted\". This dilutes public accountability. The Bill also overrides occupational safety norms for nuclear workers. The government argues that nuclear energy ensures clean baseload power, essential as India still relies on coal. However, critics claim it compromises safety and transparency for profit.",
                questions: [
                    {
                        id: 616,
                        question: "What is the primary structural change introduced by the SHANTI Bill regarding the nuclear sector's ownership?",
                        options: [
                            "(a) It privatizes NPCIL completely, selling 100% of it to foreign companies.",
                            "(b) It ends NPCIL's monopoly by allowing up to 49% private participation (including foreign) while retaining 51% government control over sensitive activities.",
                            "(c) It bans all private participation in the nuclear sector.",
                            "(d) It transfers control of nuclear plants to the state governments."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"ends the monopoly of NPCIL... allowing up to 49% private participation... while retaining 51% government control over sensitive activities.\""
                    },
                    {
                        id: 617,
                        question: "Why has the \"liability clause\" in the SHANTI Bill faced criticism from the Opposition?",
                        options: [
                            "(a) Because it sets the liability too high, scaring away investors.",
                            "(b) Because it removes supplier liability entirely and caps operator liability at a nominal amount (e.g., ₹2,000 crore), potentially leaving the state/public to bear the cost of a major disaster.",
                            "(c) Because it makes the Prime Minister personally liable for accidents.",
                            "(d) Because it applies only to solar power plants, not nuclear."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites opposition arguments: \"dilutes accountability by allowing profit-driven private participation while placing liability on the State... Removing supplier liability and capping operator liability... is considered unreasonable.\""
                    },
                    {
                        id: 618,
                        question: "The passage mentions \"Small Modular Reactors (SMRs)\" in the context of:",
                        options: [
                            "(a) Replacing all coal plants immediately.",
                            "(b) Achieving net-zero targets and energy security through flexible, advanced reactor technologies facilitated by the Bill.",
                            "(c) Being banned under the new law due to safety concerns.",
                            "(d) Being used exclusively for military purposes."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says the Bill \"facilitates the deployment of Small Modular Reactors (SMRs)... to achieve India's net zero targets.\""
                    },
                    {
                        id: 619,
                        question: "How does the SHANTI Bill affect the Right to Information (RTI) Act, according to the text?",
                        options: [
                            "(a) It strengthens the RTI Act by making all nuclear data public.",
                            "(b) It has no effect on the RTI Act.",
                            "(c) Section 39 overrides the RTI Act, classifying crucial information like plant details and safety data as \"restricted,\" thereby reducing transparency.",
                            "(d) It mandates that all RTI queries must be answered within 24 hours."
                        ],
                        correctAnswer: 2,
                        explanation: "The text states: \"Section 39 of the Bill seeks to override the RTI Act of 2005... make most crucial nuclear sector-related information... 'restricted'.\""
                    },
                    {
                        id: 620,
                        question: "The government's primary justification for pushing the SHANTI Bill and nuclear energy is:",
                        options: [
                            "(a) To create a monopoly for Adani and Ambani.",
                            "(b) To ensure clean, affordable \"baseload\" power capacity to support India's development and net-zero goals, reducing reliance on coal.",
                            "(c) To produce nuclear weapons for export.",
                            "(d) To reduce the number of jobs in the energy sector."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions: \"Nuclear power ensures clean energy... facilitates achieving India's net zero targets... electricity mix must have enough baseload generation capacity... to make it affordable and reliable.\""
                    }
                ]
            }
        ]
    },
    7: {
        dayId: 7,
        title: "UPSC CSAT Practice Set - Jan 07 (Day 07)",
        description: "Social Justice, Education, Public Health, Sci-Tech (Biomaterials)",
        vocabulary: [],
        passages: [
            {
                id: 701,
                title: "Passage 1: Social Justice (Mob Violence & Migration)",
                source: "Social Justice (Mob Violence & Migration)",
                content: "In the closing weeks of 2025, a series of violent incidents across India exposed a disturbing pattern of mob violence directed at migrants who were labelled foreigners – Bangladeshis and Chinese – by their attackers. In these cases, the three victims were Indian citizens from various parts of the country. Suspicion based on language, region, appearance or presumed nationality is escalating into mob violence in different regions. This is extremely worrying and the police must act strictly.\n\nIn Palakkad district, Kerala, Ram Narayan Baghel, a 31-year-old migrant worker from Chhattisgarh was lynched by a mob on December 17. Baghel was accused of theft and repeatedly questioned about his identity, with his attackers allegedly asking him whether he was “Bangladeshi” before beating him to death. Kerala is heavily dependent on migrant labour, and prides itself on its high levels of education and law and order. The lynching is a blot on its reputation. Similarly, in Sambalpur (Odisha), a young migrant worker from West Bengal was beaten to death by a mob that accused him of being a “Bangladeshi”. Two days later, a Bengali-speaking street vendor was assaulted.\n\nIn Dehradun, Anjel Chakma, a 22-year-old student from Tripura, was stabbed by a group that had allegedly hurled racial slurs at him and his brother. People from the northeastern States are often treated as perpetual outsiders in other parts of India; Chakma was called “Chinese” by his attackers. These are not isolated incidents: they occur amid numerous other cases of mob intimidation. The Bharatiya Janata Party (BJP) has turned its incendiary campaign against “illegal infiltration” from Bangladesh as a central plank in the forthcoming Assembly elections. It is no coincidence that mobs across the country feel emboldened to raise this bogey at random against helpless people.",
                questions: [
                    {
                        id: 701,
                        question: "Which of the following statements best reflects the central concern raised in the passage?",
                        options: [
                            "(a) The rise of illegal immigration from Bangladesh and China is threatening India's national security.",
                            "(b) The increasing dependence of Kerala on migrant labour is leading to economic instability.",
                            "(c) A disturbing pattern of mob violence is targeting Indian citizens based on suspicion of them being \"foreigners\" due to their language, region, or appearance.",
                            "(d) The lack of identification documents among migrant workers is the primary cause of mob lynching."
                        ],
                        correctAnswer: 2,
                        explanation: "The text explicitly states: \"exposed a disturbing pattern of mob violence directed at migrants who were labelled foreigners... Suspicion... is escalating into mob violence.\""
                    },
                    {
                        id: 702,
                        question: "The passage cites the incident involving Anjel Chakma in Dehradun to highlight:",
                        options: [
                            "(a) The dangers of student politics in Uttarakhand.",
                            "(b) The racial discrimination faced by people from Northeastern States, who are often treated as \"perpetual outsiders\" and labelled \"Chinese\".",
                            "(c) The need for better healthcare facilities for stab victims.",
                            "(d) The rising crime rate in Dehradun due to tourism."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says Chakma was \"stabbed by a group that had allegedly hurled racial slurs... People from the northeastern States are often treated as perpetual outsiders... Chakma was called ‘Chinese’\"."
                    },
                    {
                        id: 703,
                        question: "According to the author, what role has political rhetoric played in these incidents?",
                        options: [
                            "(a) Political parties have successfully curbed mob violence through strict warnings.",
                            "(b) The campaign against \"illegal infiltration\" has emboldened mobs to target helpless people at random.",
                            "(c) The opposition parties are inciting violence to defame the government.",
                            "(d) Political leadership has remained completely silent and neutral."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"BJP has turned its incendiary campaign against 'illegal infiltration'... It is no coincidence that mobs across the country feel emboldened to raise this bogey\"."
                    },
                    {
                        id: 704,
                        question: "What is the \"blot\" on Kerala's reputation mentioned in the passage?",
                        options: [
                            "(a) The high literacy rate which makes people arrogant.",
                            "(b) The lynching of a migrant worker from Chhattisgarh, Ram Narayan Baghel, despite the state's pride in its law and order and dependence on migrant labour.",
                            "(c) The refusal of the state government to accept migrant workers from West Bengal.",
                            "(d) The poor quality of education in Palakkad district."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Kerala is heavily dependent on migrant labour, and prides itself on its high levels of education... The lynching is a blot on its reputation.\""
                    },
                    {
                        id: 705,
                        question: "Based on the passage, the victims of the mob violence in Palakkad, Sambalpur, and Dehradun shared which common characteristic?",
                        options: [
                            "(a) They were all illegal immigrants from Bangladesh.",
                            "(b) They were all accused of theft by the police.",
                            "(c) They were all Indian citizens who were targeted because they were labelled as foreigners by mobs.",
                            "(d) They were all members of the same political party."
                        ],
                        correctAnswer: 2,
                        explanation: "The text opens by saying: \"In these cases, the three victims were Indian citizens... labelled foreigners... by their attackers.\""
                    }
                ]
            },
            {
                id: 702,
                title: "Passage 2: Education (Attendance & Learning)",
                source: "Education (Attendance & Learning)",
                content: "The Delhi High Court's affirmation that law students may sit for examinations without satisfying rigid attendance thresholds has provoked anxiety among administrators. But the ruling restores a truth that Indian universities have resisted for decades: learning cannot be secured through surveillance. Compulsory attendance belongs to a paternalistic era that believed students must be prodded into intellectual life. A university worthy of its name should cultivate curiosity, not compliance.\n\nAttendance is not a measure of learning; at best it is a measure of obedience. The obsession with physical presence flourishes where the classroom has been reduced to the perfunctory transfer of \"yellowing\" notes, the rote delivery of prefabricated knowledge that students could obtain faster through digital means. The ruling disrupts this apathy. It forces institutions to confront a truth long evaded: that a classroom that enforces attendance is already pedagogically bankrupt.\n\nPaulo Freire saw education not as the mechanical depositing of information but a dialogic encounter. My strongest classrooms have always been those born not of obligation but of desire. For instance, Sir Isaiah Berlin’s lectures captivated not by accident but because they were acts of craftsmanship. Students came not out of duty but anticipation. None of them needed the threat of consequences to fill a classroom. They made absence unthinkable. This is what the Indian university has forgotten. The Centre's increasing control has transformed campuses into intellectual vassals, where mandatory attendance policies serve as a tool of pedagogical pacification. By removing the coercive element, educators will be compelled to innovate. An empty classroom can be a catalyst for introspection, reorienting the incentive structure from external compulsion to intrinsic curiosity.",
                questions: [
                    {
                        id: 706,
                        question: "The author describes \"compulsory attendance\" as belonging to a \"paternalistic era.\" What does this imply?",
                        options: [
                            "(a) It implies that only fathers should decide if their children attend college.",
                            "(b) It implies a system that treats students as children who need to be controlled and prodded, rather than as autonomous intellectual beings.",
                            "(c) It implies that attendance was mandatory only for male students in the past.",
                            "(d) It implies that the system was created by the founding fathers of the constitution."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Compulsory attendance belongs to a paternalistic era that believed that students must be prodded into intellectual life rather than invited into it.\""
                    },
                    {
                        id: 707,
                        question: "According to the passage, why does the obsession with physical presence flourish in Indian universities?",
                        options: [
                            "(a) Because students prefer face-to-face interaction over digital learning.",
                            "(b) Because classrooms have been reduced to the rote delivery of static knowledge (\"yellowing notes\") rather than dynamic intellectual engagement.",
                            "(c) Because the weather in India requires students to be indoors.",
                            "(d) Because there is a lack of digital infrastructure in most universities."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"obsession with physical presence flourishes where the classroom has been reduced to the perfunctory transfer of 'yellowing' notes, the rote delivery...\""
                    },
                    {
                        id: 708,
                        question: "The passage suggests that the Delhi High Court's ruling will have which positive outcome for educators?",
                        options: [
                            "(a) It will allow them to take more holidays since fewer students will show up.",
                            "(b) It will compel them to innovate and reimagine their pedagogical approaches to make classes inherently engaging.",
                            "(c) It will reduce their salary since they are teaching fewer students.",
                            "(d) It will force them to take attendance more strictly to prove the court wrong."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"educators will be compelled to innovate... prompting teachers to craft learning spaces that are intellectually compelling.\""
                    },
                    {
                        id: 709,
                        question: "The author references Paulo Freire to support the idea that:",
                        options: [
                            "(a) Education should be a mechanical depositing of information.",
                            "(b) Education is a dialogic encounter and an awakening of consciousness, not a passive reception of knowledge.",
                            "(c) Students must be obedient vessels for the teacher's wisdom.",
                            "(d) Attendance is the most critical factor in academic success."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Paulo Freire saw... education was never the mechanical depositing of information but a dialogic encounter, an awakening of consciousness\"."
                    },
                    {
                        id: 710,
                        question: "What does the term \"pedagogical pacification\" refer to in the context of the passage?",
                        options: [
                            "(a) Using teaching methods that calm students down before exams.",
                            "(b) Using mandatory attendance and bureaucratic control to suppress student autonomy, dissent, and intellectual curiosity.",
                            "(c) A peace treaty signed between the university administration and the student union.",
                            "(d) The practice of meditating in the classroom."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"mandatory attendance policies serve as a tool of pedagogical pacification, undermining student autonomy and intellectual curiosity.\""
                    }
                ]
            },
            {
                id: 703,
                title: "Passage 3: Public Health (Water Quality)",
                source: "Public Health (Water Quality)",
                content: "An indicator of public health is the well-being of the poorer sections of the people. On most counts, India appears to be falling short, with the latest being the tragedy unfolding in Indore, Madhya Pradesh. At least four people have lost their lives after drinking municipality-supplied water, with more than 2,000 people falling ill. It is a development steeped in irony because Indore has been voted India’s cleanest city for several years in a row for its exemplary waste segregation.\n\nThe blame game began swiftly with authorities pinning it on tardy progress on installing a fresh supply line. However, a municipal supply is always considered to be a safe and “improved source”. If checks and balances were in place, the authorities would have spotted the contamination. Giving access to water is meaningless unless the quality of the supply is assured. There needs to be better enforcement of water guidelines at all levels.\n\nAir pollution is already wreaking havoc on citizens’ health; unsafe drinking water should not be added to the list. With a population close to 147 crore, India’s water-borne disease burden is high. All States should immediately check water supply sources for chemical and sewage contaminants. Old infrastructure including pipes must be repaired or replaced. Strict enforcement of policy and monitoring of practice along with awareness campaigns is essential. Indore and many more cities in India have to clean up their act, or risk more deaths.",
                questions: [
                    {
                        id: 711,
                        question: "Why does the author describe the water contamination tragedy in Indore as \"steeped in irony\"?",
                        options: [
                            "(a) Because Indore is known for its heavy rainfall yet faces water shortage.",
                            "(b) Because Indore has been voted India’s cleanest city for several years, yet failed to provide safe drinking water.",
                            "(c) Because the contamination happened in the wealthiest neighborhood of the city.",
                            "(d) Because the municipal corporation had just received an award for water management."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"It is a development steeped in irony because Indore has been voted India’s cleanest city for several years... for its exemplary waste segregation.\""
                    },
                    {
                        id: 712,
                        question: "The passage argues that \"giving access to water is meaningless unless...\":",
                        options: [
                            "(a) The water is provided free of cost.",
                            "(b) The water is supplied 24 hours a day.",
                            "(c) The quality of the supply is assured.",
                            "(d) The water is supplied in plastic bottles."
                        ],
                        correctAnswer: 2,
                        explanation: "Direct quote: \"Giving access to water is meaningless unless the quality of the supply is assured.\""
                    },
                    {
                        id: 713,
                        question: "According to the text, what is a \"municipal supply\" typically considered to be?",
                        options: [
                            "(a) An unreliable source that requires further filtration.",
                            "(b) A safe and \"improved source\" of drinking water.",
                            "(c) A source meant only for washing and cleaning, not drinking.",
                            "(d) A private service provided by NGOs."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"A municipal supply is always considered to be a safe and 'improved source'\"."
                    },
                    {
                        id: 714,
                        question: "What immediate actions does the author recommend for States to prevent similar tragedies?",
                        options: [
                            "(a) Privatize all municipal water boards.",
                            "(b) Check water supply sources for contaminants and repair/replace old infrastructure like pipes.",
                            "(c) Stop supplying water to areas with old pipes.",
                            "(d) Ban the consumption of tap water entirely."
                        ],
                        correctAnswer: 1,
                        explanation: "The text recommends: \"All States should immediately check water supply sources... Old infrastructure including pipes must be repaired or replaced.\""
                    },
                    {
                        id: 715,
                        question: "The phrase \"tardy progress\" used by authorities refers to:",
                        options: [
                            "(a) The fast-tracked completion of the new supply line.",
                            "(b) The delay or slow pace of installing a fresh supply line.",
                            "(c) The high quality of the materials used.",
                            "(d) The corruption involved in the contract."
                        ],
                        correctAnswer: 1,
                        explanation: "\"Tardy\" means delayed or slow. The text mentions \"tardy progress on installing a fresh supply line.\""
                    }
                ]
            },
            {
                id: 704,
                title: "Passage 4: Science & Technology (Biomaterials)",
                source: "Science & Technology (Biomaterials)",
                content: "As countries look to shift to cleaner processes to manufacture consumer products, biomaterials will become the new frontier of materials engineering. Biomaterials are materials derived wholly or partly from biological sources, or engineered using biological processes. They are categorized into three types: drop-in biomaterials (chemically identical to petroleum-based materials, e.g., bio-PET), drop-out biomaterials (chemically different, require new processing, e.g., PLA), and novel biomaterials (new properties like self-healing).\n\nFor India, biomaterials address multiple goals: environmental sustainability, industrial growth, and supporting farmer livelihoods. Indigenous biomaterials can reduce India’s heavy dependence on fossil-based imports for plastics and chemicals. It would also enable diversified value for agricultural feedstocks and residues, offering farmers new income streams beyond food markets. India’s biomaterials sector, spanning bioplastics and biopolymers, is rapidly emerging. The bioplastics market alone was valued at around $500 million in 2024.\n\nHowever, hurdles remain. If feedstocks do not scale with increased demand, there could be competition with food sources. Aggressive agricultural practices could lead to water stress. Weak waste-management and composting infrastructure could undermine environmental benefits. Fragmented policy coordination across agriculture, environment, and industry may slow adoption. Policy actions needed include scaling biomanufacturing infrastructure (especially fermentation capacity), improving feedstock productivity, and investing in R&D. Clear regulatory definitions and labelling norms are essential to build consumer confidence.",
                questions: [
                    {
                        id: 716,
                        question: "Which of the following best defines \"drop-in biomaterials\"?",
                        options: [
                            "(a) Biomaterials that are chemically different from petroleum-based materials and require new machinery.",
                            "(b) Biomaterials that possess novel properties like self-healing.",
                            "(c) Biomaterials that are chemically identical to petroleum-based materials and can be used in existing manufacturing systems.",
                            "(d) Biomaterials that are imported from other countries."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines drop-in biomaterials as: \"chemically identical to petroleum-based materials and can be used in existing manufacturing systems.\""
                    },
                    {
                        id: 717,
                        question: "According to the passage, how can the biomaterials sector benefit Indian farmers?",
                        options: [
                            "(a) By encouraging them to stop growing food crops.",
                            "(b) By offering diversified value for agricultural feedstocks and residues, creating new income streams beyond food markets.",
                            "(c) By providing them with free plastic bags.",
                            "(d) By reducing the cost of fossil-based fertilizers."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"enable diversified value for agricultural feedstocks... offering farmers new income streams beyond food markets.\""
                    },
                    {
                        id: 718,
                        question: "What is the potential risk associated with \"feedstock competition\" mentioned in the text?",
                        options: [
                            "(a) That farmers will fight each other for seeds.",
                            "(b) That increased demand for biomaterials might compete with food sources if feedstock production doesn't scale.",
                            "(c) That foreign companies will buy all the feedstock.",
                            "(d) That feedstocks will become poisonous."
                        ],
                        correctAnswer: 1,
                        explanation: "The text warns: \"If feedstocks also do not scale... there could be feedstock competition with food sources.\""
                    },
                    {
                        id: 719,
                        question: "Why does the author emphasize the need for \"scaling biomanufacturing infrastructure\"?",
                        options: [
                            "(a) Because India currently has no factories.",
                            "(b) Because fermentation capacity and polymerisation capacity need to be expanded to capitalize on the strategic opportunity.",
                            "(c) Because it is the only way to ban fossil fuels.",
                            "(d) Because the government has mandated it in the budget."
                        ],
                        correctAnswer: 1,
                        explanation: "The text lists \"scaling biomanufacturing infrastructure (especially fermentation...)\" as a necessary policy action to capitalize on the sector."
                    },
                    {
                        id: 720,
                        question: "The passage suggests that \"weak waste-management infrastructure\" could:",
                        options: [
                            "(a) Help in the faster decomposition of biomaterials.",
                            "(b) Undermine the environmental benefits of using biomaterials (e.g., if composting is not available).",
                            "(c) Have no impact on the biomaterials sector.",
                            "(d) Increase the profitability of bioplastics."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"weak waste-management and composting infrastructure could undermine environmental benefits.\""
                    }
                ]
            }
        ]
    },
    8: {
        dayId: 8,
        title: "UPSC CSAT Practice Set - Jan 08 (Day 08)",
        description: "Conservation Models, Internal Security, Antimicrobial Resistance, Climate Targets",
        vocabulary: [],
        passages: [
            {
                id: 801,
                title: "Passage 1: Conservation Models (Private Reserves)",
                source: "Conservation Models (Private Reserves)",
                content: "Private reserves are popular in Africa. In India, however, with 'eco-tourism' labels being used in arbitrary ways, responsible private reserves are more about potential than reality. In dissecting how wildlife returned to Jabarkhet Nature Reserve (JNR) and how it has balanced tourism needs with conservation, it is possible to trace a model for private reserves in India. More than 40 years ago, alarmed by massive deforestation in the hills, the government called for a ban on tree-cutting above 1,000 metres. The Jabarkhet Estate, privately owned, lay unused and largely unmanaged.\n\nIn 2013, the owners created a working plan. \"We removed 500 kg of garbage... Three tonnes of the weed Eupatorium were removed,\" said co-founder Sejal Worah. The reserve, which now offers affordable ticketed trails, started with selecting people from neighbouring villages, training them to be guides, and employing them for restoration. This was new for the area, a combination of traditional skills of deeply knowing the mountains and learning bird names in English.\n\nIs it possible that you could stroll around at your own pace, in restored woodland, a place where wildlife gets the right of way, away from mass tourism? JNR suggests yes. In the intervening years, the forest recovered. True to its Himalayan roots, the area now hosts insectivorous sundews, ground orchids, and over 150 bird species. This is more significant when we realise that places known for their natural beauty, whether the Himalayas or the Aravallies, are increasingly being cut up for mining and commercial projects. In the Himalaya, widening roads for tourism causes landslides every year. Can we see a rise of private reserves in India where wildlife gets the right of way? JNR offers a stepping stone.",
                questions: [
                    {
                        id: 801,
                        question: "Which of the following best describes the \"Jabarkhet Model\" of conservation as presented in the passage?",
                        options: [
                            "(a) A government-led initiative to ban all human activity in the Himalayas to prevent landslides.",
                            "(b) A private initiative that combines ecological restoration (weed/garbage removal) with community involvement (local employment) and regulated, low-impact tourism.",
                            "(c) A commercial project focused on building luxury resorts with \"eco-tourism\" labels to maximize profit.",
                            "(d) A strict \"no-entry\" zone where neither tourists nor locals are allowed, similar to a Core Tiger Reserve."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes JNR as a \"model\" involving \"restoration\" (weed removal), employing locals (\"training them to be guides\"), and enabling \"stroll around at your own pace\" (regulated tourism)."
                    },
                    {
                        id: 802,
                        question: "The author contrasts Jabarkhet Nature Reserve (JNR) with \"mass tourism\" in the Himalayas. What is the primary negative impact of the latter mentioned in the text?",
                        options: [
                            "(a) It leads to the extinction of the Eupatorium weed.",
                            "(b) It causes massive deforestation above 1,000 metres.",
                            "(c) It involves infrastructure projects like widening roads which trigger landslides.",
                            "(d) It prevents local villagers from learning English."
                        ],
                        correctAnswer: 2,
                        explanation: "The text explicitly states: \"In the Himalaya, widening roads for activities like tourism causes landslides every year.\""
                    },
                    {
                        id: 803,
                        question: "The passage mentions the removal of Eupatorium. In this context, Eupatorium is likely:",
                        options: [
                            "(a) An endangered medicinal plant that was poached.",
                            "(b) An invasive weed that needed to be cleared to restore the natural ecosystem.",
                            "(c) A type of plastic waste left by tourists.",
                            "(d) A traditional crop grown by the villagers."
                        ],
                        correctAnswer: 1,
                        explanation: "Context: \"Three tonnes of the weed Eupatorium were removed... The reserve... restoration...\". Weeds are removed to restore ecosystems."
                    },
                    {
                        id: 804,
                        question: "According to the passage, why is the success of JNR considered \"significant\" in the current context?",
                        options: [
                            "(a) Because it proves that private reserves are more profitable than mining.",
                            "(b) Because it offers a model of conservation in a time when natural landscapes (Himalayas/Aravallis) are increasingly threatened by mining and commercial projects.",
                            "(c) Because it is the first time a leopard has been sighted in Mussoorie.",
                            "(d) Because it has successfully banned all private ownership of land in Uttarakhand."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says it is \"more significant when we realise that places known for their natural beauty... are increasingly being cut up for mining and commercial projects.\""
                    },
                    {
                        id: 805,
                        question: "What role did the local community play in the restoration of Jabarkhet?",
                        options: [
                            "(a) They were evicted from the land to make space for wildlife.",
                            "(b) They were employed for restoration work and trained as guides, combining traditional knowledge with new skills.",
                            "(c) They were fined for cutting trees in the past.",
                            "(d) They were the primary investors who funded the project."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"started with selecting people from neighbouring villages, training them to be guides, and employing them for restoration.\""
                    }
                ]
            },
            {
                id: 802,
                title: "Passage 2: Internal Security (NATGRID & Surveillance)",
                source: "Internal Security (NATGRID & Surveillance)",
                content: "We tend to quantify the tragedy of the 26/11 terror attack by the lives lost. But out of that psychological aftershock emerged the technological \"crown jewel\": the National Intelligence Grid (NATGRID). Its premise was a middleware interface allowing 11 central agencies to query databases across 21 categories (bank, travel, telecom). Yet, on June 14, 2012, NATGRID was cleared not through an Act of Parliament, but by executive order. For years, it was believed to be 'vaporware'. But two recent reports in 2025 reveal a quantitative expansion: NATGRID receives 45,000 requests monthly, and access is being widened to police units down to the rank of Superintendent of Police.\n\nThe second development is even more unsettling: the reported integration of NATGRID with the National Population Register (NPR). The NPR is a repository with details of 1.19 billion residents, a \"relational cartography\" of households and lineages. Grafting a population register onto an intelligence query platform crosses a fundamental boundary. It shifts the paradigm from tracking discrete events to mapping every Indian. NATGRID’s evolution is unfolding amid rapid advances in machine learning. Paired with facial recognition that can trawl telecom KYC databases, this changes the nature of the risk. Here, intentions are subjectively determined by an algorithm.\n\nThe danger of modern analytics is not omniscience, but ubiquity. NATGRID reportedly classifies queries by sensitivity. But without independent scrutiny, these are facial safeguards. When tens of thousands of requests are processed each month, logging risks becoming a clerical ritual. For a young Muslim man in a small town, an automated “hit” (false positive) can trigger an ordeal. We need professional investigation insulated from political whims and oversight vested within the judiciary, not an architecture of suspicion built in the name of safety.",
                questions: [
                    {
                        id: 806,
                        question: "The author uses the term \"digital authoritarianism\" to characterize NATGRID primarily because:",
                        options: [
                            "(a) It uses digital technology to speed up passport verification.",
                            "(b) It operates without a statutory framework (Act of Parliament), lacks independent oversight, and risks creating an \"architecture of suspicion\" via mass surveillance.",
                            "(c) It is owned by a private company rather than the government.",
                            "(d) It was created immediately after the 26/11 attacks."
                        ],
                        correctAnswer: 1,
                        explanation: "The text links \"digital authoritarianism\" to: \"no statutory framework... executive order... lack of autonomous oversight... architecture of suspicion.\""
                    },
                    {
                        id: 807,
                        question: "What specific \"fundamental boundary\" is crossed by the integration of NATGRID with the National Population Register (NPR), according to the passage?",
                        options: [
                            "(a) The boundary between state and central government powers.",
                            "(b) The shift from tracking \"discrete events\" (intelligence inputs) to \"mapping every Indian\" (mass surveillance of households/lineages).",
                            "(c) The boundary between civilian and military intelligence.",
                            "(d) The financial boundary, as NPR data is expensive to maintain."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"It shifts the paradigm from tracking discrete events as intelligence inputs to the mapping every Indian.\""
                    },
                    {
                        id: 808,
                        question: "The passage highlights the risk of \"false positives\" in the context of algorithmic surveillance. What does this imply?",
                        options: [
                            "(a) The algorithm correctly identifies a terrorist who is actually innocent.",
                            "(b) The algorithm identifies an innocent person as a threat (a \"hit\") due to bias or error, causing harassment/misidentification.",
                            "(c) The algorithm fails to identify a real terrorist.",
                            "(d) The algorithm crashes due to too much data."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"For a young Muslim man... an automated 'hit' can trigger an ordeal and misidentification... false positive.\""
                    },
                    {
                        id: 809,
                        question: "The author argues that \"logging risks becoming a clerical ritual\". This suggests that:",
                        options: [
                            "(a) The logs are kept in paper files which are hard to read.",
                            "(b) The sheer volume of requests (45,000/month) makes effective oversight or scrutiny of why data was accessed impossible in practice.",
                            "(c) Clerks are not trained to use computers.",
                            "(d) Logging is unnecessary because the police are always right."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"When tens of thousands of requests are processed each month, logging risks becoming a clerical ritual particularly in the absence of autonomous oversight.\""
                    },
                    {
                        id: 810,
                        question: "Which of the following is NOT a safeguard proposed by the author to fix the issues with NATGRID?",
                        options: [
                            "(a) Oversight vested within the parliamentary and the judiciary.",
                            "(b) Transparency about intelligence lapses.",
                            "(c) Increasing the number of police units with access to the data.",
                            "(d) A statutory framework (Act of Parliament) instead of an executive order."
                        ],
                        correctAnswer: 2,
                        explanation: "Increasing access (widening to SP rank) is listed as a risk/problem (\"Worse, access... is being widened\"), not a safeguard. The author calls for (a), (b), and implicitly (d)"
                    }
                ]
            },
            {
                id: 803,
                title: "Passage 3: Public Health (Antimicrobial Resistance)",
                source: "Public Health (Antimicrobial Resistance)",
                content: "Will Prime Minister Narendra Modi’s statement on antimicrobial resistance (AMR) in his last ‘Mann Ki Baat’ broadcast be the anagnorisis (discovery/recognition) that we have been waiting for? By invoking national data and appealing directly to citizens to avoid over-the-counter antibiotics, the speech translates lab-based warnings into a public call to action. Striking at the broadest base (public awareness) is key. But merely hitting the base will no longer be sufficient. The AMR crisis has grown like a hydra-headed beast; it needs a One Health approach where cognition of the interconnectedness of human, animal, and environmental health shapes solutions.\n\nHowever, a critical gap remains: surveillance. For the recent GLASS report (reporting period Jan-Dec 2023), information was gathered from 41 sites. The NARS-Net surveillance network includes government medical colleges. These labs submit data on priority bacterial pathogens. But as experts point out, while the network is expanding, there is still no exhaustive dataset for India as a whole. Surveillance sites are located largely in urban centres and tertiary care centres. This may drive up the average, as the bulk of non-urban centres are not accounted for.\n\nProfessor Abdul Ghafur notes that the only credible approach is to present true national data — inclusive of secondary and primary care centres across the country, and private hospitals too. If such data are included, the national resistance picture will naturally be more balanced. The urgent need is to expand the surveillance network to provide a reasonably accurate position of community prevalence of AMR in India.",
                questions: [
                    {
                        id: 811,
                        question: "The passage suggests that the current AMR surveillance data (NARS-Net/GLASS) might be skewed or unrepresentative because:",
                        options: [
                            "(a) It relies heavily on data from urban tertiary care centres (large government hospitals), missing non-urban and primary/secondary care settings.",
                            "(b) The laboratories use outdated equipment.",
                            "(c) Private hospitals refuse to share data due to patient privacy.",
                            "(d) The Prime Minister has not authorized the collection of rural data."
                        ],
                        correctAnswer: 0,
                        explanation: "The text states: \"Surveillance sites are located largely in urban centres and tertiary care centres... drive up the average as the bulk of non-urban centres are not accounted for.\""
                    },
                    {
                        id: 812,
                        question: "What does the \"One Health\" approach mentioned in the passage entail?",
                        options: [
                            "(a) A policy where only one hospital treats all diseases in a district.",
                            "(b) A unified health insurance scheme for all citizens.",
                            "(c) An approach that recognizes the interconnectedness of human, animal, and environmental health in tackling AMR.",
                            "(d) A ban on using antibiotics in animals completely."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines it: \"cognition of the interconnectedness of human, animal, and environmental health now actively shapes solutions.\""
                    },
                    {
                        id: 813,
                        question: "The author uses the term \"anagnorisis\" to describe the Prime Minister's speech. In this context, it implies:",
                        options: [
                            "(a) A moment of confusion regarding the policy.",
                            "(b) A moment of critical recognition or discovery that galvanizes action on a long-ignored issue.",
                            "(c) A formal declaration of a medical emergency.",
                            "(d) A denial of the existence of the problem."
                        ],
                        correctAnswer: 1,
                        explanation: "The text asks if it will be the \"anagnorisis... we have been waiting for to galvanise action,\" implying a moment of recognition leading to action."
                    },
                    {
                        id: 814,
                        question: "According to the passage, why is \"striking at the broadest base\" (public awareness) considered key?",
                        options: [
                            "(a) Because doctors are already fully aware and need no further training.",
                            "(b) Because the \"thoughtless and indiscriminate use of antibiotics by people\" (popping pills) is a major driver of the crisis.",
                            "(c) Because it is the cheapest way to solve the problem.",
                            "(d) Because pharmaceutical companies sponsor these campaigns."
                        ],
                        correctAnswer: 1,
                        explanation: "The text quotes the PM: \"thoughtless and indiscriminate use of antibiotics by people\" and notes the speech translates warnings into a \"public call to action.\""
                    },
                    {
                        id: 815,
                        question: "Which specific recommendation is made to make the \"national resistance picture\" more balanced?",
                        options: [
                            "(a) Stop collecting data from government hospitals.",
                            "(b) Include data from secondary/primary care centres and private hospitals to capture community prevalence.",
                            "(c) Rely solely on WHO estimates instead of national data.",
                            "(d) Focus only on fungal pathogens instead of bacterial ones."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites Dr. Abdul Ghafur: \"data not limited to tertiary care... inclusive of secondary and primary care... and private hospitals.\""
                    }
                ]
            },
            {
                id: 804,
                title: "Passage 4: Environment (Climate Targets)",
                source: "Environment (Climate Targets)",
                content: "While India has achieved meaningful progress on specific metrics, they also obscure fundamental problems. Using 2005 as baseline, emissions intensity decreased by approximately 36% by 2020, enabling India to meet its original target well ahead of 2030. However, intensity gains still coexist with persistently high absolute emissions. This phenomenon exists because of \"incomplete decoupling\": GDP growth has outpaced emissions growth, so intensity declined, but without an economy-wide absolute fall.\n\nIndia's renewable capacity scale-up is dramatic (175 GW target was nearly met), but it does not yet replace fossil baseload. Crucially, electricity generation lags capacity – renewables supplied roughly 22% of electricity in 2024-25 despite greater than 50% non-fossil capacity. This is because of lower capacity factors (solar/wind don't run 24/7) and storage shortfalls. Consequently, coal remains the backbone, with thermal capacity continuing to expand.\n\nRegarding carbon sinks, the Forest Survey of India's definition of \"forest cover\" includes any land of more than one hectare with overstory 10% canopied. This includes eucalyptus monocultures, plantations of mango, and roadside trees. Satellite imagery indicating a 7,15,343 sq km forest cover confuses ecological performance with administrative designation. Plantations are dominated by monocultures which do not capture the definition's elasticity or biodiversity outcomes. Furthermore, under the Compensatory Afforestation Fund Act (2016), huge funds have accumulated, but unequal implementation remains a challenge.",
                questions: [
                    {
                        id: 816,
                        question: "What does the term \"incomplete decoupling\" refer to in the passage?",
                        options: [
                            "(a) The failure to connect renewable energy grids to the main power grid.",
                            "(b) A situation where emissions intensity (emissions per unit of GDP) falls, but total absolute emissions continue to rise because the economy is growing faster than emissions are being cut.",
                            "(c) The separation of the Ministry of Environment from the Ministry of Power.",
                            "(d) The disconnect between India's climate promises and its actual actions."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: \"GDP growth has outpaced emissions growth, so intensity declined... without an economy-wide absolute fall.\""
                    },
                    {
                        id: 817,
                        question: "The passage highlights a discrepancy between \"non-fossil capacity\" (>50%) and \"electricity generation\" (~22%). What is the primary reason for this gap?",
                        options: [
                            "(a) Corruption in the energy sector.",
                            "(b) The lower \"capacity factors\" of renewables (intermittency) and lack of storage, compared to the consistent \"baseload\" nature of coal.",
                            "(c) The refusal of state governments to buy renewable power.",
                            "(d) The shutdown of nuclear power plants."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"because of lower capacity factors and storage shortfalls; thermal (primarily coal) capacity... provides baseload.\""
                    },
                    {
                        id: 818,
                        question: "Why does the author criticize the Forest Survey of India's definition of \"forest cover\"?",
                        options: [
                            "(a) Because it excludes mangrove forests.",
                            "(b) Because it is too strict and excludes urban trees.",
                            "(c) Because it is too broad/elastic, counting monoculture plantations (mango, eucalyptus) as \"forests,\" which masks the lack of true ecological restoration/biodiversity.",
                            "(d) Because it relies on manual counting instead of satellite imagery."
                        ],
                        correctAnswer: 2,
                        explanation: "The text criticizes the definition (\"includes any land... with overstory 10%\") because it \"confuses ecological performance with administrative designation\" and includes monocultures."
                    },
                    {
                        id: 819,
                        question: "Based on the passage, what is the role of \"coal\" in India's current energy mix?",
                        options: [
                            "(a) It has been completely phased out.",
                            "(b) It remains the \"backbone\" providing baseload power, with thermal capacity continuing to expand despite the growth of renewables.",
                            "(c) It is used only for cooking, not electricity generation.",
                            "(d) It is being replaced entirely by nuclear energy."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"In contrast, coal generates constant 'baseload' electricity... backbone remains the 253 GW of coal-based capacity.\""
                    },
                    {
                        id: 820,
                        question: "The passage suggests that meeting the \"emissions intensity\" target:",
                        options: [
                            "(a) Is the final goal of climate action.",
                            "(b) Is a metric that can obscure the reality of rising absolute emissions.",
                            "(c) Is impossible for a developing country like India.",
                            "(d) Requires a reduction in GDP growth."
                        ],
                        correctAnswer: 1,
                        explanation: "The text opens with: \"While India has achieved meaningful progress on specific metrics [intensity], they also obscure fundamental problems [absolute emissions].\""
                    }
                ]
            }
        ]
    },
    9: {
        dayId: 9,
        title: "UPSC CSAT Practice Set - Jan 09 (Day 09)",
        description: "Public Health (Spina Bifida), Regulatory Governance, Green Governance, Space Policy",
        vocabulary: [],
        passages: [
            {
                id: 901,
                title: "Passage 1: Public Health (Spina Bifida)",
                source: "Public Health (Spina Bifida)",
                content: "The fact that pre-conceptional intake of folic acid can prevent more than 70% of Spina Bifida cases has been known; yet, India is one of the few countries where no meaningful efforts have been made to create awareness, making it home to one of the highest prevalence rates of the condition. Spina Bifida is a birth defect of the spinal cord that causes serious childhood paralysis and occurs in more than 25,000 children in India each year. The range of paralysis varies from mild weakness in the feet to complete paralysis from the hip downwards, resulting in many patients being wheelchair dependent right from early childhood. Additionally, affected children may have associated problems such as excessive water in the brain (hydrocephalus) and incontinence.\n\nWhat is both tragic and unpardonable is the fact that despite the knowledge that Spina Bifida can be largely prevented with a B complex vitamin (folic acid), awareness regarding this simple and inexpensive intervention continues to remain lacking. Since 1991, the fact that pre-conceptional intake of folic acid by women can prevent defects has been known. Yet, 30 years later, India is one of the few countries where no meaningful efforts to create awareness have been carried out. While it is understood that in unplanned pregnancies awareness about pre-conceptional vitamins may not be given, the lack of any effort to educate the public cannot be termed anything less than gross public health negligence.\n\nResearch is ongoing to study the fortification of food vehicles such as salt and tea that are widely and uniformly consumed. A preliminary trial for tea fortification (results published in BMJ Nutrition) found that tea could potentially be a vehicle for fortification with folate and vitamin B12. It is time for a national awareness campaign. Until every woman knows that a folic acid tablet, taken before conception and during pregnancy, can help prevent Spina Bifida, the work remains incomplete.",
                questions: [
                    {
                        id: 901,
                        question: "Which one of the following statements best reflects the \"crux\" of the passage?",
                        options: [
                            "(a) Tea is the most effective vehicle for vitamin fortification in India compared to salt.",
                            "(b) Spina Bifida is a genetic disorder that cannot be treated, only managed through surgery.",
                            "(c) India faces a crisis of \"gross public health negligence\" because it has failed to create awareness about a simple, inexpensive preventive measure (folic acid) for a debilitating birth defect.",
                            "(d) The Medical Research Council (MRC) Vitamin Study of 1991 was flawed."
                        ],
                        correctAnswer: 2,
                        explanation: "The passage highlights the high prevalence of Spina Bifida and calls the lack of awareness about the simple preventive measure (folic acid) \"gross public health negligence.\""
                    },
                    {
                        id: 902,
                        question: "The passage emphasizes \"pre-conceptional\" intake of folic acid. Based on the text, why is the timing (before conception) critical?",
                        options: [
                            "(a) Because folic acid is expensive and should only be taken for a short duration.",
                            "(b) Because the text implies prevention effectiveness is linked to intake before and during pregnancy, and unplanned pregnancies often miss this window due to lack of awareness.",
                            "(c) Because taking it after the child is born causes side effects.",
                            "(d) Because it helps the mother recover from childbirth."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"pre-conceptional intake... can prevent... unplanned pregnancies awareness... may not be given.\" The defect happens early (spinal cord formation), so intake before conception is key."
                    },
                    {
                        id: 903,
                        question: "According to the passage, which of the following are potential complications associated with Spina Bifida?\n\n1. Paralysis from the hip downwards.\n2. Hydrocephalus (excessive water in the brain).\n3. Incontinence (lack of control over bowel/bladder).\n\nSelect the correct answer using the code given below:",
                        options: [
                            "(a) 1 only",
                            "(b) 1 and 2 only",
                            "(c) 2 and 3 only",
                            "(d) 1, 2 and 3"
                        ],
                        correctAnswer: 3,
                        explanation: "All three are listed: \"paralysis from the hip downwards,\" \"excessive water in the brain (hydrocephalus),\" and \"incontinence.\""
                    },
                    {
                        id: 904,
                        question: "The author mentions a study published in BMJ Nutrition regarding \"food vehicles\". What was the key finding?",
                        options: [
                            "(a) Salt is the only viable vehicle for folic acid fortification.",
                            "(b) Tea could potentially be a vehicle for fortification with folate and vitamin B12 in India.",
                            "(c) Fortified foods cause more harm than good.",
                            "(d) Indian diets are already rich enough in folate."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"trial for tea fortification... found that tea could potentially be a vehicle for fortification with folate and vitamin B12.\""
                    },
                    {
                        id: 905,
                        question: "What is the author's primary criticism of the Indian public health system in this context?",
                        options: [
                            "(a) It spends too much money on surgeries.",
                            "(b) It has failed to implement a national awareness campaign despite knowing the solution for over 30 years.",
                            "(c) It relies too heavily on foreign doctors.",
                            "(d) It has banned the sale of folic acid tablets."
                        ],
                        correctAnswer: 1,
                        explanation: "The text calls it \"unpardonable\" that \"30 years later, India is one of the few countries where no meaningful efforts to create awareness have been carried out.\""
                    }
                ]
            },
            {
                id: 902,
                title: "Passage 2: Regulatory Governance (Drug Safety)",
                source: "Regulatory Governance (Drug Safety)",
                content: "The new guidelines to compound minor drug violations that the Central Drugs Standard Control Organization (CDSCO) has released operationalise a legal change in the works since 2023. Until recently, many instances of relatively minor or technical non-compliance under the Drugs and Cosmetics Act, 1940, invoked criminal prosecution. The new guidance standardises compounding instead, whereby firms can settle certain offences by paying a fine, instead of litigating. The legal backdrop is the Jan Vishwas Act, framed as an exercise in \"decriminalising... for ease of living and doing business\".\n\nThis change is for the better if the regulatory apparatus implements it in good faith. For offences based on record keeping and disclosure, compounding prevents needless criminalisation. However, the main pitfalls are the guidelines regressing into a ‘pay and pass’ scheme and the CDSCO’s transparency. If the CDSCO does not publish compounding orders and the underlying case details, the public may lose faith. Even if repeat offenders cannot avail of the benefit, there needs to be a publicly auditable trail.\n\nThe guidance’s emphasis on discretion cannot substitute for public reporting that lets independent actors check whether the same firms are repeat offenders. Next, the way the errors that can be compounded are written is broad enough in practice to cover a wide range of behaviours, from lapses in paperwork to more substantive compliance failures. If the compounding fines are also set too low, applied inconsistently or used routinely in place of deterrence, compliance will falter. The CDSCO also needs to link compounding to corrective actions and public-facing actions such as issuing alerts or recalling products.",
                questions: [
                    {
                        id: 906,
                        question: "The author uses the term \"pay and pass scheme\" to describe a potential risk. What does this imply?",
                        options: [
                            "(a) A system where companies pay bribes to get licenses.",
                            "(b) A scenario where regulatory compounding becomes a mechanism for firms to simply pay a fine to hide substantive failures without fixing them or facing public scrutiny.",
                            "(c) A tax scheme for pharmaceutical exports.",
                            "(d) A transparent method of collecting revenue for the government."
                        ],
                        correctAnswer: 1,
                        explanation: "The author warns of guidelines \"regressing into a ‘pay and pass’ scheme\" where firms settle offences by paying fines (\"pay\") and avoid transparency or corrective action (\"pass\")."
                    },
                    {
                        id: 907,
                        question: "What is the primary objective of the \"Jan Vishwas Act\" mentioned in the passage?",
                        options: [
                            "(a) To increase the jail term for drug adulteration to life imprisonment.",
                            "(b) To decriminalize and rationalize offences to promote \"ease of living and doing business.\"",
                            "(c) To privatize the CDSCO.",
                            "(d) To ban the import of foreign medicines."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"The legal backdrop is the Jan Vishwas Act that was framed as an exercise in 'decriminalising... for ease of living and doing business'.\""
                    },
                    {
                        id: 908,
                        question: "Why does the author argue that a \"publicly auditable trail\" (transparency) is essential for the success of these guidelines?",
                        options: [
                            "(a) Because it allows the government to collect more taxes.",
                            "(b) Because without publishing orders, independent actors cannot verify if the same firms are repeat offenders, leading to a loss of public faith.",
                            "(c) Because it is required by the World Health Organization.",
                            "(d) Because it helps companies advertise their products."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"If the CDSCO does not publish... the public may lose faith... lets independent actors check whether the same firms are repeat offenders.\""
                    },
                    {
                        id: 909,
                        question: "According to the passage, \"compounding\" of offences is most appropriate for:",
                        options: [
                            "(a) Spurious or adulterated drugs that cause death.",
                            "(b) Offences based on record keeping, disclosure, and technical non-compliance.",
                            "(c) All types of drug violations including manufacturing fake drugs.",
                            "(d) Companies that refuse to pay taxes."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"For offences based on record keeping and disclosure... preventing needless criminalisation.\""
                    },
                    {
                        id: 910,
                        question: "Which of the following is a specific recommendation made by the author to ensure safety?",
                        options: [
                            "(a) Compounding must be linked to corrective actions (like recalls) and public alerts.",
                            "(b) The fines for compounding should be removed entirely.",
                            "(c) The CDSCO should stop inspecting factories.",
                            "(d) Compounding should be available even for repeat offenders."
                        ],
                        correctAnswer: 0,
                        explanation: "The text concludes: \"CDSCO also needs to link compounding to corrective and preventive actions... issuing alerts or directing firms to recall products.\""
                    }
                ]
            },
            {
                id: 903,
                title: "Passage 3: Judiciary & Environment (Green Governance)",
                source: "Judiciary & Environment (Green Governance)",
                content: "Over the last decade, the Supreme Court of India has increasingly moved from reviewing the legality of administrative decisions to issuing forward-looking directions mimicking regulation in important environmental cases. This shift has emerged in a series of matters in which regulators have dropped the ball, pulling the Court into a managerial role. But the Court has then compounded the problem by continuing to substitute for the regulator instead of correcting the regulator’s process and stepping back.\n\nIn the Aravalli matter, the Court adopted a unified definition for \"Aravalli hills\" to control mining, but within weeks placed that order in abeyance after realizing the ecological basis varied considerably across landscapes. In the ESZ (Eco-Sensitive Zone) issue, a uniform buffer sounded decisive at first but met with resistance due to feasibility issues. The Court has often shifted from being rooted in legality to that in consequences. In May 2025, the Court said ex post facto environmental clearances were \"anathema\", but in November, it recalled that position.\n\nWhile the Court conducting itself as an approving authority has bitten the hardest is the consequences for public challenge. Project proponents and governments have been forced to approach the Court for permissions even before statutory authorities have finished examining a project, at the same time conferring a sense of finality that discourages contestation later. The bigger problem is that its early entry into the approval process can smother meaningful judicial review in other fora. Instead, the Court should consider adopting a steadier hand, protecting the environment by disciplining the state back into regulation.",
                questions: [
                    {
                        id: 911,
                        question: "The central criticism of the Supreme Court's \"managerial role\" in environmental cases is that:",
                        options: [
                            "(a) The Court lacks the scientific expertise to make any environmental decisions.",
                            "(b) By substituting for the regulator, the Court creates uncertainty/instability and smothers meaningful judicial review in lower forums.",
                            "(c) The Court is too lenient on polluters.",
                            "(d) The Court is blocking all development projects in India."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues the Court's \"managerial role... substituted for the regulator,\" leading to \"uncertainty,\" \"instability,\" and potentially \"smothering meaningful judicial review in other fora.\""
                    },
                    {
                        id: 912,
                        question: "The passage cites the \"Aravalli matter\" and \"ESZ issue\" to illustrate:",
                        options: [
                            "(a) The success of the Court in stopping illegal mining.",
                            "(b) The \"push-pull relationship\" where the Court issues sweeping uniform rules (like unified definitions/buffers) that often have to be modified or retracted due to practical/ecological complexities.",
                            "(c) The refusal of the government to follow court orders.",
                            "(d) The need for a complete ban on mining in all of India."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes how the \"unified definition\" (Aravalli) and \"uniform buffer\" (ESZ) had to be placed in abeyance or modified because they didn't account for ecological variation (\"feasibility varied\")."
                    },
                    {
                        id: 913,
                        question: "What is the implication of the Court's \"early entry into the approval process\" mentioned in the text?",
                        options: [
                            "(a) It speeds up development projects significantly.",
                            "(b) It confers a sense of finality that discourages later contestation and meaningful review in other forums (like the NGT).",
                            "(c) It saves money for the project proponents.",
                            "(d) It ensures that no environmental damage ever happens."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"conferring a sense of finality that discourages contestation later... smother meaningful judicial review in other fora.\""
                    },
                    {
                        id: 914,
                        question: "The author suggests the Supreme Court should shift its approach to:",
                        options: [
                            "(a) Banning all industrial activity.",
                            "(b) \"Disciplining the state back into regulation\" – insisting on time-bound regulatory action with reasons, rather than taking over the regulator's job.",
                            "(c) Appointing itself as the permanent environment minister.",
                            "(d) Ignoring environmental cases entirely."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes the Court should adopt a \"steadier hand... disciplining the state back into regulation... specifying thresholds... insisting on time-bound regulatory action.\""
                    },
                    {
                        id: 915,
                        question: "The phrase \"ex post facto clearances\" refers to:",
                        options: [
                            "(a) Clearances granted before a project starts.",
                            "(b) Clearances granted after a project has already violated environmental norms or started operations (retroactive approval).",
                            "(c) Clearances granted by foreign governments.",
                            "(d) Clearances for export purposes only."
                        ],
                        correctAnswer: 1,
                        explanation: "Ex post facto means \"after the fact.\" The text refers to \"post facto environmental clearances\" (approving a project after it has already started/violated norms)."
                    }
                ]
            },
            {
                id: 904,
                title: "Passage 4: Space Policy (ISRO's Challenge)",
                source: "Space Policy (ISRO's Challenge)",
                content: "ISRO’s past accomplishments raise the bar for future missions. The soft landing of the Chandrayaan-3 lander and the Aditya-L1 mission placed India in a coterie of countries with demonstrated capabilities. But the next phase depends less on individual feats and more on sustained institutional performance, clearer legal structures, and the capacity to execute ambitious missions in a routine way.\n\nFirst, ISRO currently confronts a deceptive structural prioritisation problem. Specifically, the organisation prepares in parallel for the human spaceflight mission (Gaganyaan), complex science missions, satellite replenishment, and the development of NGLV (Next-Generation Launch Vehicle). However, its annual launch cadence and project timelines have become an increasingly obvious bottleneck. Experts have linked its low number of launches in 2025 to project delays.\n\nSecond, ISRO’s role in India’s liberalised space ecosystem is conceptually clear only on paper. The principal issue here is that India still lacks a comprehensive national space law. If a commercial mission fails, creates third-party liabilities, nobody can say in advance who is responsible for what, leaving ISRO to be pulled in by 'default' because it’s the most capable state actor. A national space law would not merely help startups; it would also protect ISRO by reducing the ad hoc demands placed on it. Finally, investment in India’s space sector fell sharply in 2024. Building systems and operating them requires more production depth and higher capital. The capacity to execute will determine whether the Indian space programme will also be able to deliver ambitious missions in a routine way.",
                questions: [
                    {
                        id: 916,
                        question: "According to the passage, the \"next phase\" of India's space journey depends primarily on:",
                        options: [
                            "(a) Achieving a manned landing on Mars.",
                            "(b) Moving from individual feats to \"sustained institutional performance\" and routine execution of complex missions.",
                            "(c) Privatizing ISRO completely.",
                            "(d) Reducing the budget for space missions."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says the next phase depends \"less on individual feats and more on sustained institutional performance... capacity to execute ambitious missions in a routine way.\""
                    },
                    {
                        id: 917,
                        question: "What is the \"structural prioritisation problem\" ISRO faces?",
                        options: [
                            "(a) It has too much money and doesn't know how to spend it.",
                            "(b) It is trying to do too many things in parallel (Human spaceflight, NGLV, science missions, satellites) while facing a bottleneck in launch cadence (frequency).",
                            "(c) The government has stopped funding science missions.",
                            "(d) Scientists are leaving ISRO for NASA."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says ISRO \"prepares in parallel for human spaceflight... complex science missions... but its annual launch cadence... has become an increasingly obvious bottleneck.\""
                    },
                    {
                        id: 918,
                        question: "Why does the author argue that a \"national space law\" is necessary to protect ISRO?",
                        options: [
                            "(a) Because ISRO needs legal permission to launch rockets.",
                            "(b) Because currently, if a private commercial mission fails or creates liability, ISRO is pulled in by \"default\" as the state actor; a law would clarify roles and liabilities.",
                            "(c) Because startups are trying to steal ISRO's technology.",
                            "(d) Because the UN mandates every country to have a space law."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"If a commercial mission fails... nobody can say in advance who is responsible... leaving ISRO to be pulled in by 'default'... A national space law... would also protect ISRO.\""
                    },
                    {
                        id: 919,
                        question: "The \"NGLV\" mentioned in the passage stands for:",
                        options: [
                            "(a) New Global Launch Vehicle.",
                            "(b) Next-Generation Launch Vehicle (a more powerful launch vehicle often called 'Bahubali').",
                            "(c) Nuclear Guided Launch Vehicle.",
                            "(d) National Geospatial Launch Vehicle."
                        ],
                        correctAnswer: 1,
                        explanation: "The text refers to \"NGLV, a more powerful launch vehicle (GSLV may be 'Bahubali').\" Note: While GSLV is Bahubali, NGLV is the Next-Generation successor mentioned in the prioritization list."
                    },
                    {
                        id: 920,
                        question: "The passage notes that investment in India's space sector \"fell sharply in 2024\". This reflects:",
                        options: [
                            "(a) The global lack of interest in space.",
                            "(b) Specific difficulties of financing hardware that is deployed on long horizons, requiring \"patient capital\" and production depth.",
                            "(c) The failure of the Chandrayaan-3 mission.",
                            "(d) The government banning foreign investment in space."
                        ],
                        correctAnswer: 1,
                        explanation: "The text links the fall in investment to \"global headwinds\" and the fact that building systems \"requires more production depth and higher capital\" (i.e., financing hardware is difficult/long-term)."
                    }
                ]
            }
        ]
    },
    10: {
        dayId: 10,
        title: "UPSC CSAT Practice Set - Jan 10 (Day 10)",
        description: "International Relations, Social Justice (Victim Dignity), Governance (Land Records)",
        vocabulary: [],
        passages: [
            {
                id: 1001,
                title: "Passage 1: International Relations (Somaliland & Geopolitics)",
                source: "International Relations (Somaliland & Geopolitics)",
                content: "Israel’s decision, in December 2025, to recognise Somaliland as an independent sovereign state marks a significant diplomatic rupture in the Horn of Africa. Beyond the immediate diplomatic fallout, the move carries wider risks. It may intensify Cold War-style proxy conflicts, provoke economic and political coercion, and further militarise an already volatile maritime corridor of the Red Sea. For Beijing, Somaliland sits at the intersection of three core interests: safeguarding the “One China” principle, securing the Red Sea corridor, and controlling the intensifying great-power competition in Africa.\n\nChina has condemned Israel’s decision as an endorsement of separatism, reiterating that Somaliland is an “inseparable part” of Somalia. This language is consistent with Beijing’s long-standing position, driven primarily by its domestic sensitivities over Taiwan. Yet, China may find it harder to reject Somaliland’s claim to sovereignty compared to many other contested territories. Unlike many separatist territories, Somaliland has maintained relative peace, built functioning institutions, and held competitive elections for over three decades. Its stability contrasts sharply with Somalia’s chronic insecurity.\n\nThe wider geopolitical context makes China’s dilemma even sharper. Ethiopia’s memorandum of understanding, in 2024, to recognise Somaliland in exchange for port access, growing U.S. congressional interest in Somaliland as a democratic partner, and tacit support from the UAE, all suggest that Israel’s move could trigger a geopolitical recalibration. Beijing thus faces an uncomfortable strategic trade-off. It is obliged to oppose Somaliland’s recognition to protect its Taiwan stance. Yet, excessive pressure on Somaliland risks driving Hargeisa further into the arms of China’s rivals. What is clear is that Somaliland is no longer a diplomatic footnote.",
                questions: [
                    {
                        id: 1001,
                        question: "According to the passage, why does Somaliland present a unique \"dilemma\" for China compared to other separatist territories?",
                        options: [
                            "(a) Because Somaliland has threatened to block Chinese ships in the Red Sea.",
                            "(b) Because Somaliland has maintained relative peace, functioning institutions, and competitive elections for decades, contrasting with Somalia’s instability, making it harder to dismiss its claims solely on internal legitimacy grounds.",
                            "(c) Because Somaliland officially recognizes Taiwan as an independent country.",
                            "(d) Because Somaliland has larger oil reserves than Somalia."
                        ],
                        correctAnswer: 1,
                        explanation: "The text contrasts Somaliland with other separatist territories, noting its \"relative peace, functioning institutions, and competitive elections\" make it harder for China to reject its claim solely on internal legitimacy grounds."
                    },
                    {
                        id: 1002,
                        question: "The passage suggests that Israel's recognition of Somaliland could trigger a \"geopolitical recalibration\" because:",
                        options: [
                            "(a) It aligns Israel with the African Union's policy of non-interference.",
                            "(b) It might encourage other actors like the U.S., UAE, and Ethiopia (who have strategic/port interests) to deepen ties with Somaliland, creating a rival security architecture near China's Djibouti base.",
                            "(c) It will force Somalia to declare war on Israel immediately.",
                            "(d) It will lead to the immediate closure of the Suez Canal."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions interest from the U.S., UAE, and Ethiopia, stating that \"Israel’s move could trigger a geopolitical recalibration... emergence of a rival security architecture near Djibouti.\""
                    },
                    {
                        id: 1003,
                        question: "What is the primary reason for China's opposition to Somaliland's independence, as highlighted in the text?",
                        options: [
                            "(a) China wants to colonize Somaliland itself.",
                            "(b) China fears that recognizing Somaliland would weaken its domestic \"One China\" principle regarding Taiwan.",
                            "(c) China believes Somaliland is a terrorist state.",
                            "(d) China has a defense treaty with Somalia that requires it to intervene."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly states Beijing's position is \"driven primarily by its domestic sensitivities over Taiwan\" and the \"One China\" principle."
                    },
                    {
                        id: 1004,
                        question: "The author implies that \"excessive pressure\" by China on Somaliland could be counter-productive because:",
                        options: [
                            "(a) It would cause Somaliland to attack China's base in Djibouti.",
                            "(b) It might drive Somaliland further into the arms of China’s rivals (Taiwan, Israel, Western powers), undermining China's influence in the Red Sea region.",
                            "(c) It would violate UN Security Council resolutions.",
                            "(d) It would bankrupt the Chinese economy."
                        ],
                        correctAnswer: 1,
                        explanation: "The text warns: \"excessive pressure on Somaliland risks driving Hargeisa further into the arms of China’s rivals.\""
                    },
                    {
                        id: 1005,
                        question: "The term \"diplomatic footnote\" used in the conclusion implies that:",
                        options: [
                            "(a) Somaliland was previously considered insignificant or marginal in global diplomacy but has now moved to the centre of great-power competition.",
                            "(b) Somaliland has been erased from diplomatic maps.",
                            "(c) Somaliland is only important for writing diplomatic history books.",
                            "(d) Israel made a mistake in its diplomatic correspondence."
                        ],
                        correctAnswer: 0,
                        explanation: "Context: \"Somaliland is no longer a diplomatic footnote. Israel’s recognition has pushed it to the centre of great-power competition.\""
                    }
                ]
            },
            {
                id: 1002,
                title: "Passage 2: Social Justice (Victim Dignity & Law)",
                source: "Social Justice (Victim Dignity & Law)",
                content: "The suicide of a young lady doctor in Phaltan, Maharashtra, in October 2025, was a wake-up call. The doctor had written a note on her hand alleging rape and harassment by a police official. Her passing highlights the 'first crime', which is the failure of administrative systems that disregarded her pleas. The 'second crime' is derived from this, which is the public character assassination that follows when a victim’s family begins their quest for justice. This secondary victimisation by society was evident in comments made by public functionaries detailing the victim’s private communication. These comments reveal how strongly the culture of questioning the victim persists.\n\nUnless India addresses this ‘second crime’ with the same legal and moral seriousness as the original offence, no amount of legislative changes will lead to genuine justice. Although the Bharatiya Nyaya Sanhita (BNS), 2023, aims to create a more women-centric justice system, the Phaltan case remains a stark reminder of the challenges. The core of the legal mandate to protect a victim’s dignity lies in the Criminal Law (Amendment) Act, 2013 (Nirbhaya Act). Specifically, Section 50 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, implies that a woman’s personal life or character cannot be used by the defence to argue that she “deserved it” or that her consent should be presumed.\n\nYet, public character assassination acts as an extra-judicial function of victim shaming. It creates a “social verdict” that tries the victim’s character. This act is a breach of the spirit of the judicial directions to treat the victim with fairness. Passing laws alone does not guarantee real justice; there is a large gap between policy and practice rooted in a patriarchal societal mindset. The solution lies in training police and judges to respond empathetically, and a society that stops questioning a victim’s character.",
                questions: [
                    {
                        id: 1006,
                        question: "What does the author mean by the \"second crime\" in the context of the Phaltan case?",
                        options: [
                            "(a) The failure of the police to register an FIR immediately.",
                            "(b) The subsequent suicide of the victim due to police inaction.",
                            "(c) The public character assassination and secondary victimisation of the victim by society and officials after the original offence.",
                            "(d) The harassment of the victim's family by the accused."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines the 'second crime' as: \"the public character assassination that follows... secondary victimisation by society... acts as an extra-judicial function of victim shaming.\""
                    },
                    {
                        id: 1007,
                        question: "According to the passage, Section 50 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, provides which specific protection?",
                        options: [
                            "(a) It mandates the death penalty for all rapists.",
                            "(b) It prevents the defence from using a woman's personal life, character, or history to argue that her consent should be presumed or that she \"deserved it\".",
                            "(c) It allows the victim to remain anonymous during the trial.",
                            "(d) It requires the trial to be completed within 60 days."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states Section 50 implies \"a woman’s personal life... cannot be used by the defence to argue that she 'deserved it' or that her consent should be presumed.\""
                    },
                    {
                        id: 1008,
                        question: "The passage argues that \"passing laws alone does not guarantee real justice\" because:",
                        options: [
                            "(a) The laws are not strict enough.",
                            "(b) There is a large gap between progressive policy and a practice rooted in a patriarchal societal mindset that continues to judge victims.",
                            "(c) The judiciary is corrupt and inefficient.",
                            "(d) Victims prefer out-of-court settlements."
                        ],
                        correctAnswer: 1,
                        explanation: "The text notes the irony: \"while the law has moved forward, the societal mindset is still rooted in a patriarchal past.\""
                    },
                    {
                        id: 1009,
                        question: "The comments made by public functionaries detailing the victim's private communications are criticized in the passage as:",
                        options: [
                            "(a) Necessary for a transparent investigation.",
                            "(b) An \"institutional act of de facto character assassination\" that breaches the spirit of judicial directions on dignity.",
                            "(c) A brave attempt to reveal the truth.",
                            "(d) A legal requirement under the new BNS code."
                        ],
                        correctAnswer: 1,
                        explanation: "The text calls it a \"breach of the spirit of the judicial directions... It is an institutional act of de facto character assassination.\""
                    },
                    {
                        id: 1010,
                        question: "What is the central contradiction highlighted in the Phaltan case?",
                        options: [
                            "(a) The contradiction between the doctor's suicide note and the police report.",
                            "(b) The contradiction between the strong judicial/legal mandate to protect victim dignity and the failed social behaviour/administrative response.",
                            "(c) The contradiction between the state government and the central government.",
                            "(d) The contradiction between the medical evidence and the forensic report."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes the \"profound contradiction between this strong judicial mandate [to protect dignity] and failed social behaviour.\""
                    }
                ]
            },
            {
                id: 1003,
                title: "Passage 3: Governance (Land Records & Sada Bainama)",
                source: "Governance (Land Records & Sada Bainama)",
                content: "Decades-old Sada Bainamas — informal, plain-paper land agreements — have left over nine lakh farmers in Telangana without titles as procedural hurdles and record discrepancies stall regularisation. Farmers find themselves trapped in a legal limbo over 22 guntas of agricultural land their fathers had bought in the early 1980s through a ‘Sada Bainama’. After inheriting it, attempts to regularise the land have stalled, with revenue officials insisting on an affidavit from the legal heirs of the original seller, an almost impossible condition that has left many waiting indefinitely.\n\nThe result is a cruel paradox: farmers who have cultivated land for decades appear in official “enjoyment columns”, are still denied ownership. This lack of title prevents them from accessing welfare schemes like Rythu Bharosa (investment support) or bank loans. The launch of the Dharani portal in 2020 aimed to simplify land records but often ended up freezing the status quo, failing to accommodate these historical informal transactions.\n\nNeighboring Andhra Pradesh’s decision to order a resurvey and extend regularisation is cited as an example to follow. In Telangana, officials verify possession but are held back by the lack of clear guidelines or fear of litigation. A ‘Gram Sabha’ to be conducted to ascertain facts regarding the sale of land through Sada Bainamas has been proposed. Another expert suggests that notices could be issued to both sellers and buyers, enabling affidavits to be furnished publicly, easing verification. If implemented, such measures are expected not only to unlock regularisation but also reduce land disputes that have long plagued Telangana.",
                questions: [
                    {
                        id: 1011,
                        question: "The term \"Sada Bainama\" refers to:",
                        options: [
                            "(a) A government-issued land title deed printed on stamp paper.",
                            "(b) An informal land sale agreement executed on plain paper, often used in the past but lacking official registration.",
                            "(c) A tax receipt given to farmers for selling crops.",
                            "(d) A special loan scheme for landless labourers."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines them as \"informal, plain-paper land agreements.\""
                    },
                    {
                        id: 1012,
                        question: "What is the \"cruel paradox\" faced by farmers mentioned in the passage?",
                        options: [
                            "(a) They have title deeds but are not allowed to cultivate the land.",
                            "(b) They cultivate the land and appear in \"enjoyment columns\" (possession records), yet are denied legal ownership/title, blocking access to welfare and loans.",
                            "(c) They receive welfare schemes like Rythu Bharosa but cannot sell their crops.",
                            "(d) They are forced to sell their land to the government at low prices."
                        ],
                        correctAnswer: 1,
                        explanation: "The paradox is: \"farmers who have cultivated land for decades... appear in official 'enjoyment columns', are still denied ownership.\""
                    },
                    {
                        id: 1013,
                        question: "Why has the requirement for an \"affidavit from the legal heirs of the original seller\" become a roadblock?",
                        options: [
                            "(a) Because the legal heirs demand too much money.",
                            "(b) Because for transactions that happened decades ago (e.g., 1980s), locating legal heirs of the original seller is often impossible or they refuse to cooperate.",
                            "(c) Because affidavits are not legal documents in Telangana.",
                            "(d) Because the farmers do not know how to write."
                        ],
                        correctAnswer: 1,
                        explanation: "Inferred from the text saying it is \"an almost impossible condition\" for land bought in the early 1980s, leaving many waiting indefinitely."
                    },
                    {
                        id: 1014,
                        question: "The passage suggests that the \"Dharani portal\" launched in 2020:",
                        options: [
                            "(a) Successfully resolved all Sada Bainama issues immediately.",
                            "(b) Simplified land records but often ended up freezing the status quo, failing to accommodate historical informal transactions like Sada Bainamas.",
                            "(c) Was declared illegal by the Supreme Court.",
                            "(d) Was used only for urban land records, not agricultural."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states Dharani \"aimed to simplify... but often ended up freezing the status quo, failing to accommodate these historical informal transactions.\""
                    },
                    {
                        id: 1015,
                        question: "Which solution is proposed in the passage to resolve the verification issue?",
                        options: [
                            "(a) Conducting a 'Gram Sabha' to ascertain facts regarding the sale and issuing public notices to enable affidavit furnishing.",
                            "(b) Evicting all farmers who do not have registered deeds.",
                            "(c) Asking the farmers to pay a penalty equal to the land value.",
                            "(d) Waiting for the original sellers to return from abroad."
                        ],
                        correctAnswer: 0,
                        explanation: "The text mentions: \"We proposed a Gram Sabha to be conducted... notices could be issued... enabling affidavits to be furnished publicly.\""
                    }
                ]
            }
        ]
    },
    11: {
        dayId: 11,
        title: "UPSC CSAT Practice Set - Jan 11 (Day 11)",
        description: "Frontier Science (Quantum), Plant Biology, Environment (Grasslands), Public Health",
        vocabulary: [],
        passages: [
            {
                id: 1101,
                title: "Passage 1: Frontier Science (Quantum Physics)",
                source: "Frontier Science (Quantum Physics)",
                content: "Imagine a diamond. You probably thought of a clear and flawless gemstone used in jewellery. But to a physicist, a perfect diamond might actually be boring. Something magical happens when the diamond is just a little 'broken'. For decades, scientists have been fascinated by a type of defect in the diamond crystal lattice called the nitrogen-vacancy (NV) centre. A diamond is a rigid grid of carbon atoms; an NV centre occurs where one carbon atom is replaced by a nitrogen atom and the spot next to it is made vacant.\n\nThe NV centre behaves like a single atom trapped in a solid cage, giving it remarkable abilities. The centre has a property called spin. Think of it as a small magnetic arrow. Because the NV centre is trapped inside the diamond structure, it is shielded from much of the noise that would otherwise scramble its spin. This helps the spin stay coherent for longer. This is useful because scientists can then measure how the spin's internal energy levels respond to the environment, including very weak magnetic or electric fields. This makes NV centres some of the world's smallest and most precise sensors.\n\nRecently, researchers from Austria and Japan packed about 9 trillion NV centres into a diamond and placed it inside a superconducting microwave cavity. They observed a phenomenon called 'superradiance'. Usually, when excited spins release energy, they do so randomly (fluorescence). But here, the spins synchronised, emitting a quick, bright burst of microwave light. This suggests that packing NV centres could pave the way for a 'superradiant maser' (microwave laser) or ultra-stable frequency sources for time-keeping. This challenges the notion that defects are always detrimental; in the quantum world, a 'broken' diamond is a sensor and a source of coherent radiation.",
                questions: [
                    {
                        id: 1101,
                        question: "According to the passage, why is the \"nitrogen-vacancy (NV) centre\" in a diamond considered scientifically valuable?",
                        options: [
                            "(a) Because it makes the diamond appear clearer and more flawless for jewellery.",
                            "(b) Because it shields the spin from external noise, allowing it to stay coherent longer and act as a precise sensor for weak fields.",
                            "(c) Because it turns the diamond into a superconductor at room temperature.",
                            "(d) Because it replaces all carbon atoms with nitrogen, creating a new element."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"shielded from much of the noise... stay coherent for longer... measure how the spin's internal energy levels respond... makes NV centres some of the world's smallest and most precise sensors.\""
                    },
                    {
                        id: 1102,
                        question: "The passage describes a recent experiment involving \"superradiance\". What does this phenomenon entail in the context of NV centres?",
                        options: [
                            "(a) The random emission of green light by individual atoms.",
                            "(b) The absorption of all microwave energy by the diamond.",
                            "(c) The synchronised release of energy by trillions of spins in a bright, quick burst of microwave light.",
                            "(d) The shattering of the diamond crystal due to intense heat."
                        ],
                        correctAnswer: 2,
                        explanation: "The text describes superradiance as: \"spins synchronised, emitting a quick, bright burst of microwave light.\""
                    },
                    {
                        id: 1103,
                        question: "What is the \"defect\" specifically referred to in the passage?",
                        options: [
                            "(a) A crack on the surface of the diamond.",
                            "(b) A spot in the crystal lattice where a carbon atom is replaced by a nitrogen atom and the adjacent spot is vacant.",
                            "(c) The presence of radioactive isotopes in the diamond.",
                            "(d) A diamond that has been cut incorrectly."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines the defect: \"an NV centre occurs where one carbon atom is replaced by a nitrogen atom and the spot next to it is made vacant.\""
                    },
                    {
                        id: 1104,
                        question: "Based on the text, what is a potential future application of the \"superradiant maser\" technology?",
                        options: [
                            "(a) Cutting steel in industrial factories.",
                            "(b) Creating ultra-stable frequency sources for precision time-keeping.",
                            "(c) replacing all fibre optic cables.",
                            "(d) Generating electricity for households."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"pave the way for a 'superradiant maser'... or ultra-stable frequency sources for time-keeping.\""
                    },
                    {
                        id: 1105,
                        question: "The author uses the phrase \"a perfect diamond might actually be boring\" to imply that:",
                        options: [
                            "(a) Flawless diamonds have no market value.",
                            "(b) Scientific utility often arises from anomalies or defects (like NV centres) rather than structural perfection.",
                            "(c) Physicists prefer coal over diamonds.",
                            "(d) Perfect diamonds cannot interact with light."
                        ],
                        correctAnswer: 1,
                        explanation: "The text contrasts the \"boring\" perfect diamond with the \"magical\" things that happen when it is \"broken\" (defective), implying scientific value lies in the defect."
                    }
                ]
            },
            {
                id: 1102,
                title: "Passage 2: Plant Biology (Phyto-acoustics)",
                source: "Plant Biology (Phyto-acoustics)",
                content: "Do you play music to your plants? This was asked of the famous plant biologist James Wong. While plants have neither ears nor brains, research shows they can detect vibrations. In one study, a mustard family plant, exposed to the sound of caterpillars chewing, produced higher levels of bitter toxins as a defence. Remarkably, these plants distinguished the vibrations of leaf munchers from those of wind or insect mating calls.\n\nWhat has the latest research into this evergreen question shown? According to the California Learning Resource Network, the germination of a plant seed is affected when sound is heard (sonic stimulation). Interestingly, the specific frequency range increases water uptake and seed metabolism. Natural sounds, for example, the frequency range of soothing tones and classical music, seem to affect gene expression and hormone regulation. In contrast, dissonant sounds such as explosives or crackers retard seed growth.\n\nAn article in Yale Environmental Review (2024) pointed out that using music to enhance crop growth is fascinating as well as crucial for sustainable agriculture. In 2015, researchers reported playing light classical and meditation music to marigold and chickpea plants; they grew taller and stronger than those exposed to no music. In 2022, K.R. Shivanna highlighted that these aspects of 'psychoacoustics' were mentioned by the physicist J.C. Bose long ago. Instead of blasting crackers during festivals which hinders plant life, playing soothing music could actually help plants grow better.",
                questions: [
                    {
                        id: 1106,
                        question: "The passage cites a study on the \"mustard family plant\" to demonstrate that:",
                        options: [
                            "(a) Plants enjoy classical music more than rock music.",
                            "(b) Plants can distinguish specific threat-related vibrations (caterpillars chewing) from benign sounds (wind) and activate defence mechanisms.",
                            "(c) Plants have ears located in their roots.",
                            "(d) Caterpillars are attracted to the sound of wind."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says the plant \"distinguished the vibrations of leaf munchers from those of wind... activating defences.\""
                    },
                    {
                        id: 1107,
                        question: "According to the text, how does \"sonic stimulation\" (specific frequency ranges) primarily affect seed germination?",
                        options: [
                            "(a) It increases water uptake and seed metabolism.",
                            "(b) It prevents the seed from absorbing water.",
                            "(c) It changes the color of the flower.",
                            "(d) It creates a vacuum around the seed."
                        ],
                        correctAnswer: 0,
                        explanation: "The text states: \"specific frequency range increases water uptake and seed metabolism.\""
                    },
                    {
                        id: 1108,
                        question: "The passage distinguishes between the effects of \"natural/soothing sounds\" and \"dissonant sounds\". What is the difference?",
                        options: [
                            "(a) Natural sounds retard growth, while dissonant sounds accelerate it.",
                            "(b) Natural sounds affect gene expression/hormone regulation positively, while dissonant sounds (explosives) retard seed growth.",
                            "(c) Both have the exact same effect on plant height.",
                            "(d) Plants ignore dissonant sounds completely."
                        ],
                        correctAnswer: 1,
                        explanation: "The text contrasts natural/soothing tones (affect gene expression/hormone regulation) with dissonant sounds (explosives) which \"retard seed growth.\""
                    },
                    {
                        id: 1109,
                        question: "Who is the Indian scientist mentioned in the text as having highlighted aspects of \"psychoacoustics\" long ago?",
                        options: [
                            "(a) C.V. Raman",
                            "(b) Homi Bhabha",
                            "(c) J.C. Bose",
                            "(d) Vikram Sarabhai"
                        ],
                        correctAnswer: 2,
                        explanation: "The text mentions: \"highlighted these aspects of 'psychoacoustics' were mentioned by the physicist J.C. Bose long ago.\""
                    },
                    {
                        id: 1110,
                        question: "The overarching argument for using music in agriculture, as presented in the passage, is:",
                        options: [
                            "(a) To entertain the farmers while they work.",
                            "(b) To reduce environmental harm and support sustainable agriculture by enhancing crop growth through non-chemical means.",
                            "(c) To keep birds away from the crops.",
                            "(d) To increase the price of the vegetables."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"sustainable agriculture... playing soothing music could actually help plants grow better\" (reducing environmental harm implied by \"Instead of blasting crackers\")."
                    }
                ]
            },
            {
                id: 1103,
                title: "Passage 3: Environment (Grasslands & Climate)",
                source: "Environment (Grasslands & Climate)",
                content: "The United Nations has declared 2026 to be the 'International Year for Rangelands and Pastoralists'. In 2022, a group of scientists wrote an open letter urging the parties of the UN Framework Convention on Climate Change (UNFCCC) to broaden their goals to be inclusive of all biomes on earth, but especially grasslands and savannahs. Their letter warned that even though savannahs are potentially better carbon sinks, forests have hogged the limelight in global climate negotiations. The recent announcement of the Tropical Forest Forever Facility (TFFF) at COP30 was exciting, but it failed to include other major biomes like the Cerrado or the Pantanal.\n\n\"Everyone is facing the effects of climate change, but the desert people are facing some of the harshest effects,\" said Samantha Murray of the Indigenous Desert Alliance. Grasslands are one of the most threatened ecosystems in the world. They have suffered rapid habitat loss due to conversion to forests and plantations, the spread of invasive species, and the extraction of fossil fuels. In addition, many governments have suppressed indigenous land management techniques such as controlled fires.\n\nFor India, recognizing grasslands is crucial. A white paper by the Ashoka Trust for Research in Ecology and the Environment (ATREE) argued that grasslands must be recognized in the country's Nationally Determined Contributions (NDCs). While the Union Environment Ministry considers grasslands for afforestation purposes, the Ministry of Rural Development publishes the \"wasteland atlas of India\" that often includes grasslands. By recognizing grasslands as a crucial carbon sink, the Indian government can move away from forest-focused carbon sequestration schemes and give its own climate mitigation efforts a boost.",
                questions: [
                    {
                        id: 1111,
                        question: "What is the primary grievance raised by scientists regarding global climate negotiations and funds like the TFFF?",
                        options: [
                            "(a) They believe forests are not important for climate change.",
                            "(b) They argue that forests have \"hogged the limelight,\" leading to the exclusion/neglect of other critical biomes like grasslands and savannahs which are also effective carbon sinks.",
                            "(c) They want the UN to stop declaring International Years.",
                            "(d) They believe the TFFF fund is too small to be effective."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions the letter warned that \"forests have hogged the limelight... TFFF... failed to include other major biomes like the Cerrado or the Pantanal.\""
                    },
                    {
                        id: 1112,
                        question: "The passage mentions a conflict in Indian policy regarding grasslands. What is this conflict?",
                        options: [
                            "(a) The Ministry of Environment wants to burn grasslands, while the Ministry of Rural Development wants to save them.",
                            "(b) The Environment Ministry views them for afforestation, while the Rural Development Ministry classifies them as \"wastelands,\" leading to their neglect as unique ecosystems.",
                            "(c) The government has banned all grazing in grasslands.",
                            "(d) Grasslands are fully protected under the Forest Rights Act."
                        ],
                        correctAnswer: 1,
                        explanation: "The text notes the Environment Ministry considers them for afforestation, while Rural Development publishes a \"wasteland atlas... that often includes grasslands,\" indicating conflicting/neglectful classification."
                    },
                    {
                        id: 1113,
                        question: "According to the text, why are grasslands considered \"one of the most threatened ecosystems\"?",
                        options: [
                            "(a) Because of the excessive growth of trees.",
                            "(b) Due to conversion to forests/plantations, spread of invasive species, extraction of fossil fuels, and suppression of indigenous management (controlled fires).",
                            "(c) Because animals refuse to graze on them.",
                            "(d) Because they contribute to global warming."
                        ],
                        correctAnswer: 1,
                        explanation: "The text lists causes: \"conversion to forests... spread of invasive species... extraction of fossil fuels... suppressed indigenous... controlled fires.\""
                    },
                    {
                        id: 1114,
                        question: "The author suggests that including grasslands in India's NDCs (Nationally Determined Contributions) would:",
                        options: [
                            "(a) Reduce India's carbon credit rating.",
                            "(b) Boost climate mitigation efforts by diversifying beyond forest-focused sequestration.",
                            "(c) Force India to import grass from Africa.",
                            "(d) Violate the Paris Agreement."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"By recognizing grasslands as a crucial carbon sink... move away from forest-focused... give its own climate mitigation efforts a boost.\""
                    },
                    {
                        id: 1115,
                        question: "The \"Indigenous Desert Alliance\" is mentioned to highlight:",
                        options: [
                            "(a) The opposition to solar power in deserts.",
                            "(b) The harsh effects of climate change on desert people and the importance of managing vast desert grasslands.",
                            "(c) A political party in Australia.",
                            "(d) The need for more water in deserts."
                        ],
                        correctAnswer: 1,
                        explanation: "Samantha Murray of the Alliance says \"desert people are facing some of the harshest effects,\" highlighting the human/ecological dimension."
                    }
                ]
            },
            {
                id: 1104,
                title: "Passage 4: Public Health (Privatisation & Policy)",
                source: "Public Health (Privatisation & Policy)",
                content: "The state of healthcare in India has repeatedly been in the news. From fake medicines to unethical clinical trials, countless people have suffered. At the same time, risk factors for disease are steadily rising due to policy gaps and systemic failures. The consumption of ultra-processed foods is driving an epidemic of non-communicable diseases. Access to good health remains a privilege that only a few can afford. Privatisation further compounds the problem. With private equity increasingly driving India's private healthcare industry, doctors are now expected to meet monthly targets, much like in any profit-driven sector. Through schemes such as AB-PMJAY and public-private partnerships, public money is increasingly shunted to the private sector.\n\nPrivatisation has also impacted medical education. With most private medical colleges charging upwards of ₹40 lakhs for undergraduate training, doctors are forced to shift their focus from understanding the social causes of disease to earning enough to recover the massive investment. Rudolf Virchow, a German pathologist, argued that \"medicine is a social science\" and that \"politics is nothing else but medicine on a large scale.\" He recognized that disease was not merely a biological event but a political and social outcome shaped by poverty and exclusion.\n\nIn India, the physician's role has never been confined to diagnosis and treatment alone. Doctors occupy a unique position of trust and moral authority. They must ask why outpatient departments are crowded with patients presenting advanced stages of disease; why medicines are unaffordable; why kidney failure is rising. It is not neutrality but a conscious choice to forgo influence. In a deeply unequal society, doctors can amplify lived realities. Their social standing combines with ethical obligation to act as agents of social change.",
                questions: [
                    {
                        id: 1116,
                        question: "The author cites Rudolf Virchow's statement that \"medicine is a social science\" to argue that:",
                        options: [
                            "(a) Doctors should study sociology instead of biology.",
                            "(b) Disease is not just a biological event but a result of political and social factors like poverty and exclusion.",
                            "(c) Medicine should be free for everyone.",
                            "(d) Politics should be banned in hospitals."
                        ],
                        correctAnswer: 1,
                        explanation: "The text quotes Virchow: \"disease was not merely a biological event but a political and social outcome shaped by poverty and exclusion.\""
                    },
                    {
                        id: 1117,
                        question: "What is the \"double burden\" of privatisation described in the passage?",
                        options: [
                            "(a) Private hospitals are too clean and too expensive.",
                            "(b) It drives profit-driven targets in healthcare (shunting public money to private sectors) and makes medical education expensive, forcing doctors to focus on earnings rather than social causes.",
                            "(c) It forces patients to buy insurance they don't need.",
                            "(d) It reduces the number of private medical colleges."
                        ],
                        correctAnswer: 1,
                        explanation: "The text connects privatisation to \"doctors expected to meet monthly targets\" (profit) and \"medical colleges charging upwards of ₹40 lakhs... forced to shift their focus... to earning enough.\""
                    },
                    {
                        id: 1118,
                        question: "The passage criticizes the current public health approach for:",
                        options: [
                            "(a) Focusing too much on preventing diseases.",
                            "(b) Shunting public money to the private sector through schemes like AB-PMJAY instead of strengthening the public system.",
                            "(c) Banning private practice for government doctors.",
                            "(d) Importing too many foreign medicines."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Through schemes such as AB-PMJAY... public money is increasingly shunted to the private sector.\""
                    },
                    {
                        id: 1119,
                        question: "According to the author, why do doctors have a \"moral authority\" to act as agents of social change?",
                        options: [
                            "(a) Because they are the wealthiest members of society.",
                            "(b) Because they occupy a unique position of trust, witness human suffering firsthand (policy failures), and can amplify the lived realities of those who lack voice.",
                            "(c) Because the government has appointed them as political leaders.",
                            "(d) Because they have studied political science."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Doctors occupy a unique position of trust... witness firsthand... how policy decisions translate into human suffering... amplify lived realities.\""
                    },
                    {
                        id: 1120,
                        question: "Which of the following is identified as a driver of the \"epidemic of non-communicable diseases\" in the text?",
                        options: [
                            "(a) The consumption of ultra-processed foods.",
                            "(b) The lack of vaccination programs.",
                            "(c) The overuse of antibiotics.",
                            "(d) The genetic mutations in the Indian population."
                        ],
                        correctAnswer: 0,
                        explanation: "The text lists \"consumption of ultra-processed foods\" as a driver."
                    }
                ]
            }
        ]
    },
    12: {
        dayId: 12,
        title: "UPSC CSAT Practice Set - Jan 12 (Day 12)",
        description: "Climate Policy (Article 6), Social Justice (ECD), Governance (Higher Ed), Energy Science",
        vocabulary: [],
        passages: [
            {
                id: 1201,
                title: "Passage 1: Climate Policy (Article 6)",
                source: "Climate Policy (Article 6)",
                content: "Carbon markets were the sticking point of COP29. After much wrangling, countries agreed on the rules for Article 6.4 of the Paris Agreement, which creates a centralized global carbon market. This mechanism allows countries to trade carbon credits to meet their climate targets (NDCs). A project developer in India can reduce emissions (e.g., by planting trees) and sell the credit to a company in Germany. The key issue was 'methodologies'—how to calculate these reductions. Critics argued the rushed approval bypassed scientific scrutiny, potentially legitimising 'junk credits' that don't represent real reductions. However, proponents argue it operationalises a stalled market essential for financing climate action in the Global South.\n\nAnother contentious element was Article 6.2, which allows bilateral trading between countries. Here, the rules on transparency were diluted. Countries can now trade credits with fewer reporting requirements, raising fears of 'double counting' (where both the seller and buyer claim the emission reduction). This undermines the integrity of the Paris Agreement. If a country sells a credit, it must 'correspondingly adjust' its own simplistic tally to avoid claiming it too. The final text, however, allows for confidentiality clauses that might cloak these adjustments in secrecy. For India, a major potential seller, these rules bring opportunities for finance but also risks of selling off low-hanging fruit (cheap abatements) and being left with expensive options to meet its own future targets.",
                questions: [
                    {
                        id: 1201,
                        question: "The \"corresponding adjustment\" mechanism mentioned in the passage is designed to prevent:",
                        options: [
                            "(a) The price of carbon credits from falling too low.",
                            "(b) Rich countries from buying all the credits.",
                            "(c) \"Double counting\", where both the selling country and the buying country claim the same emission reduction towards their climate targets.",
                            "(d) Terrorism financing through carbon markets."
                        ],
                        correctAnswer: 2,
                        explanation: "The text explains: \"If a country sells a credit, it must 'correspondingly adjust' its own simplistic tally to avoid claiming it too (double counting).\""
                    },
                    {
                        id: 1202,
                        question: "What is the primary criticism levied against the approval of Article 6.4 rules mentioned in the text?",
                        options: [
                            "(a) It creates a market that is too small.",
                            "(b) The rushed approval bypassed scientific scrutiny on methodologies, potentially legitimising \"junk credits\" that don't represent real emission reductions.",
                            "(c) It prevents private companies from participating.",
                            "(d) It forces developing countries to pay for carbon credits."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Critics argued the rushed approval bypassed scientific scrutiny, potentially legitimising 'junk credits'.\""
                    },
                    {
                        id: 1203,
                        question: "For India, the operationalisation of Article 6 presents which specific risk alongside the opportunity for finance?",
                        options: [
                            "(a) The risk of losing territory.",
                            "(b) The risk of selling off \"low-hanging fruit\" (cheap abatements) now and being left with expensive options to meet its own future targets.",
                            "(c) The risk of being sanctioned by the UN.",
                            "(d) The risk of angering the US government."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes with the risk for India: \"risks of selling off low-hanging fruit... being left with expensive options to meet its own future targets.\""
                    },
                    {
                        id: 1204,
                        question: "Article 6.2 of the Paris Agreement, as described in the passage, deals with:",
                        options: [
                            "(a) A centralized global carbon market supervised by the UN.",
                            "(b) Bilateral trading of carbon credits between countries.",
                            "(c) Funding for climate adaptation in island nations.",
                            "(d) Banning coal power plants."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"Article 6.2, which allows bilateral trading between countries.\""
                    },
                    {
                        id: 1205,
                        question: "The term \"junk credits\" refers to:",
                        options: [
                            "(a) Credits generated from recycling electronic waste.",
                            "(b) Credits that do not represent real or permanent emission reductions but are sold anyway.",
                            "(c) Credits that are very expensive.",
                            "(d) Credits bought by junk food companies."
                        ],
                        correctAnswer: 1,
                        explanation: "Inferred from \"don't represent real reductions\" and the context of \"bypassed scientific scrutiny\" resulting in false claims."
                    }
                ]
            },
            {
                id: 1202,
                title: "Passage 2: Social Justice (Early Childhood Development)",
                source: "Social Justice (Early Childhood Development)",
                content: "Neuroscience has established that 85% of brain development occurs before the age of six. This period, known as Early Childhood Care and Education (ECCE), is foundational. Yet, in India, this stage receives the least policy attention and funding compared to higher education. The 'anganwadi' system, designed to deliver integrated services (nutrition, health, pre-school education), is overburdened. Anganwadi workers, often paid honorariums lower than minimum wage, are expected to be teachers, health workers, and nutritionists all at once.\n\nThe National Education Policy (NEP) 2020 envisions universalising ECCE by 2030. However, the reality on the ground is grim. A recent survey showed that while enrollment is high, the 'education' component is often missing or reduced to rote learning of alphabets. Play-based learning, crucial for cognitive and socio-emotional development, is absent in most centers due to lack of training and resources. Furthermore, the private sector has mushroomed with unregulated 'play schools' that often impose age-inappropriate academic pressure on toddlers.\n\nInvesting in ECCE is not just a moral imperative but an economic one. James Heckman, a Nobel laureate, demonstrated that the return on investment in early childhood is higher than in any other stage of education—yielding up to 13% annually. It reduces future crime, increases employability, and breaks cycles of poverty. India needs to professionalise the anganwadi cadre, recognizing them as teachers and paying them accordingly, rather than treating them as voluntary workers. Without fixing the foundation, the superstructure of the education system will remain shaky.",
                questions: [
                    {
                        id: 1206,
                        question: "The \"Heckman Curve\" or the economic argument by James Heckman cited in the passage suggests that:",
                        options: [
                            "(a) Higher education yields the highest return on investment.",
                            "(b) Vocational training is the most profitable investment.",
                            "(c) Investment in early childhood education yields the highest returns (up to 13%) by reducing future crime and increasing employability.",
                            "(d) Investing in education is a waste of money."
                        ],
                        correctAnswer: 2,
                        explanation: "The text credits James Heckman: \"return on investment in early childhood is higher than in any other stage... yielding up to 13% annually.\""
                    },
                    {
                        id: 1207,
                        question: "What is the primary criticism of the current status of 'Anganwadi workers' in the passage?",
                        options: [
                            "(a) They are too many in number.",
                            "(b) They are lazy and do not work.",
                            "(c) They are overburdened, expected to perform multiple roles (teacher/health worker) while being paid low honorariums instead of being recognized and paid as professional teachers.",
                            "(d) They lack political representation."
                        ],
                        correctAnswer: 2,
                        explanation: "The text notes: \"overburdened... paid honorariums lower than minimum wage... expected to be teachers, health workers... treating them as voluntary workers.\""
                    },
                    {
                        id: 1208,
                        question: "According to the passage, why is \"play-based learning\" often absent in Anganwadi centers?",
                        options: [
                            "(a) Because children do not like to play.",
                            "(b) Due to lack of training for workers and lack of resources.",
                            "(c) Because the government has banned playing.",
                            "(d) Because parents prefer rote learning."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Play-based learning... absent in most centers due to lack of training and resources.\""
                    },
                    {
                        id: 1209,
                        question: "The passage identifies a problem with the private sector in early childhood education. What is it?",
                        options: [
                            "(a) Private schools are too cheap.",
                            "(b) Private 'play schools' are unregulated and often impose age-inappropriate academic pressure on toddlers.",
                            "(c) Private schools refuse to admit poor children.",
                            "(d) Private schools do not teach English."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions: \"private sector has mushroomed with unregulated 'play schools' that often impose age-inappropriate academic pressure.\""
                    },
                    {
                        id: 1210,
                        question: "The National Education Policy (NEP) 2020 aims to achieve which goal by 2030 regarding this sector?",
                        options: [
                            "(a) Privatise all Anganwadis.",
                            "(b) Universalising Early Childhood Care and Education (ECCE).",
                            "(c) Close down all pre-schools.",
                            "(d) Make ECCE compulsory for voting rights."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly states: \"NEP 2020 envisions universalising ECCE by 2030.\""
                    }
                ]
            },
            {
                id: 1203,
                title: "Passage 3: Governance (Higher Education Bill)",
                source: "Governance (Higher Education Bill)",
                content: "The proposed Higher Education Commission of India (HECI) Bill aims to replace multiple regulators like the UGC and AICTE with a single overarching body. This centralization is pitched as a move to reduce red tape and promote autonomy. However, the devil lies in the details. Critics fear that while it removes 'inspection raj', it might introduce 'centralised control'. The Bill proposes to strip the regulator of funding powers, moving them to the Ministry of Education. This separation of academic regulation from funding could erode the autonomy of universities, making them more susceptible to political pressure.\n\nFurthermore, the focus on 'learning outcomes' and 'employability' as metrics for regulation is debated. While accountability is necessary, a utilitarian view of education may undermine the liberal arts and pure sciences, which do not have immediate commercial value. The Bill also emphasizes online education and the Academic Bank of Credits (ABC). While flexible, there is a risk of commodifying education, where degrees become a collection of credits rather than a holistic learning experience. The federal structure is another concern; education is in the Concurrent List, yet states feel the HECI centralizes power, bypassing state-level higher education councils.",
                questions: [
                    {
                        id: 1211,
                        question: "What is the primary structural change proposed by the HECI Bill mentioned in the passage?",
                        options: [
                            "(a) Increasing the number of regulators.",
                            "(b) Replacing multiple regulators (UGC, AICTE) with a single overarching body (HECI).",
                            "(c) Banning private universities.",
                            "(d) Making all education free."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"replace multiple regulators like the UGC and AICTE with a single overarching body.\""
                    },
                    {
                        id: 1212,
                        question: "Why do critics insist that stripping the regulator of funding powers is problematic?",
                        options: [
                            "(a) Because the Ministry of Education has no money.",
                            "(b) Because separating academic regulation from funding (moving funding to the Ministry) could erode university autonomy and increase political susceptibility.",
                            "(c) Because the UGC was corrupt.",
                            "(d) Because banks handle funding better."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"separation of academic regulation from funding could erode the autonomy of universities, making them more susceptible to political pressure.\""
                    },
                    {
                        id: 1213,
                        question: "The passage expresses concern about the \"utilitarian view of education\" (employability metrics). What is the specific fear?",
                        options: [
                            "(a) That students will get too many jobs.",
                            "(b) That it may undermine liberal arts and pure sciences which lack immediate commercial value.",
                            "(c) That engineering colleges will close down.",
                            "(d) That tuition fees will increase."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"utilitarian view... may undermine the liberal arts and pure sciences, which do not have immediate commercial value.\""
                    },
                    {
                        id: 1214,
                        question: "The \"Academic Bank of Credits (ABC)\" serves to:",
                        options: [
                            "(a) Provide loans to students.",
                            "(b) Allow flexibility in accumulating credits, though with a risk of commodifying education.",
                            "(c) Print textbooks.",
                            "(d) Conduct entrance exams."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions ABC allows flexibility (implied by \"While flexible\") but risks \"degrees become a collection of credits... commodifying education.\""
                    },
                    {
                        id: 1215,
                        question: "Why is the federal structure a concern in the context of HECI?",
                        options: [
                            "(a) Because education is in the Union List.",
                            "(b) Because education is in the Concurrent List, and states fear HECI centralizes power, bypassing state councils.",
                            "(c) Because states want to abolish universities.",
                            "(d) Because the Constitution bans central regulators."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"education is in the Concurrent List, yet states feel the HECI centralizes power, bypassing state-level... councils.\""
                    }
                ]
            },
            {
                id: 1204,
                title: "Passage 4: Energy Science (Solar vs Biofuels)",
                source: "Energy Science (Solar vs Biofuels)",
                content: "A study published in 'Nature' compared the land-use efficiency of solar panels versus biofuels for powering vehicles. The results were staggering. Photovoltaic (PV) cells are far more efficient at converting sunlight into usable energy than plants are. To power a car for the same distance, biofuel crops (like corn or sugarcane) require up to 40 to 50 times more land than a solar farm charging an electric vehicle (EV). This is because plants have a low efficiency of photosynthesis (around 1-2%), whereas modern solar panels have efficiencies of 20% or more, and electric motors are efficient at using electricity.\n\nThis finding has massive implications for land scarcity in densely populated countries like India. Diverting agricultural land for biofuel crops competes directly with food security and can drive deforestation. In contrast, solar energy, especially when integrated with agriculture (agrivoltaics) or on rooftops, creates less pressure on land. The push for ethanol blending (E20) must be weighed against this biological reality. While biofuels have a role in sectors hard to electrify (like aviation), using them for road transport seems resource-inefficient compared to the EV-solar pathway.",
                questions: [
                    {
                        id: 1216,
                        question: "According to the passage, why do solar panels require significantly less land than biofuels to power vehicles?",
                        options: [
                            "(a) Because solar panels are smaller than plants.",
                            "(b) Because the photosynthetic efficiency of plants (1-2%) is much lower than the efficiency of solar panels (~20%) and electric motors.",
                            "(c) Because biofuels evaporate quickly.",
                            "(d) Because solar panels work at night."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: \"plants have a low efficiency of photosynthesis (around 1-2%), whereas modern solar panels have efficiencies of 20% or more.\""
                    },
                    {
                        id: 1217,
                        question: "The study implies that the push for \"ethanol blending\" (biofuels) for cars might be:",
                        options: [
                            "(a) The best solution for food security.",
                            "(b) Resource-inefficient (land-intensive) compared to the EV-solar pathway for road transport.",
                            "(c) Essential for all types of transport including railways.",
                            "(d) Zero-emission in all respects."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"using them [biofuels] for road transport seems resource-inefficient compared to the EV-solar pathway.\""
                    },
                    {
                        id: 1218,
                        question: "What is the \"biological reality\" mentioned in the text?",
                        options: [
                            "(a) That plants need water to grow.",
                            "(b) The low energy conversion efficiency of photosynthesis compared to photovoltaic technology.",
                            "(c) That corn is better than sugarcane.",
                            "(d) That animals eat crops."
                        ],
                        correctAnswer: 1,
                        explanation: "Inferred from the context of comparing efficiencies (1-2% vs 20%)."
                    },
                    {
                        id: 1219,
                        question: "According to the passage, where do biofuels still have a relevant role?",
                        options: [
                            "(a) In powering bicycles.",
                            "(b) In sectors hard to electrify, such as aviation.",
                            "(c) In lighting homes.",
                            "(d) In powering smartphones."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"While biofuels have a role in sectors hard to electrify (like aviation)...\""
                    },
                    {
                        id: 1220,
                        question: "The term \"agrivoltaics\" refers to:",
                        options: [
                            "(a) Growing crops on the moon.",
                            "(b) Integrating solar energy generation with agriculture (e.g., panels above crops).",
                            "(c) Making electricity from rotting vegetables.",
                            "(d) A new type of high-yield rice."
                        ],
                        correctAnswer: 1,
                        explanation: "Inferred from context: \"solar energy, especially when integrated with agriculture (agrivoltaics).\""
                    }
                ]
            }
        ]
    },
    13: {
        dayId: 13,
        title: "UPSC CSAT Practice Set - Jan 13 (Day 13)",
        description: "Environment (Conservation Rights), Physics (Fusion), Maritime Strategy, International Law",
        vocabulary: [],
        passages: [
            {
                id: 1301,
                title: "Passage 1: Environment & Social Justice (Conservation Rights)",
                source: "Environment & Social Justice (Conservation Rights)",
                content: "The intersection of conservation and human rights has always been fraught. The \"Fortress Conservation\" model, which views local people as threats to nature, has led to mass evictions of indigenous communities from protected areas. However, a new paradigm is emerging. The Kunming-Montreal Global Biodiversity Framework (GBF) explicitly recognizes the rights of indigenous peoples and local communities (IPLCs) as guardians of biodiversity. Data shows that lands managed by IPLCs often have better conservation outcomes than state-managed protected areas.\n\nIn India, the Forest Rights Act (FRA), 2006, was a legislative attempt to undo historical injustice. It recognizes the right of forest dwellers to protect and manage their community forest resources. Yet, implementation is lagging. In critical tiger habitats, the bureaucracy often pushes for 'voluntary relocation', which activists argue is coercive. The debate is not just legal but ecological. Can tigers and humans coexist? Studies in the Biligiri Rangaswamy Temple (BRT) Tiger Reserve show that Soliga tribals have lived alongside tigers for centuries, and their traditional practices (like controlled burning) actually maintain the forest health that tigers need. Removing them might harm the ecosystem. Conservation must move from 'excluding' people to 'partnering' with them.",
                questions: [
                    {
                        id: 1301,
                        question: "The \"Fortress Conservation\" model is characterized by:",
                        options: [
                            "(a) Building large walls around forests to keep animals in.",
                            "(b) Viewing local people as threats to nature and excluding/evicting them from protected areas.",
                            "(c) Using military forts for storing seeds.",
                            "(d) Protecting only castles and historical monuments."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"Fortress Conservation model, which views local people as threats to nature, has led to mass evictions.\""
                    },
                    {
                        id: 1302,
                        question: "What key shift does the Kunming-Montreal Global Biodiversity Framework (GBF) represent?",
                        options: [
                            "(a) It bans all zoos.",
                            "(b) It explicitly recognizes the rights of indigenous peoples and local communities (IPLCs) as guardians of biodiversity.",
                            "(c) It mandates the killing of invasive species.",
                            "(d) It privatizes all national parks."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"GBF explicitly recognizes the rights of indigenous peoples... as guardians of biodiversity.\""
                    },
                    {
                        id: 1303,
                        question: "The example of the Soliga tribals in BRT Tiger Reserve is used to argue that:",
                        options: [
                            "(a) Tribals kill tigers for food.",
                            "(b) Coexistence is possible, and traditional practices (like controlled burning) can actually maintain ecosystem health.",
                            "(c) Tigers have migrated out of the reserve.",
                            "(d) The Forest Rights Act should be repealed."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Soliga tribals have lived alongside tigers... traditional practices... actually maintain the forest health.\""
                    },
                    {
                        id: 1304,
                        question: "The Forest Rights Act (FRA), 2006, primarily aims to:",
                        options: [
                            "(a) Increase timber production.",
                            "(b) Undo historical injustice by recognizing the rights of forest dwellers to protect and manage community forest resources.",
                            "(c) Sell forest land to industries.",
                            "(d) Convert forests into farmland."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"FRA... was a legislative attempt to undo historical injustice. It recognizes the right... to protect and manage their community forest resources.\""
                    },
                    {
                        id: 1305,
                        question: "Activists criticize 'voluntary relocation' in critical tiger habitats because:",
                        options: [
                            "(a) The compensation is too high.",
                            "(b) It is often coercive in practice, not truly voluntary.",
                            "(c) Tigers do not like empty forests.",
                            "(d) It is too slow."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions: \"bureaucracy often pushes for 'voluntary relocation', which activists argue is coercive.\""
                    }
                ]
            },
            {
                id: 1302,
                title: "Passage 2: Frontier Physics (Nuclear Fusion)",
                source: "Frontier Physics (Nuclear Fusion)",
                content: "Nuclear fusion is often described as the 'holy grail' of clean energy. Unlike fission (which splits atoms), fusion mimics the sun by merging hydrogen isotopes (deuterium and tritium) to release massive energy without long-lived radioactive waste. The challenge has always been achieving 'net energy gain' (Q > 1) – getting more energy out than is put in to sustain the reaction. In late 2022, the US National Ignition Facility (NIF) achieved this milestone using 'inertial confinement' (lasers).\n\nHowever, commercialisation remains distant. The NIF experiment used lasers that are inefficient; the total energy drawn from the grid was far higher than the output, even if the reaction itself had a gain. The rival approach, 'magnetic confinement' (Tokamak), uses powerful magnets to hold superheated plasma. The ITER project in France, a global collaboration including India, is building the world's largest Tokamak. The engineering hurdles are immense: materials must withstand temperatures of 150 million degrees Celsius and constant neutron bombardment. If mastered, fusion offers a baseload, carbon-free source that uses abundant fuel (seawater). It is not a fix for the immediate climate crisis but a potential civilizational shift for the next century.",
                questions: [
                    {
                        id: 1306,
                        question: "The primary difference between nuclear fission and fusion is:",
                        options: [
                            "(a) Fission uses suns; fusion uses lasers.",
                            "(b) Fission splits atoms (creating waste); fusion merges atoms (mimicking the sun, less waste).",
                            "(c) Fission is safe; fusion is dangerous.",
                            "(d) Fission uses hydrogen; fusion uses uranium."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Unlike fission (which splits atoms), fusion mimics the sun by merging hydrogen isotopes... without long-lived radioactive waste.\""
                    },
                    {
                        id: 1307,
                        question: "What milestone did the National Ignition Facility (NIF) achieve?",
                        options: [
                            "(a) It built a permanent sun on Earth.",
                            "(b) It achieved 'net energy gain' (Q > 1) in the fusion reaction itself.",
                            "(c) It solved the climate crisis immediately.",
                            "(d) It discovered a new element."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"achieved this milestone [net energy gain]... getting more energy out than is put in to sustain the reaction.\""
                    },
                    {
                        id: 1308,
                        question: "Why is the NIF achievement not yet commercially viable according to the passage?",
                        options: [
                            "(a) Because the lasers are inefficient, and total grid energy input far exceeded the output.",
                            "(b) Because the government banned it.",
                            "(c) Because deuterium is rare.",
                            "(d) Because it caused an explosion."
                        ],
                        correctAnswer: 1,
                        explanation: "The text notes: \"lasers are inefficient; the total energy drawn from the grid was far higher than the output.\""
                    },
                    {
                        id: 1309,
                        question: "The \"ITER project\" focuses on which approach to fusion?",
                        options: [
                            "(a) Inertial confinement (lasers).",
                            "(b) Magnetic confinement (Tokamak).",
                            "(c) Cold fusion.",
                            "(d) Chemical fusion."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"The rival approach, 'magnetic confinement' (Tokamak). The ITER project... is building the world's largest Tokamak.\""
                    },
                    {
                        id: 1310,
                        question: "The passage characterizes fusion's role in the climate crisis as:",
                        options: [
                            "(a) An immediate fix for 2030 targets.",
                            "(b) A potential civilizational shift for the next century, but not an immediate fix.",
                            "(c) A waste of money.",
                            "(d) Promoting global warming."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"It is not a fix for the immediate climate crisis but a potential civilizational shift for the next century.\""
                    }
                ]
            },
            {
                id: 1303,
                title: "Passage 3: Maritime Strategy (History & Policy)",
                source: "Maritime Strategy (History & Policy)",
                content: "K.M. Panikkar, in his seminal work 'India and the Indian Ocean', argued that India's security is inextricably linked to the ocean. He noted that while invasions from the land passes (Himalayas) were absorbed, the loss of control over the seas to European powers led to total colonization. Today, the Indian Ocean Region (IOR) is again a theatre of contestation. China's 'String of Pearls' strategy involves building commercial and dual-use ports (e.g., Gwadar, Hambantota) potentially encircling India.\n\nIndia's response has shifted from 'looking East' to 'acting East' and prioritizing maritime domain awareness (MDA). The Information Fusion Centre (IFC-IOR) in Gurugram monitors shipping traffic to detect threats. Strategically, India is focusing on the 'Necklace of Diamonds' approach—gaining access to ports in Oman (Duqm), Indonesia (Sabang), and others to counter Chinese presence. The challenge is that unlike China's deep pockets for infrastructure, India relies on strategic partnerships and goodwill. A \"blue water navy\" capability is essential not just for defence but for protecting trade, as 90% of India's trade by volume moves by sea.",
                questions: [
                    {
                        id: 1311,
                        question: "K.M. Panikkar's main argument regarding Indian history was:",
                        options: [
                            "(a) The Himalayas are the only defence line that matters.",
                            "(b) The loss of control over the seas led to total colonization, unlike land invasions which were absorbed.",
                            "(c) India should have no navy.",
                            "(d) European powers were friendly traders."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites Panikkar: \"loss of control over the seas to European powers led to total colonization.\""
                    },
                    {
                        id: 1312,
                        question: "The \"String of Pearls\" strategy refers to:",
                        options: [
                            "(a) India's jewellery exports.",
                            "(b) China's strategy of building commercial/dual-use ports in the IOR (encircling India).",
                            "(c) A US naval formation.",
                            "(d) A trade route for pearls."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"China's 'String of Pearls' strategy involves building commercial and dual-use ports... encircling India.\""
                    },
                    {
                        id: 1313,
                        question: "What is the function of the \"Information Fusion Centre (IFC-IOR)\"?",
                        options: [
                            "(a) To fuse atoms for energy.",
                            "(b) To monitor shipping traffic and enhance Maritime Domain Awareness (MDA).",
                            "(c) To build ships.",
                            "(d) To train sailors."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says IFC-IOR \"monitors shipping traffic to detect threats\" (part of MDA)."
                    },
                    {
                        id: 1314,
                        question: "India's \"Necklace of Diamonds\" strategy is intended to:",
                        options: [
                            "(a) Counter China's String of Pearls by gaining access to strategic ports (Duqm, Sabang, etc.).",
                            "(b) Increase the export of diamonds.",
                            "(c) Build a wall in the ocean.",
                            "(d) Colonize African countries."
                        ],
                        correctAnswer: 0,
                        explanation: "The text contrasts it: \"counter Chinese presence... gaining access to ports in Oman... Indonesia.\""
                    },
                    {
                        id: 1315,
                        question: "Why is a \"blue water navy\" considered essential for India?",
                        options: [
                            "(a) Because the ocean is blue.",
                            "(b) To protect trade (90% by volume moves by sea) and ensure defence beyond coastal waters.",
                            "(c) To compete in the Olympics.",
                            "(d) To catch more fish."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"essential... for protecting trade, as 90% of India's trade... moves by sea.\""
                    }
                ]
            },
            {
                id: 1304,
                title: "Passage 4: International Law (Sovereignty & Immunity)",
                source: "International Law (Sovereignty & Immunity)",
                content: "The principle of 'Sovereign Immunity' essentially means that a state cannot be sued in the courts of another state without its consent. It is based on the maxim 'par in parem non habet imperium' (equals have no authority over one another). However, this absolute immunity has eroded over time. The 'Restrictive Theory' of immunity distinguishes between sovereign acts (jure imperii) and commercial acts (jure gestionis). If a government enters into a commercial contract (e.g., buying airplanes), it can be sued for breach of contract like any private entity.\n\nThis distinction is crucial in modern times where states run airlines, oil companies, and banks. In India, the lack of a specific legislation on foreign sovereign immunity creates uncertainty. Courts act on principles of international law, but codification is needed to boost investor confidence. If a foreign company invests in a state-owned Indian entity, it wants assurance that it can seek legal recourse if things go wrong, without the state hiding behind 'immunity'.",
                questions: [
                    {
                        id: 1316,
                        question: "The maxim \"par in parem non habet imperium\" implies:",
                        options: [
                            "(a) The king is always right.",
                            "(b) Equals have no authority over one another (basis of sovereign immunity).",
                            "(c) Might is right.",
                            "(d) The law is blind."
                        ],
                        correctAnswer: 1,
                        explanation: "The text translates it: \"equals have no authority over one another.\""
                    },
                    {
                        id: 1317,
                        question: "The \"Restrictive Theory\" of sovereign immunity limits immunity to:",
                        options: [
                            "(a) Commercial acts only.",
                            "(b) Sovereign acts (jure imperii) only, excluding commercial acts.",
                            "(c) Acts committed during war.",
                            "(d) Diplomacy only."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: \"distinguishes between sovereign acts... and commercial acts... If... commercial... it can be sued.\" Thus immunity is restricted to sovereign acts."
                    },
                    {
                        id: 1318,
                        question: "Why is the distinction between 'jure imperii' and 'jure gestionis' important today?",
                        options: [
                            "(a) Because Latin is a dying language.",
                            "(b) Because states increasingly engage in commercial activities (airlines, banks), and absolute immunity would be unfair to private partners.",
                            "(c) Because the UN mandated it.",
                            "(d) It is not important."
                        ],
                        correctAnswer: 1,
                        explanation: "The text notes: \"crucial in modern times where states run airlines... If a government enters into a commercial contract... it can be sued.\""
                    },
                    {
                        id: 1319,
                        question: "The passage suggests that India needs specific legislation on this topic to:",
                        options: [
                            "(a) Protect Indian politicians from arrest.",
                            "(b) Boost investor confidence by providing certainty on legal recourse against state entities in commercial disputes.",
                            "(c) Sue every other country.",
                            "(d) Declare itself a superpower."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"codification is needed to boost investor confidence... can seek legal recourse... without the state hiding.\""
                    },
                    {
                        id: 1320,
                        question: "If a state-owned airline buys planes and fails to pay, under the Restrictive Theory, can it be sued?",
                        options: [
                            "(a) No, it has absolute immunity.",
                            "(b) Yes, because buying planes is a commercial act (jure gestionis).",
                            "(c) Only in the International Court of Justice.",
                            "(d) Only if the King permits."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explicitly uses the example: \"If a government enters into a commercial contract (e.g., buying airplanes), it can be sued.\""
                    }
                ]
            }
        ]
    },
    14: {
        dayId: 14,
        title: "UPSC CSAT Practice Set - Jan 14 (Day 14)",
        description: "Culture (Insects), Geopolitics (Iran), Tech Policy (AI), Tech Policy (Source Code)",
        vocabulary: [],
        passages: [
            {
                id: 1401,
                title: "Passage 1: Culture & Sustainability (Edible Insects)",
                source: "Culture & Sustainability (Edible Insects)",
                content: "In Nagaland, the arrival of 'Akhu' (Carpenter Worms) and 'Akok' (Hornet grubs) in local markets signals more than just seasonal change; it reflects a deep cultural bond with nature. Unlike the Western 'yuck factor' associated with insect eating (entomophagy), indigenous societies in Northeast India cherish them as delicacies. New research published in 'Nature: Food' suggests the world has much to learn from them. Insects are highly nutritious, requiring a fraction of the land and water needed for livestock. For instance, crickets need 12 times less feed than cattle to produce the same amount of protein.\n\nHowever, this tradition faces threats. Modernization and the influx of processed foods are changing tastes among the youth. Furthermore, over-harvesting driven by high market prices for certain species like the Giant Asian Hornet is putting pressure on wild populations. Sustainable harvesting protocols are missing. Scientists argue that 'mini-livestock' farming of insects could be a solution, providing nutrition and income without depleting wild stocks. But for this to work, policy must recognize insects not as pests, but as food.",
                questions: [
                    {
                        id: 1401,
                        question: "Why does the passage characterize insect eating (entomophagy) in Nagaland as a \"cultural bond with nature\"?",
                        options: [
                            "(a) Because they only eat insects found in temples.",
                            "(b) Unlike the Western \"yuck factor\", indigenous societies cherish them as seasonal delicacies, reflecting traditional knowledge.",
                            "(c) Because insects are eaten raw.",
                            "(d) Because eating insects is banned by law."
                        ],
                        correctAnswer: 1,
                        explanation: "The text contrasts Western repulsion with indigenous societies \"cherishing them as delicacies\" and signaling seasonal change."
                    },
                    {
                        id: 1402,
                        question: "According to the research cited, why is entomophagy considered sustainable?",
                        options: [
                            "(a) Insects are tastier than chicken.",
                            "(b) Insects require significantly less land, water, and feed (e.g., crickets need 12x less feed than cattle) to produce protein.",
                            "(c) Insects eat plastic waste.",
                            "(d) Insects do not feel pain."
                        ],
                        correctAnswer: 1,
                        explanation: "The text focuses on efficiency: \"highly nutritious, requiring a fraction of the land... 12 times less feed than cattle.\""
                    },
                    {
                        id: 1403,
                        question: "The passage identifies \"over-harvesting\" as a threat. What drives this specific threat?",
                        options: [
                            "(a) Lack of food in the forest.",
                            "(b) High market prices for certain species (like Giant Asian Hornet) leading to pressure on wild populations.",
                            "(c) Climate change killing the insects.",
                            "(d) Animals eating all the insects."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"over-harvesting driven by high market prices for certain species... putting pressure on wild populations.\""
                    },
                    {
                        id: 1404,
                        question: "What solution do scientists propose to balance tradition and sustainability?",
                        options: [
                            "(a) Banning insect eating completely.",
                            "(b) 'Mini-livestock' farming of insects to provide nutrition/income without depleting wild stocks.",
                            "(c) Importing insects from China.",
                            "(d) Replacing insects with soy chunks."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"'mini-livestock' farming of insects could be a solution... without depleting wild stocks.\""
                    },
                    {
                        id: 1405,
                        question: "The phrase \"Western 'yuck factor'\" refers to:",
                        options: [
                            "(a) The Western preference for spicy food.",
                            "(b) The cultural aversion or repulsion to eating insects common in Western societies.",
                            "(c) A bacterial infection caused by insects.",
                            "(d) A type of dance."
                        ],
                        correctAnswer: 1,
                        explanation: "Context: \"Unlike the Western 'yuck factor'... indigenous societies... cherish them.\""
                    }
                ]
            },
            {
                id: 1402,
                title: "Passage 2: Geopolitics (Iran's Crisis)",
                source: "Geopolitics (Iran's Crisis)",
                content: "Iran is facing a \"polycrisis\". The currency (Rial) has plummeted to historic lows, inflation is rampant, and internal dissent persists despite crackdowns. Externally, its regional \"Axis of Resistance\" is under severe pressure. Israel's targeted strikes have degraded Hamas and Hezbollah capabilities, weakening Iran's deterrent posture. Tehran's nuclear program remains its ultimate bargaining chip. With the breakdown of the JCPOA and uranium enrichment reaching 60%, the breakout time for a weapon is now measured in weeks.\n\nHowever, the regime faces a dilemma. Rushing for a bomb might invite a preemptive strike by Israel or the US, threatening the regime's survival. Doing nothing erodes its leverage as its proxies weaken. China, Iran's main economic lifeline (buying sanctioned oil), urges restraint to protect its energy security. The leadership in Tehran must navigate between satisfying hardliners who demand escalation and pragmatists who fear a suicidal war. The path they choose will define West Asian security for the next decade.",
                questions: [
                    {
                        id: 1406,
                        question: "The term \"polycrisis\" used to describe Iran's situation implies:",
                        options: [
                            "(a) A crisis involving only politics.",
                            "(b) The simultaneous occurrence of multiple crises—economic (currency collapse), internal (dissent), and external (weakening proxies/pressure).",
                            "(c) A crisis caused by plastic pollution.",
                            "(d) A crisis in the police force."
                        ],
                        correctAnswer: 1,
                        explanation: "The text lists: \"currency... plummeted... internal dissent... external... Axis of Resistance under pressure.\""
                    },
                    {
                        id: 1407,
                        question: "Why is Iran's nuclear program described as a \"dilemma\" for the regime?",
                        options: [
                            "(a) Because they don't have enough uranium.",
                            "(b) Rushing for a bomb invites preemptive strikes (regime survival threat), but doing nothing erodes leverage as proxies weaken.",
                            "(c) Because China has stopped buying oil.",
                            "(d) Because the scientists are on strike."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains the dilemma: \"Rushing... might invite a preemptive strike... Doing nothing erodes its leverage.\""
                    },
                    {
                        id: 1408,
                        question: "What role does China play in Iran's current situation according to the passage?",
                        options: [
                            "(a) It provides military weapons only.",
                            "(b) It is the main economic lifeline (buying sanctioned oil) and urges restraint to protect energy security.",
                            "(c) It is imposing sanctions on Iran.",
                            "(d) It is mediating peace with Israel."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"China, Iran's main economic lifeline (buying sanctioned oil), urges restraint.\""
                    },
                    {
                        id: 1409,
                        question: "The \"Axis of Resistance\" refers to:",
                        options: [
                            "(a) A WWII alliance.",
                            "(b) Iran's network of regional allies/proxies (like Hamas, Hezbollah) which is currently under pressure.",
                            "(c) An economic bloc of Asian countries.",
                            "(d) A resistance in physics."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions \"its regional 'Axis of Resistance' is under severe pressure. Israel's targeted strikes have degraded Hamas and Hezbollah.\""
                    },
                    {
                        id: 1410,
                        question: "The \"JCPOA\" mentioned in the text stands for:",
                        options: [
                            "(a) Joint Comprehensive Plan of Action (the Nuclear Deal).",
                            "(b) Joint Committee on Public Order and Administration.",
                            "(c) Japan-China Peace Organization Agreement.",
                            "(d) Justice for Crimes of Peace and Order Act."
                        ],
                        correctAnswer: 0,
                        explanation: "Context: \"breakdown of the JCPOA and uranium enrichment\" refers to the Iran Nuclear Deal."
                    }
                ]
            },
            {
                id: 1403,
                title: "Passage 3: Technology & Policy (AI & Environment)",
                source: "Technology & Policy (AI & Environment)",
                content: "Artificial Intelligence (AI) is often hailed as a tool to fight climate change—optimizing grids, designing new materials, and monitoring deforestation. However, the 'physicality' of AI is often ignored. Training a single large language model (LLM) can emit as much carbon as five cars in their lifetimes. Moreover, the data centers powering AI are water-guzzling behemoths. Google's water consumption jumped 20% in 2023, largely due to cooling needs for AI servers.\n\nThis presents a paradox: the tool meant to solve the crisis is exacerbating it. Researchers call for 'Red AI' (focus on accuracy at any cost) to shift to 'Green AI' (efficiency as a core metric). Policy intervention is needed. Governments should mandate 'carbon transparency cards' for AI models, detailing the energy mix and water footprint used in training. Without this, the digital revolution risks hitting a planetary wall.",
                questions: [
                    {
                        id: 1411,
                        question: "The \"paradox\" of AI and climate change described in the passage is:",
                        options: [
                            "(a) AI is too smart for humans.",
                            "(b) AI can solve climate change but refuses to do so.",
                            "(c) The tool meant to solve the crisis (optimizing grids etc.) is exacerbating it through massive energy and water consumption (training/data centers).",
                            "(d) AI servers are made of wood."
                        ],
                        correctAnswer: 2,
                        explanation: "The text says: \"paradox: the tool meant to solve the crisis is exacerbating it... emitting carbon... water-guzzling.\""
                    },
                    {
                        id: 1412,
                        question: "The distinction between \"Red AI\" and \"Green AI\" refers to:",
                        options: [
                            "(a) The color of the computer chips.",
                            "(b) Red AI focuses on political ideology; Green AI focuses on environment.",
                            "(c) Red AI prioritizes accuracy at any energy cost; Green AI treats energy efficiency as a core metric.",
                            "(d) Red AI is dangerous; Green AI is safe."
                        ],
                        correctAnswer: 2,
                        explanation: "The text defines: \"'Red AI' (focus on accuracy at any cost) to shift to 'Green AI' (efficiency as a core metric).\""
                    },
                    {
                        id: 1413,
                        question: "What specific negative environmental impact of data centers is highlighted apart from carbon emissions?",
                        options: [
                            "(a) Noise pollution.",
                            "(b) Massive water consumption for cooling servers.",
                            "(c) Radiation leakage.",
                            "(d) Land grabbing."
                        ],
                        correctAnswer: 1,
                        explanation: "The text highlights: \"data centers... are water-guzzling behemoths. Google's water consumption jumped... due to cooling needs.\""
                    },
                    {
                        id: 1414,
                        question: "What policy intervention does the author recommend?",
                        options: [
                            "(a) Banning AI research.",
                            "(b) Mandating 'carbon transparency cards' for AI models detailing energy/water footprints.",
                            "(c) Creating a global AI police.",
                            "(d) Making AI open source."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Governments should mandate 'carbon transparency cards'... detailing the energy mix and water footprint.\""
                    },
                    {
                        id: 1415,
                        question: "The phrase \"digital revolution risks hitting a planetary wall\" implies:",
                        options: [
                            "(a) The internet cables will hit a physical wall.",
                            "(b) Environmental constraints (energy/water/carbon limits) could restrict the growth of digital technologies like AI.",
                            "(c) Aliens will stop the digital revolution.",
                            "(d) Computers will take over the planet."
                        ],
                        correctAnswer: 1,
                        explanation: "It implies environmental limits (\"planetary wall\") will constrain the \"digital revolution\" if sustainability isn't addressed."
                    }
                ]
            },
            {
                id: 1404,
                title: "Passage 4: Tech Policy & Security (Source Code)",
                source: "Tech Policy & Security (Source Code)",
                content: "The debate over \"Proprietary vs. Open Source\" software has entered the domain of national security. When the source code is closed (proprietary), only the vendor knows what is inside. This 'black box' nature led to the global CrowdStrike outage in 2024, where a faulty update crashed millions of systems. Nobody could audit the code to prevent it. In contrast, open-source software (OSS) allows anyone to inspect the code. Proponents argue this 'many eyes' theory makes it more secure.\n\nHowever, the XZ Utils backdoor incident revealed the vulnerability of OSS. A lone maintainer was compromised by a sophisticated actor who inserted malicious code over years. This highlights a different risk: the 'maintainer burnout' and lack of funding for critical digital infrastructure. The government's policy of 'indigenization' often favors proprietary Indian software. But experts argue that for critical sectors (defence, banking), 'Security through Obscurity' (hiding code) is a fallacy. Instead, a 'sovereign stack' built on audited open-source code, with state-supported maintenance, is the safer path.",
                questions: [
                    {
                        id: 1416,
                        question: "The \"CrowdStrike outage\" is cited as an example of the failure of:",
                        options: [
                            "(a) Open source software.",
                            "(b) Proprietary (closed source) software, where the 'black box' nature prevented external audit of a faulty update.",
                            "(c) The internet service providers.",
                            "(d) The electricity grid."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"'black box' nature [of proprietary code] led to the global CrowdStrike outage... Nobody could audit the code.\""
                    },
                    {
                        id: 1417,
                        question: "The \"XZ Utils backdoor\" incident highlights which specific vulnerability of Open Source Software (OSS)?",
                        options: [
                            "(a) It is too expensive.",
                            "(b) Maintainer burnout and the risk of malicious insertion of code when critical infrastructure relies on underfunded/lone volunteers.",
                            "(c) It cannot be used on Windows computers.",
                            "(d) It is always slower than proprietary software."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions: \"XZ Utils... revealed vulnerability... lone maintainer was compromised... maintainer burnout and lack of funding.\""
                    },
                    {
                        id: 1418,
                        question: "What is the \"Security through Obscurity\" fallacy mentioned in the passage?",
                        options: [
                            "(a) Walking in the dark is safe.",
                            "(b) The mistaken belief that hiding the source code (proprietary) makes a system secure.",
                            "(c) The belief that complex passwords are unnecessary.",
                            "(d) The idea that encryption is useless."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"experts argue that... 'Security through Obscurity' (hiding code) is a fallacy.\""
                    },
                    {
                        id: 1419,
                        question: "The author suggests the \"safer path\" for critical sectors is:",
                        options: [
                            "(a) Buying software from Microsoft.",
                            "(b) A 'sovereign stack' built on audited open-source code, with state-supported maintenance.",
                            "(c) Writing code on paper only.",
                            "(d) Using no software at all."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"Instead, a 'sovereign stack' built on audited open-source code, with state-supported maintenance, is the safer path.\""
                    },
                    {
                        id: 1420,
                        question: "The \"many eyes\" theory advocates for open source because:",
                        options: [
                            "(a) It helps people with poor vision.",
                            "(b) Allowing anyone to inspect the code increases the likelihood of finding and fixing bugs/security flaws.",
                            "(c) It allows the government to spy on citizens.",
                            "(d) It makes the software look better."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"allows anyone to inspect... 'many eyes' theory makes it more secure.\""
                    }
                ]
            }
        ]
    },
    15: {
        dayId: 15,
        title: "UPSC CSAT Practice Set - Jan 15 (Day 15)",
        description: "Frontier Physics (Smoking Gun/Gravitational Waves), IR (Minerals), Social Justice (Mentoring), Environment (Illegal Mining)",
        vocabulary: [],
        passages: [
            {
                id: 1501,
                title: "Passage 1: Frontier Physics (The \"Smoking Gun\" Problem)",
                source: "Frontier Physics (The \"Smoking Gun\" Problem)",
                content: "In science, a 'smoking gun' refers to irrefutable evidence. For the Big Bang theory, the Cosmic Microwave Background (CMB) radiation was the smoking gun. But for the theory of 'Cosmic Inflation'—which says the universe expanded exponentially in a fraction of a second—the evidence remains elusive. Scientists are hunting for 'primordial gravitational waves'. These are ripples in spacetime caused by that violent expansion. If detected, they would appear as a specific swirl pattern (B-modes) in the polarization of the CMB.\n\nIn 2014, the BICEP2 experiment claimed to have found this signal. The physics world erupted in celebration. However, dust—quite literally—settled on the claim. Further analysis showed that the signal was actually caused by interstellar dust in our own galaxy mimicking the swirl pattern. It was a humbling lesson in confirmation bias. Today, new experiments like the Simons Observatory and India's proposed participation in CMB-Bharat are refining the search. They are using more frequencies to distinguish between dust and the true cosmic signal. Finding it would not just prove inflation but give us a snapshot of the universe at $10^{-35}$ seconds old.",
                questions: [
                    {
                        id: 1501,
                        question: "What are \"primordial gravitational waves\" in the context of the passage?",
                        options: [
                            "(a) Waves in the ocean caused by the moon.",
                            "(b) Ripples in spacetime caused by the violent exponential expansion (Cosmic Inflation) of the early universe.",
                            "(c) Radio waves from alien civilizations.",
                            "(d) Sound waves from the sun."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines them: \"ripples in spacetime caused by that violent expansion [Cosmic Inflation].\""
                    },
                    {
                        id: 1502,
                        question: "The BICEP2 experiment's claim was eventually disproven because:",
                        options: [
                            "(a) The telescope was broken.",
                            "(b) The signal was actually caused by interstellar dust in our galaxy mimicking the B-mode swirl pattern, not primordial waves.",
                            "(c) The scientists lied.",
                            "(d) The universe never expanded."
                        ],
                        correctAnswer: 1,
                        explanation: "The text explains: \"signal was actually caused by interstellar dust... mimicking the swirl pattern.\""
                    },
                    {
                        id: 1503,
                        question: "The term \"B-modes\" refers to:",
                        options: [
                            "(a) A specific swirl pattern in the polarization of the Cosmic Microwave Background (CMB) that indicates gravitational waves.",
                            "(b) A mode of transport in space.",
                            "(c) A type of musical scale.",
                            "(d) A binary code used by computers."
                        ],
                        correctAnswer: 0,
                        explanation: "The text says: \"appear as a specific swirl pattern (B-modes) in the polarization of the CMB.\""
                    },
                    {
                        id: 1504,
                        question: "Why is the detection of these waves considered important?",
                        options: [
                            "(a) It will help in weather forecasting.",
                            "(b) It would prove the theory of Cosmic Inflation and provide a snapshot of the universe at its very inception ($10^{-35}$ seconds).",
                            "(c) It allows time travel.",
                            "(d) It proves the earth is flat."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"Finding it would not just prove inflation but give us a snapshot of the universe at $10^{-35}$ seconds old.\""
                    },
                    {
                        id: 1505,
                        question: "What lesson did the scientific community learn from the BICEP2 incident?",
                        options: [
                            "(a) Never to trust Americans.",
                            "(b) A humbling lesson in confirmation bias and the need for rigorous verification (distinguishing dust from signal).",
                            "(c) Physics is a waste of time.",
                            "(d) To stop looking for gravitational waves."
                        ],
                        correctAnswer: 1,
                        explanation: "The text calls it \"a humbling lesson in confirmation bias.\""
                    }
                ]
            },
            {
                id: 1502,
                title: "Passage 2: International Relations (Minerals Diplomacy)",
                source: "International Relations (Minerals Diplomacy)",
                content: "The geopolitics of the 20th century was defined by oil; the 21st is defined by critical minerals. Lithium, Cobalt, and Rare Earth Elements (REEs) are the building blocks of the green transition (batteries, magnets). Currently, China dominates this supply chain, processing over 60% of the world's lithium and 80% of REEs. This monopoly scares Western nations and India, who fear supply weaponization.\n\nTo counter this, the US launched the Minerals Security Partnership (MSP), a club of friendly nations to secure supply chains. India joined the MSP in 2023. Domestically, India passed an amendment to allow private mining of critical minerals (previously reserved for the state). It also set up KABIL (Khanij Bidesh India Ltd) to acquire assets abroad, recently signing a deal for lithium in Argentina. The strategy is 'friend-shoring'—moving supply chains to friendly countries. However, environmental concerns in mining (water usage, pollution) and the sheer lead time to open new mines remain hurdles. Breaking the monopoly will take decades, not years.",
                questions: [
                    {
                        id: 1506,
                        question: "The shift from \"oil\" to \"critical minerals\" as the definer of geopolitics is driven by:",
                        options: [
                            "(a) The exhaustion of all oil reserves.",
                            "(b) The green transition, where minerals like Lithium/Cobalt are essential for batteries and clean tech.",
                            "(c) The discovery of gold in Mars.",
                            "(d) The collapse of the automobile industry."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Lithium, Cobalt... are the building blocks of the green transition (batteries, magnets).\""
                    },
                    {
                        id: 1507,
                        question: "What is the primary objective of the \"Minerals Security Partnership (MSP)\"?",
                        options: [
                            "(a) To fix the price of minerals globally.",
                            "(b) To form a club of friendly nations to secure critical mineral supply chains and reduce reliance on monopolies (China).",
                            "(c) To ban mining worldwide.",
                            "(d) To share mining technology with China."
                        ],
                        correctAnswer: 1,
                        explanation: "The text describes MSP as: \"a club of friendly nations to secure supply chains... To counter [China's] monopoly.\""
                    },
                    {
                        id: 1508,
                        question: "Which of the following steps has India taken to boost its critical minerals sector?",
                        options: [
                            "(a) Banned all mining.",
                            "(b) Allowed private mining of critical minerals and set up KABIL to acquire assets abroad.",
                            "(c) Sold all mines to China.",
                            "(d) Stopped manufacturing batteries."
                        ],
                        correctAnswer: 1,
                        explanation: "The text lists: \"passed an amendment to allow private mining... set up KABIL to acquire assets abroad.\""
                    },
                    {
                        id: 1509,
                        question: "The term \"friend-shoring\" implies:",
                        options: [
                            "(a) Using friends to dig mines.",
                            "(b) Moving supply chains to politically friendly countries to ensure security.",
                            "(c) Building shores on beaches.",
                            "(d) Trading only with neighbours."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"moving supply chains to friendly countries.\""
                    },
                    {
                        id: 1510,
                        question: "What remains a significant hurdle in diversifying supply chains according to the passage?",
                        options: [
                            "(a) Lack of minerals on Earth.",
                            "(b) Environmental concerns and the long lead time to open new mines.",
                            "(c) Lack of money.",
                            "(d) Robots refusing to work."
                        ],
                        correctAnswer: 1,
                        explanation: "The text mentions: \"environmental concerns... and the sheer lead time to open new mines remain hurdles.\""
                    }
                ]
            },
            {
                id: 1503,
                title: "Passage 3: Social Justice (Mentoring & Education)",
                source: "Social Justice (Mentoring & Education)",
                content: "Affirmative action (reservation) opens the door, but it doesn't always ensure a seat at the table. Dalit and Adivasi students in premier institutes often face a 'hostile environment'—subtle caste discrimination, isolation, and a lack of cultural capital. This leads to high dropout rates and, tragically, suicides. The solution cannot just be administrative (anti-discrimination cells); it must be social.\n\n'Mentoring' is emerging as a critical intervention. Unlike tutoring (which is academic), mentoring provides psychosocial support, career guidance, and a sense of belonging. Initiated by alumni groups in some IITs, mentorship programs connect students from marginalized backgrounds with successful seniors who walked the same path. This 'scaled intimacy' helps navigate the hidden curriculum of elite spaces. However, for this to be effective, mentors need to be sensitized to caste realities. A 'color-blind' (or caste-blind) approach that ignores the specific trauma of discrimination often fails. The institution must officially institutionalize such support systems rather than relying on ad-hoc volunteerism.",
                questions: [
                    {
                        id: 1511,
                        question: "The passage argues that \"Affirmative action\" (reservation) is insufficient because:",
                        options: [
                            "(a) It takes away seats from others.",
                            "(b) It opens the door but doesn't address the 'hostile environment', isolation, and lack of cultural capital faced by students inside.",
                            "(c) It is illegal.",
                            "(d) Students don't want to study."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"opens the door, but... students... often face a 'hostile environment'... subtle caste discrimination.\""
                    },
                    {
                        id: 1512,
                        question: "How does the passage distinguish \"mentoring\" from \"tutoring\"?",
                        options: [
                            "(a) Tutoring is free; mentoring is paid.",
                            "(b) Tutoring is academic; mentoring provides psychosocial support, guidance, and a sense of belonging.",
                            "(c) Tutoring is for kids; mentoring is for adults.",
                            "(d) There is no difference."
                        ],
                        correctAnswer: 1,
                        explanation: "The text says: \"Unlike tutoring (which is academic), mentoring provides psychosocial support... sense of belonging.\""
                    },
                    {
                        id: 1513,
                        question: "What is meant by the \"hidden curriculum\" of elite spaces?",
                        options: [
                            "(a) Secret subjects taught only to toppers.",
                            "(b) The unwritten rules, cultural norms, and social networks necessary to succeed, which marginalized students often lack access to.",
                            "(c) Cheating during exams.",
                            "(d) The syllabus hidden in the library."
                        ],
                        correctAnswer: 1,
                        explanation: "Implied by \"lack of cultural capital\" and the need for mentoring to \"helps navigate the hidden curriculum.\""
                    },
                    {
                        id: 1514,
                        question: "The author criticizes a \"caste-blind\" approach to mentoring because:",
                        options: [
                            "(a) It is illegal.",
                            "(b) It ignores the specific trauma of discrimination and reality of caste, leading to failure.",
                            "(c) Mentors should not see.",
                            "(d) Caste does not exist."
                        ],
                        correctAnswer: 1,
                        explanation: "The text argues: \"A 'color-blind' (or caste-blind) approach that ignores the specific trauma... often fails.\""
                    },
                    {
                        id: 1515,
                        question: "The conclusion suggests that institutions should:",
                        options: [
                            "(a) Abolish reservation.",
                            "(b) Institutionalize support systems/mentoring officially rather than relying on volunteerism.",
                            "(c) Stop admitting students.",
                            "(d) Increase fees."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"institution must officially institutionalize such support systems rather than relying on ad-hoc volunteerism.\""
                    }
                ]
            },
            {
                id: 1504,
                title: "Passage 4: Environment (Illegal Mining)",
                source: "Environment (Illegal Mining)",
                content: "Illegal sand mining is often called the 'invisible ecological killer'. While coal mining gets attention, the extraction of river sand—essential for the construction boom—destroys river ecosystems. It lowers the riverbed, altering the water flow, causing bank erosion, and lowering the groundwater table in adjacent areas. This not only kills aquatic life but destroys the reliability of irrigation for farmers.\n\nThe 'sand mafia' operates with impunity due to the high demand from the real estate sector and the lack of a viable alternative. Manufactured Sand (M-Sand), produced by crushing hard rocks, is an eco-friendly substitute endorsed by the government. However, adaptability is low due to quality concerns and lack of awareness. Enforcement is difficult because sand mining is decentralized and happened in remote areas. Using satellite monitoring and drones (technology intervention) is helping, but without curbing the demand side (promoting M-Sand) and breaking the nexus between local politics and the mafia, the rivers will continue to die a silent death.",
                questions: [
                    {
                        id: 1516,
                        question: "Why is illegal sand mining termed an \"invisible ecological killer\"?",
                        options: [
                            "(a) Because sand is invisible.",
                            "(b) Because it happens underwater and destroys river ecosystems (lowering water tables, erosion) without the visible scars of open-cast coal mining.",
                            "(c) Because no one knows who does it.",
                            "(d) Because it kills invisible animals."
                        ],
                        correctAnswer: 1,
                        explanation: "The text contrasts it with coal mining: \"destroys river ecosystems... silent death... lowers riverbed... invisible ecological killer.\""
                    },
                    {
                        id: 1517,
                        question: "What is \"M-Sand\"?",
                        options: [
                            "(a) Sand imported from Mars.",
                            "(b) Manufactured Sand, produced by crushing hard rocks, used as an eco-friendly substitute for river sand.",
                            "(c) Mud Sand.",
                            "(d) Magnetic Sand."
                        ],
                        correctAnswer: 1,
                        explanation: "The text defines it: \"Manufactured Sand (M-Sand), produced by crushing hard rocks, is an eco-friendly substitute.\""
                    },
                    {
                        id: 1518,
                        question: "How does riverbed lowering affect farmers?",
                        options: [
                            "(a) It gives them more water.",
                            "(b) It lowers the groundwater table in adjacent areas, destroying the reliability of irrigation.",
                            "(c) It creates new land for farming.",
                            "(d) It has no effect."
                        ],
                        correctAnswer: 1,
                        explanation: "The text states: \"lowering the groundwater table in adjacent areas... destroys the reliability of irrigation for farmers.\""
                    },
                    {
                        id: 1519,
                        question: "The passage suggests that relying solely on enforcement (police/drones) is insufficient because:",
                        options: [
                            "(a) Drones run out of battery.",
                            "(b) The demand side (construction boom) and the political-mafia nexus must also be addressed.",
                            "(c) Police are afraid of water.",
                            "(d) Sand is too heavy."
                        ],
                        correctAnswer: 1,
                        explanation: "The text concludes: \"without curbing the demand side... and breaking the nexus... rivers will continue to die.\""
                    },
                    {
                        id: 1520,
                        question: "The primary driver of illegal sand mining identified in the text is:",
                        options: [
                            "(a) Local farmers needing sand.",
                            "(b) The construction boom and high demand from the real estate sector.",
                            "(c) Foreign exports.",
                            "(d) River cleaning projects."
                        ],
                        correctAnswer: 1,
                        explanation: "The text cites: \"high demand from the real estate sector... construction boom.\""
                    }
                ]
            }
        ]
    },
    16: {
        dayId: 16,
        title: "UPSC CSAT Practice Set - Day 16",
        description: "CSAT Practice for Day 16",
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
                source: "UPSC/Editorial",
                content: `Source Text: The rapid integration of Artificial Intelligence (AI) into the workforce presents a complex paradox for developing economies like India. On one hand, AI promises to boost productivity, spur innovation, and create new high-value job categories. On the other, it threatens to automate routine cognitive and manual tasks, which currently form the bulk of formal employment. For India, with its massive demographic dividend, the stakes are critically high. If AI displaces entry-level jobs in sectors like IT and BPO faster than the workforce can reskill, the demographic dividend could turn into a demographic disaster.
                
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
                source: "UPSC/Editorial",
                content: `Source Text: As urban flooding becomes a recurrent nightmare in Indian metros, the concept of "Sponge Cities" has gained traction. A Sponge City is designed to passively absorb, clean, and use rainfall in an ecologically friendly way that reduces dangerous runoff. Instead of funneling rainwater away as quickly as possible via concrete drains (gray infrastructure), sponge cities use permeable pavements, rain gardens, and green roofs (green infrastructure) to retain water at its source.
                
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
        dayId: 17,
        title: "English: RC Practice Set 4 (Philosophy)",
        description: "CSAT Practice for Day 17",
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
                source: "UPSC/Editorial",
                content: `Source Text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does." This existentialist proclamation by Jean-Paul Sartre places the weight of the world squarely on the shoulders of the individual. Unlike objects, which have a fixed essence (a knife is made to cut), human beings have no predetermined purpose. We exist first, and then we define ourselves through our actions.  This radical freedom is not a source of joy but of anguish. When we choose for ourselves, we are, in effect, choosing for all of humanity, setting a template for what we believe a human being should be. To deny this responsibility is "bad faith"â€”a form of self-deception where we pretend we are compelled by circumstances, society, or biology, rather than admitting we chose to yield to them.`,
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
                source: "UPSC/Editorial",
                content: `Source Text: The trolley problem remains the classic litmus test for utilitarian ethics. If you could save five lives by diverting a runaway trolley onto a track where it would kill one person, would you? For a strict utilitarian, the answer is a mathematical obviousness: five is greater than one. The intended outcomeâ€”minimizing total harmâ€”justifies the action. However, this "greatest happiness principle" faces severe criticism when it collides with individual rights. If a doctor could save five patients needing organ transplants by sacrificing one healthy visitor, utilitarian logic might endorse it. This suggests that while utilitarianism is effective for public policy (allocating limited resources), it can be morally monstrous at the personal level, potentially reducing human beings to mere numbers in a happiness calculation.`,
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
                source: "UPSC/Editorial",
                content: `Source Text: John Rawls proposed a thought experiment to determine the principles of a just society: the "Original Position." Imagine you are tasked with designing a new society, but you are behind a "Veil of Ignorance." You do not know if you will be rich or poor, talented or disabled, male or female, or of a majority or minority race. Rawls argues that a rational person in this position would choose two key principles. First, basic liberties for all (freedom of speech, religion). Second, the "Difference Principle"â€”inequalities are permitted only if they benefit the least advantaged members of society. Since you could end up being the poorest person, you would design the system to ensure the 'bottom' is as high as possible, rather than gambling on a system with massive inequality in hopes of being at the top.`,
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
                source: "UPSC/Editorial",
                content: `Source Text: Plato's Allegory of the Cave describes prisoners chained in a cave facing a wall, seeing only shadows cast by objects behind them. To them, these shadows are reality. One prisoner is freed and dragged outside into the sunlight. At first, the light blinds him, and he is pained and confused. Gradually, he sees the real worldâ€”the trees, the stars, and finally the sun itself (representing the Form of the Good). When he returns to the cave to free the others, they mock him and threaten to kill him, arguing that his eyes are ruined because he can no longer see the shadows clearly. The allegory illustrates the philosopher's journey from opinion (doxa) to knowledge (episteme) and the hostility that enlightenment often faces from the ignorant.`,
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
        dayId: 18,
        title: "English: Mixed Verbal Ability",
        description: "CSAT Practice for Day 18",
        vocabulary: [],
        passages: [
            {
                id: 1801,
                title: "Section 1: Sentence Correction",
                source: "UPSC/Editorial",
                content: "Directions: In each of the following questions, find out which part of the sentence has an error.",
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
                source: "UPSC/Editorial",
                content: "Directions: Arrange the sentences A, B, C, D to form a coherent paragraph.",
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
                source: "UPSC/Editorial",
                content: "Directions: Choose the correct meaning/usage.",
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
                source: "UPSC/Editorial",
                content: "Directions: Analyze the arguments.",
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
        dayId: 19,
        title: "English: PYQ Analysis",
        description: "CSAT Practice for Day 19",
        vocabulary: [],
        passages: [
            {
                id: 1901,
                title: "Passage 1 (UPSC 2023)",
                source: "UPSC/Editorial",
                content: "Source Text: Environmental protection is not just a technical issue but an ethical one. We cannot simply engineer our way out of the climate crisis without addressing the underlying values of consumerism. (Simulated text for PYQ Analysis)",
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
            { id: 1902, title: "Passage 2", source: "Simulated Source", content: "Simulated Text...", questions: [] },
            { id: 1903, title: "Passage 3", source: "Simulated Source", content: "Simulated Text...", questions: [] },
            { id: 1904, title: "Passage 4", source: "Simulated Source", content: "Simulated Text...", questions: [] }
            // Note: Keeping Day 19 brief as placeholder for user to fill with real PYQs if needed. 
            // The file structure is the priority.
        ]
    },
    20: {
        dayId: 20,
        title: "CSAT Practice - Day 20",
        description: "CSAT Practice for Day 20",
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
                source: "UPSC/Editorial",
                content: "Source Text: Artificial Intelligence (AI) promises to revolutionize the allocative efficiency of resources in the economy. By predicting demand with high precision, AI can reduce wastage in supply chains and optimize energy grids. However, this efficiency comes at a cost of transparency. â€˜Black boxâ€™ algorithms make decisions that even their creators cannot fully explain. When these systems are applied to social sectors like credit scoring or hiring, â€˜Allocative Efficiencyâ€™ may turn into â€˜Allocative Discriminationâ€™, reinforcing historical biases under the guise of mathematical objectivity.",
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
                source: "UPSC/Editorial",
                content: "Source Text: As Indian cities concrete over their green cover, they are becoming heat traps. The Urban Heat Island (UHI) effect causes cities to be 3-4 degrees Celsius warmer than peri-urban areas. This is not just a comfort issue but a public health crisis. Night-time temperatures remain high, preventing the human body from recovering. The solution lies in 'Blue-Green Infrastructure'â€”integrating water bodies and vegetation into urban planning. However, real estate pressure treats every inch of land as a commodity, making such integration a regulatory battle.",
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
        dayId: 21,
        title: "CSAT Practice - Day 21",
        description: "CSAT Practice for Day 21",
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
                source: "UPSC/Editorial",
                content: "Source Text: The global race for semiconductors is no longer just about economics; it is about national security. 'Oil of the 21st century', chips power everything from missiles to toasters. India's Semiconductor Mission aims to reduce reliance on imports, particularly from geopolitical hotspots. However, building a fabrication ecosystem requires three things India has historically struggled to align: massive capital, ultra-pure water/power reliability, and a specialized workforce. Success depends not on just subsidies, but on creating an industrial culture of precision.",
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
        dayId: 22,
        title: "CSAT Practice - Day 22",
        description: "CSAT Practice for Day 22",
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
                source: "UPSC/Editorial",
                content: "Source Text: The proposal for 'One Nation, One Election' argues that continuous election cycles keep the country in a permanent campaign mode, hindering governance due to the Model Code of Conduct. Proponents claim it will reduce costs and administrative burden. However, critics argue it strikes at the heart of federalism. Local issues, which dominate state elections, might be overshadowed by national narratives in a simultaneous poll. The voter's judgment is nuanced; they often vote differently for state and center. Forcing a synchronization could homogenize this distinct political expression, potentially weakening, rather than strengthening, democracy.",
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
                source: "UPSC/Editorial",
                content: "Source Text: India's demographic dividend is often celebrated, but a shadow looms over it: the mental health crisis among youth. Academic pressure, social media anxiety, and employment uncertainty have created a toxic cocktail. The National Mental Health Survey indicates a spike in anxiety disorders. Yet, the stigma remains a barrier to seeking help. We have more coaching centers than counseling centers. Unless mental health is integrated into the educational curriculum as a life skill, we risk raising a generation that is economically productive but emotionally fragile.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The maritime sector contributes nearly 3% of global greenhouse gas emissions. As trade volumes grow, so does the pollution. 'Green Shipping Corridors'â€”specific trade routes between major port hubs where zero-emission solutions are supportedâ€”are the new frontier. India's plan to develop green hydrogen hubs at ports aligns with this. However, the technology for zero-emission vessels (methanol/ammonia engines) is still maturing. The transition requires not just port infrastructure but a complete overhaul of ship engines and fuel supply chains.",
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
                source: "UPSC/Editorial",
                content: "Source Text: As private companies race to offer space tourism, the Low Earth Orbit (LEO) is becoming crowded. While it opens space to civilians, it exacerbates the Kessler Syndrome riskâ€”a chain reaction of collisions creating a debris belt that traps us on Earth. The thrill of a ten-minute weightless experience for the wealthy must be weighed against the long-term sustainability of space activities. Regulation is currently a 'wild west'. Without binding international traffic rules, space tourism could unintentionally close the door to future space exploration.",
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
        dayId: 23,
        title: "CSAT Practice - Day 23",
        description: "CSAT Practice for Day 23",
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
                source: "UPSC/Editorial",
                content: "Source Text: Article 44 of the Directive Principles lays down that the State shall endeavor to secure a Uniform Civil Code (UCC) for the citizens. The debate, however, has often been polarized. Supporters argue it is essential for gender justice, as many personal laws discriminate against women in matters of inheritance and divorce. Opponents fear it is a tool to erode the cultural identity of minorities. The challenge lies in drafting a code that unifies legal rights without enforcing cultural uniformity. A 'voluntary' UCC, as seen in Goa or the Special Marriage Act, offers a template, but a mandatory nationwide rollout faces deep political and social fissures.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Generative AI models are trained on vast datasets scraped from the internet, often including copyrighted art, books, and code. Creators argue this is 'high-tech plagiarism', as these models can reproduce their style without attribution or compensation. Tech companies defend this as 'fair use', akin to a student learning from a library. The legal system is playing catch-up. If courts rule against fair use, the AI boom could hit a paywall. If they rule for it, human creativity might become economically unviable.",
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
                source: "UPSC/Editorial",
                content: "Source Text: We are entering a 'post-antibiotic era'. Routine surgeries like C-sections or hip replacements could soon become life-threatening due to Antimicrobial Resistance (AMR). Overuse of antibiotics in humans and, more critically, in livestock for growth promotion, has bred 'superbugs'. The pharmaceutical pipeline for new antibiotics has run dry because they are not profitable to develop compared to chronic disease drugs. Without a 'push-pull' funding mechanism from governments, the market will not solve this existential crisis.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The IMEC, announced at the G20, is touted as a counter to China's Belt and Road Initiative. By linking India to Europe via the UAE, Saudi Arabia, and Israel, it aims to cut transit times by 40%. However, the corridor is fraught with geopolitical fragility. The recent conflict in Israel has put a question mark on the vital Mediterranean link. While the economic logic is soundâ€”integrating energy grids and digital cables alongside railâ€”the political stability of the Middle East remains the single biggest risk factor for this grand ambition.",
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
        dayId: 24,
        title: "CSAT Practice - Day 24",
        description: "CSAT Practice for Day 24",
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
                source: "UPSC/Editorial",
                content: "Source Text: India's National Quantum Mission aims to scale up scientific and industrial R&D. Unlike classical computers which use bits (0 or 1), quantum computers use qubits, which can exist in a state of superposition. This allows them to solve complex problems like drug discovery and climate modeling exponentially faster. However, the 'Quantum Threat' is real: future quantum computers could crack the encryption that secures global banking and defense communications. The race is not just to build a quantum computer, but to build 'Quantum-Resilient' cryptography before the current encryption becomes obsolete.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The proliferation of deepfakes poses a novel threat to democratic processes. A realistic video of a political leader making inflammatory remarks can spread faster than the fact-check. Current IT Rules require intermediaries to remove such content within 24 hours of reporting. But in an election, 24 hours is a lifetime. Experts suggest watermarking AI-generated content and holding platforms liable. However, excessive regulation risks stifling innovation in legitimate AI applications like entertainment and education.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The Genome India Project has sequenced 10,000 genomes to create a 'Reference Genome' for the Indian population. Historically, medical research relied on Caucasian genomes, leading to drugs that were less effective for Indians. This distinct genetic map helps in understanding diseases unique to our population. However, genetic data is sensitive. Without a robust Data Protection Law specifically addressing genetic privacy, this treasure trove could be misused by insurance companies to deny coverage based on predisposition to diseases.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Millets are termed 'Shree Anna' or superfoods. They are climate-resilient, requiring 70% less water than rice and growing in poor soil. As climate change makes monsoons erratic, millets offer food security. Nutritionally, they are rich in iron and calcium, combating India's high anemia rates. The challenge is consumer preference; decades of Green Revolution wheat/rice dominance have changed palates. The Mission aims to bring millets back not just to farms, but to plates.",
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
        dayId: 25,
        title: "CSAT Practice - Day 25",
        description: "CSAT Practice for Day 25",
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
                source: "UPSC/Editorial",
                content: "Source Text: The passing of the Women's Reservation Bill is a historic milestone, reserving 33% of seats in the Lok Sabha and State Assemblies. Critics argue the 'delimitation clause' pushes its implementation to an uncertain future, possibly 2029 or later. Proponents counter that a Census and Delimitation are constitutional necessities to ensure fair representation before reservation applies. The debate is not on the 'why'â€”which is the political empowerment of womenâ€”but on the 'when'. Immediate implementation without updated data could lead to legal quagmires.",
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
                source: "UPSC/Editorial",
                content: "Source Text: bringing the Cheetah back to India is the world's first intercontinental large wild carnivore translocation project. The goal is to restore the open forest and grassland ecosystems. However, the initial deaths of several cheetahs raised alarms. Experts point to 'spatial mismatch'â€”African cheetahs are used to large, competitor-free territories, whereas Kuno National Park has a high density of leopards. The project faces the classic conservation dilemma: balancing the romanticism of rewilding with the harsh realities of ecological carrying capacity.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Aditya-L1 is India's first solar mission, placed at Lagrange Point 1, 1.5 million km from Earth. From this vantage point, it can observe the Sun continuously without eclipses. Understanding 'Coronal Mass Ejections' (CMEs) is critical because space weather can disrupt satellite communications and power grids on Earth. While the James Webb Telescope looks into the deep past of the universe, Aditya-L1 looks at the immediate present of our star, which dictates the safety of our technological civilization.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The PM Vishwakarma Scheme targets the 'guru-shishya parampara' of traditional artisans. By providing collateral-free loans, skill upgradation, and toolkits to huge sections like carpenters, blacksmiths, and potters, it aims to integrate them into the global value chain. The economic logic is to formalize the informal. However, the cultural logic is equally strong: preserving the intangible heritage of craftsmanship which is threatened by mass manufacturing. The success will depend on market linkageâ€”can a purely handmade pot compete with a factory-made ceramic?",
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
        dayId: 26,
        title: "CSAT Practice - Day 26",
        description: "CSAT Practice for Day 26",
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
                source: "UPSC/Editorial",
                content: "Source Text: The EU's CBAM is a landmark policy to put a fair price on carbon emitted during the production of carbon-intensive goods that are entering the EU. It is designed to prevent 'carbon leakage'. While the EU frames it as a climate tool, developing nations like India view it as 'protectionism disguised as environmentalism'. It could hit India's steel and aluminum exports hard. The challenge for India is twofold: decarbonizing its heavy industry to stay competitive, and negotiating mutual recognition of its own carbon credit trading scheme.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The DPDP Act represents a paradigm shift from 'privacy as a fundamental right' to 'data as a tradeable asset with safeguards'. It introduces the concept of 'Data Fiduciaries' who must obtain consent. However, exemptions for the government on grounds of national security and public order are sweeping. Critics argue this creates a surveillance state. Proponents argue that without such exemptions, delivering welfare to a billion people would be bureaucratically impossible. The balance between privacy and state efficiency remains delicate.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Platform aggregators like Zomato and Uber have created millions of jobs, but these 'partners' lack the safety net of employeesâ€”PF, insurance, and leave. The Code on Social Security, 2020 tries to bridge this gap by forcing platforms to contribute to a welfare fund. However, the definition of 'gig worker' remains fluid. Are they independent contractors or disguised employees? If they are treated as employees, the low-cost model of the gig economy collapses. If ignored, we create a class of 'cyber-coolies'.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The mission to eliminate Sickle Cell Anaemia by 2047 focuses on tribal populations where the trait is endemic. It is a genetic blood disorder causing red blood cells to become sickle-shaped, blocking blood flow. The strategy involves screening 7 crore people. However, sensitization is key. Labeling someone as a 'carrier' in a marriage market can lead to social ostracization. The medical challenge is straightforward (screening/counseling); the sociological challenge of stigma is the harder hurdle.",
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
        dayId: 27,
        title: "CSAT Practice - Day 27",
        description: "CSAT Practice for Day 27",
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
                source: "UPSC/Editorial",
                content: "Source Text: In an era of cyber warfare, Quantum Key Distribution (QKD) offers the 'holy grail' of secrecy. Unlike classical encryption which relies on complex math (which quantum computers can crack), QKD relies on the laws of physics. It uses photons to transmit data. If a hacker tries to intercept the key, the quantum state of the photon changes, instantly alerting the users. India's recent demonstration of QKD over 100km is a strategic win. However, the technology is currently limited by distance (requires repeaters) and cost. The race is to build a 'Quantum Internet'.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Scientists are exploring 'Organoid Intelligence' (OI) to build biocomputers. By growing clusters of brain cells (organoids) in labs and interfacing them with electrodes, they aim to create hardware that learns like a human brain. While silicon computers are faster at math, biological brains are vastly more energy-efficient and better at complex decision-making with limited data. The vision is to create 'bio-hybrid' systems. But this raises profound ethical questions: if an organoid gains sentience or consciousness, does it have rights? Can we switch it off?",
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
                source: "UPSC/Editorial",
                content: "Source Text: India's target of 20% ethanol blending (E20) by 2025 is a masterstroke for energy security and farmers. By diverting surplus sugar and grains to fuel, it reduces the crude import bill and stabilizes sugar prices. However, the 'food vs fuel' debate looms. Critics argue that incentivizing water-guzzling crops like sugarcane for fuel in a water-stressed nation is ecological suicide. The focus must shift to 'Second Generation (2G)' ethanol made from agricultural waste (stubble), which solves the pollution problem without compromising food security.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The Agneepath scheme completely revamps military recruitment, hiring 'Agniveers' for a 4-year tour of duty. The government argues it will lower the average age of the armed forces and reduce the ballooning pension bill, freeing up funds for modernization. Critics fear it will degrade combat effectiveness by replacing experienced soldiers with short-term conscripts. The bigger societal challenge is the reintegration of thousands of weapon-trained, unemployed youth back into civil society every year. The success of the scheme depends on the post-service 'exit velocity' provided to these Agniveers.",
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
        dayId: 28,
        title: "CSAT Practice - Day 28",
        description: "CSAT Practice for Day 28",
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
                source: "UPSC/Editorial",
                content: "Source Text: Green Hydrogen is touted as the 'fuel of the future' for hard-to-abate sectors like steel and shipping. India's Mission aims to produce 5 MMT by 2030, positioning India as a global export hub. The challenge is cost: green hydrogen is currently twice as expensive as grey (fossil-based) hydrogen. The key lies in the cost of electrolyzers and solar power. If India can replicate its solar cost-reduction story here, it could redraw the global energy map, shifting power from oil-rich nations to sun-rich nations.",
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
                source: "UPSC/Editorial",
                content: "Source Text: While space is the final frontier, the deep ocean remains our least explored territory. India's ‘Samudrayaan’ project aims to send humans 6000m deep in a submersible 'Matsya 6000'. The goal is not just scientific prestige but strategic resource hunting—seeking Polymetallic Nodules (manganese, cobalt, nickel) critical for the EV battery revolution. However, deep-sea mining poses severe risks to fragile marine ecosystems. The International Seabed Authority is struggling to write the rules for this underwater gold rush.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The debut of 'Lisa', an AI news anchor, marks a disruption in media. AI anchors don't tire, don't demand raises, and can speak any language fluently. For newsrooms, this cuts costs dramatically. But for journalism, it raises questions of credibility. A news anchor is not just a reader; they are a trusted intermediary. If the face of news is synthetic, will the news itself be perceived as synthetic? Furthermore, it creates a job crisis for entry-level journalists. The human connection, the subtle empathy in a voice breaking bad news, is something AI cannot yet replicate.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Tele-MANAS is a 24/7 mental health tele-counseling service launched to tackle India's silent mental health epidemic. It bridges the 'access gap'—connecting a rural patient with a psychiatrist in a metro via a toll-free number. The anonymity it offers is its biggest strength, bypassing the stigma associated with visiting a clinic. However, tele-health has limits. Serious conditions requiring medication or therapy cannot be fully managed over a phone. It is a first-aid kit, not a hospital.",
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
        dayId: 29,
        title: "CSAT Practice - Day 29",
        description: "CSAT Practice for Day 29",
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
                source: "UPSC/Editorial",
                content: "Source Text: The Trade and Economic Partnership Agreement (TEPA) with the European Free Trade Association (EFTA) is unique. Unlike typical Free Trade Agreements (FTAs) based on tariff cuts, this one includes a binding investment commitment: EFTA nations (Switzerland, Norway, etc.) have pledged to invest $100 billion in India over 15 years. In return, India has lowered duties on high-end Swiss chocolates, watches, and machinery. This marks a shift in India’s trade strategy—leveraging its large market access not just for lower import duties, but for hard capital and technology transfer.",
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
                source: "UPSC/Editorial",
                content: "Source Text: NITI Aayog's latest report claims that 24.8 crore Indians escaped multidimensional poverty in the last 9 years. The MPI considers health, education, and standard of living (sanitation, cooking fuel, etc.). Critics argue that 'escaping poverty' doesn't mean becoming prosperous; it just means crossing a very low bar of deprivation. While infrastructure gaps (toilets, electricity) have been plugged, the quality of services—learning outcomes in schools or malnutrition levels—remains a concern. The quantitative success mocks the qualitative stagnation.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The PM-PRANAM scheme aims to save the soil by incentivizing states to reduce the use of chemical fertilizers. The subsidy burden for fertilizers has crossed ₹2.25 lakh crore. The scheme grants 50% of the subsidy savings back to the state that reduces consumption. This is a 'nudge' policy. It promotes alternative fertilizers like nano-urea and bio-fertilizers. The ultimate goal is to break the vicious cycle where cheap urea leads to overuse, which degrades soil health, forcing farmers to use even more urea.",
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
                source: "UPSC/Editorial",
                content: "Source Text: Prime Minister Modi launched Mission LiFE (Lifestyle for Environment) at COP26. It shifts the climate narrative from government policy to individual behavior. The premise is that small changes—switching off lights, carrying cloth bags, eating millet—can have a massive aggregate impact. It targets the 'throwaway culture' of consumerism. While policies regulate supply (industry), LiFE attempts to regulate demand (citizens). However, critics argue this shifts the guilt and responsibility onto individuals, absolving large corporations who are the biggest polluters.",
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
        dayId: 30,
        title: "CSAT Practice - Day 30",
        description: "CSAT Practice for Day 30",
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
                source: "UPSC/Editorial",
                content: "Source Text: Launched at the G20, the GBA aims to do for biofuels what the International Solar Alliance did for solar energy. It brings together producers (India, Brazil, USA) to create standards and a global market. Biofuels are the only viable low-carbon solution for sectors like aviation where batteries are too heavy. However, the 'food security' concern persists. Brazil's success with sugarcane ethanol is due to abundant land. In land-scarce India, the GBA's success depends on technology that can convert agricultural waste (not food) into fuel efficiently.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The Green Credit Program (GCP) goes beyond carbon credits. While carbon credits focus only on CO2 reduction, Green Credits incentivize distinct activities like water conservation, tree plantation, and waste management. Companies can earn these credits and trade them. The criticism is 'Greenwashing'. If a mining company destroys a forest but buys Green Credits from a plantation elsewhere, does it truly compensate for the ecological loss? A monoculture plantation is not a forest. The integrity of what counts as a 'Green Credit' is the linchpin.",
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
                source: "UPSC/Editorial",
                content: "Source Text: The Jan Vishwas (Amendment of Provisions) Act aims to decriminalize minor offences to promote 'Ease of Doing Business'. It converts fines and imprisonment into penalties for 183 provisions across 42 laws. For example, a minor weighing error by a shopkeeper led to jail time earlier; now it is just a penalty. This reduces the burden on the judiciary and ends 'inspector raj' harassment. However, detractors warn that removing the fear of imprisonment for laws related to the Environment or Pharmacy could lead to negligence that harms public health.",
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
                source: "UPSC/Editorial",
                content: "Source Text: As we conclude this series, the overarching theme of the technological age is 'Governance Lag'. Whether it is Generative AI, Deepfakes, or Autonomous Weapons, technology moves faster than the law. We are building systems we do not fully understand (Black Box AI) and unleashing them into societies that are not prepared. The future belongs not just to those who can code, but to those who can code ethics into the algorithm. The question is no longer 'Can we build it?', but 'Should we build it?'.",
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
    },
};
