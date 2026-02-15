"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter32() {
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
                    Congress Rule in Provinces
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 32</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Formation of Ministries</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Elections of 1937</span>: Held under the <span className="font-bold highlight">Government of India Act, 1935</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Results</span>: The Congress swept the polls, winning absolute majorities in 5 provinces (Madras, United Provinces, Central Provinces, Bihar, and Orissa) and emerging as the largest party in 4 others (Bombay, Bengal, Assam, NWFP).</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Ministry Formation</span>: After an initial standoff over the &quot;Governor's Discretionary Powers&quot; (resolved by a Viceroy's assurance), Congress formed ministries in <span className="font-bold highlight">8 provinces</span> (later including Assam and NWFP).</p></div>
<p className="text-lg leading-relaxed">- **Madras**: **C. Rajagopalachari** (Premier).</p>
<p className="text-lg leading-relaxed">- **Bombay**: **B.G. Kher**.</p>
<p className="text-lg leading-relaxed">- **United Provinces**: **G.B. Pant**.</p>
<p className="text-lg leading-relaxed">- **Bihar**: **Srikrishna Sinha**.</p>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Key Achievements</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">1. Civil Liberties</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Repeal of Emergency Laws</span>: The ministries repealed the Public Safety Acts and the Press Emergency Acts.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Release of Prisoners</span>: Thousands of political prisoners were released, including the revolutionaries of the Kakori and other cases. The ban on many organizations (except the CPI in some provinces) was lifted.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">2. Agrarian Reforms</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Tenancy Acts</span>: Legislation was passed to protect tenants from eviction and to regulate rents (e.g., in Bihar and UP).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Debt Relief</span>: Measures were taken to reduce the burden of debt on the peasantry.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Constraints</span>: Radical land reforms were not possible due to the lack of financial autonomy and the need to maintain unity against the British (avoiding total alienation of the landlord class).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">3. Social Welfare</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Prohibition</span>: Madras under Rajaji was the first to introduce prohibition (ban on liquor).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Temple Entry</span>: Steps were taken to open temples to Dalits (Harijans).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Education</span>: The <span className="font-bold">Wardha Scheme of Basic Education</span> (Nai Talim), proposed by Gandhi, was introduced.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Planning</span>: The <span className="font-bold">National Planning Committee</span> (1938) was set up under Congress President Subhash Chandra Bose, with <span className="font-bold">Jawaharlal Nehru</span> as its Chairman.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Challenges and Criticisms</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Labor</span>: The ministries faced strikes and labor unrest. The <span className="font-bold highlight">Bombay Trades Disputes Act (1938)</span> suppressed strikes and was opposed by labor leaders.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Muslim Mass Contact Programme</span>: Nehru's attempt to reach out to Muslim masses failed to counter the growing influence of the Muslim League.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Pirpur Committee Report</span> (1938): Identify alleged atrocities against Muslims under Congress rule (mostly exaggerated or fabricated), utilized by Jinnah to mobilize support.</p></div>
                </div>
            </section>

            <section key={3} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Tripuri Crisis (1939)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Subhash Chandra Bose</span> defeated Gandhi's candidate, <span className="font-bold highlight">Pattabhi Sitaramayya</span>, for the Congress Presidency.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Govind Ballabh Pant Resolution</span>: Required Bose to form his working committee in accordance with Gandhi's wishes.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Outcome</span>: Bose resigned and formed the <span className="font-bold highlight">Forward Bloc</span> within the Congress. <span className="font-bold highlight">Rajendra Prasad</span> became the new President.</p></div>
                </div>
            </section>

            <section key={4} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Resignation (1939)</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Cause</span>: The Viceroy, Lord Linlithgow, declared India a party to World War II without consulting the Indian people.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Protest</span>: The Congress ministries resigned in <span className="font-bold highlight">October-November 1939</span>.</p></div>
<div className="flex gap-2 items-start text-lg"><span className="text-[#CC0000] mt-1">•</span><p><span className="font-bold highlight">Day of Deliverance</span>: Jinnah and the Muslim League celebrated <span className="font-bold highlight">December 22, 1939</span>, as the &quot;Day of Deliverance&quot; from &quot;Congress Tyranny.&quot;</p></div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
