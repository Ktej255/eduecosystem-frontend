// Economy Flashcards - Complete Collection
// Covers 4 Modules: Macro Economics, Indian Economy Sectors, International Economics, Social Development

export interface EconomyFlashcard {
    id: string;
    front: string;
    back: string;
    subject: string;
    topic: string;
    module: 'macro' | 'sectors' | 'international' | 'social';
    tags: string[];
    difficulty: 'easy' | 'medium' | 'hard';
}

// Module 1: Macro Economics
export const macroFlashcards: EconomyFlashcard[] = [
    {
        id: "ec-m1-01",
        front: "What is GDP and how is it calculated?",
        back: "Gross Domestic Product = total value of goods & services produced within a country. Methods: 1. Output Method, 2. Income Method, 3. Expenditure Method (C + I + G + NX).",
        subject: "Economy",
        topic: "National Income",
        module: "macro",
        tags: ["GDP", "National Income"],
        difficulty: "easy"
    },
    {
        id: "ec-m1-02",
        front: "What is the difference between GDP and GNP?",
        back: "GDP = production within country borders. GNP = GDP + Net Factor Income from Abroad (NFIA). GNP includes earnings of residents abroad, excludes foreigners' earnings in India.",
        subject: "Economy",
        topic: "National Income",
        module: "macro",
        tags: ["GDP", "GNP"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-03",
        front: "What is Inflation Targeting in India?",
        back: "RBI targets CPI inflation at 4% ± 2% (2-6% band). Monetary Policy Committee (MPC) sets repo rate to achieve this. Amended RBI Act 2016 mandates this.",
        subject: "Economy",
        topic: "Monetary Policy",
        module: "macro",
        tags: ["RBI", "Inflation", "MPC"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-04",
        front: "What are the main tools of RBI's monetary policy?",
        back: "Repo Rate (lending to banks), Reverse Repo, CRR (Cash Reserve Ratio), SLR (Statutory Liquidity Ratio), OMO (Open Market Operations), MSF, LAF.",
        subject: "Economy",
        topic: "Monetary Policy",
        module: "macro",
        tags: ["RBI", "Repo", "CRR", "SLR"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-05",
        front: "What is Fiscal Deficit?",
        back: "Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings). Indicates government's borrowing requirement. FRBM Act targets 3% of GDP.",
        subject: "Economy",
        topic: "Fiscal Policy",
        module: "macro",
        tags: ["Fiscal Deficit", "FRBM"],
        difficulty: "easy"
    },
    {
        id: "ec-m1-06",
        front: "What is Primary Deficit?",
        back: "Primary Deficit = Fiscal Deficit - Interest Payments. Shows borrowing needed for non-interest expenditure. If zero, all borrowing is only for interest payments.",
        subject: "Economy",
        topic: "Fiscal Policy",
        module: "macro",
        tags: ["Primary Deficit", "Interest"],
        difficulty: "hard"
    },
    {
        id: "ec-m1-07",
        front: "What is CRR and SLR?",
        back: "CRR: Cash banks must keep with RBI (currently ~4.5%). SLR: Liquid assets (govt securities) banks must maintain (currently ~18%). Both are liquidity tools.",
        subject: "Economy",
        topic: "Money & Banking",
        module: "macro",
        tags: ["CRR", "SLR", "RBI"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-08",
        front: "What are the types of inflation?",
        back: "Demand-Pull (excess demand), Cost-Push (rising input costs), Structural (supply constraints), Built-in/Wage-Price Spiral. Also: Stagflation = high inflation + low growth.",
        subject: "Economy",
        topic: "Inflation",
        module: "macro",
        tags: ["Inflation Types"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-09",
        front: "What is the difference between WPI and CPI?",
        back: "WPI: Wholesale Price Index (producer prices, 697 commodities). CPI: Consumer Price Index (retail prices, what consumers pay). RBI uses CPI for inflation targeting.",
        subject: "Economy",
        topic: "Inflation",
        module: "macro",
        tags: ["WPI", "CPI", "Inflation"],
        difficulty: "medium"
    },
    {
        id: "ec-m1-10",
        front: "What is repo rate?",
        back: "Rate at which RBI lends to commercial banks against govt securities. Lowering repo rate makes loans cheaper, boosts economy. Currently around 6.5%.",
        subject: "Economy",
        topic: "Monetary Policy",
        module: "macro",
        tags: ["Repo", "RBI", "Interest"],
        difficulty: "easy"
    }
];

// Module 2: Indian Economy Sectors
export const sectorsFlashcards: EconomyFlashcard[] = [
    {
        id: "ec-m2-01",
        front: "What percentage of India's workforce is in agriculture?",
        back: "~42-45% of workforce but only ~15-17% of GDP. This imbalance (disguised unemployment) is a key challenge. Need to shift workers to other sectors.",
        subject: "Economy",
        topic: "Agriculture",
        module: "sectors",
        tags: ["Agriculture", "Employment"],
        difficulty: "medium"
    },
    {
        id: "ec-m2-02",
        front: "What is MSP and who announces it?",
        back: "Minimum Support Price: Government's guaranteed price for crops. Announced by Cabinet Committee on Economic Affairs (CCEA). Based on CACP (Commission for Agricultural Costs and Prices) recommendations.",
        subject: "Economy",
        topic: "Agriculture",
        module: "sectors",
        tags: ["MSP", "Agriculture"],
        difficulty: "easy"
    },
    {
        id: "ec-m2-03",
        front: "What is PM-KISAN scheme?",
        back: "Direct income support of ₹6,000/year to farmer families in 3 installments. Launched 2019. DBT (Direct Benefit Transfer) to bank accounts. One of world's largest cash transfer programs.",
        subject: "Economy",
        topic: "Agriculture",
        module: "sectors",
        tags: ["PM-KISAN", "Agriculture", "Scheme"],
        difficulty: "easy"
    },
    {
        id: "ec-m2-04",
        front: "What is Make in India initiative?",
        back: "Launched 2014 to boost manufacturing to 25% of GDP. Focus: 25 sectors including automobiles, pharmaceuticals, textiles. Part of National Manufacturing Policy. Uses ease of doing business reforms.",
        subject: "Economy",
        topic: "Industry",
        module: "sectors",
        tags: ["Make in India", "Manufacturing"],
        difficulty: "easy"
    },
    {
        id: "ec-m2-05",
        front: "What is PLI Scheme?",
        back: "Production Linked Incentive: incentives to companies based on incremental production. Covers 14 sectors including electronics, pharma, automobiles. Aims to boost exports and reduce imports.",
        subject: "Economy",
        topic: "Industry",
        module: "sectors",
        tags: ["PLI", "Manufacturing"],
        difficulty: "medium"
    },
    {
        id: "ec-m2-06",
        front: "What are the main infrastructure challenges in India?",
        back: "Power transmission losses (~20%), poor road connectivity in rural areas, port congestion, railway capacity constraints. National Infrastructure Pipeline (NIP) targets ₹111 lakh crore investment.",
        subject: "Economy",
        topic: "Infrastructure",
        module: "sectors",
        tags: ["Infrastructure", "NIP"],
        difficulty: "medium"
    },
    {
        id: "ec-m2-07",
        front: "What is MSME sector's contribution?",
        back: "MSMEs: ~30% of GDP, ~45% of exports, employ ~11 crore people. Classified by investment + turnover. Atmanirbhar package provided ₹3 lakh crore collateral-free loans.",
        subject: "Economy",
        topic: "Industry",
        module: "sectors",
        tags: ["MSME", "Employment"],
        difficulty: "medium"
    },
    {
        id: "ec-m2-08",
        front: "What is the Services sector contribution to India's GDP?",
        back: "Services: ~55% of GDP, ~30% of employment. Includes IT/ITeS, banking, tourism, healthcare. India is major IT exporter (~$200 billion). Fastest growing sector.",
        subject: "Economy",
        topic: "Services",
        module: "sectors",
        tags: ["Services", "IT"],
        difficulty: "easy"
    }
];

// Module 3: International Economics
export const internationalFlashcards: EconomyFlashcard[] = [
    {
        id: "ec-m3-01",
        front: "What is Balance of Payments (BoP)?",
        back: "Record of all economic transactions between residents of a country and rest of world. Components: Current Account, Capital Account, Financial Account. BoP must always balance.",
        subject: "Economy",
        topic: "BoP",
        module: "international",
        tags: ["BoP", "Trade"],
        difficulty: "medium"
    },
    {
        id: "ec-m3-02",
        front: "What is Current Account Deficit (CAD)?",
        back: "When imports of goods/services > exports. Financed by capital inflows (FDI, FPI). High CAD makes currency vulnerable. India's CAD usually 1-2% of GDP.",
        subject: "Economy",
        topic: "BoP",
        module: "international",
        tags: ["CAD", "Trade Deficit"],
        difficulty: "medium"
    },
    {
        id: "ec-m3-03",
        front: "What is the difference between FDI and FPI?",
        back: "FDI: Long-term investment with management control (>10% equity). FPI: Short-term portfolio investment in stocks/bonds. FDI more stable, FPI more volatile.",
        subject: "Economy",
        topic: "Investment",
        module: "international",
        tags: ["FDI", "FPI"],
        difficulty: "medium"
    },
    {
        id: "ec-m3-04",
        front: "What is WTO and when was it established?",
        back: "World Trade Organization: Replaced GATT in 1995. HQ: Geneva. Deals with trade rules, dispute settlement, trade negotiations. India is founding member. 164 members.",
        subject: "Economy",
        topic: "International Organizations",
        module: "international",
        tags: ["WTO", "Trade"],
        difficulty: "easy"
    },
    {
        id: "ec-m3-05",
        front: "What are Special Drawing Rights (SDRs)?",
        back: "IMF's reserve asset, acts as international currency. Value based on basket (USD, EUR, CNY, JPY, GBP). Not a currency but can be exchanged for one.",
        subject: "Economy",
        topic: "IMF",
        module: "international",
        tags: ["SDR", "IMF"],
        difficulty: "hard"
    },
    {
        id: "ec-m3-06",
        front: "What is India's forex reserve composition?",
        back: "India's forex reserves (~$600+ billion): Foreign Currency Assets (FCA - largest), Gold, SDRs, Reserve Tranche Position with IMF. Managed by RBI.",
        subject: "Economy",
        topic: "Forex",
        module: "international",
        tags: ["Forex", "RBI"],
        difficulty: "medium"
    },
    {
        id: "ec-m3-07",
        front: "What is RCEP and India's position?",
        back: "Regional Comprehensive Economic Partnership: Free trade agreement of ASEAN + 6 partners. India withdrew in 2019 citing concerns over imports from China affecting domestic industry.",
        subject: "Economy",
        topic: "Trade Agreements",
        module: "international",
        tags: ["RCEP", "Trade"],
        difficulty: "hard"
    }
];

// Module 4: Social Development
export const socialFlashcards: EconomyFlashcard[] = [
    {
        id: "ec-m4-01",
        front: "How is poverty measured in India?",
        back: "Tendulkar Committee (2009): ₹816/month rural, ₹1000/month urban. Rangarajan Committee (2014): Higher thresholds. Multi-dimensional Poverty Index (MPI) measures health, education, living standards.",
        subject: "Economy",
        topic: "Poverty",
        module: "social",
        tags: ["Poverty", "Measurement"],
        difficulty: "hard"
    },
    {
        id: "ec-m4-02",
        front: "What is MGNREGA?",
        back: "Mahatma Gandhi National Rural Employment Guarantee Act (2005): Guarantees 100 days of wage employment per year to rural households. Demand-driven. Creates rural infrastructure assets.",
        subject: "Economy",
        topic: "Employment",
        module: "social",
        tags: ["MGNREGA", "Employment"],
        difficulty: "easy"
    },
    {
        id: "ec-m4-03",
        front: "What is India's HDI ranking?",
        back: "Human Development Index (UNDP): India ranks around 132nd out of 191 countries (Medium Human Development). Components: Life expectancy, Education, Income.",
        subject: "Economy",
        topic: "Development",
        module: "social",
        tags: ["HDI", "UNDP"],
        difficulty: "medium"
    },
    {
        id: "ec-m4-04",
        front: "What is the Demographic Dividend?",
        back: "Economic growth potential from large working-age population relative to dependents. India's window: 2020-2055. Requires investment in education, health, skills.",
        subject: "Economy",
        topic: "Demographics",
        module: "social",
        tags: ["Demographics", "Population"],
        difficulty: "medium"
    },
    {
        id: "ec-m4-05",
        front: "What is Jan Dhan Yojana?",
        back: "World's largest financial inclusion program (2014). Zero-balance bank accounts with RuPay debit card, ₹10,000 overdraft, accident insurance. Over 50 crore accounts opened.",
        subject: "Economy",
        topic: "Financial Inclusion",
        module: "social",
        tags: ["Jan Dhan", "Inclusion"],
        difficulty: "easy"
    },
    {
        id: "ec-m4-06",
        front: "What is Ayushman Bharat PM-JAY?",
        back: "World's largest health insurance scheme. ₹5 lakh/family/year for secondary & tertiary hospitalization. Covers ~50 crore beneficiaries. Empaneled public and private hospitals.",
        subject: "Economy",
        topic: "Health",
        module: "social",
        tags: ["Ayushman Bharat", "Health"],
        difficulty: "easy"
    },
    {
        id: "ec-m4-07",
        front: "What is the Labour Force Participation Rate (LFPR)?",
        back: "Percentage of working-age population either employed or seeking employment. India's LFPR: ~40-42% (low due to female participation ~25%). Urban higher than rural.",
        subject: "Economy",
        topic: "Employment",
        module: "social",
        tags: ["LFPR", "Employment"],
        difficulty: "medium"
    },
    {
        id: "ec-m4-08",
        front: "What is the Gini Coefficient?",
        back: "Measures income inequality (0 = perfect equality, 1 = perfect inequality). India's Gini: ~0.35 (moderate inequality). Rising in recent decades.",
        subject: "Economy",
        topic: "Inequality",
        module: "social",
        tags: ["Gini", "Inequality"],
        difficulty: "hard"
    }
];

// Combined export
export const economyFlashcards: EconomyFlashcard[] = [
    ...macroFlashcards,
    ...sectorsFlashcards,
    ...internationalFlashcards,
    ...socialFlashcards
];

// Summary: 33 flashcards covering all 4 Economy modules
