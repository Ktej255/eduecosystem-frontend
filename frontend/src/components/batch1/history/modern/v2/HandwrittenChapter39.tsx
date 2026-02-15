"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter39() {
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
                    Chapter 39
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 39</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">1. After Nehru, Who?</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>Upon Nehru's death in May 1964, Congress President <span className="font-bold highlight">K. Kamraj</span> engineered a consensus.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Lal Bahadur Shastri</span>, a man of great integrity and simplicity, became the second Prime Minister.</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">2. Shastri's Tenure (1964-66)</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">Shastri faced two massive crises:</p>
<p className="text-lg leading-relaxed">1.  **Food Shortage:** India faced a near-famine situation. Shastri promoted the **Green Revolution** (high-yield seeds) and the **White Revolution** (Amul/Dairy). He famously gave the slogan **&quot;Jai Jawan, Jai Kisan&quot;** to boost the morale of soldiers and farmers.</p>
<p className="text-lg leading-relaxed">2.  **War with Pakistan (1965):**</p>
<p className="text-lg leading-relaxed">- Pakistan launched **Operation Gibraltar** (infiltration in Kashmir) expecting a local uprising.</p>
<p className="text-lg leading-relaxed">- Shastri ordered the Indian Army to open a new front across the international border towards **Lahore**.</p>
<p className="text-lg leading-relaxed">- Key Battles: **Battle of Asal Uttar** (tank battle).</p>
<p className="text-lg leading-relaxed">- Result: India defended its territory successfully.</p>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">3. The Tashkent Declaration (1966)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>A peace treaty mediated by the <span className="font-bold highlight">USSR</span> in Tashkent (Uzbekistan).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>Signed by Shastri and Pak President <span className="font-bold highlight">Ayub Khan</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>Both sides agreed to withdraw to pre-war positions (India returned the strategic <span className="font-bold highlight">Haji Pir Pass</span>).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Tragedy:</span> Hours after signing, Shastri died of a heart attack in Tashkent on Jan 11, 1966.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">4. Second Succession</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>After Shastri's death, there was a contest for leadership between <span className="font-bold highlight">Morarji Desai</span> and <span className="font-bold highlight">Indira Gandhi</span> (Nehru's daughter).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>The &quot;Syndicate&quot; (party bosses) backed Indira, thinking she would be pliable. She defeated Morarji to become the <span className="font-bold highlight">third Prime Minister</span> in 1966.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>This marked the beginning of a new, turbulent era in Indian politics leading up to the 1967 elections.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
