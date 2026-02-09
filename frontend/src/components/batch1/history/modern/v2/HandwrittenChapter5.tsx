"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Map as MapIcon,
    Sword,
    Shield,
    Scroll,
    Stamp,
    Target,
    Pin,
    Compass,
    AlertCircle,
    Flag,
    History,
    Anchor,
    Search,
    BookOpen,
    Quote,
    CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ANNEXATION_CHRONOLOGY = [
    { name: "Satara", year: "1848", victim: true },
    { name: "Jaitpur & Sambalpur", year: "1849", victim: true },
    { name: "Baghat", year: "1850", victim: true },
    { name: "Udaipur", year: "1852", victim: true },
    { name: "Jhansi", year: "1853", victim: true },
    { name: "Nagpur", year: "1854", victim: true }
];

const SUBSIDIARY_CHRONOLOGY = [
    { name: "Hyderabad", year: "1798" },
    { name: "Mysore", year: "1799" },
    { name: "Tanjore", year: "1799" },
    { name: "Awadh", year: "1801" },
    { name: "Peshwa", year: "1802" },
    { name: "Bhonsle", year: "1803" },
    { name: "Scindia", year: "1804" }
];

export default function HandwrittenChapter5() {
    const [activeWar, setActiveWar] = useState(0);

    const wars = [
        {
            title: "ANGLO-MYSORE WARS",
            icon: "🐅",
            color: "border-orange-500",
            bg: "bg-orange-50",
            battles: [
                { title: "1st War (1767-69)", treaty: "Treaty of Madras", note: "Haidar Ali wins." },
                { title: "2nd War (1780-84)", treaty: "Treaty of Mangalore", note: "Battle of Porto Novo (1781) - Coote def. Haidar." },
                { title: "3rd War (1790-92)", treaty: "Treaty of Seringapatam", note: "Tipu loses half kingdom." },
                { title: "4th War (1799)", treaty: "Annexed", note: "Tipu dies fighting. Wodeyars restored." }
            ]
        },
        {
            title: "ANGLO-MARATHA WARS",
            icon: "🐘",
            color: "border-red-500",
            bg: "bg-red-50",
            battles: [
                { title: "1st War (1775-82)", treaty: "Treaty of Salbai", note: "20 years of peace followed." },
                { title: "2nd War (1803-05)", treaty: "Surji-Arjungaon", note: "Wellington's victory at Assaye." },
                { title: "3rd War (1817-19)", treaty: "Peshwaship Abolished", note: "Baji Rao II sent to Bithur." }
            ]
        },
        {
            title: "ANGLO-SIKH WARS",
            icon: "⚔️",
            color: "border-blue-500",
            bg: "bg-blue-50",
            battles: [
                { title: "1st War (1845-46)", treaty: "Treaty of Lahore", note: "Kashmir sold to Gulab Singh (75L)." },
                { title: "2nd War (1848-49)", treaty: "Punjab Annexed", note: "Battle of Chillianwala (Shocking losses)." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-['Kalam',_cursive] text-slate-800 selection:bg-red-100 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Cutive+Mono&display=swap');
                
                .war-room-paper {
                    background-color: #fff;
                    border: 1px solid #ccc;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                }

                .stamp-annexed {
                    font-family: 'Permanent Marker', cursive;
                    color: #b22222;
                    border: 4px solid #b22222;
                    padding: 5px 15px;
                    display: inline-block;
                    transform: rotate(-10deg);
                    opacity: 0.8;
                    text-transform: uppercase;
                }

                .stamp-lapsed {
                    font-family: 'Permanent Marker', cursive;
                    color: #4b5563;
                    border: 4px solid #4b5563;
                    padding: 5px 15px;
                    display: inline-block;
                    transform: rotate(5deg);
                    opacity: 0.6;
                    text-transform: uppercase;
                }

                .tactical-pin {
                    width: 12px; height: 12px;
                    background-color: #ef4444;
                    border-radius: 50%;
                    position: relative;
                }
                .tactical-pin::after {
                    content: '';
                    position: absolute;
                    bottom: -8px; left: 5px;
                    width: 2px; height: 10px;
                    background-color: #999;
                }

                .marker-yellow {
                    background-color: #fef08a;
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                }

                .british-red { color: #b22222; }

                .timeline-node {
                    position: relative;
                    padding-left: 20px;
                    border-left: 2px dashed #ccc;
                }
                .timeline-node::before {
                    content: '';
                    position: absolute;
                    left: -7px; top: 0;
                    width: 12px; height: 12px;
                    background-color: #b22222;
                    border-radius: 50%;
                }
            `}</style>

            {/* HEADER: THE WAR ROOM */}
            <header className="max-w-6xl mx-auto pt-16 mb-16 text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-6">
                        <Stamp className="w-20 h-20 text-[#b22222]" />
                    </div>
                    <h1 className="text-4xl md:text-8xl font-['Permanent_Marker'] british-red mb-2 tracking-tighter">
                        EXPANSION & CONSOLIDATION
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-[0.4em] italic">
                        --- The Great Game and The Chessboard ---
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-white p-6 paper-border border-4 border-slate-900 transform rotate-1 shadow-2xl relative">
                    <div className="absolute -top-4 -left-4 tactical-pin"></div>
                    <div className="absolute -bottom-4 -right-4 tactical-pin"></div>
                    <p className="text-2xl leading-relaxed italic body-handwritten">
                        "The British Empire in India was like a huge chessboard, where policies were the moves and Indian states were the pieces to be captured."
                    </p>
                </div>
            </header>

            {/* SECTION 1: THE TOOLKIT OF EXPANSION */}
            <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* RING FENCE */}
                <div className="bg-white p-8 paper-border border-2 border-slate-300 relative transform -rotate-1 hover:rotate-0 transition-transform cursor-help group">
                    <div className="absolute top-4 right-4 text-slate-200 group-hover:text-slate-400 transition-colors">
                        <Shield className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold british-red mb-6 border-b pb-2">1. Ring Fence Policy</h3>
                    <p className="body-handwritten text-xl leading-relaxed mb-6 italic">
                        "Defense through Buffer Zones."
                    </p>
                    <ul className="space-y-4 body-handwritten text-lg">
                        <li>• <strong>Warren Hastings:</strong> Aimed to defend Company frontiers.</li>
                        <li>• Example: <strong>Awadh</strong> used as a buffer for Bengal.</li>
                        <li className="text-sm bg-slate-50 p-2 rounded border border-dashed">
                            <strong>Rohilla War (1774):</strong> Hastings lent troops to Awadh to crush Rohillas. A "Moral Stain".
                        </li>
                    </ul>
                </div>

                {/* SUBSIDIARY ALLIANCE */}
                <Card className="bg-white p-8 paper-border border-4 border-[#b22222] relative transform rotate-1 hover:rotate-0 transition-transform shadow-xl">
                    <div className="absolute top-2 right-2 stamp-lapsed text-[10px]">Wellesley's Trap</div>
                    <h3 className="text-2xl font-bold british-red mb-6 border-b-2 border-red-100 pb-2 flex items-center gap-2">
                        <Target className="w-6 h-6" /> 2. Subsidiary Alliance (1798)
                    </h3>
                    <p className="body-handwritten text-lg leading-relaxed mb-6">
                        Indian state accepts British troops + Resident. Surrenders <strong>External Sovereignty</strong>.
                    </p>

                    <div className="space-y-2 body-handwritten">
                        <p className="font-bold text-xs uppercase tracking-widest text-slate-400">Chronology (HMS-TAP):</p>
                        {SUBSIDIARY_CHRONOLOGY.slice(0, 5).map((item, i) => (
                            <div key={i} className="flex justify-between text-sm border-b border-slate-100 pb-1">
                                <span>{item.name}</span>
                                <span className="marker-yellow text-slate-800">{item.year}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-3 bg-red-50 text-red-900 text-xs italic border border-red-100">
                        <strong>Non-War Takeovers:</strong> Tanjore (1799), Surat (1800), Carnatic (1801).
                    </div>
                </Card>

                {/* DOCTRINE OF LAPSE */}
                <div className="bg-white p-8 paper-border border-2 border-slate-300 relative transform -rotate-1 hover:rotate-0 transition-transform group">
                    <div className="absolute top-4 right-4 text-slate-200 group-hover:text-slate-400 transition-colors">
                        <Stamp className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-6 border-b pb-2">3. Doctrine of Lapse (1848)</h3>
                    <p className="body-handwritten text-lg leading-relaxed mb-6 italic">
                        "No Natural Heir? The State Lapses to EIC."
                    </p>
                    <div className="space-y-3">
                        {ANNEXATION_CHRONOLOGY.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                                <span className="timeline-node"></span>
                                <span className="font-bold">{item.name}</span>
                                <span className="text-[10px] text-slate-500">[{item.year}]</span>
                                {i === 0 && <span className="stamp-annexed text-[8px] p-1 border-2 ml-auto">First</span>}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-3 bg-amber-50 text-amber-900 text-xs rounded border border-amber-100">
                        <strong>The Exception:</strong> Awadh annexed in <span className="font-bold">1856</span> on charges of "Maladministration" (James Outram Report).
                    </div>
                </div>
            </div>

            {/* SECTION 2: BENGAL FOUNDATION */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="bg-[#fffdf5] p-10 paper-border border-2 border-slate-300 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <MapIcon className="w-64 h-64 text-slate-400" />
                    </div>

                    <h2 className="text-3xl font-['Permanent_Marker'] british-red mb-10 flex items-center gap-3">
                        <Anchor className="w-8 h-8" /> CONQUEST OF BENGAL
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-6">
                            <div className="bg-white p-6 paper-border border-l-8 border-l-red-800 shadow-sm relative">
                                <div className="absolute -top-4 -right-4 stamp-annexed text-[10px]">1757</div>
                                <h4 className="marker-label text-xl mb-2">Battle of Plassey</h4>
                                <p className="body-handwritten text-lg">
                                    <strong>Siraj-ud-Daulah</strong> vs Clive. Betrayal by <strong>Mir Jafar</strong>. Sparked by "Black Hole Tragedy (1756)".
                                </p>
                            </div>
                            <div className="bg-white p-6 paper-border border-l-8 border-l-red-800 shadow-sm relative">
                                <div className="absolute -top-4 -right-4 stamp-annexed text-[10px]">1764</div>
                                <h4 className="marker-label text-xl mb-2">Battle of Buxar</h4>
                                <p className="body-handwritten text-lg">
                                    <strong>Hector Munro</strong> def. Combined forces (Mir Qasim + Shuja + Shah Alam II). Real military win!
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#f0f9ff] p-8 paper-border border-2 border-blue-200">
                            <h4 className="marker-label text-blue-900 border-b border-blue-100 mb-4 pb-2">The Dual System (1765-72)</h4>
                            <p className="body-handwritten text-xl italic mb-6">"Power without Responsibility."</p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-xs uppercase font-bold text-slate-400 mb-2">Diwani</p>
                                    <p className="font-bold text-blue-800">Company (Revenue)</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-xs uppercase font-bold text-slate-400 mb-2">Nizamat</p>
                                    <p className="font-bold text-blue-800">Nawab (Police/Order)</p>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-blue-900/60 body-handwritten">
                                Ended by Warren Hastings. Caused the Great Famine (1770).
                                <br />Emperor Shah Alam becomes first pensioner (26L).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE DECK OF WARS */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-4xl font-['Permanent_Marker'] text-center mb-12 flex justify-center items-center gap-4">
                    <Sword className="w-10 h-10 british-red" /> MAJOR CONQUESTS <Shield className="w-10 h-10 british-red" />
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {wars.map((war, idx) => (
                        <Button
                            key={idx}
                            onClick={() => setActiveWar(idx)}
                            variant={activeWar === idx ? "default" : "outline"}
                            className={`paper-border px-8 py-6 text-xl font-['Permanent_Marker'] transform ${activeWar === idx ? 'scale-110 -rotate-2 bg-slate-900 text-white' : 'rotate-1'}`}
                        >
                            {war.icon} {war.title}
                        </Button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeWar}
                        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 1 }}
                        className={`max-w-4xl mx-auto p-12 paper-border border-8 ${wars[activeWar].color} ${wars[activeWar].bg} shadow-2xl relative min-h-[500px]`}
                    >
                        <div className="absolute top-4 right-4 text-8xl opacity-10">{wars[activeWar].icon}</div>
                        <h3 className="text-4xl font-['Permanent_Marker'] mb-12 border-b-4 border-current pb-4">
                            Details: {wars[activeWar].title}
                        </h3>

                        <div className="space-y-8">
                            {wars[activeWar].battles.map((battle, bIdx) => (
                                <div key={bIdx} className="relative group">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-md border-2 border-slate-900 z-10">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div className="body-handwritten">
                                            <h4 className="text-2xl font-bold">{battle.title}</h4>
                                            <p className="text-xl text-slate-600 mb-1 italic">Treaty: <span className="marker-yellow text-slate-800">{battle.treaty}</span></p>
                                            <p className="text-lg opacity-80">{battle.note}</p>
                                        </div>
                                    </div>
                                    {bIdx < wars[activeWar].battles.length - 1 && (
                                        <div className="absolute left-[23px] top-[48px] bottom-[-32px] w-1 bg-slate-900 opacity-10"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* SPECIFIC TREATMENT FOR SIKH WAR */}
                        {activeWar === 2 && (
                            <div className="mt-8 p-4 bg-white/50 border-2 border-dashed border-blue-300 rounded-xl space-y-2 body-handwritten text-sm">
                                <p>• <strong>Treaty of Amritsar (1809):</strong> Sutlej River fixed as boundary between EIC and Ranjit Singh.</p>
                                <p>• <strong>Treaty of Bhairowal (1846):</strong> Henry Lawrence becomes de facto ruler for minor Duleep Singh.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* SECTION 4: THE FRONTIER EXPANSION (NEW) */}
            <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NEPAL & AFGHANS */}
                <section className="bg-white p-8 paper-border border-4 border-slate-900 shadow-xl transform -rotate-1">
                    <h3 className="text-2xl font-['Permanent_Marker'] mb-6 flex items-center gap-2">
                        <Flag className="w-6 h-6" /> THE FRONTIER WARS
                    </h3>
                    <div className="space-y-6 body-handwritten text-lg leading-snug">
                        <div className="border-l-4 border-red-800 pl-4 py-1">
                            <p className="font-bold">Nepal (1814-16):</p>
                            <p className="text-sm">Treaty of Sagauli. Gained hill stations: <strong>Shimla, Mussoorie, Nainital</strong>.</p>
                        </div>
                        <div className="border-l-4 border-blue-800 pl-4 py-1">
                            <p className="font-bold">Afghanistan (The Fiasco):</p>
                            <p className="text-sm">First War (1839-42) - Total disaster. Tripartite Treaty (1838) with Ranjit Singh & Shah Shuja.</p>
                        </div>
                        <div className="border-l-4 border-purple-800 pl-4 py-1">
                            <p className="font-bold">Tibet (1904):</p>
                            <p className="text-sm">Lord Curzon's mission under <strong>Younghusband</strong>. Reached Lhasa to check Russians.</p>
                        </div>
                    </div>
                </section>

                {/* SINDH & BURMA */}
                <section className="bg-white p-8 paper-border border-4 border-slate-900 shadow-xl transform rotate-1">
                    <h3 className="text-2xl font-['Permanent_Marker'] mb-6 flex items-center gap-2">
                        <Compass className="w-6 h-6" /> THE EXPANSION GAPS
                    </h3>
                    <div className="space-y-4 body-handwritten">
                        <div className="bg-stone-50 p-4 rounded border-2 border-dashed">
                            <h4 className="font-bold mb-1">Conquest of Sindh (1843)</h4>
                            <p className="text-sm italic">"A humane piece of rascality" — Charles Napier.</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded border-2 border-dashed">
                            <h4 className="font-bold mb-1">Lower Burma (1852)</h4>
                            <p className="text-sm">Dalhousie annexed Pegu for <strong>Teak Timber</strong>.</p>
                        </div>
                        <Card className="bg-yellow-50/50 p-4 border-yellow-200">
                            <p className="text-xs font-bold uppercase mb-2">Bentinck's Annexations (The Liberal Exception):</p>
                            <ul className="text-xs space-y-1">
                                <li>• Cachar (1832)</li>
                                <li>• Coorg (1834) - Cruelty of Raja</li>
                                <li>• Jaintia (1835)</li>
                            </ul>
                        </Card>
                    </div>
                </section>
            </div>

            {/* FOOTER: POLICY EVOLUTION */}
            <footer className="max-w-5xl mx-auto pb-20 text-center">
                <div className="bg-slate-900 text-slate-100 p-8 rounded-[50px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500"></div>
                    <h4 className="text-2xl font-['Permanent_Marker'] mb-8 text-slate-400">PHASES OF BRITISH POLICY</h4>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-xs font-['Permanent_Marker'] uppercase">
                        <div className="px-4 py-2 border border-slate-700 rounded-full">Equality (1740-65)</div>
                        <div className="px-4 py-2 border border-slate-700 rounded-full bg-red-900/20">Ring Fence (1765-1813)</div>
                        <div className="px-4 py-2 border border-slate-700 rounded-full bg-red-900/50">Subordinate Isolation (1813-57)</div>
                    </div>
                    <p className="mt-8 text-slate-500 italic body-handwritten">--- Case File Concluded: The Empire is Set ---</p>
                </div>

                <div className="mt-12 opacity-30">
                    <Quote className="w-8 h-8 mx-auto" />
                    <p className="text-[10px] uppercase font-bold tracking-[0.5em] mt-4">Vellore Mutiny Warning (1806)</p>
                </div>
            </footer>
        </div>
    );
}
