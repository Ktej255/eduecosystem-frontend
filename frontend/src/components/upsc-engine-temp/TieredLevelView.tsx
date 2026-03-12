import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Lock, Play, Star, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface TieredContent {
    id: number;
    title: string;
    levels: {
        [key: number]: {
            title: string;
            description: string;
            mcqs: MCQ[];
        }
    };
}

interface TieredChapter {
    id: number;
    title: string;
    data?: TieredContent;
}

interface TieredLevelViewProps {
    subjectId: string;
    level: number;
    onBack: () => void;
    chapters: TieredChapter[];
}

export default function TieredLevelView({ subjectId, level, onBack, chapters }: TieredLevelViewProps) {
    const [activeChapter, setActiveChapter] = useState<number | null>(null);
    // State for tracking answers and confidence
    const [answers, setAnswers] = useState<Record<string, { optionIdx: number, confidence: 'sure' | 'guessing' }>>({});
    const [showScore, setShowScore] = useState(false);
    const [suggestion, setSuggestion] = useState<string | null>(null);

    // Auto-select first available chapter with content
    useEffect(() => {
        if (activeChapter === null && chapters.length > 0) {
            const firstWithContent = chapters.find(c => (c.data?.levels?.[level]?.mcqs?.length ?? 0) > 0);
            if (firstWithContent) {
                setActiveChapter(firstWithContent.id);
            } else if (chapters[0]) {
                setActiveChapter(chapters[0].id);
            }
        }
    }, [chapters, level, activeChapter]);

    // Get active chapter data
    const selectedChapterData = chapters.find(c => c.id === activeChapter)?.data;
    const levelData = selectedChapterData?.levels?.[level];
    const questions: MCQ[] = levelData?.mcqs || [];

    const handleAnswer = (qId: string, optionIdx: number, confidence: 'sure' | 'guessing') => {
        setAnswers(prev => ({ ...prev, [qId]: { optionIdx, confidence } }));
    };

    const calculateStats = () => {
        let correct = 0;
        let sureCorrect = 0;
        let luckyGuesses = 0;
        let confidentWrongs = 0;

        questions.forEach(q => {
            const ans = answers[q.id];
            if (ans) {
                const isCorrect = ans.optionIdx === q.correctAnswer;
                if (isCorrect) {
                    correct++;
                    if (ans.confidence === 'sure') sureCorrect++;
                    else luckyGuesses++;
                } else {
                    if (ans.confidence === 'sure') confidentWrongs++;
                }
            }
        });
        return { correct, sureCorrect, luckyGuesses, confidentWrongs };
    };

    // Adaptive Difficulty & Confidence Logic
    useEffect(() => {
        if (showScore) {
            const stats = calculateStats();
            const percentage = (stats.correct / questions.length) * 100;
            const surePercentage = (stats.sureCorrect / questions.length) * 100;

            if (percentage >= 80 && level < 3) {
                if (stats.luckyGuesses > 1) {
                    setSuggestion(`You scored nicely (${percentage}%), but had ${stats.luckyGuesses} lucky guesses. Review those topics before moving to Level ${level + 1}.`);
                } else {
                    setSuggestion(`Excellent command! (${percentage}%). You are definitely ready for Level ${level + 1}.`);
                }
            } else if (percentage < 50) {
                if (stats.confidentWrongs > 1) {
                    setSuggestion(`Watch out! You made ${stats.confidentWrongs} confident mistakes. This indicates misconceptions. Review concepts carefully.`);
                } else {
                    setSuggestion(`It seems Level ${level} is tough (${percentage}%). Consider reviewing previous material.`);
                }
            } else {
                setSuggestion(null);
            }
        }
    }, [showScore]);

    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground dark:hover:text-white mb-6"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Store
            </button>

            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                        ${level === 1 ? 'bg-green-100 text-green-700' :
                            level === 2 ? 'bg-blue-100 text-blue-700' :
                                'bg-purple-100 text-purple-700'}`}>
                        Level {level}
                    </span>
                    <h1 className="text-3xl font-bold text-foreground">{levelData?.title || `Level ${level}`} Module</h1>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl">
                    {levelData?.description || "Select a chapter to begin your practice session."}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Chapter List */}
                <div className="col-span-1 space-y-3">
                    <h3 className="font-bold text-foreground mb-2">Chapters</h3>
                    {chapters.map(ch => (
                        <button
                            key={ch.id}
                            onClick={() => ch.id === 7 || ch.id === 5 || ch.id === 1 ? setActiveChapter(ch.id) : alert("Content coming soon! Try available chapters.")}
                            className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between
                                ${activeChapter === ch.id
                                    ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500'
                                    : 'bg-card dark:bg-[#111] border-border hover:border-blue-300'}`}
                        >
                            <span className={`text-sm font-medium ${activeChapter === ch.id ? 'text-blue-700' : 'text-muted-foreground dark:text-muted-foreground'}`}>
                                {ch.id}. {ch.title}
                            </span>
                            {(ch.id === 7 || ch.id === 5 || ch.id === 1) ? <Play className="w-4 h-4 text-blue-500" /> : <Lock className="w-4 h-4 text-muted-foreground" />}
                        </button>
                    ))}
                </div>

                {/* Question Area */}
                <div className="col-span-1 md:col-span-2">
                    {activeChapter && selectedChapterData ? (
                        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold">{selectedChapterData.title}</h3>
                                <span className="text-sm text-muted-foreground">{questions.length} Questions</span>
                            </div>

                            {!showScore ? (
                                <div className="space-y-8">
                                    {questions.map((q, idx) => (
                                        <div key={q.id} className="relative">
                                            <p className="font-medium text-foreground mb-4">
                                                <span className="text-muted-foreground mr-2">{idx + 1}.</span>
                                                {q.question}
                                            </p>
                                            <div className="space-y-3 pl-6">
                                                {q.options.map((opt, optIdx) => {
                                                    const isSelected = answers[q.id]?.optionIdx === optIdx;
                                                    return (
                                                        <div key={optIdx} className={`rounded-xl border transition-all overflow-hidden ${isSelected ? 'border-blue-500 ring-1 ring-blue-500' : 'border-border'}`}>
                                                            <div
                                                                className={`p-3 text-sm cursor-pointer hover:bg-muted dark:hover:bg-gray-900 ${isSelected ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}
                                                                onClick={() => !answers[q.id] && handleAnswer(q.id, optIdx, 'sure')}
                                                            >
                                                                {opt}
                                                            </div>

                                                            {/* Confidence Selection (Show only when answer is selected or actively picking) */}
                                                            {isSelected && (
                                                                <div className="flex bg-muted border-t border-border divide-x divide-border dark:divide-gray-600">
                                                                    <button
                                                                        onClick={() => handleAnswer(q.id, optIdx, 'sure')}
                                                                        className={`flex-1 py-1.5 text-xs font-bold transition-colors flex items-center justify-center gap-1
                                                                            ${answers[q.id]?.confidence === 'sure' ? 'bg-green-100 text-green-700' : 'text-muted-foreground hover:text-green-600'}`}
                                                                    >
                                                                        <CheckCircle className="w-3 h-3" /> Sure
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleAnswer(q.id, optIdx, 'guessing')}
                                                                        className={`flex-1 py-1.5 text-xs font-bold transition-colors flex items-center justify-center gap-1
                                                                            ${answers[q.id]?.confidence === 'guessing' ? 'bg-amber-100 text-amber-700' : 'text-muted-foreground hover:text-amber-600'}`}
                                                                    >
                                                                        <Star className="w-3 h-3" /> Guessing
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}

                                    <button
                                        onClick={() => setShowScore(true)}
                                        disabled={Object.keys(answers).length < questions.length}
                                        className="w-full bg-green-600 text-white py-3 rounded-xl font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
                                    >
                                        Submit Test
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Trophy className="w-10 h-10 text-yellow-600" />
                                    </div>

                                    {(() => {
                                        const stats = calculateStats();
                                        return (
                                            <>
                                                <h2 className="text-3xl font-bold mb-2">Score: {stats.correct}/{questions.length}</h2>

                                                <div className="grid grid-cols-3 gap-4 mb-8">
                                                    <div className="bg-green-50 p-3 rounded-xl">
                                                        <div className="text-2xl font-bold text-green-600">{stats.sureCorrect}</div>
                                                        <div className="text-xs text-green-800">True Knowledge</div>
                                                    </div>
                                                    <div className="bg-amber-50 p-3 rounded-xl">
                                                        <div className="text-2xl font-bold text-amber-600">{stats.luckyGuesses}</div>
                                                        <div className="text-xs text-amber-800">Lucky Guesses</div>
                                                    </div>
                                                    <div className="bg-red-50 p-3 rounded-xl">
                                                        <div className="text-2xl font-bold text-red-600">{stats.confidentWrongs}</div>
                                                        <div className="text-xs text-red-800">Misconceptions</div>
                                                    </div>
                                                </div>

                                                {suggestion && (
                                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8 text-left max-w-lg mx-auto">
                                                        <div className="flex items-start gap-3">
                                                            <div className="bg-blue-100 p-2 rounded-lg">
                                                                <Star className="w-5 h-5 text-blue-600" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-1">Recommendation</h4>
                                                                <p className="text-sm text-blue-700 dark:text-blue-400">{suggestion}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex justify-center gap-4">
                                                    <button
                                                        onClick={() => { setShowScore(false); setAnswers({}); }}
                                                        className="px-6 py-2 border border-border rounded-lg font-medium hover:bg-muted"
                                                    >
                                                        Retry
                                                    </button>
                                                    {level < 3 && stats.correct > questions.length * 0.6 && (
                                                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 shadow-md">
                                                            Unlock Level {level + 1}
                                                        </button>
                                                    )}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-muted-foreground min-h-[400px] border-2 border-dashed border-border rounded-2xl">
                            <Star className="w-12 h-12 mb-3 opacity-20" />
                            <p>Select a chapter to start practicing</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
