// UPSC CSAT Practice Set - Day 03 (January 3)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_03_PASSAGES: CSATPassage[] = [
    {
        id: 9,
        title: "Pharma Sector & Trade Dynamics",
        content: `In September 2025, U.S. President Donald Trump’s sweeping announcement imposing a 100% tariff on branded and patented pharmaceutical imports from October 1, 2025, saw India’s pharmaceutical industry standing at a crossroads. The U.S.’s move, ostensibly aimed at bolstering domestic manufacturing, threatens to disrupt supply chains while also fuelling India’s export-led growth. Yet, as tariffs ripple through global markets, India’s dominance in generics offers a vital buffer. With pharma exports to the U.S. alone reaching close to $9 billion in fiscal 2025, the stakes could not be higher.

Generics dominate, with 70% of exports to the U.S. and Europe. However, $5 billion in annual imports, mainly active pharmaceutical ingredients (API) from China (72% share), exposes supply chain risks. The U.S. tariff, which has spared generics for now, targets branded drugs unless made domestically. India supplies 40% of U.S. generics, saving payers $219 billion in 2022. Yet, the market jitters were immediate. An escalation to generics could cut export revenues by 10%-15%. Some firms with over 30% U.S. exposure face rerouting costs and regulatory hurdles. This could spur “China-plus-one” strategies, redirecting exports to Africa and Southeast Asia.

Challenges such as IP disputes and API dependency persist, but resilience shines through initiatives such as Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP). U.S. tariffs risk causing shortages if India’s 40% generic supply frays. India must leverage MoUs, invest $10 billion in APIs via PLI 2.0, and push WTO reforms. With global pharma eyeing $450 billion for India by 2047, collaboration in the form of east-west hybrids is key.`
    },
    {
        id: 10,
        title: "Urban Waste & Circular Economy",
        content: `At COP30 in Belem, Brazil, waste was fittingly placed at the heart of the climate agenda. Sizeable funds were committed to a new global initiative, No Organic Waste (NOW), to cut methane emissions. The conference noted Circularity as the way to inclusive growth. Expanding cities and towns are an irreversible reality in growing India. It is estimated that cities in India will generate 165 million tonnes of waste annually by 2030. Without early solutions, these will result in grave levels of emissions. The goal of Garbage Free Cities (GFC) by 2026 is an existential necessity.

Under SBM Urban 2.0, sustainable waste management underlines the circular economy model, which recognises waste as a resource. India needs to move away from a linear to circular mode—minimising waste and recovering energy. The good thing is that more than half of municipal waste is organic. Compressed Biogas Plants (CBG) have created possibilities of generating green fuel from municipal wet waste. However, plastic and Construction and Demolition (C&D) waste pose tough challenges. C&D waste—about 12 million tonnes a year—is collateral damage from India’s fast-growing economy. Unauthorised dumping of construction discards is common.

Much of this waste can be reused or recycled as cost-efficient raw materials. But infrastructure is lacking. Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste. C&D waste has issues of identification, tracing and tracking. Citizens need to get a clear sense of profit and a true cause to be partners. In a society becoming increasingly consumerist, ‘reuse’ may become a tall order compared to ‘recycling’.`
    },
    {
        id: 11,
        title: "Sanitation & Urban-Rural Partnerships",
        content: `When the Swachh Bharat Mission (SBM) was launched in 2014, its vision was simple: ensure every household has a toilet. More than 12 crore toilets have been built, and every village has declared itself Open Defecation Free (ODF). However, the success has revealed the next frontier: managing the resultant faecal waste. In most rural households, septic tanks serve as the primary form of containment. Without safe systems for collection and treatment, the gains of the ODF movement risk being undermined. This defines the transition to SBM-G Phase II (ODF Plus).

Faecal sludge management remains a critical gap. Maharashtra has experimented with innovative urban-rural partnerships. For example, in Satara district, a partnership was put into practice where four villages (Jakatwadi, Songaon, etc.) have been brought under an arrangement to access the city's treatment plant. Their septic tanks, often never desludged or emptied at exorbitant rates, will be serviced at regular intervals. A private service provider is engaged by gram panchayats. The costs will be recovered through a modest sanitation tax. This approach shows that rural clusters can pool resources to develop standalone infrastructure or link to urban systems, ensuring sustainability.`
    },
    {
        id: 12,
        title: "Homelessness & Social Justice",
        content: `While Bengaluru City Police data reveal that the city has witnessed the deaths of more than 15 homeless people over the last 40 days, there are only 48 shelters when the city should have at least 120. Under the NULM policy, civic bodies are responsible for ensuring basic infrastructure such as water supply, sanitation, and safety for the homeless. Yet, barely any shelter has more than 40 beds.

The policy mandates shelters for every 1 lakh population. For Bengaluru, this means at least 120 shelters. However, the existing 48 often lack basics. Women are often traumatised and grope on the streets, yet they feel safer in open spaces than in shelter homes due to issues like bedbugs, lack of family privacy, and rigid rules. A police officer noted, "Deaths might not be directly connected to the weather, but it exacerbates existing health conditions." Homeless people, constantly exposed to harsh weather, face mental health challenges like anxiety and depression. While officials say homeless people "resist relocation," activists argue that agencies conduct surveys but fail to build trust or provide dignified living conditions.`
    }
];

export const DAY_03_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Pharma (Questions 41-45)
    {
        id: 41,
        passageId: 9,
        question: "What is the primary \"buffer\" that protects the Indian pharmaceutical industry from the immediate impact of the new U.S. tariffs, according to the passage?",
        options: [
            "(a) The 100% tariff exemption granted to all Indian companies by President Trump.",
            "(b) India's dominance in the generics market, which has been currently spared from the tariffs that target branded/patented drugs.",
            "(c) The robust domestic supply of Active Pharmaceutical Ingredients (APIs) which reduces reliance on China.",
            "(d) The redirection of all exports to the African and Southeast Asian markets."
        ],
        correctAnswer: 1,
        explanation: "Text says: \"India’s dominance in generics offers a vital buffer... U.S. tariff... has spared generics for now\"."
    },
    {
        id: 42,
        passageId: 9,
        question: "The passage mentions \"China-plus-one\" strategies in the context of the tariff shock. What does this imply?",
        options: [
            "(a) India will start importing APIs from both China and the U.S. to balance trade.",
            "(b) Indian firms might diversify their export destinations to regions like Africa and Southeast Asia to reduce over-dependence on the U.S. market.",
            "(c) China will increase its tariffs on Indian drugs to match the U.S. policy.",
            "(d) Indian companies will partner with Chinese firms to manufacture drugs inside the U.S."
        ],
        correctAnswer: 1,
        explanation: "Text says: \"This could spur 'China-plus-one' strategies, redirecting exports to Africa and Southeast Asia.\" (Context: Reducing U.S. exposure)."
    },
    {
        id: 43,
        passageId: 9,
        question: "Which of the following is identified as a critical structural vulnerability of the Indian pharma sector?",
        options: [
            "(a) Low demand for Indian drugs in Europe.",
            "(b) High dependence on China for Active Pharmaceutical Ingredients (APIs), constituting 72% of imports.",
            "(c) The lack of government schemes like PLI 2.0 to support manufacturing.",
            "(d) The inability to produce branded drugs for the domestic market."
        ],
        correctAnswer: 1,
        explanation: "Text cites: \"mainly active pharmaceutical ingredients (API) from China (72% share), exposes supply chain risks.\""
    },
    {
        id: 44,
        passageId: 9,
        question: "Based on the passage, why might the U.S. hesitate to escalate tariffs to cover Indian generics?",
        options: [
            "(a) Because Indian generics account for 40% of U.S. supply and save payers billions, so tariffs could cause shortages and higher costs.",
            "(b) Because the WTO has explicitly banned tariffs on generic medicines.",
            "(c) Because Indian generics are of lower quality and do not compete with U.S. manufacturers.",
            "(d) Because the U.S. has a surplus of domestically manufactured generic drugs."
        ],
        correctAnswer: 0,
        explanation: "Text states: \"India supplies 40% of U.S. generics, saving payers $219 billion... U.S. tariffs risk causing shortages if India’s... supply frays.\""
    },
    {
        id: 45,
        passageId: 9,
        question: "The author suggests that \"collaboration in the form of east-west hybrids is key.\" This likely refers to:",
        options: [
            "(a) Merging Indian and Chinese pharmaceutical companies.",
            "(b) A strategic approach where India leverages global partnerships, innovation, and equitable access to secure its pharma supremacy.",
            "(c) Importing western medicine to replace traditional Indian medicine.",
            "(d) Exclusively manufacturing drugs that are popular in Western countries."
        ],
        correctAnswer: 1,
        explanation: "Inferred from the conclusion: \"collaboration... east-west hybrids... equitable access is key.\""
    },
    // Passage 2: Urban Waste (Questions 46-50)
    {
        id: 46,
        passageId: 10,
        question: "According to the passage, why is the goal of Garbage Free Cities (GFC) described as an \"existential necessity\"?",
        options: [
            "(a) Because it is a mandatory requirement for India to get a permanent seat at the UN Security Council.",
            "(b) Because the projected increase in waste to 165 million tonnes by 2030 will cause grave emissions and health havoc if not managed.",
            "(c) Because it is the only way to ensure that Compressed Biogas Plants remain profitable.",
            "(d) Because plastic waste is currently the largest component of municipal waste."
        ],
        correctAnswer: 1,
        explanation: "Text states: \"result in grave levels of emissions... The goal of Garbage Free Cities (GFC) by 2026 is an existential necessity.\""
    },
    {
        id: 47,
        passageId: 10,
        question: "The passage distinguishes between \"linear\" and \"circular\" modes of waste management. What is the core characteristic of the circular mode mentioned?",
        options: [
            "(a) Collecting waste from households and dumping it in landfills in a linear sequence.",
            "(b) Minimising waste generation and recovering energy/resources from waste, treating it as a resource.",
            "(c) Burning all waste to ensure zero volume remains.",
            "(d) Exporting waste to other countries to maintain local cleanliness."
        ],
        correctAnswer: 1,
        explanation: "Text describes circular mode as: \"minimising waste and recovering energy... underlines the circular economy model, which recognises waste as a resource.\""
    },
    {
        id: 48,
        passageId: 10,
        question: "Which of the following is cited as a major hurdle in managing Construction and Demolition (C&D) waste?",
        options: [
            "(a) The lack of technology to recycle concrete.",
            "(b) The sheer volume of organic waste mixed with C&D waste.",
            "(c) Issues of identification, tracing, tracking, and unauthorised dumping of discards.",
            "(d) The ban on using recycled materials in new buildings."
        ],
        correctAnswer: 2,
        explanation: "Text states C&D waste has \"issues of identification, tracing and tracking of its origin.\""
    },
    {
        id: 49,
        passageId: 10,
        question: "The author argues that ‘reuse’ might be a \"tall order\" (difficult to achieve) compared to ‘recycling’ because:",
        options: [
            "(a) Recycling technology is cheaper than reuse methods.",
            "(b) The society is becoming increasingly consumerist with new products arriving daily, making people less likely to reuse old items.",
            "(c) The government provides subsidies only for recycling.",
            "(d) Reuse is illegal under the new SBM Urban 2.0 guidelines."
        ],
        correctAnswer: 1,
        explanation: "Text says: \"In a society becoming increasingly consumerist... ‘reuse’ may become a tall order.\""
    },
    {
        id: 50,
        passageId: 10,
        question: "What role does \"Extended Producer Responsibility (EPR)\" play in the context of the passage?",
        options: [
            "(a) It is a successfully implemented policy that covers all waste categories.",
            "(b) It is a policy that currently has gaps, as it has yet to extend to all categories of dry waste.",
            "(c) It puts the entire burden of waste management on the consumer.",
            "(d) It is responsible for the unauthorised dumping of construction waste."
        ],
        correctAnswer: 1,
        explanation: "Text states: \"Extended Producer Responsibility (EPR) has yet to extend to all categories of dry waste.\""
    },
    // Passage 3: Sanitation (Questions 51-55)
    {
        id: 51,
        passageId: 11,
        question: "What is the \"next frontier\" or challenge identified in the passage after the construction of toilets?",
        options: [
            "(a) Building more toilets in urban areas.",
            "(b) Managing the faecal waste (sludge) generated by the new toilets, particularly desludging septic tanks safely.",
            "(c) Converting all septic tanks into sewer lines connected to rivers.",
            "(d) banning the use of private service providers in sanitation."
        ],
        correctAnswer: 1,
        explanation: "Text identifies \"managing the resultant faecal waste\" and \"desludged at regular intervals\" as the next frontier."
    },
    {
        id: 52,
        passageId: 11,
        question: "The \"Satara model\" described in the passage relies on which key mechanism?",
        options: [
            "(a) Building a new treatment plant in every single village.",
            "(b) An urban-rural partnership where villages access the city's existing treatment infrastructure or pool resources.",
            "(c) Transporting waste to landfills in other districts.",
            "(d) Asking villagers to empty their own septic tanks manually."
        ],
        correctAnswer: 1,
        explanation: "Text describes: \"villages... have been brought under an arrangement that will allow them to access the city’s treatment plant.\""
    },
    {
        id: 53,
        passageId: 11,
        question: "How does the passage propose to ensure the financial sustainability of the desludging services?",
        options: [
            "(a) By demanding full funding from the Central Government forever.",
            "(b) By levying a modest sanitation tax collected by the gram panchayats.",
            "(c) By selling the sludge to farmers as raw fertilizer without treatment.",
            "(d) By charging the private service provider a fee to operate."
        ],
        correctAnswer: 1,
        explanation: "Text explicitly states: \"costs will be recovered through a modest sanitation tax levied by the gram panchayats.\""
    },
    {
        id: 54,
        passageId: 11,
        question: "The term \"ODF Plus\" implies:",
        options: [
            "(a) Building larger toilets than before.",
            "(b) Going beyond toilet construction to ensure solid/liquid waste management and safe sanitation service chains.",
            "(c) Declaring a village free of plastic waste.",
            "(d) Providing water connections to toilets."
        ],
        correctAnswer: 1,
        explanation: "Text says ODF Plus \"goes beyond toilet construction to ensure... safe sanitation service chains.\""
    },
    {
        id: 55,
        passageId: 11,
        question: "Why is \"regular desludging\" emphasized over the current practice?",
        options: [
            "(a) Because current practices often involve exorbitant rates by informal operators or unsafe disposal.",
            "(b) Because septic tanks break if they are full.",
            "(c) Because it creates more jobs for city municipal workers.",
            "(d) Because the SBM guidelines require desludging every month."
        ],
        correctAnswer: 0,
        explanation: "Text contrasts regular service with: \"often never desludged or emptied only at exorbitant rates by informal operators.\""
    },
    // Passage 4: Homelessness (Questions 56-60)
    {
        id: 56,
        passageId: 12,
        question: "The passage highlights a discrepancy between \"policy\" and \"reality\" regarding homeless shelters.",
        options: [
            "(a) The policy forbids shelters in residential areas, but reality requires them there.",
            "(b) The NULM policy mandates at least 120 shelters based on population, but only 48 exist.",
            "(c) The policy requires luxury amenities, but shelters only provide basics.",
            "(d) The policy allows only men in shelters, leaving women on the streets."
        ],
        correctAnswer: 1,
        explanation: "Text notes: \"should have at least 120 shelters... there are only 48 shelters.\""
    },
    {
        id: 57,
        passageId: 12,
        question: "According to the passage, why do some homeless people, particularly women, prefer sleeping in open spaces despite the risks?",
        options: [
            "(a) Because shelters charge high fees that they cannot afford.",
            "(b) Because shelters often have poor conditions (bedbugs), lack privacy for families, and have rigid rules.",
            "(c) Because the police force them to stay on the streets to watch over markets.",
            "(d) Because the weather inside the shelters is worse than outside."
        ],
        correctAnswer: 1,
        explanation: "Text mentions: \"feel safer in open spaces than in shelter homes due to issues like bedbugs, lack of family privacy...\""
    },
    {
        id: 58,
        passageId: 12,
        question: "The deaths of homeless people are attributed to:",
        options: [
            "(a) A sudden heatwave in Bengaluru.",
            "(b) Direct freezing to death solely due to low temperatures.",
            "(c) A combination of harsh weather exacerbating existing health conditions and lack of access to warm clothes/safety gear.",
            "(d) Food poisoning from street food."
        ],
        correctAnswer: 2,
        explanation: "Text quotes police: \"weather... exacerbate existing health conditions\" and mentions \"lack access to warm clothes.\""
    },
    {
        id: 59,
        passageId: 12,
        question: "What is the author's stance on the official claim that \"homeless people resist relocation\"?",
        options: [
            "(a) The author agrees that homeless people are stubborn and refuse help.",
            "(b) The author presents the counter-argument that agencies fail to build trust or provide dignified conditions, implying the system is at fault.",
            "(c) The author suggests that relocation should be made mandatory by force.",
            "(d) The author believes relocation is not necessary."
        ],
        correctAnswer: 1,
        explanation: "Text cites activists/human rights perspective: \"Agencies... fail to build trust... lack of follow-up.\""
    },
    {
        id: 60,
        passageId: 12,
        question: "Which scheme is mentioned as the governing policy for urban homeless shelters?",
        options: [
            "(a) PM Awas Yojana (PMAY).",
            "(b) Deendayal Antyodaya Yojana-National Urban Livelihoods Mission (NULM).",
            "(c) Swachh Bharat Mission (Urban).",
            "(d) Smart Cities Mission."
        ],
        correctAnswer: 1,
        explanation: "Text explicitly mentions \"Under the NULM policy...\" (National Urban Livelihoods Mission)."
    }
];

export const DAY_03_SESSION = {
    day: 3,
    title: "Pharma Trade, Waste, Sanitation & Homelessness",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Pharma Sector & Trade", "Urban waste & Circular Economy", "Sanitation & Partnerships", "Homelessness & Social Justice"]
};
