"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { History, Download, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BUILDS = [
    { id: 'v2.0.1', date: 'Feb 01, 2026', time: '14:30', status: 'Success', size: '45 MB', notes: 'UI Updates & Bug fixes' },
    { id: 'v2.0.0', date: 'Jan 28, 2026', time: '09:15', status: 'Success', size: '44 MB', notes: 'Major Release: 3D Labs' },
    { id: 'v1.9.8', date: 'Jan 20, 2026', time: '18:45', status: 'Failed', size: '-', notes: 'Gradle Build Error' },
    { id: 'v1.9.7', date: 'Jan 10, 2026', time: '11:20', status: 'Success', size: '42 MB', notes: 'Hotfix: Login loop' },
];

export default function BuildHistory() {
    return (
        <Card className="h-full border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                    <History className="w-5 h-5" />
                    Build Logs
                </CardTitle>
                <p className="text-xs text-neutral-500">History of APK/AAB generations.</p>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {BUILDS.map((build) => (
                        <div key={build.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700">
                            <div className="flex items-center gap-4 mb-3 md:mb-0">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${build.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-sm text-neutral-800 dark:text-neutral-200">{build.id}</h4>
                                        <Badge variant={build.status === 'Success' ? "default" : "destructive"} className="text-[10px]">
                                            {build.status}
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-neutral-500">{build.date} • {build.time}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-xs text-neutral-600 dark:text-neutral-400 hidden md:block">
                                    <span className="font-medium text-neutral-900 dark:text-neutral-200">{build.size}</span>
                                    <p>{build.notes}</p>
                                </div>
                                {build.status === 'Success' ? (
                                    <Button size="sm" variant="outline" className="gap-2">
                                        <Download className="w-4 h-4" /> Download APK
                                    </Button>
                                ) : (
                                    <Button size="sm" variant="ghost" className="gap-2 text-red-500 hover:text-red-700 hover:bg-red-50">
                                        <AlertTriangle className="w-4 h-4" /> View Logs
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
