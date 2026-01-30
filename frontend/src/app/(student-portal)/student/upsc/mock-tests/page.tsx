"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Clock, BookOpen, Target, Trophy, ChevronRight, Play,
    Pause, CheckCircle, XCircle, BarChart2, ArrowLeft,
    Flag, AlertCircle, Award, Timer, Brain
} from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import { useRouter } from 'next/navigation';

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
        id: 'prelims-gs1-full',
        title: 'GS Paper I - Full Mock',
        description: 'Complete 100 questions prelims simulation',
        questions: 100,
        duration: 120,
        subjects: ['Polity', 'History', 'Geography', 'Economy', 'Science', 'Environment'],
        difficulty: 'Hard',
        attempts: 0,
        bestScore: null,
    },
    {
        id: 'polity-sectional',
        title: 'Polity Sectional Test',
        description: 'Focused polity practice',
        questions: 30,
        duration: 36,
        subjects: ['Polity'],
        difficulty: 'Medium',
        attempts: 0,
        bestScore: null,
    },
    {
        id: 'environment-sectional',
        title: 'Environment Sectional',
        description: 'Ecology, biodiversity, climate change',
        questions: 25,
        duration: 30,
        subjects: ['Environment'],
        difficulty: 'Medium',
        attempts: 0,
        bestScore: null,
    },
    {
        id: 'economy-sectional',
        title: 'Economy Sectional',
        description: 'Indian economy concepts',
        questions: 25,
        duration: 30,
        subjects: ['Economy'],
        difficulty: 'Medium',
        attempts: 0,
        bestScore: null,
    },
];

// Sample MCQ Pool (in production, this would come from the MCQ data files)
const SAMPLE_MCQS = [
    // Polity
    { id: 1, subject: 'Polity', question: 'Which Article of the Constitution deals with the Right to Equality?', options: ['Article 12', 'Article 14', 'Article 19', 'Article 21'], correct: 1, explanation: 'Article 14 provides for equality before law and equal protection of laws.' },
    { id: 2, subject: 'Polity', question: 'The President of India can be removed by:', options: ['Supreme Court', 'Impeachment by Parliament', 'Prime Minister', 'Cabinet'], correct: 1, explanation: 'The President can be removed by impeachment under Article 61.' },
    { id: 3, subject: 'Polity', question: 'Which schedule contains the list of 22 official languages?', options: ['Fifth Schedule', 'Sixth Schedule', 'Seventh Schedule', 'Eighth Schedule'], correct: 3, explanation: 'The Eighth Schedule originally had 14 languages, now has 22.' },
    { id: 4, subject: 'Polity', question: 'Fundamental Duties were added by which Amendment?', options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '86th Amendment'], correct: 0, explanation: 'Fundamental Duties were added by the 42nd Constitutional Amendment, 1976.' },
    { id: 5, subject: 'Polity', question: 'Who appoints the Chief Election Commissioner?', options: ['Prime Minister', 'Law Minister', 'President', 'Parliament'], correct: 2, explanation: 'The President appoints the CEC under Article 324.' },
    // Economy
    { id: 6, subject: 'Economy', question: 'The repo rate is set by:', options: ['Finance Ministry', 'SEBI', 'RBI', 'NITI Aayog'], correct: 2, explanation: 'The RBI sets the repo rate as part of monetary policy.' },
    { id: 7, subject: 'Economy', question: 'GST is a:', options: ['Direct Tax', 'Indirect Tax', 'Progressive Tax', 'Regressive Tax'], correct: 1, explanation: 'GST is an indirect tax on consumption of goods and services.' },
    { id: 8, subject: 'Economy', question: 'Which body recommends MSP for crops?', options: ['FCI', 'CACP', 'APMC', 'NABARD'], correct: 1, explanation: 'Commission for Agricultural Costs and Prices (CACP) recommends MSP.' },
    { id: 9, subject: 'Economy', question: 'What is India\'s inflation target under the monetary policy framework?', options: ['2%', '4%', '6%', '8%'], correct: 1, explanation: 'India targets 4% inflation with a band of ±2%.' },
    { id: 10, subject: 'Economy', question: 'Which is NOT a component of M3 money supply?', options: ['Currency with public', 'Demand deposits', 'Time deposits', 'Foreign exchange reserves'], correct: 3, explanation: 'Forex reserves are not part of M3; M3 = M1 + Time deposits.' },
    // Environment
    { id: 11, subject: 'Environment', question: 'How many biodiversity hotspots are in India?', options: ['2', '3', '4', '5'], correct: 2, explanation: 'India has 4 hotspots: Himalayas, Western Ghats, Indo-Burma, Sundaland.' },
    { id: 12, subject: 'Environment', question: 'The Paris Agreement aims to limit warming to:', options: ['1°C', '1.5°C', '2.5°C', '3°C'], correct: 1, explanation: 'Paris Agreement aims to limit warming to 1.5°C above pre-industrial levels.' },
    { id: 13, subject: 'Environment', question: 'Ramsar sites are related to:', options: ['Forests', 'Wetlands', 'Deserts', 'Mountains'], correct: 1, explanation: 'Ramsar Convention is for the conservation of wetlands.' },
    { id: 14, subject: 'Environment', question: 'Which gas has highest Global Warming Potential?', options: ['CO2', 'CH4', 'N2O', 'SF6'], correct: 3, explanation: 'SF6 (Sulfur hexafluoride) has GWP of 23,900 over 100 years.' },
    { id: 15, subject: 'Environment', question: 'CITES deals with:', options: ['Climate change', 'Ozone depletion', 'Wildlife trade', 'Marine pollution'], correct: 2, explanation: 'CITES regulates international trade in endangered species.' },
    // Geography
    { id: 16, subject: 'Geography', question: 'The Western Ghats are also known as:', options: ['Sahyadri', 'Vindhyas', 'Satpura', 'Aravalli'], correct: 0, explanation: 'Western Ghats are locally known as Sahyadri.' },
    { id: 17, subject: 'Geography', question: 'Which soil is best for cotton cultivation?', options: ['Alluvial', 'Black/Regur', 'Red', 'Laterite'], correct: 1, explanation: 'Black soil (Regur) is ideal for cotton due to moisture retention.' },
    { id: 18, subject: 'Geography', question: 'Godavari River originates from:', options: ['Amarkantak', 'Trimbakeshwar', 'Mahabaleshwar', 'Gangotri'], correct: 1, explanation: 'Godavari originates from Trimbakeshwar in Maharashtra.' },
    { id: 19, subject: 'Geography', question: 'Which is the smallest ocean?', options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 3, explanation: 'Arctic Ocean is the smallest and shallowest ocean.' },
    { id: 20, subject: 'Geography', question: 'Jet streams occur in which layer?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], correct: 0, explanation: 'Jet streams occur in the upper troposphere.' },
    // History
    { id: 21, subject: 'History', question: 'Who founded the Indian National Congress?', options: ['A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee', 'Surendranath Banerjee'], correct: 0, explanation: 'A.O. Hume founded INC in 1885. W.C. Bonnerjee was the first president.' },
    { id: 22, subject: 'History', question: 'The Revolt of 1857 started from:', options: ['Delhi', 'Lucknow', 'Meerut', 'Kanpur'], correct: 2, explanation: 'The revolt started on 10 May 1857 at Meerut.' },
    { id: 23, subject: 'History', question: 'Gandhiji\'s first Satyagraha in India was at:', options: ['Dandi', 'Champaran', 'Kheda', 'Ahmedabad'], correct: 1, explanation: 'Champaran Satyagraha (1917) was Gandhi\'s first civil disobedience in India.' },
    { id: 24, subject: 'History', question: 'Simon Commission came to India in:', options: ['1927', '1928', '1929', '1930'], correct: 1, explanation: 'Simon Commission arrived in India in February 1928.' },
    { id: 25, subject: 'History', question: 'Who gave the slogan "Do or Die"?', options: ['Subhash Chandra Bose', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Patel'], correct: 2, explanation: 'Gandhi gave this slogan during Quit India Movement (1942).' },
];

type TestState = 'selection' | 'instructions' | 'test' | 'review' | 'results';

interface Answer {
    questionId: number;
    selected: number | null;
    flagged: boolean;
    timeSpent: number;
}

export default function MockTestCenter() {
    const router = useRouter();
    const { addXp } = useGamification();

    const [testState, setTestState] = useState<TestState>('selection');
    const [selectedTest, setSelectedTest] = useState<typeof MOCK_TESTS[0] | null>(null);
    const [questions, setQuestions] = useState<typeof SAMPLE_MCQS>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    // Timer effect
    useEffect(() => {
        if (testState !== 'test' || isPaused || timeRemaining <= 0) return;

        const timer = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    handleSubmitTest();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [testState, isPaused, timeRemaining]);

    const startTest = useCallback((test: typeof MOCK_TESTS[0]) => {
        setSelectedTest(test);

        // Shuffle and select questions based on test config
        const shuffled = [...SAMPLE_MCQS]
            .filter(q => test.subjects.includes(q.subject))
            .sort(() => Math.random() - 0.5)
            .slice(0, Math.min(test.questions, SAMPLE_MCQS.length));

        setQuestions(shuffled);
        setAnswers(shuffled.map(q => ({ questionId: q.id, selected: null, flagged: false, timeSpent: 0 })));
        setTimeRemaining(test.duration * 60);
        setCurrentQuestion(0);
        setTestState('instructions');
    }, []);

    const beginTest = () => {
        setTestState('test');
    };

    const handleAnswer = (optionIndex: number) => {
        setAnswers(prev => {
            const updated = [...prev];
            updated[currentQuestion] = {
                ...updated[currentQuestion],
                selected: optionIndex
            };
            return updated;
        });
    };

    const toggleFlag = () => {
        setAnswers(prev => {
            const updated = [...prev];
            updated[currentQuestion] = {
                ...updated[currentQuestion],
                flagged: !updated[currentQuestion].flagged
            };
            return updated;
        });
    };

    const handleSubmitTest = () => {
        setTestState('results');

        // Calculate score
        const correct = questions.reduce((acc, q, i) => {
            return acc + (answers[i]?.selected === q.correct ? 1 : 0);
        }, 0);

        // Award XP based on performance
        const percentage = (correct / questions.length) * 100;
        if (percentage >= 70) {
            addXp(100, 'Mock Test - Excellent Performance');
        } else if (percentage >= 50) {
            addXp(50, 'Mock Test - Good Effort');
        } else {
            addXp(25, 'Mock Test Completed');
        }
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

    const calculateResults = () => {
        const correct = questions.reduce((acc, q, i) =>
            acc + (answers[i]?.selected === q.correct ? 1 : 0), 0);
        const wrong = questions.reduce((acc, q, i) =>
            acc + (answers[i]?.selected !== null && answers[i]?.selected !== q.correct ? 1 : 0), 0);
        const unattempted = answers.filter(a => a.selected === null).length;
        const marks = correct * 2 - wrong * 0.67; // UPSC marking scheme
        const percentage = (correct / questions.length) * 100;

        // Subject-wise breakdown
        const subjectStats: Record<string, { correct: number; total: number }> = {};
        questions.forEach((q, i) => {
            if (!subjectStats[q.subject]) {
                subjectStats[q.subject] = { correct: 0, total: 0 };
            }
            subjectStats[q.subject].total++;
            if (answers[i]?.selected === q.correct) {
                subjectStats[q.subject].correct++;
            }
        });

        return { correct, wrong, unattempted, marks, percentage, subjectStats };
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
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-indigo-600 rounded-xl">
                            <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mock Test Center</h1>
                            <p className="text-gray-600 dark:text-gray-400">Simulate real UPSC Prelims exam conditions</p>
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
                            className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-500/50 transition-all cursor-pointer group"
                            onClick={() => startTest(test)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                                    <Target className="w-6 h-6 text-indigo-600" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${test.difficulty === 'Hard'
                                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                    }`}>
                                    {test.difficulty}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                                {test.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {test.description}
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" /> {test.questions} Qs
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> {test.duration} min
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {test.subjects.map(sub => (
                                    <span key={sub} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400">
                                        {sub}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
                                <Play className="w-4 h-4" /> Start Test
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
                    className="max-w-2xl w-full bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedTest.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400">Read the instructions carefully before starting</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <Clock className="w-5 h-5 text-indigo-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Time Limit</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTest.duration} minutes for {questions.length} questions</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <Target className="w-5 h-5 text-green-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Marking Scheme</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">+2 for correct, -0.67 for wrong (UPSC pattern)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <Flag className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                                <p className="font-medium text-gray-900 dark:text-white">Flag Questions</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Mark questions for review before submitting</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setTestState('selection')}
                            className="flex-1 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                            Go Back
                        </button>
                        <button
                            onClick={beginTest}
                            className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
                        >
                            <Play className="w-4 h-4" /> Begin Test
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Test Screen
    if (testState === 'test' && questions.length > 0) {
        const q = questions[currentQuestion];
        const answer = answers[currentQuestion];
        const timeWarning = timeRemaining < 300; // 5 min warning

        return (
            <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] flex flex-col">
                {/* Header */}
                <div className="bg-white dark:bg-[#111] border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-gray-900 dark:text-white">
                                Q {currentQuestion + 1}/{questions.length}
                            </span>
                            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                                {q.subject}
                            </span>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold ${timeWarning
                                ? 'bg-red-100 dark:bg-red-900/30 text-red-600 animate-pulse'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                            }`}>
                            <Timer className="w-4 h-4" />
                            {formatTime(timeRemaining)}
                        </div>
                    </div>
                </div>

                {/* Question */}
                <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <p className="text-lg text-gray-900 dark:text-white font-medium leading-relaxed">
                                    {q.question}
                                </p>
                                <button
                                    onClick={toggleFlag}
                                    className={`p-2 rounded-lg transition-colors ${answer?.flagged
                                            ? 'bg-amber-100 text-amber-600'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-amber-600'
                                        }`}
                                >
                                    <Flag className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {q.options.map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(i)}
                                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${answer?.selected === i
                                                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                                                : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${answer?.selected === i
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                                }`}>
                                                {String.fromCharCode(65 + i)}
                                            </span>
                                            <span className="text-gray-900 dark:text-white">{option}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestion === 0}
                            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium disabled:opacity-50"
                        >
                            Previous
                        </button>

                        {currentQuestion === questions.length - 1 ? (
                            <button
                                onClick={handleSubmitTest}
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium flex items-center gap-2"
                            >
                                <CheckCircle className="w-4 h-4" /> Submit Test
                            </button>
                        ) : (
                            <button
                                onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium"
                            >
                                Next
                            </button>
                        )}
                    </div>

                    {/* Question Palette */}
                    <div className="mt-8 bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Question Palette</p>
                        <div className="flex flex-wrap gap-2">
                            {questions.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentQuestion(i)}
                                    className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${i === currentQuestion
                                            ? 'bg-indigo-600 text-white'
                                            : answers[i]?.selected !== null
                                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                : answers[i]?.flagged
                                                    ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500" /> Answered</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500" /> Flagged</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-gray-300" /> Not Visited</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Results Screen
    if (testState === 'results') {
        const results = calculateResults();

        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111] p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 mb-6"
                    >
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Trophy className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Test Completed!</h2>
                            <p className="text-gray-600 dark:text-gray-400">{selectedTest?.title}</p>
                        </div>

                        {/* Score Summary */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-center">
                                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-green-700 dark:text-green-400">{results.correct}</p>
                                <p className="text-xs text-green-600">Correct</p>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl text-center">
                                <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-red-700 dark:text-red-400">{results.wrong}</p>
                                <p className="text-xs text-red-600">Wrong</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center">
                                <AlertCircle className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{results.unattempted}</p>
                                <p className="text-xs text-gray-600">Unattempted</p>
                            </div>
                            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl text-center">
                                <Award className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">{results.marks.toFixed(2)}</p>
                                <p className="text-xs text-indigo-600">Marks</p>
                            </div>
                        </div>

                        {/* Percentage Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600 dark:text-gray-400">Accuracy</span>
                                <span className="font-bold text-gray-900 dark:text-white">{results.percentage.toFixed(1)}%</span>
                            </div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${results.percentage}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full rounded-full ${results.percentage >= 70 ? 'bg-green-500' :
                                            results.percentage >= 50 ? 'bg-amber-500' : 'bg-red-500'
                                        }`}
                                />
                            </div>
                        </div>

                        {/* Subject Breakdown */}
                        <div className="mb-8">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <BarChart2 className="w-5 h-5" /> Subject-wise Performance
                            </h3>
                            <div className="space-y-3">
                                {Object.entries(results.subjectStats).map(([subject, stats]) => (
                                    <div key={subject} className="flex items-center gap-4">
                                        <span className="w-24 text-sm text-gray-600 dark:text-gray-400">{subject}</span>
                                        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-600 rounded-full"
                                                style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white w-16 text-right">
                                            {stats.correct}/{stats.total}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setTestState('review')}
                                className="flex-1 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                            >
                                Review Answers
                            </button>
                            <button
                                onClick={() => setTestState('selection')}
                                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
                            >
                                Take Another Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Review Screen
    if (testState === 'review') {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Review Answers</h2>
                        <button
                            onClick={() => setTestState('results')}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300"
                        >
                            Back to Results
                        </button>
                    </div>

                    <div className="space-y-6">
                        {questions.map((q, i) => {
                            const answer = answers[i];
                            const isCorrect = answer?.selected === q.correct;

                            return (
                                <div key={q.id} className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-500">Q{i + 1}</span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">{q.subject}</span>
                                        </div>
                                        {answer?.selected === null ? (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Unattempted</span>
                                        ) : isCorrect ? (
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3" /> Correct
                                            </span>
                                        ) : (
                                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1">
                                                <XCircle className="w-3 h-3" /> Wrong
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-900 dark:text-white font-medium mb-4">{q.question}</p>

                                    <div className="space-y-2 mb-4">
                                        {q.options.map((option, j) => (
                                            <div
                                                key={j}
                                                className={`p-3 rounded-lg border ${j === q.correct
                                                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                                        : answer?.selected === j
                                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                                            : 'border-gray-200 dark:border-gray-700'
                                                    }`}
                                            >
                                                <span className="text-sm">{String.fromCharCode(65 + j)}. {option}</span>
                                                {j === q.correct && <CheckCircle className="w-4 h-4 text-green-600 inline ml-2" />}
                                                {answer?.selected === j && j !== q.correct && <XCircle className="w-4 h-4 text-red-600 inline ml-2" />}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                        <p className="text-sm text-blue-800 dark:text-blue-300">
                                            <strong>Explanation:</strong> {q.explanation}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
