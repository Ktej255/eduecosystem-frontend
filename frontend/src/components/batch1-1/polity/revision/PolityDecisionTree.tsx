"use client";

import React, { useState } from 'react';
import { MONEY_BILL_FLOW, ANTI_DEFECTION_FLOW, FlowNode } from '../data/flow-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, RefreshCw, GitGraph, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ScenarioType = 'MONEY_BILL' | 'ANTI_DEFECTION';

export default function PolityDecisionTree() {
    const [scenario, setScenario] = useState<ScenarioType>('MONEY_BILL');
    const [history, setHistory] = useState<string[]>(['start']);

    const currentFlow = scenario === 'MONEY_BILL' ? MONEY_BILL_FLOW : ANTI_DEFECTION_FLOW;
    const currentNodeId = history[history.length - 1];
    const currentNode = currentFlow[currentNodeId];

    const handleOptionClick = (nextId: string) => {
        setHistory([...history, nextId]);
    };

    const handleBack = () => {
        if (history.length > 1) {
            setHistory(history.slice(0, -1));
        }
    };

    const handleReset = () => {
        setHistory(['start']);
    };

    const handleScenarioChange = (val: string) => {
        setScenario(val as ScenarioType);
        setHistory(['start']);
    };

    return (
        <Card className="max-w-4xl mx-auto border-4 border-slate-200 bg-white shadow-xl overflow-hidden font-['Kalam']">
            <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <GitGraph className="text-cyan-400" size={28} />
                    <div>
                        <h2 className="text-2xl font-black">The Decision Tree</h2>
                        <p className="text-slate-400 text-sm font-bold">Visualize the Constitutional Logic</p>
                    </div>
                </div>

                <Select value={scenario} onValueChange={handleScenarioChange}>
                    <SelectTrigger className="w-[240px] bg-slate-800 border-slate-700 text-white font-bold">
                        <SelectValue placeholder="Select Scenario" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 text-white border-slate-700">
                        <SelectItem value="MONEY_BILL">💰 Money Bill Journey</SelectItem>
                        <SelectItem value="ANTI_DEFECTION">⚖️ Anti-Defection Law</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <CardContent className="p-8 min-h-[500px] flex flex-col text-center items-center justify-center relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentNodeId} // Triggers animation on change
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-2xl"
                    >
                        {/* Question / Text */}
                        <h3 className={`text-3xl font-black mb-8 leading-snug
              ${currentNode.type === 'end_fail' ? 'text-red-600' :
                                currentNode.type === 'end_success' ? 'text-green-600' : 'text-slate-800'}
            `}>
                            {currentNode.text}
                        </h3>

                        {/* Note Box */}
                        {currentNode.note && (
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-amber-900 text-left rounded-r-lg shadow-sm flex items-start gap-3">
                                <Info className="shrink-0 mt-1" size={20} />
                                <span className="font-semibold">{currentNode.note}</span>
                            </div>
                        )}

                        {/* Options */}
                        {currentNode.options ? (
                            <div className="grid gap-4">
                                {currentNode.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(opt.nextId)}
                                        className="group relative w-full p-5 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-white hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-lg font-bold text-slate-700 text-left flex justify-between items-center"
                                    >
                                        <span>{opt.label}</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">➜</span>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            // End State Actions
                            <div className="flex justify-center gap-4 mt-8">
                                <Button
                                    onClick={handleReset}
                                    className="bg-slate-900 hover:bg-black text-white px-8 py-6 text-xl rounded-xl font-bold shadow-lg flex items-center gap-2"
                                >
                                    <RefreshCw size={20} /> Restart Flow
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation & Breadcrumbs */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    {history.length > 1 && (
                        <button
                            onClick={handleBack}
                            className="text-slate-400 hover:text-slate-800 flex items-center gap-1 text-sm font-bold transition-colors"
                        >
                            <ArrowLeft size={16} /> Back
                        </button>
                    )}

                    <div className="flex gap-1 overflow-x-auto max-w-[60%] justify-end ml-auto pb-2 scrollbar-hide">
                        {history.map((id, idx) => (
                            <div key={idx} className="flex items-center shrink-0">
                                {idx > 0 && <span className="text-slate-300 mx-1">›</span>}
                                <span className={`text-xs px-2 py-1 rounded-full font-bold
                             ${id === currentNodeId
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-slate-100 text-slate-400'}
                         `}>
                                    {idx === 0 ? 'Start' : `Step ${idx}`}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
