"use client";

import React, { useState } from 'react';
import {
    Book, Table, Clock, Brain,
    ArrowLeft, Search, GraduationCap
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from 'next/navigation';
import BodiesComparisonTable from './BodiesComparisonTable';

export default function PolityRevisionDashboard() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('bodies');

    return (
        <div className="min-h-screen bg-[#fff7ed]"> {/* Paper-like background */}
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
                        <h1 className="text-4xl md:text-5xl font-black font-['Kalam'] text-amber-500 mb-2">
                            Polity Revision Suite
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl font-['Kalam']">
                            "The High-Yield Zone for Prelims Success."
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                            <div className="text-2xl font-black text-green-400">95</div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest">Topics</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-xl text-center border border-slate-700">
                            <div className="text-2xl font-black text-blue-400">395+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-widest">Articles</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto p-4 md:p-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                    <TabsList className="bg-slate-200/50 p-1 rounded-xl w-full flex overflow-x-auto justify-start md:justify-center gap-2">
                        <TabsTrigger value="bodies" className="px-6 py-3 rounded-lg data-[state=active]:bg-amber-500 data-[state=active]:text-slate-900 font-bold flex items-center gap-2 min-w-[150px]">
                            <Table size={18} /> Comparison Tables
                        </TabsTrigger>
                        <TabsTrigger value="articles" className="px-6 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white font-bold flex items-center gap-2 min-w-[150px]">
                            <Book size={18} /> Article Arcade
                        </TabsTrigger>
                        <TabsTrigger value="timeline" className="px-6 py-3 rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white font-bold flex items-center gap-2 min-w-[150px]">
                            <Clock size={18} /> Amendment Timeline
                        </TabsTrigger>
                        <TabsTrigger value="mnemonics" className="px-6 py-3 rounded-lg data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold flex items-center gap-2 min-w-[150px]">
                            <Brain size={18} /> Mnemonics
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="bodies" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <BodiesComparisonTable />
                    </TabsContent>

                    <TabsContent value="articles" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-300">
                            <GraduationCap size={64} className="text-slate-300 mb-4" />
                            <h3 className="text-2xl font-black text-slate-400">Article Arcade Coming Soon</h3>
                            <p className="text-slate-400">Gamified learning for Articles 1-395.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="timeline" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-300">
                            <Clock size={64} className="text-slate-300 mb-4" />
                            <h3 className="text-2xl font-black text-slate-400">Amendment Timeline Coming Soon</h3>
                            <p className="text-slate-400">Visual history of major constitutional changes.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="mnemonics" className="animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-300">
                            <Brain size={64} className="text-slate-300 mb-4" />
                            <h3 className="text-2xl font-black text-slate-400">Mnemonics Bank Coming Soon</h3>
                            <p className="text-slate-400">TEARS OF OLD PM and other memory aids.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
}
