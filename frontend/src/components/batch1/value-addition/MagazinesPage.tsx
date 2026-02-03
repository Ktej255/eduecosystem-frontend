"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import Link from 'next/link';

export default function MagazinesPage() {
    const magazines = [
        { title: "Yojana: Focus on Rural Tech", month: "January 2026", type: "Yojana" },
        { title: "Kurukshetra: Sustainable Agriculture", month: "January 2026", type: "Kurukshetra" },
        { title: "Yojana: AI in Governance", month: "December 2025", type: "Yojana" },
    ];

    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <Link href="/student/batch1/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="h-6 w-6 text-yellow-600" />
                        Yojana & Kurukshetra
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Monthly gist of key development journals.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {magazines.map((mag, idx) => (
                    <Card key={idx} className="group hover:shadow-lg transition-all">
                        <CardContent className="p-0">
                            <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase tracking-wider">
                                COVER
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded ${mag.type === 'Yojana' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                                        {mag.type}
                                    </span>
                                    <span className="text-xs text-gray-500">{mag.month}</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-800 leading-tight mb-4">{mag.title}</h3>
                                <Button className="w-full gap-2" variant="outline">
                                    <Download className="h-4 w-4" /> Download Gist
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
