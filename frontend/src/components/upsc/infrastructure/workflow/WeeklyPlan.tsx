"use client";

import React from "react";
import {
    CalendarRange, ArrowLeft, CheckCircle2, Circle,
    BookOpen, Dumbbell, Brain, Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WeeklyPlan({ onBack }: { onBack: () => void }) {
    const weekDays = [
        { day: "Mon", date: "Jan 12", focus: "Polity & Essay", status: "complete" },
        { day: "Tue", date: "Jan 13", focus: "Polity & CSAT", status: "active" },
        { day: "Wed", date: "Jan 14", focus: "Geography & Ethics", status: "upcoming" },
        { day: "Thu", date: "Jan 15", focus: "Geography & Essay", status: "upcoming" },
        { day: "Fri", date: "Jan 16", focus: "Current Affairs", status: "upcoming" },
        { day: "Sat", date: "Jan 17", focus: "Mock Tests", status: "upcoming" },
        { day: "Sun", date: "Jan 18", focus: "Rest & Review", status: "upcoming" },
    ];

    return (
        <div className="max-w-5xl mx-auto py-8 space-y-8 animate-in fade-in slide-in-from-top">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Today
            </Button>

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <CalendarRange className="w-8 h-8 text-blue-600" />
                        Week 1: Foundations
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Focus on core Polity concepts and daily answer writing.
                    </p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-1">Jan 12 - Jan 18</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {weekDays.map((day, idx) => (
                    <Card key={idx} className={`text-center ${day.status === 'active' ? 'border-blue-500 ring-2 ring-blue-200' : ''}`}>
                        <CardHeader className="p-4 pb-2">
                            <h3 className="font-bold text-lg">{day.day}</h3>
                            <p className="text-xs text-muted-foreground">{day.date}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <Badge variant={day.status === 'active' ? 'default' : 'secondary'} className="mb-2">
                                {day.status}
                            </Badge>
                            <p className="text-xs font-medium">{day.focus}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Weekly Objectives</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                                <BookOpen className="w-5 h-5 text-indigo-500" /> Syllabus Coverage
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Polity: Preamble</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Polity: FRs (Part 1)</li>
                                <li className="flex items-center gap-2"><Circle className="w-4 h-4 text-muted-foreground" /> Geography: Solar System</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Dumbbell className="w-5 h-5 text-red-500" /> Skill Building
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 2 Essays Written</li>
                                <li className="flex items-center gap-2"><Circle className="w-4 h-4 text-muted-foreground" /> 50 MCQs Solved</li>
                                <li className="flex items-center gap-2"><Circle className="w-4 h-4 text-muted-foreground" /> 2 CSAT Papers</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Brain className="w-5 h-5 text-pink-500" /> Mental Wellness
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 7 Morning Meditations</li>
                                <li className="flex items-center gap-2"><Circle className="w-4 h-4 text-muted-foreground" /> 6 Graphotherapy Sessions</li>
                                <li className="flex items-center gap-2"><Circle className="w-4 h-4 text-muted-foreground" /> 1 Sunday Rest</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
