"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, FileText, BrainCircuit, CheckCircle, AlertCircle, FolderOpen } from 'lucide-react';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { getBookChapters, UPSCChapter } from '@/data/upsc-chapter-registry';

// Helper to check resource status
const getResourceStatus = (chapter: UPSCChapter) => {
    return {
        pdf: !!chapter.pdfUrl,
        mcq: chapter.hasMCQ,
        flashcards: chapter.hasFlashcards,
        video: false // Placeholder for now
    };
};

export default function TeacherUPSCResourcesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubject, setSelectedSubject] = useState<string>("");
    const [selectedBook, setSelectedBook] = useState<string>("");

    const subject = UPSC_CATALOG.find(s => s.id === selectedSubject);
    const books = subject?.books || [];

    const activeBook = books.find(b => b.id === selectedBook);

    const chapters = selectedBook ? getBookChapters(selectedBook) : [];

    // Filter logic
    const filteredChapters = chapters.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.id.toString().includes(searchQuery)
    );

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                        <FolderOpen className="w-8 h-8 text-orange-500" />
                        UPSC Resources
                    </h1>
                    <p className="text-muted-foreground mt-2">View status of PDFs, MCQs, and Flashcards for all chapters.</p>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search chapters..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="bg-card dark:bg-[#111] p-4 rounded-lg border border-border flex flex-wrap gap-4 items-end">
                <div className="space-y-2 min-w-[200px]">
                    <label className="text-sm font-medium">Subject</label>
                    <Select value={selectedSubject} onValueChange={(val) => {
                        setSelectedSubject(val);
                        // Auto-select first book
                        const subj = UPSC_CATALOG.find(s => s.id === val);
                        if (subj && subj.books.length > 0) {
                            setSelectedBook(subj.books[0].id);
                        } else {
                            setSelectedBook("");
                        }
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

                <div className="space-y-2 min-w-[200px]">
                    <label className="text-sm font-medium">Book</label>
                    <Select value={selectedBook} onValueChange={setSelectedBook} disabled={!selectedSubject}>
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

                <div className="flex-1 min-w-[200px]">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search chapters..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>
            </div>

            {/* Results Table */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>{activeBook?.title || "Select a Book"}</span>
                        <span className="text-sm font-normal text-muted-foreground">{filteredChapters.length} Chapters Found</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {selectedBook ? (
                        <div className="rounded-md border border-border overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-muted border-b border-border">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
                                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">Chapter Title</th>
                                        <th className="px-4 py-3 text-center font-medium text-muted-foreground">PDF Notes</th>
                                        <th className="px-4 py-3 text-center font-medium text-muted-foreground">MCQs</th>
                                        <th className="px-4 py-3 text-center font-medium text-muted-foreground">Flashcards</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border dark:divide-gray-800">
                                    {filteredChapters.length > 0 ? (
                                        filteredChapters.map((chapter) => {
                                            const status = getResourceStatus(chapter);
                                            return (
                                                <tr key={chapter.id} className="hover:bg-muted dark:hover:bg-gray-800/50">
                                                    <td className="px-4 py-3 font-medium text-muted-foreground">{chapter.id}</td>
                                                    <td className="px-4 py-3 font-medium text-foreground">{chapter.title}</td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex justify-center">
                                                            {status.pdf ? (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                                    <CheckCircle className="w-3 h-3 mr-1" /> Active
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                                                    Pending
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex justify-center">
                                                            {status.mcq ? (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                                                    <BrainCircuit className="w-3 h-3 mr-1" /> Ready
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                                                    Pending
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex justify-center">
                                                            {status.flashcards ? (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                                                                    <CheckCircle className="w-3 h-3 mr-1" /> Ready
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                                                                    Pending
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                                No chapters found matching "{searchQuery}"
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
                            <p>Please select a subject and book to view resources.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
