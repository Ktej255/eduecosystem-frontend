import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, Play, ShieldAlert, Trophy, Brain, XCircle, CheckCircle, Activity, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
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
    const [userAnswers, setUserAnswers] = useState<(number | undefined)[]>(new Array(questions.length).fill(undefined));
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Stress Engine State
    const [errorStreak, setErrorStreak] = useState(0);
    const [startTime, setStartTime] = useState<number>(Date.now());
    const [anxietyMode, setAnxietyMode] = useState<{ isDetected: boolean; reason?: string }>({ isDetected: false });
    const [meditationTip, setMeditationTip] = useState<string | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [timer, setTimer] = useState(0);

    // Global Timer for the exam
    useEffect(() => {
        if (activeExam && !isSubmitted) {
            timerRef.current = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [activeExam, isSubmitted]);

    const handleAnswer = (optionIndex: number) => {
        if (isSubmitted) return;
        if (anxietyMode.isDetected) return;

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestionIndex] = optionIndex;
        setUserAnswers(newUserAnswers);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (timerRef.current) clearInterval(timerRef.current);

        let finalScore = 0;
        let correctCount = 0;

        questions.forEach((q, idx) => {
            if (userAnswers[idx] === q.correctAnswer) {
                finalScore += 2;
                correctCount++;
            } else if (userAnswers[idx] !== undefined) {
                finalScore -= 0.66;
            }
        });

        setScore(finalScore);

        if (onComplete) {
            onComplete(finalScore, {
                accuracy: (correctCount / questions.length) * 100,
                totalQuestions: questions.length
            });
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleMeditationComplete = () => {
        setAnxietyMode({ isDetected: false });
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
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

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

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/student/graphotherapy">
                            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-transform hover:scale-105 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Start Graphotherapy
                            </button>
                        </Link>
                        <button
                            onClick={handleMeditationComplete}
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-transform hover:scale-105"
                        >
                            I'm Calm Now. Resume.
                        </button>
                    </div>
                </div>
            )}

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Question {currentQuestionIndex + 1}/{questions.length}</h3>
                    <div className="h-1.5 w-32 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>
                <div className={`flex items-center gap-2 font-mono text-xl font-bold text-gray-700 dark:text-gray-300`}>
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

                <div className="space-y-3 relative z-10 mb-8">
                    {currentQ.options.map((opt, idx) => {
                        let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between group ";
                        const isSelected = userAnswers[currentQuestionIndex] === idx;
                        const isCorrect = idx === currentQ.correctAnswer;

                        if (!isSubmitted) {
                            // Exam Mode
                            if (isSelected) {
                                btnClass += "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300";
                            } else {
                                btnClass += "border-gray-200 hover:border-blue-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900";
                            }
                        } else {
                            // Result Mode
                            if (isCorrect) {
                                btnClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300";
                            } else if (isSelected && !isCorrect) {
                                btnClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                            } else {
                                btnClass += "border-gray-200 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                className={btnClass}
                                disabled={isSubmitted}
                            >
                                <span className="flex-1">
                                    <span className="inline-block w-6 font-bold opacity-50 mr-2">{String.fromCharCode(65 + idx)}.</span>
                                    {opt}
                                </span>
                                {isSubmitted && isCorrect && (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {isSubmitted && isSelected && !isCorrect && (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                )}
                                {!isSubmitted && isSelected && (
                                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {isSubmitted && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-2">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Explanation</h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {currentQ.explanation}
                        </p>
                    </div>
                )}

                <div className="flex justify-between mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                    <button
                        onClick={handlePrev}
                        disabled={currentQuestionIndex === 0}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${currentQuestionIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}`}
                    >
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </button>

                    {!isSubmitted ? (
                        isLastQuestion ? (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-green-600/20 transition-all flex items-center gap-2"
                            >
                                Submit Exam <CheckCircle className="w-4 h-4" />
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2"
                            >
                                Next Question <Play className="w-4 h-4" />
                            </button>
                        )
                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={isLastQuestion}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${isLastQuestion ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                        >
                            Next <Play className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            {/* Score Footer */}
            {isSubmitted && (
                <div className="mt-6 flex items-center justify-between text-sm font-bold text-gray-500 animate-in fade-in">
                    <span className="text-lg text-gray-900 dark:text-white">Final Score: {score.toFixed(2)}</span>
                    <button onClick={() => { setActiveExam(null); setIsSubmitted(false); setCurrentQuestionIndex(0); setUserAnswers([]); }} className="text-blue-600 hover:underline">
                        Exit / Retake
                    </button>
                </div>
            )}
        </div>
    );
}
