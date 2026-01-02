"use client";

import { useState, useRef, useCallback } from "react";
import { FileText, Upload, GripVertical, Trash2, Eye, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PDFFile {
    id: string;
    file?: File;
    name: string;
    order: number;
    size?: number;
    url?: string; // For existing PDFs
}

interface PDFUploadManagerProps {
    onFilesChange: (files: PDFFile[]) => void;
    existingPdfs?: { url: string; name: string; order: number }[];
}

export default function PDFUploadManager({ onFilesChange, existingPdfs = [] }: PDFUploadManagerProps) {
    const [pdfFiles, setPdfFiles] = useState<PDFFile[]>(() =>
        existingPdfs.map((pdf, idx) => ({
            id: `existing-${idx}`,
            name: pdf.name,
            order: pdf.order,
            url: pdf.url,
        }))
    );
    const [isDragging, setIsDragging] = useState(false);
    const [draggedItem, setDraggedItem] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = useCallback((files: FileList | null) => {
        if (!files) return;

        const newFiles: PDFFile[] = Array.from(files)
            .filter(file => file.type === "application/pdf")
            .map((file, idx) => ({
                id: `new-${Date.now()}-${idx}`,
                file,
                name: file.name,
                order: pdfFiles.length + idx + 1,
                size: file.size,
            }));

        if (newFiles.length === 0) return;

        const updatedFiles = [...pdfFiles, ...newFiles];
        setPdfFiles(updatedFiles);
        onFilesChange(updatedFiles);
    }, [pdfFiles, onFilesChange]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    };

    const removeFile = (id: string) => {
        const updatedFiles = pdfFiles
            .filter(f => f.id !== id)
            .map((f, idx) => ({ ...f, order: idx + 1 }));
        setPdfFiles(updatedFiles);
        onFilesChange(updatedFiles);
    };

    // Drag-to-reorder handlers
    const handleRowDragStart = (index: number) => {
        setDraggedItem(index);
    };

    const handleRowDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedItem === null || draggedItem === index) return;

        const updatedFiles = [...pdfFiles];
        const [draggedFile] = updatedFiles.splice(draggedItem, 1);
        updatedFiles.splice(index, 0, draggedFile);

        // Update order numbers
        updatedFiles.forEach((f, idx) => f.order = idx + 1);

        setPdfFiles(updatedFiles);
        setDraggedItem(index);
    };

    const handleRowDragEnd = () => {
        setDraggedItem(null);
        onFilesChange(pdfFiles);
    };

    const formatFileSize = (bytes?: number) => {
        if (!bytes) return "—";
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    return (
        <div className="space-y-4">
            {/* Drop Zone */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`
                    border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
                    ${isDragging
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                        : "border-gray-300 dark:border-gray-700 hover:border-purple-400"
                    }
                `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/pdf"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFileSelect(e.target.files)}
                />
                <Upload className={`h-10 w-10 mx-auto mb-3 ${isDragging ? "text-purple-500" : "text-gray-400"}`} />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-purple-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">PDF files only • Multiple files allowed</p>
            </div>

            {/* PDF List */}
            {pdfFiles.length > 0 && (
                <Card>
                    <CardContent className="p-0">
                        <div className="divide-y dark:divide-gray-800">
                            {pdfFiles.map((pdf, index) => (
                                <div
                                    key={pdf.id}
                                    draggable
                                    onDragStart={() => handleRowDragStart(index)}
                                    onDragOver={(e) => handleRowDragOver(e, index)}
                                    onDragEnd={handleRowDragEnd}
                                    className={`
                                        flex items-center gap-3 p-3 cursor-move transition-all
                                        ${draggedItem === index ? "opacity-50 bg-purple-50 dark:bg-purple-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-800"}
                                    `}
                                >
                                    {/* Drag Handle */}
                                    <GripVertical className="h-5 w-5 text-gray-400 flex-shrink-0" />

                                    {/* Order Number */}
                                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                                            {pdf.order}
                                        </span>
                                    </div>

                                    {/* File Icon & Name */}
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                        <FileText className="h-5 w-5 text-red-500 flex-shrink-0" />
                                        <span className="text-sm font-medium truncate">{pdf.name}</span>
                                    </div>

                                    {/* File Size */}
                                    <span className="text-xs text-gray-500 flex-shrink-0">
                                        {formatFileSize(pdf.size)}
                                    </span>

                                    {/* Preview Button (for existing) */}
                                    {pdf.url && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(pdf.url, "_blank");
                                            }}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    )}

                                    {/* Remove Button */}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile(pdf.id);
                                        }}
                                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Summary */}
            {pdfFiles.length > 0 && (
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{pdfFiles.length} PDF{pdfFiles.length !== 1 ? "s" : ""} ready</span>
                    <span className="text-xs">Drag to reorder • PDFs will be shown in sequence to students</span>
                </div>
            )}
        </div>
    );
}
