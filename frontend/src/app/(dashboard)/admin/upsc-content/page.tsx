"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { getBookChapters } from '@/data/upsc-chapter-registry';

export default function AdminUPSCPDFUpload() {
    const [selectedSubject, setSelectedSubject] = useState<string>("");
    const [selectedBook, setSelectedBook] = useState<string>("");
    const [selectedChapter, setSelectedChapter] = useState<string>("");
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Derived states
    const subject = UPSC_CATALOG.find(s => s.id === selectedSubject);
    const books = subject?.books || [];
    const chapters = selectedBook ? getBookChapters(selectedBook) : [];

    const handleUpload = async () => {
        if (!file || !selectedChapter) return;

        setIsUploading(true);
        setUploadStatus('idle');

        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock success
        setIsUploading(false);
        setUploadStatus('success');

        // In real app, this would POST to an API
        console.log(`Uploaded ${file.name} for Chapter ${selectedChapter}`);

        // Reset after 3 seconds
        setTimeout(() => {
            setUploadStatus('idle');
            setFile(null);
            setSelectedChapter("");
        }, 3000);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <Upload className="w-8 h-8 text-indigo-600" />
                    UPSC Content Management
                </h1>
                <p className="text-muted-foreground mt-2">Upload and manage secure PDF assets for UPSC chapters.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Upload Chapter Notes (PDF)</CardTitle>
                    <CardDescription>
                        Select the specific chapter to attach the PDF content. This will immediately be visible to students.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Selection Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Subject</label>
                            <Select value={selectedSubject} onValueChange={(val) => {
                                setSelectedSubject(val);
                                setSelectedBook("");
                                setSelectedChapter("");
                            }}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Subject" />
                                </SelectTrigger>
                                <SelectContent>
                                    {UPSC_CATALOG.map(subj => (
                                        <SelectItem key={subj.id} value={subj.id}>{subj.title}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Book</label>
                            <Select value={selectedBook} onValueChange={(val) => {
                                setSelectedBook(val);
                                setSelectedChapter("");
                            }} disabled={!selectedSubject}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Book" />
                                </SelectTrigger>
                                <SelectContent>
                                    {books.map(book => (
                                        <SelectItem key={book.id} value={book.id}>{book.title}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Chapter</label>
                            <Select value={selectedChapter} onValueChange={setSelectedChapter} disabled={!selectedBook}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Chapter" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px]">
                                    {chapters.map(ch => (
                                        <SelectItem key={ch.id} value={ch.id.toString()}>
                                            Chapter {ch.id}: {ch.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* File Upload Area */}
                    <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center transition-colors hover:border-indigo-400 bg-muted/50">
                        {file ? (
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-red-100 rounded-lg">
                                    <FileText className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium text-foreground">{file.name}</p>
                                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => setFile(null)} className="ml-4 text-red-500 hover:text-red-700">
                                    Remove
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                                <h3 className="font-medium text-foreground mb-1">
                                    Click to upload or drag and drop
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">PDF files only (Max 20MB)</p>
                                <Input
                                    type="file"
                                    accept=".pdf"
                                    className="hidden"
                                    id="file-upload"
                                    onChange={(e) => {
                                        if (e.target.files?.[0]) {
                                            setFile(e.target.files[0]);
                                        }
                                    }}
                                />
                                <Button onClick={() => document.getElementById('file-upload')?.click()}>
                                    Select PDF
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end">
                        <Button
                            size="lg"
                            onClick={handleUpload}
                            disabled={!file || !selectedChapter || isUploading}
                            className={`min-w-[150px] ${uploadStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''
                                }`}
                        >
                            {isUploading ? (
                                <>
                                    <Upload className="w-4 h-4 mr-2 animate-bounce" /> Uploading...
                                </>
                            ) : uploadStatus === 'success' ? (
                                <>
                                    <CheckCircle className="w-4 h-4 mr-2" /> Uploaded!
                                </>
                            ) : (
                                <>
                                    <Upload className="w-4 h-4 mr-2" /> Upload to Server
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Status Message */}
                    {uploadStatus === 'success' && (
                        <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>File successfully uploaded and linked to <strong>Chapter {selectedChapter}</strong>. Changes are live immediately.</span>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Current Registry Status */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" /> Current Registry Status
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Chapters</p>
                            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                                {UPSC_CATALOG.reduce((acc, subj) => acc + subj.books.reduce((bAcc, book) => bAcc + getBookChapters(book.id).length, 0), 0)}
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Active PDFs</p>
                            <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                                {UPSC_CATALOG.reduce((acc, subj) => acc + subj.books.reduce((bAcc, book) => bAcc + getBookChapters(book.id).filter(c => c.pdfUrl).length, 0), 0)}
                            </p>
                        </div>
                        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pending Uploads</p>
                            <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                                {UPSC_CATALOG.reduce((acc, subj) => acc + subj.books.reduce((bAcc, book) => bAcc + getBookChapters(book.id).filter(c => !c.pdfUrl).length, 0), 0)}
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Books</p>
                            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                                {UPSC_CATALOG.reduce((acc, subj) => acc + subj.books.length, 0)}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
