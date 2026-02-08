"use client";

import React, { useState } from 'react';
import {
    Book, Table, Clock, Brain,
    ArrowLeft, Search, GraduationCap,
    Sparkles, Gavel, Scroll, Scale,
    Gamepad2, History, Users, BarChart3,
    ArrowRightLeft, Flame
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import BodiesComparisonTable from './BodiesComparisonTable';
import SmartComparisonTables from './SmartComparisonTables';
import ArticleMemorySystem from './ArticleMemorySystem';
import PYQTrendDashboard from './PYQTrendDashboard';
import AmendmentTimeline from './AmendmentTimeline';
import SchedulesMnemonics from './SchedulesMnemonics';
import WritsWizard from './WritsWizard';
import PreambleDecoder from './PreambleDecoder';
import MajoritiesMasterclass from './MajoritiesMasterclass';
import CurrentAffairsDashboard from './CurrentAffairsDashboard';

export default function PolityRevisionDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('pyq-trends');

    return (
        <div className="min-h-screen bg-[#fff7ed] font-['Kalam']">
            {/* Header */}
            <div className="bg-[#1e293b] text-white p-6 md:p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                    <div>
                        <Button
                            variant="ghost"
                            className="text-slate-300 hover:text-white p-0 mb-2 hover:bg-transparent flex items-center gap-2"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft size={16} /> Back to Dashboard
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-black text-amber-500 mb-2 flex items-center gap-3">
                            Polity Revision Suite <Sparkles className="text-yellow-400" />
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl">
                            "High Yield. Low Effort. 100% Marks."
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                    <TabsList className="bg-slate-200/50 p-2 rounded-xl w-full flex flex-wrap justify-start gap-2 h-auto">
                        <TabsTrigger value="pyq-trends" className="px-4 py-2 rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <BarChart3 size={16} /> PYQ Trends
                        </TabsTrigger>
                        <TabsTrigger value="smart-tables" className="px-4 py-2 rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <ArrowRightLeft size={16} /> Smart Comparisons
                        </TabsTrigger>
                        <TabsTrigger value="bodies" className="px-4 py-2 rounded-lg data-[state=active]:bg-amber-500 data-[state=active]:text-slate-900 font-bold flex items-center gap-2">
                            <Table size={16} /> Bodies Matrix
                        </TabsTrigger>
                        <TabsTrigger value="arcade" className="px-4 py-2 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Gamepad2 size={16} /> Article Memory
                        </TabsTrigger>
                        <TabsTrigger value="timeline" className="px-4 py-2 rounded-lg data-[state=active]:bg-pink-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <History size={16} /> Timeline
                        </TabsTrigger>
                        <TabsTrigger value="mnemonics" className="px-4 py-2 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Brain size={16} /> Mnemonics
                        </TabsTrigger>
                        <TabsTrigger value="writs" className="px-4 py-2 rounded-lg data-[state=active]:bg-cyan-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Gavel size={16} /> Writs
                        </TabsTrigger>
                        <TabsTrigger value="preamble" className="px-4 py-2 rounded-lg data-[state=active]:bg-amber-700 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Scroll size={16} /> Preamble
                        </TabsTrigger>
                        <TabsTrigger value="majorities" className="px-4 py-2 rounded-lg data-[state=active]:bg-rose-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Users size={16} /> Majorities
                        </TabsTrigger>
                        <TabsTrigger value="current-affairs" className="px-4 py-2 rounded-lg data-[state=active]:bg-amber-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                            <Flame size={16} /> Current Affairs
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="pyq-trends" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PYQTrendDashboard />
                    </TabsContent>

                    <TabsContent value="smart-tables" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <SmartComparisonTables />
                    </TabsContent>

                    <TabsContent value="bodies" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <BodiesComparisonTable />
                    </TabsContent>

                    <TabsContent value="arcade" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <ArticleMemorySystem />
                    </TabsContent>

                    <TabsContent value="timeline" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <AmendmentTimeline />
                    </TabsContent>

                    <TabsContent value="mnemonics" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <SchedulesMnemonics />
                    </TabsContent>

                    <TabsContent value="writs" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <WritsWizard />
                    </TabsContent>

                    <TabsContent value="preamble" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PreambleDecoder />
                    </TabsContent>

                    <TabsContent value="majorities" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <MajoritiesMasterclass />
                    </TabsContent>

                    <TabsContent value="current-affairs" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <CurrentAffairsDashboard />
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
