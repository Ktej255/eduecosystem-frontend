"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter29() {
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
                    Social and Religious Reform Movements: Specific
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 29</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Caste Movements</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Satnami Movement (Chhattisgarh)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Ghasidas</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Worked among the leather workers (Chamars) to improve their social status.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Shri Narayana Dharma Paripalana Yogam (SNDP)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Sri Narayana Guru</span> (Kerala, 1903) for the Ezhavas (toddy tappers).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Slogan</span>: &quot;One Caste, One Religion, One God for Mankind&quot;.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Opened temples for lower castes (Aravippuram Movement).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Justice Party (Madras)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">C.N. Mudaliar</span>, <span className="font-bold">T.M. Nair</span>, and <span className="font-bold">P. Tyagaraya Chetty</span> (1916).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Represented non-Brahmins (intermediate castes) seeking government jobs and representation.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Self-Respect Movement (Tamil Nadu)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">E.V. Ramaswamy Naicker (Periyar)</span> (1925).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Radical movement against Brahmin domination and the caste system.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Advocated atheism, women's rights, and self-respect marriages (without Brahmin priests).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Mahad Satyagraha (Maharashtra)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Led by <span className="font-bold">Dr. B.R. Ambedkar</span> (1927).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Asserted the right of Dalits to use water from the public tank at Mahad.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Ambedkar also burned the *Manusmriti* as a symbol of caste oppression.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Women's Reform Movements</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Key Leaders</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Pandita Ramabai</span>: Founded the *Arya Mahila Samaj* and *Sharada Sadan* (for widows).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Savitribai Phule</span>: Started the first school for girls in Pune (1848).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">D.K. Karve</span>: Founded the first Women's University in Bombay (SNDT) and the Widow Remarriage Association.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Organizations</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">All India Women's Conference (AIWC)</span>: Founded in 1927 by Margaret Cousins. Promoted women's education and social welfare.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Western India Reforms</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Young Bombay Movement</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Intellectual trend inspired by the Young Bengal Movement.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Paramahansa Mandali</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded by <span className="font-bold">Dadoba Pandurang</span> and others (1849).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>A secret society that worked for the abolition of caste and idolatry.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Gopal Hari Deshmukh ('Lokhitawadi')</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Advocated for rationalism and criticized blind adherence to tradition in his *Shatapatre*.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
