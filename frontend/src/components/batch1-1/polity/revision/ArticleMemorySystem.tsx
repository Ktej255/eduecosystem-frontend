"use client";

import React, { useState, useEffect } from "react";
import {
    Brain, Lightbulb, GraduationCap, Gamepad2,
    RotateCcw, CheckCircle2, XCircle, Trophy,
    Scale, Shield, Gavel, Wind, Heart,
    Users, Briefcase, Crown, Siren, Landmark,
    Wallet, Search, Vote, Hand
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ARTICLE_MEMORY_DATA, ArticleMemoryItem } from "../data/article-memory-data";
import { motion, AnimatePresence } from "framer-motion";

// Helper to get icon
const getIcon = (hint: string) => {
    const icons: any = {
        Scale, Shield, Gavel, Wind, Heart, Users,
        Briefcase, Crown, Siren, Landmark, Wallet,
        Search, Vote, HandBan: Hand, Hand: Hand,
        Dove: Heart, BuildingAlert: Siren,
        WalletOff: Wallet, Coins: Wallet,
        VoteBox: Vote, Salute: Users,
        Banknote: Wallet, FileChart: Briefcase
    };
    const Icon = icons[hint] || Lightbulb;
    return <Icon size={32} className="text-indigo-600" />;
};

// --- MODE 1: FLASHCARDS ---
function FlashcardMode() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const item = ARTICLE_MEMORY_DATA[currentIndex];

    const nextCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % ARTICLE_MEMORY_DATA.length);
        }, 300);
    };

    const prevCard = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + ARTICLE_MEMORY_DATA.length) % ARTICLE_MEMORY_DATA.length);
        }, 300);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto py-8">
            <div className="relative w-full h-80 perspective-1000">
                <motion.div
                    className="w-full h-full relative preserve-3d cursor-pointer"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* FRONT */}
                    <Card className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-6 border-2 border-indigo-200 bg-white shadow-xl hover:shadow-2xl transition-shadow">
                        <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 text-sm px-3 py-1">
                            {item.category}
                        </Badge>
                        <h2 className="text-4xl font-black text-slate-800 mb-2">{item.article}</h2>
                        <p className="text-slate-500 text-sm">Click to reveal provision</p>
                    </Card>

                    {/* BACK */}
                    <Card className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                            <div className="text-white scale-125">{getIcon(item.visualHint)}</div>
                        </div>
                        <h3 className="text-xl font-bold text-center mb-2">{item.provision}</h3>
                        <div className="bg-white/10 p-3 rounded-lg mt-2 w-full text-center backdrop-blur-sm border border-white/20">
                            <p className="text-sm font-mono text-yellow-300">💡 {item.mnemonic}</p>
                        </div>
                    </Card>
                </motion.div>
            </div>

            <div className="flex gap-4 items-center">
                <Button variant="outline" onClick={prevCard}>Previous</Button>
                <span className="text-slate-500 font-mono text-sm">
                    {currentIndex + 1} / {ARTICLE_MEMORY_DATA.length}
                </span>
                <Button variant="default" onClick={nextCard}>Next Card</Button>
            </div>
        </div>
    );
}

// --- MODE 2: MATCHING QUIZ ---
function QuizMode() {
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);

    // Shuffle questions once on mount
    const [questions, setQuestions] = useState<ArticleMemoryItem[]>([]);

    useEffect(() => {
        const shuffled = [...ARTICLE_MEMORY_DATA].sort(() => Math.random() - 0.5).slice(0, 10);
        setQuestions(shuffled);
    }, []);

    const currentQuestion = questions[currentQIndex];

    // Generate options including the correct one
    const options = React.useMemo(() => {
        if (!currentQuestion) return [];
        const distractors = ARTICLE_MEMORY_DATA
            .filter(i => i.id !== currentQuestion.id && i.category === currentQuestion.category) // try to get same category distractors
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        // If not enough same-category, fill with randoms
        if (distractors.length < 3) {
            const more = ARTICLE_MEMORY_DATA
                .filter(i => i.id !== currentQuestion.id && !distractors.includes(i))
                .sort(() => Math.random() - 0.5)
                .slice(0, 3 - distractors.length);
            distractors.push(...more);
        }

        return [currentQuestion, ...distractors]
            .sort(() => Math.random() - 0.5);
    }, [currentQuestion]);

    const handleAnswer = (optionId: string) => {
        if (selectedOption) return;
        setSelectedOption(optionId);
        setShowResult(true);

        if (optionId === currentQuestion.id) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQIndex < questions.length - 1) {
                setCurrentQIndex(prev => prev + 1);
                setSelectedOption(null);
                setShowResult(false);
            } else {
                setIsFinished(true);
            }
        }, 1500);
    };

    if (questions.length === 0) return <div>Loading...</div>;

    if (isFinished) {
        return (
            <div className="text-center py-10 space-y-6">
                <Trophy size={64} className="mx-auto text-yellow-500 animate-bounce" />
                <h2 className="text-3xl font-bold text-slate-800">Quiz Complete!</h2>
                <div className="text-5xl font-black text-indigo-600">
                    {score} / {questions.length}
                </div>
                <p className="text-slate-600">Great job mastering the Articles!</p>
                <Button onClick={() => window.location.reload()}>Play Again</Button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-500">Question {currentQIndex + 1}/{questions.length}</span>
                <span className="text-sm font-bold text-indigo-600">Score: {score}</span>
            </div>
            <Progress value={(currentQIndex / questions.length) * 100} className="mb-8" />

            <Card className="mb-8 border-2 border-slate-200">
                <CardHeader>
                    <Badge className="w-fit mb-2">{currentQuestion.category}</Badge>
                    <CardTitle className="text-xl">Which Article deals with:</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold text-slate-800 text-center py-4">
                        "{currentQuestion.provision}"
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => (
                    <Button
                        key={option.id}
                        variant="outline"
                        className={`h-16 text-lg font-bold border-2
                            ${selectedOption === option.id
                                ? (option.id === currentQuestion.id ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800')
                                : (showResult && option.id === currentQuestion.id ? 'bg-green-50 border-green-300 text-green-700' : 'hover:border-indigo-300 hover:bg-slate-50')
                            }
                        `}
                        onClick={() => handleAnswer(option.id)}
                        disabled={!!selectedOption}
                    >
                        {option.article}
                        {showResult && option.id === currentQuestion.id && <CheckCircle2 className="ml-2" size={20} />}
                        {selectedOption === option.id && option.id !== currentQuestion.id && <XCircle className="ml-2" size={20} />}
                    </Button>
                ))}
            </div>
        </div>
    );
}

// --- MAIN COMPONENT ---
export default function ArticleMemorySystem() {
    return (
        <div className="space-y-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
            {/* HEADER */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <Brain size={28} />
                    <h1 className="text-2xl font-bold">Article Memory System</h1>
                </div>
                <p className="mt-3 text-slate-600">
                    Master key Constitution Articles with Mnemonics &amp; Visual Aids
                </p>
            </div>

            <Tabs defaultValue="arcade" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                    <TabsTrigger value="flashcards" className="flex gap-2">
                        <GraduationCap size={18} /> Flashcards
                    </TabsTrigger>
                    <TabsTrigger value="arcade" className="flex gap-2">
                        <Gamepad2 size={18} /> Article Arcade
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="flashcards">
                    <Card className="bg-white/50 backdrop-blur-sm border-none shadow-none">
                        <CardContent>
                            <FlashcardMode />
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="arcade">
                    <Card className="bg-white border-2 border-indigo-100 shadow-xl">
                        <CardContent>
                            <QuizMode />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
