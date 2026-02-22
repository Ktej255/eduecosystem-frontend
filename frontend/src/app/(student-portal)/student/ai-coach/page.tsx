
"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AICoachChat from "@/components/features/ai-coach/AICoachChat";
import CustomTestGenerator from "@/components/features/ai-coach/CustomTestGenerator";
import { BrainCircuit, MessageSquareText, PenTool } from "lucide-react";

export default function AICoachPage() {
    return (
        <div className="container mx-auto py-8 max-w-5xl space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <BrainCircuit className="w-8 h-8 text-indigo-600" />
                    AI Learning Assistant
                </h1>
                <p className="text-muted-foreground text-lg">
                    Your personal 24/7 UPSC tutor. Chat with the AI Coach to clear doubts or generate custom tests from your notes.
                </p>
            </div>

            <Tabs defaultValue="coach" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:w-[400px] mb-8">
                    <TabsTrigger value="coach" className="flex items-center gap-2">
                        <MessageSquareText className="w-4 h-4" />
                        AI Coach
                    </TabsTrigger>
                    <TabsTrigger value="test" className="flex items-center gap-2">
                        <PenTool className="w-4 h-4" />
                        Test Generator
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="coach" className="space-y-4 animate-in fade-in-50 duration-500 slide-in-from-bottom-2">
                    <AICoachChat />
                </TabsContent>

                <TabsContent value="test" className="space-y-4 animate-in fade-in-50 duration-500 slide-in-from-bottom-2">
                    <CustomTestGenerator />
                </TabsContent>
            </Tabs>
        </div>
    );
}
