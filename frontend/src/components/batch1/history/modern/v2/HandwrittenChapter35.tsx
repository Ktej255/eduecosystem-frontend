"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter35() {
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
                    Independence and Partition (1945-1947)
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 35</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">The Post-War Upsurge</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Simla Conference (1945)</span>: The breakdown of the Wavell Plan marked the beginning of the end.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">INA Trials (Nov 1945)</span>: The trial of INA officers (Sahgal, Dhillon, Shan Nawaz) at the Red Fort triggered massive public protests, uniting all communities. The motto &quot;Lal Qile se aayi aawaz, Sahgal Dhillon Shah Nawaz&quot; became famous.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">RIN Mutiny (Feb 1946)</span>: Ratings of <span className="font-bold highlight">HMIS Talwar</span> in Bombay went on strike against racial discrimination and poor food. It spread to other ships and establishments. The mutineers hoisted the flags of Congress, League, and the Communist Party together. Sardar Patel and Jinnah persuaded them to surrender.</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Cabinet Mission (1946)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Members</span>: <span className="font-bold highlight">Pethick-Lawrence</span> (Sec. of State), <span className="font-bold highlight">Stafford Cripps</span>, and <span className="font-bold highlight">A.V. Alexander</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Proposals</span>:</p></div>
<p className="text-lg leading-relaxed">1.  **Rejection of Pakistan**: A sovereign Pakistan was rejected as unviable.</p>
<p className="text-lg leading-relaxed">2.  **Union of India**: A weak center controlling Defense, Foreign Affairs, and Communications.</p>
<p className="text-lg leading-relaxed">3.  **Grouping**: Provinces were to be divided into three sections:</p>
<p className="text-lg leading-relaxed">- **Section A**: Madras, Bombay, UP, Bihar, CP, Orissa (Hindu majority).</p>
<p className="text-lg leading-relaxed">- **Section B**: Punjab, NWFP, Sindh (Muslim majority).</p>
<p className="text-lg leading-relaxed">- **Section C**: Bengal and Assam (Muslim majority).</p>
<p className="text-lg leading-relaxed">4.  **Constituent Assembly**: To be elected by provincial assemblies.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Outcome</span>: Both Congress and League accepted it initially but differed on the interpretation of &quot;Grouping&quot; (Compulsory vs Optional).</p></div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Direct Action and Interim Government</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Direct Action Day (Aug 16, 1946)</span>: After the collapse of the Cabinet Mission plan, Jinnah called for &quot;Direct Action&quot; to achieve Pakistan. This led to the <span className="font-bold highlight">Great Calcutta Killings</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Interim Government (Sept 2, 1946)</span>: Formed by <span className="font-bold highlight">Jawaharlal Nehru</span>. The Muslim League initially stayed out but joined later (Oct 1946) only to obstruct the working of the government. <span className="font-bold highlight">Liaquat Ali Khan</span> became the Finance Member.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Mountbatten Plan and Independence</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Attlee's Declaration (Feb 20, 1947)</span>: PM Clement Attlee announced that the British would leave India by <span className="font-bold highlight">June 1948</span>. Lord <span className="font-bold highlight">Mountbatten</span> replaced Wavell as Viceroy.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Mountbatten Plan (June 3, 1947)</span>:</p></div>
<p className="text-lg leading-relaxed">- Acceptance of Partition.</p>
<p className="text-lg leading-relaxed">- Integration of Princely States.</p>
<p className="text-lg leading-relaxed">- Boundary Commissions (Radcliffe Line) to be set up.</p>
<p className="text-lg leading-relaxed">- Date of Independence advanced to **August 15, 1947**.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Indian Independence Act, 1947</span>: Passed by the British Parliament, ratified the Mountbatten Plan.</p></div>
                </div>
            </section>

            <section key={4} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Partition</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Radcliffe Line</span>: Sir Cyril Radcliffe chaired the boundary commissions for Punjab and Bengal.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Agony of Partition</span>: The joy of independence was marred by the horrific violence of partition and massive displacement of people.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
