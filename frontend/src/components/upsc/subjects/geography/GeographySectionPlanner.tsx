"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, CheckCircle, Clock, BookOpen,
    AlertCircle, Target, Lock, Play, ChevronRight,
    TrendingUp, FileText, Award, StickyNote, BarChart2, Flame, Map, Globe, Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { GEOGRAPHY_SCHEDULE, GeographyDay } from './data/geography-schedule-data';

// Helper to get day status (mocked for now, can be connected to backend later)
const getDayStatus = (day: number) => {
    // Mock logic: Day 1-2 completed, Day 3 in progress
    if (day <= 2) return 'completed';
    if (day === 3) return 'in-progress';
    return 'locked';
};

export default function GeographySectionPlanner() {
    const router = useRouter();
    const [selectedDay, setSelectedDay] = useState<number>(1); // Default to Day 1
    const [completedDays, setCompletedDays] = useState<number[]>([1, 2]);

    // Find current day data
    const dayData = GEOGRAPHY_SCHEDULE.find(d => d.day === selectedDay) || GEOGRAPHY_SCHEDULE[0];

    // Calculate progress
    const progressPercentage = Math.round((completedDays.length / GEOGRAPHY_SCHEDULE.length) * 100);

    const handleDayClick = (day: number) => {
        setSelectedDay(day);
    };

    const handleStartSession = () => {
        // High-precision routing to the Knowledge Graph with the selected module filter
        if (dayData.moduleId) {
            router.push(`/student/upsc/geography/guided/knowledge-graph?focus=${dayData.moduleId}`);
        } else {
            router.push('/student/upsc/geography/guided/knowledge-graph');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
            {/* LEFT SIDE: SCHEDULE LIST */}
            <Card className="w-full lg:w-1/3 flex flex-col border-border shadow-sm overflow-hidden bg-card">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50/50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Compass className="w-5 h-5 text-indigo-600" />
                            Foundation Master Plan
                        </h3>
                        <Badge variant="outline" className="bg-indigo-50 text-indigo-600 border-indigo-200">
                            11 Modules
                        </Badge>
                    </div>
                    {/* Progress Bar */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-muted-foreground font-medium">
                            <span>Progress</span>
                            <span>{completedDays.length}/{GEOGRAPHY_SCHEDULE.length} Days</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2 bg-muted [&>div]:bg-indigo-600" />
                    </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-3">
                        {GEOGRAPHY_SCHEDULE.map((day, index) => {
                            const status = getDayStatus(day.day);
                            const isSelected = selectedDay === day.day;

                            return (
                                <div
                                    key={day.day}
                                    onClick={() => handleDayClick(day.day)}
                                    className={`
                                        relative p-3 rounded-xl border transition-all cursor-pointer group
                                        ${isSelected
                                            ? 'bg-indigo-600 border-indigo-600 shadow-md transform scale-[1.02] z-10'
                                            : 'bg-card border-border hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Status Icon */}
                                        <div className={`
                                            w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border
                                            ${isSelected
                                                ? 'bg-card/20 border-white/30 text-white'
                                                : status === 'completed'
                                                    ? 'bg-green-100 border-green-200 text-green-700'
                                                    : 'bg-muted border-border text-muted-foreground'
                                            }
                                        `}>
                                            {status === 'completed' ? <CheckCircle className="w-4 h-4" /> : day.day}
                                        </div>

                                        {/* Day Info */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-foreground'}`}>
                                                {day.title}
                                            </h4>
                                            <p className={`text-[10px] truncate ${isSelected ? 'text-indigo-100' : 'text-muted-foreground'}`}>
                                                {day.date} • {day.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
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
                        {/* Day Header Card */}
                        <Card className="border-none shadow-lg bg-gradient-to-br from-indigo-600 to-violet-700 text-white overflow-hidden relative shrink-0">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                            <Compass className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 rotate-12" />

                            <CardContent className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-card/20 hover:bg-card/30 text-white border-0 backdrop-blur-md">
                                                Day {dayData.day}
                                            </Badge>
                                            <span className="text-indigo-100 text-sm font-medium">{dayData.date}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2 leading-tight">{dayData.title}</h2>
                                        <p className="text-indigo-100 max-w-xl">{dayData.description}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="w-16 h-16 rounded-2xl bg-card/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <Map className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        size="lg"
                                        onClick={handleStartSession}
                                        className="bg-card text-indigo-600 hover:bg-indigo-50 border-0 font-bold shadow-lg shadow-indigo-900/20"
                                    >
                                        <Play className="w-4 h-4 mr-2 fill-current" />
                                        Start Learning
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/30 text-white hover:bg-card/10"
                                        onClick={() => toast.info("Resources are being digitized.")}
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        View Notes
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Content Area */}
                        {/* We could add generic topic breakdown here if we had it in data */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                            <Card className="border-border shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={handleStartSession}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 group-hover:text-green-600 transition-colors">Visual Study Mode</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Immersive geography content with 3D models and maps.</p>
                                        <div className="text-xs font-bold text-green-600 flex items-center">
                                            CONTINUE READING <ChevronRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => toast.info("Coming soon!")}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 group-hover:text-amber-600 transition-colors">Practice MCQs</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Test your understanding of {dayData.title}.</p>
                                        <div className="text-xs font-bold text-amber-600 flex items-center">
                                            START PRACTICE <ChevronRight className="w-3 h-3 ml-1" />
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
