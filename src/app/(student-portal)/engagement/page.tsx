"use client";

import React from "react";
import { StreakWidget, RealityCheckOverlay, ConnectTheDots } from "@/components/engagement";

export default function EngagementDemoPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
            {/* Reality Check Overlay (floating) */}
            <RealityCheckOverlay
                currentVideoId={1}
                position="top-right"
            />

            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold mb-8">Engagement Features Demo</h1>

                {/* Streak Widget */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">
                        🔥 Streak Tracker
                    </h2>
                    <StreakWidget />
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

                {/* Compact Streak */}
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-400">
                        Compact Streak (for header)
                    </h2>
                    <div className="flex gap-4">
                        <StreakWidget compact />
                    </div>
                </section>
            </div>
        </div>
    );
}
