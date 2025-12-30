"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, HelpCircle, CheckCircle, XCircle } from 'lucide-react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correct_answer: string; // "A", "B", "C", "D"
    explanation: string;
    timestamp?: number; // Time in seconds to pause (optional, feature for later)
}

interface InteractiveVideoPlayerProps {
    src: string;
    questions?: Question[];
    title?: string;
    onComplete?: (score: number) => void;
    poster?: string;
}

export default function InteractiveVideoPlayer({ src, questions = [], title, onComplete, poster }: InteractiveVideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Quiz State
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Toggle Play/Pause
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    // Trigger Quiz manually (or could be time-triggered)
    const triggerQuiz = () => {
        if (videoRef.current) videoRef.current.pause();
        setIsPlaying(false);
        setShowQuiz(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const handleOptionSelect = (optionIndex: number) => {
        if (isAnswered) return;

        const options = ["A", "B", "C", "D"];
        const selected = options[optionIndex];
        setSelectedOption(selected);
        setIsAnswered(true);

        const currentQ = questions[currentQuestionIndex];
        if (selected === currentQ.correct_answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            // Quiz Complete
            setShowQuiz(false);
            if (onComplete) onComplete(score);
            alert(`Quiz Complete! Score: ${score + (selectedOption === questions[currentQuestionIndex].correct_answer ? (isAnswered ? 0 : 1) : 0)}/${questions.length}`);
            // Resume video
            if (videoRef.current) videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black group">

            {/* Standard Video Element */}
            <video
                ref={videoRef}
                src={src}
                className="w-full h-auto cursor-pointer"
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                poster={poster || "/placeholder-video-poster.jpg"}
            />

            {/* Quiz Overlay */}
            {showQuiz && questions.length > 0 && (
                <div className="absolute inset-0 bg-black/90 z-20 flex items-center justify-center p-4">
                    <div className="w-full max-w-lg bg-white dark:bg-gray-900 border-indigo-500 border-2 rounded-xl shadow-2xl">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">
                                    Question {currentQuestionIndex + 1}/{questions.length}
                                </span>
                                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                                    Recall Check
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                {questions[currentQuestionIndex].question}
                            </h3>

                            <div className="space-y-3 mb-6">
                                {questions[currentQuestionIndex].options.map((opt, idx) => {
                                    const letter = ["A", "B", "C", "D"][idx];
                                    let btnClass = "w-full flex items-center justify-start text-left p-4 rounded-lg border-2 transition-all ";

                                    if (isAnswered) {
                                        if (letter === questions[currentQuestionIndex].correct_answer) {
                                            btnClass += "bg-green-50 border-green-500 text-green-700";
                                        } else if (selectedOption === letter) {
                                            btnClass += "bg-red-50 border-red-500 text-red-700";
                                        } else {
                                            btnClass += "border-gray-200 opacity-50";
                                        }
                                    } else if (selectedOption === letter) {
                                        btnClass += "border-indigo-500 bg-indigo-50 text-indigo-700";
                                    } else {
                                        btnClass += "border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800";
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            className={btnClass}
                                            onClick={() => handleOptionSelect(idx)}
                                            disabled={isAnswered}
                                        >
                                            <span className="font-bold mr-3 text-gray-400">{letter}.</span>
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>

                            {isAnswered && (
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-blue-800 dark:text-blue-300 block mb-1">Explanation</span>
                                            <p className="text-sm text-blue-700 dark:text-blue-200">
                                                {questions[currentQuestionIndex].explanation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isAnswered && (
                                <button
                                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                                    onClick={handleNextQuestion}
                                >
                                    {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Quiz"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Controls (Simplified) */}
            {!showQuiz && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                            <button onClick={togglePlay} className="hover:text-indigo-400 transition-colors">
                                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                            </button>
                            <span className="text-sm font-mono">
                                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} /
                                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                            </span>
                        </div>

                        {/* Feature: Take Quiz Button */}
                        {questions.length > 0 && (
                            <button
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                                onClick={triggerQuiz}
                            >
                                <HelpCircle className="w-4 h-4" />
                                Take Recall Quiz
                            </button>
                        )}
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer" onClick={(e) => {
                        // Simple seek logic could go here
                    }}>
                        <div
                            className="h-full bg-indigo-500"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
