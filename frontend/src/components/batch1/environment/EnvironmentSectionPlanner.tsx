"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, CheckCircle, ChevronRight, Play, BookOpen, Target, FileText, Leaf, Globe, Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ENVIRONMENT_SCHEDULE } from './data/environment-schedule-data';

// Helper to get day status
const getDayStatus = (day: number) => {
    if (day <= 1) return 'completed';
    if (day === 2) return 'in-progress';
    return 'locked';
};

interface EnvironmentSectionPlannerProps {
    onViewVisuals?: () => void;
}

export default function EnvironmentSectionPlanner({ onViewVisuals }: EnvironmentSectionPlannerProps) {
    const router = useRouter();
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const [completedDays, setCompletedDays] = useState<number[]>([1]);

    const dayData = ENVIRONMENT_SCHEDULE.find(d => d.day === selectedDay) || ENVIRONMENT_SCHEDULE[0];
    const progressPercentage = Math.round((completedDays.length / ENVIRONMENT_SCHEDULE.length) * 100);

    const handleDayClick = (day: number) => {
        setSelectedDay(day);
    };

    const handleStartSession = () => {
        // Routing logic for Environment modules
        if (dayData.topics.includes('biodiversity')) {
            router.push('/student/batch1/environment/biodiversity');
        } else if (dayData.topics.includes('climate-change')) {
            router.push('/student/batch1/environment/climate-change');
        } else {
            router.push(`/student/batch1/environment/${dayData.moduleId}`);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
            {/* LEFT SIDE: SCHEDULE LIST */}
            <Card className="w-full lg:w-1/3 flex flex-col border-emerald-200 dark:border-emerald-900 shadow-sm overflow-hidden bg-white dark:bg-slate-900">
                <div className="p-4 border-b border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-900/20">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg flex items-center gap-2 text-emerald-800 dark:text-emerald-400">
                            <Calendar className="w-5 h-5" />
                            15-Day Ecology Plan
                        </h3>
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200">
                            {progressPercentage}% Complete
                        </Badge>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                            <span>Progress</span>
                            <span>{completedDays.length}/{ENVIRONMENT_SCHEDULE.length} Days</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2 bg-emerald-100 [&>div]:bg-emerald-600" />
                    </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-3">
                        {ENVIRONMENT_SCHEDULE.map((day) => {
                            const status = getDayStatus(day.day);
                            const isSelected = selectedDay === day.day;

                            return (
                                <div
                                    key={day.day}
                                    onClick={() => handleDayClick(day.day)}
                                    className={`
                                        relative p-3 rounded-xl border transition-all cursor-pointer group
                                        ${isSelected
                                            ? 'bg-emerald-600 border-emerald-600 shadow-md transform scale-[1.02] z-10'
                                            : 'bg-white dark:bg-slate-950 border-emerald-100 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border
                                            ${isSelected
                                                ? 'bg-white/20 border-white/30 text-white'
                                                : status === 'completed'
                                                    ? 'bg-emerald-100 border-emerald-200 text-emerald-700'
                                                    : 'bg-slate-100 border-slate-200 text-slate-500'
                                            }
                                        `}>
                                            {status === 'completed' ? <CheckCircle className="w-4 h-4" /> : day.day}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>
                                                {day.title}
                                            </h4>
                                            <p className={`text-[10px] truncate ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                                                {day.date} • {day.description}
                                            </p>
                                        </div>

                                        {isSelected && <ChevronRight className="w-4 h-4 text-white opacity-80" />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            </Card>

            {/* RIGHT SIDE: DAY DETAIL */}
            <div className="flex-1 flex flex-col gap-6 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="h-full flex flex-col gap-6"
                    >
                        <Card className="border-none shadow-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden relative shrink-0">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-200 via-transparent to-transparent"></div>
                            <Leaf className="absolute -right-6 -bottom-6 w-32 h-32 text-white/10 rotate-12" />

                            <CardContent className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md">
                                                Day {dayData.day}
                                            </Badge>
                                            <span className="text-emerald-100 text-sm font-medium">{dayData.date}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2 leading-tight">{dayData.title}</h2>
                                        <p className="text-emerald-100 max-w-xl">{dayData.description}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <Droplets className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        size="lg"
                                        onClick={handleStartSession}
                                        className="bg-white text-emerald-600 hover:bg-emerald-50 border-0 font-bold shadow-lg shadow-emerald-900/20"
                                    >
                                        <Play className="w-4 h-4 mr-2 fill-current" />
                                        Start Learning
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-white/10"
                                        onClick={() => toast.info("Resources coming soon.")}
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        Notes
                                    </Button>

                                    {onViewVisuals && (
                                        <Button
                                            size="lg"
                                            variant="ghost"
                                            className="text-emerald-100 hover:bg-emerald-800/20 hover:text-white"
                                            onClick={onViewVisuals}
                                        >
                                            <Globe className="w-4 h-4 mr-2" />
                                            Visuals
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                            <Card className="border-emerald-100 dark:border-emerald-900 shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={handleStartSession}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">Study Material</h4>
                                        <p className="text-sm text-slate-500 mb-3">Comprehensive reading material for {dayData.title}.</p>
                                        <div className="text-xs font-bold text-emerald-600 flex items-center">
                                            READ NOW <ChevronRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-emerald-100 dark:border-emerald-900 shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => toast.info("MCQs coming soon!")}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1 group-hover:text-teal-600 transition-colors">Test Practice</h4>
                                        <p className="text-sm text-slate-500 mb-3">Assessment for {dayData.title} topics.</p>
                                        <div className="text-xs font-bold text-teal-600 flex items-center">
                                            START TEST <ChevronRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
