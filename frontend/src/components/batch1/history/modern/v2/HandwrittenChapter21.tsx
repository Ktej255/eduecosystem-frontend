"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Sword,
    Anchor,
    Scale,
    Skull,
    Flag,
    Ship,
    Users,
    MapPin,
    AlertTriangle,
    Mic2,
    Plane,
    Target
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter21() {
    return (
        <div className="min-h-screen bg-[#2d3436] font-sans text-gray-100 selection:bg-orange-500 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Condensed:wght@400;700&family=Special+Elite&display=swap');
                
                .camo-texture {
                    background-color: #556B2F;
                    background-image: url("https://www.transparenttextures.com/patterns/army-camo.png");
                }

                .navy-texture {
                    background-color: #000080;
                    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
                }

                .red-fort-texture {
                    background-color: #B22222;
                    background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
                }

                .stencil-font { font-family: 'Black Ops One', cursive; }
                .legal-font { font-family: 'Roboto Condensed', sans-serif; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .split-screen {
                    display: grid;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 1024px) {
                    .split-screen {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .tiger-emblem {
                    filter: drop-shadow(0 0 10px rgba(255,165,0,0.5));
                }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full lg:w-1/2 h-1/2 lg:h-full camo-texture z-0 pointer-events-none opacity-80"></div>
            <div className="fixed bottom-0 left-0 lg:top-0 lg:left-1/2 w-full lg:w-1/2 h-1/2 lg:h-full navy-texture z-0 pointer-events-none opacity-80"></div>

            {/* HEADER (CENTERED RED FORT) */}
            <header className="relative z-20 max-w-4xl mx-auto pt-10 pb-6 text-center">
                <div className="bg-[#B22222] border-4 border-yellow-500 p-6 shadow-2xl skew-x-[-10deg] inline-block">
                    <div className="skew-x-[10deg]">
                        <div className="flex justify-center items-center gap-4 mb-2 opacity-80">
                            <Sword className="w-8 h-8 text-yellow-400" />
                            <span className="stencil-font text-2xl text-yellow-400">1943 - 1946</span>
                            <Anchor className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="stencil-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-white drop-shadow-lg mb-2">
                            THE SWORD REBELS
                        </h1>
                        <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-black bg-yellow-400 px-4 py-1">
                            <span>INA (Netaji)</span>
                            <span>•</span>
                            <span>Red Fort Trials</span>
                            <span>•</span>
                            <span>RIN Mutiny</span>
                        </div>
                        <p className="text-[10px] text-white mt-1 italic opacity-80">"Paramount Impact" - Clement Attlee</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE JUNGLE (INA) */}
                <div className="space-y-10">

                    {/* ORIGINS & NETAJI */}
                    <div className="bg-[#4b5320] border-l-4 border-orange-500 p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
                        <h3 className="stencil-font text-3xl font-bold mb-4 text-orange-400 flex items-center gap-2">
                            <Target className="w-6 h-6" /> AZAD HIND FAUJ
                        </h3>

                        <div className="space-y-4 text-sm text-gray-200">
                            <div className="bg-black/30 p-3 rounded">
                                <strong className="block text-orange-300 mb-1 uppercase text-xs">The Origins</strong>
                                <ul className="list-disc ml-4 text-xs space-y-1">
                                    <li><strong>Tokyo Conf (Mar '42):</strong> Rash Behari Bose founds IIL.</li>
                                    <li><strong>Bangkok Conf (June '42):</strong> Invites Subhash Bose.</li>
                                    <li><strong>Mohan Singh:</strong> First INA (Collapsed).</li>
                                </ul>
                            </div>

                            <div className="border border-orange-500/30 p-3 relative">
                                <Badge className="absolute -top-3 right-2 bg-orange-600">Netaji Arrives</Badge>
                                <strong className="block text-xl text-white mb-2 stencil-font">PROVISIONAL GOVT (1943)</strong>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div><strong>PM/War:</strong> Netaji</div>
                                    <div><strong>Women:</strong> Lakshmi Sahgal</div>
                                    <div><strong>Advisor:</strong> Rash Behari</div>
                                    <div><strong>Propaganda:</strong> S.A. Ayer</div>
                                </div>
                                <div className="mt-2 text-xs italic bg-white/10 p-2 text-center">
                                    "Chalo Delhi" (Given at Padang, Singapore).
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs bg-black/40 p-2">
                                <span><strong>Regiments:</strong> Gandhi, Nehru, Azad.</span>
                                <span className="text-orange-300">Rani of Jhansi (Lakshmi / Janaki Thevar)</span>
                            </div>

                            <div className="text-[10px] opacity-70 text-center">
                                <strong>Free India Legion (Germany):</strong> "Jai Hind" coined here by Abid Hasan.
                            </div>
                        </div>
                    </div>

                    {/* THE CAMPAIGN & END */}
                    <div className="bg-[#3e4a25] p-6 border-t-4 border-white relative">
                        <h3 className="stencil-font text-2xl font-bold mb-3 text-white">THE CAMPAIGN</h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-red-500" />
                                <div>
                                    <strong className="block text-white text-sm">Moirang (Manipur)</strong>
                                    April 14, 1944. <strong>Col. Shaukat Malik</strong> hoists Tricolor on mainland.
                                </div>
                            </div>

                            <div className="bg-white/5 p-2 flex gap-4">
                                <div className="flex-1">
                                    <strong className="block text-green-300">Andaman</strong>
                                    Renamed <em>Shaheed</em>
                                </div>
                                <div className="flex-1">
                                    <strong className="block text-green-300">Nicobar</strong>
                                    Renamed <em>Swaraj</em>
                                </div>
                            </div>

                            <div className="bg-red-900/40 border border-red-500/50 p-3 mt-4 flex items-center gap-3">
                                <Plane className="w-6 h-6 text-red-400 transform rotate-45" />
                                <div>
                                    <strong className="block text-red-400">The End (Aug 18, 1945)</strong>
                                    Taipei Air Crash. (Taihokku Airport).
                                    <br /><span className="text-[10px] opacity-70">Ashes at Renkoji Temple.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RED FORT TRIALS */}
                    <div className="bg-[#800000] p-6 text-white shadow-2xl transform rotate-1 border-4 border-double border-yellow-500">
                        <h3 className="legal-font text-3xl font-bold mb-4 uppercase text-center border-b border-white/20 pb-2">
                            The Red Fort Trials (Nov 1945)
                        </h3>

                        <div className="text-center mb-4">
                            <div className="inline-flex gap-4 text-sm font-bold bg-black/30 px-4 py-2 rounded-full border border-yellow-500/50">
                                <span className="text-orange-400">Sahgal (Hindu)</span>
                                <span className="text-green-400">Shah Nawaz (Muslim)</span>
                                <span className="text-blue-400">Dhillon (Sikh)</span>
                            </div>
                            <p className="text-xs mt-2 italic opacity-80">"Lal Qile se aayi aawaz..."</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs text-left">
                            <div className="bg-white/10 p-2 border-l-2 border-white">
                                <strong className="block mb-1">Defense Team</strong>
                                Bhulabhai Desai, T.B. Sapru, <strong>Nehru</strong> (Donned gown after 25 years).
                            </div>
                            <div className="bg-white/10 p-2 border-l-2 border-white">
                                <strong className="block mb-1">Verdict</strong>
                                Guilty, but sentence <strong>remitted</strong> by Auchinleck due to public rage.
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE SEA (RIN MUTINY) */}
                <div className="space-y-10">

                    {/* RIN MUTINY HEADER */}
                    <div className="bg-[#000066] p-6 border-r-4 border-cyan-400 shadow-xl relative">
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 className="stencil-font text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
                            <Anchor className="w-6 h-6" /> NAVAL MUTINY (1946)
                        </h3>

                        <div className="space-y-4 text-sm text-gray-200">
                            <div className="bg-cyan-900/30 p-3 rounded border border-cyan-500/30">
                                <strong className="block text-cyan-300 mb-1">The Spark (Feb 18, HMIS Talwar)</strong>
                                <strong>B.C. Dutt</strong> arrested for scrawling "Quit India".
                                <br />Trigger: Bad Food ("Dal with stones") & Racial Abuse.
                            </div>

                            <div className="flex gap-2 text-xs">
                                <div className="bg-white/10 p-2 flex-1">
                                    <strong className="block text-cyan-200">NCSC President</strong>
                                    M.S. Khan (Muslim)
                                </div>
                                <div className="bg-white/10 p-2 flex-1">
                                    <strong className="block text-cyan-200">Vice-President</strong>
                                    Madan Singh (Sikh)
                                </div>
                            </div>

                            <div className="bg-black/50 p-3 text-center border-t border-cyan-500/50">
                                <strong className="block text-white text-xs mb-1 uppercase">The Three Flags</strong>
                                Congress + League + Communist
                                <br /><span className="text-[10px] italic opacity-60">Hoisted together on ship masts.</span>
                            </div>
                        </div>
                    </div>

                    {/* WIDER REVOLT & SUPPORT */}
                    <div className="bg-[#0a3d62] p-6 relative">
                        <Badge className="absolute -top-3 left-4 bg-red-600">Total Collapse</Badge>

                        <div className="space-y-3 text-xs text-white">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span><strong>Rashid Ali Day</strong> (Feb 11, Calcutta)</span>
                                <span className="text-right opacity-70">Student Protests<br />Precursor to Mutiny</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span><strong>Civilian Bloodbath</strong> (Bombay)</span>
                                <span className="text-right text-red-400 font-bold">228 Killed<br />Support for Sailors</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span><strong>Wider Revolt</strong></span>
                                <span className="text-right opacity-70">RIAF Strikes (Jan)<br />Jabalpur Army Mutiny (Feb)</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 text-[10px] text-center italic">
                            "We surrender to India, not to Britain." - Mutineers (Persuaded by Patel/Jinnah).
                        </div>
                    </div>

                    {/* THE IMPACT */}
                    <div className="bg-gray-200 text-gray-900 p-6 transform -rotate-1 shadow-lg">
                        <h3 className="handwritten-font text-2xl font-bold mb-2 uppercase">Why They Left?</h3>
                        <p className="text-sm font-serif mb-3">
                            Attlee's admission on the role of INA & Mutiny:
                        </p>
                        <div className="text-4xl font-bold text-center text-red-800 stencil-font tracking-widest border-y-2 border-black py-2">
                            PARAMOUNT
                        </div>
                        <p className="text-xs text-center mt-2 opacity-70">
                            "We can no longer rely on the Indian Army to hold India." - Auchinleck
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

