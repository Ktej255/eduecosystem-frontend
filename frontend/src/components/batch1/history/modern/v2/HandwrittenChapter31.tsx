"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter31() {
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
                    The Working Class Movement
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 31</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Early Labor Movement (Pre-1918)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Early Conditions</span>: The first factories were established in the 1850s (Cotton in Bombay, Jute in Bengal). Workers faced long hours, low wages, and poor conditions.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Early Leaders</span>: <span className="font-bold highlight">N.M. Lokhande</span> is considered the father of the Indian labor movement. He organized the *Bombay Millhands Association* (1890) and published *Deenbandhu*.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Factory Acts</span>:</p></div>
<p className="text-lg leading-relaxed">- **1881 Act**: Focused on child labor (prohibited employment under 7 years).</p>
<p className="text-lg leading-relaxed">- **1891 Act**: Regulated working hours for women and children.</p>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Rise of Trade Unions (1918-1929)</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">The post-WWI era saw a surge in labor consciousness due to rising prices and the success of the Russian Revolution (1917).</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Madras Labour Union (1918)</span>: Founded by <span className="font-bold highlight">B.P. Wadia</span>, considered the first modern trade union.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Ahmedabad Textile Labour Association (1918)</span>: Founded by Gandhi based on the principle of *Trusteeship*.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">AITUC (1920)</span>: The <span className="font-bold highlight">All India Trade Union Congress</span> was founded in 1920 to represent Indian labor at the ILO. <span className="font-bold highlight">Lala Lajpat Rai</span> was its first President, and <span className="font-bold highlight">Dewan Chaman Lal</span> was the General Secretary.</p></div>
<p className="text-lg leading-relaxed">- *Lajpat Rai's View*: He linked capitalism with imperialism, stating &quot;Imperialism and Militarism are the twin children of Capitalism.&quot;</p>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Legislation and Conspiracy Cases</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Trade Unions Act, 1926</span>: Gave legal status to trade unions and immunity from civil/criminal liability for trade disputes.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Communist Influence</span>: The 1920s saw the rise of communist leaders like S.A. Dange and Muzaffar Ahmed.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Conspiracy Cases</span>: The British tried to suppress the movement through the <span className="font-bold highlight">Kanpur Bolshevik Conspiracy Case (1924)</span> and the <span className="font-bold highlight">Meerut Conspiracy Case (1929)</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Trade Disputes Act, 1929</span>: Restricted the right to strike and introduced conciliation machinery.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Splits and Unification</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Meerut Trial (1929)</span>: Immense publicity for the communist cause.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Nagpur Split (1929)</span>: The AITUC split under the presidency of Jawaharlal Nehru. Moderates led by N.M. Joshi formed the *All India Trade Union Federation* (AITUF).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Red Trade Union Congress (1931)</span>: Another split led by communists.</p></div>
                </div>
            </section>

            <section key={4} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">1937-1939 and WWII</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Congress Ministries</span>: The formation of Congress ministries in 1937 encouraged trade union activities, though some ministries used Section 144 against strikers.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">WWII</span>: The movement was divided over supporting the British war effort. The communists supported the war as a &quot;People's War&quot; after 1941 (German attack on USSR).</p></div>
                </div>
            </section>

            <section key={5} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Post-War Upsurge</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p>The period 1945-47 saw an unprecedented wave of strikes.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">1946</span>: Massive strikes in support of the <span className="font-bold highlight">RIN Mutiny</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">INTUC (1947)</span>: The Congress formed the *Indian National Trade Union Congress* to provide a nationalist alternative to the communist-dominated AITUC.</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
