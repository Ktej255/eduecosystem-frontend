"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Sparkles, Brain, Zap, Target } from "lucide-react";

interface OnboardingModalProps {
    isOpen: boolean;
    onClose: () => void;
}



export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-full max-w-xl bg-gradient-to-br from-[#1a1b26] to-[#0f0f13] border border-white/10 rounded-[3rem] p-10 shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden"
                    >
                        {/* Internal Glows */}
                        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-600/30 blur-[120px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="text-yellow-400" size={16} />
                                        <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Intelligence Briefing</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-white tracking-tighter">Welcome, Chitra <span className="italic text-gray-500">_</span></h2>
                                </div>
                                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 text-gray-500 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-6 text-gray-400 text-sm font-medium leading-[1.6] mb-10">
                                <p>
                                    I've calibrated your roadmap to prevent information decay. While you attend live classes, I ensure your core subjects remain at <span className="text-white font-bold italic">Escape Velocity.</span>
                                </p>

                                <div className="grid gap-4">
                                    {[
                                        { id: "A", icon: <Brain size={18} />, title: "Classwork Refraction", time: "14:00 - 16:45", color: "text-blue-400", bg: "bg-blue-400/5" },
                                        { id: "B", icon: <Zap size={18} />, title: "Physics Propulsion", time: "17:00 - 20:00", color: "text-green-400", bg: "bg-green-400/5" },
                                        { id: "C", icon: <Target size={18} />, title: "Logic Synthesis", time: "21:00 - 23:00", color: "text-purple-400", bg: "bg-purple-400/5" },
                                    ].map((slot) => (
                                        <div key={slot.id} className={`flex items-center gap-4 p-4 rounded-2xl ${slot.bg} border border-white/5`}>
                                            <div className={`p-2 rounded-xl bg-black/40 ${slot.color}`}>
                                                {slot.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-xs">{slot.title}</h4>
                                                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{slot.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 italic text-center">
                                    <p className="text-xs">
                                        "Your only mission is to turn the <span className="text-red-500 font-black">RED</span> rings <span className="text-green-500 font-black text-sm">GREEN</span>."
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="group relative w-full py-5 rounded-[1.5rem] bg-white text-black font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Initiate Mission <Rocket size={20} />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
