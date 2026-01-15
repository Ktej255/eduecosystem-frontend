export interface SyllabusSection {
    title: string;
    topics: string[];
    subSections?: SyllabusSection[];
}

export interface ExamPaper {
    paper: string;
    subject: string;
    marks: number;
    duration: string;
    units: SyllabusSection[];
}

export const RAS_MAINS_SYLLABUS: ExamPaper[] = [
    {
        paper: "Paper I",
        subject: "General Knowledge and General Studies",
        marks: 200,
        duration: "3 Hours",
        units: [
            {
                title: "Unit I - HISTORY",
                topics: [],
                subSections: [
                    {
                        title: "Part A - History, Art, Culture, Literature, Tradition and Heritage of Rajasthan",
                        topics: [
                            "Pre historic culture and various ancient historic sites and their importance; Political and cultural achievements of various rulers of Rajasthan (up to 18th century).",
                            "Revenue and administrative system and changing patterns.",
                            "19th and 20th century: Revolt of 1857 peasant and tribal movements, political awakening, mass movements and integration of Rajasthan.",
                            "Art and Culture: Performing and fine arts, handicraft, Architecture and monuments, Folk music and folk Dances, Folk Stories and Folk Lores.",
                            "Fairs and festivals; Tribes and their Traditions.",
                            "Heritage: Major sites of Heritage and tourism in Rajasthan.",
                            "Rajasthani language and important literary work.",
                            "Religious beliefs, Saints and folk deities."
                        ]
                    },
                    {
                        title: "Part B - Indian History & Culture",
                        topics: [
                            "Indian heritage: Fine Art, Performing Art, Architecture & Literature from Indus Civilization to British Era.",
                            "Religious Movements and philosophy in Ancient and Medieval India.",
                            "British Policies and their impact: Political, Economic and Administrative unification of the country.",
                            "Indian National Movement- its various stages & streams, important contributors.",
                            "Socio-religious reform movements in 19th and 20th century and Intellectual awakening.",
                            "Post Independent India - Accession of princely states & Linguistic reorganisation of the states. Development of science and technology. Women Empowerment and women reform movement."
                        ]
                    },
                    {
                        title: "Part C - History of Modern World (up to 1991 A.D.)",
                        topics: [
                            "Renaissance and Reformation.",
                            "American War of Independence, French Revolution, Industrial Revolution, Russian Revolution.",
                            "Nazism in Germany and Fascism in Italy.",
                            "Impact of World Wars, World during Cold war."
                        ]
                    }
                ]
            },
            {
                title: "Unit II- ECONOMICS",
                topics: [],
                subSections: [
                    {
                        title: "Part A- Indian Economy",
                        topics: [
                            "Growth and development - concept and measurement. Income approach, HDI and other related indices. Climate change and Environmental degradation.",
                            "Agriculture: Productivity and Progress. Land reforms. Agriculture Finance. Agriculture marketing. Food Security. Food Processing. Major Policy initiatives.",
                            "Industry: Policy and Reforms. Globalization, liberalization and privatization. Industrial Finance. Micro, small and medium enterprises: Importance and Policy initiatives.",
                            "Service sector and infrastructure: Energy, Transportation and Communication.",
                            "International trade and Balance of payments. Foreign aid and investment.",
                            "Public Finance- Union Budget: Sources of Revenue and expenditure. Budget deficit and public debt. Fiscal Policy and reforms in India. Centre-state financial relations and Finance Commission.",
                            "Reserve Bank of India and Monetary Management. Banking and financial reforms.",
                            "Social sector: Health and Education, Poverty and Unemployment. Schemes for augmenting employability of labour in India. Welfare Schemes for weaker and marginalized sections of the society."
                        ]
                    },
                    {
                        title: "Part B- World Economy",
                        topics: [
                            "Global economic Issues: Role of WTO, World bank and IMF."
                        ]
                    },
                    {
                        title: "Part C- Economy of Rajasthan",
                        topics: [
                            "Economic growth indicators of Rajasthan - State Domestic Product, Per Capita Income and Inclusive Growth. Viksit Rajasthan 2047. Green Growth and Environmental Sustainability. Position of Rajasthan in the Achievements of Sustainable Goals.",
                            "State Budget - Fiscal Management and Budget Deficits.",
                            "Agricultural Growth: Production and Productivity. Water Resources and Irrigation. Animal Husbandry and Allied Activities. Agricultural Marketing. Government Schemes for Farmer's Welfare.",
                            "Rural Development and Rural Infrastructure. Panchayati Raj Institutions and State Finance Commission.",
                            "Institutional Framework of Industrial Development. Investment Promotion Policy. Importance Of Micro, Small and Medium Enterprises and Policy Initiatives for Their Development. Petroleum And Oil Resources in The State.",
                            "Infrastructure Development- Power and Transportation. Public-Private Partnership Projects Externally Aided State Projects.",
                            "Human Resource Development- Health and Education: Unemployment and Poverty. Employment Generation and Poverty Eradication Schemes.",
                            "Good Governance and digital transformation ensuring efficient public services.",
                            "Major Welfare Schemes of State Government For SC/ST/Backward Classes) Minorities / Disable Persons, Destitute, Women, Children and Old Age People."
                        ]
                    }
                ]
            },
            {
                title: "Unit III- SOCIOLOGY, MANAGEMENT, ACCOUNTING & AUDITING",
                topics: [],
                subSections: [
                    {
                        title: "Part A- Sociology",
                        topics: [
                            "Concept of Caste & Class, Changing dimensions of Caste and Class in Indian Society.",
                            "Changes in Contemporary Indian Society and Culture: Secularisation, Urbanisation, Modernisation and Globalisation.",
                            "Concepts related to Indian Social system: Doctrine of Karma, Dharma, Purushartha and Ashram system.",
                            "Issues related to Family & Marriage, Elderly people and Disabled in present Indian Society. Impact of Cyber crime and Social Media on Indian Society.",
                            "Challenges and Issues before Indian Society: Dowry, Divorce, Corruption, Poverty, Prostitution, Unemployment and Drug addiction.",
                            "Problems related to weaker sections of Indian Society (with special reference to Rajasthan): Women, Marginalised groups, Dalits, SC&ST and their Welfare schemes."
                        ]
                    },
                    {
                        title: "Part B- Management",
                        topics: [
                            "General Management: Concept of Management, Managerial skills and levels, Management Functions. MBO, Decision making: process, techniques and models",
                            "Organizational behaviour: Nature and Scope, Perception, Motivation- Concepts and Theories, Group Dynamics and Team Building, Organizational Climate and Culture.",
                            "Marketing Management: Concept and Scope, Marketing mix: Product, Pricing, Promotion and Physical Distribution. Service and digital marketing.",
                            "Human Resource Management: Concept and Scope, Human Resource Planning, Recruitment, Selection, Placement and Training, Performance Appraisal System, Modern Trends in Human Resource Management",
                            "Strategic Management: Concept and Scope, Business environment and SWOT analysis, Strategic Formulation and implementation, Strategic control and evaluation."
                        ]
                    },
                    {
                        title: "Part C- Accounting & Auditing",
                        topics: [
                            "Theory Base of Accounting: Generally Accepted Accounting Principles (GAAPs) and Accounting Concepts.",
                            "Accounting Standards: Basic Knowledge of Accounting Standards",
                            "Financial Statement of a Company; Techniques of analysis of Financial Statements; Cash Flow Statement; Basic knowledge of Responsibility and Social Accounting.",
                            "Computerised Accounting: Features and Software Packages",
                            "Basic Knowledge of Goods and Services Tax",
                            "Meaning & Objectives of Auditing, Audit Programme, Basic Knowledge of Social, Performance and Efficiency Audit; Elementary knowledge of Government Audit."
                        ]
                    }
                ]
            }
        ]
    },
    {
        paper: "Paper II",
        subject: "General Knowledge and General Studies",
        marks: 200,
        duration: "3 Hours",
        units: [
            {
                title: "Unit I- Administrative Ethics",
                topics: [
                    "Ethics and human Values: Lessons from lives and teachings of great leaders, reformers and administrators. Role of family, society and educational institutions in inculcating values.",
                    "Ethical concepts Rit and Rin-Inspiration from Karmavada. Concept of Duty, concept of Good and Virtue",
                    "Ethics in private and public relationships. Philosophical basis of Integrity, impartiality and non-partisanship. Liberal Society: Transparency, media and bureaucracy",
                    "Ethics of Bhagwad Geeta and its role in administration.",
                    "Gandhian Ethics.",
                    "Contribution of Moral thinkers, and Philosophers from India and World.",
                    "Ethical concerns, dilemmas and challenges in administration. Artificial Intelligence (AI) Versus Conscience in administrative decision making",
                    "Basis of Ethical decision making: Social justice, humanitarian concerns, accountability in governance. Instrumental rationality versus value rationality.",
                    "Non-factual Case Studies on the above mentioned topics."
                ]
            },
            {
                title: "Unit II- General Science & Technology",
                topics: [
                    "Chemistry in Everyday Life; Atomic Structure; Metal, Non-Metal and Metalloids, Metallurgical Principles and Methods, Important Ores and Alloys; Acid, Base and Salts, Concept of pH and Buffers; Important Drugs (Synthetic and Natural), Antioxidants, Preservatives, Insecticides, Pesticides, Fungicides, Herbicides, Binders and Sweeteners; Carbon & its Compounds; Fuels, Octane Rating; Radioactivity; Green Chemistry.",
                    "Physics in Everyday Life; Motion, Work, Power and Energy; Gravitation; Light and its Properties; Heat; Static and Current Electricity; Magnetism, ElectroMagnetism, Sound, Application of Physics in Medical Diagnostics; Nuclear fission and Fusion; Radiation Safety.",
                    "The Cell; Plant Parts; Plant Nutrition & Growth Regulators; Sexual and Asexual Reproduction in Plants. Basics of Human Physiology. Food and Nutrition; Immunity; Diseases; Public Health Initiatives; Beneficial & Harmful Microbes; Fermentation Technology; Biotechnology and Genetic Engineering; ELSI of GMOs. Vaccines, CRISPR, mRNA Technology, Artificial Organs.",
                    "Basic Computer Science; Networking; Analog and Digital Telecommunication; Frequency Spectrum; Mobile Telephony, AI and ML; Big Data; Cloud and Edge computing; IoT; Blockchain and Digital Currency; Virtual and Augmented Reality; OTT Platforms & social media.",
                    "Contribution of Indian Scientists; Major Indian Scientific Institutions; Robotics, Nanotechnology, Quantum Computing; Development of S&T in India and Rajasthan; Government Policies; Digital India; Cyber Security and Data Privacy.",
                    "Space and Defence Technology- Indian Space Programme; Satellites; Launch Vehicles; Remote Sensing; Defence Research; Indian Missile Programme; Drone Technology; Chemical and Biological Weapons."
                ]
            },
            {
                title: "Unit III- Earth Science (Geography & Geology)",
                topics: [],
                subSections: [
                    {
                        title: "Part A- World",
                        topics: [
                            "Interior of the Earth and Geological Time Scale.",
                            "Broad Physical Features: Mountains, Plateaus, Plains, Deserts- types and distribution.",
                            "Earthquakes and Volcanoes: Types, distribution and their impact.",
                            "Climate- Insolation, Atmospheric circulation, Humidity and Precipitation.",
                            "Major Environmental Issues."
                        ]
                    },
                    {
                        title: "Part B- India",
                        topics: [
                            "Physiography of India.",
                            "Drainage pattern and important Rivers.",
                            "Climate: Monsoon, Climatic characteristics, Distribution of rainfall and Climatic regions.",
                            "Natural Resources: Types and uses of Water, Natural Vegetation, Soil, Minerals and Power Resources.",
                            "Population: Growth, Distribution and Density, Sex-ratio, Literacy, Urban and Rural Population."
                        ]
                    },
                    {
                        title: "Part C- Rajasthan",
                        topics: [
                            "Physiography.",
                            "Important Rivers and Lakes.",
                            "Climatic Characteristics and their classification.",
                            "Natural Vegetation, Wildlife and Biodiversity.",
                            "Soil resources",
                            "Agriculture- Major Crops: Production and Distribution.",
                            "Minerals Resources- Types, distribution and industrial uses.",
                            "Demographic Characteristics.",
                            "Tribes.",
                            "Concept of UNESCO Geo-parks and Geo-heritage sites: Potential in Rajasthan.",
                            "Tourism"
                        ]
                    }
                ]
            }
        ]
    },
    {
        paper: "Paper III",
        subject: "General Knowledge and General Studies",
        marks: 200,
        duration: "3 Hours",
        units: [
            {
                title: "Unit I- Indian Polity, Governance, India and International Affairs and Current Affairs",
                topics: [
                    "Origin, Structure, and Key Principles of the Constitution of India: Constituent Assembly, Fundamental Rights, DPSP, Fundamental Duties, Basic Structure, Constitutional Morality.",
                    "Institutional Framework & Governance Mechanisms: President, PM, Parliament, Federalism, Judiciary (Supreme Court, High Courts, Judicial Review, Virtual Court).",
                    "Dynamics of Indian Polity: Shifts in democracy, Party systems, Regionalism, AI in Politics, Voting behaviour, Electoral reforms, Internal Security.",
                    "State Policies and governance in Rajasthan: Political participation, Parties, Panchayati Raj, Public Policy, E-Governance.",
                    "India and International Affairs: Post-Cold War changes, Foreign Policy determinates, G-20, QUAD, BRICS, Climate diplomacy, Strategic Initiatives.",
                    "Current Affairs & Issues: Important events, Welfare schemes, Awards, Sports, Role of Yoga."
                ]
            },
            {
                title: "Unit II- Concepts, Issues and Dynamics of Public Administration",
                topics: [
                    "Public Administration: Theories and Principles, NPM, Good Governance, New Public Service. Theories: Scientific Management, Human Relations, Behavioural, Structural-Functional, Ecological.",
                    "Principles of Organisation: Hierarchy, Unity of Command, Span of Control, Delegation, Centralisation/Decentralisation, Coordination, Authority, Accountability.",
                    "Administrative Behaviour: Leadership, Communication, Morale.",
                    "Union Government and Administrative Institutions: UPSC, ECI, C&AG, Finance Commission, Lokpal, NITI Aayog. Personnel Administration, Code of Conduct. Control over Administration.",
                    "Comparative Public Administration: U.S.A., U.K., France and China.",
                    "State & District Administration: Governor, CM, State Secretariat, Chief Secretary, Directorates, Police Administration, District Collector."
                ]
            },
            {
                title: "Unit III- Behavior and Law",
                topics: [],
                subSections: [
                    {
                        title: "Part A - Behavior",
                        topics: [
                            "Intelligence: Cognitive, Social, Emotional, Cultural, Appreciative and Spiritual intelligence.",
                            "Leadership Profiles: Theories, Types and Styles. Leaders of tomorrow.",
                            "Communication at workplace: Models, Barriers, Cyberslacking, Cyberloafing, Moonlighting.",
                            "Flourishing at work- Virtues & Strengths, RAISEC Model and Person-Fit-Environment.",
                            "Burnout, Stress and Coping at workplace."
                        ]
                    },
                    {
                        title: "Part B-Law",
                        topics: [
                            "The Right to Information Act, 2005",
                            "The Information Technology Act, 2000 (Cyber Safety, Digital Signatures)",
                            "Intellectual Property Rights",
                            "Protection of Women from Domestic Violence Act, 2005",
                            "Sexual Harassment at work place Act, 2013",
                            "The Protection of Children from Sexual Offences Act, 2012",
                            "The Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
                            "Rajasthan Tenancy Act, 1955",
                            "Rajasthan Land Revenue Act, 1956",
                            "The Bhartiya Nyay Sanhita, 2023",
                            "The Bharatiya Nagrik Suraksha Sanhita, 2023"
                        ]
                    }
                ]
            }
        ]
    },
    {
        paper: "Paper IV",
        subject: "General Hindi and General English",
        marks: 200,
        duration: "3 Hours",
        units: [
            {
                title: "Unit I - General Hindi",
                topics: [
                    "उपसर्ग एवं प्रत्यय ('Prefix and Suffix')",
                    "समश्रुत भिन्नार्थक शब्द (Words capable of different meanings)",
                    "शब्द शुद्धि (Word Correction)",
                    "वाक्य शुद्धि (Sentence Correction)",
                    "मुहावरे (Idioms)",
                    "कहावत/लोकोक्ति (Proverbs)",
                    "पारिभाषिक शब्दावली (Administrative Vocabulary)",
                    "संक्षिप्तीकरण (Precis Writing)",
                    "पल्लवन (Elaboration of a theme)",
                    "अनुवाद (Translation - English to Hindi)",
                    "पत्र-लेखन (Letter Writing)",
                    "प्रारूप-लेखन (Drafting: Notifications, Tenders, Circulars etc.)"
                ]
            },
            {
                title: "Unit II - General English",
                topics: [
                    "Grammar & Usage: Preposition, Parts of speech, Phrasal Verbs & Idioms, One Word Substitute, Words often Confused.",
                    "Comprehension, Translation & Precis Writing: Unseen Passage, Translation (Hindi to English).",
                    "Composition & Letter Writing: Elaboration of a theme, Official Letters/Memorandum/Report Writing."
                ]
            },
            {
                title: "Unit III - Essay",
                topics: [
                    "Language, Literature, and Cultural Heritage",
                    "Society, Governance, and Public Affairs",
                    "Science, Technology, Environment, and Sustainable Development",
                    "Economy, Agriculture, Industry, and Commerce",
                    "Current Affairs, Disasters, and National Development Initiatives",
                    "Tourism, Culture, and Contemporary Issues with reference to Rajasthan"
                ]
            }
        ]
    }
];

export const RAS_PRELIMS_SYLLABUS: SyllabusSection[] = [
    {
        title: "History, Art, Culture, Literature, Tradition & Heritage of Rajasthan",
        topics: [
            "Pre-historical sites of Rajasthan",
            "Sources of Rajasthan History",
            "Political and Cultural achievements of prominent rulers",
            "Political and Social condition in 18th-19th Century, Peasant and Tribal movements",
            "Architectural Tradition of Rajasthan (Temples, Forts, Palaces)",
            "Language & Literature: Dialects, Folk literature",
            "Social Life: Fairs and festivals, Customs",
            "Leading Personalities of Rajasthan"
        ]
    },
    {
        title: "Indian History",
        topics: [
            "Ancient & Medieval Period: Indus/Vedic Age, Major Dynasties (Maurya, Gupta, Chola etc.), Art & Architecture, Bhakti & Sufi movement.",
            "Modern Period: British Imperialism, Revolt of 1857, Freedom Struggle, Post Independent Nation Building."
        ]
    },
    {
        title: "Geography of World and India",
        topics: [
            "World Geography: Physical Aspects, Rivers, Agriculture, Industrial Regions, Environmental Issues.",
            "Geography of India: Physiography, Climate, Rivers, Agriculture, Minerals, Industrial Regions."
        ]
    },
    {
        title: "Geography of Rajasthan",
        topics: [
            "Location, Physiography, Rivers, Climate, Natural Vegetation, Agriculture, Livestock, Minerals, Tourism."
        ]
    },
    {
        title: "Indian Constitution, Political System & Governance",
        topics: [
            "Constitution of India, Union Government, Union State Relations, Local Government, Constitutional Bodies (EC, UPSC, etc.), Public Policy."
        ]
    },
    {
        title: "Political and Administrative System of Rajasthan",
        topics: [
            "Governor, CM, Assembly, High Court, Secretariat, District Administration, RPSC, Human Rights Commission, Panchayati Raj."
        ]
    },
    {
        title: "Economic Concepts and Indian Economy",
        topics: [
            "Growth and Development, Monetary/Fiscal Policy, Agriculture, Industry, Service Sector, Skill Development."
        ]
    },
    {
        title: "Economy of Rajasthan",
        topics: [
            "Macro Overview, Agriculture/Industry/Service status, Infrastructure, Rural Development, Welfare Schemes."
        ]
    },
    {
        title: "Science & Technology",
        topics: [
            "Basics of Everyday Science, Computers/ICT, Defence/Space, Biotechnology, Health/Nutrition, Environment, S&T in Rajasthan."
        ]
    },
    {
        title: "Reasoning & Mental Ability",
        topics: [
            "Reasoning (Deductive, Inductive, Abductive)",
            "Mental Ability (Series, Coding/Decoding, Direction sense, etc.)",
            "Basic Numeracy (Ratio, Percentage, Interest, Data Analysis, Mean/Median/Mode, Permutation/Combination, Probability)"
        ]
    },
    {
        title: "Current Affairs & Issues",
        topics: [
            "Important personalities/places, Welfare schemes, Economic/Political developments, Sports, Awards."
        ]
    }
];
