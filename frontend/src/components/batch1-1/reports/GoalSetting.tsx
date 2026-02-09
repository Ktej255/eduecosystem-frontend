import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Target, CheckCircle2, Pencil, Rocket } from 'lucide-react';
import { getSubjectStats } from '@/lib/report-persistence';
import { toast } from 'sonner';

interface GoalSettingProps {
    subject: 'polity' | 'history' | 'geography' | 'economy' | 'environment' | 'science';
}

interface UserGoal {
    targetQuestions: number;
    deadline?: string;
    createdAt: string;
}

export default function GoalSetting({ subject }: GoalSettingProps) {
    const [goal, setGoal] = useState<UserGoal | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [targetInput, setTargetInput] = useState('50');
    const [currentProgress, setCurrentProgress] = useState(0);
    const [progressPercentage, setProgressPercentage] = useState(0);

    const loadGoal = () => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(`goal_${subject}`);
            if (saved) {
                setGoal(JSON.parse(saved));
            }
        }
    };

    const updateProgress = () => {
        const stats = getSubjectStats(subject);
        // In a real app, we'd filter these by date (e.g., this week)
        // For now, we count total questions solved as simple progress
        // A better implementation would track "questions solved AFTER goal creation"
        // But for simplicity in this version, we'll track TOTAL questions
        setCurrentProgress(stats.totalQuestions);
    };

    useEffect(() => {
        setTimeout(() => {
            loadGoal();
            updateProgress();
        }, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subject]);

    useEffect(() => {
        if (goal) {
            const percentage = Math.min(100, Math.round((currentProgress / goal.targetQuestions) * 100));
            setProgressPercentage(percentage);
        }
    }, [currentProgress, goal]);

    const handleSaveGoal = () => {
        const target = parseInt(targetInput);
        if (isNaN(target) || target <= 0) {
            toast.error("Please enter a valid number of questions");
            return;
        }

        const newGoal: UserGoal = {
            targetQuestions: target,
            createdAt: new Date().toISOString()
        };

        localStorage.setItem(`goal_${subject}`, JSON.stringify(newGoal));
        setGoal(newGoal);
        setIsEditing(false);
        toast.success(`🎯 Goal set: Solve ${target} questions!`);
    };

    const handleClearGoal = () => {
        localStorage.removeItem(`goal_${subject}`);
        setGoal(null);
        setTargetInput('50');
        setIsEditing(true);
        toast.info("Goal removed");
    };

    if (!goal || isEditing) {
        return (
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                        <Target className="w-5 h-5" />
                        Set a Weekly Target
                    </CardTitle>
                    <CardDescription>Challenge yourself to solve more MCQs this week!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="target">Number of Questions to Solve</Label>
                        <div className="flex gap-2">
                            <Input
                                id="target"
                                type="number"
                                value={targetInput}
                                onChange={(e) => setTargetInput(e.target.value)}
                                className="bg-white dark:bg-black"
                            />
                            <Button onClick={handleSaveGoal} >Set Goal</Button>
                        </div>
                    </div>
                </CardContent>
                {goal && (
                    <CardFooter>
                        <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </CardFooter>
                )}
            </Card>
        );
    }

    return (
        <Card className="overflow-hidden border-2 border-indigo-100 dark:border-indigo-900">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-indigo-500" />
                        Weekly Goal
                    </CardTitle>
                    <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsEditing(true)}>
                            <Pencil className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-500" onClick={handleClearGoal}>
                            <Target className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
                <CardDescription>Solve {goal.targetQuestions} Questions</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{currentProgress} / {goal.targetQuestions} Solved</span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{progressPercentage}%</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3 bg-indigo-100 dark:bg-indigo-950" />
                    {progressPercentage >= 100 && (
                        <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg flex items-center gap-2 text-green-700 dark:text-green-300 animate-in fade-in slide-in-from-bottom-2">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="font-bold">Goal Achieved! Great work! 🎉</span>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
