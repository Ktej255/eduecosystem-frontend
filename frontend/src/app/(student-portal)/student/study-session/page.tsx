"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BookOpen,
    Clock,
    Trophy,
    Calendar,
    Target,
    Zap,
    Moon,
    History,
    ChevronRight,
    Play,
} from "lucide-react";
import PomodoroSessionManager from "@/components/study/PomodoroSessionManager";
import RevisionSession from "@/components/study/RevisionSession";
import DailyRevisionTest from "@/components/study/DailyRevisionTest";
import BackgroundTimer from "@/components/study/BackgroundTimer";
import { cn } from "@/lib/utils";

// Subject options for study
const SUBJECTS = [
    {
        id: "geography",
        name: "Geography",
        icon: "🌍",
        color: "from-green-500 to-emerald-600",
        topics: 25,
    },
    {
        id: "history",
        name: "History",
        icon: "📜",
        color: "from-amber-500 to-orange-600",
        topics: 30,
    },
    {
        id: "polity",
        name: "Polity",
        icon: "⚖️",
        color: "from-blue-500 to-indigo-600",
        topics: 22,
    },
    {
        id: "economy",
        name: "Economy",
        icon: "📊",
        color: "from-purple-500 to-pink-600",
        topics: 20,
    },
    {
        id: "culture",
        name: "Art & Culture",
        icon: "🎨",
        color: "from-rose-500 to-red-600",
        topics: 18,
    },
    {
        id: "current",
        name: "Current Affairs",
        icon: "📰",
        color: "from-cyan-500 to-teal-600",
        topics: 15,
    },
];

type SessionMode = "select" | "pomodoro" | "revision" | "test";

export default function StudySessionPage() {
    const [sessionMode, setSessionMode] = useState<SessionMode>("select");
    const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[0] | null>(null);
    const [targetHours, setTargetHours] = useState(5);

    // Get current time for session recommendations
    const currentHour = new Date().getHours();
    const isMorning = currentHour >= 5 && currentHour < 12;
    const isAfternoon = currentHour >= 12 && currentHour < 17;
    const isEvening = currentHour >= 17 && currentHour < 21;

    const getRecommendedSession = () => {
        if (isEvening) return "revision";
        return "pomodoro";
    };

    // Handle subject selection and start
    const handleStartStudy = (subject: typeof SUBJECTS[0]) => {
        setSelectedSubject(subject);
        setSessionMode("pomodoro");
    };

    // Render subject selection grid
    const renderSubjectSelection = () => (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    Study Session
                </h1>
                <p className="text-gray-500">
                    {isMorning && "Good morning! Perfect time for focused study."}
                    {isAfternoon && "Good afternoon! Let's continue learning."}
                    {isEvening && "Good evening! Time for revision."}
                </p>
            </div>

            {/* Active Timer (if running) */}
            <BackgroundTimer compact className="mb-4" />

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card
                    className={cn(
                        "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]",
                        "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30"
                    )}
                    onClick={() => setSessionMode("select")}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Pomodoro Study</h3>
                            <p className="text-sm text-gray-500">5-hour focused session</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                    </CardContent>
                </Card>

                <Card
                    className={cn(
                        "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]",
                        "bg-gradient-to-br from-orange-500/10 to-rose-500/10 border-orange-500/30"
                    )}
                    onClick={() => setSessionMode("revision")}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center">
                            <Moon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Evening Revision</h3>
                            <p className="text-sm text-gray-500">25-min review session</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                    </CardContent>
                </Card>

                <Card
                    className={cn(
                        "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]",
                        "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/30"
                    )}
                    onClick={() => setSessionMode("test")}
                >
                    <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Daily Test</h3>
                            <p className="text-sm text-gray-500">30-40 MCQ questions</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                    </CardContent>
                </Card>
            </div>

            {/* Subject Selection for Pomodoro */}
            {sessionMode === "select" && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Select Subject for Study
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {/* Target Hours Selection */}
                        <div className="mb-6">
                            <label className="text-sm font-medium text-gray-500 mb-2 block">
                                Study Duration (hours)
                            </label>
                            <div className="flex gap-2">
                                {[3, 4, 5, 6].map((hours) => (
                                    <Button
                                        key={hours}
                                        variant={targetHours === hours ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setTargetHours(hours)}
                                    >
                                        {hours}h
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Subject Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {SUBJECTS.map((subject) => (
                                <Card
                                    key={subject.id}
                                    className={cn(
                                        "cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]",
                                        `bg-gradient-to-br ${subject.color.replace(
                                            "from-",
                                            "from-"
                                        ).replace("to-", "to-")}/10`
                                    )}
                                    onClick={() => handleStartStudy(subject)}
                                >
                                    <CardContent className="p-6 text-center space-y-3">
                                        <div className="text-4xl">{subject.icon}</div>
                                        <div>
                                            <h3 className="font-semibold">{subject.name}</h3>
                                            <p className="text-sm text-gray-500">
                                                {subject.topics} topics
                                            </p>
                                        </div>
                                        <Button
                                            size="sm"
                                            className={cn(
                                                "w-full bg-gradient-to-r",
                                                subject.color,
                                                "text-white hover:opacity-90"
                                            )}
                                        >
                                            <Play className="w-4 h-4 mr-2" />
                                            Start {targetHours}h
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );

    // Main content based on mode
    const renderContent = () => {
        switch (sessionMode) {
            case "select":
                return renderSubjectSelection();

            case "pomodoro":
                return (
                    <div className="space-y-4">
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setSessionMode("select");
                                setSelectedSubject(null);
                            }}
                        >
                            ← Back to Selection
                        </Button>
                        <PomodoroSessionManager
                            subjectId={selectedSubject?.id}
                            subjectName={selectedSubject?.name}
                            targetHours={targetHours}
                            onSessionComplete={(data) => {
                                console.log("Session complete:", data);
                            }}
                        />
                    </div>
                );

            case "revision":
                return (
                    <div className="space-y-4">
                        <Button
                            variant="ghost"
                            onClick={() => setSessionMode("select")}
                        >
                            ← Back to Selection
                        </Button>
                        <RevisionSession
                            classworkContent={[
                                { topicName: "Physical Geography of Rajasthan" },
                                { topicName: "Climate and Weather Patterns" },
                            ]}
                            onComplete={(blob) => {
                                console.log("Revision complete", blob);
                            }}
                        />
                    </div>
                );

            case "test":
                return (
                    <div className="space-y-4">
                        <Button
                            variant="ghost"
                            onClick={() => setSessionMode("select")}
                        >
                            ← Back to Selection
                        </Button>
                        <DailyRevisionTest
                            topics={["Physical Geography", "Climate Patterns", "Water Resources"]}
                            onComplete={(result) => {
                                console.log("Test complete:", result);
                            }}
                        />
                    </div>
                );

            default:
                return renderSubjectSelection();
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {renderContent()}
        </div>
    );
}
