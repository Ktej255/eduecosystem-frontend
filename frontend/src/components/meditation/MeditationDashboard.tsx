"use client";

import React, { useEffect, useState } from 'react';
import { MeditationEngine, MeditationSession } from '@/lib/meditation/meditation-engine';
import { Play, Moon, Sun, Wind, Sparkles, Brain } from 'lucide-react';
import Link from 'next/link';

export default function MeditationDashboard() {
    const [recommended, setRecommended] = useState<MeditationSession | null>(null);
    const [allSessions, setAllSessions] = useState<MeditationSession[]>([]);

    useEffect(() => {
        setRecommended(MeditationEngine.getRecommendedSession());
        setAllSessions(MeditationEngine.getAllSessions());
    }, []);

    const getIcon = (category: string) => {
        switch (category) {
            case 'sleep': return <Moon className="w-5 h-5" />;
            case 'morning': return <Sun className="w-5 h-5" />;
            case 'focus': return <Brain className="w-5 h-5" />;
            case 'anxiety': return <Wind className="w-5 h-5" />;
            default: return <Sparkles className="w-5 h-5" />;
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white pb-20">
            {/* Dynamic Ambient Background */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-900/30 to-neutral-950 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-2">Meditation Center</h1>
                    <p className="text-neutral-400">Find your center. Realign your mind.</p>
                </div>

                {/* Hero: Recommended Session */}
                {recommended && (
                    <div className="mb-16">
                        <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Predicted for You</div>
                        <Link href={`/student/meditation/session/${recommended.id}`} className="block group">
                            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${recommended.thumbnailGradient} p-8 md:p-12 transition-transform hover:scale-[1.01]`}>
                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                                {getIcon(recommended.category)}
                                            </div>
                                            <span className="text-sm font-medium text-white/80">{recommended.duration} min • {recommended.category}</span>
                                        </div>
                                        <h2 className="text-4xl font-black mb-3">{recommended.title}</h2>
                                        <p className="text-white/80 text-lg max-w-xl">{recommended.description}</p>
                                    </div>

                                    <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-6 h-6 ml-1" />
                                    </div>
                                </div>

                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            </div>
                        </Link>
                    </div>
                )}

                {/* Categories grid */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Explore Sessions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allSessions.filter(s => s.id !== recommended?.id).map((session) => (
                            <Link key={session.id} href={`/student/meditation/session/${session.id}`} className="group">
                                <div className={`h-full rounded-2xl bg-neutral-900 border border-neutral-800 p-6 transition-all hover:bg-neutral-800 hover:border-neutral-700`}>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${session.thumbnailGradient} flex items-center justify-center mb-4`}>
                                        <div className="text-white">
                                            {getIcon(session.category)}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{session.title}</h4>
                                    <p className="text-sm text-neutral-400 mb-4 line-clamp-2">{session.description}</p>

                                    <div className="flex items-center text-xs text-neutral-500 font-bold uppercase tracking-wider">
                                        {session.duration} min • {session.category}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
