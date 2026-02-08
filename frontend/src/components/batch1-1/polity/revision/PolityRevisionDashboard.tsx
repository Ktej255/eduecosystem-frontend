"use client";

import React, { useState } from 'react';
import {
    Book, Table, Clock, Brain,
    ArrowLeft, Search, GraduationCap,
    Sparkles, Gavel, Scroll, Scale,
    Gamepad2, History, Users, BarChart3,
    ArrowRightLeft, Flame, AlertTriangle, GitBranch, Calculator, PenTool, Lightbulb
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';

// --- Components ---
import SmartComparisonTables from './SmartComparisonTables';
import BodiesComparisonTable from './BodiesComparisonTable';
import ArticleMemorySystem from './ArticleMemorySystem';
import PYQTrendDashboard from './PYQTrendDashboard';
import SchedulesMnemonics from './SchedulesMnemonics';
import WritsWizard from './WritsWizard';
import PreambleDecoder from './PreambleDecoder';
import CurrentAffairsDashboard from './CurrentAffairsDashboard';

// --- New Logic Engine Components ---
import ExaminersTrap from './ExaminersTrap';
import PolityDecisionTree from './PolityDecisionTree';
import ConstitutionalTimeline from './ConstitutionalTimeline';
import CommitteeShuffler from './CommitteeShuffler';
import MajorityCalculator from './MajorityCalculator';
import PYQBank from './PYQBank';
import MainsTemplateViewer from './MainsTemplateViewer';
import MnemonicGallery from './MnemonicGallery';

export default function PolityRevisionDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('trap');

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
                            Polity Logic Engine <Sparkles className="text-yellow-400" />
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl">
                            "Don't just read. Solve. Shuffle. Decide."
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">

                    {/* Navigation Tabs */}
                    <div className="bg-white/80 backdrop-blur border-2 border-slate-200 p-2 rounded-2xl shadow-sm">
                        <TabsList className="flex flex-wrap justify-start gap-2 h-auto bg-transparent p-0">

                            {/* --- LOGIC ENGINE FEATURES (NEW) --- */}
                            <TabsTrigger value="trap" className="px-4 py-2 rounded-xl data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-red-700">
                                <AlertTriangle size={18} /> Examiner's Trap
                            </TabsTrigger>
                            <TabsTrigger value="logic" className="px-4 py-2 rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-blue-700">
                                <GitBranch size={18} /> Decision Tree
                            </TabsTrigger>
                            <TabsTrigger value="timeline" className="px-4 py-2 rounded-xl data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-teal-700">
                                <History size={18} /> Timeline
                            </TabsTrigger>
                            <TabsTrigger value="committees" className="px-4 py-2 rounded-xl data-[state=active]:bg-stone-700 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-stone-900">
                                <Users size={18} /> Comm. Shuffler
                            </TabsTrigger>
                            <TabsTrigger value="majorities" className="px-4 py-2 rounded-xl data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-violet-700">
                                <Calculator size={18} /> Majority Calc
                            </TabsTrigger>

                            <div className="w-px h-8 bg-slate-300 mx-2 hidden md:block"></div>

                            {/* --- CORE REVISION TOOLS --- */}
                            <TabsTrigger value="smart-tables" className="px-4 py-2 rounded-xl data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2">
                                <ArrowRightLeft size={16} /> Comparisons
                            </TabsTrigger>
                            <TabsTrigger value="bodies" className="px-4 py-2 rounded-xl data-[state=active]:bg-amber-500 data-[state=active]:text-slate-900 font-bold flex items-center gap-2">
                                <Table size={16} /> Bodies Matrix
                            </TabsTrigger>
                            <TabsTrigger value="arcade" className="px-4 py-2 rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                                <Gamepad2 size={16} /> Article Memory
                            </TabsTrigger>
                            <TabsTrigger value="mnemonics" className="px-4 py-2 rounded-xl data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                                <Brain size={16} /> Mnemonics
                            </TabsTrigger>
                            <TabsTrigger value="writs" className="px-4 py-2 rounded-xl data-[state=active]:bg-cyan-600 data-[state=active]:text-white font-bold flex items-center gap-2">
                                <Gavel size={16} /> Writs
                            </TabsTrigger>
                            <TabsTrigger value="preamble" className="px-4 py-2 rounded-xl data-[state=active]:bg-amber-700 data-[state=active]:text-white font-bold flex items-center gap-2">
                                <Scroll size={16} /> Preamble
                            </TabsTrigger>
                            <TabsTrigger value="pyq-trends" className="px-4 py-2 rounded-xl data-[state=active]:bg-slate-800 data-[state=active]:text-white font-bold flex items-center gap-2">
                                <BarChart3 size={16} /> PYQ Trends
                            </TabsTrigger>
                            <TabsTrigger value="pyq-bank" className="px-4 py-2 rounded-xl data-[state=active]:bg-sky-600 data-[state=active]:text-white font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-sky-700">
                                <Book size={16} /> PYQ Bank
                            </TabsTrigger>
                            <TabsTrigger value="mains-templates" className="px-4 py-2 rounded-xl data-[state=active]:bg-pink-600 data-[state=active]:text-white font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-pink-700">
                                <PenTool size={16} /> Mains Templates
                            </TabsTrigger>
                            <TabsTrigger value="mnemonics-gallery" className="px-4 py-2 rounded-xl data-[state=active]:bg-yellow-500 data-[state=active]:text-white font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-yellow-600">
                                <Lightbulb size={16} /> Cheat Codes
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* --- TAB CONTENTS --- */}

                    <TabsContent value="trap" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <ExaminersTrap />
                    </TabsContent>

                    <TabsContent value="logic" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PolityDecisionTree />
                    </TabsContent>

                    <TabsContent value="timeline" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <ConstitutionalTimeline />
                    </TabsContent>

                    <TabsContent value="committees" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <CommitteeShuffler />
                    </TabsContent>

                    <TabsContent value="majorities" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <MajorityCalculator />
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

                    <TabsContent value="mnemonics" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <SchedulesMnemonics />
                    </TabsContent>

                    <TabsContent value="writs" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <WritsWizard />
                    </TabsContent>

                    <TabsContent value="preamble" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PreambleDecoder />
                    </TabsContent>

                    <TabsContent value="pyq-trends" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PYQTrendDashboard />
                    </TabsContent>

                    <TabsContent value="pyq-bank" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PYQBank />
                    </TabsContent>

                    <TabsContent value="mains-templates" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <MainsTemplateViewer />
                    </TabsContent>

                    <TabsContent value="mnemonics-gallery" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <MnemonicGallery />
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    );
}
