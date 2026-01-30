"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { useRouter } from 'next/navigation';
import { ArrowRight, Star, Activity, CheckCircle, AlertTriangle, Lock, Brain } from 'lucide-react';
import UPSCGlobalSearch from '@/components/upsc/UPSCGlobalSearch';
import UPSCOnboarding from '@/components/upsc/OnboardingModal';
import PeerGroupCard from '@/components/upsc/PeerGroupCard';
import StoreSubjectCard from '@/components/upsc/StoreSubjectCard';
import PaymentFunnelModal from '@/components/upsc/PaymentFunnelModal';
import { Timer } from 'lucide-react';
import DailyChallengeWidget from '@/components/upsc/DailyChallengeWidget';
import Leaderboard from '@/components/upsc/Leaderboard';
import MyLibrary from '@/components/upsc/MyLibrary';

// Sub-component to sync price on landing page
function DynamicPriceBadge({ bookId, base, offer }: { bookId: string, base: number, offer: number }) {
    const [price, setPrice] = useState(offer);
    const [timeLeft, setTimeLeft] = useState<string | null>(null);

    useEffect(() => {
        const checkPrice = () => {
            const start = localStorage.getItem(`upsc_offer_start_${bookId}`);
            if (!start) return;

            const now = Date.now();
            const elapsed = now - parseInt(start);
            const duration = 15 * 60 * 1000;

            if (elapsed > duration) {
                setPrice(base);
                setTimeLeft(null);
            } else {
                setPrice(offer);
                const remaining = Math.floor((duration - elapsed) / 1000);
                const m = Math.floor(remaining / 60);
                const s = remaining % 60;
                setTimeLeft(`${m}:${s.toString().padStart(2, '0')}`);
            }
        };

        checkPrice();
        const interval = setInterval(checkPrice, 1000);
        return () => clearInterval(interval);
    }, [bookId, base, offer]);

    return (
        <>
            <span className="font-bold text-lg text-white">₹{price}</span>
            {timeLeft && (
                <span className="text-xs text-yellow-300 font-mono flex items-center gap-1 animate-pulse">
                    <Timer className="w-3 h-3" /> {timeLeft}
                </span>
            )}
        </>
    );
}

export default function UPSCLandingPage() {
    const router = useRouter();
    const [hasPlan, setHasPlan] = useState(false);
    const [activeTab, setActiveTab] = useState('Prelims');
    const [funnelOpen, setFunnelOpen] = useState(false);
    const [funnelItem, setFunnelItem] = useState<{ title: string, price: number } | null>(null);

    const handleBuy = (subjectTitle: string, level: number, price: number) => {
        setFunnelItem({
            title: `${subjectTitle} - Level ${level}`,
            price: price
        });
        setFunnelOpen(true);
    };

    useEffect(() => {
        // Check if user has completed onboarding/plan generation
        if (localStorage.getItem('upsc_onboarding_completed')) {
            setHasPlan(true);
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-4 md:p-8">
            <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        UPSC Preparation Store
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive resources, books, and automated plans for your success.
                    </p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={() => router.push('/student/upsc/mock-tests')}
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-xl font-bold text-sm text-white transition-colors shadow-sm whitespace-nowrap"
                    >
                        <Brain className="w-4 h-4" /> Mock Tests
                    </button>
                    <button
                        onClick={() => router.push('/student/upsc/progress')}
                        className="flex items-center gap-2 bg-white dark:bg-[#111] px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors shadow-sm whitespace-nowrap"
                    >
                        <Activity className="w-4 h-4 text-blue-600" /> My Progress
                    </button>
                </div>
            </header>

            {/* Global Search Bar */}
            <div className="mb-10 flex justify-center">
                <UPSCGlobalSearch />
            </div>

            <UPSCOnboarding />

            {/* Phase 3: Engagement Dashboard (Daily Challenge, Leaderboard, Library) */}
            <div className="mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <DailyChallengeWidget />
                </div>
                <div className="lg:col-span-1">
                    <Leaderboard />
                </div>
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 h-full">
                        <MyLibrary />
                    </div>
                </div>
            </div>

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
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded">
                            BESTSELLER
                        </span>
                        {/* Landing Page Discount Logic */}
                        <div className="flex items-center gap-2 bg-blue-800/50 px-3 py-1 rounded-lg border border-blue-700/50">
                            {/* We use a local countdown simulation here to match the detail page */}
                            <DynamicPriceBadge bookId="laxmikanth" base={499} offer={299} />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Master Indian Polity</h2>
                    <p className="mb-6 text-blue-100">
                        Get the complete M. Laxmikanth module with chapter-wise MCQs, secure PDF notes, and automated revision plan.
                    </p>
                    <button
                        onClick={() => router.push('/student/upsc/polity/laxmikanth')}
                        className="bg-white text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                    >
                        Explore Now
                    </button>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-800 overflow-x-auto pb-1">
                {['Prelims', 'Mains', 'Optional', 'Courses'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-bold text-sm whitespace-nowrap transition-colors border-b-2 
                            ${activeTab === tab
                                ? 'border-blue-600 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
                {activeTab === 'Prelims' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {UPSC_CATALOG.map((subject) => (
                            <StoreSubjectCard
                                key={subject.id}
                                subject={subject}
                                onSelectLevel={(level: number) => router.push(`/student/upsc/${subject.id}?level=${level}`)}
                                onBuy={(level, price) => handleBuy(subject.title, level, price)}
                            />
                        ))}
                    </div>
                )}

                {activeTab === 'Mains' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {['GS Paper 1', 'GS Paper 2', 'GS Paper 3', 'GS Paper 4'].map((paper) => (
                            <div key={paper} className="bg-white dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-blue-500/50 transition-colors group">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900 dark:text-white">{paper}</h3>
                                    <Activity className="w-4 h-4 text-blue-500" />
                                </div>
                                <p className="text-xs text-gray-500 mb-6">Master answer writing with structural AI evaluation.</p>
                                <button
                                    onClick={() => router.push('/student/upsc/mains')}
                                    className="w-full py-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-bold text-gray-700 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-all"
                                >
                                    Practice Now
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Optional' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {['Public Administration', 'Sociology', 'Geography', 'PSIR', 'History', 'Anthropology'].map((opt) => (
                            <div key={opt} className="bg-gray-50 dark:bg-[#111] p-6 rounded-xl border border-gray-200 dark:border-gray-800 opacity-60 cursor-not-allowed relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2">
                                    <Lock className="w-4 h-4 text-gray-400" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{opt}</h3>
                                <p className="text-xs text-gray-500">Optional Course</p>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Courses' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {[
                            {
                                id: 'beginner', title: 'Beginner', price: '₹9,999',
                                desc: 'Foundation course with video concepts & basic recall.',
                                color: 'bg-green-100 text-green-700', border: 'hover:border-green-500'
                            },
                            {
                                id: 'intermediate', title: 'Intermediate', price: '₹9,999',
                                desc: 'For students who have completed coaching but need revision.',
                                color: 'bg-blue-100 text-blue-700', border: 'hover:border-blue-500'
                            },
                            {
                                id: 'advanced', title: 'Advanced', price: '₹9,999',
                                desc: 'Test-series focused for Prelims veterans.',
                                color: 'bg-purple-100 text-purple-700', border: 'hover:border-purple-500'
                            }
                        ].map((course) => (
                            <div
                                key={course.id}
                                onClick={() => router.push(`/student/upsc/courses/${course.id}`)}
                                className={`bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 cursor-pointer transition-all hover:shadow-lg ${course.border}`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center mb-4 font-bold`}>
                                    {course.title[0]}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{course.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">{course.price}</span>
                                    <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {funnelItem && (
                <PaymentFunnelModal
                    isOpen={funnelOpen}
                    onClose={() => setFunnelOpen(false)}
                    baseItem={funnelItem}
                />
            )}
        </div>
    );
}
