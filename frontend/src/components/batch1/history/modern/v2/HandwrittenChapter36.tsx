"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter36() {
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
                    Chapter 36
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 36</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">1. Foundations of Foreign Policy</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Anti-Imperialism & Anti-Colonialism:</span> India actively supported decolonization movements in Asia and Africa (e.g., Indonesia, Ghana).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Asian Solidarity:</span> Even before independence, Nehru convened the <span className="font-bold highlight">Asian Relations Conference (March 1947)</span> in New Delhi to assert Asian unity.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">The Commonwealth:</span> India decided to remain in the Commonwealth, redefining it as an association of free and equal nations, a pragmatic move for economic and defense ties.</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">2. The Policy of Non-Alignment (NAM)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Context:</span> The world was divided into two hostile blocs led by the <span className="font-bold highlight">USA (Capitalist)</span> and <span className="font-bold highlight">USSR (Communist)</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Core Principle:</span> Nehru refused to join either military alliance (NATO/SEATO or Warsaw Pact), choosing instead to judge international issues on their merit.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Panchsheel (1954):</span> The <span className="font-bold highlight">Five Principles of Peaceful Coexistence</span> were signed with China:</p></div>
<p className="text-lg leading-relaxed">1.  Mutual respect for territorial integrity and sovereignty.</p>
<p className="text-lg leading-relaxed">2.  Mutual non-aggression.</p>
<p className="text-lg leading-relaxed">3.  Mutual non-interference in internal affairs.</p>
<p className="text-lg leading-relaxed">4.  Equality and mutual benefit.</p>
<p className="text-lg leading-relaxed">5.  Peaceful coexistence.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">NAM Summit (1961):</span> Founded in Belgrade by <span className="font-bold highlight">Nehru, Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), and Nkrumah (Ghana)</span> to champion peace and disarmament.</p></div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">3. Relations with Neighbors</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Pakistan:</span> Relations were strained from the start due to the <span className="font-bold highlight">Partition</span> carnage and the <span className="font-bold highlight">Kashmir conflict (1947-48)</span>. The <span className="font-bold highlight">Indus Waters Treaty (1960)</span>, mediated by the World Bank, was a rare success.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">China:</span> Initial friendship (*Hindi-Chini Bhai-Bhai*) soured over the <span className="font-bold highlight">Tibetan Uprising (1959)</span> (India gave asylum to the Dalai Lama) and border disputes. This culminated in the <span className="font-bold highlight">1962 China War</span>, a humiliating military defeat for India which exposed gaps in defense preparedness.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">4. Key Challenges</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>The <span className="font-bold highlight">Cold War</span> pressure: Both superpowers tried to woo or coerce India.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Goa Liberation (1961):</span> When diplomacy failed, the Indian Army liberated Goa from Portuguese rule (Operation Vijay).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>By 1964, Nehru's foreign policy faced criticism for being too idealistic (*Panchsheel*) in a realist world, especially after the 1962 setback. However, <span className="font-bold highlight">Non-Alignment</span> established India's independent voice on the global stage.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
