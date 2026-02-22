import React from 'react';
import { ArrowRightLeft, BrainCircuit, Lightbulb, Scale } from 'lucide-react';
import { POLITY_MODULES } from './data/polity-registry';

export default function PolityLogicModules() {
    const logicModules = [
        {
            id: 'L2-1',
            title: 'Parliament vs State Legislature',
            icon: ArrowRightLeft,
            description: "Direct comparison of legislative procedures, powers, and composition.",
            status: 'unlocked',
            mastery: 0
        },
        {
            id: 'L2-2',
            title: 'President vs Governor',
            icon: Scale,
            description: "Pardoning powers, veto powers, and constitutional position analysis.",
            status: 'locked',
            mastery: 0
        },
        {
            id: 'L2-3',
            title: 'Fundamental Rights vs DPSP',
            icon: Scale,
            description: "Conflict, harmony, and evolution through Supreme Court judgements.",
            status: 'locked',
            mastery: 0
        },
        {
            id: 'L2-4',
            title: 'Emergency Provisions Logic',
            icon: BrainCircuit,
            description: "Impact on Federalism and Fundamental Rights during National vs Financial Emergency.",
            status: 'locked',
            mastery: 0
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-[#1F2937] flex items-center gap-2">
                        <BrainCircuit className="w-6 h-6 text-amber-500" />
                        Level 2: The Logic (Advanced)
                    </h2>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Cross-topic analysis. Do not attempt if you haven't mastered Level 1 facts.
                    </p>
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-lg font-bold text-sm">
                    Logic Score: 0/100
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {logicModules.map((module) => (
                    <div
                        key={module.id}
                        className={`group relative bg-card dark:bg-[#111] rounded-2xl p-6 border-2 transition-all ${module.status === 'unlocked'
                                ? 'border-amber-200 dark:border-amber-900/50 hover:border-amber-500 hover:shadow-xl cursor-pointer'
                                : 'border-border opacity-60 grayscale'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 group-hover:scale-110 transition-transform">
                                <module.icon className="w-6 h-6" />
                            </div>
                            {module.status === 'locked' && (
                                <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded font-bold">
                                    LOCKED 🔒
                                </span>
                            )}
                        </div>

                        <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-amber-600 transition-colors">
                            {module.title}
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 h-10">
                            {module.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                <Lightbulb className="w-3 h-3" />
                                12 Logic Concepts
                            </div>
                            <button className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${module.status === 'unlocked'
                                    ? 'bg-amber-100 text-amber-700 hover:bg-amber-600 hover:text-white'
                                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                                }`}>
                                {module.status === 'unlocked' ? 'Start Analysis' : 'Complete Previous'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
