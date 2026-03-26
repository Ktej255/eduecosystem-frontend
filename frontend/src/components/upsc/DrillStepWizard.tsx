"use client";

import React, { useState } from "react";
import { DrillTimer } from "./DrillTimer";
import { QuestionCard } from "./QuestionCard";
import { AnswerUpload } from "./AnswerUpload";
import { VoiceRecorder } from "./VoiceRecorder";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { upscService } from "@/services/upscService";

type DrillStep =
    | "read"
    | "write_before"
    | "upload_before"
    | "study"
    | "write_after"
    | "upload_after"
    | "complete";

interface DrillStepWizardProps {
    question: any;
    timerConfig: Record<string, number>;
    sessionId?: string | null;
    onSessionComplete: (reportId?: string) => void;
}

export const DrillStepWizard: React.FC<DrillStepWizardProps> = ({
    question,
    timerConfig,
    sessionId,
    onSessionComplete,
}) => {
    const [currentStep, setCurrentStep] = useState<DrillStep>("read");
    const [isUploading, setIsUploading] = useState(false);
    const [report, setReport] = useState<any>(null);
    const [isGeneratingReport, setIsGeneratingReport] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const steps: { id: DrillStep; label: string; duration?: number }[] = [
        { id: "read", label: "Read Question", duration: timerConfig.read },
        { id: "write_before", label: "Attempt 1 (Pre-Study)", duration: timerConfig.write_before },
        { id: "upload_before", label: "Upload Attempt 1" },
        { id: "study", label: "Study Content", duration: timerConfig.study },
        { id: "write_after", label: "Attempt 2 (Post-Study)", duration: timerConfig.write_after },
        { id: "upload_after", label: "Upload Attempt 2" },
        { id: "complete", label: "Analysis Report" },
    ];

    const handleTimerComplete = () => {
        // Auto-advance logic or show "Time's Up" modal
        advanceStep();
    };

    const advanceStep = async () => {
        const currentIndex = steps.findIndex((s) => s.id === currentStep);
        if (currentIndex < steps.length - 1) {
            const nextStep = steps[currentIndex + 1].id;
            setCurrentStep(nextStep as DrillStep);

            // If moving to 'complete' step, fetch the report
            if (nextStep === "complete") {
                fetchFinalReport();
            }
        } else {
            onSessionComplete(report?.id);
        }
    };

    const handleMCQSubmit = async () => {
        setIsUploading(true);
        try {
            // Use the new Base Drill service for MCQ
            const date = new Date().toISOString().split('T')[0];
            // If question has no number, default to 1
            const qNum = question.question_number || 1; 

            await upscService.submitBaseAttempt(
                date,
                qNum,
                "before",
                selectedOption !== null ? selectedOption : undefined
            );

            advanceStep();
        } catch (error) {
            console.error("MCQ submission failed:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const fetchFinalReport = async () => {
        setIsGeneratingReport(true);
        try {
            // Give the background worker a moment to process the second attempt
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Note: Since backend expects report_id but user requested session_id,
            // we'll try to fetch using sessionId first.
            if (sessionId) {
                const data = await upscService.getReport(sessionId);
                setReport(data);
            }
        } catch (error) {
            console.error("Failed to fetch drill report:", error);
        } finally {
            setIsGeneratingReport(false);
        }
    };

    const handleVoiceUpload = async (audioBlob: Blob) => {
        setIsUploading(true);
        try {
            const file = new File([audioBlob], "voice_recall.webm", { type: "audio/webm" });
            const attemptType = currentStep === "upload_before" ? "before" : "after";

            if (question.id) {
                await upscService.submitAttempt(question.id, attemptType, file, 'audio');
            } else {
                console.warn("Question ID missing, skipping API call (Mock Mode)");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            advanceStep();
        } catch (error) {
            console.error("Voice upload failed:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleUpload = async (imageSrc: string) => {
        setIsUploading(true);
        try {
            // Convert base64 to File
            const res = await fetch(imageSrc);
            const blob = await res.blob();
            const file = new File([blob], "attempt.jpg", { type: "image/jpeg" });

            // Determine attempt type based on current step
            const attemptType = currentStep === "upload_before" ? "before" : "after";

            // Use service to upload
            // Assuming question.id exists. If question is mock, this might fail if backend expects UUID.
            // For now, we'll try-catch and log.
            if (question.id) {
                await upscService.submitAttempt(question.id, attemptType, file, 'image');
            } else {
                console.warn("Question ID missing, skipping API call (Mock Mode)");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            advanceStep();
        } catch (error) {
            console.error("Upload failed:", error);
            // Show error toast here
        } finally {
            setIsUploading(false);
        }
    };

    const currentStepIndex = steps.findIndex((s) => s.id === currentStep);
    const currentStepConfig = steps[currentStepIndex];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-6">
                <QuestionCard question={question} />

                {/* MCQ Interface */}
                {question.is_mcq && (currentStep === "write_before" || currentStep === "write_after") && (
                    <Card className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold">Select the correct option:</h3>
                        <div className="space-y-2">
                            {question.options?.map((option: string, index: number) => (
                                <div 
                                    key={index}
                                    onClick={() => setSelectedOption(index)}
                                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                                        selectedOption === index 
                                            ? "border-blue-600 bg-blue-50" 
                                            : "border-border hover:border-blue-300"
                                    }`}
                                >
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                        selectedOption === index ? "border-blue-600" : "border-slate-300"
                                    }`}>
                                        {selectedOption === index && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                                    </div>
                                    <span className={selectedOption === index ? "font-medium text-blue-900" : "text-slate-700"}>
                                        {option}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <Button 
                            onClick={handleMCQSubmit} 
                            disabled={selectedOption === null || isUploading}
                            className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
                        >
                            {isUploading ? "Submitting..." : "Confirm Answer"}
                        </Button>
                    </Card>
                )}

                {/* Dynamic Content based on Step */}
                {(currentStep === "upload_before" || currentStep === "upload_after") && (
                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Option 1: Upload Written Answer</h3>
                            <AnswerUpload onCapture={handleUpload} isUploading={isUploading} />
                        </Card>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-muted px-2 text-muted-foreground">Or</span>
                            </div>
                        </div>

                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Option 2: Voice Recall</h3>
                            <VoiceRecorder onRecordingComplete={handleVoiceUpload} isUploading={isUploading} />
                        </Card>
                    </div>
                )}

                {currentStep === "study" && (
                    <Card className="p-6 bg-amber-50 border-amber-200">
                        <h3 className="text-lg font-semibold text-amber-900 mb-4">Study Material</h3>
                        <div className="prose prose-amber">
                            <p>One-pager content would appear here...</p>
                            <ul>
                                <li>Key Concept 1</li>
                                <li>Key Concept 2</li>
                            </ul>
                        </div>
                        <Button onClick={advanceStep} className="mt-4 w-full">
                            I'm done studying
                        </Button>
                    </Card>
                )}

                {currentStep === "complete" && (
                    <Card className="p-8 text-center bg-green-50 border-green-200">
                        {isGeneratingReport ? (
                            <div className="space-y-4">
                                <div className="animate-spin w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full mx-auto" />
                                <h2 className="text-xl font-bold text-green-800">Analyzing Your Voice/Answers...</h2>
                                <p className="text-green-700">Grok is reviewing your submission against the model answer.</p>
                            </div>
                        ) : (
                            <>
                                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-green-800">Drill Completed!</h2>
                                <p className="text-green-700 mt-2">
                                    {report ? "Your analysis is ready." : "Drill finished. Check back soon for the report."}
                                </p>
                                <Button className="mt-6" onClick={() => onSessionComplete(report?.id)}>
                                    {report ? "View Report" : "Return to Dashboard"}
                                </Button>
                            </>
                        )}
                    </Card>
                )}
            </div>

            {/* Sidebar: Timer & Controls */}
            <div className="space-y-6">
                {currentStepConfig.duration && (
                    <DrillTimer
                        label={currentStepConfig.label}
                        durationSeconds={currentStepConfig.duration}
                        isActive={true}
                        onComplete={handleTimerComplete}
                    />
                )}

                <Card className="p-4 bg-muted">
                    <h4 className="font-semibold text-muted-foreground mb-2">Session Info</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="font-medium uppercase text-blue-600">{currentStep.replace("_", " ")}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Next:</span>
                            <span className="font-medium">
                                {steps[currentStepIndex + 1]?.label || "Finish"}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* Debug Skip Button (Dev only) */}
                <Button variant="ghost" size="sm" onClick={advanceStep} className="w-full text-muted-foreground">
                    Skip Step (Dev) <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
            </div>
        </div>
    );
};
