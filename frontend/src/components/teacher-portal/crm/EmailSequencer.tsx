"use client";

import React from 'react';
import { useCRMStore, EmailStep } from './store/CRMStore';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Clock, ArrowRight, GripVertical, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, Reorder } from 'framer-motion';

export default function EmailSequencer() {
    const { emailSequence, addSequenceStep, reorderSequence } = useCRMStore();

    // Handling drag reorder would require wiring up Reorder.Group correctly with state
    // For this prototype, we'll just render list and mock the interaction

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-indigo-500" />
                        Automation Pipelines
                    </CardTitle>
                    <p className="text-xs text-neutral-500">Nurture leads automatically based on behavior triggers.</p>
                </div>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    + New Step
                </Button>
            </CardHeader>
            <CardContent className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl min-h-[400px]">

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-indigo-200 dark:bg-indigo-900 z-0" />

                    <div className="space-y-6 relative z-10">
                        {emailSequence.map((step, i) => (
                            <motion.div
                                key={step.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-4 group"
                            >
                                {/* Time delay Node */}
                                <div className="flex flex-col items-center gap-1 mt-1">
                                    <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 border-2 border-indigo-500 flex items-center justify-center shadow-sm z-10">
                                        <Clock className="w-5 h-5 text-indigo-500" />
                                    </div>
                                    <div className="text-[10px] font-bold text-neutral-400 bg-white dark:bg-neutral-900 px-1 py-0.5 rounded border">
                                        +{step.delayDays}d
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-move">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <GripVertical className="w-4 h-4 text-neutral-300" />
                                            <h4 className="font-bold text-neutral-800 dark:text-neutral-200">{step.name}</h4>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full">
                                            <Send className="w-3 h-3" />
                                            {step.stats.openRate}% Open Rate
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-neutral-500 pl-6">
                                        <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded">Trigger: {step.trigger}</span>
                                        <ArrowRight className="w-3 h-3" />
                                        <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">Template: {step.template}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* End Node */}
                        <div className="flex items-center gap-4 opacity-50">
                            <div className="w-12 h-12 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center bg-transparent ml-0">
                                <div className="w-3 h-3 bg-neutral-300 rounded-full" />
                            </div>
                            <div className="text-sm text-neutral-400 font-medium">End of Sequence</div>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
