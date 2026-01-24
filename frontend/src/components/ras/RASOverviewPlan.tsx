import React from 'react';
import { motion } from 'framer-motion';
import { RAS_REVISION_PLAN, RASDayPlan } from '@/data/ras-revision-plan';
import { Calendar, CheckCircle2, Lock, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function RASOverviewPlan() {
    // Calculate Progress
    const today = new Date();
    // Reset time for accurate date comparison
    today.setHours(0, 0, 0, 0);

    const planWithStatus = RAS_REVISION_PLAN.map(day => {
        const planDate = new Date(day.date);
        planDate.setHours(0, 0, 0, 0);

        const isPast = planDate < today;
        const isToday = planDate.getTime() === today.getTime();

        // Mock status logic (replace with actual user progress later)
        // If past, assume done for visualization unless explicitly missed (mock behavior)
        let status = day.status;
        if (isPast) status = 'completed';
        if (isToday) status = 'active';
        if (planDate > today) status = 'locked';

        return { ...day, status, isToday, isPast };
    });

    const totalDays = 70;
    const completedDays = planWithStatus.filter(d => d.status === 'completed').length;
    const currentDayPlan = planWithStatus.find(d => d.isToday) || planWithStatus[0];
    const currentDayNum = currentDayPlan.day;
    const progressPercent = (completedDays / totalDays) * 100;

    // Remaining to Feb 20 calculation
    const feb20 = new Date("2026-02-20");
    const daysUntilFeb20 = Math.ceil((feb20.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));


    return (
        <div className="space-y-6">
            {/* Summary Card */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-3 bg-gradient-to-r from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Calendar className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-amber-500 border-amber-500/30 bg-amber-500/10">
                                Cycle 1: Foundation
                            </Badge>
                            <span className="text-neutral-400 text-xs font-mono">{new Date().toDateString()}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Day {currentDayNum} <span className="text-neutral-500 text-lg">/ 70</span>
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-neutral-300 mb-4">
                            <span>Target: <span className="text-white font-bold">{currentDayPlan.title}</span></span>
                        </div>

                        <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mb-2">
                            <div className="bg-amber-500 h-full transition-all duration-1000" style={{ width: `${progressPercent}%` }} />
                        </div>
                        <div className="flex justify-between text-xs text-neutral-500">
                            <span>{completedDays} Days Completed</span>
                            <span>{totalDays - completedDays} Days Remaining</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    <div className="mb-2 text-neutral-400 text-xs uppercase tracking-wider font-bold">Until Feb 20</div>
                    <div className="text-4xl font-bold text-white mb-1">{Math.max(0, daysUntilFeb20)}</div>
                    <div className="text-xs text-neutral-500">Days Left</div>
                    <div className="mt-4 text-[10px] text-neutral-600 border-t border-neutral-800 pt-2 w-full">
                        Checkpoint: Phase 2 Start
                    </div>
                </div>
            </div>

            {/* Plan List */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 text-xs font-bold text-neutral-500 uppercase tracking-wider border-b border-neutral-800 bg-neutral-900/80 sticky top-0 z-20 backdrop-blur-md">
                    <div className="col-span-2 md:col-span-1">Day</div>
                    <div className="col-span-10 md:col-span-5">Topic & Focus</div>
                    <div className="col-span-6 md:col-span-3 hidden md:block">Sessions</div>
                    <div className="col-span-6 md:col-span-3 hidden md:block text-right">Status</div>
                </div>

                <ScrollArea className="h-[600px]">
                    <div className="divide-y divide-neutral-800">
                        {planWithStatus.map((plan: any, index) => (
                            <motion.div
                                key={plan.day}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.02 }}
                                id={plan.isToday ? "current-day" : undefined}
                                className={cn(
                                    "grid grid-cols-12 gap-4 p-4 hover:bg-neutral-800/30 transition-colors group relative",
                                    plan.isToday ? "bg-amber-500/10 hover:bg-amber-500/15 border-l-2 border-amber-500" : ""
                                )}
                            >
                                {/* Day Column */}
                                <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg",
                                        plan.isToday ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" :
                                            plan.status === 'completed' ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                                                "bg-neutral-800 text-neutral-500"
                                    )}>
                                        {plan.day}
                                    </div>
                                    <span className={cn(
                                        "text-[10px] mt-1 text-center w-10",
                                        plan.isToday ? "text-amber-500 font-bold" : "text-neutral-500"
                                    )}>
                                        {new Date(plan.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>

                                {/* content Column */}
                                <div className="col-span-10 md:col-span-5 flex flex-col justify-center">
                                    <h3 className={cn(
                                        "font-bold text-base mb-1 group-hover:text-amber-500 transition-colors",
                                        plan.status === 'locked' ? "text-neutral-500" : "text-white"
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
                                    {plan.sessions.slice(0, 2).map((session: any, i: number) => (
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
                                    {plan.isToday && (
                                        <Badge variant="default" className="bg-amber-500 text-black hover:bg-amber-600 gap-1 animate-pulse">
                                            Today <ChevronRight className="w-3 h-3" />
                                        </Badge>
                                    )}
                                    {plan.status === 'locked' && (
                                        <div className="flex items-center gap-1 text-neutral-700 text-sm">
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
