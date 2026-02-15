"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter33() {
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
                    National Movement: 1939-1941
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 33</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">World War II and Congress Stance</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">September 1939</span>: Germany invaded Poland, starting WWII. Britain declared India a party to the war without consulting Indian opinion.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Congress Response</span>:</p></div>
<p className="text-lg leading-relaxed">- The Congress Working Committee (CWC) condemned Fascism and Nazism but stated that India could not fight for democracy while being denied it herself.</p>
<p className="text-lg leading-relaxed">- **Demand**: The Congress demanded that Britain declare its **War Aims** and promise independence after the war.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Government Response</span>: Viceroy Linlithgow's statement (October 1939) was vague and offered only a &quot;consultative group.&quot;</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Resignation</span>: In protest, Congress ministries in the provinces resigned (Oct-Nov 1939).</p></div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">The Pakistan Resolution (1940)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Lahore Session (Muslim League)</span>: Presided over by <span className="font-bold highlight">Jinnah</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">The Resolution</span>: Drafted by <span className="font-bold highlight">Sikandar Hayat Khan</span> and moved by <span className="font-bold highlight">Fazlul Huq</span>. It demanded that geographically contiguous units in the North-West and East, where Muslims were a majority, should be grouped to constitute &quot;Independent States&quot; in which the constituent units would be autonomous and sovereign.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Significance</span>: It officially adopted the &quot;Two-Nation Theory&quot; and the demand for Pakistan (though the word &quot;Pakistan&quot; was not in the resolution).</p></div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">The August Offer (1940)</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">To win Indian support for the war, the Viceroy announced the **August Offer**:</p>
<p className="text-lg leading-relaxed">1.  **Dominion Status** as the objective for India (post-war).</p>
<p className="text-lg leading-relaxed">2.  **Expansion of Viceroy's Executive Council** to include more Indians.</p>
<p className="text-lg leading-relaxed">3.  **War Advisory Council** to be set up.</p>
<p className="text-lg leading-relaxed">4.  **Veto to Minorities**: No future constitution would be adopted without the consent of minorities (giving Jinnah a veto).</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Reaction</span>:</p></div>
<p className="text-lg leading-relaxed">- **Congress**: Rejected it. Nehru said, &quot;Dominion status is dead as a doornail.&quot;</p>
<p className="text-lg leading-relaxed">- **Muslim League**: Welcomed the veto but rejected the offer because it didn't explicitly concede Pakistan.</p>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Individual Satyagraha (1940-1941)</h2>
                <div className="space-y-6">
                    <p className="text-lg leading-relaxed">Gandhi launched the **Individual Satyagraha** to affirm the right to free speech and to protest against the war effort without embarrassing the British during their &quot;life and death struggle.&quot;</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Aims</span>: To show that nationalist patience was not weakness and to preach against the war.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">The Satyagrahis</span>:</p></div>
<p className="text-lg leading-relaxed">- **First Satyagrahi**: **Acharya Vinoba Bhave**.</p>
<p className="text-lg leading-relaxed">- **Second Satyagrahi**: **Jawaharlal Nehru**.</p>
<p className="text-lg leading-relaxed">- **Third Satyagrahi**: **Brahma Datt**.</p>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Delhi Chalo</span>: The movement was also known as the &quot;Delhi Chalo&quot; movement.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Suspension</span>: Suspended in late 1941 as the war situation deteriorated (Japanese threat).</p></div>
                </div>
            </section>

            <section key={4} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Subhash Chandra Bose and the INA</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Escape</span>: Bose escaped from house arrest in Calcutta in January 1941 and reached Berlin via Kabul and Moscow.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Free India Legion</span>: He organized the *Free India Legion* with Indian POWs in Germany and began broadcasting on *Azad Hind Radio*.</p></div>
                </div>
            </section>

            <section key={5} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Changing Situation (1941)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Japanese Advance</span>: Japan joined the Axis powers and advanced rapidly in Southeast Asia, threatening India's borders.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">US and Chinese Pressure</span>: FDR (USA) and Chiang Kai-Shek (China) pressured Churchill to solve the Indian deadlock, leading to the <span className="font-bold highlight">Cripps Mission</span> (1942).</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
