"use client";

import { useState, useEffect } from "react";
import { Youtube, AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface YouTubePreviewProps {
    value: string;
    onChange: (url: string) => void;
    existingUrl?: string;
}

// Extract YouTube video ID from various URL formats
function extractYouTubeId(url: string): string | null {
    if (!url) return null;

    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/,
        /^([a-zA-Z0-9_-]{11})$/, // Just the video ID
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

export default function YouTubePreview({ value, onChange, existingUrl }: YouTubePreviewProps) {
    const [inputValue, setInputValue] = useState(value || existingUrl || "");
    const [videoId, setVideoId] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        if (!inputValue.trim()) {
            setVideoId(null);
            setIsValid(null);
            return;
        }

        const id = extractYouTubeId(inputValue);
        setVideoId(id);
        setIsValid(!!id);

        if (id) {
            onChange(`https://www.youtube.com/watch?v=${id}`);
        }
    }, [inputValue, onChange]);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInputValue(text);
        } catch (err) {
            console.error("Failed to read clipboard:", err);
        }
    };

    return (
        <div className="space-y-4">
            {/* Input Section */}
            <div className="space-y-2">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Paste YouTube URL (e.g., https://www.youtube.com/watch?v=...)"
                            className="pl-10 pr-10"
                        />
                        {isValid !== null && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                {isValid ? (
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                ) : (
                                    <AlertCircle className="h-5 w-5 text-red-500" />
                                )}
                            </div>
                        )}
                    </div>
                    <Button variant="outline" onClick={handlePaste} type="button">
                        Paste
                    </Button>
                </div>

                {isValid === false && inputValue.trim() && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        Invalid YouTube URL. Please enter a valid YouTube video link.
                    </p>
                )}
            </div>

            {/* Video Preview */}
            {videoId && (
                <div className="space-y-2">
                    <div className="aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube Video Preview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            Video linked successfully
                        </span>
                        <a
                            href={`https://www.youtube.com/watch?v=${videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
                        >
                            Open in YouTube <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                </div>
            )}

            {/* Placeholder when no video */}
            {!videoId && (
                <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center">
                    <Youtube className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-2" />
                    <p className="text-sm text-gray-400">Enter a valid YouTube URL to preview</p>
                </div>
            )}
        </div>
    );
}
