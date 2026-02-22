"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Calendar, Crown, RefreshCw, Palmtree, Rocket, Zap } from 'lucide-react';
import { toast } from 'sonner';

export default function SeasonManager() {
    const [currentSeason, setCurrentSeason] = useState("Season 5: Galactic Mind");
    const [theme, setTheme] = useState("space");
    const [endDate, setEndDate] = useState("2026-03-31");
    const [isActive, setIsActive] = useState(true);

    const themes = [
        { id: 'space', name: 'Space Age', icon: Rocket, color: 'bg-indigo-500' },
        { id: 'nature', name: 'Zen Garden', icon: Palmtree, color: 'bg-green-500' },
        { id: 'cyber', name: 'Cyberpunk', icon: Zap, color: 'bg-purple-500' },
        { id: 'royal', name: 'Royal Court', icon: Crown, color: 'bg-amber-500' },
    ];

    const handleSave = () => {
        toast.success("Season configuration updated!");
    };

    const handleResetLeaderboards = () => {
        // Confirm dialog would go here
        toast.info("Leaderboards have been archived and reset for the new season.");
    };

    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-card dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-600 dark:text-indigo-500">
                    <RefreshCw className="w-5 h-5" />
                    Season Manager
                </CardTitle>
                <p className="text-xs text-neutral-500">Configure global gamification themes and cycles.</p>
            </CardHeader>
            <CardContent className="space-y-6">

                <div className="space-y-2">
                    <Label>Active Season Name</Label>
                    <Input
                        value={currentSeason}
                        onChange={(e) => setCurrentSeason(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>End Date</Label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                            <Input
                                type="date"
                                className="pl-9"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2 flex flex-col justify-end pb-2">
                        <div className="flex items-center justify-between border p-2 rounded-md">
                            <Label className="cursor-pointer" htmlFor="season-active">Season Active</Label>
                            <Switch
                                id="season-active"
                                checked={isActive}
                                onCheckedChange={setIsActive}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <Label>Season Theme (Visual Override)</Label>
                    <div className="grid grid-cols-2 gap-3">
                        {themes.map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTheme(t.id)}
                                className={`
                                    flex items-center gap-2 p-2 rounded-lg border transition-all
                                    ${theme === t.id
                                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-500'
                                        : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800'}
                                `}
                            >
                                <div className={`w-8 h-8 rounded-full ${t.color} text-white flex items-center justify-center`}>
                                    <t.icon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium">{t.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-4 space-y-3">
                    <Button onClick={handleSave} className="w-full">
                        Save Configuration
                    </Button>
                    <Button
                        variant="destructive"
                        className="w-full border-red-200 text-red-600 hover:bg-red-50"
                        onClick={handleResetLeaderboards}
                    >
                        Archive & Reset Leaderboards
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
}
