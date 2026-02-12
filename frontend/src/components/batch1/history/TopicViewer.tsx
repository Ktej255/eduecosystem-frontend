"use client";

import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, Clock, Lightbulb, Pin, Sparkles, Scale, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { HistoryTopic, getModuleById, getModuleColors } from './data/history-registry';
import batch1Service, { SegmentData } from '@/services/batch1Service';
import { Video as VideoIcon } from 'lucide-react';
import InteractiveVideoPlayer from '@/components/features/lms/InteractiveVideoPlayer';



interface TopicViewerProps {
    topic: HistoryTopic;
}

export default function TopicViewer({ topic }: TopicViewerProps) {
    const [expandedSections, setExpandedSections] = useState<string[]>(['concepts', 'ca']);
    const [videoData, setVideoData] = useState<SegmentData | null>(null);
    const [quizQuestions, setQuizQuestions] = useState<any[]>([]); // New state for quiz
    const module = getModuleById(topic.module);
    const colors = module ? getModuleColors(module.color) : getModuleColors('amber');

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const isExpanded = (section: string) => expandedSections.includes(section);

    // Fetch dynamic video content
    React.useEffect(() => {
        const loadVideo = async () => {
            try {
                // Assuming Cycle 1 (History), Part 1 (Morning) for Topic Viewer
                // Map topic.day to the segment
                const data = await batch1Service.getPartContent(1, topic.day, 1);
                // Suppose the main video is Segment 1
                const mainSegment = data.segments[0];
                if (mainSegment && mainSegment.video_url) {
                    setVideoData(mainSegment);

                    // Optional: Auto-fetch/generate quiz if transcript is ready
                    // For now, we fetch it if available or generate on fly. 
                    // This is "optimistic" quiz loading.
                    /* 
                    const segmentKey = `cycle1_day${topic.day}_part1_seg1`; // Simplified key construction
                    batch1Service.generateQuiz(segmentKey).then(res => {
                        if (res.success && res.quiz) setQuizQuestions(res.quiz);
                    }).catch(err => console.log("Quiz not available yet"));
                    */
                }
            } catch (error) {
                console.error("Failed to load video", error);
            }
        };
        loadVideo();
    }, [topic.day]);

    const handleLoadQuiz = async () => {
        if (!videoData) return;
        // Construct key - effectively hardcoding assuming Segment 1 for now for demo
        const segmentKey = `cycle1_day${topic.day}_part1_seg${videoData.id}`;
        try {
            const res = await batch1Service.generateQuiz(segmentKey);
            if (res.success && res.quiz) {
                setQuizQuestions(res.quiz);
            }
        } catch (e) {
            console.error("Quiz gen failed", e);
        }
    };

    const handleQuizComplete = async (score: number) => {
        if (!videoData) return;
        const segmentKey = `cycle1_day${topic.day}_part1_seg${videoData.id}`;
        try {
            const res = await batch1Service.submitQuizResult({
                segment_key: segmentKey,
                score: score,
                total_questions: quizQuestions.length
            });
            if (res.is_weak_spot) {
                alert("⚠️ Adaptive Learning Alert: We noticed this is a weak spot. A review session has been added to your schedule.");
            } else {
                alert(res.message);
            }
        } catch (e) {
            console.error("Failed to submit result", e);
        }
    };

    // Get category badge colors
    const getCategoryColors = (category: string) => {
        const categoryColors: Record<string, string> = {
            'Site': 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
            'Term': 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
            'Year': 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
            'Act': 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300',
            'Treaty': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300',
            'Person': 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
            'Movement': 'bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300',
            'Dynasty': 'bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300',
        };
        return categoryColors[category] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className={`bg-gradient-to-r ${colors.bg} to-orange-700 text-white`}>
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <Link
                        href="/student/batch1/history"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to History
                    </Link>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-white/20">
                            Day {topic.day} • Module {topic.module}
                        </span>
                        {topic.priority === 'High' && (
                            <span className="text-xs px-2 py-0.5 rounded bg-red-500/80">
                                High Priority
                            </span>
                        )}
                        <span className="text-xs px-2 py-0.5 rounded bg-white/10 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Updated {topic.lastUpdated}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                        {topic.title}
                    </h1>
                    <p className="text-lg text-white/90">
                        {topic.staticFocus}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 space-y-6">

                {/* Dynamic Video Section */}
                {videoData && videoData.video_url && (
                    <div className="bg-black/5 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                        <div className="aspect-video w-full bg-black">
                            {/* Replaced standard video with InteractivePlayer */}
                            <InteractiveVideoPlayer
                                src={videoData.video_url}
                                questions={quizQuestions}
                                title={videoData.title}
                                onComplete={handleQuizComplete}
                            />
                        </div>
                        <div className="p-4 bg-white dark:bg-[#111]">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400">
                                    <VideoIcon className="w-4 h-4" />
                                    Watch Concept Video
                                </div>
                                {quizQuestions.length === 0 && (
                                    <button
                                        onClick={handleLoadQuiz}
                                        className="text-xs flex items-center gap-1 bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        Generate AI Quiz
                                    </button>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{videoData.title}</h3>
                            <p className="text-sm text-gray-500">{videoData.duration} • {videoData.key_points ? 'Notes Available' : 'No Notes'}</p>
                        </div>
                    </div>
                )}

                {/* Current Affairs Hook - Featured at Top */}
                {topic.currentAffairs.length > 0 && (
                    <div className="bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-500 rounded-r-xl p-5">
                        <div className="flex items-center gap-2 text-sky-700 dark:text-sky-300 font-semibold mb-3">
                            <Sparkles className="w-5 h-5" />
                            Current Affairs Hook ({topic.currentAffairs.length})
                        </div>
                        <div className="space-y-4">
                            {topic.currentAffairs.map((ca) => (
                                <div key={ca.id} className="bg-white dark:bg-[#111] rounded-lg p-4 shadow-sm">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="font-semibold text-[#1F2937] dark:text-white">
                                            {ca.headline}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            {ca.iscentenary && (
                                                <span className="text-xs px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                                                    Centenary
                                                </span>
                                            )}
                                            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                                {ca.date}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#374151] dark:text-gray-300 mb-3">
                                        {ca.teachingHook}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                            Source: {ca.source}
                                        </span>
                                        {ca.relatedTopics?.map((topic) => (
                                            <span key={topic} className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 rounded text-amber-700 dark:text-amber-300">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Key Concepts */}
                <CollapsibleSection
                    title="Key Concepts"
                    icon={<Lightbulb className="w-5 h-5" />}
                    isExpanded={isExpanded('concepts')}
                    onToggle={() => toggleSection('concepts')}
                    count={topic.keyConcepts.length}
                >
                    <div className="space-y-4">
                        {topic.keyConcepts.map((concept, idx) => (
                            <div key={idx} className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                                <h4 className="font-semibold text-[#1F2937] dark:text-white mb-2">
                                    {concept.term}
                                </h4>
                                <p className="text-[#374151] dark:text-gray-300 text-sm leading-relaxed">
                                    {concept.definition}
                                </p>
                                {concept.example && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                                        Example: {concept.example}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>

                {/* Timeline (if exists) */}
                {topic.timeline && topic.timeline.length > 0 && (
                    <CollapsibleSection
                        title="Timeline"
                        icon={<Calendar className="w-5 h-5" />}
                        isExpanded={isExpanded('timeline')}
                        onToggle={() => toggleSection('timeline')}
                        count={topic.timeline.length}
                    >
                        <div className="space-y-2">
                            {topic.timeline.map((event, idx) => (
                                <div key={idx} className="flex gap-4 items-start py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400 min-w-[80px]">
                                        {event.year}
                                    </span>
                                    <div>
                                        <span className="font-medium text-[#1F2937] dark:text-white">{event.event}</span>
                                        {event.significance && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                                                — {event.significance}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>
                )}

                {/* Key Figures (if exists) */}
                {topic.keyFigures && topic.keyFigures.length > 0 && (
                    <CollapsibleSection
                        title="Key Historical Figures"
                        icon={<Users className="w-5 h-5" />}
                        isExpanded={isExpanded('figures')}
                        onToggle={() => toggleSection('figures')}
                        count={topic.keyFigures.length}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {topic.keyFigures.map((figure, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                    <div className="font-semibold text-[#1F2937] dark:text-white">{figure.name}</div>
                                    <div className="text-sm text-amber-600 dark:text-amber-400">{figure.title}</div>
                                    {figure.period && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{figure.period}</div>
                                    )}
                                    <div className="text-sm text-[#374151] dark:text-gray-300 mt-1">{figure.significance}</div>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>
                )}

                {/* Comparison Table */}
                {topic.comparisonTable && (
                    <CollapsibleSection
                        title={topic.comparisonTable.title}
                        icon={<Scale className="w-5 h-5" />}
                        isExpanded={isExpanded('comparison')}
                        onToggle={() => toggleSection('comparison')}
                        count={topic.comparisonTable.rows.length}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                                            Aspect
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                                            {topic.comparisonTable.columnAHeader}
                                        </th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">
                                            {topic.comparisonTable.columnBHeader}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topic.comparisonTable.rows.map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 1 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''}>
                                            <td className="px-4 py-3 font-medium text-[#1F2937] dark:text-white">
                                                {row.aspect}
                                            </td>
                                            <td className="px-4 py-3 text-[#374151] dark:text-gray-300">
                                                {row.columnA}
                                            </td>
                                            <td className="px-4 py-3 text-[#374151] dark:text-gray-300">
                                                {row.columnB}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CollapsibleSection>
                )}

                {/* Prelims Pointers - The Key Box */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 shadow-md">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-lg mb-4">
                        <Pin className="w-5 h-5" />
                        Prelims Pointers
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        {topic.prelimsPointers.map((pointer, idx) => (
                            <div
                                key={idx}
                                className={`flex items-start gap-3 p-3 rounded-lg ${pointer.highlight
                                    ? 'bg-emerald-100 dark:bg-emerald-800/30 border-l-4 border-emerald-500'
                                    : 'bg-white dark:bg-[#111]'
                                    }`}
                            >
                                <span className={`text-xs px-2 py-0.5 rounded font-medium ${getCategoryColors(pointer.category)}`}>
                                    {pointer.category}
                                </span>
                                <span className="text-sm text-[#374151] dark:text-gray-300 flex-1">
                                    {pointer.fact}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PYQ Alert (if exists) */}
                {topic.pyqAlert && (
                    <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-semibold mb-2">
                            <BookOpen className="w-4 h-4" />
                            PYQ Alert
                        </div>
                        <p className="text-sm text-rose-800 dark:text-rose-200">
                            {topic.pyqAlert}
                        </p>
                    </div>
                )}



                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
                    {topic.id > 1 ? (
                        <Link
                            href={`/student/batch1/history/topic/${topic.id - 1}`}
                            className="flex items-center gap-2 text-amber-600 hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Previous Day
                        </Link>
                    ) : <div />}

                    {topic.id < 10 && (
                        <Link
                            href={`/student/batch1/history/topic/${topic.id + 1}`}
                            className="flex items-center gap-2 text-amber-600 hover:underline"
                        >
                            Next Day
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

// Collapsible Section Component
interface CollapsibleSectionProps {
    title: string;
    icon: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
    count: number;
    children: React.ReactNode;
}

function CollapsibleSection({ title, icon, isExpanded, onToggle, count, children }: CollapsibleSectionProps) {
    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="text-amber-600 dark:text-amber-400">
                        {icon}
                    </div>
                    <h3 className="font-semibold text-[#1F2937] dark:text-white">
                        {title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        {count}
                    </span>
                </div>
                {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>

            {isExpanded && (
                <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                    {children}
                </div>
            )}
        </div>
    );
}
