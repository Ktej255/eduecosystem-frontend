"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Video,
    FileText,
    Clock,
    Sparkles,
    ArrowLeft,
    Loader2,
} from "lucide-react";
import PDFStudySession from "@/components/batch1/PDFStudySession";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function Batch1StudyPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const cycleId = searchParams.get("cycle") || "1";
    const day = searchParams.get("day") || "1";
    const segment = searchParams.get("segment") || "1";

    const segmentKey = `${cycleId}_${day}_1_${segment}`; // Example format

    const [studyMode, setStudyMode] = useState<"video" | "pdf">("video");
    const [hasVideo, setHasVideo] = useState(false);
    const [hasPdf, setHasPdf] = useState(false);
    const [loading, setLoading] = useState(true);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [pdfData, setPdfData] = useState<any>(null);

    useEffect(() => {
        checkContentAvailability();
    }, [segmentKey]);

    const checkContentAvailability = async () => {
        setLoading(true);
        try {
            // Check video availability
            try {
                const videoRes = await api.get(`/batch1/cycle/1/day/${day}/part/1`);
                const segmentData = videoRes.data.segments?.find((s: any) => s.id === parseInt(segment));
                if (segmentData?.video_url) {
                    setHasVideo(true);
                    setVideoUrl(segmentData.video_url);
                }
            } catch (e) {
                console.log("No video available");
            }

            // Check PDF availability
            try {
                const pdfRes = await api.get(`/pdf-study/segment/${segmentKey}`);
                if (pdfRes.data?.page_count > 0) {
                    setHasPdf(true);
                    setPdfData(pdfRes.data);
                }
            } catch (e) {
                console.log("No PDF available");
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black p-6">
            <div className="max-w-6xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Button variant="ghost" onClick={() => router.back()} className="text-gray-400">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Batch 1
                    </Button>
                    <div className="text-right">
                        <h1 className="text-2xl font-bold text-white">Day {day} • Segment {segment}</h1>
                        <p className="text-gray-500">Cycle {cycleId}</p>
                    </div>
                </div>

                {/* Study Mode Tabs */}
                <Tabs value={studyMode} onValueChange={(v) => setStudyMode(v as "video" | "pdf")} className="w-full">
                    <TabsList className="bg-gray-900 border border-gray-800 p-1 w-full justify-start">
                        <TabsTrigger
                            value="video"
                            className="px-8 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2 relative"
                            disabled={!hasVideo}
                        >
                            <Video className="h-4 w-4" />
                            Video Study
                            {!hasVideo && (
                                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 px-1.5 py-0.5 bg-gray-700 text-[10px] text-gray-400 rounded-full">
                                    Coming Soon
                                </span>
                            )}
                            {hasVideo && (
                                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 px-1.5 py-0.5 bg-green-600 text-[10px] text-white rounded-full animate-pulse">
                                    NEW
                                </span>
                            )}
                        </TabsTrigger>
                        <TabsTrigger
                            value="pdf"
                            className="px-8 py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white gap-2 relative"
                            disabled={!hasPdf}
                        >
                            <FileText className="h-4 w-4" />
                            PDF Self-Study
                            {!hasPdf && (
                                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 px-1.5 py-0.5 bg-gray-700 text-[10px] text-gray-400 rounded-full">
                                    Coming Soon
                                </span>
                            )}
                            {hasPdf && (
                                <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 px-1.5 py-0.5 bg-green-600 text-[10px] text-white rounded-full animate-pulse">
                                    NEW
                                </span>
                            )}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="video" className="mt-6">
                        {hasVideo ? (
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6">
                                    <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                                        <video
                                            src={videoUrl || ""}
                                            controls
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Clock className="h-4 w-4" />
                                        <span>25 minutes</span>
                                        <span className="text-purple-400">• Watch and take notes</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-12 text-center">
                                    <Video className="h-16 w-16 mx-auto text-gray-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-400 mb-2">Video Coming Soon</h3>
                                    <p className="text-gray-500">The video for this segment is being prepared.</p>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="pdf" className="mt-6">
                        {hasPdf ? (
                            <PDFStudySession
                                segmentKey={segmentKey}
                                onClose={() => router.back()}
                                onComplete={() => {
                                    router.push(`/student/batch1?completed=${day}`);
                                }}
                            />
                        ) : (
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-12 text-center">
                                    <FileText className="h-16 w-16 mx-auto text-gray-600 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-400 mb-2">PDF Coming Soon</h3>
                                    <p className="text-gray-500">The PDF for this segment is being prepared.</p>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>
                </Tabs>

                {/* Coin Economy Info */}
                <Card className="bg-gradient-to-r from-amber-900/30 to-amber-900/10 border-amber-500/30">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Sparkles className="h-6 w-6 text-amber-400" />
                            <div>
                                <p className="text-amber-300 font-medium">Coin Rewards</p>
                                <p className="text-xs text-amber-200/60">Complete early = +10 | Perfect recall = +25</p>
                            </div>
                        </div>
                        <div className="text-amber-400 text-2xl font-bold">🪙</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
