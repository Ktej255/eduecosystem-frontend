"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun, Smile, Meh, Cloud, Zap, Moon } from "lucide-react";

interface MoodTrackerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MoodTrackerModal({ isOpen, onClose }: MoodTrackerModalProps) {
    const [mood, setMood] = useState<string | null>(null);
    const [energy, setEnergy] = useState(5);
    const [note, setNote] = useState("");

    const moods = [
        { id: "great", icon: Sun, label: "Great", color: "text-yellow-400" },
        { id: "good", icon: Smile, label: "Good", color: "text-green-400" },
        { id: "okay", icon: Meh, label: "Okay", color: "text-blue-400" },
        { id: "low", icon: Cloud, label: "Low", color: "text-muted-foreground" },
        { id: "stressed", icon: Zap, label: "Stressed", color: "text-red-400" },
    ];

    const handleSave = () => {
        // Calculate current slot key to match the checking logic
        const now = new Date();
        const hour = now.getHours();
        const dateStr = now.toISOString().split('T')[0];
        const slots = [0, 6, 9, 12, 15, 18, 21];
        const currentSlot = slots.map(s => s).reverse().find(s => hour >= s);

        if (currentSlot !== undefined) {
            const slotKey = `mood_log_${dateStr}_${currentSlot}`;
            localStorage.setItem(slotKey, "true");
        }

        // Also save generic log for history
        console.log({ mood, energy, note });
        localStorage.setItem("last_mood_log", new Date().toISOString());
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="w-full max-w-md bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-white"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-white/10 flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold font-serif mb-1 text-white">How are you feeling right now?</h2>
                            <p className="text-sm text-muted-foreground">Tracking your mood helps optimize your study schedule.</p>
                        </div>
                        <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Selector Tabs (Mocking the UI in screenshot which had Tabs "Log Mood" | "History") */}
                        <div className="flex bg-black/40 p-1 rounded-xl">
                            <button className="flex-1 py-1.5 text-sm font-medium bg-[#2a2a2a] rounded-lg text-white shadow-sm">Log Mood</button>
                            <button className="flex-1 py-1.5 text-sm font-medium text-muted-foreground hover:text-white transition-colors">History</button>
                        </div>

                        {/* Mood Icons */}
                        <div className="flex justify-between px-2">
                            {moods.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => setMood(m.id)}
                                    className={`flex flex-col items-center gap-2 group transition-all ${mood === m.id ? "scale-110 opacity-100" : "opacity-50 hover:opacity-80"}`}
                                >
                                    <div className={`p-3 rounded-full bg-card/5 group-hover:bg-card/10 transition-colors ${mood === m.id ? "bg-card/10 ring-2 ring-indigo-500/50" : ""}`}>
                                        <m.icon className={`w-8 h-8 ${m.color}`} />
                                    </div>
                                    <span className={`text-xs font-medium ${mood === m.id ? m.color : "text-muted-foreground"}`}>{m.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Energy Slider */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                <Zap size={14} className="text-orange-500" />
                                <span>Energy Level (1-10): {energy}</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={energy}
                                onChange={(e) => setEnergy(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                            />
                            <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                                <span>Exhausted</span>
                                <span>Energetic</span>
                            </div>
                        </div>

                        {/* Note Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Optional Note</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="E.g., Had a good sleep, or feeling distracted..."
                                className="w-full h-20 bg-black/20 border border-white/10 rounded-xl p-3 text-sm text-muted-foreground focus:outline-none focus:border-indigo-500/50 resize-none placeholder:text-muted-foreground"
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/10 bg-card/5 flex justify-end gap-3 rounded-b-2xl">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-bold text-muted-foreground hover:text-white transition-colors"
                        >
                            Snooze 1h
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={!mood}
                            className={`px-6 py-2 rounded-lg text-sm font-bold text-white transition-all ${mood ? "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20" : "bg-gray-700 cursor-not-allowed opacity-50"}`}
                        >
                            Save Log
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
