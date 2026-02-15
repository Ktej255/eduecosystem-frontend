"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter34() {
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
                    The Crisis of 1942: Cripps Mission & Quit India
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 34</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">The Cripps Mission (March 1942)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Context</span>: Japanese advance towards Indian borders (Rangoon fell in March 1942) and pressure from Allies (USA, China) forced Britain to seek Indian cooperation.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Proposals</span>:</p></div>
<p className="text-lg leading-relaxed">1.  **Dominion Status** with the right to secede from the Commonwealth.</p>
<p className="text-lg leading-relaxed">2.  **Constituent Assembly**: To be elected by provincial assemblies and nominated by Princes.</p>
<p className="text-lg leading-relaxed">3.  **Right to Secede**: Any province not willing to accept the new constitution could form a separate union (Blue-print for Pakistan).</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Rejection</span>:</p></div>
<p className="text-lg leading-relaxed">- **Congress**: Rejected it due to the &quot;Dominion Status&quot; offer (wanted full independence), the nomination of Princes (undemocratic), and the right of provinces to secede (threat to unity). Gandhi called it a *&quot;post-dated cheque on a crashing bank.&quot;*</p>
<p className="text-lg leading-relaxed">- **Muslim League**: Rejected it because it didn't explicitly concede Pakistan.</p>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">The Quit India Movement (August 1942)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Wardha Resolution (July 1942)</span>: The CWC authorized Gandhi to launch a non-violent mass struggle.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Bombay Session (August 8, 1942)</span>: The AICC ratified the &quot;Quit India&quot; resolution at Gowalia Tank Maidan.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">The Call</span>: Gandhi gave the slogan <span className="font-bold highlight">&quot;Do or Die&quot;</span> (*Karo ya Maro*). He declared, *&quot;I am not going to be satisfied with anything short of complete freedom.&quot;*</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Crackdown</span>: On the morning of <span className="font-bold highlight">August 9</span>, all top Congress leaders (Gandhi, Nehru, Patel, Azad) were arrested under the Defense of India Rules.</p></div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Phases of the Movement</h3>
                            <ul className="space-y-2">
                                
                            </ul>
                        </div>
<p className="text-lg leading-relaxed">1.  **Mass Protests**: Public demonstrations, strikes, flag hoistings. Symbols of authority (police stations, post offices) were attacked.</p>
<p className="text-lg leading-relaxed">2.  **Underground Movement**: Led by Socialists like **Jayaprakash Narayan**, **Ram Manohar Lohia**, **Aruna Asaf Ali** (Heroine of 1942), and **Usha Mehta** (Secret Congress Radio). They organized disruption of communications.</p>
<p className="text-lg leading-relaxed">3.  **Parallel Governments**:</p>
<p className="text-lg leading-relaxed">- **Ballia (UP)**: Under **Chittu Pandey** (for a week).</p>
<p className="text-lg leading-relaxed">- **Tamluk (Bengal)**: *Jatiya Sarkar* (Satish Samanta), organized &quot;Vidyut Vahini.&quot;</p>
<p className="text-lg leading-relaxed">- **Satara (Maharashtra)**: Undeground *Prati Sarkar* (Nana Patil, Y.B. Chavan), longest-lasting.</p>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Impact and Significance</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">British Repression</span>: Brutal suppression, firing, and heavy fines. Over 10,000 killed (unofficial).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Significance</span>: It demonstrated that the British could no longer rule India against the wishes of the people. It destroyed the loyalty of the bureaucracy and police to the British Raj.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Gandhi's Fast (1943)</span>: Undertaken in jail (Aga Khan Palace) to protest against the government's accusation that Congress was responsible for the violence. It galvanized public opinion.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Rajagopalachari Formula (1944)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">C.R. Formula</span>: C. Rajagopalachari proposed a plan for Congress-League cooperation:</p></div>
<p className="text-lg leading-relaxed">- League to endorse Congress demand for independence.</p>
<p className="text-lg leading-relaxed">- League to cooperate in forming a provisional government.</p>
<p className="text-lg leading-relaxed">- After the war, a plebiscite in Muslim-majority areas to decide on separation.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Outcome</span>: Jinnah rejected it, demanding a &quot;Two-Nation&quot; settlement *before* independence, not a plebiscite.</p></div>
                </div>
            </section>

            <section key={4} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Wavell Plan & Simla Conference (1945)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Wavell Plan</span>: Proposed to reconstitute the Viceroy's Executive Council with all Indian members (except Viceroy and Commander-in-Chief), with equal representation for Caste Hindus and Muslims.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Simla Conference</span>: Failed because Jinnah insisted that *all* Muslim members must be nominated by the Muslim League (denying Congress the right to represent Muslims).</p></div>
                </div>
            </section>

            <section key={5} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Indian National Army (INA)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Formation</span>: Idea conceived by <span className="font-bold highlight">Mohan Singh</span> in Malaya. Later revived by <span className="font-bold highlight">Subhash Chandra Bose</span> (Netaji) in Singapore (1943).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Provisional Government</span>: Bose formed the *Azad Hind Government* in Singapore (Oct 1943).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Campaign</span>: The INA marched towards India with the slogan &quot;Chalo Dilli,&quot; reaching Imphal and Kohima.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Impact</span>: The <span className="font-bold highlight">Red Fort Trials</span> (1945) of INA officers (Prem Sahgal, Gurbaksh Singh Dhillon, Shah Nawaz Khan) united the entire nation in their defense.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
