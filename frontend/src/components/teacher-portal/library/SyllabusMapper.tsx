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
import {
    FileText,
    Video,
    Folder,
    ChevronRight,
    ChevronDown,
    HelpCircle,
    GripVertical,
    Check
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Mock Data
type ContentType = "video" | "pdf";
interface OrphanContent {
    id: string;
    title: string;
    type: ContentType;
}

const initialOrphans: OrphanContent[] = [
    { id: "c1", title: "Intro to Plate Tectonics.mp4", type: "video" },
    { id: "c2", title: "Harappan Civilization Sites.pdf", type: "pdf" },
    { id: "c3", title: "Inflation Trends 2025.pdf", type: "pdf" },
    { id: "c4", title: "Cyber Security Basics.mp4", type: "video" },
    { id: "c5", title: "Ethics Case Study 4.pdf", type: "pdf" },
    { id: "c6", title: "Basic Structure Doctrine.mp4", type: "video" },
];

interface SyllabusNode {
    id: string;
    title: string;
    children?: SyllabusNode[];
    content: OrphanContent[];
    isOpen?: boolean;
}

const initialSyllabus: SyllabusNode[] = [
    {
        id: "gs1",
        title: "General Studies 1",
        content: [],
        isOpen: true,
        children: [
            { id: "gs1-hist", title: "History & Culture", content: [] },
            { id: "gs1-geo", title: "Geography", content: [] },
            { id: "gs1-soc", title: "Indian Society", content: [] },
        ]
    },
    {
        id: "gs2",
        title: "General Studies 2",
        content: [],
        isOpen: false,
        children: [
            { id: "gs2-pol", title: "Polity & Constitution", content: [] },
            { id: "gs2-gov", title: "Governance", content: [] },
            { id: "gs2-ir", title: "International Relations", content: [] },
        ]
    },
    {
        id: "gs3",
        title: "General Studies 3",
        content: [],
        isOpen: false,
        children: [
            { id: "gs3-eco", title: "Economy", content: [] },
            { id: "gs3-env", title: "Environment", content: [] },
            { id: "gs3-sci", title: "Science & Tech", content: [] },
            { id: "gs3-sec", title: "Security", content: [] },
        ]
    },
    {
        id: "gs4",
        title: "General Studies 4",
        content: [],
        isOpen: false,
        children: [
            { id: "gs4-eth", title: "Ethics & Integrity", content: [] },
            { id: "gs4-case", title: "Case Studies", content: [] },
        ]
    }
];

function DraggableContent({ id, title, type }: { id: string; title: string; type: ContentType }) {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: id,
        data: { title, type }
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={cn(
                "flex items-center gap-3 p-3 bg-card border border-border rounded-lg cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-all touch-none group",
                isDragging ? "opacity-50" : "opacity-100"
            )}
        >
            <GripVertical className="h-4 w-4 text-slate-300 group-hover:text-muted-foreground" />
            <div className={cn("p-2 rounded-md shrink-0", type === 'video' ? 'bg-blue-100' : 'bg-red-100')}>
                {type === 'video' ? <Video className="h-4 w-4 text-blue-600" /> : <FileText className="h-4 w-4 text-red-600" />}
            </div>
            <span className="text-sm font-medium truncate text-muted-foreground">{title}</span>
        </div>
    );
}

function SyllabusBranch({ node, depth = 0, onToggle }: { node: SyllabusNode; depth?: number; onToggle: (id: string) => void }) {
    const { setNodeRef, isOver } = useDroppable({
        id: node.id,
        data: { type: 'node' }
    });

    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="select-none">
            <div
                ref={setNodeRef}
                className={cn(
                    "flex items-center gap-2 p-2 rounded-lg transition-colors border border-transparent",
                    isOver ? "bg-emerald-100 dark:bg-emerald-900/30 border-emerald-400" : "hover:bg-muted dark:hover:bg-slate-800/50"
                )}
                style={{ marginLeft: `${depth * 20}px` }}
            >
                <div
                    className="p-1 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 rounded"
                    onClick={() => hasChildren && onToggle(node.id)}
                >
                    {hasChildren ? (
                        node.isOpen ? <ChevronDown className="h-4 w-4 text-muted-foreground" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    ) : <span className="w-4 h-4 block" />}
                </div>

                <Folder className={cn("h-4 w-4", hasChildren ? "text-amber-500" : "text-indigo-400")} />
                <span className="text-sm font-medium text-muted-foreground flex-1">{node.title}</span>

                {node.content.length > 0 && (
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                        {node.content.length}
                    </span>
                )}
            </div>

            {/* Mapped Content List */}
            {node.isOpen && node.content.length > 0 && (
                <div className="ml-[44px] space-y-1 mb-2">
                    {node.content.map(c => (
                        <div key={c.id} className="flex items-center gap-2 text-xs text-muted-foreground p-1 pl-2 border-l-2 border-border">
                            {c.type === 'video' ? <Video className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                            <span className="truncate">{c.title}</span>
                            <Check className="h-3 w-3 text-green-500 ml-auto" />
                        </div>
                    ))}
                </div>
            )}

            {node.isOpen && node.children?.map(child => (
                <SyllabusBranch key={child.id} node={child} depth={depth + 1} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default function SyllabusMapper() {
    const [orphans, setOrphans] = useState(initialOrphans);
    const [syllabus, setSyllabus] = useState(initialSyllabus);
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggleNode = (id: string) => {
        const toggleRecursive = (nodes: SyllabusNode[]): SyllabusNode[] => {
            return nodes.map(node => {
                if (node.id === id) {
                    return { ...node, isOpen: !node.isOpen };
                }
                if (node.children) {
                    return { ...node, children: toggleRecursive(node.children) };
                }
                return node;
            });
        };
        setSyllabus(toggleRecursive(syllabus));
    };

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active) {
            const nodeId = over.id as string;
            const contentId = active.id as string;
            const contentItem = orphans.find(o => o.id === contentId);

            if (contentItem) {
                // Add to node
                const addToNode = (nodes: SyllabusNode[]): SyllabusNode[] => {
                    return nodes.map(node => {
                        if (node.id === nodeId) {
                            return { ...node, content: [...node.content, contentItem], isOpen: true };
                        }
                        if (node.children) {
                            return { ...node, children: addToNode(node.children) };
                        }
                        return node;
                    });
                };

                setSyllabus(addToNode(syllabus));
                // Remove from orphans
                setOrphans(orphans.filter(o => o.id !== contentId));
            }
        }
        setActiveId(null);
    };

    const activeItem = orphans.find(o => o.id === activeId);

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
                {/* Orphans Panel */}
                <div className="md:col-span-4 flex flex-col gap-4">
                    <Card className="h-full border-border bg-amber-50/50 dark:bg-amber-950/10">
                        <CardHeader className="pb-3 border-b border-amber-100 dark:border-amber-900/20">
                            <CardTitle className="text-sm font-bold uppercase tracking-wider text-amber-600 flex items-center gap-2">
                                <HelpCircle className="h-4 w-4" />
                                Orphaned Content
                                <span className="ml-auto bg-amber-200 text-amber-800 text-xs px-2 py-0.5 rounded-full">{orphans.length}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 p-4 overflow-y-auto max-h-[500px]">
                            {orphans.length === 0 ? (
                                <div className="text-center py-10 text-muted-foreground text-sm">
                                    All content mapped! 🎉
                                </div>
                            ) : (
                                orphans.map((item) => (
                                    <DraggableContent key={item.id} id={item.id} title={item.title} type={item.type} />
                                ))
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Syllabus Tree Panel */}
                <div className="md:col-span-8 flex flex-col gap-4">
                    <Card className="h-full border-border">
                        <CardHeader className="pb-3 border-b border-slate-100">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                    <Folder className="h-4 w-4" />
                                    Syllabus Tree
                                </CardTitle>
                                <div className="text-xs text-muted-foreground">
                                    Drag items from left to map them
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 overflow-y-auto max-h-[500px]">
                            <div className="space-y-1">
                                {syllabus.map((node) => (
                                    <SyllabusBranch key={node.id} node={node} onToggle={toggleNode} />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <DragOverlay>
                {activeId && activeItem ? (
                    <div className="flex items-center gap-3 p-3 bg-card border-2 border-emerald-500 rounded-lg shadow-xl cursor-grabbing w-[250px] opacity-90 rotate-3 z-50">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <div className={cn("p-2 rounded-md shrink-0", activeItem.type === 'video' ? 'bg-blue-100' : 'bg-red-100')}>
                            {activeItem.type === 'video' ? <Video className="h-4 w-4 text-blue-600" /> : <FileText className="h-4 w-4 text-red-600" />}
                        </div>
                        <span className="text-sm font-medium truncate text-foreground">{activeItem.title}</span>
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
}
