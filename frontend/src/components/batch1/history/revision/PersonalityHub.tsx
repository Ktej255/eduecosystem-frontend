"use client";

import React, { useState } from 'react';
import {
    Users, Crown, BookOpen, Star,
    Search, Filter, ChevronRight,
    FileText, User, Sparkles, Shield
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const PERSONALITIES = [
    {
        name: "Chandragupta Maurya",
        title: "Founder of Mauryan Empire",
        era: "Ancient",
        keyWorks: "Consolidation of North India",
        ideology: "Centralized Administration (Saptanga Theory)",
        organization: "Mauryan Administration with Chanakya",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100"
    },
    {
        name: "Ashoka the Great",
        title: "Mauryan Emperor",
        era: "Ancient",
        keyWorks: "Edicts of Ashoka, Dhamma Propagation",
        ideology: "Dhamma (Social & Moral Ethic), Non-violence",
        organization: "Dhamma Mahamattas",
        color: "text-amber-700",
        bg: "bg-amber-100",
        border: "border-amber-200"
    },
    {
        name: "Akbar",
        title: "Mughal Emperor",
        era: "Medieval",
        keyWorks: "Mansabdari System, Ibadat Khana",
        ideology: "Sulh-i-Kul (Universal Peace), Din-i-Ilahi",
        organization: "Mughal Central Administration",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100"
    },
    {
        name: "Chhatrapati Shivaji Maharaj",
        title: "Founder of Maratha Empire",
        era: "Medieval",
        keyWorks: "Fortification, Guerilla Tactics",
        ideology: "Hindavi Swarajya, Administrative Efficiency",
        organization: "Ashtapradhan Council",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-100"
    },
    {
        name: "Raja Ram Mohan Roy",
        title: "Father of Modern India",
        era: "Modern",
        keyWorks: "Sambad Kaumudi, Tuhfat-ul-Muwahhidin",
        ideology: "Monotheism, Abolition of Sati, Modern Education",
        organization: "Brahmo Samaj, Atmiya Sabha",
        color: "text-red-600",
        bg: "bg-red-50",
        border: "border-red-100"
    },
    {
        name: "Mahatma Gandhi",
        title: "Father of the Nation",
        era: "Modern",
        keyWorks: "Hind Swaraj, My Experiments with Truth",
        ideology: "Satyagraha, Ahimsa, Sarvodaya",
        organization: "Satyagraha Sabha, Harijan Sevak Sangh",
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-100"
    }
];

export default function PersonalityHub() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEra, setSelectedEra] = useState("All");

    const filtered = PERSONALITIES.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.ideology.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEra = selectedEra === "All" || p.era === selectedEra;
        return matchesSearch && matchesEra;
    });

    return (
        <div className="space-y-6">
            {/* Header / Controls */}
            <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input
                        placeholder="Search by name, work, or ideology..."
                        className="pl-10 rounded-xl border-slate-200 focus:ring-amber-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {["All", "Ancient", "Medieval", "Modern"].map(era => (
                        <Button
                            key={era}
                            variant={selectedEra === era ? "default" : "outline"}
                            size="sm"
                            className={`rounded-full px-5 ${selectedEra === era ? 'bg-amber-600 hover:bg-amber-700' : ''}`}
                            onClick={() => setSelectedEra(era)}
                        >
                            {era}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((person, idx) => (
                    <div key={idx} className={`rounded-3xl border-2 ${person.border} ${person.bg} p-6 h-full flex flex-col transition-all hover:shadow-lg group animate-in zoom-in-95 duration-300`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${person.bg} border-2 ${person.border} shadow-sm group-hover:bg-white transition-colors`}>
                                <User size={24} className={person.color} />
                            </div>
                            <Badge variant="outline" className={`border-${person.era === 'Ancient' ? 'amber' : person.era === 'Medieval' ? 'indigo' : 'red'}-200 bg-white/50`}>
                                {person.era} Era
                            </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{person.name}</h3>
                        <p className={`text-sm font-bold ${person.color} mb-6`}>{person.title}</p>

                        <div className="space-y-4 flex-1">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-1">
                                    <Sparkles size={10} /> Ideology / Philosophy
                                </label>
                                <p className="text-sm text-slate-700 font-bold leading-tight">{person.ideology}</p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-1">
                                    <BookOpen size={10} /> Key Works / Contributions
                                </label>
                                <p className="text-sm text-slate-600 font-medium">{person.keyWorks}</p>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest flex items-center gap-1">
                                    <Shield size={10} /> Association / Organization
                                </label>
                                <p className="text-sm text-slate-600 font-medium">{person.organization}</p>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center">
                            <Button variant="ghost" size="sm" className="text-xs font-bold gap-1 hover:bg-white">
                                View Full Profile <ChevronRight size={14} />
                            </Button>
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-100 flex items-center justify-center text-[10px] font-black text-amber-700">Q</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-black text-indigo-700">M</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="py-20 text-center">
                    <Users size={64} className="mx-auto text-slate-200 mb-4" />
                    <h3 className="text-xl font-bold text-slate-800">No Personalities Found</h3>
                    <p className="text-slate-500">Try adjusting your search or filters.</p>
                </div>
            )}
        </div>
    );
}
