"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { useRouter } from 'next/navigation';
import { ArrowRight, Star, Activity, CheckCircle, AlertTriangle } from 'lucide-react';
import UPSCOnboarding from '@/components/upsc/OnboardingModal';
import PeerGroupCard from '@/components/upsc/PeerGroupCard';

export default function UPSCLandingPage() {
    const router = useRouter();
    const [hasPlan, setHasPlan] = useState(false);

    useEffect(() => {
        // Check if user has completed onboarding/plan generation
        if (localStorage.getItem('upsc_onboarding_completed')) {
            setHasPlan(true);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-4 md:p-8">
            <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        UPSC Preparation Store
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive resources, books, and automated plans for your success.
                    </p>
                </div>
                <button
                    onClick={() => router.push('/student/upsc/progress')}
                    className="flex items-center gap-2 bg-white dark:bg-[#111] px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm"
                >
                    <Activity className="w-4 h-4 text-blue-600" /> My Progress
                </button>
            </header>

            <UPSCOnboarding />

            {/* Progress Dashboard (Only if Plan Exists) */}
            {hasPlan && (
                <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase mb-1">Current Status</p>
                            <h3 className="text-xl font-bold text-green-600 flex items-center gap-2">
                                <Activity className="w-5 h-5" /> On Track
                            </h3>
                            <p className="text-xs text-gray-400 mt-1">ahead by 2 chapters</p>
                        </div>
                        <div className="h-12 w-12 rounded-full border-4 border-green-500 border-t-transparent flex items-center justify-center font-bold text-xs">
                            12%
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <p className="text-gray-500 text-xs font-bold uppercase mb-2">Today's Goal</p>
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded text-blue-600">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Polity: Chapter 5</h4>
                                <p className="text-xs text-gray-400">Union & Territory • 45 mins</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl text-white shadow-lg cursor-pointer hover:scale-[1.02] transition-transform">
                        <p className="text-indigo-100 text-xs font-bold uppercase mb-1">Next Action</p>
                        <h3 className="font-bold text-lg mb-2">Resume Reading</h3>
                        <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                            <div className="bg-white h-1.5 rounded-full w-[40%]"></div>
                        </div>
                    </div>

                    <PeerGroupCard />
                </div>
            )}

            {/* Featured Section (Amazon-like Banner) */}
            <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                    <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">
                        BESTSELLER
                    </span>
                    <h2 className="text-3xl font-bold mb-4">Master Indian Polity</h2>
                    <p className="mb-6 text-blue-100">
                        Get the complete M. Laxmikanth module with chapter-wise MCQs, secure PDF notes, and automated revision plan.
                    </p>
                    <button
                        onClick={() => router.push('/student/upsc/polity')}
                        className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        Explore Now
                    </button>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Subject Catalog Grid */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Browse by Subject</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UPSC_CATALOG.map((subject) => {
                    const Icon = subject.icon;
                    return (
                        <motion.div
                            key={subject.id}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
                            onClick={() => router.push(`/student/upsc/${subject.id}`)}
                        >
                            <div className={`h-2 bg-gradient-to-r ${subject.color.replace('text-', 'from-').replace('600', '500')} to-transparent opacity-80`} />

                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-lg ${subject.bgColor} flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${subject.color}`} />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {subject.title}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 h-10 line-clamp-2">
                                    {subject.description}
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-black flex items-center justify-center text-[8px]">
                                                {/* Avatar placeholders */}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium flex items-center">
                                        View Content <ArrowRight className="w-3 h-3 ml-1" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
