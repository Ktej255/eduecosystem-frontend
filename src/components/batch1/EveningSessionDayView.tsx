import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, BookOpen, Brain, PlayCircle, Trophy, Sparkles, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import RevisionWheel from "./gamification/RevisionWheel";

interface EveningSessionProps {
    cycleId: number;
    day: number;
}

export default function EveningSessionDayView({ cycleId, day }: EveningSessionProps) {
    const [showWheel, setShowWheel] = useState(false);

    if (showWheel) {
        return <RevisionWheel onClose={() => setShowWheel(false)} />;
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">Evening Session</h3>
                    <p className="text-indigo-600 dark:text-indigo-400">Consolidate, Practice, and Grow (3 Hours)</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
                        <Trophy className="h-3 w-3" /> Earn Coins
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {/* Hour 1: Flashcards / Revision Wheel */}
                <Card className="border-l-4 border-l-pink-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <RefreshCw className="w-32 h-32 text-pink-500" />
                    </div>
                    <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-bold uppercase">Hour 1</span>
                                    <span className="text-sm text-gray-500">Video Notes Revision</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    The Revision Wheel
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Spin the wheel to get random topics from your completed cycles.
                                    Record your explanation to earn batch coins!
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><RefreshCw className="h-4 w-4" /> Random Topics</span>
                                    <span className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> AI Feedback</span>
                                </div>
                            </div>
                            <div>
                                <Button
                                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                                    onClick={() => setShowWheel(true)}
                                >
                                    <PlayCircle className="mr-2 h-6 w-6" /> Spin & Revise
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Hour 2: Detailed MCQs */}
                <Card className="border-l-4 border-l-blue-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Brain className="w-32 h-32 text-blue-500" />
                    </div>
                    <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold uppercase">Hour 2</span>
                                    <span className="text-sm text-gray-500">Deep Dive Practice</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Statement-Based MCQs
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Tackle complex, multi-statement questions designed to test your conceptual clarity.
                                    Identify pitfalls and improve your elimination techniques.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Brain className="h-4 w-4" /> 20 Questions</span>
                                    <span className="flex items-center gap-1"><Target className="h-4 w-4" /> Analysis</span>
                                </div>
                            </div>
                            <div>
                                <Link href={`/student/batch1/cycle/${cycleId}/day/${day}/mcq`}>
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                        Start MCQs
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Hour 3: CSAT */}
                <Card className="border-l-4 border-l-amber-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <BookOpen className="w-32 h-32 text-amber-500" />
                    </div>
                    <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold uppercase">Hour 3</span>
                                    <span className="text-sm text-gray-500">CSAT Track</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    English Comprehension
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Master reading comprehension with focus on tone, inference, and assumption.
                                    25 mins Explanation + 25 mins Practice.
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> 5 Passages</span>
                                </div>
                            </div>
                            <div>
                                <Link href={`/student/batch1/csat`}>
                                    <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                        Start CSAT
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
