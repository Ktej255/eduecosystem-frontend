"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Check, X, AlertTriangle, ArrowRight, Scale, Users, Book, Gavel } from 'lucide-react';

// Ethical Framework Data
// Data
const STEPS = [
    {
        id: 'identify',
        title: '1. Identify the Dilemma',
        Icon: AlertTriangle,
        desc: 'What is the core conflict? (e.g., Personal vs Professional, Law vs Conscience)',
        color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
    },
    {
        id: 'stakeholders',
        title: '2. Stakeholder Analysis',
        Icon: Users,
        desc: 'Who will be affected? (Public, Government, Self, Vulnerable Sections)',
        color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
        id: 'laws',
        title: '3. Legal & Constitutional Check',
        Icon: Book,
        desc: 'Is there a violation of Law, Constitution, or Rules?',
        color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    },
    {
        id: 'values',
        title: '4. Ethical Values Analysis',
        Icon: Scale,
        desc: 'Apply principles: Integrity, Compassion, impartiality, Objectivity.',
        color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
    },
    {
        id: 'options',
        title: '5. Generate Options',
        Icon: Gavel,
        desc: 'evaluate Merits & Demerits of each course of action.',
        color: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'
    }
];


export default function DilemmaFlowViz() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="w-full bg-muted dark:bg-[#0a0a0a] rounded-2xl p-6 border border-border">
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground">Ethical Decision Making Framework</h3>
                <p className="text-muted-foreground text-sm">Follow the 5-step process to resolve administrative dilemmas</p>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-4 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-slate-200 -z-0" />

                {STEPS.map((step, index) => (
                    <div
                        key={step.id}
                        className={`relative z-10 flex flex-col items-center w-full md:w-1/5 cursor-pointer group`}
                        onClick={() => setActiveStep(index)}
                    >
                        <motion.div
                            initial={false}
                            animate={{
                                scale: activeStep === index ? 1.1 : 1,
                                backgroundColor: activeStep >= index ? 'var(--bg-active)' : 'var(--bg-inactive)'
                            }}
                            className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white dark:border-[#0a0a0a] shadow-lg transition-colors duration-300
                                ${activeStep >= index
                                    ? step.color.replace('text-', 'bg-').replace('100', '500').replace('900/30', '600') + ' text-white'
                                    : 'bg-card text-muted-foreground'
                                }`}
                        >
                            {activeStep > index ? <Check className="w-8 h-8" /> : <step.Icon className="w-6 h-6" />}
                        </motion.div>

                        <div className="text-center mt-4 px-2">
                            <h4 className={`text-sm font-bold ${activeStep === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-muted-foreground dark:text-muted-foreground'}`}>
                                {step.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* Active Step Details */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-12"
                >
                    <Card className="border-l-4 border-l-indigo-600 bg-card dark:bg-[#111] overflow-hidden">
                        <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                            {(() => {
                                const CurrentIcon = STEPS[activeStep].Icon;
                                return (
                                    <div className={`p-4 rounded-xl ${STEPS[activeStep].color}`}>
                                        <CurrentIcon className="w-10 h-10" />
                                    </div>
                                );
                            })()}
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-xl font-bold text-foreground mb-2">
                                    {STEPS[activeStep].title}
                                </h4>
                                <p className="text-muted-foreground text-lg">
                                    {STEPS[activeStep].desc}
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold flex items-center gap-2 transition-colors"
                            >
                                {activeStep === STEPS.length - 1 ? 'Finish' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
