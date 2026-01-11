"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Clock, Save, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Basic types for levels
type Level = 'level1' | 'level2';

export default function GraphotherapySession({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
    const [step, setStep] = useState(1); // 1: Select Level, 2: Writing, 3: Questions, 4: Gratitude, 5: Done
    const [level, setLevel] = useState<Level>('level1');
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [pageCount, setPageCount] = useState(1);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStartWriting = () => {
        setIsActive(true);
        setStep(2); // Move to Writing
    };

    const handleNextPageOrFinish = () => {
        if (level === 'level1') {
            // Level 1: 2 Pages of writing
            if (pageCount < 2) {
                setPageCount(prev => prev + 1);
                // Timer continues
            } else {
                setIsActive(false);
                setStep(3); // Questions
            }
        } else {
            // Level 2: 1 Page writing then Questions? (Assuming similiar flow or customized)
            // Per instructions: Level 2 -> Page 1 Timer -> Done -> Page 2 Timer -> Done -> Questions
            if (pageCount < 2) {
                setPageCount(prev => prev + 1);
            } else {
                setIsActive(false);
                setStep(3);
            }
        }
    };

    const renderLevelSelection = () => (
        <Card className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
                <CardTitle>Select Your Level</CardTitle>
                <CardDescription>Choose the appropriate graphotherapy level for today.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <RadioGroup defaultValue="level1" onValueChange={(v) => setLevel(v as Level)} className="grid grid-cols-2 gap-4">
                    <div>
                        <RadioGroupItem value="level1" id="l1" className="peer sr-only" />
                        <Label
                            htmlFor="l1"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <span className="text-xl font-bold mb-2">Level 1</span>
                            <span className="text-sm text-center text-muted-foreground">2 Pages Writing + Questions</span>
                        </Label>
                    </div>
                    <div>
                        <RadioGroupItem value="level2" id="l2" className="peer sr-only" />
                        <Label
                            htmlFor="l2"
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                            <span className="text-xl font-bold mb-2">Level 2</span>
                            <span className="text-sm text-center text-muted-foreground">Advanced Flow + Questions</span>
                        </Label>
                    </div>
                </RadioGroup>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={handleStartWriting}>Start Session</Button>
            </CardFooter>
        </Card>
    );

    const renderWritingPhase = () => (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in">
            <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border">
                <div>
                    <h2 className="text-lg font-semibold">Writing Phase: Page {pageCount}</h2>
                    <p className="text-sm text-gray-500">{level === 'level1' ? '2 Pages Required' : 'Advanced Practice'}</p>
                </div>
                <div className="flex items-center gap-2 text-2xl font-mono font-bold text-blue-600">
                    <Clock className="w-6 h-6" />
                    {formatTime(timer)}
                </div>
            </div>

            <Card className="min-h-[400px] flex items-center justify-center border-dashed border-2">
                <div className="text-center p-8">
                    <FileText className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium mb-2">Physical Writing in Progress</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">
                        Please write on your physical sheet. Keep the timer running while you write.
                        Click "Done" when you finish Page {pageCount}.
                    </p>
                    <Button size="lg" onClick={handleNextPageOrFinish} className="px-8">
                        {pageCount === 2 ? "Finish Writing" : "Next Page"}
                    </Button>
                </div>
            </Card>
        </div>
    );

    const renderQuestions = () => (
        <Card className="max-w-2xl mx-auto animate-in fade-in">
            <CardHeader>
                <CardTitle>Daily Reflections</CardTitle>
                <CardDescription>Answer the following questions based on today's practice.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>1. What was your primary focus during today's writing?</Label>
                    <Textarea placeholder="e.g., maintain slant, pressure..." />
                </div>
                <div className="space-y-2">
                    <Label>2. How did you feel while writing?</Label>
                    <Textarea placeholder="Calm, Rushed, Focused..." />
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={() => setStep(4)} className="w-full">Next: Gratitude Journal</Button>
            </CardFooter>
        </Card>
    );

    const renderGratitude = () => (
        <Card className="max-w-2xl mx-auto animate-in fade-in">
            <CardHeader>
                <CardTitle>Gratitude Journal</CardTitle>
                <CardDescription>List 3 things you are grateful for today.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Input placeholder="1. I am grateful for..." />
                <Input placeholder="2. I am grateful for..." />
                <Input placeholder="3. I am grateful for..." />

                <div className="pt-4 border-t mt-4">
                    <h4 className="font-semibold mb-3 text-sm text-gray-500 uppercase">Night Owl Optional</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Appreciation Journal</Label>
                            <Textarea placeholder="Who do you appreciate today?" className="h-20" />
                        </div>
                        <div className="space-y-2">
                            <Label>Audit of the Day</Label>
                            <Textarea placeholder="What went well? What could be better?" className="h-20" />
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={onComplete} className="w-full bg-green-600 hover:bg-green-700">Submit & Complete Session</Button>
            </CardFooter>
        </Card>
    );

    return (
        <div className="container mx-auto py-8">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Cancel Session
            </Button>

            {step === 1 && renderLevelSelection()}
            {step === 2 && renderWritingPhase()}
            {step === 3 && renderQuestions()}
            {step === 4 && renderGratitude()}
        </div>
    );
}
