"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Zap, CheckCircle, Brain, Target } from "lucide-react";
import axios from "axios";

interface QuickRecallModalProps {
    isOpen: boolean;
    onClose: () => void;
    topic: string;
    topicId: string;
    onResult: (score: number, xp: number) => void;
}

export function QuickRecallModal({ isOpen, onClose, topic, topicId, onResult }: QuickRecallModalProps) {
    const [recallText, setRecallText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ score: number; feedback: string; xp: number; stability: number } | null>(null);

    const handleSubmit = async () => {
        if (!recallText.trim()) return;
        setIsSubmitting(true);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/v1/antigravity/recall/quick`, {
                topic_id: topicId,
                topic_name: topic,
                recall_text: recallText
            });
            setResult({
                score: res.data.score,
                feedback: res.data.feedback,
                xp: res.data.xp_gained,
                stability: res.data.next_stability
            });
            onResult(res.data.score, res.data.xp_gained);
        } catch (error) {
            console.error("Recall failed", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        onClick={() => !isSubmitting && onClose()}
                    />

                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        className="relative w-full max-w-2xl bg-[#12131a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Brain size={16} className="text-purple-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-400/80">Active Recall Mode</span>
                                    </div>
                                    <h2 className="text-3xl font-black text-white">{topic}</h2>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-card/5 rounded-full text-muted-foreground">
                                    <X size={24} />
                                </button>
                            </div>

                            {!result ? (
                                <div className="space-y-6">
                                    <div className="relative">
                                        <textarea
                                            value={recallText}
                                            onChange={(e) => setRecallText(e.target.value)}
                                            placeholder="Write everything you remember about this topic... (Bullet points, concepts, or short paragraphs)"
                                            className="w-full h-64 bg-card/[0.03] border border-white/10 rounded-3xl p-6 text-white placeholder:text-muted-foreground focus:outline-none focus:border-purple-500/50 transition-all resize-none text-lg font-medium leading-relaxed"
                                        />
                                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase">
                                            <span>Press CMD + Enter to Submit</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !recallText.trim()}
                                        className="w-full py-5 bg-card text-black rounded-3xl font-black uppercase tracking-widest hover:bg-purple-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        ) : (
                                            <>Analyze Recall <Send size={18} /></>
                                        )}
                                    </button>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-8 py-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-3xl">
                                            <div className="flex justify-between items-end">
                                                <Target size={32} className="text-purple-400 mb-2" />
                                                <span className="text-3xl font-black text-purple-400">{result.score}%</span>
                                            </div>
                                            <p className="text-[10px] font-black uppercase text-purple-400/60 mt-2">Recall Accuracy</p>
                                        </div>
                                        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-3xl">
                                            <div className="flex justify-between items-end">
                                                <Zap size={32} className="text-green-400 mb-2" />
                                                <span className="text-3xl font-black text-green-400">+{result.xp} XP</span>
                                            </div>
                                            <p className="text-[10px] font-black uppercase text-green-400/60 mt-2">Momentum Gained</p>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-card/[0.03] border border-white/10 rounded-3xl">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                                            <Brain size={14} /> AI Analysis & Feedback
                                        </h4>
                                        <p className="text-lg text-gray-200 leading-relaxed font-medium italic">"{result.feedback}"</p>

                                        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                                <span className="text-xs font-bold text-blue-400">New Stability: {result.stability} Days</span>
                                            </div>
                                            <button
                                                onClick={onClose}
                                                className="px-6 py-2 bg-card/5 hover:bg-card/10 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all"
                                            >
                                                Continue Journey
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
