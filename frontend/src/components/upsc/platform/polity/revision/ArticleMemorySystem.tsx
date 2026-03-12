"use client";

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Sparkles, Trophy, Lightbulb, Lock, Play, ArrowLeft, Star, Medal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ArticleFlashcards from './ArticleFlashcards';
import ArticleMatchGame from './ArticleMatchGame';
import ArticleMissingLinkGame from './ArticleMissingLinkGame';
import ArticleScenarioGame from './ArticleScenarioGame';
import { motion, AnimatePresence } from 'framer-motion';

export default function ArticleMemorySystem() {
    const [activeTab, setActiveTab] = useState('training');

    // Level System State
    const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
    const [activeLevel, setActiveLevel] = useState<number | null>(null);

    const handleLevelComplete = (level: number) => {
        if (!unlockedLevels.includes(level + 1)) {
            setUnlockedLevels(prev => [...prev, level + 1]);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 font-['Calibri']">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-card opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 flex items-center gap-3">
                        Article Memory Palace <Brain className="text-violet-200" />
                    </h2>
                    <p className="text-lg md:text-xl text-violet-100 leading-relaxed">
                        Stop rote memorization. Start visualizing. <br />
                        Master the 50 most critical Articles through spaced repetition and gamification.
                    </p>
                </div>
            </div>

            {/* Main Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <div className="flex justify-center">
                    <TabsList className="bg-card p-1 rounded-full border border-border shadow-sm">
                        <TabsTrigger
                            value="training"
                            className="rounded-full px-8 py-3 data-[state=active]:bg-violet-600 data-[state=active]:text-white font-bold flex items-center gap-2 transition-all"
                        >
                            <Lightbulb size={18} /> Training Ground
                        </TabsTrigger>
                        <TabsTrigger
                            value="arena"
                            className="rounded-full px-8 py-3 data-[state=active]:bg-fuchsia-600 data-[state=active]:text-white font-bold flex items-center gap-2 transition-all"
                        >
                            <Trophy size={18} /> Battle Arena
                        </TabsTrigger>
                    </TabsList>
                </div>

                <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-sm min-h-[600px]">

                    {/* TRAINING TAB */}
                    <TabsContent value="training" className="mt-0 focus-visible:outline-none animate-in fade-in-50 zoom-in-95 duration-300">
                        <ArticleFlashcards />
                    </TabsContent>

                    {/* ARENA TAB */}
                    <TabsContent value="arena" className="mt-0 focus-visible:outline-none animate-in fade-in-50 zoom-in-95 duration-300">
                        {!activeLevel ? (
                            <LevelSelector unlockedLevels={unlockedLevels} onSelectLevel={setActiveLevel} />
                        ) : (
                            <div className="space-y-4">
                                <Button
                                    onClick={() => setActiveLevel(null)}
                                    variant="ghost"
                                    className="mb-4 hover:bg-muted text-muted-foreground"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Arena
                                </Button>

                                {activeLevel === 1 && <ArticleMatchGame onComplete={() => handleLevelComplete(1)} />}
                                {activeLevel === 2 && <ArticleMissingLinkGame onComplete={() => handleLevelComplete(2)} />}
                                {activeLevel === 3 && <ArticleScenarioGame onComplete={() => handleLevelComplete(3)} />}
                            </div>
                        )}
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
}

// --- Level Selector Component ---
function LevelSelector({ unlockedLevels, onSelectLevel }: { unlockedLevels: number[], onSelectLevel: (lvl: number) => void }) {
    const levels = [
        {
            id: 1,
            title: "The Matchmaker",
            desc: "Drag & Drop Articles to Provisions",
            icon: <Sparkles size={32} />,
            color: "from-blue-500 to-cyan-500",
            textColor: "text-blue-600"
        },
        {
            id: 2,
            title: "The Missing Link",
            desc: "Fill in the blank keywords",
            icon: <Star size={32} />,
            color: "from-orange-500 to-amber-500",
            textColor: "text-orange-600"
        },
        {
            id: 3,
            title: "Scenario Master",
            desc: "Solve real-world constitutional crises",
            icon: <Medal size={32} />,
            color: "from-red-600 to-rose-600",
            textColor: "text-red-600"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-black text-foreground">Choose Your Challenge</h3>
                <p className="text-muted-foreground">Complete levels to unlock the next difficulty.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {levels.map((level) => {
                    const isUnlocked = unlockedLevels.includes(level.id);
                    return (
                        <motion.button
                            key={level.id}
                            disabled={!isUnlocked}
                            onClick={() => onSelectLevel(level.id)}
                            whileHover={isUnlocked ? { scale: 1.03 } : {}}
                            whileTap={isUnlocked ? { scale: 0.98 } : {}}
                            className={`
                                relative p-6 rounded-2xl border-2 text-left h-64 flex flex-col justify-between overflow-hidden transition-all
                                ${isUnlocked
                                    ? 'bg-card border-border shadow-lg hover:shadow-xl hover:border-border'
                                    : 'bg-muted border-slate-100 opacity-70 cursor-not-allowed'
                                }
                            `}
                        >
                            {/* Background decoration */}
                            <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${level.color} opacity-10 rounded-full blur-2xl`}></div>

                            <div>
                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md
                                    ${isUnlocked ? `bg-gradient-to-br ${level.color}` : 'bg-slate-300'}
                                `}>
                                    {isUnlocked ? level.icon : <Lock size={24} />}
                                </div>
                                <h4 className={`text-xl font-black mb-1 ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                                    Level {level.id}
                                </h4>
                                <h5 className={`font-bold ${isUnlocked ? level.textColor : 'text-muted-foreground'}`}>
                                    {level.title}
                                </h5>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground font-medium">
                                    {level.desc}
                                </p>
                                {isUnlocked && (
                                    <div className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${level.textColor}`}>
                                        Play Now <Play size={10} fill="currentColor" />
                                    </div>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
