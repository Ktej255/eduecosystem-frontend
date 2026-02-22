"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Save, Loader2, Sparkles, AlertCircle, FileText, Video as VideoIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import batch1Service, { DayContentResponse, SegmentData } from "@/services/batch1Service";

// Mock data for initial dev
const CYCLES = [
    { id: 1, name: "Cycle 1 (History)", days: 10 },
    { id: 2, name: "Cycle 2 (Polity)", days: 15 },
];

export default function Batch1ManagerPage() {
    const [selectedCycle, setSelectedCycle] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedPart, setSelectedPart] = useState(1); // 1=Morning, 2=Evening, 3=Night

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState<DayContentResponse | null>(null);
    const [activeSegment, setActiveSegment] = useState(0); // Index 0-3
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    // Fetch data when selection changes
    useEffect(() => {
        loadContent();
    }, [selectedCycle, selectedDay, selectedPart]);

    const loadContent = async () => {
        try {
            setLoading(true);
            setMessage(null);
            const data = await batch1Service.getPartContent(selectedCycle, selectedDay, selectedPart);
            setContent(data);
            // Reset segment input states
            setActiveSegment(0);
            setVideoFile(null);
        } catch (error) {
            console.error("Failed to load content", error);
            setMessage({ type: 'error', text: "Failed to load content for this day." });
        } finally {
            setLoading(false);
        }
    };

    const handleSaveSegment = async () => {
        if (!content) return;

        const segment = content.segments[activeSegment];
        const segNum = activeSegment + 1;

        try {
            setSaving(true);
            setMessage(null);

            await batch1Service.saveSegment(
                selectedCycle,
                selectedDay,
                selectedPart,
                segNum,
                segment.title,
                segment.key_points,
                videoFile || undefined
            );

            setMessage({ type: 'success', text: `Segment ${segNum} saved successfully! Transcription started.` });

            // Reload to get updated URLs etc
            await loadContent();

        } catch (error) {
            console.error("Failed to save segment", error);
            setMessage({ type: 'error', text: "Failed to save segment. Please try again." });
        } finally {
            setSaving(false);
        }
    };

    const updateSegmentState = (field: keyof SegmentData, value: string) => {
        if (!content) return;
        const newSegments = [...content.segments];
        newSegments[activeSegment] = { ...newSegments[activeSegment], [field]: value };
        setContent({ ...content, segments: newSegments });
    };

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Batch 1 Content Manager</h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">Manage daily videos and AI-driven content</p>
                </div>

                <div className="flex gap-2">
                    <Select value={String(selectedCycle)} onValueChange={(v) => setSelectedCycle(Number(v))}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Cycle" />
                        </SelectTrigger>
                        <SelectContent>
                            {CYCLES.map(c => <SelectItem key={c.id} value={String(c.id)}>{c.name}</SelectItem>)}
                        </SelectContent>
                    </Select>

                    <Select value={String(selectedDay)} onValueChange={(v) => setSelectedDay(Number(v))}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Day" />
                        </SelectTrigger>
                        <SelectContent>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <SelectItem key={i + 1} value={String(i + 1)}>Day {i + 1}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={String(selectedPart)} onValueChange={(v) => setSelectedPart(Number(v))}>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Session" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">Morning (Concept)</SelectItem>
                            <SelectItem value="2">Evening (Practice)</SelectItem>
                            <SelectItem value="3">Night (Review)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {message && (
                <Alert variant={message.type === 'success' ? "default" : "destructive"} className={message.type === 'success' ? "border-green-500 bg-green-50 text-green-800" : ""}>
                    {message.type === 'success' ? <Sparkles className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                    <AlertTitle>{message.type === 'success' ? "Success" : "Error"}</AlertTitle>
                    <AlertDescription>{message.text}</AlertDescription>
                </Alert>
            )}

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
            ) : content ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Segment List */}
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Session Segments</CardTitle>
                            <CardDescription>4 Segments per session</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {content.segments.map((seg, idx) => (
                                <button
                                    key={seg.id}
                                    onClick={() => { setActiveSegment(idx); setVideoFile(null); }}
                                    className={`w-full text-left p-4 rounded-xl border transition-all ${idx === activeSegment
                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-500"
                                        : "border-border hover:bg-muted"
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="font-semibold text-sm">Segment {seg.id}</span>
                                        {seg.video_url ? (
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                <VideoIcon className="w-3 h-3" /> Uploaded
                                            </span>
                                        ) : (
                                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Empty</span>
                                        )}
                                    </div>
                                    <div className="font-medium truncate">{seg.title}</div>
                                </button>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Right: Editor */}
                    <Card className="col-span-1 lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Edit Segment {activeSegment + 1}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Title</label>
                                <Input
                                    value={content.segments[activeSegment]?.title || ""}
                                    onChange={(e) => updateSegmentState('title', e.target.value)}
                                    placeholder="e.g. Introduction to Indus Valley"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Reference Notes / Key Points (Markdown)</label>
                                <Textarea
                                    value={content.segments[activeSegment]?.key_points || ""}
                                    onChange={(e) => updateSegmentState('key_points', e.target.value)}
                                    placeholder="Enter key points here..."
                                    className="min-h-[150px] font-mono text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Video Upload</label>
                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                                        className="hidden"
                                        id="video-upload-input"
                                    />
                                    <label htmlFor="video-upload-input" className="cursor-pointer">
                                        <VideoIcon className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                                        {videoFile ? (
                                            <p className="text-sm text-green-600 font-medium">{videoFile.name}</p>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">Click to select or drag video file</p>
                                        )}
                                    </label>
                                </div>
                                {content.segments[activeSegment]?.video_url && !videoFile && (
                                    <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                                        <VideoIcon className="w-4 h-4" />
                                        Current Video: <a href={content.segments[activeSegment].video_url} target="_blank" className="text-indigo-600 hover:underline">View Video</a>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-end pt-4 border-t">
                                <Button onClick={handleSaveSegment} disabled={saving} className="min-w-[150px]">
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                            Save Content
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : null}
        </div>
    );
}
