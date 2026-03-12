"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Target, Brain, Award, Trophy, Play } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QuestionBankItem, QuestionBankService } from './QuestionBankService';
import { useRouter } from 'next/navigation';

export default function QuestionBankDashboard() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [selectedSection, setSelectedSection] = useState<string>('all');
    const [questions, setQuestions] = useState<QuestionBankItem[]>([]);
    const [stats, setStats] = useState<{
        total: number;
        modern: number;
        medieval: number;
        ancient: number;
        level1: number;
        level2: number;
        level3: number;
    }>({ total: 0, modern: 0, medieval: 0, ancient: 0, level1: 0, level2: 0, level3: 0 });

    useEffect(() => {
        // Load initial data
        const allQ = QuestionBankService.getAllQuestions();
        setQuestions(allQ);
        setStats(QuestionBankService.getStats());
    }, []);

    const [displayLimit, setDisplayLimit] = useState(200);

    // Filter Logic
    const filteredQuestions = questions.filter(q => {
        const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (q.explanation && q.explanation.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesLevel = selectedLevel === 'all' || q.level.toString() === selectedLevel;
        const matchesSection = selectedSection === 'all' || q.section === selectedSection;

        return matchesSearch && matchesLevel && matchesSection;
    });

    const categories = [
        { id: 'modern', name: 'Modern India', count: stats.modern || 0, color: 'text-blue-600', bg: 'bg-blue-100' },
        { id: 'medieval', name: 'Medieval India', count: stats.medieval || 0, color: 'text-purple-600', bg: 'bg-purple-100' },
        { id: 'ancient', name: 'Ancient India', count: stats.ancient || 0, color: 'text-amber-600', bg: 'bg-amber-100' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-xl">
                <div className="absolute top-0 right-0 p-32 bg-card/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-card/10 rounded-lg backdrop-blur-sm">
                            <Brain className="w-6 h-6 text-emerald-400" />
                        </div>
                        <Badge variant="outline" className="text-emerald-400 border-emerald-400/30">
                            Central Repository
                        </Badge>
                    </div>
                    <h2 className="text-3xl font-black mb-2 tracking-tight">The Question Bank</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A comprehensive repository of {stats.total} high-yield MCQs across all history eras.
                        Master the content through targeted drill sessions.
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="border-l-4 border-l-emerald-500">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Questions</p>
                                <h3 className="text-3xl font-black text-foreground mt-1">{stats.total}</h3>
                            </div>
                            <Trophy className="w-5 h-5 text-emerald-500 opacity-80" />
                        </div>
                    </CardContent>
                </Card>
                {categories.map(cat => (
                    <Card key={cat.id} className={`border-l-4 ${cat.color.replace('text', 'border')}`}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{cat.name}</p>
                                    <h3 className="text-3xl font-black text-foreground mt-1">{cat.count}</h3>
                                </div>
                                <div className={`p-1.5 rounded-md ${cat.bg}`}>
                                    <BookOpen className={`w-4 h-4 ${cat.color}`} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 bg-card p-4 rounded-xl border border-border shadow-sm sticky top-4 z-20">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search questions by keyword..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setDisplayLimit(200); // Reset limit on search
                        }}
                    />
                </div>
                <div className="flex gap-2">
                    <Select value={selectedSection} onValueChange={(val) => {
                        setSelectedSection(val);
                        setDisplayLimit(200);
                    }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Eras" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Eras</SelectItem>
                            <SelectItem value="ancient">Ancient India</SelectItem>
                            <SelectItem value="medieval">Medieval India</SelectItem>
                            <SelectItem value="modern">Modern India</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={selectedLevel} onValueChange={(val) => {
                        setSelectedLevel(val);
                        setDisplayLimit(200);
                    }}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Levels" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Levels</SelectItem>
                            <SelectItem value="1">Level 1 (Foundation)</SelectItem>
                            <SelectItem value="2">Level 2 (Conceptual)</SelectItem>
                            <SelectItem value="3">Level 3 (Applied)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.slice(0, displayLimit).map((q, idx) => (
                        <Card key={`${q.chapterId}-${q.id}-${idx}`} className="group hover:border-indigo-200 dark:hover:border-indigo-800 transition-all cursor-pointer hover:shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start gap-2">
                                    <Badge variant="secondary" className={`${q.level === 1 ? 'bg-green-100 text-green-700' :
                                        q.level === 2 ? 'bg-amber-100 text-amber-700' :
                                            'bg-red-100 text-red-700'
                                        }`}>
                                        Level {q.level}
                                    </Badge>
                                </div>
                                <CardTitle className="text-sm font-medium leading-relaxed mt-2 line-clamp-3">
                                    {q.question}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between text-xs text-muted-foreground dark:text-muted-foreground mt-2">
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" />
                                        <span className="capitalize">{q.section}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Target className="w-3 h-3" />
                                        <span>Ch {q.chapterId}</span>
                                    </div>
                                </div>
                                <Button
                                    className="w-full mt-4 bg-muted hover:bg-indigo-50 text-muted-foreground hover:text-indigo-600 border border-border hover:border-indigo-200 dark:hover:bg-indigo-900/20"
                                    variant="outline"
                                    onClick={() => router.push(`/student/upsc/history/mcq?chapter=${q.chapterId}&section=${q.section}`)}
                                >
                                    <Play className="w-3 h-3 mr-2" />
                                    Launch Chapter
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        <Brain className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>No questions found matching your filters.</p>
                    </div>
                )}
            </div>

            {filteredQuestions.length > displayLimit && (
                <div className="text-center pt-8 pb-12">
                    <p className="text-sm text-muted-foreground italic mb-4">Showing {displayLimit} of {filteredQuestions.length} matching questions.</p>
                    <Button
                        onClick={() => setDisplayLimit(prev => prev + 200)}
                        variant="default"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8"
                    >
                        Load More Questions
                    </Button>
                </div>
            )}
        </div>
    );
}
