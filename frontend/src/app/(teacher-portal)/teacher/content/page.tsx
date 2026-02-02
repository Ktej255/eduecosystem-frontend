"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
    ArrowLeft, Video, FileText, Clock, Eye, Search,
    Upload, Trash2, Edit2, ExternalLink, Filter, Sparkles, BrainCircuit
} from "lucide-react";
import SyllabusGenerator from "@/components/teacher-portal/ai-content/SyllabusGenerator";
import AdaptiveTestCreator from "@/components/teacher-portal/ai-content/AdaptiveTestCreator";

interface ContentItem {
    id: number;
    type: "video" | "pdf";
    title: string;
    cycle_id: number;
    day_number: number;
    uploaded_at: string;
    views?: number;
    url?: string;
}

export default function TeacherContentPage() {
    const [content, setContent] = useState<ContentItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState<"all" | "video" | "pdf">("all");

    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com/api/v1";

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_BASE}/batch1/segments`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                // Transform segments into content items
                const items: ContentItem[] = [];
                data.forEach((segment: any) => {
                    if (segment.video_url || segment.video_link) {
                        items.push({
                            id: segment.id * 2,
                            type: "video",
                            title: `Cycle ${segment.cycle_id} Day ${segment.day_number} - Video`,
                            cycle_id: segment.cycle_id,
                            day_number: segment.day_number,
                            uploaded_at: segment.updated_at || new Date().toISOString(),
                            url: segment.video_url || segment.video_link
                        });
                    }
                    if (segment.pdf_url || segment.pdf_data) {
                        items.push({
                            id: segment.id * 2 + 1,
                            type: "pdf",
                            title: `Cycle ${segment.cycle_id} Day ${segment.day_number} - PDF`,
                            cycle_id: segment.cycle_id,
                            day_number: segment.day_number,
                            uploaded_at: segment.updated_at || new Date().toISOString(),
                            url: segment.pdf_url
                        });
                    }
                });
                setContent(items);
            }
        } catch (error) {
            console.error("Failed to fetch content:", error);
        } finally {
            setLoading(false);
        }
    };

    // Filter content
    let filteredContent = content.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filterType !== "all") {
        filteredContent = filteredContent.filter(c => c.type === filterType);
    }

    const videoCount = content.filter(c => c.type === "video").length;
    const pdfCount = content.filter(c => c.type === "pdf").length;

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/teacher/dashboard">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                            Content & Curriculum
                        </h1>
                        <p className="text-gray-500 text-sm">Manage library and AI generation</p>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="library" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                    <TabsTrigger value="library">Library</TabsTrigger>
                    <TabsTrigger value="syllabus">AI Syllabus</TabsTrigger>
                    <TabsTrigger value="tests">AI Tests</TabsTrigger>
                </TabsList>

                <TabsContent value="library" className="space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                            <CardContent className="p-4">
                                <FileText className="h-6 w-6 mb-2 opacity-80" />
                                <p className="text-2xl font-bold">{content.length}</p>
                                <p className="text-xs text-blue-100">Total Content</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                            <CardContent className="p-4">
                                <Video className="h-6 w-6 mb-2 opacity-80" />
                                <p className="text-2xl font-bold">{videoCount}</p>
                                <p className="text-xs text-purple-100">Videos</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                            <CardContent className="p-4">
                                <FileText className="h-6 w-6 mb-2 opacity-80" />
                                <p className="text-2xl font-bold">{pdfCount}</p>
                                <p className="text-xs text-orange-100">PDFs</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Search content..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant={filterType === "all" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterType("all")}
                            >
                                All
                            </Button>
                            <Button
                                variant={filterType === "video" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterType("video")}
                                className="gap-1"
                            >
                                <Video className="h-3 w-3" /> Videos
                            </Button>
                            <Button
                                variant={filterType === "pdf" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFilterType("pdf")}
                                className="gap-1"
                            >
                                <FileText className="h-3 w-3" /> PDFs
                            </Button>
                        </div>
                    </div>

                    {/* Content List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Uploaded Content ({filteredContent.length})</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <div className="flex items-center justify-center p-8">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {filteredContent.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-sm transition">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.type === "video" ? "bg-purple-100 text-purple-600" : "bg-orange-100 text-orange-600"}`}>
                                                    {item.type === "video" ? <Video className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-gray-200">{item.title}</p>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {new Date(item.uploaded_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Badge className={item.type === "video" ? "bg-purple-100 text-purple-700" : "bg-orange-100 text-orange-700"}>
                                                    {item.type.toUpperCase()}
                                                </Badge>
                                                {item.url && (
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                        <Button variant="outline" size="sm">
                                                            <ExternalLink className="h-4 w-4" />
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {filteredContent.length === 0 && (
                                        <div className="text-center py-8 text-gray-500">
                                            <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                            <p>No content found</p>
                                            <Link href="/teacher/batch1">
                                                <Button className="mt-4" size="sm">
                                                    <Upload className="h-4 w-4 mr-2" /> Upload Content
                                                </Button>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="syllabus">
                    <SyllabusGenerator />
                </TabsContent>

                <TabsContent value="tests">
                    <AdaptiveTestCreator />
                </TabsContent>
            </Tabs>
        </div>
    );
}
