"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, BookOpen, Target, Trophy, ChevronRight, Play,
    Pause, CheckCircle, XCircle, BarChart2, ArrowLeft,
    Flag, AlertCircle, Award, Timer, Brain, CheckCircle2,
    RotateCcw, ChevronLeft, HelpCircle, Loader2
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import { useRouter } from 'next/navigation';
import { adaptiveExamApi, AdaptiveQuestion, ExamReport } from '@/services/adaptiveExamApi';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, 
    Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// Mock Test Configuration
const MOCK_TESTS = [
    {
        id: 'prelims-gs1-mini',
        title: 'GS Paper I - Mini Test',
        description: '25 questions covering all GS1 subjects',
        questions: 25,
        duration: 30, // minutes
        subjects: ['Polity', 'History', 'Geography', 'Economy'],
        difficulty: 'Medium',
        attempts: 0,
        bestScore: null,
    },
    {
        id: 'polity-sectional',
        title: 'Polity Adaptive Exam',
        description: 'Focused polity practice with adaptive difficulty',
        questions: 30,
        duration: 36,
        subjects: ['Polity'],
        difficulty: 'Adaptive',
        attempts: 0,
        bestScore: null,
    },
    {
        id: 'economy-sectional',
        title: 'Economy Adaptive Exam',
        description: 'Indian economy concepts - adaptive difficulty',
        questions: 25,
        duration: 30,
        subjects: ['Economy'],
        difficulty: 'Adaptive',
        attempts: 0,
        bestScore: null,
    },
];

type TestState = 'selection' | 'instructions' | 'test' | 'review' | 'results';

interface Answer {
    questionId: number;
    selected: string | null;
    flagged: boolean;
    timeSpent: number;
    isCorrect?: boolean;
}

export default function MockTestCenter() {
    const router = useRouter();
    const { addXp } = useGamification();

    const [testState, setTestState] = useState<TestState>('selection');
    const [selectedTest, setSelectedTest] = useState<typeof MOCK_TESTS[0] | null>(null);
    const [questions, setQuestions] = useState<AdaptiveQuestion[]>([]);
    const [currentQuestionData, setCurrentQuestionData] = useState<AdaptiveQuestion | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentExamId, setCurrentExamId] = useState<string | null>(null);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [finalReport, setFinalReport] = useState<ExamReport | null>(null);
    const [abilityHistory, setAbilityHistory] = useState<{name: string, ability: number}[]>([]);

    // Timer effect
    useEffect(() => {
        if (testState !== 'test' || isPaused || timeRemaining <= 0) return;

        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    handleFinishTest();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [testState, isPaused, timeRemaining]);

    const startTest = async (test: typeof MOCK_TESTS[0]) => {
        setIsLoading(true);
        try {
            const session = await adaptiveExamApi.startExam({
                subject: test.subjects[0],
                total_questions: test.questions,
                time_limit_minutes: test.duration
            });

            setSelectedTest(test);
            setCurrentExamId(session.exam_id);
            setTimeRemaining(test.duration * 60);
            setCurrentQuestionIndex(0);
            setAnswers([]);
            setTestState('instructions');
        } catch (error) {
            console.error("Failed to start adaptive exam", error);
            // In a real app, show a toast. For now, set state manually for demo safety
            setSelectedTest(test);
            setTestState('instructions');
        } finally {
            setIsLoading(false);
        }
    };

    const beginTest = async () => {
        if (!currentExamId) {
            setTestState('test');
            return;
        }

        setIsLoading(true);
        try {
            const firstQuestion = await adaptiveExamApi.getNextQuestion(currentExamId);
            if (firstQuestion) {
                setAbilityHistory([{ name: 'Start', ability: 50 }]);
                setCurrentQuestionData(firstQuestion);
                setQuestions([firstQuestion]);
                setTestState('test');
            }
        } catch (error) {
            console.error("Failed to fetch first question", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAnswer = async (optionValue: string) => {
        if (!currentExamId || !currentQuestionData) return;

        const questionId = currentQuestionData.id;
        
        // Optimistic local update
        setAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = {
                questionId,
                selected: optionValue,
                flagged: false,
                timeSpent: 0
            };
            return newAnswers;
        });

        setIsLoading(true);
        try {
            const result = await adaptiveExamApi.submitAnswer({
                exam_id: currentExamId,
                question_id: questionId,
                selected_option: optionValue,
                time_spent_seconds: 0 
            });

            // Capture ability evolution
            const newAbility = result.new_ability || 50;
            setAbilityHistory(prev => [...prev, { 
                name: `Q${currentQuestionIndex + 1}`, 
                ability: newAbility 
            }]);
            
            // In an adaptive test, we wait for the next question to be determined
            const nextQ = await adaptiveExamApi.getNextQuestion(currentExamId);
            if (nextQ) {
                setCurrentQuestionData(nextQ);
                setQuestions(prev => [...prev, nextQ]);
                setCurrentQuestionIndex(prev => prev + 1);
                setShowExplanation(false);
            } else {
                handleFinishTest();
            }
        } catch (error) {
            console.error("Failed to submit answer", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFinishTest = async () => {
        if (!currentExamId) {
            setTestState('results');
            return;
        }

        setIsLoading(true);
        try {
            const report = await adaptiveExamApi.getReport(currentExamId);
            setFinalReport(report);
            setTestState('results');
            
            if (report.accuracy >= 0.7) {
                addXp(100, `Adaptive Test - Mastered ${report.subject}`);
            } else {
                addXp(50, `Adaptive Test - ${report.subject} Progress`);
            }
        } catch (error) {
            console.error("Failed to get report", error);
            setTestState('results');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleFlag = () => {
        // Implementation for flagging if needed
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Selection Screen
    if (testState === 'selection') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20">
                            <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-foreground">Mock Test Center</h1>
                            <p className="text-muted-foreground flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                Phase 7: Adaptive Exam Simulator Online
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_TESTS.map((test, i) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card dark:bg-[#111] rounded-2xl border border-border p-6 hover:border-indigo-500/50 transition-all cursor-pointer group relative overflow-hidden"
                            onClick={() => startTest(test)}
                        >
                            {test.difficulty === 'Adaptive' && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-lg">
                                    Adaptive AI
                                </div>
                            )}
                            
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                                    <Target className="w-6 h-6 text-indigo-600" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    test.difficulty === 'Hard' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                    test.difficulty === 'Adaptive' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' :
                                    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                }`}>
                                    {test.difficulty}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">
                                {test.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {test.description}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" /> {test.questions} Qs
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> {test.duration} min
                                </span>
                            </div>

                            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50" disabled={isLoading}>
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />} Start Test
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    // Instructions Screen
    if (testState === 'instructions' && selectedTest) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-card dark:bg-[#111] rounded-2xl border border-border p-8 shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">{selectedTest.title}</h2>
                        <p className="text-muted-foreground">The system will adapt to your ability level in real-time.</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                            <Brain className="w-6 h-6 text-indigo-600 mt-0.5" />
                            <div>
                                <p className="font-bold text-foreground">Adaptive Intelligence Layer</p>
                                <p className="text-sm text-muted-foreground">Difficulty recalibrates every question based on your accuracy and speed.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                            <Target className="w-6 h-6 text-green-600 mt-0.5" />
                            <div>
                                <p className="font-bold text-foreground">UPSC Simulation Marking</p>
                                <p className="text-sm text-muted-foreground">+2.0 for correct, -0.66 for incorrect answers. 1/3 negative marking applies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setTestState('selection')}
                            className="flex-1 py-3 border border-border text-muted-foreground rounded-xl font-medium hover:bg-muted transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={beginTest}
                            className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/30"
                        >
                            <Play className="w-4 h-4" /> Begin Simulation
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Test Screen
    if (testState === 'test' && currentQuestionData) {
        const q = currentQuestionData;
        const answer = answers[currentQuestionIndex];
        const timeWarning = timeRemaining < 300;

        return (
            <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] flex flex-col">
                {/* Adaptive Header */}
                <div className="bg-card dark:bg-[#111] border-b border-border px-4 py-3 sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-foreground bg-muted px-3 py-1 rounded-lg">
                                Q {currentQuestionIndex + 1}/{selectedTest?.questions}
                            </span>
                            <div className="hidden md:flex items-center gap-2">
                                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {q.subject}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                    q.level === 1 ? 'bg-green-100 text-green-700' :
                                    q.level === 2 ? 'bg-amber-100 text-amber-700' :
                                    'bg-red-100 text-red-700'
                                }`}>
                                    Level {q.level}
                                </span>
                            </div>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold ${
                            timeWarning ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-muted text-foreground'
                        }`}>
                            <Clock className="w-4 h-4" />
                            {formatTime(timeRemaining)}
                        </div>
                    </div>
                </div>

                {/* Question Area */}
                <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestionIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-card dark:bg-[#111] rounded-2xl border border-border p-8 shadow-xl relative"
                        >
                            {isLoading && (
                                <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-2xl">
                                    <div className="flex flex-col items-center gap-3">
                                        <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                                        <p className="text-sm font-bold text-indigo-600">AI Adapting Difficulty...</p>
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        q.level === 3 ? 'bg-red-100 text-red-600' : 
                                        q.level === 2 ? 'bg-amber-100 text-amber-600' : 
                                        'bg-green-100 text-green-600'
                                    }`}>
                                        Level {q.level}: {q.level === 3 ? 'UPSC Standard' : q.level === 2 ? 'Intermediate' : 'Foundation'}
                                    </span>
                                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                        <Brain className="w-3 h-3" /> AI Calibrated
                                    </span>
                                </div>
                                <p className="text-xl text-foreground font-medium leading-relaxed">
                                    {q.text}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {q.options.map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(option)}
                                        className={`w-full p-5 rounded-2xl border-2 text-left transition-all group flex items-center gap-4 ${
                                            answer?.selected === option
                                                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                                : 'border-border hover:border-indigo-300'
                                        }`}
                                    >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                                            answer?.selected === option ? 'bg-indigo-600 text-white' : 'bg-muted text-muted-foreground group-hover:bg-indigo-100'
                                        }`}>
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                        <span className="text-foreground font-medium">{option}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Adaptive Progress Bar */}
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-indigo-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentQuestionIndex + 1) / (selectedTest?.questions || 1)) * 100}%` }}
                            />
                        </div>
                        <button onClick={handleFinishTest} className="text-sm font-bold text-muted-foreground hover:text-red-500 transition-colors">
                            Finish Early
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Results Screen (Adaptive Report)
    if (testState === 'results' && finalReport) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-card dark:bg-[#111] rounded-3xl border border-border p-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 p-12 bg-indigo-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center rotate-3 shadow-xl shadow-indigo-500/20">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-extrabold text-foreground mb-1">Adaptive Insight Report</h2>
                                    <p className="text-muted-foreground font-medium">UPSC Simulation: {finalReport.subject}</p>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <div className="text-5xl font-black text-indigo-600 mb-1">{finalReport.ability_score.toFixed(0)}</div>
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Final Ability Score</div>
                            </div>
                        </div>

                        {/* Adaptive Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-100 flex flex-col items-center text-center">
                                <CheckCircle2 className="w-8 h-8 text-indigo-600 mb-3" />
                                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{finalReport.correct_count} / {finalReport.total_questions}</div>
                                <div className="text-xs font-bold text-indigo-600 uppercase mt-1">Accuracy Precision</div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-100 flex flex-col items-center text-center">
                                <Target className="w-8 h-8 text-green-600 mb-3" />
                                <div className="text-2xl font-bold text-green-900 dark:text-green-100">{(finalReport.accuracy * 100).toFixed(0)}%</div>
                                <div className="text-xs font-bold text-green-600 uppercase mt-1">Consistency Rate</div>
                            </div>
                            <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 flex flex-col items-center text-center">
                                <Trophy className="w-8 h-8 text-amber-600 mb-3" />
                                <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">{finalReport.score.toFixed(1)}</div>
                                <div className="text-xs font-bold text-amber-600 uppercase mt-1">Raw UPSC Marks</div>
                            </div>
                        </div>

                        {/* Ability Drift Chart */}
                        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                                <BarChart2 className="w-5 h-5 text-indigo-600" /> Ability Evolution (Drift)
                            </h3>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={abilityHistory}>
                                        <defs>
                                            <linearGradient id="colorAbility" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                                        <Tooltip 
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Area 
                                            type="monotone" 
                                            dataKey="ability" 
                                            stroke="#4f46e5" 
                                            strokeWidth={3}
                                            fillOpacity={1} 
                                            fill="url(#colorAbility)" 
                                            animationDuration={1500}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 text-center italic">
                                * Higher slope indicates rapid mastery progression based on UPSC pattern matching.
                            </p>
                        </div>

                        {/* Learning Path Recommendation */}
                        <div className="bg-muted/50 rounded-2xl p-6 border border-border mb-8">
                            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-indigo-600" /> AI Diagnostic: Next Steps
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                        <RotateCcw className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <p className="text-muted-foreground">
                                        Your ability score of <span className="text-indigo-600 font-bold">{finalReport.ability_score.toFixed(0)}</span> suggests mastering Level 2 concepts before attempting high-difficulty sets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => router.push('/upsc')}
                                className="flex-1 py-4 bg-muted text-foreground rounded-2xl font-bold hover:bg-muted/80 transition-all border border-border"
                            >
                                Back to Dashboard
                            </button>
                            <button
                                onClick={() => setTestState('selection')}
                                className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-2"
                            >
                                <RotateCcw className="w-5 h-5" /> Retake Adaptive Session
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Default Fallback
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
             <div className="flex flex-col items-center gap-4">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                <p className="text-lg font-bold text-muted-foreground">Initializing Simulation Engine...</p>
             </div>
        </div>
    );
}
