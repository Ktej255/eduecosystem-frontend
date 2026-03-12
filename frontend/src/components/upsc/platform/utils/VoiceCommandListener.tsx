"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Mic, MicOff, Command } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceCommandListener() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const recognitionRef = useRef<any>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true; // Keep listening
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event: any) => {
                const last = event.results.length - 1;
                const text = event.results[last][0].transcript.trim().toLowerCase();
                setTranscript(text);
                processCommand(text);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error("Speech Error", event.error);
                if (event.error === 'not-allowed') {
                    setIsListening(false);
                    toast.error("Microphone access denied.");
                }
            };

            recognitionRef.current.onend = () => {
                // Auto-restart if it was supposed to be listening (unless manually stopped)
                if (isListening) {
                    try {
                        recognitionRef.current.start();
                    } catch (e) {
                        // ignore already started errors
                    }
                }
            };
        }
    }, [isListening, router]); // Dependency on router to capture it in closure if needed

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
            toast("Voice commands disabled.", { icon: '🔇' });
        } else {
            try {
                recognitionRef.current?.start();
                setIsListening(true);
                toast("Listening for commands...", { icon: '🎙️' });
            } catch (e) {
                console.error(e);
            }
        }
    };

    const processCommand = (text: string) => {
        console.log("Command:", text);

        // Navigation Mappings
        if (text.includes("dashboard") || text.includes("home")) {
            router.push('/student/batch1-1');
            toast.success("Navigating to Dashboard");
        }
        else if (text.includes("wellness") || text.includes("bio rhythm")) {
            router.push('/student/upsc/wellness');
            toast.success("Opening Wellness Hub");
        }
        else if (text.includes("mind map")) {
            router.push('/student/upsc/mindmap');
            toast.success("Opening Mind Map");
        }
        else if (text.includes("community") || text.includes("library")) {
            router.push('/student/upsc/community');
            toast.success("Opening Silence Library");
        }
        else if (text.includes("socratic") || text.includes("tutor")) {
            // Maybe trigger widget open? For now just visual checking
            toast("Socratic Tutor is in the sidebar!");
        }
        else if (text.includes("productivity") || text.includes("quiz")) {
            router.push('/student/upsc/productivity');
            toast.success("Opening Productivity Tools");
        }
    };

    // Render a small floating indicator when listening
    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
            <AnimatePresence>
                {transcript && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-mono mb-2"
                    >
                        "{transcript}"
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleListening}
                className={`pointer-events-auto h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening
                        ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                title="Toggle Voice Commands"
            >
                {isListening ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
            </button>
        </div>
    );
}
