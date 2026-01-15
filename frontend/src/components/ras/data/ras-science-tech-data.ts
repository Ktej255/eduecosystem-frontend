
export interface ScienceTopic {
    id: string;
    title: string;
    sections: {
        heading: string;
        content?: string;
        points?: string[];
        subsections?: {
            subHeading: string;
            points: string[];
        }[];
    }[];
}

export const SCIENCE_TECH_CONTENT: ScienceTopic[] = [
    {
        id: "nanotech",
        title: "Nanotechnology",
        sections: [
            {
                heading: "History & Evolution",
                points: [
                    "**1959**: Richard Feynman's lecture 'There is Plenty of Room at the Bottom' (Inspiration).",
                    "**1974**: Prof. Norio Taniguchi coined the term 'Nanotechnology'.",
                    "**1985**: Discovery of Buckyballs (Buckminsterfullerene) by Rice University scientists (Nobel 1996).",
                    "**1986**: K. Eric Drexler wrote 'Engines of Creation' (Popularized Molecular Nanotechnology).",
                    "**1991**: Sumio Iijima discovered Carbon Nanotubes (CNTs)."
                ]
            },
            {
                heading: "Approaches & Materials",
                subsections: [
                    { subHeading: "Top-Down vs Bottom-Up", points: ["Top-Down: Breaking bulk (Taniguchi).", "Bottom-Up: Atom-by-atom assembly (Drexler)."] },
                    { subHeading: "Materials", points: ["**Graphene**: Single layer, Soft, Conductor.", "**Fullerenes (C60)**: Cage-like, Drug delivery.", "**CNTs**: High strength, Electronics.", "**Quantum Dots**: Solar cells, Imaging."] }
                ]
            },
            {
                heading: "Applications & Mission",
                points: [
                    "**Agri**: Nano-fertilizers, Smart pesticides.",
                    "**Health**: Targeted drug delivery, Cancer therapy (Gold nanoparticles).",
                    "**India Nano Mission**: Launched 2007, DST. focus on R&D, Human Resource."
                ]
            }
        ]
    },
    {
        id: "space-tech",
        title: "Space Technology",
        sections: [
            {
                heading: "ISRO Ecosystem",
                points: [
                    "**Centers**: VSSC (Launch Vehicles), URSC (Satellites), SDSC (Launch Pad), ISTRAC (Tracking).",
                    "**Commercial**: Antrix (Old), **NSIL** (New, Launch production), **In-Space** (Private sector regulator)."
                ]
            },
            {
                heading: "Launch Vehicles",
                points: [
                    "**PSLV**: 4 Stages (S-L-S-L). Workhorse. Chandrayaan-1, MOM.",
                    "**GSLV Mk III (LVM3)**: Cryogenic Upper Stage. Heavy lift (4T to GTO). Chandrayaan-2/3.",
                    "**SSLV**: Small Satellite Launch Vehicle. 500kg to LEO. Low cost.",
                    "**RLV**: Reusable Launch Vehicle (Hypersonic test)."
                ]
            },
            {
                heading: "Missions",
                points: [
                    "**Moon**: Chandrayaan-1 (Water), Chandrayaan-2 (Orbiter/Lander Vikram), Chandrayaan-3.",
                    "**Mars**: Mangalyaan (MOM). First attempt success.",
                    "**Sun**: Aditya L-1 (Lagrange Point 1).",
                    "**Human**: Gaganyaan (Vyomanauts).",
                    "**Joint**: NISAR (With NASA for Earth Obs)."
                ]
            }
        ]
    },
    {
        id: "defence-tech",
        title: "Defence Technology",
        sections: [
            {
                heading: "Missiles (IGMDP - PATNA)",
                points: [
                    "**Prithvi**: Surface-to-Surface SRBM.",
                    "**Agni**: Ballistic. A1-A4 (MRBM), A5 (ICBM >5000km).",
                    "**Trishul**: Surface-to-Air (Tech demonstrator).",
                    "**Nag**: Anti-Tank (Fire & Forget). Variants: HELINA, NAMICA.",
                    "**Akash**: Surface-to-Air. Rajendra Radar."
                ]
            },
            {
                heading: "Cruise & Advanced Systems",
                points: [
                    "**BrahMos**: Supersonic Cruise (Mach 2.8). India-Russia.",
                    "**Nirbhay**: Subsonic Cruise (1000km).",
                    "**K-Series**: SLBMs (K-15 Sagarika, K-4) for INS Arihant.",
                    "**Prahaar**: Tactical SRBM.",
                    "**Air Defence**: S-400 Triumf (Russia), PAD/AAD (Indian BMD).",
                    "**Pinaka**: MBRL (Rocket Launcher)."
                ]
            }
        ]
    },
    {
        id: "biotech",
        title: "Biotechnology",
        sections: [
            {
                heading: "Core Concepts",
                points: [
                    "**DNA**: Double Helix. **Gene**: Unit of heredity.",
                    "**PCR**: Amplification. **Fingerprinting**: Identification (VNTRs).",
                    "**rDNA Tech**: Cut (Restriction Enzymes) -> Paste (Ligase) -> Vector (Plasmid)."
                ]
            },
            {
                heading: "Applications",
                subsections: [
                    { subHeading: "GM Crops", points: ["Bt Cotton (Bollworm resistant).", "Golden Rice (Vit A).", "GM Mustard (DMH-11)."] },
                    { subHeading: "Health", points: ["Gene Therapy (Somatic vs Germline).", "CRISPR-Cas9 (Gene Editing/Scissors).", "mRNA Vaccines (GEMCOVAC-19)."] },
                    { subHeading: "Advanced", points: ["Mitochondrial Replacement (3-Parent Baby).", "Surrogacy (Altruistic Act 2019).", "Cloning (Dolly, Samrupa)."] }
                ]
            }
        ]
    },
    {
        id: "telecom-it",
        title: "Telecom & IT",
        sections: [
            {
                heading: "Telecommunication",
                subsections: [
                    { subHeading: "Optical Fiber", points: ["Principle: **Total Internal Reflection (TIR)**.", "Core (High RI) / Cladding (Low RI).", "Advantages: High Bandwidth, Low Loss, Secure."] },
                    { subHeading: "Wireless & Spectrum", points: ["Radio, Microwave (Wi-Fi), IR, UV (Water purification), Li-Fi (Visible Light Data).", "5G: Low Latency (<1ms), Massive IoT."] },
                    { subHeading: "Policies", points: ["NTP 1999 (Revenue Share).", "NTP 2012 (Unified License, MNP).", "NDCP 2018 (Broadband for all, 50Mbps)."] }
                ]
            },
            {
                heading: "Modern Digital Tech",
                subsections: [
                    { subHeading: "IoT & Blockchain", points: ["**IoT**: Connected devices. Smart Cities.", "**Blockchain**: Decentralized, Immutable, Distributed Ledger. Crypto, Smart Contracts."] },
                    { subHeading: "Supercomputers", points: ["Global: Frontier (Exascale).", "India: **Param 8000** (First), **Pratyush/Mihir** (Weather), **Param Siddhi-AI**."] },
                    { subHeading: "Cloud & Edge", points: ["**Cloud**: IaaS, PaaS, SaaS. 'MeghRaj' (GI Cloud).", "**Edge**: Processing near source (Low latency)."] }
                ]
            },
            {
                heading: "Artificial Intelligence",
                points: [
                    "**Types**: Weak (Narrow), Strong (General).",
                    "**ML vs DL**: Machine Learning (Data patterns) -> Deep Learning (Neural Networks).",
                    "**Generative AI**: Creates content (ChatGPT, DALL-E).",
                    "**India**: AIRAWAT (AI strategy)."
                ]
            }
        ]
    },
    {
        id: "robotics",
        title: "Robotics",
        sections: [
            {
                heading: "Basics",
                points: [
                    "**Components**: Actuators (Muscles), Sensors (Eyes/Touch), Controller (Brain).",
                    "**Laws**: Asimov's Three Laws of Robotics (Harm to humans etc)."
                ]
            },
            {
                heading: "Indian Robots",
                points: [
                    "**Daksh** (DRDO): Bomb disposal ROV.",
                    "**Vyommitra** (ISRO): Female Humanoid for Gaganyaan.",
                    "**Manav**: First 3D printed humanoid.",
                    "**Mitra**: Greeter robot (Invento).",
                    "**Jivaka/C-Astra**: Healthcare robots."
                ]
            }
        ]
    },
    {
        id: "ipr-governance",
        title: "IPR & Governance",
        sections: [
            {
                heading: "Intellectual Property Rights",
                subsections: [
                    { subHeading: "Forms of IPR", points: ["**Patents**: Inventions (20 Years).", "**Copyright**: Art/Lit (Life + 60 Years).", "**Trademark**: Brands (10 Years renewable).", "**GI Tag**: Geography based (Darjeeling Tea). 10 Years.", "**Trade Secrets**: Confidential info."] },
                    { subHeading: "Policy & Issues", points: ["**National IPR Policy 2016**: Creative India, Innovative India. Nodal: DPIIT.", "**Issues**: Evergreening (Sec 3d), Compulsory Licensing (Natco case), Biopiracy."] }
                ]
            },
            {
                heading: "E-Governance",
                points: [
                    "**NeGP 2006**: 44 Mission Mode Projects (MMPs).",
                    "**Models**: G2C (Govt to Citizen), G2B (Business).",
                    "**Initiatives**: DigiLocker, UMANG, MyGov, CSCs (Common Service Centers).",
                    "**IT Rules 2021**: Compliance for Social Media & OTT. Grievance Redressal mechanism."
                ]
            }
        ]
    },
    {
        id: "scientists",
        title: "Scientists of India",
        sections: [
            {
                heading: "Ancient",
                points: [
                    "**Sushruta**: Plastic Surgery.",
                    "**Charaka**: Ayurveda.",
                    "**Aryabhatta**: Zero, Earth's rotation, Pi.",
                    "**Varahamihira**: Ecology/Hydrology."
                ]
            },
            {
                heading: "Modern Legends",
                points: [
                    "**C.V. Raman**: Raman Effect (Nobel 1930).",
                    "**Homi Bhabha**: Nuclear Program.",
                    "**Vikram Sarabhai**: Space Program.",
                    "**APJ Abdul Kalam**: Missile Man.",
                    "**M. Visvesvaraya**: Engineering (Dams).",
                    "**S. Chandrasekhar**: Compact stars (Nobel 1983).",
                    "**Har Gobind Khorana**: Genetic Code (Nobel 1968)."
                ]
            },
            {
                heading: "Women in Science",
                points: [
                    "**Tessy Thomas**: Missile Woman (Agni-4).",
                    "**Ritu Karidhal**: Rocket Woman (Mangalyaan/Chandrayaan-2)."
                ]
            }
        ]
    },
    {
        id: "quiz",
        title: "Revision Quiz (70 Qs)",
        sections: [
            {
                heading: "Set 1: Basics & Space (Q1-Q15)",
                subsections: [
                    { subHeading: "Q1. Father of Nanotech term?", points: ["(C) Norio Taniguchi"] },
                    { subHeading: "Q2. Top-Down Approach?", points: ["(D) Creating Nano-powder from bulk"] },
                    { subHeading: "Q3. Graphene?", points: ["(A) Single layer of Carbon atoms"] },
                    { subHeading: "Q4. GEO Altitude?", points: ["(B) 35,786 km"] },
                    { subHeading: "Q5. ISRO Workhorse?", points: ["(C) PSLV"] },
                    { subHeading: "Q6. Vyommitra?", points: ["(B) Female Humanoid by ISRO"] },
                    { subHeading: "Q7. Golden Rice?", points: ["(B) Vitamin A"] },
                    { subHeading: "Q8. Grievance Officer?", points: ["(B) Resident of India"] },
                    { subHeading: "Q9. Father of Fiber Optics?", points: ["(C) Narinder Singh Kapany"] },
                    { subHeading: "Q10. Patent Term?", points: ["(C) 20 years"] },
                    { subHeading: "Q11. Sycamore (Google)?", points: ["(B) Quantum Computing"] },
                    { subHeading: "Q12. Three-Parent Baby prevents?", points: ["(B) Mitochondrial Diseases"] },
                    { subHeading: "Q13. India's first Server?", points: ["(B) Rudra"] },
                    { subHeading: "Q14. Agni-V Range?", points: ["(D) 5000-8000 km"] },
                    { subHeading: "Q15. Red Line Campaign?", points: ["(B) Preventing antibiotic misuse"] }
                ]
            },
            {
                heading: "Set 2: Defence & Tech (Q16-Q30)",
                subsections: [
                    { subHeading: "Q16. Optical Fiber Principle?", points: ["(B) Total Internal Reflection"] },
                    { subHeading: "Q17. BrahMos Partner?", points: ["(D) Russia"] },
                    { subHeading: "Q18. Ballistic vs Cruise?", points: ["(B) Ballistic=Arc; Cruise=Airplane-like"] },
                    { subHeading: "Q19. Anti-Radiation Missile?", points: ["(B) Rudram-1"] },
                    { subHeading: "Q20. NavIC Satellites?", points: ["(C) 7"] },
                    { subHeading: "Q21. Bt Cotton resistant to?", points: ["(B) Bollworm"] },
                    { subHeading: "Q22. Father of Nuclear Program?", points: ["(C) Homi J. Bhabha"] },
                    { subHeading: "Q23. Supercomputer at IITM?", points: ["(B) Pratyush"] },
                    { subHeading: "Q24. Cryogenic Engine?", points: ["(B) Liquid fuel at very low temp"] },
                    { subHeading: "Q25. LIGO-India State?", points: ["(C) Maharashtra"] },
                    { subHeading: "Q26. NOT Blockchain feature?", points: ["(A) Centralized Authority"] },
                    { subHeading: "Q27. Chandrayaan-2 parts?", points: ["(A) Lander (Vikram) & Rover (Pragyan)"] },
                    { subHeading: "Q28. Li-Fi Medium?", points: ["(C) Visible Light (LEDs)"] },
                    { subHeading: "Q29. GI Tag Act Year?", points: ["(C) 1999"] },
                    { subHeading: "Q30. Project Netra?", points: ["(B) Early Warning for Space Debris"] }
                ]
            },
            {
                heading: "Set 3: Advanced Tech (Q31-Q50)",
                subsections: [
                    { subHeading: "Q31. Daksh?", points: ["(B) ROV for Bomb Disposal"] },
                    { subHeading: "Q32. Zero Inventor?", points: ["(C) Aryabhatta"] },
                    { subHeading: "Q33. Pinaka?", points: ["(A) Multi-Barrel Rocket Launcher"] },
                    { subHeading: "Q34. Turing Test?", points: ["(B) Machine Intelligence"] },
                    { subHeading: "Q35. Aditya-L1 Orbit?", points: ["(B) Halo Orbit at L1"] },
                    { subHeading: "Q36. Gene Editing?", points: ["(B) CRISPR-Cas9"] },
                    { subHeading: "Q37. S-400 Triumf?", points: ["(D) Russia"] },
                    { subHeading: "Q38. Manav Robot?", points: ["(A) First 3D-printed Humanoid"] },
                    { subHeading: "Q39. 5G Latency?", points: ["(B) Delay between sending/receiving"] },
                    { subHeading: "Q40. Negative Emission Tech?", points: ["(B) BECCS"] },
                    { subHeading: "Q41. Missile Woman?", points: ["(B) Tessy Thomas"] },
                    { subHeading: "Q42. NISAR Partner?", points: ["(C) NASA"] },
                    { subHeading: "Q43. Param Siddhi-AI?", points: ["(B) India's fastest AI Supercomputer"] },
                    { subHeading: "Q44. Viral Vector use?", points: ["(B) Gene Therapy"] },
                    { subHeading: "Q45. Sushruta Samhita?", points: ["(C) Plastic Surgery"] },
                    { subHeading: "Q46. Web 3.0?", points: ["(C) Decentralization (Read-Write-Own)"] },
                    { subHeading: "Q47. K-15 Sagarika?", points: ["(B) SLBM"] },
                    { subHeading: "Q48. Bhatnagar Prize Org?", points: ["(C) CSIR"] },
                    { subHeading: "Q49. Project 75?", points: ["(B) Scorpene Class Submarines"] },
                    { subHeading: "Q50. Night Blindness Vitamin?", points: ["(C) Vitamin A"] }
                ]
            },
            {
                heading: "Set 4: Miscellaneous (Q51-Q70)",
                subsections: [
                    { subHeading: "Q51. Genetic Code Nobel?", points: ["(B) Har Gobind Khorana"] },
                    { subHeading: "Q52. Nirbhay Missile?", points: ["(C) Subsonic Cruise Missile"] },
                    { subHeading: "Q53. 3rd Gen Biofuel?", points: ["(C) Algae"] },
                    { subHeading: "Q54. Supercomputer at IISc?", points: ["(B) Param Pravega"] },
                    { subHeading: "Q55. Graveyard Orbit?", points: ["(C) ~300 km above GEO"] },
                    { subHeading: "Q56. Grey Goo Problem?", points: ["(B) Out-of-control nanobots"] },
                    { subHeading: "Q57. Section 3(d) prevents?", points: ["(B) Evergreening of Patents"] },
                    { subHeading: "Q58. Helina?", points: ["(C) Helicopter-launched Nag"] },
                    { subHeading: "Q59. Birdman of India?", points: ["(B) Salim Ali"] },
                    { subHeading: "Q60. Mission Shakti?", points: ["(A) Anti-Satellite (ASAT)"] },
                    { subHeading: "Q61. DNA Ligase function?", points: ["(C) To join/paste DNA fragments"] },
                    { subHeading: "Q62. Chandrasekhar Limit?", points: ["(B) White Dwarf Star"] },
                    { subHeading: "Q63. DTH Frequency Band?", points: ["(C) Ku-Band"] },
                    { subHeading: "Q64. GEMCOVAC-19?", points: ["(B) mRNA Vaccine"] },
                    { subHeading: "Q65. Edge Computing?", points: ["(B) Near source of data"] },
                    { subHeading: "Q66. Astra Missile?", points: ["(B) Air-to-Air (BVR)"] },
                    { subHeading: "Q67. MeghRaj?", points: ["(B) Cloud Computing for E-Gov"] },
                    { subHeading: "Q68. NOT in IGMDP?", points: ["(D) BrahMos"] },
                    { subHeading: "Q69. National Hydrogen Mission?", points: ["(C) Green Hydrogen"] },
                    { subHeading: "Q70. Father of Space Program?", points: ["(C) Vikram Sarabhai"] }
                ]
            },
            {
                heading: "Set 5: Recent Updates (Q71-Q90)",
                subsections: [
                    { subHeading: "Q71. Satyendra Nath Bose?", points: ["(B) Albert Einstein (Boson)"] },
                    { subHeading: "Q72. NOT Intellectual Property?", points: ["(D) Habeas Corpus"] },
                    { subHeading: "Q73. Scramjet?", points: ["(A) Air-breathing propulsion"] },
                    { subHeading: "Q74. Varahamihira?", points: ["(B) Astronomy & Groundwater"] },
                    { subHeading: "Q75. Hyperloop?", points: ["(B) Low-pressure tubes (Maglev)"] },
                    { subHeading: "Q76. IN-SPACe?", points: ["(B) Private sector regulator"] },
                    { subHeading: "Q77. Meson Particle?", points: ["(A) Homi Bhabha"] },
                    { subHeading: "Q78. Sagar Maitri?", points: ["(B) DRDO (Marine Research)"] },
                    { subHeading: "Q79. Xenobots?", points: ["(B) Living robots (Frog stem cells)"] },
                    { subHeading: "Q80. NavIC Services?", points: ["(A) SPS (Civilian) & RS (Restricted)"] },
                    { subHeading: "Q81. Agnikul & Skyroot?", points: ["(A) Private Space Startups"] },
                    { subHeading: "Q82. FASTag Tech?", points: ["(C) RFID"] },
                    { subHeading: "Q83. Sodium-Ion alternative to?", points: ["(B) Lithium-Ion"] },
                    { subHeading: "Q84. Graphene known for?", points: ["(C) Stronger than steel/Conductor"] },
                    { subHeading: "Q85. PARAM Porul?", points: ["(C) NIT Tiruchirappalli"] },
                    { subHeading: "Q86. PUSA Decomposer?", points: ["(B) Decomposing stubble"] },
                    { subHeading: "Q87. Artemis Mission?", points: ["(B) Humans to Moon (2025)"] },
                    { subHeading: "Q88. Deepfakes use?", points: ["(B) GANs (Generative AI)"] },
                    { subHeading: "Q89. Lumpy Skin Disease?", points: ["(B) Cattle"] },
                    { subHeading: "Q90. Biogas component?", points: ["(C) Methane (CH4)"] }
                ]
            },
            {
                heading: "Set 6: Final Revision (Q91-Q125)",
                subsections: [
                    { subHeading: "Q91. Kalinga Prize Org?", points: ["(B) UNESCO"] },
                    { subHeading: "Q92. God Particle?", points: ["(B) Higgs Boson"] },
                    { subHeading: "Q93. Abel Prize?", points: ["(B) Mathematics (Nobel eqv)"] },
                    { subHeading: "Q94. LIGO detects?", points: ["(B) Gravitational Waves"] },
                    { subHeading: "Q95. Fields Medal Age?", points: ["(B) Under 40"] },
                    { subHeading: "Q96. NFT Tech?", points: ["(B) Blockchain"] },
                    { subHeading: "Q97. Atal Innovation Mission?", points: ["(B) NITI Aayog"] },
                    { subHeading: "Q98. PM-WANI?", points: ["(B) Public Wi-Fi"] },
                    { subHeading: "Q99. CCUS?", points: ["(B) Carbon Capture, Utilization, Storage"] },
                    { subHeading: "Q100. FAME Scheme?", points: ["(B) Electric Vehicles"] },
                    { subHeading: "Q101. GSLV Mk-III Cryo Engine?", points: ["(C) CE-20"] },
                    { subHeading: "Q102. Yellapragada Subbarow?", points: ["(B) ATP function / Methotrexate"] },
                    { subHeading: "Q103. Seoul Peace Prize 2018?", points: ["(B) Narendra Modi"] },
                    { subHeading: "Q104. NOT Strategic Missile?", points: ["(D) Astra (Tactical)"] },
                    { subHeading: "Q105. Project 17A?", points: ["(A) Stealth Frigates"] },
                    { subHeading: "Q106. Industrial Design Term?", points: ["(B) 10 Years (+5)"] },
                    { subHeading: "Q107. RISAT-2BR1?", points: ["(C) Radar Imaging"] },
                    { subHeading: "Q108. PUSA Decomposer Dev?", points: ["(B) IARI"] },
                    { subHeading: "Q109. Gaganyaan Crew?", points: ["(B) 3"] },
                    { subHeading: "Q110. Biofuel Policy 2018?", points: ["(C) Damaged grains/potatoes"] },
                    { subHeading: "Q111. Param 8000 Dev?", points: ["(C) C-DAC"] },
                    { subHeading: "Q112. S-Band Freq?", points: ["(B) 2-4 GHz"] },
                    { subHeading: "Q113. Cartosat-3?", points: ["(A) Eye in the Sky"] },
                    { subHeading: "Q114. Golden Crescent/Triangle?", points: ["(B) Drug Trafficking"] },
                    { subHeading: "Q115. RFID use?", points: ["(A) FASTag"] },
                    { subHeading: "Q116. H-1B Visa?", points: ["(C) USA"] },
                    { subHeading: "Q117. Netra Aircraft?", points: ["(B) Embraer-145"] },
                    { subHeading: "Q118. IDSN Location?", points: ["(C) Byalalu"] },
                    { subHeading: "Q119. PCR Use?", points: ["(A) DNA Amplification"] },
                    { subHeading: "Q120. Lab-Grown Meat?", points: ["(B) Singapore"] },
                    { subHeading: "Q121. INS Arihant?", points: ["(B) Nuclear SSBN"] },
                    { subHeading: "Q122. Quantum Supremacy Time?", points: ["(B) 10,000 years (vs 200s)"] },
                    { subHeading: "Q123. INO Location?", points: ["(B) Bodi West Hills (TN)"] },
                    { subHeading: "Q124. Operation Shakti?", points: ["(B) Pokhran-II (1998)"] },
                    { subHeading: "Q125. 4th Gen Biofuel?", points: ["(D) CO2 capturing crops"] }
                ]
            },
            {
                heading: "Bonus Set 8: Deep Dive (Q126-Q150)",
                subsections: [
                    { subHeading: "Q126. Oil Zapper dev?", points: ["(B) TERI"] },
                    { subHeading: "Q127. MCF Locations?", points: ["(B) Hassan & Bhopal"] },
                    { subHeading: "Q128. Father of Indian Chemistry?", points: ["(B) P.C. Ray"] },
                    { subHeading: "Q129. Astrosat?", points: ["(A) Multi-Wavelength Space Observatory"] },
                    { subHeading: "Q130. IGMDP Anti-Tank?", points: ["(C) Nag"] },
                    { subHeading: "Q131. Engineers' Day?", points: ["(C) Sir M. Visvesvaraya (Sept 15)"] },
                    { subHeading: "Q132. Hypersonic Speed?", points: ["(C) > 5 Mach"] },
                    { subHeading: "Q133. 3-Stage Nuclear Prog creator?", points: ["(A) Homi J. Bhabha"] },
                    { subHeading: "Q134. Dolly Sheep?", points: ["(B) Cloned from somatic cell"] },
                    { subHeading: "Q135. HTS Internet Band?", points: ["(D) Ka-Band"] },
                    { subHeading: "Q136. INO Detector?", points: ["(B) ICAL (Iron Calorimeter)"] },
                    { subHeading: "Q137. Chandrayaan-1 Rocket?", points: ["(C) PSLV-C11"] },
                    { subHeading: "Q138. TKDL partner?", points: ["(B) Ministry of AYUSH"] },
                    { subHeading: "Q139. Supercomputer Speed Unit?", points: ["(B) FLOPS"] },
                    { subHeading: "Q140. Paleobotany Institute founder?", points: ["(B) Birbal Sahni"] },
                    { subHeading: "Q141. Project 15B?", points: ["(A) Visakhapatnam-class Destroyers"] },
                    { subHeading: "Q142. Sodium-Ion advantage?", points: ["(B) Low cost & Abundance"] },
                    { subHeading: "Q143. National Science Day?", points: ["(B) Discovery of Raman Effect"] },
                    { subHeading: "Q144. PARAM Siddhi-AI Mission?", points: ["(A) National Supercomputing Mission"] },
                    { subHeading: "Q145. Surrogacy Act bans?", points: ["(B) Commercial Surrogacy"] },
                    { subHeading: "Q146. Vikram-S?", points: ["(A) First Private Rocket"] },
                    { subHeading: "Q147. Remote Control Waves?", points: ["(B) Infrared"] },
                    { subHeading: "Q148. Bioremediation?", points: ["(A) Microbes cleaning pollutants"] },
                    { subHeading: "Q149. IRNSS Ops Name?", points: ["(B) NavIC"] },
                    { subHeading: "Q150. CNTs made of?", points: ["(B) Graphene"] }
                ]
            }
        ]
    }
];
