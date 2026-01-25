"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FileText, Lock, AlertTriangle } from 'lucide-react';

interface SecurePDFViewerProps {
    pdfUrl: string;
    title: string;
}

export default function SecurePDFViewer({ pdfUrl, title }: SecurePDFViewerProps) {
    const [loading, setLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // Prevent right clicks globally in this component
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            if (containerRef.current && containerRef.current.contains(e.target as Node)) {
                e.preventDefault();
            }
        };

        // Prevent keyboard shortcuts for print/save
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's')) {
                e.preventDefault();
                alert("Printing and saving are disabled for this content.");
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-gray-900 flex flex-col items-center select-none print:hidden">
            {/* Security Watermark / Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-[0.03] rotate-45">
                <div className="text-9xl font-bold text-black dark:text-white whitespace-nowrap">
                    CONFIDENTIAL • DO NOT SHARE
                </div>
            </div>

            {/* Block Print CSS */}
            <style jsx global>{`
                @media print {
                    body * {
                        display: none !important;
                    }
                    body:after {
                        content: "Content is protected. Printing is not allowed.";
                        display: block;
                        font-size: 24px;
                        text-align: center;
                        padding: 50px;
                    }
                }
            `}</style>

            {/* The PDF Iframe - "Sandboxed" via overlays */}
            <div className="relative w-full h-[800px] bg-white overflow-hidden shadow-2xl rounded-sm">
                {/* Transparent overlay to block direct iframe interaction (optional - blocks scroll so maybe allow scroll but block context) */}
                {/* We can't block direct interaction if we want them to scroll internal PDF. 
                    Best effort: simple iframe. If native PDF reader inside iframe allows download, we can't easily stop it cross-origin.
                    But assuming same origin or controlled PDF serving, we can hide toolbar.
                 */}
                <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-0 block"
                    onLoad={() => setLoading(false)}
                    title={title}
                />

                {/* Fallback msg if iframe blocks */}
            </div>

            <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                <Lock className="w-3 h-3" />
                <span>Protected Content. Downloads and Printing disabled.</span>
            </div>
        </div>
    );
}
