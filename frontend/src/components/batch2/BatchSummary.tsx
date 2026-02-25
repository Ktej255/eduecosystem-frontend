import React from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, Award, Clock, Feather, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBatch2Events } from "./hooks/useBatch2Events";

export default function BatchSummary() {
    const { events } = useBatch2Events();

    // Filter to only events that have text (journal entries) or gunas (SQ tests) to show in the logs
    const logs = events.filter(e => e.text || e.gunas);

    const monthlyStats = [
        { month: "January", year: "2026", focus: "Upanishadic Wisdom", progress: 85, color: "bg-amber-500" },
        { month: "December", year: "2025", focus: "Vedic Chanting", progress: 100, color: "bg-orange-500" },
        { month: "November", year: "2025", focus: "Sanskrit Basics", progress: 100, color: "bg-red-500" },
        { month: "October", year: "2025", focus: "Introduction to Dharma", progress: 100, color: "bg-purple-500" },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {monthlyStats.map((stat, i) => (
                    <motion.div
                        key={stat.month}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="border-l-4 shadow-sm hover:shadow-md transition-all rounded-xl" style={{ borderLeftColor: stat.color }}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground flex justify-between">
                                    {stat.month} {stat.year}
                                    <Calendar className="h-4 w-4" />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.progress}%</div>
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                    Focus: {stat.focus}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Timeline */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-card rounded-2xl border border-amber-100 p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-amber-950 font-serif">
                            <TrendingUp className="h-6 w-6 text-emerald-600" />
                            Journey Timeline
                        </h3>
                        <div className="relative border-l-2 border-amber-100 ml-4 space-y-10 pl-8 py-2">
                            {monthlyStats.map((stat, i) => (
                                <div key={i} className="relative group">
                                    <div className={`absolute -left-[41px] top-1.5 h-6 w-6 rounded-full ${stat.color} border-4 border-white shadow-md group-hover:scale-110 transition-transform`} />
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg">{stat.month} - {stat.focus}</h4>
                                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                                            Successfully integrated the foundational concepts of {stat.focus.toLowerCase()} into daily practice and study routine.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience Logs */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8 shadow-sm h-full">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-amber-950 font-serif">
                            <Feather className="h-6 w-6 text-amber-600" />
                            Internal Shifts
                        </h3>

                        {logs.length > 0 ? (
                            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 no-scrollbar">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={log.id}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="bg-card/80 p-5 rounded-xl border border-amber-100 shadow-sm relative group overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-2 opacity-5">
                                            <Sparkles className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">
                                                {log.module || "General"} • {log.type.replace(/_/g, " ")}
                                            </span>
                                            <span className="text-[10px] text-muted-foreground font-medium">
                                                {new Date(log.timestamp).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm italic font-medium leading-relaxed mb-3">
                                            "{log.text}"
                                        </p>

                                        {/* Guna Micro-Visualization */}
                                        {log.gunas && (
                                            <div className="flex items-center gap-1.5 pt-3 border-t border-amber-50">
                                                <div className="flex-1 h-1.5 rounded-full overflow-hidden flex bg-muted">
                                                    <div className="h-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" style={{ width: `${log.gunas.sattva}%` }} />
                                                    <div className="h-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]" style={{ width: `${log.gunas.rajas}%` }} />
                                                    <div className="h-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.5)]" style={{ width: `${log.gunas.tamas}%` }} />
                                                </div>
                                                <div className="flex gap-2 text-[8px] font-bold uppercase tracking-tighter text-muted-foreground">
                                                    <span className="text-emerald-600">S:{log.gunas.sattva}</span>
                                                    <span className="text-orange-600">R:{log.gunas.rajas}</span>
                                                    <span className="text-indigo-600">T:{log.gunas.tamas}</span>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 px-4 space-y-4">
                                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto shadow-sm border border-amber-100">
                                    <Clock className="w-8 h-8 text-amber-200" />
                                </div>
                                <p className="text-muted-foreground text-sm italic">
                                    Your personal realizations and internal shifts will appear here as you log them during your practice sessions.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
