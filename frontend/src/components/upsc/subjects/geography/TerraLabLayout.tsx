import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Search, Map as MapIcon, List, Layers, Mountain, Cloud, Droplet, ChevronDown, ChevronRight, CheckCircle, Lock } from "lucide-react";
import { GEOGRAPHY_SYLLABUS, Module, SubTopic, MicroTopic } from "./data/geography-syllabus-data";
import { QuickViewGlassPane } from "./components/QuickViewGlassPane";

interface TerraLabLayoutProps {
    children: React.ReactNode;
    activeModuleId: string;
    onModuleChange: (moduleId: string) => void;
    onStartLearning?: (topic: MicroTopic) => void;
    selectedTopic: MicroTopic | null;
    onSelectTopic: (topic: MicroTopic | null) => void;
    viewMode: 'map' | 'list';
    onViewModeChange: (mode: 'map' | 'list') => void;
}

export default function TerraLabLayout({
    children,
    activeModuleId,
    onModuleChange,
    onStartLearning,
    selectedTopic,
    onSelectTopic,
    viewMode,
    onViewModeChange
}: TerraLabLayoutProps) {
    const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

    const activeModule = GEOGRAPHY_SYLLABUS.find(m => m.id === activeModuleId) || GEOGRAPHY_SYLLABUS[0];

    const toggleTopic = (topicId: string) => {
        setExpandedTopics(prev => ({
            ...prev,
            [topicId]: !prev[topicId]
        }));
    };

    const getModuleIcon = (id: string) => {
        switch (id) {
            case 'geomorphology': return <Mountain className="w-5 h-5" />;
            case 'climatology': return <Cloud className="w-5 h-5" />;
            case 'oceanography': return <Droplet className="w-5 h-5" />;
            default: return <Layers className="w-5 h-5" />;
        }
    };

    return (
        <div className="flex h-screen w-full bg-gray-950 overflow-hidden relative font-sans">
            {/* Left Sidebar - Syllabus Navigator */}
            <div
                className="w-80 h-full flex flex-col shrink-0 border-r border-white/10 z-30 transition-colors duration-500 relative"
                style={{ backgroundColor: `${activeModule.color}15` }} // 15 = low opacity hex
            >
                {/* Sidebar Header */}
                <div className="p-4 border-b border-white/10 bg-black/20 backdrop-blur-md">
                    <Link href="/student/batch1">
                        <Button variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-white -ml-2">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
                        </Button>
                    </Link>
                    <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-widest">
                        Terra-Lab
                    </h1>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">Build 2.0 • Spatial Learning</p>
                </div>

                {/* Module Selector */}
                <div className="flex p-2 gap-1 bg-black/40 border-b border-white/5">
                    {GEOGRAPHY_SYLLABUS.map((mod) => (
                        <button
                            key={mod.id}
                            onClick={() => onModuleChange(mod.id)}
                            className={`flex-1 p-2 rounded-lg flex justify-center items-center transition-all ${activeModuleId === mod.id
                                ? 'bg-card/10 text-white shadow-inner'
                                : 'text-muted-foreground hover:text-muted-foreground hover:bg-card/5'
                                }`}
                            title={mod.title}
                        >
                            {getModuleIcon(mod.id)}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="p-4 border-b border-white/5">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search topics..."
                            className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                        />
                    </div>
                </div>

                {/* Syllabus Tree */}
                <ScrollArea className="flex-1">
                    <div className="p-4 space-y-6">
                        <div className="space-y-1">
                            <h2
                                className="text-sm font-bold uppercase tracking-wider mb-4 border-l-2 pl-3 py-1"
                                style={{ borderColor: activeModule.color, color: activeModule.color }}
                            >
                                {activeModule.title}
                            </h2>

                            {activeModule.topics.map((topic) => (
                                <div key={topic.id} className="space-y-1">
                                    <button
                                        onClick={() => toggleTopic(topic.id)}
                                        className="w-full flex items-center justify-between p-2 rounded hover:bg-card/5 text-muted-foreground text-sm font-medium transition-colors text-left group"
                                    >
                                        <span className="group-hover:text-white transition-colors">{topic.title}</span>
                                        {expandedTopics[topic.id] ? (
                                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </button>

                                    {/* Micro Topics */}
                                    {expandedTopics[topic.id] && (
                                        <div className="pl-4 space-y-1 my-1 border-l border-white/10 ml-2">
                                            {topic.microTopics.map((micro) => (
                                                <button
                                                    key={micro.id}
                                                    onClick={() => onSelectTopic(micro)}
                                                    className={`w-full flex items-center gap-3 p-2 rounded text-xs transition-colors text-left ${selectedTopic?.id === micro.id
                                                        ? 'bg-card/10 text-white'
                                                        : 'text-muted-foreground hover:text-muted-foreground hover:bg-card/5'
                                                        }`}
                                                >
                                                    {micro.status === 'locked' && <Lock className="h-3 w-3 shrink-0 opacity-50" />}
                                                    {micro.status === 'mastered' && <CheckCircle className="h-3 w-3 shrink-0 text-green-500" />}
                                                    {micro.status === 'active' && <div className={`h-2 w-2 rounded-full shrink-0 animate-pulse`} style={{ backgroundColor: activeModule.color }} />}
                                                    <span className="truncate">{micro.title}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollArea>

                {/* Footer User Stats */}
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>12%</span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-[12%] bg-card rounded-full" />
                    </div>
                </div>
            </div>

            {/* Main Canvas Area */}
            <main className="flex-1 relative bg-black">
                {/* Top Nav Overlay */}
                <div className="absolute top-0 left-0 right-0 p-4 z-10 flex justify-between items-start pointer-events-none">
                    <div className="pointer-events-auto">
                        {/* Breadcrumbs could go here */}
                    </div>

                    <div className="pointer-events-auto bg-black/50 backdrop-blur-md rounded-lg p-1 border border-white/10 flex gap-1">
                        <button
                            onClick={() => onViewModeChange('map')}
                            className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium transition-all ${viewMode === 'map' ? 'bg-card/20 text-white shadow' : 'text-muted-foreground hover:text-white'
                                }`}
                        >
                            <MapIcon className="w-4 h-4" /> 3D Map
                        </button>
                        <button
                            onClick={() => onViewModeChange('list')}
                            className={`px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-card/20 text-white shadow' : 'text-muted-foreground hover:text-white'
                                }`}
                        >
                            <List className="w-4 h-4" /> Syllabus
                        </button>
                    </div>
                </div>

                {/* Children Content (The Interactive Globe or Module View) */}
                <div className="w-full h-full relative z-0">
                    {children}
                </div>
            </main>

            <AnimatePresence>
                {selectedTopic && (
                    <QuickViewGlassPane
                        topic={selectedTopic}
                        onClose={() => onSelectTopic(null)}
                        onStartLearning={(t) => {
                            onSelectTopic(null);
                            onStartLearning?.(t);
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
