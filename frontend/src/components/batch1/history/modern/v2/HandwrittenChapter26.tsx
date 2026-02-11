"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Gavel,
    Scroll,
    Landmark,
    Shield,
    Coins,
    BookOpen,
    Scale
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter26() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-purple-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Special+Elite&family=Cutive+Mono&display=swap');
                
                .parchment-texture {
                    background-color: #f3e5f5;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .mono-font { font-family: 'Cutive Mono', monospace; }
                .type-font { font-family: 'Special Elite', monospace; }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-16 pb-12 text-center relative z-10">
                <div className="bg-white p-8 border-4 border-double border-purple-900 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900"></div>
                    <div className="flex justify-center mb-4">
                        <Landmark className="w-12 h-12 text-purple-900" />
                    </div>
                    <h1 className="marker-font text-4xl md:text-6xl font-bold uppercase text-purple-900 mb-2">
                        THE STEEL FRAME
                    </h1>
                    <p className="mono-font text-lg text-gray-600 uppercase tracking-widest">Administrative Evolution (1858-1947)</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: CIVIL SERVICES & POLICE */}
                <div className="space-y-12">

                    {/* CIVIL SERVICES */}
                    <div className="bg-white p-6 shadow-md border-t-4 border-purple-700 relative">
                        <div className="absolute -left-3 top-6 bg-purple-700 text-white px-2 py-1 rotate-90 text-xs font-bold tracking-widest">ICS</div>
                        <h2 className="marker-font text-2xl text-purple-900 mb-4 ml-6">Civil Services</h2>

                        <div className="hand-font text-lg space-y-4 ml-2">
                            <p className="italic text-gray-600">"Neither Indian, nor Civil, nor a Service." - Nehru</p>

                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                                <ul className="space-y-3">
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900">1853</Badge>
                                        <span>Open Competition introduced (Dalhousie).</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900">1863</Badge>
                                        <span><strong className="text-purple-900">Satyendranath Tagore</strong> became the first Indian ICS officer.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Badge variant="outline" className="border-purple-900">1924</Badge>
                                        <span><strong>Lee Commission</strong> recommended 50% Indianisation in 15 years.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-sm bg-gray-100 p-2">
                                <strong>Exam Center:</strong> Initially London only. From 1922, held in India (Allahabad) and London simultaneously.
                            </div>
                        </div>
                    </div>

                    {/* POLICE REFORMS */}
                    <div className="bg-gray-800 text-gray-200 p-6 shadow-xl border-l-4 border-yellow-500">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-yellow-500" />
                            <h2 className="type-font text-2xl uppercase">Police Reforms</h2>
                        </div>

                        <div className="mono-font space-y-4 text-sm">
                            <div className="border-b border-gray-600 pb-2">
                                <strong className="text-yellow-500 block">Police Act, 1861</strong>
                                Guidelines for a constabulary system (after 1857 revolt).
                            </div>
                            <div>
                                <strong className="text-yellow-500 block">Frazer Commission (1902-03)</strong>
                                <span className="opacity-80">Established under Lord Curzon.</span>
                                <ul className="list-disc pl-5 mt-1 opacity-70">
                                    <li>Criticized corruption.</li>
                                    <li>Recommended CID (Criminal Investigation Dept).</li>
                                    <li>Est. Central Intelligence Bureau (CIB).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: LOCAL GOVT, JUDICIARY & FINANCE */}
                <div className="space-y-12">

                    {/* FINANCIAL DECENTRALIZATION */}
                    <div className="relative bg-[#e0f7fa] p-6 border-2 border-cyan-700 transform rotate-1">
                        <h2 className="marker-font text-2xl text-cyan-900 mb-4 flex items-center gap-2">
                            <Coins className="w-6 h-6" /> Financial Evolution
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="font-bold text-cyan-800 w-24">Mayo (1870)</div>
                                <div className="text-sm">First step. Fixed sums for Police, Jails, Education to provinces.</div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="font-bold text-cyan-800 w-24">Lytton (1877)</div>
                                <div className="text-sm">Transferred more heads (Land Revenue, Excise).</div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="font-bold text-cyan-800 w-24">Ripon (1882)</div>
                                <div className="text-sm">Divided revenue into Imperial, Provincial, and Divided Heads.</div>
                            </div>
                        </div>
                    </div>

                    {/* LOCAL SELF GOVERNMENT */}
                    <div className="bg-white p-6 shadow-[8px_8px_0_0_#2e7d32] border border-green-700">
                        <h2 className="marker-font text-2xl text-green-800 mb-4 underline decoration-wavy">
                            Local Self Govt
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                                <div className="text-3xl mb-1">👑</div>
                                <strong className="block text-xl text-green-900">Lord Ripon (1882)</strong>
                                <span className="text-sm uppercase tracking-widest">"Father of Local Self Govt"</span>
                                <p className="text-sm mt-2 font-serif text-gray-600">
                                    "Political education is the primary object, administrative efficiency is secondary."
                                </p>
                            </div>

                            <ul className="text-sm list-disc pl-5 space-y-1">
                                <li><strong>Mayo's Resolution (1870):</strong> Started the process.</li>
                                <li><strong>Royal Commission on Decentralization (1908):</strong> Chairman Hobhouse. Emphasized Village Panchayats.</li>
                            </ul>
                        </div>
                    </div>

                    {/* JUDICIARY & ILBERT BILL */}
                    <div className="bg-[#ffebee] p-6 border-2 border-red-200 relative group hover:bg-white transition-colors duration-300">
                        <h2 className="type-font text-2xl text-red-900 mb-4 flex items-center gap-2">
                            <Scale className="w-6 h-6" /> Law & Order
                        </h2>

                        <div className="hand-font space-y-4">
                            <div>
                                <strong className="block text-lg">Indian High Courts Act, 1861</strong>
                                <p className="text-sm">High Courts est. at Calcutta, Bombay, Madras (Replacing Supreme Courts & Sadar Adalats).</p>
                            </div>

                            <div className="bg-red-100 p-3 border-l-4 border-red-600">
                                <div className="flex justify-between items-center mb-1">
                                    <strong className="text-red-900">Ilbert Bill Controversy (1883)</strong>
                                    <Badge variant="destructive">RACISM</Badge>
                                </div>
                                <p className="text-sm">
                                    <strong>Proposed by:</strong> C.P. Ilbert (Law Member under Ripon).
                                    <br />
                                    <strong>The Goal:</strong> Allow Indian judges to try European offenders in criminal cases.
                                    <br />
                                    <strong>The Outcome:</strong> White Mutiny (Europeans protested). Bill withdrawn/diluted.
                                    <br />
                                    <span className="text-xs font-bold text-red-800">Legacy: Exposed British racial arrogance.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
