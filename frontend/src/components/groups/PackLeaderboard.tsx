"use client";

import { motion } from "framer-motion";
import { Trophy, Users, TrendingUp, Shield } from "lucide-react";

interface Pack {
    id: number;
    name: string;
    points: number;
    house_type: string;
    metadata: {
        color?: string;
        motto?: string;
        emblem?: string;
    };
    is_my_pack?: boolean;
}

interface PackLeaderboardProps {
    packs: Pack[];
}

export function PackLeaderboard({ packs }: PackLeaderboardProps) {
    return (
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="p-6 border-b border-gray-800 bg-cyan-950/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-amber-500" />
                    <h3 className="text-xl font-bold text-white">Global Pack Rankings</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <TrendingUp className="h-3 w-3" />
                    <span>Updates every 5 mins</span>
                </div>
            </div>

            <div className="p-4">
                <div className="space-y-3">
                    {packs.map((pack, index) => (
                        <motion.div
                            key={pack.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${pack.is_my_pack
                                    ? "bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                                    : "bg-black/20 border-gray-800 hover:border-gray-700"
                                }`}
                        >
                            <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-lg ${index === 0 ? "bg-amber-500 text-black" :
                                    index === 1 ? "bg-gray-300 text-black" :
                                        index === 2 ? "bg-amber-800 text-white" : "bg-gray-800 text-gray-400"
                                }`}>
                                {index + 1}
                            </div>

                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-black shadow-inner`} style={{ backgroundColor: pack.metadata.color || '#333' }}>
                                {pack.metadata.emblem || pack.name[0]}
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-white text-lg">{pack.name}</h4>
                                    {pack.is_my_pack && (
                                        <span className="text-[10px] bg-cyan-600 px-2 py-0.5 rounded-full uppercase font-bold text-white">My Pack</span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 italic">"{pack.metadata.motto || 'Strength in unity.'}"</p>
                            </div>

                            <div className="text-right">
                                <div className="text-2xl font-black text-cyan-400 leading-none">{pack.points.toLocaleString()}</div>
                                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Pack Points</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-black/40 text-center border-t border-gray-800">
                <p className="text-sm text-gray-400">
                    Earn <span className="text-cyan-400 font-bold">Learning Coins</span> to boost your pack's rank!
                </p>
            </div>
        </div>
    );
}
