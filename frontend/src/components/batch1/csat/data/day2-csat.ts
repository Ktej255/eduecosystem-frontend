// CSAT Day 2 Practice Test - Batch 1, 8-9 PM Session
// Passages: Land Rights & Governance, Environment & Strategic Law, Education & Philosophy
// Based on UPSC CSAT comprehension format

export interface CSATQuestion {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    passageNumber: number;
}

export interface CSATPassage {
    id: number;
    title: string;
    source: string;
    content: string;
    questionRange: [number, number]; // [startQ, endQ]
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

// Vocabulary unlocked after test completion
export const DAY2_VOCABULARY: VocabularyItem[] = [
    // Part 1: Administrative, Legal & Governance
    {
        word: "De Facto vs. De Jure",
        context: "...regularisation risks converting de facto possession into de jure ownership in ways that validate elite capture...",
        definition: "De Facto: Existing in reality or fact, whether legally recognized or not. De Jure: According to rightful entitlement or law.",
        synonyms: ["Actual vs. Legal", "In practice vs. By law"],
        antonyms: [],
        csatTip: "When an author contrasts these two, they are usually pointing out a gap between 'what the law says' and 'what is actually happening.'",
        toneIndicator: 'neutral'
    },
    {
        word: "Elite Capture",
        context: "...risks converting... in ways that validate elite capture rather than correct it.",
        definition: "A process where public resources (like common land or government funds) intended for the larger community are usurped or directed to benefit a few socially or politically powerful individuals.",
        synonyms: ["Appropriation", "Usurpation", "Monopolization"],
        antonyms: ["Equitable distribution", "Inclusive governance"],
        toneIndicator: 'negative'
    },
    {
        word: "Anathema",
        context: "...ex post facto clearances are alien to environmental jurisprudence and anathema to the environmental impact assessment...",
        definition: "Something or someone that one vehemently dislikes; a formal curse or strong denunciation. In this context, it means 'fundamentally opposed to the core principles.'",
        synonyms: ["Abhorrent", "Repugnant", "Offensive", "Disgrace"],
        antonyms: ["Compatible", "Aligned", "Sacred", "Beloved"],
        toneIndicator: 'negative'
    },
    {
        word: "Ad Hoc",
        context: "...climate action and economic growth will keep colliding through ad hoc decisions...",
        definition: "Created or done for a particular purpose as necessary, often impromptu or without planning. It usually implies a lack of a systematic long-term strategy.",
        synonyms: ["Impromptu", "Makeshift", "Provisional", "Unplanned"],
        antonyms: ["Systematic", "Planned", "Permanent", "Standardized"],
        toneIndicator: 'negative'
    },
    {
        word: "Opaque",
        context: "...resorts to executive discretion and opaque measures citing national defence...",
        definition: "Not able to be seen through; not transparent. In governance, it refers to processes that are secretive and hard for the public to scrutinize.",
        synonyms: ["Non-transparent", "Murky", "Obscure", "Secretive"],
        antonyms: ["Transparent", "Clear", "Lucent", "Open"],
        toneIndicator: 'negative'
    },
    {
        word: "Restitution",
        context: "In restitution-oriented frameworks, common... lands are treated as corrective instruments...",
        definition: "The restoration of something lost or stolen to its proper owner; recompense for injury or loss.",
        synonyms: ["Restoration", "Reparation", "Indemnification", "Return"],
        antonyms: ["Seizure", "Confiscation", "Theft"],
        toneIndicator: 'positive'
    },
    // Part 2: Academic, Philosophical & Critical Tone
    {
        word: "Paternalistic",
        context: "Compulsory attendance belongs to a paternalistic era that believed that students must be prodded...",
        definition: "Relating to a system of governing people in a fatherly manner—providing for needs but limiting freedom and autonomy. It is often used negatively to imply condescension.",
        synonyms: ["Patronizing", "Condescending", "Overprotective", "Authoritarian"],
        antonyms: ["Libertarian", "Egalitarian", "Empowering"],
        toneIndicator: 'negative'
    },
    {
        word: "Perfunctory",
        context: "...classroom has been reduced to the perfunctory transfer of 'yellowing' notes...",
        definition: "Carried out with a minimum of effort or reflection; done merely as a routine duty.",
        synonyms: ["Mechanical", "Cursory", "Half-hearted", "Superficial"],
        antonyms: ["Thorough", "Diligent", "Enthusiastic", "Meticulous"],
        csatTip: "If an action is described as 'perfunctory,' the author is criticizing the lack of genuine intent or quality behind it.",
        toneIndicator: 'negative'
    },
    {
        word: "Incendiary",
        context: "...Terry Eagleton's lectures... his ideas were intensely incendiary.",
        definition: "Literally 'designed to cause fires.' Metaphorically, it means ideas that are very exciting, provocative, or likely to stir up conflict/debate.",
        synonyms: ["Provocative", "Inflammatory", "Agitating", "Revolutionary"],
        antonyms: ["Calming", "Soothing", "Dull", "Conventional"],
        toneIndicator: 'positive'
    },
    {
        word: "Vassal",
        context: "...transformed campuses into intellectual vassals, where curricula are scrutinised...",
        definition: "A person or country in a subordinate position to another (historical feudal term). Here, it implies universities have lost their independence and are subservient to the government.",
        synonyms: ["Subordinate", "Dependent", "Servant", "Subject"],
        antonyms: ["Sovereign", "Independent", "Master"],
        toneIndicator: 'negative'
    }
];


export const DAY2_CSAT_PASSAGES: CSATPassage[] = [
    {
        id: 1,
        title: "Land Rights and Governance",
        source: "Haryana Village Common Lands (Regulation) Act Analysis",
        content: `In late November 2024, the Haryana Legislative Assembly amended the Haryana Village Common Lands (Regulation) Act, 1961, to permit the conversion of certain categories of Shamilat deh under unauthorised occupation into private ownership through payment to the gram panchayat, a framework further streamlined and expanded in 2025 by shifting approval powers and diluting the market-rate constraint. The government presents this as an administrative settlement to reduce litigation, recover value for panchayats, and resolve long-running disputes over commons pending in revenue courts.

A year on, the question is not only whether the amendment clears the docket, but what kind of rural order it consolidates. Common lands are a political institution, shaping livelihood security, bargaining power in rural markets, and dependence for the landless. If the ability to pay becomes the operative criterion for title, regularisation risks converting de facto possession into de jure ownership in ways that validate elite capture rather than correct it.

A 2007 Haryana Institute of Rural Development (HIRD) study recorded outsiders benefiting from village common land, panchayats not enabling Dalit families' access to cultivable parcels, and Dalit households failing to realise statutory shares because they could not compete with dominant landowners in lease markets. It further noted that roughly 15% of encroachment by dominant landowning communities had the backing of sarpanches, officials, or politically influential persons.

In such a setting, regularisation through payment is not a neutral technique. A contrast with policies elsewhere clarifies the normative hinge. In restitution-oriented frameworks, common or specially earmarked lands are treated as corrective instruments to buffer the landless and historically oppressed. For instance, Madhya Pradesh's initiative of distributing a big portion of charnoi land to Dalits is a clear example. Tamil Nadu's Panchami lands were similarly earmarked for Dalits, reflecting an explicit premise of protection rather than treating the commons as a negotiable asset.

In purchase-oriented frameworks, by contrast, the commons become a negotiable asset allocated through willingness and ability to pay. Haryana's amendment leans toward this latter logic without first addressing historical entitlement, caste-based deprivation, and the statutory intent of commons as a social safety net. A fairer design would hardwire safeguards so regularisation does not become a conveyor belt for elite capture.

The 2024 amendment thus crystallises a wider tension in contemporary rural governance: land policy as social justice versus land policy as administrative tidiness. In a rural political economy, legalising encroachment without first correcting for structural inequality is not merely dispute resolution. It is the State selecting a settlement in a long-running social conflict, and calling it efficiency.`,
        questionRange: [1, 5]
    },
    {
        id: 2,
        title: "Environment and Strategic Law",
        source: "Aravalli Hills Mining and Strategic Exemptions",
        content: `The Aravalli question faces the brunt of India's fondness for 'strategic exemptions'. India does not resolve clashes between its climate commitments and industrial demand through any clear rules. Instead, it often resorts to executive discretion and opaque measures citing "national defence" or "strategic considerations" to bypass scrutiny.

On December 23, the Integrated Defence Staff chief laid out the defence establishment's case for critical minerals. Modern defence systems rely on reliable access to these minerals, and import dependence has become a strategic vulnerability. He pointed to the National Critical Mineral Mission as the policy vehicle of choice.

Controversy over the Aravalli Hills flared up after November 23, when the Supreme Court adopted a uniform way to identify the "hills and ranges", froze new mining leases, and said mining should be prohibited in "core" or "inviolate" areas, with an exception for critical, strategic and atomic minerals notified under the MMDR Act. The Court called this a "strategic exemption". Environmental groups argue that the new definition of "Aravalli Hills"—requiring a 100m rise above local relief—could weaken enforcement.

What is the issue with a 'strategic exemption'? The Environment Ministry has repeatedly softened India's environmental clearance process to promote ease of doing business. It often resorts to opaque instruments like office memoranda and project-specific exemptions. In September, the Environment Ministry issued an office memorandum to accelerate mining projects involving critical minerals by exempting them from public consultations.

Two decisions in 2025 are notable. First, in May, the Supreme Court held that ex post facto clearances are "anathema" to the EIA framework. But in November, the Court recalled that judgment and reopened the space for post facto regularisation. Second, the Forest (Conservation) Amendment Act 2023 has expanded exemptions. It exempted land that had already been shifted to non-forest use before 1996, and land near "security-related infrastructure". As a result, the Centre and States can now collect information by drilling narrow holes during exploration without filing a mining proposal.

The Supreme Court order linked the Hills to groundwater recharge and ecosystem services that India needs to meet Sustainable Development Goals. If India is going to invoke a "strategic" need to carve out exceptions, there needs to be more clarity. Specifically, the government or the Court is expected to set up a binding test for when "strategic considerations" merit simpler procedures, require landscape-level cumulative impact assessments, and disclose assumptions about alternatives like imports or recycling.`,
        questionRange: [6, 10]
    },
    {
        id: 3,
        title: "Education and Philosophy",
        source: "Delhi High Court Ruling on Attendance",
        content: `The Delhi High Court's affirmation that law students may sit for examinations without satisfying rigid attendance thresholds has provoked predictable anxiety among administrators still tethered to an older, bureaucratised conception of education. But the ruling, far from eroding academic seriousness, restores a truth that Indian universities have resisted for decades: that learning cannot be secured through surveillance. Compulsory attendance belongs to a paternalistic era that believed students must be prodded into intellectual life rather than invited into it. A university worthy of its name should cultivate curiosity, not compliance.

I say this not only as a critic of the managerial culture, but as someone who has spent more than 40 years in the classroom. In all those years, I rarely took attendance. I believed that coercion produces neither seriousness nor scholarship. If students do not wish to attend a class, the proper response is not punishment but introspection. A teacher must ask: what did I fail to offer that could have made this hour indispensable? Attendance is not a measure of learning; at best it is a measure of obedience. The obsession with physical presence flourishes where the classroom has been reduced to the perfunctory transfer of "yellowing" notes, the rote delivery of prefabricated knowledge that students could obtain faster through digital means.

Paulo Freire saw this with a clarity that remains electrifying. For him, education was never the mechanical depositing of information but a dialogic encounter. In his Pedagogy of the Oppressed, students are not passive vessels receiving knowledge but beings who "name the world". My strongest classrooms were born of desire, not obligation. I remember speaking with Sir Isaiah Berlin in Oxford; he confessed how rigorously he prepared his notes—a meticulously constructed road map of ideas. His lectures captivated not by accident but because they were acts of craftsmanship. Students came out of anticipation.

Terry Eagleton's lectures overflowed because his ideas were incendiary. Germaine Greer filled halls because she brought intellectual rebellion. None of them needed the threat of consequences to fill a classroom. They made absence unthinkable. This is what the Indian university has forgotten. The Centre's increasing control has transformed campuses into intellectual vassals, where mandatory attendance serves as a tool of pedagogical pacification.

A university that prioritises attendance over engagement betrays its purpose. In an era where digital resources, AI tools, and open-access archives place vast knowledge at fingertips, the insistence on physical presence feels pedagogically unimaginative. The High Court ruling opens a transformative possibility. By removing the coercive element, educators will be compelled to innovate. An empty classroom can be a catalyst for introspection.`,
        questionRange: [11, 15]
    }
];

export const DAY2_CSAT_QUESTIONS: CSATQuestion[] = [
    // Passage 1 Questions (Land Rights)
    {
        id: 1,
        question: "Which one of the following statements best reflects the central argument of the passage regarding the Haryana land amendment?",
        options: [
            "The amendment is a necessary administrative step to clear the massive backlog of litigation in revenue courts and generate revenue for Gram Panchayats.",
            "The amendment prioritizes administrative efficiency and \"tidiness\" over social justice, potentially legalizing the theft of common resources by the wealthy.",
            "The amendment successfully resolves the conflict between de facto possession and de jure ownership by using market rates as a fair standard.",
            "The amendment is similar to the \"restitution-oriented\" frameworks of Tamil Nadu and Madhya Pradesh, aiming to distribute land to the landless."
        ],
        correctAnswer: 1,
        explanation: "The text states the amendment risks converting possession into ownership in ways that 'validate elite capture' and calls it 'land policy as administrative tidiness' vs 'social justice'.",
        passageNumber: 1
    },
    {
        id: 2,
        question: "Based on the passage, what is the primary risk associated with making \"ability to pay\" the criterion for land regularization?",
        options: [
            "It will lead to a decrease in the market value of rural land.",
            "It will cause immediate environmental degradation of the Shamilat deh.",
            "It validates \"elite capture\" by allowing those with financial means—often the dominant encroachers—to secure legal title.",
            "It will bankrupt the Gram Panchayats by preventing them from leasing land in the future."
        ],
        correctAnswer: 2,
        explanation: "The text explicitly states: 'If the ability to pay becomes the operative criterion... risks converting de facto possession into de jure ownership in ways that validate elite capture'.",
        passageNumber: 1
    },
    {
        id: 3,
        question: "The author cites the examples of Madhya Pradesh and Tamil Nadu to:",
        options: [
            "Show that encroachment on common land is a nationwide problem that no state has solved.",
            "Highlight a contrast between \"purchase-oriented\" frameworks and \"restitution-oriented\" frameworks that protect the vulnerable.",
            "Prove that the Haryana government copied its 2024 amendment from existing laws in southern and central India.",
            "Argue that the Haryana Institute of Rural Development (HIRD) should conduct studies in these states as well."
        ],
        correctAnswer: 1,
        explanation: "The author uses MP and TN as examples of 'restitution-oriented frameworks' (protection) to contrast with Haryana's 'purchase-oriented' framework.",
        passageNumber: 1
    },
    {
        id: 4,
        question: "According to the passage, why is \"technocratic settlement\" described as \"not distributively neutral\"?",
        options: [
            "Because it relies on technology that illiterate farmers cannot access.",
            "Because it treats land disputes merely as backlog management, ignoring the structural inequalities and historical dispossession underlying the encroachments.",
            "Because the revenue generated is distributed equally among all villagers regardless of caste.",
            "Because the technical surveys required for settlement are too expensive for the state to fund."
        ],
        correctAnswer: 1,
        explanation: "The text says it is not neutral because 'treating the problem as backlog management rather than a continuing pattern of dispossession... risks normalising encroachment'.",
        passageNumber: 1
    },
    {
        id: 5,
        question: "Which of the following is NOT suggested by the author as part of a \"fairer design\" for land regularization?",
        options: [
            "Mandatory socio-economic and caste profiling before granting titles.",
            "Exclusion of ecologically and socially critical commons from conversion.",
            "Immediate auction of all encroached land to the highest bidder to maximize state revenue.",
            "Independent audits and credible grievance redressal mechanisms insulated from local executive discretion."
        ],
        correctAnswer: 2,
        explanation: "Options (a), (b), and (d) are explicitly mentioned as 'Fairer design' suggestions. Option (c) (Auctions/Max revenue) is contrary to the author's social justice argument.",
        passageNumber: 1
    },

    // Passage 2 Questions (Environment)
    {
        id: 6,
        question: "What is the primary criticism levelled against the \"strategic exemption\" mechanism in the passage?",
        options: [
            "It prevents the defence establishment from accessing necessary critical minerals.",
            "It is too rigid and does not allow for any flexibility in national security matters.",
            "It relies on opaque executive discretion and ad hoc decisions to bypass environmental scrutiny and public consultation.",
            "It has led to a complete ban on all mining activities in the Aravalli region, harming the economy."
        ],
        correctAnswer: 2,
        explanation: "The text states India often resorts to 'executive discretion and opaque measures' and 'ad hoc appraisals' to bypass scrutiny.",
        passageNumber: 2
    },
    {
        id: 7,
        question: "Regarding the Environmental Impact Assessment (EIA) framework, what specific change concerning \"critical minerals\" is mentioned in the passage?",
        options: [
            "Critical mineral projects are now completely banned in forest areas.",
            "Critical mineral projects were exempted from public consultations via an office memorandum to accelerate mining.",
            "Critical mineral projects now require double the amount of public hearings compared to coal projects.",
            "The Supreme Court ruled that critical minerals cannot be mined under the \"strategic exemption\" clause."
        ],
        correctAnswer: 1,
        explanation: "The text mentions an 'office memorandum to accelerate mining projects involving critical minerals by exempting them from public consultations'.",
        passageNumber: 2
    },
    {
        id: 8,
        question: "The passage mentions the \"Forest (Conservation) Amendment Act 2023\". Which of the following is an implication of this Act mentioned in the text?",
        options: [
            "It mandates that all forest land must be returned to its state as of 1980.",
            "It makes it harder to build roads in areas affected by left-wing extremism.",
            "It allows the government to drill narrow holes for exploration without filing a formal mining proposal.",
            "It removes the concept of \"forest\" entirely from Indian law."
        ],
        correctAnswer: 2,
        explanation: "The text states: 'Centre and States can now collect information by drilling narrow holes during exploration... before having to file a mining proposal'.",
        passageNumber: 2
    },
    {
        id: 9,
        question: "The author uses the term \"anathema\" in the context of the Supreme Court's May judgment. What does this imply about ex post facto clearances?",
        options: [
            "They were considered highly desirable and necessary.",
            "They were considered a standard, acceptable legal practice.",
            "They were considered fundamentally opposed to and destructive of the logic of environmental protection.",
            "They were considered only applicable to the Aravalli hills."
        ],
        correctAnswer: 2,
        explanation: "The text says the court held ex post facto clearances as 'anathema' to the EIA framework because they invert the logic of prior scrutiny.",
        passageNumber: 2
    },
    {
        id: 10,
        question: "What is the \"way forward\" or solution proposed by the author to handle the conflict between strategic needs and environment?",
        options: [
            "A complete ban on mining in all hill ranges across India.",
            "Establishing a binding test for \"strategic considerations\" and requiring landscape-level cumulative impact assessments.",
            "Privatizing the Aravalli hills so that private owners can better protect them.",
            "Relying solely on the Integrated Defence Staff to decide which areas can be mined."
        ],
        correctAnswer: 1,
        explanation: "The author calls for a 'binding test for when strategic considerations merit simpler procedures' and requiring 'landscape-level cumulative impact... assessments'.",
        passageNumber: 2
    },

    // Passage 3 Questions (Education)
    {
        id: 11,
        question: "The author views the Delhi High Court's ruling on attendance as:",
        options: [
            "A dangerous precedent that will lead to students failing their exams.",
            "A restoration of the truth that learning relies on curiosity rather than surveillance.",
            "An administrative error that ignores the importance of discipline in law schools.",
            "A decision that only applies to students with high grades."
        ],
        correctAnswer: 1,
        explanation: "The text says the ruling 'restores a truth... that learning cannot be secured through surveillance' and 'university... should cultivate curiosity, not compliance'.",
        passageNumber: 3
    },
    {
        id: 12,
        question: "According to the passage, what is the significance of the \"yellowing notes\" mentioned by the author?",
        options: [
            "They represent the high value of historical archives in university libraries.",
            "They symbolize outdated, rote-delivery teaching methods that make classrooms unengaging.",
            "They refer to the specific legal texts that law students must memorise.",
            "They are the notes prepared by students who attend classes regularly."
        ],
        correctAnswer: 1,
        explanation: "The 'yellowing notes' are linked to 'perfunctory transfer' and 'rote delivery of prefabricated knowledge'.",
        passageNumber: 3
    },
    {
        id: 13,
        question: "The author references Paulo Freire's Pedagogy of the Oppressed to support the idea that:",
        options: [
            "Education should be a mechanical depositing of information from teacher to student.",
            "Students should be passive vessels who receive knowledge obediently.",
            "Education should be a dialogic encounter and an awakening of consciousness.",
            "Oppressed communities require stricter attendance rules to succeed."
        ],
        correctAnswer: 2,
        explanation: "Freire saw education as a 'dialogic encounter, an awakening of consciousness' where students 'name the world'.",
        passageNumber: 3
    },
    {
        id: 14,
        question: "What inference can be drawn about the author's view on the \"Indian University\" system?",
        options: [
            "It is currently thriving due to strong centralized control and standardized curricula.",
            "It has become suffocated by bureaucratic rigidity and a focus on compliance over intellect.",
            "It is superior to Oxford and Cambridge because it enforces discipline more strictly.",
            "It has successfully integrated AI and digital tools into the classroom environment."
        ],
        correctAnswer: 1,
        explanation: "The text explicitly states the Indian university has been transformed into 'intellectual vassals' with 'mandatory attendance serving as a tool of pedagogical pacification'.",
        passageNumber: 3
    },
    {
        id: 15,
        question: "The author suggests that removing compulsory attendance will:",
        options: [
            "Make teachers lazy as they no longer have to ensure students are present.",
            "Force teachers to innovate and craft intellectually compelling learning spaces to attract students.",
            "Lead to empty classrooms and the eventual closure of universities.",
            "Reduce the academic burden on students so they can focus on part-time jobs."
        ],
        correctAnswer: 1,
        explanation: "The text argues: 'educators will be compelled to innovate... An empty classroom can be a catalyst for introspection'.",
        passageNumber: 3
    }
];

export default { DAY2_CSAT_PASSAGES, DAY2_CSAT_QUESTIONS };
