// UPSC CSAT Practice Set - Day 01 (January 1)
// Pomodoro Evening Session - CSAT Component

export interface CSATPassage {
    id: number;
    title: string;
    content: string;
}

export interface CSATQuestion {
    id: number;
    passageId: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
}

export const DAY_01_PASSAGES: CSATPassage[] = [
    {
        id: 1,
        title: "The Paradox of Speed in Justice",
        content: `India crossed a much-publicised milestone in 2025 – fast track special courts cleared more child sexual offence cases than registered that year under the Protection of Children from Sexual Offences (POCSO) Act. They recorded a 109% disposal rate and closed 87,754 cases against the 80,320 registered. Commentaries have hailed this as a turning point, suggesting that courts have finally broken the backlog. However, new data and field reports point to a different tipping point where disposals rise but convictions fall and thousands of children remain stuck in long trials with little support.

The POCSO Act, passed in 2012, was designed as a special law because earlier provisions on rape and molestation under the Indian Penal Code failed to recognise the particular nature of offences against children. POCSO promised child-friendly procedures, time-bound trials and a system that would see and hear children differently from adult survivors. India now runs 773 fast track special courts. But convictions have actually gone down from 35% back in 2019 to 29% across the country by 2023. If we take the baseline figure of 35% in 2019, a 90% disposal rate in 2023 would mean that convictions should have risen to 45%. But it is 29% instead. The bottom line is that clearing cases faster means weaker convictions, not better justice. Fast track courts average just 19% convictions.

Children who testify in POCSO cases have particular needs that go beyond quick hearings. They require trained support persons, sensitive police and lawyers. When these protections remain on paper, higher disposal rates coexist with fragile convictions. The Supreme Court, in December 2025, directed para-legal volunteers (PLV) to be appointed at every police station. The status report highlights gaps. Andhra Pradesh, for instance, has PLVs in 42 of 919 stations, while Tamil Nadu has none across 1,577. Without PLVs, families walk into police stations alone, scared, pressured and ignored. In the Unnao rape case, several news reports pointed to the initial reluctance by the police to register the case.

There have been occasions when courts have acquitted the accused when they offered to marry the survivors once they turned adult. The higher judiciary has let off convicts citing 'happy marriage' despite Section 6 convictions against the perpetrator. Such rulings push vulnerable girls into life-long ties with their abusers. Speed without support leaves children more broken than justice served.`
    },
    {
        id: 2,
        title: "Geopolitics - The Quad",
        content: `The year 2025 brought about unprecedented disruption in global geopolitics. The return of President Donald Trump to the White House has resulted in a significant churn. However, the Quad has remained a crucial facet of Washington's engagement. The Quad, a group of four like-minded countries – India, Australia, Japan, and the U.S. – has evolved as a crucial forum with a multifaceted agenda. The overarching objective remains anchoring a rules-based order in the region.

The Quad was unable to convene a leader-level summit in 2025, which was scheduled to be hosted by India. This has led to speculation over whether the group has indeed withered. 2025 was, however, a year of interregnum for the Quad. While the Quad was formed in 2004, the momentum died following the steady withdrawal of member-countries. It gained steam again in 2017. Since its revival, the Quad has hosted six leader-level summits between 2021-2024.

For a group such as the Quad, with no institutional anchor, leader-level summits serve as a vital platform to foster bonhomie and achieve strategic convergence. Historically, it is at these summits that new initiatives have been conceptualized. Thus, 2025 was indeed a year that challenged the growing synergy. However, the fact that despite not holding a leader-level summit, it has continued to operationalise its initiatives demonstrates its remarkable resilience. Initiatives like the Quad-at-Sea Ship Observer Mission and the 'Malabar' naval exercise suggest the group has shown critical resilience even as it faced turbulence.`
    },
    {
        id: 3,
        title: "Polity - Delimitation",
        content: `The southern States have found that reducing population growth and improving health and education have led to serious disadvantages. The immediate fallout is that the Finance Commission (FC) has reduced allocations to the south as population size carries 50% weight. The longer-term implication is more serious: the proportion of seats will remain the same but the gap in the absolute number of seats will widen in the run up to the 2029 elections. Delimitation will be decided by a Delimitation Commission (DC) before 2029.

Most of the population increase since 1991 has happened in the northern States. The 84th Constitutional Amendment (2001) extended the freeze on the number of seats from 2000 to 2026 to enable states to pursue population stabilisation. The Census was delayed from 2021. The results are now expected by October 2028. This is why the southern States have no choice but to join hands around the Digressive Proportionality principle. This principle ensures fair representation by giving larger countries more seats but fewer per person and giving smaller countries fewer seats but more representation per person. It balances population size with state equality.

What are the solutions? The first is to increase the total number of Lok Sabha seats while retaining the current proportional distribution. This might cause the least disruption but does not solve the problem of States with higher population growth gaining more MPs. The second is to raise the total seats and introduce equality in the Rajya Sabha (US Senate model). But the ruling party will oppose this as it interferes with its dominance. The third is to raise the number of seats in Vidhan Sabhas to equalize representatives per 1,000 population. The last is to raise the total number of Lok Sabha seats, but change current ratios so that 60% of seats are allocated according to population size and 40% depend on efforts to reduce population growth.`
    },
    {
        id: 4,
        title: "Legal Rights - Age of Consent",
        content: `On January 10, the Supreme Court acknowledged the growing misuse of the POCSO Act in consensual, romantic adolescent relationships. The age of consent in India is currently 18 years. Consequently, sexual acts with minors are treated as "statutory rape", based on the legal presumption that children lack the capacity to give valid consent. Data from studies like Enfold paint a clear picture – there are too many cases which stem from consensual romance that are often weaponised by disapproving parents. This clogs courts and erodes trust in the system. An Enfold study analysing 7,064 POCSO judgments found that 24.3% involved romantic relationships.

However, there are genuine concerns on reducing the age of consent. Many believe that such a move would risk weakening the deterrent framework, enabling trafficking and other forms of child abuse under the guise of consent. The current "bright-line rule" – which treats all individuals under 18 as incapable of consenting – reflects a clear legislative intent to create an unambiguous zone of protection.

Instead of a blanket reduction that could open doors to predators disguising coercion as consent, the author suggests a pragmatic tweak: introduce 'close-in-age' exemptions for 16-18-year-olds, say within a 3-4 year gap, coupled with mandatory judicial reviews to sniff out any foul play. This way, we honour adolescent autonomy without gutting protections.`
    }
];

export const DAY_01_QUESTIONS: CSATQuestion[] = [
    // Passage 1: POCSO (Questions 1-5)
    {
        id: 1,
        passageId: 1,
        question: "Which one of the following statements best reflects the \"crux\" of the passage?",
        options: [
            "The establishment of 773 fast track special courts has successfully eliminated the backlog of POCSO cases in India.",
            "The focus on statistical disposal targets has led to a decline in the quality of justice, evidenced by falling conviction rates and inadequate victim support.",
            "The primary reason for low conviction rates is the lack of Section 6 provisions in the original Indian Penal Code.",
            "The Supreme Court's 2025 directive on Para-Legal Volunteers (PLVs) has been fully implemented in southern states like Tamil Nadu."
        ],
        correctAnswer: 1,
        explanation: "The passage contrasts the 'milestone' 109% disposal with the 'darker truth' of falling convictions (29%) and lack of support, calling it 'not better justice.'"
    },
    {
        id: 2,
        passageId: 1,
        question: "Based on the passage, what is the \"tipping point\" the author warns about?",
        options: [
            "A point where the number of registered cases exceeds the capacity of the police force.",
            "A situation where the disposal rate exceeds 100%, causing the judicial system to run out of cases.",
            "A scenario where administrative efficiency (high disposal) comes at the cost of substantive justice (lower convictions and lack of support).",
            "The moment when the age of consent is lowered to reduce the burden on courts."
        ],
        correctAnswer: 2,
        explanation: "The tipping point is where 'disposals rise but convictions fall,' indicating efficiency is prioritized over substantive justice."
    },
    {
        id: 3,
        passageId: 1,
        question: "The author cites the \"happy marriage\" acquittals by the higher judiciary to illustrate:",
        options: [
            "A progressive approach to rehabilitation of offenders.",
            "A pragmatic solution to reduce the social stigma faced by survivors.",
            "A failure of the justice system where the safety and rights of the child are compromised for the sake of social compromise.",
            "The effectiveness of Para-Legal Volunteers in mediating disputes."
        ],
        correctAnswer: 2,
        explanation: "The text says such rulings 'push vulnerable girls into life-long ties with their abusers,' highlighting a failure to protect the child."
    },
    {
        id: 4,
        passageId: 1,
        question: "According to the passage, why are Para-Legal Volunteers (PLVs) described as the \"missing first line of defence\"?",
        options: [
            "Because they are responsible for conducting forensic tests which are often delayed.",
            "Because they act as a buffer for families against police reluctance, threats, and pressure during the initial filing of cases.",
            "Because they serve as temporary judges in fast track courts to speed up trials.",
            "Because they provide financial compensation to the victim's family immediately after the crime."
        ],
        correctAnswer: 1,
        explanation: "The text states: 'Without PLVs, families walk into police stations alone, scared... reluctance by police to register the case.' PLVs prevent this."
    },
    {
        id: 5,
        passageId: 1,
        question: "Which of the following is a valid inference regarding the \"fragile convictions\" mentioned in the text?",
        options: [
            "They refer to convictions that are based on strong forensic evidence but weak witness testimony.",
            "They imply that even when convictions occur, they are often based on shaky grounds due to hurried investigations and lack of support, making them vulnerable to appeals or acquittals.",
            "They refer to cases where the judge is unsure of the verdict but convicts anyway to meet targets.",
            "They refer to convictions in cases involving adult survivors rather than children."
        ],
        correctAnswer: 1,
        explanation: "'Fragile' implies easily overturned. The text links this to 'investigations remain hurried, charge sheets incomplete,' meaning the conviction is legally weak."
    },
    // Passage 2: Quad (Questions 6-10)
    {
        id: 6,
        passageId: 2,
        question: "The author characterizes 2025 as a year of \"interregnum\" for the Quad. What does this term imply in this context?",
        options: [
            "A permanent cessation of all Quad activities due to geopolitical disagreements.",
            "A temporary pause or interval in high-level leadership engagement, rather than a collapse of the group.",
            "A period of intense military conflict involving the Quad nations.",
            "A formal transition of the Quad into a NATO-like military alliance."
        ],
        correctAnswer: 1,
        explanation: "'Interregnum' means a pause between reigns. The text says 'too early to write the group off,' implying it's a temporary pause."
    },
    {
        id: 7,
        passageId: 2,
        question: "According to the passage, what is the specific vulnerability of the Quad compared to other organizations?",
        options: [
            "It lacks adequate funding from the United States.",
            "It faces strong opposition from the European Union.",
            "It has 'no institutional anchor' (secretariat/treaty), making it heavily dependent on regular leader-level summits for direction.",
            "It has failed to include China in its dialogue."
        ],
        correctAnswer: 2,
        explanation: "The text explicitly states: 'For a group such as the Quad, with no institutional anchor, leader-level summits serve as a vital platform...'"
    },
    {
        id: 8,
        passageId: 2,
        question: "Which of the following is mentioned as evidence of the Quad's \"critical resilience\"?",
        options: [
            "The successful hosting of the 2025 summit in New Delhi.",
            "The operationalization of initiatives like the Quad-at-Sea Ship Observer Mission despite the absence of a summit.",
            "The signing of a free trade agreement between the four nations.",
            "The inclusion of South Korea into the group."
        ],
        correctAnswer: 1,
        explanation: "The text cites the 'Quad-at-Sea Ship Observer Mission' operationalized in 2025 as proof of resilience."
    },
    {
        id: 9,
        passageId: 2,
        question: "The passage suggests that the \"overarching objective\" of the Quad is:",
        options: [
            "To exclusively counter China's Belt and Road Initiative.",
            "To establish and sustain a rules-based order and a free, open, and inclusive Indo-Pacific.",
            "To support Donald Trump's 'America First' policy globally.",
            "To create a single currency for the Indo-Pacific region."
        ],
        correctAnswer: 1,
        explanation: "Direct quote: 'overarching objective... remains anchored in establishing and sustaining a rules-based order... and delivering global good.'"
    },
    {
        id: 10,
        passageId: 2,
        question: "What can be inferred about the role of political leadership changes (e.g., in the US and Japan) on the Quad?",
        options: [
            "They have no impact whatsoever on the group's functioning.",
            "They can cause disruptions in scheduling high-level summits, as seen in 2025, but do not necessarily stop operational cooperation.",
            "They automatically lead to the dissolution of the group.",
            "They force the group to change its core objective from security to trade."
        ],
        correctAnswer: 1,
        explanation: "The text shows that despite leadership changes (Trump, Japan's PM) causing a missed summit, initiatives continued."
    },
    // Passage 3: Delimitation (Questions 11-15)
    {
        id: 11,
        passageId: 3,
        question: "The core conflict described in the passage regarding Delimitation is best summarized as:",
        options: [
            "The administrative difficulty of conducting a Census in 2028.",
            "The tension between the democratic principle of 'one person, one vote' (favoring populous North) and the federal principle of equity (penalizing South for successful population control).",
            "The disagreement between the Finance Commission and the Delimitation Commission over funding.",
            "The demand by Southern states to separate from the Indian Union."
        ],
        correctAnswer: 1,
        explanation: "The passage describes the Southern states losing power because of successful population control, while the North gains due to population growth."
    },
    {
        id: 12,
        passageId: 3,
        question: "What does the \"Digressive Proportionality\" principle propose?",
        options: [
            "Allocating seats strictly based on the 1971 census forever.",
            "A system where larger states get more seats in total, but smaller states get better representation per capita (more weight per vote), preventing total domination by populous regions.",
            "A system where every state gets exactly the same number of seats, regardless of population.",
            "A system where states with high population growth are barred from contesting elections."
        ],
        correctAnswer: 1,
        explanation: "The text defines it as: 'giving larger countries more seats but fewer per person... balances population size with state equality.'"
    },
    {
        id: 13,
        passageId: 3,
        question: "Why does the author argue that simply increasing the total number of Lok Sabha seats (Solution 1) is insufficient?",
        options: [
            "It would require building a new Parliament building which is too expensive.",
            "It violates the 84th Constitutional Amendment.",
            "It fails to address the relative power imbalance; states with higher population growth would still gain a disproportionately larger share of power compared to the South.",
            "It would lead to a reduction in the number of Rajya Sabha seats."
        ],
        correctAnswer: 2,
        explanation: "The text says Solution 1 'does not solve the problem of States with higher population growth gaining more MPs.' The gap widens."
    },
    {
        id: 14,
        passageId: 3,
        question: "The passage mentions the 84th Constitutional Amendment (2001). What was its primary rationale?",
        options: [
            "To freeze the number of seats until 2026 to allow states to stabilize their populations without fear of losing political representation.",
            "To mandate that the Prime Minister must come from a Southern state.",
            "To implement the Digressive Proportionality principle immediately.",
            "To increase the weightage of population in Finance Commission grants to 100%."
        ],
        correctAnswer: 0,
        explanation: "The text says the amendment extended the freeze 'to enable State governments to pursue the agenda for population stabilisation.'"
    },
    {
        id: 15,
        passageId: 3,
        question: "Which of the following is NOT mentioned as a \"conceivable solution\" in the passage?",
        options: [
            "Adopting a US Senate model (equal representation) for the Rajya Sabha.",
            "Increasing seats in Vidhan Sabhas to equalize representation per 1,000 population.",
            "A mixed allocation model: 60% based on population size and 40% based on population control efforts.",
            "Abolishing the Lok Sabha and replacing it with a Council of States only."
        ],
        correctAnswer: 3,
        explanation: "Abolishing the Lok Sabha is not mentioned. Options (a), (b), and (c) are explicitly listed as solutions."
    },
    // Passage 4: Age of Consent (Questions 16-20)
    {
        id: 16,
        passageId: 4,
        question: "The \"bright-line rule\" mentioned in the passage refers to:",
        options: [
            "The visual boundary used in courtrooms to separate the victim from the accused.",
            "The strict legal standard that treats any sexual act with a person under 18 as non-consensual (statutory rape), regardless of actual willingness.",
            "The mandatory requirement for police to file an FIR within 24 hours.",
            "The rule that allows parents to withdraw cases if they approve of the marriage."
        ],
        correctAnswer: 1,
        explanation: "The 'bright-line rule' refers to the strict age limit (18) where consent is legally impossible regardless of context."
    },
    {
        id: 17,
        passageId: 4,
        question: "What is the primary reason cited for the \"misuse\" of the POCSO Act in adolescent cases?",
        options: [
            "Police officers filing false cases to meet targets.",
            "Adolescents filing false cases against their teachers.",
            "Disapproving parents using the law to criminalize their child's romantic relationships.",
            "The judiciary's inability to understand the law."
        ],
        correctAnswer: 2,
        explanation: "The text says cases 'are often weaponised by disapproving parents' to target romantic partners."
    },
    {
        id: 18,
        passageId: 4,
        question: "According to the author, why is a \"blanket reduction\" of the age of consent (e.g., to 16) risky?",
        options: [
            "It would violate international treaties.",
            "It might weaken the deterrent framework, allowing traffickers and predators to claim 'consent' and escape punishment.",
            "It would lead to an increase in teenage pregnancies.",
            "It is opposed by the Supreme Court."
        ],
        correctAnswer: 1,
        explanation: "The text warns that a blanket reduction 'could open doors to predators disguising coercion as consent.'"
    },
    {
        id: 19,
        passageId: 4,
        question: "The proposed \"close-in-age exemption\" would primarily apply to:",
        options: [
            "Cases where the victim is under 12 years old.",
            "Situations involving consensual relationships between adolescents aged 16-18 and partners within a small age gap (e.g., 3-4 years).",
            "All cases under the POCSO Act regardless of age.",
            "Cases where the parents have given their consent."
        ],
        correctAnswer: 1,
        explanation: "The author proposes exemptions for '16-18-year-olds, say within a 3-4 year gap.'"
    },
    {
        id: 20,
        passageId: 4,
        question: "Based on the passage, the phrase \"statutory rape\" implies:",
        options: [
            "Rape that occurs within a government building.",
            "Sexual acts that are deemed criminal solely because of the victim's age, regardless of whether consent was given.",
            "Sexual acts that involve physical violence.",
            "Rape cases that are tried by a special statute."
        ],
        correctAnswer: 1,
        explanation: "Statutory rape is defined in the text as acts treated as rape 'based on the legal presumption that children lack the capacity to give valid consent.'"
    }
];

export const DAY_01_SESSION = {
    day: 1,
    title: "POCSO, Quad, Delimitation & Age of Consent",
    passageCount: 4,
    questionCount: 20,
    duration: 50, // minutes (25 reading + 25 practice)
    topics: ["POCSO Act", "Geopolitics - Quad", "Polity - Delimitation", "Legal Rights - Age of Consent"]
};
