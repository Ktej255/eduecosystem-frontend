"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Play, FileText, CheckCircle, BookOpen, BrainCircuit, ClipboardList, Target, Award, TrendingUp, Calendar, Timer, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ======================================
// BEGINNER VIEW - Video + Explain + MCQ + PDF
// ======================================
// ======================================
// BEGINNER VIEW - Video + Explain + MCQ + PDF
// ======================================
import ExplanationFeedback from '@/components/upsc/ExplanationFeedback';

const BeginnerView = () => {
    const [step, setStep] = useState(1);

    // No longer needed as we use the component state
    // const [explanation, setExplanation] = useState(""); 

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Beginner Foundation</h1>
                    <p className="text-gray-500">Day 1: Introduction to Polity</p>
                </div>
                <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                            ${step === i ? 'bg-blue-600 text-white' :
                                step > i ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {step > i ? <CheckCircle className="w-4 h-4" /> : i}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-sm transition-colors ${step === 2 ? 'bg-gray-50/50 dark:bg-[#0a0a0a]' : 'bg-white dark:bg-[#111]'}`}>
                {step === 1 && (
                    <div className="text-center py-4">
                        <div className="w-full aspect-video bg-black rounded-xl mb-6 overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/S_7B5KzD2d0?si=PolityPreamble"
                                title="Preamble of the Constitution"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-left">
                                <h2 className="text-2xl font-bold">Concept Video: Preamble</h2>
                                <p className="text-gray-500 text-sm">Watch carefully to answer the next section.</p>
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform active:scale-95 flex items-center gap-2"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                Mark Complete & Continue
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="max-w-3xl mx-auto">
                        <ExplanationFeedback
                            topicTitle="The Preamble of India"
                            keyPoints={[
                                "sovereign", "socialist", "secular", "democratic", "republic",
                                "justice", "liberty", "equality", "fraternity", "constitution"
                            ]}
                            onComplete={(score) => {
                                if (score >= 50) setStep(3);
                                else alert("Please try to cover more key points to proceed.");
                            }}
                        />
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BrainCircuit className="w-10 h-10 text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Practice MCQs</h2>
                        <p className="text-gray-500 mb-6">Test your understanding with 5 questions based on the video.</p>
                        <button
                            onClick={() => setStep(4)}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg"
                        >
                            Start Quiz
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Download Notes</h2>
                        <p className="text-gray-500 mb-6">Get the summary PDF for revision.</p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg mb-4">
                            Download PDF
                        </button>
                        <div>
                            <button onClick={() => window.location.reload()} className="text-blue-600 hover:underline">Restart Module</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// ======================================
// INTERMEDIATE VIEW - Questionnaire + Revision Plan
// ======================================
const QUESTIONNAIRE = [
    {
        id: 1,
        question: "How much of the syllabus have you already covered?",
        options: ["0-25%", "25-50%", "50-75%", "75-100%"]
    },
    {
        id: 2,
        question: "Which subject needs the most attention?",
        options: ["Polity", "History", "Geography", "Economy"]
    },
    {
        id: 3,
        question: "How many hours can you study daily?",
        options: ["2-4 hours", "4-6 hours", "6-8 hours", "8+ hours"]
    },
    {
        id: 4,
        question: "What is your primary preparation mode?",
        options: ["Self Study", "Coaching + Self", "Test Series Focus", "Mixed"]
    },
    {
        id: 5,
        question: "Have you attempted any mock tests?",
        options: ["Never", "1-5 Tests", "5-15 Tests", "15+ Tests"]
    }
];

const IntermediateView = () => {
    const router = useRouter();
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showPlan, setShowPlan] = useState(false);

    const handleSelect = (optIdx: number) => {
        setAnswers(prev => ({ ...prev, [QUESTIONNAIRE[currentQ].id]: optIdx }));
        if (currentQ < QUESTIONNAIRE.length - 1) {
            setTimeout(() => setCurrentQ(prev => prev + 1), 300);
        } else {
            setTimeout(() => setShowPlan(true), 500);
        }
    };

    if (showPlan) {
        // Generate personalized plan based on answers
        const coverage = answers[1] || 0;
        const weakSubject = ["Polity", "History", "Geography", "Economy"][answers[2] || 0];
        const hoursPerDay = [3, 5, 7, 9][answers[3] || 0];

        return (
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
                    <h1 className="text-3xl font-bold mb-4">Your Personalized Revision Plan</h1>
                    <p className="text-blue-100">Based on your profile, here's your optimal 30-day strategy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <Target className="w-8 h-8 text-blue-600 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Focus Area</h3>
                        <p className="text-2xl font-bold text-blue-600">{weakSubject}</p>
                        <p className="text-xs text-gray-500 mt-1">Priority subject in your plan</p>
                    </div>
                    <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <Timer className="w-8 h-8 text-green-600 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Daily Target</h3>
                        <p className="text-2xl font-bold text-green-600">{hoursPerDay} Hours</p>
                        <p className="text-xs text-gray-500 mt-1">Recommended study time</p>
                    </div>
                    <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <Calendar className="w-8 h-8 text-purple-600 mb-3" />
                        <h3 className="font-bold text-lg mb-1">Plan Duration</h3>
                        <p className="text-2xl font-bold text-purple-600">30 Days</p>
                        <p className="text-xs text-gray-500 mt-1">Complete revision cycle</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-blue-600" />
                        Weekly Schedule Preview
                    </h3>
                    <div className="space-y-4">
                        {[
                            { week: 1, focus: weakSubject, desc: "Foundation revision + MCQs" },
                            { week: 2, focus: "History", desc: "Modern India deep dive" },
                            { week: 3, focus: "Geography", desc: "Physical + Human geography" },
                            { week: 4, focus: "Mixed", desc: "Full-length mock tests" }
                        ].map(w => (
                            <div key={w.week} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center font-bold text-blue-600">
                                    W{w.week}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold">{w.focus}</h4>
                                    <p className="text-sm text-gray-500">{w.desc}</p>
                                </div>
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => router.push('/student/batch1')}
                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
                    >
                        Start Revision Portal
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Let's Personalize Your Plan</h1>
                <p className="text-gray-500">Answer {QUESTIONNAIRE.length} quick questions</p>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full mb-8 overflow-hidden">
                <div
                    className="h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${((currentQ + 1) / QUESTIONNAIRE.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQ}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-8"
                >
                    <div className="text-xs font-bold text-blue-600 uppercase mb-4">
                        Question {currentQ + 1} of {QUESTIONNAIRE.length}
                    </div>
                    <h2 className="text-2xl font-bold mb-8">{QUESTIONNAIRE[currentQ].question}</h2>

                    <div className="space-y-3">
                        {QUESTIONNAIRE[currentQ].options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all
                                    ${answers[QUESTIONNAIRE[currentQ].id] === idx
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-gray-200 dark:border-gray-800 hover:border-blue-300'
                                    }`}
                            >
                                <span className="font-medium">{opt}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// ======================================
// ADVANCED VIEW - Test Series + Analytics
// ======================================
const MOCK_TESTS = [
    { id: 1, title: "Prelims Mock Test #1", questions: 100, time: 120, difficulty: "Medium", status: "available" },
    { id: 2, title: "Prelims Mock Test #2", questions: 100, time: 120, difficulty: "Hard", status: "available" },
    { id: 3, title: "Subject Test: Polity", questions: 50, time: 60, difficulty: "Medium", status: "completed", score: 72 },
    { id: 4, title: "Subject Test: History", questions: 50, time: 60, difficulty: "Hard", status: "completed", score: 58 },
    { id: 5, title: "Full Length Simulator", questions: 100, time: 120, difficulty: "UPSC", status: "locked" }
];

const AdvancedView = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'tests' | 'analytics'>('tests');

    const completed = MOCK_TESTS.filter(t => t.status === 'completed');
    const avgScore = completed.length > 0
        ? Math.round(completed.reduce((sum, t) => sum + (t.score || 0), 0) / completed.length)
        : 0;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
                <h1 className="text-3xl font-bold mb-2">Advanced Test Series</h1>
                <p className="text-purple-100">Prelims-focused tests with detailed analytics</p>
                <div className="flex gap-6 mt-6">
                    <div>
                        <div className="text-3xl font-bold">{completed.length}</div>
                        <div className="text-xs text-purple-200">Tests Completed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">{avgScore}%</div>
                        <div className="text-xs text-purple-200">Average Score</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">#{Math.floor(Math.random() * 500) + 1}</div>
                        <div className="text-xs text-purple-200">Your Rank</div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-6 py-2 rounded-xl font-bold transition-colors
                        ${activeTab === 'tests' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    Test Series
                </button>
                <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-6 py-2 rounded-xl font-bold transition-colors
                        ${activeTab === 'analytics' ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}
                >
                    Analytics
                </button>
            </div>

            {activeTab === 'tests' && (
                <div className="space-y-4">
                    {MOCK_TESTS.map(test => (
                        <div
                            key={test.id}
                            className={`bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between
                                ${test.status === 'locked' ? 'opacity-60' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold
                                    ${test.status === 'completed' ? 'bg-green-100 text-green-600' :
                                        test.status === 'locked' ? 'bg-gray-100 text-gray-400' : 'bg-purple-100 text-purple-600'}`}>
                                    {test.status === 'completed' ? `${test.score}%` : test.id}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{test.title}</h3>
                                    <p className="text-sm text-gray-500">
                                        {test.questions} Qs • {test.time} mins • {test.difficulty}
                                    </p>
                                </div>
                            </div>
                            <button
                                disabled={test.status === 'locked'}
                                className={`px-6 py-2 rounded-xl font-bold
                                    ${test.status === 'completed'
                                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                                        : test.status === 'locked'
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-purple-600 text-white hover:bg-purple-700'}`}
                            >
                                {test.status === 'completed' ? 'Review' : test.status === 'locked' ? 'Locked' : 'Start Test'}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'analytics' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-purple-600" />
                            Subject-wise Performance
                        </h3>
                        <div className="space-y-4">
                            {[
                                { subject: "Polity", score: 72, color: "bg-blue-500" },
                                { subject: "History", score: 58, color: "bg-amber-500" },
                                { subject: "Geography", score: 65, color: "bg-green-500" },
                                { subject: "Economy", score: 45, color: "bg-red-500" }
                            ].map(s => (
                                <div key={s.subject}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{s.subject}</span>
                                        <span className="font-bold">{s.score}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color}`} style={{ width: `${s.score}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            Improvement Areas
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                                <div>
                                    <div className="font-bold text-sm">Economy Basics</div>
                                    <div className="text-xs text-gray-500">15 questions missed in this area</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-900/10 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2" />
                                <div>
                                    <div className="font-bold text-sm">Modern History - Post 1857</div>
                                    <div className="text-xs text-gray-500">8 questions missed in this area</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                                <div>
                                    <div className="font-bold text-sm">Polity - Basics</div>
                                    <div className="text-xs text-gray-500">Strong area, keep revising</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

// ======================================
// MAIN COURSE PAGE CONTROLLER
// ======================================
export default function CoursePage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;

    const renderContent = () => {
        switch (courseId) {
            case 'beginner':
                return <BeginnerView />;
            case 'intermediate':
                return <IntermediateView />;
            case 'advanced':
                return <AdvancedView />;
            default:
                return <div>Course Not Found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-4 md:p-8">
            <button
                onClick={() => router.push('/student/upsc')}
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Store
            </button>
            {renderContent()}
        </div>
    );
}
