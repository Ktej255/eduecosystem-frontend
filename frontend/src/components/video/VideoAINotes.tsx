"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, FileText, Sparkles, BookOpen, ListChecks, AlertCircle } from "lucide-react";
import api from "@/lib/api";

interface VideoAINotesProps {
    segmentKey: string;
    lessonId?: number;
}

interface DocumentData {
    segment_key: string;
    title: string;
    summary: string;
    key_points_for_recall: string[];
    transcript_text?: string;
    structured_content?: any[];
}

export function VideoAINotes({ segmentKey, lessonId }: VideoAINotesProps) {
    const [document, setDocument] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (segmentKey) {
            fetchDocument();
        }
    }, [segmentKey]);

    const fetchDocument = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await api.get(`/batch1/segment-document/${segmentKey}`);
            setDocument(res.data);
        } catch (err: any) {
            if (err.response?.status === 404) {
                setError("AI Notes are being generated. Check back after the video has been processed.");
            } else {
                setError("Failed to load AI Notes.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-purple-500">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p className="text-sm text-gray-400">Loading AI Notes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-amber-500 opacity-60" />
                <p className="text-gray-400">{error}</p>
            </div>
        );
    }

    if (!document) return null;

    return (
        <div className="space-y-6">
            {/* Summary Section */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-purple-400">
                        <Sparkles className="h-5 w-5" />
                        AI Summary
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 leading-relaxed">{document.summary}</p>
                </CardContent>
            </Card>

            {/* Key Points */}
            {document.key_points_for_recall && document.key_points_for_recall.length > 0 && (
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-white">
                            <ListChecks className="h-5 w-5 text-cyan-400" />
                            Key Points to Remember
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {document.key_points_for_recall.map((point, i) => (
                                <li key={i} className="flex gap-3 text-gray-300">
                                    <span className="text-cyan-500 font-bold mt-0.5">{i + 1}.</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            {/* Full Transcript (Collapsible) */}
            {document.transcript_text && (
                <Card className="bg-gray-900 border-gray-800">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-white">
                            <FileText className="h-5 w-5 text-gray-400" />
                            Full Transcript
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="max-h-[300px] overflow-y-auto text-sm text-gray-400 leading-relaxed bg-black/30 p-4 rounded-lg">
                            {document.transcript_text}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
