"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Users, ShieldAlert, CheckCircle, Info, ArrowRight, RotateCcw } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ScenarioNode {
    id: string;
    text: string;
    choices: Choice[];
}

interface Choice {
    label: string;
    impact: { probity: number, utility: number };
    feedback: string;
    nextNode?: string;
}

const SCENARIOS: Record<string, ScenarioNode> = {
    start: {
        id: 'start',
        text: "You are a District Collector. A major bridge project is behind schedule. The local Minister pressures you to bypass the environmental clearance to inaugurate it before the elections. The bridge is vital for connecting remote villages to hospitals.",
        choices: [
            {
                label: "Bypass Clearance",
                impact: { probity: -10, utility: +20 },
                feedback: "The bridge is open! Villagers gain medical access, but the river ecosystem is damaged. You've compromised on legal probity for immediate utility.",
                nextNode: 'ecolevel'
            },
            {
                label: "Insist on Clearance",
                impact: { probity: +10, utility: -10 },
                feedback: "The Minister is furious. The project is delayed by 6 months. You upheld procedural integrity, but the public utility is stalled.",
                nextNode: 'minister_backlash'
            }
        ]
    },
    ecolevel: {
        id: 'ecolevel',
        text: "Three months later, a minor flood causes structural issues due to the lack of geological assessment. Do you report it or hush it up to avoid panic?",
        choices: [
            {
                label: "Report & Repair",
                impact: { probity: +15, utility: -5 },
                feedback: "Public trust is shaken, but lives are saved. The 'Crisis of Conscience' is resolved through transparency.",
            },
            {
                label: "Hush up",
                impact: { probity: -20, utility: +5 },
                feedback: "Ethical Evasion. You've protected the inauguration's image, but the risk of disaster looms. This is a failure of Administrative Ethics.",
            }
        ]
    },
    minister_backlash: {
        id: 'minister_backlash',
        text: "The Minister threatens your transfer to a remote, inactive post. Your family is settled here. Will you stick to your grounds or negotiate a middle path?",
        choices: [
            {
                label: "Stick to Grounds",
                impact: { probity: +20, utility: 0 },
                feedback: "You are transferred. But your legacy of integrity inspires the junior officers. High Ethical Capital.",
            },
            {
                label: "Negotiate Middle Path",
                impact: { probity: -5, utility: +10 },
                feedback: "You strike a deal: fast-track clearance without bypassing rules. It's a pragmatic compromise, though some call it 'Ethical Dilution'.",
            }
        ]
    }
};

export default function EthicsSimulator() {
    const [currentNode, setCurrentNode] = useState<string>('start');
    const [scores, setScores] = useState({ probity: 50, utility: 50 });
    const [history, setHistory] = useState<any[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleChoice = (choice: Choice) => {
        const newScores = {
            probity: Math.max(0, Math.min(100, scores.probity + choice.impact.probity)),
            utility: Math.max(0, Math.min(100, scores.utility + choice.impact.utility))
        };

        setScores(newScores);
        setHistory([...history, { scenario: SCENARIOS[currentNode].text, choice: choice.label, feedback: choice.feedback }]);

        if (choice.nextNode) {
            setCurrentNode(choice.nextNode);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setCurrentNode('start');
        setScores({ probity: 50, utility: 50 });
        setHistory([]);
        setShowResult(false);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 animate-in fade-in duration-700">
            {/* Stats Header */}
            <div className="grid grid-cols-2 gap-4">
                <Card className="bg-emerald-950/20 border-emerald-500/30">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="w-5 h-5 text-emerald-500" />
                            <div>
                                <p className="text-[10px] uppercase font-black text-emerald-500/50">Probity Index</p>
                                <p className="text-xl font-bold font-mono text-emerald-400">{scores.probity}%</p>
                            </div>
                        </div>
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-emerald-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${scores.probity}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-blue-950/20 border-blue-500/30">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-blue-500" />
                            <div>
                                <p className="text-[10px] uppercase font-black text-blue-500/50">Public Utility</p>
                                <p className="text-xl font-bold font-mono text-blue-400">{scores.utility}%</p>
                            </div>
                        </div>
                        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${scores.utility}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-slate-900 border-white/5 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4">
                    <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-500/10">GS4: Case Study</Badge>
                </div>

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key={currentNode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-8"
                        >
                            <div className="mb-8 mt-4">
                                <h2 className="text-2xl font-serif text-white leading-relaxed italic">
                                    "{SCENARIOS[currentNode].text}"
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {SCENARIOS[currentNode].choices.map((choice, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleChoice(choice)}
                                        className="group p-6 rounded-2xl border border-white/10 bg-white/5 text-left hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-black uppercase text-white/40 tracking-widest group-hover:text-emerald-400 transition-colors">Action {i + 1}</span>
                                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                                        </div>
                                        <p className="text-white font-bold text-lg">{choice.label}</p>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8"
                        >
                            <div className="text-center mb-8">
                                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Simulation Analysis</h2>
                                <p className="text-white/50 text-sm">Your ethical profile based on administrative decisions.</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {history.map((h, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-[10px] text-white/30 uppercase font-black mb-1">Decision {i + 1}</p>
                                        <p className="text-sm text-white/80 font-medium italic mb-2">"{h.choice}"</p>
                                        <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20 text-[11px] text-emerald-200/70 leading-relaxed">
                                            {h.feedback}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Button onClick={reset} size="lg" className="bg-white text-black hover:bg-slate-200 font-black uppercase tracking-widest">
                                    <RotateCcw className="mr-2 h-4 w-4" /> Restart
                                </Button>
                                <Button variant="outline" size="lg" className="border-white/20 text-white font-black uppercase tracking-widest">
                                    Export Analysis
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>

            <div className="flex items-center gap-2 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <Info className="w-4 h-4 text-amber-500" />
                <p className="text-[11px] text-amber-200/60 leading-tight">
                    **Note for UPSC**: High Probity shows **Integrity**; High Utility shows **Pragmatism**. GS4 answers should ideally balance both while keeping the Law of the Land as supreme.
                </p>
            </div>
        </div>
    );
}
