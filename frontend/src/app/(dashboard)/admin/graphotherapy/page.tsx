"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
    Upload,
    FileText,
    BookOpen,
    Check,
    Plus,
    Trash2,
    Eye,
    Save
} from 'lucide-react';
import { toast } from 'sonner';
import graphotherapyService from '@/services/graphotherapyService';

interface GraphoBookConfig {
    id: string;
    title: string;
    level: number;
    totalDays: number;
    pdfFile?: File;
    status: 'draft' | 'published';
}

export default function AdminGraphotherapyPage() {
    const [activeTab, setActiveTab] = useState("materials");
    const [books, setBooks] = useState<GraphoBookConfig[]>([
        { id: '1', title: 'Level 1: Foundation', level: 1, totalDays: 30, status: 'published' }
    ]);
    const [isCreating, setIsCreating] = useState(false);
    const [newBook, setNewBook] = useState<Partial<GraphoBookConfig>>({
        level: 1,
        totalDays: 30
    });
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [selectedReport, setSelectedReport] = useState<any>(null);

    const loadSubmissions = async () => {
        try {
            const data = await graphotherapyService.getSubmissions();
            setSubmissions(data);
        } catch (error) {
            console.error("Failed to load submissions", error);
        }
    };

    const handleAnalyze = async (id: number) => {
        toast.promise(graphotherapyService.analyzeSubmission(id), {
            loading: 'Generating Analysis Report...',
            success: (data) => {
                loadSubmissions();
                return "Analysis Complete!";
            },
            error: 'Failed to analyze submission'
        });
    };

    const handleViewReport = (submission: any) => {
        setSelectedReport(submission);
    };

    React.useEffect(() => {
        if (activeTab === 'submissions') loadSubmissions();
    }, [activeTab]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setNewBook({ ...newBook, pdfFile: e.target.files[0] });
            toast.success("PDF Selected: " + e.target.files[0].name);
        }
    };

    const handleSaveBook = async () => {
        if (!newBook.title || !newBook.pdfFile) {
            toast.error("Please provide title and PDF file");
            return;
        }

        try {
            await graphotherapyService.uploadReferenceBook(
                newBook.title,
                newBook.level || 1,
                newBook.totalDays || 30,
                newBook.pdfFile
            );

            toast.success("Reference Material Saved Successfully!");
            setIsCreating(false);
            setNewBook({ level: 1, totalDays: 30 });
            // Refresh list
            loadBooks();
        } catch (error) {
            toast.error("Failed to upload book");
            console.error(error);
        }
    };

    const loadBooks = async () => {
        try {
            const data = await graphotherapyService.getBooks();
            setBooks(data.map((b: any) => ({
                id: b.id.toString(),
                title: b.title,
                level: b.level,
                totalDays: b.total_days,
                status: b.is_published ? 'published' : 'draft'
            })));
        } catch (error) {
            console.error("Failed to load books", error);
        }
    };

    React.useEffect(() => {
        loadBooks();
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Graphotherapy Management</h1>
                    <p className="text-muted-foreground mt-2">
                        Manage Golden Standard reference materials and analysis configurations.
                    </p>
                </div>
            </div>

            <Tabs defaultValue="materials" onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-neutral-800 border border-neutral-700">
                    <TabsTrigger value="materials">Reference Materials</TabsTrigger>
                    <TabsTrigger value="submissions">Student Submissions</TabsTrigger>
                    <TabsTrigger value="reports">Generated Reports</TabsTrigger>
                </TabsList>

                {/* MATERIALS TAB */}
                <TabsContent value="materials" className="space-y-6">
                    <div className="flex justify-between items-center py-4">
                        <h2 className="text-xl font-bold">Course Books (Golden Standard)</h2>
                        <Button
                            onClick={() => setIsCreating(!isCreating)}
                            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
                        >
                            <Plus className="w-4 h-4" /> Add New Book
                        </Button>
                    </div>

                    {isCreating && (
                        <Card className="bg-neutral-900 border-neutral-800 mb-8 animate-in slide-in-from-top-4">
                            <CardHeader>
                                <CardTitle>Upload Reference Material</CardTitle>
                                <CardDescription>Upload the master PDF for handwriting verification.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label>Book Title</Label>
                                        <Input
                                            placeholder="e.g. Level 1 Workbook"
                                            value={newBook.title || ''}
                                            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                                            className="bg-neutral-800 border-neutral-700"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Level</Label>
                                        <Input
                                            type="number"
                                            value={newBook.level}
                                            onChange={(e) => setNewBook({ ...newBook, level: parseInt(e.target.value) })}
                                            className="bg-neutral-800 border-neutral-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Reference PDF</Label>
                                    <div className="border-2 border-dashed border-neutral-700 rounded-xl p-8 flex flex-col items-center justify-center bg-neutral-800/50 hover:bg-neutral-800 transition-colors cursor-pointer relative">
                                        <input
                                            type="file"
                                            accept="application/pdf"
                                            onChange={handleFileUpload}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        {newBook.pdfFile ? (
                                            <div className="flex flex-col items-center text-green-400">
                                                <FileText className="w-10 h-10 mb-2" />
                                                <span className="font-bold">{newBook.pdfFile.name}</span>
                                                <span className="text-xs text-neutral-500">{(newBook.pdfFile.size / 1024 / 1024).toFixed(2)} MB</span>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center text-neutral-400">
                                                <Upload className="w-10 h-10 mb-2" />
                                                <span className="font-bold">Click to Upload PDF</span>
                                                <span className="text-xs text-neutral-500">Supports PDF up to 50MB</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 pt-4">
                                    <Button variant="outline" onClick={() => setIsCreating(false)}>Cancel</Button>
                                    <Button onClick={handleSaveBook} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                                        <Save className="w-4 h-4" /> Save Reference
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <Card key={book.id} className="bg-neutral-900 border-neutral-800 overflow-hidden hover:border-neutral-600 transition-all">
                                <div className="h-32 bg-neutral-800 flex items-center justify-center border-b border-neutral-800">
                                    <BookOpen className="w-12 h-12 text-neutral-600" />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-bold text-lg">{book.title}</h3>
                                            <p className="text-sm text-neutral-400">Level {book.level} • {book.totalDays} Days</p>
                                        </div>
                                        <div className={`px-2 py-1 rounded text-xs font-bold ${book.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                                            {book.status.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-2">
                                        <Button variant="outline" className="flex-1 border-neutral-700 hover:bg-neutral-800">
                                            <Eye className="w-4 h-4 mr-2" /> Manage
                                        </Button>
                                        <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                {/* SUBMISSIONS TAB Placeholder */}
                <TabsContent value="submissions">
                    <Card className="bg-neutral-900 border-neutral-800">
                        <CardHeader>
                            <CardTitle>Student Verification Queue</CardTitle>
                            <CardDescription>Review and verify daily handwriting submissions.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-neutral-800">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-neutral-800/50 text-neutral-400">
                                        <tr>
                                            <th className="p-4 font-medium">User ID</th>
                                            <th className="p-4 font-medium">Day</th>
                                            <th className="p-4 font-medium">Time Spent</th>
                                            <th className="p-4 font-medium">Status</th>
                                            <th className="p-4 font-medium">Submitted</th>
                                            <th className="p-4 font-medium text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800">
                                        {submissions.length === 0 ? (
                                            <tr>
                                                <td colSpan={6} className="p-8 text-center text-neutral-500">
                                                    No submissions found.
                                                </td>
                                            </tr>
                                        ) : (
                                            submissions.map((sub: any) => (
                                                <tr key={sub.id} className="hover:bg-neutral-800/30">
                                                    <td className="p-4 text-white">#{sub.user_id}</td>
                                                    <td className="p-4 text-white">Day {sub.day}</td>
                                                    <td className="p-4 text-neutral-400">{sub.duration_seconds ? `${Math.round(sub.duration_seconds / 60)}m` : '-'}</td>
                                                    <td className="p-4">
                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${sub.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                                                            sub.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                                                                'bg-amber-500/20 text-amber-400'
                                                            }`}>
                                                            {sub.status.toUpperCase()}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-neutral-400">
                                                        {new Date(sub.completed_at).toLocaleDateString()}
                                                    </td>
                                                    <td className="p-4 text-right">
                                                        {sub.status === 'analyzed' ? (
                                                            <Button size="sm" variant="outline" className="h-8 border-green-700 text-green-400 bg-green-900/10 hover:bg-green-900/20" onClick={() => handleViewReport(sub)}>
                                                                View Report
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                className="h-8 border-neutral-700 hover:bg-blue-900/20 hover:text-blue-400 hover:border-blue-700 transition-all"
                                                                onClick={() => handleAnalyze(sub.id)}
                                                            >
                                                                Analyze
                                                            </Button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Report Dialog */}
                {selectedReport && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                        <Card className="max-w-2xl w-full bg-neutral-900 border-neutral-800 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
                            <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-neutral-900 border-b border-neutral-800 z-10">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <CardTitle>Analysis Report</CardTitle>
                                        <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full font-bold">AI Generated</span>
                                    </div>
                                    <CardDescription>Submission #{selectedReport.id} • Score: {selectedReport.verification_score}/100</CardDescription>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedReport(null)}>
                                    <Trash2 className="w-5 h-5 rotate-45" />
                                </Button>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700">
                                    <h4 className="text-sm font-bold text-neutral-400 uppercase mb-2">Summary</h4>
                                    <p className="text-white">{selectedReport.analysis_result?.summary || "Analysis pending..."}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {selectedReport.analysis_result?.traits?.map((t: any, i: number) => (
                                        <div key={i} className="bg-neutral-800 p-4 rounded-xl border border-neutral-700">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-bold">{t.trait}</span>
                                                <span className={`font-mono font-bold ${t.score > 80 ? 'text-green-400' : 'text-amber-400'}`}>{t.score}%</span>
                                            </div>
                                            <div className="w-full bg-neutral-700 h-1.5 rounded-full mb-3">
                                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full" style={{ width: `${t.score}%` }} />
                                            </div>
                                            <p className="text-xs text-neutral-400 leading-relaxed">{t.observation}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end gap-2 pt-4 border-t border-neutral-800">
                                    <Button variant="outline" onClick={() => setSelectedReport(null)}>Close</Button>
                                    <Button
                                        className="bg-blue-600 hover:bg-blue-700"
                                        onClick={() => {
                                            if (selectedReport.analysis_result?.pdf_url) {
                                                window.open(`http://localhost:8000${selectedReport.analysis_result.pdf_url}`, '_blank');
                                            } else {
                                                toast.error("PDF not available");
                                            }
                                        }}
                                        disabled={!selectedReport.analysis_result?.pdf_url}
                                    >
                                        Download PDF
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* REPORTS TAB Placeholder */}
                <TabsContent value="reports">
                    <Card className="bg-neutral-900 border-neutral-800 p-12 text-center text-neutral-500">
                        <p>Generated analysis reports will appear here.</p>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
