"use client";

import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Scan, Sparkles, X, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Trait = {
    name: string;
    description: string;
    type: "positive" | "negative" | "neutral";
};

type OverlayCoord = {
    x: number;
    y: number;
    label: string;
};

type AnalysisResult = {
    traits: Trait[];
    overlay_coords: OverlayCoord[];
};

export function WebcamAnalysis() {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImgSrc(imageSrc);
            analyzeImage(imageSrc);
        }
    };

    const analyzeImage = async (base64Image: string) => {
        setIsScanning(true);
        setResult(null);
        try {
            const token = localStorage.getItem("token") || localStorage.getItem("access_token");
            // Strip prefix "data:image/jpeg;base64,"
            const rawBase64 = base64Image.split(",")[1];

            const res = await axios.post(`${API_URL}/grapho-vision/analyze-stream`, {
                image_base64: rawBase64
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setResult(res.data);
            toast.success("Holographic Analysis Complete");
        } catch (error) {
            console.error("Vision Analysis Failed", error);
            toast.error("Could not analyze image");
        } finally {
            setIsScanning(false);
        }
    };

    const reset = () => {
        setImgSrc(null);
        setResult(null);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.1)] border border-gray-800">

            {/* Camera View / Captured Image */}
            {imgSrc ? (
                <img src={imgSrc} alt="Captured" className="w-full h-full object-cover" />
            ) : (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: "environment" }}
                    className="w-full h-full object-cover"
                />
            )}

            {/* Scanning Overlay Effect */}
            {isScanning && (
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute inset-0 bg-cyan-500/10" />
                    <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute left-0 w-full h-1 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"
                    />
                    <div className="absolute center inset-0 flex items-center justify-center">
                        <div className="bg-black/70 text-cyan-400 px-4 py-2 rounded-full flex items-center gap-2 border border-cyan-500/50 backdrop-blur-md">
                            <Loader2 className="animate-spin w-4 h-4" />
                            <span className="font-mono text-sm tracking-widest uppercase">Analyzing Patterns...</span>
                        </div>
                    </div>
                </div>
            )}

            {/* AR Overlay Result */}
            <AnimatePresence>
                {result && (
                    <div className="absolute inset-0 z-30 pointer-events-none p-8">
                        {/* Floating Trait Bubbles */}
                        {result.traits.map((trait, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="absolute"
                                style={{
                                    top: `${20 + (i * 15)}%`,
                                    left: `${10 + (i % 2) * 50}%`
                                }}
                            >
                                <div className="bg-black/60 backdrop-blur border border-cyan-500/30 text-white rounded-lg p-3 shadow-lg max-w-[150px]">
                                    <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        {trait.name}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground leading-tight">
                                        {trait.description}
                                    </div>
                                </div>
                                {/* Connection Line simulation */}
                                <div className="w-[20px] h-[1px] bg-cyan-500/50 absolute top-1/2 -right-[20px]" />
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-40 gap-4">
                {!imgSrc ? (
                    <Button
                        onClick={capture}
                        size="lg"
                        className="rounded-full h-16 w-16 bg-card hover:bg-muted text-black shadow-lg"
                    >
                        <Camera className="w-8 h-8" />
                    </Button>
                ) : (
                    <div className="flex gap-4">
                        <Button
                            onClick={reset}
                            variant="secondary"
                            className="rounded-full px-6 bg-black/50 hover:bg-black/70 text-white backdrop-blur border border-gray-600"
                        >
                            <X className="w-4 h-4 mr-2" />
                            Retake
                        </Button>
                        {!result && !isScanning && (
                            <Button
                                onClick={() => analyzeImage(imgSrc)}
                                className="rounded-full px-6 bg-cyan-600 hover:bg-cyan-500 text-white"
                            >
                                <Scan className="w-4 h-4 mr-2" />
                                Scan Again
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
