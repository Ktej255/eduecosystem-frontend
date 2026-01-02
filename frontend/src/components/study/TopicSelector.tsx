"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Search,
    BookOpen,
    Plus,
    ChevronRight,
    History,
    Star,
    X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Topic interface
export interface Topic {
    id: string;
    name: string;
    subject?: string;
    category?: string;
    isCustom?: boolean;
}

interface TopicSelectorProps {
    subjectId?: string;
    onTopicSelected: (topic: Topic) => void;
    onCancel?: () => void;
    className?: string;
}

// Sample RAS topics (would be fetched from backend in production)
const RAS_TOPICS: Topic[] = [
    // Geography
    { id: "geo-1", name: "Physical Geography of Rajasthan", subject: "Geography", category: "Physical" },
    { id: "geo-2", name: "Climate and Weather Patterns", subject: "Geography", category: "Physical" },
    { id: "geo-3", name: "Water Resources and Drainage", subject: "Geography", category: "Physical" },
    { id: "geo-4", name: "Soil Types and Distribution", subject: "Geography", category: "Physical" },
    { id: "geo-5", name: "Desert Ecosystem", subject: "Geography", category: "Physical" },
    { id: "geo-6", name: "Aravalli Range", subject: "Geography", category: "Physical" },

    // History
    { id: "his-1", name: "Ancient Rajasthan", subject: "History", category: "Ancient" },
    { id: "his-2", name: "Medieval Rajasthan", subject: "History", category: "Medieval" },
    { id: "his-3", name: "Rajput Kingdoms", subject: "History", category: "Medieval" },
    { id: "his-4", name: "Modern History and Independence Movement", subject: "History", category: "Modern" },
    { id: "his-5", name: "Integration of Princely States", subject: "History", category: "Modern" },

    // Polity
    { id: "pol-1", name: "Indian Constitution Basics", subject: "Polity", category: "Constitution" },
    { id: "pol-2", name: "Fundamental Rights and Duties", subject: "Polity", category: "Constitution" },
    { id: "pol-3", name: "State Administration", subject: "Polity", category: "Governance" },
    { id: "pol-4", name: "Panchayati Raj in Rajasthan", subject: "Polity", category: "Local" },
    { id: "pol-5", name: "Urban Local Bodies", subject: "Polity", category: "Local" },

    // Economy
    { id: "eco-1", name: "Rajasthan Economy Overview", subject: "Economy", category: "Overview" },
    { id: "eco-2", name: "Agriculture in Rajasthan", subject: "Economy", category: "Agriculture" },
    { id: "eco-3", name: "Industries and Mining", subject: "Economy", category: "Industries" },
    { id: "eco-4", name: "Tourism in Rajasthan", subject: "Economy", category: "Services" },
    { id: "eco-5", name: "Five Year Plans and Development", subject: "Economy", category: "Development" },

    // Culture
    { id: "cul-1", name: "Art and Architecture", subject: "Culture", category: "Arts" },
    { id: "cul-2", name: "Fairs and Festivals", subject: "Culture", category: "Traditions" },
    { id: "cul-3", name: "Folk Music and Dance", subject: "Culture", category: "Arts" },
    { id: "cul-4", name: "Literature and Language", subject: "Culture", category: "Literature" },
    { id: "cul-5", name: "Religious Movements", subject: "Culture", category: "Religion" },

    // Current Affairs
    { id: "ca-1", name: "Government Schemes", subject: "Current Affairs", category: "Schemes" },
    { id: "ca-2", name: "Recent Developments", subject: "Current Affairs", category: "Recent" },
];

// Get unique subjects
const SUBJECTS = Array.from(new Set(RAS_TOPICS.map((t) => t.subject)));

export default function TopicSelector({
    subjectId,
    onTopicSelected,
    onCancel,
    className,
}: TopicSelectorProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [customTopic, setCustomTopic] = useState("");
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [recentTopics, setRecentTopics] = useState<Topic[]>([]);

    // Load recent topics from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const saved = localStorage.getItem("recentStudyTopics");
                if (saved) {
                    setRecentTopics(JSON.parse(saved));
                }
            } catch (e) {
                console.error("Failed to load recent topics:", e);
            }
        }
    }, []);

    // Save topic to recent list
    const saveToRecent = (topic: Topic) => {
        const updated = [topic, ...recentTopics.filter((t) => t.id !== topic.id)].slice(
            0,
            5
        );
        setRecentTopics(updated);
        if (typeof window !== "undefined") {
            localStorage.setItem("recentStudyTopics", JSON.stringify(updated));
        }
    };

    // Filter topics based on search and subject
    const filteredTopics = RAS_TOPICS.filter((topic) => {
        const matchesSearch = topic.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        const matchesSubject = !selectedSubject || topic.subject === selectedSubject;
        return matchesSearch && matchesSubject;
    });

    // Handle topic selection
    const handleSelectTopic = (topic: Topic) => {
        saveToRecent(topic);
        onTopicSelected(topic);
    };

    // Handle custom topic
    const handleAddCustomTopic = () => {
        if (customTopic.trim()) {
            const topic: Topic = {
                id: `custom-${Date.now()}`,
                name: customTopic.trim(),
                subject: "Custom",
                isCustom: true,
            };
            saveToRecent(topic);
            onTopicSelected(topic);
        }
    };

    return (
        <Card className={cn("overflow-hidden", className)}>
            <CardHeader className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Select Topic
                    </CardTitle>
                    {onCancel && (
                        <Button variant="ghost" size="icon" onClick={onCancel}>
                            <X className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </CardHeader>

            <CardContent className="p-4 space-y-4">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                {/* Subject Filter */}
                <div className="flex flex-wrap gap-2">
                    <Badge
                        variant={selectedSubject === null ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedSubject(null)}
                    >
                        All
                    </Badge>
                    {SUBJECTS.map((subject) => (
                        <Badge
                            key={subject}
                            variant={selectedSubject === subject ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedSubject(subject || null)}
                        >
                            {subject}
                        </Badge>
                    ))}
                </div>

                {/* Recent Topics */}
                {recentTopics.length > 0 && !searchQuery && !selectedSubject && (
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                            <History className="w-4 h-4" />
                            Recently Studied
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {recentTopics.map((topic) => (
                                <Button
                                    key={topic.id}
                                    variant="outline"
                                    size="sm"
                                    className="gap-2"
                                    onClick={() => handleSelectTopic(topic)}
                                >
                                    <Star className="w-3 h-3 text-yellow-500" />
                                    {topic.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Topic List */}
                <ScrollArea className="h-[300px]">
                    <div className="space-y-2">
                        {filteredTopics.map((topic) => (
                            <div
                                key={topic.id}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors group"
                                onClick={() => handleSelectTopic(topic)}
                            >
                                <div>
                                    <p className="font-medium group-hover:text-indigo-500 transition-colors">
                                        {topic.name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {topic.subject} • {topic.category}
                                    </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                            </div>
                        ))}

                        {filteredTopics.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <p>No topics found</p>
                                <p className="text-sm">Try a different search or add custom topic</p>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Custom Topic */}
                <div className="pt-4 border-t">
                    {showCustomInput ? (
                        <div className="flex gap-2">
                            <Input
                                placeholder="Enter custom topic name..."
                                value={customTopic}
                                onChange={(e) => setCustomTopic(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleAddCustomTopic();
                                    }
                                }}
                                autoFocus
                            />
                            <Button onClick={handleAddCustomTopic} disabled={!customTopic.trim()}>
                                Add
                            </Button>
                            <Button variant="ghost" onClick={() => setShowCustomInput(false)}>
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            className="w-full gap-2"
                            onClick={() => setShowCustomInput(true)}
                        >
                            <Plus className="w-4 h-4" />
                            Add Custom Topic
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
