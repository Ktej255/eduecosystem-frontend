"use client";

import React, { useState, useMemo } from 'react';
import { PYQ_DATA } from '../data/pyq-data';
import { PYQ_YEARS, PYQItem } from '../data/pyq-types';
import { getTopicById } from '@/components/batch1/polity/data/polity-registry';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, BookOpen, CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PYQBank() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState<string>('all');
    const [selectedTopic, setSelectedTopic] = useState<string>('all');
    const [examType, setExamType] = useState<'PRELIMS' | 'MAINS'>('PRELIMS');

    // Filter Logic
    const filteredQuestions = useMemo(() => {
        return PYQ_DATA.filter(q => {
            const matchesSearch = q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.explanation.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesYear = selectedYear === 'all' || q.year.toString() === selectedYear;
            const matchesTopic = selectedTopic === 'all' || q.topicIds.includes(parseInt(selectedTopic));
            const matchesType = q.exam === examType;

            return matchesSearch && matchesYear && matchesTopic && matchesType;
        });
    }, [searchQuery, selectedYear, selectedTopic, examType]);

    // Get unique topics present in data for filter
    const availableTopics = useMemo(() => {
        const topicIds = new Set<number>();
        PYQ_DATA.forEach(q => q.topicIds.forEach(id => topicIds.add(id)));
        return Array.from(topicIds).map(id => {
            const topic = getTopicById(id);
            return { id, title: topic?.title || `Topic ${id}` };
        }).sort((a, b) => a.id - b.id);
    }, []);

    return (
        <div className="max-w-6xl mx-auto space-y-6 font-['Calibri']">
            {/* Header & Controls */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-foreground flex items-center gap-2">
                            <BookOpen className="text-blue-600" />
                            UPSC PYQ Bank
                        </h2>
                        <p className="text-muted-foreground text-sm">Validating your logic against the gold standard.</p>
                    </div>
                    <div className="flex bg-muted p-1 rounded-lg">
                        <button
                            onClick={() => setExamType('PRELIMS')}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${examType === 'PRELIMS' ? 'bg-card shadow text-blue-600' : 'text-muted-foreground hover:text-muted-foreground'}`}
                        >
                            Prelims
                        </button>
                        <button
                            onClick={() => setExamType('MAINS')}
                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${examType === 'MAINS' ? 'bg-card shadow text-blue-600' : 'text-muted-foreground hover:text-muted-foreground'}`}
                        >
                            Mains
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                    {/* Search */}
                    <div className="relative md:col-span-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input
                            placeholder="Search keywords (e.g., 'Privacy', 'Preamble')"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 bg-muted border-border focus:ring-blue-500"
                        />
                    </div>

                    {/* Year Filter */}
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger className="bg-muted border-border">
                            <SelectValue placeholder="All Years" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Years</SelectItem>
                            {PYQ_YEARS.map(year => (
                                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Topic Filter */}
                    <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                        <SelectTrigger className="bg-muted border-border">
                            <SelectValue placeholder="All Topics" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Topics</SelectItem>
                            {availableTopics.map(t => (
                                <SelectItem key={t.id} value={t.id.toString()}>{t.id}. {t.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Results */}
            <div className="grid gap-4">
                {filteredQuestions.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground bg-card rounded-2xl border border-dashed border-border">
                        <Search className="mx-auto mb-2 opacity-50" size={40} />
                        <p>No questions found matching your filters.</p>
                    </div>
                ) : (
                    filteredQuestions.map(q => (
                        <PYQCard key={q.id} question={q} />
                    ))
                )}
            </div>
        </div>
    );
}

function PYQCard({ question }: { question: PYQItem }) {
    const [isRevealed, setIsRevealed] = useState(false);
    const [userSelection, setUserSelection] = useState<string | null>(null);

    return (
        <Card className="border border-border hover:border-blue-300 transition-colors shadow-sm overflow-hidden bg-card">
            <CardContent className="p-0">
                {/* Question Header */}
                <div className="p-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex justify-between items-start gap-4">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-bold">
                                {question.year}
                            </Badge>
                            <Badge variant="outline" className="text-muted-foreground border-border">
                                {question.difficulty}
                            </Badge>
                            {question.tags.map(tag => (
                                <span key={tag} className="text-xs text-muted-foreground font-medium px-1.5 py-0.5 bg-muted rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-snug">
                            {question.question}
                        </h3>
                    </div>
                </div>

                {/* Options Area */}
                <div className="p-5">
                    {question.exam === 'PRELIMS' && question.options ? (
                        <div className="space-y-2">
                            {question.options.map((opt) => {
                                const isSelected = userSelection === opt.label;
                                const isCorrect = opt.label === question.answer;

                                let stateStyle = "border-border hover:bg-muted bg-card";
                                if (isRevealed) {
                                    if (isCorrect) stateStyle = "border-green-500 bg-green-50 text-green-900";
                                    else if (isSelected && !isCorrect) stateStyle = "border-red-500 bg-red-50 text-red-900 opacity-70";
                                    else stateStyle = "border-slate-100 opacity-50";
                                } else if (isSelected) {
                                    stateStyle = "border-blue-500 bg-blue-50 ring-1 ring-blue-500";
                                }

                                return (
                                    <button
                                        key={opt.label}
                                        disabled={isRevealed}
                                        onClick={() => setUserSelection(opt.label)}
                                        className={`w-full text-left p-3 rounded-xl border-2 transition-all flex items-start gap-3 ${stateStyle}`}
                                    >
                                        <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${isRevealed && isCorrect ? 'bg-green-600 border-green-600 text-white' :
                                                isRevealed && isSelected ? 'bg-red-500 border-red-500 text-white' :
                                                    isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'bg-muted text-muted-foreground border-border'
                                            }`}>
                                            {opt.label}
                                        </span>
                                        <span className="text-sm md:text-base font-medium">{opt.text}</span>
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="p-4 bg-muted rounded-lg text-muted-foreground italic text-sm">
                            This is a Mains question. Review the answer key below.
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="px-5 pb-5 flex flex-col gap-4">
                    {!isRevealed ? (
                        <Button
                            onClick={() => setIsRevealed(true)}
                            variant="outline"
                            className="self-start text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700 font-bold"
                            disabled={question.exam === 'PRELIMS' && !userSelection}
                        >
                            {question.exam === 'PRELIMS' ? 'Submit Answer' : 'View Model Key'} <ChevronDown size={16} className="ml-2" />
                        </Button>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-blue-50 rounded-xl p-5 border border-blue-100"
                        >
                            <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold text-sm uppercase tracking-wide">
                                <HelpCircle size={16} /> Explanation
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                {question.explanation}
                            </p>

                            {/* Topic Links */}
                            <div className="mt-4 pt-4 border-t border-blue-200 flex flex-wrap gap-2">
                                <span className="text-xs text-blue-500 font-bold self-center mr-1">Read more in:</span>
                                {question.topicIds.map(tid => {
                                    const topic = getTopicById(tid);
                                    return (
                                        <a
                                            key={tid}
                                            href={`/student/batch1/polity/topic/${tid}`}
                                            className="px-2 py-1 bg-card hover:bg-card/80 text-blue-700 text-xs rounded border border-blue-200 font-medium transition-colors"
                                        >
                                            {topic?.title || `Topic ${tid}`} ➜
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
