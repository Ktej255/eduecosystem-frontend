"use client";

import React, { useState } from 'react';
import { GraphoDrill } from '@/lib/graphotherapy/grapho-engine';
import {
    ChevronLeft,
    Camera,
    Check,
    PenTool,
    Info
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { graphotherapyService } from '@/services/graphotherapyService';

export default function DailyDrillMode({ drill }: { drill: GraphoDrill }) {
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!file) return;
        setIsSubmitting(true);

        try {
            // Assume Level 1 for now as per current content implementation
            // In a full implementation, we would determine level based on day number mapping
            await graphotherapyService.completeDay(1, drill.day, file);

            setIsComplete(true);
            toast.success("Analysis Complete! Progress saved.");
        } catch (error) {
            console.error(error);
            toast.error("Failed to save progress. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isComplete) {
        return (
            <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 animate-in zoom-in">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black mb-2">Day {drill.day} Complete!</h2>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                    Great consistency. Your subconscious is rewiring itself one stroke at a time.
                </p>
                <Link href="/student/graphotherapy">
                    <Button className="bg-white text-black hover:bg-neutral-200 rounded-xl px-8 font-bold">
                        Back to Journey
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white pb-20">
            {/* Top Bar */}
            <div className="border-b border-neutral-800 p-4 sticky top-0 bg-neutral-900/80 backdrop-blur z-20 flex justify-between items-center">
                <Link href="/student/graphotherapy" className="p-2 hover:bg-neutral-800 rounded-full">
                    <ChevronLeft className="w-5 h-5 text-neutral-400" />
                </Link>
                <div className="font-bold text-sm">Day {drill.day}: {drill.title}</div>
                <div className="w-9" /> {/* Spacer */}
            </div>

            <div className="max-w-2xl mx-auto p-6 md:p-8">

                {/* Instruction Card */}
                <div className="bg-neutral-800 rounded-3xl p-8 mb-8 border border-neutral-700">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-500/20 p-3 rounded-xl text-green-500">
                            <PenTool className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">Today's Focus</div>
                            <div className="text-2xl font-bold">{drill.focus}</div>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed text-neutral-300 mb-8">
                        {drill.instruction}
                    </p>

                    <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-700/50">
                        <div className="text-xs font-bold text-neutral-500 uppercase mb-4 flex items-center gap-2">
                            <Info className="w-4 h-4" /> Practice Lines
                        </div>
                        <ul className="space-y-4 font-serif text-xl md:text-2xl italic text-green-100">
                            {drill.sampleText.map((line, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="text-neutral-700 not-italic text-sm pt-2">{i + 1}</span>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {drill.tips.map((tip, i) => (
                            <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-lg border border-blue-500/20">
                                Tip: {tip}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Upload Area */}
                <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 text-center">
                    <h3 className="text-xl font-bold mb-2">Submit Your Practice</h3>
                    <p className="text-neutral-400 mb-6 text-sm">
                        Write the lines above on physical paper. <br /> Take a clear photo and upload it for AI Analysis.
                    </p>

                    <div className="border-2 border-dashed border-neutral-700 rounded-2xl p-8 transition-colors hover:border-green-500/50 hover:bg-neutral-700/30 relative">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {file ? (
                            <div className="flex flex-col items-center">
                                <Check className="w-10 h-10 text-green-500 mb-2" />
                                <div className="font-medium text-green-400">{file.name}</div>
                                <div className="text-xs text-neutral-500 mt-1">Ready to analyze</div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <Camera className="w-10 h-10 text-neutral-500 mb-4" />
                                <div className="font-bold text-neutral-300">Tap to Capture</div>
                                <div className="text-xs text-neutral-500 mt-1">or drag and drop image here</div>
                            </div>
                        )}
                    </div>

                    <Button
                        disabled={!file || isSubmitting}
                        onClick={handleSubmit}
                        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl text-lg flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? "Analyzing..." : "Visualize Progress"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
