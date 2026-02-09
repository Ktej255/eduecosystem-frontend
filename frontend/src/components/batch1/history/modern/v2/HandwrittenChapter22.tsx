"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scroll,
    Sword,
    Skull,
    Users,
    Gavel,
    AlertTriangle,
    FileText,
    Map as MapIcon,
    Flame,
    Briefcase
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter22() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-red-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Rock+Salt&family=Special+Elite&display=swap');
                
                .parchment-texture {
                    background-color: #F5F5DC;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .blood-texture {
                    background-image: radial-gradient(circle, #800000 10%, transparent 10%), radial-gradient(circle, #800000 10%, transparent 10%);
                    background-size: 50px 50px;
                    background-position: 0 0, 25px 25px;
                    opacity: 0.1;
                }

                .legal-font { font-family: 'Playfair Display', serif; }
                .riot-font { font-family: 'Rock Salt', cursive; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .ink-stain {
                    mask-image: url("https://www.transparenttextures.com/patterns/black-ink.png");
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>
            <div className="fixed bottom-0 w-full h-1/3 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="border-y-4 border-double border-gray-800 py-6 bg-white/50 backdrop-blur-sm">
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Scroll className="w-8 h-8 text-gray-700" />
                        <span className="legal-font text-xl tracking-widest uppercase">1946</span>
                        <Sword className="w-8 h-8 text-red-700" />
                    </div>
                    <h1 className="legal-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-black mb-2">
                        THE COLLAPSE
                    </h1>
                    <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-red-800">
                        <span>Cabinet Mission</span>
                        <span>•</span>
                        <span>Direct Action</span>
                        <span>•</span>
                        <span>Interim Govt</span>
                    </div>
                    <p className="text-xs mt-2 italic font-serif">"We bid goodbye to constitutional methods." - Jinnah</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE PLAN & THE POLITICS */}
                <div className="space-y-10">

                    {/* CONTEXT & ELECTIONS */}
                    <div className="bg-gray-100 p-4 border border-gray-400 rotate-1 shadow-md">
                        <h3 className="handwritten-font text-lg font-bold mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-600" /> The Context (early 1946)
                        </h3>
                        <ul className="text-xs space-y-2 font-serif text-gray-800">
                            <li><strong>1946 Elections:</strong> Polarization complete. Congress (91% Gen), League (86% Muslim).</li>
                            <li><strong>RIAF Strikes (Jan):</strong> Air Force mutiny in Calcutta/Lahore.</li>
                            <li><strong>Congress Pres:</strong> Azad resigns (July). Nehru elected (invited to form Govt).</li>
                        </ul>
                    </div>

                    {/* CABINET MISSION */}
                    <div className="bg-[#fff8e1] p-6 border-4 border-double border-black shadow-xl relative">
                        <Badge className="absolute -top-3 right-4 bg-black text-white">May 16, 1946</Badge>
                        <h3 className="legal-font text-3xl font-bold mb-4 border-b border-black pb-2">
                            The Cabinet Mission
                        </h3>

                        <div className="space-y-4 text-sm font-serif">
                            <div className="flex justify-between text-xs italic opacity-80">
                                <span>Pethick-Lawrence</span>
                                <span>Stafford Cripps</span>
                                <span>A.V. Alexander</span>
                            </div>

                            <div className="bg-white border border-gray-300 p-3">
                                <strong className="block text-center uppercase text-xs mb-2">The Plan</strong>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li><strong>Union of India:</strong> Weak Center (Defense, Foreign, Comm).</li>
                                    <li><strong>Residuary Powers:</strong> To Provinces.</li>
                                    <li><strong>Pakistan:</strong> <span className="text-red-600 font-bold">REJECTED</span> (Viability issues).</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                <div className="bg-green-100 p-2 border border-green-300">
                                    <strong>Group A</strong><br />Hindu Maj<br />(Madras, UP, Bihar)
                                </div>
                                <div className="bg-green-100 p-2 border border-green-300">
                                    <strong>Group B</strong><br />Muslim Maj (NW)<br />(Punjab, Sind)
                                </div>
                                <div className="bg-green-100 p-2 border border-green-300">
                                    <strong>Group C</strong><br />Muslim Maj (NE)<br />(Bengal, Assam)
                                </div>
                            </div>

                            <div className="text-xs bg-red-50 p-2 text-red-800 border-l-2 border-red-500">
                                <strong>Resistance:</strong> Assam (Gopinath Bordoloi) refused Group C. Gandhi supported him: "If Assam falls, who stands?"
                            </div>
                        </div>
                    </div>

                    {/* INTERIM GOVERNMENT */}
                    <div className="bg-gray-200 p-6 border-t-4 border-gray-600 shadow-lg">
                        <h3 className="legal-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5" /> The Interim Govt (Sept '46)
                        </h3>

                        <div className="space-y-4 text-sm">
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><strong>PM/Ext:</strong> Nehru</div>
                                <div><strong>Home/Info:</strong> Patel</div>
                                <div><strong>Defense:</strong> Baldev Singh</div>
                                <div><strong>Ind:</strong> John Mathai</div>
                                <div><strong>Edu:</strong> Rajaji</div>
                                <div><strong>Labor:</strong> Jagjivan Ram</div>
                            </div>

                            <div className="bg-white p-3 border border-gray-400 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-bl-xl"></div>
                                <strong className="block text-green-800 text-xs uppercase mb-1">League Entry (Oct '46) - "Sabotage"</strong>
                                <ul className="text-xs space-y-1">
                                    <li><strong>Liaquat Ali Khan (Finance):</strong> "Poor Man's Budget" (Taxed Hindu industrialists). Paralyzed govt.</li>
                                    <li><strong>Jogendra Nath Mandal (Law):</strong> League nominee (Dalit). Jinnah's card against Congress.</li>
                                    <li><strong>"Tea Party Boycott":</strong> League refused informal meets.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE BLOOD & THE END */}
                <div className="space-y-10">

                    {/* DIRECT ACTION DAY */}
                    <div className="bg-white p-6 border-2 border-red-800 shadow-[0_0_15px_rgba(128,0,0,0.5)] relative rotate-1">
                        <div className="absolute top-0 left-0 w-full h-full blood-texture pointer-events-none"></div>
                        <h3 className="riot-font text-3xl text-red-700 mb-4 transform -rotate-2">
                            DIRECT ACTION DAY
                        </h3>

                        <div className="space-y-4 text-sm font-sans z-10 relative">
                            <div className="bg-black text-white p-2 text-center text-xs uppercase font-bold tracking-widest">
                                Aug 16, 1946 • "Leke Rahenge Pakistan"
                            </div>

                            <div className="border-l-4 border-red-600 pl-3">
                                <strong className="block text-red-900">The Horror</strong>
                                Great Calcutta Killings (Suhrawardy). 4000 dead in 72 hrs.
                            </div>

                            <div className="flex items-center gap-3 bg-red-50 p-2">
                                <Users className="w-8 h-8 text-gray-500" />
                                <div>
                                    <strong className="block text-gray-800 text-xs">Spread</strong>
                                    Noakhali (East Bengal) & Bihar (Retaliation).
                                    <br /><span className="text-red-600 text-xs font-bold">Bihar Police Strike (Mar '47)</span>
                                </div>
                            </div>

                            <div className="bg-white/80 p-2 border border-gray-300 italic text-xs">
                                <strong>Gandhi:</strong> Walking barefoot in Noakhali. "One Man Boundary Force" (Mountbatten).
                            </div>
                        </div>
                    </div>

                    {/* CONSTITUENT ASSEMBLY */}
                    <div className="bg-[#f0f0f0] p-6 border border-gray-400 relative">
                        <h3 className="legal-font text-2xl font-bold mb-3">Constituent Assembly</h3>

                        <div className="space-y-3 text-xs font-serif">
                            <div className="flex justify-between border-b border-gray-300 pb-2">
                                <span><strong>Dec 9, 1946:</strong> First Meeting</span>
                                <span className="text-red-600 font-bold">Boycotted by League</span>
                            </div>
                            <div className="bg-blue-50 p-2 border border-blue-200">
                                <strong className="block text-blue-900 mb-1">Objectives Resolution</strong>
                                Moved by Nehru (Dec 13). Adopted (Jan 22, 1947).
                                <br /><em>"Independent Sovereign Republic"</em>
                            </div>
                            <div className="text-gray-600">
                                <strong>Women:</strong> Hansa Mehta (Flag), Sarojini Naidu, Durgabai Deshmukh.
                            </div>
                        </div>
                    </div>

                    {/* BRITISH PANIC */}
                    <div className="bg-gray-800 text-gray-200 p-6 shadow-xl">
                        <h3 className="stencil-font text-xl mb-3 text-red-500">OPERATION MADHOUSE</h3>
                        <p className="text-xs mb-3 opacity-80">
                            Wavell's "Breakdown Plan". Withdraw province by province if civil war erupts.
                        </p>

                        <div className="bg-white/10 p-3 border-t border-white/20">
                            <h4 className="text-sm font-bold text-white mb-1">Attlee's Statement (Feb 20, 1947)</h4>
                            <p className="text-xs font-mono">
                                DEADLINE: June 1948.
                                <br />Mountbatten to replace Wavell.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

