"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Flame, Shield, Activity, Fingerprint, BookOpen, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CORE_SADHANAS, PRAYASHCHITTA_METHODS } from './data/sadhana-data';
import { useSadhanaProgress } from './hooks/useSadhanaProgress';
import { useBatch2Events } from '../hooks/useBatch2Events';

type WizardStep = 'choose' | 'configure' | 'vow' | 'sealed';

const VOWS = {
    ganesha: { en: "I commit to chanting the Ganesha mantra 1,25,000 times over {days} days. I will not break this vow. May Sri Ganapati remove all obstacles.", hi: "मैं {days} दिनों में गणेश मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ। मैं यह व्रत नहीं तोड़ूंगा/गी।" },
    guru: { en: "I commit to chanting the Guru mantra 1,25,000 times over {days} days. I dedicate this practice to the awakening of the inner guide.", hi: "मैं {days} दिनों में गुरु मंत्र का 1,25,000 बार जप करने की प्रतिज्ञा करता/करती हूँ।" },
    gayatri: { en: "I commit to the Gayatri Sadhana, chanting the supreme light mantra {count} times over {days} days.", hi: "मैं गायत्री साधना हेतु {days} दिनों में {count} बार गायत्री मंत्र का जप करने की प्रतिज्ञा करता/करती हूँ।" },
    'sri-suktam': { en: "I commit to the Sri Suktam Puruscharana of 16 nights. I have completed the 960-day preparation.", hi: "मैं 16 रात्रि की श्री सूक्तम पुरुश्चरण साधना हेतु प्रतिज्ञा करता/करती हूँ।" },
};

export function SankalpaWizardImmersive() {
    const { progress, signSankalpa, resetSankalpa } = useSadhanaProgress();
    const { logEvent } = useBatch2Events();
    const [step, setStep] = useState<WizardStep>(progress.activeSadhanaId ? 'sealed' : 'choose');
    const [selectedSadhanaId, setSelectedSadhanaId] = useState<string | null>(progress.activeSadhanaId);

    // Hold-to-confirm logic
    const [isHolding, setIsHolding] = useState(false);
    const [holdProgress, setHoldProgress] = useState(0);
    const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const controls = useAnimation();
    const [showPrayashchitta, setShowPrayashchitta] = useState(false);
    const [selectedAtonement, setSelectedAtonement] = useState<string | null>(null);
    const [holdAtonementProgress, setHoldAtonementProgress] = useState(0);
    const atonementIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const audioAnalyserRef = useRef<AnalyserNode | null>(null);
    const [voiceSignature, setVoiceSignature] = useState<number[]>([]);
    const [isMicActive, setIsMicActive] = useState(false);

    const PRAY_ICONS: Record<string, any> = {
        BookOpen: BookOpen,
        Flame: Flame,
        Shield: Shield,
        CheckCircle2: CheckCircle2,
        AlertTriangle: AlertTriangle
    };

    const selectedSadhana = CORE_SADHANAS.find(s => s.id === selectedSadhanaId);

    // Dynamic Background logic based on state
    const bgControls = useAnimation();

    useEffect(() => {
        if (step === 'vow') {
            bgControls.start({ filter: 'brightness(0.3) contrast(1.5)', transition: { duration: 2 } });
        } else if (step === 'sealed') {
            bgControls.start({ filter: 'brightness(0.8) contrast(1.2)', scale: 1.05, transition: { duration: 3 } });
        } else {
            bgControls.start({ filter: 'brightness(0.5) contrast(1)', scale: 1, transition: { duration: 1 } });
        }
    }, [step, bgControls]);

    // Handle Hold-to-Seal physics
    const startHold = () => {
        setIsHolding(true);
        controls.start({ scale: 0.95, transition: { duration: 0.2 } });

        let localProgress = 0;
        holdIntervalRef.current = setInterval(() => {
            localProgress += 2; // 2% per tick (50ms) -> 2.5s total hold time
            setHoldProgress(localProgress);

            // Camera shake effect intensifies
            if (localProgress > 30) {
                const intensity = (localProgress - 30) / 10;
                bgControls.start({
                    x: (Math.random() - 0.5) * intensity,
                    y: (Math.random() - 0.5) * intensity,
                    transition: { duration: 0.05 }
                });
            }

            if (localProgress >= 100) {
                if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
                captureFinalSignature();
                handleSeal();
            }
        }, 50);

        // Start Mic Data Capture
        startMic();
    };

    const startMic = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const source = ctx.createMediaStreamSource(stream);
            const analyser = ctx.createAnalyser();
            analyser.fftSize = 256;
            source.connect(analyser);
            audioAnalyserRef.current = analyser;
            setIsMicActive(true);
        } catch (err) {
            console.error("Mic access denied", err);
        }
    };

    const captureFinalSignature = () => {
        if (!audioAnalyserRef.current) return;
        const bufferLength = audioAnalyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        audioAnalyserRef.current.getByteFrequencyData(dataArray);

        // Take 8 representative bins for the yantra geometry
        const signature = Array.from(dataArray.slice(0, 32))
            .filter((_, i) => i % 4 === 0)
            .map(v => v / 255);
        setVoiceSignature(signature);

        // Stop Mic
        const stream = (audioAnalyserRef.current.context as any).stream;
        stream?.getTracks().forEach((track: any) => track.stop());
        setIsMicActive(false);
    };

    const startHoldAtonement = () => {
        let localProgress = 0;
        atonementIntervalRef.current = setInterval(() => {
            localProgress += 5;
            setHoldAtonementProgress(localProgress);
            if (localProgress >= 100) {
                if (atonementIntervalRef.current) clearInterval(atonementIntervalRef.current);
            }
        }, 100);
    };

    const stopHoldAtonement = () => {
        if (holdAtonementProgress < 100) {
            setHoldAtonementProgress(0);
        }
        if (atonementIntervalRef.current) clearInterval(atonementIntervalRef.current);
    };

    const stopHold = () => {
        setIsHolding(false);
        setHoldProgress(0);
        controls.start({ scale: 1, transition: { type: 'spring', bounce: 0.5 } });
        bgControls.start({ x: 0, y: 0, transition: { duration: 0.2 } });
        if (holdIntervalRef.current) {
            clearInterval(holdIntervalRef.current);
        }
        // If they release early, dump the mic
        if (isMicActive) {
            setIsMicActive(false);
        }
    };

    const handleSeal = () => {
        if (selectedSadhanaId && selectedSadhana) {
            signSankalpa(selectedSadhanaId);
            logEvent('sankalpa_signed', {
                module: selectedSadhana.name,
                data: {
                    id: selectedSadhana.id,
                    signature: `${selectedSadhana.id}-${Date.now().toString(36).toUpperCase()}`
                }
            });
            setStep('sealed');
            stopHold();
        }
    };

    const handleCompletePrayashchitta = () => {
        resetSankalpa();
        setStep('choose');
        setSelectedSadhanaId(null);
        setHoldProgress(0);
    };

    return (
        <div className="fixed inset-0 bg-black text-amber-50 font-serif overflow-hidden z-50 flex select-none items-center justify-center">

            {/* Cinematic Background */}
            <motion.div
                animate={bgControls}
                className="absolute inset-0 bg-[url('/bg-patterns/sacred-geo-1.jpg')] bg-cover bg-center opacity-20 pointer-events-none mix-blend-screen"
                style={{ transformOrigin: 'center center' }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">

                <AnimatePresence mode="wait">

                    {/* STEP 1: Choose */}
                    {step === 'choose' && (
                        <motion.div
                            key="choose"
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            className="w-full"
                        >
                            <div className="mb-16 text-center">
                                <h1 className="text-sm font-sans font-black tracking-[0.4em] uppercase text-orange-500/80 mb-4">Phase 1</h1>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em] text-white">Select Sankalpa</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {CORE_SADHANAS.map((sadhana, idx) => (
                                    <motion.button
                                        key={sadhana.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => { setSelectedSadhanaId(sadhana.id); setStep('configure'); }}
                                        className="group relative text-left bg-black/40 border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-black uppercase tracking-[0.1em] text-white mb-2 group-hover:text-orange-400 transition-colors">{sadhana.name}</h3>
                                            <p className="text-white/40 font-sans text-xs tracking-widest leading-relaxed mb-6 h-12">{sadhana.description}</p>

                                            <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                                                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-orange-500">{sadhana.goal}</span>
                                                <span className="w-1 h-1 bg-white/20 rounded-full" />
                                                <span className="text-[10px] font-sans uppercase tracking-widest text-white/50">{sadhana.durationDays} Cycles</span>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: Configure */}
                    {step === 'configure' && selectedSadhana && (
                        <motion.div
                            key="configure"
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            className="w-full max-w-2xl text-center"
                        >
                            <button onClick={() => setStep('choose')} className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors mb-12">Return</button>

                            <h2 className="text-xs font-sans font-black tracking-[0.4em] uppercase text-orange-500/80 mb-4">Architecture of Practice</h2>
                            <h3 className="text-4xl font-black uppercase tracking-[0.2em] text-white mb-12">{selectedSadhana.name}</h3>

                            <div className="grid grid-cols-2 gap-y-10 gap-x-12 text-left mb-16">
                                {[
                                    { label: 'Duration', value: `${selectedSadhana.durationDays} Days` },
                                    { label: 'Vestments', value: selectedSadhana.clothing },
                                    { label: 'Orientation', value: selectedSadhana.direction.join(' / ') },
                                    { label: 'Instrument', value: selectedSadhana.beads },
                                ].map(item => (
                                    <div key={item.label} className="border-l border-white/10 pl-6">
                                        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-white/40 mb-2">{item.label}</p>
                                        <p className="text-lg font-serif text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setStep('vow')}
                                className="relative overflow-hidden group bg-orange-600/20 border border-orange-500/50 text-orange-100 px-12 py-4 uppercase tracking-[0.3em] text-xs font-bold transition-all hover:bg-orange-600 hover:border-orange-500"
                            >
                                <span className="relative z-10 transition-transform group-hover:scale-105 inline-block">Enter The Chamber</span>
                            </button>
                        </motion.div>
                    )}

                    {/* STEP 3: The Vow (The Sonic Seal) */}
                    {step === 'vow' && selectedSadhana && (
                        <motion.div
                            key="vow"
                            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(20px)" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full text-center flex flex-col items-center"
                        >
                            <button onClick={() => setStep('configure')} className="absolute top-12 left-12 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">Abort</button>

                            <motion.div
                                animate={{ opacity: isHolding ? 0.3 : 1 }}
                                className="max-w-3xl mx-auto mb-20 transition-opacity duration-1000"
                            >
                                <Flame className="w-8 h-8 text-orange-600 mx-auto mb-8 opacity-50" />
                                <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                    &ldquo;{VOWS[selectedSadhana.id as keyof typeof VOWS]?.en.replace('{days}', String(selectedSadhana.durationDays)).replace('{count}', String(selectedSadhana.rituals[0]?.mantraCount || ''))}&rdquo;
                                </p>
                                <p className="text-lg text-orange-500/60 font-serif leading-relaxed">
                                    {VOWS[selectedSadhana.id as keyof typeof VOWS]?.hi.replace('{days}', String(selectedSadhana.durationDays)).replace('{count}', String(selectedSadhana.rituals[0]?.mantraCount || ''))}
                                </p>
                            </motion.div>

                            {/* The Seal Button */}
                            <div className="relative group cursor-pointer"
                                onMouseDown={startHold}
                                onMouseUp={stopHold}
                                onMouseLeave={stopHold}
                                onTouchStart={startHold}
                                onTouchEnd={stopHold}
                            >
                                {/* Expanding Pulse Rings based on hold progress */}
                                {isHolding && (
                                    <>
                                        <motion.div
                                            initial={{ scale: 1, opacity: 0.8 }}
                                            animate={{ scale: 1 + (holdProgress / 100) * 2, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0 border border-orange-500 rounded-full"
                                        />
                                        <motion.div
                                            initial={{ scale: 1, opacity: 0.5 }}
                                            animate={{ scale: 1 + (holdProgress / 100) * 1.5, opacity: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="absolute inset-0 border border-red-500 rounded-full"
                                        />
                                    </>
                                )}

                                <motion.div
                                    animate={controls}
                                    className="relative z-10 w-32 h-32 rounded-full border border-orange-500/30 bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
                                >
                                    {/* Fill Progress Background */}
                                    <div
                                        className="absolute bottom-0 left-0 w-full bg-orange-600/40 transition-all duration-75"
                                        style={{ height: `${holdProgress}%` }}
                                    />

                                    <Fingerprint className={`w-10 h-10 transition-colors duration-200 z-10 ${isHolding ? 'text-white' : 'text-orange-500'}`} strokeWidth={1} />
                                </motion.div>

                                <p className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-sans uppercase tracking-[0.4em] w-max transition-opacity duration-300 ${isHolding ? 'opacity-0' : 'opacity-100 text-white/50'}`}>
                                    Press and Hold to Seal
                                </p>

                                {isMicActive && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-1 h-4">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    height: isHolding ? [4, 16, 4] : 4
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 0.5,
                                                    delay: i * 0.05
                                                }}
                                                className="w-1 bg-orange-500 rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    )}

                    {/* STEP 4: Sealed / Yantra Output */}
                    {step === 'sealed' && (
                        <motion.div
                            key="sealed"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full text-center flex flex-col items-center"
                        >
                            {/* Generating a "Yantra" visually */}
                            <motion.div
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 1.5, type: 'spring' }}
                                className="relative w-64 h-64 mb-16 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div
                                    className="absolute inset-4 border border-amber-500/20 rotate-45 transform animate-[spin_15s_linear_infinite_reverse]"
                                    style={{
                                        borderRadius: voiceSignature.length > 0 ? `${voiceSignature[0] * 50}%` : '0%',
                                        scale: voiceSignature.length > 1 ? 0.8 + voiceSignature[1] * 0.4 : 1
                                    }}
                                />
                                <div
                                    className="absolute inset-8 border border-white/20 rounded-full"
                                    style={{
                                        borderWidth: voiceSignature.length > 2 ? `${voiceSignature[2] * 4}px` : '1px'
                                    }}
                                />

                                {/* Inner geometry complex mapped to voice signature */}
                                {voiceSignature.length > 0 && (
                                    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 2 }}
                                            d={`M 50,20 L ${50 + voiceSignature[3] * 30},${50 + voiceSignature[4] * 30} L ${50 - voiceSignature[5] * 30},${50 + voiceSignature[4] * 30} Z`}
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                    </svg>
                                )}

                                <Shield className="w-16 h-16 text-orange-400 opacity-80" strokeWidth={1} />
                            </motion.div>

                            <h2 className="text-xs font-sans font-black tracking-[0.5em] uppercase text-orange-500 mb-6 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]">Sankalpa Sealed</h2>
                            <p className="text-2xl font-serif text-white px-8 leading-relaxed mb-4">
                                {CORE_SADHANAS.find(s => s.id === progress.activeSadhanaId)?.name}
                            </p>
                            <p className="text-xs font-sans text-white/40 tracking-[0.2em] mb-16">
                                SIGNATURE: {progress.activeSadhanaId}-{Date.now().toString(36).toUpperCase()}
                            </p>

                            {!showPrayashchitta ? (
                                <button
                                    onClick={() => setShowPrayashchitta(true)}
                                    className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-red-500/50 hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-1"
                                >
                                    Initiate Prayashchitta (Break Vow)
                                </button>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full max-w-4xl"
                                >
                                    <h3 className="text-sm font-sans font-black tracking-[0.4em] uppercase text-red-500 mb-8 mt-12">The Path of Restoration</h3>

                                    {!selectedAtonement ? (
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                            {PRAYASHCHITTA_METHODS.map((method, idx) => (
                                                <motion.button
                                                    key={method.id}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    onClick={() => setSelectedAtonement(method.id)}
                                                    className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-red-500/50 hover:bg-white/10 transition-all group"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mb-3 group-hover:scale-110 transition-transform">
                                                        {React.createElement(PRAY_ICONS[method.icon] || Shield, { className: "w-5 h-5" })}
                                                    </div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors text-center">{method.name}</span>
                                                </motion.button>
                                            ))}
                                            <button onClick={() => setShowPrayashchitta(false)} className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/30 text-[10px] font-bold uppercase tracking-widest text-white/40">Cancel</button>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-3xl mb-12 max-w-xl">
                                                <h4 className="text-[10px] font-sans font-black tracking-[0.3em] uppercase text-red-500/60 mb-4">Selected Expiation</h4>
                                                <p className="text-3xl font-serif text-white mb-4 italic">
                                                    &ldquo;{PRAYASHCHITTA_METHODS.find(m => m.id === selectedAtonement)?.name}&rdquo;
                                                </p>
                                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                                    {PRAYASHCHITTA_METHODS.find(m => m.id === selectedAtonement)?.desc}
                                                </p>

                                                <button
                                                    onMouseDown={startHoldAtonement}
                                                    onMouseUp={stopHoldAtonement}
                                                    onMouseLeave={stopHoldAtonement}
                                                    className="w-full relative py-4 bg-red-600/20 border border-red-500 text-red-100 uppercase tracking-[0.4em] text-[10px] font-black overflow-hidden group"
                                                >
                                                    <div
                                                        className="absolute inset-x-0 bottom-0 bg-red-600 transition-all duration-75"
                                                        style={{ height: `${holdAtonementProgress}%` }}
                                                    />
                                                    <span className="relative z-10">{holdAtonementProgress >= 100 ? 'Atonement Sealed' : 'Hold to Confirm Completion'}</span>
                                                </button>
                                            </div>

                                            {holdAtonementProgress >= 100 && (
                                                <motion.button
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    onClick={handleCompletePrayashchitta}
                                                    className="px-12 py-4 bg-white text-black uppercase tracking-[0.4em] text-[10px] font-black hover:bg-orange-500 hover:text-white transition-colors"
                                                >
                                                    Manifest Reset
                                                </motion.button>
                                            )}
                                            <button onClick={() => { setSelectedAtonement(null); setHoldAtonementProgress(0); }} className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">Choose Another Method</button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
