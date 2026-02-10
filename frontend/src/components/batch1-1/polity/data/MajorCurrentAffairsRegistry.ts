export interface CurrentAffairItem {
    id: string;
    title: string;
    summary: string;
    date: string;
    topicIds: number[]; // Links to 1-95 Topic IDs
    tags: string[];
    source: string;
    importance: 'High' | 'Medium' | 'Low';
}

export const MAJOR_CURRENT_AFFAIRS: CurrentAffairItem[] = [
    // ==========================================
    // 2024-2025 MAJOR DEVELOPMENTS
    // ==========================================
    {
        id: "ca-001",
        title: "Nari Shakti Vandan Adhiniyam (106th Amendment Act)",
        summary: "Provides 33% reservation for women in Lok Sabha and State Legislative Assemblies. Added Articles 330A, 332A, and 334A. Implemented after the next delimitation exercise.",
        date: "2023-09-28",
        topicIds: [11, 23, 33, 81],
        tags: ["Women Reservation", "Amendment", "Parliament"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-002",
        title: "Supreme Court Verdict on Article 370",
        summary: "SC upheld the constitutionality of the abrogation of Article 370, stating J&K did not retain sovereignty upon accession. Directed EC to hold elections by Sept 2024.",
        date: "2023-12-11",
        topicIds: [6, 14, 26, 41],
        tags: ["J&K", "Article 370", "Federalism"],
        source: "Indian Express",
        importance: "High"
    },
    {
        id: "ca-003",
        title: "CEC and Other ECs (Appointment, Conditions of Service and Term of Office) Act, 2023",
        summary: "Replaces the 1991 Act. Selection Committee comprises PM, a Union Cabinet Minister, and Leader of Opposition/Largest Party. CJI removed from selection panel (overturning Anoop Baranwal judgment).",
        date: "2023-12-28",
        topicIds: [43, 81],
        tags: ["Election Commission", "Appointments", "Executive Control"],
        source: "PIB",
        importance: "High"
    },
    {
        id: "ca-004",
        title: "Supreme Court on Electoral Bonds Scheme",
        summary: "SC struck down the Electoral Bonds Scheme as unconstitutional, citing violation of Right to Information (Art 19(1)(a)). Mandated SBI to disclose details.",
        date: "2024-02-15",
        topicIds: [8, 81, 82],
        tags: ["Electoral Bonds", "RTI", "Transparency"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-005",
        title: "Bhartiya Nyaya Sanhita (BNS) replaces IPC",
        summary: "Overhaul of criminal laws. Sedition (Section 124A IPC) repealed but replaced with 'Acts endangering sovereignty'. Community service introduced as punishment.",
        date: "2023-12-25",
        topicIds: [8, 26],
        tags: ["Criminal Law Reform", "Sedition", "BNS"],
        source: "PRS Legislative Research",
        importance: "Medium"
    },
    {
        id: "ca-006",
        title: "Uttarakhand Uniform Civil Code (UCC) Bill",
        summary: "First state in independent India to pass a UCC. Governs marriage, divorce, succession, and live-in relationships for all communities (except Tribals).",
        date: "2024-02-07",
        topicIds: [9, 14],
        tags: ["UCC", "Secularism", "State Legislation"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-007",
        title: "One Nation, One Election (Kovind Committee Report)",
        summary: "Panel recommended simultaneous elections for Lok Sabha and State Assemblies as the first step, followed by local body elections within 100 days.",
        date: "2024-03-14",
        topicIds: [13, 14, 81],
        tags: ["Simultaneous Elections", "Federalism"],
        source: "PIB",
        importance: "Medium"
    },
    {
        id: "ca-008",
        title: "Whip System & Anti-Defection",
        summary: "Recent Speaker decisions in Maharashtra (Shiv Sena) and NCP splits highlighted the role of the Speaker and the definition of 'Original Political Party' under the Tenth Schedule.",
        date: "2024-01-10",
        topicIds: [23, 86],
        tags: ["Anti-Defection", "Speaker Powers", "10th Schedule"],
        source: "Indian Express",
        importance: "High"
    },

    // ==========================================
    // NEW: 2024 DEVELOPMENTS
    // ==========================================
    {
        id: "ca-009",
        title: "18th Lok Sabha — Record Women MPs Elected",
        summary: "The 2024 General Elections saw the highest-ever women representation in Lok Sabha with 74 women MPs, though still below the global average of 26.5%.",
        date: "2024-06-04",
        topicIds: [16, 81, 82],
        tags: ["Elections 2024", "Women Representation", "Lok Sabha"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-010",
        title: "Supreme Court: Sub-classification within SC/ST Reservations",
        summary: "A 7-judge Constitution Bench ruled that states can sub-classify SCs and STs to ensure more equitable distribution of reservation benefits within these categories.",
        date: "2024-08-01",
        topicIds: [8, 24, 12],
        tags: ["Reservations", "Article 14", "Equality", "SC Judgment"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-011",
        title: "Digital Personal Data Protection Act Implementation",
        summary: "Rules framed under the DPDP Act 2023. Data Protection Board constituted. Consent framework, rights of data principals, and obligations on data fiduciaries notified.",
        date: "2024-06-15",
        topicIds: [8],
        tags: ["Right to Privacy", "Article 21", "Data Protection"],
        source: "PIB",
        importance: "High"
    },
    {
        id: "ca-012",
        title: "Governor's Role — SC Rebukes Tamil Nadu Governor",
        summary: "SC criticized the Governor of Tamil Nadu for withholding assent to bills passed by the State Legislature, reiterating that Governors cannot act as a pocketveto.",
        date: "2024-04-08",
        topicIds: [29, 33, 14],
        tags: ["Governor Powers", "Federalism", "Article 200"],
        source: "Indian Express",
        importance: "High"
    },
    {
        id: "ca-013",
        title: "CAA Rules Notified — Citizenship Amendment Act Implemented",
        summary: "Centre notified rules for the Citizenship Amendment Act 2019 before the 2024 elections. Enables citizenship for persecuted minorities from Pakistan, Bangladesh, Afghanistan.",
        date: "2024-03-11",
        topicIds: [6, 8],
        tags: ["Citizenship", "CAA", "Article 11", "Fundamental Rights"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-014",
        title: "Supreme Court on Bulldozer Justice",
        summary: "SC issued guidelines against arbitrary demolition of properties by state authorities, calling it 'Bulldozer Justice'. Held it violates Articles 14, 21, and due process.",
        date: "2024-11-13",
        topicIds: [8, 24],
        tags: ["Article 21", "Due Process", "Rule of Law"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-015",
        title: "16th Finance Commission Constituted",
        summary: "The 16th Finance Commission headed by Dr. Arvind Panagariya constituted to recommend distribution of tax revenues between Centre and States for 2026-31.",
        date: "2024-12-31",
        topicIds: [14, 44],
        tags: ["Finance Commission", "Fiscal Federalism", "Article 280"],
        source: "PIB",
        importance: "High"
    },
    {
        id: "ca-016",
        title: "Waqf (Amendment) Bill 2024",
        summary: "Bill to amend the Waqf Act 1995 with provisions for non-Muslim and women members on Waqf boards, digitization of Waqf properties, and enhanced powers of the Waqf tribunal.",
        date: "2024-08-08",
        topicIds: [8, 16],
        tags: ["Waqf", "Minority Rights", "Parliament"],
        source: "PRS Legislative Research",
        importance: "Medium"
    },
    {
        id: "ca-017",
        title: "Supreme Court: Property Rights of Women (Hindu Succession)",
        summary: "SC reiterated that daughters have equal coparcenary rights in Hindu Undivided Family property, applicable even retrospectively, expanding the 2020 ruling in Vineeta Sharma case.",
        date: "2024-03-20",
        topicIds: [8, 24],
        tags: ["Women Rights", "Article 14", "Equality"],
        source: "The Hindu",
        importance: "Medium"
    },
    {
        id: "ca-018",
        title: "Jharkhand Assembly Dissolved — Governor's Power under Article 174",
        summary: "Debate on Governor's power to dissolve the Assembly vs the aid and advice of the Council of Ministers. Constitutional experts invoked the Bommai judgment.",
        date: "2024-11-20",
        topicIds: [29, 33, 14],
        tags: ["Governor", "Article 174", "State Legislature"],
        source: "Indian Express",
        importance: "Medium"
    },
    {
        id: "ca-019",
        title: "Supreme Court Upholds Validity of EVM Voting",
        summary: "SC rejected the plea for returning to paper ballots, upholding the integrity of EVMs. Ordered 100% VVPAT verification of a randomly selected booth in each Assembly segment.",
        date: "2024-04-26",
        topicIds: [43, 81],
        tags: ["EVM", "VVPAT", "Election Commission"],
        source: "LiveLaw",
        importance: "Medium"
    },
    {
        id: "ca-020",
        title: "Delimitation Commission — Fresh Demands Post Census",
        summary: "Southern states express concern over potential loss of Lok Sabha seats post-delimitation based on 2025 Census. Debate on population-based vs development-based representation.",
        date: "2024-09-01",
        topicIds: [14, 16, 81],
        tags: ["Delimitation", "Federalism", "Census 2025"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-021",
        title: "SC on Governors Sitting on Bills — 'Cannot Pocket Veto'",
        summary: "Landmark ruling: SC held that Governors must act on bills in a 'reasonable time' and cannot indefinitely withhold assent. Clarified the scope of Article 200 and 201.",
        date: "2024-11-28",
        topicIds: [29, 33, 14],
        tags: ["Governor", "Article 200", "State Legislation", "Federalism"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-022",
        title: "Lateral Entry into Civil Services — OBC Reservation Debate",
        summary: "Government advertised lateral entry positions in ministries. Controversy over lack of reservation in these posts. UPSC withdrew the advertisement after political backlash.",
        date: "2024-08-19",
        topicIds: [45, 8],
        tags: ["Civil Services", "Reservation", "UPSC", "Article 16"],
        source: "Indian Express",
        importance: "Medium"
    },
    {
        id: "ca-023",
        title: "SC on Aligarh Muslim University Minority Status",
        summary: "A 7-judge Constitution Bench ruled that AMU qualifies as a minority institution under Article 30. Overruled the 1967 Azeez Basha judgment. Laid down new test for 'establishment'.",
        date: "2024-11-08",
        topicIds: [8, 24, 12],
        tags: ["Minority Rights", "Article 30", "Education"],
        source: "LiveLaw",
        importance: "High"
    },
    {
        id: "ca-024",
        title: "NITI Aayog Replaced with New Body — Debate",
        summary: "Opposition demands reconstitution of Planning Commission. Government defends NITI Aayog's role as a think tank. Debate on cooperative vs competitive federalism.",
        date: "2024-07-01",
        topicIds: [14],
        tags: ["NITI Aayog", "Planning Commission", "Federalism"],
        source: "The Hindu",
        importance: "Low"
    },
    {
        id: "ca-025",
        title: "Supreme Court — Right to Bail as a Rule, Jail an Exception",
        summary: "SC reiterated that bail should be the default under criminal law, criticizing lower courts for routinely denying bail. Connected to Article 21 (liberty).",
        date: "2024-07-15",
        topicIds: [8, 24],
        tags: ["Article 21", "Personal Liberty", "Criminal Justice"],
        source: "LiveLaw",
        importance: "Medium"
    },
    {
        id: "ca-026",
        title: "J&K Assembly Elections — First Post Article 370 Abrogation",
        summary: "Assembly elections held in J&K after 6 years. National Conference wins majority. LG retains key powers under J&K Reorganisation Act 2019.",
        date: "2024-10-08",
        topicIds: [41, 81, 14],
        tags: ["J&K", "Elections", "Union Territory", "Article 370"],
        source: "The Hindu",
        importance: "High"
    },
    {
        id: "ca-027",
        title: "Supreme Court on Creamy Layer in OBC Reservations",
        summary: "SC directed states to identify and exclude creamy layer among OBCs for reservation benefits. Reiterated Indra Sawhney judgment principles.",
        date: "2024-05-10",
        topicIds: [8, 24],
        tags: ["Reservations", "OBC", "Creamy Layer", "Equality"],
        source: "Indian Express",
        importance: "Medium"
    },
    {
        id: "ca-028",
        title: "National Judicial Appointments Commission (NJAC) — Revisited",
        summary: "Law Minister hints at reviving the NJAC debate. 2015 SC verdict struck down the 99th Amendment and NJAC Act. Collegium system remains under scrutiny.",
        date: "2024-12-15",
        topicIds: [24, 11, 12],
        tags: ["NJAC", "Collegium", "Judicial Appointments", "Basic Structure"],
        source: "The Hindu",
        importance: "Medium"
    },
    {
        id: "ca-029",
        title: "SC Recognizes Right to Same-Sex Civil Unions (Dissent)",
        summary: "While refusing to legalize same-sex marriage, the SC acknowledged the right of queer couples to civil unions. The majority held that marriage legislation is Parliament's domain.",
        date: "2023-10-17",
        topicIds: [8, 24],
        tags: ["LGBTQ Rights", "Article 21", "Personal Liberty"],
        source: "LiveLaw",
        importance: "Medium"
    },
    {
        id: "ca-030",
        title: "128th Constitutional Amendment Bill (One Nation One Election)",
        summary: "Government introduces the Constitution (128th Amendment) Bill in Lok Sabha to enable simultaneous elections. Referred to Joint Parliamentary Committee.",
        date: "2024-12-17",
        topicIds: [11, 13, 14, 81],
        tags: ["Simultaneous Elections", "Amendment", "Federalism"],
        source: "PIB",
        importance: "High"
    },
    {
        id: "ca-031",
        title: "Panchayat Elections — OBC Reservation Quota Debate",
        summary: "Several states challenged on OBC reservation quotas in Panchayat elections exceeding 50% ceiling. SC invokes the triple-test requirement from K. Krishna Murthy case.",
        date: "2024-05-20",
        topicIds: [32, 8],
        tags: ["Panchayati Raj", "OBC Reservation", "73rd Amendment"],
        source: "Indian Express",
        importance: "Medium"
    },
    {
        id: "ca-032",
        title: "Inter-State River Water Disputes — Cauvery and Krishna",
        summary: "Fresh tensions over Cauvery water sharing between Karnataka and Tamil Nadu. Inter-State River Water Disputes Act invoked. SC monitors compliance with Cauvery tribunal award.",
        date: "2024-09-15",
        topicIds: [14],
        tags: ["Inter-State Relations", "Water Disputes", "Federalism"],
        source: "The Hindu",
        importance: "Medium"
    },
    {
        id: "ca-033",
        title: "Supreme Court: States Cannot Impose Surcharge on GST",
        summary: "SC ruled that states cannot levy additional cess or surcharge on GST items, reinforcing the cooperative fiscal federalism framework under the 101st Amendment.",
        date: "2024-06-20",
        topicIds: [14],
        tags: ["GST", "Fiscal Federalism", "101st Amendment"],
        source: "LiveLaw",
        importance: "Medium"
    },
    {
        id: "ca-034",
        title: "NHRC Independence — Paris Principles Compliance Review",
        summary: "GANHRI reviewed India's NHRC status. Concerns raised over appointment process, funding independence, and handling of human rights complaints by security forces.",
        date: "2024-03-05",
        topicIds: [48],
        tags: ["NHRC", "Human Rights", "Statutory Bodies"],
        source: "The Hindu",
        importance: "Low"
    },
    {
        id: "ca-035",
        title: "Speaker's Partisan Role — Anti-Defection Petitions Pending",
        summary: "Multiple anti-defection petitions pending before various Speakers for years. SC intervenes demanding time-bound disposal, questioning Speaker's neutrality.",
        date: "2024-07-25",
        topicIds: [16, 86],
        tags: ["Speaker", "Anti-Defection", "10th Schedule"],
        source: "Indian Express",
        importance: "High"
    },
    {
        id: "ca-036",
        title: "Chief Justice of India — Retirement Age Debate",
        summary: "Renewed calls to increase CJI retirement age from 65 to 67, citing short tenures. Law Commission examines the proposal. Requires Constitutional Amendment.",
        date: "2024-10-01",
        topicIds: [24, 11],
        tags: ["Supreme Court", "CJI", "Judicial Reform"],
        source: "The Hindu",
        importance: "Low"
    },
    {
        id: "ca-037",
        title: "CAG Report on MGNREGA Fund Utilization",
        summary: "CAG audit reveals significant irregularities in MGNREGA fund utilization across states. Highlights need for stronger financial accountability mechanisms.",
        date: "2024-08-10",
        topicIds: [46],
        tags: ["CAG", "Financial Accountability", "MGNREGA"],
        source: "PIB",
        importance: "Medium"
    },
    {
        id: "ca-038",
        title: "Election Commission — Model Code of Conduct for Social Media",
        summary: "EC issues updated guidelines for social media usage during elections, covering deepfakes, AI-generated content, and paid political advertisements on digital platforms.",
        date: "2024-03-01",
        topicIds: [43, 81, 82],
        tags: ["Election Commission", "Social Media", "Model Code"],
        source: "PIB",
        importance: "Medium"
    },
    {
        id: "ca-039",
        title: "SC on Right to Clean Environment as Part of Article 21",
        summary: "SC links Right to Clean Environment with Article 21, imposes National standards for air quality index compliance. Directs CPCB to act against polluting industries.",
        date: "2024-11-05",
        topicIds: [8, 24, 9],
        tags: ["Article 21", "Environment", "DPSP", "Judicial Activism"],
        source: "LiveLaw",
        importance: "Medium"
    },
    {
        id: "ca-040",
        title: "Central Vista Project — SC Upholds Government Decision",
        summary: "SC dismissed challenges to the Central Vista redevelopment project, holding it to be a policy decision within the government's domain.",
        date: "2024-01-15",
        topicIds: [24],
        tags: ["Supreme Court", "Policy", "Judicial Review"],
        source: "The Hindu",
        importance: "Low"
    },
    {
        id: "ca-041",
        title: "SC on Gubernatorial Discretion — Cannot Dismiss Elected Government",
        summary: "In the context of disputes in multiple states, SC reaffirmed that the Governor's discretionary powers under Article 163 are limited and subject to judicial review.",
        date: "2024-09-22",
        topicIds: [29, 14],
        tags: ["Governor", "Article 163", "Discretionary Powers"],
        source: "Indian Express",
        importance: "High"
    },
    {
        id: "ca-042",
        title: "Bhartiya Nagarik Suraksha Sanhita Comes Into Force",
        summary: "BNSS replaces CrPC from July 1, 2024. Key changes: Zero FIR, mandatory videography of crime scenes, electronic summons, and timelines for investigation completion.",
        date: "2024-07-01",
        topicIds: [8],
        tags: ["Criminal Law Reform", "BNSS", "CrPC Replacement"],
        source: "PRS Legislative Research",
        importance: "High"
    },
    {
        id: "ca-043",
        title: "Supreme Court: Prisoners' Right to Vote — Fresh Petition",
        summary: "Fresh PIL filed seeking voting rights for prisoners. SC issues notice to Centre. Currently, Section 62(5) of RPA disqualifies prisoners from voting.",
        date: "2024-12-01",
        topicIds: [8, 81],
        tags: ["Prisoners Rights", "Voting", "Article 326"],
        source: "LiveLaw",
        importance: "Low"
    },
    {
        id: "ca-044",
        title: "Expansion of Scheduled Tribes List — Multiple States",
        summary: "Parliament passes bills to include more communities in the ST list for Chhattisgarh, Himachal Pradesh, Karnataka, and Tamil Nadu. Article 342 procedure followed.",
        date: "2024-08-03",
        topicIds: [8],
        tags: ["Scheduled Tribes", "Article 342", "Reservation"],
        source: "PIB",
        importance: "Medium"
    },
];
