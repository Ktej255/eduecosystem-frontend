"use client";

import React from "react";
import { ArrowLeft, BookOpen, Brain, Calculator, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EveningSection({ onBack }: { onBack: () => void }) {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in slide-in-from-right">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Timeline
            </Button>

            <div className="text-center space-y-4 mb-12">
                <h1 className="text-3xl font-bold text-foreground">Evening Revision</h1>
                <p className="text-muted-foreground dark:text-muted-foreground">Solidify your knowledge with active recall and practice.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Flashcards */}
                <Card className="hover:shadow-lg transition-all cursor-pointer border-blue-200 bg-blue-50 dark:bg-blue-950/20" onClick={() => handleNavigate('/student/batch1/polity/revision')}>
                    <CardHeader>
                        <Brain className="w-10 h-10 text-blue-600 mb-2" />
                        <CardTitle>Flashcards</CardTitle>
                        <CardDescription>Active recall for Polity concepts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Revision</Button>
                    </CardContent>
                </Card>

                {/* MCQs */}
                <Card className="hover:shadow-lg transition-all cursor-pointer border-green-200 bg-green-50 dark:bg-green-950/20" onClick={() => handleNavigate('/student/batch1/polity/revision/quick')}>
                    {/* Note: Adjusting path to valid MCQ route if different, generic revision mostly has layout for both */}
                    <CardHeader>
                        <BookOpen className="w-10 h-10 text-green-600 mb-2" />
                        <CardTitle>MCQ Test</CardTitle>
                        <CardDescription>Practice daily questions.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full bg-green-600 hover:bg-green-700">Take Test</Button>
                    </CardContent>
                </Card>

                {/* CSAT */}
                <Card className="hover:shadow-lg transition-all cursor-pointer border-purple-200 bg-purple-50 dark:bg-purple-950/20" onClick={() => handleNavigate('/student/batch1/csat')}>
                    <CardHeader>
                        <Calculator className="w-10 h-10 text-purple-600 mb-2" />
                        <CardTitle>CSAT Practice</CardTitle>
                        <CardDescription>Logical reasoning & math.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Solve Problems</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
