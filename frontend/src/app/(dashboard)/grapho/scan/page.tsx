"use client";

import { WebcamAnalysis } from "@/components/graphotherapy/WebcamAnalysis";
import { Sparkles, ScanEye, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GraphoScanPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Immersive Header */}
            <div className="container mx-auto py-8 text-center relative z-10">
                <Button
                    variant="ghost"
                    className="absolute left-4 top-8 text-cyan-500 hover:text-cyan-400"
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </Button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-xs font-mono mb-4 animate-pulse">
                    <ScanEye className="w-4 h-4" />
                    VISION AI ACTIVE
                </div>

                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-display tracking-tight">
                    Holographic Analyzer
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Hold your handwriting sample up to the camera. Our Vision AI will scan the strokes and project your personality traits in real-time.
                </p>
            </div>

            {/* Main Scanner Area */}
            <div className="container mx-auto px-4 pb-20 relative z-10">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                <WebcamAnalysis />

                {/* Instructions */}
                <div className="max-w-xl mx-auto mt-12 grid grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 font-bold text-muted-foreground">1</div>
                        <p className="text-sm text-muted-foreground">Write a sentence on white paper</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 font-bold text-muted-foreground">2</div>
                        <p className="text-sm text-muted-foreground">Position clearly in the frame</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                        <div className="w-8 h-8 rounded-full bg-cyan-900/30 text-cyan-500 flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                        <p className="text-sm text-muted-foreground">Click camera to scan & analyze</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
