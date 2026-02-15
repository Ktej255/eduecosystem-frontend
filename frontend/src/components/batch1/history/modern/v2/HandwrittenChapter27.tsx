"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter27() {
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
                    Development of Indian Architecture & Art
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 27</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Architecture</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Indo-Saracenic Style</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>A hybrid style combining <span className="font-bold">Indian</span> (Mughal, Rajput, Hindu) and <span className="font-bold">Western</span> (Gothic, Victorian) elements.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Purpose</span>: To legitimize British rule by linking it to India's architectural heritage.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Key Examples</span>:</span></li>
                            </ul>
                        </div>
<p className="text-lg leading-relaxed">- **Victoria Memorial (Kolkata)**: Designed by William Emerson; a blend of Mughal and Italian Renaissance styles.</p>
<p className="text-lg leading-relaxed">- **Chhatrapati Shivaji Maharaj Terminus (Mumbai)**: Designed by F.W. Stevens; a masterpiece of Victorian Gothic Revival with Indian motifs.</p>
<p className="text-lg leading-relaxed">- **Gateway of India (Mumbai)**: Designed by George Wittet; commemorates the visit of King George V (1911).</p>
<p className="text-lg leading-relaxed">- **Madras High Court**: Incorporates Mughal domes and canopies.</p>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Lutyens' Delhi</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>The new capital, New Delhi, was designed by <span className="font-bold">Edwin Lutyens</span> and <span className="font-bold">Herbert Baker</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Style</span>: &quot;Neo-Roman&quot; or classicist, but incorporating Indian elements like *chhatris* (domes), *jaalis* (lattice screens), and *chhajjas* (overhanging eaves).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Key Buildings</span>: Rashtrapati Bhavan (Viceroy's House), Secretariat (North & South Blocks), Parliament House (Council House), and India Gate (All India War Memorial).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Art Deco</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Popular in Mumbai in the 1930s.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Characterized by streamlined shapes, geometric patterns, and \&quot;nautical\&quot; features.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Art & Painting</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Company School (Kampani Qalam)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>A fusion of Indian miniature traditions with Western realism and perspective.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Documentation of Indian flora, fauna, and people for British patrons.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Raja Ravi Varma</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>The bridge between traditional and modern art.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Used <span className="font-bold">Western oil painting techniques</span> and academic realism to depict <span className="font-bold">Indian mythological themes</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>His lithographic press made art accessible to the masses.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">The Bengal School of Art</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>A nationalist reaction against Western academic art and Ravi Varma's \&quot;westernized\&quot; style.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Led by <span className="font-bold">Abanindranath Tagore</span> and E.B. Havell.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Style</span>: Inspired by Mughal miniatures and Ajanta murals; used a \&quot;wash technique\&quot; for a spiritual, hazy effect.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Key Artists</span>: Nandalal Bose (*Haripura Posters*), Asit Kumar Haldar.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Famous Work</span>: *Bharat Mata* by Abanindranath Tagore.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Modernists</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Amrita Sher-Gil</span>: Blended Western techniques (Post-Impressionism) with Indian themes, focusing on the melancholy of rural life.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Jamini Roy</span>: Rejected Western realism for the bold lines and flat colors of Bengali folk art (Kalighat style).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Progressive Artists' Group (1947)</span>: Founded in Bombay by F.N. Souza, S.H. Raza, M.F. Husain, etc., seeking a modern international language for Indian art.</span></li>
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
