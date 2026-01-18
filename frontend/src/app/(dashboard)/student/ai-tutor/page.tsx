"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Speech, BookOpen, Quote, Sparkles } from "lucide-react";
import { VoiceRecorder } from "@/components/ai-tutor/VoiceRecorder";

const TOPICS = [
    {
        id: "affirmation",
        title: "Daily Affirmation",
        description: "Practice positive self-talk and confidence.",
        context: "Student is reciting a daily affirmation. Focus on confidence, clarity, and positive tone.",
        icon: Sparkles,
        color: "text-yellow-500",
        prompts: [
            "I am capable of mastering any subject I focus on.",
            "My potential is limitless, and I grow every day.",
            "I speak with clarity, purpose, and truth."
        ]
    },
    {
        id: "sanskrit",
        title: "Sanskrit Verse",
        description: "Perfect your pronunciation of ancient wisdom.",
        context: "Student is reciting a Sanskrit Mantora. Focus on precise pronunciation, rhythm, and devotion.",
        icon: BookOpen,
        color: "text-orange-500",
        prompts: [
            "Om Bhur Bhuva Swaha (Gayatri Mantra)",
            "Satyam Vada, Dharmam Chara (Speak Truth, Follow Dharma)",
            "Sanghe Shakti Kali Yuge (Unity is Strength)"
        ]
    },
    {
        id: "interview",
        title: "Interview Prep",
        description: "Practice answering common interview questions.",
        context: "Student is answering an interview question. Focus on professional tone, structure, and clarity.",
        icon: Speech,
        color: "text-blue-500",
        prompts: [
            "Tell me about yourself.",
            "What is your greatest strength?",
            "Why do you want to learn Graphology?"
        ]
    }
];

export default function AITutorPage() {
    const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
    const [activePrompt, setActivePrompt] = useState(TOPICS[0].prompts[0]);

    return (
        <div className="container mx-auto py-8 px-4 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                    <Mic className="w-8 h-8 text-cyan-500" />
                    Voice of Wisdom AI Tutor
                </h1>
                <p className="text-gray-400">
                    Master your voice, pronunciation, and confidence with real-time AI feedback.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sidebar: Topic Selection */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-lg mb-4">Choose Practice Area</h2>
                    {TOPICS.map((topic) => (
                        <Card
                            key={topic.id}
                            className={`cursor-pointer transition-all hover:bg-gray-800 border-gray-800 ${selectedTopic.id === topic.id ? "ring-2 ring-cyan-500 bg-gray-800/50" : "bg-gray-900"}`}
                            onClick={() => {
                                setSelectedTopic(topic);
                                setActivePrompt(topic.prompts[0]);
                            }}
                        >
                            <CardContent className="p-4 flex items-start gap-4">
                                <div className={`p-2 rounded-lg bg-gray-800 ${topic.color}`}>
                                    <topic.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">{topic.title}</h3>
                                    <p className="text-xs text-gray-400">{topic.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Area: Practice & Feedback */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Quote className="w-5 h-5 text-gray-500" />
                                Practice Prompt
                            </CardTitle>
                            <CardDescription>
                                Read the following text aloud clearly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-serif text-center py-8 px-4 bg-gray-900/50 rounded-lg border border-gray-800 mb-6 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                                "{activePrompt}"
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-8">
                                {selectedTopic.prompts.map((prompt, i) => (
                                    <Button
                                        key={i}
                                        variant={activePrompt === prompt ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setActivePrompt(prompt)}
                                        className="text-xs"
                                    >
                                        Option {i + 1}
                                    </Button>
                                ))}
                            </div>

                            <div className="border-t border-gray-800 pt-8">
                                <VoiceRecorder context={`${selectedTopic.context} Prompt: "${activePrompt}"`} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
