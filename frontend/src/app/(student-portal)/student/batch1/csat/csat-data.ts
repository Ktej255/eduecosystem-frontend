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
        title: "UPSC CSAT Practice Set - Day 03",
        vocabulary: [],
        passages: [
            {
                id: 101,
                title: "Passage 1: The POCSO Paradox",
                text: `Source Text: India crossed a much-publicised milestone in 2025 – fast track special courts cleared more child sexual offence cases than registered that year under the Protection of Children from Sexual Offences (POCSO) Act. They recorded a 109% disposal rate. Commentaries have hailed this as a turning point, suggesting courts have broken the backlog. However, new data and field reports point to a different tipping point where disposals rise but convictions fall and thousands of children remain stuck in long trials with little support.

Convictions have actually gone down from 35% back in 2019 to 29% across the country by 2023. If we take the baseline figure of 35% in 2019, a 90% disposal rate in 2023 would mean that conviction should have risen to 45%. But it is 29% instead. The bottom line is that clearing cases faster means weaker convictions, not better justice. Fast track courts average just 19%. In a number of States, there are more accused walking free than being put behind bars.

Children who testify in POCSO cases have particular needs that go beyond quick hearings. They require trained support persons, sensitive police and lawyers. When these protections remain on paper, higher disposal rates coexist with fragile convictions. Investigations remain hurried, charge sheets stay incomplete and forensic reports are delayed. The Supreme Court directed para-legal volunteers (PLV) to be appointed at every police station. Andhra Pradesh, for instance, has PLVs in 42 of 919 stations, while Tamil Nadu has none across 1,577. Without PLVs, families walk into police stations alone, scared, pressured and ignored.

There have been occasions when courts have acquitted the accused when they offered to marry the survivors once they turned adult. The higher judiciary has let off convicts citing ‘happy marriage’ despite Section 6 convictions against the perpetrator. Such rulings push vulnerable girls into life-long ties with their abusers. Speed without support leaves children more broken than justice served.`,
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
                        question: "What is the author’s primary criticism of the \"happy marriage\" acquittals mentioned in the text?",
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
                text: `Source Text: The year 2025 brought about unprecedented disruption in global geopolitics. The return of President Donald Trump to the White House has resulted in a significant churn. However, the Quad has remained a crucial facet of Washington’s engagement. The Quad, a group of four like-minded countries – India, Australia, Japan, and the U.S. – has evolved as a crucial forum with a multifaceted agenda. The overarching objective remains anchoring a rules-based order in the region.

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
                        explanation: "Statement 1 is false (Trump's return caused \"churn\" but Quad remains a priority). Statement 2 is false (Text says: \"'Malabar' naval exercise, though not officially a part of the Quad’s roster...\"). Statement 3 is correct (Text: \"Ship Observer Mission, which was operationalised for the first time in June 2025\")."
                    },
                    {
                        id: 9,
                        question: "What acts as the \"overarching objective\" of the Quad, according to the passage?",
                        options: [
                            "To counter China's military expansion specifically in the South China Sea.",
                            "To establish a NATO-like military treaty in Asia.",
                            "To delivering global good and establishing/sustaining a rules-based order in the Indo-Pacific.",
                            "To ensure that Donald Trump’s \"America First\" policy is implemented globally."
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
                text: `Source Text: While some argue that the current law criminalises consensual relationships among adolescents, others warn that lowering the age could undermine protections against child exploitation. On January 10, the Supreme Court acknowledged the growing misuse of the POCSO Act in consensual, romantic adolescent relationships. The age of consent in India is currently 18 years. Consequently, sexual acts with minors are treated as “statutory rape”, based on the legal presumption that children lack the capacity to give valid consent.

Data from studies like Enfold paint a clear picture – there are too many cases, which stem from consensual romance, that are often weaponised by disapproving parents. This clogs courts and erodes trust in the system. An Enfold study analysing 7,064 POCSO judgments found that 24.3% involved romantic relationships.

However, there are genuine concerns on reducing the age of consent. Many believe that such a move would risk weakening the deterrent framework, enabling trafficking and other forms of child abuse under the guise of consent. The current “bright-line rule” – which treats all individuals under 18 as incapable of consenting – reflects a clear legislative intent to create an unambiguous zone of protection.

Instead of a blanket reduction that could open doors to predators disguising coercion as consent, we need a pragmatic tweak: introduce ‘close-in-age’ exemptions for 16-18-year-olds, say within a 3-4 year gap, coupled with mandatory judicial reviews to sniff out any foul play. This way, we honour adolescent autonomy without gutting protections.`,
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
                        explanation: "The author concludes by suggesting we \"introduce ‘close-in-age’ exemptions for 16-18-year-olds... This way, we honour adolescent autonomy without gutting protections.\""
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
                            "By disapproving parents who use the law to criminalize their child’s romantic relationship.",
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
    }
    // Add more days here...
};
