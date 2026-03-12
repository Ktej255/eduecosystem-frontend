"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Meh, Frown, Sun, Cloud, CloudRain, Zap, Coffee, X, History, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/navigation';

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
    const [lastSnoozed, setLastSnoozed] = useState<number>(0);
    const router = useRouter();

    // Load entries & snooze state
    useEffect(() => {
        const saved = localStorage.getItem('mood_tracker_entries');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
        const snoozed = localStorage.getItem('mood_tracker_snoozed');
        if (snoozed) {
            setLastSnoozed(parseInt(snoozed));
        }
    }, []);

    // Check for 3-hour prompt
    // Check for 3-hour prompt based on strict slots
    useEffect(() => {
        const checkPrompt = () => {
            const now = new Date();
            const hour = now.getHours();

            // Define slots: 6, 9, 12, 15, 18, 21
            // If current hour is >= slot AND < next_slot, we are in that slot's window.
            // We check if we have logged for this specific slot today.

            const slots = [6, 9, 12, 15, 18, 21];
            // Find the most recent slot that has passed
            const currentSlot = slots.slice().reverse().find(s => hour >= s);

            if (currentSlot === undefined) return; // Before 6 AM or late night (if we treat <6 as no slot)

            const dateStr = now.toISOString().split('T')[0];
            const slotKey = `mood_log_${dateStr}_${currentSlot}`;

            // specific check: has this specific slot been completed?
            const hasLoggedForSlot = localStorage.getItem(slotKey);

            // Also check snooze (1 hour global cooldown fallback)
            const lastSnoozedTime = localStorage.getItem('mood_tracker_snoozed'); // Read directly to avoid stale state
            if (lastSnoozedTime && (Date.now() - parseInt(lastSnoozedTime) < 60 * 60 * 1000)) {
                return;
            }

            if (!hasLoggedForSlot) {
                setIsOpen(true);
            }
        };

        // Check initially and every minute
        checkPrompt();
        const interval = setInterval(checkPrompt, 60000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array - we read from localStorage directly for critical checks

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

        // Mark current slot as done
        const now = new Date();
        const hour = now.getHours();
        const slots = [6, 9, 12, 15, 18, 21];
        const currentSlot = slots.slice().reverse().find(s => hour >= s);
        if (currentSlot !== undefined) {
            const dateStr = now.toISOString().split('T')[0];
            const slotKey = `mood_log_${dateStr}_${currentSlot}`;
            localStorage.setItem(slotKey, "true");
        }

        // Reset and close
        setIsOpen(false);
        setCurrentMood(null);
        setNote("");
        setEnergyLevel(5);
    };

    const handleClose = (snooze: boolean) => {
        setIsOpen(false);
        if (snooze) {
            const now = Date.now();
            setLastSnoozed(now);
            localStorage.setItem('mood_tracker_snoozed', now.toString());
        }
    };

    const MOODS = [
        { id: 'great', label: 'Great', icon: Sun, color: 'text-yellow-500' },
        { id: 'good', label: 'Good', icon: Smile, color: 'text-green-500' },
        { id: 'okay', label: 'Okay', icon: Meh, color: 'text-blue-500' },
        { id: 'low', label: 'Low', icon: Cloud, color: 'text-muted-foreground' },
        { id: 'stressed', label: 'Stressed', icon: Zap, color: 'text-red-500' },
    ];

    return (
        <>
            {/* Minimal Trigger Button (if closed) */}
            {/* Removed this floating button as per user request to have it in the header/manual area mostly, 
                but keeping it here for now as a fallback or we can hide it. 
                Actually, let's keep it but make it very subtle or remove if the header button is sufficient.
                Plan said: "Implement Snooze logic" - User asked for "pop up after 3 hour not after every click".
                User also said: "update by the word mood tracker... in that particular page if student want to get access".
                So maybe we hide the floating button? Let's keep it for now as an easy access point but maybe less intrusive.
            */}

            <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose(true)}>
                {/* Tapping outside automatically snoozes */}
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>How are you feeling right now?</DialogTitle>
                        <DialogDescription>
                            Tracking your mood helps optimize your study schedule.
                        </DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="log" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="log">Log Mood</TabsTrigger>
                            <TabsTrigger value="history">History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="log" className="space-y-6">
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
                                                : 'hover:bg-muted'
                                                }`}
                                        >
                                            <Icon className={`h-8 w-8 ${m.color} ${isSelected ? 'fill-current opacity-20' : ''}`} />
                                            <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Energy Level */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-orange-500" />
                                    Energy Level (1-10): {energyLevel}
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={energyLevel}
                                    onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Exhausted</span>
                                    <span>Energetic</span>
                                </div>
                            </div>

                            {/* Note */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Optional Note</label>
                                <Input
                                    placeholder="E.g., Had a good sleep, or feeling distracted..."
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <Button variant="ghost" onClick={() => handleClose(true)}>Snooze 1h</Button>
                                <Button onClick={handleSave} disabled={!currentMood} className="bg-indigo-600">Save Log</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="history" className="space-y-4">
                            {entries.length === 0 ? (
                                <div className="text-center py-8 text-muted-foreground">
                                    <TrendingUp className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                    <p>No mood logs yet.</p>
                                </div>
                            ) : (
                                <>
                                    {/* Chart */}
                                    <div className="h-40 w-full bg-muted rounded-lg p-2 border border-border">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={entries.slice(-10)}>
                                                <XAxis
                                                    dataKey="timestamp"
                                                    tickFormatter={(ts) => new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    fontSize={10}
                                                    tick={false}
                                                />
                                                <YAxis domain={[0, 10]} hide />
                                                <Tooltip
                                                    labelFormatter={(label) => new Date(label).toLocaleString()}
                                                    contentStyle={{ fontSize: '12px' }}
                                                />
                                                <Line type="monotone" dataKey="energy" stroke="#f97316" strokeWidth={2} dot={false} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                        <div className="text-center text-[10px] text-muted-foreground mt-1">Last 10 Entries (Energy Trend)</div>
                                    </div>

                                    {/* Recent List */}
                                    <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
                                        {[...entries].reverse().slice(0, 5).map((entry, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 rounded bg-muted text-sm">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-muted-foreground text-xs">
                                                        {new Date(entry.timestamp).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                                                    </span>
                                                    <span className="font-medium capitalize">{entry.mood}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">
                                                        ⚡ {entry.energy}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            variant="outline"
                                            className="w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50"
                                            onClick={() => {
                                                setIsOpen(false);
                                                router.push('/student/upsc/deep-report?tab=mood');
                                            }}
                                        >
                                            View Detailed Analytics
                                        </Button>
                                    </div>
                                </>
                            )}
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
        </>
    );
}
