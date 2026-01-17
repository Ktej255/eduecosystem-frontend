"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain, Zap, Coffee, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface MoodEntry {
    timestamp: number;
    mood: string;
    energy: number; // 1-10
    note?: string;
}

export default function MoodTracker() {
    const [entries, setEntries] = useState<MoodEntry[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentMood, setCurrentMood] = useState<string | null>(null);
    const [energyLevel, setEnergyLevel] = useState(5);
    const [note, setNote] = useState("");

    // Load entries
    useEffect(() => {
        const saved = localStorage.getItem('mood_tracker_entries');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    // Check for 3-hour prompt
    useEffect(() => {
        const checkPrompt = () => {
            const lastEntryTime = entries.length > 0 ? entries[entries.length - 1].timestamp : 0;
            const now = Date.now();
            const threeHours = 3 * 60 * 60 * 1000;

            if (now - lastEntryTime > threeHours) {
                setIsOpen(true);
            }
        };

        // Check initially and every minute
        checkPrompt();
        const interval = setInterval(checkPrompt, 60000);
        return () => clearInterval(interval);
    }, [entries]);

    const handleSave = () => {
        if (!currentMood) return;

        const newEntry: MoodEntry = {
            timestamp: Date.now(),
            mood: currentMood,
            energy: energyLevel,
            note
        };

        const updated = [...entries, newEntry];
        setEntries(updated);
        localStorage.setItem('mood_tracker_entries', JSON.stringify(updated));

        // Reset and close
        setIsOpen(false);
        setCurrentMood(null);
        setNote("");
        setEnergyLevel(5);
    };

    const MOODS = [
        { id: 'great', label: 'Great', icon: Sun, color: 'text-yellow-500' },
        { id: 'good', label: 'Good', icon: Smile, color: 'text-green-500' },
        { id: 'okay', label: 'Okay', icon: Meh, color: 'text-blue-500' },
        { id: 'low', label: 'Low', icon: Cloud, color: 'text-gray-500' },
        { id: 'stressed', label: 'Stressed', icon: Zap, color: 'text-red-500' },
    ];

    return (
        <>
            {/* Minimal Trigger Button (if closed) */}
            <div className="fixed bottom-4 right-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full shadow-lg border-indigo-200 bg-white dark:bg-slate-800 hover:scale-110 transition-transform"
                    onClick={() => setIsOpen(true)}
                >
                    <Smile className="h-5 w-5 text-indigo-500" />
                </Button>
            </div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>How are you feeling right now?</DialogTitle>
                        <DialogDescription>
                            Tracking your mood helps optimize your study schedule.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                        {/* Mood Selection */}
                        <div className="grid grid-cols-5 gap-2">
                            {MOODS.map((m) => {
                                const Icon = m.icon;
                                const isSelected = currentMood === m.id;
                                return (
                                    <button
                                        key={m.id}
                                        onClick={() => setCurrentMood(m.id)}
                                        className={`flex flex-col items-center gap-2 p-2 rounded-lg transition-all ${isSelected
                                                ? 'bg-indigo-50 ring-2 ring-indigo-500 scale-110'
                                                : 'hover:bg-gray-50'
                                            }`}
                                    >
                                        <Icon className={`h-8 w-8 ${m.color} ${isSelected ? 'fill-current opacity-20' : ''}`} />
                                        <span className="text-xs font-medium text-gray-600">{m.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Energy Level */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-orange-500" />
                                Energy Level (1-10): {energyLevel}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={energyLevel}
                                onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                            <div className="flex justify-between text-xs text-gray-400">
                                <span>Exhausted</span>
                                <span>Energetic</span>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Optional Note</label>
                            <Input
                                placeholder="E.g., Had a good sleep, or feeling distracted..."
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Button variant="ghost" onClick={() => setIsOpen(false)}>Skip</Button>
                        <Button onClick={handleSave} disabled={!currentMood} className="bg-indigo-600">Save Log</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
