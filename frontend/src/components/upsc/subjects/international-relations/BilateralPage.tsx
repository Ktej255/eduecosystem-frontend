"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Handshake, BookOpen } from "lucide-react";
import Link from 'next/link';
import { BILATERAL_CONTENT } from './data/bilateral-content';
import ReactMarkdown from 'react-markdown';

export default function BilateralPage() {
    return (
        <div className="min-h-screen bg-indigo-50 dark:bg-black">
            {/* Header */}
            <div className="bg-card dark:bg-[#111] border-b border-indigo-100 dark:border-indigo-900 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/upsc/international-relations">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
                                <Handshake className="h-5 w-5 text-emerald-600" />
                                {BILATERAL_CONTENT.title}
                            </h1>
                            <p className="text-xs text-indigo-500 dark:text-indigo-400">{BILATERAL_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Navigation Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <Card className="sticky top-24 border-indigo-100 dark:border-indigo-900">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-wider text-indigo-500">Partner Countries</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 pt-0">
                            {BILATERAL_CONTENT.sections.map(sec => (
                                <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                                    {sec.title}
                                </a>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {BILATERAL_CONTENT.sections.map(sec => (
                        <section key={sec.id} id={sec.id} className="scroll-mt-24">
                            <Card className="overflow-hidden border-t-4 border-t-emerald-500 border-x-0 border-b-0 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="bg-indigo-50 dark:bg-indigo-900/10 pb-3">
                                    <CardTitle className="flex items-center gap-2 text-lg text-indigo-900 dark:text-indigo-100">
                                        <BookOpen className="h-5 w-5 text-emerald-500" />
                                        {sec.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 prose dark:prose-invert max-w-none text-muted-foreground">
                                    <ReactMarkdown>{sec.content}</ReactMarkdown>
                                </CardContent>
                            </Card>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
