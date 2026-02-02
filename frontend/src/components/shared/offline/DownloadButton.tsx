"use client";

import React, { useState, useEffect } from 'react';
import { CloudDownload, Check, Loader2, CloudOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface DownloadButtonProps {
    contentId: string;
    title: string;
    type: 'chapter' | 'video' | 'simulation';
    size?: string;
}

export default function DownloadButton({ contentId, title, type, size = "15 MB" }: DownloadButtonProps) {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const storageKey = `offline_${contentId}`;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsDownloaded(!!localStorage.getItem(storageKey));
        }
    }, [storageKey]);

    const handleDownload = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!navigator.onLine) {
            toast.error("You need an internet connection to download.");
            return;
        }

        setIsDownloading(true);

        // Simulate network request
        setTimeout(() => {
            localStorage.setItem(storageKey, JSON.stringify({
                id: contentId,
                title,
                type,
                timestamp: new Date().toISOString()
            }));
            setIsDownloaded(true);
            setIsDownloading(false);
            toast.success(`${title} saved for offline access.`);
        }, 1500);
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        localStorage.removeItem(storageKey);
        setIsDownloaded(false);
        toast.info("Removed from offline storage.");
    };

    if (isDownloaded) {
        return (
            <Button
                variant="ghost"
                size="sm"
                className="text-green-600 hover:text-red-500 hover:bg-green-50 gap-1 h-7 text-xs"
                onClick={handleRemove}
                title="Downloaded (Click to remove)"
            >
                <Check className="w-3 h-3" />
                <span className="group-hover:hidden">Saved</span>
                <span className="hidden group-hover:inline">Remove</span>
            </Button>
        );
    }

    return (
        <Button
            variant="outline"
            size="sm"
            className="text-gray-500 hover:text-indigo-600 gap-1 h-7 text-xs border-dashed"
            onClick={handleDownload}
            disabled={isDownloading}
        >
            {isDownloading ? (
                <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
                <CloudDownload className="w-3 h-3" />
            )}
            <span>{isDownloading ? 'Saving...' : `Save Offline (${size})`}</span>
        </Button>
    );
}
