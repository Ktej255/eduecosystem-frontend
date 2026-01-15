"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, Sparkles, Brain, Flame, Droplets, CheckCircle2, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";

interface ExperienceReportProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
    title?: string;
}

export default function ExperienceReport({ isOpen, onClose, onSubmit, title = "Post-Sadhana Reflection" }: ExperienceReportProps) {
    const [reflections, setReflections] = useState("");
    const [gunas, setGunas] = useState({
        sattva: 50,
        rajas: 30,
        tamas: 20
    });
    const { token } = useAuth();
    const [isSealing, setIsSealing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [aiInsight, setAiInsight] = useState<{ insight: string; state: string; score: number } | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const SENSATION_TAGS = [
        "Silence", "Expansion", "Heat", "Tingling",
        "Lightness", "Heaviness", "Throbbing", "Coolness",
        "Resistance", "Fear", "Joy (Ananda)", "Tears"
    ];

    const handleGunaChange = (guna: keyof typeof gunas, value: number) => {
        setGunas(prev => ({ ...prev, [guna]: value }));
    };

    const handleSeal = async () => {
        setIsSealing(true);

        try {
            // Real API Call
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/retention/experience`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    reflections,
                    gunas
                })
            });

            if (response.ok) {
                const data = await response.json();
                setAiInsight({
                    insight: data.guru_insight,
                    state: data.spiritual_state,
                    score: data.consciousness_score
                });
                setIsComplete(true);
            } else {
                console.error("Failed to seal experience");
                // Fallback to local
                setIsComplete(true);
            }
        } catch (error) {
            console.error("Error sealing experience:", error);
            setIsComplete(true);
        } finally {
            setIsSealing(false);

            // Still save to local as backup log
            const newLog = {
                id: Date.now().toString(),
                text: reflections,
                gunas,
                timestamp: new Date().toISOString(),
                module: title,
                type: "Vichara"
            };
            const existingLogs = JSON.parse(localStorage.getItem("ancient_wisdom_logs") || "[]");
            localStorage.setItem("ancient_wisdom_logs", JSON.stringify([newLog, ...existingLogs]));

            // Close after delay if successful
            setTimeout(() => {
                onSubmit({ reflections, gunas, tags: selectedTags });
                onClose();
            }, 5000); // Longer delay to read insight
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        {/* Status Bar */}
                        <div className="h-1 w-full bg-slate-800">
                            <motion.div
                                className="h-full bg-amber-500"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        <div className="p-8 md:p-12">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4">
                                    <Brain className="w-3 h-3" /> Externalization Phase
                                </div>
                                <h2 className="text-3xl font-serif text-white">{title}</h2>
                                <p className="text-slate-400 mt-2">What shifted within you during this contemplation?</p>
                            </div>

                            <div className="space-y-8">
                                {/* Guna Mixers */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        Qualitative State (Gunas)
                                        <Sparkles className="w-4 h-4 text-amber-400" />
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <GunaSlider
                                            label="Sattva"
                                            icon={<Sparkles className="w-4 h-4" />}
                                            value={gunas.sattva}
                                            color="emerald"
                                            onChange={(v) => handleGunaChange("sattva", v)}
                                            description="Clarity & Peace"
                                        />
                                        <GunaSlider
                                            label="Rajas"
                                            icon={<Flame className="w-4 h-4" />}
                                            value={gunas.rajas}
                                            color="orange"
                                            onChange={(v) => handleGunaChange("rajas", v)}
                                            description="Active Drive"
                                        />
                                        <GunaSlider
                                            label="Tamas"
                                            icon={<Droplets className="w-4 h-4" />}
                                            value={gunas.tamas}
                                            color="indigo"
                                            onChange={(v) => handleGunaChange("tamas", v)}
                                            description="Rest & Stability"
                                        />
                                    </div>
                                </div>

                                {/* Sensations */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">Sensations & Shifts</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {SENSATION_TAGS.map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => {
                                                    if (selectedTags.includes(tag)) {
                                                        setSelectedTags(prev => prev.filter(t => t !== tag));
                                                    } else {
                                                        setSelectedTags(prev => [...prev, tag]);
                                                    }
                                                }}
                                                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${selectedTags.includes(tag)
                                                    ? "bg-amber-500 text-slate-900 border-amber-500"
                                                    : "bg-transparent text-slate-500 border-slate-800 hover:border-slate-600"
                                                    }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Contemplation Text */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">Internal Dialogue / Realizations</h3>
                                    <Textarea
                                        placeholder="Record any flashes of insight or persistent thoughts..."
                                        className="bg-slate-950/50 border-white/5 text-slate-200 min-h-[120px] rounded-2xl focus:ring-amber-500/20"
                                        value={reflections}
                                        onChange={(e) => setReflections(e.target.value)}
                                    />
                                </div>

                                {/* Action */}
                                <div className="pt-4 flex flex-col items-center">
                                    <Button
                                        onClick={handleSeal}
                                        disabled={isSealing || isComplete || !reflections.trim()}
                                        className={`w-full md:w-auto px-12 h-16 rounded-full text-lg font-bold transition-all ${isComplete
                                            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                                            : "bg-amber-500 hover:bg-amber-600 text-slate-950"
                                            } shadow-xl shadow-amber-500/10 disabled:opacity-30`}
                                    >
                                        {isSealing ? (
                                            <div className="flex items-center gap-3">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sealing in Consciousness...
                                            </div>
                                        ) : isComplete ? (
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-6 h-6" />
                                                Sealed Successfully
                                            </div>
                                        ) : (
                                            "Seal in Consciousness"
                                        )}
                                    </Button>
                                    <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-[0.2em]">This records your shift in the Bio-Memory</p>
                                </div>
                            </div>
                        </div>

                        {/* Complete Overlay */}
                        <AnimatePresence>
                            {isComplete && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 text-center p-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-500"
                                    >
                                        <CheckCircle2 className="w-12 h-12" />
                                    </motion.div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Shift Recorded</h3>

                                    {aiInsight ? (
                                        <div className="max-w-md bg-white/5 rounded-xl p-6 border border-emerald-500/30 mt-4 text-left relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-3 opacity-20">
                                                <Sparkles className="w-12 h-12 text-emerald-400" />
                                            </div>
                                            <p className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">Guru Insight</p>
                                            <p className="text-slate-200 italic font-serif text-lg leading-relaxed">"{aiInsight.insight}"</p>

                                            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                                                <div>
                                                    <p className="text-slate-500 text-[10px] uppercase">State</p>
                                                    <p className="text-emerald-100 font-bold text-sm">{aiInsight.state}</p>
                                                </div>
                                                <div>
                                                    <p className="text-slate-500 text-[10px] uppercase">Alignment</p>
                                                    <p className="text-emerald-100 font-bold text-sm">{aiInsight.score}/100</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-slate-400">Your bio-memory has been updated with this realization.</p>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function GunaSlider({ label, icon, value, color, onChange, description }: { label: string; icon: React.ReactNode; value: number; color: string; onChange: (v: number) => void; description: string }) {
    const colorMap: any = {
        emerald: "accent-emerald-500",
        orange: "accent-orange-500",
        indigo: "accent-indigo-500"
    };

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-300">
                    <span className={`p-1.5 rounded-lg bg-white/5 text-${color}-400`}>{icon}</span>
                    <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
                </div>
                <span className="text-xs font-black text-slate-500">{value}%</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className={`w-full h-1.5 rounded-full appearance-none cursor-pointer bg-slate-800 ${colorMap[color]}`}
            />
            <p className="text-[10px] text-slate-500 italic">{description}</p>
        </div>
    );
}
