"use client";

import React, { useState } from 'react';
import {
    Calendar, History, Landmark, Shield,
    ArrowRight, Clock, Info, CheckCircle2,
    Lock, Star, ChevronRight, ChevronLeft, Lightbulb
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DEFAULT_ERA_DATA = [
    {
        id: 'ancient',
        title: 'Ancient India',
        subtitle: 'Pre-history to 750 AD',
        color: 'bg-amber-600',
        textColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        lightBg: 'bg-amber-50',
        events: [
            { year: '2500 - 1500 BC', title: 'Indus Valley Civilization', detail: 'Mature phase of the first urban civilization in India.' },
            { year: '1500 - 600 BC', title: 'Vedic Period', detail: 'Composition of Vedas; transition from pastoral to agrarian society.' },
            { year: '563 - 483 BC', title: 'Gautama Buddha', detail: 'Life of the founder of Buddhism; era of Mahajanapadas.' },
            { year: '322 - 185 BC', title: 'Mauryan Empire', detail: 'Unification of India under Chandragupta and Ashoka.' },
            { year: '319 - 550 AD', title: 'Gupta Empire', detail: 'Classical age of India; peak of art and science.' }
        ]
    },
    {
        id: 'medieval',
        title: 'Medieval India',
        subtitle: '750 AD to 1707 AD',
        color: 'bg-indigo-600',
        textColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        lightBg: 'bg-indigo-50',
        events: [
            { year: '750 - 1200 AD', title: 'Tripartite Struggle', detail: 'Contest between Palas, Pratiharas, and Rashtrakutas for Kannauj.' },
            { year: '1206 - 1526 AD', title: 'Delhi Sultanate', detail: 'Rule of Slave, Khalji, Tughlaq, Sayyid, and Lodi dynasties.' },
            { year: '1336 - 1646 AD', title: 'Vijayanagara Empire', detail: 'Golden age of South Indian medieval history.' },
            { year: '1526 - 1707 AD', title: 'Mughal Empire (Peak)', detail: 'From Babur to Aurangzeb; era of administrative consolidation.' },
            { year: '1674 - 1818 AD', title: 'Maratha Empire', detail: 'Rise of Shivaji and the expansion of Hindavi Swarajya.' }
        ]
    },
    {
        id: 'modern',
        title: 'Modern India',
        subtitle: '1707 AD to 1947 AD',
        color: 'bg-red-600',
        textColor: 'text-red-600',
        borderColor: 'border-red-200',
        lightBg: 'bg-red-50',
        events: [
            { year: '1757', title: 'Battle of Plassey', detail: 'Establishment of British political influence in Bengal.' },
            { year: '1857', title: 'First War of Independence', detail: 'Massive revolt against EIC rule; transition to Crown rule.' },
            { year: '1885', title: 'Indian National Congress', detail: 'Foundation of the premier political organization for freedom.' },
            { year: '1915 - 1947', title: 'Gandhian Era', detail: 'Non-violence, Civil Disobedience, and the final push for Swaraj.' },
            { year: '1947', title: 'Independence & Partition', detail: 'The birth of Modern India and Pakistan.' }
        ]
    }
];

export interface ChronologyEvent {
    year: string;
    title: string;
    detail: string;
}

export interface EraData {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    textColor: string;
    borderColor: string;
    lightBg: string;
    events: ChronologyEvent[];
}

interface ChronologyMasterProps {
    eraData?: EraData[];
    initialEra?: string;
}

export default function ChronologyMaster({ eraData = DEFAULT_ERA_DATA, initialEra = 'modern' }: ChronologyMasterProps) {
    const [selectedEra, setSelectedEra] = useState(initialEra);

    const activeEra = eraData.find(e => e.id === selectedEra) || eraData[0];

    return (
        <div className="space-y-6">
            {/* Era Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eraData.map((era) => (
                    <button
                        key={era.id}
                        onClick={() => setSelectedEra(era.id)}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-start ${selectedEra === era.id
                            ? `${era.borderColor} ${era.lightBg} shadow-md`
                            : 'border-slate-100 bg-white hover:border-slate-200'
                            }`}
                    >
                        <div className="flex justify-between w-full mb-1">
                            <span className={`text-xs font-bold uppercase tracking-wider ${era.textColor}`}>
                                {era.id === 'ancient' ? <Landmark size={14} className="inline mr-1" /> :
                                    era.id === 'medieval' ? <Shield size={14} className="inline mr-1" /> :
                                        <History size={14} className="inline mr-1" />}
                                {era.id}
                            </span>
                            {selectedEra === era.id && <CheckCircle2 size={16} className={era.textColor} />}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{era.title}</h3>
                        <p className="text-xs text-slate-500 font-medium">{era.subtitle}</p>
                    </button>
                ))}
            </div>

            {/* Interactive Timeline */}
            <div className={`bg-white rounded-3xl border-2 ${activeEra.borderColor} shadow-sm overflow-hidden`}>
                <div className={`${activeEra.color} p-4 text-white flex justify-between items-center`}>
                    <div className="flex items-center gap-2">
                        <Clock size={20} />
                        <h3 className="text-lg font-bold">Chronology Explorer: {activeEra.title}</h3>
                    </div>
                    <Badge variant="outline" className="text-white border-white/40 bg-white/10">
                        {activeEra.events.length} Key Milestones
                    </Badge>
                </div>

                <div className="p-8 relative">
                    {/* Vertical Line */}
                    <div className={`absolute left-10 top-0 bottom-0 w-1 ${activeEra.color} opacity-10 rounded-full hidden md:block`}></div>

                    <div className="space-y-12">
                        {activeEra.events.map((event, idx) => (
                            <div key={idx} className="relative flex flex-col md:flex-row gap-6 items-start md:items-center animate-in fade-in slide-in-from-left-4 duration-500">
                                {/* Dot for Desktop */}
                                <div className={`hidden md:flex absolute left-8 w-5 h-5 rounded-full border-4 border-white ${activeEra.color} shadow-sm z-10`}></div>

                                {/* Year Badge */}
                                <div className={`px-4 py-1.5 rounded-full ${activeEra.color} text-white font-bold text-sm shadow-sm md:ml-12 min-w-[120px] text-center`}>
                                    {event.year}
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 p-5 rounded-2xl border-2 ${activeEra.borderColor} ${activeEra.lightBg} relative group hover:shadow-md transition-shadow`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold text-slate-800">{event.title}</h4>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Info size={16} />
                                        </Button>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {event.detail}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Button size="sm" variant="outline" className={`rounded-lg border-${activeEra.id === 'ancient' ? 'amber' : activeEra.id === 'medieval' ? 'indigo' : 'red'}-200 text-xs font-bold h-7`}>
                                            Visual Guide
                                        </Button>
                                        <Button size="sm" variant="outline" className="rounded-lg border-slate-200 text-xs font-bold h-7">
                                            Related MCQs
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="bg-slate-50 border-t border-slate-100 p-6 flex items-start gap-4">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                        <Lightbulb size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">Productivity Hint: The Power of Sequencing</h4>
                        <p className="text-sm text-slate-600 font-medium">
                            UPSC often asks for "Correct Chronological Order." Use this timeline to visualize causes and effects. For example, in Modern History, notice how world events (WWI, WWII) directly influenced Indian movements (Non-Cooperation, Quit India).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
