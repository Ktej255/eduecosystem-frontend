"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, ChevronLeft, ChevronRight, ExternalLink, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface PDFFile {
    url: string;
    name: string;
    order: number;
}

interface SimplePDFViewerProps {
    segmentTitle: string;
    pdfFiles: PDFFile[];
    onBack: () => void;
    onComplete?: () => void;
}

export default function SimplePDFViewer({ segmentTitle, pdfFiles, onBack, onComplete }: SimplePDFViewerProps) {
    const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
    const [zoom, setZoom] = useState(100);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Sort by order
    const sortedPdfs = [...pdfFiles].sort((a, b) => a.order - b.order);
    const currentPdf = sortedPdfs[currentPdfIndex];
    const totalPdfs = sortedPdfs.length;

    const progress = ((currentPdfIndex + 1) / totalPdfs) * 100;

    const prevPdf = () => {
        if (currentPdfIndex > 0) {
            setCurrentPdfIndex(currentPdfIndex - 1);
        }
    };

    const nextPdf = () => {
        if (currentPdfIndex < totalPdfs - 1) {
            setCurrentPdfIndex(currentPdfIndex + 1);
        } else if (onComplete) {
            onComplete();
        }
    };

    const adjustZoom = (delta: number) => {
        setZoom(prev => Math.max(50, Math.min(200, prev + delta)));
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // Determine the full URL
    const getPdfUrl = (pdf: PDFFile) => {
        if (pdf.url.startsWith("http")) {
            return pdf.url;
        }
        // Relative path - prepend API base
        const apiBase = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com";
        return `${apiBase.replace(/\/api\/v1$/, "")}${pdf.url}`;
    };

    if (!currentPdf) {
        return (
            <div className="text-center py-12">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No PDFs available for this segment.</p>
                <Button variant="outline" onClick={onBack} className="mt-4">
                    Go Back
                </Button>
            </div>
        );
    }

    return (
        <div className={`space-y-4 ${isFullscreen ? 'fixed inset-0 z-50 bg-card p-4' : ''}`}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-red-500" />
                        {segmentTitle}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Page {currentPdfIndex + 1} of {totalPdfs}: {currentPdf.name}
                    </p>
                </div>
                <Button variant="ghost" onClick={onBack}>
                    ← Back
                </Button>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between bg-muted p-2 rounded-lg">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => adjustZoom(-10)}>
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-mono min-w-[60px] text-center">{zoom}%</span>
                    <Button variant="ghost" size="sm" onClick={() => adjustZoom(10)}>
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
                        <Maximize2 className="h-4 w-4" />
                    </Button>
                    <a href={getPdfUrl(currentPdf)} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </div>

            {/* PDF Viewer */}
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <div
                        className="relative bg-muted"
                        style={{
                            height: isFullscreen ? 'calc(100vh - 200px)' : '600px',
                            overflow: 'auto'
                        }}
                    >
                        <iframe
                            src={`${getPdfUrl(currentPdf)}#toolbar=0&navpanes=0`}
                            className="w-full h-full border-0"
                            style={{
                                transform: `scale(${zoom / 100})`,
                                transformOrigin: 'top left',
                                width: `${10000 / zoom}%`,
                                height: `${10000 / zoom}%`
                            }}
                            title={currentPdf.name}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    onClick={prevPdf}
                    disabled={currentPdfIndex === 0}
                    className="flex items-center gap-2"
                >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Page
                </Button>

                <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                        {currentPdfIndex + 1} / {totalPdfs}
                    </span>
                </div>

                <Button
                    onClick={nextPdf}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                    {currentPdfIndex < totalPdfs - 1 ? (
                        <>
                            Next Page
                            <ChevronRight className="h-4 w-4" />
                        </>
                    ) : (
                        <>
                            Complete Study
                            <ChevronRight className="h-4 w-4" />
                        </>
                    )}
                </Button>
            </div>

            {/* Page Thumbnails */}
            {totalPdfs > 1 && (
                <div className="flex gap-2 overflow-x-auto py-2">
                    {sortedPdfs.map((pdf, index) => (
                        <button
                            key={pdf.url}
                            onClick={() => setCurrentPdfIndex(index)}
                            className={`
                                flex-shrink-0 p-2 rounded-lg border-2 transition-all
                                ${index === currentPdfIndex
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                                    : 'border-border hover:border-border'
                                }
                            `}
                        >
                            <div className="flex items-center gap-2">
                                <FileText className={`h-4 w-4 ${index === currentPdfIndex ? 'text-blue-500' : 'text-muted-foreground'}`} />
                                <span className="text-xs font-medium max-w-[100px] truncate">
                                    Page {index + 1}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
