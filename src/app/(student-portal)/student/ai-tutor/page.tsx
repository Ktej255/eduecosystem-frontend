"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Mic, Swords, BookOpen, MessageSquare } from "lucide-react"
import { OralTestSession } from "@/components/ai-tutor/OralTestSession"
import DebateArena from "@/components/ai-tutor/DebateArena"
import { GuruChatWidget } from "@/components/ai-tutor/GuruChatWidget" // We'll just use the float for now or a placeholder inline

export default function AITutorPage() {
    const [selectedTopic, setSelectedTopic] = useState("Indian Constitution Essentials")

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                    <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        AI Socratic Tutor
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Master concepts through conversation, voice, and debate.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-xl">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                        Current Focus: {selectedTopic}
                    </span>
                </div>
            </div>

            <Tabs defaultValue="guru" className="space-y-6">
                <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto h-12">
                    <TabsTrigger value="guru" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" /> The Guru
                    </TabsTrigger>
                    <TabsTrigger value="viva" className="flex items-center gap-2">
                        <Mic className="w-4 h-4" /> Oral Viva
                    </TabsTrigger>
                    <TabsTrigger value="debate" className="flex items-center gap-2">
                        <Swords className="w-4 h-4" /> Debate
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="guru" className="space-y-4">
                    <Card className="min-h-[500px] border-neutral-200 dark:border-neutral-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-indigo-500" />
                                Contextual Chat
                            </CardTitle>
                            <CardDescription>
                                Ask questions about your study materials. The Guru knows the context of all uploaded PDFs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="h-[400px] flex items-center justify-center border-t bg-gray-50/50">
                            <div className="text-center text-gray-500">
                                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Use the floating "Guru" widget at the bottom right to chat anytime!</p>
                                <p className="text-sm mt-2">(We'll bring an immersive full-screen chat here soon)</p>
                            </div>
                        </CardContent>
                    </Card>
                    {/* The float is global or added here if needed, but layout has it. 
                        If layout has it, we don't need to add it here again if it overlaps.
                        But for this specific page, maybe we want it inline.
                    */}
                </TabsContent>

                <TabsContent value="viva">
                    <div className="max-w-3xl mx-auto">
                        <OralTestSession topic={selectedTopic} />
                    </div>
                </TabsContent>

                <TabsContent value="debate">
                    <div className="max-w-3xl mx-auto">
                        <DebateArena />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
