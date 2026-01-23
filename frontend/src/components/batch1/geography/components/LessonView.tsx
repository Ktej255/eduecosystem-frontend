"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Lightbulb, Play, CheckCircle2 } from "lucide-react";
import { LessonContent, ContentBlock, SimulationType } from "../content/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { activityService } from "@/services/activityService";

// Dynamic import for SimulationView (heavy 3D content)
const SimulationView = dynamic(
    () => import("../3d/SimulationView"),
    { ssr: false }
);

interface LessonViewProps {
    content: LessonContent;
    onClose: () => void;
}

export default function LessonView({ content, onClose }: LessonViewProps) {
    const [activeSimulation, setActiveSimulation] = useState<SimulationType | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkCompletion();
    }, [content.topicId]);

    const checkCompletion = async () => {
        try {
            const completedTopics = await activityService.getCompletedTopics();
            setIsCompleted(completedTopics.includes(content.topicId));
        } catch (error) {
            console.error("Failed to check completion", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleMarkComplete = async () => {
        setIsLoading(true);
        try {
            await activityService.logActivity('complete_topic', content.topicId);
            setIsCompleted(true);
            // Optional: Provide feedback or close
            setTimeout(() => onClose(), 500);
        } catch (error) {
            console.error("Failed to mark complete", error);
        } finally {
            setIsLoading(false);
        }
    };

    // If a simulation is active, show it fullscreen
    if (activeSimulation) {
        return (
            <SimulationView
                simulationType={activeSimulation}
                onClose={() => setActiveSimulation(null)}
            />
        );
    }

    return (
        <div className="w-full h-full bg-slate-950 text-white flex flex-col animate-in fade-in duration-300">
            {/* Header */}
            <div className="h-16 border-b border-white/10 flex items-center px-6 bg-slate-900/50 backdrop-blur-md shrink-0">
                <Button variant="ghost" size="sm" onClick={onClose} className="mr-4 text-slate-400 hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Map
                </Button>
                <div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                        {content.title}
                    </h1>
                </div>
                <div className="ml-auto flex items-center gap-3">
                    {isCompleted && (
                        <Badge variant="outline" className="border-green-500/50 text-green-300 bg-green-500/10">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Completed
                        </Badge>
                    )}
                    <Badge variant="outline" className="border-indigo-500/50 text-indigo-300">
                        <BookOpen className="w-3 h-3 mr-1" />
                        Learning Mode
                    </Badge>
                </div>
            </div>

            {/* Scrollable Content */}
            <ScrollArea className="flex-1">
                <div className="max-w-4xl mx-auto py-12 px-8">
                    {/* Intro Section */}
                    <div className="mb-12">
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                            {content.description}
                        </p>
                    </div>

                    {/* Lesson Sections */}
                    <div className="space-y-16">
                        {content.sections.map((section) => (
                            <section key={section.id} className="relative">
                                <div className="absolute -left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent hidden xl:block" />

                                <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                                    <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3 inline-block" />
                                    {section.title}
                                </h2>

                                <div className="space-y-8">
                                    {section.content.map((block) => (
                                        <div key={block.id}>
                                            <ContentBlockRenderer
                                                block={block}
                                                onLaunchSimulation={setActiveSimulation}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Completion Footer */}
                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-center">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2">
                                {isCompleted ? 'Lesson Completed!' : 'Lesson Completed?'}
                            </h3>
                            <Button
                                size="lg"
                                className={`px-8 ${isCompleted
                                    ? 'bg-green-600/50 hover:bg-green-600/50 cursor-default'
                                    : 'bg-green-600 hover:bg-green-700'}`}
                                onClick={!isCompleted ? handleMarkComplete : onClose}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Updating...' : (isCompleted ? 'Return to Map' : 'Mark as Done & Return')}
                            </Button>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
}

interface ContentBlockRendererProps {
    block: ContentBlock;
    onLaunchSimulation: (type: SimulationType) => void;
}

function ContentBlockRenderer({ block, onLaunchSimulation }: ContentBlockRendererProps) {
    switch (block.type) {
        case 'text':
            return (
                <div className="prose prose-invert prose-lg max-w-none text-slate-300 mix-blend-plus-lighter">
                    {/* Simple markdown-ish parser for bold text */}
                    {block.content.split('\n').map((line, i) => (
                        <p key={i} dangerouslySetInnerHTML={{
                            __html: line
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="text-indigo-200">$1</em>')
                        }} />
                    ))}
                </div>
            );

        case 'image':
            return (
                <figure className="my-6 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    <img
                        src={block.content}
                        alt={block.alt || 'Lesson Image'}
                        className="w-full h-auto max-h-[500px] object-cover"
                    />
                    {block.caption && (
                        <figcaption className="p-3 text-center text-sm text-slate-400 bg-black/40 border-t border-white/5">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );

        case 'callout':
            return (
                <div className="my-6 p-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 flex gap-4">
                    <Lightbulb className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div className="prose prose-invert text-indigo-100">
                        <p dangerouslySetInnerHTML={{
                            __html: block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                        }} />
                    </div>
                </div>
            );

        case 'quiz':
            return (
                <div className="my-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                    <h4 className="text-lg font-bold mb-4 text-emerald-400">Micro-Quiz</h4>
                    <p className="text-white mb-4">{block.content}</p>
                    <Button variant="outline" className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-950">
                        Reveal Answer
                    </Button>
                </div>
            );

        case 'simulation':
            return (
                <div className="my-8 p-6 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/40">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                            <Play className="w-7 h-7 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-cyan-300 mb-1">
                                3D Visualization Available
                            </h4>
                            <p className="text-slate-300 text-sm mb-4">
                                {block.content}
                            </p>
                            <Button
                                onClick={() => block.simulationType && onLaunchSimulation(block.simulationType)}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                            >
                                <Play className="w-4 h-4 mr-2" />
                                Launch 3D Simulation
                            </Button>
                        </div>
                    </div>
                </div>
            );

        default:
            return null;
    }
}
