"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { STEP_VISUAL_DATA } from '@/components/batch2/sadhana/data/step-nodes';
import StepVisualizer from '@/components/batch2/sadhana/StepVisualizer';
import { Languages, Info } from 'lucide-react';

export default function SadhanaStepPage() {
    const params = useParams();
    const stepId = parseInt(params.id as string, 10);
    const [language, setLanguage] = useState<'en' | 'hi'>('en');

    const stepData = STEP_VISUAL_DATA[stepId];

    if (!stepData) {
        return (
            <div className="min-h-screen bg-[#FDF8F0] p-4 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 border border-amber-200 shadow-inner">
                    <Info className="w-8 h-8 text-amber-500" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-amber-950 mb-2">Step Content Locked</h1>
                <p className="text-amber-800/80 max-w-md">The visual manuscript for this step is currently being transcribed by the Acharyas. Please check back soon.</p>
            </div>
        );
    }

    return (
        <div className="min-h-[100dvh] bg-[#FDF8F0] pt-24 pb-8 px-4 md:px-8 flex flex-col items-center">

            <div className="w-full max-w-6xl mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-1">Step {stepId}</h2>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-950">
                        {language === 'en' ? stepData.title.en : stepData.title.hi}
                    </h1>
                </div>

                {/* Language Toggle */}
                <div className="bg-white/80 backdrop-blur-md p-1 rounded-xl flex gap-1 border border-amber-200 shadow-sm shrink-0">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${language === 'en' ? 'bg-amber-100 text-amber-900 shadow-sm' : 'text-stone-500 hover:bg-stone-50'}`}
                    >
                        <Languages className="w-4 h-4 opacity-50" />
                        English
                    </button>
                    <button
                        onClick={() => setLanguage('hi')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${language === 'hi' ? 'bg-amber-100 text-amber-900 shadow-sm' : 'text-stone-500 hover:bg-stone-50'}`}
                    >
                        <span className="font-serif">अ</span>
                        हिंदी
                    </button>
                </div>
            </div>

            {/* Visualizer Canvas */}
            <div className="w-full max-w-6xl flex-1 min-h-[65vh] rounded-[2rem] p-3 md:p-6 bg-white shadow-xl border border-amber-50">
                <StepVisualizer stepData={stepData} language={language} />
            </div>

            <div className="max-w-6xl w-full mt-6 text-center">
                <p className="text-sm text-amber-800/60 font-medium">
                    {language === 'en'
                        ? 'Drag the canvas to pan. Concepts flow sequentially from top to bottom.'
                        : 'पैन करने के लिए कैनवास खींचें। अवधारणाएँ क्रमिक रूप से ऊपर से नीचे की ओर बहती हैं।'}
                </p>
            </div>

        </div>
    );
}
