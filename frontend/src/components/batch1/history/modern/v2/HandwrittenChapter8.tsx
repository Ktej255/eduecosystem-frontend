"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen as Book,
    Zap,
    Lightbulb,
    ShieldCheck,
    Users,
    Globe,
    Milestone,
    ClipboardList,
    GraduationCap,
    HeartHandshake,
    Flame,
    Quote,
    Search,
    PenTool as Quill,
    Link as LinkIcon,
    ArrowRightCircle,
    CheckCircle2,
    ShieldAlert,
    Clock,
    History
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HandwrittenChapter8() {
    const [activeStream, setActiveStream] = useState<'reformist' | 'revivalist'>('reformist');

    const womenTimeline = [
        { year: "1795, 1804", title: "Female Infanticide", desc: "Banned by Bengal Regulations.", icon: "👶" },
        { year: "1829", title: "Abolition of Sati", desc: "Raja Rammohan Roy + William Bentinck. Regulation XVII.", icon: "🔥" },
        { year: "1848", title: "Phule's School", desc: "Jyotiba Phule opened girls' school in Pune.", icon: "🏫" },
        { year: "1849", title: "Bethune School", desc: "Established by J.E.D. Bethune in Calcutta.", icon: "🎓" },
        { year: "1856", title: "Widow Remarriage Act", desc: "Vidyasagar + Dalhousie/Canning. (Jagannath Shankarsheth in Bombay).", icon: "👰" },
        { year: "1872", title: "Native Marriage Act", desc: "Banned child marriage below 14 (limited reach).", icon: "📜" },
        { year: "1891", title: "Age of Consent Act", desc: "B.M. Malabari's effort. Raised age to 12. Opposed by Tilak.", icon: "⚖️" },
        { year: "1910", title: "Bharat Stree Mahamandal", desc: "First all-India women's org by Sarla Devi Chaudhurani.", icon: "🤝" },
        { year: "1927", title: "AIWC", desc: "All India Women's Conference by Margaret Cousins.", icon: "🏘️" },
        { year: "1930", title: "Sarda Act", desc: "Harbilas Sarda. Age: 14 for girls, 18 for boys.", icon: "🔔" },
        { year: "1947", title: "Devadasi Abolition", desc: "Muthulakshmi Reddy's effort in Madras.", icon: "🗽" }
    ];

    return (
        <div className="min-h-screen bg-[#f8f5f0] p-4 md:p-8 font-['Merriweather',_serif] text-slate-900 selection:bg-orange-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Kalam:wght@400;700&family=Special+Elite&display=swap');
                
                .parchment-sheet {
                    background-color: #fdfaf6;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid #e5e1da;
                    position: relative;
                }

                .lamp-glow {
                    box-shadow: 0 0 40px rgba(204, 119, 34, 0.2);
                }

                .scholar-font {
                    font-family: 'Playfair Display', serif;
                }

                .quill-header {
                    font-family: 'Kalam', cursive;
                    color: #4B3621;
                }

                .reform-blue { color: #4169E1; }
                .revival-saffron { color: #CC7722; }

                .lamp-animation:hover {
                    filter: drop-shadow(0 0 10px #CC7722);
                    transition: all 0.3s ease;
                }

                .bullet-quill::before {
                    content: '🪶';
                    margin-right: 8px;
                }

                .bullet-lotus::before {
                    content: '🪷';
                    margin-right: 8px;
                }

                .handmade-border {
                    border: 10px solid transparent;
                    border-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5H100V1.5H0V0.5Z' fill='%23E5E1DA'/%3E%3C/svg%3E") 10 stretch;
                }

                .body-handwritten {
                    font-family: 'Kalam', cursive;
                    font-weight: 300;
                }
            `}</style>

            {/* HERO SECTION: THE SCHOLAR'S DESK */}
            <header className="max-w-6xl mx-auto pt-24 mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl transform -rotate-12 opacity-80 pointer-events-none">
                        🪔
                    </div>
                    <h1 className="scholar-font text-5xl md:text-8xl font-bold text-slate-800 mb-6 italic">
                        The Indian Renaissance
                    </h1>
                    <p className="text-xl md:text-3xl font-light tracking-widest text-[#4B3621] uppercase opacity-70">
                        --- From Obscurantism to Enlightenment ---
                    </p>
                    <div className="flex justify-center gap-12 mt-12 text-4xl opacity-50">
                        <Quill className="w-12 h-12" /> <Book className="w-12 h-12" /> <Lightbulb className="w-12 h-12" />
                    </div>
                </motion.div>

                {/* MISSION STATEMENT CAROUSEL */}
                <div className="mt-20 max-w-4xl mx-auto p-12 bg-white/40 backdrop-blur-sm border-2 border-slate-200 rounded-[50px] shadow-2xl relative">
                    <Quote className="absolute -top-6 left-12 w-12 h-12 text-orange-200" />
                    <p className="scholar-font text-2xl italic leading-relaxed text-slate-700">
                        "I regret to say that the present system of religion... is not well calculated to promote their political interest."
                    </p>
                    <p className="mt-4 scholar-font font-bold text-orange-800">— Raja Rammohan Roy</p>
                </div>
            </header>

            {/* SECTION 1: THE CONTEXT & CRITERIA */}
            <section className="max-w-7xl mx-auto mb-32 px-4 relative">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                    <History className="w-96 h-96" />
                </div>

                <h2 className="text-4xl scholar-font font-bold mb-12 flex items-center gap-4 border-b-4 border-orange-100 pb-4">
                    <span className="lamp-animation">🪔</span> THE AWAKENING CRITERIA
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Card className="parchment-sheet p-8 border-none hover:shadow-2xl transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-orange-900 border-b border-orange-100 pb-2">Rationalism</h3>
                        <p className="leading-relaxed font-light">
                            The touchstone for judging everything: <span className="marker-yellow font-bold">Reason & Logics</span>. Rejection of blind faith and superstitions.
                        </p>
                    </Card>

                    <Card className="parchment-sheet p-8 border-none transform rotate-1">
                        <h3 className="text-2xl font-bold mb-4 text-orange-900 border-b border-orange-100 pb-2">Humanism</h3>
                        <p className="leading-relaxed font-light">
                            Service to man is service to God. Focus on the dignity and equality of human beings regardless of caste or gender.
                        </p>
                    </Card>

                    <Card className="parchment-sheet p-8 border-none transform -rotate-1">
                        <h3 className="text-2xl font-bold mb-4 text-orange-900 border-b border-orange-100 pb-2">Universalism</h3>
                        <p className="leading-relaxed font-light">
                            All religions lead to the same goal. Emphasis on the unity of God and the fundamental oneness of all faiths.
                        </p>
                    </Card>
                </div>

                {/* THE TATTVABODHINI ROOT */}
                <div className="mt-16 bg-white p-10 border-4 border-dashed border-orange-200 rounded-[40px] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Search className="w-32 h-32" />
                    </div>
                    <Badge className="bg-orange-800 mb-4">THE INTELLECTUAL ROOT</Badge>
                    <h3 className="text-3xl scholar-font font-bold mb-4">Tattvabodhini Sabha (1839)</h3>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="body-handwritten text-xl leading-relaxed">
                            Founded by <strong>Debendranath Tagore</strong>. Dedicated to the systematic study of India's past with a rational outlook. Published <em>Tattvabodhini Patrika</em>. Merged with Brahmo Samaj in 1843.
                        </div>
                        <div className="text-6xl grayscale opacity-20">📜</div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE TWO STREAMS (REFORMIST VS REVIVALIST) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold text-center mb-16 uppercase tracking-[0.3em]">The Dual Streams</h2>

                <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
                    {/* REFORMIST */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`flex-1 p-12 rounded-[60px] cursor-pointer transition-all duration-500 shadow-xl ${activeStream === 'reformist' ? 'bg-blue-900 text-white scale-105' : 'bg-blue-50 text-blue-900 opacity-60'}`}
                        onClick={() => setActiveStream('reformist')}
                    >
                        <h4 className="text-3xl font-bold scholar-font mb-6 flex items-center gap-3">
                            REFORMIST <ArrowRightCircle className="w-8 h-8" />
                        </h4>
                        <p className="text-lg italic mb-8 border-b border-blue-100/20 pb-4">
                            "Modernize the tradition. Adapt to the changing times using Western science and reason."
                        </p>
                        <div className="space-y-6 text-sm">
                            <p className="bullet-quill"><strong>Brahmo Samaj:</strong> Raja Rammohan Roy. Monotheism. Abolition of Sati.</p>
                            <p className="bullet-quill"><strong>Prarthana Samaj:</strong> M.G. Ranade. Maharashtra. Social reform & inter-dining.</p>
                            <p className="bullet-quill"><strong>Aligarh Movement:</strong> Sir Syed Ahmed Khan. Modern education for Muslims.</p>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 mt-8">
                                <h5 className="font-bold mb-2 gold-text">Aligarh Fact:</h5>
                                <p className="italic">Sir Syed published <em>Tahzib-ul-Akhlaq</em> to reconcile Quran with science.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* REVIVALIST */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`flex-1 p-12 rounded-[60px] cursor-pointer transition-all duration-500 shadow-xl ${activeStream === 'revivalist' ? 'bg-orange-800 text-white scale-105' : 'bg-orange-50 text-orange-900 opacity-60'}`}
                        onClick={() => setActiveStream('revivalist')}
                    >
                        <h4 className="text-3xl font-bold scholar-font mb-6 flex items-center gap-3">
                            REVIVALIST <ArrowRightCircle className="w-8 h-8" />
                        </h4>
                        <p className="text-lg italic mb-8 border-b border-orange-100/20 pb-4">
                            "Return to the roots. Revive the ancient purity of the faith to counter Western decay."
                        </p>
                        <div className="space-y-6 text-sm">
                            <p className="bullet-quill"><strong>Arya Samaj:</strong> Dayanand Saraswati. "Back to the Vedas". Shuddhi movement.</p>
                            <p className="bullet-quill"><strong>Ramakrishna Mission:</strong> Swami Vivekananda. Service to man as worship.</p>
                            <p className="bullet-quill"><strong>Deoband Movement:</strong> Nanotavi & Gangohi. Orthodox Islamic regeneration. Anti-British.</p>
                            <div className="p-4 bg-black/10 rounded-2xl border border-white/20 mt-8">
                                <h5 className="font-bold mb-2 gold-text">Deoband Fact:</h5>
                                <p className="italic">Unlike Aligarh, Deoband welcomed the formation of Congress in 1885.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RADICAL TREND: YOUNG BENGAL FIREBRAND */}
            <section className="max-w-5xl mx-auto mb-32 px-4">
                <div className="p-12 bg-slate-900 text-slate-100 rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                        <Flame className="w-48 h-48 text-orange-500" />
                    </div>
                    <h2 className="text-4xl scholar-font font-bold mb-8 text-orange-400">THE RADICAL FIRE: YOUNG BENGAL</h2>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <p className="text-2xl italic text-slate-300">"To think for oneself and to judge for oneself."</p>
                            <div className="body-handwritten text-xl leading-relaxed">
                                Led by <strong>Henry Vivian Derozio</strong> (aged 17-22). Inspired by the French Revolution. Mocked all authority and custom.
                            </div>
                            <div className="flex gap-4">
                                <Badge className="bg-red-900">RADICAL</Badge>
                                <Badge className="bg-slate-700">DEROZIANS</Badge>
                            </div>
                        </div>
                        <div className="w-full md:w-64 p-6 bg-white/10 border border-white/20 rounded-3xl text-center">
                            <h4 className="font-bold mb-2">Failure Note:</h4>
                            <p className="text-sm italic opacity-70">Too advanced for its time. Social conditions were not ripe for such radical universalism.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FIGHT FOR BETTERMENT OF WOMEN (PROGRESS TIMELINE) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <Lightbulb className="w-10 h-10 text-orange-400" /> THE PROGRESSIVE RADIANCE (WOMEN'S RIGHTS)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {womenTimeline.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 border-2 border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-lg transition-all relative">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold scholar-font text-orange-900 flex justify-between">
                                {item.title}
                                <span className="bg-orange-50 text-orange-800 text-xs px-2 py-1 rounded-full font-sans">{item.year}</span>
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 italic">
                                {item.desc}
                            </p>
                            {idx === 6 && (
                                <div className="mt-4 p-2 bg-red-50 border border-red-100 rounded text-[10px] text-red-900 font-bold uppercase">
                                    Historical Nuance: Tilak opposed the Age of Consent Act to avoid foreign interference.
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* WOMEN-LED ORGANIZATIONS */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="parchment-sheet p-8 border-l-8 border-l-orange-800">
                        <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Bharat Stree Mahamandal (1910)
                        </h4>
                        <p className="body-handwritten text-lg leading-relaxed">
                            Founded by <strong>Sarla Devi Chaudhurani</strong> in Allahabad. First All-India women's organization dedicated to education and upliftment.
                        </p>
                    </Card>
                    <Card className="parchment-sheet p-8 border-l-8 border-l-blue-800">
                        <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            Pandita Ramabai & AIWC
                        </h4>
                        <p className="body-handwritten text-lg leading-relaxed">
                            Founded <strong>Arya Mahila Samaj</strong>. Later, <strong>Margaret Cousins</strong> founded AIWC (1927) for welfare and rights.
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: WESTERN & SOUTH INDIAN REFORMERS (REGIONAL FOCUS) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 text-center underline decoration-orange-200 decoration-8 underline-offset-8">THE REGIONAL RADIANCE</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* MAHARASHTRA CLUSTER */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <ShieldCheck className="w-12 h-12 text-orange-800" />
                            <h3 className="text-3xl font-bold scholar-font uppercase tracking-wider">Maharashtra</h3>
                        </div>

                        <Card className="parchment-sheet p-8 hover:scale-[1.02] transition-transform">
                            <h4 className="text-2xl font-bold text-orange-900 border-b pb-2 mb-4">Jyotiba Phule</h4>
                            <p className="body-handwritten text-xl leading-relaxed">
                                Founded <strong>Satyashodhak Samaj</strong> (1873). Wrote <em>Gulamgiri</em>. Championed Shudras & Ati-Shudras.
                            </p>
                            <Badge className="mt-4 bg-orange-800">TRUTH SEEKER</Badge>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white border border-slate-100 rounded-3xl">
                                <h5 className="font-bold text-sm mb-2 text-slate-400 uppercase">Lokhitwadi</h5>
                                <p className="body-handwritten text-lg"><strong>Gopal Hari Deshmukh</strong>. Wrote in <em>Prabhakar</em>.</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 rounded-3xl">
                                <h5 className="font-bold text-sm mb-2 text-slate-400 uppercase">Rationalist</h5>
                                <p className="body-handwritten text-lg"><strong>Gopal Ganesh Agarkar</strong>. Editor of <em>Kesari</em>.</p>
                            </div>
                        </div>
                    </div>

                    {/* SOUTH INDIA CLUSTER */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Globe className="w-12 h-12 text-blue-800" />
                            <h3 className="text-3xl font-bold scholar-font uppercase tracking-wider">South India</h3>
                        </div>

                        <Card className="p-8 bg-blue-900 text-white rounded-[50px] shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 opacity-10 rotate-12"><Users className="w-40 h-48" /></div>
                            <h4 className="text-3xl font-bold mb-4 scholar-font">Sree Narayana Guru</h4>
                            <p className="text-2xl italic text-blue-200 mb-6">"One Caste, One Religion, One God for Mankind."</p>
                            <div className="space-y-4 text-sm body-handwritten">
                                <p>• Found <strong>SNDP Yogam</strong> (1903) in Kerala.</p>
                                <p>• <strong>Aruvippuram Movement:</strong> Consecrated idol defying Brahmin monopoly.</p>
                            </div>
                        </Card>

                        <Card className="parchment-sheet p-8">
                            <h4 className="text-2xl font-bold text-blue-900 border-b pb-2 mb-4 flex justify-between">
                                Veeresalingam
                                <span className="text-xs font-sans bg-blue-50 text-blue-900 px-2 flex items-center rounded-3xl uppercase tracking-tighter">Andhra</span>
                            </h4>
                            <p className="body-handwritten text-lg leading-relaxed italic">
                                Known as the <strong>"Vidyasagar of South"</strong>. Pioneered widow remarriage in AP.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* TEMPLE ENTRY SECTION (DIRECT ACTION) */}
            <section className="max-w-6xl mx-auto mb-32 bg-[#4B3621] text-[#f8f5f0] p-16 rounded-[100px] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-5"><Milestone className="w-32 h-32" /></div>
                <h2 className="text-4xl scholar-font font-bold mb-12 text-center text-orange-200">THE BATTLE FOR THE ALTAR (TEMPLE ENTRY)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-200 text-orange-900 p-3 rounded-full font-bold">1924</div>
                            <div>
                                <h4 className="text-2xl font-bold">Vaikom Satyagraha</h4>
                                <p className="body-handwritten opacity-80 mt-2">Led by K.P. Kesava Menon. Demand to open temple roads. Periyar's radical intervention.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-200 text-orange-900 p-3 rounded-full font-bold">1931</div>
                            <div>
                                <h4 className="text-2xl font-bold">Guruvayur Satyagraha</h4>
                                <p className="body-handwritten opacity-80 mt-2">Led by <strong>K. Kelappan</strong> (The Kerala Gandhi). A mass movement for equality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 border-2 border-dashed border-orange-200/20 rounded-[40px] flex items-center justify-center text-center">
                        <div>
                            <ShieldAlert className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                            <h4 className="text-xl font-bold mb-2">The Breast Cloth Revolt</h4>
                            <p className="text-sm italic opacity-70">Nadar women in Travancore fought for the right to cover their upper bodies. Victory won in 1859.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINORITY MOVEMENT CARDS (PARSI, SIKH, AHMADIYYA) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <Globe className="w-10 h-10 text-orange-400" /> MINORITY MOVEMENTS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* PARSI */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-yellow-600">
                        <h4 className="text-xl font-bold mb-4">Rahnumai Mazdayasnan Sabha (1851)</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            <li>• Leaders: <strong>Dadabhai Naoroji</strong>, Bengalee.</li>
                            <li>• Journal: <strong>Rast Goftar</strong> (Truth Teller).</li>
                            <li>• Goal: Purify Zoroastrianism & remove Purdah.</li>
                        </ul>
                    </Card>

                    {/* SIKH */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-indigo-600">
                        <h4 className="text-xl font-bold mb-4">Singh Sabha & Akali Movement</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            <li>• 1873 – Defend against proselytizing Missions.</li>
                            <li>• 1920s – <strong>Akali Movement</strong> to free Gurdwaras from corrupt Mahants.</li>
                            <li>• Result – SGPC formation.</li>
                        </ul>
                    </Card>

                    {/* AHMADIYYA */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-emerald-600">
                        <h4 className="text-xl font-bold mb-4">Ahmadiyya Movement (1889)</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            <li>• Founder: <strong>Mirza Ghulam Ahmad</strong>.</li>
                            <li>• Ideology: Very liberal, universal. Opposed Jihad.</li>
                            <li>• Supported Western education for Muslims.</li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* THE ORTHODOX BACKLASH */}
            <section className="max-w-4xl mx-auto mb-32 px-4">
                <div className="bg-red-50 p-10 paper-border border-4 border-red-900/30 rounded-3xl relative">
                    <div className="absolute top-2 right-2 stamp-intercepted text-[8px] text-red-900 border-red-900">THE REACTION</div>
                    <h3 className="text-2xl font-bold text-red-900 scholar-font mb-4">The Orthodox Backlash: Dharma Sabha (1830)</h3>
                    <p className="body-handwritten text-lg leading-relaxed italic">
                        Founded by <strong>Radhakant Deb</strong>. Dedicated to defending the "Status Quo". They actually <strong>Opposed</strong> the abolition of Sati.
                    </p>
                    <p className="text-[10px] mt-4 font-bold uppercase tracking-widest text-red-400">— Not everyone wanted Enlightenment —</p>
                </div>
            </section>

            {/* SECTION 5: SIGNIFICANCE & INSTITUTIONS */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <ClipboardList className="w-10 h-10 text-orange-400" /> THE INSTITUTIONAL LEGACY
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* GOKHALE */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><ShieldCheck className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4">Servants of India Society (1905)</h4>
                        <p className="body-handwritten italic mb-4">Found by <strong>G.K. Gokhale</strong>. Trained national missionaries for service.</p>
                        <Badge variant="outline">NON-PROFIT</Badge>
                    </div>

                    {/* SOCIAL CONFERENCE */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><HeartHandshake className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4">Indian Social Conference (1887)</h4>
                        <p className="body-handwritten italic mb-4">Found by <strong>M.G. Ranade</strong>. The social wing of the Congress. "Pledge Movement" against child marriage.</p>
                        <Badge variant="outline">CONGRESS ALLIED</Badge>
                    </div>

                    {/* ANNIE BESANT */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><Globe className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4 italic">Annie Besant & Theosophy</h4>
                        <p className="body-handwritten italic mb-4">HQ at <strong>Adyar (Madras)</strong>. Praised ancient Hinduism. Founded <em>Central Hindu College (Benaras)</em>.</p>
                        <Badge variant="outline">GLOBAL BRIDGE</Badge>
                    </div>
                </div>
            </section>

            {/* FOOTER: THE LAMP OF KNOWLEDGE */}
            <footer className="max-w-5xl mx-auto pb-32 text-center relative">
                <div className="h-px bg-slate-200 w-full mb-20"></div>

                <div className="relative inline-block px-12 py-6 border-y-2 border-slate-100">
                    <p className="scholar-font text-3xl font-bold italic text-slate-400">
                        "The reformers were the first Nationalists. They built the bridge to the Freedom Struggle."
                    </p>
                </div>

                <div className="mt-20 flex flex-col items-center group opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">🪔</div>
                    <p className="text-xs uppercase tracking-[0.5em] font-bold">RENAISSANCE COMPLETE</p>
                    <p className="mt-2 text-[10px] scholar-font italic">— The Mind is Free. The Path is Lit. —</p>
                </div>

                {/* THEMATIC QUILL DECORATION */}
                <div className="absolute -bottom-10 right-0 opacity-10 rotate-45 pointer-events-none">
                    <Quill className="w-64 h-64" />
                </div>
            </footer>
        </div>
    );
}
