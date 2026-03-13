"use client";

import React, { useState } from 'react';
import { 
    LayoutDashboard, 
    Database, 
    UploadCloud, 
    Search, 
    Filter, 
    Plus, 
    Sparkles,
    BookOpen,
    HelpCircle,
    ChevronRight,
    ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// New Bulk Upload Components
import BulkQuestionUploader from '@/components/lms/BulkQuestionUploader';
import QuestionStagingTable from '@/components/lms/QuestionStagingTable';
import { useQuestionStore } from '@/store/useQuestionStore';

export default function TeacherQuestionsPage() {
    const [view, setView] = useState<'list' | 'bulk'>('list');
    const { stagedQuestions, clearStagedQuestions } = useQuestionStore();

    const handleBack = () => {
        clearStagedQuestions();
        setView('list');
    };

    return (
        <div className="p-6 space-y-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase tracking-wider mb-1">
                        <BookOpen className="h-4 w-4" />
                        LMS Question Bank
                    </div>
                    <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
                        Question Repository
                    </h1>
                    <p className="text-muted-foreground mt-1 max-w-md">
                        Manage your MCQ pools, evaluate student responses, and use AI to auto-tag your UPSC syllabus.
                    </p>
                </div>
                
                <div className="flex items-center gap-3">
                    {view === 'list' ? (
                        <>
                            <Button 
                                variant="outline" 
                                className="border-emerald-500/30 text-emerald-600 hover:bg-emerald-50"
                                onClick={() => setView('bulk')}
                            >
                                <UploadCloud className="mr-2 h-4 w-4" />
                                Bulk MCQ Engine
                            </Button>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none">
                                <Plus className="mr-2 h-4 w-4" />
                                Single Question
                            </Button>
                        </>
                    ) : (
                        <Button variant="ghost" onClick={handleBack} className="hover:bg-slate-100">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Bank
                        </Button>
                    )}
                </div>
            </div>

            {view === 'list' ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="border-border shadow-sm">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-emerald-500" />
                                    Filter Repository
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-muted-foreground">Search</label>
                                    <div className="relative">
                                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Search questions..." className="pl-9 text-sm border-border" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-muted-foreground">Subject Tag</label>
                                    <div className="flex flex-wrap gap-2">
                                        {['Polity', 'History', 'Geography', 'Economy', 'Science'].map(tag => (
                                            <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-emerald-100 hover:text-emerald-700 transition-colors">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-muted-foreground">Difficulty</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        <Button variant="outline" size="sm" className="text-[10px] h-7 border-emerald-100 text-emerald-700 bg-emerald-50/30">Easy</Button>
                                        <Button variant="outline" size="sm" className="text-[10px] h-7 border-amber-100 text-amber-700 bg-amber-50/30">Medium</Button>
                                        <Button variant="outline" size="sm" className="text-[10px] h-7 border-red-100 text-red-700 bg-red-50/30">Hard</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white border-none shadow-lg">
                            <CardContent className="p-6">
                                <Sparkles className="h-8 w-8 mb-4 text-indigo-200" />
                                <h4 className="font-bold text-lg mb-2">10X Productivity</h4>
                                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                                    Stop adding questions manually. Our new Bulk MCQ Engine uses Gemini AI to automatically categorize and tag your content.
                                </p>
                                <Button 
                                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-md"
                                    onClick={() => setView('bulk')}
                                >
                                    Try Bulk Upload
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList className="bg-muted p-1 rounded-xl mb-6">
                                <TabsTrigger value="all" className="rounded-lg px-6">All Questions</TabsTrigger>
                                <TabsTrigger value="active" className="rounded-lg px-6">In Active Tests</TabsTrigger>
                                <TabsTrigger value="unused" className="rounded-lg px-6">Unused Pools</TabsTrigger>
                            </TabsList>

                            <TabsContent value="all" className="space-y-4">
                                {/* Empty State / Placeholder for Data Table */}
                                <div className="flex flex-col items-center justify-center py-20 bg-card rounded-2xl border border-dashed border-border text-center px-4">
                                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-full mb-6">
                                        <HelpCircle className="h-12 w-12 text-slate-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Your Question Bank is Empty</h3>
                                    <p className="text-muted-foreground max-w-sm mb-8">
                                        You haven't uploaded any questions yet. Use the Bulk MCQ Engine to populate your bank in seconds.
                                    </p>
                                    <Button 
                                        onClick={() => setView('bulk')}
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-200 dark:shadow-none px-8"
                                    >
                                        Start Bulk Upload <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            ) : (
                /* Bulk Upload View */
                <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-right-4 duration-500">
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-md">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                            <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-xl">
                                <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-foreground">Bulk MCQ Engine v2.0</h2>
                                <p className="text-muted-foreground">Upload CSV -> Preview -> AI Tagging -> Database</p>
                            </div>
                        </div>

                        {stagedQuestions.length === 0 ? (
                            <BulkQuestionUploader />
                        ) : (
                            <QuestionStagingTable />
                        )}
                    </div>
                    
                    {/* Integration with existing bank preview */}
                    {stagedQuestions.length > 0 && (
                        <div className="flex justify-center pb-12">
                            <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                                <X className="mr-2 h-4 w-4" /> Cancel Upload
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function X({ className }: { className?: string }) {
    return <XIcon className={className} />;
}

import { X as XIcon } from 'lucide-react';
