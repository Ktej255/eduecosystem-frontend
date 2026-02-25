"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, CheckCircle2, XCircle, Loader2, Sparkles } from "lucide-react";
import Webcam from "react-webcam";
import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

interface MudraValidatorProps {
    targetMudraId: string;
    onVerify: () => void;
}

export function HandposeMudraValidator({ targetMudraId, onVerify }: MudraValidatorProps) {
    const webcamRef = useRef<Webcam>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [handLandmarker, setHandLandmarker] = useState<HandLandmarker | null>(null);
    const [recognitionText, setRecognitionText] = useState("Initializing Vision Engine...");

    // Initialize MediaPipe
    useEffect(() => {
        const init = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
            );
            const landmarker = await HandLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                    delegate: "GPU"
                },
                runningMode: "VIDEO",
                numHands: 1
            });
            setHandLandmarker(landmarker);
            setIsLoaded(true);
            setRecognitionText("Vision Active. Show your hand.");
        };
        init();
    }, []);

    // Recognition Loop
    useEffect(() => {
        if (!handLandmarker || !isLoaded) return;

        let animationFrameId: number;
        const run = () => {
            if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
                const video = webcamRef.current.video;
                const startTimeMs = performance.now();
                const results = handLandmarker.detectForVideo(video, startTimeMs);

                if (results.landmarks && results.landmarks.length > 0) {
                    processLandmarks(results.landmarks[0]);
                } else {
                    setRecognitionText("No hand detected");
                }
            }
            animationFrameId = requestAnimationFrame(run);
        };

        const processLandmarks = (landmarks: any[]) => {
            // Landmark IDs:
            // 4: Thumb Tip, 8: Index Tip, 12: Middle Tip, 16: Ring Tip, 20: Pinky Tip
            const thumbTip = landmarks[4];
            const indexTip = landmarks[8];
            const middleTip = landmarks[12];
            const ringTip = landmarks[16];
            const pinkyTip = landmarks[20];

            const dist = (p1: any, p2: any) =>
                Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

            const limit = 0.05; // Proximity threshold

            let detected = false;

            switch (targetMudraId) {
                case 'shunya': // Middle finger to thumb
                    if (dist(middleTip, thumbTip) < limit) detected = true;
                    break;
                case 'prana': // Ring + Little to thumb
                    if (dist(ringTip, thumbTip) < limit && dist(pinkyTip, thumbTip) < limit) detected = true;
                    break;
                case 'apana': // Middle + Ring to thumb
                    if (dist(middleTip, thumbTip) < limit && dist(ringTip, thumbTip) < limit) detected = true;
                    break;
                case 'samana': // All tips together
                    if (dist(indexTip, thumbTip) < limit && dist(middleTip, thumbTip) < limit && dist(ringTip, thumbTip) < limit) detected = true;
                    break;
                case 'udana': // Index + Middle + Ring to thumb
                    if (dist(indexTip, thumbTip) < limit && dist(middleTip, thumbTip) < limit && dist(ringTip, thumbTip) < limit) detected = true;
                    break;
                case 'vyana': // Index + Middle to thumb
                    if (dist(indexTip, thumbTip) < limit && dist(middleTip, thumbTip) < limit) detected = true;
                    break;
                case 'dhyana': // Harder to detect 2 hands, fallback to proximity
                    detected = true; // For now simulation
                    break;
            }

            if (detected && !isVerified) {
                setRecognitionText("MUDRA ALIGNED");
                setIsVerified(true);
                setTimeout(() => onVerify(), 1500);
            } else if (!detected) {
                setRecognitionText(`Forming ${targetMudraId.toUpperCase()}...`);
                setIsVerified(false);
            }
        };

        run();
        return () => cancelAnimationFrame(animationFrameId);
    }, [handLandmarker, isLoaded, targetMudraId, onVerify, isVerified]);

    return (
        <div className="relative w-full h-full bg-black/40 rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center">

            {!isLoaded && (
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Loading Neural Models...</p>
                </div>
            )}

            <AnimatePresence>
                {isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative w-full h-full"
                    >
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                            videoConstraints={{ facingMode: "user" }}
                        />

                        {/* Status Overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent flex flex-col items-center gap-4">
                            <div className={`px-6 py-2 rounded-full border flex items-center gap-3 backdrop-blur-md transition-colors ${isVerified ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-white/5 border-white/10 text-white/60'}`}>
                                {isVerified ? <CheckCircle2 className="w-4 h-4" /> : <Camera className="w-4 h-4" />}
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">{recognitionText}</span>
                            </div>

                            {isVerified && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-[-100px]"
                                >
                                    <Sparkles className="w-16 h-16 text-emerald-400 animate-pulse" />
                                </motion.div>
                            )}
                        </div>

                        {/* Guideline Overlay */}
                        <div className="absolute inset-0 border-[40px] border-black/20 pointer-events-none">
                            <div className="w-full h-full border border-white/10 rounded-2xl flex items-center justify-center">
                                <div className="w-[200px] h-[200px] border-2 border-white/5 border-dashed rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
