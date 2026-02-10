"use client";

import React from 'react';
import {
    Newspaper,
    PenTool,
    Mic2,
    Lock,
    Unlock,
    AlertOctagon,
    Feather,
    History
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter24() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-gray-300 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Nanum+Pen+Script&family=Courier+Prime&display=swap');
                
                .newsprint-texture {
                    background-color: #f0f0eb;
                    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
                }

                .headline-font { font-family: 'Playfair Display', serif; }
                .script-font { font-family: 'Nanum Pen Script', cursive; }
                .print-font { font-family: 'Courier Prime', monospace; }

                .censored-bar {
                    background: black;
                    color: black;
                    opacity: 0.8;
                }
                .censored-bar:hover {
                    color: white;
                    opacity: 1;
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 newsprint-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="border-b-4 border-double border-black pb-6">
                    <div className="flex justify-between items-end border-b border-black mb-2 px-4 pb-2">
                        <span className="print-font text-xs">VOL. I</span>
                        <span className="print-font text-xs">INDIA, 1780-1947</span>
                        <span className="print-font text-xs">PRICE: FREEDOM</span>
                    </div>
                    <h1 className="headline-font text-5xl md:text-7xl font-black uppercase tracking-tight text-black mb-1">
                        THE INDIAN PRESS
                    </h1>
                    <p className="script-font text-2xl text-gray-600 mt-2">"A free press and a foreign dominion are antagonistic." - Munro</p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 px-6 pb-20 mt-8">

                {/* LEFT COLUMN (Wide) */}
                <div className="lg:col-span-8 space-y-10">

                    {/* SECTION 1: THE BEGINNING */}
                    <section className="relative">
                        <div className="absolute -left-4 -top-4 w-12 h-12 bg-black text-white flex items-center justify-center rounded-full font-bold z-20 print-font">1780</div>
                        <div className="bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="headline-font text-3xl font-bold">The Bengal Gazette</h2>
                                    <p className="print-font text-xs text-gray-500 uppercase">James Augustus Hicky</p>
                                </div>
                                <Newspaper className="w-10 h-10 text-gray-400" />
                            </div>
                            <p className="print-font text-sm leading-relaxed mb-4">
                                Also known as "Hicky's Gazette". Described itself as "A weekly political and commercial paper, open to all parties, but influenced by none."
                            </p>
                            <div className="bg-gray-100 p-3 text-xs border-l-4 border-red-600 italic">
                                <strong>Fate:</strong> Seized in 1782 for criticizing Warren Hastings and Chief Justice Impey.
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: EARLY REGULATIONS */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#fff3e0] p-4 border border-orange-200 transform -rotate-1">
                            <h3 className="headline-font text-lg font-bold mb-2 flex items-center gap-2">
                                <Lock className="w-4 h-4" /> Censorship Act, 1799
                            </h3>
                            <p className="script-font text-xl leading-none mb-2">Lord Wellesley</p>
                            <p className="text-xs font-serif">
                                Fear of French invasion. Pre-censorship imposed. Newspapers must print names of printer/editor.
                            </p>
                        </div>

                        <div className="bg-[#e8f5e9] p-4 border border-green-200 transform rotate-1">
                            <h3 className="headline-font text-lg font-bold mb-2 flex items-center gap-2">
                                <Unlock className="w-4 h-4" /> Metcalfe Act, 1835
                            </h3>
                            <p className="script-font text-xl leading-none mb-2">"Liberator of Press"</p>
                            <p className="text-xs font-serif">
                                Repealed the 1823 Licensing Regulations. Indian press flourished (1835-1857).
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: THE VERNACULAR PRESS ACT */}
                    <section className="relative mt-8">
                        <div className="bg-black text-white p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 bg-white/10 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertOctagon className="w-8 h-8 text-red-500" />
                                    <h2 className="headline-font text-3xl font-bold text-red-500 tracking-wider">VERNACULAR PRESS ACT, 1878</h2>
                                </div>
                                <p className="print-font text-sm mb-6 text-gray-300">
                                    "The Gagging Act" — Lord Lytton
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gray-900 p-4 border border-gray-700">
                                        <h4 className="font-bold text-white text-sm mb-2 uppercase">Target</h4>
                                        <p className="text-xs text-gray-400">
                                            Aimed at vernacular papers (Som Prakash, Bharat Mihir). Empowered DM to confiscate press without appeal.
                                        </p>
                                    </div>
                                    <div className="bg-gray-900 p-4 border border-gray-700 relative">
                                        <h4 className="font-bold text-white text-sm mb-2 uppercase">The Escape</h4>
                                        <p className="text-xs text-gray-400">
                                            <span className="text-yellow-400 font-bold">Amrita Bazar Patrika</span> turned into an English newspaper overnight to bypass the Act!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN (Sidebar) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* FAMOUS JOURNALS */}
                    <div className="bg-white p-4 border-2 border-dashed border-gray-400">
                        <h3 className="headline-font text-xl font-bold mb-4 text-center underline decoration-wavy decoration-red-400">Key Journals</h3>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-bold text-sm">The Hindu & Swadesamitran</span>
                                <span className="script-font text-lg text-gray-600">G. Subramaniya Iyer</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-sm">Kesari (Marathi) & Mahratta</span>
                                <span className="script-font text-lg text-gray-600">B.G. Tilak</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-sm">Voice of India</span>
                                <span className="script-font text-lg text-gray-600">Dadabhai Naoroji</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-sm">Indian Mirror</span>
                                <span className="script-font text-lg text-gray-600">N.N. Sen</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-sm">Sudharak</span>
                                <span className="script-font text-lg text-gray-600">G.K. Gokhale</span>
                            </li>
                        </ul>
                    </div>

                    {/* QUOTE CARD */}
                    <div className="bg-yellow-100 p-6 shadow-md rotate-2">
                        <Feather className="w-6 h-6 text-gray-800 mb-2" />
                        <p className="script-font text-2xl leading-tight">
                            "Swaraj is my birthright and I shall have it."
                        </p>
                        <p className="text-xs font-bold mt-2 text-right uppercase">- Tilak (in Kesari)</p>
                    </div>

                    {/* TILAK'S TRIALS */}
                    <div className="bg-red-50 p-4 border border-red-200">
                        <h4 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                            <History className="w-4 h-4" /> Tilak's Trials
                        </h4>
                        <ul className="text-xs space-y-2 text-red-800">
                            <li><strong>1897:</strong> Arrested for Shivaji festival speech (Chapekar brothers case).</li>
                            <li><strong>1908:</strong> Deported to Mandalay for 6 years (condemning bomb violence).</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="text-center print-font text-xs opacity-50 pb-12">
                PRINTED AT THE EDUECOSYSTEM PRESS, NEW DELHI
            </div>
        </div>
    );
}
