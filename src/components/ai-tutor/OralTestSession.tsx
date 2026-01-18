"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Mic, Square, Play, Sparkles, Volume2, UserCheck, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Progress } from "@/components/ui/progress"

interface OralTestSessionProps {
    topic: string
    onComplete?: (score: number) => void
}

interface VivaState {
    status: 'idle' | 'listening' | 'processing' | 'feedback'
    question: string
    transcript: string
    feedback: any
}

export function OralTestSession({ topic, onComplete }: OralTestSessionProps) {
    const [state, setState] = useState<VivaState>({
        status: 'idle',
        question: "",
        transcript: "",
        feedback: null
    })
    const [isRecording, setIsRecording] = useState(false)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const chunksRef = useRef<Blob[]>([])

    // Generate question on mount
    useEffect(() => {
        generateQuestion()
    }, [topic])

    const generateQuestion = async () => {
        try {
            // Ask Guru for a question
            const response = await fetch('/api/v1/ai/tutor/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                body: JSON.stringify({
                    message: `Generate a tough oral viva question about ${topic}. Return JUST the question text.`,
                    context_context: "Examiner Mode"
                })
            })
            const data = await response.json()
            setState(prev => ({ ...prev, question: data.answer, status: 'idle', transcript: "", feedback: null }))

            // Auto-speak question
            speak(data.answer)
        } catch (e) {
            console.error(e)
            setState(prev => ({ ...prev, question: "Describe the core features of " + topic + ".", status: 'idle' }))
        }
    }

    const speak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 1.0
        utterance.pitch = 1.0
        window.speechSynthesis.speak(utterance)
    }

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            chunksRef.current = []

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data)
            }

            mediaRecorder.onstop = handleStop
            mediaRecorder.start()
            setIsRecording(true)
            setState(prev => ({ ...prev, status: 'listening' }))
        } catch (e) {
            toast.error("Microphone access denied")
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
            // Stop tracks
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
        }
    }

    const handleStop = async () => {
        setState(prev => ({ ...prev, status: 'processing' }))
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })

        // Convert to Base64
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = async () => {
            const base64Audio = (reader.result as string).split(',')[1]
            analyzeAudio(base64Audio)
        }
    }

    const analyzeAudio = async (base64Audio: string) => {
        try {
            const response = await fetch('/api/v1/voice-tutor/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
                body: JSON.stringify({
                    audio_base64: base64Audio,
                    context: `Answering viva question: ${state.question}`
                })
            })

            if (!response.ok) throw new Error("Analysis failed")

            const result = await response.json()
            setState(prev => ({
                ...prev,
                status: 'feedback',
                transcript: result.transcription,
                feedback: result
            }))

            if (onComplete && result.metrics) {
                const avg = (result.metrics.confidence_score + result.metrics.clarity_score) / 2
                onComplete(avg)
            }

        } catch (e) {
            console.error(e)
            toast.error("Evaluation failed")
            setState(prev => ({ ...prev, status: 'idle' }))
        }
    }

    return (
        <Card className="w-full max-w-2xl mx-auto border-indigo-200 dark:border-indigo-800 shadow-xl">
            <CardHeader className="bg-indigo-50 dark:bg-indigo-900/20 rounded-t-xl">
                <div className="flex items-center gap-2 mb-2">
                    <UserCheck className="w-6 h-6 text-indigo-600" />
                    <CardTitle>Oral Viva Simulator</CardTitle>
                </div>
                <CardDescription>Topic: {topic}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                {/* Examiner Question */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Examiner asks:</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-100 italic">
                        "{state.question}"
                    </p>
                    <Button variant="ghost" size="sm" className="mt-2 text-indigo-600" onClick={() => speak(state.question)}>
                        <Volume2 className="w-4 h-4 mr-2" /> Replay Question
                    </Button>
                </div>

                {/* Recording Controls */}
                <div className="flex flex-col items-center justify-center py-6">
                    {state.status === 'processing' ? (
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin" />
                            <p className="text-sm text-gray-500 animate-pulse">Examiner is evaluating...</p>
                        </div>
                    ) : (
                        <Button
                            size="lg"
                            className={cn(
                                "w-20 h-20 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105",
                                isRecording ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-indigo-600 hover:bg-indigo-700"
                            )}
                            onClick={isRecording ? stopRecording : startRecording}
                            disabled={state.status === 'processing'}
                        >
                            {isRecording ? <Square className="w-8 h-8 fill-current" /> : <Mic className="w-8 h-8" />}
                        </Button>
                    )}
                    <p className="mt-4 text-sm font-medium text-gray-600">
                        {isRecording ? "Listening... Click to Submit" : state.status === 'processing' ? "" : "Tap to Speak Answer"}
                    </p>
                </div>

                {/* Feedback Report */}
                {state.status === 'feedback' && state.feedback && (
                    <div className="animate-in slide-in-from-bottom-5 fade-in duration-500 space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
                            <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">Your Answer:</h4>
                            <p className="text-gray-700 dark:text-gray-300">"{state.transcript}"</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <div className="text-2xl font-bold text-blue-600">{state.feedback.metrics.confidence_score}/10</div>
                                <div className="text-xs text-blue-700">Confidence</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                <div className="text-2xl font-bold text-purple-600">{state.feedback.metrics.clarity_score}/10</div>
                                <div className="text-xs text-purple-700">Clarity</div>
                            </div>
                            <div className="text-center p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                                <div className="text-2xl font-bold text-emerald-600">{state.feedback.metrics.pronunciation_score}/10</div>
                                <div className="text-xs text-emerald-700">Pronunciation</div>
                            </div>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200/50">
                            <h4 className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-200 mb-2">
                                <Sparkles className="w-4 h-4" /> Feedback
                            </h4>
                            <ul className="list-disc ml-4 space-y-1 text-sm text-amber-900 dark:text-amber-100/90">
                                {state.feedback.feedback.improvements.map((tip: string, i: number) => (
                                    <li key={i}>{tip}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="justify-between border-t p-4 bg-gray-50 dark:bg-gray-900/50 rounded-b-xl">
                <Button variant="ghost" onClick={() => generateQuestion()}>Skip Question</Button>
                {state.status === 'feedback' && (
                    <Button onClick={() => generateQuestion()} className="group">
                        Next Question <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
