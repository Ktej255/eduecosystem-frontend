"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Sword,
    ShieldAlert,
    Skull,
    Mountain,
    Trees,
    Flag,
    AlertTriangle,
    Feather,
    Anchor,
    Map as MapIcon,
    Zap,
    Users,
    Quote,
    Crosshair
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter6() {
    return (
        <div className="min-h-screen bg-[#fdf8f0] p-4 md:p-8 font-['Kalam',_cursive] text-[#4a3728] selection:bg-orange-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Special+Elite&display=swap');
                
                .rebel-paper {
                    background-color: #fdfaf6;
                    border: 2px solid #8b4513;
                    box-shadow: 10px 10px 0px rgba(139, 69, 19, 0.1);
                    position: relative;
                }

                .wanted-poster {
                    background-color: #f4ece1;
                    border: 2px solid #5d4037;
                    padding: 20px;
                    text-align: center;
                    box-shadow: 2px 5px 15px rgba(0,0,0,0.2);
                    filter: sepia(0.2);
                }

                .muddy-texture {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: url('https://www.transparenttextures.com/patterns/dark-wood.png');
                    opacity: 0.05;
                    pointer-events: none;
                }

                .blood-red { color: #800000; }
                .earth-brown { color: #8b4513; }
                .forest-green { color: #228b22; }

                .stencil-font {
                    font-family: 'Special Elite', cursive;
                    letter-spacing: 2px;
                }

                .marker-red {
                    background-color: #fee2e2;
                    border-bottom: 2px solid #ef4444;
                    padding: 0 4px;
                }

                .burnt-corner {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
                }
            `}</style>

            <div className="muddy-texture"></div>

            {/* HERO SECTION */}
            <header className="max-w-6xl mx-auto pt-20 mb-16 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="flex justify-center mb-6">
                        <Flame className="w-20 h-20 text-orange-700 animate-pulse" />
                    </div>
                    <h1 className="text-4xl md:text-8xl font-['Permanent_Marker'] blood-red mb-2 tracking-tighter uppercase">
                        PEOPLE'S RESISTANCE
                    </h1>
                    <p className="text-xl md:text-2xl earth-brown stencil-font font-bold opacity-80 uppercase tracking-widest italic">
                        --- The Sparks Before the 1857 Fire ---
                    </p>
                    <div className="max-w-xl mx-auto mt-8 bg-white p-6 paper-border border-4 border-dashed border-red-900 transform rotate-1">
                        <p className="text-2xl leading-relaxed italic body-handwritten">
                            "Resistance was not an accident; it was a continuous stream of defiance against the colonial theft of land, faith, and forests."
                        </p>
                    </div>
                </motion.div>
            </header>

            {/* SECTION 1: THE CAUSES */}
            <div className="max-w-5xl mx-auto mb-20">
                <div className="bg-[#4a3728] text-stone-100 p-8 transform -rotate-1 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <AlertTriangle className="w-32 h-32" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] text-orange-400 mb-8 uppercase tracking-widest outline-text">WHY THEY FOUGHT?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 body-handwritten text-xl">
                        <div className="space-y-4">
                            <p className="border-l-4 border-orange-500 pl-4 py-1">
                                <span className="font-bold text-orange-300">Colonial Plunder:</span> High revenue, eviction of peasants, destruction of local industry.
                            </p>
                            <p className="border-l-4 border-orange-500 pl-4 py-1">
                                <span className="font-bold text-orange-300">Tribal Grief:</span> Loss of forest rights, entry of <span className="underline italic">Dikus</span> (outsiders/moneylenders).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="border-l-4 border-orange-500 pl-4 py-1">
                                <span className="font-bold text-orange-300">Religious Interference:</span> Attacks on customs (Sati ban, Widows, Missionaries).
                            </p>
                            <p className="border-l-4 border-orange-500 pl-4 py-1">
                                <span className="font-bold text-orange-300">Administrative Decay:</span> Displaced local leaders and disbanded native armies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: CIVIL UPRISINGS (Horizontal Scroll) */}
            <div className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-3xl font-['Permanent_Marker'] earth-brown mb-10 flex items-center gap-3">
                    <Crosshair className="w-8 h-8 blood-red" /> CIVIL UPRISINGS (THE LEADERS)
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {/* Sanyasi */}
                    <div className="wanted-poster w-72 transform -rotate-2 hover:rotate-0 transition-transform">
                        <div className="w-full h-1 bg-gradient-to-r from-red-600 to-transparent mb-4"></div>
                        <h3 className="stencil-font text-2xl mb-1">REWARD</h3>
                        <p className="text-xs uppercase font-bold mb-4">Capture of Fakir/Sanyasi Leaders</p>
                        <h4 className="text-2xl font-bold body-handwritten text-red-900 mb-4 uppercase">Manju Shah & Musa Shah</h4>
                        <div className="text-sm body-handwritten space-y-2 text-left bg-white/50 p-4 rounded border border-dashed border-stone-400">
                            <p>• <strong>Region:</strong> Bengal/Bihar (1763-1800)</p>
                            <p>• <strong>Cause:</strong> Ban on pilgrims.</p>
                            <p>• <strong>Legacy:</strong> Bankim's <em>Anandamath</em>.</p>
                        </div>
                    </div>

                    {/* Paika */}
                    <div className="wanted-poster w-72 transform rotate-2 hover:rotate-0 transition-transform">
                        <div className="w-full h-1 bg-gradient-to-r from-orange-600 to-transparent mb-4"></div>
                        <h3 className="stencil-font text-2xl mb-1">REWARD</h3>
                        <p className="text-xs uppercase font-bold mb-4">For Information on the General</p>
                        <h4 className="text-2xl font-bold body-handwritten text-orange-900 mb-4">BAKSHI JAGABANDHU</h4>
                        <div className="text-sm body-handwritten space-y-2 text-left bg-white/50 p-4 rounded border border-dashed border-stone-400">
                            <p>• <strong>Region:</strong> Odisha (1817)</p>
                            <p>• <strong>Who:</strong> Paikas (Landed Militia).</p>
                            <p>• <strong>Status:</strong> Often called the First War.</p>
                        </div>
                    </div>

                    {/* Velu Thampi */}
                    <div className="wanted-poster w-72 transform -rotate-1 hover:rotate-0 transition-transform">
                        <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-transparent mb-4"></div>
                        <h3 className="stencil-font text-2xl mb-1">REWARD</h3>
                        <p className="text-xs uppercase font-bold mb-4">For the Rebel Diwan</p>
                        <h4 className="text-2xl font-bold body-handwritten text-blue-900 mb-4 uppercase">VELU THAMPI</h4>
                        <div className="text-sm body-handwritten space-y-2 text-left bg-white/50 p-4 rounded border border-dashed border-stone-400">
                            <p>• <strong>Region:</strong> Travancore (1808)</p>
                            <p>• <strong>Manifesto:</strong> Kundara Proclamation.</p>
                            <p className="text-red-700 italic">"Suicide before Capture."</p>
                        </div>
                    </div>

                    {/* Kittur Chennamma */}
                    <div className="wanted-poster w-72 transform rotate-3 hover:rotate-0 transition-transform border-4 border-amber-600 bg-amber-50">
                        <div className="w-full h-1 bg-amber-600 mb-4"></div>
                        <h3 className="stencil-font text-2xl text-amber-800 mb-1">THE QUEEN HERSELF</h3>
                        <p className="text-xs uppercase font-bold mb-4">Legacy of Resistance</p>
                        <h4 className="text-2xl font-bold body-handwritten text-amber-900 mb-4">KITTUR CHENNAMMA</h4>
                        <div className="text-sm body-handwritten space-y-2 text-left bg-white/50 p-4 rounded border border-dashed border-amber-400">
                            <p>• <strong>Region:</strong> Karnataka (1824)</p>
                            <p>• <strong>Cause:</strong> Inheritance issue.</p>
                            <p>• <strong>Hero:</strong> Rayanna (Guerilla fighter).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: TRIBAL UPRISINGS (Map Layout) */}
            <div className="max-w-6xl mx-auto mb-20 p-10 bg-white paper-border border-4 border-slate-900 relative">
                <div className="absolute top-4 right-8 opacity-10">
                    <MapIcon className="w-24 h-24 text-slate-400" />
                </div>
                <h2 className="text-3xl font-['Permanent_Marker'] blood-red mb-12 flex items-center gap-3">
                    <Mountain className="w-8 h-8 forest-green" /> TRIBAL REVOLTS (BOWS vs MUSKETS)
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        {/* Santhal */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-orange-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Zap className="w-5 h-5 text-orange-600" /> THE SANTHAL HOOL (1855-56)
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">
                                Region: <strong>Rajmahal Hills (Daman-i-Koh)</strong>. Leaders: <strong>Sidhu & Kanhu</strong>.
                            </p>
                            <p className="text-sm italic opacity-70">Against Dikus & Zamindars. 15,000 Santhals martyred.</p>
                        </div>

                        {/* Khond */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-red-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Skull className="w-5 h-5 text-red-600" /> KHOND UPRISING (1837-56)
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">
                                Region: Odisha. Leader: <strong>Chakra Bisoi</strong>.
                            </p>
                            <p className="text-sm bg-red-50 p-2 rounded border border-red-100 text-red-900">
                                <strong>Cause:</strong> British ban on <span className="font-bold">"Mariah" (Human Sacrifice)</span> + New taxes.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Kols & Mundas */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-blue-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold earth-brown flex items-center gap-2">
                                <Trees className="w-5 h-5 forest-green" /> KOLS & EARLY MUNDAS (1820-37)
                            </h4>
                            <p className="body-handwritten text-lg leading-snug mb-2">
                                Region: Chotanagpur. Leaders: <strong>Buddho Bhagat</strong>.
                            </p>
                            <p className="text-sm italic opacity-70">Resented land transfer to outsiders. Singhbhum was the epicenter.</p>
                        </div>

                        {/* North-East */}
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 w-2 h-full bg-green-700 opacity-20"></div>
                            <h4 className="text-2xl font-bold forest-green flex items-center gap-2">
                                <Flag className="w-5 h-5 text-green-700" /> NORTH-EAST BRAMBLE
                            </h4>
                            <div className="space-y-4 body-handwritten text-lg">
                                <div>
                                    <p className="font-bold">Khasi Uprising (1829):</p>
                                    <p className="text-sm">Leader: <strong>Tirat Singh</strong>. Cause: Road construction by British through hills.</p>
                                </div>
                                <div>
                                    <p className="font-bold">Ahoms (1828):</p>
                                    <p className="text-sm">Leader: <strong>Gomdhar Konwar</strong>. Refused to accept British presence after Burmese War.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 4: PEASANT & RELIGIOUS REVOLTS */}
            <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="bg-[#fffefe] p-8 paper-border border-4 border-stone-800 shadow-lg relative transform rotate-1">
                    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><Zap className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 text-stone-700 underline decoration-orange-400">THE WAHABI & KUKA WEB</h3>
                    <div className="body-handwritten text-xl space-y-6">
                        <div className="border-l-4 border-stone-300 pl-4">
                            <p className="font-bold">Wahabi Movement:</p>
                            <p className="text-sm">Syed Ahmed (Rae Bareli). HQ: <strong>Sithana</strong>. Most organized pre-1857 network. Aimed for Dar-ul-Islam.</p>
                        </div>
                        <div className="border-l-4 border-stone-300 pl-4">
                            <p className="font-bold">Kuka Movement (Punjab):</p>
                            <p className="text-sm">Founder: Jawahar Mal. Leader: <strong>Ram Singh</strong>. Preached Swadeshi & Non-cooperation long before Gandhi.</p>
                        </div>
                    </div>
                </Card>

                <div className="space-y-8">
                    {/* Titu Mir */}
                    <div className="bg-white p-8 paper-border border-2 border-dashed border-green-800 relative group overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:scale-110 transition-transform">
                            <Castle className="w-32 h-32" />
                        </div>
                        <h4 className="marker-label text-green-900 border-b border-green-100 mb-4 pb-2">TITU MIR'S BAMBOO FORT (1831)</h4>
                        <p className="body-handwritten text-lg leading-relaxed">
                            Mir Nithar Ali built <strong>Bans-er-Killa</strong>. Fought Hindu landlords (beard tax) & Indigo planters. Narkelberia Uprising base.
                        </p>
                    </div>

                    {/* Pagal Panthis */}
                    <div className="bg-white p-6 paper-border border-2 border-stone-300">
                        <h4 className="marker-label text-stone-600 mb-2">PAGAL PANTHIS (Garo Tribes)</h4>
                        <p className="body-handwritten text-lg italic">
                            "God made the land, so no one should pay rent." — Karam Shah & Tipu. Base: Mymensingh.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 5: MUTINIES BEFORE THE GREAT REVOLT (The Sepoy Prelude) */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="bg-red-900 text-white p-10 rounded-[60px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    <h2 className="text-3xl font-['Permanent_Marker'] mb-12 text-center text-orange-400">THE SEPOY PRELUDE (MUTINIES BEFORE 1857)</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-help">
                            <h4 className="font-bold text-orange-200 mb-2">1764 (Buxar)</h4>
                            <p className="text-xs body-handwritten">Sepoys refused to fight fellow Indians. 24 blown from guns.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-help">
                            <h4 className="font-bold text-orange-200 mb-2">1806 (Vellore)</h4>
                            <p className="text-xs body-handwritten">Against dress codes (Leonine turban/cockade). Brutally crushed.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-help">
                            <h4 className="font-bold text-orange-200 mb-2">1824 (Barrackpore)</h4>
                            <p className="text-xs body-handwritten">Refused to go to Burma across "Black Water" (Sea). Regiment disbanded.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors cursor-help">
                            <h4 className="font-bold text-orange-200 mb-2">1844 (Ferozepur)</h4>
                            <p className="text-xs body-handwritten">Mutiny over withdrawal of <strong>Bhatta</strong> (Foreign service pay) in Sindh.</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
                        <p className="body-handwritten text-xl italic text-red-200">"1857 was not the first. It was the climax."</p>
                        <div className="mt-8 flex gap-4 text-xs font-bold uppercase tracking-widest text-orange-500 opacity-60">
                            <span>Marudu Pandian Confederacy</span>
                            <span>•</span>
                            <span>Surat Salt Agitation (1844)</span>
                            <span>•</span>
                            <span>Gadkari Revolt (1844)</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center pb-20">
                <Quote className="w-8 h-8 mx-auto text-stone-300 mb-4" />
                <p className="marker-label text-stone-400 uppercase text-xs tracking-[0.6em] font-bold">--- The Wild Resistance Ends Here ---</p>
                <p className="body-handwritten italic text-stone-400 text-sm mt-4 italic">Next Station: 1857 - The Great Explosion</p>
            </footer>
        </div>
    );
}

function Castle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 20v-9l-4-4V3L14 7l-4-4-4 4-4-4v4L2 11v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" /><path d="M12 11V7" /><path d="M15 11V8" /><path d="M9 11V8" /><path d="M11 22v-4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4" /><path d="M16 11V8" /><path d="M8 11V8" />
        </svg>
    );
}
