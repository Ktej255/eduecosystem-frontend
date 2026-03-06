"use client";

import { useState } from "react";
import { GEOGRAPHY_SCHEDULE, GeographyDay } from "./data/geography-schedule-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, PlayCircle, Lock, CheckCircle2, MapPin, Layers } from "lucide-react";
import Link from "next/link";
import { GEOGRAPHY_SYLLABUS } from "./data/geography-syllabus-data";

export default function GeographySchedule() {
    const today = new Date();
    // For demo/dev purposes, let's assume current date logic or fixed start date
    // Or just list them all.

    // Module colors helper
    const getModuleColor = (moduleId: string) => {
        const module = GEOGRAPHY_SYLLABUS.find(m => m.id === moduleId);
        return module?.color || "#555";
    };

    const getModuleTitle = (moduleId: string) => {
        const module = GEOGRAPHY_SYLLABUS.find(m => m.id === moduleId);
        return module?.title || "Geography Module";
    };

    // Group by Module
    const scheduleByModule: Record<string, GeographyDay[]> = {};
    const modules: string[] = [];

    GEOGRAPHY_SCHEDULE.forEach(day => {
        if (!scheduleByModule[day.moduleId]) {
            scheduleByModule[day.moduleId] = [];
            modules.push(day.moduleId);
        }
        scheduleByModule[day.moduleId].push(day);
    });

    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pb-20">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Geography 21-Day Schedule
                </h2>
                <p className="text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive coverage of Geomorphology, Climatology, Oceanography, Indian, and Human Geography.
                    Mar 6 - Mar 26.
                </p>
            </div>

            <div className="space-y-12">
                {modules.map(moduleId => (
                    <div key={moduleId} className="space-y-6">
                        {/* Module Header */}
                        <div className="flex items-center gap-3 border-b pb-2 sticky top-[4rem] bg-slate-50/95 dark:bg-black/95 z-30 backdrop-blur-sm pt-4">
                            <div
                                className="w-3 h-10 rounded-full"
                                style={{ backgroundColor: getModuleColor(moduleId) }}
                            />
                            <div>
                                <h3 className="text-xl font-bold text-foreground">
                                    {getModuleTitle(moduleId)}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {scheduleByModule[moduleId].length} Sessions
                                </p>
                            </div>
                        </div>

                        {/* Days Grid */}
                        <div className="grid gap-4">
                            {scheduleByModule[moduleId].map((day) => (
                                <Card key={day.day} className="group overflow-hidden border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
                                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: getModuleColor(moduleId) }} />
                                    <CardContent className="p-0 flex flex-col md:flex-row">
                                        {/* Date Box */}
                                        <div className="p-6 md:w-48 bg-muted/40 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border">
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                                                Day {day.day}
                                            </span>
                                            <span className="text-2xl font-bold text-foreground">
                                                {day.date.split(' ')[1]}
                                            </span>
                                            <span className="text-sm font-medium text-muted-foreground uppercase">
                                                {day.date.split(' ')[0]}
                                            </span>
                                            <Badge variant="outline" className="mt-2 bg-card dark:bg-black/20">
                                                6:00 PM
                                            </Badge>
                                        </div>

                                        {/* Content Box */}
                                        <div className="flex-1 p-6 flex flex-col justify-center">
                                            <div className="flex items-start justify-between gap-4 mb-2">
                                                <h4 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors">
                                                    {day.title}
                                                </h4>
                                                {/* <Badge>Active</Badge> */}
                                            </div>
                                            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 line-clamp-2">
                                                {day.description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-2 mt-auto">
                                                <Link href={`/student/batch1/geography/${day.day}`}>
                                                    {/* Note: This assumes we have day-based routing setup, 
                                                    or we can use query params on the dashboard 
                                                    e.g. /student/batch1/geography?view=lesson&day=${day.day} */}
                                                    <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                                                        <PlayCircle className="h-4 w-4" /> Start Session
                                                    </Button>
                                                </Link>
                                                <Button size="sm" variant="outline" className="gap-2">
                                                    <Layers className="h-4 w-4" /> Resources
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
