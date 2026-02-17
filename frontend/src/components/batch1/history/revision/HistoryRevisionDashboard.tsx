"use client";

import React, { useState } from 'react';
import {
    History, Scroll, Shield, Gem,
    ArrowLeft, Search, GraduationCap,
    Sparkles, Crown, Map, Landmark,
    Sword, BookOpen, AlertTriangle, GitBranch,
    Users, BarChart3, Lightbulb, Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';

// --- Components ---
import ChronologyMaster, { EraData } from './ChronologyMaster';
import PersonalityHub, { Personality } from './PersonalityHub';
import BattleAnalytics, { Battle } from './BattleAnalytics';
import ArtCultureVisualizer from './ArtCultureVisualizer';
import HistoryExaminersTrap, { Trap } from './HistoryExaminersTrap';

import { MODERN_HISTORY_REVISION } from './modern-revision-data';
import { HistorySection } from '../data/history-schedule-registry';

interface HistoryRevisionDashboardProps {
    section?: HistorySection;
}

export default function HistoryRevisionDashboard({ section = 'modern' }: HistoryRevisionDashboardProps) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('chronology');

    // Data Mapping logic
    const getRevisionData = () => {
        if (section === 'modern') {
            return {
                eraData: [
                    {
                        id: 'modern',
                        title: 'Modern History',
                        subtitle: '1707 - 1947',
                        color: 'bg-red-600',
                        textColor: 'text-red-600',
                        borderColor: 'border-red-200',
                        lightBg: 'bg-red-50',
                        events: MODERN_HISTORY_REVISION.timeline.map(e => ({
                            year: e.year,
                            title: e.event,
                            detail: e.significance
                        }))
                    }
                ],
                personalities: MODERN_HISTORY_REVISION.personalities.map(p => ({
                    name: p.name,
                    title: p.title,
                    era: 'Modern',
                    keyWorks: p.keyWork,
                    ideology: p.ideology,
                    organization: p.org,
                    bg: 'bg-red-50',
                    border: 'border-red-100',
                    color: 'text-red-600'
                })) as Personality[],
                battles: MODERN_HISTORY_REVISION.battles.map(b => ({
                    name: b.name,
                    year: b.name.match(/\d+/)?.[0] || '1757',
                    parties: b.parties.split(' vs '),
                    outcome: b.impact,
                    strategicKey: b.strategicKey,
                    impact: b.impact,
                    location: 'India',
                    color: 'text-red-600',
                    bg: 'bg-red-50',
                    border: 'border-red-200'
                })) as Battle[],
                traps: MODERN_HISTORY_REVISION.traps.map(t => ({
                    title: t.topic,
                    scenario: t.trap,
                    wrongWay: t.trap,
                    rightWay: t.fix,
                    trick: t.fix,
                    color: 'text-red-600',
                    bg: 'bg-red-50',
                    border: 'border-red-200'
                })) as Trap[]
            };
        }
        return null; // Fallback to defaults in children
    };

    const data = getRevisionData();

    return (
        <div className="min-h-screen bg-[#fffcf5] font-['Kalam', 'serif']">
            {/* Header */}
            <div className="bg-[#422006] text-white p-6 md:p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                    <div>
                        <Button
                            variant="ghost"
                            className="text-amber-200 hover:text-white p-0 mb-2 hover:bg-transparent flex items-center gap-2"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft size={16} /> Back to Dashboard
                        </Button>
                        <h1 className="text-4xl md:text-5xl font-black text-amber-400 mb-2 flex items-center gap-3">
                            History Knowledge Engine <Sparkles className="text-yellow-400" />
                        </h1>
                        <p className="text-amber-100/80 text-lg max-w-2xl font-medium">
                            "Connect the dots of time. Master the patterns of power."
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">

                    {/* Navigation Tabs */}
                    <div className="bg-stone-50/90 backdrop-blur border-2 border-stone-200 p-2 rounded-2xl shadow-sm overflow-x-auto">
                        <TabsList className="flex flex-nowrap justify-start gap-2 h-auto bg-transparent p-0 min-w-max">

                            {/* --- HISTORY LOGIC ENGINE FEATURES --- */}
                            <TabsTrigger value="chronology" className="px-4 py-2 rounded-xl data-[state=active]:bg-amber-700 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-amber-800 transition-all">
                                <History size={18} /> Chronology Master
                            </TabsTrigger>
                            <TabsTrigger value="personalities" className="px-4 py-2 rounded-xl data-[state=active]:bg-red-800 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-red-900 transition-all">
                                <Crown size={18} /> Personality Hub
                            </TabsTrigger>
                            <TabsTrigger value="battles" className="px-4 py-2 rounded-xl data-[state=active]:bg-stone-800 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-stone-900 transition-all">
                                <Sword size={18} /> Battle Analytics
                            </TabsTrigger>
                            <TabsTrigger value="art-culture" className="px-4 py-2 rounded-xl data-[state=active]:bg-indigo-800 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-indigo-900 transition-all">
                                <Landmark size={18} /> Art & Culture
                            </TabsTrigger>
                            <TabsTrigger value="traps" className="px-4 py-2 rounded-xl data-[state=active]:bg-orange-700 data-[state=active]:text-white data-[state=active]:shadow-md font-bold flex items-center gap-2 border border-transparent data-[state=active]:border-orange-800 transition-all">
                                <AlertTriangle size={18} /> Examiner's Trap
                            </TabsTrigger>

                        </TabsList>
                    </div>

                    {/* --- TAB CONTENTS --- */}

                    <TabsContent value="chronology" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <ChronologyMaster eraData={data?.eraData} initialEra={section} />
                    </TabsContent>

                    <TabsContent value="personalities" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <PersonalityHub personalities={data?.personalities} initialEra={section === 'modern' ? 'Modern' : 'All'} />
                    </TabsContent>

                    <TabsContent value="battles" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <BattleAnalytics battles={data?.battles} />
                    </TabsContent>

                    <TabsContent value="art-culture" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <ArtCultureVisualizer />
                    </TabsContent>

                    <TabsContent value="traps" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <HistoryExaminersTrap traps={data?.traps} />
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    );
}
