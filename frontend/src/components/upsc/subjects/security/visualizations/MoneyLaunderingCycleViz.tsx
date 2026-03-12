"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, Banknote, Landmark, Layers } from 'lucide-react';

const STAGES = [
    {
        id: 'placement',
        title: '1. Placement',
        icon: <Banknote className="w-6 h-6" />,
        desc: 'Introducing "dirty money" into the financial system.',
        examples: ['Smurfing (breaking into small deposits)', 'Currency Smuggling', 'Asset Purchase'],
        color: 'bg-red-500',
        textColor: 'text-red-500'
    },
    {
        id: 'layering',
        title: '2. Layering',
        icon: <Layers className="w-6 h-6" />,
        desc: 'Concealing the source through complex transactions.',
        examples: ['Wire Transfers', 'Shell Companies', 'Offshore Accounts'],
        color: 'bg-orange-500',
        textColor: 'text-orange-500'
    },
    {
        id: 'integration',
        title: '3. Integration',
        icon: <Landmark className="w-6 h-6" />,
        desc: 'Money re-enters the economy appearing legitimate.',
        examples: ['Real Estate Investment', 'Luxury Assets', 'Business Ventures'],
        color: 'bg-emerald-500',
        textColor: 'text-emerald-500'
    }
];

export default function MoneyLaunderingCycleViz() {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <div className="bg-card dark:bg-[#0a0a0a] rounded-xl border border-border p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-6 text-center text-foreground flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5 text-indigo-500" />
                Cycle of Money Laundering
            </h3>

            {/* Circular/Linear Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 relative">
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-muted -z-0 -translate-y-1/2" />

                {STAGES.map((stage, index) => (
                    <React.Fragment key={stage.id}>
                        <motion.div
                            className={`relative z-10 flex flex-col items-center cursor-pointer group w-full md:w-1/3`}
                            onClick={() => setActiveStage(index)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 shadow-xl
                                ${activeStage === index
                                    ? `${stage.color} text-white border-white dark:border-[#111]`
                                    : 'bg-card text-muted-foreground border-border'
                                }`}>
                                {stage.icon}
                            </div>
                            <div className="mt-4 text-center">
                                <h4 className={`font-bold transition-colors ${activeStage === index ? stage.textColor : 'text-muted-foreground'}`}>
                                    {stage.title}
                                </h4>
                            </div>
                        </motion.div>
                        {index < STAGES.length - 1 && (
                            <ArrowRight className="md:hidden text-slate-300 transform rotate-90 my-2" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Details Panel */}
            <div className={`rounded-xl p-6 ${STAGES[activeStage].color} bg-opacity-10 border border-border`}>
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${STAGES[activeStage].color} text-white shadow-lg`}>
                        {STAGES[activeStage].icon}
                    </div>
                    <div>
                        <h4 className={`text-lg font-bold ${STAGES[activeStage].textColor} mb-1`}>
                            {STAGES[activeStage].title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            {STAGES[activeStage].desc}
                        </p>

                        <div className="bg-card dark:bg-black/20 rounded-lg p-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Common Techniques</p>
                            <div className="flex flex-wrap gap-2">
                                {STAGES[activeStage].examples.map(ex => (
                                    <span key={ex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border">
                                        {ex}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
