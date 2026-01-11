"use client";

import React, { useEffect, useState } from 'react';
import { meditationService, MeditationOverview } from '@/services/meditationService';
// We still need static content like icons or helper functions if not in service
import { Play, Moon, Sun, Wind, Sparkles, Brain } from 'lucide-react';
import Link from 'next/link';

export default function MeditationDashboard() {
    const [overview, setOverview] = useState<MeditationOverview | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await meditationService.getOverview();
                setOverview(data);
            } catch (error) {
                console.error("Failed to load meditation data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
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

    if (loading) {
        return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">Loading...</div>;
    }

    // Backend overview doesn't return ALL sessions list directly, it returns progress.
    // However, the dashboard needs to show "Explore Sessions".
    // The previous mock engine returned ALL sessions.
    // The backend `getOverview` returns `todays_processes` (count) and `levels`.
    // It DOES NOT return a list of all available sessions (meditation processes).
    // The sessions are embedded in levels in the backend model.

    // I should fetch Level 1 details to get the list of sessions (since users start at Level 1).
    // Or maybe the dashboard should show "Current Level Sessions"?

    // Let's modify the load logic to ALSO fetch Level 1 (or current level) details to get the list.

    return (
        <div className="min-h-screen bg-neutral-950 text-white pb-20">
            {/* Dynamic Ambient Background */}
            <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-900/30 to-neutral-950 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-serif text-white/90 mb-2">Meditation Center</h1>
                    <p className="text-neutral-400">Find your center. Realign your mind.</p>
                    <div className="mt-4 flex gap-4 text-sm text-neutral-400">
                        <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                            Streak: <span className="text-white font-bold">{overview?.total_streak} Days</span>
                        </div>
                        <div className="bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                            Level: <span className="text-white font-bold">{overview?.current_level}</span>
                        </div>
                    </div>
                </div>

                {/* Hero: Recommended Session (Placeholder logic for now) */}
                {/* 
                   In backend, we have `todays_processes` which is an index.
                   Any specific recommendation logic needs to come from backend or be derived.
                   For now, I will omit the "Recommended" hero if I don't have the specific session object easily.
                   Or I can fetch the specific session if I knew its ID.
                */}

                {/* Categories grid / Level Sessions */}
                <div>
                    <h3 className="text-xl font-bold mb-6">Your Sessions (Level {overview?.current_level})</h3>
                    <div className="p-6 bg-neutral-900/50 border border-white/10 rounded-2xl text-center text-neutral-400">
                        <p>To view your daily sessions, please proceed to your specific Day view.</p>
                        <Link href={`/student/meditation/level/${overview?.current_level}/day/${overview?.current_day}`} className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-bold transition-colors">
                            Go to Day {overview?.current_day}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
