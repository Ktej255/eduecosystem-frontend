"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, CheckCircle, ChevronRight, Play, BookOpen, Target, FileText,
    Rocket, Shield, Microscope, Network, Zap, Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { SCI_TECH_SCHEDULE } from './data/daily-schedule-data';

// Helper to get day status
const getDayStatus = (day: number) => {
    if (day <= 1) return 'completed';
    if (day === 2) return 'in-progress';
    return 'locked';
};

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Space': return <Rocket className="w-5 h-5" />;
        case 'Defense': return <Shield className="w-5 h-5" />;
        case 'Biology': return <Microscope className="w-5 h-5" />;
        case 'IT': return <Network className="w-5 h-5" />;
        case 'Energy': return <Zap className="w-5 h-5" />;
        default: return <BookOpen className="w-5 h-5" />;
    }
};

export default function ScienceTechSectionPlanner() {
    const router = useRouter();
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const [completedDays, setCompletedDays] = useState<number[]>([1]);

    const dayData = SCI_TECH_SCHEDULE.find(d => d.day === selectedDay) || SCI_TECH_SCHEDULE[0];
    const progressPercentage = Math.round((completedDays.length / SCI_TECH_SCHEDULE.length) * 100);

    const handleDayClick = (day: number) => {
        setSelectedDay(day);
    };

    const handleStartSession = () => {
        router.push(`/student/upsc/science-tech/${dayData.topicId}`);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] min-h-[600px]">
            {/* LEFT SIDE: SCHEDULE LIST */}
            <Card className="w-full lg:w-1/3 flex flex-col border-indigo-200 dark:border-indigo-900 shadow-sm overflow-hidden bg-card">
                <div className="p-4 border-b border-indigo-100 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-900/20">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg flex items-center gap-2 text-indigo-800 dark:text-indigo-400">
                            <Calendar className="w-5 h-5" />
                            18-Day Tech Mastery
                        </h3>
                        <Badge variant="outline" className="bg-indigo-50 text-indigo-600 border-indigo-200">
                            {progressPercentage}% Complete
                        </Badge>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                            <span>Progress</span>
                            <span>{completedDays.length}/{SCI_TECH_SCHEDULE.length} Days</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2 bg-indigo-100 [&>div]:bg-indigo-600" />
                    </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-3">
                        {SCI_TECH_SCHEDULE.map((day) => {
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
                                            : 'bg-card border-indigo-100 dark:border-indigo-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
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

                                        <div className="flex-1 min-w-0">
                                            <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-foreground'}`}>
                                                {day.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <Badge variant="outline" className={`text-[9px] px-1 py-0 ${isSelected ? 'border-white/30 text-indigo-100' : 'border-indigo-200 text-indigo-600'}`}>
                                                    {day.category}
                                                </Badge>
                                                <p className={`text-[10px] truncate ${isSelected ? 'text-indigo-100' : 'text-muted-foreground'}`}>
                                                    {day.subtopics[0]}...
                                                </p>
                                            </div>
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
                        <Card className="border-none shadow-lg bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden relative shrink-0">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent"></div>
                            <div className="absolute -right-6 -bottom-6 opacity-10 rotate-12">
                                {getCategoryIcon(dayData.category)}
                            </div>

                            <CardContent className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-card/20 hover:bg-card/30 text-white border-0 backdrop-blur-md">
                                                Day {dayData.day}
                                            </Badge>
                                            <span className="text-indigo-100 text-sm font-medium">{dayData.category}</span>
                                        </div>
                                        <h2 className="text-3xl font-bold mb-2 leading-tight">{dayData.title}</h2>
                                        <p className="text-indigo-100 max-w-xl">{dayData.description}</p>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="w-16 h-16 rounded-2xl bg-card/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            {getCategoryIcon(dayData.category)}
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
                                        onClick={() => toast.info("Resources coming soon.")}
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        Tech Notes
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                            <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={handleStartSession}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 group-hover:text-indigo-600 transition-colors">Study Material</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Comprehensive reading material for {dayData.title}.</p>
                                        <div className="text-xs font-bold text-indigo-600 flex items-center">
                                            READ NOW <ChevronRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => toast.info("MCQs coming soon!")}>
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1 group-hover:text-purple-600 transition-colors">Test Practice</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Assessment for {dayData.category} topics.</p>
                                        <div className="text-xs font-bold text-purple-600 flex items-center">
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
