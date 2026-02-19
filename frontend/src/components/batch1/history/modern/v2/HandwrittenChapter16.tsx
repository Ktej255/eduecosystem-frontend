"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Flag,
    PenTool,
    Scroll,
    AlertTriangle,
    Users,
    Gavel,
    Mic2,
    Flame,
    XCircle,
    Scale,
    Feather,
    Skull
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter16() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Special_Elite',_monospace] text-gray-900 selection:bg-orange-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
                
                .parchment-texture {
                    background-color: #fdfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/old-map.png");
                }

                .typewriter-font { font-family: 'Special Elite', monospace; }
                .marker-font { font-family: 'Permanent Marker', cursive; }
                .serif-font { font-family: 'Playfair Display', serif; }

                .report-card {
                    background: #fff;
                    border: 1px solid #d1d5db;
                    box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
                }

                .ink-blot {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background-image: radial-gradient(circle, #000 0%, transparent 70%);
                    opacity: 0.1;
                    pointer-events: none;
                }

                .black-flag { color: #1a1a1a; }
                .simon-go-back {
                    background: #000;
                    color: #fff;
                    font-family: 'Permanent Marker', cursive;
                    padding: 0.2rem 0.5rem;
                    transform: rotate(-2deg);
                    display: inline-block;
                }
            `}</style>

            {/* BACKGROUND TEXTURE */}
            <div className="fixed inset-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] z-0"></div>

            {/* INK BLOTS */}
            <div className="fixed top-10 left-10 w-24 h-24 bg-black rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>
            <div className="fixed bottom-20 right-20 w-32 h-32 bg-blue-900 rounded-full opacity-5 blur-xl z-0 pointer-events-none"></div>

            {/* HEADER: THE CONSTITUTIONAL WAR */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 pt-8 border-b-4 border-double border-gray-800 pb-6">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <Feather className="w-8 h-8 opacity-60" />
                    <span className="text-3xl font-bold">vs</span>
                    <Flag className="w-8 h-8" />
                </div>
                <h1 className="serif-font text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2">
                    The Draft & The Flag
                </h1>
                <p className="typewriter-font text-xl opacity-80">(1927 - 1929)</p>
                <div className="absolute top-0 right-0 transform rotate-12 opacity-80 hidden md:block">
                    <div className="simon-go-back text-sm">SIMON GO BACK!</div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                {/* LEFT COLUMN: THE CHALLENGE (SIMON & NEHRU REPORT) */}
                <div className="space-y-8">

                    {/* SIMON COMMISSION */}
                    <div className="report-card p-6 relative overflow-hidden bg-gray-50">
                        <div className="absolute top-0 left-0 w-2 h-full bg-black"></div>
                        <h3 className="marker-font text-3xl mb-4 text-black uppercase">The Insult</h3>

                        <div className="space-y-4">
                            <div className="flex justify-between items-start border-b border-gray-300 pb-2">
                                <div>
                                    <strong className="block text-lg">Simon Commission (1927)</strong>
                                    <p className="text-xs text-gray-600">Indian Statutory Commission. 7 Members. All White.</p>
                                </div>
                                <span className="simon-go-back text-xs">All-White</span>
                            </div>

                            <div className="bg-white p-3 border border-gray-200 text-sm">
                                <strong className="block mb-1 text-red-700">The Response: BOYCOTT</strong>
                                <ul className="list-disc ml-4 space-y-1 text-xs">
                                    <li><strong>Congress (Madras 1927):</strong> "Boycott at every stage". (Prez: M.A. Ansari).</li>
                                    <li><strong>Feb 3, 1928:</strong> All-India Hartal on arrival.</li>
                                    <li><strong>Supporters:</strong> Justice Party, Unionists, Shafi Group (Muslim League Split).</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-3 border-l-4 border-red-800 text-xs">
                                <div className="flex items-center gap-2 mb-1">
                                    <Skull className="w-4 h-4 text-red-800" />
                                    <strong className="text-red-900 uppercase">Martyrdom: Lala Lajpat Rai</strong>
                                </div>
                                <p><strong>Oct 30, 1928 (Lahore):</strong> Lathi-charged by James Scott.</p>
                                <p className="italic mt-1 text-gray-700">"Every blow aimed at me is a nail in the coffin of British Imperialism."</p>
                                <p className="text-[10px] mt-1 text-red-600">(Died Nov 17. Avenged by Saunders Murder).</p>
                            </div>
                        </div>

                        {/* BIRKENHEAD CHALLENGE */}
                        <div className="mt-4 p-3 bg-gray-200 text-xs italic text-center border-t border-gray-300">
                            <strong>Lord Birkenhead's Challenge:</strong><br />
                            "Draft a constitution that all parties will agree to."
                        </div>
                    </div>

                    {/* NEHRU REPORT */}
                    <div className="report-card p-6 bg-[#fffaf0] relative">
                        <div className="absolute top-2 right-2 opacity-20">
                            <FileText className="w-16 h-16" />
                        </div>
                        <h3 className="serif-font text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="border-b-2 border-black">The Nehru Report</span>
                            <span className="text-xs font-normal bg-black text-white px-2 py-0.5 rounded-full typewriter-font">Aug 1928</span>
                        </h3>

                        <div className="mb-4 text-xs bg-white p-3 border border-dashed border-gray-400">
                            <strong className="block mb-2 uppercase">The Drafting Committee</strong>
                            <div className="grid grid-cols-2 gap-2">
                                <div>• Motilal Nehru (Chairman)</div>
                                <div>• Tej Bahadur Sapru (Liberals)</div>
                                <div>• Subhash Bose (Congress)</div>
                                <div>• Ali Imam / Shoaib Qureshi</div>
                                <div>• M.S. Aney (Mahasabha)</div>
                                <div>• G.R. Pradhan / Mangal Singh</div>
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow-inner border border-gray-200">
                            <strong className="block text-center border-b border-gray-300 pb-1 mb-2">KEY RECOMMENDATIONS</strong>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 font-bold">1.</span>
                                    <span><strong>Dominion Status</strong> (Not Complete Independence).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 font-bold">2.</span>
                                    <span><strong>Joint Electorates</strong> (Reservation only for Muslims where in minority). NO Separate Electorates.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">3.</span>
                                    <span><strong>Linguistic Provinces</strong> & 19 Fundamental Rights.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-gray-600 font-bold">4.</span>
                                    <span><strong>Secular State</strong> (No state religion).</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* MUSLIM LEAGUE RESPONSE */}
                    <div className="report-card p-6">
                        <h3 className="serif-font text-xl font-bold mb-3 uppercase text-green-800">The "Parting of Ways"</h3>

                        <div className="space-y-3 text-xs">
                            <div className="p-2 border-l-2 border-green-600 bg-green-50">
                                <strong>Delhi Proposals (Dec 1927):</strong> Jinnah offered to give up Separate Electorates IF:
                                <ul className="list-square ml-4 mt-1 opacity-80">
                                    <li>Sindh separated.</li>
                                    <li>Reforms in NWFP/Baluchistan.</li>
                                    <li>1/3rd seats in Centre.</li>
                                </ul>
                                <div className="mt-1 font-bold text-red-700">REJECTED by Hindu Mahasabha.</div>
                            </div>

                            <div className="p-2 border-l-2 border-black bg-gray-50">
                                <strong>Jinnah's 14 Points (March 1929):</strong>
                                <p className="mt-1">After Nehru Report rejected his amendments (Calcutta APC 1928), Jinnah formulated 14 hardline points.</p>
                                <p className="mt-1 italic">"This is the parting of ways."</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE CONFLICT & PURNA SWARAJ */}
                <div className="space-y-8">

                    {/* GENERATIONAL GAP */}
                    <div className="report-card p-6 bg-white">
                        <h3 className="serif-font text-xl font-bold mb-4 uppercase flex items-center gap-2">
                            <Users className="w-5 h-5" /> The Internal Conflict
                        </h3>

                        <div className="grid grid-cols-2 gap-4 text-xs text-center mb-4">
                            <div className="p-3 bg-gray-100 border border-gray-300">
                                <strong className="block text-gray-600 mb-1">Old Guard</strong>
                                (Motilal, Gandhi)
                                <br />Wanted <strong>Dominion Status</strong>
                            </div>
                            <div className="p-3 bg-orange-50 border border-orange-200">
                                <strong className="block text-orange-600 mb-1">Young Turks</strong>
                                (Jawaharlal, Subhash)
                                <br />Founded <strong>Indep. League (1928)</strong>
                                <br />Wanted <strong>Complete Independence</strong>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-3 border border-yellow-300 text-sm">
                            <strong className="block text-yellow-800 mb-1 uppercase">Calcutta Session (1928) Compromise</strong>
                            <p>Gandhi Proposed: Give Govt <strong>1 Year</strong> to accept Dominion Status.</p>
                            <p className="mt-1">If not, Congress will fight for <strong>Purna Swaraj</strong>.</p>
                            <p className="text-[10px] text-gray-500 mt-1 italic">(Subhash moved amendment for immediate independence, but lost vote).</p>
                        </div>
                    </div>

                    {/* FAILED NEGOTIATIONS */}
                    <div className="bg-gray-800 text-gray-200 p-4 rounded text-xs space-y-2">
                        <div className="flex justify-between items-center border-b border-gray-600 pb-1">
                            <strong>🚫 Diplomatic Failure</strong>
                            <span className="text-[10px] opacity-70">Nov/Dec 1929</span>
                        </div>
                        <ul className="space-y-1">
                            <li><strong>Delhi Manifesto (Nov 2):</strong> Leaders demanded RTC should <em>implement</em> Dominion Status, not discuss <em>when</em>.</li>
                            <li><strong>Irwin Bomb (Dec 23):</strong> Viceroy's train bombed. Escaped unhurt.</li>
                            <li><strong>Meeting (Dec 23):</strong> Irwin rejected demands. Path to Lahore cleared.</li>
                        </ul>
                    </div>

                    {/* PURNA SWARAJ */}
                    <div className="report-card p-0 overflow-hidden border-2 border-orange-500 shadow-xl">
                        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2"></div>
                        <div className="p-6">
                            <h3 className="marker-font text-4xl mb-4 text-center uppercase tracking-wider">Purna Swaraj</h3>
                            <div className="text-center font-bold text-gray-500 text-sm mb-6 typewriter-font">Lahore Session (Dec 1929) | Prez: J.L. Nehru</div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-100 p-2 rounded-full"><Flag className="w-6 h-6 text-orange-600" /></div>
                                    <div className="text-sm">
                                        <strong>The Resolution:</strong> Goal changed to Complete Independence. Boycott RTC. Launch CDM.
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-2 rounded-full"><Flame className="w-6 h-6 text-blue-600" /></div>
                                    <div className="text-sm">
                                        <strong>Midnight Dec 31, 1929:</strong> Tricolor hoisted on banks of <strong>River Ravi</strong>.
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2 rounded-full"><FileText className="w-6 h-6 text-green-600" /></div>
                                    <div className="text-sm">
                                        <strong>Jan 26, 1930:</strong> First Independence Day.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-4 font-serif italic text-xs text-center border-t border-gray-200">
                            "We believe that it is the inalienable right of the Indian people to have freedom... if any government deprives a people of these rights... the people have a further right to alter it or to abolish it."
                            <br /><span className="not-italic font-bold mt-1 block">- The Pledge (Drafted by Gandhi)</span>
                        </div>
                    </div>

                    {/* PARALLEL EVENTS */}
                    <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 border border-gray-300 bg-white">
                            <strong className="block text-indigo-800 mb-1">Butler Committee (1927)</strong>
                            <p>Relation of Princes is with <strong>Crown</strong>, not Govt of India. (Poison pill for unity).</p>
                        </div>
                        <div className="p-3 border border-gray-300 bg-white">
                            <strong className="block text-indigo-800 mb-1">AISPC (1927)</strong>
                            <p><strong>States People's Conference.</strong> Demanded rights in Princely States. (Balwant Rai Mehta).</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* FOOTER NOTE */}
            <div className="max-w-4xl mx-auto mt-8 text-center opacity-60 text-xs font-mono">
                Dissent: <strong>Master Tara Singh</strong> (Sikh League) rejected Nehru Report (No reservation for Sikhs in Punjab).
            </div>
        </div>
    );
}
