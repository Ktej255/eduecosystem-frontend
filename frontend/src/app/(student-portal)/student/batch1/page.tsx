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
import FocusPortal from '@/components/batch1/FocusPortal';
import PolityHome from '@/components/batch1/polity/PolityHome';
import HistoryHome from '@/components/batch1/history/HistoryHome';
import GeographyHome from '@/components/batch1/geography/GeographyHome';
import EconomyHome from '@/components/batch1/economy/EconomyHome';
import EnvironmentHome from '@/components/batch1/environment/EnvironmentHome';
import ScienceTechHome from '@/components/batch1/science-tech/ScienceTechHome';
import ArtCultureHome from '@/components/batch1/art-culture/ArtCultureHome';
import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/navigation';

type Batch1Tab = 'focus' | 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science' | 'art';

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
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
