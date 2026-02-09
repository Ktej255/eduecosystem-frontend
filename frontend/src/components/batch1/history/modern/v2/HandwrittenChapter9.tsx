"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    PenTool as FountainPen,
    Scale,
    Mic,
    Scroll,
    Newspaper,
    Gavel,
    Users,
    Globe,
    AlertTriangle,
    TrendingUp,
    BookOpen,
    Quote,
    Landmark,
    Stamp,
    Flag,
    AlertCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HandwrittenChapter9() {
    const [theory, setTheory] = useState<'safety' | 'lightning'>('safety');

    const sessions = [
        { year: "1885", place: "Bombay", pres: "W.C. Bonnerjee", note: "Formation. 72 Delegates." },
        { year: "1886", place: "Calcutta", pres: "Dadabhai Naoroji", note: "Merger with National Conference." },
        { year: "1887", place: "Madras", pres: "Badruddin Tyabji", note: "First Muslim President." },
        { year: "1888", place: "Allahabad", pres: "George Yule", note: "First English President." },
        { year: "1890", place: "Calcutta", pres: "Pherozeshah Mehta", note: "Kadambini Ganguly addressed the session." },
    ];

    const precursors = [
        { year: "1838", name: "Landholders' Society", leader: "Dwarkanath Tagore", type: "First Political Org" },
        { year: "1852", name: "Madras Native Assoc.", leader: "G.L. Chetty", type: "Local/Landlord" },
        { year: "1866", name: "East India Assoc.", leader: "Dadabhai Naoroji (London)", type: "Public Opinion" },
        { year: "1870", name: "Poona Sarvajanik Sabha", leader: "M.G. Ranade", type: "Bridge to People" },
        { year: "1876", name: "Indian Association", leader: "S.N. Banerjea & A.M. Bose", type: "Most Important Pre-INC" },
        { year: "1884", name: "Madras Mahajan Sabha", leader: "Viraraghavachari", type: "Regional" },
        { year: "1885", name: "Bombay Presidency Assoc.", leader: "Mehta, Tyabji, Telang", type: "Regional" }
    ];

    return (
        <div className="min-h-screen bg-[#f4f1ea] p-4 md:p-8 font-['Merriweather',_serif] text-slate-900 selection:bg-blue-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Special+Elite&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&display=swap');
                
                .newsprint {
                    background-color: #fdfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/cream-paper.png");
                    border: 1px solid #d4d4d4;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
                }

                .headline-font {
                    font-family: 'Playfair Display', serif;
                }

                .typewriter-font {
                    font-family: 'Special Elite', monospace;
                }

                .congress-blue { color: #003399; }
                .ink-black { color: #1a1a1a; }
                
                .sepia-img {
                    filter: sepia(0.6) contrast(1.1);
                }

                .column-rule {
                    column-count: 1;
                }
                @media (min-width: 1024px) {
                    .column-rule {
                        column-count: 2;
                        column-gap: 40px;
                        column-rule: 1px solid #d4d4d4;
                    }
                }
            `}</style>

            {/* HEADER: THE BOMBAY GAZETTE */}
            <header className="max-w-6xl mx-auto mb-16 text-center border-b-4 border-double border-slate-800 pb-8">
                <div className="flex justify-between items-end border-b border-slate-800 pb-2 mb-4">
                    <span className="typewriter-font text-xs uppercase tracking-widest">Vol. IX</span>
                    <span className="typewriter-font text-xs uppercase tracking-widest">Bombay, Dec 1885</span>
                    <span className="typewriter-font text-xs uppercase tracking-widest">Price: 1 Anna</span>
                </div>
                <h1 className="headline-font text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-4 text-slate-900">
                    THE NATIONALIST
                </h1>
                <p className="text-xl md:text-3xl font-serif italic text-slate-600">
                    --- The Birth of a Nation: From Petitions to Swaraj ---
                </p>
            </header>

            {/* SECTION 1: THE CATALYST (WHY NATIONALISM?) */}
            <section className="max-w-7xl mx-auto mb-24 newsprint p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Scale className="w-64 h-64" />
                </div>
                <h2 className="headline-font text-4xl font-bold mb-8 flex items-center gap-4 border-b-2 border-slate-300 pb-2">
                    <span className="text-red-800">EDITORIAL:</span> The Awakening Factors
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">The Administrative Catalyst</h3>
                        <p className="text-lg leading-relaxed mb-6 font-light">
                            British rule, ironically, united India. <span className="font-bold">Railways</span>, <span className="font-bold">Telegraphs</span>, and a uniform <span className="font-bold">Legal System</span> created a single administrative entity. The English language became the 'Lingua Franca' for nationalists.
                        </p>

                        <div className="bg-red-50 p-6 border-l-4 border-red-800 mb-6">
                            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Lord Lytton's Reactionary Policies (1876-80)
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm">
                                <li><strong>Vernacular Press Act (1878):</strong> The "Gagging Act" to silence Indian papers.</li>
                                <li><strong>Arms Act (1878):</strong> Indians disarmed; Europeans exempt.</li>
                                <li><strong>Delhi Durbar (1877):</strong> Grand feast while millions died in famine.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="bg-yellow-50 p-8 border border-yellow-200 rotate-1 shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="headline-font text-2xl font-bold">The Ilbert Bill Controversy (1883)</h3>
                                <Gavel className="w-8 h-8 text-slate-600" />
                            </div>
                            <p className="text-sm italic mb-4">"If whites can organize to get their way, so can we."</p>
                            <p className="leading-relaxed text-sm">
                                Lord Ripon's Law Member, C.P. Ilbert, proposed a bill to allow Indian judges to try European offenders.
                                <br /><br />
                                <span className="font-bold text-red-800">THE WHITE MUTINY:</span> Europeans protested violently. The Bill was withdrawn and diluted. This exposed the racial arrogance of the Raj and taught Indians the power of organization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: PRE-CONGRESS ASSOCIATIONS TIMELINE */}
            <section className="max-w-6xl mx-auto mb-24 px-4">
                <h2 className="headline-font text-4xl font-bold mb-12 text-center">The Precursors (1838-1885)</h2>

                <div className="bg-white p-8 rounded-xl shadow-inner border border-slate-200 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b-2 border-slate-800 text-sm uppercase">
                                <th className="p-4 w-24">Year</th>
                                <th className="p-4">Organization</th>
                                <th className="p-4">Leader(s)</th>
                                <th className="p-4">Significance</th>
                            </tr>
                        </thead>
                        <tbody className="typewriter-font text-sm">
                            {precursors.map((org, i) => (
                                <tr key={i} className="border-b border-slate-200 hover:bg-yellow-50 transition-colors">
                                    <td className="p-4 font-bold">{org.year}</td>
                                    <td className="p-4 font-bold text-blue-900">{org.name}</td>
                                    <td className="p-4 italic">{org.leader}</td>
                                    <td className="p-4 text-slate-600">{org.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-blue-50 p-6 border border-blue-200 rounded-lg flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-blue-900 mb-1">Missing from 1885?</h4>
                        <p className="text-sm">
                            <span className="font-bold">Surendranath Banerjea</span> was absent from the first Congress session because he was presiding over his own <span className="font-bold">Indian National Conference</span> in Calcutta. It merged with the INC in 1886.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: BIRTH OF CONGRESS (THEORIES) */}
            <section className="max-w-7xl mx-auto mb-24">
                <div className="newsprint p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-900 text-white px-6 py-2 font-bold uppercase tracking-widest text-xs">Dec 1885</div>

                    <h2 className="headline-font text-5xl font-bold mb-12 text-center congress-blue">THE BIRTH OF THE CONGRESS</h2>

                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4">
                                <Users className="w-12 h-12 text-slate-800" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-500">Founder</h4>
                                    <p className="text-xl font-bold">A.O. Hume (Retd. ICS)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Landmark className="w-12 h-12 text-slate-800" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-500">Venue</h4>
                                    <p className="text-xl font-bold">Gokuldas Tejpal College, Bombay</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Stamp className="w-12 h-12 text-slate-800" />
                                <div>
                                    <h4 className="font-bold uppercase text-xs tracking-widest text-slate-500">First President</h4>
                                    <p className="text-xl font-bold">W.C. Bonnerjee</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-100 p-6 rounded-lg border border-slate-300">
                            <h4 className="headline-font text-2xl font-bold mb-4 text-center">Controversial Theories</h4>
                            <div className="flex gap-2 mb-4 bg-slate-200 p-1 rounded-lg">
                                <button onClick={() => setTheory('safety')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${theory === 'safety' ? 'bg-white shadow' : 'text-slate-500'}`}>Safety Valve</button>
                                <button onClick={() => setTheory('lightning')} className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${theory === 'lightning' ? 'bg-white shadow' : 'text-slate-500'}`}>Lightning Conductor</button>
                            </div>

                            <div className="h-40">
                                {theory === 'safety' ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                                        <p className="text-sm italic">"Hume formed it to release Indian anger harmlessly before it exploded into another 1857."</p>
                                        <p className="text-xs font-bold text-red-700 mt-2">Supporter: Lala Lajpat Rai</p>
                                        <p className="text-xs text-slate-500">Source: William Wedderburn's biography of Hume.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                                        <p className="text-sm italic">"We used Hume as a shield. If an Indian had started it, the British would have crushed it instantly."</p>
                                        <p className="text-xs font-bold text-green-700 mt-2">Supporter: G.K. Gokhale</p>
                                        <p className="text-xs text-slate-500">Logic: Using a Britisher to avoid official suppression.</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* MILESTONE SESSIONS TABLE */}
                    <div className="border-t-2 border-slate-800 pt-8">
                        <h4 className="typewriter-font font-bold text-center mb-6 uppercase tracking-widest decoration-wavy underline">Milestone Sessions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {sessions.map((sess, idx) => (
                                <div key={idx} className="bg-white p-4 border border-slate-200 text-center hover:shadow-lg transition-transform hover:-translate-y-1">
                                    <div className="font-bold text-xl text-blue-900">{sess.year}</div>
                                    <div className="text-xs uppercase tracking-wider mb-2">{sess.place}</div>
                                    <div className="font-bold text-sm mb-2">{sess.pres}</div>
                                    <div className="text-xs italic text-slate-500">{sess.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE MODERATE PHASE (3PS & ACHIEVEMENTS) */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="newsprint p-8">
                    <h3 className="headline-font text-3xl font-bold mb-6">The Moderate Era (1885-1905)</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-slate-800 text-white px-3 py-1 text-xs font-bold uppercase">Methodology</div>
                        <div className="typewriter-font font-bold text-slate-700">PRAYER • PETITION • PROTEST</div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed">
                        Believed in the British sense of fair play and justice. Worked within the constitutional framework.
                    </p>

                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 border-l-4 border-blue-800">
                            <h4 className="font-bold text-sm mb-1">Key Achievement: Indian Councils Act 1892</h4>
                            <p className="text-xs text-slate-600">Expanded councils slightly. Introduced "indirect elections".</p>
                            <p className="text-xs font-bold mt-1 text-red-600">Critique: "No Taxation Without Representation."</p>
                        </div>
                        <div className="bg-slate-50 p-4 border-l-4 border-slate-500">
                            <h4 className="font-bold text-sm mb-1">Public Service Commission (1886)</h4>
                            <p className="text-xs text-slate-600">Appointed by Dufferin (Aitchison Committee). Rejected simultaneous exams.</p>
                        </div>
                    </div>

                    <div className="mt-8 p-4 border border-dashed border-red-300 bg-red-50 rounded">
                        <h4 className="font-bold text-red-800 text-sm flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> The Dissident Voices
                        </h4>
                        <ul className="text-xs list-disc list-inside mt-2 space-y-1">
                            <li><strong>Aurobindo Ghosh (1893):</strong> Wrote <em>"New Lamps for Old"</em>. Comparing Congress to a dying man.</li>
                            <li><strong>Tilak/Pal:</strong> Called the methodology <em>"Political Mendicancy"</em> (Begging).</li>
                        </ul>
                    </div>
                </div>

                <div className="newsprint p-8 bg-[#fff0f0]">
                    <h3 className="headline-font text-3xl font-bold mb-6 text-red-900 flex items-center gap-3">
                        <Newspaper className="w-8 h-8" /> The Economic Critique
                    </h3>
                    <p className="text-lg font-bold italic mb-4 text-red-800">"The Drain Theory"</p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <img src="/placeholder-naoroji.jpg" className="w-16 h-16 bg-slate-300 rounded-full sepia-img" alt="Naoroji" />
                            <div>
                                <h4 className="font-bold">Dadabhai Naoroji</h4>
                                <p className="text-xs italic">Book: Poverty and Un-British Rule in India</p>
                                <p className="text-xs mt-1">Exposed that Britain was bleeding India white.</p>
                            </div>
                        </div>

                        <div className="bg-white p-4 border border-red-200 shadow-sm">
                            <h5 className="font-bold text-xs uppercase mb-2 text-slate-500">HOME CHARGES (The Mechanism of Drain)</h5>
                            <ul className="text-xs grid grid-cols-2 gap-2">
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Interest on Debt</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Pensions of Officials</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Secretary of State Salary</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Military Stores</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: OPPOSITION & INTERNATIONAL WING */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                <Card className="border-t-8 border-slate-800 shadow-md">
                    <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold headline-font">The Loyal Opposition</h3>
                            <Badge variant="destructive">Anti-Congress</Badge>
                        </div>
                        <h4 className="text-lg font-bold mb-2">United India Patriotic Association (1888)</h4>
                        <p className="text-sm text-slate-600 mb-4">
                            Founded by <strong>Sir Syed Ahmed Khan</strong> and <strong>Raja Shiv Prasad</strong> of Benaras.
                        </p>
                        <p className="text-sm italic border-l-2 border-slate-300 pl-4">
                            Goal: To oppose the Congress and promote loyalty to the British Raj.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-t-8 border-blue-600 shadow-md">
                    <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold headline-font">The London Voice</h3>
                            <Globe className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-lg font-bold mb-2">British Committee of INC (1889)</h4>
                        <p className="text-sm text-slate-600 mb-4">
                            Based in London. Key members: <span className="font-bold">William Digby, Wedderburn</span>.
                        </p>
                        <div className="bg-blue-50 p-3 rounded text-center">
                            <span className="text-xs uppercase tracking-wide">Official Journal</span>
                            <div className="headline-font text-xl font-bold text-blue-900">"INDIA" (1890)</div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* FOOTER: THE NICKNAMES & EPILOGUE */}
            <footer className="max-w-5xl mx-auto pb-24 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 opacity-70">
                    <div className="p-2 border border-dashed border-slate-300 rounded">
                        <div className="font-bold text-xs uppercase">Naoroji</div>
                        <div className="text-[10px] italic">"Grand Old Man"</div>
                    </div>
                    <div className="p-2 border border-dashed border-slate-300 rounded">
                        <div className="font-bold text-xs uppercase">Mehta</div>
                        <div className="text-[10px] italic">"Lion of Bombay"</div>
                    </div>
                    <div className="p-2 border border-dashed border-slate-300 rounded">
                        <div className="font-bold text-xs uppercase">Banerjea</div>
                        <div className="text-[10px] italic">"Surrender-Not"</div>
                    </div>
                    <div className="p-2 border border-dashed border-slate-300 rounded">
                        <div className="font-bold text-xs uppercase">Gokhale</div>
                        <div className="text-[10px] italic">"Gandhi's Guru"</div>
                    </div>
                </div>

                <div className="typewriter-font text-xs text-slate-500">
                    <p className="mb-2">Printed at The Times of India Press, Bombay</p>
                    <p>--- END OF ISSUE ---</p>
                </div>
            </footer>
        </div>
    );
}
