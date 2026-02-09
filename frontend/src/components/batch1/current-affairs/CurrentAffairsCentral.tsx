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

export default function CurrentAffairsCentral() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get initial query params
    const initialSubject = searchParams.get('subject') || 'All';
    const initialSource = searchParams.get('source'); // e.g., 'history_hub', 'polity_chapter_5'

    const [selectedSubject, setSelectedSubject] = useState(initialSubject);
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<CurrentAffairItem[]>(CURRENT_AFFAIRS_DATA);

    useEffect(() => {
        let data = CURRENT_AFFAIRS_DATA;

        if (selectedSubject !== 'All') {
            data = data.filter(item => item.subject === selectedSubject);
        }

        if (selectedMonth !== 'All') {
            data = data.filter(item => item.month === selectedMonth);
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
    }, [selectedSubject, selectedMonth, searchQuery]);

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

    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case 'History': return 'bg-amber-100 text-amber-800 border-amber-200';
            case 'Polity': return 'bg-rose-100 text-rose-800 border-rose-200';
            case 'Economy': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
            case 'Environment': return 'bg-green-100 text-green-800 border-green-200';
            case 'Science': return 'bg-blue-100 text-blue-800 border-blue-200';
            default: return 'bg-slate-100 text-slate-800 border-slate-200';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent hover:text-slate-600" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to {selectedSubject !== 'All' ? selectedSubject : 'Dashboard'}
                </Button>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Current Affairs Hub</h1>
                        <p className="text-slate-500 mt-1">Stay updated with exam-relevant news and analysis.</p>
                    </div>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="max-w-7xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 sticky top-4 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search topics, headlines..."
                            className="pl-10 bg-slate-50 border-slate-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                            {SUBJECT_FILTERS.map(subject => (
                                <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
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
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="p-6 flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant="outline" className={`${getSubjectColor(item.subject)} border`}>
                                        {item.subject}
                                    </Badge>
                                    <span className="text-xs font-semibold text-slate-400 flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                                <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 text-sm h-8">
                                    Read Full Article <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                                </Button>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-slate-500">
                        <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-20" />
                        <p>No current affairs found matching your filters.</p>
                        <Button variant="link" onClick={() => { setSelectedSubject('All'); setSelectedMonth('All'); setSearchQuery(''); }}>
                            Clear Selection
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
