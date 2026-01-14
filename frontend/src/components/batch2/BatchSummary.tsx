"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BatchSummary() {
    const monthlyStats = [
        { month: "January", year: "2026", focus: "Upanishadic Wisdom", progress: 85, color: "bg-amber-500" },
        { month: "December", year: "2025", focus: "Vedic Chanting", progress: 100, color: "bg-orange-500" },
        { month: "November", year: "2025", focus: "Sanskrit Basics", progress: 100, color: "bg-red-500" },
        { month: "October", year: "2025", focus: "Introduction to Dharma", progress: 100, color: "bg-purple-500" },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {monthlyStats.map((stat, i) => (
                    <motion.div
                        key={stat.month}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="border-l-4 shadow-sm hover:shadow-md transition-all" style={{ borderLeftColor: stat.color }}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
                                    {stat.month} {stat.year}
                                    <Calendar className="h-4 w-4" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.progress}%</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Focus: {stat.focus}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white rounded-xl border p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Journey Timeline (Last 4 Months)
                </h3>
                <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-6 py-2">
                    {monthlyStats.map((stat, i) => (
                        <div key={i} className="relative">
                            <div className={`absolute -left-[31px] top-1 h-4 w-4 rounded-full ${stat.color} ring-4 ring-white`} />
                            <h4 className="font-semibold text-slate-900">{stat.month} - {stat.focus}</h4>
                            <p className="text-slate-500 text-sm mt-1">
                                Comprehensive study and practice completed.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
