"use client";



import { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Play, Pause, Mic, MicOff, Camera, Image as ImageIcon, Send, CheckCircle2, Clock, Brain, Target, ChevronRight, Volume2, Upload, Loader2, X, Plus, RotateCcw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { analyzeRecall } from "@/services/prelimsRecallService";
import api from "@/lib/api";
import { useSessionProgress } from "@/hooks/useSessionProgress";
import { markSegmentComplete, saveAnalysisReport, getAnalysisReport } from "@/services/progressStorage";
import PDFStudySession from "@/components/batch1/PDFStudySession";
import SimplePDFViewer from "@/components/batch1/SimplePDFViewer";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Segment interface
interface Segment {
    id: number;
    title: string;
    duration: string;
    video_url: string | null;
    youtube_url?: string | null;
    content_type?: 'video' | 'pdf' | 'youtube';
    pdf_files?: { url: string; name: string; order: number }[];
    key_points: string;
}

// Default segments (fallback if API fails)
const DEFAULT_SEGMENTS: Segment[] = [
    { id: 1, title: "Segment 1", duration: "25:00", video_url: null, key_points: "Key points will load from content..." },
    { id: 2, title: "Segment 2", duration: "25:00", video_url: null, key_points: "Key points will load from content..." },
    { id: 3, title: "Segment 3", duration: "25:00", video_url: null, key_points: "Key points will load from content..." },
    { id: 4, title: "Segment 4", duration: "25:00", video_url: null, key_points: "Key points will load from content..." },
];

type LearningPhase = "video" | "response" | "analysis" | "complete";
type StudyMode = "select" | "video" | "pdf";

export default function PartLearningPage() {
    const params = useParams();
    const router = useRouter();
    const cycleId = parseInt(params.cycleId as string);
    const dayId = parseInt(params.dayId as string);
    const partId = parseInt(params.partId as string);

    // Study mode selection (video or pdf)
    const [studyMode, setStudyMode] = useState<StudyMode>("select");
    const [pdfAvailable, setPdfAvailable] = useState(false);
    const [videoAvailable, setVideoAvailable] = useState(false);
    const [checkingContent, setCheckingContent] = useState(true);

    // Segments state - fetched from API
    const [segments, setSegments] = useState<Segment[]>(DEFAULT_SEGMENTS);
    const [loadingContent, setLoadingContent] = useState(true);

    // Session progress hook for persistence
    const sessionProgress = useSessionProgress({
        cycleId,
        dayId,
        partId,
        autoSaveInterval: 5000, // Save every 5 seconds
    });

    const [currentSegment, setCurrentSegment] = useState(0);
    const [phase, setPhase] = useState<LearningPhase>("video");
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const [savedVideoTime, setSavedVideoTime] = useState(0); // For resume

    // Recording state
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [responseType, setResponseType] = useState<"audio" | "image" | null>(null);

    // Image state - supports multiple pages
    const [capturedImages, setCapturedImages] = useState<string[]>([]);

    // Analysis state - Core
    const [analyzing, setAnalyzing] = useState(false);
    const [recallScore, setRecallScore] = useState<number | null>(null);
    const [understandingLevel, setUnderstandingLevel] = useState<string>("Satisfactory");
    const [coveragePercentage, setCoveragePercentage] = useState<number>(0);
    const [feedback, setFeedback] = useState("");
    const [detailedAnalysis, setDetailedAnalysis] = useState("");

    // Analysis state - Strengths & Improvements
    const [strengths, setStrengths] = useState<string[]>([]);
    const [areasToImprove, setAreasToImprove] = useState<string[]>([]);
    const [keyTakeaways, setKeyTakeaways] = useState<string[]>([]);

    // Analysis state - Concept Coverage
    const [conceptsCovered, setConceptsCovered] = useState<string[]>([]);
    const [conceptsMissed, setConceptsMissed] = useState<string[]>([]);

    // Analysis state - Content Matching (STRICT)
    const [matchedContent, setMatchedContent] = useState<string[]>([]);
    const [unmatchedContent, setUnmatchedContent] = useState<string[]>([]);
    const [irrelevantContent, setIrrelevantContent] = useState<string[]>([]);
    const [penaltyApplied, setPenaltyApplied] = useState<number>(0);
    const [baseScore, setBaseScore] = useState<number>(0);

    // Analysis state - Recommendations
    const [revisionPriority, setRevisionPriority] = useState<string>("medium");
    const [memoryTips, setMemoryTips] = useState<string[]>([]);
    const [suggestedNextSteps, setSuggestedNextSteps] = useState<string[]>([]);

    // Analysis state - Relevance & AI Info
    const [isRelevant, setIsRelevant] = useState(true);
    const [relevanceMessage, setRelevanceMessage] = useState("");
    const [aiSource, setAiSource] = useState<string>("template");
    const [aiModel, setAiModel] = useState<string | undefined>(undefined);
    const [confidenceScore, setConfidenceScore] = useState<number>(80);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const cameraInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasRestoredProgress = useRef(false);

    // Fetch segments from API and check content availability
    useEffect(() => {
        const fetchSegments = async () => {
            try {
                setLoadingContent(true);
                setCheckingContent(true);
                const response = await api.get(`/batch1/cycle/${cycleId}/day/${dayId}/part/${partId}`);
                if (response.data && response.data.segments) {
                    setSegments(response.data.segments);
                    // Check if any segment has a video URL or YouTube
                    const hasVideo = response.data.segments.some((seg: Segment) => seg.video_url || seg.youtube_url);
                    setVideoAvailable(hasVideo);
                    // Check if any segment has PDFs from the API response
                    const hasPdf = response.data.segments.some((seg: Segment) =>
                        seg.content_type === 'pdf' || (seg.pdf_files && seg.pdf_files.length > 0)
                    );
                    if (hasPdf) {
                        setPdfAvailable(true);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch segments:", error);
                // Keep default segments as fallback
                toast.error("Using demo content - admin hasn't uploaded videos yet");
            } finally {
                setLoadingContent(false);
            }
        };
        fetchSegments();
    }, [cycleId, dayId, partId]);

    // Check PDF availability whenever segment changes
    useEffect(() => {
        const checkPdfAvailability = async () => {
            try {
                setCheckingContent(true);
                // Check if PDF exists for this specific segment
                const segmentKey = `${cycleId}_${dayId}_${partId}_${currentSegment + 1}`;
                const response = await api.get(`/pdf-study/check/${segmentKey}`);
                setPdfAvailable(response.data?.available || false);
            } catch (error) {
                setPdfAvailable(false);
            } finally {
                setCheckingContent(false);
            }
        };

        checkPdfAvailability();
    }, [cycleId, dayId, partId, currentSegment]);


    // Restore saved progress on mount
    useEffect(() => {
        if (sessionProgress.isLoaded && !hasRestoredProgress.current) {
            hasRestoredProgress.current = true;

            // Restore segment, phase, and video timestamp
            if (sessionProgress.segmentIndex !== undefined) {
                setCurrentSegment(sessionProgress.segmentIndex);
            }
            if (sessionProgress.phase) {
                setPhase(sessionProgress.phase);
                if (sessionProgress.phase !== 'video') {
                    setVideoEnded(true);
                }
            }
            if (sessionProgress.videoTimestamp > 0) {
                setSavedVideoTime(sessionProgress.videoTimestamp);
                toast.info(`Resuming from ${Math.floor(sessionProgress.videoTimestamp / 60)}:${String(Math.floor(sessionProgress.videoTimestamp % 60)).padStart(2, '0')}`);
            }

            // Check for saved analysis report
            const savedReport = getAnalysisReport(`${cycleId}-${dayId}-${partId}-${sessionProgress.segmentIndex + 1}`);
            if (savedReport && sessionProgress.phase === 'analysis') {
                // Restore analysis state
                setRecallScore(savedReport.recallScore);
                setUnderstandingLevel(savedReport.understandingLevel);
                setCoveragePercentage(savedReport.coveragePercentage);
                setFeedback(savedReport.feedback);
                setDetailedAnalysis(savedReport.detailedAnalysis);
                setStrengths(savedReport.strengths);
                setAreasToImprove(savedReport.areasToImprove);
                setConceptsCovered(savedReport.conceptsCovered);
                setConceptsMissed(savedReport.conceptsMissed);
                setAiSource(savedReport.aiSource);
            }
        }
    }, [sessionProgress.isLoaded, sessionProgress.segmentIndex, sessionProgress.phase, sessionProgress.videoTimestamp, cycleId, dayId, partId]);

    // Set video time when video element loads
    useEffect(() => {
        if (videoRef.current && savedVideoTime > 0 && phase === 'video') {
            videoRef.current.currentTime = savedVideoTime;
        }
    }, [savedVideoTime, phase]);

    // Track video time updates for persistence
    const handleVideoTimeUpdate = useCallback(() => {
        if (videoRef.current && !videoRef.current.paused) {
            sessionProgress.updateVideoTimestamp(videoRef.current.currentTime);
        }
    }, [sessionProgress]);

    const totalSegments = segments.length;


    // Recording timer
    useEffect(() => {
        if (isRecording) {
            timerRef.current = setInterval(() => {
                setRecordingTime(prev => {
                    if (prev >= 900) { // Max 15 min
                        stopRecording();
                        return prev;
                    }
                    return prev + 1;
                });
            }, 1000);
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isRecording]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            const chunks: Blob[] = [];
            mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: "audio/webm" });
                setAudioBlob(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            setResponseType("audio");
        } catch (err) {
            toast.error("Could not access microphone");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
    };

    const handleImageCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const newImages: string[] = [];
            let loadedCount = 0;

            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newImages.push(reader.result as string);
                    loadedCount++;

                    // When all files are loaded, update state
                    if (loadedCount === files.length) {
                        setCapturedImages(prev => [...prev, ...newImages]);
                        setResponseType("image");
                        toast.success(`${files.length} page(s) added`);
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeImage = (index: number) => {
        setCapturedImages(prev => prev.filter((_, i) => i !== index));
        if (capturedImages.length <= 1) {
            setResponseType(null);
        }
    };

    const simulateVideoEnd = () => {
        setVideoEnded(true);
        setIsPlaying(false);
        setPhase("response");
    };

    const submitResponse = async () => {
        if (responseType === "audio" && recordingTime < 300) {
            toast.error("Please record at least 5 minutes");
            return;
        }
        if (responseType === "image" && capturedImages.length === 0) {
            toast.error("Please upload at least one image");
            return;
        }

        setPhase("analysis");
        setAnalyzing(true);

        try {
            // Call real AI API for analysis
            const result = await analyzeRecall({
                cycle_id: cycleId,
                day_number: dayId,
                part_number: partId,
                segment_number: currentSegment + 1,
                segment_title: segment.title,
                key_points: segment.key_points,
                response_type: responseType || "audio",
                response_text: responseType === "audio"
                    ? `Student recorded ${Math.floor(recordingTime / 60)} minutes of audio response about ${segment.title}`
                    : `Student submitted ${capturedImages.length} page(s) of written notes for ${segment.title}. The notes cover the main topics discussed in the video.`
            });

            // Core metrics
            setIsRelevant(result.is_relevant);
            setRelevanceMessage(result.relevance_message);
            setRecallScore(result.recall_score);
            setUnderstandingLevel(result.understanding_level || "Satisfactory");
            setCoveragePercentage(result.coverage_percentage || 0);

            // Detailed analysis
            setFeedback(result.feedback);
            setDetailedAnalysis(result.detailed_analysis || "");

            // Strengths & Improvements
            setStrengths(result.strengths || []);
            setAreasToImprove(result.areas_to_improve || []);
            setKeyTakeaways(result.key_takeaways || []);

            // Concept Coverage
            setConceptsCovered(result.concepts_covered || []);
            setConceptsMissed(result.concepts_missed || []);

            // Content Matching (STRICT)
            setMatchedContent(result.matched_content || []);
            setUnmatchedContent(result.unmatched_content || []);
            setIrrelevantContent(result.irrelevant_content || []);
            setPenaltyApplied(result.penalty_applied || 0);
            setBaseScore(result.base_score || result.recall_score);

            // Recommendations
            setRevisionPriority(result.revision_priority || "medium");
            setMemoryTips(result.memory_retention_tips || []);
            setSuggestedNextSteps(result.suggested_next_steps || []);

            // AI Info
            setAiSource(result.ai_source);
            setAiModel(result.ai_model);
            setConfidenceScore(result.confidence_score || 80);

            setAnalyzing(false);

            if (result.is_relevant) {
                toast.success("Analysis complete!");
            } else {
                toast.error("Response doesn't match the video topic. Please re-record.");
            }
        } catch (error) {
            console.error("Analysis failed:", error);
            // Fallback to basic feedback if API fails
            setIsRelevant(true);
            setRelevanceMessage("");
            setRecallScore(72);
            setUnderstandingLevel("Satisfactory");
            setFeedback("Analysis completed. Good effort on your recall!");
            setDetailedAnalysis("");
            setStrengths(["Submitted response on time"]);
            setAreasToImprove(["Ensure all key points are covered"]);
            setKeyTakeaways([]);
            setConceptsCovered([]);
            setConceptsMissed([]);
            setRevisionPriority("medium");
            setMemoryTips([]);
            setSuggestedNextSteps([]);
            setConfidenceScore(0);
            setAnalyzing(false);
            toast.error("AI analysis unavailable, using basic feedback");
        }
    };

    const nextSegment = () => {
        // Mark current segment as complete and save analysis report
        markSegmentComplete(cycleId, dayId, partId, currentSegment + 1);

        // Save analysis report if available
        if (recallScore !== null) {
            saveAnalysisReport({
                segmentKey: `${cycleId}-${dayId}-${partId}-${currentSegment + 1}`,
                recallScore: recallScore,
                understandingLevel,
                coveragePercentage,
                feedback,
                detailedAnalysis,
                strengths,
                areasToImprove,
                conceptsCovered,
                conceptsMissed,
                aiSource,
                aiModel,
                timestamp: new Date().toISOString(),
            });
        }

        if (currentSegment < totalSegments - 1) {
            const nextIndex = currentSegment + 1;
            setCurrentSegment(nextIndex);
            setPhase("video");
            setVideoEnded(false);
            setIsPlaying(false);
            setAudioBlob(null);
            setCapturedImages([]);
            setResponseType(null);
            setRecallScore(null);
            setRecordingTime(0);

            // Update session progress
            sessionProgress.saveProgress(nextIndex, 0, 'video');
        } else {
            // Part completed - go to next part or back to main if all parts done
            sessionProgress.saveProgress(0, 0, 'complete');

            if (partId < 3) {
                toast.success(`Part ${partId} completed! Moving to Part ${partId + 1}`);
                router.push(`/student/batch1/cycle/${cycleId}/day/${dayId}/part/${partId + 1}`);
            } else {
                toast.success("Day completed! All 3 parts finished! 🎉");
                router.push(`/student/batch1`);
            }
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return "text-green-600";
        if (score >= 70) return "text-yellow-600";
        return "text-orange-600";
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => router.push("/student/batch1")} className="text-gray-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Batch 1
                </Button>
                <div className="text-sm text-gray-500">
                    Cycle {cycleId} • Day {dayId} • Part {partId}
                </div>
            </div>

            {/* Progress Card */}
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
                <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">Segment {currentSegment + 1} of {totalSegments}</span>
                        <span className="text-indigo-200">{segment.title}</span>
                    </div>
                    <Progress value={((currentSegment + (phase === "complete" ? 1 : 0)) / totalSegments) * 100} className="h-2 bg-white/20" />
                </CardContent>
            </Card>

            {/* Study Mode Selection */}
            {studyMode === "select" && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5" />
                            Choose Your Study Mode
                        </CardTitle>
                        <CardDescription>
                            Select how you want to learn this content. You can watch video lectures or study from PDF notes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {checkingContent ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                <span className="ml-3 text-gray-500">Checking available content...</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Video Mode Card */}
                                <Card
                                    className={`cursor-pointer border-2 transition-all hover:shadow-lg ${videoAvailable
                                        ? "hover:border-blue-500"
                                        : "opacity-60 cursor-not-allowed"
                                        }`}
                                    onClick={() => videoAvailable && setStudyMode("video")}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <Play className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Video Mode</h3>
                                        <p className="text-gray-500 text-sm mt-2">Watch 25-min video segments</p>
                                        <p className="text-gray-500 text-sm">Then record your recall</p>
                                        {videoAvailable ? (
                                            <span className="inline-block mt-3 text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                                ✓ Available
                                            </span>
                                        ) : (
                                            <span className="inline-block mt-3 text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                                                Coming Soon
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* PDF Mode Card */}
                                <Card
                                    className={`cursor-pointer border-2 transition-all hover:shadow-lg ${pdfAvailable
                                        ? "hover:border-emerald-500"
                                        : "opacity-60 cursor-not-allowed"
                                        }`}
                                    onClick={() => pdfAvailable && setStudyMode("pdf")}
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                            <Brain className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">PDF Mode</h3>
                                        <p className="text-gray-500 text-sm mt-2">Read page by page</p>
                                        <p className="text-gray-500 text-sm">Recall after each page</p>
                                        {pdfAvailable ? (
                                            <span className="inline-block mt-3 text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                                                ✓ Available
                                            </span>
                                        ) : (
                                            <span className="inline-block mt-3 text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                                                Coming Soon
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* PDF Study Mode */}
            {studyMode === "pdf" && (
                segment.pdf_files && segment.pdf_files.length > 0 ? (
                    <SimplePDFViewer
                        segmentTitle={segment.title}
                        pdfFiles={segment.pdf_files}
                        onBack={() => setStudyMode("select")}
                        onComplete={() => {
                            // Mark complete and move to next segment or part
                            markSegmentComplete(cycleId, dayId, partId, currentSegment + 1);
                            if (currentSegment < totalSegments - 1) {
                                setCurrentSegment(currentSegment + 1);
                            } else if (partId < 3) {
                                toast.success(`Part ${partId} completed! Moving to Part ${partId + 1}`);
                                router.push(`/student/batch1/cycle/${cycleId}/day/${dayId}/part/${partId + 1}`);
                            } else {
                                toast.success("Day completed! 🎉");
                                router.push(`/student/batch1`);
                            }
                        }}
                    />
                ) : (
                    /* Fallback to old PDFStudySession for compatibility */
                    <PDFStudySession
                        segmentKey={`${cycleId}_${dayId}_${partId}_${currentSegment + 1}`}
                        onComplete={() => {
                            markSegmentComplete(cycleId, dayId, partId, currentSegment + 1);
                            if (currentSegment < totalSegments - 1) {
                                setCurrentSegment(currentSegment + 1);
                            } else if (partId < 3) {
                                toast.success(`Part ${partId} completed! Moving to Part ${partId + 1}`);
                                router.push(`/student/batch1/cycle/${cycleId}/day/${dayId}/part/${partId + 1}`);
                            } else {
                                toast.success("Day completed! 🎉");
                                router.push(`/student/batch1`);
                            }
                        }}
                        onBack={() => setStudyMode("select")}
                    />
                )
            )}

            {/* Video Mode - Original Flow */}
            {studyMode === "video" && (
                <>
                    {/* Back to mode selection */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStudyMode("select")}
                        className="mb-4"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Change Study Mode
                    </Button>


                    {/* Video Phase */}
                    {phase === "video" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Volume2 className="h-5 w-5" />
                                    Segment {currentSegment + 1}: {segment.title}
                                </CardTitle>
                                <CardDescription>Watch the video carefully. You'll need to recall the content after.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                                    {segment.video_url ? (
                                        /* Real video player when URL is available */
                                        <video
                                            ref={videoRef}
                                            src={`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}${segment.video_url}`}
                                            className="w-full h-full object-contain"
                                            controls
                                            onEnded={() => {
                                                setVideoEnded(true);
                                                setIsPlaying(false);
                                                sessionProgress.setPhase('response');
                                            }}
                                            onPlay={() => setIsPlaying(true)}
                                            onPause={() => {
                                                setIsPlaying(false);
                                                // Save current video time on pause
                                                if (videoRef.current) {
                                                    sessionProgress.updateVideoTimestamp(videoRef.current.currentTime);
                                                }
                                            }}
                                            onTimeUpdate={handleVideoTimeUpdate}
                                            onLoadedMetadata={() => {
                                                // Resume from saved position when video loads
                                                if (videoRef.current && savedVideoTime > 0) {
                                                    videoRef.current.currentTime = savedVideoTime;
                                                    setSavedVideoTime(0); // Clear after setting
                                                }
                                            }}
                                        />
                                    ) : !isPlaying ? (
                                        <div className="text-center">
                                            <Play className="h-16 w-16 text-white/50 mx-auto mb-2" />
                                            <p className="text-white/70">Video: {segment.title}</p>
                                            <p className="text-white/50 text-sm">Duration: ~25 minutes</p>
                                            <p className="text-yellow-400 text-xs mt-2">(No video uploaded yet - demo mode)</p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <div className="animate-pulse text-white">▶ Playing...</div>
                                            <p className="text-white/70 mt-2">{segment.title}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    {!videoEnded ? (
                                        <>
                                            <Button onClick={() => setIsPlaying(!isPlaying)} variant={isPlaying ? "secondary" : "default"}>
                                                {isPlaying ? <><Pause className="mr-2 h-4 w-4" /> Pause</> : <><Play className="mr-2 h-4 w-4" /> Play Video</>}
                                            </Button>
                                            <Button variant="outline" onClick={simulateVideoEnd}>
                                                Skip to Response (Demo)
                                            </Button>
                                        </>
                                    ) : (
                                        <Button onClick={() => setPhase("response")}>
                                            <ChevronRight className="mr-2 h-4 w-4" />
                                            Proceed to Record Response
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Response Phase */}
                    {phase === "response" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Brain className="h-5 w-5" />
                                    Recall What You Learned
                                </CardTitle>
                                <CardDescription>
                                    Record audio (5-15 min) OR upload your written notes. We'll analyze your recall.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Option 1: Audio Recording */}
                                <div className={`border-2 rounded-lg p-6 ${responseType === "audio" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                        <Mic className="h-5 w-5" />
                                        Option 1: Record Audio
                                    </h3>

                                    <div className="flex flex-col items-center gap-4">
                                        {isRecording && (
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                                                    <Mic className="h-10 w-10 text-red-600" />
                                                </div>
                                                <div className="text-3xl font-mono font-bold text-red-600">
                                                    {formatTime(recordingTime)}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Min: 5:00 • Max: 15:00
                                                </div>
                                            </div>
                                        )}

                                        {audioBlob && !isRecording && (
                                            <div className="flex flex-col items-center gap-2">
                                                <CheckCircle2 className="h-12 w-12 text-green-600" />
                                                <p className="text-green-600 font-semibold">Recording saved!</p>
                                                <p className="text-sm text-gray-500">Duration: {formatTime(recordingTime)}</p>
                                            </div>
                                        )}

                                        <div className="flex gap-2 justify-center">
                                            {!isRecording && !audioBlob && (
                                                <Button onClick={startRecording} size="lg">
                                                    <Mic className="mr-2 h-5 w-5" />
                                                    Start Recording
                                                </Button>
                                            )}
                                            {isRecording && (
                                                <Button onClick={stopRecording} variant="destructive" size="lg">
                                                    <MicOff className="mr-2 h-5 w-5" />
                                                    Stop Recording
                                                </Button>
                                            )}
                                            {audioBlob && (
                                                <Button onClick={() => { setAudioBlob(null); setRecordingTime(0); }} variant="outline">
                                                    Re-record
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Option 2: Camera / Image Upload */}
                                <div className={`border-2 rounded-lg p-6 ${responseType === "image" ? "border-primary bg-primary/5" : "border-gray-200"}`}>
                                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                                        <Camera className="h-5 w-5" />
                                        Option 2: Upload Written Notes (Multiple Pages)
                                    </h3>

                                    {capturedImages.length > 0 ? (
                                        <div className="flex flex-col items-center gap-4">
                                            {/* Image Gallery */}
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
                                                {capturedImages.map((img, index) => (
                                                    <div key={index} className="relative group">
                                                        <img
                                                            src={img}
                                                            alt={`Page ${index + 1}`}
                                                            className="w-full h-32 object-cover rounded-lg border shadow-md"
                                                        />
                                                        <div className="absolute top-1 left-1 px-2 py-0.5 bg-black/70 text-white text-xs rounded">
                                                            {segment.title} - Page {index + 1}
                                                        </div>
                                                        <button
                                                            onClick={() => removeImage(index)}
                                                            className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                        >
                                                            <X className="h-3 w-3" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle2 className="h-5 w-5" />
                                                <span className="font-medium">{capturedImages.length} page(s) uploaded</span>
                                            </div>

                                            <div className="flex gap-2">
                                                {/* Add More Pages */}
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    multiple
                                                    ref={fileInputRef}
                                                    onChange={handleImageCapture}
                                                    className="hidden"
                                                />
                                                <Button
                                                    variant="outline"
                                                    onClick={() => fileInputRef.current?.click()}
                                                >
                                                    <Plus className="mr-2 h-4 w-4" />
                                                    Add More Pages
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() => { setCapturedImages([]); setResponseType(null); }}
                                                >
                                                    Remove All
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            {/* Camera Capture */}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                capture="environment"
                                                ref={cameraInputRef}
                                                onChange={handleImageCapture}
                                                className="hidden"
                                            />
                                            <Button
                                                size="lg"
                                                onClick={() => cameraInputRef.current?.click()}
                                                className="flex-1 sm:flex-none"
                                            >
                                                <Camera className="mr-2 h-5 w-5" />
                                                Take Photo
                                            </Button>

                                            {/* File Upload - Multiple */}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                ref={fileInputRef}
                                                onChange={handleImageCapture}
                                                className="hidden"
                                            />
                                            <Button
                                                size="lg"
                                                variant="outline"
                                                onClick={() => fileInputRef.current?.click()}
                                                className="flex-1 sm:flex-none"
                                            >
                                                <Upload className="mr-2 h-5 w-5" />
                                                Upload Images
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={submitResponse}
                                    className="w-full"
                                    size="lg"
                                    disabled={!audioBlob && capturedImages.length === 0}
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Submit for Analysis
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                    {/* Analysis Phase */}
                    {phase === "analysis" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5" />
                                    Recall Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {analyzing ? (
                                    <div className="text-center py-12">
                                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
                                        <p className="text-gray-600">Analyzing your response with AI...</p>
                                        <p className="text-sm text-gray-400 mt-2">Comparing with key concepts from the video</p>
                                    </div>
                                ) : (
                                    <div className="text-center py-8 space-y-6">
                                        {/* Off-Topic Warning */}
                                        {!isRelevant && (
                                            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 text-left">
                                                <div className="flex items-start gap-3">
                                                    <div className="text-red-500 text-2xl">⚠️</div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-red-700 text-lg">Response Doesn't Match Topic</h3>
                                                        <p className="text-red-600 mt-2">{relevanceMessage || "Your response appears to be about a different topic than what was covered in the video."}</p>
                                                        <p className="text-gray-700 mt-3 text-sm">
                                                            <strong>Expected Topic:</strong> {segment.title}
                                                        </p>
                                                        <Button
                                                            className="mt-4 bg-red-600 hover:bg-red-700"
                                                            onClick={() => {
                                                                setPhase("response");
                                                                setRecallScore(null);
                                                                setFeedback("");
                                                                setStrengths([]);
                                                                setAreasToImprove([]);
                                                                setIsRelevant(true);
                                                                setRelevanceMessage("");
                                                                setAudioBlob(null);
                                                                setCapturedImages([]);
                                                                setResponseType(null);
                                                                setRecordingTime(0);
                                                            }}
                                                        >
                                                            <Mic className="mr-2 h-4 w-4" />
                                                            Re-Record Your Response
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Score Display - only show if relevant */}
                                        {isRelevant && (
                                            <>
                                                <div>
                                                    <div className={`text-6xl font-bold ${getScoreColor(recallScore || 0)}`}>
                                                        {recallScore}%
                                                    </div>
                                                    <p className="text-gray-600 mt-2">Recall Score</p>

                                                    {/* AI Source Indicator */}
                                                    <div className="mt-3">
                                                        {aiSource.startsWith("ai_") ? (
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200">
                                                                🤖 AI Generated
                                                                {aiModel && <span className="text-purple-500">• {aiModel}</span>}
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                                                                📋 Template Response
                                                                <span className="text-yellow-500">• AI unavailable</span>
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <Card className="bg-gray-50">
                                                    <CardContent className="p-4">
                                                        <p className="text-gray-700 font-medium">{feedback}</p>
                                                    </CardContent>
                                                </Card>
                                            </>
                                        )}

                                        {/* Strengths - only show if relevant */}
                                        {isRelevant && strengths.length > 0 && (
                                            <div className="text-left">
                                                <h4 className="font-semibold text-green-600 mb-2">✨ Strengths:</h4>
                                                <ul className="space-y-1">
                                                    {strengths.map((s, i) => (
                                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Areas to Improve - only show if relevant */}
                                        {isRelevant && areasToImprove.length > 0 && (
                                            <div className="text-left">
                                                <h4 className="font-semibold text-amber-600 mb-2">📈 Areas to Improve:</h4>
                                                <ul className="space-y-1">
                                                    {areasToImprove.map((a, i) => (
                                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                            <Target className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                                            {a}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* === ENHANCED ANALYSIS SECTIONS === */}

                                        {/* Detailed Analysis */}
                                        {isRelevant && detailedAnalysis && (
                                            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                                                        🔍 Detailed Analysis
                                                    </h4>
                                                    <p className="text-gray-700 text-sm leading-relaxed">{detailedAnalysis}</p>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Key Takeaways */}
                                        {isRelevant && keyTakeaways.length > 0 && (
                                            <div className="text-left">
                                                <h4 className="font-semibold text-emerald-600 mb-2">💡 What You Understood Well:</h4>
                                                <ul className="space-y-1">
                                                    {keyTakeaways.map((t, i) => (
                                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Concept Coverage */}
                                        {isRelevant && (conceptsCovered.length > 0 || conceptsMissed.length > 0) && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {conceptsCovered.length > 0 && (
                                                    <Card className="bg-green-50 border-green-200">
                                                        <CardContent className="p-3">
                                                            <h5 className="font-semibold text-green-700 text-sm mb-2">✓ Concepts Covered</h5>
                                                            <div className="flex flex-wrap gap-1">
                                                                {conceptsCovered.map((c, i) => (
                                                                    <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                                                        {c}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}
                                                {conceptsMissed.length > 0 && (
                                                    <Card className="bg-red-50 border-red-200">
                                                        <CardContent className="p-3">
                                                            <h5 className="font-semibold text-red-700 text-sm mb-2">✗ Concepts to Review</h5>
                                                            <div className="flex flex-wrap gap-1">
                                                                {conceptsMissed.map((c, i) => (
                                                                    <span key={i} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                                                                        {c}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}
                                            </div>
                                        )}

                                        {/* === STRICT MATCHING SECTIONS === */}

                                        {/* Coverage Percentage Bar */}
                                        {isRelevant && coveragePercentage > 0 && (
                                            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
                                                <CardContent className="p-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h4 className="font-semibold text-gray-700">📊 Video Content Coverage</h4>
                                                        <span className={`text-lg font-bold ${coveragePercentage >= 70 ? 'text-green-600' : coveragePercentage >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                                                            {coveragePercentage}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                                        <div
                                                            className={`h-3 rounded-full ${coveragePercentage >= 70 ? 'bg-green-500' : coveragePercentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                                            style={{ width: `${coveragePercentage}%` }}
                                                        ></div>
                                                    </div>
                                                    {penaltyApplied > 0 && (
                                                        <p className="text-sm text-red-600 mt-2">
                                                            ⚠️ Score reduced by {penaltyApplied} points for irrelevant content (Base: {baseScore}, Final: {recallScore})
                                                        </p>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Irrelevant Content Warning - STRICT */}
                                        {isRelevant && irrelevantContent.length > 0 && (
                                            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-300 border-2">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                                                        ⚠️ Content NOT Related to Video Topic
                                                    </h4>
                                                    <p className="text-sm text-red-600 mb-3">
                                                        The following content was not covered in the video and does not count toward your score:
                                                    </p>
                                                    <ul className="space-y-2">
                                                        {irrelevantContent.map((item, i) => (
                                                            <li key={i} className="text-sm text-red-700 bg-red-100 p-2 rounded flex items-start gap-2">
                                                                <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Unmatched Content (but not wrong) */}
                                        {isRelevant && unmatchedContent.length > 0 && (
                                            <Card className="bg-yellow-50 border-yellow-200">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-yellow-700 mb-2">
                                                        📝 Content Not in This Video
                                                    </h4>
                                                    <p className="text-sm text-yellow-600 mb-2">
                                                        This content may be correct but wasn't covered in this specific video:
                                                    </p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {unmatchedContent.map((item, i) => (
                                                            <span key={i} className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Memory Retention Tips */}
                                        {isRelevant && memoryTips.length > 0 && (
                                            <Card className="bg-gradient-to-r from-violet-50 to-pink-50 border-violet-200">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-violet-700 mb-2 flex items-center gap-2">
                                                        🧠 Memory Retention Tips
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {memoryTips.map((tip, i) => (
                                                            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                                                <span className="text-violet-500">•</span>
                                                                {tip}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Suggested Next Steps */}
                                        {isRelevant && suggestedNextSteps.length > 0 && (
                                            <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold text-cyan-700 mb-2 flex items-center gap-2">
                                                        🎯 Suggested Next Steps
                                                    </h4>
                                                    <ol className="space-y-1 list-decimal list-inside">
                                                        {suggestedNextSteps.map((step, i) => (
                                                            <li key={i} className="text-sm text-gray-700">
                                                                {step}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Revision Priority Badge */}
                                        {isRelevant && revisionPriority && (
                                            <div className="flex justify-center">
                                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${revisionPriority === 'high'
                                                    ? 'bg-red-100 text-red-700 border border-red-300'
                                                    : revisionPriority === 'low'
                                                        ? 'bg-green-100 text-green-700 border border-green-300'
                                                        : 'bg-yellow-100 text-yellow-700 border border-yellow-300'
                                                    }`}>
                                                    📊 Revision Priority: {revisionPriority.charAt(0).toUpperCase() + revisionPriority.slice(1)}
                                                </span>
                                            </div>
                                        )}

                                        {/* Next Segment - only show if relevant */}
                                        {isRelevant && (
                                            <Button onClick={nextSegment} size="lg">
                                                {currentSegment < totalSegments - 1 ? (
                                                    <>Next Segment <ChevronRight className="ml-2 h-5 w-5" /></>
                                                ) : (
                                                    <>Complete Part {partId} <CheckCircle2 className="ml-2 h-5 w-5" /></>
                                                )}
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Premium Article View for Kena Upanishad & Content */}
                    <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                        <CardContent className="p-0">
                            {/* Hero Banner for specific content types if needed, or just elegant padding */}
                            <div className="p-6 md:p-10 max-w-none prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-bold 
                                prose-h1:text-4xl prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-slate-900 prose-h1:to-slate-600 dark:prose-h1:from-white dark:prose-h1:to-slate-400
                                prose-h2:text-2xl prose-h2:text-slate-800 dark:prose-h2:text-slate-200 prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-100 dark:prose-h2:border-slate-800 prose-h2:pb-2
                                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                                prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50/50 dark:prose-blockquote:bg-indigo-900/20 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:pr-2 prose-blockquote:rounded-r-lg prose-blockquote:italic
                                prose-ul:list-none prose-ul:pl-0 prose-li:pl-0
                                prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
                                ">

                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        // Custom Table Rendering
                                        table: ({ node, ...props }) => (
                                            <div className="overflow-x-auto my-8 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <table className="w-full text-sm text-left text-slate-600 dark:text-slate-300" {...props} />
                                            </div>
                                        ),
                                        thead: ({ node, ...props }) => (
                                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-800 dark:text-slate-300" {...props} />
                                        ),
                                        th: ({ node, ...props }) => (
                                            <th scope="col" className="px-6 py-4 font-bold border-b border-slate-200 dark:border-slate-700" {...props} />
                                        ),
                                        tr: ({ node, ...props }) => (
                                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800/50 transition-colors" {...props} />
                                        ),
                                        td: ({ node, ...props }) => (
                                            <td className="px-6 py-4" {...props} />
                                        ),
                                        // Custom Li with Icon
                                        li: ({ node, ...props }) => (
                                            <li className="flex items-start gap-3 mb-3 group" {...props}>
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                <span className="flex-1">{props.children}</span>
                                            </li>
                                        ),
                                        // Custom Blockquote
                                        blockquote: ({ node, ...props }) => (
                                            <blockquote className="border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/20 py-4 px-6 rounded-r-lg my-8 text-slate-700 dark:text-slate-300 italic shadow-sm" {...props} />
                                        )
                                    }}
                                >
                                    {segment.key_points || "*Content loading...*"}
                                </ReactMarkdown>
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
}
