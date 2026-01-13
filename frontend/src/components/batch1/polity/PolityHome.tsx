"use client";

import React, { useState } from 'react';
import { Book, ChevronRight, Clock, Sparkles, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { POLITY_MODULES, POLITY_TOPICS, getModuleColors, getTopicsByModule } from './data/polity-registry';
import PolityScheduleView from './PolityScheduleView';
import { LAXMIKANTH_CHAPTERS, generateWeeklySchedule } from './data/polity-schedule-data';
import { useMemo } from 'react';

import { useEffect } from 'react';

import Batch1ContentMap from './Batch1ContentMap';

export default function PolityHome({ embedded = false }: { embedded?: boolean }) {
    const [selectedModule, setSelectedModule] = useState<string | null>(null);

    const [view, setView] = useState<'topics' | 'schedule' | 'map'>('map');

    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('polity_start_calendar_date')) {
            localStorage.setItem('polity_start_calendar_date', new Date().toISOString());
        }
    }, []);

    // Check for "Master ID" (simulated)
    const isAdmin = typeof window !== 'undefined' &&
        (localStorage.getItem('userRole') === 'teacher' ||
            localStorage.getItem('userEmail')?.includes('admin') ||
            localStorage.getItem('userEmail') === 'test001@gmail.com');

    // Calculate overall stats
    const totalChapters = LAXMIKANTH_CHAPTERS.length;
    const totalTopicsImplemented = POLITY_TOPICS.length;
    const totalCA = POLITY_TOPICS.reduce((sum, t) => sum + t.currentAffairs.length, 0);
    const highPriorityTopics = POLITY_TOPICS.filter(t => t.priority === 'High').length;

    // TODAY'S TARGET LOGIC
    const todayTarget = useMemo(() => {
        if (typeof window === 'undefined') return null;
        const weeklyData = generateWeeklySchedule();
        const startDateStr = localStorage.getItem('polity_start_calendar_date');

        // Use Jan 11, 2026 as the base if not set
        const baseDate = startDateStr ? new Date(startDateStr) : new Date('2026-01-11T00:00:00');

        const now = new Date();
        const diffTime = (now.getTime() - baseDate.getTime());
        const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
        const weekIndex = Math.floor(diffDays / 7);
        const dayOfWeek = now.getDay(); // 0-6 (Sun-Sat)

        const dayMap: Record<number, string> = {
            0: 'sunday', 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday'
        };

        const dayKey = dayMap[dayOfWeek];
        if (!dayKey || !weeklyData[weekIndex]) return null;

        const contents = weeklyData[weekIndex].days[dayKey as keyof typeof weeklyData[0]['days']];
        const isSaturday = dayKey === 'saturday';
        const isSunday = dayKey === 'sunday';

        return {
            week: weekIndex + 1,
            day: dayKey.charAt(0).toUpperCase() + dayKey.slice(1),
            type: isSaturday ? 'MCQ' : isSunday ? 'Revision' : 'Study',
            data: contents,
            slots: Array.isArray(contents) && !isSaturday ? (contents as any[]).reduce((s, c) => s + (c.slots || 0), 0) : (isSaturday ? 4 : 6)
        };
    }, []);

    return (
        <div className={`min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a] ${embedded ? 'min-h-0 bg-transparent' : ''}`}>
            {/* Hero Section - Hidden in embedded mode */}
            {!embedded && (
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                    <div className="max-w-6xl mx-auto px-6 py-12">
                        <Link href="/student/batch1" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Back to Dashboard
                        </Link>

                        <div className="flex items-center gap-2 text-blue-200 text-sm mb-2">
                            <Book className="w-4 h-4" />
                            <span>UPSC Prelims 2026 • Cycle 1</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Indian Polity & Governance
                        </h1>
                        <p className="text-xl text-blue-100 mb-6">
                            The Smart 50 Module: Laxmikanth + Current Affairs (Jan 2024 – May 2026)
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold">{totalChapters}</div>
                                <div className="text-blue-200 text-sm">Chapters</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                                <div className="text-3xl font-bold">11</div>
                                <div className="text-blue-200 text-sm">Parts</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {totalCA}
                                    <Sparkles className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div className="text-blue-200 text-sm">Current Affairs</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                                <div className="text-3xl font-bold flex items-center gap-1">
                                    {highPriorityTopics}
                                    <Target className="w-5 h-5 text-red-400" />
                                </div>
                                <div className="text-blue-200 text-sm">High Priority</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => setView('map')}
                                className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                            >
                                <TrendingUp className="w-5 h-5" />
                                View Syllabus Tracker & Content Map
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Today's Target Widget - NEW */}
            {!embedded && todayTarget && (
                <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
                    <div className="bg-white dark:bg-[#111] rounded-3xl border border-blue-200 dark:border-blue-900 shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0 w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex flex-col items-center justify-center text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                            <span className="text-[10px] uppercase font-black opacity-60">Day</span>
                            <span className="text-3xl font-black">{todayTarget.day.substring(0, 3)}</span>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${todayTarget.type === 'MCQ' ? 'bg-amber-600' :
                                    todayTarget.type === 'Revision' ? 'bg-indigo-600' :
                                        'bg-blue-600'
                                    }`}>
                                    Today's {todayTarget.type}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">Week {todayTarget.week} Schedule</span>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 dark:text-white">
                                {todayTarget.type === 'MCQ'
                                    ? (todayTarget.data as string[]).join(' • ')
                                    : (todayTarget.data as any[]).length > 0
                                        ? (todayTarget.data as any[]).map(c => `CH ${c.chapter}: ${c.topic}`).join(' • ')
                                        : "Revision / Buffer Day"
                                }
                            </h3>
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                    <Clock className="w-3.5 h-3.5" /> {todayTarget.slots} Pomodoros
                                </div>
                                {todayTarget.type === 'Study' && (
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <Book className="w-3.5 h-3.5" /> {(todayTarget.data as any[]).reduce((s, c) => s + (c.pages || 0), 0)} pages
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            onClick={() => setView('schedule')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                        >
                            Open Planner <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* One-Stop Revision Section - NEW */}
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white">
                            One-Stop Revision Solution
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Master Laxmikanth Chapters 1-95 with Flashcards & MCQs
                        </p>
                    </div>
                    <Link href="/student/batch1/polity/revision" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                        View All <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { id: 1, title: "Historical Background", icon: "🏛️", color: "from-blue-500 to-indigo-600" },
                        { id: 2, title: "Making of Constitution", icon: "✍️", color: "from-purple-500 to-pink-600" },
                        { id: 3, title: "Concept of Constitution", icon: "💡", color: "from-amber-500 to-orange-600" },
                        { id: 4, title: "Salient Features", icon: "✨", color: "from-emerald-500 to-teal-600" },
                        { id: 5, title: "Preamble", icon: "📜", color: "from-rose-500 to-red-600" },
                        { id: 6, title: "Union and Its Territory", icon: "🗺️", color: "from-cyan-500 to-blue-600" },
                        { id: 7, title: "Citizenship", icon: "🇮🇳", color: "from-orange-500 to-red-600" },
                        { id: 8, title: "Fundamental Rights (I)", icon: "⚖️", color: "from-blue-600 to-cyan-600" },
                        { id: 9, title: "Fundamental Rights (II)", icon: "🛡️", color: "from-indigo-600 to-purple-600" },
                        { id: 10, title: "Fundamental Rights (III)", icon: "🔓", color: "from-violet-600 to-fuchsia-600" },
                        { id: 11, title: "Directive Principles", icon: "🏗️", color: "from-teal-600 to-emerald-600" },
                        { id: 12, title: "Fundamental Duties", icon: "🤝", color: "from-green-600 to-lime-600" },
                        { id: 13, title: "Amendment", icon: "🔄", color: "from-red-600 to-orange-600" },
                        { id: 14, title: "Basic Structure", icon: "🏗️", color: "from-slate-600 to-gray-600" },
                        { id: 15, title: "Parliamentary System", icon: "🏛️", color: "from-blue-400 to-indigo-500" },
                        { id: 16, title: "Federal System", icon: "⚖️", color: "from-purple-400 to-pink-500" },
                        { id: 17, title: "Centre-State Relations", icon: "🤝", color: "from-amber-400 to-orange-500" },
                        { id: 18, title: "Inter-State Relations", icon: "🌐", color: "from-emerald-400 to-teal-500" },
                        { id: 19, title: "Emergency Provisions", icon: "🚨", color: "from-rose-400 to-red-500" },
                        { id: 20, title: "President", icon: "👤", color: "from-indigo-500 to-blue-600" },
                        { id: 21, title: "Vice-President", icon: "🥈", color: "from-slate-500 to-gray-600" },
                        { id: 22, title: "Prime Minister", icon: "👔", color: "from-blue-600 to-indigo-700" },
                        { id: 23, title: "Council of Ministers", icon: "👥", color: "from-teal-500 to-emerald-600" },
                        { id: 24, title: "Cabinet Committees", icon: "📋", color: "from-amber-500 to-yellow-600" },
                        { id: 25, title: "Parliament", icon: "🏛️", color: "from-red-500 to-rose-600" },
                        { id: 26, title: "Parliamentary Committees", icon: "📋", color: "from-orange-500 to-amber-600" },
                        { id: 27, title: "Parliamentary Forums", icon: "🗣️", color: "from-green-500 to-teal-600" },
                        { id: 28, title: "Parliamentary Group", icon: "🤝", color: "from-blue-500 to-cyan-600" },
                        { id: 29, title: "Supreme Court", icon: "⚖️", color: "from-purple-500 to-indigo-600" },
                        { id: 30, title: "Judicial Review", icon: "🔍", color: "from-rose-500 to-pink-600" },
                        { id: 31, title: "PIL", icon: "📢", color: "from-teal-500 to-emerald-600" },
                        { id: 32, title: "High Court", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
                        { id: 33, title: "Subordinate Courts", icon: "🏛️", color: "from-slate-500 to-gray-600" },
                        { id: 34, title: "Special Provisions", icon: "📜", color: "from-amber-500 to-orange-600" },
                        { id: 35, title: "Governor", icon: "👤", color: "from-indigo-400 to-blue-500" },
                        { id: 36, title: "Chief Minister", icon: "👔", color: "from-blue-400 to-indigo-500" },
                        { id: 37, title: "State Council of Ministers", icon: "👥", color: "from-teal-400 to-emerald-500" },
                        { id: 38, title: "State Legislature", icon: "🏛️", color: "from-red-400 to-rose-500" },
                        { id: 39, title: "Panchayati Raj", icon: "🚜", color: "from-green-400 to-lime-500" },
                        { id: 40, title: "Municipalities", icon: "🏙️", color: "from-cyan-400 to-blue-500" },
                        { id: 41, title: "Election Commission", icon: "🗳️", color: "from-blue-600 to-indigo-700" },
                        { id: 42, title: "UPSC", icon: "🎖️", color: "from-rose-600 to-red-700" },
                        { id: 43, title: "SPSC", icon: "🎓", color: "from-amber-600 to-orange-700" },
                        { id: 44, title: "Finance Commission", icon: "💰", color: "from-emerald-600 to-teal-700" },
                        { id: 45, title: "GST Council", icon: "🧾", color: "from-violet-600 to-purple-700" },
                        { id: 46, title: "NC-SC", icon: "🛡️", color: "from-indigo-500 to-blue-600" },
                        { id: 47, title: "NC-ST", icon: "🏔️", color: "from-emerald-500 to-teal-600" },
                        { id: 48, title: "NC-BC", icon: "🤝", color: "from-amber-500 to-orange-600" },
                        { id: 49, title: "Linguistic Minorities", icon: "🗣️", color: "from-rose-500 to-pink-600" },
                        { id: 50, title: "CAG", icon: "🔍", color: "from-slate-600 to-gray-600" },
                        { id: 51, title: "NITI Aayog", icon: "💡", color: "from-blue-500 to-cyan-600" },
                        { id: 52, title: "NHRC", icon: "⚖️", color: "from-rose-500 to-red-600" },
                        { id: 53, title: "SHRC", icon: "🏛️", color: "from-orange-500 to-amber-600" },
                        { id: 54, title: "CIC", icon: "ℹ️", color: "from-blue-600 to-indigo-700" },
                        { id: 55, title: "SIC", icon: "📄", color: "from-emerald-500 to-teal-600" },
                        { id: 56, title: "CVC", icon: "🛡️", color: "from-indigo-600 to-blue-700" },
                        { id: 57, title: "CBI", icon: "🔍", color: "from-slate-500 to-gray-600" },
                        { id: 58, title: "Lokpal", icon: "⚖️", color: "from-amber-600 to-orange-700" },
                        { id: 59, title: "NIA", icon: "🔫", color: "from-rose-600 to-red-700" },
                        { id: 60, title: "NDMA", icon: "🆘", color: "from-cyan-500 to-blue-600" },
                        { id: 61, title: "NCW", icon: "👩", color: "from-purple-500 to-pink-600" },
                        { id: 62, title: "NCPCR", icon: "👶", color: "from-emerald-500 to-teal-600" },
                        { id: 63, title: "NCM", icon: "🕌", color: "from-amber-500 to-orange-600" },
                        { id: 64, title: "Tribunals", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
                        { id: 65, title: "Law & Delimitation", icon: "📜", color: "from-rose-500 to-red-600" },
                        { id: 66, title: "Political Parties", icon: "🚩", color: "from-indigo-600 to-blue-700" },
                        { id: 67, title: "Regional Parties", icon: "🏘️", color: "from-amber-600 to-orange-700" },
                        { id: 68, title: "Elections", icon: "🗳️", color: "from-rose-600 to-red-700" },
                        { id: 69, title: "Election Laws", icon: "⚖️", color: "from-cyan-600 to-blue-700" },
                        { id: 70, title: "Electoral Reforms", icon: "🔄", color: "from-emerald-600 to-teal-700" },
                        { id: 71, title: "Voting Behaviour", icon: "📉", color: "from-blue-500 to-indigo-600" },
                        { id: 72, title: "Anti-Defection", icon: "🚫", color: "from-purple-500 to-pink-600" },
                        { id: 73, title: "Pressure Groups", icon: "📢", color: "from-amber-500 to-orange-600" },
                        { id: 74, title: "Nat. Integration", icon: "🤝", color: "from-emerald-500 to-teal-600" },
                        { id: 75, title: "Foreign Policy", icon: "🌎", color: "from-rose-500 to-red-600" },
                        { id: 76, title: "Official Language", icon: "🗣️", color: "from-blue-600 to-indigo-700" },
                        { id: 77, title: "Public Services", icon: "🎖️", color: "from-teal-600 to-emerald-700" },
                        { id: 78, title: "Rights & Liability", icon: "⚖️", color: "from-amber-600 to-orange-700" },
                        { id: 79, title: "Spec. Prov. Classes", icon: "👥", color: "from-rose-600 to-red-700" },
                        { id: 80, title: "Consumer Comm.", icon: "🛒", color: "from-cyan-600 to-blue-700" },
                        { id: 81, title: "Bar Council", icon: "⚖️", color: "from-blue-500 to-indigo-600" },
                        { id: 82, title: "Landmark Judgements", icon: "📜", color: "from-purple-500 to-pink-600" },
                        { id: 83, title: "Const. Doctrines", icon: "💡", color: "from-amber-500 to-orange-600" },
                        { id: 84, title: "World Const.", icon: "🌎", color: "from-emerald-500 to-teal-600" },
                        { id: 85, title: "Adv. Services", icon: "🎖️", color: "from-rose-500 to-red-600" },
                        { id: 86, title: "Public Policy", icon: "📊", color: "from-indigo-600 to-blue-700" },
                        { id: 87, title: "Nat. Sec. Council", icon: "🛡️", color: "from-rose-600 to-red-700" },
                        { id: 88, title: "Competition Comm.", icon: "⚖️", color: "from-amber-600 to-orange-700" },
                        { id: 89, title: "UIDAI (Aadhaar)", icon: "🆔", color: "from-cyan-600 to-blue-700" },
                        { id: 90, title: "PFRDA & IRDAI", icon: "💰", color: "from-emerald-600 to-teal-700" },
                        { id: 91, title: "Health Auth. (NHA)", icon: "🏥", color: "from-blue-600 to-indigo-700" },
                        { id: 92, title: "FSSAI & BIS", icon: "🛡️", color: "from-teal-600 to-emerald-700" },
                        { id: 93, title: "NCRWC", icon: "🏛️", color: "from-blue-500 to-indigo-600" },
                        { id: 94, title: "Const. Appendices", icon: "📜", color: "from-purple-500 to-pink-600" },
                        { id: 95, title: "Final Summary", icon: "✨", color: "from-amber-500 to-orange-600" },
                    ].map((ch) => (
                        <Link
                            key={ch.id}
                            href={`/student/batch1/polity/revision/${ch.id}`}
                            className="group relative overflow-hidden bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${ch.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-bl-[100px]`} />

                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-3xl">{ch.icon}</div>
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Chapter {ch.id}</span>
                            </div>

                            <h3 className="text-lg font-bold text-[#1F2937] dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                                {ch.title}
                            </h3>

                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase font-semibold">Content</span>
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Ready</span>
                                </div>
                                <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase font-semibold">Flashcards</span>
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">15-25</span>
                                </div>
                                <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-gray-400 uppercase font-semibold">MCQs</span>
                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-300">30-50</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="max-w-6xl mx-auto px-6 mt-12">
                <div className="flex border-b border-gray-200 dark:border-gray-800">
                    <button
                        onClick={() => setView('topics')}
                        className={`px-8 py-4 text-sm font-bold transition-all border-b-2 ${view === 'topics'
                            ? 'text-blue-600 border-blue-600'
                            : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                    >
                        Detailed Syllabus (95 Topics)
                    </button>
                    <button
                        onClick={() => setView('schedule')}
                        className={`px-8 py-4 text-sm font-bold transition-all border-b-2 flex items-center gap-2 ${view === 'schedule'
                            ? 'text-blue-600 border-blue-600'
                            : 'text-gray-500 border-transparent hover:text-gray-700'
                            }`}
                    >
                        Study Planner & Schedule
                        <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded-full uppercase">New</span>
                    </button>
                </div>
            </div>

            {view === 'topics' ? (
                <>
                    {/* Module Navigation */}
                    <div className="max-w-6xl mx-auto px-6 py-8">
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">
                            Structured Curriculum
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {POLITY_MODULES.map((module) => {
                                const colors = getModuleColors(module.color);
                                const topics = getTopicsByModule(module.id);
                                const [start, end] = module.topicRange;
                                const totalTopics = end - start + 1;
                                const isActive = topics.length > 0;

                                return (
                                    <button
                                        key={module.id}
                                        onClick={() => isActive && setSelectedModule(module.id)}
                                        disabled={!isActive}
                                        className={`text-left p-5 rounded-2xl border-2 transition-all ${isActive
                                            ? `hover:shadow-lg hover:border-blue-500 bg-white dark:bg-[#111] border-gray-200 dark:border-gray-800`
                                            : `opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800`
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl text-white`}>
                                                {module.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Module {module.id}</div>
                                                <div className="font-bold text-[#1F2937] dark:text-white">{module.title}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{module.description}</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500 dark:text-gray-400">
                                                Topics {start}-{end}
                                            </span>
                                            {isActive ? (
                                                <span className="flex items-center gap-1 text-green-600">
                                                    <TrendingUp className="w-4 h-4" />
                                                    {topics.length}/{totalTopics} Ready
                                                </span>
                                            ) : (
                                                <span className="text-gray-400">Coming Soon</span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Selected Module Topics */}
                    {selectedModule && (
                        <div className="max-w-6xl mx-auto px-6 pb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white">
                                    Module {selectedModule} Topics
                                </h2>
                                <button
                                    onClick={() => setSelectedModule(null)}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    ← Back to Modules
                                </button>
                            </div>

                            <div className="space-y-3">
                                {getTopicsByModule(selectedModule).map((topic) => (
                                    <Link
                                        key={topic.id}
                                        href={`/student/batch1/polity/topic/${topic.id}`}
                                        className="block bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-lg hover:border-blue-500 transition-all"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                                                        Topic {topic.id}
                                                    </span>
                                                    {topic.priority === 'High' && (
                                                        <span className="text-xs px-2 py-0.5 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                                                            High Priority
                                                        </span>
                                                    )}
                                                    {topic.currentAffairs.length > 0 && (
                                                        <span className="text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 flex items-center gap-1">
                                                            <Sparkles className="w-3 h-3" />
                                                            {topic.currentAffairs.length} CA
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-semibold text-[#1F2937] dark:text-white mb-1">
                                                    {topic.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {topic.staticFocus}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-400 mt-2" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quick Access - All Topics */}
                    {!selectedModule && (
                        <div className="max-w-6xl mx-auto px-6 pb-12">
                            <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white mb-6">
                                Recently Added Topics
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {POLITY_TOPICS.slice(0, 6).map((topic) => (
                                    <Link
                                        key={topic.id}
                                        href={`/student/batch1/polity/topic/${topic.id}`}
                                        className="flex items-center gap-4 bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-lg hover:border-blue-500 transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
                                            {topic.id}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-[#1F2937] dark:text-white">{topic.title}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {topic.keyConcepts.length} concepts • {topic.currentAffairs.length} CA updates
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            ) : view === 'schedule' ? (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <PolityScheduleView isAdmin={isAdmin} />
                </div>
            ) : (
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <Batch1ContentMap onBack={() => setView('topics')} />
                </div>
            )}
        </div>
    );
}
