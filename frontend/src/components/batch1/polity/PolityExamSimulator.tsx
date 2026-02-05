import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, Play, ShieldAlert, Trophy, Brain, XCircle, CheckCircle, Activity, ChevronLeft } from 'lucide-react';
import { calculateStressScore, getMeditationRecommendation, StressMetrics } from './PolityStressEngine';

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    targetTime: number;
}

interface PolityExamSimulatorProps {
    title?: string;
    description?: string;
    questions?: Question[];
    mode?: 'simulator' | 'audit';
    onComplete?: (score: number, metrics: any) => void;
    onClose?: () => void;
}

// Mock Data for "Level 3: The Prelims Simulator"
const DEFAULT_QUESTIONS: Question[] = [
    {
        id: 1,
        question: "With reference to the 'Instrument of Instructions' contained in the Government of India Act, 1935, consider the following statements:",
        options: [
            "It was incorporated in the Constitution of India as Directive Principles of State Policy.",
            "It was meant for the guidance of the Governor-General and Governors of Provinces.",
            "It is legally enforceable by any court.",
            "Both (a) and (b) are correct."
        ],
        correctAnswer: 3, // D is correct (Both a and b)
        explanation: "The Instrument of Instructions reduced to writing the conventions of the parliamentary system of government.",
        targetTime: 45 // Hard question
    },
    {
        id: 2,
        question: "Which of the following bodies does NOT find mention in the Constitution?",
        options: [
            "National Development Council",
            "Planning Commission",
            "Zonal Councils",
            "All of the above"
        ],
        correctAnswer: 3, // All are extra-constitutional
        explanation: "NDC, Planning Commission (now NITI Aayog), and Zonal Councils (Statutory) are not in the Constitution.",
        targetTime: 30
    },
    {
        id: 3,
        question: "The power to increase the number of judges in the Supreme Court of India is vested in:",
        options: [
            "The President of India",
            "The Parliament",
            "The Chief Justice of India",
            "The Law Commission"
        ],
        correctAnswer: 1, // Parliament
        explanation: "Parliament can increase the number of judges (Article 124).",
        targetTime: 20
    },
    {
        id: 4,
        question: "Economic Justice as one of the objectives of the Indian Constitution has been provided in:",
        options: [
            "The Preamble and the Fundamental Rights",
            "The Preamble and the Directive Principles of State Policy",
            "The Fundamental Rights and the Directive Principles of State Policy",
            "None of the above"
        ],
        correctAnswer: 1, // Preamble + DPSP
        explanation: "Preamble mentions 'Justice social, economic and political'. DPSP Art 38 also mentions it.",
        targetTime: 40
    },
    {
        id: 5,
        question: "If a particular area is brought under the Fifth Schedule of the Constitution of India, which one of the following statements best reflects the consequence of it?",
        options: [
            "This would prevent the transfer of land of tribal people to non-tribal people.",
            "This would create a local self-governing body in that area.",
            "This would convert that area into a Union Territory.",
            "The State having such areas would be declared a Special Category State."
        ],
        correctAnswer: 0, // Land transfer protection
        explanation: "The 5th schedule empowers the Governor to prohibit transfer of land.",
        targetTime: 50
    }
];

export default function PolityExamSimulator({
    title = "Level 3: The Prelims Simulator",
    description = "High pressure environment. Negative marking enabled. Stress Engine Active.",
    questions = DEFAULT_QUESTIONS,
    mode = 'simulator',
    onComplete,
    onClose
}: PolityExamSimulatorProps) {
    const [activeExam, setActiveExam] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [answerState, setAnswerState] = useState<'unanswered' | 'correct' | 'wrong'>('unanswered');

    // Stress Engine State
    const [errorStreak, setErrorStreak] = useState(0);
    const [startTime, setStartTime] = useState<number>(Date.now());
    const [anxietyMode, setAnxietyMode] = useState<{ isDetected: boolean; reason?: string }>({ isDetected: false });
    const [meditationTip, setMeditationTip] = useState<string | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [timer, setTimer] = useState(0);

    // Reset when starting new question
    useEffect(() => {
        if (activeExam) {
            setStartTime(Date.now());
            setTimer(0);
            timerRef.current = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentQuestionIndex, activeExam]);

    const handleAnswer = (optionIndex: number) => {
        if (answerState !== 'unanswered') return;
        if (anxietyMode.isDetected) return; // Block input if anxious

        const currentQ = questions[currentQuestionIndex];
        const timeTaken = (Date.now() - startTime) / 1000;
        const isCorrect = optionIndex === currentQ.correctAnswer;

        // --- STRESS ENGINE LOGIC ---
        const newStreak = isCorrect ? 0 : errorStreak + 1;
        setErrorStreak(newStreak);

        // Only calculate stress if wrong or very fast
        const stressMetrics: StressMetrics = {
            timeTaken,
            errorStreak: newStreak, // Use the NEW streak
            targetTime: currentQ.targetTime
        };

        const analysis = calculateStressScore(stressMetrics);

        if (analysis.isAnxietyDetected) {
            setAnxietyMode({ isDetected: true, reason: analysis.reason });
            setMeditationTip(getMeditationRecommendation());
            // Don't reveal answer if anxious? Or maybe reveal and then block?
            // Let's block immediately to force a pause.
            if (timerRef.current) clearInterval(timerRef.current);
        }
        // ---------------------------

        if (isCorrect) {
            setScore(s => s + 2); // +2 marks
            setAnswerState('correct');
        } else {
            setScore(s => s - 0.66); // -0.66 Neg marking
            setAnswerState('wrong');
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setAnswerState('unanswered');
        } else {
            // alert(`Exam Over! Final Score: ${score.toFixed(2)} / ${questions.length * 2}`);
            if (onComplete) {
                // Return normalized score (percentage) and raw
                onComplete(score, {
                    accuracy: (score / (questions.length * 2)) * 100, // Very rough
                    totalQuestions: questions.length
                });
            }
            setActiveExam(null);
        }
    };

    const handleMeditationComplete = () => {
        setAnxietyMode({ isDetected: false });
        setErrorStreak(0); // Reset streak on recovery
        // Resume timer if needed
    };

    if (!activeExam) {
        // --- LANDING VIEW ---
        return (
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-[#1F2937] dark:text-white flex items-center gap-2">
                            {mode === 'audit' ? <Brain className="w-6 h-6 text-blue-600" /> : <ShieldAlert className="w-6 h-6 text-red-600" />}
                            {title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:border-blue-500 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-lg">
                                {questions.length}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1F2937] dark:text-white">{title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {questions.length * 2} Mins</span>
                                    <span>•</span>
                                    <span>{questions.length} Questions</span>
                                    <span>•</span>
                                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 uppercase">{mode}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {onClose && (
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                onClick={() => setActiveExam('E-1')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                Start {mode === 'audit' ? 'Audit' : 'Exam'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = questions[currentQuestionIndex];

    return (
        <div className="max-w-4xl mx-auto px-6 py-8 relative">

            {/* ANXIETY OVERLAY */}
            {anxietyMode.isDetected && (
                <div className="absolute inset-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <Activity className="w-10 h-10 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Anxiety Detected!</h2>
                    <p className="text-xl text-red-600 font-bold mb-6">{anxietyMode.reason}</p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl max-w-md border border-blue-200 dark:border-blue-800 mb-8">
                        <h3 className="text-blue-700 dark:text-blue-300 font-bold mb-2 flex items-center justify-center gap-2">
                            <Brain className="w-5 h-5" /> Micro-Meditation Required
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 italic">
                            "{meditationTip}"
                        </p>
                    </div>

                    <button
                        onClick={handleMeditationComplete}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-transform hover:scale-105"
                    >
                        I'm Calm Now. Resume Question.
                    </button>
                </div>
            )}

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Question {currentQuestionIndex + 1}/{questions.length}</h3>
                    <div className="h-1.5 w-32 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div
                            className="h-full bg-red-600 transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>
                <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timer > currentQ.targetTime ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
                    <Clock className="w-5 h-5" />
                    {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                </div>
            </div>

            {/* QUESTION CARD */}
            <div className={`bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-2xl relative overflow-hidden ${anxietyMode.isDetected ? 'blur-sm' : ''}`}>
                {/* Watermark/Background Decor */}
                <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-transparent rounded-bl-[100px] -z-0 opacity-50" />

                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-relaxed mb-8 relative z-10">
                    {currentQ.question}
                </h2>

                <div className="space-y-3 relative z-10">
                    {currentQ.options.map((opt, idx) => {
                        let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between group ";
                        if (answerState === 'unanswered') {
                            btnClass += "border-gray-200 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-800 dark:hover:bg-blue-900/20";
                        } else {
                            if (idx === currentQ.correctAnswer) {
                                btnClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                            } else if (answerState === 'wrong' && idx !== currentQ.correctAnswer) {
                                // Highlight selected wrong answer? No, for now just show correct.
                                btnClass += "border-gray-200 opacity-50";
                            } else {
                                btnClass += "border-gray-200 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                className={btnClass}
                                disabled={answerState !== 'unanswered'}
                            >
                                <span className="flex-1">
                                    <span className="inline-block w-6 font-bold opacity-50 mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                </span>
                                {answerState !== 'unanswered' && idx === currentQ.correctAnswer && (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {answerState === 'wrong' && idx !== currentQ.correctAnswer && (
                                    <XCircle className="w-5 h-5 text-red-500 opacity-0 group-focus:opacity-100" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {answerState !== 'unanswered' && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-2">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Explanation</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {currentQ.explanation}
                        </p>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleNext}
                                className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                Next Question <Play className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Score Footer */}
            <div className="mt-6 flex items-center justify-between text-sm font-bold text-gray-500">
                <span>Current Score: {score.toFixed(2)}</span>
                <span className={`${errorStreak > 0 ? 'text-red-500' : 'text-gray-400'}`}>Streak Risk: {errorStreak}/3</span>
            </div>
        </div>
    );
}
