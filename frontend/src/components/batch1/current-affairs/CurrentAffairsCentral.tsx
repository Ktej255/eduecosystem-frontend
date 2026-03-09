"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Filter, Search, Calendar, Tag, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CURRENT_AFFAIRS_DATA, SUBJECT_FILTERS, MONTH_FILTERS, CurrentAffairItem } from './current-affairs-data';
import { motion } from 'framer-motion';

import { MODERN_HISTORY_CHAPTERS } from '../history/data/modern/history-chapters';
import { ANCIENT_HISTORY_CHAPTERS } from '../history/data/ancient/history-chapters';

export default function CurrentAffairsCentral() {
    return (
        <React.Suspense fallback={<div className="p-8 text-center">Loading Current Affairs...</div>}>
            <CurrentAffairsCentralContent />
        </React.Suspense>
    );
}

function CurrentAffairsCentralContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get initial query params
    const initialSubject = searchParams.get('subject') || 'All';
    const initialSource = searchParams.get('source'); // e.g., 'history_hub', 'polity_chapter_5'
    const initialSection = searchParams.get('section'); // e.g., 'ancient', 'modern'
    const initialChapter = searchParams.get('chapter'); // Optional initial chapter filter

    const [selectedSubject, setSelectedSubject] = useState(initialSubject);
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [selectedChapter, setSelectedChapter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<CurrentAffairItem[]>(CURRENT_AFFAIRS_DATA);

    // Sync state with URL params on mount
    useEffect(() => {
        if (initialChapter) {
            setSelectedChapter(initialChapter);
        }
    }, [initialChapter]);

    useEffect(() => {
        let data = CURRENT_AFFAIRS_DATA;

        if (selectedSubject !== 'All') {
            data = data.filter(item => item.subject === selectedSubject);
        }

        if (selectedMonth !== 'All') {
            data = data.filter(item => item.month === selectedMonth);
        }

        if (selectedChapter !== 'All') {
            const chNum = parseInt(selectedChapter);
            if (!isNaN(chNum)) {
                data = data.filter(item => item.chapter === chNum);
            }
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            data = data.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                item.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        setFilteredData(data);
    }, [selectedSubject, selectedMonth, selectedChapter, searchQuery]);

    const handleBack = () => {
        // Intelligent Back Navigation
        if (initialSource === 'history_hub') {
            router.push('/student/batch1/history'); // Or whatever the history hub path is
        } else if (initialSource === 'polity_dashboard') {
            router.push('/student/batch1/polity');
        } else {
            router.back();
        }
    };

    const handleReadArticle = (item: CurrentAffairItem) => {
        // Navigate to related chapter MCQs or Detail page
        if (item.chapter && item.subject === 'History') {
            router.push(`/student/batch1/history/mcq?chapterId=${item.chapter}&level=3`);
        } else {
            // For now, maybe just show a toast or expand (placeholder)
            // router.push(`/student/batch1/current-affairs/${item.id}`);
        }
    };

    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case 'History': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'Polity': return 'bg-rose-100 text-rose-800 border-rose-200';
            case 'Economy': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'Environment': return 'bg-green-100 text-green-800 border-green-200';
            case 'Science': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-muted text-foreground border-border';
        }
    };

    // Generate Chapter List based on Subject
    // Generate Chapter List based on Subject & Section
    const getChapterOptions = () => {
        if (selectedSubject === 'History' || selectedSubject === 'All') {
            if (initialSection === 'ancient') return ANCIENT_HISTORY_CHAPTERS;
            return MODERN_HISTORY_CHAPTERS; // Default
        }
        return [];
    };

    // Helper to get chapter title dynamically based on section
    const getChapterTitle = (chId: string | number) => {
        const id = typeof chId === 'string' ? parseInt(chId) : chId;
        const opts = getChapterOptions();
        const ch = opts.find(c => c.id === id);
        return ch ? ch.title : `Chapter ${id}`;
    };

    return (
        <div className="min-h-screen bg-muted p-4 md:p-8 font-sans">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-muted-foreground" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to {selectedSubject !== 'All' ? selectedSubject : 'Dashboard'}
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-foreground tracking-tight">Current Affairs Hub</h1>
                        <p className="text-muted-foreground mt-1">Stay updated with exam-relevant news and analysis.</p>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="max-w-7xl mx-auto bg-card p-4 rounded-2xl shadow-sm border border-border mb-8 sticky top-4 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search topics, headlines..."
                            className="pl-10 bg-muted border-border"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Select value={selectedSubject} onValueChange={(val) => { setSelectedSubject(val); setSelectedChapter('All'); }}>
                        <SelectTrigger className="w-full md:w-[150px]">
                            <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Subjects</SelectItem>
                            {SUBJECT_FILTERS.map(subject => (
                                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                        <SelectTrigger className="w-full md:min-w-[200px]">
                            <SelectValue>
                                {selectedChapter === 'All'
                                    ? "All Chapters"
                                    : getChapterTitle(selectedChapter).substring(0, 25) + "..."}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            <SelectItem value="All">All Chapters</SelectItem>
                            {getChapterOptions().map(ch => (
                                <SelectItem key={ch.id} value={ch.id.toString()}>
                                    <span className="font-mono text-xs text-muted-foreground mr-2">#{ch.id}</span>
                                    {ch.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-full md:w-[150px]">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Months</SelectItem>
                            {MONTH_FILTERS.map(month => (
                                <SelectItem key={month} value={month}>{month}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant="outline" className={`${getSubjectColor(item.subject)} border`}>
                                        {item.subject}
                                    </Badge>
                                    <span className="text-xs font-semibold text-muted-foreground flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                    {item.chapter && (
                                        <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-100 font-normal">
                                            {getChapterTitle(item.chapter)}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                            <div className="p-4 bg-muted border-t border-slate-100 flex justify-end">
                                {item.chapter && item.subject === 'History' ? (
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-slate-900 hover:bg-slate-800 text-white text-xs"
                                        onClick={() => handleReadArticle(item)}
                                    >
                                        <BookOpen className="w-3 h-3 mr-2" />
                                        Attempt in L3 Drill
                                    </Button>
                                ) : item.related_topic_id && item.subject === 'Geography' ? (
                                    <Button
                                        variant="default"
                                        size="sm"
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs whitespace-nowrap"
                                        onClick={() => router.push(`/student/batch1/geography?view=lesson&topicId=${item.related_topic_id}`)}
                                    >
                                        <BookOpen className="w-3 h-3 mr-2" />
                                        Revise This Concept →
                                    </Button>
                                ) : (
                                    <Button variant="ghost" disabled size="sm" className="text-xs text-muted-foreground whitespace-nowrap">
                                        No Link Available
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-muted-foreground">
                        <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-20" />
                        <p>No current affairs found matching your filters.</p>
                        <Button variant="link" onClick={() => { setSelectedSubject('All'); setSelectedMonth('All'); setSelectedChapter('All'); setSearchQuery(''); }}>
                            Clear Selection
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
