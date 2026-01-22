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
        difficulty: "medium"
    },
    {
        id: "ec-mcq-02",
        question: "The Monetary Policy Committee (MPC) of RBI consists of how many members?",
        options: ["4 members", "5 members", "6 members", "7 members"],
        correctAnswer: 2,
        explanation: "MPC has 6 members: 3 from RBI (Governor as Chairman, Deputy Governor, one RBI official) and 3 external members nominated by Government.",
        module: "macro",
        topic: "Monetary Policy",
        difficulty: "easy"
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
        difficulty: "medium"
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
        difficulty: "medium"
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
        difficulty: "easy"
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
        difficulty: "medium"
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
        difficulty: "easy"
    },
    {
        id: "ec-mcq-08",
        question: "Production Linked Incentive (PLI) scheme covers how many sectors?",
        options: ["10 sectors", "12 sectors", "14 sectors", "16 sectors"],
        correctAnswer: 2,
        explanation: "PLI scheme covers 14 sectors including electronics, pharmaceuticals, automobiles, textiles, food processing, etc.",
        module: "sectors",
        topic: "Industry",
        difficulty: "medium"
    },
    {
        id: "ec-mcq-09",
        question: "Which sector contributes the highest to India's GDP?",
        options: ["Agriculture", "Industry", "Services", "Mining"],
        correctAnswer: 2,
        explanation: "Services sector contributes about 55% of GDP, followed by Industry (~30%) and Agriculture (~15%).",
        module: "sectors",
        topic: "Services",
        difficulty: "easy"
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
        difficulty: "hard"
    },
    {
        id: "ec-mcq-11",
        question: "What is the minimum stake for an investment to be classified as FDI (not FPI)?",
        options: ["5%", "10%", "20%", "51%"],
        correctAnswer: 1,
        explanation: "FDI requires at least 10% equity stake in a company with management control. Below 10% is considered FPI (portfolio investment).",
        module: "international",
        topic: "Investment",
        difficulty: "medium"
    },
    {
        id: "ec-mcq-12",
        question: "India is a member of which international trade organization since 1995?",
        options: ["OECD", "WTO", "G7", "European Union"],
        correctAnswer: 1,
        explanation: "India is a founding member of WTO (World Trade Organization) established in 1995, replacing GATT.",
        module: "international",
        topic: "Trade",
        difficulty: "easy"
    },
    {
        id: "ec-mcq-13",
        question: "Special Drawing Rights (SDRs) are issued by:",
        options: ["World Bank", "IMF", "WTO", "Asian Development Bank"],
        correctAnswer: 1,
        explanation: "SDRs are supplementary foreign exchange reserve assets created by IMF. Their value is based on a basket of five major currencies.",
        module: "international",
        topic: "IMF",
        difficulty: "medium"
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
        difficulty: "easy"
    },
    {
        id: "ec-mcq-15",
        question: "Human Development Index (HDI) is published by:",
        options: ["World Bank", "IMF", "UNDP", "WHO"],
        correctAnswer: 2,
        explanation: "UNDP publishes HDI annually in Human Development Report. It measures health, education, and standard of living.",
        module: "social",
        topic: "Development",
        difficulty: "easy"
    },
    {
        id: "ec-mcq-16",
        question: "Under PM-JAY (Ayushman Bharat), what is the annual health cover per family?",
        options: ["₹1 lakh", "₹3 lakh", "₹5 lakh", "₹10 lakh"],
        correctAnswer: 2,
        explanation: "PM-JAY provides ₹5 lakh per family per year for secondary and tertiary hospitalization. It covers ~50 crore beneficiaries.",
        module: "social",
        topic: "Health",
        difficulty: "easy"
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
        difficulty: "medium"
    },
    {
        id: "ec-mcq-18",
        question: "India's demographic dividend window is expected to last until approximately:",
        options: ["2030", "2040", "2055", "2070"],
        correctAnswer: 2,
        explanation: "India's demographic dividend window (large working-age population) is estimated from 2020-2055, after which dependency ratio will increase.",
        module: "social",
        topic: "Demographics",
        difficulty: "medium"
    }
];
