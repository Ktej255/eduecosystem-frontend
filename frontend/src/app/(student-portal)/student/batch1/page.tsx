"use client";

import React, { useState } from 'react';
import {
    BookOpen,
    Landmark,
    Globe,
    BrainCircuit,
    Coins,
    Leaf,
    Palette,
    Atom,
    ShoppingBag
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

const FocusPortal = dynamic(() => import('@/components/batch1/FocusPortal'), { loading: () => <div>Loading Focus Area...</div> });
const PolityHome = dynamic(() => import('@/components/batch1/polity/PolityHome'), { loading: () => <div>Loading Polity...</div> });
const HistoryHome = dynamic(() => import('@/components/batch1/history/HistoryHome'), { loading: () => <div>Loading History...</div> });
const GeographyHome = dynamic(() => import('@/components/batch1/geography/GeographyHome'), { loading: () => <div>Loading Geography...</div> });
const EconomyHome = dynamic(() => import('@/components/batch1/economy/EconomyHome'), { loading: () => <div>Loading Economy...</div> });
const EnvironmentHome = dynamic(() => import('@/components/batch1/environment/EnvironmentHome'), { loading: () => <div>Loading Environment...</div> });
const ScienceTechHome = dynamic(() => import('@/components/batch1/science-tech/ScienceTechHome'), { loading: () => <div>Loading Science & Tech...</div> });
const ArtCultureHome = dynamic(() => import('@/components/batch1/art-culture/ArtCultureHome'), { loading: () => <div>Loading Art & Culture...</div> });
const EthicsDashboard = dynamic(() => import('@/components/batch1/ethics/EthicsDashboard'), { loading: () => <div>Loading Ethics...</div> });
const SecurityDashboard = dynamic(() => import('@/components/batch1/security/SecurityDashboard'), { loading: () => <div>Loading Security...</div> });
const SocietyDashboard = dynamic(() => import('@/components/batch1/society/SocietyDashboard'), { loading: () => <div>Loading Society...</div> });
const ValueAdditionDashboard = dynamic(() => import('@/components/batch1/value-addition/ValueAdditionDashboard'), { loading: () => <div>Loading Value Addition...</div> });
const IrHome = dynamic(() => import('@/components/batch1/international-relations/IrHome'), { loading: () => <div>Loading IR...</div> });

import { useRouter } from 'next/navigation';

type Batch1Tab = 'focus' | 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science' | 'art' | 'ethics' | 'ir' | 'security' | 'society' | 'value';

export default function Batch1Hub() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<Batch1Tab>('focus');

    const tabs = [
        { id: 'focus', label: 'Focus Room', icon: BrainCircuit, color: 'text-orange-600' },
        { id: 'polity', label: 'Polity', icon: BookOpen, color: 'text-blue-600' },
        { id: 'history', label: 'History', icon: Landmark, color: 'text-amber-600' },
        { id: 'geography', label: 'Geography', icon: Globe, color: 'text-emerald-600' },
        { id: 'economy', label: 'Economy', icon: Coins, color: 'text-indigo-600' },
        { id: 'environment', label: 'Environment', icon: Leaf, color: 'text-green-600' },
        { id: 'science', label: 'S&T', icon: Atom, color: 'text-violet-600' },
        { id: 'art', label: 'Art', icon: Palette, color: 'text-pink-600' },
        { id: 'ethics', label: 'Ethics', icon: BrainCircuit, color: 'text-slate-600' },
        { id: 'ir', label: 'IR', icon: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2.05 12h20" /><path d="M12 2.05v20" /><path d="m4.93 4.93 14.14 14.14" /><path d="m19.07 4.93-14.14 14.14" /></svg>, color: 'text-indigo-500' },
        { id: 'security', label: 'Security', icon: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>, color: 'text-red-600' },
        { id: 'society', label: 'Society', icon: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, color: 'text-pink-600' },
        { id: 'value', label: 'Fab Month', icon: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /></svg>, color: 'text-yellow-600' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
            {/* Sticky Tab Bar */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
                        <div className="pr-4 border-r border-gray-200 dark:border-gray-700 mr-2 flex items-center gap-2 hidden md:flex">
                            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                                <span className="font-bold text-white dark:text-black">B1</span>
                            </div>
                            <span className="font-bold text-gray-900 dark:text-white">Batch 1</span>
                        </div>

                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as Batch1Tab)}
                                    className={`
                                        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap shrink-0
                                        ${isActive
                                            ? 'bg-gray-900 dark:bg-white text-white dark:text-black shadow-md transform scale-105'
                                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }
                                    `}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? '' : tab.color}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}

                        {/* UPSC Store Button (Global) */}
                        <button
                            onClick={() => router.push('/student/upsc')}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all flex items-center gap-2 ml-2"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            <span>UPSC Store</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'focus' && <FocusPortal />}
                        {activeTab === 'polity' && <PolityHome />}
                        {activeTab === 'history' && <HistoryHome />}
                        {activeTab === 'geography' && <GeographyHome />}
                        {activeTab === 'economy' && <EconomyHome />}
                        {activeTab === 'environment' && <EnvironmentHome />}
                        {activeTab === 'science' && <ScienceTechHome />}
                        {activeTab === 'art' && <ArtCultureHome />}
                        {activeTab === 'ethics' && <EthicsDashboard />}
                        {activeTab === 'ir' && <IrHome />}
                        {activeTab === 'security' && <SecurityDashboard />}
                        {activeTab === 'society' && <SocietyDashboard />}
                        {activeTab === 'value' && <ValueAdditionDashboard />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
