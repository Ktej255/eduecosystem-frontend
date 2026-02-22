"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Crown } from "lucide-react";

interface TimelineEvent {
    year: string;
    ruler: string;
    event: string;
    is_battle: boolean;
}

const HISTORY_DATA: TimelineEvent[] = [
    { year: "734 AD", ruler: "Bappa Rawal", event: "Establishment of Mewar", is_battle: false },
    { year: "1527 AD", ruler: "Rana Sanga", event: "Battle of Khanwa", is_battle: true },
    { year: "1576 AD", ruler: "Maharana Pratap", event: "Battle of Haldighati", is_battle: true },
];

export function HistoryTimeline() {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);
    const [isSimulating, setIsSimulating] = useState(false);

    const handleSimulation = () => {
        setIsSimulating(true);
        let current = 0;
        setActiveEvent(0);

        const interval = setInterval(() => {
            current++;
            if (current >= HISTORY_DATA.length) {
                clearInterval(interval);
                setIsSimulating(false);
                setTimeout(() => setActiveEvent(null), 2000); // Clear after a delay
            } else {
                setActiveEvent(current);
            }
        }, 1500); // 1.5s per event
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-8 rounded-2xl border border-white/10 bg-card/5 backdrop-blur-md relative overflow-hidden">
            {/* ... header ... */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Crown size={120} />
            </div>

            <h2 className="text-xl font-bold text-orange-300 mb-6 flex items-center">
                <Crown className="mr-2" size={20} /> Imperial Timeline: The Guhil Digvijay
            </h2>

            <div className="relative border-l-2 border-orange-500/30 ml-4 space-y-8 pl-8">
                {HISTORY_DATA.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: activeEvent === index || activeEvent === null ? 1 : 0.3,
                            x: 0,
                            scale: activeEvent === index ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Node */}
                        <div className={`absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-[#0f0f13] flex items-center justify-center transition-colors duration-500 ${activeEvent === index ? "bg-card shadow-[0_0_15px_rgba(255,165,0,0.8)]" :
                            item.is_battle ? "bg-red-500" : "bg-orange-500"
                            }`}>
                            {item.is_battle ? <GitPullRequest size={10} className={activeEvent === index ? "text-black" : "text-white"} /> : <GitCommit size={10} className={activeEvent === index ? "text-black" : "text-white"} />}
                        </div>

                        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg transition-colors border ${activeEvent === index ? "bg-orange-500/20 border-orange-500/50" : "bg-card/5 border-white/5 hover:bg-card/10"
                            }`}>
                            <div>
                                <span className={`text-xs font-mono block mb-1 ${activeEvent === index ? "text-white" : "text-orange-400"}`}>{item.year}</span>
                                <h3 className="text-lg font-bold text-white">{item.ruler}</h3>
                            </div>
                            <div className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-bold ${item.is_battle ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`}>
                                {item.event}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={handleSimulation}
                    disabled={isSimulating}
                    className="px-6 py-2 bg-orange-600 hover:bg-orange-500 disabled:bg-gray-700 text-white font-bold rounded-lg shadow-lg shadow-orange-900/40 transition-all hover:scale-105 active:scale-95"
                >
                    {isSimulating ? "Simulating History..." : "Start Chronology Simulation"}
                </button>
            </div>
        </div>
    );
}
