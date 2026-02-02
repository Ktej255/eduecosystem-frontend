import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, BookOpen, Brain, PlayCircle, Trophy, Sparkles, Target, Layers, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import FlashcardSession from "./flashcard/FlashcardSession";
import MCQTestSession from "./qa/MCQTestSession";
import batch1Service, { SegmentData } from "@/services/batch1Service";
import { Video as VideoIcon } from "lucide-react";
import { useDraftContentStore } from "@/store/draftContentStore";

interface EveningSessionProps {
    cycleId: number;
    day: number;
}

type SessionView = 'menu' | 'flashcards' | 'qa';

export default function EveningSessionDayView({ cycleId, day }: EveningSessionProps) {
    const [currentView, setCurrentView] = useState<SessionView>('menu');
    const [videoData, setVideoData] = useState<SegmentData | null>(null);
    const [activePaper, setActivePaper] = useState<number | null>(null); // For Day 10 Papers: 10 or 102
    const { isPreviewMode, setPreviewMode, draftMCQs } = useDraftContentStore();

    useEffect(() => {
        const loadVideo = async () => {
            try {
                // Fetch Part 2 (Evening) content
                const data = await batch1Service.getPartContent(cycleId, day, 2);
                const mainSegment = data.segments[0];
                if (mainSegment && mainSegment.video_url) {
                    setVideoData(mainSegment);
                }
            } catch (error) {
                console.error("Failed to load evening video", error);
            }
        };
        loadVideo();
    }, [cycleId, day]);

    if (currentView === 'flashcards') {
        return <FlashcardSession cycleId={cycleId} day={day} onClose={() => setCurrentView('menu')} />;
    }

    if (currentView === 'qa' || activePaper) {
        return <MCQTestSession cycleId={cycleId} day={activePaper || day} onClose={() => { setCurrentView('menu'); setActivePaper(null); }} />;
    }

    return (
        <div className="space-y-6">
            {isPreviewMode && (
                <div className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-between shadow-lg animate-in slide-in-from-top duration-300">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 animate-pulse" />
                        <span className="text-sm font-bold">Preview Mode Active: Testing {draftMCQs.length} new drafts</span>
                    </div>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20 h-8"
                        onClick={() => setPreviewMode(false)}
                    >
                        Exit Preview
                    </Button>
                </div>
            )}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                    <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                        {day === 10 ? "Full Length Mock Tests" : "Evening Session"}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400">
                        {day === 10 ? "Comprehensive assessment of your preparation" : "Consolidate, Practice, and Grow (3 Hours)"}
                    </p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
                        <Trophy className="h-3 w-3" /> Earn Coins
                    </span>
                </div>
            </div>

            {day === 10 ? (
                // DAY 10 SPECIAL VIEW: 2 Mock Papers
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Paper 1 Card */}
                    <Card className="border-l-4 border-l-blue-500 overflow-hidden relative hover:shadow-xl transition-shadow cursor-pointer bg-white dark:bg-gray-900" onClick={() => setActivePaper(10)}>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <BookOpen className="w-32 h-32 text-blue-500" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Paper 1</span>
                                <span className="flex items-center gap-1 text-sm font-medium text-blue-600">
                                    <Clock className="h-4 w-4" /> 9:00 AM - 11:00 AM
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                General Studies Paper 1
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Full syllabus coverage. 100 Questions. 200 Marks. Negative Marking applicable.
                            </p>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                                Start Paper 1
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Paper 2 Card */}
                    <Card className="border-l-4 border-l-purple-500 overflow-hidden relative hover:shadow-xl transition-shadow cursor-pointer bg-white dark:bg-gray-900" onClick={() => setActivePaper(102)}>
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Brain className="w-32 h-32 text-purple-500" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase">Paper 2</span>
                                <span className="flex items-center gap-1 text-sm font-medium text-purple-600">
                                    <Clock className="h-4 w-4" /> 12:00 PM - 2:00 PM
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                                General Studies Paper 2
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                CSAT & Logical Reasoning. 80 Questions. 200 Marks. Qualify with 33%.
                            </p>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-md">
                                Start Paper 2
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">

                    {/* Dynamic Session Intro Video */}
                    {videoData && videoData.video_url && (
                        <Card className="border-l-4 border-l-indigo-500 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <VideoIcon className="w-32 h-32 text-indigo-500" />
                            </div>
                            <CardContent className="p-6 relative z-10">
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                            {videoData.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {videoData.key_points || "Watch the evening briefing to set the context for your practice session."}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/3 aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
                                        <video
                                            src={videoData.video_url}
                                            controls
                                            className="w-full h-full object-contain"
                                            poster="/placeholder-evening.jpg"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Hour 1: Flashcards */}
                    <Card className="border-l-4 border-l-pink-500 overflow-hidden relative bg-white dark:bg-gray-900">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Layers className="w-32 h-32 text-pink-500" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs font-bold uppercase">Hour 1</span>
                                        <span className="text-sm text-gray-500">5:00 PM - 6:00 PM</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        Topic Flashcards
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Review key concepts from today's morning session.
                                        Flip cards to test your recall and track your confidence!
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><Layers className="h-4 w-4" /> Concept Cards</span>
                                        <span className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> Self-Assessment</span>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                                        onClick={() => setCurrentView('flashcards')}
                                    >
                                        <PlayCircle className="mr-2 h-6 w-6" /> Start Flashcards
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hour 2: Elaboration Q&A */}
                    <Card className="border-l-4 border-l-blue-500 overflow-hidden relative bg-white dark:bg-gray-900">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Brain className="w-32 h-32 text-blue-500" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold uppercase">Hour 2</span>
                                        <span className="text-sm text-gray-500">6:00 PM - 7:00 PM</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                        Daily Practice Test (60 Questions)
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Full length MCQ test with negative marking.
                                        Test your knowledge under exam conditions!
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><Brain className="h-4 w-4" /> 60 MCQs</span>
                                        <span className="flex items-center gap-1"><Target className="h-4 w-4" /> 60 Minutes</span>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                                        onClick={() => setCurrentView('qa')}
                                    >
                                        Start Test
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Hour 3: CSAT */}
                    <Card className="border-l-4 border-l-amber-500 overflow-hidden relative bg-white dark:bg-gray-900">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <BookOpen className="w-32 h-32 text-amber-500" />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-bold uppercase">Hour 3</span>
                                        <span className="text-sm text-gray-500">7:00 PM - 8:00 PM</span>
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
                                    <Link href={`/student/batch1/csat?day=${day}`}>
                                        <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                            Start CSAT
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}

