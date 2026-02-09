"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Zap,
    XCircle,
    Target,
    AlertTriangle,
    Mic2,
    Gavel,
    ShieldAlert,
    Anchor,
    Feather,
    Users,
    Flag,
    BookOpen
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter10() {
    const [splitSide, setSplitSide] = useState<'moderates' | 'extremists' | null>(null);

    return (
        <div className="min-h-screen bg-[#f5e6d3] p-4 md:p-8 font-['Roboto_Slab',_serif] text-[#1a1a1a] selection:bg-red-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Stardos+Stencil:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap');
                
                .stencil-font {
                    font-family: 'Black Ops One', cursive;
                }
                
                .header-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .torn-paper {
                    background-color: #fff;
                    position: relative;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.1);
                }
                
                .torn-paper::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 100%;
                    height: 20px;
                    background: radial-gradient(circle, transparent 70%, #fff 70%) 0 0,
                                radial-gradient(circle, transparent 70%, #fff 70%) 10px 10px;
                    background-size: 20px 20px;
                    transform: rotate(180deg);
                }

                .burn-mark {
                    background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%);
                }
            `}</style>

            {/* HEADER: THE BURNING FUSE */}
            <header className="max-w-6xl mx-auto mb-16 text-center border-b-8 border-red-800 pb-8 relative pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Flame className="w-24 h-24 text-orange-600 animate-pulse fill-orange-500" />
                </div>
                <h2 className="stencil-font text-2xl md:text-3xl tracking-widest uppercase mb-2 text-red-800 animate-bounce">The Bonfire of 1905</h2>
                <h1 className="header-font text-5xl md:text-8xl font-bold mb-6 uppercase tracking-tighter">
                    SWADESHI & BOYCOTT
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-slate-800">
                    "Thunder & Lightning: The Era of Militant Nationalism"
                </p>

                {/* TIMELINE OF FIRE */}
                <div className="mt-12 overflow-x-auto pb-4">
                    <div className="flex justify-center items-center min-w-[600px] gap-2 text-xs md:text-sm font-bold">
                        <div className="bg-slate-300 px-3 py-2 rounded shadow">
                            <span className="block text-slate-500 text-[10px] uppercase">July 1905</span>
                            Partition Announced
                        </div>
                        <div className="h-1 w-8 bg-red-400"></div>
                        <div className="bg-red-600 text-white px-3 py-2 rounded shadow-lg transform scale-110">
                            <span className="block text-red-200 text-[10px] uppercase">Oct 16, 1905</span>
                            Day of Mourning
                        </div>
                        <div className="h-1 w-8 bg-red-400"></div>
                        <div className="bg-slate-300 px-3 py-2 rounded shadow">
                            <span className="block text-slate-500 text-[10px] uppercase">Dec 1906</span>
                            Calcutta Session
                        </div>
                        <div className="h-1 w-8 bg-red-400"></div>
                        <div className="bg-black text-white px-3 py-2 rounded shadow">
                            <span className="block text-gray-400 text-[10px] uppercase">Dec 1907</span>
                            Surat Split
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: CAUSE & METHOD */}
                <div className="lg:col-span-4 space-y-8">

                    {/* TRIGGER CARD */}
                    <div className="torn-paper bg-red-50 p-6">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-red-800 pb-2">THE TRIGGER</h3>
                        <div className="mb-4">
                            <div className="text-sm font-bold uppercase text-red-800 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> The Villain: Lord Curzon
                            </div>
                            <p className="text-sm italic mt-1">"Bengal united is a power; Bengal divided will pull in different ways."</p>
                        </div>
                        <ul className="text-sm space-y-3">
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-600 mt-0.5" />
                                <span><strong>Official Reason:</strong> "Administrative Convenience."</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-red-600 mt-0.5" />
                                <span><strong>Real Reason:</strong> To split the nationalist nerve center (West Bengal: Hindu, East Bengal: Muslim).</span>
                            </li>
                        </ul>
                        <div className="mt-4 bg-black text-white p-3 text-center rounded">
                            <div className="font-bold uppercase text-sm">Oct 16, 1905</div>
                            <div className="text-xs">Raksha Bandhan & Mass Fasting</div>
                        </div>
                    </div>

                    {/* METHODS CARD */}
                    <div className="torn-paper bg-orange-50 p-6">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-orange-500 pb-2">THE METHODS</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                            <div className="p-2 border border-orange-300 bg-white shadow-sm">
                                <Flame className="w-6 h-6 text-orange-600 mb-1" />
                                <strong>Bonfires:</strong> Burning Manchester cloth.
                            </div>
                            <div className="p-2 border border-orange-300 bg-white shadow-sm">
                                <Feather className="w-6 h-6 text-orange-600 mb-1" />
                                <strong>Swadeshi:</strong> Indigenous soap, salt, banks.
                            </div>
                            <div className="p-2 border border-orange-300 bg-white shadow-sm">
                                <XCircle className="w-6 h-6 text-orange-600 mb-1" />
                                <strong>Boycott:</strong> Social boycott of foreign goods.
                            </div>
                            <div className="p-2 border border-orange-300 bg-white shadow-sm">
                                <BookOpen className="w-6 h-6 text-orange-600 mb-1" />
                                <strong>Education:</strong> National Council (1906).
                            </div>
                        </div>

                        <div className="bg-white p-3 border-l-4 border-green-600 text-xs shadow-sm">
                            <strong className="block mb-1 text-green-800 uppercase">Constructive Swadeshi</strong>
                            <ul className="space-y-1">
                                <li>🏭 <strong>Industry:</strong> Bengal Chemicals (P.C. Ray).</li>
                                <li>🚢 <strong>Navigation:</strong> Swadeshi Steam Nav. Co. (V.O.C. Pillai).</li>
                                <li>🎨 <strong>Art:</strong> <em>Bharat Mata</em> (Abanindranath Tagore).</li>
                            </ul>
                        </div>
                    </div>

                    {/* ORGANIZATION CARD */}
                    <div className="torn-paper p-6 bg-white">
                        <h3 className="header-font text-xl font-bold mb-3">Organizational Muscle</h3>
                        <div className="space-y-3 text-sm">
                            <p><strong>Samitis (Volunteer Corps):</strong> The backbone of mass mobilization.</p>
                            <div className="bg-slate-100 p-3 border border-slate-300 rounded relative overflow-hidden">
                                <div className="font-bold text-slate-800">Swadesh Bandhab Samiti</div>
                                <div className="text-xs italic">Barisal • Ashwini Kumar Dutta</div>
                                <div className="text-[10px] mt-1 text-slate-600">Reached 159 branches deep in villages.</div>
                            </div>
                            <div className="bg-slate-100 p-3 border border-slate-300 rounded">
                                <div className="font-bold text-slate-800">Dawn Society (1902)</div>
                                <div className="text-xs italic">Satish Chandra Mukherjee</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN: LEADERS & SPLIT */}
                <div className="lg:col-span-5 space-y-8">

                    {/* LAL-BAL-PAL SECTION */}
                    <div className="torn-paper p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="w-40 h-40" />
                        </div>
                        <div className="text-center mb-8">
                            <h2 className="stencil-font text-5xl text-red-800 mb-1">LAL - BAL - PAL</h2>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">The Triumvirate of Unrest</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start border-l-4 border-red-600 pl-4 bg-red-50 p-3 rounded-r-lg">
                                <div className="text-3xl">🦁</div>
                                <div>
                                    <h4 className="font-bold text-lg">Bal Gangadhar Tilak</h4>
                                    <p className="text-xs font-bold text-red-800 mb-1">MAHARASHTRA</p>
                                    <p className="text-sm italic">"Swaraj is my birthright and I shall have it."</p>
                                    <p className="text-xs mt-1 text-slate-600">Tools: Ganpati/Shivaji Festivals, <em>Kesari</em>.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start border-l-4 border-blue-600 pl-4 bg-blue-50 p-3 rounded-r-lg">
                                <div className="text-3xl">🐯</div>
                                <div>
                                    <h4 className="font-bold text-lg">Bipin Chandra Pal</h4>
                                    <p className="text-xs font-bold text-blue-800 mb-1">BENGAL</p>
                                    <p className="text-sm italic">Prophet of "Passive Resistance".</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start border-l-4 border-green-600 pl-4 bg-green-50 p-3 rounded-r-lg">
                                <div className="text-3xl">🦅</div>
                                <div>
                                    <h4 className="font-bold text-lg">Lala Lajpat Rai</h4>
                                    <p className="text-xs font-bold text-green-800 mb-1">PUNJAB</p>
                                    <div className="text-xs bg-white p-2 border border-green-200 mt-1 rounded">
                                        <strong>Punjab Agitation:</strong> With <strong>Ajit Singh</strong> (Uncle of Bhagat Singh).<br />
                                        <em>Movement:</em> "Pagri Sambhal Jatta".
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start border-l-4 border-purple-600 pl-4 bg-purple-50 p-3 rounded-r-lg">
                                <div className="text-3xl">🧠</div>
                                <div>
                                    <h4 className="font-bold text-lg">Aurobindo Ghosh</h4>
                                    <p className="text-xs font-bold text-purple-800 mb-1">THE PHILOSOPHER</p>
                                    <p className="text-sm italic">"Make administration impossible."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SURAT SPLIT INTERACTIVE */}
                    <div className="torn-paper bg-slate-100 border-2 border-dashed border-slate-600 p-6 text-center group hover:bg-slate-200 transition-colors cursor-pointer"
                        onClick={() => setSplitSide(prev => prev === 'moderates' ? 'extremists' : 'moderates')}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-yellow-600 fill-yellow-500 animate-pulse" />
                            <h3 className="stencil-font text-3xl uppercase text-slate-800">The Surat Split (1907)</h3>
                            <Zap className="w-8 h-8 text-yellow-600 fill-yellow-500 animate-pulse" />
                        </div>
                        <p className="text-xs text-slate-500 mb-6 bg-white inline-block px-2 py-1 rounded">Tap to see the clash details</p>

                        <div className="grid grid-cols-2 gap-4 text-left">
                            <motion.div
                                className={`p-4 bg-white border-l-4 border-blue-800 shadow-sm ${splitSide === 'extremists' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'moderates' ? 1.05 : 1 }}
                            >
                                <strong className="text-blue-800 block mb-2">MODERATES</strong>
                                <ul className="text-xs space-y-1">
                                    <li><strong>Candidate:</strong> Rash Behari Ghosh</li>
                                    <li><strong>Goal:</strong> Limit Swadeshi to Bengal.</li>
                                    <li><strong>Method:</strong> Constitutional.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className={`p-4 bg-white border-l-4 border-red-800 shadow-sm ${splitSide === 'moderates' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'extremists' ? 1.05 : 1 }}
                            >
                                <strong className="text-red-800 block mb-2">EXTREMISTS</strong>
                                <ul className="text-xs space-y-1">
                                    <li><strong>Candidate:</strong> Tilak / Lajpat Rai</li>
                                    <li><strong>Goal:</strong> Extend Swadeshi to India.</li>
                                    <li><strong>Method:</strong> Passive Resistance.</li>
                                </ul>
                            </motion.div>
                        </div>

                        <div className="mt-6 bg-black text-white p-2 text-xs font-bold uppercase tracking-widest">
                            Result: Shoes Thrown. Extremists Expelled.
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SHIFTS & TRANSITIONS */}
                <div className="lg:col-span-3 space-y-8">

                    {/* POLITICAL SHIFTS */}
                    <div className="torn-paper bg-yellow-50 p-6">
                        <h3 className="header-font text-2xl font-bold mb-4">Political Current</h3>

                        <div className="mb-4 border-b border-yellow-300 pb-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Flag className="w-4 h-4 text-blue-800" />
                                <h4 className="font-bold text-sm">Calcutta Session (1906)</h4>
                            </div>
                            <p className="text-xs text-slate-700">Dadabhai Naoroji declares <strong>"SWARAJ"</strong> as the goal for the first time.</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldAlert className="w-4 h-4 text-green-800" />
                                <h4 className="font-bold text-sm text-green-800">Muslim League (1906)</h4>
                            </div>
                            <p className="text-xs text-slate-700">Founded in Dacca by <strong>Nawab Salimullah</strong> & Aga Khan.</p>
                            <p className="text-[10px] italic mt-1 text-slate-500">Goal: Loyalty to British. Seeds of separatism.</p>
                        </div>
                    </div>

                    {/* NUANCE & EXCEPTIONS */}
                    <div className="torn-paper bg-white border border-slate-200 p-6">
                        <h3 className="header-font text-xl font-bold mb-3 text-slate-700">The Nuance</h3>
                        <p className="text-xs mb-3 text-slate-600">
                            <strong>The Gap:</strong> Muslim peasantry generally stayed away due to British propaganda ("Hindu Landlord dominance").
                        </p>
                        <div className="bg-green-50 p-3 border border-green-200 text-xs rounded">
                            <strong className="block mb-1 text-green-900">BUT - The Exceptions:</strong>
                            <ul className="list-disc ml-4 space-y-1">
                                <li><strong>Liyaqat Hussain:</strong> Patna leader.</li>
                                <li><strong>Maulana Azad:</strong> Joined revolutionaries.</li>
                                <li><strong>Abdul Halim Guznavi:</strong> Zamindar.</li>
                            </ul>
                        </div>
                    </div>

                    {/* IRON HAND & TERRORISM */}
                    <div className="torn-paper bg-slate-900 text-slate-100 p-6">
                        <h3 className="header-font text-2xl font-bold mb-4 text-red-500">The Iron Hand</h3>
                        <ul className="text-xs list-disc ml-4 space-y-2 mb-6 text-slate-300">
                            <li><strong>Seditious Meetings Act (1907)</strong></li>
                            <li><strong>Carlyle Circular:</strong> Threatened students.</li>
                            <li><strong>Tilak's Trial (1908):</strong> 6 years in Mandalay.</li>
                        </ul>

                        <div className="border-t border-slate-700 pt-4">
                            <h4 className="stencil-font text-lg mb-2 text-yellow-500">Shift to Terrorism</h4>
                            <p className="text-xs italic mb-2">"Force must be stopped by force."</p>
                            <div className="text-xs font-mono bg-slate-800 p-2 rounded text-green-400">
                                Journals: Yugantar, Sandhya, Kal
                            </div>
                        </div>
                    </div>

                    {/* FOLK REVIVAL */}
                    <div className="torn-paper bg-pink-50 p-4 text-center">
                        <BookOpen className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                        <p className="text-xs font-bold text-pink-900">Thakurmar Jhuli</p>
                        <p className="text-[10px] text-pink-700">Folk tales revived by D.M. Majumdar.</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
