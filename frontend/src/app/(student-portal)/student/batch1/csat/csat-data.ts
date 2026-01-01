export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-based index
    explanation: string;
}

export interface Passage {
    id: number;
    title: string;
    text: string;
    questions: Question[];
}

export interface SessionData {
    day: number;
    description?: string;
    passages: Passage[];
}

export const CSAT_DAY_1_DATA: SessionData = {
    day: 1,
    description: "UPSC CSAT Practice Set - Day 01: Reading Comprehension",
    passages: [
        {
            id: 1,
            title: "Passage 1: India's Space Programme",
            text: `India's space programme, a people's space journey. (2024) has demonstrated in-orbit docking for future space stations and lunar missions. (2024) is studying black holes, while SpaDeX providing unprecedented insights into the sun's corona and its impact on space weather. XPoSat (Mangalyaan). The Aditya-LI mission (2023), built through multi-institutional collaboration, is maiden attempt, with the Mars Orbiter Mission became the first Asian nation and only the fourth in the world to reach Mars orbit and on its launched aboard Indian rockets. In 2014, India space. Over 400 foreign satellites have been landscapes in notebooks, it left researchers feeling vindicated, and inspired citizens who saw India's story in space as also their own future. ground for Chandrayaan-3 (2023), which rover explored the lunar surface for a full moon achieved the world's first soft landing near the south pole. When the Vikram lander and Pragyan water molecules; Chandrayaan-2 (2019) mapped the moon with high precision and prepared the programme has been truly path breaking: Chandrayaan-1 (2008) confirmed the presence of Modi - words which rippled through classrooms, villages and living rooms alike. India's lunar pole. "India is now on the Moon," declared Mr. August 23, 2023, when Chandrayaan-3 made India the first nation to land near the lunar south purposeful programmes.

India has become a trusted global partner in identity being reshaped through vision and own heartbeat. It was not just science. It was Prime Minister called it a "defining chapter" of moment felt like India's ascent was a part of their (ISS) and spoke to Prime Minister Narendra Modi, Amrit Kaal ('era of nectar'), and for many, that Tricolour aboard the International Space Station it was a moment of pride for every Indian. The Captain Shubhanshu Shukla displayed the That same spirit has been echoed earlier, on national pulse and is a source of daily inspiration. In June 2025, when Group string of spectacular missions. It has the space journey has evolved beyond a 2035, and an Indian human landing on the Moon mission, a Bharatiya Antariksh Station (BAS) by deeper lunar exploration, a dedicated Venus human spaceflight, Chandrayaan-4 and 5 for continuation of the Gaganyaan programme for and aspiration. The road map is bold: A new space vision. These milestones are reshaping policy, culture.

S. Somanath, Secretary, Department of Space and Chairman ISRO writes: India is not only an active participant in the space age but is also shaping it. The space budget has nearly tripled from ₹5,615 crore in 2013-14 to 13,416 crore in 2025-26—and has been augmented by nearly 25,000 crore in user funds. India's space economy, currently valued at $8 billion, is projected to grow to $44 billion in the years ahead, creating jobs, industries and innovations that orbit around this sector. The transformation of India's space sector is deliberate and ambitious. The opening of the field to private players, creating a thriving ecosystem of more than 350 startups building satellites, launch vehicles, and ground systems. Future-ready technologies in space operations surveillance and interplanetary travel are being developed, ensuring that India retains leadership in this strategic frontier.

The Prime Minister has challenged the ecosystem to deliver five space unicorns within the next five years and to scale up annual launches, nearly ten-fold, to 50 a year. With private participation, India is advancing technologies related to semi-cryogenics, electric propulsion, quantum communication and in-orbit servicing. Youth are at the heart of this vision. The Space is no longer a distant luxury but a democratic utility accessible to every citizen. Air Force test pilots are undergoing training, and mission, presently targeted for 2027. backbone of the PM Gati Shakti programme. by 2040. These are not distant dreams but pool of 40 to 50 trained astronauts for future 23), he urged young citizens to see themselves as fabric of governance and daily life. Satellites deliver disaster warnings, guide fishermen, assess crop yields and insurance claims, enhance national goals, aligned with the spirit of Amrit Kaal. participants in India's human space programme. Gaganyaan, with an approved outlay of over a series of uncrewed and crewed flights will culminate in india's first indigenous human space 20,000 crore, is advancing steadily.

Space technology today is woven into the fabric of governance and daily life. At the same time, space exploration fuels Science, Technology, Engineering and Mathematics (STEM) education. Initiatives such as the ISRO Robotics Challenge and Indian Space Hackathon/Bharatiya Antariksh Hackathon are bringing school and college students into direct contact with rovers, satellites and rockets. The International Olympiad on Astronomy and Astrophysics hosted in India (August 2025) drew nearly 300 participants from over 60 countries, with Indian students winning medals. Global collaborations and leadership are bringing school and college students into the fold. Space has been consistently projected as a global commons, where India's leadership translates into shared progress. Collaborative missions such as NASA-ISRO Synthetic Aperture Radar (NISAR), Lunar Polar Exploration (LUPEX) with JAXA, and TRISHNA with CNES demonstrate India's rise as a global partner. In this Amrit Kaal, India is not simply participating in the space age. It is shaping it. India's space journey is more than rockets and satellites. It is about a nation discovering new ways to see itself.`,
            questions: [
                {
                    id: 1,
                    question: "Which one of the following statements best reflects the \"crux\" of the passage?",
                    options: [
                        "India’s space programme is primarily focused on competing with global superpowers to establish dominance in the lunar south pole region.",
                        "The recent surge in India's space budget is solely due to the privatization of the sector and the entry of startups.",
                        "India’s space journey has evolved from scientific exploration into a comprehensive socio-economic and cultural movement that redefines national identity.",
                        "The main objective of the Gaganyaan mission is to train Air Force pilots for future military surveillance operations in space."
                    ],
                    correctAnswer: 2, // (c)
                    explanation: "The passage repeatedly emphasizes that the space journey is \"a people's space journey,\" reshaping \"policy, culture, and aspiration,\" and is a \"defining chapter\" of national identity (Amrit Kaal). It is not just about science or competition, nor just about budget."
                },
                {
                    id: 2,
                    question: "Based on the passage, what distinguishes the \"Amrit Kaal\" of India's space journey from previous eras?",
                    options: [
                        "It marks the first time India has collaborated with international agencies like NASA and JAXA.",
                        "It represents a shift where space technology is viewed as a democratic utility integrated into governance and daily life, rather than just a distant scientific luxury.",
                        "It is the specific period where India stopped launching foreign satellites to focus solely on domestic launches.",
                        "It is defined strictly by the successful landing of Chandrayaan-3 on the lunar south pole."
                    ],
                    correctAnswer: 1, // (b)
                    explanation: "The text states: \"Space is no longer a distant luxury but a democratic utility accessible to every citizen... interwoven into the fabric of governance and daily life.\""
                },
                {
                    id: 3,
                    question: "According to the passage, which of the following are the projected economic impacts of the transforming space sector?\n1. The space economy growing from $8 billion to $44 billion.\n2. The creation of five space unicorns within the next five years.\n3. A ten-fold increase in annual launches to 50 a year.",
                    options: [
                        "1 only",
                        "1 and 2 only",
                        "2 and 3 only",
                        "1, 2 and 3"
                    ],
                    correctAnswer: 3, // (d)
                    explanation: "The text explicitly mentions all three: The economy growing to $44 billion, the challenge to deliver five unicorns, and scaling launches to 50 a year."
                },
                {
                    id: 4,
                    question: "The author mentions \"India's space journey is more than rockets and satellites.\" Which of the following is the most logical inference from this statement?",
                    options: [
                        "Rockets and satellites are no longer the primary focus of ISRO's future roadmap.",
                        "The technological aspects of space missions are less important than the diplomatic relationships they foster.",
                        "The impact of the space programme extends to psychological empowerment, national pride, and the inspiration of the younger generation.",
                        "The government is planning to reduce funding for hardware manufacturing to focus on software and education."
                    ],
                    correctAnswer: 2, // (c)
                    explanation: "The text says it is about a nation \"discovering new ways to see itself,\" mentions \"pride for every Indian,\" and discusses the inspiration of youth/students. This aligns with psychological empowerment and national pride."
                },
                {
                    id: 5,
                    question: "With reference to the \"Global collaborations\" mentioned in the passage, consider the following statements:\n1. The NISAR mission is a collaboration between ISRO and the European Space Agency (ESA).\n2. The LUPEX mission involves cooperation with the Japan Aerospace Exploration Agency (JAXA).\n3. The South Asia Satellite initiative was announced during India's G20 Presidency.\n\nWhich of the statements given above is/are correct based strictly on the passage?",
                    options: [
                        "1 and 2 only",
                        "2 only",
                        "1 and 3 only",
                        "1, 2 and 3"
                    ],
                    correctAnswer: 1, // (b)
                    explanation: "Statement 1 is incorrect (NISAR is NASA-ISRO, not ESA). Statement 2 is correct (LUPEX is with JAXA). Statement 3 is incorrect; the \"South Asia Satellite\" is a separate, earlier initiative mentioned in the context of \"Global commons\" but distinct from the G20 announcement."
                }
            ]
        },
        {
            id: 2,
            title: "Passage 2: Property Registration & Title",
            text: `The Supreme Court of India, in its recent decision in Samiullah vs State of Bihar, described the process of buying and selling property as "traumatic" for many Indians. The observation resonates widely, reflecting the complex and often challenging realities of land transactions in the country. The Supreme Court examined the validity of sub-rules introduced a Registration Rules in 2019, which empowered the registering authorities to refuse the registration of documents transferring property, such as sale or gift deeds, if the seller could not provide proof of mutation, including documents like a Jamabandi or holding allotment. The court struck down these sub-rules as ultra vires and arbitrary for three reasons.

First, the rules went beyond the powers granted to the Inspector General of Registration under the Registration Act. Second, by making the sellers produce proof of mutation as a precondition for registering a document, the rules effectively demanded evidence of title. This was held to be contrary to the object of the Registration Act. It curtailed the ability to freely transfer property, thereby significantly impacting the constitutionally protected right to property. Third, with the Bihar Mutation Act and the Bihar Special Survey and Settlement Act far from completion, obtaining proof of mutation was virtually impossible.

The court reaffirmed that the registration of a transfer deed is distinct from establishing title or ownership. The enquiry into questions of title and ownership falls within the scope of civil courts and not registration offices. The court concluded that the preconditions for registration pertain to the identification of the property and the seller. References to maps or surveys are made only for this purpose, if it is practicable.

Why is registration different from title? The State of Bihar argued that mandatory proof of mutation would ensure the integrity of sale transactions by aligning registration with the actual title. While the court acknowledged the merit in synchronisation, it cited the lack of nationwide land surveys since 1950 and insufficient digitisation of land records as significant obstacles. The court observed that, until a conclusive titling is integrated with the registration process, it remains the responsibility of constitutional courts to strike a balance between individuals' freedom to buy and sell property and the government's obligation to maintain the integrity of property transactions.

Registration creates only a rebuttable presumption of ownership, not conclusive proof. The forthcoming Registration Bill, 2025 which seeks to replace the Registration Act of 1908 is consistent with this position. The premise of these regulations is that the power to refuse registration cannot be construed as empowering registering officers to adjudicate upon questions of title or ownership of property, which are within the jurisdiction of a competent court.

Why has buying and selling property become 'traumatic' in India? Land governance in India is a mixture of colonial legislation, complex administrative set-ups, and an overburdened judiciary. Three separate domains—Registration, Survey and Settlement, and Revenue—operate independently, making synchronisation of records a persistent challenge. Each department is governed by a separate legislative and administrative mandate. Further, the current system creates only a presumption of title, which can be challenged in court using evidence such as previous deeds, revenue receipts, mutation records, proof of possession, or even competing sale deeds. This places a heavy burden on buyers to conduct exhaustive due diligence before purchasing property.

What is the way forward for land administration reform? The solution lies in large-scale administrative reform. The focus needs to be on creating an integrated and synchronised record keeping system that minimises the risk of fraud. Efforts are under way at both the Union and State levels to digitise and modernise land records. Technology is playing a key role in these reform initiatives. From digitising records to making workflow processes tech enabled, there is also growing discussion on the role of artificial intelligence and blockchain technologies.

In fact, in its recent decision, the Supreme Court suggested exploring blockchain technology to create secure, transparent, and tamper-proof land records. Andhra Pradesh's pilot project using blockchain for land records has reportedly halved land disputes and improved transaction efficiency by 10%. How would blockchains work? Blockchain, as its moniker suggests, is a chain of blocks of data linked into an uneditable, digital chain. This information is stored in an open source, decentralised environment, in which each block's information is confirmable by every participating computer. If we apply this system to land records, we could create a block for a single piece of land containing all its historical records, title, heirs of title holders, geographic location, survey details, its map, water resources, crops, along with all registered documents associated with the particular land.`,
            questions: [
                {
                    id: 6,
                    question: "What was the primary reason the Supreme Court struck down the 2019 Bihar Registration Rules?",
                    options: [
                        "The rules failed to account for the digitization of land records which had already been completed in Bihar.",
                        "The rules arbitrarily gave the Sub-Registrar the power of a civil court to decide on issues of title and ownership.",
                        "The rules were in violation of the Registration Bill, 2025.",
                        "The rules did not include the use of blockchain technology for verification."
                    ],
                    correctAnswer: 1, // (b)
                    explanation: "The passage states the rules were struck down because they \"effectively demanded evidence of title\" and that \"enquiry into questions of title and ownership falls within the scope of civil courts and not registration offices\"."
                },
                {
                    id: 7,
                    question: "According to the passage, why is the separation between \"Registration\" and \"Title\" significant in the Indian legal context?",
                    options: [
                        "Because registration offices are better equipped than civil courts to handle ownership disputes.",
                        "Because registration only confirms the identity of the property and seller, whereas title (ownership) is a matter of judicial evidence that registration officers cannot adjudicate.",
                        "Because the Registration Act mandates that only those with \"conclusive proof\" of ownership can register a sale deed.",
                        "Because the Constitution prohibits the government from interfering in private property sales."
                    ],
                    correctAnswer: 1, // (b)
                    explanation: "The text states that \"preconditions for registration pertain to the Identification of the property and the seller\" and that registration is distinct from establishing title."
                },
                {
                    id: 8,
                    question: "The passage cites \"fragmented land governance\" as a cause for traumatic property transactions. Which of the following best explains this fragmentation?",
                    options: [
                        "The existence of too many private real estate developers operating without regulation.",
                        "The conflict between colonial laws and modern blockchain technology.",
                        "The independent operation of three separate domains: Registration, Survey/Settlement, and Revenue, without adequate synchronization.",
                        "The disagreement between the Union and State governments regarding land ceiling acts."
                    ],
                    correctAnswer: 2, // (c)
                    explanation: "The text explicitly states: \"Three separate domains—Registration, Survey and Settlement, and Revenue—operate independently, making synchronisation of records a persistent challenge\"."
                },
                {
                    id: 9,
                    question: "Which of the following assumptions is made by the author regarding the implementation of Blockchain technology in land records?",
                    options: [
                        "Blockchain technology will immediately eliminate the need for civil courts in land disputes.",
                        "The introduction of blockchain technology requires the prior removal of all existing colonial land laws.",
                        "An immutable, decentralized record system can reduce fraud and the burden of due diligence on buyers.",
                        "Blockchain is the only technology capable of fixing India's land record problems."
                    ],
                    correctAnswer: 2, // (c)
                    explanation: "The passage describes blockchain as creating an \"immutable record\" and mentions that Andhra Pradesh's pilot \"halved land disputes.\" This implies the assumption that such a system reduces fraud and improves efficiency."
                },
                {
                    id: 10,
                    question: "Based on the passage, what is the legal status of a registered sale deed in India currently?",
                    options: [
                        "It is conclusive and irrefutable proof of ownership.",
                        "It is a rebuttable presumption of ownership which can be challenged in court.",
                        "It is valid only if accompanied by a mutation certificate and a Jamabandi.",
                        "It is a temporary document that expires once the Registration Bill 2025 is passed."
                    ],
                    correctAnswer: 1, // (b)
                    explanation: "The text clearly states: \"Registration creates only a rebuttable presumption of ownership, not conclusive proof\"."
                }
            ]
        }
    ]
};
