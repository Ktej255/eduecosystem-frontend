import { ContentItem, MCQSet, FlashcardSet } from "../../types";
import { bankingSystem } from "./chapters/banking-system";
import { bankingSystemMcqs } from "./mcqs/banking-mcqs";
import { bankingSystemFlashcards } from "./flashcards/banking-flashcards";
import { budgetAnalysis } from "./chapters/budget-xml";
import { inflationIndices } from "./chapters/inflation-indices";
import { externalSector } from "./chapters/external-sector";

export interface EconomyTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number; // Estimated days to cover
    category: 'Macro' | 'Sectoral' | 'Fiscal' | 'Banking' | 'External';
    // Link to new content structure
    contentId?: string;
    content?: ContentItem;
    mcqs?: MCQSet;
    flashcards?: FlashcardSet;
}

export const ECONOMY_SYLLABUS: EconomyTopic[] = [
    {
        id: 'national-income',
        title: "National Income Accounting",
        description: "GDP, GNP, NNP, and methods of calculation.",
        subtopics: [
            "GDP Deflator vs CPI/WPI",
            "GVA Method",
            "Potential GDP vs Real GDP",
            "Green GDP"
        ],
        days: 3,
        category: 'Macro'
    },
    {
        id: 'banking',
        title: "Banking & Monetary Policy",
        description: "RBI Functions, Tools, and Banking Reforms.",
        subtopics: [
            "Monetary Policy Tools (Repo, CRR, SLR)",
            "NPA Crisis & IBC 2016",
            "Basel III Norms",
            "Digital Banking & CBDC"
        ],
        days: 5,
        category: 'Banking',
        contentId: 'banking-system',
        content: bankingSystem,
        mcqs: bankingSystemMcqs,
        flashcards: bankingSystemFlashcards
    },
    {
        id: 'budget-fiscal',
        title: "Union Budget & Fiscal Policy",
        description: "Deficits, Taxation (GST), and Government Spending.",
        subtopics: [
            "Types of Deficits (Fiscal, Revenue, Primary)",
            "FRBM Act 2003",
            "GST Structure & Council",
            "Finance Commission"
        ],
        days: 4,
        category: 'Fiscal'
    },
    {
        id: 'external-sector',
        title: "External Sector & Trade",
        description: "BoP, Forex, and International Institutions.",
        subtopics: [
            "Balance of Payments (Current vs Capital)",
            "Convertibility of Rupee",
            "WTO & Free Trade Agreements",
            "Forex Reserves Management"
        ],
        days: 3,
        category: 'External'
    },
    {
        id: 'agriculture',
        title: "Agriculture & Food Management",
        description: "Cropping Patterns, MSP, and Food Security.",
        subtopics: [
            "MSP & FRP Pricing",
            "PDS & Buffer Stocks",
            "Food Processing Industry",
            "E-NAM & Agri-Marketing"
        ],
        days: 4,
        category: 'Sectoral'
    }
];

// Helper map for dynamic loading by ID
// Helper map for dynamic loading by ID
export const ECONOMY_CONTENT_MAP: Record<string, { content: ContentItem, mcqs?: MCQSet, flashcards?: FlashcardSet }> = {
    'banking': {
        content: bankingSystem,
        mcqs: bankingSystemMcqs,
        flashcards: bankingSystemFlashcards
    },
    'budget-fiscal': {
        content: budgetAnalysis
    },
    'national-income': {
        content: inflationIndices
    },
    'external-sector': {
        content: externalSector
    }
};
