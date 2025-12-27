"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
    Calendar
} from "lucide-react";
import Link from "next/link";

// CSAT data for each month
const CSAT_DATA: Record<string, { month: string; topic: string; sessions: { day: number; title: string }[] }> = {
    january: {
        month: "January",
        topic: "Quantitative Aptitude",
        sessions: [
            { day: 1, title: "Number System Basics" },
            { day: 2, title: "LCM & HCF" },
            { day: 3, title: "Percentages" },
            { day: 4, title: "Profit & Loss" },
            { day: 5, title: "Simple & Compound Interest" },
            { day: 6, title: "Ratio & Proportion" },
            { day: 7, title: "Time & Work" },
            { day: 8, title: "Time, Speed & Distance" },
            { day: 9, title: "Averages & Mixtures" },
            { day: 10, title: "Data Interpretation - Tables" },
        ]
    },
    february: {
        month: "February",
        topic: "Logical Reasoning",
        sessions: [
            { day: 1, title: "Blood Relations" },
            { day: 2, title: "Direction Sense" },
            { day: 3, title: "Coding-Decoding" },
            { day: 4, title: "Syllogisms" },
            { day: 5, title: "Analogies" },
            { day: 6, title: "Series Completion" },
            { day: 7, title: "Statement & Assumptions" },
            { day: 8, title: "Statement & Arguments" },
            { day: 9, title: "Cause & Effect" },
            { day: 10, title: "Logical Puzzles" },
        ]
    },
    march: {
        month: "March",
        topic: "Reading Comprehension + Mocks",
        sessions: [
            { day: 1, title: "RC: Finding Main Idea" },
            { day: 2, title: "RC: Inference Questions" },
            { day: 3, title: "RC: Tone & Attitude" },
            { day: 4, title: "RC: Vocabulary in Context" },
            { day: 5, title: "RC: Passage Structure" },
            { day: 6, title: "Mock Test 1" },
            { day: 7, title: "Mock Test 2" },
            { day: 8, title: "Mock Test 3" },
            { day: 9, title: "Error Analysis & Review" },
            { day: 10, title: "Final Revision" },
        ]
    }
};

// Sample practice questions for each topic
const SAMPLE_QUESTIONS: Record<string, { id: number; question: string; options: string[]; correctAnswer: number; explanation: string }[]> = {
    january: [
        { id: 1, question: "If a train covers 360 km in 4 hours, what is its speed in km/hr?", options: ["80 km/hr", "90 km/hr", "85 km/hr", "95 km/hr"], correctAnswer: 1, explanation: "Speed = Distance / Time = 360 / 4 = 90 km/hr" },
        { id: 2, question: "A shopkeeper sells an article at 20% profit. If the cost price is ₹500, what is the selling price?", options: ["₹550", "₹600", "₹650", "₹700"], correctAnswer: 1, explanation: "SP = CP + 20% of CP = 500 + 100 = ₹600" },
        { id: 3, question: "The ratio of two numbers is 3:5. If their sum is 48, find the larger number.", options: ["18", "30", "24", "36"], correctAnswer: 1, explanation: "Let numbers be 3x and 5x. 8x = 48, x = 6. Larger = 5x = 30" },
        { id: 4, question: "If 15% of a number is 45, what is the number?", options: ["200", "250", "300", "350"], correctAnswer: 2, explanation: "(15/100) × x = 45. x = 300" },
        { id: 5, question: "A can complete work in 12 days, B in 15 days. Together?", options: ["6 days", "6⅔ days", "7 days", "8 days"], correctAnswer: 1, explanation: "1/12 + 1/15 = 9/60. Days = 60/9 = 6⅔ days" }
    ],
    february: [
        { id: 1, question: "A is B's father. C is A's brother. D is C's son. How is D related to B?", options: ["Brother", "Cousin", "Uncle", "Nephew"], correctAnswer: 1, explanation: "D is the son of B's uncle (C), making D a cousin of B." },
        { id: 2, question: "If APPLE is coded as ELPPA, how is MANGO coded?", options: ["OGNAM", "ONAGM", "GNAMO", "OGANM"], correctAnswer: 0, explanation: "The word is reversed. MANGO → OGNAM" },
        { id: 3, question: "Find the next: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "46"], correctAnswer: 1, explanation: "Differences: 4, 6, 8, 10, 12. Next = 30 + 12 = 42" },
        { id: 4, question: "All roses are flowers. Some flowers are red. Which is valid?", options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"], correctAnswer: 3, explanation: "We cannot conclude anything about roses being red." },
        { id: 5, question: "Pointing to a man, a woman said 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Mother", "Grandmother", "Sister", "Aunt"], correctAnswer: 0, explanation: "Only daughter of my mother = the woman herself. So she is the man's mother." }
    ],
    march: [
        { id: 1, question: "The primary purpose of the passage is to:", options: ["Criticize a theory", "Propose a solution", "Describe a phenomenon", "Compare two approaches"], correctAnswer: 2, explanation: "Most passages aim to describe/explain a phenomenon." },
        { id: 2, question: "The author's tone can best be described as:", options: ["Skeptical", "Objective", "Enthusiastic", "Dismissive"], correctAnswer: 1, explanation: "Academic passages typically maintain an objective tone." },
        { id: 3, question: "The word 'profound' as used in the passage most nearly means:", options: ["Deep", "Simple", "Obvious", "Quick"], correctAnswer: 0, explanation: "Profound = deep, intense, or far-reaching." },
        { id: 4, question: "Which of the following can be inferred from the passage?", options: ["The author agrees with the theory", "More research is needed", "The theory is proven wrong", "Scientists have reached consensus"], correctAnswer: 1, explanation: "Inference questions require reading between the lines." },
        { id: 5, question: "The author mentions 'statistics' primarily to:", options: ["Contradict an argument", "Support a claim", "Introduce a new topic", "Entertain the reader"], correctAnswer: 1, explanation: "Statistics are typically used to support claims." }
    ]
};

type ViewMode = 'sessions' | 'learning';

export default function CSATMonthPage() {
    const params = useParams();
    const monthSlug = params.month as string;

    const [viewMode, setViewMode] = useState<ViewMode>('sessions');
    const [selectedSession, setSelectedSession] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'video' | 'practice'>('video');
    const [videoUrl, setVideoUrl] = useState("");

    // Practice state
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [showResults, setShowResults] = useState(false);
    const [practiceStarted, setPracticeStarted] = useState(false);

    const monthData = CSAT_DATA[monthSlug];
    const questions = SAMPLE_QUESTIONS[monthSlug] || SAMPLE_QUESTIONS.january;

    if (!monthData) {
        return (
            <div className="max-w-6xl mx-auto p-6 text-center">
                <h1 className="text-2xl font-bold text-red-600">Month Not Found</h1>
                <p className="text-gray-600 mt-2">The requested month "{monthSlug}" is not available.</p>
                <Link href="/student/batch1/csat">
                    <Button className="mt-4">Go to CSAT Home</Button>
                </Link>
            </div>
        );
    }

    const handleSessionSelect = (sessionIndex: number) => {
        setSelectedSession(sessionIndex);
        setViewMode('learning');
        setActiveTab('video');
        setPracticeStarted(false);
        setShowResults(false);
        setCurrentQuestion(0);
        setSelectedAnswers({});
    };

    const handleAnswerSelect = (questionId: number, answerIndex: number) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) correct++;
        });
        return correct;
    };

    // Session Selection View
    if (viewMode === 'sessions') {
        return (
            <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
                <Link href="/student/batch1">
                    <Button variant="ghost">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                    </Button>
                </Link>

                <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Calendar className="h-8 w-8" />
                            <div>
                                <h2 className="text-2xl font-bold">{monthData.month}</h2>
                                <p className="text-amber-100">{monthData.topic}</p>
                            </div>
                        </div>
                        <p className="text-amber-200 mt-2">10 Sessions • 25 min video + 25 min practice each</p>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {monthData.sessions.map((session, idx) => (
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
    if (viewMode === 'learning' && selectedSession !== null) {
        const session = monthData.sessions[selectedSession];

        return (
            <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => { setViewMode('sessions'); setSelectedSession(null); }}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Sessions
                    </Button>
                    <div className="text-sm text-gray-500">
                        {monthData.month} • Day {session.day}
                    </div>
                </div>

                <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                    <CardContent className="p-6">
                        <h2 className="text-2xl font-bold">{session.title}</h2>
                        <p className="text-amber-100">{monthData.topic}</p>
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
                        <Card>
                            <CardContent className="p-6">
                                {/* Video URL Input */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Paste Video URL (YouTube)
                                    </label>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="https://www.youtube.com/watch?v=..."
                                            value={videoUrl}
                                            onChange={(e) => setVideoUrl(e.target.value)}
                                            className="flex-1"
                                        />
                                        <Button className="bg-amber-600 hover:bg-amber-700">
                                            Load
                                        </Button>
                                    </div>
                                </div>

                                {/* Video Player Area */}
                                <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                                    {videoUrl ? (
                                        <iframe
                                            src={videoUrl.includes("youtube.com/watch")
                                                ? videoUrl.replace("watch?v=", "embed/")
                                                : videoUrl.includes("youtu.be/")
                                                    ? videoUrl.replace("youtu.be/", "youtube.com/embed/")
                                                    : videoUrl}
                                            className="w-full h-full"
                                            allowFullScreen
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        />
                                    ) : (
                                        <div className="text-center text-gray-400">
                                            <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                            <p>Paste a YouTube URL above to start learning</p>
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
                                        {questions.length} questions based on today's video.<br />
                                        Time limit: 25 minutes
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
                                        {calculateScore()}/{questions.length}
                                    </div>

                                    {/* Answer Review */}
                                    <div className="text-left space-y-4 mt-6 border-t pt-6">
                                        <h4 className="font-semibold">Answer Review:</h4>
                                        {questions.map((q) => (
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
                                                        <p className="text-xs text-gray-500 mt-1">{q.explanation}</p>
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
                                        }}>
                                            Try Again
                                        </Button>
                                        <Button
                                            className="bg-amber-600 hover:bg-amber-700"
                                            onClick={() => { setViewMode('sessions'); setSelectedSession(null); }}
                                        >
                                            Next Session
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card>
                                <CardContent className="p-6">
                                    {/* Progress */}
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm text-gray-500">
                                            Question {currentQuestion + 1} of {questions.length}
                                        </span>
                                        <span className="text-sm text-amber-600 font-mono">
                                            <Timer className="inline h-4 w-4 mr-1" /> 25:00
                                        </span>
                                    </div>
                                    <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2 mb-6" />

                                    {/* Question */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                            {questions[currentQuestion].question}
                                        </h3>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-3 mb-6">
                                        {questions[currentQuestion].options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswerSelect(questions[currentQuestion].id, idx)}
                                                className={`w-full text-left p-4 rounded-lg border-2 transition ${selectedAnswers[questions[currentQuestion].id] === idx
                                                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${selectedAnswers[questions[currentQuestion].id] === idx
                                                            ? 'bg-amber-500 text-white'
                                                            : 'bg-gray-200 dark:bg-gray-700'
                                                        }`}>
                                                        {String.fromCharCode(65 + idx)}
                                                    </span>
                                                    <span>{option}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Navigation */}
                                    <div className="flex justify-between">
                                        <Button
                                            variant="outline"
                                            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                            disabled={currentQuestion === 0}
                                        >
                                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                                        </Button>

                                        {currentQuestion === questions.length - 1 ? (
                                            <Button
                                                className="bg-amber-600 hover:bg-amber-700"
                                                onClick={() => setShowResults(true)}
                                                disabled={Object.keys(selectedAnswers).length !== questions.length}
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
                                    <div className="mt-6 pt-6 border-t">
                                        <p className="text-sm text-gray-500 mb-3">Question Navigator</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {questions.map((q, idx) => (
                                                <button
                                                    key={q.id}
                                                    onClick={() => setCurrentQuestion(idx)}
                                                    className={`w-10 h-10 rounded flex items-center justify-center text-sm font-medium ${selectedAnswers[q.id] !== undefined
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
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        );
    }

    return null;
}
