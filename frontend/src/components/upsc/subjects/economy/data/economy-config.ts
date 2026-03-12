import { SubjectConfig, WeeklyScheduleData } from "../../../common/framework/SubjectPlanner";
import { TrendingUp, PieChart, Coins, Briefcase } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const ECONOMY_MODULES = [
    {
        id: "1",
        title: "Macro Economics",
        description: "National Income, Money & Banking, Inflation, and Fiscal Policy.",
        icon: React.createElement(Coins),
        color: "blue",
        topicRange: [1, 25] as [number, number]
    },
    {
        id: "2",
        title: "Indian Economy Sectors",
        description: "Agriculture, Industry, Services, and Infrastructure.",
        icon: React.createElement(Briefcase), // Using Briefcase for industry/sectors
        color: "green",
        topicRange: [26, 45] as [number, number]
    },
    {
        id: "3",
        title: "International Economics",
        description: "BoP, Forex, IMF, WTO, and World Bank.",
        icon: React.createElement(TrendingUp),
        color: "purple",
        topicRange: [46, 55] as [number, number]
    },
    {
        id: "4",
        title: "Social Development",
        description: "Poverty, Unemployment, Inclusion, and Demographics.",
        icon: React.createElement(PieChart),
        color: "orange",
        topicRange: [56, 65] as [number, number]
    }
];

// Real UPSC Economy Topics organized by Module
const ECONOMY_TOPICS = [
    // Module 1: Macro Economics (1-25)
    { id: 1, title: "National Income Accounting", moduleId: "1", priority: "High", staticFocus: "GDP, GNP, NDP, NNP calculations", keyConcepts: ["GDP", "Factor Cost vs Market Price"], currentAffairsCount: 3 },
    { id: 2, title: "GDP Calculation Methods", moduleId: "1", priority: "High", staticFocus: "Output, Income, Expenditure methods", keyConcepts: ["Y = C + I + G + NX"], currentAffairsCount: 2 },
    { id: 3, title: "Inflation: Types & Measurement", moduleId: "1", priority: "High", staticFocus: "WPI vs CPI, Demand-Pull, Cost-Push", keyConcepts: ["Inflation Targeting", "4% ± 2%"], currentAffairsCount: 5 },
    { id: 4, title: "Monetary Policy Introduction", moduleId: "1", priority: "High", staticFocus: "RBI's role, objectives", keyConcepts: ["Price Stability", "Growth"], currentAffairsCount: 4 },
    { id: 5, title: "Repo Rate & Reverse Repo", moduleId: "1", priority: "High", staticFocus: "LAF operations", keyConcepts: ["Repo", "Reverse Repo", "Policy Corridor"], currentAffairsCount: 6 },
    { id: 6, title: "CRR and SLR", moduleId: "1", priority: "Medium", staticFocus: "Reserve requirements", keyConcepts: ["CRR 4.5%", "SLR 18%"], currentAffairsCount: 2 },
    { id: 7, title: "Open Market Operations", moduleId: "1", priority: "Medium", staticFocus: "G-Sec buying/selling", keyConcepts: ["OMO", "Liquidity Management"], currentAffairsCount: 3 },
    { id: 8, title: "Monetary Policy Committee", moduleId: "1", priority: "High", staticFocus: "Composition, functions", keyConcepts: ["6 Members", "Bi-monthly meets"], currentAffairsCount: 4 },
    { id: 9, title: "Money Supply Concepts", moduleId: "1", priority: "Medium", staticFocus: "M0, M1, M2, M3, M4", keyConcepts: ["Narrow vs Broad Money"], currentAffairsCount: 1 },
    { id: 10, title: "Money Multiplier", moduleId: "1", priority: "Medium", staticFocus: "Credit creation", keyConcepts: ["1/CRR formula"], currentAffairsCount: 1 },
    { id: 11, title: "Fiscal Policy Introduction", moduleId: "1", priority: "High", staticFocus: "Government revenue & expenditure", keyConcepts: ["Taxes", "Borrowing"], currentAffairsCount: 4 },
    { id: 12, title: "Union Budget Components", moduleId: "1", priority: "High", staticFocus: "Revenue & Capital accounts", keyConcepts: ["Plan vs Non-Plan (obsolete)"], currentAffairsCount: 5 },
    { id: 13, title: "Types of Government Deficits", moduleId: "1", priority: "High", staticFocus: "Fiscal, Revenue, Primary, Monetized", keyConcepts: ["FD formula"], currentAffairsCount: 6 },
    { id: 14, title: "FRBM Act", moduleId: "1", priority: "Medium", staticFocus: "Fiscal consolidation targets", keyConcepts: ["3% FD target"], currentAffairsCount: 3 },
    { id: 15, title: "Direct Taxes", moduleId: "1", priority: "Medium", staticFocus: "Income Tax, Corporate Tax", keyConcepts: ["Progressive taxation"], currentAffairsCount: 4 },
    { id: 16, title: "Indirect Taxes & GST", moduleId: "1", priority: "High", staticFocus: "GST structure, rates", keyConcepts: ["CGST, SGST, IGST"], currentAffairsCount: 7 },
    { id: 17, title: "GST Council", moduleId: "1", priority: "Medium", staticFocus: "Composition, powers", keyConcepts: ["Federal nature"], currentAffairsCount: 4 },
    { id: 18, title: "Public Debt", moduleId: "1", priority: "Low", staticFocus: "Internal vs External debt", keyConcepts: ["Debt-to-GDP ratio"], currentAffairsCount: 2 },
    { id: 19, title: "Banking System Overview", moduleId: "1", priority: "High", staticFocus: "Structure of banks", keyConcepts: ["Scheduled Banks", "Commercial Banks"], currentAffairsCount: 3 },
    { id: 20, title: "RBI: Structure & Functions", moduleId: "1", priority: "High", staticFocus: "Central bank roles", keyConcepts: ["Banker to Banks", "Lender of Last Resort"], currentAffairsCount: 4 },
    { id: 21, title: "Commercial Banks", moduleId: "1", priority: "Medium", staticFocus: "PSBs, Private, Foreign banks", keyConcepts: ["Bank Consolidation"], currentAffairsCount: 3 },
    { id: 22, title: "NPAs & Banking Reforms", moduleId: "1", priority: "High", staticFocus: "Bad loans crisis", keyConcepts: ["IBC", "Asset Reconstruction"], currentAffairsCount: 6 },
    { id: 23, title: "Payment Banks & SFBs", moduleId: "1", priority: "Medium", staticFocus: "Differentiated banking", keyConcepts: ["Licensing norms"], currentAffairsCount: 2 },
    { id: 24, title: "Digital Payments: UPI", moduleId: "1", priority: "High", staticFocus: "NPCI, UPI, IMPS", keyConcepts: ["Financial inclusion"], currentAffairsCount: 5 },
    { id: 25, title: "Priority Sector Lending", moduleId: "1", priority: "Medium", staticFocus: "PSL norms, targets", keyConcepts: ["40% norm"], currentAffairsCount: 2 },

    // Module 2: Indian Economy Sectors (26-45)
    { id: 26, title: "Agriculture: Overview", moduleId: "2", priority: "High", staticFocus: "Contribution to GDP, employment", keyConcepts: ["15% GDP, 43% workforce"], currentAffairsCount: 4 },
    { id: 27, title: "Green Revolution", moduleId: "2", priority: "Medium", staticFocus: "History and impact", keyConcepts: ["HYV seeds", "Punjab/Haryana"], currentAffairsCount: 1 },
    { id: 28, title: "MSP Mechanism", moduleId: "2", priority: "High", staticFocus: "CACP recommendations", keyConcepts: ["A2+FL formula"], currentAffairsCount: 6 },
    { id: 29, title: "Food Security: PDS", moduleId: "2", priority: "High", staticFocus: "NFSA, FCI, Buffer stocks", keyConcepts: ["5kg per person"], currentAffairsCount: 4 },
    { id: 30, title: "Agricultural Marketing: e-NAM", moduleId: "2", priority: "Medium", staticFocus: "Market reforms", keyConcepts: ["One Nation One Market"], currentAffairsCount: 3 },
    { id: 31, title: "Farm Loan Waivers", moduleId: "2", priority: "Medium", staticFocus: "Pros and cons", keyConcepts: ["Moral hazard"], currentAffairsCount: 3 },
    { id: 32, title: "PM-KISAN Scheme", moduleId: "2", priority: "High", staticFocus: "₹6000/year DBT", keyConcepts: ["World's largest DBT"], currentAffairsCount: 4 },
    { id: 33, title: "Industrial Policy", moduleId: "2", priority: "Medium", staticFocus: "Evolution since 1991", keyConcepts: ["LPG reforms"], currentAffairsCount: 2 },
    { id: 34, title: "Make in India", moduleId: "2", priority: "High", staticFocus: "Manufacturing push", keyConcepts: ["25% of GDP target"], currentAffairsCount: 4 },
    { id: 35, title: "PLI Schemes", moduleId: "2", priority: "High", staticFocus: "14 sectors coverage", keyConcepts: ["Export boost"], currentAffairsCount: 6 },
    { id: 36, title: "MSME Sector", moduleId: "2", priority: "High", staticFocus: "Definition, contribution", keyConcepts: ["30% GDP, 45% exports"], currentAffairsCount: 5 },
    { id: 37, title: "Startup India", moduleId: "2", priority: "Medium", staticFocus: "Ecosystem support", keyConcepts: ["Unicorns"], currentAffairsCount: 4 },
    { id: 38, title: "Services Sector Overview", moduleId: "2", priority: "Medium", staticFocus: "55% of GDP", keyConcepts: ["IT exports"], currentAffairsCount: 3 },
    { id: 39, title: "IT & BPO Industry", moduleId: "2", priority: "Medium", staticFocus: "$200 billion exports", keyConcepts: ["NASSCOM"], currentAffairsCount: 3 },
    { id: 40, title: "Infrastructure: Overview", moduleId: "2", priority: "High", staticFocus: "NIP ₹111 lakh crore", keyConcepts: ["Gati Shakti"], currentAffairsCount: 5 },
    { id: 41, title: "Power Sector", moduleId: "2", priority: "Medium", staticFocus: "Generation, distribution", keyConcepts: ["Renewables target"], currentAffairsCount: 4 },
    { id: 42, title: "Railways & Logistics", moduleId: "2", priority: "Medium", staticFocus: "Modernization", keyConcepts: ["Dedicated Freight Corridors"], currentAffairsCount: 3 },
    { id: 43, title: "Highways & Roads", moduleId: "2", priority: "Medium", staticFocus: "Bharatmala", keyConcepts: ["NHAI"], currentAffairsCount: 3 },
    { id: 44, title: "Ports & Shipping", moduleId: "2", priority: "Low", staticFocus: "Sagarmala", keyConcepts: ["Major ports"], currentAffairsCount: 2 },
    { id: 45, title: "Civil Aviation", moduleId: "2", priority: "Low", staticFocus: "UDAN, privatization", keyConcepts: ["Air India divestment"], currentAffairsCount: 2 },

    // Module 3: International Economics (46-55)
    { id: 46, title: "Balance of Payments", moduleId: "3", priority: "High", staticFocus: "Current, Capital, Financial accounts", keyConcepts: ["BoP must balance"], currentAffairsCount: 4 },
    { id: 47, title: "Current Account Deficit", moduleId: "3", priority: "High", staticFocus: "Trade deficit financing", keyConcepts: ["1-2% of GDP norm"], currentAffairsCount: 5 },
    { id: 48, title: "FDI vs FPI", moduleId: "3", priority: "High", staticFocus: "Definitions, limits", keyConcepts: ["10% threshold"], currentAffairsCount: 4 },
    { id: 49, title: "Foreign Exchange Reserves", moduleId: "3", priority: "Medium", staticFocus: "Composition, management", keyConcepts: ["FCA, Gold, SDR"], currentAffairsCount: 4 },
    { id: 50, title: "Exchange Rate Systems", moduleId: "3", priority: "Medium", staticFocus: "Fixed vs Floating", keyConcepts: ["Managed float"], currentAffairsCount: 2 },
    { id: 51, title: "WTO: Structure & Functions", moduleId: "3", priority: "High", staticFocus: "Dispute settlement", keyConcepts: ["Doha Round"], currentAffairsCount: 3 },
    { id: 52, title: "IMF: Role & SDRs", moduleId: "3", priority: "Medium", staticFocus: "Lending, SDR allocation", keyConcepts: ["Quota system"], currentAffairsCount: 3 },
    { id: 53, title: "World Bank Group", moduleId: "3", priority: "Medium", staticFocus: "IBRD, IDA, IFC", keyConcepts: ["Development lending"], currentAffairsCount: 2 },
    { id: 54, title: "India's FTAs", moduleId: "3", priority: "Medium", staticFocus: "Trade agreements", keyConcepts: ["ASEAN, Japan, Korea"], currentAffairsCount: 4 },
    { id: 55, title: "RCEP & Trade Policy", moduleId: "3", priority: "Medium", staticFocus: "India's withdrawal", keyConcepts: ["China concerns"], currentAffairsCount: 3 },

    // Module 4: Social Development (56-65)
    { id: 56, title: "Poverty Measurement", moduleId: "4", priority: "High", staticFocus: "Tendulkar, Rangarajan, MPI", keyConcepts: ["Multi-dimensional poverty"], currentAffairsCount: 3 },
    { id: 57, title: "MGNREGA", moduleId: "4", priority: "High", staticFocus: "100 days guarantee", keyConcepts: ["Demand-driven"], currentAffairsCount: 4 },
    { id: 58, title: "Unemployment Types", moduleId: "4", priority: "Medium", staticFocus: "Structural, Frictional, Disguised", keyConcepts: ["LFPR"], currentAffairsCount: 3 },
    { id: 59, title: "Human Development Index", moduleId: "4", priority: "Medium", staticFocus: "UNDP methodology", keyConcepts: ["Health, Education, Income"], currentAffairsCount: 2 },
    { id: 60, title: "Demographic Dividend", moduleId: "4", priority: "High", staticFocus: "Working age population", keyConcepts: ["2020-2055 window"], currentAffairsCount: 3 },
    { id: 61, title: "Financial Inclusion: Jan Dhan", moduleId: "4", priority: "High", staticFocus: "Zero-balance accounts", keyConcepts: ["50 crore accounts"], currentAffairsCount: 4 },
    { id: 62, title: "Ayushman Bharat PM-JAY", moduleId: "4", priority: "High", staticFocus: "₹5 lakh health cover", keyConcepts: ["World's largest"], currentAffairsCount: 4 },
    { id: 63, title: "Education: NEP 2020", moduleId: "4", priority: "High", staticFocus: "5+3+3+4 structure", keyConcepts: ["Vocational, Digital"], currentAffairsCount: 5 },
    { id: 64, title: "Gender Inequality", moduleId: "4", priority: "Medium", staticFocus: "Female LFPR, wage gap", keyConcepts: ["Beti Bachao"], currentAffairsCount: 3 },
    { id: 65, title: "Gini Coefficient & Inequality", moduleId: "4", priority: "Medium", staticFocus: "Income distribution", keyConcepts: ["0 = equality, 1 = inequality"], currentAffairsCount: 2 }
] as any[];

const ECONOMY_CHAPTERS = ECONOMY_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 10,
    slots: 2
}));

const ECONOMY_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 100,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11, 12],
            saturday: ["Macro Economics Mock 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [13, 14, 15],
            tuesday: [16, 17],
            wednesday: [18, 19],
            thursday: [20, 21],
            friday: [22, 23, 24],
            saturday: ["Banking & Finance Mock"],
            sunday: [13, 14, 15]
        }
    },
    // Add more weeks as needed
];

export const ECONOMY_CONFIG: SubjectConfig = {
    id: "economy",
    title: "Indian Economy",
    subtitle: "Concepts, Trends, and Economic Survey Analysis",
    totalChapters: 65,
    totalParts: 4,
    modules: ECONOMY_MODULES,
    topics: ECONOMY_TOPICS,
    chapters: ECONOMY_CHAPTERS,
    schedules: ECONOMY_SCHEDULE,
    colors: {
        primary: "blue",
        heroGradient: "from-blue-700 via-indigo-800 to-purple-900"
    },
    basePath: "/student/upsc/economy"
};
