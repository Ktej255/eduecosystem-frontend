"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, ArrowRight } from 'lucide-react';

interface Amendment {
    number: string;
    year: string;
    description: string;
    significance: 'High' | 'Medium';
}

const AMENDMENTS: Amendment[] = [
    { number: '1st', year: '1951', description: 'Added 9th Schedule to protect land reforms.', significance: 'High' },
    { number: '7th', year: '1956', description: 'Reorganization of States (14 States, 6 UTs).', significance: 'High' },
    { number: '24th', year: '1971', description: 'Parliament can amend any part of Constitution including FRs.', significance: 'Medium' },
    { number: '42nd', year: '1976', description: 'MINI CONSTITUTION. Added Socialist, Secular, Integrity. Fundamental Duties.', significance: 'High' },
    { number: '44th', year: '1978', description: 'Restored democracy. Removed Right to Property from FRs.', significance: 'High' },
    { number: '52nd', year: '1985', description: 'Anti-Defection Law (10th Schedule).', significance: 'High' },
    { number: '61st', year: '1989', description: 'Reduced voting age from 21 to 18.', significance: 'High' },
    { number: '69th', year: '1991', description: 'Special Status to Delhi (NCR).', significance: 'Medium' },
    { number: '73rd', year: '1992', description: 'Panchayati Raj Institutions (11th Schedule).', significance: 'High' },
    { number: '74th', year: '1992', description: 'Municipalities (12th Schedule).', significance: 'High' },
    { number: '86th', year: '2002', description: 'Right to Education (Art 21A).', significance: 'High' },
    { number: '91st', year: '2003', description: 'Limited Council of Ministers to 15%.', significance: 'Medium' },
    { number: '97th', year: '2011', description: 'Co-operative Societies (Part IX-B).', significance: 'Medium' },
    { number: '99th', year: '2014', description: 'NJAC (Struck down by SC).', significance: 'High' },
    { number: '101st', year: '2016', description: 'GST.', significance: 'High' },
    { number: '103rd', year: '2019', description: '10% EWS Quota.', significance: 'High' },
    { number: '106th', year: '2023', description: 'Nari Shakti Vandan (Women Reservation).', significance: 'High' },
];

export default function AmendmentTimeline() {
    return (
        <Card className="w-full bg-[#fdfbf7] border-4 border-orange-900 shadow-xl overflow-hidden font-['Kalam']">
            <CardHeader className="bg-orange-900/5 border-b-2 border-orange-900/10">
                <CardTitle className="text-2xl font-black text-orange-900 flex items-center gap-2">
                    <History className="h-6 w-6" />
                    Evolution of the Constitution
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ScrollArea className="h-[600px] p-6">
                    <div className="relative border-l-4 border-orange-200 ml-4 space-y-12">
                        {AMENDMENTS.map((amend, index) => (
                            <div key={index} className="relative pl-8">
                                {/* Dot */}
                                <div className={`
                                    absolute -left-[14px] top-2 h-6 w-6 rounded-full border-4 border-[#fdfbf7] 
                                    ${amend.significance === 'High' ? 'bg-orange-600' : 'bg-amber-400'}
                                `}></div>

                                <div className="bg-card p-6 rounded-2xl border-2 border-orange-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl font-black text-orange-900">{amend.number}</span>
                                            <div className="px-3 py-1 bg-orange-100 text-orange-800 rounded-lg text-sm font-bold">
                                                {amend.year}
                                            </div>
                                        </div>
                                        {amend.significance === 'High' && (
                                            <Badge variant="outline" className="border-red-200 text-red-600 font-bold">
                                                High Yield
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground font-serif leading-relaxed text-lg">
                                        {amend.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-orange-50 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-bold text-orange-400 flex items-center gap-1">
                                            Read More <ArrowRight size={12} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
