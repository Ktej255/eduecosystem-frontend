"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Lock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ReportsPage() {
    // Mock Data - In real app, fetch from /api/v1/graphotherapy/reports
    const reports = [
        {
            id: "rep_1",
            title: "Free Personality Snapshot",
            type: "Basic",
            date: "2026-01-10",
            status: "Available",
            score: 85
        },
        {
            id: "rep_2",
            title: "Premium Personality Blueprint",
            type: "Premium",
            date: "2026-01-12",
            status: "Available",
            score: 92
        },
        {
            id: "rep_3",
            title: "Advanced Health & Vitality Audit",
            type: "Level 3",
            date: "-",
            status: "Locked",
            score: 0
        }
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">my Reports</h1>
                <p className="text-gray-500 mt-2">Access your deep psycho-analysis documents.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {reports.map((report) => (
                    <Card key={report.id} className={`flex items-center p-4 transition-all hover:bg-slate-50 ${report.status === "Locked" ? "opacity-60 border-dashed" : ""}`}>
                        <div className="flex-shrink-0 mr-6">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${report.type === "Level 3" ? "bg-red-100 text-red-600" :
                                    report.type === "Premium" ? "bg-purple-100 text-purple-600" :
                                        "bg-blue-100 text-blue-600"
                                }`}>
                                {report.status === "Locked" ? <Lock className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-lg text-gray-900">{report.title}</h3>
                                {report.type === "Premium" && <Badge variant="secondary" className="bg-purple-100 text-purple-700">Premium</Badge>}
                                {report.type === "Level 3" && <Badge variant="outline" className="border-red-200 text-red-700">Advanced</Badge>}
                            </div>
                            <p className="text-sm text-gray-500">Generated: {report.date}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            {report.status === "Locked" ? (
                                <Button disabled variant="outline">Unlock Level 3</Button>
                            ) : (
                                <>
                                    <Button variant="ghost" size="sm" className="hidden md:flex">
                                        <ExternalLink className="w-4 h-4 mr-2" /> View Web
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4 mr-2" /> PDF
                                    </Button>
                                </>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
