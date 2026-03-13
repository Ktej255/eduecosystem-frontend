export interface BudgetStat {
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'neutral';
    description: string;
}

export interface SectorAllocation {
    sector: string;
    amount: string; // in lakh crore
    percentageOfTotal: number;
    highlights: string[];
    color: string;
}

export interface BudgetGlossaryItem {
    term: string;
    definition: string;
    upscContext: string;
}

export const BUDGET_STATS: BudgetStat[] = [
    {
        label: "Total Expenditure",
        value: "₹48.2 Lakh Cr",
        change: "+6.1%",
        trend: 'up',
        description: "Focus on capital expenditure and infrastructure."
    },
    {
        label: "Fiscal Deficit",
        value: "4.5%",
        change: "-0.6%",
        trend: 'down',
        description: "Adhering to the glide path of fiscal consolidation."
    },
    {
        label: "Capital Expenditure",
        value: "₹11.11 Lakh Cr",
        change: "+11.1%",
        trend: 'up',
        description: "Record high allocation for multi-modal connectivity."
    }
];

export const SECTOR_ALLOCATIONS: SectorAllocation[] = [
    {
        sector: "Infrastructure & Transport",
        amount: "₹5.4 Lakh Cr",
        percentageOfTotal: 11.2,
        highlights: ["Focus on PM Gati Shakti", "Railway corridor expansion", "New greenfield expressways"],
        color: "bg-blue-600"
    },
    {
        sector: "Rural Development & Agriculture",
        amount: "₹2.9 Lakh Cr",
        percentageOfTotal: 6.0,
        highlights: ["Digital Public Infrastructure for Agri", "Horticulture mission", "Micro-irrigation push"],
        color: "bg-emerald-600"
    },
    {
        sector: "Education & Health",
        amount: "₹2.1 Lakh Cr",
        percentageOfTotal: 4.3,
        highlights: ["157 new nursing colleges", "Sickle Cell Anemia elimination mission", "Teacher training revamp"],
        color: "bg-pink-600"
    },
    {
        sector: "Defence",
        amount: "₹6.2 Lakh Cr",
        percentageOfTotal: 12.8,
        highlights: ["R&D for deep-tech defence", "Pension reform allocations", "Border infrastructure boost"],
        color: "bg-indigo-600"
    }
];

export const BUDGET_GLOSSARY: BudgetGlossaryItem[] = [
    {
        term: "Capital Expenditure (Capex)",
        definition: "Funds used by government to acquire, upgrade, and maintain physical assets such as property, plants, or equipment.",
        upscContext: "Highly relevant for GS-III Economy. Contrast with Revenue Expenditure for Mains."
    },
    {
        term: "Fiscal Deficit",
        definition: "The difference between total revenue and total expenditure of the government.",
        upscContext: "Prelims focus: FRBM Act requirements and debt-to-GDP ratios."
    },
    {
        term: "Effective Capital Expenditure",
        definition: "Sum of Capital Expenditure and Grants-in-Aid for creation of capital assets.",
        upscContext: "Unique term introduced in recent budgets to show true investment scale."
    }
];
