"use client";

import React, { useState } from 'react';
import { MAINS_TEMPLATES, MainsTemplate } from '../data/mains-templates-data';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Copy, Sparkles, BookOpen, PenTool, CheckCircle2, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MainsTemplateViewer() {
    const [selectedTemplate, setSelectedTemplate] = useState<MainsTemplate>(MAINS_TEMPLATES[0]);
    const [copiedSection, setCopiedSection] = useState<string | null>(null);

    const handleCopy = (text: string, section: string) => {
        navigator.clipboard.writeText(text);
        setCopiedSection(section);
        setTimeout(() => setCopiedSection(null), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 font-['Calibri'] h-[calc(100vh-140px)]">

            {/* Sidebar List */}
            <div className="md:col-span-4 lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                <div className="p-4 bg-slate-50 border-b border-slate-100 pb-2">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2">
                        <BookOpen size={18} className="text-blue-600" /> High-Yield Topics
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Select a theme to view templates.</p>
                </div>
                <ScrollArea className="flex-1 p-2">
                    <div className="space-y-1">
                        {MAINS_TEMPLATES.map(template => (
                            <button
                                key={template.id}
                                onClick={() => setSelectedTemplate(template)}
                                className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${selectedTemplate.id === template.id
                                        ? 'bg-blue-50 border-blue-200 text-blue-700 font-bold shadow-sm'
                                        : 'hover:bg-slate-50 border-transparent text-slate-600 hover:text-slate-900'
                                    }`}
                            >
                                {template.topic}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-center text-slate-400">
                    {MAINS_TEMPLATES.length} Templates Available
                </div>
            </div>

            {/* Viewer Area */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4 overflow-y-auto pr-2 pb-20">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 rounded-2xl text-white shadow-lg">
                    <h2 className="text-2xl font-black mb-2">{selectedTemplate.topic}</h2>
                    <p className="text-blue-100 text-sm opacity-90">{selectedTemplate.description}</p>
                </div>

                {/* Keywords Bar */}
                <div className="flex flex-wrap gap-2">
                    {selectedTemplate.keywords.map((kw, i) => (
                        <Badge key={i} variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200">
                            <Sparkles size={10} className="mr-1" /> {kw}
                        </Badge>
                    ))}
                    {selectedTemplate.judgements.map((j, i) => (
                        <Badge key={i} variant="outline" className="text-slate-500 border-slate-300">
                            ⚖️ {j}
                        </Badge>
                    ))}
                    {selectedTemplate.articles.map((a, i) => (
                        <Badge key={i} variant="outline" className="text-slate-500 border-slate-300">
                            📜 {a}
                        </Badge>
                    ))}
                </div>

                {/* Introduction */}
                <SectionCard
                    title="Standard Introduction"
                    icon={<PenTool size={18} />}
                    color="blue"
                    content={selectedTemplate.intro}
                    onCopy={() => handleCopy(selectedTemplate.intro, 'intro')}
                    isCopied={copiedSection === 'intro'}
                />

                {/* Body Points */}
                <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider pl-2">Structuring Body Paragraphs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedTemplate.bodyPoints.map((point, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
                                <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <span className="bg-slate-100 text-slate-500 w-6 h-6 rounded-full flex items-center justify-center text-xs">{idx + 1}</span>
                                    {point.title}
                                </h5>
                                <p className="text-sm text-slate-600 leading-relaxed">{point.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <SectionCard
                    title="Standard Conclusion"
                    icon={<Quote size={18} />}
                    color="green"
                    content={selectedTemplate.conclusion}
                    onCopy={() => handleCopy(selectedTemplate.conclusion, 'conclusion')}
                    isCopied={copiedSection === 'conclusion'}
                />

                <div className="h-20 md:hidden"></div> {/* Mobile Spacer */}
            </div>
        </div>
    );
}

function SectionCard({ title, icon, color, content, onCopy, isCopied }: any) {
    const colorClasses = color === 'blue'
        ? { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-800', icon: 'text-blue-600' }
        : { bg: 'bg-green-50', border: 'border-green-100', text: 'text-green-800', icon: 'text-green-600' };

    return (
        <Card className={`border ${colorClasses.border} shadow-sm overflow-hidden`}>
            <div className={`px-4 py-3 ${colorClasses.bg} border-b ${colorClasses.border} flex justify-between items-center`}>
                <div className={`flex items-center gap-2 font-bold ${colorClasses.text}`}>
                    {icon} {title}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onCopy}
                    className={`h-8 px-2 ${isCopied ? 'text-green-600 bg-green-100' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    {isCopied ? <><CheckCircle2 size={14} className="mr-1" /> Copied</> : <><Copy size={14} className="mr-1" /> Copy</>}
                </Button>
            </div>
            <CardContent className="p-5">
                <p className="text-slate-700 leading-relaxed font-medium">
                    {content}
                </p>
            </CardContent>
        </Card>
    );
}
