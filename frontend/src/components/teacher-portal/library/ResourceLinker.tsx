"use client";

import { useState } from "react";
import {
    DndContext,
    DragOverlay,
    useDraggable,
    useDroppable,
    DragEndEvent,
    DragStartEvent
} from "@dnd-kit/core";
import { FileText, Video, Link as LinkIcon, GripVertical, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Mock Data
const initialResources = [
    { id: "res-1", title: "Polity Ch 1 Notes.pdf", type: "pdf" },
    { id: "res-2", title: "River Systems Map.pdf", type: "pdf" },
    { id: "res-3", title: "Budget 2026 Summary.pdf", type: "pdf" },
    { id: "res-4", title: "History Timeline.pdf", type: "pdf" },
];

const initialVideos = [
    { id: "vid-1", title: "Making of Constitution", linked: [] as string[] },
    { id: "vid-2", title: "Indian Drainage System", linked: [] as string[] },
    { id: "vid-3", title: "Union Budget Explained", linked: [] as string[] },
];

function DraggableResource({ id, title }: { id: string; title: string }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: id,
        data: { title }
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "flex items-center gap-3 p-3 bg-card border border-border rounded-lg cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-all touch-none",
                isDragging ? "opacity-50" : "opacity-100"
            )}
        >
            <GripVertical className="h-4 w-4 text-muted-foreground" />
            <div className="p-2 bg-red-100 rounded-md">
                <FileText className="h-4 w-4 text-red-600" />
            </div>
            <span className="text-sm font-medium truncate">{title}</span>
        </div>
    );
}

function DroppableVideo({ id, title, linkedItems, resources }: { id: string; title: string; linkedItems: string[]; resources: any[] }) {
    const { setNodeRef, isOver } = useDroppable({
        id: id,
    });

    return (
        <div
            ref={setNodeRef}
            className={cn(
                "border-2 border-dashed rounded-xl p-4 transition-colors min-h-[120px] flex flex-col gap-2",
                isOver ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" : "border-border bg-slate-50/50/50"
            )}
        >
            <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-md shrink-0">
                    <Video className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                    <h4 className="font-semibold text-sm text-foreground">{title}</h4>
                    <p className="text-xs text-muted-foreground">{linkedItems.length} resources linked</p>
                </div>
            </div>

            {linkedItems.length > 0 && (
                <div className="space-y-2 mt-auto">
                    {linkedItems.map(itemId => {
                        const item = resources.find(r => r.id === itemId);
                        return (
                            <div key={itemId} className="flex items-center gap-2 text-xs bg-card p-2 rounded border border-slate-100">
                                <LinkIcon className="h-3 w-3 text-indigo-500" />
                                <span className="truncate flex-1">{item?.title || "Unknown Resource"}</span>
                                <Check className="h-3 w-3 text-green-500" />
                            </div>
                        );
                    })}
                </div>
            )}

            {linkedItems.length === 0 && !isOver && (
                <div className="mt-auto text-center py-2 text-xs text-muted-foreground">
                    Drop PDFs here to link
                </div>
            )}
        </div>
    );
}

export default function ResourceLinker() {
    const [resources, setResources] = useState(initialResources);
    const [videos, setVideos] = useState(initialVideos);
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active) {
            const videoId = over.id as string;
            const resourceId = active.id as string;

            // Check if already linked
            const video = videos.find(v => v.id === videoId);
            if (video && !video.linked.includes(resourceId)) {
                setVideos(videos.map(v => {
                    if (v.id === videoId) {
                        return { ...v, linked: [...v.linked, resourceId] };
                    }
                    return v;
                }));

                // Optional: Remove from available list if needed, but keeping it allows reuse
            }
        }
        setActiveId(null);
    };

    const activeResource = resources.find(r => r.id === activeId);

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px]">
                {/* Resources Panel */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <Card className="h-full border-border bg-muted">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Unlinked Resources
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 overflow-y-auto max-h-[400px]">
                            {resources.map((res) => (
                                <DraggableResource key={res.id} id={res.id} title={res.title} />
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Videos Panel */}
                <div className="md:col-span-8 flex flex-col gap-4">
                    <Card className="h-full border-border">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Video className="h-4 w-4" />
                                Video Lessons
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[400px]">
                            {videos.map((vid) => (
                                <DroppableVideo
                                    key={vid.id}
                                    id={vid.id}
                                    title={vid.title}
                                    linkedItems={vid.linked}
                                    resources={resources}
                                />
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <DragOverlay>
                {activeId && activeResource ? (
                    <div className="flex items-center gap-3 p-3 bg-card border-2 border-indigo-500 rounded-lg shadow-xl cursor-grabbing w-[250px] opacity-90 rotate-3">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <div className="p-2 bg-red-100 rounded-md">
                            <FileText className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-sm font-medium truncate">{activeResource.title}</span>
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
