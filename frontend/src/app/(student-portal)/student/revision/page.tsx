"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    ChevronRight,
    Search,
    Trophy,
    BookOpen,
    Compass,
    Target,
    Zap,
    GraduationCap,
    MapPin,
    ArrowLeft,
    Trees // Added for 3D View
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import FunnelOrchestrator from '@/components/revision/engines/FunnelOrchestrator';
import RevisionDeepReports from '@/components/revision/reports/RevisionDeepReports';
import KnowledgeTree3D from '@/components/revision/immersive/KnowledgeTree3D';
import { History, LayoutDashboard } from 'lucide-react';


// Exam Categories and Items
const EXAM_CATEGORIES = [
    { id: 'all', label: 'All Exams' },
    { id: 'national', label: 'National Level' },
    { id: 'state', label: 'State PSC' },
    { id: 'banking', label: 'Banking & SSC' },
];

const EXAMS = [
    {
        id: 'upsc',
        name: 'UPSC CSE',
        category: 'national',
        state: 'India',
        description: 'Civil Services Examination (IAS/IPS/IFS)',
        color: 'indigo',
        icon: GraduationCap,
        popular: true
    },
    {
        id: 'uppsc',
        name: 'UPPSC',
        category: 'state',
        state: 'Uttar Pradesh',
        description: 'UP Combined State/Upper Subordinate Service',
        color: 'orange',
        icon: MapPin
    },
    {
        id: 'ras',
        name: 'RAS/RTS',
        category: 'state',
        state: 'Rajasthan',
        description: 'Rajasthan Administrative Service',
        color: 'rose',
        icon: MapPin,
        popular: true
    },
    {
        id: 'bpsc',
        name: 'BPSC',
        category: 'state',
        state: 'Bihar',
        description: 'Bihar Public Service Commission',
        color: 'emerald',
        icon: MapPin
    },
    {
        id: 'mppsc',
        name: 'MPPSC',
        category: 'state',
        state: 'Madhya Pradesh',
        description: 'MP State Service Exam',
        color: 'blue',
        icon: MapPin
    },
    {
        id: 'ssc',
        name: 'SSC CGL',
        category: 'banking',
        state: 'National',
        description: 'Staff Selection Commission - Combined Graduate Level',
        color: 'violet',
        icon: Trophy
    },
    {
        id: 'ibps',
        name: 'IBPS PO',
        category: 'banking',
        state: 'National',
        description: 'Institute of Banking Personnel Selection',
        color: 'cyan',
        icon: Coins
    }
];

// Re-using Coins from Lucide (added manually to imports if missing, but it was in previous code)
import { Coins } from 'lucide-react';

export default function RevisionPortalPage() {
    const [selectedExam, setSelectedExam] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [view, setView] = useState<'hub' | 'reports' | 'garden'>('hub');

    const filteredExams = EXAMS.filter(exam => {
        const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.state.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'all' || exam.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    if (selectedExam) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-[#050505]">
                {/* Back Navigation */}
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Button
                        variant="ghost"
                        onClick={() => setSelectedExam(null)}
                        className="group text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Global Hub
                    </Button>
                </div>

                {/* Transition to Funnel Orchestrator */}
                <FunnelOrchestrator examId={selectedExam.id} examName={selectedExam.name} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-[#080808] text-slate-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900/40">
            {/* Ambient background glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Header Section */}
                <header className="mb-12 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1.5 rounded-full border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-[10px]">
                            Universal Learning Vision 2.0
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">
                            Global Revision <span className="text-indigo-600">Hub</span>
                        </h1>

                        {/* View Switcher */}
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={() => setView('hub')}
                                    className={`px-6 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${view === 'hub' ? 'bg-white dark:bg-slate-800 shadow-md text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <LayoutDashboard className="w-4 h-4" /> Exam Hub
                                </button>
                                <button
                                    onClick={() => setView('reports')}
                                    className={`px-6 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${view === 'reports' ? 'bg-white dark:bg-slate-800 shadow-md text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <History className="w-4 h-4" /> Deep Reports
                                </button>
                                <button
                                    onClick={() => setView('garden')}
                                    className={`px-6 py-2 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${view === 'garden' ? 'bg-white dark:bg-slate-800 shadow-md text-emerald-600 dark:text-emerald-400' : 'text-slate-500 hover:text-emerald-600'}`}
                                >
                                    <Trees className="w-4 h-4" /> 3D Garden
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </header>

                <AnimatePresence mode="wait">
                    {view === 'hub' ? (
                        <motion.div
                            key="hub"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                        >
                            {/* Filters & Search */}
                            <section className="mb-12">
                                <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-slate-50 dark:bg-slate-900/40 p-2 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-xl">
                                    <div className="flex flex-wrap gap-2 p-1">
                                        {EXAM_CATEGORIES.map((cat) => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setActiveCategory(cat.id)}
                                                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${activeCategory === cat.id
                                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                                                    }`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative w-full md:w-96 px-2 pb-2 md:pb-0">
                                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <Input
                                            placeholder="Search by exam..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-12 pr-6 h-12 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-inner focus-visible:ring-2 focus-visible:ring-indigo-500 font-medium"
                                        />
                                    </div>
                                </div>
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredExams.map((exam, idx) => (
                                    <Card
                                        key={exam.id}
                                        onClick={() => setSelectedExam(exam)}
                                        className="group relative cursor-pointer overflow-hidden border-none bg-slate-50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-[2rem]"
                                    >
                                        <CardContent className="p-8 relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-14 h-14 rounded-2xl bg-${exam.color}-100 dark:bg-${exam.color}-900/20 flex items-center justify-center text-${exam.color}-600 dark:text-${exam.color}-400 group-hover:scale-110 transition-transform`}>
                                                    <exam.icon className="w-7 h-7" />
                                                </div>
                                                {exam.popular && (
                                                    <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-none px-3 py-1 font-black uppercase tracking-widest text-[9px]">
                                                        🔥 Popular
                                                    </Badge>
                                                )}
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1 mb-1">
                                                    <MapPin className="w-3 h-3" /> {exam.state}
                                                </span>
                                                <h3 className="text-2xl font-black tracking-tight">{exam.name}</h3>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                                                {exam.description}
                                            </p>
                                            <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-black text-sm group-hover:gap-2 transition-all">
                                                Access Preparation Portal
                                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                                {filteredExams.length === 0 && (
                                    <div className="col-span-full py-20 text-center">
                                        <h3 className="text-xl font-bold mb-2">No exams found</h3>
                                        <p className="text-slate-500">Try searching for a different state or exam name.</p>
                                    </div>
                                )}
                            </section>
                        </motion.div>
                    ) : view === 'garden' ? (
                        <motion.div
                            key="garden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                        >
                            <KnowledgeTree3D />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="reports"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <RevisionDeepReports />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Global Stats or Highlights */}
                <footer className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Active Students', value: '10K+' },
                            { label: 'Exam Syllabi', value: '45+' },
                            { label: 'AI Cycles Ran', value: '1.2M' },
                            { label: 'Retention Rate', value: '94%' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
}
