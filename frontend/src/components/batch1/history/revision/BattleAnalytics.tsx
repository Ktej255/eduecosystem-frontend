"use client";

import React, { useState } from 'react';
import {
    Shield, Sword, Flag, MapPin,
    ArrowRight, AlertCircle, Info, TrendingUp,
    CheckCircle2, Target, Hash
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Battle {
    name: string;
    year: string;
    parties: string[];
    outcome: string;
    strategicKey: string;
    impact: string;
    color: string;
    bg: string;
    border: string;
    location: string;
}

const DEFAULT_BATTLES: Battle[] = [
    {
        name: "First Battle of Panipat",
        year: "1526",
        parties: ["Babur (Mughal)", "Ibrahim Lodi (Delhi Sultanate)"],
        outcome: "Mughal Victory; Foundation of Mughal Empire",
        strategicKey: "First use of gunpowder & artillery in India by Babur.",
        impact: "End of Delhi Sultanate and start of 300 years of Mughal rule.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        location: "Panipat, Haryana"
    },
    {
        name: "Battle of Khanwa",
        year: "1527",
        parties: ["Babur", "Rana Sanga of Mewar"],
        outcome: "Babur Victory; Consolidated Mughal hold",
        strategicKey: "Defeat of the powerful Rajput confederacy.",
        impact: "Secured Mughal presence in North India beyond just Punjab.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        location: "Khanwa, Rajasthan"
    },
    {
        name: "Battle of Plassey",
        year: "1757",
        parties: ["Robert Clive (British EIC)", "Siraj-ud-Daulah (Nawab of Bengal)"],
        outcome: "British EIC Victory via betrayal (Mir Jafar)",
        strategicKey: "Political intrigue rather than military might.",
        impact: "Started the transformation of EIC from traders to rulers.",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-200",
        location: "Palashi, Bengal"
    },
    {
        name: "Battle of Buxar",
        year: "1764",
        parties: ["Major Hector Munro (British)", "Combined forces of Mir Qasim, Shuja-ud-Daulah, Shah Alam II"],
        outcome: "Decisive British Victory; Treaty of Allahabad",
        strategicKey: "Defeat of the Mughal Emperor himself.",
        impact: "Granted British 'Diwani Rights' (revenue collection) of Bengal, Bihar, Orissa.",
        color: "text-rose-700",
        bg: "bg-rose-50",
        border: "border-rose-200",
        location: "Buxar, Bihar"
    },
    {
        name: "Battle of Haldighati",
        year: "1576",
        parties: ["Man Singh (Mughal Army)", "Maharana Pratap"],
        outcome: "Indecisive/Mughal victory; Maharana Pratap escaped",
        strategicKey: "Guerrilla-style resistance in hilly terrain.",
        impact: "Symbol of unwavering resistance against imperial expansion.",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        location: "Haldighati, Rajasthan"
    }
];

interface BattleAnalyticsProps {
    battles?: Battle[];
}

export default function BattleAnalytics({ battles = DEFAULT_BATTLES }: BattleAnalyticsProps) {
    const [selectedBattle, setSelectedBattle] = useState(battles[0]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Battle List (Sidebar) */}
            <div className="lg:col-span-4 space-y-4">
                <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex items-center gap-2 mb-2">
                    <Shield className="text-stone-600" size={20} />
                    <h3 className="font-bold text-stone-800">Decisive Battles Array</h3>
                </div>
                <div className="space-y-3 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {battles.map((battle, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedBattle(battle)}
                            className={`w-full text-left p-4 rounded-2xl border-2 transition-all group ${selectedBattle.name === battle.name
                                ? `${battle.border} ${battle.bg} shadow-md`
                                : "border-transparent bg-white hover:border-slate-200"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className={`text-[10px] font-black tracking-widest uppercase ${battle.color}`}>
                                    {battle.year} AD
                                </span>
                                {selectedBattle.name === battle.name && <Target size={14} className={battle.color} />}
                            </div>
                            <h4 className="font-bold text-slate-800 group-hover:text-slate-900 leading-tight">
                                {battle.name}
                            </h4>
                            <p className="text-[10px] text-slate-500 font-medium mt-1 truncate">
                                {battle.location}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Analysis View (Main) */}
            <div className="lg:col-span-8">
                <div className={`bg-white rounded-3xl border-2 ${selectedBattle.border} shadow-sm overflow-hidden min-h-[600px] flex flex-col`}>
                    {/* Header */}
                    <div className={`${selectedBattle.bg} p-8 border-b ${selectedBattle.border}`}>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div>
                                <Badge className={`${selectedBattle.bg} ${selectedBattle.color} ${selectedBattle.border} border mb-2 px-3`}>
                                    Year: {selectedBattle.year}
                                </Badge>
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900">{selectedBattle.name}</h2>
                                <div className="flex items-center gap-2 text-slate-500 mt-2 font-medium">
                                    <MapPin size={16} /> {selectedBattle.location}
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3">
                                <Sword size={24} className={selectedBattle.color} />
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase">Status</p>
                                    <p className="text-xs font-bold text-slate-700">Decisive Conflict</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="p-8 space-y-8 flex-1">
                        {/* Parties Involved */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-stone-400 uppercase">Party A</p>
                                    <p className="font-bold text-slate-800 italic">{selectedBattle.parties[0]}</p>
                                </div>
                                <div className="text-xl font-black text-stone-300">VS</div>
                                <div className="space-y-1 text-right">
                                    <p className="text-[10px] font-black text-stone-400 uppercase">Party B</p>
                                    <p className="font-bold text-slate-800 italic">{selectedBattle.parties[1]}</p>
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                                <p className="text-[10px] font-black text-emerald-600 uppercase mb-1 flex items-center gap-1">
                                    <CheckCircle2 size={12} /> Ultimate Outcome
                                </p>
                                <p className="text-sm font-bold text-slate-800">{selectedBattle.outcome}</p>
                            </div>
                        </div>

                        {/* Strategic Insight */}
                        <div className="space-y-4">
                            <h4 className="flex items-center gap-2 font-black text-slate-800 text-sm uppercase tracking-wider">
                                <Target size={18} className="text-red-500" /> Strategic Key to Victory
                            </h4>
                            <div className={`p-6 rounded-2xl border-2 ${selectedBattle.border} bg-white shadow-sm relative overflow-hidden group`}>
                                <div className={`absolute top-0 right-0 w-24 h-24 ${selectedBattle.bg} opacity-50 rounded-full transform translate-x-1/2 -translate-y-1/2`}></div>
                                <p className="text-lg text-slate-700 font-medium leading-relaxed relative z-10 italic">
                                    "{selectedBattle.strategicKey}"
                                </p>
                            </div>
                        </div>

                        {/* Long-term Impact */}
                        <div className="space-y-4">
                            <h4 className="flex items-center gap-2 font-black text-slate-800 text-sm uppercase tracking-wider">
                                <TrendingUp size={18} className="text-blue-500" /> Long-term Historical Impact
                            </h4>
                            <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 shadow-xl border border-slate-800">
                                <p className="text-slate-300 leading-relaxed font-medium">
                                    {selectedBattle.impact}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Tip */}
                    <div className="p-6 bg-amber-50 border-t border-amber-100 flex gap-3 items-center">
                        <AlertCircle className="text-amber-600" size={24} />
                        <p className="text-xs text-amber-800 font-bold">
                            UPSC Trick: Focus on the **Treaties** that followed these battles. Battles set the stage, but Treaties (like Allahabad) redefined boundaries and powers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
