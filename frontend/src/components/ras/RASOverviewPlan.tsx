import React from 'react';
import { motion } from 'framer-motion';
import { RAS_REVISION_PLAN, RASDayPlan } from '@/data/ras-revision-plan';
import { Calendar, CheckCircle2, Lock, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function RASOverviewPlan() {
    // Group days by phase? or just a long list for now.
    // Let's do a clean list view.

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-amber-500" />
                    70-Day Master Plan
                </h2>
                <Badge variant="outline" className="text-amber-500 border-amber-500/30">
                    Cycle 1: Core Foundation
                </Badge>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 text-xs font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 bg-neutral-900/80">
                    <div className="col-span-2 md:col-span-1">Day</div>
                    <div className="col-span-10 md:col-span-5">Topic & Focus</div>
                    <div className="col-span-6 md:col-span-3 hidden md:block">Sessions</div>
                    <div className="col-span-6 md:col-span-3 hidden md:block text-right">Status</div>
                </div>

                <ScrollArea className="h-[600px]">
                    <div className="divide-y divide-neutral-800">
                        {RAS_REVISION_PLAN.map((plan: RASDayPlan, index) => (
                            <motion.div
                                key={plan.day}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.02 }}
                                className={cn(
                                    "grid grid-cols-12 gap-4 p-4 hover:bg-neutral-800/30 transition-colors group",
                                    plan.status === 'active' ? "bg-amber-500/5 hover:bg-amber-500/10" : ""
                                )}
                            >
                                {/* Day Column */}
                                <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg",
                                        plan.status === 'active' ? "bg-amber-500 text-black" :
                                            plan.status === 'completed' ? "bg-green-500/20 text-green-500" :
                                                "bg-neutral-800 text-neutral-500"
                                    )}>
                                        {plan.day}
                                    </div>
                                    <span className="text-[10px] text-neutral-500 mt-1 text-center w-10">
                                        {new Date(plan.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                {/* content Column */}
                                <div className="col-span-10 md:col-span-5 flex flex-col justify-center">
                                    <h3 className={cn(
                                        "font-bold text-base mb-1 group-hover:text-amber-500 transition-colors",
                                        plan.status === 'locked' ? "text-neutral-400" : "text-white"
                                    )}>
                                        {plan.title}
                                    </h3>
                                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {plan.targetHours}h Goal
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-3 h-3" />
                                            {plan.sessions.length} Sessions
                                        </div>
                                    </div>
                                </div>

                                {/* Sessions Column (Desktop) */}
                                <div className="col-span-6 md:col-span-3 hidden md:flex flex-col justify-center gap-1">
                                    {plan.sessions.slice(0, 2).map((session, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                                            <span className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                session.type === 'Deep Work' ? "bg-blue-500" :
                                                    session.type === 'Quick Review' ? "bg-amber-500" :
                                                        session.type === 'Test' ? "bg-red-500" : "bg-green-500"
                                            )} />
                                            <span className="truncate">{session.topic}</span>
                                        </div>
                                    ))}
                                    {plan.sessions.length > 2 && (
                                        <span className="text-[10px] text-neutral-500 pl-3">+{plan.sessions.length - 2} more...</span>
                                    )}
                                </div>

                                {/* Status Column */}
                                <div className="col-span-6 md:col-span-3 hidden md:flex items-center justify-end">
                                    {plan.status === 'completed' && (
                                        <Badge variant="outline" className="border-green-500/30 text-green-500 bg-green-500/10 gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Done
                                        </Badge>
                                    )}
                                    {plan.status === 'active' && (
                                        <Badge variant="default" className="bg-amber-500 text-black hover:bg-amber-600 gap-1">
                                            In Progress <ChevronRight className="w-3 h-3" />
                                        </Badge>
                                    )}
                                    {plan.status === 'locked' && (
                                        <div className="flex items-center gap-1 text-neutral-600 text-sm">
                                            <Lock className="w-3 h-3" />
                                            <span>Locked</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}
