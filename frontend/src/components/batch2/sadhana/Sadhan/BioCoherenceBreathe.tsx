"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Activity, CheckCircle2, Loader2, Camera } from "lucide-react";
import Webcam from "react-webcam";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

interface BioCoherenceProps {
    onSync: (coherence: number) => void;
}

export function BioCoherenceBreathe({ onSync }: BioCoherenceProps) {
    const webcamRef = useRef<Webcam>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [faceLandmarker, setFaceLandmarker] = useState<FaceLandmarker | null>(null);
    const [breathingState, setBreathingState] = useState<"Inhale" | "Exhale" | "Hold">("Hold");
    const [coherenceScore, setCoherenceScore] = useState(0);

    // Movement tracking state
    const historyRef = useRef<{ y: number; t: number }[]>([]);
    const lastYRef = useRef(0);

    useEffect(() => {
        const init = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
            );
            const landmarker = await FaceLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                numFaces: 1
            });
            setFaceLandmarker(landmarker);
            setIsLoaded(true);
        };
        init();
    }, []);

    useEffect(() => {
        if (!faceLandmarker || !isLoaded) return;

        let animationFrameId: number;
        const run = () => {
            if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
                const video = webcamRef.current.video;
                const startTimeMs = performance.now();
                const results = faceLandmarker.detectForVideo(video, startTimeMs);

                if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                    // Landmark 1: Tip of the nose
                    const noseTip = results.faceLandmarks[0][1];
                    processNoseMovement(noseTip.y);
                }
            }
            animationFrameId = requestAnimationFrame(run);
        };

        const processNoseMovement = (noseY: number) => {
            const now = Date.now();

            // Low-pass filter to smooth micro-jitters
            const smoothY = lastYRef.current * 0.8 + noseY * 0.2;
            lastYRef.current = smoothY;

            historyRef.current.push({ y: smoothY, t: now });
            if (historyRef.current.length > 60) historyRef.current.shift(); // 2 seconds window at 30fps

            if (historyRef.current.length < 30) return;

            // Analyze trend
            const startY = historyRef.current[0].y;
            const endY = historyRef.current[historyRef.current.length - 1].y;
            const diff = endY - startY;

            // Inhalation (nose moves slightly down as head tilts back or chest expands)
            // Note: MediaPipe Y is inverted (0 at top, 1 at bottom)
            const threshold = 0.005; // Sensitivity calibration

            if (diff > threshold) {
                setBreathingState("Inhale");
            } else if (diff < -threshold) {
                setBreathingState("Exhale");
            } else {
                setBreathingState("Hold");
            }

            // Simple coherence scoring (simulated for now based on movement consistency)
            const velocity = Math.abs(diff);
            const score = Math.max(0, Math.min(100, (1 - velocity * 10) * 100));
            setCoherenceScore(prev => prev * 0.95 + score * 0.05);
            onSync(coherenceScore);
        };

        run();
        return () => cancelAnimationFrame(animationFrameId);
    }, [faceLandmarker, isLoaded, coherenceScore, onSync]);

    return (
        <div className="relative w-full h-full bg-black/60 rounded-3xl overflow-hidden border border-white/10">
            {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20 bg-black/80">
                    <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Calibrating Lung Markers...</p>
                </div>
            )}

            <Webcam
                ref={webcamRef}
                audio={false}
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
                videoConstraints={{ facingMode: "user" }}
            />

            {/* Bio-Feedback UI */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                        <Activity className="w-4 h-4 text-sky-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Bio-Coherence: {Math.floor(coherenceScore)}%</span>
                    </div>
                    {coherenceScore > 80 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-sky-500 text-black px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest"
                        >
                            Optimal Rhythm
                        </motion.div>
                    )}
                </div>

                {/* The Guiding Sphere (Reacting to Bio-Feedback) */}
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        animate={{
                            scale: breathingState === "Inhale" ? 1.5 : breathingState === "Exhale" ? 1 : 1.25,
                            boxShadow: breathingState === "Inhale" ? "0 0 100px rgba(56, 189, 248, 0.4)" : "0 0 20px rgba(56, 189, 248, 0.1)"
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="w-32 h-32 rounded-full border-2 border-sky-400/50 flex items-center justify-center relative"
                    >
                        <div className="absolute inset-2 border border-sky-400/20 rounded-full animate-ping" />
                        <Wind className="w-8 h-8 text-sky-400 opacity-60" />
                    </motion.div>

                    <div className="text-center">
                        <motion.div
                            key={breathingState}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-serif text-white uppercase tracking-[0.2em] italic"
                        >
                            {breathingState}
                        </motion.div>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mt-2">Closed-Loop Integration</p>
                    </div>
                </div>

                <div className="flex justify-center gap-2">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                height: 4 + (Math.sin(i * 0.5 + Date.now() * 0.005) * 8),
                                opacity: coherenceScore / 100
                            }}
                            className="w-1 bg-sky-500/50 rounded-full"
                        />
                    ))}
                </div>
            </div>

            {/* Sensor visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[100px] bg-sky-500/20 pointer-events-none">
                <motion.div
                    animate={{ y: (lastYRef.current - 0.5) * 200 }}
                    className="w-4 h-4 border border-sky-400 rounded-full -ml-[7px]"
                />
            </div>
        </div>
    );
}
