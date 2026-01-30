// UPSC CSAT Practice Set - Day 07 (January 7)
// Pomodoro Evening Session - CSAT Component

import { type CSATPassage, type CSATQuestion } from './day01-csat';

export const DAY_07_PASSAGES: CSATPassage[] = [
    {
        id: 25,
        title: "Social Justice (Mob Violence & Migration)",
        content: `In the closing weeks of 2025, a series of violent incidents across India exposed a disturbing pattern of mob violence directed at migrants who were labelled foreigners – Bangladeshis and Chinese – by their attackers. In these cases, the three victims were Indian citizens from various parts of the country. Suspicion based on language, region, appearance or presumed nationality is escalating into mob violence in different regions. This is extremely worrying and the police must act strictly.

In Palakkad district, Kerala, Ram Narayan Baghel, a 31-year-old migrant worker from Chhattisgarh was lynched by a mob on December 17. Baghel was accused of theft and repeatedly questioned about his identity, with his attackers allegedly asking him whether he was “Bangladeshi” before beating him to death. Kerala is heavily dependent on migrant labour, and prides itself on its high levels of education and law and order. The lynching is a blot on its reputation. Similarly, in Sambalpur (Odisha), a young migrant worker from West Bengal was beaten to death by a mob that accused him of being a “Bangladeshi”. Two days later, a Bengali-speaking street vendor was assaulted.

In Dehradun, Anjel Chakma, a 22-year-old student from Tripura, was stabbed by a group that had allegedly hurled racial slurs at him and his brother. People from the northeastern States are often treated as perpetual outsiders in other parts of India; Chakma was called “Chinese” by his attackers. These are not isolated incidents: they occur amid numerous other cases of mob intimidation. The Bharatiya Janata Party (BJP) has turned its incendiary campaign against “illegal infiltration” from Bangladesh as a central plank in the forthcoming Assembly elections. It is no coincidence that mobs across the country feel emboldened to raise this bogey at random against helpless people.`
    },
    {
        id: 26,
        title: "Education (Attendance & Learning)",
        content: `The Delhi High Court's affirmation that law students may sit for examinations without satisfying rigid attendance thresholds has provoked anxiety among administrators. But the ruling restores a truth that Indian universities have resisted for decades: learning cannot be secured through surveillance. Compulsory attendance belongs to a paternalistic era that believed students must be prodded into intellectual life. A university worthy of its name should cultivate curiosity, not compliance.

Attendance is not a measure of learning; at best it is a measure of obedience. The obsession with physical presence flourishes where the classroom has been reduced to the perfunctory transfer of "yellowing" notes, the rote delivery of prefabricated knowledge that students could obtain faster through digital means. The ruling disrupts this apathy. It forces institutions to confront a truth long evaded: that a classroom that enforces attendance is already pedagogically bankrupt.

Paulo Freire saw education not as the mechanical depositing of information but a dialogic encounter. My strongest classrooms have always been those born not of obligation but of desire. For instance, Sir Isaiah Berlin’s lectures captivated not by accident but because they were acts of craftsmanship. Students came not out of duty but anticipation. None of them needed the threat of consequences to fill a classroom. They made absence unthinkable. This is what the Indian university has forgotten. The Centre's increasing control has transformed campuses into intellectual vassals, where mandatory attendance policies serve as a tool of pedagogical pacification. By removing the coercive element, educators will be compelled to innovate. An empty classroom can be a catalyst for introspection, reorienting the incentive structure from external compulsion to intrinsic curiosity.`
    },
    {
        id: 27,
        title: "Public Health (Water Quality)",
        content: `An indicator of public health is the well-being of the poorer sections of the people. On most counts, India appears to be falling short, with the latest being the tragedy unfolding in Indore, Madhya Pradesh. At least four people have lost their lives after drinking municipality-supplied water, with more than 2,000 people falling ill. It is a development steeped in irony because Indore has been voted India’s cleanest city for several years in a row for its exemplary waste segregation.

The blame game began swiftly with authorities pinning it on tardy progress on installing a fresh supply line. However, a municipal supply is always considered to be a safe and “improved source”. If checks and balances were in place, the authorities would have spotted the contamination. Giving access to water is meaningless unless the quality of the supply is assured. There needs to be better enforcement of water guidelines at all levels.

Air pollution is already wreaking havoc on citizens’ health; unsafe drinking water should not be added to the list. With a population close to 147 crore, India’s water-borne disease burden is high. All States should immediately check water supply sources for chemical and sewage contaminants. Old infrastructure including pipes must be repaired or replaced. Strict enforcement of policy and monitoring of practice along with awareness campaigns is essential. Indore and many more cities in India have to clean up their act, or risk more deaths.`
    },
    {
        id: 28,
        title: "Science & Technology (Biomaterials)",
        content: `As countries look to shift to cleaner processes to manufacture consumer products, biomaterials will become the new frontier of materials engineering. Biomaterials are materials derived wholly or partly from biological sources, or engineered using biological processes. They are categorized into three types: drop-in biomaterials (chemically identical to petroleum-based materials, e.g., bio-PET), drop-out biomaterials (chemically different, require new processing, e.g., PLA), and novel biomaterials (new properties like self-healing).

For India, biomaterials address multiple goals: environmental sustainability, industrial growth, and supporting farmer livelihoods. Indigenous biomaterials can reduce India’s heavy dependence on fossil-based imports for plastics and chemicals. It would also enable diversified value for agricultural feedstocks and residues, offering farmers new income streams beyond food markets. India’s biomaterials sector, spanning bioplastics and biopolymers, is rapidly emerging. The bioplastics market alone was valued at around $500 million in 2024.

However, hurdles remain. If feedstocks do not scale with increased demand, there could be competition with food sources. Aggressive agricultural practices could lead to water stress. Weak waste-management and composting infrastructure could undermine environmental benefits. Fragmented policy coordination across agriculture, environment, and industry may slow adoption. Policy actions needed include scaling biomanufacturing infrastructure (especially fermentation capacity), improving feedstock productivity, and investing in R&D. Clear regulatory definitions and labelling norms are essential to build consumer confidence.`
    }
];

export const DAY_07_QUESTIONS: CSATQuestion[] = [
    // Passage 1: Mob Violence
    {
        id: 121,
        passageId: 25,
        question: "Which of the following statements best reflects the central concern raised in the passage?",
        options: [
            "The rise of illegal immigration from Bangladesh and China is threatening India's national security.",
            "The increasing dependence of Kerala on migrant labour is leading to economic instability.",
            "A disturbing pattern of mob violence is targeting Indian citizens based on suspicion of them being \"foreigners\" due to their language, region, or appearance.",
            "The lack of identification documents among migrant workers is the primary cause of mob lynching."
        ],
        correctAnswer: 2,
        explanation: "The text explicitly states: \"exposed a disturbing pattern of mob violence directed at migrants who were labelled foreigners... Suspicion... is escalating into mob violence.\""
    },
    {
        id: 122,
        passageId: 25,
        question: "The passage cites the incident involving Anjel Chakma in Dehradun to highlight:",
        options: [
            "The dangers of student politics in Uttarakhand.",
            "The racial discrimination faced by people from Northeastern States, who are often treated as \"perpetual outsiders\" and labelled \"Chinese\".",
            "The need for better healthcare facilities for stab victims.",
            "The rising crime rate in Dehradun due to tourism."
        ],
        correctAnswer: 1,
        explanation: "The text says Chakma was \"stabbed by a group that had allegedly hurled racial slurs... People from the northeastern States are often treated as perpetual outsiders... Chakma was called ‘Chinese’\"."
    },
    {
        id: 123,
        passageId: 25,
        question: "According to the author, what role has political rhetoric played in these incidents?",
        options: [
            "Political parties have successfully curbed mob violence through strict warnings.",
            "The campaign against \"illegal infiltration\" has emboldened mobs to target helpless people at random.",
            "The opposition parties are inciting violence to defame the government.",
            "Political leadership has remained completely silent and neutral."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"BJP has turned its incendiary campaign against 'illegal infiltration'... It is no coincidence that mobs across the country feel emboldened to raise this bogey\"."
    },
    {
        id: 124,
        passageId: 25,
        question: "What is the \"blot\" on Kerala's reputation mentioned in the passage?",
        options: [
            "The high literacy rate which makes people arrogant.",
            "The lynching of a migrant worker from Chhattisgarh, Ram Narayan Baghel, despite the state's pride in its law and order and dependence on migrant labour.",
            "The refusal of the state government to accept migrant workers from West Bengal.",
            "The poor quality of education in Palakkad district."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"Kerala is heavily dependent on migrant labour, and prides itself on its high levels of education... The lynching is a blot on its reputation.\""
    },
    {
        id: 125,
        passageId: 25,
        question: "Based on the passage, the victims of the mob violence in Palakkad, Sambalpur, and Dehradun shared which common characteristic?",
        options: [
            "They were all illegal immigrants from Bangladesh.",
            "They were all accused of theft by the police.",
            "They were all Indian citizens who were targeted because they were labelled as foreigners by mobs.",
            "They were all members of the same political party."
        ],
        correctAnswer: 2,
        explanation: "The text opens by saying: \"In these cases, the three victims were Indian citizens... labelled foreigners... by their attackers.\""
    },
    // Passage 2: Attendance
    {
        id: 126,
        passageId: 26,
        question: "The author describes \"compulsory attendance\" as belonging to a \"paternalistic era.\" What does this imply?",
        options: [
            "It implies that only fathers should decide if their children attend college.",
            "It implies a system that treats students as children who need to be controlled and prodded, rather than as autonomous intellectual beings.",
            "It implies that attendance was mandatory only for male students in the past.",
            "It implies that the system was created by the founding fathers of the constitution."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"Compulsory attendance belongs to a paternalistic era that believed that students must be prodded into intellectual life rather than invited into it.\""
    },
    {
        id: 127,
        passageId: 26,
        question: "According to the passage, why does the obsession with physical presence flourish in Indian universities?",
        options: [
            "Because students prefer face-to-face interaction over digital learning.",
            "Because classrooms have been reduced to the rote delivery of static knowledge (\"yellowing notes\") rather than dynamic intellectual engagement.",
            "Because the weather in India requires students to be indoors.",
            "Because there is a lack of digital infrastructure in most universities."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"obsession with physical presence flourishes where the classroom has been reduced to the perfunctory transfer of 'yellowing' notes, the rote delivery...\""
    },
    {
        id: 128,
        passageId: 26,
        question: "The passage suggests that the Delhi High Court's ruling will have which positive outcome for educators?",
        options: [
            "It will allow them to take more holidays since fewer students will show up.",
            "It will compel them to innovate and reimagine their pedagogical approaches to make classes inherently engaging.",
            "It will reduce their salary since they are teaching fewer students.",
            "It will force them to take attendance more strictly to prove the court wrong."
        ],
        correctAnswer: 1,
        explanation: "The text argues: \"educators will be compelled to innovate... prompting teachers to craft learning spaces that are intellectually compelling.\""
    },
    {
        id: 129,
        passageId: 26,
        question: "The author references Paulo Freire to support the idea that:",
        options: [
            "Education should be a mechanical depositing of information.",
            "Education is a dialogic encounter and an awakening of consciousness, not a passive reception of knowledge.",
            "Students must be obedient vessels for the teacher's wisdom.",
            "Attendance is the most critical factor in academic success."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"Paulo Freire saw... education was never the mechanical depositing of information but a dialogic encounter, an awakening of consciousness\"."
    },
    {
        id: 130,
        passageId: 26,
        question: "What does the term \"pedagogical pacification\" refer to in the context of the passage?",
        options: [
            "Using teaching methods that calm students down before exams.",
            "Using mandatory attendance and bureaucratic control to suppress student autonomy, dissent, and intellectual curiosity.",
            "A peace treaty signed between the university administration and the student union.",
            "The practice of meditating in the classroom."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"mandatory attendance policies serve as a tool of pedagogical pacification, undermining student autonomy and intellectual curiosity.\""
    },
    // Passage 3: Water Quality
    {
        id: 131,
        passageId: 27,
        question: "Why does the author describe the water contamination tragedy in Indore as \"steeped in irony\"?",
        options: [
            "Because Indore is known for its heavy rainfall yet faces water shortage.",
            "Because Indore has been voted India’s cleanest city for several years, yet failed to provide safe drinking water.",
            "Because the contamination happened in the wealthiest neighborhood of the city.",
            "Because the municipal corporation had just received an award for water management."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"It is a development steeped in irony because Indore has been voted India’s cleanest city for several years... for its exemplary waste segregation.\""
    },
    {
        id: 132,
        passageId: 27,
        question: "The passage argues that \"giving access to water is meaningless unless...\":",
        options: [
            "The water is provided free of cost.",
            "The water is supplied 24 hours a day.",
            "The quality of the supply is assured.",
            "The water is supplied in plastic bottles."
        ],
        correctAnswer: 2,
        explanation: "Direct quote: \"Giving access to water is meaningless unless the quality of the supply is assured.\""
    },
    {
        id: 133,
        passageId: 27,
        question: "According to the text, what is a \"municipal supply\" typically considered to be?",
        options: [
            "An unreliable source that requires further filtration.",
            "A safe and \"improved source\" of drinking water.",
            "A source meant only for washing and cleaning, not drinking.",
            "A private service provided by NGOs."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"A municipal supply is always considered to be a safe and 'improved source'\"."
    },
    {
        id: 134,
        passageId: 27,
        question: "What immediate actions does the author recommend for States to prevent similar tragedies?",
        options: [
            "Privatize all municipal water boards.",
            "Check water supply sources for contaminants and repair/replace old infrastructure like pipes.",
            "Stop supplying water to areas with old pipes.",
            "Ban the consumption of tap water entirely."
        ],
        correctAnswer: 1,
        explanation: "The text recommends: \"All States should immediately check water supply sources... Old infrastructure including pipes must be repaired or replaced.\""
    },
    {
        id: 135,
        passageId: 27,
        question: "The phrase \"tardy progress\" used by authorities refers to:",
        options: [
            "The fast-tracked completion of the new supply line.",
            "The delay or slow pace of installing a fresh supply line.",
            "The high quality of the materials used.",
            "The corruption involved in the contract."
        ],
        correctAnswer: 1,
        explanation: "\"Tardy\" means delayed or slow. The text mentions \"tardy progress on installing a fresh supply line.\""
    },
    // Passage 4: Biomaterials
    {
        id: 136,
        passageId: 28,
        question: "Which of the following best defines \"drop-in biomaterials\"?",
        options: [
            "Biomaterials that are chemically different from petroleum-based materials and require new machinery.",
            "Biomaterials that possess novel properties like self-healing.",
            "Biomaterials that are chemically identical to petroleum-based materials and can be used in existing manufacturing systems.",
            "Biomaterials that are imported from other countries."
        ],
        correctAnswer: 2,
        explanation: "The text defines drop-in biomaterials as: \"chemically identical to petroleum-based materials and can be used in existing manufacturing systems.\""
    },
    {
        id: 137,
        passageId: 28,
        question: "According to the passage, how can the biomaterials sector benefit Indian farmers?",
        options: [
            "By encouraging them to stop growing food crops.",
            "By offering diversified value for agricultural feedstocks and residues, creating new income streams beyond food markets.",
            "By providing them with free plastic bags.",
            "By reducing the cost of fossil-based fertilizers."
        ],
        correctAnswer: 1,
        explanation: "The text says: \"enable diversified value for agricultural feedstocks... offering farmers new income streams beyond food markets.\""
    },
    {
        id: 138,
        passageId: 28,
        question: "What is the potential risk associated with \"feedstock competition\" mentioned in the text?",
        options: [
            "That farmers will fight each other for seeds.",
            "That increased demand for biomaterials might compete with food sources if feedstock production doesn't scale.",
            "That foreign companies will buy all the feedstock.",
            "That feedstocks will become poisonous."
        ],
        correctAnswer: 1,
        explanation: "The text warns: \"If feedstocks also do not scale... there could be feedstock competition with food sources.\""
    },
    {
        id: 139,
        passageId: 28,
        question: "Why does the author emphasize the need for \"scaling biomanufacturing infrastructure\"?",
        options: [
            "Because India currently has no factories.",
            "Because fermentation capacity and polymerisation capacity need to be expanded to capitalize on the strategic opportunity.",
            "Because it is the only way to ban fossil fuels.",
            "Because the government has mandated it in the budget."
        ],
        correctAnswer: 1,
        explanation: "The text lists \"scaling biomanufacturing infrastructure (especially fermentation...)\" as a necessary policy action to capitalize on the sector."
    },
    {
        id: 140,
        passageId: 28,
        question: "The passage suggests that \"weak waste-management infrastructure\" could:",
        options: [
            "Help in the faster decomposition of biomaterials.",
            "Undermine the environmental benefits of using biomaterials (e.g., if composting is not available).",
            "Have no impact on the biomaterials sector.",
            "Increase the profitability of bioplastics."
        ],
        correctAnswer: 1,
        explanation: "The text states: \"weak waste-management and composting infrastructure could undermine environmental benefits.\""
    }
];

export const DAY_07_SESSION = {
    day: 7,
    title: "Social Justice, Education & Public Health",
    passageCount: 4,
    questionCount: 20,
    duration: 50,
    topics: ["Mob Violence", "Attendance Logic", "Indore Water Crisis", "Biomaterials"]
};
