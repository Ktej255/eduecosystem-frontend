import { GEOGRAPHY_SYLLABUS, Module, SubTopic, MicroTopic } from "../data/geography-syllabus-data";
import { CheckCircle, Lock, Unlock, Play, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SyllabusListViewProps {
    activeModuleId: string;
    onSelectTopic: (topic: MicroTopic) => void;
    completedTopics?: string[];
}

export default function SyllabusListView({ activeModuleId, onSelectTopic, completedTopics = [] }: SyllabusListViewProps) {
    const activeModule = GEOGRAPHY_SYLLABUS.find(m => m.id === activeModuleId) || GEOGRAPHY_SYLLABUS[0];

    return (
        <div className="w-full h-full bg-slate-950 overflow-y-auto p-12 animate-in fade-in duration-300">
            <div className="max-w-5xl mx-auto space-y-12 pb-20">

                {/* Header */}
                <div className="border-b border-white/10 pb-8">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-4">
                        {activeModule.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        {activeModule.description}
                    </p>
                </div>

                {/* Topics Grid */}
                <div className="grid gap-8">
                    {activeModule.topics.map((topic, index) => (
                        <div key={topic.id} className="relative group">
                            {/* Connector Line */}
                            {index !== activeModule.topics.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-0 w-px bg-card/5 -z-10 group-hover:bg-card/10 transition-colors" />
                            )}

                            <div className="flex gap-6 items-start">
                                {/* Number Badge */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 shadow-xl border border-white/5"
                                    style={{ backgroundColor: `${activeModule.color}20`, color: activeModule.color }}
                                >
                                    {index + 1}
                                </div>

                                <div className="flex-1 space-y-6 pt-2">
                                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                        {topic.title}
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {topic.microTopics.map((micro) => {
                                            const isCompleted = completedTopics.includes(micro.id) || micro.status === 'mastered';
                                            return (
                                                <div
                                                    key={micro.id}
                                                    onClick={() => onSelectTopic(micro)}
                                                    className="bg-card/5 hover:bg-card/10 border border-white/5 hover:border-white/20 rounded-xl p-4 cursor-pointer transition-all group/card flex items-center gap-4"
                                                >
                                                    <div className="shrink-0">
                                                        {micro.status === 'locked' ? (
                                                            <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-muted-foreground">
                                                                <Lock className="w-5 h-5" />
                                                            </div>
                                                        ) : isCompleted ? (
                                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                                                <CheckCircle className="w-5 h-5" />
                                                            </div>
                                                        ) : (
                                                            <div
                                                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                                                style={{ backgroundColor: `${activeModule.color}30`, color: activeModule.color }}
                                                            >
                                                                <Unlock className="w-5 h-5" />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-medium text-slate-200 truncate group-hover/card:text-white transition-colors">
                                                            {micro.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                                                            <span>15 mins</span>
                                                            <span>•</span>
                                                            <span>Video & Notes</span>
                                                        </div>
                                                    </div>

                                                    <div className="opacity-0 group-hover/card:opacity-100 transition-opacity transform translate-x-2 group-hover/card:translate-x-0">
                                                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
