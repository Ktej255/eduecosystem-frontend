"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter38() {
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
                    Chapter 38
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 38</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">1. Planned Development</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Planning Commission (1950):</span> Established to formulate Five-Year Plans. Nehru believed the state must control the &quot;commanding heights&quot; of the economy.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">First Plan (1951-56):</span> Focused on <span className="font-bold highlight">agriculture and irrigation</span> (e.g., Bhakra Nangal Dam) to solve the food crisis.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Second Plan (1956-61):</span> Based on the <span className="font-bold highlight">Mahalanobis Model</span>, it shifted focus to <span className="font-bold highlight">rapid industrialization</span>, especially heavy industries (Steel Plants at Bhilai, Rourkela, Durgapur).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Mixed Economy:</span> Coexistence of public and private sectors, with strategic industries reserved for the state (PSUs).</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">2. The "Temples of Modern India"</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">Nehru famously called dams, power plants, and factories the **&quot;Temples of Modern India&quot;**. He believed science and technology were the keys to progress.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Scientific Temper:</span> Promoted a rational, scientific outlook.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Institutions:</span></p></div>
<p className="text-lg leading-relaxed">- **IITs (Indian Institutes of Technology):** First at Kharagpur (1951).</p>
<p className="text-lg leading-relaxed">- **Atomic Energy:** Department of Atomic Energy established under **Homi J. Bhabha**.</p>
<p className="text-lg leading-relaxed">- **Space Research:** INCOSPAR (later ISRO) set up under **Vikram Sarabhai**.</p>
<p className="text-lg leading-relaxed">- **CSIR:** Network of national laboratories.</p>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">3. Social Reform</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Hindu Code Bills (1955-56):</span> Despite stiff resistance from orthodoxy (and even within Congress), Nehru pushed for laws reforming Hindu personal law. These acts:</p></div>
<p className="text-lg leading-relaxed">- Outlawed polygamy.</p>
<p className="text-lg leading-relaxed">- Gave women the right to divorce and inherit property.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Education:</span> Establishment of the <span className="font-bold highlight">UGC (1953)</span> to regulate higher education. Also focused on academies for art and culture (<span className="font-bold highlight">Sahitya/Lalit Kala Akademis</span>).</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">4. Assessment</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">Nehru's era built the **democratic and institutional framework** of India. While criticized later for the &quot;License Raj&quot; and slow growth (&quot;Hindu Rate of Growth&quot;), his focus on self-reliance laid the industrial base and verified India's democratic credentials.</p>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
