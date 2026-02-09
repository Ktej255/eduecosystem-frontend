"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Skull,
    Crosshair,
    MapPin,
    Globe,
    Ship,
    FileWarning,
    Fingerprint,
    Search,
    Siren,
    Bomb,
    Scroll,
    Stamp,
    Key
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter11() {
    const [decoded, setDecoded] = useState<string | null>(null);

    const secretSocieties = [
        { name: "Abhinav Bharat", region: "Maharashtra", leader: "V.D. Savarkar" },
        { name: "Anushilan Samiti", region: "Bengal", leader: "Promotha Mitter" },
        { name: "Ghadar Party", region: "San Francisco", leader: "Lala Har Dayal" },
        { name: "Berlin Committee", region: "Germany", leader: "Virendranath C." },
    ];

    return (
        <div className="min-h-screen bg-[#1a1a1a] p-4 md:p-8 font-['Courier_Prime',_monospace] text-gray-200 selection:bg-red-900 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Special+Elite&family=Permanent+Marker&display=swap');
                
                .corkboard {
                    background-color: #3d342b;
                    background-image: url("https://www.transparenttextures.com/patterns/cork-board.png");
                    border: 8px solid #2a2118;
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
                }

                .folder-paper {
                    background-color: #f4e4bc;
                    color: #1a1a1a;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
                }

                .marker-font {
                    font-family: 'Permanent Marker', cursive;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .red-string {
                    border-top: 2px dashed #e11d48;
                    opacity: 0.6;
                    transform-origin: left;
                }

                .cipher-text {
                    letter-spacing: 2px;
                    transition: all 0.3s ease;
                }
                
                .cipher-text:hover {
                    color: #e11d48;
                    text-shadow: 0 0 5px rgba(225, 29, 72, 0.8);
                }
            `}</style>

            {/* BACKGROUND TEXTURE OVERLAY */}
            <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] z-0"></div>

            {/* HEADER: TOP SECRET FILE */}
            <header className="max-w-6xl mx-auto mb-16 text-center relative z-10 pt-8">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block relative"
                >
                    <div className="absolute -top-6 -left-12 transform -rotate-12 border-4 border-red-600 text-red-600 px-4 py-1 text-xl font-bold uppercase marker-font opacity-80">
                        Classified
                    </div>
                    <h1 className="typewriter-font text-5xl md:text-7xl font-bold mb-4 text-gray-100 tracking-tighter">
                        THE UNDERGROUND
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-red-500 font-bold tracking-widest uppercase">
                        <Siren className="w-6 h-6 animate-pulse" />
                        <span>Phase I: 1907 - 1917</span>
                        <Siren className="w-6 h-6 animate-pulse" />
                    </div>
                </motion.div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: DOMESTIC CELLS */}
                <div className="lg:col-span-4 space-y-8">

                    {/* MANIFESTO CARD */}
                    <div className="folder-paper p-6 transform rotate-1 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-md"></div>
                        <h3 className="marker-font text-2xl text-red-900 mb-2">MODUS OPERANDI</h3>
                        <p className="text-sm font-bold mb-4 font-serif italic">"Force must be stopped by force."</p>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <Bomb className="w-4 h-4 mt-1 text-slate-800" />
                                <span><strong>Strategy:</strong> Individual heroic actions to remove fear of jail. Not a mass movement yet.</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Scroll className="w-4 h-4 mt-1 text-slate-800" />
                                <span><strong>Bible:</strong> <em>Bandi Jivan</em> by Sachin Sanyal.</span>
                            </div>
                            <div className="bg-red-100 p-2 border border-red-300 relative mt-2">
                                <div className="absolute -right-2 -top-2 bg-red-600 text-white text-[10px] px-1 font-bold">FUNDING</div>
                                <strong>Swadeshi Dacoities:</strong>
                                <br />
                                <span className="text-xs">Ex: Barrah Dacoity (1908) by Pulin Das. Boat robbery in broad daylight.</span>
                            </div>
                        </div>
                    </div>

                    {/* DOMESTIC MAP BOARD */}
                    <div className="corkboard p-6 rounded-lg relative min-h-[500px]">
                        <h3 className="typewriter-font text-xl text-orange-100 mb-6 border-b border-orange-100/30 pb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5" /> DOMESTIC CELLS
                        </h3>

                        <div className="space-y-6">
                            {/* MAHARASHTRA */}
                            <div className="bg-white/90 text-slate-900 p-3 rounded shadow-lg relative transform -rotate-1 hover:scale-105 transition-transform">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-red-600"></div>
                                <h4 className="font-bold text-sm uppercase text-red-800">Maharashtra (The Spark)</h4>
                                <ul className="text-xs space-y-1 mt-1">
                                    <li><strong>1897:</strong> Chapekar Bros killed Rand (Plague Comm.).</li>
                                    <li><strong>1909:</strong> Nasik Conspiracy (Jackson killed).</li>
                                    <li><strong>Org:</strong> Abhinav Bharat (Savarkar).</li>
                                </ul>
                            </div>

                            {/* BENGAL */}
                            <div className="bg-white/90 text-slate-900 p-3 rounded shadow-lg relative transform rotate-2 hover:scale-105 transition-transform ml-4">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-red-600"></div>
                                <h4 className="font-bold text-sm uppercase text-red-800">Bengal (The Hotbed)</h4>
                                <ul className="text-xs space-y-1 mt-1">
                                    <li><strong>1908:</strong> Alipore Bomb Case (Khudiram Bose).</li>
                                    <li><strong>Defense:</strong> C.R. Das saved Aurobindo.</li>
                                    <li><strong>Hero:</strong> Bagha Jatin (Battle of Balasore, 1915).</li>
                                </ul>
                            </div>

                            {/* DELHI/PUNJAB */}
                            <div className="bg-white/90 text-slate-900 p-3 rounded shadow-lg relative transform -rotate-1 hover:scale-105 transition-transform">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-red-600"></div>
                                <h4 className="font-bold text-sm uppercase text-red-800">Delhi Conspiracy (1912)</h4>
                                <p className="text-xs mt-1">Bomb thrown at Viceroy Hardinge.</p>
                                <div className="flex gap-2 mt-1">
                                    <Badge variant="destructive" className="text-[10px]">Rashbehari: Escaped</Badge>
                                    <Badge variant="outline" className="text-[10px] border-slate-600">Basanta: Hanged</Badge>
                                </div>
                            </div>

                            {/* MADRAS */}
                            <div className="bg-white/90 text-slate-900 p-3 rounded shadow-lg relative transform rotate-1 hover:scale-105 transition-transform ml-8">
                                <div className="absolute -left-2 top-2 w-2 h-2 rounded-full bg-red-600"></div>
                                <h4 className="font-bold text-sm uppercase text-red-800">Madras (Maniyachi)</h4>
                                <p className="text-xs mt-1"><strong>1911:</strong> Vanchinathan killed Collector Ashe.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN: GLOBAL WEB & WANTED */}
                <div className="lg:col-span-5 space-y-8">

                    {/* GHADAR POSTER */}
                    <div className="folder-paper p-8 text-center relative overflow-hidden border-4 border-double border-slate-800">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rotate-45 transform translate-x-4 translate-y-4">SEDITIOUS</div>

                        <h2 className="typewriter-font text-5xl font-black mb-2 tracking-tighter text-red-900">GHADAR</h2>
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-6">San Francisco | 1913</p>

                        <div className="grid grid-cols-2 gap-4 text-left text-xs mb-6">
                            <div className="border p-2 border-slate-400">
                                <strong>HQ:</strong> Yugantar Ashram
                            </div>
                            <div className="border p-2 border-slate-400">
                                <strong>Journal:</strong> "Angrezi Raj Ka Dushman"
                            </div>
                        </div>

                        <div className="bg-slate-800 text-white p-4 rounded relative">
                            <div className="absolute -top-3 left-4 bg-yellow-500 text-black px-2 text-[10px] font-bold">KEY OPERATIVES</div>
                            <ul className="text-sm space-y-1">
                                <li>• Lala Har Dayal (Intellectual)</li>
                                <li>• Sohan Singh Bhakna (President)</li>
                                <li>• <span className="text-yellow-400 font-bold">Kartar Singh Sarabha</span> (Young hero)</li>
                            </ul>
                        </div>

                        <div className="mt-4 bg-red-100 p-2 text-xs border border-red-300 text-red-900">
                            <strong>FAILURE (Feb 1915):</strong> Betrayed by traitor <u>Kirpal Singh</u>.
                        </div>
                    </div>

                    {/* KOMAGATA MARU FILE */}
                    <div className="folder-paper p-6 relative bg-blue-50/90 rotate-1">
                        <div className="flex items-center gap-4 mb-4 border-b border-blue-200 pb-2">
                            <Ship className="w-10 h-10 text-blue-900" />
                            <div>
                                <h3 className="font-bold text-xl text-blue-900">KOMAGATA MARU (1914)</h3>
                                <p className="text-xs italic">The Voyage of Doom</p>
                            </div>
                        </div>
                        <ul className="text-sm space-y-2 list-disc ml-4 text-slate-800">
                            <li><strong>Ship:</strong> <em>Guru Nanak Jahaz</em> (hired by Gurdit Singh).</li>
                            <li><strong>Route:</strong> Singapore → Vancouver (Denied) → Calcutta.</li>
                            <li><strong>Aid:</strong> <strong>Shore Committee</strong> formed in Canada.</li>
                            <li><strong>Result:</strong> Police firing at Budge Budge. 18 dead. Inflamed Ghadar uprising.</li>
                        </ul>
                    </div>

                    {/* BERLIN & KABUL */}
                    <div className="bg-slate-800 text-slate-200 p-6 rounded border border-slate-600 relative">
                        <div className="absolute top-4 right-4 text-slate-500">
                            <Globe className="w-12 h-12 opacity-20" />
                        </div>
                        <h3 className="typewriter-font text-xl text-yellow-500 mb-4">INTERNATIONAL PLOTS</h3>

                        <div className="space-y-4 text-sm">
                            <div className="border-l-2 border-yellow-500 pl-4">
                                <strong className="text-yellow-200">The Zimmerman Plan (Berlin)</strong>
                                <p className="text-xs mt-1 text-slate-400">Weapons from Germany during WWI. Led by Virendranath Chattopadhyaya (Sarojini Naidu's brother).</p>
                            </div>

                            <div className="border-l-2 border-green-500 pl-4">
                                <strong className="text-green-300">Provisional Govt (Kabul, 1915)</strong>
                                <p className="text-xs mt-1 text-slate-400">First Govt-in-Exile. President: Raja Mahendra Pratap. PM: Barkatullah.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: WANTED & SECRET */}
                <div className="lg:col-span-3 space-y-6">

                    {/* KHUDIRAM WANTED POSTER */}
                    <div className="bg-[#e3dcd2] p-4 text-center border-4 border-slate-900 shadow-xl relative">
                        <div className="border-b-2 border-slate-900 mb-2 pb-1">
                            <h4 className="font-black text-3xl uppercase tracking-tighter scale-y-125">WANTED</h4>
                            <p className="text-xs font-bold uppercase">Dead or Alive</p>
                        </div>
                        <div className="w-24 h-24 bg-slate-300 mx-auto mb-2 grayscale flex items-center justify-center border-2 border-slate-500">
                            <Skull className="w-12 h-12 opacity-50" />
                        </div>
                        <h3 className="font-bold text-xl uppercase">Khudiram Bose</h3>
                        <p className="text-xs font-mono mt-1">Age: 18</p>
                        <p className="text-xs font-mono">Crime: Muzaffarpur Bomb</p>
                        <div className="mt-2 transform -rotate-12 border-2 border-red-700 text-red-700 font-bold px-2 py-1 inline-block text-xl opacity-80">
                            HANGED
                        </div>
                    </div>

                    {/* RASHBEHARI ESCAPED */}
                    <div className="bg-[#e3dcd2] p-4 text-center border-4 border-slate-900 shadow-xl relative">
                        <div className="border-b-2 border-slate-900 mb-2 pb-1">
                            <h4 className="font-black text-3xl uppercase tracking-tighter scale-y-125 text-slate-600">ESCAPED</h4>
                        </div>
                        <div className="w-24 h-24 bg-slate-300 mx-auto mb-2 grayscale flex items-center justify-center border-2 border-slate-500">
                            <UserUnknown className="w-12 h-12 opacity-50" />
                        </div>
                        <h3 className="font-bold text-xl uppercase">Rashbehari Bose</h3>
                        <div className="text-left text-xs mt-2 space-y-1 font-mono bg-white p-2 border border-slate-400">
                            <p><strong>Alias:</strong> P.N. Tagore</p>
                            <p><strong>Location:</strong> Japan</p>
                            <p><strong>Wife:</strong> Toshiko Soma</p>
                            <p><strong>Legacy:</strong> INA Founder</p>
                        </div>
                    </div>

                    {/* SILK LETTER CONSPIRACY */}
                    <div className="bg-yellow-100 p-4 border border-yellow-300 relative shadow">
                        <div className="absolute -top-2 -right-2 transform rotate-12">
                            <Stamp className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h4 className="font-bold text-sm uppercase text-yellow-800 mb-2">Silk Letter Conspiracy</h4>
                        <p className="text-xs text-slate-700 mb-2">
                            Secret messages written on yellow silk cloth.
                        </p>
                        <div className="text-[10px] bg-yellow-200 p-1 rounded font-mono">
                            LEADERS: Maulana Mahmud Hasan & Ubaidullah Sindhi.
                        </div>
                    </div>

                    {/* AFTERMATH */}
                    <div className="bg-red-900 text-red-100 p-4 border-l-4 border-red-500">
                        <h4 className="font-bold text-sm uppercase mb-2 flex items-center gap-2">
                            <FileWarning className="w-4 h-4" /> The Aftermath
                        </h4>
                        <ul className="text-xs space-y-2">
                            <li><strong>Defense of India Act (1915):</strong> Precursor to Rowlatt. Detention without trial.</li>
                            <li><strong>Rowlatt Committee (1918):</strong> Appointed to investigate "sedition".</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

function UserUnknown({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <line x1="8" y1="11" x2="16" y2="11" />
        </svg>
    )
}
