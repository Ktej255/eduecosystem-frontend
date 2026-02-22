"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Compass, Calendar, Clock, CheckCircle, Play, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UPSCOnboarding() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<'video' | 'select-path' | 'survey' | 'generating' | 'complete'>('video');
    const [pathType, setPathType] = useState<'manual' | 'automated' | null>(null);
    const [surveyData, setSurveyData] = useState({ days: 30, dailyHours: 4 });

    useEffect(() => {
        // Check if onboarding is already completed
        const hasOnboarded = localStorage.getItem('upsc_onboarding_completed');
        if (!hasOnboarded) {
            // Delay slightly for effect
            setTimeout(() => setIsOpen(true), 1000);
        }
    }, []);

    const handleComplete = () => {
        localStorage.setItem('upsc_onboarding_completed', 'true');
        setIsOpen(false);
        // Could also trigger a toast or redirection
    };

    const renderVideoStep = () => (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Welcome to UPSC Batch 1</h2>
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop)' }}></div>
                <div className="w-16 h-16 bg-card/20 backdrop-blur-md rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <p className="absolute bottom-4 text-white text-sm font-medium">Watch Introductory Video</p>
            </div>
            <p className="text-muted-foreground">
                Discover how our Amazon-like store and automated planner will revolutionize your preparation.
            </p>
            <Button onClick={() => setStep('select-path')} className="w-full h-12 text-lg">
                Get Started
            </Button>
        </div>
    );

    const renderPathSelection = () => (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-xl font-bold">Choose Your Path</h2>
                <p className="text-muted-foreground text-sm">How would you like to prepare?</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <div
                    onClick={() => { setPathType('manual'); handleComplete(); }}
                    className="border-2 border-border hover:border-blue-500 rounded-xl p-4 cursor-pointer transition-all hover:bg-blue-50 dark:hover:bg-blue-900/10"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg text-blue-600">
                            <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold">Manual Exploration</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        I know what I need. I'll browse the store and pick books/chapters myself.
                    </p>
                </div>

                <div
                    onClick={() => { setPathType('automated'); setStep('survey'); }}
                    className="border-2 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl p-4 cursor-pointer relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">
                        RECOMMENDED
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-indigo-600 p-2 rounded-lg text-white">
                            <BrainCircuit className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-indigo-900 dark:text-indigo-100">Automated AI Planner</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        Answer a few questions and get a personalized daily schedule based on your goals.
                    </p>
                </div>
            </div>
        </div>
    );

    const renderSurvey = () => (
        <div className="space-y-6">
            <div className="text-center">
                <h2 className="text-xl font-bold">Customize Your Plan</h2>
                <p className="text-muted-foreground text-sm">Let's build your schedule.</p>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Target Completion (Days)</label>
                    <div className="flex items-center gap-4 bg-muted p-3 rounded-lg">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <input
                            type="range"
                            min="7"
                            max="180"
                            value={surveyData.days}
                            onChange={(e) => setSurveyData({ ...surveyData, days: parseInt(e.target.value) })}
                            className="flex-1"
                        />
                        <span className="font-bold w-12 text-right">{surveyData.days}d</span>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Daily Study Time (Hours)</label>
                    <div className="flex items-center gap-4 bg-muted p-3 rounded-lg">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                        <input
                            type="range"
                            min="1"
                            max="12"
                            value={surveyData.dailyHours}
                            onChange={(e) => setSurveyData({ ...surveyData, dailyHours: parseInt(e.target.value) })}
                            className="flex-1"
                        />
                        <span className="font-bold w-12 text-right">{surveyData.dailyHours}h</span>
                    </div>
                </div>
            </div>

            <Button
                onClick={() => {
                    setStep('generating');
                    setTimeout(() => setStep('complete'), 2000);
                }}
                className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
                Generate My Plan
            </Button>
        </div>
    );

    const renderGenerating = () => (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
                <BrainCircuit className="w-16 h-16 text-indigo-500" />
            </motion.div>
            <h3 className="text-lg font-bold">Analyzing Syllabus...</h3>
            <p className="text-sm text-muted-foreground">Creating your personalized path.</p>
        </div>
    );

    const renderComplete = () => (
        <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
            </div>
            <div>
                <h2 className="text-2xl font-bold">Prarambh Plan Ready!</h2>
                <p className="text-muted-foreground">
                    Your {surveyData.days}-day schedule is set. We've unlocked the first module for you.
                </p>
            </div>

            <Button onClick={handleComplete} className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">
                Go to Dashboard
            </Button>
        </div>
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogTitle className="sr-only">Onboarding</DialogTitle>
                <DialogDescription className="sr-only">Setup your learning path</DialogDescription>

                {step === 'video' && renderVideoStep()}
                {step === 'select-path' && renderPathSelection()}
                {step === 'survey' && renderSurvey()}
                {step === 'generating' && renderGenerating()}
                {step === 'complete' && renderComplete()}
            </DialogContent>
        </Dialog>
    );
}
