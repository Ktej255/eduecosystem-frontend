import { PYQQuestion } from '@/lib/pyq/pyq-types';

export const ECONOMY_PYQS: PYQQuestion[] = [
    {
        id: 'econ_2024_1',
        year: 2024,
        subject: 'Economy',
        topic: 'Banking & Finance',
        question: "Which of the following tools is used by the RBI for 'Sterilization' of economy?",
        options: ["Repo Rate", "Open Market Operations (OMO)", "Cash Reserve Ratio (CRR)", "Statutory Liquidity Ratio (SLR)"],
        correctIndex: 1,
        explanation: "Sterilization is done primarily through OMO to offset the effect of change in domestic liquidity caused by foreign exchange operations.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'econ_2023_1',
        year: 2023,
        subject: 'Economy',
        topic: 'External Sector',
        question: "With reference to 'Capital Markets', what is a 'Green Bond'?",
        options: ["Bond issued for organic farming", "A debt instrument for environmental projects", "A bond whose price is linked to green tea prices", "Bonds issued by companies with no debt"],
        correctIndex: 1,
        explanation: "Green bonds are fixed-income instruments specifically earmarked to raise money for climate and environmental projects.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    },
    {
        id: 'econ_2022_1',
        year: 2022,
        subject: 'Economy',
        topic: 'Monetary Policy',
        question: "In India, which of the following is responsible for maintaining 'Price Stability' by controlling inflation?",
        options: ["Department of Consumer Affairs", "NITI Aayog", "Reserve Bank of India", "Finance Commission"],
        correctIndex: 2,
        explanation: "The RBI has the primary mandate of maintaining price stability through its Monetary Policy Framework.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    }
];
