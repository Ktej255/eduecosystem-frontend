"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Search, BookOpen, Users, MoreVertical, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import learningPathService from "@/services/learningPathService";
import { LearningPath } from "@/types/learningPath";

export default function LearningPathsPage() {
    const [paths, setPaths] = useState<LearningPath[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadPaths();
    }, []);

    const loadPaths = async () => {
        try {
            setLoading(true);
            const data = await learningPathService.getLearningPaths();
            setPaths(data);
        } catch (error) {
            console.error("Failed to load learning paths", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this learning path?")) {
            try {
                await learningPathService.deleteLearningPath(id);
                loadPaths(); // Refresh list
            } catch (error) {
                console.error("Failed to delete path", error);
                alert("Failed to delete path");
            }
        }
    };

    const filteredPaths = paths.filter(path =>
        path.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Learning Paths</h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">Manage customized student learning sequences</p>
                </div>
                <Link
                    href="/admin/learning-paths/new"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <Plus className="h-4 w-4" />
                    <span>Create New Path</span>
                </Link>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search paths..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-muted focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* List */}
            <div className="bg-card rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted border-b border-border">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">Path Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">Created</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border dark:divide-gray-700">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">Loading...</td>
                                </tr>
                            ) : filteredPaths.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">No learning paths found.</td>
                                </tr>
                            ) : (
                                filteredPaths.map((path) => (
                                    <tr key={path.id} className="hover:bg-muted dark:hover:bg-gray-800/50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                                    <BookOpen className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <div className="font-medium text-foreground">{path.title}</div>
                                                    <div className="text-xs text-muted-foreground capitalize">{path.difficulty_level}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                            {format(new Date(path.created_at), "MMM d, yyyy")}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <span className={`px-2 py-1 text-xs rounded-full ${path.is_published
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                                }`}>
                                                {path.is_published ? "Published" : "Draft"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/learning-paths/${path.id}`}
                                                    className="p-2 text-muted-foreground hover:text-indigo-600 transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(path.id)}
                                                    className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
