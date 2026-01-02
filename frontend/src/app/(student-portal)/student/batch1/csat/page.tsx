"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
    Play,
    BookOpen,
    Clock,
    CheckCircle2,
    XCircle,
    ArrowLeft,
    ArrowRight,
    Video,
    FileQuestion,
    Trophy,
    Timer,
    Calendar,
    Maximize2,
    Minimize2,
    ZoomIn,
    ZoomOut,
    Lightbulb
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CSAT_DATA_MAP, VocabularyItem } from "./csat-data";

// Sample CSAT topics for each month
const CSAT_MONTHS = [
    {
        month: "January",
        topic: "English Comprehension (1-20) & Quants",
        sessions: [
            // English Comprehension Phase (Jan 1-20)
            { day: 1, title: "English: Reading Comprehension Foundation", videoUrl: "", completed: false },
            { day: 2, title: "English: Determining Main Idea & Theme", videoUrl: "", completed: false },
            { day: 3, title: "English: Inference & Conclusion Based", videoUrl: "", completed: false },
            { day: 4, title: "English: Tone, Style & Attitude", videoUrl: "", completed: false },
            { day: 5, title: "English: Assumptions & Implicit Concepts", videoUrl: "", completed: false },
            { day: 6, title: "English: Vocabulary in Context", videoUrl: "", completed: false },
            { day: 7, title: "English: Para Jumbles & Ordering", videoUrl: "", completed: false },
            { day: 8, title: "English: Sentence Correction Rules", videoUrl: "", completed: false },
            { day: 9, title: "English: Critical Reasoning Basics", videoUrl: "", completed: false },
            { day: 10, title: "English: Weak vs Strong Arguments", videoUrl: "", completed: false },
            { day: 11, title: "English: Causes & Effects", videoUrl: "", completed: false },
            { day: 12, title: "English: Course of Action", videoUrl: "", completed: false },
            { day: 13, title: "English: Syllogisms & Logic", videoUrl: "", completed: false },
            { day: 14, title: "English: RC Practice Set 1 (Politics)", videoUrl: "", completed: false },
            { day: 15, title: "English: RC Practice Set 2 (Economy)", videoUrl: "", completed: false },
            { day: 16, title: "English: RC Practice Set 3 (Science)", videoUrl: "", completed: false },
            { day: 17, title: "English: RC Practice Set 4 (Philosophy)", videoUrl: "", completed: false },
            { day: 18, title: "English: Mixed Verbal Ability Test", videoUrl: "", completed: false },
            { day: 19, title: "English: Previous Year Questions Analysis", videoUrl: "", completed: false },
            { day: 20, title: "English: Final Comprehension Mock", videoUrl: "", completed: false },

            // Quants & Reasoning Phase (Starts Jan 21)
            { day: 21, title: "Quants: Number System Basics", videoUrl: "", completed: false },
            { day: 22, title: "Quants: HCF & LCM, Remainders", videoUrl: "", completed: false },
            { day: 23, title: "Quants: Simplification & series", videoUrl: "", completed: false },
            { day: 24, title: "Reasoning: Blood Relations", videoUrl: "", completed: false },
            { day: 25, title: "Reasoning: Direction Sense Test", videoUrl: "", completed: false },
            { day: 26, title: "Quants: Percentages Foundation", videoUrl: "", completed: false },
            { day: 27, title: "Quants: Profit, Loss & Discount", videoUrl: "", completed: false },
            { day: 28, title: "Reasoning: Coding-Decoding", videoUrl: "", completed: false },
            { day: 29, title: "Quants: Averages & Allegations", videoUrl: "", completed: false },
            { day: 30, title: "Monthly Mock Test (Mixed)", videoUrl: "", completed: false },
        ]
    },
    {
        month: "February",
        topic: "Core Quants & Logical Reasoning",
        sessions: [
            { day: 1, title: "Quants: Simple & Compound Interest", videoUrl: "", completed: false },
            { day: 2, title: "Quants: Ratio & Proportion", videoUrl: "", completed: false },
            { day: 3, title: "Quants: Time & Work", videoUrl: "", completed: false },
            { day: 4, title: "Quants: Time, Speed & Distance", videoUrl: "", completed: false },
            { day: 5, title: "Quants: Trains & Boats", videoUrl: "", completed: false },
            { day: 6, title: "Reasoning: Seating Arrangements", videoUrl: "", completed: false },
            { day: 7, title: "Reasoning: Puzzles & Tabulation", videoUrl: "", completed: false },
            { day: 8, title: "Quants: Algebra Basics", videoUrl: "", completed: false },
            { day: 9, title: "Reasoning: Cubes & Dice", videoUrl: "", completed: false },
            { day: 10, title: "Quants: Data Interpretation (Tables)", videoUrl: "", completed: false },
            // Extended Feb could go here
        ]
    },
    {
        month: "March",
        topic: "Advanced Reasoning, DI & Mocks",
        sessions: [
            { day: 1, title: "DI: Bar Graphs & Charts", videoUrl: "", completed: false },
            { day: 2, title: "DI: Pie Charts & Caselets", videoUrl: "", completed: false },
            { day: 3, title: "Reasoning: Statement & Assumptions", videoUrl: "", completed: false },
            { day: 4, title: "Reasoning: Statement & Arguments", videoUrl: "", completed: false },
            { day: 5, title: "Quants: Permutation & Combination", videoUrl: "", completed: false },
            { day: 6, title: "Quants: Probability", videoUrl: "", completed: false },
            { day: 7, title: "Full Length Mock Test 1", videoUrl: "", completed: false },
            { day: 8, title: "Full Length Mock Test 2", videoUrl: "", completed: false },
            { day: 9, title: "Error Analysis & Review", videoUrl: "", completed: false },
            { day: 10, title: "Final Revision Strategy", videoUrl: "", completed: false },
        ]
    }
];

// Sample practice questions
const SAMPLE_QUESTIONS = [
    {
        id: 1,
        question: "If a train covers 360 km in 4 hours, what is its speed in km/hr?",
        options: ["80 km/hr", "90 km/hr", "85 km/hr", "95 km/hr"],
        correctAnswer: 1,
        explanation: "Speed = Distance / Time = 360 / 4 = 90 km/hr"
    },
    {
        id: 2,
        question: "A shopkeeper sells an article at 20% profit. If the cost price is ₹500, what is the selling price?",
        options: ["₹550", "₹600", "₹650", "₹700"],
        correctAnswer: 1,
        explanation: "SP = CP + 20% of CP = 500 + (20/100 × 500) = 500 + 100 = ₹600"
    },
    {
        id: 3,
        question: "The ratio of two numbers is 3:5. If their sum is 48, find the larger number.",
        options: ["18", "30", "24", "36"],
        correctAnswer: 1,
        explanation: "Let numbers be 3x and 5x. 3x + 5x = 48, so 8x = 48, x = 6. Larger number = 5x = 30"
    },
    {
        id: 4,
        question: "If 15% of a number is 45, what is the number?",
        options: ["200", "250", "300", "350"],
        correctAnswer: 2,
        explanation: "Let number be x. 15% of x = 45. (15/100) × x = 45. x = 45 × 100/15 = 300"
    },
    {
        id: 5,
        question: "A can complete a work in 12 days. B can complete the same work in 15 days. In how many days can they complete it together?",
        options: ["6 days", "6⅔ days", "7 days", "8 days"],
        correctAnswer: 1,
        explanation: "A's 1 day work = 1/12, B's 1 day work = 1/15. Together = 1/12 + 1/15 = 9/60 = 3/20. Days = 20/3 = 6⅔ days"
    }
];

type ViewMode = 'months' | 'sessions' | 'learning';

export default function CSATPage() {
    const [viewMode, setViewMode] = useState<ViewMode>('months');
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedSession, setSelectedSession] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'video' | 'practice'>('video');
    const [videoUrl, setVideoUrl] = useState("");

    const searchParams = useSearchParams();
    const dayParam = searchParams.get('day');

    // Practice state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [showResults, setShowResults] = useState(false);
    const [practiceStarted, setPracticeStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
    const [showVocabulary, setShowVocabulary] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initial load from params
    useState(() => {
        if (dayParam) {
            const dayNum = parseInt(dayParam, 10);
            if (dayNum > 0 && dayNum <= 30) {
                setSelectedMonth(0); // Assuming Jan/Phase 1 for Day 1-30
                setSelectedSession(dayNum - 1);
                setViewMode('learning');
                setActiveTab('practice');
            }
        }
    });

    // Passage readability controls
    const [passageFontSize, setPassageFontSize] = useState(14); // Default 14px
    const [isPassageFullscreen, setIsPassageFullscreen] = useState(false);

    const handleMonthSelect = (monthIndex: number) => {
        setSelectedMonth(monthIndex);
        setViewMode('sessions');
    };

    const handleSessionSelect = (sessionIndex: number) => {
        setSelectedSession(sessionIndex);
        setViewMode('learning');
        // For Day 1, skip video and go straight to practice as per request
        const isDay1Session = selectedMonth === 0 && sessionIndex === 0;
        setActiveTab(isDay1Session ? 'practice' : 'video');
        setPracticeStarted(false);
        setShowResults(false);
        setCurrentQuestion(0);
        setSelectedAnswers({});
    };

    const handleAnswerSelect = (questionId: number, answerIndex: number) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const currentSessionDay = selectedMonth === 0 ? (selectedSession ?? 0) + 1 : 0;
    const sessionData = CSAT_DATA_MAP[currentSessionDay];

    // Determine current questions based on session
    const currentQuestions = sessionData
        ? sessionData.passages.flatMap(p => p.questions)
        : SAMPLE_QUESTIONS;

    // Find current passage
    const currentPassage = sessionData && currentQuestions[currentQuestion]
        ? sessionData.passages.find(p => p.questions.some(q => q.id === currentQuestions[currentQuestion].id))
        : null;

    const handleSubmit = () => {
        const unasweredCount = currentQuestions.length - Object.keys(selectedAnswers).length;
        if (unasweredCount > 0) {
            if (confirm(`You have ${unasweredCount} unanswered questions. Are you sure you want to submit?`)) {
                setShowResults(true);
            }
        } else {
            setShowResults(true);
        }
    };

    const calculateScore = () => {
        let correct = 0;
        currentQuestions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) correct++;
        });
        return correct;
    };

    // Session Selection View
    if (viewMode === 'sessions' && selectedMonth !== null) {
        const month = CSAT_MONTHS[selectedMonth];

        return (
            <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
                <Button variant="ghost" onClick={() => setViewMode('months')}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Months
                </Button>

                <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                            {month.month}: {month.topic}
                        </h2>
                        <p className="text-amber-600 dark:text-amber-400">10 Sessions • 25 min video + 25 min practice each</p>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {month.sessions.map((session, idx) => (
                        <Card
                            key={idx}
                            className="cursor-pointer hover:shadow-md hover:border-amber-500 transition-all"
                            onClick={() => handleSessionSelect(idx)}
                        >
                            <CardContent className="p-4 text-center">
                                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                    <span className="text-xl font-bold text-amber-600">{session.day}</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 line-clamp-2">
                                    {session.title}
                                </p>
                                <div className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                                    <Clock className="h-3 w-3" /> 50 min
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    // Learning View (Video + Practice)
    if (viewMode === 'learning' && selectedMonth !== null && selectedSession !== null) {
        const month = CSAT_MONTHS[selectedMonth];
        const session = month.sessions[selectedSession];

        return (
            <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => { setViewMode('sessions'); setSelectedSession(null); }}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sessions
                    </Button>
                    <div className="text-sm text-gray-500">
                        {month.month} • Day {session.day}
                    </div>
                </div>

                <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold">{session.title}</h2>
                        <p className="text-amber-100">{month.topic}</p>
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'video' | 'practice')} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="video" className="flex items-center gap-2">
                            <Video className="h-4 w-4" /> Video (25 min)
                        </TabsTrigger>
                        <TabsTrigger value="practice" className="flex items-center gap-2">
                            <FileQuestion className="h-4 w-4" /> Practice (25 min)
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="video" className="mt-6">
                        {sessionData ? (
                            <Card>
                                <CardContent className="p-8 text-center bg-amber-50 dark:bg-amber-900/10">
                                    <Video className="h-12 w-12 mx-auto text-amber-600 mb-4 opacity-50" />
                                    <h3 className="text-xl font-semibold mb-2">Live Session Scheduled</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        The video for this session will be conducted live.
                                        Please proceed to the Practice section.
                                    </p>
                                    <Button
                                        className="mt-4 bg-amber-600 hover:bg-amber-700"
                                        onClick={() => setActiveTab('practice')}
                                    >
                                        Go to Practice
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card>
                                <CardContent className="p-6">
                                    {/* Video URL Input */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Paste Video URL (YouTube/Vimeo)
                                        </label>
                                        <div className="flex gap-2">
                                            <Input
                                                placeholder="https://www.youtube.com/watch?v=..."
                                                value={videoUrl}
                                                onChange={(e) => setVideoUrl(e.target.value)}
                                                className="flex-1"
                                            />
                                            <Button className="bg-amber-600 hover:bg-amber-700">
                                                Load Video
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Video Player Area */}
                                    <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
                                        {videoUrl ? (
                                            <iframe
                                                src={videoUrl.replace("watch?v=", "embed/")}
                                                className="w-full h-full rounded-xl"
                                                allowFullScreen
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            />
                                        ) : (
                                            <div className="text-center text-gray-400">
                                                <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                                <p>Paste a video URL above to start learning</p>
                                                <p className="text-sm mt-2">Recommended: 25 minute explanation video</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex justify-between items-center">
                                        <div className="text-sm text-gray-500">
                                            <Timer className="inline h-4 w-4 mr-1" />
                                            Watch the complete video before practice
                                        </div>
                                        <Button
                                            className="bg-amber-600 hover:bg-amber-700"
                                            onClick={() => setActiveTab('practice')}
                                        >
                                            Proceed to Practice <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="practice" className="mt-6">
                        {!practiceStarted && !showResults ? (
                            <Card>
                                <CardContent className="p-8 text-center">
                                    <FileQuestion className="h-16 w-16 mx-auto text-amber-600 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        Practice Session
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {currentQuestions.length} questions based on today's session.<br />
                                        {currentSessionDay === 1 ? "Reading Comprehension Analysis" : "Time limit: 25 minutes"}
                                    </p>
                                    <Button
                                        size="lg"
                                        className="bg-amber-600 hover:bg-amber-700"
                                        onClick={() => setPracticeStarted(true)}
                                    >
                                        <Play className="mr-2 h-5 w-5" /> Start Practice
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : showResults ? (
                            <Card>
                                <CardContent className="p-8 text-center">
                                    <Trophy className="h-16 w-16 mx-auto text-amber-600 mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                        Practice Complete! 🎉
                                    </h3>
                                    <div className="text-5xl font-bold text-amber-600 my-4">
                                        {calculateScore()}/{currentQuestions.length}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                                        {calculateScore() === currentQuestions.length
                                            ? "Perfect Score! Excellent work!"
                                            : calculateScore() >= currentQuestions.length * 0.6
                                                ? "Good job! Keep practicing!"
                                                : "Review the concepts and try again!"}
                                    </p>

                                    {/* Show answers review */}
                                    <div className="text-left space-y-4 mt-6 border-t pt-6">
                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300">Answer Review:</h4>
                                        {currentQuestions.map((q, idx) => (
                                            <div key={q.id} className={`p-4 rounded-lg ${selectedAnswers[q.id] === q.correctAnswer
                                                ? 'bg-green-50 dark:bg-green-900/20'
                                                : 'bg-red-50 dark:bg-red-900/20'
                                                }`}>
                                                <div className="flex items-start gap-2">
                                                    {selectedAnswers[q.id] === q.correctAnswer
                                                        ? <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                                                        : <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                                                    }
                                                    <div>
                                                        <p className="font-medium text-sm">{q.question}</p>
                                                        <p className="text-xs text-gray-600 mt-1">
                                                            Correct: {q.options[q.correctAnswer]}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {q.explanation}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 justify-center mt-6">
                                        <Button variant="outline" onClick={() => {
                                            setPracticeStarted(false);
                                            setShowResults(false);
                                            setCurrentQuestion(0);
                                            setSelectedAnswers({});
                                            setShowVocabulary(false);
                                        }}>
                                            Try Again
                                        </Button>
                                        {sessionData?.vocabulary && (
                                            <Button
                                                className="bg-purple-600 hover:bg-purple-700"
                                                onClick={() => setShowVocabulary(true)}
                                            >
                                                View Vocabulary Guide
                                            </Button>
                                        )}
                                        <Button
                                            className="bg-amber-600 hover:bg-amber-700"
                                            onClick={() => { setViewMode('sessions'); setSelectedSession(null); }}
                                        >
                                            Next Session
                                        </Button>
                                    </div>

                                    {/* Vocabulary Dialog/Popup */}
                                    {showVocabulary && sessionData?.vocabulary && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-300">
                                            <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                                                <CardHeader className="bg-purple-600 text-white flex flex-row items-center justify-between">
                                                    <CardTitle className="text-xl">Day {currentSessionDay} Vocabulary Guide</CardTitle>
                                                    <Button variant="ghost" size="sm" onClick={() => setShowVocabulary(false)} className="text-white hover:bg-white/20">
                                                        ✕
                                                    </Button>
                                                </CardHeader>
                                                <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 italic text-purple-700 text-sm">
                                                        Note: These words were selected from today's passages. Master these to improve your RC accuracy.
                                                    </div>
                                                    {sessionData.vocabulary.map((item, idx) => (
                                                        <div key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <h4 className="font-bold text-lg text-gray-900">{item.word}</h4>
                                                                {item.toneIndicator && (
                                                                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${item.toneIndicator === 'positive' ? 'bg-green-100 text-green-700' :
                                                                        item.toneIndicator === 'negative' ? 'bg-red-100 text-red-700' :
                                                                            'bg-gray-100 text-gray-700'
                                                                        }`}>
                                                                        {item.toneIndicator}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-gray-800 mb-2 font-medium">{item.definition}</p>
                                                            <div className="bg-gray-50 p-2 rounded text-xs text-gray-600 mb-2 border-l-2 border-gray-300">
                                                                <span className="font-bold">Context:</span> "{item.context}"
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                                <div><span className="font-bold text-gray-500">Synonyms:</span> {item.synonyms.join(', ')}</div>
                                                                {item.antonyms.length > 0 && <div><span className="font-bold text-gray-500">Antonyms:</span> {item.antonyms.join(', ')}</div>}
                                                            </div>
                                                            {item.csatTip && (
                                                                <div className="mt-2 text-xs bg-amber-50 text-amber-700 p-2 rounded flex items-start gap-2">
                                                                    <Lightbulb className="w-4 h-4 shrink-0" />
                                                                    {item.csatTip}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </CardContent>
                                                <div className="p-4 border-t bg-gray-50 flex justify-end">
                                                    <Button onClick={() => setShowVocabulary(false)}>Close Guide</Button>
                                                </div>
                                            </Card>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ) : (
                            <div className={isPassageFullscreen ? "" : "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"}>
                                {/* Passage Display (Left/Top) - Only for Day 1/RC */}
                                {currentPassage && (
                                    <Card className={`${isPassageFullscreen ? 'fixed inset-4 z-50 h-auto' : 'h-[600px]'} overflow-y-auto border-2 border-amber-100 dark:border-amber-900/30 bg-white dark:bg-gray-950`}>
                                        <CardHeader className="pb-2 sticky top-0 bg-white dark:bg-gray-950 z-10 border-b">
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-lg text-amber-700">
                                                    {currentPassage.title}
                                                </CardTitle>
                                                <div className="flex items-center gap-2">
                                                    {/* Font Size Controls */}
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setPassageFontSize(prev => Math.max(12, prev - 2))}
                                                        disabled={passageFontSize <= 12}
                                                        title="Decrease font size"
                                                    >
                                                        <ZoomOut className="h-4 w-4" />
                                                    </Button>
                                                    <span className="text-xs text-gray-500 min-w-[40px] text-center">{passageFontSize}px</span>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setPassageFontSize(prev => Math.min(24, prev + 2))}
                                                        disabled={passageFontSize >= 24}
                                                        title="Increase font size"
                                                    >
                                                        <ZoomIn className="h-4 w-4" />
                                                    </Button>

                                                    {/* Fullscreen Toggle */}
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setIsPassageFullscreen(prev => !prev)}
                                                        title={isPassageFullscreen ? "Exit fullscreen" : "Fullscreen"}
                                                        className="ml-2"
                                                    >
                                                        {isPassageFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <div
                                                className="prose dark:prose-invert max-w-none leading-relaxed whitespace-pre-wrap"
                                                style={{ fontSize: `${passageFontSize}px`, lineHeight: '1.8' }}
                                            >
                                                {currentPassage.text}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Question Display (Right/Bottom) - Hidden when passage is fullscreen */}
                                <Card className={`${currentPassage ? 'h-[600px] flex flex-col' : ''} ${isPassageFullscreen ? 'hidden' : ''}`}>
                                    <CardContent className="p-6 flex flex-col h-full">
                                        {/* Progress */}
                                        <div className="flex justify-between items-center mb-4 shrink-0">
                                            <span className="text-sm text-gray-500">
                                                Question {currentQuestion + 1} of {currentQuestions.length}
                                            </span>
                                            <span className="text-sm text-amber-600 font-mono">
                                                <Timer className="inline h-4 w-4 mr-1" />
                                                25:00
                                            </span>
                                        </div>
                                        <Progress value={((currentQuestion + 1) / currentQuestions.length) * 100} className="h-2 mb-6 shrink-0" />

                                        <div className="flex-1 overflow-y-auto pr-2">
                                            {/* Question */}
                                            <div className="mb-6">
                                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                    {currentQuestions[currentQuestion].question}
                                                </h3>
                                            </div>

                                            {/* Options */}
                                            <div className="space-y-3 mb-6">
                                                {currentQuestions[currentQuestion].options.map((option, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAnswerSelect(currentQuestions[currentQuestion].id, idx)}
                                                        className={`w-full text-left p-4 rounded-lg border-2 transition ${selectedAnswers[currentQuestions[currentQuestion].id] === idx
                                                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${selectedAnswers[currentQuestions[currentQuestion].id] === idx
                                                                ? 'bg-amber-500 text-white'
                                                                : 'bg-gray-200 dark:bg-gray-700'
                                                                }`}>
                                                                {String.fromCharCode(65 + idx)}
                                                            </span>
                                                            <span className="text-sm">{option}</span>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Navigation */}
                                        <div className="flex justify-between mt-4 shrink-0 pt-4 border-t">
                                            <Button
                                                variant="outline"
                                                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                                disabled={currentQuestion === 0}
                                            >
                                                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                                            </Button>

                                            {currentQuestion === currentQuestions.length - 1 ? (
                                                <Button
                                                    className="bg-amber-600 hover:bg-amber-700"
                                                    onClick={handleSubmit}
                                                >
                                                    Submit <CheckCircle2 className="ml-2 h-4 w-4" />
                                                </Button>
                                            ) : (
                                                <Button
                                                    className="bg-amber-600 hover:bg-amber-700"
                                                    onClick={() => setCurrentQuestion(prev => prev + 1)}
                                                >
                                                    Next <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>

                                        {/* Question Navigator */}
                                        <div className="mt-4 pt-4 border-t shrink-0">
                                            <p className="text-sm text-gray-500 mb-2">Question Navigator</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {currentQuestions.map((q, idx) => (
                                                    <button
                                                        key={q.id}
                                                        onClick={() => setCurrentQuestion(idx)}
                                                        className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium ${selectedAnswers[q.id] !== undefined
                                                            ? 'bg-amber-500 text-white'
                                                            : idx === currentQuestion
                                                                ? 'bg-gray-200 border-2 border-amber-500'
                                                                : 'bg-gray-100 dark:bg-gray-800'
                                                            }`}
                                                    >
                                                        {idx + 1}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            <div className="flex items-center gap-4">
                <Link href="/student/batch1">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                    </Button>
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">CSAT Parallel Track</h1>
                <p className="text-gray-600 dark:text-gray-400">3 Hours Daily • Paper 2 Preparation</p>
            </div>

            <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-xl font-bold">Your CSAT Journey</h2>
                            <p className="text-amber-100">25 min Video + 25 min Practice per session</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold">0%</div>
                            <div className="text-sm text-amber-200">Completed</div>
                        </div>
                    </div>
                    <Progress value={0} className="h-3 bg-white/20 mt-4" />
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CSAT_MONTHS.map((month, idx) => (
                    <Card
                        key={idx}
                        className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-amber-500"
                        onClick={() => handleMonthSelect(idx)}
                    >
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-amber-600" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">{month.month}</CardTitle>
                                    <p className="text-sm text-gray-500">{month.topic}</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Video className="h-4 w-4" /> 10 Sessions
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> ~8 hrs
                                </span>
                            </div>
                            <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                                Start Learning
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
