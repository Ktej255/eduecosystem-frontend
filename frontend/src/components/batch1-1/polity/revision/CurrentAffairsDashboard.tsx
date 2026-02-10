"use client";

import React, { useState, useMemo } from 'react';
import { MAJOR_CURRENT_AFFAIRS, CurrentAffairItem } from '../data/MajorCurrentAffairsRegistry';
import { TOPIC_TITLES } from '../data/polity-types-95';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Calendar, BookOpen, ExternalLink, Flame, BarChart2, Clock } from 'lucide-react';

export default function CurrentAffairsDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterImportance, setFilterImportance] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');
    const [filterYear, setFilterYear] = useState<'All' | string>('All');

    // Extract unique years from data
    const years = useMemo(() => {
        const yearSet = new Set(MAJOR_CURRENT_AFFAIRS.map(item => item.date.substring(0, 4)));
        return Array.from(yearSet).sort().reverse();
    }, []);

    const filteredAffairs = useMemo(() => {
        return MAJOR_CURRENT_AFFAIRS.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                item.summary.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterImportance === 'All' || item.importance === filterImportance;
            const matchesYear = filterYear === 'All' || item.date.startsWith(filterYear);
            return matchesSearch && matchesFilter && matchesYear;
        });
    }, [searchTerm, filterImportance, filterYear]);

    const getTopicName = (id: number) => {
        const topic = TOPIC_TITLES.find(t => t.id === id);
        return topic ? topic.title : `Topic ${id}`;
    };

    // Stats
    const highCount = MAJOR_CURRENT_AFFAIRS.filter(i => i.importance === 'High').length;
    const mediumCount = MAJOR_CURRENT_AFFAIRS.filter(i => i.importance === 'Medium').length;

    return (
        <div className="space-y-6 font-sans">
            {/* Stats Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <BarChart2 className="w-4 h-4" /> Total Updates
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{MAJOR_CURRENT_AFFAIRS.length}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-red-500 mb-1">
                        <Flame className="w-4 h-4" /> High Priority
                    </div>
                    <div className="text-2xl font-bold text-red-600">{highCount}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-amber-500 mb-1">
                        <Clock className="w-4 h-4" /> Medium
                    </div>
                    <div className="text-2xl font-bold text-amber-600">{mediumCount}</div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-blue-500 mb-1">
                        <Filter className="w-4 h-4" /> Showing
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{filteredAffairs.length}</div>
                </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search updates, tags, topics..."
                        className="pl-10 bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    {/* Year Filter */}
                    <select
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="All">All Years</option>
                        {years.map(y => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>

                    {/* Importance Filter */}
                    {(['All', 'High', 'Medium'] as const).map((imp) => (
                        <Button
                            key={imp}
                            variant={filterImportance === imp ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setFilterImportance(imp)}
                            className={filterImportance === imp ? 'bg-amber-600 hover:bg-amber-700' : ''}
                        >
                            {imp === 'High' && <Flame className="w-3 h-3 mr-1" />}
                            {imp} Priority
                        </Button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAffairs.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-all border-l-4 border-l-amber-500 overflow-hidden group">
                        <CardHeader className="pb-3 bg-slate-50 dark:bg-slate-900">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <Badge variant="outline" className="mb-2 bg-white dark:bg-slate-800 text-xs font-mono">
                                        {item.date}
                                    </Badge>
                                    <h3 className="font-bold text-lg leading-tight group-hover:text-amber-700 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                                {item.importance === 'High' && (
                                    <Badge className="bg-red-100 text-red-700 border-red-200 shrink-0">
                                        <Flame size={12} fill="currentColor" className="mr-1" />
                                        Hot
                                    </Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="pt-4 space-y-4">
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                {item.summary}
                            </p>

                            <div className="space-y-2">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Linked Topics — NOW SHOWING NAMES */}
                                <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1 mt-1">Linked Topics:</span>
                                    {item.topicIds.map(tid => (
                                        <Badge key={tid} variant="secondary" className="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 cursor-pointer">
                                            {getTopicName(tid)}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs text-slate-400 mt-2">
                                <span className="flex items-center gap-1">
                                    <BookOpen size={12} /> {item.source}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {filteredAffairs.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                    <p>No current affairs found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
