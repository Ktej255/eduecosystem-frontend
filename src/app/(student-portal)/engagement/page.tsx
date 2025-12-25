"use client";

import React from "react";
import {
    StreakWidget,
    RealityCheckOverlay,
    ConnectTheDots,
    HabitTracker,
    MasteryWidget
} from "@/components/engagement";

export default function EngagementDemoPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
            {/* Reality Check Overlay (floating) */}
            <RealityCheckOverlay
                currentVideoId={1}
                position="top-right"
            />

            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold mb-8">🎮 Engagement System Demo</h1>

                {/* Top Row: Streak + Mastery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-400">
                            🔥 Streak Tracker
                        </h2>
                        <StreakWidget />
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-400">
                            🏆 Mastery Level
                        </h2>
                        <MasteryWidget />
                    </section>
                </div>

                {/* Habit Tracker */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">
                        ✅ Daily Habits
                    </h2>
                    <HabitTracker />
                </section>

                {/* Connect The Dots */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">
                        🔗 Connect The Dots
                    </h2>
                    <ConnectTheDots
                        currentTopic="Om Chanting"
                        previousTopics={["Breath Awareness", "Counting Breath"]}
                        coinsReward={15}
                    />
                </section>

                {/* Compact Widgets */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">
                        Compact Widgets (for header)
                    </h2>
                    <div className="flex gap-4">
                        <StreakWidget compact />
                    </div>
                </section>
            </div>
        </div>
    );
}
