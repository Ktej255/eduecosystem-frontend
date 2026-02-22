"use client";

import VirtualLibrary from "@/components/batch1-1/community/VirtualLibrary";
import Leaderboard from "@/components/batch1-1/community/Leaderboard";
import { ArrowLeft, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function CommunityPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link
                    href="/student/batch1-1"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 flex items-center gap-3">
                            <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            Community Hub
                        </h1>
                        <p className="text-muted-foreground dark:text-muted-foreground mt-2">
                            Study together in silence, track your global rank, and stay motivated.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-900">
                        <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                            Strict 'No-Chat' Policy Enabled
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Library */}
                <div className="lg:col-span-2 space-y-6">
                    <VirtualLibrary />

                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Weekly Challenge: "The 5 AM Club"</h3>
                        <p className="opacity-90 mb-4">
                            Log in before 5:30 AM for 5 consecutive days to unlock the "Early Bird" badge and +500 XP.
                        </p>
                        <button className="bg-card/20 hover:bg-card/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                            Join Challenge
                        </button>
                    </div>
                </div>

                {/* Sidebar: Leaderboard */}
                <div className="space-y-6">
                    <Leaderboard />
                </div>
            </div>
        </div>
    );
}
