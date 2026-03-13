"use client";

import React, { useState, useCallback } from 'react';
import { UploadCloud, FileText, X, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import Papa from 'papaparse';
import { useQuestionStore } from '@/store/useQuestionStore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function BulkQuestionUploader() {
    const [isDragging, setIsDragging] = useState(false);
    const { setStagedQuestions, stagedQuestions } = useQuestionStore();

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const parseCSV = (file: File) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const parsedData = results.data as any[];
                
                // Map CSV columns to our Question interface
                // Expected columns: Question, OptA, OptB, OptC, OptD, Correct Answer, Explanation
                const formattedQuestions = parsedData.map(row => {
                    const questionText = row['Question'] || row['question'];
                    const optA = row['OptA'] || row['option_a'];
                    const optB = row['OptB'] || row['option_b'];
                    const optC = row['OptC'] || row['option_c'];
                    const optD = row['OptD'] || row['option_d'];
                    const correctAns = row['Correct Answer'] || row['correct_answer'];
                    const explanation = row['Explanation'] || row['explanation'];

                    if (!questionText) return null;

                    const options = [
                        { text: optA, is_correct: correctAns === 'A' || correctAns === optA },
                        { text: optB, is_correct: correctAns === 'B' || correctAns === optB },
                        { text: optC, is_correct: correctAns === 'C' || correctAns === optC },
                        { text: optD, is_correct: correctAns === 'D' || correctAns === optD },
                    ].filter(opt => opt.text); // Filter out empty options

                    return {
                        text: questionText,
                        explanation: explanation,
                        options: options,
                        difficulty: 'medium'
                    };
                }).filter(Boolean) as any[];

                if (formattedQuestions.length > 0) {
                    setStagedQuestions(formattedQuestions);
                    toast.success(`Successfully parsed ${formattedQuestions.length} questions.`);
                } else {
                    toast.error("No valid questions found in the CSV. Please check the format.");
                }
            },
            error: (error) => {
                console.error("CSV Parsing Error:", error);
                toast.error("Failed to parse CSV file.");
            }
        });
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'text/csv') {
            parseCSV(file);
        } else {
            toast.error("Please upload a valid CSV file.");
        }
    }, [setStagedQuestions]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            parseCSV(file);
        }
    };

    if (stagedQuestions.length > 0) return null;

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300
                    flex flex-col items-center justify-center text-center
                    ${isDragging 
                        ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 scale-[1.02]' 
                        : 'border-slate-300 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 bg-card'
                    }
                `}
            >
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className={`p-4 rounded-full mb-4 transition-colors ${isDragging ? 'bg-emerald-100 dark:bg-emerald-900' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    <UploadCloud className={`h-10 w-10 ${isDragging ? 'text-emerald-600' : 'text-slate-500'}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">Bulk Upload MCQs</h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                    Drag and drop your CSV file here, or click to browse. 
                    Ensure your columns match: Question, OptA, OptB, OptC, OptD, Correct Answer, Explanation.
                </p>
                
                <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                        <FileText className="h-3 w-3" />
                        CSV Only
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                        <CheckCircle2 className="h-3 w-3" />
                        AI Auto-tagging
                    </div>
                </div>
            </div>

            {/* Template Help */}
            <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900 rounded-xl">
                <div className="flex gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-amber-900 dark:text-amber-400">CSV Template Guide</h4>
                        <p className="text-xs text-amber-800 dark:text-amber-500/80 mt-1">
                            Your CSV should have these headers: <strong>Question, OptA, OptB, OptC, OptD, Correct Answer, Explanation</strong>.
                            For 'Correct Answer', use either the full text or 'A', 'B', 'C', 'D'.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
