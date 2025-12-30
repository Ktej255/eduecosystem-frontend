"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, GripVertical, Search } from "lucide-react";
import learningPathService from "@/services/learningPathService";
import { LearningPath, PathCourse } from "@/types/learningPath";

interface Props {
    params: {
        id?: string;
    };
}

export default function CreateEditPathPage({ params }: Props) {
    const router = useRouter();
    const isEditMode = !!params.id;
    const [loading, setLoading] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        difficulty_level: "beginner",
        is_published: false,
    });

    // Courses State
    const [pathCourses, setPathCourses] = useState<PathCourse[]>([]);

    // Course Search State
    const [showCourseSearch, setShowCourseSearch] = useState(false);
    const [courseSearchTerm, setCourseSearchTerm] = useState("");
    const [availableCourses, setAvailableCourses] = useState<any[]>([]); // Should be Course type

    useEffect(() => {
        if (isEditMode && params.id) {
            loadPath(parseInt(params.id));
        }
    }, [isEditMode, params.id]);

    const loadPath = async (id: number) => {
        try {
            setLoading(true);
            const path = await learningPathService.getLearningPath(id);
            setFormData({
                title: path.title,
                description: path.description || "",
                difficulty_level: path.difficulty_level,
                is_published: path.is_published,
            });
            if (path.path_courses) {
                setPathCourses(path.path_courses);
            }
        } catch (error) {
            console.error("Failed to load path", error);
            alert("Failed to load learning path");
            router.push("/admin/learning-paths");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (isEditMode && params.id) {
                await learningPathService.updateLearningPath(parseInt(params.id), formData);
                alert("Path updated successfully!");
                router.push("/admin/learning-paths");
            } else {
                const newPath = await learningPathService.createLearningPath(formData);
                // Redirect to edit page to add courses
                router.push(`/admin/learning-paths/${newPath.id}`);
            }
        } catch (error) {
            console.error("Failed to save path", error);
            alert("Failed to save learning path");
        } finally {
            setLoading(false);
        }
    };

    // Placeholder for actual Course Search functionality
    const searchCourses = async () => {
        // Implement course search via existing Course Service or API
        // For now, mocking or need to import courseService
        console.log("Searching courses...", courseSearchTerm);
        // const results = await courseService.getCourses({ search: courseSearchTerm });
        // setAvailableCourses(results);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link
                        href="/admin/learning-paths"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 text-gray-500" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {isEditMode ? "Edit Learning Path" : "Create New Path"}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            {isEditMode ? "Update details and manage curriculum" : "Start by defining the basic details"}
                        </p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                    <Save className="h-4 w-4" />
                    <span>{loading ? "Saving..." : "Save Path"}</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Details Form */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2">
                            Basic Information
                        </h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Path Title
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500"
                                placeholder="e.g. UPSC 2025 Comprehensive Plan"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Description
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 h-32"
                                placeholder="Describe the goal of this path..."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Difficulty Level
                                </label>
                                <select
                                    value={formData.difficulty_level}
                                    onChange={(e) => setFormData({ ...formData, difficulty_level: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>

                            <div className="flex items-center pt-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.is_published}
                                        onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                                        className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
                                    />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Publish immediately
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Course Management (Only visible in Edit Mode) */}
                    {isEditMode && (
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    Curriculum Sequence
                                </h2>
                                <button
                                    onClick={() => setShowCourseSearch(!showCourseSearch)}
                                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add Course
                                </button>
                            </div>

                            {/* Add Course Area */}
                            {showCourseSearch && (
                                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Search for a course to add..."
                                            className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm"
                                            value={courseSearchTerm}
                                            onChange={(e) => setCourseSearchTerm(e.target.value)}
                                        />
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm">
                                            Search
                                        </button>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-500 italic">
                                        * Search functionality requires integration with Course Service
                                    </div>
                                </div>
                            )}

                            {/* Course List */}
                            <div className="space-y-2">
                                {pathCourses.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                                        No courses added yet. Click "Add Course" to start building curriculum.
                                    </div>
                                ) : (
                                    pathCourses.map((item, index) => (
                                        <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-100 dark:border-gray-800 group">
                                            <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                                            <div className="h-8 w-8 rounded bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium text-sm text-gray-900 dark:text-gray-100">
                                                    {item.course?.title || `Course ID: ${item.course_id}`}
                                                </div>
                                            </div>
                                            <button className="p-2 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">Student Assignment</h3>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
                            This path is private by default. You must assign it to a student for them to see it.
                        </p>
                        {isEditMode ? (
                            <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                                Assign to Student
                            </button>
                        ) : (
                            <p className="text-xs text-indigo-500 italic">
                                Save the path first to enable assignment.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
