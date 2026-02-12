"use client";

import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ChevronDown, ChevronUp, Clock, ExternalLink, Lightbulb, Pin, Sparkles, Scale } from 'lucide-react';
import Link from 'next/link';
import { PolityTopic, getModuleById, getModuleColors, POLITY_MODULES as POLITY_PARTS, ModuleId as PartId } from './data/polity-types';
import { getTopicById } from './data/polity-registry'; // Using 50-topic registry for now
import { POLITY_REVISION_CHAPTERS } from './data/RevisionRegistry'; // For 95-topic fallback

import TopicPYQWidget from '../../batch1-1/polity/revision/TopicPYQWidget';

// Adapter for TOPIC_TITLES using the 95-chapter registry
const TOPIC_TITLES = POLITY_REVISION_CHAPTERS.map(ch => ({
    id: ch.id,
    title: ch.title,
    part: 'I' as PartId // Default part for fallback, logic can be refined if needed
}));

interface TopicViewerProps {
    topic: PolityTopic;
    topicId: number; // Pass the ID directly in case topic is null
}

export default function TopicViewer({ topic, topicId }: TopicViewerProps) {
    // Fallback if topic is missing in registry (Topics 51-95)
    let displayTopic = topic;
    let isPlaceholder = false;

    if (!topic) {
        const meta = TOPIC_TITLES.find(t => t.id === topicId);
        if (meta) {
            isPlaceholder = true;
            // Create a placeholder topic object
            displayTopic = {
                id: meta.id,
                title: meta.title,
                module: meta.part, // Using part as module ID for color mapping
                staticFocus: "Content for this topic is currently being developed.",
                coreArticles: [],
                keyConcepts: [],
                currentAffairs: [],
                prelimsPointers: [],
                lastUpdated: new Date().toLocaleDateString(),
                priority: 'Medium'
            } as any; // Cast to bypass strict type matching for placeholder
        }
    }

    if (!displayTopic) {
        return <div className="p-8 text-center text-gray-500">Topic not found.</div>;
    }

    const [expandedSections, setExpandedSections] = useState<string[]>(['concepts', 'ca']);
    // For placeholder, try to map Part ID to Module/Color style
    const module = getModuleById(displayTopic.module);
    // Fallback color mapping based on Part ID if module is not found
    const partColor = POLITY_PARTS.find(p => p.id === displayTopic.module)?.color || 'blue';
    const colors = module ? getModuleColors(module.color) : getModuleColors(partColor);

    const toggleSection = (section: string) => {
        setExpandedSections(prev =>
            prev.includes(section)
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    const isExpanded = (section: string) => expandedSections.includes(section);

    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0a0a0a]">
            {/* Header */}
            <div className={`bg-gradient-to-r ${colors.bg} to-indigo-700 text-white`}>
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <Link
                        href="/student/batch1/polity"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Polity
                    </Link>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-white/20">
                            Topic {topic.id} • Module {topic.module}
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
                                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                                            {ca.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[#374151] dark:text-gray-300 mb-3">
                                        {ca.teachingHook}
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                            Source: {ca.source}
                                        </span>
                                        {ca.caseReference && (
                                            <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 rounded text-rose-700 dark:text-rose-300 flex items-center gap-1">
                                                <Scale className="w-3 h-3" />
                                                {ca.caseReference}
                                            </span>
                                        )}
                                        {ca.relatedArticles?.map((art) => (
                                            <span key={art} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded text-blue-700 dark:text-blue-300">
                                                Art. {art}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Core Articles */}
                {topic.coreArticles.length > 0 && (
                    <CollapsibleSection
                        title="Constitutional Articles"
                        icon={<BookOpen className="w-5 h-5" />}
                        isExpanded={isExpanded('articles')}
                        onToggle={() => toggleSection('articles')}
                        count={topic.coreArticles.length}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-800">
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 w-24">Article</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Title</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topic.coreArticles.map((article, idx) => (
                                        <tr key={article.number} className={idx % 2 === 1 ? 'bg-gray-50/50 dark:bg-gray-800/50' : ''}>
                                            <td className="px-4 py-3 font-mono font-bold text-blue-600 dark:text-blue-400">
                                                Art. {article.number}
                                            </td>
                                            <td className="px-4 py-3 font-medium text-[#1F2937] dark:text-white">
                                                {article.title}
                                            </td>
                                            <td className="px-4 py-3 text-[#374151] dark:text-gray-300">
                                                {article.description}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CollapsibleSection>
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
                                <span className={`text-xs px-2 py-0.5 rounded font-medium ${pointer.category === 'Article' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' :
                                    pointer.category === 'Amendment' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300' :
                                        pointer.category === 'Case' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300' :
                                            pointer.category === 'Year' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' :
                                                pointer.category === 'Commission' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300' :
                                                    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                                    }`}>
                                    {pointer.category}
                                </span>
                                <span className="text-sm text-[#374151] dark:text-gray-300 flex-1">
                                    {pointer.fact}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PYQ Widget (New) */}
                <TopicPYQWidget topicId={displayTopic.id} />

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-800">
                    {topic.id > 1 ? (
                        <Link
                            href={`/student/batch1/polity/topic/${topic.id - 1}`}
                            className="flex items-center gap-2 text-blue-600 hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Previous Topic
                        </Link>
                    ) : <div />}

                    <Link
                        href={`/student/batch1/polity/topic/${topic.id + 1}`}
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        Next Topic
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
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
                    <div className="text-blue-600 dark:text-blue-400">
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
