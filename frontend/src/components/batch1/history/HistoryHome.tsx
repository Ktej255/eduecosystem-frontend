"use client";

import React, { useState, useEffect } from 'react';
import HistoryMainsPractice from './HistoryMainsPractice';
import HistoryDashboard from './HistoryDashboard';
import { Layout, PenTool, Sparkles, Flag, Scroll, Landmark, Clock, History as HistoryIcon, Shield } from 'lucide-react';
import HistorySectionPlanner from './HistorySectionPlanner';
import { HistorySection } from './data/history-schedule-registry';
import HistoryRevisionDashboard from './revision/HistoryRevisionDashboard';
import { HISTORY_CONFIG } from './data/history-config';
import { motion, AnimatePresence } from 'framer-motion';

import { useSearchParams } from 'next/navigation';

export default function HistoryHome({ embedded = false }: { embedded?: boolean }) {
    return (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading History Module...</div>}>
            <HistoryHomeContent embedded={embedded} />
        </React.Suspense>
    );
}

function HistoryHomeContent({ embedded = false }: { embedded?: boolean }) {
    const searchParams = useSearchParams();
    const initialTab = (searchParams.get('tab') as any) || 'dashboard';
    const initialSection = (searchParams.get('section') as HistorySection) || 'modern';

    const [activeTab, setActiveTab] = useState<'dashboard' | 'overview' | 'mains' | 'revision'>(initialTab);
    const [selectedSection, setSelectedSection] = useState<HistorySection>(initialSection);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const sections = [
        { id: 'modern', name: 'Modern', icon: Flag, color: 'text-indigo-500' },
        { id: 'medieval', name: 'Medieval', icon: Scroll, color: 'text-purple-500' },
        { id: 'ancient', name: 'Ancient', icon: Landmark, color: 'text-amber-500' },
        { id: 'art_culture', name: 'Art&Culture', icon: Sparkles, color: 'text-emerald-500' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring' as const, stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] overflow-x-hidden relative">
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-amber-950 flex flex-col items-center justify-center pointer-events-none"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" as const }}
                            className="text-center"
                        >
                            <div className="w-24 h-24 mb-6 mx-auto rounded-full bg-amber-600/20 border-2 border-amber-600/50 flex items-center justify-center">
                                <Landmark className="w-12 h-12 text-amber-500" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-amber-50 tracking-[0.2em] mb-2 uppercase">History Hub</h2>
                            <p className="text-amber-200/60 font-mono text-sm tracking-widest uppercase italic">Chronicles of the Subcontinent</p>
                        </motion.div>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            className="h-[1px] bg-amber-600 mt-8"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            {!embedded && (
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                    className="bg-card border-b border-neutral-200 dark:bg-black dark:border-neutral-800 sticky top-0 z-50"
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="font-bold text-xl text-amber-700 dark:text-amber-500 tracking-tight flex items-center gap-2">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white"
                                >
                                    <Clock className="w-5 h-5" />
                                </motion.div>
                                <span>HISTORY<span className="text-neutral-400 font-light">HUB</span></span>
                            </div>

                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex space-x-1"
                            >
                                <motion.button
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab('dashboard')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard'
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    Study Dashboard
                                </motion.button>
                                <motion.button
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab('revision')}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border-2 ${activeTab === 'revision'
                                        ? 'bg-amber-600 text-white border-amber-700 shadow-lg shadow-amber-500/20'
                                        : 'text-amber-700 border-amber-200 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                                        }`}
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Revision Hub
                                </motion.button>
                                <motion.button
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'overview'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <Layout className="w-4 h-4" />
                                    Overview
                                </motion.button>
                                <motion.button
                                    variants={itemVariants}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTab('mains')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hidden md:flex items-center gap-2 ${activeTab === 'mains'
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                                        : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                        }`}
                                >
                                    <PenTool className="w-4 h-4" />
                                    Mains
                                </motion.button>
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        const subjectMap: Record<HistorySection, string> = {
                                            modern: 'Modern History',
                                            medieval: 'Medieval History',
                                            ancient: 'Ancient History',
                                            art_culture: 'Art & Culture'
                                        };
                                        const sub = subjectMap[selectedSection] || 'History';
                                        window.location.href = `/student/batch1/current-affairs?subject=${sub}&source=history_hub`;
                                    }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all items-center gap-2 flex text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20`}
                                >
                                    <Sparkles className="w-4 h-4 text-rose-500" />
                                    Current Affairs
                                </motion.button>
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(`/student/pyq?subject=History`, '_blank')}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all items-center gap-2 flex text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20`}
                                >
                                    <HistoryIcon className="w-4 h-4" />
                                    PYQ Portal
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )
            }

            {/* Sub-Nav for Study Dashboard & Revision Hub */}
            {
                (activeTab === 'dashboard' || activeTab === 'revision') && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card/50 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-900/50 dark:border-neutral-800"
                    >
                        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-8">
                            {sections.map((sec) => (
                                <motion.button
                                    key={sec.id}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedSection(sec.id as HistorySection)}
                                    className={`h-full px-2 text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all border-b-2
                                    ${selectedSection === sec.id
                                            ? `border-indigo-600 ${sec.color} scale-110`
                                            : 'border-transparent text-muted-foreground hover:text-muted-foreground'
                                        }`}
                                >
                                    <sec.icon className="w-3.5 h-3.5" />
                                    {sec.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )
            }

            <motion.div 
                key={activeTab + selectedSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" as const }}
                className="w-full"
            >
                {activeTab === 'dashboard' && (
                    <HistorySectionPlanner section={selectedSection} />
                )}

                {activeTab === 'overview' && (
                    <HistoryDashboard />
                )}

                {activeTab === 'mains' && (
                    <HistoryMainsPractice config={HISTORY_CONFIG} />
                )}

                {activeTab === 'revision' && (
                    <HistoryRevisionDashboard section={selectedSection} />
                )}
            </motion.div>
        </div >
    );
}
