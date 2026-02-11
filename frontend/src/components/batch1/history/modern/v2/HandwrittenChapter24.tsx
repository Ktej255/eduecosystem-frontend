"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Anchor,
    Users,
    Vote,
    Gavel,
    Scroll,
    Flame,
    Sword
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter24() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-blue-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Black+Ops+One&display=swap');
                
                .parchment-texture {
                    background-color: #f0f4c3;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .military-font { font-family: 'Black Ops One', cursive; }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="bg-white/60 backdrop-blur border-b-4 border-blue-900 pb-6 px-4">
                    <div className="flex justify-between items-end mb-2 text-blue-900/50 military-font text-4xl select-none">
                        <span>1945</span>
                        <span>1946</span>
                    </div>
                    <h1 className="military-font text-5xl md:text-7xl font-bold uppercase tracking-tighter text-blue-900 mb-2">
                        THE EDGE OF FREEDOM
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-sm font-bold uppercase tracking-widest text-black hand-font">
                        <Badge className="bg-red-700 hover:bg-red-800">INA Trials</Badge>
                        <Badge className="bg-blue-700 hover:bg-blue-800">RIN Mutiny</Badge>
                        <Badge className="bg-green-700 hover:bg-green-800">Cabinet Mission</Badge>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20 mt-8">

                {/* LEFT COLUMN: THE UPRISING */}
                <div className="space-y-10">

                    {/* INA TRIALS */}
                    <div className="bg-white p-6 shadow-xl border-t-8 border-red-700 relative">
                        <div className="absolute top-0 right-0 bg-red-700 text-white px-3 py-1 text-xs font-bold font-mono">RED FORT, NOV 1945</div>
                        <h2 className="marker-font text-2xl text-red-800 mb-4 flex items-center gap-2">
                            <Gavel className="w-6 h-6" /> The INA Trials
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <p className="leading-relaxed">
                                The British made a huge mistake. By putting the INA officers on public trial, they turned them into <span className="text-red-600 font-bold bg-yellow-100 px-1">National Heroes</span>.
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-center text-sm font-bold bg-gray-100 p-3 rounded">
                                <div className="text-red-900">Prem Sehgal<br />(Hindu)</div>
                                <div className="text-green-900">Shah Nawaz<br />(Muslim)</div>
                                <div className="text-blue-900">Gurbaksh Dhillon<br />(Sikh)</div>
                            </div>

                            <div className="bg-blue-50 p-3 border-l-4 border-blue-500 text-sm">
                                <strong>Defense Team:</strong> Bhulabhai Desai, T.B. Sapru, Nehru (wore a lawyer's gown after 25 years!), K.N. Katju.
                            </div>

                            <p className="scribble-font text-2xl text-center text-gray-500 mt-2">
                                "Lal Qile Se Aayi Awaaz—Sehgal, Dhillon, Shah Nawaz!"
                            </p>
                        </div>
                    </div>

                    {/* RIN MUTINY */}
                    <div className="bg-blue-900 text-white p-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="military-font text-3xl text-blue-200 mb-4 flex items-center gap-2 z-10 relative">
                            <Anchor className="w-8 h-8" /> RIN MUTINY (1946)
                        </h2>

                        <div className="relative z-10 hand-font space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/20 p-2 rounded text-center min-w-[60px]">
                                    <div className="text-2xl font-bold">18</div>
                                    <div className="text-xs uppercase">Feb</div>
                                </div>
                                <div>
                                    <strong className="text-xl text-yellow-400">HMIS Talwar</strong>
                                    <p className="text-sm text-blue-100">Ratings protested against bad food & racial abuse (B.C. Dutt wrote 'Quit India' on ship). Spread to 78 ships!</p>
                                </div>
                            </div>

                            <div className="bg-red-600/20 p-3 border border-red-500/50 rounded">
                                <p className="text-sm">
                                    <strong>The Flag Unity:</strong> Congress, League, and Communist flags were tied together on the masts.
                                </p>
                            </div>

                            <div className="text-xs opacity-75 italic text-right">
                                "Last nail in the British coffin." - Historians
                            </div>
                        </div>
                    </div>

                    {/* ELECTIONS 1946 */}
                    <div className="bg-green-50 p-6 border-2 border-green-800 border-dashed">
                        <h2 className="marker-font text-2xl text-green-900 mb-2 flex items-center gap-2">
                            <Vote className="w-6 h-6" /> The Mandate (1946)
                        </h2>
                        <ul className="hand-font text-lg list-disc pl-5 space-y-2">
                            <li><strong>Congress:</strong> Swept General seats (91%).</li>
                            <li><strong>Muslim League:</strong> Swept Muslim seats (86%). Secured 442/509 Muslim seats in provinces.</li>
                            <li><span className="font-bold bg-yellow-200">The Verdict:</span> Polarization was complete. Partition looked inevitable.</li>
                        </ul>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE PLANS */}
                <div className="space-y-10">

                    {/* CABINET MISSION */}
                    <div className="bg-[#fff8e1] p-2 shadow-2xl skew-y-1">
                        <div className="border-4 border-black p-4 bg-white h-full">
                            <h2 className="marker-font text-3xl text-center mb-6 uppercase border-b-2 border-black pb-2">Cabinet Mission (May 1946)</h2>

                            <div className="hand-font space-y-5">
                                <div className="flex justify-center gap-2 text-xs font-mono bg-gray-100 py-2">
                                    <span>Pethick Lawrence</span> | <span>Stafford Cripps</span> | <span>A.V. Alexander</span>
                                </div>

                                <div className="bg-red-50 p-3 text-center border border-red-200">
                                    <strong className="text-red-900 block text-lg">PAKISTAN REJECTED</strong>
                                    <span className="text-xs">Reason: Administrative/Economic complexity.</span>
                                </div>

                                <div className="space-y-2">
                                    <strong className="block text-xl">The Plan:</strong>
                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                        <li><strong>Weak Center:</strong> Only Defense, Foreign Affairs, Comms.</li>
                                        <li><strong>Grouping:</strong>
                                            <ul className="list-[circle] pl-4 text-gray-600">
                                                <li>Group A: Hindu Maj (Madras, UP, Bihar etc)</li>
                                                <li>Group B: Muslim Maj (NW - Punjab, Sind)</li>
                                                <li>Group C: Muslim Maj (NE - Bengal, Assam)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-yellow-100 p-2 text-sm italic">
                                    <strong>The Failure:</strong> Congress & League interpreted the "Grouping Clause" differently. It collapsed.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DIRECT ACTION DAY */}
                    <div className="relative group p-6 bg-black text-gray-300 border-l-8 border-red-600">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-20"></div>
                        <h2 className="marker-font text-2xl text-white mb-2 z-10 relative">
                            DIRECT ACTION DAY
                        </h2>
                        <div className="badge absolute top-4 right-4 bg-red-600 text-white font-bold px-2 py-1 z-10">Aug 16, 1946</div>

                        <div className="hand-font text-lg z-10 relative space-y-3">
                            <p>"Leke Rahenge Pakistan."</p>
                            <p className="text-white font-bold text-xl">Great Calcutta Killings.</p>
                            <p className="text-sm text-gray-400"> Communal riots spread to Noakhali (Gandhi went there barefoot) and Bihar.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
