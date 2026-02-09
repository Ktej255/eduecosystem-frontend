"use client";

import React from 'react';
import { motion } from 'framer-motion';
// Importing specific fonts would usually be done in layout, but we assume they are available or we use closest match
// Fonts: Kalam, Permanent Marker

export default function HandwrittenChapter1() {
    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Kalam',_cursive] text-[#000080] selection:bg-yellow-200">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&display=swap');
        
        .handwritten-paper {
          background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
          background-attachment: local;
        }
        
        .sticky-note {
          box-shadow: 2px 3px 10px rgba(0,0,0,0.1);
          transform: rotate(-1deg);
        }
        
        .sticky-note-pink { background-color: #ffefff; }
        .sticky-note-yellow { background-color: #ffffe0; }
        
        .highlight {
          background: linear-gradient(100deg, rgba(255,255,0,0) 0%, rgba(255,255,0,0.4) 3%, rgba(255,255,0,0.2) 100%);
          display: inline;
          padding: 0 4px;
        }
        
        .paper-border {
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          border: 2px solid #333;
        }

        .ink-blot::after {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000080' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-2.9C83.7,12.2,74.6,26.7,64.2,38.8C53.8,50.9,42.2,60.6,29.3,66.4C16.4,72.2,2.2,74.1,-10.8,71.8C-23.8,69.5,-35.6,63,-46.6,55.2C-57.6,47.4,-67.8,38.3,-74.6,27.1C-81.4,15.9,-84.8,2.6,-82.1,-9.3C-79.4,-21.2,-70.6,-31.7,-60.7,-40.3C-50.8,-48.9,-39.8,-55.6,-28.4,-64.5C-17,-73.4,-5.2,-84.5,4.9,-83.4C15,-82.3,30,-69,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E") no-repeat center;
            opacity: 0.6;
            position: absolute;
            top: -10px;
            right: -10px;
            pointer-events: none;
        }
      `}</style>

            {/* Hero Section: Mind Map */}
            <div className="max-w-5xl mx-auto mb-16 relative">
                <h1 className="text-center text-4xl md:text-6xl font-['Permanent_Marker'] text-[#CC0000] mb-2 ink-blot relative inline-block left-1/2 -translate-x-1/2">
                    SOURCES FOR THE HISTORY OF MODERN INDIA
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-80">Constructing the Past (18th – 20th Century)</p>

                {/* Simple CSS Mind Map visualization */}
                <div className="flex flex-wrap justify-center gap-6 relative">
                    <div className="bg-white p-6 paper-border border-2 border-dashed border-slate-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40 flex items-center justify-center shadow-lg transform rotate-2">
                        <span className="text-2xl font-bold">SOURCES</span>
                    </div>
                    {/* Branches */}
                    {['Archives (Govt Records)', 'Biographies (Travelers)', 'Newspapers (The Press)', 'Literature (Novels)', 'Paintings (Visuals)', 'Oral Evidence (Folk)'].map((item, i) => (
                        <div key={i} className={`p-4 bg-${i % 2 === 0 ? 'yellow' : 'pink'}-50 paper-border border shadow-sm w-48 text-center font-bold text-lg transform rotate-${(i * 45) % 10 - 5} m-4 mt-20`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION 2: ARCHIVAL MATERIALS */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <div className="absolute top-0 right-0 p-4 transform rotate-3">
                    <span className="text-red-600 font-bold block border-2 border-red-600 p-1 rounded px-3 text-sm">IMPORTANT</span>
                </div>
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080]">2. ARCHIVAL MATERIALS (The Backbone)</h2>
                <p className="text-lg leading-relaxed mb-4">
                    <span className="font-bold bg-yellow-200 px-1">Definition:</span> "Records created as a necessary part of activity (Admin, Legal, Commercial). Not written for history, but used for it!"
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li><strong className="text-[#CC0000]">East India Company (EIC):</strong> 1600–1857 (Trading details).</li>
                    <li><strong className="text-[#CC0000]">British Crown:</strong> 1857–1947 (Admin details).</li>
                    <li><strong>Central Archives (New Delhi):</strong> National Archives of India (NAI).</li>
                    <li><strong>James Rennell:</strong> First Surveyor General of Bengal (1767). <span className="text-[#333] text-sm">(Why? First scientific geographical & socio-economic data maps).</span></li>
                    <li><strong>Key Depts:</strong> Public, Judicial, Revenue, Home Political (1907 onwards).</li>
                </ul>

                {/* INJECTION 1: Published Archives */}
                <div className="mt-8 bg-yellow-50 p-6 sticky-note border border-yellow-200 w-3/4 mx-auto relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-800 opacity-20"></div> {/* Pin hole */}
                    <h3 className="text-xl font-bold text-red-800 mb-2 border-b border-red-200 pb-1">Published Archives (The Official Reports)</h3>
                    <ul className="text-sm space-y-1">
                        <li>• <strong>Parliamentary Papers:</strong> Most important. Enquiries into EIC.</li>
                        <li>• <strong>Reports:</strong> Select Committees of House of Commons.</li>
                        <li>• <strong>Royal Commissions:</strong> Education, Civil Rights, Famine Reports.</li>
                        <li>• <strong>Proceedings:</strong> INC (AICC papers) & Indian States People's Conference.</li>
                    </ul>
                </div>
            </section>

            {/* SECTION 3: THE ARCHIVES OF INDIA */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-3xl font-['Permanent_Marker'] text-center mb-8 text-[#000080]">3. THE ARCHIVES OF INDIA</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* State Archives */}
                    <div className="bg-white p-6 paper-border shadow-md transform -rotate-1">
                        <h3 className="text-xl font-bold text-red-700 mb-4 border-b-2 border-dotted border-red-300">State Archives</h3>
                        <ul className="space-y-3 text-sm">
                            <li><strong>Khalsa Darbar (Lahore):</strong> Records of Ranjit Singh (1800–1849).</li>
                            <li><strong>Peshwa Daftar (Pune):</strong> Maratha history (Alienation Office).</li>
                            <li><strong>Rajasthan Archives (Bikaner):</strong> Jaipur, Jodhpur, Udaipur.</li>
                        </ul>
                    </div>

                    {/* Presidencies */}
                    <div className="bg-white p-6 paper-border shadow-md transform rotate-1">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 border-b-2 border-dotted border-blue-300">Three Presidencies</h3>
                        <ul className="space-y-3 text-sm">
                            <li><strong>Bengal:</strong> Early records lost (1756 Sack). Post-Plassey survive.</li>
                            <li><strong>Madras:</strong> Fort St. George (Oldest - AD 1670).</li>
                            <li><strong>Bombay:</strong> Maharashtra Secretariat Record Office.</li>
                        </ul>
                    </div>

                    {/* European */}
                    <div className="bg-white p-6 paper-border shadow-md transform -rotate-1">
                        <h3 className="text-xl font-bold text-green-700 mb-4 border-b-2 border-dotted border-green-300">European (The Others)</h3>
                        <ul className="space-y-3 text-sm">
                            <li><strong>Portuguese:</strong> Goa (1700–1900). Relations with Vijayanagar.</li>
                            <li><strong>Dutch:</strong> Cochin & Malabar.</li>
                            <li><strong>French:</strong> Chandernagore & Pondicherry. <span className="highlight">Bibliotheque Nationale (Paris)</span>.</li>
                            <li><strong>Danish:</strong> Tranquebar (1777–1845) to Copenhagen.</li>
                        </ul>
                    </div>

                    {/* INJECTION 3: Intermediate */}
                    <div className="bg-orange-50 p-6 paper-border shadow-md transform rotate-2">
                        <h3 className="text-xl font-bold text-orange-800 mb-4 border-b-2 border-dotted border-orange-300">Intermediate Authorities</h3>
                        <p className="text-sm font-bold mb-2">District Collectors & Commissioners</p>
                        <p className="text-xs italic">Why Important?</p>
                        <p className="text-xs">Provide details on Land Revenue Settlements & day-to-day admin that central files miss.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4 & 5 Combined: Judicial, Private & Travelers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                {/* SECTION 4 */}
                <section className="bg-white paper-border p-6 relative">
                    <h2 className="text-2xl font-['Permanent_Marker'] mb-4">4. JUDICIAL & PRIVATE</h2>
                    <div className="space-y-4">
                        <div className="p-3 bg-slate-50 border-l-4 border-blue-900">
                            <strong className="block text-lg">Judicial Records</strong>
                            Mayor's Court (Madras 1689), Supreme Court Bengal (1774).
                            <br /><span className="text-sm text-gray-600">Key Data: Wills & Probates.</span>
                        </div>
                        <div className="p-3 bg-slate-50 border-l-4 border-green-900">
                            <strong className="block text-lg">Private & Foreign</strong>
                            Papers of banks, business houses, nationalists (Nehru Memorial).
                            <br /><strong>UK:</strong> India Office Records.
                            <br /><strong>Pakistan:</strong> Lahore, Peshawar, Sind (Afghan/Iran relations).
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Travelers */}
                <section className="bg-white paper-border p-6 relative">
                    <h2 className="text-2xl font-['Permanent_Marker'] mb-4">5. BIOGRAPHIES & TRAVELERS</h2>
                    <p className="mb-2 text-sm italic">Missionaries: Bishop Heber, Abbe Dubois.</p>
                    <div className="border border-gray-300 rounded p-4 bg-[#f8f8f8]">
                        <ul className="grid grid-cols-1 gap-2 text-sm">
                            <li>• <strong>George Forster</strong></li>
                            <li>• <strong>Benjamin Heyne</strong></li>
                            <li>• <strong>James Burnes</strong> (Court of Sinde)</li>
                            <li>• <strong>Alexander Burnes</strong> (Into Bokhara)</li>
                            <li>• <strong>C.J.C. Davidson</strong> (Upper India)</li>
                            <li>• <strong>John Butler</strong> (Assam)</li>
                            <li>• <strong>Victor Jacquemont</strong> (Kashmir/Punjab)</li>
                            {/* INJECTION 2: Missing Travelers */}
                            <li className="text-blue-800 font-bold">• William Moorcroft (Tibet/Mansarovar)</li>
                            <li className="text-blue-800 font-bold">• Baron Charles (Kashmir/Punjab)</li>
                            <li className="text-blue-800 font-bold">• Modave (French adventurer)</li>
                        </ul>
                    </div>
                </section>
            </div>

            {/* SECTION 6: NEWSPAPERS (The Table) */}
            <section className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl font-['Permanent_Marker']  mb-6 text-[#000080]">6. NEWSPAPERS & PRESS</h2>

                <div className="overflow-x-auto paper-border p-2 bg-white">
                    <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                <th className="p-3 bg-slate-100">Newspaper Name</th>
                                <th className="p-3 bg-slate-100">Editor/Founder</th>
                                <th className="p-3 bg-slate-100">Significance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Bengal Gazette (1780)', 'James Augustus Hickey', 'First Newspaper (Seized 1782)'],
                                ['The Hindu / Swadesamitran', 'G. Subramaniya Iyer', 'Voice of Madras'],
                                ['Kesari / Mahratta', 'B.G. Tilak', 'Nationalist (Marathi/English)'],
                                ['Bengalee', 'Surendranath Banerjea', 'Liberal voice'],
                                ['Amrita Bazar Patrika', 'Sisir Kumar Ghosh', 'Turned English overnight (Vernacular Act)'],
                                ['Sudharak', 'G.G. Agarkar', 'Social Reform'],
                                ['Voice of India', 'Dadabhai Naoroji', 'Economic Drain Theory'],
                                ['Indian Sociologist', 'Shyamji Krishnavarma', 'London (Revolutionary)'],
                                ['Bande Mataram', 'Madam Cama', 'Paris'],
                                ['Ghadar', 'Lala Hardayal', 'San Francisco'],
                                // INJECTION 3: Regional & Later
                                ['Tribune / Akhbar-i-Am', 'Dayal Singh Majithia', 'Punjab Voice'],
                                ['Som Prakash', 'Ishwar Chandra Vidyasagar', 'Bengal (Corrected from Banganivasi)'],
                                ['Kavivachan Sudha', 'Bhartendu Harishchandra', 'Hindi'],
                                ['Indu Prakash', 'V.N. Mandlik', 'Anglo-Marathi (Criticized moderates)'],
                                ['Bombay Chronicle (1913)', 'Pherozeshah Mehta', 'Important Nationalist Daily'],
                                ['National Herald (1938)', 'Jawaharlal Nehru', 'Voice of Freedom Struggle']
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-gray-300 hover:bg-yellow-50">
                                    <td className="p-3 font-bold">{row[0]}</td>
                                    <td className="p-3">{row[1]}</td>
                                    <td className="p-3 italic max-w-xs">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* INJECTION From Part 3: Revolutionary & Socialist */}
                <div className="mt-8 flex flex-col md:flex-row gap-6 relative">
                    {/* Paperclip visual effect roughly */}
                    <div className="w-full bg-red-50 paper-border p-6 relative">
                        <div className="absolute -top-4 left-10 w-4 h-12 bg-gray-400 rounded-full opacity-50 transform rotate-12"></div> {/* Fake clip */}
                        <h3 className="text-xl font-bold text-red-900 mb-4">Voices of Revolution & Change (Hidden List)</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">Revolutionary</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    <li><strong>Yugantar:</strong> Barindra Ghosh</li>
                                    <li><strong>Sandhya:</strong> Brahmabandhab Upadhyay</li>
                                    <li><strong>Kal:</strong> Maharashtra</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">Socialist/Leftist</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    <li><strong>Langal/Ganabani:</strong> Bengal (1927)</li>
                                    <li><strong>Kirti:</strong> Punjab (1926)</li>
                                    <li><strong>Kranti:</strong> Maharashtra (1927)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">Dalit/Social Reform</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    <li><strong>Kudi Arasu:</strong> Periyar (Tamil)</li>
                                    <li><strong>Bahishkrit Bharat:</strong> Ambedkar (1927)</li>
                                    <li><strong>Achhut Daman:</strong> Ram Tirth</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: LITERATURE & PAINTING */}
            <section className="bg-white paper-border p-8 max-w-4xl mx-auto mb-16 shadow-lg">
                <h2 className="text-3xl font-['Permanent_Marker'] mb-8 text-[#000080] text-center">7. CREATIVE LITERATURE & PAINTING</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>📚</span> The Novel
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            <li><strong>Bankim Chandra:</strong> <em>Anandamath</em> (Sanyasi Revolt), <em>Rajasimha</em>.</li>
                            <li><strong>Gujarati:</strong> <em>Hind ane Britannia</em>, <em>Saraswatichandra</em> (Tripathi).</li>
                            <li><strong>Tamil:</strong> <em>Mohana Rajani</em> (Girija Devi).</li>
                            <li><strong>Malayalam:</strong> <em>Balyakalasakhi</em> (Basheer), <em>Tottiyude Makan</em>, <em>Chemmeen</em>.</li>
                            <li><strong>Telugu:</strong> <em>Keelubommalu</em> (Puppets).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span>🎨</span> Painting (Visuals)
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            <li>
                                <strong>Patna Kalam:</strong> Company Paintings (Trades/Festivals).
                            </li>
                            <li>
                                <strong>1857 Revolt Art:</strong>
                                <br /><span className="text-sm pl-4 block">- <em>Relief of Lucknow</em> (Barker) — Pro-British.</span>
                                <span className="text-sm pl-4 block">- <em>In Memoriam</em> (Paton) — British Victimhood.</span>
                            </li>
                            <li>
                                <strong>Bengal School:</strong> Abanindranath Tagore, Nandalal Bose.
                            </li>
                            <li>
                                <strong className="text-purple-800">Kalighat Paintings:</strong> Calcutta (Social Satire).
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE CHRONOLOGY TIMELINE */}
            <section className="max-w-3xl mx-auto relative mb-20 pl-8">
                <h2 className="text-3xl font-['Permanent_Marker'] mb-10 text-center">Timeline of History Sources</h2>
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-blue-900 to-transparent"></div>

                {[
                    { year: '1670', event: 'Madras Records begin (Fort St. George)' },
                    { year: '1689', event: "Mayor's Court established (Madras)" },
                    { year: '1767', event: 'James Rennell becomes Surveyor General' },
                    { year: '1774', event: 'Supreme Court established in Bengal' },
                    { year: '1780', event: 'First Newspaper (Bengal Gazette) published' },
                    { year: '1882', event: "Anandamath published" },
                    { year: '1891', event: 'National Archives (NAI) established' },
                    { year: '1907', event: 'Home Political series begins (Govt Records)' },
                ].map((item, i) => (
                    <div key={i} className="mb-8 relative pl-8">
                        <div className="absolute left-6 top-2 w-5 h-5 bg-white border-4 border-blue-900 rounded-full transform -translate-x-1/2"></div>
                        <div className="bg-white p-4 paper-border shadow-sm inline-block transform hover:scale-105 transition-transform duration-300">
                            <span className="text-2xl font-bold text-red-600 font-['Permanent_Marker'] block">{item.year}</span>
                            <span className="text-lg text-blue-900 font-bold">{item.event}</span>
                        </div>
                    </div>
                ))}
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-50 mt-20">
                ~ End of Handwritten Notes ~
            </div>
        </div>
    );
}
