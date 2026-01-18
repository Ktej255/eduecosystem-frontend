"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sun, Sunset, Moon, Battery, BatteryCharging, BatteryFull, Activity } from 'lucide-react';
import { analyzeEnergy, getSuggestion, EnergyLog } from './BioRhythmEngine';
import { motion } from 'framer-motion';

export default function EnergyLogger() {
    const [energy, setEnergy] = useState({
        morning: 5,
        afternoon: 5,
        evening: 5
    });

    const [suggestions, setSuggestions] = useState<{ morning: string, afternoon: string, evening: string } | null>(null);

    useEffect(() => {
        // Load from local storage if needed
        const saved = localStorage.getItem('dailyEnergy');
        if (saved) {
            setEnergy(JSON.parse(saved));
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('dailyEnergy', JSON.stringify(energy));

        // Generate Suggestions
        setSuggestions({
            morning: getSuggestion(energy.morning),
            afternoon: getSuggestion(energy.afternoon),
            evening: getSuggestion(energy.evening)
        });
    };

    const getIcon = (level: number) => {
        if (level < 4) return <Battery className="text-red-500 h-5 w-5" />;
        if (level < 7) return <BatteryCharging className="text-amber-500 h-5 w-5" />;
        return <BatteryFull className="text-green-500 h-5 w-5" />;
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Morning */}
                <EnergyCard
                    title="Morning"
                    icon={<Sun className="h-5 w-5 text-orange-400" />}
                    value={energy.morning}
                    onChange={(v: number) => setEnergy(prev => ({ ...prev, morning: v }))}
                    energyIcon={getIcon(energy.morning)}
                />

                {/* Afternoon */}
                <EnergyCard
                    title="Afternoon"
                    icon={<Sun className="h-5 w-5 text-yellow-500" />}
                    value={energy.afternoon}
                    onChange={(v: number) => setEnergy(prev => ({ ...prev, afternoon: v }))}
                    energyIcon={getIcon(energy.afternoon)}
                />

                {/* Evening */}
                <EnergyCard
                    title="Evening"
                    icon={<Moon className="h-5 w-5 text-indigo-400" />}
                    value={energy.evening}
                    onChange={(v: number) => setEnergy(prev => ({ ...prev, evening: v }))}
                    energyIcon={getIcon(energy.evening)}
                />
            </div>

            <Button onClick={handleSave} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Activity className="mr-2 h-4 w-4" /> Analyze & Optimze Schedule
            </Button>

            {suggestions && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                >
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Authorized Schedule</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <SuggestionRow time="Morning" suggestion={suggestions.morning} color="border-orange-200 bg-orange-50 dark:bg-orange-900/10" />
                        <SuggestionRow time="Afternoon" suggestion={suggestions.afternoon} color="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10" />
                        <SuggestionRow time="Evening" suggestion={suggestions.evening} color="border-indigo-200 bg-indigo-50 dark:bg-indigo-900/10" />
                    </div>
                </motion.div>
            )}
        </div>
    );
}

function EnergyCard({ title, icon, value, onChange, energyIcon }: any) {
    return (
        <Card className="border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    {icon} {title}
                </CardTitle>
                {energyIcon}
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <span className="text-2xl font-bold">{value}</span>
                    <span className="text-xs text-gray-400 ml-1">/ 10 Energy</span>
                    <Slider
                        value={[value]}
                        max={10}
                        step={1}
                        onValueChange={(v) => onChange(v[0])}
                        className="py-2"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

function SuggestionRow({ time, suggestion, color }: any) {
    return (
        <div className={`p-4 rounded-lg border-l-4 ${color} flex items-start justify-between`}>
            <div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-60 block mb-1">{time} Suggestion</span>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{suggestion}</p>
            </div>
        </div>
    );
}
