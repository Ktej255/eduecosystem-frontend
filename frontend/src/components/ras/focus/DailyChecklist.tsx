
"use client";

import React from 'react';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

export interface TaskItem {
    id: string;
    label: string;
    subLabel: string;
    completed: boolean;
    slot: 'A' | 'B' | 'C';
}

interface DailyChecklistProps {
    tasks: TaskItem[];
    onToggle: (id: string) => void;
}

export default function DailyChecklist({ tasks, onToggle }: DailyChecklistProps) {
    const completedCount = tasks.filter(t => t.completed).length;
    const progress = (completedCount / tasks.length) * 100;

    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        Daily Protocol
                    </h3>
                    <p className="text-neutral-400 text-xs mt-1">Complete all 3 slots to maintain streak.</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold text-amber-500">{Math.round(progress)}%</span>
                </div>
            </div>

            <Progress value={progress} className="h-2 bg-neutral-800 mb-8" indicatorClassName="bg-amber-500" />

            <div className="space-y-4">
                {tasks.map((task, index) => (
                    <div
                        key={task.id}
                        onClick={() => onToggle(task.id)}
                        className={cn(
                            "group cursor-pointer flex items-center gap-4 p-4 rounded-xl border transition-all duration-200",
                            task.completed
                                ? "bg-green-900/10 border-green-900/30"
                                : "bg-neutral-800/30 border-neutral-800 hover:border-amber-500/30 hover:bg-neutral-800"
                        )}
                    >
                        <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                            task.completed
                                ? "bg-green-500 border-green-500 text-black"
                                : "border-neutral-600 group-hover:border-amber-500"
                        )}>
                            {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div className="flex-1">
                            <div className={cn(
                                "flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-0.5",
                                task.completed ? "text-green-500" : "text-amber-500"
                            )}>
                                Slot {task.slot}
                            </div>
                            <div className={cn(
                                "font-medium transition-all",
                                task.completed ? "text-neutral-500 line-through" : "text-white"
                            )}>
                                {task.label}
                            </div>
                            <div className="text-xs text-neutral-500 mt-0.5">{task.subLabel}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
