"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
    const [selectedBook, setSelectedBook] = useState('laxmikanth');

    const activeBook = UPSC_CATALOG
        .flatMap(s => s.books)
        .find(b => b.id === selectedBook);

    const chapters = getBookChapters(selectedBook);

    // Filter logic
    const filteredChapters = chapters.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.id.toString().includes(searchQuery)
    );

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                        <FolderOpen className="w-8 h-8 text-orange-500" />
                        UPSC Resources
                    </h1>
                    <p className="text-gray-500 mt-2">View status of PDFs, MCQs, and Flashcards for all chapters.</p>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Search chapters..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                    />
                </div>
            </div>

            {/* Book Tabs */}
            <Tabs value={selectedBook} onValueChange={setSelectedBook} className="w-full">
                <TabsList className="mb-6 flex flex-wrap h-auto gap-2 bg-transparent p-0">
                    <TabsTrigger value="laxmikanth" className="border border-gray-200 dark:border-gray-800 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                        Laxmikanth
                    </TabsTrigger>
                    <TabsTrigger value="dd-basu" className="border border-gray-200 dark:border-gray-800 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                        DD Basu
                    </TabsTrigger>
                    <TabsTrigger value="ncert-polity-11" className="border border-gray-200 dark:border-gray-800 data-[state=active]:bg-green-600 data-[state=active]:text-white">
                        NCERT 11th
                    </TabsTrigger>
                    <TabsTrigger value="ncert-polity-12" className="border border-gray-200 dark:border-gray-800 data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                        NCERT 12th
                    </TabsTrigger>
                </TabsList>

                <TabsContent value={selectedBook}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>{activeBook?.title}</span>
                                <span className="text-sm font-normal text-gray-500">{filteredChapters.length} Chapters Found</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border border-gray-200 dark:border-gray-800 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-medium text-gray-500">#</th>
                                            <th className="px-4 py-3 text-left font-medium text-gray-500">Chapter Title</th>
                                            <th className="px-4 py-3 text-center font-medium text-gray-500">PDF Notes</th>
                                            <th className="px-4 py-3 text-center font-medium text-gray-500">MCQs</th>
                                            <th className="px-4 py-3 text-center font-medium text-gray-500">Flashcards</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                        {filteredChapters.map((chapter) => {
                                            const status = getResourceStatus(chapter);
                                            return (
                                                <tr key={chapter.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                    <td className="px-4 py-3 font-medium text-gray-500">{chapter.id}</td>
                                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{chapter.title}</td>
                                                    <td className="px-4 py-3">
                                                        <div className="flex justify-center">
                                                            {status.pdf ? (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                                                    <CheckCircle className="w-3 h-3 mr-1" /> Active
                                                                </span>
                                                            ) : (
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
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
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
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
                                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                                                                    Pending
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
