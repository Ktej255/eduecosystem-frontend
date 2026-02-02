"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface VoiceInputProps {
    onTranscript: (text: string) => void;
    isListening?: boolean;
    onStateChange?: (isListening: boolean) => void;
    className?: string;
    placeholder?: string;
}

export default function VoiceInput({
    onTranscript,
    isListening: externalIsListening,
    onStateChange,
    className,
    placeholder = "Speak now..."
}: VoiceInputProps) {
    const [listening, setListening] = useState(false);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
    const [transcript, setTranscript] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognitionInstance = new SpeechRecognition();
                recognitionInstance.continuous = false;
                recognitionInstance.interimResults = true;
                recognitionInstance.lang = 'en-US';

                recognitionInstance.onstart = () => {
                    setListening(true);
                    onStateChange?.(true);
                };

                recognitionInstance.onend = () => {
                    setListening(false);
                    onStateChange?.(false);
                };

                recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
                    let interimTranscript = '';
                    let finalTranscript = '';

                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript;
                        } else {
                            interimTranscript += event.results[i][0].transcript;
                        }
                    }

                    if (finalTranscript) {
                        onTranscript(finalTranscript);
                        setTranscript(""); // Clear internal state after sending
                    } else {
                        setTranscript(interimTranscript);
                    }
                };

                recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
                    console.error("Speech recognition error", event.error);
                    setListening(false);
                    onStateChange?.(false);
                    if (event.error === 'not-allowed') {
                        toast.error("Microphone access denied.");
                    } else if (event.error === 'no-speech') {
                        // Ignore no-speech errors usually
                    } else {
                        toast.error("Voice input error: " + event.error);
                    }
                };

                setRecognition(recognitionInstance);
            } else {
                console.warn("Speech Recognition API not supported in this browser.");
            }
        }
    }, [onTranscript, onStateChange]);

    const toggleListening = useCallback(() => {
        if (!recognition) {
            toast.error("Voice input is not supported in this browser.");
            return;
        }

        if (listening) {
            recognition.stop();
        } else {
            try {
                recognition.start();
                setTranscript("");
            } catch (error) {
                console.error("Failed to start recognition:", error);
            }
        }
    }, [listening, recognition]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (recognition && listening) {
                recognition.stop();
            }
        };
    }, [recognition, listening]);

    return (
        <div className={cn("relative inline-flex items-center gap-2", className)}>
            <Button
                size="icon"
                variant={listening ? "destructive" : "outline"}
                className={cn(
                    "rounded-full transition-all duration-300 shadow-sm",
                    listening ? "animate-pulse ring-4 ring-red-500/20" : "hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
                onClick={toggleListening}
                title={listening ? "Stop listening" : "Start voice input"}
            >
                {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>

            {listening && (
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-neutral-900/90 text-white text-xs px-3 py-1.5 rounded-full shadow-lg pointer-events-none animate-in fade-in slide-in-from-left-2 z-50 flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin text-red-400" />
                    <span>{transcript || placeholder}</span>
                </div>
            )}
        </div>
    );
}
