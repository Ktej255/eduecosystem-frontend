"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter28() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Kalam',_cursive] text-[#000080] selection:bg-yellow-200">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&display=swap');
                
                .handwritten-paper {
                    background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
                    background-attachment: local;
                }
                
                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid #333;
                }

                .highlight {
                    background: linear-gradient(100deg, rgba(255,255,0,0) 0%, rgba(255,255,0,0.4) 3%, rgba(255,255,0,0.2) 100%);
                    display: inline;
                    padding: 0 4px;
                }
                
                .ink-blot-title::after {
                    content: "";
                    display: block;
                    width: 30px;
                    height: 30px;
                    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000080' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-2.9C83.7,12.2,74.6,26.7,64.2,38.8C53.8,50.9,42.2,60.6,29.3,66.4C16.4,72.2,2.2,74.1,-10.8,71.8C-23.8,69.5,-35.6,63,-46.6,55.2C-57.6,47.4,-67.8,38.3,-74.6,27.1C-81.4,15.9,-84.8,2.6,-82.1,-9.3C-79.4,-21.2,-70.6,-31.7,-60.7,-40.3C-50.8,-48.9,-39.8,-55.6,-28.4,-64.5C-17,-73.4,-5.2,-84.5,4.9,-83.4C15,-82.3,30,-69,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E") no-repeat center;
                    opacity: 0.3;
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    pointer-events: none;
                }
            `}</style>

            <div className="max-w-5xl mx-auto mb-16 relative pt-12">
                <h1 className="text-center text-4xl md:text-6xl font-['Permanent_Marker'] text-[#CC0000] mb-4 ink-blot-title relative inline-block left-1/2 -translate-x-1/2 uppercase">
                    Social and Religious Reform Movements: General
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 28</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Nature of Movements</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Reformist</span>: Sought to reform existing social/religious structures using reason and Western liberal values (e.g., Brahmo Samaj, Prarthana Samaj, Aligarh Movement).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Revivalist</span>: Sought to restore the &quot;purity&quot; of religion by returning to its ancient roots (e.g., Arya Samaj, Deoband Movement).</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Key Movements & Leaders</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Brahmo Samaj (Bengal)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Raja Rammohan Roy</span> (1828) as *Brahmo Sabha*.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Core Tenets</span>: Monotheism, opposition to idol worship, and social reform (Sati abolition).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Later leaders: <span className="font-bold">Debendranath Tagore</span> (Tattvabodhini Sabha) and <span className="font-bold">Keshab Chandra Sen</span> (Brahmo Samaj of India).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Prarthana Samaj (Maharashtra)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Atmaram Pandurang</span> (1867); guided by <span className="font-bold">M.G. Ranade</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Focus: Caste reform, women's education, and widow remarriage.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Unlike Brahmo Samaj, it didn't break away from Hindu society but worked from within.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Arya Samaj (North India)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Swami Dayanand Saraswati</span> (1875).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Motto</span>: &quot;Go Back to the Vedas&quot;.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Key contributions</span>: *Shuddhi* movement (reconversion), education (DAV schools vs. Gurukuls), and opposition to child marriage/untouchability.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Book</span>: *Satyarth Prakash*.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Ramakrishna Mission (Bengal)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Swami Vivekananda</span> (1897).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Based on the teachings of Ramakrishna Paramahansa.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Focus: Humanitarian service (&quot;Service to Man is Service to God&quot;) and spiritual universalism.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Theosophical Society</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Madame Blavatsky</span> and <span className="font-bold">Col. Olcott</span> (New York, 1875); Moved to Adyar, Chennai.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Popularized in India by <span className="font-bold">Annie Besant</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Validated ancient Indian religions through Western eyes.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Muslim Reform Movements</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Aligarh Movement</span>: <span className="font-bold">Sir Syed Ahmed Khan</span> promoted Western education and scientific temper among Muslims (*Tahzib-ul-Akhlaq*). Founded MAO College (later AMU).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Deoband Movement</span>: Revivalist movement by <span className="font-bold">Rashid Ahmed Gangohi</span> and <span className="font-bold">Muhammad Qasim Nanotavi</span> to propagate pure Islamic teachings and oppose British cultural invasion.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Sikh Reform</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Singh Sabha Movement</span>: Aimed to restore the purity of Sikhism and promote modern education.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Akali Movement</span>: Liberated Gurdwaras from corrupt Mahants.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Parsi Reform</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Rahnumai Mazdayasnan Sabha</span>: Founded by Dadabhai Naoroji, J.B. Wacha, etc., to modernize Parsi social customs.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Impact</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>Promoted rationalism, humanism, and universalism.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>improved the status of women (abolition of Sati, widow remarriage, education).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>Attacked the caste system and untouchability.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
