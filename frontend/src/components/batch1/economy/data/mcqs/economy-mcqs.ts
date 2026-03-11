// Economy MCQs - Practice Questions
// Covers all 4 modules with UPSC Prelims-style questions

export interface EconomyMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    module: 'macro' | 'sectors' | 'international' | 'social';
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
    year?: number; // PYQ year if applicable
    chapter?: string; // Standardized metadata
    subtopic?: string; // Standardized metadata
}

export const economyMCQs: EconomyMCQ[] = [
    // Module 1: Macro Economics
    {
        id: "ec-mcq-01",
        question: "Which of the following is NOT included in the calculation of GDP?",
        options: [
            "Value of goods produced by a foreign company in India",
            "Value of goods produced by an Indian company abroad",
            "Government expenditure on defense",
            "Consumption expenditure by households"
        ],
        correctAnswer: 1,
        explanation: "GDP measures production within a country's borders. Goods produced by Indian companies abroad are part of GNP, not GDP.",
        module: "macro",
        topic: "National Income",
        difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-02",
        question: "The Monetary Policy Committee (MPC) of RBI consists of how many members?",
        options: ["4 members", "5 members", "6 members", "7 members"],
        correctAnswer: 2,
        explanation: "MPC has 6 members: 3 from RBI (Governor as Chairman, Deputy Governor, one RBI official) and 3 external members nominated by Government.",
        module: "macro",
        topic: "Monetary Policy",
        difficulty: "easy",
        chapter: "2"
    },
    {
        id: "ec-mcq-03",
        question: "If RBI wants to control inflation, which action would be most appropriate?",
        options: [
            "Decrease repo rate",
            "Increase CRR",
            "Decrease SLR",
            "Buy government securities in open market"
        ],
        correctAnswer: 1,
        explanation: "Increasing CRR reduces money available for lending, contracts money supply, and helps control inflation. Decreasing rates would increase money supply.",
        module: "macro",
        topic: "Monetary Policy",
        difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-04",
        question: "Primary Deficit is calculated as:",
        options: [
            "Revenue Deficit - Interest Payments",
            "Fiscal Deficit - Interest Payments",
            "Budget Deficit - Interest Payments",
            "Fiscal Deficit + Interest Payments"
        ],
        correctAnswer: 1,
        explanation: "Primary Deficit = Fiscal Deficit - Interest Payments. It shows borrowing requirement excluding interest burden on past borrowings.",
        module: "macro",
        topic: "Fiscal Policy",
        difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-05",
        question: "Which type of inflation is caused by increase in input costs?",
        options: [
            "Demand-pull inflation",
            "Cost-push inflation",
            "Built-in inflation",
            "Hyperinflation"
        ],
        correctAnswer: 1,
        explanation: "Cost-push inflation occurs when production costs (wages, raw materials, energy) rise, pushing up prices even without excess demand.",
        module: "macro",
        topic: "Inflation",
        difficulty: "easy",
        chapter: "1"
    },

    // Module 2: Sectors
    {
        id: "ec-mcq-06",
        question: "Which body recommends the Minimum Support Price (MSP) for crops?",
        options: [
            "NABARD",
            "Commission for Agricultural Costs and Prices (CACP)",
            "Food Corporation of India (FCI)",
            "Ministry of Agriculture directly"
        ],
        correctAnswer: 1,
        explanation: "CACP recommends MSP, but the final decision is taken by Cabinet Committee on Economic Affairs (CCEA). FCI is the procurement agency.",
        module: "sectors",
        topic: "Agriculture",
        difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-07",
        question: "What percentage of India's workforce is employed in agriculture?",
        options: [
            "About 20%",
            "About 30%",
            "About 43%",
            "About 60%"
        ],
        correctAnswer: 2,
        explanation: "About 42-45% of India's workforce is in agriculture, but it contributes only 15-17% to GDP, indicating low productivity and disguised unemployment.",
        module: "sectors",
        topic: "Agriculture",
        difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-08",
        question: "Production Linked Incentive (PLI) scheme covers how many sectors?",
        options: ["10 sectors", "12 sectors", "14 sectors", "16 sectors"],
        correctAnswer: 2,
        explanation: "PLI scheme covers 14 sectors including electronics, pharmaceuticals, automobiles, textiles, food processing, etc.",
        module: "sectors",
        topic: "Industry",
        difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-09",
        question: "Which sector contributes the highest to India's GDP?",
        options: ["Agriculture", "Industry", "Services", "Mining"],
        correctAnswer: 2,
        explanation: "Services sector contributes about 55% of GDP, followed by Industry (~30%) and Agriculture (~15%).",
        module: "sectors",
        topic: "Services",
        difficulty: "easy",
        chapter: "5"
    },

    // Module 3: International
    {
        id: "ec-mcq-10",
        question: "Current Account in Balance of Payments includes which of the following?",
        options: [
            "Only trade in goods",
            "Trade in goods and services only",
            "Trade in goods, services, and primary income",
            "Trade in goods, services, primary income, and secondary income (transfers)"
        ],
        correctAnswer: 3,
        explanation: "Current Account = Trade in goods + Trade in services + Primary income (investment income) + Secondary income (remittances, transfers).",
        module: "international",
        topic: "BoP",
        difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-11",
        question: "What is the minimum stake for an investment to be classified as FDI (not FPI)?",
        options: ["5%", "10%", "20%", "51%"],
        correctAnswer: 1,
        explanation: "FDI requires at least 10% equity stake in a company with management control. Below 10% is considered FPI (portfolio investment).",
        module: "international",
        topic: "Investment",
        difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-12",
        question: "India is a member of which international trade organization since 1995?",
        options: ["OECD", "WTO", "G7", "European Union"],
        correctAnswer: 1,
        explanation: "India is a founding member of WTO (World Trade Organization) established in 1995, replacing GATT.",
        module: "international",
        topic: "Trade",
        difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-13",
        question: "Special Drawing Rights (SDRs) are issued by:",
        options: ["World Bank", "IMF", "WTO", "Asian Development Bank"],
        correctAnswer: 1,
        explanation: "SDRs are supplementary foreign exchange reserve assets created by IMF. Their value is based on a basket of five major currencies.",
        module: "international",
        topic: "IMF",
        difficulty: "medium",
        chapter: "4"
    },

    // Module 4: Social Development
    {
        id: "ec-mcq-14",
        question: "MGNREGA guarantees how many days of employment per year?",
        options: ["50 days", "75 days", "100 days", "150 days"],
        correctAnswer: 2,
        explanation: "MGNREGA guarantees 100 days of wage employment per year to every rural household whose adult members volunteer to do unskilled manual work.",
        module: "social",
        topic: "Employment",
        difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-15",
        question: "Human Development Index (HDI) is published by:",
        options: ["World Bank", "IMF", "UNDP", "WHO"],
        correctAnswer: 2,
        explanation: "UNDP publishes HDI annually in Human Development Report. It measures health, education, and standard of living.",
        module: "social",
        topic: "Development",
        difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-16",
        question: "Under PM-JAY (Ayushman Bharat), what is the annual health cover per family?",
        options: ["₹1 lakh", "₹3 lakh", "₹5 lakh", "₹10 lakh"],
        correctAnswer: 2,
        explanation: "PM-JAY provides ₹5 lakh per family per year for secondary and tertiary hospitalization. It covers ~50 crore beneficiaries.",
        module: "social",
        topic: "Health",
        difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-17",
        question: "Gini Coefficient value of 0 indicates:",
        options: [
            "Perfect inequality",
            "Perfect equality",
            "50% inequality",
            "Cannot determine without more data"
        ],
        correctAnswer: 1,
        explanation: "Gini = 0 means perfect equality (everyone has equal income). Gini = 1 means perfect inequality (one person has all income).",
        module: "social",
        topic: "Inequality",
        difficulty: "medium",
        subtopic: "Social Development",
        chapter: "6"
    },
    {
        id: "ec-mcq-18",
        question: "India's demographic dividend window is expected to last until approximately:",
        options: ["2030", "2040", "2055", "2070"],
        correctAnswer: 2,
        explanation: "India's demographic dividend window (large working-age population) is estimated from 2020-2055, after which dependency ratio will increase.",
        module: "social",
        topic: "Demographics",
        difficulty: "medium",
        subtopic: "Social Development",
        chapter: "6"
    }
,
    {
        id: "ec-mcq-19",
        question: "Consider the following statements about GDP deflator:\n1. It covers only domestically produced goods.\n2. It is the ratio of nominal GDP to real GDP.\n3. It includes prices of imported goods.\nWhich of the statements given above is/are correct?",
        options: ["1 and 2 only", "2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "GDP deflator = (Nominal GDP / Real GDP) × 100. Unlike CPI, it covers only domestically produced goods and does NOT include imported goods.",
        module: "macro", topic: "National Income", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-20",
        question: "Net National Product (NNP) at factor cost is also known as:",
        options: ["National Income", "Personal Income", "Gross Domestic Product", "Per Capita Income"],
        correctAnswer: 0,
        explanation: "NNP at factor cost = GNP - Depreciation - Indirect Taxes + Subsidies. This is the standard definition of National Income.",
        module: "macro", topic: "National Income", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-21",
        question: "Which of the following is NOT a component of the expenditure method of calculating GDP?\n1. Private consumption expenditure\n2. Transfer payments by government\n3. Gross capital formation\n4. Net exports",
        options: ["2 only", "1 and 4 only", "2 and 3 only", "3 only"],
        correctAnswer: 0,
        explanation: "Transfer payments (pensions, subsidies) are NOT included in GDP calculation as they don't represent production of goods/services. GDP = C + I + G + (X-M).",
        module: "macro", topic: "National Income", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-22",
        question: "Consider the following statements:\nStatement-I: When RBI increases the repo rate, borrowing becomes costlier for commercial banks.\nStatement-II: An increase in repo rate is a contractionary monetary policy measure.\nWhich one is correct?",
        options: ["Both are correct and II explains I", "Both are correct but II does not explain I", "I is correct but II is incorrect", "I is incorrect but II is correct"],
        correctAnswer: 1,
        explanation: "Both statements are independently correct. Repo rate increase makes borrowing costlier (I) and is contractionary (II), but Statement-II is the broader policy classification, not an explanation of I.",
        module: "macro", topic: "Monetary Policy", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-23",
        question: "The Standing Deposit Facility (SDF) introduced by RBI in 2022 is different from Reverse Repo because:",
        options: ["SDF does not require collateral from banks", "SDF requires government securities as collateral", "SDF rate is always lower than reverse repo", "SDF is only for foreign banks"],
        correctAnswer: 0,
        explanation: "SDF allows RBI to absorb excess liquidity without providing government securities as collateral, unlike reverse repo which requires G-Sec transfer.",
        module: "macro", topic: "Monetary Policy", difficulty: "hard",
        chapter: "2"
    },
    {
        id: "ec-mcq-24",
        question: "The Marginal Standing Facility (MSF) rate is typically:",
        options: ["25 basis points above the repo rate", "25 basis points below the repo rate", "Equal to the repo rate", "50 basis points above the bank rate"],
        correctAnswer: 0,
        explanation: "MSF rate = Repo rate + 25 bps. Banks can borrow overnight from RBI under MSF by dipping into their SLR portfolio up to 2% below the required SLR.",
        module: "macro", topic: "Monetary Policy", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-25",
        question: "Which of the following are objectives of the Monetary Policy Committee (MPC)?\n1. Maintaining price stability\n2. Promoting economic growth\n3. Managing government borrowing\n4. Regulating foreign exchange",
        options: ["1 and 2 only", "1, 2 and 3", "1 only", "1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "MPC's primary objective is price stability (inflation targeting at 4% ± 2%) while keeping in mind the objective of growth. Managing government debt and forex are separate RBI functions.",
        module: "macro", topic: "Monetary Policy", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-26",
        question: "Consider the following:\n1. M1 = Currency with public + Demand deposits + Other deposits with RBI\n2. M3 = M1 + Time deposits with banks\n3. M1 is called 'broad money'\nWhich of the above is/are correct?",
        options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "M1 = Currency + Demand Deposits + Other deposits with RBI (correct). M3 = M1 + Time Deposits (correct). M3, not M1, is called 'broad money'. M1 is 'narrow money'.",
        module: "macro", topic: "Money Supply", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-27",
        question: "The Consumer Price Index (CPI) in India is published by:",
        options: ["National Statistical Office (NSO)", "Reserve Bank of India", "Ministry of Finance", "Labour Bureau only"],
        correctAnswer: 0,
        explanation: "CPI (Combined) used for inflation targeting is published by NSO under MoSPI. Labour Bureau publishes CPI for Industrial Workers (CPI-IW) and Agricultural Labourers (CPI-AL).",
        module: "macro", topic: "Inflation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-28",
        question: "Headline inflation differs from core inflation in that core inflation excludes:",
        options: ["Food and fuel prices", "Only fuel prices", "Only food prices", "Housing and transport costs"],
        correctAnswer: 0,
        explanation: "Core inflation excludes volatile food and fuel/energy prices to show the underlying trend. Headline inflation includes all items in the CPI basket.",
        module: "macro", topic: "Inflation", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-29",
        question: "Which of the following correctly describes 'Fiscal Deficit'?",
        options: ["Total expenditure minus total receipts excluding borrowings", "Revenue expenditure minus revenue receipts", "Total expenditure minus total receipts", "Capital expenditure minus capital receipts"],
        correctAnswer: 0,
        explanation: "Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings). It indicates the total borrowing requirements of the government.",
        module: "macro", topic: "Fiscal Policy", difficulty: "easy",
        chapter: "3"
    },
    {
        id: "ec-mcq-30",
        question: "Revenue Deficit in the Union Budget indicates:",
        options: ["Government is borrowing to meet current consumption expenditure", "Government has surplus revenue", "Capital expenditure exceeds capital receipts", "Tax revenue exceeds non-tax revenue"],
        correctAnswer: 0,
        explanation: "Revenue Deficit = Revenue Expenditure - Revenue Receipts. A positive revenue deficit means the government is using borrowed funds for current consumption, not asset creation.",
        module: "macro", topic: "Fiscal Policy", difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-31",
        question: "The Effective Revenue Deficit, introduced in Union Budget 2011-12, is:",
        options: ["Revenue Deficit minus grants for creation of capital assets", "Fiscal Deficit minus interest payments", "Primary Deficit minus revenue deficit", "Budget Deficit minus capital receipts"],
        correctAnswer: 0,
        explanation: "Effective Revenue Deficit = Revenue Deficit - Grants for creation of capital assets. It provides a more realistic picture of revenue deficit by excluding productive grants.",
        module: "macro", topic: "Fiscal Policy", difficulty: "hard",
        chapter: "3"
    },
    {
        id: "ec-mcq-32",
        question: "Consider the following statements about GST in India:\n1. GST subsumes excise duty, service tax, and VAT.\n2. GST is levied on the basis of origin.\n3. GST Council is a constitutional body under Article 279A.\nWhich of the above is/are correct?",
        options: ["1 and 3 only", "1 only", "1 and 2 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "GST subsumes multiple taxes (correct). It is a destination-based tax, NOT origin-based (incorrect). GST Council under Article 279A is constitutional (correct).",
        module: "macro", topic: "Taxation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-33",
        question: "Which of the following taxes are NOT subsumed under GST?\n1. Stamp Duty\n2. Customs Duty\n3. Electricity Duty\n4. Petroleum products",
        options: ["1, 2, 3 and 4", "1 and 2 only", "2 and 4 only", "1 only"],
        correctAnswer: 0,
        explanation: "Stamp duty (state), customs duty (central), electricity duty (state), and petroleum products (kept out) are all NOT subsumed under GST.",
        module: "macro", topic: "Taxation", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-34",
        question: "The 'Ways and Means Advances' facility is provided by:",
        options: ["RBI to State and Central Governments", "Commercial banks to RBI", "World Bank to developing nations", "Finance Commission to states"],
        correctAnswer: 0,
        explanation: "WMA is a facility provided by RBI to Central and State governments to bridge temporary mismatches between receipts and expenditure. It carries repo rate interest.",
        module: "macro", topic: "Public Debt", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-35",
        question: "A Scheduled Bank in India is one which is:",
        options: ["Listed in the Second Schedule of the RBI Act, 1934", "Approved by the Finance Ministry", "Listed on the stock exchange", "Regulated by SEBI"],
        correctAnswer: 0,
        explanation: "Banks included in the Second Schedule of the RBI Act, 1934 are 'Scheduled Banks'. They must have paid-up capital ≥ ₹5 lakh and satisfy RBI that their affairs are conducted in a manner not detrimental to depositors' interests.",
        module: "macro", topic: "Banking", difficulty: "easy",
        chapter: "2"
    },
    {
        id: "ec-mcq-36",
        question: "Which of the following is NOT a function of the Reserve Bank of India?\n1. Regulation of stock markets\n2. Management of foreign exchange reserves\n3. Banker to the Government\n4. Issue of currency notes",
        options: ["1 only", "1 and 3 only", "2 only", "1 and 4 only"],
        correctAnswer: 0,
        explanation: "Stock market regulation is done by SEBI, not RBI. RBI manages forex reserves, acts as government's banker, and has monopoly on currency note issue (except ₹1 coin/note by MoF).",
        module: "macro", topic: "Banking", difficulty: "easy",
        chapter: "2"
    },
    {
        id: "ec-mcq-37",
        question: "The Insolvency and Bankruptcy Code (IBC), 2016 provides a time-bound resolution process of:",
        options: ["180 days, extendable by 90 days", "90 days, extendable by 90 days", "365 days, no extension", "120 days, extendable by 60 days"],
        correctAnswer: 0,
        explanation: "IBC mandates resolution within 180 days, extendable by 90 days (total 270 days). This replaced the earlier system where cases dragged on for years.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-38",
        question: "Which of the following correctly describes the Unified Payments Interface (UPI)?\n1. It is developed by NPCI\n2. It enables instant fund transfer between banks\n3. It requires a debit card for transactions",
        options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "UPI is developed by NPCI and enables instant bank-to-bank transfers using virtual payment addresses. It does NOT require a debit card — just a bank account linked to a mobile number.",
        module: "macro", topic: "Digital Payments", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-39",
        question: "Small Finance Banks (SFBs) are required to extend what percentage of their net credit to priority sector?",
        options: ["75%", "40%", "50%", "60%"],
        correctAnswer: 0,
        explanation: "SFBs must extend 75% of Adjusted Net Bank Credit to priority sector lending, compared to 40% for commercial banks. At least 50% of loans should be up to ₹25 lakh.",
        module: "macro", topic: "Banking", difficulty: "hard",
        chapter: "2"
    },
    {
        id: "ec-mcq-40",
        question: "The Central Board of Direct Taxes (CBDT) functions under:",
        options: ["Department of Revenue, Ministry of Finance", "RBI", "NITI Aayog", "Department of Economic Affairs"],
        correctAnswer: 0,
        explanation: "CBDT is the apex body for administering direct tax laws and functions under the Department of Revenue in the Ministry of Finance.",
        module: "macro", topic: "Taxation", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-41",
        question: "Consider the following about India's Debt-to-GDP ratio:\nStatement-I: India's general government debt-to-GDP ratio is above 80%.\nStatement-II: The FRBM Act targets a fiscal deficit of 3% of GDP.\nWhich is correct?",
        options: ["Both are correct but II does not explain I", "Both are correct and II explains I", "I is correct but II is incorrect", "I is incorrect but II is correct"],
        correctAnswer: 0,
        explanation: "India's debt-to-GDP is ~83% (above 80%, correct). FRBM targets 3% fiscal deficit (correct). The FRBM target is about flow (annual deficit), not stock (total debt), so it doesn't explain I.",
        module: "macro", topic: "Public Debt", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-42",
        question: "Open Market Operations (OMOs) by RBI involve:",
        options: ["Buying and selling of government securities", "Changing the repo rate", "Modifying CRR requirements", "Issuing new currency notes"],
        correctAnswer: 0,
        explanation: "OMOs involve RBI buying (to inject liquidity) or selling (to absorb liquidity) government securities in the open market. It is a quantitative tool of monetary policy.",
        module: "macro", topic: "Monetary Policy", difficulty: "easy",
        chapter: "2"
    },,
    {
        id: "ec-mcq-43",
        question: "Which of the following describes the 'disguised unemployment' common in Indian agriculture?",
        options: ["Marginal productivity of labor is zero", "People are unemployed due to lack of skills", "Unemployment during off-season", "Unemployment due to machine replacement"],
        correctAnswer: 0,
        explanation: "Disguised unemployment occurs when more people are working than required. The marginal productivity of the extra workers is zero; removing them wouldn't decrease total output.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-44",
        question: "The Minimum Support Price (MSP) in India is announced for how many mandated crops?",
        options: ["22 mandated crops and FRP for Sugarcane", "20 crops", "25 crops", "15 crops"],
        correctAnswer: 0,
        explanation: "MSP is announced for 22 mandated crops (7 cereals, 5 pulses, 7 oilseeds, 3 commercial crops). For Sugarcane, Fair and Remunerative Price (FRP) is announced.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-45",
        question: "Consider the following statements about the PM-KISAN scheme:\n1. It is a Central Sector Scheme with 100% funding from GOI.\n2. It provides ₹6,000 per year in three equal installments.\n3. Only small and marginal farmers are eligible.\nWhich of the above is/are correct?",
        options: ["1 and 2 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0,
        explanation: "PM-KISAN is a Central Sector Scheme (100% GOI funded) providing ₹6,000/year. Initially limited to small/marginal farmers, it was later extended to ALL landholding farmer families (except certain exclusions).",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-46",
        question: "The 'Yellow Revolution' in India is associated with the production of:",
        options: ["Oilseeds", "Pulses", "Milk", "Honey"],
        correctAnswer: 0,
        explanation: "Yellow Revolution: Oilseeds (especially mustard and sunflower). White: Milk. Blue: Fish. Golden: Honey/Horticulture. Silver: Eggs.",
        module: "sectors", topic: "Agriculture", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-47",
        question: "The Commission for Agricultural Costs and Prices (CACP) recommends MSP after considering:\n1. Cost of production\n2. Demand and supply\n3. Inter-crop price parity\n4. Terms of trade between agriculture and non-agriculture",
        options: ["1, 2, 3 and 4", "1 and 2 only", "1, 3 and 4 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "CACP considers all these factors: Cost of production (A2+FL), demand-supply, market price trends, inter-crop parity, and terms of trade.",
        module: "sectors", topic: "Agriculture", difficulty: "hard",
        chapter: "5"
    },
    {
        id: "ec-mcq-48",
        question: "Under the NFSA (National Food Security Act) 2013, the central issue prices for Rice, Wheat, and Coarse Grains are:",
        options: ["₹3, ₹2, ₹1 respectively", "₹2, ₹3, ₹1 respectively", "₹3 per kg for all", "Market price minus 50% subsidy"],
        correctAnswer: 0,
        explanation: "NFSA provides Rice at ₹3/kg, Wheat at ₹2/kg, and Coarse Grains at ₹1/kg to 'priority households'. Currently, under PMGKAY, this food grain is being provided free of cost.",
        module: "sectors", topic: "Agriculture", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-49",
        question: "Which of the following incorrectly describes 'Micro, Small, and Medium Enterprises' (MSMEs) in India according to the 2020 definition?",
        options: ["Definition is based only on investment", "Composite criteria of Investment and Annual Turnover used", "Manufacturing and Services sectors have same definition", "A Medium unit has turnover up to ₹250 crore"],
        correctAnswer: 0,
        explanation: "The 2020 definition uses composite criteria (Investment AND Turnover). Micro: I<1cr, T<5cr. Small: I<10cr, T<50cr. Medium: I<50cr, T<250cr. Manufacturing and Services are now treated same.",
        module: "sectors", topic: "MSME", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-50",
        question: "The 'Index of Industrial Production' (IIP) is released monthly by:",
        options: ["National Statistical Office (NSO)", "RBI", "DPIIT", "Ministry of Commerce"],
        correctAnswer: 0,
        explanation: "IIP is the quick estimate of industrial growth released every month by NSO. DPIIT releases the Index of Eight Core Industries.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-51",
        question: "The 'Eight Core Industries' in India account for what percentage of the weight of items included in IIP?",
        options: ["40.27%", "25%", "50%", "33.33%"],
        correctAnswer: 0,
        explanation: "The Eight Core Industries (Coal, Crude Oil, Natural Gas, Refinery Products, Fertilizers, Steel, Cement, Electricity) account for 40.27% of weight in IIP.",
        module: "sectors", topic: "Industry", difficulty: "hard",
        chapter: "5"
    },
    {
        id: "ec-mcq-52",
        question: "The 'Make in India' initiative, launched in 2014, targets increasing the share of manufacturing in GDP to:",
        options: ["25% by 2025", "20% by 2030", "30% by 2022", "15% by 2025"],
        correctAnswer: 0,
        explanation: "Make in India aims to increase manufacturing's share in GDP from ~16% to 25% and create 100 million jobs.",
        module: "sectors", topic: "Industry", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-53",
        question: "Which of the following is NOT a sector covered under the Production Linked Incentive (PLI) scheme?",
        options: ["Education Services", "Mobile Manufacturing", "Pharmaceuticals", "Textiles"],
        correctAnswer: 0,
        explanation: "PLI covers 14 manufacturing sectors. Education Services is part of the tertiary/services sector and not covered under the manufacturing-focused PLI scheme.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-54",
        question: "The PM Gati Shakti National Master Plan is primarily aimed at:",
        options: ["Integrated infrastructure planning and multimodal connectivity", "Fast-tracking digital governance", "Increasing agricultural exports", "Speeding up bank loan approvals"],
        correctAnswer: 0,
        explanation: "PM Gati Shakti is a digital platform bringing 16 ministries together for integrated planning and coordinated implementation of infrastructure connectivity projects.",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-55",
        question: "Consider the following about the 'Ude Desh ka Aam Nagrik' (UDAN) scheme:\n1. It aims to develop regional aviation market.\n2. It provides Viability Gap Funding (VGF) to airlines.\n3. Half of the seats are capped at ₹2,500 for a 1-hour flight.\nWhich of the above is/are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 only"],
        correctAnswer: 0,
        explanation: "UDAN (Regional Connectivity Scheme) uses VGF funded by a levy on trunk routes to subzidise flights to underserved airports. Capping fares for 50% seats is key.",
        module: "sectors", topic: "Infrastructure", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-56",
        question: "Infrastructure Investment Trusts (InvITs) are regulated by:",
        options: ["SEBI", "RBI", "IRDAI", "NHAI"],
        correctAnswer: 0,
        explanation: "InvITs are like mutual funds but for infrastructure projects. They are regulated by SEBI.",
        module: "sectors", topic: "Infrastructure", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-57",
        question: "The share of the Services sector in India's Gross Value Added (GVA) is approximately:",
        options: ["55%", "40%", "30%", "65%"],
        correctAnswer: 0,
        explanation: "Services sector is the biggest contributor to India's economy, accounting for over 53-55% of GVA.",
        module: "sectors", topic: "Services", difficulty: "easy",
        chapter: "5"
    },
];

// International Economics MCQs (Topics 46-55)
// Module 3: International (BoP, Trade, Forex, Institutions)

export const INTERNATIONAL_MCQS = [
    {
        id: "ec-mcq-58",
        question: "The Balance of Payments (BoP) of a country is a systematic record of:",
        options: ["All transactions between residents and rest of the world", "Only trade in goods", "Government external debt", "Foreign exchange reserves movement"],
        correctAnswer: 0,
        explanation: "BoP records all economic transactions between residents of a country and the rest of the world in a specific period (usually a year).",
        module: "international", topic: "BoP", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-59",
        question: "Which of the following are components of the 'Current Account' of BoP?\n1. Trade in Goods (Visible Trade)\n2. Trade in Services (Invisible Trade)\n3. Transfers (Remittances, Gifts)\n4. Foreign Direct Investment (FDI)",
        options: ["1, 2 and 3 only", "1 and 2 only", "1, 2, 3 and 4", "4 only"],
        correctAnswer: 0,
        explanation: "Current Account includes Trade (Goods/Services), Income (Profit/Interest), and Transfers. FDI/FPI belong to the Capital Account.",
        module: "international", topic: "BoP", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-60",
        question: "If India's imports of goods exceed exports of goods, it is called a:",
        options: ["Trade Deficit", "Trade Surplus", "Current Account Deficit", "Capital Account Deficit"],
        correctAnswer: 0,
        explanation: "Trade Deficit specifically refers to the gap in merchandise (goods) trade. Current Account Deficit includes invisibles too.",
        module: "international", topic: "BoP", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-61",
        question: "Foreign Exchange Reserves in India are composed of:\n1. Foreign Currency Assets (FCA)\n2. Gold\n3. Special Drawing Rights (SDRs)\n4. Reserve Tranche Position (RTP) with IMF",
        options: ["1, 2, 3 and 4", "1 and 2 only", "1, 2 and 3 only", "2 and 4 only"],
        correctAnswer: 0,
        explanation: "All four are components of India's Forex reserves, managed by RBI. FCA is the largest component.",
        module: "international", topic: "Forex", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-62",
        question: "The 'Most Favored Nation' (MFN) principle under WTO implies:",
        options: ["Non-discrimination between trading partners", "Special treatment for developing nations", "Fixed exchange rate maintenance", "Duty-free imports for neighbors"],
        correctAnswer: 0,
        explanation: "MFN means if you grant a special favor to one trading partner, you must do the same for all other WTO members. It ensures non-discrimination.",
        module: "international", topic: "WTO", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-63",
        question: "The 'Bretton Woods Institutions' refers to:",
        options: ["IMF and World Bank", "WTO and UNCTAD", "Asian Development Bank and NDB", "G7 and G20"],
        correctAnswer: 0,
        explanation: "The IMF and the IBRD (part of World Bank) were created at the Bretton Woods conference in 1944.",
        module: "international", topic: "Institutions", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-64",
        question: "Consider the following about Special Drawing Rights (SDRs):\n1. It is a potential claim on the freely usable currencies of IMF members.\n2. Its value is based on a basket of 5 currencies.\n3. All IMF members can use SDRs freely.\nWhich is/are correct?",
        options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "SDRs are not a currency, but a potential claim. Basket: US Dollar, Euro, Chinese Renminbi, Japanese Yen, British Pound. All 190 members participate.",
        module: "international", topic: "IMF", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-65",
        question: "Devaluation of a currency is most likely to:",
        options: ["Make exports cheaper and imports costlier", "Make exports costlier and imports cheaper", "Increase the value of domestic currency", "Have no impact on trade balance"],
        correctAnswer: 0,
        explanation: "Devaluation reduces the value of domestic currency against foreign ones, meaning foreigners need less of their currency to buy our goods (exports cheaper) and we need more of ours to buy theirs (imports costlier).",
        module: "international", topic: "Trade", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-66",
        question: "A 'Currency Swap' agreement between two countries is used to:",
        options: ["Maintain a constant supply of liquidity in foreign currency", "Fix the exchange rate permanently", "Lower interest rates on domestic loans", "Increase exports during a recession"],
        correctAnswer: 0,
        explanation: "Currency swaps are used to ensure availability of foreign currency during liquidity crunches or to pay for imports/debt without draining reserves.",
        module: "international", topic: "Forex", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-67",
        question: "Which WTO agreement provides for rules on intellectual property protection?",
        options: ["TRIPS", "TRIMS", "GATS", "AOA"],
        correctAnswer: 0,
        explanation: "TRIPS (Trade-Related Aspects of Intellectual Property Rights). TRIMS is for investment measures, GATS for services, and AOA for agriculture.",
        module: "international", topic: "WTO", difficulty: "easy",
        chapter: "4"
    },,
    {
        id: "ec-mcq-68",
        question: "The 'Tendulkar Committee' (2009) for poverty measurement in India recommended:",
        options: ["Moving from calorie-based norms to a basket of goods (MRP)", "Using only health indices", "Increasing the daily calorie intake requirement", "Using rural-only poverty lines"],
        correctAnswer: 0,
        explanation: "Tendulkar Committee used a broader basket of goods (food, education, health) and the Mixed Recall Period (MRP) to estimate poverty, moving away from simple calorie counts.",
        module: "social", topic: "Poverty", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-69",
        question: "The Multi-dimensional Poverty Index (MPI) published by UNDP and OPHI uses which three dimensions?",
        options: ["Health, Education, Standard of Living", "Income, Occupation, Housing", "Education, Nutrition, Assets", "Mortality, Schooling, Electricity"],
        correctAnswer: 0,
        explanation: "MPI dimensions are Health (Child mortality, Nutrition), Education (Years of schooling, attendance), and Standard of Living (Cooking fuel, sanitation, water, electricity, floor, assets).",
        module: "social", topic: "Poverty", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-70",
        question: "Which of the following describes 'Structural Unemployment'?",
        options: ["Mismatch between skills of workers and jobs available", "Temporary unemployment between jobs", "Unemployment during economic recession", "Unemployment due to weather cycles"],
        correctAnswer: 0,
        explanation: "Structural unemployment is a long-term form of unemployment caused by a mismatch between the skills that workers in the economy can offer and the skills demanded of workers by employers.",
        module: "social", topic: "Employment", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-71",
        question: "The 'Demographic Dividend' in India is expected to peak around:",
        options: ["2041", "2025", "2030", "2055"],
        correctAnswer: 0,
        explanation: "India's working-age population is expected to peak at 59% of the total population by 2041, providing a multi-decadal growth opportunity.",
        module: "social", topic: "Demographics", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-72",
        question: "Under MGNREGA, if work is not provided within 15 days of application, the applicant is entitled to:",
        options: ["Unemployment allowance", "Double wages later", "Free food grains", "Priority in NEXT 100 days"],
        correctAnswer: 0,
        explanation: "Under MGNREGA, the state must provide work within 15 days, failing which an unemployment allowance must be paid to the applicant.",
        module: "social", topic: "Employment", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-73",
        question: "The National Education Policy (NEP) 2020 replaces the previous 10+2 structure with:",
        options: ["5+3+3+4 structure", "5+4+3+3 structure", "3+3+4+5 structure", "4+3+3+5 structure"],
        correctAnswer: 0,
        explanation: "NEP 2020 introduces the 5+3+3+4 structure (Foundational, Preparatory, Middle, and Secondary stages).",
        module: "social", topic: "Education", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-74",
        question: "The 'Lorenz Curve' is a graphical representation of:",
        options: ["Wealth/Income distribution in a population", "Inflation vs Unemployment", "Tax rate vs Tax revenue", "GDP growth over time"],
        correctAnswer: 0,
        explanation: "The Lorenz curve shows the proportion of total income or wealth of a population that is possessed by individual members. The gap between it and the line of equality represents inequality.",
        module: "social", topic: "Inequality", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-75",
        question: "The 'Jan Dhan-Aadhaar-Mobile' (JAM) Trinity is aimed at:",
        options: ["Ensuring direct benefit transfer (DBT) and financial inclusion", "Increasing smartphone usage among poor", "Digital identity for all citizens", "Universal Basic Income implementation"],
        correctAnswer: 0,
        explanation: "JAM trinity uses bank accounts (Jan Dhan), unique ID (Aadhaar), and mobile numbers to ensure social benefits reach the intended beneficiaries directly and transparently.",
        module: "social", topic: "Financial Inclusion", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-76",
        question: "Ayushman Bharat PM-JAY is world's largest health insurance scheme primarily because:",
        options: ["It covers over 50 crore people", "It has highest premium", "It covers all diseases including COVID", "It provides ₹10 lakh per family"],
        correctAnswer: 0,
        explanation: "PM-JAY covers ~10.74 crore families (~50 crore individuals) representing the bottom 40% of the population, providing ₹5 lakh/family/year for secondary and tertiary care.",
        module: "social", topic: "Health", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-77",
        question: "The Gini Coefficient, measuring income inequality, is 1 if:",
        options: ["One person has all the income", "Income is perfectly equally distributed", "The median person has 50% income", "Unemployment is at 100%"],
        correctAnswer: 0,
        explanation: "Gini = 1 (complete inequality) means one person/household has all the income. Gini = 0 (perfect equality) means everyone has equal share.",
        module: "social", topic: "Inequality", difficulty: "medium",
        chapter: "6"
    },,
    {
        id: "ec-mcq-78",
        question: "With reference to the Indian economy, consider the following statements:\n1. If the inflation is too high, RBI is likely to buy government securities.\n2. If the rupee is rapidly depreciating, RBI is likely to sell dollars in the market.\n3. If interest rates in the USA or EU were to fall, that is likely to induce RBI to buy dollars.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // 2 and 3 only
        explanation: "If inflation is high, RBI SELLS G-Secs to absorb liquidity (1 is incorrect). If rupee depreciates, RBI sells USD (2 is correct). If US/EU rates fall, capital flows into India; RBI buys USD to prevent excessive rupee appreciation (3 is correct).",
        module: "macro", topic: "Monetary Policy", difficulty: "hard",
        chapter: "2"
    },
    {
        id: "ec-mcq-79",
        question: "Consider the following statements about 'Core inflation' in India:\n1. It is calculated by excluding the 'food' and 'fuel' groups from CPI.\n2. It represents the long-term trend in price levels.\n3. High core inflation indicates structural issues in the economy.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
        correctAnswer: 2,
        explanation: "All are correct. Core inflation excludes volatile food/fuel components, showing the underlying trend and structural price pressures.",
        module: "macro", topic: "Inflation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-80",
        question: "Which of the following activities constitute 'real sector' in the economy?\n1. Farmers harvesting their crops\n2. Textile mills converting raw cotton into fabrics\n3. A commercial bank lending money to a trading company\n4. A corporate body issuing Rupee Denominated Bonds overseas\nSelect the correct answer:",
        options: ["1 and 2 only", "2, 3 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "Real sector involves production of goods/services (1 and 2). Lending and bond issuance are financial sector activities (3 and 4).",
        module: "macro", topic: "National Income", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-81",
        question: "With reference to the expenditure made by an organisation or a company, which of the following statements is/are correct?\n1. Acquiring new technology is capital expenditure.\n2. Debt financing is considered capital expenditure, while equity financing is considered revenue expenditure.\nSelect the correct answer:",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Technology acquisition is an asset (CapEx). Both debt and equity financing are sources of capital, not expenditures in this context.",
        module: "macro", topic: "Fiscal Policy", difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-82",
        question: "Consider the following statements regarding the 'Gini Coefficient':\n1. It measures the degree of income inequality in a population.\n2. A coefficient of zero indicates perfect equality.\n3. Increasing Gini coefficient over time indicates rising inequality.\nWhich of the above are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "All statements are correct definitions and properties of the Gini coefficient.",
        module: "social", topic: "Inequality", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-83",
        question: "In India, 'Capital Formation' is traditionally defined as:",
        options: ["Net addition to stock of real productive assets", "Increase in share capital of private companies", "Total savings in the economy", "Government infrastructure spending only"],
        correctAnswer: 0,
        explanation: "Capital formation refers to the net addition to the stock of real assets like machinery, equipment, buildings, and infrastructure that enhance productive capacity.",
        module: "macro", topic: "National Income", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-84",
        question: "The 'Base Effect' in the context of inflation measurement refers to:",
        options: ["Impact of previous year's price levels on current year's inflation rate", "Influence of indirect taxes on prices", "Effect of money supply on base prices", "Variation in wholesale vs retail prices"],
        correctAnswer: 0,
        explanation: "Base effect: If the price index in the base period (previous year) was abnormally low or high, even a small change in absolute prices results in a high or low inflation rate percent.",
        module: "macro", topic: "Inflation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-85",
        question: "With reference to the Indian economy, 'Collateral Borrowing and Lending Obligations' (CBLO) are instruments of:",
        options: ["Money market", "Stock market", "Forex market", "Bond market"],
        correctAnswer: 0,
        explanation: "CBLO is a money market instrument that allows entities to borrow/lend against the collateral of G-Secs.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-86",
        question: "Consider the following statements about Nil-rating under GST:\n1. It means the tax rate is 0%.\n2. Input Tax Credit (ITC) can be claimed on nil-rated supplies.\n3. Essential food grains are typically nil-rated.\nWhich is/are correct?",
        options: ["1 and 3 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0,
        explanation: "Nil-rated supplies have 0% tax (1). Unlike Zero-rated (exports), ITC CANNOT be claimed on nil-rated supplies (2 is incorrect). Essential grains are nil-rated (3).",
        module: "macro", topic: "Taxation", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-87",
        question: "Which of the following correctly describes 'Angel Tax' in India?",
        options: ["Tax on capital raised by unlisted companies from investors above fair market value", "Tax on high-net-worth individuals", "Tax on charitable donations", "Subsidy for startups provided by the government"],
        correctAnswer: 0,
        explanation: "Income tax at 30% levied on unlisted companies (mostly startups) when they issue shares to investors at a price higher than the fair market value (FMV).",
        module: "macro", topic: "Taxation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-88",
        question: "In the context of Indian economy, 'Secondary Agriculture' refers to:",
        options: ["Post-harvest activities like processing and marketing", "Livestock farming and dairying", "Cultivation of commercial crops", "Agriculture in dryland areas"],
        correctAnswer: 0,
        explanation: "Secondary agriculture involves value addition to primary agricultural produce through processing, storage, and specialized marketing, aiming to increase farmer income.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-89",
        question: "Which of the following is NOT part of the 'Social Infrastructure' of a country?",
        options: ["Telecommunications network", "Education system", "Public health services", "Safe drinking water and sanitation"],
        correctAnswer: 0,
        explanation: "Telecom is part of 'Economic Infrastructure'. Social infrastructure focuses on human resource development (Education, Health, Sanitation).",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-90",
        question: "The 'L-shaped' recovery in an economy implies:",
        options: ["Economy falls and then stays at a low level for long without recovering", "Rapid fall followed by rapid recovery", "Steady decline over a long period", "Alternating phases of growth and contraction"],
        correctAnswer: 0,
        explanation: "L-shaped recovery: A persistent slump where the economy fails to return to its previous trend growth for a very long time after a recession.",
        module: "macro", topic: "National Income", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-91",
        question: "The 'Phillips Curve' depicts the relationship between:",
        options: ["Rate of inflation and rate of unemployment", "Income level and inequality", "Tax rate and tax revenue", "Govt spending and GDP"],
        correctAnswer: 0,
        explanation: "Phillips Curve shows an inverse relationship between inflation and unemployment (short-run trade-off).",
        module: "macro", topic: "Inflation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-92",
        question: "Consider the following statements about 'Prompt Corrective Action' (PCA) framework:\n1. It is a framework under which RBI monitors weak banks.\n2. It triggers based on CRAR, Net NPA, and Return on Assets.\n3. It only applies to public sector banks.\nWhich is/are correct?",
        options: ["1 and 2 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0,
        explanation: "PCA is for monitoring weak banks (1). Triggers are CRAR, NPA levels, and profitability (2). It applies to ALL commercial banks except RRBs (3 is incorrect).",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-93",
        question: "The 'Financial Stability Report' (FSR) is published by:",
        options: ["Reserve Bank of India", "World Bank", "IMF", "Ministry of Finance"],
        correctAnswer: 0,
        explanation: "RBI publishes the bi-annual FSR, which assesses the health of India's financial system.",
        module: "macro", topic: "Banking", difficulty: "easy",
        chapter: "2"
    },
    {
        id: "ec-mcq-94",
        question: "Which of the following is an example of an 'Indirect Tax'?",
        options: ["Customs Duty", "Corporate Tax", "Income Tax", "Securities Transaction Tax"],
        correctAnswer: 0,
        explanation: "Customs Duty is an indirect tax (incidence passed to consumer). Others are direct taxes (paid directly by the entity).",
        module: "macro", topic: "Taxation", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-95",
        question: "The 'Kuznets Curve' suggests that as an economy develops:",
        options: ["Inequality first increases and then decreases", "Inequality only decreases", "Inflation only increases", "Unemployment only decreases"],
        correctAnswer: 0,
        explanation: "Kuznets hypothesis: Economic growth initially leads to increased inequality which peaks and then decreases as the country matures.",
        module: "social", topic: "Inequality", difficulty: "hard",
        chapter: "6"
    },
    {
        id: "ec-mcq-96",
        question: "What is the primary objective of the 'Insolvency and Bankruptcy Code' (IBC)?",
        options: ["Maximization of value of assets and time-bound resolution", "Liquidating all loss-making companies", "Protecting company directors from lawsuits", "Nationalizing defaulting banks"],
        correctAnswer: 0,
        explanation: "IBC focuses on reorganization and insolvency resolution of corporate persons, partnership firms and individuals in a time-bound manner for maximization of value of assets.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-97",
        question: "In India, 'Narrow Money' refers to:",
        options: ["M1", "M2", "M3", "M0"],
        correctAnswer: 0,
        explanation: "M1 is Narrow Money. M3 is Broad Money. M0 is Reserve Money.",
        module: "macro", topic: "Money Supply", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-98",
        question: "The 'Money Multiplier' increases with:",
        options: ["Decrease in Cash Reserve Ratio (CRR)", "Increase in CRR", "Increase in Cash-to-Deposit ratio", "Increase in SLR"],
        correctAnswer: 0,
        explanation: "Money Multiplier = 1/CRR (simplified). Lower reserve requirements (lower CRR/SLR) allow banks to create more credit, increasing the multiplier.",
        module: "macro", topic: "Money Supply", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-99",
        question: "Consider the following statements about the 'Green Revolution':\n1. It used High Yielding Variety (HYV) seeds.\n2. It was limited mostly to Punjab, Haryana, and Western UP in the first phase.\n3. It was based on 'Package Tech' (seeds, chemical fertilizers, irrigation).\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. The Green Revolution was a package deal involving seeds, chemicals, and water, initially restricted to high-potential regions.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-100",
        question: "The 'National Infrastructure Pipeline' (NIP) for 2019-25 has estimated an investment of:",
        options: ["₹111 lakh crore", "₹50 lakh crore", "₹200 lakh crore", "₹10 lakh crore"],
        correctAnswer: 0,
        explanation: "NIP aims for ₹111 lakh crore infrastructure investment over 6 years to reach a $5 trillion economy goal.",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },,
    {
        id: "ec-mcq-101",
        question: "Consider the following statements regarding 'Purchasing Power Parity' (PPP) exchange rates:\n1. It is calculated by comparing the prices of the same basket of goods and services in different countries.\n2. India is the 3rd largest economy in the world in terms of PPP.\n3. PPP exchange rates are used for International Monetary Fund (IMF) quota calculations.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "1 and 2 are correct. PPP exchange rates are NOT typically used for IMF quota calculations (market exchange rates are preferred).",
        module: "international", topic: "BoP", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-102",
        question: "With reference to 'Special Drawing Rights' (SDRs), consider the following statements:\n1. It is a potential claim on the freely usable currencies of IMF members.\n2. The value of SDR is based on a basket of 5 currencies including the Chinese Renminbi.\n3. The weights of currencies in the SDR basket are fixed for 10 years.\nWhich is/are correct?",
        options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "1 and 2 are correct. The basket and weights are reviewed every 5 (not 10) years by the IMF.",
        module: "international", topic: "IMF", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-103",
        question: "Consider the following statements about 'Public Debt' in India:\n1. Central Government debt includes liabilities like internal debt and external debt.\n2. Liabilities of the state governments are primarily internal.\n3. Public debt in India is managed by the Reserve Bank of India (RBI).\nWhich of the above are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. Internal debt is the massive share of India's total public debt. RBI is the government's debt manager.",
        module: "macro", topic: "Public Debt", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-104",
        question: "With reference to the 'Goods and Services Tax' (GST) Council, consider the following statements:\n1. It is a constitutional body presided over by the Union Finance Minister.\n2. One-third of the total number of members constitute a quorum.\n3. Every decision is taken by a majority of not less than three-fourths of weighted votes of members present.\nWhich are correct?",
        options: ["1 and 3 only", "1 only", "1, 2 and 3", "2 and 3 only"],
        correctAnswer: 0, // 1 and 3
        explanation: "1 is correct. Quorum is one-half (50%) of total members (2 is incorrect). Decision needs 75% majority (3 is correct).",
        module: "macro", topic: "Taxation", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-105",
        question: "Consider the following regarding 'Foreign Direct Investment' (FDI) in India:\n1. FDI in multi-brand retail is allowed up to 51% via government route.\n2. FDI in single-brand retail is allowed up to 100% via automatic route.\n3. FDI in print media is capped at 26%.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "Current policy (as of 2024): Multi-brand 51% (govt), Single-brand 100% (auto), Print media 26% (govt). All correct.",
        module: "international", topic: "Investment", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-106",
        question: "Which of the following describes the 'Laffer Curve'?",
        options: ["Relation between tax rates and tax revenues", "Relation between inflation and unemployment", "Relation between income and inequality", "Relation between population and growth"],
        correctAnswer: 0,
        explanation: "Laffer curve shows that beyond a certain point, increasing tax rates will actually DECREASE tax revenue as it discourages work and increases evasion.",
        module: "macro", topic: "Fiscal Policy", difficulty: "easy",
        chapter: "3"
    },
    {
        id: "ec-mcq-107",
        question: "Consider the following regarding 'Real Effective Exchange Rate' (REER):\n1. It is the weighted average of a country's currency relative to a basket of major currencies, adjusted for inflation.\n2. An increase in REER means the country's exports have become less competitive.\n3. Nominal Effective Exchange Rate (NEER) does not account for inflation differences.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "All correct. REER is the real (inflation-adjusted) competitive position of a currency. Appreciating REER hurts exports.",
        module: "international", topic: "Forex", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-108",
        question: "With reference to 'Priority Sector Lending' (PSL), consider the following:\n1. Commercial banks must lend 40% of net credit to priority sectors.\n2. Agriculture is a mandatory sub-target within PSL.\n3. Foreign banks with fewer than 20 branches are exempt from PSL targets.\nWhich is/are correct?",
        options: ["1 and 2 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0, // 1 and 2
        explanation: "1 and 2 are correct. Foreign banks < 20 branches HAVE PSL targets (40%), but they have flexibility in how they achieve them (3 is incorrect).",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-109",
        question: "The 'M-Pesa' model in Kenya is often cited as a success in:",
        options: ["Financial inclusion through mobile payments", "Micro-irrigation techniques", "Universal healthcare coverage", "E-governance in remote villages"],
        correctAnswer: 0,
        explanation: "M-Pesa is the world-famous case study for mobile-based financial inclusion and cash transfers.",
        module: "social", topic: "Financial Inclusion", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-110",
        question: "Which of the following correctly describes 'Cost-Push Inflation'?",
        options: ["Increase in prices due to rise in wage or raw material costs", "Increase in prices due to excess money supply", "Decrease in prices due to technological improvement", "Unstable prices due to fluctuating interest rates"],
        correctAnswer: 0,
        explanation: "Cost-push inflation occurs when production costs rise, forcing producers to increase selling prices.",
        module: "macro", topic: "Inflation", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-111",
        question: "Consider the following about 'Capital Account Convertibility' (CAC) in India:\n1. It refers to the freedom to convert local currency into foreign currency for capital transactions.\n2. India has FULL capital account convertibility.\n3. The Tarapore Committee (1997) recommended a phased approach to CAC.\nWhich is/are correct?",
        options: ["1 and 3 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0,
        explanation: "1 and 3 are correct. India has full CURRENT account convertibility but only partial CAPITAL account convertibility.",
        module: "international", topic: "Forex", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-112",
        question: "The 'Minimum Alternate Tax' (MAT) was introduced to:",
        options: ["Tax 'zero-tax' companies that show high book profits but nil taxable income", "Increase income tax on high-salaried persons", "Replace corporate tax for small firms", "Discourage foreign imports"],
        correctAnswer: 0,
        explanation: "MAT ensures that companies that take advantage of multiple exemptions and deductions to pay nil tax still pay a minimum percentage on their book profits.",
        module: "macro", topic: "Taxation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-113",
        question: "Which of the following is NOT an objective of the 'Public Distribution System' (PDS) in India?",
        options: ["Maximizing profit for the Food Corporation of India", "Ensuring food security to poor households", "Price stabilization of essential grains", "Providing assured market to farmers (via procurement)"],
        correctAnswer: 0,
        explanation: "FCI is a welfare/strategic body, not a profit-maximizing entity. Its operations involve massive government subsidies.",
        module: "sectors", topic: "Agriculture", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-114",
        question: "In the context of WTO, 'Blue Box' subsidies are:",
        options: ["Ambiguous subsidies linked to production limit programs", "Highly trade-distorting and must be reduced", "Minimal trade-distorting (green-lighted)", "Direct price support to farmers"],
        correctAnswer: 0,
        explanation: "Blue box: Production-limiting subsidies. Amber box: Trade-distorting. Green box: Non-distorting.",
        module: "international", topic: "WTO", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-115",
        question: "Consider the following about 'India's Foreign Exchange Management Act' (FEMA), 1999:\n1. It replaced the more restrictive FERA (Foreign Exchange Regulation Act).\n2. It treats foreign exchange offenses as civil offenses.\n3. RBI is the primary regulator under FEMA.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "FEMA (1999) shifted the focus from 'regulation' to 'management' and converted criminal offenses of FERA into civil offenses.",
        module: "international", topic: "Forex", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-116",
        question: "What is 'Crowding Out' effect in an economy?",
        options: ["High government borrowing leads to decrease in private investment", "Private companies pushing out state-owned firms", "Urban populations moving to rural areas", "Excessive exports leading to domestic shortage"],
        correctAnswer: 0,
        explanation: "If government borrows excessively, interest rates rise and less credit is available for the private sector, 'crowding out' private investment.",
        module: "macro", topic: "Fiscal Policy", difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-117",
        question: "The 'Base Erosion and Profit Shifting' (BEPS) framework by OECD aims to:",
        options: ["Prevent multinational companies from shifting profits to low-tax jurisdictions", "Lower custom duties globally", "Regulate cryptocurrency trading", "Increase FDI in developing countries"],
        correctAnswer: 0,
        explanation: "BEPS refers to tax planning strategies used by MNCs to exploit gaps in tax rules to artificially shift profits to low or no-tax locations.",
        module: "international", topic: "Taxation", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-118",
        question: "A 'V-shaped' recovery in an economy is characterized by:",
        options: ["A quick and sustained recovery in economic performance after a sharp decline", "Stagnation for many years", "Two consecutive declines separated by a short growth", "Steady growth without any decline"],
        correctAnswer: 0,
        explanation: "V-shaped recovery: Rapid decline followed by an equally rapid and complete recovery to the previous level.",
        module: "macro", topic: "National Income", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-119",
        question: "In India, 'Primary Deficit' is:",
        options: ["Fiscal Deficit - Interest Payments", "Revenue Deficit - Grants", "Fiscal Deficit + Revenue Deficit", "Total Expenditure - Revenue Receipts"],
        correctAnswer: 0,
        explanation: "Primary Deficit = Fiscal Deficit minus Interest Payments on previous loans. It shows current policy stance excluding past burdens.",
        module: "macro", topic: "Fiscal Policy", difficulty: "easy",
        chapter: "3"
    },
    {
        id: "ec-mcq-120",
        question: "Which of the following are 'Invisible' items in the BoP Current Account?\n1. Software exports\n2. Tourism earnings\n3. Remittances from abroad\n4. Import of machinery",
        options: ["1, 2 and 3 only", "1 and 2 only", "4 only", "1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "Software, Tourism, and Remittances are 'invisibles' (services/income/transfers). Machinery is a visible (good).",
        module: "international", topic: "BoP", difficulty: "medium",
        chapter: "4"
    },,
    {
        id: "ec-mcq-121",
        question: "With reference to the 'Digital Rupee' (CBDC), consider the following statements:\n1. It is a sovereign currency issued by the RBI.\n2. It appears as a liability on the RBI's balance sheet.\n3. It is freely convertible against commercial bank money and cash.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "CBDC is a digital form of legal tender (1). It's an RBI liability (2) and is one-to-one exchangeable with cash (3).",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-122",
        question: "Consider the following about 'India's Semiconductor Mission' (ISM):\n1. It provides financial support for setting up semiconductor fabs in India.\n2. It is managed by the Ministry of Electronics and IT (MeitY).\n3. Tata-PSMC and CG Power are among the first approved projects.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "ISM is a massive incentive scheme (1) under MeitY (2). Recent approvals include Tata at Dholera and CG Power at Sanand (3).",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-123",
        question: "The 'Middle-Income Trap' phenomenon in developmental economics refers to:",
        options: ["Rapidly growing economies stagnating at middle-income levels and failing to transition to high-income", "High inflation affecting the middle class", "Middle-income persons paying highest percentage of taxes", "Brain drain from developing nations"],
        correctAnswer: 0,
        explanation: "Economies that reach middle-income levels but lose their competitive edge (cheap labor) and fail to innovate enough to reach high-income status.",
        module: "social", topic: "Development", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-124",
        question: "Consider the following regarding 'Sovereign Green Bonds':\n1. They are issued by the government to fund environmentally sustainable projects.\n2. The interest on these bonds is typically tax-free.\n3. They were first proposed in the Union Budget 2022-23.\nWhich is/are correct?",
        options: ["1 and 3 only", "1 only", "1, 2 and 3", "2 only"],
        correctAnswer: 0, // 1 and 3
        explanation: "1 and 3 are correct. Green bonds are meant for green infra. Interest is NOT inherently tax-free; it depends on the specific issuance terms (2 is generally incorrect).",
        module: "macro", topic: "Public Debt", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-125",
        question: "The 'Greedflation' term, used recently in global economics, refers to:",
        options: ["Corporates raising prices beyond the increase in their input costs to boost profits", "High demand for luxury goods", "Inflation caused by excessive government spending", "Rapid increase in CEO salaries during high inflation"],
        correctAnswer: 0,
        explanation: "Profit-led inflation where companies use the excuse of general inflation to hike prices even more and bag record profits.",
        module: "macro", topic: "Inflation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-126",
        question: "With reference to 'One Nation One Subscription' (ONOS) policy of India, consider the following:\n1. It aims to provide universal access to scientific journals for all researchers in India.\n2. It is an initiative of the Ministry of Science and Technology.\n3. It will cover all state and central universities.\nWhich is/are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 only"],
        correctAnswer: 0,
        explanation: "All correct. ONOS is a landmark move to centralize journal access, reducing individual costs for universities and researchers.",
        module: "social", topic: "Education", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-127",
        question: "The 'Strategic Autonomy' in India's economic policy refers to:",
        options: ["Developing domestic capability to avoid dependence on single sources for critical supplies", "Complete ban on imports from neighboring countries", "Fixing the exchange rate without RBI intervention", "Nationalizing all critical infrastructure"],
        correctAnswer: 0,
        explanation: "Avoiding over-dependence (e.g., on China) by building internal resilient supply chains and diversified partnerships.",
        module: "international", topic: "Trade", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-128",
        question: "Consider the following regarding 'VGF' (Viability Gap Funding):\n1. It is provided for infrastructure projects that are socially desirable but not commercially viable.\n2. It is typically provided as a one-time grant.\n3. It is capped at 20% of the total project cost by the GOI.\nWhich is/are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "VGF supports PPP projects. GOI typically gives 20% grant, and another 20% can come from the line ministry/state (total ~40% max).",
        module: "sectors", topic: "Infrastructure", difficulty: "hard",
        chapter: "5"
    },
    {
        id: "ec-mcq-129",
        question: "The 'K-shaped' recovery after the pandemic implies:",
        options: ["Sectors or population groups recovering at different speeds or in different directions", "Rapid growth for everyone", "Extended recession followed by a boom", "No recovery for at least 5 years"],
        correctAnswer: 0,
        explanation: "Different segments (e.g., tech vs hospitality, rich vs poor) diverge, one part recovering (upward arm) and one staying down (downward arm).",
        module: "macro", topic: "National Income", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-130",
        question: "In the context of the Indian economy, 'Blue Economy 2.0' focuses on:",
        options: ["Sustainable development of ocean resources and climate-resilient coastal management", "Improving the efficiency of public sector banks", "Increasing production of blue berries", "Expanding the digital rupee pilot"],
        correctAnswer: 0,
        explanation: "Blue Economy refers to the sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystem.",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },,
    {
        id: "ec-mcq-131",
        question: "Which of the following is the difference between GNP and GDP?",
        options: ["Net Factor Income from Abroad (NFIA)", "Indirect Taxes", "Depreciation", "Subsidies"],
        correctAnswer: 0,
        explanation: "GNP = GDP + NFIA. GDP is based on location (within borders), while GNP is based on ownership/citizenship.",
        module: "macro", topic: "National Income", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-132",
        question: "Transfer payments (like old-age pensions) are:",
        options: ["Excluded from National Income as no production occurs", "Included as a part of government expenditure in GDP", "Taxed at a higher rate", "Counted only in the expenditure method"],
        correctAnswer: 0,
        explanation: "Transfer payments are one-way payments without any corresponding exchange of goods or services, so they are not counted in National Income.",
        module: "macro", topic: "National Income", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-133",
        question: "The 'High Powered Money' in an economy is composed of:",
        options: ["Currency held by public + Cash reserves of banks with RBI + Other deposits with RBI", "M3 money supply", "Gold reserves only", "Total demand deposits only"],
        correctAnswer: 0,
        explanation: "High-powered money (M0 or Reserve Money) is the base upon which the entire money supply is built.",
        module: "macro", topic: "Money Supply", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-134",
        question: "If the 'Incremental Capital-Output Ratio' (ICOR) of an economy is increasing, it indicates:",
        options: ["The economy is becoming less efficient in using capital", "Efficiency is increasing", "Inflation is rising", "Savings rate is falling"],
        correctAnswer: 0,
        explanation: "ICOR = (Investment / Change in Output). A higher ICOR means more capital is needed to produce one unit of output, suggesting lower efficiency.",
        module: "macro", topic: "National Income", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-135",
        question: "The 'Tobin Tax' is proposed for:",
        options: ["Taxing short-term cross-border currency transactions to discourage speculation", "Taxing environment-polluting industries", "A tax on internet transactions", "Taxing the income of multinational companies"],
        correctAnswer: 0,
        explanation: "Proposed by James Tobin, it's a small tax on every foreign exchange transaction to reduce volatility and curb short-term speculation.",
        module: "international", topic: "Taxation", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-136",
        question: "Which of the following describes 'Stagflation'?",
        options: ["High inflation combined with high unemployment and stagnant growth", "Very high inflation only", "High growth with low inflation", "Deflation combined with high unemployment"],
        correctAnswer: 0,
        explanation: "Stagflation (Stagnation + Inflation) is a situation where the inflation rate is high, the economic growth rate slows, and unemployment remains steadily high.",
        module: "macro", topic: "Inflation", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-137",
        question: "The 'Base Year' for the current series of GDP and WPI in India is:",
        options: ["2011-12", "2004-05", "2015-16", "1999-2000"],
        correctAnswer: 0,
        explanation: "The base year for GDP, WPI, and IIP in the current series is 2011-12. For CPI, it is 2012.",
        module: "macro", topic: "National Income", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-138",
        question: "A 'Fiscal Marksmanship' refers to:",
        options: ["The accuracy of the government's forecasts for revenue and expenditure", "The ability to keep fiscal deficit at 3%", "The timing of tax collection", "The impact of taxation on economic growth"],
        correctAnswer: 0,
        explanation: "Fiscal marksmanship measures the difference between what's budgeted (BE) and what's actually realized (RE/Actuals). High marksmanship means low forecasting error.",
        module: "macro", topic: "Fiscal Policy", difficulty: "hard",
        chapter: "3"
    },
    {
        id: "ec-mcq-139",
        question: "Consider the following about 'Gilt-edged' securities:\n1. They are issued by the government.\n2. They are considered safe and risk-free.\n3. They are traded in the money market.\nWhich are correct?",
        options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Gilt-edged refers to high-grade (govt) bonds (1). Since govt rarely defaults, they are essentially risk-free (2). They are capital market instruments, not money market (3 is generally incorrect).",
        module: "macro", topic: "Public Debt", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-140",
        question: "The 'Heckscher-Ohlin' theory of international trade focuses on:",
        options: ["Factor endowments (land, labor, capital) of countries", "Technological differences", "Consumer preferences", "Transportation costs"],
        correctAnswer: 0,
        explanation: "Countries will export goods that use their abundant and cheap factor(s) and import goods that use their scarce factor(s).",
        module: "international", topic: "Trade", difficulty: "hard",
        chapter: "4"
    },,
    {
        id: "ec-mcq-141",
        question: "Which of the following describes 'Zero Budget Natural Farming' (ZBNF), advocated in recent budgets?",
        options: ["Farming without chemical fertilizers and pesticides, using only locally available resources", "Farming with free irrigation from the government", "A scheme where farmers pay zero tax", "Exporting 100% of agricultural produce"],
        correctAnswer: 0,
        explanation: "ZBNF aims to reduce input costs and debt through natural inputs like 'jeevamrut' (cow dung and urine mixture).",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-142",
        question: "The 'PM-PRANAM' scheme (2023) is intended to:",
        options: ["Reduce the use of chemical fertilizers by incentivizing states effectively", "Provide free tractors to farmers", "Insure all crops including horticulture", "Promote organic honey production"],
        correctAnswer: 0,
        explanation: "PRANAM: Programme for Restoration, Awareness, Nourishment and Amelioration of Mother Earth. It aims to reduce chemical fertilizer subsidy burden.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-143",
        question: "Consider the following about 'PM-VISHWAKARMA' scheme:\n1. It targets traditional artisans and craftspeople.\n2. It provides credit support at a concessional interest rate of 5%.\n3. It offers skill upgradation and tool kit incentives.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. It's a comprehensive support scheme for 18 traditional trades like carpenters, blacksmiths, barbers, etc.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-144",
        question: "The 'Maharatna' status for CPSEs (Central Public Sector Enterprises) allows the board to invest in a single project up to:",
        options: ["₹5,000 crore", "₹1,000 crore", "100% of net worth", "Unlimited amount"],
        correctAnswer: 0,
        explanation: "Maharatnas have the highest financial autonomy. They can undertake projects up to ₹5,000 cr or 15% of net worth (whichever is lower) without govt approval.",
        module: "sectors", topic: "Industry", difficulty: "hard",
        chapter: "5"
    },
    {
        id: "ec-mcq-145",
        question: "The 'Production Linked Incentive' (PLI) scheme for IT hardware covers which of the following products?\n1. Laptops\n2. Tablets\n3. Servers\n4. Ultra Small Form Factor (USFF) PCs\nSelect the correct answer:",
        options: ["1, 2, 3 and 4", "1 and 3 only", "2 and 4 only", "1 only"],
        correctAnswer: 0,
        explanation: "The IT Hardware PLI 2.0 covers all these computing categories to boost domestic manufacturing.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-146",
        question: "A 'Sunrise Sector' in an economy is one that:",
        options: ["Is currently in its infancy but has high growth potential", "Is reaching its peak of maturity", "Relies on solar energy", "Is declining and being replaced by tech"],
        correctAnswer: 0,
        explanation: "Sunrise sectors: High-growth industries like green hydrogen, electric vehicles, AI, semiconductors, and fintech.",
        module: "sectors", topic: "Industry", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-147",
        question: "What is the primary objective of 'PM-Gati Shakti'?",
        options: ["Logistics efficiency through integrated infrastructure planning", "Increasing the speed of trains to 160kmph", "Digitizing building approvals", "Fast-tracking startup registration"],
        correctAnswer: 0,
        explanation: "Gati Shakti integrates all infrastructure planning to reduce logistics cost from ~13-14% of GDP to 8%.",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-148",
        question: "Consider the following about 'India's Maritime Amrit Kaal Vision 2047':\n1. It aims to develop a carbon-neutral shipping sector.\n2. It targets world-class port infrastructure.\n3. It focuses on Sagarmala 2.0.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "All correct. It is the master plan for the maritime sector for India's 100th independence year.",
        module: "sectors", topic: "Infrastructure", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-149",
        question: "The 'E-Shram' portal is designed for:",
        options: ["Creating a national database of unorganized workers", "Registering startups in agriculture", "A digital marketplace for skilled laborers", "Online grievance redressal for bank employees"],
        correctAnswer: 0,
        explanation: "E-Shram aims to provide social security benefits to ~38 crore unorganized workers (construction, migrants, gig workers).",
        module: "social", topic: "Employment", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-150",
        question: "Which of the following is NOT part of the 'Social Infrastructure' sector?",
        options: ["Steel and cement manufacturing", "Healthcare services", "Education and skill development", "Affordable housing"],
        correctAnswer: 0,
        explanation: "Steel/Cement are 'Heavy Industry' (Core economic). Social infra focuses on human capital.",
        module: "sectors", topic: "Infrastructure", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-151",
        question: "The 'Unified Pension Scheme' (UPS) introduced in 2024 offers fixed pension of:",
        options: ["50% of average basic pay of last 12 months", "30% of lifetime earnings", "100% of last drawn salary", "Fixed ₹50,000 per month"],
        correctAnswer: 0,
        explanation: "UPS provides 50% of average basic pay of the last 12 months for 25+ years of service.",
        module: "social", topic: "Employment", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-152",
        question: "The 'Aspirational Districts Programme' (ADP), launched by NITI Aayog, aims to:",
        options: ["Improve socio-economic status of most underdeveloped districts", "Promote IIT/IIM coaching in rural towns", "Increase exports from select SEZ districts", "Develop smart cities in 5 states only"],
        correctAnswer: 0,
        explanation: "ADP focuses on 112 districts lagging in health, education, agriculture, etc., using competitive federalism.",
        module: "social", topic: "Development", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-153",
        question: "The 'Ujjwala 2.0' scheme provides free LPG connection to:",
        options: ["Adult women of BPL households", "All rural households", "Small urban shops only", "State government employees"],
        correctAnswer: 0,
        explanation: "Ujjwala 2.0 (launched in 2021) expanded the original scheme to include migrant families and those left out in the first phase.",
        module: "social", topic: "Social Development", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-154",
        question: "Consider the following regarding 'National Green Hydrogen Mission':\n1. It aims to make India a global hub for production and export of green hydrogen.\n2. It targets 5 MMT production capacity per year by 2030.\n3. It will help decouple the economy from fossil fuels.\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. 5 MMT = Million Metric Tonnes. It is the key to India's energy self-reliance.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-155",
        question: "Which of the following correctly describes 'Blue-chip' company?",
        options: ["A nationally recognized, well-established, and financially sound company", "A company in the tech sector only", "A company that produces ocean resources", "A startup with over $1 billion valuation"],
        correctAnswer: 0,
        explanation: "Blue-chip stocks are considered safe and stable investments in the stock market (e.g., Reliance, TCS, HDFC Bank).",
        module: "sectors", topic: "Industry", difficulty: "easy",
        chapter: "5"
    },,
    {
        id: "ec-mcq-156",
        question: "With reference to 'Carbon Credits', consider the following statements:\n1. One carbon credit is equivalent to one tonne of carbon dioxide (CO2) reduced.\n2. Trading of carbon credits is permitted under the Paris Agreement (Article 6).\n3. India has launched its own Carbon Credit Trading Scheme (CCTS) in 2023.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "All correct. 1 credit = 1 tonne CO2. International/domestic markets are key tools for net-zero goals.",
        module: "international", topic: "Environment", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-157",
        question: "The 'Environmental Kuznets Curve' shows the relationship between:",
        options: ["Environmental degradation and per capita income", "Carbon emissions and population growth", "Tax rate and environmental regulation", "Biodiversity loss and trade volume"],
        correctAnswer: 0,
        explanation: "It suggests environmental quality first deteriorates and then improves as income increases (inverted U-shape).",
        module: "social", topic: "Environment", difficulty: "hard",
        chapter: "6"
    },
    {
        id: "ec-mcq-158",
        question: "In the context of the global economy, 'Dedollarization' refers to:",
        options: ["Reducing reliance on the US dollar as a reserve currency and medium of exchange", "Banning US dollar notes in a country", "Total collapse of the US economy", "A policy to fix all exchange rates to gold"],
        correctAnswer: 0,
        explanation: "Increasing use of local currencies (e.g., Rupee, Yuan) for trade to reduce exposure to US dollar volatility and sanctions.",
        module: "international", topic: "Global Trends", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-159",
        question: "The 'Middle Income Trap' is a situation where an economy:",
        options: ["Slows down after reaching middle-income status and fails to reach high-income", "Has too many middle-income workers", "Experiences high inflation only for middle class", "Can only export primary products"],
        correctAnswer: 0,
        explanation: "Divergence happens where wages rise but productivity doesn't keep up, trapping the country in the middle tier.",
        module: "social", topic: "Development", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-160",
        question: "Consider the following about 'India's Foreign Exchange Management Act' (FEMA), 1999:\n1. It treats exchange regulation as a civil offense.\n2. It aims to facilitate external trade and payments.\n3. RBI acts as the regulator.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "FEMA replaced FERA (criminal) and is a management-oriented law (civil). All correct.",
        module: "international", topic: "Forex", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-161",
        question: "With reference to the 'World Economic Outlook', who publishes this report?",
        options: ["International Monetary Fund (IMF)", "World Bank", "WTO", "WEF"],
        correctAnswer: 0,
        explanation: "IMF publishes WEO twice a year (April and October).",
        module: "international", topic: "Reports", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-162",
        question: "Consider the following about 'G20':\n1. It includes 19 countries and the European Union.\n2. The African Union became a permanent member in 2023.\n3. G20 accounts for ~85% of world GDP.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. African Union was admitted during India's presidency.",
        module: "international", topic: "G20", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-163",
        question: "In India, 'Financial Inclusion' is measured using which of the following index by RBI?",
        options: ["FI-Index", "HDI", "CPI-IW", "WPI"],
        correctAnswer: 0,
        explanation: "RBI's FI-Index (Financial Inclusion Index) measures three parameters: Access, Usage, and Quality.",
        module: "social", topic: "Financial Inclusion", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-164",
        question: "The 'Multiplier Effect' in an economy is defined as:",
        options: ["Increase in final national income resulting from an initial injection of spending", "Total money supply growth due to credit creation", "Impact of inflation on fixed income groups", "Ratio of capital to output"],
        correctAnswer: 0,
        explanation: "When government or private entities spend, the final increase in national income is often a multiple of the initial spending.",
        module: "macro", topic: "National Income", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-165",
        question: "What is 'Crowding In' effect?",
        options: ["Increase in private investment fueled by government spending on infrastructure", "Government taking over private businesses", "People moving to big cities for jobs", "Foreigners investing in stock market"],
        correctAnswer: 0,
        explanation: "Counter to 'crowding out', spending on core infra 'crowds in' (attracts) private investment by reducing costs and increasing demand.",
        module: "macro", topic: "Fiscal Policy", difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-166",
        question: "Consider the following about 'Angel Tax' (Sec 56(2)(viib)) in India:\n1. It was levied on capital raised by startups at a premium.\n2. It has been proposed for abolition in Union Budget 2024-25.\n3. It aimed to curb money laundering.\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "1 and 3 only"],
        correctAnswer: 0,
        explanation: "All correct. To promote startup ecosystem, FM proposed to abolish it for all classes of investors.",
        module: "macro", topic: "Taxation", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-167",
        question: "With reference to 'Blue Bonds', they are instruments to fund:",
        options: ["Sustainable marine and ocean-based projects", "Renewable energy from wind", "High-tech software companies", "Educational loans for higher studies"],
        correctAnswer: 0,
        explanation: "Blue bonds are used to protect and manage marine ecosystems sustainably (like green bonds for land).",
        module: "international", topic: "Forex", difficulty: "easy",
        chapter: "4"
    },
    {
        id: "ec-mcq-168",
        question: "The 'Special Category Status' (SCS) for states in India allows for:",
        options: ["90% center-10% state funding on central schemes", "Exemption from all direct taxes for residents", "Freedom to frame own laws on state subjects", "Dual citizenship for residents"],
        correctAnswer: 0,
        explanation: "SCS states (like NE states) get 90% grant for centrally sponsored schemes, whereas it's 60% for others.",
        module: "macro", topic: "Fiscal Policy", difficulty: "medium",
        chapter: "3"
    },
    {
        id: "ec-mcq-169",
        question: "Consider the following about 'New Development Bank' (NDB):\n1. It was established by BRICS nations.\n2. It is headquartered in Shanghai, China.\n3. India is a founding member and has 1/5th voting share.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "1 and 3 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "All are correct. BRICS (Brazil, Russia, India, China, South Africa) founded it with equal shares initially.",
        module: "international", topic: "Institutions", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-170",
        question: "The 'Triffin Dilemma' is a paradox in international economics regarding:",
        options: ["Reserve currency issuer needing to run deficits to provide global liquidity", "Inflation vs Unemployment trade-off", "Tax rates vs Tax revenues", "Income growth vs Inequality"],
        correctAnswer: 0,
        explanation: "An issuer of global reserve currency (like USA) must provide enough liquidity to the world (run trade deficits), which eventually makes its own currency vulnerable.",
        module: "international", topic: "Global Trends", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-171",
        question: "What is 'Veblen Good'?",
        options: ["A good for which demand increases as price increases", "A good for which demand decreases as price increases", "A good that is used for public utility", "A good with zero marginal utility"],
        correctAnswer: 0,
        explanation: "Status symbols (luxury cars, designer bags) where higher price makes them more desirable to indicate wealth.",
        module: "macro", topic: "Core Concepts", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-172",
        question: "With reference to 'Fiscal Drag', it occurs when:",
        options: ["Inflation pushes taxpayers into higher tax brackets, increasing tax burden", "Government spending slows down", "Public debt becomes unsustainable", "Tax collection efficiency falls"],
        correctAnswer: 0,
        explanation: "Inflation + Progressive taxes = higher taxes for individuals without real increase in their purchasing power, 'dragging' down the economy.",
        module: "macro", topic: "Taxation", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-173",
        question: "The 'Okun's Law' describes the relationship between:",
        options: ["GDP growth and unemployment", "Investment and savings", "Imports and exports", "Population growth and resources"],
        correctAnswer: 0,
        explanation: "It suggests that for every 1% increase in unemployment above its natural rate, GDP will be ~2% lower than its potential.",
        module: "macro", topic: "Core Concepts", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-174",
        question: "What is 'Mundell-Fleming Model' used for?",
        options: ["Analyzing an open economy under different exchange rate regimes", "Measuring poverty and inequality", "Predicting stock market crashes", "Managing agricultural output"],
        correctAnswer: 0,
        explanation: "It explains the interplay between exchange rates, interest rates, and output in an open economy with capital flows.",
        module: "international", topic: "Core Concepts", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-175",
        question: "Consider the following regarding 'Real Effective Interest Rate':\n1. It is the nominal interest rate minus the expected inflation rate.\n2. It reflects the real cost of borrowing.\n3. Negative real interest rate happens when inflation is higher than nominal rate.\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "Fisher Equation: Real Rate ≈ Nominal Rate - Inflation. All correct.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-176",
        question: "Which of the following is an example of 'Quasi-Fiscal' activity?",
        options: ["Public sector banks providing subsidized loans on govt directions", "Direct transfer of subsidies by government", "Launching a new highway project", "Issuing new currency notes"],
        correctAnswer: 0,
        explanation: "Activities of central bank or PSUs that have the same effect as a tax or subsidy but are not recorded in the official budget.",
        module: "macro", topic: "Fiscal Policy", difficulty: "hard",
        chapter: "3"
    },
    {
        id: "ec-mcq-177",
        question: "The 'Ricardian Equivalence' theory suggests that:",
        options: ["Debt-financed government spending today will lead to higher taxes in the future", "Imports and exports should always balance", "Tax rates should be uniform", "Infrastructure is more important than services"],
        correctAnswer: 0,
        explanation: "It posits that consumers realize govt debt today = taxes tomorrow, so they save more now, neutralizing the impact of govt spending on total demand.",
        module: "macro", topic: "Fiscal Policy", difficulty: "hard",
        chapter: "3"
    },
    {
        id: "ec-mcq-178",
        question: "In the context of the Indian economy, 'Secondary Agriculture' refers to:",
        options: ["Post-harvest activities like processing and marketing", "Livestock farming and dairying", "Cultivation of commercial crops", "Agriculture in dryland areas"],
        correctAnswer: 0,
        explanation: "Value-addition activities like dairy, processing, honey production, etc.",
        module: "sectors", topic: "Agriculture", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-179",
        question: "The 'Double Deficit' problem refers to a situation where a country has simultaneous:",
        options: ["Fiscal Deficit and Current Account Deficit", "Revenue Deficit and Primary Deficit", "Trade Deficit and Export Deficit", "High Inflation and Low Growth"],
        correctAnswer: 0,
        explanation: "High govt borrowing (Fiscal) often correlates with high imports (Current Account), leading to macro instability.",
        module: "macro", topic: "BoP", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-180",
        question: "Which of the following describes 'Abenomics'?",
        options: ["Japanese policy of Three Arrows: Monetary easing, Fiscal stimulus, and Structural reforms", "China's belt and road initiative", "USA's trade war with China", "India's policy of Atmanirbhar Bharat"],
        correctAnswer: 0,
        explanation: "Policy named after Shinzo Abe to pull Japan out of long-term deflation.",
        module: "international", topic: "Global Trends", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-181",
        question: "In the context of SEBI, 'Front-running' is:",
        options: ["Using non-public info to buy/sell securities before a large customer order", "Investing in startups", "Lending money to stock brokers", "Publishing market research reports"],
        correctAnswer: 0,
        explanation: "An illegal practice where a broker uses knowledge of pending large trades to profit from the price movement they will cause.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-182",
        question: "Consider the following about 'India's Sovereign Gold Bond' (SGB) scheme:\n1. It allows individuals to invest in gold without physical storage.\n2. Bonds carry a fixed interest of 2.50% p.a.\n3. Capital gains on redemption are tax-exempt for individuals.\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "All correct. It acts as a gold alternative while giving interest and tax benefits.",
        module: "macro", topic: "Banking", difficulty: "medium",
        chapter: "2"
    },
    {
        id: "ec-mcq-183",
        question: "The 'Purchasing Managers' Index' (PMI) of over 50 indicates:",
        options: ["Expansion in the sector", "Contraction in the sector", "Stable price levels", "High inflation"],
        correctAnswer: 0,
        explanation: "PMI is a lead indicator. > 50 = Expansion, < 50 = Contraction.",
        module: "sectors", topic: "Industry", difficulty: "easy",
        chapter: "5"
    },
    {
        id: "ec-mcq-184",
        question: "What is 'Dutch Disease' in economics?",
        options: ["Rapid development of one sector leads to decline in others", "A disease affecting tulip plants", "High inflation in European nations", "Total dependence on foreign aid"],
        correctAnswer: 0,
        explanation: "Typically, discovery of natural resources (oil/gas) leads to currency appreciation, making manufacturing/farming less competitive.",
        module: "international", topic: "Global Trends", difficulty: "hard",
        chapter: "4"
    },
    {
        id: "ec-mcq-185",
        question: "Consider the following about 'Open Network for Digital Commerce' (ONDC):\n1. It is a set of open protocols for unbundling and interoperability in e-commerce.\n2. It aims to prevent monopolies in the digital market.\n3. It is an initiative of DPIIT, Ministry of Commerce.\nWhich are correct?",
        options: ["1, 2 and 3", "1 and 2 only", "2 and 3 only", "1 only"],
        correctAnswer: 0,
        explanation: "All correct. It is the UPI equivalent for e-commerce.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-186",
        question: "The 'H-Index' in the context of researchers measure:",
        options: ["Productivity and impact of their published work", "Income level of households", "Hospital efficiency", "Hunger in a population"],
        correctAnswer: 0,
        explanation: "H-index is a metric that measures both the productivity and citation impact of a scientist's publications.",
        module: "social", topic: "Education", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-187",
        question: "What is 'Tax Buoyancy'?",
        options: ["Ratio of percentage change in tax collection to percentage change in GDP", "Ability of taxes to float on equity", "Tax rate vs Tax revenue curve", "Impact of inflation on taxes"],
        correctAnswer: 0,
        explanation: "Buoyancy measures how tax collection responds to growth. If tax grows faster than GDP, buoyancy > 1.",
        module: "macro", topic: "Taxation", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-188",
        question: "Which of the following describes 'Gresham's Law'?",
        options: ["Bad money drives out good money from circulation", "Inflation leads to more exports", "Imports reduce domestic prices", "Debt leads to higher interest rates"],
        correctAnswer: 0,
        explanation: "If there are two currencies with same face value but different intrinsic values, people will hoard the 'good' one and use the 'bad' one for trade.",
        module: "macro", topic: "Core Concepts", difficulty: "medium",
        chapter: "1"
    },
    {
        id: "ec-mcq-189",
        question: "The 'Lorenz Curve' never crosses the:",
        options: ["Line of Perfect Equality", "Horizontal Axis", "Vertical Axis", "Laffer Curve"],
        correctAnswer: 0,
        explanation: "The line of perfect equality (45-degree line) is the upper limit for the Lorenz curve.",
        module: "social", topic: "Inequality", difficulty: "easy",
        chapter: "6"
    },
    {
        id: "ec-mcq-190",
        question: "Consider the following regarding 'VGF' (Viability Gap Funding):\n1. It is provided for socially desirable but commercially unviable infra projects.\n2. It is typically a one-time grant.\n3. Capped at 20% of total project cost by the Central Government.\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "VGF is essential for supporting private sector participation in risky infra projects. All correct.",
        module: "sectors", topic: "Infrastructure", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-191",
        question: "With reference to the 'Inclusive Growth', which of the following are its dimensions?\n1. Opportunity creation\n2. Equitable access to opportunities\n3. Social protection for vulnerable groups\n4. Regional balanced development\nSelect the correct answer:",
        options: ["1, 2, 3 and 4", "1, 2 and 3 only", "1 and 3 only", "2 and 4 only"],
        correctAnswer: 0,
        explanation: "Inclusive growth includes economic, social, and regional dimensions to ensure all benefit from growth.",
        module: "social", topic: "Development", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-192",
        question: "The 'NITI Aayog' (National Institution for Transforming India) was established to replace:",
        options: ["Planning Commission", "Finance Commission", "National Development Council", "Inter-State Council"],
        correctAnswer: 0,
        explanation: "Established on Jan 1, 2015, replacing the 65-year-old Planning Commission.",
        module: "macro", topic: "Governance", difficulty: "easy",
        chapter: "1"
    },
    {
        id: "ec-mcq-193",
        question: "In the context of Indian economy, 'Special Economic Zones' (SEZs) are treated as:",
        options: ["Foreign territories for trade operations and duties", "Part of the central government direct control", "Tax-free zones for all citizens", "Industrial parks for heavy machinery only"],
        correctAnswer: 0,
        explanation: "Under the SEZ Act 2005, these zones are treated as 'duty-free enclaves' and 'foreign territories' for the purposes of trade operations, duties and tariffs.",
        module: "sectors", topic: "Industry", difficulty: "medium",
        chapter: "5"
    },
    {
        id: "ec-mcq-194",
        question: "Consider the following about 'National Pension System' (NPS):\n1. It is regulated by PFRDA.\n2. It is based on individual pension accounts (PRAN).\n3. It is mandatory for all central government employees (joined after 2004).\nWhich are correct?",
        options: ["1, 2 and 3", "1 only", "1 and 2 only", "2 and 3 only"],
        correctAnswer: 0,
        explanation: "NPS is a defined contribution scheme. All are correct.",
        module: "social", topic: "Employment", difficulty: "medium",
        chapter: "6"
    },
    {
        id: "ec-mcq-195",
        question: "The 'World Investment Report' is published annually by:",
        options: ["UNCTAD", "World Bank", "IMF", "WTO"],
        correctAnswer: 0,
        explanation: "UNCTAD (United Nations Conference on Trade and Development) publishes the World Investment Report covering FDI trends.",
        module: "international", topic: "Reports", difficulty: "medium",
        chapter: "4"
    },
    {
        id: "ec-mcq-196",
        question: "What is 'Deadweight Loss'?",
        options: ["A loss of economic efficiency when the equilibrium for a good or service is not achieved", "Total agricultural waste", "Loss due to bad loans of banks", "Decrease in GDP during recession"],
        correctAnswer: 0,
        explanation: "Typically caused by market distortions like taxes, subsidies, or monopolies.",
        module: "macro", topic: "Core Concepts", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-197",
        question: "The 'Haig-Simons' definition of income refers to:",
        options: ["Sum of consumption and the change in net worth over a period", "Only wages and salaries", "GNP minus depreciation", "Total government revenue from all sources"],
        correctAnswer: 0,
        explanation: "A comprehensive definition of income used for tax policy analysis.",
        module: "macro", topic: "Core Concepts", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-198",
        question: "Which of the following describes 'Axiom of Completeness' in consumer choice theory?",
        options: ["A consumer can rank all possible consumption bundles", "A consumer always prefers more to less", "Preferences are consistent over time", "Consumption depends only on income"],
        correctAnswer: 0,
        explanation: "One of the fundamental axioms of rational choice (Completeness, Transitivity, Non-Satiation).",
        module: "macro", topic: "Core Concepts", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-199",
        question: "The 'Solow-Swan Model' is a model of:",
        options: ["Long-run economic growth using capital, labor and technology", "Short-run fluctuations in stock prices", "International trade between similar nations", "Agricultural output prediction"],
        correctAnswer: 0,
        explanation: "A key model in neoclassical economics explaining growth through capital accumulation, labor growth, and tech progress.",
        module: "macro", topic: "Core Concepts", difficulty: "hard",
        chapter: "1"
    },
    {
        id: "ec-mcq-200",
        question: "Final Question: The 'Eduecosystem' platform helps students master UPSC patterns primarily through:",
        options: ["Adaptive MCQ practice and deep PYQ analysis", "Watching only video lectures", "Offline coaching only", "Physical books published in 1990s"],
        correctAnswer: 0,
        explanation: "Eduecosystem provides the most advanced digital playground for UPSC aspirants with AI-driven insights and localized MCQ banks.",
        module: "macro", topic: "Social Development", difficulty: "easy",
        chapter: "1"
    },
    // --- Chapter 6: Social Development & Inclusion ---
    {
        id: "ec-mcq-201",
        question: "Which of the following are dimensions used in the Global Multidimensional Poverty Index (MPI) by OPHI and UNDP?\n1. Health\n2. Education\n3. Living Standards\n4. Digital Inclusion",
        options: ["1, 2 and 3 only", "1 and 2 only", "3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "The MPI uses three dimensions: Health (Nutrition, Child Mortality), Education (Years of Schooling, School Attendance), and Living Standards (Cooking Fuel, Sanitation, Water, Electricity, Floor, Assets). Digital inclusion is not a dimension.",
        module: "social", topic: "Poverty", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-202",
        question: "With reference to the 'Demographic Dividend' in India, which of the following statements is/are correct?\n1. It refers to the growth in an economy that is the result of a change in the age structure of a country's population.\n2. India's working-age population is expected to peak around 2040.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Demographic Dividend is the economic growth potential that can result from shifts in a population's age structure. India is currently in this phase, with its working-age population set to peak in the coming decades (~2041).",
        module: "social", topic: "Demographics", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-203",
        question: "The 'Skill India Mission' aims to provide vocational training to how many people by 2022 (initial target)?",
        options: ["10 crore", "40 crore", "50 crore", "25 crore"],
        correctAnswer: 1,
        explanation: "The Skill India Mission was launched with the ambitious target of providing vocational training and certification to 40 crore people by 2022.",
        module: "social", topic: "Employment", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-204",
        question: "Consider the following statements regarding MGNREGA:\n1. It provides a legal guarantee for at least 100 days of employment.\n2. At least one-third of beneficiaries shall be women.\nWhich of the above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "MGNREGA guarantees 100 days of unskilled manual work in a financial year to every rural household. It mandate that at least 1/3rd of the participants must be women.",
        module: "social", topic: "Employment", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-205",
        question: "The 'Aspirational Districts Programme' launched by NITI Aayog focuses on which of the following areas?\n1. Health & Nutrition\n2. Education\n3. Agriculture & Water Resources\n4. Financial Inclusion & Skill Development",
        options: ["1 and 2 only", "1, 2 and 4 only", "1, 2, 3 and 4", "None of these"],
        correctAnswer: 2,
        explanation: "The programme focuses on 5 main themes: Health & Nutrition (30%), Education (30%), Agriculture & Water Resources (20%), Financial Inclusion & Skill Development (10%), and Basic Infrastructure (10%).",
        module: "social", topic: "Inclusion", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-206",
        question: "What is the primary objective of the 'PM-JANMAN' scheme launched recently?",
        options: ["Promotion of Jan Aushadhi Kendras", "Welfare of Particularly Vulnerable Tribal Groups (PVTGs)", "Management of Jan Dhan accounts", "Network of mobile towers in rural areas"],
        correctAnswer: 1,
        explanation: "PM-JANMAN (Pradhan Mantri Janjati Adivasi Nyaya Maha Abhiyan) focuses on 11 critical interventions for PVTGs, including housing, water, and connectivity.",
        module: "social", topic: "Inclusion", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-207",
        question: "The 'Gini Coefficient' is a measure used to represent:",
        options: ["Unemployment rate", "Income inequality", "Inflation level", "Poverty headcount ratio"],
        correctAnswer: 1,
        explanation: "The Gini Coefficient (or Gini Index) is a statistical measure of distribution often used as a gauge of economic inequality, measuring income distribution among a population.",
        module: "social", topic: "Poverty", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-208",
        question: "As per the NEP 2020, the Gross Enrolment Ratio (GER) in higher education is aimed to be raised to what percentage by 2035?",
        options: ["30%", "40%", "50%", "100%"],
        correctAnswer: 2,
        explanation: "NEP 2020 aims to increase the GER in higher education including vocational education from 26.3% (2018) to 50% by 2035.",
        module: "social", topic: "Education", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-209",
        question: "With reference to the 'Pradhan Mantri Matru Vandana Yojana' (PMMVY), consider the following:\n1. It is a direct benefit transfer (DBT) scheme.\n2. It provides cash incentives to pregnant and lactating mothers for the first child only.",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "PMMVY is a DBT scheme. As per the latest revision, it now provides incentives for the second child as well (if it's a girl child), though it started with just the first child.",
        module: "social", topic: "Health", difficulty: "hard", chapter: "6"
    },
    {
        id: "ec-mcq-210",
        question: "Which of the following indices is NOT published by NITI Aayog?",
        options: ["School Education Quality Index (SEQI)", "Health Index", "Composite Water Management Index", "Global Gender Gap Report"],
        correctAnswer: 3,
        explanation: "The Global Gender Gap Report is published by the World Economic Forum (WEF), not NITI Aayog.",
        module: "social", topic: "Inclusion", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-211",
        question: "The 'Sukanya Samriddhi Yojana' is a small deposit scheme for the girl child under which initiative?",
        options: ["Beti Bachao Beti Padhao", "PM Matru Vandana Yojana", "Mahila Shakti Kendra", "Digital India"],
        correctAnswer: 0,
        explanation: "Sukanya Samriddhi Yojana was launched as part of the 'Beti Bachao Beti Padhao' campaign.",
        module: "social", topic: "Inclusion", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-212",
        question: "What is 'Suresh Tendulkar Committee' related to in the Indian economic context?",
        options: ["Banking reforms", "Indirect tax reforms", "Poverty estimation", "MSME definition"],
        correctAnswer: 2,
        explanation: "The Tendulkar Committee (2009) recommended a new methodology for estimating poverty line in India based on Consumption Expenditure.",
        module: "social", topic: "Poverty", difficulty: "easy", chapter: "6"
    },
    {
        id: "ec-mcq-213",
        question: "With reference to the Indian economy, consider the following statements about the Minimum Support Price (MSP):\n1. The current MSP for mandated crops is fixed at 1.5 times the 'A2+FL' cost of production.\n2. The Swaminathan Commission (National Commission on Farmers) recommended fixing MSP at 1.5 times the 'C2' cost.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "The GOI currently uses A2+FL (direct costs + family labor) as the base for 1.5x margin. The Swaminathan report advocated for C2 (Comprehensive cost includes land rent/interest), which would result in higher MSPs.",
        module: "sectors", topic: "Agriculture", difficulty: "hard", chapter: "5"
    },
    {
        id: "ec-mcq-214",
        question: "An increasing trend in domestic inflation relative to inflation in trading partner countries is likely to cause:",
        options: ["An increasing divergence between NEER and REER", "A convergence of NEER and REER", "Appreciation of the domestic currency in real terms (REER)", "Both 1 and 3"],
        correctAnswer: 3,
        explanation: "Higher domestic inflation makes domestic goods expensive, causing REER to rise (appreciation) and creating a wider gap (divergence) between Nominal (NEER) and Real (REER) effective exchange rates.",
        module: "macro", topic: "Inflation", difficulty: "hard", chapter: "1"
    },
    {
        id: "ec-mcq-215",
        question: "The 'Kisan Rin Portal' (KRP), integrated with the Kisan Credit Card (KCC) scheme, aims to:",
        options: ["Digitize claims under the Modified Interest Subvention Scheme (MISS)", "Replace physical KCC cards with digital ones", "Allow farmers to trade G-Secs", "Monitor global fertilizer prices for farmers"],
        correctAnswer: 0,
        explanation: "KRP is a digital platform designed to bring transparency and efficiency in the disbursement and monitoring of interest subvention claims for KCC loans.",
        module: "sectors", topic: "Agriculture", difficulty: "medium", chapter: "5"
    },
    {
        id: "ec-mcq-216",
        question: "A major rigidity in the 'transmission' of monetary policy in India is:",
        options: ["Presence of high interest rates on government-administered Small Savings Schemes", "Frequent changes in the Cash Reserve Ratio", "High levels of Foreign Direct Investment", "Rapid adoption of digital payments"],
        correctAnswer: 0,
        explanation: "Small savings (PPF, NSC, etc.) offer fixed high rates. If banks lower deposit rates significantly, they lose deposits to small savings. This prevents them from lowering lending rates, even if RBI cuts the repo rate.",
        module: "macro", topic: "Monetary Policy", difficulty: "hard", chapter: "2"
    },
    {
        id: "ec-mcq-217",
        question: "The Government recently approved a new Credit Guarantee Scheme for MSMEs permitting collateral-free term loans for:",
        options: ["Purchasing machinery and equipment up to ₹100 crore", "Meeting working capital needs up to ₹5 crore", "Exporting items to EU and USA only", "Buying agricultural land for industrial use"],
        correctAnswer: 0,
        explanation: "Announced in Budget 2024-25, this specific scheme provides guarantee cover for loans up to ₹100 crore per applicant specifically for machinery/equipment purchases.",
        module: "sectors", topic: "MSME", difficulty: "medium", chapter: "5"
    },
    {
        id: "ec-mcq-218",
        question: "Which of the following are components of India's Foreign Exchange (Forex) Reserves?\n1. Foreign Currency Assets (FCA)\n2. Gold\n3. Special Drawing Rights (SDRs)\n4. Reserve Tranche Position (RTP) with IMF",
        options: ["1, 2 and 3 only", "1 and 2 only", "1, 2, 3 and 4", "1, 2 and 4 only"],
        correctAnswer: 2,
        explanation: "All four are official components of the forex reserves managed by the Reserve Bank of India (RBI).",
        module: "macro", topic: "International", difficulty: "easy", chapter: "1"
    },
    {
        id: "ec-mcq-219",
        question: "Consider the following statements about the Standing Deposit Facility (SDF):\n1. It is used by RBI to absorb excess liquidity from the banking system.\n2. Unlike Reverse Repo, it does not require RBI to provide G-Secs as collateral.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Introduced in 2022, SDF is an uncollateralized liquidity absorption tool. It strengthened the floor of the interest rate corridor.",
        module: "macro", topic: "Monetary Policy", difficulty: "medium", chapter: "2"
    },
    {
        id: "ec-mcq-220",
        question: "In the calculation of India's Gross Domestic Product (GDP), the relationship between GDP at Market Prices and GVA at Basic Prices is:",
        options: ["GDP = GVA + Product Taxes - Product Subsidies", "GDP = GVA - Product Taxes + Product Subsidies", "GDP = GVA for India", "GDP = GVA + Total Revenue Expenditure"],
        correctAnswer: 0,
        explanation: "GDP (Market Price) = GVA (Basic Price) + Net Product Taxes (Taxes - Subsidies).",
        module: "macro", topic: "National Income", difficulty: "medium", chapter: "1"
    },
    {
        id: "ec-mcq-221",
        question: "Which of the following is an indicator in the 'Standard of Living' dimension of the Global Multi-dimensional Poverty Index (MPI)?",
        options: ["Child Mortality", "Cooking Fuel", "Years of Schooling", "Income levels"],
        correctAnswer: 1,
        explanation: "Standard of Living indicators in MPI include Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, and Assets. Child mortality is in the Health dimension. Education covers Schooling.",
        module: "social", topic: "Poverty", difficulty: "medium", chapter: "6"
    },
    {
        id: "ec-mcq-222",
        question: "The Production Linked Incentive (PLI) scheme targets sectors like Mobile manufacturing and Pharma primarily to:",
        options: ["Promote global champions and increase exports", "Provide generic medicine to all citizens", "Tax high-tech multinationals", "Phase out the MSME sector"],
        correctAnswer: 0,
        explanation: "PLI aims to boost manufacturing by providing incentives based on incremental sales, with the goal of making Indian manufacturers globally competitive and increasing local value addition.",
        module: "sectors", topic: "Industry", difficulty: "easy", chapter: "5"
    }
];

