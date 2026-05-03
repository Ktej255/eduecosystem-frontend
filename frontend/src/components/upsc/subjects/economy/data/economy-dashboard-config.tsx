import React from 'react';
import { TrendingUp, Wallet, Coins, BarChart3, PieChart, ArrowRightLeft } from 'lucide-react';
import { SubjectDashboardProps } from '../SubjectDashboardTemplate';
import CircularFlowViz from '../visualizations/CircularFlowViz';
import DemandSupplyViz from '../visualizations/DemandSupplyViz';
import BudgetExplorerViz from '../visualizations/BudgetExplorerViz';
import { ECONOMY_CONFIG } from './economy-config';
import { economyFlashcards } from './flashcards/economy-flashcards';

export const ECONOMY_DASHBOARD_CONFIG: SubjectDashboardProps = {
    subjectId: 'economy',
    title: 'Economy',
    subtitle: 'Indian Economy & Macro-Micro Frameworks',
    accentColor: 'emerald',
    stats: [
        { label: 'GDP Growth', value: '7.2%', trend: '+0.3%', icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
        { label: 'CPI Inflation', value: '4.8%', trend: '-0.2%', icon: <Wallet className="w-5 h-5 text-amber-500" /> },
        { label: 'Forex Reserves', value: '$645B', trend: 'Stable', icon: <Coins className="w-5 h-5 text-indigo-500" /> },
        { label: 'GVA Growth', value: '6.9%', trend: '+0.1%', icon: <BarChart3 className="w-5 h-5 text-purple-500" /> },
    ],
    visualizations: [
        { 
            id: 'budget', 
            label: 'Budget Explorer', 
            icon: <PieChart className="w-4 h-4" />, 
            description: 'Union Budget Anatomy',
            component: <BudgetExplorerViz />
        },
        { 
            id: 'flow', 
            label: 'Circular Flow', 
            icon: <ArrowRightLeft className="w-4 h-4" />, 
            description: 'Money & Resource Flow',
            component: <CircularFlowViz />
        },
        { 
            id: 'supply', 
            label: 'Demand & Supply', 
            icon: <TrendingUp className="w-4 h-4" />, 
            description: 'Market Equilibrium',
            component: <DemandSupplyViz />
        },
    ],
    plannerConfig: ECONOMY_CONFIG,
    flashcards: economyFlashcards,
};
