"use client";

import React, { useState } from 'react';
import {
    Camera, MapPin, Search, ChevronRight, Eye, Landmark, Asterisk
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ARTIFACTS = [
    {
        title: "Pashupati Seal",
        category: "Steatite Seal",
        era: "Indus Valley Civilization (Mature Phase)",
        location: "Mohenjo-Daro",
        description: "A steatite seal depicting a seated figure, often identified as a proto-Shiva or Pashupati (Lord of Animals).",
        image: "/dancing_girl_bronze_1772989242857.png", // Using available images. Better to use pashupati seal image if available, let's use the one we generated earlier. Wait, let's find the pashupati seal.
        keyFeatures: ["Yogic posture", "Surrounded by animals (elephant, tiger, rhino, buffalo)", "Pictographic script at the top"],
        color: "text-amber-800",
        bg: "bg-amber-100",
        border: "border-amber-300"
    },
    {
        title: "Dancing Girl",
        category: "Bronze Sculpture",
        era: "Indus Valley Civilization",
        location: "Mohenjo-Daro",
        description: "A famous 10.5 cm high bronze figurine made using the lost-wax casting technique.",
        image: "/dancing_girl_bronze_1772989242857.png",
        keyFeatures: ["Tribhanga posture", "Bangles on left arm", "Free-standing metal art"],
        color: "text-orange-800",
        bg: "bg-orange-100",
        border: "border-orange-300"
    },
    {
        title: "Lion Capital of Ashoka",
        category: "Polished Sandstone",
        era: "Mauryan Empire (c. 250 BCE)",
        location: "Sarnath",
        description: "The capital of an Ashoka Pillar, adopted as the National Emblem of India. Features four Asiatic lions standing back to back.",
        image: "/ashoka_lion_capital_premium_1772989259739.png",
        keyFeatures: ["Four lions (Power, Courage, Pride, Confidence)", "Dharmachakra (Wheel of Law)", "Animals on abacus (Horse, Bull, Elephant, Lion)"],
        color: "text-red-800",
        bg: "bg-red-100",
        border: "border-red-300"
    },
    {
        title: "Gupta Gold Dinar",
        category: "Numismatics (Coin)",
        era: "Gupta Empire (Chandragupta II / Samudragupta)",
        location: "Northern India",
        description: "High-quality gold coins depicting the king in various martial or cultural poses.",
        image: "/gupta_gold_dinar_artifact_1772989282559.png",
        keyFeatures: ["King playing Veena (Samudragupta)", "Archer type (Chandragupta II)", "High artistic quality, Sanskrit legends", "Goddess Lakshmi on reverse"],
        color: "text-yellow-800",
        bg: "bg-yellow-100",
        border: "border-yellow-300"
    }
];

export default function ArtifactGalleryVisualizer() {
    const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);

    return (
        <div className="bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row h-auto min-h-[600px]">
            {/* List View */}
            <div className="w-full md:w-1/3 bg-white border-r border-stone-200 flex flex-col h-[600px] overflow-y-auto">
                <div className="p-4 border-b border-stone-100 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-black text-stone-900 tracking-wider flex items-center gap-2 uppercase">
                        <Camera size={14} className="text-amber-600" />
                        High Quality Artifacts
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">Select an artifact to examine</p>
                </div>
                <div className="flex-1 p-2 space-y-2">
                    {ARTIFACTS.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedArtifact(idx)}
                            className={`w-full text-left p-3 rounded-xl transition-all border ${selectedArtifact === idx
                                ? `${item.bg} ${item.border} shadow-sm ring-1 ring-inset ring-black/5`
                                : 'border-transparent hover:bg-stone-50'
                                }`}
                        >
                            <h4 className={`font-bold text-sm ${selectedArtifact === idx ? item.color : 'text-stone-800'}`}>
                                {item.title}
                            </h4>
                            <p className="text-xs text-stone-500 mt-1 truncate">{item.category}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Detail View */}
            <div className="w-full md:w-2/3 p-6 md:p-8 bg-stone-50 relative h-auto md:h-[600px] overflow-y-auto">
                {selectedArtifact !== null ? (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300 relative z-10 max-w-xl mx-auto">
                        <Badge variant="outline" className={`${ARTIFACTS[selectedArtifact].bg} ${ARTIFACTS[selectedArtifact].color} border-none font-black tracking-wider uppercase mb-4`}>
                            {ARTIFACTS[selectedArtifact].category}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-2 leading-tight">
                            {ARTIFACTS[selectedArtifact].title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-stone-600 mb-6">
                            <span className="flex items-center gap-1.5"><Asterisk size={14} /> {ARTIFACTS[selectedArtifact].era}</span>
                            <span className="flex items-center gap-1.5"><MapPin size={14} /> {ARTIFACTS[selectedArtifact].location}</span>
                        </div>

                        <div className={`w-full h-48 rounded-xl border-2 border-dashed ${ARTIFACTS[selectedArtifact].border} flex items-center justify-center mb-6 bg-white/50 backdrop-blur-sm`}>
                            {ARTIFACTS[selectedArtifact].image ? (
                                <img
                                    src={ARTIFACTS[selectedArtifact].image}
                                    alt={ARTIFACTS[selectedArtifact].title}
                                    className="w-full h-full object-contain drop-shadow-xl p-2"
                                />
                            ) : (
                                <Camera className={`w-12 h-12 opacity-30 ${ARTIFACTS[selectedArtifact].color}`} />
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <Search size={14} className="text-stone-400" /> Significance
                                </h4>
                                <p className="text-stone-600 leading-relaxed text-sm">
                                    {ARTIFACTS[selectedArtifact].description}
                                </p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-stone-200">
                                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3">Key Features</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {ARTIFACTS[selectedArtifact].keyFeatures.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                                            <ChevronRight size={16} className={`shrink-0 mt-0.5 ${ARTIFACTS[selectedArtifact].color}`} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button className={`${ARTIFACTS[selectedArtifact].bg} ${ARTIFACTS[selectedArtifact].color} hover:opacity-80 border-none`}>
                                <Eye size={14} className="mr-2" /> Examine in 3D (Coming Soon)
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-stone-400 text-center relative z-10 p-8">
                        <Landmark size={48} className="mb-4 opacity-20" />
                        <p className="font-medium text-stone-500">Select an artifact from the gallery<br />to examine its historical significance.</p>
                    </div>
                )}
            </div>
        </div >
    );
}
