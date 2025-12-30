"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
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
    AlertTriangle,
    Save
} from "lucide-react";
import Link from "next/link";

// API Base URL
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Save progress to backend
async function saveProgress(data: {
    user_id: string;
    month: string;
    session_day: number;
    video_completed: boolean;
    practice_score: number;
    time_spent_minutes: number;
}) {
    try {
        const response = await fetch(`${API_BASE}/session-progress/csat/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response.ok;
    } catch (error) {
        console.error('Failed to save progress:', error);
        return false;
    }
}

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

// Expanded practice questions (15 per topic)
const SAMPLE_QUESTIONS: Record<string, { id: number; question: string; options: string[]; correctAnswer: number; explanation: string }[]> = {
    january: [
        { id: 1, question: "If a train covers 360 km in 4 hours, what is its speed in km/hr?", options: ["80 km/hr", "90 km/hr", "85 km/hr", "95 km/hr"], correctAnswer: 1, explanation: "Speed = Distance / Time = 360 / 4 = 90 km/hr" },
        { id: 2, question: "A shopkeeper sells an article at 20% profit. If the cost price is ₹500, what is the selling price?", options: ["₹550", "₹600", "₹650", "₹700"], correctAnswer: 1, explanation: "SP = CP + 20% of CP = 500 + 100 = ₹600" },
        { id: 3, question: "The ratio of two numbers is 3:5. If their sum is 48, find the larger number.", options: ["18", "30", "24", "36"], correctAnswer: 1, explanation: "Let numbers be 3x and 5x. 8x = 48, x = 6. Larger = 5x = 30" },
        { id: 4, question: "If 15% of a number is 45, what is the number?", options: ["200", "250", "300", "350"], correctAnswer: 2, explanation: "(15/100) × x = 45. x = 300" },
        { id: 5, question: "A can complete work in 12 days, B in 15 days. Together?", options: ["6 days", "6⅔ days", "7 days", "8 days"], correctAnswer: 1, explanation: "1/12 + 1/15 = 9/60. Days = 60/9 = 6⅔ days" },
        { id: 6, question: "Find HCF of 24 and 36.", options: ["6", "8", "12", "18"], correctAnswer: 2, explanation: "24 = 2³×3, 36 = 2²×3². HCF = 2²×3 = 12" },
        { id: 7, question: "LCM of 12 and 18 is:", options: ["36", "72", "6", "216"], correctAnswer: 0, explanation: "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36" },
        { id: 8, question: "A man sells an article for ₹450 losing 10%. What is the CP?", options: ["₹400", "₹500", "₹405", "₹495"], correctAnswer: 1, explanation: "SP = CP × 0.9. 450 = CP × 0.9. CP = 500" },
        { id: 9, question: "Simple Interest on ₹1000 at 5% for 2 years is:", options: ["₹100", "₹50", "₹150", "₹200"], correctAnswer: 0, explanation: "SI = P×R×T/100 = 1000×5×2/100 = ₹100" },
        { id: 10, question: "If A:B = 2:3 and B:C = 4:5, find A:C", options: ["8:15", "2:5", "4:15", "6:5"], correctAnswer: 0, explanation: "A:B:C = 8:12:15, so A:C = 8:15" },
        { id: 11, question: "A pipe can fill a tank in 6 hours. How much of the tank is filled in 2 hours?", options: ["1/2", "1/3", "1/4", "2/3"], correctAnswer: 1, explanation: "In 1 hour = 1/6, in 2 hours = 2/6 = 1/3" },
        { id: 12, question: "Average of 5, 10, 15, 20, 25 is:", options: ["12", "15", "18", "20"], correctAnswer: 1, explanation: "Sum = 75, Average = 75/5 = 15" },
        { id: 13, question: "Two numbers are in ratio 3:5. If 9 is added to each, ratio becomes 3:4. Find smaller number.", options: ["27", "36", "45", "18"], correctAnswer: 0, explanation: "3x+9/5x+9 = 3/4. 12x+36 = 15x+27. x = 9. Smaller = 27" },
        { id: 14, question: "A car travels 180 km in 3 hours. What time to cover 300 km at same speed?", options: ["4 hours", "5 hours", "6 hours", "4.5 hours"], correctAnswer: 1, explanation: "Speed = 60 km/hr. Time = 300/60 = 5 hours" },
        { id: 15, question: "Compound Interest on ₹1000 at 10% for 2 years is:", options: ["₹200", "₹210", "₹220", "₹100"], correctAnswer: 1, explanation: "CI = 1000(1.1)² - 1000 = 1210 - 1000 = ₹210" }
    ],
    february: [
        { id: 1, question: "A is B's father. C is A's brother. D is C's son. How is D related to B?", options: ["Brother", "Cousin", "Uncle", "Nephew"], correctAnswer: 1, explanation: "D is the son of B's uncle (C), making D a cousin of B." },
        { id: 2, question: "If APPLE is coded as ELPPA, how is MANGO coded?", options: ["OGNAM", "ONAGM", "GNAMO", "OGANM"], correctAnswer: 0, explanation: "The word is reversed. MANGO → OGNAM" },
        { id: 3, question: "Find the next: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "46"], correctAnswer: 1, explanation: "Differences: 4, 6, 8, 10, 12. Next = 30 + 12 = 42" },
        { id: 4, question: "All roses are flowers. Some flowers are red. Which is valid?", options: ["All roses are red", "Some roses are red", "No roses are red", "Cannot be determined"], correctAnswer: 3, explanation: "We cannot conclude anything about roses being red." },
        { id: 5, question: "Pointing to a man, a woman said 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Mother", "Grandmother", "Sister", "Aunt"], correctAnswer: 0, explanation: "Only daughter of my mother = the woman herself. So she is the man's mother." },
        { id: 6, question: "If CAT = 24, DOG = ?", options: ["26", "27", "25", "28"], correctAnswer: 0, explanation: "C=3,A=1,T=20. Sum=24. D=4,O=15,G=7. Sum=26" },
        { id: 7, question: "A walks 10m North, turns right, walks 5m. Direction from start?", options: ["North-East", "South-East", "North-West", "South-West"], correctAnswer: 0, explanation: "North then East = North-East" },
        { id: 8, question: "Complete: 1, 4, 9, 16, 25, ?", options: ["30", "36", "49", "64"], correctAnswer: 1, explanation: "Squares: 1², 2², 3², 4², 5², 6²=36" },
        { id: 9, question: "If 'MACHINE' = 19, then 'COMPUTE' = ?", options: ["20", "21", "19", "22"], correctAnswer: 1, explanation: "MACHINE has 7 letters. 7+12=19. COMPUTE has 7 letters. 7+14=21" },
        { id: 10, question: "Statement: All kings are rich. Some rich are happy. Conclusion?", options: ["All kings are happy", "Some kings are happy", "No king is happy", "Cannot be determined"], correctAnswer: 3, explanation: "No direct link between kings and happy" },
        { id: 11, question: "B is the brother of A. C is the mother of A. D is the father of C. How is B related to D?", options: ["Grandson", "Son", "Nephew", "Grandfather"], correctAnswer: 0, explanation: "D is maternal grandfather of B" },
        { id: 12, question: "Find odd one: 3, 5, 11, 14, 17, 21", options: ["21", "14", "11", "17"], correctAnswer: 1, explanation: "14 is the only non-prime number" },
        { id: 13, question: "Clock shows 3:15. Angle between hands?", options: ["0°", "7.5°", "15°", "22.5°"], correctAnswer: 1, explanation: "Hour at 97.5°, Minute at 90°. Diff = 7.5°" },
        { id: 14, question: "If + means ÷, - means ×, × means +, ÷ means -. Then 8+4-2×6÷3=?", options: ["4", "7", "10", "11"], correctAnswer: 1, explanation: "8÷4×2+6-3 = 2×2+6-3 = 4+6-3 = 7" },
        { id: 15, question: "Statement: Smoking is injurious. Conclusion: People should quit.", options: ["Valid", "Invalid", "Assumption", "Can't say"], correctAnswer: 0, explanation: "If injurious, logically one should quit" }
    ],
    march: [
        { id: 1, question: "The primary purpose of the passage is to:", options: ["Criticize a theory", "Propose a solution", "Describe a phenomenon", "Compare two approaches"], correctAnswer: 2, explanation: "Most passages aim to describe/explain a phenomenon." },
        { id: 2, question: "The author's tone can best be described as:", options: ["Skeptical", "Objective", "Enthusiastic", "Dismissive"], correctAnswer: 1, explanation: "Academic passages typically maintain an objective tone." },
        { id: 3, question: "The word 'profound' as used in the passage most nearly means:", options: ["Deep", "Simple", "Obvious", "Quick"], correctAnswer: 0, explanation: "Profound = deep, intense, or far-reaching." },
        { id: 4, question: "Which of the following can be inferred from the passage?", options: ["The author agrees with the theory", "More research is needed", "The theory is proven wrong", "Scientists have reached consensus"], correctAnswer: 1, explanation: "Inference questions require reading between the lines." },
        { id: 5, question: "The author mentions 'statistics' primarily to:", options: ["Contradict an argument", "Support a claim", "Introduce a new topic", "Entertain the reader"], correctAnswer: 1, explanation: "Statistics are typically used to support claims." },
        { id: 6, question: "What is the logical conclusion of the argument?", options: ["More funding needed", "Theory is flawed", "Success is guaranteed", "Both A and B"], correctAnswer: 3, explanation: "Arguments often lead to multiple related conclusions" },
        { id: 7, question: "'Ubiquitous' in context means:", options: ["Rare", "Everywhere", "Hidden", "Ancient"], correctAnswer: 1, explanation: "Ubiquitous = present everywhere" },
        { id: 8, question: "The passage would most likely appear in:", options: ["A novel", "A scientific journal", "A cookbook", "A comic book"], correctAnswer: 1, explanation: "Academic/analytical content = journal" },
        { id: 9, question: "The author's main argument is weakened by:", options: ["Lack of evidence", "Circular reasoning", "Expert testimony", "Statistical data"], correctAnswer: 0, explanation: "Lack of evidence weakens arguments" },
        { id: 10, question: "The phrase 'cutting edge' suggests:", options: ["Dangerous", "Innovative", "Old-fashioned", "Simple"], correctAnswer: 1, explanation: "Cutting edge = most advanced/innovative" },
        { id: 11, question: "According to the passage, the main challenge is:", options: ["Cost", "Time", "Technology", "All of these"], correctAnswer: 3, explanation: "Multiple challenges are typically mentioned" },
        { id: 12, question: "The author would most likely agree with:", options: ["Progress is slow", "Change is necessary", "Status quo is best", "Research is useless"], correctAnswer: 1, explanation: "Authors usually advocate for positive change" },
        { id: 13, question: "The structure of the passage is best described as:", options: ["Chronological", "Compare-contrast", "Problem-solution", "Cause-effect"], correctAnswer: 2, explanation: "Many passages follow problem-solution format" },
        { id: 14, question: "The word 'mitigate' most closely means:", options: ["Worsen", "Ignore", "Reduce", "Increase"], correctAnswer: 2, explanation: "Mitigate = make less severe, reduce" },
        { id: 15, question: "What assumption underlies the author's argument?", options: ["Data is accurate", "Critics are wrong", "Change is possible", "All of the above"], correctAnswer: 3, explanation: "Arguments rest on multiple assumptions" }
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

    // Timer state (25 minutes = 1500 seconds)
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [timerActive, setTimerActive] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const monthData = CSAT_DATA[monthSlug];
    const questions = SAMPLE_QUESTIONS[monthSlug] || SAMPLE_QUESTIONS.january;

    // Timer effect
    useEffect(() => {
        if (timerActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setShowResults(true);
                        setTimerActive(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [timerActive]);

    // Format time as MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const isTimeWarning = timeLeft <= 300; // 5 minutes warning

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
        setTimeLeft(25 * 60);
        setTimerActive(false);
    };

    const handleStartPractice = () => {
        setPracticeStarted(true);
        setTimerActive(true);
        setTimeLeft(25 * 60);
    };

    const handleAnswerSelect = (questionId: number, answerIndex: number) => {
        setSelectedAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
    };

    const handleSubmit = async () => {
        setShowResults(true);
        setTimerActive(false);
        if (timerRef.current) clearInterval(timerRef.current);

        // Calculate and save progress
        const score = calculateScore();
        const timeSpent = Math.floor((25 * 60 - timeLeft) / 60);

        // Save to backend (using 'guest' as user_id for now)
        const saved = await saveProgress({
            user_id: 'guest',
            month: monthSlug,
            session_day: selectedSession !== null ? selectedSession + 1 : 1,
            video_completed: videoUrl !== '',
            practice_score: Math.round((score / questions.length) * 100),
            time_spent_minutes: timeSpent
        });

        if (saved) {
            console.log('Progress saved successfully');
        }
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
                    <Button variant="ghost" onClick={() => { setViewMode('sessions'); setSelectedSession(null); setTimerActive(false); }}>
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
                                        <Button className="bg-amber-600 hover:bg-amber-700">Load</Button>
                                    </div>
                                </div>

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
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 flex justify-end">
                                    <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => setActiveTab('practice')}>
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
                                    <h3 className="text-2xl font-bold mb-2">Practice Session</h3>
                                    <p className="text-gray-600 mb-6">
                                        {questions.length} questions • Time limit: 25 minutes<br />
                                        <span className="text-amber-600 font-medium">Auto-submit when time expires</span>
                                    </p>
                                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700" onClick={handleStartPractice}>
                                        <Play className="mr-2 h-5 w-5" /> Start Practice
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : showResults ? (
                            <Card>
                                <CardContent className="p-8 text-center">
                                    <Trophy className="h-16 w-16 mx-auto text-amber-600 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Practice Complete! 🎉</h3>
                                    <div className="text-5xl font-bold text-amber-600 my-4">
                                        {calculateScore()}/{questions.length}
                                    </div>
                                    <p className="text-gray-500 mb-4">
                                        Time used: {formatTime(25 * 60 - timeLeft)}
                                    </p>

                                    <div className="text-left space-y-4 mt-6 border-t pt-6 max-h-96 overflow-y-auto">
                                        <h4 className="font-semibold">Answer Review:</h4>
                                        {questions.map((q) => (
                                            <div key={q.id} className={`p-4 rounded-lg ${selectedAnswers[q.id] === q.correctAnswer
                                                ? 'bg-green-50 dark:bg-green-900/20'
                                                : 'bg-red-50 dark:bg-red-900/20'
                                                }`}>
                                                <div className="flex items-start gap-2">
                                                    {selectedAnswers[q.id] === q.correctAnswer
                                                        ? <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                                        : <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
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
                                            setTimeLeft(25 * 60);
                                        }}>
                                            Try Again
                                        </Button>
                                        <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => { setViewMode('sessions'); setSelectedSession(null); }}>
                                            Next Session
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card>
                                <CardContent className="p-6">
                                    {/* Timer and Progress */}
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-sm text-gray-500">
                                            Question {currentQuestion + 1} of {questions.length}
                                        </span>
                                        <span className={`text-sm font-mono px-3 py-1 rounded-full ${isTimeWarning
                                            ? 'bg-red-100 text-red-600 animate-pulse'
                                            : 'bg-amber-100 text-amber-600'
                                            }`}>
                                            {isTimeWarning && <AlertTriangle className="inline h-4 w-4 mr-1" />}
                                            <Timer className="inline h-4 w-4 mr-1" />
                                            {formatTime(timeLeft)}
                                        </span>
                                    </div>
                                    <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2 mb-6" />

                                    {/* Question */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold">{questions[currentQuestion].question}</h3>
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
                                            <Button className="bg-amber-600 hover:bg-amber-700" onClick={handleSubmit}>
                                                Submit <CheckCircle2 className="ml-2 h-4 w-4" />
                                            </Button>
                                        ) : (
                                            <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => setCurrentQuestion(prev => prev + 1)}>
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
