"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { GEOGRAPHY_SCHEDULE } from '@/components/upsc/subjects/geography/data/geography-schedule-data';
import { ArrowLeft, Play, FileText, Target, BookOpen, Clock, Download, Video, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function GuidedLessonContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const dayQuery = searchParams.get('day');
    const day = dayQuery ? parseInt(dayQuery) : 1;
    
    const dayData = GEOGRAPHY_SCHEDULE.find(d => d.day === day) || GEOGRAPHY_SCHEDULE[0];

    return (
        <div className="min-h-screen bg-background pb-20 animate-in fade-in">
            {/* Header */}
            <div className="bg-indigo-900 text-white sticky top-0 z-30 pt-6 pb-4 border-b border-indigo-800 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors mb-4 text-sm font-bold"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Schedule
                    </button>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-[10px] font-black tracking-widest uppercase border border-indigo-400/30">
                                    Day {dayData.day} Premium Lesson
                                </span>
                                <span className="text-indigo-300 text-sm hidden sm:inline-block">• {dayData.date}</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-black">{dayData.title}</h1>
                            <p className="text-indigo-200 mt-1 max-w-2xl text-sm">{dayData.description}</p>
                        </div>
                        
                        <div className="flex items-center gap-3 shrink-0">
                            <Button 
                                onClick={() => router.push(`/student/upsc/geography?day=${day}&practice=true`)}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20"
                            >
                                <Target className="w-4 h-4 mr-2" /> Start MCQs
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-6">
                        <Tabs defaultValue="video" className="w-full">
                            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6">
                                <TabsTrigger 
                                    value="video" 
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 data-[state=active]:shadow-none pb-3 pt-2 px-1 rounded-t-lg items-center gap-2 text-base font-bold"
                                >
                                    <Video className="w-4 h-4" /> Video Lecture
                                </TabsTrigger>
                                <TabsTrigger 
                                    value="notes" 
                                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:bg-transparent data-[state=active]:text-indigo-600 data-[state=active]:shadow-none pb-3 pt-2 px-1 rounded-t-lg items-center gap-2 text-base font-bold"
                                >
                                    <FileText className="w-4 h-4" /> Summary Notes
                                </TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="video" className="mt-6 focus-visible:outline-none focus-visible:ring-0">
                                {/* Video Placeholder Infrastructure */}
                                <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                    
                                    <div className="z-20 flex flex-col items-center justify-center text-center p-6">
                                        <div className="w-20 h-20 rounded-full bg-indigo-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                                            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
                                                <Play className="w-8 h-8 text-white ml-1 fill-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Lecture: {dayData.title}</h3>
                                        <p className="text-slate-300 text-sm max-w-md">The video lecture will be embedded here. Administrators can upload or link course videos directly to this module.</p>
                                    </div>
                                    
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white/70 text-sm bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 00:00 / 45:00</span>
                                            <span className="hidden sm:inline">1080p HD</span>
                                        </div>
                                        <div>Progress: 0%</div>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex items-center justify-between">
                                    <h3 className="text-lg font-bold">About this Lecture</h3>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <CheckCircle className="w-4 h-4" /> Mark Complete
                                    </Button>
                                </div>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                    In this lecture, we dive extremely deep into the core concepts required for the UPSC examination regarding this specific topic. Expect comprehensive map coverage, dynamic data references, and previous year question analysis woven directly into the core teaching material.
                                </p>
                            </TabsContent>
                            
                            <TabsContent value="notes" className="mt-6 focus-visible:outline-none focus-visible:ring-0">
                                <Card className="border-border shadow-sm">
                                    <CardContent className="p-0">
                                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-t-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-indigo-100 dark:bg-indigo-800 rounded-lg text-indigo-700 dark:text-indigo-300">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-foreground leading-none mb-1">Detailed Handouts & Maps</h3>
                                                    <p className="text-xs text-muted-foreground">PDF Format • 2.4 MB</p>
                                                </div>
                                            </div>
                                            <Button className="shrink-0 gap-2 bg-indigo-600 hover:bg-indigo-700">
                                                <Download className="w-4 h-4" /> Download PDF
                                            </Button>
                                        </div>
                                        
                                        <div className="p-8 flex flex-col items-center justify-center min-h-[400px] text-center bg-muted/10">
                                            <BookOpen className="w-16 h-16 text-muted-foreground/30 mb-4" />
                                            <h4 className="text-lg font-bold mb-2">PDF Viewer Infrastructure</h4>
                                            <p className="text-sm text-muted-foreground max-w-sm">
                                                The integrated PDF viewer component will render the server-uploaded notes here dynamically without requiring external downloads.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    
                    {/* Sidebar Area */}
                    <div className="w-full lg:w-80 space-y-6">
                        <Card className="border-border shadow-sm">
                            <div className="p-4 border-b border-border bg-slate-50 dark:bg-[#111] rounded-t-xl text-sm font-bold flex items-center gap-2">
                                <Target className="w-4 h-4 text-indigo-600" /> Syllabus Coverage
                            </div>
                            <CardContent className="p-4">
                                <ul className="space-y-3">
                                    {dayData.topics.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card className="border-emerald-200 dark:border-emerald-800 shadow-sm bg-emerald-50/50 dark:bg-emerald-900/10">
                            <div className="p-4 border-b border-emerald-100 dark:border-emerald-800 text-sm font-bold flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                                <CheckCircle className="w-4 h-4" /> Next Step
                            </div>
                            <CardContent className="p-4">
                                <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-4 font-medium">
                                    After completing the video and reading the notes, test your retention with today's practice MCQs.
                                </p>
                                <Button 
                                    variant="outline"
                                    onClick={() => router.push(`/student/upsc/geography?day=${day}&practice=true`)}
                                    className="w-full bg-white dark:bg-black border-emerald-300 hover:bg-emerald-50 text-emerald-700 transition-colors"
                                >
                                    Proceed to Testing
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GeographyPremiumLessonPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Infrastructure...</div>}>
            <GuidedLessonContent />
        </Suspense>
    );
}
