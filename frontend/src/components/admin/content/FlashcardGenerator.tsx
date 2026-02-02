"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Save, Copy, FileJson, ArrowLeft } from 'lucide-react';
import { LAXMIKANTH_CHAPTERS } from '@/components/batch1/polity/data/polity-schedule-data';
import { CHAPTER_SUBTOPICS } from '@/components/batch1/polity/data/polity-subtopics';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

interface Flashcard {
    id: string;
    front: string;
    back: string;
}

export default function FlashcardGenerator() {
    const router = useRouter();
    const { toast } = useToast();

    const [selectedChapterId, setSelectedChapterId] = useState<string>("");
    const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>("all");

    // Form state
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");

    // List state
    const [cards, setCards] = useState<Flashcard[]>([]);

    // Filter subtopics based on chapter
    const availableSubtopics = useMemo(() => {
        if (!selectedChapterId) return [];
        return CHAPTER_SUBTOPICS[parseInt(selectedChapterId)] || [];
    }, [selectedChapterId]);

    const handleAddCard = () => {
        if (!front.trim() || !back.trim()) return;

        const newCard: Flashcard = {
            id: Date.now().toString(),
            front: front.trim(),
            back: back.trim()
        };

        setCards([...cards, newCard]);
        setFront(""); // Keep back potentially? No, clear both for new card
        setBack("");
    };

    const handleDeleteCard = (id: string) => {
        setCards(cards.filter(c => c.id !== id));
    };

    const handlePrepareForCommit = () => {
        if (cards.length === 0) return;

        const varName = `CHAPTER_${selectedChapterId}_FLASHCARDS`;
        const codeBlock = `import { Flashcard } from "../RevisionRegistry";

export const ${varName}: Flashcard[] = ${JSON.stringify(cards.map(c => ({
            id: parseInt(c.id), // Converting numeric string to number
            front: c.front,
            back: c.back
        })), null, 4)};`;

        navigator.clipboard.writeText(codeBlock);
        toast({
            title: "Ready for Commit",
            description: "TypeScript code block copied. Paste into the appropriate data file.",
        });
    };

    const handleExport = () => {
        const exportData = {
            chapterId: selectedChapterId,
            subtopicId: selectedSubtopicId,
            generatedAt: new Date().toISOString(),
            cards: cards.map(({ front, back }) => ({ front, back }))
        };

        const json = JSON.stringify(exportData, null, 2);

        // Copy to clipboard
        navigator.clipboard.writeText(json);
        toast({
            title: "Copied to Clipboard",
            description: "JSON data ready to be pasted into codebase.",
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <h1 className="text-2xl font-bold">Flashcard Generator</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Input Form */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Configuration</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Chapter</Label>
                                <Select value={selectedChapterId} onValueChange={setSelectedChapterId}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Chapter" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-60">
                                        {LAXMIKANTH_CHAPTERS.map(ch => (
                                            <SelectItem key={ch.chapter} value={ch.chapter.toString()}>
                                                {ch.chapter}. {ch.topic}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Subtopic (Optional)</Label>
                                <Select value={selectedSubtopicId} onValueChange={setSelectedSubtopicId} disabled={!selectedChapterId}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Subtopic" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Subtopics</SelectItem>
                                        {availableSubtopics.map(sub => (
                                            <SelectItem key={sub.id} value={sub.id}>
                                                {sub.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>New Card</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Front (Question/Term)</Label>
                                <Textarea
                                    placeholder="e.g. What is Article 12?"
                                    value={front}
                                    onChange={(e) => setFront(e.target.value)}
                                    className="min-h-[100px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Back (Answer/Definition)</Label>
                                <Textarea
                                    placeholder="e.g. Definition of State..."
                                    value={back}
                                    onChange={(e) => setBack(e.target.value)}
                                    className="min-h-[100px]"
                                />
                            </div>

                            <Button onClick={handleAddCard} className="w-full" disabled={!selectedChapterId}>
                                <Plus className="w-4 h-4 mr-2" /> Add Card
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Preview List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">
                            Generated Cards ({cards.length})
                        </h2>
                        <div className="flex gap-2">
                            <Button variant="default" size="sm" onClick={handlePrepareForCommit} disabled={cards.length === 0} className="bg-indigo-600 hover:bg-indigo-700">
                                <Plus className="w-4 h-4 mr-2" />
                                Prepare for Commit
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleExport} disabled={cards.length === 0}>
                                <FileJson className="w-4 h-4 mr-2 text-green-600" />
                                Export JSON
                            </Button>
                        </div>
                    </div>

                    {cards.length === 0 ? (
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center text-gray-400">
                            No cards generated yet. Start adding!
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cards.map((card, idx) => (
                                <Card key={card.id} className="relative group hover:shadow-md transition-all">
                                    <CardContent className="p-4 space-y-3">
                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-6 w-6 text-red-500" onClick={() => handleDeleteCard(card.id)}>
                                                <Trash2 className="w-3 h-3" />
                                            </Button>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Front</span>
                                            <p className="text-sm font-medium mt-1 line-clamp-3">{card.front}</p>
                                        </div>
                                        <div className="border-t pt-2">
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Back</span>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">{card.back}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
