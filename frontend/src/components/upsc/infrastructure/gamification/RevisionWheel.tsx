import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Mic, RotateCcw, Award } from "lucide-react";

interface RevisionWheelProps {
    onClose: () => void;
}

// Placeholder topics (Real app would fetch these from completed cycles)
const TOPICS = [
    "Preamble of Constitution",
    "Fundamental Rights (Art 12-35)",
    "Directive Principles (DPSP)",
    "President's Powers",
    "Emergency Provisions",
    "Parliamentary Committees",
    "Supreme Court Jurisdiction",
    "Governor's Role"
];

export default function RevisionWheel({ onClose }: RevisionWheelProps) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [rotation, setRotation] = useState(0);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);

    const spinWheel = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        setSelectedTopic(null);

        // Random rotations (5-10 spins) + random slice
        const newRotation = rotation + 1800 + Math.random() * 360;
        setRotation(newRotation);

        setTimeout(() => {
            setIsSpinning(false);
            const randomTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
            setSelectedTopic(randomTopic);
        }, 3000);
    };

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        // Simulate recording logic
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl bg-card border-none shadow-2xl overflow-hidden relative">
                <Button
                    className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 p-0"
                    variant="ghost"
                    onClick={onClose}
                >
                    <X className="h-6 w-6" />
                </Button>

                <CardContent className="p-8">
                    {!selectedTopic ? (
                        <div className="flex flex-col items-center justify-center space-y-8 py-8">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Revision Wheel
                            </h2>
                            <p className="text-muted-foreground text-center max-w-md">
                                Spin the wheel to get a random topic from your completed modules.
                                Recall and record your summary to check retention!
                            </p>

                            {/* Wheel CSS Animation */}
                            <div className="relative w-64 h-64">
                                {/* Pointer */}
                                <div className="absolute top-0 left-1/2 -ml-4 -mt-4 w-8 h-8 z-20 text-indigo-600">
                                    ▼
                                </div>

                                {/* Wheel */}
                                <div
                                    className="w-full h-full rounded-full border-8 border-indigo-100 shadow-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-[3000ms] cubic-bezier(0.1, 0, 0.1, 1)"
                                    style={{ transform: `rotate(${rotation}deg)` }}
                                >
                                    <div className="text-white font-bold text-center p-8 opacity-50">
                                        ???
                                    </div>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 rounded-full"
                                onClick={spinWheel}
                                disabled={isSpinning}
                            >
                                {isSpinning ? "Spinning..." : "Spin Now"}
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center space-y-6 py-8 animate-in fade-in zoom-in duration-300">
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                                <Award className="h-10 w-10" />
                            </div>

                            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                                Your Topic
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground">
                                {selectedTopic}
                            </h3>

                            <div className="w-full max-w-md bg-muted rounded-xl p-6 border-2 border-dashed border-border mt-8">
                                <p className="text-center text-sm text-muted-foreground mb-4">
                                    Tap microphone to record your explanation (max 2 mins)
                                </p>
                                <div className="flex justify-center">
                                    <Button
                                        size="lg"
                                        variant={isRecording ? "destructive" : "default"}
                                        className={`rounded-full w-16 h-16 flex items-center justify-center ${isRecording ? "animate-pulse shadow-red-500/50" : "bg-indigo-600 hover:bg-indigo-700"
                                            }`}
                                        onClick={toggleRecording}
                                    >
                                        <Mic className="h-6 w-6" />
                                    </Button>
                                </div>
                                {isRecording && (
                                    <p className="text-center text-red-500 font-mono mt-4">
                                        Recording... 00:{recordingTime < 10 ? `0${recordingTime}` : recordingTime}
                                    </p>
                                )}
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button variant="outline" onClick={() => { setSelectedTopic(null); setRotation(0); }}>
                                    <RotateCcw className="mr-2 h-4 w-4" /> Spin Again
                                </Button>
                                <Button className="bg-green-600 hover:bg-green-700">
                                    Submit & Earn Coins
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
