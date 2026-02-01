"use client";

import { useState } from "react";
import {
    Save,
    Search,
    Filter,
    CheckSquare,
    Edit3,
    Trash2,
    Upload,
    MoreHorizontal,
    FileText,
    Video,
    File
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ContentItem {
    id: string;
    title: string;
    type: "video" | "pdf" | "quiz";
    tags: string[];
    status: "published" | "draft" | "review";
    lastModified: string;
}

const initialData: ContentItem[] = [
    { id: "1", title: "Polity Chapter 1: Constitution", type: "video", tags: ["Polity", "GS-2"], status: "published", lastModified: "2h ago" },
    { id: "2", title: "Geography: River Systems Map", type: "pdf", tags: ["Geography", "GS-1"], status: "published", lastModified: "5h ago" },
    { id: "3", title: "Economy: Budget 2026 Analysis", type: "video", tags: ["Economy", "Current Affairs"], status: "draft", lastModified: "1d ago" },
    { id: "4", title: "History: Modern India Timeline", type: "pdf", tags: ["History", "GS-1"], status: "review", lastModified: "2d ago" },
    { id: "5", title: "Environment: COP30 Summary", type: "pdf", tags: ["Environment", "GS-3"], status: "published", lastModified: "3d ago" },
];

export default function BulkContentEditor() {
    const [data, setData] = useState<ContentItem[]>(initialData);
    const [selected, setSelected] = useState<string[]>([]);
    const [search, setSearch] = useState("");

    const toggleSelect = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selected.length === data.length) {
            setSelected([]);
        } else {
            setSelected(data.map(item => item.id));
        }
    };

    const handleBulkStatusChange = (status: "published" | "draft") => {
        setData(data.map(item =>
            selected.includes(item.id) ? { ...item, status } : item
        ));
        setSelected([]);
    };

    const getIcon = (type: string) => {
        switch (type) {
            case "video": return <Video className="h-4 w-4 text-blue-500" />;
            case "pdf": return <FileText className="h-4 w-4 text-red-500" />;
            default: return <File className="h-4 w-4 text-gray-500" />;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "published": return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Published</Badge>;
            case "draft": return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">Draft</Badge>;
            case "review": return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">Review</Badge>;
            default: return null;
        }
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search content..."
                            className="pl-9 bg-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                        <Filter className="h-4 w-4 text-slate-500" />
                    </Button>
                </div>

                {selected.length > 0 && (
                    <div className="flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <span className="text-sm font-medium text-slate-600 mr-2">{selected.length} selected</span>
                        <Button size="sm" variant="outline" onClick={() => handleBulkStatusChange("published")} className="text-green-600 border-green-200 hover:bg-green-50">
                            <Upload className="h-3 w-3 mr-2" /> Publish
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleBulkStatusChange("draft")} className="text-slate-600">
                            <File className="h-3 w-3 mr-2" /> Draft
                        </Button>
                        <Button size="sm" variant="destructive">
                            <Trash2 className="h-3 w-3 mr-2" /> Delete
                        </Button>
                    </div>
                )}
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[50px]">
                                <Checkbox
                                    checked={selected.length === data.length && data.length > 0}
                                    onCheckedChange={toggleSelectAll}
                                />
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Modified</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <TableCell>
                                    <Checkbox
                                        checked={selected.includes(item.id)}
                                        onCheckedChange={() => toggleSelect(item.id)}
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        {item.status === 'draft' && <div className="w-2 h-2 rounded-full bg-slate-300" />}
                                        {item.status === 'published' && <div className="w-2 h-2 rounded-full bg-green-500" />}
                                        {item.status === 'review' && <div className="w-2 h-2 rounded-full bg-amber-500" />}
                                        {item.title}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {getIcon(item.type)}
                                        <span className="capitalize text-slate-500">{item.type}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>{getStatusBadge(item.status)}</TableCell>
                                <TableCell className="text-slate-500 text-sm">{item.lastModified}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-slate-600">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem><Edit3 className="h-3 w-3 mr-2" /> Edit Details</DropdownMenuItem>
                                            <DropdownMenuItem><Upload className="h-3 w-3 mr-2" /> Publish</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600"><Trash2 className="h-3 w-3 mr-2" /> Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
                <span>Showing {data.length} items</span>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                    <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
            </div>
        </div>
    );
}
