// Science & Technology MCQs - Practice Questions
// UPSC Prelims-style questions on Space, Defense, IT, Biotech

export interface SciTechMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    chapter: number;
    subtopic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const sciTechMCQs: SciTechMCQ[] = [
    {
        id: "st-mcq-01",
        question: "Which rocket is used by ISRO to launch satellites to Sun-synchronous orbit?",
        options: ["GSLV Mk II", "PSLV", "GSLV Mk III", "SSLV"],
        correctAnswer: 1,
        explanation: "PSLV (Polar Satellite Launch Vehicle) is ISRO's workhorse for launching satellites to LEO and Sun-synchronous orbits.",
        chapter: 1,
        subtopic: "Launch Vehicles",
        difficulty: "easy"
    },
    {
        id: "st-mcq-02",
        question: "NavIC is India's:",
        options: [
            "Communication satellite system",
            "Regional navigation satellite system",
            "Weather satellite",
            "Remote sensing satellite"
        ],
        correctAnswer: 1,
        explanation: "NavIC (Navigation with Indian Constellation) is India's regional satellite navigation system providing GPS-like coverage over India and surrounding region.",
        chapter: 1,
        subtopic: "Navigation Missions",
        difficulty: "easy"
    },
    {
        id: "st-mcq-03",
        question: "What is the range of Agni-V missile?",
        options: [
            "1000 km",
            "2500 km",
            "3500 km",
            "5000+ km"
        ],
        correctAnswer: 3,
        explanation: "Agni-V is an intercontinental ballistic missile with range of 5,000+ km, making India a nuclear power with ICBM capability.",
        chapter: 2,
        subtopic: "Missile Systems",
        difficulty: "medium"
    },
    {
        id: "st-mcq-04",
        question: "BrahMos missile is jointly developed by India and:",
        options: ["USA", "France", "Russia", "Israel"],
        correctAnswer: 2,
        explanation: "BrahMos is a supersonic cruise missile jointly developed by India and Russia. It's the world's fastest cruise missile.",
        chapter: 2,
        subtopic: "International Cooperation",
        difficulty: "easy"
    },
    {
        id: "st-mcq-05",
        question: "CRISPR-Cas9 is used for:",
        options: [
            "Nuclear fusion",
            "Gene editing",
            "Satellite communication",
            "Quantum computing"
        ],
        correctAnswer: 1,
        explanation: "CRISPR-Cas9 is a revolutionary gene editing technology that can cut DNA at specific locations. Nobel Prize 2020.",
        chapter: 3,
        subtopic: "Biotechnology",
        difficulty: "easy"
    },
    {
        id: "st-mcq-06",
        question: "India's three-stage nuclear program was conceived by:",
        options: [
            "Vikram Sarabhai",
            "Homi J. Bhabha",
            "APJ Abdul Kalam",
            "C.V. Raman"
        ],
        correctAnswer: 1,
        explanation: "Homi J. Bhabha conceived India's three-stage nuclear program to utilize India's thorium reserves.",
        chapter: 5,
        subtopic: "Nuclear Energy",
        difficulty: "medium"
    },
    {
        id: "st-mcq-07",
        question: "Quantum computing uses:",
        options: [
            "Bits (0 or 1)",
            "Qubits (superposition)",
            "Analog signals",
            "Optical fibers"
        ],
        correctAnswer: 1,
        explanation: "Quantum computers use qubits which can exist in superposition (0 and 1 simultaneously), enabling parallel processing.",
        chapter: 4,
        subtopic: "Modern Tech",
        difficulty: "medium"
    },
    {
        id: "st-mcq-08",
        question: "UPI (Unified Payments Interface) was developed by:",
        options: ["RBI", "NPCI", "IRDAI", "SEBI"],
        correctAnswer: 1,
        explanation: "UPI was developed by NPCI (National Payments Corporation of India) and launched in 2016. Part of India Stack.",
        chapter: 4,
        subtopic: "Digital Public Infrastructure",
        difficulty: "easy"
    },
    {
        id: "st-mcq-09",
        question: "5G technology operates in which frequency band?",
        options: [
            "Low band only (below 1 GHz)",
            "Mid and High band (1-100 GHz)",
            "Only visible light spectrum",
            "Radio waves below 100 MHz"
        ],
        correctAnswer: 1,
        explanation: "5G uses low band (<1 GHz), mid band (1-6 GHz), and high band/mmWave (24-100 GHz) for different applications.",
        chapter: 4,
        subtopic: "Telecommunications",
        difficulty: "medium"
    },
    {
        id: "st-mcq-10",
        question: "Tejas is India's indigenous:",
        options: [
            "Battle tank",
            "Light Combat Aircraft",
            "Submarine",
            "Aircraft carrier"
        ],
        correctAnswer: 1,
        explanation: "Tejas is India's indigenous Light Combat Aircraft (LCA) developed by HAL and ADA. A 4th generation multirole fighter.",
        chapter: 2,
        subtopic: "Defense Tech",
        difficulty: "easy"
    },
    {
        id: "st-mcq-11",
        question: "With reference to 'Mission Divyastra' tested recently, consider the following:\n1. It is the first flight test of Agni-5 with MIRV technology.\n2. MIRV allows a single missile to deliver multiple warheads to different targets.\nWhich is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Mission Divyastra (March 2024) tested Agni-5 with MIRV (Multiple Independently Targetable Re-entry Vehicle) technology.",
        chapter: 2, subtopic: "Missile Systems", difficulty: "hard"
    },
    {
        id: "st-mcq-12",
        question: "The 'Pushpak' vehicle, successfully tested by ISRO, is related to:",
        options: ["Solar observation", "Reusable Launch Vehicle (RLV)", "Mars orbiter", "Heavy lift rocket"],
        correctAnswer: 1,
        explanation: "Pushpak is India's Reusable Launch Vehicle (RLV-LEX-02/03 tests) aimed at reducing launch costs by recovering the flight vehicle.",
        chapter: 1, subtopic: "Launch Vehicles", difficulty: "medium"
    },
    {
        id: "st-mcq-13",
        question: "NISAR, a joint satellite mission being developed for Earth observation, is a collaboration between:",
        options: ["ISRO and ESA", "ISRO and NASA", "ISRO and JAXA", "ISRO and Roscosmos"],
        correctAnswer: 1,
        explanation: "NISAR (NASA-ISRO Synthetic Aperture Radar) will use dual-frequency radar to observe Earth's changing ecosystems and ice masses.",
        chapter: 1, subtopic: "International Missions", difficulty: "medium"
    },
    {
        id: "st-mcq-14",
        question: "What is the primary objective of India's 'XPoSat' mission?",
        options: ["Solar flare monitoring", "X-ray polarimetry of celestial sources", "Mapping of the moon's south pole", "Study of the exosphere of Venus"],
        correctAnswer: 1,
        explanation: "XPoSat (X-ray Polarimeter Satellite) is India's first dedicated polarimetry mission to study black holes and neutron stars.",
        chapter: 1, subtopic: "Space Research", difficulty: "hard"
    },
    {
        id: "st-mcq-15",
        question: "The 'IndiaAI Mission', approved by the cabinet, aims to establish a compute capacity of:",
        options: ["100 GPUs", "1,000 GPUs", "10,000+ GPUs", "100,000 GPUs"],
        correctAnswer: 2,
        explanation: "The IndiaAI Mission (₹10,372 crore) aims to provide scalable AI compute infrastructure with 10,000+ GPUs for startups and academia.",
        chapter: 4, subtopic: "Artificial Intelligence", difficulty: "medium"
    },
    {
        id: "st-mcq-16",
        question: "Which technology allows 'Bhashini' to enable voice-based translation in multiple Indian languages?",
        options: ["Blockchain", "Digital Twin", "Generative AI and NLP", "Quantum Key Distribution"],
        correctAnswer: 2,
        explanation: "Bhashini is India's AI-led language translation platform using Natural Language Processing (NLP) to empower citizens with digital services in native languages.",
        chapter: 4, subtopic: "Artificial Intelligence", difficulty: "easy"
    },
    {
        id: "st-mcq-17",
        question: "The 'NexCAR19' (varnimcabtagene autoleucel), recently approved in India, is:",
        options: ["A new COVID-19 variant", "India's first indigenous CAR T-cell therapy for cancer", "A drug for Sickle Cell Anemia", "A vector-borne disease vaccine"],
        correctAnswer: 1,
        explanation: "NexCAR19 is India's first indigenously developed CAR T-cell therapy for treating certain types of blood cancers (lymphoma/leukemia).",
        chapter: 3, subtopic: "Biotechnology", difficulty: "hard"
    },
    {
        id: "st-mcq-18",
        question: "Under the National Sickle Cell Anemia Elimination Mission, India aims to eliminate the disease by:",
        options: ["2030", "2040", "2047", "2050"],
        correctAnswer: 2,
        explanation: "Launched in 2023, the mission targets the elimination of Sickle Cell Anemia by 2047 (the centenary of India's independence).",
        chapter: 3, subtopic: "Health Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-19",
        question: "What does 'SMR' stand for in the context of nuclear energy innovations?",
        options: ["Solar Micro Reactor", "Small Modular Reactor", "Standard Multi-fuel Reactor", "Super Magnetic Resonance"],
        correctAnswer: 1,
        explanation: "Small Modular Reactors (SMRs) are advanced nuclear reactors with power capacity up to 300 MW, designed for modular construction and enhanced safety.",
        chapter: 5, subtopic: "Nuclear Energy", difficulty: "medium"
    },
    {
        id: "st-mcq-20",
        question: "The 'Genome India Project', which recently completed sequencing 10,000 genomes, aims to create a reference database for:",
        options: ["Crop improvement only", "Indian population's unique genetic variations", "Tracing ancient migrations", "Mapping wildlife diversity"],
        correctAnswer: 1,
        explanation: "The Genome India Project (Department of Biotechnology) mapped 10,000 Indian genomes to identify unique genetic traits and predispositions to diseases.",
        chapter: 3, subtopic: "Biotechnology", difficulty: "medium"
    },
    {
        id: "st-mcq-21",
        question: "Small Satellite Launch Vehicle (SSLV) is designed to launch small satellites (up to 500kg) into:",
        options: ["Geostationary Transfer Orbit (GTO)", "Low Earth Orbit (LEO)", "Lunar Orbit", "Sun-Synchronous Orbit only"],
        correctAnswer: 1,
        explanation: "SSLV is ISRO's new launch vehicle for small satellites (on-demand) targeting the 500kg class in LEO (500km).",
        chapter: 1, subtopic: "Launch Vehicles", difficulty: "easy"
    },
    {
        id: "st-mcq-22",
        question: "With reference to the 'DPDP Act, 2023', who is a 'Data Fiduciary'?",
        options: ["The individual to whom the data relates", "Any person who determines the purpose and means of processing personal data", "The government agency monitoring the internet", "The storage facility where servers are located"],
        correctAnswer: 1,
        explanation: "Under the Digital Personal Data Protection Act, a Data Fiduciary is the entity (company/individual) that decides why and how data is processed.",
        chapter: 4, subtopic: "Information Technology", difficulty: "medium"
    },
    {
        id: "st-mcq-23",
        question: "What is 'White Phosphorus', often in news in the context of defense/humanitarian law?",
        options: ["A new stealth material for jets", "A chemical that creates dense white smoke and severe burns", "A rare earth element used in magnets", "A component of solid rocket fuel"],
        correctAnswer: 1,
        explanation: "White phosphorus is a pyrophoric chemical used for smoke screens and incendiary bombing, regulated under the Protocol on Incendiary Weapons.",
        chapter: 2, subtopic: "Defense Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-24",
        question: "The 'Aditya-L1' mission, India's first solar observatory, is placed at:",
        options: ["Lagrange Point 1", "Lagrange Point 2", "Geostationary Orbit", "Lunar Halo Orbit"],
        correctAnswer: 0,
        explanation: "Aditya-L1 is placed in a halo orbit around Lagrange Point 1 (L1) of the Sun-Earth system, ~1.5 million km from Earth.",
        chapter: 1, subtopic: "Solar Missions", difficulty: "easy"
    },
    {
        id: "st-mcq-25",
        question: "With reference to 'Superconductivity', what is 'Meissner Effect'?",
        options: ["Loss of resistance at high temperature", "The total expulsion of magnetic fields from a superconductor", "The flow of electrons in a loop", "Conversion of heat into electricity"],
        correctAnswer: 1,
        explanation: "The Meissner effect is the expulsion of magnetic fields from a superconductor when it transitions into the superconducting state.",
        chapter: 5, subtopic: "Applied Physics", difficulty: "hard"
    },
    {
        id: "st-mcq-26",
        question: "What is 'Generative AI' primarily capable of?",
        options: ["Sorting existing data", "Creating new content like text, images, and code", "Replacing cloud storage", "Detecting malware in 4G networks"],
        correctAnswer: 1,
        explanation: "Generative AI (like ChatGPT/Midjourney) creates new data/content by learning patterns from massive existing datasets.",
        chapter: 4, subtopic: "IT & AI", difficulty: "easy"
    },
    {
        id: "st-mcq-27",
        question: "The 'National Quantum Mission' (NQM) targets the development of quantum computers with capacity up to:",
        options: ["10 qubits", "50 qubits", "1,000 qubits by 2031", "1,000,000 qubits"],
        correctAnswer: 2,
        explanation: "NQM aims to develop intermediate-scale quantum computers (50-1,000 qubits) in the next 8 years (2023-2031).",
        chapter: 4, subtopic: "Quantum Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-28",
        question: "What is 'Deepfake' technology?",
        options: ["A secure encryption method", "Artificial intelligence used to create realistic but fake media", "A deep-sea exploration tool", "A method to compress heavy video files"],
        correctAnswer: 1,
        explanation: "Deepfakes are synthetic media (audio/video) where AI replaces the likeness of one person with another, often used for misinformation.",
        chapter: 4, subtopic: "Emerging Tech", difficulty: "easy"
    },
    {
        id: "st-mcq-29",
        question: "INS Arighat, recently commissioned, is India's second:",
        options: ["Aircraft carrier", "Nuclear-powered ballistic missile submarine (SSBN)", "Destroyer with stealth features", "Conventional diesel-electric submarine"],
        correctAnswer: 1,
        explanation: "INS Arighat is India's second Arihant-class nuclear-powered ballistic missile submarine, strengthening the submarine leg of the nuclear triad.",
        chapter: 2, subtopic: "Defense Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-30",
        question: "What is the primary function of an 'Electrolyzer' in the National Green Hydrogen Mission?",
        options: ["Burning hydrogen for power", "Splitting water into hydrogen and oxygen using electricity", "Storing hydrogen in liquid form", "Transporting hydrogen through pipelines"],
        correctAnswer: 1,
        explanation: "Electrolyzers use electricity (from renewable sources in 'green' hydrogen) to split water (H2O) into hydrogen and oxygen.",
        chapter: 5, subtopic: "Energy Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-31",
        question: "With reference to 'Dark Matter', what is the LUX-ZEPLIN (LZ) experiment?",
        options: ["A search for extra-solar planets", "An underground experiment to detect WIMPs (Weakly Interacting Massive Particles)", "A study of the solar corona", "A high-altitude drone project"],
        correctAnswer: 1,
        explanation: "The LZ experiment is a highly sensitive dark matter detector located a mile underground in the US, searching for elusive WIMPs.",
        chapter: 1, subtopic: "Astrophysics", difficulty: "hard"
    },
    {
        id: "st-mcq-32",
        question: "What is 'Cultured Meat' (also called lab-grown meat)?",
        options: ["Meat from transgenic animals", "Meat produced in vitro using animal cell culture", "Meat substitutes made from soy and peas", "A traditional method of curing meat"],
        correctAnswer: 1,
        explanation: "Cultured meat is produced by cultivating animal cells directly, eliminating the need to raise and slaughter animals.",
        chapter: 3, subtopic: "Biotechnology", difficulty: "medium"
    },
    {
        id: "st-mcq-33",
        question: "With reference to the evolution of internet, 'Web 3.0' is primarily characterized by:",
        options: ["Static web pages", "Social media and interactivity", "Decentralization and blockchain-based ownership", "Purely text-based browsing"],
        correctAnswer: 2,
        explanation: "Web 3.0 aims for a decentralized web where users have control over their data and assets using blockchain technology.",
        chapter: 4, subtopic: "Information Technology", difficulty: "medium"
    },
    {
        id: "st-mcq-34",
        question: "The 'Artemis Accords', which India recently signed, are related to:",
        options: ["Deep-sea mining regulations", "International cooperation in civil space exploration", "Cyber-warfare prevention", "Global climate change mitigation"],
        correctAnswer: 1,
        explanation: "The Artemis Accords establish a practical set of principles to guide space exploration cooperation among nations, including returning humans to the Moon.",
        chapter: 1, subtopic: "International Cooperation", difficulty: "medium"
    },
    {
        id: "st-mcq-35",
        question: "Who is 'Vyommitra' in the context of India's space program?",
        options: ["A noted space scientist", "A humanoid robot for the Gaganyaan mission", "A new satellite for communication", "The mascot of ISRO's commercial arm"],
        correctAnswer: 1,
        explanation: "Vyommitra is a female-looking humanoid robot developed by ISRO to fly aboard uncrewed Gaganyaan missions to monitor parameters.",
        chapter: 1, subtopic: "Manned Missions", difficulty: "easy"
    },
    {
        id: "st-mcq-36",
        question: "The 'LUPEX' mission is a joint robotic lunar exploration mission involving ISRO and:",
        options: ["NASA", "ESA", "JAXA", "Roscosmos"],
        correctAnswer: 2,
        explanation: "LUPEX (Lunar Polar Exploration) is a joint ISRO-JAXA mission to explore the Moon's South Pole for water ice.",
        chapter: 1, subtopic: "Lunar Missions", difficulty: "medium"
    },
    {
        id: "st-mcq-37",
        question: "What is 'Mission Shakti', conducted by India in 2019?",
        options: ["A solar power mission", "An Anti-Satellite (A-SAT) missile test", "A health mission for children", "A deep-sea cable project"],
        correctAnswer: 1,
        explanation: "Mission Shakti was a successful test of an ASAT missile that destroyed a live satellite in Low Earth Orbit.",
        chapter: 2, subtopic: "Defense Tech", difficulty: "easy"
    },
    {
        id: "st-mcq-38",
        question: "With reference to 'Quantum computing', what is 'Entanglement'?",
        options: ["Loss of data in transmission", "A phenomenon where particles remain connected regardless of distance", "The process of cooling processors to absolute zero", "A method of software coding"],
        correctAnswer: 1,
        explanation: "Entanglement is a quantum phenomenon where particles become interlinked such that the state of one instantly influences the other, even at great distances.",
        chapter: 4, subtopic: "Quantum Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-39",
        question: "What is 'Solid-State Battery' technology?",
        options: ["Batteries that use liquid electrolytes", "Batteries with solid electrodes and solid electrolytes", "Batteries that never lose charge", "Batteries made entirely of iron"],
        correctAnswer: 1,
        explanation: "Solid-state batteries use solid electrolytes instead of liquid ones, offering higher energy density and improved safety (less flammable).",
        chapter: 5, subtopic: "Energy Storage", difficulty: "medium"
    },
    {
        id: "st-mcq-40",
        question: "What is 'Graphene' often described as?",
        options: ["A radioactive element", "A single layer of carbon atoms arranged in a 2D honeycomb lattice", "A type of transparent plastic", "A byproduct of oil refining"],
        correctAnswer: 1,
        explanation: "Graphene is a 2D material with extraordinary strength and electrical/thermal conductivity. It is 200 times stronger than steel.",
        chapter: 5, subtopic: "Materials Science", difficulty: "medium"
    },
    {
        id: "st-mcq-41",
        question: "With reference to 'Synthetic Biology', what is 'Gene Drive' technology?",
        options: ["A way to speed up crop growth", "A system that biases the inheritance of a particular gene to spread through a population", "A tool for mapping the human brain", "A method of cloning endangered species"],
        correctAnswer: 1,
        explanation: "Gene drives are genetic engineering technologies that can propagate a particular suite of genes throughout a population by altering the probability that a specific allele will be transmitted to offspring.",
        chapter: 3, subtopic: "Biotechnology", difficulty: "hard"
    },
    {
        id: "st-mcq-42",
        question: "The 'R21/Matrix-M' vaccine is primarily used for:",
        options: ["COVID-19", "Cervical Cancer", "Malaria", "Ebola"],
        correctAnswer: 2,
        explanation: "R21/Matrix-M is a high-efficacy malaria vaccine developed by the University of Oxford and Serum Institute of India.",
        chapter: 3, subtopic: "Health Tech", difficulty: "easy"
    },
    {
        id: "st-mcq-43",
        question: "In context of LLMs (Large Language Models), what does 'Hallucination' refer to?",
        options: ["Processing data too fast", "The model generating plausible-sounding but factually incorrect information", "A hardware failure in GPUs", "A type of computer virus"],
        correctAnswer: 1,
        explanation: "Hallucination in AI occurs when a model generates false or misleading information while presenting it as fact.",
        chapter: 4, subtopic: "Artificial Intelligence", difficulty: "easy"
    },
    {
        id: "st-mcq-44",
        question: "What is 'Zero-Knowledge Proof' (ZKP) technology?",
        options: ["A proof that contains no information at all", "A cryptographic method to prove knowledge of something without revealing the information itself", "A way to guess passwords", "A method to delete data permanently"],
        correctAnswer: 1,
        explanation: "ZKP allows one party to prove to another that they know a secret without actually showing the secret, enhancing privacy in blockchain and security.",
        chapter: 4, subtopic: "Information Technology", difficulty: "medium"
    },
    {
        id: "st-mcq-45",
        question: "'Organoid Intelligence' (OI) refers to:",
        options: ["Smart agricultural tools", "Computing using lab-grown brain cultures", "AI for organ transplantation", "Advanced prosthetic limb sensors"],
        correctAnswer: 1,
        explanation: "OI is an emerging field that aims to integrate 3D cultures of human brain cells into computers to leverage biological processing power.",
        chapter: 3, subtopic: "Frontier Biotech", difficulty: "hard"
    },
    {
        id: "st-mcq-46",
        question: "What is 'Liquid Mirror Telescope'? India's first one is located at:",
        options: ["Ladakh", "Devasthal (Uttarakhand)", "Mount Abu", "Kodaikanal"],
        correctAnswer: 1,
        explanation: "The International Liquid Mirror Telescope (ILMT) at Devasthal uses a rotating pool of liquid mercury as a primary mirror to observe space.",
        chapter: 1, subtopic: "Astronomy", difficulty: "medium"
    },
    {
        id: "st-mcq-47",
        question: "What is 'Astra' in the context of Indian defense?",
        options: ["An anti-tank missile", "Beyond Visual Range (BVR) Air-to-Air Missile", "A naval destroyer", "A cyber-security program"],
        correctAnswer: 1,
        explanation: "Astra is India's indigenous BVR air-to-air missile developed by DRDO to be integrated onto fighter jets like Tejas and Su-30 MKI.",
        chapter: 2, subtopic: "Defense Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-48",
        question: "With reference to 'Radioisotopes', Cobalt-60 is commonly used in:",
        options: ["Archaeological dating", "Cancer radiotherapy and food sterilization", "Smoke detectors", "Nuclear fuel for reactors"],
        correctAnswer: 1,
        explanation: "Cobalt-60 is a radioactive isotope used extensively in medical radiotherapy for cancer treatment and for industrial sterilization.",
        chapter: 5, subtopic: "Nuclear Medicine", difficulty: "medium"
    },
    {
        id: "st-mcq-49",
        question: "The 'CERVAVAC' vaccine is India's first indigenous vaccine for:",
        options: ["Pneumonia", "Cervical Cancer (HPV)", "Hepatitis B", "Typhoid"],
        correctAnswer: 1,
        explanation: "CERVAVAC is a quadrivalent Human Papillomavirus (qHPV) vaccine developed by the Serum Institute for preventing cervical cancer.",
        chapter: 3, subtopic: "Health Tech", difficulty: "easy"
    },
    {
        id: "st-mcq-50",
        question: "What is 'Mission Mausam', recently launched by the government?",
        options: ["A cloud seeding project only", "A comprehensive mission to build 'Weather-Ready India' using high-res models and sensors", "A project to map monsoon patterns in 1950s", "A global alliance for weather prediction"],
        correctAnswer: 1,
        explanation: "Mission Mausam (₹2,000 Cr) aims to significantly improve weather surveillance and forecasting accuracy using AI and advanced ground sensors.",
        chapter: 4, subtopic: "Governance Tech", difficulty: "medium"
    },
    {
        id: "st-mcq-51",
        question: "What is 'Somatic Cell Nuclear Transfer' (SCNT)?",
        options: ["A way to grow bacterial cultures", "The technology used in reproductive and therapeutic cloning", "A method for bone marrow transplant", "The process of natural fertilization"],
        correctAnswer: 1,
        explanation: "SCNT involves transferring the nucleus of a somatic cell into an enucleated egg cell, used for cloning (e.g., Dolly the sheep).",
        chapter: 3, subtopic: "Biotechnology", difficulty: "hard"
    }
];
