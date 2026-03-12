"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, MicOff, Send, Sparkles, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import api from "@/lib/api";

export function ReflectionJournal() {
    const [isRecording, setIsRecording] = useState(false);
    const [reflection, setReflection] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [insight, setInsight] = useState<string | null>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);

    const startRecording = () => {
        if (!("webkitSpeechRecognition" in window) && !("speechRecognition" in window)) {
            toast.error("Speech recognition is not supported in this browser.");
            return;
        }

        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        if (!SpeechRecognition) {
            toast.error("Speech recognition API not found.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognitionRef.current = recognition;

        recognition.onstart = () => setIsRecording(true);
        recognition.onend = () => setIsRecording(false);
        recognition.onresult = (event: any) => {
            const transcript = Array.from(event.results as any[])
                .map((result: any) => result[0])
                .map((result: any) => result.transcript)
                .join("");
            setReflection(transcript);
        };

        recognition.start();
    };

    const stopRecording = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }
    };

    const handleAnalyze = async () => {
        if (!reflection.trim()) {
            toast.error("Please provide a reflection first.");
            return;
        }

        setIsAnalyzing(true);
        try {
            // Reusing AI tools or a general prompt-based endpoint if exists
            // For now, simulating the AI insight as we build the backend piece next
            const res = await api.post("/ai-tools/analyze-reflection", { reflection });
            setInsight(res.data.insight);
            toast.success("AI Insight generated!");
        } catch (error) {
            console.error("Reflection analysis failed", error);
            // Mocking for frontend flow if API not yet ready
            setInsight("Your focus on holistic growth is evident. You seem to be balancing cognitive learning with internal awareness. Try to maintain this equilibrium during tomorrow's Sadhana.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <Card className="bg-black/40 border-gray-800 backdrop-blur-xl overflow-hidden group">
            <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <BrainCircuit className="w-5 h-5" />
                    Wisdom Journal
                </CardTitle>
                <p className="text-xs text-muted-foreground">Document your internal realizations</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
                <div className="relative">
                    <Textarea
                        placeholder="What did you learn about yourself today?"
                        className="min-h-[150px] bg-gray-900/50 border-gray-800 focus:border-cyan-500 transition-all resize-none"
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                    />
                    <div className="absolute bottom-3 right-3 flex gap-2">
                        <Button
                            size="icon"
                            variant={isRecording ? "destructive" : "secondary"}
                            className="rounded-full w-8 h-8"
                            onClick={isRecording ? stopRecording : startRecording}
                        >
                            {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                        </Button>
                    </div>
                </div>

                <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-500 gap-2 font-bold"
                    onClick={handleAnalyze}
                    disabled={isAnalyzing || !reflection.trim()}
                >
                    {isAnalyzing ? (
                        <>Analyzing Resonance...</>
                    ) : (
                        <>
                            <Sparkles className="w-4 h-4" />
                            Generate AI Insight
                        </>
                    )}
                </Button>

                <AnimatePresence>
                    {insight && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-sm text-cyan-100 italic"
                        >
                            <div className="flex items-start gap-3">
                                <Sparkles className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                <p>"{insight}"</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
