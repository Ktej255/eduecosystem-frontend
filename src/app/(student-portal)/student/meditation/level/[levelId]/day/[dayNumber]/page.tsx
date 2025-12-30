"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Play, CheckCircle2, Video, Clock, ChevronRight, Sparkles, Maximize2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { meditationService, MeditationDayOverview, MeditationProcessInfo } from "@/services/meditationService";
import dynamic from "next/dynamic";

// Dynamic import for the full meditation player (heavy component)
const MeditationPlayer = dynamic(
    () => import("@/components/meditation/MeditationPlayer"),
    {
        ssr: false,
        loading: () => (
            <div className="fixed inset-0 bg-black flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
        )
    }
);

export default function MeditationDayPage() {
    const params = useParams();
    const router = useRouter();
    const levelId = parseInt(params.levelId as string);
    const dayNumber = parseInt(params.dayNumber as string);

    const [dayData, setDayData] = useState<MeditationDayOverview | null>(null);
    const [loading, setLoading] = useState(true);
    const [completingProcess, setCompletingProcess] = useState<number | null>(null);
    const [completingDay, setCompletingDay] = useState(false);
    const [currentVideoProcess, setCurrentVideoProcess] = useState<MeditationProcessInfo | null>(null);
    const [isImmersiveMode, setIsImmersiveMode] = useState(false);
    const [currentStreak, setCurrentStreak] = useState(0);

    useEffect(() => {
        if (levelId && dayNumber) {
            loadDayData();
        }
    }, [levelId, dayNumber]);

    const loadDayData = async () => {
        try {
            setLoading(true);
            const data = await meditationService.getDayProcesses(levelId, dayNumber);
            setDayData(data);

            // Also get overview for streak info
            try {
                const overview = await meditationService.getOverview();
                setCurrentStreak(overview.total_streak);
            } catch (e) {
                console.log("Could not get streak");
            }
        } catch (err: any) {
            console.error("Failed to load day:", err);
            toast.error(err.message || "Failed to load day data");
        } finally {
            setLoading(false);
        }
    };

    // Convert MeditationProcessInfo to MeditationProcess format for player
    const processesForPlayer = useMemo(() => {
        if (!dayData) return [];
        return dayData.processes.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            order: p.order,
            duration_seconds: p.duration_minutes * 60, // Convert to seconds
            video_url: p.video_url || undefined,
            announcement_audio_url: undefined,
            background_music_url: undefined,
            bell_sound_url: undefined
        }));
    }, [dayData]);

    // Identify new processes for tutorial mode
    const newProcessesForPlayer = useMemo(() => {
        if (!dayData?.is_unlock_day || !dayData.new_process_start || !dayData.new_process_end) {
            return [];
        }
        return processesForPlayer.filter(
            p => p.order >= dayData.new_process_start! && p.order <= dayData.new_process_end!
        );
    }, [dayData, processesForPlayer]);

    const handleCompleteProcess = async (process: MeditationProcessInfo, watchedVideo: boolean = false) => {
        if (!dayData) return;
        if (dayData.completed_processes.includes(process.id)) return;

        try {
            setCompletingProcess(process.id);
            const result = await meditationService.completeProcess(levelId, dayNumber, process.id, watchedVideo);

            if (result.success) {
                await loadDayData();
                toast.success(result.message);

                if (result.all_processes_done) {
                    toast.success("All processes completed! You can now complete the day.");
                }
            }
        } catch (err: any) {
            toast.error(err.message || "Failed to complete process");
        } finally {
            setCompletingProcess(null);
            setCurrentVideoProcess(null);
        }
    };

    const handleCompleteDay = async () => {
        if (!dayData) return;

        try {
            setCompletingDay(true);
            const result = await meditationService.completeDay(levelId, dayNumber, "morning");

            if (result.success) {
                toast.success(result.message);

                if (result.level_completed) {
                    toast.success("Congratulations! You've completed this level!");
                }

                setTimeout(() => {
                    router.push(`/student/meditation/level/${levelId}`);
                }, 1500);
            }
        } catch (err: any) {
            toast.error(err.message || "Failed to complete day");
        } finally {
            setCompletingDay(false);
        }
    };

    const isProcessNew = (processOrder: number) => {
        if (!dayData?.is_unlock_day || !dayData.new_process_start || !dayData.new_process_end) return false;
        return processOrder >= dayData.new_process_start && processOrder <= dayData.new_process_end;
    };

    const getLevelColor = (level: number) => {
        const colors = {
            1: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400" },
            2: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400" },
            3: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-600 dark:text-orange-400" },
            4: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600 dark:text-green-400" }
        };
        return colors[level as keyof typeof colors] || colors[1];
    };

    // Show immersive meditation player
    if (isImmersiveMode && dayData) {
        return (
            <MeditationPlayer
                levelId={levelId}
                dayNumber={dayNumber}
                processes={processesForPlayer}
                isUnlockDay={dayData.is_unlock_day}
                newProcesses={newProcessesForPlayer}
                currentStreak={currentStreak}
            />
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!dayData) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500">Failed to load day data</p>
                <Button onClick={() => router.push(`/student/meditation/level/${levelId}`)} className="mt-4">
                    Back to Level
                </Button>
            </div>
        );
    }

    const colors = getLevelColor(levelId);
    const allCompleted = dayData.processes.every(p => dayData.completed_processes.includes(p.id));
    const completedCount = dayData.completed_processes.length;
    const totalDuration = dayData.processes.reduce((sum, p) => sum + p.duration_minutes, 0);

    return (
        <div className="space-y-6 max-w-3xl mx-auto p-4 md:p-6">
            {/* Back Button */}
            <Button variant="ghost" onClick={() => router.push(`/student/meditation/level/${levelId}`)} className="text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Level {levelId}
            </Button>

            {/* Day Header */}
            <Card className={`${colors.bg} border-0`}>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className={`text-2xl font-bold ${colors.text}`}>
                                Day {dayNumber} - Meditation Practice
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">
                                {dayData.total_processes} processes • ~{totalDuration} min
                            </p>
                            {dayData.is_unlock_day && (
                                <div className="flex items-center gap-2 mt-2 text-green-600">
                                    <Sparkles className="h-4 w-4" />
                                    <span className="text-sm font-medium">
                                        New processes {dayData.new_process_start}-{dayData.new_process_end} unlocked today!
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="text-right">
                            <div className={`text-3xl font-bold ${colors.text}`}>
                                {completedCount}/{dayData.processes.length}
                            </div>
                            <div className="text-sm text-gray-500">Completed</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Launch Immersive Session Button */}
            {!dayData.is_day_completed && (
                <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Maximize2 className="h-5 w-5" />
                                    Immersive Meditation Session
                                </h3>
                                <p className="text-indigo-100 text-sm mt-1">
                                    Full-screen guided experience with timers, audio & auto-transitions
                                </p>
                            </div>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={() => setIsImmersiveMode(true)}
                                className="whitespace-nowrap"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Start Session
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Video Player Modal */}
            {currentVideoProcess && currentVideoProcess.video_url && (
                <Card className="border-2 border-primary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Video className="h-5 w-5" />
                            Explanation Video: {currentVideoProcess.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                            <video
                                src={currentVideoProcess.video_url}
                                controls
                                autoPlay
                                className="w-full h-full"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                onClick={() => handleCompleteProcess(currentVideoProcess, true)}
                                disabled={completingProcess === currentVideoProcess.id}
                                className="flex-1"
                            >
                                {completingProcess === currentVideoProcess.id ? "Completing..." : "I've Watched & Completed"}
                                <CheckCircle2 className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" onClick={() => setCurrentVideoProcess(null)}>
                                Cancel
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Process List */}
            <div className="space-y-3">
                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">Today's Processes</h2>

                {dayData.processes.map((process) => {
                    const isCompleted = dayData.completed_processes.includes(process.id);
                    const isNew = isProcessNew(process.order);
                    const hasVideo = !!process.video_url;
                    const showVideo = isNew && dayData.is_unlock_day && hasVideo && !isCompleted;

                    return (
                        <Card
                            key={process.id}
                            className={`transition-all ${isCompleted ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : ''
                                } ${isNew ? 'ring-2 ring-yellow-400' : ''}`}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center gap-4">
                                    {/* Status Icon */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-800'
                                        }`}>
                                        {isCompleted ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                                        ) : (
                                            <span className="text-gray-600 dark:text-gray-400 font-bold">{process.order}</span>
                                        )}
                                    </div>

                                    {/* Process Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className={`font-semibold ${isCompleted ? 'text-green-700 dark:text-green-400' : 'text-gray-800 dark:text-gray-200'}`}>
                                                {process.name}
                                            </h3>
                                            {isNew && (
                                                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full font-medium">
                                                    NEW
                                                </span>
                                            )}
                                            {hasVideo && (
                                                <Video className="h-4 w-4 text-blue-500" />
                                            )}
                                        </div>
                                        {process.description && (
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {process.description}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                                            <Clock className="h-3 w-3" />
                                            {process.duration_minutes} min
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div>
                                        {isCompleted ? (
                                            <span className="text-green-600 text-sm font-medium">Done ✓</span>
                                        ) : showVideo ? (
                                            <Button
                                                size="sm"
                                                onClick={() => setCurrentVideoProcess(process)}
                                            >
                                                <Play className="mr-1 h-4 w-4" />
                                                Watch & Do
                                            </Button>
                                        ) : (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => handleCompleteProcess(process, false)}
                                                disabled={completingProcess === process.id}
                                            >
                                                {completingProcess === process.id ? "..." : "Done"}
                                                <ChevronRight className="ml-1 h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Complete Day Button */}
            {allCompleted && !dayData.is_day_completed && (
                <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
                    <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">All Processes Completed! 🎉</h3>
                        <p className="text-green-100 mb-4">Great job! Mark this day as complete to continue.</p>
                        <Button
                            size="lg"
                            variant="secondary"
                            onClick={handleCompleteDay}
                            disabled={completingDay}
                        >
                            {completingDay ? "Completing..." : "Complete Day " + dayNumber}
                            <CheckCircle2 className="ml-2 h-5 w-5" />
                        </Button>
                    </CardContent>
                </Card>
            )}

            {dayData.is_day_completed && (
                <Card className="bg-gray-100 dark:bg-gray-800 border-0">
                    <CardContent className="p-6 text-center">
                        <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Day Completed!</h3>
                        <p className="text-gray-500 mt-2">Come back tomorrow for the next session.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
