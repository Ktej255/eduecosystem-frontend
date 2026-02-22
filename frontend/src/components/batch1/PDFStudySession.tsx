"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    FileText,
    Clock,
    Mic,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    AlertTriangle,
    Coins,
    Loader2,
    Play,
    Pause,
    RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

interface PDFStudySessionProps {
    segmentKey: string;
    onBack: () => void;
    onComplete?: () => void;
}

interface RecallResult {
    score: number;
    recalled_points: string[];
    missing_points: string[];
    feedback: string;
    passed: boolean;
    transcription: string;
}

export default function PDFStudySession({ segmentKey, onBack, onComplete }: PDFStudySessionProps) {
    const [loading, setLoading] = useState(true);
    const [pdfData, setPdfData] = useState<{ page_count: number; title: string } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageImage, setPageImage] = useState<string | null>(null);
    const [pageText, setPageText] = useState<string>("");

    // Timer state
    const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutes in seconds
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Recording state
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    // Evaluation state
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [recallResult, setRecallResult] = useState<RecallResult | null>(null);
    const [completedPages, setCompletedPages] = useState<number[]>([]);

    // Extension state
    const [showExtensionPrompt, setShowExtensionPrompt] = useState(false);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    useEffect(() => {
        loadPdfData();
    }, [segmentKey]);

    useEffect(() => {
        if (isTimerRunning && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isTimerRunning]);

    useEffect(() => {
        if (timeRemaining === 0) {
            setIsTimerRunning(false);
            toast.warning("Time's up! Submit your recall or request an extension.");
        }
    }, [timeRemaining]);

    const loadPdfData = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/pdf-study/segment/${segmentKey}`);
            setPdfData(res.data);
            await loadPage(1);
        } catch (error) {
            console.error("Failed to load PDF:", error);
            toast.error("PDF not found for this segment");
        } finally {
            setLoading(false);
        }
    };

    const loadPage = async (pageNum: number) => {
        try {
            const res = await api.get(`/pdf-study/page/${segmentKey}/${pageNum}`);
            setPageImage(res.data.image_base64);
            setPageText(res.data.text);
            setCurrentPage(pageNum);
            setRecallResult(null);
            setAudioBlob(null);
            setTimeRemaining(25 * 60);
            setIsTimerRunning(true);
        } catch (error) {
            console.error("Failed to load page:", error);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: "audio/webm" });
                setAudioBlob(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            toast.info("Recording started. Speak your recall now.");
        } catch (error) {
            console.error("Failed to start recording:", error);
            toast.error("Could not access microphone");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const submitRecall = async () => {
        if (!audioBlob) {
            toast.error("Please record your recall first");
            return;
        }

        setIsEvaluating(true);
        try {
            // Convert audio to base64
            const reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = async () => {
                const base64Audio = (reader.result as string).split(",")[1];

                const res = await api.post("/pdf-study/evaluate-recall", {
                    segment_key: segmentKey,
                    page_number: currentPage,
                    audio_base64: base64Audio,
                });

                setRecallResult(res.data);

                if (res.data.passed) {
                    // Award coins for completion
                    if (timeRemaining > 0) {
                        toast.success("+10 coins! Completed before time!");
                    }
                    setCompletedPages(prev => [...prev, currentPage]);

                    // Save to retention system for spaced repetition tracking
                    try {
                        await api.post("/retention/submit-encoding", {
                            topic_id: currentPage,
                            topic_type: "pdf_page",
                            topic_name: `${pdfData?.title || segmentKey} - Page ${currentPage}`,
                            user_summary: res.data.transcription,
                        });
                        console.log("Retention data saved for page", currentPage);
                    } catch (retentionError) {
                        console.error("Failed to save retention data:", retentionError);
                        // Don't block the user - retention save is secondary
                    }
                }
            };
        } catch (error) {
            console.error("Recall evaluation failed:", error);
            toast.error("Failed to evaluate recall");
        } finally {
            setIsEvaluating(false);
        }
    };

    const requestExtension = () => {
        setShowExtensionPrompt(true);
    };

    const confirmExtension = () => {
        toast.warning("-5 coins will be deducted for 10 more minutes");
        setTimeRemaining(10 * 60);
        setIsTimerRunning(true);
        setShowExtensionPrompt(false);
        // In production: api.post("/coins/deduct", { amount: 5, reason: "time_extension" })
    };

    const goToNextPage = () => {
        if (pdfData && currentPage < pdfData.page_count) {
            loadPage(currentPage + 1);
        }
    };

    const progress = pdfData ? (completedPages.length / pdfData.page_count) * 100 : 0;

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
                <Loader2 className="h-12 w-12 animate-spin text-purple-500 mb-4" />
                <p className="text-muted-foreground">Loading PDF...</p>
            </div>
        );
    }

    if (!pdfData) {
        return (
            <div className="text-center py-12">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold text-muted-foreground mb-2">No PDF Available</h3>
                <p className="text-muted-foreground mb-4">This segment doesn't have a PDF yet.</p>
                <Button variant="outline" onClick={onBack}>Go Back</Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <FileText className="h-6 w-6 text-purple-500" />
                        PDF Self-Study
                    </h2>
                    <p className="text-muted-foreground">{pdfData.title}</p>
                </div>
                <div className="text-right">
                    <div className={`text-3xl font-mono font-bold ${timeRemaining < 60 ? "text-red-500" : "text-cyan-400"}`}>
                        <Clock className="inline h-5 w-5 mr-2" />
                        {formatTime(timeRemaining)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Page {currentPage} of {pdfData.page_count}
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{completedPages.length} pages completed</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* PDF Page Viewer */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-white text-lg">Read This Page</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {pageImage && (
                            <div className="bg-card rounded-lg overflow-hidden max-h-[500px] overflow-y-auto">
                                <img
                                    src={`data:image/png;base64,${pageImage}`}
                                    alt={`Page ${currentPage}`}
                                    className="w-full"
                                />
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Recall Section */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-white text-lg flex items-center gap-2">
                            <Mic className="h-5 w-5 text-purple-400" />
                            Your Recall
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!recallResult ? (
                            <>
                                <p className="text-muted-foreground text-sm">
                                    Read the page carefully, then record yourself explaining what you learned.
                                </p>

                                {/* Recording Controls */}
                                <div className="flex flex-col items-center gap-4 py-8">
                                    {!audioBlob ? (
                                        <Button
                                            size="lg"
                                            className={`rounded-full w-20 h-20 ${isRecording ? "bg-red-600 animate-pulse" : "bg-purple-600 hover:bg-purple-500"}`}
                                            onClick={isRecording ? stopRecording : startRecording}
                                        >
                                            {isRecording ? <Pause className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                                        </Button>
                                    ) : (
                                        <div className="text-center">
                                            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
                                            <p className="text-green-400 font-medium">Recording Ready</p>
                                        </div>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        {isRecording ? "Recording... Click to stop" : audioBlob ? "Ready to submit" : "Click to start recording"}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    {audioBlob && (
                                        <Button variant="outline" onClick={() => setAudioBlob(null)} className="flex-1">
                                            <RotateCcw className="h-4 w-4 mr-2" />
                                            Re-record
                                        </Button>
                                    )}
                                    <Button
                                        onClick={submitRecall}
                                        disabled={!audioBlob || isEvaluating}
                                        className="flex-1 bg-purple-600 hover:bg-purple-500"
                                    >
                                        {isEvaluating ? (
                                            <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Evaluating...</>
                                        ) : (
                                            <>Submit Recall</>
                                        )}
                                    </Button>
                                </div>
                            </>
                        ) : (
                            /* Recall Result */
                            <div className="space-y-4">
                                <div className={`text-center p-6 rounded-xl ${recallResult.passed ? "bg-green-900/30 border border-green-500/30" : "bg-amber-900/30 border border-amber-500/30"}`}>
                                    <div className={`text-5xl font-black mb-2 ${recallResult.passed ? "text-green-400" : "text-amber-400"}`}>
                                        {recallResult.score}%
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {recallResult.passed ? "✅ Great job! You can proceed." : "⚠️ Need 80% to continue. Review and try again."}
                                    </p>
                                </div>

                                {recallResult.recalled_points.length > 0 && (
                                    <div>
                                        <h4 className="text-green-400 font-bold mb-2">✓ Points Recalled:</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            {recallResult.recalled_points.map((p, i) => (
                                                <li key={i}>• {p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {recallResult.missing_points.length > 0 && (
                                    <div>
                                        <h4 className="text-amber-400 font-bold mb-2">✗ Points Missing:</h4>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            {recallResult.missing_points.map((p, i) => (
                                                <li key={i}>• {p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <p className="text-muted-foreground italic text-sm">{recallResult.feedback}</p>

                                <div className="flex gap-4">
                                    {!recallResult.passed && (
                                        <Button variant="outline" onClick={() => { setRecallResult(null); setAudioBlob(null); }} className="flex-1">
                                            Try Again
                                        </Button>
                                    )}
                                    {recallResult.passed && pdfData && currentPage < pdfData.page_count && (
                                        <Button onClick={goToNextPage} className="flex-1 bg-green-600 hover:bg-green-500">
                                            Next Page <ChevronRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    )}
                                    {recallResult.passed && pdfData && currentPage === pdfData.page_count && (
                                        <Button onClick={onComplete} className="flex-1 bg-cyan-600 hover:bg-cyan-500">
                                            Complete Study! 🎉
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Extension Prompt Modal */}
            {showExtensionPrompt && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <Card className="bg-gray-900 border-amber-500 max-w-md">
                        <CardContent className="p-6 text-center">
                            <Coins className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Need More Time?</h3>
                            <p className="text-muted-foreground mb-4">
                                Requesting 10 more minutes will deduct <strong className="text-amber-400">5 coins</strong> from your balance.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline" onClick={() => setShowExtensionPrompt(false)} className="flex-1">Cancel</Button>
                                <Button onClick={confirmExtension} className="flex-1 bg-amber-600">OK, Deduct Coins</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Timer Extension Button */}
            {timeRemaining < 5 * 60 && !showExtensionPrompt && (
                <div className="text-center">
                    <Button variant="outline" onClick={requestExtension} className="text-amber-400 border-amber-500">
                        <Clock className="h-4 w-4 mr-2" />
                        Need 10 more minutes? (+5 coins)
                    </Button>
                </div>
            )}
        </div>
    );
}
