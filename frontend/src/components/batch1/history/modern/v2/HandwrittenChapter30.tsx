"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenChapter30() {
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
                    Peasant Movements 1857-1947
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">Study Notes - Chapter 30</p>
            </div>

            
            <section key={0} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Early Movements (1857-1900)</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Indigo Revolt (1859-60)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Bengal.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: European planters forced peasants to grow indigo instead of food crops at unremunerative prices.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: The Indigo Commission (1860) ruled that planters could not force ryots to grow indigo.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Significance</span>: Massive support from Bengali intelligentsia (e.g., *Nil Darpan* play by Dinabandhu Mitra).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Pabna Agrarian Leagues (1870s-80s)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Bengal (Yusufshahi Pargana).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Zamindars' attempts to increase rent beyond legal limits and prevent tenants from acquiring occupancy rights.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: Bengal Tenancy Act (1885).</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Deccan Riots (1875)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Maharashtra (Pune, Ahmednagar).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Exploitation by Marwari and Gujarati moneylenders; ryots attacked debt bonds.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: Deccan Agriculturists Relief Act (1879).</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={1} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">20th Century Movements (Gandhian Phase)</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Champaran Satyagraha (1917)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Bihar.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: *Tinkathia* system (forced indigo cultivation on 3/20th of land).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Leader</span>: <span className="font-bold">Mahatma Gandhi</span> (invited by Rajkumar Shukla).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: Tinkathia abolished; illegal dues refunded.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Kheda Satyagraha (1918)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Gujarat.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Crops failed, but government refused to remit land revenue.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Leaders</span>: Gandhi, <span className="font-bold">Vallabhbhai Patel</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: Revenue collection suspended for the poor.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Moplah Rebellion (1921)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Malabar (Kerala).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Oppression by Jenmi landlords (Hindus) and British government; merged with Khilafat movement.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Nature</span>: Initially anti-British/anti-landlord, later took communal overtones.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Bardoli Satyagraha (1928)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Gujarat.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Unjust hike in land revenue (22%).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Leader</span>: <span className="font-bold">Vallabhbhai Patel</span> (earned the title &quot;Sardar&quot; here).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Outcome</span>: Revenue hike reduced to 6.03%.</span></li>
                            </ul>
                        </div>
                </div>
            </section>

            <section key={2} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">Late Colonial Movements (1930s-40s)</h2>
                <div className="space-y-6">
                    
                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">All India Kisan Sabha (AIKS)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>Founded in <span className="font-bold">1936</span> at Lucknow.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">President</span>: <span className="font-bold">Swami Sahajanand Saraswati</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Secretary</span>: N.G. Ranga.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Goal</span>: Abolition of Zamindari and reduction of land revenue.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Tebhaga Movement (1946)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Bengal.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Sharecroppers (*Bargadars*) demanded reduction of rent from 1/2 to 1/3 of produce.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Slogan</span>: &quot;Tebhaga Chai&quot; (We want two-thirds).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Led by</span>: Communist Party of India / Kisan Sabha.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Telangana Movement (1946-51)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: Hyderabad State.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: Oppression by Deshmukhs/Jagirdars and forced labor (*Vethi*).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Significance</span>: Largest armed peasant guerrilla struggle; forced land reforms.</span></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                            <h3 className="text-xl font-bold text-red-800 mb-2">Eka Movement (1921)</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Region</span>: United Provinces (Awadh).</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Cause</span>: High rents and oppression by Thikadars.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Leader</span>: <span className="font-bold">Madari Pasi</span>.</span></li>
<li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold">Oath</span>: Not to pay more than recorded rent.</span></li>
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
