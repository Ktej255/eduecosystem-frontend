"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Lightbulb, Play, CheckCircle2 } from "lucide-react";
import { LessonContent, ContentBlock, SimulationType } from "../content/types";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import dynamic from "next/dynamic";
import { activityService } from "@/services/activityService";
import ConfidencePoll from "@/components/shared/ConfidencePoll";
import DOMPurify from "dompurify";

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
                <Button variant="ghost" size="sm" onClick={onClose} className="mr-4 text-muted-foreground hover:text-white">
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
                        <div className="text-center space-y-6">
                            <h3 className="text-xl font-semibold mb-2">
                                {isCompleted ? 'Lesson Completed!' : 'Lesson Completed?'}
                            </h3>

                            {isCompleted && (
                                <div className="max-w-md mx-auto mb-6">
                                    <ConfidencePoll chapterId={content.topicId} />
                                </div>
                            )}

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
                            __html: DOMPurify.sanitize(line
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                                .replace(/\*(.*?)\*/g, '<em class="text-indigo-200">$1</em>'))
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
                        <figcaption className="p-3 text-center text-sm text-muted-foreground bg-black/40 border-t border-white/5">
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
                            __html: DOMPurify.sanitize(block.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>'))
                        }} />
                    </div>
                </div>
            );

        case 'quiz':
            return <QuizBlockRenderer block={block} />;

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

function QuizBlockRenderer({ block }: { block: ContentBlock }) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    if (!block.quizData) return null;

    const { question, options, correctIndex, explanation } = block.quizData;
    const isCorrect = selectedOption === correctIndex;

    return (
        <div className="my-8 p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-xl">
            <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500 mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Quick Check
            </h4>
            <p className="text-lg text-white font-medium mb-6">{question}</p>

            <div className="space-y-3">
                {options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => { setSelectedOption(idx); setShowResult(true); }}
                        disabled={showResult}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${showResult
                            ? idx === correctIndex
                                ? 'bg-emerald-900/30 border-emerald-500 text-emerald-200'
                                : idx === selectedOption
                                    ? 'bg-red-900/30 border-red-500 text-red-200'
                                    : 'bg-black/20 border-transparent opacity-50'
                            : 'bg-card/5 border-white/10 hover:bg-card/10 hover:border-white/20 text-slate-200'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${showResult && idx === correctIndex ? 'border-emerald-500 bg-emerald-500 text-black' : 'border-current'
                                }`}>
                                {String.fromCharCode(65 + idx)}
                            </div>
                            {option}
                            {showResult && idx === correctIndex && <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-500" />}
                        </div>
                    </button>
                ))}
            </div>

            {showResult && (
                <div className={`mt-6 p-4 rounded-lg border ${isCorrect ? 'bg-emerald-950/30 border-emerald-900/50' : 'bg-red-950/30 border-red-900/50'} animate-in fade-in slide-in-from-top-2`}>
                    <p className={`font-bold mb-1 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                    </p>
                    <p className="text-sm text-slate-300">{explanation}</p>
                </div>
            )}
        </div>
    );
}
